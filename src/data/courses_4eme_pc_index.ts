import { ContentData, LessonContent } from './courses';
import { LESSON_1_PC_4EME, LESSON_2_PC_4EME } from './courses_4eme_pc_part1';
import { LESSON_3_PC_4EME, LESSON_4_PC_4EME } from './courses_4eme_pc_part2';
import {
  LESSON_C1_CHIMIE_4EME,
  LESSON_C2_CHIMIE_4EME,
  LESSON_C3_CHIMIE_4EME,
  LESSON_C4_CHIMIE_4EME,
  LESSON_C5_CHIMIE_4EME
} from './courses_4eme_chimie';

export {
  LESSON_1_PC_4EME,
  LESSON_2_PC_4EME,
  LESSON_3_PC_4EME,
  LESSON_4_PC_4EME,
  LESSON_C1_CHIMIE_4EME,
  LESSON_C2_CHIMIE_4EME,
  LESSON_C3_CHIMIE_4EME,
  LESSON_C4_CHIMIE_4EME,
  LESSON_C5_CHIMIE_4EME
};

// =========================================================================
// THÈMES DE FILTRAGE POUR PHYSIQUE-CHIMIE 4ÈME
// =========================================================================
export const PC_4EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '9' },
  { id: 'chimie-officiel', label: 'Chimie (Programme officiel)', count: '5' },
  { id: 'gaz-combustions', label: 'Air, Gaz & Combustions', count: '3' },
  { id: 'atomes-reactions', label: 'Atomes & Réactions', count: '2' },
  { id: 'physique', label: 'Physique (Électricité)', count: '2' },
  { id: 'eau-matiere', label: 'Eau & Solutions', count: '2' }
];

// =========================================================================
// LISTE DES LEÇONS DE PHYSIQUE-CHIMIE (PC) — CLASSE DE 4ÈME
// =========================================================================
export const COURSES_PC_4EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // COURS COMPLET DE CHIMIE — CLASSE DE 4ÈME (PROGRAMME OFFICIEL SÉNÉGALAIS)
  // Conforme au document officiel Sciences Physiques avec Figures & 3x exercices par leçon
  // -----------------------------------------------------------------------
  {
    id: 'pc-4eme-chimie-c1',
    title: "LEÇON C1 : L'AIR, UN MÉLANGE DE GAZ (CHIMIE)",
    type: 'cours',
    badge: 'Chimie (Officiel)',
    description:
      "Composition volumique de l'air sec et pur (78 % N₂ ≈ 4/5, 21 % O₂ ≈ 1/5, 1 % gaz rares/CO₂), Fig 1 graphique de répartition, Fig 2 expérience de la bougie sur cuve à eau avec montée de l'eau d'un cinquième (1/5) et 3 exercices résolus pas-à-pas.",
    lessonData: LESSON_C1_CHIMIE_4EME
  },
  {
    id: 'pc-4eme-chimie-c2',
    title: 'LEÇON C2 : PROPRIÉTÉS PHYSIQUES DES GAZ (CHIMIE)',
    type: 'cours',
    badge: 'Chimie (Officiel)',
    description:
      "Absence de forme et volume propres, compressibilité et expansibilité, Fig 3 expérience de la seringue bouchée (piston poussé vs tiré), masse de l'air (1,2 g à 1,3 g par litre), méthode de pesée par déplacement d'eau et 3 exercices résolus pas-à-pas.",
    lessonData: LESSON_C2_CHIMIE_4EME
  },
  {
    id: 'pc-4eme-chimie-c3',
    title: 'LEÇON C3 : STRUCTURE PARTICULAIRE DE LA MATIÈRE : ATOMES ET MOLÉCULES (CHIMIE)',
    type: 'cours',
    badge: 'Chimie (Officiel)',
    description:
      "Atomes constitutifs (C noir, H blanc, O rouge, N bleu), symboles chimiques majuscules, molécules et formules chimiques brutes avec indices, Fig 4 modèles compacts de corps simples et composés (O₂, H₂O, CO₂) et 3 exercices résolus pas-à-pas.",
    lessonData: LESSON_C3_CHIMIE_4EME
  },
  {
    id: 'pc-4eme-chimie-c4',
    title: 'LEÇON C4 : LES COMBUSTIONS (CHIMIE)',
    type: 'cours',
    badge: 'Chimie (Officiel)',
    description:
      "Combustion vive du carbone dans le dioxygène pur avec étincelles, Fig 5 test d'identification du CO₂ à l'eau de chaux troublée, combustion complète (flamme bleue, CO₂ + H₂O) vs incomplète du butane (flamme jaune, suie et monoxyde de carbone CO mortel) et 3 exercices résolus pas-à-pas.",
    lessonData: LESSON_C4_CHIMIE_4EME
  },
  {
    id: 'pc-4eme-chimie-c5',
    title: 'LEÇON C5 : LA RÉACTION CHIMIQUE (CHIMIE)',
    type: 'cours',
    badge: 'Chimie (Officiel)',
    description:
      "Loi fondamentale de conservation de la masse d'Antoine Lavoisier (« Rien ne se perd, rien ne se crée, tout se transforme »), conservation absolue des atomes, écriture et équilibrage des équations chimiques par coefficients stœchiométriques, Fig 6 modélisation moléculaire 2 H₂ + O₂ ➔ 2 H₂O et 3 exercices résolus pas-à-pas.",
    lessonData: LESSON_C5_CHIMIE_4EME
  },

  // -----------------------------------------------------------------------
  // PHYSIQUE (ÉLECTRICITÉ) — CLASSE DE 4ÈME
  // -----------------------------------------------------------------------
  {
    id: 'pc-4eme-lecon-3',
    title: 'LEÇON 3 : LE CIRCUIT ÉLECTRIQUE SIMPLE (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique - Électricité',
    description:
      'Dipôles fondamentaux (générateur, récepteur, interrupteur), boucle conductrice fermée, conducteurs et isolants, symboles normalisés CEI/AFNOR, dangers du court-circuit, Fig 2 schéma normalisé et 2 exercices résolus pas-à-pas.',
    lessonData: LESSON_3_PC_4EME
  },
  {
    id: 'pc-4eme-lecon-4',
    title: 'LEÇON 4 : LE SENS DU COURANT ÉLECTRIQUE (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique - Électricité',
    description:
      'Sens conventionnel du courant (+ vers -), mise en évidence avec moteur électrique, fonctionnement de la diode et de la DEL (sens passant vs bloquant), applications de sécurité, Fig 3 schémas comparatifs et 2 exercices résolus pas-à-pas.',
    lessonData: LESSON_4_PC_4EME
  },

  // -----------------------------------------------------------------------
  // CHIMIE : L'EAU DANS NOTRE ENVIRONNEMENT & CORPS PUR
  // -----------------------------------------------------------------------
  {
    id: 'pc-4eme-lecon-1',
    title: "LEÇON 1 : L'EAU DANS NOTRE ENVIRONNEMENT (CHIMIE)",
    type: 'cours',
    badge: 'Chimie - Eau & Matière',
    description:
      "Planète bleue et hydrosphère, eau douce vs eau salée, modèle moléculaire H₂O (angle 104,5°), les 3 états physiques (solide, liquide, gaz), changements d'état avec conservation de la masse, Fig 1 modèle atomique et 2 exercices résolus pas-à-pas.",
    lessonData: LESSON_1_PC_4EME
  },
  {
    id: 'pc-4eme-lecon-2',
    title: "LEÇON 2 : L'EAU : UN CORPS PUR, LES MÉLANGES AQUEUX (CHIMIE)",
    type: 'cours',
    badge: 'Chimie - Eau & Matière',
    description:
      'Corps pur vs mélange, mélanges homogènes vs hétérogènes, techniques de séparation (décantation, filtration, distillation), test au sulfate de cuivre anhydre, schémas des montages expérimentaux de laboratoire et 2 exercices résolus pas-à-pas.',
    lessonData: LESSON_2_PC_4EME
  }
];

// Dictionnaire rapide d'accès par ID
export const LESSONS_PC_4EME_MAP: Record<string, LessonContent> = {
  'pc-4eme-chimie-c1': LESSON_C1_CHIMIE_4EME,
  'pc-4eme-chimie-c2': LESSON_C2_CHIMIE_4EME,
  'pc-4eme-chimie-c3': LESSON_C3_CHIMIE_4EME,
  'pc-4eme-chimie-c4': LESSON_C4_CHIMIE_4EME,
  'pc-4eme-chimie-c5': LESSON_C5_CHIMIE_4EME,
  'pc-4eme-lecon-1': LESSON_1_PC_4EME,
  'pc-4eme-lecon-2': LESSON_2_PC_4EME,
  'pc-4eme-lecon-3': LESSON_3_PC_4EME,
  'pc-4eme-lecon-4': LESSON_4_PC_4EME
};
