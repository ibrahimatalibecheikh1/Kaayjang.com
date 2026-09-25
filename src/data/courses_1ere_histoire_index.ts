// =========================================================================
// INDEX CENTRAL DES COURS D'HISTOIRE CLASSE DE PREMIÈRE (SÉNÉGAL)
// Conforme au programme officiel national de la République du Sénégal
// 14 Leçons exhaustives intégrales sans résumé
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_HISTOIRE_1ERE,
  LESSON_2_HISTOIRE_1ERE,
  LESSON_3_HISTOIRE_1ERE
} from './courses_1ere_histoire_part1';
import {
  LESSON_4_HISTOIRE_1ERE,
  LESSON_5_HISTOIRE_1ERE,
  LESSON_6_HISTOIRE_1ERE,
  LESSON_7_HISTOIRE_1ERE,
  LESSON_8_HISTOIRE_1ERE
} from './courses_1ere_histoire_part2';
import {
  LESSON_9_HISTOIRE_1ERE,
  LESSON_10_HISTOIRE_1ERE
} from './courses_1ere_histoire_part3';
import {
  LESSON_11_HISTOIRE_1ERE,
  LESSON_12_HISTOIRE_1ERE,
  LESSON_13_HISTOIRE_1ERE,
  LESSON_14_HISTOIRE_1ERE
} from './courses_1ere_histoire_part4';

export {
  LESSON_1_HISTOIRE_1ERE,
  LESSON_2_HISTOIRE_1ERE,
  LESSON_3_HISTOIRE_1ERE,
  LESSON_4_HISTOIRE_1ERE,
  LESSON_5_HISTOIRE_1ERE,
  LESSON_6_HISTOIRE_1ERE,
  LESSON_7_HISTOIRE_1ERE,
  LESSON_8_HISTOIRE_1ERE,
  LESSON_9_HISTOIRE_1ERE,
  LESSON_10_HISTOIRE_1ERE,
  LESSON_11_HISTOIRE_1ERE,
  LESSON_12_HISTOIRE_1ERE,
  LESSON_13_HISTOIRE_1ERE,
  LESSON_14_HISTOIRE_1ERE
};

// =========================================================================
// THÈMES DE FILTRAGE POUR HISTOIRE PREMIÈRE (SÉNÉGAL)
// =========================================================================
export const HISTOIRE_1ERE_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '14' },
  { id: 'part-1', label: 'Partie 1 • Révolution industrielle', count: '3' },
  { id: 'part-2', label: 'Partie 2 • Impérialisme en Afrique', count: '5' },
  { id: 'part-3', label: 'Partie 3 • Asie & Nouveaux Impérialismes', count: '2' },
  { id: 'part-4', label: 'Partie 4 • Guerres & Crises du XXe s.', count: '4' }
];

// =========================================================================
// LISTE DES LEÇONS D'HISTOIRE — CLASSE DE PREMIÈRE (LYCÉE)
// =========================================================================
export const COURSES_HISTOIRE_1ERE: ContentData[] = [
  // -----------------------------------------------------------------------
  // PREMIÈRE PARTIE : L'EUROPE ET LA RÉVOLUTION INDUSTRIELLE AU XIXe SIÈCLE
  // -----------------------------------------------------------------------
  {
    id: 'histoire-1ere-lecon-1',
    title: 'LEÇON 1 : LA RÉVOLUTION INDUSTRIELLE : GENÈSE, FORMES ET MANIFESTATIONS',
    type: 'cours',
    badge: 'Partie 1 • Révolution industrielle',
    description:
      'Enclosures anglaises, essor démographique, machine à vapeur de James Watt, révolution textile et sidérurgique, seconde vague (électricité, pétrole, acier Bessemer), transports et organisation scientifique du travail (Taylorisme et Fordisme). Cours officiel intégral sans résumé.',
    lessonData: LESSON_1_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-2',
    title: 'LEÇON 2 : LES CONSÉQUENCES ÉCONOMIQUES, SOCIALES, POLITIQUES ET CULTURELLES DE LA RÉVOLUTION INDUSTRIELLE',
    type: 'cours',
    badge: 'Partie 1 • Révolution industrielle',
    description:
      'Capitalisme financier, sociétés anonymes par actions, banques d\'affaires et bourses, concentrations d\'entreprises (Cartels, Trusts, Holdings), exode rural, fossé entre bourgeoisie opulente et misère du prolétariat ouvrier, législation sociale et courant réaliste. Cours intégral officiel sans résumé.',
    lessonData: LESSON_2_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-3',
    title: 'LEÇON 3 : LES DOCTRINES SOCIALES : SYNDICALISME ET SOCIALISME',
    type: 'cours',
    badge: 'Partie 1 • Révolution industrielle',
    description:
      'Socialisme utopique (Fourier, Saint-Simon, Owen), socialisme scientifique et matérialisme historique de Karl Marx et Engels, anarchisme de Bakounine et Proudhon, encyclique Rerum Novarum, Trade Unions et CGT, Internationales ouvrières et conquête de la journée de 8h. Cours officiel intégral sans résumé.',
    lessonData: LESSON_3_HISTOIRE_1ERE
  },

  // -----------------------------------------------------------------------
  // DEUXIÈME PARTIE : L'IMPÉRIALISME EN AFRIQUE ET LE PARTAGE DU CONTINENT
  // -----------------------------------------------------------------------
  {
    id: 'histoire-1ere-lecon-4',
    title: 'LEÇON 4 : LES CAUSES, DOCTRINES ET MÉTHODES DE L\'IMPÉRIALISME EUROPÉEN',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description:
      'Moteurs économiques (matières premières, débouchés de Jules Ferry, capitaux), causes démographiques et géostratégiques, darwinisme social d\'Herbert Spencer, mythe de la mission civilisatrice de Kipling, traités de protectorat inégaux et mitrailleuses Maxim. Cours officiel intégral sans résumé.',
    lessonData: LESSON_4_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-5',
    title: 'LEÇON 5 : LES EXPLORATIONS GÉOGRAPHIQUES ET LES MISSIONS RELIGIEUSES EN AFRIQUE',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description:
      'Rôle des sociétés de géographie et découverte de la quinine, épopées ouest-africaines (Mungo Park, René Caillié à Tombouctou, frères Lander), explorations du Congo et du Nil (Livingstone, Stanley, Brazza), congrégations missionnaires (Pères Blancs) et préparation du terrain colonial. Cours intégral sans résumé.',
    lessonData: LESSON_5_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-6',
    title: 'LEÇON 6 : LA CONFÉRENCE DE BERLIN (1884-1885) ET LE PARTAGE DE L\'AFRIQUE',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description:
      'Conflit franco-belge sur le bassin du Congo et médiation de Bismarck, les 14 puissances signataires sans représentant africain, libre navigation sur le Congo et le Niger, statut personnel de Léopold II, clause d\'occupation effective et balkanisation frontalière arbitraire du continent. Cours officiel complet.',
    lessonData: LESSON_6_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-7',
    title: 'LEÇON 7 : LES RÉSISTANCES AFRICAINES À LA CONQUÊTE COLONIALE',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description:
      'Résistances armées héroïques : Samori Touré et les sofas, Lat Dior Ngoné Latyr Fall et la bataille de Dékheulé (1886), Alboury Ndiaye, Mamadou Lamine Dramé, Béhanzin et les Amazones, Rabah, Zoulous à Isandhlwana, Maji-Maji, victoire d\'Adoua en Éthiopie (1896), et résistances spirituelles de Cheikh Ahmadou Bamba et El Hadj Malick Sy. Cours officiel exhaustif.',
    lessonData: LESSON_7_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-8',
    title: 'LEÇON 8 : LES SYSTÈMES COLONIAUX ET L\'EXPLOITATION ÉCONOMIQUE DE L\'AFRIQUE',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description:
      'Administration directe française, Code de l\'indigénat, fédérations de l\'AOF et de l\'AEF, cas des Quatre Communes du Sénégal et Blaise Diagne (1914), Indirect Rule britannique de Lord Lugard, pacte colonial, monocultures de rente (arachide au Sénégal, cacao), compagnies concessionnaires et travail forcé. Cours complet.',
    lessonData: LESSON_8_HISTOIRE_1ERE
  },

  // -----------------------------------------------------------------------
  // TROISIÈME PARTIE : L'IMPÉRIALISME DANS LE RESTE DU MONDE (ASIE & AMÉRIQUE)
  // -----------------------------------------------------------------------
  {
    id: 'histoire-1ere-lecon-9',
    title: 'LEÇON 9 : L\'IMPÉRIALISME EUROPÉEN EN ASIE : LES CAS DE LA CHINE ET DE L\'INDE',
    type: 'cours',
    badge: 'Partie 3 • Asie & Nouveaux Impérialismes',
    description:
      'L\'Inde sous la Compagnie des Indes et grande révolte des Cipayes (1857), proclamation du Raj direct sous la reine Victoria, guerres de l\'opium en Chine (1839-1860), Traité de Nankin et sac du Palais d\'Été, révolte des Taiping et des Boxers, chute de la dynastie Qing et République de Sun Yat-sen (1911). Cours officiel intégral.',
    lessonData: LESSON_9_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-10',
    title: 'LEÇON 10 : LES NOUVEAUX IMPÉRIALISMES : L\'ÈRE MEIJI AU JAPON ET L\'IMPÉRIALISME AMÉRICAIN',
    type: 'cours',
    badge: 'Partie 3 • Asie & Nouveaux Impérialismes',
    description:
      'Ouverture forcée du Japon par Matthew Perry, Restauration Meiji (1868), modernisation industrielle (Zaibatsus), triomphes militaires sino-japonais et guerre russo-japonaise de 1905 (Tsushima), doctrine de Monroe et Destinée Manifeste, guerre de 1898 contre l\'Espagne, politique du Big Stick et percement du Canal de Panama (1914). Cours officiel sans résumé.',
    lessonData: LESSON_10_HISTOIRE_1ERE
  },

  // -----------------------------------------------------------------------
  // QUATRIÈME PARTIE : LES MUTATIONS ET LES CRISES DU DÉBUT DU XXe SIÈCLE
  // -----------------------------------------------------------------------
  {
    id: 'histoire-1ere-lecon-11',
    title: 'LEÇON 11 : LA PREMIÈRE GUERRE MONDIALE (1914-1918) : CAUSES, DÉROULEMENT ET CONSÉQUENCES MONDIALES',
    type: 'cours',
    badge: 'Partie 4 • Guerres & Crises du XXe s.',
    description:
      'Système des alliances (Triple-Alliance contre Triple-Entente), attentat de Sarajevo (28 juin 1914), bataille de la Marne, enfer des tranchées (Verdun et la Somme 1916), tournant de 1917 (mutineries, révolution russe et entrée en guerre des États-Unis), rôle héroïque des Tirailleurs Sénégalais recrutés par Blaise Diagne, Armistice du 11 novembre 1918 et hécatombe de 10 millions de morts.',
    lessonData: LESSON_11_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-12',
    title: 'LEÇON 12 : LE RÈGLEMENT DE LA PREMIÈRE GUERRE MONDIALE ET LA NOUVELLE CARTE DE L\'EUROPE',
    type: 'cours',
    badge: 'Partie 4 • Guerres & Crises du XXe s.',
    description:
      'Conférence de Paris et Quatorze Points de Wilson, clauses punitives du Traité de Versailles imposé à l\'Allemagne (« Diktat »), démantèlement des empires austro-hongrois et ottoman, émergence des nouveaux États d\'Europe centrale, mandat franco-britannique au Proche-Orient, création et faiblesses congénitales de la Société des Nations (SDN). Cours officiel complet.',
    lessonData: LESSON_12_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-13',
    title: 'LEÇON 13 : LA RÉVOLUTION RUSSE DE 1917 ET LA NAISSANCE DE L\'URSS',
    type: 'cours',
    badge: 'Partie 4 • Guerres & Crises du XXe s.',
    description:
      'Crise de l\'autocratie tsariste de Nicolas II et Révolution de Février 1917, Thèses d\'Avril de Lénine et insurrection bolchevique d\'Octobre 1917, décrets sur la paix (Brest-Litovsk) et la terre, guerre civile contre les Armées Blanches et communisme de guerre de Trotski, NEP économique de 1921 et proclamation officielle de l\'URSS (1922). Cours officiel intégral sans résumé.',
    lessonData: LESSON_13_HISTOIRE_1ERE
  },
  {
    id: 'histoire-1ere-lecon-14',
    title: 'LEÇON 14 : LA CRISE ÉCONOMIQUE MONDIALE DE 1929',
    type: 'cours',
    badge: 'Partie 4 • Guerres & Crises du XXe s.',
    description:
      'Surproduction et spéculation à Wall Street, Jeudi Noir du 24 octobre 1929, faillites bancaires en chaîne, chômage de masse aux USA (Hoovervilles), mondialisation du marasme, effondrement du commerce mondial et des cours agricoles coloniaux (arachide au Sénégal), New Deal interventionniste de Roosevelt, ascension d\'Hitler en Allemagne (1933) et Front Populaire en France (1936). Cours officiel exhaustif.',
    lessonData: LESSON_14_HISTOIRE_1ERE
  }
];
