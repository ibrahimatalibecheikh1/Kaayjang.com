import { LessonContent } from './courses';
import {
  SVG_MATH5_FIG1_SYMETRIE_CENTRALE,
  SVG_MATH5_FIG2_ANGLES_PARALLELES,
  SVG_MATH5_FIG3_TRIANGLE_ANGLES
} from './diagrams_5eme_math';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 5ÈME
// PARTIE 3 : ACTIVITÉS GÉOMÉTRIQUES (LEÇONS 8 À 10)
// PROGRAMME OFFICIEL SÉNÉGALAIS & FRANCOPHONE
// INCLUT OBLIGATOIREMENT LES FIGURES 1, 2 ET 3 DU DOCUMENT OFFICIEL
// ET 4 EXERCICES D'APPLICATION COMPLETS AVEC CORRIGÉS DÉTAILLÉS PAR LEÇON
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 8 : SYMÉTRIE CENTRALE
// -------------------------------------------------------------------------
export const LESSON_8_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-8',
  number: 'Leçon 8',
  title: 'Symétrie centrale',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "La symétrie centrale, ou symétrie par rapport à un point, correspond géométriquement à un demi-tour (rotation d'un angle de 180°) autour d'un centre fixe O. Contrairement à la symétrie axiale (effet miroir avec retournement dans l'espace), la symétrie centrale préserve l'orientation plane des figures tout en inversant le haut et le bas, la gauche et la droite. C'est une isométrie remarquable qui conserve scrupuleusement les distances, les alignements, les angles et les aires.",
  fullText: `Leçon 8 : Symétrie centrale

Introduction :
La symétrie centrale correspond géométriquement à un demi-tour (rotation de 180°) autour d'un point fixe O appelé centre de symétrie. Deux figures symétriques par rapport à un point sont parfaitement superposables après ce demi-tour.

1. Définition mathématique du symétrique d'un point
Deux points distincts A et A' sont dits symétriques par rapport à un point O si le point O est le MILIEU exact du segment [AA'].
Conséquences immédiates :
- Les points A, O et A' sont alignés dans cet ordre.
- La distance OA est égale à la distance OA' : OA = OA'.
- Le symétrique du centre O par rapport à lui-même est le point O lui-même (O est un point invariant).

2. Construction géométrique de l'image de figures usuelles
Pour construire le symétrique d'une figure par rapport à un point O, on construit le symétrique de ses points caractéristiques (sommets, centre) :
• Segment : Le symétrique d'un segment [AB] par rapport à O est un segment [A'B'] de même longueur (AB = A'B') et les droites supports (AB) et (A'B') sont strictement parallèles !
• Droite : Le symétrique d'une droite (d) par rapport à O est une droite (d') qui lui est strictement parallèle.
• Cercle : Le symétrique d'un cercle de centre C et de rayon R est un cercle de centre C' (symétrique de C par rapport à O) et de MÊME rayon R.

3. Propriétés fondamentales de conservation
La symétrie centrale est une transformation géométrique conservatrice (isométrie) :
• Conservation de l'alignement : Si trois points A, B, C sont alignés, leurs symétriques A', B', C' sont également alignés.
• Conservation des longueurs : La longueur d'un segment est conservée : A'B' = AB.
• Conservation des mesures d'angles : L'angle géométrique symétrique d'un angle donné a exactement la même mesure en degrés.
• Conservation du parallélisme et de l'orthogonalité : Deux droites parallèles ont pour symétriques deux droites parallèles. Deux droites perpendiculaires ont pour symétriques deux droites perpendiculaires.
• Conservation des aires : Une figure et sa symétrique ont exactement la même aire.

4. Centre de symétrie d'une figure géométrique
Une figure possède un centre de symétrie O si elle est sa propre image par la symétrie centrale de centre O.
Exemples classiques :
- Le milieu d'un segment est son centre de symétrie.
- Le centre d'un cercle est son centre de symétrie.
- Le point d'intersection des diagonales d'un parallélogramme (rectangle, losange, carré) est le centre de symétrie de ce quadrilatère.
- Un triangle quelconque ou isocèle ne possède aucun centre de symétrie.`,
  sections: [
    {
      title: '1. Définition fondamentale et Figure 1 officielle',
      image: {
        url: SVG_MATH5_FIG1_SYMETRIE_CENTRALE,
        alt: 'Figure 1 : Symétrie centrale du point A par rapport au centre O',
        caption:
          'Figure 1 : Symétrie centrale du point A par rapport au centre O. Les points A, O et A\' sont alignés, O est le milieu du segment [AA\'] et OA = OA\'.'
      },
      subsections: [
        {
          subtitle: 'A. Méthode de tracé à la règle et au compas',
          content: [
            '1. Tracer la demi-droite [AO).',
            '2. Avec le compas pointé en O, mesurer l\'écartement OA.',
            '3. Reporter cet écartement de l\'autre côté de O sur la demi-droite pour placer A\'.',
            '4. Coder l\'égalité des segments OA = OA\'.'
          ]
        },
        {
          subtitle: 'B. Synthèse des propriétés de conservation',
          content: [
            'La symétrie centrale conserve :',
            '• Les longueurs (A\'B\' = AB)',
            '• L\'alignement des points',
            '• Les angles et le parallélisme',
            '• Les aires et périmètres'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Tracé et calcul de longueurs symétriques',
          content: [
            'Énoncé : Soit un segment [AB] mesurant 6 cm et un point O n\'appartenant pas à la droite (AB). On note A\' et B\' les symétriques respectifs de A et B par rapport à O.',
            '1. Quelle est la longueur du segment [A\'B\'] ? Justifier par une propriété du cours.',
            '2. Quelle est la position relative des droites (AB) et (A\'B\') ? Justifier.',
            'Corrigé détaillé :',
            '1. La symétrie centrale conserve les longueurs des segments.',
            '   Comme A\' et B\' sont les symétriques de A et B par rapport à O, on a A\'B\' = AB = 6 cm.',
            '2. Le symétrique d\'une droite par rapport à un point est une droite qui lui est parallèle.',
            '   Par conséquent, les droites (AB) et (A\'B\') sont strictement parallèles : (AB) // (A\'B\').'
          ]
        },
        {
          subtitle: 'Exercice 2 : Conservation des mesures d\'angles',
          content: [
            'Énoncé : Soit un triangle MNP rectangle en M tel que l\'angle MNP mesure 35°. On construit le triangle M\'N\'P\' symétrique de MNP par rapport à un point I.',
            '1. Quelle est la nature du triangle M\'N\'P\' ? Justifier.',
            '2. Déterminer la mesure de l\'angle M\'N\'P\', puis celle de l\'angle M\'P\'N\'.',
            'Corrigé détaillé :',
            '1. La symétrie centrale conserve les mesures des angles et l\'orthogonalité.',
            '   Le triangle M\'N\'P\' est donc également un triangle rectangle en M\'.',
            '2. Mesures d\'angles :',
            '   • Angle M\'N\'P\' = Angle MNP = 35° par conservation des angles.',
            '   • Dans un triangle rectangle, les deux angles aigus sont complémentaires (leur somme vaut 90°).',
            '   Donc Angle M\'P\'N\' = 90° - 35° = 55°.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Recherche de centres de symétrie',
          content: [
            'Énoncé : Parmi les figures suivantes, indiquer celles qui possèdent un centre de symétrie et préciser sa position exacte :',
            '1. Un segment [EF] de 8 cm.',
            '2. Un triangle équilatéral ABC.',
            '3. Un rectangle KLMN.',
            '4. Un cercle (C) de centre O et de rayon 4 cm.',
            'Corrigé détaillé :',
            '1. Le segment [EF] possède un centre de symétrie : le milieu du segment [EF].',
            '2. Un triangle équilatéral ne possède AUCUN centre de symétrie (un demi-tour inverse la pointe vers le bas, la figure ne se superpose pas à elle-même).',
            '3. Le rectangle KLMN possède un centre de symétrie : le point de concours de ses deux diagonales [KM] et [LN].',
            '4. Le cercle (C) possède un centre de symétrie : son propre centre O.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Démonstration géométrique avec parallélogramme',
          content: [
            'Énoncé : Soient trois points non alignés A, B et C. On désigne par I le milieu du segment [BC], et on construit le point D symétrique de A par rapport à I.',
            '1. Quelle est la nature exacte du quadrilatère ABDC ? Démontrer.',
            '2. En déduire que le segment [BD] est parallèle et égal au segment [AC].',
            'Corrigé détaillé :',
            '1. Données : I est le milieu du segment [BC] par hypothèse.',
            '   Comme D est le symétrique de A par rapport à I, I est également le milieu du segment [AD].',
            '   Propriété : Un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme.',
            '   Conclusion : Le quadrilatère ABDC est un parallélogramme.',
            '2. Dans un parallélogramme, les côtés opposés sont parallèles et de même longueur.',
            '   Par conséquent, (BD) // (AC) et BD = AC.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse de la symétrie centrale',
    root: 'Symétrie centrale (Demi-tour)',
    branches: [
      {
        name: 'Définition',
        subtitle: 'Milieu obligatoire',
        items: ['A, O, A\' alignés', 'O milieu de [AA\']', 'OA = OA\'']
      },
      {
        name: 'Conservations',
        subtitle: 'Propriétés invariantes',
        items: ['Longueurs des segments', 'Mesures des angles', 'Parallélisme et droites', 'Aires et périmètres']
      },
      {
        name: 'Figures usuelles',
        subtitle: 'Images géométriques',
        items: ['Segment ➔ Segment égal et parallèle', 'Droite ➔ Droite parallèle', 'Cercle ➔ Cercle de même rayon']
      }
    ]
  },
  conclusion:
    "La symétrie centrale est la transformation fondatrice de la géométrie au cycle 4. Elle fournit des outils de démonstration puissants pour valider les propriétés des parallélogrammes et des figures usuelles."
};

// -------------------------------------------------------------------------
// LEÇON 9 : LES ANGLES
// -------------------------------------------------------------------------
export const LESSON_9_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-9',
  number: 'Leçon 9',
  title: 'Les Angles',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "L'étude des angles permet de caractériser l'inclinaison mutuelle des droites et de prouver le parallélisme ou l'orthogonalité dans le plan. En classe de 5ème, l'élève découvre les angles opposés par le sommet ainsi que la configuration majeure formée par deux droites coupées par une sécante : les angles alternes-internes et les angles correspondants.",
  fullText: `Leçon 9 : Les Angles

Introduction :
L'étude des angles permet de caractériser l'inclinaison des droites. En 5ème, l'élève apprend à identifier les angles opposés par le sommet ainsi que les angles alternes-internes et correspondants formés par deux droites coupées par une sécante.

1. Angles opposés par le sommet
Définition :
Deux angles sont dits opposés par le sommet s'ils vérifient deux conditions simultanées :
1. Ils ont le même sommet commun.
2. Leurs côtés sont dans le prolongement l'un de l'autre (formés par l'intersection de deux droites sécantes).
Propriété fondamentale :
Deux angles opposés par le sommet ont toujours la MÊME mesure.
Démonstration : Deux angles opposés par le sommet sont symétriques l'un de l'autre par rapport à leur sommet commun O. La symétrie centrale conservant les mesures d'angles, ils sont nécessairement égaux.

2. Angles formés par deux droites et une sécante
Soient deux droites quelconques (d1) et (d2) coupées par une troisième droite sécante (Δ) en deux points distincts I et J. Cette configuration engendre huit angles au total :
• Angles alternes-internes :
Deux angles sont alternes-internes s'ils sont situés :
- À l'intérieur de la bande délimitée par les droites (d1) et (d2) (d'où le mot 'internes').
- De part et d'autre (alternativement à gauche et à droite) de la sécante (Δ) (d'où le mot 'alternes').
- Sans avoir le même sommet (l'un au sommet I, l'autre au sommet J).
• Angles correspondants :
Deux angles sont correspondants s'ils sont situés :
- Du même côté de la droite sécante (Δ).
- L'un à l'intérieur de la bande, l'autre à l'extérieur (dans la même position relative par rapport à chaque droite).

3. Propriétés relatives aux droites parallèles
• Théorème direct (Parallèles ➔ Égalité des angles) :
Si deux droites parallèles sont coupées par une droite sécante, alors :
- Elles forment des angles alternes-internes de MÊME mesure.
- Elles forment des angles correspondants de MÊME mesure.
• Théorème réciproque (Égalité des angles ➔ Droites parallèles) :
Si deux droites coupées par une sécante forment des angles alternes-internes égaux (ou des angles correspondants égaux), alors ces deux droites sont STRICTEMENT PARALLÈLES.
Ce théorème réciproque est une méthode reine pour démontrer qu'un réseau de deux droites est parallèle.

4. Rappels : Angles complémentaires et supplémentaires
- Deux angles sont complémentaires si la somme de leurs mesures est égale à 90°.
- Deux angles sont supplémentaires si la somme de leurs mesures est égale à 180°.`,
  sections: [
    {
      title: '1. Configurations d\'angles et Figure 2 officielle',
      image: {
        url: SVG_MATH5_FIG2_ANGLES_PARALLELES,
        alt: 'Figure 2 : Deux droites parallèles coupées par une sécante',
        caption:
          'Figure 2 : Deux droites parallèles (d1) et (d2) coupées par une sécante (Δ). Les angles alternes-internes (en violet) sont égaux, et les angles correspondants (en vert) sont égaux.'
      },
      subsections: [
        {
          subtitle: 'A. Repérage visuel des angles alternes-internes',
          content: [
            'Les angles alternes-internes forment un motif visuel caractéristique en « Z » ou en « N » inversé.',
            'Dès que les deux barres horizontales du « Z » sont parallèles, les angles intérieurs aux coins sont rigoureusement égaux.'
          ]
        },
        {
          subtitle: 'B. Critère pour prouver le parallélisme',
          content: [
            'Pour prouver que deux droites (d1) et (d2) sont parallèles :',
            'Il suffit de trouver UNE paire d\'angles alternes-internes égaux, OU une paire d\'angles correspondants égaux.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Angles opposés par le sommet',
          content: [
            'Énoncé : Deux droites sécantes (AB) et (CD) se coupent en un point O. L\'angle AOC mesure 42°.',
            '1. Donner la mesure de l\'angle BOD en justifiant.',
            '2. Calculer la mesure de l\'angle AOD.',
            'Corrigé détaillé :',
            '1. Les angles AOC et BOD ont le sommet commun O et leurs côtés sont dans le prolongement l\'un de l\'autre. Ils sont donc opposés par le sommet.',
            '   Propriété : Deux angles opposés par le sommet sont égaux.',
            '   Conclusion : Angle BOD = Angle AOC = 42°.',
            '2. Les points C, O, D étant alignés, les angles AOC et AOD sont supplémentaires (leur somme vaut 180°).',
            '   Angle AOD = 180° - 42° = 138°.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Calcul d\'angles alternes-internes et correspondants',
          content: [
            'Énoncé : Deux droites parallèles (d1) et (d2) sont coupées par une sécante (Δ). L\'un des angles alternes-internes mesure 68°.',
            '1. Quelle est la mesure de l\'autre angle alterne-interne ?',
            '2. Quelle est la mesure de l\'angle correspondant associé ?',
            '3. Déterminer la mesure des six autres angles de la figure.',
            'Corrigé détaillé :',
            '1. Puisque les droites (d1) et (d2) sont parallèles, les angles alternes-internes ont la même mesure. L\'autre angle alterne-interne mesure donc 68°.',
            '2. De même, les angles correspondants ont la même mesure : l\'angle correspondant mesure 68°.',
            '3. Parmi les 8 angles formés par la sécante :',
            '   - 4 angles sont aigus et mesurent tous 68° (par égalité des alternes-internes, correspondants et opposés par le sommet).',
            '   - Les 4 autres angles sont obtus et supplémentaires aux angles aigus : 180° - 68° = 112°.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Démontrer que deux droites sont parallèles',
          content: [
            'Énoncé : Deux droites (xy) et (zt) sont coupées par une sécante (uv) en deux points E et F. On sait que l\'angle xEF mesure 54° et l\'angle EFt mesure 54°. Les angles xEF et EFt sont alternes-internes.',
            'Les droites (xy) et (zt) sont-elles parallèles ? Justifier.',
            'Corrigé détaillé :',
            '• Les angles xEF et EFt sont en position d\'angles alternes-internes.',
            '• D\'après les données, Angle xEF = 54° et Angle EFt = 54°, ils ont donc la même mesure.',
            '• Théorème réciproque : Si deux droites coupées par une sécante forment des angles alternes-internes de même mesure, alors ces deux droites sont parallèles.',
            '• Conclusion : Les droites (xy) et (zt) sont strictement parallèles : (xy) // (zt).'
          ]
        },
        {
          subtitle: 'Exercice 4 : Problème géométrique avec triangle et parallèles',
          content: [
            'Énoncé : Soit un triangle ABC. On trace la droite (d) passant par A et parallèle au côté (BC). On sait que l\'angle ABC mesure 70° et l\'angle ACB mesure 50°.',
            'En utilisant les angles alternes-internes formés par la droite (d) et la droite (BC), déterminer la mesure de l\'angle BAC.',
            'Corrigé détaillé :',
            '1. La droite (d) est parallèle à (BC) et coupée par la sécante (AB) : elle forme avec (d) un angle alterne-interne égal à l\'angle ABC = 70°.',
            '2. La droite (d) coupée par la sécante (AC) forme un angle alterne-interne égal à l\'angle ACB = 50°.',
            '3. Ces deux angles et l\'angle BAC forment un angle plat de 180° au sommet A :',
            '   70° + Angle BAC + 50° = 180°',
            '   Angle BAC = 180° - (70° + 50°) = 180° - 120° = 60°.',
            '   (On retrouve la propriété fondamentale que la somme des angles du triangle vaut 180°).'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse des relations d\'angles',
    root: 'Relations entre angles',
    branches: [
      {
        name: 'Opposés par le sommet',
        subtitle: 'Même sommet',
        items: ['Côtés dans le prolongement', 'Toujours de même mesure']
      },
      {
        name: 'Alternes-internes',
        subtitle: 'Motif en Z',
        items: ['Entre les deux droites', 'De part et d\'autre de la sécante', 'Égaux si les droites sont parallèles']
      },
      {
        name: 'Correspondants',
        subtitle: 'Même position relative',
        items: ['Du même côté de la sécante', 'Égaux si les droites sont parallèles']
      }
    ]
  },
  conclusion:
    "La caractérisation des angles alternes-internes et correspondants est la clé angulaire reliant la notion d'angle au parallélisme des droites dans le plan euclidien."
};

// -------------------------------------------------------------------------
// LEÇON 10 : LES TRIANGLES
// -------------------------------------------------------------------------
export const LESSON_10_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-10',
  number: 'Leçon 10',
  title: 'Les Triangles',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "Le triangle est le polygone fondamental indéformable qui sous-tend toute la géométrie plane et l'architecture moderne. En classe de 5ème, l'élève approfondit trois piliers majeurs : l'inégalité triangulaire (condition nécessaire et suffisante d'existence et de constructibilité), le théorème universel de la somme des trois angles intérieurs (égal à 180°), et les quatre familles de droites remarquables (médiatrices, hauteurs, bissectrices et médianes).",
  fullText: `Leçon 10 : Les Triangles

Introduction :
Le triangle est le polygone le plus simple et le plus rigide de la géométrie. En classe de 5ème, on étudie l'inégalité triangulaire, la somme des trois angles intérieurs et les quatre familles de droites remarquables.

1. L'inégalité triangulaire et constructibilité
Théorème fondamental :
Dans un triangle, la longueur de chaque côté est strictement inférieure à la somme des longueurs des deux autres côtés.
Pour trois points distincts A, B et C :
AB < AC + BC
AC < AB + BC
BC < AB + AC
• Règle pratique de constructibilité d'un triangle :
Pour vérifier si un triangle dont on connaît les trois longueurs est constructible, il suffit de vérifier que LA PLUS GRANDE LONGUEUR est STRICTEMENT INFÉRIEURE à la somme des deux autres longueurs.
- Si le plus grand côté < somme des deux autres : le triangle est constructible.
- Si le plus grand côté = somme des deux autres : les trois points sont alignés (le point intermédiaire appartient au segment joignant les deux autres : cas d'un 'triangle aplati').
- Si le plus grand côté > somme des deux autres : le triangle est impossible à tracer (les arcs de cercle ne se croisent pas).

2. Somme des angles d'un triangle
Théorème universel :
Dans N'IMPORTE QUEL triangle, la somme des mesures des trois angles intérieurs est TOUJOURS ÉGALE À 180°.
Pour tout triangle ABC :
Mesure(Â) + Mesure(B̂) + Mesure(Ĉ) = 180°.
Conséquences immédiates pour les triangles particuliers :
- Triangle rectangle : Il possède un angle droit de 90°. Par conséquent, la somme des deux autres angles aigus vaut 90° (ils sont complémentaires).
- Triangle isocèle : Ses deux angles à la base ont la même mesure. Si l'angle au sommet principal mesure a, chaque angle à la base mesure (180° - a) / 2.
- Triangle équilatéral : Ses trois côtés sont égaux et ses trois angles sont égaux : chaque angle mesure exactement 180° / 3 = 60°.

3. Les quatre droites remarquables du triangle
• 1. La médiatrice :
Droite perpendiculaire à un côté en son milieu. Les trois médiatrices d'un triangle sont concourantes en un point qui est le centre du cercle circonscrit au triangle (passant par ses trois sommets).
• 2. La hauteur :
Droite passant par un sommet et perpendiculaire au côté opposé. Les trois hauteurs sont concourantes en un point appelé l'orthocentre du triangle.
• 3. La bissectrice :
Demi-droite qui partage un angle en deux angles de même mesure. Les trois bissectrices intérieures se coupent en un point qui est le centre du cercle inscrit (tangent intérieurement aux trois côtés).
• 4. La médiane :
Droite passant par un sommet et par le milieu du côté opposé. Les trois médianes sont concourantes au centre de gravité G du triangle, situé aux 2/3 de chaque médiane en partant du sommet.`,
  sections: [
    {
      title: '1. Théorème des 180° et Figure 3 officielle',
      image: {
        url: SVG_MATH5_FIG3_TRIANGLE_ANGLES,
        alt: 'Figure 3 : Triangle ABC quelconque • Somme des angles = 180°',
        caption:
          'Figure 3 : Triangle ABC quelconque. Somme universelle des trois angles : Â + B̂ + Ĉ = 180°. Tracé de la hauteur issue de A et de la médiane passant par le milieu M de [BC].'
      },
      subsections: [
        {
          subtitle: 'A. Test de constructibilité',
          content: [
            'Comparer la plus grande longueur avec la somme des deux autres :',
            '• Plus grande < somme : Triangle constructible.',
            '• Plus grande = somme : Points alignés.',
            '• Plus grande > somme : Impossible.'
          ]
        },
        {
          subtitle: 'B. Récapitulatif des 4 droites remarquables',
          content: [
            '• Médiatrice : ⟂ au milieu d\'un côté ➔ Centre du cercle circonscrit.',
            '• Hauteur : Issue d\'un sommet et ⟂ au côté opposé ➔ Orthocentre.',
            '• Bissectrice : Partage un angle en 2 angles égaux ➔ Centre du cercle inscrit.',
            '• Médiane : Relie un sommet au milieu du côté opposé ➔ Centre de gravité G.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Test de constructibilité de triangles',
          content: [
            'Énoncé : Dans chaque cas, préciser en justifiant si le triangle ABC est constructible :',
            '1. AB = 8 cm, AC = 5 cm, BC = 4 cm.',
            '2. AB = 13 cm, AC = 7 cm, BC = 5 cm.',
            '3. AB = 11 cm, AC = 6 cm, BC = 5 cm.',
            'Corrigé détaillé :',
            '1. La plus grande longueur est AB = 8 cm. Somme des deux autres : AC + BC = 5 + 4 = 9 cm.',
            '   Comme 8 < 9, le triangle ABC est bien constructible.',
            '2. La plus grande longueur est AB = 13 cm. Somme des deux autres : AC + BC = 7 + 5 = 12 cm.',
            '   Comme 13 > 12, les arcs ne se coupent pas : le triangle ABC n\'est PAS constructible.',
            '3. La plus grande longueur est AB = 11 cm. Somme des deux autres : AC + BC = 6 + 5 = 11 cm.',
            '   Comme AB = AC + BC, les points A, C et B sont alignés : le triangle est dit aplati.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Calcul d\'angles dans des triangles quelconques et rectangles',
          content: [
            'Énoncé :',
            '1. Dans un triangle RST, l\'angle R mesure 58° et l\'angle S mesure 74°. Calculer la mesure de l\'angle T.',
            '2. Soit un triangle KLM rectangle en K tel que l\'angle L mesure 36°. Calculer la mesure de l\'angle M.',
            'Corrigé détaillé :',
            '1. Dans le triangle RST, la somme des trois angles vaut 180° :',
            '   Angle T = 180° - (58° + 74°) = 180° - 132° = 48°.',
            '2. Dans le triangle KLM rectangle en K, les angles aigus L et M sont complémentaires (somme = 90°) :',
            '   Angle M = 90° - 36° = 54°.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Calcul d\'angles dans un triangle isocèle',
          content: [
            'Énoncé : Soit un triangle EFG isocèle en E tel que l\'angle au sommet principal E mesure 50°.',
            '1. Que peut-on dire des angles à la base F et G ?',
            '2. Calculer la mesure exacte de chacun des angles F et G.',
            'Corrigé détaillé :',
            '1. Un triangle isocèle a ses deux angles à la base de même mesure : Angle F = Angle G.',
            '2. La somme des angles vaut 180° :',
            '   Somme des angles à la base = 180° - Angle E = 180° - 50° = 130°.',
            '   Comme ils sont égaux : Angle F = Angle G = 130° ÷ 2 = 65° chacun.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Droites remarquables et cercle circonscrit',
          content: [
            'Énoncé : Soit un triangle ABC quelconque.',
            '1. Définir précisément la médiatrice du segment [AB].',
            '2. Comment construit-on le cercle circonscrit au triangle ABC ?',
            '3. Où se situe le centre du cercle circonscrit si le triangle ABC est rectangle en A ?',
            'Corrigé détaillé :',
            '1. La médiatrice du segment [AB] est la droite perpendiculaire à [AB] qui passe par son milieu.',
            '2. Pour construire le cercle circonscrit, on trace les médiatrices de deux côtés du triangle (par exemple [AB] et [BC]). Leur point d\'intersection O est le centre du cercle circonscrit. On trace ensuite le cercle de centre O passant par A (il passe obligatoirement par B et C).',
            '3. Propriété remarquable : Dans un triangle rectangle en A, le centre du cercle circonscrit est exactement le MILIEU DE L\'HYPOTÉNUSE [BC] !'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse des propriétés du triangle',
    root: 'Les Triangles en 5ème',
    branches: [
      {
        name: 'Constructibilité',
        subtitle: 'Inégalité triangulaire',
        items: ['Plus grand côté < somme des 2 autres', 'Si égal : points alignés']
      },
      {
        name: 'Angles',
        subtitle: 'Somme = 180°',
        items: ['Rectangle : angles aigus = 90°', 'Isocèle : angles à la base égaux', 'Équilatéral : 3 angles de 60°']
      },
      {
        name: '4 Droites remarquables',
        subtitle: 'Points de concours',
        items: ['Médiatrices ➔ Cercle circonscrit', 'Hauteurs ➔ Orthocentre', 'Bissectrices ➔ Cercle inscrit', 'Médianes ➔ Centre de gravité G']
      }
    ]
  },
  conclusion:
    "L'inégalité triangulaire et la somme des angles à 180° sont deux lois absolues de la géométrie euclidienne. Les droites remarquables révèlent l'équilibre et les symétries cachées de tout triangle."
};
