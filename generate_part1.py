# Generator script for courses_4eme_anglais_part1.ts (Lessons 1 to 8)
import sys

code = '''import { LessonContent } from './courses';

// =========================================================================
// COURS D'ANGLAIS - CLASSE DE 4ÈME (PROGRAMME OFFICIEL COMPLET - 30 LEÇONS)
// PARTIE 1 : GRAMMAR FOUNDATIONS & VERB BASICS (LEÇONS 1 À 8)
// COURS ENRICHI POUR L'ÉLÈVE AVEC EXPLICATIONS DÉTAILLÉES EN FRANÇAIS,
// RÈGLES STRUCTURALES, TABLEAUX COMPARATIFS, PIÈGES FRÉQUENTS,
// SCHÉMAS D'APPRENTISSAGE ET DEUX EXERCICES COMPLETS AVEC CORRIGÉS DÉTAILLÉS
// =========================================================================

export const LESSON_1_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-1',
  number: 'Lesson 1',
  title: 'Nouns and Compound Nouns (Les Noms et les Noms Composés)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Le groupe nominal (noun phrase) constitue l'ossature fondamentale de la phrase anglaise. Contrairement aux noms simples comme 'book' ou 'car', les noms composés (compound nouns) résultent de l'association ingénieuse de deux mots ou plus pour former un concept unique, précis et évocateur. Comprendre leur formation, leur orthographe (en un mot, avec trait d'union ou séparés) et la règle essentielle du modificateur singulier est indispensable pour enrichir votre expression écrite et orale en classe de 4ème.",
  fullText: `Lesson 1: Nouns and Compound Nouns (Les Noms et les Noms Composés)

Introduction :
Le groupe nominal (noun phrase) constitue l'ossature fondamentale de la phrase anglaise. Contrairement aux noms simples comme 'book' ou 'car', les noms composés (compound nouns) résultent de l'association ingénieuse de deux mots ou plus pour former un concept unique, précis et évocateur. Comprendre leur formation, leur orthographe et la règle essentielle du modificateur singulier est indispensable pour enrichir votre expression en 4ème.

1. Detailed Grammatical & Conceptual Analysis (Analyse Grammaticale et Conceptuelle)
Un nom composé associe deux unités lexicales pour désigner une réalité nouvelle :
- Noun + Noun : 'classroom' (classe), 'toothbrush' (brosse à dents), 'football' (football).
- Verb (-ing) + Noun : 'washing machine' (machine à laver), 'swimming pool' (piscine).
- Adjective + Noun : 'greenhouse' (serre), 'blackboard' (tableau noir).
- Noun + Preposition + Noun : 'mother-in-law' (belle-mère).

Sur le plan orthographique, il existe trois formes :
1. En un seul mot (closed form) : 'raincoat', 'sunlight', 'bedroom'.
2. Avec un trait d'union (hyphenated form) : 'check-in', 'passer-by', 'T-shirt'.
3. En deux mots séparés (open form) : 'bus stop', 'credit card', 'ice cream'.

2. Practical Rules & Structural Mechanics (Règles Pratiques et Mécanique Structurale)
La Règle d'or du modificateur :
Dans un nom composé de type [Nom 1 + Nom 2], le premier nom fonctionne comme un adjectif qualificatif qui précise la nature du second nom. Or, en anglais, les adjectifs sont STRICTEMENT INVARIABLES et ne prennent JAMAIS de 's' au pluriel !
- On dit : 'a shoe shop' (un magasin de chaussures), et NON PAS 'a shoes shop', même si la boutique contient des centaines de chaussures !
- On dit : 'a two-hour exam' (un examen de deux heures), et NON 'a two-hours exam'.
- Pour mettre au pluriel, on ajoute la marque '-s' UNIQUEMENT au nom principal (le deuxième mot) :
  • 'one toothbrush' ➔ 'two toothbrushes'
  • 'one bus stop' ➔ 'five bus stops'
  • Exception notable : 'passers-by' (le nom principal est le premier).

3. Contextual Examples & Practice Applications (Exemples en Contexte)
- 'I bought a new raincoat because the weather forecast predicted heavy rain.' (J'ai acheté un nouvel imperméable parce que les prévisions météo annonçaient de fortes pluies.)
- 'The school bus arrived late this morning due to heavy traffic on the highway.' (Le bus scolaire est arrivé en retard ce matin à cause d'une forte circulation sur l'autoroute.)
- 'My grandmother works in her greenhouse every Sunday morning.' (Ma grand-mère travaille dans sa serre tous les dimanches matin.)

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Analyse & Formation)',
      content: [
        "Un nom composé (compound noun) réunit deux éléments distincts pour désigner une seule réalité concrète ou abstraite :",
        "• Modèle Nom + Nom : classroom (classe), toothbrush (brosse à dents), notebook (cahier).",
        "• Modèle Verbe en -ing + Nom : washing machine (machine à laver), swimming pool (piscine), waiting room (salle d'attente).",
        "• Modèle Adjectif + Nom : greenhouse (serre), blackboard (tableau noir), highway (autoroute).",
        "• Les trois formes orthographiques :",
        "  1. Forme soudée (closed) : bedroom, raincoat, armchair, postman.",
        "  2. Forme avec trait d'union (hyphenated) : brother-in-law, check-out, runner-up.",
        "  3. Forme détachée (open) : bus stop, phone number, coffee shop, high school."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Règle du Modificateur)',
      content: [
        "RÈGLE ESSENTIELLE : Dans une structure [Nom A + Nom B], le Nom A joue le rôle d'adjectif pour qualifier le Nom B.",
        "Puisque les adjectifs sont strictement invariables en anglais, le Nom A ne prend JAMAIS de 's' :",
        "• On dit : 'a shoe shop' (et JAMAIS 'a shoes shop'), même si la boutique vend 500 paires de chaussures.",
        "• On dit : 'an apple tree' (et JAMAIS 'an apples tree'), même si l'arbre produit des dizaines de pommes.",
        "• On dit : 'a three-week holiday' (des vacances de trois semaines), avec un tiret et sans 's' à week.",
        "PLURIEL DES NOMS COMPOSÉS : On applique la marque du pluriel (-s ou -es) UNIQUEMENT sur le nom noyau (le dernier) :",
        "• a police officer ➔ two police officers",
        "• a washing machine ➔ three washing machines",
        "• a pencil case ➔ four pencil cases"
      ],
      table: {
        headers: ['Type de composé', 'Premier mot (Modificateur)', 'Second mot (Noyau)', 'Exemple complet', 'Traduction'],
        rows: [
          ['Nom + Nom', 'Tooth (dent)', 'Brush (brosse)', 'Toothbrush', 'Brosse à dents'],
          ['Nom + Nom', 'Shoe (chaussure)', 'Shop (magasin)', 'Shoe shop', 'Magasin de chaussures'],
          ['Verbe-ing + Nom', 'Swimming (natation)', 'Pool (bassin)', 'Swimming pool', 'Piscine'],
          ['Adjectif + Nom', 'Green (vert)', 'House (maison)', 'Greenhouse', 'Serre pour plantes'],
          ['Nom + Nom', 'Rain (pluie)', 'Coat (manteau)', 'Raincoat', 'Imperméable']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Pitfalls (Pièges & Exemples)',
      content: [
        "Exemples d'application en contexte réel :",
        "• 'I bought a new raincoat because the weather forecast predicted heavy rain.'",
        "• 'The school bus arrived late this morning due to heavy traffic on the highway.'",
        "• 'Could you please wait for me at the bus stop near the post office?'",
        "Pièges fréquents à éviter aux examens de 4ème :",
        "❌ Erreur classique : 'I need a books shop.' ➔ ✅ Correction : 'I need a bookshop' ou 'a book shop'.",
        "❌ Erreur classique : 'A five-years-old boy.' ➔ ✅ Correction : 'A five-year-old boy' (modificateur au singulier)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Formation et Pluriel des Noms Composés',
          content: [
            "Consigne : Transformez les expressions suivantes en un nom composé anglais correct, puis écrivez-le au pluriel :",
            "1. A shop that sells books ➔ Nom composé : ... | Pluriel : ...",
            "2. A brush used for cleaning teeth ➔ Nom composé : ... | Pluriel : ...",
            "3. A machine designed for washing clothes ➔ Nom composé : ... | Pluriel : ...",
            "4. A stop where people wait for the bus ➔ Nom composé : ... | Pluriel : ...",
            "5. A ticket for travelling on a train ➔ Nom composé : ... | Pluriel : ..."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'A shop that sells books' ➔ Nom composé : 'a bookshop' (ou 'book shop'). Pluriel : 'bookshops'. (Règle : book reste au singulier car il modifie shop).",
            "2. 'A brush used for cleaning teeth' ➔ Nom composé : 'a toothbrush'. Pluriel : 'toothbrushes'. (Règle : tooth reste au singulier ; on ajoute -es à brush).",
            "3. 'A machine designed for washing clothes' ➔ Nom composé : 'a washing machine'. Pluriel : 'washing machines'. (Règle : washing qualifie machine, le pluriel va sur machine).",
            "4. 'A stop where people wait for the bus' ➔ Nom composé : 'a bus stop'. Pluriel : 'bus stops'. (Règle : bus reste invariable modificateur).",
            "5. 'A ticket for travelling on a train' ➔ Nom composé : 'a train ticket'. Pluriel : 'train tickets'. (Règle : train reste au singulier)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Détection et Correction d\'Erreurs',
          content: [
            "Consigne : Chaque phrase suivante contient une erreur liée aux noms composés. Repérez l'erreur et réécrivez la phrase correctement :",
            "1. My uncle opened a new shoes shop in the city centre.",
            "2. We have a two-hours break between the morning and afternoon classes.",
            "3. Look at those two swimming-pools next to the luxury hotel.",
            "4. She bought three toothsbrushes for her little cousins."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. Erreur : 'shoes shop'. Correction : 'My uncle opened a new shoe shop in the city centre.' (Explication : le premier nom modificateur doit être au singulier).",
            "2. Erreur : 'two-hours'. Correction : 'We have a two-hour break between the morning and afternoon classes.' (Explication : two-hour joue le rôle d'adjectif modificateur devant break, donc pas de 's').",
            "3. Erreur : trait d'union inutile et pluriel sur pool. Correction : 'Look at those two swimming pools next to the luxury hotel.' (Explication : swimming pool s'écrit généralement détaché, et seul pools prend la marque du pluriel).",
            "4. Erreur : 'toothsbrushes'. Correction : 'She bought three toothbrushes for her little cousins.' (Explication : tooth reste au singulier et brushes prend le pluriel régulier -es)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Structure & Formation des Noms Composés',
    root: 'COMPOUND NOUNS',
    branches: [
      {
        name: 'Modèles de Formation',
        subtitle: 'Combinaisons syntaxiques',
        items: ['Nom + Nom (classroom, toothbrush)', 'Verbe-ing + Nom (washing machine)', 'Adjectif + Nom (greenhouse, blackboard)']
      },
      {
        name: 'Règle du Modificateur',
        subtitle: 'Invariabilité du 1er nom',
        items: ['Le 1er nom agit comme adjectif', 'Toujours au singulier (shoe shop, not shoes)', 'Pluriel uniquement sur le mot final']
      },
      {
        name: 'Formes Graphiques',
        subtitle: 'Orthographe',
        items: ['Closed (un mot : raincoat)', 'Hyphenated (trait d\'union : check-in)', 'Open (deux mots : bus stop)']
      }
    ]
  },
  conclusion:
    "En conclusion, maîtriser les noms composés en anglais repose sur un principe fondamental : le premier terme est un modificateur descriptif invariable au singulier, tandis que le second terme porte l'identité nominale et la marque du pluriel. Grâce à cette règle, l'élève de 4ème enrichit son vocabulaire avec précision et rigueur."
};
'''

with open('src/data/courses_4eme_anglais_part1.ts', 'w') as f:
    f.write(code)
print("Part 1 base written")
