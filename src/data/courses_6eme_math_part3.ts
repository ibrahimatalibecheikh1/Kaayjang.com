import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 6ÈME
// ACTIVITÉS NUMÉRIQUES — PROGRAMME OFFICIEL EXHAUSTIF
// CHAPITRE III : LES OPÉRATIONS MATHÉMATIQUES ET TECHNIQUES OPÉRATOIRES (LEÇONS 9 À 12)
// AUCUN RÉSUMÉ, DÉVELOPPEMENT INTÉGRAL, EXEMPLES PAS-À-PAS ET DÉTAILS DE COMPRÉHENSION
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_9_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-9',
  number: 'Leçon 9',
  title: 'L\'addition et la soustraction de nombres décimaux',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "L'addition et la soustraction sont les premières opérations arithmétiques manipulées par les élèves. Lorsqu'on passe des nombres entiers aux nombres décimaux, une nouvelle discipline spatiale devient obligatoire : respecter l'alignement des virgules. Sans cet alignement rigoureux, l'élève risquerait d'additionner des unités avec des centièmes, faussant l'intégralité du calcul. Cette neuvième leçon énonce la règle d'or du calcul posé en colonne, la gestion indispensable des zéros de calcul et décompose une soustraction complexe avec ses retenues.",
  fullText: `Leçon 9 : L'addition et la soustraction de nombres décimaux

Introduction : L'addition et la soustraction sont les premières opérations arithmétiques manipulées par les élèves. Lorsqu'on passe des nombres entiers aux nombres décimaux, une nouvelle discipline spatiale devient obligatoire : respecter l'alignement des virgules. Sans cet alignement rigoureux, l'élève risquerait d'additionner des unités avec des centièmes, faussant l'intégralité du calcul. Cette neuvième leçon énonce la règle d'or du calcul posé en colonne, la gestion indispensable des zéros de calcul et décompose une soustraction complexe avec ses retenues.

1. Règle d'or du calcul posé (En colonne)
Pour poser correctement une addition ou une soustraction de nombres décimaux, il y a une contrainte spatiale absolue : il faut obligatoirement ALIGNER VERTICALEMENT LES VIRGULES.
De cette manière mécanique et infaillible, les chiffres de même rang se superposent parfaitement :
• Les unités sous les unités.
• Les dizaines sous les dizaines.
• Les dixièmes sous les dixièmes.
• Les centièmes sous les centièmes.
La virgule du résultat s'alignera directement sous les virgules des termes de l'opération.

2. Gestion des espaces vides et zéros de calcul
Si les nombres à additionner ou à soustraire ne possèdent pas le même nombre de chiffres après la virgule, il est vivement conseillé (et même obligatoire dans la soustraction) de combler les espaces vides à droite par des ZÉROS DE CALCUL.
Pourquoi ? Parce que dans une soustraction, soustraire un chiffre d'un « vide » conduit presque toujours à une erreur de retenue.
Exemple : Pour calculer 45,2 – 7,85, on réécrit obligatoirement 45,2 sous la forme 45,20 avant de démarrer le calcul en colonne.

3. Exemple d'une soustraction posée détaillée : 45,2 – 7,85
Observons l'alignement mécanique rigoureux et la gestion pas-à-pas des retenues :

       4 5 , 2 0
   –   0 7 , 8 5
   —————————————
   =   3 7 , 3 5

Explication exhaustive des étapes :
• Étape 1 (Préparation) : On ajoute un 0 de calcul à 45,2 pour obtenir 45,20. On aligne les virgules.
• Étape 2 (Colonne des centièmes) : « 0 moins 5 » est impossible. On emprunte une dizaine en posant une retenue : 10 – 5 = 5. On place le 5 au résultat et on reporte 1 de retenue au bas de la colonne des dixièmes.
• Étape 3 (Colonne des dixièmes) : On doit calculer 2 moins (8 + 1 de retenue) = « 2 moins 9 », ce qui est impossible. On emprunte une unité en posant une retenue : 12 – 9 = 3. On inscrit 3 au résultat, on descend immédiatement la VIRGULE au même emplacement exact, et on reporte 1 de retenue au bas de la colonne des unités.
• Étape 4 (Colonne des unités) : On doit calculer 5 moins (7 + 1 de retenue) = « 5 moins 8 », impossible. On emprunte une dizaine : 15 – 8 = 7. On inscrit 7 au résultat et on reporte 1 de retenue au bas de la colonne des dizaines.
• Étape 5 (Colonne des dizaines) : On calcule 4 moins 1 de retenue = 3.
Le résultat final exact de la soustraction est bien 37,35.

4. Propriétés à retenir pour l'addition
• L'addition est commutative : a + b = b + a (l'ordre des termes ne change pas la somme : 12,4 + 5,8 = 5,8 + 12,4).
• L'addition est associative : on peut regrouper les termes astucieusement pour faciliter le calcul mental (ex : 4,3 + 8,9 + 5,7 = (4,3 + 5,7) + 8,9 = 10 + 8,9 = 18,9).
• La soustraction N'EST PAS commutative : 10 – 3 n'est pas égal à 3 – 10 !

Conclusion : En conclusion, la réussite d'une addition ou d'une soustraction décimale dépend de deux réflexes : l'alignement sans compromis des virgules et l'ajout systématique des zéros de calcul. Poser ces repères garantit un calcul sans faute.` ,
  sections: [
    {
      title: '1. Règle absolue d\'alignement spatial',
      content: [
        "Pour poser une addition ou une soustraction de décimaux :",
        "• Aligner strictement les virgules sur une même ligne verticale.",
        "• Superposer chaque rang : dizaines sous dizaines, unités sous unités, dixièmes sous dixièmes, etc.",
        "• Descendre la virgule du résultat dans le prolongement direct de la colonne des virgules."
      ]
    },
    {
      title: '2. L\'indispensable rôle des zéros de calcul',
      content: [
        "• Égaliser la longueur des parties décimales en rajoutant des zéros à droite.",
        "• Évite le piège tragique en soustraction où l'élève recopie le chiffre du bas sans soustraire.",
        "• Exemple obligatoire : Transformer 45,2 en 45,20 pour lui soustraire 7,85."
      ]
    },
    {
      title: '3. Décomposition pas-à-pas de la soustraction posée',
      content: [
        "Calcul détaillé de 45,20 – 7,85 = 37,35 :"
      ],
      table: {
        headers: ['Rang', 'Calcul avec retenue', 'Chiffre inscrit', 'Retenue transmise'],
        rows: [
          ['Centièmes', '10 – 5 = 5', '5', '+1 au dixième inférieur'],
          ['Dixièmes', '12 – (8 + 1) = 12 – 9 = 3', '3', '+1 à l\'unité inférieure'],
          ['Virgule', 'Alignement vertical direct', ',', 'Aucune'],
          ['Unités', '15 – (7 + 1) = 15 – 8 = 7', '7', '+1 à la dizaine inférieure'],
          ['Dizaines', '4 – 1 = 3', '3', 'Calcul achevé']
        ]
      }
    },
    {
      title: '4. Propriétés de calcul mental et astuces de regroupement',
      content: [
        "• Compléments à l'unité : 0,3 + 0,7 = 1 ; 0,25 + 0,75 = 1.",
        "• Regroupements judicieux : (3,4 + 6,6) + 7,8 = 10 + 7,8 = 17,8.",
        "• Estimation d'ordre de grandeur avant de calculer : 45,2 – 7,85 ≈ 45 – 8 = 37. Le résultat 37,35 est cohérent."
      ]
    }
  ],
  diagram: {
    title: 'Addition et Soustraction Décimales',
    root: 'CALCUL POSÉ DÉCIMAL',
    branches: [
      {
        name: 'Alignement Vertical',
        subtitle: 'Contrainte spatiale',
        items: ['Virgules strictement alignées', 'Unités sous unités, dixièmes sous dixièmes', 'Virgule du résultat dans le prolongement']
      },
      {
        name: 'Zéros de Calcul',
        subtitle: 'Comblement des vides',
        items: ['Obligatoire en soustraction', '45,2 devient 45,20', 'Permet les retenues correctes (10 - 5 = 5)']
      },
      {
        name: 'Ordre de Grandeur',
        subtitle: 'Contrôle automatique',
        items: ['Estimer mentalement le résultat', '45 - 8 = 37 pour 45,2 - 7,85', 'Validation immédiate de la cohérence']
      }
    ]
  },
  conclusion:
    "En conclusion, la réussite d'une addition ou d'une soustraction décimale dépend de deux réflexes : l'alignement sans compromis des virgules et l'ajout systématique des zéros de calcul. Poser ces repères garantit un calcul sans faute."
};

export const LESSON_10_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-10',
  number: 'Leçon 10',
  title: 'La multiplication de nombres décimaux',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Contrairement à l'addition où l'alignement des virgules est obligatoire, la multiplication des nombres décimaux obéit à une logique totalement différente : on effectue l'opération comme s'il s'agissait de nombres entiers, en ignorant momentanément la virgule. Ce n'est qu'au terme du calcul que la virgule est repositionnée selon une règle arithmétique précise. Cette dixième leçon expose le mécanisme de calcul posé, la règle de comptage des décimales, et les techniques de multiplication rapide par 10, 100, 1000 ou 0,1 et 0,01.",
  fullText: `Leçon 10 : La multiplication de nombres décimaux

Introduction : Contrairement à l'addition où l'alignement des virgules est obligatoire, la multiplication des nombres décimaux obéit à une logique totalement différente : on effectue l'opération comme s'il s'agissait de nombres entiers, en ignorant momentanément la virgule. Ce n'est qu'au terme du calcul que la virgule est repositionnée selon une règle arithmétique précise. Cette dixième leçon expose le mécanisme de calcul posé, la règle de comptage des décimales, et les techniques de multiplication rapide par 10, 100, 1000 ou 0,1 et 0,01.

1. Mécanisme opératoire
Pour multiplier deux nombres décimaux, on effectue l'opération SANS S'OCCUPER DE LA VIRGULE (exactement comme s'il s'agissait de nombres entiers naturels). On ne cherche absolument pas à aligner les virgules lorsqu'on pose les facteurs l'un sous l'autre.
C'est seulement à la toute fin de l'opération, sur le résultat brut obtenu (le produit), que l'on place la virgule.

2. Règle de placement de la virgule
On compte avec précision le nombre total de chiffres situés après la virgule dans TOUS les facteurs de départ combinés.
On place ensuite la virgule sur le produit final en comptant depuis la droite exactement le même nombre total de chiffres.

3. Exemple d'application riche : 2,45 × 1,3
Appliquons la méthode étape par étape :
• Étape 1 : On effectue la multiplication brute sans tenir compte des virgules : 245 × 13.
         2 4 5
     ×     1 3
     —————————
         7 3 5   (245 × 3)
     + 2 4 5 0   (245 × 10)
     —————————
       3 1 8 5   (Calcul brut obtenu)

• Étape 2 : On compte les chiffres décimaux présents dans les deux facteurs originaux :
  - Dans 2,45 : il y a 2 chiffres après la virgule (4 et 5).
  - Dans 1,3 : il y a 1 chiffre après la virgule (3).
  - Total cumulé = 2 + 1 = 3 chiffres après la virgule au total.

• Étape 3 : On applique ce total au résultat 3 185 en comptant 3 rangs depuis la droite vers la gauche :
  5 (1er rang), 8 (2e rang), 1 (3e rang) ➔ la virgule s'insère entre le 3 et le 1.
  Résultat final exact : 3,185.

4. Multiplication rapide par 10, 100, 1 000 ou 0,1 ; 0,01
Ces multiplicateurs particuliers permettent des calculs instantanés sans poser l'opération :
• Multiplier par 10, 100, 1 000 :
  Revient à déplacer la virgule du nombre de 1, 2 ou 3 rangs VERS LA DROITE (le nombre devient plus grand). Si l'on manque de chiffres, on ajoute des zéros.
  Exemples :
  - 4,52 × 10 = 45,2 (décalage de 1 rang à droite).
  - 4,52 × 100 = 452 (décalage de 2 rangs à droite).
  - 4,52 × 1 000 = 4 520 (décalage de 3 rangs, ajout d'un zéro).
• Multiplier par 0,1 ; 0,01 ; 0,001 :
  Revient à déplacer la virgule de 1, 2 ou 3 rangs VERS LA GAUCHE (le nombre devient plus petit, cela équivaut à diviser par 10, 100, 1000).
  Exemples :
  - 75,3 × 0,1 = 7,53 (décalage de 1 rang à gauche).
  - 75,3 × 0,01 = 0,753 (décalage de 2 rangs à gauche).
  - 8 × 0,01 = 0,08.

Conclusion : En conclusion, multiplier des décimaux consiste à opérer d'abord sur des entiers, puis à restaurer l'échelle par l'addition du nombre de décimales. Cette méthode élimine toute ambiguïté et transforme un calcul en apparence complexe en une simple multiplication classique.` ,
  sections: [
    {
      title: '1. Mécanisme opératoire en 3 temps',
      content: [
        "• Temps 1 : Poser la multiplication sans chercher à aligner les virgules.",
        "• Temps 2 : Effectuer le produit comme avec des entiers naturels ordinaires.",
        "• Temps 3 : Compter le nombre cumulé de décimales des deux facteurs et placer la virgule en partant de la droite."
      ]
    },
    {
      title: '2. Démonstration détaillée de 2,45 × 1,3 = 3,185',
      content: [
        "Suivi pas-à-pas de l'opération :"
      ],
      table: {
        headers: ['Facteur / Étape', 'Nombre', 'Nombre de décimales', 'Action effectuée'],
        rows: [
          ['Facteur 1', '2,45', '2 décimales', 'Multiplicande initial'],
          ['Facteur 2', '1,3', '1 décimale', 'Multiplicateur initial'],
          ['Total décimales', '2 + 1 = 3', '3 décimales à reporter', 'Somme des rangs'],
          ['Calcul brut entier', '245 × 13 = 3 185', '0 décimale', 'Calcul posé classique'],
          ['Produit final exact', '3,185', '3 décimales', 'Décalage de 3 crans vers la gauche']
        ]
      }
    },
    {
      title: '3. Règles d\'accélération : Multiplier par 10, 100, 1 000',
      content: [
        "Multiplier par 10^n agrandit le nombre :",
        "• Déplacement de la virgule vers la DROITE.",
        "• × 10 ➔ 1 rang à droite (4,52 × 10 = 45,2).",
        "• × 100 ➔ 2 rangs à droite (4,52 × 100 = 452).",
        "• × 1 000 ➔ 3 rangs à droite avec zéros éventuels (4,52 × 1 000 = 4 520)."
      ]
    },
    {
      title: '4. Règles d\'accélération : Multiplier par 0,1 ; 0,01 ; 0,001',
      content: [
        "Multiplier par 0,1 ou 0,01 réduit le nombre (équivaut à diviser par 10 ou 100) :",
        "• Déplacement de la virgule vers la GAUCHE.",
        "• × 0,1 ➔ 1 rang à gauche (75,3 × 0,1 = 7,53).",
        "• × 0,01 ➔ 2 rangs à gauche (75,3 × 0,01 = 0,753).",
        "• × 0,001 ➔ 3 rangs à gauche (75,3 × 0,001 = 0,0753)."
      ]
    }
  ],
  diagram: {
    title: 'Multiplication des Décimaux',
    root: 'MULTIPLICATION DÉCIMALE',
    branches: [
      {
        name: 'Calcul Brut Entier',
        subtitle: 'Sans les virgules',
        items: ['2,45 × 1,3 devient 245 × 13', 'Calcul en colonnes habituel', 'Résultat brut = 3 185']
      },
      {
        name: 'Placement de la Virgule',
        subtitle: 'Comptage cumulé',
        items: ['2 décimales + 1 décimale = 3 au total', 'Recul de 3 crans depuis la droite', 'Résultat final = 3,185']
      },
      {
        name: 'Multiplications Rapides',
        subtitle: 'Décalage direct',
        items: ['× 10, 100, 1000 ➔ virgule à DROITE', '× 0,1 ; 0,01 ➔ virgule à GAUCHE', 'Compléter par des zéros si besoin']
      }
    ]
  },
  conclusion:
    "En conclusion, multiplier des décimaux consiste à opérer d'abord sur des entiers, puis à restaurer l'échelle par l'addition du nombre de décimales. Cette méthode élimine toute ambiguïté et transforme un calcul en apparence complexe en une simple multiplication classique."
};

export const LESSON_11_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-11',
  number: 'Leçon 11',
  title: 'La division euclidienne — Théorie et calcul en potence',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "La division euclidienne porte le nom du célèbre mathématicien grec Euclide d'Alexandrie qui en posa les fondements théoriques il y a plus de 2 300 ans. Contrairement au partage continu avec virgule, la division euclidienne ne traite que de quantités entières et produit deux résultats indissociables : le quotient entier et le reste. Cette onzième leçon détaille le vocabulaire formel, la condition impérative sur le reste, le tracé de la potence de calcul et l'équation fondamentale de contrôle.",
  fullText: `Leçon 11 : La division euclidienne — Théorie et calcul en potence

Introduction : La division euclidienne porte le nom du célèbre mathématicien grec Euclide d'Alexandrie qui en posa les fondements théoriques il y a plus de 2 300 ans. Contrairement au partage continu avec virgule, la division euclidienne ne traite que de quantités entières et produit deux résultats indissociables : le quotient entier et le reste. Cette onzième leçon détaille le vocabulaire formel, la condition impérative sur le reste, le tracé de la potence de calcul et l'équation fondamentale de contrôle.

1. Définition et composantes d'une division euclidienne
Effectuer la division euclidienne d'un nombre entier naturel (appelé le DIVIDENDE) par un autre nombre entier naturel non nul (appelé le DIVISEUR) consiste à trouver deux nombres entiers uniques :
• Le QUOTIENT entier (noté q) : c'est le nombre maximal de fois que le diviseur est entièrement contenu dans le dividende.
• Le RESTE (noté r) : c'est la quantité restante qu'il n'est plus possible de partager en parts entières.

2. Propriété fondamentale obligatoire
Dans toute division euclidienne, le reste doit IMPÉRATIVEMENT ÊTRE STRICTEMENT INFÉRIEUR AU DIVISEUR :
Reste < Diviseur  (soit : 0 ≤ r < b)
Si le reste obtenu était supérieur ou égal au diviseur, cela signifierait que l'on aurait pu distribuer encore au moins une part supplémentaire au quotient, et la division serait fausse !

L'égalité euclidienne fondamentale s'écrit formellement :
Dividende = (Diviseur × Quotient) + Reste
avec  Reste < Diviseur

3. Exemple d'application modélisé : Division de 158 par 6
Posons l'opération en potence traditionnelle pour décomposer pas-à-pas les mécanismes opératoires :

     1 5 8 | 6
   – 1 2   | —————
   —————   | 2 6  (Quotient)
     3 8   |
   – 3 6   |
   —————   |
       2   | (Reste)

Vérification pas-à-pas :
• Étape 1 : On prend les chiffres du dividende de gauche à droite. Dans 1, on ne peut pas mettre 6. On prend donc 15.
  Dans 15, combien de fois 6 ? Il y va 2 fois (car 2 × 6 = 12).
  On soustrait : 15 – 12 = 3. Le reste partiel est 3.
• Étape 2 : On abaisse le chiffre suivant, le 8, à côté du 3, ce qui forme le nombre 38.
  Dans 38, combien de fois 6 ? Il y va 6 fois (car 6 × 6 = 36).
  On soustrait : 38 – 36 = 2.
• Étape 3 : Tous les chiffres entiers du dividende ont été abaissés. L'opération s'arrête ici car on reste dans l'ensemble des entiers naturels.
  Le quotient entier est 26. Le reste final est 2.

4. Validation et équation de contrôle
Avant de valider une division euclidienne, on effectue obligatoirement deux vérifications :
1. Contrôle du reste : Le reste 2 est bien strictement inférieur au diviseur 6 (2 < 6). La condition est validée.
2. Contrôle de l'égalité euclidienne :
   (Diviseur × Quotient) + Reste = (6 × 26) + 2
   Or : 6 × 26 = 156.
   Et : 156 + 2 = 158.
   L'égalité est parfaitement vérifiée : 158 = (6 × 26) + 2.

Cas particulier : La division exacte
Lorsque le reste d'une division euclidienne est égal à zéro (r = 0), on dit que :
• La division « tombe juste ».
• Le dividende est un multiple du diviseur.
• Le diviseur est un diviseur du dividende.
Exemple : 48 ÷ 6 = 8, reste 0. 48 est un multiple de 6.

Conclusion : En conclusion, la division euclidienne est l'outil maître des partages discrets (objets insécables comme des cahiers, des cartons ou des élèves). La double vérification (reste inférieur au diviseur et égalité de contrôle) garantit une certitude absolue du résultat.` ,
  sections: [
    {
      title: '1. Les 4 termes de la division euclidienne',
      content: [
        "Dans la division entière de a par b :",
        "• Dividende (a) : le nombre global que l'on souhaite partager.",
        "• Diviseur (b) : le nombre de parts que l'on forme (b ≠ 0).",
        "• Quotient (q) : la valeur entière reçue par chaque part.",
        "• Reste (r) : ce qui ne peut plus être distribué."
      ],
      table: {
        headers: ['Terme officiel', 'Symbole', 'Rôle dans 158 ÷ 6', 'Valeur'],
        rows: [
          ['Dividende', 'a', 'Quantité totale à répartir', '158'],
          ['Diviseur', 'b', 'Taille du groupe de partage', '6'],
          ['Quotient', 'q', 'Nombre de paquets complets', '26'],
          ['Reste', 'r', 'Quantité non partagée', '2']
        ]
      }
    },
    {
      title: '2. L\'égalité fondamentale d\'Euclide',
      content: [
        "La formule sacrée des mathématiques :",
        "Dividende = (Diviseur × Quotient) + Reste",
        "Condition impérative : 0 ≤ Reste < Diviseur.",
        "• Dans notre exemple : 158 = (6 × 26) + 2, avec 2 < 6."
      ]
    },
    {
      title: '3. Déroulement en potence pas-à-pas',
      content: [
        "• 1. 'Dans 15 combien de fois 6 ?' ➔ 2 fois (12), reste 3.",
        "• 2. Abaisser le 8 ➔ 38.",
        "• 3. 'Dans 38 combien de fois 6 ?' ➔ 6 fois (36), reste 2.",
        "• 4. Plus de chiffre à abaisser : l'opération euclidienne est terminée."
      ]
    },
    {
      title: '4. Notion de multiples et de diviseurs',
      content: [
        "Quand le reste r = 0 :",
        "• On dit que a est divisible par b.",
        "• Exemple : 72 divisé par 8 donne q = 9 et r = 0. 72 est un multiple de 8, et 8 est un diviseur de 72."
      ]
    }
  ],
  diagram: {
    title: 'Théorie de la Division Euclidienne',
    root: 'DIVISION EUCLIDIENNE',
    branches: [
      {
        name: 'Les 4 Acteurs',
        subtitle: 'Vocabulaire officiel',
        items: ['Dividende (nombre à partager)', 'Diviseur (taille du paquet)', 'Quotient entier', 'Reste (ce qu\'il reste)']
      },
      {
        name: 'La Règle du Reste',
        subtitle: 'Condition de validité',
        items: ['Reste < Diviseur obligatoirement', 'Si Reste ≥ Diviseur ➔ division fausse', 'Exemple : reste 2 < diviseur 6']
      },
      {
        name: 'Équation de Contrôle',
        subtitle: 'Validation formelle',
        items: ['Dividende = (Diviseur × Quotient) + Reste', '158 = (6 × 26) + 2', 'Si Reste = 0 ➔ division exacte (multiple)']
      }
    ]
  },
  conclusion:
    "En conclusion, la division euclidienne est l'outil maître des partages discrets (objets insécables comme des cahiers, des cartons ou des élèves). La double vérification (reste inférieur au diviseur et égalité de contrôle) garantit une certitude absolue du résultat."
};

export const LESSON_12_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-12',
  number: 'Leçon 12',
  title: 'La division décimale de deux nombres',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Alors que la division euclidienne s'arrête au reste entier, de nombreuses situations concrètes (comme partager une somme d'argent ou mesurer un tissu) exigent de poursuivre le partage jusqu'au bout. C'est l'objet de la division décimale, qui fait basculer le quotient dans le monde des nombres à virgule. Cette douzième leçon explicite l'algorithme de bascule décimale, la distinction entre quotient exact et quotient infini, et l'exigence d'une valeur approchée encadrée.",
  fullText: `Leçon 12 : La division décimale de deux nombres

Introduction : Alors que la division euclidienne s'arrête au reste entier, de nombreuses situations concrètes (comme partager une somme d'argent ou mesurer un tissu) exigent de poursuivre le partage jusqu'au bout. C'est l'objet de la division décimale, qui fait basculer le quotient dans le monde des nombres à virgule. Cette douzième leçon explicite l'algorithme de bascule décimale, la distinction entre quotient exact et quotient infini, et l'exigence d'une valeur approchée encadrée.

1. Principe de la division décimale
Contrairement à la division euclidienne qui s'arrête dès que le reste entier est plus petit que le diviseur, la division décimale NE S'ARRÊTE PAS au reste entier.
On continue le calcul en plaçant une virgule au quotient et en abaissant des zéros décimaux afin d'obtenir un résultat extrêmement précis.
La division décimale permet ainsi de déterminer :
• Soit la valeur EXACTE du quotient d'un nombre par un autre (si le reste finit par tomber à 0).
• Soit une valeur APPROCHÉE du quotient (si la division ne s'arrête jamais).

2. Algorithme de bascule décimale
La règle fondamentale de synchronisation de la virgule :
Dès que l'on descend le premier chiffre de la partie décimale du dividende (ou lorsqu'on ajoute le tout premier zéro virtuel après avoir épuisé les chiffres entiers du dividende), ON DOIT IMMÉDIATEMENT PLACER UNE VIRGULE AU QUOTIENT avant de poursuivre le calcul.

3. Exemple d'un quotient décimal exact : Division de 45 par 4
Effectuons pas-à-pas la division décimale de 45 par 4 :
• Étape 1 (Partage entier) :
  - Dans 4, combien de fois 4 ? Il y va 1 fois (1 × 4 = 4), reste 0.
  - On descend le 5. Dans 5, combien de fois 4 ? Il y va 1 fois (1 × 4 = 4), reste 1.
  - À ce stade, la division euclidienne donnerait : quotient 11, reste 1.
• Étape 2 (Bascule décimale et dixièmes) :
  - Tous les chiffres entiers de 45 sont épuisés.
  - On pose IMMÉDIATEMENT une virgule après le 11 au quotient : 11, ...
  - On ajoute un premier zéro virtuel au reste 1 pour obtenir 10 (on partage 10 dixièmes).
  - Dans 10, combien de fois 4 ? Il y va 2 fois (2 × 4 = 8), reste 2 dixièmes.
• Étape 3 (Centièmes) :
  - On ajoute un second zéro virtuel au reste 2 pour obtenir 20 (on partage 20 centièmes).
  - Dans 20, combien de fois 4 ? Il y va exactement 5 fois (5 × 4 = 20), reste 0.
• Étape 4 (Conclusion) :
  - Le reste est égal à 0. L'opération est terminée.
  - Le quotient décimal exact de 45 divisé par 4 est donc rigoureusement égal à 11,25.

4. Attention au cas des quotients infinis et valeurs approchées
Certaines divisions décimales ne s'arrêtent jamais car le reste se répète indéfiniment en boucle.
Exemple célèbre : Division de 10 par 3.
• 10 divisé par 3 donne 3, reste 1.
• On met la virgule et on ajoute un 0 : dans 10, il y va 3 fois, reste 1.
• On ajoute un 0 : dans 10, il y va 3 fois, reste 1...
Le calcul se poursuit à l'infini : 10 ÷ 3 = 3,333333...
Dans cette situation :
• On NE PEUT PAS donner de valeur décimale exacte avec un nombre fini de chiffres.
• La valeur exacte s'écrit uniquement sous forme fractionnaire : 10/3.
• On doit alors obligatoirement donner une VALEUR APPROCHÉE (arrondie ou tronquée) au rang demandé par l'énoncé :
  - La valeur approchée à l'unité près est environ 3.
  - La valeur approchée au dixième près est environ 3,3.
  - La valeur approchée au centième près est environ 3,33.

Conclusion : En conclusion, la division décimale parachève l'apprentissage du calcul partagé. Qu'elle débouche sur un quotient exact décimal ou sur une valeur approchée encadrée, elle exige la maîtrise parfaite du moment où l'on pose la virgule au quotient.` ,
  sections: [
    {
      title: '1. Comparaison : Division euclidienne vs Division décimale',
      content: [
        "Deux approches complémentaires de la division :",
        "• Euclidienne : s'arrête au reste entier, quotient entier sans virgule.",
        "• Décimale : se poursuit après la virgule en abaissant des zéros.",
        "• Objectif : déterminer le quotient précis (exact ou approché)."
      ]
    },
    {
      title: '2. L\'algorithme de la bascule décimale',
      content: [
        "Règle de synchronisation :",
        "• Dès que la partie entière est épuisée, on place la virgule au quotient.",
        "• On ajoute des zéros 'virtuels' aux restes successifs.",
        "• Exemple : 45 divisé par 4 devient 45,00 divisé par 4."
      ],
      table: {
        headers: ['Étape', 'Dividende abaissé', 'Calcul effectué', 'Quotient partiel', 'Nouveau reste'],
        rows: [
          ['1. Dizaines', '4', 'Dans 4 : 1 × 4 = 4', '1', '0'],
          ['2. Unités', '5', 'Dans 5 : 1 × 4 = 4', '11', '1'],
          ['3. Dixièmes (Virgule)', '10 (ajout 0 virtuel)', 'Dans 10 : 2 × 4 = 8', '11,2', '2'],
          ['4. Centièmes', '20 (ajout 0 virtuel)', 'Dans 20 : 5 × 4 = 20', '11,25', '0 (Fin : quotient exact)']
        ]
      }
    },
    {
      title: '3. Quotient exact vs Quotient infini',
      content: [
        "Deux cas de figures fondamentaux :",
        "• Cas 1 : Reste = 0 ➔ Quotient exact (ex : 45 ÷ 4 = 11,25 ; 7 ÷ 2 = 3,5).",
        "• Cas 2 : Reste infini périodique ➔ Quotient approché obligatoire.",
        "• Exemple de 10 ÷ 3 = 3,333... : la seule écriture exacte est la fraction 10/3."
      ]
    },
    {
      title: '4. Encadrement du quotient approché de 10 ÷ 3',
      content: [
        "Valeurs approchées selon la précision demandée :",
        "• À l'unité : 3 < 10/3 < 4 (valeur par défaut = 3).",
        "• Au dixième (0,1) : 3,3 < 10/3 < 3,4 (valeur approchée = 3,3).",
        "• Au centième (0,01) : 3,33 < 10/3 < 3,34 (valeur approchée = 3,33)."
      ]
    }
  ],
  diagram: {
    title: 'Mécanique de la Division Décimale',
    root: 'DIVISION DÉCIMALE',
    branches: [
      {
        name: 'Règle de la Virgule',
        subtitle: 'Bascule immédiate',
        items: ['Épuisement des chiffres entiers', 'Poser la virgule au quotient', 'Ajouter des zéros virtuels (1 ➔ 10 ➔ 20)']
      },
      {
        name: 'Quotient Décimal Exact',
        subtitle: 'Reste nul',
        items: ['Le reste finit par être 0', '45 ÷ 4 = 11,25 pile', 'Nombre décimal fini']
      },
      {
        name: 'Quotient Infini',
        subtitle: 'Valeurs approchées',
        items: ['Le reste boucle sans fin (10 ÷ 3)', 'Écriture exacte = fraction 10/3', 'Valeur approchée arrondie : 3,33']
      }
    ]
  },
  conclusion:
    "En conclusion, la division décimale parachève l'apprentissage du calcul partagé. Qu'elle débouche sur un quotient exact décimal ou sur une valeur approchée encadrée, elle exige la maîtrise parfaite du moment où l'on pose la virgule au quotient."
};
