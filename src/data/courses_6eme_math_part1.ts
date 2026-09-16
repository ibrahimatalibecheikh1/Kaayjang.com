import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 6ÈME
// ACTIVITÉS NUMÉRIQUES — PROGRAMME OFFICIEL EXHAUSTIF
// CHAPITRE I : NUMÉRATION ET ÉTUDE DES NOMBRES ENTIERS ET DÉCIMAUX (LEÇONS 1 À 5)
// AUCUN RÉSUMÉ, DÉVELOPPEMENT INTÉGRAL, EXEMPLES PAS-À-PAS ET DÉTAILS DE COMPRÉHENSION
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_1_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-1',
  number: 'Leçon 1',
  title: 'Les nombres entiers naturels — Lecture, écriture et position',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "La numération constitue le premier pilier fondamental des mathématiques au collège. Dès l'Antiquité, les civilisations ont cherché des systèmes ingénieux pour dénombrer les troupeaux, mesurer les récoltes et commercer. En classe de 6ème, l'élève découvre la puissance de notre système de numération décimale et positionnelle. Cette première leçon pose les règles absolues de décomposition, de lecture en toutes lettres, de séparation par classes de trois chiffres et la distinction capitale entre le chiffre d'un rang et le nombre de rangs.",
  fullText: `Leçon 1 : Les nombres entiers naturels — Lecture, écriture et position

Introduction : La numération constitue le premier pilier fondamental des mathématiques au collège. Dès l'Antiquité, les civilisations ont cherché des systèmes ingénieux pour dénombrer les troupeaux, mesurer les récoltes et commercer. En classe de 6ème, l'élève découvre la puissance de notre système de numération décimale et positionnelle. Cette première leçon pose les règles absolues de décomposition, de lecture en toutes lettres, de séparation par classes de trois chiffres et la distinction capitale entre le chiffre d'un rang et le nombre de rangs.

1. Fondements théoriques
Un nombre entier naturel est un nombre qui permet de compter des objets distincts et entiers. L'ensemble de ces nombres est infini, commençant par 0, puis 1, 2, 3, etc.
Notre système d'écriture possède deux caractéristiques essentielles :
• Il est décimal : il utilise dix symboles universels appelés chiffres (0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
• Il est positionnel : la valeur réelle d'un chiffre dépend de sa position exacte dans l'écriture du nombre (le chiffre 5 ne vaut pas la même chose dans 50 que dans 5 000).
Chaque groupe de trois chiffres en partant rigoureusement de la droite vers la gauche forme une classe :
- La classe des unités simples.
- La classe des milliers.
- La classe des millions.
- La classe des milliards.
Dans chaque classe, on retrouve systématiquement trois rangs : Unités (U), Dizaines (D) et Centaines (C).

2. Règle d'écriture obligatoire
Pour rendre un grand nombre entier parfaitement lisible et éviter les erreurs de lecture, on doit obligatoirement insérer un espace invisible (et non un point ou une virgule) entre chaque classe de trois chiffres, en comptant toujours de la droite vers la gauche.
Exemple :
• Mauvaise écriture : 45287103 ou 45.287.103
• Écriture réglementaire : 45 287 103

3. Exemple d'application détaillé et pas-à-pas
Considérons le nombre brut suivant écrit sans espaces : 45287103.
• Étape 1 : On sépare par blocs de trois depuis la droite : ... 45 287 103.
• Étape 2 : On applique le tableau de position ci-dessous pour identifier chaque chiffre :
  - Classes des Millions : Centaines (vide), Dizaines = 4, Unités = 5.
  - Classes des Milliers : Centaines = 2, Dizaines = 8, Unités = 7.
  - Classes des Unités simples : Centaines = 1, Dizaines = 0, Unités = 3.

4. Lecture en lettres et distinction cruciale
• Lecture en toutes lettres : Quarante-cinq millions deux cent quatre-vingt-sept mille cent trois.
• Le chiffre des dizaines de milliers est 8 (il s'agit du symbole unique situé dans la colonne des dizaines de milliers).
• Le nombre de milliers est 45 287 (c'est le total de paquets de mille contenus dans ce grand nombre entier).
Règle d'or : Ne jamais confondre le chiffre du rang (un seul symbole entre 0 et 9) et le nombre de rangs (qui se lit en prenant tous les chiffres situés à gauche jusqu'à la colonne considérée inclusivement) !

Conclusion : En conclusion, la maîtrise des nombres entiers naturels repose sur l'organisation par tranches de trois chiffres et la compréhension de la valeur positionnelle. Distinguer le chiffre d'un rang du nombre de rangs constitue un automatisme indispensable pour réussir toutes les activités numériques de l'année scolaire.`,
  sections: [
    {
      title: '1. Fondements théoriques de la numération',
      content: [
        "Un nombre entier naturel est un nombre permettant de dénombrer des éléments concrets entiers (objets, personnes, animaux).",
        "• Système décimal : utilisation de 10 chiffres (0, 1, 2, 3, 4, 5, 6, 7, 8, 9).",
        "• Système de position : la position d'un chiffre détermine sa valeur (unités, dizaines, centaines).",
        "• Les classes : regroupement ordonné de 3 chiffres de droite à gauche (Unités simples, Milliers, Millions, Milliards)."
      ]
    },
    {
      title: '2. Règle d\'écriture réglementaire par espaces',
      content: [
        "Pour écrire un nombre entier supérieur à 999 :",
        "• On laisse un espace fin entre chaque tranche de trois chiffres en partant de la droite.",
        "• Il est strictement interdit d'utiliser des points ou des virgules pour séparer les classes.",
        "• Exemple : 45287103 s'écrit obligatoirement 45 287 103."
      ]
    },
    {
      title: '3. Tableau officiel de numération et position',
      content: [
        "Application détaillée au nombre 45 287 103 :",
        "• Lecture en toutes lettres : Quarante-cinq millions deux cent quatre-vingt-sept mille cent trois.",
        "• Chiffre des dizaines de milliers = 8.",
        "• Nombre de milliers = 45 287.",
        "• Nombre de centaines = 452 871."
      ],
      table: {
        headers: [
          'Classe',
          'Millions (C | D | U)',
          'Milliers (C | D | U)',
          'Unités simples (C | D | U)'
        ],
        rows: [
          ['Colonnes', 'C  |  D  |  U', 'C  |  D  |  U', 'C  |  D  |  U'],
          ['Chiffres de 45 287 103', '   |  4  |  5', '2  |  8  |  7', '1  |  0  |  3']
        ]
      }
    },
    {
      title: '4. Piège classique : Chiffre de... vs Nombre de...',
      content: [
        "C'est l'erreur la plus fréquente des élèves de 6ème :",
        "• Le chiffre d'un rang est le chiffre unique situé dans la case correspondante du tableau.",
        "  Exemple : Le chiffre des dizaines de milliers dans 45 287 103 est 8.",
        "• Le nombre d'un rang est la quantité totale d'unités de ce rang contenue dans le nombre. Pour le trouver, on lit le nombre depuis le début à gauche jusqu'au rang demandé inclus.",
        "  Exemple : Le nombre de dizaines de milliers est 4 528 (car 4 528 × 10 000 = 45 280 000).",
        "  Exemple : Le nombre de milliers est 45 287 (car 45 287 × 1 000 = 45 287 000)."
      ]
    }
  ],
  diagram: {
    title: 'Architecture du Système Décimal et Positionnel',
    root: 'NOMBRES ENTIERS NATURELS',
    branches: [
      {
        name: 'Propriétés du Système',
        subtitle: '10 chiffres & Position',
        items: ['Décimal : chiffres 0 à 9', 'Positionnel : valeur selon le rang', 'Classes de 3 chiffres de droite à gauche']
      },
      {
        name: 'Organisation par Classes',
        subtitle: 'Découpage spatial',
        items: ['Milliards (C, D, U)', 'Millions (C, D, U)', 'Milliers (C, D, U)', 'Unités simples (C, D, U)']
      },
      {
        name: 'Règles & Réflexes',
        subtitle: 'Écriture et Analyse',
        items: ['Espace obligatoire entre chaque classe', 'Chiffre du rang = 1 seul symbole', 'Nombre de rangs = lecture jusqu\'au rang']
      }
    ]
  },
  conclusion:
    "En conclusion, la maîtrise des nombres entiers naturels repose sur l'organisation par tranches de trois chiffres et la compréhension de la valeur positionnelle. Distinguer le chiffre d'un rang du nombre de rangs constitue un automatisme indispensable pour réussir toutes les activités numériques de l'année scolaire."
};

export const LESSON_2_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-2',
  number: 'Leçon 2',
  title: 'Définition, structure et écriture des nombres décimaux',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Dans la vie quotidienne, les nombres entiers ne suffisent plus dès qu'il s'agit de mesurer une longueur avec précision, d'indiquer un poids sur une balance ou de calculer un prix. L'introduction de la virgule ouvre l'accès aux nombres décimaux. Cette deuxième leçon explicite avec clarté l'anatomie d'un nombre décimal, la signification mathématique de chaque rang décimal (dixièmes, centièmes, millièmes) et les trois formes canoniques de décomposition.",
  fullText: `Leçon 2 : Définition, structure et écriture des nombres décimaux

Introduction : Dans la vie quotidienne, les nombres entiers ne suffisent plus dès qu'il s'agit de mesurer une longueur avec précision, d'indiquer un poids sur une balance ou de calculer un prix. L'introduction de la virgule ouvre l'accès aux nombres décimaux. Cette deuxième leçon explicite avec clarté l'anatomie d'un nombre décimal, la signification mathématique de chaque rang décimal (dixièmes, centièmes, millièmes) et les trois formes canoniques de décomposition.

1. Structure d'un nombre décimal
Un nombre décimal est un nombre qui possède une écriture à virgule. Il est composé rigoureusement de deux parties séparées par une virgule :
• La partie entière : située à gauche de la virgule, elle correspond à un nombre entier naturel.
• La partie décimale : située à droite de la virgule, elle indique la fraction de l'unité (dixièmes, centièmes, millièmes).

2. Les rangs de la partie décimale
Chaque rang après la virgule porte un nom précis selon la division de l'unité par 10, 100, 1000 :
• Le premier chiffre après la virgule est le chiffre des dixièmes (1/10 = 0,1).
• Le deuxième chiffre après la virgule est le chiffre des centièmes (1/100 = 0,01).
• Le troisième chiffre après la virgule est le chiffre des millièmes (1/1000 = 0,001).
• Le quatrième chiffre est celui des dix-millièmes (1/10 000 = 0,0001).

3. Exemple d'application et décompositions structurelles
Soit le nombre décimal 14,258.
• Sa partie entière est 14.
• Sa partie décimale est 0,258 (ou 258 millièmes).
• Le chiffre 2 est le chiffre des dixièmes.
• Le chiffre 5 est le chiffre des centièmes.
• Le chiffre 8 est le chiffre des millièmes.

Décompositions mathématiques de 14,258 :
1. Décomposition additive par rang :
   14,258 = 14 + 0,2 + 0,05 + 0,008
2. Décomposition sous forme de fraction décimale unique :
   14,258 = 14258 / 1000
3. Décomposition combinée (entière + fractions) :
   14,258 = (1 × 10) + (4 × 1) + (2 × 0,1) + (5 × 0,01) + (8 × 0,001)
   ou encore : 14 + (2 / 10) + (5 / 100) + (8 / 1000)

4. Remarque cruciale sur les zéros inutiles
On peut ajouter ou supprimer des zéros à l'extrémité gauche de la partie entière ou à l'extrémité droite de la partie décimale sans changer en rien la valeur du nombre :
• 014,2580 = 14,258
• 3,50 = 3,5
• 007 = 7
Attention capitale : Un zéro situé entre deux chiffres non nuls n'est JAMAIS inutile !
Exemple : 10,4 est totalement différent de 1,4 (le zéro des unités maintient le rang des dizaines). De même, 2,05 est différent de 2,5.

Conclusion : En conclusion, un nombre décimal est l'assemblage ordonné d'une partie entière et d'une partie décimale. Maîtriser ses trois types de décompositions et savoir identifier les zéros inutiles constituent le socle technique sur lequel reposent toutes les opérations décimales.` ,
  sections: [
    {
      title: '1. Anatomie du nombre décimal',
      content: [
        "Un nombre décimal réunit deux entités séparées par la virgule :",
        "• Partie entière : à gauche de la virgule (ex: dans 14,258 ➔ 14).",
        "• Partie décimale : à droite de la virgule (ex: dans 14,258 ➔ 0,258 ou 258 millièmes).",
        "• Tout nombre entier est aussi un nombre décimal dont la partie décimale est nulle (ex : 7 = 7,0 = 7,00)."
      ]
    },
    {
      title: '2. Hiérarchie des rangs décimaux',
      content: [
        "L'unité est divisée successivement par des puissances de 10 :",
        "• 1er rang : Dixièmes (0,1 ou 1/10).",
        "• 2ème rang : Centièmes (0,01 ou 1/100).",
        "• 3ème rang : Millièmes (0,001 ou 1/1000).",
        "• 4ème rang : Dix-millièmes (0,0001 ou 1/10 000)."
      ],
      table: {
        headers: ['Partie entière (Dizaines | Unités)', 'Virgule', 'Partie décimale (Dixièmes | Centièmes | Millièmes)'],
        rows: [
          ['10  |  1', ',', '1/10  |  1/100  |  1/1000'],
          ['1   |  4', ',', '2     |  5      |  8']
        ]
      }
    },
    {
      title: '3. Les trois modes officiels de décomposition',
      content: [
        "Exemple sur 14,258 :",
        "• 1. Décomposition additive par rang : 14 + 0,2 + 0,05 + 0,008.",
        "• 2. Décomposition en fraction décimale globale : 14 258 / 1 000.",
        "• 3. Décomposition combinée développée : (1 × 10) + (4 × 1) + (2 × 0,1) + (5 × 0,01) + (8 × 0,001)."
      ]
    },
    {
      title: '4. La règle d\'or des zéros inutiles',
      content: [
        "• Sont inutiles : Les zéros situés tout à gauche de la partie entière et tout à droite de la partie décimale.",
        "  Exemple : 014,2580 s'écrit plus simplement 14,258.",
        "  Exemple : 7,500 = 7,5.",
        "• Ne sont JAMAIS inutiles : Les zéros placés entre deux chiffres non nuls.",
        "  Exemple : 10,4 ≠ 1,4 car le 0 conserve la place des unités.",
        "  Exemple : 5,08 ≠ 5,8 car 8 centièmes est dix fois plus petit que 8 dixièmes."
      ]
    }
  ],
  diagram: {
    title: 'Structure d\'un Nombre Décimal',
    root: 'NOMBRE DÉCIMAL',
    branches: [
      {
        name: 'Partie Entière (Gauche)',
        subtitle: 'Nombres entiers',
        items: ['Centaines, Dizaines, Unités', 'Séparée par la virgule', 'Zéros de tête inutiles (07 = 7)']
      },
      {
        name: 'Partie Décimale (Droite)',
        subtitle: 'Fractions d\'unité',
        items: ['1er rang : Dixièmes (0,1)', '2e rang : Centièmes (0,01)', '3e rang : Millièmes (0,001)', 'Zéros de queue inutiles (3,50 = 3,5)']
      },
      {
        name: 'Décompositions Clés',
        subtitle: '3 formes mathématiques',
        items: ['Additive : 14 + 0,2 + 0,05 + 0,008', 'Fractionnaire : 14258 / 1000', 'Combinée : 14 + 2/10 + 5/100 + 8/1000']
      }
    ]
  },
  conclusion:
    "En conclusion, un nombre décimal est l'assemblage ordonné d'une partie entière et d'une partie décimale. Maîtriser ses trois types de décompositions et savoir identifier les zéros inutiles constituent le socle technique sur lequel reposent toutes les opérations décimales."
};

export const LESSON_3_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-3',
  number: 'Leçon 3',
  title: 'Comparaison, rangement et encadrement des nombres décimaux',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "Comparer des nombres décimaux réserve souvent des pièges intuitifs : un élève non averti pensera souvent à tort que 8,25 est plus grand que 8,3 sous prétexte que 25 est plus grand que 3. Pour bannir ces erreurs d'optique, la méthode mathématique rigoureuse impose d'examiner méthodiquement les rangs de gauche à droite. Cette troisième leçon détaille la démarche universelle de comparaison, les ordres croissant et décroissant, ainsi que les techniques d'encadrement et d'intercalation.",
  fullText: `Leçon 3 : Comparaison, rangement et encadrement des nombres décimaux

Introduction : Comparer des nombres décimaux réserve souvent des pièges intuitifs : un élève non averti pensera souvent à tort que 8,25 est plus grand que 8,3 sous prétexte que 25 est plus grand que 3. Pour bannir ces erreurs d'optique, la méthode mathématique rigoureuse impose d'examiner méthodiquement les rangs de gauche à droite. Cette troisième leçon détaille la démarche universelle de comparaison, les ordres croissant et décroissant, ainsi que les techniques d'encadrement et d'intercalation.

1. Méthode universelle de comparaison
Pour comparer deux nombres décimaux, on applique une méthode séquentielle en deux étapes strictes :
• Étape 1 : On compare d'abord leurs parties entières. Le nombre qui a la plus grande partie entière est immédiatement le plus grand, quelle que soit la longueur de sa partie décimale !
  Exemple : 12,1 > 9,9999 (car 12 > 9).
• Étape 2 : Si les parties entières sont strictement égales, on compare les parties décimales chiffre par chiffre, en partant du premier rang de gauche (le rang des dixièmes), puis des centièmes si nécessaire, puis des millièmes, etc.
Astuce pédagogique : Pour éviter les pièges visuels, on peut égaliser le nombre de chiffres après la virgule en ajoutant des zéros inutiles à droite.

2. Exemple pas-à-pas de comparaison et de rangement
Comparons 8,3 et 8,25 :
1. Les parties entières sont strictement identiques (8 = 8).
2. On examine la colonne des dixièmes :
   - Le chiffre des dixièmes de 8,3 est 3.
   - Le chiffre des dixièmes de 8,25 est 2.
3. Puisque 3 > 2, alors 8,3 > 8,25.
Vérification par l'égalisation des zéros : 8,3 = 8,30. On compare 8,30 et 8,25 : 30 centièmes est bien supérieur à 25 centièmes !

3. Rangement par ordre croissant et décroissant
• Ordre croissant : du plus petit au plus grand (symbole <).
  Exemple de liste : 4,15 ; 4,2 ; 3,99 ; 4,015.
  Égalisons à 3 décimales pour visualiser : 4,150 ; 4,200 ; 3,990 ; 4,015.
  Rangement croissant : 3,99 < 4,015 < 4,15 < 4,2.
• Ordre décroissant : du plus grand au plus petit (symbole >).
  Rangement décroissant : 4,2 > 4,15 > 4,015 > 3,99.

4. Encadrement d'un nombre décimal
Encadrer un nombre, c'est le placer entre un nombre plus petit (borne inférieure) et un nombre plus grand (borne supérieure).
• Encadrement à l'unité près :
  On prend l'entier immédiatement inférieur et l'entier immédiatement supérieur :
  Exemple pour 7,64 : 7 < 7,64 < 8 (ici, la différence 8 – 7 vaut 1 unité).
• Encadrement au dixième près :
  Exemple pour 7,64 : 7,6 < 7,64 < 7,7 (la différence vaut 0,1).
• Encadrement au centième près :
  Exemple pour 7,648 : 7,64 < 7,648 < 7,65 (la différence vaut 0,01).

5. Intercalation d'un décimal
Entre deux nombres décimaux, même très proches, on peut TOUJOURS intercaler une infinité d'autres nombres décimaux en ajoutant un rang supplémentaire.
Exemple : Intercaler un nombre entre 5,6 et 5,7.
On réécrit 5,60 et 5,70. On peut intercaler 5,61 ; 5,65 ; 5,689 etc.

Conclusion : En conclusion, la comparaison des nombres décimaux ne s'appuie jamais sur la longueur apparente de l'écriture, mais sur l'analyse ordonnée des rangs. L'égalisation par des zéros à droite constitue l'outil le plus fiable pour ranger et encadrer sans faute.` ,
  sections: [
    {
      title: '1. Méthode universelle de comparaison en deux étapes',
      content: [
        "Pour comparer deux décimaux sans se tromper :",
        "• Règle 1 : Comparer les parties entières. Le plus grand entier l'emporte immédiatement (ex: 11,2 > 9,85 car 11 > 9).",
        "• Règle 2 : Si les entiers sont égaux, comparer rang par rang de gauche à droite : dixièmes d'abord, puis centièmes, puis millièmes.",
        "• Astuce anti-piège : Égaliser le nombre de décimales avec des zéros à droite (8,30 vs 8,25)."
      ]
    },
    {
      title: '2. Démonstration pratique et rangements ordonnés',
      content: [
        "Comparaison détaillée de 8,3 et 8,25 :",
        "• Parties entières : 8 = 8.",
        "• Dixièmes : 3 > 2, donc 8,3 > 8,25 (bien que 25 paraisse plus grand que 3 à l'œil nu !).",
        "• Ordre croissant (du plus petit au plus grand avec <) : 3,99 < 4,015 < 4,15 < 4,2.",
        "• Ordre décroissant (du plus grand au plus petit avec >) : 4,2 > 4,15 > 4,015 > 3,99."
      ]
    },
    {
      title: '3. Encadrement à différents ordres de grandeur',
      content: [
        "Encadrer le nombre 7,648 :",
        "• À l'unité près : 7 < 7,648 < 8.",
        "• Au dixième près (0,1) : 7,6 < 7,648 < 7,7.",
        "• Au centième près (0,01) : 7,64 < 7,648 < 7,65."
      ],
      table: {
        headers: ['Type d\'encadrement', 'Borne inférieure (<)', 'Nombre central', 'Borne supérieure (<)', 'Amplitude'],
        rows: [
          ['À l\'unité près', '7', '7,64', '8', '1 unité'],
          ['Au dixième près', '7,6', '7,64', '7,7', '0,1 (un dixième)'],
          ['Au centième près', '7,64', '7,648', '7,65', '0,01 (un centième)']
        ]
      }
    },
    {
      title: '4. Notion d\'intercalation décimale',
      content: [
        "Propriété fondamentale : Entre deux nombres décimaux distincts, il existe une infinité d'autres décimaux.",
        "• Exemple : Trouver un décimal entre 3,4 et 3,5.",
        "• Solution : On ajoute un zéro (3,40 et 3,50), ce qui permet d'insérer 3,41 ; 3,42 ; 3,456 etc."
      ]
    }
  ],
  diagram: {
    title: 'Comparaison et Encadrement des Décimaux',
    root: 'COMPARAISON DÉCIMALE',
    branches: [
      {
        name: 'Étape 1 : Parties Entières',
        subtitle: 'Priorité absolue',
        items: ['Si entiers différents : le plus grand gagne (12,1 > 9,99)', 'Si entiers égaux : passer à l\'étape 2']
      },
      {
        name: 'Étape 2 : Rang par Rang',
        subtitle: 'De gauche à droite',
        items: ['Dixièmes d\'abord (8,3 > 8,25)', 'Centièmes ensuite si dixièmes égaux', 'Astuce : ajouter des zéros (8,30 > 8,25)']
      },
      {
        name: 'Encadrement & Intercalation',
        subtitle: 'Localisation précise',
        items: ['À l\'unité près : 7 < 7,64 < 8', 'Au dixième : 7,6 < 7,64 < 7,7', 'Intercalation : 3,40 < 3,45 < 3,50']
      }
    ]
  },
  conclusion:
    "En conclusion, la comparaison des nombres décimaux ne s'appuie jamais sur la longueur apparente de l'écriture, mais sur l'analyse ordonnée des rangs. L'égalisation par des zéros à droite constitue l'outil le plus fiable pour ranger et encadrer sans faute."
};

export const LESSON_4_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-4',
  number: 'Leçon 4',
  title: 'Valeurs approchées — Troncature et arrondi d\'un décimal',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "En sciences comme dans le commerce, les calculs aboutissent régulièrement à des nombres décimaux comportant une longue suite de chiffres après la virgule. Pour communiquer une mesure pratique ou estimer un résultat, il est nécessaire de savoir simplifier ces écritures grâce aux valeurs approchées. Cette quatrième leçon détaille les deux démarches mathématiques officielles : la troncature (brute par défaut) et l'arrondi (valeur la plus proche), ainsi que le traitement particulier des retenues en présence du chiffre 9.",
  fullText: `Leçon 4 : Valeurs approchées — Troncature et arrondi d'un décimal

Introduction : En sciences comme dans le commerce, les calculs aboutissent régulièrement à des nombres décimaux comportant une longue suite de chiffres après la virgule. Pour communiquer une mesure pratique ou estimer un résultat, il est nécessaire de savoir simplifier ces écritures grâce aux valeurs approchées. Cette quatrième leçon détaille les deux démarches mathématiques officielles : la troncature (brute par défaut) et l'arrondi (valeur la plus proche), ainsi que le traitement particulier des retenues en présence du chiffre 9.

1. La Troncature (Valeur approchée par défaut)
La troncature consiste à « couper » littéralement le nombre au rang demandé, en supprimant tous les chiffres qui se trouvent à sa droite, sans aucune modification du dernier chiffre conservé.
• C'est toujours une valeur approchée par défaut (inférieure ou égale au nombre réel).
Exemples pour le nombre 15,783 :
• Troncature à l'unité près : on coupe juste avant la virgule ➔ 15.
• Troncature au dixième près (0,1) : on coupe après le premier chiffre après la virgule ➔ 15,7.
• Troncature au centième près (0,01) : on coupe après le deuxième chiffre après la virgule ➔ 15,78.

2. L'Arrondi (Valeur approchée la plus proche)
Pour déterminer l'arrondi d'un nombre à un rang donné, on regarde attentivement le premier chiffre situé immédiatement après ce rang (le chiffre suivant) :
• Règle 1 : Si ce chiffre suivant est 0, 1, 2, 3 ou 4 (strictement inférieur à 5) : on conserve le chiffre du rang sans le modifier. On dit qu'on arrondit par défaut.
• Règle 2 : Si ce chiffre suivant est 5, 6, 7, 8 ou 9 (supérieur ou égal à 5) : on ajoute 1 au chiffre du rang. On dit qu'on arrondit par excès.

3. Exemples d'application riches et détaillés
Soit le nombre décimal complexe : 15,783.
• À l'unité près :
  - Le chiffre du rang des unités est 5. Le chiffre suivant (dixièmes) est 7.
  - Puisque 7 ≥ 5, on ajoute 1 à l'unité : 15 + 1 = 16.
  - L'arrondi à l'unité près est 16.
• Au dixième près (0,1) :
  - Le chiffre des dixièmes est 7. Le chiffre suivant (centièmes) est 8.
  - Puisque 8 ≥ 5, on ajoute 1 au dixième : 15,7 + 0,1 = 15,8.
  - L'arrondi au dixième près est 15,8.
• Au centième près (0,01) :
  - Le chiffre des centièmes est 8. Le chiffre suivant (millièmes) est 3.
  - Puisque 3 < 5, on conserve le chiffre 8 : 15,78.
  - L'arrondi au centième près est 15,78.

4. Cas particulier de l'arrondi avec un 9 (La retenue en cascade)
Si le chiffre à augmenter lors d'un arrondi par excès est un 9, il se transforme en 0 et engendre obligatoirement une retenue sur le rang situé immédiatement à sa gauche.
Exemple : Trouver l'arrondi au dixième de 4,96.
• Le chiffre des dixièmes est 9. Le chiffre suivant est 6.
• Puisque 6 ≥ 5, on doit augmenter 9 de 1.
• 9 dixièmes + 1 dixième = 10 dixièmes = 1 unité entière !
• L'arrondi au dixième de 4,96 est donc rigoureusement 5,0 (on garde le zéro pour signifier que l'arrondi a été fait au dixième près).

Conclusion : En conclusion, la troncature coupe brutalement sans regarder la suite, alors que l'arrondi observe le chiffre suivant avec la bascule critique du chiffre 5. Savoir manier ces deux outils permet d'adapter la précision d'un résultat numérique aux réalités de la vie pratique.` ,
  sections: [
    {
      title: '1. Définition et méthode de la troncature',
      content: [
        "La troncature est un découpage net au rang choisi :",
        "• On supprime purement et simplement tous les chiffres à droite du rang demandé.",
        "• Aucun chiffre conservé n'est modifié.",
        "• Elle donne toujours la valeur approchée par défaut à ce rang."
      ]
    },
    {
      title: '2. L\'algorithme universel de l\'arrondi',
      content: [
        "Pour arrondir au rang R, on observe le chiffre immédiatement à sa droite :",
        "• Si chiffre suivant ∈ {0, 1, 2, 3, 4} : on conserve le chiffre du rang R (arrondi par défaut).",
        "• Si chiffre suivant ∈ {5, 6, 7, 8, 9} : on ajoute +1 au chiffre du rang R (arrondi par excès)."
      ]
    },
    {
      title: '3. Tableau comparatif d\'application sur 15,783',
      content: [
        "Synthèse méthodique des résultats selon le rang visé :"
      ],
      table: {
        headers: ['Rang demandé', 'Troncature (défaut)', 'Chiffre suivant observé', 'Règle appliquée', 'Arrondi obligatoire'],
        rows: [
          ['À l\'unité près', '15', '7', '7 ≥ 5 ➔ excès (+1)', '16 (car 15 + 1)'],
          ['Au dixième près (0,1)', '15,7', '8', '8 ≥ 5 ➔ excès (+0,1)', '15,8 (car 15,7 + 0,1)'],
          ['Au centième près (0,01)', '15,78', '3', '3 < 5 ➔ défaut (inchangé)', '15,78 (conservé)']
        ]
      }
    },
    {
      title: '4. Cas particulier du chiffre 9 et propagation de retenue',
      content: [
        "Quand le chiffre à incrémenter est un 9 :",
        "• 9 + 1 donne 10, ce qui pose 0 et crée une retenue sur la colonne de gauche.",
        "• Exemple officiel : Arrondi au dixième de 4,96.",
        "  Le centième est 6 (≥ 5), donc 9 dixièmes devient 10 dixièmes. On obtient 5,0.",
        "• Conserver le zéro : Écrire 5,0 au lieu de 5 indique la précision au dixième."
      ]
    }
  ],
  diagram: {
    title: 'Méthodologie des Valeurs Approchées',
    root: 'VALEURS APPROCHÉES',
    branches: [
      {
        name: '1. La Troncature',
        subtitle: 'Coupure nette',
        items: ['On efface tous les chiffres à droite', 'Aucune modification', 'Valeur par défaut (15,783 ➔ 15,7)']
      },
      {
        name: '2. L\'Arrondi',
        subtitle: 'Bascule du chiffre 5',
        items: ['Chiffre suivant < 5 : inchangé (par défaut)', 'Chiffre suivant ≥ 5 : +1 au rang (par excès)', 'Exemple : 15,783 au dixième ➔ 15,8']
      },
      {
        name: '3. Cas Particulier du 9',
        subtitle: 'Retenue en cascade',
        items: ['9 + 1 = 10 (pose 0 et retient 1)', 'Arrondi au dixième de 4,96 = 5,0', 'Conserver le zéro de précision']
      }
    ]
  },
  conclusion:
    "En conclusion, la troncature coupe brutalement sans regarder la suite, alors que l'arrondi observe le chiffre suivant avec la bascule critique du chiffre 5. Savoir manier ces deux outils permet d'adapter la précision d'un résultat numérique aux réalités de la vie pratique."
};

export const LESSON_5_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-5',
  number: 'Leçon 5',
  title: 'Repérage sur une demi-droite graduée et lecture d\'abscisses',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "La demi-droite graduée est la passerelle fondamentale reliant l'arithmétique des nombres à la géométrie de l'espace. Elle offre une représentation visuelle et spatiale continue des grandeurs numériques. Sur cette ligne orientée, chaque point possède une adresse chiffrée unique appelée abscisse. Cette cinquième leçon définit les trois conditions de construction d'une demi-droite graduée, la méthode de calcul du pas de graduation et la lecture rigoureuse d'abscisses décimales.",
  fullText: `Leçon 5 : Repérage sur une demi-droite graduée et lecture d'abscisses

Introduction : La demi-droite graduée est la passerelle fondamentale reliant l'arithmétique des nombres à la géométrie de l'espace. Elle offre une représentation visuelle et spatiale continue des grandeurs numériques. Sur cette ligne orientée, chaque point possède une adresse chiffrée unique appelée abscisse. Cette cinquième leçon définit les trois conditions de construction d'une demi-droite graduée, la méthode de calcul du pas de graduation et la lecture rigoureuse d'abscisses décimales.

1. Propriétés d'une demi-droite graduée
Pour construire une demi-droite graduée de manière réglementaire, il faut obligatoirement fixer trois éléments géométriques :
• Une origine notée O, qui correspond au nombre zéro (0).
• Un sens de lecture, indiqué par une flèche à l'extrémité droite de la demi-droite.
• Une unité de longueur constante que l'on reporte régulièrement à partir de l'origine (par exemple 1 cm, 2 cm ou 5 carreaux pour représenter 1 unité).

2. Notion d'Abscisse
Sur une demi-droite graduée, chaque point est repéré par un nombre unique appelé son abscisse.
• On note l'abscisse d'un point entre parenthèses juste après son nom majuscule :
  - M(2) signifie : « Le point M a pour abscisse 2 » (il est situé à 2 unités de l'origine O).
  - P(0) signifie que P est confondu avec l'origine.

3. Exemple avec schéma pas-à-pas et calcul du pas
Analysons une demi-droite où l'unité principale (entre les entiers 1 et 2) est partagée en 10 petites graduations égales :
• Calcul de la valeur d'une petite graduation (le pas) :
  Longueur de l'intervalle = 2 – 1 = 1 unité.
  Nombre de subdivisions = 10.
  Valeur d'une subdivision = 1 ÷ 10 = 0,1 (un dixième).
Chaque petit trait supplémentaire ajoute donc 0,1 à la coordonnée précédente.

Repérage concret du point A :
• Le point A est positionné après le grand repère 1, précisément sur la 4ème petite graduation.
• Calcul mathématique de sa position :
  Abscisse de A = 1 + (4 × 0,1) = 1 + 0,4 = 1,4.
• On écrit de façon formelle et officielle : A(1,4).

4. Repérage d'autres points remarquables
Sur le même modèle :
• Le point B situé sur le 8ème petit trait après 2 aura pour abscisse : 2 + (8 × 0,1) = 2,8, noté B(2,8).
• Le point C situé au milieu exact entre 3 et 4 aura pour abscisse : 3,5, noté C(3,5).

Conclusion : En conclusion, la demi-droite graduée matérialise l'ordre et la distance entre les nombres. En calculant méthodiquement la valeur d'une sous-graduation, l'élève de 6ème lit et place avec une exactitude absolue n'importe quelle abscisse entière ou décimale.` ,
  sections: [
    {
      title: '1. Les trois critères obligatoires d\'une demi-droite graduée',
      content: [
        "Une demi-droite graduée ne peut exister sans trois piliers :",
        "• 1. L'Origine O : point de départ correspondant au nombre 0.",
        "• 2. Le Sens : flèche vers la droite indiquant la croissance des nombres.",
        "• 3. L'Unité de longueur : segment reporté de manière parfaitement régulière."
      ]
    },
    {
      title: '2. Définition et notation de l\'abscisse',
      content: [
        "• L'abscisse est le nombre qui indique la position exacte d'un point par rapport à l'origine.",
        "• Notation formelle : Nom du point en majuscule suivi de l'abscisse entre parenthèses, sans signe égal.",
        "• Exemples : O(0), I(1), A(1,4), B(2,8)."
      ]
    },
    {
      title: '3. Méthode pour déterminer la valeur d\'une sous-graduation',
      content: [
        "Pour lire une abscisse sans erreur :",
        "• Étape 1 : Repérer deux nombres entiers consécutifs (ex : entre 1 et 2).",
        "• Étape 2 : Compter le nombre d'intervalles égaux entre eux (ex : 10 intervalles).",
        "• Étape 3 : Diviser l'écart par le nombre d'intervalles : (2 – 1) / 10 = 0,1.",
        "• Étape 4 : Multiplier le nombre de pas par 0,1 et l'ajouter à l'entier de départ."
      ],
      table: {
        headers: ['Point', 'Entier précédent', 'Graduations après entier', 'Calcul détaillé', 'Abscisse officielle'],
        rows: [
          ['Origine O', '0', '0', '0', 'O(0)'],
          ['Point A', '1', '4 petites graduations', '1 + (4 × 0,1) = 1 + 0,4', 'A(1,4)'],
          ['Point B', '2', '8 petites graduations', '2 + (8 × 0,1) = 2 + 0,8', 'B(2,8)'],
          ['Point C', '3', '5 petites graduations (milieu)', '3 + (5 × 0,1) = 3 + 0,5', 'C(3,5)'],
          ['Point D', '4', '1 petite graduation', '4 + (1 × 0,1) = 4 + 0,1', 'D(4,1)']
        ]
      }
    },
    {
      title: '4. Schéma textuel vectoriel de la demi-droite graduée',
      content: [
        "Visualisation de la graduation avec le pas de 0,1 :",
        "[O]---------[1]----(A)-----[2]--------(B)---[3]-----(C)-----[4]---(D)---->[X]",
        " 0           1     1,4      2          2,8    3      3,5      4   4,1",
        "Chaque tiret entre deux entiers représente 0,1 unité."
      ]
    }
  ],
  diagram: {
    title: 'Repérage sur la Demi-Droite Graduée',
    root: 'DEMI-DROITE GRADUÉE',
    branches: [
      {
        name: '3 Éléments Clés',
        subtitle: 'Construction géométrique',
        items: ['Origine O associée à 0', 'Sens orienté vers la droite (flèche)', 'Unité de longueur régulière']
      },
      {
        name: 'Calcul du Pas',
        subtitle: 'Sous-graduations',
        items: ['Écart entre deux repères / nb d\'intervalles', '1 unité divisée en 10 = 0,1 par cran', '1 unité divisée en 4 = 0,25 par cran']
      },
      {
        name: 'Lecture & Notation',
        subtitle: 'Formalisme mathématique',
        items: ['Nom + parenthèses : A(1,4)', 'Origine O(0)', 'Ordre spatial conforme à l\'ordre numérique']
      }
    ]
  },
  conclusion:
    "En conclusion, la demi-droite graduée matérialise l'ordre et la distance entre les nombres. En calculant méthodiquement la valeur d'une sous-graduation, l'élève de 6ème lit et place avec une exactitude absolue n'importe quelle abscisse entière ou décimale."
};
