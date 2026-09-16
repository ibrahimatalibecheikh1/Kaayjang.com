import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_ANGLAIS_5EME,
  LESSON_2_ANGLAIS_5EME,
  LESSON_3_ANGLAIS_5EME,
  LESSON_4_ANGLAIS_5EME,
  LESSON_5_ANGLAIS_5EME
} from './courses_5eme_anglais_vol1_part1';
import {
  LESSON_6_ANGLAIS_5EME,
  LESSON_7_ANGLAIS_5EME,
  LESSON_8_ANGLAIS_5EME,
  LESSON_9_ANGLAIS_5EME
} from './courses_5eme_anglais_vol1_part2';
import {
  LESSON_10_ANGLAIS_5EME,
  LESSON_11_ANGLAIS_5EME,
  LESSON_12_ANGLAIS_5EME,
  LESSON_13_ANGLAIS_5EME,
  LESSON_14_ANGLAIS_5EME
} from './courses_5eme_anglais_vol1_part3';
import {
  LESSON_15_ANGLAIS_5EME,
  LESSON_16_ANGLAIS_5EME,
  LESSON_17_ANGLAIS_5EME,
  LESSON_18_ANGLAIS_5EME,
  LESSON_19_ANGLAIS_5EME
} from './courses_5eme_anglais_part1';
import {
  LESSON_20_ANGLAIS_5EME,
  LESSON_21_ANGLAIS_5EME,
  LESSON_22_ANGLAIS_5EME,
  LESSON_23_ANGLAIS_5EME,
  LESSON_24_ANGLAIS_5EME,
  LESSON_25_ANGLAIS_5EME
} from './courses_5eme_anglais_part2';
import {
  LESSON_26_ANGLAIS_5EME,
  LESSON_27_ANGLAIS_5EME,
  LESSON_28_ANGLAIS_5EME,
  LESSON_29_ANGLAIS_5EME
} from './courses_5eme_anglais_part3';
import {
  LESSON_30_ANGLAIS_5EME,
  LESSON_31_ANGLAIS_5EME,
  LESSON_32_ANGLAIS_5EME,
  LESSON_33_ANGLAIS_5EME
} from './courses_5eme_anglais_part4';

// =========================================================================
// COURS INTÉGRAUX D'ANGLAIS - CLASSE DE 5ÈME (LEÇONS 1 À 33 - VOLUMES 1 & 2)
// CONFORME AU PROGRAMME OFFICIEL D'IBRAHIMA KANE (CYCLE 4)
// AUCUN RÉSUMÉ, EXHAUSTIVITÉ TOTALE, DÉTAILS DE COMPRÉHENSION APPROFONDIS,
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const COURSES_ANGLAIS_5EME_RAW: LessonContent[] = [
  // Volume 1 : Leçons 1 à 14
  LESSON_1_ANGLAIS_5EME,
  LESSON_2_ANGLAIS_5EME,
  LESSON_3_ANGLAIS_5EME,
  LESSON_4_ANGLAIS_5EME,
  LESSON_5_ANGLAIS_5EME,
  LESSON_6_ANGLAIS_5EME,
  LESSON_7_ANGLAIS_5EME,
  LESSON_8_ANGLAIS_5EME,
  LESSON_9_ANGLAIS_5EME,
  LESSON_10_ANGLAIS_5EME,
  LESSON_11_ANGLAIS_5EME,
  LESSON_12_ANGLAIS_5EME,
  LESSON_13_ANGLAIS_5EME,
  LESSON_14_ANGLAIS_5EME,
  // Volume 2 : Leçons 15 à 33
  LESSON_15_ANGLAIS_5EME,
  LESSON_16_ANGLAIS_5EME,
  LESSON_17_ANGLAIS_5EME,
  LESSON_18_ANGLAIS_5EME,
  LESSON_19_ANGLAIS_5EME,
  LESSON_20_ANGLAIS_5EME,
  LESSON_21_ANGLAIS_5EME,
  LESSON_22_ANGLAIS_5EME,
  LESSON_23_ANGLAIS_5EME,
  LESSON_24_ANGLAIS_5EME,
  LESSON_25_ANGLAIS_5EME,
  LESSON_26_ANGLAIS_5EME,
  LESSON_27_ANGLAIS_5EME,
  LESSON_28_ANGLAIS_5EME,
  LESSON_29_ANGLAIS_5EME,
  LESSON_30_ANGLAIS_5EME,
  LESSON_31_ANGLAIS_5EME,
  LESSON_32_ANGLAIS_5EME,
  LESSON_33_ANGLAIS_5EME
];

export const ANGLAIS_5EME_FILTER_PARTS = [
  { id: 'all', label: 'Toutes les leçons (1 à 33)', count: '33' },
  { id: 'vol1-a', label: 'Vol 1 • Présent & Passé (L1-L5)', count: '5' },
  { id: 'vol1-b', label: 'Vol 1 • Futur, Impératif, Perfect & Wh- (L6-L9)', count: '4' },
  { id: 'vol1-c', label: 'Vol 1 • Noms, Possession & Comparatifs (L10-L14)', count: '5' },
  { id: 'partie-1', label: 'Vol 2 • Modaux & Vie Scolaire (L15-L19)', count: '5' },
  { id: 'partie-2', label: 'Vol 2 • Quotidien & Civilisation (L20-L25)', count: '6' },
  { id: 'partie-3', label: 'Vol 2 • Orthographe & Homophones (L26-L29)', count: '4' },
  { id: 'partie-4', label: 'Vol 2 • Méthodologie & Écrit (L30-L33)', count: '4' }
];

export const COURSES_ANGLAIS_5EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // VOLUME 1 - PARTIE A : LES TEMPS DU PRÉSENT ET DU PASSÉ (LEÇONS 1 À 5)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-5eme-lecon-1',
    title: 'LEÇON 1 : LE PRÉSENT SIMPLE (SIMPLE PRESENT TENSE)',
    type: 'cours',
    badge: 'Vol 1 • Présent & Passé',
    description: "Routines, habitudes et vérités générales. Règle du -s ou -es à la 3e personne (He, She, It), exceptions en -ch, -sh, -x, -s, -o et consonne+y, négations avec don't/doesn't et questions avec Do/Does.",
    lessonData: LESSON_1_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-2',
    title: 'LEÇON 2 : LE PRÉSENT EN BE + V-ING (PRESENT CONTINUOUS)',
    type: 'cours',
    badge: 'Vol 1 • Présent & Passé',
    description: "Actions en cours au moment où l'on parle et description d'images. Conjugaison de BE (am, is, are), règle orthographique C-V-C de doublement de consonne, suppression du -e muet et contrastes avec le présent simple.",
    lessonData: LESSON_2_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-3',
    title: 'LEÇON 3 : LE PRÉTÉRIT SIMPLE (VERBES RÉGULIERS)',
    type: 'cours',
    badge: 'Vol 1 • Présent & Passé',
    description: "Événements passés, datés et achevés. Terminaison unique en -ed pour tous les pronoms, règles en -e, consonne+y (-ied) et C-V-C, négation en didn't et questions en Did avec retour obligatoire à la base verbale.",
    lessonData: LESSON_3_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-4',
    title: 'LEÇON 4 : LES VERBES IRRÉGULIERS ESSENTIELS',
    type: 'cours',
    badge: 'Vol 1 • Présent & Passé',
    description: "Répertoire des 15 verbes irréguliers fondamentaux du programme (be, have, do, go, see, make, come, take, say, get, eat, drink, write, buy, give). Règle d'or du retour à la base verbale avec didn't et did.",
    lessonData: LESSON_4_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-5',
    title: 'LEÇON 5 : LE PRÉTÉRIT EN BE + V-ING (PAST CONTINUOUS)',
    type: 'cours',
    badge: 'Vol 1 • Présent & Passé',
    description: "Action en cours de déroulement à un moment précis du passé. Décor d'arrière-plan, conjugaison de was/were + V-ing, combinaison du récit avec When (action brève coupante) et While (action longue).",
    lessonData: LESSON_5_ANGLAIS_5EME
  },

  // -----------------------------------------------------------------------
  // VOLUME 1 - PARTIE B : FUTUR, IMPÉRATIF, PRESENT PERFECT & WH- (LEÇONS 6 À 9)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-5eme-lecon-6',
    title: "LEÇON 6 : L'EXPRESSION DU FUTUR (WILL VS BE GOING TO)",
    type: 'cours',
    badge: 'Vol 1 • Futur, Impératif, Perfect & Wh-',
    description: "Futur spontané, prédictions et promesses avec l'auxiliaire WILL (négation en won't) versus futur intentionnel, projet planifié et prédictions sur indices visuels immédiats avec BE GOING TO.",
    lessonData: LESSON_6_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-7',
    title: "LEÇON 7 : L'IMPÉRATIF (THE IMPERATIVE MOOD)",
    type: 'cours',
    badge: 'Vol 1 • Futur, Impératif, Perfect & Wh-',
    description: "Ordres, consignes et conseils sans sujet exprimé avec la base verbale directe. Interdictions catégoriques avec Don't, et suggestions collectives engageant le locuteur avec Let's (négatif : Let's not).",
    lessonData: LESSON_7_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-8',
    title: 'LEÇON 8 : INTRODUCTION AU PRESENT PERFECT',
    type: 'cours',
    badge: 'Vol 1 • Futur, Impératif, Perfect & Wh-',
    description: "Pont vivant entre passé et présent. Bilan et conséquences directes observables dans la situation actuelle, structure Have/Has + Participe Passé (-ed ou 3e colonne) et distinctions nettes avec le prétérit.",
    lessonData: LESSON_8_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-9',
    title: 'LEÇON 9 : LES MOTS INTERROGATIFS (WH- QUESTIONS)',
    type: 'cours',
    badge: 'Vol 1 • Futur, Impératif, Perfect & Wh-',
    description: "Questions ouvertes avec Who (personne), What (chose/action), Where (lieu), When (temps), Why (cause avec Because), How (manière), How old (âge) et Whose (possession). Formule syntaxique universelle.",
    lessonData: LESSON_9_ANGLAIS_5EME
  },

  // -----------------------------------------------------------------------
  // VOLUME 1 - PARTIE C : GROUPE NOMINAL, POSSESSION & COMPARAISONS (LEÇONS 10 À 14)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-5eme-lecon-10',
    title: 'LEÇON 10 : LE GROUPE NOMINAL (ARTICLES A/AN, THE, ARTICLE ZÉRO)',
    type: 'cours',
    badge: 'Vol 1 • Noms, Possession & Comparatifs',
    description: "Article indéfini A (son consonne, a university) vs AN (son voyelle, an hour), article défini THE (élément précis déjà connu), et l'Article Zéro Ø pour les généralités, espèces, repas et noms de pays au singulier.",
    lessonData: LESSON_10_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-11',
    title: "LEÇON 11 : L'EXPRESSION DE LA POSSESSION (GÉNITIF, ADJECTIFS POSSESSIFS)",
    type: 'cours',
    badge: 'Vol 1 • Noms, Possession & Comparatifs',
    description: "Génitif en 's (singulier), apostrophe seule s' (pluriel en -s) et 's (pluriels irréguliers). Adjectifs possessifs avec la règle d'or de l'accord exclusif avec le possesseur : HIS (homme), HER (femme), ITS (chose/animal).",
    lessonData: LESSON_11_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-12',
    title: 'LEÇON 12 : LES QUANTIFIEURS (DÉNOMBRABLES ET INDÉNOMBRABLES)',
    type: 'cours',
    badge: 'Vol 1 • Noms, Possession & Comparatifs',
    description: "Classification dénombrables (comptables) vs indénombrables (masses/liquides/sugar/money). Emploi de SOME (affirmation), ANY (négation et question), MANY (dénombrables), MUCH (indénombrables) et A LOT OF.",
    lessonData: LESSON_12_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-13',
    title: 'LEÇON 13 : LE COMPARATIF (SUPÉRIORITÉ, ÉGALITÉ, INFÉRIORITÉ)',
    type: 'cours',
    badge: 'Vol 1 • Noms, Possession & Comparatifs',
    description: "Comparatif de supériorité selon la longueur de l'adjectif (courts en -er than, longs en more ... than, irréguliers better/worse/further than). Égalité invariable en as ... as et infériorité invariable en less ... than.",
    lessonData: LESSON_13_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-14',
    title: 'LEÇON 14 : LE SUPERLATIF (THE SUPERLATIVE DEGREE)',
    type: 'cours',
    badge: 'Vol 1 • Noms, Possession & Comparatifs',
    description: "Degré extrême d'une qualité au sein d'un groupe : the + adj + -est pour les adjectifs courts (the fastest, the biggest, the heaviest), the most + adjectif pour les adjectifs longs, et superlatifs irréguliers (the best, the worst).",
    lessonData: LESSON_14_ANGLAIS_5EME
  },

  // -----------------------------------------------------------------------
  // VOLUME 2 - PARTIE 1 : MODAUX, ADVERBES DE FRÉQUENCE, PRÉPOSITIONS & VIE SCOLAIRE (LEÇONS 15 À 19)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-5eme-lecon-15',
    title: "LEÇON 15 : LES MODAUX DE CAPACITÉ ET DE PERMISSION — CAN / CAN'T",
    type: 'cours',
    badge: 'Vol 2 • Modaux & Vie Scolaire',
    description: "Capacité physique et mentale, demander poliment une permission, invariabilité totale, base verbale sans 'to', réponses courtes (short answers) et phonétique /kən/ vs /kɑːnt/.",
    lessonData: LESSON_15_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-16',
    title: "LEÇON 16 : LES MODAUX D'OBLIGATION, D'INTERDICTION ET DE CONSEIL — MUST / SHOULD",
    type: 'cours',
    badge: 'Vol 2 • Modaux & Vie Scolaire',
    description: "Obligation stricte avec MUST (100%), interdiction formelle avec MUSTN'T (0% de tolérance), conseil bienveillant avec SHOULD (70%), distinction avec don't have to et 'l' muet de should.",
    lessonData: LESSON_16_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-17',
    title: 'LEÇON 17 : LES ADVERBES DE FRÉQUENCE ET LEUR SYNTAXE',
    type: 'cours',
    badge: 'Vol 2 • Modaux & Vie Scolaire',
    description: "Échelle de fréquence (always, usually, often, sometimes, hardly ever, never), règle d'or de placement (DEVANT verbe ordinaire, DERRIÈRE l'auxiliaire BE), questions avec How often et absence de double négation.",
    lessonData: LESSON_17_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-18',
    title: 'LEÇON 18 : LES PRÉPOSITIONS DE LIEU ET DE TEMPS — IN, ON, AT',
    type: 'cours',
    badge: 'Vol 2 • Modaux & Vie Scolaire',
    description: "Logique de précision temporelle (AT pour l'heure, ON pour le jour/date, IN pour mois/année/saison), repérage spatial (in, on, under, behind, in front of, next to, between) et méthode de la Pyramide Inversée.",
    lessonData: LESSON_18_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-19',
    title: 'LEÇON 19 : LE VOCABULAIRE DE LA VIE SCOLAIRE ET DES MATIÈRES',
    type: 'cours',
    badge: 'Vol 2 • Modaux & Vie Scolaire',
    description: "Matières scolaires (Maths, History-Geo, Biology, PE, English, IT), fournitures dans le cartable, bâtiments du collège, formules pour exprimer ses préférences et demander du matériel en classe.",
    lessonData: LESSON_19_ANGLAIS_5EME
  },

  // -----------------------------------------------------------------------
  // VOLUME 2 - PARTIE 2 : VIE QUOTIDIENNE, GOÛTS, HABITUDES & CIVILISATION (LEÇONS 20 À 25)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-5eme-lecon-20',
    title: 'LEÇON 20 : LA ROUTINE QUOTIDIENNE ET LES ACTIONS DE LA JOURNÉE',
    type: 'cours',
    badge: 'Vol 2 • Quotidien & Civilisation',
    description: "Chronologie de la journée du matin au soir (wake up, brush teeth, have breakfast, catch bus), expressions de transition temporelle, alternance Simple Present / Fréquence et modèle d'écriture.",
    lessonData: LESSON_20_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-21',
    title: 'LEÇON 21 : LIRE ET DONNER L\'HEURE EN ANGLAIS — PAST & TO',
    type: 'cours',
    badge: 'Vol 2 • Quotidien & Civilisation',
    description: "Système britannique inversé (Minutes + PAST/TO + Heure), demi-heure (half past), quarts d'heure (quarter past/to), distinction AM/PM et méthode visuelle de l'horloge coupée en deux moitiés.",
    lessonData: LESSON_21_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-22',
    title: 'LEÇON 22 : LES GOÛTS, PRÉFÉRENCES ET VERBES DE SENTIMENT',
    type: 'cours',
    badge: 'Vol 2 • Quotidien & Civilisation',
    description: "Gradation des sentiments (love, like, enjoy, don't mind, dislike, hate, can't stand), règle absolue du gérondif en V-ING après ces verbes (I love reading), questions avec 'Do you like...' et réponses courtes.",
    lessonData: LESSON_22_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-23',
    title: 'LEÇON 23 : NOURRITURE, REPAS ET ACHATS ALIMENTAIRES',
    type: 'cours',
    badge: 'Vol 2 • Quotidien & Civilisation',
    description: "Vocabulaire alimentaire par groupes (fruits, légumes, viandes, boissons), les 3 repas sacrés, formules rituelles pour commander au restaurant ou acheter au marché (I would like..., How much is it?).",
    lessonData: LESSON_23_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-24',
    title: 'LEÇON 24 : LA VILLE, LE QUARTIER ET L\'ORIENTATION DANS L\'ESPACE',
    type: 'cours',
    badge: 'Vol 2 • Quotidien & Civilisation',
    description: "Lieux clés de la cité (library, cinema, market, hospital, bank), donner un itinéraire avec précision (turn left, turn right, go straight ahead, cross the road) et demander son chemin poliment.",
    lessonData: LESSON_24_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-25',
    title: 'LEÇON 25 : DÉCOUVERTE DU MONDE ANGLOPHONE ET DE SA CULTURE',
    type: 'cours',
    badge: 'Vol 2 • Quotidien & Civilisation',
    description: "Géographie et capitales des pays du Commonwealth et USA (London, Washington DC, Ottawa, Canberra, Abuja), drapeaux (Union Jack), monuments (Big Ben), fêtes traditionnelles (Thanksgiving, Halloween) et hymnes.",
    lessonData: LESSON_25_ANGLAIS_5EME
  },

  // -----------------------------------------------------------------------
  // VOLUME 2 - PARTIE 3 : RÈGLES D'ORTHOGRAPHE FONDAMENTALES & HOMOPHONES (LEÇONS 26 À 29)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-5eme-lecon-26',
    title: 'LEÇON 26 : RÈGLES DE PLURIEL DES NOMS ET FORMES IRRÉGULIÈRES',
    type: 'cours',
    badge: 'Vol 2 • Orthographe & Homophones',
    description: "Règle générale du -s, pluriels en -es (-ch, -sh, -x, -s, -o), transformation du -y en -ies, pluriels en -ves pour les mots en -f/-fe (knife ➔ knives), et les 7 pluriels irréguliers vitaux (child ➔ children, person ➔ people).",
    lessonData: LESSON_26_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-27',
    title: 'LEÇON 27 : DISTINGUER LES HOMOPHONES : THERE / THEIR / THEY\'RE',
    type: 'cours',
    badge: 'Vol 2 • Orthographe & Homophones',
    description: "Méthode infaillible de substitution mentale : THERE pour le lieu ou l'existence (There is), THEIR pour la possession plurielle (leur/leurs), THEY'RE comme contraction de 'They are' et astuces mnémotechniques.",
    lessonData: LESSON_27_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-28',
    title: 'LEÇON 28 : DISTINGUER LES HOMOPHONES : TO / TOO / TWO',
    type: 'cours',
    badge: 'Vol 2 • Orthographe & Homophones',
    description: "TO (préposition de mouvement ou particule d'infinitif), TWO (chiffre 2), TOO (excès 'trop' devant adjectif ou addition 'aussi' en fin de phrase), moyens mémo-visuels et exercices de discrimination rapide.",
    lessonData: LESSON_28_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-29',
    title: 'LEÇON 29 : LES MAJUSCULES OBLIGATOIRES EN ANGLAIS (CAPITAL LETTERS)',
    type: 'cours',
    badge: 'Vol 2 • Orthographe & Homophones',
    description: "Les 6 différences majeures avec le français : Pronom 'I' toujours en majuscule, jours de la semaine (Monday), mois (January), nationalités et langues (Senegalese, English), fêtes et titres de personnes (Mr, Mrs).",
    lessonData: LESSON_29_ANGLAIS_5EME
  },

  // -----------------------------------------------------------------------
  // VOLUME 2 - PARTIE 4 : EXPRESSION ÉCRITE, MÉTHODOLOGIE & EXPRESSION ORALE (LEÇONS 30 À 33)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-5eme-lecon-30',
    title: 'LEÇON 30 : EXPRESSION ÉCRITE : LES CONNECTEURS LOGIQUES DE RÉCIT',
    type: 'cours',
    badge: 'Vol 2 • Méthodologie & Écrit',
    description: "Connecteurs de chronologie (First, Then, Meanwhile, Suddenly, Finally), cause et conséquence (Because, So, Therefore), opposition (However, But), règles de ponctuation de la virgule et paragraphe modèle de rédaction.",
    lessonData: LESSON_30_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-31',
    title: 'LEÇON 31 : EXPRESSION MÉTHODOLOGIQUE : DÉCRIRE UNE IMAGE',
    type: 'cours',
    badge: 'Vol 2 • Méthodologie & Écrit',
    description: "Méthode en 3 étapes : identifier la nature du document (photo, cartoon), quadriller l'espace (foreground, background, middle, on the left/right), emploi obligatoire du présent continu (BE + -ING) et avis personnel.",
    lessonData: LESSON_31_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-32',
    title: 'LEÇON 32 : EXPRESSION ÉCRITE : RÉDIGER UNE LETTRE OU CARTE POSTALE',
    type: 'cours',
    badge: 'Vol 2 • Méthodologie & Écrit',
    description: "Les 5 parties de la lettre amicale (Heading, Salutation, Opening, Body, Closing/Signature), particularités de la carte postale de vacances ('Wish you were here!'), formules de politesse et lettre modèle complète.",
    lessonData: LESSON_32_ANGLAIS_5EME
  },
  {
    id: 'anglais-5eme-lecon-33',
    title: 'LEÇON 33 : EXPRESSION ORALE : DIALOGUER DANS UN JEU DE RÔLE',
    type: 'cours',
    badge: 'Vol 2 • Méthodologie & Écrit',
    description: "Clés de la communication orale (eye contact, intonation montante/descendante, fillers), scénarios complets (demander son chemin, faire des achats en boutique), phrases de relance et grille officielle d'évaluation.",
    lessonData: LESSON_33_ANGLAIS_5EME
  }
];
