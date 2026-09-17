// =========================================================================
// INDEX CENTRAL DES COURS D'HISTOIRE 4ÈME (SÉNÉGAL)
// Programme officiel exhaustif, complet, sans résumé, avec images et diagrammes
// 13 Leçons officielles conformes au cursus du Ministère de l'Éducation Nationale
// =========================================================================

import { LessonContent } from './courses';
import {
  LESSON_1_HISTOIRE_4EME,
  LESSON_2_HISTOIRE_4EME,
  LESSON_3_HISTOIRE_4EME,
  LESSON_4_HISTOIRE_4EME
} from './courses_4eme_histoire_part1';

import {
  LESSON_5_HISTOIRE_4EME,
  LESSON_6_HISTOIRE_4EME,
  LESSON_7_HISTOIRE_4EME,
  LESSON_8_HISTOIRE_4EME
} from './courses_4eme_histoire_part2';

import {
  LESSON_9_HISTOIRE_4EME,
  LESSON_10_HISTOIRE_4EME,
  LESSON_11_HISTOIRE_4EME,
  LESSON_12_HISTOIRE_4EME,
  LESSON_13_HISTOIRE_4EME
} from './courses_4eme_histoire_part3';

export interface ContentData {
  id: string;
  title: string;
  type: 'cours' | 'ressource';
  description: string;
  badge?: string;
  link?: string;
  content?: string;
  lessonData?: LessonContent;
}

export const HISTOIRE_4EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '13' },
  { id: 'chap-1', label: 'Chapitre 1 • Contacts extérieurs (Grandes Découvertes, Traites & Révolution)', count: '6' },
  { id: 'chap-2', label: 'Chapitre 2 • Évolution politique de l\'Afrique occidentale (Royaumes & Djihads)', count: '5' },
  { id: 'chap-3', label: 'Chapitre 3 • Afrique méridionale & insulaire (Chaka Zoulou & Madagascar)', count: '2' }
];

export const COURSES_HISTOIRE_4EME: ContentData[] = [
  // -------------------------------------------------------------------------
  // CHAPITRE 1 : LES CONTACTS AVEC LE MONDE EXTÉRIEUR (LEÇONS 1 À 6)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-4eme-lecon-1',
    title: 'LEÇON 1 : LES GRANDES DÉCOUVERTES ET LES MUTATIONS DE L’EUROPE',
    type: 'cours',
    badge: 'Chapitre 1 • Contacts extérieurs',
    description: "Motivations économiques et religieuses, innovations maritimes révolutionnaires (caravelle, boussole, astrolabe, portulans), grands navigateurs (Dias, Colomb, Da Gama, Magellan) et basculement économique vers l'Atlantique. Démonstration vectorielle Figure 1. Cours intégral sans résumé.",
    lessonData: LESSON_1_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-2',
    title: 'LEÇON 2 : LES PREMIERS CONTACTS ENTRE L’EUROPE ET L’AFRIQUE NOIRE (XVE - XVIE SIÈCLES)',
    type: 'cours',
    badge: 'Chapitre 1 • Contacts extérieurs',
    description: "L'exploration portugaise des côtes d'Afrique de l'Ouest (Dinis Dias, presqu'île du Cap-Vert 1444), installation des comptoirs et forts (Arguin, Elmina, Gorée), nature des premiers échanges et christianisation pionnière du Royaume du Kongo (Afonso Ier). Démonstration vectorielle Figure 2. Cours intégral sans résumé.",
    lessonData: LESSON_2_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-3',
    title: 'LEÇON 3 : LA TRAITE TRANSATLANTIQUE (LA TRAITE NÉGRIÈRE)',
    type: 'cours',
    badge: 'Chapitre 1 • Contacts extérieurs',
    description: "Origines et système du commerce triangulaire (Europe-Afrique-Amériques), capture et convois des esclaves, traversée inhumaine du Middle Passage et l'île de Gorée (Maison des Esclaves). Démonstration vectorielle Figure 3 (Circuit triangulaire & navire négrier). Cours intégral sans résumé.",
    lessonData: LESSON_3_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-4',
    title: 'LEÇON 4 : LES CONSÉQUENCES DE LA TRAITE SUR L’AFRIQUE ET DANS LE MONDE',
    type: 'cours',
    badge: 'Chapitre 1 • Contacts extérieurs',
    description: "Hémorragie démographique majeure, désorganisation politique des chefferies côtières, enrichissement de l'Europe et révolution industrielle, et naissance de la diaspora africaine et de ses cultures de résistance dans les Amériques. Cours intégral sans résumé.",
    lessonData: LESSON_4_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-5',
    title: 'LEÇON 5 : LE MOUVEMENT ABOLITIONNISTE ET LA FIN DE LA TRAITE',
    type: 'cours',
    badge: 'Chapitre 1 • Contacts extérieurs',
    description: "Facteurs intellectuels et religieux (Philosophes des Lumières, Wilberforce, Société des Amis des Noirs), révolte victorieuse de Saint-Domingue (Toussaint Louverture 1791), arguments économiques (Adam Smith) et décrets d'abolition (France 1848 Victor Schoelcher). Démonstration vectorielle Figure 4. Cours intégral sans résumé.",
    lessonData: LESSON_5_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-6',
    title: 'LEÇON 6 : LA RÉVOLUTION FRANÇAISE DE 1789 ET SES RÉPERCUSSIONS',
    type: 'cours',
    badge: 'Chapitre 1 • Contacts extérieurs',
    description: "Causes profondes (crise de l'Ancien Régime, Société d'ordres, déficit financier), événements fondateurs (Prise de la Bastille, DDHC 26 août 1789), et retentissement direct au Sénégal (Cahier de doléances de Saint-Louis de 1789). Démonstration vectorielle Figure 5. Cours intégral sans résumé.",
    lessonData: LESSON_6_HISTOIRE_4EME
  },

  // -------------------------------------------------------------------------
  // CHAPITRE 2 : ÉVOLUTION POLITIQUE DE L'AFRIQUE OCCIDENTALE (LEÇONS 7 À 11)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-4eme-lecon-7',
    title: 'LEÇON 7 : L’ÉVOLUTION POLITIQUE DU SÉNÉGAL DU XVIE AU XVIIIE SIÈCLE',
    type: 'cours',
    badge: 'Chapitre 2 • Afrique occidentale',
    description: "L'éclatement du Grand Djolof en 1549 (bataille de Danki, Amari Ngoone Sobel Fall), émergence du Cayor et du Baol, instabilité des Ceddos et des guerres de pillage, et la Révolution des Torodbe de 1776 au Fouta-Toro (Thierno Souleymane Baal et Almamy Abdul Kader Kane). Démonstration vectorielle Figure 6. Cours intégral sans résumé.",
    lessonData: LESSON_7_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-8',
    title: 'LEÇON 8 : LES ROYAUMES DU GOLFE DE GUINÉE : L’ASHANTI ET LE DAHOMEY',
    type: 'cours',
    badge: 'Chapitre 2 • Afrique occidentale',
    description: "La Confédération Ashanti unifiée par Osei Tutu autour du Siège d'Or sacré (Sika Dwa), et le Royaume du Dahomey centralisé par Agadja et Tegbesu avec le régiment d'élite des Amazones (Mino). Démonstration vectorielle Figure 7. Cours intégral sans résumé.",
    lessonData: LESSON_8_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-9',
    title: 'LEÇON 9 : LES ENTITÉS POLITIQUES NÉES DU DÉCLIN DU ROYAUME DU GAABU',
    type: 'cours',
    badge: 'Chapitre 2 • Afrique occidentale',
    description: "Apogée de l'aristocratie militaire mandingue des Nyancho issue de Tiramakhan Traoré, oppression des Peuls, siège épique de Kansala en 1867 et suicide d'honneur collectif de Dianke Wali Sané (Turubang), et émergence du Fouladou (Alpha Molo et Moussa Molo Baldé). Cours intégral sans résumé.",
    lessonData: LESSON_9_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-10',
    title: 'LEÇON 10 : LES GRANDS EMPIRES PEULS DU XIXE SIÈCLE',
    type: 'cours',
    badge: 'Chapitre 2 • Afrique occidentale',
    description: "Le Califat de Sokoto fondé en 1804 par Ousman Dan Fodio au pays haoussa (rôle de Nana Asma'u), et l'Empire peul du Macina fondé en 1818 par Sékou Amadou Barry à Hamdallahi avec l'État théocratique de la Diina et la gestion agropastorale du delta du Niger. Cours intégral sans résumé.",
    lessonData: LESSON_10_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-11',
    title: 'LEÇON 11 : L’EMPIRE TOUCOULEUR D\'EL HADJ OUMAR TALL',
    type: 'cours',
    badge: 'Chapitre 2 • Afrique occidentale',
    description: "Vocation mystique et khalifat de la Tijaniyya pour le Soudan occidental, arsenal de Dinguiraye, siège de Médine contre Faidherbe (1857), conquête du Kaarta, de Ségou et du Macina, disparition dans les falaises de Bandiagara (1864) et règne d'Ahmadou Cheikhou face aux colonnes d'Archinard. Cours intégral sans résumé.",
    lessonData: LESSON_11_HISTOIRE_4EME
  },

  // -------------------------------------------------------------------------
  // CHAPITRE 3 : L'AFRIQUE MÉRIDIONALE ET INSULAIRE (LEÇONS 12 & 13)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-4eme-lecon-12',
    title: 'LEÇON 12 : L’AFRIQUE MÉRIDIONALE : CHAKA ET L’ÉPOPÉE DU PEUPLE ZOULOU (LE MFECANE)',
    type: 'cours',
    badge: 'Chapitre 3 • Afrique méridionale & Madagascar',
    description: "La révolution militaire de Chaka (sagaie courte Iklwa, régiments amabutho, formation des « cornes de buffle »), le séisme géopolitique du Mfecane (création du Lesotho par Moshoeshoe, exode Ndebele) et assassinat tragique en 1828. Démonstration vectorielle Figure 8. Cours intégral sans résumé.",
    lessonData: LESSON_12_HISTOIRE_4EME
  },
  {
    id: 'histoire-4eme-lecon-13',
    title: 'LEÇON 13 : MADAGASCAR : L’ÉVOLUTION DU ROYAUME MERINA JUSQU’AU MILIEU DU XIXE SIÈCLE',
    type: 'cours',
    badge: 'Chapitre 3 • Afrique méridionale & Madagascar',
    description: "L'unification de l'Imerina par Andrianampoinimerina (« La mer est la limite de ma rizière ») et les rizières du Betsimitatatra, modernisation et alliance anglaise sous Radama Ier (écriture latine du malgache), et défense souverainiste de la reine Ranavalona Ière avec le complexe industriel de Mantasoa (Jean Laborde). Démonstration vectorielle Figure 9. Cours intégral sans résumé.",
    lessonData: LESSON_13_HISTOIRE_4EME
  },

  // -------------------------------------------------------------------------
  // RESSOURCES PÉDAGOGIQUES COMPLÉMENTAIRES
  // -------------------------------------------------------------------------
  {
    id: 'res-histoire-4eme-synthese-pdf',
    title: 'Fiche de synthèse PDF : Histoire 4ème (Programme officiel complet, Leçons 1 à 13)',
    type: 'ressource',
    badge: 'Format PDF imprimable',
    description: 'Document de révision intégrale : repères chronologiques (1444, 1492, 1776, 1789, 1804, 1818, 1848, 1867), tableaux comparatifs des empires et souverains, et frise récapitulative des grandes mutations de l\'Afrique et du monde.',
    link: '#'
  },
  {
    id: 'res-histoire-4eme-annales-bfem',
    title: 'Annales d\'Histoire 4ème : Sujets types et épreuves de contrôle',
    type: 'ressource',
    badge: 'Évaluation & corrigé',
    description: 'Banque d\'exercices types : études de documents historiques (cahier de doléances de Saint-Louis, récits de la traite, codes de guerre zoulous), questions de synthèse et commentaires guidés avec corrigés détaillés.',
    link: '#'
  }
];
