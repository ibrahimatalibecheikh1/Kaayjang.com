import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET D'ANGLAIS 3ÈME — PRÉPARATION INTÉGRALE AU BFEM AU SÉNÉGAL
// PARTIE 1 : GRAMMAIRE APPROFONDIE, SYSTÈMES VERBAUX ET STRUCTURES (LEÇONS 1 À 9)
// Document officiel conforme aux directives pédagogiques sénégalaises
// Règles détaillées, explications bilingues, tableaux, pièges fréquents et exercices corrigés
// =========================================================================

// -------------------------------------------------------------------------
// LESSON 1 : THE TENSE SYSTEM (PRESENT, PAST AND FUTURE)
// -------------------------------------------------------------------------
export const LESSON_1_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-1',
  number: 'Lesson 1',
  title: 'The Tense System (Present, Past and Future)',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "Mastering the English tense system is the core foundation for success in the BFEM examination. In this lesson, we break down how to accurately use and contrast the Present tenses (Simple Present vs. Present Continuous), the Past tenses (Simple Past vs. Past Continuous), and the Future forms ('Will' vs. 'Be going to'). You will learn the exact morphological rules, identify key time markers, avoid classic Senegalese exam pitfalls, and practice with real BFEM-style exercises.",
  fullText: `Lesson 1: The Tense System (Present, Past and Future)
Preparation for the Senegalese BFEM Examination

1. The Present Tenses
• Simple Present: Used to express habits, routines, general scientific truths, permanent states, and official timetables.
  - Formation: Base form of the verb. Add '-s' or '-es' in the 3rd person singular (he, she, it).
  - Spelling rules for 3rd person singular:
    * Verbs ending in -ch, -sh, -ss, -x, -o: add '-es' (watches, washes, passes, fixes, goes).
    * Verbs ending in consonant + y: change 'y' to 'ies' (studies, tries). But vowel + y: plays.
  - Auxiliaries in negatives and questions: DO / DOES (Subject + do/does not + bare infinitive; Do/Does + subject + bare infinitive?).
  - Signal words: always, usually, often, sometimes, rarely, never, every day/month, once a week.
  - Examples:
    * "The student studies English every single day before the BFEM exam."
    * "Water boils at 100 degrees Celsius."
    * "Amina lives in Dakar with her family."

• Present Continuous (Progressive): Expresses actions happening right now at the precise moment of speaking, or temporary ongoing situations.
  - Formation: Subject + am/is/are + verb-ing.
  - Signal words: now, right now, at the moment, currently, Look!, Listen!
  - Examples:
    * "Right now, the teacher is explaining a very complex grammar rule on the blackboard."
    * "Listen! The school choir is singing a traditional song."
  - Important Pitfall (Stative Verbs): Verbs of feeling, thinking, and possession (like, love, hate, know, understand, believe, want, have, belong) are NOT usually used in the continuous form! Say: "I understand the lesson", NOT "I am understanding the lesson".

2. The Past Tenses
• Simple Past: Used for actions completed at a definite, known moment in the past.
  - Regular verbs: add '-ed' (walk -> walked, decide -> decided, stop -> stopped).
  - Irregular verbs: form must be memorized by heart (write -> wrote, buy -> bought, go -> went, see -> saw).
  - Auxiliaries in negatives and questions: DID (Subject + did not + bare infinitive; Did + subject + bare infinitive?).
  - Signal words: yesterday, last night/week/year, in 2020, two days ago, when I was young.
  - Examples:
    * "They visited the historical island of Gorée last Sunday during the school excursion."
    * "The candidate wrote an outstanding essay for the mock exam yesterday."
    * "Did you finish your English assignment last night?"

• Past Continuous: Expresses an action that was ongoing or in progress at a specific moment in the past, or an ongoing background action interrupted by a shorter event in the Simple Past.
  - Formation: Subject + was/were + verb-ing.
  - Structure with WHEN and WHILE:
    * Past Continuous + WHEN + Simple Past: "We were listening attentively to the teacher when the electricity suddenly cut off."
    * WHILE + Past Continuous, Simple Past: "While Fatou was walking to CEM Lamine Guèye, she met her best friend."

3. Expressing the Future: 'Will' vs. 'Be Going To'
• Will (Simple Future):
  - Used for spontaneous, on-the-spot decisions made at the moment of speaking, personal opinions without proof, promises, and future facts.
  - Formation: Subject + will ('ll) + base verb (Negative: will not / won't).
  - Examples:
    * "The phone is ringing! I will answer it." (Spontaneous decision)
    * "I think it will rain tomorrow in Dakar." (Prediction based on belief)
    * "I promise I will help you with your BFEM revision tonight." (Promise)

• Be Going To:
  - Used for premeditated plans, intentions already decided before speaking, and predictions based on present, visible evidence.
  - Formation: Subject + am/is/are going to + base verb.
  - Examples:
    * "Look at those thick, dark clouds! It is going to rain very heavily soon." (Visible physical evidence)
    * "She is going to study medicine at UCAD next year; she has already registered." (Prior plan/intention)`,
  sections: [
    {
      title: '1. The Present Tenses: Simple Present vs. Present Continuous',
      content: [
        "En anglais, la distinction entre le présent simple (habitudes, vérités générales) et le présent continu (action en cours d'accomplissement) est un classique incontournable du BFEM.",
        "• Règles d'or du Simple Present :",
        "  - À la 3ème personne du singulier (He, She, It), on ajoute impérativement '-s' ou '-es' : 'He works in Saint-Louis', 'She teaches in Thiès'.",
        "  - Pour les verbes terminés par -ch, -sh, -ss, -x, -o : on ajoute '-es' (watches, washes, kisses, fixes, goes).",
        "  - Pour les verbes terminés par consonne + y : le 'y' devient 'ies' (study -> studies, carry -> carries). Attention : play -> plays (voyelle + y).",
        "  - Forme négative et interrogative : on utilise obligatoirement l'auxiliaire DO ou DOES. Exemple : 'Does Moussa speak English? No, he does not (doesn't) speak English.'",
        "• Règles d'or du Present Continuous (Présent Be + -ing) :",
        "  - Structure : Sujet + am / is / are + Base Verbale-ing.",
        "  - Utilisation : Action qui se déroule au moment où l'on parle (Right now, at this moment) ou situation temporaire.",
        "  - Piège BFEM : Les 'stative verbs' (verbes d'état, de perception et de sentiment : know, believe, want, like, understand, need, remember) ne se mettent jamais au présent continu. Exemple : 'I know the answer' (et JAMAIS 'I am knowing')."
      ],
      table: {
        headers: ['Critère', 'Simple Present', 'Present Continuous'],
        rows: [
          ['Emploi principal', 'Habitudes, vérités universelles, routines', "Action en cours, immédiateté, 'en train de'"],
          ['Structure Affirmative', 'Sujet + BV (+ s/es à la 3e pers.)', 'Sujet + am/is/are + BV-ing'],
          ['Structure Négative', 'Sujet + do/does not + BV', 'Sujet + am/is/are + not + BV-ing'],
          ['Structure Interrogative', 'Do/Does + Sujet + BV ?', 'Am/Is/Are + Sujet + BV-ing ?'],
          ['Mots-clés indicateurs', 'always, usually, often, never, every day', 'now, right now, at the moment, currently, Listen!'],
          ['Exemple concret', 'The sun rises in the east every morning.', 'Look! The students are cleaning the school yard.']
        ]
      }
    },
    {
      title: '2. The Past Tenses: Simple Past & Past Continuous',
      content: [
        "Le prétérit (Simple Past) relate un événement révolu, daté et complètement terminé dans le passé. Il s'oppose au Past Continuous qui décrit une action en cours de déroulement dans le passé.",
        "• Verbes réguliers : ajout de '-ed' (played, visited, worked). Attention au doublement de consonne finale (stop -> stopped, prefer -> preferred).",
        "• Verbes irréguliers : à mémoriser impérativement pour le BFEM (go -> went, write -> wrote, buy -> bought, see -> saw, take -> took, give -> gave, eat -> ate, come -> came).",
        "• Négation et question au passé : auxiliaire DID pour tous les sujets. Le verbe principal repasse à l'infinitif sans to ! Exemple : 'He did not write the letter' (et NON 'He did not wrote').",
        "• Combinaison fréquente au BFEM (When / While) :",
        "  - Une action longue en cours (Past Continuous : was/were + -ing) est interrompue par une action brève et soudaine (Simple Past).",
        "  - 'While I was revising my English notes, my phone rang.'",
        "  - 'We were walking along the Corniche in Dakar when it started to pour with rain.'"
      ]
    },
    {
      title: '3. Expressing the Future: Will vs. Be Going To',
      content: [
        "Pour exprimer le futur, le candidat au BFEM doit choisir avec précision entre 'WILL' et 'BE GOING TO' selon l'intention du locuteur :",
        "• WILL + Base Verbale :",
        "  1. Décision spontanée prise à l'instant de parole : 'Someone is knocking at the door. I will go and open it.'",
        "  2. Prédiction sans preuve matérielle immédiate : 'I think Senegal will win the next football match.'",
        "  3. Promesse formelle : 'I will never forget your valuable advice, Sir.'",
        "• BE GOING TO + Base Verbale :",
        "  1. Intention mûrement réfléchie et planifiée à l'avance : 'Seynabou is going to study law at Cheikh Anta Diop University (UCAD) next October.'",
        "  2. Prédiction imminente fondée sur un indice visible dans le présent : 'Look at those dark grey clouds covering the sky over Kaolack! It is going to rain.'",
        "  3. Évidence physique : 'He is driving too fast on this slippery road; he is going to crash!'"
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE 1 — Put the verbs in brackets into the correct tense (Simple Present, Present Continuous, Simple Past, or Future) :",
        "1. Every Friday, Modou (go) to the Grand Mosque in Touba with his grandfather.",
        "2. Listen! The headmaster (speak) to the candidates in the examination room right now.",
        "3. Three days ago, my older brother (receive) his national identity card.",
        "4. Look at that reckless motorcyclist! He (fall) off his motorbike.",
        "5. While we (wait) for the bus at Petersen station, a heavy rain began to fall.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. goes — 'Every Friday' indique une habitude hebdomadaire régulière ; 3ème personne du singulier avec -es car le verbe se termine par -o.",
        "2. is speaking — 'Listen!' et 'right now' indiquent une action en cours d'accomplissement au moment même où l'on parle.",
        "3. received — 'Three days ago' situe l'action de manière précise et définitive dans le passé révolu.",
        "4. is going to fall — Prédiction fondée sur un indice visible et immédiat (conduite dangereuse sous les yeux de l'observateur).",
        "5. were waiting — Action d'attente prolongée en arrière-plan (Past Continuous avec 'we') interrompue par le début soudain de la pluie (Simple Past)."
      ]
    }
  ],
  conclusion:
    "En maîtrisant la concordance des temps au présent, au passé et au futur, vous éliminez les fautes les plus pénalisantes de l'épreuve du BFEM. Retenez toujours la règle d'or : repérez d'abord les marqueurs temporels (adverbes de temps) avant de conjuguer le verbe."
};

// -------------------------------------------------------------------------
// LESSON 2 : THE PRESENT PERFECT TENSE
// -------------------------------------------------------------------------
export const LESSON_2_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-2',
  number: 'Lesson 2',
  title: 'The Present Perfect Tense',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "The Present Perfect is one of the most tested grammar points in the Senegalese BFEM exam. It bridges the gap between past actions and the present moment. In this comprehensive lesson, you will master its formation with regular and irregular past participles, understand the crucial distinction between 'SINCE' and 'FOR', learn how to use adverbs such as 'already', 'yet', 'just', 'ever', and 'never', and discover how to contrast the Present Perfect with the Simple Past.",
  fullText: `Lesson 2: The Present Perfect Tense
Preparation for the Senegalese BFEM Examination

1. Form and Standard Structures
The Present Perfect connects an action that took place in the past with the present situation.
• Affirmative: Subject + have / has + Past Participle (PP).
  - Regular verbs: base verb + -ed (worked, studied, visited).
  - Irregular verbs: 3rd column of the irregular verbs table (written, spoken, done, gone, seen, taken, eaten).
  - Has is used for 3rd person singular (he, she, it); Have is used for I, you, we, they.
  - Example: "She has completed her BFEM registration successfully."

• Negative: Subject + have / has + not (haven't / hasn't) + Past Participle.
  - Example: "They have not received their official exam numbers yet."

• Interrogative: Have / Has + subject + Past Participle?
  - Example: "Have you ever visited the historic city of Saint-Louis?"

2. Core Functions and Usage
• Bilan / Life Experience: To express whether someone has had an experience in their lifetime up to now, without mentioning a specific date.
  - "The principal has traveled abroad many times in his life."
• Action started in the past and still true in the present:
  - "Mr. Diop has taught English in this middle school for 15 years." (He still teaches here today!)
• Recent past with present result:
  - "Fatou has lost her student ID card; therefore, she cannot enter the library." (The loss happened in the past, but the consequence is right now).

3. Time Markers and Adverbs
• SINCE vs. FOR (The Golden Rule for BFEM):
  - SINCE + starting point in time (date, year, specific day, hour, or clause in the Simple Past):
    * since 2018, since last Monday, since 8:00 AM, since I was born.
    * Example: "He has lived in Thiès since 2018."
  - FOR + duration or period of time (number of hours, days, weeks, months, years):
    * for three hours, for two weeks, for ten years, for a long time.
    * Example: "They have been friends for over ten years."

• ALREADY, YET, JUST, EVER, NEVER:
  - Already: used in affirmative sentences to indicate that something occurred earlier than expected. Placed between auxiliary and past participle.
    * "I have already revised all my English grammar chapters."
  - Yet: used in negative sentences ("pas encore") and questions ("déjà?"). Always placed at the very end of the sentence!
    * "Have you eaten lunch yet?" / "No, the teacher hasn't arrived yet."
  - Just: denotes an action completed just a few moments ago. Placed between auxiliary and past participle.
    * "The bell has just rung; the exam is starting."
  - Ever: used in questions to ask about lifetime experiences ("as-tu déjà...?").
    * "Have you ever eaten traditional Thiéboudienne from Saint-Louis?"
  - Never: used in affirmative structures with a negative meaning ("jamais").
    * "Ousmane has never flown in an airplane."

4. Present Perfect vs. Simple Past: Crucial Exam Distinction
• Simple Past: Action completely finished at a SPECIFIC, DATED time in the past (yesterday, in 2015, two days ago, when I was 10).
• Present Perfect: Action connected to the present, or time NOT specified.
• Compare:
  - "Alioune went to Dakar yesterday." (Simple Past, 'yesterday' is specified).
  - "Alioune has gone to Dakar." (Present Perfect, he is currently still there or the exact date is not stated).`,
  sections: [
    {
      title: '1. Formation and Conjugation of Present Perfect',
      content: [
        "Le Present Perfect se forme toujours avec l'auxiliaire HAVE (au présent : have / has) suivi du participe passé du verbe principal (Past Participle).",
        "• Attention à la 3ème personne du singulier : HE, SHE, IT prennent HAS (ou la forme contractée 's).",
        "• Pour les verbes réguliers : le participe passé est identique au prétérit (ajout de -ed).",
        "• Pour les verbes irréguliers : c'est la 3ème colonne du tableau qu'il faut utiliser impérativement !",
        "  - write -> wrote -> WRITTEN",
        "  - do -> did -> DONE",
        "  - see -> saw -> SEEN",
        "  - speak -> spoke -> SPOKEN",
        "  - buy -> bought -> BOUGHT",
        "  - break -> broke -> BROKEN",
        "• Forme interrogative : inversion stricte Auxiliaire + Sujet + Participe Passé : 'Have you finished?' (et jamais 'Did you have finished?')."
      ]
    },
    {
      title: '2. The Master Rule: SINCE vs. FOR in the BFEM Exam',
      content: [
        "La question portant sur 'Since' et 'For' figure dans quasiment une session du BFEM sur deux. Voici la méthode infaillible pour ne plus jamais hésiter :",
        "• SINCE (+ Point de départ précis) : répond à la question 'Depuis quand ?'.",
        "  - Une année : since 1960, since 2015.",
        "  - Un jour ou mois : since Monday, since last October.",
        "  - Une heure précise : since 7:30 AM.",
        "  - Une proposition au prétérit : since he graduated from middle school.",
        "• FOR (+ Durée calculée) : répond à la question 'Pendant combien de temps ?'.",
        "  - Un nombre d'unités de temps : for 5 minutes, for two days, for six months, for ten years.",
        "  - Une expression de durée : for a long time, for several centuries, for ages."
      ],
      table: {
        headers: ['Expression temporelle', 'Choisir', 'Raison grammaticale'],
        rows: [
          ['... two weeks', 'FOR', "Indique une durée chiffrée (14 jours d'intervalle)"],
          ['... last September', 'SINCE', "Indique le point de départ précis du calendrier"],
          ['... three centuries', 'FOR', 'Indique un laps de temps mesuré'],
          ['... 2021', 'SINCE', 'Indique une date précise de départ'],
          ['... five hours', 'FOR', 'Indique une durée écoulée'],
          ['... I was a little boy', 'SINCE', "Indique le repère temporel d'origine"]
        ]
      }
    },
    {
      title: '3. Placement of Adverbs: Already, Yet, Just, Ever, Never',
      content: [
        "L'emplacement des adverbes dans la phrase est strictement codifié en anglais :",
        "• JUST, ALREADY, NEVER, EVER s'intercalent toujours ENTRE l'auxiliaire have/has et le participe passé :",
        "  - 'She has JUST finished her breakfast.' (Elle vient juste de finir son petit-déjeuner).",
        "  - 'We have ALREADY registered our names.' (Nous avons déjà enregistré nos noms).",
        "  - 'He has NEVER failed a mathematics test.' (Il n'a jamais échoué à un contrôle de maths).",
        "  - 'Have you EVER visited Djoudj National Bird Sanctuary?' (As-tu déjà visité le parc des oiseaux du Djoudj ?).",
        "• YET se place TOUJOURS en FIN de proposition dans les phrases négatives ou interrogatives :",
        "  - 'I haven't received my exam results YET.' (Je n'ai pas encore reçu mes résultats d'examen).",
        "  - 'Has the postman brought the mail YET?' (Le facteur a-t-il déjà apporté le courrier ?)."
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE 1 — Fill in the blanks with SINCE or FOR :",
        "1. Mr. Ndiaye has been the school principal _______ seven years.",
        "2. My family has lived in this neighborhood in Pikine _______ 2012.",
        "3. The patient has been waiting in the hospital corridor _______ two hours.",
        "4. Aïssatou hasn't seen her childhood friends _______ she left Ziguinchor.",
        "",
        "EXERCICE 2 — Choose the correct tense (Simple Past or Present Perfect) :",
        "5. In 1960, Senegal (gain) its national independence.",
        "6. Amina (already / write) three essays this morning.",
        "7. Last weekend, we (clean) our local schoolyard during the Set-Setal day.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. for — 'seven years' représente une durée globale chiffrée.",
        "2. since — '2012' représente une année de départ précise.",
        "3. for — 'two hours' représente une durée mesurée.",
        "4. since — 'she left Ziguinchor' est une proposition temporelle au prétérit marquant le point d'origine.",
        "5. gained — 'In 1960' est une date historique passée et révolue (Simple Past obligatoire).",
        "6. has already written — Présence de l'adverbe 'already' reliant les actions du matin au présent (Present Perfect).",
        "7. cleaned — 'Last weekend' désigne une période révolue et clôturée (Simple Past obligatoire)."
      ]
    }
  ],
  conclusion:
    "Le Present Perfect exprime un lien vivant entre le passé et le présent. Pour réussir votre épreuve d'anglais au BFEM, retenez la position des adverbes (between have and past participle, sauf YET à la fin) et appliquez systématiquement la règle SINCE (point de départ) versus FOR (durée)."
};

// -------------------------------------------------------------------------
// LESSON 3 : THE PASSIVE VOICE
// -------------------------------------------------------------------------
export const LESSON_3_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-3',
  number: 'Lesson 3',
  title: 'The Passive Voice',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "The passive voice transformation is an absolute classic in Section 2 (Language / Grammar) of the Senegalese BFEM exam. Candidates are frequently asked to rewrite an active sentence into the passive voice or vice versa. This lesson provides an unambiguous, step-by-step methodology to master the transformation across all tenses, handles verbs with two objects, explains when to keep or omit the agent ('by'), and trains you on real past BFEM exam prompts.",
  fullText: `Lesson 3: The Passive Voice
Preparation for the Senegalese BFEM Examination

1. Understanding Active vs. Passive Structure
• Active Voice: The subject performs the action described by the verb.
  - Structure: [Subject / Agent] + [Verb] + [Direct Object]
  - Example: "The headmaster signed the official diplomas."
• Passive Voice: The subject receives the action. The focus moves from the performer to the recipient or the action itself.
  - Structure: [New Subject / Object] + [Verb 'TO BE' in the same tense] + [Past Participle] + [by + Agent]
  - Example: "The official diplomas were signed by the headmaster."

2. The 3 Golden Steps of Transformation:
  Step 1: Identify the direct object of the active sentence and move it to the front as the new subject.
  Step 2: Conjugate the auxiliary verb 'TO BE' in the EXACT SAME TENSE as the active main verb, and agree it in number (singular or plural) with the new subject.
  Step 3: Put the main verb into its Past Participle form (3rd column or -ed), and add 'by + agent' if the original subject is relevant.

3. Tense Transformations Table for BFEM:
• Simple Present: Active: "The student writes a letter." -> Passive: "A letter IS WRITTEN by the student."
• Simple Past: Active: "The headmaster signed the diploma." -> Passive: "The diploma WAS SIGNED by the headmaster."
• Present Continuous: Active: "The workers are building a bridge." -> Passive: "A bridge IS BEING BUILT by the workers."
• Past Continuous: Active: "The mechanic was repairing the bus." -> Passive: "The bus WAS BEING REPAIRED by the mechanic."
• Present Perfect: Active: "The government has built a new school." -> Passive: "A new school HAS BEEN BUILT by the government."
• Past Perfect: Active: "The fire had destroyed the market." -> Passive: "The market HAD BEEN DESTROYED by the fire."
• Simple Future (Will): Active: "The supervisor will monitor the exam." -> Passive: "The exam WILL BE MONITORED by the supervisor."
• Modals (Can, Must, Should): Active: "Students must wear uniforms." -> Passive: "Uniforms MUST BE WORN by students."

4. Important Rules and Traps to Avoid
• Omitting the Agent ('by ...'):
  If the active subject is vague, indefinite, or unknown (such as: someone, somebody, they, people, a person, no one), DO NOT include the agent in the passive sentence!
  - Active: "Someone stole my English textbook yesterday."
  - Passive: "My English textbook was stolen yesterday." (NOT: by someone!)
  - Active: "People speak Wolof all over Senegal."
  - Passive: "Wolof is spoken all over Senegal." (NOT: by people!)

• Verbs with Two Objects (Direct and Indirect):
  Verbs like give, send, offer, teach, show, pay often take two objects (e.g., "The teacher gave the student a book").
  - In English, it is far more natural to make the person (indirect object) the subject of the passive:
    * Option A (Preferred in exams): "The student was given a book by the teacher."
    * Option B: "A book was given to the student by the teacher."`,
  sections: [
    {
      title: '1. Active vs. Passive Structure: The Mechanics',
      content: [
        "À la voix active, le sujet accomplit l'action : 'The president signed the decree'.",
        "À la voix passive, le sujet subit l'action : 'The decree was signed by the president'.",
        "La formule mathématique universelle de la voix passive en anglais est :",
        "Sujet + Auxiliaire BE (au temps du verbe actif) + Participe Passé du verbe actif (+ by + agent).",
        "• Attention capitale à l'accord singulier / pluriel de l'auxiliaire BE :",
        "  - Si le nouvel objet devenu sujet est pluriel, l'auxiliaire BE doit s'accorder avec lui !",
        "  - Exemple : 'The boy wrote a poem' -> 'A poem was written by the boy.'",
        "  - Mais : 'The boy wrote two poems' -> 'Two poems WERE written by the boy.'"
      ]
    },
    {
      title: '2. Complete Tense Transformation Matrix for BFEM',
      content: [
        "Voici le tableau de référence complet pour convertir n'importe quelle phrase active au passif lors de l'examen du BFEM :"
      ],
      table: {
        headers: ['Temps actif', 'Phrase Active', 'Auxiliaire BE requis', 'Phrase Passive'],
        rows: [
          ['Simple Present', 'The teacher corrects the copies.', 'am / is / are', 'The copies ARE CORRECTED by the teacher.'],
          ['Simple Past', 'The storm destroyed the roof.', 'was / were', 'The roof WAS DESTROYED by the storm.'],
          ['Present Continuous', 'They are repairing the road.', 'is / are + BEING', 'The road IS BEING REPAIRED.'],
          ['Past Continuous', 'She was cooking lunch.', 'was / were + BEING', 'Lunch WAS BEING COOKED by her.'],
          ['Present Perfect', 'We have painted the room.', 'has / have + BEEN', 'The room HAS BEEN PAINTED by us.'],
          ['Past Perfect', 'He had sent the email.', 'had + BEEN', 'The email HAD BEEN SENT by him.'],
          ['Simple Future (Will)', 'They will build a clinic.', 'will + BE', 'A clinic WILL BE BUILT.'],
          ['Modal (Must / Should)', 'You must follow the rules.', 'must / should + BE', 'The rules MUST BE FOLLOWED.']
        ]
      }
    },
    {
      title: '3. Crucial Exam Tips: When to Omit the Agent and Double Objects',
      content: [
        "1. Règle d'or de l'omission de l'agent :",
        "Quand le sujet actif est un pronom indéfini comme 'someone', 'somebody', 'they', 'people', ou 'one', il ne faut SURTOUT PAS écrire 'by someone' ou 'by them'. Cela alourdit inutilement la phrase et fait perdre des points au BFEM.",
        "• Exemple : 'Somebody broke the window last night.' -> 'The window was broken last night.'",
        "2. Cas des verbes à double complément (give, tell, show, teach, offer) :",
        "Quand une phrase active contient un complément d'objet direct (la chose) et un complément d'objet indirect (la personne) :",
        "• Active : 'The principal gave Modou a prestigious scholarship.'",
        "• Passive 1 (Privilégiée en anglais) : 'Modou was given a prestigious scholarship by the principal.'",
        "• Passive 2 (Acceptable avec 'to') : 'A prestigious scholarship was given to Modou by the principal.'"
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE — Rewrite the following sentences into the PASSIVE VOICE :",
        "1. The Senegalese government built a modern hospital in Touba last year.",
        "2. The students are cleaning the classroom right now.",
        "3. Someone has stolen the school projector.",
        "4. The jury will announce the BFEM results tomorrow afternoon.",
        "5. You must respect the national traffic regulations.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. 'A modern hospital was built in Touba by the Senegalese government last year.' — Le verbe actif 'built' est au Simple Past, donc l'auxiliaire BE devient 'was' (hospital est singulier) + participe passé 'built'.",
        "2. 'The classroom is being cleaned by the students right now.' — Verbe actif au Present Continuous, donc BE devient 'is being' + participe passé 'cleaned'.",
        "3. 'The school projector has been stolen.' — Présence de 'someone' donc omission impérative de l'agent ('by someone' est banni). Verbe au Present Perfect : 'has been stolen'.",
        "4. 'The BFEM results will be announced by the jury tomorrow afternoon.' — Futur en will : 'will be' + participe passé régulier 'announced'.",
        "5. 'The national traffic regulations must be respected.' — Modal must : 'must be' + participe passé 'respected'."
      ]
    }
  ],
  conclusion:
    "Pour transformer une phrase au passif avec succès, n'oubliez jamais d'identifier le temps du verbe actif pour conjuguer l'auxiliaire 'TO BE' à ce même temps exact, puis ajoutez le participe passé. Omettez 'by someone / by they' dès que l'agent est anonyme."
};

// -------------------------------------------------------------------------
// LESSON 4 : REPORTED SPEECH
// -------------------------------------------------------------------------
export const LESSON_4_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-4',
  number: 'Lesson 4',
  title: 'Reported Speech (Indirect Speech)',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "Reported speech (or indirect speech) allows you to report what someone else stated, asked, or commanded without using their exact verbatim words inside quotation marks. In the Senegalese BFEM exam, reported speech questions test your knowledge of tense backshifting, pronoun adjustments, time/place marker transformations, and the specific syntax for reporting questions and imperative commands.",
  fullText: `Lesson 4: Reported Speech
Preparation for the Senegalese BFEM Examination

1. Basic Rules of Reporting
When the reporting verb is in the past tense (e.g., said, told me, explained, asked), the tenses inside the quotation marks MUST shift backward into the past. This is known as the "Backshift Rule".
• Tense Shifts Table:
  - Simple Present -> Simple Past ('I am tired' -> He said that he was tired)
  - Present Continuous -> Past Continuous ('We are studying' -> They said that they were studying)
  - Simple Past -> Past Perfect ('I lost my pen' -> He said that he had lost his pen)
  - Present Perfect -> Past Perfect ('She has arrived' -> He said that she had arrived)
  - Past Perfect -> Past Perfect (no change possible)
  - Will -> Would ('I will come tomorrow' -> She said that she would come)
  - Can -> Could ('I can speak English' -> He said that he could speak English)
  - May -> Might ('It may rain' -> She said that it might rain)
  - Must -> Had to ('You must study hard' -> The teacher said that we had to study hard)

2. Pronoun and Place / Time Adaptations
Because the context of reporting is different in space and time from when the words were initially uttered, you must adjust pronouns and time/place adverbs:
• Time and Place shifts:
  - Here -> There
  - This / These -> That / Those
  - Now -> Then / At that time
  - Today -> That day
  - Yesterday -> The day before / The previous day
  - Tomorrow -> The next day / The following day
  - Next week/month -> The following week/month
  - Last week/month -> The previous week/month
  - Ago -> Before

3. Reporting Statements: SAY vs. TELL
• 'Say' does NOT require an indirect personal object: "He said that he was ready."
• 'Tell' MUST be followed by an indirect personal object (me, him, her, us, them, Alioune): "He told ME that he was ready."

4. Reporting Questions
• Yes / No Questions: Introduce with IF or WHETHER. Never use inversion or the auxiliaries do, does, did in reported questions! The word order reverts to normal affirmative order [Subject + Verb].
  - Direct: "Do you like English?" asked the inspector.
  - Reported: The inspector asked me IF I LIKED English. (NOT: if did I like!)
  - Direct: "Have you seen Moussa?" she asked.
  - Reported: She asked IF I HAD SEEN Moussa.

• Wh- Questions (Who, What, Where, When, Why, How):
  - Keep the question word, followed immediately by [Subject + Verb].
  - Direct: "Where do you live?" the policeman asked.
  - Reported: The policeman asked WHERE I LIVED.
  - Direct: "What are you doing?" father asked.
  - Reported: Father asked WHAT I WAS DOING.

5. Reporting Orders and Commands (Imperative)
Use the infinitive structure: [Reporting verb (told / ordered / asked) + Object + TO + Base Verb] or [NOT TO + Base Verb] for negative commands.
• Direct: "Sit down immediately!" the teacher said to the students.
• Reported: The teacher ordered the students TO SIT DOWN immediately.
• Direct: "Don't make noise during the exam!" the supervisor warned.
• Reported: The supervisor warned the candidates NOT TO MAKE noise during the exam.`,
  sections: [
    {
      title: '1. The Tense Backshift Mechanism',
      content: [
        "Lorsque le verbe introducteur est au passé (ex: 'He said', 'She told me', 'The teacher asked'), tous les verbes de la citation reculent d'un cran dans le passé :",
        "• Le présent devient du passé :",
        "  - 'I work hard' -> He said that he worked hard.",
        "  - 'She is reading' -> He said that she was reading.",
        "• Le passé et le present perfect deviennent du past perfect (had + participe passé) :",
        "  - 'I saw the movie' -> He said that he had seen the movie.",
        "  - 'I have finished my homework' -> He said that he had finished his homework.",
        "• Les auxiliaires modaux subissent aussi cette translation :",
        "  - will -> would",
        "  - can -> could",
        "  - may -> might",
        "  - must -> had to"
      ]
    },
    {
      title: '2. Time and Place Shifts Reference Table',
      content: [
        "Les indicateurs spatio-temporels doivent obligatoirement être convertis pour refléter le décalage de la situation d'énonciation :"
      ],
      table: {
        headers: ['Discours Direct (Direct Speech)', 'Discours Indirect (Reported Speech)'],
        rows: [
          ['today', 'that day'],
          ['yesterday', 'the day before / the previous day'],
          ['tomorrow', 'the next day / the following day'],
          ['now', 'then / at that moment'],
          ['last night', 'the night before / the previous night'],
          ['next month', 'the following month'],
          ['two days ago', 'two days before'],
          ['here', 'there'],
          ['this / these', 'that / those']
        ]
      }
    },
    {
      title: '3. Reporting Questions and Imperative Commands: BFEM Rules',
      content: [
        "1. Les questions fermées (Yes / No questions) :",
        "Elles s'introduisent obligatoirement par IF ou WHETHER. Le mot d'ordre capital au BFEM : la phrase redevient affirmative (Sujet + Verbe) sans point d'interrogation et sans l'auxiliaire 'do / does / did' !",
        "• Exemple direct : 'Are you ready for the exam?' the teacher asked me.",
        "• Exemple indirect : The teacher asked me IF I WAS ready for the exam.",
        "2. Les questions ouvertes en Wh- (What, Where, Why, When, How) :",
        "On conserve le pronom interrogatif Wh-, suivi immédiatement du Sujet puis du Verbe conjugué :",
        "• Exemple direct : 'Where did you buy this dictionary?' Fatou asked.",
        "• Exemple indirect : Fatou asked WHERE I HAD BOUGHT that dictionary.",
        "3. Les ordres et interdictions (Impératif) :",
        "On utilise la structure : verbe introducteur + objet + TO + Verbe (ou NOT TO + Verbe) :",
        "• Exemple affirmatif : 'Open your books!' -> The teacher told us TO OPEN our books.",
        "• Exemple négatif : 'Don't touch the wire!' -> He warned me NOT TO TOUCH the wire."
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE — Report the following sentences into INDIRECT SPEECH :",
        "1. 'I am revising my English lessons today,' Cheikh said to his father.",
        "2. 'Where did you spend your last summer holidays?' the tourist asked Alioune.",
        "3. 'Do you understand the passive voice?' Mrs. Sall asked her students.",
        "4. 'Don't waste your precious time on social media!' the mother told her daughter.",
        "5. 'We will plant new trees along the avenue tomorrow,' the mayor declared.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. Cheikh told his father that he was revising his English lessons that day. — 'am revising' devient 'was revising', et 'today' devient 'that day'.",
        "2. The tourist asked Alioune where he had spent his previous summer holidays. — Question en where : structure Sujet + Verbe, 'did spend' (passé) recule en past perfect 'had spent', et 'last' devient 'previous'.",
        "3. Mrs. Sall asked her students if they understood the passive voice. — Question fermée introduite par 'if', élimination de 'do', verbe 'understand' au prétérit 'understood'.",
        "4. The mother told her daughter not to waste her precious time on social media. — Ordre négatif traduit par 'not to waste'.",
        "5. The mayor declared that they would plant new trees along the avenue the following day. — 'will' devient 'would' et 'tomorrow' devient 'the following day'."
      ]
    }
  ],
  conclusion:
    "Le discours indirect obéit à une mécanique logique rigoureuse. Vérifiez toujours trois choses avant de rendre votre copie : avez-vous reculé le temps du verbe ? Avez-vous changé les pronoms ? Et avez-vous converti les adverbes de temps comme 'yesterday' ou 'tomorrow' ?"
};

// -------------------------------------------------------------------------
// LESSON 5 : CONDITIONAL SENTENCES
// -------------------------------------------------------------------------
export const LESSON_5_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-5',
  number: 'Lesson 5',
  title: 'Conditional Sentences (Conditionals 0, 1, 2, 3 and Unless)',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "Conditional sentences express a condition and its consequence. In the BFEM exam, conditionals are a goldmine for scoring high marks if you know the exact structural equations. In this lesson, you will master Conditional Type 0 (general truths), Conditional Type 1 (probable future), Conditional Type 2 (imaginary present), and Conditional Type 3 (past regrets), as well as the essential conjunction 'UNLESS' (= IF NOT).",
  fullText: `Lesson 5: Conditional Sentences
Preparation for the Senegalese BFEM Examination

1. The 4 Conditional Structures
• Conditional Type 0 (Scientific and Universal Truths):
  - Expresses physical laws, scientific realities, or invariable outcomes.
  - Formula: IF + Simple Present, Simple Present.
  - Example: "If you heat ice, it melts." / "If water reaches 100 degrees Celsius, it boils."

• Conditional Type 1 (Real and Possible Future):
  - Used for realistic, highly probable situations in the present or future.
  - Formula: IF + Simple Present, WILL + Base Verb (Infinitive).
  - Example: "If I pass the BFEM exam with honors, my parents will buy me a brand new bicycle."
  - Reversal: "My parents will buy me a brand new bicycle if I pass the BFEM exam with honors." (No comma when 'if' is in the middle!)
  - Modals can replace will: can, must, may. Example: "If you feel sick, you should see a doctor."

• Conditional Type 2 (Unreal, Imaginary or Hypothetical Present):
  - Expresses a dream, an imaginary scenario, or an impossible condition in the present.
  - Formula: IF + Simple Past, WOULD + Base Verb (Infinitive).
  - Example: "If I were the President of the Republic, I would make education completely free for every child."
  - The Subjunctive 'WERE' Rule: In formal English and especially in BFEM exams, the verb 'to be' becomes 'WERE' for ALL pronouns (If I were, if he were, if she were, if it were).
  - Giving Advice: "If I were you, I would revise my irregular verbs immediately."

• Conditional Type 3 (Unreal Past / Regrets and Reproaches):
  - Refers to an event in the past that did NOT happen; expresses deep regret or historical counterfactuals.
  - Formula: IF + Past Perfect (had + PP), WOULD HAVE + Past Participle.
  - Example: "If he had studied much harder during the school year, he would have passed his final examination easily." (Reality: He did not study hard, and he did not pass).

2. The "UNLESS" Rule (A Classic BFEM Trap)
• 'Unless' means 'IF... NOT' (à moins que / sauf si).
• Because 'unless' already contains a negative meaning, the verb following 'unless' MUST BE in the affirmative form!
• Example transformation:
  - "If you do not work hard, you will fail the BFEM exam."
  - -> "UNLESS you work hard, you will fail the BFEM exam."
  - (NEVER say: "Unless you don't work hard" - that is a double negative and a fatal exam error!).`,
  sections: [
    {
      title: '1. The Mathematical Formulas of the 4 Conditionals',
      content: [
        "En anglais, les propositions conditionnelles fonctionnent comme des équations mathématiques strictes. Retenez par cœur ce tableau de synthèse :"
      ],
      table: {
        headers: ['Type de Conditionnel', 'Proposition subordonnée (IF-Clause)', 'Proposition principale (Main Clause)', 'Sens / Contexte'],
        rows: [
          ['Type 0', 'If + Simple Present', 'Simple Present', 'Vérités scientifiques, lois universelles'],
          ['Type 1', 'If + Simple Present', 'WILL + Base Verbale', 'Futur probable, condition réalisable'],
          ['Type 2', 'If + Simple Past (were)', 'WOULD + Base Verbale', 'Hypothèse imaginaire présente, rêve, conseil'],
          ['Type 3', 'If + Past Perfect (had + PP)', 'WOULD HAVE + Past Participle', 'Regret du passé, situation révolue non avenue']
        ]
      }
    },
    {
      title: '2. The Special Subjunctive: "If I were..."',
      content: [
        "Au conditionnel de type 2, la langue anglaise emploie traditionnellement la forme subjonctrice 'WERE' à toutes les personnes du singulier comme du pluriel :",
        "• 'If I WERE you, I would take that opportunity.' (Si j'étais toi, je saisirais cette opportunité — formule consacrée pour donner un conseil).",
        "• 'If he WERE here, he would explain everything.' (Même si 'he was' s'entend parfois dans le langage familier, 'WERE' est la seule forme académique valorisée au BFEM).",
        "• 'If Amina WERE taller, she would join the national basketball team.'"
      ]
    },
    {
      title: '3. Mastering the "UNLESS" Transformation',
      content: [
        "L'exercice de réécriture avec 'UNLESS' est systématiquement proposé dans l'épreuve de grammaire du BFEM :",
        "• Règle : UNLESS = IF ... NOT.",
        "• Méthode de transformation :",
        "  1. Remplacez 'If' par 'Unless'.",
        "  2. Supprimez la négation (don't, doesn't, didn't) dans la proposition avec 'if'.",
        "  3. Remettez le verbe à la forme affirmative correspondante (attention au -s à la 3e personne au présent !).",
        "  4. Ne touchez JAMAIS à la proposition principale !",
        "• Exemple 1 : 'If you do not wear a helmet, you will be fined.' -> 'Unless you wear a helmet, you will be fined.'",
        "• Exemple 2 : 'If it doesn't rain, the harvest will be lost.' -> 'Unless it rains, the harvest will be lost.'"
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE 1 — Put the verbs in brackets into the correct conditional form :",
        "1. If Mamadou gets his certificate, he (organize) a big celebration with his family.",
        "2. If I (have) enough money right now, I would travel to London to improve my spoken English.",
        "3. If the ambulance (arrive) earlier, the doctor would have saved the injured passenger.",
        "4. If you freeze water, it (become) solid ice.",
        "",
        "EXERCICE 2 — Rewrite using UNLESS :",
        "5. If you do not practice your English every day, you will not speak fluently.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. will organize — Conditionnel Type 1 : 'If gets' (présent) entraîne 'will + BV'.",
        "2. had — Conditionnel Type 2 : la proposition principale contient 'would travel', donc la proposition avec 'if' requiert le Simple Past.",
        "3. had arrived — Conditionnel Type 3 : la proposition principale contient 'would have saved' (regret passé), donc la condition exige le Past Perfect (had + arrived).",
        "4. becomes — Conditionnel Type 0 : vérité scientifique générale, deux verbes au présent simple.",
        "5. Unless you practice your English every day, you will not speak fluently. — Remplacement de 'If ... do not practice' par 'Unless you practice'."
      ]
    }
  ],
  conclusion:
    "Les conditionnels constituent l'une des structures les plus élégantes et prévisibles de l'anglais. Respectez scrupuleusement la balance des temps (Présent -> Will ; Passé -> Would ; Past Perfect -> Would have) et rappelez-vous que 'Unless' ne supporte jamais de négation directe."
};

// -------------------------------------------------------------------------
// LESSON 6 : RELATIVE PRONOUNS
// -------------------------------------------------------------------------
export const LESSON_6_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-6',
  number: 'Lesson 6',
  title: 'Relative Pronouns (Who, Whom, Which, That, Whose, Where, When)',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "Relative pronouns are essential connective tools that merge two simple sentences into a single, cohesive, complex sentence. They eliminate repetitive words and provide crucial precision. In the BFEM exam, students are tested on choosing the right relative pronoun based on whether the antecedent is a human, an animal, an object, a location, a time, or a possessive relationship. This lesson covers all relative pronouns with clarity and rigor.",
  fullText: `Lesson 6: Relative Pronouns
Preparation for the Senegalese BFEM Examination

1. Connecting Clauses with Relatives
Relative pronouns combine two distinct clauses into one without repeating nouns:
• Sentence A: "The young girl won the local spelling bee competition."
• Sentence B: "She lives next door to our house."
• Combined: "The young girl WHO lives next door won the local spelling bee competition."

2. Functions of Specific Relative Pronouns:
• WHO: Used strictly for human beings as SUBJECTS.
  - "The doctor WHO treated the patient at Le Dantec Hospital is very competent."
• WHOM: Used formally for human beings as OBJECTS (following a preposition or verb).
  - "The candidate to WHOM the scholarship was awarded comes from Kaolack."
• WHICH: Used for animals, inanimate objects, things, and abstract concepts.
  - "This is the heavy grammar textbook WHICH contains all the BFEM exercises."
• THAT: Can replace WHO or WHICH in defining relative clauses (common in informal and spoken English).
  - "The car THAT broke down on the motorway belongs to my uncle."
• WHOSE: Expresses POSSESSION or ownership (corresponds to 'dont' or 'à qui' in French). It replaces possessive adjectives (his, her, their, its).
  - Sentence A: "I met a hardworking student."
  - Sentence B: "His father is a renowned surgeon in Dakar."
  - Combined: "I met a hardworking student WHOSE father is a renowned surgeon in Dakar."
• WHERE: Refers to a physical place or geographical location.
  - "This is the classroom WHERE we take our English lessons."
• WHEN: Refers to a specific time or moment.
  - "July is the month WHEN candidates sit for the BFEM examination."

3. Defining vs. Non-Defining Relative Clauses (The Comma Rule)
• Defining Clauses: Give essential information necessary to identify the person or thing. NO COMMAS are used, and 'THAT' can replace who/which.
  - "The students who study regularly will pass their exam." (Only those who study).
• Non-Defining Clauses: Give extra, non-essential information about a noun that is already specifically identified. COMMAS ARE MANDATORY, and 'THAT' CANNOT be used!
  - "Gorée Island, which is located off the coast of Dakar, attracts thousands of tourists every year."`,
  sections: [
    {
      title: '1. Complete Guide to Relative Pronouns',
      content: [
        "Le choix du pronom relatif dépend exclusivement de la nature de son antécédent (le mot placé juste avant lui) et de sa fonction dans la proposition subordonnée :"
      ],
      table: {
        headers: ['Pronom relatif', 'Nature de l\'antécédent', 'Fonction dans la phrase', 'Exemple type BFEM'],
        rows: [
          ['WHO', 'Être humain', 'Sujet du verbe subordonné', 'The teacher who taught us English has retired.'],
          ['WHOM', 'Être humain', 'Complément d\'objet / après préposition', 'The girl whom we met yesterday is my cousin.'],
          ['WHICH', 'Chose, objet, animal, idée', 'Sujet ou complément', 'The computer which I bought yesterday is fast.'],
          ['THAT', 'Humain ou objet', 'Sujet ou complément (restrictif)', 'The novel that won the prize is Senegalese.'],
          ['WHOSE', 'Possesseur (humain ou chose)', 'Indique la possession (= dont le/la)', 'A girl whose father is a diplomat.'],
          ['WHERE', 'Lieu géographique', 'Complément circonstanciel de lieu', 'The library where we read our books.'],
          ['WHEN', 'Moment, date, époque', 'Complément circonstanciel de temps', '2020 was the year when the pandemic started.']
        ]
      }
    },
    {
      title: '2. The Tricky Case of WHOSE (Possession)',
      content: [
        "Le pronom 'WHOSE' est fréquemment testé au BFEM car de nombreux élèves le confondent avec 'WHO'S' (qui est la contraction de 'who is' ou 'who has').",
        "• WHOSE indique TOUJOURS une relation de parenté ou de propriété :",
        "  - 'The man whose car was stolen called the police.' (L'homme DONT la voiture a été volée).",
        "  - 'The school whose classrooms were renovated is very clean.'",
        "• Méthode pour combiner deux phrases avec WHOSE :",
        "  - Repérez l'adjectif possessif (his, her, their, its).",
        "  - Remplacez cet adjectif possessif par WHOSE.",
        "  - Exemple : 'I know the girl. Her mother won the lottery.' -> 'I know the girl WHOSE mother won the lottery.'"
      ]
    },
    {
      title: '3. Defining vs. Non-Defining Relative Clauses (Les Virgules)',
      content: [
        "Attention à l'utilisation des virgules au BFEM :",
        "• Proposition Définissante (Restrictive) : elle est indispensable au sens de la phrase. Si on la retire, la phrase perd sa clarté. Pas de virgule. On peut utiliser 'THAT'.",
        "  - 'The boy who won the race is from Saint-Louis.'",
        "• Proposition Non-Définissante (Explicative) : elle apporte une précision supplémentaire sur un nom propre ou un élément déjà unique. Les virgules sont OBLIGATOIRES avant et après. 'THAT' y est STRICTEMENT INTERDIT !",
        "  - 'Dakar, which is the capital of Senegal, is located on the Cap-Vert peninsula.' (Et non pas 'Dakar, that is...').",
        "  - 'President Léopold Sédar Senghor, who was a great poet, founded the Francophonie.'"
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE 1 — Fill in the blanks with WHO, WHICH, WHOSE, WHERE or WHEN :",
        "1. The young inventor _______ designed a solar-powered water pump received an international award.",
        "2. This is the village in Casamance _______ my grandparents were born.",
        "3. The candidate _______ registration number was missing had to contact the examination supervisor.",
        "4. We visited the famous monument _______ stands on the hill of Mamelles in Dakar.",
        "5. 1960 is the memorable year _______ Senegal achieved its full independence.",
        "",
        "EXERCICE 2 — Combine the two sentences using a suitable relative pronoun :",
        "6. Awa bought a second-hand laptop. It was manufactured in Japan.",
        "7. I met an old fisherman. His canoe was damaged by the rough sea.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. who — L'antécédent est 'the young inventor' (être humain, sujet du verbe designed).",
        "2. where — L'antécédent est 'the village' (lieu physique de naissance).",
        "3. whose — Il s'agit d'une possession ('his/her registration number was missing').",
        "4. which — L'antécédent est 'the famous monument' (chose / édifice inanimé).",
        "5. when — L'antécédent est '1960' (date / repère temporel).",
        "6. Awa bought a second-hand laptop which (that) was manufactured in Japan.",
        "7. I met an old fisherman whose canoe was damaged by the rough sea."
      ]
    }
  ],
  conclusion:
    "Maîtriser les pronoms relatifs transforme votre style d'écriture au BFEM en reliant les idées avec élégance et fluidité. Vérifiez toujours la nature de l'antécédent : humain (who), objet (which), lieu (where), temps (when) ou possession (whose)."
};

// -------------------------------------------------------------------------
// LESSON 7 : MODALS
// -------------------------------------------------------------------------
export const LESSON_7_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-7',
  number: 'Lesson 7',
  title: 'Modals and Modal Auxiliaries',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "Modals are auxiliary verbs that shade the meaning of main verbs by expressing obligation, prohibition, necessity, permission, ability, recommendation, and probability. In the BFEM exam, students must know how to choose the right modal for a communicative context and how to express the past or future equivalents of defective modals like 'must' and 'can'. This lesson covers all modal functions with complete precision.",
  fullText: `Lesson 7: Modals and Modal Auxiliaries
Preparation for the Senegalese BFEM Examination

1. Defining Modal Auxiliaries
Modals are special verbs that follow three unshakeable grammatical rules:
• Rule 1: They NEVER take an '-s' at the 3rd person singular (He must, she can, it may).
• Rule 2: They are ALWAYS followed directly by a BARE INFINITIVE (base verb without 'to'). Exception: ought to, have to.
• Rule 3: They do NOT use 'do' or 'does' to form questions or negatives (Must you go? He cannot).

2. Core Meanings and Functions:
• MUST: Expresses strong personal obligation or logical certainty.
  - Obligation: "All students must wear their official school uniform."
  - Certainty: "Look at his luxury car! He must be very wealthy."
• MUST NOT (MUSTN'T): Expresses strict PROHIBITION. It means it is completely forbidden!
  - "You mustn't cheat during the BFEM examination; otherwise, you will be expelled."
• DON'T HAVE TO / NEEDN'T: Expresses ABSENCE OF OBLIGATION (You are free not to do it, but you can if you want).
  - Compare: "You mustn't come" (It is forbidden) vs. "You don't have to come" (It is not necessary, but optional).
• SHOULD / OUGHT TO: Expresses advice, recommendations, moral obligation, or opinions.
  - "You look exhausted; you should sleep early tonight instead of browsing TikTok."
• CAN / COULD:
  - Can: Expresses physical/intellectual ability in the present ("He can speak English fluently") or informal permission ("Can I borrow your ruler?").
  - Could: Expresses ability in the past ("When I was seven, I could swim across the river") or polite requests ("Could you please hand me that dictionary?").
• MAY / MIGHT:
  - May: Formal permission ("May I come in, sir?") or possibility ("It may rain later").
  - Might: Remote or weak possibility ("If he studies, he might get a distinction").

3. Past Equivalents of Defective Modals:
Because modals have no past tense forms of their own, they use replacement verbs:
• Must -> HAD TO in the past: "Yesterday, I had to walk five kilometers to reach the examination center."
• Can -> WAS / WERE ABLE TO in the past for specific achievements: "The firefighter was able to rescue the trapped child."
• Will be able to (Future ability): "After finishing this course, you will be able to pass the BFEM easily."`,
  sections: [
    {
      title: '1. The Universal Rules of Modal Auxiliaries',
      content: [
        "Les auxiliaires modaux (can, could, must, should, may, might, will, would) se distinguent des verbes ordinaires par trois propriétés fondamentales :",
        "1. Ils sont strictement invariables : jamais de '-s' à la 3e personne du singulier (He CAN, She MUST, It MAY).",
        "2. Ils sont toujours suivis d'une base verbale (infinitif sans 'to') : 'He can speak' (et JAMAIS 'He can to speak').",
        "3. Ils portent eux-mêmes la négation et forment directement l'interrogation sans l'auxiliaire do/does : 'Must I sign here?' / 'She cannot come.'"
      ]
    },
    {
      title: '2. Complete Meaning and Nuance Matrix',
      content: [
        "Voici le tableau de correspondance entre l'intention communicative et le modal approprié à choisir au BFEM :"
      ],
      table: {
        headers: ['Valeur / Intention', 'Modal recommandé', 'Exemple contextualisé BFEM'],
        rows: [
          ['Obligation stricte', 'MUST / HAVE TO', 'Candidates must present their identity cards before the exam.'],
          ['Interdiction formelle', 'MUST NOT (MUSTN\'T)', 'Students mustn\'t bring mobile phones into the exam room.'],
          ['Absence d\'obligation', 'DON\'T HAVE TO / NEEDN\'T', 'Tomorrow is Sunday; we don\'t have to wake up early.'],
          ['Conseil / Recommandation', 'SHOULD / OUGHT TO', 'You should revise your irregular verbs every evening.'],
          ['Capacité / Compétence', 'CAN (présent) / COULD (passé)', 'Mariama can translate this difficult English text into Wolof.'],
          ['Demande polie', 'COULD / WOULD', 'Could you please explain this grammar rule once again?'],
          ['Permission formelle', 'MAY', 'May I go to the restroom, please Sir?'],
          ['Probabilité / Incertitude', 'MAY / MIGHT', 'The sky is overcast; it might rain over Dakar this afternoon.']
        ]
      }
    },
    {
      title: '3. Classic BFEM Trap: Mustn\'t vs. Don\'t have to',
      content: [
        "La confusion entre l'interdiction et l'absence d'obligation est l'une des erreurs les plus fréquentes au BFEM :",
        "• MUSTN'T = C'est STRICTEMENT INTERDIT, illégal ou dangereux.",
        "  - 'You mustn't drive through a red light.' (Interdiction absolue du code de la route).",
        "  - 'You mustn't smoke in school.'",
        "• DON'T HAVE TO (ou NEEDN'T) = Ce n'est PAS OBLIGATOIRE, tu as le choix.",
        "  - 'You don't have to buy this book; the school library lends it for free.' (Tu n'es pas obligé de l'acheter, mais rien ne t'en empêche)."
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE — Complete the sentences with MUST, MUSTN'T, SHOULD, CAN, or DON'T HAVE TO :",
        "1. You _______ eat so much junk food; it is very detrimental to your health.",
        "2. Candidates _______ arrive at the examination center at least 30 minutes before 8:00 AM.",
        "3. In Senegal, people _______ pay to walk on the public beach; it is open to everyone.",
        "4. You _______ use a pencil to write your final BFEM composition; use a blue or black pen instead.",
        "5. Amina is very gifted in languages; she _______ speak French, English, and Spanish fluently.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. should not (shouldn't) — Il s'agit d'un conseil médical et d'hygiène de vie.",
        "2. must — Obligation réglementaire impérative pour les examens nationaux.",
        "3. don't have to — Absence d'obligation (l'accès est libre et gratuit).",
        "4. mustn't — Interdiction formelle du règlement officiel de l'examen.",
        "5. can — Capacité intellectuelle et compétence linguistique avérée."
      ]
    }
  ],
  conclusion:
    "Chaque modal apporte une nuance psychologique ou légale précise. Au BFEM, lisez toujours l'intégralité du contexte pour déterminer s'il s'agit d'une interdiction légale (mustn't), d'une absence d'obligation (don't have to), d'une obligation (must) ou d'un conseil bienveillant (should)."
};

// -------------------------------------------------------------------------
// LESSON 8 : COMPARATIVES & SUPERLATIVES
// -------------------------------------------------------------------------
export const LESSON_8_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-8',
  number: 'Lesson 8',
  title: 'Comparatives & Superlatives',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "Comparing people, cities, objects, and situations is an essential skill in English writing and reading comprehension. In this lesson, you will master the rules of comparatives of superiority, equality, and inferiority, the formation of superlatives for both short and long adjectives, irregular adjective forms, and specific comparisons using nouns and adverbs.",
  fullText: `Lesson 8: Comparatives & Superlatives
Preparation for the Senegalese BFEM Examination

1. Comparative Structures (Comparing Two Items)
• Short Adjectives (1 syllable or 2 syllables ending in -y):
  - Rule: Add '-er' + THAN.
  - If ending in consonant-vowel-consonant: double the final consonant (big -> bigger, hot -> hotter).
  - If ending in -y: change 'y' to 'i' and add '-er' (heavy -> heavier than, happy -> happier than, healthy -> healthier than).
  - Examples:
    * "The weather in Saint-Louis is often cooler than the weather in Kaolack."
    * "A bicycle is slower than a motorbike."

• Long Adjectives (2 syllables or more):
  - Rule: MORE + adjective + THAN.
  - Examples:
    * "The English exam is more interesting than the mathematics quiz."
    * "Living in Dakar is more expensive than living in Tambacounda."

• Comparative of Equality (Same degree):
  - Rule: AS + adjective + AS (aussi ... que).
  - Negative: NOT AS + adjective + AS or NOT SO + adjective + AS (pas aussi ... que).
  - Example: "Fatou is as hardworking as her brother." / "My phone is not as modern as yours."

• Comparative of Inferiority:
  - Rule: LESS + adjective + THAN (moins ... que).
  - Example: "This exercise is less difficult than the previous one."

2. Superlative Structures (Comparing Three or More Items)
• Short Adjectives:
  - Rule: THE + adjective + '-est'.
  - Examples:
    * "Ousmane is the tallest student in our entire classroom."
    * "Lake Retba (Pink Lake) is one of the most famous tourist sites."

• Long Adjectives:
  - Rule: THE MOST + adjective.
  - Example: "This was the most difficult challenge I have ever faced in middle school."

3. Irregular Adjectives (Must be memorized by heart!):
• Good -> Better than -> The Best
• Bad -> Worse than -> The Worst
• Far -> Farther / Further than -> The Farthest / The Furthest
• Little -> Less than -> The Least
• Much / Many -> More than -> The Most

4. Double Comparatives and Parallel Increase (The more... the more...):
• Expresses that two things change proportionally:
  - "The more you read English books, the better your vocabulary becomes."
  - "The harder you study, the higher your BFEM score will be."`,
  sections: [
    {
      title: '1. Comparative of Superiority: Short vs. Long Adjectives',
      content: [
        "En anglais, la distinction fondamentale repose sur la longueur phonétique de l'adjectif :",
        "• Adjectifs courts (1 syllabe, ou 2 syllabes terminées par -y) :",
        "  - On suffixe '-er' suivi de 'THAN' : tall -> taller than ; fast -> faster than.",
        "  - Règle orthographique : si l'adjectif d'une syllabe se termine par Consonne-Voyelle-Consonne, on double la consonne finale : hot -> hotter than ; big -> bigger than.",
        "  - Adjectifs en -y : le 'y' devient 'i' : easy -> easier than ; noisy -> noisier than.",
        "• Adjectifs longs (2 syllabes ou plus) :",
        "  - On ne touche jamais à l'adjectif ! On place 'MORE' devant et 'THAN' derrière :",
        "  - dangerous -> more dangerous than ; comfortable -> more comfortable than ; expensive -> more expensive than."
      ]
    },
    {
      title: '2. Irregular Adjectives and Superlative Rules',
      content: [
        "Les adjectifs irréguliers sont au cœur des épreuves du BFEM. Il faut impérativement les retenir :"
      ],
      table: {
        headers: ['Adjectif de base', 'Comparatif de supériorité', 'Superlatif absolu', 'Sens en français'],
        rows: [
          ['Good', 'Better than', 'The Best', 'Bon -> Meilleur -> Le meilleur'],
          ['Bad', 'Worse than', 'The Worst', 'Mauvais -> Pire -> Le pire'],
          ['Far', 'Farther / Further than', 'The Farthest / Furthest', 'Loin -> Plus loin -> Le plus loin'],
          ['Little', 'Less than', 'The Least', 'Peu -> Moins -> Le moins'],
          ['Much / Many', 'More than', 'The Most', 'Beaucoup -> Plus -> Le plus']
        ]
      }
    },
    {
      title: '3. Comparative of Equality and the Double Comparative',
      content: [
        "1. L'égalité et l'infériorité :",
        "• Égalité : 'AS + Adjectif + AS' : 'Moussa is as clever as his sister.'",
        "• Négation de l'égalité : 'NOT AS + Adjectif + AS' : 'A village is not as crowded as a capital city.'",
        "2. La structure de progression proportionnelle (The more... the more...) :",
        "Cette tournure élégante valorise énormément la rédaction d'un élève au BFEM :",
        "• 'The more you practice, the more confident you feel.' (Plus tu pratiques, plus tu te sens en confiance).",
        "• 'The earlier you arrive, the better seats you get.'"
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE — Complete with the correct comparative or superlative form :",
        "1. Dakar is much (populated) _______ any other city in Senegal.",
        "2. Mount Assirik in Niokolo-Koba is not (high) _______ Mount Everest.",
        "3. Cheikh thinks mathematics is (difficult) _______ than history.",
        "4. This is definitely (good) _______ essay written by a 3ème student this year.",
        "5. The flood this year was (bad) _______ than the one we suffered in 2012.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. more populated than — Adjectif long (4 syllabes), comparatif avec 'more ... than'.",
        "2. as high as — Comparaison d'égalité négative 'not as high as'.",
        "3. more difficult — Adjectif long, comparatif de supériorité.",
        "4. the best — Superlatif irrégulier de 'good' ('the best essay').",
        "5. worse — Comparatif irrégulier de 'bad' ('worse than')."
      ]
    }
  ],
  conclusion:
    "Pour comparer sans faute au BFEM : comptez les syllabes (court = -er than / the -est ; long = more ... than / the most ...), mémorisez good/better/best et bad/worse/worst, et n'oubliez jamais 'than' après un comparatif."
};

// -------------------------------------------------------------------------
// LESSON 9 : LINK WORDS & CONNECTORS
// -------------------------------------------------------------------------
export const LESSON_9_ANGLAIS_3EME: LessonContent = {
  id: 'anglais-3eme-lecon-9',
  number: 'Lesson 9',
  title: 'Link Words & Connectors (Transition Words)',
  subject: 'Anglais',
  classLevel: '3ème',
  introduction:
    "Transition words and logical connectors are the architectural backbone of written English. In Section 3 (Writing / Essay) and Section 2 (Language) of the BFEM exam, using varied and accurate connectors transforms a simple list of sentences into a coherent, persuasive, and beautifully structured piece of argumentation. This lesson classifies connectors by their rhetorical functions and provides practical templates for your exam essays.",
  fullText: `Lesson 9: Link Words & Connectors
Preparation for the Senegalese BFEM Examination

1. The Importance of Transition Words
Connectors link clauses, sentences, and paragraphs together. Examiners reward students who demonstrate the ability to organize thoughts logically using appropriate transition words rather than relying solely on repetitive words like 'and' or 'but'.

2. Classifying Connectors by Function:
• Addition (Adding supplementary information or arguments):
  - Words: And, also, besides, furthermore, moreover, in addition, as well as, what is more, not only... but also.
  - Examples:
    * "Studying English expands your cultural horizons; moreover, it opens up international employment opportunities."
    * "She speaks French fluently, in addition to English."

• Contrast and Concession (Showing opposition or unexpected results):
  - Words: But, however, although, even though, though, despite, in spite of, on the other hand, whereas, yet, nevertheless.
  - Important Grammar Rules:
    * Although / Even though + [Subject + Verb]: "Although he faced many economic hardships in the city, he never gave up his academic dreams."
    * Despite / In spite of + [Noun or Verb-ing]: "Despite the heavy rainfall, the football match continued." / "In spite of being tired, she completed her homework."
    * However + [Comma at the start of a sentence]: "He studied with dedication. However, he failed the driving test."

• Cause and Reason (Explaining why something happened):
  - Words: Because, since, as, due to, because of, owing to.
  - Rules:
    * Because / Since / As + [Subject + Verb]: "He succeeded because he worked hard."
    * Because of / Due to + [Noun phrase]: "The flight was delayed because of the dense dust storm."

• Effect, Consequence, and Result (Showing outcomes):
  - Words: Therefore, consequently, as a result, so, thus, that is why.
  - Example: "She revised all her grammar notes thoroughly; therefore, she scored 20/20 in the mock exam."

• Purpose and Goal (Explaining intention):
  - Words: In order to + BV, so as to + BV, so that + [Subject + modal (can/could/will/would)].
  - Example: "He wakes up early every morning in order to revise before school." / "She bought a laptop so that she could conduct online research."

• Chronological Sequencing and Conclusion:
  - Sequencing: First, first of all, to begin with, secondly, then, after that, next, finally.
  - Concluding: In conclusion, to sum up, in a nutshell, all in all, on the whole.`,
  sections: [
    {
      title: '1. Functional Taxonomy of Connectors',
      content: [
        "Un candidat qui maîtrise les connecteurs logiques se démarque immédiatement lors de la correction de l'épreuve de rédaction du BFEM :"
      ],
      table: {
        headers: ['Fonction rhétorique', 'Connecteurs clés', 'Règle grammaticale d\'usage', 'Exemple type BFEM'],
        rows: [
          ['Addition', 'Furthermore, Moreover, In addition', 'Suivis d\'une virgule en début de phrase', 'Moreover, education reduces poverty.'],
          ['Concession', 'Although, Even though', 'Suivis d\'une proposition complète (S + V)', 'Although it was late, he kept studying.'],
          ['Opposition (Nom)', 'Despite, In spite of', 'Suivis d\'un Nom ou Verbe en -ing', 'In spite of the rain, we arrived on time.'],
          ['Cause (Phrase)', 'Because, Since, As', 'Suivis d\'une proposition (S + V)', 'Since you are ready, let us start.'],
          ['Cause (Nom)', 'Because of, Due to', 'Suivis d\'un groupe nominal', 'The match was canceled due to bad weather.'],
          ['Conséquence', 'Therefore, Consequently, As a result', 'En début de phrase avec virgule', 'He trained hard; therefore, he won.'],
          ['But / Intention', 'In order to, So as to (+ BV)', 'Suivis de la base verbale', 'She saved money so as to buy a laptop.'],
          ['Conclusion', 'In conclusion, To sum up', 'Pour clore le paragraphe final', 'In conclusion, peace requires solidarity.']
        ]
      }
    },
    {
      title: '2. The Golden Rule: Although vs. Despite',
      content: [
        "L'un des pièges récurrents au BFEM consiste à tester la différence entre 'Although' et 'Despite' :",
        "• ALTHOUGH / EVEN THOUGH s'utilise devant un Sujet + Verbe conjugué :",
        "  - 'Although the weather was extremely hot, the farmers continued their work in the fields.'",
        "• DESPITE / IN SPITE OF s'utilise impérativement devant un NOM ou un VERBE en -ING :",
        "  - 'Despite the extreme heat, the farmers continued their work.'",
        "  - 'In spite of working long hours, he did not earn enough money.'",
        "  - Note : On peut dire 'Despite the fact that + S + V', mais 'Despite + S + V' sans 'the fact that' est une faute éliminatoire !"
      ]
    },
    {
      title: '3. Model Essay Paragraph using Transition Words',
      content: [
        "Voici un exemple parfait de paragraphe argumentatif rédigé pour le BFEM illustrant l'intégration harmonieuse des connecteurs :",
        "« First of all, learning a foreign language like English is essential for young Senegalese students. Not only does it allow us to communicate with people across the globe, but it also provides access to high-quality academic research on the internet. Furthermore, English proficiency is a prerequisite for most international scholarships. However, many students in rural areas still lack qualified teachers and modern learning materials. Therefore, the government should invest heavily in digital education in order to bridge this inequality. In conclusion, mastering English is a key passport to a brighter professional future. »"
      ]
    },
    {
      title: '4. BFEM Practice Exercises with Step-by-Step Solutions',
      content: [
        "EXERCICE — Choose the correct connector (Although, Because, Therefore, Despite, In order to) :",
        "1. _______ the bus broke down on the road to Mbour, we arrived at the festival before sunset.",
        "2. Fatou studied late into the night _______ pass her final English exam.",
        "3. _______ his serious illness, the old fisherman refused to abandon his daily work at sea.",
        "4. The applicant lacked the necessary computer skills; _______, he was not hired by the company.",
        "5. Many children drop out of school _______ their parents cannot afford basic supplies.",
        "",
        "CORRIGÉ DÉTAILLÉ & JUSTIFICATIONS :",
        "1. Although — Suivi d'une proposition complète avec Sujet ('the bus') et Verbe ('broke down').",
        "2. in order to — Exprime le but suivi d'une base verbale ('pass').",
        "3. Despite — Suivi d'un groupe nominal ('his serious illness').",
        "4. therefore — Exprime la conséquence logique de la phrase précédente.",
        "5. because — Exprime la cause suivie d'une proposition sujet-verbe ('their parents cannot afford')."
      ]
    }
  ],
  conclusion:
    "Les mots de liaison sont les piliers de votre expression écrite au BFEM. Utilisez-les avec modération mais pertinence pour structurer vos paragraphes, marquer la logique de votre raisonnement et obtenir la note maximale en 'Writing'."
};
