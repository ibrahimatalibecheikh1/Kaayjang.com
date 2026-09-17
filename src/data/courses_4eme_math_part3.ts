import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 4ÈME
// ACTIVITÉS NUMÉRIQUES — PROGRAMME OFFICIEL SÉNÉGALAIS & FRANCOPHONE
// PARTIE 3 : LEÇONS 9 À 12 (ÉQUATIONS, PROPORTIONNALITÉ, VITESSES & STATS)
// DÉVELOPPEMENT INTÉGRAL, THÉORIE APPROFONDIE, RÈGLES FORMELLES, EXEMPLES
// ET 2 EXERCICES COMPLETS AVEC CORRIGÉS DÉTAILLÉS PAS-À-PAS PAR LEÇON
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 9 : ÉQUATIONS DU PREMIER DEGRÉ À UNE INCONNUE
// -------------------------------------------------------------------------
export const LESSON_9_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-9',
  number: 'Leçon 9',
  title: 'Équations du premier degré à une inconnue',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "La résolution d'équations est le cœur battant des mathématiques appliquées. Depuis les traités d'Al-Khwarizmi au IXe siècle, la méthode algébrique permet de trouver une quantité inconnue dissimulée au sein de contraintes et de relations d'égalité. En classe de 4ème, l'élève apprend à manier les principes fondamentaux de la « balance », à isoler rigoureusement l'inconnue x dans les équations du premier degré et à résoudre des problèmes concrets de la vie quotidienne par la démarche de mise en équation.",
  fullText: `Leçon 9 : Équations du premier degré à une inconnue

Introduction :
La résolution d'équations est le cœur battant des mathématiques appliquées. Depuis les traités d'Al-Khwarizmi au IXe siècle, la méthode algébrique permet de trouver une quantité inconnue dissimulée au sein de contraintes et de relations d'égalité. En classe de 4ème, l'élève apprend à manier les principes fondamentaux de la « balance », à isoler rigoureusement l'inconnue x dans les équations du premier degré et à résoudre des problèmes concrets de la vie quotidienne par la démarche de mise en équation.

1. Notion d'équation et de solution
Définitions fondamentales :
- Une équation est une égalité mathématique comportant un ou plusieurs nombres inconnus désignés par des lettres (généralement x).
- Les expressions situées de part et d'autre du signe '=' s'appellent les membres de l'équation : le membre de gauche et le membre de droite.
- Une équation est dite du « premier degré » si l'inconnue x apparaît uniquement à la puissance 1 (pas de x^2, de x^3 ou de 1/x).
- Résoudre une équation d'inconnue x consiste à déterminer TOUTES les valeurs numériques de x pour lesquelles l'égalité est vérifiée. Une telle valeur est appelée une SOLUTION de l'équation.

Tester si un nombre est solution :
Pour tester si un nombre donné est solution :
1. On remplace x par ce nombre dans le membre de gauche et on calcule sa valeur numérique séparément.
2. On remplace x par ce nombre dans le membre de droite et on calcule sa valeur séparément.
3. Si les deux résultats sont parfaitement égaux, le nombre est solution ; sinon, il ne l'est pas.
Exemple : Le nombre 3 est-il solution de l'équation 4x - 5 = 7 ?
• Membre de gauche pour x = 3 : 4 × 3 - 5 = 12 - 5 = 7.
• Membre de droite : 7.
Comme 7 = 7, le nombre 3 est bien solution de l'équation.

2. Propriétés fondamentales de l'égalité (Le principe de la balance)
Une équation fonctionne comme une balance à deux plateaux en parfait équilibre :
Propriété 1 :
Une égalité reste vraie si l'on AJOUTE ou si l'on SOUSTRAIT un même nombre aux deux membres :
Si A = B, alors A + c = B + c et A - c = B - c.
Propriété 2 :
Une égalité reste vraie si l'on MULTIPLIE ou si l'on DIVISE par un même nombre NON NUL les deux membres :
Si A = B (avec c ≠ 0), alors A × c = B × c et A / c = B / c.

3. Méthode générale de résolution des équations types
Type 1 : ax + b = c
Objectif : Isoler l'inconnue x seule dans le membre de gauche.
Étape 1 : Éliminer la constante +b en soustrayant b des deux côtés :
  ax + b - b = c - b => ax = c - b
Étape 2 : Éliminer le coefficient a en divisant les deux côtés par a (a ≠ 0) :
  x = (c - b) / a
Exemple détaillé :
Résoudre 3x + 5 = 17
• On soustrait 5 aux deux membres : 3x = 17 - 5 => 3x = 12
• On divise par 3 les deux membres : x = 12 / 3 = 4
• Conclusion : La solution de l'équation est 4 (ou S = {4}).

Type 2 : ax + b = cx + d (inconnue dans les deux membres)
Méthode :
Étape 1 : Regrouper tous les termes en x à gauche (en soustrayant cx des deux côtés).
Étape 2 : Regrouper toutes les constantes à droite (en soustrayant b des deux côtés).
Étape 3 : Réduire chaque membre : (a - c)x = d - b.
Étape 4 : Diviser par le coefficient de x.
Exemple détaillé :
Résoudre 7x - 8 = 2x + 12
• 7x - 2x = 12 + 8
• 5x = 20
• x = 20 / 5 = 4. La solution est 4.

4. Résolution de problèmes par mise en équation
La résolution d'un problème concret suit impérativement une démarche en 4 étapes :
1. Choix et déclaration claire de l'inconnue (ex: « Soit x le prix d'un livre... »).
2. Mise en équation du problème à partir des données de l'énoncé.
3. Résolution mathématique de l'équation.
4. Vérification et conclusion par une phrase réponse contextualisée.

Exercice 1 : Résolution d'équations algébriques
Énoncé :
Résoudre dans l'ensemble des nombres relatifs les équations suivantes :
1. 4x - 7 = 21
2. -5x + 9 = -16
3. 8x + 3 = 3x - 22
4. 3(2x - 4) = 5x + 7
Corrigé détaillé pas-à-pas :
1. Équation 1 : 4x - 7 = 21
   • On ajoute 7 aux deux membres : 4x = 21 + 7 => 4x = 28
   • On divise par 4 : x = 28 / 4 = 7.
   • Vérification : 4(7) - 7 = 28 - 7 = 21 (vrai). La solution est 7.
2. Équation 2 : -5x + 9 = -16
   • On soustrait 9 aux deux membres : -5x = -16 - 9 => -5x = -25
   • On divise par -5 : x = (-25) / (-5) = 5.
   • La solution est 5.
3. Équation 3 : 8x + 3 = 3x - 22
   • On regroupe les termes en x à gauche et les constantes à droite :
     8x - 3x = -22 - 3
   • On réduit : 5x = -25
   • On divise par 5 : x = -25 / 5 = -5.
   • La solution est -5.
4. Équation 4 : 3(2x - 4) = 5x + 7
   • On développe d'abord le membre de gauche : 6x - 12 = 5x + 7
   • On regroupe : 6x - 5x = 7 + 12
   • On réduit : x = 19.
   • La solution est 19.

Exercice 2 : Problème concret de partage et d'âge
Énoncé :
Fatou a 11 ans et son père a 41 ans.
Dans combien d'années l'âge du père sera-t-il exactement le triple de l'âge de Fatou ?
Résoudre ce problème en rédigeant les 4 étapes obligatoires de mise en équation.
Corrigé détaillé pas-à-pas :
• Étape 1 : Choix de l'inconnue
  Soit x le nombre d'années cherché (avec x entier positif).
• Étape 2 : Mise en équation
  Dans x années :
  - L'âge de Fatou sera : 11 + x.
  - L'âge de son père sera : 41 + x.
  La condition « l'âge du père est le triple de l'âge de Fatou » se traduit par l'égalité :
  41 + x = 3 × (11 + x)
• Étape 3 : Résolution de l'équation
  On développe le membre de droite : 41 + x = 33 + 3x
  On regroupe les termes en x à droite (ou à gauche) :
  41 - 33 = 3x - x
  8 = 2x
  x = 8 / 2 = 4.
• Étape 4 : Vérification et conclusion
  - Dans 4 ans, Fatou aura : 11 + 4 = 15 ans.
  - Dans 4 ans, son père aura : 41 + 4 = 45 ans.
  - Or, 15 × 3 = 45 ans, ce qui est bien le triple exact !
  Conclusion rédigée : C'est dans 4 ans que l'âge du père sera le triple de celui de Fatou.

Conclusion :
L'équation du premier degré transforme un problème énigmatique en une démarche logique et universelle. La règle d'or consiste à préserver l'équilibre de l'égalité en appliquant la même opération aux deux membres jusqu'à isoler x.`
  ,
  sections: [
    {
      title: '1. Notion d\'équation, de membres et de solution',
      content: [
        "Définition : Une équation est une égalité comportant une lettre inconnue x. Résoudre l'équation consiste à trouver toutes les valeurs de x vérifiant l'égalité.",
        "Tester une solution : Remplacer x dans le membre de gauche et de droite et vérifier que les deux valeurs calculées coïncident.",
        "Équation du premier degré : L'inconnue x est élevée à la puissance 1 uniquement."
      ]
    },
    {
      title: '2. Propriétés de la balance et méthode de résolution',
      content: [
        "Propriété d'addition/soustraction : On peut ajouter ou soustraire un même nombre aux deux membres sans modifier les solutions : ax + b = c => ax = c - b.",
        "Propriété de multiplication/division : On peut multiplier ou diviser par un nombre non nul les deux membres : ax = d => x = d / a.",
        "Méthode pour ax + b = cx + d : Regrouper tous les termes en x d'un côté et toutes les constantes de l'autre côté de l'égalité."
      ],
      table: {
        headers: ['Équation type', 'Étape 1 : Isoler les termes en x', 'Étape 2 : Diviser par le coefficient', 'Solution finale'],
        rows: [
          ['3x + 5 = 17', '3x = 17 - 5 = 12', 'x = 12 / 3', 'x = 4'],
          ['5x - 8 = -23', '5x = -23 + 8 = -15', 'x = -15 / 5', 'x = -3'],
          ['7x - 2 = 2x + 18', '7x - 2x = 18 + 2 => 5x = 20', 'x = 20 / 5', 'x = 4'],
          ['-4x + 9 = 25', '-4x = 25 - 9 = 16', 'x = 16 / (-4)', 'x = -4']
        ]
      }
    },
    {
      title: '3. Démarche de résolution d\'un problème concret',
      content: [
        "1. Choix de l'inconnue : Déclarer précisément ce que représente x.",
        "2. Mise en équation : Traduire le texte en une égalité mathématique.",
        "3. Résolution : Trouver la valeur numérique de x.",
        "4. Vérification et conclusion : Vérifier la cohérence et répondre en français."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Résolution d\'équations algébriques',
          content: [
            "Résoudre les équations suivantes :",
            "1. 4x - 7 = 21",
            "2. -5x + 9 = -16",
            "3. 8x + 3 = 3x - 22",
            "4. 3(2x - 4) = 5x + 7"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. 4x = 21 + 7 = 28 => x = 28/4 = 7. Solution : 7.",
            "2. -5x = -16 - 9 = -25 => x = -25/(-5) = 5. Solution : 5.",
            "3. 8x - 3x = -22 - 3 => 5x = -25 => x = -25/5 = -5. Solution : -5.",
            "4. 6x - 12 = 5x + 7 => 6x - 5x = 7 + 12 => x = 19. Solution : 19."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Problème d\'âges',
          content: [
            "Fatou a 11 ans et son père a 41 ans.",
            "Dans combien d'années l'âge du père sera-t-il exactement le triple de l'âge de Fatou ?",
            "Rédiger les 4 étapes complètes de résolution."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "• Inconnue : Soit x le nombre d'années.",
            "• Équation : 41 + x = 3(11 + x).",
            "• Résolution : 41 + x = 33 + 3x => 41 - 33 = 3x - x => 8 = 2x => x = 4.",
            "• Vérification : Dans 4 ans, Fatou aura 15 ans et son père 45 ans (15 × 3 = 45).",
            "• Conclusion : C'est dans 4 ans que l'âge du père sera le triple de celui de Fatou."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : RÉSOLUTION D\'ÉQUATIONS DU 1ER DEGRÉ',
    root: 'ÉQUATION : ax + b = cx + d',
    branches: [
      {
        name: 'REGROUPEMENT',
        subtitle: 'Principe de la balance',
        items: [
          'Transposer les termes en x à gauche (ax - cx)',
          'Transposer les constantes à droite (d - b)',
          'Changer de signe lors du passage du signe ='
        ]
      },
      {
        name: 'RÉDUCTION & DIVISION',
        subtitle: 'Isoler l\'inconnue',
        items: [
          'Obtenir la forme simplifiée : kx = m',
          'Diviser par le coefficient : x = m / k (avec k ≠ 0)',
          'Attention à la règle des signes'
        ]
      },
      {
        name: 'PROBLÈME CONCRET',
        subtitle: '4 étapes obligatoires',
        items: [
          '1. Choix de l\'inconnue x',
          '2. Mise en équation du texte',
          '3. Résolution mathématique',
          '4. Vérification et phrase réponse'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, résoudre une équation du premier degré consiste à maintenir l'égalité équilibrée tout en isolant l'inconnue. Cette compétence clé permet de modéliser et de résoudre une variété infinie de situations pratiques."
};

// -------------------------------------------------------------------------
// LEÇON 10 : LA PROPORTIONNALITÉ ET QUATRIÈME PROPORTIONNELLE
// -------------------------------------------------------------------------
export const LESSON_10_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-10',
  number: 'Leçon 10',
  title: 'La proportionnalité et quatrième proportionnelle',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "La proportionnalité régit un nombre incalculable de phénomènes économiques, physiques et quotidiens : le coût des denrées au marché, les recettes de cuisine, les pourcentages de réductions lors des soldes, les taux d'intérêt, les échelles cartographiques et les dosages chimiques. En 4ème, l'étude de la proportionnalité s'articule autour de l'égalité des produits en croix, du calcul rapide de la quatrième proportionnelle et de la caractérisation graphique par une droite passant par l'origine.",
  fullText: `Leçon 10 : La proportionnalité et quatrième proportionnelle

Introduction :
La proportionnalité régit un nombre incalculable de phénomènes économiques, physiques et quotidiens : le coût des denrées au marché, les recettes de cuisine, les pourcentages de réductions lors des soldes, les taux d'intérêt, les échelles cartographiques et les dosages chimiques. En 4ème, l'étude de la proportionnalité s'articule autour de l'égalité des produits en croix, du calcul rapide de la quatrième proportionnelle et de la caractérisation graphique par une droite passant par l'origine.

1. Définition et tableau de proportionnalité
Définition formelle :
Deux grandeurs mesurables sont dites proportionnelles lorsque les valeurs de l'une s'obtiennent en multipliant systématiquement toutes les valeurs correspondantes de l'autre par un nombre fixe et constant k (avec k ≠ 0).
Ce nombre k est appelé le COEFFICIENT DE PROPORTIONNALITÉ.

Caractérisation par un tableau :
Un tableau à deux lignes est un tableau de proportionnalité si les quotients de chaque valeur de la seconde ligne par la valeur correspondante de la première ligne sont tous rigoureusement égaux.
Quotient constant : y1 / x1 = y2 / x2 = y3 / x3 = ... = k.

Caractérisation graphique :
Dans un repère du plan, une situation de proportionnalité est représentée graphiquement par des points qui sont tous parfaitement ALIGNÉS sur une droite passant par l'ORIGINE du repère (0, 0).
Si la droite ne passe pas par l'origine ou si les points ne sont pas alignés, il n'y a pas proportionnalité !

2. La quatrième proportionnelle et l'égalité des produits en croix
Propriété fondamentale de l'égalité des produits en croix :
Considérons quatre nombres a, b, c et d (avec b ≠ 0 et d ≠ 0).
Le tableau à 4 cases :
[ a , c ]
[ b , d ]
est un tableau de proportionnalité si et seulement si :
a × d = b × c

Définition de la quatrième proportionnelle :
Dans un tableau de proportionnalité à 4 cases où trois valeurs sont connues, la quatrième valeur inconnue s'appelle la QUATRIÈME PROPORTIONNELLE.
Si l'on cherche la valeur x telle que :
[ a , c ]
[ b , x ]
Alors, en vertu de l'égalité des produits en croix : a × x = b × c
On en déduit directement la formule :
x = (b × c) / a

Exemple classique :
Si 3 kg de mangues coûtent 1 800 FCFA, combien coûtent 5 kg de mangues ?
• Tableau :
  Masse (kg) : [ 3 , 5 ]
  Prix (FCFA) : [ 1800 , x ]
• Produit en croix : 3 × x = 1 800 × 5 = 9 000
• x = 9 000 / 3 = 3 000 FCFA. Les 5 kg coûtent 3 000 FCFA.

3. Applications directes : Pourcentages et échelles
A. Calculs de pourcentages :
Appliquer un pourcentage de p % à une quantité Q revient à multiplier cette quantité par la fraction p / 100 :
Valeur = Q × (p / 100)
Exemple : Dans un collège de 650 élèves, 60 % sont des filles.
Nombre de filles = 650 × (60 / 100) = 650 × 0,6 = 390 filles.

B. Échelle d'une carte ou d'un plan :
L'échelle E est le coefficient de proportionnalité permettant de passer des distances réelles aux distances mesurées sur le plan (dans la même unité) :
Échelle E = (Distance sur le plan) / (Distance réelle sur le terrain)
Exemple : Une échelle de 1 / 50 000 signifie que 1 cm sur la carte représente 50 000 cm dans la réalité (soit 500 m ou 0,5 km).

Exercice 1 : Tableaux, produit en croix et reconnaissances
Énoncé :
1. Les tableaux suivants représentent-ils des situations de proportionnalité ? Justifier par un calcul.
   Tableau 1 :
   Ligne 1 : [ 4 ; 6 ; 10 ]
   Ligne 2 : [ 14 ; 21 ; 35 ]
   Tableau 2 :
   Ligne 1 : [ 3 ; 5 ; 8 ]
   Ligne 2 : [ 9 ; 15 ; 25 ]
2. Calculer la quatrième proportionnelle x, y et z :
   a) [ 7 , 28 ] et [ 5 , x ]
   b) [ 12 , y ] et [ 18 , 45 ]
   c) [ z , 42 ] et [ 9 , 63 ]
Corrigé détaillé pas-à-pas :
1. Test de proportionnalité :
   • Pour le tableau 1 :
     14 / 4 = 3,5 ; 21 / 6 = 3,5 ; 35 / 10 = 3,5.
     Tous les rapports sont égaux à 3,5. C'est bien un tableau de proportionnalité (coefficient = 3,5).
   • Pour le tableau 2 :
     9 / 3 = 3 ; 15 / 5 = 3 ; mais 25 / 8 = 3,125 ≠ 3.
     Les quotients ne sont pas tous égaux, donc ce n'est PAS un tableau de proportionnalité.
2. Calculs de quatrième proportionnelle :
   • a) 7 × x = 5 × 28 => x = (5 × 28) / 7 = 140 / 7 = 20.
   • b) 18 × y = 12 × 45 => y = (12 × 45) / 18 = 540 / 18 = 30.
   • c) z × 63 = 9 × 42 => z = (9 × 42) / 63 = 378 / 63 = 6.

Exercice 2 : Pourcentages et échelle cartographique
Énoncé :
1. Problème de solde :
   Un ordinateur portable affiché initialement au prix de 320 000 FCFA bénéficie d'une remise exceptionnelle de 15 %.
   a) Calculer en FCFA le montant de la réduction.
   b) Quel est le prix final payé par le client ?
2. Problème d'échelle :
   Sur une carte de la région de Dakar à l'échelle 1 / 25 000, la distance mesurée en ligne droite entre deux carrefours est de 6,4 cm.
   a) Quelle est la distance réelle sur le terrain en centimètres, puis en mètres et en kilomètres ?
   b) Si deux villages distants en réalité de 5 km sont représentés sur cette même carte, quelle sera leur distance sur le papier en centimètres ?
Corrigé détaillé pas-à-pas :
1. Calculs commerciaux :
   a) Montant de la réduction : Remise = 320 000 × (15 / 100) = 320 000 × 0,15 = 48 000 FCFA.
   b) Prix final après réduction : Prix = 320 000 - 48 000 = 272 000 FCFA.
      (Autre méthode directe : 320 000 × (1 - 0,15) = 320 000 × 0,85 = 272 000 FCFA).
2. Problème d'échelle :
   a) Distance réelle :
      Distance réelle = 6,4 cm × 25 000 = 160 000 cm.
      Conversion : 160 000 cm = 1 600 m = 1,6 km.
      La distance réelle est de 1,6 km.
   b) Distance sur la carte :
      Distance réelle = 5 km = 5 000 m = 500 000 cm.
      Distance carte = 500 000 / 25 000 = 20 cm.
      Sur la carte, les deux villages sont distants de 20 cm.

Conclusion :
La proportionnalité et la méthode du produit en croix constituent des automatismes incontournables. Qu'il s'agisse de pourcentages, de commerce ou de géométrie, l'égalité a × d = b × c résout instantanément toute situation de passage à l'échelle.`
  ,
  sections: [
    {
      title: '1. Reconnaître la proportionnalité et tableau de valeurs',
      content: [
        "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant par un coefficient constant k.",
        "Critère du tableau : Tous les quotients y/x de chaque colonne sont identiques.",
        "Critère graphique : La représentation graphique est une droite qui passe impérativement par l'origine du repère (0, 0)."
      ]
    },
    {
      title: '2. Produit en croix et calcul de la quatrième proportionnelle',
      content: [
        "Égalité des produits en croix : Pour un tableau [a, c] et [b, x], on a a × x = b × c.",
        "Formule de la quatrième proportionnelle : x = (b × c) / a.",
        "Exemple : 3 kg coûtent 1 800 FCFA => 5 kg coûtent (5 × 1 800) / 3 = 3 000 FCFA."
      ],
      table: {
        headers: ['Grandeur 1', 'Grandeur 2', 'Produit en croix', 'Valeur inconnue calculée'],
        rows: [
          ['Masse : 3 kg', 'Prix : 1 800 F', '3 × x = 5 × 1 800', 'x = 3 000 FCFA'],
          ['Distance plan : 1 cm', 'Réalité : 250 m', '1 × d = 6 × 250', 'd = 1 500 m (1,5 km)'],
          ['Total : 100 %', 'Part : 15 %', '100 × R = 15 × 320 000', 'R = 48 000 FCFA'],
          ['Temps : 60 min', 'Distance : 90 km', '60 × d = 45 × 90', 'd = 67,5 km']
        ]
      }
    },
    {
      title: '3. Applications pratiques : Pourcentages et Échelles',
      content: [
        "Pourcentages : Calculer p % d'une valeur revient à multiplier par p/100.",
        "Échelle : Échelle = (Distance sur le plan) / (Distance réelle dans la même unité)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Tableaux et quatrième proportionnelle',
          content: [
            "1. Déterminer si le tableau est de proportionnalité : [4; 6; 10] avec [14; 21; 35].",
            "2. Calculer x, y et z :",
            "   a) [7, 28] et [5, x]",
            "   b) [12, y] et [18, 45]",
            "   c) [z, 42] et [9, 63]"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. 14/4 = 3,5 ; 21/6 = 3,5 ; 35/10 = 3,5. Tous égaux => C'est bien un tableau de proportionnalité de coefficient 3,5.",
            "2. Quatrièmes proportionnelles :",
            "   • a) x = (5 × 28) / 7 = 140 / 7 = 20.",
            "   • b) y = (12 × 45) / 18 = 540 / 18 = 30.",
            "   • c) z = (9 × 42) / 63 = 378 / 63 = 6."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Remise commerciale et échelle de carte',
          content: [
            "1. Un ordinateur coûte 320 000 FCFA avec une remise de 15 %. Calculer la remise et le prix net payé.",
            "2. Sur une carte au 1/25 000, deux carrefours sont distants de 6,4 cm. Calculer la distance réelle en km.",
            "3. Deux villages distants de 5 km en réalité : quelle est leur distance sur cette carte en cm ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Remise = 320 000 × 0,15 = 48 000 FCFA. Prix payé = 320 000 - 48 000 = 272 000 FCFA.",
            "2. Distance réelle = 6,4 × 25 000 = 160 000 cm = 1 600 m = 1,6 km.",
            "3. 5 km = 500 000 cm. Distance sur la carte = 500 000 / 25 000 = 20 cm."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : PROPORTIONNALITÉ & PRODUIT EN CROIX',
    root: 'PROPORTIONNALITÉ',
    branches: [
      {
        name: 'DÉFINITION & TABLEAU',
        subtitle: 'Quotients constants',
        items: [
          'y = k × x (k = coefficient constant)',
          'Graphique : droite passant par l\'origine (0, 0)',
          'Quotients égaux sur toutes les colonnes'
        ]
      },
      {
        name: 'PRODUIT EN CROIX',
        subtitle: 'La quatrième proportionnelle',
        items: [
          'Égalité : a × d = b × c',
          'Formule : x = (b × c) / a',
          'Calcul immédiat et universel'
        ]
      },
      {
        name: 'APPLICATIONS',
        subtitle: 'Vie courante & Sciences',
        items: [
          'Pourcentages : Valeur × (p / 100)',
          'Échelles : Distance carte / Distance réelle',
          'Conversions de monnaie et dosages'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, la proportionnalité est une structure mathématique universelle. La formule de la quatrième proportionnelle issue du produit en croix est l'outil de référence pour aborder les vitesses moyennes et les conversions de grandeurs."
};

// -------------------------------------------------------------------------
// LEÇON 11 : GRANDEURS ET VITESSES MOYENNES
// -------------------------------------------------------------------------
export const LESSON_11_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-11',
  number: 'Leçon 11',
  title: 'Grandeurs et vitesses moyennes',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "La vitesse moyenne est l'une des grandeurs composées (grandeur quotient) les plus fondamentales de la physique et des mathématiques du collège. Qu'il s'agisse d'un automobiliste sur l'autoroute à péage Dakar-Diamniadio, d'un avion reliant Paris à Dakar ou de la course d'un athlète, le mouvement n'est jamais parfaitement constant. La vitesse moyenne synthétise l'ensemble du trajet en reliant la distance totale à la durée globale. La maîtrise des conversions entre heures décimales et minutes est la clé absolue de ce chapitre.",
  fullText: `Leçon 11 : Grandeurs et vitesses moyennes

Introduction :
La vitesse moyenne est l'une des grandeurs composées (grandeur quotient) les plus fondamentales de la physique et des mathématiques du collège. Qu'il s'agisse d'un automobiliste sur l'autoroute à péage Dakar-Diamniadio, d'un avion reliant Paris à Dakar ou de la course d'un athlète, le mouvement n'est jamais parfaitement constant. La vitesse moyenne synthétise l'ensemble du trajet en reliant la distance totale à la durée globale. La maîtrise des conversions entre heures décimales et minutes est la clé absolue de ce chapitre.

1. Définition et formules de la vitesse moyenne
Définition :
La vitesse moyenne v d'un corps mobile en déplacement est le quotient de la distance totale parcourue d par la durée totale t du parcours :
Formule fondamentale :
v = d / t

Formules dérivées déduites :
- Pour calculer la distance parcourue : d = v × t
- Pour calculer la durée du trajet : t = d / v

Cohérence des unités (impératif absolu) :
Les unités de distance, de temps et de vitesse doivent être en parfaite harmonie :
- Si la distance d est en kilomètres (km) et le temps t en heures (h), la vitesse v s'exprime en kilomètres par heure (km/h).
- Si la distance d est en mètres (m) et le temps t en secondes (s), la vitesse v s'exprime en mètres par seconde (m/s).

Passage entre km/h et m/s (Règle du facteur 3,6) :
Puisque 1 km = 1 000 m et 1 h = 3 600 s :
1 km/h = 1 000 m / 3 600 s = 1 / 3,6 m/s
Règle d'or :
• Pour passer de m/s à km/h : on MULTIPLIE par 3,6.
• Pour passer de km/h à m/s : on DIVISE par 3,6.
Exemple : 20 m/s = 20 × 3,6 = 72 km/h. Inversement, 90 km/h = 90 / 3,6 = 25 m/s.

2. Conversion des unités de temps (Heures décimales vs Heures et minutes)
PIÈGE MAJEUR : Le système horaire est sexagésimal (base 60) et NON décimal (base 10) !
2h 30min N'EST PAS ÉGAL à 2,3 heures ! 30 minutes représentent la moitié d'une heure, soit exactement 2,5 heures !

Règles de conversion :
A. Pour convertir des minutes en heures décimales : on DIVISE le nombre de minutes par 60.
   Formule : t (en h) = Heures + (Minutes / 60)
   Exemples :
   • 2h 45min = 2 + 45/60 = 2 + 0,75 = 2,75 h.
   • 1h 12min = 1 + 12/60 = 1 + 0,2 = 1,2 h.
   • 36 min = 36/60 = 0,6 h.

B. Pour convertir des heures décimales en heures et minutes : on conserve la partie entière pour les heures et on MULTIPLIE la partie décimale par 60 pour obtenir les minutes.
   Exemples :
   • 1,4 h = 1 h + (0,4 × 60 min) = 1 h 24 min.
   • 3,35 h = 3 h + (0,35 × 60 min) = 3 h 21 min.
   • 0,8 h = 0,8 × 60 min = 48 min.

3. Autres grandeurs composées courantes
- Le débit volumique D : quotient du volume d'eau V par le temps d'écoulement t : D = V / t (exprimé en L/s ou m^3/h).
- La masse volumique ρ (rhô) : quotient de la masse m par le volume V : ρ = m / V (en kg/m^3 ou g/cm^3).

Exercice 1 : Conversions d'unités de temps et de vitesse
Énoncé :
1. Convertir en heures décimales :
   a) 3h 15min
   b) 1h 48min
   c) 2h 06min
2. Convertir en heures et minutes :
   d) 2,6 h
   e) 4,75 h
   f) 0,65 h
3. Convertir les vitesses :
   g) 15 m/s en km/h
   h) 108 km/h en m/s
Corrigé détaillé pas-à-pas :
1. Conversions en heures décimales :
   • a) 15 / 60 = 0,25 => 3h 15min = 3,25 h.
   • b) 48 / 60 = 0,8 => 1h 48min = 1,8 h.
   • c) 6 / 60 = 0,1 => 2h 06min = 2,1 h.
2. Conversions en heures et minutes :
   • d) 2,6 h = 2 h + (0,6 × 60 min) = 2 h 36 min.
   • e) 4,75 h = 4 h + (0,75 × 60 min) = 4 h 45 min.
   • f) 0,65 h = 0 h + (0,65 × 60 min) = 39 min.
3. Conversions de vitesses :
   • g) 15 m/s = 15 × 3,6 = 54 km/h.
   • h) 108 km/h = 108 / 3,6 = 30 m/s.

Exercice 2 : Problème complet de voyage en voiture
Énoncé :
Un automobiliste part de Dakar à 7h15 pour se rendre à Touba, distante de 190 km.
Il roule à une vitesse moyenne de 80 km/h sur les 120 premiers kilomètres d'autoroute.
Puis il roule à une vitesse moyenne de 50 km/h sur les 70 derniers kilomètres de route nationale.
1. Calculer la durée t1 (en heures décimales puis en heures et minutes) de la première partie du trajet.
2. Calculer la durée t2 (en heures décimales puis en heures et minutes) de la seconde partie du trajet.
3. Quelle est la durée totale du voyage ? À quelle heure exacte arrive-t-il à Touba ?
4. Calculer la vitesse moyenne globale de l'automobiliste sur l'ensemble du trajet Dakar-Touba. (Attention : la moyenne de 80 et 50 n'est PAS la bonne réponse !).
Corrigé détaillé pas-à-pas :
1. Première partie :
   • Distance d1 = 120 km ; Vitesse v1 = 80 km/h.
   • Durée : t1 = d1 / v1 = 120 / 80 = 1,5 heure.
   • En heures et minutes : 1,5 h = 1h + (0,5 × 60 min) = 1h 30min.
2. Seconde partie :
   • Distance d2 = 70 km ; Vitesse v2 = 50 km/h.
   • Durée : t2 = d2 / v2 = 70 / 50 = 1,4 heure.
   • En heures et minutes : 1,4 h = 1h + (0,4 × 60 min) = 1h 24min.
3. Durée totale et heure d'arrivée :
   • Durée totale = 1h 30min + 1h 24min = 2h 54min (soit 2,9 heures décimales).
   • Heure de départ : 7h15.
   • Heure d'arrivée : 7h15 + 2h54 = 9h69 = 10h09.
   • Conclusion : L'automobiliste arrive à Touba à 10h09.
4. Vitesse moyenne globale :
   • Piège à éviter : Faire la moyenne arithmétique (80 + 50)/2 = 65 km/h est FAUX car les durées passées à chaque vitesse ne sont pas égales !
   • Règle universelle : v_moyenne = Distance totale / Temps total.
   • Distance totale = 120 + 70 = 190 km.
   • Temps total = 2,9 heures.
   • Vitesse moyenne = 190 / 2,9 ≈ 65,52 km/h.

Conclusion :
La vitesse moyenne v = d / t est une grandeur quotient qui exige une rigueur métrologique parfaite. Savoir convertir les durées entre système décimal et minutes est l'assurance de réussir tous les problèmes de cinématique.`
  ,
  sections: [
    {
      title: '1. Notion de vitesse moyenne et formules fondamentales',
      content: [
        "Formule : v = d / t (vitesse = distance / durée).",
        "Formules associées : d = v × t et t = d / v.",
        "Unités cohérentes : km avec heures => km/h ; mètres avec secondes => m/s.",
        "Passage m/s et km/h : 1 m/s = 3,6 km/h. On multiplie par 3,6 pour passer en km/h, on divise par 3,6 pour passer en m/s."
      ]
    },
    {
      title: '2. Conversion des unités de temps (Base 60)',
      content: [
        "Minutes en heures décimales : Diviser par 60 (ex : 45 min = 45/60 = 0,75 h => 2h 45min = 2,75 h).",
        "Heures décimales en minutes : Multiplier la partie décimale par 60 (ex : 1,4 h = 1 h + 0,4×60 min = 1 h 24 min).",
        "Piège absolu : 2,3 h NE SIGNIFIE PAS 2h 30min !"
      ],
      table: {
        headers: ['Heures et minutes', 'Calcul de conversion', 'Heures décimales', 'Vitesse avec d = 120 km'],
        rows: [
          ['1 h 30 min', '1 + 30/60', '1,5 h', '120 / 1,5 = 80 km/h'],
          ['1 h 15 min', '1 + 15/60', '1,25 h', '120 / 1,25 = 96 km/h'],
          ['2 h 45 min', '2 + 45/60', '2,75 h', '120 / 2,75 ≈ 43,6 km/h'],
          ['0 h 36 min', '36/60', '0,6 h', '120 / 0,6 = 200 km/h']
        ]
      }
    },
    {
      title: '3. Piège classique de la moyenne des vitesses',
      content: [
        "On ne fait JAMAIS la moyenne des vitesses d'un trajet. On calcule TOUJOURS la distance totale parcourue divisée par le temps total cumulé."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Conversions de durées et vitesses',
          content: [
            "1. Convertir en heures décimales : 3h 15min ; 1h 48min ; 2h 06min.",
            "2. Convertir en heures et minutes : 2,6 h ; 4,75 h ; 0,65 h.",
            "3. Convertir 15 m/s en km/h et 108 km/h en m/s."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. 3h 15min = 3 + 15/60 = 3,25 h ; 1h 48min = 1 + 48/60 = 1,8 h ; 2h 06min = 2 + 6/60 = 2,1 h.",
            "2. 2,6 h = 2h + 0,6×60min = 2h 36min ; 4,75 h = 4h 45min ; 0,65 h = 39 min.",
            "3. 15 m/s = 15 × 3,6 = 54 km/h ; 108 km/h = 108 / 3,6 = 30 m/s."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Trajet Dakar-Touba en deux étapes',
          content: [
            "Départ de Dakar à 7h15 pour Touba (190 km).",
            "Étape 1 : 120 km à 80 km/h sur autoroute.",
            "Étape 2 : 70 km à 50 km/h sur route nationale.",
            "1. Calculer les durées t1 et t2 en heures décimales puis h et min.",
            "2. Calculer la durée totale et l'heure d'arrivée.",
            "3. Calculer la vitesse moyenne globale sur l'ensemble du trajet."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. t1 = 120/80 = 1,5 h = 1h 30min. t2 = 70/50 = 1,4 h = 1h 24min.",
            "2. Durée totale = 1h 30min + 1h 24min = 2h 54min (soit 2,9 h). Arrivée : 7h15 + 2h54 = 10h09.",
            "3. Vitesse moyenne globale = Distance totale / Temps total = 190 km / 2,9 h ≈ 65,52 km/h."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : GRANDEURS & VITESSES MOYENNES',
    root: 'VITESSE MOYENNE',
    branches: [
      {
        name: 'FORMULES CLÉS',
        subtitle: 'Grandeur quotient',
        items: [
          'v = d / t',
          'd = v × t',
          't = d / v'
        ]
      },
      {
        name: 'CONVERSIONS TEMPS',
        subtitle: 'Base 60 vs Base 10',
        items: [
          'Min -> h décimales : diviser par 60',
          'h décimales -> Min : multiplier décimale par 60',
          '2h 30min = 2,5 h (et NON 2,3 h !)'
        ]
      },
      {
        name: 'CONVERSIONS UNITÉS',
        subtitle: 'Facteur 3,6',
        items: [
          'm/s vers km/h : MULTIPLIER par 3,6',
          'km/h vers m/s : DIVISER par 3,6',
          'V_globale = D_totale / T_total'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, le calcul d'une vitesse moyenne repose sur la cohérence absolue entre les unités de distance et les unités de temps décimales. La conversion rigoureuse par 60 élimine le piège le plus fréquent des devoirs de mathématiques."
};

// -------------------------------------------------------------------------
// LEÇON 12 : STATISTIQUES ET INITIATION AUX PROBABILITÉS
// -------------------------------------------------------------------------
export const LESSON_12_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-12',
  number: 'Leçon 12',
  title: 'Statistiques et initiation aux probabilités',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Les statistiques et les probabilités constituent les mathématiques du monde réel, de la prise de décision et du traitement des données numériques. Alors que la statistique descriptive observe, classe et synthétise des données déjà collectées (moyenne pondérée, effectifs, fréquences), le calcul des probabilités modélise le futur et mesure mathématiquement la chance qu'un événement aléatoire se réalise. En 4ème, l'élève apprend à construire des tableaux d'effectifs, à calculer une moyenne pondérée et à quantifier le hasard sous l'hypothèse d'équiprobabilité.",
  fullText: `Leçon 12 : Statistiques et initiation aux probabilités

Introduction :
Les statistiques et les probabilités constituent les mathématiques du monde réel, de la prise de décision et du traitement des données numériques. Alors que la statistique descriptive observe, classe et synthétise des données déjà collectées (moyenne pondérée, effectifs, fréquences), le calcul des probabilités modélise le futur et mesure mathématiquement la chance qu'un événement aléatoire se réalise. En 4ème, l'élève apprend à construire des tableaux d'effectifs, à calculer une moyenne pondérée et à quantifier le hasard sous l'hypothèse d'équiprobabilité.

1. Statistique descriptive : Vocabulaire, effectifs et fréquences
Vocabulaire fondamental :
- Population : ensemble des individus ou objets étudiés (ex: les élèves d'une classe de 4ème).
- Caractère : propriété étudiée sur chaque individu (ex: la note obtenue à un devoir, la taille, l'âge).
- Effectif d'une valeur : nombre de fois où cette valeur apparaît dans la série statistique.
- Effectif total (noté N) : somme de tous les effectifs de toutes les valeurs de la série.

Définition de la Fréquence :
La fréquence f d'une valeur est le quotient de son effectif par l'effectif total N de la population :
Formule :
Fréquence = (Effectif de la valeur) / (Effectif total N)
Elle s'exprime sous forme de fraction irréductible, de nombre décimal compris entre 0 et 1, ou de pourcentage (en multipliant par 100).
Propriété fondamentale :
La somme de toutes les fréquences d'une série statistique est toujours rigoureusement égale à 1 (ou 100 % si exprimée en pourcentages).

2. Moyenne simple et moyenne pondérée
A. Moyenne simple :
Lorsque toutes les valeurs ont le même poids (même coefficient 1) :
Moyenne = (Somme de toutes les valeurs) / (Nombre total de valeurs)

B. Moyenne pondérée (avec effectifs ou coefficients) :
Définition :
La moyenne pondérée d'une série statistique est la somme des produits de chaque valeur par son effectif (ou son coefficient), divisée par l'effectif total N :
Formule :
M = (v1 × n1 + v2 × n2 + ... + vk × nk) / (n1 + n2 + ... + nk)
Exemple : Un élève a obtenu 14 (coeff 2), 11 (coeff 1) et 16 (coeff 3).
Moyenne = (14×2 + 11×1 + 16×3) / (2 + 1 + 3) = (28 + 11 + 48) / 6 = 87 / 6 = 14,5.

3. Initiation aux probabilités
Vocabulaire du hasard :
- Expérience aléatoire : expérience dont on connaît tous les résultats possibles sans pouvoir prédire avec certitude lequel va se produire (ex: lancer une pièce, lancer un dé).
- Issue : résultat possible d'une expérience aléatoire (ex: obtenir '6' au dé).
- Événement : ensemble d'une ou plusieurs issues (ex: « Obtenir un nombre pair » = {2, 4, 6}).
- Événement certain : événement qui se réalise obligatoirement (probabilité = 1).
- Événement impossible : événement qui ne peut jamais se produire (probabilité = 0).

La notion de probabilité et équiprobabilité :
La probabilité d'un événement est un nombre compris entre 0 et 1 mesurant sa fréquence théorique d'apparition :
0 ≤ P(Événement) ≤ 1

Formule en situation d'équiprobabilité :
Lorsque toutes les issues ont exactement la même chance de se produire (dés équilibrés, cartes bien mélangées, tirages au sort équitables) :
P(Événement) = (Nombre d'issues favorables) / (Nombre total d'issues possibles)

L'événement contraire :
L'événement contraire d'un événement A (noté non-A) est l'événement qui se réalise lorsque A ne se réalise pas.
Propriété : P(non-A) = 1 - P(A).

Exercice 1 : Statistiques complètes et moyenne pondérée
Énoncé :
Voici le relevé des notes obtenues sur 20 par les 25 élèves d'une classe de 4ème lors d'un devoir de mathématiques :
Notes : 8 ; 10 ; 12 ; 15 ; 18
Effectifs correspondants :
- Note 8 : 4 élèves
- Note 10 : 7 élèves
- Note 12 : 8 élèves
- Note 15 : 4 élèves
- Note 18 : 2 élèves
1. Vérifier l'effectif total N.
2. Dresser le tableau complet des effectifs, fréquences décimales et pourcentages.
3. Calculer la moyenne pondérée de la classe à ce devoir.
4. Quel est le pourcentage d'élèves ayant obtenu une note supérieure ou égale à la moyenne (≥ 10) ?
Corrigé détaillé pas-à-pas :
1. Effectif total : N = 4 + 7 + 8 + 4 + 2 = 25 élèves (exact).
2. Tableau statistique complet :
   • Pour la note 8 : Fréquence = 4 / 25 = 0,16 = 16 %.
   • Pour la note 10 : Fréquence = 7 / 25 = 0,28 = 28 %.
   • Pour la note 12 : Fréquence = 8 / 25 = 0,32 = 32 %.
   • Pour la note 15 : Fréquence = 4 / 25 = 0,16 = 16 %.
   • Pour la note 18 : Fréquence = 2 / 25 = 0,08 = 8 %.
   Vérification : 16% + 28% + 32% + 16% + 8% = 100 %.
3. Moyenne pondérée M :
   M = (8 × 4 + 10 × 7 + 12 × 8 + 15 × 4 + 18 × 2) / 25
   M = (32 + 70 + 96 + 60 + 36) / 25
   M = 294 / 25 = 11,76 sur 20.
   La moyenne de la classe est de 11,76 / 20.
4. Pourcentage d'élèves ayant au moins 10 :
   • Effectif concerné : 7 + 8 + 4 + 2 = 21 élèves.
   • Pourcentage : (21 / 25) × 100 = 84 %.
   • 84 % des élèves ont la moyenne.

Exercice 2 : Calculs de probabilités sur une urne opaque
Énoncé :
Une urne contient 20 boules indiscernables au toucher :
- 8 boules rouges
- 7 boules vertes
- 5 boules jaunes
On tire au hasard une boule dans l'urne.
1. Justifier qu'on est en situation d'équiprobabilité.
2. Calculer la probabilité des événements suivants :
   - R : « La boule tirée est rouge »
   - V : « La boule tirée est verte »
   - J : « La boule tirée est jaune »
   - B : « La boule tirée est bleue »
3. Définir l'événement « La boule tirée n'est PAS rouge » et calculer sa probabilité de deux façons différentes.
Corrigé détaillé pas-à-pas :
1. Équiprobabilité :
   Les boules sont déclarées « indiscernables au toucher » et tirées « au hasard », donc chaque boule a rigoureusement la même chance d'être tirée (1 chance sur 20).
2. Probabilités d'événements :
   • P(R) = (Nombre de boules rouges) / (Nombre total de boules) = 8 / 20 = 2 / 5 = 0,4 (ou 40 %).
   • P(V) = 7 / 20 = 0,35 (ou 35 %).
   • P(J) = 5 / 20 = 1 / 4 = 0,25 (ou 25 %).
   • P(B) : Il n'y a aucune boule bleue dans l'urne. C'est un événement impossible : P(B) = 0 / 20 = 0.
   Vérification de la somme des probabilités : 0,40 + 0,35 + 0,25 = 1,00.
3. Événement contraire « Ne pas être rouge » :
   • Méthode 1 (par dénombrement direct) :
     Les boules non rouges sont les vertes et les jaunes : 7 + 5 = 12 boules.
     P(Non-R) = 12 / 20 = 3 / 5 = 0,6 (ou 60 %).
   • Méthode 2 (par la formule du contraire) :
     P(Non-R) = 1 - P(R) = 1 - 0,4 = 0,6.
   Les deux méthodes confirment que la probabilité est de 0,6 (ou 60 %).

Conclusion :
Statistiques et probabilités s'articulent harmonieusement : la fréquence observée lors d'un grand nombre de répétitions se rapproche inéluctablement de la probabilité théorique. Ce chapitre finalise avec brio le programme complet d'activités numériques de 4ème.`
  ,
  sections: [
    {
      title: '1. Vocabulaire des statistiques, effectifs et fréquences',
      content: [
        "Population, caractère et effectif : L'effectif total N est la somme de tous les effectifs.",
        "Fréquence : Quotient de l'effectif de la valeur par l'effectif total N (Fréquence = Effectif / N).",
        "Propriété absolue : La somme de toutes les fréquences est TOUJOURS égale à 1 (ou 100 %)."
      ]
    },
    {
      title: '2. Moyenne pondérée',
      content: [
        "Formule : M = (v1×n1 + v2×n2 + ... + vk×nk) / N où v_i sont les valeurs et n_i sont leurs effectifs (ou coefficients).",
        "Exemple : M = (8×4 + 10×7 + 12×8 + 15×4 + 18×2) / 25 = 294 / 25 = 11,76."
      ],
      table: {
        headers: ['Valeur (Note)', 'Effectif (Élèves)', 'Fréquence décimale', 'Pourcentage'],
        rows: [
          ['8 / 20', '4', '4/25 = 0,16', '16 %'],
          ['10 / 20', '7', '7/25 = 0,28', '28 %'],
          ['12 / 20', '8', '8/25 = 0,32', '32 %'],
          ['15 / 20', '4', '4/25 = 0,16', '16 %'],
          ['18 / 20', '2', '2/25 = 0,08', '8 %'],
          ['TOTAL', 'N = 25', 'Somme = 1,00', '100 %']
        ]
      }
    },
    {
      title: '3. Initiation aux probabilités et équiprobabilité',
      content: [
        "Vocabulaire : Expérience aléatoire, issue, événement certain (P=1) et événement impossible (P=0).",
        "Équiprobabilité : P(A) = (Nombre d'issues favorables) / (Nombre total d'issues).",
        "Événement contraire : P(non-A) = 1 - P(A)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Série de notes et moyenne pondérée',
          content: [
            "Notes sur 20 de 25 élèves : Note 8 (4 él.), Note 10 (7 él.), Note 12 (8 él.), Note 15 (4 él.), Note 18 (2 él.).",
            "1. Vérifier l'effectif total.",
            "2. Établir le tableau des fréquences en pourcentages.",
            "3. Calculer la moyenne pondérée de la classe.",
            "4. Quel pourcentage d'élèves a obtenu 10 ou plus ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Effectif total = 4 + 7 + 8 + 4 + 2 = 25.",
            "2. Fréquences : 8 -> 16% ; 10 -> 28% ; 12 -> 32% ; 15 -> 16% ; 18 -> 8% (Total = 100%).",
            "3. Moyenne = (32 + 70 + 96 + 60 + 36) / 25 = 294 / 25 = 11,76 / 20.",
            "4. Élèves ≥ 10 : 7 + 8 + 4 + 2 = 21 élèves sur 25, soit (21/25) × 100 = 84 %."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Tirage dans une urne et événement contraire',
          content: [
            "Une urne contient 8 boules rouges, 7 boules vertes et 5 boules jaunes (indiscernables au toucher).",
            "1. Justifier l'équiprobabilité.",
            "2. Calculer P(Rouge), P(Verte), P(Jaune) et P(Bleue).",
            "3. Calculer la probabilité de tirer une boule NON rouge par deux méthodes."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Les boules sont indiscernables au toucher et tirées au hasard => Équiprobabilité.",
            "2. P(Rouge) = 8/20 = 2/5 = 0,4 (40%) ; P(Verte) = 7/20 = 0,35 (35%) ; P(Jaune) = 5/20 = 1/4 = 0,25 (25%) ; P(Bleue) = 0 (impossible).",
            "3. Non rouge :",
            "   • Méthode 1 : (7 vertes + 5 jaunes)/20 = 12/20 = 3/5 = 0,6.",
            "   • Méthode 2 : 1 - P(Rouge) = 1 - 0,4 = 0,6 (60%)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : STATISTIQUES & PROBABILITÉS',
    root: 'DONNÉES & HASARD',
    branches: [
      {
        name: 'STATISTIQUES',
        subtitle: 'Décrire le réel',
        items: [
          'Effectif total N = somme des effectifs',
          'Fréquence = Effectif / N (somme = 1 ou 100%)',
          'Moyenne pondérée : M = ∑(vi × ni) / N'
        ]
      },
      {
        name: 'PROBABILITÉS',
        subtitle: 'Mesurer le futur',
        items: [
          '0 ≤ P(E) ≤ 1 (compris entre 0 et 1)',
          'Équiprobabilité : Favorables / Total d\'issues',
          'Événement certain = 1 ; Impossible = 0'
        ]
      },
      {
        name: 'ÉVÉNEMENT CONTRAIRE',
        subtitle: 'Complémentarité',
        items: [
          'P(non-A) = 1 - P(A)',
          'P(A) + P(non-A) = 1',
          'Méthode rapide pour éviter de longs calculs'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, les statistiques organisent et résument les informations du passé, tandis que les probabilités quantifient les chances de l'avenir. Ces deux disciplines complètent parfaitement la formation mathématique de l'élève de 4ème."
};
