// =========================================================================
// INDEX CENTRAL DES COURS D'ANGLAIS CLASSE DE SECONDE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// Approche Par les Compétences (APC) — 8 Units intégrales sans résumé
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  COURSES_ANGLAIS_2NDE_PART1,
  ANGLAIS_2NDE_PART1_MODULES
} from './courses_2nde_anglais_part1';
import {
  COURSES_ANGLAIS_2NDE_PART2,
  ANGLAIS_2NDE_PART2_MODULES
} from './courses_2nde_anglais_part2';

export const ANGLAIS_2NDE_PARTS = [
  { id: 'all', label: 'Toutes les Units', count: '8' },
  { id: 'part1', label: 'Partie 1 • Éducation, Famille, Santé & Climat', count: '4' },
  { id: 'part2', label: 'Partie 2 • Tech, Culture, Droits & Carrières', count: '4' }
];

export const COURSES_ANGLAIS_2NDE: ContentData[] = [
  ...COURSES_ANGLAIS_2NDE_PART1.map((lesson, idx) => ({
    id: `anglais-2nde-cours-${idx + 1}`,
    title: lesson.title.toUpperCase(),
    type: 'cours' as const,
    badge: 'Units 1-4 • Première Partie',
    description: lesson.description || 'Comprehensive official English curriculum for Seconde L & S.',
    lessonData: lesson
  })),
  ...COURSES_ANGLAIS_2NDE_PART2.map((lesson, idx) => ({
    id: `anglais-2nde-cours-${idx + 5}`,
    title: lesson.title.toUpperCase(),
    type: 'cours' as const,
    badge: 'Units 5-8 • Deuxième Partie',
    description: lesson.description || 'Comprehensive official English curriculum for Seconde L & S.',
    lessonData: lesson
  }))
];
