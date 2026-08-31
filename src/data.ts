import { ComparisonRow, QAItem, RoleExperience, StepItem, OnboardingStep } from './types';

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    capability: 'Per-Request Identity Verification',
    category: 'Authentication',
    perimeterFirewall: {
      status: 'unsupported',
      description: 'Network-location based only (IP/Port/Subnet). Assumes any traffic from an internal IP or LAN is implicitly legitimate.'
    },
    vpnTrust: {
      status: 'partial',
      description: 'One-time authentication at the tunnel edge. Once authenticated, user is trusted across all routed internal subnets.'
    },
    aegisGateway: {
      status: 'supported',
      description: 'Challenger per HTTP/TCP request. Evaluates OIDC cryptographic token, TOTP/FIDO2 MFA, and dynamic role authorization on every single resource call.'
    }
  },
  {
    capability: 'Lateral Movement Prevention & Isolation',
    category: 'Network Architecture',
    perimeterFirewall: {
      status: 'unsupported',
      description: 'Zero internal barrier once perimeter is traversed via phishing, malware, contractor laptop, or unpatched service.'
    },
    vpnTrust: {
      status: 'unsupported',
      description: 'Provides broad subnet route table. A compromised endpoint can port-scan and traverse across the corporate network.'
    },
    aegisGateway: {
      status: 'supported',
      description: 'Strict micro-segmentation. Upstream databases, admin panels, and internal services have no public/routable address; blocked at kernel network level.'
    }
  },
  {
    capability: 'Continuous Session & Telemetry Evaluation',
    category: 'Session Governance',
    perimeterFirewall: {
      status: 'unsupported',
      description: 'Static stateful packet inspection. Has no visibility into user identity, session state, or post-login behavioral changes.'
    },
    vpnTrust: {
      status: 'unsupported',
      description: 'Long-lived tunnel session. Stolen session cookie or hijacked credential remains active until manual disconnect or fixed timeout.'
    },
    aegisGateway: {
      status: 'supported',
      description: 'Continuous behavioral telemetry via Wazuh & Sysmon. Continuously monitors: "Is this session still behaving as it should, right now?"'
    }
  },
  {
    capability: 'Automated Threat Containment (SOAR)',
    category: 'Incident Response',
    perimeterFirewall: {
      status: 'unsupported',
      description: 'Sends passive syslog events to an external collector. Zero automated user session revocation or host quarantine.'
    },
    vpnTrust: {
      status: 'unsupported',
      description: 'Requires a network engineer to manually investigate alerts and disconnect the VPN client hours or days later.'
    },
    aegisGateway: {
      status: 'supported',
      description: 'Instant automated response in < 5s: active session revoked globally across Authelia/Keycloak and compromised endpoint quarantined from LAN.'
    }
  },
  {
    capability: 'Blast Radius on Credential Compromise',
    category: 'Resilience',
    perimeterFirewall: {
      status: 'unsupported',
      description: 'Entire internal corporate network and datacenter exposed.'
    },
    vpnTrust: {
      status: 'partial',
      description: 'All services within the assigned VPN profile route table exposed.'
    },
    aegisGateway: {
      status: 'supported',
      description: 'Confined strictly to the exact resource path permitted by the user’s Active Directory group. Sensitive paths enforce re-prompt.'
    }
  },
  {
    capability: 'Customer vs. Employee Route Segregation',
    category: 'Traffic Handling',
    perimeterFirewall: {
      status: 'partial',
      description: 'Direct NAT port-forwarding (80/443) into applications without unified identity governance.'
    },
    vpnTrust: {
      status: 'unsupported',
      description: 'Cannot handle public/customer traffic — strictly for internal workforce tunnel connections.'
    },
    aegisGateway: {
      status: 'supported',
      description: 'Dual-path governance: Public customer routes use rate-limiting and WAF; private internal routes enforce strict MFA + SSO.'
    }
  },
  {
    capability: 'Integration & Deployment Model',
    category: 'Implementation',
    perimeterFirewall: {
      status: 'partial',
      description: 'Requires hardware or appliance replacement at edge with disruptive routing table changes.'
    },
    vpnTrust: {
      status: 'partial',
      description: 'Requires installing proprietary software clients on every user machine and maintaining tunnel concentrators.'
    },
    aegisGateway: {
      status: 'supported',
      description: 'No rip-and-replace. Sits in front of existing applications via DNS and reverse proxy; supports incremental app-by-app migration.'
    }
  }
];

export const ROLE_EXPERIENCES: RoleExperience[] = [
  {
    roleId: 'marketing',
    roleName: 'Marketing Specialist',
    department: 'Marketing & Growth',
    morningLogin: 'Opens laptop, browses to marketing.zerotrust.lan. No VPN, no special client — just a URL. Traefik intercepts; Authelia finds no valid session; redirect to Keycloak login. Password + MFA push notification (phone). Session created (8h duration). Redirected to marketing dashboard/CRM.',
    dailyAccessPattern: 'Session persists all day. Attempts to access resources outside the Marketing AD group scope — e.g., HR portal — result in a clean "access denied" page with no additional prompt. No knowledge of Traefik, Coraza, or Wazuh.',
    frictionPoint: 'One MFA tap in the morning. That’s it.',
    typicalAccess: ['Marketing CRM (marketing.zerotrust.lan)', 'Public CMS Editor', 'Analytics Dashboards', 'Corporate Email / Workspace'],
    restrictedTargets: ['HR Employee Records (hr.zerotrust.lan)', 'Production Databases', 'Kubernetes Cluster', 'Accounting Core'],
    dailyFlow: [
      {
        time: '08:30 AM',
        action: 'Morning SSO Login',
        experience: 'Opens marketing.zerotrust.lan in standard browser. Enters password, taps biometric MFA push on phone once.',
        securityAction: 'Traefik intercepts, Authelia triggers Keycloak OIDC authentication, issues 8h cryptographically signed session.'
      },
      {
        time: '11:15 AM',
        action: 'Active Daily Workflow',
        experience: 'Seamless page loads across CRM, analytics, and marketing tools. Zero desktop VPN client running.',
        securityAction: 'Traefik validates session cookie at reverse proxy layer in < 2ms without re-prompting.'
      },
      {
        time: '02:40 PM',
        action: 'Accidental Click to HR Portal',
        experience: 'Receives clean 403 Access Denied page with audit reference ID. No system freeze or tech jargon.',
        securityAction: 'Authelia evaluates group membership; "Marketing" group lacks HR resource entitlement. Origin remains unreachable.'
      },
      {
        time: '05:30 PM',
        action: 'End of Day',
        experience: 'Closes browser tab. No manual VPN disconnection step required.',
        securityAction: '8-hour session token naturally expires; background keys purged.'
      }
    ],
    governanceNote: 'Marketing staff enjoy friction-free web access while remaining strictly isolated from sensitive administrative and production tiers.'
  },
  {
    roleId: 'hr',
    roleName: 'HR Specialist',
    department: 'Human Resources & People Operations',
    morningLogin: 'Identical SSO/MFA login flow as Marketing — same login page, same MFA push.',
    dailyAccessPattern: 'AD group membership (HR) maps to a different Authelia policy granting access to HR systems and employee records on a more restricted internal path. Sensitive data access may require MFA re-validation every 2 hours instead of 8. End of day: session times out automatically; no explicit logout action needed.',
    frictionPoint: 'Slightly more friction than Marketing due to shorter MFA re-validation windows — correctly so, given data sensitivity.',
    typicalAccess: ['HR Portal & Employee Records', 'Payroll Dashboard (Scoped)', 'Onboarding Workflow Manager', 'Internal Directory'],
    restrictedTargets: ['Production Billing Secrets', 'Server Root Consoles', 'Code Repositories', 'Portainer Container Manager'],
    dailyFlow: [
      {
        time: '08:45 AM',
        action: 'Morning Authentication',
        experience: 'Single sign-on with password + TOTP authenticator app verification.',
        securityAction: 'Keycloak verifies Argon2id password hash, validates TOTP code, establishes HR-scoped session.'
      },
      {
        time: '11:00 AM',
        action: 'Accessing Employee Compensation Records',
        experience: 'Seamless navigation through authorized personnel files and onboarding dashboards.',
        securityAction: 'Path-level ACL validates HR group rights on /hr/records.* routes.'
      },
      {
        time: '01:30 PM',
        action: 'Sensitive Record Re-Validation',
        experience: 'Quick biometric re-prompt after 2 hours of inactivity before modifying payroll details.',
        securityAction: 'Scoped policy enforces shorter TTL on high-sensitivity PII endpoints.'
      },
      {
        time: '05:00 PM',
        action: 'Automated Session Timeout',
        experience: 'Session naturally closes; no residual tokens stored on workstation.',
        securityAction: 'Cryptographic session tokens purged from gateway memory.'
      }
    ],
    governanceNote: 'Slightly tighter session policies match high data sensitivity, protecting employee PII with zero VPN complexity.'
  },
  {
    roleId: 'developer',
    roleName: 'Web Developer',
    department: 'Software Engineering',
    morningLogin: 'Same SSO/MFA login as all employees for general tools (email, wiki, ticketing).',
    dailyAccessPattern: 'Needs admin panel access (shop.zerotrust.lan/admin): path-specific access control rule (resources: ["^/admin.*"], policy: two_factor, subject: group:juiceshop-admins) triggers MFA re-check even though general session is valid. Code pushes via git are separate from the gateway (CI/CD uses SSH keys or tokens, not Authelia). May monitor Kibana for error spikes if granted SOC-viewer rights — a deliberate design choice, not automatic.',
    frictionPoint: 'The admin-panel MFA re-prompt. Minor, and correctly placed — the specific defense against a stolen session cookie.',
    typicalAccess: ['Staging Environments', 'shop.zerotrust.lan/admin (with re-auth)', 'Internal Wiki & Ticketing', 'Scoped Log Views (Kibana)'],
    restrictedTargets: ['Corporate HR Records', 'Executive Compensation', 'Production Database Direct Port (5432)', 'Direct SSH to Gateway'],
    dailyFlow: [
      {
        time: '09:00 AM',
        action: 'Workstation Login',
        experience: 'Opens browser to internal developer hub. Authenticates via SSO + MFA once.',
        securityAction: 'Gateway verifies developer group membership and device certificate.'
      },
      {
        time: '11:30 AM',
        action: 'Accessing Shop Admin (/admin)',
        experience: 'Enters shop.zerotrust.lan/admin. Prompted for an instant MFA re-validation before entering admin panel.',
        securityAction: 'Authelia policy rule enforces policy: two_factor on ^/admin.* path, defeating stolen cookie attacks.'
      },
      {
        time: '03:15 PM',
        action: 'Attempted Direct DB Connection',
        experience: 'Database port (5432) is completely unreachable from developer workstation.',
        securityAction: 'Zero direct network routing; origin database sits strictly behind proxy network interface.'
      },
      {
        time: '06:00 PM',
        action: 'End of Day',
        experience: 'Zero open VPN routes or residual tunnel interfaces on the developer laptop.',
        securityAction: 'Access is evaluated per-request; no open tunnels remain vulnerable.'
      }
    ],
    governanceNote: 'Developers enjoy high-speed development while path-specific MFA safeguards privileged application administration.'
  },
  {
    roleId: 'devops',
    roleName: 'DevOps Operator',
    department: 'Infrastructure & Platform Operations',
    morningLogin: 'Same SSO/MFA login as all employees.',
    dailyAccessPattern: 'Broader access than regular developers: Portainer (deploy/restart containers), possibly Grafana/monitoring dashboards. Direct SSH to Gateway or minisoc nodes for maintenance windows is outside the gateway’s authority entirely.',
    frictionPoint: 'None beyond standard MFA — but blast radius is enormous if the account is compromised.',
    typicalAccess: ['Portainer (portainer.zerotrust.lan)', 'Grafana Metrics Dashboards', 'Staging Deployments', 'Container Logs'],
    restrictedTargets: ['HR Employee Records', 'Client PII Databases', 'Direct Unmonitored SSH (requires bastion)'],
    dailyFlow: [
      {
        time: '08:15 AM',
        action: 'Morning Identity Verification',
        experience: 'Standard SSO + hardware-backed MFA prompt on corporate laptop.',
        securityAction: 'Issues token bound to DevOps role with strict endpoint posture checks.'
      },
      {
        time: '10:45 AM',
        action: 'Container Deployment via Portainer',
        experience: 'Direct access to portainer.zerotrust.lan to inspect cluster container health.',
        securityAction: 'Authelia validates devops-operators group entitlement for Portainer ingress.'
      },
      {
        time: '02:00 PM',
        action: 'Monitoring Telemetry & Metrics',
        experience: 'Real-time Grafana dashboard access for latency and gateway throughput.',
        securityAction: 'Per-request authorization validates read-only monitoring claims.'
      },
      {
        time: '05:30 PM',
        action: 'Session Expiration',
        experience: 'Privileged operational session automatically expires.',
        securityAction: 'Hard session ceiling enforced for privileged roles.'
      }
    ],
    governanceNote: 'DevOps operators have broad application deployment rights, isolated strictly to designated platform tooling.'
  },
  {
    roleId: 'it-admin',
    roleName: 'IT Administrator',
    department: 'IT Operations & Infrastructure Security',
    morningLogin: 'Same SSO/MFA login as all employees.',
    dailyAccessPattern: 'Access to Portainer (portainer.zerotrust.lan) for container health checks — sole AD group with this route unblocked. Access to Mailpit (mail.zerotrust.lan) in lab environments (SMTP sinkhole, not real mail). Investigates Wazuh/Kibana alerts; may manually revoke compromised sessions via Keycloak admin console. Adjusts Traefik routing rules, restarts containers, reviews Suricata alert volume.',
    frictionPoint: 'None beyond MFA — but this account carries the highest risk if compromised, warranting the tightest session policy (shortest MFA re-validation window, potentially hardware key instead of push notification).',
    typicalAccess: ['Portainer Container Console', 'Keycloak Identity Admin Console', 'Wazuh/Kibana Security Dashboards', 'Traefik Dynamic Configuration'],
    restrictedTargets: ['Client PII Databases (without break-glass)', 'Unmonitored Out-of-Band Modifications'],
    dailyFlow: [
      {
        time: '08:00 AM',
        action: 'Privileged Session Setup',
        experience: 'Enters master password + hardware security key (FIDO2 WebAuthn).',
        securityAction: 'AEGIS verifies hardware key attestation and device encryption status.'
      },
      {
        time: '10:30 AM',
        action: 'Route & Identity Governance',
        experience: 'Updates group memberships in Keycloak; changes take effect immediately across all routes.',
        securityAction: 'Keycloak directory synchronizes with Authelia policy cache.'
      },
      {
        time: '02:15 PM',
        action: 'Incident Response Drill',
        experience: 'Simulates compromised user session; clicks one button to invalidate session globally.',
        securityAction: 'Revocation broadcast across all gateway nodes in < 1 second.'
      },
      {
        time: '04:30 PM',
        action: 'Short Session Re-Prompt',
        experience: 'Tight 4-hour re-prompt enforces re-validation on high-impact infrastructure tiers.',
        securityAction: 'Prevents lingering unattended administrative sessions.'
      }
    ],
    governanceNote: 'IT administrators manage identity and routing centrally; strict session TTLs protect the enterprise control plane.'
  },
  {
    roleId: 'ceo',
    roleName: 'Chief Executive Officer (CEO)',
    department: 'Executive Leadership',
    morningLogin: 'Same SSO/MFA login as all employees.',
    dailyAccessPattern: 'Read-only access to a narrow set of high-level views: financial dashboards, possibly an aggregated security posture summary (green/yellow/red, not raw Kibana). No SOC console or Portainer access.',
    frictionPoint: 'Minimal — but worth noting: in Zero Trust, privilege maps to actual job function, not org-chart seniority. CEO access to admin panels requires explicit AD group membership, same as anyone else.',
    typicalAccess: ['Executive BI & Financial Dashboards', 'Board Deck Portal', 'Aggregated Security Posture Summary (Green/Yellow/Red)', 'Corporate Email / Workspace'],
    restrictedTargets: ['Raw Production Infrastructure', 'Portainer Container Manager', 'Kibana Raw SOC Console', 'Developer Code Repositories'],
    dailyFlow: [
      {
        time: '07:45 AM',
        action: 'Morning Sign-in',
        experience: 'Opens executive portal on laptop or iPad. Taps FaceID/TouchID once.',
        securityAction: 'Gateway verifies executive role token and enrolled corporate device posture.'
      },
      {
        time: '11:00 AM',
        action: 'Reviewing Quarterly Financials',
        experience: 'Instant loading of sensitive financial BI reports from home office or airport.',
        securityAction: 'TLS 1.3 encrypted tunnel terminated at Traefik edge; origin protected.'
      },
      {
        time: '02:30 PM',
        action: 'Viewing Security Posture',
        experience: 'Inspects high-level executive security status (green/healthy) without raw technical noise.',
        securityAction: 'Curated executive view populated from MSSP SOC summary telemetry.'
      },
      {
        time: '06:00 PM',
        action: 'Seamless Disconnect',
        experience: 'No VPN disconnect button to remember. Session expires cleanly.',
        securityAction: 'Zero standing network access remains open on the executive endpoint.'
      }
    ],
    governanceNote: 'In Zero Trust, privilege maps to actual job function, not organizational seniority. Eliminating executive standing admin rights protects against spear-phishing.'
  }
];

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    step: 1,
    title: 'Pre-arrival Account Creation',
    subtitle: 'Active Directory / Keycloak Provisioning',
    action: 'IT/HR creates Karim’s account directly in Active Directory (or Keycloak) and adds him to the "Developers" group.',
    securityMechanism: 'This single group membership silently defines everything he can and cannot access from day one. No firewall rule edits needed.',
    keyLesson: 'Zero manual server-by-server permission granting.'
  },
  {
    step: 2,
    title: 'Secure Activation',
    subtitle: 'Hardened SMTP Relay Delivery',
    action: 'A real hardened SMTP relay (not Mailpit) sends Karim one email: a single-use activation link with a 48-hour expiry.',
    securityMechanism: 'Mailpit is dev/test-only and must never be used in production, as it would expose all activation and reset links. Production uses real SPF/DKIM/TLS SMTP.',
    keyLesson: 'Single-use, short-lived activation links prevent link hijacking.'
  },
  {
    step: 3,
    title: 'Password Setup',
    subtitle: 'Argon2id Memory-Hard Cryptographic Hash',
    action: 'Karim clicks the activation link and lands on Keycloak: "Welcome to AEGIS — set your password." He selects a secure password.',
    securityMechanism: 'Password is hashed server-side with Argon2id (64MB memory, 3 iterations) — invisible to him, but the difference between a password that survives a breach and one that does not. The activation link is now dead.',
    keyLesson: 'Modern memory-hard password hashing is breach-resistant.'
  },
  {
    step: 4,
    title: 'MFA Enrollment',
    subtitle: 'Single-View In-Browser TOTP QR Code',
    action: 'Immediately after password setup in the same browser session, Keycloak displays his TOTP QR code on-screen once only. He scans with Google Authenticator or Authy.',
    securityMechanism: 'The MFA secret never travels through email, never appears in Mailpit, and is never logged anywhere retrievable. From this point forward, password alone is never enough.',
    keyLesson: 'MFA secrets are never transmitted over email channels.'
  },
  {
    step: 5,
    title: 'First Login',
    subtitle: 'Traefik → Authelia → Keycloak Pipeline',
    action: 'Karim navigates to dev.zerotrust.lan. The Traefik → Authelia → Keycloak flow runs: enters password, then TOTP code. Session granted.',
    securityMechanism: 'Traefik intercepts request, Authelia confirms MFA validity, Keycloak validates identity claims, and session cookie is minted.',
    keyLesson: 'Zero VPN client installation required for employee onboarding.'
  },
  {
    step: 6,
    title: 'Boundary Testing',
    subtitle: 'Clean 403 Forbidden & Zero Stack Traces',
    action: 'Karim tries the admin panel out of curiosity: shop.zerotrust.lan/admin. Access is cleanly denied.',
    securityMechanism: 'Denied cleanly with no error stack trace and no hint about what lies behind the wall. He is not yet in juiceshop-admins. The architecture teaches him that access is earned per-resource, not inherited from login.',
    keyLesson: 'Zero information leakage on unauthorized requests.'
  },
  {
    step: 7,
    title: 'Privilege Escalation via Role Change',
    subtitle: 'Instant Directory Edit (No Redeployment)',
    action: 'Once manager approves production deploy rights, IT adds Karim to the juiceshop-admins group in Active Directory/Keycloak.',
    securityMechanism: 'No gateway configuration changes, no new deployment. Next time he authenticates against that path, Authelia checks his updated group and grants access. Onboarding, role changes, and offboarding are all a single group edit.',
    keyLesson: 'Role modifications require zero infrastructure restarts.'
  },
  {
    step: 8,
    title: 'Offboarding',
    subtitle: 'Single Status Change Closes All Access Paths',
    action: 'If Karim ever leaves the company, disabling his Active Directory account once closes every single access path simultaneously.',
    securityMechanism: 'Email, dev tools, admin panels, staging servers all become inaccessible immediately because there was never a second identity system quietly still trusting him.',
    keyLesson: 'Instant global deprovisioning eliminates orphan accounts.'
  }
];

export const INSTALLATION_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'DNS & Edge Ingress Routing',
    subtitle: 'Point Traffic to Traefik Reverse Proxy',
    description: 'Point your public and internal DNS records (e.g. *.corp.yourcompany.com) to the AEGIS Gateway cluster. Sits cleanly in front of existing infrastructure.',
    details: [
      'Zero changes required to your existing backend application source code',
      'High-performance TLS 1.3 termination at the proxy perimeter',
      'Automatic certificate management & custom enterprise CA support'
    ],
    codeSample: '; DNS A Record Mapping\n*.internal.yourcompany.com.  300  IN  A  198.51.100.42\ngateway.yourcompany.com.           300  IN  A  198.51.100.42',
    iconName: 'Globe'
  },
  {
    number: '02',
    title: 'Identity Provider Integration',
    subtitle: 'Connect Keycloak & Authelia to Active Directory',
    description: 'Connect your existing Active Directory, LDAP, Okta, Google Workspace, or Entra ID directory via standard OIDC/SAML protocols.',
    details: [
      'Synchronizes existing organizational groups and role trees',
      'Enforces Argon2id password hashing and hardware TOTP/WebAuthn MFA',
      'Instant global deprovisioning when an employee status changes in your IdP'
    ],
    codeSample: '# aegis-auth-config.yaml\nauth_provider:\n  type: oidc\n  issuer_url: "https://login.yourcompany.com"\n  client_id: "aegis-edge-gateway"\n  mfa_required: true\n  enforce_totp: true',
    iconName: 'KeyRound'
  },
  {
    number: '03',
    title: 'Incremental App Onboarding',
    subtitle: 'Service-by-Service Migration (No Downtime)',
    description: 'Register internal web services, APIs, and administrative panels behind the gateway one at a time. Zero all-or-nothing downtime.',
    details: [
      'Applications are migrated sequentially at your own scheduled pace',
      'Non-migrated legacy services continue running on existing subnets during transition',
      'Internal origin servers bound strictly to the isolated AEGIS network interface'
    ],
    codeSample: '# service-definition.yaml\nservices:\n  - name: internal-crm\n    host: crm.internal.yourcompany.com\n    upstream_url: "http://10.20.1.15:8080"\n    allowed_groups: ["sales-team", "ops-managers"]',
    iconName: 'Server'
  },
  {
    number: '04',
    title: 'Path-Level Policy Definition',
    subtitle: 'Enforce policy: two_factor on Sensitive Routes',
    description: 'Define granular access control lists (ACLs) per application and route. Sensitive endpoints (/admin) trigger MFA re-checks regardless of general session.',
    details: [
      'Resource-level rules: specify which teams access specific paths (e.g. /admin vs /view)',
      'Defeats session hijacking by requiring MFA re-prompt on privileged resources',
      'Immediate clean 403 response on unauthorized attempts with audit logging'
    ],
    codeSample: '# authelia-configuration.yaml\naccess_control:\n  rules:\n    - domain: "shop.zerotrust.lan"\n      resources: ["^/admin.*"]\n      policy: two_factor\n      subject: "group:juiceshop-admins"',
    iconName: 'ShieldCheck'
  },
  {
    number: '05',
    title: 'Telemetry & Wazuh/Sysmon Sensors',
    subtitle: 'Continuous Behavioral Telemetry Ingestion',
    description: 'Deploy lightweight Sysmon and Wazuh endpoint sensors to stream real-time process execution, connection attempts, and gateway access logs to the SOC.',
    details: [
      'Real-time event streaming over encrypted gRPC / syslog channels',
      'MITRE ATT&CK tactical tag enrichment performed in stream memory',
      'Zero impact on endpoint battery or gateway request throughput'
    ],
    codeSample: '# aegis-telemetry-agent.conf\nsiem_endpoint: "ingest.soc.aegis-security.io:443"\ntls_client_cert: "/etc/aegis/certs/sensor.crt"\nsources:\n  - gateway_access_logs\n  - endpoint_process_events\n  - dns_queries',
    iconName: 'Activity'
  },
  {
    number: '06',
    title: 'Go Live & Automated SOC Containment',
    subtitle: 'Active 24/7 Threat Protection & SOAR',
    description: 'Cut over final application routing. Your infrastructure is now protected by active identity verification and continuous MSSP monitoring.',
    details: [
      '24/7 human SOC analysts handle alert triage and false-positive elimination',
      'Automated session revocation and host isolation triggers active from minute one',
      'Executive IT reports and incident status dashboards delivered on cadence'
    ],
    codeSample: '[STATUS] AEGIS Gateway: ACTIVE\n[STATUS] Identity Sync: SYNCHRONIZED (Active Directory)\n[STATUS] SOC Pipeline: MONITORING (0 Active Escalations)\n[VERIFY] Zero-Trust Enforced: YES',
    iconName: 'CheckCircle2'
  }
];

export const QA_ITEMS: QAItem[] = [
  // Category: Why Zero Trust
  {
    id: 'why-not-pfsense',
    category: 'why-zerotrust',
    categoryLabel: 'Why Zero Trust & Firewalls',
    question: 'Why can\'t we just use pfSense or another perimeter firewall?',
    shortAnswer: 'pfSense and AEGIS do not compete for the same job: pfSense inspects IP/ports at the network edge, while AEGIS inspects user identity, MFA, and role per application request.',
    detailedAnswer: 'pfSense is a perimeter firewall: it decides what traffic reaches your network based on IP address, port, and static rules. It has no concept of user identity, role, or whether a specific person should access a specific resource at a specific time. AEGIS operates one layer above: it is an identity-aware access gateway. Every request — even from someone already inside your network — is challenged for identity verification, multi-factor authentication, and role authorization. Most businesses running pfSense alone implicitly trust anything that gets past the firewall. That is the exact assumption Zero Trust exists to remove. In practice, you would likely want both: pfSense (or equivalent) at the network edge, and AEGIS in front of your applications and internal services.',
    keyTakeaway: 'Complementary Architecture: Use a perimeter firewall for network edge filtering, and AEGIS in front of internal applications to eliminate implicit trust.'
  },

  // Category: How It Works & Mechanics
  {
    id: 'how-it-works-mechanics',
    category: 'mechanics',
    categoryLabel: 'Architecture & Mechanics',
    question: 'How does AEGIS actually work, mechanically?',
    shortAnswer: 'Every request enters through Traefik (reverse proxy), checks Authelia (session & MFA) and Keycloak (identity & role) before forwarding to isolated origin services.',
    detailedAnswer: 'Every request enters through a single front door: Traefik, acting as a reverse proxy. Before any request reaches an application, it is checked against Authelia (is the session valid? Has MFA been completed?) and Keycloak (who is this person, and what is their role?). Only after both checks pass is the request forwarded — and even then, only to the specific service the policy allows. Databases, admin panels, and internal tools never have a directly reachable address from outside. They are not merely "harder to reach"; they are actually unreachable, enforced at the kernel network level rather than through an application setting that could be misconfigured.',
    keyTakeaway: 'Kernel-Level Isolation: Upstream origin tools are physically unreachable except through verified Traefik proxy routes.'
  },
  {
    id: 'integration-without-rip-replace',
    category: 'mechanics',
    categoryLabel: 'Architecture & Mechanics',
    question: 'Can AEGIS integrate into our existing architecture without replacing everything?',
    shortAnswer: 'Yes. AEGIS sits in front of what you already run: DNS points at the gateway, which proxies to your existing apps. Migration is app-by-app.',
    detailedAnswer: 'Yes. AEGIS does not require ripping anything out. It sits in front of what you already run: DNS points at the gateway, the gateway proxies to your existing applications and services, and authentication is centralized instead of scattered per-application. Migration is app-by-app, not all-or-nothing. Legacy apps run in parallel during migration with zero business downtime.',
    keyTakeaway: 'Phased Onboarding: Zero-downtime, application-by-application migration path.'
  },

  // Category: Effect on Team & Production
  {
    id: 'production-latency-impact',
    category: 'team-impact',
    categoryLabel: 'Team & Production Impact',
    question: 'Will this slow down our production systems?',
    shortAnswer: 'There is an authentication hop on requests, but with session caching and reasonable MFA re-prompt intervals, latency overhead is < 2.5ms and invisible to users.',
    detailedAnswer: 'There is a real cost, and it should not be minimized: you are adding a hop and an authentication check to every request. Implemented correctly — with session caching and reasonable MFA re-prompt intervals — the latency is measured in milliseconds and is invisible to users. Implemented poorly — with over-aggressive re-authentication — it becomes the thing employees route around, which defeats the entire purpose. This is a genuine operational risk, not a hypothetical concern.',
    keyTakeaway: 'Measured in Milliseconds: Session caching keeps performance snappy while eliminating the risk of employees bypassing controls.'
  },
  {
    id: 'employee-adaptation-friction',
    category: 'team-impact',
    categoryLabel: 'Team & Production Impact',
    question: 'Will our employees have trouble adapting?',
    shortAnswer: 'After brief initial MFA setup, the experience has less friction than VPNs: employees get single sign-on (SSO) for everything without juggling separate credentials.',
    detailedAnswer: 'There will be initial friction: MFA enrollment and a single login flow instead of "just being on the office Wi-Fi." After the initial setup, however, the experience involves less friction than most VPN setups, because employees get one login for everything (single sign-on) instead of juggling separate credentials for each internal tool or wrestling with disconnect-prone VPN clients.',
    keyTakeaway: 'Single Login for Everything: Eliminates legacy VPN frustration and reduces password fatigue.'
  },
  {
    id: 'gateway-failure-resilience',
    category: 'team-impact',
    categoryLabel: 'Team & Production Impact',
    question: 'What happens if the gateway goes down — is our whole business offline?',
    shortAnswer: 'If deployed as a single instance, yes. A production deployment must be load-balanced and configured for active-active high availability (HA).',
    detailedAnswer: 'Yes. If deployed as a single instance, the gateway is a real single point of failure. This is the most legitimate objection to this architecture. A production deployment must be load-balanced and configured for high availability (HA) across multiple nodes and availability zones; the single-VM lab setup is for demonstration only.',
    keyTakeaway: 'HA Mandate: Enterprise deployments run active-active redundant gateway clusters fronted by resilient load balancers.'
  },
  {
    id: 'cost-vs-okta',
    category: 'team-impact',
    categoryLabel: 'Team & Production Impact',
    question: 'What does this actually cost compared to buying an enterprise SSO product like Okta?',
    shortAnswer: 'AEGIS is built from open-source components (Traefik, Authelia, Keycloak) with zero per-seat licensing fees, trading software license expense for engineering control.',
    detailedAnswer: 'AEGIS is built from open-source components (Traefik, Authelia, Keycloak) — no per-seat licensing fees, but you are paying in engineering time to run and maintain it yourself. Okta costs money per user/month but costs less of your team\'s time. Which option is preferable depends entirely on whether you have (or want to build) in-house security engineering capacity versus paying continuous enterprise SaaS subscriptions.',
    keyTakeaway: 'Zero Per-Seat Taxes: Transparent open-source foundation with no scaling user penalties.'
  },
  {
    id: 'developer-workflow-speed',
    category: 'team-impact',
    categoryLabel: 'Team & Production Impact',
    question: 'Will this slow down our developers\' workflow?',
    shortAnswer: 'Only on tools placed behind the gateway; git pushes via SSH/tokens remain separate. We scope internal tools carefully to protect sensitive assets without slowing developers.',
    detailedAnswer: 'If internal development tools are placed behind the same gateway, yes — some slowdown is inevitable, as every internal service interaction requires the same authentication flow. It is worth scoping which internal systems actually need Zero Trust enforcement versus which are low-risk enough to remain on a simpler internal network. Furthermore, developer git pushes use SSH keys or personal access tokens directly, remaining decoupled from browser authentication.',
    keyTakeaway: 'Deliberate Scoping: Secure high-impact tools without interfering with standard git CLI and CI/CD pipelines.'
  },

  // Category: Beyond BeyondCorp
  {
    id: 'beyond-beyondcorp-explained',
    category: 'beyond-beyondcorp',
    categoryLabel: 'Beyond BeyondCorp',
    question: 'You mention "Beyond BeyondCorp Zero Trust" — what does that actually mean?',
    shortAnswer: 'BeyondCorp removed perimeter trust at the point of entry; AEGIS adds continuous behavioral telemetry (Wazuh & Sysmon) and automated response (SOAR) to contain compromised live sessions.',
    detailedAnswer: 'BeyondCorp, Google\'s original Zero Trust model, established that no implicit trust should be granted based on network location. What AEGIS adds on top is continuous behavioral telemetry (via Wazuh and Sysmon monitoring what happens after login, not just at the point of entry) and automated response (SOAR). A compromised session is revoked automatically in seconds, not merely noticed in a report three days later. BeyondCorp asks, "Should this request get in?" AEGIS also asks, "Is this session still behaving as it should, right now?"',
    keyTakeaway: 'Active Containment: Continuously validates behavior post-authentication and kills rogue sessions in real time.'
  },

  // Category: Zone 4 SOC Visibility
  {
    id: 'zone-4-soc-visibility',
    category: 'soc-visibility',
    categoryLabel: 'Zone 4 MSSP SOC',
    question: 'In Zone 4, where ELK, Logstash, and the SOC live, who actually sees the alerts?',
    shortAnswer: 'AEGIS SOC analysts see all raw alerts and MISP threat intel to perform 24/7 triage; client IT receives a curated view of their own incidents without raw log noise.',
    detailedAnswer: 'Given that Zone 4 is explicitly modeled as an MSSP SOC, access is tiered, not universal:\n1. AEGIS SOC analysts have full raw Kibana access, all MITRE-tagged alerts, and threat intelligence correlation via MISP. They perform actual triage: determining whether an alert is noise or a genuine incident, and whether escalation is warranted.\n2. Client IT / DevOps receive a restricted view, not the raw SOC console. Typically this is a simplified dashboard showing their own incidents only, summarized by severity, with no raw log access to other tenants or internal SOC tooling.\n3. Client CEO sees an even higher-level rollup (green/yellow/red posture), not Kibana.\n\nThis tiered access reflects the actual business model: clients pay AEGIS precisely so they do not have to staff their own 24/7 SOC analysts. Handing the client\'s IT team full raw Kibana access would replace the MSSP value proposition with "we sold you a dashboard." The value is in AEGIS analysts doing triage and only surfacing what matters.',
    keyTakeaway: 'True MSSP Value: Expert human triage eliminates client alert fatigue while preserving complete tenant data isolation.'
  },

  // Category: Security Deep-Dive
  {
    id: 'mfa-totp-vs-mailpit',
    category: 'security-deepdive',
    categoryLabel: 'Security Deep-Dive',
    question: 'If an attacker hijacks a session, how is 2FA sent securely?',
    shortAnswer: 'MFA is TOTP (authenticator app QR code generated once in-browser), never sent via email. Mailpit is strictly for development and forbidden in production.',
    detailedAnswer: 'MFA in this architecture is TOTP (authenticator app QR code), not email-delivered codes. The MFA secret is shown once, directly in the user\'s browser, during their own authenticated enrollment session. It never travels through email or Mailpit. Therefore, even if an attacker reached Mailpit\'s UI, they would not obtain anyone\'s MFA secrets. That piece is safe by construction.\n\nHowever, Mailpit itself is a real production flaw if left in place. In the lab, it is intentional: nothing leaves the network, and emails are easy to inspect. In production, if an attacker reached Mailpit\'s UI — via a hijacked session with broader access than it should have — they would see every email the system generated, including password reset links. The mitigations are:\n- Never route production email through Mailpit. Replace it with a real hardened SMTP relay with SPF, DKIM, DMARC, and TLS. Mailpit stays dev/test-only, full stop.\n- Single-use, short-expiry links. Activation and reset links expire within 24–48 hours. Even if intercepted, a stale link is useless.\n- Mailpit, if it must exist at all, sits behind the same internal-only policy as the rest of auth_net. But in production, it should not exist at all.',
    keyTakeaway: 'Safe by Construction: TOTP secrets never travel over email; Mailpit is strictly disabled in production.'
  },
  {
    id: 'session-hijacking-mitigation',
    category: 'security-deepdive',
    categoryLabel: 'Security Deep-Dive',
    question: 'What about session hijacking after a user is already logged in?',
    shortAnswer: 'Sensitive routes (e.g. /admin) enforce policy: two_factor, triggering an MFA challenge even on live sessions, combined with short lifetimes and HttpOnly cookies.',
    detailedAnswer: 'Even with all of the above, if an attacker hijacks an already-authenticated session (cookie theft, not a new login), they inherit whatever that live session already grants. MFA does not re-fire mid-session by default. This is why sensitive paths — such as the admin panel — are configured with policy: two_factor scoped to that specific resource, triggering MFA re-check regardless of general session state. It is the specific defense against "stole a cookie, now has admin." Short session lifetimes and Secure/HttpOnly cookie flags are the other half of that mitigation.',
    keyTakeaway: 'Path-Scoped MFA: Defeats stolen cookie exploits by requiring step-up authentication on sensitive admin paths.'
  },
  {
    id: 'gateway-scope-boundary-ssh',
    category: 'security-deepdive',
    categoryLabel: 'Security Deep-Dive',
    question: 'What access does the gateway not cover?',
    shortAnswer: 'Authelia and Keycloak govern HTTP(S) access through Traefik. SSH access is an entirely separate control plane (key-based, bastion host) not automatically governed by the HTTP proxy.',
    detailedAnswer: 'Authelia and Keycloak govern HTTP(S) access through Traefik. SSH access is an entirely separate control plane (key-based authentication, possibly a bastion host) that this architecture does not automatically cover unless you deliberately extend Zero Trust principles there as well. This is an honest limitation worth stating plainly.',
    keyTakeaway: 'Clear Security Boundaries: HTTP(S) is governed by AEGIS; SSH infrastructure requires separate bastion and key governance.'
  }
];
