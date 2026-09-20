import { ContentData, LessonContent } from './courses';

import {
  LESSON_1_FRANCAIS_3EME,
  LESSON_2_FRANCAIS_3EME,
  LESSON_3_FRANCAIS_3EME,
  LESSON_4_FRANCAIS_3EME,
  LESSON_5_FRANCAIS_3EME,
  LESSON_6_FRANCAIS_3EME
} from './courses_3eme_francais_part1';

import {
  LESSON_7_FRANCAIS_3EME,
  LESSON_8_FRANCAIS_3EME,
  LESSON_9_FRANCAIS_3EME,
  LESSON_10_FRANCAIS_3EME,
  LESSON_11_FRANCAIS_3EME,
  LESSON_12_FRANCAIS_3EME
} from './courses_3eme_francais_part2';

import {
  LESSON_13_FRANCAIS_3EME,
  LESSON_14_FRANCAIS_3EME,
  LESSON_15_FRANCAIS_3EME,
  LESSON_16_FRANCAIS_3EME,
  LESSON_17_FRANCAIS_3EME,
  LESSON_18_FRANCAIS_3EME
} from './courses_3eme_francais_part3';

import {
  LESSON_19_FRANCAIS_3EME,
  LESSON_20_FRANCAIS_3EME,
  LESSON_21_FRANCAIS_3EME,
  LESSON_22_FRANCAIS_3EME
} from './courses_3eme_francais_part4';

export {
  LESSON_1_FRANCAIS_3EME,
  LESSON_2_FRANCAIS_3EME,
  LESSON_3_FRANCAIS_3EME,
  LESSON_4_FRANCAIS_3EME,
  LESSON_5_FRANCAIS_3EME,
  LESSON_6_FRANCAIS_3EME,
  LESSON_7_FRANCAIS_3EME,
  LESSON_8_FRANCAIS_3EME,
  LESSON_9_FRANCAIS_3EME,
  LESSON_10_FRANCAIS_3EME,
  LESSON_11_FRANCAIS_3EME,
  LESSON_12_FRANCAIS_3EME,
  LESSON_13_FRANCAIS_3EME,
  LESSON_14_FRANCAIS_3EME,
  LESSON_15_FRANCAIS_3EME,
  LESSON_16_FRANCAIS_3EME,
  LESSON_17_FRANCAIS_3EME,
  LESSON_18_FRANCAIS_3EME,
  LESSON_19_FRANCAIS_3EME,
  LESSON_20_FRANCAIS_3EME,
  LESSON_21_FRANCAIS_3EME,
  LESSON_22_FRANCAIS_3EME
};

export const FRANCAIS_3EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons (3ème/BFEM)', count: 22 },
  { id: 'part-1', label: '1. Syntaxe de la phrase & Subordonnées', count: 6 },
  { id: 'part-2', label: '2. Fonctions, Voix & Discours', count: 6 },
  { id: 'part-3', label: '3. Orthographe, Lexique & Figures', count: 6 },
  { id: 'part-4', label: '4. Littérature & Rédaction BFEM', count: 4 }
];

export const COURSES_FRANCAIS_3EME: ContentData[] = [
  // --- PARTIE 1 : SYNTAXE DE LA PHRASE ET PROPOSITIONS SUBORDONNÉES (Leçons 1 à 6) ---
  {
    id: 'fr-3eme-lecon-1',
    title: 'LEÇON 1 : LA PHRASE SIMPLE ET LA PHRASE COMPLEXE',
    type: 'cours',
    badge: 'Syntaxe de la phrase',
    description: 'Structure de la phrase simple (proposition indépendante, verbe à un mode personnel) et modalités de liaison de la phrase complexe : juxtaposition, coordination et subordination.',
    lessonData: LESSON_1_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-2',
    title: 'LEÇON 2 : LES PROPOSITIONS SUBORDONNÉES COMPLÉTIVES',
    type: 'cours',
    badge: 'Syntaxe de la phrase',
    description: 'La complétive conjonctive pure (introduite par que, choix indicatif vs subjonctif), la complétive infinitive (sujet propre) et l\'interrogative indirecte (totale et partielle).',
    lessonData: LESSON_2_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-3',
    title: 'LEÇON 3 : LES PROPOSITIONS SUBORDONNÉES RELATIVES',
    type: 'cours',
    badge: 'Syntaxe de la phrase',
    description: 'Pronoms relatifs simples et composés, double fonction syntaxique, distinction capitale entre relative déterminative (restrictive) et relative explicative (appositive).',
    lessonData: LESSON_3_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-4',
    title: 'LEÇON 4 : LES SUBORDONNÉES CIRCONSTANCIELLES DE CAUSE ET DE CONSÉQUENCE',
    type: 'cours',
    badge: 'Syntaxe de la phrase',
    description: 'Cause (parce que, comme, puisque, sous prétexte que) et conséquence (si bien que, tellement... que), modes verbaux et exercices de transformation systématique au BFEM.',
    lessonData: LESSON_4_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-5',
    title: 'LEÇON 5 : LES SUBORDONNÉES CIRCONSTANCIELLES DE BUT ET DE TEMPS',
    type: 'cours',
    badge: 'Syntaxe de la phrase',
    description: 'Subordonnée de but (subjonctif obligatoire, coréférence du sujet avec pour/afin de) et temporelles : simultanéité, antériorité (subjonctif) et postériorité (indicatif avec après que).',
    lessonData: LESSON_5_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-6',
    title: 'LEÇON 6 : LES SUBORDONNÉES DE CONDITION (HYPOTHÈSE) ET DE CONCESSION/OPPOSITION',
    type: 'cours',
    badge: 'Syntaxe de la phrase',
    description: 'Système conditionnel avec « si » (potentiel, irréel du présent, irréel du passé) et distinction entre opposition (alors que, tandis que) et concession (bien que, quoique + subjonctif).',
    lessonData: LESSON_6_FRANCAIS_3EME
  },

  // --- PARTIE 2 : FONCTIONS GRAMMATICALES, VOIX ET DISCOURS (Leçons 7 à 12) ---
  {
    id: 'fr-3eme-lecon-7',
    title: 'LEÇON 7 : LES FONCTIONS AUTOUR DU NOM',
    type: 'cours',
    badge: 'Grammaire & Morphosyntaxe',
    description: 'Expansions nominales au sein du groupe nominal : épithète liée, épithète détachée (apposition), complément du nom (CDN) et complément de l\'antécédent.',
    lessonData: LESSON_7_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-8',
    title: 'LEÇON 8 : LES FONCTIONS AUTOUR DU VERBE',
    type: 'cours',
    badge: 'Grammaire & Morphosyntaxe',
    description: 'Compléments essentiels du verbe : Complément d\'Objet Direct (COD), Indirect (COI), Second (COS), Attribut du Sujet (verbes d\'état) et Attribut du COD.',
    lessonData: LESSON_8_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-9',
    title: 'LEÇON 9 : LA VOIX ACTIVE ET LA VOIX PASSIVE',
    type: 'cours',
    badge: 'Grammaire & Morphosyntaxe',
    description: 'Mécanisme rigoureux de transformation, accord du participe passé avec l\'auxiliaire être, préposition du complément d\'agent (par ou de) et traitement du sujet indéfini « on ».',
    lessonData: LESSON_9_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-10',
    title: 'LEÇON 10 : LES DISCOURS RAPPORTÉS',
    type: 'cours',
    badge: 'Grammaire du Discours',
    description: 'Discours direct (ponctuation, déictiques), discours indirect (concordance stricte des temps au passé, transpositions spatiales et temporelles) et discours indirect libre.',
    lessonData: LESSON_10_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-11',
    title: 'LEÇON 11 : LES OUTILS DU DISCOURS : PRÉSENTATIFS ET MODALISATEURS',
    type: 'cours',
    badge: 'Grammaire du Discours',
    description: 'Présentatifs (c\'est... qui/que, voilà, voici) et extraction ; modalisateurs (adverbes, verbes modaux, conditionnel, vocabulaire mélioratif et péjoratif).',
    lessonData: LESSON_11_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-12',
    title: 'LEÇON 12 : LE SYSTÈME VERBAL : VALEURS DES TEMPS DE L\'INDICATIF ET DU SUBJONCTIF',
    type: 'cours',
    badge: 'Conjugaison & Système Verbal',
    description: 'Valeurs d\'emploi des temps de l\'indicatif (présent de vérité générale/narration, imparfait d\'arrière-plan, passé simple de premier plan) et valeurs du subjonctif.',
    lessonData: LESSON_12_FRANCAIS_3EME
  },

  // --- PARTIE 3 : ORTHOGRAPHE GRAMMATICALE, LEXIQUE ET FIGURES DE STYLE (Leçons 13 à 18) ---
  {
    id: 'fr-3eme-lecon-13',
    title: 'LEÇON 13 : L\'ACCORD DU PARTICIPE PASSÉ',
    type: 'cours',
    badge: 'Orthographe Grammaticale',
    description: 'Règles complètes : sans auxiliaire, avec être (accord sujet), avec avoir (règle du COD antéposé, piège de « en »), et verbes pronominaux (recherche du COD/COI réfléchi).',
    lessonData: LESSON_13_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-14',
    title: 'LEÇON 14 : LE PLURIEL DES NOMS COMPOSÉS ET DES MOTS PARTICULIERS',
    type: 'cours',
    badge: 'Orthographe Grammaticale',
    description: 'Noms composés (nom+nom, adjectif+nom, verbe+nom, mot invariable+nom), accord des adjectifs de couleur (simples, d\'origine nominale, composés) et mots d\'origine étrangère.',
    lessonData: LESSON_14_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-15',
    title: 'LEÇON 15 : LES HOMOPHONES GRAMMATICAUX ET LEXICAUX COURANTS',
    type: 'cours',
    badge: 'Orthographe Grammaticale',
    description: 'Méthodes de substitution mentale pour a/à, son/sont, on/ont, ou/où, ce/se, ces/ses/c\'est/s\'est, leur/leurs et homophones lexicaux pour zéro faute en dictée BFEM.',
    lessonData: LESSON_15_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-16',
    title: 'LEÇON 16 : LE LEXIQUE ET LES RELATIONS DE SENS',
    type: 'cours',
    badge: 'Vocabulaire & Sémantique',
    description: 'Synonymie et registres, antonymie et préfixes privatifs, homonymie, paronymie (effraction/infraction, éminent/imminent) et polysémie (sens propre vs figuré).',
    lessonData: LESSON_16_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-17',
    title: 'LEÇON 17 : LES CHAMPS LEXICAUX ET SÉMANTIQUES',
    type: 'cours',
    badge: 'Vocabulaire & Sémantique',
    description: 'Identification des champs lexicaux pour dégager l\'atmosphère d\'un texte et analyse du champ sémantique d\'un mot. Réseaux d\'antithèses dans la littérature africaine.',
    lessonData: LESSON_17_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-18',
    title: 'LEÇON 18 : LES FIGURES DE STYLE FONDAMENTALES',
    type: 'cours',
    badge: 'Outils d\'Analyse Littéraire',
    description: 'Figures d\'analogie (comparaison, métaphore, personnification), d\'exagération et atténuation (hyperbole, litote, euphémisme), d\'opposition (antithèse, oxymore) et d\'insistance.',
    lessonData: LESSON_18_FRANCAIS_3EME
  },

  // --- PARTIE 4 : LITTÉRATURE MAJEURE ET EXPRESSION ÉCRITE BFEM (Leçons 19 à 22) ---
  {
    id: 'fr-3eme-lecon-19',
    title: 'LEÇON 19 : LES GENRES LITTÉRAIRES MAJEURS',
    type: 'cours',
    badge: 'Littérature Africaine & Universelle',
    description: 'Le roman réaliste et engagé (*Une si longue lettre*, *L\'Aventure ambiguë*, *Les Bouts de bois de Dieu*), la poésie de la Négritude (Senghor, David Diop) et le théâtre dramatique.',
    lessonData: LESSON_19_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-20',
    title: 'LEÇON 20 : LES REGISTRES LITTÉRAIRES',
    type: 'cours',
    badge: 'Littérature & Rhétorique',
    description: 'Définition des tonalités et impacts émotionnels : registres comique, tragique, lyrique, satirique, pathétique, polémique et didactique avec exemples littéraires analysés.',
    lessonData: LESSON_20_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-21',
    title: 'LEÇON 21 : LE SUJET NARRATIF-DESCRIPTIF AU BFEM',
    type: 'cours',
    badge: 'Méthodologie Rédaction BFEM',
    description: 'Méthodologie complète de la composition narrative : respect des 5 étapes du schéma narratif, pauses descriptives, portraits physiques et moraux, et temps du passé.',
    lessonData: LESSON_21_FRANCAIS_3EME
  },
  {
    id: 'fr-3eme-lecon-22',
    title: 'LEÇON 22 : LE SUJET ARGUMENTATIF AU BFEM',
    type: 'cours',
    badge: 'Méthodologie Rédaction BFEM',
    description: 'Méthodologie intégrale de la dissertation : introduction en 3 temps, développement structuré avec la règle A-E-E (Argument, Explication, Exemple) et conclusion avec bilan et ouverture.',
    lessonData: LESSON_22_FRANCAIS_3EME
  }
];
