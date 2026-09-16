import { ContentData } from './courses';
import {
  LESSON_1_MATH_6EME,
  LESSON_2_MATH_6EME,
  LESSON_3_MATH_6EME,
  LESSON_4_MATH_6EME,
  LESSON_5_MATH_6EME
} from './courses_6eme_math_part1';
import {
  LESSON_6_MATH_6EME,
  LESSON_7_MATH_6EME,
  LESSON_8_MATH_6EME
} from './courses_6eme_math_part2';
import {
  LESSON_9_MATH_6EME,
  LESSON_10_MATH_6EME,
  LESSON_11_MATH_6EME,
  LESSON_12_MATH_6EME
} from './courses_6eme_math_part3';
import { LESSON_13_MATH_6EME } from './courses_6eme_math_part4';

export const MATH_6EME_FILTER_CHAPTERS = [
  { id: 'all', label: 'Toutes les leçons', count: 13 },
  { id: 'chap1', label: 'Chapitre I : Entiers & Décimaux (1 à 5)', count: 5 },
  { id: 'chap2', label: 'Chapitre II : Fractions (6 à 8)', count: 3 },
  { id: 'chap3', label: 'Chapitre III : Opérations (9 à 12)', count: 4 },
  { id: 'chap4', label: 'Chapitre IV : Proportionnalité (13)', count: 1 }
];

export const COURSES_MATH_6EME: ContentData[] = [
  // =========================================================================
  // CHAPITRE I : NUMÉRATION ET ÉTUDE DES NOMBRES ENTIERS ET DÉCIMAUX (1 À 5)
  // =========================================================================
  {
    id: 'math-6eme-lecon-1',
    title: 'LEÇON 1 : LES NOMBRES ENTIERS NATURELS — LECTURE, ÉCRITURE ET POSITION',
    type: 'cours',
    badge: 'Chapitre I • Numération officielle',
    description:
      'Fondements du système décimal et positionnel, règles d’écriture des grands nombres par tranches de 3 chiffres, tableau de numération (unités, milliers, millions, milliards) et distinction chiffre du rang vs nombre de rangs.',
    lessonData: LESSON_1_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-2',
    title: 'LEÇON 2 : DÉFINITION, STRUCTURE ET ÉCRITURE DES NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre I • Décimaux',
    description:
      'Structure rigoureuse (partie entière et partie décimale), rangs des dixièmes (1/10), centièmes (1/100) et millièmes (1/1000), 3 modes de décompositions et règle d’or des zéros inutiles.',
    lessonData: LESSON_2_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-3',
    title: 'LEÇON 3 : COMPARAISON, RANGEMENT ET ENCADREMENT DES NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre I • Décimaux',
    description:
      'Méthode universelle en 2 étapes, déjouer le piège visuel de 8,3 vs 8,25 par égalisation des zéros, rangement par ordre croissant/décroissant, encadrements à l’unité, au dixième et intercalation décimale.',
    lessonData: LESSON_3_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-4',
    title: 'LEÇON 4 : VALEURS APPROCHÉES — TRONCATURE ET ARRONDI D\'UN DÉCIMAL',
    type: 'cours',
    badge: 'Chapitre I • Valeurs approchées',
    description:
      'Technique de la troncature par défaut, règle de l’arrondi au plus proche selon le chiffre suivant (seuil critique de 5), tableau comparatif sur 15,783 et cas particulier des retenues en cascade avec le chiffre 9 (ex : 4,96 ➔ 5,0).',
    lessonData: LESSON_4_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-5',
    title: 'LEÇON 5 : REPÉRAGE SUR UNE DEMI-DROITE GRADUÉE ET LECTURE D\'ABSCISSES',
    type: 'cours',
    badge: 'Chapitre I • Demi-droite graduée',
    description:
      'Les 3 éléments obligatoires (origine O, sens fléché, unité régulière), calcul du pas de sous-graduation (0,1), repérage formel A(1,4) et schématisation graphique vectorielle.',
    lessonData: LESSON_5_MATH_6EME
  },

  // =========================================================================
  // CHAPITRE II : ÉCRITURES FRACTIONNAIRES (6 À 8)
  // =========================================================================
  {
    id: 'math-6eme-lecon-6',
    title: 'LEÇON 6 : NOTION DE PARTAGE GLOBAL ET VOCABULAIRE DES FRACTIONS',
    type: 'cours',
    badge: 'Chapitre II • Fractions',
    description:
      'Définition mathématique du quotient de deux entiers, rôles respectifs du numérateur a et du dénominateur non nul b, représentation géométrique sur disque découpé (3/4) et règles orales (demi, tiers, quart, -ième).',
    lessonData: LESSON_6_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-7',
    title: 'LEÇON 7 : FRACTIONS DÉCIMALES ET PASSAGES À L\'ÉCRITURE À VIRGULE',
    type: 'cours',
    badge: 'Chapitre II • Fractions décimales',
    description:
      'Définition d’une fraction décimale (puissances de 10), règle de décalage de la virgule vers la gauche selon les zéros, conversion inverse sans virgule (ex : 12,854 = 12 854 / 1 000) et pièges des zéros de positionnement.',
    lessonData: LESSON_7_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-8',
    title: 'LEÇON 8 : ÉGALITÉ DE FRACTIONS ET TECHNIQUES DE SIMPLIFICATION',
    type: 'cours',
    badge: 'Chapitre II • Simplification & Équivalence',
    description:
      'Propriété fondamentale des quotients (multiplication et division par k non nul), critères de divisibilité (2, 3, 5, 9, 10), simplification pas-à-pas de 24/36 vers la fraction irréductible 2/3 et réduction au même dénominateur.',
    lessonData: LESSON_8_MATH_6EME
  },

  // =========================================================================
  // CHAPITRE III : LES OPÉRATIONS MATHÉMATIQUES ET TECHNIQUES OPÉRATOIRES (9 À 12)
  // =========================================================================
  {
    id: 'math-6eme-lecon-9',
    title: 'LEÇON 9 : L\'ADDITION ET LA SOUSTRACTION DE NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre III • Calcul posé décimal',
    description:
      'Règle d’or d’alignement vertical des virgules, comblement par des zéros de calcul, décomposition intégrale de la soustraction posée 45,20 – 7,85 = 37,35 avec gestion rigoureuse des retenues.',
    lessonData: LESSON_9_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-10',
    title: 'LEÇON 10 : LA MULTIPLICATION DE NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre III • Multiplication décimale',
    description:
      'Calcul brut sans les virgules (245 × 13 = 3 185), cumul des décimales (2 + 1 = 3 décimales ➔ 3,185), règles d’accélération par décalage de virgule (× 10, 100, 1 000 à droite ; × 0,1 ; 0,01 à gauche).',
    lessonData: LESSON_10_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-11',
    title: 'LEÇON 11 : LA DIVISION EUCLIDIENNE — THÉORIE ET CALCUL EN POTENCE',
    type: 'cours',
    badge: 'Chapitre III • Division euclidienne',
    description:
      'Définition des 4 acteurs (dividende, diviseur, quotient, reste), condition obligatoire Reste < Diviseur, tracé de la potence de 158 par 6 (q = 26, r = 2), et équation fondamentale de contrôle : 158 = (6 × 26) + 2.',
    lessonData: LESSON_11_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-12',
    title: 'LEÇON 12 : LA DIVISION DÉCIMALE DE DEUX NOMBRES',
    type: 'cours',
    badge: 'Chapitre III • Division décimale',
    description:
      'Algorithme de la bascule décimale immédiate dès la fin des entiers, cas d’un quotient décimal exact (45 ÷ 4 = 11,25), et traitement des quotients infinis périodiques (10 ÷ 3 = 3,333...) avec valeurs approchées encadrées.',
    lessonData: LESSON_12_MATH_6EME
  },

  // =========================================================================
  // CHAPITRE IV : PROPORTIONNALITÉ ET GESTION DE DONNÉES (13)
  // =========================================================================
  {
    id: 'math-6eme-lecon-13',
    title: 'LEÇON 13 : PROPORTIONNALITÉ, TABLEAUX ET POURCENTAGES',
    type: 'cours',
    badge: 'Chapitre IV • Proportionnalité & Pourcentages',
    description:
      'Reconnaissance de grandeurs proportionnelles, calcul explicite du coefficient multiplicateur et passage à l’unité (cahiers à 2 €), propriétés multiplicatives et additives, et application directe aux remises et pourcentages (remise de 15 % sur 80 € = 68 €).',
    lessonData: LESSON_13_MATH_6EME
  },

  // =========================================================================
  // RESSOURCES PÉDAGOGIQUES ET EVALUATIONS OFFICIELLES
  // =========================================================================
  {
    id: 'pdf-manuel-math-6eme-integral',
    title: 'Guide Pédagogique Intégral PDF : Mathématiques 6ème — Activités Numériques',
    type: 'ressource',
    badge: 'Manuel officiel complet',
    description:
      'Fascicule complet officiel regroupant les 13 leçons exhaustives développées sans résumé, avec schémas explicatifs, tableaux de position, potences de division et exemples pas-à-pas.',
    link: '#'
  },
  {
    id: 'pdf-exercices-math-6eme-numerique',
    title: 'Recueil d\'exercices résolus & Évaluations sommatives — Activités Numériques 6ème',
    type: 'ressource',
    badge: 'Évaluation & corrigé',
    description:
      'Banque d’exercices d’application directe avec corrigés détaillés : décomposition des décimaux, encadrements, conversions fractions-décimaux, opérations posées en colonnes et problèmes de proportionnalité commerciale.',
    link: '#'
  }
];
