// =========================================================================
// INDEX CENTRAL DES COURS DE GÉOGRAPHIE CLASSE DE TERMINALE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 17 leçons exhaustives sans résumé, grands axes et méthodologie du Baccalauréat
// =========================================================================

import { ContentData, LessonContent } from './courses';

import {
  LESSON_1_GEOGRAPHIE_TLE,
  LESSON_2_GEOGRAPHIE_TLE,
  LESSON_3_GEOGRAPHIE_TLE
} from './courses_tle_geographie_part1';

import {
  LESSON_4_GEOGRAPHIE_TLE,
  LESSON_5_GEOGRAPHIE_TLE,
  LESSON_6_GEOGRAPHIE_TLE,
  LESSON_7_GEOGRAPHIE_TLE
} from './courses_tle_geographie_part2';

import {
  LESSON_8_GEOGRAPHIE_TLE,
  LESSON_9_GEOGRAPHIE_TLE,
  LESSON_10_GEOGRAPHIE_TLE
} from './courses_tle_geographie_part3';

import {
  LESSON_11_GEOGRAPHIE_TLE,
  LESSON_12_GEOGRAPHIE_TLE,
  LESSON_13_GEOGRAPHIE_TLE,
  LESSON_14_GEOGRAPHIE_TLE,
  LESSON_15_GEOGRAPHIE_TLE
} from './courses_tle_geographie_part4';

import {
  LESSON_16_GEOGRAPHIE_TLE,
  LESSON_17_GEOGRAPHIE_TLE
} from './courses_tle_geographie_part5';

export {
  LESSON_1_GEOGRAPHIE_TLE, LESSON_2_GEOGRAPHIE_TLE, LESSON_3_GEOGRAPHIE_TLE,
  LESSON_4_GEOGRAPHIE_TLE, LESSON_5_GEOGRAPHIE_TLE, LESSON_6_GEOGRAPHIE_TLE, LESSON_7_GEOGRAPHIE_TLE,
  LESSON_8_GEOGRAPHIE_TLE, LESSON_9_GEOGRAPHIE_TLE, LESSON_10_GEOGRAPHIE_TLE,
  LESSON_11_GEOGRAPHIE_TLE, LESSON_12_GEOGRAPHIE_TLE, LESSON_13_GEOGRAPHIE_TLE, LESSON_14_GEOGRAPHIE_TLE, LESSON_15_GEOGRAPHIE_TLE,
  LESSON_16_GEOGRAPHIE_TLE, LESSON_17_GEOGRAPHIE_TLE
};

export const GEOGRAPHIE_TLE_PARTS = [
  { id: "all", label: "Toutes les leçons (17 chapitres du Bac)", count: "17" },
  { id: "part-1", label: "Partie I • Mondialisation & Disparités de développement (L1-L3)", count: "3" },
  { id: "part-2", label: "Partie II • Les grandes puissances : USA, UE, Asie & Brésil (L4-L10)", count: "7" },
  { id: "part-3", label: "Partie III • L'Afrique, la CEDEAO & Le Sénégal contemporain (L11-L15)", count: "5" },
  { id: "part-4", label: "Partie IV • Méthodologie experte des épreuves du Bac (L16-L17)", count: "2" }
];

export const COURSES_GEOGRAPHIE_TLE: ContentData[] = [
  // --- PREMIÈRE PARTIE : LA MONDIALISATION ET LES DISPARITÉS DE DÉVELOPPEMENT (LEÇONS 1 À 3) ---
  {
    id: "geo-tle-cours-1",
    title: "LEÇON 1 : LA MONDIALISATION : PROCESSUS, ACTEURS, FLUX ET DÉBATS",
    type: "cours",
    badge: "Partie I • Mondialisation & Disparités",
    description: "Système-monde contemporain, maritimisation par les conteneurs, FTN, FMI, OMC, Banque Mondiale, flux de marchandises, capitaux et migrations, et critiques altermondialistes.",
    lessonData: LESSON_1_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-2",
    title: "LEÇON 2 : LES DISPARITÉS DE DÉVELOPPEMENT DANS LE MONDE : LA LIMITE NORD-SUD ET LES DIVERSITÉS",
    type: "cours",
    badge: "Partie I • Mondialisation & Disparités",
    description: "Mesure du développement (PIB, IDH, IPM, Gini), pertinence et éclatement de la ligne Brandt, émergence des BRICS, pays pétroliers rentiers, PMA et fractures sociales au Nord.",
    lessonData: LESSON_2_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-3",
    title: "LEÇON 3 : LA COOPÉRATION INTERNATIONALE : AIDE AU DÉVELOPPEMENT, RELATIONS NORD-SUD ET COOPÉRATION SUD-SUD",
    type: "cours",
    badge: "Partie I • Mondialisation & Disparités",
    description: "Aide Publique au Développement (APD du CAD/OCDE), accords UE-ACP (Lomé, Cotonou, APE), fardeau de la dette et essor spectaculaire de la coopération Sud-Sud (Chine, Turquie, ZLECAf).",
    lessonData: LESSON_3_GEOGRAPHIE_TLE
  },

  // --- DEUXIÈME PARTIE : LES GRANDES PUISSANCES ÉCONOMIQUES MONDIALES (LEÇONS 4 À 10) ---
  {
    id: "geo-tle-cours-4",
    title: "LEÇON 4 : LES ÉTATS-UNIS D’AMÉRIQUE : LA PREMIÈRE PUISSANCE ÉCONOMIQUE MONDIALE",
    type: "cours",
    badge: "Partie II • Les Grandes Puissances",
    description: "Territoire-continent de 9,8 millions de km², démographie et Brain Drain, agrobusiness, puissance technologique des GAFAM et Silicon Valley, Wall Street et soft power mondial.",
    lessonData: LESSON_4_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-5",
    title: "LEÇON 5 : LES LIMITES ET VULNÉRABILITÉS DE LA PUISSANCE DES ÉTATS-UNIS",
    type: "cours",
    badge: "Partie II • Les Grandes Puissances",
    description: "Désindustrialisation de la Rust Belt (faillite de Détroit), déficits jumeaux chroniques, mur de la dette publique (> 34 000 milliards $), fractures raciales, crise des opioïdes et monde multipolaire.",
    lessonData: LESSON_5_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-6",
    title: "LEÇON 6 : L’UNION EUROPÉENNE : UNE GRANDE PUISSANCE ÉCONOMIQUE ET COMMERCIALE",
    type: "cours",
    badge: "Partie II • Les Grandes Puissances",
    description: "Construction communautaire de la CECA au marché unique de 450 millions d'habitants, géant agroalimentaire de la PAC, Airbus, automobile, Euro et premier pôle commercial mondial (Northern Range).",
    lessonData: LESSON_6_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-7",
    title: "LEÇON 7 : LES FAIBLESSES ET LES DÉFIS DE L’UNION EUROPÉENNE",
    type: "cours",
    badge: "Partie II • Les Grandes Puissances",
    description: "Hiver démographique (fécondité 1,5), disparités Est/Ouest, dumping fiscal et social, dépendance énergétique extérieure (gaz russe), choc du Brexit et 'nain militaire' dépendant de l'OTAN.",
    lessonData: LESSON_7_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-8",
    title: "LEÇON 8 : LE JAPON : UNE PUISSANCE ASIATIQUE ORIGINALE ET SES LIMITES",
    type: "cours",
    badge: "Partie II • Les Grandes Puissances",
    description: "Contraintes d'un archipel volcanique et sismique, conglomérats Keiretsu, toyotisme et qualité totale, Mégalopole Tokaido (Tokyo-Nagoya-Osaka), vieillissement record et dette publique à 260% du PIB.",
    lessonData: LESSON_8_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-9",
    title: "LEÇON 9 : LA CHINE : L’ÉMERGENCE D’UNE NOUVELLE SUPERPUISSANCE MONDIALE",
    type: "cours",
    badge: "Partie II • Les Grandes Puissances",
    description: "Socialisme de marché de Deng Xiaoping, ZES littorales (Shenzhen, Shanghai), atelier du monde, géants BATX et voitures électriques (BYD), Nouvelles Routes de la Soie et défis démographiques des Mingong.",
    lessonData: LESSON_9_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-10",
    title: "LEÇON 10 : LE BRÉSIL : GÉANT ÉCONOMIQUE ÉMERGENT D’AMÉRIQUE LATINE ET FRACTURES SOCIALES",
    type: "cours",
    badge: "Partie II • Les Grandes Puissances",
    description: "Géant territorial (8,5M km²) et agricole mondial (soja, viande, café), industrie Embraer et pétrole offshore, cœur économique du Sudeste (São Paulo, Rio), favelas et déforestation en Amazonie.",
    lessonData: LESSON_10_GEOGRAPHIE_TLE
  },

  // --- TROISIÈME PARTIE : L'AFRIQUE, LA CEDEAO ET LE SÉNÉGAL (LEÇONS 11 À 15) ---
  {
    id: "geo-tle-cours-11",
    title: "LEÇON 11 : L’AFRIQUE DANS LA MONDIALISATION : UN CONTINENT CONVOITÉ AUX MARGES DE L’ÉCONOMIE GLOBALE",
    type: "cours",
    badge: "Partie III • Afrique & Sénégal",
    description: "30% des réserves minérales mondiales (cobalt, coltan, bauxite, pétrole), dividende démographique de 1,4 milliard d'habitants, échange inégal et spécialisation primaire, convoitises sino-occidentales et ZLECAf.",
    lessonData: LESSON_11_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-12",
    title: "LEÇON 12 : L’INTÉGRATION RÉGIONALE EN AFRIQUE DE L’OUEST : LA CEDEAO ET L’UEMOA",
    type: "cours",
    badge: "Partie III • Afrique & Sénégal",
    description: "Traité de Lagos (CEDEAO) et traité de Dakar (UEMOA), libre circulation sans visa et passeport biométrique, TEC, projet monétaire de l'ECO face aux coups d'État au Sahel et à l'AES.",
    lessonData: LESSON_12_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-13",
    title: "LEÇON 13 : LE SÉNÉGAL : ATOUTS NATURELS, POSITION GÉOSTRATÉGIQUE ET DYNAMIQUE DÉMOGRAPHIQUE",
    type: "cours",
    badge: "Partie III • Afrique & Sénégal",
    description: "Position de carrefour atlantique à la pointe des Almadies (718 km de côtes), réseau hydrographique (fleuves Sénégal, Gambie, Casamance), recensement RGPH-5 de 2023 (18,1M habitants) et littoralisation Dakar-Thiès.",
    lessonData: LESSON_13_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-14",
    title: "LEÇON 14 : LES SECTEURS ÉCONOMIQUES DU SÉNÉGAL : AGRICULTURE, PÊCHE, MINES, PÉTROLE ET SERVICES",
    type: "cours",
    badge: "Partie III • Afrique & Sénégal",
    description: "Bassin arachidier, riziculture de la vallée, maraîchage des Niayes, crise de la pêche artisanale, phosphates et cimenteries, tournant pétrolier et gazier de 2024 (Sangomar, GTA), et tertiaire informel et numérique.",
    lessonData: LESSON_14_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-15",
    title: "LEÇON 15 : DISPARITÉS RÉGIONALES ET AMÉNAGEMENT DU TERRITOIRE AU SÉNÉGAL",
    type: "cours",
    badge: "Partie III • Afrique & Sénégal",
    description: "Macrocéphalie dakaroise écrasante (23% pop et 80% des entreprises sur 0,28% du territoire), enclavement des régions de l'Est et du Sud, Acte III de la décentralisation, PUDC, Diamniadio, TER, BRT et port de Ndayane.",
    lessonData: LESSON_15_GEOGRAPHIE_TLE
  },

  // --- QUATRIÈME PARTIE : MÉTHODOLOGIE EXPERTE DES ÉPREUVES DU BACCALAURÉAT (LEÇONS 16 ET 17) ---
  {
    id: "geo-tle-cours-16",
    title: "LEÇON 16 : MÉTHODOLOGIE EXPERTE DE LA DISSERTATION GÉOGRAPHIQUE AU BACCALAURÉAT",
    type: "cours",
    badge: "Partie IV • Méthodologie du Bac",
    description: "Démarche opératoire normée pour l'examen : décryptage du sujet au brouillon, formulation de la problématique spatiale, typologie des plans (thématique, comparatif, dialectique), introduction tripartite et conclusion prospective.",
    lessonData: LESSON_16_GEOGRAPHIE_TLE
  },
  {
    id: "geo-tle-cours-17",
    title: "LEÇON 17 : MÉTHODOLOGIE DU COMMENTAIRE DE DOCUMENTS GÉOGRAPHIQUES AU BACCALAURÉAT",
    type: "cours",
    badge: "Partie IV • Méthodologie du Bac",
    description: "Méthode rigoureuse de traitement documentaire : présentation canonique, formules de calculs obligatoires (taux de variation, soldes, ratios), construction graphique selon la règle TOLE et explication critique.",
    lessonData: LESSON_17_GEOGRAPHIE_TLE
  }
];
