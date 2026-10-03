import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE TERMINALE L (SÉRIES L2, L') — PARTIE 1 (PHYSIQUE)
// Conforme au programme officiel national du Sénégal (Baccalauréat Série L)
// Leçons L-1 à L-3 : Optique géométrique & Vision, Énergie électrique, Énergies renouvelables
// Leçons longues sans résumé, schémas vectoriels expérimentaux et démonstrations obligatoires
// =========================================================================

export const SVG_PC_TLE_L_LENTILLE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#0f172a">
    FIGURE 1 : LENTILLE MINCE CONVERGENTE & CONSTRUCTION GÉOMÉTRIQUE DE L'IMAGE
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#475569">
    Rayons caractéristiques : centre optique O, foyer objet F, foyer image F' et formules de Descartes
  </text>

  <!-- Optical Axis -->
  <line x1="60" y1="200" x2="700" y2="200" stroke="#334155" stroke-width="2" />
  <polygon points="700,200 690,195 690,205" fill="#334155" />
  <text x="705" y="205" font-size="12" font-weight="bold" fill="#334155">Axe optique (Δ)</text>

  <!-- Converging Lens Line -->
  <line x1="380" y1="80" x2="380" y2="320" stroke="#0284c7" stroke-width="3" />
  <!-- Arrows indicating converging lens -->
  <polyline points="370,95 380,80 390,95" fill="none" stroke="#0284c7" stroke-width="3" />
  <polyline points="370,305 380,320 390,305" fill="none" stroke="#0284c7" stroke-width="3" />
  <text x="390" y="90" font-size="13" font-weight="bold" fill="#0284c7">(L) Lentille</text>
  <circle cx="380" cy="200" r="4" fill="#0284c7" />
  <text x="385" y="218" font-size="12" font-weight="bold" fill="#0284c7">O</text>

  <!-- Foyers F and F' -->
  <circle cx="260" cy="200" r="5" fill="#dc2626" />
  <text x="255" y="222" font-size="13" font-weight="bold" fill="#dc2626">F (Foyer objet)</text>

  <circle cx="500" cy="200" r="5" fill="#dc2626" />
  <text x="495" y="222" font-size="13" font-weight="bold" fill="#dc2626">F' (Foyer image)</text>

  <!-- Object AB -->
  <line x1="180" y1="200" x2="180" y2="120" stroke="#16a34a" stroke-width="3" />
  <polygon points="180,120 175,135 185,135" fill="#16a34a" />
  <text x="175" y="220" font-size="12" font-weight="bold" fill="#16a34a">A</text>
  <text x="175" y="110" font-size="13" font-weight="bold" fill="#16a34a">B (Objet)</text>

  <!-- Ray 1 : Parallel to axis -> emerges through F' -->
  <line x1="180" y1="120" x2="380" y2="120" stroke="#ea580c" stroke-width="2" />
  <line x1="380" y1="120" x2="620" y2="280" stroke="#ea580c" stroke-width="2" />

  <!-- Ray 2 : Through O -> not deviated -->
  <line x1="180" y1="120" x2="580" y2="320" stroke="#9333ea" stroke-width="2" />

  <!-- Image A'B' intersection -->
  <circle cx="533" cy="222" r="4" fill="#dc2626" />
  <line x1="533" y1="200" x2="533" y2="222" stroke="#dc2626" stroke-width="2.5" />
  <polygon points="533,222 528,210 538,210" fill="#dc2626" />
  <text x="525" y="195" font-size="12" font-weight="bold" fill="#dc2626">A'</text>
  <text x="540" y="235" font-size="13" font-weight="bold" fill="#dc2626">B' (Image réelle)</text>

  <rect x="60" y="260" width="300" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="75" y="282" font-size="11" font-weight="bold" fill="#0f172a">Formules de conjugaison de Descartes :</text>
  <text x="75" y="302" font-size="11" fill="#334155">• Vergence : C = 1/f' (en dioptries δ, f' en m)</text>
  <text x="75" y="322" font-size="11" fill="#334155">• Conjugaison : 1/OA' - 1/OA = 1/f' = C</text>
  <text x="75" y="340" font-size="11" fill="#334155">• Grandissement : γ = A'B' / AB = OA' / OA</text>
</svg>`;

export const SVG_PC_TLE_L_CIRCUIT_SECURITE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#713f12">
    FIGURE 2 : INSTALLATION ÉLECTRIQUE DOMESTIQUE AU SÉNÉGAL & ORGANES DE SÉCURITÉ
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#854d0e">
    Compteur Senelec (230 V), disjoncteur différentiel (30 mA), fusibles et circuit de terre obligatoire
  </text>

  <!-- Phase Wire (Red) -->
  <line x1="80" y1="120" x2="680" y2="120" stroke="#dc2626" stroke-width="3.5" />
  <text x="90" y="110" font-size="13" font-weight="bold" fill="#dc2626">Phase (P) - 230 V (Rouge)</text>

  <!-- Neutral Wire (Blue) -->
  <line x1="80" y1="200" x2="680" y2="200" stroke="#2563eb" stroke-width="3.5" />
  <text x="90" y="190" font-size="13" font-weight="bold" fill="#2563eb">Neutre (N) - 0 V (Bleu)</text>

  <!-- Earth Wire (Green-Yellow) -->
  <line x1="80" y1="280" x2="680" y2="280" stroke="#16a34a" stroke-width="3" stroke-dasharray="6,4" />
  <text x="90" y="270" font-size="13" font-weight="bold" fill="#16a34a">Terre (PE) - 0 V (Vert-Jaune)</text>

  <!-- Disjoncteur différentiel box -->
  <rect x="250" y="90" width="100" height="140" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
  <text x="300" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Disjoncteur</text>
  <text x="300" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Différentiel</text>
  <text x="300" y="185" text-anchor="middle" font-size="11" fill="#713f12">I_Δn = 30 mA</text>

  <!-- Appliance connected -->
  <rect x="450" y="100" width="140" height="190" rx="10" fill="#ffffff" stroke="#475569" stroke-width="2"/>
  <text x="520" y="130" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">Appareil (Fer/Frigo)</text>
  <circle cx="520" cy="180" r="25" fill="#f1f5f9" stroke="#64748b" stroke-width="2" />
  <text x="520" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">Charge R</text>

  <!-- Earth connection to metal casing -->
  <line x1="520" y1="205" x2="520" y2="280" stroke="#16a34a" stroke-width="3" />
  <circle cx="520" cy="280" r="5" fill="#16a34a" />
  <text x="535" y="265" font-size="11" font-weight="bold" fill="#16a34a">Carcasse reliée</text>

  <!-- Earth ground rod -->
  <line x1="680" y1="280" x2="680" y2="340" stroke="#16a34a" stroke-width="3" />
  <line x1="665" y1="340" x2="695" y2="340" stroke="#16a34a" stroke-width="3" />
  <line x1="670" y1="346" x2="690" y2="346" stroke="#16a34a" stroke-width="2" />
  <line x1="675" y1="352" x2="685" y2="352" stroke="#16a34a" stroke-width="1.5" />
  <text x="630" y="365" font-size="11" font-weight="bold" fill="#15803d">Piquet de terre</text>

  <rect x="60" y="300" width="380" height="65" rx="6" fill="#ffffff" stroke="#ca8a04" stroke-width="1.5" />
  <text x="75" y="320" font-size="11" font-weight="bold" fill="#713f12">Sécurité des personnes au Sénégal :</text>
  <text x="75" y="338" font-size="10" fill="#854d0e">Le disjoncteur différentiel coupe le courant dès qu'une fuite vers la terre</text>
  <text x="75" y="352" font-size="10" fill="#854d0e">dépasse 30 mA, évitant l'électrocution fatale des usagers.</text>
</svg>`;

// =========================================================================
// LEÇON L-1 : OPTIQUE GÉOMÉTRIQUE ET VISION DE L'ŒIL
// =========================================================================
export const LESSON_1_PC_TLE_L: LessonContent = {
  id: `pc-tle-l-cours-1`,
  number: `Leçon L-1`,
  title: `Optique Géométrique et Vision de l'Œil`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale L`,
  level: `Terminale L (Séries L2 & L')`,
  readTime: `60 min d'étude approfondie`,
  description: `Lois de la réfraction de Snell-Descartes, lentilles minces convergentes et divergentes, vergence, formules de conjugaison de Descartes, modèle de l'œil réduit, et défauts de vision (myopie, hypermétropie, presbytie) avec corrections.`,
  image: {
    caption: `Figure 1 : Tracé des rayons lumineux à travers une lentille mince convergente et formation d'une image réelle.`,
    svgContent: SVG_PC_TLE_L_LENTILLE
  },
  diagram: {
    title: `Lentilles Minces et Vision`,
    svgContent: SVG_PC_TLE_L_LENTILLE
  },
  introduction: `La lumière est le vecteur privilégié par lequel nous appréhendons le monde extérieur. L'optique géométrique étudie la propagation des faisceaux lumineux sous l'approximation des rayons rectilignes. Au Sénégal, les applications de l'optique sont fondamentales dans la vie quotidienne : fabrication de lunettes médicales pour corriger les troubles de la vue, loupes, microscopes dans les laboratoires hospitaliers et objectifs d'appareils photographiques ou de smartphones. 
Ce chapitre de Terminale L détaille le comportement des lentilles sphériques minces, démontre les formules de conjugaison et de grandissement de Descartes, et analyse le fonctionnement optique de l'œil humain ainsi que ses principaux défauts d'accommodation.`,
  conclusion: `En conclusion, l'optique géométrique en Terminale L repose sur la maîtrise des trois rayons caractéristiques émergents d'une lentille convergente (le rayon passant par le centre optique O n'est pas dévié ; le rayon incident parallèle à l'axe optique émerge en passant par le foyer image F' ; le rayon passant par le foyer objet F émerge parallèlement à l'axe optique). Les deux formules algébriques de Descartes : 1/OA' - 1/OA = C = 1/f' et γ = A'B'/AB = OA'/OA permettent de déterminer avec une précision mathématique la position, la taille et la nature réelle ou virtuelle de toute image.`,
  sections: [
    {
      title: `I. LES LOIS FONDAMENTALES DE L'OPTIQUE GÉOMÉTRIQUE`,
      subsections: [
        {
          subtitle: `A. Principe de propagation rectiligne et lois de Snell-Descartes`,
          content: [
            `Dans un milieu transparent, homogène et isotrope (comme l'air ou le verre), la lumière se propage en ligne droite.`,
            `Loi de la réfraction de Snell-Descartes : Lorsqu'un rayon lumineux traverse la surface de séparation (dioptre) entre deux milieux d'indices optiques n₁ et n₂ :`,
            `n₁ × sin(i₁) = n₂ × sin(i₂),`,
            `où i₁ est l'angle d'incidence et i₂ l'angle de réfraction mesurés par rapport à la normale au dioptre.`,
            `Conséquence : En passant de l'air (n₁ = 1) dans l'eau (n₂ = 1,33) ou le verre (n₂ = 1,5), le rayon se rapproche de la normale (i₂ < i₁).`
          ]
        }
      ]
    },
    {
      title: `II. LES LENTILLES MINCES SPHÉRIQUES`,
      subsections: [
        {
          subtitle: `A. Classification physique et symboles normalisés`,
          content: [
            `Une lentille est un milieu transparent limité par deux surfaces sphériques ou une surface plane et une sphérique.`,
            `1. Lentilles à bords minces (Convergentes) : Plus épaisses au centre qu'aux bords. Elles transforment un faisceau de rayons parallèles en un faisceau qui converge en un point réel F' appelé foyer image. Symbole : segment terminé par deux flèches pointant vers l'extérieur.`,
            `2. Lentilles à bords épais (Divergentes) : Plus minces au centre qu'aux bords. Elles font diverger les rayons lumineux. Symbole : segment terminé par deux pointes rentrantes vers l'intérieur.`
          ]
        },
        {
          subtitle: `B. Distance focale et vergence C`,
          content: [
            `La distance focale image, notée f' ou OF', est la distance algébrique entre le centre optique O et le foyer image F'.`,
            `• Pour une lentille convergente : f' > 0 (OF' > 0).`,
            `• Pour une lentille divergente : f' < 0 (OF' < 0).`,
            `La vergence C d'une lentille est l'inverse de sa distance focale exprimée en mètres :`,
            `C = 1 / f'.`,
            `L'unité légale de la vergence est la dioptrie, notée δ (1 δ = 1 m^(-1)).`,
            `Exemple de calcul : Une lentille convergente de distance focale f' = +20 cm = +0,20 m a une vergence de : C = 1 / 0,20 = +5 dioptries (+5 δ).`
          ]
        },
        {
          subtitle: `C. Les formules algébriques de conjugaison de Descartes`,
          content: [
            `Dans un repère d'axe orienté dans le sens de propagation de la lumière :`,
            `1. Formule de conjugaison de Descartes :`,
            `1 / OA' - 1 / OA = 1 / OF' = C.`,
            `2. Formule du grandissement transversal γ (gamma) :`,
            `γ = A'B' / AB = OA' / OA.`,
            `Interprétation du grandissement :`,
            `• Si γ < 0, l'image est RENVERSÉE par rapport à l'objet (cas de toutes les images réelles formées sur un écran).`,
            `• Si γ > 0, l'image est DROITE par rapport à l'objet (image virtuelle, vue à travers une loupe).`,
            `• Si |γ| > 1, l'image est plus grande que l'objet ; si |γ| < 1, elle est plus petite.`
          ]
        }
      ]
    },
    {
      title: `III. L'ŒIL HUMAIN ET LA CORRECTION DES ANOMALIES DE LA VISION`,
      subsections: [
        {
          subtitle: `A. Le modèle de l'œil réduit`,
          content: [
            `En physique, l'œil humain est modélisé par un système optique simplifié comprenant trois éléments essentiels :`,
            `1. Le diaphragme (iris et pupille) : régule la quantité de flux lumineux pénétrant dans l'œil.`,
            `2. La lentille convergente équivalente (cornée et cristallin) : système optique de vergence variable grâce aux muscles ciliaires (phénomène d'accommodation).`,
            `3. L'écran récepteur (la rétine) : surface sensible tapissée de photorécepteurs où doit obligatoirement se former l'image nette A'B'.`
          ]
        },
        {
          subtitle: `B. Les défauts de vision et leurs verres correcteurs`,
          content: [
            `1. La Myopie : L'œil myope est trop convergent ou trop long. L'image d'un objet situé à l'infini se forme EN AVANT de la rétine (floue). Le punctum remotum est à distance finie.`,
            `Correction : On place devant l'œil une LENTILLE DIVERGENTE (vergence C < 0, verres concaves) qui repousse l'image sur la rétine.`,
            `2. L'Hypermétropie : L'œil hypermétrope est pas assez convergent ou trop court. L'image se forme EN ARRIÈRE de la rétine. L'œil doit constamment accommoder pour voir de loin et fatigue rapidement.`,
            `Correction : On compense le manque de convergence par une LENTILLE CONVERGENTE (vergence C > 0, verres convexes).`,
            `3. La Presbytie : Liée au vieillissement naturel du cristallin (après 40-45 ans) qui perd sa souplesse. La vision de près devient floue.`,
            `Correction : Port de verres convergents de lecture ou progressifs.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-2 : ÉNERGIE ET ÉLECTRICITÉ DOMESTIQUE
// =========================================================================
export const LESSON_2_PC_TLE_L: LessonContent = {
  id: `pc-tle-l-cours-2`,
  number: `Leçon L-2`,
  title: `Énergie et Électricité Domestique`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale L`,
  level: `Terminale L (Séries L2 & L')`,
  readTime: `60 min d'étude approfondie`,
  description: `Puissance et énergie électrique, loi de Joule, section des câbles électriques, facture d'électricité Senelec (tranches Woyofal/Post-paiement), sécurité des installations et prévention des électrocutions.`,
  image: {
    caption: `Figure 2 : Schéma d'un tableau de distribution domestique aux normes sénégalaises avec protection différentielle et prise de terre.`,
    svgContent: SVG_PC_TLE_L_CIRCUIT_SECURITE
  },
  diagram: {
    title: `Électricité Domestique`,
    svgContent: SVG_PC_TLE_L_CIRCUIT_SECURITE
  },
  introduction: `Dans tous les foyers sénégalais, de Dakar à Tambacounda, l'électricité est devenue l'énergie indispensable à l'éclairage, à la réfrigération des aliments, à la climatisation et au fonctionnement des télécommunications. Cependant, l'énergie électrique présente un coût financier direct qui pèse lourdement sur le budget familial et comporte des dangers mortels d'électrocution et d'incendie si les normes de sécurité ne sont pas scrupuleusement respectées. 
Ce chapitre de Terminale L donne aux futurs bacheliers littéraires les clés scientifiques pour comprendre le fonctionnement d'un circuit électrique domestique alternatif (230 V - 50 Hz), calculer la consommation en kilowattheures (kWh), décrypter une facture de la Senelec, et identifier le rôle vital des organes de protection (fusibles, disjoncteurs magnétothermiques, disjoncteurs différentiels 30 mA et prise de terre).`,
  conclusion: `En conclusion, la maîtrise des grandeurs électriques fondamentales P = U × I et E = P × t est essentielle pour la gestion rationnelle de l'énergie. L'effet Joule Q = R·I²·t explique l'échauffement des conducteurs et impose d'adapter la section des fils de cuivre à l'intensité maximale du courant. Enfin, la sécurité électrique repose sur la règle absolue : tout appareil à carcasse métallique doit être raccordé à la terre via un conducteur vert-jaune couplé à un disjoncteur différentiel de sensibilité 30 mA.`,
  sections: [
    {
      title: `I. GRANDEURS ÉLECTRIQUES FONDAMENTALES DANS L'HABITAT`,
      subsections: [
        {
          subtitle: `A. Tension efficace et intensité en courant alternatif`,
          content: [
            `Au Sénégal, le réseau de distribution basse tension de la Senelec fournit une tension alternative sinusoïdale de fréquence f = 50 Hz et de valeur efficace U = 230 V (en monophasé) ou U = 400 V (en triphasé).`,
            `La tension oscille entre une valeur maximale U_max = U × √2 ≈ 230 × 1,414 ≈ 325 V et une valeur minimale -325 V 50 fois par seconde.`,
            `Les appareils électroménagers sont tous branchés EN PARALLÈLE (dérivation) afin de recevoir tous la même tension nominale de 230 V, et de fonctionner indépendamment les uns des autres.`
          ]
        },
        {
          subtitle: `B. Puissance électrique nominale P et énergie électrique E`,
          content: [
            `1. Puissance électrique : Pour un appareil purement résistif (fer à repasser, chauffe-eau, lampe à incandescence) :`,
            `P = U × I, avec P en watts (W), U en volts (V) et I en ampères (A).`,
            `2. Énergie électrique consommée : L'énergie E consommée par un appareil de puissance P pendant une durée de fonctionnement t est :`,
            `E = P × t.`,
            `Unités : Dans le Système International (SI), si P est en watts (W) et t en secondes (s), l'énergie est en Joules (J).`,
            `Dans la vie courante et sur les compteurs Senelec, on utilise le Kilowattheure (kWh) :`,
            `1 kWh = 1 000 W × 3 600 s = 3 600 000 Joules = 3,6 × 10⁶ J.`
          ]
        },
        {
          subtitle: `C. Loi de Joule et dimensionnement des câbles`,
          content: [
            `Loi d'effet Joule : Tout conducteur ohmique de résistance R traversé par un courant d'intensité I dégage une énergie thermique :`,
            `Q = R × I² × t.`,
            `Si l'intensité I dépasse la capacité du conducteur, l'échauffement peut faire fondre les isolants en plastique et déclencher un court-circuit ou un incendie.`,
            `Normes des sections de câbles en cuivre au Sénégal :`,
            `• Éclairage (lampes) : Section 1,5 mm² protégée par un disjoncteur 10 A ou 16 A.`,
            `• Prises de courant standard (TV, ventilateurs) : Section 2,5 mm² protégée par 16 A ou 20 A.`,
            `• Appareils de forte puissance (climatiseur, chauffe-eau, cuisinière) : Section 4 à 6 mm² protégée par 32 A.`
          ]
        }
      ]
    },
    {
      title: `II. FACTURATION ÉLECTRIQUE AU SÉNÉGAL (SENELEC & WOYOFAL)`,
      subsections: [
        {
          subtitle: `A. Calcul d'une consommation réelle d'un ménage`,
          content: [
            `Exemple concret à Dakar :`,
            `• 5 lampes LED de 15 W allumées 6 h par jour : E₁ = 5 × 15 W × 6 h = 450 Wh/jour = 0,45 kWh/jour.`,
            `• 1 réfrigérateur de 150 W fonctionnant en moyenne 10 h par jour : E₂ = 150 W × 10 h = 1 500 Wh/jour = 1,5 kWh/jour.`,
            `• 1 téléviseur de 100 W allumé 5 h par jour : E₃ = 100 W × 5 h = 500 Wh/jour = 0,5 kWh/jour.`,
            `Consommation totale quotidienne : E_jour = 0,45 + 1,5 + 0,5 = 2,45 kWh/jour.`,
            `Consommation mensuelle (30 jours) : E_mois = 2,45 × 30 = 73,5 kWh.`,
            `Avec le système prépayé Woyofal au tarif social (environ 90 FCFA le kWh pour la première tranche) :`,
            `Montant mensuel estimé = 73,5 × 90 ≈ 6 615 FCFA.`
          ]
        }
      ]
    },
    {
      title: `III. SÉCURITÉ DES INSTALLATIONS ET DES PERSONNES`,
      subsections: [
        {
          subtitle: `A. Les risques de l'électricité : Court-circuit et surcharge`,
          content: [
            `• La surcharge : survient lorsqu'on branche trop d'appareils puissants sur une même multiprise. L'intensité totale I_totale dépasse le calibre supporté par la ligne.`,
            `• Le court-circuit : contact direct accidentel entre le fil de Phase (230 V) et le fil de Neutre (0 V) avec une résistance quasi nulle (R ≈ 0), provoquant une intensité gigantesque I = U/R tendant vers l'infini et générant des étincelles violentes.`
          ]
        },
        {
          subtitle: `B. Les organes de protection vitaux`,
          content: [
            `1. Les coupe-circuits à fusibles et disjoncteurs divisionnaires : protègent le matériel contre les surcharges et courts-circuits.`,
            `2. La prise de terre et le disjoncteur différentiel haute sensibilité (30 mA) : protègent la vie humaine contre l'électrisation (choc électrique) et l'électrocution (décès consécutif à un choc électrique). Dès qu'un défaut d'isolement envoie plus de 30 mA dans la carcasse, le différentiel coupe le courant en moins de 30 millisecondes.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-3 : ÉNERGIES RENOUVELABLES ET TRANSITION ÉNERGÉTIQUE
// =========================================================================
export const LESSON_3_PC_TLE_L: LessonContent = {
  id: `pc-tle-l-cours-3`,
  number: `Leçon L-3`,
  title: `Énergies Renouvelables et Transition Énergétique`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale L`,
  level: `Terminale L (Séries L2 & L')`,
  readTime: `60 min d'analyse et prospective`,
  description: `Énergie solaire photovoltaïque et thermique, énergie éolienne, hydroélectricité, biomasse, mix énergétique sénégalais (Bokhol, Malicounda, Taïba N'Diaye), transition écologique et objectifs de développement durable (ODD).`,
  image: {
    caption: `Figure 3 : Schéma d'une chaîne énergétique solaire photovoltaïque complète avec régulateur et onduleur.`,
    svgContent: SVG_PC_TLE_L_CIRCUIT_SECURITE
  },
  diagram: {
    title: `Énergies Renouvelables`,
    svgContent: SVG_PC_TLE_L_CIRCUIT_SECURITE
  },
  introduction: `Face à la crise climatique planétaire provoquée par la combustion des énergies fossiles carbonées (pétrole, charbon, gaz naturel) et aux coûts prohibitifs des importations d'hydrocarbures, le Sénégal s'est résolument engagé dans une transition énergétique pionnière en Afrique de l'Ouest. Grâce à un ensoleillement exceptionnel de plus de 3 000 heures par an et à des vents constants le long de la Grande Côte, notre pays a déployé des infrastructures majeures d'énergies renouvelables. 
Ce chapitre de Terminale L étudie la physique des énergies renouvelables (conversion photovoltaïque, aérogénérateurs éoliens, hydroélectricité et biomasse), calcule les rendements de conversion et dresse le panorama stratégique du mix énergétique sénégalais.`,
  conclusion: `En conclusion, les énergies renouvelables constituent le socle du développement durable du Sénégal. L'équation de rendement universelle : η = E_utile / E_fournie permet de quantifier les performances réelles des convertisseurs énergétiques (15 à 22% pour les panneaux solaires en silicium, 35 à 45% pour les turbines éoliennes selon la limite de Betz). La complémentarité entre le solaire diurne, l'éolien nocturne et les centrales hydroélectriques de Manantali et Félou prépare l'autonomie énergétique propre du Sénégal.`,
  sections: [
    {
      title: `I. LES DIFFÉRENTES FORMES D'ÉNERGIES RENOUVELABLES`,
      subsections: [
        {
          subtitle: `A. L'énergie solaire photovoltaïque et thermique`,
          content: [
            `1. L'effet photovoltaïque : Découvert par Edmond Becquerel en 1839. Lorsque les photons de la lumière solaire frappent les atomes de silicium dopé semi-conducteur d'une cellule photovoltaïque, ils libèrent des électrons créant ainsi un courant électrique continu continu (DC).`,
            `2. Chaîne photovoltaïque complète :`,
            `Panneaux solaires (produisent du courant continu) ➔ Régulateur de charge ➔ Parc de batteries (stockage) ➔ Onduleur (transforme le courant continu 12V/24V en courant alternatif 230V - 50 Hz utilisable par les appareils domestiques).`,
            `3. Solaire thermique : Utilise des capteurs plans pour chauffer directement un fluide caloporteur (chauffe-eau solaire, séchoirs agricoles solaires pour le poisson ou les mangues).`
          ]
        },
        {
          subtitle: `B. L'énergie éolienne`,
          content: [
            `L'énergie cinétique du vent est captée par les pales d'un aérogénérateur et convertie en énergie mécanique de rotation, puis en énergie électrique par un alternateur :`,
            `Puissance théorique du vent : P = 1/2 × ρ × S × v³, où ρ est la masse volumique de l'air (1,2 kg/m³), S la surface balayée par les pales et v la vitesse du vent.`,
            `Remarque capitale : La puissance dépend du CUBE de la vitesse du vent ! Si le vent double de vitesse (de 5 m/s à 10 m/s), la puissance est multipliée par 2³ = 8 !`,
            `Limite de Betz : Une éolienne ne peut capter au maximum théorique que 16/27 ≈ 59,3% de l'énergie cinétique du vent incident.`
          ]
        }
      ]
    },
    {
      title: `II. LE PANORAMA DU MIX ÉNERGÉTIQUE AU SÉNÉGAL`,
      subsections: [
        {
          subtitle: `A. Les grandes centrales solaires et éoliennes du Sénégal`,
          content: [
            `Dans le cadre du Plan Sénégal Émergent (PSE), le pays a atteint plus de 30% d'énergie renouvelable dans son mix électrique interconnecté :`,
            `1. Centrale solaire de Bokhol (20 MWc) : première grande centrale solaire photovoltaïque du Sénégal mise en service dans la région de Saint-Louis.`,
            `2. Centrale solaire de Malicounda (22 MWc) : située dans le département de Mbour.`,
            `3. Centrales solaires de Santhiou Mékhé (30 MWc) et de Kahone (35 MWc).`,
            `4. Parc éolien de Taïba N'Diaye (158,7 MW) : le plus grand parc éolien d'Afrique de l'Ouest, composé de 46 éoliennes géantes de 117 mètres de haut, injectant massivement de l'énergie propre sur le réseau national.`
          ]
        }
      ]
    }
  ]
};
