import { LessonContent } from './courses';
import { SVG_MATH5_FIG_DISTRIBUTIVITE } from './diagrams_5eme_math';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 5ÈME
// PARTIE 2 : ACTIVITÉS NUMÉRIQUES (LEÇONS 5 À 7)
// PROGRAMME OFFICIEL SÉNÉGALAIS & FRANCOPHONE
// TEXTE APPROFONDI, DÉMONSTRATIONS, FIGURES VECTORIELLES OBLIGATOIRES
// ET 4 EXERCICES D'APPLICATION COMPLETS AVEC CORRIGÉS DÉTAILLÉS PAR LEÇON
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 5 : INITIATION AUX PUISSANCES
// -------------------------------------------------------------------------
export const LESSON_5_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-5',
  number: 'Leçon 5',
  title: 'Initiation aux puissances',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "La notation des puissances permet d'abréger de manière compacte et élégante la multiplication répétée d'un même nombre par lui-même, tout comme la multiplication abrège l'addition répétée. Des dimensions infiniment grandes de l'astronomie (distances interplanétaires en mètres) aux échelles microscopiques de la biologie et de la physique atomique, les puissances — et particulièrement les puissances de 10 — constituent un langage universel incontournable.",
  fullText: `Leçon 5 : Initiation aux puissances

Introduction :
La notation des puissances permet d'abréger la multiplication répétée d'un même nombre par lui-même. Des dimensions astronomiques aux échelles microscopiques, les puissances constituent un outil de calcul indispensable.

1. Définition d'une puissance d'exposant entier positif
Pour tout nombre décimal a et tout nombre entier naturel n supérieur ou égal à 1, l'expression a^n (qui se lit 'a puissance n' ou 'a exposant n') désigne le produit de n facteurs tous égaux à a :
a^n = a × a × a × ... × a (avec n facteurs égaux à a).
Vocabulaire :
- a est la base de la puissance.
- n est l'exposant.
Cas particuliers majeurs :
- Pour n = 2 : a² se lit 'a au carré' (correspond géométriquement à l'aire d'un carré de côté a).
- Pour n = 3 : a³ se lit 'a au cube' (correspond géométriquement au volume d'un cube d'arête a).
- Pour n = 1 : a¹ = a pour tout nombre a.
- Convention universelle pour n = 0 : Pour tout nombre a différent de 0, on pose a⁰ = 1.
  Exemples : 7⁰ = 1 ; 125⁰ = 1 ; (-4)⁰ = 1.

2. Puissances de 10 et notation décimale
Pour les puissances de 10 d'exposant entier positif n :
10^n = 10 × 10 × ... × 10 (n facteurs) = 1 suivi de n zéros.
Exemples :
• 10¹ = 10 (1 zéro)
• 10² = 100 (cent : 2 zéros)
• 10³ = 1 000 (mille : 3 zéros)
• 10⁶ = 1 000 000 (un million : 6 zéros)
• 10⁹ = 1 000 000 000 (un milliard : 9 zéros)

3. Règles fondamentales de calcul sur les puissances
Soient m et n deux entiers naturels non nuls, et a un nombre décimal :
• Règle 1 (Produit de puissances de même base) :
  a^m × a^n = a^(m + n).
  Démonstration : (m facteurs) × (n facteurs) = (m + n facteurs).
  Exemple : 2³ × 2⁴ = 2^(3+4) = 2⁷ = 128.
• Règle 2 (Puissance d'une puissance) :
  (a^m)^n = a^(m × n).
  Exemple : (5²)³ = 5^(2×3) = 5⁶ = 15 625.
• Règle 3 (Produit de bases différentes au même exposant) :
  a^n × b^n = (a × b)^n.
  Exemple : 2⁴ × 5⁴ = (2 × 5)⁴ = 10⁴ = 10 000.`,
  sections: [
    {
      title: '1. Définition, conventions et propriétés des exposants',
      subsections: [
        {
          subtitle: 'A. Règles de calcul fondamentales',
          content: [
            '• Définition : a^n = a × a × ... × a (n facteurs égaux à a).',
            '• Exposant 1 : a¹ = a.',
            '• Exposant 0 : a⁰ = 1 (pour tout a ≠ 0).',
            '• Puissances de 10 : 10^n = 1 suivi de n zéros.',
            '• Produit de puissances : a^m × a^n = a^(m+n).'
          ]
        },
        {
          subtitle: 'B. Priorité opératoire des puissances',
          content: [
            'Dans un calcul, la puissance s\'applique immédiatement à son facteur avant les multiplications ou additions.',
            'Exemple : 3 × 2⁴ = 3 × 16 = 48 (et non 6⁴ = 1 296 !). Pour forcer la multiplication avant, on écrit (3 × 2)⁴.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calcul de valeurs numériques de puissances',
          content: [
            'Énoncé : Calculer sous forme d\'un nombre entier ou décimal :',
            'A = 3⁴ ; B = 5³ ; C = 2⁶ ; D = 11² ; E = 9⁰.',
            'Corrigé détaillé :',
            '• A = 3⁴ = 3 × 3 × 3 × 3 = 9 × 9 = 81.',
            '• B = 5³ = 5 × 5 × 5 = 25 × 5 = 125.',
            '• C = 2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 8 × 8 = 64.',
            '• D = 11² = 11 × 11 = 121.',
            '• E = 9⁰ = 1 (par convention pour tout nombre non nul).'
          ]
        },
        {
          subtitle: 'Exercice 2 : Écriture sous forme d\'une seule puissance',
          content: [
            'Énoncé : Écrire sous la forme a^p :',
            'F = 4³ × 4⁵ ; G = (7²)⁴ ; H = 2³ × 5³ ; I = 10⁴ × 10³ × 10⁵.',
            'Corrigé détaillé :',
            '• F = 4³ × 4⁵ = 4^(3 + 5) = 4⁸.',
            '• G = (7²)⁴ = 7^(2 × 4) = 7⁸.',
            '• H = 2³ × 5³ = (2 × 5)³ = 10³ = 1 000.',
            '• I = 10^(4 + 3 + 5) = 10¹² (mille milliards).'
          ]
        },
        {
          subtitle: 'Exercice 3 : Respect des priorités avec puissances',
          content: [
            'Énoncé : Calculer en respectant scrupuleusement les priorités opératoires :',
            'J = 5 + 2 × 3² ; K = (5 + 2) × 3² ; L = 4 × 10³ + 7 × 10² + 5 × 10¹ + 8.',
            'Corrigé détaillé :',
            '• Pour J : La puissance est prioritaire : 3² = 9. Puis la multiplication : 2 × 9 = 18. Enfin 5 + 18 = 23.',
            '• Pour K : La parenthèse est prioritaire : 5 + 2 = 7. La puissance : 3² = 9. Donc K = 7 × 9 = 63.',
            '• Pour L : On effectue les puissances : 10³ = 1 000, 10² = 100, 10¹ = 10.',
            '  L = 4 000 + 700 + 50 + 8 = 4 758 (décomposition décimale).'
          ]
        },
        {
          subtitle: 'Exercice 4 : Problème concret de croissance exponentielle',
          content: [
            'Énoncé : Une colonie bactérienne double en nombre toutes les heures. À 8h00 du matin, la colonie contient initialement 1 000 bactéries (soit 10³ bactéries).',
            '1. Exprimer le nombre de bactéries à 9h, 10h, puis à 14h en utilisant des puissances de 2.',
            '2. Calculer le nombre total de bactéries à 14h00.',
            'Corrigé détaillé :',
            '1. À 8h00 : 1 000 bactéries.',
            '   À 9h00 (après 1h) : 1 000 × 2¹.',
            '   À 10h00 (après 2h) : 1 000 × 2².',
            '   À 14h00 (après 6h écoulées) : N = 1 000 × 2⁶.',
            '2. Calcul : 2⁶ = 64. Donc N = 1 000 × 64 = 64 000 bactéries.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse sur les puissances',
    root: 'Puissances (a^n)',
    branches: [
      {
        name: 'Définitions clés',
        subtitle: 'Multiplication répétée',
        items: ['a^n = a × ... × a (n fois)', 'a¹ = a et a⁰ = 1', 'Carré (a²) et Cube (a³)']
      },
      {
        name: 'Puissances de 10',
        subtitle: 'Base du système métrique',
        items: ['10^n = 1 avec n zéros', '10³ = 1 000', '10⁶ = 1 000 000']
      },
      {
        name: 'Formules de calcul',
        subtitle: 'Simplifications',
        items: ['a^m × a^n = a^(m+n)', '(a^m)^n = a^(m×n)', 'a^n × b^n = (ab)^n']
      }
    ]
  },
  conclusion:
    "Les puissances permettent de manipuler des grandeurs colossales avec concision et précision. Elles sont la clé de voûte des grandeurs physiques et de la notation scientifique."
};

// -------------------------------------------------------------------------
// LEÇON 6 : CALCUL LITTÉRAL ET ÉQUATIONS
// -------------------------------------------------------------------------
export const LESSON_6_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-6',
  number: 'Leçon 6',
  title: 'Calcul littéral et équations',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "Le calcul littéral marque l'entrée décisive dans l'algèbre. En remplaçant des nombres inconnus ou variables par des lettres (comme x, y ou a), les mathématiques passent du calcul numérique particulier à l'énoncé de formules générales, à la modélisation de problèmes et à la résolution méthodique d'équations.",
  fullText: `Leçon 6 : Calcul littéral et équations

Introduction :
Le calcul littéral consiste à effectuer des opérations sur des expressions contenant une ou plusieurs lettres représentant des nombres. Il permet d'énoncer des règles universelles et de résoudre des problèmes où l'on cherche une valeur inconnue.

1. Expression littérale et conventions d'écriture
Une expression littérale est une formule mathématique contenant une ou plusieurs lettres désignant des nombres.
• Conventions de simplification d'écriture :
Pour alléger l'écriture, le signe de multiplication '×' peut être supprimé :
- Devant une lettre : 3 × x s'écrit 3x ; 1 × x s'écrit x.
- Devant une parenthèse : 5 × (x + 2) s'écrit 5(x + 2).
- Entre deux lettres : a × b s'écrit ab.
- Le produit x × x s'écrit x² (x au carré).
• Calculer la valeur d'une expression littérale :
Pour évaluer une expression pour une valeur donnée d'une variable, on remplace chaque lettre par le nombre choisi et on réintroduit les signes de multiplication sous-entendus.
Exemple : Soit E = 3x² - 5x + 4. Pour x = 2 :
E = 3 × 2² - 5 × 2 + 4 = 3 × 4 - 10 + 4 = 12 - 10 + 4 = 6.

2. La propriété de simple distributivité
Pour tous nombres k, a et b :
• Formule de développement :
  k × (a + b) = k × a + k × b   (soit k(a + b) = ka + kb)
  k × (a - b) = k × a - k × b   (soit k(a - b) = ka - kb)
Développer un produit, c'est le transformer en une somme ou une différence de termes.
Exemples :
• 4(x + 5) = 4 × x + 4 × 5 = 4x + 20.
• 7(2x - 3) = 7 × 2x - 7 × 3 = 14x - 21.

• Formule de factorisation :
  ka + kb = k(a + b)   et   ka - kb = k(a - b)
Factoriser une somme, c'est la transformer en un produit en identifiant un facteur commun k.
Exemples :
• 5x + 35 = 5 × x + 5 × 7 = 5(x + 7).
• 12a - 18 = 6 × 2a - 6 × 3 = 6(2a - 3).

• Réduction d'une expression littérale :
Réduire une expression consiste à regrouper et additionner les termes de même famille (les termes en x², les termes en x, et les nombres constants).
Exemple : 4x + 7 + 5x - 3 = (4x + 5x) + (7 - 3) = 9x + 4.

3. Notion d'équation et résolution
• Définition : Une équation est une égalité mathématique comportant une lettre inconnue (souvent notée x).
• Résoudre une équation, c'est déterminer TOUTES les valeurs de x (appelées solutions) qui rendent l'égalité vraie.
• Règles fondamentales de conservation de l'égalité :
- On ne change pas une égalité en ajoutant ou en soustrayant un même nombre à ses deux membres.
  Si x + a = b, alors x = b - a.
- On ne change pas une égalité en multipliant ou en divisant ses deux membres par un même nombre non nul.
  Si a × x = b (avec a ≠ 0), alors x = b / a.`,
  sections: [
    {
      title: '1. Distributivité et résolution d\'équations',
      image: {
        url: SVG_MATH5_FIG_DISTRIBUTIVITE,
        alt: 'Figure : Démonstration géométrique de la simple distributivité',
        caption:
          'Démonstration géométrique : L\'aire totale du grand rectangle de côtés k et (a + b) est égale à la somme des aires des deux rectangles constitutifs : k(a + b) = ka + kb.'
      },
      subsections: [
        {
          subtitle: 'A. Développement et factorisation',
          content: [
            'Développer : Passer d\'un produit à une somme (distribution du facteur extérieur k).',
            'Factoriser : Passer d\'une somme à un produit (recherche du plus grand facteur commun).',
            'Réduire : Regrouper les termes de même nature (ex : 7x - 2x = 5x).'
          ]
        },
        {
          subtitle: 'B. Résolution d\'équations élémentaires',
          content: [
            'Équation du type x + a = b : Solution x = b - a.',
            'Équation du type ax = b (a ≠ 0) : Solution x = b / a.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Évaluation d\'expressions littérales',
          content: [
            'Énoncé : Soit l\'expression A = 4x² - 3x + 7.',
            '1. Calculer la valeur de A pour x = 3.',
            '2. Calculer la valeur de A pour x = 0.',
            '3. Calculer la valeur de A pour x = 5.',
            'Corrigé détaillé :',
            '1. Pour x = 3 : A = 4 × (3²) - 3 × 3 + 7 = 4 × 9 - 9 + 7 = 36 - 9 + 7 = 34.',
            '2. Pour x = 0 : A = 4 × (0²) - 3 × 0 + 7 = 0 - 0 + 7 = 7.',
            '3. Pour x = 5 : A = 4 × (5²) - 3 × 5 + 7 = 4 × 25 - 15 + 7 = 100 - 15 + 7 = 92.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Développements et réductions d\'expressions',
          content: [
            'Énoncé : Développer et réduire les expressions suivantes :',
            'B = 6(3x + 4) ; C = 5(4x - 7) ; D = 3(2x + 5) + 4(x - 2).',
            'Corrigé détaillé :',
            '• Pour B : B = 6 × 3x + 6 × 4 = 18x + 24.',
            '• Pour C : C = 5 × 4x - 5 × 7 = 20x - 35.',
            '• Pour D : D = (3 × 2x + 3 × 5) + (4 × x - 4 × 2)',
            '  D = 6x + 15 + 4x - 8.',
            '  On regroupe les termes en x et les nombres : D = (6x + 4x) + (15 - 8) = 10x + 7.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Factorisation d\'expressions algébriques',
          content: [
            'Énoncé : Factoriser au maximum en trouvant un facteur commun :',
            'E = 7x + 28 ; F = 15y - 25 ; G = 9a² + 6a.',
            'Corrigé détaillé :',
            '• Pour E = 7x + 28 : Facteur commun = 7 (car 28 = 7 × 4). E = 7(x + 4).',
            '• Pour F = 15y - 25 : Facteur commun = 5 (car 15 = 5 × 3 et 25 = 5 × 5). F = 5(3y - 5).',
            '• Pour G = 9a² + 6a : Facteur commun = 3a (car 9a² = 3a × 3a et 6a = 3a × 2). G = 3a(3a + 2).'
          ]
        },
        {
          subtitle: 'Exercice 4 : Résolution méthodique d\'équations et problème',
          content: [
            'Énoncé :',
            '1. Résoudre les équations suivantes : a) x + 14 = 39 ; b) 5x = 45 ; c) 3x - 7 = 14.',
            '2. Problème : Moussa pense à un nombre, il le multiplie par 4, puis ajoute 9 au résultat. Il obtient 45. Quel est ce nombre ?',
            'Corrigé détaillé :',
            '1. Résolutions :',
            '   a) x + 14 = 39 ➔ x = 39 - 14 = 25. La solution est 25.',
            '   b) 5x = 45 ➔ x = 45 / 5 = 9. La solution est 9.',
            '   c) 3x - 7 = 14 ➔ On ajoute 7 : 3x = 14 + 7 = 21 ➔ x = 21 / 3 = 7. La solution est 7.',
            '2. Mise en équation du problème de Moussa :',
            '   Soit x le nombre cherché. L\'énoncé se traduit par : 4x + 9 = 45.',
            '   4x = 45 - 9 = 36 ➔ x = 36 / 4 = 9. Le nombre pensé par Moussa est 9.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse du calcul littéral',
    root: 'Calcul littéral & Équations',
    branches: [
      {
        name: 'Distributivité',
        subtitle: 'Développer & Factoriser',
        items: ['k(a+b) = ka + kb (Développement)', 'ka + kb = k(a+b) (Factorisation)', 'Réduction des termes semblables']
      },
      {
        name: 'Équations',
        subtitle: 'Trouver l\'inconnue x',
        items: ['x + a = b ➔ x = b - a', 'ax = b ➔ x = b / a', 'Vérification en remplaçant x']
      },
      {
        name: 'Modélisation',
        subtitle: 'Résolution de problèmes',
        items: ['Choix de l\'inconnue x', 'Mise en équation du texte', 'Résolution et phrase de conclusion']
      }
    ]
  },
  conclusion:
    "La distributivité et les règles de résolution d'équations transforment l'arithmétique en algèbre puissante. Elles permettent d'automatiser le traitement des problèmes scientifiques complexes."
};

// -------------------------------------------------------------------------
// LEÇON 7 : PROPORTIONNALITÉ ET GESTION DE DONNÉES
// -------------------------------------------------------------------------
export const LESSON_7_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-7',
  number: 'Leçon 7',
  title: 'Proportionnalité et gestion de données',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "La proportionnalité est l'un des outils mathématiques les plus utilisés dans la vie courante : calculs de prix au kilo, recettes de cuisine, vitesses moyennes, échelles cartographiques et pourcentages. Associée au traitement statistique élémentaire (effectifs, fréquences, diagrammes), elle permet de collecter, traiter et interpréter des données chiffrées avec rigueur.",
  fullText: `Leçon 7 : Proportionnalité et gestion de données

Introduction :
La proportionnalité relie deux grandeurs qui varient dans les mêmes proportions. En 5ème, l'élève apprend à utiliser le coefficient de proportionnalité, la quatrième proportionnelle (produit en croix), les calculs de pourcentages et d'échelles, ainsi que les représentations statistiques fondamentales.

1. Tableau de proportionnalité et coefficient
Deux grandeurs sont proportionnelles si les valeurs de la seconde s'obtiennent en multipliant toutes les valeurs de la première par un même nombre non nul k, appelé coefficient de proportionnalité.
Propriété :
Dans un tableau de proportionnalité, tous les rapports (valeur ligne 2) / (valeur ligne 1) sont égaux à k.
• Représentation graphique :
Dans un repère, une situation de proportionnalité se traduit TOUJOURS par des points alignés avec l'origine du repère (0, 0).

2. Quatrième proportionnelle et produit en croix
Dans un tableau de proportionnalité à quatre cases :
| a | c |
| b | d |
On a l'égalité des rapports : a / b = c / d, ce qui équivaut à :
a × d = b × c  (égalité des produits en croix).
Pour déterminer la quatrième proportionnelle inconnue x :
Si on a :
| a | c |
| b | x |
Alors : x = (b × c) / a.

3. Applications indispensables de la proportionnalité
• Pourcentages :
- Appliquer un pourcentage t % à une quantité Q revient à calculer : Q × (t / 100).
  Exemple : Une réduction de 20 % sur un article de 15 000 FCFA : Réduction = 15 000 × (20 / 100) = 3 000 FCFA. Prix soldé = 12 000 FCFA.
- Calculer un pourcentage : (Valeur partielle / Valeur totale) × 100.
• Échelles :
L'échelle E d'un plan ou d'une carte est le quotient de la distance sur la carte par la distance réelle correspondante (exprimées impérativement dans la MÊME unité) :
Échelle E = Distance sur le plan / Distance réelle.
Exemple : À l'échelle 1 / 50 000, 1 cm sur la carte représente 50 000 cm dans la réalité (soit 500 m).

4. Organisation et gestion de données statistiques
• Effectif : Nombre de fois où une valeur apparaît dans une série de données.
• Effectif total : Somme de tous les effectifs de la série.
• Fréquence : Rapport de l'effectif d'une valeur à l'effectif total :
  Fréquence = Effectif / Effectif total.
  La fréquence peut être exprimée sous forme de fraction, de nombre décimal (compris entre 0 et 1) ou de pourcentage (fréquence × 100). La somme de toutes les fréquences est toujours égale à 1 (ou 100 %).
• Diagrammes :
- Diagramme en bâtons : La hauteur de chaque bâton est proportionnelle à l'effectif ou à la fréquence.
- Diagramme circulaire : Chaque secteur a un angle proportionnel à l'effectif (Angle en degrés = Fréquence × 360°).`,
  sections: [
    {
      title: '1. Méthodes de calcul : Produit en croix, pourcentages et statistiques',
      subsections: [
        {
          subtitle: 'A. Formules fondamentales',
          content: [
            '• Produit en croix : x = (b × c) / a.',
            '• Appliquer t % : Valeur × (t / 100).',
            '• Échelle : Distance carte / Distance réelle (même unité).',
            '• Fréquence = Effectif / Effectif total.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Reconnaissance et quatrième proportionnelle',
          content: [
            'Énoncé : 6 kg d\'oranges coûtent 4 500 FCFA au marché de Sandaga.',
            '1. Quel est le prix au kilogramme (coefficient de proportionnalité) ?',
            '2. Combien coûtent 14 kg d\'oranges ?',
            '3. Quelle quantité d\'oranges peut-on acheter avec 11 250 FCFA ?',
            'Corrigé détaillé :',
            '1. Coefficient k = Prix / Masse = 4 500 ÷ 6 = 750 FCFA par kg.',
            '2. Pour 14 kg : Prix = 14 × 750 = 10 500 FCFA.',
            '   (Par produit en croix : x = (14 × 4 500) / 6 = 63 000 / 6 = 10 500 FCFA).',
            '3. Masse pour 11 250 FCFA : Masse = 11 250 ÷ 750 = 15 kg d\'oranges.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Calculs de pourcentages et soldes',
          content: [
            'Énoncé :',
            '1. Dans une classe de 5ème de 40 élèves, 65 % sont des filles. Calculer le nombre de filles et le nombre de garçons.',
            '2. Un pantalon valant 18 000 FCFA bénéficie d\'une remise de 25 % lors d\'une promotion. Quel est son nouveau prix ?',
            'Corrigé détaillé :',
            '1. Nombre de filles = 40 × (65 / 100) = 40 × 0,65 = 26 filles.',
            '   Nombre de garçons = 40 - 26 = 14 garçons (ou 40 × 35% = 14).',
            '2. Montant de la réduction = 18 000 × (25 / 100) = 18 000 ÷ 4 = 4 500 FCFA.',
            '   Prix soldé = 18 000 - 4 500 = 13 500 FCFA.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Utilisation d\'une échelle cartographique',
          content: [
            'Énoncé : Sur une carte du Sénégal à l\'échelle 1 / 200 000 :',
            '1. La distance mesurée à la règle entre deux localités est de 7,5 cm. Quelle est la distance réelle en kilomètres ?',
            '2. La distance réelle entre deux villages est de 28 km. Quelle sera leur distance sur la carte en centimètres ?',
            'Corrigé détaillé :',
            '1. À l\'échelle 1 / 200 000, 1 cm carte = 200 000 cm réels = 2 000 m = 2 km.',
            '   Distance réelle = 7,5 × 200 000 = 1 500 000 cm = 15 000 m = 15 km.',
            '2. Distance réelle en cm : 28 km = 28 000 m = 2 800 000 cm.',
            '   Distance sur la carte = 2 800 000 ÷ 200 000 = 14 cm.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Tableau statistique, effectifs et fréquences',
          content: [
            'Énoncé : On a relevé les notes obtenues à un contrôle de maths sur 20 dans une classe :',
            'Notes : [8, 10, 12, 15, 18]',
            'Effectifs correspondants : [4, 8, 10, 6, 2]',
            '1. Calculer l\'effectif total de la classe.',
            '2. Calculer la fréquence en pourcentage de chaque note.',
            '3. Quel est le pourcentage d\'élèves ayant obtenu au moins 12 sur 20 ?',
            'Corrigé détaillé :',
            '1. Effectif total = 4 + 8 + 10 + 6 + 2 = 30 élèves.',
            '2. Fréquences en pourcentage (Effectif ÷ 30 × 100) :',
            '   • Note 8 : 4 / 30 ≈ 13,33 %',
            '   • Note 10 : 8 / 30 ≈ 26,67 %',
            '   • Note 12 : 10 / 30 ≈ 33,33 %',
            '   • Note 15 : 6 / 30 = 20 %',
            '   • Note 18 : 2 / 30 ≈ 6,67 %',
            '   (Total des pourcentages = 100 %)',
            '3. Élèves ayant au moins 12 : notes 12, 15 et 18, soit 10 + 6 + 2 = 18 élèves.',
            '   Pourcentage = (18 / 30) × 100 = 0,6 × 100 = 60 % des élèves.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse proportionnalité et données',
    root: 'Proportionnalité & Données',
    branches: [
      {
        name: 'Outils de calcul',
        subtitle: 'Mécanismes clés',
        items: ['Coefficient k = y / x', 'Produit en croix : x = bc / a', 'Points alignés avec l\'origine (0,0)']
      },
      {
        name: 'Applications directes',
        subtitle: 'Usage concret',
        items: ['Pourcentages (t% × Total)', 'Échelles (Distance plan / réel)', 'Vitesse moyenne (v = d / t)']
      },
      {
        name: 'Statistiques',
        subtitle: 'Traitement des séries',
        items: ['Effectif et effectif total', 'Fréquence = Effectif / Total', 'Diagrammes en bâtons et circulaires']
      }
    ]
  },
  conclusion:
    "La proportionnalité relie harmonieusement les grandeurs physiques et commerciales du quotidien, tandis que les statistiques fournissent les outils rigoureux pour synthétiser et communiquer l'information chiffrée."
};
