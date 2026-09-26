// =========================================================================
// INDEX CENTRAL DES COURS DE MATHÉMATIQUES CLASSE DE SECONDE L
// Conforme au référentiel officiel national APAMS (Octobre 2006) — Sénégal
// Cours complets, ultra-détaillés, sans résumé ni condensation
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  COURSES_MATH_2NDE_L_PART1,
  MATH_2NDE_L_PART1_MODULES
} from './courses_2nde_math_l_part1';
import {
  COURSES_MATH_2NDE_L_PART2,
  MATH_2NDE_L_PART2_MODULES
} from './courses_2nde_math_l_part2';

export const MATH_2NDE_L_PARTS = [
  { id: 'all', label: 'Tous les chapitres', count: '9' },
  { id: 'part1', label: 'Partie 1 • Calculs & Fonctions affines', count: '4' },
  { id: 'part2', label: 'Partie 2 • Statistiques, 2nd degré & Courbes', count: '5' }
];

export const COURSES_MATH_2NDE_L: ContentData[] = [
  ...COURSES_MATH_2NDE_L_PART1.map((lesson, idx) => ({
    id: `math-2nde-l-cours-${idx + 1}`,
    title: `${lesson.number} : ${lesson.title.toUpperCase()}`,
    type: 'cours' as const,
    badge: 'Partie 1 • Chapitres 1 à 4',
    description: lesson.introduction.slice(0, 190) + '...',
    lessonData: lesson
  })),
  ...COURSES_MATH_2NDE_L_PART2.map((lesson, idx) => ({
    id: `math-2nde-l-cours-${idx + 5}`,
    title: `${lesson.number} : ${lesson.title.toUpperCase()}`,
    type: 'cours' as const,
    badge: 'Partie 2 • Chapitres 5 à 8 & Méthodes',
    description: lesson.introduction.slice(0, 190) + '...',
    lessonData: lesson
  }))
];
