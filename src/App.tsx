import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
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
import { InstallationSteps } from './components/InstallationSteps';
import { QASection } from './components/QASection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

function MainApp() {
  const { theme } = useTheme();
  const [demoModalOpen, setDemoModalOpen] = useState(false);

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
        {/* Section 1: Hero */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 2: The Problem */}
        <TheProblem />

        {/* Section 3: What AEGIS Is */}
        <WhatAegisIs />

        {/* Section 4: How It Works (Ingress & Containment Animated Pipeline) */}
        <HowItWorks />

        {/* Section 5: Comparison Table (Firewall vs VPN vs AEGIS) */}
        <ComparisonTable onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 6: The Zero-Trust Model, Explained */}
        <ZeroTrustModel />

        {/* Section 7: Employee Experience & RBAC */}
        <EmployeeExperience />

        {/* Section 8: Karim Onboarding Walkthrough (8-Step Monday Journey) */}
        <OnboardingWalkthrough />

        {/* Section 9: MSSP SOC Service Tiering */}
        <ServiceTiering />

        {/* Section 10: Installation / Integration Phased Roadmap */}
        <InstallationSteps onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 11: Business & Security FAQ */}
        <QASection onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Section 12: Footer / Contact */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Consultation / Demo Request Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
