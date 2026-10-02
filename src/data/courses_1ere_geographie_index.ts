import {
  LESSON_1_GEO_1ERE,
  LESSON_2_GEO_1ERE,
  LESSON_3_GEO_1ERE,
  LESSON_4_GEO_1ERE,
  LESSON_5_GEO_1ERE,
  LESSON_6_GEO_1ERE
} from './courses_1ere_geographie_part1';

import {
  LESSON_7_GEO_1ERE,
  LESSON_8_GEO_1ERE,
  LESSON_9_GEO_1ERE,
  LESSON_10_GEO_1ERE,
  LESSON_11_GEO_1ERE,
  LESSON_12_GEO_1ERE
} from './courses_1ere_geographie_part2';

import {
  LESSON_13_GEO_1ERE,
  LESSON_14_GEO_1ERE,
  LESSON_15_GEO_1ERE,
  LESSON_16_GEO_1ERE,
  LESSON_17_GEO_1ERE,
  LESSON_18_GEO_1ERE
} from './courses_1ere_geographie_part3';

import {
  LESSON_19_GEO_1ERE,
  LESSON_20_GEO_1ERE,
  LESSON_21_GEO_1ERE,
  LESSON_22_GEO_1ERE,
  LESSON_23_GEO_1ERE
} from './courses_1ere_geographie_part4';

export interface ContentItem {
  id: string;
  title: string;
  type: 'cours' | 'ressource';
  badge?: string;
  description: string;
  content?: string;
  link?: string;
  lessonData?: any;
}

export const COURSES_GEOGRAPHIE_1ERE: ContentItem[] = [
  // INTRODUCTION
  {
    id: 'geo-1ere-lecon-1',
    title: 'LEÇON 1 : LES INÉGALITÉS DE DÉVELOPPEMENT DANS LE MONDE',
    type: 'cours',
    badge: 'Introduction • Indicateurs & Fractures',
    description: 'Notions fondamentales, indicateurs composites (PIB, IDH, IPM), fractures Nord-Sud, pays émergents, disparités régionales et facteurs explicatifs du développement.',
    lessonData: LESSON_1_GEO_1ERE
  },

  // PREMIÈRE PARTIE : LA POPULATION MONDIALE
  {
    id: 'geo-1ere-lecon-2',
    title: 'LEÇON 2 : LA POPULATION : GROUPES HUMAINS, LANGUES ET RELIGIONS',
    type: 'cours',
    badge: 'Partie 1 • Diversité socioculturelle',
    description: 'Diversité anthropologique et culturelle, classification des familles de langues, foyers et diffusion des grandes religions, et modèle de cohésion sociale au Sénégal.',
    lessonData: LESSON_2_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-3',
    title: 'LEÇON 3 : L’ACCROISSEMENT DE LA POPULATION MONDIALE ET LES POLITIQUES DÉMOGRAPHIQUES',
    type: 'cours',
    badge: 'Partie 1 • Transition démographique',
    description: 'Équation démographique, phases de la transition démographique, contrastes Nord-Sud de fécondité, politiques antinatalistes et pronatalistes, et dividende démographique africain.',
    lessonData: LESSON_3_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-4',
    title: 'LEÇON 4 : LES MIGRATIONS',
    type: 'cours',
    badge: 'Partie 1 • Mobilités planétaires',
    description: 'Typologie des flux migratoires, facteurs répulsifs (Push) et attractifs (Pull), grands pôles mondiaux, transferts financiers, fuite des cerveaux et dynamiques ouest-africaines.',
    lessonData: LESSON_4_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-5',
    title: 'LEÇON 5 : LES STRUCTURES DE LA POPULATION MONDIALE',
    type: 'cours',
    badge: 'Partie 1 • Pyramides & Secteurs',
    description: 'Structure par âge et par sexe, typologie morphologique des pyramides des âges, structure socioprofessionnelle, répartition sectorielle et loi de Clark-Fisher.',
    lessonData: LESSON_5_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-6',
    title: 'LEÇON 6 : TP : CONSTRUCTION ET COMMENTAIRE DE PYRAMIDES DES ÂGES ET DIAGRAMMES TRIANGULAIRES',
    type: 'cours',
    badge: 'Partie 1 • Travaux Pratiques Méthode',
    description: 'Guide méthodologique pratique : construction pas-à-pas de pyramides des âges, grille de commentaire géométrique et historique, et lecture/tracé du diagramme triangulaire sectoriel.',
    lessonData: LESSON_6_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-7',
    title: 'LEÇON 7 : LA RÉPARTITION DE LA POPULATION MONDIALE',
    type: 'cours',
    badge: 'Partie 1 • Foyers & Vides humains',
    description: 'Inégale distribution planétaire, foyers majeurs (Asie orientale, Asie du Sud, Europe), déserts humains, facteurs physiques, historiques, économiques et littoralisation.',
    lessonData: LESSON_7_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-8',
    title: 'LEÇON 8 : TP : CALCUL ET CARTE DES DENSITÉS DE POPULATION',
    type: 'cours',
    badge: 'Partie 1 • TP Cartographie Choroplèthe',
    description: 'Calculs de densités (brute, physiologique, agricole), méthode de discrétisation cartographique, seuils de classes et analyse spatiale comparée des 14 régions du Sénégal.',
    lessonData: LESSON_8_GEO_1ERE
  },

  // DEUXIÈME PARTIE : POPULATION ET ACTIVITÉS EN MILIEU RURAL
  {
    id: 'geo-1ere-lecon-9',
    title: 'LEÇON 9 : LES FORMES TRADITIONNELLES DE MISE EN VALEUR AGRICOLE DANS LES PAYS TROPICAUX',
    type: 'cours',
    badge: 'Partie 2 • Terroirs traditionnels',
    description: 'Contraintes bioclimatiques tropicales, agriculture itinérante sur brûlis, culture sédentaire de savane, terroir sereer et riziculture inondée traditionnelle en Casamance.',
    lessonData: LESSON_9_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-10',
    title: 'LEÇON 10 : LES CULTURES COMMERCIALES DANS LES PAYS TROPICAUX',
    type: 'cours',
    badge: 'Partie 2 • Filières d\'exportation',
    description: 'Économie de traite, grandes filières tropicales (arachide, coton, cacao, café, palmier à huile), agro-industrie, dépendance aux marchés mondiaux et filières sénégalaises.',
    lessonData: LESSON_10_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-11',
    title: 'LEÇON 11 : LES MUTATIONS RÉCENTES DE LA MISE EN VALEUR AGRICOLE DANS LES PAYS TROPICAUX',
    type: 'cours',
    badge: 'Partie 2 • Hydro-agricole & Agrobusiness',
    description: 'Facteurs de mutation, aménagements hydro-agricoles irrigués (Vallée du fleuve Sénégal, SAED), maraîchage intensif des Niayes, agrobusiness moderne et défis fonciers.',
    lessonData: LESSON_11_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-12',
    title: 'LEÇON 12 : L’ÉVOLUTION DES FORMES DE MISE EN VALEUR AGRICOLE EN EUROPE',
    type: 'cours',
    badge: 'Partie 2 • Révolution PAC & Bio',
    description: 'Révolution agricole européenne, Politique Agricole Commune (PAC productiviste puis durable), spécialisations régionales, complexe agro-industriel et transition agro-écologique.',
    lessonData: LESSON_12_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-13',
    title: 'LEÇON 13 : LES FORMES MODERNES DE MISE EN VALEUR AGRICOLE DANS LES PAYS NEUFS',
    type: 'cours',
    badge: 'Partie 2 • Gigantisme & Belts',
    description: 'Notion de pays neufs (USA, Canada, Australie, Brésil, Argentine), gigantisme des exploitations, agro-business américain, ceintures agricoles (belts), chaîne logistique mondiale et limites écologiques.',
    lessonData: LESSON_13_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-14',
    title: 'LEÇON 14 : LA PÊCHE : FORMES TRADITIONNELLE ET MODERNE',
    type: 'cours',
    badge: 'Partie 2 • Halieutique & Pirogues',
    description: 'Ressources halieutiques mondiales, facteurs biologiques (upwelling), pêche artisanale vs industrielle, chaîne de valeur littorale, et rôle stratégique de la pêche au Sénégal.',
    lessonData: LESSON_14_GEO_1ERE
  },

  // TROISIÈME PARTIE : POPULATION ET ACTIVITÉS EN MILIEU URBAIN
  {
    id: 'geo-1ere-lecon-15',
    title: 'LEÇON 15 : LA VILLE : DÉFINITION ET FONCTIONS',
    type: 'cours',
    badge: 'Partie 3 • Fonctions & Morphologie',
    description: 'Définition géographique et statistique de la ville, morphologie urbaine, typologie des fonctions urbaines (politique, marchande, financière, culturelle), rayonnement et primauté dakaroise.',
    lessonData: LESSON_15_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-16',
    title: 'LEÇON 16 : DIVERSITÉ DES PROCESSUS ET DES FORMES D’URBANISATION DANS LE MONDE',
    type: 'cours',
    badge: 'Partie 3 • Mégapoles & Étalement',
    description: 'Explosion urbaine mondiale, transition urbaine, mégapoles et mégalopolis, étalement urbain (sprawl), périurbanisation et contrastes Nord-Sud d’urbanisation.',
    lessonData: LESSON_16_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-17',
    title: 'LEÇON 17 : LES ACTIVITÉS URBAINES : L’INDUSTRIE ET SES MUTATIONS',
    type: 'cours',
    badge: 'Partie 3 • Industrie & Parcs d\'activités',
    description: 'Facteurs de localisation industrielle en ville, mutations contemporaines (automatisation, délocalisation, DIT), recomposition spatiale (friches centrales, parcs périphériques) et tissu industriel sénégalais.',
    lessonData: LESSON_17_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-18',
    title: 'LEÇON 18 : LES ACTIVITÉS URBAINES : COMMERCE, SERVICES ET MUTATIONS',
    type: 'cours',
    badge: 'Partie 3 • Tertiaire & Mobile Money',
    description: 'Tertiarisation métropolitaine, services supérieurs et rares, révolution commerciale (malls, e-commerce, logistique), dualité formel / informel dans les villes du Sud et modèle dakaroise.',
    lessonData: LESSON_18_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-19',
    title: 'LEÇON 19 : LA DYNAMIQUE URBAINE ET LES PROBLÈMES DES VILLES',
    type: 'cours',
    badge: 'Partie 3 • Crises & Aménagement durable',
    description: 'Déficit d\'infrastructures, crise du logement et habitat spontané, congestion de la mobilité, risques environnementaux (inondations, déchets) et aménagement urbain durable (TER, BRT, Diamniadio).',
    lessonData: LESSON_19_GEO_1ERE
  },

  // QUATRIÈME PARTIE : POPULATION ET VIE DE RELATION & CONCLUSION
  {
    id: 'geo-1ere-lecon-20',
    title: 'LEÇON 20 : LES MOYENS DE COMMUNICATION : TRANSPORTS ET TÉLÉCOMMUNICATIONS',
    type: 'cours',
    badge: 'Partie 4 • Réseaux & Câbles sous-marins',
    description: 'Réseaux de transport (maritime, aérien, ferroviaire, routier), révolution de la conteneurisation, télécommunications et câbles sous-marins, concepts de nœud et d’enclavement, et hub logistique sénégalais.',
    lessonData: LESSON_20_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-21',
    title: 'LEÇON 21 : LES TECHNIQUES D’ÉCHANGES : TROC ET MONNAIE, BOURSE DE VALEURS',
    type: 'cours',
    badge: 'Partie 4 • Monnaie & Bourses',
    description: 'Évolution historique des échanges, du troc aux monnaies métalliques et papier, les 3 fonctions de la monnaie, bourses de valeurs mobilières et intégration monétaire UEMOA (BCEAO, Franc CFA, BRVM).',
    lessonData: LESSON_21_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-22',
    title: 'LEÇON 22 : L’ORGANISATION DU COMMERCE MONDIAL ET L’ÉCHANGE INÉGAL',
    type: 'cours',
    badge: 'Partie 4 • Commerce & Échange inégal',
    description: 'Mondialisation des échanges, triade économique, acteurs du commerce (OMC, FTN), théorie et mécanismes de l’échange inégal, détérioration des termes de l’échange et stratégies de dépassement.',
    lessonData: LESSON_22_GEO_1ERE
  },
  {
    id: 'geo-1ere-lecon-23',
    title: 'LEÇON 23 : LES ESPACES D’INTÉGRATION ÉCONOMIQUE : PROBLÉMATIQUE ET ORGANISATION',
    type: 'cours',
    badge: 'Conclusion • Balassa & ZLECAf',
    description: 'Théorie de l’intégration régionale (les 5 étapes de Balassa), modèles comparés (Union Européenne, CEDEAO, UEMOA), acquis, obstacles structurels et dynamique de la ZLECAf.',
    lessonData: LESSON_23_GEO_1ERE
  },

  // RESSOURCES MÉTHODOLOGIQUES ET EXERCICES TYPES
  {
    id: 'res-geo-1ere-1',
    title: 'Fiche méthodologique : Construction et commentaire de graphiques et croquis géographiques',
    type: 'ressource',
    badge: 'Méthode & Savoir-faire',
    description: 'Guide complet pour l\'épreuve de géographie au Bac : règles de construction d\'une courbe, d\'un histogramme, d\'une pyramide des âges, calculs des densités et réalisation de croquis de synthèse.',
    link: '#'
  },
  {
    id: 'res-geo-1ere-2',
    title: 'Recueil de sujets types et annales corrigées de Géographie Première',
    type: 'ressource',
    badge: 'Sujets corrigés de Bac',
    description: 'Dissertations guidées et commentaires de documents statistiques sur les disparités de développement, les transitions démographiques, les filières agricoles et l\'intégration régionale.',
    link: '#'
  }
];

export const GEOGRAPHIE_1ERE_FILTER_PARTS = [
  { id: 'all', label: 'Toutes les leçons (23)', count: 23 },
  { id: 'intro', label: 'Introduction : Développement (Leçon 1)', count: 1 },
  { id: 'part-1', label: 'Partie 1 : Population mondiale (Leçons 2 à 8)', count: 7 },
  { id: 'part-2', label: 'Partie 2 : Activités rurales (Leçons 9 à 14)', count: 6 },
  { id: 'part-3', label: 'Partie 3 : Activités urbaines (Leçons 15 à 19)', count: 5 },
  { id: 'part-4', label: 'Partie 4 & Conclusion : Vie de relation (Leçons 20 à 23)', count: 4 }
];
