import { ContentData } from './courses';
import {
  LESSON_1_SVT_1ERE_S2,
  LESSON_2_SVT_1ERE_S2,
  LESSON_3_SVT_1ERE_S2,
  LESSON_4_SVT_1ERE_S2,
  LESSON_5_SVT_1ERE_S2,
  LESSON_6_SVT_1ERE_S2,
  LESSON_7_SVT_1ERE_S2,
} from './courses_1ere_svt_s2_part1';
import {
  LESSON_8_SVT_1ERE_S2,
  LESSON_9_SVT_1ERE_S2,
  LESSON_10_SVT_1ERE_S2,
  LESSON_11_SVT_1ERE_S2,
  LESSON_12_SVT_1ERE_S2,
  LESSON_13_SVT_1ERE_S2,
  LESSON_14_SVT_1ERE_S2,
} from './courses_1ere_svt_s2_part2';
import {
  LESSON_15_SVT_1ERE_S2,
  LESSON_16_SVT_1ERE_S2,
  LESSON_17_SVT_1ERE_S2,
  LESSON_18_SVT_1ERE_S2,
  LESSON_19_SVT_1ERE_S2,
  LESSON_20_SVT_1ERE_S2,
  LESSON_21_SVT_1ERE_S2,
} from './courses_1ere_svt_s2_part3';
import {
  LESSON_22_SVT_1ERE_S2,
  LESSON_23_SVT_1ERE_S2,
  LESSON_24_SVT_1ERE_S2,
  LESSON_25_SVT_1ERE_S2,
  LESSON_26_SVT_1ERE_S2,
  LESSON_27_SVT_1ERE_S2,
  LESSON_28_SVT_1ERE_S2,
} from './courses_1ere_svt_s2_part4';

import {
  LESSON_1_SVT_1ERE_S1,
  LESSON_2_SVT_1ERE_S1,
  LESSON_3_SVT_1ERE_S1,
  LESSON_4_SVT_1ERE_S1,
  LESSON_5_SVT_1ERE_S1,
  LESSON_6_SVT_1ERE_S1,
  LESSON_7_SVT_1ERE_S1,
  LESSON_8_SVT_1ERE_S1,
} from './courses_1ere_svt_s1';

import {
  LESSON_1_SVT_1ERE_L1,
  LESSON_2_SVT_1ERE_L1,
  LESSON_3_SVT_1ERE_L1,
  LESSON_4_SVT_1ERE_L1,
  LESSON_5_SVT_1ERE_L1,
  LESSON_6_SVT_1ERE_L1,
} from './courses_1ere_svt_l1';

import {
  LESSON_1_SVT_1ERE_L2,
  LESSON_2_SVT_1ERE_L2,
  LESSON_3_SVT_1ERE_L2,
  LESSON_4_SVT_1ERE_L2,
  LESSON_5_SVT_1ERE_L2,
  LESSON_6_SVT_1ERE_L2,
} from './courses_1ere_svt_l2';

// ---------------------------------------------------------
// ONGLETS SÉRIES POUR SVT PREMIÈRE (S1, S2, L1, L2)
// ---------------------------------------------------------
export type Svt1ereSeriesTab = 'S1' | 'S2' | 'L1' | 'L2';

export interface Svt1ereTabInfo {
  id: Svt1ereSeriesTab;
  title: string;
  shortLabel: string;
  badge: string;
  count: number;
  desc: string;
  color: string;
  bgActive: string;
  borderActive: string;
}

export const SVT_1ERE_TABS: Svt1ereTabInfo[] = [
  {
    id: 'S2',
    title: 'Série S2 (Sciences Expérimentales)',
    shortLabel: 'Série S2',
    badge: '28 leçons intégrales',
    count: 28,
    desc: 'Biologie cellulaire, métabolisme, génétique, reproduction humaine et géologie du Sénégal avec figures & courbes',
    color: 'emerald',
    bgActive: 'bg-emerald-600 text-white',
    borderActive: 'border-emerald-600 ring-2 ring-emerald-500/20'
  },
  {
    id: 'S1',
    title: 'Série S1 (Sciences Exactes)',
    shortLabel: 'Série S1',
    badge: '8 leçons approfondies',
    count: 8,
    desc: 'Cinétique de Michaelis-Menten, bioénergétique, neurophysiologie, potentiel d\'action et tectonique globale',
    color: 'blue',
    bgActive: 'bg-blue-600 text-white',
    borderActive: 'border-blue-600 ring-2 ring-blue-500/20'
  },
  {
    id: 'L1',
    title: 'Série L1 (Littéraire L1)',
    shortLabel: 'Série L1',
    badge: '6 leçons complètes',
    count: 6,
    desc: 'Nutrition humaine, maladies métaboliques, génétique, écologie sahélienne et Grande Muraille Verte',
    color: 'amber',
    bgActive: 'bg-amber-600 text-white',
    borderActive: 'border-amber-600 ring-2 ring-amber-500/20'
  },
  {
    id: 'L2',
    title: 'Série L2 (Littéraire L2)',
    shortLabel: 'Série L2',
    badge: '6 leçons complètes',
    count: 6,
    desc: 'Besoins énergétiques, reproduction & contraception, immunologie, endémies et mangroves de Casamance',
    color: 'purple',
    bgActive: 'bg-purple-600 text-white',
    borderActive: 'border-purple-600 ring-2 ring-purple-500/20'
  }
];

// Filtres de parties pour S2
export const SVT_1ERE_S2_PARTS = [
  { id: 'all', label: 'Toutes les leçons (28)', count: 28 },
  { id: 'p1', label: 'Partie 1 • Cellule & Division (L1-L4)', count: 4 },
  { id: 'p2', label: 'Partie 2 • Métabolisme & Énergie (L5-L12)', count: 8 },
  { id: 'p3', label: 'Partie 3 • ADN & Protéines (L13-L17)', count: 5 },
  { id: 'p4', label: 'Partie 4 • Reproduction humaine (L18-L24)', count: 7 },
  { id: 'p5', label: 'Partie 5 • Géologie du Sénégal (L25-L28)', count: 4 }
];

// ---------------------------------------------------------
// TABLEAU COMPLET DES COURS SÉRIE S2 (28 LEÇONS)
// ---------------------------------------------------------
export const COURSES_SVT_1ERE_S2: ContentData[] = [
  // PARTIE 1 : CELLULE ET DIVISION
  {
    id: 'svt-1ere-s2-lecon-1',
    title: 'LEÇON 1 : ORGANISATION ULTRASTRUCTURALE ET COMPARTIMENTATION CELLULAIRE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 1 • Cellule & Division',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_1_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-2',
    title: 'LEÇON 2 : LE CYCLE CELLULAIRE ET LA DIVISION MITOTIQUE CONFORME',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 1 • Cellule & Division',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_2_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-3',
    title: 'LEÇON 3 : LA MÉIOSE ET LES BRASSAGES CHROMOSOMIQUES DE LA REPRODUCTION SEXUÉE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 1 • Cellule & Division',
    duration: '45 min de lecture',
    link: '#',
    lessonData: LESSON_3_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-4',
    title: 'LEÇON 4 : LES ANOMALIES CHROMOSOMIQUES ET L\'ANALYSE DES CARYOTYPES HUMAINS',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 1 • Cellule & Division',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_4_SVT_1ERE_S2
  },

  // PARTIE 2 : NUTRITION, MÉTABOLISME ET ÉNERGIE
  {
    id: 'svt-1ere-s2-lecon-5',
    title: 'LEÇON 5 : LES ALIMENTS, BESOINS NUTRITIONNELS ET ÉQUILIBRE ALIMENTAIRE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_5_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-6',
    title: 'LEÇON 6 : LA DIGESTION ENZYMATIQUE ET L\'ABSORPTION INTESTINALE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_6_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-7',
    title: 'LEÇON 7 : LES ENZYMES ET LA CINÉTIQUE ENZYMATIQUE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_7_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-8',
    title: 'LEÇON 8 : LA RESPIRATION CELLULAIRE ET LA GLYCOLYSE CYTOSOLIQUE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_8_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-9',
    title: 'LEÇON 9 : LE CYCLE DE KREBS ET LA CHAÎNE RESPIRATOIRE MITOCHONDRIALE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_9_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-10',
    title: 'LEÇON 10 : LES FERMENTATIONS CELLULAIRES ET VOIES ANAÉROBIES',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '30 min de lecture',
    link: '#',
    lessonData: LESSON_10_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-11',
    title: 'LEÇON 11 : LA PHOTOSYNTHÈSE : LA PHASE PHOTOCHIMIQUE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_11_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-12',
    title: 'LEÇON 12 : LA PHOTOSYNTHÈSE : PHASE NON PHOTOCHIMIQUE ET CYCLE DE CALVIN',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 2 • Métabolisme & Énergie',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_12_SVT_1ERE_S2
  },

  // PARTIE 3 : ADN ET SYNTHÈSE DES PROTÉINES
  {
    id: 'svt-1ere-s2-lecon-13',
    title: 'LEÇON 13 : STRUCTURE MOLÉCULAIRE DE L\'ADN ET MODÈLE DE WATSON-CRICK',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 3 • ADN & Protéines',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_13_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-14',
    title: 'LEÇON 14 : LA RÉPLICATION SEMI-CONSERVATIVE DE L\'ADN',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 3 • ADN & Protéines',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_14_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-15',
    title: 'LEÇON 15 : L\'EXPRESSION DU MESSAGE GÉNÉTIQUE : LA TRANSCRIPTION EN ARNm',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 3 • ADN & Protéines',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_15_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-16',
    title: 'LEÇON 16 : LE CODE GÉNÉTIQUE ET LA TRADUCTION DES PROTÉINES',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 3 • ADN & Protéines',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_16_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-17',
    title: 'LEÇON 17 : LES MUTATIONS GÉNÉTIQUES ET LEURS CONSÉQUENCES PHÉNOTYPIQUES',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 3 • ADN & Protéines',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_17_SVT_1ERE_S2
  },

  // PARTIE 4 : REPRODUCTION HUMAINE ET PHYSIOLOGIE GÉNITALE
  {
    id: 'svt-1ere-s2-lecon-18',
    title: 'LEÇON 18 : L\'APPAREIL GÉNITAL MASCULIN ET LA SPERMATOGENÈSE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 4 • Reproduction humaine',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_18_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-19',
    title: 'LEÇON 19 : RÉGULATION HORMONALE DE LA FONCTION REPRODUCTRICE MASCULINE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 4 • Reproduction humaine',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_19_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-20',
    title: 'LEÇON 20 : L\'APPAREIL GÉNITAL FÉMININ ET L\'OVOGENÈSE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 4 • Reproduction humaine',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_20_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-21',
    title: 'LEÇON 21 : LE CYCLE OVARIEN, LE CYCLE UTÉRIN ET LES COURBES HORMONALES',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 4 • Reproduction humaine',
    duration: '45 min de lecture',
    link: '#',
    lessonData: LESSON_21_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-22',
    title: 'LEÇON 22 : RÉGULATION NEURO-HORMONALE DU CYCLE FÉMININ ET RÉTROCONTRÔLES',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 4 • Reproduction humaine',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_22_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-23',
    title: 'LEÇON 23 : LA FÉCONDATION ET LES PREMIÈRES ÉTAPES DU DÉVELOPPEMENT EMBRYONNAIRE',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 4 • Reproduction humaine',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_23_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-24',
    title: 'LEÇON 24 : LA GESTATION, LES ÉCHANGES PLACENTAIRES ET L\'ACCOUCHEMENT',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 4 • Reproduction humaine',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_24_SVT_1ERE_S2
  },

  // PARTIE 5 : GÉOLOGIE ET RESSOURCES GÉOLOGIQUES DU SÉNÉGAL
  {
    id: 'svt-1ere-s2-lecon-25',
    title: 'LEÇON 25 : LES ROCHES MAGMATIQUES : GENÈSE, TEXTURES ET VOLCANISME DES MAMELLES',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 5 • Géologie du Sénégal',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_25_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-26',
    title: 'LEÇON 26 : LES ROCHES SÉDIMENTAIRES : GENÈSE ET LE BASSIN DU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 5 • Géologie du Sénégal',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_26_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-27',
    title: 'LEÇON 27 : LES ROCHES MÉTAMORPHIQUES ET LE SOCLE PRÉCAMBRIEN DU SÉNÉGAL ORIENTAL',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 5 • Géologie du Sénégal',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_27_SVT_1ERE_S2
  },
  {
    id: 'svt-1ere-s2-lecon-28',
    title: 'LEÇON 28 : LES RESSOURCES GÉOLOGIQUES ET HYDROGÉOLOGIQUES DU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'S2',
    type: 'cours',
    badge: 'Partie 5 • Géologie du Sénégal',
    duration: '45 min de lecture',
    link: '#',
    lessonData: LESSON_28_SVT_1ERE_S2
  }
];

// ---------------------------------------------------------
// TABLEAU DES COURS SÉRIE S1 (8 LEÇONS APPROFONDIES)
// ---------------------------------------------------------
export const COURSES_SVT_1ERE_S1: ContentData[] = [
  {
    id: 'svt-1ere-s1-lecon-1',
    title: 'LEÇON S1-1 : CINÉTIQUE ENZYMATIQUE APPROFONDIE ET RÉGULATION ALLOSTÉRIQUE',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Biocatalyse',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_1_SVT_1ERE_S1
  },
  {
    id: 'svt-1ere-s1-lecon-2',
    title: 'LEÇON S1-2 : BIOÉNERGÉTIQUE CELLULAIRE ET COUPLAGE CHIMIO-OSMOTIQUE',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Bioénergétique',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_2_SVT_1ERE_S1
  },
  {
    id: 'svt-1ere-s1-lecon-3',
    title: 'LEÇON S1-3 : RÉGULATION NEURO-HORMONALE DE LA GLYCÉMIE ET HOMÉOSTASIE',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Physiologie & Régulation',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_3_SVT_1ERE_S1
  },
  {
    id: 'svt-1ere-s1-lecon-4',
    title: 'LEÇON S1-4 : NEUROPHYSIOLOGIE : POTENTIEL DE REPOS ET POTENTIEL D\'ACTION',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Neurophysiologie',
    duration: '45 min de lecture',
    link: '#',
    lessonData: LESSON_4_SVT_1ERE_S1
  },
  {
    id: 'svt-1ere-s1-lecon-5',
    title: 'LEÇON S1-5 : LA TRANSMISSION SYNAPTIQUE ET L\'INTÉGRATION NEURONALE',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Neurophysiologie',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_5_SVT_1ERE_S1
  },
  {
    id: 'svt-1ere-s1-lecon-6',
    title: 'LEÇON S1-6 : GÉNÉTIQUE MENDÉLIENNE, LIAISON ET CARTES FACTORIELLES',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Génétique formelle',
    duration: '45 min de lecture',
    link: '#',
    lessonData: LESSON_6_SVT_1ERE_S1
  },
  {
    id: 'svt-1ere-s1-lecon-7',
    title: 'LEÇON S1-7 : TECTONIQUE DES PLAQUES ET DYNAMIQUE DU MANTEAU TERRESTRE',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Géodynamique globale',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_7_SVT_1ERE_S1
  },
  {
    id: 'svt-1ere-s1-lecon-8',
    title: 'LEÇON S1-8 : MAGMATISME DE SUBDUCTION ET COLLISION CONTINENTALE',
    subject: 'SVT',
    class: 'Première',
    series: 'S1',
    type: 'cours',
    badge: 'Série S1 • Géodynamique globale',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_8_SVT_1ERE_S1
  }
];

// ---------------------------------------------------------
// TABLEAU DES COURS SÉRIE L1 (6 LEÇONS COMPLÈTES)
// ---------------------------------------------------------
export const COURSES_SVT_1ERE_L1: ContentData[] = [
  {
    id: 'svt-1ere-l1-lecon-1',
    title: 'LEÇON L1-1 : ALIMENTATION ÉQUILIBRÉE, NUTRITION ET MALNUTRITION AU SAHEL',
    subject: 'SVT',
    class: 'Première',
    series: 'L1',
    type: 'cours',
    badge: 'Série L1 • Nutrition & Santé',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_1_SVT_1ERE_L1
  },
  {
    id: 'svt-1ere-l1-lecon-2',
    title: 'LEÇON L1-2 : LES MALADIES MÉTABOLIQUES ET CARDIOVASCULAIRES',
    subject: 'SVT',
    class: 'Première',
    series: 'L1',
    type: 'cours',
    badge: 'Série L1 • Nutrition & Santé',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_2_SVT_1ERE_L1
  },
  {
    id: 'svt-1ere-l1-lecon-3',
    title: 'LEÇON L1-3 : GÉNÉTIQUE HUMAINE ET ÉTUDE DE LA DRÉPANOCYTOSE AU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'L1',
    type: 'cours',
    badge: 'Série L1 • Génétique humaine',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_3_SVT_1ERE_L1
  },
  {
    id: 'svt-1ere-l1-lecon-4',
    title: 'LEÇON L1-4 : ÉCOSYSTÈMES ET ÉQUILIBRES NATURELS AU SAHEL',
    subject: 'SVT',
    class: 'Première',
    series: 'L1',
    type: 'cours',
    badge: 'Série L1 • Écologie & Environnement',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_4_SVT_1ERE_L1
  },
  {
    id: 'svt-1ere-l1-lecon-5',
    title: 'LEÇON L1-5 : LA DÉSERTIFICATION ET LA SAUVEGARDE DE LA BIODIVERSITÉ AU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'L1',
    type: 'cours',
    badge: 'Série L1 • Écologie & Environnement',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_5_SVT_1ERE_L1
  },
  {
    id: 'svt-1ere-l1-lecon-6',
    title: 'LEÇON L1-6 : LA GESTION DURABLE DE L\'EAU ET L\'ASSAINISSEMENT AU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'L1',
    type: 'cours',
    badge: 'Série L1 • Écologie & Environnement',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_6_SVT_1ERE_L1
  }
];

// ---------------------------------------------------------
// TABLEAU DES COURS SÉRIE L2 (6 LEÇONS COMPLÈTES)
// ---------------------------------------------------------
export const COURSES_SVT_1ERE_L2: ContentData[] = [
  {
    id: 'svt-1ere-l2-lecon-1',
    title: 'LEÇON L2-1 : BESOINS ÉNERGÉTIQUES ET HYGIÈNE ALIMENTAIRE',
    subject: 'SVT',
    class: 'Première',
    series: 'L2',
    type: 'cours',
    badge: 'Série L2 • Nutrition & Hygiène',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_1_SVT_1ERE_L2
  },
  {
    id: 'svt-1ere-l2-lecon-2',
    title: 'LEÇON L2-2 : LA REPRODUCTION HUMAINE, CONTRACEPTION ET RÉGULATION DES NAISSANCES',
    subject: 'SVT',
    class: 'Première',
    series: 'L2',
    type: 'cours',
    badge: 'Série L2 • Reproduction & Santé',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_2_SVT_1ERE_L2
  },
  {
    id: 'svt-1ere-l2-lecon-3',
    title: 'LEÇON L2-3 : LE SYSTÈME IMMUNITAIRE ET LA VACCINATION AU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'L2',
    type: 'cours',
    badge: 'Série L2 • Immunologie & Santé',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_3_SVT_1ERE_L2
  },
  {
    id: 'svt-1ere-l2-lecon-4',
    title: 'LEÇON L2-4 : LES MALADIES INFECTIEUSES ET PARASITAIRES AU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'L2',
    type: 'cours',
    badge: 'Série L2 • Immunologie & Santé',
    duration: '40 min de lecture',
    link: '#',
    lessonData: LESSON_4_SVT_1ERE_L2
  },
  {
    id: 'svt-1ere-l2-lecon-5',
    title: 'LEÇON L2-5 : DÉGRADATION DE L\'ENVIRONNEMENT ET POLLUTIONS À DAKAR',
    subject: 'SVT',
    class: 'Première',
    series: 'L2',
    type: 'cours',
    badge: 'Série L2 • Écologie urbaine',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_5_SVT_1ERE_L2
  },
  {
    id: 'svt-1ere-l2-lecon-6',
    title: 'LEÇON L2-6 : PRÉSERVATION DES MANGROVES ET ÉCOSYSTÈMES CÔTIERS AU SÉNÉGAL',
    subject: 'SVT',
    class: 'Première',
    series: 'L2',
    type: 'cours',
    badge: 'Série L2 • Écosystèmes côtiers',
    duration: '35 min de lecture',
    link: '#',
    lessonData: LESSON_6_SVT_1ERE_L2
  }
];

// Tous les cours SVT 1ère combinés
export const COURSES_SVT_1ERE_ALL: ContentData[] = [
  ...COURSES_SVT_1ERE_S2,
  ...COURSES_SVT_1ERE_S1,
  ...COURSES_SVT_1ERE_L1,
  ...COURSES_SVT_1ERE_L2
];
