import React from 'react';
import { Shield, Key, Eye, Zap, Layers, Server, Lock, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const WhatAegisIs: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const pillarIcons = [Lock, Key, Server, Eye];

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
            <span>{t.whatAegisIs.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.whatAegisIs.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.whatAegisIs.subtitle}
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {t.whatAegisIs.pillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx % pillarIcons.length] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="p-7 rounded-3xl border flex flex-col justify-between backdrop-blur-md transition-all hover:scale-[1.01]"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                  boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.08)' : '0 2px 8px rgba(15,23,42,0.06)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between border-b pb-4 mb-5"
                    style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
                  >
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider"
                        style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                      >
                        {pillar.tag}
                      </span>
                      <h3 className="text-lg font-bold mt-1"
                        style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                        borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                        borderWidth: '1px',
                        color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
                  >
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t text-xs font-mono flex items-center justify-between"
                  style={{
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                    color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                  }}
                >
                  <span className="font-semibold">{pillar.tech}</span>
                  <span className="text-emerald-500 font-bold">● Active Zero Trust</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-Layer Defense in Depth Section */}
        {t.whatAegisIs.defenseLayers && (
          <div className="mt-12 p-6 sm:p-8 rounded-3xl border"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
            }}
          >
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider mb-6 flex items-center gap-2"
              style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
            >
              <Layers className="w-4 h-4" />
              <span>{t.whatAegisIs.defenseLayersTitle}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.whatAegisIs.defenseLayers.map((layer, idx) => (
                <div key={idx} className="p-4 rounded-2xl border"
                  style={{
                    backgroundColor: theme === 'dark' ? '#0A0E17' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                  }}
                >
                  <div className="text-xs font-mono font-bold mb-1"
                    style={{ color: theme === 'dark' ? '#34D399' : '#15803D' }}
                  >
                    {layer.name}
                  </div>
                  <div className="text-xs font-bold mb-2"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                  >
                    {layer.role}
                  </div>
                  <p className="text-xs leading-relaxed"
                    style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                  >
                    {layer.mechanism}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
