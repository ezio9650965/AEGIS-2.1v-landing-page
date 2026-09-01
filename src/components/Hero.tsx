import React from 'react';
import { Shield, Lock, ArrowRight, CheckCircle2, ShieldAlert, Cpu, Terminal, ExternalLink, Bot } from 'lucide-react';
import { NetworkGraph } from './NetworkGraph';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const { theme } = useTheme();
  const { t, isRTL } = useLanguage();

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
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
              <span className="font-semibold">{t.hero.badgeVersion}</span>
              <span style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.3)' : '#94A3B8' }}>|</span>
              <span>{t.hero.badgeCategory}</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              {t.hero.titlePart1}{' '}
              <span 
                className="inline-block"
                style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
              >
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titlePart2}
            </h1>

            {/* Plain English Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              {t.hero.subtitle}
            </p>

            {/* Concrete Engineering Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>{t.hero.guarantee1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>{t.hero.guarantee2}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>{t.hero.guarantee3}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" 
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                />
                <span>{t.hero.guarantee4}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4">
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenDemoModal}
                  id="hero-primary-cta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 whitespace-nowrap"
                  style={{
                    backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
                    color: theme === 'dark' ? '#020617' : '#FFFFFF',
                  }}
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>

                <a
                  href="#how-it-works"
                  id="hero-secondary-cta"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border text-xs sm:text-sm font-mono backdrop-blur-md transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                    color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
                  }}
                >
                  {t.hero.ctaSecondary}
                </a>

                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-aegis-chat'))}
                  id="hero-ask-ai-cta"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border text-xs sm:text-sm font-mono backdrop-blur-md transition-all whitespace-nowrap active:scale-95"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.08)' : '#F0F9FF',
                    borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#BAE6FD',
                    color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                  }}
                >
                  <Bot className="w-4 h-4 text-sky-400" />
                  <span>Ask Architecture AI</span>
                </button>
              </div>

              {/* Smaller, distinct link to the full technical blueprint report */}
              <div className="pt-0.5">
                <a
                  href="https://aegis-v2-1-project-report-blueprint-723554623670.europe-west2.run.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-technical-report-link"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono transition-all duration-200"
                  style={{
                    color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                  }}
                >
                  <span className="group-hover:underline underline-offset-4 decoration-1">
                    {t.hero.reportLink}
                  </span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    {isRTL ? '←' : '→'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 shrink-0" />
                </a>
              </div>
            </div>

            {/* Honest Technical Notice */}
            <div className="pt-2 text-[11px] font-mono"
              style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }}
            >
              {t.hero.openSourceNote}
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
