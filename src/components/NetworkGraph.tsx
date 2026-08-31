import React, { useState } from 'react';
import { Shield, Lock, Activity, Users, Database } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const NetworkGraph: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [activeNode, setActiveNode] = useState<string>('traefik');

  const nodesByLang = {
    en: [
      {
        id: 'ingress',
        title: 'Untrusted Ingress',
        type: 'Client / WAN',
        icon: Users,
        badge: 'TCP/443',
        desc: 'Workstations & public internet. Location confers zero access rights.',
      },
      {
        id: 'traefik',
        title: 'Traefik Gateway (PEP)',
        type: 'Reverse Proxy',
        icon: Shield,
        badge: 'TLS 1.3 Term',
        desc: 'Edge Policy Enforcement Point. ForwardAuth sub-request to Authelia before proxying.',
      },
      {
        id: 'auth',
        title: 'Authelia + Keycloak (PDP)',
        type: 'Identity & Access',
        icon: Lock,
        badge: 'Argon2id + TOTP',
        desc: 'Policy Decision Point. Evaluates cryptographically signed sessions and Active Directory groups.',
      },
      {
        id: 'origin',
        title: 'Isolated Origin Services',
        type: 'Internal Upstreams',
        icon: Database,
        badge: 'Zero Public IP',
        desc: 'Internal web apps & databases. Unreachable except via verified Traefik proxy network.',
      },
      {
        id: 'soc',
        title: 'Zone 4 MSSP SOC (SOAR)',
        type: 'Continuous Triage',
        icon: Activity,
        badge: '24/7 Wazuh/ELK',
        desc: 'Continuous behavioral telemetry. Automated containment kills compromised sessions in < 5s.',
      }
    ],
    fr: [
      {
        id: 'ingress',
        title: 'Ingress Non Approuvé',
        type: 'Postes / WAN',
        icon: Users,
        badge: 'TCP/443',
        desc: 'Postes de travail et internet public. La localisation physique ne confère aucun droit d\'accès implicite.',
      },
      {
        id: 'traefik',
        title: 'Passerelle Traefik (PEP)',
        type: 'Reverse Proxy',
        icon: Shield,
        badge: 'Terminaison TLS 1.3',
        desc: 'Point d\'Application des Politiques (PEP). Sous-requête ForwardAuth vers Authelia avant tout proxying.',
      },
      {
        id: 'auth',
        title: 'Authelia + Keycloak (PDP)',
        type: 'Identité & IAM',
        icon: Lock,
        badge: 'Argon2id + TOTP',
        desc: 'Point de Décision des Politiques (PDP). Valide les sessions signées cryptographiquement et les groupes Active Directory.',
      },
      {
        id: 'origin',
        title: 'Services Internes Isolés',
        type: 'Upstreams Internes',
        icon: Database,
        badge: '0 IP Publique',
        desc: 'Applications métier et bases internes. Inaccessibles autrement que par le réseau proxy Traefik validé.',
      },
      {
        id: 'soc',
        title: 'SOC MSSP Zone 4 (SOAR)',
        type: 'Triage Continu',
        icon: Activity,
        badge: '24/7 Wazuh/ELK',
        desc: 'Télémétrie comportementale continue. Le confinement automatisé neutralise les sessions compromises en < 5s.',
      }
    ],
    ar: [
      {
        id: 'ingress',
        title: 'المدخل غير الموثوق',
        type: 'محطات العمل / الإنترنت',
        icon: Users,
        badge: 'TCP/443',
        desc: 'محطات العمل وشبكة الإنترنت العامة. الموقع الجغرافي لا يمنح أي صلاحيات وصول ضمنية.',
      },
      {
        id: 'traefik',
        title: 'بوابة Traefik (نقطة فرض السياسات PEP)',
        type: 'بروكسي عكسي ذكي',
        icon: Shield,
        badge: 'تشفير TLS 1.3',
        desc: 'نقطة تطبيق السياسات الطرفية. تقوم بإرسال استعلام تحقق فرعي لـ Authelia قبل تمرير أي ترافيك.',
      },
      {
        id: 'auth',
        title: 'Authelia + Keycloak (نقطة القرار PDP)',
        type: 'الهوية وإدارة الوصول',
        icon: Lock,
        badge: 'Argon2id + TOTP',
        desc: 'نقطة اتخاذ قرار الوصول. تقيّم الجلسات الموقعة رقمياً ومجموعات Active Directory لكل طلب.',
      },
      {
        id: 'origin',
        title: 'الخدمات والتطبيقات المعزولة',
        type: 'الأنظمة الداخلية',
        icon: Database,
        badge: 'بدون IP عام',
        desc: 'تطبيقات الأعمال وقواعد البيانات الداخلية. يستحيل الوصول إليها إلا عبر بروكسي Traefik المصادق عليه.',
      },
      {
        id: 'soc',
        title: 'مركز عمليات الأمن Zone 4 (SOAR)',
        type: 'مراقبة واحتواء مستمر',
        icon: Activity,
        badge: 'مراقبة 24/7 Wazuh/ELK',
        desc: 'تحليل سلوكي فوري وتليمتري. يعزل الجلسات المشبوهة ويوقف التهديدات في أقل من 5 ثوانٍ.',
      }
    ]
  };

  const nodes = nodesByLang[language] || nodesByLang.en;
  const activeNodeData = nodes.find(n => n.id === activeNode) || nodes[1];

  const headerLabel = language === 'fr' ? 'VISUALISEUR TOPOLOGIQUE AEGIS' : language === 'ar' ? 'مخطط بنية شبكة AEGIS' : 'AEGIS TOPOLOGY VISUALIZER';
  const mappingBadge = language === 'fr' ? 'CARTOGRAPHIE INTERACTIVE' : language === 'ar' ? 'تخطيط تفاعلي' : 'INTERACTIVE MAPPING';
  const specLabel = language === 'fr' ? 'SPÉCIFICATION DE LA COUCHE' : language === 'ar' ? 'مواصفات الطبقة' : 'LAYER SPECIFICATION';

  return (
    <div 
      className="p-6 sm:p-7 rounded-3xl border backdrop-blur-2xl relative overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#E2E8F0',
        boxShadow: theme === 'dark' 
          ? '0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
          : '0 4px 20px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.06)',
      }}
    >
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6"
        style={{
          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold"
            style={{ color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}
          >
            {headerLabel}
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded border"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
            borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.2)' : '#BAE6FD',
            color: theme === 'dark' ? '#38BDF8' : '#0369A1',
          }}
        >
          {mappingBadge}
        </span>
      </div>

      {/* Network Nodes Stack */}
      <div className="space-y-3 relative">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;

          return (
            <div key={node.id} className="relative">
              <button
                onClick={() => setActiveNode(node.id)}
                className="w-full p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group"
                style={{
                  backgroundColor: isSelected
                    ? (theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : '#F0F9FF')
                    : (theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC'),
                  borderColor: isSelected
                    ? (theme === 'dark' ? '#38BDF8' : '#0369A1')
                    : (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'),
                  boxShadow: isSelected
                    ? (theme === 'dark' ? 'inset 0 1px 0 0 rgba(56, 189, 248, 0.25)' : '0 2px 5px rgba(3, 105, 161, 0.1)')
                    : 'none',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: isSelected
                        ? (theme === 'dark' ? '#06B6D4' : '#0369A1')
                        : (theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF'),
                      color: isSelected
                        ? (theme === 'dark' ? '#020617' : '#FFFFFF')
                        : (theme === 'dark' ? '#94A3B8' : '#475569'),
                      border: '1px solid',
                      borderColor: isSelected
                        ? (theme === 'dark' ? '#06B6D4' : '#0369A1')
                        : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1'),
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="text-xs font-bold"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
                    >
                      {node.title}
                    </div>
                    <div className="text-[10px] font-mono"
                      style={{ color: theme === 'dark' ? '#94A3B8' : '#64748B' }}
                    >
                      {node.type}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
                      color: theme === 'dark' ? '#CBD5E1' : '#334155',
                    }}
                  >
                    {node.badge}
                  </span>
                </div>
              </button>

              {/* Connecting Pipe */}
              {idx < nodes.length - 1 && (
                <div className="flex justify-center my-0.5">
                  <div className="w-0.5 h-2"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Node Technical Inspection Drawer */}
      <div className="mt-6 p-4 rounded-2xl border transition-all"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : '#F8FAFC',
          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0',
        }}
      >
        <div className="flex items-center justify-between text-xs font-mono mb-1.5"
          style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
        >
          <span>{specLabel}</span>
          <span className="font-bold uppercase">{activeNodeData.id}</span>
        </div>
        <p className="text-xs leading-relaxed"
          style={{ color: theme === 'dark' ? '#CBD5E1' : '#475569' }}
        >
          {activeNodeData.desc}
        </p>
      </div>
    </div>
  );
};
