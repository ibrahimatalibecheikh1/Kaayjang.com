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
import {
  COURSES_ANGLAIS_2NDE_PART3
} from './courses_2nde_anglais_part3';

export const ANGLAIS_2NDE_PARTS = [
  { id: 'all', label: 'Toutes les Units & Modules', count: '14' },
  { id: 'part1', label: 'Partie 1 • Thèmes de société & Société', count: '4' },
  { id: 'part2', label: 'Partie 2 • Tech, Culture, Droits & Carrières', count: '4' },
  { id: 'tenses', label: 'Partie 3 • Conjugaison & Tous les temps', count: '2' },
  { id: 'quantifiers', label: 'Partie 4 • Quantifieurs & Déterminants', count: '1' },
  { id: 'modals', label: 'Partie 5 • Auxiliaires modaux & Passé', count: '1' },
  { id: 'grammar', label: 'Partie 6 • Passif, Discours rapporté & Relatives', count: '1' },
  { id: 'spelling', label: 'Partie 7 • Orthographe, Règles & Verbes irréguliers', count: '1' }
];

export const COURSES_ANGLAIS_2NDE: ContentData[] = [
  ...COURSES_ANGLAIS_2NDE_PART1.map((lesson, idx) => ({
    id: `anglais-2nde-cours-0{idx + 1}`,
    title: lesson.title.toUpperCase(),
    type: 'cours' as const,
    badge: 'Units 1-4 • Thèmes de société',
    description: lesson.description || 'Comprehensive official English curriculum for Seconde L & S.',
    lessonData: lesson
  })),
  ...COURSES_ANGLAIS_2NDE_PART2.map((lesson, idx) => ({
    id: `anglais-2nde-cours-0{idx + 5}`,
    title: lesson.title.toUpperCase(),
    type: 'cours' as const,
    badge: 'Units 5-8 • Tech, Droits & Emploi',
    description: lesson.description || 'Comprehensive official English curriculum for Seconde L & S.',
    lessonData: lesson
  })),
  ...COURSES_ANGLAIS_2NDE_PART3.map((lesson, idx) => {
    let badge = 'Grammar & Linguistic Mastery';
    if (idx === 0 || idx === 1) badge = 'Conjugaison • Tous les temps';
    else if (idx === 2) badge = 'Quantifieurs • Noms & Déterminants';
    else if (idx === 3) badge = 'Modaux • Auxiliaires & Modal Perfects';
    else if (idx === 4) badge = 'Grammaire • Passif, Style & Relatives';
    else if (idx === 5) badge = 'Orthographe • Règles & Verbes irréguliers';

    return {
      id: `anglais-2nde-cours-{idx + 9 < 10 ? '0' : ''}{idx + 9}`,
      title: lesson.title.toUpperCase(),
      type: 'cours' as const,
      badge,
      description: lesson.description || 'Comprehensive linguistic and grammatical mastery for Seconde L & S.',
      lessonData: lesson
    };
  })
];
