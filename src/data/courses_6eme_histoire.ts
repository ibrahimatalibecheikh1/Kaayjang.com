import { ContentData } from './courses';
import {
  LESSON_1_HISTOIRE_6EME,
  LESSON_2_HISTOIRE_6EME,
  LESSON_3_HISTOIRE_6EME
} from './courses_6eme_histoire_part1';
import {
  LESSON_4_HISTOIRE_6EME,
  LESSON_5_HISTOIRE_6EME,
  LESSON_6_HISTOIRE_6EME
} from './courses_6eme_histoire_part2';
import {
  LESSON_7_HISTOIRE_6EME,
  LESSON_8_HISTOIRE_6EME,
  LESSON_9_HISTOIRE_6EME,
  LESSON_10_HISTOIRE_6EME,
  LESSON_11_HISTOIRE_6EME,
  LESSON_12_HISTOIRE_6EME
} from './courses_6eme_histoire_part3';
import {
  LESSON_13_HISTOIRE_6EME,
  LESSON_14_HISTOIRE_6EME
} from './courses_6eme_histoire_part4';

// =========================================================================
// COURS COMPLET D'HISTOIRE - CLASSE DE 6ÈME (PROGRAMME OFFICIEL SÉNÉGALAIS)
// COURS INTÉGRAL SANS ABRÉVIATION - 14 LEÇONS AVEC INTRODUCTION & CONCLUSION
// =========================================================================

export const HISTOIRE_6EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '14' },
  { id: 'part-1', label: "Partie 1 : L'Introduction à l'Histoire", count: '3' },
  { id: 'part-2', label: 'Partie 2 : La Préhistoire', count: '3' },
  { id: 'part-3', label: "Partie 3 : L'Afrique du Nord-Est", count: '6' },
  { id: 'part-4', label: "Partie 4 : Civilisations de l'Asie", count: '2' }
];

export const COURSES_HISTOIRE_6EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // PREMIÈRE PARTIE : L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE
  // -----------------------------------------------------------------------
  {
    id: 'histoire-6eme-lecon-1',
    title: "LEÇON 1 : DÉFINITION, OBJET ET UTILITÉ DE L'HISTOIRE",
    type: 'cours',
    badge: "Partie 1 • Introduction à l'Histoire",
    description: "Origine du mot Historia, Hérodote père de l'Histoire, étude de l'Homme dans le temps et dans l'espace, rôle dans la citoyenneté et développement de l'esprit critique. Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_1_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-2',
    title: "LEÇON 2 : LES SOURCES DE L'HISTOIRE",
    type: 'cours',
    badge: "Partie 1 • Introduction à l'Histoire",
    description: "Les trois grandes catégories : sources archéologiques (mégalithes de Sine Ngayène, ossements), sources orales (griots traditionalistes en Afrique) et sources écrites (papyrus, manuscrits de Tombouctou). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_2_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-3',
    title: "LEÇON 3 : LES TEMPS DE L'HISTOIRE",
    type: 'cours',
    badge: "Partie 1 • Introduction à l'Histoire",
    description: "Chronologie, calendrier chrétien grégorien, méthode infaillible de calcul des siècles en chiffres romains et découpage des quatre grandes périodes (Antiquité, Moyen Âge, Époque moderne, Époque contemporaine). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_3_HISTOIRE_6EME
  },

  // -----------------------------------------------------------------------
  // DEUXIÈME PARTIE : LA PRÉHISTOIRE
  // -----------------------------------------------------------------------
  {
    id: 'histoire-6eme-lecon-4',
    title: 'LEÇON 4 : LES GRANDES DIVISIONS DE LA PRÉHISTOIRE',
    type: 'cours',
    badge: 'Partie 2 • La Préhistoire',
    description: "Limites de la Préhistoire, le Paléolithique (pierre taillée, biface, chasse et nomadisme) et le Néolithique (pierre polie, révolution de l'agriculture, élevage, sédentarisation, poterie et tissage). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_4_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-5',
    title: 'LEÇON 5 : LA PRÉHISTOIRE AFRICAINE',
    type: 'cours',
    badge: 'Partie 2 • La Préhistoire',
    description: "L'Afrique berceau de l'humanité, découvertes de Toumaï au Tchad et Lucy en Éthiopie, et évolution des hominidés (Australopithèque, Homo habilis, Homo erectus, Homo sapiens). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_5_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-6',
    title: 'LEÇON 6 : LA VIE DES HOMMES DE LA PRÉHISTOIRE',
    type: 'cours',
    badge: 'Partie 2 • La Préhistoire',
    description: "Alimentation et habitat du Paléolithique au Néolithique, révolution monumentale de la domestication du feu vers 400 000 av. J.-C., art pariétal des grottes et art mobilier des Vénus préhistoriques. Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_6_HISTOIRE_6EME
  },

  // -----------------------------------------------------------------------
  // TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
  // -----------------------------------------------------------------------
  {
    id: 'histoire-6eme-lecon-7',
    title: "LEÇON 7 : L'ÉGYPTE PHARAONIQUE : LE CADRE GÉOGRAPHIQUE ET LES HOMMES",
    type: 'cours',
    badge: "Partie 3 • L'Afrique du Nord-Est",
    description: "Situation contrastée dans les déserts, crue et limon du Nil (« l'Égypte est un don du Nil » d'Hérodote), Haute et Basse-Égypte, et thèses scientifiques de Cheikh Anta Diop sur l'origine négro-africaine. Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_7_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-8',
    title: "LEÇON 8 : L'ÉGYPTE PHARAONIQUE : LES GRANDES PÉRIODES DE SON HISTOIRE",
    type: 'cours',
    badge: "Partie 3 • L'Afrique du Nord-Est",
    description: "Unification par Narmer (Ménès), l'Ancien Empire et les pyramides de Gizeh, le Moyen Empire et l'invasion des Hyksos, le Nouvel Empire conquérant (Hatchepsout, Thoutmosis III, Akhenaton, Ramsès II). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_8_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-9',
    title: "LEÇON 9 : L'ÉGYPTE PHARAONIQUE : LA CIVILISATION",
    type: 'cours',
    badge: "Partie 3 • L'Afrique du Nord-Est",
    description: "Pouvoir absolu et divin du Pharaon, panthéon polythéiste (Osiris, Isis, Horus, Anubis), culte de l'au-delà et momification, écriture hiéroglyphique et sciences (géométrie, médecine, calendrier solaire). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_9_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-10',
    title: 'LEÇON 10 : LA NUBIE ANTIQUE',
    type: 'cours',
    badge: "Partie 3 • L'Afrique du Nord-Est",
    description: "Cadre géographique des cataractes du Nil, richesses en or (Noub), royaume de Koush et épopée des Pharaons noirs (Piankhy, Taharqa), et brillante civilisation de Méroé (sidérurgie du fer, pyramides, reines Candaces). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_10_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-11',
    title: "LEÇON 11 : L'ÉTHIOPIE ANTIQUE (LE ROYAUME D'AKSOUM)",
    type: 'cours',
    badge: "Partie 3 • L'Afrique du Nord-Est",
    description: "Hauts plateaux d'Éthiopie, grand port d'Adoulis sur la mer Rouge, carrefour du commerce mondial avec Rome et la Chine, christianisation précoce sous le roi Ezana et obélisques monolithiques géants. Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_11_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-12',
    title: "LEÇON 12 : LES RELATIONS ENTRE L'AFRIQUE DU NORD-EST ET LE RESTE DU MONDE ANTIQUE",
    type: 'cours',
    badge: "Partie 3 • L'Afrique du Nord-Est",
    description: "Réseaux commerciaux intenses : pistes caravanières vers le cœur de l'Afrique et voies maritimes méditerranéennes faisant de l'Égypte le grenier à blé vital de l'Empire romain. Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_12_HISTOIRE_6EME
  },

  // -----------------------------------------------------------------------
  // QUATRIÈME PARTIE : LES CIVILISATIONS ANTIQUES DE L'ASIE
  // -----------------------------------------------------------------------
  {
    id: 'histoire-6eme-lecon-13',
    title: 'LEÇON 13 : LA MÉSOPOTAMIE : UNE TERRE DE CONVOITISES',
    type: 'cours',
    badge: "Partie 4 • Civilisations de l'Asie",
    description: "Plaine fertile entre le Tigre et l'Euphrate dans le Croissant fertile, vagues de conquêtes (Sumériens, Babyloniens et Code d'Hammourabi, Assyriens), invention de l'écriture cunéiforme et ziggourats de briques. Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_13_HISTOIRE_6EME
  },
  {
    id: 'histoire-6eme-lecon-14',
    title: 'LEÇON 14 : LA PALESTINE : CADRE GÉOGRAPHIQUE, HISTORIQUE ET RELIGIEUX',
    type: 'cours',
    badge: "Partie 4 • Civilisations de l'Asie",
    description: "Terre-couloir entre la Méditerranée et le Jourdain, odyssée du peuple hébreu (Abraham, Moïse et l'Exode, David, Salomon et le Temple), et révolution mondiale du Monothéisme (Judaïsme et racines du Christianisme). Comprend une introduction et une conclusion complètes.",
    lessonData: LESSON_14_HISTOIRE_6EME
  },

  // -----------------------------------------------------------------------
  // RESSOURCES PÉDAGOGIQUES COMPLÉMENTAIRES
  // -----------------------------------------------------------------------
  {
    id: 'pdf-hist-6eme-synthese',
    title: "Fiche de synthèse officielle : Programme d'Histoire 6ème (Sénégal)",
    type: 'ressource',
    badge: 'Document officiel',
    description: "Frise chronologique synoptique, tableau comparatif des 4 parties du programme et mémento des définitions clés d'Histoire 6ème.",
    link: '#'
  },
  {
    id: 'pdf-hist-6eme-evaluations',
    title: "Banque d'évaluations et devoirs types : Histoire 6ème",
    type: 'ressource',
    badge: 'Évaluations & Corrigés',
    description: "Contrôles continus, analyses de documents historiques et compositions trimestrielles types avec barèmes conformes à l'inspection.",
    link: '#'
  }
];
