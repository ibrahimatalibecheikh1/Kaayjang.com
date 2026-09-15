import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_FRANCAIS_5EME,
  LESSON_2_FRANCAIS_5EME,
  LESSON_3_FRANCAIS_5EME,
  LESSON_4_FRANCAIS_5EME,
  LESSON_5_FRANCAIS_5EME,
  LESSON_6_FRANCAIS_5EME,
  LESSON_7_FRANCAIS_5EME,
  LESSON_8_FRANCAIS_5EME,
  LESSON_9_FRANCAIS_5EME,
  LESSON_10_FRANCAIS_5EME,
  LESSON_11_FRANCAIS_5EME,
  LESSON_12_FRANCAIS_5EME,
  LESSON_13_FRANCAIS_5EME
} from './courses_5eme_francais_grammaire';

import {
  LESSON_14_FRANCAIS_5EME,
  LESSON_15_FRANCAIS_5EME,
  LESSON_16_FRANCAIS_5EME,
  LESSON_17_FRANCAIS_5EME,
  LESSON_18_FRANCAIS_5EME
} from './courses_5eme_francais_vocabulaire';

import {
  LESSON_19_FRANCAIS_5EME,
  LESSON_20_FRANCAIS_5EME,
  LESSON_21_FRANCAIS_5EME,
  LESSON_22_FRANCAIS_5EME,
  LESSON_23_FRANCAIS_5EME
} from './courses_5eme_francais_conjugaison';

import {
  LESSON_24_FRANCAIS_5EME,
  LESSON_25_FRANCAIS_5EME,
  LESSON_26_FRANCAIS_5EME,
  LESSON_27_FRANCAIS_5EME,
  LESSON_28_FRANCAIS_5EME,
  LESSON_29_FRANCAIS_5EME,
  LESSON_30_FRANCAIS_5EME
} from './courses_5eme_francais_orthographe';

import {
  LESSON_31_FRANCAIS_5EME,
  LESSON_32_FRANCAIS_5EME,
  LESSON_33_FRANCAIS_5EME,
  LESSON_34_FRANCAIS_5EME,
  LESSON_35_FRANCAIS_5EME
} from './courses_5eme_francais_expression';

export {
  LESSON_1_FRANCAIS_5EME,
  LESSON_2_FRANCAIS_5EME,
  LESSON_3_FRANCAIS_5EME,
  LESSON_4_FRANCAIS_5EME,
  LESSON_5_FRANCAIS_5EME,
  LESSON_6_FRANCAIS_5EME,
  LESSON_7_FRANCAIS_5EME,
  LESSON_8_FRANCAIS_5EME,
  LESSON_9_FRANCAIS_5EME,
  LESSON_10_FRANCAIS_5EME,
  LESSON_11_FRANCAIS_5EME,
  LESSON_12_FRANCAIS_5EME,
  LESSON_13_FRANCAIS_5EME,
  LESSON_14_FRANCAIS_5EME,
  LESSON_15_FRANCAIS_5EME,
  LESSON_16_FRANCAIS_5EME,
  LESSON_17_FRANCAIS_5EME,
  LESSON_18_FRANCAIS_5EME,
  LESSON_19_FRANCAIS_5EME,
  LESSON_20_FRANCAIS_5EME,
  LESSON_21_FRANCAIS_5EME,
  LESSON_22_FRANCAIS_5EME,
  LESSON_23_FRANCAIS_5EME,
  LESSON_24_FRANCAIS_5EME,
  LESSON_25_FRANCAIS_5EME,
  LESSON_26_FRANCAIS_5EME,
  LESSON_27_FRANCAIS_5EME,
  LESSON_28_FRANCAIS_5EME,
  LESSON_29_FRANCAIS_5EME,
  LESSON_30_FRANCAIS_5EME,
  LESSON_31_FRANCAIS_5EME,
  LESSON_32_FRANCAIS_5EME,
  LESSON_33_FRANCAIS_5EME,
  LESSON_34_FRANCAIS_5EME,
  LESSON_35_FRANCAIS_5EME
};

export const COURSES_FRANCAIS_5EME: ContentData[] = [
  // --- PARTIE 1 : GRAMMAIRE ---
  {
    id: 'lecon-1-fr-5eme',
    title: 'LEÇON 1 : L’ÉCRITURE PHONÉTIQUE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Phones, phonèmes, tableau des 37 phonèmes de l\'API (12 orales, 4 nasales, 17 consonnes, 3 semi-consonnes), multiplicité des graphies et 6 exercices complets.',
    lessonData: LESSON_1_FRANCAIS_5EME
  },
  {
    id: 'lecon-2-fr-5eme',
    title: 'LEÇON 2 : LA PRONONCIATION PHONÉTIQUE – L’ORTHOPHONIE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Écarts graphie/prononciation, règles du mot "plus", lettre "s" [s]/[z], lettres muettes (-e, -b, -c, -d, -g, -l, -p, -s, -t, -x, -r), élision, liaisons et "h" muet/aspiré.',
    lessonData: LESSON_2_FRANCAIS_5EME
  },
  {
    id: 'lecon-3-fr-5eme',
    title: 'LEÇON 3 : LE GROUPE NOMINAL ET LE GROUPE VERBAL',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Constituants obligatoires et facultatifs de la phrase simple : nom noyau et déterminant ; verbe noyau et compléments indispensables/circonstanciels.',
    lessonData: LESSON_3_FRANCAIS_5EME
  },
  {
    id: 'lecon-4-fr-5eme',
    title: 'LEÇON 4 : LE GROUPE NOMINAL : LES DÉTERMINANTS',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Articles définis, indéfinis, partitifs ; adjectifs démonstratifs, possessifs, indéfinis, interrogatifs/exclamatifs et numéraux cardinaux (accords de 20 et 100).',
    lessonData: LESSON_4_FRANCAIS_5EME
  },
  {
    id: 'lecon-5-fr-5eme',
    title: 'LEÇON 5 : LE PRONOM PERSONNEL SUJET OU COMPLÉMENT',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Pronoms exclusivement sujets (je, tu, il, ils), exclusivement compléments (le, la, les, se, en, y) et pronoms mixtes sujets ou compléments (nous, vous, lui, leur, eux).',
    lessonData: LESSON_5_FRANCAIS_5EME
  },
  {
    id: 'lecon-6-fr-5eme',
    title: 'LEÇON 6 : LES AUTRES PRONOMS (DÉMONSTRATIFS, POSSESSIFS, RELATIFS)',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Tableaux complets des pronoms démonstratifs (celui-ci, celle-là...), possessifs (le mien, les leurs...) et pronoms relatifs simples et composés.',
    lessonData: LESSON_6_FRANCAIS_5EME
  },
  {
    id: 'lecon-7-fr-5eme',
    title: 'LEÇON 7 : L’ADJECTIF QUALIFICATIF (FORMES, FONCTIONS, PLACES ET DEGRÉS)',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Formes simples, dérivées, composées, conversion ; fonctions épithète, attribut, apposée ; degrés d\'intensité et de comparaison (comparatif et superlatif).',
    lessonData: LESSON_7_FRANCAIS_5EME
  },
  {
    id: 'lecon-8-fr-5eme',
    title: 'LEÇON 8 : VERBES TRANSITIFS ET VERBES INTRANSITIFS',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Transitif direct (COD) vs transitif indirect (COI) ; verbes intransitifs par nature (aller, voyager) et verbes à double construction (fleurir, brûler).',
    lessonData: LESSON_8_FRANCAIS_5EME
  },
  {
    id: 'lecon-9-fr-5eme',
    title: 'LEÇON 9 : VOIX ACTIVE ET VOIX PASSIVE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Définitions, rôle du sujet, mécanisme de transformation passive, accord du participe passé et complément d\'agent introduit par "par" ou "de".',
    lessonData: LESSON_9_FRANCAIS_5EME
  },
  {
    id: 'lecon-10-fr-5eme',
    title: 'LEÇON 10 : LA FORME PRONOMINALE ET LA FORME IMPERSONNELLE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Verbes essentiellement et occasionnellement pronominaux ; verbes impersonnels avec sujet "il" neutre (météorologie, falloir, s\'agir).',
    lessonData: LESSON_10_FRANCAIS_5EME
  },
  {
    id: 'lecon-11-fr-5eme',
    title: 'LEÇON 11 : LA PHRASE COMPLEXE : RELATIVES ET COMPLÉTIVES',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Proposition relative déterminative vs explicative ; complétive en "que", proposition subordonnée infinitive et interrogative indirecte.',
    lessonData: LESSON_11_FRANCAIS_5EME
  },
  {
    id: 'lecon-12-fr-5eme',
    title: 'LEÇON 12 : LES SUBORDONNÉES CIRCONSTANCIELLES',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Circonstancielles de temps, cause, conséquence, but (subjonctif), comparaison et opposition (bien que, quoique + subjonctif).',
    lessonData: LESSON_12_FRANCAIS_5EME
  },
  {
    id: 'lecon-13-fr-5eme',
    title: 'LEÇON 13 : LA PROPOSITION SUBORDONNÉE PARTICIPIALE',
    type: 'cours',
    badge: 'Grammaire',
    description: 'Proposition circonstancielle sans mot subordonnant, noyau au participe présent ou passé, et sujet autonome distinct de la principale.',
    lessonData: LESSON_13_FRANCAIS_5EME
  },

  // --- PARTIE 2 : VOCABULAIRE ---
  {
    id: 'lecon-14-fr-5eme',
    title: 'LEÇON 14 : LA FAMILLE DE MOTS',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Radical commun, dérivation lexicale et variations historiques étymologiques (dimanche / dominical, été / estival, terre / terrestre).',
    lessonData: LESSON_14_FRANCAIS_5EME
  },
  {
    id: 'lecon-15-fr-5eme',
    title: 'LEÇON 15 : LA FORMATION DES MOTS : DÉRIVATION ET COMPOSITION',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Radical, préfixes (sens et nuance), suffixes (changement de classe grammaticale) et mots composés soudés ou à trait d\'union.',
    lessonData: LESSON_15_FRANCAIS_5EME
  },
  {
    id: 'lecon-16-fr-5eme',
    title: 'LEÇON 16 : SENS PROPRE ET SENS FIGURÉ',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Sens premier concret usuel versus sens second métaphorique imagé à travers les contes africains et le langage sportif.',
    lessonData: LESSON_16_FRANCAIS_5EME
  },
  {
    id: 'lecon-17-fr-5eme',
    title: 'LEÇON 17 : LES REGISTRES DE LANGUE (SOUTENU, COURANT, FAMILIER)',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Niveaux de langue, situations de communication, syntaxe et tableau de transpositions lexicales (se paumer, se perdre, s\'égarer).',
    lessonData: LESSON_17_FRANCAIS_5EME
  },
  {
    id: 'lecon-18-fr-5eme',
    title: 'LEÇON 18 : QUELQUES FIGURES DE STYLE',
    type: 'cours',
    badge: 'Vocabulaire',
    description: 'Prosopopée (faire parler les morts ou allégories), personnification, comparaison avec outil et métaphore implicite.',
    lessonData: LESSON_18_FRANCAIS_5EME
  },

  // --- PARTIE 3 : CONJUGAISON ---
  {
    id: 'lecon-19-fr-5eme',
    title: 'LEÇON 19 : FORMES ET VALEURS DES TEMPS DE L’INDICATIF',
    type: 'cours',
    badge: 'Conjugaison',
    description: '4 temps simples (présent, imparfait, passé simple, futur simple) et 4 temps composés (passé composé, plus-que-parfait, passé antérieur, futur antérieur).',
    lessonData: LESSON_19_FRANCAIS_5EME
  },
  {
    id: 'lecon-20-fr-5eme',
    title: 'LEÇON 20 : FORMES ET VALEURS DES TEMPS DU SUBJONCTIF',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Présent, imparfait (-sse, -ât/-ît/-ût), passé, plus-que-parfait du subjonctif et valeurs de volonté, doute, regret et locutions subordonnées.',
    lessonData: LESSON_20_FRANCAIS_5EME
  },
  {
    id: 'lecon-21-fr-5eme',
    title: 'LEÇON 21 : FORMES ET VALEURS DU CONDITIONNEL',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Conditionnel présent (radical futur + imparfait), passé 1re et 2e forme ; valeurs d\'hypothèse (si + imparfait), futur dans le passé et politesse.',
    lessonData: LESSON_21_FRANCAIS_5EME
  },
  {
    id: 'lecon-22-fr-5eme',
    title: 'LEÇON 22 : FORMES ET VALEURS DE L’IMPÉRATIF',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Impératif présent (3 personnes sans sujet, règles du -e au 1er groupe, euphonie vas-y) et impératif passé ; valeurs d\'ordre, conseil et prière.',
    lessonData: LESSON_22_FRANCAIS_5EME
  },
  {
    id: 'lecon-23-fr-5eme',
    title: 'LEÇON 23 : SYNTHÈSE DES CONSTRUCTIONS VERBALES',
    type: 'cours',
    badge: 'Conjugaison',
    description: 'Tableau récapitulatif comparé des formes active, passive, pronominale et impersonnelle du verbe.',
    lessonData: LESSON_23_FRANCAIS_5EME
  },

  // --- PARTIE 4 : ORTHOGRAPHE ---
  {
    id: 'lecon-24-fr-5eme',
    title: 'LEÇON 24 : ACCORDS DU PARTICIPE PASSÉ',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Seul, avec être, avec avoir (règle du COD avant/après), verbes pronominaux (COD après / COI), suivi d\'un infinitif, précédé de "en", et verbes de mesure.',
    lessonData: LESSON_24_FRANCAIS_5EME
  },
  {
    id: 'lecon-25-fr-5eme',
    title: 'LEÇON 25 : LES ACCORDS PARTICULIERS DE L’ADJECTIF',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Couleurs simples, noms employés en couleur (marron, orange / roses, pourpres), couleurs composées, valeur adverbiale et adjectif verbal vs participe présent.',
    lessonData: LESSON_25_FRANCAIS_5EME
  },
  {
    id: 'lecon-26-fr-5eme',
    title: 'LEÇON 26 : LE PLURIEL DES NOMS COMPOSÉS',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Règle d\'or : seuls noms et adjectifs varient (choux-fleurs, couvre-pieds, arrière-boutiques, va-et-vient).',
    lessonData: LESSON_26_FRANCAIS_5EME
  },
  {
    id: 'lecon-27-fr-5eme',
    title: 'LEÇON 27 : FORMES ET RÔLES DES SIGNES DE PONCTUATION',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Virgule, point-virgule, deux-points, point, points de suspension, points d\'interrogation/exclamation, guillemets et tirets avec textes d\'écrivains sénégalais.',
    lessonData: LESSON_27_FRANCAIS_5EME
  },
  {
    id: 'lecon-28-fr-5eme',
    title: 'LEÇON 28 : L’ACCENTUATION ET LES SIGNES AUXILIAIRES',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Accent aigu (é), grave (à, è, ù), circonflexe (â, ê, î, ô, û) et signes auxiliaires : apostrophe, tréma, trait d\'union, cédille.',
    lessonData: LESSON_28_FRANCAIS_5EME
  },
  {
    id: 'lecon-29-fr-5eme',
    title: 'LEÇON 29 : LES HOMONYMES ET HOMOPHONES GRAMMATICAUX',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Tests infaillibles de substitution : on/ont, peu/peux/peut, quand/quant/qu\'en, leur/leurs, a/à, c\'est/s\'est, son/sont, et/est.',
    lessonData: LESSON_29_FRANCAIS_5EME
  },
  {
    id: 'lecon-30-fr-5eme',
    title: 'LEÇON 30 : VARIATIONS ORTHOGRAPHIQUES DES VERBES (-QUER, -GUER, -ELER, -ETER)',
    type: 'cours',
    badge: 'Orthographe',
    description: 'Maintien du radical, adjectifs verbaux en -gant/-cant, modèles appeler/jeter (double consonne) vs peler/acheter (accent grave) et réforme de 1990.',
    lessonData: LESSON_30_FRANCAIS_5EME
  },

  // --- PARTIE 5 : EXPRESSION ÉCRITE ---
  {
    id: 'lecon-31-fr-5eme',
    title: 'LEÇON 31 : CLASSE ET SENS DES MOTS DANS LA PHRASE',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Mots variables (noms, articles, adjectifs, pronoms, verbes) et invariables (adverbes, prépositions, conjonctions, interjections) et leurs sens dans le texte.',
    lessonData: LESSON_31_FRANCAIS_5EME
  },
  {
    id: 'lecon-32-fr-5eme',
    title: 'LEÇON 32 : LE TEXTE NARRATIF (SCHÉMA NARRATIF ET ACTANTIEL)',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Les 5 étapes du schéma narratif, schéma actantiel (sujet, destinateur, destinataire, adjuvant, opposant), temps et espaces du récit, et temps verbaux.',
    lessonData: LESSON_32_FRANCAIS_5EME
  },
  {
    id: 'lecon-33-fr-5eme',
    title: 'LEÇON 33 : LA DESCRIPTION ET LE PORTRAIT',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Description de lieu par les 5 sens, portrait physique (silhouette, visage, membres), portrait moral et portrait en action (exemples de Balzac et Birago Diop).',
    lessonData: LESSON_33_FRANCAIS_5EME
  },
  {
    id: 'lecon-34-fr-5eme',
    title: 'LEÇON 34 : LA LETTRE PERSONNELLE ET LES AUTRES ÉCRITS SOCIAUX',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Mise en page de la lettre (en-tête, interpellation, corps avec alinéa, formule de congé, signature), enveloppe, lettre d\'invitation, télégramme et SMS.',
    lessonData: LESSON_34_FRANCAIS_5EME
  },
  {
    id: 'lecon-35-fr-5eme',
    title: 'LEÇON 35 : LE DIALOGUE DANS LE RÉCIT',
    type: 'cours',
    badge: 'Expression Écrite',
    description: 'Règles typographiques (tirets, deux-points, guillemets), verbes de parole expressifs (gémir, rugir, répliquer) et disposition théâtrale.',
    lessonData: LESSON_35_FRANCAIS_5EME
  },

  // --- RESSOURCES & FICHES OFFICIELLES ---
  {
    id: 'pdf-francais-5eme-manuel',
    title: 'Manuel Officiel PDF : Le Français en 5ème',
    type: 'ressource',
    badge: 'Document CRFPE Saint-Louis',
    description: 'Manuel complet de cours et exercices de Français 5ème.',
    link: '#'
  },
  {
    id: 'pdf-francais-5eme-exercices',
    title: 'Cahier d’exercices & Corrigés - Français 5ème',
    type: 'ressource',
    badge: 'Exercices d\'évaluation',
    description: 'Recueil des exercices d\'application par chapitre avec devoirs surveillés et compositions corrigées.',
    link: '#'
  }
];
