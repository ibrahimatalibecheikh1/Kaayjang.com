import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE PREMIÈRE S (SÉNÉGAL) — PARTIE PHYSIQUE (CHAPITRES P1 À P12)
// Grandes parties I, II, III, IV, V... Formules, Schémas & Travaux Dirigés
// Conforme au programme officiel de Première S1/S2
// =========================================================================

export const LESSON_P1_1ERE_S: LessonContent = {
  id: 'pc-1ere-s-p1',
  number: 'CHAPITRE P1',
  title: 'Travail et puissance mécaniques',
  subject: 'Physique-Chimie',
  classLevel: 'Première S',
  readTime: '26 min',
  description: 'Produit scalaire F·AB, travail moteur, résistant et nul, travail du poids, travail d\'un couple de forces en rotation W = M·θ, puissance instantanée et rendement mécanique.',
  introduction: `En mécanique du point et du solide indéformable, le travail d'une force traduit l'énergie transférée au système matériel lors d'un déplacement macroscopique. La notion de travail s'étend du mouvement de translation rectiligne au mouvement de rotation autour d'un axe fixe. L'étude quantitative du travail et de la puissance mécanique constitue la base du dimensionnement des machines, des moteurs thermiques et électriques et des transmissions industrielles.`,
  sections: [
    {
      title: 'I. TRAVAIL D\'UNE FORCE CONSTANTE EN TRANSLATION RECTILIGNE',
      content: [
        '1. Définition vectorielle : Pour une force constante F dont le point d\'application se déplace de A vers B :',
        'W_AB(F) = F · AB = F · AB · cos θ (en Joules, J).',
        '• Si cos θ > 0 (0° ≤ θ < 90°) : Le travail est MOTEUR (la force apporte de l\'énergie cinétique au système).',
        '• Si cos θ < 0 (90° < θ ≤ 180°) : Le travail est RÉSISTANT (la force prélève de l\'énergie mécanique au système).',
        '• Si θ = 90° : Le travail est NUL (une force constamment orthogonale à la trajectoire ne travaille pas).',
        '2. Travail du poids d\'un corps : W_AB(P) = m · g · (z_A − z_B) = ± m · g · h. Indépendant du chemin suivi, le champ de pesanteur est un champ de force conservatif.'
      ]
    },
    {
      title: 'II. TRAVAIL D\'UNE FORCE OU D\'UN COUPLE EN ROTATION AUTOUR D\'UN AXE FIXE',
      content: [
        '1. Moment d\'une force par rapport à un axe (Δ) : M_Δ(F) = ± F · d (en N·m), où d est la distance orthogonale de l\'axe à la droite d\'action de la force.',
        '2. Travail élémentaire et travail fini en rotation : Lors d\'une rotation d\'un angle θ (en radians) autour de l\'axe fixe :',
        'W = M_Δ · θ.',
        '3. Travail d\'un couple de forces : W = M_c · θ. Si la vitesse angulaire ω est constante, la puissance développée vaut P = M_c · ω (avec ω en rad·s⁻¹ et P en Watts).'
      ]
    },
    {
      title: 'III. PUISSANCE MÉCANIQUE ET RENDEMENT ÉNERGÉTIQUE',
      content: [
        '1. Puissance moyenne : P_m = W / Δt (1 W = 1 J·s⁻¹).',
        '2. Puissance instantanée : P = F · v = F · v · cos θ en translation, et P = M_Δ · ω en rotation.',
        '3. Rendement énergétique d\'un convertisseur : η = Énergie utile / Énergie fournie = P_utile / P_fournie ≤ 1 (ou exprimé en %). Les frottements dissipatifs font que le rendement est toujours strictement inférieur à 100 %.'
      ]
    },
    {
      title: 'IV. EXERCICES D\'APPLICATION ET TD GUIDÉS',
      content: [
        'Exercice 1 : Un treuil cylindrique de rayon r = 10 cm tourne à la vitesse constante de 120 tr/min sous l\'action d\'un moteur développant un couple constant M = 50 N·m. Calculer la vitesse angulaire ω, la puissance du moteur et le travail fourni en 2 minutes.',
        'Correction : 1. Vitesse angulaire : ω = 120 tr/min = (120 × 2π) / 60 = 4π rad·s⁻¹ ≈ 12,57 rad·s⁻¹. 2. Puissance instantanée : P = M · ω = 50 × 4π = 200π W ≈ 628,3 W. 3. Travail fourni en Δt = 120 s : W = P · Δt = 628,3 × 120 = 75 398 J ≈ 75,4 kJ.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma vectoriel : Travail en translation et travail de couple en rotation',
    root: 'TRAVAIL & PUISSANCE S1/S2',
    branches: [
      {
        name: 'TRANSLATION (F · AB)',
        subtitle: 'Produit scalaire',
        items: [
          'W = F · d · cos θ (Joules)',
          'Travail du poids : W(P) = m · g · (zA − zB)',
          'Frottements résistants : W(f) = −f · d',
          'Puissance instantanée : P = F · v · cos θ'
        ]
      },
      {
        name: 'ROTATION (AXE FIXE)',
        subtitle: 'Moment et angle',
        items: [
          'Moment de force : M = F · d (N·m)',
          'Travail de rotation : W = M · θ (θ en radians)',
          'Puissance de rotation : P = M · ω',
          'Conversion : ω = (2π · N) / 60'
        ]
      },
      {
        name: 'RENDEMENT MÉCANIQUE',
        subtitle: 'Pertes par frottements',
        items: [
          'Rendement η = P_utile / P_consommée < 1',
          'Pertes dissipées sous forme thermique',
          'Applications : treuils, grues, boîtes de vitesses',
          'Optimisation de l\'énergie industrielle'
        ]
      }
    ]
  },
  conclusion: `Le travail mécanique est la mesure du transfert énergétique. Sa formulation scalaire rigoureuse en translation comme en rotation constitue le socle des bilans de puissance indispensables en série scientifique.`
};

export const LESSON_P4_1ERE_S: LessonContent = {
  id: 'pc-1ere-s-p4',
  number: 'CHAPITRE P4',
  title: 'Calorimétrie et échanges thermiques',
  subject: 'Physique-Chimie',
  classLevel: 'Première S',
  readTime: '26 min',
  description: 'Capacité thermique massique c, chaleur sensible Q = mcΔT, chaleurs latentes de changement d\'état Q = mL, méthode des mélanges au calorimètre et équilibre thermique.',
  introduction: `La calorimétrie est la partie de la thermodynamique expérimentale consacrée à la mesure quantitative des quantités de chaleur échangées entre des corps portés à des températures différentes ou lors de transitions de phases (fusion, vaporisation, solidification). Dans un calorimètre modélisé comme un système thermiquement isolé du milieu extérieur, le principe de conservation de l'énergie impose que la somme algébrique de toutes les chaleurs échangées soit rigoureusement nulle à l'équilibre thermique.`,
  sections: [
    {
      title: 'I. CHALEUR SENSIBLE ET CAPACITÉ THERMIQUE MASSIQUE',
      content: [
        '1. Chaleur sensible : Quantité d\'énergie thermique échangée par un corps de masse m dont la température varie de Ti à Tf sans changement d\'état physique :',
        'Q = m · c · (T_f − T_i) = m · c · ΔT.',
        '• m : Masse en kilogrammes (kg).',
        '• c : Capacité thermique massique de la substance en J·kg⁻¹·K⁻¹ (ou J·kg⁻¹·°C⁻¹). Eau liquide : c_eau = 4 185 J·kg⁻¹·K⁻¹.',
        '• ΔT = Tf − Ti : Variation de température (en kelvins ou degrés Celsius).',
        '2. Capacité thermique du calorimètre (valeur en eau μ) : Le calorimètre et ses accessoires absorbent également de la chaleur : Q_cal = C_cal · ΔT = μ · c_eau · ΔT.'
      ]
    },
    {
      title: 'II. CHALEUR LATENTE DE CHANGEMENT D\'ÉTAT (TRANSITION DE PHASE)',
      content: [
        '1. Propriété physique fondamentale : Pour un corps pur sous pression constante, tout changement d\'état physique s\'effectue à TEMPÉRATURE RIGOUREUSEMENT CONSTANTE.',
        '2. Formule de l\'énergie de changement d\'état : Q = m · L.',
        '• L : Chaleur latente massique de transition en J·kg⁻¹.',
        '• Fusion de la glace à 0 °C : L_f ≈ 334 kJ·kg⁻¹ (chaleur absorbée par la glace).',
        '• Vaporisation de l\'eau liquide à 100 °C : L_v ≈ 2 260 kJ·kg⁻¹.',
        '• Pour les transitions inverses (solidification, liquéfaction), Q = −m · L (chaleur cédée au milieu extérieur).'
      ]
    },
    {
      title: 'III. MÉTHODE DES MÉLANGES AU CALORIMÈTRE ET ÉQUILIBRE THERMIQUE',
      content: [
        '1. Équation fondamentale d\'équilibre : Dans une enceinte adiabatique sans fuite thermique :',
        'Σ Q_échangées = 0.',
        'Q_corps_chauds (cédée < 0) + Q_corps_froids (gagnée > 0) + Q_calorimètre = 0.',
        '2. Détermination expérimentale de la capacité d\'un métal : On plonge un bloc métallique chaud de masse m₁ portée à T₁ dans un calorimètre contenant une masse m₂ d\'eau à T₂. On mesure la température finale d\'équilibre Te et on en déduit la capacité massique inconnue c_métal.'
      ]
    },
    {
      title: 'IV. EXERCICE RÉSOLU D\'APPLICATION',
      content: [
        'Énoncé : Dans un calorimètre de capacité thermique négligeable contenant 200 g d\'eau à 20 °C, on introduit un morceau de cuivre de masse 150 g préalablement chauffé à 100 °C. La température d\'équilibre finale mesurée est Te = 25,2 °C. Calculer la capacité thermique massique du cuivre (on donne c_eau = 4 185 J·kg⁻¹·K⁻¹).',
        'Correction : 1. Chaleur reçue par l\'eau : Q_eau = m_eau · c_eau · (Te − Ti_eau) = 0,200 × 4 185 × (25,2 − 20) = 0,200 × 4 185 × 5,2 = 4 352,4 J. 2. Chaleur cédée par le cuivre : Q_cuivre = m_cuivre · c_cuivre · (Te − Ti_cuivre) = 0,150 × c_cuivre × (25,2 − 100) = −11,22 × c_cuivre. 3. Équilibre thermique : Q_eau + Q_cuivre = 0 ➔ 4 352,4 − 11,22 × c_cuivre = 0 ➔ c_cuivre = 4 352,4 / 11,22 ≈ 388 J·kg⁻¹·K⁻¹.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma calorimétrique : Le bilan d\'échanges thermiques au calorimètre',
    root: 'CALORIMÉTRIE (Σ Q = 0)',
    branches: [
      {
        name: 'CHALEUR SENSIBLE',
        subtitle: 'Variation de température',
        items: [
          'Q = m · c · ΔT (en Joules)',
          'Capacité de l\'eau liquide : c = 4 185 J·kg⁻¹·K⁻¹',
          'Échauffement (ΔT > 0) : chaleur reçue Q > 0',
          'Refroidissement (ΔT < 0) : chaleur cédée Q < 0'
        ]
      },
      {
        name: 'CHANGEMENT D\'ÉTAT',
        subtitle: 'Température constante',
        items: [
          'Q = m · L (chaleur latente massique)',
          'Fusion de la glace à 0 °C : Lf = 334 kJ/kg',
          'Vaporisation de l\'eau à 100 °C : Lv = 2 260 kJ/kg',
          'Rupture des liaisons intermoléculaires sans hausse de T'
        ]
      },
      {
        name: 'LE CALORIMÈTRE ADIABATIQUE',
        subtitle: 'Système isolé',
        items: [
          'Vase Dewar à double paroi argentée sous vide',
          'Agitateur pour homogénéiser la température',
          'Thermomètre de précision mesurant T_équilibre',
          'Loi de conservation : Q_gagnée + Q_cédée = 0'
        ]
      }
    ]
  },
  conclusion: `La calorimétrie traduit la conservation de l'énergie thermique. Le principe fondamental Σ Q = 0 permet d'identifier expérimentalement la nature des métaux et d'évaluer les énergies massiques de transition de phase.`
};

export const LESSON_P5_1ERE_S: LessonContent = {
  id: 'pc-1ere-s-p5',
  number: 'CHAPITRE P5',
  title: 'Force et champ électrostatiques',
  subject: 'Physique-Chimie',
  classLevel: 'Première S',
  readTime: '26 min',
  description: 'Loi de Coulomb, vecteur champ électrostatique E = F/q, champ créé par une charge ponctuelle, principe de superposition et champ uniforme entre plaques parallèles.',
  introduction: `L'interaction électrostatique est l'une des interactions fondamentales de la matière, gouvernant la cohésion des atomes, des molécules et des solides cristallins. Formalisée expérimentalement par Charles-Augustin de Coulomb en 1785 grâce à sa balance de torsion, la loi de Coulomb décrit la force mutuelle attractive ou répulsive exercée entre deux charges électriques immobiles. Ce chapitre introduit le concept spatial fondamental de champ électrostatique qui caractérise la modification des propriétés de l'espace par la présence de charges électriques.`,
  sections: [
    {
      title: 'I. LA LOI DE COULOMB',
      content: [
        '1. Énoncé fondamental : Deux charges ponctuelles q₁ et q₂ séparées par une distance r dans le vide exercent l\'une sur l\'autre des forces électrostatiques directement opposées, dirigées selon la droite qui les joint, proportionnelles au produit des charges et inversement proportionnelles au carré de leur distance :',
        'F₁₂ = F₂₁ = k · (|q₁ · q₂|) / r².',
        '• q₁, q₂ : Charges électriques exprimées en coulombs (C).',
        '• r : Distance en mètres (m).',
        '• k : Constante diélectrique de Coulomb dans le vide : k = 1 / (4πε₀) ≈ 9,0 × 10⁹ N·m²·C⁻².',
        '2. Sens de la force : Répulsion si les charges sont de même signe (q₁·q₂ > 0) ; Attraction si les charges sont de signes contraires (q₁·q₂ < 0).'
      ]
    },
    {
      title: 'II. LE VECTEUR CHAMP ÉLECTROSTATIQUE (E)',
      content: [
        '1. Définition : Toute charge source crée autour d\'elle dans l\'espace un champ vectoriel électrostatique E. Si l\'on place en un point M de ce champ une charge test q, elle subit la force F = q · E.',
        '2. Caractéristiques du vecteur E créé par une charge ponctuelle Q située en O :',
        '• Norme : E = k · |Q| / r² (exprimé en Volts par mètre, V·m⁻¹ ou en N·C⁻¹).',
        '• Direction : La droite passant par O et M.',
        '• Sens : Centrifuge (dirigé vers l\'extérieur) si la charge source Q est positive (Q > 0) ; Centripète (dirigé vers la charge source) si Q est négative (Q < 0).',
        '3. Principe de superposition : Le champ total créé par plusieurs charges est la somme vectorielle des champs individuels : E_total = E₁ + E₂ + ...'
      ]
    },
    {
      title: 'III. LE CHAMP ÉLECTROSTATIQUE UNIFORME ENTRE ARMATURES PARALLÈLES',
      content: [
        '1. Définition d\'un champ uniforme : Un champ est dit uniforme dans une région de l\'espace si le vecteur E conserve en tout point la même direction, le même sens et la même intensité.',
        '2. Réalisation expérimentale : Entre deux plaques métalliques planes et parallèles (condensateur plan) distantes de d et soumises à une tension U = V_A − V_B :',
        '• Le champ E est perpendiculaire aux plaques.',
        '• E est dirigé de la plaque positive (potentiel le plus élevé) vers la plaque négative (potentiel le plus bas).',
        '• Intensité du champ : E = U / d (avec U en Volts, d en mètres, E en V·m⁻¹).'
      ]
    },
    {
      title: 'IV. EXERCICE D\'APPLICATION CORRIGÉ',
      content: [
        'Énoncé : Deux plaques conductrices planes horizontales sont distantes de d = 5,0 cm. On applique entre ces armatures une tension U = 500 V. 1. Calculer la norme du champ électrostatique E régnant entre les plaques. 2. Déterminer la force électrostatique subie par un électron (q = −e = −1,6 × 10⁻¹⁹ C) placé dans cet espace et comparer sa valeur au poids de l\'électron (m_e = 9,1 × 10⁻³¹ kg, g = 9,8 m·s⁻²).',
        'Correction : 1. E = U / d = 500 / 0,05 = 10 000 V·m⁻¹ = 1,0 × 10⁴ V·m⁻¹. 2. Force électrostatique : F = |q| · E = 1,6 × 10⁻¹⁹ × 1,0 × 10⁴ = 1,6 × 10⁻¹⁵ N (dirigée verticalement vers le haut vers la plaque positive). 3. Poids de l\'électron : P = m · g = 9,1 × 10⁻³¹ × 9,8 ≈ 8,9 × 10⁻³⁰ N. Conclusion : F / P ≈ 1,8 × 10¹⁴. Le poids de l\'électron est totalement négligeable devant la force électrostatique (plus de 100 000 milliards de fois plus faible !).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma vectoriel : Champ électrostatique ponctuel et uniforme',
    root: 'CHAMP ÉLECTROSTATIQUE (E)',
    branches: [
      {
        name: 'LOI DE COULOMB',
        subtitle: 'Interaction entre charges',
        items: [
          'F = k · |q₁ · q₂| / r²',
          'k = 9,0 × 10⁹ N·m²·C⁻²',
          'Charges de même signe ➔ Répulsion mutuelle',
          'Signes opposés ➔ Attraction mutuelle'
        ]
      },
      {
        name: 'CHAMP PONCTUEL',
        subtitle: 'Source Q à distance r',
        items: [
          'E = k · |Q| / r² (V/m ou N/C)',
          'Charge positive (Q > 0) ➔ Champ centrifuge sortant',
          'Charge négative (Q < 0) ➔ Champ centripète rentrant',
          'Lignes de champ radiales divergeant de la charge'
        ]
      },
      {
        name: 'CHAMP UNIFORME',
        subtitle: 'Condensateur plan (E = U/d)',
        items: [
          'Lignes de champ parallèles et équidistantes',
          'Vecteur E dirigé du (+) vers le (−)',
          'Force F = q · E indépendante de la position',
          'Déviation d\'électrons dans les oscilloscopes'
        ]
      }
    ]
  },
  conclusion: `L'interaction électrostatique illustre la puissance du concept de champ. Entre deux armatures planes, l'obtention d'un champ uniforme E = U/d permet de dévier et d'accélérer des particules chargées avec une précision chirurgicale, principe au cœur des tubes cathodiques, de la spectrométrie de masse et des accélérateurs de particules.`
};
