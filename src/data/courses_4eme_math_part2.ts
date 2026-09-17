import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 4ÈME
// ACTIVITÉS NUMÉRIQUES — PROGRAMME OFFICIEL SÉNÉGALAIS & FRANCOPHONE
// PARTIE 2 : LEÇONS 5 À 8 (PUISSANCES & CALCUL LITTÉRAL)
// DÉVELOPPEMENT INTÉGRAL, THÉORIE APPROFONDIE, RÈGLES FORMELLES, EXEMPLES
// ET 2 EXERCICES COMPLETS AVEC CORRIGÉS DÉTAILLÉS PAS-À-PAS PAR LEÇON
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 5 : LES PUISSANCES D'UN NOMBRE — EXPOSANTS POSITIFS ET NÉGATIFS
// -------------------------------------------------------------------------
export const LESSON_5_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-5',
  number: 'Leçon 5',
  title: "Les puissances d'un nombre — Exposants positifs et négatifs",
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "La notation en puissance a été inventée pour condenser l'écriture de produits répétés d'un même nombre, tout comme la multiplication avait condensé l'addition répétée. En 4ème, l'introduction des exposants entiers relatifs négatifs franchit une étape théorique majeure : une puissance à exposant négatif n'est pas un nombre négatif, mais l'inverse d'une puissance positive. La maîtrise des règles de calcul sur les puissances constitue un outil indispensable tant pour l'algèbre que pour les sciences physiques.",
  fullText: `Leçon 5 : Les puissances d'un nombre — Exposants positifs et négatifs

Introduction :
La notation en puissance a été inventée pour condenser l'écriture de produits répétés d'un même nombre, tout comme la multiplication avait condensé l'addition répétée. En 4ème, l'introduction des exposants entiers relatifs négatifs franchit une étape théorique majeure : une puissance à exposant négatif n'est pas un nombre négatif, mais l'inverse d'une puissance positive. La maîtrise des règles de calcul sur les puissances constitue un outil indispensable tant pour l'algèbre que pour les sciences physiques.

1. Définition des puissances à exposants positifs
Définition formelle :
Pour tout nombre relatif a et tout entier naturel n supérieur ou égal à 1, l'expression a^n (qui se lit « a puissance n » ou « a exposant n ») désigne le produit de n facteurs tous égaux au nombre a.
Formule :
a^n = a × a × a × ... × a (avec exactement n facteurs 'a')

Vocabulaire fondamental :
- Le nombre a est appelé la base.
- Le nombre n est appelé l'exposant.

Conventions mathématiques obligatoires :
Pour tout nombre relatif a non nul :
• a^1 = a (tout nombre élevé à l'exposant 1 est égal à lui-même).
• a^0 = 1 (par convention universelle, tout nombre non nul élevé à l'exposant 0 est égal à 1).
Exemples :
5^3 = 5 × 5 × 5 = 125 ; (-2)^4 = (-2) × (-2) × (-2) × (-2) = 16 ; 7^1 = 7 ; (-19)^0 = 1.

2. Puissances à exposants négatifs et notion d'inverse
Propriété fondamentale :
Pour tout nombre relatif a NON NUL et pour tout entier naturel n :
a^(-n) désigne l'INVERSE mathématique de a^n.
Formule :
a^(-n) = 1 / a^n = 1 / (a × a × ... × a)

En particulier, pour n = 1 :
a^(-1) = 1 / a (c'est l'inverse du nombre a).

Exemples détaillés :
• 2^(-3) = 1 / 2^3 = 1 / (2 × 2 × 2) = 1 / 8 = 0,125
• 5^(-2) = 1 / 5^2 = 1 / 25 = 0,04
• (-4)^(-2) = 1 / (-4)^2 = 1 / 16 = 0,0625
• (2/3)^(-1) = 1 / (2/3) = 3/2 et (2/3)^(-2) = (3/2)^2 = 9/4

PIÈGE MAJEUR À BANNIR :
Ne confondez jamais exposant négatif et nombre négatif !
2^(-3) N'EST PAS ÉGAL À -6 ou -8 ! 2^(-3) est un nombre strictement positif égal à +0,125 ! Le signe '-' dans l'exposant indique une INVERSION (passage au dénominateur) et JAMAIS un signe de négativité de la valeur finale.

3. Piège du signe et importance des parenthèses
Une attention extrême doit être portée à l'utilisation des parenthèses avec le signe négatif :
- (-3)^2 = (-3) × (-3) = +9 (le carré porte sur l'ensemble '(-3)', le résultat est positif).
- -3^2 = - (3 × 3) = -9 (le carré ne porte que sur le chiffre 3, le signe '-' reste devant !).
Règle : Pour que le signe '-' soit inclus dans la puissance, il DOIT impérativement se trouver à l'intérieur des parenthèses.

4. Formules et règles opératoires fondamentales
Soient a et b deux nombres relatifs non nuls, et soient m et n deux entiers relatifs :
1. Produit de puissances de même base :
   a^n × a^m = a^(n + m)
   Exemple : 3^4 × 3^5 = 3^(4 + 5) = 3^9.
2. Quotient de puissances de même base :
   (a^n) / (a^m) = a^(n - m)
   Exemple : (7^8) / (7^3) = 7^(8 - 3) = 7^5 ; (5^2) / (5^6) = 5^(2 - 6) = 5^(-4).
3. Puissance d'une puissance :
   (a^n)^m = a^(n × m)
   Exemple : (2^3)^4 = 2^(3 × 4) = 2^12.
4. Puissance d'un produit :
   (a × b)^n = a^n × b^n
   Exemple : (2 × 5)^3 = 2^3 × 5^3 = 8 × 125 = 1 000.
5. Puissance d'un quotient :
   (a / b)^n = (a^n) / (b^n)
   Exemple : (3/4)^2 = 3^2 / 4^2 = 9/16.

Exercice 1 : Calculs directs et pièges de signes
Énoncé :
1. Calculer la valeur exacte sous forme d'entier ou de fraction irréductible :
   A = (-2)^4
   B = -2^4
   C = 3^(-3)
   D = (-5)^(-2)
   E = (4/3)^(-2)
2. Déterminer le signe des nombres sans effectuer le calcul complet :
   X = (-7)^18 ; Y = (-13)^25 ; Z = -(-2)^8 ; T = (-1)^(-14)
Corrigé détaillé pas-à-pas :
1. Calculs des puissances :
   • A = (-2)^4 = (-2) × (-2) × (-2) × (-2) = +16 (exposant 4 pair, résultat positif).
   • B = -2^4 = - (2 × 2 × 2 × 2) = -16 (pas de parenthèses, le signe '-' reste devant).
   • C = 3^(-3) = 1 / 3^3 = 1 / 27.
   • D = (-5)^(-2) = 1 / (-5)^2 = 1 / 25.
   • E = (4/3)^(-2) = (3/4)^2 = 3^2 / 4^2 = 9/16.
2. Étude des signes :
   • X = (-7)^18 : Base négative, exposant 18 pair => POSITIF.
   • Y = (-13)^25 : Base négative, exposant 25 impair => NÉGATIF.
   • Z = -(-2)^8 : (-2)^8 est positif (+256), donc avec le signe '-' devant, Z est NÉGATIF (-256).
   • T = (-1)^(-14) = 1 / (-1)^14 = 1 / 1 = 1 => POSITIF.

Exercice 2 : Simplifications d'écritures avec les règles de calcul
Énoncé :
Écrire les expressions suivantes sous la forme d'une seule puissance a^p :
1. F = 5^4 × 5^(-7) × 5^6
2. G = (2^5)^(-3) × 2^8
3. H = (7^9 × 7^(-2)) / (7^4 × 7^8)
4. I = (16 × 2^5) / 2^(-3)
Corrigé détaillé pas-à-pas :
1. Calcul de F :
   • Même base 5, on additionne les exposants :
     F = 5^(4 + (-7) + 6) = 5^(4 - 7 + 6) = 5^3.
2. Calcul de G :
   • Puissance de puissance d'abord : (2^5)^(-3) = 2^(5 × (-3)) = 2^(-15)
   • Produit : G = 2^(-15) × 2^8 = 2^(-15 + 8) = 2^(-7).
3. Calcul de H :
   • Numérateur : 7^9 × 7^(-2) = 7^(9 - 2) = 7^7
   • Dénominateur : 7^4 × 7^8 = 7^(4 + 8) = 7^12
   • Quotient : H = 7^7 / 7^12 = 7^(7 - 12) = 7^(-5).
4. Calcul de I :
   • On remarque que 16 est une puissance de 2 : 16 = 2^4.
   • Numérateur : 16 × 2^5 = 2^4 × 2^5 = 2^(4 + 5) = 2^9.
   • Quotient : I = 2^9 / 2^(-3) = 2^(9 - (-3)) = 2^(9 + 3) = 2^12.

Conclusion :
Les puissances permettent d'alléger considérablement l'écriture mathématique et d'accélérer les calculs grâce aux propriétés de l'addition et de la soustraction des exposants. Bien distinguer l'exposant négatif (inversion) du signe d'un nombre est la clé de la réussite dans ce chapitre.`,
  sections: [
    {
      title: '1. Définition des puissances et conventions',
      content: [
        "Pour a relatif et n entier (n ≥ 1) : a^n = a × a × ... × a (n facteurs).",
        "Conventions indispensables : Pour tout a ≠ 0, a^1 = a et a^0 = 1.",
        "Alerte parenthèses : (-3)^2 = +9 alors que -3^2 = -9. Le signe n'est englobé que s'il est entre parenthèses."
      ]
    },
    {
      title: '2. Puissances à exposants négatifs (L\'inverse)',
      content: [
        "Propriété : Pour a ≠ 0, a^(-n) = 1 / a^n (l'inverse de a^n).",
        "Exemples : 2^(-3) = 1/2^3 = 1/8 = 0,125 ; 5^(-1) = 1/5 = 0,2.",
        "Piège classique : Un exposant négatif n'implique absolument pas que le résultat soit négatif !"
      ]
    },
    {
      title: '3. Règles opératoires fondamentales',
      content: [
        "Produit de même base : a^n × a^m = a^(n+m).",
        "Quotient de même base : (a^n) / (a^m) = a^(n-m).",
        "Puissance de puissance : (a^n)^m = a^(n×m).",
        "Puissance d'un produit : (a×b)^n = a^n × b^n."
      ],
      table: {
        headers: ['Règle', 'Formule', 'Exemple', 'Résultat simplifié'],
        rows: [
          ['Produit de même base', 'a^n × a^m = a^(n+m)', '2^3 × 2^4', '2^7 = 128'],
          ['Quotient de même base', 'a^n / a^m = a^(n-m)', '5^6 / 5^2', '5^4 = 625'],
          ['Puissance de puissance', '(a^n)^m = a^(n×m)', '(3^2)^3', '3^6 = 729'],
          ['Puissance négative', 'a^(-n) = 1 / a^n', '10^(-2)', '1/100 = 0,01']
        ]
      }
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calculs et pièges des signes',
          content: [
            "1. Calculer sous forme décimale ou fractionnaire irréductible :",
            "   A = (-2)^4",
            "   B = -2^4",
            "   C = 3^(-3)",
            "   D = (-5)^(-2)",
            "   E = (4/3)^(-2)",
            "2. Donner le signe de : X = (-7)^18, Y = (-13)^25, Z = -(-2)^8, T = (-1)^(-14)."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Calculs :",
            "   • A = (-2)^4 = +16 (exposant 4 pair).",
            "   • B = -2^4 = -(2^4) = -16 (le signe '-' n'est pas dans la puissance).",
            "   • C = 3^(-3) = 1/3^3 = 1/27.",
            "   • D = (-5)^(-2) = 1/(-5)^2 = 1/25.",
            "   • E = (4/3)^(-2) = (3/4)^2 = 9/16.",
            "2. Signes :",
            "   • X = (-7)^18 : Exposant 18 pair => POSITIF (+).",
            "   • Y = (-13)^25 : Exposant 25 impair => NÉGATIF (-).",
            "   • Z = -(-2)^8 = -(+256) => NÉGATIF (-).",
            "   • T = (-1)^(-14) = 1/(-1)^14 = 1/1 = 1 => POSITIF (+)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Règles de calcul et forme a^p',
          content: [
            "Écrire chaque expression sous la forme d'une seule puissance a^p :",
            "1. F = 5^4 × 5^(-7) × 5^6",
            "2. G = (2^5)^(-3) × 2^8",
            "3. H = (7^9 × 7^(-2)) / (7^4 × 7^8)",
            "4. I = (16 × 2^5) / 2^(-3)"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. F = 5^(4 - 7 + 6) = 5^3.",
            "2. G = 2^(5 × (-3)) × 2^8 = 2^(-15) × 2^8 = 2^(-15 + 8) = 2^(-7).",
            "3. H = 7^(9 - 2) / 7^(4 + 8) = 7^7 / 7^12 = 7^(7 - 12) = 7^(-5).",
            "4. I = (2^4 × 2^5) / 2^(-3) = 2^(4 + 5) / 2^(-3) = 2^9 / 2^(-3) = 2^(9 - (-3)) = 2^12."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : PUISSANCES ET RÈGLES DE CALCUL',
    root: 'PUISSANCES',
    branches: [
      {
        name: 'DÉFINITION & CONVENTIONS',
        subtitle: 'Bases théoriques',
        items: [
          'a^n = a × a × ... × a (n facteurs)',
          'a^1 = a et a^0 = 1 (a ≠ 0)',
          'Attention : (-a)^n ≠ -a^n'
        ]
      },
      {
        name: 'EXPOSANT NÉGATIF',
        subtitle: 'L\'inverse mathématique',
        items: [
          'a^(-n) = 1 / a^n',
          'a^(-1) = 1/a',
          'Toujours une inversion, pas un résultat négatif'
        ]
      },
      {
        name: 'RÈGLES OPÉRATOIRES',
        subtitle: 'Même base',
        items: [
          'a^n × a^m = a^(n+m)',
          '(a^n) / (a^m) = a^(n-m)',
          '(a^n)^m = a^(n×m)',
          '(a×b)^n = a^n × b^n'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, le calcul sur les puissances simplifie considérablement la manipulation des grands nombres et des fractions. La règle d'inversion a^(-n) = 1/a^n et les formules d'addition/soustraction des exposants ouvrent la voie à l'étude des puissances de 10."
};

// -------------------------------------------------------------------------
// LEÇON 6 : LES PUISSANCES DE 10 ET NOTATION SCIENTIFIQUE
// -------------------------------------------------------------------------
export const LESSON_6_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-6',
  number: 'Leçon 6',
  title: 'Les puissances de 10 et notation scientifique',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "En astronomie, les distances se mesurent en milliards de kilomètres (la vitesse de la lumière parcourt 300 000 000 m/s), tandis qu'en biologie ou en physique atomique, les dimensions cellulaires s'expriment en millionièmes de mètre (le diamètre d'un atome mesure environ 0,0000000001 m). Écrire et manipuler de tels nombres avec tous leurs zéros est source constante d'erreurs. Les puissances de 10 et la notation scientifique offrent un langage universel, concis et standardisé adopté par tous les scientifiques du monde entier.",
  fullText: `Leçon 6 : Les puissances de 10 et notation scientifique

Introduction :
En astronomie, les distances se mesurent en milliards de kilomètres (la vitesse de la lumière parcourt 300 000 000 m/s), tandis qu'en biologie ou en physique atomique, les dimensions cellulaires s'expriment en millionièmes de mètre (le diamètre d'un atome mesure environ 0,0000000001 m). Écrire et manipuler de tels nombres avec tous leurs zéros est source constante d'erreurs. Les puissances de 10 et la notation scientifique offrent un langage universel, concis et standardisé adopté par tous les scientifiques du monde entier.

1. Les puissances de 10
Définition pour un exposant positif :
Pour tout entier naturel n supérieur ou égal à 1 :
10^n = 10 × 10 × ... × 10 (n facteurs 10) = 1 suivi de n zéros.
Formule : 10^n = 100...00 (avec exactement n zéros après le chiffre 1).
Exemples :
• 10^1 = 10 (un zéro)
• 10^2 = 100 (deux zéros)
• 10^3 = 1 000 (mille, 3 zéros)
• 10^6 = 1 000 000 (un million, 6 zéros)
• 10^9 = 1 000 000 000 (un milliard, 9 zéros)

Définition pour un exposant négatif :
Pour tout entier naturel n supérieur ou égal à 1 :
10^(-n) = 1 / 10^n = 0,00...01 (avec exactement n zéros au total, en comptant obligatoirement celui situé avant la virgule).
Exemples :
• 10^(-1) = 1 / 10 = 0,1 (un dixième, 1 zéro)
• 10^(-2) = 1 / 100 = 0,01 (un centième, 2 zéros)
• 10^(-3) = 1 / 1 000 = 0,001 (un millième, 3 zéros)
• 10^(-6) = 0,000001 (un millionième, 6 zéros)

Règles de déplacement de la virgule :
- Multiplier un nombre décimal par 10^n revient à déplacer la virgule de n rangs vers la DROITE (en complétant par des zéros si nécessaire).
  Exemple : 4,25 × 10^3 = 4 250.
- Multiplier un nombre décimal par 10^(-n) revient à déplacer la virgule de n rangs vers la GAUCHE.
  Exemple : 73,4 × 10^(-3) = 0,0734.

2. La notation scientifique (ou écriture scientifique)
Définition officielle et stricte :
Un nombre décimal positif non nul est écrit en NOTATION SCIENTIFIQUE lorsqu'il est exprimé sous la forme unique :
a × 10^n
où :
- a est un nombre décimal ayant UN SEUL chiffre non nul avant la virgule (autrement dit : 1 ≤ a < 10).
- n est un entier relatif (positif ou négatif).

Si le nombre initial est négatif, sa notation scientifique est de la forme : - a × 10^n avec 1 ≤ a < 10.

Exemples comparatifs :
• 450 000 = 4,5 × 10^5 (4,5 possède un seul chiffre non nul avant la virgule et 1 ≤ 4,5 < 10).
• 0,000012 = 1,2 × 10^(-5).
• 7 890 000 000 = 7,89 × 10^9.
• -0,0035 = -3,5 × 10^(-3).

Contre-exemples fréquents (écritures qui NE SONT PAS scientifiques) :
- 45 × 10^4 n'est pas scientifique car 45 ≥ 10.
- 0,35 × 10^(-2) n'est pas scientifique car 0 n'est pas un chiffre non nul (0,35 < 1).

3. Ordre de grandeur et comparaison
Pour trouver l'ordre de grandeur d'un nombre écrit sous la forme a × 10^n :
1. On arrondit le nombre a à l'entier le plus proche.
2. Si a < 5, on garde 1 × 10^n = 10^n.
3. Si a ≥ 5, on arrondit à 10 × 10^n = 10^(n+1).
Exemple : 6,8 × 10^7 a pour ordre de grandeur 10 × 10^7 = 10^8.

Exercice 1 : Écritures scientifiques et formes décimales
Énoncé :
1. Donner la notation scientifique des nombres suivants :
   A = 5 400 000
   B = 0,000 008 7
   C = 784,3
   D = 0,056 × 10^7
   E = 450 × 10^(-8)
2. Écrire les nombres suivants sous forme décimale courante (sans puissance) :
   F = 3,14 × 10^4
   G = 9,05 × 10^(-3)
Corrigé détaillé pas-à-pas :
1. Notations scientifiques :
   • A = 5 400 000 = 5,4 × 10^6 (virgule décalée de 6 rangs vers la gauche).
   • B = 0,000 008 7 = 8,7 × 10^(-6) (virgule décalée de 6 rangs vers la droite).
   • C = 784,3 = 7,843 × 10^2.
   • D = 0,056 × 10^7 = (5,6 × 10^(-2)) × 10^7 = 5,6 × 10^(-2 + 7) = 5,6 × 10^5.
   • E = 450 × 10^(-8) = (4,5 × 10^2) × 10^(-8) = 4,5 × 10^(2 - 8) = 4,5 × 10^(-6).
2. Forme décimale standard :
   • F = 3,14 × 10^4 = 31 400 (déplacement de 4 rangs vers la droite).
   • G = 9,05 × 10^(-3) = 0,00905 (déplacement de 3 rangs vers la gauche).

Exercice 2 : Calculs scientifiques et problème appliqué
Énoncé :
1. Calculer et donner l'écriture scientifique du résultat :
   K = (3 × 10^5 × 4 × 10^(-2)) / (6 × 10^7)
   L = (2,5 × 10^(-3) × 8 × 10^9) / (5 × 10^(-4))
2. Problème d'astronomie :
   La lumière se propage dans le vide à une vitesse estimée à v = 3 × 10^5 km/s.
   La distance moyenne entre la Terre et le Soleil est d = 1,5 × 10^8 km.
   a) Rappeler la formule liant la vitesse v, la distance d et le temps t.
   b) Calculer le temps t (en secondes) mis par la lumière du Soleil pour parvenir jusqu'à la Terre.
   c) Convertir ce temps en minutes et secondes.
Corrigé détaillé pas-à-pas :
1. Calculs avec puissances de 10 :
   • Pour K : On sépare les nombres décimaux et les puissances de 10 :
     K = [(3 × 4) / 6] × [(10^5 × 10^(-2)) / 10^7]
     Partie numérique : (12 / 6) = 2.
     Partie puissances : 10^(5 - 2) / 10^7 = 10^3 / 10^7 = 10^(3 - 7) = 10^(-4).
     Résultat : K = 2 × 10^(-4) (déjà sous notation scientifique).
   • Pour L :
     Partie numérique : (2,5 × 8) / 5 = 20 / 5 = 4.
     Partie puissances : (10^(-3) × 10^9) / 10^(-4) = 10^6 / 10^(-4) = 10^(6 - (-4)) = 10^(6 + 4) = 10^10.
     Résultat : L = 4 × 10^10 (déjà sous notation scientifique).
2. Problème d'astronomie :
   a) Formule : v = d / t, d'où t = d / v.
   b) Calcul du temps t :
      t = (1,5 × 10^8) / (3 × 10^5) = (1,5 / 3) × (10^8 / 10^5) = 0,5 × 10^3 = 500 secondes.
   c) Conversion en minutes et secondes :
      500 ÷ 60 = 8 avec un reste de 20 (car 8 × 60 = 480 s et 500 - 480 = 20 s).
      Conclusion : La lumière du Soleil met 8 minutes et 20 secondes pour atteindre la Terre.

Conclusion :
La notation scientifique a × 10^n structure la pensée scientifique en séparant l'information quantitative (la mantisse a) de l'échelle de grandeur (l'exposant n). Elle permet d'effectuer des calculs d'astronomie et de microscopie avec une clarté et une rigueur exemplaires.`,
  sections: [
    {
      title: '1. Puissances de 10 à exposants positifs et négatifs',
      content: [
        "Pour n ≥ 1 : 10^n = 1 suivi de n zéros (ex : 10^4 = 10 000).",
        "Pour n ≥ 1 : 10^(-n) = 0,00...01 avec n zéros au total (ex : 10^(-3) = 0,001).",
        "Déplacements de virgule : × 10^n décale de n rangs vers la droite ; × 10^(-n) décale de n rangs vers la gauche."
      ]
    },
    {
      title: '2. Définition stricte de la notation scientifique',
      content: [
        "Tout nombre décimal non nul peut s'écrire sous la forme a × 10^n où a possède un seul chiffre non nul avant la virgule (1 ≤ a < 10) et n est un entier relatif.",
        "Exemples : 450 000 = 4,5 × 10^5 ; 0,000012 = 1,2 × 10^(-5).",
        "Règle de conversion : Si le nombre de départ est plus grand que 10, l'exposant n est positif. S'il est plus petit que 1, l'exposant n est négatif."
      ],
      table: {
        headers: ['Nombre standard', 'Déplacement de la virgule', 'Notation scientifique', 'Ordre de grandeur'],
        rows: [
          ['850 000', '5 rangs vers la gauche', '8,5 × 10^5', '10^6'],
          ['0,000 42', '4 rangs vers la droite', '4,2 × 10^(-4)', '10^(-4)'],
          ['149 600 000', '8 rangs vers la gauche', '1,496 × 10^8', '10^8'],
          ['0,000 000 7', '7 rangs vers la droite', '7 × 10^(-7)', '10^(-6)']
        ]
      }
    },
    {
      title: '3. Méthode de calcul avec les puissances de 10',
      content: [
        "Pour calculer une fraction complexe de puissances : on regroupe d'une part tous les coefficients numériques ordinaires, et d'autre part toutes les puissances de 10 en appliquant les règles 10^n × 10^m = 10^(n+m) et 10^n / 10^m = 10^(n-m)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Écritures scientifiques et décimales',
          content: [
            "1. Écrire sous notation scientifique exacte :",
            "   A = 5 400 000",
            "   B = 0,000 008 7",
            "   C = 784,3",
            "   D = 0,056 × 10^7",
            "   E = 450 × 10^(-8)",
            "2. Convertir en écriture décimale classique :",
            "   F = 3,14 × 10^4",
            "   G = 9,05 × 10^(-3)"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Notations scientifiques :",
            "   • A = 5,4 × 10^6.",
            "   • B = 8,7 × 10^(-6).",
            "   • C = 7,843 × 10^2.",
            "   • D = 0,056 × 10^7 = 5,6 × 10^(-2) × 10^7 = 5,6 × 10^5.",
            "   • E = 450 × 10^(-8) = 4,5 × 10^2 × 10^(-8) = 4,5 × 10^(-6).",
            "2. Écritures décimales :",
            "   • F = 31 400.",
            "   • G = 0,00905."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Calculs complexes et vitesse de la lumière',
          content: [
            "1. Calculer et donner l'écriture scientifique :",
            "   K = (3 × 10^5 × 4 × 10^(-2)) / (6 × 10^7)",
            "   L = (2,5 × 10^(-3) × 8 × 10^9) / (5 × 10^(-4))",
            "2. La vitesse de la lumière est v = 3 × 10^5 km/s et la distance Terre-Soleil est d = 1,5 × 10^8 km.",
            "   Calculer le temps t en secondes puis en minutes et secondes pour que la lumière atteigne la Terre."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Calculs :",
            "   • K = [(3 × 4)/6] × [10^(5 - 2)/10^7] = 2 × [10^3/10^7] = 2 × 10^(-4).",
            "   • L = [(2,5 × 8)/5] × [10^(-3 + 9)/10^(-4)] = 4 × [10^6/10^(-4)] = 4 × 10^(6 - (-4)) = 4 × 10^10.",
            "2. Problème :",
            "   • t = d / v = (1,5 × 10^8) / (3 × 10^5) = 0,5 × 10^3 = 500 s.",
            "   • 500 s = 8 min (480 s) + 20 s.",
            "   • Réponse : 8 minutes et 20 secondes."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : PUISSANCES DE 10 & NOTATION SCIENTIFIQUE',
    root: 'PUISSANCES DE 10',
    branches: [
      {
        name: 'NOTATION SCIENTIFIQUE',
        subtitle: 'Format strict : a × 10^n',
        items: [
          'Condition : 1 ≤ a < 10 (un seul chiffre non nul avant la virgule)',
          'Exposant n est un entier relatif',
          'Exemples : 4,5 × 10^5 et 1,2 × 10^(-5)'
        ]
      },
      {
        name: 'EXPOSANTS POSITIFS',
        subtitle: 'Grands nombres',
        items: [
          '10^n = 1 suivi de n zéros',
          'Multiplication : décale la virgule vers la DROITE',
          '10^3 = 1 000 ; 10^6 = 1 million'
        ]
      },
      {
        name: 'EXPOSANTS NÉGATIFS',
        subtitle: 'Petits nombres',
        items: [
          '10^(-n) = 0,00...01 (n zéros au total)',
          'Multiplication : décale la virgule vers la GAUCHE',
          '10^(-1) = 0,1 ; 10^(-3) = 0,001'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, la notation scientifique a × 10^n standardise les grandeurs astronomiques et microscopiques. Sa maîtrise permet d'effectuer des calculs d'une grande rigueur et s'avère indispensable pour la physique-chimie et les sciences de la vie et de la Terre."
};

// -------------------------------------------------------------------------
// LEÇON 7 : CALCUL LITTÉRAL — RÉDUCTION ET SIMPLE DISTRIBUTIVITÉ
// -------------------------------------------------------------------------
export const LESSON_7_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-7',
  number: 'Leçon 7',
  title: 'Calcul littéral — Réduction et simple distributivité',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Le calcul littéral est l'alphabet de l'algèbre. En introduisant des lettres pour désigner des nombres inconnus ou des variables générales, les mathématiques permettent de formuler des lois universelles, d'établir des théorèmes et de résoudre des équations. En classe de 4ème, l'élève apprend à réduire une expression littérale en regroupant les termes semblables, à supprimer proprement les parenthèses et à appliquer la propriété de simple distributivité pour développer ou factoriser des expressions.",
  fullText: `Leçon 7 : Calcul littéral — Réduction et simple distributivité

Introduction :
Le calcul littéral est l'alphabet de l'algèbre. En introduisant des lettres pour désigner des nombres inconnus ou des variables générales, les mathématiques permettent de formuler des lois universelles, d'établir des théorèmes et de résoudre des équations. En classe de 4ème, l'élève apprend à réduire une expression littérale en regroupant les termes semblables, à supprimer proprement les parenthèses et à appliquer la propriété de simple distributivité pour développer ou factoriser des expressions.

1. Conventions d'écriture en calcul littéral
Pour alléger et clarifier les expressions littérales :
- Le signe de multiplication '×' est systématiquement omis :
  • Entre deux lettres : a × b s'écrit ab.
  • Entre un nombre et une lettre : 3 × x s'écrit 3x (le nombre est toujours placé devant la lettre).
  • Devant une parenthèse : 4 × (x + 2) s'écrit 4(x + 2).
- Les écritures particulières :
  • 1 × x s'écrit simplement x.
  • -1 × x s'écrit -x.
  • x × x s'écrit x^2 (lu « x au carré »).
  • x × x × x s'écrit x^3 (lu « x au cube »).

2. Réduction d'une expression littérale
Définition :
Réduire une expression littérale consiste à l'écrire avec le moins de termes possibles en effectuant les additions et soustractions entre les « termes de même nature » (termes semblables).
Règle fondamentale des familles :
On ne peut additionner ou soustraire ensemble que les termes appartenant à la même famille :
- Les constantes numériques (les nombres seuls) ensemble.
- Les termes en x ensemble (ex: 3x - 5x = -2x).
- Les termes en x^2 ensemble (ex: 4x^2 + 7x^2 = 11x^2).
ATTENTION ABSOLUE : On ne peut JAMAIS additionner un terme en x^2 avec un terme en x, ni un terme en x avec un nombre seul !
Exemple d'erreur fréquente : 3x + 5 N'EST PAS ÉGAL à 8x ! L'expression 3x + 5 est déjà irréductible.

Exemple complet de réduction :
Soit A = 3x + 5 - 2x + 7
• On regroupe par famille : A = (3x - 2x) + (5 + 7)
• On calcule chaque famille : 3x - 2x = 1x = x, et 5 + 7 = 12
• Résultat final réduit : A = x + 12.

Autre exemple avec des carrés :
Soit B = 4x^2 - 7x + 3 + 2x^2 + 9x - 10
• Famille des x^2 : 4x^2 + 2x^2 = 6x^2
• Famille des x : -7x + 9x = +2x
• Famille des constantes : 3 - 10 = -7
• Résultat final réduit et ordonné : B = 6x^2 + 2x - 7.

3. Suppression des parenthèses
Règles de suppression :
- Si des parenthèses sont précédées du signe '+' (ou sans signe au tout début d'une expression) : on peut supprimer les parenthèses sans changer les signes des termes intérieurs.
  Exemple : +(3x - 5) = 3x - 5.
- Si des parenthèses sont précédées du signe '-' : on supprime les parenthèses et le signe '-' en INVERSANT le signe de TOUS les termes situés à l'intérieur.
  Exemple : -(2x - 7) = -2x + 7 ; -(4x + 3) = -4x - 3.

4. La simple distributivité
Propriété fondamentale :
Développer une expression, c'est transformer un produit en une somme algébrique.
Pour tous nombres relatifs k, a et b :
• k(a + b) = ka + kb
• k(a - b) = ka - kb
Le facteur k est « distribué » à chaque terme situé à l'intérieur de la parenthèse en appliquant rigoureusement la règle des signes des nombres relatifs.

Exemples détaillés pas-à-pas :
• B = 4(3x - 5) = 4 × 3x - 4 × 5 = 12x - 20.
• C = -3(2x - 4) = (-3) × 2x - (-3) × 4 = -6x - (-12) = -6x + 12.
• D = -2x(5x - 3) = (-2x) × 5x - (-2x) × 3 = -10x^2 + 6x.

Exercice 1 : Réductions et suppression de parenthèses
Énoncé :
1. Réduire et ordonner les expressions suivantes :
   A = 7x - 4 + 2x - 9
   B = 5x^2 - 3x + 8 - 2x^2 + 7x - 11
   C = 9x - (4x - 5) + (-2x + 7)
2. Développer et réduire :
   D = 5(2x - 3)
   E = -4(3x - 7)
   F = 3x(2x + 4) - 5(x^2 - 2x + 1)
Corrigé détaillé pas-à-pas :
1. Réductions :
   • A = (7x + 2x) + (-4 - 9) = 9x - 13.
   • B = (5x^2 - 2x^2) + (-3x + 7x) + (8 - 11) = 3x^2 + 4x - 3.
   • C : Suppression des parenthèses : C = 9x - 4x + 5 - 2x + 7 = (9x - 4x - 2x) + (5 + 7) = 3x + 12.
2. Développements et réductions :
   • D = 5 × 2x - 5 × 3 = 10x - 15.
   • E = (-4) × 3x - (-4) × 7 = -12x - (-28) = -12x + 28.
   • F : On développe chaque bloc :
     3x(2x + 4) = 6x^2 + 12x
     -5(x^2 - 2x + 1) = -5x^2 + 10x - 5
     Total : F = 6x^2 + 12x - 5x^2 + 10x - 5 = (6x^2 - 5x^2) + (12x + 10x) - 5 = x^2 + 22x - 5.

Exercice 2 : Modélisation géométrique et factorisation simple
Énoncé :
1. Un rectangle a pour largeur 4 cm et pour longueur (3x + 2) cm.
   a) Exprimer le périmètre P du rectangle en fonction de x sous forme développée et réduite.
   b) Exprimer l'aire A du rectangle en fonction de x sous forme développée et réduite.
   c) Calculer P et A lorsque x = 3 cm.
2. Factoriser en repérant un facteur commun évident :
   G = 12x + 20
   H = 7x^2 - 14x
Corrigé détaillé pas-à-pas :
1. Problème géométrique :
   a) Périmètre P = 2 × (Longueur + Largeur) = 2 × [(3x + 2) + 4] = 2 × (3x + 6) = 6x + 12 cm.
   b) Aire A = Longueur × Largeur = 4 × (3x + 2) = 12x + 8 cm^2.
   c) Pour x = 3 :
      • P = 6 × 3 + 12 = 18 + 12 = 30 cm.
      • A = 12 × 3 + 8 = 36 + 8 = 44 cm^2.
2. Factorisation :
   • G = 12x + 20 : Le PGCD de 12 et 20 est 4.
     12x = 4 × 3x et 20 = 4 × 5.
     D'où G = 4(3x + 5).
   • H = 7x^2 - 14x : Le facteur commun est 7x.
     7x^2 = 7x × x et 14x = 7x × 2.
     D'où H = 7x(x - 2).

Conclusion :
La réduction d'expressions littérales et la simple distributivité constituent le socle de toute manipulation algébrique. Respecter la séparation des familles de termes et maîtriser la gestion du signe '-' devant les parenthèses sont les deux réflexes clés pour réussir en calcul littéral.`,
  sections: [
    {
      title: '1. Conventions d\'écriture et réduction d\'une expression',
      content: [
        "Conventions : Le signe '×' est omis devant les lettres et parenthèses (3 × x = 3x ; a × b = ab ; x × x = x^2).",
        "Réduire : Regrouper et additionner les termes de même nature (les x^2 entre eux, les x entre eux, les constantes entre elles).",
        "Exemple fondamental : A = 3x + 5 - 2x + 7 = (3x - 2x) + (5 + 7) = x + 12."
      ]
    },
    {
      title: '2. Suppression des parenthèses',
      content: [
        "Parenthèses précédées de '+' : On supprime les parenthèses sans modification : +(a - b) = a - b.",
        "Parenthèses précédées de '-' : On supprime les parenthèses en inversant le signe de tous les termes intérieurs : -(a - b) = -a + b et -(a + b) = -a - b."
      ]
    },
    {
      title: '3. La simple distributivité',
      content: [
        "Formules de développement : k(a + b) = ka + kb et k(a - b) = ka - kb.",
        "Exemple avec signe négatif : B = -3(2x - 5) = (-3)×2x - (-3)×5 = -6x + 15.",
        "Factoriser : C'est le chemin inverse du développement : ka + kb = k(a + b)."
      ],
      table: {
        headers: ['Expression produit', 'Facteur distribué', 'Développement intermédiaire', 'Forme réduite'],
        rows: [
          ['4(3x - 5)', '4', '4×3x - 4×5', '12x - 20'],
          ['-3(2x - 4)', '-3', '(-3)×2x - (-3)×4', '-6x + 12'],
          ['2x(5x + 3)', '2x', '2x×5x + 2x×3', '10x^2 + 6x'],
          ['-5(x^2 - 2)', '-5', '(-5)×x^2 - (-5)×2', '-5x^2 + 10']
        ]
      }
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Réduction et développements',
          content: [
            "1. Réduire : A = 7x - 4 + 2x - 9 ; B = 5x^2 - 3x + 8 - 2x^2 + 7x - 11 ; C = 9x - (4x - 5) + (-2x + 7)",
            "2. Développer et réduire : D = 5(2x - 3) ; E = -4(3x - 7) ; F = 3x(2x + 4) - 5(x^2 - 2x + 1)"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Réductions :",
            "   • A = 9x - 13.",
            "   • B = 3x^2 + 4x - 3.",
            "   • C = 9x - 4x + 5 - 2x + 7 = 3x + 12.",
            "2. Développements :",
            "   • D = 10x - 15.",
            "   • E = -12x + 28.",
            "   • F = 6x^2 + 12x - 5x^2 + 10x - 5 = x^2 + 22x - 5."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rectangle et factorisation',
          content: [
            "1. Un rectangle a pour largeur 4 cm et longueur (3x + 2) cm.",
            "   a) Exprimer le périmètre P sous forme réduite.",
            "   b) Exprimer l'aire A sous forme réduite.",
            "   c) Calculer P et A pour x = 3 cm.",
            "2. Factoriser : G = 12x + 20 et H = 7x^2 - 14x."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Géométrie :",
            "   a) P = 2[(3x + 2) + 4] = 2(3x + 6) = 6x + 12 cm.",
            "   b) A = 4(3x + 2) = 12x + 8 cm^2.",
            "   c) Pour x = 3 : P = 6(3) + 12 = 30 cm et A = 12(3) + 8 = 44 cm^2.",
            "2. Factorisations :",
            "   • G = 4(3x + 5) (facteur commun 4).",
            "   • H = 7x(x - 2) (facteur commun 7x)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : CALCUL LITTÉRAL & SIMPLE DISTRIBUTIVITÉ',
    root: 'CALCUL LITTÉRAL',
    branches: [
      {
        name: 'RÉDUCTION',
        subtitle: 'Familles de termes',
        items: [
          'Regrouper les termes de même degré',
          'Termes en x^2 ensemble, en x ensemble, constantes seules',
          'Interdit d\'additionner 3x + 5 = 8x !'
        ]
      },
      {
        name: 'PARENTHÈSES',
        subtitle: 'Signes + et -',
        items: [
          '+(a - b) = a - b (inchangé)',
          '-(a - b) = -a + b (inversion totale des signes)',
          'Supprimer avant de réduire'
        ]
      },
      {
        name: 'DISTRIBUTIVITÉ',
        subtitle: 'Produit vers somme',
        items: [
          'k(a + b) = ka + kb',
          'k(a - b) = ka - kb',
          'Attention à la règle des signes avec k négatif'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, la réduction et la simple distributivité forment les fondations de l'algèbre au collège. Cette rigueur permet d'aborder sans difficulté la double distributivité entre deux parenthèses."
};

// -------------------------------------------------------------------------
// LEÇON 8 : CALCUL LITTÉRAL — DOUBLE DISTRIBUTIVITÉ
// -------------------------------------------------------------------------
export const LESSON_8_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-8',
  number: 'Leçon 8',
  title: 'Calcul littéral — Double distributivité',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Après avoir appris à distribuer un facteur unique sur une parenthèse, la classe de 4ème aborde le produit de deux sommes : c'est la double distributivité. Cette technique incontournable permet de développer des expressions où chaque terme de la première parenthèse multiplie successivement chaque terme de la seconde parenthèse. Elle constitue le passage obligé vers les identités remarquables et la résolution d'équations complexes.",
  fullText: `Leçon 8 : Calcul littéral — Double distributivité

Introduction :
Après avoir appris à distribuer un facteur unique sur une parenthèse, la classe de 4ème aborde le produit de deux sommes : c'est la double distributivité. Cette technique incontournable permet de développer des expressions où chaque terme de la première parenthèse multiplie successivement chaque terme de la seconde parenthèse. Elle constitue le passage obligé vers les identités remarquables et la résolution d'équations complexes.

1. Principe et formule de la double distributivité
Théorème fondamental :
Pour tous nombres relatifs a, b, c et d :
(a + b)(c + d) = a × c + a × d + b × c + b × d = ac + ad + bc + bd

Interprétation visuelle :
Le premier terme 'a' est distribué aux deux termes (c et d), puis le second terme 'b' est à son tour distribué aux deux termes (c et d).
Ce développement génère exactement QUATRE produits intermédiaires qu'il convient ensuite de réduire en regroupant les termes de même nature.

2. Gestion rigoureuse des signes relatifs
Lorsque des signes négatifs apparaissent à l'intérieur des parenthèses, il convient d'associer immédiatement chaque signe au terme qui le suit directement :
• (a - b)(c + d) = a × c + a × d + (-b) × c + (-b) × d = ac + ad - bc - bd
• (a + b)(c - d) = a × c + a × (-d) + b × c + b × (-d) = ac - ad + bc - bd
• (a - b)(c - d) = a × c + a × (-d) + (-b) × c + (-b) × (-d) = ac - ad - bc + bd

3. Méthode pas-à-pas sur un exemple détaillé
Soit à développer et réduire l'expression C = (2x + 3)(x - 4)
• Étape 1 : On identifie les 4 termes : a = 2x, b = +3, c = x, d = -4.
• Étape 2 : On écrit les 4 produits intermédiaires :
  Produit 1 : 2x × x = 2x^2
  Produit 2 : 2x × (-4) = -8x
  Produit 3 : +3 × x = +3x
  Produit 4 : +3 × (-4) = -12
• Étape 3 : On écrit la somme intermédiaire : C = 2x^2 - 8x + 3x - 12
• Étape 4 : On réduit les termes de même famille (ici les termes en x) :
  -8x + 3x = -5x
• Résultat final irréductible et ordonné : C = 2x^2 - 5x - 12.

4. Piège du signe '-' placé devant un produit de deux parenthèses
Lorsqu'un signe '-' précède le produit de deux parenthèses (ex : - (x + 2)(3x - 5)) :
Méthode de sécurité absolue :
1. On conserve le signe '-' et on ouvre un grand crochet : - [ (x + 2)(3x - 5) ].
2. On développe la double distributivité à l'intérieur du crochet : - [ 3x^2 - 5x + 6x - 10 ] = - [ 3x^2 + x - 10 ].
3. On supprime les crochets en inversant TOUS les signes intérieurs : -3x^2 - x + 10.
Cette méthode évite l'erreur fatale consistant à n'appliquer le signe '-' qu'au premier terme !

Exercice 1 : Développements fondamentaux par double distributivité
Énoncé :
Développer et réduire les expressions suivantes :
1. A = (x + 5)(x + 2)
2. B = (3x + 4)(2x + 1)
3. C = (2x - 3)(4x + 5)
4. D = (5x - 2)(3x - 4)
Corrigé détaillé pas-à-pas :
1. Calcul de A :
   • Produits : x × x + x × 2 + 5 × x + 5 × 2
   • Intermédiaire : A = x^2 + 2x + 5x + 10
   • Réduction : A = x^2 + 7x + 10.
2. Calcul de B :
   • Produits : 3x × 2x + 3x × 1 + 4 × 2x + 4 × 1
   • Intermédiaire : B = 6x^2 + 3x + 8x + 4
   • Réduction : B = 6x^2 + 11x + 4.
3. Calcul de C :
   • Produits : 2x × 4x + 2x × 5 + (-3) × 4x + (-3) × 5
   • Intermédiaire : C = 8x^2 + 10x - 12x - 15
   • Réduction : C = 8x^2 - 2x - 15.
4. Calcul de D :
   • Produits : 5x × 3x + 5x × (-4) + (-2) × 3x + (-2) × (-4)
   • Intermédiaire : D = 15x^2 - 20x - 6x + 8
   • Réduction : D = 15x^2 - 26x + 8.

Exercice 2 : Expressions composées et problème géométrique
Énoncé :
1. Développer et réduire l'expression complète :
   E = (3x - 1)(2x + 4) - (x - 3)(4x + 2)
2. Problème géométrique :
   On considère un terrain rectangulaire dont la longueur mesure (2x + 5) mètres et la largeur (x + 3) mètres.
   a) Exprimer l'aire totale A du terrain en fonction de x sous forme développée et réduite.
   b) On décide d'augmenter la longueur de 2 mètres et de diminuer la largeur de 1 mètre.
      Exprimer la nouvelle aire A' du terrain en fonction de x.
   c) Calculer l'augmentation d'aire (A' - A) pour x = 10 mètres.
Corrigé détaillé pas-à-pas :
1. Calcul de E :
   • Bloc 1 : (3x - 1)(2x + 4) = 6x^2 + 12x - 2x - 4 = 6x^2 + 10x - 4
   • Bloc 2 : (x - 3)(4x + 2) = 4x^2 + 2x - 12x - 6 = 4x^2 - 10x - 6
   • On applique la soustraction avec crochets :
     E = (6x^2 + 10x - 4) - [4x^2 - 10x - 6]
     E = 6x^2 + 10x - 4 - 4x^2 + 10x + 6
   • Réduction : E = (6x^2 - 4x^2) + (10x + 10x) + (-4 + 6) = 2x^2 + 20x + 2.
2. Problème géométrique :
   a) Aire initiale : A = (2x + 5)(x + 3) = 2x^2 + 6x + 5x + 15 = 2x^2 + 11x + 15 m^2.
   b) Nouvelles dimensions :
      Nouvelle longueur L' = (2x + 5) + 2 = 2x + 7 mètres.
      Nouvelle largeur l' = (x + 3) - 1 = x + 2 mètres.
      Nouvelle aire : A' = (2x + 7)(x + 2) = 2x^2 + 4x + 7x + 14 = 2x^2 + 11x + 14 m^2.
   c) Différence d'aire A' - A :
      A' - A = (2x^2 + 11x + 14) - (2x^2 + 11x + 15) = 14 - 15 = -1 m^2.
      Conclusion : Quelle que soit la valeur de x (donc même pour x = 10 m), la nouvelle aire a diminué exactement de 1 m^2 !

Conclusion :
La double distributivité (a + b)(c + d) = ac + ad + bc + bd est une technique maîtresse de l'algèbre. Elle demande une attention méticuleuse à la règle des signes lors du calcul des 4 produits et prépare l'élève à l'étude des équations et aux factorisations de 3ème.`,
  sections: [
    {
      title: '1. Principe de la double distributivité',
      content: [
        "Formule fondamentale : (a + b)(c + d) = ac + ad + bc + bd.",
        "On distribue chaque terme de la 1ère parenthèse aux deux termes de la 2nde.",
        "Le développement produit 4 termes intermédiaires qu'il faut réduire par familles."
      ]
    },
    {
      title: '2. Gestion des signes négatifs',
      content: [
        "Associer chaque signe '-' au terme qui le suit.",
        "(a - b)(c - d) = ac - ad - bc + bd (le dernier terme (-b) × (-d) devient positif !).",
        "Piège du signe '-' devant un produit : Toujours utiliser des crochets : -(P1)(P2) = -[ développement ]."
      ],
      table: {
        headers: ['Produit de parenthèses', '4 termes intermédiaires', 'Réduction des termes en x', 'Résultat final'],
        rows: [
          ['(x + 5)(x + 2)', 'x^2 + 2x + 5x + 10', '2x + 5x = 7x', 'x^2 + 7x + 10'],
          ['(2x + 3)(x - 4)', '2x^2 - 8x + 3x - 12', '-8x + 3x = -5x', '2x^2 - 5x - 12'],
          ['(3x - 2)(4x + 1)', '12x^2 + 3x - 8x - 2', '3x - 8x = -5x', '12x^2 - 5x - 2'],
          ['(5x - 3)(2x - 4)', '10x^2 - 20x - 6x + 12', '-20x - 6x = -26x', '10x^2 - 26x + 12']
        ]
      }
    },
    {
      title: '3. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Développements pas-à-pas',
          content: [
            "Développer et réduire :",
            "1. A = (x + 5)(x + 2)",
            "2. B = (3x + 4)(2x + 1)",
            "3. C = (2x - 3)(4x + 5)",
            "4. D = (5x - 2)(3x - 4)"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. A = x^2 + 2x + 5x + 10 = x^2 + 7x + 10.",
            "2. B = 6x^2 + 3x + 8x + 4 = 6x^2 + 11x + 4.",
            "3. C = 8x^2 + 10x - 12x - 15 = 8x^2 - 2x - 15.",
            "4. D = 15x^2 - 20x - 6x + 8 = 15x^2 - 26x + 8."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Expression composée et rectangle modifié',
          content: [
            "1. Développer et réduire : E = (3x - 1)(2x + 4) - (x - 3)(4x + 2)",
            "2. Un terrain rectangulaire mesure (2x + 5) m de long et (x + 3) m de large.",
            "   a) Exprimer son aire initiale A.",
            "   b) On allonge la longueur de 2 m et raccourcit la largeur de 1 m. Exprimer la nouvelle aire A'.",
            "   c) Calculer A' - A pour x = 10 m."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Calcul de E :",
            "   • Bloc 1 : (3x - 1)(2x + 4) = 6x^2 + 10x - 4",
            "   • Bloc 2 : (x - 3)(4x + 2) = 4x^2 - 10x - 6",
            "   • E = (6x^2 + 10x - 4) - [4x^2 - 10x - 6] = 2x^2 + 20x + 2.",
            "2. Géométrie :",
            "   a) A = (2x + 5)(x + 3) = 2x^2 + 11x + 15 m^2.",
            "   b) A' = (2x + 7)(x + 2) = 2x^2 + 11x + 14 m^2.",
            "   c) A' - A = (2x^2 + 11x + 14) - (2x^2 + 11x + 15) = -1 m^2 (l'aire a diminué de 1 m^2)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : DOUBLE DISTRIBUTIVITÉ',
    root: 'DOUBLE DISTRIBUTIVITÉ',
    branches: [
      {
        name: 'FORMULE CLÉ',
        subtitle: '(a + b)(c + d)',
        items: [
          'Distribution 1 : a × c + a × d',
          'Distribution 2 : b × c + b × d',
          'Exactement 4 produits intermédiaires'
        ]
      },
      {
        name: 'RÈGLE DES SIGNES',
        subtitle: 'Attention aux négatifs',
        items: [
          'Associer le signe au terme qui suit',
          '(-b) × (-d) donne obligatoirement +bd',
          'Vérifier chaque signe avant de réduire'
        ]
      },
      {
        name: 'RÉDUCTION FINALE',
        subtitle: 'Regroupement',
        items: [
          'Regrouper les termes en x^2',
          'Additionner les termes en x',
          'Additionner les constantes'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, la double distributivité transforme un produit de facteurs en une somme algébrique réduite. La méthode systématique des 4 produits et l'emploi de crochets protecteurs lors des soustractions d'expressions garantissent un calcul sans faille."
};
