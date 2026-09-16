import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 6ÈME
// ACTIVITÉS NUMÉRIQUES — PROGRAMME OFFICIEL EXHAUSTIF
// CHAPITRE IV : PROPORTIONNALITÉ ET GESTION DE DONNÉES (LEÇON 13)
// AUCUN RÉSUMÉ, DÉVELOPPEMENT INTÉGRAL, EXEMPLES PAS-À-PAS ET DÉTAILS DE COMPRÉHENSION
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_13_MATH_6EME: LessonContent = {
  id: 'math-6eme-lecon-13',
  number: 'Leçon 13',
  title: 'Proportionnalité, tableaux et pourcentages',
  subject: 'Mathématiques',
  classLevel: '6ème',
  introduction:
    "La proportionnalité est omniprésente dans notre quotidien : dans les recettes de cuisine, les factures de carburant, les soldes en magasin ou la vitesse de déplacement sur les routes sénégalaises. Lorsqu'une quantité double, triple ou diminue de moitié, une grandeur proportionnelle varie dans la même proportion. Cette treizième leçon explicite la définition fondamentale de la proportionnalité, la détermination du coefficient multiplicateur dans un tableau à double entrée, et son application directe au calcul des pourcentages et remises commerciales.",
  fullText: `Leçon 13 : Proportionnalité, tableaux et pourcentages

Introduction : La proportionnalité est omniprésente dans notre quotidien : dans les recettes de cuisine, les factures de carburant, les soldes en magasin ou la vitesse de déplacement sur les routes sénégalaises. Lorsqu'une quantité double, triple ou diminue de moitié, une grandeur proportionnelle varie dans la même proportion. Cette treizième leçon explicite la définition fondamentale de la proportionnalité, la détermination du coefficient multiplicateur dans un tableau à double entrée, et son application directe au calcul des pourcentages et remises commerciales.

1. Reconnaître la proportionnalité
Deux grandeurs sont dites PROPORTIONNELLES si l'on peut passer des valeurs de l'une aux valeurs correspondantes de l'autre en multipliant ou en divisant systématiquement par un même nombre constant non nul.
Ce nombre constant s'appelle le COEFFICIENT DE PROPORTIONNALITÉ.
Si ce coefficient n'est pas le même pour toutes les colonnes, la situation n'est pas proportionnelle (par exemple, la taille ou le poids d'un enfant en fonction de son âge ne sont pas proportionnels).

2. Exemple concret de tableau de prix et passage à l'unité
Énoncé du problème :
Au marché, 3 cahiers identiques coûtent 6 €. Combien coûtent 5 cahiers ? Combien coûtent 10 cahiers ?
Modélisons rigoureusement la situation sous la forme d'un tableau de proportionnalité à double entrée :

Ligne 1 : Nombre de cahiers ➔ 3 | 5 | 10
Ligne 2 : Prix total (€) ➔ 6 | 10 | 20

Calcul explicite du coefficient de proportionnalité :
• On effectue le quotient d'une valeur de la ligne 2 par la valeur correspondante de la ligne 1 :
  Coefficient = Prix total ÷ Nombre de cahiers = 6 ÷ 3 = 2 €.
• Ce coefficient de 2 représente très concrètement le « passage par l'unité », c'est-à-dire le PRIX D'UN SEUL CAHIER.
• Pour remplir le reste du tableau :
  - Pour 5 cahiers : 5 × 2 = 10 €.
  - Pour 10 cahiers : 10 × 2 = 20 €.
  - Réciproquement, si l'on dispose de 16 €, on peut acheter : 16 ÷ 2 = 8 cahiers.

Propriétés remarquables sur les colonnes :
• Multiplication par un nombre : Si l'on double le nombre de cahiers (5 × 2 = 10), le prix double obligatoirement (10 × 2 = 20 €).
• Addition de deux colonnes : Le prix de 8 cahiers (3 + 5) est égal à la somme de leurs prix respectifs : 6 € + 10 € = 16 €.

3. Application directe des Pourcentages
Un pourcentage est une situation de proportionnalité particulière dont le dénominateur de référence est fixé à 100.
Le symbole « % » se lit « pour cent ».
Règle opératoire fondamentale :
Appliquer un pourcentage de x % à une grandeur revient à multiplier cette grandeur par la fraction x / 100 (ou son équivalent décimal).

Exemple financier de réduction et de solde :
Un vêtement coûte initialement 80 €. Pendant la période de soldes, le magasin offre une réduction immédiate de 15 %.
Calculons le nouveau prix payé par le client :

• Étape 1 : On calcule le montant exact de la remise en euros :
  Montant de la remise = Valeur initiale × (Pourcentage / 100)
  Montant de la remise = 80 × (15 / 100)
  Calcul astucieux : (80 × 15) ÷ 100 = 1 200 ÷ 100 = 12 €.
  Le client bénéficie donc d'une réduction de 12 €.

• Étape 2 : On calcule le prix final soldé après déduction :
  Prix final = Prix initial – Montant de la réduction
  Prix final = 80 € – 12 € = 68 €.
Le vêtement est donc vendu à 68 €.

Autre exemple : Calcul d'une augmentation de 10 % sur un salaire de 150 000 FCFA :
• Montant de l'augmentation = 150 000 × (10 / 100) = 15 000 FCFA.
• Nouveau salaire = 150 000 + 15 000 = 165 000 FCFA.

Conclusion : En conclusion, la proportionnalité et les pourcentages forment le pont le plus direct entre les mathématiques du collège et l'économie du quotidien. Maîtriser le calcul du coefficient multiplicateur et le passage par l'unité permet de résoudre tous les problèmes commerciaux, statistiques et géométriques de la scolarité.` ,
  sections: [
    {
      title: '1. Définition et reconnaissance de la proportionnalité',
      content: [
        "Deux grandeurs A et B sont proportionnelles si :",
        "• On passe de l'une à l'autre en multipliant par un nombre unique constant.",
        "• Ce facteur multiplicateur est le coefficient de proportionnalité k.",
        "• Formule : Grandeur B = k × Grandeur A."
      ]
    },
    {
      title: '2. Modélisation par tableau et passage à l\'unité',
      content: [
        "Exemple des cahiers à 2 € l'unité :"
      ],
      table: {
        headers: ['Grandeur', 'Colonne 1', 'Colonne 2', 'Colonne 3', 'Opérateur (× k)'],
        rows: [
          ['Nombre de cahiers', '3', '5', '10', 'Ligne 1'],
          ['Prix total (€)', '6', '10', '20', 'Ligne 2 = Ligne 1 × 2'],
          ['Coefficient k', '6 ÷ 3 = 2', '10 ÷ 5 = 2', '20 ÷ 10 = 2', 'k = 2 (Prix unitaire)']
        ]
      }
    },
    {
      title: '3. Propriétés linéaires du tableau de proportionnalité',
      content: [
        "Deux propriétés fondamentales simplifient les calculs :",
        "• 1. Linéarité multiplicative : multiplier une case d'une ligne multiplie la case correspondante par le même nombre (ex: 5 cahiers × 2 = 10 cahiers ➔ 10 € × 2 = 20 €).",
        "• 2. Linéarité additive : additionner deux colonnes donne une nouvelle colonne valide (ex: prix de 3 + 5 = 8 cahiers ➔ 6 € + 10 € = 16 €)."
      ]
    },
    {
      title: '4. Les Pourcentages : Définition et calcul de réduction',
      content: [
        "Appliquer un taux de x % :",
        "• Formule de calcul : Valeur × (x / 100).",
        "• Exemple officiel : Vêtement à 80 € avec remise de 15 %.",
        "  - Montant de la réduction : 80 × 0,15 = (80 × 15) / 100 = 1 200 / 100 = 12 €.",
        "  - Prix soldé net : 80 € – 12 € = 68 €.",
        "• Pourcentages remarquables à connaître par cœur :",
        "  - 50 % = la moitié (diviser par 2).",
        "  - 25 % = le quart (diviser par 4).",
        "  - 10 % = le dixième (diviser par 10)."
      ]
    }
  ],
  diagram: {
    title: 'Proportionnalité et Pourcentages',
    root: 'PROPORTIONNALITÉ',
    branches: [
      {
        name: 'Grandeur & Coefficient',
        subtitle: 'Multiplication constante',
        items: ['Ligne 2 = Ligne 1 × k', 'k = coefficient multiplicateur', 'Exemple : 3 cahiers ➔ 6 € (k = 2 €/cahier)']
      },
      {
        name: 'Propriétés du Tableau',
        subtitle: 'Calculs rapides',
        items: ['Multiplication sur les colonnes (× 2)', 'Addition de deux colonnes (3 + 5 = 8)', 'Passage par l\'unité (valeur pour 1)']
      },
      {
        name: 'Les Pourcentages',
        subtitle: 'Base 100',
        items: ['x % = multiplier par x / 100', 'Réduction : 80 × 15% = 12 € de remise', 'Prix final = 80 – 12 = 68 €']
      }
    ]
  },
  conclusion:
    "En conclusion, la proportionnalité et les pourcentages forment le pont le plus direct entre les mathématiques du collège et l'économie du quotidien. Maîtriser le calcul du coefficient multiplicateur et le passage par l'unité permet de résoudre tous les problèmes commerciaux, statistiques et géométriques de la scolarité."
};
