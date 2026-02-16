// src/data/content.ts

export const content = {
  fr: {
    hero: {
      badge: "Alternance 32 mois • Février 2026",
      title: "SOFTWARE & IOT",
      subtitle: "SOLUTIONS ENGINEER",
      desc: "Étudiant en Master d'Architecture SI.  Issu de la gestion de la biodiversité, ma reconversion est guidée par une quête de sens: **concevoir un numérique utile et durable**. Mon objectif : allier performance technique (IoT, Cloud) et responsabilité écologique.",
      cta_projects: "Voir mes réalisations",
      cta_cv: "Consulter mon CV"
    },
    timeline: [
      { 
        year: '2025 - 2028', 
        title: 'Master Architecte SI', 
        place: 'Epitech (MSc) - Nice', 
        desc: 'Spécialisation : IoT, Big Data, Cloud et IA. Pédagogie par projets intensifs (Piscine, Rushs).' 
      },
      { 
        year: '2023-2024', 
        title: 'BTSA GPN', 
        place: 'CFPPA Valabre', 
        desc: 'Gestion & Protection de la Nature. Expertise en analyse d\'écosystèmes complexes et approche systémique.' 
      },
      { 
        year: '2019', 
        title: 'BTS Tourisme', 
        place: 'Vichy', 
        desc: 'Spécialisation Éco-tourisme & Tourisme Vert. Gestion de projets et valorisation du territoire.' 
      },
      { 
        year: '2017', 
        title: 'Bac Pro S.E.N', 
        place: 'EME - Marseille', 
        desc: 'Fondations techniques : Hardware, électronique embarquée et logique binaire.' 
      }
    ],
    skills: {
      stack: ['Java (JavaFX)', 'C / C++', 'Python', 'Node.js', 'SQL / PostgreSQL', 'Angular'],
      web: ['React.js', 'Astro (Green IT)', 'Tailwind CSS', 'Leaflet (SIG)', 'TypeScript'],
      tools: ['Docker', 'GitFlow', 'UML / Design Patterns', 'Linux / Bash', 'VS Code']
    },
    projects: [
      {
        name: 'Compendium - TCG',
        type: 'Fullstack / App',
        tags: ['React', 'Node.js', 'SQL'], 
        desc: "Application de gestion de collection de cartes (TCG). Conception d'une architecture complète avec base de données relationnelle pour le tri, le filtrage et la création de decks. Interface utilisateur dynamique.",
        status: 'En développement',
        url: '#', // Lien désactivé
        color: 'border-blue-500/50'
      },
      {
        name: 'Jeu Roguelike 2D',
        type: 'Architecture Logicielle',
        tags: ['Java', 'JavaFX', 'MVC', 'Patterns'],
        desc: "Conception d'un moteur de jeu avec génération procédurale (Algo Random Walk). Implémentation stricte du pattern MVC et Strategy pour une IA modulaire.",
        status: 'Académique',
        url: '#', // Lien désactivé
        color: 'border-red-500/50'
      },
      {
        name: 'Bio-Stat Analyzer',
        type: 'Data Engineering',
        tags: ['C++', 'Algorithmique', 'Performance'],
        desc: "Moteur de traitement de données naturalistes en C++. Outil CLI capable de parser des fichiers CSV massifs et de calculer des indices de biodiversité avec haute performance.",
        status: 'En cours',
        url: '#', // Lien déjà désactivé
        color: 'border-orange-500/50'
      },
      {
        name: 'Smart BatBox',
        type: 'IoT / Embedded',
        tags: ['ESP32', 'C', 'Signal Processing'],
        desc: "Système embarqué d'écoute des chiroptères. Transformation des ultrasons en temps réel et transmission vers une application compagnon (React/Angular).",
        status: 'Roadmap 2026',
        url: '#', // Lien déjà désactivé
        color: 'border-purple-500/50'
      }
    ],
    recruiter: {
      title: "Prêt pour Février 2026",
      subtitle: "Rythme d'alternance",
      duration: "32 Mois",
      rhythm: [
        { year: "Année 1", detail: "4 sem. Entreprise / 2 sem. École" },
        { year: "Année 2", detail: "6 sem. Entreprise / 2 sem. École" },
        { year: "Année 3", detail: "9 sem. Entreprise / 1 sem. École" }
      ],
      mobility: "PACA (Mobile), 06, 83 & Télétravail",
      calendar_btn: "Calendrier d'Alternance",
      cv_btn: "Télécharger mon CV"
    }
  }
};