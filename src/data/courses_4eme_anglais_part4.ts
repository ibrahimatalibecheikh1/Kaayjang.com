import { LessonContent } from './courses';

// =========================================================================
// COURS D'ANGLAIS - CLASSE DE 4ÈME (PROGRAMME OFFICIEL COMPLET - 30 LEÇONS)
// PARTIE 4 : THÉMATIQUES, CULTURE, VOCABULAIRE & COMMUNICATION (LEÇONS 22 À 30)
// TEXTES EXHAUSTIFS, DÉTAILLÉS EN FRANÇAIS, RÈGLES CLAIRES, TABLEAUX,
// SCHÉMAS D'APPRENTISSAGE ET EXERCICES D'APPLICATION RÉSCLUS AVEC CORRIGÉS
// =========================================================================

export const LESSON_22_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-22',
  number: 'Lesson 22',
  title: 'School Life and Educational Systems in Anglophone Countries',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "La vie scolaire en pays anglophones (Royaume-Uni, États-Unis) offre une découverte culturelle fascinante pour un élève sénégalais de 4ème. Les rythmes scolaires, le port quasi-systématique de l'uniforme en Angleterre, le système des 'houses' (maisons scolaires), les clubs parascolaires et l'importance centrale accordée au sport et au débat forgent une atmosphère unique. Cette leçon vous initie au lexique comparatif et aux structures d'expression de la routine collégienne.",
  fullText: `Lesson 22: School Life and Educational Systems

Introduction :
Cette leçon explore le quotidien des collégiens dans les pays anglophones et compare leurs systèmes avec le modèle sénégalais.

1. Detailed Cultural & Lexical Analysis
A. L'Organisation des Établissements Britanniques et Américains :
- Au Royaume-Uni : Secondary School (11 à 16/18 ans). Les élèves sont répartis en 'Houses' (maisons) pour créer une émulation collective sportive et académique. Le port de l'uniforme (blazer, tie, badge) est une tradition respectée.
- Aux États-Unis : Middle School / Junior High School (11 à 14 ans) puis High School. Les élèves ont des casiers individuels (lockers) dans les couloirs et s'investissent dans les clubs scolaires (Drama club, Robotics, Cheerleading, Marching band).

B. Vocabulaire Comparatif Clé :
- Headmaster / Principal : le proviseur ou principal.
- Timetable / Schedule : l'emploi du temps.
- School subjects : Science (Physique-Chimie-SVT), Maths, Geography, History, Physical Education (PE), Art, Music.
- Assembly : rassemblement matinal de tous les élèves et professeurs dans le hall.
- Break time / Recess : la récréation.
- Homework / Assignment : les devoirs à la maison.

2. Practical Rules & Structural Mechanics
- Parler de son emploi du temps : 'I have English on Mondays and Thursdays.'
- Exprimer ses préférences scolaires : 'My favourite subject is History because I love learning about ancient civilisations.'
- L'heure des cours : 'School starts at 8 am and finishes at 3:30 pm.'

3. Contextual Examples & Practice Applications
- 'In British schools, students must wear a formal school uniform consisting of a dark blazer and a striped tie.'
- 'During break time, pupils gather in the schoolyard or visit the library to borrow books.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Cultural & Lexical Analysis (Le Quotidien Scolaire)',
      content: [
        "Panorama comparatif des systèmes scolaires :",
        "• Au Royaume-Uni : L'accent est mis sur le sens civique, les 'assemblies' matinales et le port fier de l'uniforme.",
        "• Aux USA : La journée est rythmée par le changement de salle à chaque sonnerie (lockers dans les couloirs), avec une vie de club intense après 15h.",
        "Lexique scolaire indispensable :",
        "• Staff room (salle des professeurs), Canteen / Cafeteria (cantine), Library (bibliothèque / CDI), Playground / Courtyard (cour de récréation).",
        "• Mark / Grade (note), Report card (bulletin de notes), Term (trimestre), Exam / Test (contrôle / examen)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Comparatif du Vocabulaire)',
      content: [
        "Différences de lexique scolaire UK vs USA :",
        "• L'anglais britannique (UK) et l'anglais américain (US) emploient souvent des mots distincts pour désigner la même réalité scolaire.",
        "• Formule pour exprimer l'obligation scolaire : 'We have to arrive before 7:55 am.'"
      ],
      table: {
        headers: ['Concept scolaire', 'Terme Britannique (UK)', 'Terme Américain (US)', 'Sens en français'],
        rows: [
          ['Chef d\'établissement', 'Headteacher / Headmaster', 'Principal', 'Principal / Proviseur'],
          ['Emploi du temps', 'Timetable', 'Schedule', 'Grille horaire hebdomadaire'],
          ['Récréation', 'Break time', 'Recess', 'Pause entre deux cours'],
          ['Trimestre', 'Term', 'Semester / Quarter', 'Période d\'évaluation'],
          ['Vacances', 'Holidays', 'Vacation', 'Congés scolaires']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Dialogue Practice',
      content: [
        "Exemples de dialogue en milieu scolaire :",
        "• 'What is your favourite school subject? I really enjoy Science because we do fascinating experiments.'",
        "• 'In British schools, students must wear a formal school uniform consisting of a dark blazer and a striped tie.'",
        "• 'We have a two-hour Mathematics exam tomorrow morning, so I must revise tonight.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Associer le Vocabulaire Scolaire aux Définitions',
          content: [
            "Consigne : Associez chaque terme scolaire en anglais à sa définition exacte :",
            "Termes : A. Timetable | B. Library | C. Headmaster | D. Uniform | E. Locker",
            "1. A metal cupboard where students keep their books and sports gear in American schools.",
            "2. The person who is in charge of running the school.",
            "3. A quiet room where pupils go to read books and do research.",
            "4. Specific clothes that all students must wear in certain schools.",
            "5. A document showing the subjects and hours of classes for each day of the week."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. -> E. Locker (casier métallique individuel des couloirs de collèges américains).",
            "2. -> C. Headmaster (le chef d'établissement / proviseur).",
            "3. -> B. Library (la bibliothèque scolaire ou le centre de documentation).",
            "4. -> D. Uniform (la tenue réglementaire obligatoire portée par les collégiens).",
            "5. -> A. Timetable (l'emploi du temps hebdomadaire fixant les matières et heures)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rédiger sa Routine Scolaire en 4ème',
          content: [
            "Consigne : Rédigez 3 phrases complètes en anglais pour décrire votre propre journée de classe au Sénégal (heure d'arrivée, matière préférée, activité de récréation) en utilisant les connecteurs first, then, finally."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "Exemple de production modèle :",
            "1. 'First, I arrive at school at 7:45 am and attend the morning assembly in the courtyard.'",
            "2. 'Then, my favourite subject is English because our teacher explains grammar rules very clearly.'",
            "3. 'Finally, during break time at 11 am, I chat with my classmates and play football before resuming classes.'"
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'L\'Univers Scolaire Anglophone',
    root: 'SCHOOL LIFE',
    branches: [
      {
        name: 'Équipements & Lieux',
        subtitle: 'Lieux scolaires',
        items: ['Classroom, Library, Science Lab', 'Canteen / Cafeteria, Courtyard', 'Staff room (professeurs), Lockers (casiers)']
      },
      {
        name: 'Matières & Horaires',
        subtitle: 'Cursus scolaire',
        items: ['Maths, Science, History, Geography, PE', 'Timetable / Schedule (emploi du temps)', 'Break time / Recess (récréation)']
      },
      {
        name: 'Culture & Règles',
        subtitle: 'Traditions',
        items: ['School uniform (blazer, tie, badge)', 'School houses (compétitions internes)', 'Clubs parascolaires (drama, sports)']
      }
    ]
  },
  conclusion:
    "En conclusion, l'étude de la vie scolaire anglophone enrichit non seulement votre bagage lexical (timetable, lockers, uniform), mais ouvre également une fenêtre passionnante sur les méthodes d'apprentissage, le sens du collectif et la discipline partagée par les collégiens du monde entier."
};

export const LESSON_23_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-23',
  number: 'Lesson 23',
  title: 'Environmental Issues: Pollution, Deforestation, and Climate Change',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "La protection de l'environnement est l'un des enjeux planétaires les plus urgents du 21ème siècle et figure en place d'honneur dans le programme d'anglais de 4ème. Les collégiens sont invités à comprendre, débattre et proposer des solutions citoyennes face à la pollution marine, la désertification au Sahel, la déforestation et le réchauffement global. Cette leçon fournit tout le lexique écologique et les connecteurs de cause et de conséquence nécessaires.",
  fullText: `Lesson 23: Environmental Issues and Climate Change

Introduction :
L'écologie et le développement durable exigent des connaissances précises pour dénoncer les atteintes à la nature et promouvoir les gestes citoyens.

1. Detailed Thematic & Lexical Analysis
A. Les Principaux Fléaux Écologiques :
- Pollution : air pollution (gaz d'échappement, usines), water pollution (déchets plastiques en mer, marées noires), soil pollution (pesticides).
- Deforestation : la coupe abusive des arbres qui accélère la désertification, détruit la biodiversité et aggrave la sécheresse.
- Global warming / Climate change : le réchauffement climatique causé par l'effet de serre (greenhouse effect) et les émissions de dioxyde de carbone.
- Drought (sécheresse) and Floods (inondations).

B. Vocabulaire des Solutions et Gestes Éco-Citoyens :
- Renewable energy : énergie renouvelable (solar power, wind energy).
- Recycling : recycler le plastique, le papier, le verre et le métal.
- To plant trees : reboiser la forêt (afforestation / reforestation).
- The 3 Rs rule : Reduce, Reuse, Recycle (Réduire, Réutiliser, Recycler).
- To ban single-use plastic bags : interdire les sacs plastiques à usage unique.

2. Practical Rules & Structural Mechanics
- Exprimer la cause et la conséquence :
  • Cause : 'Because of deforestation, many animal species are losing their natural habitat.'
  • Conséquence : 'Global temperatures are rising; as a result, polar ice caps are melting.'
- Exprimer l'obligation écologique avec MUST et SHOULD :
  • 'We must protect our ocean and we should stop throwing plastic rubbish on beaches.'

3. Contextual Examples & Practice Applications
- 'Deforestation causes severe soil erosion and contributes directly to global warming.'
- 'Citizens must stop throwing plastic rubbish into the sea to protect marine turtles.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Thematic & Lexical Analysis (Menaces & Solutions)',
      content: [
        "Les grands défis environnementaux contemporains :",
        "• Air pollution (fumées industrielles, pots d'échappement causant des maladies respiratoires).",
        "• Ocean pollution (microplastiques étouffant les poissons et les tortues de mer).",
        "• Deforestation (abattage massif d'arbres provoquant l'avancée du désert dans la région du Sahel).",
        "Lexique d'action et de sauvegarde :",
        "• Endangered species (espèces menacées d'extinction).",
        "• Solar panels (panneaux solaires pour une énergie propre).",
        "• Waste management (gestion et tri des déchets).",
        "• Eco-friendly habits (habitudes respectueuses de l'environnement)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Thématique Écologie)',
      content: [
        "Mots de liaison pour argumenter en faveur de l'écologie :",
        "• Consequently / As a result (par conséquent).",
        "• In order to protect / So as to preserve (afin de préserver).",
        "• On the one hand... on the other hand... (d'une part... d'autre part...)."
      ],
      table: {
        headers: ['Problème environnemental', 'Cause principale', 'Conséquence majeure', 'Solution concrète'],
        rows: [
          ['Plastic pollution', 'Single-use plastic bags and bottles', 'Marine life poisoning', 'Ban plastic bags & recycle'],
          ['Deforestation', 'Illegal logging & excessive firewood', 'Desertification and drought', 'Plant trees (Great Green Wall)'],
          ['Air pollution', 'Fossil fuel cars & factory smoke', 'Respiratory diseases & warming', 'Use public transport & solar energy'],
          ['Water scarcity', 'Climate change & water wasting', 'Crop failure and famine', 'Harvest rainwater & repair leaks']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Speeches for the Planet',
      content: [
        "Exemples modèles pour rédactions et exposés :",
        "• 'Deforestation causes severe soil erosion and contributes directly to global warming.'",
        "• 'Citizens must stop throwing plastic rubbish into the ocean to protect marine biodiversity.'",
        "• 'If we plant more trees across the Sahel region, we will effectively combat the advance of the desert.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Compléter le Texte Écologique avec les Mots Clés',
          content: [
            "Consigne : Complétez le texte avec les mots suivants : (recycle, deforestation, global warming, endangered, solar) :",
            "Human activities have severe consequences on nature. The burning of fossil fuels creates ... which makes temperatures rise. In tropical areas, ... destroys huge forests and leaves many animal species ... We must act now: schools should ... plastic bottles and install ... panels on rooftops to produce clean green electricity."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'global warming' -> Provoque la hausse globale des températures.",
            "2. 'deforestation' -> Détruit les massifs forestiers dans les zones tropicales.",
            "3. 'endangered' -> Rend les espèces animales menacées de disparition.",
            "4. 'recycle' -> Recycler les bouteilles de plastique pour limiter les déchets.",
            "5. 'solar' -> Panneaux solaires (solar panels) pour produire de l'énergie renouvelable."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rédiger des Recommandations Éco-Citoyennes',
          content: [
            "Consigne : Rédigez deux slogans ou règles écologiques en utilisant MUST et SHOULDN'T pour sensibiliser vos camarades de classe à la propreté du collège."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "Exemples de slogans corrects :",
            "1. 'We must throw all rubbish into the waste bins to keep our school clean.' (Emploi de MUST pour l'obligation civique).",
            "2. 'We shouldn't waste drinking water at the school taps.' (Emploi de SHOULDN'T pour le conseil de ne pas gaspiller l'eau potable)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Enjeux Environnementaux & Écologie',
    root: 'ENVIRONMENTAL ISSUES',
    branches: [
      {
        name: 'Menaces Majeures',
        subtitle: 'Pollutions & Dérèglement',
        items: ['Air, Water and Soil pollution', 'Deforestation and Desertification', 'Global warming & Climate change']
      },
      {
        name: 'Conséquences Graves',
        subtitle: 'Impacts sur la planète',
        items: ['Droughts (sécheresses) & Floods (inondations)', 'Endangered wildlife species', 'Melting of polar ice caps']
      },
      {
        name: 'Solutions Citoyennes',
        subtitle: 'Les 3 R & Énergies vertes',
        items: ['Reduce, Reuse, Recycle', 'Solar and Wind renewable energy', 'Afforestation (Great Green Wall)']
      }
    ]
  },
  conclusion:
    "En conclusion, l'anglais écologique vous donne la parole sur la scène internationale : savoir nommer les fléaux environnementaux et formuler des solutions claires avec must, should et les conditionnelles est la marque d'un citoyen du monde responsable et engagé."
};

export const LESSON_24_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-24',
  number: 'Lesson 24',
  title: 'Health, Nutrition, Illnesses, and Doctor Consultations',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Parler de sa santé, décrire des symptômes physiques précis chez le médecin et donner des conseils diététiques équilibrés sont des situations de communication pratiques indispensables. Cette leçon passe en revue le lexique des maux courants (headache, fever, stomach ache), la structure 'I have got a...', les questions types d'une consultation médicale et les principes d'une alimentation saine.",
  fullText: `Lesson 24: Health, Illnesses, and Doctor Consultations

Introduction :
Savoir exprimer une douleur physique et comprendre les prescriptions médicales en anglais.

1. Detailed Lexical & Communicative Analysis
A. Les Maux et Symptômes Courants (Suffixe -ACHE et Expressions) :
- Le suffixe '-ache' désigne une douleur continue :
  • A headache (mal de tête), a toothache (mal de dents), a stomach ache (mal de ventre), an earache (mal d'oreille), backache (mal de dos).
- Autres maux fréquents :
  • A sore throat (mal de gorge), a bad cough (une mauvaise toux), a high fever (une forte fièvre), a running nose (le nez qui coule), the flu (la grippe), malaria (le paludisme).
- Blessures : a cut (une coupure), a burn (une brûlure), a broken leg (une jambe cassée).

B. Le Dialogue chez le Médecin (At the Doctor's Surgery) :
- Questions du médecin :
  • 'What is the matter?' / 'What seems to be the trouble?' / 'Where does it hurt?'
  • 'How long have you felt like this?'
- Réponses du patient :
  • 'I have got a severe headache and a fever.' / 'My throat hurts when I swallow.'
- Conseils et ordonnance (Prescription) :
  • 'Take this medicine twice a day after meals.'
  • 'You should stay in bed and drink plenty of warm fluids.'

C. Nutrition et Mode de Vie Équilibré :
- Balanced diet : alimentation équilibrée riche en fruits, légumes frais et protéines.
- Junk food : nourriture trop grasse ou trop sucrée à éviter.

2. Practical Rules & Structural Mechanics
- Structure 'to have got' : 'I have got a sore throat.' (J'ai mal à la gorge).
- Structure avec le verbe 'hurt' : 'My eyes hurt.' (Mes yeux me font mal).

3. Contextual Examples & Practice Applications
- 'The doctor told me to stay in bed for three days because I had a severe case of malaria.'
- 'You should eat fresh fruit and vegetables every day to stay healthy and strong.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Lexical & Communicative Analysis (Symptômes & Douleurs)',
      content: [
        "Le vocabulaire des sensations corporelles douloureuses :",
        "• Le suffixe magique '-ache' (/eɪk/) : headache, stomach ache, toothache, backache.",
        "• L'adjectif 'sore' (douloureux / irrité) : a sore throat, sore eyes, sore muscles.",
        "• Maladies tropicales et générales : Malaria (paludisme), Typhoid, Measles (rougeole), Common cold (rhume).",
        "Formules pour exprimer son état :",
        "• 'I feel dizzy' (j'ai des vertiges / la tête qui tourne).",
        "• 'I feel nauseous' (j'ai des nausées).",
        "• 'I have caught a cold' (j'ai attrapé un rhume)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau de Consultation Médicale)',
      content: [
        "Guide pratique de conversation au cabinet médical :",
        "• Questions classiques du docteur : 'How can I help you today?', 'Let me take your temperature.'",
        "• Prescriptions : 'Take these tablets with water', 'Get some rest', 'Avoid heavy physical efforts.'"
      ],
      table: {
        headers: ['Symptôme décrit par le patient', 'Diagnostic probable', 'Conseil médical (Advice)', 'Traitement prescrit'],
        rows: [
          ['Severe headache + high fever', 'Malaria / High fever', 'Stay in bed & rest in the dark', 'Antimalarial pills & Paracetamol'],
          ['Sore throat + cough', 'Throat infection', 'Drink hot herbal tea with honey', 'Cough syrup & antibiotics'],
          ['Stomach ache + nausea', 'Food poisoning / Indigestion', 'Drink clean boiled water', 'Digestive tablets & light soup'],
          ['Toothache + swollen gum', 'Dental cavity', 'Visit the dentist immediately', 'Painkillers & dental treatment']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Practice Dialogue',
      content: [
        "Dialogue type :",
        "• Doctor : 'Good morning, Ousmane. What seems to be the trouble?'",
        "• Patient : 'Good morning Doctor. I have got a terrible headache and my body feels very hot since yesterday.'",
        "• Doctor : 'Let me take your temperature... It is 39°C. You have caught a fever. Take this medicine twice a day and rest at home.'",
        "• Patient : 'Thank you very much, Doctor.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Trouver le Nom de la Douleur ou du Symptôme',
          content: [
            "Consigne : Donnez le mot anglais correspondant à chaque description :",
            "1. A sharp pain inside one of your teeth -> ...",
            "2. When your body temperature rises far above 37°C -> ...",
            "3. An irritating pain in your neck when you eat or drink -> ...",
            "4. A continuous, throbbing pain in your head -> ...",
            "5. A medicine in liquid form that calms down coughing -> ..."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'a toothache' (mal de dents).",
            "2. 'a fever' ou 'a high temperature' (la fièvre).",
            "3. 'a sore throat' (le mal de gorge).",
            "4. 'a headache' (le mal de tête).",
            "5. 'cough syrup' (le sirop contre la toux)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Compléter un Dialogue Médical',
          content: [
            "Consigne : Complétez les répliques du docteur avec (hurt, matter, take, rest) :",
            "Doctor : 'Hello Amina, what is the ... with you?'",
            "Amina : 'My stomach is very painful, Doctor.'",
            "Doctor : 'Where exactly does it ...? Lie down please. You should ... these pills after meals and ... in bed for two days.'"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'matter' -> 'What is the matter?' (Qu'est-ce qui ne va pas ?).",
            "2. 'hurt' -> 'Where exactly does it hurt?' (Où avez-vous mal exactement ?).",
            "3. 'take' -> 'You should take these pills' (Vous devriez prendre ces comprimés).",
            "4. 'rest' -> 'and rest in bed' (et vous reposer au lit)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Santé, Maux et Consultation',
    root: 'HEALTH & ILLNESSES',
    branches: [
      {
        name: 'Maux Courants',
        subtitle: 'Douleurs & Symptômes',
        items: ['Headache, Toothache, Stomach ache', 'Sore throat, High fever, Cough', 'Malaria, Flu, Cold']
      },
      {
        name: 'Chez le Médecin',
        subtitle: 'Dialogue de consultation',
        items: ['Doctor: What is the matter? Where does it hurt?', 'Patient: I have got a headache since yesterday', 'Prescription: Take pills twice a day']
      },
      {
        name: 'Mode de Vie Sain',
        subtitle: 'Prévention & Nutrition',
        items: ['Eat a balanced diet (fruits, vegetables)', 'Drink clean water & exercise regularly', 'Avoid junk food & sleep 8 hours']
      }
    ]
  },
  conclusion:
    "En résumé, savoir s'exprimer sur sa santé en anglais permet d'obtenir rapidement de l'aide médicale en voyage ou en situation d'urgence : la formule 'I have got a...' suivie du symptôme exact garantit une prise en charge claire et efficace."
};

export const LESSON_25_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-25',
  number: 'Lesson 25',
  title: 'Jobs, Professions, and Future Career Ambitions',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "En classe de 4ème, les collégiens commencent à réfléchir sérieusement à leur avenir professionnel. Le programme d'anglais consacre une large unité à la découverte des métiers d'aujourd'hui et de demain (médecine, enseignement, ingénierie, nouvelles technologies, artisanat). Cette leçon consolide le lexique des professions, rappelle l'usage obligatoire de l'article indéfini (A/AN) devant chaque nom de métier et entraîne les élèves à justifier leurs ambitions futures.",
  fullText: `Lesson 25: Jobs, Professions, and Career Ambitions

Introduction :
Cette leçon explore le monde du travail, les métiers et l'expression des projets professionnels.

1. Detailed Lexical & Thematic Analysis
A. Panorama des Métiers (Jobs and Occupations) :
- Métiers de la santé et du secours : Doctor, Nurse, Surgeon, Pharmacist, Firefighter, Paramedic.
- Métiers de l'éducation et du droit : Teacher, University Professor, Lawyer, Judge.
- Métiers scientifiques et techniques : Engineer, Architect, Computer programmer / Software developer, Electrician, Mechanic.
- Métiers d'art, de médias et de service : Journalist, Photographer, Pilot, Chef, Carpenter, Tailor, Police officer.

B. La Règle d'Or de l'Article devant les Métiers :
En anglais, on doit TOUJOURS placer l'article indéfini A ou AN devant un nom de profession au singulier :
- 'My father is A doctor' (et JAMAIS 'My father is doctor').
- 'She wants to be AN engineer.'
- 'He works as A journalist.'

C. Parler de ses Ambitions Professionnelles :
- 'When I grow up, I want to be an architect because I like drawing and designing modern houses.'
- 'My dream job is to become a software engineer so that I can develop educational apps.'
- Qualités professionnelles : hardworking (travailleur), patient (patient), creative (créatif), brave (courageux), reliable (digne de confiance).

2. Practical Rules & Structural Mechanics
- Poser des questions sur le métier :
  • 'What do you do for a living?' = 'What is your job?' (Quel est votre métier ?).
  • 'What does your mother do?' -> 'She is a lawyer.'
  • 'What do you want to be in the future?'

3. Contextual Examples & Practice Applications
- 'She wants to become a computer programmer because she loves technology and coding.'
- 'Firefighters must be brave and physically fit to rescue people from burning buildings.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Lexical & Thematic Analysis (Les Métiers et Secteurs)',
      content: [
        "Classification des carrières :",
        "• Healthcare : Doctor, Nurse, Surgeon, Dentist, Pharmacist.",
        "• Engineering & Technology : Civil engineer, Software developer, Web designer, Electrician.",
        "• Education & Justice : Teacher, School headmaster, Lawyer, Judge, Policeman.",
        "• Craftsmanship & Services : Tailor, Carpenter, Mason, Mechanic, Chef, Driver.",
        "Règle grammaticale fondamentale :",
        "• On dit : 'I am A student', 'He is AN architect', 'She is A nurse'. L'omission de A/AN est une faute grave !"
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Métiers et Descriptions)',
      content: [
        "Formulations pour justifier son choix de carrière :",
        "• 'I want to be a [métier] because I enjoy [verbe-ing]...'",
        "• 'In order to become a doctor, one must study medicine for several years.'"
      ],
      table: {
        headers: ['Profession (Job)', 'Lieu de travail (Workplace)', 'Activité principale', 'Qualité requise'],
        rows: [
          ['Doctor / Surgeon', 'Hospital / Clinic', 'Cures sick patients & performs operations', 'Caring and dedicated'],
          ['Teacher', 'School / College', 'Teaches knowledge and educates children', 'Patient and inspiring'],
          ['Software engineer', 'Tech company / Office', 'Writes computer programs and code', 'Logical and creative'],
          ['Firefighter', 'Fire station', 'Extinguishes fires and saves lives', 'Brave and strong'],
          ['Journalist', 'Press office / Field', 'Investigates news and writes articles', 'Curious and honest']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Career Essays',
      content: [
        "Exemples rédigés :",
        "• 'When I finish my studies, I would like to be an environmental engineer to help solve water pollution problems in Senegal.'",
        "• 'My mother is a nurse at the regional hospital; she works very hard to take care of patients day and night.'",
        "• 'What does your uncle do? He is an airline pilot; he flies commercial planes between Dakar and Paris.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Identifier les Professions',
          content: [
            "Consigne : Trouvez le nom de la profession correspondant à chaque définition en n'oubliant pas l'article A ou AN :",
            "1. A person who designs buildings and bridges -> ...",
            "2. A person who prepares and cooks delicious food in a restaurant -> ...",
            "3. A person who defends clients in a court of law -> ...",
            "4. A person who flies aeroplanes across the world -> ...",
            "5. A person who fixes broken water pipes and sinks -> ..."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'an architect' -> Architect commence par un son voyelle -> AN architect.",
            "2. 'a chef' (ou 'a cook') -> Débute par un son consonne -> A chef.",
            "3. 'a lawyer' -> Débute par un son consonne -> A lawyer.",
            "4. 'a pilot' -> Débute par un son consonne -> A pilot.",
            "5. 'a plumber' -> Débute par un son consonne -> A plumber (le 'b' est muet !)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rédiger son Projet d\'Avenir',
          content: [
            "Consigne : Rédigez un court paragraphe de 3 phrases en anglais pour présenter le métier de vos rêves, le lieu où vous aimeriez travailler et la raison de votre choix."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "Exemple de production modèle :",
            "1. 'In the future, I want to become a computer engineer.' (Métier avec article A).",
            "2. 'I would like to work in a modern technology company in Dakar.' (Lieu de travail).",
            "3. 'I choose this job because I love coding and creating educational software for African schools.' (Justification motivée)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Le Monde des Métiers et Carrières',
    root: 'JOBS & PROFESSIONS',
    branches: [
      {
        name: 'Règle Grammaticale Clé',
        subtitle: 'Article A / AN obligatoire',
        items: ['Toujours A ou AN devant le métier', 'He is A doctor (pas \'He is doctor\')', 'She wants to be AN engineer']
      },
      {
        name: 'Secteurs Clés',
        subtitle: 'Domaines d\'activité',
        items: ['Santé : Doctor, Nurse, Surgeon', 'Tech & Ingénierie : Engineer, Developer', 'Éducation & Droit : Teacher, Lawyer']
      },
      {
        name: 'Exprimer ses Ambitions',
        subtitle: 'Projets d\'avenir',
        items: ['I want to be... / My dream job is...', 'Because I like helping / building / coding', 'Workplace : hospital, school, office']
      }
    ]
  },
  conclusion:
    "En conclusion, parler de son projet professionnel en anglais exige de la clarté et le respect de la règle d'or de l'article indéfini (a/an). Structurer ses ambitions avec 'I want to be a...' et justifier ses motivations prépare l'élève aux futurs entretiens et échanges internationaux."
};

export const LESSON_26_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-26',
  number: 'Lesson 26',
  title: 'Sports, Hobbies, and Leisure: Play, Do, and Go',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Les activités de loisirs, le sport et les passions personnelles occupent une place de choix dans les conversations entre adolescents. En anglais, parler de sport ne se fait pas au hasard : il existe une règle rigoureuse régissant l'emploi des verbes PLAY, GO et DO. Pourquoi dit-on 'play football', mais 'go swimming' et 'do martial arts' ? Cette leçon décrypte cette classification logique et enrichit votre vocabulaire de passe-temps.",
  fullText: `Lesson 26: Sports, Hobbies, and Leisure (Play, Do, Go)

Introduction :
Cette leçon présente la règle universelle pour associer correctement les verbes PLAY, GO et DO avec les différents sports et loisirs.

1. Detailed Grammatical & Conceptual Analysis
A. La Règle d'Or : PLAY vs GO vs DO :
1. PLAY : S'utilise avec les SPORTS D'ÉQUIPE, les SPORTS DE BALLE OU BALLON, et les JEUX DE SOCIÉTÉ / INSTRUMENTS :
   • play football, play basketball, play tennis, play volleyball, play rugby, play golf.
   • play chess (aux échecs), play video games.
   • play the piano, play the guitar (avec 'the' pour les instruments).
2. GO : S'utilise avec les ACTIVITÉS SE TERMINANT EN -ING qui impliquent un déplacement dans l'espace ou en plein air :
   • go swimming, go running, go cycling, go fishing, go hiking, go sailing.
3. DO : S'utilise avec les SPORTS DE COMBAT / ARTS MARTIAUX, les GYMNASTIQUES INDIVIDUELLES et les ACTIVITÉS NON D'ÉQUIPE SANS BALLON :
   • do judo, do karate, do taekwondo, do gymnastics, do athletics, do yoga, do crosswords.

B. Vocabulaire des Équipements et Terrains :
- Pitch / Field : terrain de football ou rugby.
- Court : court de tennis, terrain de basketball.
- Track : piste d'athlétisme.
- Swimming pool : piscine.
- Equipment : racket (raquette), ball, trainers / sneakers (baskets de sport), jersey (maillot).

2. Practical Rules & Structural Mechanics
- Pour parler de ses goûts de loisir :
  • 'In my free time, I enjoy playing football with my friends and going swimming at the beach.'
  • Verbes de goût suivis de V-ING : like / love / enjoy / hate + VERBE-ING : 'I love reading novels.'

3. Contextual Examples & Practice Applications
- 'Every Saturday afternoon, Moussa plays basketball with his school team.'
- 'During holidays, they often go swimming in the ocean and do karate twice a week.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (La Triade PLAY, GO, DO)',
      content: [
        "La règle immuable de répartition des verbes sportifs :",
        "• PLAY : Ballon, balle, compétition d'équipe, jeux et instruments.",
        "  - play football, play handball, play badminton, play chess, play the drums.",
        "• GO : Verbes d'action en -ING (déplacement extérieur).",
        "  - go jogging, go swimming, go rollerblading, go horse riding, go camping.",
        "• DO : Arts martiaux, gym, activités individuelles d'entraînement sans ballon.",
        "  - do wrestling (lutte sénégalaise), do gymnastics, do aerobics, do martial arts."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Disciplines)',
      content: [
        "Tableau complet de classification des activités :",
        "• Attention au sport national sénégalais : on dit 'do wrestling' (ou 'practice traditional wrestling') car c'est un sport de combat individuel.",
        "• Règle des verbes de goût : Like / Enjoy / Prefer + Verbe en -ING ('I enjoy playing tennis')."
      ],
      table: {
        headers: ['Verbe requis', 'Critère logique', 'Exemples de sports / loisirs', 'Lieu de pratique usuel'],
        rows: [
          ['PLAY', 'Balles, ballons, équipes, jeux', 'football, basketball, tennis, chess', 'on a pitch, on a court'],
          ['GO', 'Activités se terminant par -ING', 'swimming, running, cycling, fishing', 'in a pool, in the sea, on a track'],
          ['DO', 'Arts martiaux, combats, gym', 'judo, karate, wrestling, gymnastics', 'in a gym, in a dojo, in an arena']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Hobbies Descriptions',
      content: [
        "Exemples en contexte :",
        "• 'Every Saturday afternoon, Moussa plays basketball with his school team on the outdoor court.'",
        "• 'During holidays, we often go swimming in the ocean and do karate twice a week at the local gym.'",
        "• 'Traditional wrestling is the most famous sport in Senegal; many young athletes do wrestling every evening on the beach.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Choisir entre PLAY, GO et DO',
          content: [
            "Consigne : Complétez chaque phrase avec la forme appropriée de PLAY, GO ou DO :",
            "1. Alioune and his friends often ... football on the school field after classes.",
            "2. Fatou loves water sports; she ... swimming twice a week.",
            "3. My brother started to ... taekwondo last month to learn self-defence.",
            "4. Do you want to ... chess with me this evening?",
            "5. During the dry season, many tourists ... hiking in the Fouta region."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'play football' -> Sport collectif avec ballon -> PLAY.",
            "2. 'goes swimming' -> Activité en -ING au présent avec sujet Fatou (She) -> GOES swimming.",
            "3. 'do taekwondo' -> Art martial de combat individuel -> DO.",
            "4. 'play chess' -> Jeu de réflexion et de société -> PLAY.",
            "5. 'go hiking' -> Activité de plein air en -ING -> GO."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rédiger ses Préférences de Loisir',
          content: [
            "Consigne : Rédigez 2 phrases en utilisant le verbe 'enjoy + V-ing' pour parler d'un sport que vous pratiquez et d'un passe-temps calme que vous aimez à la maison."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "Exemple de production modèle :",
            "1. 'I really enjoy playing basketball with my classmates on weekends.' (Enjoy + play-ing).",
            "2. 'At home in the evening, I enjoy reading interesting adventure novels.' (Enjoy + read-ing)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Les Trois Verbes du Sport et des Loisirs',
    root: 'SPORTS & LEISURE',
    branches: [
      {
        name: 'PLAY',
        subtitle: 'Balles, Équipes & Jeux',
        items: ['Play football, basketball, tennis', 'Play chess, video games', 'Play the guitar / the piano']
      },
      {
        name: 'GO',
        subtitle: 'Activités en -ING',
        items: ['Go swimming, running, cycling', 'Go hiking, fishing, camping', 'Déplacement extérieur']
      },
      {
        name: 'DO',
        subtitle: 'Combats & Gymnastique',
        items: ['Do judo, karate, taekwondo', 'Do wrestling (lutte traditionnelle)', 'Do athletics, gymnastics, yoga']
      }
    ]
  },
  conclusion:
    "En conclusion, maîtriser le trio PLAY, GO et DO structure parfaitement votre expression sportive en anglais : PLAY pour les jeux et ballons collectifs, GO pour les activités d'évasion en -ing, et DO pour les disciplines martiales et gymniques individuelles."
};

export const LESSON_27_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-27',
  number: 'Lesson 27',
  title: 'Travel, Means of Transport, and Asking for Directions',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Voyager à travers le monde, emprunter les transports en commun et savoir s'orienter dans une ville inconnue constituent des compétences linguistiques universelles. Cette leçon vous enseigne le lexique complet des moyens de transport, la règle d'or des prépositions de transport ('by car' mais 'on foot'), et les expressions indispensables pour demander et indiquer un chemin en anglais avec précision et politesse.",
  fullText: `Lesson 27: Travel, Transport, and Asking for Directions

Introduction :
Savoir se déplacer, acheter un titre de transport et demander son chemin dans une ville anglophone.

1. Detailed Lexical & Functional Analysis
A. Les Moyens de Transport et leurs Prépositions :
- Règle de la préposition BY : Pour indiquer le moyen de locomotion général, on emploie BY SANS ARTICLE :
  • by car, by bus, by train, by plane, by boat, by bicycle, by taxi, by underground / subway.
- L'EXCEPTION HISTORIQUE : 'ON FOOT' (à pied) !
  • On dit : 'I go to school on foot' (et JAMAIS 'by foot').
- Quand on utilise un article ou un possessif :
  • IN a car, IN a taxi (petits véhicules fermés où l'on s'assoit directement).
  • ON a bus, ON a train, ON a plane, ON a boat, ON a bicycle (grands transports où l'on peut se tenir debout ou engins que l'on enfourche).

B. Demander son Chemin (Asking for Directions) :
- Formules de politesse préalables :
  • 'Excuse me, could you tell me the way to the post office, please?'
  • 'How can I get to the central train station?'
  • 'Is there a pharmacy near here?'

C. Indiquer un Itinéraire (Giving Directions) :
- Go straight ahead (allez tout droit).
- Turn left / Turn right into... (tournez à gauche / à droite dans...).
- Take the first / second turning on your right (prenez la première / deuxième rue à droite).
- Cross the street / the bridge (traversez la rue / le pont).
- Walk past the bank (passez devant la banque).
- It is on your left / right, next to the museum, opposite the supermarket.

2. Practical Rules & Structural Mechanics
- Mémorisez les prépositions de repérage urbain : next to (à côté de), opposite (en face de), between X and Y (entre X et Y), behind (derrière), in front of (devant).

3. Contextual Examples & Practice Applications
- 'Excuse me, how can I get to the national museum? Go straight ahead and turn left at the traffic lights.'
- 'He usually travels to Saint-Louis by train, but he walks around the town on foot.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Lexical & Functional Analysis (Transports & Prépositions)',
      content: [
        "A. La règle stricte des prépositions de transport :",
        "• Règle standard : BY + MOYEN DE TRANSPORT DIRECT (sans article) :",
        "  - by car, by bus, by train, by plane, by boat, by metro.",
        "• L'exception majeure : 'ON FOOT' (à pied). Interdiction de dire 'by foot' !",
        "• Avec déterminant (a, the, my) :",
        "  - 'IN' pour les voitures et taxis ('in my father's car').",
        "  - 'ON' pour les transports collectifs et deux-roues ('on the 8 o'clock bus', 'on my bicycle').",
        "B. Le lexique urbain :",
        "• Traffic lights (feux de circulation), Crossroad / Intersection (carrefour), Roundabout (rond-point), Pavement / Sidewalk (trottoir), Zebra crossing (passage piéton)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau pour Guider un Passant)',
      content: [
        "Boîte à outils pour indiquer la direction :",
        "• Verbes à l'impératif direct : Go straight ahead, Turn left, Cross, Walk past.",
        "• Localisation finale : It is on your left, opposite the bank, behind the church."
      ],
      table: {
        headers: ['Expression anglaise', 'Équivalent français', 'Usage dans l\'itinéraire', 'Exemple complet'],
        rows: [
          ['Go straight ahead', 'Allez tout droit', 'Continuer dans la même direction', 'Go straight ahead for 200 metres.'],
          ['Turn left / right', 'Tournez à gauche / droite', 'Changer d\'orientation', 'Turn right at the roundabout.'],
          ['Take the second street', 'Prenez la deuxième rue', 'Intersection précise', 'Take the second street on your left.'],
          ['Walk past the bank', 'Dépassez la banque', 'Point de repère visuel', 'Walk past the hospital and you will see it.'],
          ['Opposite', 'En face de', 'Position relative finale', 'The pharmacy is opposite the post office.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Street Dialogues',
      content: [
        "Dialogue modèle de rue :",
        "• Tourist : 'Excuse me, Sir. Could you please tell me how to get to the central market?'",
        "• Local citizen : 'Sure! Walk straight ahead along this avenue. When you reach the traffic lights, turn right. Walk past the post office, and the market is right opposite the bank.'",
        "• Tourist : 'Thank you very much for your help!'",
        "• Local citizen : 'You are welcome. Have a safe journey!'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Prépositions de Transport (BY, ON, IN)',
          content: [
            "Consigne : Complétez chaque phrase avec la préposition appropriée (by, on ou in) :",
            "1. My elder sister goes to university ... foot every morning.",
            "2. We travelled from Dakar to Ziguinchor ... boat.",
            "3. Tourists enjoy flying over the Saloum Delta ... a small aeroplane.",
            "4. Mr Sow travels to his office ... train because it is faster than driving."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'on foot' -> Exception absolue pour la marche à pied -> ON foot.",
            "2. 'by boat' -> Moyen de transport général sans article -> BY boat.",
            "3. 'in a small aeroplane' -> Présence de l'article indéfini 'a' devant un petit avion -> IN a small aeroplane (ou ON a plane).",
            "4. 'by train' -> Moyen de transport ferroviaire direct -> BY train."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rédiger un Guidage d\'Itinéraire',
          content: [
            "Consigne : Un touriste étranger vous demande où se trouve la pharmacie. Rédigez un itinéraire de 3 étapes en utilisant les expressions : (go straight ahead, turn right at the traffic lights, opposite the bank)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "Exemple de production modèle :",
            "1. 'First, go straight ahead along this main road.'",
            "2. 'Then, turn right at the traffic lights.'",
            "3. 'Finally, you will see the pharmacy on your left, directly opposite the bank.'"
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Transports & Orientation dans la Ville',
    root: 'TRAVEL & DIRECTIONS',
    branches: [
      {
        name: 'Transports & Prépositions',
        subtitle: 'Règles BY et ON',
        items: ['BY sans article : by car, by bus, by train, by plane', 'ON FOOT : Toujours à pied (exception)', 'IN/ON avec article : in a car, on a bus']
      },
      {
        name: 'Demander son Chemin',
        subtitle: 'Politesse dans la rue',
        items: ['Excuse me, how can I get to...?', 'Could you tell me the way to...?', 'Is there a pharmacy near here?']
      },
      {
        name: 'Indiquer la Direction',
        subtitle: 'Verbes d\'action',
        items: ['Go straight ahead (tout droit)', 'Turn left / right (tourner)', 'Opposite (en face), Next to (à côté)']
      }
    ]
  },
  conclusion:
    "En conclusion, savoir voyager et donner des directions en anglais s'appuie sur la maîtrise sans faille des prépositions (by vs on foot) et sur un enchaînement clair d'impératifs spatiaux. Cette compétence offre une autonomie précieuse dans n'importe quelle métropole du monde."
};

export const LESSON_28_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-28',
  number: 'Lesson 28',
  title: 'Traditions, Celebrations, and Cultural Festivals in Senegal and the World',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "La culture, les célébrations religieuses et les festivals traditionnels sont des moments privilégiés de partage et de fraternité. En 4ème, les élèves apprennent à présenter fièrement au monde anglophone les richesses culturelles du Sénégal (la Teranga, la fête de Tabaski / Eid al-Adha, le Korité / Eid al-Fitr, la fête de Noël, le Magal de Touba, les cérémonies de mariage et baptême) tout en découvrant les fêtes emblématiques des pays anglo-saxons (Thanksgiving, Christmas, Halloween).",
  fullText: `Lesson 28: Traditions, Celebrations, and Festivals

Introduction :
Cette leçon explore le patrimoine culturel du Sénégal et des pays anglophones à travers leurs grandes célébrations.

1. Detailed Cultural & Lexical Analysis
A. Les Grandes Célébrations au Sénégal :
- Teranga : l'hospitalité légendaire sénégalaise, faite de générosité, d'accueil chaleureux et de partage de nourriture.
- Tabaski (Eid al-Adha) : la fête du sacrifice où les familles partagent le mouton rôti, portent de magnifiques boubous neufs et demandent pardon aux voisins.
- Korité (Eid al-Fitr) : la fin du mois saint de Ramadan marquée par la prière collective et les étrennes données aux enfants (Ndeewenäl).
- Tamkharit (Achoura) : dégustation du traditionnel couscous et festivités du Tajabone.
- Noël et Pâques : célébrés dans la concorde et la communion avec la préparation et le partage de Ngalakh entre musulmans et chrétiens (symbole vivant du dialogue interreligieux sénégalais).

B. Les Grandes Fêtes du Monde Anglophone :
- Thanksgiving (États-Unis) : célébré le quatrième jeudi de novembre pour remercier les récoltes, autour d'une dinde farcie rôtie (roast turkey) et d'une tarte à la citrouille (pumpkin pie).
- Christmas (25 décembre) : le sapin de Noël décoré, les chants de Noël (Christmas carols) et l'ouverture des cadeaux apportés par Santa Claus (le Père Noël).
- Halloween (31 octobre) : déguisements, citrouilles sculptées (jack-o'-lanterns) et chasse aux friandises ('Trick or treat!').

2. Practical Rules & Structural Mechanics
- Parler d'une fête :
  • 'We celebrate Tabaski with great joy.'
  • 'During this festival, people wear traditional costumes and prepare delicious meals.'
  • 'Families gather together to share gifts and express gratitude.'

3. Contextual Examples & Practice Applications
- 'Senegalese Teranga is famous worldwide for its outstanding hospitality and mutual respect.'
- 'During Tabaski, families roast a ram, dress in elegant traditional boubous, and share meat with neighbours.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Cultural & Lexical Analysis (Sénégal & Monde Anglophone)',
      content: [
        "A. Le rayonnement culturel de la Teranga sénégalaise :",
        "• Un modèle exceptionnel de concorde nationale et de dialogue islamo-chrétien.",
        "• Le partage du Ngalakh lors de la fête de Pâques offert par les familles chrétiennes à leurs voisins musulmans.",
        "• Les fêtes familiales : Naming ceremony (baptême), Traditional wedding (mariage traditionnel).",
        "B. Les traditions des pays anglophones :",
        "• Thanksgiving : expression de la gratitude familiale et historique.",
        "• Christmas : esprit de générosité, sapin (Christmas tree) et cadeaux.",
        "• Lexique de célébration : To gather (se rassembler), Feast (festin / banquet), Traditional dish (plat traditionnel), Gift / Present (cadeau), To roast (rôtir)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Comparatif des Fêtes)',
      content: [
        "Vocabulaire comparé des grandes fêtes :",
        "• Connecteurs temporels pour décrire un rituel : On the eve of... (la veille de), Early in the morning, Afterwards, In the evening."
      ],
      table: {
        headers: ['Nom de la Célébration', 'Pays / Communauté', 'Plat ou Symbole clé', 'Activité traditionnelle majeure'],
        rows: [
          ['Tabaski (Eid al-Adha)', 'Sénégal / Monde musulman', 'Roasted mutton / ram', 'Morning prayer, sharing meat with the needy'],
          ['Easter (Pâques)', 'Chrétiens du Sénégal', 'Ngalakh (millet & peanut paste)', 'Sharing delicious dessert with Muslim neighbours'],
          ['Thanksgiving', 'United States', 'Roast turkey & pumpkin pie', 'Family reunion to give thanks for blessings'],
          ['Christmas', 'Royaume-Uni & Monde entier', 'Christmas tree & pudding', 'Exchanging gifts and singing carols']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Cultural Essays',
      content: [
        "Exemples de descriptions culturelles :",
        "• 'Senegalese Teranga is famous worldwide for its outstanding hospitality and mutual respect among communities.'",
        "• 'During Tabaski, families roast a ram, dress in elegant boubous, and visit relatives to ask for forgiveness.'",
        "• 'Thanksgiving is an important American holiday where families travel long distances to share dinner together.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Associer Célébrations et Coutumes',
          content: [
            "Consigne : Associez chaque célébration (1 à 4) à la tradition correspondante (A à D) :",
            "1. Tabaski (Eid al-Adha) | 2. Thanksgiving | 3. Easter in Senegal | 4. Christmas",
            "A. Families decorate an evergreen pine tree and exchange wrapped presents.",
            "B. People roast a ram and share meat generously with friends, family and the poor.",
            "C. American families gather around a roasted turkey to express gratitude for the year's harvest.",
            "D. Christian families prepare Ngalakh and offer it cordially to their Muslim neighbours."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. -> B. (Tabaski : sacrifice et partage du mouton avec les voisins et les nécessiteux).",
            "2. -> C. (Thanksgiving : rassemblement américain autour de la dinde pour rendre grâce).",
            "3. -> D. (Pâques au Sénégal : préparation et partage fraternel du Ngalakh).",
            "4. -> A. (Noël : sapin décoré et échange de cadeaux en famille)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Décrire une Fête Traditionnelle en Anglais',
          content: [
            "Consigne : Rédigez 3 phrases en anglais décrivant comment votre famille célèbre la fête de Tabaski ou une fête traditionnelle de votre choix (vêtements portés, repas partagé, ambiance)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "Exemple de production modèle :",
            "1. 'Early in the morning on Tabaski, my father and brothers go to the mosque for collective prayers.'",
            "2. 'Then, my mother wears a beautiful embroidered boubou while we roast the ram for lunch.'",
            "3. 'Finally, in the afternoon, we visit our neighbours to share delicious meat and wish them peace and happiness.'"
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Traditions, Fêtes et Partage Culturel',
    root: 'CULTURAL FESTIVALS',
    branches: [
      {
        name: 'Fêtes au Sénégal',
        subtitle: 'Teranga & Concorde',
        items: ['Tabaski : Sacrifice du bélier, pardon & partage', 'Korité : Fin du Ramadan, Ndeewenäl pour enfants', 'Pâques & Noël : Partage fraternel du Ngalakh']
      },
      {
        name: 'Fêtes Anglophones',
        subtitle: 'Traditions anglo-saxonnes',
        items: ['Thanksgiving (USA) : Dinde rôtie, gratitude', 'Christmas (UK/USA) : Sapin, Santa Claus, cadeaux', 'Halloween : Déguisements & Trick or treat']
      },
      {
        name: 'Vocabulaire Commun',
        subtitle: 'Termes de fête',
        items: ['Celebrate, Gather together, Feast', 'Wear traditional clothes (boubou)', 'Share gifts & delicious meals']
      }
    ]
  },
  conclusion:
    "En conclusion, explorer les traditions du Sénégal et du monde anglophone permet de célébrer la richesse de la diversité humaine : l'anglais devient l'instrument par lequel l'élève fait rayonner les valeurs d'hospitalité (Teranga), de fraternité et de respect mutuel au-delà des frontières."
};

export const LESSON_29_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-29',
  number: 'Lesson 29',
  title: 'Technology, the Internet, and Social Media Ethics',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Le numérique, les smartphones, l'intelligence artificielle et les réseaux sociaux ont profondément transformé la vie quotidienne des élèves. S'il offre des opportunités d'apprentissage exceptionnelles (cours en ligne, encyclopédies gratuites, communication instantanée), le monde virtuel comporte également des pièges majeurs : cyberharcèlement, désinformation (fake news), perte de temps et piratage des données personnelles. Cette leçon fournit le vocabulaire technologique et les clés pour débattre de l'éthique numérique en anglais.",
  fullText: `Lesson 29: Technology, the Internet, and Social Media

Introduction :
Cette leçon aborde les avantages immenses et les défis éthiques de l'univers numérique pour les adolescents.

1. Detailed Lexical & Thematic Analysis
A. Le Vocabulaire du Monde Digital :
- Hardware & Devices : smartphone, laptop, desktop computer, tablet, wireless earphones, screen.
- Web & Networks : the Internet, website, search engine, web browser, Wi-Fi connection, cloud storage.
- Social Media : social networks (Facebook, WhatsApp, Instagram, TikTok), account, profile, follower, post, story, to upload (téléverser / mettre en ligne), to download (télécharger), to share, to like.
- Actions numériques : to surf the net, to send instant messages, to click on a link, to log in / log out.

B. Les Avantages d'Internet (Pros / Advantages) :
- Instant access to knowledge and educational resources.
- Online collaborative learning and distance education.
- Staying in touch with friends and relatives across the globe.

C. Les Risques et Dangers Numériques (Cons / Disadvantages) :
- Cyberbullying (le harcèlement en ligne).
- Fake news and disinformation (fausses nouvelles).
- Screen addiction and lack of sleep.
- Privacy invasion and identity theft (vol de données personnelles).

2. Practical Rules & Structural Mechanics
- Débattre des avantages et inconvénients :
  • 'On the one hand, the Internet facilitates research; on the other hand, it can lead to screen addiction.'
  • 'Students should protect their passwords and they must never talk to strangers online.'

3. Contextual Examples & Practice Applications
- 'Students should use social media responsibly and never share their personal passwords.'
- 'Although the Internet provides unlimited educational resources, too much screen time is harmful to your eyes and mental health.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Lexical & Thematic Analysis (L\'Écosystème Numérique)',
      content: [
        "Lexique moderne de la technologie :",
        "• Devices : Smartphone, Laptop (ordinateur portable), Tablet, Smartwatch.",
        "• Internet actions : Browse the web, Download a file (télécharger vers soi), Upload a video (envoyer sur internet), Update an app.",
        "• Cybersecurity : Password (mot de passe sécurisé), Antivirus software, Hacker, Scam / Phishing.",
        "• Les dérives numériques à combattre : Cyberbullying (harcèlement), Fake news, Screen addiction."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau Avantages & Inconvénients)',
      content: [
        "Formules de dissertation pour peser le pour et le contre :",
        "• Pros and Cons (le pour et le contre).",
        "• While the internet is useful, we must be aware of its dangers."
      ],
      table: {
        headers: ['Aspect technologique', 'Avantage majeur (Pro)', 'Risque potentiel (Con)', 'Conseil éthique'],
        rows: [
          ['Social Media', 'Instant communication with family', 'Cyberbullying and toxic comparison', 'Never post hateful comments'],
          ['Internet Search', 'Unlimited access to school research', 'Fake news and unreliable sources', 'Verify information before sharing'],
          ['Smartphones', 'Educational apps & calculators', 'Severe addiction and eye fatigue', 'Turn off notifications during study'],
          ['Online Accounts', 'Easy storage of documents in the cloud', 'Data theft and hacking', 'Use strong, private passwords']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Rules for Digital Safety',
      content: [
        "Exemples modèles et charte numérique :",
        "• 'Students should use social media responsibly and never share their personal passwords with anyone.'",
        "• 'Although the Internet provides unlimited educational resources, spending six hours a day on TikTok is harmful to your health.'",
        "• 'If you encounter cyberbullying on the web, you must report it immediately to your parents or teachers.'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Compléter avec le Vocabulaire Numérique',
          content: [
            "Consigne : Complétez chaque phrase avec le mot approprié : (download, password, cyberbullying, search engine, screen) :",
            "1. You should always create a strong ... containing numbers and symbols to protect your account.",
            "2. Google is the most widely used ... in the world.",
            "3. Too much ... time at night can prevent you from sleeping soundly.",
            "4. It is illegal to ... copyrighted music without paying.",
            "5. Schools must fight actively against ... to protect vulnerable pupils from online harassment."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'password' -> Mot de passe sécurisé pour protéger un compte.",
            "2. 'search engine' -> Moteur de recherche web (Google).",
            "3. 'screen' -> 'Screen time' (temps d'écran excessif).",
            "4. 'download' -> Télécharger des fichiers protégés sans autorisation.",
            "5. 'cyberbullying' -> Le cyberharcèlement sur les réseaux sociaux."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rédiger une Règle de Sécurité Numérique',
          content: [
            "Consigne : Rédigez deux règles de sécurité en ligne pour des adolescents de 4ème en utilisant MUST et NEVER."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "Exemples de productions modèles :",
            "1. 'You must always keep your passwords private and never share them with strangers.'",
            "2. 'You must never believe all the information you read on social media without checking reliable sources.'"
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Technologie, Internet et Citoyenneté Numérique',
    root: 'DIGITAL TECHNOLOGY',
    branches: [
      {
        name: 'Outils & Réseaux',
        subtitle: 'Appareils & Médias',
        items: ['Smartphone, Laptop, Tablet', 'Social media (WhatsApp, Instagram)', 'Upload, Download, Browse the web']
      },
      {
        name: 'Avantages Majeurs',
        subtitle: 'Opportunités',
        items: ['Accès instantané au savoir scolaire', 'Communication avec le monde entier', 'Outils de travail collaboratif']
      },
      {
        name: 'Défis & Éthique',
        subtitle: 'Règles de sécurité',
        items: ['Combattre le cyberbullying (harcèlement)', 'Protéger ses mots de passe et données', 'Limiter le temps d\'écran (screen time)']
      }
    ]
  },
  conclusion:
    "En conclusion, la technologie et Internet sont de formidables multiplicateurs de potentiel intellectuel à condition d'être guidés par une solide éthique : faire preuve d'esprit critique face aux fake news et adopter un comportement bienveillant et sécurisé sur les réseaux sociaux."
};

export const LESSON_30_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-30',
  number: 'Lesson 30',
  title: 'Reading Comprehension, Guided Writing, and Examination Preparation',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "La leçon finale du programme d'anglais de 4ème est une synthèse stratégique dédiée à la préparation aux compositions trimestrielles et aux examens de fin d'année. Elle réunit les trois grandes épreuves du devoir standard sénégalais : la compréhension de texte (Reading Comprehension avec vrai/faux et questions ouvertes), la maîtrise des structures linguistiques (Linguistic Competence récapitulant les temps et modaux) et l'expression écrite guidée (Guided Essay Writing). Un guide méthodologique complet pour réussir avec brio.",
  fullText: `Lesson 30: Reading Comprehension and Examination Preparation

Introduction :
Cette leçon récapitulative finale entraîne les élèves aux épreuves complètes d'examen d'anglais de 4ème.

1. Methodological Guide for Examination Success
A. Section 1 : Reading Comprehension (Compréhension de Texte) :
- Étape 1 : Lecture globale (Skimming) : Lire rapidement le titre et le texte une première fois sans dictionnaire pour en comprendre le thème général.
- Étape 2 : Repérage ciblé (Scanning) : Relire attentivement les questions pour identifier les mots clés (noms, dates, lieux, verbes) puis retrouver le passage exact dans le texte.
- Traiter les questions Vrai / Faux (True / False with justification) :
  • Il faut OBLIGATOIREMENT citer la phrase exacte du texte entre guillemets pour valider la réponse : 'True : "Alioune bought a new bicycle yesterday."'

B. Section 2 : Linguistic Competence (Grammaire et Vocabulaire) :
- Conjugaison des verbes : repérer les indices temporels (yesterday -> Past Simple ; Look! -> Present Continuous ; since/for -> Present Perfect).
- Voix passive : bien vérifier l'accord du verbe BE (is/are ou was/were).
- Modaux : ne jamais mettre de '-s' ni de 'to' après un modal !

C. Section 3 : Guided Writing (Expression Écrite Structurée) :
- Respecter le plan en 3 paragraphes :
  1. Introduction (1 phrase qui pose le sujet).
  2. Développement (3 à 4 phrases reliées par des connecteurs : First, Furthermore, In addition).
  3. Conclusion (1 phrase de synthèse débutant par In conclusion).

2. Contextual Examples & Examination Simulation
- Texte de simulation : La vie de Fatou, jeune collégienne talentueuse de Thiès.
- Questions types de compréhension et de langue.

3. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Methodological Guide for Examination Success (Méthodologie d\'Examen)',
      content: [
        "Les 3 piliers de l'épreuve officielle d'anglais en 4ème :",
        "1. Compréhension de texte (8 points) :",
        "   - Questions True/False avec justification textuelle entre guillemets.",
        "   - Questions de compréhension ouverte débutant par WH- (Who, Where, Why...).",
        "2. Compétence linguistique (6 points) :",
        "   - Exercices à trous, choix multiples, mise entre parenthèses des temps verbaux.",
        "   - Transformations (Actif -> Passif, Affirmation -> Question Tag).",
        "3. Production écrite guidée (6 points) :",
        "   - Rédaction d'une lettre amicale, d'un dialogue ou d'un paragraphe argumentatif (60 à 80 mots)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Connecteurs de Rédaction)',
      content: [
        "Boîte à outils de liaison pour maximiser la note en expression écrite :",
        "• Connecteurs d'ordre : First of all, Secondly, Then, Next, Finally.",
        "• Connecteurs d'ajout : Furthermore, Moreover, In addition.",
        "• Connecteurs de contraste : However, Although, On the other hand.",
        "• Formule de conclusion : In conclusion, To sum up."
      ],
      table: {
        headers: ['Fonction dans la rédaction', 'Connecteurs recommandés', 'Exemple d\'utilisation en phrase'],
        rows: [
          ['Introduire une première idée', 'First of all, To begin with', 'First of all, education opens many doors.'],
          ['Ajouter un argument', 'Furthermore, Moreover, In addition', 'Furthermore, sports improve our health.'],
          ['Nuancer ou opposer', 'However, On the other hand', 'However, social media has certain risks.'],
          ['Exprimer la cause / conséquence', 'Because of, As a result, Therefore', 'As a result, many students passed the exam.'],
          ['Conclure l\'essai', 'In conclusion, To sum up', 'In conclusion, we must all protect our nature.']
        ]
      }
    },
    {
      title: '3. Examination Simulation: Reading Text & Analysis',
      content: [
        "Texte d'examen type 4ème :",
        "'Fatou is a fourteen-year-old student living in Saint-Louis. Every morning, she wakes up at 6 am, helps her mother in the kitchen, and walks to school. Her favourite subject is English because she dreams of becoming an international translator. Last year, Fatou won the national English spelling competition. If she passes her 4ème exams with honours, her uncle will give her a computer to assist her high school studies.'",
        "Points clés d'analyse : temps du récit (présent simple), prétérit (won), premier conditionnel (If she passes... will give)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Épreuve Complète de Compréhension de Texte',
          content: [
            "Consigne : À partir du texte de simulation ci-dessus, répondez aux questions suivantes :",
            "1. True or False? Justify by quoting from the text :",
            "   a) Fatou travels to school by bus.",
            "   b) Fatou's dream job is related to foreign languages.",
            "2. Answer the following questions in complete sentences :",
            "   a) What award did Fatou win last year?",
            "   b) What will her uncle give her if she passes her exams with honours?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. a) False : 'she walks to school' (Elle va à l'école à pied et non en bus).",
            "   b) True : 'she dreams of becoming an international translator' (Elle rêve de devenir traductrice internationale).",
            "2. a) 'Last year, Fatou won the national English spelling competition.'",
            "   b) 'If she passes her exams with honours, her uncle will give her a computer.'"
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Révision Linguistique Globale d\'Examen',
          content: [
            "Consigne : Mettez les verbes entre parenthèses à la forme correcte :",
            "1. Look at those boys! They (play) ... football in the rain.",
            "2. The historical monument (visit) ... by thousands of people every year. (Voix passive)",
            "3. If Alioune (work) ... hard this term, he (obtain) ... good grades.",
            "4. You haven't seen my English notebook, ...? (Question tag)"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'are playing' -> Action en cours introduite par 'Look!' -> Présent Continu.",
            "2. 'is visited' -> Voix passive au Présent Simple (monument singulier + visited).",
            "3. 'works / will obtain' -> First Conditional (IF + Présent Simple ➔ WILL + Base Verbale).",
            "4. 'have you?' -> Question Tag : phrase négative avec haven't ➔ tag affirmatif 'have you?'."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Stratégie de Réussite à l\'Examen d\'Anglais 4ème',
    root: 'EXAMINATION PREPARATION',
    branches: [
      {
        name: 'Compréhension de Texte',
        subtitle: '8 points',
        items: ['Skimming (lecture globale rapide)', 'Scanning (recherche des mots clés)', 'Justifications True/False entre guillemets']
      },
      {
        name: 'Compétence Linguistique',
        subtitle: '6 points',
        items: ['Temps : Présent simple/continu, Prétérit, Present Perfect', 'Voix passive & Conditionnelles', 'Modaux invariables & Question tags']
      },
      {
        name: 'Production Écrite Guidée',
        subtitle: '6 points',
        items: ['Introduction (poser le sujet)', 'Développement (connecteurs : First, Furthermore)', 'Conclusion (In conclusion / To sum up)']
      }
    ]
  },
  conclusion:
    "En conclusion, l'achèvement de ce programme complet de 30 leçons d'anglais de 4ème vous dote d'une maîtrise grammaticale solide, d'un vocabulaire thématique étendu et d'une méthode rigoureuse pour exceller aux examens et communiquer avec assurance dans le monde moderne."
};
