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
    lastUpdated: string;
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
    reportLink: string;
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
  socArchitecture: {
    badge: string;
    title: string;
    subtitle: string;
    outcomes: {
      title: string;
      lead: string;
      points: {
        title: string;
        description: string;
      }[];
      chart: {
        title: string;
        subtitle: string;
        tabResponseTime: string;
        tabResolutionTrends: string;
        tabThreatDensity?: string;
        layoutStacked?: string;
        layoutSplit?: string;
        legendTooltipHint?: string;
        legendModalTitle?: string;
        threatDensityLabels?: {
          title?: string;
          subtitle?: string;
          heatmapTitle?: string;
          networkSegment?: string;
          timeWindows?: string[];
          legend?: string;
          legendNominal?: string;
          legendElevated?: string;
          legendHigh?: string;
          legendCritical?: string;
          filterAll?: string;
          densityMetric?: string;
          eventsCount?: string;
          blockedCount?: string;
          inspectedSegment?: string;
          statusOptimal?: string;
          statusActiveMitigation?: string;
          densityTrendChart?: string;
          activeThreatVector?: string;
          autonomousMitigation?: string;
          latency?: string;
          blocked?: string;
          honeypots?: string;
          densityRate?: string;
          blockedAttacks?: string;
          segments?: {
            id: string;
            name: string;
            desc: string;
            agents: string;
            containment: string;
          }[];
        };
        kpis: {
          label: string;
          value: string;
          subtext: string;
          highlight?: boolean;
        }[];
        responseTimeLabels: {
          mttd: string;
          mttc: string;
          slaTarget: string;
          industryAvg: string;
          unit: string;
        };
        resolutionTrendsLabels: {
          rawAlerts: string;
          noiseFiltered: string;
          realIncidents: string;
          resolvedSLA: string;
          unit: string;
        };
        months: string[];
      };
    };
    pipeline: {
      title: string;
      subtitle: string;
      layers: {
        stepNumber: string;
        name: string;
        role: string;
        description: string;
        engineeringFocusLabel: string;
        engineeringFocus: string;
      }[];
    };
    containmentStrategy: {
      badge: string;
      title: string;
      lead: string;
      deliberateTrustNote: string;
      cards: {
        type: 'automated' | 'gated';
        tag: string;
        title: string;
        description: string;
        rationale: string;
      }[];
    };
    predictiveRisk: {
      badge: string;
      title: string;
      subtitle: string;
      scenarioSelectLabel: string;
      scenarios: {
        id: string;
        name: string;
        vector: string;
        target: string;
        proactiveContainmentTime: string;
        reactiveBreachTime: string;
        blastRadiusReduction: string;
        stages: {
          phase: string;
          timeLabel: string;
          unmitigatedRisk: number;
          proactiveRisk: number;
          description: string;
          proactiveAction: string;
        }[];
      }[];
      proactiveVsReactive: {
        proactiveTitle: string;
        proactiveDescription: string;
        reactiveTitle: string;
        reactiveDescription: string;
      };
      metrics: {
        label: string;
        value: string;
        detail: string;
      }[];
    };
    socSecurity: {
      badge: string;
      title: string;
      lead: string;
      pillars: {
        title: string;
        description: string;
      }[];
    };
    honestyCallout: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        description: string;
      }[];
    };
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
    downloadSummary: string;
    downloadSummaryDesc: string;
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
