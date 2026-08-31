import React, { useState } from 'react';
import { ROLE_EXPERIENCES } from '../data';
import { UserCheck, Shield, Clock, Lock, CheckCircle2, XCircle, ArrowRight, Info } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const EmployeeExperience: React.FC = () => {
  const { theme } = useTheme();
  const [selectedRoleId, setSelectedRoleId] = useState<string>(ROLE_EXPERIENCES[0].roleId);

  const activeRole = ROLE_EXPERIENCES.find(r => r.roleId === selectedRoleId) || ROLE_EXPERIENCES[0];

  return (
    <section id="employee-experience" className="py-20 relative overflow-hidden">
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
            <span>DAY-IN-THE-LIFE WORKFLOW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            Employee Experience: Zero Friction, Strict Isolation
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            Security should empower employees, not get in their way. With AEGIS, authorized staff experience single-tap SSO in the morning and seamless browser access all day. 
            The security boundary remains invisible until someone attempts to access resources outside their authorized role.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {ROLE_EXPERIENCES.map(role => {
            const isSelected = selectedRoleId === role.roleId;
            return (
              <button
                key={role.roleId}
                onClick={() => setSelectedRoleId(role.roleId)}
                className="p-4 rounded-xl text-left border transition-all"
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
                <div className="text-[11px] font-mono font-semibold mb-1"
                  style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                >
                  ROLE PROFILE
                </div>
                <div className="text-xs font-bold truncate"
                  style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                >
                  {role.roleName.split('/')[0]}
                </div>
                <div className="text-[10px] truncate mt-0.5"
                  style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                >
                  {role.department}
                </div>
              </button>
            );
          })}
        </div>

        {/* Role Detail & Day Timeline Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Role Overview & Permissions Matrix */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.08)',
            }}
          >
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-6"
                style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
              >
                <div>
                  <h3 className="text-lg font-bold"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {activeRole.roleName}
                  </h3>
                  <p className="text-xs font-mono"
                    style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                  >
                    Dept: {activeRole.department}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded border text-xs font-mono"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                    color: theme === 'dark' ? '#CBD5E1' : '#334155',
                  }}
                >
                  RBAC Group
                </span>
              </div>

              {/* Authorized Services */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold mb-3"
                  style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>AUTHORIZED RESOURCES (PERMITTED)</span>
                </div>
                <div className="space-y-1.5">
                  {activeRole.typicalAccess.map(item => (
                    <div key={item} className="px-3 py-2 rounded-lg border text-xs font-mono"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                        color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Restricted Services */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold mb-3"
                  style={{ color: theme === 'dark' ? '#F87171' : '#B91C1C' }}
                >
                  <XCircle className="w-4 h-4" />
                  <span>RESTRICTED TARGETS (CLEAN 403 / BLOCKED)</span>
                </div>
                <div className="space-y-1.5">
                  {activeRole.restrictedTargets.map(item => (
                    <div key={item} className="px-3 py-2 rounded-lg border text-xs font-mono"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.1)' : '#FEE2E2',
                        borderColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.2)' : '#FECACA',
                        color: theme === 'dark' ? '#CBD5E1' : '#7F1D1D',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Governance Callout */}
            <div className="mt-8 p-4 rounded-xl border flex items-start gap-3"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
              }}
            >
              <Info className="w-4 h-4 shrink-0 mt-0.5" 
                style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
              />
              <div className="text-xs leading-relaxed"
                style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
              >
                <strong className="block font-mono text-[11px] mb-0.5"
                  style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                >
                  GOVERNANCE RULE
                </strong>
                {activeRole.governanceNote}
              </div>
            </div>
          </div>

          {/* Right Column: Daily Chronological Experience Timeline */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.08)',
            }}
          >
            <div className="flex items-center justify-between border-b pb-3 mb-6"
              style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
            >
              <div className="text-sm font-bold flex items-center gap-2"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                <Clock className="w-4 h-4" 
                  style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                />
                <span>Daily Access Timeline</span>
              </div>
              <span className="text-xs font-mono"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
              >
                Single SSO Tap → Invisible Day
              </span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-700/30">
              {activeRole.dailyFlow.map((event) => (
                <div key={event.time} className="relative flex items-start gap-4 pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 top-1 w-3.5 h-3.5 rounded-full border-2"
                    style={{
                      backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
                      borderColor: theme === 'dark' ? '#38BDF8' : '#0369A1',
                      boxShadow: theme === 'dark' ? '0 0 6px rgba(56, 189, 248, 0.5)' : '0 0 4px rgba(3, 105, 161, 0.3)',
                    }}
                  />

                  <div className="w-full p-4 rounded-xl border"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                    }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold"
                        style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                      >
                        {event.time} // {event.action}
                      </span>
                    </div>

                    <div className="text-sm font-medium mb-2"
                      style={{ color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}
                    >
                      {event.experience}
                    </div>

                    <div className="p-2.5 rounded border text-xs font-mono"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : '#FFFFFF',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#CBD5E1',
                        color: theme === 'dark' ? '#94A3B8' : '#475569',
                      }}
                    >
                      <span style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}>
                        AEGIS Gateway Action:{' '}
                      </span>
                      {event.securityAction}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliberate Governance Design Banner */}
        <div className="mt-8 p-4 rounded-xl border flex items-center justify-between text-xs backdrop-blur-md"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#F0F9FF',
            borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
            color: theme === 'dark' ? '#CBD5E1' : '#334155',
          }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 shrink-0" 
              style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
            />
            <span>
              <strong style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}>
                Deliberate Governance Design:
              </strong>{' '}
              Executive and Admin titles do NOT confer blanket infrastructure access. Access maps strictly to defined job roles.
            </span>
          </div>
          <span className="font-mono text-[11px] font-bold hidden sm:inline"
            style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
          >
            LEAST PRIVILEGE BY DEFAULT
          </span>
        </div>
      </div>
    </section>
  );
};
