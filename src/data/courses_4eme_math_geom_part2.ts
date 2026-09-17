import { LessonContent } from './courses';
import {
  SVG_THEOREME_MILIEUX,
  SVG_TRANSLATION,
  SVG_PYRAMIDE_CONE
} from './diagrams_4eme';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 4ÈME
// ACTIVITÉS GÉOMÉTRIQUES — PROGRAMME OFFICIEL COMPLET
// PARTIE 2 : LEÇONS 5 À 7 (THÉORÈME DES MILIEUX, TRANSLATION, GÉOMÉTRIE DANS L'ESPACE)
// COURS DÉTAILLÉ AVEC DÉFINITIONS, PROPRIÉTÉS, REMARQUES ET 2 EXERCICES CORRIGÉS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 5 : LE THÉORÈME DES MILIEUX DANS UN TRIANGLE
// -------------------------------------------------------------------------
export const LESSON_5_GEOM_4EME: LessonContent = {
  id: 'math-4eme-geom-lecon-5',
  number: 'Leçon 5 (Géométrie)',
  title: 'Le théorème des milieux dans un triangle',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Le théorème des milieux est un résultat fondamental de la géométrie plane euclidienne. Il s'agit d'un cas particulier et précurseur du théorème de Thalès, où le rapport de proportionnalité vaut exactement 1/2. Ce théorème et sa réciproque permettent de démontrer facilement que deux droites sont parallèles, de calculer la longueur d'un segment sans mesure directe, ou de prouver qu'un point est le milieu exact d'un côté.",
  fullText: `Leçon 5 : Le théorème des milieux dans un triangle

Introduction :
Le théorème des milieux est un résultat fondamental de la géométrie plane euclidienne. Il s'agit d'un cas particulier et précurseur du théorème de Thalès, où le rapport de proportionnalité vaut exactement 1/2. Ce théorème et sa réciproque permettent de démontrer facilement que deux droites sont parallèles, de calculer la longueur d'un segment sans mesure directe, ou de prouver qu'un point est le milieu exact d'un côté.

1. Propriété 1 : Droite des milieux et parallélisme
PROPRIÉTÉ DIRECTE (Parallélisme) :
Dans un triangle, si une droite passe par les milieux de deux côtés, alors elle est strictement parallèle au troisième côté.

Énoncé formel :
Soit ABC un triangle quelconque.
Si I est le milieu du côté [AB] et J est le milieu du côté [AC],
alors la droite (IJ) est parallèle à la droite (BC) :
(IJ) // (BC)

Schéma géométrique explicatif :
            A
           / \\
          /   \\
       I /_____\\ J   (I milieu de [AB], J milieu de [AC])
        /       \\    => (IJ) // (BC)
       /_________\\
      B           C   (BC = 2 × IJ)

2. Propriété 2 : Longueur du segment des milieux
PROPRIÉTÉ DIRECTE (Longueur) :
Dans un triangle, la longueur du segment qui joint les milieux de deux côtés est égale à la moitié de la longueur du troisième côté.

Énoncé formel :
Si I est le milieu de [AB] et J est le milieu de [AC], alors :
IJ = BC / 2  (ou de façon équivalente : BC = 2 × IJ)

3. Propriété 3 : Réciproque du théorème des milieux
PROPRIÉTÉ RÉCIPROQUE :
Dans un triangle, si une droite passe par le milieu d'un côté et est parallèle à un deuxième côté, alors elle coupe obligatoirement le troisième côté en son milieu.

Énoncé formel :
Soit ABC un triangle.
Si I est le milieu de [AB] et si la droite (d) passant par I est parallèle à (BC),
alors le point d'intersection J de la droite (d) avec le segment [AC] est le milieu exact de [AC].

4. Tableau de synthèse des utilisations :
• Que cherche-t-on à prouver ?
  - Démontrer un PARALLÉLISME : utiliser la Propriété 1 (connaître 2 milieux).
  - Calculer une LONGUEUR : utiliser la Propriété 2 (IJ = BC / 2 ou BC = 2 × IJ).
  - Démontrer qu'un point est un MILIEU : utiliser la Réciproque (connaître 1 milieu + 1 parallélisme).`,
  sections: [
    {
      title: '1. Les trois propriétés fondamentales',
      image: {
        url: SVG_THEOREME_MILIEUX,
        alt: 'Figure 5 : Théorème des milieux dans le triangle',
        caption: 'Figure 5 : Droite des milieux (IJ) parallèle à (BC) et longueur moitié : IJ = 1/2 BC (ou BC = 2 × IJ).'
      },
      subsections: [
        {
          subtitle: 'Propriétés directes (1 et 2)',
          content: [
            "• Hypothèse : On connaît les milieux de DEUX côtés d'un triangle (I milieu de [AB] et J milieu de [AC]).",
            "• Conclusion géométrique : La droite (IJ) est strictement parallèle au troisième côté (BC).",
            "• Conclusion métrique : La longueur IJ est égale à la moitié de la longueur BC (IJ = BC / 2)."
          ]
        },
        {
          subtitle: 'Propriété réciproque (3)',
          content: [
            "• Hypothèse : On connaît le milieu d'UN SEUL côté (I milieu de [AB]) et une droite parallèle à un deuxième côté : (d) // (BC).",
            "• Conclusion : La droite (d) coupe impérativement le troisième côté [AC] en son milieu exact J."
          ]
        }
      ]
    },
    {
      title: '2. Exercices complets résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calcul de périmètre et démonstration de parallélisme',
          content: [
            "Soit un triangle ABC tel que AB = 7 cm, BC = 9 cm et AC = 8 cm.",
            "On note I le milieu de [AB], J le milieu de [BC] et K le milieu de [AC].",
            "1. Démontrer que la droite (IK) est parallèle à la droite (BC).",
            "2. Calculer les longueurs exactes des trois segments [IJ], [JK] et [IK].",
            "3. En déduire le périmètre du triangle IJK formé par les trois milieux, et le comparer au périmètre du triangle ABC initial."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Démontrons que (IK) // (BC) :",
            "   • Dans le triangle ABC, I est le milieu du côté [AB] et K est le milieu du côté [AC].",
            "   • Propriété : Si une droite passe par les milieux de deux côtés d'un triangle, alors elle est parallèle au troisième côté.",
            "   • Conclusion : La droite (IK) est strictement parallèle à la droite (BC).",
            "2. Calcul des longueurs des côtés du triangle IJK :",
            "   • D'après la propriété des milieux, la longueur du segment joignant deux milieux vaut la moitié du troisième côté :",
            "   • IK = BC / 2 = 9 / 2 = 4,5 cm.",
            "   • IJ = AC / 2 = 8 / 2 = 4 cm.",
            "   • JK = AB / 2 = 7 / 2 = 3,5 cm.",
            "3. Périmètres comparés :",
            "   • Périmètre de ABC = AB + BC + AC = 7 + 9 + 8 = 24 cm.",
            "   • Périmètre de IJK = IJ + JK + IK = 4 + 3,5 + 4,5 = 12 cm.",
            "   • Comparaison : On remarque que 12 = 24 / 2. Le périmètre du triangle des milieux est exactement la moitié du périmètre du triangle initial."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Démontrer la nature d\'un quadrilatère (Théorème de Varignon)',
          content: [
            "Soit un quadrilatère quelconque ABCD non croisé. On désigne par :",
            "- E le milieu de [AB],",
            "- F le milieu de [BC],",
            "- G le milieu de [CD],",
            "- H le milieu de [DA].",
            "1. En considérant le triangle ABC, démontrer que les droites (EF) et (AC) sont parallèles et exprimer la longueur EF en fonction de AC.",
            "2. En considérant le triangle ADC, démontrer que les droites (HG) et (AC) sont parallèles et exprimer la longueur HG en fonction de AC.",
            "3. En déduire que le quadrilatère EFGH est obligatoirement un parallélogramme."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Dans le triangle ABC :",
            "   • E est le milieu de [AB] et F est le milieu de [BC].",
            "   • D'après le théorème des milieux : la droite (EF) est parallèle à (AC), et EF = AC / 2.",
            "2. Dans le triangle ADC :",
            "   • H est le milieu de [DA] et G est le milieu de [CD].",
            "   • D'après le théorème des milieux : la droite (HG) est parallèle à (AC), et HG = AC / 2.",
            "3. Nature du quadrilatère EFGH :",
            "   • D'une part, (EF) // (AC) et (HG) // (AC). Deux droites parallèles à une même troisième sont parallèles entre elles, donc (EF) // (HG).",
            "   • D'autre part, EF = AC / 2 et HG = AC / 2, donc EF = HG.",
            "   • Propriété caractéristique : Si un quadrilatère non croisé a deux côtés opposés parallèles et de même longueur, alors c'est un parallélogramme.",
            "   • Conclusion : Le quadrilatère EFGH est un parallélogramme (ce résultat est le célèbre théorème géométrique de Varignon)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : LE THÉORÈME DES MILIEUX',
    root: 'THÉORÈME DES MILIEUX',
    branches: [
      {
        name: 'PROPRIÉTÉ 1 (PARALLÉLISME)',
        subtitle: '2 milieux connus',
        items: [
          'I milieu de [AB] et J milieu de [AC]',
          'La droite (IJ) est parallèle à (BC)',
          'Permet de prouver un parallélisme'
        ]
      },
      {
        name: 'PROPRIÉTÉ 2 (LONGUEUR)',
        subtitle: 'Rapport métrique 1/2',
        items: [
          'IJ = BC / 2  (ou BC = 2 × IJ)',
          'Segment des milieux = moitié de la base',
          'Permet de calculer une longueur sans mesure'
        ]
      },
      {
        name: 'PROPRIÉTÉ 3 (RÉCIPROQUE)',
        subtitle: '1 milieu + 1 parallèle',
        items: [
          'I milieu de [AB] et (d) // (BC)',
          'La droite (d) coupe [AC] en son milieu J',
          'Permet de prouver qu\'un point est un milieu'
        ]
      }
    ]
  },
  conclusion:
    "Le théorème des milieux est l'un des outils de démonstration les plus élégants du collège. En identifiant clairement les milieux des côtés et la base opposée, il résout avec simplicité les problèmes de parallélisme, de calcul de longueurs et de démonstration de parallélogrammes."
};

// -------------------------------------------------------------------------
// LEÇON 6 : LA TRANSLATION ET SES PROPRIÉTÉS VECTORIELLES
// -------------------------------------------------------------------------
export const LESSON_6_GEOM_4EME: LessonContent = {
  id: 'math-4eme-geom-lecon-6',
  number: 'Leçon 6 (Géométrie)',
  title: 'La translation et ses propriétés vectorielles',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Après la symétrie axiale (effet miroir en 6ème) et la symétrie centrale (demi-tour autour d'un point en 5ème), la classe de 4ème aborde une nouvelle transformation du plan : la translation. Associée à l'idée intuitive de glissement en ligne droite sans rotation, la translation introduit le langage fondamental des vecteurs qui sera approfondi en classe de 3ème et au lycée.",
  fullText: `Leçon 6 : La translation et ses propriétés vectorielles

Introduction :
Après la symétrie axiale (effet miroir en 6ème) et la symétrie centrale (demi-tour autour d'un point en 5ème), la classe de 4ème aborde une nouvelle transformation du plan : la translation. Associée à l'idée intuitive de glissement en ligne droite sans rotation, la translation introduit le langage fondamental des vecteurs qui sera approfondi en classe de 3ème et au lycée.

1. Définition intuitive et caractéristiques d'une translation
Transformer une figure par une translation revient à la faire glisser le long d'une ligne droite :
- Sans la faire tourner (l'orientation reste inchangée),
- Sans la déformer (la forme est conservée),
- Sans modifier sa taille (les dimensions restent identiques).

Une translation est entièrement définie par un déplacement d'un point A vers un point B, caractérisé par trois éléments indissociables :
1. Sa direction : la droite (AB) (la ligne de déplacement, horizontale, verticale ou oblique).
2. Son sens : de A vers B (la flèche, vers la droite, vers la gauche, vers le haut ou vers le bas).
3. Sa distance (ou norme) : la longueur exacte du segment AB.

Notation vectorielle introduite : Ce déplacement de A vers B est représenté par le vecteur noté AB→.

2. Image d'un point par une translation
DÉFINITION GÉOMÉTRIQUE :
Soit une translation qui transforme un point A en un point B.
L'image d'un point M par cette translation est le point M' tel que :
- Les segments [AB] et [MM'] ont la même direction : (MM') // (AB).
- Le déplacement de M vers M' s'effectue dans le même sens que de A vers B.
- La distance MM' est égale à la distance AB : MM' = AB.

Conséquence géométrique fondamentale :
Si les points A, B, M ne sont pas alignés, alors le quadrilatère ABM'M est un PARALLÉLOGRAMME.
Attention à l'ordre des lettres : ABM'M (et non ABMM').

3. Propriétés de conservation de la translation (Isométrie)
La translation est une isométrie : elle conserve toutes les grandeurs géométriques :
1. Conservation des longueurs : le segment image a exactement la même longueur que le segment initial (A'B' = AB).
2. Conservation de l'alignement : l'image d'une droite est une droite.
3. Propriété du parallélisme des images : L'image d'une droite (d) par une translation est une droite (d') qui lui est strictement PARALLÈLE : (d) // (d').
4. Conservation des angles : l'image d'un angle conserve strictement la même mesure en degrés.
5. Conservation de l'orthogonalité : si deux droites sont perpendiculaires, leurs images par translation sont perpendiculaires.
6. Conservation des aires et des périmètres : l'image d'un triangle, d'un rectangle ou d'un disque a exactement la même aire et le même périmètre que la figure de départ.`,
  sections: [
    {
      title: '1. Caractéristiques fondamentales et construction',
      image: {
        url: SVG_TRANSLATION,
        alt: 'Figure 6 : La translation par un vecteur de glissement',
        caption: 'Figure 6 : Translation de vecteur u : glissement rectiligne conservant les longueurs, angles et formant le parallélogramme ABB\'A\'.'
      },
      subsections: [
        {
          subtitle: 'Le triptyque : Direction, Sens et Distance',
          content: [
            "• Direction : donnée par la droite support (ex: l'inclinaison de la droite (AB)). Ne pas confondre avec le sens !",
            "• Sens : l'orientation du mouvement le long de la droite (de A vers B ou de B vers A).",
            "• Distance : la longueur mesurée du déplacement (la distance AB).",
            "• Construction au compas : pour placer M', on utilise les propriétés du parallélogramme ABM'M (reporter la distance AB à partir de M, et la distance AM à partir de B)."
          ]
        },
        {
          subtitle: 'Les propriétés de conservation absolue',
          content: [
            "• Conserve les longueurs, les angles, les alignements et les aires.",
            "• L'image d'une droite est une droite strictement parallèle.",
            "• L'image d'un cercle de centre O et de rayon R est un cercle de centre O' (image de O) et de MÊME rayon R."
          ]
        }
      ]
    },
    {
      title: '2. Exercices complets résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Propriétés de parallélogramme et calcul de longueurs',
          content: [
            "Soit un triangle équilatéral ABC de côté 5 cm.",
            "Soit la translation qui transforme le point A en le point B.",
            "1. Construire (ou définir géométriquement) le point C', image du point C par cette translation.",
            "2. Quelle est la nature précise du quadrilatère AB C' C ? Justifier avec rigueur.",
            "3. Quelles sont les longueurs exactes des segments [BC'] et [CC'] ? Justifier.",
            "4. Démontrer que le triangle BCC' est un triangle isocèle."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Définition géométrique du point C' :",
            "   • Par la translation qui transforme A en B, le point C a pour image C'.",
            "   • Cela signifie que le déplacement de C vers C' a la même direction que (AB), le même sens que de A vers B, et la même longueur CC' = AB.",
            "2. Nature du quadrilatère AB C' C :",
            "   • D'après la définition de l'image d'un point par une translation : les points A, B, C n'étant pas alignés, le quadrilatère formé par les points A, B, C' et C dans cet ordre est un PARALLÉLOGRAMME.",
            "   • Conclusion : AB C' C est un parallélogramme.",
            "3. Calcul des longueurs BC' et CC' :",
            "   • Dans le parallélogramme AB C' C, les côtés opposés ont la même longueur :",
            "     - Côté CC' = côté AB = 5 cm (par translation).",
            "     - Côté BC' = côté AC = 5 cm (car ABC est équilatéral, AC = 5 cm).",
            "4. Démontrons que le triangle BCC' est isocèle :",
            "   • Dans le triangle BCC', nous avons :",
            "     - BC = 5 cm (côté du triangle équilatéral de départ ABC).",
            "     - BC' = 5 cm (côté opposé à AC dans le parallélogramme).",
            "     - CC' = 5 cm (longueur de la translation égale à AB).",
            "   • En réalité, BC = BC' = CC' = 5 cm : le triangle BCC' est même un triangle ÉQUILATÉRAL (donc isocèle à plus forte raison)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Conservation d\'angles et image d\'un cercle',
          content: [
            "Soit un triangle MNP rectangle en M tel que MN = 6 cm, MP = 8 cm et l'angle MNP^ = 53°.",
            "On applique la translation t qui transforme M en un point O distant de 12 cm de M.",
            "On note N' et P' les images respectives des points N et P par cette translation.",
            "1. Quelle est la nature exacte du triangle M'N'P' (où M' = O) ? Justifier en citant une propriété.",
            "2. Déterminer sans rapporteur la mesure de l'angle M'N'P'^ et la longueur du segment [N'P'].",
            "3. Soit (C) le cercle circonscrit au triangle MNP. Décrire avec précision son cercle image (C') par la translation t."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Nature du triangle M'N'P' :",
            "   • Propriété fondamentale : La translation conserve les angles, l'orthogonalité et la nature des figures.",
            "   • Le triangle MNP étant rectangle en M, son image M'N'P' est un triangle rectangle en M' (qui est le point O).",
            "2. Mesure de l'angle et longueur de l'hypoténuse N'P' :",
            "   • Conservation des angles : La translation conserve les mesures d'angles, donc M'N'P'^ = MNP^ = 53°.",
            "   • Calcul de l'hypoténuse NP dans le triangle initial par Pythagore :",
            "     NP² = MN² + MP² = 6² + 8² = 36 + 64 = 100, d'où NP = √100 = 10 cm.",
            "   • Conservation des longueurs : La translation conserve les longueurs, donc N'P' = NP = 10 cm.",
            "3. Cercle image (C') :",
            "   • Dans un triangle rectangle MNP, le centre du cercle circonscrit (C) est le milieu I de l'hypoténuse [NP], et son rayon est R = NP / 2 = 10 / 2 = 5 cm.",
            "   • Par la translation t, l'image d'un cercle de centre I et de rayon R est un cercle (C') de rayon identique R' = R = 5 cm.",
            "   • Son centre I' est le translaté du point I par le vecteur MO→.",
            "   • Conclusion : (C') est un cercle de rayon 5 cm ayant pour centre l'image I' du milieu de [NP]."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : LA TRANSLATION (GLISSEMENT VECTORIEL)',
    root: 'TRANSLATION',
    branches: [
      {
        name: 'DÉFINITION TRIPTYQUE',
        subtitle: 'Vecteur de translation',
        items: [
          'Direction : la droite du mouvement (ex: (AB))',
          'Sens : de départ vers arrivée (ex: de A vers B)',
          'Distance : norme mesurée AB'
        ]
      },
      {
        name: 'FIGURE ASSOCIÉE',
        subtitle: 'Parallélogramme',
        items: [
          'Si M a pour image M\' par translation de A vers B :',
          'ABM\'M est un parallélogramme',
          'Ordre strict des sommets : A -> B -> M\' -> M'
        ]
      },
      {
        name: 'CONSERVATIONS',
        subtitle: 'Isométrie parfaite',
        items: [
          'Conserve longueurs, angles, parallélisme et aires',
          'Image d\'une droite = droite strictement parallèle',
          'Image d\'un cercle = cercle de même rayon'
        ]
      }
    ]
  },
  conclusion:
    "La translation est l'opération de glissement pur en géométrie. Elle préserve l'intégrité géométrique des figures (tailles, formes, angles et aires) et pose les fondations du calcul vectoriel moderne à travers la structure de parallélogramme."
};

// -------------------------------------------------------------------------
// LEÇON 7 : PYRAMIDE ET CÔNE DE RÉVOLUTION (GÉOMÉTRIE DANS L'ESPACE)
// -------------------------------------------------------------------------
export const LESSON_7_GEOM_4EME: LessonContent = {
  id: 'math-4eme-geom-lecon-7',
  number: 'Leçon 7 (Géométrie)',
  title: 'Pyramide et Cône de révolution (Géométrie dans l\'espace)',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "En classe de 4ème, la géométrie s'étend à la troisième dimension avec l'étude des solides dits « pointus » : la pyramide et le cône de révolution. Contrairement aux prismes droits et cylindres étudiés en 5ème dont les deux bases sont superposables, la pyramide et le cône possèdent une base unique et convergent vers un sommet principal. L'élève apprend à se repérer en perspective cavalière, à construire leurs patrons et à maîtriser la formule fondamentale de leur volume.",
  fullText: `Leçon 7 : Pyramide et Cône de révolution (Géométrie dans l'espace)

Introduction :
En classe de 4ème, la géométrie s'étend à la troisième dimension avec l'étude des solides dits « pointus » : la pyramide et le cône de révolution. Contrairement aux prismes droits et cylindres étudiés en 5ème dont les deux bases sont superposables, la pyramide et le cône possèdent une base unique et convergent vers un sommet principal. L'élève apprend à se repérer en perspective cavalière, à construire leurs patrons et à maîtriser la formule fondamentale de leur volume.

1. La Pyramide : vocabulaire, description et propriétés
Une pyramide est un solide de l'espace composé :
- D'une base polygonale : un polygone quelconque (triangle, quadrilatère, rectangle, carré, hexagone, etc.).
- D'un sommet principal : un point S situé hors du plan de la base.
- De faces latérales triangulaires : chaque face latérale a pour sommet S et pour côté opposé un côté du polygone de base.
- D'arêtes latérales : les segments reliant le sommet S aux sommets du polygone de base.
- De la hauteur du solide (h) : le segment issu du sommet S perpendiculaire au plan de la base. La longueur de ce segment est la hauteur h.

Pyramide régulière :
Une pyramide est dite régulière lorsque :
1. Sa base est un polygone régulier (triangle équilatéral, carré, etc.).
2. Sa hauteur passe exactement par le centre de la base.
Conséquence : toutes ses faces latérales sont des triangles isocèles superposables.

Tétraèdre : C'est une pyramide à base triangulaire (4 faces au total). Si toutes les faces sont des triangles équilatéraux, c'est un tétraèdre régulier.

2. Le Cône de révolution : description et éléments constitutifs
Un cône de révolution est le solide engendré par la rotation complète (360°) d'un triangle rectangle autour de l'un des côtés de son angle droit.
Il est constitué :
- D'une base circulaire : un disque de rayon R et de centre O.
- D'un sommet principal : un point S situé sur l'axe perpendiculaire au disque passant par son centre O.
- D'une hauteur (h) : la longueur du segment [SO], perpendiculaire au disque de base.
- De génératrices : tout segment joignant le sommet S à un point quelconque du cercle frontière de la base. La longueur de la génératrice est notée g.

Relation de Pythagore dans le cône :
Le triangle formé par le sommet S, le centre de la base O et un point M du cercle de base est un TRIANGLE RECTANGLE EN O.
D'après le théorème de Pythagore :
g² = h² + R²  (Génératrice² = Hauteur² + Rayon²)

3. Formule fondamentale du volume d'une pyramide et d'un cône
PROPRIÉTÉ MAÎTRESSE :
Le volume V d'une pyramide ou d'un cône de révolution est égal au tiers du produit de l'aire de la base par la hauteur.

Formule générale universelle :
V = (Aire de la base × Hauteur) / 3   soit   V = (B × h) / 3

Cas particuliers usuels :
- Pyramide à base rectangulaire (Longueur L, largeur l) :
  B = L × l   =>   V = (L × l × h) / 3
- Pyramide à base carrée (côté c) :
  B = c²      =>   V = (c² × h) / 3
- Cône de révolution (base disque de rayon R) :
  B = π × R²  =>   V = (π × R² × h) / 3

Attention capitale (Distinction Hauteur vs Apothème) :
Dans les calculs de volume, il ne faut JAMAIS utiliser l'apothème (la hauteur inclinée d'une face latérale) ou la génératrice, mais uniquement la HAUTEUR INTÉRIEURE VERTICALE perpendiculaire à la base.

4. Patrons et développements
- Le patron d'une pyramide est constitué du polygone de base entouré des triangles des faces latérales rabattus à plat.
- Le patron d'un cône de révolution se compose d'un disque (la base de rayon R) et d'un secteur circulaire de rayon g (la génératrice). L'angle α de ce secteur se calcule avec la formule de proportionnalité :
  α = (R / g) × 360°`,
  sections: [
    {
      title: '1. Vocabulaire, représentations et formules',
      image: {
        url: SVG_PYRAMIDE_CONE,
        alt: 'Figure 7 : Géométrie dans l\'espace — Pyramide régulière et Cône de révolution',
        caption: 'Figure 7 : Perspective cavalière, hauteur h, arêtes cachées et calcul des volumes V = (Base × h) / 3.'
      },
      subsections: [
        {
          subtitle: 'Éléments d\'une pyramide et d\'un cône',
          content: [
            "• Sommet S : point le plus haut d'où partent les faces latérales ou la surface conique.",
            "• Hauteur h : segment vertical perpendiculaire au plan de base reliant le sommet au centre de la base.",
            "• Génératrice g du cône : segment reliant le sommet S au bord du cercle. Relation : g² = h² + R².",
            "• Aire du disque de base d'un cône : B = π × R²."
          ]
        },
        {
          subtitle: 'La formule universelle du volume',
          content: [
            "• Volume = (Aire de la base × Hauteur) / 3.",
            "• Pour un cône : V = (π × R² × h) / 3.",
            "• Unités : si les longueurs sont en cm, l'aire est en cm² et le volume en cm³ (rappel : 1 dm³ = 1 L = 1 000 cm³)."
          ]
        }
      ]
    },
    {
      title: '2. Exercices complets résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Volume d\'une pyramide du Louvre et calcul de hauteur par Pythagore',
          content: [
            "1. La grande pyramide du Louvre à Paris est une pyramide régulière à base carrée. Le côté de sa base carrée mesure 35 m et sa hauteur verticale est de 21,6 m. Calculer le volume exact de cette pyramide en m³.",
            "2. Soit une pyramide SABCD régulière à base carrée de centre O. Le côté du carré de base est AB = 6 cm. L'arête latérale mesure SA = 5 cm.",
            "   a. Calculer la longueur exacte de la demi-diagonale OA de la base.",
            "   b. En utilisant le théorème de Pythagore dans le triangle SOA rectangle en O, calculer la hauteur SO de la pyramide.",
            "   c. En déduire le volume exact de cette pyramide."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Calcul du volume de la pyramide du Louvre :",
            "   • Aire de la base carrée : B = côté² = 35² = 1 225 m².",
            "   • Formule du volume : V = (B × h) / 3 = (1 225 × 21,6) / 3.",
            "   • Calcul : 1 225 × 21,6 = 26 460  =>  V = 26 460 / 3 = 8 820 m³.",
            "   • Conclusion : Le volume de la pyramide du Louvre est exactement de 8 820 m³.",
            "2. Pyramide SABCD :",
            "   a. Calcul de la demi-diagonale OA :",
            "      - Dans le carré ABCD de côté 6 cm, le triangle ABC est rectangle en B.",
            "      - AC² = AB² + BC² = 6² + 6² = 36 + 36 = 72.",
            "      - AC = √72 = √(36 × 2) = 6√2 cm ≈ 8,485 cm.",
            "      - O étant le centre du carré, O est le milieu de la diagonale [AC] : OA = AC / 2 = 3√2 cm (OA² = 72 / 4 = 18).",
            "   b. Calcul de la hauteur SO dans le triangle SOA rectangle en O :",
            "      - SA² = SO² + OA²  =>  SO² = SA² - OA².",
            "      - Application numérique : SO² = 5² - 18 = 25 - 18 = 7.",
            "      - Hauteur exacte : SO = √7 cm ≈ 2,65 cm.",
            "   c. Calcul du volume :",
            "      - Aire de la base carrée : B = 6 × 6 = 36 cm².",
            "      - Volume V = (B × SO) / 3 = (36 × √7) / 3 = 12√7 cm³ ≈ 31,75 cm³."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Cône de glace, contenance en millilitres et angle du patron',
          content: [
            "Un fabriquant de glaces artisanales produit des cornets de glace ayant la forme d'un cône de révolution parfait.",
            "Le diamètre de l'ouverture (la base circulaire) est d = 6 cm, et la hauteur intérieure verticale du cornet est h = 10 cm.",
            "1. Déterminer le rayon R de la base circulaire du cornet.",
            "2. Calculer le volume intérieur du cornet en cm³ (donner la valeur exacte en fonction de π, puis la valeur arrondie au dixième de cm³).",
            "3. Sachant que 1 cm³ = 1 mL, ce cornet peut-il contenir 90 mL de glace sans déborder ?",
            "4. Calculer la longueur de la génératrice g du cône arrondie au millimètre près."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Rayon de la base :",
            "   • Le rayon est la moitié du diamètre : R = d / 2 = 6 / 2 = 3 cm.",
            "2. Calcul du volume du cône :",
            "   • Aire de la base : B = π × R² = π × 3² = 9π cm².",
            "   • Volume : V = (B × h) / 3 = (9π × 10) / 3 = 90π / 3 = 30π cm³.",
            "   • Valeur exacte : V = 30π cm³.",
            "   • Valeur approchée avec π ≈ 3,14159 : V ≈ 30 × 3,14159 ≈ 94,25 cm³, soit 94,2 cm³ au dixième près.",
            "3. Capacité et comparaison avec 90 mL :",
            "   • La contenance totale est de 94,2 cm³ = 94,2 mL.",
            "   • Comme 94,2 mL > 90 mL, le cornet peut parfaitement contenir 90 mL de glace sans déborder.",
            "4. Longueur de la génératrice g :",
            "   • Dans le triangle rectangle formé par la hauteur, le rayon et la génératrice :",
            "     g² = h² + R² = 10² + 3² = 100 + 9 = 109.",
            "   • Longueur : g = √109 ≈ 10,44 cm, soit 10,4 cm au millimètre près."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : PYRAMIDE ET CÔNE DE RÉVOLUTION',
    root: 'GÉOMÉTRIE DANS L\'ESPACE',
    branches: [
      {
        name: 'ÉLÉMENTS ESSENTIELS',
        subtitle: 'Solides à pointe',
        items: [
          'Sommet S unique',
          'Base : polygone (pyramide) ou disque (cône)',
          'Hauteur h : perpendiculaire abaissée sur la base',
          'Génératrice g (cône) : g² = h² + R²'
        ]
      },
      {
        name: 'FORMULE DE VOLUME',
        subtitle: 'Tiers du prisme/cylindre',
        items: [
          'V = (Aire de la base × Hauteur) / 3',
          'Cône : V = (π × R² × h) / 3',
          'Pyramide carrée : V = (côté² × h) / 3',
          'Jamais l\'apothème dans la formule de volume !'
        ]
      },
      {
        name: 'UNITÉS & CONVERSIONS',
        subtitle: 'Capacité et espace',
        items: [
          '1 dm³ = 1 L = 1 000 cm³',
          '1 cm³ = 1 mL',
          'Valeur exacte avec π vs valeur approchée au dixième'
        ]
      }
    ]
  },
  conclusion:
    "La géométrie dans l'espace en 4ème synthétise l'ensemble des connaissances du collège : application du théorème de Pythagore dans les sections planes des solides, calculs d'aires de polygones et de disques, et maîtrise de la formule universelle du volume (B × h) / 3."
};
