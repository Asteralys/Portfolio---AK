// src/data/content.ts

export const content = {
  fr: {
   hero: {
      badge: "Open to Work • Alternance 33 mois • Janv. 2026",
      title: "Apprenti Architecte",
      subtitle: "Systèmes d'Information.",
      // VERSION 3 : Curiosité technique & Passage "de l'autre côté du miroir"
      desc: "Sur le terrain, j'étais utilisateur de solutions numériques pour le suivi de la biodiversité. Aujourd'hui, ma curiosité me pousse à passer de l'autre côté : comprendre comment ces systèmes sont architecturés. Je développe mes propres outils (bases de données, cartes, API) non pas pour réinventer la roue, mais pour maîtriser techniquement le flux de la donnée, de la saisie terrain jusqu'à son exploitation.",
      cta_projects: "Voir mes prototypes",
      cta_cv: "CV (.pdf)"
    },
    timeline: [
      { year: '2025 - 2028', title: 'Master Architecte SI', place: 'Epitech Nice', desc: 'spécialisation souhaitée :  Data, Cloud, DevOps ou IoT ' },
      { year: '2023 - 2024', title: 'BTSA GPN', place: 'Gestion & Protection de la Nature', desc: 'Rigueur scientifique : Protocoles d\'inventaire et analyse de données terrain.' },
      { year: '2022', title: 'Remise à niveau Scientifique', place: 'Autodidacte', desc: 'Logique mathématique, algorithmique et biologie.' },
      { year: '2019', title: 'BTS Tourisme', place: 'Nice', desc: 'Gestion de flux et outils numériques professionnels (GDS).' },
      { year: '2017', title: 'Bac Pro S.E.N', place: 'Systèmes Numériques', desc: 'Bases hardware, électronique embarquée et logique binaire.' }
    ],
    skills: {
      stack: ['Architecture BDD', 'Node.js / Express', 'SQL / PostgreSQL', 'Python', 'API REST'],
      web: ['Astro (Green IT)', 'Leaflet (SIG Web)', 'Tailwind CSS', 'JavaScript ES6+'],
      tools: ['VS Code', 'GitFlow', 'Docker (Notions)', 'Modélisation UML/MCD']
    },
   projects: [
      { 
        name: 'Compendium-TCG', 
        type: 'Architecture Full Stack', 
        tags: ['Supabase', 'Realtime', 'Security'], 
        desc: 'Plateforme sociale pour joueurs de cartes (TCG). Architecture réactive (changement d\'état temps réel) et gestion sécurisée des données utilisateurs.',
        status: 'Prototype',
        url: 'https://github.com/Asteralys',
        //url: 'https://github.com/Asteralys/Compendium_TCG', // <-- Le lien ici
        color: 'border-cyan-500/50' 
      },
      { 
        name: 'Natura-Field', 
        type: 'Web App / Offline First', 
        tags: ['PWA', 'GeoJSON', 'SQL'], 
        desc: 'Outil métier pour naturalistes. Résout la problématique de la saisie de données en zone blanche via une synchro locale/cloud.',
        status: 'Concept',
        url: 'https://github.com/Asteralys',
        //url: 'https://github.com/Asteralys/natura-field', // <-- Le lien ici
        color: 'border-green-500/50'
      },
      { 
        name: 'Bio-API', 
        type: 'Backend / Interopérabilité', 
        tags: ['Node.js', 'Swagger', 'OpenData'], 
        desc: 'Conception d\'une API REST standardisée pour l\'échange de données faunistiques. Focus sur la documentation et la structure JSON.',
        status: 'En réflexion',
        url: 'https://github.com/Asteralys',
        //url: 'https://github.com/Asteralys', // <-- Lien général en attendant
        color: 'border-slate-600'
      }
    ],
    recruiter: {
      title: "Prêt pour Janvier 2026",
      subtitle: "Modalités du contrat d'apprentissage",
      duration: "33 Mois",
      rhythm: [
        { year: "Année 1", detail: "4 sem. Entreprise / 2 sem. École" },
        { year: "Année 2", detail: "6 sem. Entreprise / 2 sem. École" },
        { year: "Année 3", detail: "9 sem. Entreprise / 1 sem. École" }
      ],
      mobility: "06, 83 , 13 & Télétravail",
      calendar_btn: "Télécharger le Calendrier d'Alternance",
      cv_btn: "Télécharger mon CV"
    }
  }
};