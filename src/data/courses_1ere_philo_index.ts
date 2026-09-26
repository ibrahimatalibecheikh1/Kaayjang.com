// =========================================================================
// INDEX CENTRAL DES COURS DE PHILOSOPHIE CLASSE DE PREMIÈRE (SÉRIES L & S)
// Conforme au programme officiel de l'Office du Baccalauréat de la République du Sénégal
// 8 chapitres et modules exhaustifs sans résumé, grands axes en chiffres romains et conclusions
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_PHILO_1ERE,
  LESSON_2_PHILO_1ERE
} from './courses_1ere_philo_part1';

import {
  LESSON_3_PHILO_1ERE,
  LESSON_4_PHILO_1ERE,
  LESSON_5_PHILO_1ERE
} from './courses_1ere_philo_part2';

import {
  LESSON_6_PHILO_1ERE,
  LESSON_7_PHILO_1ERE,
  LESSON_8_PHILO_1ERE
} from './courses_1ere_philo_part3';

export {
  LESSON_1_PHILO_1ERE, LESSON_2_PHILO_1ERE, LESSON_3_PHILO_1ERE, LESSON_4_PHILO_1ERE,
  LESSON_5_PHILO_1ERE, LESSON_6_PHILO_1ERE, LESSON_7_PHILO_1ERE, LESSON_8_PHILO_1ERE
};

export const PHILOSOPHIE_1ERE_PARTS = [
  { id: 'all', label: 'Toutes les leçons (8 chapitres)', count: '8' },
  { id: 'part-1', label: 'Partie 1 • Origines & Spécificité (Ch 1)', count: '1' },
  { id: 'part-2', label: 'Partie 2 • Grandes Interrogations (Ch 2-3)', count: '2' },
  { id: 'part-3', label: 'Partie 3 • Enjeux & Philosophie Africaine (Ch 4-5)', count: '2' },
  { id: 'part-4', label: 'Partie 4 • Méthodologie & Sujets du Bac (Ch 6-8)', count: '3' }
];

export const COURSES_PHILOSOPHIE_1ERE: ContentData[] = [
  // --- PARTIE 1 : ORIGINES ET SPÉCIFICITÉ DE LA RÉFLEXION PHILOSOPHIQUE ---
  {
    id: 'philo-1ere-cours-1',
    title: 'CHAPITRE 1 : LES ORIGINES ET LA SPÉCIFICITÉ DE LA RÉFLEXION PHILOSOPHIQUE',
    type: 'cours',
    badge: 'Partie 1 • Origines & Spécificité',
    description: 'Sens étymologique (philein / sophia), le passage historique du mythe au logos chez les présocratiques, opposition de la doxa à l\'épistémè (Allégorie de la Caverne de Platon), rapports avec la science, la religion et le sens commun, étonnement et doute méthodique cartésien.',
    lessonData: LESSON_1_PHILO_1ERE
  },

  // --- PARTIE 2 : LES GRANDES INTERROGATIONS PHILOSOPHIQUES ---
  {
    id: 'philo-1ere-cours-2',
    title: 'CHAPITRE 2 : LES GRANDES INTERROGATIONS (ANTHROPOLOGIE, CONSCIENCE ET LIBERTÉ)',
    type: 'cours',
    badge: 'Partie 2 • Grandes Interrogations',
    description: 'Qu\'est-ce que l\'homme ? Nature versus culture (Lévi-Strauss), perfectibilité (Rousseau), existentialisme (Sartre). Conscience cartésienne et inconscient freudien (Ça, Moi, Surmoi). Libre arbitre face au déterminisme universel (Spinoza, Kant). Paradoxes du désir (Platon, Épicure, Schopenhauer).',
    lessonData: LESSON_2_PHILO_1ERE
  },
  {
    id: 'philo-1ere-cours-3',
    title: 'CHAPITRE 3 : LES GRANDES INTERROGATIONS (VÉRITÉ, JUSTICE, BONHEUR ET MORT)',
    type: 'cours',
    badge: 'Partie 2 • Grandes Interrogations',
    description: 'Critères de la vérité et obstacles épistémologiques (Bachelard). Droit positif vs Droit naturel (Antigone), équité aristotélicienne et contrat social républicain (Rousseau). Le bonheur comme souverain bien (Aristote, Épictète) face au devoir moral kantien. Finitude humaine, Épicure, Heidegger et la révolte de Camus.',
    lessonData: LESSON_3_PHILO_1ERE
  },

  // --- PARTIE 3 : ENJEUX, FINALITÉS ET PHILOSOPHIE AFRICAINE ---
  {
    id: 'philo-1ere-cours-4',
    title: 'CHAPITRE 4 : LES ENJEUX, FINALITÉS ET PERSPECTIVES DE LA PHILOSOPHIE',
    type: 'cours',
    badge: 'Partie 3 • Enjeux & Philo Africaine',
    description: 'La quête désintéressée de la vérité contre le relativisme sophistique, le développement salutaire de l\'esprit critique à l\'ère des réseaux sociaux, l\'autonomie intellectuelle (« Sapere aude ! » de Kant), la philosophie dans la cité démocratique (Habermas) et la tension système vs quête ouverte.',
    lessonData: LESSON_4_PHILO_1ERE
  },
  {
    id: 'philo-1ere-cours-5',
    title: 'CHAPITRE 5 : L\'IDÉE D\'UNE PHILOSOPHIE AFRICAINE : DÉBATS ET PERSPECTIVES',
    type: 'cours',
    badge: 'Partie 3 • Enjeux & Philo Africaine',
    description: 'Le déni colonial de la rationalité nègre (Hegel, Lévy-Bruhl), La Philosophie bantoue de Tempels, la critique féroce de l\'ethnophilosophie par Paulin Hountondji et Marcien Towa, la vérité historique de Cheikh Anta Diop et les perspectives contemporaines de Souleymane Bachir Diagne et Kwasi Wiredu.',
    lessonData: LESSON_5_PHILO_1ERE
  },

  // --- PARTIE 4 : MÉTHODOLOGIE ET SUJETS DU BACCALAURÉAT ---
  {
    id: 'philo-1ere-cours-6',
    title: 'CHAPITRE 6 : MÉTHODOLOGIE DE LA DISSERTATION PHILOSOPHIQUE',
    type: 'cours',
    badge: 'Partie 4 • Méthodologie & Sujets Bac',
    description: 'Méthodologie complète de l\'épreuve reine : analyse notionnelle, débusquage du présupposé, problématisation dialectique, construction de l\'introduction, structure A.E.I. du paragraphe, conclusion et sujet intégralement traité (« La conscience suffit-elle à faire de l\'homme un être libre ? »).',
    lessonData: LESSON_6_PHILO_1ERE
  },
  {
    id: 'philo-1ere-cours-7',
    title: 'CHAPITRE 7 : MÉTHODOLOGIE DU COMMENTAIRE DE TEXTE PHILOSOPHIQUE',
    type: 'cours',
    badge: 'Partie 4 • Méthodologie & Sujets Bac',
    description: 'Méthodologie intégrale de l\'explication philosophique : identification du triptyque Thème-Thèse-Problème, repérage des mouvements argumentatifs, explication conceptuelle rigoureuse sans paraphrase, conduite de la discussion critique sur la portée et les limites de la thèse.',
    lessonData: LESSON_7_PHILO_1ERE
  },
  {
    id: 'philo-1ere-cours-8',
    title: 'CHAPITRE 8 : EXERCICES D\'ENTRAÎNEMENT, SUJETS DU BACCALAURÉAT ET CORPUS BIBLIOGRAPHIQUE',
    type: 'cours',
    badge: 'Partie 4 • Méthodologie & Sujets Bac',
    description: 'Sept dissertations types du Baccalauréat sénégalais problématisées avec leurs plans détaillés, cinq questions d\'explication conceptuelle avec corrigés types, et corpus bibliographique des vingt auteurs de référence officiels au Sénégal.',
    lessonData: LESSON_8_PHILO_1ERE
  }
];
