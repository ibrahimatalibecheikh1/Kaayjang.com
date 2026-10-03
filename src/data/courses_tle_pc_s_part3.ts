import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 3 (PHYSIQUE MÉCANIQUE & CHAMPS)
// Conforme au programme officiel national du Sénégal (Baccalauréat Série S)
// Leçons S-6 à S-9 : Cinématique, Lois de Newton & Balistique, Particules chargées, Satellites & Kepler
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_PC_TLE_S_BALISTIQUE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">
    FIGURE S-6 : TRAJECTOIRE PARABOLIQUE D'UN PROJECTILE DANS LE CHAMP DE PESANTEUR
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#2563eb">
    Conditions initiales : v₀ faisant un angle α avec l'horizontale, vecteur accélération a = g = (0, -g)
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2.5" />
  <line x1="120" y1="340" x2="120" y2="70" stroke="#334155" stroke-width="2.5" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#1e293b">x (Portée)</text>
  <text x="95" y="80" font-size="13" font-weight="bold" fill="#1e293b">y (Altitude)</text>
  <text x="105" y="335" font-size="12" font-weight="bold" fill="#334155">O</text>

  <!-- Parabolic Trajectory -->
  <path d="M 120 320 Q 320 80 540 320" fill="none" stroke="#dc2626" stroke-width="3.5" />
  <text x="460" y="160" font-size="12" font-weight="bold" fill="#dc2626">Trajectoire parabolique</text>

  <!-- Initial velocity vector v0 -->
  <line x1="120" y1="320" x2="220" y2="200" stroke="#2563eb" stroke-width="3" />
  <polygon points="220,200 205,206 214,217" fill="#2563eb" />
  <text x="210" y="190" font-size="13" font-weight="bold" fill="#2563eb">v₀</text>

  <!-- Angle alpha arc -->
  <path d="M 160 320 A 40 40 0 0 0 152 282" fill="none" stroke="#0284c7" stroke-width="2" />
  <text x="170" y="305" font-size="12" font-weight="bold" fill="#0284c7">α</text>

  <!-- Top of trajectory (Flèche H) -->
  <circle cx="320" cy="140" r="5" fill="#16a34a" />
  <text x="320" y="125" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">Sommet S (v_y = 0)</text>
  <line x1="120" y1="140" x2="320" y2="140" stroke="#16a34a" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="60" y="145" font-size="11" font-weight="bold" fill="#16a34a">H = Flèche</text>

  <!-- Impact Point P (Portée X_P) -->
  <circle cx="540" cy="320" r="6" fill="#dc2626" />
  <text x="540" y="345" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">P (Portée X_P)</text>

  <!-- Gravity vector g -->
  <line x1="320" y1="140" x2="320" y2="185" stroke="#475569" stroke-width="2.5" />
  <polygon points="320,195 315,183 325,183" fill="#475569" />
  <text x="330" y="180" font-size="12" font-weight="bold" fill="#475569">g (Pesanteur)</text>

  <rect x="360" y="220" width="370" height="90" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="375" y="242" font-size="11" font-weight="bold" fill="#1e3a8a">Formules fondamentales de balistique :</text>
  <text x="375" y="262" font-size="11" fill="#1d4ed8">• Trajectoire : y(x) = - [g / (2 v₀² cos²α)] · x² + (tan α) · x</text>
  <text x="375" y="282" font-size="11" fill="#1d4ed8">• Flèche maximale : H = (v₀² sin²α) / (2g)</text>
  <text x="375" y="300" font-size="11" fill="#1d4ed8">• Portée horizontale : X_P = (v₀² sin 2α) / g (maximale pour α = 45°)</text>
</svg>`;

export const SVG_PC_TLE_S_LORENTZ = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#713f12">
    FIGURE S-7 : MOUVEMENT CIRCULAIRE D'UNE PARTICULE CHARGÉE DANS UN CHAMP B
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#854d0e">
    Force magnétique de Lorentz F_m = q(v ∧ B) normale à la trajectoire (mouvement uniforme à rayon R = mv / (|q|B))
  </text>

  <!-- Magnetic Field Area (crosses for into page) -->
  <rect x="180" y="80" width="400" height="260" rx="12" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6,4" />
  <text x="560" y="105" font-size="13" font-weight="bold" fill="#854d0e">B (Entrant ⊗)</text>

  <!-- Crosses representing B into the page -->
  <g fill="#ca8a04" font-size="16" font-weight="bold" font-family="monospace">
    <text x="210" y="120">⊗</text><text x="270" y="120">⊗</text><text x="330" y="120">⊗</text><text x="390" y="120">⊗</text><text x="450" y="120">⊗</text><text x="510" y="120">⊗</text>
    <text x="210" y="160">⊗</text><text x="270" y="160">⊗</text><text x="330" y="160">⊗</text><text x="390" y="160">⊗</text><text x="450" y="160">⊗</text><text x="510" y="160">⊗</text>
    <text x="210" y="200">⊗</text><text x="270" y="200">⊗</text><text x="330" y="200">⊗</text><text x="390" y="200">⊗</text><text x="450" y="200">⊗</text><text x="510" y="200">⊗</text>
    <text x="210" y="240">⊗</text><text x="270" y="240">⊗</text><text x="330" y="240">⊗</text><text x="390" y="240">⊗</text><text x="450" y="240">⊗</text><text x="510" y="240">⊗</text>
    <text x="210" y="280">⊗</text><text x="270" y="280">⊗</text><text x="330" y="280">⊗</text><text x="390" y="280">⊗</text><text x="450" y="280">⊗</text><text x="510" y="280">⊗</text>
  </g>

  <!-- Circular path of positive particle q > 0 -->
  <path d="M 120 210 L 260 210 A 100 100 0 0 1 360 110" fill="none" stroke="#dc2626" stroke-width="3" />
  <line x1="260" y1="210" x2="310" y2="210" stroke="#2563eb" stroke-width="2.5" />
  <polygon points="310,210 300,205 300,215" fill="#2563eb" />
  <text x="290" y="200" font-size="12" font-weight="bold" fill="#2563eb">v</text>

  <!-- Lorentz Force pointing to center of curvature -->
  <line x1="260" y1="210" x2="260" y2="160" stroke="#16a34a" stroke-width="2.5" />
  <polygon points="260,150 255,162 265,162" fill="#16a34a" />
  <text x="270" y="160" font-size="12" font-weight="bold" fill="#16a34a">F_m ⊥ v</text>

  <!-- Center of curvature C -->
  <circle cx="260" cy="110" r="5" fill="#dc2626" />
  <text x="250" y="100" font-size="12" font-weight="bold" fill="#dc2626">Centre C</text>
  <line x1="260" y1="110" x2="260" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3" />
  <text x="240" y="160" font-size="12" font-weight="bold" fill="#dc2626">R</text>

  <!-- Applications Card -->
  <rect x="60" y="280" width="640" height="85" rx="8" fill="#ffffff" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="75" y="302" font-size="11" font-weight="bold" fill="#713f12">Applications technologiques majeures au Bac S :</text>
  <text x="75" y="322" font-size="11" fill="#854d0e">• Spectromètre de masse de Bainbridge : séparation des isotopes de masse différente m₁ et m₂ (R₁ ≠ R₂).</text>
  <text x="75" y="340" font-size="11" fill="#854d0e">• Cyclotron d'Ernest Lawrence : accélération de protons grâce à la période indépendante de la vitesse T = 2πm / (qB).</text>
</svg>`;

// =========================================================================
// LEÇON S-6 : CINÉMATIQUE DU POINT MATÉRIEL
// =========================================================================
export const LESSON_6_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-6`,
  number: `Leçon S-6`,
  title: `Cinématique du Point Matériel`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de cinématique vectorielle et démonstrations`,
  description: `Repères cartésien et de Frenet, vecteurs position OM, vitesse v et accélération a, composantes tangentielle et normale, mouvements rectilignes uniforme (MRU) et uniformément varié (MRUV), et mouvement circulaire uniforme (MCU).`,
  image: {
    caption: `Figure S-6 : Repère intrinsèque mobile de Frenet et décomposition du vecteur accélération en composantes tangentielle et normale.`,
    svgContent: SVG_PC_TLE_S_BALISTIQUE
  },
  diagram: {
    title: `Cinématique du Point Matériel`,
    svgContent: SVG_PC_TLE_S_BALISTIQUE
  },
  introduction: `La cinématique est la branche de la mécanique classique qui décrit géométriquement les mouvements des corps dans l'espace en fonction du temps, sans se préoccuper des forces physiques qui les provoquent. En Terminale S, la maîtrise de l'analyse vectorielle différentielle est essentielle : la vitesse instantanée est la dérivée du vecteur position par rapport au temps, et l'accélération est la dérivée du vecteur vitesse. 
Ce chapitre enseigne la décomposition du mouvement dans le repère cartésien fixe (O; i, j, k) et dans le repère mobile de Frenet (M; τ, n) adapté aux trajectoires curvilignes, et établit les équations horaires de tous les mouvements fondamentaux au Baccalauréat.`,
  conclusion: `En conclusion, la cinématique en Série S repose sur la chaîne d'intégration différentielle : a(t) ➔ v(t) ➔ OM(t) avec détermination rigoureuse des constantes d'intégration grâce aux conditions initiales à t = 0. Dans le repère de Frenet, l'accélération se décompose en : a = a_t·τ + a_n·n avec a_t = dv/dt (mesure la variation de la valeur de la vitesse) et a_n = v²/ρ (mesure la variation de la direction du mouvement, toujours dirigée vers le centre de courbure). Si a_t = 0, le mouvement est uniforme.`,
  sections: [
    {
      title: `I. VECTEURS CINÉMATIQUES DANS LE REPÈRE CARTÉSIEN`,
      subsections: [
        {
          subtitle: `A. Vecteur position, vitesse et accélération`,
          content: [
            `1. Vecteur position : Dans un repère orthonormé (O; i, j, k), la position d'un point mobile M à l'instant t est repérée par :`,
            `OM(t) = x(t) i + y(t) j + z(t) k.`,
            `Distance à l'origine : OM = ||OM|| = √(x² + y² + z²).`,
            `2. Vecteur vitesse instantanée : Dérivée temporelle du vecteur position :`,
            `v(t) = dOM / dt = x'(t) i + y'(t) j + z'(t) k = v_x i + v_y j + v_z k.`,
            `Propriété fondamentale : Le vecteur vitesse est TOUJOURS TANGENT à la trajectoire au point M(t) et orienté dans le sens du mouvement. Sa norme est v = ||v|| = √(v_x² + v_y² + v_z²).`,
            `3. Vecteur accélération instantanée : Dérivée temporelle du vecteur vitesse :`,
            `a(t) = dv / dt = d²OM / dt² = x''(t) i + y''(t) j + z''(t) k = a_x i + a_y j + a_z k.`
          ]
        }
      ]
    },
    {
      title: `II. LE REPÈRE DE FRENET ET ACCÉLÉRATIONS INTRINSÈQUES`,
      subsections: [
        {
          subtitle: `A. Définition du repère mobile de Frenet (M; τ, n)`,
          content: [
            `Pour une trajectoire plane curviligne, le repère mobile de Frenet a pour origine le point mobile M lui-même et pour vecteurs unitaires orthonormés :`,
            `• τ (tau) : vecteur unitaire TANGENT à la trajectoire en M et orienté dans le sens du mouvement.`,
            `• n : vecteur unitaire NORMAL à la trajectoire, perpendiculaire à τ et dirigé vers l'intérieur de la courbure (centripète).`,
            `Expression de la vitesse dans Frenet : v = v · τ.`,
            `Théorème de l'accélération de Frenet : Le vecteur accélération s'exprime sous la forme :`,
            `a = a_t · τ + a_n · n = (dv / dt) · τ + (v² / ρ) · n,`,
            `où ρ (rhô) est le rayon de courbure de la trajectoire en M.`,
            `• a_t = dv / dt : accélération tangentielle.`,
            `• a_n = v² / ρ : accélération normale.`
          ]
        }
      ]
    },
    {
      title: `III. ÉTUDE DES MOUVEMENTS FONDAMENTAUX`,
      subsections: [
        {
          subtitle: `A. Mouvement Rectiligne Uniformément Varié (MRUV)`,
          content: [
            `Trajectoire rectiligne le long d'un axe Ox avec vecteur accélération CONSTANT : a = a₀ = constante.`,
            `Par intégration successive par rapport au temps :`,
            `1. Équation horaire de la vitesse : v(t) = a₀ · t + v₀.`,
            `2. Équation horaire de la position : x(t) = 1/2 · a₀ · t² + v₀ · t + x₀.`,
            `3. Relation indépendante du temps (très utile au Bac) : En éliminant t entre les deux équations :`,
            `v² - v₀² = 2 · a₀ · (x - x₀).`
          ]
        },
        {
          subtitle: `B. Mouvement Circulaire Uniforme (MCU)`,
          content: [
            `Trajectoire circulaire de rayon R avec vitesse constante v = v₀ :`,
            `1. dv/dt = 0 ⟹ a_t = 0 (l'accélération tangentielle est nulle).`,
            `2. a_n = v² / R = R · ω² (l'accélération normale est non nulle et constante).`,
            `Le vecteur accélération est purement RADIAL et CENTRIPÈTE : a = (v² / R) · n.`,
            `Vitesse angulaire ω = v / R (en rad/s).`,
            `Période du mouvement : T = 2πR / v = 2π / ω.`,
            `Fréquence : N = 1 / T (en Hertz Hz).`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-7 : DYNAMIQUE ET LOIS DE NEWTON : MOUVEMENTS BALISTIQUES
// =========================================================================
export const LESSON_7_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-7`,
  number: `Leçon S-7`,
  title: `Dynamique et Lois de Newton : Mouvements Balistiques`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de mécanique newtonienne intégrale`,
  description: `Les trois lois fondamentales de Newton, référentiels galiléens, principe fondamental de la dynamique (PFD), mouvement d'un projectile dans le champ de pesanteur uniforme, équations différentielles, équations horaires, équation de la trajectoire parabolique, calcul de la flèche H et de la portée X_P.`,
  image: {
    caption: `Figure S-7 : Éléments géométriques de la trajectoire balistique parabolique : vecteur vitesse initiale, angle de tir, flèche et portée.`,
    svgContent: SVG_PC_TLE_S_BALISTIQUE
  },
  diagram: {
    title: `Lois de Newton et Balistique`,
    svgContent: SVG_PC_TLE_S_BALISTIQUE
  },
  introduction: `Publiés en 1687 dans les monumentaux "Philosophiae Naturalis Principia Mathematica", les trois lois de la dynamique énoncées par Sir Isaac Newton ont constitué la première synthèse universelle des lois physiques régissant l'Univers. Elles permettent de calculer avec une exactitude vertigineuse la trajectoire de tout mobile soumis à des forces extérieures, du ballon de football tiré sur un terrain de Dakar jusqu'au satellite gravitant autour de la Terre. 
Ce chapitre est un pilier absolu de l'épreuve de Physique au Baccalauréat Scientifique au Sénégal : il enseigne l'application rigoureuse du Principe Fondamental de la Dynamique (PFD) et développe l'étude intégrale du tir balistique dans le champ de pesanteur uniforme terrestre.`,
  conclusion: `En conclusion, l'étude balistique d'un projectile au Baccalauréat obéit à un protocole immuable en 6 étapes : 1) Définir le système matériel et le référentiel d'étude (référentiel terrestre supposé galiléen), 2) Faire le bilan exhaustif des forces appliquées (dans le vide, le seul Poids P = m·g), 3) Appliquer la deuxième loi de Newton : m·a = m·g ⟹ a = g, 4) Projeter sur les axes Ox et Oy pour obtenir les équations différentielles x''(t) = 0 et y''(t) = -g, 5) Intégrer deux fois par rapport au temps avec les conditions initiales pour obtenir les équations horaires x(t) = (v₀ cos α)t et y(t) = -1/2 g t² + (v₀ sin α)t, 6) Éliminer le temps t pour établir l'équation de la parabole y(x) et calculer la flèche H et la portée X_P.`,
  sections: [
    {
      title: `I. LES TROIS LOIS FONDAMENTALES DE NEWTON`,
      subsections: [
        {
          subtitle: `A. Énoncé des trois principes universels`,
          content: [
            `1. Première loi de Newton (Principe d'inertie) : Dans un référentiel galiléen, si la somme vectorielle des forces extérieures appliquées à un solide est nulle (∑ F_ext = 0), alors son centre d'inertie G est soit au repos, soit en mouvement rectiligne et uniforme (v_G = vecteur constant).`,
            `2. Deuxième loi de Newton (Principe fondamental de la dynamique PFD) : Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un système matériel de masse m constante est égale au produit de sa masse par le vecteur accélération de son centre d'inertie :`,
            `∑ F_ext = m · a_G = d(p) / dt, où p = m · v est la quantité de mouvement.`,
            `3. Troisième loi de Newton (Principe des actions réciproques) : Lorsque deux corps A et B interagissent mutuellement, la force F_(A→B) exercée par A sur B et la force F_(B→A) exercée par B sur A sont opposées, qu'il y ait contact ou action à distance :`,
            `F_(A→B) = - F_(B→A).`
          ]
        }
      ]
    },
    {
      title: `II. ÉTUDE COMPLÈTE DU MOUVEMENT BALISTIQUE D'UN PROJECTILE`,
      subsections: [
        {
          subtitle: `A. Système, référentiel et conditions initiales`,
          content: [
            `• Système : Projectile ponctuel de masse m lancé à l'instant t = 0 de l'origine O(0, 0).`,
            `• Référentiel : Terrestre supposé galiléen muni du repère orthonormé (O; i, j) avec Oy vertical ascendant.`,
            `• Conditions initiales à t = 0 :`,
            `Position initiale : x(0) = 0 et y(0) = 0.`,
            `Vitesse initiale v₀ faisant un angle α avec l'horizontale :`,
            `v_x(0) = v₀ · cos(α) et v_y(0) = v₀ · sin(α).`
          ]
        },
        {
          subtitle: `B. Application du PFD et équations différentielles`,
          content: [
            `On néglige la résistance de l'air et la poussée d'Archimède. La seule force appliquée est le poids P = m · g.`,
            `D'après la 2ème loi de Newton :`,
            `P = m · a ⟺ m · g = m · a ⟺ a = g.`,
            `Remarque capitale : L'accélération du projectile est INDÉPENDANTE DE SA MASSE m ! Une boule de pétanque de 1 kg et une bille de plomb de 10 g suivent rigoureusement la même trajectoire dans le vide.`,
            `Projections sur les axes (avec g = -g · j) :`,
            `• Sur Ox : a_x = x''(t) = 0.`,
            `• Sur Oy : a_y = y''(t) = - g.`
          ]
        },
        {
          subtitle: `C. Équations horaires de la vitesse et de la position`,
          content: [
            `1. Intégration pour obtenir le vecteur vitesse v(t) :`,
            `• v_x(t) = C₁ = v₀ · cos(α) (mouvement uniforme sur l'axe horizontal).`,
            `• v_y(t) = - g · t + C₂ = - g · t + v₀ · sin(α) (mouvement uniformément varié sur la verticale).`,
            `2. Intégration pour obtenir le vecteur position OM(t) :`,
            `• x(t) = (v₀ · cos α) · t + C₃ = (v₀ · cos α) · t.`,
            `• y(t) = - 1/2 · g · t² + (v₀ · sin α) · t + C₄ = - 1/2 · g · t² + (v₀ · sin α) · t.`
          ]
        },
        {
          subtitle: `D. Équation cartésienne de la trajectoire parabolique`,
          content: [
            `De l'équation x(t) = (v₀ cos α) t, on isole le temps : t = x / (v₀ · cos α).`,
            `En substituant dans y(t) :`,
            `y(x) = - 1/2 · g · [x / (v₀ cos α)]² + (v₀ sin α) · [x / (v₀ cos α)].`,
            `D'où l'équation cartésienne de la parabole au Bac :`,
            `y(x) = - [ g / (2 v₀² cos²α) ] · x² + (tan α) · x.`,
            `Le coefficient de x² étant négatif (-g / (2v₀² cos²α) < 0), la trajectoire est une parabole située dans le plan vertical (Oxy) à concavité tournée vers le bas.`
          ]
        },
        {
          subtitle: `E. Calcul de la flèche H et de la portée X_P`,
          content: [
            `1. La Flèche H (Sommet S de la trajectoire) : C'est la hauteur maximale atteinte par le projectile.`,
            `Au sommet S, la composante verticale de la vitesse s'annule : v_y(t_S) = 0 :`,
            `- g · t_S + v₀ · sin α = 0 ⟹ t_S = (v₀ · sin α) / g.`,
            `En injectant t_S dans y(t) :`,
            `H = y(t_S) = - 1/2 g [(v₀ sin α)/g]² + (v₀ sin α)[(v₀ sin α)/g] = [ v₀² · sin²(α) ] / (2 g).`,
            `2. La Portée X_P : C'est la distance horizontale entre le point de tir et le point de retombée au sol P (où y = 0 avec x > 0) :`,
            `y(X_P) = 0 ⟺ X_P · [ - (g / (2 v₀² cos²α)) · X_P + tan α ] = 0.`,
            `X_P = (2 v₀² cos²α · tan α) / g = (2 v₀² cos α · sin α) / g.`,
            `En utilisant la formule trigonométrique 2 sin α cos α = sin(2α) :`,
            `X_P = [ v₀² · sin(2α) ] / g.`,
            `Angle de tir optimal : La portée est maximale quand sin(2α) = 1 ⟺ 2α = 90° ⟺ α = 45°. La portée maximale vaut alors X_max = v₀² / g.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-8 : PARTICULES CHARGÉES DANS LES CHAMPS ÉLECTRIQUE ET MAGNÉTIQUE
// =========================================================================
export const LESSON_8_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-8`,
  number: `Leçon S-8`,
  title: `Particules Chargées dans des Champs Électrostatique et Magnétique`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min d'électromagnétisme et démonstrations`,
  description: `Force électrostatique F_e = qE, déflexion dans un condensateur plan, force magnétique de Lorentz F_m = q(v ∧ B), règle des trois doigts de la main droite, mouvement circulaire uniforme dans un champ B, spectromètre de masse de Bainbridge et accélérateur cyclotron.`,
  image: {
    caption: `Figure S-8 : Mouvement circulaire d'une particule chargée dans un champ magnétique B uniforme et principe du spectromètre de masse.`,
    svgContent: SVG_PC_TLE_S_LORENTZ
  },
  diagram: {
    title: `Particules dans les Champs E et B`,
    svgContent: SVG_PC_TLE_S_LORENTZ
  },
  introduction: `L'étude du comportement des particules subatomiques électrisées (électrons, protons, ions positifs et négatifs) dans des champs électriques et magnétiques est à la base de toute la physique corpusculaire et nucléaire moderne, de la télévision cathodique historique au Grand Collisionneur de Hadrons (LHC). 
Dans ce chapitre fondamental du Baccalauréat S1-S2, on analyse la force électrique de Coulomb qui accélère et dévie les charges en modifiant leur énergie cinétique, et la force magnétique de Lorentz qui courbe leur trajectoire sans jamais fournir de travail mécanique, contraignant les particules à décrire un mouvement circulaire uniforme d'un rayon strictement proportionnel à leur quantité de mouvement.`,
  conclusion: `En conclusion, la distinction physique entre champ électrique et champ magnétique est absolue : 1) Le champ électrique E exerce une force F_e = q·E qui travaille (W = q·U) et modifie la vitesse scalaire de la particule selon le théorème de l'énergie cinétique ΔE_c = q·U, 2) Le champ magnétique B exerce une force de Lorentz F_m = q(v ∧ B) perpendiculaire à tout instant au vecteur vitesse v : sa puissance instantanée P = F_m · v = 0 est rigoureusement nulle ! Le champ magnétique ne modifie jamais l'énergie cinétique de la particule : la vitesse reste constante et la trajectoire est un cercle de rayon R = m·v / (|q|·B).`,
  sections: [
    {
      title: `I. MOUVEMENT D'UNE PARTICULE CHARGÉE DANS UN CHAMP ÉLECTROSTATIQUE UNIFORME`,
      subsections: [
        {
          subtitle: `A. Déflexion électrostatique dans un condensateur plan`,
          content: [
            `Soit deux armatures métalliques planes parallèles de longueur L séparées d'une distance d, soumises à une tension U.`,
            `Le champ électrique régnant entre les plaques est uniforme : E = U / d, perpendiculaire aux plaques et orienté du potentiel le plus élevé (+) vers le potentiel le plus bas (-).`,
            `Une particule de masse m et de charge q entre dans le condensateur avec une vitesse horizontale v₀ perpendiculaire à E.`,
            `Bilan des forces : On néglige le poids devant la force électrostatique (P/F_e ≈ 10⁻¹⁴).`,
            `2ème loi de Newton : m · a = q · E ⟹ a = (q / m) · E.`,
            `L'accélération est constante : la trajectoire dans le condensateur est un arc de parabole d'équation :`,
            `y(x) = [ q·U / (2 m d v₀²) ] · x².`,
            `Déviation angulaire à la sortie x = L : tan(θ) = v_y / v_x = (q·U·L) / (m·d·v₀²).`
          ]
        }
      ]
    },
    {
      title: `II. MOUVEMENT D'UNE PARTICULE DANS UN CHAMP MAGNÉTIQUE UNIFORME B`,
      subsections: [
        {
          subtitle: `A. La force magnétique de Lorentz et puissance nulle`,
          content: [
            `Une particule chargée de charge q se déplaçant avec une vitesse v dans une région où règne un champ magnétique B subit la force magnétique de Lorentz :`,
            `F_m = q (v ∧ B).`,
            `Caractéristiques vectorielles :`,
            `1. Direction : Perpendiculaire au plan formé par v et B (F_m ⊥ v et F_m ⊥ B).`,
            `2. Sens : Donné par la règle des trois doigts de la main droite (Pouce = q·v, Index = B, Majeur = F_m).`,
            `3. Valeur : F_m = |q| · v · B · |sin(v, B)|.`,
            `Démonstration que la vitesse est constante (mouvement uniforme) :`,
            `Calculons la puissance développée par la force magnétique :`,
            `P = F_m · v = [q (v ∧ B)] · v.`,
            `Par propriété du produit vectoriel, (v ∧ B) est orthogonal à v, donc leur produit scalaire est nul : P = 0.`,
            `D'après le théorème de la puissance cinétique : d(E_c)/dt = P = 0 ⟹ E_c = 1/2 m v² = constante.`,
            `La norme de la vitesse v est donc STRICTEMENT CONSTANTE au cours du temps. Le mouvement est UNIFORME.`
          ]
        },
        {
          subtitle: `B. Démonstration de la trajectoire circulaire de rayon R`,
          content: [
            `Plaçons-nous dans le repère de Frenet (M; τ, n) dans le cas où v est perpendiculaire à B (sin(v, B) = 1) :`,
            `a = a_t · τ + a_n · n = (dv / dt) · τ + (v² / R) · n.`,
            `Comme v = constante, a_t = dv/dt = 0. Donc a = (v² / R) · n.`,
            `D'après la 2ème loi de Newton : F_m = m · a ⟹ |q| · v · B · n = m · (v² / R) · n.`,
            `En égalant les normes :`,
            `|q| · v · B = m · v² / R ⟺ R = (m · v) / (|q| · B).`,
            `m, v, |q| et B étant tous constants, le rayon de courbure R est CONSTANT : la trajectoire est obligatoirement un CERCLE.`,
            `Période de révolution du cyclotron : Durée d'un tour complet :`,
            `T = 2πR / v = 2π [ (m·v)/(|q|·B) ] / v = (2 π m) / ( |q| · B ).`,
            `Résultat capital : La période T et la fréquence cyclotron f = 1/T sont INDÉPENDANTES DE LA VITESSE de la particule et du rayon de l'orbite !`
          ]
        }
      ]
    },
    {
      title: `III. APPLICATIONS : SPECTROMÈTRE DE MASSE ET CYCLOTRON`,
      subsections: [
        {
          subtitle: `A. Le spectromètre de masse de Bainbridge`,
          content: [
            `Permet de séparer et mesurer les masses atomiques d'isotopes d'un même élément (par exemple le Magnésium ²⁴Mg, ²⁵Mg, ²⁶Mg) :`,
            `1. Chambre d'ionisation : produit les ions de même charge q.`,
            `2. Filtre de vitesse de Wien : champs E et B croisés perpendiculaires. Les forces s'annulent (qE = qvB) pour une vitesse unique sélectionnée : v₀ = E / B.`,
            `3. Chambre de déviation magnétique : les ions pénètrent avec la même vitesse v₀ dans un champ B'. Ils décrivent des demi-cercles de diamètres d = 2R = (2 v₀ / qB') × m.`,
            `Le diamètre d'impact sur la plaque détectrice est strictement proportionnel à la masse isotopique m, permettant une séparation physique parfaite des isotopes.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-9 : MOUVEMENT DES SATELLITES ET PLANÈTES : GRAVITATION ET LOIS DE KEPLER
// =========================================================================
export const LESSON_9_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-9`,
  number: `Leçon S-9`,
  title: `Mouvement des Satellites et Planètes : Lois de Kepler`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de gravitation et mécanique céleste`,
  description: `Loi de gravitation universelle de Newton, les trois lois de Kepler, démonstration du mouvement circulaire uniforme d'un satellite en orbite, vitesse orbitale, période de révolution, 3ème loi de Kepler T²/r³ = constante, satellite géostationnaire et vitesses cosmiques.`,
  image: {
    caption: `Figure S-9 : Trajectoire circulaire d'un satellite artificiel en orbite terrestre et positionnement de l'orbite géostationnaire.`,
    svgContent: SVG_PC_TLE_S_LORENTZ
  },
  diagram: {
    title: `Satellites et Lois de Kepler`,
    svgContent: SVG_PC_TLE_S_LORENTZ
  },
  introduction: `Depuis l'aube de l'humanité, la contemplation de la voûte céleste et le mouvement des planètes ont fasciné les savants. C'est en analysant les observations astronomiques d'une précision inégalée de Tycho Brahe que Johannes Kepler découvrit entre 1609 et 1619 les trois lois cinématiques fondamentales qui portent son nom. 
Soixante-dix ans plus tard, Isaac Newton démontra que ces lois képlériennes étaient la conséquence nécessaire d'une seule et même loi physique universelle : l'attraction gravitationnelle mutuelle entre les masses. 
En Terminale S, ce chapitre étudie la mécanique céleste appliquée au lancement et à la mise en orbite des satellites artificiels (télécommunications, observation de la Terre, météo) et analyse l'orbite géostationnaire au-dessus de l'équateur.`,
  conclusion: `En conclusion, la mécanique des satellites en Série S repose sur la démonstration complète des trois grandeurs orbitales fondamentales pour un satellite de masse m en orbite circulaire de rayon r = R_T + h autour de la Terre de masse M_T : 1) Accélération gravitationnelle a = G·M_T / r², 2) Vitesse orbitale v = √(G·M_T / r), 3) Période de révolution T = 2π·r / v = 2π√(r³ / (G·M_T)). La 3ème loi de Kepler en découle directement : T² / r³ = 4π² / (G·M_T) = constante universelle ne dépendant que de la masse de l'astre central attracteur.`,
  sections: [
    {
      title: `I. LES TROIS LOIS EMPIRIQUES DE JOHANNES KEPLER`,
      subsections: [
        {
          subtitle: `A. Énoncé des trois lois de Kepler`,
          content: [
            `1. Première loi de Kepler (Loi des orbites) : Dans le référentiel héliocentrique, la trajectoire du centre d'inertie d'une planète est une ELLIPSE dont le Soleil occupe l'un des deux foyers.`,
            `Remarque : L'orbite circulaire est un cas particulier d'ellipse dont les deux foyers sont confondus au centre.`,
            `2. Deuxième loi de Kepler (Loi des aires) : Le segment reliant le Soleil à la planète balaie des AIRES ÉGALES pendant des INTERVALLES DE TEMPS ÉGAUX.`,
            `Conséquence : La vitesse de la planète n'est pas constante sur une ellipse : elle est maximale au Périhélie (au plus près du Soleil) et minimale à l'Aphélie (au plus loin).`,
            `3. Troisième loi de Kepler (Loi des périodes) : Pour toutes les planètes du système solaire, le rapport entre le carré de la période de révolution T et le cube du demi-grand axe a de l'orbite est constant :`,
            `T² / a³ = Constante universelle.`
          ]
        }
      ]
    },
    {
      title: `II. DÉMONSTRATION COMPLÈTE DE LA TRAJECTOIRE D'UN SATELLITE CIRCULAIRE`,
      subsections: [
        {
          subtitle: `A. Force de gravitation de Newton`,
          content: [
            `Deux corps ponctuels de masses M et m distants de r exercent l'un sur l'autre une force d'attraction gravitationnelle dirigée selon la droite qui les relie :`,
            `F_G = - G × [ (M × m) / r² ] × u,`,
            `où G est la constante de gravitation universelle : G = 6,67 × 10⁻¹¹ N·m²·kg⁻².`,
            `Pour un satellite de masse m en orbite à l'altitude h autour de la Terre (masse M_T, rayon R_T), la distance au centre de la Terre est r = R_T + h.`
          ]
        },
        {
          subtitle: `B. Démonstration de la vitesse orbitale v`,
          content: [
            `Système : Satellite de masse m dans le référentiel géocentrique galiléen.`,
            `Seule force appliquée : La force d'attraction gravitationnelle F_G dirigée vers le centre de la Terre (force centrale centripète).`,
            `D'après le PFD de Newton : F_G = m · a ⟹ G (M_T · m / r²) · n = m (a_t · τ + a_n · n).`,
            `En projetant sur les axes de Frenet :`,
            `• Sur la tangente τ : a_t = dv/dt = 0 ⟹ v = constante (le mouvement est UNIFORME).`,
            `• Sur la normale centripète n : a_n = v² / r = G · M_T / r².`,
            `En simplifiant par r, on démontre la formule officielle de la vitesse orbitale :`,
            `v = √( (G × M_T) / r ) = √( (G × M_T) / (R_T + h) ).`,
            `Remarque : La vitesse d'un satellite ne dépend absolument pas de sa masse m, mais uniquement de l'altitude h et de la masse de la Terre.`
          ]
        },
        {
          subtitle: `C. Démonstration de la période T et de la 3ème loi de Kepler`,
          content: [
            `La période orbitale T est la durée nécessaire pour parcourir le périmètre circulaire 2πr à la vitesse constante v :`,
            `T = 2πr / v = 2πr / √(GM_T / r) = 2π √( r³ / (G × M_T) ).`,
            `Élevons cette relation au carré :`,
            `T² = 4π² · r³ / (G × M_T) ⟺ T² / r³ = 4π² / (G × M_T).`,
            `Comme G et M_T sont des constantes physiques, on démontre rigoureusement la troisième loi de Kepler :`,
            `T² / r³ = 4π² / (G × M_T) = constante.`
          ]
        }
      ]
    },
    {
      title: `III. LE SATELLITE GÉOSTATIONNAIRE`,
      subsections: [
        {
          subtitle: `A. Définition et les trois conditions d'immobilité apparente`,
          content: [
            `Un satellite géostationnaire est un satellite qui reste constamment à la verticale du même point de la surface de la Terre (semblant immobile pour un observateur terrestre).`,
            `Les trois conditions impératives pour être géostationnaire :`,
            `1. Son orbite circulaire doit être située strictement dans le PLAN ÉQUATORIAL de la Terre.`,
            `2. Il doit tourner dans le MÊME SENS de rotation que la Terre (d'ouest en est).`,
            `3. Sa période de révolution orbitale T doit être exactement égale à la période de rotation propre de la Terre sur elle-même (jour sidéral T = 23 h 56 min 4 s ≈ 86 164 s).`
          ]
        },
        {
          subtitle: `B. Calcul de l'altitude de l'orbite géostationnaire`,
          content: [
            `De la 3ème loi de Kepler : r³ = (G · M_T · T²) / (4π²).`,
            `r = ∛[ (G · M_T · T²) / (4π²) ].`,
            `Données numériques : G = 6,67×10⁻¹¹ SI, M_T = 5,97×10²⁴ kg, T = 86 164 s.`,
            `Calcul numérique : r ≈ 42 164 000 m = 42 164 km.`,
            `Comme le rayon terrestre est R_T = 6 370 km, l'altitude au-dessus du sol vaut :`,
            `h = r - R_T = 42 164 - 6 370 ≈ 35 794 km ≈ 36 000 km.`,
            `Conclusion : Tous les satellites de télécommunication et météorologiques géostationnaires sont situés sur cette orbite unique à 36 000 km d'altitude au-dessus de l'équateur.`
          ]
        }
      ]
    }
  ]
};
