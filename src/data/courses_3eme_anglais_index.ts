import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_ANGLAIS_3EME,
  LESSON_2_ANGLAIS_3EME,
  LESSON_3_ANGLAIS_3EME,
  LESSON_4_ANGLAIS_3EME,
  LESSON_5_ANGLAIS_3EME,
  LESSON_6_ANGLAIS_3EME,
  LESSON_7_ANGLAIS_3EME,
  LESSON_8_ANGLAIS_3EME,
  LESSON_9_ANGLAIS_3EME
} from './courses_3eme_anglais_part1';
import {
  LESSON_10_ANGLAIS_3EME,
  LESSON_11_ANGLAIS_3EME,
  LESSON_12_ANGLAIS_3EME,
  LESSON_13_ANGLAIS_3EME,
  LESSON_14_ANGLAIS_3EME,
  LESSON_15_ANGLAIS_3EME,
  LESSON_16_ANGLAIS_3EME,
  LESSON_17_ANGLAIS_3EME,
  LESSON_18_ANGLAIS_3EME
} from './courses_3eme_anglais_part2';

// =========================================================================
// COURS COMPLET D'ANGLAIS 3ÈME — PRÉPARATION INTÉGRALE AU BFEM AU SÉNÉGAL
// 18 LEÇONS OFFICIELLES SANS BANDEAU DE NAVIGATION (AFFICHAGE DIRECT ET INTÉGRAL)
// GRAMMAIRE APPROFONDIE (1 À 9) & THÉMATIQUES D'ARGUMENTATION ET VOCABULAIRE (10 À 18)
// =========================================================================

export const COURSES_ANGLAIS_3EME_RAW: LessonContent[] = [
  LESSON_1_ANGLAIS_3EME,
  LESSON_2_ANGLAIS_3EME,
  LESSON_3_ANGLAIS_3EME,
  LESSON_4_ANGLAIS_3EME,
  LESSON_5_ANGLAIS_3EME,
  LESSON_6_ANGLAIS_3EME,
  LESSON_7_ANGLAIS_3EME,
  LESSON_8_ANGLAIS_3EME,
  LESSON_9_ANGLAIS_3EME,
  LESSON_10_ANGLAIS_3EME,
  LESSON_11_ANGLAIS_3EME,
  LESSON_12_ANGLAIS_3EME,
  LESSON_13_ANGLAIS_3EME,
  LESSON_14_ANGLAIS_3EME,
  LESSON_15_ANGLAIS_3EME,
  LESSON_16_ANGLAIS_3EME,
  LESSON_17_ANGLAIS_3EME,
  LESSON_18_ANGLAIS_3EME
];

export const COURSES_ANGLAIS_3EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // SECTION 1 : GRAMMAIRE FONDAMENTALE & SYSTÈMES VERBAUX (LEÇONS 1 À 9)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-3eme-lecon-1',
    title: 'LESSON 1 : THE TENSE SYSTEM (PRESENT, PAST AND FUTURE)',
    type: 'cours',
    badge: 'Grammaire & Conjugaison',
    description:
      'Simple Present vs. Present Continuous, Simple Past (verbes réguliers et irréguliers) vs. Past Continuous avec when/while, et expression du futur : Will (décision spontanée) vs. Be Going To (projet prémédité et indice visible). Exemples et exercices corrigés.',
    lessonData: LESSON_1_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-2',
    title: 'LESSON 2 : THE PRESENT PERFECT TENSE',
    type: 'cours',
    badge: 'Temps & Concordance',
    description:
      "Formation avec have/has + participe passé, fonctions de bilan et lien présent/passé, règle d'or SINCE (point de départ) vs. FOR (durée), positionnement des adverbes already, yet, just, never, ever, et contraste avec le Simple Past.",
    lessonData: LESSON_2_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-3',
    title: 'LESSON 3 : THE PASSIVE VOICE',
    type: 'cours',
    badge: 'Voix Passive',
    description:
      "Mécanique universelle de transformation active/passive au BFEM, conjugaison de l'auxiliaire 'TO BE' à tous les temps, omission obligatoire de l'agent ('by someone/they'), et traitement des verbes à double complément d'objet.",
    lessonData: LESSON_3_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-4',
    title: 'LESSON 4 : REPORTED SPEECH (INDIRECT SPEECH)',
    type: 'cours',
    badge: 'Discours Indirect',
    description:
      "Règle de concordance des temps (Tense Backshift), transformation des pronoms et des indicateurs de temps/lieu (yesterday -> the day before, tomorrow -> the next day), et syntaxe des questions (if/whether) et des ordres (to / not to + BV).",
    lessonData: LESSON_4_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-5',
    title: 'LESSON 5 : CONDITIONAL SENTENCES (CONDITIONALS 0, 1, 2, 3 & UNLESS)',
    type: 'cours',
    badge: 'Conditionnel & Hypothèse',
    description:
      "Les 4 types de conditionnels décortiqués, le subjonctif 'If I were you' pour le conseil, et la règle d'or de la réécriture avec 'UNLESS' (= IF... NOT) sans double négation pour l'examen du BFEM.",
    lessonData: LESSON_5_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-6',
    title: 'LESSON 6 : RELATIVE PRONOUNS',
    type: 'cours',
    badge: 'Pronoms Relatifs',
    description:
      "Combinaison de phrases complexes avec who (humain sujet), whom (humain objet), which/that (objets/animaux), whose (possession), where (lieu) et when (temps). Distinction déterminante vs explicative avec les virgules.",
    lessonData: LESSON_6_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-7',
    title: 'LESSON 7 : MODALS AND MODAL AUXILIARIES',
    type: 'cours',
    badge: 'Auxiliaires Modaux',
    description:
      "Règles invariables des modaux, nuances d'obligation (must/have to), interdiction absolue (mustn't) vs absence d'obligation (don't have to/needn't), conseil (should/ought to), capacité (can/could), et formes au passé (had to, was able to).",
    lessonData: LESSON_7_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-8',
    title: 'LESSON 8 : COMPARATIVES & SUPERLATIVES',
    type: 'cours',
    badge: 'Comparatifs & Superlatifs',
    description:
      "Comparatif de supériorité (adjectifs courts en -er than vs adjectifs longs avec more than), égalité (as... as), superlatif (the -est vs the most), adjectifs irréguliers (good, bad, far, little, much) et double comparatif (the more... the more...).",
    lessonData: LESSON_8_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-9',
    title: 'LESSON 9 : LINK WORDS & CONNECTORS (TRANSITION WORDS)',
    type: 'cours',
    badge: 'Connecteurs Logiques',
    description:
      "Classification des connecteurs pour enrichir la rédaction au BFEM : addition (moreover), concession/opposition (although vs despite), cause (because of/due to), conséquence (therefore, consequently), but (in order to) et conclusion.",
    lessonData: LESSON_9_ANGLAIS_3EME
  },

  // -----------------------------------------------------------------------
  // SECTION 2 : THÉMATIQUES, VOCABULAIRE & ESSAIS BFEM (LEÇONS 10 À 18)
  // -----------------------------------------------------------------------
  {
    id: 'anglais-3eme-lecon-10',
    title: 'LESSON 10 : FAMILY, CULTURE & TRADITIONS',
    type: 'cours',
    badge: 'Famille & Culture',
    description:
      "Vocabulaire de la parenté (extended vs nuclear family), la Teranga sénégalaise, le respect des aînés, le fossé des générations et modèle d'essai argumenté comparant la solidarité traditionnelle et la vie urbaine moderne.",
    lessonData: LESSON_10_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-11',
    title: 'LESSON 11 : RURAL LIFE VS. URBAN LIFE',
    type: 'cours',
    badge: 'Milieu Rural vs Urbain',
    description:
      "Analyse de l'exode rural vers Dakar, contrastes environnementaux, coût de la vie, pollution et embouteillages vs quiétude et alimentation saine au village, et politiques de décentralisation économique.",
    lessonData: LESSON_11_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-12',
    title: 'LESSON 12 : EDUCATION AND LITERACY',
    type: 'cours',
    badge: 'Éducation & Alphabétisation',
    description:
      "Le pouvoir émancipateur de l'école, l'importance capitale de l'éducation des filles pour le développement, la lutte contre l'abandon scolaire (dropouts) et les solutions concrètes (bourses, cantines, proximité).",
    lessonData: LESSON_12_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-13',
    title: 'LESSON 13 : EMPLOYMENT & OCCUPATIONS',
    type: 'cours',
    badge: 'Emploi & Métiers',
    description:
      "Défis du chômage des jeunes en Afrique de l'Ouest, formation professionnelle et compétences techniques, entrepreneuriat vs fonction publique, et analyse approfondie de la fuite des cerveaux (brain drain).",
    lessonData: LESSON_13_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-14',
    title: 'LESSON 14 : ENVIRONMENT & POLLUTION',
    type: 'cours',
    badge: 'Environnement & Climat',
    description:
      "Érosion côtière sur les plages de Rufisque et Saint-Louis, prolifération des déchets plastiques, reboisement contre l'avancée du désert, campagnes civiques de Set-Setal et énergies renouvelables (solaire).",
    lessonData: LESSON_14_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-15',
    title: 'LESSON 15 : HEALTH ISSUES AND WELL-BEING',
    type: 'cours',
    badge: 'Santé & Hygiène',
    description:
      "Prévention du paludisme (moustiquaires imprégnées et élimination des eaux stagnantes), alimentation équilibrée avec les produits locaux, hygiène corporelle, eau potable, sommeil et bien-être des candidats au BFEM.",
    lessonData: LESSON_15_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-16',
    title: 'LESSON 16 : SOCIAL PROBLEMS AND VULNERABLE GROUPS',
    type: 'cours',
    badge: 'Problèmes Sociaux',
    description:
      "Protection des groupes vulnérables : travail précoce des enfants, fléau du mariage précoce des jeunes filles, mendicité des enfants des rues (talibés), délinquance juvénile et modernisation solidaire des daaras.",
    lessonData: LESSON_16_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-17',
    title: 'LESSON 17 : INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)',
    type: 'cours',
    badge: 'Numérique & TIC',
    description:
      "Avantages pédagogiques des smartphones et d'Internet (dictionnaires en ligne, tutoriels, recherche) face aux périls de l'addiction aux écrans, du cyberharcèlement (cyberbullying) et de la déconcentration en classe.",
    lessonData: LESSON_17_ANGLAIS_3EME
  },
  {
    id: 'anglais-3eme-lecon-18',
    title: 'LESSON 18 : ILLEGAL MIGRATION AND YOUTH ASPIRATIONS',
    type: 'cours',
    badge: 'Émigration Clandestine',
    description:
      "Drame des pirogues vers les îles Canaries ('Barça or Barzakh'), analyse des facteurs d'expulsion (push factors) et d'attraction illusoire (pull factors), périls en mer, et plaidoyer pour bâtir son avenir au Sénégal.",
    lessonData: LESSON_18_ANGLAIS_3EME
  }
];
