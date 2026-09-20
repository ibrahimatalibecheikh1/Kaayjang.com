import { LessonContent } from './courses';

// =========================================================================
// COURS D'ANGLAIS - CLASSE DE 4ÈME (PROGRAMME OFFICIEL COMPLET - 30 LEÇONS)
// PARTIE 2 : SYSTÈME DU PASSÉ, DU FUTUR ET STRUCTURES INTERROGATIVES (LEÇONS 9 À 15)
// TEXTES EXHAUSTIFS, DÉTAILLÉS EN FRANÇAIS, RÈGLES CLAIRES, TABLEAUX,
// SCHÉMAS D'APPRENTISSAGE ET EXERCICES D'APPLICATION RÉSCLUS AVEC CORRIGÉS
// =========================================================================

export const LESSON_9_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-9',
  number: 'Lesson 9',
  title: 'Past Simple and Irregular Verbs (Prétérit Simple et Verbes Irréguliers)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Le prétérit simple (Past Simple) est le temps narratif par excellence de la langue anglaise. Il sert à raconter des actions ou des événements totalement achevés, situés dans un passé révolu et daté (hier, l'année dernière, en 1960). Pour maîtriser ce temps, l'élève de 4ème doit comprendre la distinction essentielle entre les verbes réguliers (qui prennent la terminaison -ed) et les verbes irréguliers (qui possèdent une forme passée propre à mémoriser), ainsi que l'utilisation indispensable de l'auxiliaire DID en négation et en question.",
  fullText: `Lesson 9: Past Simple and Irregular Verbs

Introduction :
Le prétérit simple décrit des actions complètement terminées dans le passé, sans lien direct avec le moment présent.

1. Detailed Grammatical & Conceptual Analysis
A. Les Verbes Réguliers :
Pour former le prétérit des verbes réguliers, on ajoute '-ed' ou '-d' à la base verbale :
- play -> played, visit -> visited, watch -> watched.
- Verbes terminés par un -e : arrive -> arrived, live -> lived.
- Verbes en consonne + y : le 'y' devient -ied -> study -> studied, cry -> cried.
- Verbes C-V-C d'une syllabe : on double la consonne finale -> stop -> stopped, travel -> travelled (UK).

B. Les Verbes Irréguliers (Irregular Verbs) :
Ces verbes ne prennent jamais de '-ed' ! Ils possèdent une forme historique spécifique qui correspond à la deuxième colonne des listes officielles :
- be -> was/were, go -> went, see -> saw, buy -> bought, have -> had, do -> did, make -> made, write -> wrote, come -> came, take -> took, give -> gave.

C. Formes Négative et Interrogative avec l'auxiliaire DID :
- Négation : SUJET + DID NOT (DIDN'T) + BASE VERBALE PURE :
  • 'She did not buy the red dress.' (Le verbe buy revient à sa base verbale, pas de bought !).
- Interrogation : DID + SUJET + BASE VERBALE ?
  • 'Did you visit London last summer?' (et non 'Did you visited?').

2. Practical Rules & Structural Mechanics
- Mots déclencheurs du passé daté : Yesterday (hier), Last week / last year (la semaine / l'année passée), In 2010 (en 2010), Ago (il y a : two days ago).
- La règle d'or : Quand 'DID' ou 'DIDN'T' est présent, le verbe se met TOUJOURS à l'infinitif sans to (base verbale).

3. Contextual Examples & Practice Applications
- 'We visited London last summer and saw the Big Ben.'
- 'She did not buy the red dress because she forgot her wallet at home yesterday morning.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Verbes Réguliers & Irréguliers)',
      content: [
        "Quand utilise-t-on le Prétérit Simple en 4ème ?",
        "• Pour toute action passée, coupée du présent, dont le moment est précisé ou sous-entendu.",
        "• Mots déclencheurs majeurs : yesterday, last night, last year, three days ago, in 1998, when I was a child.",
        "A. Formation des verbes réguliers :",
        "• Ajout classique de -ed : work -> worked, clean -> cleaned.",
        "• Verbe fini par 'e' : simple ajout de 'd' : dance -> danced, like -> liked.",
        "• Verbe fini par consonne + y : 'y' devient 'ied' : marry -> married, tidy -> tidied.",
        "• Verbe C-V-C (Consonne-Voyelle-Consonne) : doublement de consonne : stop -> stopped, plan -> planned.",
        "B. Les verbes irréguliers fondamentaux du programme de 4ème :",
        "• Go -> went ; See -> saw ; Eat -> ate ; Buy -> bought ; Write -> wrote ; Speak -> spoke ; Find -> found ; Leave -> left ; Take -> took ; Bring -> brought ; Meet -> met ; Read -> read (/red/)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Négations, Questions & Phonétique)',
      content: [
        "A. La règle d'or de l'auxiliaire DID :",
        "• À la forme négative et interrogative, l'auxiliaire 'DID' porte déjà la marque du passé :",
        "  - Phrase affirmative : 'I went to school.' (Verbe au prétérit).",
        "  - Phrase négative : 'I didn't GO to school.' (Retour obligatoire à la Base Verbale 'go').",
        "  - Phrase interrogative : 'Did you GO to school?' (Retour obligatoire à la Base Verbale 'go').",
        "B. Prononciation de la terminaison -ED (3 sons possibles à l'oral) :",
        "1. Prononcé /ɪd/ après les sons /t/ ou /d/ : visit -> visited, start -> started, need -> needed.",
        "2. Prononcé /t/ après les consonnes sourdes (/p/, /k/, /s/, /ʃ/, /tʃ/) : wash -> washed, look -> looked, laugh -> laughed.",
        "3. Prononcé /d/ dans tous les autres cas : play -> played, love -> loved, rain -> rained."
      ],
      table: {
        headers: ['Forme', 'Structure syntaxique', 'Verbe Régulier (Watch)', 'Verbe Irrégulier (Go)'],
        rows: [
          ['Affirmative', 'Sujet + V-ed / Verbe Irrégulier', 'She watched a movie yesterday.', 'She went to the market yesterday.'],
          ['Négative', 'Sujet + DIDN\'T + Base Verbale', 'She didn\'t watch a movie.', 'She didn\'t go to the market.'],
          ['Interrogative', 'DID + Sujet + Base Verbale ?', 'Did she watch a movie?', 'Did she go to the market?'],
          ['Short Answer (+)', 'Yes, pronom + did', 'Yes, she did.', 'Yes, she did.'],
          ['Short Answer (-)', 'No, pronom + didn\'t', 'No, she didn\'t.', 'No, she didn\'t.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Traps',
      content: [
        "Exemples concrets :",
        "• 'We visited London last summer and saw the Big Ben.'",
        "• 'She did not buy the red dress because she forgot her wallet at home yesterday morning.'",
        "• 'Did you sleep well last night? Yes, I did.'",
        "Erreurs classiques à éviter aux examens :",
        "❌ 'I didn't saw him' -> ✅ 'I didn't see him' (Le verbe doit être à la base verbale après didn't).",
        "❌ 'Did she went to Dakar?' -> ✅ 'Did she go to Dakar?'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Conjugaison des Verbes au Prétérit Simple',
          content: [
            "Consigne : Mettez les verbes entre parenthèses au Prétérit Simple à la forme indiquée (+, -, ?) :",
            "1. Last Sunday, we (visit) ... the historical museum of Gorée Island.",
            "2. Fatou (not / go) ... to school yesterday because she (be) ... ill.",
            "3. (you / see) ... the football match on television last night?",
            "4. Ousmane (buy) ... a new dictionary and (write) ... his name on it.",
            "5. Why (they / leave) ... the party so early last Saturday?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'visited' -> Verbe régulier visit + -ed (se prononce /ɪd/).",
            "2. 'didn't go / was' -> Négation avec didn't + base verbale go ; pour le verbe be à la 3e personne du singulier = was.",
            "3. 'Did you see' -> Question passée : Did + sujet you + base verbale see.",
            "4. 'bought / wrote' -> Deux verbes irréguliers à l'affirmatif : buy -> bought, write -> wrote.",
            "5. 'did they leave' -> Question Wh- : Why + did + sujet they + base verbale leave."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Transformation Affirmative ➔ Négative et Interrogative',
          content: [
            "Consigne : Transformez chaque phrase affirmative à la forme négative, puis à la forme interrogative :",
            "1. Alioune caught the 8 o'clock train this morning.",
            "2. They played basketball after school yesterday.",
            "3. She found her lost mobile phone in her bedroom."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. Négative : 'Alioune didn't catch the 8 o'clock train this morning.' | Interrogative : 'Did Alioune catch the 8 o'clock train this morning?' (Catch est la base verbale de caught).",
            "2. Négative : 'They didn't play basketball after school yesterday.' | Interrogative : 'Did they play basketball after school yesterday?' (Play perd son -ed).",
            "3. Négative : 'She didn't find her lost mobile phone in her bedroom.' | Interrogative : 'Did she find her lost mobile phone in her bedroom?' (Find est la base verbale de found)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Architecture du Prétérit Simple',
    root: 'PAST SIMPLE TENSE',
    branches: [
      {
        name: 'Forme Affirmative',
        subtitle: 'Types de verbes',
        items: ['Réguliers : Base Verbale + ED (played, visited)', 'Irréguliers : 2ème colonne à mémoriser (went, saw)', 'Mêmes formes pour tous les pronoms (sauf BE)']
      },
      {
        name: 'Forme Négative (-)',
        subtitle: 'Auxiliaire DIDN\'T',
        items: ['Sujet + DIDN\'T + Base Verbale', 'Le verbe perd son -ed ou sa forme passée', 'Ex: She didn\'t go (et non didn\'t went)']
      },
      {
        name: 'Forme Interrogative (?)',
        subtitle: 'Auxiliaire DID',
        items: ['DID + Sujet + Base Verbale ?', 'Short answers : Yes, I did / No, I didn\'t', 'Repères temporels : yesterday, last week, ago']
      }
    ]
  },
  conclusion:
    "En conclusion, le prétérit simple est le pilier de toute narration en anglais. Retenez la règle suprême : utilisez les verbes en -ed ou irréguliers uniquement à la forme affirmative ; dès que DID ou DIDN'T intervient, le verbe reprend immuablement sa base verbale."
};

export const LESSON_10_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-10',
  number: 'Lesson 10',
  title: 'Past Continuous (Past BE + -ING) and Interrupted Actions',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Le prétérit continu (Past Continuous ou Past BE + -ING) sert à décrire une action qui était en cours de déroulement à un moment précis du passé. Il est le temps idéal pour camper le décor d'une histoire ou poser une toile de fond narrative. En classe de 4ème, il est particulièrement associé au prétérit simple pour exprimer l'interruption d'une action longue par un événement soudain, grâce aux connecteurs 'WHEN' et 'WHILE'. Cette leçon vous en donne les clés complètes.",
  fullText: `Lesson 10: Past Continuous (Past BE + -ING)

Introduction :
Le passé continu décrit une action en progression dans le passé ou une scène d'arrière-plan interrompue par un événement ponctuel.

1. Detailed Grammatical & Conceptual Analysis
A. Formation :
SUJET + BE au prétérit (WAS / WERE) + VERBE-ING :
- I was sleeping / He was reading / She was cooking / It was raining.
- We were playing / You were watching / They were working.
Rappel : WAS pour I, He, She, It ; WERE pour We, You, They.

B. Les emplois fondamentaux :
1. Action continue à une heure précise du passé : 'Yesterday at 8 pm, I was doing my homework.'
2. Décor et ambiance d'un récit : 'The birds were singing and the sun was shining when we woke up.'
3. Deux actions longues et simultanées dans le passé (souvent avec WHILE) : 'While my mother was cooking, my father was reading the newspaper.'

2. Practical Rules & Structural Mechanics
A. L'interaction Past Continuous + Past Simple avec WHEN et WHILE :
C'est la règle d'or des examens de 4ème :
- L'action longue en cours se met au Past Continuous (introduite par WHILE).
- L'action brève et soudaine qui vient interrompre se met au Past Simple (introduite par WHEN).
Schéma 1 : I was sleeping peacefully (longue) WHEN the alarm clock rang (brève et soudaine).
Schéma 2 : WHILE they were studying in the library (longue), it started to rain (brève).

3. Contextual Examples & Practice Applications
- 'I was sleeping peacefully when the loud alarm clock suddenly rang.'
- 'While they were studying in the library, it started to snow outside.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Formation & Emplois)',
      content: [
        "Structure du Prétérit Continu :",
        "• SUJET + AUXILIAIRE WAS / WERE + VERBE-ING.",
        "• Accord de l'auxiliaire BE au passé :",
        "  - I, He, She, It -> WAS (Négatif : WASN'T).",
        "  - We, You, They -> WERE (Négatif : WEREN'T).",
        "• Valeur communicative essentielle :",
        "  - Décrit une action en cours de déroulement à un instant défini du passé ('At 4 o'clock yesterday, they were travelling to Saint-Louis').",
        "  - Pose le décor descriptif d'une scène d'ouverture dans une narration."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (La Règle WHEN vs WHILE)',
      content: [
        "La combinaison classique de narration en 4ème :",
        "• Action longue en arrière-plan = PAST CONTINUOUS (souvent après WHILE).",
        "• Action courte qui surgit et interrompt = PAST SIMPLE (souvent après WHEN).",
        "Formules types à retenir :",
        "• [Past Continuous] + WHEN + [Past Simple] : 'We were having dinner when the electricity went off.'",
        "• WHILE + [Past Continuous], [Past Simple] : 'While I was walking in the street, I met my English teacher.'"
      ],
      table: {
        headers: ['Type d\'action', 'Temps requis', 'Connecteur usuel', 'Exemple type en contexte'],
        rows: [
          ['Action longue en cours', 'Past Continuous (was/were + -ing)', 'WHILE (pendant que)', 'While she was doing her homework...'],
          ['Action courte d\'interruption', 'Past Simple (-ed ou irrégulier)', 'WHEN (quand / lorsque)', '...when the telephone suddenly rang.'],
          ['Deux actions longues simultanées', 'Past Continuous + Past Continuous', 'WHILE', 'While Alioune was reading, Fatou was drawing.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Error Correction',
      content: [
        "Exemples complets du programme officiel :",
        "• 'I was sleeping peacefully when the loud alarm clock suddenly rang.'",
        "• 'While they were studying in the library, it started to snow outside.'",
        "• 'What were you doing yesterday at 7 pm? I was helping my mother.'",
        "Piège classique :",
        "❌ 'When I was walking, the phone was ringing' -> ✅ 'While I was walking, the phone rang' (la sonnerie est un événement bref d'interruption au prétérit simple)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Conjuguer au Past Simple ou Past Continuous',
          content: [
            "Consigne : Complétez les phrases avec le temps qui convient (Past Simple ou Past Continuous) pour chaque verbe :",
            "1. While the teacher (explain) ... the grammar rule, a bird (fly) ... into the classroom.",
            "2. We (play) ... football in the courtyard when it (start) ... to rain heavily.",
            "3. Yesterday at 9 pm, Moussa (watch) ... the news on television.",
            "4. She (drop) ... her glass while she (wash) ... the dishes in the kitchen."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'was explaining / flew' -> L'explication du professeur est l'action longue en cours (was explaining) ; l'entrée de l'oiseau est l'événement ponctuel bref d'interruption (Past Simple fly -> flew).",
            "2. 'were playing / started' -> Le match est l'action longue continue (were playing) ; le début de la pluie est l'interruption soudaine (started).",
            "3. 'was watching' -> Action en cours à une heure précise du passé ('at 9 pm') -> Past Continuous.",
            "4. 'dropped / was washing' -> Faire tomber le verre est l'action brève (dropped) ; faire la vaisselle après while est l'action longue (was washing)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Fusion de Phrases avec WHEN ou WHILE',
          content: [
            "Consigne : Reliez les deux propositions en une seule phrase cohérente en utilisant WHEN ou WHILE :",
            "1. I was crossing the street. A car stopped in front of me.",
            "2. Amina was cooking lunch. Her brother arrived from school."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'I was crossing the street when a car stopped in front of me.' (ou : 'While I was crossing the street, a car stopped in front of me.')",
            "2. 'Amina was cooking lunch when her brother arrived from school.' (ou : 'While Amina was cooking lunch, her brother arrived from school.')"
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Interaction Past Continuous et Past Simple',
    root: 'PAST CONTINUOUS',
    branches: [
      {
        name: 'Formation Syntaxique',
        subtitle: 'WAS / WERE + -ING',
        items: ['I, He, She, It : WAS + V-ing', 'We, You, They : WERE + V-ing', 'Négation : wasn\'t / weren\'t']
      },
      {
        name: 'Action Interrompue',
        subtitle: 'Règle WHEN vs WHILE',
        items: ['Action longue : Past Continuous (WHILE)', 'Action brève d\'interruption : Past Simple (WHEN)', 'Ex: I was reading when he arrived']
      },
      {
        name: 'Actions Simultanées',
        subtitle: 'Deux actions en cours',
        items: ['Past Continuous + Past Continuous', 'Reliées par WHILE', 'Ex: While she was singing, he was playing']
      }
    ]
  },
  conclusion:
    "En conclusion, le prétérit continu donne du relief à vos récits en anglais : il installe le décor temporel d'une action en développement, sur laquelle vient frapper l'action soudaine et ponctuelle du prétérit simple."
};

export const LESSON_11_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-11',
  number: 'Lesson 11',
  title: 'Present Perfect with For, Since, and Ago',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Le Present Perfect (HAVE / HAS + Participe Passé) est l'un des temps les plus importants et les plus spécifiques de la langue anglaise. Sa fonction principale est de jeter une passerelle entre le passé et le présent : il s'emploie pour une action commencée dans le passé qui continue au moment présent, ou pour un résultat passé dont les effets sont visibles aujourd'hui. Cette leçon détaille sa formation et analyse la distinction capitale entre FOR (durée), SINCE (point de départ) et AGO (réservé au prétérit simple).",
  fullText: `Lesson 11: Present Perfect with For, Since, and Ago

Introduction :
Le Present Perfect relie une expérience ou une situation passée au moment présent.

1. Detailed Grammatical & Conceptual Analysis
A. Formation du Present Perfect :
SUJET + AUXILIAIRE HAVE / HAS + PARTICIPE PASSÉ DU VERBE :
- I / You / We / They HAVE visited / worked / seen.
- He / She / It HAS visited / worked / seen.
Rappel : Le participe passé des verbes réguliers se termine en -ed (comme le prétérit). Pour les verbes irréguliers, c'est la troisième colonne de la liste (seen, gone, eaten, written, done).

B. Démêler FOR, SINCE et AGO :
1. SINCE + Point de départ précis dans le passé (Date, heure, événement) :
   • 'They have lived in this city since 2015.' (L'action a commencé en 2015 et continue aujourd'hui).
   • 'I haven't seen Paul since Monday / since his birthday.'
2. FOR + Durée mesurée (nombre d'heures, de jours, d'années) :
   • 'She has been a teacher for ten years.' (Elle est enseignante depuis 10 ans et l'est toujours).
   • 'We have waited for two hours.'
3. AGO (Il y a...) : S'UTILISE STRICTEMENT AVEC LE PAST SIMPLE (JAMAIS AVEC LE PRESENT PERFECT) !
   • 'She arrived in France two weeks ago.' (Action passée, datée et terminée -> Past Simple).

2. Practical Rules & Structural Mechanics
Tableau comparatif :
- Present Perfect + SINCE + Point de départ (since 2018, since 8 am, since last week).
- Present Perfect + FOR + Durée globale (for 5 days, for 3 years, for a long time).
- Past Simple + Durée + AGO (two years ago, three days ago).

3. Contextual Examples & Practice Applications
- 'They have lived in this city since 2015.'
- 'She has been a teacher for ten years, but she arrived in France two weeks ago.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Formation & Rôle du Present Perfect)',
      content: [
        "Structure syntaxique du Present Perfect :",
        "• SUJET + HAVE / HAS + PARTICIPE PASSÉ (3ème colonne des verbes irréguliers).",
        "• Négation : HAVE NOT (HAVEN'T) / HAS NOT (HASN'T) + Participe Passé.",
        "• Interrogation : HAVE / HAS + Sujet + Participe Passé ?",
        "Quand l'utiliser en 4ème ?",
        "1. Bilan d'une action passée ayant une conséquence directe sur le présent : 'I have lost my key' (je l'ai perdue et je ne peux pas entrer maintenant).",
        "2. Action continue depuis le passé jusqu'à aujourd'hui (avec FOR ou SINCE).",
        "3. Expériences vécues dans la vie (avec EVER / NEVER) : 'Have you ever visited London?'"
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Distinguer FOR, SINCE et AGO)',
      content: [
        "La règle d'or pour ne jamais hésiter :",
        "• SINCE + POINT DE DÉPART : since yesterday, since 2010, since breakfast, since I was born.",
        "• FOR + DURÉE COMPTÉE : for three days, for six months, for ten years, for a long time.",
        "• AGO + PAST SIMPLE : 'ago' renvoie vers le passé achevé et exige impérativement le Prétérit Simple :",
        "  - ✅ 'He left two hours ago.' (Past Simple).",
        "  - ❌ 'He has left two hours ago.' (Faux ! Ne jamais employer ago avec le Present Perfect !)"
      ],
      table: {
        headers: ['Mot clé', 'Temps associé', 'Type de repère temporel', 'Exemple complet', 'Traduction'],
        rows: [
          ['SINCE', 'Present Perfect', 'Point de départ exact', 'We have lived here since 2018.', 'Nous vivons ici depuis 2018.'],
          ['FOR', 'Present Perfect', 'Durée totale écoulée', 'She has studied for three hours.', 'Elle étudie depuis trois heures.'],
          ['AGO', 'PAST SIMPLE uniquement', 'Moment révolu dans le passé', 'They arrived three days ago.', 'Ils sont arrivés il y a trois jours.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Errors',
      content: [
        "Exemples modèles officiels :",
        "• 'They have lived in this city since 2015.'",
        "• 'She has been a teacher for ten years, but she arrived in France two weeks ago.'",
        "• 'How long have you studied English? I have studied it for three years.'",
        "Pièges fréquents :",
        "❌ 'I live here since five years' -> ✅ 'I have lived here for five years' (En anglais, on utilise le Present Perfect + FOR pour traduire 'depuis' avec une durée).",
        "❌ 'Since five years' -> ✅ 'For five years'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Choisir entre FOR et SINCE',
          content: [
            "Consigne : Complétez chaque phrase avec FOR ou SINCE :",
            "1. Mr Diallo has taught Mathematics at our school ... 2012.",
            "2. The pupils have worked on this project ... two weeks.",
            "3. I haven't seen my best friend ... last Saturday.",
            "4. We have waited at the bus stop ... forty-five minutes.",
            "5. Fatou has played the violin ... she was seven years old."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'since 2012' -> 2012 est une date précise, point de départ temporel -> SINCE.",
            "2. 'for two weeks' -> Two weeks est une durée mesurée -> FOR.",
            "3. 'since last Saturday' -> Last Saturday est un point de départ défini -> SINCE.",
            "4. 'for forty-five minutes' -> Quarante-cinq minutes représente une durée -> FOR.",
            "5. 'since she was seven' -> 'She was seven' est un événement précis marquant le point de départ -> SINCE."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Conjuguer au Present Perfect ou au Past Simple',
          content: [
            "Consigne : Mettez les verbes entre parenthèses au temps adéquat (Present Perfect ou Past Simple) selon la présence de for, since ou ago :",
            "1. My uncle (buy) ... this car three years ago.",
            "2. They (live) ... in Dakar for ten years and they love it.",
            "3. Ousmane (not / finish) ... his English essay yet.",
            "4. The plane (land) ... thirty minutes ago."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'bought' -> Présence de 'three years ago' -> Prétérit Simple obligatoire.",
            "2. 'have lived' -> Présence de 'for ten years' avec continuité présente ('they love it') -> Present Perfect.",
            "3. 'has not finished' (ou 'hasn't finished') -> Action incomplète avec 'yet' -> Present Perfect.",
            "4. 'landed' -> Présence de 'thirty minutes ago' -> Prétérit Simple régulier (-ed)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Système du Present Perfect & Repères Temporels',
    root: 'PRESENT PERFECT',
    branches: [
      {
        name: 'Structure Syntaxique',
        subtitle: 'HAVE / HAS + Participe',
        items: ['I/You/We/They HAVE + Participe', 'He/She/It HAS + Participe', 'Irréguliers : 3ème colonne (seen, done)']
      },
      {
        name: 'SINCE vs FOR',
        subtitle: 'Traduction de \'Depuis\'',
        items: ['SINCE : Point de départ précis (since 2015)', 'FOR : Durée totale mesurée (for 3 years)', 'Action toujours vraie au présent']
      },
      {
        name: 'Règle de AGO',
        subtitle: 'Passé totalement révolu',
        items: ['S\'utilise uniquement avec le PAST SIMPLE', 'Ex: two days ago, a year ago', 'Strictement interdit avec le Present Perfect']
      }
    ]
  },
  conclusion:
    "En résumé, le Present Perfect établit un pont indissociable entre passé et présent. Utilisez SINCE pour situer le point de départ, FOR pour mesurer la durée de l'action continue, et réservez rigoureusement AGO au prétérit simple pour relater les événements passés et révolus."
};

export const LESSON_12_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-12',
  number: 'Lesson 12',
  title: 'Expressing the Future: WILL vs. BE GOING TO',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Contrairement au français qui possède des terminaisons futures spécifiques ('je mangerai', 'nous irons'), l'anglais ne dispose pas d'un temps futur morphologique unique. Il fait appel à deux structures majeures en fonction de l'intention du locuteur et de la nature de la prédiction : WILL (pour les décisions spontanées et les prédictions d'opinion) et BE GOING TO (pour les projets déjà planifiés et les prédictions basées sur un indice visible immédiat). Cette leçon analyse ces deux piliers du futur.",
  fullText: `Lesson 12: Expressing the Future (Will vs. Be Going To)

Introduction :
L'anglais exprime l'avenir au moyen de deux constructions aux nuances bien précises : WILL et BE GOING TO.

1. Detailed Grammatical & Conceptual Analysis
A. L'emploi de WILL (Auxiliaire Modal du Futur) :
1. Décision spontanée et immédiate prise à l'instant où l'on parle :
   • 'The phone is ringing. I will answer it!' (Le téléphone sonne, je vais répondre sur-le-champ !).
2. Prédictions fondées sur une opinion personnelle, une conviction ou une croyance (souvent après I think, I believe, I hope, perhaps) :
   • 'I think Senegal will win the match.'
3. Promesses et offres d'aide :
   • 'Don't worry, I will help you with your homework.'
Structure : SUJET + WILL + BASE VERBALE. Négation : WON'T (will not).

B. L'emploi de BE GOING TO :
1. Projet, intention ou décision déjà mûrie et planifiée avant le moment de parler :
   • 'I am going to study medicine at university next year.' (Projet prémédité).
2. Prédiction quasi-certaine basée sur un indice visuel ou physique visible dans le présent :
   • 'Look at those dark clouds in the sky! It is going to rain very soon.' (Les nuages noirs sont la preuve visible).
Structure : SUJET + AM / IS / ARE + GOING TO + BASE VERBALE.

2. Practical Rules & Structural Mechanics
- Tableau comparatif WILL vs BE GOING TO.
- Règle de contraction : I will -> I'll ; They will -> They'll ; will not -> won't.

3. Contextual Examples & Practice Applications
- 'The phone is ringing. I will answer it!'
- 'Look at those dark clouds in the sky! It is going to rain very soon.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (WILL vs BE GOING TO)',
      content: [
        "A. L'Auxiliaire Modal WILL :",
        "• Structure : SUJET + WILL (ou 'LL) + BASE VERBALE. Négation : WON'T.",
        "• Valeur 1 : Décision spontanée et instantanée prise au moment même où l'on s'exprime ('I'm hungry, I will make a sandwich').",
        "• Valeur 2 : Prédiction générale basée sur un avis personnel, souvent après 'I think', 'I hope', 'probably'.",
        "• Valeur 3 : Promesse formelle ('I will always help you').",
        "B. La Structure BE GOING TO :",
        "• Structure : SUJET + AM / IS / ARE + GOING TO + BASE VERBALE.",
        "• Valeur 1 : Intention décidée à l'avance, projet réfléchi ('We are going to travel to Kaolack this weekend').",
        "• Valeur 2 : Événement imminent annoncé par une preuve concrète et visible dans le présent ('Look at that runner! He is going to win')."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau de Différenciation)',
      content: [
        "Comment trancher entre WILL et BE GOING TO en situation d'examen :",
        "• Y a-t-il une preuve matérielle sous vos yeux (Look at...!) ? -> BE GOING TO.",
        "• S'agit-il d'un plan fixé à l'avance ? -> BE GOING TO.",
        "• Est-ce une réaction impulsive immédiate ou un avis personnel avec 'I think' ? -> WILL."
      ],
      table: {
        headers: ['Critère d\'usage', 'WILL (\'ll / won\'t)', 'BE GOING TO', 'Exemple illustratif'],
        rows: [
          ['Nature de la décision', 'Spontanée, instantanée', 'Planifiée à l\'avance, préméditée', 'Phone rings -> I will answer / I am going to buy a car.'],
          ['Type de prédiction', 'Opinion personnelle (I think...)', 'Preuve évidente et visible (Look!)', 'I think he will succeed / Look at the clouds: it is going to rain.'],
          ['Promesses et offres', 'WILL (I will help you)', 'Non utilisé pour les promesses', 'I will never forget you.']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Trap Prevention',
      content: [
        "Exemples en situation :",
        "• 'The phone is ringing. I will answer it!'",
        "• 'Look at those dark clouds in the sky! It is going to rain very soon.'",
        "• 'What are your plans for tomorrow? I am going to visit my cousins.'",
        "Erreurs courantes à éviter :",
        "❌ 'Look! The glass will fall!' -> ✅ 'Look! The glass is going to fall!' (l'indice visuel impose be going to).",
        "❌ Oublier le verbe BE : 'She going to travel' -> ✅ 'She is going to travel'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Choisir entre WILL et BE GOING TO',
          content: [
            "Consigne : Complétez chaque phrase avec la forme correcte de WILL ou de BE GOING TO selon le contexte :",
            "1. 'The doorbell is ringing.' — 'Okay, I (open) ... the door.'",
            "2. Look at that boy climbing the tall tree! He (fall) ...",
            "3. I bought two cinema tickets yesterday. I (watch) ... a film with my brother tonight.",
            "4. In my opinion, robots (not / replace) ... teachers in schools.",
            "5. 'I don't have any money for lunch.' — 'Don't worry, I (lend) ... you some.'"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'will open' -> Décision spontanée et instantanée prise à l'instant même où la sonnette retentit.",
            "2. 'is going to fall' -> Preuve visible et directe dans le présent (le garçon grimpe dangereusement à l'arbre).",
            "3. 'am going to watch' -> Intention planifiée à l'avance (les billets ont été achetés la veille).",
            "4. 'won't replace' (ou 'will not replace') -> Prédiction d'opinion ('In my opinion') sur l'avenir.",
            "5. 'will lend' -> Offre spontanée d'aide et promesse amicale."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Production de Phrases Décontextualisées',
          content: [
            "Consigne : Rédigez une phrase complète pour chaque situation en utilisant WILL ou BE GOING TO :",
            "1. Vous venez de décider de boire un verre d'eau parce que vous avez soif tout à coup.",
            "2. Vous observez une voiture qui roule à toute vitesse vers un feu rouge : un accident est imminent."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'I am thirsty. I will drink a glass of water.' (Décision spontanée immédiate avec WILL).",
            "2. 'Look! That speeding car is going to crash!' (Événement imminent basé sur une preuve visible immédiate avec BE GOING TO)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Les Deux Futurs de l\'Anglais',
    root: 'FUTURE EXPRESSIONS',
    branches: [
      {
        name: 'WILL + Base Verbale',
        subtitle: 'Spontanéité & Opinion',
        items: ['Décision instantanée (I\'ll do it now)', 'Prédiction personnelle (I think it will rain)', 'Promesses & Offres amicales (I will help you)']
      },
      {
        name: 'BE GOING TO + Base Verbale',
        subtitle: 'Préméditation & Indices',
        items: ['Projet planifié à l\'avance (We are going to travel)', 'Indice présent visible (Look at the clouds!)', 'Imminence quasi-certaine']
      }
    ]
  },
  conclusion:
    "En conclusion, le choix entre WILL et BE GOING TO affine votre pensée : WILL traduit la spontanéité du moment et la liberté d'opinion, tandis que BE GOING TO ancre l'action future dans une préparation préalable ou dans une évidence visuelle immédiate."
};

export const LESSON_13_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-13',
  number: 'Lesson 13',
  title: 'Question Words and Interrogative Word Order (Mots Interrogatifs et Ordre des Mots)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Poser des questions précises et grammaticalement irréprochables est l'un des piliers de la communication interactive en anglais. Cette leçon passe en revue la grande famille des mots interrogatifs en WH- (Who, What, Where, When, Why, Whose, Which, How) et enseigne la formule mathématique invariable de l'ordre des mots dans une question anglaise : l'inversion obligatoire entre l'auxiliaire et le sujet.",
  fullText: `Lesson 13: Question Words and Interrogative Structures

Introduction :
Les questions ouvertes en anglais utilisent des mots interrogatifs en WH- et respectent un ordre des mots strict et standardisé.

1. Detailed Grammatical & Conceptual Analysis
A. Le Répertoire des Mots Interrogatifs (WH- Words) :
- WHO (Qui ?) : interroge sur une personne -> 'Who is your English teacher?'
- WHAT (Que / Quoi / Quel ?) : interroge sur une chose ou une action -> 'What are you doing?'
- WHERE (Où ?) : interroge sur le lieu -> 'Where do you live?'
- WHEN (Quand ?) : interroge sur le temps et la date -> 'When does the train arrive?'
- WHY (Pourquoi ?) : demande la cause ou la raison (réponse avec Because) -> 'Why are you late?'
- WHOSE (À qui ?) : interroge sur la possession -> 'Whose bag is this?'
- WHICH (Quel / Lequel ?) : choix restreint parmi une liste limitée -> 'Which color do you prefer, blue or red?'
- HOW (Comment ?) : manière, moyen ou état de santé -> 'How do you travel to school?'
  • Composés de HOW : How old (âge), How many (quantité dénombrable), How much (prix/quantité indénombrable), How often (fréquence), How long (durée).

2. Practical Rules & Structural Mechanics
LA FORMULE UNIVERSELLE DE LA QUESTION ANGLAISE :
[WH- Word] + [AUXILIAIRE] + [SUJET] + [VERBE PRINCIPAL] + [Compléments] ?
Moyen mnémotechnique : Formule A-S-V (Auxiliaire - Sujet - Verbe) :
- 'Where (WH) did (Auxiliaire) you (Sujet) buy (Verbe) that jacket?'
- 'Why (WH) is (Auxiliaire BE) the student (Sujet) standing (Verbe-ing) outside?'

3. Contextual Examples & Practice Applications
- 'Where did you buy that beautiful jacket?'
- 'Why is the student standing outside the classroom instead of listening to the teacher?'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (La Famille des WH- Words)',
      content: [
        "Les pronoms et adverbes interrogatifs ciblent une information précise :",
        "• WHO : Personne ('Who called you?').",
        "• WHAT : Objet ou action ('What did you say?').",
        "• WHERE : Lieu ('Where is the library?').",
        "• WHEN : Moment temporel ('When will the class start?').",
        "• WHY : Motif ou explication, réponse avec 'because' ('Why are you laughing?').",
        "• WHICH : Choix précis entre deux ou plusieurs options ('Which book do you want?').",
        "• WHOSE : Propriétaire / possession ('Whose notebook is this on the floor?').",
        "• HOW et ses dérivés : How far (distance), How long (durée), How many (nombre), How much (prix/masse), How often (fréquence)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (La Règle d\'Or de la Question)',
      content: [
        "RÈGLE D'OR DE L'INVERSION : En anglais, une question ouverte exige STRICTEMENT l'inversion Sujet-Auxiliaire.",
        "La formule universelle : [WH-] + [AUXILIAIRE] + [SUJET] + [VERBE] ?",
        "• Au présent simple : DO ou DOES + Sujet + Base Verbale ('Where do you live?').",
        "• Au prétérit simple : DID + Sujet + Base Verbale ('What did you eat?').",
        "• Avec BE : BE + Sujet ('Where are they?').",
        "• Avec un modal : MODAL + Sujet + Base Verbale ('What can you do?')."
      ],
      table: {
        headers: ['Mot Interrogatif', 'Auxiliaire', 'Sujet', 'Verbe Principal', 'Complément'],
        rows: [
          ['Where', 'did', 'you', 'buy', 'that jacket?'],
          ['Why', 'is', 'the student', 'standing', 'outside?'],
          ['When', 'does', 'the lesson', 'start', 'every morning?'],
          ['How often', 'do', 'they', 'play', 'football?'],
          ['What', 'can', 'we', 'do', 'to help you?']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Traps',
      content: [
        "Exemples officiels du manuel :",
        "• 'Where did you buy that beautiful jacket?'",
        "• 'Why is the student standing outside the classroom instead of listening to the teacher?'",
        "• 'Whose car is parked in front of the gate?'",
        "Pièges fatals aux examens :",
        "❌ 'Where you live?' -> ✅ 'Where do you live?' (l'auxiliaire est indispensable !).",
        "❌ 'Why you didn't came?' -> ✅ 'Why didn't you come?'"
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Trouver le Mot Interrogatif Convenable',
          content: [
            "Consigne : Complétez chaque question avec le mot interrogatif approprié (Who, Where, When, Why, How much, Whose, How often) selon la réponse :",
            "1. '... do you brush your teeth?' — 'Twice a day.'",
            "2. '... is that boy sitting near Ousmane?' — 'He is my cousin from Thiès.'",
            "3. '... are you carrying an umbrella?' — 'Because it is raining outside.'",
            "4. '... did you find this golden watch?' — 'Under the teacher's desk.'",
            "5. '... does this English dictionary cost?' — 'It costs 5,000 CFA francs.'"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'How often' -> 'Twice a day' indique une fréquence d'action.",
            "2. 'Who' -> La réponse identifie une personne humaine ('my cousin').",
            "3. 'Why' -> La réponse exprime une cause introduite par 'Because'.",
            "4. 'Where' -> La réponse indique un lieu ('Under the desk').",
            "5. 'How much' -> La réponse indique un prix financier en francs CFA."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Remettre les Mots dans l\'Ordre Correct',
          content: [
            "Consigne : Reconstituez une question anglaise correcte à partir des mots désordonnés en appliquant la formule WH + Aux + Sujet + Verbe :",
            "1. (yesterday / did / buy / what / you / at the market / ?) -> ...",
            "2. (arriving / is / the school bus / when / ?) -> ...",
            "3. (your brother / why / does / study / late / so / ? ) -> ..."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'What did you buy at the market yesterday?' (WH: What + Aux: did + Sujet: you + Verbe: buy + compléments).",
            "2. 'When is the school bus arriving?' (WH: When + Aux: is + Sujet: the school bus + Verbe: arriving).",
            "3. 'Why does your brother study so late?' (WH: Why + Aux: does + Sujet: your brother + Verbe: study + adverbe: so late)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Mécanique de la Question Anglaise',
    root: 'QUESTION STRUCTURE',
    branches: [
      {
        name: 'Mots Interrogatifs (WH-)',
        subtitle: 'Sens de la question',
        items: ['Who (personne), What (chose), Where (lieu)', 'When (temps), Why (cause), Whose (possession)', 'Which (choix), How (manière, prix, fréquence)']
      },
      {
        name: 'Formule d\'Inversion (A-S-V)',
        subtitle: 'Ordre obligatoire',
        items: ['1. Mot interrogatif en tête', '2. Auxiliaire (do, does, did, be, have, can)', '3. Sujet (nom ou pronom)', '4. Verbe principal (base verbale ou -ing)']
      }
    ]
  },
  conclusion:
    "En conclusion, construire une question en anglais répond à une logique rigoureuse : l'auxiliaire doit toujours précéder le sujet après le mot interrogatif. Cette structure assure une clarté immédiate dans tous vos échanges oraux et écrits."
};

export const LESSON_14_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-14',
  number: 'Lesson 14',
  title: 'Question Tags for Confirmation and Agreement',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Les question tags sont de petites questions courtes greffées à la toute fin d'une phrase déclarative. Très fréquents en anglais oral, ils correspondent aux expressions françaises 'n'est-ce pas ?' ou 'n'est-ce pas vrai ?'. Ils servent à vérifier une information, demander une confirmation ou solliciter l'approbation de l'interlocuteur. Cette leçon vous enseigne la loi fondamentale de la polarité inversée et les règles de reprise des pronoms et des auxiliaires.",
  fullText: `Lesson 14: Question Tags for Confirmation

Introduction :
Les question tags transforment une affirmation ou une négation en question de confirmation.

1. Detailed Grammatical & Conceptual Analysis
A. La Règle Fondamentale de la Polarité Inversée :
1. Si la phrase de départ est AFFIRMATIVE (+), le question tag doit être NÉGATIF (-) :
   • 'You are coming to the party tonight, aren't you?'
   • 'She can speak English, can't she?'
2. Si la phrase de départ est NÉGATIVE (-), le question tag doit être AFFIRMATIF (+) :
   • 'He didn't finish his homework on time, did he?'
   • 'They aren't ready yet, are they?'

B. Mécanique de construction du Tag :
Le tag se compose toujours de deux éléments :
[AUXILIAIRE du temps de la phrase] + [PRONOM PERSONNEL correspondant au sujet].
1. On réutilise l'auxiliaire déjà présent dans la phrase (be, have, can, will, should) :
   • 'Alioune is a doctor, isn't he?'
   • 'They will win the game, won't they?'
2. Si la phrase n'a pas d'auxiliaire visible (présent ou prétérit simple), on appelle DO, DOES ou DID :
   • 'You live in Dakar (présent simple), don't you?'
   • 'Fatou speaks French (3e personne), doesn't she?'
   • 'They played well yesterday (prétérit simple), didn't they?'

2. Practical Rules & Structural Mechanics
- On utilise TOUJOURS un pronom personnel dans le tag (he, she, it, they, you), JAMAIS un nom propre : 'John is here, isn't he?' (et non 'isn't John?').
- Cas particuliers majeurs :
  • 'I am late, aren't I?' (aren't I remplace le difficile 'amn't I').
  • 'Let's go, shall we?' (après Let's, le tag est shall we).
  • 'Open the window, will you?' (après un impératif, le tag est will you).

3. Contextual Examples & Practice Applications
- 'You are coming to the party tonight, aren't you?'
- 'He didn't finish his homework on time, did he?'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (La Polarité Inversée)',
      content: [
        "Les Question Tags obéissent à un principe symétrique strict :",
        "• Énoncé Positif (+) -> Tag Négatif (-) : 'You love football, don't you?'",
        "• Énoncé Négatif (-) -> Tag Positif (+) : 'You don't smoke, do you?'",
        "Composants du question tag :",
        "1. L'auxiliaire de la phrase (ou do/does/did si aucun auxiliaire n'est visible).",
        "2. Le pronom personnel sujet (reprise obligatoire sous forme de pronom : Mary -> she, the boys -> they)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Temps et Tags)',
      content: [
        "Comment former le tag selon le temps du verbe :",
        "• Présent simple avec verbe ordinaire -> tag en don't / doesn't (ou do / does).",
        "• Prétérit simple avec verbe ordinaire -> tag en didn't (ou did).",
        "• Verbe BE au présent ou passé -> tag en isn't, aren't, was, were.",
        "• Auxiliaire modal (can, will, should) -> tag en can't, won't, shouldn't."
      ],
      table: {
        headers: ['Phrase déclarative', 'Temps / Auxiliaire', 'Polarité phrase -> tag', 'Question Tag exact'],
        rows: [
          ['You are ready,', 'Auxiliaire BE', '(+) -> (-)', 'aren\'t you?'],
          ['She doesn\'t know him,', 'Présent simple (-)', '(-) -> (+)', 'does she?'],
          ['Ousmane passed the exam,', 'Past simple (+)', '(+) -> (-)', 'didn\'t he?'],
          ['We haven\'t seen that film,', 'Present perfect (-)', '(-) -> (+)', 'have we?'],
          ['They can swim across the river,', 'Modal CAN (+)', '(+) -> (-)', 'can\'t they?'],
          ['I am right,', 'Cas particulier BE (I)', '(+) -> (-)', 'aren\'t I?']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Traps',
      content: [
        "Exemples officiels :",
        "• 'You are coming to the party tonight, aren't you?'",
        "• 'He didn't finish his homework on time, did he?'",
        "• 'Your sister works in a hospital, doesn't she?'",
        "Pièges à éviter absolument :",
        "❌ 'Peter is tired, isn't Peter?' -> ✅ 'Peter is tired, isn't he?' (Toujours un pronom).",
        "❌ 'She plays tennis, isn't she?' -> ✅ 'She plays tennis, doesn't she?' (Verbe ordinaire sans BE = auxiliaire DOES)."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Ajouter le Question Tag Convenable',
          content: [
            "Consigne : Complétez chaque énoncé avec le question tag qui convient :",
            "1. Amina is an excellent student, ...?",
            "2. They didn't travel to Kaolack yesterday, ...?",
            "3. You like Senegalese wrestling, ...?",
            "4. We can solve this exercise easily, ...?",
            "5. Mr Ndiaye bought a new computer, ...?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'isn't she?' -> Phrase affirmative avec BE 'is' ; sujet féminin Amina -> 'isn't she'.",
            "2. 'did they?' -> Phrase négative au passé avec 'didn't' -> tag affirmatif 'did they'.",
            "3. 'don't you?' -> Phrase affirmative au présent simple avec verbe ordinaire 'like' et sujet 'you' -> 'don't you'.",
            "4. 'can't we?' -> Phrase affirmative avec modal 'can' -> 'can't we'.",
            "5. 'didn't he?' -> Phrase affirmative au prétérit simple 'bought' ; Mr Ndiaye est un homme -> 'didn't he'."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Corriger les Tags Défectueux',
          content: [
            "Consigne : Les question tags suivants comportent une erreur. Corrigez-les :",
            "1. She speaks Wolof fluently, isn't she?",
            "2. The children are sleeping peacefully, aren't the children?",
            "3. You won't forget my birthday, won't you?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. Correction : 'She speaks Wolof fluently, doesn't she?' (Explication : le verbe speaks est un présent ordinaire à la 3e personne, l'auxiliaire doit être does, pas be).",
            "2. Correction : 'The children are sleeping peacefully, aren't they?' (Explication : un tag n'utilise jamais de nom complet, mais le pronom correspondant 'they').",
            "3. Correction : 'You won't forget my birthday, will you?' (Explication : la phrase est négative avec won't, le tag doit donc être affirmatif avec will)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Structure des Question Tags',
    root: 'QUESTION TAGS',
    branches: [
      {
        name: 'Règle de Polarité',
        subtitle: 'Inversion systématique',
        items: ['Phrase affirmative (+) -> Tag négatif (-)', 'Phrase négative (-) -> Tag affirmatif (+)', 'Traduction de \'n\'est-ce pas ?\'']
      },
      {
        name: 'Composition du Tag',
        subtitle: 'Deux éléments stricts',
        items: ['1. Auxiliaire adapté (be, have, can, will, do, does, did)', '2. Pronom personnel uniquement (he, she, they, you)', 'Cas spécial : I am -> aren\'t I?']
      }
    ]
  },
  conclusion:
    "En résumé, les question tags reposent sur une symétrie parfaite : inverser la polarité de la phrase de départ et réutiliser l'auxiliaire adéquat associé à un pronom personnel. Cette maîtrise rend vos dialogues en anglais vivants, fluides et authentiques."
};

export const LESSON_15_ANGLAIS_4EME: LessonContent = {
  id: 'anglais-4eme-lecon-15',
  number: 'Lesson 15',
  title: 'Comparatives and Superlatives (Comparatifs et Superlatifs)',
  subject: 'Anglais',
  classLevel: '4ème',
  introduction:
    "Comparer des personnes, des objets, des lieux ou des performances est au cœur de l'expression communicative en 4ème. L'anglais applique une règle logique et musicale fondée sur la longueur de l'adjectif : les adjectifs courts d'une syllabe reçoivent des terminaisons spécifiques (-ER pour le comparatif, -EST pour le superlatif), tandis que les adjectifs longs de deux syllabes ou plus sont précédés de MORE et THE MOST. Cette leçon détaille ces règles ainsi que les exceptions irrégulières incontournables (good, bad, far).",
  fullText: `Lesson 15: Comparatives and Superlatives

Introduction :
Les comparatifs permettent de comparer deux éléments entre eux (plus... que), tandis que les superlatifs désignent l'élément suprême au sein d'un groupe (le plus...).

1. Detailed Grammatical & Conceptual Analysis
A. Les Adjectifs Courts (1 syllabe, ou 2 syllabes terminées par -y) :
1. Comparatif de supériorité : Adjectif + '-ER' + THAN :
   • tall -> taller than (Mount Everest is higher than Mont Blanc).
   • fast -> faster than.
   • Règle C-V-C : on double la consonne -> big -> bigger than, hot -> hotter than.
   • Adjectifs en -y : le 'y' devient '-ier' -> happy -> happier than, easy -> easier than.
2. Superlatif : THE + Adjectif + '-EST' :
   • Mount Everest is the highest mountain in the world.
   • the biggest, the hottest, the easiest.

B. Les Adjectifs Longs (2 syllabes ou plus, sauf terminés en -y) :
1. Comparatif de supériorité : MORE + Adjectif + THAN :
   • 'This exercise is more difficult than the last one.'
   • 'A sports car is more expensive than a bicycle.'
2. Superlatif : THE MOST + Adjectif :
   • 'This is the most difficult exercise of the chapter.'
   • 'She is the most intelligent student in the classroom.'

C. Les Formes Irrégulières Absolues :
Trois adjectifs essentiels changent complètement de racine et doivent être sus par cœur :
- Good -> Better than (meilleur que) -> The Best (le meilleur).
- Bad -> Worse than (pire / plus mauvais que) -> The Worst (le pire).
- Far -> Further / Farther than (plus loin que) -> The Furthest / Farthest (le plus loin).

2. Practical Rules & Structural Mechanics
- Comparatif d'égalité : AS + Adjectif + AS ('He is as tall as his father').
- Comparatif d'infériorité : LESS + Adjectif + THAN, ou NOT AS + Adjectif + AS.

3. Contextual Examples & Practice Applications
- 'Mount Everest is higher than Mont Blanc, and it is the highest mountain in the world.'
- 'This exercise is more difficult than the last one.'

4. Exercices d'entraînement et Corrigés détaillés`,
  sections: [
    {
      title: '1. Detailed Grammatical & Conceptual Analysis (Adjectifs Courts vs Longs)',
      content: [
        "Classification selon le nombre de syllabes :",
        "A. Adjectifs courts (1 syllabe et adjectifs de 2 syllabes en -y) :",
        "• Comparatif de supériorité : Adjectif + -ER + THAN :",
        "  - small -> smaller than ; high -> higher than ; deep -> deeper than.",
        "  - Doublement C-V-C : big -> bigger than ; fat -> fatter than ; hot -> hotter than.",
        "  - Transformation du -y en -ier : heavy -> heavier than ; happy -> happier than.",
        "• Superlatif : THE + Adjectif + -EST :",
        "  - the smallest, the highest, the biggest, the heaviest.",
        "B. Adjectifs longs (2 syllabes ou plus sans -y) :",
        "• Comparatif : MORE + Adjectif + THAN (more expensive than, more beautiful than).",
        "• Superlatif : THE MOST + Adjectif (the most expensive, the most dangerous)."
      ]
    },
    {
      title: '2. Practical Rules & Structural Mechanics (Tableau des Irréguliers et Égalité)',
      content: [
        "Les formes irrégulières et l'égalité :",
        "• Good / Better / The best (bon, meilleur, le meilleur).",
        "• Bad / Worse / The worst (mauvais, pire, le pire).",
        "• Far / Further / The furthest (lointain, plus loin, le plus lointain).",
        "• Comparatif d'égalité : AS + ADJECTIF + AS : 'Alioune is as tall as Moussa' (Alioune est aussi grand que Moussa)."
      ],
      table: {
        headers: ['Adjectif', 'Type', 'Comparatif (+ THAN)', 'Superlatif (THE + ...)', 'Traduction'],
        rows: [
          ['Fast (rapide)', 'Court (1 syllabe)', 'faster than', 'the fastest', 'plus rapide que / le plus rapide'],
          ['Big (grand/gros)', 'Court (C-V-C)', 'bigger than', 'the biggest', 'plus grand que / le plus grand'],
          ['Easy (facile)', 'Court en -y', 'easier than', 'the easiest', 'plus facile que / le plus facile'],
          ['Difficult (difficile)', 'Long (3 syllabes)', 'more difficult than', 'the most difficult', 'plus difficile / le plus difficile'],
          ['Good (bon)', 'Irrégulier', 'better than', 'the best', 'meilleur que / le meilleur'],
          ['Bad (mauvais)', 'Irrégulier', 'worse than', 'the worst', 'pire que / le pire']
        ]
      }
    },
    {
      title: '3. Contextual Examples & Common Traps',
      content: [
        "Exemples modèles officiels :",
        "• 'Mount Everest is higher than Mont Blanc, and it is the highest mountain in the world.'",
        "• 'This exercise is more difficult than the last one.'",
        "• 'Travelling by plane is faster than travelling by train, but it is also more expensive.'",
        "Pièges fréquents aux évaluations :",
        "❌ 'More taller' ou 'more bigger' -> ✅ 'taller', 'bigger' (interdit de cumuler more et -er !).",
        "❌ 'Gooder' -> ✅ 'better' ; 'Badder' -> ✅ 'worse'."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Former les Comparatifs et Superlatifs',
          content: [
            "Consigne : Complétez chaque phrase avec le comparatif ou superlatif de l'adjectif entre parenthèses selon le sens :",
            "1. A blue whale is (heavy) ... than an African elephant.",
            "2. Russia is (large) ... country in the world.",
            "3. Today's weather is (bad) ... than yesterday's weather.",
            "4. Football is (popular) ... sport in Senegal.",
            "5. Fatou got 18/20; she had (good) ... mark in our class."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'heavier than' -> Adjectif court en -y au comparatif : le 'y' devient -ier + than.",
            "2. 'the largest' -> Superlatif mondial : the + large + -st (adjectif terminé par e).",
            "3. 'worse than' -> Comparatif de supériorité irrégulier de bad = worse than.",
            "4. 'the most popular' -> Superlatif d'un adjectif long (popular) = the most popular.",
            "5. 'the best' -> Superlatif irrégulier de good = the best."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Rédaction de Comparaisons Guidées',
          content: [
            "Consigne : Rédigez deux phrases complètes en comparant les éléments suivants :",
            "1. A cheetah (le guépard) et a horse (le cheval) avec l'adjectif 'fast'.",
            "2. Mathematics et History avec l'adjectif 'interesting' en utilisant le comparatif d'égalité 'as... as'."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé et explications pas-à-pas',
          content: [
            "1. 'A cheetah is faster than a horse.' (Fast est un adjectif court -> faster than).",
            "2. 'Mathematics is as interesting as History.' (Structure d'égalité : as + adjectif + as)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Comparatifs et Superlatifs en Anglais',
    root: 'DEGREES OF COMPARISON',
    branches: [
      {
        name: 'Adjectifs Courts (1 syll. / -y)',
        subtitle: 'Suffixes -ER et -EST',
        items: ['Comparatif : Adj + -ER + THAN (taller than)', 'Superlatif : THE + Adj + -EST (the tallest)', 'Doublement C-V-C (bigger) & -y -> -ier (happier)']
      },
      {
        name: 'Adjectifs Longs (2+ syll.)',
        subtitle: 'MORE et THE MOST',
        items: ['Comparatif : MORE + Adj + THAN', 'Superlatif : THE MOST + Adj', 'Ex: more expensive than / the most difficult']
      },
      {
        name: 'Formes Irrégulières',
        subtitle: 'Par cœur',
        items: ['Good -> Better -> The best', 'Bad -> Worse -> The worst', 'Far -> Further -> The furthest']
      }
    ]
  },
  conclusion:
    "En résumé, la règle des degrés de comparaison en anglais est gouvernée par la longueur phonétique de l'adjectif : suffixes -er/-est pour les mots brefs, et adverbes more/the most pour les mots longs, sans jamais oublier les trois exceptions majeures good, bad et far."
};
