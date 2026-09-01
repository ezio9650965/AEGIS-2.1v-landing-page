import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  const { theme } = useTheme();

  return (
    <div 
      className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-8 pointer-events-none print:hidden ${className}`}
      aria-hidden="true"
    >
      <div 
        className="w-full h-[1px] transition-colors duration-300"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.05) 15%, rgba(56, 189, 248, 0.28) 50%, rgba(56, 189, 248, 0.05) 85%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(3, 105, 161, 0.04) 15%, rgba(3, 105, 161, 0.2) 50%, rgba(3, 105, 161, 0.04) 85%, transparent 100%)',
        }}
      />
    </div>
  );
}
