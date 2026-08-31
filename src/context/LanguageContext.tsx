import React, { createContext, useContext, useState, useEffect } from 'react';
import { UIContent } from '../translations/types';
import { enContent } from '../translations/en';
import { frContent } from '../translations/fr';
import { arContent } from '../translations/ar';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: UIContent;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const contentMap: Record<Language, UIContent> = {
  en: enContent,
  fr: frContent,
  ar: arContent,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('aegis_language');
    if (saved === 'en' || saved === 'fr' || saved === 'ar') {
      return saved;
    }
    // Check browser preference
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('ar')) return 'ar';
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('aegis_language', lang);
  };

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    if (isRTL) {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language, dir, isRTL]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: contentMap[language] || enContent,
    dir,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
