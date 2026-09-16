import { ContentData } from './courses';
import {
  LESSON_1_CIVIQUE_5EME,
  LESSON_2_CIVIQUE_5EME,
  LESSON_3_CIVIQUE_5EME
} from './courses_5eme_education_civique_part1';
import {
  LESSON_4_CIVIQUE_5EME,
  LESSON_5_CIVIQUE_5EME,
  LESSON_6_CIVIQUE_5EME
} from './courses_5eme_education_civique_part2';
import {
  LESSON_7_CIVIQUE_5EME,
  LESSON_8_CIVIQUE_5EME
} from './courses_5eme_education_civique_part3';

// =========================================================================
// PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 5ÈME
// MODÈLE SÉNÉGALAIS - COURS COMPLETS AVEC INTRODUCTIONS ET CONCLUSIONS (SANS RÉSUMÉS)
// 8 Leçons réparties selon les 3 grandes parties officielles
// =========================================================================

export const COURSES_EDUCATION_CIVIQUE_5EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // PREMIÈRE PARTIE : LE CITOYEN, SES DROITS, SES DEVOIRS ET LES INSTITUTIONS
  // -----------------------------------------------------------------------
  {
    id: 'civique-5eme-lecon-1',
    title: 'LEÇON 1 : LA CITOYENNETÉ, LE CIVISME ET LA PARTICIPATION À LA VIE DÉMOCRATIQUE',
    type: 'cours',
    badge: 'Partie 1 • Citoyen, Droits & Institutions',
    description: 'La citoyenneté active au collège, le fonctionnement démocratique du Gouvernement Scolaire, les Associations Sportives et Culturelles (ASC) de quartier et les actions citoyennes « Set-Setal ».',
    lessonData: LESSON_1_CIVIQUE_5EME
  },
  {
    id: 'civique-5eme-lecon-2',
    title: 'LEÇON 2 : LES DROITS DE L\'ENFANT ET LEUR PROTECTION AU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 1 • Citoyen, Droits & Institutions',
    description: 'Cadre juridique (CIDE, CADBE), les 4 piliers fondamentaux (vie/santé, éducation obligatoire de 6 à 16 ans, protection contre l\'exploitation, état civil/identité) et le rôle de la DPDE.',
    lessonData: LESSON_2_CIVIQUE_5EME
  },
  {
    id: 'civique-5eme-lecon-3',
    title: 'LEÇON 3 : L\'ORGANISATION DE L\'ÉTAT ET LES GRANDES INSTITUTIONS DE LA RÉPUBLIQUE',
    type: 'cours',
    badge: 'Partie 1 • Citoyen, Droits & Institutions',
    description: 'Le principe constitutionnel de la séparation des pouvoirs : Pouvoir Exécutif (Président & Gouvernement), Pouvoir Législatif (Assemblée Nationale) et Pouvoir Judiciaire (Conseil Constitutionnel, Cour Suprême).',
    lessonData: LESSON_3_CIVIQUE_5EME
  },

  // -----------------------------------------------------------------------
  // DEUXIÈME PARTIE : LA VIE EN SOCIÉTÉ ET LES VALEURS DE LA RÉPUBLIQUE DU SÉNÉGAL
  // -----------------------------------------------------------------------
  {
    id: 'civique-5eme-lecon-4',
    title: 'LEÇON 4 : LA LAÏCITÉ AU SÉNÉGAL, FACTEUR DE TOLÉRANCE ET DE PAIX SOCIALE',
    type: 'cours',
    badge: 'Partie 2 • Vie en société & Valeurs',
    description: 'La « laïcité de concorde » ou de dialogue au Sénégal, la neutralité bienveillante de l\'État, la liberté de culte, le soutien républicain aux grands rassemblements religieux et l\'école publique.',
    lessonData: LESSON_4_CIVIQUE_5EME
  },
  {
    id: 'civique-5eme-lecon-5',
    title: 'LEÇON 5 : LE REFUS DES DISCRIMINATIONS, LE RESPECT DE LA DIVERSITÉ ET L\'ÉGALITÉ DE GENRE',
    type: 'cours',
    badge: 'Partie 2 • Vie en société & Valeurs',
    description: 'Interdiction constitutionnelle des discriminations, le cousinage à plaisanterie (Kal ou Kalé) comme régulateur pacifique interethnique et la Loi sur la parité absolue de 2010.',
    lessonData: LESSON_5_CIVIQUE_5EME
  },
  {
    id: 'civique-5eme-lecon-6',
    title: 'LEÇON 6 : LES SYMBOLES DE LA RÉPUBLIQUE ET LA DEVISE NATIONALE',
    type: 'cours',
    badge: 'Partie 2 • Vie en société & Valeurs',
    description: 'Les 4 repères républicains majeurs : Drapeau tricolore (vert, or, rouge avec étoile verte), Devise « Un Peuple, Un But, Une Foi », Hymne de Léopold S. Senghor et Sceau au lion et baobab.',
    lessonData: LESSON_6_CIVIQUE_5EME
  },

  // -----------------------------------------------------------------------
  // TROISIÈME PARTIE : LA PRÉVENTION DES RISQUES, LA SANTÉ ET L'ENVIRONNEMENT
  // -----------------------------------------------------------------------
  {
    id: 'civique-5eme-lecon-7',
    title: 'LEÇON 7 : LA SÉCURITÉ ROUTIÈRE ET LA PRÉVENTION DES ACCIDENTS DE LA CIRCULATION',
    type: 'cours',
    badge: 'Partie 3 • Risques, Santé & Environnement',
    description: 'Discipline de la route, règles pour piétons (trottoirs, marche à gauche, passages zébrés), port obligatoire du casque à moto, interdiction des surcharges et numéros d\'urgence (18, 17, 800 00 20 20).',
    lessonData: LESSON_7_CIVIQUE_5EME
  },
  {
    id: 'civique-5eme-lecon-8',
    title: 'LEÇON 8 : LA PROTECTION DE L\'ENVIRONNEMENT, L\'HYGIÈNE PUBLIQUE ET LE DÉVELOPPEMENT DURABLE',
    type: 'cours',
    badge: 'Partie 3 • Risques, Santé & Environnement',
    description: 'Impact de la dégradation environnementale sur la santé (paludisme, affections respiratoires), lois sur les plastiques, éco-gestes au collège et mobilisation citoyenne « Set-Setal ».',
    lessonData: LESSON_8_CIVIQUE_5EME
  },

  // -----------------------------------------------------------------------
  // RESSOURCES ET SUPPORTS PÉDAGOGIQUES OFFICIELS (PDF)
  // -----------------------------------------------------------------------
  {
    id: 'pdf-civique-5eme-complet',
    title: 'Programme officiel PDF : Éducation Civique 5ème (8 leçons avec Introductions et Conclusions)',
    type: 'ressource',
    badge: 'Document officiel imprimable',
    description: 'Fascicule complet conforme au modèle sénégalais : Citoyenneté et gouvernements scolaires, Droits de l\'enfant (CIDE/CADBE), Séparation des pouvoirs, Laïcité de concorde, Diversité & Parité, Symboles nationaux, Sécurité routière et Éco-citoyenneté.',
    link: '#'
  },
  {
    id: 'pdf-civique-5eme-evaluations',
    title: 'Recueil de devoirs & Études de cas civiques - Classe de 5ème',
    type: 'ressource',
    badge: 'Évaluations & Corrigés',
    description: 'Exercices d\'application, QCM civiques, analyses de situations concrètes (élection d\'un gouvernement scolaire, sécurité des deux-roues, journée Set-Setal) et sujets d\'examen blanc.',
    link: '#'
  }
];

export const CIVIQUE_5EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: 8 },
  { id: 'part-1', label: 'Partie 1 : Citoyen, Droits & Institutions', count: 3 },
  { id: 'part-2', label: 'Partie 2 : Vie en société & Valeurs', count: 3 },
  { id: 'part-3', label: 'Partie 3 : Risques, Santé & Environnement', count: 2 }
];
