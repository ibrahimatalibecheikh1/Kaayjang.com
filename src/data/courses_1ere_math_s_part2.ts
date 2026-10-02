import { LessonContent } from './courses';
import {
  SVG_MATH_1ERE_BARYCENTRE_AL_KASHI,
  SVG_MATH_1ERE_CERCLE_TRIGONOMETRIQUE
} from './diagrams_1ere_math';

// =========================================================================
// MATHÉMATIQUES — PREMIÈRE S (S1 & S2) — PARTIE 2 : GÉOMÉTRIE & TRIGONOMÉTRIE
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (Sénégal)
// Leçons approfondies sans résumé, grands axes en chiffres romains & figures obligatoires
// =========================================================================

export const LESSON_8_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-8',
  number: '8',
  title: 'CHAPITRE S-8 : CALCUL VECTORIEL ET BARYCENTRES DANS LE PLAN ET DANS L’ESPACE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Géométrie • Barycentres et Vecteurs',
  level: 'Première S (S1 & S2)',
  readTime: '50 min de lecture approfondie',
  description: 'Définition du barycentre de n points pondérés, condition d’existence Σαᵢ ≠ 0, associativité (barycentre partiel), coordonnées barycentriques et centre de gravité d’un triangle et d’un tétraèdre.',
  image: {
    caption: 'Figure S-8 : Barycentre G de trois points pondérés (A, α), (B, β) et (C, γ) — Droites de barycentres partiels et centre de gravité d’un triangle.',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  diagram: {
    title: 'Barycentres et Calcul Vectoriel',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  introduction: `La notion de barycentre, introduite par Archimède dans son traité sur l'équilibre des figures planes puis développée par Möbius en 1827, est issue de la statique mécanique et du centre de gravité des corps matériels. En géométrie vectorielle de Première S, le barycentre constitue un outil d'une puissance exceptionnelle permettant de traduire des alignements de points, des concours de droites et des équilibres vectoriels sous une forme algébrique concise.
Ce chapitre établit la condition d'existence impérative du barycentre (somme des coefficients non nulle), démontre la propriété fondamentale de réduction vectorielle pour tout point M de l'espace, formalise le théorème d'associativité (barycentre partiel) et calcule les coordonnées barycentriques cartésiennes.`,
  conclusion: `En conclusion, le barycentre est l'instrument de prédilection pour résoudre les problèmes de géométrie affine : trois points A, B, C forment un repère barycentrique du plan, et les droites remarquables d'un triangle (médianes, bissectrices intérieures) s'interprètent directement en termes de barycentres pondérés. La droite d'Euler reliant le centre de gravité G, l'orthocentre H et le centre du cercle circonscrit O vérifie la relation vectorielle célèbre OH = 3 OG.`,
  sections: [
    {
      title: 'I. DÉFINITION ET CONDITION D\'EXISTENCE DU BARYCENTRE',
      content: [
        '1. Système de points pondérés :',
        'Un point pondéré est un couple (A, α) où A est un point du plan (ou de l\'espace) et α un nombre réel appelé masse ou coefficient de pondération associé à A.',
        '2. Définition du barycentre de deux points pondérés :',
        'Soit le système de deux points pondérés {(A, α), (B, β)}.',
        'Si la somme des coefficients est non nulle (α + β ≠ 0), il existe un unique point G tel que :',
        'α · GA + β · GB = 0 (vecteur nul).',
        'Ce point G est appelé le barycentre du système {(A, α), (B, β)}.',
        '3. Position de G sur la droite (AB) :',
        'En utilisant la relation de Chasles GB = GA + AB, on démontre :',
        'AG = [ β / (α + β) ] · AB.',
        'Le barycentre G appartient toujours à la droite (AB) (les points A, B et G sont alignés).',
        'Si α et β sont de même signe, G se trouve à l\'intérieur du segment [AB] ; s\'ils sont de signes contraires, G est à l\'extérieur.',
        'Si α = β ≠ 0, G est l\'isobarycentre de A et B, c\'est-à-dire le milieu du segment [AB].'
      ]
    },
    {
      title: 'II. BARYCENTRE DE TROIS POINTS ET PLUS',
      content: [
        '1. Définition pour trois points pondérés {(A, α), (B, β), (C, γ)} :',
        'Si α + β + γ ≠ 0, il existe un unique point G tel que :',
        'α · GA + β · GB + γ · GC = 0.',
        '2. Propriété fondamentale de réduction vectorielle :',
        'Pour tout point M quelconque du plan (ou de l\'espace) :',
        'α · MA + β · MB + γ · MC = (α + β + γ) · MG.',
        'Cette formule capitale permet de remplacer une somme de plusieurs vecteurs par un unique vecteur proportionnel à MG.',
        '3. Centre de gravité d\'un triangle ABC :',
        'L\'isobarycentre de trois points correspond au cas où α = β = γ = 1 (ou toute valeur non nulle égale).',
        'Le point G vérifie GA + GB + GC = 0.',
        'G est le centre de gravité du triangle ABC, point de concours des trois médianes, situé aux 2/3 de chaque médiane à partir du sommet : AG = (2/3) AI (où I est le milieu de [BC]).'
      ]
    },
    {
      title: 'III. LE THÉORÈME D\'ASSOCIATIVITÉ (BARYCENTRE PARTIEL)',
      content: [
        '1. Énoncé du théorème d\'associativité :',
        'Le barycentre d\'un système de points pondérés ne change pas lorsqu\'on remplace un sous-système de points par leur barycentre partiel affecté de la somme de leurs coefficients (à condition que cette somme partielle soit non nulle).',
        'Exemple : Si G₁ = bar{(A, α), (B, β)} avec α + β ≠ 0, alors :',
        'G = bar{(A, α), (B, β), (C, γ)} = bar{(G₁, α + β), (C, γ)}.',
        '2. Application pratique :',
        'Ce théorème permet de réduire le calcul d\'un barycentre de 3 ou 4 points à une succession de barycentres de 2 points, et de prouver géométriquement des alignements ou des concours de droites.'
      ]
    },
    {
      title: 'IV. COORDONNÉES BARYCENTRIQUES DANS UN REPÈRE',
      content: [
        'Dans un repère cartésien (O ; i, j) du plan, si A(x_A, y_A), B(x_B, y_B) et C(x_C, y_C), les coordonnées du barycentre G sont données par les moyennes pondérées :',
        'x_G = (α · x_A + β · x_B + γ · x_C) / (α + β + γ)',
        'y_G = (α · y_A + β · y_B + γ · y_C) / (α + β + γ).'
      ]
    }
  ]
};

export const LESSON_9_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-9',
  number: '9',
  title: 'CHAPITRE S-9 : PRODUIT SCALAIRE DANS LE PLAN ET RELATIONS MÉTRIQUES DANS LE TRIANGLE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Géométrie • Produit Scalaire',
  level: 'Première S (S1 & S2)',
  readTime: '50 min de lecture approfondie',
  description: 'Définition géométrique et analytique u · v, projection orthogonale, théorème d’Al-Kashi (Carnot), théorème de la médiane, formule des sinus et calcul de l’aire d’un triangle quelconque.',
  image: {
    caption: 'Figure S-9 : Relations métriques dans le triangle quelconque — Théorème d’Al-Kashi (a² = b² + c² - 2bc cos Â) et théorème de la médiane.',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  diagram: {
    title: 'Produit Scalaire et Al-Kashi',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  introduction: `Le produit scalaire, introduit au XIXe siècle par les mathématiciens Hermann Grassmann et William Rowan Hamilton pour formaliser le concept physique de travail d'une force (W = F · d), associe à deux vecteurs un nombre réel scalaire. En Première S, le produit scalaire est l'instrument géométrique souverain pour mesurer les distances, calculer les angles, démontrer l'orthogonalité et établir les relations métriques fondamentales du triangle.
Ce chapitre développe les différentes expressions du produit scalaire, démontre le théorème d'Al-Kashi (généralisation du théorème de Pythagore aux triangles quelconques), le théorème de la médiane et la formule des sinus reliant les côtés au rayon du cercle circonscrit.`,
  conclusion: `En conclusion, le produit scalaire comble le fossé entre calcul vectoriel et trigonométrie. La formule d'Al-Kashi a² = b² + c² - 2bc cos Â permet de « résoudre un triangle », c'est-à-dire de déterminer tous ses angles dès que ses trois côtés sont connus, ou de calculer le troisième côté à partir de deux côtés et de l'angle qu'ils forment.`,
  sections: [
    {
      title: 'I. DÉFINITIONS ET PROPRIÉTÉS OPÉRATOIRES DU PRODUIT SCALAIRE',
      content: [
        '1. Définition trigonométrique :',
        'Soient deux vecteurs u et v du plan :',
        '• Si u = 0 ou v = 0, alors u · v = 0.',
        '• Si u ≠ 0 et v ≠ 0 : u · v = ||u|| × ||v|| × cos(u, v).',
        '2. Définition par projection orthogonale :',
        'Soient trois points O, A, B tels que u = OA et v = OB. Soit H le projeté orthogonal de B sur la droite (OA) :',
        '• u · v = OA × OH si les vecteurs OA et OH sont de même sens.',
        '• u · v = - OA × OH si les vecteurs OA et OH sont de sens contraires.',
        '3. Expression analytique dans un repère orthonormé (O ; i, j) :',
        'Si u(x, y) et v(x\', y\'), alors : u · v = x · x\' + y · y\'.',
        'Conséquence sur la norme : ||u|| = √(u · u) = √(x² + y²).',
        '4. Critère fondamental d\'orthogonalité :',
        'Deux vecteurs u et v sont orthogonaux (noté u ⊥ v) si et seulement si leur produit scalaire est nul : u · v = 0.'
      ]
    },
    {
      title: 'II. LE THÉORÈME D\'AL-KASHI (LOI DES COSINUS OU THÉORÈME DE CARNOT)',
      content: [
        'Soit un triangle quelconque ABC. On pose selon les conventions internationales usuelles : a = BC, b = AC, c = AB, et les angles au sommet notés Â, B̂, Ĉ.',
        '1. Énoncé du théorème d\'Al-Kashi :',
        'Dans tout triangle ABC :',
        '• a² = b² + c² - 2 · b · c · cos Â',
        '• b² = a² + c² - 2 · a · c · cos B̂',
        '• c² = a² + b² - 2 · a · b · cos Ĉ.',
        '2. Démonstration vectorielle :',
        'BC² = ||BC||² = ||AC - AB||² = (AC - AB)² = AC² + AB² - 2 AC · AB',
        '= b² + c² - 2 ||AC|| ||AB|| cos Â = b² + c² - 2bc cos Â.',
        'Remarque : Si l\'angle Â est droit (Â = π/2), cos Â = 0, on retrouve exactement le théorème de Pythagore a² = b² + c² !'
      ]
    },
    {
      title: 'III. LE THÉORÈME DE LA MÉDIANE',
      content: [
        'Soit un triangle ABC et soit I le milieu du côté [BC] (donc IB + IC = 0 et BC = 2 BI) :',
        '1. Première formule de la médiane :',
        'AB² + AC² = 2 AI² + BC² / 2 = 2 AI² + 2 BI².',
        '2. Deuxième formule de la médiane (différence des carrés) :',
        'AB² - AC² = 2 AI · CB = 2 IH · CB (où H est le projeté orthogonal de A sur (BC)).',
        '3. Troisième formule (produit scalaire) :',
        'AB · AC = AI² - BC² / 4.'
      ]
    },
    {
      title: 'IV. FORMULE DES SINUS ET AIRE D\'UN TRIANGLE',
      content: [
        'Soit S l\'aire du triangle ABC et R le rayon de son cercle circonscrit :',
        '1. Formule de l\'aire du triangle :',
        'S = (1/2) b · c · sin Â = (1/2) a · c · sin B̂ = (1/2) a · b · sin Ĉ.',
        '2. Formule des sinus :',
        'a / sin Â = b / sin B̂ = c / sin Ĉ = 2R = (a · b · c) / (2S).'
      ]
    }
  ]
};

export const LESSON_10_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-10',
  number: '10',
  title: 'CHAPITRE S-10 : LIGNES DE NIVEAU ASSOCIÉES AU PRODUIT SCALAIRE ET AU BARYCENTRE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Géométrie • Lieux Géométriques',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Étude des ensembles de points M du plan vérifiant MA · MB = k, MA² + MB² = k, MA² - MB² = k, et MA/MB = k (cercles d’Apollonius). Réduction par barycentres et théorèmes de la médiane.',
  image: {
    caption: 'Figure S-10 : Famille de lignes de niveau — Cercles orthogonaux d’Apollonius et droites perpendiculaires.',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  diagram: {
    title: 'Lignes de Niveau et Lieux Géométriques',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  introduction: `Une ligne de niveau est l'ensemble des points d'un espace où une fonction donnée prend une valeur constante fixée k (notion analogue aux courbes de niveau d'altitude sur une carte géographique de l'IGN ou aux isobares de pression en météorologie). En géométrie de Première S, les lignes de niveau constituent une application majeure du produit scalaire et des barycentres pour identifier des figures géométriques fondamentales : droites, cercles, ou ensembles vides.
Ce chapitre détaille les méthodes de réduction scalaire pour déterminer la nature géométrique exacte des ensembles de points définis par des relations métriques usuelles.`,
  conclusion: `En conclusion, la détermination d'une ligne de niveau obéit toujours à la même stratégie d'élégance mathématique : introduire le barycentre ou le milieu I des points fixes pour réduire la somme vectorielle à un unique vecteur lié à M, transformant l'équation en une relation simple de distance MI = R (cercle de centre I) ou de projection scalaire MI · u = c (droite perpendiculaire à u).`,
  sections: [
    {
      title: 'I. LIGNE DE NIVEAU DE L\'APPLICATION M ↦ MA · MB = k',
      content: [
        'Soient A et B deux points distincts du plan (AB > 0) et I le milieu de [AB] :',
        '1. Réduction vectorielle :',
        'MA = MI + IA  et  MB = MI + IB = MI - IA (car I est milieu de [AB], donc IB = -IA).',
        'MA · MB = (MI + IA) · (MI - IA) = MI² - IA² = MI² - (AB / 2)² = MI² - AB² / 4.',
        'L\'équation MA · MB = k équivaut à :',
        'MI² = k + AB² / 4.',
        '2. Discussion selon la valeur de k :',
        'Posons R² = k + AB² / 4 :',
        '• Si k + AB² / 4 < 0 : l\'ensemble des points M est l\'ensemble vide ∅.',
        '• Si k + AB² / 4 = 0 : l\'ensemble se réduit au point unique I.',
        '• Si k + AB² / 4 > 0 : l\'ensemble des points M est le cercle de centre I et de rayon R = √(k + AB² / 4).',
        'Cas particulier fondamental k = 0 (MA · MB = 0) :',
        'R² = AB² / 4 ➔ R = AB / 2. L\'ensemble des points M est le cercle de diamètre [AB] !'
      ]
    },
    {
      title: 'II. LIGNE DE NIVEAU DE L\'APPLICATION M ↦ MA² + MB² = k',
      content: [
        '1. Réduction par le théorème de la médiane :',
        'D\'après le théorème de la médiane : MA² + MB² = 2 MI² + AB² / 2.',
        'L\'équation 2 MI² + AB² / 2 = k équivaut à :',
        'MI² = (k - AB² / 2) / 2 = k/2 - AB² / 4.',
        '2. Conclusion géométrique :',
        '• Si k < AB² / 2 : ensemble vide ∅.',
        '• Si k = AB² / 2 : point I (milieu de [AB]).',
        '• Si k > AB² / 2 : cercle de centre I et de rayon R = √(k/2 - AB² / 4).'
      ]
    },
    {
      title: 'III. LIGNE DE NIVEAU DE L\'APPLICATION M ↦ MA² - MB² = k',
      content: [
        '1. Réduction vectorielle :',
        'MA² - MB² = (MA - MB) · (MA + MB) = BA · (2 MI) = 2 MI · BA.',
        'L\'équation devient : 2 MI · BA = k ➔ MI · AB = -k / 2.',
        '2. Conclusion géométrique :',
        'Soit H le projeté orthogonal de M sur la droite (AB) :',
        'IH · AB = -k / 2 ➔ IH est une valeur algébrique fixe constante.',
        'L\'ensemble des points M est la droite perpendiculaire à (AB) passant par le point H ainsi déterminé.'
      ]
    },
    {
      title: 'IV. LES CERCLES D\'APOLLONIUS : LIGNE DE NIVEAU MA / MB = k (avec k > 0)',
      content: [
        '• Si k = 1 : MA / MB = 1 ⇔ MA = MB. L\'ensemble des points M équidistants de A et B est la droite médiatrice du segment [AB].',
        '• Si k ≠ 1 (k > 0) : MA / MB = k ⇔ MA² - k² MB² = 0 ⇔ (MA - k MB) · (MA + k MB) = 0.',
        'En introduisant les barycentres partiels G₁ = bar{(A, 1), (B, -k)} et G₂ = bar{(A, 1), (B, k)} :',
        'L\'équation équivaut à : MG₁ · MG₂ = 0.',
        'L\'ensemble des points M est le cercle de diamètre [G₁G₂] (appelé cercle d\'Apollonius).'
      ]
    }
  ]
};

export const LESSON_11_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-11',
  number: '11',
  title: 'CHAPITRE S-11 : ANGLES ORIENTÉS ET TRIGONOMÉTRIE FONDAMENTALE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Trigonométrie • Formules et Équations',
  level: 'Première S (S1 & S2)',
  readTime: '50 min de lecture approfondie',
  description: 'Mesure principale d’un angle orienté en radians, formules d’addition cos(a±b) et sin(a±b), formules de duplication, linéarisation, transformation de sommes en produits et résolution des équations trigonométriques.',
  image: {
    caption: 'Figure S-11 : Cercle trigonométrique complet — Repérage des angles remarquables, mesures en radians et valeurs exactes de cosinus et sinus.',
    svgContent: SVG_MATH_1ERE_CERCLE_TRIGONOMETRIQUE
  },
  diagram: {
    title: 'Cercle Trigonométrique et Formules',
    svgContent: SVG_MATH_1ERE_CERCLE_TRIGONOMETRIQUE
  },
  introduction: `Les angles orientés de vecteurs permettent de doter le plan d'un sens de rotation conventionnel (le sens trigonométrique direct ou anti-horaire, inverse des aiguilles d'une montre) et de mesurer les déphasages angulaires en radians. La trigonométrie analytique de Première S constitue une clé de voûte indispensable en physique : mécanique ondulatoire, optique géométrique et ondulatoire, et électromagnétisme.
Ce chapitre démontre les formules d'addition du cosinus et du sinus à partir du produit scalaire, dérive les formules de duplication et de linéarisation, développe les techniques de factorisation de sommes trigonométriques et résout les équations du type a cos x + b sin x = c.`,
  conclusion: `En conclusion, l'arsenal des formules trigonométriques permet de transformer n'importe quelle expression périodique : les formules de duplication permettent d'abaisser les fréquences ou d'augmenter les puissances, les formules de linéarisation permettent d'exprimer des puissances cosⁿ x en sommes simples facilement intégrables, et la méthode de l'angle auxiliaire résout l'équation générale a cos x + b sin x = c en la ramenant à cos(x - φ) = c / √(a² + b²).`,
  sections: [
    {
      title: 'I. FORMULES D\'ADDITION FONDAMENTALES',
      content: [
        'Pour tous nombres réels a et b :',
        '1. Formules du cosinus :',
        '• cos(a - b) = cos a · cos b + sin a · sin b',
        '• cos(a + b) = cos a · cos b - sin a · sin b',
        '2. Formules du sinus :',
        '• sin(a + b) = sin a · cos b + cos a · sin b',
        '• sin(a - b) = sin a · cos b - cos a · sin b',
        '3. Formules de la tangente (pour a, b et a ± b distincts de π/2 + kπ) :',
        '• tan(a + b) = (tan a + tan b) / (1 - tan a · tan b)',
        '• tan(a - b) = (tan a - tan b) / (1 + tan a · tan b).'
      ]
    },
    {
      title: 'II. FORMULES DE DUPLICATION ET DE LINÉARISATION',
      content: [
        'En posant b = a dans les formules d\'addition :',
        '1. Formules de duplication (angles doubles) :',
        '• cos(2a) = cos² a - sin² a = 2 cos² a - 1 = 1 - 2 sin² a',
        '• sin(2a) = 2 sin a · cos a',
        '• tan(2a) = (2 tan a) / (1 - tan² a).',
        '2. Formules de linéarisation (abaissement du degré) :',
        '• cos² a = (1 + cos(2a)) / 2',
        '• sin² a = (1 - cos(2a)) / 2',
        '• tan² a = (1 - cos(2a)) / (1 + cos(2a)).'
      ]
    },
    {
      title: 'III. TRANSFORMATION DE PRODUITS EN SOMMES ET DE SOMMES EN PRODUITS',
      content: [
        '1. Formules de transformation de produit en somme :',
        '• cos a · cos b = (1/2) [ cos(a + b) + cos(a - b) ]',
        '• sin a · sin b = (1/2) [ cos(a - b) - cos(a + b) ]',
        '• sin a · cos b = (1/2) [ sin(a + b) + sin(a - b) ]',
        '2. Formules de transformation de somme en produit (Formules de factorisation) :',
        'En posant p = a + b et q = a - b :',
        '• cos p + cos q = 2 cos((p + q)/2) · cos((p - q)/2)',
        '• cos p - cos q = -2 sin((p + q)/2) · sin((p - q)/2)',
        '• sin p + sin q = 2 sin((p + q)/2) · cos((p - q)/2)',
        '• sin p - sin q = 2 cos((p + q)/2) · sin((p - q)/2).'
      ]
    },
    {
      title: 'IV. RÉSOLUTION DES ÉQUATIONS DU TYPE a cos x + b sin x = c',
      content: [
        'Soit l\'équation (E) : a cos x + b sin x = c avec (a, b) ≠ (0, 0) :',
        '1. Méthode de l\'angle auxiliaire :',
        'On divise les deux membres par la quantité R = √(a² + b²) > 0 :',
        '(a / √(a² + b²)) cos x + (b / √(a² + b²)) sin x = c / √(a² + b²).',
        'Comme (a / R)² + (b / R)² = (a² + b²) / (a² + b²) = 1, il existe un unique angle réel φ ∈ ]-π ; π] tel que :',
        'cos φ = a / √(a² + b²)   et   sin φ = b / √(a² + b²).',
        'L\'équation se réécrit alors sous la forme condensée :',
        'cos x · cos φ + sin x · sin φ = c / R ➔ cos(x - φ) = c / √(a² + b²).',
        '2. Condition de résolubilité :',
        'L\'équation admet des solutions réelles si et seulement si : |c| / √(a² + b²) ≤ 1, soit : a² + b² ≥ c².'
      ]
    }
  ]
};

export const LESSON_12_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-12',
  number: '12',
  title: 'CHAPITRE S-12 : TRANSFORMATIONS DU PLAN : HOMOTHÉTIES, TRANSLATIONS ET ROTATIONS',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Géométrie • Transformations Géométriques',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Définitions géométriques et analytiques des isométries (translations, rotations) et des homothéties. Propriétés de conservation (alignement, barycentre, parallélisme, angles, distances, aires) et composées.',
  image: {
    caption: 'Figure S-12 : Action d’une homothétie et d’une rotation sur une figure géométrique plane.',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  diagram: {
    title: 'Transformations Planes et Invariants',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  introduction: `Les transformations géométriques du plan étudient les correspondances bijectives qui déplacent ou déforment les figures tout en conservant certaines propriétés fondamentales (les invariants géométriques). Selon le célèbre « Programme d'Erlangen » énoncé par Felix Klein en 1872, la géométrie est précisément l'étude des invariants par rapport à un groupe de transformations donné.
Ce chapitre formalise les translations de vecteur u, les rotations de centre Ω et d'angle θ, et les homothéties de centre O et de rapport k, établit leurs propriétés de conservation et analyse leurs composées.`,
  conclusion: `En conclusion, les isométries (translations et rotations) conservent l'intégralité des distances et des formes, tandis que les homothéties de rapport k multiplient les longueurs par |k| et les aires par k². Les homothéties transforment toute droite en une droite parallèle et conservent le barycentre, ce qui en fait un outil de démonstration géométrique extrêmement élégant.`,
  sections: [
    {
      title: 'I. LES HOMOTHÉTIES DANS LE PLAN',
      content: [
        '1. Définition géométrique :',
        'Soit O un point fixe du plan et k un nombre réel non nul (k ∈ ℝ*).',
        'L\'homothétie de centre O et de rapport k, notée h(O, k), est la transformation qui à tout point M du plan associe l\'unique point M\' tel que :',
        'OM\' = k · OM.',
        '• Le centre O est le seul point invariant si k ≠ 1.',
        '• Si k = 1 : h(O, 1) est l\'application identité du plan (tout point est invariant).',
        '• Si k = -1 : h(O, -1) est la symétrie centrale de centre O.',
        '2. Propriété vectorielle fondamentale :',
        'Si A\' et B\' sont les images respectives de A et B par l\'homothétie h(O, k), alors :',
        'A\'B\' = k · AB.',
        'Conséquence immédiate : A\'B\' = |k| · AB. La droite image (A\'B\') est strictement parallèle à la droite initiale (AB).'
      ]
    },
    {
      title: 'II. LES ROTATIONS DANS LE PLAN ORIENTÉ',
      content: [
        '1. Définition géométrique :',
        'Soit Ω un point du plan orienté et θ un angle réel (en radians).',
        'La rotation de centre Ω et d\'angle θ, notée r(Ω, θ), est la transformation qui :',
        '• Transforme le centre Ω en lui-même : r(Ω) = Ω.',
        '• Associe à tout point M ≠ Ω le point M\' tel que :',
        '  { ΩM\' = ΩM  (conservation des distances au centre)',
        '  { (ΩM, ΩM\') = θ [2π]  (angle orienté de vecteurs).',
        '2. Propriétés des rotations :',
        '• La rotation est une isométrie : pour tous points A et B d\'images A\' et B\', A\'B\' = AB.',
        '• L\'angle entre une droite (AB) et sa droite image (A\'B\') est égal à l\'angle de rotation θ : (AB, A\'B\') = θ [2π].'
      ]
    },
    {
      title: 'III. PROPRIÉTÉS GÉNÉRALES DE CONSERVATION',
      content: [
        '• Conservation de l\'alignement : les images de points alignés sont des points alignés.',
        '• Conservation du barycentre : l\'image du barycentre d\'un système de points pondérés est le barycentre des images affectées des mêmes coefficients.',
        '• Conservation des angles géométriques et orientés (isométries et homothéties).',
        '• Effet sur les aires : une homothétie de rapport k multiplie les aires par k² ; une isométrie conserve rigoureusement les aires.'
      ]
    }
  ]
};

export const LESSON_13_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-13',
  number: '13',
  title: 'CHAPITRE S-13 : GÉOMÉTRIE DANS L’ESPACE : DROITES, PLANS ET VECTEURS',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Géométrie • Géométrie Spatiale',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Positions relatives de droites et de plans dans l’espace, critères d’orthogonalité et de parallélisme, droites orthogonales à un plan, calcul vectoriel dans l’espace et produit scalaire spatial.',
  image: {
    caption: 'Figure S-13 : Droite orthogonale à un plan dans l’espace — Orthogonalité à deux droites sécantes du plan.',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  diagram: {
    title: 'Géométrie dans l’Espace et Plans',
    svgContent: SVG_MATH_1ERE_BARYCENTRE_AL_KASHI
  },
  introduction: `La géométrie dans l'espace prolonge les concepts de la géométrie plane dans la troisième dimension physique. Dans l'espace, la richesse des configurations s'accroît : deux droites peuvent ne pas se couper sans être parallèles (droites non coplanaires), et l'orthogonalité entre deux droites ne requiert plus nécessairement qu'elles soient sécantes.
Ce chapitre formalise les axiomes d'incidence spatiale, définit les positions relatives de droites et de plans, démontre le théorème fondamental d'orthogonalité d'une droite et d'un plan, et étend le calcul vectoriel et le produit scalaire à l'espace tridimensionnel.`,
  conclusion: `En conclusion, la condition nécessaire et suffisante pour qu'une droite (D) soit orthogonale à un plan (P) est qu'elle soit orthogonale à deux droites sécantes contenues dans ce plan. Tout vecteur non nul u directeur de (D) est alors appelé vecteur normal au plan (P), fournissant la base géométrique de l'équation cartésienne ax + by + cz + d = 0 étudiée en classe de Terminale S.`,
  sections: [
    {
      title: 'I. POSITIONS RELATIVES DANS L\'ESPACE',
      content: [
        '1. Positions relatives de deux droites (D₁) et (D₂) :',
        '• Droites coplanaires (situées dans un même plan) : sécantes (un point commun), strictement parallèles (aucun point commun) ou confondues.',
        '• Droites non coplanaires : droites gauches ne pouvant être contenues dans un même plan (aucun point commun et non parallèles).',
        '2. Positions relatives d\'une droite (D) et d\'un plan (P) :',
        '• Droite sécante au plan : perce le plan en un unique point.',
        '• Droite parallèle au plan : strictement parallèle (aucun point commun) ou contenue dans le plan.',
        '3. Positions relatives de deux plans (P₁) et (P₂) :',
        '• Plans sécants : leur intersection est une droite.',
        '• Plans parallèles : strictement parallèles (disjoints) ou confondus.'
      ]
    },
    {
      title: 'II. ORTHOGONALITÉ DANS L\'ESPACE',
      content: [
        '1. Droites orthogonales :',
        'Deux droites (D₁) et (D₂) de l\'espace sont dites orthogonales si leurs droites parallèles respectives menées par un point quelconque O de l\'espace sont perpendiculaires au sens de la géométrie plane.',
        'Deux droites orthogonales ne sont pas obligatoirement sécantes ! Si elles sont à la fois orthogonales et sécantes, on dit qu\'elles sont perpendiculaires.',
        '2. Droite orthogonale à un plan :',
        'Théorème fondamental : Une droite (D) est orthogonale à un plan (P) si et seulement si elle est orthogonale à deux droites sécantes de ce plan.',
        'Conséquence : Si une droite (D) est orthogonale à un plan (P), elle est alors orthogonale à toutes les droites contenues dans ce plan !'
      ]
    },
    {
      title: 'III. VECTEURS ET PRODUIT SCALAIRE DANS L\'ESPACE',
      content: [
        'Toutes les définitions et propriétés opératoires du produit scalaire dans le plan restent intégralement valables dans l\'espace :',
        '• Dans un repère orthonormé (O ; i, j, k) de l\'espace, si u(x, y, z) et v(x\', y\', z\') :',
        'u · v = x·x\' + y·y\' + z·z\'.',
        '• Norme : ||u|| = √(x² + y² + z²).',
        '• Distance entre deux points A(x_A, y_A, z_A) et B(x_B, y_B, z_B) :',
        'AB = √[ (x_B - x_A)² + (y_B - y_A)² + (z_B - z_A)² ].'
      ]
    }
  ]
};

export const COURSES_MATH_1ERE_S_PART2 = [
  LESSON_8_MATH_1ERE_S,
  LESSON_9_MATH_1ERE_S,
  LESSON_10_MATH_1ERE_S,
  LESSON_11_MATH_1ERE_S,
  LESSON_12_MATH_1ERE_S,
  LESSON_13_MATH_1ERE_S
];
