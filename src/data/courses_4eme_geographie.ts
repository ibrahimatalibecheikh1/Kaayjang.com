import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_GEOGRAPHIE_4EME,
  LESSON_2_GEOGRAPHIE_4EME,
  LESSON_3_GEOGRAPHIE_4EME,
  LESSON_4_GEOGRAPHIE_4EME,
  LESSON_5_GEOGRAPHIE_4EME
} from './courses_4eme_geographie_part1';
import {
  LESSON_6_GEOGRAPHIE_4EME,
  LESSON_7_GEOGRAPHIE_4EME,
  LESSON_8_GEOGRAPHIE_4EME,
  LESSON_9_GEOGRAPHIE_4EME,
  LESSON_10_GEOGRAPHIE_4EME
} from './courses_4eme_geographie_part2';
import {
  LESSON_11_GEOGRAPHIE_4EME,
  LESSON_12_GEOGRAPHIE_4EME,
  LESSON_13_GEOGRAPHIE_4EME,
  LESSON_14_GEOGRAPHIE_4EME
} from './courses_4eme_geographie_part3';
import {
  LESSON_15_GEOGRAPHIE_4EME,
  LESSON_16_GEOGRAPHIE_4EME,
  LESSON_17_GEOGRAPHIE_4EME
} from './courses_4eme_geographie_part4';

// =========================================================================
// PROGRAMME OFFICIEL DE GÉOGRAPHIE - CLASSE DE 4ÈME (SÉNÉGAL)
// COURS INTÉGRAUX SANS RÉSUMÉ - AVEC FIGURES, SCHÉMAS VECTORIELS, EXERCICES ET CORRIGÉS
// 17 LEÇONS COMPLÈTES : MÉTHODOLOGIE, AFRIQUE PHYSIQUE, POPULATION, ÉCONOMIE & ENVIRONNEMENT
// =========================================================================

export const COURSES_GEOGRAPHIE_4EME_RAW: LessonContent[] = [
  LESSON_1_GEOGRAPHIE_4EME,
  LESSON_2_GEOGRAPHIE_4EME,
  LESSON_3_GEOGRAPHIE_4EME,
  LESSON_4_GEOGRAPHIE_4EME,
  LESSON_5_GEOGRAPHIE_4EME,
  LESSON_6_GEOGRAPHIE_4EME,
  LESSON_7_GEOGRAPHIE_4EME,
  LESSON_8_GEOGRAPHIE_4EME,
  LESSON_9_GEOGRAPHIE_4EME,
  LESSON_10_GEOGRAPHIE_4EME,
  LESSON_11_GEOGRAPHIE_4EME,
  LESSON_12_GEOGRAPHIE_4EME,
  LESSON_13_GEOGRAPHIE_4EME,
  LESSON_14_GEOGRAPHIE_4EME,
  LESSON_15_GEOGRAPHIE_4EME,
  LESSON_16_GEOGRAPHIE_4EME,
  LESSON_17_GEOGRAPHIE_4EME
];

export const GEOGRAPHIE_4EME_FILTER_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '17' },
  { id: 'part-1', label: 'Partie I : Méthodologie & Représentations', count: '5' },
  { id: 'part-2', label: 'Partie II : L\'Afrique Physique (Milieu Naturel)', count: '5' },
  { id: 'part-3', label: 'Partie III : L\'Afrique Humaine & Économique', count: '4' },
  { id: 'part-4', label: 'Partie IV : Économie Régionale & Environnement', count: '3' }
];

export const COURSES_GEOGRAPHIE_4EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // PREMIÈRE PARTIE : MÉTHODOLOGIE ET REPRÉSENTATIONS GRAPHIQUES
  // -----------------------------------------------------------------------
  {
    id: 'geo-4eme-lecon-1',
    title: 'LEÇON 1 : LA DÉMARCHE GÉOGRAPHIQUE ET LES OUTILS DE LA GÉOGRAPHIE',
    type: 'cours',
    badge: 'Partie I • Méthodologie',
    description: "Les 4 étapes de la méthode géographique (Observation, Localisation, Description, Explication), les sources documentaires de terrain, et les technologies géospatiales modernes (GPS, SIG et télédétection par satellite).",
    lessonData: LESSON_1_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-2',
    title: 'LEÇON 2 : LA CARTE GÉOGRAPHIQUE – LANGAGE, LECTURE ET INTERPRÉTATION',
    type: 'cours',
    badge: 'Partie I • Méthodologie',
    description: "Les 5 éléments fondamentaux de la carte (titre, échelle, légende, orientation, coordonnées), calculs d'échelle (numérique et graphique), et sémiologie graphique (figurés ponctuels, linéaires et de surface).",
    lessonData: LESSON_2_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-3',
    title: 'LEÇON 3 : LES DIAGRAMMES STATISTIQUES EN GÉOGRAPHIE',
    type: 'cours',
    badge: 'Partie I • Représentations',
    description: "Méthodes de construction et d'analyse des diagrammes en barres/histogrammes, diagrammes circulaires à secteurs (360°/100%) et courbes d'évolution temporelle avec guide d'interprétation en 4 temps.",
    lessonData: LESSON_3_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-4',
    title: 'LEÇON 4 : LE DIAGRAMME OMBROTHERMIQUE ET L\'ANALYSE CLIMATIQUE',
    type: 'cours',
    badge: 'Partie I • Représentations',
    description: "Règle de Gaussen (P = 2T), construction du double axe (Température à gauche, Précipitations à droite), identification graphique des mois secs et calcul de l'amplitude thermique annuelle.",
    lessonData: LESSON_4_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-5',
    title: 'LEÇON 5 : LA PYRAMIDE DES ÂGES ET L\'ANALYSE DÉMOGRAPHIQUE',
    type: 'cours',
    badge: 'Partie I • Représentations',
    description: "Double histogramme horizontal (hommes à gauche, femmes à droite), structure par groupes d'âges, et identification des 3 grands profils mondiaux (parasol/jeunesse, cloche/transition, ogive/vieillissement).",
    lessonData: LESSON_5_GEOGRAPHIE_4EME
  },

  // -----------------------------------------------------------------------
  // DEUXIÈME PARTIE : L'AFRIQUE PHYSIQUE - MILIEU NATUREL
  // -----------------------------------------------------------------------
  {
    id: 'geo-4eme-lecon-6',
    title: 'LEÇON 6 : PRÉSENTATION GÉNÉRALE DU CONTINENT AFRICAIN',
    type: 'cours',
    badge: 'Partie II • Afrique Physique',
    description: "Position astronomique centrale (Équateur, Greenwich, tropiques), superficie colossale (30,3 millions km²), limites maritimes, régularité des côtes et les 5 grands ensembles régionaux.",
    lessonData: LESSON_6_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-7',
    title: 'LEÇON 7 : LE RELIEF ET LES SOLS DE L\'AFRIQUE',
    type: 'cours',
    badge: 'Partie II • Afrique Physique',
    description: "Vieux socle précambrien aplani, prédominance des plateaux étagés et des cuvettes (Congo, Tchad), la gigantesque Great Rift Valley, le Kilimandjaro (5 895 m), et la fragilité des sols ferrallitiques et ferrugineux.",
    lessonData: LESSON_7_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-8',
    title: 'LEÇON 8 : LE CLIMAT DE L\'AFRIQUE',
    type: 'cours',
    badge: 'Partie II • Afrique Physique',
    description: "Continent le plus chaud de la planète, confrontation Harmattan / Mousson, dynamique du Front Intertropical (FIT), et symétrie zonale des climats (équatorial, tropical humide, sahélien, désertique et méditerranéen).",
    lessonData: LESSON_8_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-9',
    title: 'LEÇON 9 : L\'HYDROGRAPHIE DE L\'AFRIQUE',
    type: 'cours',
    badge: 'Partie II • Afrique Physique',
    description: "Les géants fluviaux (Nil 6 650 km, Congo 41 000 m³/s, Niger, fleuve Sénégal), les grands lacs (Victoria, Tanganyika profond de 1 470 m), régimes hydrologiques et potentiel hydroélectrique (OMVS, barrages).",
    lessonData: LESSON_9_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-10',
    title: 'LEÇON 10 : LA VÉGÉTATION ET LA FAUNE EN AFRIQUE',
    type: 'cours',
    badge: 'Partie II • Afrique Physique',
    description: "Étagement de la forêt dense équatoriale sempervirente (canopée à 50 m), savanes arborées à faune légendaire (herbivores et prédateurs), steppes épineuses, déserts xérophiles et préservation de la biodiversité.",
    lessonData: LESSON_10_GEOGRAPHIE_4EME
  },

  // -----------------------------------------------------------------------
  // TROISIÈME PARTIE : L'AFRIQUE HUMAINE ET ÉCONOMIQUE
  // -----------------------------------------------------------------------
  {
    id: 'geo-4eme-lecon-11',
    title: 'LEÇON 11 : LA POPULATION AFRICAINE – DÉMOGRAPHIE ET MOUVEMENTS',
    type: 'cours',
    badge: 'Partie III • Humain & Économie',
    description: "Croissance rapide (~2,5%/an), plus de 40% de moins de 15 ans, pyramide en parasol, opportunité du dividende démographique, exode rural, et prépondérance des migrations intra-africaines.",
    lessonData: LESSON_11_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-12',
    title: 'LEÇON 12 : LA POPULATION AFRICAINE – RÉPARTITION ET URBANISATION',
    type: 'cours',
    badge: 'Partie III • Humain & Économie',
    description: "Contrasting foyers de peuplement (>1 000 hab./km² dans la vallée du Nil, golfe de Guinée, Grands Lacs) vs déserts humains, mégapoles géantes (Le Caire, Kinshasa, Lagos, Dakar) et crises urbaines.",
    lessonData: LESSON_12_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-13',
    title: 'LEÇON 13 : LES PROBLÈMES DE DÉVELOPPEMENT EN AFRIQUE',
    type: 'cours',
    badge: 'Partie III • Humain & Économie',
    description: "Différence entre croissance du PIB et développement humain (IDH), indicateurs de la pauvreté, déficit énergétique, détérioration des termes de l'échange et fardeau de la dette extérieure.",
    lessonData: LESSON_13_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-14',
    title: 'LEÇON 14 : LES PROBLÈMES D\'INTÉGRATION RÉGIONALE EN AFRIQUE',
    type: 'cours',
    badge: 'Partie III • Humain & Économie',
    description: "Nécessité de surmonter le morcellement colonial (54 États dont 16 enclavés), l'Union Africaine (UA), le modèle ouest-africain de la CEDEAO, la ZLECAF, et les obstacles au commerce intra-africain.",
    lessonData: LESSON_14_GEOGRAPHIE_4EME
  },

  // -----------------------------------------------------------------------
  // QUATRIÈME PARTIE : GÉOGRAPHIE RÉGIONALE ET ENVIRONNEMENT
  // -----------------------------------------------------------------------
  {
    id: 'geo-4eme-lecon-15',
    title: 'LEÇON 15 : ÉTUDE ÉCONOMIQUE D\'UNE RÉGION AFRICAINE – L\'AGRICULTURE',
    type: 'cours',
    badge: 'Partie IV • Économie Régionale',
    description: "Dualisme agricole entre cultures vivrières locales (mil, maïs, manioc, riz) et cultures de rente d'exportation (cacao n°1 en Côte d'Ivoire, arachide au Sénégal, coton), élevage pastoral et pêche maritime.",
    lessonData: LESSON_15_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-16',
    title: 'LEÇON 16 : ÉTUDE ÉCONOMIQUE D\'UNE RÉGION AFRICAINE – L\'INDUSTRIE ET LES RESSOURCES',
    type: 'cours',
    badge: 'Partie IV • Économie Régionale',
    description: "Scandale géologique des matières premières (pétrole du Nigeria, gaz et pétrole offshore de Sangomar/GTA au Sénégal, cobalt de RDC, bauxite de Guinée, or) et impératif de transformation locale.",
    lessonData: LESSON_16_GEOGRAPHIE_4EME
  },
  {
    id: 'geo-4eme-lecon-17',
    title: 'LEÇON 17 : IMPACT DE L\'HOMME SUR L\'ENVIRONNEMENT ET DÉVELOPPEMENT DURABLE',
    type: 'cours',
    badge: 'Partie IV • Environnement',
    description: "Déforestation pour bois de chauffe, désertification sahélienne, injustice climatique subie par l'Afrique, projet titanesque de la Grande Muraille Verte (Dakar à Djibouti), et essor des énergies solaires.",
    lessonData: LESSON_17_GEOGRAPHIE_4EME
  }
];
