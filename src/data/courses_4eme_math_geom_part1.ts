import { LessonContent } from './courses';
import {
  SVG_PYTHAGORE_DIRECT,
  SVG_PYTHAGORE_RECIPROQUE,
  SVG_COSINUS_ANGLE,
  SVG_THALES_CONFIGURATION
} from './diagrams_4eme';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 4ÈME
// ACTIVITÉS GÉOMÉTRIQUES — PROGRAMME OFFICIEL COMPLET
// PARTIE 1 : LEÇONS 1 À 4 (PYTHAGORE DIRECT & RÉCIPROQUE, COSINUS, THALÈS)
// COURS DÉTAILLÉ AVEC DÉFINITIONS, PROPRIÉTÉS, REMARQUES ET 2 EXERCICES CORRIGÉS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 1 : LE THÉORÈME DE PYTHAGORE (THÉORÈME DIRECT)
// -------------------------------------------------------------------------
export const LESSON_1_GEOM_4EME: LessonContent = {
  id: 'math-4eme-geom-lecon-1',
  number: 'Leçon 1 (Géométrie)',
  title: 'Le théorème de Pythagore (Théorème direct)',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Le théorème de Pythagore est l'un des piliers fondamentaux de la géométrie euclidienne. Découvert dans l'Antiquité, il établit une relation métrique universelle entre les longueurs des trois côtés d'un triangle rectangle. En classe de 4ème, le théorème direct est l'outil indispensable pour calculer la longueur exacte ou approchée d'un côté inconnu d'un triangle rectangle dès que l'on connaît les longueurs des deux autres côtés.",
  fullText: `Leçon 1 : Le théorème de Pythagore (Théorème direct)

Introduction :
Le théorème de Pythagore est l'un des piliers fondamentaux de la géométrie euclidienne. Découvert dans l'Antiquité, il établit une relation métrique universelle entre les longueurs des trois côtés d'un triangle rectangle. En classe de 4ème, le théorème direct est l'outil indispensable pour calculer la longueur exacte ou approchée d'un côté inconnu d'un triangle rectangle dès que l'on connaît les longueurs des deux autres côtés.

1. Vocabulaire du triangle rectangle et hypoténuse
Dans un triangle rectangle :
- L'angle droit mesure exactement 90°.
- L'hypoténuse est le côté opposé à l'angle droit. C'est toujours le côté le plus long du triangle rectangle.
- Les deux autres côtés sont appelés les côtés de l'angle droit (ou côtés adjacents à l'angle droit).

Exemple de repérage :
Dans un triangle ABC rectangle en A :
- Le sommet de l'angle droit est A.
- L'hypoténuse est le segment [BC].
- Les côtés de l'angle droit sont [AB] et [AC].

2. Énoncé fondamental du théorème direct
PROPRIÉTÉ :
Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.

Formulation algébrique :
Si le triangle ABC est rectangle en A, alors :
BC² = AB² + AC²

Schéma géométrique explicatif :
        C
        |\\
        | \\
 côté b |  \\  Hypoténuse a  (BC)
        |   \\
        |____\\
        A     B
         côté c

Remarque capitale :
L'hypoténuse étant le côté le plus long, la relation commence toujours par son carré isolé à gauche du signe égal : Hypoténuse² = Côté1² + Côté2².

3. Applications au calcul de longueurs

Cas A : Calcul de l'hypoténuse (connaissant les deux côtés de l'angle droit)
Méthode :
1. On rédige : « Le triangle ABC est rectangle en A. D'après le théorème de Pythagore, on a : BC² = AB² + AC² ».
2. On remplace par les valeurs numériques données.
3. On effectue la somme des carrés.
4. On prend la racine carrée (notée √) pour trouver la longueur BC : BC = √(AB² + AC²).

Exemple : Soit ABC rectangle en A avec AB = 3 cm et AC = 4 cm.
BC² = 3² + 4² = 9 + 16 = 25
BC = √25 = 5 cm.

Cas B : Calcul d'un côté de l'angle droit (connaissant l'hypoténuse et un côté)
Pour isoler un côté de l'angle droit, on effectue une soustraction :
AB² = BC² - AC²   ou   AC² = BC² - AB²

Exemple : Soit MNP rectangle en M tel que NP = 10 cm (hypoténuse) et MN = 6 cm.
D'après le théorème de Pythagore : NP² = MN² + MP²
Donc MP² = NP² - MN² = 10² - 6² = 100 - 36 = 64
MP = √64 = 8 cm.

4. Valeur exacte et valeur approchée
Lorsque le résultat de la racine carrée n'est pas un carré parfait (comme 25 ou 64), on distingue :
- La valeur exacte : écrite sous la forme d'un radical, par exemple BC = √41 cm.
- La valeur approchée : obtenue à la calculatrice, arrondie au millimètre (dixième de cm) près, ex : √41 ≈ 6,4 cm.`,
  sections: [
    {
      title: '1. Notions clés et vocabulaire du triangle rectangle',
      image: {
        url: SVG_PYTHAGORE_DIRECT,
        alt: 'Figure 1 : Théorème direct de Pythagore dans le triangle rectangle',
        caption: 'Figure 1 : Triangle rectangle ABC en A, hypoténuse [BC] et relation métrique universelle BC² = AB² + AC².'
      },
      subsections: [
        {
          subtitle: "Définition de l'hypoténuse et côtés de l'angle droit",
          content: [
            "• Triangle rectangle : triangle possédant un angle droit (90°).",
            "• Hypoténuse : côté situé en face de l'angle droit. C'est obligatoirement le côté le plus long du triangle rectangle.",
            "• Côtés de l'angle droit : les deux segments perpendiculaires formant l'angle de 90°.",
            "• Règle d'or : Ne jamais confondre l'hypoténuse avec l'un des côtés perpendiculaires lors de la rédaction de l'égalité."
          ]
        },
        {
          subtitle: 'Énoncé officiel du théorème direct',
          content: [
            "• PROPRIÉTÉ : Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.",
            "• Formule si ABC est rectangle en A : BC² = AB² + AC².",
            "• Déduction pour un côté de l'angle droit : AB² = BC² - AC² et AC² = BC² - AB²."
          ]
        }
      ]
    },
    {
      title: '2. Méthodologie rigoureuse de rédaction',
      subsections: [
        {
          subtitle: 'Le canevas en 4 étapes pour une copie parfaite',
          content: [
            "Étape 1 (Hypothèse) : Citer clairement le triangle et préciser en quel sommet se trouve l'angle droit (« Dans le triangle EFG rectangle en E... »).",
            "Étape 2 (Théorème) : Nommer expressément l'outil utilisé (« D'après le théorème de Pythagore... »).",
            "Étape 3 (Formule littérale) : Écrire l'égalité avec les lettres des sommets avant tout calcul numérique (« FG² = EF² + EG² »).",
            "Étape 4 (Calcul et conclusion) : Remplacer par les valeurs numériques, isoler le terme inconnu, calculer la racine carrée et préciser l'unité de mesure."
          ]
        }
      ]
    },
    {
      title: '3. Exercices complets résolus pas-à-pas',
      subsections: [
        {
          subtitle: "Exercice 1 : Énoncé — Calcul d'une hypoténuse et d'un côté de l'angle droit",
          content: [
            "1. Soit un triangle RST rectangle en S tel que RS = 4,5 cm et ST = 6 cm. Calculer la longueur exacte de l'hypoténuse RT.",
            "2. Soit un triangle KLM rectangle en K tel que LM = 13 cm et KL = 5 cm. Calculer la longueur exacte du côté [KM]."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Calcul de RT dans le triangle RST rectangle en S :",
            "   • Le triangle RST est rectangle en S.",
            "   • D'après le théorème de Pythagore, on a : RT² = RS² + ST².",
            "   • Application numérique : RT² = 4,5² + 6² = 20,25 + 36 = 56,25.",
            "   • Longueur RT : RT = √56,25 = 7,5 cm.",
            "   • Conclusion : L'hypoténuse RT mesure exactement 7,5 cm.",
            "2. Calcul de KM dans le triangle KLM rectangle en K :",
            "   • Le triangle KLM est rectangle en K, son hypoténuse est [LM].",
            "   • D'après le théorème de Pythagore, on a : LM² = KL² + KM².",
            "   • On isole KM² : KM² = LM² - KL².",
            "   • Application numérique : KM² = 13² - 5² = 169 - 25 = 144.",
            "   • Longueur KM : KM = √144 = 12 cm.",
            "   • Conclusion : Le côté KM mesure exactement 12 cm."
          ]
        },
        {
          subtitle: "Exercice 2 : Énoncé — Problème d'échelle contre un mur et diagonale d'un terrain",
          content: [
            "1. Une échelle de 6,5 m de long est appuyée contre un mur vertical. Son pied est posé au sol à 2,5 m du mur. On suppose le sol horizontal et le mur parfaitement vertical (angle droit). À quelle hauteur sur le mur l'échelle s'appuie-t-elle ?",
            "2. Un terrain de football rectangulaire mesure 100 m de longueur sur 75 m de largeur. Un arbitre traverse le terrain en courant en ligne droite d'un coin au coin opposé (le long de la diagonale). Quelle distance exacte a-t-il parcourue ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Problème de l'échelle :",
            "   • Modélisation : Notons M le sommet du mur où touche l'échelle, P le pied du mur, et S le pied de l'échelle au sol.",
            "   • Le mur étant vertical et le sol horizontal, le triangle MPS est rectangle en P.",
            "   • L'échelle représente l'hypoténuse : MS = 6,5 m. La distance au sol est PS = 2,5 m. La hauteur du mur est MP.",
            "   • D'après le théorème de Pythagore : MS² = MP² + PS².",
            "   • D'où MP² = MS² - PS² = 6,5² - 2,5² = 42,25 - 6,25 = 36.",
            "   • Hauteur MP : MP = √36 = 6 m.",
            "   • Conclusion : L'échelle atteint le mur à une hauteur de 6 mètres.",
            "2. Diagonale du terrain de football :",
            "   • Le terrain est un rectangle ABCD. Un angle de rectangle est droit (90°), donc le triangle ABC est rectangle en B.",
            "   • Les côtés de l'angle droit sont AB = 100 m et BC = 75 m. La diagonale est l'hypoténuse AC.",
            "   • D'après le théorème de Pythagore : AC² = AB² + BC² = 100² + 75² = 10 000 + 5 625 = 15 625.",
            "   • Calcul de AC : AC = √15 625 = 125 m.",
            "   • Conclusion : L'arbitre a parcouru exactement 125 mètres."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : THÉORÈME DE PYTHAGORE (DIRECT)',
    root: 'THÉORÈME DE PYTHAGORE',
    branches: [
      {
        name: 'HYPOTHÈSE OBLIGATOIRE',
        subtitle: 'Triangle rectangle avéré',
        items: [
          'Le triangle doit impérativement être rectangle',
          'Repérer le sommet de l\'angle droit (ex: A)',
          'Identifier l\'hypoténuse opposée à l\'angle droit (ex: [BC])'
        ]
      },
      {
        name: 'FORMULE MAÎTRESSE',
        subtitle: 'Somme des carrés',
        items: [
          'BC² = AB² + AC²',
          'Pour chercher l\'hypoténuse : additionner les carrés',
          'Pour chercher un côté de l\'angle droit : soustraire les carrés (BC² - AB²)'
        ]
      },
      {
        name: 'EXTRACTION DE RACINE',
        subtitle: 'Résultat final',
        items: [
          'Utilisation de la touche racine carrée √',
          'Valeur exacte : symbole √ (ex: √41)',
          'Valeur approchée : arrondi au dixième (ex: 6,4 cm)'
        ]
      }
    ]
  },
  conclusion:
    "Le théorème de Pythagore direct est la relation géométrique la plus célèbre et utile du collège. En respectant rigoureusement les 4 étapes de rédaction et en veillant à isoler correctement le carré de l'hypoténuse, tout calcul de longueur dans un triangle rectangle devient mécanique et infaillible."
};

// -------------------------------------------------------------------------
// LEÇON 2 : LA RÉCIPROQUE DU THÉORÈME DE PYTHAGORE
// -------------------------------------------------------------------------
export const LESSON_2_GEOM_4EME: LessonContent = {
  id: 'math-4eme-geom-lecon-2',
  number: 'Leçon 2 (Géométrie)',
  title: 'La réciproque du théorème de Pythagore',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Alors que le théorème direct de Pythagore exige un angle droit pour calculer une longueur inconnue, la réciproque du théorème de Pythagore fonctionne dans le sens inverse : elle permet de démontrer qu'un triangle dont on connaît les trois longueurs possède un angle droit. C'est l'outil privilégié pour vérifier l'orthogonalité et prouver qu'un triangle est rectangle.",
  fullText: `Leçon 2 : La réciproque du théorème de Pythagore

Introduction :
Alors que le théorème direct de Pythagore exige un angle droit pour calculer une longueur inconnue, la réciproque du théorème de Pythagore fonctionne dans le sens inverse : elle permet de démontrer qu'un triangle dont on connaît les trois longueurs possède un angle droit. C'est l'outil privilégié pour vérifier l'orthogonalité et prouver qu'un triangle est rectangle.

1. Énoncé de la réciproque du théorème de Pythagore
PROPRIÉTÉ :
Si, dans un triangle, le carré du côté le plus long est égal à la somme des carrés des deux autres côtés, alors ce triangle est rectangle.
L'angle droit se situe en face du côté le plus long (qui devient l'hypoténuse du triangle).

Formulation symbolique :
Soit ABC un triangle où [BC] est le côté le plus long.
Si BC² = AB² + AC², alors le triangle ABC est rectangle en A.

2. Cas où l'égalité n'est pas vérifiée : la contraposée
Si le carré du côté le plus long N'EST PAS ÉGAL à la somme des carrés des deux autres côtés (BC² ≠ AB² + AC²), alors le triangle ABC N'EST PAS rectangle.
En logique mathématique, cette démonstration s'appelle la contraposée du théorème de Pythagore. Au collège, on l'englobe couramment sous le théorème de Pythagore.

3. Règle méthodologique absolue : NE JAMAIS ÉCRIRE L'ÉGALITÉ AVANT D'AVOIR CALCULÉ
L'erreur la plus fréquente des élèves est d'écrire dès le départ :
« BC² = AB² + AC² » alors qu'on ne sait pas encore si le triangle est rectangle !
Pour prouver qu'un triangle est rectangle, on doit IMPÉRATIVEMENT séparer les calculs :
- D'une part, on calcule le carré du côté le plus long : BC² = ...
- D'autre part, on calcule la somme des carrés des deux autres côtés : AB² + AC² = ...
- On compare ensuite les deux résultats numériques :
  • S'ils sont égaux, on conclut grâce à la réciproque du théorème de Pythagore que le triangle est rectangle.
  • S'ils sont différents, on conclut que le triangle n'est pas rectangle.`,
  sections: [
    {
      title: '1. Principe fondamental et conditions d\'utilisation',
      image: {
        url: SVG_PYTHAGORE_RECIPROQUE,
        alt: 'Figure 2 : Test d\'orthogonalité avec réciproque et contraposée de Pythagore',
        caption: 'Figure 2 : Comparaison méthodique — triangle rectangle vérifié (17² = 15² + 8²) vs triangle non rectangle (9² ≠ 6² + 7²).'
      },
      subsections: [
        {
          subtitle: 'Différence essentielle entre théorème direct et réciproque',
          content: [
            "• Théorème direct : On SAIT que le triangle est rectangle → On cherche une LONGUEUR.",
            "• Réciproque : On CONNAÎT les 3 longueurs → On cherche à DÉMONTRER s'il y a un angle droit.",
            "• Côté candidat à l'hypoténuse : C'est toujours le côté qui possède la plus grande mesure."
          ]
        },
        {
          subtitle: 'Protocole de rédaction officiel',
          content: [
            "1. Identifier le côté le plus long du triangle.",
            "2. Calculer le carré du côté le plus long de manière isolée.",
            "3. Calculer la somme des carrés des deux autres côtés séparément.",
            "4. Comparer les deux valeurs obtenues.",
            "5. Conclure formellement en citant la réciproque (si égalité) ou la contraposée (si différence)."
          ]
        }
      ]
    },
    {
      title: '2. Exercices complets résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Deux tests d\'orthogonalité',
          content: [
            "1. Soit un triangle ABC tel que AB = 8 cm, AC = 15 cm et BC = 17 cm. Le triangle ABC est-il rectangle ? Si oui, préciser en quel sommet.",
            "2. Soit un triangle IJK tel que IJ = 7 cm, JK = 9 cm et IK = 11 cm. Le triangle IJK est-il rectangle ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Test pour le triangle ABC :",
            "   • Le côté le plus long est BC = 17 cm.",
            "   • D'une part : BC² = 17² = 289.",
            "   • D'autre part : AB² + AC² = 8² + 15² = 64 + 225 = 289.",
            "   • Constat : On constate que BC² = AB² + AC² (289 = 289).",
            "   • Conclusion : D'après la réciproque du théorème de Pythagore, le triangle ABC est rectangle en A (le sommet opposé au côté [BC]).",
            "2. Test pour le triangle IJK :",
            "   • Le côté le plus long est IK = 11 cm.",
            "   • D'une part : IK² = 11² = 121.",
            "   • D'autre part : IJ² + JK² = 7² + 9² = 49 + 81 = 130.",
            "   • Constat : On constate que IK² ≠ IJ² + JK² car 121 ≠ 130.",
            "   • Conclusion : Si le triangle était rectangle, l'égalité de Pythagore serait vérifiée. L'égalité n'étant pas vérifiée, le triangle IJK n'est pas rectangle."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Problème d\'équerre de charpentier et vérification de maçonnerie',
          content: [
            "1. Pour vérifier qu'un mur est parfaitement perpendiculaire au sol, un maçon utilise la règle historique dite du « 3 - 4 - 5 » : il mesure 60 cm sur le mur depuis le sol, 80 cm au sol depuis le mur, puis mesure la distance en ligne droite entre ces deux repères et trouve 100 cm. Le mur forme-t-il un angle parfaitement droit avec le sol ?",
            "2. Un menuisier fabrique une étagère triangulaire dont les côtés mesurent 48 cm, 55 cm et 73 cm. Cette étagère pourra-t-elle s'insérer exactement dans le coin d'une pièce à angle droit ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Vérification du maçon :",
            "   • Modélisons la situation par un triangle dont les côtés mesurent 60 cm, 80 cm et 100 cm.",
            "   • Le côté le plus long est d = 100 cm.",
            "   • D'une part : 100² = 10 000.",
            "   • D'autre part : 60² + 80² = 3 600 + 6 400 = 10 000.",
            "   • On constate que 100² = 60² + 80² (10 000 = 10 000).",
            "   • D'après la réciproque du théorème de Pythagore, le triangle formé est rectangle.",
            "   • Conclusion : L'angle entre le mur et le sol est parfaitement droit (90°). Le mur est d'aplomb.",
            "2. Vérification de l'étagère du menuisier :",
            "   • Les trois côtés sont a = 48 cm, b = 55 cm, c = 73 cm.",
            "   • Le côté le plus long est c = 73 cm.",
            "   • D'une part : 73² = 5 329.",
            "   • D'autre part : 48² + 55² = 2 304 + 3 025 = 5 329.",
            "   • On a 73² = 48² + 55² = 5 329.",
            "   • D'après la réciproque du théorème de Pythagore, le triangle de l'étagère possède un angle droit opposé au côté de 73 cm.",
            "   • Conclusion : L'étagère est un triangle rectangle et s'insérera parfaitement dans le coin à 90° de la pièce."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : LA RÉCIPROQUE DE PYTHAGORE',
    root: 'RÉCIPROQUE DE PYTHAGORE',
    branches: [
      {
        name: 'DONNÉES INITIALES',
        subtitle: '3 longueurs connues',
        items: [
          'Toutes les longueurs du triangle sont fournies',
          'Repérer impérativement le côté le plus long',
          'Ne JAMAIS supposer l\'angle droit d\'avance'
        ]
      },
      {
        name: 'CALCULS SÉPARÉS',
        subtitle: 'Deux colonnes disjointes',
        items: [
          'Calcul 1 : Carré du plus long (ex: BC²)',
          'Calcul 2 : Somme des 2 autres carrés (AB² + AC²)',
          'Interdiction d\'écrire le signe = entre eux avant calcul'
        ]
      },
      {
        name: 'CONCLUSION BIFURQUÉE',
        subtitle: 'Verdict géométrique',
        items: [
          'Si BC² = AB² + AC² : Rectangle d\'après la réciproque',
          'Si BC² ≠ AB² + AC² : Pas rectangle (contraposée)',
          'L\'angle droit est opposé au plus grand côté'
        ]
      }
    ]
  },
  conclusion:
    "La réciproque du théorème de Pythagore est l'outil souverain pour tester l'orthogonalité. La rigueur de rédaction, consistant à séparer strictement le calcul du plus grand côté de la somme des deux autres, garantit une démonstration mathématiquement irréprochable."
};

// -------------------------------------------------------------------------
// LEÇON 3 : LE COSINUS D'UN ANGLE AIGU DANS UN TRIANGLE RECTANGLE
// -------------------------------------------------------------------------
export const LESSON_3_GEOM_4EME: LessonContent = {
  id: 'math-4eme-geom-lecon-3',
  number: 'Leçon 3 (Géométrie)',
  title: 'Le cosinus d\'un angle aigu dans un triangle rectangle',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "La trigonométrie, du grec « trigônon » (triangle) et « metron » (mesure), est la branche des mathématiques qui relie les mesures des angles aux longueurs des côtés. En 4ème, les élèves découvrent la première fonction trigonométrique : le cosinus d'un angle aigu. Grâce au cosinus, on peut déterminer la mesure d'un angle sans rapporteur ou calculer la longueur d'un côté dès qu'un angle et un côté sont connus.",
  fullText: `Leçon 3 : Le cosinus d'un angle aigu dans un triangle rectangle

Introduction :
La trigonométrie, du grec « trigônon » (triangle) et « metron » (mesure), est la branche des mathématiques qui relie les mesures des angles aux longueurs des côtés. En 4ème, les élèves découvrent la première fonction trigonométrique : le cosinus d'un angle aigu. Grâce au cosinus, on peut déterminer la mesure d'un angle sans rapporteur ou calculer la longueur d'un côté dès qu'un angle et un côté sont connus.

1. Définition du côté adjacent et repérage des côtés
Dans un triangle ABC rectangle en A :
- L'hypoténuse est le côté opposé à l'angle droit (ici [BC]). Elle ne change jamais de rôle.
- Pour un angle aigu donné, par exemple l'angle ACB (noté C^) :
  • Le côté adjacent à l'angle C^ est le côté de l'angle droit qui touche cet angle : c'est le segment [AC].
  • Le côté opposé à l'angle C^ est le côté situé en face de lui : c'est le segment [AB].

Schéma trigonométrique :
        B
        |\\
        | \\  Hypoténuse [BC]
        |  \\
        |___\\ C (angle d'intérêt)
        A    
        Côté adjacent à C^ : [AC]

2. Définition mathématique du cosinus
PROPRIÉTÉ :
Dans un triangle rectangle, le cosinus d'un angle aigu est égal au quotient (rapport) de la longueur du côté adjacent à cet angle par la longueur de l'hypoténuse.

Formule universelle :
cos(Angle) = Côté adjacent / Hypoténuse

Dans le triangle ABC rectangle en A :
cos(ACB) = AC / BC
cos(ABC) = AB / BC

3. Propriétés essentielles du cosinus
- Nombre sans unité : Le cosinus est le quotient de deux longueurs exprimées dans la même unité. C'est donc un nombre pur, sans unité (pas de cm, ni de degrés).
- Encadrement strict : Dans un triangle rectangle, l'hypoténuse est strictement plus longue que le côté adjacent. Par conséquent :
  0 < cos(Angle aigu) < 1
- Variations : Plus un angle aigu est grand (proche de 90°), plus son cosinus est petit (proche de 0). Plus un angle aigu est petit (proche de 0°), plus son cosinus est grand (proche de 1).

4. Deux grandes utilisations pratiques

Utilisation 1 : Calculer la longueur d'un côté
Quand on connaît un angle et une longueur, on utilise l'égalité des produits en croix.
Exemple : Dans ABC rectangle en A, BC = 8 cm et B^ = 35°.
cos(35°) = AB / 8  =>  AB = 8 × cos(35°) ≈ 8 × 0,819 ≈ 6,55 cm.

Utilisation 2 : Calculer la mesure d'un angle aigu
Quand on connaît les deux côtés (adjacent et hypoténuse), on calcule le rapport décimal puis on utilise la touche « arccos » (ou « cos⁻¹ » ou « shift/seconde + cos ») de la calculatrice.
Exemple : Dans EFG rectangle en E, EF = 4 cm et FG = 7 cm.
cos(EFG) = 4 / 7 ≈ 0,5714
Angle EFG = arccos(4/7) ≈ 55,15° (soit 55° au degré près).`,
  sections: [
    {
      title: '1. Repérage et formule trigonométrique',
      image: {
        url: SVG_COSINUS_ANGLE,
        alt: 'Figure 3 : Le cosinus d\'un angle aigu dans le triangle rectangle',
        caption: 'Figure 3 : Repérage de l\'angle aigu, du côté adjacent et de l\'hypoténuse (cos(B) = AB / BC).'
      },
      subsections: [
        {
          subtitle: 'Le moyen mnémotechnique et les définitions',
          content: [
            "• Règle CAH : Cosinus = Adjacent / Hypoténuse.",
            "• Le côté adjacent est le côté qui « touche » l'angle tout en formant l'angle droit.",
            "• L'hypoténuse est le côté le plus long situé en face du sommet de 90°.",
            "• Le cosinus d'un angle aigu est TOUJOURS strictement compris entre 0 et 1."
          ]
        },
        {
          subtitle: 'Réglage impératif de la calculatrice',
          content: [
            "• La calculatrice DOIT être configurée en mode DEGRÉS (lettre D ou DEG à l'écran).",
            "• Si la calculatrice est en radians (R) ou grades (G), tous les résultats d'angles seront faux !",
            "• Touches d'inversion : pour retrouver un angle à partir de son cosinus, appuyer sur 2nde + cos ou Shift + cos."
          ]
        }
      ]
    },
    {
      title: '2. Exercices complets résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calcul d\'un côté adjacent et d\'une hypoténuse',
          content: [
            "1. Soit un triangle ABC rectangle en A tel que BC = 10 cm et l'angle ABC^ = 30°. Calculer la longueur exacte puis arrondie au millimètre du côté [AB].",
            "2. Soit un triangle MNP rectangle en M tel que MN = 5 cm et l'angle MNP^ = 48°. Calculer la longueur de l'hypoténuse [NP] arrondie au dixième de centimètre."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Calcul de AB dans ABC rectangle en A :",
            "   • Le triangle ABC est rectangle en A. Le côté adjacent à l'angle B^ est [AB], et l'hypoténuse est [BC].",
            "   • On écrit la relation : cos(ABC^) = AB / BC.",
            "   • Remplacement : cos(30°) = AB / 10.",
            "   • En appliquant le produit en croix : AB = 10 × cos(30°).",
            "   • Valeur exacte : cos(30°) = √3 / 2, donc AB = 10 × (√3 / 2) = 5√3 cm.",
            "   • Valeur approchée : AB ≈ 5 × 1,732 ≈ 8,66 cm, soit 8,7 cm au millimètre près.",
            "2. Calcul de NP dans MNP rectangle en M :",
            "   • Le triangle MNP est rectangle en M. Le côté adjacent à l'angle N^ est [MN], et l'hypoténuse est [NP].",
            "   • On écrit la relation : cos(MNP^) = MN / NP.",
            "   • Remplacement : cos(48°) = 5 / NP.",
            "   • On isole NP : NP = 5 / cos(48°).",
            "   • Calcul : cos(48°) ≈ 0,6691, donc NP ≈ 5 / 0,6691 ≈ 7,47 cm.",
            "   • Conclusion : L'hypoténuse NP mesure environ 7,5 cm au dixième près."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Calcul de mesures d\'angles et pente d\'une rampe d\'accès',
          content: [
            "1. Soit un triangle RST rectangle en R tel que RS = 6 cm et ST = 9 cm. Déterminer la mesure de l'angle RST^ arrondie au degré près.",
            "2. Une rampe d'accès pour personnes à mobilité réduite a une longueur de roulement de 4,20 m (hypoténuse). La distance horizontale au sol couverte par la rampe est de 4,12 m. Calculer l'angle d'inclinaison de la rampe avec le sol arrondi au dixième de degré. La rampe respecte-t-elle la norme de sécurité imposant un angle inférieur à 5° ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Calcul de l'angle RST^ :",
            "   • Le triangle RST est rectangle en R.",
            "   • Le côté adjacent à l'angle S^ est [RS] = 6 cm, et l'hypoténuse est [ST] = 9 cm.",
            "   • Formule : cos(RST^) = RS / ST = 6 / 9 = 2 / 3 ≈ 0,6667.",
            "   • À la calculatrice : angle RST^ = arccos(2/3) ≈ 48,189°.",
            "   • Arrondi au degré près : RST^ ≈ 48°.",
            "2. Calcul de l'angle de la rampe d'accès :",
            "   • Modélisons la rampe par un triangle rectangle en reliant le sol horizontal, la hauteur verticale et la rampe inclinée.",
            "   • Côté adjacent au sol = 4,12 m ; Hypoténuse = 4,20 m.",
            "   • cos(Angle) = 4,12 / 4,20 ≈ 0,98095.",
            "   • Calcul de l'angle : Angle = arccos(4,12 / 4,20) ≈ 11,2°.",
            "   • Analyse de la norme : L'angle obtenu est de 11,2°, ce qui est supérieur à la limite de 5° (11,2° > 5°).",
            "   • Conclusion : La rampe est trop raide et ne respecte pas la norme d'accessibilité en vigueur."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : COSINUS D\'UN ANGLE AIGU',
    root: 'COSINUS (TRIGONOMÉTRIE)',
    branches: [
      {
        name: 'DÉFINITION & FORMULE',
        subtitle: 'CAH',
        items: [
          'cos(Angle) = Côté adjacent / Hypoténuse',
          'Nombre sans unité, toujours 0 < cos < 1',
          'Valable EXCLUSIVEMENT en triangle rectangle'
        ]
      },
      {
        name: 'CALCUL D\'UN CÔTÉ',
        subtitle: 'Produit en croix',
        items: [
          'Chercher l\'adjacent : Adjacent = Hypoténuse × cos(Angle)',
          'Chercher l\'hypoténuse : Hypoténuse = Adjacent / cos(Angle)',
          'Calculatrice impérativement en mode DEGRÉS (DEG)'
        ]
      },
      {
        name: 'CALCUL D\'UN ANGLE',
        subtitle: 'Fonction réciproque',
        items: [
          'Calculer le quotient numérique : Côté adjacent / Hypoténuse',
          'Utiliser la touche arccos ou cos⁻¹',
          'Arrondir au degré ou dixième demandé'
        ]
      }
    ]
  },
  conclusion:
    "Le cosinus d'un angle aigu constitue la porte d'entrée de la trigonométrie. En maîtrisant la distinction entre côté adjacent et hypoténuse, et en manipulant aisément la relation cos = Adjacent / Hypoténuse, on résout efficacement toute situation mêlant longueurs et inclinaisons d'angles."
};

// -------------------------------------------------------------------------
// LEÇON 4 : LE THÉORÈME DE THALÈS (CONFIGURATION DE BASE)
// -------------------------------------------------------------------------
export const LESSON_4_GEOM_4EME: LessonContent = {
  id: 'math-4eme-geom-lecon-4',
  number: 'Leçon 4 (Géométrie)',
  title: 'Le théorème de Thalès (Configuration de base)',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Attribué au célèbre philosophe et savant grec Thalès de Milet (VIe siècle av. J.-C.), ce théorème est la pierre angulaire de la proportionnalité géométrique. Il permet d'étudier l'agrandissement et la réduction de figures, et surtout de calculer des longueurs inaccessibles (comme la hauteur d'une pyramide ou la largeur d'un fleuve) grâce à la présence de deux droites parallèles coupant deux sécantes.",
  fullText: `Leçon 4 : Le théorème de Thalès (Configuration de base)

Introduction :
Attribué au célèbre philosophe et savant grec Thalès de Milet (VIe siècle av. J.-C.), ce théorème est la pierre angulaire de la proportionnalité géométrique. Il permet d'étudier l'agrandissement et la réduction de figures, et surtout de calculer des longueurs inaccessibles (comme la hauteur d'une pyramide ou la largeur d'un fleuve) grâce à la présence de deux droites parallèles coupant deux sécantes.

1. Configuration géométrique de base (forme « triangle dans un triangle »)
Soit un triangle ABC :
- Soit M un point appartenant au segment [AB] (ou à la demi-droite [AB)).
- Soit N un point appartenant au segment [AC] (ou à la demi-droite [AC)).
- Les droites (MN) et (BC) sont strictement parallèles : (MN) // (BC).

Représentation de la configuration :
            A  (sommet commun)
           / \\
          /   \\
       M /_____\\ N   (droite MN)
        /       \\
       /_________\\
      B           C   (droite BC // MN)

Le petit triangle AMN est une réduction du grand triangle ABC.
Le grand triangle ABC est un agrandissement du petit triangle AMN.

2. Énoncé du théorème direct de Thalès
PROPRIÉTÉ :
Soient deux droites (AB) et (AC) sécantes en A.
Si M est un point de la droite (AB), N un point de la droite (AC), et si les droites (MN) et (BC) sont parallèles, alors les longueurs des côtés du triangle AMN sont proportionnelles aux longueurs des côtés du triangle ABC :

AM / AB = AN / AC = MN / BC

3. Règle d'or pour écrire les rapports sans se tromper
1. Repérer le sommet commun d'où partent les deux sécantes (ici le point A).
2. Écrire les quotients en plaçant au numérateur les côtés du petit triangle, et au dénominateur les côtés correspondants du grand triangle :
   • Longueurs du petit triangle AMN : AM, AN, MN.
   • Longueurs du grand triangle ABC : AB, AC, BC.
3. Vérifier les alignements : les points A, M, B sont alignés dans cet ordre, et les points A, N, C sont alignés dans cet ordre.

4. Méthode de calcul par produit en croix
Pour calculer une longueur inconnue :
1. On pose l'égalité des trois rapports de Thalès.
2. On remplace par les valeurs numériques connues.
3. On sélectionne les deux rapports qui contiennent la longueur inconnue et trois nombres connus.
4. On effectue le produit en croix : Si a / b = c / d, alors a × d = b × c, d'où a = (b × c) / d.`,
  sections: [
    {
      title: '1. Conditions d\'application et formulation',
      image: {
        url: SVG_THALES_CONFIGURATION,
        alt: 'Figure 4 : Théorème de Thalès en configuration triangulaire',
        caption: 'Figure 4 : Droite (MN) parallèle à (BC) coupant les côtés du triangle ABC : égalité des 3 rapports AM/AB = AN/AC = MN/BC.'
      },
      subsections: [
        {
          subtitle: 'Les deux conditions obligatoires',
          content: [
            "Condition 1 (Alignement) : Deux droites sécantes en un sommet commun A, avec M sur (AB) et N sur (AC).",
            "Condition 2 (Parallélisme indispensable) : Les droites (MN) et (BC) doivent être strictement parallèles : (MN) // (BC).",
            "Sans ces deux conditions réunies, le théorème de Thalès ne peut pas être appliqué !"
          ]
        },
        {
          subtitle: 'L\'égalité des trois rapports proportionnels',
          content: [
            "• Rapport 1 (première sécante) : AM / AB.",
            "• Rapport 2 (deuxième sécante) : AN / AC.",
            "• Rapport 3 (côtés parallèles) : MN / BC.",
            "• Égalité complète : AM / AB = AN / AC = MN / BC."
          ]
        }
      ]
    },
    {
      title: '2. Exercices complets résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calcul de deux longueurs manquantes',
          content: [
            "Sur la figure suivante, les droites (BC) et (DE) sont parallèles. Les points A, B, D d'une part, et A, C, E d'autre part sont alignés dans cet ordre.",
            "On donne : AB = 3 cm, AD = 7,5 cm, AC = 4 cm et DE = 10 cm.",
            "1. Calculer la longueur exacte du segment [AE].",
            "2. En déduire la longueur du segment [CE].",
            "3. Calculer la longueur exacte du segment [BC]."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Calcul de AE :",
            "   • Les droites (BD) et (CE) sont sécantes en A.",
            "   • Les points A, B, D sont alignés, et les points A, C, E sont alignés dans cet ordre.",
            "   • Les droites (BC) et (DE) sont parallèles : (BC) // (DE).",
            "   • D'après le théorème de Thalès, on a : AB / AD = AC / AE = BC / DE.",
            "   • Application numérique : 3 / 7,5 = 4 / AE = BC / 10.",
            "   • Utilisons le premier membre : 3 / 7,5 = 4 / AE.",
            "   • Produit en croix : 3 × AE = 7,5 × 4 = 30  =>  AE = 30 / 3 = 10 cm.",
            "   • Conclusion : Le segment [AE] mesure exactement 10 cm.",
            "2. Déduction de la longueur CE :",
            "   • Les points A, C et E sont alignés dans cet ordre, donc AE = AC + CE.",
            "   • D'où CE = AE - AC = 10 - 4 = 6 cm.",
            "3. Calcul de BC :",
            "   • Reprenons l'égalité de Thalès : 3 / 7,5 = BC / 10.",
            "   • Produit en croix : 7,5 × BC = 3 × 10 = 30  =>  BC = 30 / 7,5 = 4 cm.",
            "   • Conclusion : Le segment [BC] mesure exactement 4 cm."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Calcul historique de la hauteur d\'un obélisque par son ombre',
          content: [
            "Pour mesurer la hauteur d'un obélisque inaccessible [SO], un géomètre plante verticalement dans le sol un bâton [AB] de 2 mètres de haut. Les rayons du soleil étant considérés comme parfaitement parallèles, les droites formées par les ombres sont parallèles.",
            "Le sommet du bâton, le sommet de l'obélisque et l'extrémité de l'ombre au sol T sont alignés. Le sol est parfaitement horizontal.",
            "On mesure au sol : la longueur de l'ombre du bâton TB = 3 m, et la distance entre le bâton et le pied de l'obélisque BO = 21 m.",
            "1. Calculer la distance totale TO entre l'extrémité de l'ombre T et le pied de l'obélisque O.",
            "2. Démontrer que les droites (AB) et (SO) sont parallèles.",
            "3. À l'aide du théorème de Thalès, calculer la hauteur exacte de l'obélisque SO."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Calcul de la distance totale TO :",
            "   • Les points T, B et O sont alignés sur le sol horizontal dans cet ordre.",
            "   • Donc TO = TB + BO = 3 m + 21 m = 24 m.",
            "2. Justification du parallélisme des droites (AB) et (SO) :",
            "   • Le bâton [AB] et l'obélisque [SO] sont tous les deux verticaux, donc perpendiculaires au sol horizontal (TO) : (AB) ⊥ (TO) et (SO) ⊥ (TO).",
            "   • Propriété fondamentale : Si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles.",
            "   • Par conséquent : (AB) // (SO).",
            "3. Calcul de la hauteur de l'obélisque SO :",
            "   • Les droites (TS) et (TO) sont sécantes en T.",
            "   • Les points T, A, S d'une part, et T, B, O d'autre part sont alignés dans cet ordre.",
            "   • Les droites (AB) et (SO) sont parallèles : (AB) // (SO).",
            "   • D'après le théorème de Thalès, on a l'égalité des rapports : TB / TO = TA / TS = AB / SO.",
            "   • Remplacement par les valeurs connues : 3 / 24 = 2 / SO.",
            "   • Produit en croix : 3 × SO = 24 × 2 = 48.",
            "   • Calcul : SO = 48 / 3 = 16 m.",
            "   • Conclusion : La hauteur de l'obélisque est exactement de 16 mètres."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : THÉORÈME DE THALÈS (CONFIGURATION DIRECTE)',
    root: 'THÉORÈME DE THALÈS',
    branches: [
      {
        name: 'CONDITIONS REQUISES',
        subtitle: 'Alignement et Parallélisme',
        items: [
          'Deux sécantes se coupant en un sommet commun A',
          'Deux droites rigoureusement parallèles : (MN) // (BC)',
          'Points alignés dans le même ordre sur chaque sécante'
        ]
      },
      {
        name: 'ÉGALITÉ DES RAPPORTS',
        subtitle: 'Petit sur grand triangle',
        items: [
          'AM / AB = AN / AC = MN / BC',
          'Toujours commencer par le sommet commun A',
          'Rapports constants = coefficient d\'agrandissement ou de réduction'
        ]
      },
      {
        name: 'RÉSOLUTION',
        subtitle: 'Produit en croix',
        items: [
          'Sélectionner les deux fractions utiles',
          'Isoler l\'inconnue : x = (b × c) / d',
          'Indiquer les unités de mesure'
        ]
      }
    ]
  },
  conclusion:
    "Le théorème de Thalès est l'instrument géométrique par excellence de la proportionnalité. En identifiant méthodiquement le sommet commun et en rédigeant l'égalité des trois rapports (petit triangle sur grand triangle), le calcul de longueurs manquantes devient direct et élégant."
};
