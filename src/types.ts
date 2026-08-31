export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  codeSample?: string;
  iconName: string;
}

export interface PipelineStage {
  id: string;
  title: string;
  category: 'ingress' | 'verification' | 'policy' | 'access' | 'containment';
  status: 'active' | 'passed' | 'denied' | 'investigating';
  description: string;
  technicalDetails: string;
  telemetryLog: string;
}

export interface RoleExperience {
  roleId: string;
  roleName: string;
  department: string;
  morningLogin: string;
  dailyAccessPattern: string;
  frictionPoint: string;
  typicalAccess: string[];
  restrictedTargets: string[];
  dailyFlow: {
    time: string;
    action: string;
    experience: string;
    securityAction: string;
  }[];
  governanceNote: string;
}

export interface OnboardingStep {
  step: number;
  title: string;
  subtitle: string;
  action: string;
  securityMechanism: string;
  keyLesson: string;
}

export interface ComparisonRow {
  capability: string;
  category: string;
  perimeterFirewall: {
    status: 'unsupported' | 'partial' | 'supported';
    description: string;
  };
  vpnTrust: {
    status: 'unsupported' | 'partial' | 'supported';
    description: string;
  };
  aegisGateway: {
    status: 'unsupported' | 'partial' | 'supported';
    description: string;
  };
}

export interface QAItem {
  id: string;
  question: string;
  category: 'why-zerotrust' | 'mechanics' | 'team-impact' | 'beyond-beyondcorp' | 'roles-onboarding' | 'soc-visibility' | 'security-deepdive';
  categoryLabel: string;
  shortAnswer: string;
  detailedAnswer: string;
  keyTakeaway: string;
}
