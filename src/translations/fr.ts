import { UIContent } from './types';

export const frContent: UIContent = {
  nav: {
    architecture: 'Architecture',
    howItWorks: 'Fonctionnement',
    comparison: 'Comparatif',
    roleExperience: 'Expérience Utilisateur',
    msspSoc: 'MSSP SOC',
    onboarding: 'Intégration',
    qa: 'FAQ Technique',
    architectureReview: 'Audit d’Architecture',
    lightMode: 'Mode Clair',
    darkMode: 'Mode Sombre',
    githubSpec: 'Spécification GitHub',
    language: 'Langue',
    lastUpdated: 'Mis à jour sept. 2026',
  },
  hero: {
    badgeVersion: 'AEGIS 2.1v',
    badgeCategory: 'Passerelle Zero-Trust & MSSP SOC',
    titlePart1: 'Les Pare-feux Périmétriques Laissent des Angles Morts.',
    titleHighlight: 'L’Isolation Zero-Trust',
    titlePart2: 'Les Élimine.',
    subtitle: 'AEGIS remplace la confiance réseau implicite par une vérification d’identité cryptographique continue à chaque requête. Conçue sur une passerelle proxy inverse éprouvée et adossée à un confinement automatisé SOC 24/7, elle protège vos applications et bases de données sans friction VPN.',
    guarantee1: 'Vérification Zero Trust par Requête HTTP/TCP',
    guarantee2: 'Micro-segmentation au Niveau du Noyau',
    guarantee3: 'Confinement Automatisé en Moins de 5s',
    guarantee4: 'Zéro Redevance SaaS par Utilisateur',
    ctaPrimary: 'Demander un Audit d’Architecture',
    ctaSecondary: 'Découvrir le fonctionnement',
    reportLink: 'Lire le rapport technique complet',
    openSourceNote: '* Repose sur des standards open-source (Traefik, Authelia, Keycloak, Wazuh, Sysmon). Aucun verrouillage propriétaire.',
    liveTrafficStatus: 'PIPELINE D’INGRESS EN DIRECT',
    activeSessions: 'Sessions Authentifiées',
    avgLatency: 'Latence Passerelle',
    containmentTime: 'SLA de Confinement',
  },
  theProblem: {
    badge: 'FAILLE DU PARADIGME DE SÉCURITÉ',
    title: 'La Dangereuse Illusion du Périmètre « Château Fort »',
    subtitle: 'La sécurité d’entreprise traditionnelle suppose que toute personne connectée au réseau local ou à un VPN est intrinsèquement digne de confiance. Les cyberattaquants exploitent précisément cet angle mort architectural.',
    vulnerabilities: [
      {
        id: 'implicit-trust',
        title: 'Confiance Réseau Implicite',
        subtitle: 'Une fois à l’intérieur, tout est accessible',
        description: 'Les pare-feux et VPN considèrent les sous-réseaux internes comme des zones sûres. Un attaquant qui compromet un seul poste peut scanner et accéder à tous les ports internes non protégés.',
        consequence: 'Accès illimité aux consoles d’administration, bases de données et microservices.',
        icon: 'ShieldOff'
      },
      {
        id: 'lateral-traversal',
        title: 'Mouvements Latéraux Non Inspectés',
        subtitle: 'Aucune inspection des flux internes est-ouest',
        description: 'Les équipements de périmètre inspectent le trafic entrant en bordure, mais ignorent complètement les communications transversales entre serveurs et postes internes.',
        consequence: 'Propagation fulgurante de rançongiciels à l’ensemble du sous-réseau en quelques secondes.',
        icon: 'Network'
      },
      {
        id: 'stolen-credentials',
        title: 'Usurpation d’Identifiants et Vol de Session',
        subtitle: 'Jetons statiques sans authentification renforcée',
        description: 'Une fois connecté le matin, la session d’un utilisateur est implicitement approuvée pendant des heures sans nouvelle vérification lors de l’accès à des données sensibles.',
        consequence: 'Les cookies dérobés permettent aux attaquants de contourner totalement les pare-feux classiques.',
        icon: 'KeyRound'
      },
      {
        id: 'vpn-blindspots',
        title: 'Infrastructures VPN Rigides et Coûteuses',
        subtitle: 'Expérience utilisateur dégradée et maintenance lourde',
        description: 'Les clients VPN traditionnels provoquent des déconnexions intempestives, alourdissent les postes de travail, ouvrent des failles de split-tunneling et imposent des coûts de licence élevés.',
        consequence: 'Les employés contournent les contrôles pour maintenir leur productivité.',
        icon: 'AlertTriangle'
      }
    ]
  },
  whatAegisIs: {
    badge: 'FONDATION ARCHITECTURALE',
    title: 'Qu’est-ce qu’AEGIS 2.1v ?',
    subtitle: 'AEGIS est une passerelle d’accès applicative sécurisée de classe entreprise, conçue pour appliquer l’architecture Zero Trust (NIST SP 800-207) sur l’ensemble de vos applications web, API et bases de données.',
    summaryCardTitle: 'Proxy Inverse avec Fermeture par Défaut (Fail-Closed)',
    summaryCardDesc: 'Les services d’origine ne possèdent aucune adresse routable sur Internet. Chaque paquet entrant est vérifié cryptographiquement auprès d’Authelia et Keycloak avant que Traefik n’établisse une connexion vers le service cible.',
    pillars: [
      {
        title: 'Proxy Inverse Sensible à l’Identité',
        tag: 'Cœur Traefik + Authelia',
        description: 'Terminaison TLS 1.3 en bordure de réseau et interception de chaque requête HTTP/HTTPS, validant les jetons de session en moins de 2 ms avant transmission.',
        tech: 'Traefik v3 / Authelia / OIDC'
      },
      {
        title: 'Gestion Centralisée des Identités & RBAC',
        tag: 'Synchronisation Active Directory & Keycloak',
        description: 'Connexion directe à votre annuaire d’entreprise avec hachage de mot de passe Argon2id et authentification multifacteur matérielle (TOTP / FIDO2 WebAuthn).',
        tech: 'Keycloak / Argon2id / FIDO2'
      },
      {
        title: 'Micro-segmentation au Niveau du Noyau',
        tag: 'Zéro Interface Réseau Non Contrôlée',
        description: 'Bases de données et consoles d’administration sont isolées dans des réseaux conteneurs privés sans aucun port hôte exposé, empêchant tout scan de port latéral.',
        tech: 'Réseaux Docker / iptables / Coraza WAF'
      },
      {
        title: 'Télémétrie Continue & MSSP SOC',
        tag: 'Intégration Wazuh & Sysmon',
        description: 'Diffusion en temps réel des journaux d’exécution des processus et des accès passerelle vers un SIEM Elasticsearch/Kibana avec déclencheurs SOAR de confinement automatique.',
        tech: 'Wazuh EDR / Sysmon / MITRE ATT&CK'
      }
    ],
    defenseLayersTitle: 'Défense en Profondeur Multicouche',
    defenseLayers: [
      {
        name: 'Couche 1 : Terminaison TLS & Ingress',
        role: 'Proxy Inverse Traefik',
        mechanism: 'Intercepte les domaines externes, applique HTTP/3 et TLS 1.3, et interroge le middleware d’authentification avant tout acheminement.'
      },
      {
        name: 'Couche 2 : Vérification d’Identité & MFA',
        role: 'Authelia + Keycloak OIDC',
        mechanism: 'Applique des politiques MFA par motif d’URL (^/admin.* -> two_factor). Valide le statut utilisateur et l’appartenance aux groupes.'
      },
      {
        name: 'Couche 3 : WAF & Protection Applicative',
        role: 'Moteur Coraza / ModSecurity',
        mechanism: 'Analyse les charges utiles pour détecter les attaques OWASP Top 10 (SQLi, XSS, SSRF, RCE) en temps réel avant d’atteindre les services internes.'
      },
      {
        name: 'Couche 4 : Télémétrie Hôte & Endpoint',
        role: 'Agent Wazuh + Sysmon',
        mechanism: 'Surveille l’exécution des processus au niveau du noyau et détecte les mouvements suspects ; révoque instantanément les sessions compromises en < 5s.'
      }
    ]
  },
  howItWorks: {
    badge: 'MOTEUR D’INGRESS INTERACTIF',
    title: 'Comment AEGIS Évalue Chaque Paquet Réseau',
    subtitle: 'Simulez le traitement de chaque requête à travers la validation cryptographique d’identité, l’inspection WAF et le confinement automatisé piloté par le SOC 24/7.',
    tabStandard: 'Ingress Authentifié Standard (Flux Utilisateur)',
    tabContainment: 'Confinement Automatique de Menace (Flux d’Attaque)',
    standardSubtitle: 'Employé légitime accédant à un microservice interne autorisé',
    containmentSubtitle: 'Poste compromis tentant un mouvement latéral et une élévation de privilèges non autorisée',
    runSimulation: 'Lancer la Vérification en Direct',
    resetSimulation: 'Réinitialiser le Pipeline',
    simulating: 'Vérification du Pipeline en Cours...',
    simulationComplete: 'Vérification du Pipeline Terminée',
    latencyBreakdown: 'RÉPARTITION DE LA LATENCE PAR ÉTAPE',
    telemetryStream: 'FLUX DE TÉLÉMÉTRIE EN DIRECT (PASSERELLE & SIEM)',
    stages: [
      {
        id: 'stage-1',
        title: '1. Interception TLS à l’Ingress',
        description: 'L’utilisateur demande une ressource interne (ex: crm.zerotrust.lan). Traefik termine le TLS 1.3 et capture les en-têtes HTTP.',
        technicalDetails: 'Le proxy inverse Traefik extrait le nom d’hôte, vérifie la suite cryptographique TLS et applique les règles de middleware configurées.',
        telemetryLog: '[TRAEFIK] [INGRESS] INCOMING_REQ method=GET host=crm.zerotrust.lan path=/dashboard client_ip=192.168.1.104 tls=TLS_1_3'
      },
      {
        id: 'stage-2',
        title: '2. Évaluation de l’Identité et de la Session',
        description: 'Traefik interroge Authelia. Il vérifie la validité du cookie de session, l’appartenance au groupe Active Directory et le statut MFA.',
        technicalDetails: 'Authelia valide le jeton HMAC cryptographique dans le cache Redis et confirme les revendications d’identité et de droits.',
        telemetryLog: '[AUTHELIA] [AUTH_CHECK] user=karim.dev groups=["Developers"] session_valid=true mfa_status=TOTP_VERIFIED (0.84ms)'
      },
      {
        id: 'stage-3',
        title: '3. Inspection WAF et Application des Politiques',
        description: 'Le WAF Coraza inspecte la charge utile contre le Top 10 OWASP et confirme les permissions de chemin selon la politique RBAC.',
        technicalDetails: 'La charge utile est saine ; le chemin /dashboard appartient au périmètre autorisé pour les développeurs ; aucun re-prompt exigé.',
        telemetryLog: '[CORAZA] [WAF] INSPECT_PAYLOAD status=CLEAN sqli_score=0 xss_score=0 policy_rule=ALLOW_DEVELOPERS'
      },
      {
        id: 'stage-4',
        title: '4. Acheminement vers le Conteneur Micro-segmenté',
        description: 'Traefik transmet la requête nettoyée au conteneur cible sur un réseau pont privé ; aucun port exposé sur l’hôte.',
        technicalDetails: 'Le service cible traite la requête et renvoie la réponse via le tunnel TLS Traefik au navigateur en moins de 2,2 ms au total.',
        telemetryLog: '[GATEWAY] [UPSTREAM_DISPATCH] target=http://internal_crm:8080 http_status=200 total_duration=2.18ms'
      }
    ],
    containmentStages: [
      {
        id: 'cont-1',
        title: '1. Détection de Requête Suspecte',
        description: 'Un poste génère une requête anormale par force brute ou tente d’accéder à une route administrative non autorisée (^/admin/secrets).',
        technicalDetails: 'Traefik intercepte la requête ; Authelia constate que l’utilisateur ne possède pas le groupe juiceshop-admins ou devops requis.',
        telemetryLog: '[AUTHELIA] [ACCESS_DENIED] user=compromised_host path=/admin/secrets policy=two_factor status=UNAUTHORIZED_GROUP'
      },
      {
        id: 'cont-2',
        title: '2. Alerte Déclenchée par l’Agent Wazuh & SIEM',
        description: 'L’agent Wazuh sur le poste détecte une injection d’identifiants ou l’exécution d’un shell suspect et envoie l’alerte au SOC ELK.',
        technicalDetails: 'Sysmon détecte l’Event ID 1 (Création de processus : mimikatz / powershell -enc) ; Wazuh émet une alerte MITRE ATT&CK T1003.',
        telemetryLog: '[WAZUH] [CRITICAL_ALERT] rule_id=100244 level=12 MITRE=T1003 description="Credential Dumping Pattern Detected"'
      },
      {
        id: 'cont-3',
        title: '3. Confinement Automatisé SOAR (< 5s)',
        description: 'Le moteur de réponse automatisée d’AEGIS révoque les sessions actives globalement et isole le poste suspect du réseau.',
        technicalDetails: 'Appel de l’API Keycloak pour révoquer tous les jetons ; iptables bloque le trafic de l’hôte au niveau du pare-feu ; session mise sur liste noire.',
        telemetryLog: '[SOAR] [CONTAINMENT_TRIGGER] target_user=compromised_host action=REVOKE_ALL_SESSIONS status=SUCCESS (duration=1.42s)'
      },
      {
        id: 'cont-4',
        title: '4. Escalade SOC & Rayon d’Impact Verrouillé',
        description: 'Le périmètre d’attaque est strictement confiné. Les analystes SOC 24/7 reçoivent le dossier d’incident complet pour analyse médico-légale.',
        technicalDetails: 'Ticket d’incident créé automatiquement dans le portail SOC avec généalogie des processus, IP source et empreinte mémoire.',
        telemetryLog: '[MSSP_SOC] [INCIDENT_OPENED] ticket_id=INC-8492 severity=HIGH status=CONTAINED analyst_assigned=LEVEL_2_SOC'
      }
    ]
  },
  comparison: {
    badge: 'AUDIT COMPARATIF',
    title: 'Comparatif Technique et Défendable',
    subtitle: 'Pourquoi les pare-feux périmétriques et les VPN d’entreprise traditionnels créent des angles morts critiques par rapport à la passerelle Zero-Trust AEGIS.',
    colPerimeter: 'Pare-feu Périmétrique Traditionnel',
    colVpn: 'VPN d’Entreprise (Confiance Implicite)',
    colAegis: 'Passerelle Zero-Trust AEGIS',
    perimeterVerdict: 'Filtre les ports en bordure, mais laisse le réseau interne totalement sans défense une fois franchi.',
    vpnVerdict: 'Accorde un routage étendu sur le sous-réseau ; un poste compromis peut scanner et infecter tout le réseau interne.',
    aegisVerdict: 'Évalue l’identité à chaque requête ; micro-segmente les services cibles et neutralise les menaces actives en quelques secondes.',
    verdictLabel: 'Verdict Architectural',
    ctaButton: 'Planifier une Session de Découverte',
    supported: 'Pris en charge intégralement',
    partial: 'Partiel / Statique',
    unsupported: 'Vulnérable / Non pris en charge',
    rows: [
      {
        capability: 'Vérification d’Identité par Requête',
        category: 'Authentification',
        perimeterFirewall: {
          status: 'unsupported',
          description: 'Basé uniquement sur la localisation réseau (IP/Port). Considère tout trafic interne comme implicitement légitime.'
        },
        vpnTrust: {
          status: 'partial',
          description: 'Authentification unique à l’entrée du tunnel. Une fois connecté, l’utilisateur est approuvé sur l’ensemble des sous-réseaux routés.'
        },
        aegisGateway: {
          status: 'supported',
          description: 'Contrôle à chaque requête HTTP/TCP. Évalue le jeton OIDC cryptographique, le MFA TOTP/FIDO2 et les rôles dynamiques à chaque appel de ressource.'
        }
      },
      {
        capability: 'Prévention des Mouvements Latéraux & Isolation',
        category: 'Architecture Réseau',
        perimeterFirewall: {
          status: 'unsupported',
          description: 'Aucune barrière interne une fois le périmètre franchi (hameçonnage, poste prestataire compromis, vulnérabilité non corrigée).'
        },
        vpnTrust: {
          status: 'unsupported',
          description: 'Fournit une table de routage sous-réseau large. Un poste compromis peut scanner les ports et se déplacer sur le réseau d’entreprise.'
        },
        aegisGateway: {
          status: 'supported',
          description: 'Micro-segmentation stricte. Les bases de données et services internes ne possèdent aucune IP routable ; isolation appliquée au niveau du noyau.'
        }
      },
      {
        capability: 'Évaluation Continue des Sessions & Télémétrie',
        category: 'Gouvernance des Sessions',
        perimeterFirewall: {
          status: 'unsupported',
          description: 'Inspection statique des paquets avec état. Aucune visibilité sur l’identité de l’utilisateur, l’état de session ou les dérives comportementales post-connexion.'
        },
        vpnTrust: {
          status: 'unsupported',
          description: 'Session tunnel de longue durée. Un cookie ou identifiant dérobé reste actif jusqu’à la déconnexion manuelle ou l’expiration du délai.'
        },
        aegisGateway: {
          status: 'supported',
          description: 'Télémétrie comportementale continue via Wazuh & Sysmon. Vérifie en permanence : « Cette session se comporte-t-elle toujours comme prévu à cet instant ? »'
        }
      },
      {
        capability: 'Confinement Automatisé des Menaces (SOAR)',
        category: 'Réponse aux Incidents',
        perimeterFirewall: {
          status: 'unsupported',
          description: 'Envoie des événements passifs vers un collecteur externe. Aucune révocation automatique de session ni mise en quarantaine de poste.'
        },
        vpnTrust: {
          status: 'unsupported',
          description: 'Nécessite l’intervention manuelle d’un administrateur réseau pour investiguer et déconnecter le client VPN après plusieurs heures ou jours.'
        },
        aegisGateway: {
          status: 'supported',
          description: 'Réponse automatique instantanée en < 5s : révocation globale de la session sur Authelia/Keycloak et mise en quarantaine du poste compromis.'
        }
      },
      {
        capability: 'Rayon d’Impact en Cas de Vol d’Identifiants',
        category: 'Résilience',
        perimeterFirewall: {
          status: 'unsupported',
          description: 'L’ensemble du réseau d’entreprise interne et du centre de données est exposé.'
        },
        vpnTrust: {
          status: 'partial',
          description: 'Tous les services inclus dans la table de routage du profil VPN sont exposés.'
        },
        aegisGateway: {
          status: 'supported',
          description: 'Strictement confiné au chemin d’accès exact autorisé par le groupe Active Directory. Les chemins sensibles exigent une re-validation MFA.'
        }
      },
      {
        capability: 'Ségrégation des Flux Clients vs Employés',
        category: 'Gestion du Trafic',
        perimeterFirewall: {
          status: 'partial',
          description: 'Redirection de ports NAT directe (80/443) vers les applications sans gouvernance d’identité unifiée.'
        },
        vpnTrust: {
          status: 'unsupported',
          description: 'Incapable de gérer le trafic public des clients — réservé strictement aux connexions tunnel des collaborateurs.'
        },
        aegisGateway: {
          status: 'supported',
          description: 'Gouvernance à double flux : les routes publiques utilisent limitation de débit et WAF ; les routes internes appliquent MFA stricte et SSO.'
        }
      },
      {
        capability: 'Modèle de Déploiement et d’Intégration',
        category: 'Mise en Œuvre',
        perimeterFirewall: {
          status: 'partial',
          description: 'Nécessite le remplacement d’équipements matériels avec des modifications complexes et risquées des tables de routage.'
        },
        vpnTrust: {
          status: 'partial',
          description: 'Exige l’installation d’un logiciel client lourd sur chaque poste et la maintenance de concentrateurs de tunnels.'
        },
        aegisGateway: {
          status: 'supported',
          description: 'Aucun remplacement matériel brutal. Se positionne devant vos applications existantes via DNS et proxy inverse ; migration progressive application par application.'
        }
      }
    ]
  },
  zeroTrustModel: {
    badge: 'CONFORMITÉ NIST SP 800-207',
    title: 'Les 5 Principes Fondamentaux de l’Architecture Zero Trust',
    subtitle: 'Comment AEGIS traduit les standards cryptographiques et architecturaux les plus rigoureux en sécurité opérationnelle quotidienne.',
    nistRef: 'Aligné sur le standard NIST SP 800-207 Zero Trust Architecture et le modèle CISA Zero Trust Maturity Model 2.0',
    principles: [
      {
        title: '1. Ne Jamais Faire Confiance, Toujours Vérifier',
        rule: 'Aucune confiance implicite basée sur l’emplacement réseau',
        description: 'La présence physique dans les locaux ou une connexion via VPN ne confère aucune confiance préalable. Chaque transaction est rigoureusement évaluée.',
        howAegisEnforces: 'Le proxy inverse Traefik intercepte chaque appel HTTP/TCP et interroge Authelia et Keycloak avant d’autoriser le passage des paquets.'
      },
      {
        title: '2. Principe du Moindre Privilège',
        rule: 'Accès accordé uniquement aux ressources strictement nécessaires',
        description: 'Les utilisateurs et comptes de service n’ont accès qu’au chemin applicatif exact requis pour leur mission opérationnelle.',
        howAegisEnforces: 'Les groupes Active Directory correspondent à des règles de contrôle d’accès fines (^/admin.* vs /user) ; les points sensibles imposent une MFA renforcée.'
      },
      {
        title: '3. Supposer la Compromission (Assume Breach)',
        rule: 'Concevoir l’architecture pour contenir activement les intrusions',
        description: 'Opérer en partant du principe qu’un attaquant a déjà franchi le périmètre et contrôle une machine interne.',
        howAegisEnforces: 'Des réseaux de conteneurs micro-segmentés bloquent tout scan de port horizontal ; les bases de données n’ont pas d’adresse IP routable.'
      },
      {
        title: '4. Évaluation Continue & Télémétrie',
        rule: 'La vérification est dynamique, pas un simple formulaire matinal',
        description: 'La conformité du poste de travail et les anomalies comportementales sont surveillées en continu tout au long de la journée.',
        howAegisEnforces: 'L’EDR Wazuh et Sysmon transmettent les événements de processus au SIEM ELK ; tout comportement inhabituel déclenche une ré-authentification immédiate.'
      },
      {
        title: '5. Confinement & Réponse Automatisés',
        rule: 'Neutralisation automatique des menaces en secondes, pas en jours',
        description: 'Les menaces doivent être stoppées automatiquement par politique avant même qu’un analyste humain n’ouvre un ticket.',
        howAegisEnforces: 'Le moteur SOAR intégré révoque les jetons de session sur Keycloak/Authelia en moins de 5 secondes dès détection critique.'
      }
    ]
  },
  employeeExperience: {
    badge: 'SÉCURITÉ SANS FRICTION POUR LES ÉQUIPES',
    title: 'Matrice d’Expérience Utilisateur par Rôle',
    subtitle: 'Zero Trust ne signifie pas lourdeur pour les collaborateurs. Découvrez comment les différents métiers interagissent avec AEGIS au quotidien.',
    tabRoles: 'Sélectionner un Profil Collaborateur :',
    typicalAccessLabel: 'Ressources Autorisées (Accessibles) :',
    restrictedTargetsLabel: 'Ressources Restreintes (Bloquées à la Passerelle) :',
    governanceTitle: 'Note de Gouvernance & Gestion des Identités',
    dailyScheduleTitle: 'Journal d’Activité Quotidienne et Contrôles de Sécurité',
    frictionTitle: 'Facteur de Friction et Ressenti Utilisateur',
    roles: [
      {
        roleId: 'marketing',
        roleName: 'Spécialiste Marketing',
        department: 'Marketing & Croissance',
        morningLogin: 'Ouvre son ordinateur et accède à marketing.zerotrust.lan dans son navigateur. Aucun VPN, aucun logiciel lourd. Traefik intercepte la requête, Authelia redirige vers Keycloak. Saisie du mot de passe + validation de la notification MFA sur mobile. Session créée pour 8 heures.',
        dailyAccessPattern: 'La session reste active toute la journée. Les tentatives d’accès en dehors du groupe Marketing (ex: portail RH) affichent une page de refus claire sans demande d’identifiant. Aucune connaissance technique requise de Traefik ou Wazuh.',
        frictionPoint: 'Une seule validation MFA le matin. C’est tout.',
        typicalAccess: ['CRM Marketing (marketing.zerotrust.lan)', 'Éditeur de CMS Public', 'Tableaux de Bord Analytics', 'Messagerie et Espace Collaboratif'],
        restrictedTargets: ['Dossiers RH du Personnel (hr.zerotrust.lan)', 'Bases de Données de Production', 'Cluster Kubernetes', 'Comptabilité Générale'],
        dailyFlow: [
          {
            time: '08h30',
            action: 'Connexion SSO Matinale',
            experience: 'Ouvre marketing.zerotrust.lan dans un navigateur standard. Saisit son mot de passe et valide la notification MFA biométrique.',
            securityAction: 'Traefik intercepte, Authelia déclenche l’authentification Keycloak OIDC et émet une session cryptographique de 8h.'
          },
          {
            time: '11h15',
            action: 'Activité Quotidienne Normale',
            experience: 'Navigation fluide entre CRM, outils d’analyse et applications marketing sans aucun client VPN en arrière-plan.',
            securityAction: 'Traefik valide le cookie de session en moins de 2 ms sans redemander d’identifiants.'
          },
          {
            time: '14h40',
            action: 'Clic Involontaire vers le Portail RH',
            experience: 'Reçoit une page 403 Refus d’Accès propre avec identifiant d’audit, sans blocage du système ni message d’erreur cryptique.',
            securityAction: 'Authelia vérifie l’appartenance au groupe ; le groupe « Marketing » n’a pas de droits sur les RH. Le serveur reste inaccessible.'
          },
          {
            time: '17h30',
            action: 'Fin de Journée',
            experience: 'Ferme simplement l’onglet du navigateur. Aucune étape de déconnexion VPN manuelle requise.',
            securityAction: 'Le jeton de session de 8 heures expire naturellement ; les clés en mémoire sont purgées.'
          }
        ],
        governanceNote: 'Les équipes marketing bénéficient d’un accès web direct et fluide tout en restant parfaitement isolées des consoles d’administration et des données critiques.'
      },
      {
        roleId: 'hr',
        roleName: 'Spécialiste Ressources Humaines',
        department: 'Ressources Humaines & Opérations',
        morningLogin: 'Même parcours de connexion SSO/MFA que le marketing — même interface, même notification push.',
        dailyAccessPattern: 'L’appartenance au groupe RH correspond à une politique Authelia donnant accès aux données du personnel sur un chemin interne restreint. L’accès aux dossiers sensibles peut exiger une re-validation MFA toutes les 2 heures au lieu de 8. Expiration automatique le soir.',
        frictionPoint: 'Légèrement plus de contrôle que le marketing en raison de fenêtres de re-validation plus courtes — justifié par la sensibilité des données personnelles (RGPD).',
        typicalAccess: ['Portail RH & Dossiers Collaborateurs', 'Module de Paie (Périmètre Limité)', 'Gestionnaire d’Onboarding', 'Annuaire Interne d’Entreprise'],
        restrictedTargets: ['Données de Facturation de Production', 'Consoles Racines Serveurs', 'Dépôts de Code Source', 'Gestionnaire Portainer'],
        dailyFlow: [
          {
            time: '08h45',
            action: 'Authentification Matinale',
            experience: 'Authentification unique SSO avec mot de passe et code TOTP de l’application d’authentification.',
            securityAction: 'Keycloak vérifie le mot de passe haché en Argon2id, valide le code TOTP et génère une session restreinte au groupe RH.'
          },
          {
            time: '11h00',
            action: 'Consultation des Dossiers de Rémunération',
            experience: 'Navigation sécurisée dans les fiches de paie et les dossiers d’intégration des nouveaux collaborateurs.',
            securityAction: 'Les règles de contrôle d’accès valident les droits du groupe RH sur les routes /hr/records.*.'
          },
          {
            time: '13h30',
            action: 'Re-validation pour Données Sensibles',
            experience: 'Brève re-validation biométrique après 2 heures d’inactivité avant de modifier des données bancaires.',
            securityAction: 'La politique applique une durée de vie plus courte sur les points d’accès traitant des données personnelles hautement sensibles.'
          },
          {
            time: '17h00',
            action: 'Déconnexion Automatique',
            experience: 'La session se clôture automatiquement ; aucun jeton résiduel ne demeure sur le poste de travail.',
            securityAction: 'Les jetons cryptographiques de session sont purgés de la mémoire de la passerelle.'
          }
        ],
        governanceNote: 'Des politiques de session plus strictes protègent les données personnelles des collaborateurs sans imposer la complexité d’un tunnel VPN.'
      },
      {
        roleId: 'developer',
        roleName: 'Développeur Web',
        department: 'Ingénierie Logicielle',
        morningLogin: 'Même connexion SSO/MFA que l’ensemble des collaborateurs pour les outils généraux (email, wiki, tickets).',
        dailyAccessPattern: 'Pour accéder à la console d’administration (shop.zerotrust.lan/admin), une règle spécifique (^/admin.* -> policy: two_factor) exige une re-validation MFA instantanée même si la session générale est active. Les commandes git push utilisent des clés SSH et restent indépendantes de la passerelle.',
        frictionPoint: 'La re-validation MFA sur la console d’administration. Minime et stratégiquement placée — c’est la parade exacte contre le vol de cookies de session.',
        typicalAccess: ['Environnements de Staging', 'shop.zerotrust.lan/admin (avec re-validation)', 'Wiki Interne et Outils de Ticketing', 'Vues de Journaux Limitées (Kibana)'],
        restrictedTargets: ['Dossiers RH du Personnel', 'Rémunérations de la Direction', 'Port Direct de Base de Données (5432)', 'Accès SSH Direct à la Passerelle'],
        dailyFlow: [
          {
            time: '09h00',
            action: 'Connexion au Poste de Développement',
            experience: 'Ouvre le portail développeur interne. S’authentifie une fois via SSO + MFA.',
            securityAction: 'La passerelle vérifie l’appartenance au groupe Développeurs et le certificat du poste.'
          },
          {
            time: '11h30',
            action: 'Accès à l’Admin de l’Application (/admin)',
            experience: 'Accède à shop.zerotrust.lan/admin. Une invite MFA instantanée s’affiche avant d’entrer dans le panneau d’administration.',
            securityAction: 'La règle Authelia applique policy: two_factor sur ^/admin.*, neutralisant toute attaque par cookie dérobé.'
          },
          {
            time: '15h15',
            action: 'Tentative de Connexion Directe à la BDD',
            experience: 'Le port direct de la base de données (5432) est totalement inaccessible depuis le poste de travail.',
            securityAction: 'Aucun routage direct ; la base de données réside exclusivement sur l’interface réseau privée de la passerelle.'
          },
          {
            time: '18h00',
            action: 'Fin de Journée',
            experience: 'Aucune interface VPN résiduelle ni tunnel ouvert sur l’ordinateur portable.',
            securityAction: 'L’accès étant évalué par requête, aucun tunnel vulnérable ne reste actif.'
          }
        ],
        governanceNote: 'Les développeurs travaillent à pleine vitesse tandis que l’authentification renforcée par chemin protège les fonctions d’administration critiques.'
      },
      {
        roleId: 'devops',
        roleName: 'Opérateur DevOps / SRE',
        department: 'Opérations Plateforme & Infrastructure',
        morningLogin: 'Même connexion SSO/MFA standard.',
        dailyAccessPattern: 'Accès plus large que les développeurs classiques : Portainer (déploiement et redémarrage de conteneurs), tableaux de bord Grafana. Les accès SSH d’administration s’effectuent via un bastion sécurisé distinct.',
        frictionPoint: 'Aucun au-delà du MFA standard — mais le rayon d’impact est majeur en cas de compromission, justifiant une surveillance accrue.',
        typicalAccess: ['Portainer (portainer.zerotrust.lan)', 'Tableaux de Bord Métriques Grafana', 'Déploiements de Pré-production', 'Journaux des Conteneurs'],
        restrictedTargets: ['Dossiers RH du Personnel', 'Bases de Données Clients PII', 'Accès SSH Direct Non Audité (requiert bastion)'],
        dailyFlow: [
          {
            time: '08h15',
            action: 'Vérification d’Identité Matinale',
            experience: 'SSO standard + clé de sécurité matérielle MFA sur poste d’entreprise.',
            securityAction: 'Émission d’un jeton associé au rôle DevOps avec contrôle de la posture de sécurité du poste.'
          },
          {
            time: '10h45',
            action: 'Déploiement de Conteneurs via Portainer',
            experience: 'Accès direct à portainer.zerotrust.lan pour inspecter l’état du cluster.',
            securityAction: 'Authelia valide les privilèges du groupe devops-operators pour l’ingress Portainer.'
          },
          {
            time: '14h00',
            action: 'Surveillance des Métriques & Télémétrie',
            experience: 'Accès en temps réel aux métriques Grafana pour suivre le débit et la latence.',
            securityAction: 'L’autorisation par requête valide les droits de lecture sur les outils de monitoring.'
          },
          {
            time: '17h30',
            action: 'Expiration de Session',
            experience: 'La session d’administration privilégiée expire automatiquement.',
            securityAction: 'Plafond de durée de session strict appliqué pour les rôles à privilèges élevés.'
          }
        ],
        governanceNote: 'Les opérateurs DevOps disposent de droits de déploiement étendus, strictement cantonnés aux outils d’infrastructure dédiés.'
      },
      {
        roleId: 'it-admin',
        roleName: 'Administrateur Systèmes & Sécurité',
        department: 'Opérations IT & Sécurité des Systèmes',
        morningLogin: 'Connexion SSO/MFA standard.',
        dailyAccessPattern: 'Accès à Portainer, console Keycloak et tableaux de bord SIEM/Wazuh. Révocation des sessions compromises, ajustement des règles Traefik et analyse des alertes Suricata.',
        frictionPoint: 'MFA renforcé sur clé matérielle FIDO2 — compte hautement sensible nécessitant les politiques de session les plus rigoureuses.',
        typicalAccess: ['Console Conteneurs Portainer', 'Administration Keycloak', 'Tableaux de Bord SOC Wazuh / Kibana', 'Configuration Dynamique Traefik'],
        restrictedTargets: ['Bases de Données Clients PII (sans procédure d’urgence)', 'Modifications Hors-Bande Non Auditées'],
        dailyFlow: [
          {
            time: '08h00',
            action: 'Ouverture de Session Privilégiée',
            experience: 'Saisie du mot de passe maître + validation par clé physique FIDO2 WebAuthn.',
            securityAction: 'AEGIS vérifie l’attestation de la clé matérielle et le chiffrement du poste.'
          },
          {
            time: '10h30',
            action: 'Gestion des Droits et du Routage',
            experience: 'Met à jour les groupes dans Keycloak ; modifications effectives instantanément sur toutes les routes.',
            securityAction: 'Synchronisation immédiate de l’annuaire avec le cache de politiques Authelia.'
          },
          {
            time: '14h15',
            action: 'Exercice de Réponse aux Incidents',
            experience: 'Simule une session compromise ; clique sur un bouton pour invalider la session à l’échelle globale.',
            securityAction: 'Diffusion de la révocation à l’ensemble des nœuds de passerelle en moins d’une seconde.'
          },
          {
            time: '16h30',
            action: 'Re-validation Fréquente de Session',
            experience: 'Re-prompt toutes les 4 heures sur les tiers d’infrastructure critiques.',
            securityAction: 'Évite les sessions d’administration abandonnées sans surveillance.'
          }
        ],
        governanceNote: 'Les administrateurs gèrent les identités et le routage de manière centralisée ; les durées de vie réduites protègent le plan de contrôle de l’entreprise.'
      },
      {
        roleId: 'ceo',
        roleName: 'Président Directeur Général (CEO)',
        department: 'Direction Générale',
        morningLogin: 'Même connexion SSO/MFA que tous les collaborateurs.',
        dailyAccessPattern: 'Accès en lecture seule à un ensemble restreint de tableaux de bord financiers et de synthèses exécutives de sécurité (vert / orange / rouge). Aucun accès aux consoles techniques ou consoles de conteneurs.',
        frictionPoint: 'Minimal — en Zero Trust, les privilèges correspondent à la fonction réelle, pas au titre hiérarchique. L’accès aux panneaux sensibles nécessite une justification explicite.',
        typicalAccess: ['Tableaux de Bord Financiers & BI', 'Portail du Conseil d’Administration', 'Synthèse Globale de Sécurité (Vert/Jaune/Rouge)', 'Messagerie et Documents Stratégiques'],
        restrictedTargets: ['Infrastructure de Production Brute', 'Gestionnaire Portainer', 'Console SOC Brute Kibana', 'Dépôts de Code des Développeurs'],
        dailyFlow: [
          {
            time: '07h45',
            action: 'Connexion Matinale',
            experience: 'Ouvre le portail exécutif sur ordinateur portable ou iPad. Valide avec FaceID/TouchID.',
            securityAction: 'La passerelle vérifie le jeton du rôle exécutif et la conformité de l’appareil d’entreprise.'
          },
          {
            time: '11h00',
            action: 'Consultation des Données Financières',
            experience: 'Chargement instantané des rapports financiers chiffrés depuis le bureau ou en déplacement.',
            securityAction: 'Tunnel chiffré TLS 1.3 terminé en bordure Traefik ; serveurs d’origine protégés.'
          },
          {
            time: '14h30',
            action: 'Vue de la Posture de Sécurité',
            experience: 'Visualise l’état de santé global de la cybersécurité (indicateur vert/conforme) sans bruit technique.',
            securityAction: 'Vue exécutive synthétisée alimentée par la télémétrie du MSSP SOC.'
          },
          {
            time: '18h00',
            action: 'Déconnexion Transparente',
            experience: 'Aucun bouton de déconnexion VPN à manipuler. La session se termine proprement.',
            securityAction: 'Aucun accès réseau persistant ne demeure ouvert sur le terminal de direction.'
          }
        ],
        governanceNote: 'En Zero Trust, les privilèges dépendent de la mission opérationnelle. Supprimer les droits d’administration permanents de la direction neutralise les attaques de spear-phishing ciblées.'
      }
    ]
  },
  onboarding: {
    badge: 'PARCOURS D’INTÉGRATION',
    title: 'Le Premier Jour de Karim en Architecture Zero-Trust',
    subtitle: 'Suivez Karim, nouvel ingénieur logiciel, lors de son premier lundi matin pour découvrir comment AEGIS automatise le provisionnement des identités, l’enrôlement TOTP et la révocation des accès sans aucune friction VPN.',
    employeeName: 'Karim S.',
    employeeTitle: 'Ingénieur Logiciel Senior (Nouvel Arrivant)',
    stepCountLabel: 'Parcours du Cycle de Vie en 8 Étapes',
    actionLabel: 'Action Réalisée par Karim :',
    securityMechanismLabel: 'Mécanisme Sous-Jacent de la Passerelle et Cryptographie :',
    keyTakeawayLabel: 'Principe d’Ingénierie Défendable :',
    steps: [
      {
        step: 1,
        title: 'Création du Compte Avant Arrivée',
        subtitle: 'Provisionnement dans Active Directory / Keycloak',
        action: 'L’équipe IT/RH crée le compte de Karim directement dans l’Active Directory (ou Keycloak) et l’ajoute au groupe « Développeurs ».',
        securityMechanism: 'Cette simple appartenance au groupe définit automatiquement tout ce qu’il peut et ne peut pas faire dès le premier jour. Aucune modification de règle de pare-feu requise.',
        keyLesson: 'Zéro gestion manuelle des permissions serveur par serveur.'
      },
      {
        step: 2,
        title: 'Activation Sécurisée',
        subtitle: 'Envoi via Relais SMTP Renforcé',
        action: 'Un relais SMTP sécurisé et conforme (SPF, DKIM, TLS) envoie à Karim un email contenant un lien d’activation à usage unique valable 48h.',
        securityMechanism: 'Mailpit est strictement réservé au développement et interdit en production pour ne pas exposer les liens d’activation. La production utilise un relais durci.',
        keyLesson: 'Les liens d’activation temporaires à usage unique préviennent toute interception.'
      },
      {
        step: 3,
        title: 'Création du Mot de Passe',
        subtitle: 'Hachage Cryptographique Robuste Argon2id',
        action: 'Karim clique sur le lien d’activation et accède à Keycloak pour définir son mot de passe.',
        securityMechanism: 'Le mot de passe est haché côté serveur avec Argon2id (64 Mo de mémoire, 3 itérations) — imperceptible pour lui, mais crucial pour résister aux attaques par force brute. Le lien d’activation est instantanément invalidé.',
        keyLesson: 'Le hachage moderne résistant à la mémoire protège les identifiants contre les fuites.'
      },
      {
        step: 4,
        title: 'Enrôlement MFA In-Browser',
        subtitle: 'Code QR TOTP à Affichage Unique',
        action: 'Immédiatement après le mot de passe dans la même session, Keycloak affiche un QR code TOTP à l’écran une seule fois. Il le scanne avec son application d’authentification.',
        securityMechanism: 'Le secret MFA ne transite jamais par email, n’apparaît dans aucun log et reste confiné au navigateur de l’utilisateur lors de son inscription.',
        keyLesson: 'Les secrets MFA ne sont jamais transmis sur des canaux non sécurisés.'
      },
      {
        step: 5,
        title: 'Première Connexion Réussie',
        subtitle: 'Pipeline Traefik → Authelia → Keycloak',
        action: 'Karim accède à dev.zerotrust.lan. Le flux Traefik → Authelia → Keycloak s’exécute : saisie du mot de passe puis du code TOTP. Accès accordé.',
        securityMechanism: 'Traefik intercepte la requête, Authelia valide la session MFA, Keycloak confirme les droits et émet le jeton de session sécurisé.',
        keyLesson: 'Aucune installation de client VPN n’est nécessaire pour intégrer un collaborateur.'
      },
      {
        step: 6,
        title: 'Test des Limites d’Accès',
        subtitle: 'Erreur 403 Propre & Zéro Fuite d’Informations',
        action: 'Par curiosité, Karim tente d’accéder à la console d’administration : shop.zerotrust.lan/admin. L’accès lui est poliment refusé.',
        securityMechanism: 'Refus net 403 sans trace de pile d’erreur ni indice sur les services masqués. L’architecture démontre que l’accès s’obtient par ressource et non par simple connexion.',
        keyLesson: 'Zéro fuite d’informations sur les requêtes non autorisées.'
      },
      {
        step: 7,
        title: 'Élévation de Privilèges par Changement de Rôle',
        subtitle: 'Modification Instantanée dans l’Annuaire (Sans Redéploiement)',
        action: 'Une fois les droits de déploiement en production approuvés par son manager, l’IT ajoute Karim au groupe juiceshop-admins dans l’annuaire.',
        securityMechanism: 'Aucune modification de configuration de la passerelle, aucun redéploiement. À sa prochaine requête, Authelia vérifie ses nouveaux groupes et autorise l’accès.',
        keyLesson: 'Les changements de droits ne nécessitent aucun redémarrage d’infrastructure.'
      },
      {
        step: 8,
        title: 'Départ du Collaborateur (Offboarding)',
        subtitle: 'Une Seule Action Clôture Tous les Accès Simultanément',
        action: 'Si Karim quitte l’entreprise, la désactivation de son compte Active Directory coupe instantanément tous ses accès à l’ensemble des outils.',
        securityMechanism: 'Messagerie, outils de développement, consoles d’administration et serveurs de test deviennent immédiatement inaccessibles car il n’existe aucun système d’identité secondaire.',
        keyLesson: 'La déconnexion globale instantanée élimine les comptes orphelins.'
      }
    ]
  },
  serviceTiering: {
    badge: 'PALIERS DE SERVICE MSSP SOC',
    title: 'Opérations de Sécurité Infogérées & Réponse aux Incidents',
    subtitle: 'Choisissez le niveau de surveillance SOC 24/7, de confinement automatisé et de renseignement sur les menaces adapté à votre profil de risque.',
    slaTitle: 'Engagements de SLA & Délais de Réponse',
    slaSubtitle: 'Délais de confinement garantis et adossés à des accords de niveau de service contractuels.',
    tiers: [
      {
        name: 'Passerelle Standard',
        tagline: 'Cœur Zero-Trust Auto-Géré',
        coverage: 'Support Heures Ouvrées (8x5)',
        responseTime: 'Escalade sous 4 Heures',
        idealFor: 'Entreprises de taille intermédiaire disposant d’ingénieurs IT internes pour gérer le quotidien.',
        features: [
          'Passerelle d’Accès Complète AEGIS (Traefik v3)',
          'Gestion des Identités Centralisée Authelia + Keycloak & MFA',
          'Listes de Contrôle d’Accès (ACL) par Chemin d’URL',
          'Intégration du Pare-feu Applicatif Coraza WAF (OWASP CRS)',
          'Flux de Renseignement sur les Menaces Communautaires',
          'Rapports Hebdomadaires Automatisés sur la Santé de la Sécurité'
        ]
      },
      {
        name: 'Palier SOC Avancé',
        tagline: 'Surveillance Continue MSSP',
        coverage: 'Surveillance SOC Active 24/7/365',
        responseTime: 'Triage & Réponse sous 15 Minutes',
        idealFor: 'Entreprises en croissance ayant besoin d’analystes SOC 24/7 sans embaucher une équipe interne complète.',
        features: [
          'Toutes les fonctionnalités de la Passerelle Standard',
          'Triage des Alertes par des Analystes Humains SOC 24/7',
          'Ingestion de la Télémétrie EDR Wazuh & Sysmon dans ELK',
          'Révocation Automatisée de Session SOAR (< 10s)',
          'Corrélation avec les Flux de Menaces MISP Commerciaux et Open-Source',
          'Tableaux de Bord Exécutifs Dédoublonnés pour l’IT et la Direction',
          'Chasse aux Menaces Mensuelle & Revues de Posture de Sécurité'
        ],
        highlight: true
      },
      {
        name: 'Défense Mission-Critique',
        tagline: 'Confinement Actif & Ingénierie Dédiée',
        coverage: 'Équipe SOC Dédiée Falcon 24/7/365',
        responseTime: 'SLA de Confinement Garanti sous 5 Minutes',
        idealFor: 'Environnements financiers, santé et entreprises hautement régulées avec impératif de résilience.',
        features: [
          'Toutes les fonctionnalités du Palier SOC Avancé',
          'Isolement Réseau et Révocation de Session Automatisés en < 5s',
          'Expert Référent Dédié en Renseignement sur les Menaces',
          'Ingénierie de Règles WAF Coraza Personnalisées par Microservice',
          'Exercices Périodiques d’Émulation d’Attaque et Red Teaming',
          'Pont Direct SOC Slack/Teams avec Responsable d’Astreinte',
          'Rapports Trimestriels d’Attestation de Conformité NIST SP 800-207'
        ]
      }
    ]
  },
  socArchitecture: {
    badge: 'ARCHITECTURE OPÉRATIONNELLE & SOC',
    title: 'Conçue pour des Résultats Réels, Pas Seulement le Temps de Fonctionnement',
    subtitle: 'Une vue transparente sur notre pipeline de détection en 3 couches, notre doctrine de confinement maîtrisé et les contrôles Zero-Trust internes protégeant le SOC lui-même.',
    outcomes: {
      title: 'Conçu pour des Résultats Concrets, Pas Seulement la Disponibilité',
      lead: 'Ce que nos clients achètent réellement n’est pas un empilement d’outils logiciels (les moteurs de détection, de corrélation et les flux de cyber-veille sont largement accessibles). Vous achetez moins de fausses alertes, une présence humaine vigilante lorsque vos équipes sont absentes, et des délais d’intervention définis contractuellement plutôt qu’une promesse vague.',
      points: [
        {
          title: 'Ratio Signal-sur-Bruit Drastique',
          description: 'Nous ne mesurons pas notre valeur au volume brut d’alertes collectées, mais au bruit éliminé avant qu’il n’atteigne les écrans de vos équipes.'
        },
        {
          title: 'Vigilance Humaine Continue',
          description: 'De vrais analystes seniors surveillent la télémétrie 24/7/365, garantissant qu’un incident survenant un jour férié à 3h du matin est traité avec la même rigueur qu’en plein jour.'
        },
        {
          title: 'Engagements de SLA Contractuels',
          description: 'Des délais de qualification et de confinement opposables et inscrits au contrat, remplaçant les discours marketing par une responsabilité opérationnelle réelle.'
        }
      ],
      chart: {
        title: 'Performance Empirique du SOC & Tendances de Résolution',
        subtitle: 'Indicateurs réels comparant les délais de qualification et de confinement AEGIS aux plafonds SLA contractuels et aux moyennes du secteur.',
        tabResponseTime: 'Délais de Détection & Confinement (Minutes)',
        tabResolutionTrends: 'Résolution des Incidents & Suppression du Bruit',
        tabThreatDensity: 'Densité des Menaces en Temps Réel (Segments Réseau)',
        layoutStacked: 'Vue Empilée (Optimisée Mobile)',
        layoutSplit: 'Tableau de Bord Divisé',
        legendTooltipHint: 'Survolez ou touchez une métrique pour afficher les définitions détaillées & standards SLA',
        legendModalTitle: 'Définition de la Métrique & Standard Opérationnel SOC',
        kpis: [
          { label: 'MTTA (Prise en charge)', value: '< 45s', subtext: 'SLA Contractuel : 5 min', highlight: true },
          { label: 'MTTD (Temps de Détection)', value: '2,4 min', subtext: 'Moyenne Secteur : 45 min' },
          { label: 'MTTC (Temps de Confinement)', value: '4,1 min', subtext: 'SLA Contractuel : 15 min', highlight: true },
          { label: 'Filtrage des Faux Positifs', value: '99,4%', subtext: 'Bruit éliminé avant l’analyste' }
        ],
        responseTimeLabels: {
          mttd: 'MTTD AEGIS (Détection)',
          mttc: 'MTTC AEGIS (Confinement)',
          slaTarget: 'Plafond SLA Contractuel',
          industryAvg: 'Moyenne Standard de l’Industrie',
          unit: 'Minutes'
        },
        resolutionTrendsLabels: {
          rawAlerts: 'Télémétrie brute collectée (x100)',
          noiseFiltered: 'Bruit supprimé par les règles (x100)',
          realIncidents: 'Incidents vérifiés traités',
          resolvedSLA: 'Incidents confinés dans le SLA',
          unit: 'Événements'
        },
        threatDensityLabels: {
          title: 'Matrice de Densité des Menaces par Segment Réseau',
          subtitle: 'Télémétrie en temps réel illustrant la densité d’anomalies, les déclenchements de leurres (honeypots) et le taux de confinement automatisé par segment sur 24 heures.',
          legendNominal: 'Nominal (0-20%)',
          legendElevated: 'Élevé (21-50%)',
          legendHigh: 'Critique Modéré (51-80%)',
          legendCritical: 'Vecteur d’Attaque Critique (81-100%)',
          filterAll: 'Tous les Segments',
          densityMetric: 'Indice de Densité de Menace',
          eventsCount: 'Événements de Télémétrie / Heure',
          blockedCount: 'Blocages Automatiques en Bordure',
          inspectedSegment: 'Télémétrie Détaillée du Segment',
          statusOptimal: 'Optimal / Aucune Menace Active',
          statusActiveMitigation: 'Atténuation Active en Cours',
          timeWindows: ['00h00 - 04h00', '04h00 - 08h00', '08h00 - 12h00', '12h00 - 16h00', '16h00 - 20h00', '20h00 - 24h00'],
          segments: [
            { id: 'edge', name: 'Bordure Ingress & DMZ', desc: 'Reverse proxy Traefik, limitation de débit WAF et filtrage GeoIP', agents: '12 Nœuds Edge', containment: '100% Automatique (< 2s)' },
            { id: 'iam', name: 'Identité & Accès (IAM)', desc: 'Keycloak OIDC, 2FA Authelia et authentification matérielle WebAuthn', agents: '8 Clusters Auth', containment: '99,8% Révocation Immédiate' },
            { id: 'k8s', name: 'Workloads Kubernetes', desc: 'Pods de microservices, contrôleurs d’ingress et maillage de services', agents: '64 Sondes Pods', containment: 'Contrôlé + Isolation Automatique' },
            { id: 'db', name: 'Bases de Données & Secrets', desc: 'Clusters PostgreSQL, coffre-fort Vault et stockage d’audit froid', agents: '16 Garde-fous DB', containment: 'Validation Humaine Requise' },
            { id: 'endpoints', name: 'Terminaux Collaborateurs & VPN', desc: 'Postes clients Zero Trust LAN, agents EDR Wazuh et Sysmon', agents: '280+ Terminaux', containment: 'Quarantaine Réseau Immédiate' },
            { id: 'cicd', name: 'Chaîne CI/CD & DevOps', desc: 'Exécuteurs de build, registres de conteneurs et workers éphémères', agents: '24 Runners', containment: 'Destruction Automatisée' }
          ]
        },
        months: ['Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar']
      }
    },
    pipeline: {
      title: 'Trois Couches, Une Seule Mission Chacune',
      subtitle: 'Un pipeline de détection et de réponse strictement séquentiel, conçu pour éliminer les faux positifs et garantir une validation rigoureuse des preuves.',
      layers: [
        {
          stepNumber: '01',
          name: 'Ingestion & Preuves Forensiques',
          role: 'Registre Durable, Immuable et Horodaté',
          description: 'Chaque événement arrive ici en premier, indexé et horodaté — le registre durable, inaltéré.',
          engineeringFocusLabel: 'Mission Première :',
          engineeringFocus: 'Intégrité forensique absolue sur les logs Sysmon, Wazuh, Traefik et les événements d’authentification, sans aucune perte de trame.'
        },
        {
          stepNumber: '02',
          name: 'Détection & Corrélation',
          role: 'Transformation des Données Brutes en Décisions',
          description: 'Les événements bruts deviennent des décisions. C’est ici que se concentre l’effort d’ingénierie, car la qualité de détection EST le produit — une règle bruyante qui se déclenche sur une activité inoffensive est pire que l’absence de règle, car elle apprend aux analystes à ignorer le tableau de bord.',
          engineeringFocusLabel: 'Priorité d’Ingénierie :',
          engineeringFocus: 'Règles de corrélation comportementale à haute fidélité pour supprimer la fatigue informationnelle et éviter la désensibilisation des équipes.'
        },
        {
          stepNumber: '03',
          name: 'Renseignement & Réponse',
          role: 'Enrichissement Contextuel & Action Validée',
          description: 'Enrichissement par rapport aux renseignements réels sur les menaces, puis passage à l’action — délibérément placé en dernier dans la séquence, pour que rien n’agisse avant d’avoir été à la fois détecté ET confirmé comme une menace authentique.',
          engineeringFocusLabel: 'Séquence Maîtrisée :',
          engineeringFocus: 'Validation croisée multi-sources (bases IOC, MISP) avant l’exécution de tout flux de confinement actif.'
        }
      ]
    },
    containmentStrategy: {
      badge: 'DOCTRINE DE CONFINEMENT',
      title: 'Pourquoi Nous Ne Répondons Pas Automatiquement à Tout',
      lead: 'Une réponse entièrement autonome fait forte impression en démonstration mais constitue une vulnérabilité majeure en production — un automate isolant la base de données de production d’un client sur un faux positif provoque la panne exacte qu’il était censé éviter.',
      deliberateTrustNote: 'Notre doctrine : automatiser les scénarios bien délimités et à faible risque ; soumettre à la confirmation d’un analyste humain toute action touchant les systèmes critiques en production, quitte à accepter quelques minutes de délai de réponse. Il s’agit d’un choix délibéré de confiance, non d’une contrainte technique.',
      cards: [
        {
          type: 'automated',
          tag: 'Exécution Autonome en < 5s',
          title: 'Confinement Automatisé à Faible Risque',
          description: 'Ciblé strictement sur les identifiants discrets et réversibles : révocation immédiate du jeton de session d’un utilisateur compromis sur Keycloak/Authelia, verrouillage du compte et blocage des adresses IP d’attaque en bordure Traefik.',
          rationale: 'Neutralise le vol d’identifiants sur-le-champ sans risquer de compromettre la disponibilité des services applicatifs métiers.'
        },
        {
          type: 'gated',
          tag: 'Validation par Analyste Humain',
          title: 'Confinement Contrôlé des Systèmes Critiques',
          description: 'Toute intervention affectant des bases de données de production, l’isolement complet de serveurs physiques, des hyperviseurs ou des applications stratégiques requiert la vérification et l’approbation d’un analyste.',
          rationale: 'Garantit qu’une métrique atypique ou un comportement anormal ne provoque pas d’interruption de service auto-infligée.'
        }
      ]
    },
    predictiveRisk: {
      badge: 'MODÉLISATION PRÉDICTIVE DES MENACES',
      title: 'Interception Précoce Proactive vs. Réaction d’Urgence',
      subtitle: 'Simulez l’escalade de micro-anomalies initiales vers une compromission critique, et visualisez comment la corrélation prédictive AEGIS neutralise l’attaque avant tout mouvement latéral.',
      scenarioSelectLabel: 'Scénario d’Escalade de Menace :',
      scenarios: [
        {
          id: 'credential-lateral',
          name: 'Vol d’Identifiants & Mouvement Latéral',
          vector: 'Accès VPN Compromis -> Kerberoasting -> Admin de Domaine',
          target: 'Active Directory & Stockage Partagé d’Entreprise',
          proactiveContainmentTime: '3,4 min (Avant Pivot Latéral)',
          reactiveBreachTime: '72 min (Prise de Contrôle Totale)',
          blastRadiusReduction: '97,5% de Réduction du Périmètre Touché',
          stages: [
            {
              phase: '1. Reconnaissance',
              timeLabel: 'T + 00m',
              unmitigatedRisk: 12,
              proactiveRisk: 8,
              description: 'Authentification inhabituelle hors horaires avec empreinte ASN divergente.',
              proactiveAction: 'Anomalie marquée ; vérification de posture par défi WebAuthn matériel.'
            },
            {
              phase: '2. Accès Initial',
              timeLabel: 'T + 05m',
              unmitigatedRisk: 34,
              proactiveRisk: 10,
              description: 'Balayage de ports internes ciblant les services d’authentification Kerberos/LDAP.',
              proactiveAction: 'Détection comportementale déclenchée ; déploiement de leurres (honeypots).'
            },
            {
              phase: '3. Mouvement Latéral',
              timeLabel: 'T + 18m',
              unmitigatedRisk: 68,
              proactiveRisk: 4,
              description: 'Requêtes de tickets TGS avec chiffrement faible RC4.',
              proactiveAction: 'Révocation de session sous 5s ; isolement du point d’entrée réseau.'
            },
            {
              phase: '4. Compromission de Domaine',
              timeLabel: 'T + 42m',
              unmitigatedRisk: 92,
              proactiveRisk: 0,
              description: 'Pass-the-Hash vers le contrôleur de domaine ; suppression des sauvegardes VSS.',
              proactiveAction: 'Menace neutralisée avant tout accès au contrôleur de domaine ; aucune élévation de privilège.'
            },
            {
              phase: '5. Exfiltration de Données',
              timeLabel: 'T + 72m',
              unmitigatedRisk: 100,
              proactiveRisk: 0,
              description: 'Déploiement du rançongiciel et fuite des données confidentielles.',
              proactiveAction: 'Rapport d’investigation généré ; plan de remédiation définitive transmis.'
            }
          ]
        },
        {
          id: 'ransomware-staging',
          name: 'Préparation de Rançongiciel & Vivre sur le Terrain (LOLBAS)',
          vector: 'Payload de Phishing -> PowerShell LOLBAS -> Purge Shadow Copies',
          target: 'Clusters de Bases de Données & Serveurs de Fichiers',
          proactiveContainmentTime: '4,1 min (Bloqué au Stage)',
          reactiveBreachTime: '55 min (Données Chiffrées)',
          blastRadiusReduction: '99,1% de Réduction du Périmètre Touché',
          stages: [
            {
              phase: '1. Exécution',
              timeLabel: 'T + 00m',
              unmitigatedRisk: 18,
              proactiveRisk: 12,
              description: 'Exécution PowerShell obfusquée depuis un répertoire temporaire.',
              proactiveAction: 'La journalisation Sysmon identifie l’appel API suspect en mémoire.'
            },
            {
              phase: '2. Persistance',
              timeLabel: 'T + 08m',
              unmitigatedRisk: 42,
              proactiveRisk: 9,
              description: 'Création d’une tâche planifiée et modification des clés de registre.',
              proactiveAction: 'L’agent gèle l’arborescence du processus ; extraction de la mémoire forensique.'
            },
            {
              phase: '3. Évasion de Défense',
              timeLabel: 'T + 22m',
              unmitigatedRisk: 75,
              proactiveRisk: 2,
              description: 'Tentative de coupure de l’agent de sécurité et suppression des clichés instantanés.',
              proactiveAction: 'Microsegmentation active ; quarantaine immédiate de la machine du sous-réseau.'
            },
            {
              phase: '4. Chiffrement de Masse',
              timeLabel: 'T + 40m',
              unmitigatedRisk: 95,
              proactiveRisk: 0,
              description: 'Chiffrement multi-threadé des disques locaux et répertoires partagés.',
              proactiveAction: 'Zéro fichier chiffré ; communication avec le serveur C2 interrompue.'
            },
            {
              phase: '5. Demande de Rançon',
              timeLabel: 'T + 55m',
              unmitigatedRisk: 100,
              proactiveRisk: 0,
              description: 'Affichage de la note d’extorsion ; canal secondaire de fuite activé.',
              proactiveAction: 'Attaque anéantie ; intégrité et continuité d’activité préservées à 100%.'
            }
          ]
        },
        {
          id: 'supply-chain-container',
          name: 'Chaîne d’Approvisionnement CI/CD & Évasion de Conteneur',
          vector: 'Dépendance NPM Malveillante -> Abus du Jeton de Service K8s',
          target: 'Cluster Cloud de Production & Coffre-fort de Secrets',
          proactiveContainmentTime: '2,8 min (Avant Pivot Kubelet)',
          reactiveBreachTime: '38 min (Coffre de Secrets Vidé)',
          blastRadiusReduction: '98,8% de Réduction du Périmètre Touché',
          stages: [
            {
              phase: '1. Ingestion',
              timeLabel: 'T + 00m',
              unmitigatedRisk: 15,
              proactiveRisk: 10,
              description: 'Balise sortante HTTP depuis un worker CI vers une IP inhabituelle.',
              proactiveAction: 'Le pare-feu Traefik bloque le trafic sortant non autorisé.'
            },
            {
              phase: '2. Sondage de Privilèges',
              timeLabel: 'T + 04m',
              unmitigatedRisk: 48,
              proactiveRisk: 8,
              description: 'Utilisation du jeton de service pour interroger l’API Kubernetes.',
              proactiveAction: 'Violation RBAC stoppée ; pod immédiatement détruit.'
            },
            {
              phase: '3. Évasion d’Hôte',
              timeLabel: 'T + 14m',
              unmitigatedRisk: 80,
              proactiveRisk: 1,
              description: 'Exploitation d’une faille du noyau pour s’échapper du conteneur.',
              proactiveAction: 'Isolement du nœud déclenché ; politiques de runtime empêchent le pivot.'
            },
            {
              phase: '4. Fuite des Secrets',
              timeLabel: 'T + 28m',
              unmitigatedRisk: 96,
              proactiveRisk: 0,
              description: 'Extraction massive des identifiants Vault et clés d’accès cloud.',
              proactiveAction: 'Aucun secret de production exposé ; rotation automatisée des clés.'
            },
            {
              phase: '5. Prise de Contrôle Cloud',
              timeLabel: 'T + 38m',
              unmitigatedRisk: 100,
              proactiveRisk: 0,
              description: 'Compromission totale du compte cloud et déploiement de mineurs.',
              proactiveAction: 'Incident circonscrit au runner CI jetable ; production intacte.'
            }
          ]
        }
      ],
      proactiveVsReactive: {
        proactiveTitle: 'Interception Proactive AEGIS',
        proactiveDescription: 'Les signaux faibles comportementaux neutralisent les attaques dès les phases 1 à 3 avant tout ancrage latéral ou impact destructeur.',
        reactiveTitle: 'Défense Réactive Traditionnelle',
        reactiveDescription: 'Les alertes ne se déclenchent qu’au moment du sinistre (chiffrement, fuite), transformant la protection en cellule de crise coûteuse.'
      },
      metrics: [
        {
          label: 'Réduction Moyenne du Périmètre Touché',
          value: '98,4%',
          detail: 'Confiné au terminal d’origine sans propagation latérale'
        },
        {
          label: 'Délai d’Interception Pré-Escalade',
          value: '< 4,2 min',
          detail: 'Avant toute élévation de privilèges administrateur'
        },
        {
          label: 'Interruption Métier Évitée',
          value: '100%',
          detail: 'Aucun arrêt forcé de base de données ou serveur de production'
        }
      ]
    },
    socSecurity: {
      badge: 'SÉCURITÉ INTERNE DU SOC',
      title: 'La Sécurité du SOC Lui-Même',
      lead: 'Le SOC constitue lui-même une cible de choix — s’il venait à être compromis, un attaquant ne se contenterait pas de lire les alertes, il pourrait les étouffer. La discipline Zero-Trust proposée à nos clients est rigoureusement appliquée en interne.',
      pillars: [
        {
          title: 'MFA Matériel Obligatoire',
          description: 'L’ensemble des accès analystes et administrateurs est subordonné à des clés matérielles FIDO2/WebAuthn et des sessions à courte durée de vie.'
        },
        {
          title: 'Microsegmentation Réseau Interne',
          description: 'Cloisonnement étanche entre les nœuds de stockage SIEM, les pipelines d’ingestion, les moteurs de corrélation et les interfaces d’accès clients.'
        },
        {
          title: 'Journaux d’Audit Inaltérables',
          description: 'Traces d’audit en écriture unique (WORM) empêchant tout composant, même compromis, de réécrire discrètement ou d’effacer son propre historique.'
        }
      ]
    },
    honestyCallout: {
      title: 'Ce Que Nous Vous Disons en Toute Franchise',
      subtitle: 'La véritable crédibilité opérationnelle repose sur la transparence des engagements et des limites.',
      items: [
        {
          title: 'Le logiciel n’est pas le SLA',
          description: 'La présence humaine qualifiée constitue le véritable engagement de service, et cela représente un engagement opérationnel explicite, indépendant de la technologie.'
        },
        {
          title: 'Redondance et isolation sur mesure',
          description: 'La redondance et le cloisonnement des données multi-tenants sont dimensionnés pour chaque contrat selon vos exigences réglementaires et de continuité, sans promesse générique uniforme.'
        }
      ]
    }
  },
  installation: {
    badge: 'GUIDE DE DÉPLOIEMENT & D’INTÉGRATION',
    title: 'Intégration Sans Interruption en 6 Étapes Phrasées',
    subtitle: 'AEGIS s’intègre de manière incrémentale sans remplacer vos équipements pare-feu existants ni perturber vos processus métiers. Suivez notre plan directeur de la bascule DNS au confinement SOC continu.',
    stepPrefix: 'ÉTAPE',
    phaseOfLabel: 'PHASE',
    deliverablesLabel: 'LIVRABLES CLÉS & GARANTIES :',
    prevPhase: '← Phase Précédente',
    nextPhase: 'Phase Suivante →',
    configPreviewLabel: 'Aperçu de Configuration',
    validatedLabel: 'Configuration Validée en Production',
    calloutTitle: 'Besoin d’une Cartographie d’Architecture Personnalisée pour Votre Infrastructure ?',
    calloutDesc: 'Nos ingénieurs systèmes conçoivent votre plan de routage sur mesure et le calendrier d’intégration lors d’une session de cadrage.',
    calloutCta: 'Planifier un Atelier Technique',
    steps: [
      {
        number: '01',
        title: 'Routage DNS & Ingress de Bordure',
        subtitle: 'Orienter le Trafic vers le Proxy Inverse Traefik',
        description: 'Pointez vos enregistrements DNS publics et internes (ex: *.corp.votreentreprise.com) vers la passerelle AEGIS. Elle se positionne en amont de votre infrastructure actuelle.',
        details: [
          'Aucune modification requise dans le code source de vos applications existantes',
          'Terminaison TLS 1.3 haute performance en bordure de réseau',
          'Gestion automatique des certificats SSL/TLS et support des autorités de certification privées'
        ],
        codeSample: '; Cartographie des Enregistrements DNS A\n*.internal.votreentreprise.com.  300  IN  A  198.51.100.42\ngateway.votreentreprise.com.            300  IN  A  198.51.100.42',
        iconName: 'Globe'
      },
      {
        number: '02',
        title: 'Intégration du Fournisseur d’Identité',
        subtitle: 'Connecter Keycloak & Authelia à l’Active Directory',
        description: 'Raccordez votre annuaire Active Directory, LDAP, Okta, Google Workspace ou Microsoft Entra ID via les protocoles standards OIDC / SAML.',
        details: [
          'Synchronisation automatique des groupes organisationnels et des hiérarchies de rôles',
          'Application du hachage de mot de passe Argon2id et de l’authentification MFA TOTP / WebAuthn',
          'Révocation globale instantanée dès la modification du statut d’un employé dans l’IdP'
        ],
        codeSample: '# aegis-auth-config.yaml\nauth_provider:\n  type: oidc\n  issuer_url: "https://login.votreentreprise.com"\n  client_id: "aegis-edge-gateway"\n  mfa_required: true\n  enforce_totp: true',
        iconName: 'KeyRound'
      },
      {
        number: '03',
        title: 'Migration Progressive des Applications',
        subtitle: 'Intégration Service par Service (Zéro Interruption)',
        description: 'Enregistrez vos applications internes, API et consoles d’administration derrière la passerelle une par une, sans bascule brutale.',
        details: [
          'Les applications sont migrées séquentiellement selon votre propre calendrier',
          'Les services historiques non encore migrés continuent de fonctionner sur leurs sous-réseaux',
          'Les serveurs d’origine sont liés exclusivement à l’interface réseau privée d’AEGIS'
        ],
        codeSample: '# service-definition.yaml\nservices:\n  - name: internal-crm\n    host: crm.internal.votreentreprise.com\n    upstream_url: "http://10.20.1.15:8080"\n    allowed_groups: ["sales-team", "ops-managers"]',
        iconName: 'Server'
      },
      {
        number: '04',
        title: 'Définition des Politiques par Chemin d’URL',
        subtitle: 'Application de policy: two_factor sur les Routes Sensibles',
        description: 'Définissez des règles de contrôle d’accès granulaires par application et par route. Les URL sensibles (/admin) déclenchent un contrôle MFA strict indépendamment de la session générale.',
        details: [
          'Règles fines au niveau de la ressource : spécifiez les équipes autorisées sur chaque chemin (/admin vs /consultation)',
          'Neutralise le vol de session en exigeant un re-prompt MFA sur les opérations privilégiées',
          'Réponse 403 propre et immédiate en cas de tentative non autorisée avec journalisation d’audit'
        ],
        codeSample: '# authelia-configuration.yaml\naccess_control:\n  rules:\n    - domain: "shop.zerotrust.lan"\n      resources: ["^/admin.*"]\n      policy: two_factor\n      subject: "group:juiceshop-admins"',
        iconName: 'ShieldCheck'
      },
      {
        number: '05',
        title: 'Télémétrie & Capteurs Wazuh/Sysmon',
        subtitle: 'Ingestion Continue de la Télémétrie Comportementale',
        description: 'Déployez les agents légers Wazuh et Sysmon pour transmettre en temps réel les événements d’exécution de processus et les logs d’accès au SOC.',
        details: [
          'Diffusion d’événements en temps réel via des flux chiffrés gRPC / syslog',
          'Enrichissement immédiat avec les balises tactiques du référentiel MITRE ATT&CK',
          'Impact nul sur la batterie des postes et le débit des requêtes passerelle'
        ],
        codeSample: '# aegis-telemetry-agent.conf\nsiem_endpoint: "ingest.soc.aegis-security.io:443"\ntls_client_cert: "/etc/aegis/certs/sensor.crt"\nsources:\n  - gateway_access_logs\n  - endpoint_process_events\n  - dns_queries',
        iconName: 'Activity'
      },
      {
        number: '06',
        title: 'Mise en Production & Confinement SOC Automatisé',
        subtitle: 'Protection Active 24/7 & Déclencheurs SOAR',
        description: 'Basculez le routage applicatif final. Votre infrastructure bénéficie désormais d’une vérification d’identité active et de la surveillance continue du SOC.',
        details: [
          'Des analystes SOC humains 24/7 assurent le triage des alertes et éliminent les faux positifs',
          'Révocation automatique des sessions et déclencheurs d’isolement actifs dès la première minute',
          'Rapports exécutifs périodiques et tableaux de bord d’incidents transmis selon votre fréquence'
        ],
        codeSample: '[STATUS] Passerelle AEGIS : ACTIVE\n[STATUS] Sync Identités : SYNCHRONISÉE (Active Directory)\n[STATUS] Pipeline SOC : SURVEILLANCE ACTIVE (0 Escalade)\n[VERIFY] Zero-Trust Appliqué : OUI',
        iconName: 'CheckCircle2'
      }
    ]
  },
  qa: {
    badge: 'FAQ TECHNIQUE & SÉCURITÉ',
    title: 'Réponses Transparentes aux Questions d’Architecture Complexes',
    subtitle: 'Clarifications techniques, financières et opérationnelles approfondies pour RSSI, Directeurs IT et Architectes Systèmes.',
    searchPlaceholder: 'Rechercher architecture, VPN, pfSense, SSO, Okta, latence, développeurs...',
    allCategories: 'Toutes les Catégories',
    noResults: 'Aucune question d’architecture correspondante. Essayez un autre terme de recherche.',
    keyTakeawayLabel: 'Enseignement Architectural Clé :',
    expandAll: 'Tout Développer',
    collapseAll: 'Tout Réduire',
    items: [
      {
        id: 'why-not-pfsense',
        category: 'why-zerotrust',
        categoryLabel: 'Pourquoi le Zero Trust & Pare-feux',
        question: 'Pourquoi ne pouvons-nous pas simplement utiliser pfSense ou un autre pare-feu périmétrique ?',
        shortAnswer: 'pfSense et AEGIS n’ont pas la même mission : pfSense inspecte les adresses IP et ports en bordure réseau, tandis qu’AEGIS inspecte l’identité, la MFA et le rôle par requête applicative.',
        detailedAnswer: 'pfSense est un pare-feu de périmètre : il décide quel trafic atteint votre réseau sur la base des adresses IP, des ports et de règles statiques. Il ne possède aucune notion d’identité utilisateur, de rôle applicatif, ni de savoir si une personne donnée doit accéder à une ressource spécifique à un moment précis. AEGIS intervient au niveau supérieur : c’est une passerelle d’accès sensible à l’identité. Chaque requête — même émise par une personne déjà connectée au réseau interne — fait l’objet d’une vérification d’identité, d’une authentification multifacteur et d’un contrôle d’autorisation de rôle. La majorité des entreprises utilisant pfSense seul accordent une confiance aveugle à tout ce qui passe le pare-feu. C’est exactement cette hypothèse risquée que le Zero Trust supprime. En pratique, l’idéal est de combiner les deux : pfSense en bordure de réseau, et AEGIS devant vos applications et services internes.',
        keyTakeaway: 'Architecture Complémentaire : Utilisez un pare-feu périmétrique pour le filtrage réseau externe, et AEGIS devant vos applications internes pour éliminer la confiance implicite.'
      },
      {
        id: 'how-it-works-mechanics',
        category: 'mechanics',
        categoryLabel: 'Architecture & Fonctionnement',
        question: 'Comment fonctionne concrètement AEGIS sur le plan mécanique ?',
        shortAnswer: 'Chaque requête entre par Traefik (proxy inverse), interroge Authelia (session & MFA) et Keycloak (identité & rôle) avant transmission aux services d’origine isolés.',
        detailedAnswer: 'Chaque requête passe par un point d’entrée unique : Traefik, agissant comme proxy inverse. Avant qu’une requête n’atteigne une application, elle est validée auprès d’Authelia (la session est-elle valide ? La MFA a-t-elle été validée ?) et de Keycloak (qui est cette personne et quel est son rôle ?). Ce n’est qu’après validation de ces deux contrôles que la requête est transmise — et uniquement vers le service spécifique autorisé par la politique. Les bases de données, consoles d’administration et outils internes n’ont aucune adresse accessible directement depuis l’extérieur. Ils ne sont pas simplement « plus difficiles à atteindre » : ils sont réellement inaccessibles, ce cloisonnement étant garanti au niveau du noyau réseau plutôt que par un paramètre applicatif susceptible d’être mal configuré.',
        keyTakeaway: 'Isolation au Niveau du Noyau : Les services d’origine sont physiquement inatteignables, sauf via les routes vérifiées du proxy Traefik.'
      },
      {
        id: 'integration-without-rip-replace',
        category: 'mechanics',
        categoryLabel: 'Architecture & Fonctionnement',
        question: 'AEGIS peut-il s’intégrer dans notre architecture existante sans tout remplacer ?',
        shortAnswer: 'Oui. AEGIS se place en amont de votre infrastructure actuelle : le DNS pointe vers la passerelle qui relaie vers vos applications existantes. La migration se fait application par application.',
        detailedAnswer: 'Oui. AEGIS n’exige aucun démantèlement préalable. La passerelle se positionne devant ce que vous utilisez déjà : les enregistrements DNS pointent vers la passerelle, qui relaie le trafic vers vos applications existantes, tandis que l’authentification est centralisée au lieu d’être dispersée. La migration s’effectue de manière progressive, service par service, sans interruption de service pour l’entreprise.',
        keyTakeaway: 'Migration Progressive : Déploiement sans interruption de service, application par application.'
      },
      {
        id: 'production-latency-impact',
        category: 'team-impact',
        categoryLabel: 'Impact sur la Production & les Équipes',
        question: 'Cette architecture va-t-elle ralentir nos systèmes en production ?',
        shortAnswer: 'Il y a un saut d’authentification, mais avec la mise en cache de session et des intervalles raisonnables de MFA, le surcoût de latence est inférieur à 2,5 ms et imperceptible pour les utilisateurs.',
        detailedAnswer: 'Il existe un impact technique réel qu’il ne faut pas minimiser : un saut d’authentification est ajouté à chaque requête. Mis en œuvre correctement — avec mise en cache des sessions et durées de re-validation équilibrées —, ce surcoût se mesure en millisecondes et demeure invisible pour les utilisateurs. En revanche, une implémentation trop agressive inciterait les employés à contourner les règles. C’est un risque opérationnel bien identifié que notre architecture maîtrise.',
        keyTakeaway: 'Mesuré en Millisecondes : Le cache de session garantit une réactivité optimale tout en évitant les contournements d’usage.'
      },
      {
        id: 'employee-adaptation-friction',
        category: 'team-impact',
        categoryLabel: 'Impact sur la Production & les Équipes',
        question: 'Nos collaborateurs auront-ils des difficultés à s’adapter ?',
        shortAnswer: 'Après une brève configuration initiale de la MFA, l’expérience est plus fluide qu’avec un VPN : les employés bénéficient d’une authentification unique (SSO) pour l’ensemble de leurs outils.',
        detailedAnswer: 'Il y a un léger effort d’adaptation initial : l’enrôlement MFA et une interface de connexion unique au lieu d’être « simplement connecté au Wi-Fi du bureau ». Une fois cette étape franchie, l’expérience est bien plus simple que celle d’un VPN traditionnel, car les collaborateurs n’ont qu’un seul identifiant pour tous leurs outils internes et n’ont plus à gérer de client VPN instable.',
        keyTakeaway: 'Un Identifiant Unique pour Tout : Fini la frustration des VPN et la surcharge de mots de passe multiples.'
      },
      {
        id: 'gateway-failure-resilience',
        category: 'team-impact',
        categoryLabel: 'Impact sur la Production & les Équipes',
        question: 'Que se passe-t-il si la passerelle tombe en panne — toute notre activité est-elle bloquée ?',
        shortAnswer: 'Si elle est déployée en instance unique, oui. Un déploiement en production doit impérativement être équilibré (load balancing) et configuré en haute disponibilité (HA) active-active.',
        detailedAnswer: 'Oui. Déployée sur une machine unique, la passerelle constitue un point de défaillance unique (SPOF). C’est une objection légitime. En environnement de production d’entreprise, la passerelle doit impérativement être redondée sur plusieurs nœuds et zones de disponibilité derrière un répartiteur de charge haute disponibilité ; l’instance unique de démonstration est réservée aux tests.',
        keyTakeaway: 'Exigence de Haute Disponibilité : Les déploiements d’entreprise exploitent des clusters de passerelles redondants en actif-actif.'
      },
      {
        id: 'cost-vs-okta',
        category: 'team-impact',
        categoryLabel: 'Impact sur la Production & les Équipes',
        question: 'Quel est le coût réel d’AEGIS comparé à une solution SaaS comme Okta ?',
        shortAnswer: 'AEGIS est conçue à partir de composants open-source (Traefik, Authelia, Keycloak) sans redevance par utilisateur, échangeant les coûts de licence contre une maîtrise technique interne.',
        detailedAnswer: 'AEGIS repose sur des briques open-source éprouvées (Traefik, Authelia, Keycloak) : aucun coût de licence par utilisateur, mais un investissement en temps d’ingénierie pour l’exploitation. Une solution comme Okta facture un abonnement mensuel par utilisateur mais demande moins d’administration système. Le choix dépend de votre volonté de maîtriser votre infrastructure de sécurité ou de déléguer à un SaaS propriétaire récurrent.',
        keyTakeaway: 'Zéro Redevance par Siège : Une base open-source transparente sans pénalité financière liée au nombre d’utilisateurs.'
      },
      {
        id: 'developer-workflow-speed',
        category: 'team-impact',
        categoryLabel: 'Impact sur la Production & les Équipes',
        question: 'Le flux de travail de nos développeurs sera-t-il ralenti ?',
        shortAnswer: 'Uniquement pour les outils placés derrière la passerelle ; les commandes git via SSH ou jetons restent indépendantes. Nous délimitons précisément les services nécessitant une authentification renforcée.',
        detailedAnswer: 'Si des outils de développement internes sont placés derrière la passerelle, chaque accès nécessite l’authentification. Nous recommandons de définir précisément quels systèmes sensibles requièrent l’isolation Zero Trust et lesquels peuvent rester sur des réseaux plus directs. De plus, les opérations de code git utilisent des clés SSH ou des jetons personnels et restent totalement découplées de l’authentification navigateur.',
        keyTakeaway: 'Périmètre Ciblé : Sécurisez les outils à fort enjeu sans impacter les lignes de commande git et pipelines CI/CD.'
      },
      {
        id: 'beyond-beyondcorp-explained',
        category: 'beyond-beyondcorp',
        categoryLabel: 'Au-Delà de BeyondCorp',
        question: 'Vous évoquez une approche « Au-Delà de BeyondCorp » — qu’est-ce que cela signifie concrètement ?',
        shortAnswer: 'BeyondCorp supprimait la confiance de périmètre à l’entrée ; AEGIS y ajoute la télémétrie comportementale continue (Wazuh & Sysmon) et la réponse automatisée (SOAR) pour neutraliser les sessions compromises.',
        detailedAnswer: 'BeyondCorp, le modèle Zero Trust pionnier de Google, a démontré qu’aucune confiance ne devait être accordée sur la base de la localisation réseau. AEGIS franchit une étape supplémentaire en intégrant la télémétrie comportementale continue (Wazuh et Sysmon surveillent l’activité post-connexion, et pas seulement le point d’entrée) ainsi que la réponse automatisée (SOAR). Une session compromise est révoquée automatiquement en quelques secondes. BeyondCorp demandait : « Cette requête a-t-elle le droit d’entrer ? ». AEGIS demande également : « Cette session se comporte-t-elle toujours normalement en ce moment même ? »',
        keyTakeaway: 'Confinement Actif : Analyse en continu le comportement post-connexion et neutralise immédiatement les sessions suspectes.'
      },
      {
        id: 'zone-4-soc-visibility',
        category: 'soc-visibility',
        categoryLabel: 'Visibilité Zone 4 MSSP SOC',
        question: 'Dans la Zone 4 où résident ELK, Logstash et le SOC, qui accède réellement aux alertes ?',
        shortAnswer: 'Les analystes SOC AEGIS visualisent toutes les alertes brutes et la cyber-veille MISP pour assurer un triage 24/7 ; les équipes IT clientes reçoivent une vue filtrée de leurs propres incidents.',
        detailedAnswer: 'La Zone 4 étant opérée comme un SOC MSSP, l’accès est strictement hiérarchisé :\n1. Les analystes SOC AEGIS disposent d’un accès complet à Kibana, aux alertes MITRE et à la corrélation MISP pour effectuer le triage expert.\n2. L’équipe IT du client bénéficie d’un tableau de bord synthétique dédié à ses propres incidents, sans exposition aux données d’autres clients ni aux outils internes du SOC.\n3. La direction du client dispose d’une vue exécutive simplifiée (posture vert/orange/rouge).\n\nCette séparation concrétise la valeur du service MSSP : le client délègue le bruit des alertes 24/7 pour ne recevoir que les alertes qualifiées nécessitant une attention.',
        keyTakeaway: 'Valeur du SOC Infogéré : Le triage humain qualifié élimine la fatigue des alertes tout en assurant un cloisonnement étanche.'
      },
      {
        id: 'mfa-totp-vs-mailpit',
        category: 'security-deepdive',
        categoryLabel: 'Approfondissement Sécurité',
        question: 'En cas de compromission, comment la double authentification est-elle transmise en toute sécurité ?',
        shortAnswer: 'La MFA repose sur des codes TOTP générés une seule fois dans le navigateur de l’utilisateur, jamais envoyés par email. Mailpit est strictement réservé au dev et désactivé en production.',
        detailedAnswer: 'Dans cette architecture, la MFA utilise des applications d’authentification TOTP (QR code affiché à l’écran), et non des codes transmis par email. Le secret MFA est généré une seule fois dans le navigateur de l’utilisateur lors de son enrôlement. Il ne transite jamais par email ni par Mailpit. Ainsi, même si un attaquant accédait à Mailpit en lab, il n’obtiendrait aucun secret MFA.\n\nEn production, Mailpit est strictement désactivé et remplacé par un relais SMTP durci avec SPF, DKIM, DMARC et TLS, tandis que les liens d’activation ont une durée de vie limitée (24–48h).',
        keyTakeaway: 'Sécurité Dès la Conception : Les secrets TOTP ne transitent jamais par email ; Mailpit est formellement banni en production.'
      },
      {
        id: 'session-hijacking-mitigation',
        category: 'security-deepdive',
        categoryLabel: 'Approfondissement Sécurité',
        question: 'Qu’en est-il du vol de session lorsqu’un utilisateur est déjà authentifié ?',
        shortAnswer: 'Les routes sensibles (/admin) imposent la règle policy: two_factor, déclenchant un contrôle MFA immédiat même sur une session active, combiné à des cookies HttpOnly et des durées courtes.',
        detailedAnswer: 'Si un attaquant dérobe un cookie de session déjà authentifié, il hérite des droits accordés à cette session. C’est pourquoi les chemins critiques — tels que la console d’administration — sont configurés avec la directive policy: two_factor, exigeant une nouvelle validation MFA spécifique. Des durées de session courtes et les attributs de cookies Secure/HttpOnly complètent ce dispositif de protection.',
        keyTakeaway: 'MFA Délimitée par Chemin : Bloque les attaques par vol de cookies en exigeant une authentification renforcée sur les zones sensibles.'
      },
      {
        id: 'gateway-scope-boundary-ssh',
        category: 'security-deepdive',
        categoryLabel: 'Approfondissement Sécurité',
        question: 'Quels accès ne sont pas couverts par la passerelle applicative ?',
        shortAnswer: 'Authelia et Keycloak régissent les accès HTTP(S) via Traefik. L’accès SSH constitue un plan de contrôle distinct (clés SSH, serveur bastion) non géré automatiquement par le proxy web.',
        detailedAnswer: 'Authelia et Keycloak contrôlent les flux applicatifs HTTP(S) transitant par Traefik. L’accès d’administration SSH relève d’un plan de contrôle séparé (authentification par clés, bastion sécurisé) qui nécessite d’appliquer des principes Zero Trust dédiés (bastion avec MFA, certificats SSH temporaires). C’est une délimitation technique transparente qu’il convient de préciser clairement.',
        keyTakeaway: 'Frontières de Sécurité Claires : Les flux HTTP(S) sont régis par AEGIS ; l’infrastructure SSH exige un bastion et une gestion de clés dédiés.'
      }
    ]
  },
  footer: {
    description: 'AEGIS 2.1v est une passerelle d’accès applicative Zero-Trust et une solution MSSP SOC open-source conçue pour remplacer les modèles de sécurité périmétrique vulnérables par une vérification cryptographique continue et un confinement automatisé des cybermenaces.',
    architectureTitle: 'Architecture & Moteur',
    securityTitle: 'Zero Trust & SOC',
    resourcesTitle: 'Ressources & Documentation',
    legalNote: 'AEGIS est conçue pour un déploiement en production dans des environnements cloud hybrides et sur site. Repose sur des standards ouverts (Traefik, Authelia, Keycloak, Coraza, Wazuh, Sysmon).',
    builtWith: 'Conçu avec Rigueur pour la Défense des Entreprises',
    rightsReserved: 'Tous droits réservés. Le Zero Trust est une démarche architecturale continue, pas un simple produit logiciel.',
    downloadSummary: 'Télécharger la Synthèse (PDF)',
    downloadSummaryDesc: 'Imprimer ou exporter une synthèse claire pour les présentations de direction',
  },
  demoModal: {
    title: 'Demander un Audit d’Architecture AEGIS',
    subtitle: 'Échangez avec nos ingénieurs systèmes seniors spécialisés en Zero Trust pour évaluer la posture de votre réseau et concevoir votre plan de migration progressif.',
    fieldFullName: 'Nom et Prénom',
    fieldEmail: 'Email Professionnel',
    fieldCompany: 'Entreprise / Organisation',
    fieldRole: 'Fonction / Titre',
    fieldOrgSize: 'Taille de l’Organisation (Collaborateurs)',
    fieldCurrentPerimeter: 'Modèle de Sécurité Périmétrique Actuel',
    fieldMessage: 'Objectifs d’Architecture ou Questions Spécifiques',
    fieldPriority: 'Degré d’Urgence du Projet',
    optionSelectRole: 'Sélectionnez votre fonction...',
    optionRoles: [
      'RSSI / Directeur de la Sécurité des SI',
      'Directeur IT / Responsable Infrastructure',
      'Architecte Cloud / DevSecOps',
      'Responsable SOC / Réponse aux Incidents',
      'Direction Générale / DSI / CTO',
      'Ingénieur Systèmes / Développeur'
    ],
    optionSizes: [
      '1 à 50 Collaborateurs',
      '51 à 250 Collaborateurs',
      '251 à 1 000 Collaborateurs',
      'Plus de 1 000 Collaborateurs (Grand Compte)'
    ],
    optionPerimeters: [
      'Pare-feu Périmétrique Traditionnel (pfSense / Fortinet / Palo Alto)',
      'VPN d’Entreprise Historique (OpenVPN / Cisco AnyConnect)',
      'Périmètre Hybride Cloud + VPN',
      'Étude Préliminaire de Migration Zero-Trust'
    ],
    submitButton: 'Envoyer la Demande d’Audit',
    submittingButton: 'Transmission du Dossier Technique...',
    successTitle: 'Demande d’Audit Enregistrée !',
    successMessage: 'Merci pour votre démarche. Un ingénieur systèmes senior AEGIS a bien reçu les spécifications de votre infrastructure et vous contactera sous 2 heures ouvrées pour un cadrage technique personnalisé.',
    closeButton: 'Fermer la Fenêtre',
    privacyNotice: 'Les informations relatives à votre infrastructure demeurent strictement confidentielles sous engagement de non-divulgation (NDA).'
  }
};
