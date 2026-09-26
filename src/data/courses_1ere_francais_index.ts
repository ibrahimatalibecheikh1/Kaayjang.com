// =========================================================================
// INDEX CENTRAL DES COURS DE FRANÇAIS CLASSE DE PREMIÈRE (SÉRIES L & S)
// Conforme au programme officiel harmonisé des IA de Dakar, Pikine-Guédiawaye & Rufisque
// 16 leçons et modules exhaustifs sans résumé, grands axes en chiffres romains et conclusions
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_FRANCAIS_1ERE,
  LESSON_2_FRANCAIS_1ERE,
  LESSON_3_FRANCAIS_1ERE,
  LESSON_4_FRANCAIS_1ERE,
  LESSON_5_FRANCAIS_1ERE
} from './courses_1ere_francais_part1';

import {
  LESSON_6_FRANCAIS_1ERE,
  LESSON_7_FRANCAIS_1ERE,
  LESSON_8_FRANCAIS_1ERE,
  LESSON_9_FRANCAIS_1ERE,
  LESSON_10_FRANCAIS_1ERE
} from './courses_1ere_francais_part2';

import {
  LESSON_11_FRANCAIS_1ERE,
  LESSON_12_FRANCAIS_1ERE,
  LESSON_13_FRANCAIS_1ERE,
  LESSON_14_FRANCAIS_1ERE,
  LESSON_15_FRANCAIS_1ERE,
  LESSON_16_FRANCAIS_1ERE
} from './courses_1ere_francais_part3';

export {
  LESSON_1_FRANCAIS_1ERE, LESSON_2_FRANCAIS_1ERE, LESSON_3_FRANCAIS_1ERE, LESSON_4_FRANCAIS_1ERE,
  LESSON_5_FRANCAIS_1ERE, LESSON_6_FRANCAIS_1ERE, LESSON_7_FRANCAIS_1ERE, LESSON_8_FRANCAIS_1ERE,
  LESSON_9_FRANCAIS_1ERE, LESSON_10_FRANCAIS_1ERE, LESSON_11_FRANCAIS_1ERE, LESSON_12_FRANCAIS_1ERE,
  LESSON_13_FRANCAIS_1ERE, LESSON_14_FRANCAIS_1ERE, LESSON_15_FRANCAIS_1ERE, LESSON_16_FRANCAIS_1ERE
};

export const FRANCAIS_1ERE_PARTS = [
  { id: 'all', label: 'Toutes les leçons (16 chapitres)', count: '16' },
  { id: 'part-1', label: 'Partie 1 • Poésie & Mouvements du XIXe (L1-L5)', count: '5' },
  { id: 'part-2', label: 'Partie 2 • Roman & Récit (L6-L10)', count: '5' },
  { id: 'part-3', label: 'Partie 3 • Méthodologie & Stylistique (L11-L16)', count: '6' }
];

export const COURSES_FRANCAIS_1ERE: ContentData[] = [
  // --- PARTIE 1 : POÉSIE ET MOUVEMENTS LITTÉRAIRES DU XIXe SIÈCLE (LEÇONS 1 À 5) ---
  {
    id: 'fr-1ere-cours-1',
    title: 'LEÇON 1 : LE PRÉROMANTISME',
    type: 'cours',
    badge: 'Partie 1 • Poésie & Mouvements',
    description: 'Genèse, émergence de la sensibilité individuelle, rupture avec le rationalisme abstrait des Lumières, le culte du Moi chez Rousseau et Chateaubriand, nature complice et mélancolie.',
    lessonData: LESSON_1_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-2',
    title: 'LEÇON 2 : LE ROMANTISME',
    type: 'cours',
    badge: 'Partie 1 • Poésie & Mouvements',
    description: 'Le « mal du siècle » et l\'Histoire, la Préface de Cromwell de Victor Hugo, la bataille d\'Hernani, le lyrisme intime, la communion avec la nature et le sacerdoce du poète prophète.',
    lessonData: LESSON_2_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-3',
    title: 'LEÇON 3 : LE LYRISME PERSONNEL ET LE LYRISME SOCIAL',
    type: 'cours',
    badge: 'Partie 1 • Poésie & Mouvements',
    description: 'De l\'épanchement du « Moi » intime au « Nous » collectif, marques textuelles de l\'intériorité, Victor Hugo et la dénonciation de l\'injustice, le souffle poétique de la Négritude (Césaire, Senghor).',
    lessonData: LESSON_3_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-4',
    title: 'LEÇON 4 : LE PARNASSE',
    type: 'cours',
    badge: 'Partie 1 • Poésie & Mouvements',
    description: 'Rejet du sentimentalisme larmoyant romantique, doctrine de « l\'art pour l\'art » de Théophile Gautier, culte de la perfection formelle, impassibilité et rigueur métrique de Leconte de Lisle et Heredia.',
    lessonData: LESSON_4_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-5',
    title: 'LEÇON 5 : LE SYMBOLISME',
    type: 'cours',
    badge: 'Partie 1 • Poésie & Mouvements',
    description: 'Refus du scientisme matérialiste, la théorie baudelairienne des correspondances, l\'art de la suggestion chez Mallarmé, « De la musique avant toute chose » chez Verlaine et le poète voyant de Rimbaud.',
    lessonData: LESSON_5_FRANCAIS_1ERE
  },

  // --- PARTIE 2 : LE ROMAN, LES COURANTS ROMANESQUES ET LA DISSERTATION (LEÇONS 6 À 10) ---
  {
    id: 'fr-1ere-cours-6',
    title: 'LEÇON 6 : LA DISSERTATION LITTÉRAIRE',
    type: 'cours',
    badge: 'Partie 2 • Roman & Récit',
    description: 'Méthodologie complète de l\'épreuve reine : analyse notionnelle du sujet, problématisation, plans dialectique et thématique, rédaction de l\'introduction, structure A.E.I. et conclusion.',
    lessonData: LESSON_6_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-7',
    title: 'LEÇON 7 : LE ROMAN ROMANTIQUE',
    type: 'cours',
    badge: 'Partie 2 • Roman & Récit',
    description: 'Épopée des passions et de l\'Histoire, figure singulière du héros romantique révolté, résurrection de la couleur locale (Notre-Dame de Paris) et engagement social humanitaire (Les Misérables).',
    lessonData: LESSON_7_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-8',
    title: 'LEÇON 8 : LE RÉALISME',
    type: 'cours',
    badge: 'Partie 2 • Roman & Récit',
    description: 'Mimésis et miroir stendhalien, l\'effet de réel et la description indicielle sociologique, La Comédie Humaine de Balzac, Madame Bovary de Flaubert et la critique impitoyable de la bourgeoisie.',
    lessonData: LESSON_8_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-9',
    title: 'LEÇON 9 : LE NATURALISME',
    type: 'cours',
    badge: 'Partie 2 • Roman & Récit',
    description: 'Émile Zola et le roman expérimental, la théorie des trois déterminismes (hérédité, milieu, moment), la fresque des Rougon-Macquart, le parler populaire dans L\'Assommoir et le souffle épique de Germinal.',
    lessonData: LESSON_9_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-10',
    title: 'LEÇON 10 : LE ROMAN NÉGRO-AFRICAIN',
    type: 'cours',
    badge: 'Partie 2 • Roman & Récit',
    description: 'Évolution historique majeure : réquisitoire anticolonial (Oyono, Sembène, Kane), désillusions post-indépendance (Kourouma, Mariama Bâ), fécondation de la langue française par l\'oralité traditionnelle.',
    lessonData: LESSON_10_FRANCAIS_1ERE
  },

  // --- PARTIE 3 : MÉTHODOLOGIE DES ÉPREUVES, RHÉTORIQUE ET RÉVISION (LEÇONS 11 À 16) ---
  {
    id: 'fr-1ere-cours-11',
    title: 'LEÇON 11 : LE COMMENTAIRE DE TEXTE',
    type: 'cours',
    badge: 'Partie 3 • Méthodologie & Stylistique',
    description: 'Méthodologie intégrale : observation microscopique du texte, élaboration du projet de lecture, construction des 2 ou 3 axes, triptyque idée-citation-procédé, rédaction soignée sans paraphrase.',
    lessonData: LESSON_11_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-12',
    title: 'LEÇON 12 : LE RÉSUMÉ DE TEXTE',
    type: 'cours',
    badge: 'Partie 3 • Méthodologie & Stylistique',
    description: 'Règles officielles du baccalauréat sénégalais : réduction au quart de la longueur (± 10 %), comptage normé des mots, fidélité au système d\'énonciation, techniques de condensation et de nominalisation.',
    lessonData: LESSON_12_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-13',
    title: 'LEÇON 13 : LA DISCUSSION',
    type: 'cours',
    badge: 'Partie 3 • Méthodologie & Stylistique',
    description: 'Argumentation personnelle faisant suite au résumé : analyse de la citation, problématisation, plan dialectique nuancé, sélection d\'exemples probants et rédaction d\'une synthèse équilibrée.',
    lessonData: LESSON_13_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-14',
    title: 'LEÇON 14 : LES FIGURES DE STYLE ET LEUR INTERPRÉTATION',
    type: 'cours',
    badge: 'Partie 3 • Méthodologie & Stylistique',
    description: 'Figures d\'analogie, d\'opposition, d\'amplification, d\'atténuation et de substitution : identification formelle, citation textuelle et analyse de l\'effet de sens produit dans le contexte littéraire.',
    lessonData: LESSON_14_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-15',
    title: 'LEÇON 15 : LES REGISTRES LITTÉRAIRES',
    type: 'cours',
    badge: 'Partie 3 • Méthodologie & Stylistique',
    description: 'Tonalités du texte et effets cathartiques sur le lecteur : registres lyrique, tragique, pathétique, épique, polémique, satirique, ironique, comique, fantastique et didactique.',
    lessonData: LESSON_15_FRANCAIS_1ERE
  },
  {
    id: 'fr-1ere-cours-16',
    title: 'PROGRESSION DE RÉVISION & CADRAGE OFFICIEL DES IA',
    type: 'cours',
    badge: 'Partie 3 • Méthodologie & Stylistique',
    description: 'Document de cadrage officiel harmonisé 2025-2026 des Inspections d\'Académie de Dakar, Pikine-Guédiawaye et Rufisque : calendrier trimestriel de révision et inventaire des pièges éliminatoires au Bac.',
    lessonData: LESSON_16_FRANCAIS_1ERE
  }
];
