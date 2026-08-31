import { ComparisonRow, OnboardingStep, QAItem, RoleExperience, StepItem } from '../types';

export type Language = 'en' | 'fr' | 'ar';

export interface UIContent {
  nav: {
    architecture: string;
    howItWorks: string;
    comparison: string;
    roleExperience: string;
    msspSoc: string;
    onboarding: string;
    qa: string;
    architectureReview: string;
    lightMode: string;
    darkMode: string;
    githubSpec: string;
    language: string;
  };
  hero: {
    badgeVersion: string;
    badgeCategory: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    guarantee1: string;
    guarantee2: string;
    guarantee3: string;
    guarantee4: string;
    ctaPrimary: string;
    ctaSecondary: string;
    openSourceNote: string;
    liveTrafficStatus: string;
    activeSessions: string;
    avgLatency: string;
    containmentTime: string;
  };
  theProblem: {
    badge: string;
    title: string;
    subtitle: string;
    vulnerabilities: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      consequence: string;
      icon: string;
    }[];
  };
  whatAegisIs: {
    badge: string;
    title: string;
    subtitle: string;
    summaryCardTitle: string;
    summaryCardDesc: string;
    pillars: {
      title: string;
      tag: string;
      description: string;
      tech: string;
    }[];
    defenseLayersTitle: string;
    defenseLayers: {
      name: string;
      role: string;
      mechanism: string;
    }[];
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    tabStandard: string;
    tabContainment: string;
    standardSubtitle: string;
    containmentSubtitle: string;
    runSimulation: string;
    resetSimulation: string;
    simulating: string;
    simulationComplete: string;
    latencyBreakdown: string;
    telemetryStream: string;
    stages: {
      id: string;
      title: string;
      description: string;
      technicalDetails: string;
      telemetryLog: string;
    }[];
    containmentStages: {
      id: string;
      title: string;
      description: string;
      technicalDetails: string;
      telemetryLog: string;
    }[];
  };
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    colPerimeter: string;
    colVpn: string;
    colAegis: string;
    perimeterVerdict: string;
    vpnVerdict: string;
    aegisVerdict: string;
    verdictLabel: string;
    ctaButton: string;
    supported: string;
    partial: string;
    unsupported: string;
    rows: ComparisonRow[];
  };
  zeroTrustModel: {
    badge: string;
    title: string;
    subtitle: string;
    nistRef: string;
    principles: {
      title: string;
      rule: string;
      description: string;
      howAegisEnforces: string;
    }[];
  };
  employeeExperience: {
    badge: string;
    title: string;
    subtitle: string;
    tabRoles: string;
    typicalAccessLabel: string;
    restrictedTargetsLabel: string;
    governanceTitle: string;
    dailyScheduleTitle: string;
    frictionTitle: string;
    roles: RoleExperience[];
  };
  onboarding: {
    badge: string;
    title: string;
    subtitle: string;
    employeeName: string;
    employeeTitle: string;
    stepCountLabel: string;
    actionLabel: string;
    securityMechanismLabel: string;
    keyTakeawayLabel: string;
    steps: OnboardingStep[];
  };
  serviceTiering: {
    badge: string;
    title: string;
    subtitle: string;
    slaTitle: string;
    slaSubtitle: string;
    tiers: {
      name: string;
      tagline: string;
      coverage: string;
      responseTime: string;
      idealFor: string;
      features: string[];
      highlight?: boolean;
    }[];
  };
  installation: {
    badge: string;
    title: string;
    subtitle: string;
    stepPrefix: string;
    phaseOfLabel: string;
    deliverablesLabel: string;
    prevPhase: string;
    nextPhase: string;
    configPreviewLabel: string;
    validatedLabel: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutCta: string;
    steps: StepItem[];
  };
  qa: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    noResults: string;
    keyTakeawayLabel: string;
    expandAll: string;
    collapseAll: string;
    items: QAItem[];
  };
  footer: {
    description: string;
    architectureTitle: string;
    securityTitle: string;
    resourcesTitle: string;
    legalNote: string;
    builtWith: string;
    rightsReserved: string;
  };
  demoModal: {
    title: string;
    subtitle: string;
    fieldFullName: string;
    fieldEmail: string;
    fieldCompany: string;
    fieldRole: string;
    fieldOrgSize: string;
    fieldCurrentPerimeter: string;
    fieldMessage: string;
    fieldPriority: string;
    optionSelectRole: string;
    optionRoles: string[];
    optionSizes: string[];
    optionPerimeters: string[];
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successMessage: string;
    closeButton: string;
    privacyNotice: string;
  };
}
