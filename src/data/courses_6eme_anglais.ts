import { ContentData, LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ANGLAIS 6ÈME - FICHES CADRES PAR LEÇON DE COURS
// Thèmes de communication et Axes culturels
// =========================================================================

// --- THÈME 1 : PERSONAL IDENTIFICATION ---
export const LESSON_1_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-1',
  number: 'LEÇON 1',
  title: "L'IDENTIFICATION PERSONNELLE (PERSONAL IDENTIFICATION)",
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 1 : L'IDENTIFICATION PERSONNELLE (PERSONAL IDENTIFICATION)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

THÈME DU PROGRAMME :
L'identification personnelle (Personal Identification) : se présenter, dire son nom, son âge, sa nationalité et parler de soi.

I. OBJECTIFS DE COMMUNICATION (COMMUNICATIVE FUNCTIONS) :
- Saluer selon le moment de la journée (Good morning, Good afternoon, Hello, Hi).
- Donner et demander son identité : "What is your name? My name is..." / "I am...".
- Exprimer son âge : "How old are you? I am 11 / 12 years old".
- Exprimer son pays et sa nationalité : "Where are you from? I am from Senegal, I am Senegalese".
- Parler brièvement de soi (ville de résidence, statut d'élève).

II. STRUCTURES LINGUISTIQUES & GRAMMAIRE CIBLÉES :
- L'auxiliaire être au présent simple : "to be" (am, is, are).
- Les pronoms personnels sujets : I, you, he, she, it, we, they.
- Les adjectifs possessifs : my, your, his, her, our, their.
- Les mots interrogatifs fondamentaux (Wh-questions) : What, Where, How old.

III. RÉPERTOIRE LEXICAL ATTENDU :
- Greetings & farewells : Hello, Hi, Good morning/afternoon, Goodbye, See you.
- Cardinal numbers (0 to 20) : one, two, three... twenty.
- Countries & Nationalities : Senegal (Senegalese), The Gambia (Gambian), England (English), USA (American), Nigeria (Nigerian).
- Identification keywords : name, surname, first name, age, country, nationality, student, pupil.

IV. LIEN AVEC LES AXES CULTURELS :
- Axe 1 (Personnes et personnages) : Découvrir comment des jeunes élèves anglophones (Royaume-Uni, États-Unis, Afrique anglophone) se présentent et échangent leurs coordonnées.`,
  introduction: `Cette première unité fondamentale pose les bases de la communication orale et écrite en langue anglaise. Elle permet à l'élève de 6ème d'acquérir les outils indispensables pour entrer en contact, se présenter, donner son identité complète (nom, âge, origine, nationalité) et interroger son interlocuteur avec courtoisie.`,
  sections: [
    {
      title: 'I. FONCTIONS DE COMMUNICATION & OBJECTIFS VISÉS',
      subsections: [
        {
          subtitle: '1. Saluer et prendre congé',
          content: [
            'Savoir choisir la salutation appropriée selon le moment de la journée : "Good morning" (le matin), "Good afternoon" (l\'après-midi), "Good evening" (le soir).',
            'Utiliser les formules familières entre pairs : "Hello!", "Hi!" et les formules de départ : "Goodbye!", "See you soon!" / "Have a nice day!".'
          ]
        },
        {
          subtitle: '2. Décliner son identité (Nom, Âge, Nationalité)',
          content: [
            'Demander et donner son nom : "What is your name?" → "My name is Aminata" / "I am Moussa".',
            'Demander et exprimer son âge avec l\'auxiliaire be : "How old are you?" → "I am twelve years old". (Attention au piège de traduction depuis le français : on n\'utilise jamais have pour l\'âge en anglais).',
            'Préciser son origine et sa nationalité : "Where are you from?" → "I am from Senegal, I am Senegalese".'
          ]
        }
      ]
    },
    {
      title: 'II. STRUCTURES GRAMMATICALES ET LINGUISTIQUES CIBLÉES',
      content: [
        'Pour réaliser ces fonctions de communication, l\'élève mobilise les structures suivantes :'
      ],
      table: {
        headers: ['Point de grammaire', 'Forme / Structure', 'Exemple d\'emploi'],
        rows: [
          ['Verbe TO BE (Présent)', 'I am, You are, He/She/It is, We/They are', 'I am a pupil in 6ème. She is Senegalese.'],
          ['Adjectifs possessifs', 'My, your, his, her, its, our, their', 'My name is Fatou. His name is David.'],
          ['Wh- Questions', 'What (quoi), Where (où), How (comment/âge)', 'What is your surname? Where do you live?'],
          ['Nombres cardinaux', 'Nombres de 0 à 20 puis dizaines', 'I am eleven (11) years old.']
        ]
      }
    },
    {
      title: 'III. LEXIQUE ASSOCIÉ & SITUATION DE COMMUNICATION',
      content: [
        'Mots-clés du vocabulaire : first name, surname, full name, age, birthday, boy, girl, student, pupil, classmate, country, city, nationality.',
        'Activité type en classe : Jeu de rôle en binôme (Dialogue de rencontre : A salue B, pose des questions sur son nom, son âge, sa nationalité, et B répond avec aisance).'
      ]
    }
  ],
  diagram: {
    title: "STRUCTURE DE LA LEÇON : PERSONAL IDENTIFICATION",
    root: "PERSONAL IDENTIFICATION",
    branches: [
      {
        name: "GREETINGS",
        subtitle: "Saluer et quitter",
        items: ["Good morning/afternoon", "Hello / Hi", "Goodbye / See you"]
      },
      {
        name: "IDENTITY",
        subtitle: "Nom et Âge",
        items: ["What is your name?", "My name is...", "How old are you?", "I am ... years old"]
      },
      {
        name: "ORIGIN",
        subtitle: "Pays & Nationalité",
        items: ["Where are you from?", "I am from Senegal", "I am Senegalese", "Living in Saint-Louis/Dakar"]
      }
    ]
  },
  conclusion: `La maîtrise de l'identification personnelle constitue le socle indispensable sur lequel reposent toutes les interactions futures en classe d'anglais de 6ème. Elle donne confiance à l'élève pour s'exprimer dès les premières séances.`
};

// --- THÈME 2 : FAMILY AND HOME ---
export const LESSON_2_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LA FAMILLE ET LA MAISON (FAMILY AND HOME)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 2 : LA FAMILLE ET LA MAISON (FAMILY AND HOME)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

THÈME DU PROGRAMME :
La famille et la maison (Family and Home) : décrire les membres de sa famille et son habitation.

I. OBJECTIFS DE COMMUNICATION (COMMUNICATIVE FUNCTIONS) :
- Présenter les membres de sa famille proche et élargie : "This is my father, his name is Ousmane".
- Dire combien de frères et sœurs on a : "I have got two brothers and one sister".
- Décrire son lieu d'habitation (maison, appartement, cour familiale).
- Identifier et nommer les différentes pièces de la maison (living room, bedroom, kitchen, bathroom).
- Situer des objets ou des personnes dans la maison avec les prépositions de lieu (in, on, under, next to).

II. STRUCTURES LINGUISTIQUES & GRAMMAIRE CIBLÉES :
- Le verbe de possession : "have got / has got".
- Les démonstratifs : "this / these" (proximité) et "that / those" (éloignement).
- Le génitif saxon pour la possession familiale : "my father's name", "Ali's sister".
- L'expression de l'existence : "There is" (singulier) / "There are" (pluriel).
- Les prépositions de lieu fondamentales (in, on, under, behind, next to).

III. RÉPERTOIRE LEXICAL ATTENDU :
- Family members : father, mother, parents, brother, sister, grandfather, grandmother, uncle, aunt, cousin.
- House & rooms : house, home, living room, bedroom, kitchen, bathroom, dining room, yard, garden, balcony.
- Furniture & items : bed, table, chair, sofa, door, window, cupboard.

IV. LIEN AVEC LES AXES CULTURELS :
- Axe 1 (Personnes et personnages) : La diversité des structures familiales dans les pays anglophones et en Afrique de l'Ouest.
- Axe 2 (Le quotidien) : Les différents types d'habitats urbains et ruraux au Royaume-Uni, aux USA et au Sénégal.`,
  introduction: `Cette leçon permet aux apprenants de s'ouvrir sur leur sphère privée en langue anglaise. Ils apprennent à présenter les personnes qui leur sont chères (arbre généalogique) et à décrire leur cadre de vie quotidien (les pièces de la maison et le mobilier).`,
  sections: [
    {
      title: 'I. FONCTIONS DE COMMUNICATION & OBJECTIFS VISÉS',
      subsections: [
        {
          subtitle: '1. Décrire les membres de sa famille',
          content: [
            'Nommer et situer les liens de parenté : "This is my mother. Her name is Awa."',
            'Exprimer la composition de sa fratrie : "I have got three sisters and one brother" / "I am an only child".',
            'Présenter les grands-parents, oncles et tantes : "My grandfather lives in Kaolack".'
          ]
        },
        {
          subtitle: '2. Décrire son habitation et ses pièces',
          content: [
            'Décrire le type de logement : "I live in a big house with a courtyard" / "We live in a small flat in Dakar".',
            'Énumérer les pièces avec There is / There are : "In my house, there are three bedrooms, a living room and a kitchen".',
            'Situer une personne ou un objet : "My brother is in the bedroom. The book is on the table".'
          ]
        }
      ]
    },
    {
      title: 'II. STRUCTURES GRAMMATICALES ET LINGUISTIQUES CIBLÉES',
      content: [
        'Tableau des structures centrales mobilisées dans cette unité :'
      ],
      table: {
        headers: ['Structure', 'Règle grammaticale', 'Exemple'],
        rows: [
          ['HAVE GOT / HAS GOT', 'Possession au présent (I/you/we/they have got, he/she/it has got)', 'He has got two uncles. We have got a house.'],
          ['Génitif (\'s)', 'Marque de possession attachée au possesseur', 'My sister\'s bedroom is big.'],
          ['THERE IS / THERE ARE', 'There is + singulier / There are + pluriel', 'There is a table in the dining room.'],
          ['Prépositions de lieu', 'in, on, under, next to, behind, in front of', 'The cat is under the chair.']
        ]
      }
    },
    {
      title: 'III. VOCABULAIRE & PRODUCTION ATTENDUE',
      content: [
        'Vocabulaire cible : parents, siblings, relatives, address, yard, room, window, floor, roof, upstairs, downstairs.',
        'Production attendue : Réalisation d\'un petit texte ou dessin commenté : "My Family Tree and My Home" (Dessiner son arbre familial et présenter 3 membres avec 3 phrases complètes).'
      ]
    }
  ],
  diagram: {
    title: "STRUCTURE DE LA LEÇON : FAMILY AND HOME",
    root: "FAMILY & HOME",
    branches: [
      {
        name: "THE FAMILY",
        subtitle: "Liens de parenté",
        items: ["Parents (Father, Mother)", "Siblings (Brother, Sister)", "Extended family (Grandparents, Uncle, Aunt)"]
      },
      {
        name: "THE HOUSE",
        subtitle: "Pièces de vie",
        items: ["Living room & Dining room", "Bedrooms & Bathroom", "Kitchen & Courtyard / Garden"]
      },
      {
        name: "GRAMMAR TOOLS",
        subtitle: "Outils d'expression",
        items: ["Have got / Has got", "There is / There are", "Genitive ('s)"]
      }
    ]
  },
  conclusion: `L'apprentissage du vocabulaire de la famille et du logement permet de faire le pont entre la culture de l'apprenant et les réalités du monde anglophone à travers une description concrète et signifiante.`
};

// --- THÈME 3 : AT SCHOOL ---
export const LESSON_3_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-3',
  number: 'LEÇON 3',
  title: "L'ÉCOLE (AT SCHOOL)",
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 3 : L'ÉCOLE (AT SCHOOL)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

THÈME DU PROGRAMME :
L'école (At School) : l'environnement scolaire, les objets de la classe et les activités en cours.

I. OBJECTIFS DE COMMUNICATION (COMMUNICATIVE FUNCTIONS) :
- Nommer et identifier les objets et fournitures scolaires (school supplies).
- Comprendre et utiliser les consignes de classe (classroom instructions / classroom English).
- Demander la permission poliment en classe : "May I come in?", "Can I borrow a pen, please?".
- Parler de son emploi du temps, de ses matières scolaires préférées et de ses professeurs.
- Décrire les activités menées durant les cours et la récréation (listening, reading, writing, playing).

II. STRUCTURES LINGUISTIQUES & GRAMMAIRE CIBLÉES :
- L'impératif affirmatif et négatif pour les consignes : "Open your book!", "Don't speak Wolof/French!".
- Les modaux de permission et capacité : "Can", "May".
- Le présent simple pour les habitudes scolaires : "We study English on Mondays".
- Les déterminants indéfinis : "a" / "an" (a ruler, an eraser).
- Les pronoms démonstratifs singulier/pluriel : "this / these", "that / those".

III. RÉPERTOIRE LEXICAL ATTENDU :
- School stationery : pen, pencil, eraser, ruler, sharpener, bag, notebook, textbook, desk, board, chalk.
- School subjects : English, French, Mathematics, History, Geography, Science, Physical Education (P.E.), Art.
- Classroom commands : Stand up, Sit down, Be quiet, Open/Close your book, Raise your hand, Listen carefully.
- School places : classroom, playground, library, headmaster's office, canteen.

IV. LIEN AVEC LES AXES CULTURELS :
- Axe 2 (Le quotidien) : La journée type d'un écolier britannique ou américain (uniformes scolaires, yellow school buses, casiers, timetable).`,
  introduction: `Le cadre scolaire est l'environnement immédiat dans lequel l'élève fait l'expérience vivante de la langue anglaise. Cette unité équipe l'apprenant pour comprendre les consignes du professeur ("Classroom English"), nommer ses fournitures et exprimer ses matières de prédilection.`,
  sections: [
    {
      title: 'I. FONCTIONS DE COMMUNICATION & OBJECTIFS VISÉS',
      subsections: [
        {
          subtitle: '1. Maîtriser le "Classroom English" et les consignes',
          content: [
            'Exécuter et donner des consignes fondamentales : "Look at the blackboard", "Open your notebook at page 10", "Silence, please!".',
            'Formuler des demandes polies en classe : "Can you repeat, please?", "How do you spell that?", "What does ... mean in French?".'
          ]
        },
        {
          subtitle: '2. Identifier les fournitures scolaires et son emploi du temps',
          content: [
            'Demander et prêter du matériel : "Have you got an eraser?" → "Yes, here you are" / "No, sorry, I haven\'t".',
            'Exprimer ses goûts envers les disciplines scolaires : "I like Science and English but I don\'t like Maths".',
            'Énoncer son calendrier : "On Tuesday morning, we have got History and Geography".'
          ]
        }
      ]
    },
    {
      title: 'II. STRUCTURES GRAMMATICALES ET LINGUISTIQUES CIBLÉES',
      content: [
        'Éléments grammaticaux incontournables pour l\'environnement scolaire :'
      ],
      table: {
        headers: ['Notion', 'Fonction', 'Exemples concrets'],
        rows: [
          ['L\'impératif', 'Donner des ordres et consignes de classe', 'Listen carefully! Do not write yet!'],
          ['Articles indéfinis (a / an)', 'a + consonne sonique / an + voyelle sonique', 'a pencil, a notebook, an eraser, an apple'],
          ['Modaux de politesse', 'Demander la permission', 'May I clean the board? Can I go out, please?'],
          ['Jours de la semaine', 'Utilisation de la préposition on', 'on Monday, on Wednesday, on Friday']
        ]
      }
    },
    {
      title: 'III. LEXIQUE & CULTURE DU MONDE SCOLAIRE ANGLOPHONE',
      content: [
        'Vocabulaire clé : school uniform, locker, timetable, bell, break time, headteacher, classmate, homework.',
        'Repère culturel (Axe 2) : L\'uniforme scolaire traditionnel au Royaume-Uni (blazer, tie) comparé à la tenue d\'école au Sénégal.'
      ]
    }
  ],
  diagram: {
    title: "STRUCTURE DE LA LEÇON : AT SCHOOL",
    root: "AT SCHOOL",
    branches: [
      {
        name: "CLASSROOM ENGLISH",
        subtitle: "Consignes & Politesse",
        items: ["Stand up / Sit down", "Raise your hand", "Can I borrow a pen, please?"]
      },
      {
        name: "SCHOOL OBJECTS",
        subtitle: "Fournitures scolaires",
        items: ["Pen, pencil, ruler", "Eraser, notebook, bag", "Blackboard, desk, chair"]
      },
      {
        name: "SCHOOL LIFE",
        subtitle: "Matières & Emploi du temps",
        items: ["Subjects (English, Maths, Science)", "Days of the week", "Timetable & Breaks"]
      }
    ]
  },
  conclusion: `En pratiquant le "Classroom English" au quotidien, la classe de 6ème devient une véritable zone d'immersion où l'anglais est utilisé comme outil d'action et d'apprentissage vivant.`
};

// --- THÈME 4 : FOOD AND DRINKS ---
export const LESSON_4_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LES HABITUDES ALIMENTAIRES (FOOD AND DRINKS)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 4 : LES HABITUDES ALIMENTAIRES (FOOD AND DRINKS)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

THÈME DU PROGRAMME :
Les habitudes alimentaires (Food and Drinks) : exprimer ses goûts et décrire les repas.

I. OBJECTIFS DE COMMUNICATION (COMMUNICATIVE FUNCTIONS) :
- Exprimer ses goûts et préférences alimentaires : "I like fish and rice", "I don't like beans", "My favourite drink is bissap".
- Parler des trois repas principaux de la journée (breakfast, lunch, dinner).
- Commander ou proposer de la nourriture avec politesse : "Would you like some tea?", "Can I have an orange, please?".
- Décrire des plats typiques et des habitudes culinaires locales et anglophones.

II. STRUCTURES LINGUISTIQUES & GRAMMAIRE CIBLÉES :
- Les verbes de goût : like, love, prefer, hate, enjoy + groupe nominal ou verbe en -ing.
- Le présent simple à la forme affirmative, négative et interrogative : "Do you like apples? - Yes, I do / No, I don't".
- Les quantifieurs et déterminants partitifs : "some" (affirmatif) / "any" (négatif et interrogatif).
- Les noms dénombrables (countable) et indénombrables (uncountable).

III. RÉPERTOIRE LEXICAL ATTENDU :
- Meals : breakfast, lunch, dinner, snack, dessert.
- Food staples : rice, fish, meat, bread, chicken, vegetables (carrots, onions, tomatoes), fruits (mangoes, bananas, oranges).
- Drinks : water, milk, juice, tea, coffee, bissap, ginger juice.
- Taste adjectives : delicious, sweet, salty, hot, healthy, spicy.

IV. LIEN AVEC LES AXES CULTURELS :
- Axe 2 (Le quotidien) : Le petit-déjeuner traditionnel britannique ("Full English Breakfast") et les repas légers ("Sandwiches, Fish & Chips") comparés aux repas conviviaux sénégalais (Ceebu Jën, Yassa).`,
  introduction: `L'alimentation est un thème universel et engageant qui favorise l'expression spontanée. Les élèves s'entraînent à formuler leurs préférences alimentaires, à décrire la structure des repas quotidiens et à découvrir les traditions gastronomiques du monde anglophone.`,
  sections: [
    {
      title: 'I. FONCTIONS DE COMMUNICATION & OBJECTIFS VISÉS',
      subsections: [
        {
          subtitle: '1. Exprimer ses goûts et aversions',
          content: [
            'Exprimer ce que l\'on aime avec gradation : "I love mangoes" > "I like chicken" > "I don\'t like carrots" > "I hate onions".',
            'Parler de son plat ou sa boisson préférée : "My favourite dish is Ceebu Jën" / "My favourite fruit is watermelon".',
            'Interroger son camarade : "Do you like fish? - Yes, I do / No, I don\'t".'
          ]
        },
        {
          subtitle: '2. Décrire le déroulement des repas quotidiens',
          content: [
            'Breakfast (le matin) : "For breakfast, I usually eat bread with butter and drink hot milk or tea".',
            'Lunch (le midi) : "At lunch, we eat rice and fish with my family".',
            'Dinner (le soir) : "In the evening, we have a light dinner".'
          ]
        }
      ]
    },
    {
      title: 'II. STRUCTURES GRAMMATICALES ET LINGUISTIQUES CIBLÉES',
      content: [
        'Règles grammaticales clés pour parler de nourriture :'
      ],
      table: {
        headers: ['Concept', 'Règle', 'Exemples types'],
        rows: [
          ['Verbes de goût', 'like, love, enjoy, prefer, dislike, hate', 'Fatou loves bananas. He dislikes milk.'],
          ['Présent simple (Do/Does)', 'Auxiliaire do/don\'t pour les questions et négations', 'Do you eat meat? - No, I don\'t eat meat.'],
          ['SOME vs ANY', 'Some (phrases affirmatives) / Any (phrases négatives & questions)', 'I have some rice. Is there any juice left?'],
          ['Formule de politesse', 'Would you like... / Can I have...', 'Would you like an apple? - Yes, please.']
        ]
      }
    },
    {
      title: 'III. LEXIQUE ASSOCIÉ & REPÈRES CULTURELS',
      content: [
        'Vocabulaire essentiel : breakfast, lunch, dinner, drink, meal, fruit, vegetable, meat, fish, delicious, healthy.',
        'Culture comparée (Axe 2) : Découverte du thé britannique ("Afternoon Tea") et du fameux "Fish and Chips" au Royaume-Uni face aux traditions de partage du bol familial au Sénégal.'
      ]
    }
  ],
  diagram: {
    title: "STRUCTURE DE LA LEÇON : FOOD AND DRINKS",
    root: "FOOD & DRINKS",
    branches: [
      {
        name: "MEALS OF THE DAY",
        subtitle: "Les repas réguliers",
        items: ["Breakfast (le matin)", "Lunch (le midi)", "Dinner (le soir)"]
      },
      {
        name: "EXPRESSING TASTES",
        subtitle: "Goûts & Préférences",
        items: ["I love / I like...", "I don't like / I hate...", "My favourite dish is..."]
      },
      {
        name: "FOOD & DRINKS VOCABULARY",
        subtitle: "Aliments & Boissons",
        items: ["Fruits & Vegetables", "Rice, Meat, Fish, Bread", "Water, Juice, Milk, Tea"]
      }
    ]
  },
  conclusion: `À l'issue de cette leçon, les élèves sont en mesure d'exprimer des choix alimentaires personnels, de mener un court dialogue au marché ou à la cantine, et de comparer leurs habitudes culinaires avec celles des jeunes anglophones.`
};

// --- THÈME 5 : BODY AND CLOTHES ---
export const LESSON_5_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LE CORPS ET LES VÊTEMENTS (BODY AND CLOTHES)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 5 : LE CORPS ET LES VÊTEMENTS (BODY AND CLOTHES)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

THÈME DU PROGRAMME :
Le corps et les vêtements (Body and Clothes) : décrire le physique et les tenues vestimentaires.

I. OBJECTIFS DE COMMUNICATION (COMMUNICATIVE FUNCTIONS) :
- Décrire les parties du corps humain et du visage (head, eyes, hair, hands, legs).
- Faire le portrait physique d'une personne (taille, corpulence, couleur des yeux et cheveux).
- Identifier et nommer les vêtements et accessoires vestimentaires.
- Dire ce qu'une personne porte au moment présent : "He is wearing a blue shirt and black trousers".
- Exprimer les couleurs et l'accord des adjectifs qualificatifs.

II. STRUCTURES LINGUISTIQUES & GRAMMAIRE CIBLÉES :
- Le verbe "wear" conjugué au présent continu (be + V-ing) pour la tenue portée : "I am wearing...", "She is wearing...".
- Les adjectifs qualificatifs : invariabilité et position AVANT le nom (ex : "a red dress", "brown eyes").
- Le verbe "have got / has got" pour les traits physiques : "She has got long curly hair and big brown eyes".
- Les pluriels irréguliers des parties du corps : foot/feet, tooth/teeth.

III. RÉPERTOIRE LEXICAL ATTENDU :
- The Body : head, face, eyes, ears, nose, mouth, teeth, neck, shoulders, arms, hands, fingers, legs, feet.
- Physical appearance : tall, short, slim, strong, dark, fair, hair (long, short, straight, curly, black, blonde).
- Clothes : shirt, T-shirt, trousers, jeans, dress, skirt, shoes, trainers, jacket, hat, socks, traditional boubou.
- Colours : blue, white, black, red, green, yellow, brown, orange, grey.

IV. LIEN AVEC LES AXES CULTURELS :
- Axe 1 (Personnes et personnages) : Décrire des héros célèbres de romans jeunesse (Harry Potter avec ses lunettes rondes et sa cicatrice, Robin des Bois) ou des personnalités du sport et des arts.`,
  introduction: `Cette leçon enrichit considérablement les compétences descriptives de l'élève. En combinant le vocabulaire du corps humain, des couleurs et des vêtements avec le présent continu et l'auxiliaire have got, l'apprenant devient capable d'esquisser un portrait physique complet.`,
  sections: [
    {
      title: 'I. FONCTIONS DE COMMUNICATION & OBJECTIFS VISÉS',
      subsections: [
        {
          subtitle: '1. Décrire les parties du corps et le visage',
          content: [
            'Nommer les éléments du visage et du corps : eyes, ears, mouth, nose, head, arms, legs, feet.',
            'Exprimer la morphologie et les cheveux : "He has got short black hair and brown eyes" / "She is tall and slim".'
          ]
        },
        {
          subtitle: '2. Décrire la tenue vestimentaire portée',
          content: [
            'Nommer les vêtements quotidiens et traditionnels : shirt, T-shirt, trousers, dress, skirt, shoes, boubou.',
            'Utiliser le présent continu pour décrire ce qu\'une personne porte : "Today, Moussa is wearing a white shirt and blue jeans".'
          ]
        }
      ]
    },
    {
      title: 'II. STRUCTURES GRAMMATICALES ET LINGUISTIQUES CIBLÉES',
      content: [
        'Points essentiels de grammaire à maîtriser :'
      ],
      table: {
        headers: ['Règle grammaticale', 'Fonctionnement', 'Exemple'],
        rows: [
          ['Position des adjectifs', 'Toujours placés DEVANT le nom et invariables', 'She has got brown eyes (jamais browns).'],
          ['BE + WEARING', 'Présent en BE + V-ing pour la tenue actuelle', 'I am wearing black trainers.'],
          ['HAVE / HAS GOT', 'Description des traits physiques', 'He has got big ears and a round face.'],
          ['Pluriels irréguliers', 'foot → feet, tooth → teeth', 'He has big feet.']
        ]
      }
    },
    {
      title: 'III. LEXIQUE ASSOCIÉ & ACTIVITÉ GUIDÉE',
      content: [
        'Vocabulaire clé : head, face, eyes, hair, clothes, trousers, shirt, dress, jacket, shoes, tall, short, colours.',
        'Activité pratique : "Guess Who!" (Un élève décrit secrètement la tenue et le physique d\'un camarade de classe, les autres doivent deviner de qui il s\'agit).'
      ]
    }
  ],
  diagram: {
    title: "STRUCTURE DE LA LEÇON : BODY AND CLOTHES",
    root: "BODY & CLOTHES",
    branches: [
      {
        name: "THE BODY & FACE",
        subtitle: "Anatomie & Traits",
        items: ["Head, face, eyes, nose", "Hair (long, short, dark)", "Height (tall, short)"]
      },
      {
        name: "CLOTHING ITEMS",
        subtitle: "Garde-robe & Couleurs",
        items: ["Shirt, T-shirt, trousers", "Dress, skirt, shoes", "Colours (blue, white, red)"]
      },
      {
        name: "GRAMMAR IN ACTION",
        subtitle: "Outils de phrase",
        items: ["Have got for features", "Be wearing for outfits", "Adjective + Noun"]
      }
    ]
  },
  conclusion: `La maîtrise de la description physique et vestimentaire donne aux élèves une autonomie précieuse pour caractériser des personnes réelles ou des héros littéraires.`
};

// --- THÈME 6 : PETS ---
export const LESSON_6_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LES ANIMAUX FAMILIERS (PETS)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 6 : LES ANIMAUX FAMILIERS (PETS)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

THÈME DU PROGRAMME :
Les animaux familiers (Pets) : parler des animaux de compagnie.

I. OBJECTIFS DE COMMUNICATION (COMMUNICATIVE FUNCTIONS) :
- Nommer les animaux familiers et domestiques les plus courants.
- Dire si l'on possède un animal de compagnie : "Have you got a pet? - Yes, I have got a cat named Mimi".
- Décrire son animal (taille, pelage, couleur, caractère, alimentation) : "My dog is friendly and playful".
- Exprimer ce que son animal sait faire à l'aide de CAN : "My parrot can talk", "My dog can run very fast".
- Exprimer son affection envers les animaux.

II. STRUCTURES LINGUISTIQUES & GRAMMAIRE CIBLÉES :
- L'auxiliaire de possession : "have got / has got" (interrogatif, affirmatif, négatif).
- Le modal "CAN" (capacité) et "CANNOT / CAN'T" (incapacité).
- Le présent simple pour les habitudes de l'animal : "Cats drink milk and sleep a lot".
- Les adjectifs qualificatifs de description animale : small, big, furry, cute, fast, playful, dangerous, friendly.

III. RÉPERTOIRE LEXICAL ATTENDU :
- Pets & domestic animals : dog, cat, puppy, kitten, bird, parrot, rabbit, fish, hamster, horse, sheep, goat.
- Animal body parts : tail, paws, fur, feathers, beak, wings.
- Actions & verbs : bark, meow, fly, swim, run, jump, bite, feed.

IV. LIEN AVEC LES AXES CULTURELS :
- Axe 2 (Le quotidien) : La place centrale des animaux de compagnie dans les foyers britanniques et américains (RSPCA, parcs à chiens, adoption) comparée à la présence des animaux domestiques (moutons de Tabaski, chats de maison) dans la société sénégalaise.`,
  introduction: `Les animaux de compagnie suscitent un vif engouement chez les jeunes élèves de 6ème. Ce thème leur permet de parler de leurs fidèles compagnons, d'exercer la description physique et comportementale et d'utiliser le modal CAN pour décrire les capacités animales.`,
  sections: [
    {
      title: 'I. FONCTIONS DE COMMUNICATION & OBJECTIFS VISÉS',
      subsections: [
        {
          subtitle: '1. Présenter son animal familier',
          content: [
            'Demander et déclarer la possession d\'un animal : "Have you got a pet? - Yes, I have got a black cat" / "No, I haven\'t got any pet".',
            'Donner son nom et ses caractéristiques : "Its name is Bobby. It is very playful and friendly".'
          ]
        },
        {
          subtitle: '2. Exprimer les capacités de l\'animal avec CAN',
          content: [
            'Utiliser CAN pour les aptitudes : "My parrot can talk", "Dogs can swim and run fast".',
            'Utiliser CANNOT / CAN\'T pour l\'impossibilité : "A rabbit can\'t fly".'
          ]
        }
      ]
    },
    {
      title: 'II. STRUCTURES GRAMMATICALES ET LINGUISTIQUES CIBLÉES',
      content: [
        'Tableau synthétique des outils d\'expression :'
      ],
      table: {
        headers: ['Outil grammatical', 'Usage', 'Exemple type'],
        rows: [
          ['Modal CAN / CAN\'T', 'Capacité ou incapacité physique', 'Birds can fly. Cats can\'t speak.'],
          ['Pronom neutre IT', 'Désigner un animal', 'It is a small puppy. It eats meat.'],
          ['Have you got...?', 'Interroger sur la possession', 'Have you got a dog? - Yes, I have.'],
          ['Adjectifs de caractère', 'Comportement animal', 'friendly, clever, quiet, wild, cute']
        ]
      }
    },
    {
      title: 'III. VOCABULAIRE & CULTURE DES ANIMAUX',
      content: [
        'Vocabulaire clé : pet, dog, cat, puppy, kitten, bird, rabbit, tail, paws, fur, bark, meow, food, care.',
        'Repère culturel (Axe 2) : L\'amour des animaux au Royaume-Uni (la reine et ses célèbres corgis, les parcs animaliers) et l\'importance de l\'élevage au Sénégal.'
      ]
    }
  ],
  diagram: {
    title: "STRUCTURE DE LA LEÇON : PETS",
    root: "PETS (ANIMAUX)",
    branches: [
      {
        name: "COMMON PETS",
        subtitle: "Espèces courantes",
        items: ["Dog & puppy", "Cat & kitten", "Bird & parrot", "Rabbit & fish"]
      },
      {
        name: "ABILITIES (CAN)",
        subtitle: "Capacités de l'animal",
        items: ["Can swim / Can run", "Can fly / Can jump", "Can't speak"]
      },
      {
        name: "CARE & FEATURES",
        subtitle: "Description & Soins",
        items: ["Tail, paws, fur", "Cute, playful, friendly", "Feeding & caring"]
      }
    ]
  },
  conclusion: `Parler de son animal familier permet de mobiliser le lexique affectif, de structurer des phrases simples avec CAN et d'aborder avec sensibilité le respect du monde animal.`
};

// --- THÈME 7 : SPORTS AND HOBBIES ---
export const LESSON_7_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-7',
  number: 'LEÇON 7',
  title: 'SPORTS ET LOISIRS (SPORTS AND HOBBIES)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 7 : SPORTS ET LOISIRS (SPORTS AND HOBBIES)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

THÈME DU PROGRAMME :
Sports et loisirs (Sports and Hobbies) : exprimer ses passions et ses activités préférées.

I. OBJECTIFS DE COMMUNICATION (COMMUNICATIVE FUNCTIONS) :
- Parler de ses activités de loisirs pendant son temps libre (free time / leisure time).
- Nommer et classifier les sports et activités de détente.
- Exprimer ses passions : "I am keen on football", "I am fond of reading", "My passion is music".
- Demander à un camarade ce qu'il fait pendant le week-end : "What do you do in your free time?".
- Proposer une activité commune : "Let's play basketball!", "Shall we watch a movie?".

II. STRUCTURES LINGUISTIQUES & GRAMMAIRE CIBLÉES :
- La distinction essentielle entre les verbes d'activités sportives :
  * PLAY + sports d'équipe avec balle/ballon ou jeux (play football, play tennis, play chess).
  * GO + activités se terminant en -ing (go swimming, go running, go cycling).
  * DO + activités individuelles, arts martiaux ou gymnastique (do gymnastics, do karate).
- Le présent simple pour les activités régulières et les adverbes de fréquence (always, often, sometimes, never).
- Les expressions de passion : to be keen on, to be interested in, to be crazy about + V-ing.

III. RÉPERTOIRE LEXICAL ATTENDU :
- Sports : football (soccer), basketball, athletics, wrestling (la lutte sénégalaise), swimming, tennis, volleyball, cycling.
- Hobbies & free time : listening to music, reading books, drawing, playing video games, watching TV, dancing, cooking.
- Time expressions : on weekends, after school, every Sunday, twice a week.

IV. LIEN AVEC LES AXES CULTURELS :
- Axe 2 (Le quotidien) & Axe 1 (Figures marquantes) : Les grands sports nés dans le monde anglophone (football, rugby, cricket, baseball, basketball) et les légendes sportives (Sadio Mané en Premier League anglaise, Michael Jordan).`,
  introduction: `Cette unité clôture avec dynamisme le bloc des thèmes de communication personnelle. Elle permet aux élèves de partager ce qui les passionne en dehors de l'école : sports d'équipe, activités artistiques, lectures et moments de détente.`,
  sections: [
    {
      title: 'I. FONCTIONS DE COMMUNICATION & OBJECTIFS VISÉS',
      subsections: [
        {
          subtitle: '1. Parler de son temps libre et de ses passions',
          content: [
            'Exprimer ce que l\'on aime faire le week-end : "In my free time, I like playing football with my friends".',
            'Formuler un intérêt marqué : "I am keen on reading" / "My favourite hobby is drawing".',
            'Demander les passe-temps d\'un ami : "What is your hobby? What do you do after school?".'
          ]
        },
        {
          subtitle: '2. Différencier PLAY, GO et DO pour les sports',
          content: [
            'PLAY s\'associe aux jeux à ballon, balle ou règles d\'équipe : "play football, play basketball, play tennis".',
            'GO s\'associe aux activités sportives finissant par -ing : "go swimming, go running, go cycling".',
            'DO s\'associe aux exercices individuels et arts martiaux : "do karate, do gymnastics, do athletics".'
          ]
        }
      ]
    },
    {
      title: 'II. STRUCTURES GRAMMATICALES ET LINGUISTIQUES CIBLÉES',
      content: [
        'Règles d\'emploi et déclinaisons :'
      ],
      table: {
        headers: ['Verbe / Expression', 'Règle grammaticale', 'Exemple'],
        rows: [
          ['PLAY + Sport', 'Sports avec ballon ou jeux de société', 'I play football every Saturday.'],
          ['GO + Verbe-ing', 'Sports d\'action et de déplacement', 'She goes swimming twice a week.'],
          ['DO + Activité', 'Activités physiques sans ballon', 'We do gymnastics at school.'],
          ['Adverbes de fréquence', 'always, often, sometimes, never', 'I always play with my classmates.']
        ]
      }
    },
    {
      title: 'III. LEXIQUE & CULTURE DU SPORT',
      content: [
        'Vocabulaire clé : sport, hobby, free time, football, basketball, music, reading, cinema, team, match, winner.',
        'Repère culturel : Les sports inventés au Royaume-Uni (football, cricket, rugby, golf) et les stars internationales africaines qui y brillent.'
      ]
    }
  ],
  diagram: {
    title: "STRUCTURE DE LA LEÇON : SPORTS AND HOBBIES",
    root: "SPORTS & HOBBIES",
    branches: [
      {
        name: "VERB : PLAY",
        subtitle: "Ballons & Jeux",
        items: ["Play football (soccer)", "Play basketball", "Play tennis / chess"]
      },
      {
        name: "VERB : GO",
        subtitle: "Activités en -ING",
        items: ["Go swimming", "Go running", "Go cycling"]
      },
      {
        name: "VERB : DO & PASSIONS",
        subtitle: "Loisirs & Fréquence",
        items: ["Do karate / gymnastics", "Listen to music / read", "Keen on / Fond of"]
      }
    ]
  },
  conclusion: `Grâce à ce thème stimulant, les collégiens s'approprient les structures du présent simple et les adverbes de fréquence tout en valorisant une vie saine et équilibrée.`
};

// =========================================================================
// AXES CULTURELS (REPÈRES DU PROGRAMME DE 6ÈME)
// =========================================================================

// --- AXE CULTUREL 1 : PERSONNES ET PERSONNAGES ---
export const LESSON_8_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-8',
  number: 'LEÇON 8',
  title: 'AXE CULTUREL 1 : PERSONNES ET PERSONNAGES (PEOPLE AND CHARACTERS)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 8 : AXE CULTUREL 1 – PERSONNES ET PERSONNAGES (PEOPLE AND CHARACTERS)
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

AXE CULTUREL DU PROGRAMME :
Personnes et personnages : familles, héros de la littérature jeunesse et figures marquantes.

I. OBJECTIFS PÉDAGOGIQUES ET CULTURELS :
- Découvrir des figures emblématiques et modèles inspirants du monde anglophone (leaders, scientifiques, artistes, sportifs).
- Explorer les héros célèbres de la littérature jeunesse anglophone (Alice in Wonderland, Peter Pan, Harry Potter, Charlie and the Chocolate Factory).
- Analyser la diversité des familles dans le monde anglophone à travers des récits et documents visuels.
- Mobiliser les acquis linguistiques (description physique et morale, passé simple ou présent de narration) pour présenter un personnage.

II. PISTES D'ÉTUDE & CORPUS RECOMMANDÉS :
- Héros de jeunesse : Peter Pan de J.M. Barrie (l'enfant qui ne voulait pas grandir), Harry Potter de J.K. Rowling.
- Figures historiques et citoyennes marquantes : Martin Luther King Jr., Nelson Mandela, Rosa Parks, Wangari Maathai.
- Personnages du folklore africain anglophone : Anansi the Spider (le héros rusé des contes ghanéens et de la diaspora).

III. ACTIVITÉS EN CLASSE DE 6ÈME :
- Réalisation d'une fiche d'identité de personnage (Character ID card) : Name, Age, Appearance, Superpower / Achievement.
- Court exposé oral : "My favourite hero / heroine".`,
  introduction: `Le premier axe culturel plonge les élèves dans l'univers captivant des figures réelles ou fictives qui façonnent la culture des pays anglophones. Il stimule l'imagination et l'identification positive à travers des modèles inspirants.`,
  sections: [
    {
      title: 'I. OBJECTIFS CULTURELS ET PÉDAGOGIQUES',
      subsections: [
        {
          subtitle: '1. Les héros de la littérature jeunesse anglophone',
          content: [
            'Découverte des grandes œuvres de jeunesse : Peter Pan, Harry Potter, Charlie and the Chocolate Factory, Alice in Wonderland.',
            'Étude des attributs des héros : le courage, l\'amitié, la curiosité, les pouvoirs imaginaires.'
          ]
        },
        {
          subtitle: '2. Figures marquantes de l\'Histoire et de la société',
          content: [
            'Personnalités inspirantes : Martin Luther King Jr., Rosa Parks, Nelson Mandela, Wangari Maathai.',
            'Célébration des valeurs de justice, d\'égalité, de persévérance et de solidarité universelle.'
          ]
        },
        {
          subtitle: '3. Les familles d\'ici et d\'ailleurs',
          content: [
            'Observation de la diversité des structures familiales au Royaume-Uni, aux USA et comparaison avec la famille élargie en Afrique.'
          ]
        }
      ]
    },
    {
      title: 'II. OUTILS LINGUISTIQUES MOBILISÉS',
      content: [
        'Réinvestissement des acquis des thèmes 1 à 5 pour le portrait :'
      ],
      table: {
        headers: ['Domaine', 'Structures clés', 'Application'],
        rows: [
          ['Portrait physique', 'He / She has got... / He is wearing...', 'Description du héros ou de la personnalité.'],
          ['Qualités morales', 'brave, smart, generous, kind, determined', 'Caractérisation des vertus du personnage.'],
          ['Fiche d\'identité', 'Name, origin, profession, achievements', 'Élaboration de la Character Card.']
        ]
      }
    },
    {
      title: 'III. PROJET D\'APPLICATION & ATELIER',
      content: [
        'Activité : Réalisation d\'un poster "My Role Model" ou "My Favourite Character".',
        'Exposé oral de 2 minutes en anglais pour présenter le personnage choisi.'
      ]
    }
  ],
  diagram: {
    title: "AXE CULTUREL 1 : PERSONNES ET PERSONNAGES",
    root: "PEOPLE & CHARACTERS",
    branches: [
      {
        name: "LITERARY HEROES",
        subtitle: "Jeunesse & Fiction",
        items: ["Peter Pan & Alice", "Harry Potter", "Charlie & Chocolate Factory"]
      },
      {
        name: "HISTORICAL FIGURES",
        subtitle: "Figures marquantes",
        items: ["Martin Luther King Jr.", "Nelson Mandela & Rosa Parks", "Wangari Maathai"]
      },
      {
        name: "FAMILY PATTERNS",
        subtitle: "Diversité familiale",
        items: ["Nuclear & extended families", "Values of community", "Cross-cultural bonds"]
      }
    ]
  },
  conclusion: `Cet axe permet aux élèves de donner du sens à leur apprentissage en découvrant des personnalités admirables et en nourrissant leur culture générale.`
};

// --- AXE CULTUREL 2 : LE QUOTIDIEN ---
export const LESSON_9_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-9',
  number: 'LEÇON 9',
  title: 'AXE CULTUREL 2 : LE QUOTIDIEN (DAILY LIFE IN THE ENGLISH-SPEAKING WORLD)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 9 : AXE CULTUREL 2 – LE QUOTIDIEN DANS LES PAYS ANGLOPHONES
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

AXE CULTUREL DU PROGRAMME :
Le quotidien : modes de vie des jeunes dans les pays anglophones.

I. OBJECTIFS PÉDAGOGIQUES ET CULTURELS :
- Découvrir une journée type d'un collégien au Royaume-Uni, aux États-Unis, au Canada, au Nigeria ou en Afrique du Sud.
- Comprendre les rythmes scolaires, les horaires, les repas et les clubs périscolaires (after-school clubs).
- Observer les traditions et fêtes calendaires populaires dans l'espace anglophone (Halloween, Thanksgiving, Christmas, Bonfire Night, Martin Luther King Day).
- Comparer avec son propre quotidien au Sénégal (rythme scolaire, convivialité, valeurs familiales).

II. PISTES D'ÉTUDE & DOCUMENTS SUPPORTS :
- Vidéo ou texte : "A day in the life of Jack, an 11-year-old Londoner".
- Les clubs après la classe : drama club, school band, chess club, soccer team.
- Les célébrations culturelles : origines et symboles d'Halloween (carving pumpkins, trick or treat) et de Thanksgiving.

III. PRODUCTION FINALE VISÉE :
- Projet collaboratif : "A bridge between Dakar and London" (tableau comparatif de la journée d'un élève dakarois et d'un élève londonien).`,
  introduction: `Ce deuxième axe ancre la langue dans la vie concrète. En comparant leur vie quotidienne avec celle de jeunes anglophones, les élèves découvrent des similitudes rassurantes et des différences culturelles enrichissantes.`,
  sections: [
    {
      title: 'I. MODES DE VIE ET RYTHMES SCOLAIRES',
      subsections: [
        {
          subtitle: '1. La journée type du collégien anglophone',
          content: [
            'Horaires scolaires : début des cours vers 8h45, fin vers 15h30, port de l\'uniforme (school uniform).',
            'Pause méridienne : la cantine scolaire (school canteen) ou le panier-repas préparé (packed lunch).'
          ]
        },
        {
          subtitle: '2. Les activités après la classe (After-school clubs)',
          content: [
            'Richesse des clubs : musique (school band), théâtre (drama club), sciences, sports collectifs.',
            'L\'importance accordée à l\'esprit d\'équipe, à l\'autonomie et au bien-être.'
          ]
        }
      ]
    },
    {
      title: 'II. LES GRANDES FÊTES DU CALENDRIER ANGLOPHONE',
      content: [
        'Fêtes et traditions annuelles majeures :'
      ],
      table: {
        headers: ['Célébration', 'Date & Lieu', 'Symboles & Traditions'],
        rows: [
          ['Halloween', '31 Octobre (UK, USA)', 'Citrouilles sculptées (jack-o\'-lantern), déguisements, Trick or Treat.'],
          ['Thanksgiving', '4ème jeudi de Novembre (USA)', 'Repas familial (dinde, tarte à la citrouille), gratitude et partage.'],
          ['Christmas & Boxing Day', '25 & 26 Décembre (Monde anglophone)', 'Sapin, cadeaux du Père Noël (Santa Claus), chants (carols).'],
          ['Bonfire Night', '5 Novembre (Royaume-Uni)', 'Feux de joie, feux d\'artifice en mémoire du complot de Guy Fawkes.']
        ]
      }
    },
    {
      title: 'III. REGARD CROISÉ : DAKAR & LONDRES',
      content: [
        'Tableau comparatif des rythmes et de la sociabilité des jeunes au Sénégal et en Grande-Bretagne.',
        'Activité : Rédiger un court paragraphe comparant sa journée d\'école avec celle d\'un élève de Londres.'
      ]
    }
  ],
  diagram: {
    title: "AXE CULTUREL 2 : LE QUOTIDIEN",
    root: "DAILY LIFE",
    branches: [
      {
        name: "SCHOOL ROUTINE",
        subtitle: "Rythme de classe",
        items: ["Uniform & morning assembly", "Classes from 9am to 3:30pm", "Packed lunch & canteen"]
      },
      {
        name: "AFTER-SCHOOL CLUBS",
        subtitle: "Vie associative",
        items: ["Drama & music clubs", "Sports & chess teams", "Community volunteering"]
      },
      {
        name: "CALENDAR HOLIDAYS",
        subtitle: "Fêtes traditionnelles",
        items: ["Halloween & Thanksgiving", "Christmas & Boxing Day", "Bonfire Night"]
      }
    ]
  },
  conclusion: `L'étude des modes de vie quotidiens permet aux élèves de développer leur empathie interculturelle et de comprendre le monde dans sa diversité.`
};

// --- AXE CULTUREL 3 : PAYS ET PAYSAGES ---
export const LESSON_10_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-10',
  number: 'LEÇON 10',
  title: 'AXE CULTUREL 3 : PAYS ET PAYSAGES (COUNTRIES AND LANDSCAPES)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 10 : AXE CULTUREL 3 – PAYS ET PAYSAGES DU MONDE ANGLOPHONE
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

AXE CULTUREL DU PROGRAMME :
Pays et paysages : découverte de lieux emblématiques du monde anglophone.

I. OBJECTIFS PÉDAGOGIQUES ET CULTURELS :
- Situer les grands pays anglophones sur une mappemonde : The United Kingdom, The United States, Canada, Australia, New Zealand, The Gambia, Nigeria, South Africa, India.
- Découvrir des monuments et sites emblématiques : Big Ben, the London Eye, the Statue of Liberty, the Grand Canyon, Sydney Opera House, Table Mountain.
- Reconnaître les symboles nationaux (drapeaux : Union Jack, Stars and Stripes ; emblèmes animaliers et floraux : lion, bald eagle, kangaroo, rose, shamrock).
- Sensibiliser aux milieux naturels spectaculaires et à leur préservation environnementale.

II. PISTES D'ÉTUDE & GÉOGRAPHIE ANGLOPHONE :
- "Virtual Tour of London" : navigation guidée le long de la Tamise.
- "The Great Outdoors" : les parcs nationaux américains et l'outback australien.
- L'anglais en Afrique de l'Ouest : focus sur la Gambie voisine (Banjul, River Gambia) et le Nigeria (Lagos).

III. PROJET PÉDAGOGIQUE :
- Carte postale illustrée : "Greetings from an English-speaking country" (rédiger une carte postale décrivant un monument ou paysage célèbre).`,
  introduction: `Le troisième axe culturel invite au voyage et à la géographie. Les élèves découvrent l'immensité et la variété des paysages qui composent le Commonwealth et le monde anglophone planétaire.`,
  sections: [
    {
      title: 'I. GÉOGRAPHIE DU MONDE ANGLOPHONE',
      subsections: [
        {
          subtitle: '1. Les grands pays ayant l\'anglais pour langue officielle',
          content: [
            'Royaume-Uni (Angleterre, Écosse, Pays de Galles, Irlande du Nord), États-Unis d\'Amérique, Canada.',
            'Australie, Nouvelle-Zélande, Afrique du Sud, Inde.',
            'Proximité géographique en Afrique de l\'Ouest : La Gambie (enclavée dans le Sénégal) et le Nigeria.'
          ]
        },
        {
          subtitle: '2. Monuments et symboles emblématiques',
          content: [
            'Londres : Big Ben, Tower Bridge, London Eye, Buckingham Palace.',
            'États-Unis : The Statue of Liberty, The White House, Mount Rushmore.',
            'Australie : Sydney Opera House, Uluru (Ayers Rock).'
          ]
        }
      ]
    },
    {
      title: 'II. DRAPEAUX, SYMBOLES ET MILIEUX NATURELS',
      content: [
        'Repères visuels et géographiques :'
      ],
      table: {
        headers: ['Pays / Région', 'Capitale', 'Drapeau & Symbole', 'Paysage marquant'],
        rows: [
          ['United Kingdom', 'London', 'Union Jack / Lion & Rose', 'Highlands écossais, falaises de Douvres'],
          ['United States', 'Washington, D.C.', 'Stars and Stripes / Bald Eagle', 'Grand Canyon, Parcs de Yellowstone'],
          ['Australia', 'Canberra', 'Southern Cross / Kangaroo', 'Grande Barrière de corail, Outback'],
          ['The Gambia', 'Banjul', 'Red, Blue, Green / River Gambia', 'Mangroves et fleuve Gambie']
        ]
      }
    },
    {
      title: 'III. ATELIER CARTES POSTALES',
      content: [
        'Activité pratique : "A Postcard from Sydney / London / New York".',
        'Structure de la carte : "Dear friend, I am in London. The weather is cool. I visited Big Ben yesterday. It is amazing! See you soon. Moussa."'
      ]
    }
  ],
  diagram: {
    title: "AXE CULTUREL 3 : PAYS ET PAYSAGES",
    root: "COUNTRIES & LANDSCAPES",
    branches: [
      {
        name: "MAJOR NATIONS",
        subtitle: "Monde anglophone",
        items: ["UK, USA, Canada", "Australia & New Zealand", "The Gambia & Nigeria"]
      },
      {
        name: "ICONIC SITES",
        subtitle: "Monuments réputés",
        items: ["Big Ben & Tower Bridge", "Statue of Liberty", "Sydney Opera House"]
      },
      {
        name: "SYMBOLS & NATURE",
        subtitle: "Drapeaux & Milieux",
        items: ["Union Jack & Stars/Stripes", "Grand Canyon & Outback", "River Gambia basin"]
      }
    ]
  },
  conclusion: `Ce voyage à travers les paysages et monuments fait de l'anglais une langue vivante, ouverte sur le monde et connectée aux réalités de l'Afrique de l'Ouest.`
};

// --- AXE CULTUREL 4 : L'IMAGINAIRE ---
export const LESSON_11_ANGLAIS_6EME: LessonContent = {
  id: 'anglais-6eme-lecon-11',
  number: 'LEÇON 11',
  title: 'AXE CULTUREL 4 : L\'IMAGINAIRE (MYTHS, TALES AND LEGENDS)',
  subject: 'Anglais',
  classLevel: '6ème',
  fullText: `LEÇON 11 : AXE CULTUREL 4 – L'IMAGINAIRE : CONTES, MYTHES ET LÉGENDES
PROGRAMME OFFICIEL D'ANGLAIS 6ÈME – FICHE DE CADRAGE PÉDAGOGIQUE

AXE CULTUREL DU PROGRAMME :
Imaginaire : contes, mythes et légendes traditionnels.

I. OBJECTIFS PÉDAGOGIQUES ET CULTURELS :
- Explorer les grands récits mythologiques et légendes du folklore anglophone.
- Découvrir la légende du Roi Arthur et des Chevaliers de la Table Ronde (King Arthur and Excalibur).
- Découvrir Robin des Bois dans la forêt de Sherwood (Robin Hood and the Sherwood Forest).
- Explorer la légende du monstre du Loch Ness en Écosse (Nessie, the Loch Ness Monster).
- Faire le parallèle avec la tradition des contes oraux africains et les créatures fantastiques traditionnelles.

II. CARACTÉRISTIQUES DU RÉCIT IMAGINAIRE EN ANGLAIS :
- Formules traditionnelles de début et de fin : "Once upon a time...", "They lived happily ever after".
- Les créatures légendaires : dragons, knights, wizards, fairies, giants, talking animals.
- Vocabulaire du merveilleux : magic, sword, castle, forest, spell, brave, treasure.

III. ACTIVITÉ CRÉATIVE EN 6ÈME :
- Lecture expressive guidée d'un conte court illustré.
- Mini-création : imaginer et dessiner sa propre créature légendaire avec une courte légende en anglais ("This is a magical creature, it lives in a secret river...").`,
  introduction: `Ce dernier axe culturel ouvre les portes du rêve, de la créativité et du patrimoine immatériel. À travers contes et légendes, les élèves découvrent les récits fondateurs de l'imaginaire anglophone et développent leur plaisir de lire.`,
  sections: [
    {
      title: 'I. LÉGENDES ET MYTHES FONDATEURS DU FOLKLORE ANGLAIS',
      subsections: [
        {
          subtitle: '1. Le Roi Arthur et les Chevaliers de la Table Ronde',
          content: [
            'L\'épée magique Excalibur scellée dans la roche.',
            'Les valeurs de chevalerie, la quête du Graal et la sagesse de l\'enchanteur Merlin (Merlin the Wizard).'
          ]
        },
        {
          subtitle: '2. Robin des Bois (Robin Hood)',
          content: [
            'Le justicier de la forêt de Sherwood défendant les opprimés.',
            'L\'arc et les flèches, l\'esprit de liberté et d\'équité.'
          ]
        },
        {
          subtitle: '3. Nessie, le monstre du Loch Ness',
          content: [
            'Le mystère des eaux profondes des Highlands en Écosse.',
            'L\'imaginaire des créatures aquatiques et le folklore populaire.'
          ]
        }
      ]
    },
    {
      title: 'II. LES CODES DU RÉCIT MERVEILLEUX EN ANGLAIS',
      content: [
        'Formules narratives et lexique du conte :'
      ],
      table: {
        headers: ['Élément narratif', 'Expression en anglais', 'Rôle dans le conte'],
        rows: [
          ['Formule d\'ouverture', '"Once upon a time..."', 'Installe le récit dans un temps indéterminé.'],
          ['Créatures fantastiques', 'dragon, knight, wizard, fairy, giant', 'Personnages extraordinaires.'],
          ['Objets magiques', 'magic sword, magic wand, spell, potion', 'Déclencheurs d\'aventures.'],
          ['Formule de clôture', '"They lived happily ever after."', 'Dénouement heureux classique.']
        ]
      }
    },
    {
      title: 'III. PONTS AVEC LA TRADITION ORALE AFRICAINE',
      content: [
        'Parallèle entre les récits oraux de Leuk le lièvre ou Bouki la hyène et les contes du folklore anglophone.',
        'Atelier créatif : Rédiger le mini-portrait d\'une créature mythique inventée (nom, habitat, pouvoir magique).'
      ]
    }
  ],
  diagram: {
    title: "AXE CULTUREL 4 : L'IMAGINAIRE",
    root: "MYTHS & LEGENDS",
    branches: [
      {
        name: "ARTHURIAN TALES",
        subtitle: "Chevalerie & Mythes",
        items: ["King Arthur & Excalibur", "Round Table Knights", "Merlin the Wizard"]
      },
      {
        name: "FOLKLORE & MYSTERIES",
        subtitle: "Légendes populaires",
        items: ["Robin Hood in Sherwood", "Nessie of Loch Ness", "Dragons & Fairies"]
      },
      {
        name: "STORYTELLING CODES",
        subtitle: "Codes du récit",
        items: ["Once upon a time...", "Happily ever after", "African oral parallels"]
      }
    ]
  },
  conclusion: `En découvrant l'imaginaire anglophone, les élèves enrichissent leur sensibilité narrative et réalisent la puissance universelle des contes partagés entre les cultures.`
};

// =========================================================================
// LISTE GLOBALE DES COURS ET RESSOURCES D'ANGLAIS EN 6ÈME
// =========================================================================

export const COURSES_ANGLAIS_6EME: ContentData[] = [
  // --- BLOC 1 : LES 7 THÈMES DE COMMUNICATION ---
  {
    id: 'anglais-6eme-theme-1',
    title: "LEÇON 1 : L'IDENTIFICATION PERSONNELLE (PERSONAL IDENTIFICATION)",
    type: 'cours',
    badge: 'Thème 1 • Expression & Communication',
    description: "Se présenter, dire son nom, son âge, sa nationalité et parler de soi.",
    lessonData: LESSON_1_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-theme-2',
    title: 'LEÇON 2 : LA FAMILLE ET LA MAISON (FAMILY AND HOME)',
    type: 'cours',
    badge: 'Thème 2 • Expression & Communication',
    description: "Décrire les membres de sa famille et son habitation.",
    lessonData: LESSON_2_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-theme-3',
    title: "LEÇON 3 : L'ÉCOLE (AT SCHOOL)",
    type: 'cours',
    badge: 'Thème 3 • Expression & Communication',
    description: "L'environnement scolaire, les objets de la classe et les activités en cours.",
    lessonData: LESSON_3_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-theme-4',
    title: 'LEÇON 4 : LES HABITUDES ALIMENTAIRES (FOOD AND DRINKS)',
    type: 'cours',
    badge: 'Thème 4 • Expression & Communication',
    description: "Exprimer ses goûts et décrire les repas.",
    lessonData: LESSON_4_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-theme-5',
    title: 'LEÇON 5 : LE CORPS ET LES VÊTEMENTS (BODY AND CLOTHES)',
    type: 'cours',
    badge: 'Thème 5 • Expression & Communication',
    description: "Décrire le physique et les tenues vestimentaires.",
    lessonData: LESSON_5_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-theme-6',
    title: 'LEÇON 6 : LES ANIMAUX FAMILIERS (PETS)',
    type: 'cours',
    badge: 'Thème 6 • Expression & Communication',
    description: "Parler des animaux de compagnie.",
    lessonData: LESSON_6_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-theme-7',
    title: 'LEÇON 7 : SPORTS ET LOISIRS (SPORTS AND HOBBIES)',
    type: 'cours',
    badge: 'Thème 7 • Expression & Communication',
    description: "Exprimer ses passions et ses activités préférées.",
    lessonData: LESSON_7_ANGLAIS_6EME
  },

  // --- BLOC 2 : LES 4 AXES CULTURELS (REPÈRES DU PROGRAMME) ---
  {
    id: 'anglais-6eme-axe-1',
    title: 'LEÇON 8 : PERSONNES ET PERSONNAGES',
    type: 'cours',
    badge: 'Axe Culturel 1 • Repère du programme',
    description: "Familles, héros de la littérature jeunesse et figures marquantes.",
    lessonData: LESSON_8_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-axe-2',
    title: 'LEÇON 9 : LE QUOTIDIEN',
    type: 'cours',
    badge: 'Axe Culturel 2 • Repère du programme',
    description: "Modes de vie des jeunes dans les pays anglophones.",
    lessonData: LESSON_9_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-axe-3',
    title: 'LEÇON 10 : PAYS ET PAYSAGES',
    type: 'cours',
    badge: 'Axe Culturel 3 • Repère du programme',
    description: "Découverte de lieux emblématiques du monde anglophone.",
    lessonData: LESSON_10_ANGLAIS_6EME
  },
  {
    id: 'anglais-6eme-axe-4',
    title: 'LEÇON 11 : IMAGINAIRE',
    type: 'cours',
    badge: 'Axe Culturel 4 • Repère du programme',
    description: "Contes, mythes et légendes traditionnels.",
    lessonData: LESSON_11_ANGLAIS_6EME
  },

  // --- RESSOURCES & GUIDES DU PROGRAMME ---
  {
    id: 'pdf-anglais-programme-officiel',
    title: "Document cadre PDF : Programme d'Anglais 6ème (Thèmes & Axes culturels)",
    type: 'ressource',
    badge: 'Programme officiel',
    description: "Document officiel fixant les 7 thèmes de communication, les 4 axes culturels, les objectifs linguistiques et le lexique attendu pour la classe de 6ème.",
    link: '#'
  },
  {
    id: 'pdf-anglais-fiches-vocabulaire',
    title: "Fiches de synthèse PDF : Lexique et expressions usuelles (Thèmes 1 à 7)",
    type: 'ressource',
    badge: 'Fiche imprimable',
    description: "Répertoire thématique des mots-clés et structures communicatives indispensables : salutations, famille, école, nourriture, corps, animaux et sports.",
    link: '#'
  },
  {
    id: 'pdf-anglais-axes-culturels',
    title: "Guide de civilisation PDF : Les 4 axes culturels du monde anglophone en 6ème",
    type: 'ressource',
    badge: 'Civilisation & Repères',
    description: "Synthèse illustrée sur les figures marquantes, les modes de vie des jeunes anglophones, les monuments emblématiques et les contes traditionnels.",
    link: '#'
  }
];
