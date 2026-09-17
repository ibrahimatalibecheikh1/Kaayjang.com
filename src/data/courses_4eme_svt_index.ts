import { ContentData } from './courses';
import {
  LESSON_1_SVT_4EME,
  LESSON_2_SVT_4EME,
  LESSON_3_SVT_4EME,
  LESSON_4_SVT_4EME,
  LESSON_5_SVT_4EME
} from './courses_4eme_svt_part1';
import {
  LESSON_6_SVT_4EME,
  LESSON_7_SVT_4EME,
  LESSON_8_SVT_4EME,
  LESSON_9_SVT_4EME,
  LESSON_10_SVT_4EME
} from './courses_4eme_svt_part2';
import {
  LESSON_11_SVT_4EME,
  LESSON_12_SVT_4EME,
  LESSON_13_SVT_4EME,
  LESSON_14_SVT_4EME,
  LESSON_15_SVT_4EME
} from './courses_4eme_svt_part3';

export {
  LESSON_1_SVT_4EME,
  LESSON_2_SVT_4EME,
  LESSON_3_SVT_4EME,
  LESSON_4_SVT_4EME,
  LESSON_5_SVT_4EME,
  LESSON_6_SVT_4EME,
  LESSON_7_SVT_4EME,
  LESSON_8_SVT_4EME,
  LESSON_9_SVT_4EME,
  LESSON_10_SVT_4EME,
  LESSON_11_SVT_4EME,
  LESSON_12_SVT_4EME,
  LESSON_13_SVT_4EME,
  LESSON_14_SVT_4EME,
  LESSON_15_SVT_4EME
};

export const SVT_4EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '15' },
  { id: 'theme-1', label: 'Thème 1 : Ressources & Biologie humaine', count: '5' },
  { id: 'theme-2', label: 'Thème 2 : Reproduction humaine & Sols', count: '5' },
  { id: 'theme-3', label: 'Thème 3 : Géologie & Dynamique de la Terre', count: '5' }
];

export const COURSES_SVT_4EME: ContentData[] = [
  // =========================================================================
  // THÈME 1 : GESTION DES RESSOURCES NATURELLES & BIOLOGIE HUMAINE (Leçons 1 à 5)
  // =========================================================================
  {
    id: 'svt-4eme-lecon-1',
    title: 'LEÇON 1 : LES RESSOURCES NATURELLES ET LEUR GESTION DURABLE',
    type: 'cours',
    badge: 'Thème 1 - Cours intégral',
    description: 'Ressources renouvelables (eau, forêt, faune) et non renouvelables (minerais, fossiles), impacts de la surexploitation et stratégies de développement durable.',
    lessonData: LESSON_1_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-2',
    title: 'LEÇON 2 : DIGESTION ET ABSORPTION INTESTINALE CHEZ L\'ESPÈCE HUMAINE',
    type: 'cours',
    badge: 'Thème 1 - Cours intégral',
    description: 'Anatomie du tube digestif, transformations mécaniques, action des enzymes digestives et mécanisme d\'absorption au niveau des villosités intestinales.',
    lessonData: LESSON_2_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-3',
    title: 'LEÇON 3 : LE SANG : COMPOSITION ET MALADIES',
    type: 'cours',
    badge: 'Thème 1 - Cours intégral',
    description: 'Plasma et éléments figurés (hématies, leucocytes, plaquettes), transport des gaz et nutriments, et pathologies majeures (anémie, drépanocytose, leucémie, hémophilie).',
    lessonData: LESSON_3_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-4',
    title: 'LEÇON 4 : LA CIRCULATION ET LE RÔLE DU SANG',
    type: 'cours',
    badge: 'Thème 1 - Cours intégral',
    description: 'Vaisseaux sanguins (artères, veines, capillaires), anatomie du cœur, automatisme cardiaque et schéma complet de la double circulation sanguine.',
    lessonData: LESSON_4_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-5',
    title: 'LEÇON 5 : PRESSION ARTÉRIELLE ET MALADIES CARDIOVASCULAIRES',
    type: 'cours',
    badge: 'Thème 1 - Cours intégral',
    description: 'Définition des pressions systolique et diastolique, hypertension artérielle, formation de la plaque d\'athérome, infarctus du myocarde, AVC et hygiène de vie.',
    lessonData: LESSON_5_SVT_4EME
  },

  // =========================================================================
  // THÈME 2 : REPRODUCTION HUMAINE, SANTÉ & LES SOLS (Leçons 6 à 10)
  // =========================================================================
  {
    id: 'svt-4eme-lecon-6',
    title: 'LEÇON 6 : ANATOMIE ET PHYSIOLOGIE DES APPAREILS REPRODUCTEURS',
    type: 'cours',
    badge: 'Thème 2 - Cours intégral',
    description: 'Puberté et caractères sexuels, appareil reproducteur masculin (testicules, spermatozoïdes, sperme) et féminin (ovaires, trompes, utérus, vagin).',
    lessonData: LESSON_6_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-7',
    title: 'LEÇON 7 : CYCLES SEXUELS CHEZ LA FEMME',
    type: 'cours',
    badge: 'Thème 2 - Cours intégral',
    description: 'Cycle ovarien (phases folliculaire, ovulation, phase lutéale), cycle utérin (règles et dentelle utérine) et synchronisme sous contrôle hormonal.',
    lessonData: LESSON_7_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-8',
    title: 'LEÇON 8 : DE LA FÉCONDATION À LA NAISSANCE',
    type: 'cours',
    badge: 'Thème 2 - Cours intégral',
    description: 'Fécondation dans la trompe, nidation utérine, développement embryonnaire et fœtal, rôle protecteur du liquide amniotique et du placenta, et étapes de l\'accouchement.',
    lessonData: LESSON_8_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-9',
    title: 'LEÇON 9 : LES MÉTHODES DE CONTRACEPTION ET LES IST',
    type: 'cours',
    badge: 'Thème 2 - Cours intégral',
    description: 'Méthodes contraceptives hormonales, mécaniques et chimiques, transmission et conséquences des IST (chlamydia, gonococcie, hépatite B, HPV, VIH/SIDA) et dépistage.',
    lessonData: LESSON_9_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-10',
    title: 'LEÇON 10 : LA COMPOSITION ET LA FORMATION DES SOLS',
    type: 'cours',
    badge: 'Thème 2 - Cours intégral',
    description: 'Fractions minérale, organique, eau et air, horizons pédologiques d\'un profil de sol et étapes de la pédogenèse par altération de la roche-mère.',
    lessonData: LESSON_10_SVT_4EME
  },

  // =========================================================================
  // THÈME 3 : GÉOLOGIE & DYNAMIQUE DE LA TERRE (Leçons 11 à 15)
  // =========================================================================
  {
    id: 'svt-4eme-lecon-11',
    title: 'LEÇON 11 : LES ROCHES EXOGÈNES : FORMATION ET ÉVOLUTION',
    type: 'cours',
    badge: 'Thème 3 - Cours intégral',
    description: 'Cycle sédimentaire (altération, transport, sédimentation en strates, diagenèse) et classification des roches détritiques, chimiques et biochimiques/organiques.',
    lessonData: LESSON_11_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-12',
    title: 'LEÇON 12 : LES ROCHES ENDOGÈNES ET LA FORMATION DES ROCHES MAGMATIQUES',
    type: 'cours',
    badge: 'Thème 3 - Cours intégral',
    description: 'Origine et fusion du magma, expérience du soufre fondu, roches plutoniques à texture grenue (granite), roches volcaniques à texture microlitique (basalte) et métamorphisme.',
    lessonData: LESSON_12_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-13',
    title: 'LEÇON 13 : LE VOLCANISME : MÉCANISMES, MANIFESTATIONS ET RISQUES GÉOLOGIQUES',
    type: 'cours',
    badge: 'Thème 3 - Cours intégral',
    description: 'Anatomie du volcan (réservoir, cheminée, cratère), volcanisme effusif basaltique vs volcanisme explosif à nuées ardentes, ceinture de feu et surveillance préventive.',
    lessonData: LESSON_13_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-14',
    title: 'LEÇON 14 : LES SÉISMES ET LA STRUCTURE INTERNE DU GLOBE TERRESTRE',
    type: 'cours',
    badge: 'Thème 3 - Cours intégral',
    description: 'Mécanisme des failles au foyer, ondes P, S et de surface, sismogrammes, intensité MSK vs magnitude de Richter, et discontinuités de Moho, Gutenberg et Lehmann.',
    lessonData: LESSON_14_SVT_4EME
  },
  {
    id: 'svt-4eme-lecon-15',
    title: 'LEÇON 15 : LA TECTONIQUE DES PLAQUES ET LA DYNAMIQUE GLOBALE DE LA LITHOSPHÈRE',
    type: 'cours',
    badge: 'Thème 3 - Cours intégral',
    description: 'Dérive des continents de Wegener, lithosphère sur asthénosphère, frontières divergentes (dorsales), convergentes (subduction et Himalaya), coulissantes, et moteur convectif.',
    lessonData: LESSON_15_SVT_4EME
  }
];
