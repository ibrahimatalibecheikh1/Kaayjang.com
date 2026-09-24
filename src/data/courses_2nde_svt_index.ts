import { ContentData, LessonContent } from './courses';
import {
  LESSON_INTRO_SVT_2NDE,
  LESSON_1_SVT_2NDE,
  LESSON_2_SVT_2NDE,
  LESSON_3_SVT_2NDE
} from './courses_2nde_svt_part1';
import {
  LESSON_4_SVT_2NDE,
  LESSON_5_SVT_2NDE,
  LESSON_6_SVT_2NDE
} from './courses_2nde_svt_part2';
import {
  LESSON_7_SVT_2NDE,
  LESSON_8_SVT_2NDE,
  LESSON_9_SVT_2NDE,
  LESSON_10_SVT_2NDE
} from './courses_2nde_svt_part3';

export {
  LESSON_INTRO_SVT_2NDE,
  LESSON_1_SVT_2NDE,
  LESSON_2_SVT_2NDE,
  LESSON_3_SVT_2NDE,
  LESSON_4_SVT_2NDE,
  LESSON_5_SVT_2NDE,
  LESSON_6_SVT_2NDE,
  LESSON_7_SVT_2NDE,
  LESSON_8_SVT_2NDE,
  LESSON_9_SVT_2NDE,
  LESSON_10_SVT_2NDE
};

// =========================================================================
// THÈMES DE FILTRAGE POUR SVT SECONDE S (SÉNÉGAL)
// =========================================================================
export const SVT_2NDE_FILTER_THEMES = [
  { id: 'all', label: 'Toutes les leçons', count: '11' },
  { id: 'ecologie-fondamentale', label: 'Écologie Fondamentale', count: '4' },
  { id: 'ressources-naturelles', label: 'Ressources Naturelles & Gestion', count: '3' },
  { id: 'amenagement-espace', label: 'Aménagement de l\'Espace', count: '2' },
  { id: 'espece-evolution', label: 'Espèce, Variation & Évolution', count: '2' }
];

// =========================================================================
// LISTE DES LEÇONS DE SVT — CLASSE DE SECONDE S (LYCÉE)
// =========================================================================
export const COURSES_SVT_2NDE: ContentData[] = [
  // -----------------------------------------------------------------------
  // NOTIONS FONDAMENTALES DE L'ÉCOLOGIE
  // -----------------------------------------------------------------------
  {
    id: 'svt-2ndes-lecon-intro',
    title: 'INTRODUCTION & MÉTHODOLOGIE : L\'ÉCOLOGIE ET LA SORTIE ÉCOLOGIQUE',
    type: 'cours',
    badge: 'Écologie Fondamentale',
    description:
      'Définition et étymologie d\'Ernst Haeckel, autoécologie, synécologie, démoécologie, méthodologie de terrain, aire minimale floristique, transect de végétation, psychromètre, luxmètre et confection de l\'herbier scientifique.',
    lessonData: LESSON_INTRO_SVT_2NDE
  },
  {
    id: 'svt-2ndes-lecon-1',
    title: 'LEÇON 1 : STRUCTURE D\'UN ÉCOSYSTÈME',
    type: 'cours',
    badge: 'Écologie Fondamentale',
    description:
      'Biotope, biocénose (zoocénose, phytocénose), stratification verticale végétale (arborescente, arbustive, herbacée, muscinale), organisation horizontale, calcul de fréquence et indices I à V de Du Rietz, indice de similarité de Sørensen, dominance et niche écologique.',
    lessonData: LESSON_1_SVT_2NDE
  },
  {
    id: 'svt-2ndes-lecon-2',
    title: 'LEÇON 2 : LE FONCTIONNEMENT ET L\'ÉVOLUTION DE L\'ÉCOSYSTÈME',
    type: 'cours',
    badge: 'Écologie Fondamentale',
    description:
      'Facteurs abiotiques : température (homéothermes vs poïkilothermes), lumière, indice de Martonne (Ia), indice de Gaussen (P < 2T), quotient d\'Emberger (Q), perméabilité de Darcy K, porosité P%, relations biotiques (symbiose, mutualisme, commensalisme, amensalisme, prédation, parasitisme), chaînes et réseaux trophiques, PPB, PPN, pyramides écologiques et climax.',
    lessonData: LESSON_2_SVT_2NDE
  },
  {
    id: 'svt-2ndes-lecon-3',
    title: 'LEÇON 3 : DIVERSITÉ ET RÉPARTITION DES ÉCOSYSTÈMES AU SÉNÉGAL',
    type: 'cours',
    badge: 'Écologie Fondamentale',
    description:
      'Gradient climatique Nord-Sud au Sénégal : forêt dense humide de Basse-Casamance, savanes arborées du Niokolo-Koba, steppes sahéliennes du Ferlo, désert et dunes de Lompoul, mangroves du Saloum et de Casamance (Rhizophora et Avicennia), fleuves et services écosystémiques.',
    lessonData: LESSON_3_SVT_2NDE
  },

  // -----------------------------------------------------------------------
  // LES RESSOURCES NATURELLES ET LEUR GESTION
  // -----------------------------------------------------------------------
  {
    id: 'svt-2ndes-lecon-4',
    title: 'LEÇON 4 : LES SOLS (CONSTITUANTS, FORMATION ET GESTION)',
    type: 'cours',
    badge: 'Ressources Naturelles & Gestion',
    description:
      'Fractions minérale, organique (litière, humus), complexe argilo-humique (CAH), solution et atmosphère du sol, édaphon, pédogenèse et horizons A0, A1, A2, B, C. Typologie au Sénégal : sols Dior, Deck, ferrallitiques rouges et tannes salés. Restauration par cordons pierreux, Zaï et agroforesterie (Faidherbia albida).',
    lessonData: LESSON_4_SVT_2NDE
  },
  {
    id: 'svt-2ndes-lecon-5',
    title: 'LEÇON 5 : L\'EAU (RESSOURCES HYDROLOGIQUES ET GIRE AU SÉNÉGAL)',
    type: 'cours',
    badge: 'Ressources Naturelles & Gestion',
    description:
      'Potentiel hydrique : fleuves Sénégal (barrages de Diama et Manantali), Gambie, Saloum, Casamance, Lac de Guiers (adduction KMS 1-2-3 vers Dakar), nappes phréatiques des Niayes, Continental Terminal et nappe profonde du Maestrichtien. Menaces de salinisation, prolifération du Typha australis, usine de dessalement des Mamelles et station d\'épuration de Cambérène.',
    lessonData: LESSON_5_SVT_2NDE
  },
  {
    id: 'svt-2ndes-lecon-6',
    title: 'LEÇON 6 : L\'ÉNERGIE (FOSSILES, RENOUVELABLES ET TRANSITION)',
    type: 'cours',
    badge: 'Ressources Naturelles & Gestion',
    description:
      'Définitions et unités énergétiques. Énergies fossiles : pétrole offshore de Sangomar (FPSO Léopold Sédar Senghor) et gaz naturel de GTA. Énergies renouvelables : centrales solaires de Bokhol et Méouane, parc éolien de Taïba Ndiaye (158 MW), hydroélectricité de Manantali. Stratégie Gas-to-Power et mix énergétique.',
    lessonData: LESSON_6_SVT_2NDE
  },

  // -----------------------------------------------------------------------
  // AMÉNAGEMENT DE L'ESPACE
  // -----------------------------------------------------------------------
  {
    id: 'svt-2ndes-lecon-7',
    title: 'LEÇON 7 : L\'ESPACE URBAIN',
    type: 'cours',
    badge: 'Aménagement de l\'Espace',
    description:
      'Urbanisation accélérée et hypercéphalie dakaroise. Crises environnementales : décharge de Mbeubeuss (lixiviat, fumées), inondations récurrentes en banlieue (Keur Massar, Pikine), pollution automobile. Rénovation : pôle urbain de Diamniadio, TER, BRT électrique, projet PROGEP et dépollution de la Baie de Hann.',
    lessonData: LESSON_7_SVT_2NDE
  },
  {
    id: 'svt-2ndes-lecon-8',
    title: 'LEÇON 8 : L\'ESPACE RURAL',
    type: 'cours',
    badge: 'Aménagement de l\'Espace',
    description:
      'Organisation spatiale du terroir villageois sénégalais (concessions, champs de case, champs de terroir externe, brousse pastorale). Freins : enclavement, corvée d\'eau, manque d\'électricité, exode rural. Solutions : Programme d\'Urgence de Développement Communautaire (PUDC), pistes rurales, forages solaires et DAC.',
    lessonData: LESSON_8_SVT_2NDE
  },

  // -----------------------------------------------------------------------
  // L'ESPÈCE - LA VARIATION - L'ÉVOLUTION
  // -----------------------------------------------------------------------
  {
    id: 'svt-2ndes-lecon-9',
    title: 'LEÇON 9 : L\'ESPÈCE ET LA VARIATION',
    type: 'cours',
    badge: 'Espèce, Variation & Évolution',
    description:
      'Critères de l\'espèce (interfécondité féconde vs stérilité du mulet, morphologique, caryotypique). Variations qualitatives et quantitatives continues. Biométrie : moyenne arithmétique, mode, médiane, variance, écart-type, coefficient de variation K de Pearson, polygone de Gauss. Déterminisme : variations somatiques de milieu vs génétiques, expérience historique de Johannsen sur les lignées pures de haricot.',
    lessonData: LESSON_9_SVT_2NDE
  },
  {
    id: 'svt-2ndes-lecon-10',
    title: 'LEÇON 10 : L\'ÉVOLUTION DES ÊTRES VIVANTS',
    type: 'cours',
    badge: 'Espèce, Variation & Évolution',
    description:
      'Preuves scientifiques de l\'évolution : fossiles (Archaeopteryx, lignée du cheval), organes homologues (membre antérieur des tétrapodes), organes analogues, organes vestigiaux (appendice, coccyx, bassin baleine), embryologie de Haeckel, comparaison de l\'hémoglobine et code génétique universel. Théories : fixisme, lamarckisme (réfuté), darwinisme (sélection naturelle), mutationnisme de De Vries et Théorie Synthétique de l\'Évolution (néodarwinisme).',
    lessonData: LESSON_10_SVT_2NDE
  }
];
