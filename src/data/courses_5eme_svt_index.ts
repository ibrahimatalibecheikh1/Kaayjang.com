import { ContentData } from './courses';
import {
  LESSON_1_SVT_5EME,
  LESSON_2_SVT_5EME,
  LESSON_3_SVT_5EME,
  LESSON_4_SVT_5EME,
  LESSON_5_SVT_5EME,
  LESSON_6_SVT_5EME
} from './courses_5eme_svt_part1';
import {
  LESSON_7_SVT_5EME,
  LESSON_8_SVT_5EME,
  LESSON_9_SVT_5EME,
  LESSON_10_SVT_5EME,
  LESSON_11_SVT_5EME,
  LESSON_12_SVT_5EME
} from './courses_5eme_svt_part2';
import {
  LESSON_13_SVT_5EME,
  LESSON_14_SVT_5EME,
  LESSON_15_SVT_5EME,
  LESSON_16_SVT_5EME,
  LESSON_17_SVT_5EME,
  LESSON_18_SVT_5EME
} from './courses_5eme_svt_part3';

export {
  LESSON_1_SVT_5EME,
  LESSON_2_SVT_5EME,
  LESSON_3_SVT_5EME,
  LESSON_4_SVT_5EME,
  LESSON_5_SVT_5EME,
  LESSON_6_SVT_5EME,
  LESSON_7_SVT_5EME,
  LESSON_8_SVT_5EME,
  LESSON_9_SVT_5EME,
  LESSON_10_SVT_5EME,
  LESSON_11_SVT_5EME,
  LESSON_12_SVT_5EME,
  LESSON_13_SVT_5EME,
  LESSON_14_SVT_5EME,
  LESSON_15_SVT_5EME,
  LESSON_16_SVT_5EME,
  LESSON_17_SVT_5EME,
  LESSON_18_SVT_5EME
};

export const SVT_5EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '18' },
  { id: 'theme-1', label: 'Thème 1 : Planète Terre & Environnement', count: '8' },
  { id: 'theme-2', label: 'Thème 2 : Le Vivant & son Évolution', count: '7' },
  { id: 'theme-3', label: 'Thème 3 : Corps Humain & Santé', count: '3' }
];

export const COURSES_SVT_5EME: ContentData[] = [
  // =========================================================================
  // THÈME 1 : LA PLANÈTE TERRE, L'ENVIRONNEMENT ET L'ACTION HUMAINE
  // =========================================================================
  {
    id: LESSON_1_SVT_5EME.id,
    title: LESSON_1_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Place de la Terre dans le système solaire, zone d\'habitabilité orbitale, présence pérenne d\'eau liquide et atmosphère protectrice.',
    lessonData: LESSON_1_SVT_5EME
  },
  {
    id: LESSON_2_SVT_5EME.id,
    title: LESSON_2_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Atmosphère terrestre, équilibre thermique de l\'effet de serre naturel, cycle hydrologique et genèse de la couche d\'ozone.',
    lessonData: LESSON_2_SVT_5EME
  },
  {
    id: LESSON_3_SVT_5EME.id,
    title: LESSON_3_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Inégalités d\'énergie solaire reçue, cellules convectives d\'Hadley, alizés, courants marins thermohalins et régulation thermique.',
    lessonData: LESSON_3_SVT_5EME
  },
  {
    id: LESSON_4_SVT_5EME.id,
    title: LESSON_4_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Météorologie vs climatologie, dépression tropicale, formation des cyclones, sécheresses sahéliennes et adaptation préventive.',
    lessonData: LESSON_4_SVT_5EME
  },
  {
    id: LESSON_5_SVT_5EME.id,
    title: LESSON_5_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Mécanisme de rupture de faille, ondes sismiques P et S, foyers et épicentres, formation des tsunamis et normes parasismiques.',
    lessonData: LESSON_5_SVT_5EME
  },
  {
    id: LESSON_6_SVT_5EME.id,
    title: LESSON_6_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Volcanisme effusif vs explosif, magmas fluides et visqueux, nuées ardentes, sismographes, inclinomètres et surveillance des risques.',
    lessonData: LESSON_6_SVT_5EME
  },
  {
    id: LESSON_7_SVT_5EME.id,
    title: LESSON_7_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Exploitation des ressources en eau douce, fragilité de l\'humus des sols arables, énergies fossiles vs renouvelables et développement durable.',
    lessonData: LESSON_7_SVT_5EME
  },
  {
    id: LESSON_8_SVT_5EME.id,
    title: LESSON_8_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 1 : La Planète Terre & l\'Environnement',
    description: 'Écosystème (biotope et biocénose), fragmentation des habitats, bioamplification des pesticides, espèces invasives et corridors biologiques.',
    lessonData: LESSON_8_SVT_5EME
  },

  // =========================================================================
  // THÈME 2 : LE VIVANT ET SON ÉVOLUTION
  // =========================================================================
  {
    id: LESSON_9_SVT_5EME.id,
    title: LESSON_9_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 2 : Le Vivant et son Évolution',
    description: 'Autotrophie végétale, poils absorbants des racines, stomates foliaires, photosynthèse chlorophyllienne et sèves brute et élaborée.',
    lessonData: LESSON_9_SVT_5EME
  },
  {
    id: LESSON_10_SVT_5EME.id,
    title: LESSON_10_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 2 : Le Vivant et son Évolution',
    description: 'Régimes herbivores (ruminants) et carnivores, digestion enzymatique, villosités intestinales, respirations branchiale, pulmonaire et trachéenne.',
    lessonData: LESSON_10_SVT_5EME
  },
  {
    id: LESSON_11_SVT_5EME.id,
    title: LESSON_11_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 2 : Le Vivant et son Évolution',
    description: 'Niveaux trophiques, pyramide de biomasse et règle des 10%, prédation, parasitisme, symbioses mutuelles et réseaux alimentaires.',
    lessonData: LESSON_11_SVT_5EME
  },
  {
    id: LESSON_12_SVT_5EME.id,
    title: LESSON_12_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 2 : Le Vivant et son Évolution',
    description: 'Matière organique carbonée, litière forestière, fragmentation par la faune du sol, humification et minéralisation bactérienne terminale.',
    lessonData: LESSON_12_SVT_5EME
  },
  {
    id: LESSON_13_SVT_5EME.id,
    title: LESSON_13_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 2 : Le Vivant et son Évolution',
    description: 'Gamètes mâle et femelle, fécondation externe aquatique massive vs interne terrestre protégée, signaux d\'attraction et parades nuptiales.',
    lessonData: LESSON_13_SVT_5EME
  },
  {
    id: LESSON_14_SVT_5EME.id,
    title: LESSON_14_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 2 : Le Vivant et son Évolution',
    description: 'Multiplication végétative (stolons, rhizomes, tubercules, bouturage), clonage génétique, bourgeonnement animal, vitesse de prolifération et vulnérabilité.',
    lessonData: LESSON_14_SVT_5EME
  },
  {
    id: LESSON_15_SVT_5EME.id,
    title: LESSON_15_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 2 : Le Vivant et son Évolution',
    description: 'Fossiles dans les roches sédimentaires, homologie des membres chez les tétrapodes, innovations évolutives, arbre phylogénétique et origine commune de la vie.',
    lessonData: LESSON_15_SVT_5EME
  },

  // =========================================================================
  // THÈME 3 : LE CORPS HUMAIN ET LA SANTÉ
  // =========================================================================
  {
    id: LESSON_16_SVT_5EME.id,
    title: LESSON_16_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 3 : Le Corps Humain et la Santé',
    description: 'Besoins énergétiques du muscle (glucose et O₂), accélération de la fréquence cardiaque et respiratoire, redistribution du débit sanguin et thermorégulation.',
    lessonData: LESSON_16_SVT_5EME
  },
  {
    id: LESSON_17_SVT_5EME.id,
    title: LESSON_17_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 3 : Le Corps Humain et la Santé',
    description: 'Arborescence respiratoire, 300 millions d\'alvéoles pulmonaires, diffusion gazeuse hématose, composition de l\'air et méfaits du tabagisme.',
    lessonData: LESSON_17_SVT_5EME
  },
  {
    id: LESSON_18_SVT_5EME.id,
    title: LESSON_18_SVT_5EME.title,
    type: 'cours',
    badge: 'Thème 3 : Le Corps Humain et la Santé',
    description: 'Système nerveux central et périphérique, conduction de l\'influx par les neurones, transmission chimique synaptique, dangers des drogues et sommeil réparateur.',
    lessonData: LESSON_18_SVT_5EME
  }
];
