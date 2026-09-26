// =========================================================================
// INDEX CENTRAL DES COURS DE PHYSIQUE-CHIMIE CLASSE DE SECONDE L
// Conforme au programme officiel national de la République du Sénégal
// Cours complets et ultra-détaillés sans résumé — leçons approfondies
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_PC_2NDE_L, LESSON_2_PC_2NDE_L, LESSON_3_PC_2NDE_L, LESSON_4_PC_2NDE_L, LESSON_5_PC_2NDE_L, LESSON_6_PC_2NDE_L
} from './courses_2nde_pc_l_part1';
import {
  LESSON_7_PC_2NDE_L, LESSON_8_PC_2NDE_L, LESSON_9_PC_2NDE_L, LESSON_10_PC_2NDE_L, LESSON_11_PC_2NDE_L
} from './courses_2nde_pc_l_part2';

export {
  LESSON_1_PC_2NDE_L, LESSON_2_PC_2NDE_L, LESSON_3_PC_2NDE_L, LESSON_4_PC_2NDE_L, LESSON_5_PC_2NDE_L, LESSON_6_PC_2NDE_L,
  LESSON_7_PC_2NDE_L, LESSON_8_PC_2NDE_L, LESSON_9_PC_2NDE_L, LESSON_10_PC_2NDE_L, LESSON_11_PC_2NDE_L
};

export const PC_2NDE_L_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '11' },
  { id: 'part-1', label: 'Partie 1 • Physique : Électricité & Mécanique', count: '6' },
  { id: 'part-2', label: 'Partie 2 • Chimie : Matière, Réactions & Solutions', count: '5' }
];

export const COURSES_PC_2NDE_L: ContentData[] = [
  {
    id: 'pc-2nde-l-cours-1',
    title: 'CHAPITRE 1 : L\'ÉLECTRICITÉ DANS NOTRE ENVIRONNEMENT',
    type: 'cours',
    badge: 'Partie 1 • Physique : Électricité',
    description: 'Charges électriques microscopiques, atome neutre et ionisé, conducteurs métalliques et ioniques, isolants, effets Joule, lumineux, magnétique et chimique, et règles vitales de sécurité.',
    lessonData: LESSON_1_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-2',
    title: 'CHAPITRE 2 : LE CIRCUIT ÉLECTRIQUE ET SES ASSOCIATIONS',
    type: 'cours',
    badge: 'Partie 1 • Physique : Électricité',
    description: 'Générateurs et récepteurs, circuit fermé vs ouvert, association en série vs dérivation (indépendance des récepteurs), et symboles électriques normalisés universels.',
    lessonData: LESSON_2_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-3',
    title: 'CHAPITRE 3 : INTENSITÉ ET TENSION ÉLECTRIQUES',
    type: 'cours',
    badge: 'Partie 1 • Physique : Électricité',
    description: 'Définition de l\'intensité I = Q/t et mesure par ampèremètre en série, tension U en volts par voltmètre en dérivation, loi d\'unicité et loi d\'additivité dans les circuits.',
    lessonData: LESSON_3_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-4',
    title: 'CHAPITRE 4 : MOUVEMENT ET VITESSE',
    type: 'cours',
    badge: 'Partie 1 • Physique : Mécanique',
    description: 'Relativité du mouvement et choix du référentiel, formes de trajectoires (rectiligne, circulaire, curviligne), vitesse moyenne v = d/Δt, conversions m/s et km/h, et Mouvement Rectiligne Uniforme (MRU).',
    lessonData: LESSON_4_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-5',
    title: 'CHAPITRE 5 : INTERACTION ENTRE OBJETS : LA FORCE',
    type: 'cours',
    badge: 'Partie 1 • Physique : Mécanique',
    description: 'Interactions de contact et à distance, caractéristiques du vecteur force (point d\'application, droite d\'action, sens, norme en newtons), effets dynamiques et statiques, et équilibre sous deux forces opposées.',
    lessonData: LESSON_5_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-6',
    title: 'CHAPITRE 6 : POIDS, MASSE ET RELATION ENTRE POIDS ET MASSE',
    type: 'cours',
    badge: 'Partie 1 • Physique : Mécanique',
    description: 'Distinction conceptuelle entre masse invariable (en kg) et poids force d\'attraction (en N), formule de proportionnalité P = m × g, intensité de la pesanteur sur Terre et sur la Lune.',
    lessonData: LESSON_6_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-7',
    title: 'CHAPITRE 7 : MÉLANGES ET CORPS PURS',
    type: 'cours',
    badge: 'Partie 2 • Chimie : Matière & Solutions',
    description: 'Corps pur et constantes physiques invariables, mélanges homogènes et hétérogènes, techniques de séparation (filtration, décantation, distillation, évaporation) et tests chimiques d\'identification.',
    lessonData: LESSON_7_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-8',
    title: 'CHAPITRE 8 : STRUCTURE DE LA MATIÈRE ET QUANTITÉ DE MATIÈRE',
    type: 'cours',
    badge: 'Partie 2 • Chimie : Matière & Solutions',
    description: 'Numéro atomique Z, ions cations et anions, molécules et formules brutes, constante d\'Avogadro N_A, quantité de matière n = N/N_A, masse molaire n = m/M et concentration molaire C = n/V.',
    lessonData: LESSON_8_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-9',
    title: 'CHAPITRE 9 : TRANSFORMATIONS DE LA MATIÈRE ET COMBUSTIONS',
    type: 'cours',
    badge: 'Partie 2 • Chimie : Réactions & Combustions',
    description: 'Transformation physique réversible vs transformation chimique, loi de conservation de Lavoisier, équilibrage stœchiométrique des équations chimiques, combustions complètes et incomplètes (danger du CO).',
    lessonData: LESSON_9_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-10',
    title: 'CHAPITRE 10 : SOLUTIONS ACIDES, BASIQUES ET NEUTRES',
    type: 'cours',
    badge: 'Partie 2 • Chimie : Matière & Solutions',
    description: 'Solutions aqueuses et rôle des ions H⁺ et OH⁻, échelle de pH de 0 à 14, papier pH et pH-mètre, indicateurs colorés, relation de dilution C₁ × V₁ = C₂ × V₂ et sécurité au laboratoire.',
    lessonData: LESSON_10_PC_2NDE_L
  },
  {
    id: 'pc-2nde-l-cours-11',
    title: 'ANNEXE : MÉTHODES DE RÉSOLUTION ET EXERCICES CORRIGÉS',
    type: 'cours',
    badge: 'Partie 2 • Consolidation & Exercices',
    description: 'Quatre fiches méthodologiques types (vitesse, circuits électriques, poids, moles et concentrations) et six exercices d\'application résolus et rédigés avec leurs corrigés détaillés pas à pas.',
    lessonData: LESSON_11_PC_2NDE_L
  }
];
