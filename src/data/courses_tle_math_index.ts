// =========================================================================
// INDEX CENTRAL DES COURS DE MATHÉMATIQUES CLASSE DE TERMINALE (SÉRIES S ET L)
// Conforme aux programmes officiels nationaux de la République du Sénégal
// Séries S (S1 & S2 : 13 leçons) et Séries L (L1, L2, L' : 8 leçons)
// Leçons exhaustives sans résumé, démonstrations rigoureuses et figures/schémas obligatoires
// =========================================================================

import { ContentData, LessonContent } from './courses';

// --- Imports Série S ---
import {
  LESSON_1_MATH_TLE_S,
  LESSON_2_MATH_TLE_S,
  LESSON_3_MATH_TLE_S,
  LESSON_4_MATH_TLE_S
} from './courses_tle_math_s_part1';

import {
  LESSON_5_MATH_TLE_S,
  LESSON_6_MATH_TLE_S,
  LESSON_7_MATH_TLE_S
} from './courses_tle_math_s_part2';

import {
  LESSON_8_MATH_TLE_S,
  LESSON_9_MATH_TLE_S,
  LESSON_10_MATH_TLE_S
} from './courses_tle_math_s_part3';

import {
  LESSON_11_MATH_TLE_S,
  LESSON_12_MATH_TLE_S,
  LESSON_13_MATH_TLE_S
} from './courses_tle_math_s_part4';

// --- Imports Série L ---
import {
  LESSON_1_MATH_TLE_L,
  LESSON_2_MATH_TLE_L,
  LESSON_3_MATH_TLE_L,
  LESSON_4_MATH_TLE_L
} from './courses_tle_math_l_part1';

import {
  LESSON_5_MATH_TLE_L,
  LESSON_6_MATH_TLE_L,
  LESSON_7_MATH_TLE_L,
  LESSON_8_MATH_TLE_L
} from './courses_tle_math_l_part2';

// Re-exports
export {
  LESSON_1_MATH_TLE_S, LESSON_2_MATH_TLE_S, LESSON_3_MATH_TLE_S, LESSON_4_MATH_TLE_S,
  LESSON_5_MATH_TLE_S, LESSON_6_MATH_TLE_S, LESSON_7_MATH_TLE_S,
  LESSON_8_MATH_TLE_S, LESSON_9_MATH_TLE_S, LESSON_10_MATH_TLE_S,
  LESSON_11_MATH_TLE_S, LESSON_12_MATH_TLE_S, LESSON_13_MATH_TLE_S,
  LESSON_1_MATH_TLE_L, LESSON_2_MATH_TLE_L, LESSON_3_MATH_TLE_L, LESSON_4_MATH_TLE_L,
  LESSON_5_MATH_TLE_L, LESSON_6_MATH_TLE_L, LESSON_7_MATH_TLE_L, LESSON_8_MATH_TLE_L
};

// Type pour les onglets Série Math Terminale
export type MathTleSeriesTab = 'S' | 'L';

export interface MathTleTabOption {
  id: MathTleSeriesTab;
  label: string;
  shortLabel: string;
  badge: string;
  description: string;
  bgActive: string;
  borderActive: string;
  count: number;
}

export const MATH_TLE_TABS: MathTleTabOption[] = [
  {
    id: 'S',
    label: 'Série S (S1 & S2) — Programme Scientifique Approfondi',
    shortLabel: 'Série S (S1 & S2)',
    badge: '13 leçons détaillées',
    description: 'Limites/TVI, Dérivation/TAF, Logarithmes & Exponentielles, Intégrales & Équations différentielles, Nombres Complexes & Similitudes directes, Probabilités & Arithmétique dans Z',
    bgActive: 'bg-blue-600 text-white',
    borderActive: 'border-blue-700',
    count: 13
  },
  {
    id: 'L',
    label: "Série L (L1, L2, L') — Programme Littéraire & Économique",
    shortLabel: "Série L (L1, L2, L')",
    badge: '8 leçons détaillées',
    description: 'Dénombrement, Systèmes 3×3 & Pivot de Gauss, Analyse, Limites & Dérivation, Fonctions ln et exp, Suites & Intérêts composés, Statistiques de Mayer & Probabilités',
    bgActive: 'bg-amber-600 text-white',
    borderActive: 'border-amber-700',
    count: 8
  }
];

// Filtres par pôle / thème pour la Série S
export const MATH_TLE_S_PARTS = [
  { id: 'all', label: 'Toutes les leçons Série S (13 leçons)', count: '13' },
  { id: 'part-1', label: 'Pôle 1 • Analyse Fondamentale : TVI, TAF, Log & Exp (S1 à S4)', count: '4' },
  { id: 'part-2', label: 'Pôle 2 • Calcul Intégral, Équations Différentielles & Suites (S5 à S7)', count: '3' },
  { id: 'part-3', label: 'Pôle 3 • Complexes, Similitudes Directes & Dénombrement (S8 à S10)', count: '3' },
  { id: 'part-4', label: 'Pôle 4 • Probabilités, Géométrie dans l\'Espace & Arithmétique (S11 à S13)', count: '3' }
];

// Filtres par thème pour la Série L
export const MATH_TLE_L_PARTS = [
  { id: 'all', label: 'Toutes les leçons Série L (8 leçons)', count: '8' },
  { id: 'part-1', label: 'Partie 1 • Dénombrement & Systèmes 3×3 (L1 & L2)', count: '2' },
  { id: 'part-2', label: 'Partie 2 • Analyse, Limites, Dérivation & Tangentes (L3 & L4)', count: '2' },
  { id: 'part-3', label: 'Partie 3 • Fonctions Log, Exp & Suites Économiques (L5 & L6)', count: '2' },
  { id: 'part-4', label: 'Partie 4 • Statistiques de Mayer & Calcul des Probabilités (L7 & L8)', count: '2' }
];

// =========================================================================
// LISTE DES COURS MATHÉMATIQUES TERMINALE SÉRIE S (S1 & S2) — 13 LEÇONS
// =========================================================================
export const COURSES_MATH_TLE_S: ContentData[] = [
  // --- PÔLE 1 : ANALYSE FONDAMENTALE (S1 À S4) ---
  {
    id: 'math-tle-s-cours-1',
    title: 'CHAPITRE S1 : LIMITES, CONTINUITÉ ET THÉORÈME DES VALEURS INTERMÉDIAIRES',
    type: 'cours',
    badge: 'Terminale S • Analyse & TVI',
    description: 'Définitions formelles, théorèmes d\'encadrement des gendarmes, continuité, prolongement par continuité, bijections et démonstration du TVI avec dichotomie.',
    lessonData: LESSON_1_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-2',
    title: 'CHAPITRE S2 : DÉRIVATION, THÉORÈME DE ROLLE ET DES ACCROISSEMENTS FINIS',
    type: 'cours',
    badge: 'Terminale S • TAF & Convexité',
    description: 'Dérivabilité ponctuelle, demi-tangentes, théorème de Rolle, théorème et inégalité des accroissements finis (IAF), dérivée seconde, convexité et points d\'inflexion.',
    lessonData: LESSON_2_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-3',
    title: 'CHAPITRE S3 : FONCTIONS LOGARITHMES',
    type: 'cours',
    badge: 'Terminale S • Analyse & ln',
    description: 'Construction analytique de ln, démonstrations intégrales des croissances comparées à l\'infini, logarithme décimal, branches infinies et tracés de courbes.',
    lessonData: LESSON_3_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-4',
    title: 'CHAPITRE S4 : FONCTIONS EXPONENTIELLES ET FONCTIONS PUISSANCES',
    type: 'cours',
    badge: 'Terminale S • Exponentielles',
    description: 'Caractérisation différentielle y\' = y avec y(0) = 1, croissances comparées explosives, exponentielle de base a, puissances x^α et équations différentielles.',
    lessonData: LESSON_4_MATH_TLE_S
  },

  // --- PÔLE 2 : CALCUL INTÉGRAL, ÉQUATIONS DIFFÉRENTIELLES & SUITES (S5 À S7) ---
  {
    id: 'math-tle-s-cours-5',
    title: 'CHAPITRE S5 : PRIMITIVES ET CALCUL INTÉGRAL',
    type: 'cours',
    badge: 'Terminale S • Calcul Intégral & IPP',
    description: 'Théorème fondamental de l\'analyse, primitives usuelles composées, intégrale de Riemann, linéarité, Chasles, intégration par parties (IPP) et calcul d\'aires.',
    lessonData: LESSON_5_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-6',
    title: 'CHAPITRE S6 : ÉQUATIONS DIFFÉRENTIELLES LINÉAIRES',
    type: 'cours',
    badge: 'Terminale S • Équations Différentielles',
    description: 'Équations du 1er ordre y\' + ay = b, équations du 2nd ordre ay\'\' + by\' + cy = 0 avec discriminant Δ, oscillateur harmonique y\'\' + ω²y = 0 et applications physiques.',
    lessonData: LESSON_6_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-7',
    title: 'CHAPITRE S7 : SUITES NUMÉRIQUES RÉELLES ET RÉCURRENCE',
    type: 'cours',
    badge: 'Terminale S • Suites & Point Fixe',
    description: 'Raisonnement par récurrence, convergence monotone, suites adjacentes, et étude complète des suites récurrentes u_(n+1) = f(u_n) avec le théorème du point fixe.',
    lessonData: LESSON_7_MATH_TLE_S
  },

  // --- PÔLE 3 : NOMBRES COMPLEXES, SIMILITUDES DIRECTES & DÉNOMBREMENT (S8 À S10) ---
  {
    id: 'math-tle-s-cours-8',
    title: 'CHAPITRE S8 : NOMBRES COMPLEXES : FORME ALGÉBRIQUE ET TRIGONOMÉTRIQUE',
    type: 'cours',
    badge: 'Terminale S • Nombres Complexes',
    description: 'Corps C, forme algébrique, conjugué, module, argument, forme trigonométrique et exponentielle, formules d\'Euler et de Moivre, résolution du second degré dans C.',
    lessonData: LESSON_8_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-9',
    title: 'CHAPITRE S9 : APPLICATIONS GÉOMÉTRIQUES ET SIMILITUDES DIRECTES',
    type: 'cours',
    badge: 'Terminale S • Similitudes Directes',
    description: 'Affixes, distances, angles orientés, orthogonalité, configurations géométriques, et étude exhaustive des similitudes directes planes s(Ω, k, θ).',
    lessonData: LESSON_9_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-10',
    title: 'CHAPITRE S10 : DÉNOMBREMENT ET COMBINATOIRE AVANCÉE',
    type: 'cours',
    badge: 'Terminale S • Analyse Combinatoire',
    description: 'Ensembles finis, p-listes, arrangements A_n^p, permutations, combinaisons C_n^p, triangle de Pascal, preuve par récurrence du binôme de Newton et partitions.',
    lessonData: LESSON_10_MATH_TLE_S
  },

  // --- PÔLE 4 : PROBABILITÉS, GÉOMÉTRIE DANS L\'ESPACE & ARITHMÉTIQUE (S11 À S13) ---
  {
    id: 'math-tle-s-cours-11',
    title: 'CHAPITRE S11 : CALCUL DES PROBABILITÉS ET VARIABLES ALÉATOIRES',
    type: 'cours',
    badge: 'Terminale S • Probabilités & Bernoulli',
    description: 'Axiomatique de Kolmogorov, probabilités totales, formule de Bayes, variable aléatoire discrète, loi binomiale B(n, p), démonstration de E(X)=np et V(X)=npq.',
    lessonData: LESSON_11_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-12',
    title: 'CHAPITRE S12 : GÉOMÉTRIE VECTORIELLE ET ANALYTIQUE DANS L\'ESPACE',
    type: 'cours',
    badge: 'Terminale S • Géométrie 3D & Espace',
    description: 'Repères orthonormés de l\'espace, produit scalaire, produit vectoriel u ∧ v, équations cartésiennes de plans, représentations paramétriques et distances point-plan.',
    lessonData: LESSON_12_MATH_TLE_S
  },
  {
    id: 'math-tle-s-cours-13',
    title: 'CHAPITRE S13 : ARITHMÉTIQUE DANS L\'ENSEMBLE Z DES ENTIERS RELATIFS',
    type: 'cours',
    badge: 'Terminale S • Arithmétique & Bézout',
    description: 'Divisibilité, division euclidienne, algorithme d\'Euclide, identité de Bézout, théorème de Gauss, équations diophantiennes ax + by = c et petit théorème de Fermat.',
    lessonData: LESSON_13_MATH_TLE_S
  }
];

// =========================================================================
// LISTE DES COURS MATHÉMATIQUES TERMINALE SÉRIE L (L1, L2, L\') — 8 LEÇONS
// =========================================================================
export const COURSES_MATH_TLE_L: ContentData[] = [
  // --- PARTIE 1 : DÉNOMBREMENT & ALGÈBRE LINÉAIRE (L1 & L2) ---
  {
    id: 'math-tle-l-cours-1',
    title: 'CHAPITRE L1 : DÉNOMBREMENT ET ANALYSE COMBINATOIRE',
    type: 'cours',
    badge: 'Terminale L • Dénombrement',
    description: 'Ensembles finis, p-uplets (avec remise), arrangements A_n^p, permutations n!, combinaisons C_n^p, formule du binôme et tirages d\'urnes au Baccalauréat.',
    lessonData: LESSON_1_MATH_TLE_L
  },
  {
    id: 'math-tle-l-cours-2',
    title: 'CHAPITRE L2 : SYSTÈMES LINÉAIRES ET MÉTHODE DU PIVOT DE GAUSS',
    type: 'cours',
    badge: 'Terminale L • Pivot de Gauss 3×3',
    description: 'Résolution méthodique des systèmes de 3 équations linéaires à 3 inconnues par l\'algorithme de triangularisation de Gauss et modélisations économiques.',
    lessonData: LESSON_2_MATH_TLE_L
  },

  // --- PARTIE 2 : ANALYSE, LIMITES & DÉRIVATION (L3 & L4) ---
  {
    id: 'math-tle-l-cours-3',
    title: 'CHAPITRE L3 : LIMITES ET CONTINUITÉ DES FONCTIONS NUMÉRIQUES',
    type: 'cours',
    badge: 'Terminale L • Limites & Asymptotes',
    description: 'Ensembles de définition, calcul des limites, levée des 4 formes indéterminées, asymptotes horizontales, verticales et obliques, continuité et TVI.',
    lessonData: LESSON_3_MATH_TLE_L
  },
  {
    id: 'math-tle-l-cours-4',
    title: 'CHAPITRE L4 : DÉRIVATION ET ÉTUDE DES VARIATIONS DE FONCTIONS',
    type: 'cours',
    badge: 'Terminale L • Dérivation & Variations',
    description: 'Nombre dérivé, interprétation comme pente de la tangente, tableau des dérivées usuelles, sens de variation, extrema locaux et optimisation du bénéfice.',
    lessonData: LESSON_4_MATH_TLE_L
  },

  // --- PARTIE 3 : FONCTIONS LOG, EXP & SUITES ÉCONOMIQUES (L5 & L6) ---
  {
    id: 'math-tle-l-cours-5',
    title: 'CHAPITRE L5 : FONCTIONS LOGARITHME NÉPÉRIEN ET EXPONENTIELLE',
    type: 'cours',
    badge: 'Terminale L • Fonctions ln & exp',
    description: 'Définitions, propriétés algébriques, équations et inéquations, limites remarquables, dérivation et modélisation de placements à intérêts composés.',
    lessonData: LESSON_5_MATH_TLE_L
  },
  {
    id: 'math-tle-l-cours-6',
    title: 'CHAPITRE L6 : SUITES NUMÉRIQUES ET MODÉLISATION FINANCIÈRE',
    type: 'cours',
    badge: 'Terminale L • Suites Numériques',
    description: 'Suites arithmétiques et géométriques, terme général u_n, sommes de termes consécutifs, variations et applications aux tontines et épargnes au Sénégal.',
    lessonData: LESSON_6_MATH_TLE_L
  },

  // --- PARTIE 4 : STATISTIQUES DE MAYER & CALCUL DES PROBABILITÉS (L7 & L8) ---
  {
    id: 'math-tle-l-cours-7',
    title: 'CHAPITRE L7 : STATISTIQUE À DEUX VARIABLES ET AJUSTEMENT LINÉAIRE',
    type: 'cours',
    badge: 'Terminale L • Ajustement de Mayer',
    description: 'Séries statistiques doubles (X, Y), nuage de points, calcul des points moyens partiels G₁ et G₂, droite d\'ajustement de Mayer et prévisions économiques.',
    lessonData: LESSON_7_MATH_TLE_L
  },
  {
    id: 'math-tle-l-cours-8',
    title: 'CHAPITRE L8 : CALCUL DES PROBABILITÉS ET VARIABLES ALÉATOIRES',
    type: 'cours',
    badge: 'Terminale L • Probabilités & Arbres',
    description: 'Équiprobabilité, probabilités conditionnelles, arbres pondérés, formule des probabilités totales, indépendance, variable aléatoire discrète et espérance E(X).',
    lessonData: LESSON_8_MATH_TLE_L
  }
];
