import {
  LESSON_P1_1ERE_S,
  LESSON_P4_1ERE_S,
  LESSON_P5_1ERE_S
} from './courses_1ere_pc_s_part1';

import {
  LESSON_1_PC_1ERE_L,
  LESSON_2_PC_1ERE_L,
  LESSON_3_PC_1ERE_L,
  LESSON_4_PC_1ERE_L,
  LESSON_5_PC_1ERE_L,
  LESSON_6_PC_1ERE_L,
  LESSON_7_PC_1ERE_L,
  LESSON_8_PC_1ERE_L,
  LESSON_9_PC_1ERE_L,
  LESSON_10_PC_1ERE_L,
  LESSON_11_PC_1ERE_L
} from './courses_1ere_pc_l_index';

export const COURSES_PC_1ERE_S: any[] = [
  // PHYSIQUE PREMIÈRE S (P1 à P12)
  {
    id: 'pc-1ere-s-p1',
    title: 'CHAPITRE P1 : TRAVAIL ET PUISSANCE MÉCANIQUES',
    type: 'cours',
    badge: 'Physique S • Mécanique & Moments',
    description: 'Produit scalaire F·AB, travail moteur, résistant et nul, travail du poids, travail d\'un couple de forces en rotation W = M·θ, puissance instantanée et rendement mécanique.',
    lessonData: LESSON_P1_1ERE_S
  },
  {
    id: 'pc-1ere-s-p2',
    title: 'CHAPITRE P2 : ÉNERGIE CINÉTIQUE ET THÉORÈME DE L\'ÉNERGIE CINÉTIQUE',
    type: 'cours',
    badge: 'Physique S • Théorème de l\'énergie',
    description: 'Énergie cinétique de translation Ec = ½ mv² et de rotation Ec = ½ JΔ ω², énoncé général du TEC et applications aux mouvements balistiques et freinage.',
    lessonData: LESSON_3_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-p3',
    title: 'CHAPITRE P3 : ÉNERGIE POTENTIELLE ET ÉNERGIE MÉCANIQUE',
    type: 'cours',
    badge: 'Physique S • Conservation d\'énergie',
    description: 'Énergie potentielle de pesanteur Ep = mgz, énergie potentielle élastique d\'un ressort Ep = ½ kx², conservation de Em et forces dissipatives.',
    lessonData: LESSON_4_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-p4',
    title: 'CHAPITRE P4 : CALORIMÉTRIE ET ÉCHANGES THERMIQUES',
    type: 'cours',
    badge: 'Physique S • Thermodynamique',
    description: 'Capacité thermique massique c, chaleur sensible Q = mcΔT, chaleurs latentes de changement d\'état Q = mL, méthode des mélanges au calorimètre et équilibre thermique.',
    lessonData: LESSON_P4_1ERE_S
  },
  {
    id: 'pc-1ere-s-p5',
    title: 'CHAPITRE P5 : FORCE ET CHAMP ÉLECTROSTATIQUES',
    type: 'cours',
    badge: 'Physique S • Électrostatique',
    description: 'Loi de Coulomb, vecteur champ électrostatique E = F/q, champ créé par une charge ponctuelle, principe de superposition et champ uniforme entre plaques parallèles.',
    lessonData: LESSON_P5_1ERE_S
  },
  {
    id: 'pc-1ere-s-p6',
    title: 'CHAPITRE P6 : TRAVAIL ET ÉNERGIE POTENTIELLE ÉLECTROSTATIQUES',
    type: 'cours',
    badge: 'Physique S • Potentiel électrique',
    description: 'Travail de la force électrostatique W = q·(VA − VB), énergie potentielle électrostatique Ep = q·V, accélération de particules chargées dans un champ uniforme.',
    lessonData: LESSON_P5_1ERE_S
  },
  {
    id: 'pc-1ere-s-p7',
    title: 'CHAPITRE P7 : ÉNERGIE ÉLECTRIQUE MISE EN JEU DANS UN CIRCUIT',
    type: 'cours',
    badge: 'Physique S • Puissance & Effet Joule',
    description: 'Puissance reçue P = UI, énergie transférée E = P·Δt, loi de Joule P = RI² = U²/R dans les résistors, et bilan de puissance d\'un récepteur ou générateur.',
    lessonData: LESSON_2_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-p8',
    title: 'CHAPITRE P8 : LES CONDENSATEURS ET CIRCUITS RC',
    type: 'cours',
    badge: 'Physique S • Composants électroniques',
    description: 'Constitution d\'un condensateur, relation charge-tension q = C·u, énergie emmagasinée Ec = ½ C·u², association série/parallèle et régime transitoire de charge.',
    lessonData: LESSON_P5_1ERE_S
  },
  {
    id: 'pc-1ere-s-p9',
    title: 'CHAPITRE P9 : AMPLIFICATEUR OPÉRATIONNEL : DÉRIVATEUR ET INTÉGRATEUR',
    type: 'cours',
    badge: 'Physique S • Électronique active',
    description: 'Modèle de l\'amplificateur opérationnel idéal, régime linéaire, montage dérivateur et intégrateur, et relations entrée-sortie.',
    lessonData: LESSON_P1_1ERE_S
  },
  {
    id: 'pc-1ere-s-p10',
    title: 'CHAPITRE P10 : PROPAGATION DES SIGNAUX, ONDES PROGRESSIVES ET INTERFÉRENCES',
    type: 'cours',
    badge: 'Physique S • Ondes mécaniques',
    description: 'Définition d\'une onde progressive à une et deux dimensions, célérité v, périodicité spatiale λ = v·T = v/f, et phénomène d\'interférences mécaniques constructives et destructives.',
    lessonData: LESSON_1_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-p11',
    title: 'CHAPITRE P11 : LES LENTILLES MINCES ET SYSTÈMES OPTIQUES',
    type: 'cours',
    badge: 'Physique S • Optique géométrique',
    description: 'Lentilles convergentes et divergentes, formules de conjugaison et de grandissement de Descartes, construction rigoureuse des rayons et fonctionnement de la lunette astronomique.',
    lessonData: LESSON_5_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-p12',
    title: 'CHAPITRE P12 : DISPERSION DE LA LUMIÈRE BLANCHE PAR LE PRISME',
    type: 'cours',
    badge: 'Physique S • Optique ondulatoire',
    description: 'Lois de Snell-Descartes de la réfraction, formule du prisme, dépendance de l\'indice n avec la longueur d\'onde (loi de Cauchy) et explication physique de l\'arc-en-ciel.',
    lessonData: LESSON_5_PC_1ERE_L
  },

  // CHIMIE PREMIÈRE S (C1 à C12)
  {
    id: 'pc-1ere-s-c1',
    title: 'CHAPITRE C1 : GÉNÉRALITÉS SUR LA CHIMIE ORGANIQUE',
    type: 'cours',
    badge: 'Chimie S • Fondements organiques',
    description: 'Tétravalence du carbone, liaisons covalentes simples et multiples, formules brute, semi-développée et développée, isomérie de constitution et analyse par combustion.',
    lessonData: LESSON_6_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c2',
    title: 'CHAPITRE C2 : LES ALCANES',
    type: 'cours',
    badge: 'Chimie S • Hydrocarbures saturés',
    description: 'Formule générale CnH2n+2, nomenclature systématique IUPAC, combustion complète et substitutions radicalaires sous rayonnement UV.',
    lessonData: LESSON_7_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c3',
    title: 'CHAPITRE C3 : ALCÈNES ET ALCYNES',
    type: 'cours',
    badge: 'Chimie S • Hydrocarbures insaturés',
    description: 'Double liaison C=C et triple liaison C≡C, réactions d\'addition électrophile (H₂, Br₂, H₂O, HX), règle de Markovnikov et test de l\'eau de brome.',
    lessonData: LESSON_8_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c4',
    title: 'CHAPITRE C4 : LE BENZÈNE ET LES HYDROCARBURES AROMATIQUES',
    type: 'cours',
    badge: 'Chimie S • Composés aromatiques',
    description: 'Structure cyclique hexagonale du benzène C6H6, délocalisation électronique et résonance, stabilité aromatique et réactions de substitution électrophile aromatique (nitration, halogénation).',
    lessonData: LESSON_8_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c5',
    title: 'CHAPITRE C5 : LES COMPOSÉS ORGANIQUES OXYGÉNÉS',
    type: 'cours',
    badge: 'Chimie S • Fonctions oxygénées',
    description: 'Alcools (I, II, III), aldéhydes, cétones, acides carboxyliques, réactions d\'oxydation ménagée, estérification et tests caractéristiques sélectifs (DNPH, liqueur de Fehling, réactif de Tollens).',
    lessonData: LESSON_9_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c6',
    title: 'CHAPITRE C6 : LE COUPLE OXYDANT-RÉDUCTEUR',
    type: 'cours',
    badge: 'Chimie S • Oxydoréduction',
    description: 'Définitions d\'oxydant, réducteur, oxydation et réduction, écriture formelle du couple Ox/Red, demi-équations électroniques et conservation des charges.',
    lessonData: LESSON_10_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c7',
    title: 'CHAPITRE C7 : CLASSIFICATION QUALITATIVE DES COUPLES ION MÉTALLIQUE / MÉTAL',
    type: 'cours',
    badge: 'Chimie S • Échelle de réactivité',
    description: 'Expériences de cémentation et de déplacement mutuel, comparaison expérimentale des pouvoirs oxydants et réducteurs, et établissement de l\'échelle de réactivité.',
    lessonData: LESSON_10_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c8',
    title: 'CHAPITRE C8 : CLASSIFICATION QUANTITATIVE : POTENTIELS STANDARDS D\'OXYDORÉDUCTION',
    type: 'cours',
    badge: 'Chimie S • Potentiels redox E°',
    description: 'Électrode Normale à Hydrogène (ENH), potentiel standard redox E°(Ox/Red), prévision de la spontanéité d\'une réaction rédox par la règle du gamma (γ) et f.é.m. des piles.',
    lessonData: LESSON_11_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c9',
    title: 'CHAPITRE C9 : OXYDORÉDUCTION EN SOLUTION AQUEUSE : DOSAGES RÉDOX',
    type: 'cours',
    badge: 'Chimie S • Titrages volumétriques',
    description: 'Principe du dosage d\'oxydoréduction par le permanganate de potassium (manganimétrie), détermination du point d\'équivalence et calculs précis de concentrations.',
    lessonData: LESSON_10_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c10',
    title: 'CHAPITRE C10 : L\'ÉLECTROLYSE : TRANSFORMATIONS CHIMIQUES FORCÉES',
    type: 'cours',
    badge: 'Chimie S • Électrochimie forcée',
    description: 'Principe de l\'électrolyse, réactions d\'oxydation à l\'anode et de réduction à la cathode sous tension imposée, loi de Faraday Q = I·Δt = n(e⁻)·F et applications industrielles (galvanoplastie, raffinage du cuivre).',
    lessonData: LESSON_11_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c11',
    title: 'CHAPITRE C11 : OXYDORÉDUCTION PAR VOIE SÈCHE ET MÉTALLURGIE',
    type: 'cours',
    badge: 'Chimie S • Métallurgie extractive',
    description: 'Réactions rédox à haute température en phase solide ou gazeuse, réduction des oxydes métalliques par le carbone ou le monoxyde de carbone (haut fourneau sidérurgique).',
    lessonData: LESSON_10_PC_1ERE_L
  },
  {
    id: 'pc-1ere-s-c12',
    title: 'CHAPITRE C12 : PHOSPHATES, ENGRAIS CHIMIQUES ET MATIÈRES PLASTIQUES',
    type: 'cours',
    badge: 'Chimie S • Chimie industrielle',
    description: 'Gisements sénégalais de phosphates (Taïba, Matam), fabrication des engrais phosphatés par les ICS, synthèse des polymères plastiques par polyaddition et polycondensation.',
    lessonData: LESSON_7_PC_1ERE_L
  },
  {
    id: 'res-pc-1ere-s-1',
    title: 'Recueil complet de formules et théorèmes de Sciences Physiques Première S1/S2',
    type: 'ressource',
    badge: 'Formulaire officiel S',
    description: 'Synthèse méthodique intégrale : mécanique, thermodynamique, électrostatique, optique, cinétique et chimie minérale et organique avec corrigés de devoirs types.',
    link: '#'
  }
];

export const PC_1ERE_S_PARTS = [
  { id: 'all', label: 'Tous les chapitres (24)', count: 24 },
  { id: 'physique', label: 'Physique (Chapitres P1 à P12)', count: 12 },
  { id: 'chimie', label: 'Chimie (Chapitres C1 à C12)', count: 12 }
];
