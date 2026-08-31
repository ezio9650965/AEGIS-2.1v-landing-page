import React from 'react';
import { Radio, Users, CheckCircle2, ShieldCheck, BellRing, Filter, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ServiceTiering: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section id="service-tiering" className="py-20 border-t relative overflow-hidden"
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
            <Radio className="w-3.5 h-3.5" />
            <span>{t.serviceTiering.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.serviceTiering.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.serviceTiering.subtitle}
          </p>
        </div>

        {/* 2-Tier Architecture Diagram */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tier 1: AEGIS Dedicated SOC Operations */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between backdrop-blur-md"
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
                    TIER 01 // 24/7 365
                  </span>
                  <h3 className="text-xl font-bold mt-1"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {t.serviceTiering.tiers[0]?.name || 'AEGIS Dedicated SOC Operations'}
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
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-6"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
              >
                {t.serviceTiering.tiers[0]?.tagline || 'Continuous multi-tenant data pipelines monitoring and threat isolation.'}
              </p>

              <div className="space-y-3 font-mono text-xs">
                {t.serviceTiering.tiers[0]?.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl border flex items-start gap-3"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                    }}
                  >
                    {idx === 0 && <Filter className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }} />}
                    {idx === 1 && <Terminal className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }} />}
                    {idx > 1 && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }} />}
                    <span style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t text-[11px] font-mono flex items-center justify-between"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                color: theme === 'dark' ? '#38BDF8' : '#0369A1',
              }}
            >
              <span>{t.serviceTiering.slaTitle}</span>
              <span>{t.serviceTiering.tiers[0]?.responseTime || '24/7 LIVE COVERAGE'}</span>
            </div>
          </div>

          {/* Tier 2: Client IT / DevOps Portal */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between backdrop-blur-md"
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
                    TIER 02 // CUSTOMER INTERFACE
                  </span>
                  <h3 className="text-xl font-bold mt-1"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {t.serviceTiering.tiers[1]?.name || 'Client Scoped Incident Console'}
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
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-6"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
              >
                {t.serviceTiering.tiers[1]?.tagline || 'Curated, high-level management console tailored strictly to your infrastructure.'}
              </p>

              <div className="space-y-3 font-mono text-xs">
                {t.serviceTiering.tiers[1]?.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl border flex items-start gap-3"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#E2E8F0',
                    }}
                  >
                    {idx === 0 && <BellRing className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }} />}
                    {idx === 1 && <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }} />}
                    {idx > 1 && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }} />}
                    <span style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t text-[11px] font-mono flex items-center justify-between"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                color: theme === 'dark' ? '#34D399' : '#15803D',
              }}
            >
              <span>SCOPE: DEDICATED TENANT VIEW</span>
              <span>{t.serviceTiering.tiers[1]?.idealFor || 'EXECUTIVE REPORTING READY'}</span>
            </div>
          </div>
        </div>

        {/* Plain Value Proposition Statement */}
        <div className="mt-8 p-5 rounded-2xl border text-center backdrop-blur-md"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.08)',
          }}
        >
          <p className="text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto"
            style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
          >
            <strong style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }} className="font-mono">
              {t.serviceTiering.slaSubtitle}:
            </strong>{' '}
            {t.serviceTiering.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
