import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Find the hero section or use a scroll offset past typical hero height
      const heroElement = document.getElementById('hero') || document.querySelector('section');
      let threshold = 480;
      if (heroElement) {
        threshold = heroElement.offsetTop + heroElement.offsetHeight - 120;
      }

      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsVisible(currentScroll > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const label = language === 'fr' ? 'Haut de page' : language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top';

  return (
    <button
      type="button"
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg print:hidden focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-75 pointer-events-none'
      }`}
      style={{
        backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
        borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.3)' : '#CBD5E1',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: theme === 'dark' ? '#38BDF8' : '#0369A1',
        boxShadow: theme === 'dark'
          ? '0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 0 15px -2px rgba(6, 182, 212, 0.25)'
          : '0 10px 25px -5px rgba(15, 23, 42, 0.15), 0 0 10px -2px rgba(3, 105, 161, 0.1)',
      }}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
