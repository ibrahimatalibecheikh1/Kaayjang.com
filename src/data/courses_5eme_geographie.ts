import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_GEOGRAPHIE_5EME,
  LESSON_2_GEOGRAPHIE_5EME,
  LESSON_3_GEOGRAPHIE_5EME
} from './courses_5eme_geographie_part1';
import {
  LESSON_4_GEOGRAPHIE_5EME,
  LESSON_5_GEOGRAPHIE_5EME,
  LESSON_6_GEOGRAPHIE_5EME
} from './courses_5eme_geographie_part2';
import {
  LESSON_7_GEOGRAPHIE_5EME,
  LESSON_8_GEOGRAPHIE_5EME,
  LESSON_9_GEOGRAPHIE_5EME,
  LESSON_10_GEOGRAPHIE_5EME
} from './courses_5eme_geographie_part3';

// =========================================================================
// PROGRAMME OFFICIEL DE GÉOGRAPHIE - CLASSE DE 5ÈME (SÉNÉGAL)
// COURS INTÉGRAUX SANS RÉSUMÉ - AVEC COMPLÉMENTS PÉDAGOGIQUES
// 10 LEÇONS COMPLÈTES : OUTILS, ASPECTS PHYSIQUES, POPULATION & ENVIRONNEMENT
// =========================================================================

export const COURSES_GEOGRAPHIE_5EME_RAW: LessonContent[] = [
  LESSON_1_GEOGRAPHIE_5EME,
  LESSON_2_GEOGRAPHIE_5EME,
  LESSON_3_GEOGRAPHIE_5EME,
  LESSON_4_GEOGRAPHIE_5EME,
  LESSON_5_GEOGRAPHIE_5EME,
  LESSON_6_GEOGRAPHIE_5EME,
  LESSON_7_GEOGRAPHIE_5EME,
  LESSON_8_GEOGRAPHIE_5EME,
  LESSON_9_GEOGRAPHIE_5EME,
  LESSON_10_GEOGRAPHIE_5EME
];

export const GEOGRAPHIE_5EME_FILTER_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '10' },
  { id: 'intro', label: 'Introduction : Les outils du géographe', count: '1' },
  { id: 'chapitre-1', label: 'Chapitre I : Aspects physiques du Sénégal', count: '4' },
  { id: 'chapitre-2', label: 'Chapitre II : Population et urbanisation', count: '3' },
  { id: 'chapitre-3', label: 'Chapitre III : Environnement & Développement', count: '2' }
];

export const COURSES_GEOGRAPHIE_5EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // INTRODUCTION : LES OUTILS DU GÉOGRAPHE
  // -----------------------------------------------------------------------
  {
    id: 'geo-5eme-lecon-1',
    title: 'LEÇON 1 : INITIATION À LA CONSTRUCTION ET À L\'INTERPRÉTATION DES CARTES ET DES GRAPHIQUES',
    type: 'cours',
    badge: 'Introduction • Outils du géographe',
    description: "Représentation cartographique (échelle numérique et graphique, légende avec figurés ponctuels/linéaires/surfaces, orientation, titre), diagrammes statistiques (barres, circulaires, courbes) et démarche d'analyse en 4 étapes.",
    lessonData: LESSON_1_GEOGRAPHIE_5EME
  },

  // -----------------------------------------------------------------------
  // CHAPITRE I : LES ASPECTS PHYSIQUES DU SÉNÉGAL
  // -----------------------------------------------------------------------
  {
    id: 'geo-5eme-lecon-2',
    title: 'LEÇON 2 : ÉTUDE DE SITUATION DU SÉNÉGAL',
    type: 'cours',
    badge: 'Chapitre I • Aspects physiques',
    description: "Coordonnées géographiques (12°20-16°41 N, 11°21-17°32 W), superficie (196 722 km²), pointe des Almadies (extrême Ouest africain), façade atlantique de 700 km, les 5 frontières terrestres et l'enclavement singulier de la Gambie.",
    lessonData: LESSON_2_GEOGRAPHIE_5EME
  },
  {
    id: 'geo-5eme-lecon-3',
    title: 'LEÇON 3 : LA STRUCTURE GÉOLOGIQUE ET LE RELIEF DU SÉNÉGAL',
    type: 'cours',
    badge: 'Chapitre I • Aspects physiques',
    description: "Bassin sédimentaire sénégalo-mauritanien (75 % du pays, phosphates, calcaires, pétrole/gaz), socle précambrien ancien du Sud-Est (or, fer de la Falémé), plaines et plateaux sédimentaires, et point culminant à Nepen Diakha (581 m).",
    lessonData: LESSON_3_GEOGRAPHIE_5EME
  },
  {
    id: 'geo-5eme-lecon-4',
    title: 'LEÇON 4 : LE CLIMAT ET LA VÉGÉTATION DU SÉNÉGAL',
    type: 'cours',
    badge: 'Chapitre I • Aspects physiques',
    description: "Alternance des saisons (saison sèche et hivernage), Front Intertropical (FIT), masses d'air (alizé maritime, harmattan, mousson), gradient pluviométrique Sud-Nord et étages végétaux (steppe, savane, forêt dense et mangroves).",
    lessonData: LESSON_4_GEOGRAPHIE_5EME
  },
  {
    id: 'geo-5eme-lecon-5',
    title: 'LEÇON 5 : LES SOLS ET L\'HYDROGRAPHIE DU SÉNÉGAL',
    type: 'cours',
    badge: 'Chapitre I • Aspects physiques',
    description: "Diversité pédologique (sols Dior, Deck, Deck-Dior, tannes salées, sols hydromorphes), les 4 grands fleuves (Sénégal avec barrages Diama et Manantali, Gambie, Casamance, Anambé), vallées fossiles et le Lac de Guiers alimentant Dakar.",
    lessonData: LESSON_5_GEOGRAPHIE_5EME
  },

  // -----------------------------------------------------------------------
  // CHAPITRE II : LES ASPECTS HUMAINS ET LA POPULATION
  // -----------------------------------------------------------------------
  {
    id: 'geo-5eme-lecon-6',
    title: 'LEÇON 6 : LA DYNAMIQUE DE LA POPULATION SÉNÉGALAISE',
    type: 'cours',
    badge: 'Chapitre II • Population',
    description: "Croissance rapide (~ 2,7 %/an), forte natalité et recul de la mortalité, pyramide des âges très jeune (plus de la moitié a moins de 20 ans), composition pluriethnique et ciments de la cohésion nationale (cousinage de plaisanterie Kal).",
    lessonData: LESSON_6_GEOGRAPHIE_5EME
  },
  {
    id: 'geo-5eme-lecon-7',
    title: 'LEÇON 7 : LES MOUVEMENTS DE LA POPULATION DU SÉNÉGAL',
    type: 'cours',
    badge: 'Chapitre II • Population',
    description: "Migrations internes et exode rural (causes, formes saisonnière et définitive), émigration internationale vers l'Afrique, l'Europe et l'Amérique, drame des pirogues clandestines, et impacts des transferts financiers de la diaspora.",
    lessonData: LESSON_7_GEOGRAPHIE_5EME
  },
  {
    id: 'geo-5eme-lecon-8',
    title: 'LEÇON 8 : LA RÉPARTITION DE LA POPULATION ET L\'URBANISATION',
    type: 'cours',
    badge: 'Chapitre II • Population',
    description: "Inégale répartition spatiale (macrocéphalie de l'Ouest littoral vs déserts du Ferlo et de l'Est), urbanisation galopante (~ 50 % de citadins, métropoles de Dakar, Touba, Thiès, Mbour) et défis urbains (inondations, TER/BRT, Diamniadio).",
    lessonData: LESSON_8_GEOGRAPHIE_5EME
  },

  // -----------------------------------------------------------------------
  // CHAPITRE III : LES PROBLÈMES ENVIRONNEMENTAUX
  // -----------------------------------------------------------------------
  {
    id: 'geo-5eme-lecon-9',
    title: 'LEÇON 9 : LES DÉGRADATIONS ENVIRONNEMENTALES AU SÉNÉGAL',
    type: 'cours',
    badge: 'Chapitre III • Environnement',
    description: "Désertification et sécheresses récurrentes, déforestation par le charbon de bois et feux de brousse, salinisation des terres (tannes), érosion côtière rongeant Saint-Louis et Rufisque, surpêche marine et décharge de Mbeubeuss à Dakar.",
    lessonData: LESSON_9_GEOGRAPHIE_5EME
  },
  {
    id: 'geo-5eme-lecon-10',
    title: 'LEÇON 10 : LES POLITIQUES DE GESTION DE L\'ENVIRONNEMENT ET LE DÉVELOPPEMENT DURABLE',
    type: 'cours',
    badge: 'Chapitre III • Environnement',
    description: "Initiative panafricaine de la Grande Muraille Verte, digues anti-sel en Casamance, fixation des dunes par les filaos des Niayes, parcs nationaux (Niokolo-Koba, Oiseaux du Djoudj), aires marines protégées et essor solaire/éolien (Taïba Ndiaye).",
    lessonData: LESSON_10_GEOGRAPHIE_5EME
  }
];
