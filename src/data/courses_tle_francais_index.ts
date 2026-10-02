// =========================================================================
// INDEX CENTRAL DES COURS DE FRANÇAIS CLASSE DE TERMINALE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 20 leçons exhaustives sans résumé, grands axes et méthodologie du Baccalauréat
// =========================================================================

import { ContentData, LessonContent } from './courses';

import {
  LESSON_1_FRANCAIS_TLE,
  LESSON_2_FRANCAIS_TLE,
  LESSON_3_FRANCAIS_TLE,
  LESSON_4_FRANCAIS_TLE,
  LESSON_5_FRANCAIS_TLE
} from './courses_tle_francais_part1';

import {
  LESSON_6_FRANCAIS_TLE,
  LESSON_7_FRANCAIS_TLE,
  LESSON_8_FRANCAIS_TLE,
  LESSON_9_FRANCAIS_TLE,
  LESSON_10_FRANCAIS_TLE
} from './courses_tle_francais_part2';

import {
  LESSON_11_FRANCAIS_TLE,
  LESSON_12_FRANCAIS_TLE,
  LESSON_13_FRANCAIS_TLE,
  LESSON_14_FRANCAIS_TLE,
  LESSON_15_FRANCAIS_TLE
} from './courses_tle_francais_part3';

import {
  LESSON_16_FRANCAIS_TLE,
  LESSON_17_FRANCAIS_TLE,
  LESSON_18_FRANCAIS_TLE,
  LESSON_19_FRANCAIS_TLE,
  LESSON_20_FRANCAIS_TLE
} from './courses_tle_francais_part4';

export {
  LESSON_1_FRANCAIS_TLE, LESSON_2_FRANCAIS_TLE, LESSON_3_FRANCAIS_TLE, LESSON_4_FRANCAIS_TLE, LESSON_5_FRANCAIS_TLE,
  LESSON_6_FRANCAIS_TLE, LESSON_7_FRANCAIS_TLE, LESSON_8_FRANCAIS_TLE, LESSON_9_FRANCAIS_TLE, LESSON_10_FRANCAIS_TLE,
  LESSON_11_FRANCAIS_TLE, LESSON_12_FRANCAIS_TLE, LESSON_13_FRANCAIS_TLE, LESSON_14_FRANCAIS_TLE, LESSON_15_FRANCAIS_TLE,
  LESSON_16_FRANCAIS_TLE, LESSON_17_FRANCAIS_TLE, LESSON_18_FRANCAIS_TLE, LESSON_19_FRANCAIS_TLE, LESSON_20_FRANCAIS_TLE
};

export const FRANCAIS_TLE_PARTS = [
  { id: 'all', label: 'Toutes les leçons (20 chapitres du Bac)', count: '20' },
  { id: 'part-1', label: 'Module 1 • Poésie du XXe & Négritude (L1-L4)', count: '4' },
  { id: 'part-2', label: 'Module 2 • Roman Africain & Roman Moderne (L5-L9)', count: '5' },
  { id: 'part-3', label: 'Module 3 • Théâtre : Tragique, Absurde & Épique (L10-L14)', count: '5' },
  { id: 'part-4', label: 'Module 4 • Idées, Décolonialité & Fonctions (L15-L17)', count: '3' },
  { id: 'part-5', label: 'Module 5 • Méthodologie Experte des Épreuves du Bac (L18-L20)', count: '3' }
];

export const COURSES_FRANCAIS_TLE: ContentData[] = [
  // --- MODULE 1 : POÉSIE DU XXe SIÈCLE ET MOUVEMENT DE LA NÉGRITUDE (LEÇONS 1 À 4) ---
  {
    id: 'fr-tle-cours-1',
    title: 'LEÇON 1 : LE SURRÉALISME : RÉVOLTE POÉTIQUE, LIBÉRATION DU LANGAGE ET QUÊTE DU MERVEILLEUX',
    type: 'cours',
    badge: 'Module 1 • Poésie du XXe & Négritude',
    description: 'Genèse dans le traumatisme de 1914-1918, manifeste d\'André Breton (1924), automatisme psychique pur, télescopage des métaphores, Éluard, Aragon, et filiation directe avec la Négritude césairienne.',
    lessonData: LESSON_1_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-2',
    title: 'LEÇON 2 : LA NÉGRITUDE : GENÈSE HISTORIQUE, CONTEXTE DE L\'ENTRE-DEUX-GUERRES ET COMBAT ÉMANCIPATEUR',
    type: 'cours',
    badge: 'Module 1 • Poésie du XXe & Négritude',
    description: 'Contexte colonial d\'oppression, le Paris cosmopolite des années 1930, rôle de la Revue du Monde Noir et de Légitime Défense, naissance de L\'Étudiant noir, le trio Senghor-Césaire-Damas et le refus de l\'assimilation.',
    lessonData: LESSON_2_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-3',
    title: 'LEÇON 3 : LA POÉTIQUE DE LA NÉGRITUDE : RYTHME, MYTHES ANCESTRAUX ET DIALOGUE UNIVERSEL',
    type: 'cours',
    badge: 'Module 1 • Poésie du XXe & Négritude',
    description: 'Esthétique comparée de Senghor et Césaire : le rythme cosmique et les instruments traditionnels (kora, balafon), la Femme Noire, les Ancêtres, le volcanisme césairien et la Civilisation de l\'Universel.',
    lessonData: LESSON_3_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-4',
    title: 'LEÇON 4 : ÉVOLUTION, DÉBATS ET CRITIQUES DE LA NÉGRITUDE : DE LA CONTESTATION À LA CRÉOLITÉ',
    type: 'cours',
    badge: 'Module 1 • Poésie du XXe & Négritude',
    description: 'Les contestations internes et externes : le mot d\'esprit de Wole Soyinka (« tigritude »), le pamphlet de Stanislas Adotevi (Négrologie), Marcien Towa, Frantz Fanon, et le dépassement par la Créolité (Glissant, Chamoiseau).',
    lessonData: LESSON_4_FRANCAIS_TLE
  },

  // --- MODULE 2 : LE ROMAN NÉGRO-AFRICAIN ET LE ROMAN MODERNE (LEÇONS 5 À 9) ---
  {
    id: 'fr-tle-cours-5',
    title: 'LEÇON 5 : LE ROMAN COLONIAL ET LA DÉNONCIATION DU SYSTÈME IMPÉRIAL : DE BATOUALA À FERDINAND OYONO',
    type: 'cours',
    badge: 'Module 2 • Roman Africain & Moderne',
    description: 'Rupture historique de Batouala de René Maran (Prix Goncourt 1921), la satire féroce du complexe colonial chez Ferdinand Oyono (Une vie de boy, Le Vieux Nègre et la médaille) et la démystification cléricale de Mongo Beti.',
    lessonData: LESSON_5_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-6',
    title: 'LEÇON 6 : L\'AVENTURE AMBIGUË DE CHEIKH HAMIDOU KANE : ITINÉRAIRE SPIRITUEL ET CHOC DES CIVILISATIONS',
    type: 'cours',
    badge: 'Module 2 • Roman Africain & Moderne',
    description: 'Le chef-d\'œuvre sénégalais : le Foyer des Diallobé, Maître Thierno, la Grande Royale et l\'école nouvelle (« lier le bois au bois »), l\'exil parisien déchiré de Samba Diallo et le dénouement mystique au cimetière.',
    lessonData: LESSON_6_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-7',
    title: 'LEÇON 7 : LE ROMAN DES DÉSILLUSIONS POST-COLONIALES : LES SOLEILS DES INDÉPENDANCES ET SEMBÈNE OUSMANE',
    type: 'cours',
    badge: 'Module 2 • Roman Africain & Moderne',
    description: 'La rupture stylistique et politique des Soleils des indépendances d\'Ahmadou Kourouma (malinkisation du français, déchéance de Fama) et l\'engagement réaliste socialiste de Sembène Ousmane (Les Bouts de bois de Dieu, Le Mandat, Xala).',
    lessonData: LESSON_7_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-8',
    title: 'LEÇON 8 : L\'ÉMERGENCE DU ROMAN FÉMININ AFRICAIN : MARIAMA BÂ ET AMINATA SOW FALL',
    type: 'cours',
    badge: 'Module 2 • Roman Africain & Moderne',
    description: 'L\'irruption des voix féminines sénégalaises : Une si longue lettre de Mariama Bâ (le mirasse, la polygamie vécue, la dignité de Ramatoulaye) et La Grève des bàtthu d\'Aminata Sow Fall (la révolte des mendiants, Mour Ndiaye et la satire du pouvoir).',
    lessonData: LESSON_8_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-9',
    title: 'LEÇON 9 : LE ROMAN MODERNE OCCIDENTAL : L\'EXISTENTIALISME ET LE NOUVEAU ROMAN',
    type: 'cours',
    badge: 'Module 2 • Roman Africain & Moderne',
    description: 'La remise en cause des conventions balzaciennes : l\'Existentialisme (Sartre avec La Nausée, Camus avec L\'Étranger et La Peste), puis la déconstruction formelle du Nouveau Roman (Robbe-Grillet, Sarraute, Butor).',
    lessonData: LESSON_9_FRANCAIS_TLE
  },

  // --- MODULE 3 : LE THÉÂTRE AU XXe SIÈCLE : TRAGIQUE, ABSURDE ET ÉPIQUE (LEÇONS 10 À 14) ---
  {
    id: 'fr-tle-cours-10',
    title: 'LEÇON 10 : LE THÉÂTRE NÉGRO-AFRICAIN D\'ENGAGEMENT HISTORIQUE : L\'EXIL D\'ALBOURI ET LA TRAGÉDIE DU ROI CHRISTOPHE',
    type: 'cours',
    badge: 'Module 3 • Théâtre au XXe Siècle',
    description: 'La réhabilitation théâtrale de la mémoire : L\'Exil d\'Albouri de Cheik Aliou Ndao (résistance du Djoloff en 1890, dilemme cornélien d\'Albouri) et La Tragédie du roi Christophe d\'Aimé Césaire (vertige du pouvoir décolonisé en Haïti).',
    lessonData: LESSON_10_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-11',
    title: 'LEÇON 11 : LA SATIRE POLITIQUE ET SOCIALE DANS LE THÉÂTRE AFRICAIN : BERNARD DADIÉ ET OYÔNÔ MBIA',
    type: 'cours',
    badge: 'Module 3 • Théâtre au XXe Siècle',
    description: 'Corriger les mœurs par le rire : Monsieur Thôgô-gnini de Bernard Dadié (satire de l\'arrivisme compradore servile) et Trois prétendants... un mari de Guillaume Oyônô Mbia (la comédie villageoise de la dot mercantile).',
    lessonData: LESSON_11_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-12',
    title: 'LEÇON 12 : LA RÉÉCRITURE DES MYTHES ANTIQUES ET LE TRAGIQUE MODERNE : JEAN ANOUILH ET SARTRE',
    type: 'cours',
    badge: 'Module 3 • Théâtre au XXe Siècle',
    description: 'Les mythes sous l\'Occupation : Antigone de Jean Anouilh (le refus intransigeant du bonheur compromis face à Créon) et Les Mouches de Jean-Paul Sartre (la liberté prométhéenne d\'Oreste défiant Jupiter).',
    lessonData: LESSON_12_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-13',
    title: 'LEÇON 13 : LE THÉÂTRE DE L\'ABSURDE ET LA CRISE DU LANGAGE : SAMUEL BECKETT ET EUGÈNE IONESCO',
    type: 'cours',
    badge: 'Module 3 • Théâtre au XXe Siècle',
    description: 'La rupture de l\'après-guerre : En attendant Godot de Samuel Beckett (l\'attente du vide existentiel, Vladimir et Estragon) et Rhinocéros d\'Eugène Ionesco (la métamorphose totalitaire de la foule et la résistance héroïque de Bérenger).',
    lessonData: LESSON_13_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-14',
    title: 'LEÇON 14 : LE THÉÂTRE ÉPIQUE ET LA DISTANCIATION CRITIQUE : BERTOLT BRECHT',
    type: 'cours',
    badge: 'Module 3 • Théâtre au XXe Siècle',
    description: 'La théorie révolutionnaire de Bertolt Brecht : rejet de la catharsis bourgeoise, le Verfremdungseffekt (effet de distanciation) et l\'autopsie de la guerre capitaliste dans Mère Courage et ses enfants.',
    lessonData: LESSON_14_FRANCAIS_TLE
  },

  // --- MODULE 4 : LITTÉRATURE D\'IDÉES, ESSAI ET FONCTIONS DE LA LITTÉRATURE (LEÇONS 15 À 17) ---
  {
    id: 'fr-tle-cours-15',
    title: 'LEÇON 15 : L\'ENGAGEMENT LITTÉRAIRE ET PHILOSOPHIQUE AU XXe SIÈCLE : LA QUERELLE SARTRE-CAMUS',
    type: 'cours',
    badge: 'Module 4 • Idées & Fonctions',
    description: 'Le débat historique sur la responsabilité de l\'écrivain : Qu\'est-ce que la littérature ? de Sartre (la parole comme action de dévoilement) et la réplique d\'Albert Camus dans L\'Homme révolté (la mesure contre la terreur idéologique).',
    lessonData: LESSON_15_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-16',
    title: 'LEÇON 16 : LA PENSÉE DÉCOLONIALE ET LA RENAISSANCE AFRICAINE : FRANTZ FANON ET CHEIKH ANTA DIOP',
    type: 'cours',
    badge: 'Module 4 • Idées & Fonctions',
    description: 'Les géants de la souveraineté intellectuelle : Les Damnés de la terre de Frantz Fanon (la violence désaliénante et les mésaventures nationales) et Nations nègres et culture de Cheikh Anta Diop (preuve de l\'origine nègre de l\'Égypte antique et État fédéral).',
    lessonData: LESSON_16_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-17',
    title: 'LEÇON 17 : LES FONCTIONS PLURIELLES DE LA LITTÉRATURE : ESTHÉTIQUE, SUBVERSIVE, CATHARTIQUE ET MÉMORIELLE',
    type: 'cours',
    badge: 'Module 4 • Idées & Fonctions',
    description: 'Typologie exhaustive des finalités de l\'écriture : le culte du Beau et l\'Art pour l\'Art, la littérature comme glaive politique, la purgation des passions (catharsis), le devoir de mémoire et la fonction didactique.',
    lessonData: LESSON_17_FRANCAIS_TLE
  },

  // --- MODULE 5 : MÉTHODOLOGIE EXPERTE DES ÉPREUVES DU BACCALAURÉAT SÉNÉGALAIS (LEÇONS 18 À 20) ---
  {
    id: 'fr-tle-cours-18',
    title: 'LEÇON 18 : LA DISSERTATION LITTÉRAIRE AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE COMPLÈTE ET DEVOIR TYPE ENTIÈREMENT RÉDIGÉ',
    type: 'cours',
    badge: 'Module 5 • Méthodologie Bac',
    description: 'Guide exhaustif de l\'épreuve reine : déconstruction du libellé, problématique, plans dialectique/thématique, structure des paragraphes A.E.I. et sujet officiel entièrement rédigé avec corpus négro-africain et mondial.',
    lessonData: LESSON_18_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-19',
    title: 'LEÇON 19 : LE COMMENTAIRE COMPOSÉ AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE COMPLÈTE ET DEVOIR TYPE ENTIÈREMENT RÉDIGÉ',
    type: 'cours',
    badge: 'Module 5 • Méthodologie Bac',
    description: 'Protocole scientifique de l\'analyse littéraire : lecture méthodique, triptyque Procédé-Citation-Effet de sens, axes de lecture ordonnés et devoir intégral entièrement rédigé sur « Nuit de Sine » de Léopold Sédar Senghor.',
    lessonData: LESSON_19_FRANCAIS_TLE
  },
  {
    id: 'fr-tle-cours-20',
    title: 'LEÇON 20 : LA CONTRACTION DE TEXTE ET LA DISCUSSION AU BACCALAURÉAT SÉNÉGALAIS : MÉTHODOLOGIE ET CORRIGÉ INTÉGRAL',
    type: 'cours',
    badge: 'Module 5 • Méthodologie Bac',
    description: 'Règles académiques de la réduction au quart (±10%), décompte exact des mots, interdiction absolue des citations, et méthodologie de la discussion argumentative (A.E.I.) avec une épreuve officielle intégralement résolue.',
    lessonData: LESSON_20_FRANCAIS_TLE
  }
];
