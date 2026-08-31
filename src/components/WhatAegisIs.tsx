import React from 'react';
import { Shield, Key, Eye, Zap, Layers, Server, Lock, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WhatAegisIs: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="what-is-aegis" className="py-20 border-t relative overflow-hidden"
      style={{
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
      }}
    >
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
            <Shield className="w-3.5 h-3.5" />
            <span>THE AEGIS ADVANTAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            Two Unified Pillars: Zero-Trust Gateway + 24/7 MSSP SOC
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            AEGIS solves the perimeter challenge by combining high-speed proxy authentication with round-the-clock managed security monitoring and automated containment.
          </p>
        </div>

        {/* 2 Primary Pillars Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Pillar 1: Zero-Trust Reverse Proxy Gateway */}
          <div className="p-7 sm:p-9 rounded-3xl border flex flex-col justify-between backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.08)' : '0 1px 3px rgba(15,23,42,0.08)',
            }}
          >
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-6"
                style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
              >
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                  >
                    PILLAR 01 // ACCESS LAYER
                  </span>
                  <h3 className="text-xl font-bold mt-1"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    Identity-Aware Reverse Proxy Gateway
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                    borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                    borderWidth: '1px',
                    color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                  }}
                >
                  <Lock className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-6"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
              >
                Every request entering the enterprise is cryptographically challenged at the edge before it can touch internal databases or services:
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                  }}
                >
                  <Key className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                  />
                  <div>
                    <strong className="block font-sans text-xs"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      Single Sign-On &amp; Hardware MFA
                    </strong>
                    <span style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}>
                      Keycloak OIDC directory integration with Argon2id password hashing and FIDO2/TOTP MFA enforcement.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                  }}
                >
                  <Layers className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                  />
                  <div>
                    <strong className="block font-sans text-xs"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      Per-Request Path Authorization
                    </strong>
                    <span style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}>
                      Granular route ACLs (e.g. policy: two_factor on /admin) evaluate identity on every resource fetch.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                  }}
                >
                  <Server className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                  />
                  <div>
                    <strong className="block font-sans text-xs"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      Kernel-Level Micro-Segmentation
                    </strong>
                    <span style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}>
                      Internal databases and admin services have zero public IPs and are unreachable except via proxy routes.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t text-[11px] font-mono flex items-center justify-between"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                color: theme === 'dark' ? '#38BDF8' : '#0369A1',
              }}
            >
              <span>LATENCY OVERHEAD: &lt; 2.5MS</span>
              <span>ZERO CLIENT INSTALLATION</span>
            </div>
          </div>

          {/* Pillar 2: 24/7 Managed SOC & Automated Containment */}
          <div className="p-7 sm:p-9 rounded-3xl border flex flex-col justify-between backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.08)' : '0 1px 3px rgba(15,23,42,0.08)',
            }}
          >
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-6"
                style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
              >
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                  >
                    PILLAR 02 // OPERATIONS &amp; SOC
                  </span>
                  <h3 className="text-xl font-bold mt-1"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    24/7 Managed SOC &amp; Automated SOAR
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(52, 211, 153, 0.1)' : '#DCFCE7',
                    borderColor: theme === 'dark' ? 'rgba(52, 211, 153, 0.25)' : '#BBF7D0',
                    borderWidth: '1px',
                    color: theme === 'dark' ? '#34D399' : '#15803D',
                  }}
                >
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-6"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
              >
                Our dedicated SOC analysts continuously monitor behavioral telemetry, eliminating false positives and enforcing rapid containment:
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                  }}
                >
                  <Eye className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                  />
                  <div>
                    <strong className="block font-sans text-xs"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      Continuous Behavioral Telemetry
                    </strong>
                    <span style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}>
                      Wazuh &amp; Sysmon sensors stream endpoint execution and gateway events into ELK with MITRE ATT&amp;CK tagging.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                  }}
                >
                  <Zap className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                  />
                  <div>
                    <strong className="block font-sans text-xs"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      Automated Containment (&lt; 5s)
                    </strong>
                    <span style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}>
                      SOAR playbooks revoke active Keycloak/Authelia session cookies globally and quarantine compromised hosts automatically.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                  />
                  <div>
                    <strong className="block font-sans text-xs"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      Zero Alert Fatigue for Client IT
                    </strong>
                    <span style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}>
                      AEGIS analysts perform raw alert triage. Your internal IT receives curated, high-fidelity escalation alerts only when human action is needed.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t text-[11px] font-mono flex items-center justify-between"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                color: theme === 'dark' ? '#34D399' : '#15803D',
              }}
            >
              <span>24/7 365 LIVE COVERAGE</span>
              <span>ISOLATED TENANT REPORTING</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
