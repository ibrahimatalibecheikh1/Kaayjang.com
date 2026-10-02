// =========================================================================
// INDEX CENTRAL DES COURS DE SVT CLASSE DE TERMINALE (SÉRIES S ET L)
// Conforme aux programmes officiels nationaux de la République du Sénégal
// Séries S (S1 & S2 : 13 leçons) et Séries L (L1, L2, L' : 8 leçons)
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

import { ContentData, LessonContent } from './courses';

// --- Imports Série S ---
import {
  LESSON_1_SVT_TLE_S,
  LESSON_2_SVT_TLE_S,
  LESSON_3_SVT_TLE_S,
  LESSON_4_SVT_TLE_S
} from './courses_tle_svt_s_part1';

import {
  LESSON_5_SVT_TLE_S,
  LESSON_6_SVT_TLE_S,
  LESSON_7_SVT_TLE_S
} from './courses_tle_svt_s_part2';

import {
  LESSON_8_SVT_TLE_S,
  LESSON_9_SVT_TLE_S,
  LESSON_10_SVT_TLE_S
} from './courses_tle_svt_s_part3';

import {
  LESSON_11_SVT_TLE_S,
  LESSON_12_SVT_TLE_S,
  LESSON_13_SVT_TLE_S
} from './courses_tle_svt_s_part4';

// --- Imports Série L ---
import {
  LESSON_1_SVT_TLE_L,
  LESSON_2_SVT_TLE_L,
  LESSON_3_SVT_TLE_L,
  LESSON_4_SVT_TLE_L
} from './courses_tle_svt_l_part1';

import {
  LESSON_5_SVT_TLE_L,
  LESSON_6_SVT_TLE_L,
  LESSON_7_SVT_TLE_L,
  LESSON_8_SVT_TLE_L
} from './courses_tle_svt_l_part2';

// Re-exports
export {
  LESSON_1_SVT_TLE_S, LESSON_2_SVT_TLE_S, LESSON_3_SVT_TLE_S, LESSON_4_SVT_TLE_S,
  LESSON_5_SVT_TLE_S, LESSON_6_SVT_TLE_S, LESSON_7_SVT_TLE_S,
  LESSON_8_SVT_TLE_S, LESSON_9_SVT_TLE_S, LESSON_10_SVT_TLE_S,
  LESSON_11_SVT_TLE_S, LESSON_12_SVT_TLE_S, LESSON_13_SVT_TLE_S,
  LESSON_1_SVT_TLE_L, LESSON_2_SVT_TLE_L, LESSON_3_SVT_TLE_L, LESSON_4_SVT_TLE_L,
  LESSON_5_SVT_TLE_L, LESSON_6_SVT_TLE_L, LESSON_7_SVT_TLE_L, LESSON_8_SVT_TLE_L
};

// Type pour les onglets Série SVT Terminale
export type SvtTleSeriesTab = 'S' | 'L';

export interface SvtTleTabOption {
  id: SvtTleSeriesTab;
  label: string;
  shortLabel: string;
  badge: string;
  description: string;
  bgActive: string;
  borderActive: string;
  count: number;
}

export const SVT_TLE_TABS: SvtTleTabOption[] = [
  {
    id: 'S',
    label: 'Série S (S1 & S2) — Programme Scientifique Intégral',
    shortLabel: 'Série S (S1 & S2)',
    badge: '13 leçons détaillées',
    description: 'Neurobiologie, Potentiel d’action, Réflexes myotatiques, Régulation de la glycémie et pression artérielle, Reproduction & Hormones, Génétique & Biologie moléculaire',
    bgActive: 'bg-emerald-600 text-white',
    borderActive: 'border-emerald-700',
    count: 13
  },
  {
    id: 'L',
    label: "Série L (L1, L2, L') — Programme Littéraire Intégral",
    shortLabel: "Série L (L1, L2, L')",
    badge: '8 leçons détaillées',
    description: 'Nutrition, Rations et Maladies métaboliques au Sénégal, Reproduction, Contraception & PMA, Génétique humaine & Drépanocytose, Immunité & SIDA, Écosystèmes & Défis écologiques',
    bgActive: 'bg-amber-600 text-white',
    borderActive: 'border-amber-700',
    count: 8
  }
];

// Filtres par thème / partie pour la Série S
export const SVT_TLE_S_PARTS = [
  { id: 'all', label: 'Toutes les leçons Série S (13 leçons)', count: '13' },
  { id: 'part-1', label: 'Thème 1 • Neurobiologie et Communication Nerveuse (S1 à S4)', count: '4' },
  { id: 'part-2', label: 'Thème 2 • Homéostasie et Régulations Physiologiques (S5 à S7)', count: '3' },
  { id: 'part-3', label: 'Thème 3 • Reproduction Humaine et Régulations Endocriniennes (S8 à S10)', count: '3' },
  { id: 'part-4', label: 'Thème 4 • Génétique Classique et Biologie Moléculaire (S11 à S13)', count: '3' }
];

// Filtres par thème / partie pour la Série L
export const SVT_TLE_L_PARTS = [
  { id: 'all', label: 'Toutes les leçons Série L (8 leçons)', count: '8' },
  { id: 'part-1', label: 'Thème 1 • Alimentation, Nutrition et Santé Publique (L1 & L2)', count: '2' },
  { id: 'part-2', label: 'Thème 2 • Physiologie de la Reproduction & Maîtrise de la Procréation (L3 & L4)', count: '2' },
  { id: 'part-3', label: 'Thème 3 • Génétique Humaine et Hérédité (L5)', count: '1' },
  { id: 'part-4', label: 'Thème 4 • Immunologie, Écosystèmes et Environnement au Sénégal (L6 à L8)', count: '3' }
];

// =========================================================================
// LISTE DES COURS SVT TERMINALE SÉRIE S (S1 & S2) — 13 LEÇONS
// =========================================================================
export const COURSES_SVT_TLE_S: ContentData[] = [
  // --- THÈME 1 : NEUROBIOLOGIE ET COMMUNICATION NERVEUSE (LEÇONS S-1 À S-4) ---
  {
    id: 'svt-tle-s-cours-1',
    title: 'LEÇON S-1 : LE RÉFLEXE MYOTATIQUE ET LE FONCTIONNEMENT DU FUSEAU NEUROMUSCULAIRE',
    type: 'cours',
    badge: 'Thème 1 • Neurobiologie (Série S)',
    description: 'Organisation de l’arc réflexe myotatique monosynaptique, structure du fuseau neuromusculaire récepteur à l’étirement, motoneurone alpha médullaire, plaque motrice et innervation réciproque.',
    lessonData: LESSON_1_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-2',
    title: 'LEÇON S-2 : LE TISSU NERVEUX : POTENTIEL DE REPOS ET POTENTIEL D’ACTION',
    type: 'cours',
    badge: 'Thème 1 • Neurobiologie (Série S)',
    description: 'Bases biophysiques du message nerveux : potentiel de repos (-70 mV, pompe Na+/K+ ATPase, gradient électrochimique), potentiel d’action (seuil d’excitation, loi du tout ou rien, canaux VOC).',
    lessonData: LESSON_2_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-3',
    title: 'LEÇON S-3 : LA PROPAGATION DU MESSAGE NERVEUX ET LA TRANSMISSION SYNAPTIQUE',
    type: 'cours',
    badge: 'Thème 1 • Neurobiologie (Série S)',
    description: 'Propagation continue de proche en proche versus conduction saltatoire des fibres myélinisées, synapse neuro-neuronale, entrée de calcium, libération des neurotransmetteurs, PPSE, PPSI et sommation.',
    lessonData: LESSON_3_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-4',
    title: 'LEÇON S-4 : L’ACTIVITÉ DU CŒUR ET LA RÉGULATION NERVEUSE DU RYTHME CARDIAQUE',
    type: 'cours',
    badge: 'Thème 1 • Neurobiologie (Série S)',
    description: 'Automatisme cardiaque intrinsèque (nœud sinusal, faisceau de His), contrôle antagoniste par le système nerveux végétatif autonome (nerf vague parasympathique et nerf cardiaque sympathique).',
    lessonData: LESSON_4_SVT_TLE_S
  },

  // --- THÈME 2 : HOMÉOSTASIE ET RÉGULATIONS PHYSIOLOGIQUES (LEÇONS S-5 À S-7) ---
  {
    id: 'svt-tle-s-cours-5',
    title: 'LEÇON S-5 : LA RÉGULATION DE LA GLYCÉMIE ET LES DIABÈTES',
    type: 'cours',
    badge: 'Thème 2 • Homéostasie (Série S)',
    description: 'Constante physiologique de la glycémie (1 g/L), îlots de Langerhans pancréatiques (insuline hypoglycémiante des cellules bêta, glucagon hyperglycémiant des cellules alpha) et physiopathologie des diabètes.',
    lessonData: LESSON_5_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-6',
    title: 'LEÇON S-6 : LA RÉGULATION DE LA PRESSION ARTÉRIELLE',
    type: 'cours',
    badge: 'Thème 2 • Homéostasie (Série S)',
    description: 'Paramètres hémodynamiques (PA = DC × RPT), régulation réflexe nerveuse à court terme (barorécepteurs carotidiens et aortiques, centre bulbaire dépresseur) et régulation hormonale rénale.',
    lessonData: LESSON_6_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-7',
    title: 'LEÇON S-7 : L’HOMÉOSTASIE HYDROMINÉRALE ET LA FONCTION RÉGULATRICE DU REIN',
    type: 'cours',
    badge: 'Thème 2 • Homéostasie (Série S)',
    description: 'Néphron unité fonctionnelle rénale, filtration glomérulaire, réabsorption tubulaire, concentration de l’urine, rétroaction de l’hormone antidiurétique (ADH/vasopressine) et aldostérone.',
    lessonData: LESSON_7_SVT_TLE_S
  },

  // --- THÈME 3 : REPRODUCTION HUMAINE ET RÉGULATIONS ENDOCRINIENNES (LEÇONS S-8 À S-10) ---
  {
    id: 'svt-tle-s-cours-8',
    title: 'LEÇON S-8 : LA REPRODUCTION CHEZ L’HOMME : SPERMATOGENÈSE ET RÉGULATION HORMONALE',
    type: 'cours',
    badge: 'Thème 3 • Reproduction Humaine (Série S)',
    description: 'Structure des tubes séminifères, étapes cinétiques de la spermatogenèse, spermiogenèse, cellules interstitielles de Leydig, cellules nourricières de Sertoli, contrôle par GnRH, LH, FSH et testostérone.',
    lessonData: LESSON_8_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-9',
    title: 'LEÇON S-9 : LA REPRODUCTION CHEZ LA FEMME : OVOGENÈSE, CYCLES SEXUELS ET RÉTROCONTRÔLES',
    type: 'cours',
    badge: 'Thème 3 • Reproduction Humaine (Série S)',
    description: 'Folliculogenèse et ovogenèse discontinues, cycle ovarien et cycle utérin synchronisés, pic de LH déclenchant l’ovulation, rétrocontrôles positif et négatif des œstrogènes et progestérone sur l’axe hypothalamo-hypophysaire.',
    lessonData: LESSON_9_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-10',
    title: 'LEÇON S-10 : DE LA FÉCONDATION À LA NIDATION, CONTRACEPTION ET PROCRÉATION MÉDICALEMENT ASSISTÉE',
    type: 'cours',
    badge: 'Thème 3 • Reproduction Humaine (Série S)',
    description: 'Trajet des gamètes, réaction acrosomique, blocage de la polyspermie, amphimixie, premières divisions embryonnaires et nidation utérine, sécrétion d’hCG, contraception hormonale et techniques de PMA.',
    lessonData: LESSON_10_SVT_TLE_S
  },

  // --- THÈME 4 : GÉNÉTIQUE CLASSIQUE ET BIOLOGIE MOLÉCULAIRE (LEÇONS S-11 À S-13) ---
  {
    id: 'svt-tle-s-cours-11',
    title: 'LEÇON S-11 : LA TRANSMISSION DE L’INFORMATION GÉNÉTIQUE : MÉIOSE ET CYCLES CHROMOSOMIQUES',
    type: 'cours',
    badge: 'Thème 4 • Génétique (Série S)',
    description: 'Étapes détaillées de la division réductionnelle et équationnelle de la méiose, crossing-over en prophase I (brassage intrachromosomique) et ségrégation aléatoire en anaphase I (brassage interchromosomique).',
    lessonData: LESSON_11_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-12',
    title: 'LEÇON S-12 : GÉNÉTIQUE MENDÉLIENNE : MONOHYBRIDISME ET DIHYBRIDISME CHEZ LES DIPLOÏDES',
    type: 'cours',
    badge: 'Thème 4 • Génétique (Série S)',
    description: 'Lois statistiques de Gregor Mendel, dominance complète, codominance et létalité, dihybridisme à gènes indépendants (9/16, 3/16, 3/16, 1/16) versus gènes liés (linkage total et partiel, test-cross, calcul du pourcentage de recombinaison et cartes génétiques factorielles).',
    lessonData: LESSON_12_SVT_TLE_S
  },
  {
    id: 'svt-tle-s-cours-13',
    title: 'LEÇON S-13 : STRUCTURE DU MATÉRIEL GÉNÉTIQUE, TRANSCRIPTION, TRADUCTION ET MUTATIONS',
    type: 'cours',
    badge: 'Thème 4 • Génétique (Série S)',
    description: 'Structure en double hélice de l’ADN, réplication semi-conservative (ADN polymérase), biosynthèse protéique (transcription par l’ARN polymérase, maturation, code génétique universel et dégénéré, traduction ribosomale) et typologie des mutations géniques.',
    lessonData: LESSON_13_SVT_TLE_S
  }
];

// =========================================================================
// LISTE DES COURS SVT TERMINALE SÉRIE L (L1, L2, L') — 8 LEÇONS
// =========================================================================
export const COURSES_SVT_TLE_L: ContentData[] = [
  // --- THÈME 1 : ALIMENTATION, NUTRITION ET SANTÉ PUBLIQUE (LEÇONS L-1 & L-2) ---
  {
    id: 'svt-tle-l-cours-1',
    title: 'LEÇON L-1 : LES BESOINS NUTRITIONNELS ET LA RATION ALIMENTAIRE ÉQUILIBRÉE',
    type: 'cours',
    badge: 'Thème 1 • Nutrition & Santé (Série L)',
    description: 'Étude physiologique des besoins de l’organisme humain : macronutriments, micronutriments, métabolisme de base, dépense énergétique, équilibre de la ration 421 GPL et hygiène alimentaire au Sénégal.',
    lessonData: LESSON_1_SVT_TLE_L
  },
  {
    id: 'svt-tle-l-cours-2',
    title: 'LEÇON L-2 : LES MALADIES NUTRITIONNELLES ET MÉTABOLIQUES AU SÉNÉGAL',
    type: 'cours',
    badge: 'Thème 1 • Nutrition & Santé (Série L)',
    description: 'Épidémiologie du double fardeau nutritionnel : sous-nutrition protido-calorique (marasme, kwashiorkor), carences en micronutriments (anémie ferriprive, avitaminose A, goitre) et maladies métaboliques chroniques (obésité, diabète type 2, hypertension artérielle).',
    lessonData: LESSON_2_SVT_TLE_L
  },

  // --- THÈME 2 : PHYSIOLOGIE DE LA REPRODUCTION HUMAINE ET PROCRÉATION (LEÇONS L-3 & L-4) ---
  {
    id: 'svt-tle-l-cours-3',
    title: 'LEÇON L-3 : LA PHYSIOLOGIE DE LA REPRODUCTION HUMAINE CHEZ L’HOMME ET LA FEMME',
    type: 'cours',
    badge: 'Thème 2 • Reproduction & Procréation (Série L)',
    description: 'Anatomie fonctionnelle des appareils génitaux, gamétogenèse comparée, cycles ovarien et utérin de la femme, régulation hormonale par le complexe hypothalamo-hypophysaire et fécondation.',
    lessonData: LESSON_3_SVT_TLE_L
  },
  {
    id: 'svt-tle-l-cours-4',
    title: 'LEÇON L-4 : MAÎTRISE DE LA REPRODUCTION, SANTÉ DE LA REPRODUCTION ET INFECTIONS SEXUELLEMENT TRANSMISSIBLES',
    type: 'cours',
    badge: 'Thème 2 • Reproduction & Procréation (Série L)',
    description: 'Planification familiale, contraception naturelle, mécanique et hormonale, Procréation Médicalement Assistée (PMA : FIV, insémination) et prévention des IST bactériennes et virales au Sénégal.',
    lessonData: LESSON_4_SVT_TLE_L
  },

  // --- THÈME 3 : GÉNÉTIQUE HUMAINE ET HÉRÉDITÉ (LEÇON L-5) ---
  {
    id: 'svt-tle-l-cours-5',
    title: 'LEÇON L-5 : LA GÉNÉTIQUE HUMAINE ET LA TRANSMISSION DES CARACTÈRES HÉRÉDITAIRES',
    type: 'cours',
    badge: 'Thème 3 • Génétique Humaine (Série L)',
    description: 'Analyse des arbres généalogiques (pédigrées), transmission autosomique récessive de la drépanocytose au Sénégal (A//S, S//S), hérédité liée au chromosome X (hémophilie, daltonisme) et conseil génétique prénuptial.',
    lessonData: LESSON_5_SVT_TLE_L
  },

  // --- THÈME 4 : IMMUNOLOGIE, ÉCOSYSTÈMES ET ENVIRONNEMENT AU SÉNÉGAL (LEÇONS L-6 À L-8) ---
  {
    id: 'svt-tle-l-cours-6',
    title: 'LEÇON L-6 : LE SYSTÈME IMMUNITAIRE, LE SOI, LE NON-SOI ET LES DYSFONCTIONNEMENTS',
    type: 'cours',
    badge: 'Thème 4 • Immunologie & Environnement (Série L)',
    description: 'Marqueurs du soi (HLA/CMH), réaction inflammatoire et phagocytose, médiation humorale (LB et anticorps), médiation cellulaire (LT cytotoxiques), principe de la vaccination, allergies et infection par le VIH-SIDA.',
    lessonData: LESSON_6_SVT_TLE_L
  },
  {
    id: 'svt-tle-l-cours-7',
    title: 'LEÇON L-7 : LES ÉCOSYSTÈMES, CYCLES BIOGÉOCHIMIQUES ET ÉQUILIBRES NATURELS AU SÉNÉGAL',
    type: 'cours',
    badge: 'Thème 4 • Immunologie & Environnement (Série L)',
    description: 'Biotope et biocénose, pyramides trophiques et flux d’énergie, cycles du carbone, de l’azote et de l’eau, et étude des écosystèmes sénégalais : mangrove du Saloum, steppe du Ferlo et savane du Niokolo-Koba.',
    lessonData: LESSON_7_SVT_TLE_L
  },
  {
    id: 'svt-tle-l-cours-8',
    title: 'LEÇON L-8 : DÉGRADATION DE L’ENVIRONNEMENT, POLLUTIONS ET GESTION DURABLE AU SÉNÉGAL',
    type: 'cours',
    badge: 'Thème 4 • Immunologie & Environnement (Série L)',
    description: 'Désertification sahélienne, déforestation, brèche et érosion côtière à Saint-Louis et Rufisque, décharge de Mbeubeuss à Dakar, pollution plastique et initiatives d’avenir : Grande Muraille Verte et énergies renouvelables.',
    lessonData: LESSON_8_SVT_TLE_L
  }
];

// Regroupement global
export const COURSES_SVT_TLE: ContentData[] = [
  ...COURSES_SVT_TLE_S,
  ...COURSES_SVT_TLE_L
];
