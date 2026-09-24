import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_PC_3EME,
  LESSON_2_PC_3EME,
  LESSON_3_PC_3EME
} from './courses_3eme_pc_part1';
import {
  LESSON_4_PC_3EME,
  LESSON_5_PC_3EME,
  LESSON_4_5_PC_3EME,
  LESSON_6_PC_3EME
} from './courses_3eme_pc_part2';
import {
  LESSON_7_PC_3EME,
  LESSON_8_PC_3EME,
  LESSON_9_PC_3EME,
  LESSON_8_9_PC_3EME
} from './courses_3eme_pc_part3';
import {
  LESSON_10_PC_3EME,
  LESSON_11_PC_3EME,
  LESSON_10_11_PC_3EME,
  LESSON_12_PC_3EME,
  LESSON_13_PC_3EME,
  LESSON_12_13_PC_3EME,
  LESSON_14_PC_3EME,
  LESSON_15_PC_3EME,
  LESSON_14_15_PC_3EME
} from './courses_3eme_pc_part4';

export {
  LESSON_1_PC_3EME,
  LESSON_2_PC_3EME,
  LESSON_3_PC_3EME,
  LESSON_4_PC_3EME,
  LESSON_5_PC_3EME,
  LESSON_4_5_PC_3EME,
  LESSON_6_PC_3EME,
  LESSON_7_PC_3EME,
  LESSON_8_PC_3EME,
  LESSON_9_PC_3EME,
  LESSON_8_9_PC_3EME,
  LESSON_10_PC_3EME,
  LESSON_11_PC_3EME,
  LESSON_10_11_PC_3EME,
  LESSON_12_PC_3EME,
  LESSON_13_PC_3EME,
  LESSON_12_13_PC_3EME,
  LESSON_14_PC_3EME,
  LESSON_15_PC_3EME,
  LESSON_14_15_PC_3EME
};

// =========================================================================
// THÈMES DE FILTRAGE POUR PHYSIQUE-CHIMIE 3ÈME (BFEM SÉNÉGAL)
// =========================================================================
export const PC_3EME_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '15' },
  { id: 'chimie-solutions', label: 'Chimie : Solutions & pH', count: '2' },
  { id: 'chimie-reactions', label: 'Chimie : Métaux, Eau & Alcanes', count: '4' },
  { id: 'physique-optique', label: 'Physique : Optique & Œil', count: '3' },
  { id: 'physique-mecanique', label: 'Physique : Forces, Poids & Travail', count: '4' },
  { id: 'physique-electricite', label: 'Physique : Électricité & Senelec', count: '2' }
];

// =========================================================================
// LISTE DES LEÇONS DE PHYSIQUE-CHIMIE (PC) — CLASSE DE 3ÈME
// =========================================================================
export const COURSES_PC_3EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // CHIMIE 3ÈME (PROGRAMME OFFICIEL BFEM SÉNÉGAL)
  // -----------------------------------------------------------------------
  {
    id: 'pc-3eme-lecon-1',
    title: 'LEÇON 1 : NOTION DE SOLUTION AQUEUSE (CHIMIE)',
    type: 'cours',
    badge: 'Chimie : Solutions & pH',
    description:
      'Soluté, solvant, saturation, concentration massique Cm = m/V, concentration molaire C = n/V, relation Cm = C × M, protocole opératoire précis de dissolution et de dilution (C₀V₀ = C₁V₁), Figure 1 et annales résolues du BFEM.',
    lessonData: LESSON_1_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-2',
    title: 'LEÇON 2 : ACIDES ET BASES (CHIMIE)',
    type: 'cours',
    badge: 'Chimie : Solutions & pH',
    description:
      'Échelle de pH de 0 à 14, ions H⁺ et OH⁻, indicateurs colorés (BBT, hélianthine, phénolphtaléine), réaction de neutralisation acido-basique exothermique H⁺ + OH⁻ ➔ H₂O, équivalence Ca·Va = Cb·Vb, règle de sécurité d\'ajout d\'acide dans l\'eau, Figure 2 et exercices résolus.',
    lessonData: LESSON_2_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-3',
    title: 'LEÇON 3 : PROPRIÉTÉS CHIMIQUES DE QUELQUES MÉTAUX (CHIMIE)',
    type: 'cours',
    badge: 'Chimie : Métaux, Eau & Alcanes',
    description:
      'Action de l\'acide chlorhydrique (HCl) sur le fer (Fe), le zinc (Zn) et inertie du cuivre (Cu), mise en évidence du dihydrogène H₂ par détonation (« pop »), identification des précipités d\'hydroxydes métalliques par la soude NaOH (Fe²⁺ vert, Fe³⁺ rouille, Cu²⁺ bleu, Zn²⁺ blanc), Figure 3 et annales BFEM.',
    lessonData: LESSON_3_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-4',
    title: 'LEÇON 4 : ANALYSE DE L\'EAU (ÉLECTROLYSE) (CHIMIE)',
    type: 'cours',
    badge: 'Chimie : Métaux, Eau & Alcanes',
    description:
      'Décomposition de l\'eau par électrolyse dans le voltamètre de Hofmann : dégagement de 2 volumes de dihydrogène H₂ à la cathode (test de la détonation) et 1 volume de dioxygène O₂ à l\'anode (test de la flamme vive), équation bilan 2H₂O ➔ 2H₂ + O₂, Figure 4 et calculs.',
    lessonData: LESSON_4_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-5',
    title: 'LEÇON 5 : SYNTHÈSE DE L\'EAU (EUDIOMÈTRE) (CHIMIE)',
    type: 'cours',
    badge: 'Chimie : Métaux, Eau & Alcanes',
    description:
      'Synthèse de l\'eau dans l\'eudiomètre de Volta par étincelle électrique, réaction explosive 2H₂ + O₂ ➔ 2H₂O, proportions stœchiométriques (rapport volumique 2:1), identification du réactif en excès et condensation de buée d\'eau liquide, calculs résolus du BFEM.',
    lessonData: LESSON_5_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-6',
    title: 'LEÇON 6 : LES HYDROCARBURES ET LES ALCANES (CHIMIE)',
    type: 'cours',
    badge: 'Chimie : Métaux, Eau & Alcanes',
    description:
      'Formule générale CₙH₂ₙ₊₂, les 4 premiers alcanes linéaires (méthane CH₄, éthane C₂H₆, propane C₃H₈, butane C₄H₁₀ du Sénégal), combustion complète (flamme bleue, CO₂ + H₂O) vs combustion incomplète (flamme jaune, suie noire C et monoxyde de carbone toxique CO), Figure 5 et bilan massique.',
    lessonData: LESSON_6_PC_3EME
  },

  // -----------------------------------------------------------------------
  // PHYSIQUE 3ÈME (PROGRAMME OFFICIEL BFEM SÉNÉGAL)
  // -----------------------------------------------------------------------
  {
    id: 'pc-3eme-lecon-7',
    title: 'LEÇON 7 : LES LENTILLES MINCES (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Optique & Œil',
    description:
      'Lentilles convergentes (bords minces) vs divergentes (bords épais), centre optique O, foyers F et F\', distance focale f, vergence C = 1/f en dioptries (δ), tracé géométrique d\'image avec les 3 rayons caractéristiques, image réelle vs virtuelle (effet loupe), Figure 6 et exercices du BFEM.',
    lessonData: LESSON_7_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-8',
    title: 'LEÇON 8 : DISPERSION DE LA LUMIÈRE BLANCHE (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Optique & Œil',
    description:
      'Décomposition de la lumière blanche par un prisme de verre ou un réseau : spectre continu des couleurs de l\'arc-en-ciel (ROJVBIV), réfraction différentielle (déviation minimale pour le rouge, maximale pour le violet), recomposition de la lumière blanche par le disque tournant de Newton.',
    lessonData: LESSON_8_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-9',
    title: 'LEÇON 9 : LE MODÈLE DE L\'ŒIL ET DÉFAUTS DE VISION (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Optique & Œil',
    description:
      'Modèle optique réduit de l\'œil (iris = diaphragme, cristallin = lentille convergente souple, rétine = écran récepteur), mécanisme de l\'accommodation, anomalies de la vue : myopie (œil trop convergent corrigé par une lentille divergente) et hypermétropie (corrigée par une lentille convergente), Figure 7.',
    lessonData: LESSON_9_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-10',
    title: 'LEÇON 10 : LES FORCES ET LEURS CARACTÉRISTIQUES (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Forces, Poids & Travail',
    description:
      'Effets statiques et dynamiques d\'une force, forces de contact et forces à distance, les 4 caractéristiques du vecteur-force F⃗ (point d\'application, droite d\'action, sens et intensité en Newtons N), mesure au dynamomètre à ressort et représentation à l\'échelle.',
    lessonData: LESSON_10_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-11',
    title: 'LEÇON 11 : POIDS ET MASSE D\'UN CORPS (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Forces, Poids & Travail',
    description:
      'Distinction fondamentale entre masse m (invariable, mesurée en kg à la balance) et poids P (force gravitationnelle verticale vers le bas, mesurée en N au dynamomètre), vérification expérimentale de la proportionnalité P = m × g (g ≈ 9,8 N/kg au Sénégal), Figure 8 et annales BFEM.',
    lessonData: LESSON_11_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-12',
    title: 'LEÇON 12 : ÉQUILIBRE D\'UN SOLIDE SOUMIS À DEUX FORCES (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Forces, Poids & Travail',
    description:
      'Principe fondamental d\'équilibre statique : F⃗₁ + F⃗₂ = 0⃗ (même droite d\'action, sens opposés, intensités égales F₁ = F₂), application au solide suspendu à un ressort élastique (T = k × ΔL = P), réaction normale du support, Figure 9 et exercices résolus.',
    lessonData: LESSON_12_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-13',
    title: 'LEÇON 13 : TRAVAIL ET PUISSANCE MÉCANIQUES (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Forces, Poids & Travail',
    description:
      'Travail d\'une force constante W = F × L (en Joules), travail moteur (W > 0), travail résistant (W < 0) et travail nul, travail du poids W(P⃗) = ± m·g·h indépendant de la trajectoire, puissance mécanique P = W/t en Watts (et P = F × v), exercices types du BFEM.',
    lessonData: LESSON_13_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-14',
    title: 'LEÇON 14 : LE COURANT ALTERNATIF ET L\'OSCILLOSCOPE (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Électricité & Senelec',
    description:
      'Étude oscilloscopique d\'une tension alternative sinusoïdale : période T (en s) et fréquence f = 1/T (f = 50 Hz au Sénégal), tension maximale crête Umax = Y × S_v et tension efficace Ueff mesurée au voltmètre AC, relation fondamentale Umax = Ueff × √2, Figure 10.',
    lessonData: LESSON_14_PC_3EME
  },
  {
    id: 'pc-3eme-lecon-15',
    title: 'LEÇON 15 : PUISSANCE, ÉNERGIE ET SÉCURITÉ ÉLECTRIQUE (PHYSIQUE)',
    type: 'cours',
    badge: 'Physique : Électricité & Senelec',
    description:
      'Puissance électrique P = Ueff × Ieff (en Watts), énergie électrique consommée E = P × t (en Joules et kilowatt-heures kWh, avec 1 kWh = 3,6 × 10⁶ J), méthode complète de calcul de la facture Senelec (HT, TVA 18%, TTC), et sécurité domestique (Phase, Neutre, Terre, disjoncteur différentiel 30 mA).',
    lessonData: LESSON_15_PC_3EME
  }
];
