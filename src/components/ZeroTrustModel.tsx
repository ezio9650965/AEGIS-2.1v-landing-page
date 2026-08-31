import React from 'react';
import { ShieldCheck, Key, Lock, Eye, Zap, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ZeroTrustModel: React.FC = () => {
  const { theme } = useTheme();

  const pillars = [
    {
      icon: Key,
      title: '1. Identity as the Primary Perimeter',
      desc: 'Network location (IP address or Wi-Fi network) confers zero access rights. Every entity must present cryptographically signed, valid identity credentials.'
    },
    {
      icon: Lock,
      title: '2. Enforced Hardware-Backed MFA',
      desc: 'Eliminates password reuse and phishing-based credential stuffing with mandatory WebAuthn, FIDO2, and biometric multi-factor authentication.'
    },
    {
      icon: Layers,
      title: '3. Granular Least-Privilege Access',
      desc: 'Users and service accounts receive access strictly to the exact URL paths and micro-services necessary for their immediate task — never the whole network.'
    },
    {
      icon: Eye,
      title: '4. Continuous Contextual Monitoring',
      desc: 'Session trust is not static. AEGIS continuously evaluates client posture, impossible velocity travel, and endpoint telemetry throughout the session.'
    },
    {
      icon: Zap,
      title: '5. Automated Real-Time Containment',
      desc: 'When an anomaly or breach indicator is detected, containment executes programmatically in under 5 seconds (session kill and network quarantine).'
    }
  ];

  return (
    <section id="zero-trust-model" className="py-20 border-t relative overflow-hidden"
      style={{
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-4 backdrop-blur-sm"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
              borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
              borderWidth: '1px',
              color: theme === 'dark' ? '#38BDF8' : '#0369A1',
            }}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL PRINCIPLES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            The Zero-Trust Model, Explained Simply
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            &quot;Never trust, always verify.&quot; In plain business language, this means your internal servers treat a request from the CEO&apos;s office with the exact same rigorous cryptographic inspection as a request from an untrusted public internet cafe.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 backdrop-blur-md"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                  boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.08)',
                }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                      borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                      borderWidth: '1px',
                      color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold mb-2"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs leading-relaxed"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
                  >
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t flex items-center justify-between text-[10px] font-mono"
                  style={{
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                    color: theme === 'dark' ? '#94A3B8' : '#64748B',
                  }}
                >
                  <span>PILLAR 0{idx + 1}</span>
                  <span style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}>VERIFIED</span>
                </div>
              </div>
            );
          })}

          {/* Beyond BeyondCorp Deep Dive Card */}
          <div className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#F0F9FF',
              borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#BAE6FD',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(56, 189, 248, 0.2)' : '0 2px 5px rgba(3, 105, 161, 0.1)',
            }}
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono mb-3 border"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#E0F2FE',
                  borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#BAE6FD',
                  color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                }}
              >
                <Zap className="w-3 h-3" />
                <span>ARCHITECTURAL ADVANCEMENT</span>
              </div>
              <h3 className="text-base font-bold mb-2"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                Going Beyond Basic BeyondCorp Access
              </h3>
              <p className="text-xs leading-relaxed"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                Basic Zero-Trust (like early BeyondCorp implementations) checks identity only at initial login. AEGIS extends this paradigm by layering <strong>continuous behavioral telemetry and automated containment</strong> onto every transaction.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t text-[10px] font-mono flex items-center gap-1"
              style={{
                borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
                color: theme === 'dark' ? '#38BDF8' : '#0369A1',
              }}
            >
              <span>ACCESS DECISION + ACTIVE CONTAINMENT</span>
            </div>
          </div>
        </div>

        {/* Business Impact Box */}
        <div className="mt-10 p-6 rounded-2xl border grid grid-cols-1 md:grid-cols-3 gap-6 backdrop-blur-md"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)' : '0 1px 3px rgba(15, 23, 42, 0.08)',
          }}
        >
          <div>
            <div className="text-xs font-mono mb-1 font-bold"
              style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
            >
              NO SUDDEN OUTAGES
            </div>
            <div className="text-sm font-semibold"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              Incremental Rollout
            </div>
            <p className="text-xs mt-1 leading-relaxed"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              Onboard one application at a time with zero disruption to active business services.
            </p>
          </div>
          <div>
            <div className="text-xs font-mono mb-1 font-bold"
              style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
            >
              AUDIT READINESS
            </div>
            <div className="text-sm font-semibold"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              Immutable Audit Trail
            </div>
            <p className="text-xs mt-1 leading-relaxed"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              Every user action and access decision is logged with cryptographic timestamps for compliance reviews.
            </p>
          </div>
          <div>
            <div className="text-xs font-mono mb-1 font-bold"
              style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
            >
              REDUCED RISK
            </div>
            <div className="text-sm font-semibold"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              Contained Compromise
            </div>
            <p className="text-xs mt-1 leading-relaxed"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              A phished credential only gives access to a single low-privilege view, immediately flagged by behavioral telemetry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
