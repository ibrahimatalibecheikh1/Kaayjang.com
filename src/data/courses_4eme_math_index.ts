import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_MATH_4EME,
  LESSON_2_MATH_4EME,
  LESSON_3_MATH_4EME,
  LESSON_4_MATH_4EME
} from './courses_4eme_math_part1';
import {
  LESSON_5_MATH_4EME,
  LESSON_6_MATH_4EME,
  LESSON_7_MATH_4EME,
  LESSON_8_MATH_4EME
} from './courses_4eme_math_part2';
import {
  LESSON_9_MATH_4EME,
  LESSON_10_MATH_4EME,
  LESSON_11_MATH_4EME,
  LESSON_12_MATH_4EME
} from './courses_4eme_math_part3';
import {
  LESSON_1_GEOM_4EME,
  LESSON_2_GEOM_4EME,
  LESSON_3_GEOM_4EME,
  LESSON_4_GEOM_4EME
} from './courses_4eme_math_geom_part1';
import {
  LESSON_5_GEOM_4EME,
  LESSON_6_GEOM_4EME,
  LESSON_7_GEOM_4EME
} from './courses_4eme_math_geom_part2';

export {
  LESSON_1_MATH_4EME,
  LESSON_2_MATH_4EME,
  LESSON_3_MATH_4EME,
  LESSON_4_MATH_4EME,
  LESSON_5_MATH_4EME,
  LESSON_6_MATH_4EME,
  LESSON_7_MATH_4EME,
  LESSON_8_MATH_4EME,
  LESSON_9_MATH_4EME,
  LESSON_10_MATH_4EME,
  LESSON_11_MATH_4EME,
  LESSON_12_MATH_4EME,
  LESSON_1_GEOM_4EME,
  LESSON_2_GEOM_4EME,
  LESSON_3_GEOM_4EME,
  LESSON_4_GEOM_4EME,
  LESSON_5_GEOM_4EME,
  LESSON_6_GEOM_4EME,
  LESSON_7_GEOM_4EME
};

export const MATH_4EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '19' },
  { id: 'geometrie', label: 'Activités Géométriques', count: '7' },
  { id: 'numerique', label: 'Activités Numériques', count: '12' },
  { id: 'geom-pythagore-trigo', label: 'Géométrie : Pythagore & Cosinus', count: '3' },
  { id: 'geom-thales-milieux', label: 'Géométrie : Thalès & Milieux', count: '2' },
  { id: 'geom-translation-espace', label: 'Géométrie : Translation & Espace', count: '2' },
  { id: 'theme-1', label: 'Numérique : Relatifs & Rationnels', count: '4' },
  { id: 'theme-2', label: 'Numérique : Puissances & Algèbre', count: '4' },
  { id: 'theme-3', label: 'Numérique : Équations, Vitesses & Stats', count: '4' }
];

export const COURSES_MATH_4EME: ContentData[] = [
  // =========================================================================
  // ACTIVITÉS GÉOMÉTRIQUES (7 LEÇONS INTÉGRALES AVEC EXERCICES CORRIGÉS)
  // =========================================================================
  {
    id: 'math-4eme-geom-lecon-1',
    title: 'LEÇON 1 : LE THÉORÈME DE PYTHAGORE (THÉORÈME DIRECT)',
    type: 'cours',
    badge: 'Act. Géométriques - Pythagore & Trigo',
    description: 'Triangle rectangle, repérage de l\'hypoténuse, formule fondamentale BC² = AB² + AC², calcul d\'hypoténuse ou de côté adjacent, valeur exacte et approchée, 2 exercices corrigés.',
    lessonData: LESSON_1_GEOM_4EME
  },
  {
    id: 'math-4eme-geom-lecon-2',
    title: 'LEÇON 2 : LA RÉCIPROQUE DU THÉORÈME DE PYTHAGORE',
    type: 'cours',
    badge: 'Act. Géométriques - Pythagore & Trigo',
    description: 'Démontrer qu\'un triangle est rectangle, comparaison rigoureuse en calculs séparés, contraposée pour prouver qu\'un triangle n\'est pas rectangle et 2 exercices corrigés.',
    lessonData: LESSON_2_GEOM_4EME
  },
  {
    id: 'math-4eme-geom-lecon-3',
    title: 'LEÇON 3 : LE COSINUS D\'UN ANGLE AIGU DANS UN TRIANGLE RECTANGLE',
    type: 'cours',
    badge: 'Act. Géométriques - Pythagore & Trigo',
    description: 'Définition trigonométrique cos = Côté adjacent / Hypoténuse, calcul d\'un côté inconnu, détermination d\'un angle aigu avec arccos et 2 exercices d\'application complets.',
    lessonData: LESSON_3_GEOM_4EME
  },
  {
    id: 'math-4eme-geom-lecon-4',
    title: 'LEÇON 4 : LE THÉORÈME DE THALÈS (CONFIGURATION DE BASE)',
    type: 'cours',
    badge: 'Act. Géométriques - Thalès & Milieux',
    description: 'Deux sécantes coupées par deux parallèles, égalité des 3 rapports AM/AB = AN/AC = MN/BC, calcul de longueurs par produit en croix et 2 exercices d\'application résolus.',
    lessonData: LESSON_4_GEOM_4EME
  },
  {
    id: 'math-4eme-geom-lecon-5',
    title: 'LEÇON 5 : LE THÉORÈME DES MILIEUX DANS UN TRIANGLE',
    type: 'cours',
    badge: 'Act. Géométriques - Thalès & Milieux',
    description: 'Propriété de parallélisme (IJ // BC), propriété de longueur (IJ = BC/2), réciproque du milieu, démonstrations géométriques (Varignon) et 2 exercices complets corrigés.',
    lessonData: LESSON_5_GEOM_4EME
  },
  {
    id: 'math-4eme-geom-lecon-6',
    title: 'LEÇON 6 : LA TRANSLATION ET SES PROPRIÉTÉS VECTORIELLES',
    type: 'cours',
    badge: 'Act. Géométriques - Translation & Espace',
    description: 'Glissement sans déformation, direction, sens, distance, image d\'un point (parallélogramme ABM\'M), conservations (longueurs, angles, parallélisme, aires) et 2 exercices.',
    lessonData: LESSON_6_GEOM_4EME
  },
  {
    id: 'math-4eme-geom-lecon-7',
    title: 'LEÇON 7 : PYRAMIDE ET CÔNE DE RÉVOLUTION (GÉOMÉTRIE DANS L\'ESPACE)',
    type: 'cours',
    badge: 'Act. Géométriques - Translation & Espace',
    description: 'Solides pointus en 3D, hauteur h, génératrice g, formule du volume V = (Base × h) / 3, patrons et 2 exercices complets résolus pas-à-pas.',
    lessonData: LESSON_7_GEOM_4EME
  },

  // =========================================================================
  // ACTIVITÉS NUMÉRIQUES (12 LEÇONS INTÉGRALES)
  // =========================================================================
  {
    id: 'math-4eme-lecon-1',
    title: 'LEÇON 1 : MULTIPLICATION ET DIVISION DES NOMBRES RELATIFS',
    type: 'cours',
    badge: 'Act. Numériques - Partie 1',
    description: 'Règle des signes, produit de facteurs relatifs multiples, inverse d\'un nombre relatif non nul, division, priorités opératoires et 2 exercices complets corrigés.',
    lessonData: LESSON_1_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-2',
    title: 'LEÇON 2 : NOMBRES RATIONNELS — FRACTIONS ÉQUIVALENTES ET COMPARAISON',
    type: 'cours',
    badge: 'Act. Numériques - Partie 1',
    description: 'Définition de l\'ensemble des rationnels Q, simplification, fractions irréductibles, réduction au même dénominateur, comparaison et 2 exercices d\'application corrigés.',
    lessonData: LESSON_2_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-3',
    title: 'LEÇON 3 : ADDITION ET SOUSTRACTION DES NOMBRES RATIONNELS',
    type: 'cours',
    badge: 'Act. Numériques - Partie 1',
    description: 'Règles d\'addition et soustraction de fractions avec même dénominateur ou dénominateurs différents (PPCM), calculs algébriques et 2 exercices complets résolus.',
    lessonData: LESSON_3_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-4',
    title: 'LEÇON 4 : MULTIPLICATION ET DIVISION DES NOMBRES RATIONNELS',
    type: 'cours',
    badge: 'Act. Numériques - Partie 1',
    description: 'Produit de fractions avec simplification avant calcul, inverse d\'un rationnel, division par multiplication par l\'inverse, problème d\'héritage et 2 exercices détaillés.',
    lessonData: LESSON_4_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-5',
    title: 'LEÇON 5 : LES PUISSANCES D\'UN NOMBRE — EXPOSANTS POSITIFS ET NÉGATIFS',
    type: 'cours',
    badge: 'Act. Numériques - Partie 2',
    description: 'Définition, conventions a^0 = 1, exposants négatifs a^(-n) = 1/a^n, pièges des signes (-a)^n vs -a^n, règles opératoires et 2 exercices pas-à-pas.',
    lessonData: LESSON_5_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-6',
    title: 'LEÇON 6 : LES PUISSANCES DE 10 ET NOTATION SCIENTIFIQUE',
    type: 'cours',
    badge: 'Act. Numériques - Partie 2',
    description: 'Puissances de 10 positives et négatives, décalage de virgule, notation scientifique stricte a × 10^n, vitesse de la lumière et 2 exercices complets résolus.',
    lessonData: LESSON_6_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-7',
    title: 'LEÇON 7 : CALCUL LITTÉRAL — RÉDUCTION ET SIMPLE DISTRIBUTIVITÉ',
    type: 'cours',
    badge: 'Act. Numériques - Partie 2',
    description: 'Conventions de l\'algèbre, réduction par familles de termes, suppression des parenthèses, formule k(a+b) = ka+kb, modélisation géométrique et 2 exercices d\'application.',
    lessonData: LESSON_7_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-8',
    title: 'LEÇON 8 : CALCUL LITTÉRAL — DOUBLE DISTRIBUTIVITÉ',
    type: 'cours',
    badge: 'Act. Numériques - Partie 2',
    description: 'Formule (a+b)(c+d) = ac+ad+bc+bd, règle des 4 produits, gestion des signes négatifs, parenthèses précédées de -, problème d\'aires et 2 exercices avec corrigés.',
    lessonData: LESSON_8_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-9',
    title: 'LEÇON 9 : ÉQUATIONS DU PREMIER DEGRÉ À UNE INCONNUE',
    type: 'cours',
    badge: 'Act. Numériques - Partie 3',
    description: 'Principe de la balance, résolution de ax+b = cx+d, méthode rigoureuse en 4 étapes de mise en équation de problèmes concrets et 2 exercices complets pas-à-pas.',
    lessonData: LESSON_9_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-10',
    title: 'LEÇON 10 : LA PROPORTIONNALITÉ ET QUATRIÈME PROPORTIONNELLE',
    type: 'cours',
    badge: 'Act. Numériques - Partie 3',
    description: 'Tableaux et caractérisation graphique, égalité des produits en croix, quatrième proportionnelle, calculs de pourcentages, échelles et 2 exercices résolus.',
    lessonData: LESSON_10_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-11',
    title: 'LEÇON 11 : GRANDEURS ET VITESSES MOYENNES',
    type: 'cours',
    badge: 'Act. Numériques - Partie 3',
    description: 'Formule v = d/t, conversions heures sexagésimales et décimales, facteur 3,6 entre m/s et km/h, piège de la moyenne des vitesses et 2 exercices d\'application complets.',
    lessonData: LESSON_11_MATH_4EME
  },
  {
    id: 'math-4eme-lecon-12',
    title: 'LEÇON 12 : STATISTIQUES ET INITIATION AUX PROBABILITÉS',
    type: 'cours',
    badge: 'Act. Numériques - Partie 3',
    description: 'Population, caractère, effectif total, fréquence (somme = 100%), moyenne pondérée, équiprobabilité, événement contraire et 2 exercices avec corrigés détaillés.',
    lessonData: LESSON_12_MATH_4EME
  },

  // =========================================================================
  // RESSOURCES ET FICHES D'EXERCICES PDF (Onglet Ressources)
  // =========================================================================
  {
    id: 'pdf-math-4eme-geom-pythagore-trigo',
    title: 'Fiche de synthèse PDF : Théorème de Pythagore & Cosinus (Géométrie 4ème)',
    type: 'ressource',
    badge: 'Activités Géométriques PDF',
    description: 'Formulaire complet de Pythagore direct et réciproque, rédaction modèle, tableau du cosinus d\'un angle aigu et méthode avec calculatrice.',
    link: '#'
  },
  {
    id: 'pdf-math-4eme-geom-thales-milieux-espace',
    title: 'Fiche de synthèse PDF : Théorème de Thalès, Milieux, Translation & Volumes',
    type: 'ressource',
    badge: 'Activités Géométriques PDF',
    description: 'Synthèse illustrée des 3 configurations de Thalès, théorème des milieux, translation vectorielle et formules de volumes de la pyramide et du cône.',
    link: '#'
  },
  {
    id: 'pdf-math-4eme-relatifs-rationnels',
    title: 'Fiche de synthèse PDF : Nombres relatifs & Rationnels (Leçons 1 à 4)',
    type: 'ressource',
    badge: 'Activités Numériques PDF',
    description: 'Synthèse des règles des signes, astuces de réduction au même dénominateur, simplification de fractions et calculs en chaîne.',
    link: '#'
  },
  {
    id: 'pdf-math-4eme-puissances-algebre',
    title: 'Fiche de synthèse PDF : Puissances & Calcul littéral (Leçons 5 à 8)',
    type: 'ressource',
    badge: 'Activités Numériques PDF',
    description: 'Formulaire complet des puissances de 10, notation scientifique, simple et double distributivité avec exemples commentés.',
    link: '#'
  },
  {
    id: 'pdf-math-4eme-equations-stats',
    title: 'Fiche de synthèse PDF : Équations, Vitesses & Statistiques (Leçons 9 à 12)',
    type: 'ressource',
    badge: 'Activités Numériques PDF',
    description: 'Guide méthodologique de mise en équation de problèmes, conversions d\'heures et minutes, et formules de probabilités élémentaires.',
    link: '#'
  },
  {
    id: 'pdf-math-4eme-annales-exercices',
    title: 'Recueil complet d\'évaluations corrigées - Mathématiques 4ème (Numérique & Géométrie)',
    type: 'ressource',
    badge: 'Évaluation & corrigé',
    description: '38 exercices types conformes aux devoirs de classe et compositions semestrielles avec barème et corrigés détaillés pas-à-pas.',
    link: '#'
  }
];

