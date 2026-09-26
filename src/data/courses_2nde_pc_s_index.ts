// =========================================================================
// INDEX CENTRAL DES COURS DE PHYSIQUE-CHIMIE CLASSE DE SECONDE S (SÉNÉGAL)
// Conforme au document officiel "Physique Chimie 2nde S Sénégal - Cours Complet"
// Cours intégraux sans résumé, démonstrations rigoureuses et figures obligatoires
// =========================================================================

import { ContentData, LessonContent } from './courses';
import {
  LESSON_P1_SECONDE_S,
  LESSON_P2_SECONDE_S,
  LESSON_P3_SECONDE_S,
  LESSON_P4_SECONDE_S,
  LESSON_P5_SECONDE_S,
  LESSON_P6_SECONDE_S,
  LESSON_P7_SECONDE_S
} from './courses_2nde_pc_s_part1';

import {
  LESSON_P8_SECONDE_S,
  LESSON_P9_SECONDE_S,
  LESSON_P10_SECONDE_S,
  LESSON_P11_SECONDE_S,
  LESSON_P12_SECONDE_S
} from './courses_2nde_pc_s_part2';

import {
  LESSON_P13_SECONDE_S,
  LESSON_P14_SECONDE_S,
  LESSON_P15_SECONDE_S,
  LESSON_C1_SECONDE_S,
  LESSON_C2_SECONDE_S,
  LESSON_C3_SECONDE_S,
  LESSON_C4_SECONDE_S,
  LESSON_C5_SECONDE_S
} from './courses_2nde_pc_s_part3';

import {
  LESSON_C6_SECONDE_S,
  LESSON_C7_SECONDE_S,
  LESSON_C8_SECONDE_S,
  LESSON_C9_SECONDE_S,
  LESSON_C10_SECONDE_S,
  LESSON_ANNEXE_PC_SECONDE_S
} from './courses_2nde_pc_s_part4';

export {
  LESSON_P1_SECONDE_S, LESSON_P2_SECONDE_S, LESSON_P3_SECONDE_S, LESSON_P4_SECONDE_S,
  LESSON_P5_SECONDE_S, LESSON_P6_SECONDE_S, LESSON_P7_SECONDE_S,
  LESSON_P8_SECONDE_S, LESSON_P9_SECONDE_S, LESSON_P10_SECONDE_S, LESSON_P11_SECONDE_S, LESSON_P12_SECONDE_S,
  LESSON_P13_SECONDE_S, LESSON_P14_SECONDE_S, LESSON_P15_SECONDE_S,
  LESSON_C1_SECONDE_S, LESSON_C2_SECONDE_S, LESSON_C3_SECONDE_S, LESSON_C4_SECONDE_S, LESSON_C5_SECONDE_S,
  LESSON_C6_SECONDE_S, LESSON_C7_SECONDE_S, LESSON_C8_SECONDE_S, LESSON_C9_SECONDE_S, LESSON_C10_SECONDE_S,
  LESSON_ANNEXE_PC_SECONDE_S
};

export const PC_2NDE_S_PARTS = [
  { id: 'all', label: 'Toutes les leçons (26 chapitres)', count: '26' },
  { id: 'part-1', label: 'Partie 1 • Électricité & Électronique (P1-P7)', count: '7' },
  { id: 'part-2', label: 'Partie 2 • Mécanique & Équilibre (P8-P12)', count: '5' },
  { id: 'part-3', label: 'Partie 3 • Optique géométrique (P13-P15)', count: '3' },
  { id: 'part-4', label: 'Partie 4 • Structure de la Matière (C1-C5)', count: '5' },
  { id: 'part-5', label: 'Partie 5 • Réactions & Solutions Aqueuses (C6-C10)', count: '6' }
];

export const COURSES_PC_2NDE_S: ContentData[] = [
  // --- PARTIE 1 : ÉLECTRICITÉ & ÉLECTRONIQUE (P1 - P7) ---
  {
    id: 'pc-2nde-s-cours-p1',
    title: 'CHAPITRE P1 : ÉLECTRISATION PAR FROTTEMENT, CONTACT ET INFLUENCE',
    type: 'cours',
    badge: 'Partie 1 • Électricité & Électronique',
    description: 'Structure de l\'atome, charges élémentaires e = 1,602.10⁻¹⁹ C, électrisation par frottement, contact et influence, loi d\'interaction électrostatique et électroscope à feuilles.',
    lessonData: LESSON_P1_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p2',
    title: 'CHAPITRE P2 : LE COURANT ÉLECTRIQUE DANS LES CONDUCTEURS',
    type: 'cours',
    badge: 'Partie 1 • Électricité & Électronique',
    description: 'Nature des porteurs de charge (électrons libres dans les métaux, ions en solution), sens conventionnel vs déplacement réel, effets thermique, magnétique, chimique et lumineux.',
    lessonData: LESSON_P2_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p3',
    title: 'CHAPITRE P3 : INTENSITÉ DU COURANT ÉLECTRIQUE ET MESURE',
    type: 'cours',
    badge: 'Partie 1 • Électricité & Électronique',
    description: 'Définition I = Δq/Δt, mesure par ampèremètre en série, calibre, graduation et incertitudes, loi d\'unicité dans un circuit série et loi des nœuds de Kirchhoff.',
    lessonData: LESSON_P3_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p4',
    title: 'CHAPITRE P4 : TENSION ÉLECTRIQUE, LOI D\'ADDITIVITÉ ET MESURE',
    type: 'cours',
    badge: 'Partie 1 • Électricité & Électronique',
    description: 'Différence de potentiel UAB = VA - VB, mesure au voltmètre en dérivation, loi d\'additivité des tensions (loi des mailles), et visualisation de signaux à l\'oscilloscope.',
    lessonData: LESSON_P4_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p5',
    title: 'CHAPITRE P5 : ÉTUDE DE DIPÔLES PASSIFS : CONDUCTEURS OHMIQUES ET DIODES',
    type: 'cours',
    badge: 'Partie 1 • Électricité & Électronique',
    description: 'Caractéristique courant-tension U = f(I), loi d\'Ohm U = R.I, résistance équivalente série et parallèle, effet Joule P = R.I², et propriétés de la diode à jonction et DEL.',
    lessonData: LESSON_P5_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p6',
    title: 'CHAPITRE P6 : ÉTUDE DE DIPÔLES ACTIFS : GÉNÉRATEURS ET RÉCEPTEURS',
    type: 'cours',
    badge: 'Partie 1 • Électricité & Électronique',
    description: 'Caractéristique linéaire des générateurs U = E - r.I, récepteurs U\' = E\' + r\'.I, bilan des puissances électriques et loi de Pouillet pour les circuits en boucle simple.',
    lessonData: LESSON_P6_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p7',
    title: 'CHAPITRE P7 : L\'AMPLIFICATEUR OPÉRATIONNEL (AOP) EN RÉGIMES LINÉAIRE ET NON-LINÉAIRE',
    type: 'cours',
    badge: 'Partie 1 • Électricité & Électronique',
    description: 'Brochage et alimentation symétrique, régime linéaire (rétroaction négative, ε = 0, montages suiveur, inverseur, non-inverseur) et régime saturé (comparateur à un seuil).',
    lessonData: LESSON_P7_SECONDE_S
  },

  // --- PARTIE 2 : MÉCANIQUE & ÉQUILIBRE (P8 - P12) ---
  {
    id: 'pc-2nde-s-cours-p8',
    title: 'CHAPITRE P8 : DESCRIPTION DU MOUVEMENT ET RELATIVITÉ',
    type: 'cours',
    badge: 'Partie 2 • Mécanique & Équilibre',
    description: 'Nécessité du référentiel (terrestre, géocentrique, héliocentrique), notion de trajectoire, vecteur vitesse instantanée, et étude cinématique du mouvement rectiligne uniforme (MRU).',
    lessonData: LESSON_P8_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p9',
    title: 'CHAPITRE P9 : NOTION DE FORCE ET ACTIONS MÉCANIQUES',
    type: 'cours',
    badge: 'Partie 2 • Mécanique & Équilibre',
    description: 'Actions de contact vs actions à distance, vecteur force (point d\'application, direction, sens, intensité en Newtons), mesure au dynamomètre, et principe des actions réciproques.',
    lessonData: LESSON_P9_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p10',
    title: 'CHAPITRE P10 : LE POIDS D\'UN CORPS ET LA MASSE',
    type: 'cours',
    badge: 'Partie 2 • Mécanique & Équilibre',
    description: 'Définition du vecteur poids P = m.g, distinction rigoureuse entre masse invariante et poids variable avec la latitude/altitude, et loi de la gravitation universelle de Newton.',
    lessonData: LESSON_P10_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p11',
    title: 'CHAPITRE P11 : ÉQUILIBRE D\'UN SOLIDE SOUMIS À DEUX OU TROIS FORCES NON PARALLÈLES',
    type: 'cours',
    badge: 'Partie 2 • Mécanique & Équilibre',
    description: 'Première condition d\'équilibre vectorielle Σ Fext = 0, coplanarité et concourance de trois forces, méthode graphique du dynamique fermé et méthode analytique par projections.',
    lessonData: LESSON_P11_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p12',
    title: 'CHAPITRE P12 : ÉQUILIBRE D\'UN SOLIDE MOBILE AUTOUR D\'UN AXE FIXE (THÉORÈME DES MOMENTS)',
    type: 'cours',
    badge: 'Partie 2 • Mécanique & Équilibre',
    description: 'Moment d\'une force par rapport à un axe MΔ(F) = ± F.d, bras de levier d, théorème des moments Σ MΔ(Fext) = 0, et couple de forces avec applications au treuil et au levier.',
    lessonData: LESSON_P12_SECONDE_S
  },

  // --- PARTIE 3 : OPTIQUE GÉOMÉTRIQUE (P13 - P15) ---
  {
    id: 'pc-2nde-s-cours-p13',
    title: 'CHAPITRE P13 : PROPAGATION RECTILIGNE DE LA LUMIÈRE ET OMBRES',
    type: 'cours',
    badge: 'Partie 3 • Optique géométrique',
    description: 'Sources primaires et objets diffusants, principe de propagation rectiligne dans un milieu transparent homogène et isotrope, formation des ombres propre/portée et éclipses.',
    lessonData: LESSON_P13_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p14',
    title: 'CHAPITRE P14 : RÉFLEXION ET RÉFRACTION DE LA LUMIÈRE (LOIS DE SNELL-DESCARTES)',
    type: 'cours',
    badge: 'Partie 3 • Optique géométrique',
    description: 'Loi de la réflexion r = i, lois de la réfraction de Snell-Descartes n₁·sin(i₁) = n₂·sin(i₂), indice de réfraction absolu, angle limite de réfraction et réflexion totale interne.',
    lessonData: LESSON_P14_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-p15',
    title: 'CHAPITRE P15 : DISPERSION DE LA LUMIÈRE ET SPECTRES LUMINEUX',
    type: 'cours',
    badge: 'Partie 3 • Optique géométrique',
    description: 'Phénomène de dispersion par le prisme, déviation en fonction de la longueur d\'onde λ, spectre continu d\'émission thermique, spectres de raies caractéristiques et formation de l\'arc-en-ciel.',
    lessonData: LESSON_P15_SECONDE_S
  },

  // --- PARTIE 4 : STRUCTURE DE LA MATIÈRE (C1 - C5) ---
  {
    id: 'pc-2nde-s-cours-c1',
    title: 'CHAPITRE C1 : MÉLANGES ET CORPS PURS',
    type: 'cours',
    badge: 'Partie 4 • Structure de la Matière',
    description: 'Mélanges homogènes vs hétérogènes, critères de pureté physique (températures de fusion/ébullition, masse volumique), techniques de séparation (filtration, décantation, distillation).',
    lessonData: LESSON_C1_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c2',
    title: 'CHAPITRE C2 : L\'ÉLÉMENT CHIMIQUE ET SA CONSERVATION',
    type: 'cours',
    badge: 'Partie 4 • Structure de la Matière',
    description: 'Définition moderne de l\'élément chimique (numéro atomique Z), symbolisme universel, cycle du cuivre mettant en évidence la conservation absolue des éléments dans les transformations.',
    lessonData: LESSON_C2_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c3',
    title: 'CHAPITRE C3 : STRUCTURE DE L\'ATOME ET TABLEAU PÉRIODIQUE',
    type: 'cours',
    badge: 'Partie 4 • Structure de la Matière',
    description: 'Noyau (protons + neutrons) et cortège électronique, symbolisme notation A-Z-X, couches électroniques (K, L, M) selon le modèle de Bohr, isotopes et tableau périodique de Mendeleïev.',
    lessonData: LESSON_C3_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c4',
    title: 'CHAPITRE C4 : LES LIAISONS CHIMIQUES ET LES MOLÉCULES',
    type: 'cours',
    badge: 'Partie 4 • Structure de la Matière',
    description: 'Règles de stabilité du duet et de l\'octet, liaison covalente simple, double et triple, représentation de Lewis des atomes et molécules, doublets liants et non liants, et liaison ionique.',
    lessonData: LESSON_C4_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c5',
    title: 'CHAPITRE C5 : LA MOLE ET LA QUANTITÉ DE MATIÈRE',
    type: 'cours',
    badge: 'Partie 4 • Structure de la Matière',
    description: 'Nombre d\'Avogadro NA = 6,022.10²³ mol⁻¹, masse molaire atomique et moléculaire M, volume molaire d\'un gaz Vm (22,4 L/mol à CNTP), et relations fondamentales n = m/M et n = V/Vm.',
    lessonData: LESSON_C5_SECONDE_S
  },

  // --- PARTIE 5 : RÉACTIONS & SOLUTIONS AQUEUSES (C6 - C10 & ANNEXE) ---
  {
    id: 'pc-2nde-s-cours-c6',
    title: 'CHAPITRE C6 : LA RÉACTION CHIMIQUE ET LE BILAN DE MATIÈRE',
    type: 'cours',
    badge: 'Partie 5 • Réactions & Solutions Aqueuses',
    description: 'Différence entre transformation physique et réaction chimique, réactifs et produits, ajustement stœchiométrique (conservation de Lavoisier), tableau d\'avancement x et réactif limitant.',
    lessonData: LESSON_C6_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c7',
    title: 'CHAPITRE C7 : LES SOLUTIONS AQUEUSES ET LA CONCENTRATION',
    type: 'cours',
    badge: 'Partie 5 • Réactions & Solutions Aqueuses',
    description: 'Soluté, solvant eau et solution, concentration massique Cm = m/V et molaire C = n/V, relation Cm = C·M, solubilité et saturation, et protocole expérimental rigoureux de dilution.',
    lessonData: LESSON_C7_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c8',
    title: 'CHAPITRE C8 : LES SOLUTIONS ACIDES ET LEURS RÉACTIONS',
    type: 'cours',
    badge: 'Partie 5 • Réactions & Solutions Aqueuses',
    description: 'Définition d\'un acide, l\'ion hydronium H3O+, l\'acide chlorhydrique (HCl), action sur les métaux usuels (fer, zinc, aluminium) avec dégagement de dihydrogène H2 et règles de sécurité.',
    lessonData: LESSON_C8_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c9',
    title: 'CHAPITRE C9 : LES SOLUTIONS BASIQUES ET LA NEUTRALISATION ACIDO-BASIQUE',
    type: 'cours',
    badge: 'Partie 5 • Réactions & Solutions Aqueuses',
    description: 'Définition d\'une base, l\'ion hydroxyde HO-, la soude (NaOH), réaction de neutralisation exothermique H3O+ + HO- → 2 H2O, et bilan stœchiométrique à l\'équivalence.',
    lessonData: LESSON_C9_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-c10',
    title: 'CHAPITRE C10 : NOTION DE pH ET TESTS CARACTÉRISTIQUES D\'IDENTIFICATION DES IONS',
    type: 'cours',
    badge: 'Partie 5 • Réactions & Solutions Aqueuses',
    description: 'Échelle de pH de 0 à 14, mesures au papier pH et pH-mètre, indicateurs colorés, et réactions de précipitation caractéristiques des cations métalliques (Fe2+, Fe3+, Cu2+, Zn2+, Al3+) et anions.',
    lessonData: LESSON_C10_SECONDE_S
  },
  {
    id: 'pc-2nde-s-cours-annexe',
    title: 'ANNEXE : FORMULAIRE OFFICIEL, CONSTANTES ET TABLEAU PÉRIODIQUE SECONDE S',
    type: 'cours',
    badge: 'Partie 5 • Réactions & Solutions Aqueuses',
    description: 'Récapitulatif intégral des formules mathématiques et physiques, constantes fondamentales (e, NA, g, c, Vm), masses molaires usuelles, et tableau périodique complet jusqu\'à Z = 20.',
    lessonData: LESSON_ANNEXE_PC_SECONDE_S
  }
];
