import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { WhatAegisIs } from './components/WhatAegisIs';
import { HowItWorks } from './components/HowItWorks';
import { ComparisonTable } from './components/ComparisonTable';
import { ZeroTrustModel } from './components/ZeroTrustModel';
import { EmployeeExperience } from './components/EmployeeExperience';
import { OnboardingWalkthrough } from './components/OnboardingWalkthrough';
import { ServiceTiering } from './components/ServiceTiering';
import { SOCArchitecture } from './components/SOCArchitecture';
import { InstallationSteps } from './components/InstallationSteps';
import { QASection } from './components/QASection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTop } from './components/BackToTop';
import { FadeInSection } from './components/FadeInSection';
import { SectionDivider } from './components/SectionDivider';
import { AegisChatbot } from './components/AegisChatbot';

function MainApp() {
  const { theme } = useTheme();
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Global cursor coordinate tracker for .aegis-card interactive radial glow
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement)?.closest('.aegis-card, .aegis-card-subtle') as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const handleOpenDemoModal = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300 relative overflow-x-hidden"
      style={{
        backgroundColor: theme === 'dark' ? '#0A0E17' : '#F8FAFC',
        color: theme === 'dark' ? '#E2E8F0' : '#0F172A',
      }}
    >
      {/* Slim Scroll Progress Bar at very top of viewport */}
      <ScrollProgressBar />

      {/* Background ambient lighting accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.07)' : 'rgba(3, 105, 161, 0.03)',
          }}
        />
        <div 
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : 'rgba(3, 105, 161, 0.02)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.05)' : 'rgba(3, 105, 161, 0.03)',
          }}
        />
      </div>

      {/* Sticky Navigation Bar with Light/Dark Mode Switch */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Sections (In complete structured flow) */}
      <main className="relative z-10">
        {/* Executive Print Header (Visible ONLY during print / PDF export) */}
        <div className="hidden print:block pb-6 mb-6 border-b-2 border-slate-900 px-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-mono font-extrabold text-slate-900 tracking-tight">
                AEGIS 2.1v <span className="text-sky-700">SECURITY PLATFORM</span>
              </div>
              <div className="text-sm font-mono font-semibold text-slate-800 mt-1">
                Zero-Trust Application Access & MSSP SOC Architecture Blueprint
              </div>
            </div>
            <div className="text-right text-xs font-mono text-slate-600">
              <div className="font-bold text-slate-900">NIST SP 800-207 ALIGNED</div>
              <div>Executive Briefing Summary</div>
              <div>Open-Source Foundation (Traefik • Keycloak • Wazuh)</div>
            </div>
          </div>
        </div>

        {/* Section 1: Hero */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        <SectionDivider />

        {/* Section 2: The Problem */}
        <FadeInSection>
          <TheProblem />
        </FadeInSection>

        <SectionDivider />

        {/* Section 3: What AEGIS Is */}
        <FadeInSection>
          <WhatAegisIs />
        </FadeInSection>

        <SectionDivider />

        {/* Section 4: How It Works (Ingress & Containment Animated Pipeline) */}
        <FadeInSection>
          <HowItWorks />
        </FadeInSection>

        <SectionDivider />

        {/* Section 5: Comparison Table (Firewall vs VPN vs AEGIS) */}
        <FadeInSection>
          <ComparisonTable onOpenDemoModal={handleOpenDemoModal} />
        </FadeInSection>

        <SectionDivider />

        {/* Section 6: The Zero-Trust Model, Explained */}
        <FadeInSection>
          <ZeroTrustModel />
        </FadeInSection>

        <SectionDivider />

        {/* Section 7: Employee Experience & RBAC */}
        <FadeInSection>
          <EmployeeExperience />
        </FadeInSection>

        <SectionDivider />

        {/* Section 8: Karim Onboarding Walkthrough (8-Step Monday Journey) */}
        <FadeInSection>
          <OnboardingWalkthrough />
        </FadeInSection>

        <SectionDivider />

        {/* Section 9: MSSP SOC Service Tiering */}
        <FadeInSection>
          <ServiceTiering />
        </FadeInSection>

        <SectionDivider />

        {/* Section 10: SOC & Operational Architecture */}
        <FadeInSection>
          <SOCArchitecture />
        </FadeInSection>

        <SectionDivider />

        {/* Section 11: Installation / Integration Phased Roadmap */}
        <FadeInSection>
          <InstallationSteps onOpenDemoModal={handleOpenDemoModal} />
        </FadeInSection>

        <SectionDivider />

        {/* Section 12: Business & Security FAQ */}
        <FadeInSection>
          <QASection onOpenDemoModal={handleOpenDemoModal} />
        </FadeInSection>
      </main>

      <SectionDivider />

      {/* Section 13: Footer / Contact */}
      <div className="relative z-10">
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>

      {/* Interactive Consultation / Demo Request Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemoModal} />

      {/* Floating Circular Back to Top Button */}
      <BackToTop />

      {/* Interactive AI Intelligence Chatbot (Gemini-powered) */}
      <AegisChatbot />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
