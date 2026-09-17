import { LessonContent } from './courses';
import {
  SVG_MATH5_FIG_PRIORITES,
  SVG_MATH5_FIG_RELATIFS
} from './diagrams_5eme_math';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 5ÈME
// PARTIE 1 : ACTIVITÉS NUMÉRIQUES (LEÇONS 1 À 4)
// PROGRAMME OFFICIEL SÉNÉGALAIS & FRANCOPHONE
// TEXTE APPROFONDI, DÉMONSTRATIONS, FIGURES VECTORIELLES OBLIGATOIRES
// ET 4 EXERCICES D'APPLICATION COMPLETS AVEC CORRIGÉS DÉTAILLÉS PAR LEÇON
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 1 : PRIORITÉS OPÉRATOIRES ET ENCHAÎNEMENT D'OPÉRATIONS
// -------------------------------------------------------------------------
export const LESSON_1_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-1',
  number: 'Leçon 1',
  title: 'Priorités opératoires et enchaînement d\'opérations',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "L'étude des enchaînements d'opérations constitue la base indispensable de tout calcul algébrique et numérique au collège. Dès lors qu'une expression combine plusieurs opérations (additions, soustractions, multiplications, divisions) et des parenthèses imbriquées, l'application aveugle de gauche à droite conduit à des résultats erronés. Pour garantir l'universalité des résultats mathématiques et le fonctionnement des calculatrices et logiciels scientifiques, des conventions internationales strictes de priorités opératoires ont été établies.",
  fullText: `Leçon 1 : Priorités opératoires et enchaînement d'opérations

Introduction :
L'étude des enchaînements d'opérations constitue la base indispensable de tout calcul algébrique et numérique au collège. Dès lors qu'une expression combine plusieurs opérations (additions, soustractions, multiplications, divisions) et des parenthèses imbriquées, l'application aveugle de gauche à droite conduit à des résultats erronés. Des conventions internationales strictes de priorités opératoires ont été établies pour lever toute ambiguïté.

1. Calculs sans parenthèses
Règle 1 : Règle de gauche à droite pour des opérations de même rang
Lorsque l'expression ne comporte que des additions et des soustractions, ou ne comporte que des multiplications et des divisions, on effectue impérativement les calculs les uns après les autres, de la gauche vers la droite.
• Exemple 1 (additions/soustractions) :
  A = 27 - 12 + 5
  On effectue d'abord 27 - 12 = 15, puis 15 + 5 = 20.
• Exemple 2 (multiplications/divisions) :
  B = 36 ÷ 4 × 3
  On effectue d'abord 36 ÷ 4 = 9, puis 9 × 3 = 27 (et non 36 ÷ 12 = 3).

Règle 2 : Priorité de la multiplication et de la division
Dans une expression sans parenthèses comportant les quatre opérations, les multiplications et les divisions s'effectuent toujours en priorité absolue avant les additions et les soustractions.
• Exemple 3 : C = 8 + 5 × 6 = 8 + 30 = 38.
• Exemple 4 : D = 50 - 24 ÷ 3 + 2 × 7 = 50 - 8 + 14 = 42 + 14 = 56.

2. Calculs avec parenthèses et crochets
Règle 3 : Priorité des parenthèses
Dans une expression comportant des parenthèses, les calculs situés à l'intérieur des parenthèses sont strictement prioritaires sur tous les autres calculs extérieurs.
S'il y a des parenthèses imbriquées (parenthèses à l'intérieur de crochets ou d'autres parenthèses), on commence toujours par effectuer les calculs situés dans les parenthèses les plus intérieures.
• Exemple 5 : E = (15 - 7) × (4 + 3) = 8 × 7 = 56.
• Exemple 6 : F = 4 × [ 25 - (3 + 4 × 2) ]
  - Étape 1 (multiplication dans la parenthèse intérieure) : 4 × 2 = 8, donc (3 + 8) = 11.
  - Étape 2 (crochet) : 25 - 11 = 14.
  - Étape 3 (multiplication finale) : 4 × 14 = 56.

3. Écritures fractionnaires et barres de fraction
Dans une écriture sous forme de quotient fractionnaire, la barre de fraction joue le rôle d'une parenthèse invisible à la fois pour l'ensemble du numérateur et pour l'ensemble du dénominateur.
Soit l'expression : G = (18 + 6) / (7 - 3) = 24 / 4 = 6.`,
  sections: [
    {
      title: '1. Règles fondamentales et arbre des priorités',
      image: {
        url: SVG_MATH5_FIG_PRIORITES,
        alt: 'Figure : Arbre des priorités opératoires et parenthèses',
        caption:
          'Hiérarchie universelle des opérations : 1. Parenthèses les plus internes • 2. Multiplications et divisions de gauche à droite • 3. Additions et soustractions.'
      },
      subsections: [
        {
          subtitle: 'A. Ordre hiérarchique strict',
          content: [
            '1er rang de priorité absolue : Les parenthèses les plus internes, puis les crochets.',
            '2ème rang de priorité : Les multiplications et divisions (traitées de gauche à droite).',
            '3ème rang de priorité : Les additions et soustractions (traitées de gauche à droite).',
            'Attention : Ne jamais changer l\'ordre des termes sans raison rigoureuse.'
          ]
        },
        {
          subtitle: 'B. Rôle de la barre de fraction',
          content: [
            'Une barre de fraction sépare un numérateur global d\'un dénominateur global.',
            'Exemple : (40 - 4) / (5 + 4) équivaut mathématiquement à (40 - 4) ÷ (5 + 4) = 36 ÷ 9 = 4.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Calculs sans parenthèses',
          content: [
            'Énoncé : Calculer en détaillant chaque étape intermédiaire :',
            'A = 35 - 5 × 4 + 18 ÷ 3',
            'B = 48 ÷ 6 ÷ 2 × 5',
            'Corrigé détaillé :',
            '• Pour A : Les opérations prioritaires sont 5 × 4 = 20 et 18 ÷ 3 = 6.',
            '  A = 35 - 20 + 6. On applique la règle de gauche à droite : 35 - 20 = 15, puis 15 + 6 = 21. Conclusion : A = 21.',
            '• Pour B : Il n\'y a que des divisions et multiplications, on calcule de gauche à droite :',
            '  48 ÷ 6 = 8 ; puis 8 ÷ 2 = 4 ; enfin 4 × 5 = 20. Conclusion : B = 20.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Calculs avec parenthèses et crochets imbriqués',
          content: [
            'Énoncé : Calculer les expressions suivantes :',
            'C = 5 × (17 - 3 × 4) + 12',
            'D = 100 - [ 4 × (15 - 8) + (18 - 6 ÷ 2) ]',
            'Corrigé détaillé :',
            '• Pour C : Dans la parenthèse, la multiplication prime : 3 × 4 = 12. Donc (17 - 12) = 5.',
            '  Puis la multiplication prime sur l\'addition : 5 × 5 = 25. Enfin 25 + 12 = 37. Conclusion : C = 37.',
            '• Pour D : Parenthèse 1 : 15 - 8 = 7. Parenthèse 2 : 6 ÷ 2 = 3 donc 18 - 3 = 15.',
            '  Crochet : 4 × 7 + 15 = 28 + 15 = 43. Final : 100 - 43 = 57. Conclusion : D = 57.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Traduction de phrases en expressions mathématiques',
          content: [
            'Énoncé : Écrire une expression correspondant à chaque phrase, puis la calculer :',
            '1. Le produit de 7 par la somme de 9 et de 3.',
            '2. La différence entre 50 et le quotient de 36 par 4.',
            'Corrigé détaillé :',
            '1. Le produit de 7 par une somme s\'écrit avec des parenthèses : P = 7 × (9 + 3).',
            '   Calcul : P = 7 × 12 = 84.',
            '2. La différence entre 50 et un quotient s\'écrit : Q = 50 - (36 ÷ 4) ou 50 - 36 ÷ 4.',
            '   Calcul : Q = 50 - 9 = 41.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Problème concret de la vie courante',
          content: [
            'Énoncé : Aminata achète pour la rentrée scolaire 4 cahiers à 650 FCFA l\'un, 3 stylos à 150 FCFA l\'un et une calculatrice à 4 500 FCFA. Elle donne un billet de 10 000 FCFA à la caissière.',
            '1. Écrire en une seule ligne une expression permettant de calculer la monnaie rendue.',
            '2. Calculer le montant exact rendu à Aminata.',
            'Corrigé détaillé :',
            '1. Expression unique : M = 10 000 - (4 × 650 + 3 × 150 + 4 500).',
            '2. Calcul des montants intérieurs prioritaires :',
            '   4 × 650 = 2 600 FCFA ; 3 × 150 = 450 FCFA.',
            '   Total des achats = 2 600 + 450 + 4 500 = 7 550 FCFA.',
            '   Monnaie rendue M = 10 000 - 7 550 = 2 450 FCFA. Aminata reçoit 2 450 FCFA.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse des priorités opératoires',
    root: 'Enchaînement d\'opérations',
    branches: [
      {
        name: 'Parenthèses & Crochets',
        subtitle: 'Priorité absolue',
        items: ['Parenthèses les plus intérieures', 'Barre de fraction = parenthèses']
      },
      {
        name: 'Multiplication & Division',
        subtitle: 'Priorité de rang 2',
        items: ['Priment sur + et -', 'Calculées de gauche à droite si en série']
      },
      {
        name: 'Addition & Soustraction',
        subtitle: 'Dernier rang de calcul',
        items: ['Calculées en dernier', 'Calcul de gauche à droite']
      }
    ]
  },
  conclusion:
    "La maîtrise absolue des priorités opératoires est la condition préalable à toute réussite dans les calculs algébriques, le calcul littéral et la résolution d'équations. Un calcul bien posé et mené ligne par ligne assure une parfaite justesse mathématique."
};

// -------------------------------------------------------------------------
// LEÇON 2 : MULTIPLES, DIVISEURS ET NOMBRES PREMIERS
// -------------------------------------------------------------------------
export const LESSON_2_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-2',
  number: 'Leçon 2',
  title: 'Multiples, diviseurs et nombres premiers',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "L'arithmétique élémentaire s'intéresse aux propriétés des nombres entiers naturels. Comprendre les relations de divisibilité et décomposer les nombres en briques élémentaires — les nombres premiers — est au cœur de nombreuses applications : simplification rapide des fractions, calculs de périodicité, cryptographie moderne et sécurité des données numériques.",
  fullText: `Leçon 2 : Multiples, diviseurs et nombres premiers

Introduction :
L'arithmétique élémentaire s'intéresse aux propriétés des nombres entiers naturels. Comprendre les relations de divisibilité et savoir décomposer les nombres en nombres premiers permet de maîtriser la simplification des fractions et la recherche de dénominateurs communs.

1. Définitions : Multiple et Diviseur
Soient a et b deux nombres entiers naturels avec b ≠ 0.
On dit que a est un multiple de b, ou que b est un diviseur de a, ou que a est divisible par b si le reste de la division euclidienne de a par b est égal à 0.
Autrement dit, il existe un entier naturel k tel que :
a = b × k.
Exemple :
72 = 8 × 9 = 8 × 9 + 0.
Donc 72 est un multiple de 8 et de 9. Inversement, 8 et 9 sont des diviseurs de 72.

2. Critères de divisibilité indispensables
Pour déterminer rapidement si un entier est divisible par les premiers nombres sans poser la division euclidienne :
• Par 2 : Le chiffre des unités est pair (0, 2, 4, 6 ou 8).
• Par 5 : Le chiffre des unités est 0 ou 5.
• Par 10 : Le chiffre des unités est 0.
• Par 3 : La somme de tous les chiffres de son écriture décimale est un multiple de 3 (ex: 423 ➔ 4 + 2 + 3 = 9, multiple de 3, donc 423 est divisible par 3).
• Par 9 : La somme de tous ses chiffres est un multiple de 9 (ex: 7 839 ➔ 7 + 8 + 3 + 9 = 27 = 3 × 9, donc 7 839 est divisible par 9).
• Par 4 : Le nombre formé par ses deux derniers chiffres est un multiple de 4 (ex: 3 524 ➔ 24 = 4 × 6, donc 3 524 est divisible par 4).

3. Nombres premiers
Définition : Un nombre entier naturel est dit premier s'il possède exactement deux diviseurs distincts : 1 et lui-même.
Remarques fondamentales :
- Le nombre 0 n'est pas premier (il possède une infinité de diviseurs).
- Le nombre 1 n'est PAS un nombre premier car il ne possède qu'un seul diviseur (lui-même).
- Le nombre 2 est le SEUL nombre premier pair de l'ensemble des entiers ! Tous les autres nombres pairs supérieurs à 2 sont divisibles par 2.
Liste des premiers nombres premiers inférieurs à 30 :
2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

4. Décomposition en produit de facteurs premiers
Théorème fondamental de l'arithmétique :
Tout entier naturel supérieur ou égal à 2 peut s'écrire de façon unique (à l'ordre des facteurs près) sous la forme d'un produit de facteurs premiers.
Méthode pratique de décomposition :
On divise successivement le nombre par les plus petits nombres premiers possibles (2, puis 3, puis 5, 7...) jusqu'à obtenir un quotient égal à 1.
Exemple pour 60 :
60 ÷ 2 = 30
30 ÷ 2 = 15
15 ÷ 3 = 5
5 ÷ 5 = 1
Donc : 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.`,
  sections: [
    {
      title: '1. Divisibilité et décomposition en facteurs premiers',
      subsections: [
        {
          subtitle: 'A. Tableau des critères de divisibilité',
          content: [
            'Divisible par 2 : chiffre des unités 0, 2, 4, 6, 8.',
            'Divisible par 3 : somme des chiffres = multiple de 3.',
            'Divisible par 4 : les deux derniers chiffres forment un multiple de 4.',
            'Divisible par 5 : chiffre des unités 0 ou 5.',
            'Divisible par 9 : somme des chiffres = multiple de 9.',
            'Divisible par 10 : chiffre des unités 0.'
          ]
        },
        {
          subtitle: 'B. Utilité pour la simplification de fractions',
          content: [
            'Décomposer le numérateur et le dénominateur permet de simplifier au maximum les facteurs communs en une seule étape.',
            'Exemple : 60 / 84 = (2² × 3 × 5) / (2² × 3 × 7) = 5 / 7 (fraction irréductible).'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Application des critères de divisibilité',
          content: [
            'Énoncé : Parmi les nombres 360, 525, 412, 1 233 :',
            '1. Lesquels sont divisibles par 2 ?',
            '2. Lesquels sont divisibles par 3 ?',
            '3. Lesquels sont divisibles par 5 ?',
            '4. Lesquels sont divisibles par 9 ?',
            'Corrigé détaillé :',
            '1. Divisibles par 2 (terminent par un chiffre pair) : 360 (se termine par 0) et 412 (se termine par 2).',
            '2. Divisibles par 3 (somme des chiffres) :',
            '   • 360 : 3 + 6 + 0 = 9 (oui) ; • 525 : 5 + 2 + 5 = 12 (oui) ; • 412 : 4 + 1 + 2 = 7 (non) ; • 1 233 : 1 + 2 + 3 + 3 = 9 (oui).',
            '   Sont divisibles par 3 : 360, 525 et 1 233.',
            '3. Divisibles par 5 (terminent par 0 ou 5) : 360 et 525.',
            '4. Divisibles par 9 (somme multiple de 9) : 360 (somme = 9) et 1 233 (somme = 9).'
          ]
        },
        {
          subtitle: 'Exercice 2 : Test de primalité sur des nombres entiers',
          content: [
            'Énoncé : Les nombres 51, 97, 87 et 47 sont-ils premiers ? Justifier chaque réponse.',
            'Corrigé détaillé :',
            '• 51 : 5 + 1 = 6, multiple de 3. 51 = 3 × 17. Il possède 1, 3, 17, 51 comme diviseurs : 51 n\'est PAS premier.',
            '• 87 : 8 + 7 = 15, multiple de 3. 87 = 3 × 29 : 87 n\'est PAS premier.',
            '• 47 : N\'est pas divisible par 2, ni par 3 (4+7=11), ni par 5 (termine par 7), ni par 7 (47 = 7 × 6 + 5). Comme 7² = 49 > 47, le test s\'arrête : 47 EST un nombre premier.',
            '• 97 : N\'est divisible ni par 2, ni par 3 (9+7=16), ni par 5, ni par 7 (97 = 7 × 13 + 6). Comme 11² = 121 > 97, 97 EST un nombre premier.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Décomposition en produit de facteurs premiers',
          content: [
            'Énoncé : Décomposer en produit de facteurs premiers les nombres 84 et 180.',
            'En déduire la forme irréductible de la fraction 84 / 180.',
            'Corrigé détaillé :',
            '• Décomposition de 84 :',
            '  84 ÷ 2 = 42 ; 42 ÷ 2 = 21 ; 21 ÷ 3 = 7 ; 7 ÷ 7 = 1.',
            '  Donc 84 = 2² × 3 × 7.',
            '• Décomposition de 180 :',
            '  180 ÷ 2 = 90 ; 90 ÷ 2 = 45 ; 45 ÷ 3 = 15 ; 15 ÷ 3 = 5 ; 5 ÷ 5 = 1.',
            '  Donc 180 = 2² × 3² × 5.',
            '• Simplification de la fraction 84 / 180 :',
            '  84 / 180 = (2² × 3 × 7) / (2² × 3² × 5).',
            '  On simplifie par 2² et par 3 : il reste 7 au numérateur et (3 × 5) = 15 au dénominateur.',
            '  La fraction irréductible est 7 / 15.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Problème de répartition équitable (Diviseur commun)',
          content: [
            'Énoncé : Un confiseur prépare 72 chocolats noirs et 108 bonbons à la menthe. Il souhaite confectionner le plus grand nombre de sachets identiques contenant chacun le même nombre de chocolats et de bonbons, sans qu\'il n\'en reste aucun.',
            '1. Combien de sachets au maximum peut-il préparer ?',
            '2. Quelle sera la composition de chaque sachet ?',
            'Corrigé détaillé :',
            '1. Le nombre de sachets doit être un diviseur commun à 72 et 108, et le plus grand possible (PGCD).',
            '   Décompositions : 72 = 2³ × 3² et 108 = 2² × 3³.',
            '   Les facteurs premiers communs aux plus petits exposants sont : 2² × 3² = 4 × 9 = 36.',
            '   Le confiseur peut préparer au maximum 36 sachets identiques.',
            '2. Composition de chaque sachet :',
            '   Chocolats noirs par sachet : 72 ÷ 36 = 2 chocolats.',
            '   Bonbons à la menthe par sachet : 108 ÷ 36 = 3 bonbons.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Arbre des diviseurs et nombres premiers',
    root: 'Arithmétique entière',
    branches: [
      {
        name: 'Critères de divisibilité',
        subtitle: 'Tests rapides',
        items: ['Par 2, 5, 10 : chiffre des unités', 'Par 3 et 9 : somme des chiffres', 'Par 4 : deux derniers chiffres']
      },
      {
        name: 'Nombres premiers',
        subtitle: 'Briques élémentaires',
        items: ['Exactement 2 diviseurs (1 et lui-même)', '2, 3, 5, 7, 11, 13, 17, 19, 23...', '1 n\'est pas premier']
      },
      {
        name: 'Décomposition',
        subtitle: 'Produit unique',
        items: ['Divisions successives ordonnées', 'Permet de rendre les fractions irréductibles']
      }
    ]
  },
  conclusion:
    "Les nombres premiers sont les constituants fondamentaux des entiers naturels. La décomposition d'un nombre en produit de facteurs premiers est l'outil mathématique par excellence pour simplifier toute fraction et résoudre les problèmes de partage équitable."
};

// -------------------------------------------------------------------------
// LEÇON 3 : ÉCRITURES FRACTIONNAIRES
// -------------------------------------------------------------------------
export const LESSON_3_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-3',
  number: 'Leçon 3',
  title: 'Écritures fractionnaires',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "Une fraction représente le quotient exact de deux entiers naturels. En classe de 5ème, l'élève approfondit le maniement des écritures fractionnaires : propriété d'égalité fondamentale, simplification systématique, addition et soustraction nécessitant la mise au même dénominateur, et multiplication directe des numérateurs et dénominateurs.",
  fullText: `Leçon 3 : Écritures fractionnaires

Introduction :
Une fraction a/b (avec b ≠ 0) représente le quotient exact de deux entiers. Maîtriser les fractions est une compétence transversale capitale pour les sciences, la géométrie, la proportionnalité et les probabilités.

1. Égalité de fractions et simplification
Règle fondamentale :
On ne modifie pas la valeur d'une fraction en multipliant ou en divisant son numérateur et son dénominateur par un MÊME nombre non nul k :
a / b = (a × k) / (b × k)   et   a / b = (a ÷ k) / (b ÷ k).
• Simplification : Rendre une fraction irréductible consiste à diviser le numérateur et le dénominateur par leurs diviseurs communs jusqu'à ce qu'ils n'aient plus que 1 comme diviseur commun.
Exemple : 48 / 36 = (48 ÷ 12) / (36 ÷ 12) = 4 / 3.

2. Addition et soustraction de fractions
Règle 1 : Fractions ayant déjà le MÊME dénominateur
Pour additionner ou soustraire deux fractions ayant le même dénominateur :
1. On additionne ou on soustrait uniquement les numérateurs entre eux.
2. On CONSERVE strictement le dénominateur commun (interdiction absolue de sommer les dénominateurs !).
Formule : a/d + c/d = (a + c)/d   et   a/d - c/d = (a - c)/d.
Exemple : 7/11 + 5/11 = (7 + 5)/11 = 12/11.

Règle 2 : Fractions ayant des dénominateurs différents
Pour additionner ou soustraire deux fractions n'ayant pas le même dénominateur, on doit OBLIGATOIREMENT les réduire au même dénominateur avant d'appliquer la règle 1.
Cas fréquent en 5ème : L'un des dénominateurs est un multiple de l'autre.
Exemple : Calculer S = 3/4 + 5/12.
Le nombre 12 est un multiple de 4 (12 = 4 × 3).
On transforme la première fraction : 3/4 = (3 × 3) / (4 × 3) = 9/12.
Alors : S = 9/12 + 5/12 = (9 + 5)/12 = 14/12 = 7/6 (après simplification par 2).

3. Multiplication de fractions
Règle universelle de la multiplication :
Pour multiplier deux fractions entre elles, on multiplie les numérateurs entre eux et les dénominateurs entre eux :
(a / b) × (c / d) = (a × c) / (b × d).
Conseil méthodologique impératif :
Avant d'effectuer les multiplications des nombres qui peuvent être volumineux, il faut impérativement simplifier les facteurs communs au numérateur et au dénominateur !
Exemple :
P = (15 / 14) × (21 / 25)
On décompose les facteurs : 15 = 3 × 5 ; 14 = 2 × 7 ; 21 = 3 × 7 ; 25 = 5 × 5.
P = (3 × 5 × 3 × 7) / (2 × 7 × 5 × 5).
On simplifie par 5 et par 7 :
P = (3 × 3) / (2 × 5) = 9 / 10.`,
  sections: [
    {
      title: '1. Règles opératoires complètes sur les fractions',
      subsections: [
        {
          subtitle: 'A. Synthèse des trois opérations fondamentales',
          content: [
            '• Égalité / Simplification : a/b = (a × k)/(b × k) et a/b = (a ÷ k)/(b ÷ k).',
            '• Addition / Soustraction : Réduction obligatoire au même dénominateur commun.',
            '• Multiplication : (a/b) × (c/d) = (a × c)/(b × d). Jamais besoin de dénominateur commun pour multiplier !'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Simplification et fractions irréductibles',
          content: [
            'Énoncé : Simplifier au maximum les fractions suivantes pour les rendre irréductibles :',
            'A = 42 / 70 ; B = 108 / 144 ; C = 45 / 105.',
            'Corrigé détaillé :',
            '• Pour A = 42 / 70 : Les deux nombres sont divisibles par 7 : 42 ÷ 7 = 6 et 70 ÷ 7 = 10.',
            '  Puis 6 et 10 sont divisibles par 2 : 6 ÷ 2 = 3 et 10 ÷ 2 = 5. Conclusion : A = 3/5.',
            '• Pour B = 108 / 144 : Décompositions : 108 = 36 × 3 et 144 = 36 × 4. En divisant par 36 : B = 3/4.',
            '• Pour C = 45 / 105 : Divisibles par 5 : 45 ÷ 5 = 9 et 105 ÷ 5 = 21. Divisibles par 3 : 9 ÷ 3 = 3 et 21 ÷ 3 = 7. Conclusion : C = 3/7.'
          ]
        },
        {
          subtitle: 'Exercice 2 : Additions et soustractions avec mise au même dénominateur',
          content: [
            'Énoncé : Calculer et donner le résultat sous forme de fraction simplifiée :',
            'D = 5/6 + 7/18 ; E = 3/2 - 5/8 ; F = 2 - 3/7.',
            'Corrigé détaillé :',
            '• Pour D : 18 est multiple de 6 (18 = 6 × 3). On multiplie haut et bas de 5/6 par 3 : 5/6 = 15/18.',
            '  D = 15/18 + 7/18 = (15 + 7)/18 = 22/18. On simplifie par 2 : D = 11/9.',
            '• Pour E : 8 est multiple de 2 (8 = 2 × 4) : 3/2 = 12/8.',
            '  E = 12/8 - 5/8 = 7/8. Conclusion : E = 7/8.',
            '• Pour F : On écrit l\'entier 2 sous forme fractionnaire 2/1. Dénominateur commun = 7 : 2/1 = 14/7.',
            '  F = 14/7 - 3/7 = 11/7. Conclusion : F = 11/7.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Multiplications de fractions avec simplification préalable',
          content: [
            'Énoncé : Calculer les produits suivants en simplifiant avant d\'effectuer les multiplications :',
            'G = (14 / 15) × (25 / 21) ; H = (9 / 8) × (16 / 27).',
            'Corrigé détaillé :',
            '• Pour G : On décompose :',
            '  G = (14 × 25) / (15 × 21) = (2 × 7 × 5 × 5) / (3 × 5 × 3 × 7).',
            '  On simplifie par 7 et par 5 : au numérateur il reste (2 × 5) = 10, au dénominateur il reste (3 × 3) = 9.',
            '  Conclusion : G = 10/9.',
            '• Pour H : On décompose :',
            '  H = (9 × 16) / (8 × 27) = (9 × 8 × 2) / (8 × 9 × 3).',
            '  On simplifie par 9 et par 8 : il reste 2/3. Conclusion : H = 2/3.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Problème concret de partage fractionnaire',
          content: [
            'Énoncé : Dans un collège, 2/5 des élèves viennent à pied, 1/3 viennent en bus et le reste des élèves se déplace à bicyclette.',
            '1. Quelle fraction du total des élèves représente ceux qui viennent soit à pied soit en bus ?',
            '2. Quelle fraction représente les élèves se déplaçant à bicyclette ?',
            '3. Sachant que le collège compte 600 élèves, calculer le nombre exact d\'élèves venant à bicyclette.',
            'Corrigé détaillé :',
            '1. Fraction pied + bus : S = 2/5 + 1/3. Dénominateur commun = 15.',
            '   2/5 = 6/15 et 1/3 = 5/15. S = 6/15 + 5/15 = 11/15 des élèves.',
            '2. Fraction des cyclistes : Le total représente 1 (soit 15/15).',
            '   Reste = 1 - 11/15 = 15/15 - 11/15 = 4/15 des élèves.',
            '3. Nombre d\'élèves à bicyclette : 600 × (4/15) = (600 ÷ 15) × 4 = 40 × 4 = 160 élèves.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse des opérations sur les fractions',
    root: 'Écritures fractionnaires',
    branches: [
      {
        name: 'Égalité & Simplification',
        subtitle: 'Règle fondamentale',
        items: ['Multiplier ou diviser haut et bas par k ≠ 0', 'Rendre irréductible grâce au PGCD']
      },
      {
        name: 'Addition & Soustraction',
        subtitle: 'Dénominateur identique obligatoire',
        items: ['Même dénominateur : sommer numérateurs', 'Dénominateurs différents : chercher le PPCM']
      },
      {
        name: 'Multiplication',
        subtitle: 'Directe et sans dénominateur commun',
        items: ['Numérateur × Numérateur', 'Dénominateur × Dénominateur', 'Simplifier avant de multiplier !']
      }
    ]
  },
  conclusion:
    "La maîtrise des écritures fractionnaires repose sur un réflexe fondamental : ne jamais additionner de dénominateurs, toujours réduire au même dénominateur pour une addition ou soustraction, et simplifier les facteurs communs avant toute multiplication."
};

// -------------------------------------------------------------------------
// LEÇON 4 : NOMBRES RELATIFS
// -------------------------------------------------------------------------
export const LESSON_4_MATH_5EME: LessonContent = {
  id: 'math-5eme-lecon-4',
  number: 'Leçon 4',
  title: 'Nombres relatifs',
  subject: 'Mathématiques',
  classLevel: '5ème',
  introduction:
    "L'introduction des nombres relatifs permet de surmonter l'impossibilité de soustraire un nombre plus grand d'un nombre plus petit. Utilisés pour exprimer des températures au-dessous de zéro, des profondeurs sous le niveau de la mer, des dates avant J.-C. ou des soldes bancaires déficitaires, les nombres relatifs forment l'ensemble des entiers et décimaux relatifs, caractérisés par un signe et une distance à zéro.",
  fullText: `Leçon 4 : Nombres relatifs

Introduction :
L'introduction des nombres relatifs permet de surmonter l'impossibilité de soustraire un nombre plus grand d'un nombre plus petit. Utilisés pour exprimer des températures au-dessous de zéro, des profondeurs sous le niveau de la mer, des dates avant J.-C. ou des soldes bancaires déficitaires, les nombres relatifs forment l'ensemble des entiers et décimaux relatifs, caractérisés par un signe et une distance à zéro.

1. Définition et repérage sur une droite graduée
Un nombre relatif est formé de deux éléments :
- Un signe : '+' pour les nombres positifs (généralement omis, ex: +7 = 7) et '-' pour les nombres négatifs (ex: -5).
- Une valeur numérique appelée distance à zéro (ou valeur absolue) : distance séparant le point de l'origine 0.
Deux nombres relatifs ayant la même distance à zéro mais des signes contraires sont dits opposés (ex: +6 et -6).
• Repérage sur la droite graduée :
Chaque point de la droite graduée est repéré par un nombre relatif appelé son abscisse. L'origine O a pour abscisse 0.

2. Comparaison des nombres relatifs
• Règle 1 : Tout nombre positif est strictement supérieur à tout nombre négatif.
  Exemples : +2 > -10 ; 0 > -4 ; +0,1 > -100.
• Règle 2 : De deux nombres positifs, le plus grand est celui qui a la plus grande distance à zéro (+8 > +5).
• Règle 3 : De deux nombres négatifs, le plus grand est celui qui a la PLUS PETITE distance à zéro (celui qui est le plus proche de zéro sur la droite graduée).
  Exemples : -2 > -7 ; -0,5 > -3 ; -15 < -4.

3. Addition de deux nombres relatifs
• Règle 1 : Deux nombres de MÊME signe
  1. On conserve le signe commun.
  2. On additionne leurs distances à zéro.
  Exemples : (+4) + (+9) = +13 ; (-6) + (-8) = -14.
• Règle 2 : Deux nombres de SIGNES CONTRAIRES
  1. On prend le signe du nombre qui a la plus grande distance à zéro.
  2. On soustrait la plus petite distance à zéro de la plus grande.
  Exemples :
  (-9) + (+4) : 9 > 4 donc signe '-', et 9 - 4 = 5 ➔ résultat = -5.
  (+15) + (-8) : 15 > 8 donc signe '+', et 15 - 8 = 7 ➔ résultat = +7.
• Propriété des opposés : La somme de deux nombres opposés est égale à zéro : (+a) + (-a) = 0.

4. Soustraction de deux nombres relatifs
Règle fondamentale :
Soustraire un nombre relatif revient à AJOUTER son opposé mathématique :
a - b = a + (opposé de b).
Exemples :
• (+5) - (+8) = (+5) + (-8) = -3.
• (-7) - (-10) = (-7) + (+10) = +3.
• (+4) - (-6) = (+4) + (+6) = +10.
• (-12) - (+5) = (-12) + (-5) = -17.`,
  sections: [
    {
      title: '1. Repérage, comparaison et règles d\'addition/soustraction',
      image: {
        url: SVG_MATH5_FIG_RELATIFS,
        alt: 'Figure : Droite graduée, abscisses relatives et distance à zéro',
        caption:
          'Repérage sur la droite graduée : l\'origine O(0) sépare les négatifs à gauche des positifs à droite. Deux opposés (+3 et -3) sont situés à égale distance de l\'origine O.'
      },
      subsections: [
        {
          subtitle: 'A. Ordre et droite graduée',
          content: [
            'Sur un axe orienté vers la droite, un nombre situé à droite d\'un autre est toujours supérieur.',
            'Pour les négatifs, plus on s\'éloigne de zéro vers la gauche, plus le nombre diminue : -10 < -2 < 0 < +3.'
          ]
        },
        {
          subtitle: 'B. Règle clé de la soustraction',
          content: [
            'Soustraire = ajouter l\'opposé : a - (+b) = a + (-b) et a - (-b) = a + (+b).',
            'Cette règle transforme toute soustraction en addition de nombres relatifs.'
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application résolus pas-à-pas (4 exercices)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Repérage et comparaison de nombres relatifs',
          content: [
            'Énoncé :',
            '1. Ranger par ordre croissant les nombres suivants : -7 ; +4,5 ; -1,5 ; 0 ; -8 ; +5 ; -0,5.',
            '2. Compléter par < ou > : a) -12 ... -15 ; b) +3,2 ... -8,9 ; c) -4,1 ... -4,05.',
            'Corrigé détaillé :',
            '1. Les nombres négatifs ordonnés par distance à zéro décroissante, puis 0, puis les positifs :',
            '   -8 < -7 < -1,5 < -0,5 < 0 < +4,5 < +5.',
            '2. Comparaisons :',
            '   a) -12 > -15 (12 < 15, donc le plus proche de 0 est -12).',
            '   b) +3,2 > -8,9 (positif > négatif).',
            '   c) -4,1 < -4,05 (4,10 > 4,05, donc -4,1 est plus éloigné de zéro).'
          ]
        },
        {
          subtitle: 'Exercice 2 : Additions de nombres relatifs',
          content: [
            'Énoncé : Calculer les sommes suivantes :',
            'A = (+14) + (-6) ; B = (-23) + (-17) ; C = (-8,5) + (+15,2) ; D = (+19) + (-19).',
            'Corrigé détaillé :',
            '• Pour A : Signes contraires. 14 > 6 donc signe \'+\', 14 - 6 = 8. A = +8.',
            '• Pour B : Même signe négatif. Signe \'-\', 23 + 17 = 40. B = -40.',
            '• Pour C : Signes contraires. 15,2 > 8,5 donc signe \'+\', 15,2 - 8,5 = 6,7. C = +6,7.',
            '• Pour D : Somme de deux nombres opposés. D = 0.'
          ]
        },
        {
          subtitle: 'Exercice 3 : Soustractions transformées en additions de l\'opposé',
          content: [
            'Énoncé : Effectuer les soustractions suivantes en écrivant explicitement l\'étape de l\'addition de l\'opposé :',
            'E = (+7) - (+15) ; F = (-9) - (-14) ; G = (+8) - (-12) ; H = (-11) - (+6).',
            'Corrigé détaillé :',
            '• E = (+7) + (-15) = -(15 - 7) = -8.',
            '• F = (-9) + (+14) = +(14 - 9) = +5.',
            '• G = (+8) + (+12) = +20.',
            '• H = (-11) + (-6) = -(11 + 6) = -17.'
          ]
        },
        {
          subtitle: 'Exercice 4 : Sommes algébriques complexes',
          content: [
            'Énoncé : Calculer la somme algébrique suivante en simplifiant les écritures :',
            'S = (+12) - (+18) + (-7) - (-15) + (+9) - (+11).',
            'Corrigé détaillé :',
            '• Étape 1 : Transformer toutes les soustractions en additions de l\'opposé :',
            '  S = (+12) + (-18) + (-7) + (+15) + (+9) + (-11).',
            '• Étape 2 : Écriture simplifiée :',
            '  S = 12 - 18 - 7 + 15 + 9 - 11.',
            '• Étape 3 : Regrouper les positifs d\'un côté et les négatifs de l\'autre :',
            '  Positifs = 12 + 15 + 9 = 36.',
            '  Négatifs = -18 - 7 - 11 = -36.',
            '• Étape 4 : Somme finale : S = 36 - 36 = 0.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse des nombres relatifs',
    root: 'Nombres relatifs',
    branches: [
      {
        name: 'Composants',
        subtitle: 'Signe et distance à zéro',
        items: ['Positifs (+ ou implicite)', 'Négatifs (-)', 'Distance à zéro = valeur absolue']
      },
      {
        name: 'Comparaison',
        subtitle: 'Ordre sur l\'axe',
        items: ['Positif > Négatif', 'Entre 2 négatifs : le plus proche de 0 est le plus grand']
      },
      {
        name: 'Opérations',
        subtitle: 'Règles fondamentales',
        items: ['Même signe : sommer distances', 'Signes contraires : soustraire distances', 'Soustraire = ajouter l\'opposé']
      }
    ]
  },
  conclusion:
    "Les nombres relatifs et la conversion systématique de la soustraction en addition de l'opposé forment la passerelle directe vers le calcul littéral et la résolution d'équations algébriques."
};
