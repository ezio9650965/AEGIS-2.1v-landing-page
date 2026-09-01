import React, { useState } from 'react';
import { Shield, Menu, X, ArrowRight, ExternalLink, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage, Language } from '../context/LanguageContext';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navLinks = [
    { label: t.nav.architecture, href: '#what-is-aegis' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.comparison, href: '#comparison' },
    { label: t.nav.roleExperience, href: '#employee-experience' },
    { label: t.nav.msspSoc, href: '#service-tiering' },
    { label: t.nav.onboarding, href: '#onboarding' },
    { label: t.nav.qa, href: '#qa' },
  ];

  const languages: { code: Language; label: string; shortLabel: string; flag: string }[] = [
    { code: 'en', label: 'English', shortLabel: 'EN', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', shortLabel: 'FR', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', shortLabel: 'عربي', flag: '🇸🇦' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-200"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(10, 14, 23, 0.85)' : 'rgba(248, 250, 252, 0.9)',
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo, Version & Last Updated Badge */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.12)' : '#E0F2FE',
                borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                borderWidth: '1px',
                color: theme === 'dark' ? '#38BDF8' : '#0369A1',
              }}
            >
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-extrabold tracking-wider"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                AEGIS
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                  color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                  border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #CBD5E1',
                }}
              >
                2.1v
              </span>
              {/* Freshness / Last Updated indicator */}
              <span 
                className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded border tracking-tight"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.06)' : '#F8FAFC',
                  color: theme === 'dark' ? '#94A3B8' : '#64748B',
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                }}
                title={t.nav.lastUpdated}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                <span>{t.nav.lastUpdated}</span>
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono transition-colors"
              style={{
                color: theme === 'dark' ? '#94A3B8' : '#475569',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme === 'dark' ? '#38BDF8' : '#0369A1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme === 'dark' ? '#94A3B8' : '#475569';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls, Language Switcher & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher Segmented Control */}
          <div 
            className="flex items-center p-1 rounded-lg border text-xs font-mono transition-colors"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#F1F5F9',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
            }}
            role="group"
            aria-label={t.nav.language}
          >
            <Globe className="w-3.5 h-3.5 mx-1 opacity-60" style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }} />
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  id={`lang-btn-${lang.code}`}
                  aria-pressed={isActive}
                  title={`Switch language to ${lang.label}`}
                  className="px-2 py-1 rounded text-xs font-semibold transition-all duration-200 flex items-center gap-1"
                  style={{
                    backgroundColor: isActive 
                      ? (theme === 'dark' ? '#38BDF8' : '#0369A1')
                      : 'transparent',
                    color: isActive
                      ? (theme === 'dark' ? '#0F172A' : '#FFFFFF')
                      : (theme === 'dark' ? '#94A3B8' : '#64748B'),
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  <span className="text-[11px] leading-none">{lang.flag}</span>
                  <span className="text-[11px]">{lang.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'AEGIS Light' : 'AEGIS Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'AEGIS Light' : 'AEGIS Dark'} mode`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
              color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
              boxShadow: theme === 'dark' ? 'none' : '0 1px 2px rgba(0,0,0,0.05)',
            }}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-semibold">{t.nav.lightMode}</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-slate-700" />
                <span className="text-[11px] font-semibold">{t.nav.darkMode}</span>
              </>
            )}
          </button>

          {/* GitHub Source Link */}
          <a
            href="https://github.com/ezio9650965/AEGIS-2.1v-overview.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              color: theme === 'dark' ? '#94A3B8' : '#475569',
            }}
          >
            <ExternalLink className="w-3 h-3" />
            <span>{t.nav.githubSpec}</span>
          </a>

          {/* Request Architecture Review CTA */}
          <button
            onClick={onOpenDemoModal}
            id="nav-cta-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all shadow-sm active:scale-95 whitespace-nowrap"
            style={{
              backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
              color: theme === 'dark' ? '#020617' : '#FFFFFF',
            }}
          >
            <span>{t.nav.architectureReview}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Hamburger, Language & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-1.5">
          {/* Quick mobile language toggle button */}
          <div className="flex items-center border rounded-lg overflow-hidden"
            style={{
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className="px-1.5 py-1 text-[11px] font-mono font-bold"
                style={{
                  backgroundColor: language === lang.code
                    ? (theme === 'dark' ? '#38BDF8' : '#0369A1')
                    : (theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#FFFFFF'),
                  color: language === lang.code
                    ? (theme === 'dark' ? '#0A0E17' : '#FFFFFF')
                    : (theme === 'dark' ? '#94A3B8' : '#64748B'),
                }}
              >
                {lang.shortLabel}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border text-xs"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              color: theme === 'dark' ? '#F8FAFC' : '#0F172A',
            }}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b px-4 py-4 space-y-3"
          style={{
            backgroundColor: theme === 'dark' ? '#0D1321' : '#FFFFFF',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
          }}
        >
          <div className="pb-2 flex items-center justify-between border-b"
            style={{
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
            }}
          >
            <span className="text-[10px] font-mono font-medium flex items-center gap-1.5"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span>{t.nav.lastUpdated}</span>
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono py-1.5"
              style={{
                color: theme === 'dark' ? '#CBD5E1' : '#334155',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* External links in mobile menu */}
          <div className="pt-2 border-t space-y-2"
            style={{
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
            }}
          >
            <a
              href="https://aegis-v2-1-project-report-blueprint-723554623670.europe-west2.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs font-mono py-1.5"
              style={{
                color: theme === 'dark' ? '#38BDF8' : '#0369A1',
              }}
            >
              <span>{t.hero.reportLink}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="https://github.com/ezio9650965/AEGIS-2.1v-overview.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs font-mono py-1.5"
              style={{
                color: theme === 'dark' ? '#94A3B8' : '#64748B',
              }}
            >
              <span>{t.nav.githubSpec}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          <div className="pt-2 border-t flex flex-col gap-2"
            style={{
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2"
              style={{
                backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
                color: theme === 'dark' ? '#020617' : '#FFFFFF',
              }}
            >
              <span>{t.nav.architectureReview}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

