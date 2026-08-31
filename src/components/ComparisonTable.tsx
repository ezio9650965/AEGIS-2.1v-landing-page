import React, { useState } from 'react';
import { COMPARISON_DATA } from '../data';
import { Check, X, Minus, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonTableProps {
  onOpenDemoModal: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenDemoModal }) => {
  const { theme } = useTheme();
  const { t, isRTL, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Authentication', 'Network Architecture', 'Session Governance', 'Incident Response', 'Resilience', 'Traffic Handling', 'Implementation'];

  const filteredData = activeCategory === 'All' 
    ? COMPARISON_DATA 
    : COMPARISON_DATA.filter(item => item.category === activeCategory);

  const renderStatus = (status: 'supported' | 'partial' | 'unsupported', text: string, isAegis = false) => {
    switch (status) {
      case 'supported':
        return (
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(52, 211, 153, 0.15)' : '#DCFCE7',
                color: theme === 'dark' ? '#34D399' : '#15803D',
                border: '1px solid',
                borderColor: theme === 'dark' ? 'rgba(52, 211, 153, 0.3)' : '#BBF7D0',
              }}
            >
              <Check className="w-3.5 h-3.5" />
              <span>Full Zero Trust</span>
            </div>
            <p className="text-xs leading-relaxed"
              style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
            >
              {text}
            </p>
          </div>
        );
      case 'partial':
        return (
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(251, 191, 36, 0.15)' : '#FEF3C7',
                color: theme === 'dark' ? '#FBBF24' : '#B45309',
                border: '1px solid',
                borderColor: theme === 'dark' ? 'rgba(251, 191, 36, 0.3)' : '#FDE68A',
              }}
            >
              <Minus className="w-3.5 h-3.5" />
              <span>Partial / Static</span>
            </div>
            <p className="text-xs leading-relaxed"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
            >
              {text}
            </p>
          </div>
        );
      case 'unsupported':
        return (
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.12)' : '#FEE2E2',
                color: theme === 'dark' ? '#F87171' : '#B91C1C',
                border: '1px solid',
                borderColor: theme === 'dark' ? 'rgba(248, 113, 113, 0.25)' : '#FECACA',
              }}
            >
              <X className="w-3.5 h-3.5" />
              <span>Implicit Trust Risk</span>
            </div>
            <p className="text-xs leading-relaxed"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
            >
              {text}
            </p>
          </div>
        );
    }
  };

  return (
    <section id="comparison" className="py-20 border-t relative overflow-hidden"
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.comparison.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.comparison.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
              style={{
                backgroundColor: activeCategory === cat
                  ? (theme === 'dark' ? '#06B6D4' : '#0369A1')
                  : (theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF'),
                color: activeCategory === cat
                  ? (theme === 'dark' ? '#020617' : '#FFFFFF')
                  : (theme === 'dark' ? '#94A3B8' : '#64748B'),
                border: '1px solid',
                borderColor: activeCategory === cat
                  ? (theme === 'dark' ? '#06B6D4' : '#0369A1')
                  : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1'),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Desktop Table / Mobile Cards */}
        <div className="mt-8 overflow-x-auto">
          <div className="min-w-[840px] rounded-2xl border overflow-hidden backdrop-blur-md"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.08)',
            }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b text-xs font-mono font-bold"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F8FAFC',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
              }}
            >
              <div className="col-span-3 p-4">
                {language === 'fr' ? 'CRITÈRE / CAPACITÉ' : language === 'ar' ? 'المعيار / القدرة الأمنية' : 'SECURITY CRITERIA'}
              </div>
              <div className="col-span-3 p-4 border-l"
                style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
              >
                {t.comparison.colPerimeter}
              </div>
              <div className="col-span-3 p-4 border-l"
                style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
              >
                {t.comparison.colVpn}
              </div>
              <div className="col-span-3 p-4 border-l font-extrabold"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#F0F9FF',
                  borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                  color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                }}
              >
                {t.comparison.colAegis}
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
              }}
            >
              {filteredData.map((row, idx) => (
                <div 
                  key={row.capability} 
                  className="grid grid-cols-12 transition-colors"
                  style={{
                    backgroundColor: idx % 2 === 1 
                      ? (theme === 'dark' ? 'rgba(255, 255, 255, 0.015)' : '#FBFDFF') 
                      : 'transparent',
                  }}
                >
                  {/* Capability Name & Category */}
                  <div className="col-span-3 p-4">
                    <div className="text-xs font-bold"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      {row.capability}
                    </div>
                    <span className="text-[10px] font-mono mt-1 inline-block"
                      style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                    >
                      {row.category}
                    </span>
                  </div>

                  {/* Traditional Firewall */}
                  <div className="col-span-3 p-4 border-l"
                    style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
                  >
                    {renderStatus(row.perimeterFirewall.status, row.perimeterFirewall.description)}
                  </div>

                  {/* Corporate VPN */}
                  <div className="col-span-3 p-4 border-l"
                    style={{ borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
                  >
                    {renderStatus(row.vpnTrust.status, row.vpnTrust.description)}
                  </div>

                  {/* AEGIS Gateway */}
                  <div className="col-span-3 p-4 border-l"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.04)' : '#F8FCFF',
                      borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
                    }}
                  >
                    {renderStatus(row.aegisGateway.status, row.aegisGateway.description, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Insight Callout */}
        <div className="mt-8 p-6 rounded-2xl border backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.08)',
          }}
        >
          <div>
            <div className="text-sm font-bold"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              {language === 'fr' ? 'La Différence Architecturale Fondamentale' : language === 'ar' ? 'الفارق الهندسي الجوهري' : 'The Fundamental Architectural Difference'}
            </div>
            <p className="text-xs mt-1"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              {language === 'fr' 
                ? 'Les pare-feu traditionnels protègent les réseaux en bloc. AEGIS authentifie et isole chaque ressource et chaque identité de manière granulaire.'
                : language === 'ar'
                ? 'جدران الحماية التقليدية تفترض الأمان داخل المحيط، بينما بنية AEGIS تتحقق من كل معاملة وهوية رقمياً قبل تفويض الوصول لأي خدمة معزولة.'
                : 'Perimeter firewalls protect network perimeters in bulk. AEGIS authenticates every single transaction and identity cryptographically before proxying.'}
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold shrink-0 transition-all active:scale-95"
            style={{
              backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
              color: theme === 'dark' ? '#020617' : '#FFFFFF',
            }}
          >
            <span>{t.comparison.ctaButton}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
};
