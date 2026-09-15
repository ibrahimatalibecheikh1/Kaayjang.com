import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_SVT_5EME,
  LESSON_2_SVT_5EME,
  LESSON_3_SVT_5EME,
  LESSON_4_SVT_5EME,
  LESSON_5_SVT_5EME
} from './courses_5eme_svt_part1';
import {
  LESSON_6_SVT_5EME,
  LESSON_7_SVT_5EME,
  LESSON_8_SVT_5EME
} from './courses_5eme_svt_part2';
import {
  LESSON_9_SVT_5EME,
  LESSON_10_SVT_5EME,
  LESSON_11_SVT_5EME,
  LESSON_12_SVT_5EME
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
  LESSON_12_SVT_5EME
};

export const COURSES_SVT_5EME: ContentData[] = [
  // THÈME 1 : ENVIRONNEMENT
  {
    id: LESSON_1_SVT_5EME.id,
    title: LESSON_1_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 1 : Environnement',
    description: 'Espaces urbain et rural, causes et conséquences des dégradations, inondations en bas-fond et solutions durables.',
    lessonData: LESSON_1_SVT_5EME
  },
  {
    id: LESSON_2_SVT_5EME.id,
    title: LESSON_2_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 1 : Environnement',
    description: 'Pollutions de l\'eau, de l\'air, du sol et sonores. Eutrophisation, asphyxie des poissons et bioamplification du DDT.',
    lessonData: LESSON_2_SVT_5EME
  },

  // THÈME 2 : FONCTION DE NUTRITION
  {
    id: LESSON_3_SVT_5EME.id,
    title: LESSON_3_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 2 : Nutrition',
    description: 'Adaptation aux régimes alimentaires : appareil buccal, dentition comparée, rumination et 4 poches de l\'estomac de la vache.',
    lessonData: LESSON_3_SVT_5EME
  },
  {
    id: LESSON_4_SVT_5EME.id,
    title: LESSON_4_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 2 : Nutrition',
    description: 'Besoins de l\'organisme humain, calcul de la valeur énergétique (KJ), rations alimentaires et maladies nutritionnelles (kwashiorkor, goitre).',
    lessonData: LESSON_4_SVT_5EME
  },
  {
    id: LESSON_5_SVT_5EME.id,
    title: LESSON_5_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 2 : Nutrition',
    description: 'Respiration branchiale, pulmonaire, trachéenne et cutanée. Échanges gazeux dans l\'eau et l\'air chez le poisson et la grenouille.',
    lessonData: LESSON_5_SVT_5EME
  },

  // THÈME 3 : FONCTION REPRODUCTION
  {
    id: LESSON_6_SVT_5EME.id,
    title: LESSON_6_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 3 : Reproduction',
    description: 'Reproduction animale chez la poule (ovipare direct), la vache (vivipare) et le criquet (mues et développement indirect).',
    lessonData: LESSON_6_SVT_5EME
  },
  {
    id: LESSON_7_SVT_5EME.id,
    title: LESSON_7_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 3 : Reproduction',
    description: 'Reproduction des plantes à fleurs : étamines, pistil, pollinisation par les insectes, germination du pollen et genèse du fruit et de la graine.',
    lessonData: LESSON_7_SVT_5EME
  },
  {
    id: LESSON_8_SVT_5EME.id,
    title: LESSON_8_SVT_5EME.title,
    type: 'cours',
    badge: '1ère Partie - Thème 3 : Reproduction',
    description: 'Reproduction des plantes sans fleurs (fougère) : sporanges, spores, prothalle en cœur, nage des gamètes mâles et embryon.',
    lessonData: LESSON_8_SVT_5EME
  },

  // THÈME 4 : LES SOLS (SCIENCES DE LA TERRE)
  {
    id: LESSON_9_SVT_5EME.id,
    title: LESSON_9_SVT_5EME.title,
    type: 'cours',
    badge: '2ème Partie - Thème 4 : Les Sols',
    description: 'Composition minérale, organique et fluide du sol. Sédimentation en éprouvette, texture, structure et écologie des vers de terre.',
    lessonData: LESSON_9_SVT_5EME
  },
  {
    id: LESSON_10_SVT_5EME.id,
    title: LESSON_10_SVT_5EME.title,
    type: 'cours',
    badge: '2ème Partie - Thème 4 : Les Sols',
    description: 'Pédogenèse, profil pédologique et horizons A, B, C et roche mère. Lessivage des pluies, érosion et pratiques de protection.',
    lessonData: LESSON_10_SVT_5EME
  },

  // THÈME 5 : LES ROCHES SÉDIMENTAIRES
  {
    id: LESSON_11_SVT_5EME.id,
    title: LESSON_11_SVT_5EME.title,
    type: 'cours',
    badge: '2ème Partie - Thème 5 : Roches Sédimentaires',
    description: 'Origine des roches sédimentaires : altération, érosion, transport, grains de sable (NU, EL, RM), sédimentation et diagenèse.',
    lessonData: LESSON_11_SVT_5EME
  },
  {
    id: LESSON_12_SVT_5EME.id,
    title: LESSON_12_SVT_5EME.title,
    type: 'cours',
    badge: '2ème Partie - Thème 5 : Roches Sédimentaires',
    description: 'Importance économique et industrielle des roches sédimentaires. Alerte sur le pillage du sable et l\'érosion côtière à Rufisque et Mbao.',
    lessonData: LESSON_12_SVT_5EME
  }
];
