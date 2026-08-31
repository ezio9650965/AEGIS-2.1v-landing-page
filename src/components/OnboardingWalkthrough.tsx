import React, { useState } from 'react';
import { ONBOARDING_STEPS } from '../data';
import { UserCheck, Shield, CheckCircle2, ArrowRight, UserPlus, Mail, Key, QrCode, Lock, AlertOctagon, RefreshCw, UserMinus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const OnboardingWalkthrough: React.FC = () => {
  const { theme } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1: return UserPlus;
      case 2: return Mail;
      case 3: return Key;
      case 4: return QrCode;
      case 5: return Lock;
      case 6: return AlertOctagon;
      case 7: return RefreshCw;
      case 8: return UserMinus;
      default: return CheckCircle2;
    }
  };

  const activeStep = ONBOARDING_STEPS[activeStepIndex];
  const StepIcon = getStepIcon(activeStep.step);

  return (
    <section id="onboarding" className="py-20 border-t relative overflow-hidden"
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
            <UserCheck className="w-3.5 h-3.5" />
            <span>DAY-ONE ONBOARDING JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            New Employee Onboarding Walkthrough: Karim’s First Monday
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            Follow the 8-step journey of a new software developer joining the company. 
            See how AEGIS provides a friction-free day-one experience while strictly maintaining least-privilege boundaries and instant single-click offboarding.
          </p>
        </div>

        {/* 8-Step Timeline Horizontal Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {ONBOARDING_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const Icon = getStepIcon(step.step);

            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className="p-3 rounded-xl text-left border transition-all flex flex-col justify-between"
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
                  <div className="flex items-center justify-between mb-1.5">
                    <span 
                      className="text-[11px] font-mono font-bold"
                      style={{ color: isSelected ? (theme === 'dark' ? '#38BDF8' : '#0369A1') : (theme === 'dark' ? '#64748B' : '#94A3B8') }}
                    >
                      0{step.step}
                    </span>
                    <Icon className="w-3.5 h-3.5" 
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
          {/* Left Column: Narrative Details */}
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
                  STEP {activeStep.step} OF 08 // ONBOARDING ROADMAP
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

              <div className="p-4 rounded-xl border mb-6"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                }}
              >
                <div className="text-xs font-mono font-bold mb-1"
                  style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                >
                  WHAT KARIM EXPERIENCES:
                </div>
                <p className="text-sm leading-relaxed"
                  style={{ color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}
                >
                  {activeStep.action}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold"
                  style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
                >
                  UNDERLYING SECURITY MECHANISM:
                </div>
                <p className="text-xs leading-relaxed"
                  style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                >
                  {activeStep.securityMechanism}
                </p>
              </div>
            </div>

            {/* Stepper Navigation */}
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
                  ← Prev
                </button>
                <button
                  disabled={activeStepIndex === ONBOARDING_STEPS.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(ONBOARDING_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono disabled:opacity-30 transition-all"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                    color: theme === 'dark' ? '#CBD5E1' : '#334155',
                  }}
                >
                  Next →
                </button>
              </div>

              <span className="text-xs font-mono"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
              >
                Step {activeStepIndex + 1} of 08
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Takeaway Box */}
          <div className="lg:w-80 p-6 rounded-2xl border flex flex-col justify-between"
            style={{
              backgroundColor: theme === 'dark' ? '#070A11' : '#F8FAFC',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            }}
          >
            <div>
              <div className="text-xs font-mono font-bold mb-3 flex items-center gap-2"
                style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
              >
                <Shield className="w-4 h-4" />
                <span>ARCHITECTURAL PRINCIPLE</span>
              </div>

              <div className="p-4 rounded-xl border text-xs leading-relaxed"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : '#FFFFFF',
                  borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#BAE6FD',
                  color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
                }}
              >
                <strong>Key Takeaway:</strong> {activeStep.keyLesson}
              </div>

              <div className="mt-6 space-y-2 text-[11px] font-mono"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
              >
                <div className="flex items-center justify-between border-b pb-1"
                  style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0' }}
                >
                  <span>Active Directory:</span>
                  <span className="text-emerald-500 font-bold">Synchronized</span>
                </div>
                <div className="flex items-center justify-between border-b pb-1"
                  style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0' }}
                >
                  <span>MFA Mechanism:</span>
                  <span className="text-cyan-400 font-bold">FIDO2 / TOTP</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span>VPN Client:</span>
                  <span className="text-slate-400">None (Zero)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t text-[10px] font-mono text-center"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                color: theme === 'dark' ? '#64748B' : '#94A3B8',
              }}
            >
              Zero Trust Lifecycle Management
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
