import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_FRANCAIS_4EME,
  LESSON_2_FRANCAIS_4EME,
  LESSON_3_FRANCAIS_4EME,
  LESSON_4_FRANCAIS_4EME,
  LESSON_5_FRANCAIS_4EME,
  LESSON_6_FRANCAIS_4EME,
  LESSON_7_FRANCAIS_4EME,
  LESSON_8_FRANCAIS_4EME,
  LESSON_9_FRANCAIS_4EME,
  LESSON_10_FRANCAIS_4EME,
  LESSON_11_FRANCAIS_4EME,
  LESSON_12_FRANCAIS_4EME,
  LESSON_13_FRANCAIS_4EME
} from './courses_4eme_francais_grammaire';

import {
  LESSON_14_FRANCAIS_4EME,
  LESSON_15_FRANCAIS_4EME,
  LESSON_16_FRANCAIS_4EME,
  LESSON_17_FRANCAIS_4EME,
  LESSON_18_FRANCAIS_4EME,
  LESSON_19_FRANCAIS_4EME,
  LESSON_20_FRANCAIS_4EME,
  LESSON_21_FRANCAIS_4EME
} from './courses_4eme_francais_vocabulaire';

import {
  LESSON_22_FRANCAIS_4EME,
  LESSON_23_FRANCAIS_4EME,
  LESSON_24_FRANCAIS_4EME,
  LESSON_25_FRANCAIS_4EME,
  LESSON_26_FRANCAIS_4EME,
  LESSON_27_FRANCAIS_4EME,
  LESSON_28_FRANCAIS_4EME
} from './courses_4eme_francais_conjugaison';

import {
  LESSON_29_FRANCAIS_4EME,
  LESSON_30_FRANCAIS_4EME,
  LESSON_31_FRANCAIS_4EME,
  LESSON_32_FRANCAIS_4EME,
  LESSON_33_FRANCAIS_4EME,
  LESSON_34_FRANCAIS_4EME
} from './courses_4eme_francais_orthographe';

import {
  LESSON_35_FRANCAIS_4EME,
  LESSON_36_FRANCAIS_4EME,
  LESSON_37_FRANCAIS_4EME,
  LESSON_38_FRANCAIS_4EME,
  LESSON_39_FRANCAIS_4EME,
  LESSON_40_FRANCAIS_4EME,
  LESSON_41_FRANCAIS_4EME
} from './courses_4eme_francais_expression';

export {
  LESSON_1_FRANCAIS_4EME,
  LESSON_2_FRANCAIS_4EME,
  LESSON_3_FRANCAIS_4EME,
  LESSON_4_FRANCAIS_4EME,
  LESSON_5_FRANCAIS_4EME,
  LESSON_6_FRANCAIS_4EME,
  LESSON_7_FRANCAIS_4EME,
  LESSON_8_FRANCAIS_4EME,
  LESSON_9_FRANCAIS_4EME,
  LESSON_10_FRANCAIS_4EME,
  LESSON_11_FRANCAIS_4EME,
  LESSON_12_FRANCAIS_4EME,
  LESSON_13_FRANCAIS_4EME,
  LESSON_14_FRANCAIS_4EME,
  LESSON_15_FRANCAIS_4EME,
  LESSON_16_FRANCAIS_4EME,
  LESSON_17_FRANCAIS_4EME,
  LESSON_18_FRANCAIS_4EME,
  LESSON_19_FRANCAIS_4EME,
  LESSON_20_FRANCAIS_4EME,
  LESSON_21_FRANCAIS_4EME,
  LESSON_22_FRANCAIS_4EME,
  LESSON_23_FRANCAIS_4EME,
  LESSON_24_FRANCAIS_4EME,
  LESSON_25_FRANCAIS_4EME,
  LESSON_26_FRANCAIS_4EME,
  LESSON_27_FRANCAIS_4EME,
  LESSON_28_FRANCAIS_4EME,
  LESSON_29_FRANCAIS_4EME,
  LESSON_30_FRANCAIS_4EME,
  LESSON_31_FRANCAIS_4EME,
  LESSON_32_FRANCAIS_4EME,
  LESSON_33_FRANCAIS_4EME,
  LESSON_34_FRANCAIS_4EME,
  LESSON_35_FRANCAIS_4EME,
  LESSON_36_FRANCAIS_4EME,
  LESSON_37_FRANCAIS_4EME,
  LESSON_38_FRANCAIS_4EME,
  LESSON_39_FRANCAIS_4EME,
  LESSON_40_FRANCAIS_4EME,
  LESSON_41_FRANCAIS_4EME
};

export const COURSES_FRANCAIS_4EME: ContentData[] = [
  // --- PARTIE 1 : GRAMMAIRE (Leçons 1 à 13) ---
  {
    id: 'lecon-1-fr-4eme',
    title: 'LEÇON 1 : TYPES ET FORMES DE LA PHRASE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Les 4 types obligatoires (déclaratif, exclamatif, impératif, interrogatif), formes active/passive et affirmative/négative avec concordance des temps.',
    lessonData: LESSON_1_FRANCAIS_4EME
  },
  {
    id: 'lecon-2-fr-4eme',
    title: 'LEÇON 2 : LA PHRASE VERBALE ET LA PHRASE NON VERBALE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Organisation autour du verbe, phrases nominales, adjectivales et adverbiales, rythme rapide du récit et citation de Mariama Bâ.',
    lessonData: LESSON_2_FRANCAIS_4EME
  },
  {
    id: 'lecon-3-fr-4eme',
    title: 'LEÇON 3 : PHRASE SIMPLE – PHRASE COMPOSÉE – PHRASE COMPLEXE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Propositions indépendantes coordonnées et juxtaposées, subordonnées relatives, complétives, circonstancielles, infinitives et participiales.',
    lessonData: LESSON_3_FRANCAIS_4EME
  },
  {
    id: 'lecon-4-fr-4eme',
    title: 'LEÇON 4 : LA CONSTRUCTION DE LA PHRASE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Ordre Sujet-Verbe-Complément, inversion interrogative, formule interronégative, est-ce que, et verbes transitifs directs ou indirects.',
    lessonData: LESSON_4_FRANCAIS_4EME
  },
  {
    id: 'lecon-5-fr-4eme',
    title: 'LEÇON 5 : LES PROCÉDÉS DE MISE EN RELIEF',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Présentatifs c\'est... qui / c\'est... que, détachement en tête ou en fin de phrase avec reprise pronominale, tournure quant à.',
    lessonData: LESSON_5_FRANCAIS_4EME
  },
  {
    id: 'lecon-6-fr-4eme',
    title: 'LEÇON 6 : LA PONCTUATION',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Règles complètes d\'utilisation des 10 signes : point, exclamation, interrogation, suspension, point-virgule, deux-points, virgule, guillemets, parenthèses, tiret.',
    lessonData: LESSON_6_FRANCAIS_4EME
  },
  {
    id: 'lecon-7-fr-4eme',
    title: 'LEÇON 7 : LES GROUPES FONCTIONNELS',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Fonctions dans la phrase (sujet, verbe, COD, COI, attribut, complément d\'agent, CC) et dans le groupe nominal (nom noyau, épithète, apposition, complément du nom).',
    lessonData: LESSON_7_FRANCAIS_4EME
  },
  {
    id: 'lecon-8-fr-4eme',
    title: 'LEÇON 8 : JUXTAPOSITION – COORDINATION – SUBORDINATION',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Propositions juxtaposées, coordonnées (mais ou et donc or ni car), subordonnées complétives, relatives et les 7 nuances circonstancielles complètes.',
    lessonData: LESSON_8_FRANCAIS_4EME
  },
  {
    id: 'lecon-9-fr-4eme',
    title: 'LEÇON 9 : LES DISCOURS RAPPORTÉS',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Discours direct, discours indirect avec tableaux de concordance des temps et repères spatio-temporels, discours indirect libre et inventaire des verbes de parole.',
    lessonData: LESSON_9_FRANCAIS_4EME
  },
  {
    id: 'lecon-10-fr-4eme',
    title: 'LEÇON 10 : LE VERBE : CLASSEMENT – MODE ET TEMPS',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Les 3 groupes, les 7 modes (personnels et impersonnels) et les valeurs complètes des temps de l\'indicatif, du subjonctif et du conditionnel.',
    lessonData: LESSON_10_FRANCAIS_4EME
  },
  {
    id: 'lecon-11-fr-4eme',
    title: 'LEÇON 11 : LES FORMES DU VERBE : FORME PERSONNELLE ET FORME IMPERSONNELLE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Verbes essentiellement et occasionnellement impersonnels, rôle du sujet neutre « il », et passage de la forme personnelle à la forme impersonnelle.',
    lessonData: LESSON_11_FRANCAIS_4EME
  },
  {
    id: 'lecon-12-fr-4eme',
    title: 'LEÇON 12 : LES AUXILIAIRES ÊTRE ET AVOIR',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Emplois spécifiques d\'avoir et d\'être, verbes à double auxiliaire selon le sens (monter, descendre, sortir, retourner, demeurer) et accords.',
    lessonData: LESSON_12_FRANCAIS_4EME
  },
  {
    id: 'lecon-13-fr-4eme',
    title: 'LEÇON 13 : LES PÉRIPHRASES VERBALES',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Semi-auxiliaires de temps (aller, venir de, être sur le point de), de mode (devoir, pouvoir, faillir, avoir beau) et d\'aspect (commencer à, être en train de, cesser de).',
    lessonData: LESSON_13_FRANCAIS_4EME
  },

  // --- PARTIE 2 : VOCABULAIRE (Leçons 14 à 21) ---
  {
    id: 'lecon-14-fr-4eme',
    title: 'LEÇON 14 : LES FAMILLES DE MOTS – LA DÉRIVATION',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Radical fondamental, préfixes, suffixes, variations étymologiques et construction de nouveaux mots par dérivation.',
    lessonData: LESSON_14_FRANCAIS_4EME
  },
  {
    id: 'lecon-15-fr-4eme',
    title: 'LEÇON 15 : SENS PROPRE ET SENS FIGURÉ D’UN MOT',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Sens premier concret vs sens second abstrait et métaphorique, rôle littéraire dans l\'expression des émotions.',
    lessonData: LESSON_15_FRANCAIS_4EME
  },
  {
    id: 'lecon-16-fr-4eme',
    title: 'LEÇON 16 : SYNONYMIE ET ANTONYMIE',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Équivalence et opposition sémantique, contraintes de contexte, et formation des contraires par préfixation.',
    lessonData: LESSON_16_FRANCAIS_4EME
  },
  {
    id: 'lecon-17-fr-4eme',
    title: 'LEÇON 17 : QUELQUES FIGURES DE STYLE',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Comparaison (Birago Diop), métaphore, personnification (Abdoulaye Sadji), antithèse (Victor Hugo), périphrase et métonymie.',
    lessonData: LESSON_17_FRANCAIS_4EME
  },
  {
    id: 'lecon-18-fr-4eme',
    title: 'LEÇON 18 : LES REGISTRES DE LANGUE',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Niveau familier (Ahmadou Kourouma), courant (Marouba Fall) et soutenu (discours de Chaka par Marouba Fall).',
    lessonData: LESSON_18_FRANCAIS_4EME
  },
  {
    id: 'lecon-19-fr-4eme',
    title: 'LEÇON 19 : TERME GÉNÉRIQUE ET TERME SPÉCIFIQUE',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Rapports d\'englobement du genre et de l\'espèce, classification lexicale et tableaux comparatifs (médicament, maladie, lieu, personne).',
    lessonData: LESSON_19_FRANCAIS_4EME
  },
  {
    id: 'lecon-20-fr-4eme',
    title: 'LEÇON 20 : LES JOURNAUX : PÉRIODICITÉ, FORMAT, TYPE D’INFORMATIONS, DISTRIBUTION',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Périodicité (quotidien à bisannuel), formats (journal, magazine, revue), types d\'informations (générale, satirique, spécialisée) et distribution.',
    lessonData: LESSON_20_FRANCAIS_4EME
  },
  {
    id: 'lecon-21-fr-4eme',
    title: 'LEÇON 21 : VERBES DE PAROLE ET MARQUES DE POLITESSE',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Position et expressivité des verbes de parole dans le dialogue, formules de politesse administratives classiques et modernes.',
    lessonData: LESSON_21_FRANCAIS_4EME
  },

  // --- PARTIE 3 : CONJUGAISON (Leçons 22 à 28) ---
  {
    id: 'lecon-22-fr-4eme',
    title: 'LEÇON 22 : FORMES ET VALEURS DES TEMPS DE L’INDICATIF',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Les 4 temps simples (présent, imparfait, passé simple, futur) et les 4 temps composés avec leurs valeurs d\'emploi précises.',
    lessonData: LESSON_22_FRANCAIS_4EME
  },
  {
    id: 'lecon-23-fr-4eme',
    title: 'LEÇON 23 : FORMES ET VALEURS DES TEMPS DU SUBJONCTIF',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Présent, passé, imparfait et plus-que-parfait du subjonctif, verbes irréguliers et règle de l\'accent circonflexe à l\'imparfait.',
    lessonData: LESSON_23_FRANCAIS_4EME
  },
  {
    id: 'lecon-24-fr-4eme',
    title: 'LEÇON 24 : FORMES ET VALEURS DES TEMPS DU CONDITIONNEL',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Conditionnel présent, passé 1re et 2e formes, valeurs d\'hypothèse (si + imparfait), politesse et fait incertain.',
    lessonData: LESSON_24_FRANCAIS_4EME
  },
  {
    id: 'lecon-25-fr-4eme',
    title: 'LEÇON 25 : FORMES ET VALEURS DES TEMPS DE L’IMPÉRATIF',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Les 3 personnes de l\'impératif présent et passé, absence de -s au 1er groupe, s euphonique devant en/y et valeurs d\'injonction.',
    lessonData: LESSON_25_FRANCAIS_4EME
  },
  {
    id: 'lecon-26-fr-4eme',
    title: 'LEÇON 26 : LES VERBES IRRÉGULIERS',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Conjugaisons intégrales des verbes fondamentaux : aller, faire, dire, pouvoir, vouloir, savoir et asseoir.',
    lessonData: LESSON_26_FRANCAIS_4EME
  },
  {
    id: 'lecon-27-fr-4eme',
    title: 'LEÇON 27 : LES VERBES PRONOMINAUX',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Verbes réfléchis, réciproques, passifs et essentiellement pronominaux, auxiliaire être et règles d\'accord du participe passé.',
    lessonData: LESSON_27_FRANCAIS_4EME
  },
  {
    id: 'lecon-28-fr-4eme',
    title: 'LEÇON 28 : INFINITIF ET PARTICIPE',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Fonctions de l\'infinitif, participe présent invariable, adjectif verbal accordé, gérondif en -ant et accords du participe passé.',
    lessonData: LESSON_28_FRANCAIS_4EME
  },

  // --- PARTIE 4 : ORTHOGRAPHE (Leçons 29 à 34) ---
  {
    id: 'lecon-29-fr-4eme',
    title: 'LEÇON 29 : RADICAL – PRÉFIXE – SUFFIXE',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Règles orthographiques d\'accolement des préfixes (in-/im-/il-/ir-) et suffixes (-able/-ible, -tion, -ment, diminutifs).',
    lessonData: LESSON_29_FRANCAIS_4EME
  },
  {
    id: 'lecon-30-fr-4eme',
    title: 'LEÇON 30 : LES HOMONYMES',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Tests de substitution pour à/a/as, on/ont, et/est, son/sont, leur/leurs, quand/quant à, et c\'est/s\'est.',
    lessonData: LESSON_30_FRANCAIS_4EME
  },
  {
    id: 'lecon-31-fr-4eme',
    title: 'LEÇON 31 : LES MARQUES DE GENRE ET DE NOMBRE',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Règles et exceptions du féminin (-er, -f, -x, -teur) et du pluriel (-al en -aux, 7 noms en -oux, -ail en -aux, -eau/-eu en -x).',
    lessonData: LESSON_31_FRANCAIS_4EME
  },
  {
    id: 'lecon-32-fr-4eme',
    title: 'LEÇON 32 : LES ACCORDS DU PARTICIPE PASSÉ',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Règles exhaustives : seul, avec être (accord sujet), avec avoir (accord COD antéposé), pronominaux et pièges courants (se parler, se plaire).',
    lessonData: LESSON_32_FRANCAIS_4EME
  },
  {
    id: 'lecon-33-fr-4eme',
    title: 'LEÇON 33 : ACCORDS PARTICULIERS DE L’ADJECTIF',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Adjectifs de couleur simples et composés, noms employés comme adjectifs (invariables sauf rose, fauve...), et adjectifs employés comme adverbes.',
    lessonData: LESSON_33_FRANCAIS_4EME
  },
  {
    id: 'lecon-34-fr-4eme',
    title: 'LEÇON 34 : LE PLURIEL DES NOMS COMPOSÉS',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Règles nom+nom, adjectif+nom, verbe+nom, verbe+verbe, adverbe+nom avec toutes les exceptions classiques.',
    lessonData: LESSON_34_FRANCAIS_4EME
  },

  // --- PARTIE 5 : EXPRESSION ÉCRITE (Leçons 35 à 41) ---
  {
    id: 'lecon-35-fr-4eme',
    title: 'LEÇON 35 : LA NATURE ET LE SENS DES MOTS DANS LA PHRASE',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Les 5 classes variables (verbe, nom, déterminant, adjectif, pronom) et les 4 classes invariables (adverbe, préposition, conjonction, interjection).',
    lessonData: LESSON_35_FRANCAIS_4EME
  },
  {
    id: 'lecon-36-fr-4eme',
    title: 'LEÇON 36 : LE TEXTE NARRATIF : SCHÉMA NARRATIF, PERSONNAGES ET ACTIONS, TEMPS ET ESPACE',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Les 5 étapes du schéma narratif canonique, le schéma actanciel (sujet, objet, destinateur, destinataire, adjuvants, opposants) et gestion du temps.',
    lessonData: LESSON_36_FRANCAIS_4EME
  },
  {
    id: 'lecon-37-fr-4eme',
    title: 'LEÇON 37 : LA DESCRIPTION ET LE PORTRAIT',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Organisation spatiale de la description, lexique des 5 sens, portrait physique, moral et en action, nuances mélioratives et péjoratives.',
    lessonData: LESSON_37_FRANCAIS_4EME
  },
  {
    id: 'lecon-38-fr-4eme',
    title: 'LEÇON 38 : LA LETTRE ADMINISTRATIVE PERSONNELLE',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Disposition normalisée (en-tête, lieu/date, destinataire, objet, PJ, formule d\'appel, corps de lettre, formule de courtoisie et signature).',
    lessonData: LESSON_38_FRANCAIS_4EME
  },
  {
    id: 'lecon-39-fr-4eme',
    title: 'LEÇON 39 : LE DIALOGUE',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Typographie du dialogue (deux-points, guillemets, tirets, incises), fonctions romanesques et expressivité des répliques.',
    lessonData: LESSON_39_FRANCAIS_4EME
  },
  {
    id: 'lecon-40-fr-4eme',
    title: 'LEÇON 40 : LE TEXTE ARGUMENTATIF',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Thème, thèse, arguments, exemples (démarche A-E-E), progressions thématiques et grand tableau des connecteurs logiques.',
    lessonData: LESSON_40_FRANCAIS_4EME
  },
  {
    id: 'lecon-41-fr-4eme',
    title: 'LEÇON 41 : LE COMPTE RENDU',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Définition, mentions obligatoires (titre, date, lieu, présents, ordre du jour), déroulement fidèle, résolutions et neutralité du rapporteur.',
    lessonData: LESSON_41_FRANCAIS_4EME
  }
];
