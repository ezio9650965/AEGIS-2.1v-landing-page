import React from 'react';
import { ShieldCheck, Key, Lock, Eye, Zap, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ZeroTrustModel: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const iconMap = [Key, Lock, Layers, Eye, Zap];

  const pillars = t.zeroTrustModel.principles.map((principle, idx) => ({
    icon: iconMap[idx] || ShieldCheck,
    title: principle.title,
    rule: principle.rule,
    desc: principle.description,
    howAegisEnforces: principle.howAegisEnforces
  }));

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
            <span>{t.zeroTrustModel.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.zeroTrustModel.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.zeroTrustModel.subtitle}
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
                  <h3 className="text-base font-bold mb-1"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono mb-2"
                    style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                  >
                    {pillar.rule}
                  </div>
                  <p className="text-xs leading-relaxed mb-3"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
                  >
                    {pillar.desc}
                  </p>
                  <div className="p-2.5 rounded-lg border text-[11px] font-mono"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                      color: theme === 'dark' ? '#94A3B8' : '#64748B',
                    }}
                  >
                    <span className="font-semibold block mb-0.5" style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}>
                      AEGIS Enforcement:
                    </span>
                    {pillar.howAegisEnforces}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t flex items-center justify-between text-[10px] font-mono"
                  style={{
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                    color: theme === 'dark' ? '#94A3B8' : '#64748B',
                  }}
                >
                  <span>PILLAR 0{idx + 1}</span>
                  <span style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}>NIST 800-207</span>
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
                <span>NIST &amp; CISA ALIGNED</span>
              </div>
              <h3 className="text-base font-bold mb-2"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                {t.zeroTrustModel.nistRef}
              </h3>
              <p className="text-xs leading-relaxed"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                {t.hero.subtitle}
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
      </div>
    </section>
  );
};
