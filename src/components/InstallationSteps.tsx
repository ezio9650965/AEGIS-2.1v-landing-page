import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Terminal, Clock, Globe, KeyRound, Server, Activity, Copy, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface InstallationStepsProps {
  onOpenDemoModal: () => void;
}

export const InstallationSteps: React.FC<InstallationStepsProps> = ({ onOpenDemoModal }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const steps = t.installation.steps;
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'KeyRound': return KeyRound;
      case 'Server': return Server;
      case 'ShieldCheck': return ShieldCheck;
      case 'Activity': return Activity;
      default: return Terminal;
    }
  };

  const activeStep = steps[activeStepIndex] || steps[0];
  const StepIcon = getStepIcon(activeStep.iconName);

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="installation" className="py-20 border-t relative overflow-hidden"
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
            <Clock className="w-3.5 h-3.5" />
            <span>{t.installation.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.installation.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.installation.subtitle}
          </p>
        </div>

        {/* Horizontal Stepper Selector */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {steps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const Icon = getStepIcon(step.iconName);

            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className="p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between"
                style={{
                  backgroundColor: isSelected
                    ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#F0F9FF')
                    : (theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF'),
                  borderColor: isSelected
                    ? (theme === 'dark' ? '#38BDF8' : '#0369A1')
                    : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0'),
                  boxShadow: isSelected
                    ? (theme === 'dark' ? 'inset 0 1px 0 0 rgba(56, 189, 248, 0.25)' : '0 2px 4px rgba(3, 105, 161, 0.1)')
                    : 'none',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="text-xs font-mono font-bold"
                      style={{ color: isSelected ? (theme === 'dark' ? '#38BDF8' : '#0369A1') : (theme === 'dark' ? '#64748B' : '#94A3B8') }}
                    >
                      {t.installation.stepPrefix} {step.number}
                    </span>
                    <Icon className="w-4 h-4" 
                      style={{ color: isSelected ? (theme === 'dark' ? '#38BDF8' : '#0369A1') : (theme === 'dark' ? '#64748B' : '#94A3B8') }}
                    />
                  </div>
                  <div className="text-xs font-bold line-clamp-2"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {step.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl border flex flex-col lg:flex-row gap-8 items-stretch backdrop-blur-md"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.08)',
          }}
        >
          {/* Left Column: Architectural Explanation */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                    color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                    border: '1px solid',
                    borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
                  }}
                >
                  {t.installation.phaseOfLabel} {activeStep.number} / 06
                </span>
                <span className="text-xs font-mono"
                  style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                >
                  {activeStep.subtitle}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                    color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                    border: '1px solid',
                    borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
                  }}
                >
                  <StepIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight"
                  style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                >
                  {activeStep.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed mb-6"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
              >
                {activeStep.description}
              </p>

              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold"
                  style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                >
                  {t.installation.deliverablesLabel}:
                </div>
                {activeStep.details.map(detail => (
                  <div key={detail} className="flex items-start gap-2 text-xs"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" 
                      style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                    />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="mt-8 pt-4 border-t flex items-center justify-between"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              }}
            >
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono disabled:opacity-30 transition-all"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                    color: theme === 'dark' ? '#CBD5E1' : '#334155',
                  }}
                >
                  {t.installation.prevPhase}
                </button>
                <button
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono disabled:opacity-30 transition-all"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                    color: theme === 'dark' ? '#CBD5E1' : '#334155',
                  }}
                >
                  {t.installation.nextPhase}
                </button>
              </div>

              <span className="text-xs font-mono"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
              >
                {t.installation.phaseOfLabel} {activeStepIndex + 1} / 06
              </span>
            </div>
          </div>

          {/* Right Column: Code Snippet / Config Preview */}
          {activeStep.codeSample && (
            <div className="lg:w-96 rounded-2xl border p-5 flex flex-col justify-between overflow-hidden"
              style={{
                backgroundColor: theme === 'dark' ? '#070A11' : '#0F172A',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#1E293B',
              }}
            >
              <div>
                <div className="flex items-center justify-between border-b pb-3 mb-3 border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.installation.configPreviewLabel}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(activeStep.codeSample || '')}
                    className="p-1 rounded hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-200"
                    title="Copy snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <pre className="text-[11px] font-mono text-cyan-300 leading-relaxed overflow-x-auto p-2 bg-black/40 rounded-lg border border-slate-800/80 max-h-60">
                  <code>{activeStep.codeSample}</code>
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>YAML / DNS SYNTAX</span>
                <span className="text-emerald-400">{t.installation.validatedLabel}</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.04)' : '#F0F9FF',
            borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
            boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(56, 189, 248, 0.08)' : '0 1px 3px rgba(3, 105, 161, 0.08)',
          }}
        >
          <div>
            <div className="text-sm font-bold"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              {t.installation.calloutTitle}
            </div>
            <div className="text-xs mt-1"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              {t.installation.calloutDesc}
            </div>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold shrink-0 transition-all active:scale-95 shadow-sm"
            style={{
              backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
              color: theme === 'dark' ? '#020617' : '#FFFFFF',
            }}
          >
            <span>{t.installation.calloutCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
