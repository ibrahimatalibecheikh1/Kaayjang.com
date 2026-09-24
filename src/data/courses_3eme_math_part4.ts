import { LessonContent } from './courses';
import {
  SVG_VECTEURS_REP_3EME,
  SVG_ESPACE_3EME
} from './diagrams_3eme_math';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 3ÈME (BFEM SÉNÉGAL)
// PARTIE 4 : GÉOMÉTRIE ANALYTIQUE ET GÉOMÉTRIE DANS L'ESPACE
// (LEÇONS 10, 11 ET 12)
// VECTEURS ET REPÈRES, ÉQUATIONS DE DROITES & SOLIDES DE L'ESPACE
// AVEC FIGURES VECTORIELLES SVG OBLIGATOIRES ET EXERCICES BFEM CORRIGÉS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 10 : VECTEURS ET COORDONNÉES DANS LE PLAN
// -------------------------------------------------------------------------
export const LESSON_10_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-10',
  number: 'Leçon 10',
  title: 'Vecteurs et coordonnées dans le plan',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La géométrie repérée (ou analytique) associe les nombres et l'algèbre aux figures du plan. Introduite par René Descartes, elle permet de résoudre des problèmes géométriques complexes (alignement, parallélisme, orthogonalité, calcul de distances) par de simples calculs algébriques. En classe de 3ème, l'élève travaille dans un repère orthonormé (O, I, J) et apprend à calculer les coordonnées d'un vecteur, le milieu d'un segment, la distance entre deux points et la condition de colinéarité au BFEM.",
  fullText: `Leçon 10 : Vecteurs et coordonnées dans le plan — Cours complet 3ème

Introduction :
La géométrie repérée (ou analytique) associe les nombres et l'algèbre aux figures du plan. Introduite par René Descartes, elle permet de résoudre des problèmes géométriques complexes (alignement, parallélisme, orthogonalité, calcul de distances) par de simples calculs algébriques. En classe de 3ème, l'élève travaille dans un repère orthonormé (O, I, J) et apprend à calculer les coordonnées d'un vecteur, le milieu d'un segment, la distance entre deux points et la condition de colinéarité au BFEM.

1. Repère orthonormé du plan
Un repère (O, I, J) est constitué :
- D'une origine O(0, 0).
- D'un axe des abscisses (OI), orienté horizontalement de gauche à droite.
- D'un axe des ordonnées (OJ), orienté verticalement de bas en haut.
Il est dit ORTHONORMÉ lorsque les axes (OI) et (OJ) sont perpendiculaires et que les unités sont égales : OI = OJ = 1.

2. Coordonnées d'un vecteur et opérations
Soient deux points A(xA ; yA) et B(xB ; yB) dans le repère :
Coordonnées du vecteur AB :
AB ( xB - xA ; yB - yA )
Attention à l'ordre : toujours l'extrémité MOINS l'origine !

Somme de deux vecteurs :
Si u(X ; Y) et v(X' ; Y'), alors (u + v) a pour coordonnées (X + X' ; Y + Y').
Multiplication par un réel k :
Le vecteur k·u a pour coordonnées (kX ; kY).
Égalité de deux vecteurs :
u = v ⇔ X = X' et Y = Y'.

3. Coordonnées du milieu d'un segment
Soit I le milieu du segment [AB] :
xI = (xA + xB) / 2
yI = (yA + yB) / 2
Le milieu s'obtient par la moyenne arithmétique des coordonnées des extrémités.

4. Distance entre deux points dans un repère orthonormé
D'après le théorème de Pythagore appliqué dans le repère orthonormé, la distance AB (ou norme du vecteur AB) est donnée par la formule :
AB = ||AB|| = √[ (xB - xA)² + (yB - yA)² ]
Remarque : Un carré étant toujours positif, (xB - xA)² = (xA - xB)². La distance est toujours un nombre réel positif ou nul.

5. Colinéarité de deux vecteurs (Alignement et parallélisme)
Deux vecteurs u(X ; Y) et v(X' ; Y') sont colinéaires si et seulement si leur déterminant est nul :
det(u, v) = X·Y' - X'·Y = 0.
Applications géométriques :
- Les droites (AB) et (CD) sont parallèles si et seulement si les vecteurs AB et CD sont colinéaires.
- Les points distincts A, B et C sont alignés si et seulement si les vecteurs AB et AC sont colinéaires.

6. Orthogonalité de deux vecteurs
Dans un repère orthonormé, deux vecteurs non nuls u(X ; Y) et v(X' ; Y') sont orthogonaux (perpendiculaires) si et seulement si :
X·X' + Y·Y' = 0.

Conclusion :
La géométrie analytique transforme la géométrie en calcul arithmétique. La rigueur dans l'application des formules du vecteur AB(xB - xA ; yB - yA) et de la distance AB = √[(xB - xA)² + (yB - yA)²] garantit la note maximale aux exercices du BFEM.`,
  sections: [
    {
      title: 'I. Coordonnées de vecteurs et milieu d\'un segment',
      content: [
        "1. Repère orthonormé (O, I, J) : axes orthogonaux et unités égales.",
        "2. Coordonnées du vecteur : AB(xB - xA ; yB - yA).",
        "3. Coordonnées du milieu I de [AB] : xI = (xA + xB) / 2  ;  yI = (yA + yB) / 2."
      ],
      image: {
        url: '',
        alt: 'Figure 4 : Repère orthonormé et coordonnées de vecteurs',
        caption: 'Figure 4 : Formules de géométrie analytique indispensables au BFEM.',
        svgContent: SVG_VECTEURS_REP_3EME
      }
    },
    {
      title: 'II. Distance entre deux points et colinéarité',
      content: [
        "1. Distance AB = √[ (xB - xA)² + (yB - yA)² ] dans tout repère orthonormé.",
        "2. Condition de colinéarité : X·Y' - X'·Y = 0 ⇔ vecteurs colinéaires (droites parallèles ou points alignés).",
        "3. Condition d'orthogonalité : X·X' + Y·Y' = 0 ⇔ droites perpendiculaires."
      ]
    },
    {
      title: 'III. Exercice d\'application corrigé pas-à-pas (BFEM)',
      content: [
        "EXERCICE RÉSOLU DU BFEM : Nature d'un triangle et coordonnées",
        "Dans un repère orthonormé (O, I, J), on donne les points :",
        "A(1 ; 2), B(4 ; 6) et C(-3 ; 5).",
        "1. Calculer les coordonnées des vecteurs AB et AC.",
        "2. Calculer les longueurs AB, AC et BC.",
        "3. Démontrer que le triangle ABC est un triangle rectangle en A.",
        "4. Déterminer les coordonnées du point D tel que ABDC soit un parallélogramme.",
        "Corrigé détaillé pas-à-pas :",
        "1. Coordonnées des vecteurs :",
        "• AB (4 - 1 ; 6 - 2) ➔ AB(3 ; 4).",
        "• AC (-3 - 1 ; 5 - 2) ➔ AC(-4 ; 3).",
        "2. Calcul des longueurs :",
        "• AB = √(3² + 4²) = √(9 + 16) = √25 = 5.",
        "• AC = √((-4)² + 3²) = √(16 + 9) = √25 = 5.",
        "• Pour BC : BC(xC - xB ; yC - yB) = (-3 - 4 ; 5 - 6) = (-7 ; -1).",
        "BC = √((-7)² + (-1)²) = √(49 + 1) = √50 = 5√2.",
        "3. Nature du triangle ABC :",
        "• AB² + AC² = 5² + 5² = 25 + 25 = 50.",
        "• BC² = (√50)² = 50.",
        "Comme AB² + AC² = BC², d'après la réciproque du théorème de Pythagore, le triangle ABC est RECTANGLE en A.",
        "De plus, comme AB = AC = 5, le triangle ABC est RECTANGLE ET ISOCÈLE en A !",
        "4. Coordonnées de D tel que ABDC soit un parallélogramme :",
        "ABDC est un parallélogramme si et seulement si AB = CD (attention à l'ordre des sommets : ABDC ➔ vecteur AB = vecteur CD) :",
        "xD - xC = 3  ➔ xD - (-3) = 3 ➔ xD + 3 = 3 ➔ xD = 0.",
        "yD - yC = 4  ➔ yD - 5 = 4 ➔ yD = 9.",
        "Conclusion : Le point D a pour coordonnées D(0 ; 9)."
      ]
    }
  ],
  conclusion:
    "La géométrie analytique est l'un des exercices les plus gratifiants du BFEM. Les calculs vectoriels permettent de prouver la nature de triangles, parallélogrammes et losanges avec une exactitude mathématique totale."
};

// -------------------------------------------------------------------------
// LEÇON 11 : ÉQUATIONS DE DROITES DANS LE PLAN
// -------------------------------------------------------------------------
export const LESSON_11_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-11',
  number: 'Leçon 11',
  title: 'Équations de droites dans le plan',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "Dans le plan muni d'un repère, toute droite est caractérisée par une équation algébrique. Ce chapitre consolide la relation directe entre l'algèbre et la géométrie. L'élève apprend à déterminer l'équation réduite d'une droite de la forme y = ax + b, à identifier la pente (coefficient directeur), à vérifier si deux droites sont parallèles ou perpendiculaires, et à calculer le point d'intersection de deux droites sécantes.",
  fullText: `Leçon 11 : Équations de droites dans le plan — Cours complet 3ème

Introduction :
Dans le plan muni d'un repère, toute droite est caractérisée par une équation algébrique. Ce chapitre consolide la relation directe entre l'algèbre et la géométrie. L'élève apprend à déterminer l'équation réduite d'une droite de la forme y = ax + b, à identifier la pente (coefficient directeur), à vérifier si deux droites sont parallèles ou perpendiculaires, et à calculer le point d'intersection de deux droites sécantes.

1. Équation réduite d'une droite
Dans un repère (O, I, J) :
- Toute droite non parallèle à l'axe des ordonnées admet une équation réduite unique de la forme :
y = ax + b
où :
• 'a' est le coefficient directeur (la pente).
• 'b' est l'ordonnée à l'origine (point où la droite coupe l'axe (Oy) en (0 ; b)).

- Toute droite parallèle à l'axe des ordonnées admet une équation de la forme :
x = c
où c est une constante réelle. Une telle droite n'a pas de coefficient directeur défini !

2. Détermination de l'équation d'une droite passant par deux points
Soient deux points distincts A(xA ; yA) et B(xB ; yB) avec xA ≠ xB.
1. Calcul du coefficient directeur 'a' :
a = (yB - yA) / (xB - xA)
2. Calcul de l'ordonnée à l'origine 'b' :
Comme A appartient à la droite, ses coordonnées vérifient l'équation :
yA = a·xA + b ➔ b = yA - a·xA.

3. Conditions de parallélisme et de perpendicularité de deux droites
Soient deux droites (D) : y = ax + b et (D') : y = a'x + b'.
Théorème 1 : Parallélisme
Deux droites sont parallèles si et seulement si elles ont LE MÊME COEFFICIENT DIRECTEUR :
(D) // (D') ⇔ a = a'.

Théorème 2 : Perpendicularité (dans un repère orthonormé)
Deux droites sont perpendiculaires si et seulement si LE PRODUIT DE LEURS COEFFICIENTS DIRECTEURS EST ÉGAL À -1 :
(D) ⊥ (D') ⇔ a × a' = -1  (ou a' = -1/a).

4. Point d'intersection de deux droites sécantes
Pour trouver les coordonnées du point d'intersection I(xI ; yI) de deux droites sécantes (D) : y = ax + b et (D') : y = a'x + b' (avec a ≠ a') :
1. On résout l'équation ax + b = a'x + b' pour trouver l'abscisse xI.
2. On remplace xI dans l'une des équations pour obtenir l'ordonnée yI.

Conclusion :
L'équation de droite est un outil majeur du BFEM. Les critères a = a' pour le parallélisme et a × a' = -1 pour la perpendicularité sont systématiquement mobilisés dans les problèmes de synthèse.`,
  sections: [
    {
      title: 'I. Équation réduite et coefficient directeur',
      content: [
        "1. Droite non verticale : y = ax + b  ;  Droite verticale : x = c.",
        "2. Formule de la pente passant par A et B : a = (yB - yA) / (xB - xA).",
        "3. Ordonnée à l'origine : point d'intersection avec l'axe vertical (0 ; b)."
      ]
    },
    {
      title: 'II. Droites parallèles et droites perpendiculaires',
      content: [
        "1. Droites parallèles : a = a' (pentes strictement identiques).",
        "2. Droites perpendiculaires en repère orthonormé : a × a' = -1.",
        "3. Recherche d'une droite passant par un point donné et parallèle ou perpendiculaire à une autre."
      ]
    },
    {
      title: 'III. Exercice d\'application corrigé pas-à-pas (BFEM)',
      content: [
        "EXERCICE RÉSOLU DU BFEM : Équations de droites",
        "On donne les points A(2 ; 3) et B(-1 ; -3).",
        "1. Déterminer l'équation réduite de la droite (AB).",
        "2. Déterminer l'équation de la droite (Δ) passant par le point C(4 ; 1) et parallèle à (AB).",
        "3. Déterminer l'équation de la droite (D) passant par C et perpendiculaire à (AB).",
        "Corrigé détaillé pas-à-pas :",
        "1. Équation de (AB) :",
        "a = (yB - yA) / (xB - xA) = (-3 - 3) / (-1 - 2) = -6 / -3 = 2.",
        "L'équation est de la forme y = 2x + b. Comme A(2 ; 3) ∈ (AB) :",
        "3 = 2(2) + b ➔ 3 = 4 + b ➔ b = -1.",
        "L'équation réduite de (AB) est donc : y = 2x - 1.",
        "2. Droite (Δ) passant par C(4 ; 1) et parallèle à (AB) :",
        "Comme (Δ) // (AB), elles ont le même coefficient directeur : a' = 2.",
        "L'équation de (Δ) est y = 2x + b'. C(4 ; 1) ∈ (Δ) :",
        "1 = 2(4) + b' ➔ 1 = 8 + b' ➔ b' = -7.",
        "L'équation de (Δ) est donc : y = 2x - 7.",
        "3. Droite (D) perpendiculaire à (AB) :",
        "Le produit des coefficients directeurs vaut -1 : a'' × 2 = -1 ➔ a'' = -1/2.",
        "L'équation est de la forme y = -1/2 x + b''. C(4 ; 1) ∈ (D) :",
        "1 = -1/2 (4) + b'' ➔ 1 = -2 + b'' ➔ b'' = 3.",
        "L'équation de la perpendiculaire (D) est donc : y = -1/2 x + 3."
      ]
    }
  ],
  conclusion:
    "Les conditions a = a' (parallèles) et a·a' = -1 (perpendiculaires) constituent le fondement de la géométrie analytique au brevet."
};

// -------------------------------------------------------------------------
// LEÇON 12 : GÉOMÉTRIE DANS L'ESPACE — PYRAMIDES, CÔNES ET SPHÈRES
// -------------------------------------------------------------------------
export const LESSON_12_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-12',
  number: 'Leçon 12',
  title: 'Géométrie dans l\'espace : Pyramides, Cônes et Sphères',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La géométrie dans l'espace permet d'appréhender notre environnement tridimensionnel. En classe de 3ème, l'élève approfondit la connaissance des pyramides régulières et des cônes de révolution. Il apprend à calculer leurs aires latérales, leurs volumes, à réaliser leurs patrons développés, et à étudier l'effet d'une section plane parallèle à la base (agrandissement-réduction et calculs de troncs de pyramide et de cône), sujet incontournable de la seconde partie des épreuves du BFEM.",
  fullText: `Leçon 12 : Géométrie dans l'espace — Cours complet 3ème

Introduction :
La géométrie dans l'espace permet d'appréhender notre environnement tridimensionnel. En classe de 3ème, l'élève approfondit la connaissance des pyramides régulières et des cônes de révolution. Il apprend à calculer leurs aires latérales, leurs volumes, à réaliser leurs patrons développés, et à étudier l'effet d'une section plane parallèle à la base (agrandissement-réduction et calculs de troncs de pyramide et de cône), sujet incontournable de la seconde partie des épreuves du BFEM.

1. La Pyramide régulière
Définition : Une pyramide est régulière lorsque :
- Sa base est un polygone régulier (triangle équilatéral, carré, etc.).
- Sa hauteur passe par LE CENTRE du polygone de base.
- Toutes ses faces latérales sont des TRIANGLES ISOCÈLES IDENTIQUES.
Vocabulaire :
- Hauteur (h) : segment joignant le sommet principal S au centre de la base.
- Apothème : hauteur de l'une des faces latérales triangulaires issue de S.

Formule du volume d'une pyramide :
V = (1/3) × Aire de la base × Hauteur
• Si la base est un carré de côté c : Aire = c² ➔ V = (1/3) × c² × h.
• Si la base est un rectangle (L × l) : V = (1/3) × L × l × h.

2. Le Cône de révolution
Définition : Un cône de révolution est engendré par la rotation complète d'un triangle rectangle autour de l'un des côtés de l'angle droit.
Vocabulaire :
- Base : disque de rayon R.
- Hauteur (h) : segment reliant le sommet S au centre O du disque de base.
- Génératrice (g ou a) : segment joignant le sommet S à un point quelconque du cercle de base.
Relation de Pythagore dans le cône :
g² = h² + R²

Formules du cône :
- Périmètre de la base : P = 2 × π × R.
- Aire de la base : B = π × R².
- Aire latérale : AL = π × R × g.
- Volume du cône : V = (1/3) × π × R² × h.
- Angle de développement du patron α (en degrés) :
α = (R / g) × 360°.

3. La Sphère et la Boule
Pour une sphère ou une boule de rayon R :
- Aire de la sphère : A = 4 × π × R².
- Volume de la boule : V = (4/3) × π × R³.

4. Section plane par un plan parallèle à la base et coefficient de réduction
Lorsqu'on coupe une pyramide ou un cône par un plan parallèle à la base :
- La section obtenue est une réduction de la base (même nature géométrique : carré réduit ou cercle réduit).
- On obtient une petite pyramide (ou petit cône) au sommet, et un TRONC DE PYRAMIDE (ou tronc de cône) en bas.

RÈGLE D'OR DE L'AGRANDISSEMENT / RÉDUCTION (Coefficient k < 1) :
Soit k le rapport de réduction : k = h' / h = R' / R = g' / g.
1. Les LONGUEURS sont multipliées par k : L' = k × L.
2. Les AIRES sont multipliées par k² : Aire' = k² × Aire.
3. Les VOLUMES sont multipliés par k³ : Volume' = k³ × Volume.

Calcul du volume d'un tronc :
Volume du tronc = Volume du grand solide - Volume du petit solide réduit
Volume du tronc = V - k³ × V = V × (1 - k³).

Conclusion :
La géométrie dans l'espace mobilise la vision en perspective cavalière, le théorème de Pythagore dans les sections triangulaires intérieures et la règle de réduction en k, k² et k³ indispensable pour résoudre avec succès les problèmes de géométrie du BFEM.`,
  sections: [
    {
      title: 'I. Pyramide régulière et cône de révolution',
      content: [
        "1. Pyramide : Volume = (1/3) × Base × h. Faces latérales isocèles.",
        "2. Cône de révolution : relation g² = h² + R². Volume = (1/3) × π × R² × h.",
        "3. Aire latérale du cône : AL = π × R × g  ;  Angle du patron : α = (R/g) × 360°."
      ],
      image: {
        url: '',
        alt: 'Figure 5 : Solides de l\'espace (Pyramide régulière et Cône de révolution)',
        caption: 'Figure 5 : Perspectives et éléments géométriques des solides au BFEM.',
        svgContent: SVG_ESPACE_3EME
      }
    },
    {
      title: 'II. Sections planes et règles d\'agrandissement-réduction',
      content: [
        "1. Coefficient de réduction k = h' / h = R' / R (avec 0 < k < 1).",
        "2. Longueurs × k  ;  Aires × k²  ;  Volumes × k³.",
        "3. Volume du tronc = V_grand - V_petit = V_grand × (1 - k³)."
      ]
    },
    {
      title: 'III. Exercice d\'application corrigé pas-à-pas (BFEM)',
      content: [
        "EXERCICE RÉSOLU DU BFEM : Cône de révolution et tronc de cône",
        "Énoncé : Un cône de révolution a pour rayon de base R = 6 cm et pour hauteur SO = 8 cm.",
        "1. Calculer la génératrice g de ce cône.",
        "2. Calculer le volume exact V₁ de ce cône en fonction de π.",
        "3. On coupe ce cône par un plan parallèle à la base à une distance SO' = 2 cm du sommet S.",
        "a) Déterminer le coefficient de réduction k.",
        "b) En déduire le rayon R' et le volume V₂ du cône réduit.",
        "c) Calculer le volume du tronc de cône.",
        "Corrigé détaillé pas-à-pas :",
        "1. Dans le triangle SOA rectangle en O :",
        "g² = SO² + OA² = 8² + 6² = 64 + 36 = 100.",
        "D'où g = √100 = 10 cm.",
        "2. Volume du grand cône :",
        "V₁ = (1/3) × π × R² × h = (1/3) × π × 6² × 8 = (1/3) × π × 36 × 8 = 96π cm³.",
        "3. Section plane :",
        "a) Coefficient de réduction k :",
        "k = SO' / SO = 2 / 8 = 1/4 = 0,25.",
        "b) Rayon R' du petit cône :",
        "R' = k × R = (1/4) × 6 = 1,5 cm.",
        "Volume V₂ du petit cône réduit :",
        "V₂ = k³ × V₁ = (1/4)³ × 96π = (1/64) × 96π = (96/64)π = (3/2)π = 1,5π cm³.",
        "c) Volume du tronc de cône :",
        "V_tronc = V₁ - V₂ = 96π - 1,5π = 94,5π cm³.",
        "(En valeur approchée avec π ≈ 3,14 : V_tronc ≈ 296,7 cm³)."
      ]
    }
  ],
  conclusion:
    "La maîtrise du coefficient k et de ses puissances k² et k³ est la règle cardinale pour traiter sans erreur les problèmes d'espace et de troncs de cônes ou pyramides au BFEM."
};
