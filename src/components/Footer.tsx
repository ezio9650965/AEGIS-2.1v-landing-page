import React from 'react';
import { ArrowUp, ExternalLink, Printer, FileDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintSummary = () => {
    window.print();
  };

  const backToTopLabel = language === 'fr' ? 'Haut de page' : language === 'ar' ? 'العودة للأعلى' : 'Back to top';
  const socStatusLabel = language === 'fr' ? '● Statut SOC : Opérationnel' : language === 'ar' ? '● حالة مركز العمليات: يعمل بشكل كامل' : '● SOC Status: Operational';

  return (
    <footer className="border-t relative overflow-hidden"
      style={{
        backgroundColor: theme === 'dark' ? '#070A11' : '#F1F5F9',
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Presentation Summary Download Banner (Screen Only) */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl border transition-all duration-300 print:hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.65)' : '#FFFFFF',
            borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#CBD5E1',
            boxShadow: theme === 'dark' ? '0 4px 20px -2px rgba(0, 0, 0, 0.5)' : '0 2px 8px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.12)' : '#E0F2FE',
                color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                border: theme === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #BAE6FD',
              }}
            >
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold font-mono tracking-tight"
                style={{ color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}
              >
                {t.footer.downloadSummary}
              </div>
              <p className="text-xs mt-0.5"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
              >
                {t.footer.downloadSummaryDesc}
              </p>
            </div>
          </div>

          <button
            onClick={handlePrintSummary}
            id="download-summary-footer-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-sm active:scale-95 shrink-0"
            style={{
              backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
              color: theme === 'dark' ? '#020617' : '#FFFFFF',
            }}
            title={t.footer.downloadSummary}
          >
            <Printer className="w-4 h-4" />
            <span>{t.footer.downloadSummary}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0"
                style={{
                  backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
                  color: theme === 'dark' ? '#020617' : '#FFFFFF',
                }}
              >
                A
              </div>
              <span className="font-extrabold text-sm tracking-wider font-mono"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                AEGIS <span style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}>SECURITY</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-md"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
            >
              {t.footer.description}
            </p>
            <div className="flex items-center gap-4 text-xs font-mono"
              style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }}
            >
              <span>{t.footer.legalNote}</span>
              <span>•</span>
              <span>NIST SP 800-207</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="text-xs font-mono font-bold uppercase mb-3"
              style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
            >
              {t.footer.architectureTitle}
            </div>
            <ul className="space-y-2 text-xs"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
            >
              <li><a href="#how-it-works" className="hover:underline">{t.nav.howItWorks}</a></li>
              <li><a href="#zero-trust-model" className="hover:underline">{t.zeroTrustModel.badge}</a></li>
              <li><a href="#comparison" className="hover:underline">{t.nav.comparison}</a></li>
              <li><a href="#onboarding" className="hover:underline">{t.nav.onboarding}</a></li>
              <li><a href="#qa" className="hover:underline">{t.nav.qa}</a></li>
            </ul>
          </div>

          {/* Col 3: Operations, Resources & Support */}
          <div>
            <div className="text-xs font-mono font-bold uppercase mb-3"
              style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
            >
              {t.footer.securityTitle}
            </div>
            <ul className="space-y-2 text-xs"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
            >
              <li><a href="#service-tiering" className="hover:underline">{t.nav.msspSoc}</a></li>
              <li><a href="#employee-experience" className="hover:underline">{t.nav.roleExperience}</a></li>
              <li><a href="#installation" className="hover:underline">{t.installation.badge}</a></li>
              <li>
                <a
                  href="https://aegis-v2-1-project-report-blueprint-723554623670.europe-west2.run.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-1 font-medium"
                  style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
                >
                  <span>{t.hero.reportLink}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ezio9650965/AEGIS-2.1v-overview.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-1"
                >
                  <span>{t.nav.githubSpec}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </li>
              <li><span className="font-mono text-[11px] text-emerald-500 font-bold">{socStatusLabel}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          style={{
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
            color: theme === 'dark' ? '#64748B' : '#94A3B8',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} AEGIS Security Systems. {t.footer.rightsReserved}
          </div>
          <div className="flex items-center gap-6 print:hidden">
            <button
              onClick={handlePrintSummary}
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              title={t.footer.downloadSummary}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.footer.downloadSummary}</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors"
            >
              <span>{backToTopLabel}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Clean Print-Only Metadata Footer */}
        <div className="hidden print:block mt-8 pt-4 border-t text-[9pt] font-mono text-slate-600 border-slate-300">
          <div className="flex justify-between items-center">
            <span>AEGIS 2.1v Enterprise Architecture Summary • NIST SP 800-207 Aligned</span>
            <span>Confidential • Prepared for Stakeholder Review</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

