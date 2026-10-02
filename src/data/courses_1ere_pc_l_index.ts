import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE PREMIÈRE L (SÉNÉGAL) — COURS COMPLETS & DÉVELOPPÉS
// 11 Chapitres intégraux avec parties I, II, III, IV, V, formules, schémas & corrigés
// Conforme au programme officiel de Première L
// =========================================================================

export const LESSON_1_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-1',
  number: 'CHAPITRE 1',
  title: 'Étude expérimentale de la chute libre',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '22 min',
  description: 'Définition et modèle de la chute libre sans vitesse initiale, équations horaires du mouvement, exploitation graphique de h = f(t²), estimation expérimentale de g et limites physiques.',
  introduction: `La chute libre est le mouvement idéal d'un corps matériel soumis exclusivement à l'action de son propre poids. Dans le champ de pesanteur uniforme à la surface de la Terre et en négligeant les frottements de l'air, tous les corps tombent avec rigoureusement la même accélération, indépendamment de leur masse ou de leur nature chimique. Cette découverte révolutionnaire, initiée expérimentalement par Galilée et théorisée par Newton, relie l'observation expérimentale rigoureuse à des lois mathématiques précises régissant la vitesse et la distance parcourue.`,
  sections: [
    {
      title: 'I. DÉFINITION ET MODÉLISATION DE LA CHUTE LIBRE',
      content: [
        '1. Définition rigoureuse : Un solide est dit en chute libre lorsqu\'il n\'est soumis qu\'à l\'unique force de la pesanteur : son poids P = m · g.',
        '2. L\'accélération de la pesanteur (g) : Au voisinage immédiat de la surface terrestre, le champ de pesanteur est supposé uniforme. Le vecteur pesanteur g est vertical, dirigé vers le bas (vers le centre de la Terre), et sa norme moyenne au Sénégal est g ≈ 9,81 m·s⁻² (souvent arrondie à g = 10 m·s⁻² dans les exercices de première).',
        '3. La loi d\'universalité de la chute libre de Galilée : Dans le vide (comme dans le tube de Newton où l\'air a été pompé), une plume de volatile et une lourde bille de plomb tombent à la même vitesse et touchent le sol exactement au même instant.'
      ]
    },
    {
      title: 'II. ÉQUATIONS HORAIRES DU MOUVEMENT',
      content: [
        'En appliquant la deuxième loi de Newton dans un repère galiléen muni d\'un axe vertical (Oz) orienté vers le bas :',
        '1. Accélération : La somme des forces extérieures est égale au produit de la masse par l\'accélération : Σ F = m · a ➔ P = m · a ➔ m · g = m · a ➔ a(t) = g = constante.',
        '2. Vitesse instantanée (pour une chute sans vitesse initiale v₀ = 0 à t = 0) : v(t) = g · t (exprimée en mètres par seconde, m·s⁻¹).',
        '3. Distance parcourue / Équation horaire de position : h(t) = ½ · g · t² (exprimée en mètres, m).',
        '4. Relation indépendante du temps : v² = 2 · g · h, soit v = √(2 · g · h).'
      ],
      table: {
        headers: ['Grandeur physique', 'Notation', 'Unité légale (SI)', 'Formule (sans vitesse initiale)'],
        rows: [
          ['Accélération', 'a', 'mètre par seconde carrée (m·s⁻²)', 'a = g ≈ 9,81 m·s⁻²'],
          ['Vitesse instantanée', 'v', 'mètre par seconde (m·s⁻¹)', 'v(t) = g · t'],
          ['Hauteur de chute', 'h', 'mètre (m)', 'h(t) = ½ · g · t²'],
          ['Durée de chute', 't', 'seconde (s)', 't = √(2 · h / g)']
        ]
      }
    },
    {
      title: 'III. EXPLOITATION EXPÉRIMENTALE ET DÉTERMINATION DE g',
      content: [
        '1. Le protocole expérimental : On lâche une bille métallique depuis différentes hauteurs repérées h (0,2 m, 0,4 m, 0,6 m, 0,8 m, 1,0 m) à l\'aide d\'un électro-aimant et on mesure les durées de chute t correspondantes avec un chronomètre électronique déclenché par cellules photoélectriques.',
        '2. Exploitation graphique : On calcule t² pour chaque mesure et on trace la courbe h = f(t²).',
        '• La courbe obtenue est une droite remarquable passant par l\'origine du repère, ce qui démontre expérimentalement que la hauteur h est strictement proportionnelle au carré du temps t² : h = k · t².',
        '• Détermination du coefficient directeur k : k = Δh / Δ(t²). En comparant avec la formule théorique h = ½ · g · t², on en déduit que k = g / 2, soit g = 2 · k.'
      ]
    },
    {
      title: 'IV. LIMITES DU MODÈLE ET RÔLE DES FROTTEMENTS DE L\'AIR',
      content: [
        '1. Dans l\'atmosphère réelle : L\'air exerce une force de résistance (traînée aérodynamique) qui s\'oppose au mouvement et augmente avec la vitesse de l\'objet.',
        '2. Validité de l\'approximation : Pour un objet dense, petit et compact (bille d\'acier, pierre) lâché sur une hauteur modeste (1 à 2 mètres), les frottements de l\'air sont négligeables et le modèle de la chute libre s\'applique avec une excellente précision.',
        '3. Vitesse limite : Pour un parachutiste ou une feuille de papier, les frottements de l\'air finissent par compenser exactement le poids (P = f), l\'accélération s\'annule et le corps atteint une vitesse limite constante.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Une bille de plomb est lâchée sans vitesse initiale du haut d\'une terrasse d\'immeuble d\'une hauteur de 20 mètres. En prenant g = 10 m·s⁻², calculez la durée de chute et la vitesse de la bille à l\'impact au sol.',
        'Correction : 1. Durée de chute : h = ½ · g · t² ➔ t² = 2 · h / g = (2 × 20) / 10 = 4 ➔ t = √4 = 2,0 secondes. 2. Vitesse à l\'impact : v = g · t = 10 × 2,0 = 20 m·s⁻¹ (soit 72 km/h). Vérification avec v = √(2 · g · h) = √(2 × 10 × 20) = √400 = 20 m·s⁻¹.',
        'Exercice 2 : Lors d\'un TP, un élève mesure un temps de chute t = 0,40 s pour une bille lâchée d\'une hauteur h = 0,80 m. Calculer la valeur expérimentale de g.',
        'Correction : h = ½ · g · t² ➔ g = 2 · h / t² = (2 × 0,80) / (0,40)² = 1,60 / 0,16 = 10 m·s⁻².'
      ]
    }
  ],
  diagram: {
    title: 'Schéma expérimental : Dispositif de chute libre chronométrée',
    root: 'ÉTUDE EXPÉRIMENTALE DE LA CHUTE LIBRE',
    branches: [
      {
        name: 'DISPOSITIF DU TP',
        subtitle: 'Banc vertical de mesure',
        items: [
          'Électro-aimant de maintien et déclenchement sans impulsion',
          'Bille sphérique dense en acier (minimise la traînée)',
          'Cellules photoélectriques optiques réglables en hauteur',
          'Chronomètre numérique milliseconde précis'
        ]
      },
      {
        name: 'LOIS CINÉMATIQUES',
        subtitle: 'Accélération constante g',
        items: [
          'Accélération constante : a = g = 9,81 m·s⁻²',
          'Vitesse proportionnelle au temps : v = g · t',
          'Distance proportionnelle à t² : h = ½ · g · t²',
          'Relation torricellienne : v² = 2 · g · h'
        ]
      },
      {
        name: 'ANALYSE GRAPHIQUE',
        subtitle: 'Droite h = f(t²)',
        items: [
          'Tracé de la hauteur h en fonction de t²',
          'Droite passant par l\'origine prouvant la proportionnalité',
          'Pente de la droite : coefficient k = g / 2',
          'Calcul direct de l\'accélération : g = 2 × pente'
        ]
      }
    ]
  },
  conclusion: `L'étude expérimentale de la chute libre constitue le modèle fondamental de la dynamique newtonienne. En reliant la mesure chronométrique précise à l'équation quadratique h = ½ · g · t², l'élève valide expérimentalement la deuxième loi de Newton et découvre la rigueur de la démarche scientifique.`
};

export const LESSON_2_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-2',
  number: 'CHAPITRE 2',
  title: 'Travail et puissance mécaniques',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '24 min',
  description: 'Définition du travail d\'une force constante W = F · d · cos θ, travail moteur, résistant et nul, travail du poids, et notions de puissance moyenne et instantanée.',
  introduction: `En physique, le travail mécanique possède une définition rigoureuse et quantifiée distincte du langage courant : une force ne travaille que si son point d'application se déplace. Le travail mesure la quantité d'énergie transférée à un système lors d'un déplacement sous l'action d'une force. La puissance, quant à elle, exprime le débit d'énergie, c'est-à-dire la rapidité avec laquelle ce travail est accompli. Ces notions sont universelles et interviennent tant dans l'étude des machines industrielles que dans celle des gestes sportifs ou des moteurs de véhicules.`,
  sections: [
    {
      title: 'I. LE TRAVAIL D\'UNE FORCE CONSTANTE EN DÉPLACEMENT RECTILIGNE',
      content: [
        '1. Définition mathématique : Le travail W d\'une force constante F dont le point d\'application se déplace en ligne droite de A vers B est le produit scalaire du vecteur force par le vecteur déplacement :',
        'W_AB(F) = F · AB = F · AB · cos θ.',
        '• F : Intensité de la force exprimée en newtons (N).',
        '• AB : Longueur du déplacement exprimée en mètres (m).',
        '• θ : Angle géométrique formé entre la direction de la force et celle du déplacement.',
        '• W : Travail exprimé en Joules (J). Un joule est le travail exercé par une force de 1 N déplaçant son point d\'application de 1 m dans sa direction.'
      ]
    },
    {
      title: 'II. NATURE DU TRAVAIL : MOTEUR, RÉSISTANT OU NUL',
      content: [
        'Le signe du travail dépend exclusivement de la valeur de l\'angle θ (cos θ) :',
        '1. Travail moteur (W > 0) : Si 0° ≤ θ < 90°, cos θ > 0. La force favorise le mouvement et apporte de l\'énergie mécanique au système (ex: la force de traction d\'un cheval ou le poids lors d\'une descente).',
        '2. Travail résistant (W < 0) : Si 90° < θ ≤ 180°, cos θ < 0. La force s\'oppose au déplacement et consomme de l\'énergie mécanique (ex: les forces de frottement f ou le poids lors d\'une montée). Pour une force de frottement opposée au mouvement (θ = 180°), W = −f · d.',
        '3. Travail nul (W = 0) : Si θ = 90°, cos 90° = 0. Une force perpendiculaire à la trajectoire ne fournit aucun travail (ex: la réaction normale R d\'un support horizontal sans frottement).'
      ],
      table: {
        headers: ['Valeur de l\'angle θ', 'Signe de cos θ', 'Nature du travail', 'Effet mécanique'],
        rows: [
          ['0° ≤ θ < 90° (aigu)', 'cos θ > 0', 'Travail Moteur (W > 0)', 'Accélère ou entretient le mouvement'],
          ['θ = 90° (droit)', 'cos 90° = 0', 'Travail Nul (W = 0)', 'Ne modifie pas l\'énergie cinétique'],
          ['90° < θ ≤ 180° (obtus)', 'cos θ < 0', 'Travail Résistant (W < 0)', 'Freine ou ralentit le système']
        ]
      }
    },
    {
      title: 'III. CAS PARTICULIER FONDAMENTAL : LE TRAVAIL DU POIDS',
      content: [
        '1. Propriété remarquable : Le travail du poids d\'un corps ne dépend pas du chemin suivi, mais uniquement de la différence d\'altitude (dénivelée h) entre le point de départ A et le point d\'arrivée B.',
        '2. En descente (le corps perd de l\'altitude, z_A > z_B) : Le travail est moteur : W_AB(P) = +m · g · h.',
        '3. En montée (le corps gagne de l\'altitude, z_A < z_B) : Le travail est résistant : W_AB(P) = −m · g · h.',
        '4. En déplacement strictement horizontal : La dénivelée est nulle (h = 0), donc le travail du poids est nul.'
      ]
    },
    {
      title: 'IV. LA PUISSANCE MÉCANIQUE',
      content: [
        '1. La puissance moyenne (P_m) : Égale au quotient du travail effectué par la durée Δt mise pour l\'accomplir :',
        'P_m = W / Δt.',
        '• W en Joules (J), Δt en secondes (s).',
        '• P_m en Watts (W). Un watt équivaut à 1 joule par seconde (1 W = 1 J·s⁻¹).',
        '• Autre unité historique : Le Cheval-vapeur (ch), valant environ 736 W.',
        '2. La puissance instantanée : Pour une force constante déplaçant un solide à la vitesse instantanée v, P = F · v · cos θ. À force égale, plus la vitesse est grande, plus la puissance développée est élevée.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Un bœuf tire une charrue avec une force constante F = 400 N faisant un angle de 30° avec l\'horizontale. Il parcourt une ligne droite de 50 mètres. Calculer le travail de cette force.',
        'Correction : W = F · d · cos θ = 400 × 50 × cos(30°) = 20 000 × 0,866 = 17 320 J = 17,32 kJ. C\'est un travail moteur car W > 0.',
        'Exercice 2 : Une grue soulève une charge de masse m = 500 kg sur une hauteur de 12 mètres en une durée Δt = 30 secondes. En prenant g = 10 m·s⁻², calculer le travail du poids de la charge et la puissance moyenne minimale du moteur de la grue.',
        'Correction : 1. Travail du poids (en montée) : W(P) = −m · g · h = −500 × 10 × 12 = −60 000 J = −60 kJ (travail résistant). 2. Le moteur de la grue doit fournir un travail opposé W_moteur = +60 000 J. 3. Puissance moyenne : P_m = W / Δt = 60 000 / 30 = 2 000 W = 2 kW.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma vectoriel : Décomposition du travail d\'une force sur plan incliné',
    root: 'TRAVAIL & PUISSANCE MÉCANIQUES',
    branches: [
      {
        name: 'FORMULE FONDAMENTALE',
        subtitle: 'W = F · d · cos θ',
        items: [
          'F : intensité en Newtons (N)',
          'd : distance parcourue en mètres (m)',
          'θ : angle entre la force et le vecteur vitesse',
          'Unité d\'énergie : le Joule (J)'
        ]
      },
      {
        name: 'NATURE DU TRAVAIL',
        subtitle: 'Signe du produit scalaire',
        items: [
          'Moteur (W > 0) si 0° ≤ θ < 90° (aide le mouvement)',
          'Résistant (W < 0) si 90° < θ ≤ 180° (freinage)',
          'Nul (W = 0) si θ = 90° (perpendiculaire)',
          'Poids : W(P) = ± m · g · h (indépendant du chemin)'
        ]
      },
      {
        name: 'PUISSANCE (DÉBIT)',
        subtitle: 'Rapidité d\'exécution',
        items: [
          'Puissance moyenne : P = W / Δt (Watts)',
          'Puissance instantanée : P = F · v · cos θ',
          '1 Watt = 1 Joule par seconde',
          '1 Cheval-vapeur (ch) ≈ 736 Watts'
        ]
      }
    ]
  },
  conclusion: `Le travail et la puissance sont les deux grandeurs maîtresses de la mécanique énergétique. Comprendre qu'une force perpendiculaire au mouvement ne travaille pas et que le travail du poids ne dépend que de l'altitude permet de résoudre simplement des problèmes d'ingénierie et de transport sans avoir à calculer pas-à-pas les accélérations.`
};

export const LESSON_3_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-3',
  number: 'CHAPITRE 3',
  title: 'Énergie cinétique',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '22 min',
  description: 'Expression de l’énergie cinétique Ec = ½ · m · v², théorème de l’énergie cinétique, conséquences pratiques sur la sécurité routière et la distance de freinage.',
  introduction: `Tout corps matériel en mouvement emmagasine une quantité d'énergie mécanique appelée énergie cinétique. Dérivé du mot grec "kinêsis" (mouvement), ce concept formalisé au XIXe siècle explique pourquoi la vitesse possède un pouvoir destructeur démultiplié en cas de choc. Le Théorème de l'Énergie Cinétique (TEC) constitue l'un des principes les plus puissants de la physique : il établit une équivalence absolue entre la variation de l'énergie cinétique d'un système et la somme des travaux des forces extérieures appliquées à ce système.`,
  sections: [
    {
      title: 'I. DÉFINITION ET FORMULE DE L\'ÉNERGIE CINÉTIQUE',
      content: [
        '1. Expression mathématique : Pour un solide de masse m en translation à la vitesse v dans un référentiel donné, son énergie cinétique vaut :',
        'Ec = ½ · m · v².',
        '• m : Masse du corps exprimée en kilogrammes (kg).',
        '• v : Vitesse linéaire instantanée exprimée en mètres par seconde (m·s⁻¹).',
        '• Ec : Énergie cinétique exprimée en Joules (J).',
        '2. Remarque capitale sur la vitesse au carré : L\'énergie cinétique dépend du CARRÉ de la vitesse v². Si la vitesse d\'un véhicule est multipliée par 2, son énergie cinétique est multipliée par 4 (2² = 4). Si la vitesse est triplée, l\'énergie cinétique est multipliée par 9 !'
      ]
    },
    {
      title: 'II. LE THÉORÈME DE L\'ÉNERGIE CINÉTIQUE (TEC)',
      content: [
        '1. Énoncé du théorème : Dans un référentiel galiléen, la variation de l\'énergie cinétique d\'un solide entre deux positions A et B est égale à la somme algébrique des travaux de toutes les forces extérieures appliquées au solide entre A et B :',
        'ΔEc = Ec(B) − Ec(A) = Σ W_AB(F_ext).',
        '½ · m · v_B² − ½ · m · v_A² = W_AB(F₁) + W_AB(F₂) + ... + W_AB(F_n).',
        '2. Portée de la méthode : Le TEC permet de calculer directement la vitesse finale d\'un projectile ou la distance de freinage d\'un véhicule sans passer par l\'accélération différentielle de Newton.'
      ]
    },
    {
      title: 'III. APPLICATION MAJEURE : SÉCURITÉ ROUTIÈRE ET DISTANCE DE FREINAGE',
      content: [
        '1. Le freinage d\'un véhicule : Lors d\'un freinage d\'urgence, les plaquettes de freins et les pneus exercent une force de frottement f opposée au déplacement (travail résistant W = −f · d_f) jusqu\'à l\'arrêt complet du véhicule (v_B = 0).',
        '2. Application du TEC : Ec(arrêt) − Ec(initiale) = W(frottement) ➔ 0 − ½ · m · v² = −f · d_f ➔ ½ · m · v² = f · d_f.',
        '3. La distance de freinage d_f : d_f = (m · v²) / (2 · f).',
        'Conséquence vitale : La distance nécessaire pour immobiliser un véhicule est strictement proportionnelle au carré de la vitesse. Rouler à 100 km/h au lieu de 50 km/h ne double pas la distance de freinage : elle la quadruple !'
      ]
    },
    {
      title: 'IV. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Calculer l\'énergie cinétique d\'une voiture de masse m = 1 200 kg roulant sur l\'autoroute à péage Dakar-AIBD à la vitesse de 90 km/h.',
        'Correction : 1. Conversion préalable indispensable de la vitesse en m·s⁻¹ : v = 90 / 3,6 = 25 m·s⁻¹. 2. Calcul de Ec : Ec = ½ · m · v² = ½ × 1 200 × (25)² = 600 × 625 = 375 000 J = 375 kJ.',
        'Exercice 2 : Une moto de 200 kg passe d\'une vitesse de 10 m·s⁻¹ à 30 m·s⁻¹. Calculer la variation d\'énergie cinétique et le travail fourni par le moteur.',
        'Correction : ΔEc = ½ · m · (v_final² − v_initial²) = ½ × 200 × (30² − 10²) = 100 × (900 − 100) = 100 × 800 = 80 000 J = 80 kJ. Selon le TEC, le travail total fourni est exactement de +80 kJ.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma énergétique : Le Théorème de l\'Énergie Cinétique',
    root: 'L\'ÉNERGIE CINÉTIQUE (Ec = ½ m v²)',
    branches: [
      {
        name: 'FORMULE FONDAMENTALE',
        subtitle: 'Dépendance quadratique en v²',
        items: [
          'Ec = ½ · m · v² (en Joules)',
          'Masse m en kg, vitesse v en m/s (diviser km/h par 3,6)',
          'Vitesse doublée ➔ Énergie cinétique quadruplée (×4)',
          'Vitesse triplée ➔ Énergie multipliée par neuf (×9)'
        ]
      },
      {
        name: 'THÉORÈME (TEC)',
        subtitle: 'ΔEc = Σ W(Forces)',
        items: [
          'Ec(B) − Ec(A) = somme des travaux de A vers B',
          'Travail moteur ➔ Augmentation de vitesse (ΔEc > 0)',
          'Travail résistant ➔ Ralentissement (ΔEc < 0)',
          'Outil idéal de résolution sans calcul d\'accélération'
        ]
      },
      {
        name: 'SÉCURITÉ ROUTIÈRE',
        subtitle: 'Distance de freinage',
        items: [
          'Freinage : l\'énergie cinétique est dissipée en chaleur',
          'Distance de freinage proportionnelle à v²',
          'Danger extrême des excès de vitesse sur les routes',
          'Énergie de choc mortelle en cas de collision'
        ]
      }
    ]
  },
  conclusion: `L'énergie cinétique illustre comment une grandeur scalaire simple résume l'état dynamique d'un système. Le Théorème de l'Énergie Cinétique fournit un cadre de calcul universel qui éclaire avec une force implacable les enjeux de la sécurité routière et de la maîtrise de la vitesse.`
};

export const LESSON_4_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-4',
  number: 'CHAPITRE 4',
  title: 'Énergie mécanique et conservation',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '22 min',
  description: 'Énergie potentielle de pesanteur Ep = mgh, énergie mécanique Em = Ec + Ep, principe de conservation de Em en l’absence de frottements et forces dissipatives.',
  introduction: `L'énergie mécanique synthétise les deux formes sous lesquelles se manifeste l'énergie d'un système macroscopique : l'énergie liée à sa vitesse (cinétique) et l'énergie liée à sa position dans l'espace (potentielle). En l'absence de forces dissipatives comme les frottements, l'énergie mécanique totale demeure parfaitement constante : elle se conserve, se transformant sans cesse de cinétique en potentielle et inversement. Ce principe de conservation de l'énergie mécanique est l'un des piliers les plus universels de toute la physique moderne.`,
  sections: [
    {
      title: 'I. L\'ÉNERGIE POTENTIELLE DE PESANTEUR (Ep)',
      content: [
        '1. Définition : L\'énergie potentielle de pesanteur est l\'énergie emmagasinée par un système du fait de sa position en hauteur par rapport à un niveau de référence choisi arbitrairement.',
        '2. Expression : Ep = m · g · z (ou m · g · h).',
        '• m en kg, g en m·s⁻², z (altitude) en mètres.',
        '• Ep exprimée en Joules (J).',
        '3. Le choix du niveau de référence : Conventionnellement, on choisit le sol horizontal comme niveau où Ep = 0 J.'
      ]
    },
    {
      title: 'II. L\'ÉNERGIE MÉCANIQUE ET SA CONSERVATION',
      content: [
        '1. Définition générale : L\'énergie mécanique Em d\'un solide est la somme de son énergie cinétique et de son énergie potentielle :',
        'Em = Ec + Ep = ½ · m · v² + m · g · z.',
        '2. Théorème de conservation : Lorsque le système n\'est soumis qu\'à des forces conservatives (comme son propre poids) et qu\'il n\'y a aucun frottement :',
        'Em = constante, soit Em(A) = Em(B).',
        '½ · m · v_A² + m · g · z_A = ½ · m · v_B² + m · g · z_B.',
        'Au cours du mouvement, toute perte d\'énergie potentielle (chute en hauteur) est intégralement convertie en un gain équivalent d\'énergie cinétique (gain de vitesse), et vice-versa.'
      ]
    },
    {
      title: 'III. LES FORCES DISSIPATIVES ET LA NON-CONSERVATION DE Em',
      content: [
        '1. Présence de frottements mécaniques ou de résistance de l\'air : Ces forces non conservatives consument l\'énergie mécanique pour la transformer en énergie thermique (chaleur).',
        '2. Bilan énergétique de non-conservation : ΔEm = Em(B) − Em(A) = W_AB(f) < 0.',
        'L\'énergie mécanique diminue au cours du temps : elle n\'est pas détruite, mais dégradée sous forme de chaleur dissipée dans l\'environnement.'
      ]
    },
    {
      title: 'IV. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Une bille de 0,5 kg est lâchée sans vitesse initiale d\'une hauteur de 5 mètres au-dessus du sol. En négligeant les frottements et en prenant g = 10 m·s⁻², calculer son énergie mécanique initiale et sa vitesse au moment où elle heurte le sol.',
        'Correction : 1. État initial (en haut) : v_A = 0 ➔ Ec(A) = 0. Ep(A) = m · g · h = 0,5 × 10 × 5 = 25 J. Donc Em = 0 + 25 = 25 J. 2. État final (au sol) : z_B = 0 ➔ Ep(B) = 0. Par conservation de l\'énergie mécanique, Em(B) = Em(A) = 25 J ➔ ½ · m · v_B² = 25 J ➔ v_B² = (2 × 25) / 0,5 = 100 ➔ v_B = √100 = 10 m·s⁻¹.',
        'Exercice 2 : Un pendule simple oscille entre deux points extrêmes. Où la vitesse est-elle maximale et où est-elle nulle ?',
        'Correction : Aux points les plus hauts d\'oscillation, l\'altitude est maximale (Ep maximale) et le pendule s\'arrête un instant avant de repartir : la vitesse y est nulle (Ec = 0). Au point le plus bas (au passage par la verticale), l\'altitude est minimale (Ep minimale) : toute l\'énergie potentielle a été transformée en énergie cinétique, la vitesse y est donc maximale.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma de transfert : Conservation de l\'énergie mécanique sans frottement',
    root: 'ÉNERGIE MÉCANIQUE (Em = Ec + Ep)',
    branches: [
      {
        name: 'POSITION HAUTE (SOMMET)',
        subtitle: 'Altitude maximale, vitesse nulle',
        items: [
          'Énergie potentielle maximale : Ep = m · g · h',
          'Énergie cinétique nulle : Ec = 0',
          'Énergie mécanique totale : Em = Ep_max',
          'Ex: bille avant le lâcher, skieur au départ'
        ]
      },
      {
        name: 'CHUTE / DESCENTE',
        subtitle: 'Conversion continue',
        items: [
          'L\'altitude diminue ➔ Ep décroît',
          'La vitesse augmente ➔ Ec croît',
          'Somme constante à chaque instant : Em = Ec + Ep',
          'Perte de potentiel = gain de cinétique'
        ]
      },
      {
        name: 'POSITION BASSE (SOL)',
        subtitle: 'Altitude nulle, vitesse maximale',
        items: [
          'Énergie potentielle nulle : Ep = 0',
          'Énergie cinétique maximale : Ec = ½ · m · v_max²',
          'Toute l\'énergie potentielle est devenue cinétique',
          'Vitesse d\'impact : v = √(2 · g · h)'
        ]
      }
    ]
  },
  conclusion: `L'énergie mécanique illustre le principe fondamental de Lavoisier appliqué à la mécanique : rien ne se perd, rien ne se crée, tout se transforme. En l'absence de frottements, l'échange perpétuel entre énergie de position et énergie de vitesse régit le mouvement des pendules, des montagnes russes et des corps célestes.`
};

export const LESSON_5_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-5',
  number: 'CHAPITRE 5',
  title: 'Étude expérimentale des lentilles minces',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '24 min',
  description: 'Lentilles convergentes et divergentes, centre optique O, foyers F et F\', distance focale et vergence C = 1/f\', formule de conjugaison de Descartes et tracé des rayons.',
  introduction: `Une lentille mince est un milieu transparent homogène (verre ou matière plastique organique) limité par deux surfaces courbes, ou une surface courbe et une surface plane, dont l'épaisseur au centre reste très petite devant les rayons de courbure des faces. Utilisées depuis des siècles pour corriger les défauts de l'œil humain (lunettes, lentilles de contact) et concevoir des instruments d'optique fascinants (loupe, microscope, télescope, appareil photo de smartphone), les lentilles minces permettent de dévier les rayons lumineux et de former des images nettes. L'étude expérimentale sur banc d'optique valide les lois géométriques de réfraction et la formule de conjugaison.`,
  sections: [
    {
      title: 'I. LES DEUX GRANDES FAMILLES DE LENTILLES MINCES',
      content: [
        '1. Les lentilles à bords minces (Lentilles convergentes) :',
        '• Morphologie : Plus épaisses au centre qu\'aux extrémités.',
        '• Comportement optique : Un faisceau de rayons incidents parallèles à l\'axe optique émerge en convergeant vers un point unique situé après la lentille.',
        '• Symbole conventionnel : Un segment vertical terminé par deux flèches orientées vers l\'extérieur (➔ et ).',
        '2. Les lentilles à bords épais (Lentilles divergentes) :',
        '• Morphologie : Plus minces au centre qu\'aux bords.',
        '• Comportement optique : Un faisceau de rayons parallèles émerge en s\'écartant (divergeant).',
        '• Symbole conventionnel : Un segment terminé par deux flèches inversées vers l\'intérieur.'
      ]
    },
    {
      title: 'II. ÉLÉMENTS CARACTÉRISTIQUES D\'UNE LENTILLE CONVERGENTE',
      content: [
        '1. Le centre optique (O) : Point central géométrique de la lentille. Tout rayon passant par O n\'est pas dévié.',
        '2. L\'axe optique principal : Droite orientée perpendiculaire au plan de la lentille passant par O.',
        '3. Le foyer principal image (F\') : Point de l\'axe optique où convergent tous les rayons incidents parallèles à l\'axe principal. Situé après la lentille (à droite sur le schéma conventionnel).',
        '4. Le foyer principal objet (F) : Point symétrique de F\' par rapport au centre optique O (OF = OF\'). Situé avant la lentille.',
        '5. La distance focale image (f\') : Grandeur algébrique f\' = OF\' exprimée en mètres (m). Pour une lentille convergente, f\' > 0.',
        '6. La vergence (C) : Inverse de la distance focale exprimée en dioptries (symbole δ) : C = 1 / f\'. Plus la lentille est bombée, plus sa vergence est grande.'
      ]
    },
    {
      title: 'III. TRACÉ GÉOMÉTRIQUE DES TROIS RAYONS PARTICULIERS',
      content: [
        'Pour construire géométriquement l\'image A\'B\' d\'un objet lumineux AB perpendiculaire à l\'axe optique, on utilise les propriétés de trois rayons lumineux remarquables :',
        '1. Le rayon passant par le centre optique O : Il traverse la lentille en ligne droite SANS être dévié.',
        '2. Le rayon issu de B et parallèle à l\'axe optique : Il émerge de la lentille en passant obligatoirement par le foyer image F\'.',
        '3. Le rayon issu de B et passant par le foyer objet F : Il émerge de la lentille PARALLÈLE à l\'axe optique.',
        'L\'intersection de ces rayons émergents définit avec certitude la position du point image B\'.'
      ]
    },
    {
      title: 'IV. LES FORMULES DE CONJUGAISON ET DE GRANDISSEMENT DE DESCARTES',
      content: [
        'En utilisant les grandeurs algébriques mesurées depuis le centre optique O :',
        '1. Relation de conjugaison de Descartes : 1 / OA\' − 1 / OA = 1 / f\' = C.',
        '• OA : Distance algébrique de l\'objet à la lentille (négative si l\'objet est placé avant la lentille).',
        '• OA\' : Distance algébrique de la lentille à l\'image (positive si l\'image est réelle et se forme sur un écran après la lentille).',
        '2. Formule de grandissement linéaire (γ) : γ = A\'B\' / AB = OA\' / OA.',
        '• Si γ < 0 : L\'image est renversée (inversée par rapport à l\'objet).',
        '• Si |γ| > 1 : L\'image est plus grande que l\'objet ; si |γ| < 1, elle est plus petite.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Une lentille convergente a une distance focale f\' = 20 cm. Calculer sa vergence C.',
        'Correction : Conversion obligatoire de f\' en mètres : f\' = 0,20 m. C = 1 / f\' = 1 / 0,20 = 5 dioptries (5 δ).',
        'Exercice 2 : Un objet lumineux AB de hauteur 2 cm est placé à une distance de 30 cm avant une lentille de focale f\' = 10 cm (OA = −30 cm). Déterminer la position de l\'image OA\' et sa taille A\'B\'.',
        'Correction : 1. Relation de conjugaison : 1 / OA\' − 1 / OA = 1 / f\' ➔ 1 / OA\' = 1 / f\' + 1 / OA = 1 / 10 + 1 / (−30) = 3 / 30 − 1 / 30 = 2 / 30 = 1 / 15. Donc OA\' = +15 cm. L\'image se forme à 15 cm derrière la lentille (image réelle recevable sur un écran). 2. Grandissement : γ = OA\' / OA = 15 / (−30) = −0,5. 3. Taille de l\'image : A\'B\' = γ × AB = −0,5 × 2 cm = −1 cm. L\'image mesure 1 cm et est renversée (signe négatif).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma optique : Construction géométrique de l\'image par une lentille convergente',
    root: 'LENTILLE MINCE CONVERGENTE',
    branches: [
      {
        name: 'ÉLÉMENTS CARDINAUX',
        subtitle: 'Centre, Foyers & Focale',
        items: [
          'Centre optique O : traverse sans déviation',
          'Foyer objet F (avant) & Foyer image F\' (après)',
          'Distance focale f\' = OF\' > 0 (en mètres)',
          'Vergence C = 1 / f\' en dioptries (δ)'
        ]
      },
      {
        name: 'LES 3 RAYONS MAJEURS',
        subtitle: 'Construction géométrique',
        items: [
          'Rayon passant par O ➔ file tout droit non dévié',
          'Rayon parallèle à l\'axe ➔ ressort en passant par F\'',
          'Rayon passant par F ➔ ressort parallèle à l\'axe',
          'Le point d\'intersection donne l\'image B\''
        ]
      },
      {
        name: 'RELATIONS DE DESCARTES',
        subtitle: 'Conjugaison et Grandissement',
        items: [
          '1 / OA\' − 1 / OA = 1 / f\' = C',
          'Grandissement γ = A\'B\' / AB = OA\' / OA',
          'Image réelle sur écran si OA\' > 0',
          'Image renversée si grandissement γ < 0'
        ]
      }
    ]
  },
  conclusion: `L'étude expérimentale des lentilles minces permet de maîtriser la formation des images réelles et virtuelles. En associant rigueur géométrique et calculs algébriques de Descartes, elle fournit la clé de compréhension du fonctionnement de l'œil et de tous les instruments optiques d'observation.`
};

export const LESSON_6_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-6',
  number: 'CHAPITRE 6',
  title: 'Généralités sur la chimie organique',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '22 min',
  description: 'Définition de la chimie organique, tétravalence du carbone, formules brute, semi-développée et développée, isomérie de chaîne et de position, et analyse par combustion.',
  introduction: `La chimie organique est la chimie des composés du carbone, qu'ils soient d'origine naturelle (extraits du monde vivant végétal ou animal) ou synthétisés par l'industrie chimique (médicaments, plastiques, fibres textiles synthétiques). L'atome de carbone possède une propriété unique dans tout le tableau périodique des éléments : sa tétravalence lui permet de s'enchaîner avec d'autres atomes de carbone pour former des squelettes carbonés d'une variété infinie (chaînes linéaires, ramifiées ou cycles). Cette leçon pose les fondements de la représentation des molécules organiques et introduit la notion capitale d'isomérie.`,
  sections: [
    {
      title: 'I. LA TÉTRAVALENCE DU CARBONE ET LA LIAISON COVALENTE',
      content: [
        '1. Structure électronique de l\'atome de carbone (Z = 6) : Sa formule électronique est (K)²(L)⁴. Possédant 4 électrons sur sa couche externe, il doit partager 4 doublets d\'électrons avec d\'autres atomes pour acquérir la structure stable en octet (règle de l\'octet).',
        '2. Tétravalence universelle : Le carbone engage TOUJOURS quatre liaisons covalentes :',
        '• Quatre liaisons simples à géométrie tétraédrique (ex: le méthane CH₄).',
        '• Une liaison double et deux liaisons simples (ex: l\'éthène CH₂=CH₂).',
        '• Une liaison triple et une liaison simple (ex: l\'éthyne HC≡CH).',
        '3. Les liaisons avec les autres hétéroatomes : L\'hydrogène est monovalent (1 liaison), l\'oxygène est divalent (2 liaisons), l\'azote est trivalent (3 liaisons).'
      ]
    },
    {
      title: 'II. LES DIFFÉRENTS MODES D\'ÉCRITURE DES FORMULES EN CHIMIE',
      content: [
        '1. La formule brute : Indique la nature et le nombre exact d\'atomes de chaque élément dans la molécule sans préciser leur agencement dans l\'espace (ex: C₄H₁₀).',
        '2. La formule développée plane : Représente la totalité des atomes et explicite toutes les liaisons covalentes (tous les tirets entre atomes sont visibles).',
        '3. La formule semi-développée : Simplifie l\'écriture en n\'explicitant que les liaisons entre carbones, les atomes d\'hydrogène étant regroupés à côté de leur carbone porteur (ex: CH₃−CH₂−CH₂−CH₃). C\'est la formule la plus utilisée en classe de première.'
      ]
    },
    {
      title: 'III. LA NOTION D\'ISOMÉRIE DE CONSTITUTION',
      content: [
        '1. Définition : Deux molécules sont des isomères si elles possèdent EXACTEMENT la même formule brute mais des formules développées ou semi-développées différentes. Elles ont des propriétés physiques (point d\'ébullition, densité) et chimiques distinctes.',
        '2. L\'isomérie de chaîne : Les molécules diffèrent par la structure de leur squelette carboné (linéaire ou ramifié). Exemple pour C₄H₁₀ :',
        '• Le butane (chaîne linéaire) : CH₃−CH₂−CH₂−CH₃.',
        '• Le 2-méthylpropane ou isobutane (chaîne ramifiée) : CH₃−CH(CH₃)−CH₃.',
        '3. L\'isomérie de position : La chaîne carbonée est identique, mais un groupe fonctionnel ou une liaison multiple change de place sur la chaîne.'
      ]
    },
    {
      title: 'IV. L\'ANALYSE QUALITATIVE ET QUANTITATIVE PAR COMBUSTION',
      content: [
        '1. Analyse qualitative : La combustion complète d\'un composé organique dans le dioxygène produit du dioxyde de carbone CO₂ (qui trouble l\'eau de chaux, prouvant la présence de carbone C) et de la vapeur d\'eau H₂O (qui condense en buée et bleuit le sulfate de cuivre anhydre, prouvant la présence d\'hydrogène H).',
        '2. Exploitation quantitative : La pesée des masses de CO₂ et de H₂O formées permet de calculer les pourcentages massiques de carbone et d\'hydrogène et de déterminer la formule brute inconnue CxHy.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Écrire les formules semi-développées des deux isomères de formule brute C₄H₁₀ et donner leur nom.',
        'Correction : 1. Isomère à chaîne linéaire : CH₃−CH₂−CH₂−CH₃ (Butane). 2. Isomère à chaîne ramifiée : CH₃−CH(CH₃)−CH₃ (2-méthylpropane).',
        'Exercice 2 : La combustion de 0,1 mol d\'un alcane produit 0,3 mol de CO₂. Trouver sa formule brute.',
        'Correction : Un alcane a pour formule CnH₂n+₂. La combustion d\'une mole d\'alcane produit n moles de CO₂. Ici, 0,1 mole donne 0,3 mole de CO₂, donc n = 0,3 / 0,1 = 3. La formule brute est C₃H₈ (le propane).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma conceptuel : Les fondements de la chimie organique',
    root: 'CHIMIE ORGANIQUE DU CARBONE',
    branches: [
      {
        name: 'TÉTRAVALENCE DU CARBONE',
        subtitle: '4 liaisons covalentes stables',
        items: [
          'Couche externe à 4 électrons ➔ règle de l\'octet',
          'Liaisons simples, doubles (=) ou triples (≡)',
          'Squelettes carbonés infinis : chaînes, ramifications, cycles',
          'Association avec H (1), O (2), N (3)'
        ]
      },
      {
        name: 'ÉCRITURES DES FORMULES',
        subtitle: 'Brute, semi-développée & développée',
        items: [
          'Formule brute : C₄H₁₀ (inventaire atomique)',
          'Semi-développée : CH₃−CH₂−CH₂−CH₃',
          'Développée : tous les tirets de liaison visibles',
          'Formule topologique simplifiée en zigzag'
        ]
      },
      {
        name: 'ISOMÉRIE & COMBUSTION',
        subtitle: 'Même formule, molécules différentes',
        items: [
          'Isomères de chaîne (linéaire vs ramifié)',
          'Isomères de position (place de la liaison ou du groupe)',
          'Combustion complète : produit CO₂ (eau de chaux) et H₂O',
          'Détermination de la formule par analyse élémentaire'
        ]
      }
    ]
  },
  conclusion: `La tétravalence du carbone est la clé de voûte de la chimie organique. En apprenant à manier les formules semi-développées et à identifier les isomères, l'élève acquiert l'alphabet indispensable pour explorer les grandes familles d'hydrocarbures et de composés oxygénés.`
};

export const LESSON_7_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-7',
  number: 'CHAPITRE 7',
  title: 'Les alcanes',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '22 min',
  description: 'Formule générale CnH2n+2, nomenclature IUPAC des chaînes linéaires et ramifiées, combustion complète et réaction de substitution radicalaire par les halogènes.',
  introduction: `Les alcanes sont des hydrocarbures saturés à chaîne ouverte, c'est-à-dire des composés chimiques formés exclusivement d'atomes de carbone et d'hydrogène reliés uniquement par des liaisons simples covalentes. Constituants majeurs du gaz naturel et du pétrole brut, les alcanes sont des combustibles essentiels pour la production d'énergie thermique, d'électricité et de carburants pour les transports. Leur étude introduit les règles internationales de nomenclature chimique et les deux réactions majeures des alcanes : la combustion hautement exothermique et la substitution photochimique par les halogènes.`,
  sections: [
    {
      title: 'I. FORMULE GÉNÉRALE ET PREMIERS TERMES DES ALCANES',
      content: [
        '1. Formule générale des alcanes acycliques : C_n H_{2n+2} (où n est un entier supérieur ou égal à 1).',
        '2. Les quatre premiers alcanes (noms historiques consacrés) :',
        '• n = 1 : Méthane CH₄ (gaz naturel, biogaz des digesteurs).',
        '• n = 2 : Éthane C₂H₆ (CH₃−CH₃).',
        '• n = 3 : Propane C₃H₈ (CH₃−CH₂−CH₃, gaz en bouteille).',
        '• n = 4 : Butane C₄H₁₀ (gaz domestique au Sénégal, bombonnes de gaz de cuisine).',
        '3. De n = 5 à 10 : Utilisation de préfixes grecs suivis du suffixe "-ane" : Pentane (C₅H₁₂), Hexane (C₆H₁₄), Heptane (C₇H₁₆), Octane (C₈H₁₈, indice d\'octane des essences), Nonane (C₉H₂₀), Décane (C₁₀H₂₂).'
      ],
      table: {
        headers: ['Nom de l\'alcane', 'Nombre de carbones (n)', 'Formule brute', 'Formule semi-développée'],
        rows: [
          ['Méthane', '1', 'CH₄', 'CH₄'],
          ['Éthane', '2', 'C₂H₆', 'CH₃−CH₃'],
          ['Propane', '3', 'C₃H₈', 'CH₃−CH₂−CH₃'],
          ['Butane', '4', 'C₄H₁₀', 'CH₃−CH₂−CH₂−CH₃'],
          ['Pentane', '5', 'C₅H₁₂', 'CH₃−(CH₂)₃−CH₃'],
          ['Hexane', '6', 'C₆H₁₄', 'CH₃−(CH₂)₄−CH₃']
        ]
      }
    },
    {
      title: 'II. RÈGLES DE NOMENCLATURE OFFICIELLE IUPAC',
      content: [
        'Pour nommer un alcane ramifié selon les règles internationales de l\'IUPAC :',
        '1. Trouver la chaîne carbonée continue la plus longue : Elle donne le nom de l\'alcane de base (ex: 5 carbones ➔ pentane).',
        '2. Numéroter la chaîne principale d\'un bout à l\'autre : Dans le sens qui attribue le plus petit numéro possible au premier carbone portant une ramification.',
        '3. Identifier et nommer les ramifications (groupes alkyles en "-yle") : −CH₃ est le groupe méthyle, −CH₂−CH₃ est le groupe éthyle.',
        '4. Rédiger le nom complet : Indiquer le numéro du carbone porteur, un tiret, le nom du groupe alkyle, et enfin le nom de l\'alcane principal sans espace. En cas de substituants multiples identiques, utiliser les préfixes di-, tri-, tétra- (ex: 2,2-diméthylbutane).'
      ]
    },
    {
      title: 'III. LA COMBUSTION COMPLÈTE ET INCOMPLÈTE',
      content: [
        '1. Combustion complète (en présence d\'un excès de dioxygène O₂) : Elle produit exclusivement du dioxyde de carbone CO₂ et de l\'eau H₂O, en libérant une chaleur considérable (réaction très exothermique) :',
        'C_n H_{2n+2} + [(3n + 1) / 2] O₂ ➔ n CO₂ + (n + 1) H₂O.',
        '• Exemple du propane : C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O.',
        '• Exemple du butane : C₄H₁₀ + 13/2 O₂ ➔ 4 CO₂ + 5 H₂O (ou 2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O).',
        '2. Combustion incomplète (en manque de dioxygène) : Produit du monoxyde de carbone CO (gaz incolore, inodore et mortellement toxique par asphyxie sanguine) et du noir de carbone (suie polluante).'
      ]
    },
    {
      title: 'IV. LA RÉACTION DE SUBSTITUTION PHOTOCHIMIQUE PAR LES HALOGÈNES',
      content: [
        'Sous l\'action de la lumière (rayons ultraviolets h·ν), les liaisons C−H peuvent être rompues pour être substituées par un atome d\'halogène (chlore ou brome) :',
        '1. Chloration progressive du méthane :',
        '• 1ère substitution : CH₄ + Cl₂ ➔ CH₃Cl (chlorométhane) + HCl (chlorure d\'hydrogène).',
        '• 2ème substitution : CH₃Cl + Cl₂ ➔ CH₂Cl₂ (dichlorométhane) + HCl.',
        '• 3ème substitution : CH₂Cl₂ + Cl₂ ➔ CHCl₃ (trichlorométhane ou chloroforme) + HCl.',
        '• 4ème substitution totale : CHCl₃ + Cl₂ ➔ CCl₄ (tétrachlorométhane) + HCl.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Équilibrer l\'équation de combustion complète du pentane C₅H₁₂ dans le dioxygène.',
        'Correction : C₅H₁₂ + 8 O₂ ➔ 5 CO₂ + 6 H₂O. (Vérification : 5 carbones de chaque côté ; 12 hydrogènes de chaque côté ; 8 × 2 = 16 oxygènes à gauche, et (5 × 2) + 6 = 16 oxygènes à droite).',
        'Exercice 2 : Nommer la molécule suivante : CH₃−CH(CH₃)−CH₂−CH₃.',
        'Correction : La chaîne carbonée la plus longue compte 4 atomes de carbone (butane). En numérotant de gauche à droite, le carbone porteur du groupe méthyle −CH₃ porte le numéro 2 (en numérotant de droite à gauche, il porterait le numéro 3). On retient l\'indice le plus faible : c\'est le 2-méthylbutane.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Nomenclature et réactions des alcanes',
    root: 'LES ALCANES (CnH2n+2)',
    branches: [
      {
        name: 'STRUCTURE & NOMENCLATURE',
        subtitle: 'Hydrocarbures saturés',
        items: [
          'Formule générale : CnH2n+2',
          'Liaisons simples C−C et C−H uniquement',
          'Règle IUPAC : chaîne la plus longue + indices minimaux',
          'Groupes alkyles : méthyle (−CH₃), éthyle (−C₂H₅)'
        ]
      },
      {
        name: 'COMBUSTION ÉNERGÉTIQUE',
        subtitle: 'Source majeure de chaleur',
        items: [
          'Complète (excès O₂) : produit CO₂ + H₂O + chaleur',
          'Incomplète (défaut O₂) : danger mortel du monoxyde CO',
          'Combustibles vitaux : gaz butane, propane, essences',
          'Équation : CnH2n+2 + [(3n+1)/2] O₂ ➔ n CO₂ + (n+1) H₂O'
        ]
      },
      {
        name: 'SUBSTITUTION PHOTOCHIMIQUE',
        subtitle: 'Action de la lumière (UV)',
        items: [
          'Remplacement d\'un H par un atome de Cl ou Br',
          'Dégagement de gaz chlorure d\'hydrogène (HCl)',
          'Chloration en chaîne : CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄',
          'Synthèse de solvants industriels'
        ]
      }
    ]
  },
  conclusion: `Les alcanes constituent la famille modèle des hydrocarbures saturés. Grâce à leur formule générale CnH2n+2 et aux règles de nomenclature IUPAC, l'élève comprend les mécanismes de l'énergie fossile et des réactions de substitution indispensables à l'industrie chimique.`
};

export const LESSON_8_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-8',
  number: 'CHAPITRE 8',
  title: 'Alcènes et alcynes',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '22 min',
  description: 'Hydrocarbures insaturés, alcènes CnH2n avec double liaison C=C, alcynes CnH2n-2 avec triple liaison C≡C, réactions d’addition (hydrogénation, hydratation) et test de l’eau de brome.',
  introduction: `Contrairement aux alcanes qui sont saturés, les alcènes et les alcynes sont des hydrocarbures insaturés : ils possèdent au moins une liaison multiple entre deux atomes de carbone (une double liaison pour les alcènes, une triple liaison pour les alcynes). Cette insaturation confère à ces molécules une très grande réactivité chimique. Alors que les alcanes réagissent principalement par substitution lente ou par combustion, les alcènes et les alcynes sont le siège de réactions d'addition rapide, permettant la fabrication de matières plastiques (polyéthylène), de solvants et de carburants synthétiques.`,
  sections: [
    {
      title: 'I. LES ALCÈNES : STRUCTURE ET FORMULE GÉNÉRALE',
      content: [
        '1. Définition : Les alcènes acycliques comportent une double liaison covalente C=C dans leur chaîne carbonée.',
        '2. Formule générale : C_n H_{2n} (avec n ≥ 2).',
        '3. Les premiers termes et la nomenclature :',
        '• n = 2 : Éthène (ou éthylène) CH₂=CH₂ (gaz mûrissant naturellement les fruits, matière première du polyéthylène).',
        '• n = 3 : Propène (ou propylène) CH₂=CH−CH₃.',
        '• n = 4 : Butène C₄H₈. Il existe deux isomères de position de la double liaison : le but-1-ène (CH₂=CH−CH₂−CH₃) et le but-2-ène (CH₃−CH=CH−CH₃).'
      ]
    },
    {
      title: 'II. LES ALCYNES : STRUCTURE ET FORMULE GÉNÉRALE',
      content: [
        '1. Définition : Les alcynes acycliques comportent une triple liaison covalente C≡C.',
        '2. Formule générale : C_n H_{2n-2} (avec n ≥ 2).',
        '3. Le chef de file : L\'Éthyne (communément appelé acétylène) :',
        '• Formule : HC≡CH.',
        '• Utilisation : Gaz utilisé dans les chalumeaux oxyacétyléniques pour la soudure et le découpage des métaux à haute température (flamme dépassant 3 000 °C).'
      ]
    },
    {
      title: 'III. LES RÉACTIONS D\'ADDITION CARACTÉRISTIQUES',
      content: [
        'La liaison multiple est fragile : elle peut s\'ouvrir pour fixer deux nouveaux atomes sans départ d\'atomes :',
        '1. L\'hydrogénation catalytique (addition de dihydrogène H₂) :',
        '• Alcène ➔ Alcane correspondant : CH₂=CH₂ + H₂ ➔ CH₃−CH₃ (en présence d\'un catalyseur : nickel Ni ou platine Pt).',
        '• Alcyne ➔ Alcène puis Alcane : HC≡CH + H₂ ➔ CH₂=CH₂ ; puis CH₂=CH₂ + H₂ ➔ CH₃−CH₃.',
        '• Application industrielle : L\'hydrogénation des huiles végétales liquides d\'arachide ou de palme pour fabriquer de la margarine solide.',
        '2. L\'addition d\'halogènes (dihalogénation) : CH₂=CH₂ + Br₂ ➔ CH₂Br−CH₂Br (1,2-dibromoéthane).',
        '3. L\'hydratation (addition d\'eau H₂O en milieu acide) : Transforme un alcène en alcool : CH₂=CH₂ + H₂O ➔ CH₃−CH₂−OH (éthanol).'
      ]
    },
    {
      title: 'IV. LE TEST D\'IDENTIFICATION DE L\'INSATURATION (TEST À L\'EAU DE BROME)',
      content: [
        '1. L\'expérience de laboratoire : L\'eau de dibrome est une solution aqueuse de couleur jaune-orangé ou brune caractéristique.',
        '2. Observation : Lorsqu\'on fait barboter un alcène ou un alcyne dans de l\'eau de dibrome, celle-ci se DÉCOLORE instantanément et devient totalement limpide et transparente.',
        '3. Interprétation : La décoloration prouve que le dibrome Br₂ s\'est additionné sur la liaison multiple pour former un dérivé dibromé incolore. Un alcane saturé ne décolore pas l\'eau de brome à l\'obscurité.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Un hydrocarbure insaturé a pour formule brute C₅H₁₀. À quelle famille appartient-il ? Écrire deux formules semi-développées isomères possibles.',
        'Correction : C₅H₁₀ répond à la formule CnH2n avec n = 5 : c\'est un alcène (le pentène). Deux isomères possibles : 1. Pent-1-ène : CH₂=CH−CH₂−CH₂−CH₃. 2. Pent-2-ène : CH₃−CH=CH−CH₂−CH₃.',
        'Exercice 2 : Écrire l\'équation-bilan de l\'hydrogénation complète de l\'éthyne (acétylène) HC≡CH.',
        'Correction : HC≡CH + 2 H₂ ➔ CH₃−CH₃ (obtention d\'éthane).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma comparatif : Réactivité des alcènes et alcynes par addition',
    root: 'HYDROCARBURES INSATURÉS',
    branches: [
      {
        name: 'ALCÈNES (CnH2n)',
        subtitle: 'Double liaison C=C',
        items: [
          'Éthène CH₂=CH₂ (gaz éthylène)',
          'Propène, but-1-ène, but-2-ène',
          'Matière première des polymères plastiques',
          'Ouvrabilité facile de la double liaison'
        ]
      },
      {
        name: 'ALCYNES (CnH2n-2)',
        subtitle: 'Triple liaison C≡C',
        items: [
          'Éthyne HC≡CH (acétylène des chalumeaux)',
          'Flamme oxyacétylénique à plus de 3 000 °C',
          'Fixe deux molécules de réactif par addition',
          'Prop-1-yne, but-1-yne'
        ]
      },
      {
        name: 'TESTS & RÉACTIONS',
        subtitle: 'Additions & Eau de brome',
        items: [
          'Test à l\'eau de brome : décoloration immédiate (jaune ➔ limpide)',
          'Hydrogénation (+H₂) : fabrication des margarines',
          'Hydratation (+H₂O) : synthèse industrielle des alcools',
          'Halogénation (+Cl₂, +Br₂) : dérivés halogénés'
        ]
      }
    ]
  },
  conclusion: `La présence d'une liaison multiple confère aux alcènes et alcynes une richesse réactionnelle exceptionnelle. Le test de l'eau de brome permet d'identifier l'insaturation en un clin d'œil, ouvrant la voie à la synthèse des alcools et des polymères modernes.`
};

export const LESSON_9_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-9',
  number: 'CHAPITRE 9',
  title: 'Les composés organiques oxygénés',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '24 min',
  description: 'Principales fonctions oxygénées : alcools (-OH), aldéhydes (-CHO), cétones (C=O) et acides carboxyliques (-COOH), oxydation ménagée et tests d’identification (DNPH, liqueur de Fehling).',
  introduction: `L'introduction d'un ou plusieurs atomes d'oxygène dans une chaîne carbonée donne naissance aux composés organiques oxygénés. Présents massivement dans la nature (sucres, graisses, parfums, vinaigre) et omniprésents dans la pharmacie et l'agroalimentaire, ces composés sont caractérisés par des groupements fonctionnels spécifiques qui déterminent leur réactivité chimique. En classe de Première L, l'étude porte sur la reconnaissance structurale des alcools, des aldéhydes, des cétones et des acides carboxyliques, ainsi que sur l'oxydation ménagée des alcools et les tests chimiques colorimétriques de caractérisation.`,
  sections: [
    {
      title: 'I. LES ALCOOLS ET LEURS TROIS CLASSES',
      content: [
        '1. Définition : Un alcool possède le groupe fonctionnel hydroxyle −OH fixé sur un atome de carbone saturé (tétragonal). Formule générale : R−OH.',
        '2. Nomenclature : Nom de l\'alcane correspondant en remplaçant le "-e" final par le suffixe "-ol", précédé du numéro du carbone porteur de la fonction.',
        '3. Les trois classes d\'alcools :',
        '• Alcool primaire : Le carbone portant le groupe −OH est lié à un seul autre atome de carbone (ou aucun dans le cas du méthanol). Ex: Éthanol CH₃−CH₂−OH.',
        '• Alcool secondaire : Le carbone fonctionnel est lié à deux autres atomes de carbone. Ex: Propan-2-ol CH₃−CH(OH)−CH₃.',
        '• Alcool tertiaire : Le carbone fonctionnel est lié à trois autres atomes de carbone. Ex: 2-méthylpropan-2-ol (CH₃)₃C−OH.'
      ]
    },
    {
      title: 'II. LES ALDÉHYDES ET LES CÉTONES (COMPOSÉS CARBONYLÉS)',
      content: [
        'Les aldéhydes et les cétones possèdent tous deux le groupe carbonyle C=O :',
        '1. Les Aldéhydes : Le groupe carbonyle est situé à l\'extrémité de la chaîne carbonée (groupe formyle −CHO). Formule : R−CHO. Suffixe en "-al" (ex: Méthanal HCHO ou formol, Éthanal CH₃−CHO).',
        '2. Les Cétones : Le groupe carbonyle C=O est situé à l\'intérieur de la chaîne carbonée, entre deux carbones. Formule : R−CO−R\'. Suffixe en "-one" (ex: Propanone ou acétone CH₃−CO−CH₃, puissant solvant des vernis).'
      ]
    },
    {
      title: 'III. LES ACIDES CARBOXYLIQUES',
      content: [
        '1. Définition : Possèdent le groupe carboxyle −COOH (qui combine un carbonyle C=O et un hydroxyle −OH sur le même carbone).',
        '2. Formule générale : R−COOH.',
        '3. Nomenclature : Mot "acide" suivi du nom de l\'alcane correspondant terminé par "-oïque" (ex: Acide méthanoïque ou acide formique HCOOH sécrété par les fourmis, Acide éthanoïque ou acide acétique CH₃−COOH qui donne son goût acide au vinaigre).'
      ]
    },
    {
      title: 'IV. L\'OXYDATION MÉNAGÉE DES ALCOOLS',
      content: [
        'Une oxydation est dite "ménagée" lorsqu\'elle modifie le groupe fonctionnel sans détruire le squelette carboné, sous l\'action d\'un oxydant doux (ion permanganate MnO₄⁻ ou dichromate Cr₂O₇²⁻ en milieu acide) :',
        '1. Alcool primaire ➔ s\'oxyde en Aldéhyde ➔ puis en Acide carboxylique :',
        'CH₃−CH₂−OH (Éthanol) ➔ CH₃−CHO (Éthanal) ➔ CH₃−COOH (Acide éthanoïque). C\'est la réaction qui transforme le vin abandonné à l\'air en vinaigre !',
        '2. Alcool secondaire ➔ s\'oxyde exclusivement en Cétone (pas d\'oxydation ultérieure) : Propan-2-ol ➔ Propanone.',
        '3. Alcool tertiaire : Ne subit aucune oxydation ménagée (la chaîne devrait être cassée).'
      ]
    },
    {
      title: 'V. LES TESTS CHIMIQUES DE CARACTÉRISATION ET D\'IDENTIFICATION',
      content: [
        '1. Test général des composés carbonylés (Aldéhydes et Cétones) : Test à la 2,4-DNPH (dinitrophénylhydrazine) :',
        '• En présence d\'un aldéhyde ou d\'une cétone, la 2,4-DNPH produit immédiatement un précipité jaune-orangé.',
        '2. Tests spécifiques de distinction des aldéhydes (propriété réductrice) :',
        '• Test à la liqueur de Fehling : Chauffé doucement avec un aldéhyde, la liqueur de Fehling bleue donne un précipité rouge brique d\'oxyde de cuivre Cu₂O. Une cétone ne réagit pas (la solution reste bleue).',
        '• Test au réactif de Schiff : Se recolore en rose-violacé uniquement en présence d\'un aldéhyde.'
      ],
      table: {
        headers: ['Fonction organique', 'Groupe caractéristique', 'Test à la 2,4-DNPH', 'Test à la Liqueur de Fehling'],
        rows: [
          ['Alcool', '−OH (hydroxyle)', 'Négatif (pas de précipité)', 'Négatif (reste bleue)'],
          ['Cétone', 'C=O interne (carbonyle)', 'POSITIF (précipité jaune-orangé)', 'Négatif (reste bleue)'],
          ['Aldéhyde', '−CHO terminal (carbonyle)', 'POSITIF (précipité jaune-orangé)', 'POSITIF (précipité rouge brique)'],
          ['Acide carboxylique', '−COOH (carboxyle)', 'Négatif (pas de précipité)', 'Négatif (acidité au papier pH)']
        ]
      }
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Un composé liquide A donne un précipité jaune avec la 2,4-DNPH et un précipité rouge brique avec la liqueur de Fehling. Sa formule brute est C₃H₆O. Identifier sa fonction chimique et donner son nom.',
        'Correction : Le test positif à la DNPH prouve la présence d\'un groupe carbonyle (aldéhyde ou cétone). Le test positif à la liqueur de Fehling prouve que c\'est un aldéhyde (propriété réductrice). Pour 3 carbones, il s\'agit du propanal : CH₃−CH₂−CHO.',
        'Exercice 2 : Classer les alcools suivants : a) CH₃−CH₂−CH₂−OH ; b) CH₃−C(CH₃)₂−OH ; c) CH₃−CH(OH)−CH₃.',
        'Correction : a) Le carbone portant −OH est lié à un seul carbone : Alcool primaire (propan-1-ol). b) Le carbone portant −OH est lié à 3 carbones : Alcool tertiaire (2-méthylpropan-2-ol). c) Le carbone portant −OH est lié à 2 carbones : Alcool secondaire (propan-2-ol).'
      ]
    }
  ],
  diagram: {
    title: 'Arbre de décision : Caractérisation expérimentale des fonctions oxygénées',
    root: 'COMPOSÉS OXYGÉNÉS',
    branches: [
      {
        name: 'ALCOOLS (R−OH)',
        subtitle: 'Groupement hydroxyle',
        items: [
          'Primaire : s\'oxyde en aldéhyde puis acide',
          'Secondaire : s\'oxyde en cétone uniquement',
          'Tertiaire : aucune oxydation ménagée possible',
          'Test DNPH négatif (pas de carbonyle)'
        ]
      },
      {
        name: 'COMPOSÉS CARBONYLÉS (C=O)',
        subtitle: 'Précipité jaune avec la 2,4-DNPH',
        items: [
          'Aldéhyde (−CHO) : test Fehling positif (rouge brique)',
          'Cétone (R−CO−R\') : test Fehling négatif (reste bleu)',
          'Aldéhyde réducteur, cétone non oxydable facilement',
          'Propanal vs Propanone'
        ]
      },
      {
        name: 'ACIDES CARBOXYLIQUES',
        subtitle: 'Groupe carboxyle −COOH',
        items: [
          'Acide éthanoïque (vinaigre)',
          'Caractère acide : fait virer le papier pH au rouge',
          'Résulte de l\'oxydation poussée d\'un alcool primaire',
          'Réaction avec les bases et formation d\'esters'
        ]
      }
    ]
  },
  conclusion: `Les composés organiques oxygénés forment le cœur de la biochimie et de la pharmacopée. Grâce aux tests sélectifs de la DNPH et de la liqueur de Fehling, l'élève sait identifier avec certitude les fonctions carbonylées et prévoir le devenir d'un alcool lors d'une oxydation ménagée.`
};

export const LESSON_10_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-10',
  number: 'CHAPITRE 10',
  title: 'Réaction d’oxydoréduction ion métallique/métal',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '22 min',
  description: 'Définitions d\'oxydant, réducteur, oxydation et réduction, écriture du couple Ox/Red, règle du gamma, et équilibrage des réactions rédox métal-ion métallique.',
  introduction: `Les réactions d'oxydoréduction (ou réactions rédox) constituent l'une des classes fondamentales de transformations chimiques de l'Univers. Contrairement aux réactions acide-base qui mettent en jeu un transfert de protons H⁺, les réactions d'oxydoréduction reposent sur un transfert d'électrons entre deux entités chimiques : l'oxydant qui capte des électrons et le réducteur qui en cède. L'étude des couples ion métallique / métal permet de comprendre la corrosion des métaux, la métallurgie extractive et le fonctionnement de toutes les piles et batteries électrochimiques de notre quotidien.`,
  sections: [
    {
      title: 'I. LES DÉFINITIONS FONDAMENTALES DE L\'OXYDORÉDUCTION',
      content: [
        '1. Oxydant : Espèce chimique capable de CAPTER un ou plusieurs électrons (moyen mnémotechnique : Oxydant = Capteur).',
        '2. Réducteur : Espèce chimique capable de CÉDER un ou plusieurs électrons (Réducteur = Donneur).',
        '3. Oxydation : Réaction au cours de laquelle une espèce perd des électrons : Red ➔ Ox + n e⁻.',
        '4. Réduction : Réaction au cours de laquelle une espèce gagne des électrons : Ox + n e⁻ ➔ Red.'
      ]
    },
    {
      title: 'II. LE COUPLE OXYDANT / RÉDUCTEUR (Ox/Red)',
      content: [
        '1. Définition du couple : Deux espèces chimiques sont dites conjuguées en un couple Ox/Red lorsqu\'elles peuvent se transformer l\'une en l\'autre par gain ou perte d\'électrons.',
        '2. Convention d\'écriture obligatoire : On écrit TOUJOURS l\'oxydant en premier à gauche et le réducteur à droite, séparés par une barre oblique : Ox / Red.',
        '3. La demi-équation électronique associée : Ox + n e⁻ ⇄ Red.',
        '• Couple Cu²⁺/Cu : Cu²⁺ + 2 e⁻ ⇄ Cu (l\'ion cuivre II bleu est l\'oxydant, le cuivre métallique rouge est le réducteur).',
        '• Couple Zn²⁺/Zn : Zn²⁺ + 2 e⁻ ⇄ Zn.',
        '• Couple Fe²⁺/Fe : Fe²⁺ + 2 e⁻ ⇄ Fe.',
        '• Couple Ag⁺/Ag : Ag⁺ + 1 e⁻ ⇄ Ag.'
      ]
    },
    {
      title: 'III. RÉACTION ENTRE DEUX COUPLES OXYDORÉDUCTEURS',
      content: [
        '1. Principe du bilan rédox : Une réaction d\'oxydoréduction met impérativement en présence l\'oxydant du premier couple (Ox₁) et le réducteur du second couple (Red₂). Il ne peut jamais y avoir d\'électrons libres dans l\'équation-bilan finale !',
        '2. Méthode en 3 étapes pour équilibrer :',
        '• Étape 1 : Écrire la demi-équation de réduction de l\'oxydant le plus fort : Ox₁ + n₁ e⁻ ➔ Red₁.',
        '• Étape 2 : Écrire la demi-équation d\'oxydation du réducteur le plus fort : Red₂ ➔ Ox₂ + n₂ e⁻.',
        '• Étape 3 : Multiplier chaque demi-équation par des coefficients entiers pour égaliser le nombre d\'électrons cédés et captés, puis les additionner membre à membre.'
      ]
    },
    {
      title: 'IV. EXEMPLE EXPÉRIMENTAL MAJEUR : ACTION DU ZINC SUR LES IONS CUIVRE II',
      content: [
        '1. L\'expérience : On plonge une lame de zinc métallique grise dans une solution bleue de sulfate de cuivre (Cu²⁺ + SO₄²⁻).',
        '2. Observations expérimentales :',
        '• Un dépôt pulvérulent rouge de cuivre métallique Cu se forme immédiatement sur la lame de zinc.',
        '• La couleur bleue des ions Cu²⁺ s\'estompe progressivement jusqu\'à décoloration totale.',
        '• La solution s\'enrichit en ions zinc incolores Zn²⁺ (mis en évidence par un précipité blanc d\'hydroxyde de zinc avec la soude).',
        '3. Interprétation et équation-bilan :',
        '• Réduction des ions cuivre II : Cu²⁺ + 2 e⁻ ➔ Cu.',
        '• Oxydation du zinc métallique : Zn ➔ Zn²⁺ + 2 e⁻.',
        '• Équation-bilan ionique nette : Zn + Cu²⁺ ➔ Zn²⁺ + Cu.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : On plonge un fil de cuivre Cu dans une solution incolore de nitrate d\'argent (Ag⁺ + NO₃⁻). La solution devient bleue et un dépôt brillant d\'argent métallique apparaît. Écrire les deux demi-équations et l\'équation-bilan de la réaction.',
        'Correction : 1. Couples en présence : Ag⁺/Ag et Cu²⁺/Cu. 2. Réduction des ions argent : Ag⁺ + 1 e⁻ ➔ Ag (à multiplier par 2). 3. Oxydation du cuivre : Cu ➔ Cu²⁺ + 2 e⁻. 4. Équation-bilan globale : Cu + 2 Ag⁺ ➔ Cu²⁺ + 2 Ag.',
        'Exercice 2 : Dans la réaction Zn + Fe²⁺ ➔ Zn²⁺ + Fe, identifier l\'oxydant, le réducteur, l\'espèce oxydée et l\'espèce réduite.',
        'Correction : Fe²⁺ capte 2 électrons : c\'est l\'oxydant, il subit une réduction (il est réduit en Fe). Zn cède 2 électrons : c\'est le réducteur, il subit une oxydation (il est oxydé en Zn²⁺).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma électronique : Le transfert d\'électrons en oxydoréduction',
    root: 'OXYDORÉDUCTION ION/MÉTAL',
    branches: [
      {
        name: 'DÉFINITIONS CLÉS',
        subtitle: 'Transfert d\'électrons',
        items: [
          'Oxydant : capte des électrons (Ox + n e⁻ ➔ Red)',
          'Réducteur : cède des électrons (Red ➔ Ox + n e⁻)',
          'Couple Ox/Red : toujours Ox à gauche, Red à droite',
          'Pas d\'électrons libres dans l\'équation-bilan finale'
        ]
      },
      {
        name: 'EXPÉRIENCE DU CUIVRE & ZINC',
        subtitle: 'Lame de Zn dans solution de Cu²⁺',
        items: [
          'La solution bleue s\'éclaircit (disparition de Cu²⁺)',
          'Dépôt métallique rouge de cuivre Cu sur la lame',
          'Oxydation : Zn ➔ Zn²⁺ + 2 e⁻',
          'Réduction : Cu²⁺ + 2 e⁻ ➔ Cu'
        ]
      },
      {
        name: 'BILAN RÉDOX',
        subtitle: 'Équilibre des charges',
        items: [
          'Zn + Cu²⁺ ➔ Zn²⁺ + Cu',
          'Cu + 2 Ag⁺ ➔ Cu²⁺ + 2 Ag (cas avec Ag⁺)',
          'Principe directeur du fonctionnement des piles chimiques',
          'Protection contre la corrosion des coques de navires'
        ]
      }
    ]
  },
  conclusion: `L'oxydoréduction est la chimie des échanges d'électrons. En maîtrisant l'écriture des demi-équations électroniques et la règle de conservation des charges, l'élève comprend le moteur chimique fondamental qui permet de produire de l'électricité dans les piles et accumulateurs.`
};

export const LESSON_11_PC_1ERE_L: LessonContent = {
  id: 'pc-1ere-l-chap-11',
  number: 'CHAPITRE 11',
  title: 'Pile électrochimique : pile Daniell',
  subject: 'Physique-Chimie',
  classLevel: 'Première L',
  readTime: '24 min',
  description: 'Constitution d\'une pile, demi-piles et pont salin, réactions aux électrodes (anode et cathode), circulation des électrons et des ions, et bilan énergétique.',
  introduction: `Une pile électrochimique est un générateur qui transforme directement l'énergie chimique libérée par une réaction d'oxydoréduction spontanée en énergie électrique utilisable par un circuit extérieur. Inventée en 1836 par le chimiste et physicien britannique John Frederic Daniell, la pile Daniell est le modèle didactique universel de pile à deux compartiments. En séparant physiquement le réducteur de l'oxydant tout en assurant la conduction ionique interne par un pont salin, elle contraint les électrons à transiter par les fils du circuit électrique extérieur, créant ainsi un courant électrique continu.`,
  sections: [
    {
      title: 'I. CONSTITUTION DÉTAILLÉE DE LA PILE DANIELL',
      content: [
        'La pile Daniell associe deux demi-piles distinctes reliées par un circuit extérieur et une jonction électrolytique :',
        '1. La demi-pile au zinc (Pôle négatif −) : Une lame de zinc métallique Zn plongeant dans une solution aqueuse de sulfate de zinc (Zn²⁺ + SO₄²⁻).',
        '2. La demi-pile au cuivre (Pôle positif +) : Une lame de cuivre métallique Cu plongeant dans une solution aqueuse de sulfate de cuivre (Cu²⁺ + SO₄²⁻).',
        '3. Le pont salin (ou pont électrolytique) : Tube en U ou bande de papier filtre imbibé d\'un électrolyte inerte très conducteur (solution concentrée de chlorure de potassium K⁺ + Cl⁻ ou de nitrate de potassium K⁺ + NO₃⁻).',
        '4. Le circuit extérieur : Fils de connexion en cuivre, résistance ou ampoule témoin, et un voltmètre ou ampèremètre.'
      ]
    },
    {
      title: 'II. FONCTIONNEMENT ET RÉACTIONS AUX ÉLECTRODES',
      content: [
        'Dès la fermeture du circuit électrique :',
        '1. À l\'électrode de zinc (Pôle négatif / Anode) : Il s\'y produit une OXYDATION. Les atomes de zinc métallique cèdent deux électrons et passent en solution sous forme d\'ions zinc : Zn ➔ Zn²⁺ + 2 e⁻. La lame de zinc s\'érode et perd de la masse.',
        '2. À l\'électrode de cuivre (Pôle positif / Cathode) : Il s\'y produit une RÉDUCTION. Les ions cuivre Cu²⁺ de la solution captent les électrons arrivant du circuit pour former du cuivre métallique : Cu²⁺ + 2 e⁻ ➔ Cu. La lame de cuivre s\'épaissit.',
        'Moyen mnémotechnique universel : Voyelle avec Voyelle (Anode = Oxydation) ; Consonne avec Consonne (Cathode = Réduction).'
      ]
    },
    {
      title: 'III. SENS DE CIRCULATION DES PORTEURS DE CHARGE',
      content: [
        '1. Dans le circuit métallique extérieur :',
        '• Les électrons (e⁻) : Partent de la borne négative (lame de zinc où ils sont libérés) et se déplacent vers la borne positive (lame de cuivre où ils sont consommés).',
        '• Le courant électrique conventionnel (I) : Circule en sens inverse des électrons, du pôle positif (+) vers le pôle négatif (−).',
        '2. Dans les solutions et le pont salin (conduction par les ions) :',
        '• Les anions (ions négatifs Cl⁻ ou SO₄²⁻) migrent vers la demi-pile de zinc pour compenser l\'apparition des charges positives Zn²⁺.',
        '• Les cations (ions positifs K⁺ ou Zn²⁺) migrent vers la demi-pile de cuivre pour compenser la disparition des ions positifs Cu²⁺.'
      ]
    },
    {
      title: 'IV. LE RÔLE CAPITAL DU PONT SALIN ET FORCE ÉLECTROMOTRICE',
      content: [
        '1. Les deux rôles indispensables du pont salin :',
        '• Assurer la fermeture et la continuité électrique du circuit en permettant le passage des ions.',
        '• Maintenir l\'électroneutralité permanente des solutions dans chaque compartiment sans mélanger directement les réactifs (un mélange direct court-circuiterait la pile en dégageant de la chaleur pure sans courant extérieur).',
        '2. La Force Électromotrice (f.é.m. notée E) : Mesurée en circuit ouvert avec un voltmètre de haute impédance, la tension à vide d\'une pile Daniell standard vaut environ E ≈ 1,10 Volt.',
        '3. Équation-bilan globale de la pile en fonctionnement : Zn + Cu²⁺ ➔ Zn²⁺ + Cu.'
      ]
    },
    {
      title: 'V. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Dans une pile Daniell en fonctionnement, préciser le pôle positif, le pôle négatif, le nom des électrodes (anode/cathode) et le sens des électrons.',
        'Correction : Pôle négatif (−) : électrode de zinc, c\'est l\'anode (lieu de l\'oxydation). Pôle positif (+) : électrode de cuivre, c\'est la cathode (lieu de la réduction). Les électrons circulent dans le fil extérieur du pôle négatif (zinc) vers le pôle positif (cuivre).',
        'Exercice 2 : Que se passerait-il si l\'on retirait le pont salin pendant que la pile alimente une ampoule ?',
        'Correction : Si l\'on retire le pont salin, le circuit électrique est ouvert et les charges ioniques ne peuvent plus circuler pour neutraliser les solutions. Le courant s\'interrompt instantanément et l\'ampoule s\'éteint.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma de montage : La pile Daniell et la circulation des charges',
    root: 'PILE DANIELL (E ≈ 1,1 V)',
    branches: [
      {
        name: 'BORNE NÉGATIVE (−) : ANODE',
        subtitle: 'Lame de Zinc dans Zn²⁺',
        items: [
          'Oxydation anodique : Zn ➔ Zn²⁺ + 2 e⁻',
          'Libération d\'électrons vers le circuit extérieur',
          'Érosion progressive de la masse de zinc',
          'Migration d\'anions du pont salin pour neutraliser'
        ]
      },
      {
        name: 'BORNE POSITIVE (+) : CATHODE',
        subtitle: 'Lame de Cuivre dans Cu²⁺',
        items: [
          'Réduction cathodique : Cu²⁺ + 2 e⁻ ➔ Cu',
          'Arrivée des électrons du circuit métallique',
          'Dépôt de cuivre rouge et épaississement de la lame',
          'Décoloration progressive du bleu de la solution'
        ]
      },
      {
        name: 'PONT SALIN & CIRCUIT',
        subtitle: 'Fermeture et neutralité',
        items: [
          'Pont salin (K⁺, Cl⁻) fermant le circuit ionique',
          'Maintien strict de l\'électroneutralité des béchers',
          'Courant conventionnel I : du (+) cuivre vers le (−) zinc',
          'Tension à vide : f.é.m. E = 1,10 V'
        ]
      }
    ]
  },
  conclusion: `La pile Daniell est l'incarnation vivante de la conversion d'énergie chimique en énergie électrique. En dissociant spatialement l'oxydation anodique du zinc et la réduction cathodique du cuivre grâce au pont salin, elle dévoile les secrets de fabrication de toutes les batteries rechargeables qui alimentent aujourd'hui nos technologies nomades.`
};

export const COURSES_PC_1ERE_L: any[] = [
  {
    id: 'pc-1ere-l-chap-1',
    title: 'CHAPITRE 1 : ÉTUDE EXPÉRIMENTALE DE LA CHUTE LIBRE',
    type: 'cours',
    badge: 'Physique 1ère L • Mécanique',
    description: 'Définition et modèle de la chute libre sans vitesse initiale, équations horaires du mouvement, exploitation graphique de h = f(t²), estimation expérimentale de g et limites physiques.',
    lessonData: LESSON_1_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-2',
    title: 'CHAPITRE 2 : TRAVAIL ET PUISSANCE MÉCANIQUES',
    type: 'cours',
    badge: 'Physique 1ère L • Travail d\'une force',
    description: 'Définition du travail d\'une force constante W = F · d · cos θ, travail moteur, résistant et nul, travail du poids, et notions de puissance moyenne et instantanée.',
    lessonData: LESSON_2_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-3',
    title: 'CHAPITRE 3 : ÉNERGIE CINÉTIQUE',
    type: 'cours',
    badge: 'Physique 1ère L • Théorème de l\'énergie',
    description: 'Expression de l’énergie cinétique Ec = ½ · m · v², théorème de l’énergie cinétique, conséquences pratiques sur la sécurité routière et la distance de freinage.',
    lessonData: LESSON_3_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-4',
    title: 'CHAPITRE 4 : ÉNERGIE MÉCANIQUE ET CONSERVATION',
    type: 'cours',
    badge: 'Physique 1ère L • Conservation d\'énergie',
    description: 'Énergie potentielle de pesanteur Ep = mgh, énergie mécanique Em = Ec + Ep, principe de conservation de Em en l’absence de frottements et forces dissipatives.',
    lessonData: LESSON_4_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-5',
    title: 'CHAPITRE 5 : ÉTUDE EXPÉRIMENTALE DES LENTILLES MINCES',
    type: 'cours',
    badge: 'Physique 1ère L • Optique géométrique',
    description: 'Lentilles convergentes et divergentes, centre optique O, foyers F et F\', distance focale et vergence C = 1/f\', formule de conjugaison de Descartes et tracé des rayons.',
    lessonData: LESSON_5_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-6',
    title: 'CHAPITRE 6 : GÉNÉRALITÉS SUR LA CHIMIE ORGANIQUE',
    type: 'cours',
    badge: 'Chimie 1ère L • Carbone tétravalent',
    description: 'Définition de la chimie organique, tétravalence du carbone, formules brute, semi-développée et développée, isomérie de chaîne et de position, et analyse par combustion.',
    lessonData: LESSON_6_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-7',
    title: 'CHAPITRE 7 : LES ALCANES',
    type: 'cours',
    badge: 'Chimie 1ère L • Hydrocarbures saturés',
    description: 'Formule générale CnH2n+2, nomenclature IUPAC des chaînes linéaires et ramifiées, combustion complète et réaction de substitution radicalaire par les halogènes.',
    lessonData: LESSON_7_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-8',
    title: 'CHAPITRE 8 : ALCÈNES ET ALCYNES',
    type: 'cours',
    badge: 'Chimie 1ère L • Hydrocarbures insaturés',
    description: 'Hydrocarbures insaturés, alcènes CnH2n avec double liaison C=C, alcynes CnH2n-2 avec triple liaison C≡C, réactions d’addition (hydrogénation, hydratation) et test de l’eau de brome.',
    lessonData: LESSON_8_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-9',
    title: 'CHAPITRE 9 : LES COMPOSÉS ORGANIQUES OXYGÉNÉS',
    type: 'cours',
    badge: 'Chimie 1ère L • Alcools & Carbonyles',
    description: 'Principales fonctions oxygénées : alcools (-OH), aldéhydes (-CHO), cétones (C=O) et acides carboxyliques (-COOH), oxydation ménagée et tests d’identification (DNPH, liqueur de Fehling).',
    lessonData: LESSON_9_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-10',
    title: 'CHAPITRE 10 : RÉACTION D’OXYDORÉDUCTION ION MÉTALLIQUE/MÉTAL',
    type: 'cours',
    badge: 'Chimie 1ère L • Transfert d\'électrons',
    description: 'Définitions d\'oxydant, réducteur, oxydation et réduction, écriture du couple Ox/Red, règle du gamma, et équilibrage des réactions rédox métal-ion métallique.',
    lessonData: LESSON_10_PC_1ERE_L
  },
  {
    id: 'pc-1ere-l-chap-11',
    title: 'CHAPITRE 11 : PILE ÉLECTROCHIMIQUE : PILE DANIELL',
    type: 'cours',
    badge: 'Chimie 1ère L • Électrochimie',
    description: 'Constitution d\'une pile, demi-piles et pont salin, réactions aux électrodes (anode et cathode), circulation des électrons et des ions, et bilan énergétique.',
    lessonData: LESSON_11_PC_1ERE_L
  },
  {
    id: 'res-pc-1ere-l-1',
    title: 'Annexe : Formulaire fondamental et unités de Physique-Chimie Première L',
    type: 'ressource',
    badge: 'Formulaire & Méthode',
    description: 'Recueil complet des formules de mécanique, d\'optique et de chimie organique avec unités SI et conversions indispensables.',
    link: '#'
  }
];

export const PC_1ERE_L_PARTS = [
  { id: 'all', label: 'Tous les chapitres (11)', count: 11 },
  { id: 'physique', label: 'Partie I : Physique (Chap. 1 à 5)', count: 5 },
  { id: 'chimie', label: 'Partie II : Chimie (Chap. 6 à 11)', count: 6 }
];
