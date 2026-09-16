import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 6ÈME
// ACTIVITÉS NUMÉRIQUES — PROGRAMME OFFICIEL EXHAUSTIF
// CHAPITRE II : ÉCRITURES FRACTIONNAIRES (LEÇONS 6 À 8)
// AUCUN RÉSUMÉ, DÉVELOPPEMENT INTÉGRAL, EXEMPLES PAS-À-PAS ET DÉTAILS DE COMPRÉHENSION
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_6_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-6',
  number: 'Leçon 6',
  title: 'Notion de partage global et vocabulaire des fractions',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Depuis les temps les plus reculés, l'être humain a eu besoin de partager des biens : diviser une terre agricole, partager un pain ou répartir un héritage. Lorsque le partage ne tombe pas sur un nombre entier d'unités, les fractions interviennent comme l'outil mathématique par excellence. Cette sixième leçon pose la définition formelle d'une fraction comme quotient de deux entiers, explicite son vocabulaire technique (numérateur, dénominateur, barre de fraction) et détaille les règles de lecture universelles.",
  fullText: `Leçon 6 : Notion de partage global et vocabulaire des fractions

Introduction : Depuis les temps les plus reculés, l'être humain a eu besoin de partager des biens : diviser une terre agricole, partager un pain ou répartir un héritage. Lorsque le partage ne tombe pas sur un nombre entier d'unités, les fractions interviennent comme l'outil mathématique par excellence. Cette sixième leçon pose la définition formelle d'une fraction comme quotient de deux entiers, explicite son vocabulaire technique (numérateur, dénominateur, barre de fraction) et détaille les règles de lecture universelles.

1. Définition mathématique d'une fraction
Une fraction est l'écriture d'un nombre sous la forme d'un quotient de deux nombres entiers. Elle représente une ou plusieurs parties égales d'une unité entière qui a été préalablement partagée.
Une fraction exprime à la fois :
• Un opérateur de partage (prendre 3 parts sur 4).
• Un nombre à part entière (3/4 = 0,75).
• Une opération arithmétique en attente (3 divisé par 4).

2. Le vocabulaire rigoureux
Dans l'écriture formelle d'une fraction a / b (où a et b sont des nombres entiers, avec b strictement différent de zéro car la division par zéro est mathématiquement impossible) :
• a est le NUMÉRATEUR : placé au-dessus, il indique le nombre de parts que l'on sélectionne, que l'on prend ou que l'on colore.
• La ligne horizontale séparatrice est la BARRE DE FRACTION : elle symbolise rigoureusement l'opération de division.
• b est le DÉNOMINATEUR : placé au-dessous, il « dénomme » la nature du partage ; il indique en combien de parts rigoureusement égales l'unité entière a été découpée.

3. Schéma géométrique de partage concret
Imaginons une unité concrète : un disque complet (une tarte ou une galette).
Partageons cette unité en 4 secteurs angulaires rigoureusement identiques (de 90° chacun).
Si nous colorons 3 de ces secteurs, la surface totale colorée est modélisée par la fraction :
3 / 4

Application pratique et analyse :
• Le numérateur est 3 (on a coloré 3 portions).
• Le dénominateur est 4 (le disque entier a été découpé en 4 parts égales).
• Cette fraction se lit oralement : « trois quarts ».

4. Règles officielles de lecture des fractions
La langue française possède des termes spécifiques pour les petits dénominateurs :
• Dénominateur 2 : se lit « demi » (ex: 1/2 = un demi ; 3/2 = trois demis).
• Dénominateur 3 : se lit « tiers » (ex: 1/3 = un tiers ; 2/3 = deux tiers).
• Dénominateur 4 : se lit « quart » (ex: 1/4 = un quart ; 3/4 = trois quarts).
Pour tous les autres nombres entiers au dénominateur, on ajoute systématiquement le suffixe « -ième » :
• 2/5 se lit « deux cinquièmes ».
• 7/10 se lit « sept dixièmes ».
• 5/12 se lit « cinq douzièmes ».
• 83/100 se lit « quatre-vingt-trois centièmes ».

Conclusion : En conclusion, la fraction est l'outil fondamental du partage équitable. Maîtriser les rôles respectifs du numérateur (qui compte) et du dénominateur (qui nomme la taille des parts) permet d'aborder avec sérénité toutes les écritures fractionnaires et leurs applications pratiques.` ,
  sections: [
    {
      title: '1. Définition fondamentale de la fraction',
      content: [
        "Une fraction a/b (avec b ≠ 0) exprime une part d'unité découpée :",
        "• Modélise un partage équitable en sous-parties identiques.",
        "• Représente la valeur exacte du quotient de a par b.",
        "• Règle absolue : Le dénominateur b ne peut JAMAIS être nul (on ne peut pas diviser par 0)."
      ]
    },
    {
      title: '2. Anatomie et vocabulaire d\'une fraction',
      content: [
        "Dans l'écriture a / b :",
        "• Numérateur a (en haut) : le nombre de parts prises ou considérées.",
        "• Barre de fraction : le symbole de division mathématique.",
        "• Dénominateur b (en bas) : le nombre total de parts égales qui composent l'unité."
      ],
      table: {
        headers: ['Composant', 'Position', 'Rôle mathématique', 'Exemple dans 3/4'],
        rows: [
          ['Numérateur', 'Au-dessus de la barre', 'Compte le nombre de portions retenues', '3 parts sélectionnées'],
          ['Barre de fraction', 'Au milieu horizontalement', 'Symbolise l\'opération de division', 'Opération 3 ÷ 4'],
          ['Dénominateur', 'Au-dessous de la barre', 'Définit en combien de parts l\'unité est divisée', '4 parts égales au total']
        ]
      }
    },
    {
      title: '3. Représentation géométrique par découpage',
      content: [
        "Exemple du disque ou rectangle partagé :",
        "• Disque partagé en 4 parts égales (quarts) avec 3 parts coloriées ➔ fraction 3/4.",
        "• Rectangle partagé en 5 bandes égales avec 2 bandes coloriées ➔ fraction 2/5.",
        "• Si le numérateur est égal au dénominateur (ex: 4/4), la fraction est égale à 1 (l'unité entière).",
        "• Si le numérateur est plus grand que le dénominateur (ex: 5/4), la fraction est supérieure à 1."
      ]
    },
    {
      title: '4. Nomenclature et conventions de lecture orale',
      content: [
        "Lectures spécifiques indispensables :",
        "• Sur 2 : 'demi' (ex : 1/2 = un demi).",
        "• Sur 3 : 'tiers' (ex : 2/3 = deux tiers).",
        "• Sur 4 : 'quart' (ex : 3/4 = trois quarts).",
        "• Tous les autres (dès 5) : suffixe '-ième' (ex : 4/7 = quatre septièmes ; 9/100 = neuf centièmes)."
      ]
    }
  ],
  diagram: {
    title: 'Anatomie et Vocabulaire des Fractions',
    root: 'FRACTION a / b',
    branches: [
      {
        name: 'Numérateur (Haut)',
        subtitle: 'Quantité choisie',
        items: ['Indique les parts prélevées', 'Exemple : 3 dans 3/4', 'Peut être nul (0/4 = 0)']
      },
      {
        name: 'Barre de Fraction',
        subtitle: 'Opérateur',
        items: ['Trait horizontal rigoureux', 'Équivaut au signe divisé (÷)', 'Valeur numérique = a ÷ b']
      },
      {
        name: 'Dénominateur (Bas)',
        subtitle: 'Taille du découpage',
        items: ['Nombre total de parts égales', 'Strictement non nul (b ≠ 0)', 'Lectures : demi, tiers, quart, -ième']
      }
    ]
  },
  conclusion:
    "En conclusion, la fraction est l'outil fondamental du partage équitable. Maîtriser les rôles respectifs du numérateur (qui compte) et du dénominateur (qui nomme la taille des parts) permet d'aborder avec sérénité toutes les écritures fractionnaires et leurs applications pratiques."
};

export const LESSON_7_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-7',
  number: 'Leçon 7',
  title: 'Fractions décimales et passages à l\'écriture à virgule',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Les fractions décimales constituent le pont mathématique naturel et immédiat entre le monde des fractions et celui des nombres à virgule. Alors qu'une fraction ordinaire peut avoir un dénominateur quelconque (comme 7 ou 13), les fractions décimales ont la particularité remarquable d'avoir pour dénominateur une puissance de dix. Cette septième leçon expose les mécanismes de passage instantané entre fraction décimale et nombre à virgule dans les deux sens.",
  fullText: `Leçon 7 : Fractions décimales et passages à l'écriture à virgule

Introduction : Les fractions décimales constituent le pont mathématique naturel et immédiat entre le monde des fractions et celui des nombres à virgule. Alors qu'une fraction ordinaire peut avoir un dénominateur quelconque (comme 7 ou 13), les fractions décimales ont la particularité remarquable d'avoir pour dénominateur une puissance de dix. Cette septième leçon expose les mécanismes de passage instantané entre fraction décimale et nombre à virgule dans les deux sens.

1. Qu'est-ce qu'une fraction décimale ?
Une fraction décimale est une fraction particulière dont le dénominateur est égal à 10, 100, 1 000, 10 000, etc. (c'est-à-dire le chiffre 1 suivi exclusivement d'un ou plusieurs zéros, ce qu'on appelle une puissance de 10).
Elle permet d'établir un lien direct, parfait et réversible avec les nombres décimaux à virgule.

2. Règle opératoire de conversion d'une fraction décimale en nombre décimal
Pour transformer une fraction décimale en écriture décimale courante (avec virgule) :
1. On écrit d'abord l'intégralité du numérateur sans modification.
2. On déplace la virgule vers la gauche d'autant de chiffres qu'il y a de zéros au dénominateur :
   - Dénominateur 10 (1 zéro) ➔ 1 chiffre après la virgule.
   - Dénominateur 100 (2 zéros) ➔ 2 chiffres après la virgule.
   - Dénominateur 1 000 (3 zéros) ➔ 3 chiffres après la virgule.
3. Si le numérateur ne comporte pas assez de chiffres pour décaler la virgule, on insère autant de zéros de positionnement que nécessaire à gauche.

3. Exemples mathématiques riches
Étudions trois cas de figures fondamentaux de conversion directe :
• Exemple A (Dixièmes) :
  35 / 10 = 3,5
  Explication : Le dénominateur 10 possède 1 seul zéro. On place la virgule de façon à avoir 1 chiffre après la virgule.
• Exemple B (Centièmes) :
  4 721 / 100 = 47,21
  Explication : Le dénominateur 100 possède 2 zéros. On décale de 2 rangs vers la gauche depuis la droite.
• Exemple C (Millièmes avec ajout obligatoire de zéros) :
  9 / 1 000 = 0,009
  Explication : Le dénominateur 1 000 possède 3 zéros. On doit donc obtenir 3 chiffres après la virgule. Comme le numérateur 9 n'a qu'un seul chiffre, on ajoute des zéros devant : 0,009.
  Autre exemple : 25 / 1 000 = 0,025.

4. L'opération inverse : Passer de la virgule à la fraction décimale
Pour écrire n'importe quel nombre décimal sous forme de fraction décimale :
1. Au numérateur : on recopie tous les chiffres du nombre en supprimant la virgule (et les zéros inutiles de tête).
2. Au dénominateur : on inscrit le chiffre 1, immédiatement suivi d'autant de zéros qu'il y avait de chiffres après la virgule dans le nombre initial.
Exemples concrets :
• 12,854 = 12 854 / 1 000 (car 12,854 possède 3 chiffres après la virgule ➔ 3 zéros au dénominateur).
• 0,47 = 47 / 100 (2 chiffres après la virgule ➔ 2 zéros).
• 6,8 = 68 / 10 (1 chiffre après la virgule ➔ 1 zéro).
• 0,003 = 3 / 1 000 (3 chiffres après la virgule ➔ 3 zéros).

Conclusion : En conclusion, fractions décimales et nombres à virgule ne sont que deux costumes différents pour un même nombre mathématique. La règle du comptage des zéros garantit une conversion fluide et sans erreur dans les deux sens de lecture.` ,
  sections: [
    {
      title: '1. Définition d\'une fraction décimale',
      content: [
        "• Dénominateur obligatoirement égal à 10, 100, 1 000, 10 000... (puissance de 10).",
        "• Tout nombre à virgule fini peut s'écrire sous forme d'une fraction décimale unique.",
        "• C'est la base mathématique reliant les parts de l'unité au système décimal."
      ]
    },
    {
      title: '2. Règle de transformation fraction décimale ➔ nombre à virgule',
      content: [
        "On compte les zéros du dénominateur pour positionner la virgule :",
        "• / 10 ➔ 1 chiffre après la virgule.",
        "• / 100 ➔ 2 chiffres après la virgule.",
        "• / 1 000 ➔ 3 chiffres après la virgule.",
        "• Si nécessaire, ajouter des zéros à gauche (ex : 7 / 1 000 = 0,007)."
      ],
      table: {
        headers: ['Fraction décimale', 'Nombre de zéros', 'Décalage vers la gauche', 'Écriture décimale à virgule'],
        rows: [
          ['35 / 10', '1 zéro', '1 rang', '3,5'],
          ['4 721 / 100', '2 zéros', '2 rangs', '47,21'],
          ['84 / 100', '2 zéros', '2 rangs', '0,84'],
          ['9 / 1 000', '3 zéros', '3 rangs (avec zéros ajoutés)', '0,009'],
          ['125 / 10 000', '4 zéros', '4 rangs', '0,0125']
        ]
      }
    },
    {
      title: '3. Règle réciproque : Nombre à virgule ➔ fraction décimale',
      content: [
        "Pour convertir l'écriture décimale en fraction :",
        "• Numérateur = le nombre entier débarrassé de sa virgule.",
        "• Dénominateur = 1 suivi d'autant de zéros qu'il y avait de décimales.",
        "• Exemple officiel : 12,854 possède 3 décimales ➔ 12 854 / 1 000.",
        "• Exemple 2 : 0,05 possède 2 décimales ➔ 5 / 100."
      ]
    },
    {
      title: '4. Pièges fréquents à déjouer',
      content: [
        "• Erreur classique : Écrire 9 / 1 000 = 0,9 ou 0,09 au lieu de 0,009. Toujours recompter les chiffres après la virgule !",
        "• Zéros inutiles : Dans 3,50, le zéro de queue est inutile : 3,50 = 350 / 100 = 35 / 10 = 3,5."
      ]
    }
  ],
  diagram: {
    title: 'La Passerelle des Fractions Décimales',
    root: 'FRACTIONS DÉCIMALES ET VIRGULE',
    branches: [
      {
        name: 'Fraction ➔ Virgule',
        subtitle: 'Décalage à gauche',
        items: ['1 zéro (/10) ➔ 1 décimale (35/10 = 3,5)', '2 zéros (/100) ➔ 2 décimales (4721/100 = 47,21)', '3 zéros (/1000) ➔ 3 décimales (9/1000 = 0,009)']
      },
      {
        name: 'Virgule ➔ Fraction',
        subtitle: 'Comptage inverse',
        items: ['Numérateur sans virgule (12,854 ➔ 12854)', 'Dénominateur : 1 + nb de zéros', '12,854 = 12854 / 1000']
      },
      {
        name: 'Vérification Clé',
        subtitle: 'Équivalence parfaite',
        items: ['Nombre de zéros = Nombre de chiffres après la virgule', 'Pas de perte d\'information', 'Réversibilité absolue']
      }
    ]
  },
  conclusion:
    "En conclusion, fractions décimales et nombres à virgule ne sont que deux costumes différents pour un même nombre mathématique. La règle du comptage des zéros garantit une conversion fluide et sans erreur dans les deux sens de lecture."
};

export const LESSON_8_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-8',
  number: 'Leçon 8',
  title: 'Égalité de fractions et techniques de simplification',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Une même quantité peut être désignée par une multitude de fractions différentes : manger la moitié d'un gâteau revient exactement à en manger deux quarts ou quatre huitièmes. Cette propriété fondamentale des quotients permet de simplifier des écritures complexes ou, au contraire, d'harmoniser des dénominateurs. Cette huitième leçon enseigne la règle d'or de proportionnalité, la simplification méthodique à l'aide des critères de divisibilité jusqu'à la fraction irréductible, et la réduction au même dénominateur.",
  fullText: `Leçon 8 : Égalité de fractions et techniques de simplification

Introduction : Une même quantité peut être désignée par une multitude de fractions différentes : manger la moitié d'un gâteau revient exactement à en manger deux quarts ou quatre huitièmes. Cette propriété fondamentale des quotients permet de simplifier des écritures complexes ou, au contraire, d'harmoniser des dénominateurs. Cette huitième leçon enseigne la règle d'or de proportionnalité, la simplification méthodique à l'aide des critères de divisibilité jusqu'à la fraction irréductible, et la réduction au même dénominateur.

1. Propriété fondamentale des quotients
La valeur d'une fraction ne change absolument pas lorsqu'on MULTIPLIE ou lorsqu'on DIVISE son numérateur et son dénominateur par un même nombre non nul (strictement différent de 0).
Formule mathématique générale :
Pour toute fraction a / b (avec b ≠ 0 et k ≠ 0) :
• Multiplication : (a × k) / (b × k) = a / b
• Division : (a ÷ k) / (b ÷ k) = a / b

2. La Simplification de fraction
Simplifier une fraction signifie trouver une fraction qui lui est strictement égale, mais possédant un numérateur et un dénominateur plus petits (les plus petits entiers possibles).
Pour simplifier :
• On cherche un diviseur commun au numérateur et au dénominateur.
• On s'aide des critères de divisibilité fondamentaux :
  - Par 2 : le nombre se termine par 0, 2, 4, 6 ou 8 (nombres pairs).
  - Par 3 : la somme de tous les chiffres du nombre est un multiple de 3.
  - Par 5 : le nombre se termine par 0 ou 5.
  - Par 9 : la somme de tous les chiffres du nombre est un multiple de 9.
  - Par 10 : le nombre se termine par 0.
• Lorsqu'une fraction ne peut plus du tout être simplifiée (car son numérateur et son dénominateur n'ont plus aucun diviseur commun autre que 1), on dit qu'elle est IRRÉDUCTIBLE.

3. Exemple d'application pas-à-pas de simplification
Simplifions la fraction complexe suivante : 24 / 36.
• Étape 1 : On observe que 24 et 36 sont tous les deux dans la table de 6 (ou divisibles par 2 et par 3). Divisons le haut et le bas par 6 :
  (24 ÷ 6) / (36 ÷ 6) = 4 / 6
• Étape 2 : La fraction 4/6 peut encore être simplifiée, car 4 et 6 sont des nombres pairs. Divisons le numérateur et le dénominateur par 2 :
  (4 ÷ 2) / (6 ÷ 2) = 2 / 3
• Étape 3 : Les nombres 2 et 3 n'ont plus aucun diviseur commun autre que 1. On ne peut plus réduire.
  La fraction 2/3 est donc la forme IRRÉDUCTIBLE de 24/36.
Remarque : Si l'on avait remarqué directement que 24 et 36 sont divisibles par 12 (le plus grand diviseur commun), on aurait obtenu le résultat en une seule étape : (24 ÷ 12) / (36 ÷ 12) = 2 / 3.

4. Usage pour la réduction au même dénominateur
La propriété fondamentale fonctionne également dans le sens de l'agrandissement (multiplication). On l'utilise pour donner à une fraction un dénominateur cible plus grand.
Exemple d'application :
Transformer la fraction 3/5 pour qu'elle ait un dénominateur égal à 20.
• Réflexion : Par quel nombre faut-il multiplier 5 pour obtenir 20 ? Réponse : 20 ÷ 5 = 4.
• On multiplie obligatoirement le numérateur ET le dénominateur par 4 :
  (3 × 4) / (5 × 4) = 12 / 20
On a donc rigoureusement : 3/5 = 12/20.

Conclusion : En conclusion, simplifier ou agrandir une fraction repose sur un principe d'équilibre absolu : toute opération appliquée au numérateur doit l'être identiquement au dénominateur. La fraction irréductible est l'écriture la plus élégante et universelle en mathématiques.` ,
  sections: [
    {
      title: '1. Propriété fondamentale des quotients égaux',
      content: [
        "Règle d'or : On ne change pas la valeur d'une fraction en multipliant ou divisant le numérateur et le dénominateur par le même nombre k (k ≠ 0).",
        "• (a × k) / (b × k) = a / b.",
        "• (a ÷ k) / (b ÷ k) = a / b.",
        "• Attention : Ajouter ou soustraire un même nombre au numérateur et au dénominateur est strictement FAUX !"
      ]
    },
    {
      title: '2. Critères de divisibilité indispensables',
      content: [
        "Outils pour identifier rapidement les diviseurs communs :",
        "• Par 2 : se termine par 0, 2, 4, 6, 8.",
        "• Par 3 : somme des chiffres divisible par 3 (ex: 135 ➔ 1+3+5 = 9 ➔ oui).",
        "• Par 5 : se termine par 0 ou 5.",
        "• Par 9 : somme des chiffres divisible par 9.",
        "• Par 10 : se termine par 0."
      ]
    },
    {
      title: '3. Décomposition pas-à-pas de 24 / 36',
      content: [
        "Procédure complète menant à la fraction irréductible :"
      ],
      table: {
        headers: ['Étape', 'Opération effectuée', 'Fraction obtenue', 'État'],
        rows: [
          ['Départ', 'Fraction brute à simplifier', '24 / 36', 'Réductible'],
          ['Étape 1', 'Division haut et bas par 6', '(24 ÷ 6) / (36 ÷ 6) = 4 / 6', 'Encore simplifiable'],
          ['Étape 2', 'Division haut et bas par 2', '(4 ÷ 2) / (6 ÷ 2) = 2 / 3', 'Fraction irréductible finale']
        ]
      }
    },
    {
      title: '4. Réduction au même dénominateur',
      content: [
        "Opération inverse par multiplication :",
        "• Exemple : Porter 3/5 sur un dénominateur de 20.",
        "• On multiplie par 4 en haut et en bas : (3 × 4) / (5 × 4) = 12 / 20.",
        "• Indispensable pour comparer des fractions ou les additionner."
      ]
    }
  ],
  diagram: {
    title: 'Égalité et Simplification de Fractions',
    root: 'PROPRIÉTÉ FONDAMENTALE',
    branches: [
      {
        name: 'Règle d\'Équilibre',
        subtitle: 'Multiplication / Division',
        items: ['Même facteur k non nul au numérateur et dénominateur', 'Ne jamais utiliser addition ou soustraction', 'Valeur décimale inchangée']
      },
      {
        name: 'Technique de Simplification',
        subtitle: 'Division par diviseurs communs',
        items: ['Utiliser les critères (2, 3, 5, 9, 10)', 'Exemple : 24/36 ➔ 4/6 ➔ 2/3', 'Aboutit à la fraction irréductible']
      },
      {
        name: 'Agrandissement de Dénominateur',
        subtitle: 'Multiplication ordonnée',
        items: ['Trouver le facteur multiplicateur (ex: 20 ÷ 5 = 4)', 'Multiplier en haut et en bas', 'Exemple : 3/5 = 12/20']
      }
    ]
  },
  conclusion:
    "En conclusion, simplifier ou agrandir une fraction repose sur un principe d'équilibre absolu : toute opération appliquée au numérateur doit l'être identiquement au dénominateur. La fraction irréductible est l'écriture la plus élégante et universelle en mathématiques."
};
