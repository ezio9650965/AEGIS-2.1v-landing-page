import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const PORT = 3000;

// Lazy initialization / singleton for GoogleGenAI
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not set. Chat features will prompt user if key missing.');
    }
    genAIClient = new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

const AEGIS_SYSTEM_INSTRUCTION = `You are the AEGIS 2.1v Intelligence & Security Architecture AI, the official technical advisor for the AEGIS Zero-Trust Gateway and Managed SOC platform.
Your primary source of truth is the AEGIS 2.1v specification repository at https://github.com/ezio9650965/AEGIS-2.1v-overview.git, augmented with industry-standard Zero-Trust cybersecurity frameworks (NIST SP 800-207, Google BeyondCorp, OWASP, MITRE ATT&CK, ISO 27001).

# Core Knowledge & Technical Capabilities:
1. Architectural Model:
   - Fail-Closed Identity Reverse Proxy: Upstream microservices, internal tools, and databases have no direct public IP or routable interfaces.
   - Per-Request Evaluation: Every HTTP/HTTPS & TCP request is evaluated for identity, cryptographic token, device posture, and granular role entitlements before proxying.
   - Blast Radius Reduction: Even with stolen credentials, an attacker is strictly confined to the explicit AD group resource path without lateral movement.

2. Core Component Stack:
   - Traefik v3: Edge TLS 1.3 termination, forward-auth check dispatch with < 2ms latency overhead.
   - Authelia: Forward-authentication gateway evaluating Argon2id credentials, TOTP, WebAuthn/FIDO2 hardware keys, and single-sign-on sessions.
   - Keycloak: Enterprise Identity Provider (IdP) syncing with Active Directory, LDAP, Google Workspace, and Azure AD with granular RBAC and OIDC token issuance.
   - Coraza WAF + OWASP CRS v4: Layer 7 deep payload inspection blocking SQLi, XSS, command injection, and zero-day exploits before reaching origin services.
   - Wazuh SIEM & Sysmon EDR: Centralized log aggregation, telemetry behavioral anomaly tracking, continuous session risk scoring.
   - SOAR Active Response: Automated sub-5-second threat containment engine that revokes compromised user sessions globally and applies kernel firewall host isolation.

3. MSSP 2-Tier Service Tiering:
   - Tier 1 (AEGIS Dedicated MSSP SOC): 24/7 SIEM monitoring, threat hunting, continuous vulnerability patching, live incident containment (< 5 min response SLA).
   - Tier 2 (Client IT / DevOps Portal): Employee onboarding/offboarding, role assignment in Keycloak, app-by-app routing configuration, compliance audit reporting.

4. Onboarding & Migration:
   - 4-Phase Migration Roadmap (Gateway deployment -> Pilot testing -> General workload onboarding -> VPN/Perimeter decommissioning) with zero user-side VPN client software required.

Tone & Style:
- Authoritative, precise, security-focused, and friendly.
- Format responses cleanly with markdown headings, bullet points, code snippets, or configuration tables when relevant.
- Provide concrete architecture advice, config samples (e.g. Traefik middlewares, Authelia access control rules, Keycloak OIDC scopes, Wazuh rules), and threat mitigation tactics.
- Reference the GitHub repository (https://github.com/ezio9650965/AEGIS-2.1v-overview.git) whenever discussing the authoritative specifications or repository documentation.`;

async function startServer() {
  const app = express();
  app.use(express.json());

  // API endpoint for multi-turn Gemini chat
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, model = 'gemini-3.5-flash', customInstruction } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required and must not be empty.' });
      }

      // Check if API key exists
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({
          error: 'GEMINI_API_KEY environment variable is not configured.',
          code: 'MISSING_API_KEY'
        });
      }

      const validModels = ['gemini-3.5-flash', 'gemini-3.1-pro-preview', 'gemini-3.1-flash-lite', 'gemini-3.7-flash'];
      const selectedModel = validModels.includes(model) ? model : 'gemini-3.5-flash';

      const ai = getGenAI();

      // Format conversation history for @google/genai
      const contents = messages.map((m: { role: string; text: string }) => ({
        role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }],
      }));

      const systemInstruction = customInstruction
        ? `${AEGIS_SYSTEM_INSTRUCTION}\n\nAdditional User Focus: ${customInstruction}`
        : AEGIS_SYSTEM_INSTRUCTION;

      const response = await ai.models.generateContent({
        model: selectedModel,
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
          topP: 0.95,
        },
      });

      return res.json({
        text: response.text || '',
        model: selectedModel,
      });
    } catch (error: any) {
      console.error('Gemini chat error:', error);
      return res.status(500).json({
        error: error?.message || 'Failed to generate response from Gemini AI.',
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasApiKey: !!process.env.GEMINI_API_KEY,
      timestamp: new Date().toISOString(),
    });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AEGIS Zero-Trust Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
