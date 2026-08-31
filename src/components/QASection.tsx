import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, CheckCircle2, Shield, ArrowRight, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface QASectionProps {
  onOpenDemoModal: () => void;
}

export const QASection: React.FC<QASectionProps> = ({ onOpenDemoModal }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const items = t.qa.items;
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || 'what-is-aegis', items[1]?.id || 'replace-firewall', items[7]?.id || 'why-no-vpn']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const categories = [
    { id: 'all', label: t.qa.allCategories },
    { id: 'why-zerotrust', label: 'Zero Trust & Firewalls' },
    { id: 'mechanics', label: 'Architecture & Mechanics' },
    { id: 'team-impact', label: 'Team Impact' },
    { id: 'beyond-beyondcorp', label: 'Beyond BeyondCorp' },
    { id: 'soc-visibility', label: 'MSSP SOC' },
    { id: 'security-deepdive', label: 'Deep Dive' },
  ];

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.detailedAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="qa" className="py-20 border-t relative overflow-hidden"
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
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.qa.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
          >
            {t.qa.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
          >
            {t.qa.subtitle}
          </p>
        </div>

        {/* Executive Summary Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border backdrop-blur-md"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : '#F0F9FF',
            borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
            boxShadow: theme === 'dark' ? 'inset 0 1px 0 0 rgba(56, 189, 248, 0.1)' : '0 1px 3px rgba(3, 105, 161, 0.08)',
          }}
        >
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold mb-3"
            style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
          >
            <Shield className="w-4 h-4" />
            <span>{t.whatAegisIs.summaryCardTitle}</span>
          </div>
          <p className="text-sm leading-relaxed"
            style={{ color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}
          >
            {t.whatAegisIs.summaryCardDesc}
          </p>
        </div>

        {/* Filter Controls: Categories & Search */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
                style={{
                  backgroundColor: selectedCategory === cat.id
                    ? (theme === 'dark' ? '#06B6D4' : '#0369A1')
                    : (theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF'),
                  color: selectedCategory === cat.id
                    ? (theme === 'dark' ? '#020617' : '#FFFFFF')
                    : (theme === 'dark' ? '#94A3B8' : '#64748B'),
                  border: '1px solid',
                  borderColor: selectedCategory === cat.id
                    ? (theme === 'dark' ? '#06B6D4' : '#0369A1')
                    : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1'),
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" 
              style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.qa.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 rounded-lg border text-xs focus:outline-none transition-colors"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
                color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
              }}
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-8 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border text-xs font-mono"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                color: theme === 'dark' ? '#94A3B8' : '#64748B',
              }}
            >
              {t.qa.noResults}
            </div>
          ) : (
            filteredItems.map(item => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border transition-all overflow-hidden"
                  style={{
                    backgroundColor: isOpen
                      ? (theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF')
                      : (theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF'),
                    borderColor: isOpen
                      ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.35)' : '#BAE6FD')
                      : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0'),
                    boxShadow: isOpen
                      ? (theme === 'dark' ? 'inset 0 1px 0 0 rgba(56, 189, 248, 0.15)' : '0 2px 5px rgba(15, 23, 42, 0.06)')
                      : (theme === 'dark' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.03)'),
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5">
                      <div className="text-xs font-mono uppercase tracking-wider"
                        style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                      >
                        {item.categoryLabel}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold leading-snug"
                        style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                      >
                        {item.question}
                      </h3>
                      {!isOpen && (
                        <p className="text-xs line-clamp-1 mt-1"
                          style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                        >
                          {item.shortAnswer}
                        </p>
                      )}
                    </div>

                    <div className="p-2 rounded-lg border shrink-0 mt-0.5"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                        color: theme === 'dark' ? '#CBD5E1' : '#475569',
                      }}
                    >
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t"
                      style={{
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                      }}
                    >
                      {/* Short summary callout */}
                      <div className="p-3.5 rounded-xl border text-xs font-mono mb-4"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#F0F9FF',
                          borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                          color: theme === 'dark' ? '#BAE6FD' : '#0369A1',
                        }}
                      >
                        <strong style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}>
                          Direct Answer: {' '}
                        </strong>
                        {item.shortAnswer}
                      </div>

                      {/* Detailed architectural explanation */}
                      <div className="text-sm leading-relaxed mb-4 whitespace-pre-line"
                        style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                      >
                        {item.detailedAnswer}
                      </div>

                      {/* Key takeaway */}
                      <div className="flex items-start gap-2 text-xs font-mono pt-3 border-t"
                        style={{
                          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                          color: theme === 'dark' ? '#94A3B8' : '#64748B',
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" 
                          style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                        />
                        <span>
                          <strong style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}>
                            {t.qa.keyTakeawayLabel}:{' '}
                          </strong>
                          {item.keyTakeaway}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Schedule Review Consultation Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs font-mono shrink-0 transition-all active:scale-95 shadow-sm"
            style={{
              backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
              color: theme === 'dark' ? '#020617' : '#FFFFFF',
            }}
          >
            <span>{t.nav.architectureReview}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
