import React from 'react';
import { Shield, Lock, ArrowRight, CheckCircle2, ShieldAlert, Cpu, Terminal, ExternalLink } from 'lucide-react';
import { NetworkGraph } from './NetworkGraph';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const { theme } = useTheme();

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Subtle Grid with theme-adjusted opacity */}
      <div 
        className="absolute inset-0 aegis-grid-bg pointer-events-none"
        style={{
          opacity: theme === 'dark' ? 0.6 : 0.4,
        }}
      />

      {/* Ambient background glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full pointer-events-none blur-[120px] -z-10"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.08)' : 'rgba(3, 105, 161, 0.03)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Technical Claims */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Version & NIST Framework Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono backdrop-blur-md"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                color: theme === 'dark' ? '#38BDF8' : '#0369A1',
              }}
            >
              <Shield className="w-3.5 h-3.5" />
              <span className="font-semibold">AEGIS 2.1v</span>
              <span style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.3)' : '#94A3B8' }}>|</span>
              <span>Zero-Trust Gateway &amp; MSSP SOC</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              Perimeter Firewalls Leave Blindspots.{' '}
              <span 
                className="inline-block"
                style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
              >
                Zero-Trust Isolation
              </span>{' '}
              Eliminates Them.
            </h1>

            {/* Plain English Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              AEGIS replaces implicit network trust with continuous per-request identity verification. 
              Built on a battle-tested reverse proxy gateway and backed by 24/7 Managed SOC containment, 
              we protect internal tools and databases against lateral movement with zero client VPN friction.
            </p>

            {/* Concrete Engineering Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>Zero Trust per HTTP/TCP Request</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>Micro-segmented Kernel Isolation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>&lt; 5s Automated Threat Containment</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>Zero Per-Seat SaaS Taxes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenDemoModal}
                id="hero-primary-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
                style={{
                  backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
                  color: theme === 'dark' ? '#020617' : '#FFFFFF',
                }}
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#how-it-works"
                className="px-5 py-3.5 rounded-xl border text-xs sm:text-sm font-mono backdrop-blur-md transition-all"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                  color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
                }}
              >
                Explore Ingress Pipeline
              </a>
            </div>

            {/* Honest Technical Notice */}
            <div className="pt-2 text-[11px] font-mono"
              style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }}
            >
              * Built on open-source foundations (Traefik, Authelia, Keycloak, Wazuh, Sysmon). No proprietary lock-in.
            </div>

          </div>

          {/* Right Column: Live Interactive Gateway Topology Visualizer */}
          <div className="lg:col-span-5">
            <NetworkGraph />
          </div>

        </div>
      </div>
    </section>
  );
};
