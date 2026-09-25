// =========================================================================
// INDEX CENTRAL DES COURS DE GÉOGRAPHIE CLASSE DE SECONDE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 20 Leçons exhaustives intégrales sans résumé ni condensation
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_GEOGRAPHIE_2NDE, LESSON_2_GEOGRAPHIE_2NDE, LESSON_3_GEOGRAPHIE_2NDE, LESSON_4_GEOGRAPHIE_2NDE, LESSON_5_GEOGRAPHIE_2NDE, LESSON_6_GEOGRAPHIE_2NDE
} from './courses_2nde_geographie_part1';
import {
  LESSON_7_GEOGRAPHIE_2NDE, LESSON_8_GEOGRAPHIE_2NDE, LESSON_9_GEOGRAPHIE_2NDE, LESSON_10_GEOGRAPHIE_2NDE, LESSON_11_GEOGRAPHIE_2NDE
} from './courses_2nde_geographie_part2';
import {
  LESSON_12_GEOGRAPHIE_2NDE, LESSON_13_GEOGRAPHIE_2NDE, LESSON_14_GEOGRAPHIE_2NDE
} from './courses_2nde_geographie_part3';
import {
  LESSON_15_GEOGRAPHIE_2NDE, LESSON_16_GEOGRAPHIE_2NDE, LESSON_17_GEOGRAPHIE_2NDE, LESSON_18_GEOGRAPHIE_2NDE, LESSON_19_GEOGRAPHIE_2NDE, LESSON_20_GEOGRAPHIE_2NDE
} from './courses_2nde_geographie_part4';

export {
  LESSON_1_GEOGRAPHIE_2NDE, LESSON_2_GEOGRAPHIE_2NDE, LESSON_3_GEOGRAPHIE_2NDE, LESSON_4_GEOGRAPHIE_2NDE, LESSON_5_GEOGRAPHIE_2NDE, LESSON_6_GEOGRAPHIE_2NDE,
  LESSON_7_GEOGRAPHIE_2NDE, LESSON_8_GEOGRAPHIE_2NDE, LESSON_9_GEOGRAPHIE_2NDE, LESSON_10_GEOGRAPHIE_2NDE, LESSON_11_GEOGRAPHIE_2NDE,
  LESSON_12_GEOGRAPHIE_2NDE, LESSON_13_GEOGRAPHIE_2NDE, LESSON_14_GEOGRAPHIE_2NDE,
  LESSON_15_GEOGRAPHIE_2NDE, LESSON_16_GEOGRAPHIE_2NDE, LESSON_17_GEOGRAPHIE_2NDE, LESSON_18_GEOGRAPHIE_2NDE, LESSON_19_GEOGRAPHIE_2NDE, LESSON_20_GEOGRAPHIE_2NDE
};

export const GEOGRAPHIE_2NDE_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '20' },
  { id: 'part-1', label: 'Partie 1 • Terre, Géodynamique & Reliefs', count: '6' },
  { id: 'part-2', label: 'Partie 2 • Atmosphère, Climat & Biomes', count: '5' },
  { id: 'part-3', label: 'Partie 3 • Hydrosphère & Ressources en eau', count: '3' },
  { id: 'part-4', label: 'Partie 4 • Populations, Villes & Méthode', count: '6' }
];

export const COURSES_GEOGRAPHIE_2NDE: ContentData[] = [
  {
    id: 'geo-2nde-cours-1',
    title: 'LEÇON 1 : LA TERRE DANS L\'UNIVERS ET LE SYSTÈME SOLAIRE',
    type: 'cours',
    badge: 'Partie 1 • Terre, Géodynamique & Reliefs',
    description: 'Place de la Terre dans l\'Univers, forme du géoïde, dimensions réelles, coordonnées géographiques, rotation et force de Coriolis, révolution et saisons.',
    lessonData: LESSON_1_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-2',
    title: 'LEÇON 2 : LA STRUCTURE INTERNE ET EXTERNE DU GLOBE TERRESTRE',
    type: 'cours',
    badge: 'Partie 1 • Terre, Géodynamique & Reliefs',
    description: 'Méthodes sismologiques (ondes P et S), discontinuités de Moho, Gutenberg et Lehmann, croûte, manteau, noyau, lithosphère, hydrosphère, atmosphère et biosphère.',
    lessonData: LESSON_2_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-3',
    title: 'LEÇON 3 : LA DÉRIVE DES CONTINENTS ET LA TECTONIQUE DES PLAQUES',
    type: 'cours',
    badge: 'Partie 1 • Terre, Géodynamique & Reliefs',
    description: 'Théorie d\'Alfred Wegener, preuves morphologiques, paléontologiques et géologiques, expansion des fonds océaniques, frontières divergentes, subduction, collision et failles transformantes.',
    lessonData: LESSON_3_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-4',
    title: 'LEÇON 4 : LES SÉISMES ET LE VOLCANISME : MÉCANISMES ET RISQUES',
    type: 'cours',
    badge: 'Partie 1 • Terre, Géodynamique & Reliefs',
    description: 'Origine et foyer des séismes, magnitudes et intensités, tsunamis dévastateurs, régimes volcaniques effusifs et explosifs, ceinture de feu du Pacifique et gestion du risque.',
    lessonData: LESSON_4_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-5',
    title: 'LEÇON 5 : LES GRANDS ENSEMBLES DU RELIEF TERRESTRE',
    type: 'cours',
    badge: 'Partie 1 • Terre, Géodynamique & Reliefs',
    description: 'Courbe hypsométrique planétaire, montagnes jeunes et anciennes, plateaux, plaines d\'érosion et alluviales, reliefs sous-marins et topographie du Sénégal (falaise de Thiès, Mamelles, Fongolimbi).',
    lessonData: LESSON_5_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-6',
    title: 'LEÇON 6 : L\'ÉROSION ET LE FAÇONNEMENT DES RELIEFS TERRESTRES',
    type: 'cours',
    badge: 'Partie 1 • Terre, Géodynamique & Reliefs',
    description: 'Météorisation physique (thermoclastie, cryoclastie) et altération chimique, action éolienne (regs, dunes), dynamique fluviale, érosion littorale et cuirasses latéritiques en Afrique de l\'Ouest.',
    lessonData: LESSON_6_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-7',
    title: 'LEÇON 7 : L\'ATMOSPHÈRE : STRUCTURE VERTICALE ET BILAN RADIATIF',
    type: 'cours',
    badge: 'Partie 2 • Atmosphère, Climat & Biomes',
    description: 'Composition chimique de l\'air, couches stratifiées (troposphère, stratosphère et couche d\'ozone, mésosphère, thermosphère), albédo planétaire, effet de serre naturel et déséquilibre équateur-pôles.',
    lessonData: LESSON_7_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-8',
    title: 'LEÇON 8 : LA CIRCULATION GÉNÉRALE ET LES CENTRES DE PRESSION',
    type: 'cours',
    badge: 'Partie 2 • Atmosphère, Climat & Biomes',
    description: 'Dépressions et anticyclones, modèle tricellulaire (Hadley, Ferrel, polaire), alizés, vents d\'Ouest, moussons d\'Asie et d\'Afrique, Harmattan, alizé maritime et FIT au Sénégal.',
    lessonData: LESSON_8_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-9',
    title: 'LEÇON 9 : LES PRÉCIPITATIONS ET LE CYCLE MONDIAL DE L\'EAU',
    type: 'cours',
    badge: 'Partie 2 • Atmosphère, Climat & Biomes',
    description: 'Cycle hydrologique fermé, saturation et condensation, pluies de convection (hivernage), pluies orographiques et frontales, répartition géographique des précipitations et gradient sénégalais.',
    lessonData: LESSON_9_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-10',
    title: 'LEÇON 10 : LES GRANDS TYPES DE CLIMATS DE LA TERRE',
    type: 'cours',
    badge: 'Partie 2 • Atmosphère, Climat & Biomes',
    description: 'Facteurs zonaux et azonaux, climats chauds (équatorial, subguinéen, soudanien, sahélien, désertique, mousson), climats tempérés (océanique, continental, méditerranéen) et climats froids.',
    lessonData: LESSON_10_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-11',
    title: 'LEÇON 11 : LES GRANDS DOMAINES BIOGÉOGRAPHIQUES DU GLOBE',
    type: 'cours',
    badge: 'Partie 2 • Atmosphère, Climat & Biomes',
    description: 'Pédogenèse et horizons du sol, forêt dense équatoriale et sols ferrallitiques, savanes tropicales à baobabs, steppe sahélienne à acacias, déserts, forêts tempérées, taïga et toundra polaire.',
    lessonData: LESSON_11_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-12',
    title: 'LEÇON 12 : LES OCÉANS ET LES MERS : PHYSIQUE, DYNAMIQUE ET RESSOURCES',
    type: 'cours',
    badge: 'Partie 3 • Hydrosphère & Ressources en eau',
    description: 'Salinité et température des eaux de mer, vagues, marées astronomiques, gyres océaniques, upwelling sénégalais, pêche maritime, hydrocarbures offshore (Sangomar, GTA) et transport mondial.',
    lessonData: LESSON_12_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-13',
    title: 'LEÇON 13 : LES EAUX CONTINENTALES : RÉSEAUX ET FLEUVES',
    type: 'cours',
    badge: 'Partie 3 • Hydrosphère & Ressources en eau',
    description: 'Bassins versants, exoréisme et endoréisme, régimes hydrologiques (crue et étiage), fleuves ouest-africains (Sénégal, barrages de Manantali et Diama, OMVS, Gambie, Casamance) et nappes phréatiques.',
    lessonData: LESSON_13_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-14',
    title: 'LEÇON 14 : LA PROBLÉMATIQUE DE L\'EAU DANS LE MONDE : L\'OR BLEU',
    type: 'cours',
    badge: 'Partie 3 • Hydrosphère & Ressources en eau',
    description: 'Stress hydrique et seuils de Falkenmark, disparités d\'accès à l\'eau potable, secteurs consommateurs (agriculture, industrie, villes), géopolitique des fleuves (Nil, Tigre, Euphrate) et modèle de l\'OMVS.',
    lessonData: LESSON_14_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-15',
    title: 'LEÇON 15 : LA RÉPARTITION DE LA POPULATION MONDIALE',
    type: 'cours',
    badge: 'Partie 4 • Populations, Villes & Méthode',
    description: 'L\'œkoumène terrestre, foyers majeurs (Asie de l\'Est, Asie du Sud, Europe) et secondaires, grands déserts humains, facteurs naturels et socio-historiques, macrocéphalie dakaroise et contrastes au Sénégal.',
    lessonData: LESSON_15_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-16',
    title: 'LEÇON 16 : LA DYNAMIQUE DÉMOGRAPHIQUE ET LA TRANSITION DÉMOGRAPHIQUE',
    type: 'cours',
    badge: 'Partie 4 • Populations, Villes & Méthode',
    description: 'Taux démographiques, indice de fécondité, espérance de vie, modèle universel de la transition démographique, hiver démographique au Nord et jeunesse dynamique au Sénégal (dividende démographique).',
    lessonData: LESSON_16_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-17',
    title: 'LEÇON 17 : LES MOBILITÉS ET MIGRATIONS HUMAINES DANS LE MONDE',
    type: 'cours',
    badge: 'Partie 4 • Populations, Villes & Méthode',
    description: 'Exode rural et transhumance, migrations internationales de travail, réfugiés politiques et climatiques, flux Sud-Nord et Sud-Sud, modèle Push-Pull, transferts financiers de la diaspora au Sénégal et drames migratoires.',
    lessonData: LESSON_17_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-18',
    title: 'LEÇON 18 : L\'EXPLOSION URBAINE ET L\'ESPACE URBAIN DANS LE MONDE',
    type: 'cours',
    badge: 'Partie 4 • Populations, Villes & Méthode',
    description: 'Transition urbaine planétaire (57 % de citadins), métropolisation, mégapoles et villes mondiales, ségrégation sociospatiale et bidonvilles, agglomération dakaroise (Plateau, banlieues, Diamniadio, BRT, TER).',
    lessonData: LESSON_18_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-19',
    title: 'LEÇON 19 : MÉTHODOLOGIE DU COMMENTAIRE DE DOCUMENTS GÉOGRAPHIQUES',
    type: 'cours',
    badge: 'Partie 4 • Populations, Villes & Méthode',
    description: 'Identification des sources et dates, analyse des tableaux statistiques, courbes, diagrammes ombrothermiques et pyramides des âges, règle d\'or constat chiffré - explication géographique et rédaction.',
    lessonData: LESSON_19_GEOGRAPHIE_2NDE
  },
  {
    id: 'geo-2nde-cours-20',
    title: 'LEÇON 20 : TECHNIQUE DE LA DISSERTATION GÉOGRAPHIQUE AU SECOND CYCLE',
    type: 'cours',
    badge: 'Partie 4 • Populations, Villes & Méthode',
    description: 'Analyse approfondie du sujet et délimitation spatiale, formulation de la problématique, plans thématique, dialectique et comparatif, structure de l\'introduction, développement argumenté et conclusion prospective.',
    lessonData: LESSON_20_GEOGRAPHIE_2NDE
  }
];
