import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_MATH_3EME,
  LESSON_2_MATH_3EME,
  LESSON_3_MATH_3EME
} from './courses_3eme_math_part1';
import {
  LESSON_4_MATH_3EME,
  LESSON_5_MATH_3EME,
  LESSON_6_MATH_3EME
} from './courses_3eme_math_part2';
import {
  LESSON_7_MATH_3EME,
  LESSON_8_MATH_3EME,
  LESSON_9_MATH_3EME
} from './courses_3eme_math_part3';
import {
  LESSON_10_MATH_3EME,
  LESSON_11_MATH_3EME,
  LESSON_12_MATH_3EME
} from './courses_3eme_math_part4';

export {
  LESSON_1_MATH_3EME,
  LESSON_2_MATH_3EME,
  LESSON_3_MATH_3EME,
  LESSON_4_MATH_3EME,
  LESSON_5_MATH_3EME,
  LESSON_6_MATH_3EME,
  LESSON_7_MATH_3EME,
  LESSON_8_MATH_3EME,
  LESSON_9_MATH_3EME,
  LESSON_10_MATH_3EME,
  LESSON_11_MATH_3EME,
  LESSON_12_MATH_3EME
};

export const MATH_3EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '12' },
  { id: 'numerique', label: 'Activités Numériques', count: '6' },
  { id: 'geometrique', label: 'Activités Géométriques', count: '6' }
];

export const COURSES_MATH_3EME: ContentData[] = [
  // =========================================================================
  // ACTIVITÉS NUMÉRIQUES (LEÇONS 1 À 6)
  // =========================================================================
  {
    id: 'math-3eme-lecon-1',
    title: 'LEÇON 1 : RACINES CARRÉES',
    type: 'cours',
    badge: 'Activités Numériques',
    description:
      'Définition formelle, carrés parfaits (0 à 400), produit et quotient de radicaux, écriture a√b, rationalisation du dénominateur (expression conjuguée) et résolution des équations x² = a avec exercices corrigés détaillés.',
    lessonData: LESSON_1_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-2',
    title: 'LEÇON 2 : CALCUL LITTÉRAL ET IDENTITÉS REMARQUABLES',
    type: 'cours',
    badge: 'Activités Numériques',
    description:
      'Développement et réduction, les 3 identités remarquables fondamentales, factorisation par facteur commun et A² - B², simplification de fractions rationnelles et exercices d\'application conformes au BFEM.',
    lessonData: LESSON_2_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-3',
    title: 'LEÇON 3 : ÉQUATIONS ET INÉQUATIONS DU 1ER DEGRÉ À UNE INCONNUE',
    type: 'cours',
    badge: 'Activités Numériques',
    description:
      'Résolution d\'équations ax + b = 0, équations produits-nuls factorisées, inéquations avec changement de sens pour coefficient négatif, tableaux de signes de produits/quotients et problèmes concrets résolus.',
    lessonData: LESSON_3_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-4',
    title: 'LEÇON 4 : SYSTÈMES D\'ÉQUATIONS ET D\'INÉQUATIONS LINÉAIRES À DEUX INCONNUES',
    type: 'cours',
    badge: 'Activités Numériques',
    description:
      'Résolution par substitution et combinaison linéaire, interprétation géométrique d\'intersection de droites, déterminant ab\' - a\'b, inéquations et régionnement du plan, problèmes économiques complets.',
    lessonData: LESSON_4_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-5',
    title: 'LEÇON 5 : FONCTIONS LINÉAIRES ET FONCTIONS AFFINES',
    type: 'cours',
    badge: 'Activités Numériques',
    description:
      'Notion d\'image et d\'antécédent, proportionnalité et fonction linéaire f(x) = ax, fonction affine f(x) = ax + b, coefficient directeur a = (yB-yA)/(xB-xA), tracé de droites et comparaison de tarifs au BFEM.',
    lessonData: LESSON_5_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-6',
    title: 'LEÇON 6 : STATISTIQUE DESCRIPTIVE',
    type: 'cours',
    badge: 'Activités Numériques',
    description:
      'Population, caractère discret et continu, effectifs et fréquences cumulés (ECC/FCC), moyenne pondérée, mode/classe modale, médiane précise, diagrammes circulaires et en bâtons avec exercice corrigé.',
    lessonData: LESSON_6_MATH_3EME
  },

  // =========================================================================
  // ACTIVITÉS GÉOMÉTRIQUES (LEÇONS 7 À 12)
  // =========================================================================
  {
    id: 'math-3eme-lecon-7',
    title: 'LEÇON 7 : THÉORÈME DE THALÈS ET SA RÉCIPROQUE DANS LE TRIANGLE',
    type: 'cours',
    badge: 'Activités Géométriques',
    description:
      'Théorème direct (configurations emboîtée et papillon), égalité AM/AB = AN/AC = MN/BC, calculs de longueurs, réciproque rigoureuse avec ordre des points, contraposée et schéma vectoriel SVG inclus.',
    lessonData: LESSON_7_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-8',
    title: 'LEÇON 8 : TRIGONOMÉTRIE DANS LE TRIANGLE RECTANGLE',
    type: 'cours',
    badge: 'Activités Géométriques',
    description:
      'Définitions mnémotechniques SOH-CAH-TOA, sinus, cosinus, tangente, relation fondamentale cos²(α) + sin²(α) = 1, tan = sin/cos, angles complémentaires, valeurs remarquables 30°, 45°, 60° et figure SVG.',
    lessonData: LESSON_8_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-9',
    title: 'LEÇON 9 : ANGLES INSCRITS ET POLYGONES RÉGULIERS',
    type: 'cours',
    badge: 'Activités Géométriques',
    description:
      'Théorème de l\'angle inscrit et de l\'angle au centre Mes(AÔB) = 2×Mes(AMB), égalité des angles inscrits interceptant le même arc, triangle rectangle inscrit dans un demi-cercle, polygones réguliers et figure SVG.',
    lessonData: LESSON_9_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-10',
    title: 'LEÇON 10 : VECTEURS ET COORDONNÉES DANS LE PLAN',
    type: 'cours',
    badge: 'Activités Géométriques',
    description:
      'Repère orthonormé (O,I,J), coordonnées du vecteur AB(xB-xA ; yB-yA), milieu d\'un segment, distance euclidienne AB = √[(xB-xA)²+(yB-yA)²], condition de colinéarité XY\'-X\'Y=0, figure SVG et exercice résolu.',
    lessonData: LESSON_10_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-11',
    title: 'LEÇON 11 : ÉQUATIONS DE DROITES DANS LE PLAN',
    type: 'cours',
    badge: 'Activités Géométriques',
    description:
      'Équation réduite y = ax + b, droite verticale x = c, calcul du coefficient directeur passant par deux points, parallélisme a = a\', perpendicularité a×a\' = -1, calcul du point d\'intersection de sécantes.',
    lessonData: LESSON_11_MATH_3EME
  },
  {
    id: 'math-3eme-lecon-12',
    title: 'LEÇON 12 : GÉOMÉTRIE DANS L\'ESPACE (PYRAMIDES, CÔNES ET SPHÈRES)',
    type: 'cours',
    badge: 'Activités Géométriques',
    description:
      'Pyramides régulières, cônes de révolution (génératrice, hauteur, rayon), volumes et aires latérales, section plane parallèle à la base, tronc de cône/pyramide, règles de réduction k, k² et k³, schéma SVG.',
    lessonData: LESSON_12_MATH_3EME
  }
];
