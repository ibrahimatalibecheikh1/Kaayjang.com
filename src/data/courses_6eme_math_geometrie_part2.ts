import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE GÉOMÉTRIE — CLASSE DE 6ÈME
// ACTIVITÉS GÉOMÉTRIQUES — CONFORME AU PROGRAMME OFFICIEL DU SÉNÉGAL
// LEÇONS 4 À 6 : LES ANGLES, LE CERCLE ET LES TRIANGLES
// AUCUN RÉSUMÉ, DÉVELOPPEMENT INTÉGRAL, DÉTAILS APPROFONDIS,
// REMARQUES CAPITALES, PROPRIÉTÉS FORMELLES ET EXERCICES CORRIGÉS
// =========================================================================

export const LESSON_4_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-4',
  number: 'Géométrie • Leçon 4',
  title: 'Les angles : Définition, mesure, classification et bissectrice',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "La notion d'angle est née de l'observation de l'écartement des branches, de l'inclinaison des rayons solaires et de la navigation maritime où il fallait orienter les pirogues et caravelles par rapport aux étoiles. En géométrie, un angle quantifie l'ouverture ou l'écartement formé par deux demi-droites issues d'un même point origine. En classe de 6ème, l'élève apprend à nommer correctement un angle à l'aide d'un chapeau (^), à utiliser le rapporteur en degrés (°), à classifier les angles selon leur ouverture (nul, aigu, droit, obtus, plat, plein) et à construire la bissectrice, véritable axe de symétrie de l'angle.",
  fullText: `Leçon 4 : Les angles : Définition, mesure, classification et bissectrice

Introduction : Un angle mesure l'écartement entre deux demi-droites ayant la même origine. Cette leçon aborde la notation normalisée, la mesure au rapporteur, la classification par catégories et le tracé géométrique de la bissectrice.

1. Constitution et notation d'un angle
• Définition : Un angle est une portion du plan délimitée par deux demi-droites ayant la même origine.
• Les éléments constitutifs :
  - Le point d'origine commun s'appelle le SOMMET de l'angle (ex : point O).
  - Les deux demi-droites s'appellent les CÔTÉS de l'angle (ex : les demi-droites [OA) et [OB)).
• Notation normalisée :
  - On écrit trois lettres majuscules coiffées d'un chapeau : AÔB ou BÔA.
  - RÈGLE ABSOLUE : La lettre centrale située sous le chapeau doit TOUJOURS désigner le sommet de l'angle !
  - Si aucune confusion n'est possible, on peut abréger en écrivant simplement Ô.

2. Mesure d'un angle et utilisation du rapporteur
• L'unité de mesure : L'unité légale est le degré, noté ° (un tour complet correspond à 360°).
• Utilisation du rapporteur en 3 étapes :
  1) Placer le centre du rapporteur (la mire ou le réticule) exactement sur le sommet O de l'angle.
  2) Aligner la ligne du zéro (ligne de foi) avec l'un des côtés de l'angle (ex : le côté [OA)).
  3) Lire la graduation correspondant au passage du deuxième côté [OB), en partant bien du zéro aligné (attention à ne pas confondre la graduation intérieure et extérieure !).

3. Classification des angles selon leur mesure en degrés
• Angle nul : Mesure exactement 0°. Les deux demi-droites [OA) et [OB) sont confondues.
• Angle aigu : Mesure strictement comprise entre 0° et 90° (0° < mes Â < 90°). Il est plus fermé qu'un angle droit.
• Angle droit : Mesure exactement 90°. Les deux côtés sont perpendiculaires. On le code par un petit carré.
• Angle obtus : Mesure strictement comprise entre 90° et 180° (90° < mes Â < 180°). Il est plus ouvert qu'un angle droit.
• Angle plat : Mesure exactement 180°. Les deux côtés [OA) et [OB) sont deux demi-droites opposées formant une ligne droite continue.
• Angle plein : Mesure exactement 360° (tour complet).

4. Relations remarquables entre angles
• Angles adjacents : Deux angles sont adjacents s'ils ont le même sommet, un côté commun et s'ils sont situés de part et d'autre de ce côté commun sans se chevaucher.
• Angles complémentaires : Deux angles sont complémentaires si la somme de leurs mesures est égale à 90°.
  Exemple : 35° et 55° sont complémentaires car 35° + 55° = 90°.
• Angles supplémentaires : Deux angles sont supplémentaires si la somme de leurs mesures est égale à 180°.
  Exemple : 110° et 70° sont supplémentaires car 110° + 70° = 180°.

5. La Bissectrice d'un angle
• Définition : La bissectrice d'un angle est la demi-droite issue du sommet qui partage cet angle en deux angles adjacents de même mesure.
• Formule : Si [Oz) est la bissectrice de l'angle xÔy, alors xÔz = zÔy = (xÔy) / 2.
• Axe de symétrie : La bissectrice est l'axe de symétrie de l'angle.
• Méthode de construction au compas :
  1) La pointe du compas sur le sommet O, tracer un arc de cercle qui coupe les côtés [Ox) et [Oy) en deux points A et B.
  2) La pointe du compas en A, tracer un arc à l'intérieur de l'angle.
  3) Avec le MÊME rayon, la pointe du compas en B, tracer un arc qui coupe le précédent en un point I.
  4) Tracer la demi-droite [OI) à la règle : c'est la bissectrice exacte de l'angle xÔy.

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Calcul d'angles complémentaires et supplémentaires) :
  1) Un angle mesure 42°. Calculer la mesure de son complémentaire.
  2) Un angle mesure 128°. Calculer la mesure de son supplémentaire.
- Exercice 2 (Propriété de la bissectrice) : Soit un angle AÔB mesurant 76°. La demi-droite [OC) est la bissectrice de AÔB.
  1) Calculer la mesure des angles AÔC et CÔB.
  2) Coder la figure obtenue.
- Exercice 3 (Problème d'angles adjacents) : Les angles xÔy et yÔz sont deux angles adjacents. On sait que xÔy = 48° et xÔz = 112°. Calculer la mesure de l'angle yÔz.

Conclusion : L'angle est une mesure angulaire indépendante de la longueur de ses côtés dessinés. La maîtrise de la classification, du rapporteur et de la bissectrice prépare directement l'élève à l'étude des triangles et de la somme des angles (180°).`,
  sections: [
    {
      title: '1. Notations et vocabulaire des angles',
      subsections: [
        {
          subtitle: 'A. Définition et constitution',
          content: [
            "Un angle est formé par deux demi-droites de même origine.",
            "• Le sommet : C'est le point d'origine commun (ex : O).",
            "• Les côtés : Ce sont les demi-droites [OA) et [OB).",
            "• Notation rigoureuse : Â, ou AÔB, ou BÔA avec le chapeau au-dessus de la lettre centrale qui désigne obligatoirement le sommet.",
            "• Remarque capitale : La longueur avec laquelle on dessine les côtés ne modifie absolument pas la mesure de l'angle : que les segments tracés fassent 2 cm ou 10 cm, l'ouverture angulaire reste rigoureusement la même !"
          ]
        }
      ]
    },
    {
      title: '2. Classification officielle des angles selon leur mesure',
      table: {
        headers: ['Catégorie d\'angle', 'Mesure exacte en degrés', 'Aspect géométrique', 'Particularité remarquable'],
        rows: [
          ['Angle Nul', '0°', 'Deux demi-droites superposées', 'Aucun écartement entre les côtés'],
          ['Angle Aigu', '0° < Mesure < 90°', 'Plus fermé qu\'un angle droit', 'Pointu, côtés rapprochés'],
          ['Angle Droit', 'Exactement 90°', 'Côtés perpendiculaires (⊥)', 'Codé par un petit carré au sommet'],
          ['Angle Obtus', '90° < Mesure < 180°', 'Plus ouvert qu\'un angle droit', 'Évasé, côtés écartés'],
          ['Angle Plat', 'Exactement 180°', 'Les deux côtés forment une droite', 'Deux angles droits juxtaposés (90° + 90°)'],
          ['Angle Plein', 'Exactement 360°', 'Tour complet d\'un cercle', '4 angles droits réunis au même sommet']
        ]
      }
    },
    {
      title: '3. Vocabulaire des associations d\'angles',
      subsections: [
        {
          subtitle: 'A. Angles adjacents',
          content: [
            "Deux angles sont dits adjacents lorsqu'ils remplissent SIMULTANÉMENT trois conditions :",
            "1) Ils ont le même sommet.",
            "2) Ils ont un côté commun.",
            "3) Ils sont situés de part et d'autre de ce côté commun sans se chevaucher."
          ]
        },
        {
          subtitle: 'B. Angles complémentaires et supplémentaires',
          content: [
            "• Complémentaires : Deux angles sont complémentaires si la somme de leurs mesures vaut 90°.",
            "  Formule : Â + B̂ = 90°.",
            "• Supplémentaires : Deux angles sont supplémentaires si la somme de leurs mesures vaut 180°.",
            "  Formule : Â + B̂ = 180°.",
            "• Astuce mnémotechnique : 'C' pour Complémentaire vient avant 'S' pour Supplémentaire dans l'alphabet, tout comme 90° vient avant 180° !"
          ]
        }
      ]
    },
    {
      title: '4. La Bissectrice d\'un angle : Définition et construction',
      subsections: [
        {
          subtitle: 'A. Définition et propriétés',
          content: [
            "La bissectrice d'un angle est la demi-droite issue de son sommet qui le partage en deux angles de même mesure.",
            "• Si [Oz) est la bissectrice de l'angle xÔy, alors xÔz = zÔy = xÔy / 2.",
            "• La bissectrice est l'unique axe de symétrie de l'angle.",
            "• Propriété d'équidistance : Tout point de la bissectrice est situé à égale distance des deux côtés de l'angle."
          ]
        },
        {
          subtitle: 'B. Algorithme de tracé au compas',
          content: [
            "Étape 1 : Placer la pointe du compas sur le sommet O et tracer un arc de cercle sécant aux deux côtés en A et B.",
            "Étape 2 : Sans changer le rayon (ou en choisissant un écartement suffisant), piquer en A et tracer un arc à l'intérieur de l'angle.",
            "Étape 3 : Piquer en B avec le même écartement et tracer un arc qui coupe le précédent en un point I.",
            "Étape 4 : Tracer la demi-droite [OI) à la règle. C'est la bissectrice cherchée."
          ]
        }
      ]
    },
    {
      title: '5. Exercices d\'application rédigés et corrigés pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calculs d\'angles complémentaires et supplémentaires',
          content: [
            "Énoncé :",
            "1) Soit un angle M̂ mesurant 34°. Calculer la mesure de son angle complémentaire.",
            "2) Soit un angle P̂ mesurant 115°. Calculer la mesure de son angle supplémentaire.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Deux angles sont complémentaires si leur somme vaut 90°.",
            "Mesure du complémentaire = 90° - 34° = 56°.",
            "2) Deux angles sont supplémentaires si leur somme vaut 180°.",
            "Mesure du supplémentaire = 180° - 115° = 65°."
          ]
        },
        {
          subtitle: 'Exercice 2 : Utilisation de la bissectrice pour calculer des angles',
          content: [
            "Énoncé : Soit un angle droit xÔy (mesurant 90°). On trace sa bissectrice [Ou). Puis, on trace la bissectrice [Ov) de l'angle xÔu.",
            "Calculer la mesure exacte des angles xÔu et xÔv.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "• Comme [Ou) est la bissectrice de l'angle droit xÔy, elle le partage en deux angles égaux :",
            "xÔu = xÔy / 2 = 90° / 2 = 45°.",
            "• Comme [Ov) est la bissectrice de l'angle xÔu, elle le partage à son tour en deux angles égaux :",
            "xÔv = xÔu / 2 = 45° / 2 = 22,5° (ou 22 degrés et 30 minutes)."
          ]
        },
        {
          subtitle: 'Exercice 3 : Somme d\'angles adjacents',
          content: [
            "Énoncé : Trois demi-droites [OA), [OB) et [OC) ont la même origine O. Les angles AÔB et BÔC sont adjacents. On sait que AÔB = 53° et BÔC = 37°.",
            "1) Calculer la mesure de l'angle AÔC.",
            "2) Quelle est la nature précise de l'angle AÔC ? Que peut-on dire des droites (OA) et (OC) ?",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) Comme les angles AÔB et BÔC sont adjacents, l'angle total AÔC est la somme des deux angles :",
            "AÔC = AÔB + BÔC = 53° + 37° = 90°.",
            "2) Puisque AÔC = 90°, c'est un angle droit.",
            "On en déduit que les droites (OA) et (OC) sont perpendiculaires : (OA) ⊥ (OC)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Étude complète des angles',
    root: 'Les Angles géométriques',
    branches: [
      {
        name: 'Définition & Éléments',
        subtitle: 'Sommet et côtés',
        items: ['Sommet O (lettre centrale AÔB)', 'Côtés [OA) et [OB)', 'Mesure en degrés (°) au rapporteur']
      },
      {
        name: 'Classification (0° à 180°)',
        subtitle: 'Catégories selon l\'ouverture',
        items: ['Aigu : entre 0° et 90°', 'Droit : exactement 90° (⊥)', 'Obtus : entre 90° et 180°', 'Plat : exactement 180°']
      },
      {
        name: 'Relations d\'angles',
        subtitle: 'Adjacents & Sommes',
        items: ['Adjacents : même sommet, côté commun', 'Complémentaires : somme = 90°', 'Supplémentaires : somme = 180°']
      },
      {
        name: 'La Bissectrice',
        subtitle: 'Partage en 2 angles égaux',
        items: ['Demi-droite d\'origine O', 'Axe de symétrie de l\'angle', 'Construction exacte au compas']
      }
    ]
  },
  conclusion:
    "En résumé, un angle caractérise une inclinaison mesurée en degrés. La maîtrise du vocabulaire (aigu, droit, obtus, plat, adjacent, complémentaire, supplémentaire) et le savoir-faire instrumental (rapporteur et compas pour la bissectrice) forment des prérequis indispensables pour aborder l'étude des figures polygonales."
};

export const LESSON_5_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-5',
  number: 'Géométrie • Leçon 5',
  title: 'Le cercle et le disque : Vocabulaire, propriétés et constructions',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Le cercle est l'une des formes les plus parfaites et fascinantes de la nature : de la forme du soleil levant aux roues des charrettes et aux cases traditionnelles rondes d'Afrique de l'Ouest, le cercle symbolise l'harmonie et l'équidistance. En mathématiques, le cercle n'est pas une surface pleine, mais une ligne courbe fermée dont tous les points sont situés à égale distance d'un point central fixe. Cette leçon détaille avec une rigueur absolue la distinction entre cercle et disque, les éléments fondamentaux (centre, rayon, diamètre, corde, arc) et les propriétés de position relative d'un point par rapport à un cercle.",
  fullText: `Leçon 5 : Le cercle et le disque : Vocabulaire, propriétés et constructions

Introduction : Le cercle est l'ensemble de tous les points situés à une distance fixe d'un point central. Cette leçon présente le vocabulaire complet, la relation entre rayon et diamètre, la différence fondamentale entre cercle et disque, ainsi que la tangente à un cercle.

1. Définition mathématique du cercle
• Définition ensembliste : Le cercle de centre O et de rayon R, noté C(O, R), est l'ensemble de tous les points M du plan situés à la distance exacte R du point fixe O.
• Écriture mathématique : M ∈ C(O, R) si et seulement si OM = R.
• Remarque fondamentale : Le centre O ne fait PAS partie du cercle ! Il est à l'intérieur, mais n'appartient pas à la ligne du cercle (car sa distance à lui-même vaut 0, et non R).

2. Vocabulaire fondamental du cercle
• Le Centre (O) : Le point fixe équidistant de tous les points du cercle. C'est le centre de symétrie du cercle.
• Le Rayon (R) :
  - Sens géométrique : Tout segment reliant le centre O à un point quelconque du cercle (ex : [OA]).
  - Sens numérique : La longueur de ce segment, notée R (ex : R = 4 cm). Tous les rayons d'un même cercle ont rigoureusement la même longueur.
• Le Diamètre (D) :
  - Sens géométrique : Tout segment passant par le centre O et reliant deux points opposés du cercle (ex : [AB] passant par O).
  - Sens numérique : La longueur de ce segment, notée D.
  - Relation capitale : Le diamètre vaut le double du rayon : D = 2 × R, ou R = D / 2.
  - Propriété : Le centre O est le milieu de tout diamètre du cercle. Le diamètre est également la plus longue corde possible du cercle.
• La Corde : Un segment reliant deux points quelconques situés sur le cercle (ex : [EF]).
• L'Arc de cercle : Une portion continue du cercle comprise entre deux points A et B du cercle. On le note avec un arc arrondi au-dessus des lettres : AB̂ ou arc(AB).

3. Distinction absolue : Cercle versus Disque
• Le Cercle C(O, R) : C'est uniquement la ligne courbe extérieure (le contour, le périmètre).
  Un point M est sur le cercle si : OM = R.
• Le Disque D(O, R) : C'est la surface intérieure pleine délimitée par le cercle, contour compris.
  Un point M est dans le disque si : OM ≤ R.

4. Position relative d'un point M par rapport à un cercle C(O, R)
Soit un cercle de centre O et de rayon R, et un point M du plan. Il n'existe que 3 positions possibles :
• 1) Si OM < R : Le point M est situé à l'INTÉRIEUR strict du cercle (il appartient au disque, mais pas au cercle).
• 2) Si OM = R : Le point M est situé SUR le cercle (il appartient au cercle et au disque).
• 3) Si OM > R : Le point M est situé à l'EXTÉRIEUR du cercle (il n'appartient ni au cercle, ni au disque).

5. La Tangente à un cercle
• Définition : La tangente à un cercle C(O, R) en un point A de ce cercle est la droite perpendiculaire au rayon [OA] passant par le point A.
• Propriété fondamentale : La tangente a un seul et unique point de contact avec le cercle (le point A).

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Relations rayon et diamètre) :
  1) Un cercle a pour rayon R = 3,7 cm. Calculer la longueur de son diamètre D.
  2) Un cercle a pour diamètre D = 15 cm. Calculer son rayon R.
- Exercice 2 (Position relative d'un point) : Soit un cercle C de centre O et de rayon 5 cm. On donne trois points A, B et C tels que OA = 3,8 cm, OB = 5 cm et OC = 6,2 cm. Indiquer pour chaque point sa position exacte par rapport au cercle (intérieur, sur le cercle, extérieur).
- Exercice 3 (Problème de tracé et de corde) : Tracer un cercle de centre O et de rayon 4 cm. Placer deux points A et B sur le cercle tels que le segment [AB] passe par O.
  1) Que représente le segment [AB] pour le cercle ? Quelle est sa longueur ?
  2) Placer un point C sur le cercle tel que AC = 4 cm. Quelle est la nature précise du triangle OAC ? Justifier.

Conclusion : Le cercle est caractérisé par son centre et son rayon. La formule D = 2 × R et la distinction entre la ligne du cercle (OM = R) et la surface du disque (OM ≤ R) sont des notions capitales pour le calcul futur des périmètres et des aires.`,
  sections: [
    {
      title: '1. Vocabulaire complet et éléments géométriques',
      subsections: [
        {
          subtitle: 'A. Définition et centre du cercle',
          content: [
            "Le cercle de centre O et de rayon R est l'ensemble des points M du plan vérifiant la relation de distance exacte OM = R.",
            "• Le compas est l'instrument de tracé par excellence : la pointe sèche se place au centre O, et l'écartement correspond précisément au rayon R.",
            "• Attention : Le centre O ne fait pas partie du cercle (car OO = 0 ≠ R)."
          ]
        },
        {
          subtitle: 'B. Rayon, diamètre, corde et arc',
          content: [
            "• Rayon : Segment reliant le centre O à un point du cercle (ex: [OA]), ou longueur correspondante R.",
            "• Diamètre : Segment passant par le centre et joignant deux points du cercle (ex: [AB]).",
            "  Formule d'or : Diamètre = 2 × Rayon (D = 2R) et Rayon = Diamètre / 2 (R = D/2).",
            "• Corde : Segment joignant deux points du cercle (ex: [CD]). Tout diamètre est une corde particulière : la plus longue possible.",
            "• Arc de cercle : Portion de la circonférence comprise entre deux points du cercle."
          ]
        }
      ]
    },
    {
      title: '2. Tableau comparatif : Cercle vs Disque',
      table: {
        headers: ['Concept', 'Nature géométrique', 'Condition mathématique de distance', 'Image concrète', 'Grandeur mesurée'],
        rows: [
          ['Le Cercle C(O, R)', 'Ligne courbe fermée (contour)', 'OM = R (distance exacte)', 'Un cerceau, une bague, un anneau', 'Longueur (Périmètre : P = 2πR)'],
          ['Le Disque D(O, R)', 'Surface plane pleine (intérieur + bord)', 'OM ≤ R (distance inférieure ou égale)', 'Une pièce de monnaie, une assiette', 'Superficie (Aire : A = πR²)'],
          ['Intérieur du cercle', 'Région ouverte sans le bord', 'OM < R (strictement inférieure)', 'L\'espace intérieur d\'un enclos', 'Surface sans frontière'],
          ['Extérieur du cercle', 'Tout le reste du plan au-delà', 'OM > R (strictement supérieure)', 'Hors du terrain circulaire', 'Surface infinie']
        ]
      }
    },
    {
      title: '3. Positions relatives d\'un point par rapport au cercle',
      content: [
        "Soit un cercle de centre O et de rayon R, et un point M quelconque du plan :",
        "• Cas 1 : Si OM < R, alors M est strictement à l'intérieur du cercle.",
        "• Cas 2 : Si OM = R, alors M appartient au cercle, noté M ∈ C(O, R).",
        "• Cas 3 : Si OM > R, alors M est strictement à l'extérieur du cercle, noté M ∉ C(O, R)."
      ]
    },
    {
      title: '4. La Tangente à un cercle en un point',
      subsections: [
        {
          subtitle: 'A. Définition géométrique',
          content: [
            "La tangente à un cercle C(O, R) en un point A situé sur le cercle est la droite perpendiculaire au rayon [OA] en ce point A.",
            "• Propriété d'intersection : La tangente et le cercle ont un seul point commun : le point de contact A.",
            "• Condition d'orthogonalité : (T) ⊥ (OA) au point A."
          ]
        }
      ]
    },
    {
      title: '5. Exercices d\'application rédigés et corrigés pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calculs de rayons et diamètres',
          content: [
            "Énoncé :",
            "1) Le rayon d'un cercle vaut 6,4 cm. Calculer son diamètre.",
            "2) Le diamètre d'une roue de bicyclette mesure 70 cm. Quel est son rayon ?",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "1) On sait que le diamètre D est le double du rayon R : D = 2 × R.",
            "Application numérique : D = 2 × 6,4 cm = 12,8 cm.",
            "2) On sait que le rayon R est la moitié du diamètre D : R = D / 2.",
            "Application numérique : R = 70 cm / 2 = 35 cm."
          ]
        },
        {
          subtitle: 'Exercice 2 : Détermination de l\'appartenance au cercle et au disque',
          content: [
            "Énoncé : Soit un cercle C de centre O et de rayon R = 4,5 cm. On considère les points P, Q et S tels que OP = 4,5 cm, OQ = 3,9 cm et OS = 5,1 cm.",
            "Pour chaque point, préciser s'il appartient au cercle C, et s'il appartient au disque de centre O et de rayon 4,5 cm.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "• Point P : OP = 4,5 cm = R. La distance est égale au rayon, donc P appartient au cercle C et appartient au disque.",
            "• Point Q : OQ = 3,9 cm < R. La distance est strictement inférieure au rayon, donc Q n'appartient pas au cercle (il est à l'intérieur), mais il appartient au disque.",
            "• Point S : OS = 5,1 cm > R. La distance est strictement supérieure au rayon, donc S n'appartient ni au cercle, ni au disque (il est à l'extérieur)."
          ]
        },
        {
          subtitle: 'Exercice 3 : Démonstration sur les triangles formés par des rayons',
          content: [
            "Énoncé : On trace un cercle de centre O. On choisit deux points distincts E et F situés sur ce cercle.",
            "Quelle est la nature précise du triangle OEF ? Justifier par une démonstration rigoureuse.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "• On sait que : Les points E et F appartiennent tous les deux au cercle de centre O.",
            "• Or : Tous les points d'un cercle sont à égale distance du centre (cette distance est le rayon R).",
            "• Donc : OE = OF = R.",
            "Dans le triangle OEF, les deux côtés [OE] et [OF] ont la même longueur. Par conséquent, le triangle OEF est un triangle isocèle de sommet principal O."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Le Cercle et le Disque',
    root: 'Cercle C(O, R)',
    branches: [
      {
        name: 'Éléments géométriques',
        subtitle: 'Lignes et points clés',
        items: ['Centre O (point équidistant)', 'Rayon R (segment [OA])', 'Diamètre D = 2R (passe par O)', 'Corde (segment [EF])', 'Arc AB (portion de courbe)']
      },
      {
        name: 'Cercle vs Disque',
        subtitle: 'Ligne ou surface',
        items: ['Cercle : contour seul (OM = R)', 'Disque : surface pleine (OM ≤ R)', 'Intérieur (OM < R)', 'Extérieur (OM > R)']
      },
      {
        name: 'Propriétés fondamentales',
        subtitle: 'Symétries et tangentes',
        items: ['O est milieu de tout diamètre', 'Une infinité d\'axes de symétrie', 'Tangente : droite ⊥ au rayon en A']
      }
    ]
  },
  conclusion:
    "En définitive, le cercle C(O, R) est la frontière géométrique définie par l'égalité OM = R, tandis que le disque englobe la totalité de la surface intérieure (OM ≤ R). La relation fondamentale D = 2R et la propriété selon laquelle tout triangle reliant le centre à deux points du cercle est isocèle sont au cœur de la géométrie euclidienne."
};

export const LESSON_6_GEOM_6EME: LessonContent = {
  id: 'math-6eme-geom-lecon-6',
  number: 'Géométrie • Leçon 6',
  title: 'Les triangles : Classification, propriété des angles et constructions',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Le triangle est le polygone fondamental et indéformable de toute la géométrie : en maçonnerie, en charpente métallique ou dans les pylônes de télécommunication du Sénégal, on utilise toujours des structures triangulaires car le triangle est la seule figure plane dont les côtés ne peuvent pas se déformer sans rompre les barres. En classe de 6ème, l'élève apprend la définition d'un triangle, le théorème universel de la somme des trois angles égale à 180°, la condition de constructibilité (l'inégalité triangulaire) et les propriétés spécifiques des triangles particuliers (isocèle, équilatéral, rectangle).",
  fullText: `Leçon 6 : Les triangles : Classification, propriété des angles et constructions

Introduction : Un triangle est un polygone à trois côtés. Cette leçon présente le théorème universel de la somme des angles (180°), la classification détaillée (quelconque, isocèle, équilatéral, rectangle) et les techniques de construction au compas et au rapporteur.

1. Définition et éléments d'un triangle
• Définition : Un triangle est une figure plane fermée (polygone) possédant 3 sommets, 3 côtés et 3 angles.
• Notation : Un triangle de sommets A, B et C est noté triangle ABC.
• Vocabulaire associé :
  - Les 3 sommets sont les points A, B et C.
  - Les 3 côtés sont les segments [AB], [BC] et [CA].
  - Les 3 angles intérieurs sont Â (ou BÂC), B̂ (ou ABC) et Ĉ (ou ACB).
  - Le côté [BC] est appelé le côté opposé au sommet A.

2. Propriété capitale : La somme des angles d'un triangle
• Théorème universel : Dans N'IMPORTE QUEL triangle, la somme des mesures des trois angles intérieurs est TOUJOURS égale à 180°.
• Formule mathématique : Â + B̂ + Ĉ = 180°.
• Conséquence fondamentale : Si l'on connaît la mesure de deux angles dans un triangle, on peut obligatoirement calculer la mesure du troisième angle sans le mesurer !
  Formule : Ĉ = 180° - (Â + B̂).

3. L'Inégalité triangulaire (Condition de constructibilité)
• Théorème : Dans un triangle, la longueur de n'importe quel côté est strictement inférieure à la somme des longueurs des deux autres côtés.
• Règle pratique de vérification : Pour savoir si l'on peut construire un triangle avec 3 longueurs données, on additionne les deux plus petites longueurs :
  - Si (Plus petite + Moyenne) > Plus grande : Le triangle est CONSTRUCTIBLE.
  - Si (Plus petite + Moyenne) = Plus grande : Les 3 points sont ALIGNÉS (triangle plat).
  - Si (Plus petite + Moyenne) < Plus grande : La construction est IMPOSSIBLE (les arcs ne se croisent pas).

4. Classification des triangles particuliers
• 1) Le Triangle Quelconque (ou Scalène) :
  - 3 côtés de longueurs toutes différentes.
  - 3 angles de mesures toutes différentes.
  - Aucun axe de symétrie.

• 2) Le Triangle Isocèle :
  - Définition : Possède au moins 2 côtés de même longueur.
  - Vocabulaire : Si AB = AC, on dit qu'il est isocèle en A. Le point A est le sommet principal, et le côté [BC] est la base.
  - Propriété des angles : Les deux angles à la base ont rigoureusement la même mesure : B̂ = Ĉ.
  - Axe de symétrie : Il possède 1 axe de symétrie (la médiatrice de la base, qui passe par le sommet principal).

• 3) Le Triangle Équilatéral :
  - Définition : Possède ses 3 côtés de même longueur (AB = BC = CA).
  - Propriété des angles : Ses 3 angles sont égaux et mesurent chacun exactement 60° (car 180° ÷ 3 = 60°).
  - Axes de symétrie : Il possède 3 axes de symétrie (les 3 médiatrices de ses côtés).

• 4) Le Triangle Rectangle :
  - Définition : Possède un angle droit (mesurant 90°).
  - Vocabulaire : Si l'angle en A vaut 90°, le triangle est rectangle en A. Le côté opposé à l'angle droit s'appelle l'HYPOTÉNUSE (ici [BC]). L'hypoténuse est toujours le côté le plus long du triangle rectangle.
  - Propriété des angles : Les deux angles aigus sont complémentaires (leur somme vaut 90° : B̂ + Ĉ = 90°).

• 5) Le Triangle Rectangle Isocèle :
  - Possède à la fois un angle droit (90°) et deux côtés de même longueur.
  - Ses deux angles aigus mesurent chacun exactement 45° (car 90° ÷ 2 = 45°).

5. Hauteurs d'un triangle
• Définition : La hauteur issue d'un sommet est la droite qui passe par ce sommet et qui est perpendiculaire au côté opposé (ou à son prolongement).
• Remarque : Tout triangle possède 3 hauteurs, qui se coupent en un point unique appelé l'orthocentre.

Exercices d'application avec corrigés détaillés :
- Exercice 1 (Calcul de l'angle manquant) : Dans un triangle RST, on donne R̂ = 47° et Ŝ = 68°. Calculer la mesure de l'angle T̂.
- Exercice 2 (Calcul d'angles dans un triangle isocèle) : Un triangle MNP est isocèle en M. L'angle au sommet principal mesure M̂ = 40°. Calculer la mesure de chacun des deux angles à la base N̂ et P̂.
- Exercice 3 (Inégalité triangulaire et constructibilité) : Peut-on construire un triangle dont les côtés mesurent 4 cm, 5 cm et 10 cm ? Justifier par un calcul d'inégalité triangulaire.

Conclusion : Le triangle est la structure fondamentale de la géométrie plane. La règle des 180°, l'hypoténuse du triangle rectangle et les symétries des triangles isocèles et équilatéraux sont des outils incontournables pour tous les calculs et démonstrations.`,
  sections: [
    {
      title: '1. Éléments constitutifs et Inégalité triangulaire',
      subsections: [
        {
          subtitle: 'A. Vocabulaire du triangle',
          content: [
            "Un triangle ABC possède 3 sommets (A, B, C), 3 côtés ([AB], [BC], [CA]) et 3 angles intérieurs.",
            "• Le côté opposé à un sommet est le côté qui ne contient pas ce sommet (ex: [BC] est opposé au sommet A).",
            "• Le périmètre d'un triangle est la somme de ses trois côtés : P = AB + BC + CA."
          ]
        },
        {
          subtitle: 'B. Inégalité triangulaire : Quand un triangle existe-t-il ?',
          content: [
            "Pour que 3 longueurs permettent de former un triangle, la plus grande longueur doit être strictement inférieure à la somme des deux autres.",
            "• Règle de vérification : a < b + c.",
            "• Si la plus grande longueur est égale à la somme des deux autres, les 3 points sont alignés.",
            "• Si la plus grande longueur est strictement supérieure à la somme des deux autres, les côtés ne se rejoignent jamais : le triangle est impossible à tracer."
          ]
        }
      ]
    },
    {
      title: '2. Théorème fondamental de la somme des angles (180°)',
      content: [
        "Dans tout triangle, la somme des mesures des trois angles vaut exactement 180° :",
        "Â + B̂ + Ĉ = 180°.",
        "• Utilisation pour calculer un angle inconnu :",
        "  Si l'on connaît deux angles Â et B̂, le troisième angle se calcule par la soustraction :",
        "  Ĉ = 180° - (Â + B̂)."
      ]
    },
    {
      title: '3. Tableau des différents types de triangles et propriétés',
      table: {
        headers: ['Type de triangle', 'Côtés', 'Angles particuliers', 'Axes de symétrie', 'Particularité remarquable'],
        rows: [
          ['Quelconque (scalène)', '3 longueurs différentes', '3 mesures différentes', '0 axe', 'Aucune symétrie'],
          ['Isocèle en A', 'AB = AC (2 côtés égaux)', 'Angles à la base égaux : B̂ = Ĉ', '1 axe (médiatrice de la base)', 'Sommet principal A, base [BC]'],
          ['Équilatéral', '3 côtés égaux : AB = BC = CA', '3 angles égaux à 60° (180°/3)', '3 axes de symétrie', 'Régulier et parfaitement symétrique'],
          ['Rectangle en A', '2 côtés forment un angle droit', 'Â = 90° ; B̂ + Ĉ = 90° (complémentaires)', '0 axe (sauf si isocèle)', 'Hypoténuse [BC] opposée à l\'angle droit'],
          ['Rectangle Isocèle', '2 côtés de l\'angle droit égaux', '90°, 45° et 45°', '1 axe de symétrie', 'Moitié d\'un carré découpé sur sa diagonale']
        ]
      }
    },
    {
      title: '4. Les Hauteurs dans un triangle',
      subsections: [
        {
          subtitle: 'A. Définition et tracé',
          content: [
            "Une hauteur d'un triangle est la droite issue d'un sommet et perpendiculaire au côté opposé.",
            "• Pour tracer une hauteur, on place l'équerre le long du côté opposé et on la fait glisser jusqu'à atteindre le sommet.",
            "• Dans un triangle rectangle, les deux côtés de l'angle droit sont eux-mêmes deux des trois hauteurs du triangle !"
          ]
        }
      ]
    },
    {
      title: '5. Exercices d\'application rédigés et corrigés pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calcul de l\'angle manquant dans un triangle quelconque',
          content: [
            "Énoncé : Soit un triangle KLM tel que K̂ = 72° et L̂ = 39°.",
            "Calculer la mesure précise de l'angle M̂.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "• On sait que : La somme des angles d'un triangle vaut toujours 180° : K̂ + L̂ + M̂ = 180°.",
            "• On calcule la somme des deux angles connus : K̂ + L̂ = 72° + 39° = 111°.",
            "• On en déduit l'angle manquant : M̂ = 180° - 111° = 69°.",
            "Conclusion : L'angle M̂ mesure exactement 69°."
          ]
        },
        {
          subtitle: 'Exercice 2 : Calcul des angles d\'un triangle isocèle',
          content: [
            "Énoncé : Soit un triangle ABC isocèle en A tel que BÂC = 50°.",
            "Calculer la mesure des angles ABC et ACB.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "• On sait que : Le triangle ABC est isocèle en A, donc les angles à la base sont égaux : ABC = ACB.",
            "• La somme des trois angles vaut 180° : BÂC + ABC + ACB = 180°.",
            "• On calcule la somme restante pour les deux angles de base :",
            "ABC + ACB = 180° - 50° = 130°.",
            "• Comme ces deux angles sont égaux, on divise par 2 :",
            "ABC = ACB = 130° / 2 = 65°.",
            "Conclusion : Les deux angles à la base mesurent chacun 65°."
          ]
        },
        {
          subtitle: 'Exercice 3 : Test de constructibilité (Inégalité triangulaire)',
          content: [
            "Énoncé : Indiquer si l'on peut construire un triangle avec les longueurs suivantes, et justifier mathématiquement :",
            "Cas 1 : AB = 7 cm, BC = 4 cm, AC = 2 cm.",
            "Cas 2 : EF = 6 cm, FG = 8 cm, EG = 5 cm.",
            "--------------------------------------------------",
            "Corrigé détaillé et rédigé :",
            "• Cas 1 : La plus grande longueur est AB = 7 cm. La somme des deux autres côtés vaut : BC + AC = 4 + 2 = 6 cm.",
            "Comme 7 > 6 (la plus grande longueur est supérieure à la somme des deux autres), les arcs de cercle ne se couperont jamais. La construction est IMPOSSIBLE.",
            "• Cas 2 : La plus grande longueur est FG = 8 cm. La somme des deux autres côtés vaut : EF + EG = 6 + 5 = 11 cm.",
            "Comme 8 < 11 (la plus grande longueur est strictement inférieure à la somme des deux autres), le triangle EFG est parfaitement CONSTRUCTIBLE."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Classification et propriétés des triangles',
    root: 'Les Triangles (Polygones à 3 côtés)',
    branches: [
      {
        name: 'Propriété Universelle',
        subtitle: 'Somme des 3 angles',
        items: ['Â + B̂ + Ĉ = 180° toujours', 'Inégalité triangulaire : a < b + c', 'Périmètre P = a + b + c']
      },
      {
        name: 'Triangle Isocèle',
        subtitle: '2 côtés de même longueur',
        items: ['Sommet principal et base', 'Angles à la base égaux', '1 axe de symétrie']
      },
      {
        name: 'Triangle Équilatéral',
        subtitle: '3 côtés égaux',
        items: ['3 côtés de même longueur', '3 angles de 60° (180°/3)', '3 axes de symétrie']
      },
      {
        name: 'Triangle Rectangle',
        subtitle: '1 angle droit (90°)',
        items: ['Hypoténuse = plus grand côté', 'Angles aigus complémentaires (somme 90°)', 'Rectangle-isocèle : 90°, 45°, 45°']
      }
    ]
  },
  conclusion:
    "En résumé, l'étude des triangles repose sur la somme universelle des angles (180°), l'inégalité triangulaire et la reconnaissance immédiate des figures particulières (isocèle, équilatéral, rectangle). Ces propriétés permettent de résoudre des problèmes de calculs angulaires et de préparer les futures démonstrations géométriques."
};
