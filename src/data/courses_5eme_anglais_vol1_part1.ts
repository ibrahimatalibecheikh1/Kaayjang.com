import { LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ANGLAIS DE 5ÈME — AUTEUR : IBRAHIMA KANE
// COURS LONGS ET DÉTAILLÉS (LEÇONS 1 À 14 - VOLUME 1)
// PARTIE A : LES TEMPS DU PRÉSENT ET DU PASSÉ (LEÇONS 1 À 5)
// AUCUN RÉSUMÉ, EXHAUSTIVITÉ TOTALE, DÉTAILS DE COMPRÉHENSION APPROFONDIS,
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_1_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-1',
  number: 'Leçon 1',
  title: 'Le Présent Simple (Simple Present Tense)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Mastering the Simple Present tense is the very foundation of English communication at secondary school. Unlike French, which often uses a single present form for various nuances, English strictly distinguishes habitual actions from actions occurring in the immediate moment. The Simple Present is the grammatical tool dedicated to describing everyday routines, permanent truths, timeless scientific facts, and enduring personal tastes. This first lesson examines the affirmative, negative, and interrogative structures, details crucial spelling exceptions for the third person singular, and highlights common pitfalls to avoid.",
  fullText: `Leçon 1 : Le Présent Simple (Simple Present Tense)

Introduction : Mastering the Simple Present tense is the very foundation of English communication at secondary school. Unlike French, which often uses a single present form for various nuances, English strictly distinguishes habitual actions from actions occurring in the immediate moment. The Simple Present is the grammatical tool dedicated to describing everyday routines, permanent truths, timeless scientific facts, and enduring personal tastes. This first lesson examines the affirmative, negative, and interrogative structures, details crucial spelling exceptions for the third person singular, and highlights common pitfalls to avoid.

1. Valeur et Emplois Fondamentaux du Présent Simple
Le présent simple s'utilise principalement dans quatre situations de communication bien précises :
• La routine quotidienne et les habitudes de vie : ce que l'on fait régulièrement (ex : I wake up at 7 AM every day).
• Les vérités générales et faits scientifiques immuables : ce qui est toujours vrai dans la nature (ex : The sun rises in the east / Water boils at 100°C).
• Les goûts, opinions et états permanents : ce que l'on aime ou déteste de façon durable (ex : She loves mangoes / They live in Dakar).
• Les horaires officiels et programmés : départs de train, d'avion, sonneries de cours (ex : The school starts at 8:00 AM).

2. Structure Affirmative et la Règle d'Or de la 3e Personne du Singulier
Formule générale :
Sujet + Base Verbale (Verbe à l'infinitif sans la particule 'to').
À la 3ème personne du singulier (He, She, It, ou tout sujet singulier comme 'my father', 'the teacher', 'the cat'), on ajoute obligatoirement la marque flexionnelle -s ou -es à la fin du verbe.
• Exemples :
  - I play tennis every Tuesday. (Sujet 'I' ➔ base verbale nue 'play').
  - He plays tennis every Tuesday. (Sujet 'He' ➔ ajout du '-s' obligatoire).
  - They live in Saint-Louis. / Amina lives in Saint-Louis.

3. Exceptions et Particularités Orthographiques à la 3e Personne
La plupart des verbes prennent simplement '-s'. Cependant, pour des raisons phonétiques de prononciation, certaines terminaisons imposent une adaptation graphique stricte :
• Règle des sifflantes et terminaison en -o :
  Pour les verbes se terminant par -ch, -sh, -x, -s, -ss ou -o, on ajoute obligatoirement '-es'.
  - watch ➔ watches (He watches television every evening).
  - wash ➔ washes (She washes her hands before eating).
  - go ➔ goes (Moussa goes to school by bicycle).
  - do ➔ does (Fatou does her homework).
  - fix ➔ fixes / miss ➔ misses.
• Règle de Consonne + Y :
  Lorsque le verbe se termine par une consonne suivie de la lettre 'y', le 'y' se transforme obligatoirement en '-ies'.
  - study (d + y) ➔ studies (Babacar studies English with passion).
  - carry (r + y) ➔ carries.
  - fly (l + y) ➔ flies.
  ATTENTION PIÈGE CRUCIAL : Si la lettre précédant le 'y' est une VOYELLE (a, e, i, o, u), la règle de transformation ne s'applique absolument pas ! On ajoute simplement un '-s' :
  - play (a + y) ➔ plays (et JAMAIS plaies).
  - say (a + y) ➔ says.
  - buy (u + y) ➔ buys.

4. Structure Négative : Le Rôle de l'Auxiliaire DO / DOES
Pour former une négation au présent simple, un verbe ordinaire ne peut pas porter la négation 'not' tout seul (on ne dit jamais *I like not). On fait obligatoirement appel à l'auxiliaire 'DO' ou 'DOES'.
Formule générale :
Sujet + do not (don't) / does not (doesn't) + Base Verbale.
• Exemples :
  - We don't like apples. (We do not like apples).
  - She doesn't like apples. (She does not like apples).
RÈGLE SYNTAXIQUE MAJEURE : À la 3e personne du singulier, la marque '-s' est déjà absorbée par l'auxiliaire 'does' (do + es). Par conséquent, le verbe principal perd son '-s' et revient rigoureusement à sa Base Verbale nue ! Écrire *She doesn't likes apples est une faute très grave (double marquage).

5. Structure Interrogative (Questions Fermées et Réponses Courtes)
Pour poser une question fermée (Yes/No question) au présent simple, on place l'auxiliaire 'Do' ou 'Does' en tête de phrase :
Formule :
Do / Does + Sujet + Base Verbale + ?
• Exemples :
  - Do you speak English? ➔ Yes, I do. / No, I don't.
  - Does he speak English? ➔ Yes, he does. / No, he doesn't.
Là encore, dès que 'Does' est présent, le verbe 'speak' reste à sa base verbale sans '-s'.

Conclusion : En conclusion, le présent simple est l'outil irremplaçable pour verbaliser nos habitudes et nos vérités immuables. Sa maîtrise repose sur un réflexe automatique : penser à la marque du '-s' ou '-es' pour le trio 'He, She, It', et se rappeler que l'auxiliaire DO/DOES prend en charge toute la mécanique négative et interrogative en laissant le verbe principal à sa forme la plus pure.` ,
  sections: [
    {
      title: '1. Valeurs et Emplois du Présent Simple',
      content: [
        "Temps grammatical de référence pour exprimer :",
        "• Les habitudes et routines régulières (accompagné souvent d'adverbes comme always, usually, every day).",
        "• Les vérités scientifiques et faits permanents (The Earth revolves around the Sun).",
        "• Les sentiments durables et goûts personnels (like, love, hate, prefer).",
        "• Les horaires programmés officiels de transports ou cours."
      ]
    },
    {
      title: '2. Formes Affirmative, Négative et Interrogative',
      content: [
        "Tableau complet des structures syntaxiques :"
      ],
      table: {
        headers: ['Forme', 'Sujets I / You / We / They', 'Sujets He / She / It (3e personne)'],
        rows: [
          ['Affirmative', 'Sujet + Base Verbale (I play tennis)', 'Sujet + Base Verbale + -s/-es (He plays tennis)'],
          ['Négative', "Sujet + don't + Base Verbale (We don't like)", "Sujet + doesn't + Base Verbale (She doesn't like)"],
          ['Interrogative', 'Do + Sujet + Base Verbale + ? (Do you speak?)', 'Does + Sujet + Base Verbale + ? (Does he speak?)'],
          ['Réponse courte', 'Yes, I do. / No, I don\'t.', 'Yes, he does. / No, he doesn\'t.']
        ]
      }
    },
    {
      title: '3. Règles d\'Orthographe à la 3e Personne du Singulier',
      content: [
        "Règles strictes de transformation écrite :",
        "• Règle standard : Ajout d'un simple '-s' (read ➔ reads, listen ➔ listens).",
        "• Sifflantes et 'o' (-ch, -sh, -s, -x, -o) : Ajout de '-es' (watch ➔ watches, wash ➔ washes, go ➔ goes, do ➔ does).",
        "• Consonne + Y : Le 'y' se mue en '-ies' (study ➔ studies, cry ➔ cries, fly ➔ flies).",
        "• Voyelle + Y : Ajout du simple '-s' sans modification (play ➔ plays, stay ➔ stays)."
      ]
    },
    {
      title: '4. Pièges Fréquents et Fautes à Éviter Absolument',
      content: [
        "• Double marquage du 's' : Écrire *He doesn't plays* au lieu de 'He doesn't play'.",
        "• Oubli de l'auxiliaire en question : Demander *You like music?* au lieu de 'Do you like music?'.",
        "• Confusion entre habitudes et action en cours : Employer le présent simple pour ce qu'on fait à la seconde même (utiliser le présent BE + V-ing)."
      ]
    }
  ],
  diagram: {
    title: 'Architecture du Présent Simple',
    root: 'PRÉSENT SIMPLE',
    branches: [
      {
        name: 'Affirmation & 3e Personne',
        subtitle: 'Marque en -s / -es',
        items: ['Base verbale pour I, You, We, They', '+s standard (walk ➔ walks)', '+es pour -ch, -sh, -x, -s, -o', 'Consonne+Y ➔ -ies (study ➔ studies)']
      },
      {
        name: 'Négation & DO/DOES',
        subtitle: 'Séparation auxiliaire',
        items: ["Don't + Base Verbale pour pluriels et 'I'", "Doesn't + Base Verbale pour He/She/It", 'Le verbe principal perd son -s']
      },
      {
        name: 'Interrogation',
        subtitle: 'Inversion avec auxiliaire',
        items: ['Do + Sujet + BV + ?', 'Does + Sujet + BV + ?', 'Réponses courtes : Yes, I do / No, he doesn\'t']
      }
    ]
  },
  conclusion:
    "En conclusion, le présent simple est l'outil irremplaçable pour verbaliser nos habitudes et nos vérités immuables. Sa maîtrise repose sur un réflexe automatique : penser à la marque du '-s' ou '-es' pour le trio 'He, She, It', et se rappeler que l'auxiliaire DO/DOES prend en charge toute la mécanique négative et interrogative en laissant le verbe principal à sa forme la plus pure."
};

export const LESSON_2_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-2',
  number: 'Leçon 2',
  title: 'Le Présent en BE + V-ing (Present Continuous / Progressive)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "While the Simple Present expresses permanent facts and repetitive routines, the Present Continuous (BE + V-ing) captures action in motion, happening right now before our eyes. It is the tense of live commentary, description of pictures, phone conversations, and evolving situations. Built using the present tense of the auxiliary BE followed by the active present participle in '-ing', this tense requires rigorous adherence to phonetic spelling rules. This second lesson details the construction, the famous C-V-C consonant doubling rule, the mute '-e' rule, and contrastive examples with the Simple Present.",
  fullText: `Leçon 2 : Le Présent en BE + V-ing (Present Continuous / Progressive)

Introduction : While the Simple Present expresses permanent facts and repetitive routines, the Present Continuous (BE + V-ing) captures action in motion, happening right now before our eyes. It is the tense of live commentary, description of pictures, phone conversations, and evolving situations. Built using the present tense of the auxiliary BE followed by the active present participle in '-ing', this tense requires rigorous adherence to phonetic spelling rules. This second lesson details the construction, the famous C-V-C consonant doubling rule, the mute '-e' rule, and contrastive examples with the Simple Present.

1. Valeurs et Contexte d'Emploi du Présent en BE + V-ing
On emploie le présent continu dans des contextes communicatifs spécifiques :
• Une action qui se déroule au moment précis où l'on parle :
  - I am writing a letter now. (Je suis en train d'écrire une lettre en ce moment).
  - Look! The children are playing football in the schoolyard.
• La description d'une image, d'un tableau ou d'une photographie :
  - In this picture, the teacher is smiling and holding a book.
• Une action temporaire en cours sur une période actuelle :
  - I am reading an interesting novel this week.
• Marqueurs temporels déclencheurs :
  'Now', 'right now', 'at the moment', 'Look!', 'Listen!', 'currently'.

2. Structure Affirmative : Conjugaison de l'Auxiliaire BE + Verbe en -ing
Formule générale :
Sujet + Auxiliaire BE conjugué au présent (am, is, are) + Base Verbale-ing.
• Rappel des formes de BE au présent :
  - I ➔ am (I am / I'm)
  - He, She, It ➔ is (He is / He's, She is / She's, It is / It's)
  - You, We, They ➔ are (You are / You're, We are / We're, They are / They're)
• Exemples fondamentaux :
  - I am writing a letter now.
  - Look! She is swimming in the pool.
  - Listen! The birds are singing in the garden.

3. Modifications Orthographiques lors de l'Ajout de -ing
L'ajout de la terminaison '-ing' obéit à deux règles orthographiques et phonétiques majeures :
• Règle C-V-C (Consonne - Voyelle - Consonne) :
  Si un verbe court d'une seule syllabe se termine par une Consonne, précédée d'une seule Voyelle courte, précédée d'une Consonne, on DOUBLE la consonne finale avant d'ajouter '-ing'.
  - run (r-u-n : C-V-C) ➔ running (avec deux 'n').
  - sit (s-i-t : C-V-C) ➔ sitting (avec deux 't').
  - stop (s-t-o-p : termine par C-V-C) ➔ stopping (avec deux 'p').
  - swim (s-w-i-m : termine par C-V-C) ➔ swimming (avec deux 'm').
  - get ➔ getting, cut ➔ cutting, chat ➔ chatting.
  Remarque : On ne double jamais les lettres 'w', 'x' ou 'y' (play ➔ playing, fix ➔ fixing).
• Règle du '-e' muet final :
  Si le verbe se termine par un 'e' que l'on n'entend pas à la prononciation, le 'e' disparaît complètement avant d'ajouter '-ing'.
  - make ➔ making (le 'e' est supprimé).
  - write ➔ writing (un seul 't', le 'e' saute).
  - dance ➔ dancing, drive ➔ driving, ride ➔ riding.
  Exception : Les verbes en '-ee' conservent leurs deux 'e' (see ➔ seeing).

4. Structure Négative
Pour nier une action en cours, on insère la négation 'not' immédiatement après l'auxiliaire BE :
Formule :
Sujet + BE (am / is / are) + NOT + Verbe-ing.
• Exemples :
  - They are not watching TV. (They aren't watching TV).
  - He is not sleeping right now. (He isn't sleeping).
  - I am not doing my homework at the moment. (I'm not doing).

5. Structure Interrogative et Réponses Courtes
Pour poser une question sur une action en cours, on pratique l'inversion entre l'auxiliaire BE et le sujet :
Formule :
Auxiliaire BE (Am / Is / Are) + Sujet + Verbe-ing + ?
• Exemples :
  - Are you listening to me? ➔ Yes, I am. / No, I am not (I'm not).
  - Is she doing her exercises? ➔ Yes, she is. / No, she isn't.
  - What are they cooking in the kitchen?

6. Comparaison Cruciale : Présent Simple vs Présent Continu
• Présent Simple (Habitude) :
  "He plays tennis every Saturday." (C'est sa passion, son habitude chaque samedi).
• Présent Continu (Action immédiate) :
  "He is playing tennis right now." (Il est actuellement sur le court, raquette en main).

Conclusion : En conclusion, le présent en BE + V-ing est le temps du direct et de l'instantanéité. Sa construction exige une vigilance constante sur deux piliers : conjuguer adéquatement l'auxiliaire BE au présent, et appliquer rigoureusement les modifications orthographiques (doublement de la consonne C-V-C et suppression du 'e' muet).` ,
  sections: [
    {
      title: '1. Rôle et Situations d\'Emploi du Présent Continu',
      content: [
        "À utiliser exclusivement pour :",
        "• Les actions en cours d'accomplissement au moment même du discours (Look! She is swimming).",
        "• La description dynamique d'images, de bandes dessinées ou de scènes de théâtre.",
        "• Les actions temporaires s'étalant sur la période actuelle (this month, these days).",
        "• Repères d'alerte : Look!, Listen!, now, at the moment."
      ]
    },
    {
      title: '2. Tableau Syntaxique et Déclinaisons de BE',
      content: [
        "Structures complètes selon les formes :"
      ],
      table: {
        headers: ['Forme', 'Structure syntaxique', 'Exemple modélisé', 'Forme contractée'],
        rows: [
          ['Affirmative', 'Sujet + am/is/are + V-ing', 'I am writing a letter.', "I'm writing / She's swimming"],
          ['Négative', 'Sujet + am/is/are + NOT + V-ing', 'They are not watching TV.', "They aren't watching TV"],
          ['Interrogative', 'Am/Is/Are + Sujet + V-ing + ?', 'Are you listening to me?', 'Short answer: Yes, I am.']
        ]
      }
    },
    {
      title: '3. Règles Orthographiques Fondamentales (-ing)',
      content: [
        "Deux règles majeures à mémoriser :",
        "• Règle C-V-C : Verbe d'une syllabe consonne-voyelle-consonne ➔ doublement consonne finale (run ➔ running, sit ➔ sitting, stop ➔ stopping, swim ➔ swimming).",
        "• Règle du 'e' muet : Suppression du 'e' final devant -ing (make ➔ making, write ➔ writing, dance ➔ dancing).",
        "• Cas de 'die' et 'lie' : -ie devient -y- (die ➔ dying, lie ➔ lying)."
      ]
    },
    {
      title: '4. Comparaison Présent Simple vs Présent BE + V-ing',
      content: [
        "• Simple Present : Routine / Vérité ➔ 'Ali walks to school every morning.'",
        "• Present Continuous : Action en cours ➔ 'Look! Ali is running to catch the bus now.'",
        "• Verbes d'état (stative verbs) : Des verbes de sentiment ou perception (know, like, want, understand) ne s'utilisent que très rarement en V-ing."
      ]
    }
  ],
  diagram: {
    title: 'Mécanisme du Présent BE + V-ing',
    root: 'PRÉSENT CONTINU',
    branches: [
      {
        name: 'Auxiliaire BE',
        subtitle: 'Au présent',
        items: ['I ➔ am', 'He/She/It ➔ is', 'You/We/They ➔ are', 'Porte la négation (is not ➔ isn\'t)']
      },
      {
        name: 'Participe Présent V-ing',
        subtitle: 'Action en cours',
        items: ['Base Verbale + ing', 'Règle C-V-C (run ➔ running)', 'Chute du -e muet (make ➔ making)', 'Description d\'images et moment présent']
      },
      {
        name: 'Inversion Question',
        subtitle: 'Am / Is / Are en tête',
        items: ['Are you listening?', 'Is he working?', 'Yes, I am / No, they aren\'t']
      }
    ]
  },
  conclusion:
    "En conclusion, le présent en BE + V-ing est le temps du direct et de l'instantanéité. Sa construction exige une vigilance constante sur deux piliers : conjuguer adéquatement l'auxiliaire BE au présent, et appliquer rigoureusement les modifications orthographiques (doublement de la consonne C-V-C et suppression du 'e' muet)."
};

export const LESSON_3_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-3',
  number: 'Leçon 3',
  title: 'Le Prétérit Simple (Verbes Réguliers)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Storytelling, history, and personal memories all require a time-machine tense: the Simple Past (Le Prétérit Simple). In English, this tense is exclusively reserved for events that took place in the past, are chronologically dated, and have zero connection to the current present moment. For regular verbs, the past is formed by adding the historical suffix '-ed'. This third lesson explores affirmative sentences, strict spelling modifications, the negative and interrogative structures powered by the auxiliary 'DID', and the three phonetic pronunciations of '-ed'.",
  fullText: `Leçon 3 : Le Prétérit Simple (Verbes Réguliers)

Introduction : Storytelling, history, and personal memories all require a time-machine tense: the Simple Past (Le Prétérit Simple). In English, this tense is exclusively reserved for events that took place in the past, are chronologically dated, and have zero connection to the current present moment. For regular verbs, the past is formed by adding the historical suffix '-ed'. This third lesson explores affirmative sentences, strict spelling modifications, the negative and interrogative structures powered by the auxiliary 'DID', and the three phonetic pronunciations of '-ed'.

1. Valeurs et Caractéristiques du Prétérit Simple
Le prétérit simple est le temps majeur pour raconter des récits, des anecdotes et des faits historiques.
Conditions impératives d'emploi :
• L'action est totalement terminée et révolue (coupée du présent).
• L'action est située dans le passé, soit explicitement par un repère temporel, soit implicitement par le contexte du récit.
• Marqueurs temporels typiques du passé :
  'Yesterday' (hier), 'last week / last month / last year' (la semaine/mois/année dernière), 'in 2018' (en 2018), 'two days ago' (il y a deux jours).

2. Structure Affirmative : L'Ajout du Suffixe -ed
Pour tous les verbes dits « réguliers », la règle de base est merveilleusement universelle : la terminaison est rigoureusement identique pour TOUTES les personnes (I, you, he, she, it, we, they).
Formule :
Sujet + Base Verbale + -ed.
• Exemple officiel :
  Yesterday, we walked to school. (Hier, nous avons marché jusqu'à l'école).
  They played football yesterday afternoon.

3. Règles Orthographiques Strictes pour l'Ajout de -ed
Certaines terminaisons verbales exigent des adaptations orthographiques indispensables :
• Verbes se terminant déjà par un -e :
  On n'ajoute pas un deuxième 'e', on ajoute simplement un '-d'.
  - live ➔ lived (He lived in Thiès five years ago).
  - love ➔ loved, dance ➔ danced, arrive ➔ arrived.
• Verbes se terminant par Consonne + Y :
  Le 'y' final se transforme obligatoirement en '-ied'.
  - cry (r + y) ➔ cried (The baby cried all night).
  - study (d + y) ➔ studied (She studied for the test).
  - carry ➔ carried.
  ATTENTION : Si le 'y' est précédé d'une VOYELLE, le 'y' est maintenu : play ➔ played, stay ➔ stayed.
• Verbes C-V-C d'une seule syllabe :
  La consonne finale est doublée avant d'ajouter '-ed'.
  - stop ➔ stopped (The bus stopped in front of the station).
  - chat ➔ chatted, clap ➔ clapped, drop ➔ dropped.

4. Structure Négative : L'Intervention de l'Auxiliaire DID
Tout comme au présent simple où l'on utilise DO/DOES, le verbe régulier au prétérit ne peut pas supporter la négation tout seul. On utilise l'auxiliaire de passé DID (prétérit de DO).
Formule :
Sujet + did not (didn't) + Base Verbale.
• Exemple officiel :
  They didn't watch the movie last night.
ATTENTION RÈGLE FONDAMENTALE : Dès que l'auxiliaire 'didn't' est employé, c'est LUI qui porte la marque du passé. Par conséquent, le verbe principal perd impérativement sa terminaison '-ed' et revient à sa Base Verbale nue ! Écrire *They didn't watched est une erreur majeure bannie des copies.

5. Structure Interrogative : Did en Tête de Phrase
Pour poser une question fermée au prétérit :
Formule :
Did + Sujet + Base Verbale + ?
• Exemple officiel :
  Did you finish your homework?
• Réponses courtes (Short answers) :
  - Yes, I did. / No, I didn't.
  - Did he visit his grandparents? ➔ Yes, he did. / No, he didn't.

6. Prononciation Phonétique du Suffixe -ed
À l'oral, la terminaison '-ed' se prononce de trois manières différentes selon le son final de la base verbale :
• Prononcé /ɪd/ (ou /ed/) : Uniquement après les sons /t/ et /d/ (ex : wanted, decided, started).
• Prononcé /t/ : Après les consonnes sourdes non vocalisées /p, k, f, s, ʃ, tʃ/ (ex : stopped, walked, washed, watched).
• Prononcé /d/ : Après toutes les autres consonnes sonores et les voyelles (ex : played, lived, loved, cleaned).

Conclusion : En conclusion, le prétérit simple des verbes réguliers offre une grande régularité grâce au suffixe unique '-ed' pour toutes les personnes. La clé de la perfection syntaxique réside dans l'usage de DID/DIDN'T : dès qu'il entre en scène pour nier ou interroger, le verbe principal abandonne immédiatement son '-ed' pour redevenir une base verbale intacte.` ,
  sections: [
    {
      title: '1. Valeur et Rôle Récitatif du Prétérit',
      content: [
        "Indispensable pour raconter le passé :",
        "• Événements passés, datés, achevés et n'ayant plus de lien avec le moment présent.",
        "• Marqueurs temporels déclencheurs : yesterday, ago (two days ago), last (last week, last month), dates précises (in 2020)."
      ]
    },
    {
      title: '2. Tableau des Structures Syntaxiques',
      content: [
        "Synthèse formelle des trois types de phrases :"
      ],
      table: {
        headers: ['Type de phrase', 'Structure grammaticale', 'Exemple officiel', 'Remarque clé'],
        rows: [
          ['Affirmative', 'Sujet + Base Verbale + -ed', 'Yesterday, we walked to school.', 'Même forme pour toutes les personnes'],
          ['Négative', "Sujet + didn't + Base Verbale", "They didn't watch the movie last night.", "Perte du -ed car 'didn't' porte le passé"],
          ['Interrogative', 'Did + Sujet + Base Verbale + ?', 'Did you finish your homework?', 'Réponse : Yes, I did / No, I didn\'t']
        ]
      }
    },
    {
      title: '3. Règles Orthographiques Strictes pour -ed',
      content: [
        "Trois ajustements orthographiques obligatoires :",
        "• Terminaison en -e : On ajoute seulement '-d' (live ➔ lived, arrive ➔ arrived).",
        "• Consonne + Y : Le -y se transforme en '-ied' (cry ➔ cried, study ➔ studied).",
        "• Règle C-V-C : Une syllabe consonne-voyelle-consonne ➔ double consonne (stop ➔ stopped, chat ➔ chatted)."
      ]
    },
    {
      title: '4. Les Trois Prononciations de la Terminaison -ed',
      content: [
        "Distinction orale indispensable pour la 5ème :",
        "• Son /ɪd/ : Après les verbes finissant par le son 'T' ou 'D' (want ➔ wanted, need ➔ needed).",
        "• Son /t/ : Après sons expirés (p, k, f, sh, ch) ➔ looked, laughed, watched.",
        "• Son /d/ : Dans tous les autres cas (cleaned, played, rained)."
      ]
    }
  ],
  diagram: {
    title: 'Le Prétérit Simple Régulier',
    root: 'PRÉTÉRIT RÉGULIER (-ed)',
    branches: [
      {
        name: 'Forme Affirmative',
        subtitle: 'Universalité de -ed',
        items: ['Base Verbale + -ed pour tous les pronoms', '+d si déjà terminé par -e (lived)', 'Consonne+y ➔ -ied (cried)', 'C-V-C ➔ double consonne (stopped)']
      },
      {
        name: 'Négation avec DIDN\'T',
        subtitle: 'Chute du suffixe',
        items: ["Sujet + didn't + Base Verbale", 'They didn\'t watch', 'Ne jamais écrire *didn\'t watched']
      },
      {
        name: 'Question avec DID',
        subtitle: 'Inversion temporelle',
        items: ['Did + Sujet + Base Verbale + ?', 'Did you finish?', 'Short answers : Yes, I did / No, I didn\'t']
      }
    ]
  },
  conclusion:
    "En conclusion, le prétérit simple des verbes réguliers offre une grande régularité grâce au suffixe unique '-ed' pour toutes les personnes. La clé de la perfection syntaxique réside dans l'usage de DID/DIDN'T : dès qu'il entre en scène pour nier ou interroger, le verbe principal abandonne immédiatement son '-ed' pour redevenir une base verbale intacte."
};

export const LESSON_4_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-4',
  number: 'Leçon 4',
  title: 'Les Verbes Irréguliers Essentiels',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "If all English verbs followed the simple rule of adding '-ed', the language would be entirely predictable. However, inherited from ancient Germanic linguistic traditions, a core group of high-frequency verbs changes its vowel sound or internal structure in the past tense without taking '-ed'. These are the Irregular Verbs. Because they describe our most frequent human actions (eating, drinking, going, having, seeing, being), mastering them by heart is mandatory for any secondary pupil. This fourth lesson focuses on the 15 fundamental irregular verbs required in 5ème and explains how the auxiliary DID maintains strict grammatical discipline in questions and negations.",
  fullText: `Leçon 4 : Les Verbes Irréguliers Essentiels

Introduction : If all English verbs followed the simple rule of adding '-ed', the language would be entirely predictable. However, inherited from ancient Germanic linguistic traditions, a core group of high-frequency verbs changes its vowel sound or internal structure in the past tense without taking '-ed'. These are the Irregular Verbs. Because they describe our most frequent human actions (eating, drinking, going, having, seeing, being), mastering them by heart is mandatory for any secondary pupil. This fourth lesson focuses on the 15 fundamental irregular verbs required in 5ème and explains how the auxiliary DID maintains strict grammatical discipline in questions and negations.

1. Définition et Particularité des Verbes Irréguliers
Contrairement aux verbes réguliers qui reçoivent la terminaison '-ed' au prétérit simple, les verbes irréguliers ne prennent JAMAIS '-ed'.
Leur forme au passé change complètement, souvent par une modification de la voyelle interne ou par un mot entièrement nouveau.
Puisqu'il n'existe aucune règle unique pour deviner leur forme passée, ils doivent être mémorisés par cœur et pratiqués quotidiennement.

2. Les 15 Verbes Irréguliers Fondamentaux Exigés en 5ème
Voici la liste officielle et incontournable des 15 verbes les plus utilisés de la langue anglaise :
• Be (Être) ➔ Was (pour I, He, She, It) / Were (pour You, We, They).
• Have (Avoir) ➔ Had.
• Do (Faire) ➔ Did.
• Go (Aller) ➔ Went.
• See (Voir) ➔ Saw.
• Make (Fabriquer / Faire) ➔ Made.
• Come (Venir) ➔ Came.
• Take (Prendre) ➔ Took.
• Say (Dire) ➔ Said.
• Get (Obtenir / Devenir) ➔ Got.
• Eat (Manger) ➔ Ate.
• Drink (Boire) ➔ Drank.
• Write (Écrire) ➔ Wrote.
• Buy (Acheter) ➔ Bought.
• Give (Donner) ➔ Gave.

3. Remarque Syntaxique Majeure : Le Comportement en Phrase Négative et Interrogative
C'est le piège numéro un des élèves de 5ème !
La forme irrégulière du prétérit (comme 'went', 'saw', 'ate', 'bought') N'EST UTILISÉE QU'À LA FORME AFFIRMATIVE.
Dès que l'on passe aux formes négative et interrogative, l'auxiliaire 'didn't' et 'did' entre en scène. Comme cet auxiliaire porte déjà à lui tout seul la marque du passé, le verbe irrégulier est AUTOMATIQUEMENT RENVOYÉ À SA BASE VERBALE d'origine !
• Exemple affirmatif : He went to London. (Il est allé à Londres ➔ prétérit irrégulier 'went').
• Exemple négatif : He didn't go to London. (et non pas *He didn't went ! Le verbe redevient 'go').
• Exemple interrogatif : Did he go to London? (et non pas *Did he went ? Le verbe redevient 'go').
Autres illustrations concrètes :
- She ate an apple ➔ She didn't eat an apple. / Did she eat an apple?
- I bought a new shirt ➔ I didn't buy a new shirt. / Did you buy a new shirt?
- They saw a lion ➔ They didn't see a lion. / Did they see a lion?

4. Cas Particulier de l'Auxiliaire BE au Prétérit
Le verbe BE est le seul verbe en anglais à posséder deux formes distinctes au prétérit selon le sujet :
• I was / He was / She was / It was.
• You were / We were / They were.
De plus, BE n'a jamais besoin de l'auxiliaire 'did' pour former ses négations et questions :
- Négation : I was not (wasn't) / They were not (weren't).
- Question : Were you at school yesterday? / Was she tired?

Conclusion : En conclusion, les verbes irréguliers sont le cœur battant de l'expression du passé en anglais. Les 15 verbes fondamentaux doivent être récités avec fluidité. Retenez la règle d'or syntaxique : la métamorphose irrégulière n'apparaît qu'en phrase affirmative ; avec 'didn't' et 'did', le verbe reprend toujours sa forme de base initiale.` ,
  sections: [
    {
      title: '1. Nature et Origine des Verbes Irréguliers',
      content: [
        "Caractéristiques essentielles :",
        "• Absence totale de terminaison en '-ed' au prétérit.",
        "• Modification vocalique ou mot entièrement nouveau.",
        "• Représentent les actions les plus fréquentes de la vie quotidienne.",
        "• Apprentissage mémoriel indispensable."
      ]
    },
    {
      title: '2. Répertoire Officiel des 15 Verbes de 5ème',
      content: [
        "Tableau complet des 15 verbes exigés par le programme Ibrahima Kane :"
      ],
      table: {
        headers: ['Infinitif (Base Verbale)', 'Traduction', 'Prétérit Simple (Past)', 'Exemple en contexte'],
        rows: [
          ['Be', 'Être', 'Was / Were', 'I was happy / They were at home'],
          ['Have', 'Avoir', 'Had', 'We had a delicious lunch'],
          ['Do', 'Faire', 'Did', 'She did all her exercises'],
          ['Go', 'Aller', 'Went', 'He went to London last year'],
          ['See', 'Voir', 'Saw', 'I saw a shooting star'],
          ['Make', 'Fabriquer / Faire', 'Made', 'My mother made a cake'],
          ['Come', 'Venir', 'Came', 'They came to visit us'],
          ['Take', 'Prendre', 'Took', 'He took the train to Thiès'],
          ['Say', 'Dire', 'Said', 'The teacher said: stand up!'],
          ['Get', 'Obtenir / Devenir', 'Got', 'I got a great mark in English'],
          ['Eat', 'Manger', 'Ate', 'The boy ate all his breakfast'],
          ['Drink', 'Boire', 'Drank', 'She drank fresh water'],
          ['Write', 'Écrire', 'Wrote', 'He wrote a letter to his friend'],
          ['Buy', 'Acheter', 'Bought', 'My father bought a new car'],
          ['Give', 'Donner', 'Gave', 'She gave me an interesting book']
        ]
      }
    },
    {
      title: '3. Règle d\'Or Syntaxique Négative et Interrogative',
      content: [
        "Le piège le plus sanctionné aux devoirs :",
        "• Affirmation : Emploi obligatoire de la forme prétérit (He went, She ate).",
        "• Négation avec didn't : Retour impératif à la Base Verbale (He didn't go, She didn't eat).",
        "• Question avec did : Retour impératif à la Base Verbale (Did he go?, Did she eat?)."
      ]
    },
    {
      title: '4. Particularités de l\'Auxiliaire BE',
      content: [
        "• Double déclinaison : Was (singulier avec I, He, She, It) et Were (pluriel et You).",
        "• Autonomie totale : N'utilise jamais l'auxiliaire 'did'.",
        "• Négation autonome : wasn't / weren't (ex : I wasn't late).",
        "• Inversion autonome : Was he sick? / Were they ready?"
      ]
    }
  ],
  diagram: {
    title: 'Les Verbes Irréguliers Fondamentaux',
    root: 'VERBES IRRÉGULIERS',
    branches: [
      {
        name: 'Les 15 Verbes Clés',
        subtitle: 'À mémoriser par cœur',
        items: ['be ➔ was/were, have ➔ had, do ➔ did', 'go ➔ went, see ➔ saw, make ➔ made', 'eat ➔ ate, drink ➔ drank, write ➔ wrote', 'buy ➔ bought, give ➔ gave, get ➔ got']
      },
      {
        name: 'Affirmation Unique',
        subtitle: 'Emploi exclusif',
        items: ['La forme irrégulière ne sert qu\'en affirmation', 'He went to London', 'She ate her lunch']
      },
      {
        name: 'Discipline de DID',
        subtitle: 'Retour à la Base Verbale',
        items: ["didn't + go (et non didn't went)", 'Did he go? (et non did he went?)', 'L\'auxiliaire absorbe le temps passé']
      }
    ]
  },
  conclusion:
    "En conclusion, les verbes irréguliers sont le cœur battant de l'expression du passé en anglais. Les 15 verbes fondamentaux doivent être récités avec fluidité. Retenez la règle d'or syntaxique : la métamorphose irrégulière n'apparaît qu'en phrase affirmative ; avec 'didn't' et 'did', le verbe reprend toujours sa forme de base initiale."
};

export const LESSON_5_ANGLAIS_5EME: LessonContent = {
  id: 'anglais-5eme-lecon-5',
  number: 'Leçon 5',
  title: 'Le Prétérit en BE + V-ing (Past Continuous / Progressive)',
  subject: 'Anglais',
  classLevel: '5ème',
  introduction:
    "Just as the Present Continuous describes what is happening right now, the Past Continuous (Le Prétérit en BE + V-ing) transports the speaker into a past moment to show an action that was in progress and unfolding over time. It is the cinematic tense par excellence, painting the background decor of a story before a sudden event occurs. By combining the past tense of the auxiliary BE (was or were) with a verb in '-ing', it creates vivid narrative contrasts. This fifth lesson explores its structures, the famous 'When' vs 'While' combination, and how to balance long and brief actions in past narration.",
  fullText: `Leçon 5 : Le Prétérit en BE + V-ing (Past Continuous / Progressive)

Introduction : Just as the Present Continuous describes what is happening right now, the Past Continuous (Le Prétérit en BE + V-ing) transports the speaker into a past moment to show an action that was in progress and unfolding over time. It is the cinematic tense par excellence, painting the background decor of a story before a sudden event occurs. By combining the past tense of the auxiliary BE (was or were) with a verb in '-ing', it creates vivid narrative contrasts. This fifth lesson explores its structures, the famous 'When' vs 'While' combination, and how to balance long and brief actions in past narration.

1. Rôle et Valeurs du Prétérit Continu
Le prétérit en BE + V-ing sert à décrire une action qui était EN TRAIN DE SE DÉROULER à un moment précis du passé.
On l'utilise dans deux configurations narratives majeures :
• Pour indiquer ce qui se passait à une heure précise dans le passé :
  - At 8 PM yesterday, I was doing my homework. (Hier à 20 heures, j'étais en train de faire mes devoirs).
  - What were you doing at 10 AM this morning?
• Comme décor d'arrière-plan (action longue) interrompu par un événement soudain (action brève) :
  L'action en cours (longue) est mise au prétérit en BE + V-ing.
  L'événement perturbateur soudain (court) est mis au prétérit simple.

2. Structure Affirmative : Conjugaison de WAS / WERE + V-ing
Formule générale :
Sujet + Auxiliaire BE au prétérit (was / were) + Verbe-ing.
• Rappel indispensable des deux formes de BE au prétérit :
  - I was / He was / She was / It was.
  - You were / We were / They were.
• Exemples fondamentaux :
  - At 8 PM yesterday, I was doing my homework.
  - She was reading a book when the light went off.
  - The students were listening attentively.

3. Combinaison Fréquente dans les Récits : WHEN et WHILE
Dans un récit au passé, on associe constamment une action longue d'arrière-plan et une action courte soudaine grâce aux conjonctions 'While' (pendant que) et 'When' (quand) :
• Règle d'association :
  - WHILE introduit généralement l'action longue en cours ➔ suivi du Prétérit BE + V-ing.
  - WHEN introduit généralement l'événement soudain ➔ suivi du Prétérit Simple.
• Exemple officiel Ibrahima Kane :
  "While I was sleeping (action longue en cours), the phone rang (action brève soudaine au prétérit simple)."
  Ou inversement :
  "I was sleeping when the phone rang."
Autre exemple parlant :
  "While we were walking to school, it started to rain."

4. Structure Négative
Pour nier qu'une action était en train de se produire à un moment passé, on ajoute 'not' après was/were :
Formule :
Sujet + was not (wasn't) / were not (weren't) + Verbe-ing.
• Exemple officiel :
  They weren't playing football under the rain. (Ils n'étaient pas en train de jouer au football sous la pluie).
  She wasn't watching TV when her mother arrived.

5. Structure Interrogative et Réponses Courtes
Pour interroger sur le déroulement d'une action passée, on inverse le sujet et l'auxiliaire was/were :
Formule :
Was / Were + Sujet + Verbe-ing + ?
• Exemple officiel :
  Were you cooking when she arrived?
• Réponses courtes :
  - Yes, I was. / No, I wasn't.
  - Was he sleeping at 9 PM? ➔ Yes, he was. / No, he wasn't.

Conclusion : En conclusion, le prétérit en BE + V-ing donne du relief et de la vie aux récits du passé. L'élève doit retenir le duo narratif gagnant : l'action continue d'arrière-plan se conjugue au prétérit en BE + V-ing (souvent avec While), tandis que l'événement soudain qui fait basculer l'histoire se pose au prétérit simple (souvent avec When).` ,
  sections: [
    {
      title: '1. Fonction Narrative du Past Continuous',
      content: [
        "Un temps de description temporelle au passé :",
        "• Exprimer une action en cours d'accomplissement à un instant T du passé.",
        "• Créer une toile de fond pour installer le décor d'une histoire.",
        "• Articuler une action durable avec une action brève qui survient."
      ]
    },
    {
      title: '2. Tableau des Formes Syntaxiques',
      content: [
        "Déclinaisons complètes de was / were + V-ing :"
      ],
      table: {
        headers: ['Forme', 'Sujets singuliers (I, He, She, It)', 'Sujets pluriels (You, We, They)', 'Exemple'],
        rows: [
          ['Affirmative', 'Sujet + was + V-ing', 'Sujet + were + V-ing', 'At 8 PM yesterday, I was doing my homework.'],
          ['Négative', "Sujet + wasn't + V-ing", "Sujet + weren't + V-ing", "They weren't playing football under the rain."],
          ['Interrogative', 'Was + Sujet + V-ing + ?', 'Were + Sujet + V-ing + ?', 'Were you cooking when she arrived?']
        ]
      }
    },
    {
      title: '3. Le Duo ' + 'When / While' + ' dans les Récits',
      content: [
        "Mécanique du contraste narratif :",
        "• Action longue en cours ➔ Past Continuous (was/were + V-ing) souvent précédé de 'While'.",
        "• Action brève d'interruption ➔ Past Simple (-ed ou irrégulier) souvent précédé de 'When'.",
        "• Schéma type : While I was sleeping [longue], the phone rang [courte]."
      ]
    },
    {
      title: '4. Synthèse des Erreurs Fréquentes',
      content: [
        "• Confusion was / were : Écrire *They was cooking* au lieu de 'They were cooking'.",
        "• Oubli de l'auxiliaire BE : Écrire *I doing my homework yesterday* au lieu de 'I was doing'.",
        "• Confusion d'actions : Mettre l'action brève au continu et l'action longue au simple."
      ]
    }
  ],
  diagram: {
    title: 'Mécanique du Prétérit Continu',
    root: 'PAST CONTINUOUS',
    branches: [
      {
        name: 'Auxiliaire BE Passé',
        subtitle: 'Was / Were',
        items: ['I / He / She / It ➔ was', 'You / We / They ➔ were', "Négation en wasn't / weren't", 'Inversion en interrogation']
      },
      {
        name: 'Participe V-ing',
        subtitle: 'Action en cours',
        items: ['Mêmes règles orthographiques (-ing)', 'Action non terminée à l\'instant passé', 'Repère précis : at 8 PM yesterday']
      },
      {
        name: 'Contraste When / While',
        subtitle: 'Arrière-plan vs Événement',
        items: ['While + Past Continuous (action longue)', 'When + Past Simple (action brève coupante)', 'Ex : While I was sleeping, the phone rang']
      }
    ]
  },
  conclusion:
    "En conclusion, le prétérit en BE + V-ing donne du relief et de la vie aux récits du passé. L'élève doit retenir le duo narratif gagnant : l'action continue d'arrière-plan se conjugue au prétérit en BE + V-ing (souvent avec While), tandis que l'événement soudain qui fait basculer l'histoire se pose au prétérit simple (souvent avec When)."
};
