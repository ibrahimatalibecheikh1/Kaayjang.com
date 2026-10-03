// =========================================================================
// INDEX CENTRAL DES COURS DE PHYSIQUE-CHIMIE CLASSE DE TERMINALE (SÉRIES S ET L)
// Conforme aux programmes officiels nationaux de la République du Sénégal
// Séries S (S1 & S2 : 13 leçons) et Séries L (L2, L' : 6 leçons)
// Leçons exhaustives sans résumé, démonstrations rigoureuses et figures/schémas obligatoires
// =========================================================================

import { ContentData, LessonContent } from './courses';

// --- Imports Série S ---
import {
  LESSON_1_PC_TLE_S,
  LESSON_2_PC_TLE_S,
  LESSON_3_PC_TLE_S
} from './courses_tle_pc_s_part1';

import {
  LESSON_4_PC_TLE_S,
  LESSON_5_PC_TLE_S
} from './courses_tle_pc_s_part2';

import {
  LESSON_6_PC_TLE_S,
  LESSON_7_PC_TLE_S,
  LESSON_8_PC_TLE_S,
  LESSON_9_PC_TLE_S
} from './courses_tle_pc_s_part3';

import {
  LESSON_10_PC_TLE_S,
  LESSON_11_PC_TLE_S,
  LESSON_12_PC_TLE_S,
  LESSON_13_PC_TLE_S
} from './courses_tle_pc_s_part4';

// --- Imports Série L ---
import {
  LESSON_1_PC_TLE_L,
  LESSON_2_PC_TLE_L,
  LESSON_3_PC_TLE_L
} from './courses_tle_pc_l_part1';

import {
  LESSON_4_PC_TLE_L,
  LESSON_5_PC_TLE_L,
  LESSON_6_PC_TLE_L
} from './courses_tle_pc_l_part2';

// Re-exports
export {
  LESSON_1_PC_TLE_S, LESSON_2_PC_TLE_S, LESSON_3_PC_TLE_S, LESSON_4_PC_TLE_S,
  LESSON_5_PC_TLE_S, LESSON_6_PC_TLE_S, LESSON_7_PC_TLE_S, LESSON_8_PC_TLE_S,
  LESSON_9_PC_TLE_S, LESSON_10_PC_TLE_S, LESSON_11_PC_TLE_S, LESSON_12_PC_TLE_S,
  LESSON_13_PC_TLE_S,
  LESSON_1_PC_TLE_L, LESSON_2_PC_TLE_L, LESSON_3_PC_TLE_L,
  LESSON_4_PC_TLE_L, LESSON_5_PC_TLE_L, LESSON_6_PC_TLE_L
};

// Type pour les onglets Série PC Terminale
export type PcTleSeriesTab = 'S' | 'L';

export interface PcTleTabOption {
  id: PcTleSeriesTab;
  label: string;
  shortLabel: string;
  badge: string;
  description: string;
  bgActive: string;
  borderActive: string;
  count: number;
}

export const PC_TLE_TABS: PcTleTabOption[] = [
  {
    id: 'S',
    label: 'Série S (S1 & S2) — Programme Scientifique Approfondi',
    shortLabel: 'Série S (S1 & S2)',
    badge: '13 leçons détaillées',
    description: 'Chimie des solutions & Cinétique, Estérification & Peptides, Mécanique Newtonienne & Balistique, Particules dans E et B, Kepler, Oscillations & Circuits RLC, Ondes & Physique Nucléaire',
    bgActive: 'bg-purple-600 text-white',
    borderActive: 'border-purple-700',
    count: 13
  },
  {
    id: 'L',
    label: "Série L (L2, L') — Programme Littéraire & Environnemental",
    shortLabel: "Série L (L2, L')",
    badge: '6 leçons détaillées',
    description: 'Optique géométrique & Vision, Électricité domestique & Sécurité Senelec, Énergies renouvelables, Solutions aqueuses & Potabilisation, Savonnerie artisanale, Matières plastiques & Recyclage',
    bgActive: 'bg-indigo-600 text-white',
    borderActive: 'border-indigo-700',
    count: 6
  }
];

// Filtres par pôle pour la Série S
export const PC_TLE_S_PARTS = [
  { id: 'all', label: 'Toutes les leçons Série S (13 leçons)', count: '13' },
  { id: 'part-1', label: 'Pôle 1 • Chimie : Solutions Aqueuses, Dosages & Cinétique (S1 à S3)', count: '3' },
  { id: 'part-2', label: 'Pôle 2 • Chimie : Estérification, Saponification & Peptides (S4 & S5)', count: '2' },
  { id: 'part-3', label: 'Pôle 3 • Physique : Cinématique, Lois de Newton, Lorentz & Kepler (S6 à S9)', count: '4' },
  { id: 'part-4', label: 'Pôle 4 • Physique : Oscillateurs, Circuits RLC, Ondes & Nucléaire (S10 à S13)', count: '4' }
];

// Filtres par thème pour la Série L
export const PC_TLE_L_PARTS = [
  { id: 'all', label: 'Toutes les leçons Série L (6 leçons)', count: '6' },
  { id: 'part-1', label: 'Pôle 1 • Physique : Optique, Électricité domestique & Énergies vertes (L1 à L3)', count: '3' },
  { id: 'part-2', label: 'Pôle 2 • Chimie : Eau & pH, Savonnerie artisanale & Plastiques (L4 à L6)', count: '3' }
];

// =========================================================================
// LISTE DES COURS PHYSIQUE-CHIMIE TERMINALE SÉRIE S (S1 & S2) — 13 LEÇONS
// =========================================================================
export const COURSES_PC_TLE_S: ContentData[] = [
  // --- CHIMIE (S1 À S5) ---
  {
    id: 'pc-tle-s-cours-1',
    title: 'CHAPITRE S1 : ACIDES ET BASES SELON BRÖNSTED, AUTOPROTOLYSE ET ÉQUILIBRES AQUEUX',
    type: 'cours',
    badge: 'Terminale S • Chimie des Solutions',
    description: 'Théorie de Brönsted, couples acide/base, produit ionique Ke, calcul de pH des acides/bases forts et faibles, constante d\'acidité Ka, pKa et diagramme de prédominance.',
    lessonData: LESSON_1_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-2',
    title: 'CHAPITRE S2 : DOSAGES ACIDO-BASIQUES ET SOLUTIONS TAMPONS',
    type: 'cours',
    badge: 'Terminale S • Titrages & Tampons',
    description: 'Principe du titrage acido-basique, réaction de dosage, méthode des tangentes parallèles, saut de pH, équivalence E, choix des indicateurs et solutions tampons.',
    lessonData: LESSON_2_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-3',
    title: 'CHAPITRE S3 : CINÉTIQUE CHIMIQUE : VITESSE DE RÉACTION ET FACTEURS CINÉTIQUES',
    type: 'cours',
    badge: 'Terminale S • Cinétique Chimique',
    description: 'Systèmes lents et rapides, avancement x(t), vitesse volumique v = (1/V)(dx/dt), vitesse de disparition/apparition, facteurs cinétiques et temps de demi-réaction t₁/₂.',
    lessonData: LESSON_3_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-4',
    title: 'CHAPITRE S4 : ESTÉRIFICATION ET HYDROLYSE DES ESTERS',
    type: 'cours',
    badge: 'Terminale S • Chimie Organique',
    description: 'Équilibre d\'estérification-hydrolyse (lente, athermique, limitée), constante d\'équilibre K, rendements selon la classe de l\'alcool, et optimisation par chlorures d\'acyle.',
    lessonData: LESSON_4_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-5',
    title: 'CHAPITRE S5 : SAPONIFICATION, COMPOSÉS AZOTÉS ET ACIDES α-AMINÉS',
    type: 'cours',
    badge: 'Terminale S • Peptides & Savons',
    description: 'Amines, basicité, acides α-aminés, carbone asymétrique, chiralité, amphion dipolaire, liaison peptidique, synthèse de dipeptides et saponification des corps gras.',
    lessonData: LESSON_5_PC_TLE_S
  },

  // --- PHYSIQUE (S6 À S13) ---
  {
    id: 'pc-tle-s-cours-6',
    title: 'CHAPITRE S6 : CINÉMATIQUE DU POINT MATÉRIEL',
    type: 'cours',
    badge: 'Terminale S • Mécanique & Frenet',
    description: 'Repères cartésien et de Frenet, vecteurs position OM, vitesse v et accélération a, composantes tangentielle et normale, mouvements MRU, MRUV et MCU.',
    lessonData: LESSON_6_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-7',
    title: 'CHAPITRE S7 : DYNAMIQUE ET LOIS DE NEWTON : MOUVEMENTS BALISTIQUES',
    type: 'cours',
    badge: 'Terminale S • Lois de Newton & Balistique',
    description: 'Les trois lois de Newton, référentiels galiléens, PFD, tir d\'un projectile dans le champ de pesanteur g, équations horaires, équation de la parabole, flèche H et portée X_P.',
    lessonData: LESSON_7_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-8',
    title: 'CHAPITRE S8 : PARTICULES CHARGÉES DANS DES CHAMPS ÉLECTROSTATIQUE ET MAGNÉTIQUE',
    type: 'cours',
    badge: 'Terminale S • Champs E et B & Lorentz',
    description: 'Force électrique Fe = qE, déflexion dans un condensateur, force magnétique de Lorentz Fm = q(v ∧ B), mouvement circulaire uniforme R = mv/(|q|B) et spectromètre de masse.',
    lessonData: LESSON_8_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-9',
    title: 'CHAPITRE S9 : MOUVEMENT DES SATELLITES ET PLANÈTES : LOIS DE KEPLER',
    type: 'cours',
    badge: 'Terminale S • Gravitation & Kepler',
    description: 'Loi de gravitation universelle de Newton, les trois lois de Kepler, vitesse orbitale d\'un satellite, période T, 3ème loi de Kepler T²/r³ = constante et satellite géostationnaire.',
    lessonData: LESSON_9_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-10',
    title: 'CHAPITRE S10 : OSCILLATIONS MÉCANIQUES LIBRES ET AMORTIES',
    type: 'cours',
    badge: 'Terminale S • Oscillateurs Mécaniques',
    description: 'Système solide-ressort horizontal, équation différentielle x\'\' + ω₀²x = 0, période propre T₀ = 2π√(m/k), conservation de Em, amortissement visqueux et régimes pseudopériodique.',
    lessonData: LESSON_10_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-11',
    title: 'CHAPITRE S11 : CIRCUITS ÉLECTRIQUES RLC EN RÉGIME LIBRE ET FORCÉ',
    type: 'cours',
    badge: 'Terminale S • Circuits RLC & Résonance',
    description: 'Décharge oscillante libre dans un circuit RLC, période propre de Thomson, régime forcé, impédance Z, déphasage φ, résonance d\'intensité, bande passante et facteur de qualité Q.',
    lessonData: LESSON_11_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-12',
    title: 'CHAPITRE S12 : PHÉNOMÈNES ONDULATOIRES : MÉCANIQUES ET OPTIQUE ONDULATOIRE',
    type: 'cours',
    badge: 'Terminale S • Ondes & Fentes d\'Young',
    description: 'Propagation d\'une onde progressive, double périodicité spatio-temporelle λ = vT, diffraction par une ouverture, interférences lumineuses des fentes d\'Young et interfrange i = λD/a.',
    lessonData: LESSON_12_PC_TLE_S
  },
  {
    id: 'pc-tle-s-cours-13',
    title: 'CHAPITRE S13 : PHYSIQUE NUCLÉAIRE : RADIOACTIVITÉ ET RÉACTIONS NUCLÉAIRES',
    type: 'cours',
    badge: 'Terminale S • Physique Nucléaire',
    description: 'Structure du noyau, défaut de masse Δm, énergie de liaison, lois de Soddy, désintégrations α, β⁻, β⁺, décroissance radioactive N(t) = N₀e^(-λt), période t₁/₂, fission et fusion.',
    lessonData: LESSON_13_PC_TLE_S
  }
];

// =========================================================================
// LISTE DES COURS PHYSIQUE-CHIMIE TERMINALE SÉRIE L (L2, L\') — 6 LEÇONS
// =========================================================================
export const COURSES_PC_TLE_L: ContentData[] = [
  // --- PHYSIQUE (L1 À L3) ---
  {
    id: 'pc-tle-l-cours-1',
    title: 'CHAPITRE L1 : OPTIQUE GÉOMÉTRIQUE ET VISION DE L\'ŒIL',
    type: 'cours',
    badge: 'Terminale L • Optique & Vision',
    description: 'Lentilles minces convergentes et divergentes, vergence, formules de conjugaison de Descartes, modèle de l\'œil réduit, et correction de la myopie, hypermétropie et presbytie.',
    lessonData: LESSON_1_PC_TLE_L
  },
  {
    id: 'pc-tle-l-cours-2',
    title: 'CHAPITRE L2 : ÉNERGIE ET ÉLECTRICITÉ DOMESTIQUE',
    type: 'cours',
    badge: 'Terminale L • Électricité Domestique',
    description: 'Puissance et énergie électrique, loi de Joule, section des câbles, facturation Senelec (Woyofal), organes de protection (disjoncteurs, prise de terre) et sécurité des personnes.',
    lessonData: LESSON_2_PC_TLE_L
  },
  {
    id: 'pc-tle-l-cours-3',
    title: 'CHAPITRE L3 : ÉNERGIES RENOUVELABLES ET TRANSITION ÉNERGÉTIQUE',
    type: 'cours',
    badge: 'Terminale L • Énergies Renouvelables',
    description: 'Énergie solaire photovoltaïque et thermique, énergie éolienne, hydroélectricité, potentiel et grandes centrales du Sénégal (Bokhol, Malicounda, Taïba N\'Diaye).',
    lessonData: LESSON_3_PC_TLE_L
  },

  // --- CHIMIE (L4 À L6) ---
  {
    id: 'pc-tle-l-cours-4',
    title: 'CHAPITRE L4 : L\'EAU ET LES SOLUTIONS AQUEUSES : ACIDITÉ, BASICITÉ ET pH',
    type: 'cours',
    badge: 'Terminale L • Solutions & pH',
    description: 'Autoprotolyse de l\'eau, produit ionique Ke, échelle de pH de 0 à 14, indicateurs colorés et procédé industriel de potabilisation de l\'eau au Sénégal (Keur Momar Sarr).',
    lessonData: LESSON_4_PC_TLE_L
  },
  {
    id: 'pc-tle-l-cours-5',
    title: 'CHAPITRE L5 : CHIMIE ORGANIQUE APPLIQUÉE ET ALIMENTATION',
    type: 'cours',
    badge: 'Terminale L • Savonnerie & Lipides',
    description: 'Familles chimiques (alcools, acides carboxyliques, esters), lipides et triglycérides, réaction de saponification, mode d\'action détergent du savon et relargage.',
    lessonData: LESSON_5_PC_TLE_L
  },
  {
    id: 'pc-tle-l-cours-6',
    title: 'CHAPITRE L6 : MATIÈRES PLASTIQUES ET ENVIRONNEMENT',
    type: 'cours',
    badge: 'Terminale L • Plastiques & Recyclage',
    description: 'Polymères synthétiques (PE, PP, PVC, PET), thermoplastiques et thermodurcissables, symboles de recyclage, impacts des déchets plastiques au Sénégal et loi 2020-04.',
    lessonData: LESSON_6_PC_TLE_L
  }
];
