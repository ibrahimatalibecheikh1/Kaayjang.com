import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_ANGLAIS_4EME,
  LESSON_2_ANGLAIS_4EME,
  LESSON_3_ANGLAIS_4EME,
  LESSON_4_ANGLAIS_4EME,
  LESSON_5_ANGLAIS_4EME,
  LESSON_6_ANGLAIS_4EME,
  LESSON_7_ANGLAIS_4EME,
  LESSON_8_ANGLAIS_4EME
} from './courses_4eme_anglais_part1';
import {
  LESSON_9_ANGLAIS_4EME,
  LESSON_10_ANGLAIS_4EME,
  LESSON_11_ANGLAIS_4EME,
  LESSON_12_ANGLAIS_4EME,
  LESSON_13_ANGLAIS_4EME,
  LESSON_14_ANGLAIS_4EME,
  LESSON_15_ANGLAIS_4EME
} from './courses_4eme_anglais_part2';
import {
  LESSON_16_ANGLAIS_4EME,
  LESSON_17_ANGLAIS_4EME,
  LESSON_18_ANGLAIS_4EME,
  LESSON_19_ANGLAIS_4EME,
  LESSON_20_ANGLAIS_4EME,
  LESSON_21_ANGLAIS_4EME
} from './courses_4eme_anglais_part3';
import {
  LESSON_22_ANGLAIS_4EME,
  LESSON_23_ANGLAIS_4EME,
  LESSON_24_ANGLAIS_4EME,
  LESSON_25_ANGLAIS_4EME,
  LESSON_26_ANGLAIS_4EME,
  LESSON_27_ANGLAIS_4EME,
  LESSON_28_ANGLAIS_4EME,
  LESSON_29_ANGLAIS_4EME,
  LESSON_30_ANGLAIS_4EME
} from './courses_4eme_anglais_part4';

// =========================================================================
// COURS INTÉGRAUX D'ANGLAIS - CLASSE DE 4ÈME (PROGRAMME OFFICIEL - 30 LEÇONS)
// TEXTES EXHAUSTIFS, DÉTAILLÉS EN FRANÇAIS POUR UNE COMPRÉHENSION PARFAITE,
// RÈGLES PRÉCISES, TABLEAUX COMPARATIFS, SCHÉMAS ET EXERCICES AVEC CORRIGÉS
// =========================================================================

export const COURSES_ANGLAIS_4EME_RAW: LessonContent[] = [
  // Partie 1 : Grammaire Fondamentale & Présent (1 à 8)
  LESSON_1_ANGLAIS_4EME,
  LESSON_2_ANGLAIS_4EME,
  LESSON_3_ANGLAIS_4EME,
  LESSON_4_ANGLAIS_4EME,
  LESSON_5_ANGLAIS_4EME,
  LESSON_6_ANGLAIS_4EME,
  LESSON_7_ANGLAIS_4EME,
  LESSON_8_ANGLAIS_4EME,
  // Partie 2 : Passé, Futur & Interrogation (9 à 15)
  LESSON_9_ANGLAIS_4EME,
  LESSON_10_ANGLAIS_4EME,
  LESSON_11_ANGLAIS_4EME,
  LESSON_12_ANGLAIS_4EME,
  LESSON_13_ANGLAIS_4EME,
  LESSON_14_ANGLAIS_4EME,
  LESSON_15_ANGLAIS_4EME,
  // Partie 3 : Modaux, Relatives, Passif & Conditionnel (16 à 21)
  LESSON_16_ANGLAIS_4EME,
  LESSON_17_ANGLAIS_4EME,
  LESSON_18_ANGLAIS_4EME,
  LESSON_19_ANGLAIS_4EME,
  LESSON_20_ANGLAIS_4EME,
  LESSON_21_ANGLAIS_4EME,
  // Partie 4 : Thématiques, Culture, Numérique & Examen (22 à 30)
  LESSON_22_ANGLAIS_4EME,
  LESSON_23_ANGLAIS_4EME,
  LESSON_24_ANGLAIS_4EME,
  LESSON_25_ANGLAIS_4EME,
  LESSON_26_ANGLAIS_4EME,
  LESSON_27_ANGLAIS_4EME,
  LESSON_28_ANGLAIS_4EME,
  LESSON_29_ANGLAIS_4EME,
  LESSON_30_ANGLAIS_4EME
];

export const ANGLAIS_4EME_FILTER_PARTS = [
  { id: 'all', label: 'Toutes les leçons (1 à 30)', count: '30' },
  { id: 'part-1', label: 'Part 1 • Noms, Déterminants & Présent (L1-L8)', count: '8' },
  { id: 'part-2', label: 'Part 2 • Passé, Futur & Question Tags (L9-L15)', count: '7' },
  { id: 'part-3', label: 'Part 3 • Modaux, Relatives & Voix Passive (L16-L21)', count: '6' },
  { id: 'part-4', label: 'Part 4 • Thèmes, Culture & Examen (L22-L30)', count: '9' }
];

export const COURSES_ANGLAIS_4EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // PARTIE 1 : GRAMMAIRE FONDAMENTALE & SYSTÈME DU PRÉSENT (LEÇONS 1 À 8)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-4eme-lecon-1',
    title: 'LESSON 1 : NOUNS AND COMPOUND NOUNS',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Formation des noms composés (Noun+Noun, V-ing+Noun, Adj+Noun). Règle d'or du premier nom modificateur invariable au singulier (shoe shop, toothbrush) et pluriel régulier sur le nom principal.",
    lessonData: LESSON_1_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-2',
    title: 'LESSON 2 : ARTICLES (A/AN, THE, AND ZERO ARTICLE Ø)',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Article indéfini A/AN selon le son consonne/voyelle initial, article défini THE pour le spécifique et l'unique, et Article Zéro Ø pour les généralités plurielles, matières, sports et matières scolaires.",
    lessonData: LESSON_2_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-3',
    title: 'LESSON 3 : DEMONSTRATIVE DETERMINERS (THIS, THAT, THESE, THOSE)',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Désignation spatiale et temporelle : proximité avec THIS (singulier) et THESE (pluriel), éloignement avec THAT et THOSE. Usages particuliers pour les présentations et les appels téléphoniques.",
    lessonData: LESSON_3_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-4',
    title: 'LESSON 4 : EXPRESSING POSSESSION (POSSESSIVE ADJECTIVES & GENITIVE)',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Adjectifs possessifs avec accord strict sur le possesseur (HIS masculin, HER féminin, ITS neutre) et mécanique du génitif ('s au singulier, apostrophe seule ' au pluriel régulier).",
    lessonData: LESSON_4_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-5',
    title: 'LESSON 5 : QUANTIFIERS (MUCH, MANY, A LOT OF, FEW, LITTLE)',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Dénombrables vs Indénombrables. Many et Few pour les noms comptables au pluriel ; Much et Little pour les masses et temps ; A lot of pour l'affirmation et nuances positives (a few / a little).",
    lessonData: LESSON_5_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-6',
    title: 'LESSON 6 : PERSONAL OBJECT AND REFLEXIVE PRONOUNS',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Pronoms objets (me, you, him, her, it, us, them) après verbes et prépositions. Pronoms réfléchis en -self / -selves (myself, yourself, himself, ourselves) et valeur d'autonomie avec 'by myself'.",
    lessonData: LESSON_6_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-7',
    title: 'LESSON 7 : PRESENT SIMPLE TENSE (HABITS AND UNIVERSAL TRUTHS)',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Routines quotidiennes et vérités scientifiques immuables. Règle du -s/-es à He/She/It, auxiliaires DO/DOES en négation et interrogation, et position des adverbes de fréquence (always, usually, never).",
    lessonData: LESSON_7_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-8',
    title: 'LESSON 8 : PRESENT CONTINUOUS TENSE (BE + V-ING)',
    type: 'cours',
    badge: 'Part 1 • Noms & Déterminants',
    description: "Actions en cours d'accomplissement au moment de la parole et situations temporaires. Conjugaison de BE (am/is/are) + V-ing, règle C-V-C de doublement de consonne et refus des verbes d'état (stative verbs).",
    lessonData: LESSON_8_ANGLAIS_4EME
  },

  // -----------------------------------------------------------------------
  // PARTIE 2 : SYSTÈME DU PASSÉ, DU FUTUR ET STRUCTURES INTERROGATIVES (LEÇONS 9 À 15)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-4eme-lecon-9',
    title: 'LESSON 9 : PAST SIMPLE AND IRREGULAR VERBS',
    type: 'cours',
    badge: 'Part 2 • Passé, Futur & Question Tags',
    description: "Narration passée révolue et datée. Terminaison -ed des réguliers, répertoire des verbes irréguliers fondamentaux, et règle absolue du retour à la base verbale en présence de DID ou DIDN'T.",
    lessonData: LESSON_9_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-10',
    title: 'LESSON 10 : PAST CONTINUOUS AND INTERRUPTED ACTIONS (WHEN / WHILE)',
    type: 'cours',
    badge: 'Part 2 • Passé, Futur & Question Tags',
    description: "Toile de fond narrative avec was/were + V-ing. Règle clé de l'action longue en cours (Past Continuous introduit par WHILE) interrompue brutalement par un événement ponctuel (Past Simple avec WHEN).",
    lessonData: LESSON_10_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-11',
    title: 'LESSON 11 : PRESENT PERFECT WITH FOR, SINCE, AND AGO',
    type: 'cours',
    badge: 'Part 2 • Passé, Futur & Question Tags',
    description: "Passerelle passé-présent avec HAVE/HAS + Participe Passé. Traduction de 'depuis' avec SINCE (point de départ précis) et FOR (durée globale mesurée), et distinction avec AGO (Past Simple obligatoire).",
    lessonData: LESSON_11_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-12',
    title: 'LESSON 12 : EXPRESSING THE FUTURE (WILL VS BE GOING TO)',
    type: 'cours',
    badge: 'Part 2 • Passé, Futur & Question Tags',
    description: "Décision spontanée, promesses et prédictions d'opinion avec WILL (négatif : won't) versus projets prémédités planifiés à l'avance et prédictions basées sur un indice visible présent avec BE GOING TO.",
    lessonData: LESSON_12_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-13',
    title: 'LESSON 13 : QUESTION WORDS AND INTERROGATIVE WORD ORDER',
    type: 'cours',
    badge: 'Part 2 • Passé, Futur & Question Tags',
    description: "Questions ouvertes avec Who, What, Where, When, Why, Whose, Which, How (many/much/often). Formule universelle d'inversion obligatoire A-S-V (Mot interrogatif + Auxiliaire + Sujet + Verbe).",
    lessonData: LESSON_13_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-14',
    title: 'LESSON 14 : QUESTION TAGS FOR CONFIRMATION AND AGREEMENT',
    type: 'cours',
    badge: 'Part 2 • Passé, Futur & Question Tags',
    description: "Demander confirmation ('n'est-ce pas ?'). Principe fondamental de polarité inversée (+ -> - / - -> +), reprise d'auxiliaire (be, have, can, will, do/does/did) et pronom personnel sujet exclusif.",
    lessonData: LESSON_14_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-15',
    title: 'LESSON 15 : COMPARATIVES AND SUPERLATIVES OF ADJECTIVES',
    type: 'cours',
    badge: 'Part 2 • Passé, Futur & Question Tags',
    description: "Adjectifs courts (-er than / the -est), adjectifs longs (more... than / the most...), comparatif d'égalité (as... as) et formes irrégulières incontournables (good -> better/best, bad -> worse/worst).",
    lessonData: LESSON_15_ANGLAIS_4EME
  },

  // -----------------------------------------------------------------------
  // PARTIE 3 : MODAUX, PROPOSITIONS RELATIVES ET VOIX PASSIVE (LEÇONS 16 À 21)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-4eme-lecon-16',
    title: 'LESSON 16 : MODALS 1 : ABILITY AND PERMISSION (CAN, COULD, MAY)',
    type: 'cours',
    badge: 'Part 3 • Modaux, Relatives & Passif',
    description: "Invariabilité universelle des modaux sans 's' et base verbale sans 'to'. Capacité au présent (CAN) et au passé (COULD), demandes polies et expression de la permission officielle (MAY).",
    lessonData: LESSON_16_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-17',
    title: 'LESSON 17 : MODALS 2 : OBLIGATION AND ADVICE (MUST, SHOULD, HAVE TO)',
    type: 'cours',
    badge: 'Part 3 • Modaux, Relatives & Passif',
    description: "Obligation morale (MUST) et légale (HAVE TO). Piège capital de la négation : MUSTN'T (interdiction absolue) versus DON'T HAVE TO (absence d'obligation), et conseil bienveillant avec SHOULD.",
    lessonData: LESSON_17_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-18',
    title: 'LESSON 18 : RELATIVE PRONOUNS (WHO, WHICH, THAT, WHOSE)',
    type: 'cours',
    badge: 'Part 3 • Modaux, Relatives & Passif',
    description: "Liaison de propositions et antécédents : WHO pour les personnes, WHICH pour les objets et animaux, THAT polyvalent, et WHOSE pour exprimer la possession ('dont le/la/les') sans répétition.",
    lessonData: LESSON_18_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-19',
    title: 'LESSON 19 : THE PASSIVE VOICE IN PRESENT AND PAST SIMPLE',
    type: 'cours',
    badge: 'Part 3 • Modaux, Relatives & Passif',
    description: "Mettre en valeur l'action et le résultat. Algorithme en 4 étapes : COD devient Sujet, auxiliaire BE au présent (is/are) ou prétérit (was/were), participe passé et complément d'agent 'by'.",
    lessonData: LESSON_19_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-20',
    title: 'LESSON 20 : CONDITIONAL SENTENCES (ZERO AND FIRST CONDITIONALS)',
    type: 'cours',
    badge: 'Part 3 • Modaux, Relatives & Passif',
    description: "Zero Conditional pour les vérités scientifiques (IF + Présent -> Présent) et First Conditional pour l'avenir probable (IF + Présent -> WILL + BV). Interdiction absolue de 'will' après IF.",
    lessonData: LESSON_20_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-21',
    title: 'LESSON 21 : PREPOSITIONS OF TIME AND PLACE (IN, ON, AT)',
    type: 'cours',
    badge: 'Part 3 • Modaux, Relatives & Passif',
    description: "Principe de la pyramide inversée : IN pour les grandes périodes et contenants/villes ; ON pour les jours, dates et surfaces ; AT pour les heures exactes et adresses complètes numérotées.",
    lessonData: LESSON_21_ANGLAIS_4EME
  },

  // -----------------------------------------------------------------------
  // PARTIE 4 : THÉMATIQUES, CULTURE, VOCABULAIRE & EXAMEN (LEÇONS 22 À 30)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-4eme-lecon-22',
    title: 'LESSON 22 : SCHOOL LIFE IN ANGLOPHONE COUNTRIES',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Systèmes scolaires britannique et américain comparés au Sénégal. Uniformes, 'houses', lockers, clubs, vocabulaire de l'emploi du temps (timetable) et formulation de la routine d'étude.",
    lessonData: LESSON_22_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-23',
    title: 'LESSON 23 : ENVIRONMENTAL ISSUES AND CLIMATE CHANGE',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Pollutions de l'air et des océans, déforestation et désertification sahélienne. Règle des 3 R (Reduce, Reuse, Recycle), énergies renouvelables et formulation d'engagements éco-citoyens.",
    lessonData: LESSON_23_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-24',
    title: 'LESSON 24 : HEALTH, NUTRITION, AND DOCTOR CONSULTATIONS',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Suffixe -ache (headache, stomach ache), maux courants (fever, sore throat, malaria). Dialogue complet chez le médecin (Where does it hurt?) et règles d'une alimentation saine équilibrée.",
    lessonData: LESSON_24_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-25',
    title: 'LESSON 25 : JOBS, PROFESSIONS, AND FUTURE CAREER AMBITIONS',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Lexique des métiers de la santé, ingénierie, enseignement et tech. Règle obligatoire de l'article indéfini A/AN devant chaque profession et argumentation de ses rêves professionnels avec 'I want to be'.",
    lessonData: LESSON_25_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-26',
    title: 'LESSON 26 : SPORTS, HOBBIES, AND LEISURE (PLAY, DO, GO)',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Triade sportive immuable : PLAY pour les ballons et jeux collectifs ; GO pour les activités d'évasion en -ING ; DO pour les arts martiaux et combats individuels (lutte traditionnelle).",
    lessonData: LESSON_26_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-27',
    title: 'LESSON 27 : TRAVEL, MEANS OF TRANSPORT, AND ASKING FOR DIRECTIONS',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Prépositions de transport (BY plane/car mais ON FOOT), lexique urbain (traffic lights, roundabout) et formules d'orientation pour guider un voyageur (go straight ahead, turn left, opposite).",
    lessonData: LESSON_27_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-28',
    title: 'LESSON 28 : TRADITIONS, CELEBRATIONS, AND CULTURAL FESTIVALS',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Rayonnement de la Teranga sénégalaise, Tabaski (Eid al-Adha), Korité et partage fraternel du Ngalakh de Pâques. Fêtes anglophones (Thanksgiving, Christmas) et lexique de célébration.",
    lessonData: LESSON_28_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-29',
    title: 'LESSON 29 : TECHNOLOGY, THE INTERNET, AND SOCIAL MEDIA ETHICS',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Monde digital, smartphones et réseaux sociaux. Avantages pour les études versus dangers du cyberharcèlement (cyberbullying), des fake news et du temps d'écran excessif. Charte éthique en ligne.",
    lessonData: LESSON_29_ANGLAIS_4EME
  },
  {
    id: 'anglais-4eme-lecon-30',
    title: 'LESSON 30 : READING COMPREHENSION AND EXAMINATION PREPARATION',
    type: 'cours',
    badge: 'Part 4 • Thèmes, Culture & Examen',
    description: "Synthèse et entraînement aux examens de 4ème : compréhension de texte (skimming, scanning, True/False avec justification), compétence linguistique intégrale et expression écrite guidée.",
    lessonData: LESSON_30_ANGLAIS_4EME
  }
];
