import { LessonContent } from './courses';

// =========================================================================
// COURS D'ANGLAIS - CLASSE DE 4ÈME (PROGRAMME OFFICIEL COMPLET - 30 LEÇONS)
// PARTIE 1 : GRAMMAIRE FONDAMENTALE & SYSTÈME DU PRÉSENT (LEÇONS 1 À 8)
// TEXTES EXHAUSTIFS, DÉTAILLÉS EN FRANÇAIS, RÈGLES CLAIRES, TABLEAUX,
// SCHÉMAS D'APPRENTISSAGE ET EXERCICES D'APPLICATION RÉSCLUS AVEC CORRIGÉS
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
  • 'one toothbrush' -> 'two toothbrushes'
  • 'one bus stop' -> 'five bus stops'
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
        "• Modèle Nom + Nom : classroom (classe), toothbrush (brosse à dents), notebook (cahier), armchair (fauteuil).",
        "• Modèle Verbe en -ing + Nom : washing machine (machine à laver), swimming pool (piscine), waiting room (salle d'attente).",
        "• Modèle Adjectif + Nom : greenhouse (serre pour végétaux), blackboard (tableau noir), highway (autoroute).",
        "• Les trois formats d'écriture en anglais :",
        "  1. Forme soudée en un mot (closed) : bedroom, raincoat, armchair, postman, airport.",
        "  2. Forme avec trait d'union (hyphenated) : brother-in-law, check-in, runner-up.",
        "  3. Forme détachée en deux mots (open) : bus stop, phone number, coffee shop, high school."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Règle du Modificateur)',
      content: [
        "RÈGLE ESSENTIELLE DU MODIFICATEUR : Dans une structure [Nom A + Nom B], le premier nom (A) agit exactement comme un adjectif qui qualifie le second nom (B).",
        "Puisque les adjectifs anglais sont strictement invariables, le Nom A ne prend JAMAIS la marque du pluriel :",
        "• On dit : 'a shoe shop' (et JAMAIS 'a shoes shop'), même si la boutique vend 500 paires de chaussures.",
        "• On dit : 'an apple tree' (et JAMAIS 'an apples tree'), même si l'arbre produit des centaines de pommes.",
        "• On dit : 'a three-week holiday' (des vacances de trois semaines), avec trait d'union et sans 's' à week.",
        "FORMATION DU PLURIEL : On applique la marque du pluriel (-s ou -es) UNIQUEMENT sur le nom principal (le dernier mot) :",
        "• a police officer -> two police officers",
        "• a washing machine -> three washing machines",
        "• a pencil case -> four pencil cases"
      ],
      table: {
        headers: ['Type de composé', 'Premier mot (Modificateur)', 'Second mot (Noyau)', 'Exemple complet', 'Traduction française'],
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
        "Pièges fréquents à éviter absolument aux devoirs et examens de 4ème :",
        "❌ Erreur classique : 'I need a books shop.' -> Correction : 'I need a bookshop' ou 'a book shop'.",
        "❌ Erreur classique : 'A ten-years-old student.' -> Correction : 'A ten-year-old student' (adjectif composé singulier)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Formation et Pluriel des Noms Composés',
          content: [
            "Consigne : Transformez les définitions ci-dessous en noms composés anglais appropriés, puis donnez leur pluriel régulier :",
            "1. A brush designed to clean your teeth -> Nom composé : ... | Pluriel : ...",
            "2. A shop that sells books -> Nom composé : ... | Pluriel : ...",
            "3. A machine that washes clothes -> Nom composé : ... | Pluriel : ...",
            "4. A bus that transports students to school -> Nom composé : ... | Pluriel : ...",
            "5. A coat that protects you from the rain -> Nom composé : ... | Pluriel : ..."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'A brush designed to clean your teeth' -> 'a toothbrush'. Pluriel : 'toothbrushes'. (Explication : tooth reste singulier car il modifie brush qui reçoit la marque -es).",
            "2. 'A shop that sells books' -> 'a bookshop' (ou 'book shop'). Pluriel : 'bookshops'. (Explication : book est au singulier ; shop prend le -s).",
            "3. 'A machine that washes clothes' -> 'a washing machine'. Pluriel : 'washing machines'. (Explication : washing est un participe présent modificateur ; machine prend le -s).",
            "4. 'A bus that transports students to school' -> 'a school bus'. Pluriel : 'school buses'. (Explication : school qualifie bus ; bus fait son pluriel en -es).",
            "5. 'A coat that protects you from the rain' -> 'a raincoat'. Pluriel : 'raincoats'. (Explication : rain est singulier invariable ; coat prend le -s)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Correction d\'Erreurs Fréquentes',
          content: [
            "Consigne : Chaque phrase contient une incorrection sur les noms composés. Réécrivez la phrase correctement en justifiant votre choix :",
            "1. Mr Diallo bought two news shoes shops in Dakar.",
            "2. The pupils have a fifteen-minutes pause at ten o'clock.",
            "3. We must preserve our green-houses against global warming.",
            "4. She bought four cars keys for the new company vehicles."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. Correction : 'Mr Diallo bought two new shoe shops in Dakar.' (Explication : 'shoe' est le modificateur singulier, seul 'shops' prend la marque du pluriel).",
            "2. Correction : 'The pupils have a fifteen-minute pause at ten o'clock.' (Explication : 'fifteen-minute' est un adjectif composé invariable devant le nom 'pause').",
            "3. Correction : 'We must preserve our greenhouses against global warming.' (Explication : 'greenhouse' est un mot composé soudé sans tiret).",
            "4. Correction : 'She bought four car keys for the new company vehicles.' (Explication : 'car' qualifie 'keys', il doit rester au singulier)."
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

export const LESSON_2_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-2',
  number: 'Lesson 2',
  title: 'Definite, Indefinite, and Zero Articles (Articles Définis, Indéfinis et Article Zéro)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "En anglais, l'utilisation des articles est un aspect fondamental qui conditionne la précision de chaque énoncé. Contrairement au français où l'on place presque toujours un article devant chaque nom ('la vie', 'les enfants'), la langue anglaise utilise trois outils distincts : l'article indéfini (A/AN), l'article défini (THE) et l'article zéro (noté Ø). Cette leçon vous explique quand employer chacun d'eux et comment éviter le calque piège du français.",
  fullText: `Lesson 2: Definite, Indefinite, and Zero Articles (Articles Définis, Indéfinis et Article Zéro)

Introduction :
Les articles en anglais déterminent le degré de spécificité d'un nom : parle-t-on d'un élément précis connu de tous, d'un élément quelconque mentionné pour la première fois, ou d'une généralité universelle ? Maîtriser A/AN, THE et l'absence totale d'article (Article Zéro Ø) est crucial pour s'exprimer naturellement.

1. Detailed Grammatical & Conceptual Analysis (Analyse Grammaticale)
A. L'Article Indéfini : A ou AN
- S'emploie UNIQUEMENT devant un nom dénombrable au SINGULIER.
- Indique un élément non défini, ou mentionné pour la première fois dans la conversation.
- La règle phonétique primordiale :
  • 'A' devant un SON consonne : 'a book', 'a dog', 'a teacher', mais aussi 'a university' (/j/ est une semi-voyelle consonne), 'a European country'.
  • 'AN' devant un SON voyelle : 'an apple', 'an elephant', 'an orange', et 'an hour' (le 'h' est muet !).

B. L'Article Défini : THE
- S'emploie devant des noms dénombrables (singulier ou pluriel) et indénombrables.
- Désigne une personne ou un objet spécifique, déjà mentionné, ou unique au monde :
  • 'The sun', 'the moon', 'the President'.
  • 'I saw a movie yesterday. The movie was exciting!' (Reprise d'un élément déjà connu).

C. L'Article Zéro : Ø (Zero Article)
- C'est la différence la plus marquée avec le français !
- On utilise Ø (aucun article) devant :
  1. Les noms pluriels quand on parle en GÉNÉRALITÉ : 'Ø Lions are dangerous animals.' (Les lions en général).
  2. Les noms indénombrables désignant des concepts abstraits, matières ou activités en général : 'Ø Education is essential.', 'Ø Peace brings progress.', 'I like Ø milk.'
  3. Les repas, les sports, les jours de la semaine : 'Ø Breakfast is ready.', 'He plays Ø tennis.', 'See you on Ø Monday.'

2. Practical Rules & Structural Mechanics (Règles Pratiques & Tableaux)
- Règle de comparaison :
  • 'An elephant is a large animal.' (N'importe quel éléphant = généralité au singulier).
  • 'The elephant we saw yesterday at the zoo was huge.' (Cet éléphant spécifique vu hier).
  • 'Ø Elephants live in Africa and Asia.' (Les éléphants en général = pluriel sans article).

3. Contextual Examples & Common Pitfalls
- 'Ø Education is important for Ø children all over the world.'
- 'Look at the children in the garden: they are playing with a ball.' (Ici, ce sont des enfants précis dans un jardin précis).
- Piège : 'The life is beautiful.' ❌ -> 'Ø Life is beautiful.' ✅ (concept général).

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (A/AN, THE et Ø)',
      content: [
        "A. L'article indéfini A / AN (Un, Une) :",
        "• S'utilise EXCLUSIVEMENT avec des noms dénombrables singuliers.",
        "• Règle du son initial (attention au piège phonétique) :",
        "  - On écrit 'A' devant un son consonne : a school, a pen, a university (/juː/), a uniform, a one-day trip.",
        "  - On écrit 'AN' devant un son voyelle : an apple, an engineer, an honest boy (le 'h' est muet), an hour.",
        "B. L'article défini THE (Le, La, Les) :",
        "• S'utilise avec singulier, pluriel et indénombrables pour désigner une réalité connue ou unique :",
        "  - Unique au monde : the earth, the sky, the sun.",
        "  - Précisé par le contexte : 'Where is the key of the front door?'",
        "C. L'article Zéro noté Ø (Pas d'article) :",
        "• C'est la règle d'or pour exprimer la généralité en anglais :",
        "  - Noms au pluriel général : 'Ø Dogs are loyal.' (Les chiens sont fidèles).",
        "  - Notions abstraites et matières : 'Ø Love is patient.', 'Ø Water boils at 100°C.'",
        "  - Noms de sports et matières scolaires : 'I study Ø History.', 'We play Ø basketball.'"
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Comparatif)',
      content: [
        "Comment choisir entre A/AN, THE et Ø en 3 questions simples :",
        "1. Est-ce un nom dénombrable singulier non précisé ? -> Mettez A ou AN selon le son.",
        "2. L'élément est-il identifié, unique ou déjà évoqué ? -> Mettez THE.",
        "3. Parle-t-on d'une catégorie globale au pluriel ou d'une idée générale abstraite ? -> Mettez Ø (aucun article)."
      ],
      table: {
        headers: ['Article', 'Type de Nom', 'Valeur communicative', 'Exemple en contexte', 'Traduction'],
        rows: [
          ['A / AN', 'Dénombrable Singulier', 'Indéfini / Premier signalement', 'She bought a notebook.', 'Elle a acheté un cahier.'],
          ['THE', 'Singulier / Pluriel / Indénombrable', 'Spécifique, connu, unique', 'The teacher explained the lesson.', 'Le professeur a expliqué la leçon.'],
          ['Ø (Zéro)', 'Pluriel général', 'Généralité absolue / Espèce', 'Ø Children love sweets.', 'Les enfants adorent les bonbons.'],
          ['Ø (Zéro)', 'Indénombrable abstrait', 'Concept global', 'Ø Knowledge is power.', 'Le savoir est une force.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Pitfalls to Avoid',
      content: [
        "Exemples comparatifs essentiels :",
        "• 'An elephant is a large animal.' (Généralité au singulier avec A/AN).",
        "• 'The elephant we saw at the zoo was huge.' (Éléphant spécifique).",
        "• 'Ø Education is important for Ø children.' (Double article zéro pour la généralité).",
        "Pièges récurrents chez les élèves francophones :",
        "❌ 'The nature is wonderful.' -> ✅ 'Ø Nature is wonderful.'",
        "❌ 'He is teacher.' -> ✅ 'He is a teacher.' (N'oubliez jamais l'article indéfini devant les métiers en anglais !)"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Compléter avec A, AN, THE ou Ø (Article Zéro)',
          content: [
            "Consigne : Complétez chaque phrase avec l'article approprié (a, an, the, ou Ø) :",
            "1. Mr Sow is ... honest policeman who works in Dakar.",
            "2. ... water is essential for all living creatures on Earth.",
            "3. Look at ... beautiful bird sitting on that branch!",
            "4. I would like to study at ... university in Great Britain.",
            "5. ... doctors usually work very long hours to save lives."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'an honest policeman' -> 'an' car 'honest' débute par un son voyelle (/ˈɒn.ɪst/), le 'h' étant muet.",
            "2. 'Ø Water' -> Article Zéro Ø car 'water' est un indénombrable utilisé dans un sens universel et général.",
            "3. 'the beautiful bird' -> 'the' car le locuteur pointe un oiseau spécifique précis sur une branche précise.",
            "4. 'a university' -> 'a' car 'university' commence par le son semi-consonne /j/ ('you-niversity').",
            "5. 'Ø Doctors' -> Article Zéro Ø car on parle de la profession des médecins en général au pluriel."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Traduction et Maîtrise de l\'Article Zéro',
          content: [
            "Consigne : Traduisez en anglais les phrases suivantes en veillant à la règle de l'article zéro :",
            "1. Les lions vivent dans la savane.",
            "2. La liberté est précieuse pour tout le monde.",
            "3. Mon frère adore le football et joue le samedi.",
            "4. C'est une actrice célèbre."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'Ø Lions live in the savannah.' (Lions sans article car pluriel générique ; the savannah car c'est un milieu géographique défini).",
            "2. 'Ø Freedom is precious for everyone.' (Freedom sans article car concept abstrait et général).",
            "3. 'My brother loves Ø football and plays on Ø Saturday.' (Pas d'article devant les noms de sport ni devant les jours de la semaine).",
            "4. 'She is a famous actress.' (Obligation de mettre 'a' devant les métiers et statuts en anglais)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Système des Articles en Anglais',
    root: 'ARTICLES (A/AN, THE, Ø)',
    branches: [
      {
        name: 'A / AN (Indéfini)',
        subtitle: 'Singulier dénombrable',
        items: ['A + Son consonne (a pen, a university)', 'AN + Son voyelle (an apple, an hour)', 'Indispensable devant les métiers']
      },
      {
        name: 'THE (Défini)',
        subtitle: 'Spécifique & Unique',
        items: ['Élément déjà cité ou connu', 'Réalités uniques (the sun, the earth)', 'Dénombrables et indénombrables']
      },
      {
        name: 'Ø (Article Zéro)',
        subtitle: 'Généralités & Pluriel',
        items: ['Pluriel général (Ø Lions are strong)', 'Notions abstraites (Ø Peace, Ø Love)', 'Sports, repas, jours et matières']
      }
    ]
  },
  conclusion:
    "En résumé, le choix des articles en anglais ne suit pas la logique du français : pour évoquer une généralité, le pluriel sans article (Ø) s'impose, tandis que THE réserve sa force démonstrative aux éléments spécifiques ou uniques, et A/AN désigne l'élément dénombrable singulier non préalablement identifié."
};

export const LESSON_3_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-3',
  number: 'Lesson 3',
  title: 'Demonstrative Determiners: This, That, These, Those',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Les déterminants démonstratifs anglais (This, That, These, Those) sont des mots-repères indispensables dans la communication. Ils permettent de pointer du doigt, de désigner un objet ou une personne, mais aussi d'indiquer la distance spatiale, temporelle ou même psychologique par rapport au locuteur. Cette leçon détaille le tableau à double entrée singulier/pluriel et proximité/éloignement.",
  fullText: `Lesson 3: Demonstrative Determiners (This, That, These, Those)

Introduction :
Les démonstratifs désignent avec précision une personne ou un objet selon deux critères mathématiques simples : le nombre grammatical (singulier ou pluriel) et la distance relative (proche ou éloigné).

1. Detailed Grammatical & Conceptual Analysis
- Les démonstratifs proximaux (Proche du locuteur) :
  • THIS (singulier) : désigne ce qui est à portée de main, ici présent, ou en train de se dérouler maintenant.
  • THESE (pluriel) : pluriel de THIS pour désigner plusieurs objets ou personnes proches.
- Les démonstratifs distaux (Éloigné du locuteur) :
  • THAT (singulier) : désigne ce qui est là-bas (distance visuelle), dans le passé (temps révolu), ou éloigné psychologiquement.
  • THOSE (pluriel) : pluriel de THAT pour désigner plusieurs éléments lointains.

2. Practical Rules & Structural Mechanics
Matrice des démonstratifs :
- Singulier + Proche = THIS ('this pencil')
- Pluriel + Proche = THESE ('these notebooks')
- Singulier + Éloigné = THAT ('that building over there')
- Pluriel + Éloigné = THOSE ('those mountains in the distance')

3. Contextual Examples & Practice Applications
- 'This book in my hand is fascinating, but that book over there on the top shelf looks boring.'
- 'These shoes I am wearing are comfortable, unlike those old boots in the garage.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Espace et Temps)',
      content: [
        "Les quatre démonstratifs anglais reposent sur deux axes fondamentaux :",
        "• Axe 1 : Le nombre grammatical (Singulier vs Pluriel).",
        "• Axe 2 : La distance physique ou temporelle (Proximité = ICI/MAINTENANT vs Éloignement = LÀ-BAS/AUTREFOIS).",
        "THIS et THESE (Proximité) :",
        "• This student (cet élève à côté de moi). This morning (ce matin, aujourd'hui).",
        "• These students (ces élèves ici présents). These days (de nos jours).",
        "THAT et THOSE (Éloignement) :",
        "• That bird (cet oiseau là-haut dans le ciel). That year (cette année-là, dans le passé).",
        "• Those cars (ces voitures garées au bout de la rue). Those days (en ce temps-là)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Matrice)',
      content: [
        "Mémorisez la matrice des démonstratifs :",
        "• Prononciation de THIS : voyelle courte /ðɪs/ et son 's' final sourd.",
        "• Prononciation de THESE : voyelle longue /ðiːz/ avec son 'z' final sonore.",
        "• Prononciation de THAT : /ðæt/.",
        "• Prononciation de THOSE : /ðəʊz/ avec diphtongue et son 'z'."
      ],
      table: {
        headers: ['Distance relative', 'Singulier (1 seul élément)', 'Pluriel (Plusieurs éléments)', 'Repères typiques'],
        rows: [
          ['Proximité (Near / Ici)', 'THIS (ce, cet, cette)', 'THESE (ces)', 'Here, in my hand, today, now'],
          ['Éloignement (Far / Là-bas)', 'THAT (ce, cet, cette... là-bas)', 'THOSE (ces... là-bas)', 'There, over there, yesterday, in the past']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Telephone/Polite Usage',
      content: [
        "Usages particuliers à retenir en 4ème :",
        "• Au téléphone : On dit 'Hello, this is Amina' (et non 'I am Amina') pour se présenter, et 'Is that Paul?' pour demander l'interlocuteur.",
        "• Pour présenter quelqu'un face à face : 'Mother, this is my friend Ousmane.'",
        "• Contraste direct dans la même phrase :",
        "  - 'This book in my hand is fascinating, but that book over there looks boring.'",
        "  - 'These shoes are comfortable, unlike those boots in the cupboard.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Choisir entre This, That, These, Those',
          content: [
            "Consigne : Complétez chaque espace avec This, That, These ou Those :",
            "1. ... pen in my hand writes very smoothly.",
            "2. Look at ... aeroplane flying high in the clouds over there!",
            "3. ... apples here in the basket are fresh and sweet.",
            "4. Do you remember ... holidays we spent in Saint-Louis five years ago?",
            "5. Can you pass me ... dictionary on the last table over there?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'This pen' -> Singulier et tenu en main ('in my hand'), donc proximité physique immédiate.",
            "2. 'That aeroplane' -> Singulier et très éloigné dans le ciel ('over there').",
            "3. 'These apples' -> Pluriel ('apples') et situé ici dans le panier ('here in the basket').",
            "4. 'Those holidays' -> Pluriel ('holidays') et événement passé révolu ('five years ago').",
            "5. 'That dictionary' -> Singulier ('dictionary') situé au loin sur la dernière table ('over there')."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Transformation Singulier ➔ Pluriel',
          content: [
            "Consigne : Mettez les phrases entières au pluriel en adaptant les démonstratifs, les noms et les verbes :",
            "1. This boy is my classmate.",
            "2. That car over there belongs to the school director.",
            "3. This woman is an excellent surgeon.",
            "4. That old watch was very expensive."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'These boys are my classmates.' (This -> These, boy -> boys, is -> are, classmate -> classmates).",
            "2. 'Those cars over there belong to the school director.' (That -> Those, car -> cars, belongs -> belong sans 's' car sujet pluriel).",
            "3. 'These women are excellent surgeons.' (This -> These, woman -> women pluriel irrégulier, is -> are, surgeon -> surgeons).",
            "4. 'Those old watches were very expensive.' (That -> Those, watch -> watches, was -> were au prétérit pluriel)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Grille des Déterminants Démonstratifs',
    root: 'DEMONSTRATIVES',
    branches: [
      {
        name: 'Proximité (Near)',
        subtitle: 'Ici / Présent',
        items: ['THIS : Singulier (this book)', 'THESE : Pluriel (these books)', 'Pour les présentations & téléphone']
      },
      {
        name: 'Éloignement (Far)',
        subtitle: 'Là-bas / Passé',
        items: ['THAT : Singulier (that tree)', 'THOSE : Pluriel (those trees)', 'Distance visuelle ou souvenir révolu']
      }
    ]
  },
  conclusion:
    "En résumé, les quatre démonstratifs fonctionnent par paire : THIS/THESE pour la sphère proche et immédiate du locuteur, THAT/THOSE pour l'espace lointain et le temps révolu. Une attention portée au nombre singulier ou pluriel garantit un accord irréprochable."
};

export const LESSON_4_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-4',
  number: 'Lesson 4',
  title: 'Expressing Possession: Possessive Adjectives and the Genitive',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Exprimer la possession et l'appartenance en anglais fait appel à deux mécanismes complémentaires : les adjectifs possessifs (my, your, his, her, its, our, their) et le génitif (l'apostrophe 's). Contrairement au français où le possessif s'accorde avec l'objet possédé ('son livre' pour Pierre ou pour Marie), l'anglais fait rigoureusement concorder le possessif avec le POSSESSEUR. Cette leçon clarifie cette règle d'or et décortique le fonctionnement du génitif.",
  fullText: `Lesson 4: Expressing Possession (Possessive Adjectives and Genitive)

Introduction :
Pour montrer qu'un objet ou un lien de parenté appartient à quelqu'un, l'anglais utilise deux procédés majeurs : les adjectifs possessifs et le cas génitif ('s).

1. Detailed Grammatical & Conceptual Analysis
A. Les Adjectifs Possessifs :
- My (mon, ma, mes)
- Your (ton, ta, tes / votre, vos)
- HIS (son, sa, ses -> Possesseur MASCULIN : He/Boy)
- HER (son, sa, ses -> Possesseur FÉMININ : She/Girl)
- ITS (son, sa, ses -> Possesseur NEUTRE : Objet / Animal)
- Our (notre, nos)
- Their (leur, leurs)
RÈGLE D'OR : En anglais, HIS et HER s'accordent avec le PROPRIÉTAIRE, jamais avec l'objet !
- Peter's car -> 'his car' (sa voiture).
- Mary's brother -> 'her brother' (son frère).

B. Le Génitif ('s) :
Le schéma classique est : [POSSESSEUR] + 's + [OBJET POSSÉDÉ sans article].
1. Possesseur singulier : On ajoute 's -> 'Sarah's notebook' (le cahier de Sarah).
2. Possesseur pluriel régulier terminant par -s : On ajoute SEULEMENT une apostrophe -> 'the students' exam results'.
3. Possesseur pluriel irrégulier sans -s final : On ajoute 's -> 'the children's toys', 'the women's meeting'.

2. Practical Rules & Structural Mechanics
- On n'utilise jamais 'the' devant le possessif ni devant le génitif : on ne dit pas 'the Sarah's bag' mais 'Sarah's bag'.
- Le génitif s'utilise principalement pour les êtres animés (humains, animaux) : 'the dog's tail'. Pour les objets inanimés, on préfère souvent la préposition 'of' : 'the leg of the table'.

3. Contextual Examples & Practice Applications
- 'Sarah left her notebook in the car. This is Sarah's notebook.'
- 'The students' exam results were excellent, and their teacher was very proud.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Adjectifs Possessifs & Génitif)',
      content: [
        "A. Les 7 Adjectifs Possessifs et la distinction capitale HIS / HER / ITS :",
        "• En français, on dit 'son stylo' pour un garçon ou une fille car l'adjectif s'accorde avec 'stylo' (masculin).",
        "• En anglais, c'est l'INVERSE : le possessif s'accorde avec le possesseur :",
        "  - Si le possesseur est un homme (Alioune) -> HIS pencil (son crayon), HIS mother (sa mère).",
        "  - Si le possesseur est une femme (Fatou) -> HER pencil (son crayon), HER father (son père).",
        "  - Si le possesseur est un animal ou un objet -> ITS food (sa nourriture), ITS colour (sa couleur).",
        "B. La Mécanique du Génitif ('s) :",
        "• Règle standard au singulier : Possesseur + 's + Objet -> 'The teacher's desk' (le bureau du professeur).",
        "• Pluriel régulier se terminant par un 's' : On place seulement l'apostrophe après le 's' -> 'The boys' football' (le ballon des garçons).",
        "• Pluriel irrégulier sans 's' final (children, men, women, people) : On applique la règle générale 's -> 'The children's playground' (la cour des enfants)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Synthétique)',
      content: [
        "Synthèse des règles d'application du génitif et possessifs :",
        "• Pas d'article devant le génitif : 'David's book' (et NON 'the David's book').",
        "• Succession de possessifs : 'My sister's friend's house' (la maison de l'amie de ma sœur).",
        "• Lieux familiers : On sous-entend le nom du lieu après le génitif -> 'at the butcher's' (chez le boucher), 'at my uncle's' (chez mon oncle)."
      ],
      table: {
        headers: ['Possesseur', 'Règle Génitif', 'Exemple type', 'Équivalent Adjectif Possessif', 'Traduction'],
        rows: [
          ['Singulier (John)', 'Ajout de \'s', 'John\'s schoolbag', 'His schoolbag', 'Le cartable de John / son cartable'],
          ['Singulier (Aïda)', 'Ajout de \'s', 'Aïda\'s bicycle', 'Her bicycle', 'Le vélo d\'Aïda / son vélo'],
          ['Pluriel régulier (students)', 'Ajout de l\'apostrophe simple (\')', 'The students\' books', 'Their books', 'Les livres des élèves / leurs livres'],
          ['Pluriel irrégulier (children)', 'Ajout de \'s', 'The children\'s room', 'Their room', 'La chambre des enfants / leur chambre']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Traps',
      content: [
        "Exemples d'application en contexte :",
        "• 'Sarah left her notebook in the car. This is Sarah's notebook.'",
        "• 'The students' exam results were excellent, and their teacher was very proud.'",
        "• 'The cat is drinking its milk in the kitchen.'",
        "Piège classique à éviter absolument :",
        "❌ Ne confondez pas IT'S (contraction de 'it is' ou 'it has') et ITS (adjectif possessif sans apostrophe) :",
        "  - 'It's cold today' = Il fait froid.",
        "  - 'The dog wagged its tail' = Le chien a remué sa queue."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Adjectifs Possessifs et Génitif',
          content: [
            "Consigne : Réécrivez les phrases suivantes en utilisant le génitif ('s ou '), puis remplacez par le possessif adéquat (his, her, their) :",
            "Exemple : The car of Mr Diallo -> Mr Diallo's car -> His car.",
            "1. The camera that belongs to Fatou -> ... -> ...",
            "2. The classroom of the teachers -> ... -> ...",
            "3. The uniforms of the children -> ... -> ...",
            "4. The computer of my brother -> ... -> ..."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'Fatou's camera' -> 'Her camera'. (Fatou est une femme -> possessif 'her').",
            "2. 'The teachers' classroom' -> 'Their classroom'. (Teachers se termine par 's', apostrophe seule ; pluriel -> 'their').",
            "3. 'The children's uniforms' -> 'Their uniforms'. (Children est un pluriel irrégulier sans 's', donc on ajoute 's ; pluriel -> 'their').",
            "4. 'My brother's computer' -> 'His computer'. (Brother est masculin singulier -> possessif 'his')."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Choix entre HIS, HER et ITS',
          content: [
            "Consigne : Complétez avec HIS, HER ou ITS selon le genre du possesseur :",
            "1. Mariama loves ... new English teacher.",
            "2. Moussa forgot ... keys on the dining table.",
            "3. The little kitten hurt ... paw while climbing the tree.",
            "4. Aunt Sophie invited all ... nieces for dinner."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'Mariama loves HER new English teacher.' (Mariama est féminin -> HER).",
            "2. 'Moussa forgot HIS keys on the dining table.' (Moussa est masculin -> HIS).",
            "3. 'The little kitten hurt ITS paw while climbing the tree.' (Le chaton est un animal neutre -> ITS sans apostrophe).",
            "4. 'Aunt Sophie invited all HER nieces for dinner.' (Tante Sophie est féminin -> HER)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Système de Possession en Anglais',
    root: 'EXPRESSING POSSESSION',
    branches: [
      {
        name: 'Adjectifs Possessifs',
        subtitle: 'Accord avec le possesseur',
        items: ['HIS = possesseur masculin (his car)', 'HER = possesseur féminin (her pen)', 'ITS = objet ou animal neutre (its tail)']
      },
      {
        name: 'Génitif Singulier (\'s)',
        subtitle: 'Personne / Animal singulier',
        items: ['Nom + \'s (Sarah\'s notebook)', 'Sans article devant le nom possédé', 'S\'applique aux pluriels irréguliers (children\'s)']
      },
      {
        name: 'Génitif Pluriel (\')',
        subtitle: 'Pluriel en -s',
        items: ['Apostrophe seule après le -s final', 'The students\' results', 'The teachers\' meeting']
      }
    ]
  },
  conclusion:
    "En conclusion, l'expression de la possession en anglais repose sur le respect rigoureux du genre du propriétaire (his vs her) et sur la maîtrise de l'apostrophe génitive ('s au singulier et ' après un pluriel régulier). Cette précision évite les ambiguïtés et fluidifie les descriptions familiales et matérielles."
};

export const LESSON_5_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-5',
  number: 'Lesson 5',
  title: 'Quantifiers: Much, Many, A lot of, Few, Little',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Exprimer la quantité sans utiliser de chiffres précis est une compétence quotidienne essentielle. En anglais, le choix du quantifieur (quantifier) dépend d'une distinction grammaticale incontournable : le nom est-il dénombrable (que l'on peut compter un par un, avec un pluriel) ou indénombrable (liquide, masse, concept abstrait) ? Cette leçon détaille l'usage de 'much', 'many', 'a lot of', ainsi que les nuances subtiles entre 'few / a few' et 'little / a little'.",
  fullText: `Lesson 5: Quantifiers (Much, Many, A lot of, Few, Little)

Introduction :
Les quantifieurs indiquent une quantité grande, moyenne ou petite. La maîtrise de ces termes repose entièrement sur la classification des noms en dénombrables (countable) et indénombrables (uncountable).

1. Detailed Grammatical & Conceptual Analysis
A. Noms Dénombrables vs Indénombrables :
- Countable nouns : objets que l'on peut dénombrer et mettre au pluriel (books, chairs, apples, students).
- Uncountable nouns : substances continues ou concepts abstraits sans pluriel (water, time, money, homework, information, rice).

B. Grande Quantité : MANY, MUCH, A LOT OF :
- MANY : s'utilise avec les noms dénombrables au pluriel, principalement dans les phrases négatives et les questions : 'Are there many tourists? We don't have many books.'
- MUCH : s'utilise avec les noms indénombrables, également dans les négations et questions : 'Do you have much homework? There isn't much milk left.'
- A LOT OF / LOTS OF : s'emploie couramment avec les DEUX catégories (dénombrables et indénombrables) dans les phrases affirmatives : 'She has a lot of friends.' / 'He has a lot of money.'

C. Petite Quantité : FEW / A FEW et LITTLE / A LITTLE :
- Pour les noms dénombrables :
  • FEW = très peu (connotation négative de manque) : 'Few students passed this difficult test.'
  • A FEW = quelques-uns, un petit nombre suffisant (connotation positive) : 'I have a few close friends.'
- Pour les noms indénombrables :
  • LITTLE = très peu, presque rien (manque) : 'We have little time left; hurry up!'
  • A LITTLE = un peu (quantité modeste mais disponible) : 'Can I have a little sugar, please?'

2. Practical Rules & Structural Mechanics
- Tableau croisé Dénombrable / Indénombrable.
- Attention : 'homework', 'information', 'bread' sont indénombrables en anglais !

3. Contextual Examples & Practice Applications
- 'How much homework do you have? I don't have much time left.'
- 'There are many birds in the garden, but very few flowers have bloomed yet.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Dénombrable vs Indénombrable)',
      content: [
        "La règle fondatrice des quantifieurs en anglais repose sur deux familles de noms :",
        "1. Noms Dénombrables (Countable Nouns) :",
        "• Éléments individualisés que l'on peut compter avec des chiffres : one pen, two apples, three pupils.",
        "• Ils possèdent une forme singulière et une forme plurielle en -s ou irrégulière.",
        "2. Noms Indénombrables (Uncountable Nouns) :",
        "• Matières, liquides, concepts globaux ou abstraits qu'on ne peut pas découper en unités : water, oil, milk, time, money, bread, sugar.",
        "• Attention aux pièges : en anglais, 'homework' (devoirs) et 'information' sont strictement INDÉNOMBRABLES !"
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Quantifieurs)',
      content: [
        "Comment choisir le bon quantifieur :",
        "• Pour une grande quantité :",
        "  - Phrase affirmative : préférez 'a lot of' ou 'lots of' partout.",
        "  - Phrase négative ou question : utilisez 'many' pour dénombrables et 'much' pour indénombrables.",
        "• La nuance essentielle entre sans 'a' et avec 'a' :",
        "  - 'Few / Little' (sans 'a') insiste sur le MANQUE (presque aucun, insuffisant).",
        "  - 'A few / A little' (avec 'a') insiste sur l'EXISTENCE (quelques-uns, une quantité suffisante)."
      ],
      table: {
        headers: ['Quantité visée', 'Noms Dénombrables Pluriel (books, cars)', 'Noms Indénombrables (time, water)', 'Exemple représentatif'],
        rows: [
          ['Beaucoup (Affirmation)', 'A lot of / Lots of', 'A lot of / Lots of', 'She has a lot of patience.'],
          ['Beaucoup (Négation / Question)', 'MANY', 'MUCH', 'I don\'t have much time. Are there many cars?'],
          ['Très peu (Insuffisant / Manque)', 'FEW', 'LITTLE', 'Few students attended. He has little energy.'],
          ['Quelques-uns / Un peu (Positif)', 'A FEW', 'A LITTLE', 'I have a few coins. Give me a little water.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Traps to Avoid',
      content: [
        "Exemples pratiques :",
        "• 'How much homework do you have? I don't have much time left.'",
        "• 'There are many birds in the garden, but very few flowers have bloomed yet.'",
        "• 'Do you need some help? Yes, I just need a little time.'",
        "Erreurs classiques aux contrôles :",
        "❌ 'I have many homeworks.' -> ✅ 'I have a lot of homework' ou 'much homework'.",
        "❌ 'How many money do you have?' -> ✅ 'How much money do you have?'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Choisir entre Much et Many',
          content: [
            "Consigne : Complétez chaque question ou phrase négative par MUCH ou MANY :",
            "1. How ... pencils did you buy at the stationery shop?",
            "2. There isn't ... milk in the fridge, so we can't make hot chocolate.",
            "3. How ... luggage are you carrying for your journey to Kaolack?",
            "4. We don't have ... chairs in the room; please bring two more.",
            "5. How ... money does this English textbook cost?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'How many pencils' -> Pencils est un nom dénombrable au pluriel -> MANY.",
            "2. 'isn't much milk' -> Milk est un liquide indénombrable -> MUCH.",
            "3. 'How much luggage' -> Luggage (bagages) est un nom indénombrable en anglais -> MUCH.",
            "4. 'don't have many chairs' -> Chairs est dénombrable pluriel -> MANY.",
            "5. 'How much money' -> Money est indénombrable en anglais (on compte les devises comme les CFA ou dollars, mais le mot money est indénombrable) -> MUCH."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Choisir entre Few, A few, Little et A little',
          content: [
            "Consigne : Choisissez le quantifieur qui convient le mieux selon le sens de la phrase :",
            "1. Don't worry, we still have ... (little / a little) time before the bell rings.",
            "2. The test was so difficult that ... (few / a few) students managed to score above 10.",
            "3. I am thirsty. Could you please give me ... (little / a little) fresh water?",
            "4. She is happy because she made ... (few / a few) new friends on her first day."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'a little time' -> Sens positif : il nous reste un peu de temps disponible avant que la cloche ne sonne.",
            "2. 'few students' -> Sens négatif de manque : presque aucun élève n'a obtenu la moyenne en raison de la difficulté.",
            "3. 'a little fresh water' -> Demande polie d'une petite quantité d'eau indénombrable disponible.",
            "4. 'a few new friends' -> Sens positif valorisant : elle s'est fait quelques nouveaux amis (dénombrable)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Arbre de Décision des Quantifieurs',
    root: 'QUANTIFIERS',
    branches: [
      {
        name: 'Dénombrables (Pluriel)',
        subtitle: 'Objets comptables',
        items: ['Beaucoup : MANY (questions / -) / A LOT OF (+)', 'Très peu (manque) : FEW', 'Quelques-uns (positif) : A FEW']
      },
      {
        name: 'Indénombrables (Masse)',
        subtitle: 'Matières, temps, argent',
        items: ['Beaucoup : MUCH (questions / -) / A LOT OF (+)', 'Très peu (manque) : LITTLE', 'Un peu (positif) : A LITTLE']
      }
    ]
  },
  conclusion:
    "En résumé, pour maîtriser les quantifieurs, identifiez d'abord la nature dénombrable ou indénombrable du nom. Associez ensuite MANY et FEW aux réalités dénombrables plurielles, MUCH et LITTLE aux indénombrables, tout en utilisant A LOT OF comme solution universelle en phrase affirmative."
};

export const LESSON_6_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-6',
  number: 'Lesson 6',
  title: 'Personal Object and Reflexive Pronouns (Pronoms Personnels Compléments et Réfléchis)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Dans la construction de phrases élaborées en 4ème, éviter les répétitions fastidieuses est une priorité de style. L'anglais dispose pour cela de deux familles de pronoms essentielles : les pronoms personnels objets (me, you, him, her, it, us, them) qui subissent l'action du verbe ou suivent une préposition, et les pronoms réfléchis (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves) lorsque le sujet et l'objet désignent la même personne. Cette leçon en explore les nuances.",
  fullText: `Lesson 6: Personal Object and Reflexive Pronouns

Introduction :
Les pronoms remplacent les noms pour fluidifier la communication. Cette leçon étudie les pronoms compléments d'objet et les pronoms réfléchis.

1. Detailed Grammatical & Conceptual Analysis
A. Les Pronoms Personnels Objets (Object Pronouns) :
Ils se placent immédiatement après un verbe d'action ou après une préposition (to, with, for, about) :
- Me (moi / me)
- You (toi / te / vous)
- Him (lui / le -> masculin singulier)
- Her (elle / la / lui -> féminin singulier)
- It (le / la / lui -> objet ou animal neutre)
- Us (nous)
- Them (eux / les / leur)
Exemples : 'The teacher called us to the board and asked him to answer.' / 'Listen to me!'

B. Les Pronoms Réfléchis (Reflexive Pronouns) :
Ils se terminent par '-self' au singulier et '-selves' au pluriel :
- Myself, yourself, himself, herself, itself.
- Ourselves, yourselves, themselves.
Ils s'utilisent obligatoirement quand le sujet et le complément d'objet désignent la MÊME entité :
- 'I cut myself while slicing bread.' (Je me suis coupé).
Ils s'utilisent aussi pour insister (valeur emphatique) :
- 'The President himself came to the school.' (Le président en personne).

2. Practical Rules & Structural Mechanics
- Ne confondez pas : 'He looked at him' (Il a regardé une autre personne) et 'He looked at himself' (Il s'est regardé dans un miroir).
- Attention aux verbes anglais qui ne sont PAS réfléchis contrairement au français :
  • 'to wash' (se laver) : on dit 'I wash in the morning' (et non 'I wash myself' sauf si on insiste lourdement).
  • 'to wake up' (se réveiller) : 'He woke up at 7' (et non 'he woke himself').
  • 'to dress' (s'habiller) : 'She dressed quickly.'

3. Contextual Examples & Practice Applications
- 'Be careful with that sharp knife, or you will cut yourself.'
- 'They prepared the whole delicious meal by themselves.' (Par eux-mêmes, sans aide).

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Pronoms Objets & Réfléchis)',
      content: [
        "A. Les Pronoms Personnels Objets (Object Pronouns) :",
        "• Ils occupent la fonction de COD (complément d'objet direct) ou de COI (indirect après préposition) :",
        "  - Me / You / Him (pour un garçon) / Her (pour une fille) / It (objet ou animal) / Us / Them.",
        "• Règle de position : Toujours après le verbe conjugué ou la préposition :",
        "  - 'Can you help me?' (Peux-tu m'aider ?)",
        "  - 'We are waiting for them.' (Nous les attendons / nous attendons après eux).",
        "B. Les Pronoms Réfléchis (Reflexive Pronouns) :",
        "• Formés avec le suffixe -self (singulier) et -selves (pluriel) :",
        "  - Myself, yourself, himself (et non hisself !), herself, itself.",
        "  - Ourselves, yourselves, themselves (et non theirselves !).",
        "• Double emploi :",
        "  1. Action réfléchie : Sujet = Objet ('She looked at herself in the mirror').",
        "  2. Autonomie / Emphase : avec 'by' pour signifier 'seul / sans aide' ('I did it by myself')."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Récapitulatif)',
      content: [
        "Tableau complet des correspondances pronominales :",
        "• Veillez à l'orthographe : 'themselves' et 'ourselves' prennent -ves au pluriel.",
        "• Faux amis de verbes pronominaux : en anglais, 'feel', 'relax', 'concentrate', 'remember' ne prennent pas de pronom réfléchi !"
      ],
      table: {
        headers: ['Sujet', 'Pronom Objet (après verbe/préposition)', 'Pronom Réfléchi (-self / -selves)', 'Exemple réfléchi'],
        rows: [
          ['I', 'me', 'myself', 'I introduced myself to the class.'],
          ['You (sing.)', 'you', 'yourself', 'Take care of yourself!'],
          ['He', 'him', 'himself', 'He burnt himself with the hot iron.'],
          ['She', 'her', 'herself', 'She bought herself a present.'],
          ['It', 'it', 'itself', 'The cat cleans itself every day.'],
          ['We', 'us', 'ourselves', 'We enjoyed ourselves at the beach.'],
          ['You (plur.)', 'you', 'yourselves', 'Behave yourselves, children!'],
          ['They', 'them', 'themselves', 'They organized the party by themselves.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Traps',
      content: [
        "Exemples types :",
        "• 'The teacher called us to the board and asked him to answer the question.'",
        "• 'Be careful with that sharp knife, or you will cut yourself while slicing the bread.'",
        "• 'She repaired her bicycle by herself.' (Elle a réparé son vélo toute seule).",
        "Pièges à éviter :",
        "❌ 'Listen to I' -> ✅ 'Listen to me' (après préposition = pronom objet).",
        "❌ 'He looked at hisself' -> ✅ 'He looked at himself'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Compléter avec un Pronom Objet (me, you, him, her, us, them)',
          content: [
            "Consigne : Remplacez les mots entre parenthèses par le pronom personnel objet qui convient :",
            "1. Our grandmother is visiting (my brother and me) ... this afternoon.",
            "2. The math teacher asked (Alioune) ... to come to the blackboard.",
            "3. I cannot find my keys; did you see (the keys) ... anywhere?",
            "4. Amina is my best friend; I sent a birthday card to (Amina) ... yesterday."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'is visiting us' -> 'my brother and me' = nous -> pronom objet 'us'.",
            "2. 'asked him' -> 'Alioune' = masculin singulier -> pronom objet 'him'.",
            "3. 'did you see them' -> 'the keys' = pluriel -> pronom objet 'them'.",
            "4. 'to her' -> 'Amina' = féminin singulier après préposition 'to' -> pronom objet 'her'."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Compléter avec un Pronom Réfléchi',
          content: [
            "Consigne : Complétez chaque phrase avec le pronom réfléchi convenable (myself, yourself, himself, herself, ourselves, themselves) :",
            "1. Moussa prepared for the running competition all by ...",
            "2. Did you paint this beautiful picture by ..., Awa?",
            "3. We must protect ... against malaria during the rainy season.",
            "4. The little children managed to tie their shoes by ..."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'by himself' -> Sujet Moussa (He) -> himself.",
            "2. 'by yourself' -> Sujet Awa à qui l'on s'adresse (You singulier) -> yourself.",
            "3. 'protect ourselves' -> Sujet We -> ourselves (pluriel en -selves).",
            "4. 'by themselves' -> Sujet 'The little children' (They) -> themselves."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Tableau des Pronoms Compléments et Réfléchis',
    root: 'PRONOUNS',
    branches: [
      {
        name: 'Pronoms Objets',
        subtitle: 'Subissent l\'action / Préposition',
        items: ['Me, You, Him, Her, It', 'Us, You, Them', 'Ex: Look at him! Help us!']
      },
      {
        name: 'Pronoms Réfléchis',
        subtitle: 'Sujet = Objet / Autonomie',
        items: ['Singulier : -self (myself, himself)', 'Pluriel : -selves (ourselves, themselves)', 'Avec BY = tout seul / sans aide']
      }
    ]
  },
  conclusion:
    "En conclusion, les pronoms personnels compléments remplacent les noms pour recevoir l'action verbale, tandis que les pronoms réfléchis soulignent l'action exercée sur soi-même ou l'autonomie totale. Leur bonne utilisation confère élégance et aisance à votre syntaxe anglaise."
};

export const LESSON_7_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-7',
  number: 'Lesson 7',
  title: 'Present Simple for Habits, Routines, and Universal Truths',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Le présent simple (Present Simple) est le temps de référence pour évoquer la régularité, les habitudes quotidiennes, les lois scientifiques immuables et les goûts permanents. Bien que simple en apparence, ce temps demande une rigueur absolue sur la marque '-s' ou '-es' de la 3ème personne du singulier (he, she, it) et sur le maniement des auxiliaires DO et DOES dans les formes négatives et interrogatives. Cette leçon en explore les rouages complets.",
  fullText: `Lesson 7: Present Simple for Habits and Truths

Introduction :
Le présent simple sert à exprimer des faits permanents, des vérités générales et des routines répétées dans le temps.

1. Detailed Grammatical & Conceptual Analysis
A. Emplois principaux :
1. Routines et habitudes : 'He walks his dog every evening.' (Il promène son chien tous les soirs).
2. Vérités générales et scientifiques : 'The sun rises in the east.' (Le soleil se lève à l'est). 'Water freezes at 0°C.'
3. Goûts et opinions permanents : 'She loves classical music.' 'They live in Dakar.'

B. Conjugaison et morphologie verbale :
- Pour I, You, We, They : le verbe conserve sa Base Verbale pure : 'I play', 'They work'.
- Pour He, She, It (3ème personne du singulier) : AJOUT OBLIGATOIRE DE -S ou -ES :
  • Règle standard : 'He reads', 'She speaks'.
  • Verbes en -o, -ch, -sh, -ss, -x : ajout de -ES -> 'He goes', 'She watches', 'He washes', 'He fixes'.
  • Verbes en consonne + Y : le 'y' devient -IES -> 'He studies' (study), 'She flies' (fly). Mais si voyelle + Y, règle normale : 'He plays' (play).

2. Practical Rules & Structural Mechanics
A. Négation et Interrogation avec DO / DOES :
- Négation : Sujet + DON'T (do not) / DOESN'T (does not) + BASE VERBALE DIRECTE :
  • 'I don't play.'
  • 'He doesn't play.' (Le '-s' est déjà absorbé par does, le verbe principal perd son -s !).
- Interrogation : DO / DOES + Sujet + BASE VERBALE ?
  • 'Do you speak English?'
  • 'Does she like mangoes?'

B. Les adverbes de fréquence (Adverbs of Frequency) :
Always (100%), usually (80%), often (60%), sometimes (40%), rarely/seldom (10%), never (0%).
Position clé : Ils se placent AVANT le verbe ordinaire, mais APRÈS le verbe BE :
- 'He always arrives on time.'
- 'She is never late.'

3. Contextual Examples & Practice Applications
- 'The sun rises in the east every morning.'
- 'He does not play football on Tuesdays; instead, he always walks his dog in the evening.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Emplois & Règle du -S)',
      content: [
        "Quand utilise-t-on le Présent Simple en 4ème ?",
        "1. Pour exprimer des routines et actions répétées (avec every day, on Mondays, twice a week).",
        "2. Pour énoncer des vérités scientifiques ou générales immuables : 'The Earth revolves around the Sun.'",
        "3. Pour exprimer des états permanents ou des sentiments durables : 'Fatou lives in Thiès and loves reading.'",
        "La règle d'or de la 3ème personne du singulier (He, She, It) :",
        "• Cas général : On ajoute un '-s' à la base verbale : work -> works, eat -> eats, run -> runs.",
        "• Verbes terminés par -s, -ss, -sh, -ch, -x, -o : on ajoute '-es' pour faciliter la prononciation :",
        "  - watch -> watches (/ɪz/), wash -> washes, pass -> passes, fix -> fixes, go -> goes, do -> does.",
        "• Verbes en Consonne + Y : le 'y' se transforme en '-ies' : study -> studies, carry -> carries.",
        "• Verbes en Voyelle + Y : conservation du 'y' + simple 's' : play -> plays, buy -> buys, stay -> stays."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Négations, Questions & Adverbes)',
      content: [
        "A. L'auxiliaire DO / DOES :",
        "• En phrase négative et interrogative, l'auxiliaire 'do' (pour I/you/we/they) ou 'does' (pour he/she/it) prend en charge la marque grammaticale :",
        "  - RÈGLE ABSOLUE : après DON'T ou DOESN'T, le verbe revient TOUJOURS à sa base verbale pure (sans -s) !",
        "  - 'He doesn't like milk' (et JAMAIS 'He doesn't likes').",
        "B. Emplacement des Adverbes de Fréquence :",
        "• Règle : SUJET + ADVERBE + VERBE ORDINAIRE : 'They usually eat lunch at 1 pm.'",
        "• Exception majeure avec le verbe BE : SUJET + BE + ADVERBE : 'She is always polite.'"
      ],
      table: {
        headers: ['Forme', 'Structure syntaxique', 'Exemple avec sujet pluriel', 'Exemple avec 3e personne singulier'],
        rows: [
          ['Affirmative', 'Sujet + Verbe (+s/es)', 'They watch TV every night.', 'She watches TV every night.'],
          ['Négative', 'Sujet + don\'t / doesn\'t + BV', 'They don\'t watch TV.', 'She doesn\'t watch TV.'],
          ['Interrogative', 'Do / Does + Sujet + BV ?', 'Do they watch TV?', 'Does she watch TV?'],
          ['Short Answer (+)', 'Yes, pronom + do / does', 'Yes, they do.', 'Yes, she does.'],
          ['Short Answer (-)', 'No, pronom + don\'t / doesn\'t', 'No, they don\'t.', 'No, she doesn\'t.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Pitfalls',
      content: [
        "Exemples modèles :",
        "• 'The sun rises in the east every morning.'",
        "• 'He does not play football on Tuesdays; instead, he always walks his dog in the evening.'",
        "• 'Why does your brother study so late at night?'",
        "Erreurs classiques à bannir :",
        "❌ 'He speak English' -> ✅ 'He speaks English' (oubli du -s fatal).",
        "❌ 'She doesn't goes' -> ✅ 'She doesn't go' (doublon de -es interdit après doesn't)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Conjugaison au Présent Simple',
          content: [
            "Consigne : Conjuguez les verbes entre parenthèses au présent simple à la forme indiquée (+, -, ?) :",
            "1. Mr Ndiaye (teach) ... English at our school.",
            "2. (you / like) ... spicy Senegalese food?",
            "3. Ousmane (not / wake up) ... early on Sundays.",
            "4. The Earth (revolve) ... around the Sun in 365 days.",
            "5. Why (she / carry) ... such a heavy backpack every day?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'teaches' -> Sujet Mr Ndiaye (He) ; verbe en -ch prend -es.",
            "2. 'Do you like' -> Question avec sujet 'you' -> auxiliaire Do + sujet you + base verbale like.",
            "3. 'doesn't wake up' (ou 'does not wake up') -> Négation avec sujet singulier Ousmane (He) -> doesn't + base verbale sans -s.",
            "4. 'revolves' -> Sujet The Earth (It) ; vérité universelle -> verbe + -s.",
            "5. 'does she carry' -> Question Wh- avec sujet She -> Wh + does + she + base verbale carry."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Placement des Adverbes de Fréquence',
          content: [
            "Consigne : Réécrivez chaque phrase en insérant l'adverbe de fréquence entre parenthèses à la place exacte :",
            "1. Alioune is late for morning assembly. (never)",
            "2. We visit our grandparents in Saint-Louis during holidays. (often)",
            "3. Fatou does her homework before having dinner. (always)",
            "4. They are tired after the physical education class. (usually)"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'Alioune is never late for morning assembly.' (Règle : l'adverbe se place APRÈS l'auxiliaire BE 'is').",
            "2. 'We often visit our grandparents in Saint-Louis during holidays.' (Règle : l'adverbe se place AVANT le verbe ordinaire 'visit').",
            "3. 'Fatou always does her homework before having dinner.' (Règle : l'adverbe se place AVANT le verbe ordinaire 'does').",
            "4. 'They are usually tired after the physical education class.' (Règle : l'adverbe se place APRÈS l'auxiliaire BE 'are')."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Mécanisme du Présent Simple',
    root: 'PRESENT SIMPLE',
    branches: [
      {
        name: 'Emplois Majeurs',
        subtitle: 'Valeurs temporelles',
        items: ['Routines & Habitudes quotidiennes', 'Vérités scientifiques & Universelles', 'États permanents & Goûts']
      },
      {
        name: 'Morphologie Verbe',
        subtitle: 'Règle du Sujet',
        items: ['I, You, We, They : Base Verbale pure', 'He, She, It : Ajout de -S ou -ES', 'Consonne+Y -> -IES (study -> studies)']
      },
      {
        name: 'Auxiliaires DO / DOES',
        subtitle: 'Formes négative & question',
        items: ['Don\'t / Doesn\'t + Base Verbale pure', 'Do / Does + Sujet + Base Verbale ?', 'Adverbes avant verbe, après BE']
      }
    ]
  },
  conclusion:
    "En conclusion, le présent simple se caractérise par une régularité remarquable : l'ajout du -s/es à la 3e personne du singulier à la forme affirmative, et l'emploi obligatoire de DO/DOES qui absorbe la marque grammaticale en négation et interrogation, rendant au verbe principal sa forme de base."
};

export const LESSON_8_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-8',
  number: 'Lesson 8',
  title: 'Present Continuous: Present BE + -ING',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Le présent continu (ou Present Continuous) s'oppose directement au présent simple. Alors que le présent simple décrit ce qui est habituel et permanent, le présent continu capture l'action dans son déroulement même, en temps réel, au moment précis où l'on parle. Formé de l'auxiliaire BE au présent (am, is, are) et du participe présent en -ING, il exige la maîtrise de règles orthographiques précises (notamment le doublement de consonne). Cette leçon en détaille le fonctionnement complet.",
  fullText: `Lesson 8: Present Continuous (Present BE + -ING)

Introduction :
Le présent continu décrit une action en cours d'accomplissement au moment de la parole ou une situation temporaire.

1. Detailed Grammatical & Conceptual Analysis
A. Structure fondamentale :
SUJET + BE au présent (am / is / are) + VERBE-ING (participe présent).
- I am studying -> I'm studying.
- He / She / It is playing -> He's playing.
- We / You / They are listening -> We're listening.

B. Règles d'orthographe pour la terminaison -ING :
1. Cas général : Base verbale + ing -> 'watch' -> 'watching', 'read' -> 'reading'.
2. Verbes terminés par un -e muet : suppression du 'e' avant d'ajouter -ing : 'write' -> 'writing', 'make' -> 'making', 'dance' -> 'dancing'.
3. Règle C-V-C (Consonne - Voyelle - Consonne) : pour un verbe court d'une syllabe se terminant par une seule consonne précédée d'une seule voyelle, on DOUBLE la consonne finale :
   • 'run' -> 'running', 'sit' -> 'sitting', 'swim' -> 'swimming', 'stop' -> 'stopping'.
4. Verbes en -ie : 'ie' se transforme en 'y' -> 'die' -> 'dying', 'lie' -> 'lying'.

2. Practical Rules & Structural Mechanics
A. Mots déclencheurs (Signal Words) :
Look! (Regarde !), Listen! (Écoute !), Now (maintenant), At the moment (en ce moment), Right now, Currently.
Dès que l'un de ces mots apparaît, le présent continu est généralement requis.

B. Verbes d'état (Stative Verbs) non compatibles avec la forme -ING :
Certains verbes exprimant des sentiments, des perceptions ou la possession ne s'utilisent JAMAIS au présent continu :
- Like, love, hate, know, understand, believe, want, need, belong, see, hear.
- On dit : 'I understand now' (et JAMAIS 'I am understanding now').

3. Contextual Examples & Practice Applications
- 'Look! The rain is falling heavily outside.'
- 'I am currently studying for my English exam, so I cannot talk on the phone right now.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Formation & Orthographe)',
      content: [
        "Structure en deux éléments inséparables :",
        "• SUJET + AUXILIAIRE BE (am, is, are) + BASE VERBALE + -ING.",
        "• N'oubliez jamais l'auxiliaire BE : 'He reading' est une faute majeure ! On doit dire 'He is reading'.",
        "Les 4 règles orthographiques de l'ajout de -ING :",
        "1. Règle générale : simple ajout de -ing (play -> playing, look -> looking).",
        "2. Suppression du -e muet final : drive -> driving, come -> coming, have -> having.",
        "3. Règle C-V-C (Doublement de consonne) : Pour les verbes d'une syllabe terminés par 1 Consonne précédée d'1 Voyelle simple :",
        "   - run -> running, sit -> sitting, get -> getting, swim -> swimming, cut -> cutting.",
        "4. Règle des verbes en -ie : lie -> lying, die -> dying, tie -> tying."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Contraste Présent Simple vs Continu)',
      content: [
        "Comment choisir entre Présent Simple et Présent Continu ?",
        "• Présent Simple : Habitude, vérité générale, routine (mots clés : every day, always, usually, often).",
        "• Présent Continu : Action ponctuelle en train de se dérouler ICI et MAINTENANT (mots clés : now, look!, listen!, at the moment).",
        "• Les Stative Verbs (Verbes d'état) : Les verbes de perception, de pensée et de goût refusent la forme continue :",
        "  - 'I know the answer' (et non 'I am knowing').",
        "  - 'She wants a glass of water' (et non 'She is wanting')."
      ],
      table: {
        headers: ['Critère', 'Présent Simple (Habitude)', 'Présent Continu (En cours)', 'Exemple comparatif'],
        rows: [
          ['Signification', 'Routines, vérités immuables, faits', 'Action en cours au moment de parler', 'He plays football / He is playing now'],
          ['Mots signaux', 'Always, usually, every day, never', 'Now, right now, look!, listen!', 'Look! She is running.'],
          ['Construction', 'Base Verbale (+s/es à he/she/it)', 'AM / IS / ARE + Verbe-ING', 'I work here / I am working now.'],
          ['Négation', 'Don\'t / Doesn\'t + BV', 'Am not / Isn\'t / Aren\'t + V-ING', 'He doesn\'t smoke / He isn\'t smoking.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Error Prevention',
      content: [
        "Exemples concrets du manuel :",
        "• 'Look! The rain is falling heavily outside.'",
        "• 'I am currently studying for my English exam, so I cannot talk on the phone right now.'",
        "• 'Listen! Someone is knocking on the classroom door.'",
        "Pièges fréquents à corriger :",
        "❌ 'Look, she dances' -> ✅ 'Look, she is dancing' (Action en direct).",
        "❌ 'I am swimming' écrit avec un seul m -> ✅ 'I am swimming' (règle C-V-C)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Conjugaison au Présent Continu',
          content: [
            "Consigne : Mettez les verbes entre parenthèses au Présent Continu en appliquant les règles orthographiques :",
            "1. Listen! The headmaster (speak) ... through the microphone.",
            "2. Look at Ousmane! He (run) ... to catch the morning bus.",
            "3. The students (not / write) ... in their notebooks; they are listening attentively.",
            "4. Why (you / sit) ... on the floor instead of taking a chair?",
            "5. Fatou (swim) ... in the school pool with her teammates."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'is speaking' -> Sujet The headmaster (He) -> is + speak-ing (règle générale).",
            "2. 'is running' -> Sujet Ousmane (He) -> is + doublement de consonne C-V-C pour run -> running.",
            "3. 'are not writing' (ou 'aren't writing') -> Sujet The students (They) -> are not + suppression du -e muet de write -> writing.",
            "4. 'are you sitting' -> Question -> are + sujet you + doublement de consonne C-V-C pour sit -> sitting.",
            "5. 'is swimming' -> Sujet Fatou (She) -> is + doublement de consonne C-V-C pour swim -> swimming."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Contraste Présent Simple vs Présent Continu',
          content: [
            "Consigne : Choisissez entre le Présent Simple et le Présent Continu selon le contexte de chaque phrase :",
            "1. My brother usually (play) ... tennis on Saturdays, but today he (rest) ... at home.",
            "2. Be quiet! The baby (sleep) ... in the bedroom.",
            "3. Water (boil) ... at 100 degrees Celsius.",
            "4. I (understand) ... the grammatical rule clearly now."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'plays / is resting' -> Routine habituelle du samedi ('usually') = Présent Simple 'plays' ; exception temporaire aujourd'hui ('today') = Présent Continu 'is resting'.",
            "2. 'is sleeping' -> Signal impératif d'action en cours en direct ('Be quiet!') = Présent Continu 'is sleeping'.",
            "3. 'boils' -> Vérité scientifique et universelle permanente = Présent Simple 'boils'.",
            "4. 'understand' -> 'Understand' est un verbe d'état (stative verb) qui refuse la forme -ING même en présence de 'now' = Présent Simple 'understand'."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Présent Simple vs Présent Continu',
    root: 'PRESENT TENSES',
    branches: [
      {
        name: 'Présent Simple',
        subtitle: 'Habitudes & Vérités',
        items: ['Base Verbale (+s/es à he/she/it)', 'Mots clés : always, often, every day', 'Vérités générales permanentes']
      },
      {
        name: 'Présent Continu',
        subtitle: 'Actions en cours',
        items: ['AM / IS / ARE + Verbe-ING', 'Mots clés : now, look!, listen!', 'Doublement C-V-C (run -> running)']
      },
      {
        name: 'Verbes d\'État',
        subtitle: 'Refus de -ING',
        items: ['Perception, pensée, sentiments', 'Know, understand, like, want, believe', 'Toujours au Présent Simple']
      }
    ]
  },
  conclusion:
    "En conclusion, la distinction entre Présent Simple et Présent Continu structure toute la pensée temporelle en anglais : le premier fixe les repères permanents et les habitudes, tandis que le second décrit l'immédiateté et l'action vivante en cours de déroulement sous nos yeux."
};
