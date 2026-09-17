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
import {
  LESSON_1_GEOM_6EME,
  LESSON_2_GEOM_6EME,
  LESSON_3_GEOM_6EME
} from './courses_6eme_math_geometrie_part1';
import {
  LESSON_4_GEOM_6EME,
  LESSON_5_GEOM_6EME,
  LESSON_6_GEOM_6EME
} from './courses_6eme_math_geometrie_part2';
import {
  LESSON_7_GEOM_6EME,
  LESSON_8_GEOM_6EME,
  LESSON_9_GEOM_6EME
} from './courses_6eme_math_geometrie_part3';

export const MATH_6EME_FILTER_CHAPTERS = [
  { id: 'all', label: 'Toutes les leçons (22)', count: 22 },
  { id: 'geometrie', label: '📐 Activités Géométriques (9 leçons)', count: 9 },
  { id: 'numerique', label: '🔢 Activités Numériques (13 leçons)', count: 13 },
  { id: 'geom1', label: 'Ch. V : Droites & Segments (G1 à G3)', count: 3 },
  { id: 'geom2', label: 'Ch. VI : Angles, Cercle & Triangles (G4 à G6)', count: 3 },
  { id: 'geom3', label: 'Ch. VII : Quadrilatères, Aires & Espace (G7 à G9)', count: 3 },
  { id: 'chap1', label: 'Ch. I : Entiers & Décimaux (1 à 5)', count: 5 },
  { id: 'chap2', label: 'Ch. II : Fractions (6 à 8)', count: 3 },
  { id: 'chap3', label: 'Ch. III : Opérations (9 à 12)', count: 4 },
  { id: 'chap4', label: 'Ch. IV : Proportionnalité (13)', count: 1 }
];

export const COURSES_MATH_6EME: ContentData[] = [
  // =========================================================================
  // ACTIVITÉS GÉOMÉTRIQUES : CHAPITRE V — ÉLÉMENTS FONDAMENTAUX ET DROITES (1 À 3)
  // =========================================================================
  {
    id: 'math-6eme-geom-lecon-1',
    title: 'GÉOMÉTRIE • LEÇON 1 : VOCABULAIRE ENSEMBLISTE ET ÉLÉMENTS DE BASE',
    type: 'cours',
    badge: 'Géométrie • Ch. V • Fondements',
    description:
      'Notions primitives de point et de droite comme ensemble infini de points, symboles mathématiques d\'appartenance (∈, ∉), points alignés, demi-droite [AB) avec origine, segment [AB] borné et distinction fondamentale entre l\'objet géométrique et sa longueur numérique.',
    lessonData: LESSON_1_GEOM_6EME
  },
  {
    id: 'math-6eme-geom-lecon-2',
    title: 'GÉOMÉTRIE • LEÇON 2 : POSITIONS RELATIVES DE DEUX DROITES (SÉCANTES, PERPENDICULAIRES, PARALLÈLES)',
    type: 'cours',
    badge: 'Géométrie • Ch. V • Droites & Positions',
    description:
      'Classification officielle des droites coplanaires : sécantes, perpendiculaires (angle droit de 90° à l\'équerre), strictement parallèles et confondues. Les deux théorèmes fondamentaux de démonstration liant parallélisme et perpendicularité avec exercices corrigés.',
    lessonData: LESSON_2_GEOM_6EME
  },
  {
    id: 'math-6eme-geom-lecon-3',
    title: 'GÉOMÉTRIE • LEÇON 3 : LE SEGMENT DE DROITE — MILIEU ET MÉDIATRICE',
    type: 'cours',
    badge: 'Géométrie • Ch. V • Segments & Médiatrice',
    description:
      'Définition rigoureuse du milieu d\'un segment (alignement + équidistance), définition de la médiatrice comme droite perpendiculaire passant par le milieu, théorème de l\'équidistance, méthode de construction universelle au compas et axe de symétrie.',
    lessonData: LESSON_3_GEOM_6EME
  },

  // =========================================================================
  // ACTIVITÉS GÉOMÉTRIQUES : CHAPITRE VI — ANGLES, CERCLE ET TRIANGLES (4 À 6)
  // =========================================================================
  {
    id: 'math-6eme-geom-lecon-4',
    title: 'GÉOMÉTRIE • LEÇON 4 : LES ANGLES — DÉFINITION, MESURE, CLASSIFICATION ET BISSECTRICE',
    type: 'cours',
    badge: 'Géométrie • Ch. VI • Angles & Bissectrice',
    description:
      'Sommet et côtés, règle d\'or de la lettre centrale AÔB, utilisation du rapporteur en degrés (°), classification (nul, aigu, droit, obtus, plat, plein), angles adjacents, complémentaires (90°), supplémentaires (180°) et construction de la bissectrice au compas.',
    lessonData: LESSON_4_GEOM_6EME
  },
  {
    id: 'math-6eme-geom-lecon-5',
    title: 'GÉOMÉTRIE • LEÇON 5 : LE CERCLE ET LE DISQUE — VOCABULAIRE, PROPRIÉTÉS ET CONSTRUCTIONS',
    type: 'cours',
    badge: 'Géométrie • Ch. VI • Cercle & Disque',
    description:
      'Définition ensembliste du cercle C(O, R), centre, rayon, diamètre (D = 2R), corde, arc de cercle, distinction absolue entre contour du cercle (OM = R) et surface du disque (OM ≤ R), et tangente perpendiculaire au rayon.',
    lessonData: LESSON_5_GEOM_6EME
  },
  {
    id: 'math-6eme-geom-lecon-6',
    title: 'GÉOMÉTRIE • LEÇON 6 : LES TRIANGLES — CLASSIFICATION, PROPRIÉTÉ DES ANGLES ET CONSTRUCTIONS',
    type: 'cours',
    badge: 'Géométrie • Ch. VI • Triangles',
    description:
      'Polygone à 3 côtés, théorème universel de la somme des trois angles égale à 180°, inégalité triangulaire (condition de constructibilité a < b + c), étude détaillée des triangles particuliers (isocèle, équilatéral, rectangle avec hypoténuse, rectangle-isocèle) et hauteurs.',
    lessonData: LESSON_6_GEOM_6EME
  },

  // =========================================================================
  // ACTIVITÉS GÉOMÉTRIQUES : CHAPITRE VII — QUADRILATÈRES, MESURES & ESPACE (7 À 9)
  // =========================================================================
  {
    id: 'math-6eme-geom-lecon-7',
    title: 'GÉOMÉTRIE • LEÇON 7 : LES QUADRILATÈRES PARTICULIERS (PARALLÉLOGRAMME, RECTANGLE, LOSANGE, CARRÉ)',
    type: 'cours',
    badge: 'Géométrie • Ch. VII • Quadrilatères',
    description:
      'Ordre cyclique de dénomination des sommets, somme des 4 angles (360°), propriétés clés des diagonales (milieu commun pour le parallélogramme, même longueur pour le rectangle, perpendicularité pour le losange, cumul parfait pour le carré) et critères de démonstration.',
    lessonData: LESSON_7_GEOM_6EME
  },
  {
    id: 'math-6eme-geom-lecon-8',
    title: 'GÉOMÉTRIE • LEÇON 8 : PÉRIMÈTRES ET AIRES — DÉFINITIONS, CONVERSIONS ET FORMULES DE CALCUL',
    type: 'cours',
    badge: 'Géométrie • Ch. VII • Périmètres & Aires',
    description:
      'Distinction fondamentale entre périmètre 1D (contour en mètres) et aire 2D (superficie en m²), tableaux de conversion officiels (règle des 2 colonnes par unité d\'aire), unités agraires (are, hectare) et répertoire complet des formules (carré, rectangle, triangles, cercle/disque avec π).',
    lessonData: LESSON_8_GEOM_6EME
  },
  {
    id: 'math-6eme-geom-lecon-9',
    title: 'GÉOMÉTRIE • LEÇON 9 : GÉOMÉTRIE DANS L\'ESPACE — SOLIDES USUELS, PERSPECTIVE ET VOLUMES',
    type: 'cours',
    badge: 'Géométrie • Ch. VII • Espace & Volumes',
    description:
      'Le monde à 3 dimensions : pavé droit et cube (faces, arêtes, sommets), perspective cavalière avec tracé obligatoire des arêtes cachées en pointillés, patrons par pliage, calculs de volumes (V = L×l×h et V = c³), et conversion clé 1 dm³ = 1 Litre.',
    lessonData: LESSON_9_GEOM_6EME
  },

  // =========================================================================
  // ACTIVITÉS NUMÉRIQUES : CHAPITRE I — NUMÉRATION ET NOMBRES ENTIERS / DÉCIMAUX (1 À 5)
  // =========================================================================
  {
    id: 'math-6eme-lecon-1',
    title: 'NUMÉRIQUE • LEÇON 1 : LES NOMBRES ENTIERS NATURELS — LECTURE, ÉCRITURE ET POSITION',
    type: 'cours',
    badge: 'Chapitre I • Numération officielle',
    description:
      'Fondements du système décimal et positionnel, règles d’écriture des grands nombres par tranches de 3 chiffres, tableau de numération (unités, milliers, millions, milliards) et distinction chiffre du rang vs nombre de rangs.',
    lessonData: LESSON_1_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-2',
    title: 'NUMÉRIQUE • LEÇON 2 : DÉFINITION, STRUCTURE ET ÉCRITURE DES NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre I • Décimaux',
    description:
      'Structure rigoureuse (partie entière et partie décimale), rangs des dixièmes (1/10), centièmes (1/100) et millièmes (1/1000), 3 modes de décompositions et règle d’or des zéros inutiles.',
    lessonData: LESSON_2_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-3',
    title: 'NUMÉRIQUE • LEÇON 3 : COMPARAISON, RANGEMENT ET ENCADREMENT DES NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre I • Décimaux',
    description:
      'Méthode universelle en 2 étapes, déjouer le piège visuel de 8,3 vs 8,25 par égalisation des zéros, rangement par ordre croissant/décroissant, encadrements à l’unité, au dixième et intercalation décimale.',
    lessonData: LESSON_3_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-4',
    title: 'NUMÉRIQUE • LEÇON 4 : VALEURS APPROCHÉES — TRONCATURE ET ARRONDI D\'UN DÉCIMAL',
    type: 'cours',
    badge: 'Chapitre I • Valeurs approchées',
    description:
      'Technique de la troncature par défaut, règle de l’arrondi au plus proche selon le chiffre suivant (seuil critique de 5), tableau comparatif sur 15,783 et cas particulier des retenues en cascade avec le chiffre 9 (ex : 4,96 ➔ 5,0).',
    lessonData: LESSON_4_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-5',
    title: 'NUMÉRIQUE • LEÇON 5 : REPÉRAGE SUR UNE DEMI-DROITE GRADUÉE ET LECTURE D\'ABSCISSES',
    type: 'cours',
    badge: 'Chapitre I • Demi-droite graduée',
    description:
      'Les 3 éléments obligatoires (origine O, sens fléché, unité régulière), calcul du pas de sous-graduation (0,1), repérage formel A(1,4) et schématisation graphique vectorielle.',
    lessonData: LESSON_5_MATH_6EME
  },

  // =========================================================================
  // ACTIVITÉS NUMÉRIQUES : CHAPITRE II — ÉCRITURES FRACTIONNAIRES (6 À 8)
  // =========================================================================
  {
    id: 'math-6eme-lecon-6',
    title: 'NUMÉRIQUE • LEÇON 6 : NOTION DE PARTAGE GLOBAL ET VOCABULAIRE DES FRACTIONS',
    type: 'cours',
    badge: 'Chapitre II • Fractions',
    description:
      'Définition mathématique du quotient de deux entiers, rôles respectifs du numérateur a et du dénominateur non nul b, représentation géométrique sur disque découpé (3/4) et règles orales (demi, tiers, quart, -ième).',
    lessonData: LESSON_6_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-7',
    title: 'NUMÉRIQUE • LEÇON 7 : FRACTIONS DÉCIMALES ET PASSAGES À L\'ÉCRITURE À VIRGULE',
    type: 'cours',
    badge: 'Chapitre II • Fractions décimales',
    description:
      'Définition d’une fraction décimale (puissances de 10), règle de décalage de la virgule vers la gauche selon les zéros, conversion inverse sans virgule (ex : 12,854 = 12 854 / 1 000) et pièges des zéros de positionnement.',
    lessonData: LESSON_7_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-8',
    title: 'NUMÉRIQUE • LEÇON 8 : ÉGALITÉ DE FRACTIONS ET TECHNIQUES DE SIMPLIFICATION',
    type: 'cours',
    badge: 'Chapitre II • Simplification & Équivalence',
    description:
      'Propriété fondamentale des quotients (multiplication et division par k non nul), critères de divisibilité (2, 3, 5, 9, 10), simplification pas-à-pas de 24/36 vers la fraction irréductible 2/3 et réduction au même dénominateur.',
    lessonData: LESSON_8_MATH_6EME
  },

  // =========================================================================
  // ACTIVITÉS NUMÉRIQUES : CHAPITRE III — LES OPÉRATIONS MATHÉMATIQUES (9 À 12)
  // =========================================================================
  {
    id: 'math-6eme-lecon-9',
    title: 'NUMÉRIQUE • LEÇON 9 : L\'ADDITION ET LA SOUSTRACTION DE NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre III • Calcul posé décimal',
    description:
      'Règle d’or d’alignement vertical des virgules, comblement par des zéros de calcul, décomposition intégrale de la soustraction posée 45,20 – 7,85 = 37,35 avec gestion rigoureuse des retenues.',
    lessonData: LESSON_9_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-10',
    title: 'NUMÉRIQUE • LEÇON 10 : LA MULTIPLICATION DE NOMBRES DÉCIMAUX',
    type: 'cours',
    badge: 'Chapitre III • Multiplication décimale',
    description:
      'Calcul brut sans les virgules (245 × 13 = 3 185), cumul des décimales (2 + 1 = 3 décimales ➔ 3,185), règles d’accélération par décalage de virgule (× 10, 100, 1 000 à droite ; × 0,1 ; 0,01 à gauche).',
    lessonData: LESSON_10_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-11',
    title: 'NUMÉRIQUE • LEÇON 11 : LA DIVISION EUCLIDIENNE — THÉORIE ET CALCUL EN POTENCE',
    type: 'cours',
    badge: 'Chapitre III • Division euclidienne',
    description:
      'Définition des 4 acteurs (dividende, diviseur, quotient, reste), condition obligatoire Reste < Diviseur, tracé de la potence de 158 par 6 (q = 26, r = 2), et équation fondamentale de contrôle : 158 = (6 × 26) + 2.',
    lessonData: LESSON_11_MATH_6EME
  },
  {
    id: 'math-6eme-lecon-12',
    title: 'NUMÉRIQUE • LEÇON 12 : LA DIVISION DÉCIMALE DE DEUX NOMBRES',
    type: 'cours',
    badge: 'Chapitre III • Division décimale',
    description:
      'Algorithme de la bascule décimale immédiate dès la fin des entiers, cas d’un quotient décimal exact (45 ÷ 4 = 11,25), et traitement des quotients infinis périodiques (10 ÷ 3 = 3,333...) avec valeurs approchées encadrées.',
    lessonData: LESSON_12_MATH_6EME
  },

  // =========================================================================
  // ACTIVITÉS NUMÉRIQUES : CHAPITRE IV — PROPORTIONNALITÉ ET GESTION DE DONNÉES (13)
  // =========================================================================
  {
    id: 'math-6eme-lecon-13',
    title: 'NUMÉRIQUE • LEÇON 13 : PROPORTIONNALITÉ, TABLEAUX ET POURCENTAGES',
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
    title: 'Guide Pédagogique Intégral PDF : Mathématiques 6ème (Activités Numériques & Géométriques)',
    type: 'ressource',
    badge: 'Manuel officiel complet',
    description:
      'Fascicule complet officiel regroupant les 22 leçons exhaustives développées sans résumé, avec schémas géométriques, figures vectorielles, propriétés fondamentales, remarques et exercices corrigés pas-à-pas.',
    link: '#'
  },
  {
    id: 'pdf-exercices-math-6eme-numerique',
    title: 'Recueil d\'exercices résolus & Évaluations sommatives — Mathématiques 6ème',
    type: 'ressource',
    badge: 'Évaluation & corrigé',
    description:
      'Banque d’exercices d’application directe avec corrigés détaillés : droites perpendiculaires et parallèles, médiatrice, bissectrice, triangles, quadrilatères, périmètres, aires et calcul posé.',
    link: '#'
  }
];

