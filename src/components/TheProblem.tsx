import React from 'react';
import { AlertOctagon, ShieldAlert, ArrowRight, XCircle, Unlock, Users, Radio, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TheProblem: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="the-problem" className="py-20 border-t relative overflow-hidden"
      style={{
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-4 backdrop-blur-sm"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.1)' : '#FEE2E2',
              borderColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.2)' : '#FECACA',
              borderWidth: '1px',
              color: theme === 'dark' ? '#F87171' : '#B91C1C',
            }}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>THE PERIMETER VULNERABILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            Why Perimeter Firewalls &amp; VPNs Fail in Practice
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            Traditional security relies on the &quot;castle-and-moat&quot; model: a tough outer wall (the perimeter firewall or corporate VPN) with total trust inside. 
            Once an attacker breaches the perimeter via a single phished employee laptop, an unpatched staging service, or an insecure contractor device, there is zero internal barrier to prevent lateral movement across the entire network.
          </p>
        </div>

        {/* 3 Core Failure Points Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Failure Point 1 */}
          <div className="p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.08)' : '0 1px 3px rgba(15,23,42,0.08)',
            }}
          >
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.1)' : '#FEE2E2',
                  borderColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.25)' : '#FECACA',
                  borderWidth: '1px',
                  color: theme === 'dark' ? '#F87171' : '#B91C1C',
                }}
              >
                <Unlock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                1. Implicit Network Trust
              </h3>
              <p className="text-xs leading-relaxed"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
              >
                Perimeter firewalls filter traffic by IP address and port. Once inside the subnet or authenticated onto the VPN, users are implicitly trusted to reach internal databases, HR portals, and staging tools without re-validation.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t text-[11px] font-mono font-bold"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                color: theme === 'dark' ? '#F87171' : '#B91C1C',
              }}
            >
              FAILURE: FLAT LATERAL NETWORK
            </div>
          </div>

          {/* Failure Point 2 */}
          <div className="p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.08)' : '0 1px 3px rgba(15,23,42,0.08)',
            }}
          >
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.1)' : '#FEE2E2',
                  borderColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.25)' : '#FECACA',
                  borderWidth: '1px',
                  color: theme === 'dark' ? '#F87171' : '#B91C1C',
                }}
              >
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                2. Massive Blast Radius
              </h3>
              <p className="text-xs leading-relaxed"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
              >
                A single compromised marketing or sales laptop should not give an adversary access to production databases or administrative consoles. In traditional setups, one stolen session or VPN credential exposes the whole enterprise.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t text-[11px] font-mono font-bold"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                color: theme === 'dark' ? '#F87171' : '#B91C1C',
              }}
            >
              FAILURE: UNRESTRICTED ACCESS
            </div>
          </div>

          {/* Failure Point 3 */}
          <div className="p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.08)' : '0 1px 3px rgba(15,23,42,0.08)',
            }}
          >
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.1)' : '#FEE2E2',
                  borderColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.25)' : '#FECACA',
                  borderWidth: '1px',
                  color: theme === 'dark' ? '#F87171' : '#B91C1C',
                }}
              >
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                3. Alert Noise &amp; No Automated Response
              </h3>
              <p className="text-xs leading-relaxed"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
              >
                Traditional network devices generate thousands of raw syslog alerts daily, overwhelming internal IT teams. Attacks go unnoticed for months because there is no 24/7 automated session revocation or endpoint quarantine.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t text-[11px] font-mono font-bold"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                color: theme === 'dark' ? '#F87171' : '#B91C1C',
              }}
            >
              FAILURE: DELAYED CONTAINMENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
