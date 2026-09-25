// =========================================================================
// INDEX CENTRAL DES COURS DE FRANÇAIS CLASSE DE SECONDE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 20 Leçons exhaustives intégrales sans résumé
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_FRANCAIS_2NDE,
  LESSON_2_FRANCAIS_2NDE,
  LESSON_3_FRANCAIS_2NDE,
  LESSON_4_FRANCAIS_2NDE
} from './courses_2nde_francais_part1';
import {
  LESSON_5_FRANCAIS_2NDE,
  LESSON_6_FRANCAIS_2NDE,
  LESSON_7_FRANCAIS_2NDE,
  LESSON_8_FRANCAIS_2NDE
} from './courses_2nde_francais_part2';
import {
  LESSON_9_FRANCAIS_2NDE,
  LESSON_10_FRANCAIS_2NDE,
  LESSON_11_FRANCAIS_2NDE
} from './courses_2nde_francais_part3';
import {
  LESSON_12_FRANCAIS_2NDE,
  LESSON_13_FRANCAIS_2NDE,
  LESSON_14_FRANCAIS_2NDE,
  LESSON_15_FRANCAIS_2NDE,
  LESSON_16_FRANCAIS_2NDE,
  LESSON_17_FRANCAIS_2NDE,
  LESSON_18_FRANCAIS_2NDE
} from './courses_2nde_francais_part4';
import {
  LESSON_19_FRANCAIS_2NDE,
  LESSON_20_FRANCAIS_2NDE
} from './courses_2nde_francais_part5';

export {
  LESSON_1_FRANCAIS_2NDE,
  LESSON_2_FRANCAIS_2NDE,
  LESSON_3_FRANCAIS_2NDE,
  LESSON_4_FRANCAIS_2NDE,
  LESSON_5_FRANCAIS_2NDE,
  LESSON_6_FRANCAIS_2NDE,
  LESSON_7_FRANCAIS_2NDE,
  LESSON_8_FRANCAIS_2NDE,
  LESSON_9_FRANCAIS_2NDE,
  LESSON_10_FRANCAIS_2NDE,
  LESSON_11_FRANCAIS_2NDE,
  LESSON_12_FRANCAIS_2NDE,
  LESSON_13_FRANCAIS_2NDE,
  LESSON_14_FRANCAIS_2NDE,
  LESSON_15_FRANCAIS_2NDE,
  LESSON_16_FRANCAIS_2NDE,
  LESSON_17_FRANCAIS_2NDE,
  LESSON_18_FRANCAIS_2NDE,
  LESSON_19_FRANCAIS_2NDE,
  LESSON_20_FRANCAIS_2NDE
};

// =========================================================================
// THÈMES DE FILTRAGE POUR FRANÇAIS SECONDE (SÉRIES L & S)
// =========================================================================
export const FRANCAIS_2NDE_MODULES = [
  { id: 'all', label: 'Toutes les leçons', count: '20' },
  { id: 'module-1', label: 'Module 1 • Méthodologie du Bac', count: '4' },
  { id: 'module-2', label: 'Module 2 • Roman & Poésie', count: '4' },
  { id: 'module-3', label: 'Module 3 • Théâtre & Apologue', count: '3' },
  { id: 'module-4', label: 'Module 4 • Langue & Stylistique', count: '7' },
  { id: 'module-5', label: 'Module 5 • Œuvres intégrales', count: '2' }
];

// =========================================================================
// LISTE EXHAUSTIVE DES COURS DE FRANÇAIS — CLASSE DE SECONDE (LYCÉE)
// =========================================================================
export const COURSES_FRANCAIS_2NDE: ContentData[] = [
  // -----------------------------------------------------------------------
  // MODULE 1 : MÉTHODOLOGIE DES ÉPREUVES DU SECOND CYCLE (BACCALAURÉAT)
  // -----------------------------------------------------------------------
  {
    id: 'francais-2nde-cours-1',
    title: 'LEÇON 1 : LA CONTRACTION DE TEXTE — MÉTHODOLOGIE DU RÉSUMÉ',
    type: 'cours',
    badge: 'Module 1 • Méthodologie du Bac',
    description:
      'Principes déontologiques (neutralité, fidélité au mouvement de l\'auteur, interdiction du montage de citations), techniques de condensation (nominalisation, hyperonymes), décompte officiel des mots (±10%) et application intégrale commentée.',
    lessonData: LESSON_1_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-2',
    title: 'LEÇON 2 : LA DISCUSSION DE TEXTE ARGUMENTATIF — MÉTHODOLOGIE ET RÉDACTION',
    type: 'cours',
    badge: 'Module 1 • Méthodologie du Bac',
    description:
      'Compréhension de la consigne et problématisation, structure canonique du plan dialectique (thèse, antithèse, synthèse/dépassement), formule de rédaction du paragraphe A-E-I (Affirmation, Explication, Illustration) et sujet complet traité.',
    lessonData: LESSON_2_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-3',
    title: 'LEÇON 3 : LA DISSERTATION LITTÉRAIRE AU LYCÉE — ANALYSE ET COMPOSITION',
    type: 'cours',
    badge: 'Module 1 • Méthodologie du Bac',
    description:
      'Déconstruction méthodique du sujet, délimitation du champ littéraire, typologie des plans (dialectique, thématique, comparatif), constitution du vivier d\'exemples littéraires négro-africains et mondiaux, et sujet entièrement rédigé.',
    lessonData: LESSON_3_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-4',
    title: 'LEÇON 4 : LE COMMENTAIRE COMPOSÉ DE TEXTE LITTÉRAIRE — MÉTHODE ET PRATIQUE',
    type: 'cours',
    badge: 'Module 1 • Méthodologie du Bac',
    description:
      'Rejet absolu de la paraphrase, règle d\'or de la triade stylistique (Citation + Procédé d\'écriture + Effet de sens produit), organisation en 2 ou 3 centres d\'intérêt transversaux et étude de cas complète sur « Femme noire » de Senghor.',
    lessonData: LESSON_4_FRANCAIS_2NDE
  },

  // -----------------------------------------------------------------------
  // MODULE 2 : LES GENRES LITTÉRAIRES ET LEUR ÉVOLUTION
  // -----------------------------------------------------------------------
  {
    id: 'francais-2nde-cours-5',
    title: 'LEÇON 5 : LE ROMAN ET LA NOUVELLE — FORMES, STRUCTURES ET NARRATION',
    type: 'cours',
    badge: 'Module 2 • Roman & Poésie',
    description:
      'Sous-genres romanesques (apprentissage, épistolaire, historique, social), schéma narratif quinaire de Larivaille, schéma actantiel de Greimas, et maîtrise de la temporalité narrative de Genette (anachronies, vitesse, fréquence).',
    lessonData: LESSON_5_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-6',
    title: 'LEÇON 6 : LES COURANTS ROMANESQUES — DU RÉALISME AU ROMAN NÉGRO-AFRICAIN',
    type: 'cours',
    badge: 'Module 2 • Roman & Poésie',
    description:
      'Le Réalisme de Balzac et Stendhal (miroir social et effet de réel), le Naturalisme expérimental de Zola (double déterminisme hérédité/milieu), et les trois âges du roman africain (pionniers, roman anticolonial de Sembène et Oyono, roman postcolonial et féminin).',
    lessonData: LESSON_6_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-7',
    title: 'LEÇON 7 : LA POÉSIE — FORMES FIXES, MÉTRIQUE TRADITIONNELLE ET PROSODIE',
    type: 'cours',
    badge: 'Module 2 • Roman & Poésie',
    description:
      'Décompte rigoureux des syllabes, règles capitales du « e » muet, diérèse et synérèse, césure et hémistiches de l\'alexandrin, enjambements et rejets, prosodie et disposition des rimes, sonnet pétrarquiste et vers libre moderne.',
    lessonData: LESSON_7_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-8',
    title: 'LEÇON 8 : LES GRANDS COURANTS POÉTIQUES ET LE MOUVEMENT DE LA NÉGRITUDE',
    type: 'cours',
    badge: 'Module 2 • Roman & Poésie',
    description:
      'Du Romantisme, Parnasse, Symbolisme et Surréalisme à la Négritude parisienne des années 1930 (*L\'Étudiant Noir*). Définitions comparées de Senghor, Césaire et Damas, voix de David Diop (*Coups de pilon*) et Birago Diop (*Leurres et lueurs*).',
    lessonData: LESSON_8_FRANCAIS_2NDE
  },

  // -----------------------------------------------------------------------
  // MODULE 3 : LE THÉÂTRE ET L'APOLOGUE
  // -----------------------------------------------------------------------
  {
    id: 'francais-2nde-cours-9',
    title: 'LEÇON 9 : LE THÉÂTRE — DRAMATURGIE, GENRES CLASSIQUES ET ESPACE SCÉNIQUE',
    type: 'cours',
    badge: 'Module 3 • Théâtre & Apologue',
    description:
      'Principe fondamental de la double énonciation théâtrale, typologie des paroles (réplique, tirade, monologue, aparté, stichomythie), didascalies, tragédie classique (catharsis, 3 unités, bienséance) et comédie moliéresque des mœurs.',
    lessonData: LESSON_9_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-10',
    title: 'LEÇON 10 : LE THÉÂTRE NÉGRO-AFRICAIN ET CONTEMPORAIN — RÉSISTANCE ET SATIRE',
    type: 'cours',
    badge: 'Module 3 • Théâtre & Apologue',
    description:
      'Des rituels oraux et du théâtre pontin au théâtre historique de résistance (*L\'Exil d\'Albouri* de Cheik Aliou Ndao, tragédies de la décolonisation d\'Aimé Césaire), satire sociale de Bernard Dadié (*Monsieur Thôgô-gnini*) et renouveau citoyen.',
    lessonData: LESSON_10_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-11',
    title: 'LEÇON 11 : L\'APOLOGUE ET LA LITTÉRATURE D\'IDÉES — FORMES ET STRATÉGIES',
    type: 'cours',
    badge: 'Module 3 • Théâtre & Apologue',
    description:
      'Argumentation directe (essai, pamphlet, plaidoyer) vs indirecte (fable, apologue, conte philosophique). Plaire et instruire (*Placere et docere*), les *Fables* de La Fontaine, *Candide* de Voltaire, utopie, et les contes sénégalais de Birago Diop.',
    lessonData: LESSON_11_FRANCAIS_2NDE
  },

  // -----------------------------------------------------------------------
  // MODULE 4 : OUTILS DE LA LANGUE, STYLISTIQUE ET ANALYSE LITTÉRAIRE
  // -----------------------------------------------------------------------
  {
    id: 'francais-2nde-cours-12',
    title: 'LEÇON 12 : L\'ÉNONCIATION ET LE STATUT DU NARRATEUR',
    type: 'cours',
    badge: 'Module 4 • Langue & Stylistique',
    description:
      'Schéma de communication de Jakobson, énoncé ancré vs coupé, déictiques de personne, d\'espace et de temps, modalisateurs de certitude/doute et axiologiques, statuts du narrateur (hétérodiégétique, homodiégétique, autodiégétique).',
    lessonData: LESSON_12_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-13',
    title: 'LEÇON 13 : LES POINTS DE VUE OU FOCALISATIONS NARRATIVES',
    type: 'cours',
    badge: 'Module 4 • Langue & Stylistique',
    description:
      'Les trois foyers de perception de Gérard Genette : focalisation zéro (N > P, omniscience divine), focalisation interne fixe, variable ou multiple (N = P, filtre intime), et focalisation externe (N < P, caméra neutre et mystère).',
    lessonData: LESSON_13_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-14',
    title: 'LEÇON 14 : LES FIGURES DE STYLE ET PROCÉDÉS RHÉTORIQUES FONDAMENTAUX',
    type: 'cours',
    badge: 'Module 4 • Langue & Stylistique',
    description:
      'Figures d\'analogie (comparaison, métaphore in praesentia/in absentia/filée, personnification, allégorie), de substitution (métonymie, synecdoque, périphrase), d\'opposition (antithèse, oxymore, antiphrase), d\'insistance et d\'atténuation.',
    lessonData: LESSON_14_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-15',
    title: 'LEÇON 15 : LES TONALITÉS OU REGISTRES LITTÉRAIRES',
    type: 'cours',
    badge: 'Module 4 • Langue & Stylistique',
    description:
      'Distinction genre vs registre. Registres de l\'émotion (lyrique, élégiaque, pathétique), du destin (tragique et catharsis, épique et héroïsation), du combat d\'idées (polémique, satirique, ironique) et de la transmission (didactique).',
    lessonData: LESSON_15_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-16',
    title: 'LEÇON 16 : LES RELATIONS LOGIQUES ET CONNECTEURS ARGUMENTATIFS',
    type: 'cours',
    badge: 'Module 4 • Langue & Stylistique',
    description:
      'Expression de la cause et de la conséquence, distinction capitale opposition simple vs concession dialectique (« certes... mais », « bien que » + subjonctif), expression du but, de l\'hypothèse et connecteurs de gradation pour la dissertation.',
    lessonData: LESSON_16_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-17',
    title: 'LEÇON 17 : L\'ACCORD DES PARTICIPES PASSÉS ET SUBTILITÉS SYNTAXIQUES',
    type: 'cours',
    badge: 'Module 4 • Langue & Stylistique',
    description:
      'Règles canoniques avec être et avoir (accord avec COD antéposé), verbes essentiellement vs accidentellement pronominaux (valeur du pronom réfléchi COD/COI), verbes invariables, participes suivis d\'un infinitif, et invariabilité de « fait » et « laissé ».',
    lessonData: LESSON_17_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-18',
    title: 'LEÇON 18 : LES DISCOURS RAPPORTÉS DANS LE RÉCIT',
    type: 'cours',
    badge: 'Module 4 • Langue & Stylistique',
    description:
      'Discours direct (présence théâtrale et ponctuation expressive), discours indirect et concordance des temps au passé (présent -> imparfait, passé composé -> plus-que-parfait, futur -> conditionnel), discours indirect libre et narrativisé.',
    lessonData: LESSON_18_FRANCAIS_2NDE
  },

  // -----------------------------------------------------------------------
  // MODULE 5 : ÉTUDE DES ŒUVRES INTÉGRALES AU PROGRAMME DE SECONDE
  // -----------------------------------------------------------------------
  {
    id: 'francais-2nde-cours-19',
    title: 'LEÇON 19 : ÉTUDE D\'ŒUVRE INTÉGRALE — « UNE SI LONGUE LETTRE » DE MARIAMA BÂ',
    type: 'cours',
    badge: 'Module 5 • Œuvres intégrales',
    description:
      'Contexte dakarois post-indépendance, écriture épistolaire et catharsis du Mirass, analyse des destins croisés de Ramatoulaye, Aïssatou, Binetou et Daba, dénonciation de la polygamie bourgeoise, poids des castes et dignité féminine.',
    lessonData: LESSON_19_FRANCAIS_2NDE
  },
  {
    id: 'francais-2nde-cours-20',
    title: 'LEÇON 20 : ÉTUDE D\'ŒUVRE INTÉGRALE — « L\'EXIL D\'ALBOURI » DE CHEIK ALIOU NDAO',
    type: 'cours',
    badge: 'Module 5 • Œuvres intégrales',
    description:
      'Contexte historique du Djoloff en 1890 face au colonel Dodds, structure tragique en 3 actes, le dilemme sublime du Bourba Albouri Ndiaye entre suicide stérile et exil stratégique pour sauvegarder l\'honneur et la liberté du peuple.',
    lessonData: LESSON_20_FRANCAIS_2NDE
  },

  // -----------------------------------------------------------------------
  // RESSOURCES PÉDAGOGIQUES ET GUIDES OFFICIELS DU BACCALAURÉAT
  // -----------------------------------------------------------------------
  {
    id: 'res-francais-2nde-guide-methodo',
    title: 'Guide Officiel Méthodologique PDF : Les Trois Épreuves du Baccalauréat (L & S)',
    type: 'ressource',
    badge: 'Format PDF officiel',
    description:
      'Fiches de synthèse complètes : Barèmes nationaux, consignes de décompte du résumé, grilles d\'évaluation de la discussion, de la dissertation littéraire et du commentaire composé.',
    link: '#'
  },
  {
    id: 'res-francais-2nde-lexique-stylistique',
    title: 'Répertoire Lexical & Stylistique PDF : Figures de Style, Registres et Connecteurs',
    type: 'ressource',
    badge: 'Aide-mémoire Lycée',
    description:
      'Dictionnaire synthétique de tous les procédés rhétoriques et stylistiques au programme du second cycle avec exemples littéraires négro-africains et universels.',
    link: '#'
  },
  {
    id: 'res-francais-2nde-dossier-oeuvres',
    title: 'Dossier Pédagogique PDF : Étude comparative « Une si longue lettre » et « L\'Exil d\'Albouri »',
    type: 'ressource',
    badge: 'Analyse d\'œuvres',
    description:
      'Fiches personnages, résumés acte par acte / lettre par lettre, citations clés à retenir et propositions de sujets de dissertation et de commentaire corrigés.',
    link: '#'
  }
];
