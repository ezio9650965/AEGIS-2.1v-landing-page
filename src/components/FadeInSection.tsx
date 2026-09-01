import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay in ms
  threshold?: number;
  rootMargin?: string;
}

export function FadeInSection({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, show immediately
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentElem = domRef.current;
    if (!currentElem) return;

    // Check if element is already in viewport on mount (e.g. Hero or top sections)
    const rect = currentElem.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform-gpu print:opacity-100 print:transform-none ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      } ${className}`}
      style={{
        transitionDelay: isVisible && delay > 0 ? `${delay}ms` : '0ms',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
