import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Terminal, 
  ArrowRight, 
  Zap, 
  Server, 
  Lock, 
  Eye, 
  FileCode2, 
  Activity,
  Layers,
  ChevronRight,
  Database
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { theme } = useTheme();
  const { t, isRTL, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'ingress' | 'containment'>('ingress');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Ingress Flow Steps (Mechanical walk-through of Traefik, Authelia, Keycloak)
  const ingressStagesData = t.howItWorks.stages || [];
  const ingressSteps = [
    {
      id: 'step-1',
      number: '01',
      title: ingressStagesData[0]?.title || 'Ingress Packet Intercept',
      subtitle: ingressStagesData[0]?.description || 'Browser connects to domain via TLS 1.3',
      target: 'https://dev.zerotrust.lan',
      actor: 'Employee Workstation / Browser',
      component: 'DNS & Edge Router',
      details: ingressStagesData[0]?.technicalDetails || 'TLS 1.3 session termination',
      securityAction: ingressStagesData[0]?.telemetryLog || 'Strict SNI inspection and protocol validation',
      logLine: '[INGRESS] TCP/443 connection accepted from 192.168.1.104 -> 10.20.0.10:443 (TLS_AES_256_GCM_SHA384)',
      status: 'verified'
    },
    {
      id: 'step-2',
      number: '02',
      title: ingressStagesData[1]?.title || 'Traefik ForwardAuth Intercept',
      subtitle: ingressStagesData[1]?.description || 'Sub-request validation before proxying',
      target: 'Traefik Reverse Proxy (PEP)',
      actor: 'Edge Policy Enforcement Point',
      component: 'Traefik v3.x',
      details: ingressStagesData[1]?.technicalDetails || 'Synchronous ForwardAuth query',
      securityAction: ingressStagesData[1]?.telemetryLog || 'Reverse proxy halts traffic until authorization decision returned',
      logLine: '[PEP] Traefik ForwardAuth triggered -> Forwarding auth query to authelia:9091/api/verify',
      status: 'verified'
    },
    {
      id: 'step-3',
      number: '03',
      title: ingressStagesData[2]?.title || 'Authelia Session Validation',
      subtitle: ingressStagesData[2]?.description || 'Cryptographic cookie & TOTP confirmation',
      target: 'Authelia Session Engine',
      actor: 'Session Authority',
      component: 'Authelia 4.x',
      details: ingressStagesData[2]?.technicalDetails || 'Argon2id hashing & Redis cluster lookup',
      securityAction: ingressStagesData[2]?.telemetryLog || 'Session signature verified against distributed Keycloak tokens',
      logLine: '[AUTHELIA] Session cookie validated: sub="karim.dev" groups=["Developers"] mfa_verified=true',
      status: 'verified'
    },
    {
      id: 'step-4',
      number: '04',
      title: ingressStagesData[3]?.title || 'Zero Trust ACL Evaluation',
      subtitle: ingressStagesData[3]?.description || 'Least-privilege RBAC query',
      target: 'Access Control Policy Engine',
      actor: 'Keycloak & Authelia ACL Rules',
      component: 'RBAC Policy Matrix',
      details: ingressStagesData[3]?.technicalDetails || 'Microsegmentation ACL match',
      securityAction: ingressStagesData[3]?.telemetryLog || 'Access granted based on least-privilege role matrix',
      logLine: '[ACL] Rule match: resource="/app/dashboard" allowed_for=["Developers"] -> ACCESS GRANTED (200 OK)',
      status: 'verified'
    },
    {
      id: 'step-5',
      number: '05',
      title: ingressStagesData[4]?.title || 'Isolated Upstream Dispatch',
      subtitle: ingressStagesData[4]?.description || 'Connection established to unrouted container',
      target: 'Internal Target Service',
      actor: 'Backend Microservice / Container',
      component: 'Isolated Origin Network',
      details: ingressStagesData[4]?.technicalDetails || 'Internal Docker bridge routing',
      securityAction: ingressStagesData[4]?.telemetryLog || 'Traffic forwarded to upstream with zero public IP exposure',
      logLine: '[FORWARD] Request forwarded to upstream 172.28.0.14:8080. Latency delta: 2.1ms. Zero trust verified.',
      status: 'verified'
    }
  ];

  // Containment Flow Steps (Continuous Telemetry & SOAR Incident Response)
  const containmentStagesData = t.howItWorks.containmentStages || [];
  const containmentSteps = [
    {
      id: 'soar-1',
      number: '01',
      title: containmentStagesData[0]?.title || 'EDR Anomaly Detection',
      subtitle: containmentStagesData[0]?.description || 'Impossible travel velocity / credential stuffing',
      target: 'Wazuh & Sysmon Agent Telemetry',
      actor: 'Endpoint & Gateway Sensors',
      component: 'Zone 4 Telemetry Stream',
      details: containmentStagesData[0]?.technicalDetails || 'Real-time telemetry streaming into Elasticsearch',
      securityAction: containmentStagesData[0]?.telemetryLog || 'Wazuh agent triggers MITRE ATT&CK severity flag',
      logLine: '[ALERT] Wazuh Rule 87103 triggered: Impossible velocity travel detected for user "j.doe" (IP: 185.220.101.5)',
      status: 'alert'
    },
    {
      id: 'soar-2',
      number: '02',
      title: containmentStagesData[1]?.title || 'SIEM Correlation & Threat Scoring',
      subtitle: containmentStagesData[1]?.description || 'Automated rule matching against MISP feeds',
      target: 'ELK Correlation & MISP Feed',
      actor: 'AEGIS Correlation Engine',
      component: 'MISP Threat Intel',
      details: containmentStagesData[1]?.technicalDetails || 'Cross-referencing IOC hashes & known actor IPs',
      securityAction: containmentStagesData[1]?.telemetryLog || 'Correlates behavioral flags with open incident databases',
      logLine: '[CORRELATION] Event mapped to MITRE T1078.2 + MISP IoC #44921 -> Severity: CRITICAL',
      status: 'alert'
    },
    {
      id: 'soar-3',
      number: '03',
      title: containmentStagesData[2]?.title || 'Automated Session Termination',
      subtitle: containmentStagesData[2]?.description || 'Instant revocation across Authelia and Keycloak',
      target: 'Keycloak & Authelia API',
      actor: 'AEGIS Automated Containment Engine',
      component: 'SOAR Action Dispatcher',
      details: containmentStagesData[2]?.technicalDetails || 'Automated API token flush in sub-2 seconds',
      securityAction: containmentStagesData[2]?.telemetryLog || 'User token invalidated on edge Traefik instances simultaneously',
      logLine: '[SOAR] Action dispatched: RevokeUserSessions(uid="j.doe") -> Authelia & Keycloak session invalidated in 1.4s',
      status: 'alert'
    },
    {
      id: 'soar-4',
      number: '04',
      title: containmentStagesData[3]?.title || 'Kernel Micro-Isolation',
      subtitle: containmentStagesData[3]?.description || 'Host quarantine & lateral movement blockage',
      target: 'Host Network Interface',
      actor: 'Wazuh Active Response Agent',
      component: 'Kernel Firewall (nftables)',
      details: containmentStagesData[3]?.technicalDetails || 'Applying nftables drop rules at Linux kernel level',
      securityAction: containmentStagesData[3]?.telemetryLog || 'Infected endpoint isolated from all private internal subnets',
      logLine: '[ACTIVE-RESPONSE] Executed host-quarantine.sh on host-win11-042. Lateral traffic blocked.',
      status: 'verified'
    },
    {
      id: 'soar-5',
      number: '05',
      title: containmentStagesData[4]?.title || 'SOC Analyst Triage & IT Notification',
      subtitle: containmentStagesData[4]?.description || 'Curated incident report with zero alert fatigue',
      target: 'Client IT Incident Portal & SMS',
      actor: 'Tier 1 AEGIS SOC Analyst',
      component: 'Curated Client Console',
      details: containmentStagesData[4]?.technicalDetails || 'Human-in-the-loop validation & executive escalation',
      securityAction: containmentStagesData[4]?.telemetryLog || 'Incident ticket created with full forensic audit artifacts',
      logLine: '[ESCALATION] Case #AEGIS-INC-9102 dispatched to Client IT Lead: "Session terminated, host quarantined. Zero data exfiltrated."',
      status: 'verified'
    }
  ];

  const steps = activeTab === 'ingress' ? ingressSteps : containmentSteps;

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const activeStepData = steps[currentStep] || steps[0];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-4 backdrop-blur-sm"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
              borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
              borderWidth: '1px',
              color: theme === 'dark' ? '#38BDF8' : '#0369A1',
            }}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{t.howItWorks.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Tab Selector & Interactive Flow Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1 rounded-xl border backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            }}
          >
            <button
              onClick={() => {
                setActiveTab('ingress');
                setCurrentStep(0);
              }}
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2"
              style={{
                backgroundColor: activeTab === 'ingress' 
                  ? (theme === 'dark' ? '#06B6D4' : '#0369A1') 
                  : 'transparent',
                color: activeTab === 'ingress' 
                  ? (theme === 'dark' ? '#020617' : '#FFFFFF') 
                  : (theme === 'dark' ? '#94A3B8' : '#64748B'),
              }}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t.howItWorks.tabStandard}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('containment');
                setCurrentStep(0);
              }}
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2"
              style={{
                backgroundColor: activeTab === 'containment' 
                  ? (theme === 'dark' ? '#EF4444' : '#B91C1C') 
                  : 'transparent',
                color: activeTab === 'containment' 
                  ? '#FFFFFF' 
                  : (theme === 'dark' ? '#94A3B8' : '#64748B'),
              }}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{t.howItWorks.tabContainment}</span>
            </button>
          </div>

          {/* Animation Play/Pause & Reset Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
              }}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{language === 'fr' ? 'Pause' : language === 'ar' ? 'إيقاف مؤقت' : 'Pause'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'fr' ? 'Lecture' : language === 'ar' ? 'تشغيل' : 'Play'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => setCurrentStep(0)}
              title="Reset to Step 1"
              className="p-1.5 rounded-lg border text-xs font-mono transition-all"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                color: theme === 'dark' ? '#94A3B8' : '#64748B',
              }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pipeline Visual Stages (Horizontal Animated Stepper) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((step, idx) => {
            const isActive = currentStep === idx;
            const isPassed = currentStep > idx;

            return (
              <button
                key={step.id}
                onClick={() => {
                  setCurrentStep(idx);
                  setIsPlaying(false);
                }}
                className="p-4 rounded-xl text-left border transition-all relative overflow-hidden flex flex-col justify-between"
                style={{
                  backgroundColor: isActive
                    ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.12)' : '#F0F9FF')
                    : (theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF'),
                  borderColor: isActive
                    ? (activeTab === 'ingress' 
                        ? (theme === 'dark' ? '#38BDF8' : '#0369A1') 
                        : (theme === 'dark' ? '#F87171' : '#B91C1C'))
                    : isPassed
                      ? (theme === 'dark' ? 'rgba(52, 211, 153, 0.3)' : '#BBF7D0')
                      : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0'),
                  boxShadow: isActive
                    ? (theme === 'dark' ? 'inset 0 1px 0 0 rgba(56, 189, 248, 0.2)' : '0 2px 4px rgba(3, 105, 161, 0.1)')
                    : 'none',
                }}
              >
                {/* Active progress bar top indicator */}
                {isActive && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      backgroundColor: activeTab === 'ingress'
                        ? (theme === 'dark' ? '#38BDF8' : '#0369A1')
                        : (theme === 'dark' ? '#F87171' : '#B91C1C'),
                    }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="text-xs font-mono font-bold"
                      style={{
                        color: isActive
                          ? (activeTab === 'ingress' ? (theme === 'dark' ? '#38BDF8' : '#0369A1') : (theme === 'dark' ? '#F87171' : '#B91C1C'))
                          : (theme === 'dark' ? '#64748B' : '#94A3B8'),
                      }}
                    >
                      STAGE {step.number}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : isActive ? (
                      <span className="w-2 h-2 rounded-full animate-ping"
                        style={{
                          backgroundColor: activeTab === 'ingress' ? '#38BDF8' : '#EF4444',
                        }}
                      />
                    ) : (
                      <span className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
                        }}
                      />
                    )}
                  </div>

                  <div className="text-xs font-bold truncate"
                    style={{ color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}
                  >
                    {step.title}
                  </div>
                </div>

                <div className="text-[10px] font-mono mt-3 truncate"
                  style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                >
                  {step.component}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive & Live Telemetry Inspector */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Stage Breakdown & Architecture Rules */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.08)' : '0 1px 3px rgba(15,23,42,0.08)',
            }}
          >
            <div>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold"
                  style={{
                    backgroundColor: activeTab === 'ingress' 
                      ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#E0F2FE')
                      : (theme === 'dark' ? 'rgba(239, 68, 68, 0.15)' : '#FEE2E2'),
                    color: activeTab === 'ingress'
                      ? (theme === 'dark' ? '#38BDF8' : '#0369A1')
                      : (theme === 'dark' ? '#F87171' : '#B91C1C'),
                    border: '1px solid',
                    borderColor: activeTab === 'ingress'
                      ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#BAE6FD')
                      : (theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : '#FECACA'),
                  }}
                >
                  STAGE {activeStepData.number} // {activeStepData.component}
                </span>
                <span className="text-xs font-mono"
                  style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                >
                  Target: {activeStepData.target}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                {activeStepData.title}
              </h3>
              <p className="text-xs font-mono mb-4"
                style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
              >
                {activeStepData.subtitle}
              </p>

              <div className="text-sm leading-relaxed mb-6"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                {activeStepData.details}
              </div>

              {/* Security Enforcement Box */}
              <div className="p-4 rounded-xl border flex items-start gap-3"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                }}
              >
                <Lock className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: activeTab === 'ingress' ? (theme === 'dark' ? '#38BDF8' : '#0369A1') : (theme === 'dark' ? '#F87171' : '#B91C1C') }}
                />
                <div>
                  <strong className="block text-xs font-mono mb-1"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {language === 'fr' ? 'GARANTIE DE SÉCURITÉ / RÈGLE EN VIGUEUR' : language === 'ar' ? 'ضمان الأمان / القاعدة المطبقة' : 'SECURITY GUARANTEE / ENFORCED RULE'}
                  </strong>
                  <p className="text-xs leading-relaxed"
                    style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
                  >
                    {activeStepData.securityAction}
                  </p>
                </div>
              </div>
            </div>

            {/* Stepper Footer Controls */}
            <div className="mt-8 pt-4 border-t flex items-center justify-between"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              }}
            >
              <div className="flex items-center gap-2">
                <button
                  disabled={currentStep === 0}
                  onClick={() => {
                    setCurrentStep((prev) => Math.max(0, prev - 1));
                    setIsPlaying(false);
                  }}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono disabled:opacity-30 transition-all"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                    color: theme === 'dark' ? '#CBD5E1' : '#334155',
                  }}
                >
                  {isRTL ? 'التالي ←' : '← Prev Step'}
                </button>
                <button
                  disabled={currentStep === steps.length - 1}
                  onClick={() => {
                    setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
                    setIsPlaying(false);
                  }}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono disabled:opacity-30 transition-all"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                    color: theme === 'dark' ? '#CBD5E1' : '#334155',
                  }}
                >
                  {isRTL ? '→ السابق' : 'Next Step →'}
                </button>
              </div>

              <span className="text-xs font-mono"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
              >
                Progress: {currentStep + 1} / {steps.length}
              </span>
            </div>
          </div>

          {/* Right Column: Live Terminal Telemetry & Architecture Node Diagram */}
          <div className="lg:col-span-5 p-6 rounded-2xl border flex flex-col justify-between shadow-xl"
            style={{
              backgroundColor: theme === 'dark' ? '#070A11' : '#0F172A',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#1E293B',
              color: '#F8FAFC',
            }}
          >
            <div>
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400">
                    aegis-gateway-engine.log
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  REAL-TIME TRACE
                </span>
              </div>

              {/* Streamed Log Output */}
              <div className="font-mono text-xs space-y-2 bg-black/40 p-4 rounded-xl border border-slate-800/80">
                <div className="text-slate-500">
                  // Event Stream Context: {activeTab === 'ingress' ? 'Zero-Trust Proxy Request' : 'Continuous SOAR Containment'}
                </div>
                <div className="text-emerald-400 break-all leading-relaxed">
                  {activeStepData.logLine}
                </div>
                <div className="text-slate-400 text-[11px] pt-2 border-t border-slate-800 flex justify-between">
                  <span>Target: {activeStepData.target}</span>
                  <span className="text-cyan-400">Actor: {activeStepData.actor}</span>
                </div>
              </div>

              {/* Architecture Node Visual Representation */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-3">
                <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                  Active Network Topology Layer
                </div>

                <div className="flex items-center justify-between p-2.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span>Traefik Gateway Cluster</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                    TLS 1.3
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <span>Authelia + Keycloak OIDC</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                    Argon2id + TOTP
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-slate-400" />
                    <span>Upstream Isolated Origin</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">
                    Zero Public IP
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>NIST SP 800-207 Zero-Trust Flow</span>
              <span className="text-cyan-400">Step {currentStep + 1} / {steps.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
