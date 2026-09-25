// =========================================================================
// INDEX CENTRAL DES COURS D'HISTOIRE CLASSE DE SECONDE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 24 Leçons exhaustives intégrales sans résumé
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_HISTOIRE_2NDE, LESSON_2_HISTOIRE_2NDE, LESSON_3_HISTOIRE_2NDE, LESSON_4_HISTOIRE_2NDE, LESSON_5_HISTOIRE_2NDE, LESSON_6_HISTOIRE_2NDE
} from './courses_2nde_histoire_part1';
import {
  LESSON_7_HISTOIRE_2NDE, LESSON_8_HISTOIRE_2NDE, LESSON_9_HISTOIRE_2NDE, LESSON_10_HISTOIRE_2NDE, LESSON_11_HISTOIRE_2NDE
} from './courses_2nde_histoire_part2';
import {
  LESSON_12_HISTOIRE_2NDE, LESSON_13_HISTOIRE_2NDE, LESSON_14_HISTOIRE_2NDE, LESSON_15_HISTOIRE_2NDE, LESSON_16_HISTOIRE_2NDE
} from './courses_2nde_histoire_part3';
import {
  LESSON_17_HISTOIRE_2NDE, LESSON_18_HISTOIRE_2NDE, LESSON_19_HISTOIRE_2NDE, LESSON_20_HISTOIRE_2NDE, LESSON_21_HISTOIRE_2NDE, LESSON_22_HISTOIRE_2NDE, LESSON_23_HISTOIRE_2NDE, LESSON_24_HISTOIRE_2NDE
} from './courses_2nde_histoire_part4';

export {
  LESSON_1_HISTOIRE_2NDE, LESSON_2_HISTOIRE_2NDE, LESSON_3_HISTOIRE_2NDE, LESSON_4_HISTOIRE_2NDE, LESSON_5_HISTOIRE_2NDE, LESSON_6_HISTOIRE_2NDE, LESSON_7_HISTOIRE_2NDE, LESSON_8_HISTOIRE_2NDE, LESSON_9_HISTOIRE_2NDE, LESSON_10_HISTOIRE_2NDE, LESSON_11_HISTOIRE_2NDE, LESSON_12_HISTOIRE_2NDE, LESSON_13_HISTOIRE_2NDE, LESSON_14_HISTOIRE_2NDE, LESSON_15_HISTOIRE_2NDE, LESSON_16_HISTOIRE_2NDE, LESSON_17_HISTOIRE_2NDE, LESSON_18_HISTOIRE_2NDE, LESSON_19_HISTOIRE_2NDE, LESSON_20_HISTOIRE_2NDE, LESSON_21_HISTOIRE_2NDE, LESSON_22_HISTOIRE_2NDE, LESSON_23_HISTOIRE_2NDE, LESSON_24_HISTOIRE_2NDE
};

export const HISTOIRE_2NDE_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '24' },
  { id: 'part-1', label: 'Partie 1 • Méthodologie & Préhistoire', count: '6' },
  { id: 'part-2', label: 'Partie 2 • Égypte, Axoum & Méditerranée', count: '5' },
  { id: 'part-3', label: 'Partie 3 • Empires & Sénégambie', count: '5' },
  { id: 'part-4', label: 'Partie 4 • Traites & Révolutions', count: '8' }
];

export const COURSES_HISTOIRE_2NDE: ContentData[] = [
  {
    id: 'histoire-2nde-cours-1',
    title: `LEÇON 1 : HISTOIRE : DÉFINITION, OBJET ET IMPORTANCE`,
    type: 'cours',
    badge: 'Partie 1 • Méthodologie & Préhistoire',
    description: `L'histoire est une discipline qui cherche à connaître et à comprendre les sociétés humaines dans le temps. Elle étudie les transformations des hommes, des territoires, des institutions et des cultures.`,
    lessonData: LESSON_1_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-2',
    title: `LEÇON 2 : PROBLÉMATIQUE DE L'HISTOIRE AFRICAINE : SOURCES ET PROCÉDÉS D'INVESTIGATION`,
    type: 'cours',
    badge: 'Partie 1 • Méthodologie & Préhistoire',
    description: `L'histoire africaine possède une grande diversité de sources : traditions orales, archéologie, linguistique historique, manuscrits, récits de voyageurs et archives.`,
    lessonData: LESSON_2_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-3',
    title: `LEÇON 3 : L'AFRIQUE, BERCEAU DE L'HUMANITÉ`,
    type: 'cours',
    badge: 'Partie 1 • Méthodologie & Préhistoire',
    description: `L'Afrique occupe une place centrale dans l'histoire des origines humaines. Découvertes paléontologiques, évolution des hominidés et peuplement de la planète.`,
    lessonData: LESSON_3_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-4',
    title: `LEÇON 4 : LES CIVILISATIONS PALÉOLITHIQUES`,
    type: 'cours',
    badge: 'Partie 1 • Méthodologie & Préhistoire',
    description: `L'âge de la pierre taillée : modes de vie des chasseurs-cueilleurs, évolution technique des outillages, maîtrise du feu et expressions artistiques.`,
    lessonData: LESSON_4_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-5',
    title: `LEÇON 5 : LA RÉVOLUTION NÉOLITHIQUE ET SES CONSÉQUENCES`,
    type: 'cours',
    badge: 'Partie 1 • Méthodologie & Préhistoire',
    description: `Domestication des plantes et des animaux, sédentarisation des communautés humaines, apparition de la poterie, du tissage et des premiers villages.`,
    lessonData: LESSON_5_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-6',
    title: `LEÇON 6 : PRÉHISTOIRE ET PROTOHISTOIRE DU SÉNÉGAL`,
    type: 'cours',
    badge: 'Partie 1 • Méthodologie & Préhistoire',
    description: `Les vestiges préhistoriques et protohistoriques au Sénégal : amas coquilliers de Joal et du Saloum, mégalithes du Sine-Saloum, tumulus et métallurgie ancienne.`,
    lessonData: LESSON_6_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-7',
    title: `LEÇON 7 : ACTIVITÉ DE CONSOLIDATION : TECHNIQUE DE LA DISSERTATION HISTORIQUE`,
    type: 'cours',
    badge: 'Partie 2 • Civilisations antiques africaines',
    description: `Méthodologie complète : analyse du sujet, problématisation, élaboration du plan détaillé, rédaction de l'introduction, du développement et de la conclusion.`,
    lessonData: LESSON_7_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-8',
    title: `LEÇON 8 : LA CIVILISATION DE L'ÉGYPTE PHARAONIQUE`,
    type: 'cours',
    badge: 'Partie 2 • Civilisations antiques africaines',
    description: `Le rôle vital du Nil, l'organisation théocratique du pouvoir pharaonique, la société, la religion polythéiste, l'écriture hiéroglyphique et l'héritage scientifique.`,
    lessonData: LESSON_8_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-9',
    title: `LEÇON 9 : AXOUM`,
    type: 'cours',
    badge: 'Partie 2 • Civilisations antiques africaines',
    description: `Le royaume puis empire d'Axoum dans la Corne de l'Afrique : carrefour commercial maritime sur la mer Rouge, christianisation précoce et stèles monumentales.`,
    lessonData: LESSON_9_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-10',
    title: `LEÇON 10 : LA MÉDITERRANÉE ET LE MONDE NOIR : CONTACTS, ÉCHANGES ET INFLUENCES`,
    type: 'cours',
    badge: 'Partie 2 • Civilisations antiques africaines',
    description: `Relations anciennes et intenses entre les mondes méditerranéens et l'Afrique subsaharienne : routes transsahariennes, diplomatie, circulations culturelles et religieuses.`,
    lessonData: LESSON_10_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-11',
    title: `LEÇON 11 : ACTIVITÉ DE CONSOLIDATION : PARENTÉ ENTRE LA CIVILISATION ÉGYPTIENNE ET LE RESTE DE L'AFRIQUE`,
    type: 'cours',
    badge: 'Partie 2 • Civilisations antiques africaines',
    description: `Dossier et démarche critique : analyse des thèses de Cheikh Anta Diop, correspondances linguistiques, culturelles et matérielles entre l'Égypte ancienne et la Sénégambie.`,
    lessonData: LESSON_11_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-12',
    title: `LEÇON 12 : LES CIVILISATIONS DU SOUDAN MÉDIÉVAL : GHANA, MALI ET SONGHAÏ`,
    type: 'cours',
    badge: 'Partie 3 • Empires & Sénégambie',
    description: `L'apogée des grands empires soudanais d'Afrique de l'Ouest : contrôle des mines d'or et des pistes caravanières, administration centralisée et rayonnement de Tombouctou.`,
    lessonData: LESSON_12_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-13',
    title: `LEÇON 13 : LE PROCESSUS D'ISLAMISATION EN AFRIQUE OCCIDENTALE`,
    type: 'cours',
    badge: 'Partie 3 • Empires & Sénégambie',
    description: `Voies de pénétration pacifique de l'islam par les marchands et marabouts, conversion des cours royales (Takrour, Mali), et enracinement populaire.`,
    lessonData: LESSON_13_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-14',
    title: `LEÇON 14 : L'EMPIRE DU JOLOF`,
    type: 'cours',
    badge: 'Partie 3 • Empires & Sénégambie',
    description: `Fondation par Ndiadiane Ndiaye, structure confédérale regroupant Walo, Cayor, Baol, Sine et Saloum, rôle du Buurba et désagrégation à la bataille de Danki (1549).`,
    lessonData: LESSON_14_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-15',
    title: `LEÇON 15 : L'EMPIRE DU GAABU`,
    type: 'cours',
    badge: 'Partie 3 • Empires & Sénégambie',
    description: `Histoire du royaume mandingue du Gaabu : institutions politiques (Nyancho), guerres, dynamiques commerciales régionales et déclin à la bataille de Kansala en 1867.`,
    lessonData: LESSON_15_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-16',
    title: `LEÇON 16 : ACTIVITÉ DE CONSOLIDATION : TECHNIQUE DU COMMENTAIRE HISTORIQUE`,
    type: 'cours',
    badge: 'Partie 3 • Empires & Sénégambie',
    description: `Règles d'or du commentaire de documents historiques au lycée : contextualisation, explication littérale et critique, confrontation de sources et grille d'évaluation.`,
    lessonData: LESSON_16_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-17',
    title: `LEÇON 17 : LA TRAITE ARABE : ORIGINES, EXTENSIONS ET CONSÉQUENCES`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `Réseaux caravaniers transsahariens et maritimes de la mer Rouge et de l'océan Indien : origines historiques, acteurs, circuits et conséquences démographiques et sociétales.`,
    lessonData: LESSON_17_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-18',
    title: `LEÇON 18 : LA TRAITE ATLANTIQUE`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `Le commerce triangulaire entre l'Europe, l'Afrique et les Amériques : capture, comptoirs côtiers, traversée du "Middle Passage", plantations esclavagistes et saignée démographique.`,
    lessonData: LESSON_18_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-19',
    title: `LEÇON 19 : ACTIVITÉ DE CONSOLIDATION : DOSSIER SUR LA TRAITE AU SÉNÉGAL`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `Étude patrimoniale et documentaire : l'île de Gorée et la Maison des Esclaves, Saint-Louis, Rufisque, la vallée du fleuve Sénégal et les impacts sociétaux durables.`,
    lessonData: LESSON_19_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-20',
    title: `LEÇON 20 : LA RÉVOLUTION TORODO`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `Mouvement révolutionnaire islamique de 1776 au Fouta-Toro mené par Souleymane Baal et Thierno Souleymane Baal, instauration de l'Almamiyat et protection contre les pillages de la traite.`,
    lessonData: LESSON_20_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-21',
    title: `LEÇON 21 : L'EMPIRE D'EL HADJI OMAR TALL`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `Parcours spirituel et militaire d'El Hadji Omar Tall : propagation de la Tijaniyya, djihad unificateur, édification de l'empire toucouleur et disparition aux falaises de Bandiagara.`,
    lessonData: LESSON_21_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-22',
    title: `LEÇON 22 : L'EMPIRE ZOULOU DE TCHAKA`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `La révolution militaire et politique zouloue au début du XIXe siècle : tactique du taureau (impi), armes nouvelles (sagaie courte) et bouleversements du Mfecane en Afrique australe.`,
    lessonData: LESSON_22_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-23',
    title: `LEÇON 23 : LA RÉVOLUTION AMÉRICAINE`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `La guerre d'indépendance des treize colonies d'Amérique du Nord (1775-1783), la Déclaration d'indépendance de 1776, la Constitution de 1787 et la portée universelle des droits individuels.`,
    lessonData: LESSON_23_HISTOIRE_2NDE
  },
  {
    id: 'histoire-2nde-cours-24',
    title: `LEÇON 24 : LA RÉVOLUTION FRANÇAISE DE 1789`,
    type: 'cours',
    badge: 'Partie 4 • Traites & Révolutions',
    description: `Crise de l'Ancien Régime, prise de la Bastille, Déclaration des droits de l'homme et du citoyen, abolition des privilèges féodaux et répercussions politiques mondiales.`,
    lessonData: LESSON_24_HISTOIRE_2NDE
  },
  {
    id: 'res-histoire-2nde-synthese-pdf',
    title: `Guide Méthodologique PDF : La Dissertation et le Commentaire Historique en Seconde`,
    type: 'ressource',
    badge: 'Format PDF officiel',
    description: `Fiches méthodologiques complètes : analyse du sujet, construction de problématique et plans types pour le second cycle.`,
    link: '#'
  },
  {
    id: 'res-histoire-2nde-dossier-traite',
    title: `Dossier Documentaire PDF : La Traite Négrière en Sénégambie et à Gorée`,
    type: 'ressource',
    badge: 'Dossier pédagogique',
    description: `Recueil de sources historiques, cartes anciennes et documents d'archives sur le commerce triangulaire et ses impacts.`,
    link: '#'
  }
];
