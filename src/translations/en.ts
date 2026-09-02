import { UIContent } from './types';
import { COMPARISON_DATA, ROLE_EXPERIENCES, ONBOARDING_STEPS, INSTALLATION_STEPS, QA_ITEMS } from '../data';

export const enContent: UIContent = {
  nav: {
    architecture: 'Architecture',
    howItWorks: 'How It Works',
    comparison: 'Comparison',
    roleExperience: 'Role Experience',
    msspSoc: 'MSSP SOC',
    onboarding: 'Onboarding',
    qa: 'Q&A',
    architectureReview: 'Architecture Review',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    githubSpec: 'GitHub Spec',
    language: 'Language',
    lastUpdated: 'Updated Sep 2026',
  },
  hero: {
    badgeVersion: 'AEGIS 2.1v',
    badgeCategory: 'Zero-Trust Gateway & MSSP SOC',
    titlePart1: 'Perimeter Firewalls Leave Blindspots.',
    titleHighlight: 'Zero-Trust Isolation',
    titlePart2: 'Eliminates Them.',
    subtitle: 'AEGIS replaces implicit network trust with continuous per-request identity verification. Built on a battle-tested reverse proxy gateway and backed by 24/7 Managed SOC containment, we protect internal tools and databases against lateral movement with zero client VPN friction.',
    guarantee1: 'Zero Trust per HTTP/TCP Request',
    guarantee2: 'Micro-segmented Kernel Isolation',
    guarantee3: '< 5s Automated Threat Containment',
    guarantee4: 'Zero Per-Seat SaaS Taxes',
    ctaPrimary: 'Request Architecture Review',
    ctaSecondary: 'See How It Works',
    reportLink: 'Read the Full Technical Report',
    openSourceNote: '* Built on open-source foundations (Traefik, Authelia, Keycloak, Wazuh, Sysmon). No proprietary lock-in.',
    liveTrafficStatus: 'LIVE INGRESS PIPELINE',
    activeSessions: 'Verified Sessions',
    avgLatency: 'Gateway Latency',
    containmentTime: 'Containment SLA',
  },
  theProblem: {
    badge: 'SECURITY PARADIGM FLAW',
    title: 'The Dangerous Illusion of the Castle-and-Moat Perimeter',
    subtitle: 'Traditional enterprise security assumes that anyone inside the physical office or connected to a corporate VPN is inherently trustworthy. Modern attackers exploit this exact architectural blindspot.',
    vulnerabilities: [
      {
        id: 'implicit-trust',
        title: 'Implicit Network Trust',
        subtitle: 'Once inside, everything is exposed',
        description: 'Firewalls and VPNs treat internal subnets as safe zones. An attacker with one compromised workstation can scan and access any unprotected internal port.',
        consequence: 'Full access to internal admin panels, databases, and microservices.',
        icon: 'ShieldOff'
      },
      {
        id: 'lateral-traversal',
        title: 'Uninspected Lateral Movement',
        subtitle: 'Zero internal traffic inspection',
        description: 'Perimeter appliances inspect incoming traffic at the edge, but completely ignore east-west traffic between internal servers and workstations.',
        consequence: 'Ransomware propagates across the entire subnet in seconds.',
        icon: 'Network'
      },
      {
        id: 'stolen-credentials',
        title: 'Credential & Session Hijacking',
        subtitle: 'Static login tokens without step-up auth',
        description: 'Once a user authenticates in the morning, their VPN or browser session is implicitly trusted for hours without re-verifying privileged resource requests.',
        consequence: 'Stolen cookies allow attackers to bypass standard firewalls completely.',
        icon: 'KeyRound'
      },
      {
        id: 'vpn-blindspots',
        title: 'Brittle & Costly VPN Infrastructures',
        subtitle: 'Poor employee experience & high maintenance',
        description: 'Legacy VPN clients introduce connection drops, heavy desktop agents, split-tunneling vulnerabilities, and unpredictable licensing fees.',
        consequence: 'Frustrated employees find insecure workarounds to bypass controls.',
        icon: 'AlertTriangle'
      }
    ]
  },
  whatAegisIs: {
    badge: 'ARCHITECTURAL FOUNDATION',
    title: 'What Is AEGIS 2.1v?',
    subtitle: 'AEGIS is an enterprise-grade, identity-aware application access gateway engineered to enforce NIST SP 800-207 Zero Trust Architecture across web applications, APIs, and databases.',
    summaryCardTitle: 'Fail-Closed Identity Reverse Proxy',
    summaryCardDesc: 'Upstream services do not exist on public routing tables. Every single incoming packet must authenticate cryptographically against Authelia and Keycloak before Traefik will establish a reverse-proxy upstream connection.',
    pillars: [
      {
        title: 'Identity-Aware Reverse Proxy',
        tag: 'Traefik + Authelia Core',
        description: 'Terminates TLS 1.3 at the network edge and intercepts every HTTP/HTTPS request, validating cryptographic session tokens in sub-2ms before proxying upstream.',
        tech: 'Traefik v3 / Authelia / OIDC'
      },
      {
        title: 'Centralized Identity & RBAC',
        tag: 'Keycloak Directory Sync',
        description: 'Connects directly to your corporate Active Directory, LDAP, or IdP with Argon2id password hashing and hardware-backed TOTP/WebAuthn MFA.',
        tech: 'Keycloak / Argon2id / FIDO2'
      },
      {
        title: 'Kernel-Level Micro-segmentation',
        tag: 'Zero Unrouted Interfaces',
        description: 'Databases, admin consoles, and microservices are isolated on private container networks with zero exposed host ports, eliminating lateral port-scanning.',
        tech: 'Docker Bridge / iptables / Coraza WAF'
      },
      {
        title: 'Continuous MSSP SOC Telemetry',
        tag: 'Wazuh & Sysmon Integration',
        description: 'Streams real-time process execution and gateway access logs into a dedicated Elasticsearch/Kibana SIEM with automated SOAR containment triggers.',
        tech: 'Wazuh EDR / Sysmon / MITRE ATT&CK'
      }
    ],
    defenseLayersTitle: 'Multi-Layer Defense in Depth',
    defenseLayers: [
      {
        name: 'Layer 1: Edge TLS & Ingress',
        role: 'Traefik Reverse Proxy',
        mechanism: 'Intercepts external domain routes, enforces HTTP/3 and TLS 1.3 ciphers, and queries auth middleware before upstream dispatch.'
      },
      {
        name: 'Layer 2: Identity & MFA Verification',
        role: 'Authelia + Keycloak OIDC',
        mechanism: 'Enforces MFA policies per path regex (^/admin.* -> two_factor). Verifies user status and group entitlements.'
      },
      {
        name: 'Layer 3: WAF & Application Shielding',
        role: 'Coraza / ModSecurity Engine',
        mechanism: 'Inspects payloads for OWASP Top 10 exploits (SQLi, XSS, SSRF, RCE) in real time before reaching origin services.'
      },
      {
        name: 'Layer 4: Endpoint & Host Telemetry',
        role: 'Wazuh Agent + Sysmon',
        mechanism: 'Monitors kernel process execution and detects lateral movement attempts; fires automatic session revocation alerts in < 5s.'
      }
    ]
  },
  howItWorks: {
    badge: 'INTERACTIVE INGRESS ENGINE',
    title: 'How AEGIS Evaluates Every Single Packet',
    subtitle: 'Simulate how incoming traffic is evaluated per-request through cryptographic identity validation, WAF inspection, and automated 24/7 SOC containment.',
    tabStandard: 'Standard Verified Ingress (User Flow)',
    tabContainment: 'Automated Threat Containment (Attack Flow)',
    standardSubtitle: 'Legitimate employee accessing an authorized internal microservice',
    containmentSubtitle: 'Compromised workstation attempting lateral movement and unauthorized privilege escalation',
    runSimulation: 'Run Live Verification',
    resetSimulation: 'Reset Pipeline',
    simulating: 'Processing Pipeline Verification...',
    simulationComplete: 'Pipeline Verification Completed',
    latencyBreakdown: 'HOP LATENCY BREAKDOWN',
    telemetryStream: 'LIVE GATEWAY & SIEM TELEMETRY STREAM',
    stages: [
      {
        id: 'stage-1',
        title: '1. Ingress TLS Interception',
        description: 'User requests internal resource (e.g. crm.zerotrust.lan). Traefik terminates TLS 1.3 and captures headers.',
        technicalDetails: 'Traefik Reverse Proxy parses host header, verifies client TLS cipher suite, and checks route middleware rules.',
        telemetryLog: '[TRAEFIK] [INGRESS] INCOMING_REQ method=GET host=crm.zerotrust.lan path=/dashboard client_ip=192.168.1.104 tls=TLS_1_3'
      },
      {
        id: 'stage-2',
        title: '2. Identity & Session Evaluation',
        description: 'Traefik queries Authelia verification endpoint. Validates session cookie, Active Directory group, and MFA status.',
        technicalDetails: 'Authelia checks cryptographic HMAC session token against Redis cache; confirms identity claims and group memberships.',
        telemetryLog: '[AUTHELIA] [AUTH_CHECK] user=karim.dev groups=["Developers"] session_valid=true mfa_status=TOTP_VERIFIED (0.84ms)'
      },
      {
        id: 'stage-3',
        title: '3. WAF & Policy Enforcement',
        description: 'Coraza WAF inspects request payload for OWASP Top 10 vulnerabilities; verifies path permissions against RBAC policy.',
        technicalDetails: 'Payload matches clean rule profile; path /dashboard is within permitted developer group scope; no re-auth required.',
        telemetryLog: '[CORAZA] [WAF] INSPECT_PAYLOAD status=CLEAN sqli_score=0 xss_score=0 policy_rule=ALLOW_DEVELOPERS'
      },
      {
        id: 'stage-4',
        title: '4. Micro-segmented Proxy Dispatch',
        description: 'Traefik forwards sanitized request to isolated upstream container over private bridge network; zero port exposure.',
        technicalDetails: 'Upstream container handles request; response stream piped back through Traefik TLS tunnel to client browser in < 2.2ms total.',
        telemetryLog: '[GATEWAY] [UPSTREAM_DISPATCH] target=http://internal_crm:8080 http_status=200 total_duration=2.18ms'
      }
    ],
    containmentStages: [
      {
        id: 'cont-1',
        title: '1. Suspicious Request Detection',
        description: 'Endpoint generates anomalous brute-force request or attempts to traverse unauthorized internal path (^/admin/secrets).',
        technicalDetails: 'Traefik intercepts request; Authelia identifies that user lacks required juiceshop-admins or devops group membership.',
        telemetryLog: '[AUTHELIA] [ACCESS_DENIED] user=compromised_host path=/admin/secrets policy=two_factor status=UNAUTHORIZED_GROUP'
      },
      {
        id: 'cont-2',
        title: '2. SIEM & Wazuh Detection Trigger',
        description: 'Wazuh agent on host detects suspicious credential injection or unusual shell spawn; streams alert to ELK SOC.',
        technicalDetails: 'Sysmon detects Event ID 1 (Process Create: mimikatz / powershell -enc); Wazuh triggers MITRE ATT&CK T1003 alert.',
        telemetryLog: '[WAZUH] [CRITICAL_ALERT] rule_id=100244 level=12 MITRE=T1003 description="Credential Dumping Pattern Detected"'
      },
      {
        id: 'cont-3',
        title: '3. Automated SOAR Containment (< 5s)',
        description: 'AEGIS automated response engine invalidates active user sessions globally and issues host network quarantine rule.',
        technicalDetails: 'Keycloak API called to revoke all refresh tokens; iptables drops host traffic at network edge; Authelia session blacklisted.',
        telemetryLog: '[SOAR] [CONTAINMENT_TRIGGER] target_user=compromised_host action=REVOKE_ALL_SESSIONS status=SUCCESS (duration=1.42s)'
      },
      {
        id: 'cont-4',
        title: '4. SOC Escalation & Blast Radius Locked',
        description: 'Blast radius is strictly locked. 24/7 MSSP SOC receives triage package with full forensic replay.',
        technicalDetails: 'Incident ticket automatically created in SOC portal with process lineage, origin IP, and forensic memory snapshot.',
        telemetryLog: '[MSSP_SOC] [INCIDENT_OPENED] ticket_id=INC-8492 severity=HIGH status=CONTAINED analyst_assigned=LEVEL_2_SOC'
      }
    ]
  },
  comparison: {
    badge: 'ARCHITECTURAL AUDIT',
    title: 'Defensible Technical Comparison',
    subtitle: 'Why traditional perimeter firewalls and legacy corporate VPNs leave fatal blindspots compared to the AEGIS Zero-Trust Gateway.',
    colPerimeter: 'Traditional Perimeter Firewall',
    colVpn: 'Corporate VPN (Implicit Trust)',
    colAegis: 'AEGIS Zero-Trust Gateway',
    perimeterVerdict: 'Inspects ports at the perimeter, but leaves internal networks completely vulnerable once breached.',
    vpnVerdict: 'Grants wide subnet routing upon login; compromised laptop can traverse the entire corporate LAN.',
    aegisVerdict: 'Evaluates identity per request; micro-segments upstream origins and contains live threats in seconds.',
    verdictLabel: 'Architectural Verdict',
    ctaButton: 'Schedule Discovery Session',
    supported: 'Full Support',
    partial: 'Partial / Static',
    unsupported: 'Vulnerable / Unsupported',
    rows: COMPARISON_DATA
  },
  zeroTrustModel: {
    badge: 'NIST SP 800-207 COMPLIANCE',
    title: 'The 5 Core Principles of Zero Trust Architecture',
    subtitle: 'How AEGIS translates rigorous cryptographic and architectural standards into practical, daily operational security.',
    nistRef: 'Aligned with NIST SP 800-207 Zero Trust Architecture & CISA Zero Trust Maturity Model 2.0',
    principles: [
      {
        title: '1. Never Trust, Always Verify',
        rule: 'No implicit trust based on network location',
        description: 'Physical presence on the office LAN or connection over a VPN confers zero inherent trust. Every single transaction is challenged.',
        howAegisEnforces: 'Traefik reverse proxy intercepts every HTTP/TCP call; queries Authelia and Keycloak before passing packets.'
      },
      {
        title: '2. Principle of Least Privilege',
        rule: 'Access granted only to what is required for the specific job',
        description: 'Users and service accounts are granted access only to the exact resource path required for their operational role.',
        howAegisEnforces: 'Active Directory group claims map to path-specific ACLs (^/admin.* vs /user); sensitive endpoints require step-up MFA.'
      },
      {
        title: '3. Assume Breach',
        rule: 'Design systems to contain and withstand active compromises',
        description: 'Operate under the assumption that an attacker has already bypassed the perimeter and has access to an internal machine.',
        howAegisEnforces: 'Micro-segmented container networks prevent lateral port scanning; upstream databases have no routable IP addresses.'
      },
      {
        title: '4. Continuous Evaluation & Telemetry',
        rule: 'Verification is dynamic, not a one-time morning login',
        description: 'Session posture, device health, and behavioral anomalies are evaluated continuously throughout the working day.',
        howAegisEnforces: 'Wazuh EDR and Sysmon stream real-time process events to ELK SIEM; anomalous behavior triggers immediate re-prompt.'
      },
      {
        title: '5. Automated Containment & Response',
        rule: 'Automated containment in seconds, not days',
        description: 'Threats must be neutralized automatically by policy before a human analyst can even open a ticket.',
        howAegisEnforces: 'Integrated SOAR engine kills active session tokens across Keycloak/Authelia in < 5s upon critical detection.'
      }
    ]
  },
  employeeExperience: {
    badge: 'FRICTIONLESS WORKFORCE SECURITY',
    title: 'The Employee Role Experience Matrix',
    subtitle: 'Zero Trust does not mean high user friction. Discover how different corporate roles interact with AEGIS throughout a normal working day.',
    tabRoles: 'Select Employee Persona:',
    typicalAccessLabel: 'Authorized Resource Paths (Permitted):',
    restrictedTargetsLabel: 'Restricted Resource Paths (Blocked at Gateway):',
    governanceTitle: 'Identity & Governance Note',
    dailyScheduleTitle: 'Typical Daily Activity & Security Ledger',
    frictionTitle: 'User Experience & Friction Factor',
    roles: ROLE_EXPERIENCES
  },
  onboarding: {
    badge: 'ONBOARDING WALKTHROUGH',
    title: 'Karim\'s Day-One Zero-Trust Journey',
    subtitle: 'Follow Karim, a newly hired developer, through his first Monday morning to see how AEGIS automates identity provisioning, TOTP enrollment, and offboarding with zero VPN frustration.',
    employeeName: 'Karim S.',
    employeeTitle: 'Senior Software Engineer (New Hire)',
    stepCountLabel: '8-Phase Lifecycle Walkthrough',
    actionLabel: 'Karim\'s Action:',
    securityMechanismLabel: 'Underlying Cryptographic & Gateway Mechanism:',
    keyTakeawayLabel: 'Defensible Engineering Principle:',
    steps: ONBOARDING_STEPS
  },
  serviceTiering: {
    badge: 'MSSP SOC SERVICE TIERS',
    title: 'Managed Security Operations & Incident Response',
    subtitle: 'Choose the level of 24/7 SOC monitoring, automated containment, and threat intelligence that fits your enterprise risk profile.',
    slaTitle: 'SLA & Response Time Commitments',
    slaSubtitle: 'Guaranteed containment response times backed by financial service level agreements.',
    tiers: [
      {
        name: 'Standard Gateway',
        tagline: 'Self-Managed Zero-Trust Core',
        coverage: 'Business Hours (8x5) Support',
        responseTime: '< 4 Hour Escalation',
        idealFor: 'Mid-sized businesses with internal IT engineers managing day-to-day operations.',
        features: [
          'Full AEGIS Reverse Proxy Gateway (Traefik v3)',
          'Authelia + Keycloak Centralized Identity & MFA',
          'Path-Level Access Control Lists (ACLs)',
          'Coraza WAF Core Rule Set Integration',
          'Standard Community Threat Intelligence Feeds',
          'Weekly Automated Security Health Summaries'
        ]
      },
      {
        name: 'Advanced SOC Tier',
        tagline: 'Continuous MSSP Monitoring',
        coverage: '24/7/365 Active SOC Monitoring',
        responseTime: '< 15 Minute Triage & Response',
        idealFor: 'Growing enterprises needing 24/7 human SOC triage without hiring full-time internal analysts.',
        features: [
          'Everything in Standard Gateway Tier',
          '24/7 Human SOC Analyst Alert Triage',
          'Wazuh EDR & Sysmon Telemetry Ingestion into ELK',
          'Automated SOAR Session Revocation (< 10s)',
          'MISP Commercial & Open-Source Threat Feed Correlation',
          'Curated IT & Management Executive Dashboards',
          'Monthly Threat Hunting & Posture Reviews'
        ],
        highlight: true
      },
      {
        name: 'Mission-Critical Defense',
        tagline: 'Active Containment & Dedicated Engineering',
        coverage: '24/7/365 Dedicated Falcon SOC Team',
        responseTime: '< 5 Minute Guaranteed Containment SLA',
        idealFor: 'Regulated financial, healthcare, and high-security enterprise environments.',
        features: [
          'Everything in Advanced SOC Tier',
          '< 5 Second Automated Host & Session Quarantine',
          'Dedicated Senior Threat Intelligence Lead',
          'Custom Coraza WAF Rule Engineering per Microservice',
          'Red Team Penetration Replay & Emulation Drills',
          'Direct Slack/Teams SOC Bridge & On-Call Incident Lead',
          'Quarterly NIST SP 800-207 Compliance Attestation Reports'
        ]
      }
    ]
  },
  socArchitecture: {
    badge: 'SOC & OPERATIONAL ARCHITECTURE',
    title: 'Engineered for Real-World Security Outcomes',
    subtitle: 'A transparent look into our 3-layer detection pipeline, dual-track containment philosophy, and the internal Zero-Trust controls protecting the SOC itself.',
    outcomes: {
      title: 'Built for Outcomes, Not Just Uptime',
      lead: 'What clients are actually paying for isn’t the software stack — detection, correlation, and threat-intel tooling are widely available across the industry. What you are buying is fewer false alarms, dedicated human eyes watching when your team is offline, and a contractually defined response time rather than a vague promise.',
      points: [
        {
          title: 'Radical Signal-to-Noise Ratio',
          description: 'We don’t measure success by the sheer volume of alerts logged. We measure it by the noise eliminated before it ever reaches an engineer’s screen.'
        },
        {
          title: 'Uninterrupted Human Vigilance',
          description: 'Real senior analysts monitoring telemetry 24/7/365, ensuring incidents occurring at 03:00 AM on a holiday are triaged with the same rigor as midday.'
        },
        {
          title: 'Enforceable Contractual SLAs',
          description: 'Explicit, legally binding containment and triage timeframes in your contract, replacing marketing claims with operational accountability.'
        }
      ],
      chart: {
        title: 'Empirical SOC Performance & Resolution Trends',
        subtitle: 'Live trailing metrics comparing AEGIS triage & containment speed against contractual SLAs and industry averages.',
        tabResponseTime: 'Response & Triage Time (Minutes)',
        tabResolutionTrends: 'Incident Resolution & Noise Filtering',
        tabThreatDensity: 'Live Threat Density Heatmap (Network Segments)',
        layoutStacked: 'Stacked View (Mobile-Ready)',
        layoutSplit: 'Split Dashboard',
        legendTooltipHint: 'Hover or tap any metric to inspect detailed SOC definitions & SLA standards',
        legendModalTitle: 'Metric Definition & SOC Operational Benchmark',
        kpis: [
          { label: 'MTTA (Acknowledge)', value: '< 45s', subtext: 'Contractual SLA: 5m', highlight: true },
          { label: 'MTTD (Mean Time to Detect)', value: '2.4 min', subtext: 'Industry Avg: 45 min' },
          { label: 'MTTC (Mean Time to Contain)', value: '4.1 min', subtext: 'Contractual SLA: 15m', highlight: true },
          { label: 'False-Positive Suppression', value: '99.4%', subtext: 'Noise eliminated before analyst' }
        ],
        responseTimeLabels: {
          mttd: 'AEGIS MTTD (Detection)',
          mttc: 'AEGIS MTTC (Containment)',
          slaTarget: 'Contractual SLA Ceiling',
          industryAvg: 'Industry Benchmark Average',
          unit: 'Minutes'
        },
        resolutionTrendsLabels: {
          rawAlerts: 'Raw Telemetry / Alerts Ingested (x100)',
          noiseFiltered: 'Noise Suppressed by Rules (x100)',
          realIncidents: 'Verified Incidents Triaged',
          resolvedSLA: 'Incidents Contained Within SLA',
          unit: 'Events'
        },
        threatDensityLabels: {
          title: 'Live Network Segment Threat Density Matrix',
          subtitle: 'Real-time telemetry showing detected anomaly density, honeypot triggers, and autonomous containment rate across core enterprise network segments over 24-hour cycles.',
          legendNominal: 'Nominal (0-20%)',
          legendElevated: 'Elevated (21-50%)',
          legendHigh: 'High (51-80%)',
          legendCritical: 'Critical / Attack Vector (81-100%)',
          filterAll: 'All Segments',
          densityMetric: 'Threat Density Index',
          eventsCount: 'Telemetry Events / Hour',
          blockedCount: 'Autonomous Edge Blocks',
          inspectedSegment: 'Inspected Segment Telemetry',
          statusOptimal: 'Optimal / No Active Breach',
          statusActiveMitigation: 'Active Threat Mitigation',
          timeWindows: ['00:00 - 04:00', '04:00 - 08:00', '08:00 - 12:00', '12:00 - 16:00', '16:00 - 20:00', '20:00 - 24:00'],
          segments: [
            { id: 'edge', name: 'Edge Ingress & DMZ', desc: 'Traefik reverse proxy, WAF rate limits & GeoIP filtration', agents: '12 Edge Nodes', containment: '100% Autonomous (Sub-2s)' },
            { id: 'iam', name: 'Identity & Access (IAM)', desc: 'Keycloak OIDC, Authelia 2FA & WebAuthn authentication', agents: '8 Auth Clusters', containment: '99.8% Autonomous Session Kill' },
            { id: 'k8s', name: 'Kubernetes Workloads', desc: 'Microservice pods, ingress controllers & service mesh', agents: '64 Pod Monitors', containment: 'Gated + Auto-Cordon' },
            { id: 'db', name: 'Core DB & Persistence', desc: 'PostgreSQL clusters, Vault secrets & cold audit storage', agents: '16 DB Guardrails', containment: 'Human Analyst Gated' },
            { id: 'endpoints', name: 'Corporate Endpoints & VPN', desc: 'Zero Trust LAN client devices, EDR Wazuh & Sysmon', agents: '280+ Endpoints', containment: 'Autonomous Subnet Quarantine' },
            { id: 'cicd', name: 'CI/CD & DevOps Pipeline', desc: 'Build runners, container registries & ephemeral workers', agents: '24 Runners', containment: 'Autonomous Ephemeral Kill' }
          ]
        },
        months: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
      }
    },
    pipeline: {
      title: 'Three Layers, One Job Each',
      subtitle: 'A strict unidirectional detection and response pipeline designed to eliminate false positives and enforce rigorous evidence verification.',
      layers: [
        {
          stepNumber: '01',
          name: 'Ingestion & Evidence',
          role: 'Durable & Immutable Audit Record',
          description: 'Every event lands here first, indexed and timestamped — the durable record, unaltered.',
          engineeringFocusLabel: 'Core Mandate:',
          engineeringFocus: 'Forensic integrity across Sysmon, Wazuh, Traefik edge logs, and authentication events with zero dropped frames.'
        },
        {
          stepNumber: '02',
          name: 'Detection & Correlation',
          role: 'Raw Telemetry Transformed into Decisions',
          description: 'Raw events become decisions. This is where engineering effort concentrates, because detection quality IS the product — a noisy rule that fires on harmless activity is worse than no rule, because it teaches analysts to ignore the dashboard.',
          engineeringFocusLabel: 'Engineering Focus:',
          engineeringFocus: 'High-fidelity behavioral correlation rules, eliminating alert fatigue and preventing analyst desensitization.'
        },
        {
          stepNumber: '03',
          name: 'Intelligence & Response',
          role: 'Contextual Enrichment & Validated Action',
          description: 'Enrichment against real threat intelligence, then action — deliberately last in the sequence, so nothing acts until it’s both detected AND confirmed as a genuine threat.',
          engineeringFocusLabel: 'Deliberate Sequence:',
          engineeringFocus: 'Multi-source threat feed verification (MISP, IOC databases) before triggering any containment workflow.'
        }
      ]
    },
    containmentStrategy: {
      badge: 'CONTAINMENT GOVERNANCE',
      title: 'Why We Don’t Auto-Respond to Everything',
      lead: 'Full autonomous response sounds impressive in a demo but is a liability in production — an automated system that isolates a client’s production database on a false positive causes the exact outage it was hired to prevent.',
      deliberateTrustNote: 'Our approach: automate the well-understood, low-risk cases; gate anything touching production-critical systems through human analyst confirmation, even at the cost of a few minutes of response time. This is a deliberate trust decision, not a technical limitation.',
      cards: [
        {
          type: 'automated',
          tag: 'Sub-5s Autonomous Execution',
          title: 'Automated Low-Risk Isolation',
          description: 'Scoped strictly to discrete, reversible credentials and edge barriers: revoking compromised user session tokens across Keycloak/Authelia, locking hijacked accounts, and blocking scanner IPs at the Traefik edge.',
          rationale: 'Neutralizes active credential theft instantly without impacting underlying business infrastructure or service availability.'
        },
        {
          type: 'gated',
          tag: 'Human Analyst Confirmed',
          title: 'Gated Production Containment',
          description: 'Any action touching production-critical databases, core server host isolation, hypervisors, or customer-facing application services requires human analyst verification and collaborative authorization.',
          rationale: 'Guarantees that an anomalous metric or novel payload does not trigger an automated self-inflicted business outage.'
        }
      ]
    },
    predictiveRisk: {
      badge: 'PREDICTIVE THREAT ESCALATION MODELING',
      title: 'Proactive Early Interception vs. Reactive Firefighting',
      subtitle: 'Simulate how subtle early-stage anomalies escalate into catastrophic enterprise breaches, and how AEGIS predictive correlation intercepts attacks before lateral movement occurs.',
      scenarioSelectLabel: 'Attack Escalation Scenario:',
      scenarios: [
        {
          id: 'credential-lateral',
          name: 'Identity Compromise & Lateral Movement',
          vector: 'Compromised VPN Credential -> Kerberoasting -> Domain Admin',
          target: 'Active Directory & Corporate Shared Storage',
          proactiveContainmentTime: '3.4 min (Pre-Lateral Pivot)',
          reactiveBreachTime: '72 min (Full Domain Takeover)',
          blastRadiusReduction: '97.5% Blast Radius Reduction',
          stages: [
            {
              phase: '1. Reconnaissance',
              timeLabel: 'T + 00m',
              unmitigatedRisk: 12,
              proactiveRisk: 8,
              description: 'Anomalous off-hours authentication with mismatched ASN fingerprint.',
              proactiveAction: 'Baseline anomaly tagged; device posture verified via WebAuthn challenge.'
            },
            {
              phase: '2. Initial Access',
              timeLabel: 'T + 05m',
              unmitigatedRisk: 34,
              proactiveRisk: 10,
              description: 'Internal port scan against LDAP/Kerberos service endpoints.',
              proactiveAction: 'Behavioral detection triggered; synthetic honeypot credentials deployed.'
            },
            {
              phase: '3. Lateral Movement',
              timeLabel: 'T + 18m',
              unmitigatedRisk: 68,
              proactiveRisk: 4,
              description: 'Ticket-granting service requests (TGS) with weak RC4 encryption.',
              proactiveAction: 'Proactive session kill & token revocation in sub-5s; edge ingress isolated.'
            },
            {
              phase: '4. Domain Compromise',
              timeLabel: 'T + 42m',
              unmitigatedRisk: 92,
              proactiveRisk: 0,
              description: 'Pass-the-Hash onto domain controller; shadow copies purged.',
              proactiveAction: 'Threat neutralized before domain controller contact; zero privilege escalation.'
            },
            {
              phase: '5. Data Exfiltration',
              timeLabel: 'T + 72m',
              unmitigatedRisk: 100,
              proactiveRisk: 0,
              description: 'Ransomware deployment and encrypted backup exfiltration.',
              proactiveAction: 'Complete incident report generated; root-cause remediation guidance dispatched.'
            }
          ]
        },
        {
          id: 'ransomware-staging',
          name: 'Ransomware Staging & Living-off-the-Land',
          vector: 'Phishing Payload -> PowerShell LOLBAS -> Shadow Copy Purge',
          target: 'Database Clusters & File Servers',
          proactiveContainmentTime: '4.1 min (Staging Blocked)',
          reactiveBreachTime: '55 min (Data Encrypted)',
          blastRadiusReduction: '99.1% Blast Radius Reduction',
          stages: [
            {
              phase: '1. Execution',
              timeLabel: 'T + 00m',
              unmitigatedRisk: 18,
              proactiveRisk: 12,
              description: 'Obfuscated PowerShell execution from temporary staging folder.',
              proactiveAction: 'Sysmon script block logging correlation flags malicious API hook.'
            },
            {
              phase: '2. Persistence',
              timeLabel: 'T + 08m',
              unmitigatedRisk: 42,
              proactiveRisk: 9,
              description: 'Scheduled task creation and registry Run key modification.',
              proactiveAction: 'Host agent freezes suspicious process tree; memory dump captured for forensics.'
            },
            {
              phase: '3. Defense Evasion',
              timeLabel: 'T + 22m',
              unmitigatedRisk: 75,
              proactiveRisk: 2,
              description: 'Attempted termination of endpoint AV services and volume shadow copy purge.',
              proactiveAction: 'Microsegmentation enforces network quarantine; host isolated from subnet.'
            },
            {
              phase: '4. Mass Encryption',
              timeLabel: 'T + 40m',
              unmitigatedRisk: 95,
              proactiveRisk: 0,
              description: 'Multi-threaded file encryption across local drives and network shares.',
              proactiveAction: 'Zero files encrypted; encryption keys never negotiated with C2 server.'
            },
            {
              phase: '5. Extortion Note',
              timeLabel: 'T + 55m',
              unmitigatedRisk: 100,
              proactiveRisk: 0,
              description: 'Ransom note displayed; secondary exfiltration channel engaged.',
              proactiveAction: 'Threat completely eliminated; business continuity unhindered.'
            }
          ]
        },
        {
          id: 'supply-chain-container',
          name: 'CI/CD Supply Chain & Container Escape',
          vector: 'Malicious NPM Dependency -> Kubernetes Service Token Abuse',
          target: 'Production Cloud Cluster & Secrets Store',
          proactiveContainmentTime: '2.8 min (Pre-Kubelet Pivot)',
          reactiveBreachTime: '38 min (Secrets Store Drained)',
          blastRadiusReduction: '98.8% Blast Radius Reduction',
          stages: [
            {
              phase: '1. Ingestion',
              timeLabel: 'T + 00m',
              unmitigatedRisk: 15,
              proactiveRisk: 10,
              description: 'Outbound HTTP beaconing from build worker to anomalous IP.',
              proactiveAction: 'Traefik edge firewall detects unauthorized egress protocol.'
            },
            {
              phase: '2. Privilege Probe',
              timeLabel: 'T + 04m',
              unmitigatedRisk: 48,
              proactiveRisk: 8,
              description: 'Mounted service account token used to query Kubernetes API server.',
              proactiveAction: 'RBAC violation intercepted; pod terminated and ephemeral volume destroyed.'
            },
            {
              phase: '3. Host Escape',
              timeLabel: 'T + 14m',
              unmitigatedRisk: 80,
              proactiveRisk: 1,
              description: 'Exploitation of kernel vulnerability to escape container namespace.',
              proactiveAction: 'Node cordon executed; runtime security policies prevent kernel pivot.'
            },
            {
              phase: '4. Secrets Draining',
              timeLabel: 'T + 28m',
              unmitigatedRisk: 96,
              proactiveRisk: 0,
              description: 'Mass dump of Vault credentials and cloud production access keys.',
              proactiveAction: 'Zero production secrets exposed; automated token rotation triggered.'
            },
            {
              phase: '5. Infrastructure Takeover',
              timeLabel: 'T + 38m',
              unmitigatedRisk: 100,
              proactiveRisk: 0,
              description: 'Full cloud organization compromised and crypto-mining deployed.',
              proactiveAction: 'Incident isolated to throwaway CI runner; production cluster untouched.'
            }
          ]
        }
      ],
      proactiveVsReactive: {
        proactiveTitle: 'AEGIS Proactive Early Interception',
        proactiveDescription: 'Early behavioral flags suppress attacks in stages 1–3 before adversaries gain lateral foothold or deploy disruptive payloads.',
        reactiveTitle: 'Traditional Reactive Defense',
        reactiveDescription: 'Alerts only trigger upon catastrophic impact (mass encryption, exfiltration), turning prevention into costly disaster recovery.'
      },
      metrics: [
        {
          label: 'Average Blast Radius Mitigation',
          value: '98.4%',
          detail: 'Isolated to origin endpoint without lateral pivot'
        },
        {
          label: 'Pre-Escalation Containment',
          value: '< 4.2 min',
          detail: 'Before administrative privilege escalation'
        },
        {
          label: 'Business Downtime Avoided',
          value: '100%',
          detail: 'No production database or host shutdowns'
        }
      ]
    },
    socSecurity: {
      badge: 'INTERNAL ZERO-TRUST CONTROLS',
      title: 'Security of the SOC Itself',
      lead: 'The SOC is itself a prime target — if it is compromised, an attacker doesn’t just see alerts, they can quietly suppress them. The same Zero-Trust discipline sold to clients is applied strictly to our own internal architecture.',
      pillars: [
        {
          title: 'Mandatory Hardware MFA',
          description: 'All analyst and engineer access to the SOC environment requires hardware-backed FIDO2/WebAuthn tokens and strict short-lived session authorization.'
        },
        {
          title: 'Component Network Microsegmentation',
          description: 'Air-gapped separation between SIEM storage nodes, ingestion pipelines, correlation workers, and client dashboard presentation layers.'
        },
        {
          title: 'Tamper-Evident Audit Logging',
          description: 'Append-only, immutable write-once audit trails ensuring even a compromised administrative component cannot quietly rewrite or purge history.'
        }
      ]
    },
    honestyCallout: {
      title: 'What We Tell You Honestly',
      subtitle: 'True operational confidence comes from transparency about architectural boundaries.',
      items: [
        {
          title: 'Software is not the SLA',
          description: 'Staffed human coverage is the actual SLA, and that is an explicit operational commitment, separate from the underlying technology.'
        },
        {
          title: 'Scoped Isolation & Redundancy',
          description: 'Redundancy and multi-tenant data isolation are scoped per engagement based on your specific compliance and risk requirements, not a generic one-size-fits-all claim.'
        }
      ]
    }
  },
  installation: {
    badge: 'DEPLOYMENT & INTEGRATION GUIDE',
    title: 'Zero-Disruption Integration in 6 Phased Steps',
    subtitle: 'AEGIS integrates incrementally without replacing your existing firewall hardware or disrupting business workflows. Follow the implementation blueprint from DNS cutover to continuous SOC containment.',
    stepPrefix: 'STEP',
    phaseOfLabel: 'PHASE',
    deliverablesLabel: 'CORE DELIVERABLES & GUARANTEES:',
    prevPhase: '← Prev Phase',
    nextPhase: 'Next Phase →',
    configPreviewLabel: 'Configuration Blueprint',
    validatedLabel: 'Validated Production Config',
    calloutTitle: 'Need Custom Architecture Mapping for Your Infrastructure?',
    calloutDesc: 'Our systems engineers will build your tailored route configuration and integration timeline during discovery.',
    calloutCta: 'Schedule Discovery Session',
    steps: INSTALLATION_STEPS
  },
  qa: {
    badge: 'BUSINESS & SECURITY FAQ',
    title: 'Honest Answers to Tough Architecture Questions',
    subtitle: 'Deep technical, financial, and operational clarifications for CISOs, IT Directors, and Systems Architects.',
    searchPlaceholder: 'Search architecture, VPNs, PfSense, SSO, Okta, latency, developers...',
    allCategories: 'All Categories',
    noResults: 'No matching architectural questions found. Try a different search term.',
    keyTakeawayLabel: 'Key Architectural Takeaway:',
    expandAll: 'Expand All Answers',
    collapseAll: 'Collapse All',
    items: QA_ITEMS
  },
  footer: {
    description: 'AEGIS 2.1v is an open-source, identity-aware Zero-Trust Application Gateway and Managed SOC solution engineered to replace vulnerable perimeter models with continuous cryptographic verification and automated threat containment.',
    architectureTitle: 'Architecture & Engine',
    securityTitle: 'Zero Trust & SOC',
    resourcesTitle: 'Resources & Docs',
    legalNote: 'AEGIS is designed for production deployment across hybrid cloud and on-premise environments. Built on open-source standards (Traefik, Authelia, Keycloak, Coraza, Wazuh, Sysmon).',
    builtWith: 'Engineered with Precision for Enterprise Defense',
    rightsReserved: 'All rights reserved. Zero Trust is a continuous architecture, not a single product.',
    downloadSummary: 'Download Summary (PDF)',
    downloadSummaryDesc: 'Print or save a clean executive summary for stakeholder presentations',
  },
  demoModal: {
    title: 'Request AEGIS Architecture Review',
    subtitle: 'Consult with our senior Zero-Trust systems engineers to evaluate your current network posture and design an incremental migration roadmap.',
    fieldFullName: 'Full Name',
    fieldEmail: 'Work Email',
    fieldCompany: 'Company / Organization',
    fieldRole: 'Primary Role / Title',
    fieldOrgSize: 'Organization Size (Seats)',
    fieldCurrentPerimeter: 'Current Perimeter Security Model',
    fieldMessage: 'Architecture Goals or Specific Inquiries',
    fieldPriority: 'Engagement Urgency',
    optionSelectRole: 'Select your role...',
    optionRoles: [
      'CISO / Head of Information Security',
      'IT Director / Infrastructure Lead',
      'DevSecOps / Cloud Architect',
      'SOC Manager / Incident Response Lead',
      'CEO / CTO / Executive Leadership',
      'Systems Engineer / Developer'
    ],
    optionSizes: [
      '1 - 50 Employees',
      '51 - 250 Employees',
      '251 - 1,000 Employees',
      '1,000+ Enterprise Employees'
    ],
    optionPerimeters: [
      'Traditional Perimeter Firewall (pfSense / Fortinet / Palo Alto)',
      'Legacy Corporate VPN (OpenVPN / Cisco AnyConnect)',
      'Hybrid Cloud Perimeter + VPN',
      'Evaluating Initial Zero-Trust Migration'
    ],
    submitButton: 'Submit Architecture Request',
    submittingButton: 'Submitting Architecture Spec...',
    successTitle: 'Architecture Review Scheduled!',
    successMessage: 'Thank you for reaching out. A Senior AEGIS Systems Engineer has received your infrastructure details and will contact you within 2 business hours with a tailored scoping review.',
    closeButton: 'Close Window',
    privacyNotice: 'Your infrastructure specs are held strictly confidential under mutual NDA guidelines.'
  }
};
