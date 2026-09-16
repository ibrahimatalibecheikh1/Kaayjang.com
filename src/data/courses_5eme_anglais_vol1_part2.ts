import { LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ANGLAIS DE 5ÈME — AUTEUR : IBRAHIMA KANE
// COURS LONGS ET DÉTAILLÉS (LEÇONS 1 À 14 - VOLUME 1)
// PARTIE B : FUTUR, IMPÉRATIF, PRESENT PERFECT ET WH- QUESTIONS (LEÇONS 6 À 9)
// AUCUN RÉSUMÉ, EXHAUSTIVITÉ TOTALE, DÉTAILS DE COMPRÉHENSION APPROFONDIS,
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_6_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-6',
  number: 'Leçon 6',
  title: "L'Expression du Futur (Will vs Be Going To)",
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Looking forward into the future is a major communicative skill in English. Unlike French, which often conjugates a simple future ending directly onto the verb stem, English offers two distinct modal strategies depending on the speaker's intention and context: the modal auxiliary WILL and the semi-modal structure BE GOING TO. Choosing between them reveals whether an action is a spontaneous decision made on the spot, an uncertain prediction, a planned project, or an imminent certainty based on physical evidence. This sixth lesson explores both structures, their negative and interrogative forms, and gives pupils reliable keys to choose the right future every time.",
  fullText: `Leçon 6 : L'Expression du Futur (Will vs Be Going To)

Introduction : Looking forward into the future is a major communicative skill in English. Unlike French, which often conjugates a simple future ending directly onto the verb stem, English offers two distinct modal strategies depending on the speaker's intention and context: the modal auxiliary WILL and the semi-modal structure BE GOING TO. Choosing between them reveals whether an action is a spontaneous decision made on the spot, an uncertain prediction, a planned project, or an imminent certainty based on physical evidence. This sixth lesson explores both structures, their negative and interrogative forms, and gives pupils reliable keys to choose the right future every time.

1. Vue d'Ensemble des Deux Futurs en Anglais
En anglais, il n'existe pas de terminaison de futur attachée au verbe (comme le '-ra' ou '-ront' en français).
On utilise deux constructions périphrastiques majeures selon l'intention du locuteur et la présence d'indices dans la situation :
1. L'auxiliaire modal WILL (Futur simple / spontané).
2. La structure BE GOING TO (Futur intentionnel / projet / prédiction immédiate).

2. L'Auxiliaire WILL : Le Futur de Prédiction ou de Décision Spontanée
• Structure syntaxique :
  - Affirmative : Sujet + will ('ll) + Base Verbale.
  - Négative : Sujet + will not (won't) + Base Verbale.
  - Interrogative : Will + Sujet + Base Verbale + ?
• Domaines d'emploi précis de WILL :
  - 1. Décision spontanée prise sur-le-champ au moment où l'on parle (réaction immédiate) :
    Exemple officiel : "I will help you with your bags!" (Tu as l'air fatigué, je vais t'aider avec tes sacs tout de suite !).
    Autre exemple : The phone is ringing. - I will answer it!
  - 2. Prédictions générales sur l'avenir ou météo (souvent introduites par 'I think', 'maybe', 'perhaps', 'I believe') :
    Exemple officiel : "I think it will rain tomorrow." (Je pense qu'il pleuvra demain).
    "In 2050, cars will fly."
  - 3. Promesses et engagements solennels :
    "I promise I will never lie to you again."

3. La Structure BE GOING TO : Le Futur d'Intention ou de Projet Planifié
• Structure syntaxique :
  - Affirmative : Sujet + BE au présent (am / is / are) + going to + Base Verbale.
  - Négative : Sujet + BE (am / is / are) + NOT + going to + Base Verbale.
  - Interrogative : BE (Am / Is / Are) + Sujet + going to + Base Verbale + ?
• Domaines d'emploi précis de BE GOING TO :
  - 1. Intentions fortes et projets décidés à l'avance (plans arrêtés, vacances, décisions réfléchies) :
    Exemple officiel : "Next summer, we are going to travel to Canada." (Nous avons déjà réservé nos billets, le projet est planifié).
    "After school, I am going to play basketball with Moussa."
  - 2. Prédictions basées sur des indices visibles et évidents dans la situation présente (le fait va inévitablement se produire) :
    Exemple officiel : "Look at those dark clouds! It is going to rain." (Regarde ces nuages noirs menaçants ! La pluie est imminente et certaine).
    "Be careful! You are going to drop that glass!"

4. Synthèse et Comparaison Directe des Deux Formes
Comparons deux situations proches pour saisir la subtilité anglaise :
• Situation A (Météo) :
  - "I think it will rain tomorrow." ➔ Simple opinion personnelle, incertaine (WILL).
  - "Look at the dark clouds! It is going to rain." ➔ Indice visuel direct dans le ciel, quasi-certitude (BE GOING TO).
• Situation B (Aide) :
  - "I will lend you my pen." ➔ Tu n'as pas de stylo, je décide immédiatement de t'en prêter un (WILL).
  - "I am going to buy a new pen tomorrow." ➔ J'ai prévu d'aller à la librairie demain matin acheter un stylo (BE GOING TO).

Conclusion : En conclusion, l'expression du futur en anglais reflète toujours l'état d'esprit du locuteur. Utilisez WILL pour ce qui est spontané, promis ou prédit sans preuve tangible, et adoptez BE GOING TO pour les projets mûrement réfléchis et les événements déjà annoncés par des indices visuels immédiats.` ,
  sections: [
    {
      title: '1. Comparatif Global des Deux Futurs',
      content: [
        "Deux stratégies d'expression de l'avenir :",
        "• WILL : décision spontanée immédiate, promesse, prédiction générale (I think...).",
        "• BE GOING TO : projet réfléchi à l'avance, prédiction basée sur un indice concret présent (Look!)."
      ]
    },
    {
      title: '2. Tableau des Structures Syntaxiques Complètes',
      content: [
        "Formules comparées sous toutes les formes :"
      ],
      table: {
        headers: ['Forme', 'Futur avec WILL', 'Futur avec BE GOING TO'],
        rows: [
          ['Affirmative', 'Sujet + will + Base Verbale (I will help you)', 'Sujet + am/is/are + going to + BV (We are going to travel)'],
          ['Négative', "Sujet + won't + Base Verbale (It won't rain)", "Sujet + am/is/are + not + going to + BV (I'm not going to play)"],
          ['Interrogative', 'Will + Sujet + Base Verbale + ? (Will you come?)', 'Am/Is/Are + Sujet + going to + BV + ? (Are they going to leave?)'],
          ['Contraction', "I'll, you'll, he'll, won't (will not)", "I'm going to, she's going to, aren't going to"]
        ]
      }
    },
    {
      title: '3. Exemples Clés du Document Officiel Ibrahima Kane',
      content: [
        "Les quatre exemples de référence du programme :",
        "• 1. 'I think it will rain tomorrow.' ➔ Prédiction météo / avis subjectif.",
        "• 2. 'I will help you with your bags!' ➔ Décision instantanée prise à la vue des sacs.",
        "• 3. 'Next summer, we are going to travel to Canada.' ➔ Projet estival déjà planifié.",
        "• 4. 'Look at those dark clouds! It is going to rain.' ➔ Indice visuel concret rendant l'événement inéluctable."
      ]
    },
    {
      title: '4. Erreurs Typiques à Éviter',
      content: [
        "• Oubli de l'auxiliaire BE : Écrire *I going to travel* au lieu de 'I am going to travel'.",
        "• Oubli de 'to' : Écrire *We are going travel* au lieu de 'We are going to travel'.",
        "• Conjugaison du verbe après will : Écrire *He will rains* au lieu de 'He will rain' (invariabilité totale après un modal)."
      ]
    }
  ],
  diagram: {
    title: "Les Deux Visages du Futur",
    root: 'LE FUTUR EN ANGLAIS',
    branches: [
      {
        name: 'Auxiliaire WILL',
        subtitle: 'Spontanéité & Prédictions',
        items: ['Décision prise sur le moment (I will help you)', 'Prédiction avec I think (It will rain)', 'Promesses (I will never lie)', 'Négatif en WON\'T']
      },
      {
        name: 'Structure BE GOING TO',
        subtitle: 'Projet & Indices visibles',
        items: ['Projet planifié à l\'avance (We are going to travel)', 'Indice visuel présent (Look at those clouds!)', 'Conjugaison de BE (am, is, are) + going to + BV']
      },
      {
        name: 'Critère de Choix',
        subtitle: 'La question décisive',
        items: ['Est-ce décidé à l\'instant ? ➔ WILL', 'Est-ce un plan préparé ou certain ? ➔ BE GOING TO']
      }
    ]
  },
  conclusion:
    "En conclusion, l'expression du futur en anglais reflète toujours l'état d'esprit du locuteur. Utilisez WILL pour ce qui est spontané, promis ou prédit sans preuve tangible, et adoptez BE GOING TO pour les projets mûrement réfléchis et les événements déjà annoncés par des indices visuels immédiats."
};

export const LESSON_7_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-7',
  number: 'Leçon 7',
  title: "L'Impératif (The Imperative Mood)",
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "In everyday human interactions, giving instructions, maintaining classroom discipline, providing helpful advice, and setting urgent safety boundaries all rely on one direct grammatical mode: The Imperative. The English imperative is remarkably concise and powerful. Its most distinct characteristic is the absolute absence of an expressed grammatical subject: the verb addresses the listener immediately. This seventh lesson examines the affirmative command, the strict prohibition using 'Don't', and inclusive collective suggestions powered by 'Let's'.",
  fullText: `Leçon 7 : L'Impératif (The Imperative Mood)

Introduction : In everyday human interactions, giving instructions, maintaining classroom discipline, providing helpful advice, and setting urgent safety boundaries all rely on one direct grammatical mode: The Imperative. The English imperative is remarkably concise and powerful. Its most distinct characteristic is the absolute absence of an expressed grammatical subject: the verb addresses the listener immediately. This seventh lesson examines the affirmative command, the strict prohibition using 'Don't', and inclusive collective suggestions powered by 'Let's'.

1. Définition et Particularité Unique de l'Impératif
L'impératif est le mode utilisé pour donner un ordre, une consigne ferme, un conseil bienveillant, ou pour formuler une interdiction formelle.
Particularité syntaxique unique et absolue :
Il n'y a JAMAIS de sujet exprimé à l'impératif (pas de pronom 'you', ni de nom). Le verbe s'adresse directement à l'interlocuteur (ou au groupe d'interlocuteurs) sans aucun intermédiaire.

2. Forme Affirmative : L'Emploi Direct de la Base Verbale
Pour donner un ordre ou une directive, on emploie directement la BASE VERBALE du verbe placée en toute première position au début de la phrase.
• Exemples officiels :
  - "Open your books at page 10." (Ouvrez vos livres à la page 10).
  - "Stand up!" (Levez-vous !).
  - "Listen carefully to the teacher." (Écoutez attentivement le professeur).
• Nuance de politesse :
  Pour adoucir un ordre et le transformer en demande polie, on ajoute simplement 'please' au début ou à la fin de la phrase :
  - "Please, sit down." / "Close the door, please."

3. Forme Négative : L'Interdiction Systématique avec DON'T
Pour exprimer une interdiction (ce qu'il ne faut absolument pas faire), la règle en anglais est d'une simplicité absolue : on place systématiquement l'auxiliaire négatif DON'T (contraction de 'Do not') immédiatement devant la Base Verbale.
Formule :
Don't + Base Verbale.
• Exemples officiels :
  - "Don't eat in class." (Ne mangez pas en classe).
  - "Don't run in the corridors!" (Ne courez pas dans les couloirs !).
  - "Don't touch that hot wire." (Ne touche pas à ce fil chaud).
Règle d'or : Même si l'on s'adresse à plusieurs personnes, la forme reste invariablement 'Don't'. On n'utilise jamais 'doesn't' ni 'not' seul à l'impératif !

4. Suggestion Collective et Inclusion du Locuteur : LET'S
Lorsque le locuteur veut s'inclure lui-même dans l'action proposée (ce qui correspond à la première personne du pluriel « nous » en français : « Allons ! », « Faisons ! »), l'anglais utilise la formule consacrée LET'S (contraction de 'let us') suivie de la Base Verbale.
• Forme affirmative de suggestion :
  Let's + Base Verbale.
  - Exemple officiel : "Let's go together!" (Allons-y ensemble !).
  - "Let's start the English lesson now!" (Commençons le cours d'anglais maintenant !).
• Forme négative de suggestion :
  Let's NOT + Base Verbale.
  - Exemple officiel : "Let's not waste our time." (Ne gaspillons pas notre temps).
  - "Let's not be late for school." (Ne soyons pas en retard pour l'école).

Conclusion : En conclusion, l'impératif anglais allie brièveté et efficacité. Que ce soit par une base verbale directe pour ordonner, un 'Don't' ferme pour interdire, ou un 'Let's' chaleureux pour proposer une action collective, ce mode est au cœur de la vie de classe et de la communication active.` ,
  sections: [
    {
      title: '1. Caractéristiques de l\'Impératif Anglais',
      content: [
        "Principes incontournables :",
        "• Aucun sujet exprimé : pas de 'you' devant le verbe.",
        "• Même forme qu'on s'adresse à une seule personne (tutoiement) ou à plusieurs (vouvoiement).",
        "• Emplois : ordres, consignes de travail, conseils, interdictions, invitations."
      ]
    },
    {
      title: '2. Tableau Récapitulatif des Trois Formes',
      content: [
        "Structure complète selon l'intention communicative :"
      ],
      table: {
        headers: ['Fonction communicative', 'Structure syntaxique', 'Exemples officiels Ibrahima Kane'],
        rows: [
          ['Ordre / Consigne affirmative', 'Base Verbale en tête', 'Open your books at page 10. / Stand up! / Listen carefully.'],
          ['Interdiction formelle', 'Don\'t + Base Verbale', 'Don\'t eat in class. / Don\'t run in the corridors!'],
          ['Suggestion collective (Nous)', 'Let\'s + Base Verbale', 'Let\'s go together!'],
          ['Suggestion négative (Nous)', 'Let\'s not + Base Verbale', 'Let\'s not waste our time.']
        ]
      }
    },
    {
      title: '3. Les Panneaux et Consignes de Sécurité au Collège',
      content: [
        "Applications concrètes du quotidien :",
        "• 'Be quiet!' ➔ Silence !",
        "• 'Wash your hands before lunch.' ➔ Lavez-vous les mains avant le déjeuner.",
        "• 'Don't litter!' ➔ Ne jetez pas de déchets par terre !",
        "• 'Turn off your mobile phones.' ➔ Éteignez vos téléphones portables."
      ]
    },
    {
      title: '4. Fautes Fréquentes à Proscrire',
      content: [
        "• Mettre un pronom sujet : Écrire *You stand up!* au lieu de 'Stand up!'.",
        "• Utiliser 'not' seul : Écrire *Not eat in class* au lieu de 'Don't eat in class'.",
        "• Nier 'Let\'s' avec don\'t : Écrire *Don't let's go* au lieu de 'Let's not go'."
      ]
    }
  ],
  diagram: {
    title: "Le Système de l'Impératif",
    root: 'L\'IMPÉRATIF ANGLAIS',
    branches: [
      {
        name: 'Ordre Affirmatif',
        subtitle: 'Base Verbale directe',
        items: ['Aucun sujet exprimé', 'Open your books / Stand up', 'Adoucissement avec please']
      },
      {
        name: 'Interdiction Négative',
        subtitle: 'Don\'t universel',
        items: ['Don\'t + Base Verbale', 'Don\'t eat in class', 'Don\'t run in corridors']
      },
      {
        name: 'Suggestion Collective',
        subtitle: 'Let\'s (Inclusion du locuteur)',
        items: ['Let\'s + Base Verbale (Let\'s go together)', 'Négation : Let\'s not (Let\'s not waste time)', 'Équivaut à la 1ère pers. du pluriel']
      }
    ]
  },
  conclusion:
    "En conclusion, l'impératif anglais allie brièveté et efficacité. Que ce soit par une base verbale directe pour ordonner, un 'Don't' ferme pour interdire, ou un 'Let's' chaleureux pour proposer une action collective, ce mode est au cœur de la vie de classe et de la communication active."
};

export const LESSON_8_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-8',
  number: 'Leçon 8',
  title: 'Introduction au Present Perfect',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "One of the most distinctive aspects of English grammar is the Present Perfect tense. French speakers often confuse it with the 'passé composé', yet its conceptual identity is entirely different: the Present Perfect creates an indestructible bridge connecting a past occurrence with the present reality. We use it to draw a present bilan, to highlight an accomplishment that has visible consequences right now, or to talk about lifelong personal experiences. This eighth lesson introduces the auxiliary HAVE/HAS, explains the formation of the Past Participle for regular and irregular verbs, and provides practical keys to understand its present impact.",
  fullText: `Leçon 8 : Introduction au Present Perfect

Introduction : One of the most distinctive aspects of English grammar is the Present Perfect tense. French speakers often confuse it with the 'passé composé', yet its conceptual identity is entirely different: the Present Perfect creates an indestructible bridge connecting a past occurrence with the present reality. We use it to draw a present bilan, to highlight an accomplishment that has visible consequences right now, or to talk about lifelong personal experiences. This eighth lesson introduces the auxiliary HAVE/HAS, explains the formation of the Past Participle for regular and irregular verbs, and provides practical keys to understand its present impact.

1. Notion Fondamentale : Le Pont entre Passé et Présent
Le Present Perfect ne sert JAMAIS à simplement raconter une histoire datée du passé (rôle dévolu au prétérit simple).
Il fait le LIEN direct entre le passé et le présent. On l'utilise prioritairement pour :
• Faire un bilan présent d'une action accomplie :
  L'action s'est déroulée dans le passé, mais son résultat ou sa conséquence est directement visible au moment où l'on parle.
• Exprimer une expérience vécue au cours de sa vie (sans précision de date) :
  "Have you ever visited New York?" (Au cours de toute ton existence jusqu'à aujourd'hui).
• Annoncer une nouvelle fraîche qui impacte la situation présente :
  "Look! Moussa has arrived!"

2. Structure Affirmative : Conjugaison de HAVE / HAS + Participe Passé
Formule générale :
Sujet + Auxiliaire HAVE / HAS (à la 3e personne) + Participe Passé du verbe.
• Rappel indispensable du choix de l'auxiliaire :
  - I, You, We, They ➔ HAVE ('ve)
  - He, She, It ➔ HAS ('s)
• Formation du Participe Passé :
  - Pour les verbes réguliers : C'est exactement la même forme que le prétérit, c'est-à-dire Base Verbale + -ed (clean ➔ cleaned, play ➔ played, watch ➔ watched).
  - Pour les verbes irréguliers : C'est la fameuse TROISIÈME COLONNE du tableau des verbes irréguliers (see ➔ saw ➔ seen ; lose ➔ lost ➔ lost ; go ➔ went ➔ gone / been).
• Exemples officiels d'analyse :
  - Exemple régulier : "I have cleaned my bedroom."
    Explication de la conséquence présente : Le nettoyage a eu lieu il y a peu, et la conséquence directe et concrète au moment présent est que la chambre est propre MAINTENANT.
  - Exemple irrégulier : "She has lost her keys."
    Explication de la conséquence présente : Elle a perdu ses clés dans le passé, et la conséquence actuelle est qu'elle n'a pas ses clés sur elle en ce moment même (elle ne peut pas ouvrir sa porte).

3. Structure Négative
Pour former la négation, on ajoute 'not' à l'auxiliaire have/has :
Formule :
Sujet + haven't / hasn't + Participe Passé.
• Exemple officiel :
  "We haven't seen this film yet." (Nous n'avons pas encore vu ce film jusqu'à présent).
  "He hasn't finished his exercises." (Il n'a pas encore fini ses exercices à cet instant).

4. Structure Interrogative et Réponses Courtes
Pour poser une question au Present Perfect, on inverse l'auxiliaire Have/Has et le sujet :
Formule :
Have / Has + Sujet + Participe Passé + ?
• Exemple officiel d'expérience :
  "Have you ever visited New York?" (As-tu déjà visité New York dans ta vie ?).
• Réponses courtes :
  - Yes, I have. / No, I haven't.
  - Has she found her phone? ➔ Yes, she has. / No, she hasn't.

5. Différence Essentielle : Present Perfect vs Prétérit Simple
• Prétérit Simple (Date passée, action coupée du présent) :
  "I lost my keys yesterday." (Hier, j'ai perdu mes clés — l'événement est daté, peut-être les ai-je retrouvées depuis).
• Present Perfect (Conséquence actuelle sur le présent) :
  "I have lost my keys!" (J'ai perdu mes clés — sous-entendu : je suis coincé devant ma porte sans clés en ce moment même !).

Conclusion : En conclusion, le Present Perfect est le temps du résultat présent. Retenez son équation mathématique : Auxiliaire HAVE ou HAS au présent + Participe Passé (en -ed ou 3e colonne). S'il y a une conséquence visible aujourd'hui, le Present Perfect s'impose avec évidence.` ,
  sections: [
    {
      title: '1. Valeur Présente du Present Perfect',
      content: [
        "Un temps du présent tourné vers le passé :",
        "• Bilan d'une action passée ayant une conséquence directe sur la situation présente.",
        "• Évocation d'expériences de vie (avec 'ever' ou 'never').",
        "• Jamais associé à une date précise révolue (pas de yesterday, ago, last)."
      ]
    },
    {
      title: '2. Tableau des Formes Syntaxiques',
      content: [
        "Déclinaisons complètes avec HAVE / HAS :"
      ],
      table: {
        headers: ['Forme', 'Sujets I / You / We / They', 'Sujets He / She / It (3e personne)'],
        rows: [
          ['Affirmative', 'Sujet + have + Participe Passé (I have cleaned)', 'Sujet + has + Participe Passé (She has lost)'],
          ['Négative', "Sujet + haven't + Participe Passé", "Sujet + hasn't + Participe Passé"],
          ['Interrogative', 'Have + Sujet + Participe Passé + ?', 'Has + Sujet + Participe Passé + ?'],
          ['Réponse courte', 'Yes, I have. / No, I haven\'t.', 'Yes, she has. / No, she hasn\'t.']
        ]
      }
    },
    {
      title: '3. La Formation du Participe Passé (Past Participle)',
      content: [
        "Deux filières selon la nature du verbe :",
        "• Verbes réguliers : Base Verbale + -ed (identique au prétérit : cleaned, visited, played).",
        "• Verbes irréguliers : La 3e colonne du répertoire (see ➔ saw ➔ SEEN ; write ➔ wrote ➔ WRITTEN ; eat ➔ ate ➔ EATEN ; do ➔ did ➔ DONE)."
      ]
    },
    {
      title: '4. Analyse des Exemples Officiels Ibrahima Kane',
      content: [
        "Compréhension approfondie des effets de sens :",
        "• 'I have cleaned my bedroom.' ➔ Action passée, conséquence : la chambre est propre maintenant.",
        "• 'She has lost her keys.' ➔ Action passée, conséquence : elle est bloquée sans clés actuellement.",
        "• 'We haven't seen this film yet.' ➔ Bilan négatif jusqu'au moment présent.",
        "• 'Have you ever visited New York?' ➔ Expérience globale sur toute la vie de la personne."
      ]
    }
  ],
  diagram: {
    title: 'Le Pont du Present Perfect',
    root: 'PRESENT PERFECT',
    branches: [
      {
        name: 'Auxiliaire HAVE/HAS',
        subtitle: 'Ancrage dans le présent',
        items: ['have pour I, You, We, They', 'has pour He, She, It', "Contractions : haven't / hasn't"]
      },
      {
        name: 'Participe Passé',
        subtitle: 'Action achevée',
        items: ['Verbes réguliers en -ed (cleaned)', 'Verbes irréguliers 3e colonne (seen, lost)', 'Ne pas confondre avec le prétérit']
      },
      {
        name: 'Conséquence Présente',
        subtitle: 'L\'effet de sens',
        items: ['Résultat visible maintenant (chambre propre)', 'Expérience vécue (Have you ever...?)', 'Jamais de date passée explicite']
      }
    ]
  },
  conclusion:
    "En conclusion, le Present Perfect est le temps du résultat présent. Retenez son équation mathématique : Auxiliaire HAVE ou HAS au présent + Participe Passé (en -ed ou 3e colonne). S'il y a une conséquence visible aujourd'hui, le Present Perfect s'impose avec évidence."
};

export const LESSON_9_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-9',
  number: 'Leçon 9',
  title: 'Les Mots Interrogatifs (Wh- Questions)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Curiosity and dialogue require the ability to ask precise questions. While closed questions only ask for a simple 'Yes' or 'No', open questions seek rich, descriptive information about people, places, reasons, moments, and quantities. In English, these are called 'Wh- Questions' because their interrogative pronouns and determiners almost all begin with the letters W-H. This ninth lesson provides an exhaustive catalog of all eight essential question words, details the universal syntactic blueprint of open questions, and teaches students how to answer each one accurately.",
  fullText: `Leçon 9 : Les Mots Interrogatifs (Wh- Questions)

Introduction : Curiosity and dialogue require the ability to ask precise questions. While closed questions only ask for a simple 'Yes' or 'No', open questions seek rich, descriptive information about people, places, reasons, moments, and quantities. In English, these are called 'Wh- Questions' because their interrogative pronouns and determiners almost all begin with the letters W-H. This ninth lesson provides an exhaustive catalog of all eight essential question words, details the universal syntactic blueprint of open questions, and teaches students how to answer each one accurately.

1. Définition et Utilité des Questions Ouvertes
Pour poser des questions ouvertes en anglais — c'est-à-dire des questions dont la réponse ne peut pas être un simple oui ou non —, on utilise des pronoms ou déterminants interrogatifs appelés communément « mots en Wh- ».
Ces mots permettent d'interroger avec précision sur l'identité d'un individu, la nature d'un objet, la localisation géographique, le repérage temporel, la causalité, la manière ou la possession.

2. Structure Syntaxique Universelle de la Question Ouverte
La formule de construction d'une Wh- question est universelle et suit rigoureusement l'ordre suivant :
Mot en Wh- + Auxiliaire (do / does / did / be / have / modal) + Sujet + Verbe principal + Compléments + ?
• Exemples d'application de la formule :
  - Where [Mot Wh] + do [Auxiliaire] + you [Sujet] + live [Verbe] ?
  - What [Mot Wh] + are [Auxiliaire BE] + you [Sujet] + doing [Verbe] ?
  - When [Mot Wh] + did [Auxiliaire passé] + he [Sujet] + arrive [Verbe] ?

3. Liste Exhaustive et Valeurs Précises des 8 Mots Interrogatifs de 5ème
Voici l'inventaire officiel exhaustif enseigné dans le programme Ibrahima Kane :
• WHO [Prononciation : /huː/] :
  Interroge sur l'IDENTITÉ D'UNE PERSONNE (Qui ?).
  - Exemple officiel : "Who is your English teacher?" (Qui est ton professeur d'anglais ?).
  - Réponse type : "Mr. Kane is my English teacher."
• WHAT [Prononciation : /wɒt/] :
  Interroge sur UNE CHOSE, UN OBJET OU UNE ACTION (Que, Quoi, Quel ?).
  - Exemple officiel : "What are you doing?" (Qu'es-tu en train de faire ?).
  - "What is your favourite subject?" (Quelle est ta matière préférée ?).
• WHERE [Prononciation : /weə/] :
  Interroge sur LE LIEU OU L'ENDROIT (Où ?).
  - Exemple officiel : "Where do you live?" (Où habites-tu ?).
  - Réponse type : "I live in Dakar."
• WHEN [Prononciation : /wen/] :
  Interroge sur LE MOMENT OU LE TEMPS (Quand ?).
  - Exemple officiel : "When is your birthday?" (Quand est ton anniversaire ?).
  - Réponse type : "My birthday is in November."
• WHY [Prononciation : /waɪ/] :
  Interroge sur LA CAUSE OU LA RAISON (Pourquoi ?).
  RÈGLE OBLIGATOIRE : À une question posée avec 'Why', on répond systématiquement par la conjonction 'BECAUSE...' (Parce que...).
  - Exemple officiel : "Why are you late?" (Pourquoi es-tu en retard ?).
  - Réponse type : "Because I missed the bus."
• HOW [Prononciation : /haʊ/] :
  Interroge sur LE MOYEN, LA MANIÈRE OU L'ÉTAT DE SANTÉ (Comment ?).
  - Exemple officiel : "How do you go to school?" (Comment vas-tu à l'école ?).
  - Réponse type : "I go to school by bus." / "How are you? - I am fine, thank you."
• HOW OLD :
  Interroge spécifiquement sur L'ÂGE (Quel âge ?).
  - Exemple officiel : "How old are you?" (Quel âge as-tu ?).
  - Réponse type : "I am twelve years old."
• WHOSE [Prononciation : /huːz/] :
  Interroge sur LA POSSESSION ET LE PROPRIÉTAIRE (À qui est... ?).
  - Exemple officiel : "Whose jacket is this?" (À qui appartient cette veste ?).
  - Réponse type : "It is John's jacket."

Conclusion : En conclusion, les mots interrogatifs en Wh- sont les passe-partout de l'échange oral et écrit. Retenez leur formule mécanique : Mot en Wh- suivi immédiatement de l'auxiliaire avant le sujet. Savoir associer chaque mot à son domaine précis (Who pour la personne, Where pour le lieu, Why pour la cause avec Because) garantit une communication parfaitement fluide.` ,
  sections: [
    {
      title: '1. Rôle et Typologie des Questions Ouvertes',
      content: [
        "• Recherche d'informations précises et détaillées (pas de réponse par Yes/No).",
        "• Position obligatoire du mot interrogatif : toujours en tout début de phrase.",
        "• Maintien impératif de la structure interrogative avec inversion auxiliaire-sujet."
      ]
    },
    {
      title: '2. Tableau Complet des Mots en Wh- et Exemples',
      content: [
        "Répertoire officiel des 8 interrogatifs exigés en classe de 5ème :"
      ],
      table: {
        headers: ['Mot interrogatif', 'Signification', 'Cible visée', 'Exemple officiel Ibrahima Kane'],
        rows: [
          ['Who', 'Qui ?', 'Identité d\'une personne', 'Who is your English teacher?'],
          ['What', 'Quoi / Que / Quel ?', 'Chose, objet, action', 'What are you doing?'],
          ['Where', 'Où ?', 'Lieu, adresse, position', 'Where do you live?'],
          ['When', 'Quand ?', 'Date, heure, moment', 'When is your birthday?'],
          ['Why', 'Pourquoi ?', 'Cause (réponse en Because)', 'Why are you late? -> Because I missed the bus.'],
          ['How', 'Comment ?', 'Moyen de transport, manière', 'How do you go to school?'],
          ['How old', 'Quel âge ?', 'Âge d\'une personne', 'How old are you?'],
          ['Whose', 'À qui ?', 'Propriétaire / Possession', 'Whose jacket is this?']
        ]
      }
    },
    {
      title: '3. La Formule Magique : Mot Wh + Auxiliaire + Sujet + Verbe',
      content: [
        "L'ordre des mots est non négociable :",
        "• 1. Mot Wh (Where)",
        "• 2. Auxiliaire (do / does / did / is / are / have)",
        "• 3. Sujet (you / he / they)",
        "• 4. Verbe principal à la Base Verbale (live / work / play)",
        "• Exemple d'analyse : Where (1) does (2) she (3) work (4) ?"
      ]
    },
    {
      title: '4. Erreurs Fréquentes à Éviter',
      content: [
        "• Oubli de l'auxiliaire : Demander *Where you live?* au lieu de 'Where do you live?'.",
        "• Confondre Who et Whose : Demander *Who jacket is this?* au lieu de 'Whose jacket is this?'.",
        "• Répondre sans 'Because' à Why : Oublier le mot de liaison de cause."
      ]
    }
  ],
  diagram: {
    title: 'La Galaxie des Mots en Wh-',
    root: 'MOTS INTERROGATIFS',
    branches: [
      {
        name: 'Personne & Possession',
        subtitle: 'Qui / À qui',
        items: ['Who : personne (Who is your teacher?)', 'Whose : possession (Whose jacket is this?)']
      },
      {
        name: 'Espace & Temps & Chose',
        subtitle: 'Où / Quand / Quoi',
        items: ['Where : lieu (Where do you live?)', 'When : moment (When is your birthday?)', 'What : chose ou action (What are you doing?)']
      },
      {
        name: 'Cause & Manière & Âge',
        subtitle: 'Pourquoi / Comment',
        items: ['Why : cause (Why are you late? ➔ Because...)', 'How : moyen (How do you go to school?)', 'How old : âge (How old are you?)']
      }
    ]
  },
  conclusion:
    "En conclusion, les mots interrogatifs en Wh- sont les passe-partout de l'échange oral et écrit. Retenez leur formule mécanique : Mot en Wh- suivi immédiatement de l'auxiliaire avant le sujet. Savoir associer chaque mot à son domaine précis (Who pour la personne, Where pour le lieu, Why pour la cause avec Because) garantit une communication parfaitement fluide."
};
