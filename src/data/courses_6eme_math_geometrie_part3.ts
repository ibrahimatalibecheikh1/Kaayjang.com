import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE GÉOMÉTRIE — CLASSE DE 6ÈME
// ACTIVITÉS GÉOMÉTRIQUES — CONFORME AU PROGRAMME OFFICIEL DU SÉNÉGAL
// LEÇONS 7 À 9 : QUADRILATÈRES PARTICULIERS, PÉRIMÈTRES & AIRES, GÉOMÉTRIE DANS L'ESPACE
// AUCUN RÉSUMÉ, DÉVELOPPEMENT INTÉGRAL, DÉTAILS APPROFONDIS,
// REMARQUES CAPITALES, PROPRIÉTÉS FORMELLES ET EXERCICES CORRIGÉS
// =========================================================================

export const LESSON_7_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-7',
  number: 'Géométrie • Leçon 7',
  title: 'Les quadrilatères particuliers : Parallélogramme, rectangle, losange et carré',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Dans la vie courante, la plupart des objets qui nous entourent — portes, fenêtres, cahiers, écrans, carreaux de carrelage, parcelles de terrain — ont une forme polygonale à 4 côtés : ce sont des quadrilatères. En classe de 6ème, l'élève découvre la grande famille des quadrilatères particuliers articulée autour du parallélogramme. Chaque figure possède une carte d'identité géométrique rigoureuse fondée sur ses côtés, ses angles et surtout ses diagonales. Maîtriser ces propriétés permet de reconnaître sans hésiter un rectangle, un losange ou un carré et de rédiger des démonstrations irréfutables.",
  fullText: `Leçon 7 : Les quadrilatères particuliers : Parallélogramme, rectangle, losange et carré

Introduction : Un quadrilatère est un polygone ayant quatre côtés. Cette leçon étudie la hiérarchie des quadrilatères particuliers : le parallélogramme, le rectangle, le losange et le carré, avec une attention spéciale portée aux propriétés des diagonales.

1. Définition générale et ordre des sommets
• Définition : Un quadrilatère est un polygone qui possède 4 côtés, 4 sommets et 4 angles.
• Règle d'or de dénomination : On nomme TOUJOURS un quadrilatère en tournant autour de la figure dans un ordre continu (dans le sens des aiguilles d'une montre ou dans le sens inverse), sans jamais traverser l'intérieur !
  - Exemple : Si les sommets sont A, B, C et D, on peut le nommer ABCD, BCDA ou ADCB, mais JAMAIS ACBD car [AC] et [BD] sont les diagonales qui se croisent à l'intérieur !
• Somme des angles : Dans n'importe quel quadrilatère, la somme des quatre angles vaut toujours 360° (car il est composé de deux triangles : 180° + 180° = 360°).
• Vocabulaire :
  - Côtés consécutifs : deux côtés qui se suivent et partagent un sommet commun (ex : [AB] et [BC]).
  - Côtés opposés : deux côtés qui ne se touchent pas (ex : [AB] et [CD]).
  - Diagonales : les segments reliant deux sommets opposés (les segments [AC] et [BD]).

2. Le Parallélogramme (La figure mère)
• Définition : Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux.
• Propriétés fondamentales :
  1) Propriété des côtés : Ses côtés opposés ont la même longueur deux à deux : AB = CD et AD = BC.
  2) Propriété des angles : Ses angles opposés ont la même mesure (Â = Ĉ et B̂ = D̂). Deux angles consécutifs sont supplémentaires (leur somme vaut 180°).
  3) Propriété clé des diagonales : Les diagonales d'un parallélogramme SE COUPENT OBLIGATOIREMENT EN LEUR MILIEU. Le point d'intersection des diagonales est le centre de symétrie du parallélogramme.

3. Le Rectangle (Parallélogramme à angles droits)
• Définition : Un rectangle est un quadrilatère qui possède 4 angles droits (mesurant 90° chacun).
• Nature : Tout rectangle est un parallélogramme particulier (il possède donc toutes les propriétés du parallélogramme).
• Propriétés caractéristiques des diagonales :
  1) Les diagonales d'un rectangle se coupent en leur milieu.
  2) LES DIAGONALES D'UN RECTANGLE ONT LA MÊME LONGUEUR : AC = BD.
• Symétrie : Le rectangle possède 2 axes de symétrie (les médiatrices de ses côtés) et 1 centre de symétrie (le point de croisement des diagonales).
• Règle de démonstration : Si un parallélogramme a ses diagonales de même longueur (ou s'il possède un angle droit), alors c'est un rectangle.

4. Le Losange (Parallélogramme à côtés égaux)
• Définition : Un losange est un quadrilatère qui possède ses 4 côtés de même longueur (AB = BC = CD = DA).
• Nature : Tout losange est un parallélogramme particulier.
• Propriétés caractéristiques des diagonales :
  1) Les diagonales d'un losange se coupent en leur milieu.
  2) LES DIAGONALES D'UN LOSANGE SONT PERPENDICULAIRES : (AC) ⊥ (BD).
  3) Les diagonales sont les bissectrices des 4 angles du losange.
• Symétrie : Le losange possède 2 axes de symétrie (les droites supportant ses diagonales) et 1 centre de symétrie.
• Règle de démonstration : Si un parallélogramme a ses diagonales perpendiculaires (ou s'il possède deux côtés consécutifs égaux), alors c'est un losange.

5. Le Carré (La figure parfaite)
• Définition : Un carré est un quadrilatère qui est À LA FOIS un rectangle et un losange.
• Caractéristiques cumulées :
  - Il a 4 côtés de même longueur (comme le losange).
  - Il a 4 angles droits de 90° (comme le rectangle).
• Propriétés suprêmes des diagonales :
  1) Elles se coupent en leur milieu.
  2) ELLES SONT PERPENDICULAIRES : (AC) ⊥ (BD).
  3) ELLES ONT LA MÊME LONGUEUR : AC = BD.
• Symétrie : Le carré possède 4 axes de symétrie (les 2 médiatrices des côtés + les 2 diagonales) et 1 centre de symétrie.

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Démonstration sur un rectangle) : ABCD est un parallélogramme dont les diagonales mesurent AC = 8 cm et BD = 8 cm. Quelle est la nature précise de ABCD ? Justifier.
- Exercice 2 (Calcul de longueurs dans un losange) : Soit un losange EFGH de centre O (point d'intersection des diagonales). On sait que EG = 10 cm et FH = 6 cm.
  1) Quelle est la position du point O sur les segments [EG] et [FH] ?
  2) Calculer les longueurs OE et OF.
  3) Quel est l'angle formé par les droites (EG) et (FH) ?
- Exercice 3 (Identification d'un carré) : Un quadrilatère MNPQ a ses quatre côtés de longueur 5 cm et ses diagonales qui mesurent chacune 7,07 cm. Est-ce un carré ? Démontrer étape par étape.

Conclusion : Les quadrilatères particuliers forment une famille hiérarchisée : le parallélogramme transmet ses diagonales sécantes en leur milieu au rectangle (qui y ajoute l'égalité de longueur) et au losange (qui y ajoute la perpendicularité). Le carré cumule toutes les perfections géométriques.`,
  sections: [
    {
      title: '1. Vocabulaire général et règle de dénomination',
      subsections: [
        {
          subtitle: 'A. Éléments d\'un quadrilatère',
          content: [
            "Un quadrilatère est un polygone composé de 4 sommets et 4 côtés.",
            "• Règle de dénomination : Les lettres doivent se succéder en faisant le tour de la figure sans croisement (ex : ABCD, BCDA).",
            "• Les diagonales relient deux sommets opposés : dans le quadrilatère ABCD, les diagonales sont [AC] et [BD].",
            "• Somme des angles : Dans tout quadrilatère convexe, la somme des 4 angles intérieurs est égale à 360°."
          ]
        }
      ]
    },
    {
      title: '2. Tableau comparatif et carte d\'identité des quadrilatères',
      table: {
        headers: ['Quadrilatère', 'Propriété des côtés', 'Propriété des angles', 'Propriété des diagonales', 'Axes de symétrie'],
        rows: [
          ['Parallélogramme', 'Côtés opposés // et égaux deux à deux', 'Angles opposés égaux', 'Se coupent en leur milieu', '0 axe de symétrie'],
          ['Rectangle', 'Côtés opposés // et égaux deux à deux', '4 angles droits (90°)', 'Se coupent en leur milieu ET de même longueur', '2 axes (médiatrices des côtés)'],
          ['Losange', '4 côtés de même longueur', 'Angles opposés égaux', 'Se coupent en leur milieu ET perpendiculaires (⊥)', '2 axes (les diagonales)'],
          ['Carré', '4 côtés de même longueur', '4 angles droits (90°)', 'Se coupent en milieu, perpendiculaires ET de même longueur', '4 axes (2 médiatrices + 2 diagonales)']
        ]
      }
    },
    {
      title: '3. Les critères de reconnaissance (Comment démontrer la nature d\'une figure ?)',
      subsections: [
        {
          subtitle: 'A. Comment prouver qu\'un parallélogramme est un RECTANGLE ?',
          content: [
            "Pour prouver qu'un parallélogramme est un rectangle, il suffit de démontrer l'UNE des deux propriétés suivantes :",
            "• Méthode 1 : Prouver qu'il possède un angle droit.",
            "• Méthode 2 : Prouver que ses diagonales ont la même longueur."
          ]
        },
        {
          subtitle: 'B. Comment prouver qu\'un parallélogramme est un LOSANGE ?',
          content: [
            "Pour prouver qu'un parallélogramme est un losange, il suffit de démontrer l'UNE des deux propriétés suivantes :",
            "• Méthode 1 : Prouver qu'il possède deux côtés consécutifs de même longueur.",
            "• Méthode 2 : Prouver que ses diagonales sont perpendiculaires."
          ]
        },
        {
          subtitle: 'C. Comment prouver qu\'une figure est un CARRÉ ?',
          content: [
            "Pour prouver qu'une figure est un carré, il faut démontrer qu'elle est à la fois un rectangle et un losange :",
            "• Exemple : Un rectangle qui possède deux côtés consécutifs égaux est un carré.",
            "• Exemple : Un losange qui possède un angle droit est un carré."
          ]
        }
      ]
    },
    {
      title: '4. Exercices d\'application rédigés et corrigés pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Démontrer qu\'un quadrilatère est un rectangle',
          content: [
            "Énoncé : Soit un parallélogramme IJKL dont les diagonales se coupent en O. On mesure IK = 7,4 cm et JL = 7,4 cm.",
            "Démontrer que IJKL est un rectangle.",
            "--------------------------------------------------",
            "Corrigé rédigé selon les 3 étapes officielles :",
            "• On sait que : IJKL est un parallélogramme et ses diagonales mesurent IK = JL = 7,4 cm (elles ont la même longueur).",
            "• Or : Si un parallélogramme a ses diagonales de même longueur, alors c'est un rectangle.",
            "• Donc : IJKL est un rectangle."
          ]
        },
        {
          subtitle: 'Exercice 2 : Propriétés des diagonales d\'un losange',
          content: [
            "Énoncé : Soit un losange ABCD de centre O. On sait que AC = 8 cm et BD = 6 cm.",
            "1) Quelle est la nature de l'angle AÔB formé par les diagonales ?",
            "2) Calculer les longueurs OA et OB.",
            "3) En déduire la nature précise du triangle AOB.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Par propriété du cours, les diagonales d'un losange sont perpendiculaires. Donc la droite (AC) est perpendiculaire à (BD), et l'angle AÔB mesure 90°.",
            "2) Les diagonales d'un losange se coupent en leur milieu O :",
            "OA = AC / 2 = 8 cm / 2 = 4 cm.",
            "OB = BD / 2 = 6 cm / 2 = 3 cm.",
            "3) Le triangle AOB possède un angle droit en O (AÔB = 90°). C'est donc un triangle rectangle en O."
          ]
        },
        {
          subtitle: 'Exercice 3 : Démonstration sur la perfection du carré',
          content: [
            "Énoncé : Un menuisier fabrique un cadre à quatre côtés égaux mesurant chacun 50 cm. Pour vérifier que le cadre est d'équerre (forme carrée), il mesure les deux diagonales intérieures et trouve 70,7 cm pour chacune d'elles.",
            "Expliquer mathématiquement pourquoi le cadre est parfaitement carré.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "• Étape 1 (Losange) : Le cadre possède quatre côtés de même longueur (50 cm), c'est donc un losange.",
            "• Étape 2 (Rectangle) : Les diagonales de ce losange ont la même longueur (70,7 cm). Un losange dont les diagonales sont de même longueur possède obligatoirement 4 angles droits : c'est un rectangle.",
            "• Conclusion (Carré) : Étant à la fois un losange (4 côtés égaux) et un rectangle (angles droits / diagonales égales), le cadre est un carré parfait."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Hiérarchie des quadrilatères particuliers',
    root: 'Les Quadrilatères (4 côtés)',
    branches: [
      {
        name: 'Le Parallélogramme',
        subtitle: 'Côtés opposés // et égaux',
        items: ['Diagonales se coupent en leur milieu', 'Angles opposés égaux', 'Centre de symétrie']
      },
      {
        name: 'Le Rectangle',
        subtitle: 'Parallélogramme à 4 angles droits',
        items: ['Diagonales de MÊME LONGUEUR', '2 axes de symétrie (médiatrices)', 'Aire = L × l']
      },
      {
        name: 'Le Losange',
        subtitle: 'Parallélogramme à 4 côtés égaux',
        items: ['Diagonales PERPENDICULAIRES (⊥)', '2 axes de symétrie (diagonales)', 'Aire = (D × d) / 2']
      },
      {
        name: 'Le Carré',
        subtitle: 'Rectangle + Losange réunis',
        items: ['4 côtés égaux et 4 angles droits', 'Diagonales ⊥ et de même longueur', '4 axes de symétrie']
      }
    ]
  },
  conclusion:
    "En définitive, la famille des quadrilatères s'articule autour des propriétés exceptionnelles de leurs diagonales : le parallélogramme garantit le milieu commun, le rectangle assure l'égalité des longueurs, le losange impose la perpendicularité, et le carré réunit toutes ces propriétés dans une harmonie géométrique absolue."
};

export const LESSON_8_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-8',
  number: 'Géométrie • Leçon 8',
  title: 'Périmètres et Aires : Définitions, conversions d\'unités et formules de calcul',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Associer des mesures numériques précises à des formes géométriques est un impératif quotidien : clôturer un champ agricole dans la vallée du fleuve Sénégal exige de connaître son périmètre (la longueur du grillage), tandis que labourer ou carreler une maison nécessite de calculer son aire (la surface intérieure). Trop souvent, les élèves confondent ces deux grandeurs. Cette leçon établit une frontière nette et définitive entre le périmètre (longueur à 1 dimension en mètres) et l'aire (superficie à 2 dimensions en mètres carrés), présente les tableaux de conversion officiels et détaille toutes les formules exigibles au collège.",
  fullText: `Leçon 8 : Périmètres et Aires : Définitions, conversions d'unités et formules de calcul

Introduction : Le périmètre mesure la longueur du contour d'une figure fermée, tandis que l'aire mesure la surface intérieure occupée. Cette leçon fournit les définitions rigoureuses, les unités de mesure associées, les techniques de conversion et les formules fondamentales.

1. Distinction fondamentale : Périmètre versus Aire
• Le Périmètre (P) :
  - C'est la longueur du tour ou contour d'une figure géométrique fermée.
  - Grandeur à UNE DIMENSION (longueur).
  - Unités légales : le mètre (m), ses multiples (km, hm, dam) et ses sous-multiples (dm, cm, mm).
  - Exemple concret : Le grillage pour clôturer un jardin ou la bordure d'un tableau.

• L'Aire ou Superficie (A) :
  - C'est la mesure de l'étendue de la surface intérieure délimitée par la figure.
  - Grandeur à DEUX DIMENSIONS (surface).
  - Unités légales : le mètre carré (m²), ses multiples et sous-multiples.
  - Unités agraires usuelles : l'are (1 a = 100 m²) et l'hectare (1 ha = 10 000 m² = 1 hm²).
  - Exemple concret : Le nombre de carreaux pour recouvrir le sol d'un salon ou la surface cultivable d'un champ d'arachide.

2. Tableaux de conversion officiels
• Unités de longueur : Une seule colonne par unité (on multiplie ou divise par 10 à chaque rang).
  1 m = 10 dm = 100 cm = 1 000 mm ; 1 km = 1 000 m.
• Unités d'aire : DEUX COLONNES par unité (on multiplie ou divise par 100 à chaque rang).
  1 m² = 100 dm² = 10 000 cm² ; 1 cm² = 100 mm² ; 1 km² = 1 000 000 m².

3. Répertoire des Formules Fondamentales de Périmètres
• Carré de côté c :
  P = 4 × c
• Rectangle de longueur L et largeur l :
  P = 2 × (L + l)  ou  P = (2 × L) + (2 × l)
• Triangle de côtés a, b, c :
  P = a + b + c
• Cercle (Périmètre ou Circonférence) de rayon R et diamètre D :
  P = 2 × π × R  ou  P = π × D  (avec π ≈ 3,14 ou 22/7)

4. Répertoire des Formules Fondamentales d'Aires
• Carré de côté c :
  Aire = c × c = c²
• Rectangle de longueur L et largeur l :
  Aire = L × l
• Triangle Rectangle de côtés de l'angle droit a et b :
  Aire = (a × b) / 2
• Triangle quelconque de base b et hauteur associée h :
  Aire = (b × h) / 2
• Disque de rayon R :
  Aire = π × R × R = π × R²  (avec π ≈ 3,14)

Règle d'or de calcul : Avant d'effectuer n'importe quel calcul d'aire ou de périmètre, TOUTES les dimensions doivent impérativement être exprimées DANS LA MÊME UNITÉ ! Si une longueur est en mètres et une autre en centimètres, il faut obligatoirement les convertir dans la même unité au préalable.

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Calcul de périmètre et aire d'un rectangle avec conversion) : Une cour d'école rectangulaire mesure L = 45 m de long et l = 280 dm de large.
  1) Convertir la largeur en mètres.
  2) Calculer le périmètre P de la cour en mètres.
  3) Calculer l'aire A de la cour en mètres carrés (m²).
- Exercice 2 (Calcul sur le cercle et le disque) : Un rond-point circulaire a un rayon R = 10 m. En prenant π ≈ 3,14 :
  1) Calculer la longueur de la bordure extérieure en béton (périmètre).
  2) Calculer la superficie de gazon à planter à l'intérieur (aire du disque).
- Exercice 3 (Aire d'un terrain composite) : Un champ est formé par un rectangle de 60 m sur 40 m surmonté d'un triangle dont la base mesure 60 m et la hauteur 25 m. Calculer l'aire totale de ce champ.

Conclusion : Périmètre et aire répondent à deux questions physiques totalement différentes : 'Combien mesure le contour ?' versus 'Combien de carrés d'unité remplissent l'intérieur ?'. La conversion préalable dans la même unité et la maîtrise rigoureuse des formules évitent les erreurs classiques d'examen.`,
  sections: [
    {
      title: '1. Comparaison rigoureuse : Périmètre vs Aire',
      table: {
        headers: ['Critère', 'Le Périmètre (P)', 'L\'Aire (Superficie A)', 'Différence majeure'],
        rows: [
          ['Définition', 'Longueur totale du contour fermé', 'Mesure de la surface intérieure', 'Contour (1D) vs Surface (2D)'],
          ['Unité de base', 'Le mètre (m)', 'Le mètre carré (m²)', 'Une seule ligne vs Pavage de carrés'],
          ['Colonnes de conversion', '1 colonne par unité (×10 ou ÷10)', '2 colonnes par unité (×100 ou ÷100)', 'Le carré double le nombre de zéros'],
          ['Instruments de mesure', 'Mètre ruban, règle, odomètre', 'Quadrillage, formules de calcul', 'Mesure directe vs Calcul géométrique']
        ]
      }
    },
    {
      title: '2. Tableaux de conversion et unités agraires',
      subsections: [
        {
          subtitle: 'A. Règle des deux colonnes pour les aires',
          content: [
            "Dans le tableau de conversion des aires, chaque unité possède DEUX colonnes (unités et dizaines) car 1 m × 1 m = 1 m², et 10 dm × 10 dm = 100 dm².",
            "• Pour passer d'une unité à l'unité immédiatement inférieure, on multiplie par 100 (on ajoute deux zéros ou on décale la virgule de deux rangs vers la droite).",
            "• Exemples de conversion :",
            "  - 3,5 m² = 350 dm² = 35 000 cm².",
            "  - 4 500 mm² = 45 cm² = 0,45 dm²."
          ]
        },
        {
          subtitle: 'B. Les unités agraires pour les terrains agricoles',
          content: [
            "Pour mesurer la superficie des terres agricoles, on utilise couramment :",
            "• L'are (a) : 1 are = 100 m² (équivaut à un carré de 10 m de côté).",
            "• L'hectare (ha) : 1 hectare = 100 ares = 10 000 m² = 1 hm² (équivaut à un carré de 100 m de côté)."
          ]
        }
      ]
    },
    {
      title: '3. Tableau officiel des formules géométriques',
      table: {
        headers: ['Figure géométrique', 'Formule du Périmètre (P)', 'Formule de l\'Aire (A)', 'Paramètres nécessaires'],
        rows: [
          ['Carré', 'P = 4 × c', 'Aire = c × c = c²', 'c = longueur d\'un côté'],
          ['Rectangle', 'P = 2 × (L + l)', 'Aire = L × l', 'L = longueur ; l = largeur'],
          ['Triangle Rectangle', 'P = côté1 + côté2 + hypoténuse', 'Aire = (a × b) / 2', 'a et b = côtés de l\'angle droit'],
          ['Triangle quelconque', 'P = a + b + c', 'Aire = (base × hauteur) / 2', 'b = base ; h = hauteur relative'],
          ['Cercle / Disque', 'P = 2 × π × R = π × D', 'Aire = π × R² (π × R × R)', 'R = rayon ; D = diamètre ; π ≈ 3,14']
        ]
      }
    },
    {
      title: '4. Remarques capitales de calcul et erreurs à bannir',
      content: [
        "• Remarque 1 : Toujours vérifier l'harmonie des unités avant de multiplier ! On ne multiplie jamais des mètres par des centimètres sans conversion préalable.",
        "• Remarque 2 (Piège du demi-périmètre) : Pour un rectangle, L + l est le DEMI-PÉRIMÈTRE. N'oubliez jamais de multiplier par 2 pour obtenir le périmètre complet !",
        "• Remarque 3 (Division par 2 pour le triangle) : L'aire d'un triangle est la MOITIÉ de celle d'un rectangle. Ne jamais oublier de diviser par 2 : (Base × Hauteur) / 2."
      ]
    },
    {
      title: '5. Exercices d\'application rédigés et corrigés pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calcul sur un rectangle avec conversion',
          content: [
            "Énoncé : Un jardin rectangulaire mesure 35 m de long et 180 dm de large.",
            "1) Exprimer la largeur en mètres.",
            "2) Calculer le périmètre du jardin.",
            "3) Calculer l'aire du jardin en m².",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Conversion de la largeur : 180 dm = 18 m (car 1 m = 10 dm).",
            "2) Calcul du périmètre P :",
            "P = 2 × (L + l) = 2 × (35 m + 18 m) = 2 × 53 m = 106 m.",
            "3) Calcul de l'aire A :",
            "Aire = L × l = 35 m × 18 m = 630 m².",
            "Conclusion : Le périmètre est de 106 m et l'aire vaut 630 m²."
          ]
        },
        {
          subtitle: 'Exercice 2 : Calcul du périmètre et de l\'aire d\'un disque',
          content: [
            "Énoncé : Une fontaine circulaire a un diamètre de D = 6 m. On prend la valeur approchée π ≈ 3,14.",
            "1) Déterminer le rayon R de la fontaine.",
            "2) Calculer la circonférence (périmètre) de la margelle de la fontaine.",
            "3) Calculer l'aire de la surface d'eau au sol.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Le rayon est la moitié du diamètre : R = D / 2 = 6 m / 2 = 3 m.",
            "2) Périmètre du cercle :",
            "P = 2 × π × R = 2 × 3,14 × 3 m = 18,84 m.",
            "3) Aire du disque :",
            "Aire = π × R² = 3,14 × (3 m × 3 m) = 3,14 × 9 m² = 28,26 m²."
          ]
        },
        {
          subtitle: 'Exercice 3 : Aire d\'un terrain en forme de triangle rectangle',
          content: [
            "Énoncé : Un terrain triangulaire est rectangle. Les deux côtés de l'angle droit mesurent 40 m et 30 m, et le troisième côté (l'hypoténuse) mesure 50 m.",
            "1) Calculer la longueur de clôture nécessaire pour entourer ce terrain.",
            "2) Calculer la superficie cultivable de ce terrain.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) La longueur de clôture correspond au périmètre du triangle :",
            "P = 40 m + 30 m + 50 m = 120 m.",
            "2) Pour un triangle rectangle, les deux côtés de l'angle droit constituent la base et la hauteur associée :",
            "Aire = (Base × Hauteur) / 2 = (40 m × 30 m) / 2 = 1 200 m² / 2 = 600 m².",
            "Conclusion : Il faut 120 m de grillage pour clôturer le terrain, et sa superficie est de 600 m²."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Périmètres et Aires au collège',
    root: 'Mesure des grandeurs planes',
    branches: [
      {
        name: 'Périmètre (1D)',
        subtitle: 'Longueur du contour en mètres (m)',
        items: ['Carré : P = 4 × c', 'Rectangle : P = 2 × (L + l)', 'Triangle : P = a + b + c', 'Cercle : P = 2 × π × R = π × D']
      },
      {
        name: 'Aire (2D)',
        subtitle: 'Superficie intérieure en m²',
        items: ['Carré : A = c²', 'Rectangle : A = L × l', 'Triangle : A = (b × h) / 2', 'Disque : A = π × R²']
      },
      {
        name: 'Conversions',
        subtitle: 'Règles de changement d\'unités',
        items: ['Longueurs : 1 colonne par unité', 'Aires : 2 colonnes par unité (×100)', '1 ha = 10 000 m² = 1 hm²']
      }
    ]
  },
  conclusion:
    "En définitive, la parfaite distinction entre le périmètre (longueur du bord en mètres) et l'aire (surface intérieure en m²) constitue une compétence mathématique et civique indispensable. La rigueur des conversions d'unités et l'application soignée des formules garantissent le succès dans tous les problèmes d'arpentage et de vie pratique."
};

export const LESSON_9_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-9',
  number: 'Géométrie • Leçon 9',
  title: 'Géométrie dans l\'espace : Solides usuels, perspective cavalière, patrons et volumes',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Après avoir exploré le monde plat à deux dimensions (2D) de la feuille de papier, l'élève aborde la géométrie dans l'espace à trois dimensions (3D) : longueur, largeur et hauteur ou profondeur. Dans notre environnement quotidien — boîtes de craie, briques de construction, colis postaux ou conteneurs au port autonome de Dakar — les solides tridimensionnels sont omniprésents. Cette leçon étudie les deux polyèdres fondamentaux de 6ème : le pavé droit (parallélépipède rectangle) et le cube, les règles de dessin en perspective cavalière, la conception des patrons par pliage, ainsi que le calcul de leur volume et leur correspondance avec les unités de capacité (litres).",
  fullText: `Leçon 9 : Géométrie dans l'espace : Solides usuels, perspective cavalière, patrons et volumes

Introduction : La géométrie dans l'espace étudie les solides à trois dimensions. Cette leçon se concentre sur le pavé droit et le cube : vocabulaire (faces, arêtes, sommets), perspective cavalière, patrons et calculs de volume et capacité.

1. Description des deux solides usuels : Pavé droit et Cube
• 1) Le Pavé Droit (ou Parallélépipède Rectangle) :
  - Définition : Un solide dont les 6 faces sont toutes des rectangles.
  - Composition exacte :
    * 6 faces rectangulaires (les faces opposées sont parallèles et strictement identiques / superposables).
    * 8 sommets (les coins du solide).
    * 12 arêtes (les segments formant le squelette, réparties en 3 séries de 4 arêtes parallèles et de même longueur : 4 longueurs L, 4 largeurs l et 4 hauteurs h).

• 2) Le Cube :
  - Définition : C'est un cas particulier de pavé droit dont les 6 faces sont des CARRÉS IDENTIQUES.
  - Composition exacte :
    * 6 faces carrées superposables.
    * 8 sommets.
    * 12 arêtes toutes rigoureusement de même longueur c.

2. Représentation plane en Perspective Cavalière
Comment représenter un solide en 3 dimensions sur une feuille de papier plate à 2 dimensions ? On utilise les règles strictes de la perspective cavalière :
• Règle 1 : La face avant est dessinée en VRAIE GRANDEUR (sans aucune déformation, les angles droits restent droits).
• Règle 2 : Les arêtes fuyantes (qui partent vers l'arrière) sont tracées inclinées (généralement à 30° ou 45°) et leur longueur réelle est réduite de moitié (pour donner l'illusion de profondeur).
• Règle 3 : Deux arêtes parallèles dans la réalité restent parallèles sur le dessin.
• Règle 4 (LA RÈGLE CRUCIALE DES TRAITS) :
  - Les arêtes VISIBLES sont tracées en TRAITS PLEINS continus.
  - Les arêtes CACHÉES sont obligatoirement tracées en TRAITS POINTILLÉS.

3. Le Patron d'un solide
• Définition : Le patron d'un solide est une figure plane d'un seul tenant qui, après découpage et pliage le long des arêtes, permet de reconstituer exactement le solide sans qu'aucune face ne se chevauche.
• Patron du cube : Il existe exactement 11 patrons différents possibles pour un cube (le plus classique est le patron en forme de croix composé de 6 carrés).
• Patron du pavé droit : Composé de 3 paires de rectangles identiques disposés de manière à ce que les faces opposées se retrouvent face à face lors du pliage.

4. Volume d'un solide et unités de mesure
• Définition : Le volume est la mesure de l'espace intérieur occupé par un corps à trois dimensions.
• Unités légales : Le mètre cube (m³), ses sous-multiples (dm³, cm³, mm³).
• Règle de conversion des volumes : Dans le tableau, il y a TROIS COLONNES par unité (car 10 × 10 × 10 = 1 000).
  1 m³ = 1 000 dm³ = 1 000 000 cm³.
• Passerelle fondamentale Volume-Capacité :
  1 dm³ = exactement 1 LITRE (1 L).
  1 cm³ = exactement 1 millilitre (1 mL).
  1 m³ = 1 000 litres.

5. Formules de calcul de Volume
• Volume du Pavé Droit :
  V = Longueur × largeur × hauteur = L × l × h
• Volume du Cube de côté (arête) c :
  V = côté × côté × côté = c × c × c = c³

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Dénombrement et vocabulaire) :
  1) Donner le nombre de sommets, d'arêtes et de faces d'un pavé droit.
  2) Quelle est la forme des faces d'un cube ? Combien d'arêtes de même longueur possède-t-il ?
- Exercice 2 (Calcul de volume d'un pavé droit et contenance) : Un réservoir d'eau en forme de pavé droit a pour dimensions intérieures : Longueur = 2 m, largeur = 1,5 m et hauteur = 0,8 m.
  1) Calculer le volume de ce réservoir en mètres cubes (m³).
  2) Convertir ce volume en décimètres cubes (dm³).
  3) Combien de litres d'eau peut contenir ce réservoir au maximum ?
- Exercice 3 (Calcul de volume d'un cube) : Une boîte cubique en bois a une arête de 12 cm.
  Calculer son volume en cm³.

Conclusion : La géométrie dans l'espace permet de passer de la surface au volume. La perspective cavalière avec ses arêtes cachées en pointillés, la construction des patrons et la correspondance sacrée 1 dm³ = 1 litre constituent les fondamentaux de la physique et des mathématiques du collège.`,
  sections: [
    {
      title: '1. Vocabulaire et anatomie des solides à 3 dimensions',
      subsections: [
        {
          subtitle: 'A. Le Pavé Droit (Parallélépipède rectangle)',
          content: [
            "Un pavé droit est un polyèdre convexe dont toutes les faces sont des rectangles.",
            "• 6 faces rectangulaires : Les faces opposées sont parallèles et superposables deux à deux.",
            "• 8 sommets : Points de rencontre de 3 arêtes.",
            "• 12 arêtes : Segments communs à 2 faces adjacentes.",
            "• Dimensions fondamentales : Longueur (L), largeur (l), hauteur (h)."
          ]
        },
        {
          subtitle: 'B. Le Cube',
          content: [
            "Le cube est un pavé droit régulier dont les dimensions sont toutes égales (L = l = h = c).",
            "• 6 faces carrées identiques.",
            "• 8 sommets.",
            "• 12 arêtes de même longueur c."
          ]
        }
      ]
    },
    {
      title: '2. Tableau comparatif : Cube vs Pavé Droit',
      table: {
        headers: ['Caractéristique', 'Pavé Droit (Parallélépipède)', 'Cube', 'Règle commune'],
        rows: [
          ['Nombre de faces', '6 faces rectangulaires', '6 faces carrées identiques', 'Toujours 6 faces planes'],
          ['Nombre de sommets', '8 sommets', '8 sommets', 'Toujours 8 sommets'],
          ['Nombre d\'arêtes', '12 arêtes (3 groupes de 4)', '12 arêtes de même longueur', 'Toujours 12 arêtes'],
          ['Formule du Volume', 'V = L × l × h', 'V = c × c × c = c³', 'Aire de la base × Hauteur'],
          ['Formule de l\'Aire totale', '2 × (Ll + Lh + lh)', '6 × c²', 'Somme des aires des 6 faces']
        ]
      }
    },
    {
      title: '3. Les conventions de la Perspective Cavalière',
      content: [
        "Pour représenter la profondeur sur une surface plane :",
        "• 1. La face avant est tracée en vraie grandeur et conserve ses angles droits.",
        "• 2. Les fuyantes sont inclinées à 30° ou 45° et réduites d'environ 50 %.",
        "• 3. Les lignes parallèles dans la réalité restent parallèles sur le schéma.",
        "• 4. RÈGLE DES ARÊTES VISIBLES ET CACHÉES :",
        "  - Les 9 arêtes visibles sont dessinées en traits pleins continus.",
        "  - Les 3 arêtes cachées (situées à l'arrière ou en dessous) sont OBLIGATOIREMENT dessinées en traits pointillés fins."
      ]
    },
    {
      title: '4. Les Patrons et unités de volume / capacité',
      subsections: [
        {
          subtitle: 'A. Notion de patron par pliage',
          content: [
            "Un patron est le dessin à plat du solide découpé le long de certaines arêtes.",
            "• Il permet de construire le solide par simple pliage sans découpage supplémentaire.",
            "• Il existe 11 patrons différents pour le cube."
          ]
        },
        {
          subtitle: 'B. La passerelle volume et capacité (Le Litre)',
          content: [
            "Dans le tableau de conversion des volumes, chaque colonne est divisée en 3 sous-colonnes (centaines, dizaines, unités) car le cube triomphe en 3 dimensions.",
            "• Relation clé : 1 dm³ = 1 Litre (1 L).",
            "• 1 m³ = 1 000 dm³ = 1 000 Litres.",
            "• 1 cm³ = 1 mL (millilitre)."
          ]
        }
      ]
    },
    {
      title: '5. Exercices d\'application rédigés et corrigés pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calcul de volume et capacité d\'une citerne',
          content: [
            "Énoncé : Une citerne d'arrosage a la forme d'un pavé droit de longueur L = 3 m, largeur l = 2 m et hauteur h = 1,5 m.",
            "1) Calculer le volume de cette citerne en m³.",
            "2) Combien de litres d'eau peut-elle contenir lorsqu'elle est remplie à ras bord ?",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Formule du volume du pavé droit : V = L × l × h.",
            "Application numérique : V = 3 m × 2 m × 1,5 m = 9 m³.",
            "2) On sait que 1 m³ = 1 000 dm³ = 1 000 litres.",
            "Capacité en litres = 9 × 1 000 L = 9 000 litres.",
            "Conclusion : La citerne a un volume de 9 m³ et peut contenir 9 000 litres d'eau."
          ]
        },
        {
          subtitle: 'Exercice 2 : Calcul de volume et aire totale d\'un cube',
          content: [
            "Énoncé : Soit un dé à jouer cubique dont chaque arête mesure c = 2 cm.",
            "1) Calculer le volume de ce dé en cm³.",
            "2) Calculer l'aire totale des 6 faces du dé en cm².",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Volume du cube :",
            "V = c × c × c = 2 cm × 2 cm × 2 cm = 8 cm³.",
            "2) L'aire d'une face carrée vaut : c × c = 2 cm × 2 cm = 4 cm².",
            "Le cube possède 6 faces identiques, donc l'aire totale vaut :",
            "Aire totale = 6 × 4 cm² = 24 cm²."
          ]
        },
        {
          subtitle: 'Exercice 3 : Reconnaissance en perspective cavalière',
          content: [
            "Énoncé : Sur le dessin d'un pavé droit en perspective cavalière :",
            "1) Combien d'arêtes sont tracées en traits pleins ?",
            "2) Combien d'arêtes sont tracées en traits pointillés ?",
            "3) Que représentent ces arêtes en pointillés ?",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) 9 arêtes sont visibles depuis la position d'observation et sont donc tracées en traits pleins.",
            "2) 3 arêtes sont invisibles (cachées à l'intérieur ou à l'arrière) et sont tracées en traits pointillés.",
            "3) Le total fait bien 9 + 3 = 12 arêtes au total. Les traits pointillés permettent au cerveau humain de percevoir le relief et la profondeur du solide sans masquer la vue des faces avant."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Géométrie dans l\'espace',
    root: 'Les Solides en 3 Dimensions',
    branches: [
      {
        name: 'Pavé Droit (Rectangle)',
        subtitle: '6 faces rectangulaires',
        items: ['8 sommets, 12 arêtes', 'Faces opposées égales et //', 'Volume V = L × l × h']
      },
      {
        name: 'Cube (Carré)',
        subtitle: '6 faces carrées identiques',
        items: ['8 sommets, 12 arêtes égales', 'Patrons : 11 formes possibles', 'Volume V = c³']
      },
      {
        name: 'Perspective Cavalière',
        subtitle: 'Représentation plane du relief',
        items: ['Face avant en vraie grandeur', 'Fuyantes à 30° ou 45° réduites', 'Arêtes cachées en pointillés']
      },
      {
        name: 'Volume & Capacité',
        subtitle: 'Correspondance officielle',
        items: ['3 colonnes par unité (m³)', '1 dm³ = 1 Litre', '1 cm³ = 1 mL']
      }
    ]
  },
  conclusion:
    "En conclusion, l'étude du pavé droit et du cube initie l'élève aux trois dimensions de l'espace. La rigueur du dessin en perspective cavalière avec ses pointillés pour les arêtes cachées, l'intelligence du dépliage en patron et la relation essentielle 1 dm³ = 1 L fournissent les clés de voûte de la stéréométrie pour toutes les classes supérieures."
};
