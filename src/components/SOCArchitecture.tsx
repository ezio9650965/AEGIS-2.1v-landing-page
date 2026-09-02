import React, { useState } from 'react';
import {
  Layers,
  Activity,
  ShieldCheck,
  AlertCircle,
  Eye,
  CheckCircle2,
  Lock,
  FileCheck,
  Server,
  Zap,
  ArrowRight,
  UserCheck,
  Info,
  ShieldAlert,
  Cpu,
  Database,
  Radio,
  TrendingDown,
  TrendingUp,
  Filter,
  Clock,
  CheckCircle,
  Target,
  AlertTriangle,
  Sparkles,
  Workflow,
  Compass,
  Flame,
  Grid,
  Network,
  Terminal,
  SlidersHorizontal,
  Rows,
  Columns,
  LayoutGrid,
  X,
  HelpCircle
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from 'recharts';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface LegendItemMeta {
  id: string;
  name: string;
  color: string;
  category: string;
  type: 'area' | 'line' | 'bar' | 'threshold';
  description: string;
  benchmark: string;
  significance: string;
  unit?: string;
}

export const SOCArchitecture: React.FC = () => {
  const { theme } = useTheme();
  const { t, isRTL } = useLanguage();
  const content = t.socArchitecture;
  const chartContent = content.outcomes.chart;
  const predictiveContent = content.predictiveRisk;

  const [activeChartTab, setActiveChartTab] = useState<'responseTime' | 'resolutionTrends' | 'threatDensity'>('responseTime');
  const [chartLayoutMode, setChartLayoutMode] = useState<'split' | 'stacked'>('split');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('credential-lateral');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(2);

  // Interactive Legend State
  const [hoveredLegendKey, setHoveredLegendKey] = useState<string | null>(null);
  const [activeLegendModalItem, setActiveLegendModalItem] = useState<LegendItemMeta | null>(null);
  const [hiddenSeriesKeys, setHiddenSeriesKeys] = useState<string[]>([]);

  // Heatmap Interactive State
  const [selectedHeatmapSegmentId, setSelectedHeatmapSegmentId] = useState<string>('edge');
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>(3); // 12:00 - 16:00
  const [heatmapFilter, setHeatmapFilter] = useState<string>('all');

  const isDark = theme === 'dark';

  const toggleSeriesVisibility = (key: string) => {
    setHiddenSeriesKeys(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  // Predictive scenario selection
  const activeScenario = predictiveContent.scenarios.find(s => s.id === selectedScenarioId) || predictiveContent.scenarios[0];
  const activeStage = activeScenario.stages[selectedStageIndex] || activeScenario.stages[0];

  const predictiveChartData = activeScenario.stages.map((stage, idx) => ({
    phase: stage.phase,
    shortPhase: stage.phase.split('. ')[1] || stage.phase,
    time: stage.timeLabel,
    unmitigatedRisk: stage.unmitigatedRisk,
    proactiveRisk: stage.proactiveRisk,
    idx,
    description: stage.description,
    proactiveAction: stage.proactiveAction,
  }));

  // Data sets matching the months
  const months = chartContent.months;

  const responseTimeData = [
    { month: months[0], mttd: 4.2, mttc: 7.8, sla: 15, industryAvg: 52 },
    { month: months[1], mttd: 3.6, mttc: 6.2, sla: 15, industryAvg: 49 },
    { month: months[2], mttd: 3.1, mttc: 5.4, sla: 15, industryAvg: 48 },
    { month: months[3], mttd: 2.8, mttc: 4.9, sla: 15, industryAvg: 46 },
    { month: months[4], mttd: 2.5, mttc: 4.4, sla: 15, industryAvg: 45 },
    { month: months[5], mttd: 2.4, mttc: 4.1, sla: 15, industryAvg: 45 },
  ];

  const resolutionTrendsData = [
    { month: months[0], raw: 420, filtered: 414, real: 62, resolvedSla: 62 },
    { month: months[1], raw: 480, filtered: 473, real: 71, resolvedSla: 71 },
    { month: months[2], raw: 560, filtered: 553, real: 78, resolvedSla: 78 },
    { month: months[3], raw: 510, filtered: 503, real: 69, resolvedSla: 69 },
    { month: months[4], raw: 630, filtered: 622, real: 84, resolvedSla: 84 },
    { month: months[5], raw: 710, filtered: 702, real: 88, resolvedSla: 88 },
  ];

  // Threat Density Heatmap Data
  const threatLabels = chartContent.threatDensityLabels;
  const timeWindows = threatLabels?.timeWindows || [
    '00:00 - 04:00',
    '04:00 - 08:00',
    '08:00 - 12:00',
    '12:00 - 16:00',
    '16:00 - 20:00',
    '20:00 - 24:00',
  ];

  // Legend Metadata for each chart
  const responseTimeLegendItems: LegendItemMeta[] = [
    {
      id: 'mttd',
      name: chartContent.responseTimeLabels.mttd,
      color: isDark ? '#38BDF8' : '#0284C7',
      category: 'Detection Performance',
      type: 'area',
      description: 'Mean Time to Detect (MTTD) measures the average duration elapsed from initial threat anomaly ingress to automated SIEM alert correlation.',
      benchmark: 'AEGIS: 2.4 min | Industry Average: 45 min',
      significance: 'Rapid sub-3 minute detection drastically shrinks attacker dwell time and prevents malware persistence.'
    },
    {
      id: 'mttc',
      name: chartContent.responseTimeLabels.mttc,
      color: isDark ? '#34D399' : '#059669',
      category: 'Containment Speed',
      type: 'area',
      description: 'Mean Time to Contain (MTTC) tracks the time from alert triage to complete threat isolation, token invalidation, or firewall quarantine.',
      benchmark: 'AEGIS: 4.1 min | Contractual SLA: < 15 min',
      significance: 'Pre-empts lateral movement across subnets and secures sensitive data repositories before exfiltration.'
    },
    {
      id: 'sla',
      name: chartContent.responseTimeLabels.slaTarget,
      color: isDark ? '#F59E0B' : '#D97706',
      category: 'Contractual Commitment',
      type: 'threshold',
      description: 'Guaranteed Tier-1 SLA ceiling. Incidents not contained within this strict 15-minute timeframe trigger formal operational credits.',
      benchmark: '15 Minutes Strict Contractual SLA',
      significance: 'Substitutes vague marketing claims with legally enforceable operational accountability.'
    },
    {
      id: 'industryAvg',
      name: chartContent.responseTimeLabels.industryAvg,
      color: isDark ? '#EF4444' : '#DC2626',
      category: 'Industry Benchmark',
      type: 'threshold',
      description: 'Global median enterprise SOC incident containment duration reported across SANS and Gartner enterprise studies.',
      benchmark: '45.0 Minutes Global Average',
      significance: 'Highlights AEGIS’s 10x speed advantage achieved via autonomous triage and dedicated human oversight.'
    }
  ];

  const resolutionTrendsLegendItems: LegendItemMeta[] = [
    {
      id: 'raw',
      name: chartContent.resolutionTrendsLabels.rawAlerts,
      color: isDark ? '#94A3B8' : '#64748B',
      category: 'Telemetry Ingestion',
      type: 'bar',
      description: 'Gross volume of raw log events, network flows, and endpoint alerts ingested into the SIEM streaming pipeline.',
      benchmark: 'Full Fidelity Stream (Zero Dropped Logs)',
      significance: 'Ensures comprehensive forensic visibility across endpoints, firewalls, and cloud infrastructure.'
    },
    {
      id: 'filtered',
      name: chartContent.resolutionTrendsLabels.noiseFiltered,
      color: isDark ? '#38BDF8' : '#0284C7',
      category: 'Heuristic Noise Suppression',
      type: 'bar',
      description: 'High-frequency benign events, routine automated tasks, and false alarms eliminated by correlation rules before human routing.',
      benchmark: '99.4% Automated Noise Elimination',
      significance: 'Prevents alert fatigue so senior SOC analysts focus exclusively on validated, genuine attacks.'
    },
    {
      id: 'resolvedSla',
      name: chartContent.resolutionTrendsLabels.resolvedSLA,
      color: isDark ? '#34D399' : '#059669',
      category: 'Contractual Remediation',
      type: 'line',
      description: 'Confirmed genuine security incidents triaged, mitigated, and isolated strictly within the 15-minute contractual SLA.',
      benchmark: '100% On-Time SLA Delivery',
      significance: 'Empirical proof of continuous containment effectiveness without SLA breaches across reporting cycles.'
    }
  ];

  const threatDensityLegendItems: LegendItemMeta[] = [
    {
      id: 'density',
      name: threatLabels?.densityRate || 'Threat Density Index',
      color: isDark ? '#FB7185' : '#E11D48',
      category: 'Segment Risk Metric',
      type: 'area',
      description: 'Normalized 0-100% score quantifying active exploit velocity, unauthorized probes, and threat severity targeting the selected segment.',
      benchmark: 'Nominal <20% | Elevated 21-50% | High 51-80% | Critical >80%',
      significance: 'Provides instant clarity on which network segment is facing active targeting in real time.'
    },
    {
      id: 'blocked',
      name: threatLabels?.blockedAttacks || 'Autonomous Blocks',
      color: isDark ? '#34D399' : '#059669',
      category: 'Autonomous Response',
      type: 'bar',
      description: 'Real-time edge firewall IP bans, session revokes, pod quarantines, and honeypot isolation actions executed automatically.',
      benchmark: 'Sub-Second Automated Edge Execution',
      significance: 'Stops automated bots and exploit scripts without waiting for manual human approval.'
    },
    {
      id: 'criticalThreshold',
      name: 'Critical Threshold (80%)',
      color: isDark ? '#EF4444' : '#DC2626',
      category: 'Breach Alarm Limit',
      type: 'threshold',
      description: 'Severity threshold indicating targeted exploitation or high-volume credential attack requiring urgent automated containment.',
      benchmark: '80% Density Alarm Limit',
      significance: 'Triggers autonomous isolation protocols and high-priority Tier-3 analyst paging.'
    },
    {
      id: 'nominalBaseline',
      name: 'Nominal Baseline (20%)',
      color: isDark ? '#10B981' : '#059669',
      category: 'Safe Operating Floor',
      type: 'threshold',
      description: 'Expected baseline telemetry from legitimate users, cron jobs, and normal microservice traffic.',
      benchmark: '20% Normal Operating Floor',
      significance: 'Confirms that the network segment is operating in a secure, uncompromised state.'
    }
  ];

  const predictiveRiskLegendItems: LegendItemMeta[] = [
    {
      id: 'unmitigatedRisk',
      name: 'Unmitigated Threat Escalation',
      color: isDark ? '#FB7185' : '#E11D48',
      category: 'Compound Risk Trajectory',
      type: 'area',
      description: 'Simulated breach expansion when an attacker moves laterally without early tripwires or fast SOC intervention.',
      benchmark: 'Exponential Attack Progression',
      significance: 'Highlights the severe financial and operational exposure of uncontained attacker dwell time.'
    },
    {
      id: 'proactiveRisk',
      name: 'AEGIS Proactive Risk',
      color: isDark ? '#34D399' : '#059669',
      category: 'Pre-emptive Security Posture',
      type: 'area',
      description: 'Residual risk profile maintained by AEGIS using deceptive honeypots, rapid containment, and zero-trust gating.',
      benchmark: 'Sub-20% Bounded Residual Risk',
      significance: 'Shows how proactive countermeasures keep threat impact well below the critical breach line.'
    },
    {
      id: 'criticalBreach',
      name: 'Critical Breach Threshold (80%)',
      color: isDark ? '#F43F5E' : '#BE123C',
      category: 'Loss of Control Point',
      type: 'threshold',
      description: 'The inflection point where adversary access shifts from reconnaissance to irreversible data exfiltration or domain takeover.',
      benchmark: '80% Uncontained Risk Line',
      significance: 'The primary threshold AEGIS is architected and contractually committed to never breach.'
    }
  ];

  const networkSegmentsData = [
    {
      id: 'edge',
      name: threatLabels?.segments?.[0]?.name || 'Edge Ingress & DMZ',
      desc: threatLabels?.segments?.[0]?.desc || 'Traefik reverse proxy, WAF rate limits & GeoIP filtration',
      agents: threatLabels?.segments?.[0]?.agents || '12 Edge Nodes',
      containment: threatLabels?.segments?.[0]?.containment || '100% Autonomous (Sub-2s)',
      icon: <Radio className="w-4 h-4" />,
      densities: [38, 24, 72, 88, 65, 44],
      eventCounts: [2150, 1840, 4890, 6420, 3950, 2780],
      blockedCounts: [182, 94, 512, 780, 340, 210],
      honeypotCounts: [1, 0, 4, 9, 3, 1],
      vectors: [
        'Automated Bot Credential Scrape',
        'GeoIP Out-of-Region Probes',
        'Distributed Layer 7 HTTP Burst',
        'High-Velocity Credential Stuffing',
        'Path Traversal & SQLi Probing',
        'Port Scanning on Open Gateway'
      ],
      mitigations: [
        'Traefik IP Rate-Limiting Activated',
        'Edge ASN Drop Rule Applied',
        'WAF Coraza Adaptive Challenge',
        'Dynamic Edge Token Revocation & Ingress Quarantine',
        'WAF Signature Rule Applied',
        'Blackhole Route Triggered'
      ],
      latencies: ['< 0.8s', '< 0.5s', '< 1.2s', '< 1.4s', '< 0.9s', '< 0.6s']
    },
    {
      id: 'iam',
      name: threatLabels?.segments?.[1]?.name || 'Identity & Access (IAM)',
      desc: threatLabels?.segments?.[1]?.desc || 'Keycloak OIDC, Authelia 2FA & WebAuthn authentication',
      agents: threatLabels?.segments?.[1]?.agents || '8 Auth Clusters',
      containment: threatLabels?.segments?.[1]?.containment || '99.8% Autonomous Session Kill',
      icon: <Lock className="w-4 h-4" />,
      densities: [16, 12, 48, 82, 54, 22],
      eventCounts: [820, 640, 2950, 3820, 2140, 1100],
      blockedCounts: [12, 6, 88, 245, 112, 18],
      honeypotCounts: [0, 0, 1, 5, 2, 0],
      vectors: [
        'Off-hours Expired Token Renewal',
        'Periodic Service Heartbeat',
        'Mismatched ASN Login Anomaly',
        'Kerberoasting & TGS Weak Cipher Probe',
        'MFA Push Bombing Attempt',
        'Single IP Spray Authentication'
      ],
      mitigations: [
        'Keycloak Silent Refresh Rejected',
        'Valid Session Verified',
        'Authelia WebAuthn Hardware Push Required',
        'Autonomous Session Kill & Token Purge (< 5s)',
        'Account Locked & Push Notifications Muted',
        'IP Blacklisted in Auth Firewall'
      ],
      latencies: ['< 0.4s', '< 0.2s', '< 1.8s', '< 2.1s', '< 1.1s', '< 0.7s']
    },
    {
      id: 'k8s',
      name: threatLabels?.segments?.[2]?.name || 'Kubernetes Workloads',
      desc: threatLabels?.segments?.[2]?.desc || 'Microservice pods, ingress controllers & service mesh',
      agents: threatLabels?.segments?.[2]?.agents || '64 Pod Monitors',
      containment: threatLabels?.segments?.[2]?.containment || 'Gated + Auto-Cordon',
      icon: <Cpu className="w-4 h-4" />,
      densities: [14, 10, 32, 64, 46, 18],
      eventCounts: [3100, 2800, 4500, 6100, 4900, 3400],
      blockedCounts: [14, 8, 42, 180, 96, 20],
      honeypotCounts: [0, 0, 0, 3, 1, 0],
      vectors: [
        'Routine Batch Job Executions',
        'Container Health Probes',
        'Inter-Service Ingress Burst',
        'Mounted Service Account Token Query',
        'Anomalous Outbound HTTP from Pod',
        'Cluster Autoscaler Scaling Events'
      ],
      mitigations: [
        'Telemetry Normalized',
        'Normal Kubelet Heartbeat',
        'Istio Mesh Policy Validated',
        'RBAC Policy Enforced; Pod Ephemeral Destroyed',
        'Egress NetworkPolicy Restricts Connection',
        'Nominal Telemetry'
      ],
      latencies: ['< 0.3s', '< 0.2s', '< 0.5s', '< 2.4s', '< 1.0s', '< 0.4s']
    },
    {
      id: 'db',
      name: threatLabels?.segments?.[3]?.name || 'Core DB & Persistence',
      desc: threatLabels?.segments?.[3]?.desc || 'PostgreSQL clusters, Vault secrets & cold audit storage',
      agents: threatLabels?.segments?.[3]?.agents || '16 DB Guardrails',
      containment: threatLabels?.segments?.[3]?.containment || 'Human Analyst Gated',
      icon: <Database className="w-4 h-4" />,
      densities: [8, 6, 18, 36, 26, 12],
      eventCounts: [620, 480, 1420, 1980, 1650, 890],
      blockedCounts: [2, 0, 8, 22, 14, 4],
      honeypotCounts: [0, 0, 0, 1, 0, 0],
      vectors: [
        'Automated Snapshot & WAL Sync',
        'Cold Backup Archival to S3',
        'Business Reporting Read Queries',
        'Vault Secret Lease Spike',
        'Unindexed Slow Query Burst',
        'Database Connection Pool Drain'
      ],
      mitigations: [
        'Audit Log Integrity Verified',
        'GPG Signatures Verified',
        'Read-Replica Isolation Maintained',
        'Token Revocation & Alert Gated for Analyst',
        'Query Optimization Alert Logged',
        'Pool Max Limit Enforced'
      ],
      latencies: ['< 0.2s', '< 0.3s', '< 0.4s', '< 3.2s', '< 1.5s', '< 0.3s']
    },
    {
      id: 'endpoints',
      name: threatLabels?.segments?.[4]?.name || 'Corporate Endpoints & VPN',
      desc: threatLabels?.segments?.[4]?.desc || 'Zero Trust LAN client devices, EDR Wazuh & Sysmon',
      agents: threatLabels?.segments?.[4]?.agents || '280+ Endpoints',
      containment: threatLabels?.segments?.[4]?.containment || 'Autonomous Subnet Quarantine',
      icon: <ShieldCheck className="w-4 h-4" />,
      densities: [10, 8, 56, 78, 42, 15],
      eventCounts: [1200, 980, 3800, 4600, 2900, 1450],
      blockedCounts: [4, 2, 110, 220, 74, 10],
      honeypotCounts: [0, 0, 2, 4, 1, 0],
      vectors: [
        'Scheduled EDR Agent Definition Sync',
        'Background OS Patching Cycle',
        'Phishing Attachment Click in Sandbox',
        'Sysmon Alert: PowerShell LOLBAS Execution',
        'Untrusted USB Storage Device Inserted',
        'Remote VPN Disconnections'
      ],
      mitigations: [
        'Wazuh Agent State Optimal',
        'Hash Verification Passed',
        'Process Sandbox Terminated (< 1s)',
        'Host Quarantined from Zero Trust LAN',
        'Endpoint Peripheral Policy Blocked I/O',
        'Session Ephemeral Keys Destroyed'
      ],
      latencies: ['< 0.2s', '< 0.3s', '< 0.9s', '< 2.8s', '< 0.5s', '< 0.4s']
    },
    {
      id: 'cicd',
      name: threatLabels?.segments?.[5]?.name || 'CI/CD & DevOps Pipeline',
      desc: threatLabels?.segments?.[5]?.desc || 'Build runners, container registries & ephemeral workers',
      agents: threatLabels?.segments?.[5]?.agents || '24 Runners',
      containment: threatLabels?.segments?.[5]?.containment || 'Autonomous Ephemeral Kill',
      icon: <Terminal className="w-4 h-4" />,
      densities: [20, 14, 40, 86, 50, 24],
      eventCounts: [1100, 850, 2400, 3700, 2300, 1300],
      blockedCounts: [16, 8, 62, 280, 85, 19],
      honeypotCounts: [0, 0, 1, 6, 1, 0],
      vectors: [
        'Nightly Container Build Runs',
        'Static Code Analysis Pipeline',
        'NPM Dependency Typosquatting Flagged',
        'Malicious Postinstall Script & K8s Token Abuse',
        'Secrets Exposed in Pull Request Diff',
        'Orphaned Build Container Probing Host'
      ],
      mitigations: [
        'Base Image Trivy Scan Passed',
        'SonarQube Quality Gate Verified',
        'Lockfile Registry Check Stoppage',
        'Runner Node Cordoned & Ephemeral Disk Purged',
        'Automated Git Hook Abort & Token Rotation',
        'Container Daemon Hard Kill'
      ],
      latencies: ['< 0.6s', '< 0.4s', '< 1.4s', '< 1.9s', '< 0.7s', '< 0.5s']
    }
  ];

  const activeHeatmapSegment = networkSegmentsData.find(s => s.id === selectedHeatmapSegmentId) || networkSegmentsData[0];
  const activeCellDensity = activeHeatmapSegment.densities[selectedTimeIndex];
  const activeCellEvents = activeHeatmapSegment.eventCounts[selectedTimeIndex];
  const activeCellBlocked = activeHeatmapSegment.blockedCounts[selectedTimeIndex];
  const activeCellHoneypot = activeHeatmapSegment.honeypotCounts[selectedTimeIndex];
  const activeCellVector = activeHeatmapSegment.vectors[selectedTimeIndex];
  const activeCellMitigation = activeHeatmapSegment.mitigations[selectedTimeIndex];
  const activeCellLatency = activeHeatmapSegment.latencies[selectedTimeIndex];

  // Recharts trend data for the inspected network segment
  const inspectedSegmentTrendData = timeWindows.map((tw, idx) => ({
    time: tw,
    shortTime: tw.split(' - ')[0],
    density: activeHeatmapSegment.densities[idx],
    blocked: activeHeatmapSegment.blockedCounts[idx],
    rawEvents: activeHeatmapSegment.eventCounts[idx],
    honeypot: activeHeatmapSegment.honeypotCounts[idx],
    vector: activeHeatmapSegment.vectors[idx],
    mitigation: activeHeatmapSegment.mitigations[idx],
    criticalThreshold: 80,
    baseline: 20
  }));

  const getDensityStyle = (density: number, isSelected: boolean) => {
    if (density >= 80) {
      return {
        bg: isDark ? 'rgba(244, 63, 94, 0.25)' : '#FFE4E6',
        border: isSelected ? '#F43F5E' : (isDark ? 'rgba(244, 63, 94, 0.4)' : '#FDA4AF'),
        text: isDark ? '#FDA4AF' : '#BE123C',
        badgeBg: isDark ? 'rgba(244, 63, 94, 0.35)' : '#FECDD3',
        label: 'CRITICAL',
      };
    }
    if (density >= 50) {
      return {
        bg: isDark ? 'rgba(249, 115, 22, 0.2)' : '#FFEDD5',
        border: isSelected ? '#F97316' : (isDark ? 'rgba(249, 115, 22, 0.35)' : '#FDBA74'),
        text: isDark ? '#FDBA74' : '#C2410C',
        badgeBg: isDark ? 'rgba(249, 115, 22, 0.3)' : '#FED7AA',
        label: 'HIGH',
      };
    }
    if (density >= 21) {
      return {
        bg: isDark ? 'rgba(245, 158, 11, 0.15)' : '#FEF3C7',
        border: isSelected ? '#F59E0B' : (isDark ? 'rgba(245, 158, 11, 0.3)' : '#FDE68A'),
        text: isDark ? '#FCD34D' : '#B45309',
        badgeBg: isDark ? 'rgba(245, 158, 11, 0.25)' : '#FDE68A',
        label: 'ELEVATED',
      };
    }
    return {
      bg: isDark ? 'rgba(16, 185, 129, 0.12)' : '#ECFDF5',
      border: isSelected ? '#10B981' : (isDark ? 'rgba(16, 185, 129, 0.25)' : '#A7F3D0'),
      text: isDark ? '#6EE7B7' : '#047857',
      badgeBg: isDark ? 'rgba(16, 185, 129, 0.2)' : '#D1FAE5',
      label: 'NOMINAL',
    };
  };

  // Heatmap Recharts Trend Tooltip
  const HeatmapTrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const point = payload[0]?.payload;
      const isCritical = point?.density >= 80;
      const isHigh = point?.density >= 50;
      return (
        <div
          className="p-3.5 rounded-xl border text-xs font-mono shadow-xl backdrop-blur-md max-w-xs"
          style={{
            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.96)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
            color: isDark ? '#F8FAFC' : '#0F172A',
          }}
        >
          <div className="font-bold text-sm mb-1.5 pb-1.5 border-b flex items-center justify-between gap-3"
            style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0' }}
          >
            <span>{point?.time}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold"
              style={{
                backgroundColor: isCritical
                  ? (isDark ? 'rgba(244, 63, 94, 0.2)' : '#FFE4E6')
                  : isHigh
                    ? (isDark ? 'rgba(245, 158, 11, 0.2)' : '#FEF3C7')
                    : (isDark ? 'rgba(16, 185, 129, 0.2)' : '#D1FAE5'),
                color: isCritical
                  ? (isDark ? '#FB7185' : '#E11D48')
                  : isHigh
                    ? (isDark ? '#FBBF24' : '#D97706')
                    : (isDark ? '#34D399' : '#059669'),
              }}
            >
              {point?.density}% DENSITY
            </span>
          </div>
          <div className="space-y-1.5 mb-2.5">
            <div className="flex justify-between items-center text-xs">
              <span style={{ color: isDark ? '#94A3B8' : '#64748B' }}>Autonomous Blocks:</span>
              <span className="font-bold text-emerald-400">{point?.blocked} events</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span style={{ color: isDark ? '#94A3B8' : '#64748B' }}>Ingested Telemetry:</span>
              <span className="font-bold">{point?.rawEvents} / hr</span>
            </div>
            {point?.honeypot > 0 && (
              <div className="flex justify-between items-center text-xs">
                <span className="text-amber-400">Honeypot Tripwires:</span>
                <span className="font-bold text-amber-400">{point?.honeypot} tripped</span>
              </div>
            )}
          </div>
          <div className="pt-2 border-t text-[11px]"
            style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
          >
            <span className="block text-[10px] uppercase font-bold mb-0.5" style={{ color: isDark ? '#38BDF8' : '#0284C7' }}>
              Primary Vector:
            </span>
            <p className="leading-snug">{point?.vector}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  // Custom Chart Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="p-3.5 rounded-xl border text-xs font-mono shadow-xl backdrop-blur-md"
          style={{
            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
            color: isDark ? '#F8FAFC' : '#0F172A',
          }}
        >
          <div className="font-bold text-sm mb-2 pb-1.5 border-b flex items-center justify-between gap-4"
            style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0' }}
          >
            <span>{label}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded font-mono"
              style={{
                backgroundColor: isDark ? 'rgba(56, 189, 248, 0.15)' : '#E0F2FE',
                color: isDark ? '#38BDF8' : '#0284C7',
              }}
            >
              AEGIS SOC METRICS
            </span>
          </div>
          <div className="space-y-1.5">
            {payload.map((entry: any, index: number) => (
              <div key={`item-${index}`} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5" style={{ color: entry.color }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: entry.color }} />
                  {entry.name}:
                </span>
                <span className="font-bold">
                  {entry.value} {activeChartTab === 'responseTime' ? 'min' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  // Predictive Escalation Tooltip
  const PredictiveTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0]?.payload;
      return (
        <div
          className="p-3.5 rounded-xl border text-xs font-mono shadow-xl backdrop-blur-md max-w-xs"
          style={{
            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.96)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
            color: isDark ? '#F8FAFC' : '#0F172A',
          }}
        >
          <div className="font-bold text-sm mb-1.5 pb-1.5 border-b flex items-center justify-between gap-3"
            style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0' }}
          >
            <span>{label}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold"
              style={{
                backgroundColor: isDark ? 'rgba(244, 63, 94, 0.15)' : '#FFE4E6',
                color: isDark ? '#FB7185' : '#E11D48',
              }}
            >
              {dataPoint?.time}
            </span>
          </div>
          <div className="space-y-1.5 mb-2">
            <div className="flex items-center justify-between gap-4" style={{ color: isDark ? '#FB7185' : '#E11D48' }}>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Unmitigated Risk:
              </span>
              <span className="font-bold">{dataPoint?.unmitigatedRisk}%</span>
            </div>
            <div className="flex items-center justify-between gap-4" style={{ color: isDark ? '#34D399' : '#059669' }}>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                AEGIS Proactive:
              </span>
              <span className="font-bold">{dataPoint?.proactiveRisk}%</span>
            </div>
          </div>
          <div className="text-[11px] pt-1.5 border-t leading-snug font-sans"
            style={{
              borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              color: isDark ? '#94A3B8' : '#64748B',
            }}
          >
            <strong className="block text-[10px] font-mono uppercase mb-0.5" style={{ color: isDark ? '#38BDF8' : '#0284C7' }}>
              AEGIS Action:
            </strong>
            {dataPoint?.proactiveAction}
          </div>
        </div>
      );
    }
    return null;
  };

  // Interactive Legend with Tooltip & SLA Definitions Component
  const InteractiveLegendWithTooltip: React.FC<{
    items: LegendItemMeta[];
    activeSeriesKey?: string | null;
    showHelperTip?: boolean;
    compact?: boolean;
  }> = ({ items, showHelperTip = true, compact = false }) => {
    return (
      <div className="w-full space-y-2.5 mb-3" dir={isRTL ? 'rtl' : 'ltr'}>
        {showHelperTip && (
          <div className="flex items-center justify-between gap-2 text-[11px] font-mono px-1">
            <div className="flex items-center gap-1.5 opacity-80" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
              <HelpCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{chartContent.legendTooltipHint || 'Hover or tap any metric to inspect detailed SOC definitions & SLA standards'}</span>
            </div>
            {activeLegendModalItem && (
              <button
                type="button"
                onClick={() => setActiveLegendModalItem(null)}
                className="flex items-center gap-1 text-[10px] text-rose-400 hover:underline cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>Dismiss</span>
              </button>
            )}
          </div>
        )}

        {/* Legend Badges Row */}
        <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          {items.map((item) => {
            const isHidden = hiddenSeriesKeys.includes(item.id);
            const isHovered = hoveredLegendKey === item.id;
            const isModalActive = activeLegendModalItem?.id === item.id;

            return (
              <div key={item.id} className="relative group">
                <button
                  type="button"
                  onMouseEnter={() => setHoveredLegendKey(item.id)}
                  onMouseLeave={() => setHoveredLegendKey(null)}
                  onClick={() => {
                    setActiveLegendModalItem(isModalActive ? null : item);
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer select-none touch-manipulation min-h-[38px] sm:min-h-[32px] active:scale-[0.98] ${
                    compact ? 'text-[11px] py-1 min-h-[34px] sm:min-h-[28px]' : ''
                  }`}
                  style={{
                    backgroundColor: isModalActive
                      ? (isDark ? 'rgba(56, 189, 248, 0.18)' : '#E0F2FE')
                      : isHovered
                        ? (isDark ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9')
                        : (isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF'),
                    borderColor: isModalActive
                      ? (isDark ? '#38BDF8' : '#0284C7')
                      : isHovered
                        ? item.color
                        : (isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1'),
                    opacity: isHidden ? 0.45 : 1,
                    boxShadow: isModalActive ? `0 0 10px ${item.color}33` : 'none',
                  }}
                  title={item.description}
                >
                  {/* Symbol / Dot / Line */}
                  <span className="flex items-center justify-center shrink-0">
                    {item.type === 'threshold' ? (
                      <span
                        className="w-3.5 h-0.5 border-t-2 border-dashed inline-block"
                        style={{ borderColor: item.color }}
                      />
                    ) : item.type === 'bar' ? (
                      <span
                        className="w-2.5 h-2.5 rounded-xs inline-block"
                        style={{ backgroundColor: item.color }}
                      />
                    ) : item.type === 'line' ? (
                      <span className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full inline-block mr-0.5" style={{ backgroundColor: item.color }} />
                        <span className="w-2.5 h-0.5 inline-block" style={{ backgroundColor: item.color }} />
                      </span>
                    ) : (
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block shadow-sm"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </span>

                  <span
                    className="font-medium whitespace-nowrap text-xs"
                    style={{
                      color: isDark ? (isHidden ? '#64748B' : '#F1F5F9') : (isHidden ? '#94A3B8' : '#0F172A'),
                      textDecoration: isHidden ? 'line-through' : 'none',
                    }}
                  >
                    {item.name}
                  </span>

                  <span
                    className="text-[9px] uppercase px-1 py-0.2 rounded font-mono font-bold opacity-75 hidden sm:inline-block"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                      color: item.color,
                    }}
                  >
                    {item.category.split(' ')[0]}
                  </span>

                  <Info className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity shrink-0 text-sky-400" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Floating/Expanding Active Legend Tooltip Card */}
        {(activeLegendModalItem || (hoveredLegendKey && !activeLegendModalItem)) && (
          (() => {
            const currentItem = activeLegendModalItem || items.find(i => i.id === hoveredLegendKey);
            if (!currentItem) return null;
            const isItemHidden = hiddenSeriesKeys.includes(currentItem.id);

            return (
              <div
                className="p-3.5 sm:p-4 rounded-xl border text-xs font-mono shadow-xl backdrop-blur-md transition-all"
                style={{
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.96)' : 'rgba(255, 255, 255, 0.98)',
                  borderColor: isDark ? `${currentItem.color}66` : `${currentItem.color}88`,
                  color: isDark ? '#F8FAFC' : '#0F172A',
                }}
              >
                <div className="flex items-start justify-between gap-3 pb-2 mb-2 border-b"
                  style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0' }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: currentItem.color }}
                    />
                    <div>
                      <h5 className="font-bold text-sm tracking-tight" style={{ color: currentItem.color }}>
                        {currentItem.name}
                      </h5>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded inline-block mt-0.5"
                        style={{
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
                          color: isDark ? '#94A3B8' : '#64748B',
                        }}
                      >
                        {currentItem.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleSeriesVisibility(currentItem.id)}
                      className="text-[10px] px-2 py-1 rounded border font-mono transition-colors cursor-pointer"
                      style={{
                        backgroundColor: isItemHidden
                          ? (isDark ? 'rgba(244, 63, 94, 0.15)' : '#FFE4E6')
                          : (isDark ? 'rgba(16, 185, 129, 0.15)' : '#ECFDF5'),
                        borderColor: isItemHidden
                          ? (isDark ? '#F43F5E' : '#FDA4AF')
                          : (isDark ? '#10B981' : '#A7F3D0'),
                        color: isItemHidden
                          ? (isDark ? '#FB7185' : '#BE123C')
                          : (isDark ? '#34D399' : '#047857'),
                      }}
                    >
                      {isItemHidden ? 'Show on Chart' : 'Hide from Chart'}
                    </button>
                    {activeLegendModalItem && (
                      <button
                        type="button"
                        onClick={() => setActiveLegendModalItem(null)}
                        className="p-1 rounded-md text-slate-400 hover:text-white cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm leading-relaxed mb-3"
                  style={{ color: isDark ? '#E2E8F0' : '#334155' }}
                >
                  {currentItem.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t text-[11px]"
                  style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
                >
                  <div className="p-2 rounded-lg"
                    style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.3)' : '#F8FAFC' }}
                  >
                    <span className="block text-[10px] uppercase font-bold mb-0.5"
                      style={{ color: isDark ? '#38BDF8' : '#0284C7' }}
                    >
                      Operational Benchmark:
                    </span>
                    <span className="font-semibold">{currentItem.benchmark}</span>
                  </div>

                  <div className="p-2 rounded-lg"
                    style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.3)' : '#F8FAFC' }}
                  >
                    <span className="block text-[10px] uppercase font-bold mb-0.5"
                      style={{ color: isDark ? '#34D399' : '#059669' }}
                    >
                      Strategic Impact:
                    </span>
                    <span className="font-semibold">{currentItem.significance}</span>
                  </div>
                </div>
              </div>
            );
          })()
        )}
      </div>
    );
  };

  return (
    <section id="soc-architecture" className="py-20 border-t relative overflow-hidden"
      style={{
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono mb-4 backdrop-blur-sm"
            style={{
              backgroundColor: isDark ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
              borderColor: isDark ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
              borderWidth: '1px',
              color: isDark ? '#38BDF8' : '#0369A1',
            }}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{content.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
          >
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed"
            style={{ color: isDark ? '#94A3B8' : '#475569' }}
          >
            {content.subtitle}
          </p>
        </div>

        {/* SECTION 1: Built for Outcomes, Not Just Uptime */}
        <div className="aegis-card rounded-2xl border p-6 sm:p-8 backdrop-blur-md"
          style={{
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            boxShadow: isDark ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.06)',
          }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between pb-6 border-b"
            style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
          >
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1.5"
                style={{ color: isDark ? '#38BDF8' : '#0369A1' }}
              >
                01 // OUTCOME PHILOSOPHY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
              >
                {content.outcomes.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono"
              style={{
                backgroundColor: isDark ? 'rgba(16, 185, 129, 0.1)' : '#ECFDF5',
                borderColor: isDark ? 'rgba(16, 185, 129, 0.25)' : '#A7F3D0',
                color: isDark ? '#34D399' : '#047857',
              }}
            >
              <Activity className="w-4 h-4" />
              <span>CONTRACTUALLY COMMITTED SLA</span>
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg leading-relaxed font-medium"
            style={{ color: isDark ? '#E2E8F0' : '#1E293B' }}
          >
            {content.outcomes.lead}
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5">
            {content.outcomes.points.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border flex flex-col justify-between"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.07)' : '#E2E8F0',
                }}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: isDark ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                        color: isDark ? '#38BDF8' : '#0369A1',
                      }}
                    >
                      {idx === 0 && <Radio className="w-3.5 h-3.5" />}
                      {idx === 1 && <Eye className="w-3.5 h-3.5" />}
                      {idx === 2 && <ShieldCheck className="w-3.5 h-3.5" />}
                    </div>
                    <h4 className="font-bold text-sm" style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}>
                      {pt.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recharts Data Visualization Component: Empirical Response Time & Resolution Trends */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t"
            style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase"
                    style={{ color: isDark ? '#38BDF8' : '#0369A1' }}
                  >
                    EMPIRICAL SLA BENCHMARK
                  </span>
                </div>
                <h4 className="text-base sm:text-xl font-bold tracking-tight"
                  style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
                >
                  {chartContent.title}
                </h4>
                <p className="text-xs sm:text-sm mt-0.5 sm:mt-1"
                  style={{ color: isDark ? '#94A3B8' : '#64748B' }}
                >
                  {chartContent.subtitle}
                </p>
              </div>

              {/* View Selector Tabs & Responsive Layout Controls */}
              <div className="flex flex-col xs:flex-row sm:items-center gap-2 self-stretch md:self-auto shrink-0">
                {/* Layout Mode Switcher */}
                <div className="flex items-center p-1 rounded-xl border gap-1 self-start xs:self-auto"
                  style={{
                    backgroundColor: isDark ? 'rgba(0, 0, 0, 0.3)' : '#F1F5F9',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                  }}
                  title="Toggle chart layout structure"
                >
                  <button
                    type="button"
                    onClick={() => setChartLayoutMode('split')}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap min-h-[36px] sm:min-h-[30px] touch-manipulation select-none active:scale-[0.98]"
                    style={{
                      backgroundColor: chartLayoutMode === 'split'
                        ? (isDark ? 'rgba(56, 189, 248, 0.15)' : '#FFFFFF')
                        : 'transparent',
                      color: chartLayoutMode === 'split'
                        ? (isDark ? '#38BDF8' : '#0284C7')
                        : (isDark ? '#94A3B8' : '#64748B'),
                      boxShadow: chartLayoutMode === 'split' && !isDark ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    }}
                    title="Split Multi-Column View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{chartContent.layoutSplit || 'Split View'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setChartLayoutMode('stacked')}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap min-h-[36px] sm:min-h-[30px] touch-manipulation select-none active:scale-[0.98]"
                    style={{
                      backgroundColor: chartLayoutMode === 'stacked'
                        ? (isDark ? 'rgba(16, 185, 129, 0.15)' : '#FFFFFF')
                        : 'transparent',
                      color: chartLayoutMode === 'stacked'
                        ? (isDark ? '#34D399' : '#047857')
                        : (isDark ? '#94A3B8' : '#64748B'),
                      boxShadow: chartLayoutMode === 'stacked' && !isDark ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    }}
                    title="Stacked View (Mobile-Optimized)"
                  >
                    <Rows className="w-3.5 h-3.5" />
                    <span>{chartContent.layoutStacked || 'Stacked (Mobile)'}</span>
                  </button>
                </div>

                {/* View Selector Tabs */}
                <div className="flex items-center flex-wrap p-1 rounded-xl border gap-1 w-full xs:w-auto"
                  style={{
                    backgroundColor: isDark ? 'rgba(0, 0, 0, 0.3)' : '#F1F5F9',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveChartTab('responseTime')}
                    className="flex-1 xs:flex-initial px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap min-h-[36px] sm:min-h-[30px] touch-manipulation select-none active:scale-[0.98]"
                    style={{
                      backgroundColor: activeChartTab === 'responseTime'
                        ? (isDark ? 'rgba(56, 189, 248, 0.15)' : '#FFFFFF')
                        : 'transparent',
                      color: activeChartTab === 'responseTime'
                        ? (isDark ? '#38BDF8' : '#0284C7')
                        : (isDark ? '#94A3B8' : '#64748B'),
                      boxShadow: activeChartTab === 'responseTime' && !isDark ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    }}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{chartContent.tabResponseTime}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveChartTab('resolutionTrends')}
                    className="flex-1 xs:flex-initial px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap min-h-[36px] sm:min-h-[30px] touch-manipulation select-none active:scale-[0.98]"
                    style={{
                      backgroundColor: activeChartTab === 'resolutionTrends'
                        ? (isDark ? 'rgba(16, 185, 129, 0.15)' : '#FFFFFF')
                        : 'transparent',
                      color: activeChartTab === 'resolutionTrends'
                        ? (isDark ? '#34D399' : '#047857')
                        : (isDark ? '#94A3B8' : '#64748B'),
                      boxShadow: activeChartTab === 'resolutionTrends' && !isDark ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    }}
                  >
                    <Filter className="w-3.5 h-3.5" />
                    <span>{chartContent.tabResolutionTrends}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveChartTab('threatDensity')}
                    className="w-full xs:w-auto px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap min-h-[36px] sm:min-h-[30px] touch-manipulation select-none active:scale-[0.98]"
                    style={{
                      backgroundColor: activeChartTab === 'threatDensity'
                        ? (isDark ? 'rgba(244, 63, 94, 0.15)' : '#FFFFFF')
                        : 'transparent',
                      color: activeChartTab === 'threatDensity'
                        ? (isDark ? '#FB7185' : '#E11D48')
                        : (isDark ? '#94A3B8' : '#64748B'),
                      boxShadow: activeChartTab === 'threatDensity' && !isDark ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    }}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>{chartContent.tabThreatDensity}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* KPI Metric Highlights Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-4 sm:mb-6">
              {chartContent.kpis.map((kpi, kIdx) => (
                <div
                  key={kIdx}
                  className="p-3 sm:p-3.5 rounded-xl border flex flex-col justify-between"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: kpi.highlight
                      ? (isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.25)')
                      : (isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'),
                  }}
                >
                  <span className="text-[10px] sm:text-[11px] font-mono block mb-1 truncate"
                    style={{ color: isDark ? '#94A3B8' : '#64748B' }}
                  >
                    {kpi.label}
                  </span>
                  <div className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight font-mono mb-0.5 sm:mb-1"
                    style={{
                      color: kpi.highlight
                        ? (isDark ? '#38BDF8' : '#0284C7')
                        : (isDark ? '#FFFFFF' : '#0F172A'),
                    }}
                  >
                    {kpi.value}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono leading-tight"
                    style={{ color: isDark ? '#64748B' : '#94A3B8' }}
                  >
                    {kpi.subtext}
                  </span>
                </div>
              ))}
            </div>

            {/* Recharts Canvas / Threat Density Heatmap Interactive Dashboard */}
            <div
              className="p-2.5 xs:p-3.5 sm:p-5 md:p-6 rounded-2xl border relative overflow-hidden"
              style={{
                backgroundColor: isDark ? 'rgba(0, 0, 0, 0.25)' : '#F8FAFC',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
              }}
            >
              {activeChartTab === 'threatDensity' ? (
                /* THREAT DENSITY HEATMAP VIEW */
                <div className="space-y-6">
                  {/* Heatmap Legend & Controls */}
                  <div className="pb-3 border-b"
                    style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Grid className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider"
                          style={{ color: isDark ? '#F8FAFC' : '#0F172A' }}
                        >
                          {threatLabels?.heatmapTitle || 'Real-Time Threat Density Heatmap by Segment'}
                        </span>
                      </div>

                      <div className="text-[11px] font-mono opacity-80" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                        {timeWindows[selectedTimeIndex]} • {activeHeatmapSegment.name} selected
                      </div>
                    </div>

                    {/* Interactive Legend with Rich Tooltips */}
                    <InteractiveLegendWithTooltip items={threatDensityLegendItems} showHelperTip={true} />
                  </div>

                  {/* 6x6 Heatmap Interactive Grid */}
                  <div className="overflow-x-auto pb-2">
                    <div className="min-w-[620px] space-y-1.5">
                      {/* Grid Header (Time Windows) */}
                      <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-mono font-bold uppercase tracking-wider"
                        style={{ color: isDark ? '#94A3B8' : '#64748B' }}
                      >
                        <div className="text-left px-2 py-1">
                          {threatLabels?.networkSegment || 'Network Segment'}
                        </div>
                        {timeWindows.map((tw, twIdx) => (
                          <div
                            key={twIdx}
                            onClick={() => setSelectedTimeIndex(twIdx)}
                            className="px-1 py-1 rounded cursor-pointer transition-colors"
                            style={{
                              backgroundColor: selectedTimeIndex === twIdx
                                ? (isDark ? 'rgba(56, 189, 248, 0.15)' : '#E0F2FE')
                                : 'transparent',
                              color: selectedTimeIndex === twIdx
                                ? (isDark ? '#38BDF8' : '#0284C7')
                                : (isDark ? '#94A3B8' : '#64748B'),
                            }}
                          >
                            {tw}
                          </div>
                        ))}
                      </div>

                      {/* Grid Rows (Segments) */}
                      {networkSegmentsData.map((segment) => {
                        const isSegmentSelected = selectedHeatmapSegmentId === segment.id;
                        return (
                          <div
                            key={segment.id}
                            className="grid grid-cols-7 gap-1.5 items-center p-1 rounded-xl transition-all"
                            style={{
                              backgroundColor: isSegmentSelected
                                ? (isDark ? 'rgba(255, 255, 255, 0.04)' : '#F1F5F9')
                                : 'transparent',
                            }}
                          >
                            {/* Segment Info Label */}
                            <button
                              type="button"
                              onClick={() => setSelectedHeatmapSegmentId(segment.id)}
                              className="text-left px-2.5 py-2 rounded-lg flex items-center gap-2 transition-all cursor-pointer truncate"
                              style={{
                                backgroundColor: isSegmentSelected
                                  ? (isDark ? 'rgba(56, 189, 248, 0.15)' : '#E0F2FE')
                                  : (isDark ? 'rgba(255, 255, 255, 0.02)' : '#FFFFFF'),
                                borderColor: isSegmentSelected
                                  ? (isDark ? 'rgba(56, 189, 248, 0.4)' : '#BAE6FD')
                                  : (isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'),
                                borderWidth: '1px',
                              }}
                            >
                              <span style={{ color: isSegmentSelected ? (isDark ? '#38BDF8' : '#0284C7') : (isDark ? '#94A3B8' : '#64748B') }}>
                                {segment.icon}
                              </span>
                              <div className="truncate">
                                <span className="text-xs font-bold block truncate"
                                  style={{ color: isSegmentSelected ? (isDark ? '#FFFFFF' : '#0F172A') : (isDark ? '#E2E8F0' : '#1E293B') }}
                                >
                                  {segment.name}
                                </span>
                                <span className="text-[10px] font-mono opacity-75 block truncate"
                                  style={{ color: isDark ? '#94A3B8' : '#64748B' }}
                                >
                                  {segment.agents}
                                </span>
                              </div>
                            </button>

                            {/* 6 Time Cells */}
                            {segment.densities.map((density, timeIdx) => {
                              const isCellSelected = isSegmentSelected && selectedTimeIndex === timeIdx;
                              const style = getDensityStyle(density, isCellSelected);
                              const events = segment.eventCounts[timeIdx];
                              const blocked = segment.blockedCounts[timeIdx];

                              return (
                                <button
                                  key={timeIdx}
                                  type="button"
                                  onClick={() => {
                                    setSelectedHeatmapSegmentId(segment.id);
                                    setSelectedTimeIndex(timeIdx);
                                  }}
                                  className="h-14 rounded-lg p-1.5 flex flex-col justify-between items-center text-center transition-all cursor-pointer relative overflow-hidden group"
                                  style={{
                                    backgroundColor: style.bg,
                                    borderColor: style.border,
                                    borderWidth: isCellSelected ? '2px' : '1px',
                                    boxShadow: isCellSelected ? '0 0 12px rgba(56, 189, 248, 0.3)' : 'none',
                                    transform: isCellSelected ? 'scale(1.02)' : 'none',
                                  }}
                                  title={`${segment.name} (${timeWindows[timeIdx]}): ${density}% Threat Density, ${blocked} Autonomous Interceptions`}
                                >
                                  <div className="w-full flex items-center justify-between">
                                    <span className="text-[10px] font-mono font-extrabold" style={{ color: style.text }}>
                                      {density}%
                                    </span>
                                    {density >= 80 ? (
                                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                                    ) : density >= 50 ? (
                                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    ) : (
                                      <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-50" />
                                    )}
                                  </div>

                                  <div className="w-full flex items-center justify-between text-[9px] font-mono opacity-80"
                                    style={{ color: style.text }}
                                  >
                                    <span>{(events / 1000).toFixed(1)}k evt</span>
                                    <span className="font-bold">+{blocked}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Inspected Segment Deep-Dive with Recharts Trendline & Live Telemetry Inspector */}
                  <div className={`grid ${chartLayoutMode === 'stacked' ? 'grid-cols-1 gap-6' : 'grid-cols-1 lg:grid-cols-12 gap-4'} pt-4 border-t`}
                    style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
                  >
                    {/* Left: Recharts 24-Hour Segment Threat & Containment Trendline */}
                    <div className={`${chartLayoutMode === 'stacked' ? 'w-full' : 'lg:col-span-7'} p-4 rounded-xl border flex flex-col justify-between`}
                      style={{
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#FFFFFF',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold uppercase" style={{ color: isDark ? '#38BDF8' : '#0284C7' }}>
                              {activeHeatmapSegment.name}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                              style={{
                                backgroundColor: isDark ? 'rgba(56, 189, 248, 0.15)' : '#E0F2FE',
                                color: isDark ? '#38BDF8' : '#0284C7',
                              }}
                            >
                              24H TREND
                            </span>
                          </div>
                          <p className="text-[11px] mt-0.5" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                            {threatLabels?.densityTrendChart || 'Threat Density (%) vs. Autonomous Containment Interceptions'}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          <span className="flex items-center gap-1" style={{ color: isDark ? '#FB7185' : '#E11D48' }}>
                            <span className="w-2 h-2 rounded-full bg-rose-500" />
                            Density %
                          </span>
                          <span className="flex items-center gap-1" style={{ color: isDark ? '#34D399' : '#059669' }}>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Autonomous Blocks
                          </span>
                        </div>
                      </div>

                      <div className={`w-full ${chartLayoutMode === 'stacked' ? 'h-64 sm:h-80' : 'h-52 sm:h-56'} min-h-[190px]`}>
                        <ResponsiveContainer width="100%" height="100%" debounce={50}>
                          <ComposedChart
                            data={inspectedSegmentTrendData}
                            margin={{ top: 12, right: 6, left: -24, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient id="segmentDensityGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={isDark ? '#F43F5E' : '#E11D48'} stopOpacity={0.4} />
                                <stop offset="95%" stopColor={isDark ? '#F43F5E' : '#E11D48'} stopOpacity={0.0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke={isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}
                              vertical={false}
                            />
                            <XAxis
                              dataKey="shortTime"
                              stroke={isDark ? '#64748B' : '#94A3B8'}
                              fontSize={10}
                              tickLine={false}
                              tickMargin={4}
                              axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1' }}
                            />
                            <YAxis
                              yAxisId="left"
                              stroke={isDark ? '#64748B' : '#94A3B8'}
                              fontSize={10}
                              tickLine={false}
                              tickMargin={2}
                              domain={[0, 100]}
                              unit="%"
                              axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1' }}
                            />
                            <YAxis
                              yAxisId="right"
                              orientation="right"
                              stroke={isDark ? '#64748B' : '#94A3B8'}
                              fontSize={10}
                              tickLine={false}
                              tickMargin={2}
                              axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1' }}
                            />
                            <Tooltip content={<HeatmapTrendTooltip />} />

                            {/* Critical Breach Threat Reference */}
                            <ReferenceLine
                              yAxisId="left"
                              y={80}
                              stroke={isDark ? '#EF4444' : '#DC2626'}
                              strokeDasharray="3 3"
                              label={{
                                value: 'Critical Threshold (80%)',
                                fill: isDark ? '#FCA5A5' : '#DC2626',
                                fontSize: 9,
                                position: 'top',
                                className: 'font-mono'
                              }}
                            />

                            {/* Baseline Reference */}
                            <ReferenceLine
                              yAxisId="left"
                              y={20}
                              stroke={isDark ? '#10B981' : '#059669'}
                              strokeDasharray="3 3"
                              label={{
                                value: 'Nominal Baseline (20%)',
                                fill: isDark ? '#6EE7B7' : '#059669',
                                fontSize: 9,
                                position: 'bottom',
                                className: 'font-mono'
                              }}
                            />

                            {!hiddenSeriesKeys.includes('density') && (
                              <Area
                                yAxisId="left"
                                type="monotone"
                                dataKey="density"
                                name={threatLabels?.densityRate || 'Threat Density'}
                                stroke={isDark ? '#FB7185' : '#E11D48'}
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#segmentDensityGrad)"
                              />
                            )}

                            {!hiddenSeriesKeys.includes('blocked') && (
                              <Bar
                                yAxisId="right"
                                dataKey="blocked"
                                name={threatLabels?.blockedAttacks || 'Autonomous Blocks'}
                                fill={isDark ? 'rgba(52, 211, 153, 0.65)' : 'rgba(5, 150, 105, 0.5)'}
                                radius={[3, 3, 0, 0]}
                                barSize={16}
                              />
                            )}
                          </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Right: Inspected Segment Telemetry Card */}
                    <div className={`${chartLayoutMode === 'stacked' ? 'w-full' : 'lg:col-span-5'} p-4 rounded-xl border flex flex-col justify-between`}
                      style={{
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#FFFFFF',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 pb-2.5 border-b"
                          style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
                        >
                          <div className="flex items-center gap-2">
                            <span style={{ color: isDark ? '#38BDF8' : '#0284C7' }}>
                              {activeHeatmapSegment.icon}
                            </span>
                            <span className="font-bold text-sm" style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}>
                              {activeHeatmapSegment.name}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono px-2 py-0.5 rounded font-extrabold"
                            style={{
                              backgroundColor: activeCellDensity >= 80
                                ? (isDark ? 'rgba(244, 63, 94, 0.2)' : '#FFE4E6')
                                : activeCellDensity >= 50
                                  ? (isDark ? 'rgba(249, 115, 22, 0.2)' : '#FFEDD5')
                                  : (isDark ? 'rgba(16, 185, 129, 0.2)' : '#D1FAE5'),
                              color: activeCellDensity >= 80
                                ? (isDark ? '#FB7185' : '#E11D48')
                                : activeCellDensity >= 50
                                  ? (isDark ? '#FDBA74' : '#C2410C')
                                  : (isDark ? '#34D399' : '#059669'),
                            }}
                          >
                            {timeWindows[selectedTimeIndex]}: {activeCellDensity}%
                          </span>
                        </div>

                        <p className="text-xs mt-2.5 font-sans leading-relaxed" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                          {activeHeatmapSegment.desc}
                        </p>

                        <div className="mt-3.5 space-y-2.5 text-xs font-mono">
                          <div className="p-2.5 rounded-lg border"
                            style={{
                              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.3)' : '#F8FAFC',
                              borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                            }}
                          >
                            <span className="block text-[10px] font-bold uppercase tracking-wider mb-1"
                              style={{ color: isDark ? '#FB7185' : '#E11D48' }}
                            >
                              {threatLabels?.activeThreatVector || 'Active Threat Vector'}:
                            </span>
                            <span className="font-semibold text-xs leading-snug block" style={{ color: isDark ? '#F1F5F9' : '#1E293B' }}>
                              {activeCellVector}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg border"
                            style={{
                              backgroundColor: isDark ? 'rgba(16, 185, 129, 0.05)' : '#F0FDF4',
                              borderColor: isDark ? 'rgba(16, 185, 129, 0.2)' : '#BBF7D0',
                            }}
                          >
                            <span className="block text-[10px] font-bold uppercase tracking-wider mb-1"
                              style={{ color: isDark ? '#34D399' : '#059669' }}
                            >
                              {threatLabels?.autonomousMitigation || 'Autonomous Containment Execution'}:
                            </span>
                            <span className="font-semibold text-xs leading-snug block" style={{ color: isDark ? '#E2E8F0' : '#14532D' }}>
                              {activeCellMitigation}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Mini Telemetry Stats */}
                      <div className="mt-4 pt-3 border-t grid grid-cols-3 gap-2 text-center text-xs font-mono"
                        style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
                      >
                        <div>
                          <span className="text-[10px] block opacity-75" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                            {threatLabels?.latency || 'Latency'}
                          </span>
                          <span className="font-bold text-emerald-400">{activeCellLatency}</span>
                        </div>
                        <div>
                          <span className="text-[10px] block opacity-75" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                            {threatLabels?.blocked || 'Blocks'}
                          </span>
                          <span className="font-bold text-sky-400">+{activeCellBlocked}</span>
                        </div>
                        <div>
                          <span className="text-[10px] block opacity-75" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                            {threatLabels?.honeypots || 'Tripwires'}
                          </span>
                          <span className="font-bold text-amber-400">{activeCellHoneypot} active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* RESPONSE TIME & RESOLUTION TRENDS VIEWS */
                <div className="space-y-3">
                  {/* Interactive Legend with Rich Descriptions & SLA Tooltips */}
                  <InteractiveLegendWithTooltip
                    items={activeChartTab === 'responseTime' ? responseTimeLegendItems : resolutionTrendsLegendItems}
                    showHelperTip={true}
                  />

                  <div className={`w-full ${chartLayoutMode === 'stacked' ? 'h-80 xs:h-96 sm:h-[420px]' : 'h-72 xs:h-80 sm:h-96'} min-h-[260px]`}>
                    <ResponsiveContainer width="100%" height="100%" debounce={50}>
                      {activeChartTab === 'responseTime' ? (
                        <AreaChart
                          data={responseTimeData}
                          margin={{ top: 16, right: 8, left: -22, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="mttcGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={isDark ? '#34D399' : '#059669'} stopOpacity={0.4} />
                              <stop offset="95%" stopColor={isDark ? '#34D399' : '#059669'} stopOpacity={0.0} />
                            </linearGradient>
                            <linearGradient id="mttdGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={isDark ? '#38BDF8' : '#0284C7'} stopOpacity={0.4} />
                              <stop offset="95%" stopColor={isDark ? '#38BDF8' : '#0284C7'} stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}
                            vertical={false}
                          />
                          <XAxis
                            dataKey="month"
                            stroke={isDark ? '#64748B' : '#94A3B8'}
                            fontSize={10}
                            tickLine={false}
                            tickMargin={6}
                            axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1' }}
                          />
                          <YAxis
                            stroke={isDark ? '#64748B' : '#94A3B8'}
                            fontSize={10}
                            tickLine={false}
                            tickMargin={4}
                            axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1' }}
                            unit="m"
                            domain={[0, 60]}
                          />
                          <Tooltip content={<CustomTooltip />} />
                          
                          {/* Industry Benchmark reference line */}
                          {!hiddenSeriesKeys.includes('industryAvg') && (
                            <ReferenceLine
                              y={45}
                              stroke={isDark ? '#EF4444' : '#DC2626'}
                              strokeDasharray="4 4"
                              label={{
                                value: `${chartContent.responseTimeLabels.industryAvg} (45m)`,
                                fill: isDark ? '#FCA5A5' : '#DC2626',
                                fontSize: 9,
                                position: 'top',
                                className: 'font-mono'
                              }}
                            />
                          )}

                          {/* Contractual SLA reference line */}
                          {!hiddenSeriesKeys.includes('slaTarget') && (
                            <ReferenceLine
                              y={15}
                              stroke={isDark ? '#F59E0B' : '#D97706'}
                              strokeDasharray="3 3"
                              label={{
                                value: `${chartContent.responseTimeLabels.slaTarget} (15m)`,
                                fill: isDark ? '#FCD34D' : '#D97706',
                                fontSize: 9,
                                position: 'top',
                                className: 'font-mono'
                              }}
                            />
                          )}

                          {!hiddenSeriesKeys.includes('mttc') && (
                            <Area
                              type="monotone"
                              dataKey="mttc"
                              name={chartContent.responseTimeLabels.mttc}
                              stroke={isDark ? '#34D399' : '#059669'}
                              strokeWidth={2.5}
                              fillOpacity={1}
                              fill="url(#mttcGrad)"
                            />
                          )}
                          {!hiddenSeriesKeys.includes('mttd') && (
                            <Area
                              type="monotone"
                              dataKey="mttd"
                              name={chartContent.responseTimeLabels.mttd}
                              stroke={isDark ? '#38BDF8' : '#0284C7'}
                              strokeWidth={2.5}
                              fillOpacity={1}
                              fill="url(#mttdGrad)"
                            />
                          )}
                        </AreaChart>
                      ) : (
                        <ComposedChart
                          data={resolutionTrendsData}
                          margin={{ top: 16, right: 8, left: -22, bottom: 0 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}
                            vertical={false}
                          />
                          <XAxis
                            dataKey="month"
                            stroke={isDark ? '#64748B' : '#94A3B8'}
                            fontSize={10}
                            tickLine={false}
                            tickMargin={6}
                            axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1' }}
                          />
                          <YAxis
                            stroke={isDark ? '#64748B' : '#94A3B8'}
                            fontSize={10}
                            tickLine={false}
                            tickMargin={4}
                            axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1' }}
                          />
                          <Tooltip content={<CustomTooltip />} />
                          
                          {!hiddenSeriesKeys.includes('rawAlerts') && (
                            <Bar
                              dataKey="raw"
                              name={chartContent.resolutionTrendsLabels.rawAlerts}
                              fill={isDark ? 'rgba(148, 163, 184, 0.25)' : 'rgba(148, 163, 184, 0.4)'}
                              radius={[4, 4, 0, 0]}
                            />
                          )}
                          {!hiddenSeriesKeys.includes('noiseFiltered') && (
                            <Bar
                              dataKey="filtered"
                              name={chartContent.resolutionTrendsLabels.noiseFiltered}
                              fill={isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(2, 132, 199, 0.3)'}
                              radius={[4, 4, 0, 0]}
                            />
                          )}
                          {!hiddenSeriesKeys.includes('resolvedSLA') && (
                            <Line
                              type="monotone"
                              dataKey="resolvedSla"
                              name={chartContent.resolutionTrendsLabels.resolvedSLA}
                              stroke={isDark ? '#34D399' : '#059669'}
                              strokeWidth={3}
                              dot={{ r: 3.5, fill: isDark ? '#34D399' : '#059669' }}
                            />
                          )}
                        </ComposedChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Bottom Insight Footer */}
              <div className="mt-4 pt-3 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono"
                style={{
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                  color: isDark ? '#94A3B8' : '#64748B',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    100% of validated Sev-1/Sev-2 incidents contained within contractual SLA (Sub-15m target)
                  </span>
                </div>
                <span className="text-[11px] opacity-75">
                  Updated every 24h from SOC production telemetry
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Three Layers, One Job Each (Visual Pipeline) */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1.5"
              style={{ color: isDark ? '#38BDF8' : '#0369A1' }}
            >
              02 // UNIDIRECTIONAL DETECTION PIPELINE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight"
              style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
            >
              {content.pipeline.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed"
              style={{ color: isDark ? '#94A3B8' : '#64748B' }}
            >
              {content.pipeline.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {content.pipeline.layers.map((layer, index) => {
              const icons = [
                <Database className="w-5 h-5" />,
                <Cpu className="w-5 h-5" />,
                <Zap className="w-5 h-5" />
              ];

              return (
                <div
                  key={index}
                  className="aegis-card p-6 sm:p-7 rounded-2xl border flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                    boxShadow: isDark ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.06)',
                  }}
                >
                  <div>
                    {/* Top Step Pill & Role */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b"
                      style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md"
                          style={{
                            backgroundColor: isDark ? 'rgba(56, 189, 248, 0.12)' : '#E0F2FE',
                            color: isDark ? '#38BDF8' : '#0369A1',
                          }}
                        >
                          LAYER {layer.stepNumber}
                        </span>
                        <span className="text-xs font-mono font-semibold"
                          style={{ color: isDark ? '#64748B' : '#94A3B8' }}
                        >
                          PIPELINE STAGE
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                          color: isDark ? '#38BDF8' : '#0369A1',
                        }}
                      >
                        {icons[index]}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold tracking-tight mb-1"
                      style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
                    >
                      {layer.name}
                    </h4>
                    <p className="text-xs font-mono mb-4"
                      style={{ color: isDark ? '#38BDF8' : '#0369A1' }}
                    >
                      {layer.role}
                    </p>

                    <p className="text-sm leading-relaxed mb-6"
                      style={{ color: isDark ? '#CBD5E1' : '#334155' }}
                    >
                      {layer.description}
                    </p>
                  </div>

                  {/* Engineering focus block */}
                  <div className="p-3.5 rounded-xl border mt-auto"
                    style={{
                      backgroundColor: isDark ? 'rgba(56, 189, 248, 0.04)' : '#F0F9FF',
                      borderColor: isDark ? 'rgba(56, 189, 248, 0.15)' : '#BAE6FD',
                    }}
                  >
                    <span className="text-[11px] font-mono font-bold block mb-1 uppercase tracking-wider"
                      style={{ color: isDark ? '#38BDF8' : '#0284C7' }}
                    >
                      {layer.engineeringFocusLabel}
                    </span>
                    <p className="text-xs leading-relaxed"
                      style={{ color: isDark ? '#94A3B8' : '#475569' }}
                    >
                      {layer.engineeringFocus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: Why We Don't Auto-Respond to Everything */}
        <div className="aegis-card rounded-2xl border p-6 sm:p-8 backdrop-blur-md"
          style={{
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
            boxShadow: isDark ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.06)',
          }}
        >
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1.5"
              style={{ color: isDark ? '#F59E0B' : '#D97706' }}
            >
              03 // {content.containmentStrategy.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight"
              style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
            >
              {content.containmentStrategy.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed font-medium"
              style={{ color: isDark ? '#E2E8F0' : '#1E293B' }}
            >
              {content.containmentStrategy.lead}
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed p-3.5 rounded-xl border"
              style={{
                backgroundColor: isDark ? 'rgba(245, 158, 11, 0.06)' : '#FFFBEB',
                borderColor: isDark ? 'rgba(245, 158, 11, 0.2)' : '#FDE68A',
                color: isDark ? '#FCD34D' : '#92400E',
              }}
            >
              <Info className="w-4 h-4 inline-block mr-1.5 -mt-0.5 shrink-0" />
              {content.containmentStrategy.deliberateTrustNote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.containmentStrategy.cards.map((card, idx) => {
              const isAuto = card.type === 'automated';
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border flex flex-col justify-between"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: isAuto
                            ? (isDark ? 'rgba(16, 185, 129, 0.12)' : '#ECFDF5')
                            : (isDark ? 'rgba(56, 189, 248, 0.12)' : '#E0F2FE'),
                          color: isAuto
                            ? (isDark ? '#34D399' : '#047857')
                            : (isDark ? '#38BDF8' : '#0369A1'),
                        }}
                      >
                        {card.tag}
                      </span>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                          color: isAuto
                            ? (isDark ? '#34D399' : '#059669')
                            : (isDark ? '#38BDF8' : '#0284C7'),
                        }}
                      >
                        {isAuto ? <Zap className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                      </div>
                    </div>

                    <h4 className="text-base font-bold mb-2" style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}>
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: isDark ? '#94A3B8' : '#475569' }}>
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t mt-auto"
                    style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0' }}
                  >
                    <span className="text-[11px] font-mono font-bold block mb-1 uppercase tracking-wider"
                      style={{ color: isDark ? '#64748B' : '#64748B' }}
                    >
                      Operational Defense Rationale:
                    </span>
                    <p className="text-xs leading-relaxed" style={{ color: isDark ? '#CBD5E1' : '#334155' }}>
                      {card.rationale}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: Predictive Risk & Threat Escalation Modeling */}
        <div className="space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1.5"
              style={{ color: isDark ? '#FB7185' : '#E11D48' }}
            >
              04 // {predictiveContent.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight"
              style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
            >
              {predictiveContent.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed"
              style={{ color: isDark ? '#94A3B8' : '#64748B' }}
            >
              {predictiveContent.subtitle}
            </p>
          </div>

          {/* Metric Highlights Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {predictiveContent.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="aegis-card p-5 rounded-xl border backdrop-blur-md relative overflow-hidden"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#FFFFFF',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono uppercase font-bold"
                    style={{ color: isDark ? '#94A3B8' : '#64748B' }}
                  >
                    {metric.label}
                  </span>
                  <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: isDark ? 'rgba(52, 211, 153, 0.12)' : '#ECFDF5',
                      color: isDark ? '#34D399' : '#059669',
                    }}
                  >
                    {idx === 0 ? <Target className="w-3.5 h-3.5" /> : idx === 1 ? <Clock className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight"
                  style={{ color: isDark ? '#34D399' : '#047857' }}
                >
                  {metric.value}
                </div>
                <p className="text-[11px] mt-1 font-mono"
                  style={{ color: isDark ? '#64748B' : '#94A3B8' }}
                >
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Main Predictive Risk Interactive Card */}
          <div
            className="aegis-card rounded-2xl border p-6 sm:p-8 backdrop-blur-md space-y-6"
            style={{
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
              boxShadow: isDark ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.06)',
            }}
          >
            {/* Top Scenario Selector Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b"
              style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
            >
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4" style={{ color: isDark ? '#38BDF8' : '#0284C7' }} />
                <span className="text-xs font-mono font-bold uppercase tracking-wider"
                  style={{ color: isDark ? '#E2E8F0' : '#1E293B' }}
                >
                  {predictiveContent.scenarioSelectLabel}
                </span>
              </div>

              {/* Scenario Pills */}
              <div className="flex flex-wrap gap-2">
                {predictiveContent.scenarios.map((scen) => {
                  const isSelected = scen.id === selectedScenarioId;
                  return (
                    <button
                      key={scen.id}
                      onClick={() => {
                        setSelectedScenarioId(scen.id);
                        setSelectedStageIndex(2); // Reset to lateral movement stage
                      }}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-2"
                      style={{
                        backgroundColor: isSelected
                          ? (isDark ? 'rgba(56, 189, 248, 0.18)' : '#E0F2FE')
                          : (isDark ? 'rgba(255, 255, 255, 0.04)' : '#F1F5F9'),
                        color: isSelected
                          ? (isDark ? '#38BDF8' : '#0369A1')
                          : (isDark ? '#94A3B8' : '#64748B'),
                        border: `1px solid ${
                          isSelected
                            ? (isDark ? 'rgba(56, 189, 248, 0.35)' : '#BAE6FD')
                            : (isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0')
                        }`,
                      }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-sky-400 animate-pulse' : 'bg-slate-500'}`} />
                      <span>{scen.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Scenario Context & Comparative Telemetry Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-xl border text-xs font-mono"
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
              }}
            >
              <div>
                <span className="text-[10px] uppercase font-bold block mb-0.5" style={{ color: isDark ? '#64748B' : '#94A3B8' }}>
                  Attack Vector & Path:
                </span>
                <span className="font-sans font-medium" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
                  {activeScenario.vector}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold block mb-0.5" style={{ color: isDark ? '#64748B' : '#94A3B8' }}>
                  Targeted Assets:
                </span>
                <span className="font-sans font-medium" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
                  {activeScenario.target}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 inline" /> AEGIS Containment:
                  </span>
                  <span className="font-bold text-emerald-400">{activeScenario.proactiveContainmentTime}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-1">
                  <span className="text-rose-400 font-bold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 inline" /> Reactive Breach:
                  </span>
                  <span className="font-bold text-rose-400">{activeScenario.reactiveBreachTime}</span>
                </div>
              </div>
            </div>

            {/* Visual Threat Escalation Chart */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
                  >
                    Threat Escalation Curve vs Proactive Neutralization
                  </span>
                </div>
              </div>

              {/* Interactive Legend with Descriptive Tooltips */}
              <InteractiveLegendWithTooltip items={predictiveRiskLegendItems} compact={true} showHelperTip={true} />

              {/* Chart Canvas */}
              <div className="w-full h-64 xs:h-72 sm:h-80 pt-2" dir="ltr">
                <ResponsiveContainer width="100%" height="100%" debounce={50}>
                  <AreaChart
                    data={predictiveChartData}
                    margin={{ top: 15, right: 10, left: -22, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="unmitigatedGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={isDark ? '#F43F5E' : '#E11D48'} stopOpacity={0.45} />
                        <stop offset="95%" stopColor={isDark ? '#F43F5E' : '#E11D48'} stopOpacity={0.02} />
                      </linearGradient>
                      <linearGradient id="proactiveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={isDark ? '#10B981' : '#059669'} stopOpacity={0.4} />
                        <stop offset="95%" stopColor={isDark ? '#10B981' : '#059669'} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="shortPhase"
                      stroke={isDark ? '#64748B' : '#94A3B8'}
                      fontSize={10}
                      tickLine={false}
                      tickMargin={4}
                      axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0' }}
                    />
                    <YAxis
                      domain={[0, 100]}
                      unit="%"
                      stroke={isDark ? '#64748B' : '#94A3B8'}
                      fontSize={10}
                      tickLine={false}
                      tickMargin={2}
                      axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0' }}
                    />
                    <Tooltip content={<PredictiveTooltip />} />
                    {!hiddenSeriesKeys.includes('threshold') && (
                      <ReferenceLine
                        y={80}
                        stroke={isDark ? '#F43F5E' : '#BE123C'}
                        strokeDasharray="4 4"
                        label={{
                          value: 'Critical Breach Threshold (80%)',
                          position: 'top',
                          fill: isDark ? '#FB7185' : '#BE123C',
                          fontSize: 9,
                          fontFamily: 'monospace'
                        }}
                      />
                    )}
                    {!hiddenSeriesKeys.includes('unmitigatedRisk') && (
                      <Area
                        type="monotone"
                        dataKey="unmitigatedRisk"
                        name="Unmitigated Risk"
                        stroke={isDark ? '#FB7185' : '#E11D48'}
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#unmitigatedGradient)"
                      />
                    )}
                    {!hiddenSeriesKeys.includes('proactiveRisk') && (
                      <Area
                        type="monotone"
                        dataKey="proactiveRisk"
                        name="AEGIS Proactive Risk"
                        stroke={isDark ? '#34D399' : '#059669'}
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#proactiveGradient)"
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Interactive Attack Stage Stepper & Detailed Action Inspector */}
            <div className="space-y-4 pt-4 border-t"
              style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider"
                  style={{ color: isDark ? '#38BDF8' : '#0284C7' }}
                >
                  Chronological Stage Telemetry & Response Protocol:
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono" style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                  Click stage to inspect
                </span>
              </div>

              {/* Stage Progress Stepper Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2">
                {activeScenario.stages.map((stg, i) => {
                  const isCurrent = i === selectedStageIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedStageIndex(i)}
                      className="p-2.5 sm:p-3 rounded-xl border text-left transition-all flex flex-col justify-between relative overflow-hidden min-h-[58px] sm:min-h-[64px] touch-manipulation cursor-pointer select-none active:scale-[0.98]"
                      style={{
                        backgroundColor: isCurrent
                          ? (isDark ? 'rgba(56, 189, 248, 0.12)' : '#F0F9FF')
                          : (isDark ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC'),
                        borderColor: isCurrent
                          ? (isDark ? 'rgba(56, 189, 248, 0.4)' : '#BAE6FD')
                          : (isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'),
                      }}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                            color: isDark ? '#F1F5F9' : '#0F172A',
                          }}
                        >
                          {stg.timeLabel}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold"
                          style={{ color: stg.unmitigatedRisk > 70 ? (isDark ? '#FB7185' : '#E11D48') : (isDark ? '#FCD34D' : '#D97706') }}
                        >
                          {stg.unmitigatedRisk}%
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold font-sans line-clamp-1"
                        style={{ color: isCurrent ? (isDark ? '#38BDF8' : '#0369A1') : (isDark ? '#CBD5E1' : '#334155') }}
                      >
                        {stg.phase}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Deep Inspection Box */}
              <div
                className="p-5 rounded-xl border flex flex-col md:flex-row gap-5 items-start justify-between"
                style={{
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.7)' : '#F8FAFC',
                  borderColor: isDark ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                }}
              >
                {/* Left: Adversary Phase Description */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider"
                      style={{ color: isDark ? '#FB7185' : '#E11D48' }}
                    >
                      Phase Details // {activeStage.phase} ({activeStage.timeLabel})
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans leading-relaxed"
                    style={{ color: isDark ? '#E2E8F0' : '#1E293B' }}
                  >
                    {activeStage.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono pt-1">
                    <span style={{ color: isDark ? '#FB7185' : '#E11D48' }}>
                      Unmitigated Risk: <strong>{activeStage.unmitigatedRisk}%</strong>
                    </span>
                    <span style={{ color: isDark ? '#34D399' : '#059669' }}>
                      AEGIS Residual Risk: <strong>{activeStage.proactiveRisk}%</strong>
                    </span>
                  </div>
                </div>

                {/* Right: SOC Proactive Intervention Protocol */}
                <div
                  className="flex-1 p-4 rounded-lg border space-y-2"
                  style={{
                    backgroundColor: isDark ? 'rgba(52, 211, 153, 0.08)' : '#ECFDF5',
                    borderColor: isDark ? 'rgba(52, 211, 153, 0.25)' : '#A7F3D0',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      AEGIS Proactive Neutralization Action
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans leading-relaxed"
                    style={{ color: isDark ? '#D1FAE5' : '#065F46' }}
                  >
                    {activeStage.proactiveAction}
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Callout: Proactive vs Reactive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div
                className="p-4 rounded-xl border flex items-start gap-3"
                style={{
                  backgroundColor: isDark ? 'rgba(52, 211, 153, 0.04)' : '#F0FDF4',
                  borderColor: isDark ? 'rgba(52, 211, 153, 0.15)' : '#BBF7D0',
                }}
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase font-mono mb-1"
                    style={{ color: isDark ? '#34D399' : '#047857' }}
                  >
                    {predictiveContent.proactiveVsReactive.proactiveTitle}
                  </h5>
                  <p className="text-xs leading-relaxed"
                    style={{ color: isDark ? '#94A3B8' : '#475569' }}
                  >
                    {predictiveContent.proactiveVsReactive.proactiveDescription}
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-xl border flex items-start gap-3"
                style={{
                  backgroundColor: isDark ? 'rgba(244, 63, 94, 0.04)' : '#FFF1F2',
                  borderColor: isDark ? 'rgba(244, 63, 94, 0.15)' : '#FECDD3',
                }}
              >
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase font-mono mb-1"
                    style={{ color: isDark ? '#FB7185' : '#BE123C' }}
                  >
                    {predictiveContent.proactiveVsReactive.reactiveTitle}
                  </h5>
                  <p className="text-xs leading-relaxed"
                    style={{ color: isDark ? '#94A3B8' : '#475569' }}
                  >
                    {predictiveContent.proactiveVsReactive.reactiveDescription}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 5: Security of the SOC Itself */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1.5"
              style={{ color: isDark ? '#38BDF8' : '#0369A1' }}
            >
              05 // {content.socSecurity.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight"
              style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
            >
              {content.socSecurity.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed"
              style={{ color: isDark ? '#94A3B8' : '#64748B' }}
            >
              {content.socSecurity.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.socSecurity.pillars.map((pillar, idx) => {
              const pillarIcons = [
                <Lock className="w-5 h-5" />,
                <Server className="w-5 h-5" />,
                <FileCheck className="w-5 h-5" />
              ];

              return (
                <div
                  key={idx}
                  className="aegis-card p-6 rounded-2xl border flex flex-col justify-between backdrop-blur-md"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
                    boxShadow: isDark ? 'inset 0 1px 0 0 rgba(255,255,255,0.06)' : '0 1px 3px rgba(15,23,42,0.06)',
                  }}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: isDark ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                        color: isDark ? '#38BDF8' : '#0369A1',
                      }}
                    >
                      {pillarIcons[idx]}
                    </div>
                    <h4 className="text-base font-bold mb-2 tracking-tight"
                      style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
                    >
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: isDark ? '#94A3B8' : '#475569' }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 6: What We Tell You Honestly (Callout Box) */}
        <div
          className="rounded-2xl border p-6 sm:p-8 backdrop-blur-sm"
          style={{
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b"
            style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0' }}
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1"
                style={{ color: isDark ? '#94A3B8' : '#64748B' }}
              >
                06 // TRANSPARENCY PRINCIPLES
              </span>
              <h4 className="text-lg font-bold tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
              >
                {content.honestyCallout.title}
              </h4>
            </div>
            <p className="text-xs font-mono"
              style={{ color: isDark ? '#94A3B8' : '#64748B' }}
            >
              {content.honestyCallout.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.honestyCallout.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                    color: isDark ? '#38BDF8' : '#0369A1',
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold mb-1"
                    style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
                  >
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: isDark ? '#94A3B8' : '#475569' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
