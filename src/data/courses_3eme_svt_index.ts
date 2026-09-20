import { ContentData, LessonContent } from './courses';

export interface CourseTheme {
  id: string;
  name: string;
  description: string;
  lessons: LessonContent[];
}
import {
  LESSON_1_SVT_3EME,
  LESSON_2_SVT_3EME,
  LESSON_3_SVT_3EME,
  LESSON_4_SVT_3EME,
  LESSON_5_SVT_3EME,
  LESSON_6_SVT_3EME,
  LESSON_7_SVT_3EME
} from './courses_3eme_svt_part1';
import {
  LESSON_8_SVT_3EME,
  LESSON_9_SVT_3EME,
  LESSON_10_SVT_3EME,
  LESSON_11_SVT_3EME,
  LESSON_12_SVT_3EME,
  LESSON_13_SVT_3EME,
  LESSON_14_SVT_3EME
} from './courses_3eme_svt_part2';
import {
  LESSON_15_SVT_3EME,
  LESSON_16_SVT_3EME,
  LESSON_17_SVT_3EME
} from './courses_3eme_svt_part3';
import {
  LESSON_18_SVT_3EME,
  LESSON_19_SVT_3EME,
  LESSON_20_SVT_3EME,
  LESSON_21_SVT_3EME,
  LESSON_22_SVT_3EME
} from './courses_3eme_svt_part4';
import {
  LESSON_23_SVT_3EME,
  LESSON_24_SVT_3EME,
  LESSON_25_SVT_3EME,
  LESSON_26_SVT_3EME
} from './courses_3eme_svt_part5';

export {
  LESSON_1_SVT_3EME,
  LESSON_2_SVT_3EME,
  LESSON_3_SVT_3EME,
  LESSON_4_SVT_3EME,
  LESSON_5_SVT_3EME,
  LESSON_6_SVT_3EME,
  LESSON_7_SVT_3EME,
  LESSON_8_SVT_3EME,
  LESSON_9_SVT_3EME,
  LESSON_10_SVT_3EME,
  LESSON_11_SVT_3EME,
  LESSON_12_SVT_3EME,
  LESSON_13_SVT_3EME,
  LESSON_14_SVT_3EME,
  LESSON_15_SVT_3EME,
  LESSON_16_SVT_3EME,
  LESSON_17_SVT_3EME,
  LESSON_18_SVT_3EME,
  LESSON_19_SVT_3EME,
  LESSON_20_SVT_3EME,
  LESSON_21_SVT_3EME,
  LESSON_22_SVT_3EME,
  LESSON_23_SVT_3EME,
  LESSON_24_SVT_3EME,
  LESSON_25_SVT_3EME,
  LESSON_26_SVT_3EME
};

export const COURSES_3EME_SVT: LessonContent[] = [
  LESSON_1_SVT_3EME,
  LESSON_2_SVT_3EME,
  LESSON_3_SVT_3EME,
  LESSON_4_SVT_3EME,
  LESSON_5_SVT_3EME,
  LESSON_6_SVT_3EME,
  LESSON_7_SVT_3EME,
  LESSON_8_SVT_3EME,
  LESSON_9_SVT_3EME,
  LESSON_10_SVT_3EME,
  LESSON_11_SVT_3EME,
  LESSON_12_SVT_3EME,
  LESSON_13_SVT_3EME,
  LESSON_14_SVT_3EME,
  LESSON_15_SVT_3EME,
  LESSON_16_SVT_3EME,
  LESSON_17_SVT_3EME,
  LESSON_18_SVT_3EME,
  LESSON_19_SVT_3EME,
  LESSON_20_SVT_3EME,
  LESSON_21_SVT_3EME,
  LESSON_22_SVT_3EME,
  LESSON_23_SVT_3EME,
  LESSON_24_SVT_3EME,
  LESSON_25_SVT_3EME,
  LESSON_26_SVT_3EME
];

export const SVT_3EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '26' },
  { id: 'theme-1', label: 'Thème 1 : Système Nerveux & Motricité', count: '7' },
  { id: 'theme-2', label: 'Thème 2 : Microbes & Immunologie', count: '7' },
  { id: 'theme-3', label: 'Thème 3 : Grandes Endémies & IST', count: '3' },
  { id: 'theme-4', label: 'Thème 4 : Sciences de la Terre & Tectonique', count: '5' },
  { id: 'theme-5', label: 'Thème 5 : Nutrition & Digestion', count: '4' }
];

export const THEMES_3EME_SVT: CourseTheme[] = [
  {
    id: 'theme-1',
    name: 'Thème 1 : Système Nerveux & Motricité',
    description: 'Organisation nerveuse, anatomie et anomalies de la vision, réflexes médullaires, motricité volontaire et hygiène nerveuse et musculaire.',
    lessons: [
      LESSON_1_SVT_3EME,
      LESSON_2_SVT_3EME,
      LESSON_3_SVT_3EME,
      LESSON_4_SVT_3EME,
      LESSON_5_SVT_3EME,
      LESSON_6_SVT_3EME,
      LESSON_7_SVT_3EME
    ]
  },
  {
    id: 'theme-2',
    name: 'Thème 2 : Microbes & Immunologie',
    description: 'Bactéries, virus, barrières naturelles, immunité innée (phagocytose), immunité spécifique (LB/LT), allergies, SIDA et aides immunitaires.',
    lessons: [
      LESSON_8_SVT_3EME,
      LESSON_9_SVT_3EME,
      LESSON_10_SVT_3EME,
      LESSON_11_SVT_3EME,
      LESSON_12_SVT_3EME,
      LESSON_13_SVT_3EME,
      LESSON_14_SVT_3EME
    ]
  },
  {
    id: 'theme-3',
    name: 'Thème 3 : Grandes Endémies & IST',
    description: 'Cycle et prévention du paludisme (PNLP), tuberculose, tétanos tellurique et principales infections sexuellement transmissibles.',
    lessons: [
      LESSON_15_SVT_3EME,
      LESSON_16_SVT_3EME,
      LESSON_17_SVT_3EME
    ]
  },
  {
    id: 'theme-4',
    name: 'Thème 4 : Sciences de la Terre & Tectonique',
    description: 'Tectonique des plaques, volcanisme et séismes, métamorphisme, cycle perpétuel des roches et chronologie géologique.',
    lessons: [
      LESSON_18_SVT_3EME,
      LESSON_19_SVT_3EME,
      LESSON_20_SVT_3EME,
      LESSON_21_SVT_3EME,
      LESSON_22_SVT_3EME
    ]
  },
  {
    id: 'theme-5',
    name: 'Thème 5 : Nutrition & Digestion',
    description: 'Aliments simples et composés, digestion mécanique et enzymatique, surface d\'absorption intestinale, assimilation et ration équilibrée.',
    lessons: [
      LESSON_23_SVT_3EME,
      LESSON_24_SVT_3EME,
      LESSON_25_SVT_3EME,
      LESSON_26_SVT_3EME
    ]
  }
];

export const COURSES_SVT_3EME: ContentData[] = [
  // Thème 1 : Système Nerveux & Motricité
  {
    id: 'svt-3eme-lecon-1',
    title: 'LEÇON 1 : ORGANISATION GÉNÉRALE DU SYSTÈME NERVEUX',
    type: 'cours',
    badge: 'Thème 1 - Système Nerveux',
    description: 'Système nerveux central (encéphale et moelle épinière), système périphérique (nerfs crâniens et rachidiens), et structure du tissu nerveux.',
    lessonData: LESSON_1_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-2',
    title: 'LEÇON 2 : LE NEURONE ET LA TRANSMISSION SYNAPTIQUE',
    type: 'cours',
    badge: 'Thème 1 - Système Nerveux',
    description: 'Structure du neurone, potentiel d\'action, conduction saltatoire de l\'influx et transmission chimique au niveau de la synapse (neurotransmetteurs).',
    lessonData: LESSON_2_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-3',
    title: 'LEÇON 3 : ÉTUDE DE LA VISION ET DE L\'ŒIL HUMAIN',
    type: 'cours',
    badge: 'Thème 1 - Système Nerveux',
    description: 'Anatomie oculaire détaillée, formation des images rétiniennes, photorécepteurs et correction des anomalies de vision (myopie, hypermétropie, presbytie, astigmatisme).',
    lessonData: LESSON_3_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-4',
    title: 'LEÇON 4 : L\'ACTIVITÉ RÉFLEXE : LE RÉFLEXE MÉDULLAIRE',
    type: 'cours',
    badge: 'Thème 1 - Système Nerveux',
    description: 'Définition du réflexe inné protecteur, expériences historiques de Bell et Magendie, et les 5 organes du trajet de l\'arc réflexe médullaire.',
    lessonData: LESSON_4_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-5',
    title: 'LEÇON 5 : LA MOTRICITÉ VOLONTAIRE ET LES AIRES CÉRÉBRALES',
    type: 'cours',
    badge: 'Thème 1 - Système Nerveux',
    description: 'Cortex cérébral, aire motrice primaire, faisceau pyramidal et décussation bulbaire (commande croisée des hémisphères).',
    lessonData: LESSON_5_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-6',
    title: 'LEÇON 6 : HYGIÈNE DU SYSTÈME NERVEUX',
    type: 'cours',
    badge: 'Thème 1 - Système Nerveux',
    description: 'Facteurs de fatigue nerveuse, sommeil réparateur, effets dévastateurs de l\'alcool, du tabac et des drogues sur les récepteurs synaptiques.',
    lessonData: LESSON_6_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-7',
    title: 'LEÇON 7 : LE SYSTÈME MUSCULAIRE ET LE MOUVEMENT',
    type: 'cours',
    badge: 'Thème 1 - Système Nerveux',
    description: 'Muscles striés squelettiques, propriétés (excitabilité, contractilité, élasticité), muscles antagonistes et hygiène musculaire contre les accidents.',
    lessonData: LESSON_7_SVT_3EME
  },

  // Thème 2 : Microbes & Immunologie
  {
    id: 'svt-3eme-lecon-8',
    title: 'LEÇON 8 : LE MONDE DES MICROBES',
    type: 'cours',
    badge: 'Thème 2 - Immunologie',
    description: 'Bactéries procaryotes (bacilles, coques), virus parasites obligatoires, champignons microscopiques, microbes utiles et toxines bactériennes.',
    lessonData: LESSON_8_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-9',
    title: 'LEÇON 9 : BARRIÈRES NATURELLES, CONTAMINATION ET INFECTION',
    type: 'cours',
    badge: 'Thème 2 - Immunologie',
    description: 'Barrières mécaniques (peau, mucus), chimiques (pH acide, lysozyme) et biologiques ; voies de contamination, septicémie et toxinémie.',
    lessonData: LESSON_9_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-10',
    title: 'LEÇON 10 : L\'IMMUNITÉ NATURELLE OU NON SPÉCIFIQUE',
    type: 'cours',
    badge: 'Thème 2 - Immunologie',
    description: 'Réaction inflammatoire aiguë (rougeur, chaleur, gonflement, douleur), diapédèse et les 4 étapes de la phagocytose par les globules blancs.',
    lessonData: LESSON_10_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-11',
    title: 'LEÇON 11 : L\'IMMUNITÉ ACQUISE OU SPÉCIFIQUE',
    type: 'cours',
    badge: 'Thème 2 - Immunologie',
    description: 'Immunité humorale par anticorps (Lymphocytes B et plasmocytes) et immunité cellulaire par Lymphocytes T8 cytotoxiques (perforine) ; mémoire immunitaire.',
    lessonData: LESSON_11_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-12',
    title: 'LEÇON 12 : LES DYSFONCTIONNEMENTS IMMUNITAIRES : LES ALLERGIES',
    type: 'cours',
    badge: 'Thème 2 - Immunologie',
    description: 'Hypersensibilité immédiate médiée par les IgE, phase de sensibilisation et phase de déclenchement, libération d\'histamine et choc anaphylactique.',
    lessonData: LESSON_12_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-13',
    title: 'LEÇON 13 : LES AGRESSIONS DU SYSTÈME IMMUNITAIRE : LE VIH ET LE SIDA',
    type: 'cours',
    badge: 'Thème 2 - Immunologie',
    description: 'Structure du rétrovirus VIH, cycle de réplication et destruction des LT4 auxiliaires, phases cliniques, infections opportunistes et trithérapie ARV.',
    lessonData: LESSON_13_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-14',
    title: 'LEÇON 14 : LES AIDES À L\'IMMUNITÉ',
    type: 'cours',
    badge: 'Thème 2 - Immunologie',
    description: 'Vaccination active préventive vs Sérothérapie passive curative d\'urgence, découverte des antibiotiques, antibiogramme et antibiorésistance.',
    lessonData: LESSON_14_SVT_3EME
  },

  // Thème 3 : Grandes Endémies & IST
  {
    id: 'svt-3eme-lecon-15',
    title: 'LEÇON 15 : LE PALUDISME (OU MALARIA)',
    type: 'cours',
    badge: 'Thème 3 - Endémies & IST',
    description: 'Plasmodium falciparum et anophèle femelle vectrice, cycle chez l\'Homme et le moustique, triade de l\'accès palustre, neuropaludisme et moustiquaires MILDA.',
    lessonData: LESSON_15_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-16',
    title: 'LEÇON 16 : LA TUBERCULOSE ET LE TÉTANOS',
    type: 'cours',
    badge: 'Thème 3 - Endémies & IST',
    description: 'Bacille de Koch à contagion aérienne vs Bacille tétanique tellurique anaérobie (tétanospasmine, trismus), vaccins BCG et antitétanique du PEV.',
    lessonData: LESSON_16_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-17',
    title: 'LEÇON 17 : LES PRINCIPALES INFECTIONS SEXUELLEMENT TRANSMISSIBLES (IST)',
    type: 'cours',
    badge: 'Thème 3 - Endémies & IST',
    description: 'Gonococcie, syphilis, chlamydiose, papillomavirus et hépatite B : symptômes, complications (stérilité), prévention par préservatif et traitement du couple.',
    lessonData: LESSON_17_SVT_3EME
  },

  // Thème 4 : Sciences de la Terre & Tectonique
  {
    id: 'svt-3eme-lecon-18',
    title: 'LEÇON 18 : LA TECTONIQUE DES PLAQUES',
    type: 'cours',
    badge: 'Thème 4 - Géodynamique',
    description: 'Arguments de Wegener sur la dérive des continents, lithosphère sur asthénosphère, dorsales divergentes, subduction, collision orogénique et convection mantellique.',
    lessonData: LESSON_18_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-19',
    title: 'LEÇON 19 : LE VOLCANISME ET LES SÉISMES',
    type: 'cours',
    badge: 'Thème 4 - Géodynamique',
    description: 'Rupture au foyer et ondes sismiques (P, S), épicentre et magnitude de Richter ; volcans rouges effusifs vs volcans gris explosifs à nuées ardentes.',
    lessonData: LESSON_19_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-20',
    title: 'LEÇON 20 : LA FORMATION DES ROCHES MÉTAMORPHIQUES',
    type: 'cours',
    badge: 'Thème 4 - Géodynamique',
    description: 'Transformations à l\'état solide sous pression et température, schistosité, foliation du gneiss, métamorphisme de contact et série métamorphique de l\'argile.',
    lessonData: LESSON_20_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-21',
    title: 'LEÇON 21 : LE CYCLE DES ROCHES',
    type: 'cours',
    badge: 'Thème 4 - Géodynamique',
    description: 'Interactions perpétuelles entre roches magmatiques, sédimentaires et métamorphiques par altération, transport, diagenèse, enfouissement et anatexie.',
    lessonData: LESSON_21_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-22',
    title: 'LEÇON 22 : LA CHRONOLOGIE EN GÉOLOGIE',
    type: 'cours',
    badge: 'Thème 4 - Géodynamique',
    description: 'Chronologie relative (principes de superposition, recoupement, continuité et fossiles repères) et chronologie absolue radiochronologique (Carbone 14, Potassium-Argon).',
    lessonData: LESSON_22_SVT_3EME
  },

  // Thème 5 : Nutrition & Digestion
  {
    id: 'svt-3eme-lecon-23',
    title: 'LEÇON 23 : LES ALIMENTS ET LES BESOINS NUTRITIONNELS DE L\'HOMME',
    type: 'cours',
    badge: 'Thème 5 - Nutrition & Digestion',
    description: 'Mise en évidence chimique des aliments simples (eau iodée, liqueur de Fehling, Biuret), rôles énergétique, bâtisseur et protecteur, et métabolisme de base.',
    lessonData: LESSON_23_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-24',
    title: 'LEÇON 24 : LA DIGESTION DES ALIMENTS DANS LE TUBE DIGESTIF',
    type: 'cours',
    badge: 'Thème 5 - Nutrition & Digestion',
    description: 'Anatomie du tube digestif et glandes annexes, découpe enzymatique séquentielle de l\'amidon, des protéines et des lipides jusqu\'aux nutriments solubles.',
    lessonData: LESSON_24_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-25',
    title: 'LEÇON 25 : L\'ABSORPTION INTESTINALE DES NUTRIMENTS',
    type: 'cours',
    badge: 'Thème 5 - Nutrition & Digestion',
    description: 'Structure des villosités et microvillosités (300 m² de surface), voie sanguine vers le foie et voie lymphatique par le chylifère central.',
    lessonData: LESSON_25_SVT_3EME
  },
  {
    id: 'svt-3eme-lecon-26',
    title: 'LEÇON 26 : L\'UTILISATION DES NUTRIMENTS ET L\'HYGIÈNE ALIMENTAIRE',
    type: 'cours',
    badge: 'Thème 5 - Nutrition & Digestion',
    description: 'Oxydation respiratoire et synthèses protéiques, élimination de l\'urée et du CO2, ration alimentaire équilibrée et maladies de carence (kwashiorkor, marasme, anémie).',
    lessonData: LESSON_26_SVT_3EME
  }
];
