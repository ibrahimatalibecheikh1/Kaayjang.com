import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_MATH_5EME,
  LESSON_2_MATH_5EME,
  LESSON_3_MATH_5EME,
  LESSON_4_MATH_5EME
} from './courses_5eme_math_part1';
import {
  LESSON_5_MATH_5EME,
  LESSON_6_MATH_5EME,
  LESSON_7_MATH_5EME
} from './courses_5eme_math_part2';
import {
  LESSON_8_MATH_5EME,
  LESSON_9_MATH_5EME,
  LESSON_10_MATH_5EME
} from './courses_5eme_math_part3';
import {
  LESSON_11_MATH_5EME,
  LESSON_12_MATH_5EME
} from './courses_5eme_math_part4';

export {
  LESSON_1_MATH_5EME,
  LESSON_2_MATH_5EME,
  LESSON_3_MATH_5EME,
  LESSON_4_MATH_5EME,
  LESSON_5_MATH_5EME,
  LESSON_6_MATH_5EME,
  LESSON_7_MATH_5EME,
  LESSON_8_MATH_5EME,
  LESSON_9_MATH_5EME,
  LESSON_10_MATH_5EME,
  LESSON_11_MATH_5EME,
  LESSON_12_MATH_5EME
};

export const MATH_5EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '12' },
  { id: 'geometrie', label: 'Activités Géométriques', count: '5' },
  { id: 'numerique', label: 'Activités Numériques', count: '7' },
  { id: 'num-operations', label: 'Numérique : Priorités, Diviseurs & Fractions', count: '3' },
  { id: 'num-algebre', label: 'Numérique : Relatifs, Puissances & Équations', count: '3' },
  { id: 'geom-plane', label: 'Géométrie : Symétrie, Angles & Triangles', count: '3' },
  { id: 'geom-quad-espace', label: 'Géométrie : Parallélogrammes & Espace', count: '2' }
];

export const COURSES_MATH_5EME: ContentData[] = [
  // =========================================================================
  // ACTIVITÉS GÉOMÉTRIQUES (5 LEÇONS AVEC FIGURES VECTORIELLES OBLIGATOIRES)
  // =========================================================================
  {
    id: 'math-5eme-lecon-8',
    title: 'LEÇON 8 : LA SYMÉTRIE CENTRALE (FIGURE 1)',
    type: 'cours',
    badge: 'Act. Géométriques - Symétrie & Plan',
    description: 'Définition géométrique par le milieu (Figure 1), demi-tour de 180°, conservation rigoureuse des longueurs, angles et aires, recherche de centres de symétrie et 4 exercices corrigés.',
    lessonData: LESSON_8_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-9',
    title: 'LEÇON 9 : LES ANGLES (FIGURE 2)',
    type: 'cours',
    badge: 'Act. Géométriques - Angles & Parallèles',
    description: 'Angles opposés par le sommet, angles alternes-internes et correspondants formés par deux parallèles et une sécante (Figure 2), réciproque pour prouver le parallélisme et 4 exercices complets.',
    lessonData: LESSON_9_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-10',
    title: 'LEÇON 10 : LES TRIANGLES (FIGURE 3)',
    type: 'cours',
    badge: 'Act. Géométriques - Triangles',
    description: 'Inégalité triangulaire et constructibilité, somme universelle des angles égale à 180° (Figure 3), médiatrices, hauteurs, bissectrices, médianes et 4 exercices d\'application corrigés.',
    lessonData: LESSON_10_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-11',
    title: 'LEÇON 11 : LES PARALLÉLOGRAMMES (FIGURE 4)',
    type: 'cours',
    badge: 'Act. Géométriques - Quadrilatères',
    description: 'Définition et propriétés caractéristiques des diagonales se coupant en leur milieu (Figure 4), côtés opposés, parallélogrammes particuliers (rectangle, losange, carré), aire et 4 exercices résolus.',
    lessonData: LESSON_11_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-12',
    title: 'LEÇON 12 : GÉOMÉTRIE D\'ESPACE, PRISME DROIT & CYLINDRE (FIGURE 5)',
    type: 'cours',
    badge: 'Act. Géométriques - Espace 3D',
    description: 'Perspective cavalière, prismes droits, cylindre de révolution et déroulement de son patron en rectangle 2πR (Figure 5), formules d\'aire latérale et de volume V = B × h, avec 4 exercices pas-à-pas.',
    lessonData: LESSON_12_MATH_5EME
  },

  // =========================================================================
  // ACTIVITÉS NUMÉRIQUES (7 LEÇONS APPROFONDIES AVEC 4 EXERCICES CHACUNE)
  // =========================================================================
  {
    id: 'math-5eme-lecon-1',
    title: 'LEÇON 1 : PRIORITÉS OPÉRATOIRES ET ENCHAÎNEMENT D\'OPÉRATIONS',
    type: 'cours',
    badge: 'Act. Numériques - Priorités',
    description: 'Arbre hiérarchique des opérations, priorité absolue des parenthèses les plus internes, multiplications et divisions de gauche à droite, barre de fraction et 4 exercices corrigés.',
    lessonData: LESSON_1_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-2',
    title: 'LEÇON 2 : MULTIPLES, DIVISEURS ET NOMBRES PREMIERS',
    type: 'cours',
    badge: 'Act. Numériques - Arithmétique',
    description: 'Critères de divisibilité par 2, 3, 4, 5, 9 et 10, définition des nombres premiers, méthode par divisions successives pour décomposer en produit de facteurs premiers et 4 exercices détaillés.',
    lessonData: LESSON_2_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-3',
    title: 'LEÇON 3 : ÉCRITURES FRACTIONNAIRES',
    type: 'cours',
    badge: 'Act. Numériques - Fractions',
    description: 'Règle fondamentale d\'égalité et fractions irréductibles, mise obligatoire au même dénominateur pour addition et soustraction, multiplication directe simplifiée et 4 exercices d\'application.',
    lessonData: LESSON_3_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-4',
    title: 'LEÇON 4 : NOMBRES RELATIFS',
    type: 'cours',
    badge: 'Act. Numériques - Relatifs',
    description: 'Repérage sur axe orienté, distance à zéro, comparaison ordonnée, addition de même signe ou signe contraire, règle reine de la soustraction par addition de l\'opposé et 4 exercices complets.',
    lessonData: LESSON_4_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-5',
    title: 'LEÇON 5 : INITIATION AUX PUISSANCES',
    type: 'cours',
    badge: 'Act. Numériques - Puissances',
    description: 'Définition a^n comme produit répété, puissances de 10 et système métrique, règles a^m × a^n = a^(m+n), priorité opératoire sur les facteurs et 4 exercices d\'entraînement résolus.',
    lessonData: LESSON_5_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-6',
    title: 'LEÇON 6 : CALCUL LITTÉRAL ET ÉQUATIONS',
    type: 'cours',
    badge: 'Act. Numériques - Algèbre',
    description: 'Expressions littérales, simple distributivité géométrique k(a+b) = ka + kb, développement, factorisation, réduction de termes semblables, équations du 1er degré et 4 exercices corrigés.',
    lessonData: LESSON_6_MATH_5EME
  },
  {
    id: 'math-5eme-lecon-7',
    title: 'LEÇON 7 : PROPORTIONNALITÉ ET GESTION DE DONNÉES',
    type: 'cours',
    badge: 'Act. Numériques - Données & Stats',
    description: 'Coefficient k, produit en croix pour la quatrième proportionnelle, pourcentages, échelles réelles, tableaux statistiques, fréquences et diagrammes avec 4 exercices d\'application concrets.',
    lessonData: LESSON_7_MATH_5EME
  }
];

export const MATH_5EME_ALL_LESSONS: Record<string, LessonContent> = {
  'math-5eme-lecon-1': LESSON_1_MATH_5EME,
  'math-5eme-lecon-2': LESSON_2_MATH_5EME,
  'math-5eme-lecon-3': LESSON_3_MATH_5EME,
  'math-5eme-lecon-4': LESSON_4_MATH_5EME,
  'math-5eme-lecon-5': LESSON_5_MATH_5EME,
  'math-5eme-lecon-6': LESSON_6_MATH_5EME,
  'math-5eme-lecon-7': LESSON_7_MATH_5EME,
  'math-5eme-lecon-8': LESSON_8_MATH_5EME,
  'math-5eme-lecon-9': LESSON_9_MATH_5EME,
  'math-5eme-lecon-10': LESSON_10_MATH_5EME,
  'math-5eme-lecon-11': LESSON_11_MATH_5EME,
  'math-5eme-lecon-12': LESSON_12_MATH_5EME
};
