// =========================================================================
// INDEX CENTRAL DES COURS D'ANGLAIS TERMINALE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// Manuel complet : 6 Parties, 18 Modules Exhaustifs & Préparation Bac
// =========================================================================

import { ContentData } from './courses';
import { COURSES_ANGLAIS_TLE_PART1 } from './courses_tle_anglais_part1';
import { COURSES_ANGLAIS_TLE_PART2 } from './courses_tle_anglais_part2';
import { COURSES_ANGLAIS_TLE_PART3 } from './courses_tle_anglais_part3';

export const ANGLAIS_TLE_PARTS = [
  { id: 'all', label: 'Tous les 18 Modules du Bac', count: '18' },
  { id: 'grammar', label: 'Partie 1 • Masterclass Grammaire & Temps (Mod. 1-6)', count: '6' },
  { id: 'themes', label: 'Partie 2 • Les 30 Thèmes Majeurs du Bac (Mod. 7-12)', count: '6' },
  { id: 'phonology', label: 'Partie 3 • Phonologie & Accent Tonique (Mod. 13)', count: '1' },
  { id: 'methodology', label: 'Partie 4 • Méthodologie, Transformations & Bac Blanc (Mod. 14-18)', count: '5' }
];

export const ALL_COURSES_ANGLAIS_TLE = [
  ...COURSES_ANGLAIS_TLE_PART1,
  ...COURSES_ANGLAIS_TLE_PART2,
  ...COURSES_ANGLAIS_TLE_PART3
];

export const COURSES_ANGLAIS_TLE: ContentData[] = ALL_COURSES_ANGLAIS_TLE.map((lesson, idx) => {
  let badge = 'Partie 1 • Grammaire du Bac';
  if (idx >= 6 && idx <= 11) {
    badge = 'Partie 2 • Thématiques & Vocabulaire';
  } else if (idx === 12) {
    badge = 'Partie 3 • Phonologie & Prononciation';
  } else if (idx >= 13) {
    badge = 'Partie 4 • Épreuves & Méthodologie Bac';
  }

  return {
    id: lesson.id,
    title: lesson.title.toUpperCase(),
    type: 'cours' as const,
    badge,
    description: lesson.description || 'Manuel officiel complet d\'anglais Terminale L & S - Préparation intensive au Baccalauréat.',
    lessonData: lesson
  };
});
