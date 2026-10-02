// =========================================================================
// INDEX CENTRAL DES COURS D'ANGLAIS PREMIÈRE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 26 Units Exhaustives sans résumé + Exercices, Corrigés et Annexes
// =========================================================================

import { ContentData } from './courses';
import { COURSES_ANGLAIS_1ERE_MANUEL_PART1 } from './courses_1ere_anglais_part1';
import { COURSES_ANGLAIS_1ERE_MANUEL_PART2 } from './courses_1ere_anglais_part2';
import { COURSES_ANGLAIS_1ERE_MANUEL_PART3 } from './courses_1ere_anglais_part3';

export const ANGLAIS_1ERE_PARTS = [
  { id: 'all', label: 'Toutes les 26 Units & Modules', count: '26' },
  { id: 'tenses', label: 'Partie 1 • Temps & Système Verbal (Units 1-6)', count: '6' },
  { id: 'grammar', label: 'Partie 2 • Grammaire & Structures (Units 7-14)', count: '8' },
  { id: 'themes', label: 'Partie 3 • Vocabulaire & Thématiques (Units 15-19)', count: '5' },
  { id: 'writing', label: 'Partie 4 • Expression Écrite & Débats (Units 20-23)', count: '4' },
  { id: 'exam', label: 'Partie 5 • Phonologie & Évaluation (Units 24-26)', count: '3' }
];

export const ALL_COURSES_ANGLAIS_1ERE = [
  ...COURSES_ANGLAIS_1ERE_MANUEL_PART1,
  ...COURSES_ANGLAIS_1ERE_MANUEL_PART2,
  ...COURSES_ANGLAIS_1ERE_MANUEL_PART3
];

export const COURSES_ANGLAIS_1ERE: ContentData[] = ALL_COURSES_ANGLAIS_1ERE.map((lesson, idx) => {
  let badge = 'Partie 1 • Temps & Verbes';
  if (idx >= 6 && idx <= 13) {
    badge = 'Partie 2 • Grammaire & Structures';
  } else if (idx >= 14 && idx <= 18) {
    badge = 'Partie 3 • Thématiques & Vocabulaire';
  } else if (idx >= 19 && idx <= 22) {
    badge = 'Partie 4 • Expression Écrite & Débat';
  } else if (idx >= 23) {
    badge = 'Partie 5 • Phonologie & Évaluation';
  }

  return {
    id: lesson.id,
    title: lesson.title.toUpperCase(),
    type: 'cours' as const,
    badge,
    description: lesson.description || 'Manuel officiel complet d\'anglais Première L & S.',
    lessonData: lesson
  };
});
