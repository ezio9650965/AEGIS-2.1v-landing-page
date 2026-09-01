import React from 'react';
import { AlertOctagon, ShieldAlert, ArrowRight, XCircle, Unlock, Users, Radio, Network, KeyRound, AlertTriangle, ShieldOff } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const TheProblem: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldOff':
        return <ShieldOff className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5" />;
      case 'AlertTriangle':
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

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
            <span>{t.theProblem.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.theProblem.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.theProblem.subtitle}
          </p>
        </div>

        {/* Vulnerabilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.theProblem.vulnerabilities.map((vuln) => (
            <div 
              key={vuln.id}
              className="aegis-card p-6 rounded-2xl border flex flex-col justify-between transition-all backdrop-blur-md hover:border-red-500/40"
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
                  {getIcon(vuln.icon)}
                </div>
                <h3 className="text-base font-bold mb-1"
                  style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                >
                  {vuln.title}
                </h3>
                <div className="text-[11px] font-mono mb-3"
                  style={{ color: theme === 'dark' ? '#F87171' : '#B91C1C' }}
                >
                  {vuln.subtitle}
                </div>
                <p className="text-xs leading-relaxed mb-4"
                  style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
                >
                  {vuln.description}
                </p>
              </div>
              <div className="pt-3 border-t text-[11px] leading-relaxed font-mono"
                style={{
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                  color: theme === 'dark' ? '#CBD5E1' : '#64748B',
                }}
              >
                <span className="font-bold text-red-400">Impact: </span>
                {vuln.consequence}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
