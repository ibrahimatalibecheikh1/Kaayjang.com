import { LessonContent } from './courses';
import {
  SVG_THALES_3EME,
  SVG_TRIGO_3EME,
  SVG_ANGLES_INSCRITS_3EME
} from './diagrams_3eme_math';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 3ÈME (BFEM SÉNÉGAL)
// PARTIE 3 : ACTIVITÉS GÉOMÉTRIQUES (LEÇONS 7, 8 ET 9)
// THALÈS & RÉCIPROQUE, TRIGONOMÉTRIE SOH-CAH-TOA & ANGLES INSCRITS
// AVEC FIGURES VECTORIELLES SVG OBLIGATOIRES ET EXERCICES BFEM CORRIGÉS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 7 : THÉORÈME DE THALÈS ET SA RÉCIPROQUE DANS LE TRIANGLE
// -------------------------------------------------------------------------
export const LESSON_7_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-7',
  number: 'Leçon 7',
  title: 'Théorème de Thalès et sa réciproque',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "Le théorème de Thalès est l'un des théorèmes géométriques les plus célèbres de l'Humanité. Développé par le philosophe et mathématicien grec Thalès de Milet pour mesurer la hauteur de la pyramide de Khéops, il établit une relation de proportionnalité directe entre les longueurs découpées par des droites parallèles sur deux droites sécantes. En classe de 3ème, l'élève doit maîtriser le théorème direct pour calculer des longueurs inconnues (dans les configurations du triangle emboîté et du papillon), et la réciproque du théorème de Thalès pour démontrer rigoureusement le parallélisme de deux droites.",
  fullText: `Leçon 7 : Théorème de Thalès et sa réciproque — Cours complet 3ème

Introduction :
Le théorème de Thalès est l'un des théorèmes géométriques les plus célèbres de l'Humanité. Développé par le philosophe et mathématicien grec Thalès de Milet pour mesurer la hauteur de la pyramide de Khéops, il établit une relation de proportionnalité directe entre les longueurs découpées par des droites parallèles sur deux droites sécantes. En classe de 3ème, l'élève doit maîtriser le théorème direct pour calculer des longueurs inconnues (dans les configurations du triangle emboîté et du papillon), et la réciproque du théorème de Thalès pour démontrer rigoureusement le parallélisme de deux droites.

1. Énoncé du théorème direct de Thalès
Soient (d) et (d') deux droites sécantes en un point A.
Soient B et M deux points de (d) distincts de A.
Soient C et N deux points de (d') distincts de A.
THÉORÈME DIRECT :
Si les droites (BC) et (MN) sont parallèles, alors les rapports des longueurs correspondantes sont égaux :
AM / AB = AN / AC = MN / BC

Les deux configurations fondamentales de 3ème :
- Configuration 1 : Le triangle emboîté. Le point M appartient au segment [AB] et le point N appartient au segment [AC]. Le triangle AMN est une réduction du triangle ABC.
- Configuration 2 : La configuration croisée (dite « papillon »). Le point A est situé entre B et M sur la droite (d), et entre C et N sur la droite (d'). Les droites (BC) et (MN) sont situées de part et d'autre du sommet commun A. L'égalité des trois rapports reste exactement la même !

Utilisation pratique :
Le théorème direct de Thalès sert EXCLUSIVEMENT à calculer des longueurs de segments dès lors que le parallélisme de deux droites est déjà connu ou donné par l'énoncé.

2. Réciproque du théorème de Thalès (Démonstration du parallélisme)
THÉORÈME RÉCIPROQUE :
Soient ABC un triangle, M un point de la droite (AB) et N un point de la droite (AC).
Si :
1. Les points A, M, B d'une part, et A, N, C d'autre part, sont alignés DANS LE MÊME ORDRE,
2. Et si les rapports AM / AB et AN / AC sont égaux : AM / AB = AN / AC,
Alors les droites (MN) et (BC) sont strictement parallèles.

ATTENTION CAPITALE À LA RÉDACTION AU BFEM :
Pour appliquer la réciproque, il est STRICTEMENT OBLIGATOIRE de :
- Calculer séparément les deux quotients AM/AB et AN/AC sous forme de fractions irréductibles ou de nombres décimaux exacts.
- Constater qu'ils sont égaux.
- Préciser formellement que « les points A, M, B et A, N, C sont alignés dans le même ordre ». Sans cette mention de l'ordre des points, le raisonnement est incomplet et pénalisé !

3. Cas où les rapports sont différents (Contraposée du théorème de Thalès)
Si les rapports AM / AB et AN / AC sont différents (AM / AB ≠ AN / AC), alors d'après la contraposée du théorème de Thalès, les droites (MN) et (BC) NE SONT PAS parallèles.

Conclusion :
Le théorème de Thalès est la clé du calcul des distances inaccessibles et de la démonstration du parallélisme. La distinction entre le théorème direct (pour calculer des longueurs) et sa réciproque (pour prouver le parallélisme) doit être parfaitement nette.`,
  sections: [
    {
      title: 'I. Le théorème direct de Thalès et ses configurations',
      content: [
        "1. Hypothèses nécessaires : Deux droites sécantes en A et deux droites parallèles (BC) // (MN).",
        "2. Conclusion d'égalité des trois rapports : AM / AB = AN / AC = MN / BC.",
        "3. Règle du produit en croix pour déterminer une longueur inconnue x : Si AM/AB = MN/BC alors MN = (AM × BC) / AB."
      ],
      image: {
        url: '',
        alt: 'Figure 1 : Théorème de Thalès en 3ème (Configurations emboîtée et papillon)',
        caption: 'Figure 1 : Les deux configurations officielles de Thalès au programme du BFEM.',
        svgContent: SVG_THALES_3EME
      }
    },
    {
      title: 'II. La réciproque du théorème de Thalès',
      content: [
        "1. Objectif : Démontrer que deux droites sont parallèles.",
        "2. Les deux conditions cumulatives obligatoires :",
        "• Calcul séparé : vérifier que AM / AB = AN / AC.",
        "• Ordre des points : mentionner obligatoirement que les points sont alignés dans le même ordre sur chaque sécante."
      ]
    },
    {
      title: 'III. Exercices d\'application corrigés pas-à-pas (BFEM)',
      content: [
        "EXERCICE 1 : Calcul de longueurs par le théorème direct",
        "Énoncé : Soit un triangle ABC tel que AB = 8 cm, AC = 10 cm et BC = 12 cm.",
        "Soit M un point du segment [AB] tel que AM = 3 cm.",
        "La droite parallèle à (BC) passant par M coupe le segment [AC] en N.",
        "1. Calculer la longueur AN.",
        "2. Calculer la longueur MN.",
        "Corrigé détaillé pas-à-pas :",
        "1. Les droites (AB) et (AC) sont sécantes en A. Les points M ∈ [AB] et N ∈ [AC].",
        "Comme la droite (MN) est parallèle à (BC), d'après le théorème de Thalès :",
        "AM / AB = AN / AC = MN / BC.",
        "En remplaçant par les valeurs numériques connues :",
        "3 / 8 = AN / 10 = MN / 12.",
        "Calcul de AN :",
        "3 / 8 = AN / 10 ➔ AN = (3 × 10) / 8 = 30 / 8 = 3,75 cm.",
        "2. Calcul de MN :",
        "3 / 8 = MN / 12 ➔ MN = (3 × 12) / 8 = 36 / 8 = 4,5 cm.",
        "",
        "EXERCICE 2 : Démonstration de parallélisme par la réciproque",
        "Énoncé : Soient deux droites sécantes en O.",
        "Sur une droite, on place les points O, E, F dans cet ordre tels que OE = 4 cm et OF = 6 cm.",
        "Sur l'autre droite, on place O, G, H dans cet ordre tels que OG = 6 cm et OH = 9 cm.",
        "Les droites (EG) et (FH) sont-elles parallèles ?",
        "Corrigé rédigé rigoureusement selon les normes du BFEM :",
        "1. Calculons séparément les rapports :",
        "• OE / OF = 4 / 6 = 2 / 3.",
        "• OG / OH = 6 / 9 = 2 / 3.",
        "On constate que OE / OF = OG / OH.",
        "2. Les points O, E, F d'une part, et O, G, H d'autre part, sont alignés dans le même ordre.",
        "3. D'après la réciproque du théorème de Thalès, les droites (EG) et (FH) sont strictement parallèles."
      ]
    }
  ],
  conclusion:
    "Le théorème de Thalès est la référence absolue pour le traitement des proportions géométriques. Toujours calculer séparément les quotients lors de l'utilisation de la réciproque pour éviter de présumer de l'égalité."
};

// -------------------------------------------------------------------------
// LEÇON 8 : TRIGONOMÉTRIE DANS LE TRIANGLE RECTANGLE
// -------------------------------------------------------------------------
export const LESSON_8_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-8',
  number: 'Leçon 8',
  title: 'Trigonométrie dans le triangle rectangle',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La trigonométrie (du grec trigonos, triangle, et metron, mesure) permet de relier les mesures des angles d'un triangle aux longueurs de ses côtés. En classe de 3ème, elle s'applique exclusivement dans le triangle rectangle. Grâce aux trois rapports trigonométriques — cosinus, sinus et tangente — l'élève peut déterminer la mesure d'un angle aigu à partir de deux côtés, ou calculer la longueur d'un côté à partir d'un angle et d'une longueur connue.",
  fullText: `Leçon 8 : Trigonométrie dans le triangle rectangle — Cours complet 3ème

Introduction :
La trigonométrie (du grec trigonos, triangle, et metron, mesure) permet de relier les mesures des angles d'un triangle aux longueurs de ses côtés. En classe de 3ème, elle s'applique exclusivement dans le triangle rectangle. Grâce aux trois rapports trigonométriques — cosinus, sinus et tangente — l'élève peut déterminer la mesure d'un angle aigu à partir de deux côtés, ou calculer la longueur d'un côté à partir d'un angle et d'une longueur connue.

1. Repérage des côtés par rapport à un angle aigu
Dans un triangle rectangle :
- L'hypoténuse est le côté opposé à l'angle droit (c'est toujours le côté le plus long).
Pour un angle aigu α donné :
- Le côté adjacent est le côté de l'angle qui n'est pas l'hypoténuse.
- Le côté opposé est le côté qui fait face à cet angle aigu.

2. Définitions fondamentales des rapports trigonométriques
Moyen mnémotechnique universel : SOH - CAH - TOA
- SOH : Sinus = Côté Opposé / Hypoténuse
  sin(α) = Opposé / Hypoténuse
- CAH : Cosinus = Côté Adjacent / Hypoténuse
  cos(α) = Adjacent / Hypoténuse
- TOA : Tangente = Côté Opposé / Côté Adjacent
  tan(α) = Opposé / Adjacent

Propriétés fondamentales d'encadrement :
Pour tout angle aigu α (0° < α < 90°) :
- 0 < cos(α) < 1  (car le côté adjacent est strictement plus court que l'hypoténuse).
- 0 < sin(α) < 1  (car le côté opposé est strictement plus court que l'hypoténuse).
- tan(α) > 0 (la tangente peut être supérieure à 1).

3. Relations trigonométriques indispensables
Pour tout angle aigu α :
1. Formule fondamentale de Pythagore :
cos²(α) + sin²(α) = 1
(Notation : cos²(α) signifie [cos(α)]²).
Cette relation permet de calculer le sinus lorsqu'on connaît le cosinus, et réciproquement.

2. Relation entre tangente, sinus et cosinus :
tan(α) = sin(α) / cos(α)

3. Angles complémentaires :
Si deux angles aigus α et β sont complémentaires (c'est-à-dire α + β = 90°), alors :
- cos(α) = sin(β)
- sin(α) = cos(β)
- tan(α) = 1 / tan(β)

4. Valeurs remarquables à connaître par cœur pour le BFEM
Angle α        0°       30°           45°           60°          90°
cos(α)         1       √3 / 2        √2 / 2         1 / 2         0
sin(α)         0       1 / 2         √2 / 2        √3 / 2         1
tan(α)         0       √3 / 3          1            √3        non défini

Conclusion :
La trigonométrie est un outil de calcul direct puissant. Savoir identifier immédiatement le côté opposé et le côté adjacent par rapport à l'angle considéré permet de choisir la bonne formule (SOH, CAH ou TOA) sans hésitation.`,
  sections: [
    {
      title: 'I. Définitions et mnémotechnique SOH-CAH-TOA',
      content: [
        "1. Repérage relatif à l'angle aigu α : côté adjacent, côté opposé et hypoténuse.",
        "2. Formules : cos(α) = Adj / Hyp  ;  sin(α) = Opp / Hyp  ;  tan(α) = Opp / Adj.",
        "3. Valeurs bornées : 0 < cos(α) < 1 et 0 < sin(α) < 1 pour tout angle aigu."
      ],
      image: {
        url: '',
        alt: 'Figure 2 : Trigonométrie dans le triangle rectangle (SOH CAH TOA)',
        caption: 'Figure 2 : Les trois rapports trigonométriques et relations métriques fondamentales.',
        svgContent: SVG_TRIGO_3EME
      }
    },
    {
      title: 'II. Relations remarquables et tableau des angles 30°, 45°, 60°',
      content: [
        "1. cos²(α) + sin²(α) = 1 (Formule de Pythagore sous forme trigonométrique).",
        "2. tan(α) = sin(α) / cos(α).",
        "3. Angles complémentaires (α + β = 90°) : cos(α) = sin(90° - α) et sin(α) = cos(90° - α)."
      ]
    },
    {
      title: 'III. Exercices d\'application résolus pas-à-pas (BFEM)',
      content: [
        "EXERCICE 1 : Calcul de longueur à l'aide de la trigonométrie",
        "Énoncé : Soit ABC un triangle rectangle en A tel que BC = 10 cm et l'angle ABC = 30°.",
        "1. Calculer la valeur exacte de AC.",
        "2. Calculer la valeur exacte de AB.",
        "Corrigé détaillé pas-à-pas :",
        "1. Dans le triangle ABC rectangle en A :",
        "Par rapport à l'angle ABC, [AC] est le côté opposé et [BC] est l'hypoténuse.",
        "On utilise donc le sinus : sin(ABC) = AC / BC.",
        "sin(30°) = AC / 10.",
        "Or, sin(30°) = 1/2. Donc : AC = 10 × (1/2) = 5 cm.",
        "2. Pour calculer AB (côté adjacent) :",
        "cos(ABC) = AB / BC ➔ cos(30°) = AB / 10.",
        "Or, cos(30°) = √3 / 2. Donc : AB = 10 × (√3 / 2) = 5√3 cm.",
        "",
        "EXERCICE 2 : Utilisation des relations trigonométriques",
        "Énoncé : Soit α un angle aigu tel que cos(α) = 3/5.",
        "1. Calculer la valeur exacte de sin(α).",
        "2. En déduire la valeur exacte de tan(α).",
        "Corrigé détaillé pas-à-pas :",
        "1. On sait que cos²(α) + sin²(α) = 1 :",
        "(3/5)² + sin²(α) = 1 ➔ 9/25 + sin²(α) = 1",
        "sin²(α) = 1 - 9/25 = 16/25.",
        "Comme α est un angle aigu, sin(α) > 0 :",
        "sin(α) = √(16/25) = 4/5.",
        "2. Calcul de la tangente :",
        "tan(α) = sin(α) / cos(α) = (4/5) / (3/5) = 4/3."
      ]
    }
  ],
  conclusion:
    "La trigonométrie est l'alliée incontournable de Pythagore dans le triangle rectangle. Elle relie le monde des angles et celui des longueurs avec une efficacité remarquable."
};

// -------------------------------------------------------------------------
// LEÇON 9 : ANGLES INSCRITS ET POLYGONES RÉGULIERS
// -------------------------------------------------------------------------
export const LESSON_9_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-9',
  number: 'Leçon 9',
  title: 'Angles inscrits et polygones réguliers',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La géométrie du cercle recèle des propriétés optiques et métriques élégantes. En classe de 3ème, l'étude des angles inscrits et des angles au centre constitue un chapitre de démonstration géométrique par excellence au BFEM. L'élève découvre la relation remarquable reliant la mesure de l'angle inscrit à celle de l'angle au centre qui intercepte le même arc, et applique ces propriétés à la construction rigoureuse des polygones réguliers (triangles équilatéraux, carrés, hexagones réguliers).",
  fullText: `Leçon 9 : Angles inscrits et polygones réguliers — Cours complet 3ème

Introduction :
La géométrie du cercle recèle des propriétés optiques et métriques élégantes. En classe de 3ème, l'étude des angles inscrits et des angles au centre constitue un chapitre de démonstration géométrique par excellence au BFEM. L'élève découvre la relation remarquable reliant la mesure de l'angle inscrit à celle de l'angle au centre qui intercepte le même arc, et applique ces propriétés à la construction rigoureuse des polygones réguliers (triangles équilatéraux, carrés, hexagones réguliers).

1. Définitions d'un angle inscrit et d'un angle au centre
Soit (C) un cercle de centre O.
- Angle au centre : Un angle au centre est un angle dont le sommet est LE CENTRE O du cercle (ex: AÔB).
- Angle inscrit : Un angle inscrit est un angle dont le SOMMET EST SITUÉ SUR LE CERCLE et dont les côtés coupent ce cercle en deux points distincts (ex: AMB avec M ∈ (C)).
- Arc intercepté : C'est la portion du cercle située entre les côtés de l'angle. On dit que l'angle au centre AÔB et l'angle inscrit AMB interceptent le même arc de cercle AB.

2. Théorème fondamental de l'angle inscrit
THÉORÈME 1 :
Dans un cercle, la mesure d'un angle au centre est égale au double de la mesure de tout angle inscrit qui intercepte le même arc.
Formulation mathématique :
Mes(AÔB) = 2 × Mes(AMB)
ou de façon équivalente :
Mes(AMB) = (1/2) × Mes(AÔB).

THÉORÈME 2 (Deux angles inscrits) :
Dans un cercle, deux angles inscrits qui interceptent le même arc de cercle ont EXACTEMENT LA MÊME MESURE.
Si M et N sont deux points du cercle situés du même côté de la corde [AB], alors :
Mes(AMB) = Mes(ANB).

3. Cas particulier du demi-cercle (Triangle rectangle inscrit)
Si l'arc intercepté est un demi-cercle, l'angle au centre AÔB est un angle plat (180°).
Alors tout angle inscrit AMB intercepte ce diamètre [AB] et mesure :
Mes(AMB) = 180° / 2 = 90°.
Propriété : Si un triangle AMB est inscrit dans un cercle de diamètre l'un de ses côtés [AB], alors ce triangle est RECTANGLE en M.

4. Polygones réguliers inscrits dans un cercle
Définition : Un polygone est dit régulier lorsque tous ses côtés ont la même longueur et tous ses angles intérieurs ont la même mesure.
Tout polygone régulier à n côtés est inscriptible dans un cercle.
L'angle au centre qui sous-tend chaque côté mesure exactement :
α = 360° / n.

Exemples classiques au programme :
- Triangle équilatéral (n = 3) : angle au centre = 360° / 3 = 120°.
- Carré (n = 4) : angle au centre = 360° / 4 = 90°.
- Hexagone régulier (n = 6) : angle au centre = 360° / 6 = 60°.
Dans un hexagone régulier, chaque triangle formé par le centre O et deux sommets consécutifs est un TRIANGLE ÉQUILATÉRAL. Le côté de l'hexagone est donc exactement égal au rayon R du cercle circonscrit !

Conclusion :
La relation entre angle inscrit et angle au centre est une arme de démonstration puissante. Elle permet d'établir des égalités d'angles sans aucun calcul de longueur et constitue la base de l'étude des figures circulaires.`,
  sections: [
    {
      title: 'I. Définitions et théorèmes fondamentaux',
      content: [
        "1. Angle inscrit AMB (sommet sur le cercle) vs angle au centre AÔB (sommet au centre O).",
        "2. Relation maîtresse : Mes(AÔB) = 2 × Mes(AMB).",
        "3. Égalité des angles inscrits interceptant le même arc : Mes(AMB) = Mes(ANB)."
      ],
      image: {
        url: '',
        alt: 'Figure 3 : Angle au centre et angles inscrits interceptant le même arc',
        caption: 'Figure 3 : Propriétés angulaires fondamentales du cercle au BFEM.',
        svgContent: SVG_ANGLES_INSCRITS_3EME
      }
    },
    {
      title: 'II. Polygones réguliers et angles au centre',
      content: [
        "1. Formule de l'angle au centre d'un polygone régulier à n côtés : α = 360° / n.",
        "2. Triangle équilatéral (120°), Carré (90°), Pentagone régulier (72°), Hexagone régulier (60°).",
        "3. Propriété de l'hexagone régulier : côté du polygone = rayon R du cercle."
      ]
    },
    {
      title: 'III. Exercice d\'application corrigé (BFEM)',
      content: [
        "EXERCICE RÉSOLU : Démonstration angulaire dans un cercle",
        "Énoncé : Soit (C) un cercle de centre O. Soient A et B deux points du cercle tels que l'angle au centre AÔB = 80°.",
        "Soit M un point du grand arc AB et N un autre point de ce même grand arc.",
        "1. Calculer la mesure de l'angle inscrit AMB.",
        "2. En déduire la mesure de l'angle ANB.",
        "Corrigé détaillé pas-à-pas :",
        "1. L'angle inscrit AMB et l'angle au centre AÔB interceptent le même arc de cercle AB.",
        "D'après le théorème de l'angle inscrit :",
        "Mes(AMB) = (1/2) × Mes(AÔB) = 80° / 2 = 40°.",
        "2. L'angle inscrit ANB intercepte également l'arc de cercle AB.",
        "D'après la propriété des angles inscrits interceptant le même arc :",
        "Mes(ANB) = Mes(AMB) = 40°."
      ]
    }
  ],
  conclusion:
    "Les propriétés des angles inscrits permettent de démontrer rapidement des égalités d'angles ou la nature d'un triangle inscrit sans recours à des calculs complexes."
};
