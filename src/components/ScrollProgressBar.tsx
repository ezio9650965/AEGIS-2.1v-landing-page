import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();
  const { isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      id="scroll-progress-bar-container"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none print:hidden"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
      }}
      aria-hidden="true"
    >
      <div
        id="scroll-progress-bar-indicator"
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          marginLeft: isRTL ? 'auto' : 0,
          marginRight: isRTL ? 0 : 'auto',
          background: theme === 'dark' 
            ? 'linear-gradient(90deg, #0284C7 0%, #06B6D4 50%, #38BDF8 100%)' 
            : 'linear-gradient(90deg, #0369A1 0%, #0284C7 50%, #06B6D4 100%)',
          boxShadow: theme === 'dark'
            ? '0 0 8px rgba(56, 189, 248, 0.7)'
            : '0 0 6px rgba(2, 132, 199, 0.4)',
        }}
      />
    </div>
  );
}
