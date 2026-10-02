// =========================================================================
// INDEX CENTRAL DES COURS DE MATHÉMATIQUES CLASSE DE PREMIÈRE (L ET S)
// Conforme aux programmes officiels du Ministère de l'Éducation Nationale (Sénégal)
// Première L (Référentiel APAMS) et Première S (S1 - S2)
// Leçons longues sans résumé, grands axes en chiffres romains et figures obligatoires
// =========================================================================

import { ContentData } from './courses';
import {
  LESSON_1_MATH_1ERE_L,
  LESSON_2_MATH_1ERE_L,
  LESSON_3_MATH_1ERE_L,
  LESSON_4_MATH_1ERE_L,
  LESSON_5_MATH_1ERE_L,
  LESSON_6_MATH_1ERE_L,
  LESSON_7_MATH_1ERE_L,
  LESSON_8_MATH_1ERE_L
} from './courses_1ere_math_l';

import {
  LESSON_1_MATH_1ERE_S,
  LESSON_2_MATH_1ERE_S,
  LESSON_3_MATH_1ERE_S,
  LESSON_4_MATH_1ERE_S,
  LESSON_5_MATH_1ERE_S,
  LESSON_6_MATH_1ERE_S,
  LESSON_7_MATH_1ERE_S
} from './courses_1ere_math_s_part1';

import {
  LESSON_8_MATH_1ERE_S,
  LESSON_9_MATH_1ERE_S,
  LESSON_10_MATH_1ERE_S,
  LESSON_11_MATH_1ERE_S,
  LESSON_12_MATH_1ERE_S,
  LESSON_13_MATH_1ERE_S
} from './courses_1ere_math_s_part2';

import {
  LESSON_14_MATH_1ERE_S,
  LESSON_15_MATH_1ERE_S,
  LESSON_16_MATH_1ERE_S
} from './courses_1ere_math_s_part3';

export {
  LESSON_1_MATH_1ERE_L,
  LESSON_2_MATH_1ERE_L,
  LESSON_3_MATH_1ERE_L,
  LESSON_4_MATH_1ERE_L,
  LESSON_5_MATH_1ERE_L,
  LESSON_6_MATH_1ERE_L,
  LESSON_7_MATH_1ERE_L,
  LESSON_8_MATH_1ERE_L,
  LESSON_1_MATH_1ERE_S,
  LESSON_2_MATH_1ERE_S,
  LESSON_3_MATH_1ERE_S,
  LESSON_4_MATH_1ERE_S,
  LESSON_5_MATH_1ERE_S,
  LESSON_6_MATH_1ERE_S,
  LESSON_7_MATH_1ERE_S,
  LESSON_8_MATH_1ERE_S,
  LESSON_9_MATH_1ERE_S,
  LESSON_10_MATH_1ERE_S,
  LESSON_11_MATH_1ERE_S,
  LESSON_12_MATH_1ERE_S,
  LESSON_13_MATH_1ERE_S,
  LESSON_14_MATH_1ERE_S,
  LESSON_15_MATH_1ERE_S,
  LESSON_16_MATH_1ERE_S
};

// ---------------------------------------------------------
// ONGLETS SÉRIES POUR MATHÉMATIQUES PREMIÈRE (L et S)
// ---------------------------------------------------------
export type Math1ereSeriesTab = 'L' | 'S';

export interface Math1ereTabInfo {
  id: Math1ereSeriesTab;
  title: string;
  shortLabel: string;
  badge: string;
  count: number;
  desc: string;
  color: string;
  bgActive: string;
  borderActive: string;
}

export const MATH_1ERE_TABS: Math1ereTabInfo[] = [
  {
    id: 'L',
    title: 'Série L (Littéraire L1 & L2)',
    shortLabel: 'Série L',
    badge: '8 chapitres complets APAMS',
    count: 8,
    desc: 'Systèmes de Gauss, polynômes, limites/dérivées, études de fonctions, suites arithmétiques/géométriques, ajustement de Mayer et dénombrement',
    color: 'amber',
    bgActive: 'bg-amber-600 text-white',
    borderActive: 'border-amber-600 ring-2 ring-amber-500/20'
  },
  {
    id: 'S',
    title: 'Série S (Sciences S1 & S2)',
    shortLabel: 'Série S',
    badge: '16 chapitres approfondis',
    count: 16,
    desc: 'Analyse (limites, dérivation, fonctions circulaires, primitives, suites), Géométrie (barycentres, produit scalaire, Al-Kashi, lignes de niveau, espace), Probabilités et Régression linéaire',
    color: 'blue',
    bgActive: 'bg-blue-600 text-white',
    borderActive: 'border-blue-600 ring-2 ring-blue-500/20'
  }
];

// Filtres de parties pour Série L
export const MATH_1ERE_L_PARTS = [
  { id: 'all', label: 'Tous les chapitres (8)', count: 8 },
  { id: 'algebre', label: 'Algèbre & Systèmes (Ch. 1-2)', count: 2 },
  { id: 'analyse', label: 'Analyse & Dérivation (Ch. 3-4)', count: 2 },
  { id: 'suites_stats', label: 'Suites, Mayer & Combinatoire (Ch. 5-8)', count: 4 }
];

// Filtres de pôles pour Série S
export const MATH_1ERE_S_PARTS = [
  { id: 'all', label: 'Tous les chapitres (16)', count: 16 },
  { id: 'analyse', label: 'Pôle Analyse & Suites (Ch. S1-S7)', count: 7 },
  { id: 'geometrie', label: 'Pôle Géométrie & Trigonométrie (Ch. S8-S13)', count: 6 },
  { id: 'proba', label: 'Pôle Probabilités & Statistiques (Ch. S14-S16)', count: 3 }
];

// ---------------------------------------------------------
// TABLEAU DES COURS SÉRIE L (8 CHAPITRES)
// ---------------------------------------------------------
export const COURSES_MATH_1ERE_L_LIST: ContentData[] = [
  {
    id: 'math-1ere-l-cours-1',
    title: 'CHAPITRE 1 : SYSTÈMES D’ÉQUATIONS, D’INÉQUATIONS ET PROGRAMMATION LINÉAIRE',
    type: 'cours',
    badge: 'Série L • Algèbre & Systèmes',
    duration: '45 min de lecture',
    description: 'Méthode du pivot de Gauss pour systèmes linéaires 3×3, inéquations, délimitation de la région admissible et optimisation linéaire aux sommets.',
    link: '#',
    lessonData: LESSON_1_MATH_1ERE_L
  },
  {
    id: 'math-1ere-l-cours-2',
    title: 'CHAPITRE 2 : POLYNÔMES, FACTORISATION ET SIGNE DU TRINÔME DU SECOND DEGRÉ',
    type: 'cours',
    badge: 'Série L • Algèbre & Systèmes',
    duration: '45 min de lecture',
    description: 'Polynômes réels de degré n ≤ 4, factorisation par (x - α), discriminant Δ, signe du trinôme, parabole et inéquations polynomiales.',
    link: '#',
    lessonData: LESSON_2_MATH_1ERE_L
  },
  {
    id: 'math-1ere-l-cours-3',
    title: 'CHAPITRE 3 : LIMITES, CONTINUITÉ ET DÉRIVABILITÉ DES FONCTIONS',
    type: 'cours',
    badge: 'Série L • Analyse & Dérivation',
    duration: '45 min de lecture',
    description: 'Comportement à l’infini, limites des polynômes et quotients, continuité, nombre dérivé comme pente de tangente et règles de dérivation.',
    link: '#',
    lessonData: LESSON_3_MATH_1ERE_L
  },
  {
    id: 'math-1ere-l-cours-4',
    title: 'CHAPITRE 4 : ÉTUDE DES FONCTIONS POLYNÔMES ET HOMOGRAPHIQUES',
    type: 'cours',
    badge: 'Série L • Analyse & Dérivation',
    duration: '45 min de lecture',
    description: 'Plan d’étude d’une fonction en 7 étapes : domaine, parité, limites, dérivée, variations, asymptotes et tracés de la parabole et de l’hyperbole.',
    link: '#',
    lessonData: LESSON_4_MATH_1ERE_L
  },
  {
    id: 'math-1ere-l-cours-5',
    title: 'CHAPITRE 5 : SUITES ARITHMÉTIQUES, SUITES GÉOMÉTRIQUES ET APPLICATIONS FINANCIÈRES',
    type: 'cours',
    badge: 'Série L • Suites & Statistiques',
    duration: '45 min de lecture',
    description: 'Suites par formule explicite et récurrence, suites arithmétiques et géométriques, somme des termes et modélisation d’une épargne en Francs CFA.',
    link: '#',
    lessonData: LESSON_5_MATH_1ERE_L
  },
  {
    id: 'math-1ere-l-cours-6',
    title: 'CHAPITRE 6 : STATISTIQUE À DEUX VARIABLES ET AJUSTEMENT LINÉAIRE DE MAYER',
    type: 'cours',
    badge: 'Série L • Suites & Statistiques',
    duration: '45 min de lecture',
    description: 'Séries doubles, nuage de points, partition en deux sous-groupes, points moyens G₁ et G₂, calcul de la droite de Mayer y = ax + b et prévisions.',
    link: '#',
    lessonData: LESSON_6_MATH_1ERE_L
  },
  {
    id: 'math-1ere-l-cours-7',
    title: 'CHAPITRE 7 : DÉNOMBREMENT, ARRANGEMENTS, COMBINAISONS ET BINÔME DE NEWTON',
    type: 'cours',
    badge: 'Série L • Suites & Statistiques',
    duration: '45 min de lecture',
    description: 'Principes additifs et multiplicatifs, factorielle n!, arrangements A_n^p, combinaisons C_n^p, triangle de Pascal et formule du binôme de Newton.',
    link: '#',
    lessonData: LESSON_7_MATH_1ERE_L
  },
  {
    id: 'math-1ere-l-cours-8',
    title: 'CHAPITRE 8 : SÉRIE OFFICIELLE D’EXERCICES DE SYNTHÈSE RÉSOLUS (PREMIÈRE L)',
    type: 'cours',
    badge: 'Série L • Synthèse & Évaluations',
    duration: '50 min d’entraînement',
    description: 'Résolution détaillée pas à pas des 6 exercices de synthèse du référentiel officiel APAMS : Gauss, factorisation, étude cubique, épargne, Mayer et combinatoire.',
    link: '#',
    lessonData: LESSON_8_MATH_1ERE_L
  }
];

// ---------------------------------------------------------
// TABLEAU DES COURS SÉRIE S (16 CHAPITRES S1 & S2)
// ---------------------------------------------------------
export const COURSES_MATH_1ERE_S_LIST: ContentData[] = [
  // PÔLE ANALYSE & SUITES (S1 - S7)
  {
    id: 'math-1ere-s-cours-1',
    title: 'CHAPITRE S-1 : GÉNÉRALITÉS SUR LES FONCTIONS NUMÉRIQUES',
    type: 'cours',
    badge: 'Pôle Analyse • Fonctions',
    duration: '45 min de lecture',
    description: 'Ensembles de définition, éléments de symétrie (parité, axes x = a et centres Ω(a, b)), fonctions bornées, et opération de composition g ∘ f.',
    link: '#',
    lessonData: LESSON_1_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-2',
    title: 'CHAPITRE S-2 : ÉQUATIONS ET INÉQUATIONS DU SECOND DEGRÉ & SYSTÈMES',
    type: 'cours',
    badge: 'Pôle Analyse • Fonctions',
    duration: '45 min de lecture',
    description: 'Discriminant Δ, discriminant réduit Δ\', relations de Viète (somme S et produit P), équations bicarrées, changement de variable et équations irrationnelles.',
    link: '#',
    lessonData: LESSON_2_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-3',
    title: 'CHAPITRE S-3 : LIMITES DE FONCTIONS ET CONTINUITÉ SUR UN INTERVALLE',
    type: 'cours',
    badge: 'Pôle Analyse • Limites',
    duration: '50 min de lecture',
    description: 'Levée des 4 formes indéterminées, théorème des gendarmes, limites trigonométriques remarquables, continuité et Théorème des Valeurs Intermédiaires (TVI).',
    link: '#',
    lessonData: LESSON_3_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-4',
    title: 'CHAPITRE S-4 : DÉRIVATION, ÉTUDE DE FONCTIONS ET BRANCHES INFINIES',
    type: 'cours',
    badge: 'Pôle Analyse • Dérivation',
    duration: '50 min de lecture',
    description: 'Nombre dérivé, dérivation des composées (uⁿ, √u, 1/u), extremums locaux, point d’inflexion, asymptotes obliques y = ax + b et étude complète de fonctions.',
    link: '#',
    lessonData: LESSON_4_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-5',
    title: 'CHAPITRE S-5 : FONCTIONS CIRCULAIRES TRIGONOMÉTRIQUES (SIN, COS, TAN)',
    type: 'cours',
    badge: 'Pôle Analyse • Trigonométrie',
    duration: '45 min de lecture',
    description: 'Étude des fonctions sinus, cosinus et tangente : périodicité 2π et π, parités, dérivées trigonométriques, tableaux de variations et sinusoïdes.',
    link: '#',
    lessonData: LESSON_5_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-6',
    title: 'CHAPITRE S-6 : PRIMITIVES D’UNE FONCTION CONTINUE ET INTÉGRATION',
    type: 'cours',
    badge: 'Pôle Analyse • Primitives',
    duration: '45 min de lecture',
    description: 'Définition d’une primitive, ensemble des primitives F(x) + C, tableau des primitives usuelles et composées, condition initiale F(x₀) = y₀ et calculs d’aires.',
    link: '#',
    lessonData: LESSON_6_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-7',
    title: 'CHAPITRE S-7 : SUITES NUMÉRIQUES RÉELLES ET CONVERGENCE',
    type: 'cours',
    badge: 'Pôle Analyse • Suites',
    duration: '50 min de lecture',
    description: 'Raisonnement par récurrence, sens de variation, suites bornées, suites arithmétiques et géométriques, théorème de convergence monotone et point fixe.',
    link: '#',
    lessonData: LESSON_7_MATH_1ERE_S
  },

  // PÔLE GÉOMÉTRIE & TRIGONOMÉTRIE (S8 - S13)
  {
    id: 'math-1ere-s-cours-8',
    title: 'CHAPITRE S-8 : CALCUL VECTORIEL ET BARYCENTRES DANS LE PLAN ET L’ESPACE',
    type: 'cours',
    badge: 'Pôle Géométrie • Barycentres',
    duration: '50 min de lecture',
    description: 'Définition du barycentre de n points, réduction vectorielle, associativité (barycentre partiel), coordonnées cartésiennes et centre de gravité d’un triangle.',
    link: '#',
    lessonData: LESSON_8_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-9',
    title: 'CHAPITRE S-9 : PRODUIT SCALAIRE ET RELATIONS MÉTRIQUES DANS LE TRIANGLE',
    type: 'cours',
    badge: 'Pôle Géométrie • Produit Scalaire',
    duration: '50 min de lecture',
    description: 'Expressions du produit scalaire, orthogonalité, théorème d’Al-Kashi (Carnot), théorème de la médiane, formule des sinus et calcul de l’aire d’un triangle.',
    link: '#',
    lessonData: LESSON_9_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-10',
    title: 'CHAPITRE S-10 : LIGNES DE NIVEAU ASSOCIÉES AU PRODUIT SCALAIRE ET AU BARYCENTRE',
    type: 'cours',
    badge: 'Pôle Géométrie • Lignes de Niveau',
    duration: '45 min de lecture',
    description: 'Ensembles de points vérifiant MA · MB = k, MA² + MB² = k, MA² - MB² = k, et cercles d’Apollonius MA/MB = k. Réductions barycentriques et médianes.',
    link: '#',
    lessonData: LESSON_10_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-11',
    title: 'CHAPITRE S-11 : ANGLES ORIENTÉS ET TRIGONOMÉTRIE FONDAMENTALE',
    type: 'cours',
    badge: 'Pôle Géométrie • Trigonométrie',
    duration: '50 min de lecture',
    description: 'Mesures en radians, formules d’addition, formules de duplication, linéarisation, factorisation de sommes et résolution des équations a cos x + b sin x = c.',
    link: '#',
    lessonData: LESSON_11_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-12',
    title: 'CHAPITRE S-12 : TRANSFORMATIONS DU PLAN : HOMOTHÉTIES, TRANSLATIONS ET ROTATIONS',
    type: 'cours',
    badge: 'Pôle Géométrie • Transformations',
    duration: '45 min de lecture',
    description: 'Isométries et homothéties : caractérisations géométriques, invariants et propriétés de conservation (alignement, barycentre, distances, angles, aires).',
    link: '#',
    lessonData: LESSON_12_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-13',
    title: 'CHAPITRE S-13 : GÉOMÉTRIE DANS L’ESPACE : DROITES, PLANS ET VECTEURS',
    type: 'cours',
    badge: 'Pôle Géométrie • Espace',
    duration: '45 min de lecture',
    description: 'Positions relatives de droites et de plans, orthogonalité d’une droite et d’un plan, vecteurs de l’espace et produit scalaire spatial.',
    link: '#',
    lessonData: LESSON_13_MATH_1ERE_S
  },

  // PÔLE PROBABILITÉS & STATISTIQUES (S14 - S16)
  {
    id: 'math-1ere-s-cours-14',
    title: 'CHAPITRE S-14 : DÉNOMBREMENT ET ANALYSE COMBINATOIRE APPROFONDIE',
    type: 'cours',
    badge: 'Pôle Probabilités • Combinatoire',
    duration: '45 min de lecture',
    description: 'Techniques de comptage en ensembles finis : p-listes (nᵖ), arrangements A_n^p, permutations n!, combinaisons C_n^p, triangle de Pascal et binôme de Newton.',
    link: '#',
    lessonData: LESSON_14_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-15',
    title: 'CHAPITRE S-15 : CALCUL DES PROBABILITÉS ET VARIABLES ALÉATOIRES',
    type: 'cours',
    badge: 'Pôle Probabilités • Lois',
    duration: '50 min de lecture',
    description: 'Probabilités conditionnelles P_B(A), arbres pondérés, indépendance, formule des probabilités totales, variables aléatoires discrètes et loi binomiale B(n, p).',
    link: '#',
    lessonData: LESSON_15_MATH_1ERE_S
  },
  {
    id: 'math-1ere-s-cours-16',
    title: 'CHAPITRE S-16 : STATISTIQUE À DEUX VARIABLES ET RÉGRESSION LINÉAIRE DES MOINDRES CARRÉS',
    type: 'cours',
    badge: 'Pôle Probabilités • Régression',
    duration: '45 min de lecture',
    description: 'Séries doubles, point moyen G(x̄, ȳ), covariance Cov(X,Y), droite de régression linéaire de y en x par les moindres carrés et coefficient de corrélation r de Pearson.',
    link: '#',
    lessonData: LESSON_16_MATH_1ERE_S
  }
];

// Tous les cours Mathématiques 1ère combinés
export const COURSES_MATH_1ERE_ALL: ContentData[] = [
  ...COURSES_MATH_1ERE_L_LIST,
  ...COURSES_MATH_1ERE_S_LIST
];
