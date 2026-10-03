import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 1 (CHIMIE)
// Conforme au programme officiel national du Sénégal (Baccalauréat Série S)
// Leçons S-1 à S-3 : Acides-Bases de Brönsted, Dosages & Tampons, Cinétique Chimique
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_PC_TLE_S_DOSAGE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#0369a1">
    FIGURE S-1 : COURBE DE DOSAGE pH-MÉTRIQUE & MÉTHODE DES TANGENTES PARALLÈLES
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#0284c7">
    Titrage d'un acide faible AH par une base forte (Na⁺ + HO⁻) : Point d'équivalence E et demi-équivalence (pH = pKa)
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#334155" stroke-width="2" />
  <text x="660" y="340" font-size="13" font-weight="bold" fill="#1e293b">V_b (mL)</text>
  <text x="85" y="90" font-size="13" font-weight="bold" fill="#1e293b">pH</text>

  <!-- pH curve with buffer zone and jump -->
  <path d="M 120 280 Q 200 240 280 230 T 400 210 Q 420 200 430 110 T 540 90 L 640 85" fill="none" stroke="#2563eb" stroke-width="3.5" />
  <text x="645" y="85" font-size="12" font-weight="bold" fill="#2563eb">pH = f(V_b)</text>

  <!-- Equivalence Point E -->
  <circle cx="425" cy="155" r="6" fill="#dc2626" />
  <text x="435" y="150" font-size="13" font-weight="bold" fill="#dc2626">E (Équivalence)</text>
  <line x1="425" y1="320" x2="425" y2="155" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="415" y="338" font-size="12" font-weight="bold" fill="#dc2626">V_bE</text>

  <line x1="120" y1="155" x2="425" y2="155" stroke="#dc2626" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="75" y="160" font-size="12" font-weight="bold" fill="#dc2626">pH_E &gt; 7</text>

  <!-- Half Equivalence Point E 1/2 -->
  <circle cx="272" cy="230" r="5" fill="#16a34a" />
  <text x="272" y="215" font-size="12" font-weight="bold" fill="#16a34a">Demi-équivalence E₁/₂</text>
  <line x1="272" y1="320" x2="272" y2="230" stroke="#16a34a" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="250" y="338" font-size="11" font-weight="bold" fill="#16a34a">V_bE / 2</text>
  <line x1="120" y1="230" x2="272" y2="230" stroke="#16a34a" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="65" y="235" font-size="11" font-weight="bold" fill="#16a34a">pH = pKa</text>

  <!-- Tangent parallel lines -->
  <line x1="330" y1="240" x2="450" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2" />
  <line x1="400" y1="110" x2="520" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2" />
  <line x1="365" y1="175" x2="485" y2="135" stroke="#dc2626" stroke-width="2" />
  <text x="490" y="130" font-size="11" font-weight="bold" fill="#dc2626">Médiane équidistante</text>

  <rect x="60" y="230" width="180" height="75" rx="6" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
  <text x="70" y="250" font-size="11" font-weight="bold" fill="#15803d">Solution Tampon :</text>
  <text x="70" y="270" font-size="10" fill="#166534">À V_b = V_bE / 2 :</text>
  <text x="70" y="285" font-size="10" fill="#166534">[AH] = [A⁻] et pH = pKa.</text>
  <text x="70" y="298" font-size="9" fill="#166534">Pouvoir tampon maximal.</text>
</svg>`;

export const SVG_PC_TLE_S_CINETIQUE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">
    FIGURE S-2 : ÉVOLUTION DE L'AVANCEMENT x(t) & VITESSE VOLUMIQUE DE RÉACTION
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#b45309">
    Vitesse v = (1/V) · (dx/dt) (pente de la tangente) et temps de demi-réaction t₁/₂ (x = x_max / 2)
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#475569" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#475569" stroke-width="2" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#334155">Temps t (min)</text>
  <text x="75" y="90" font-size="13" font-weight="bold" fill="#334155">x (mol)</text>

  <!-- Curve x(t) -->
  <path d="M 120 320 Q 240 180 340 150 T 640 130" fill="none" stroke="#dc2626" stroke-width="3.5" />
  <text x="645" y="130" font-size="13" font-weight="bold" fill="#dc2626">x = f(t)</text>

  <!-- Asymptote x_max -->
  <line x1="120" y1="130" x2="660" y2="130" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="6,4" />
  <text x="80" y="135" font-size="12" font-weight="bold" fill="#475569">x_max</text>

  <!-- Half reaction time t1/2 -->
  <line x1="120" y1="225" x2="250" y2="225" stroke="#16a34a" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="60" y="230" font-size="11" font-weight="bold" fill="#16a34a">x_max / 2</text>
  <circle cx="250" cy="225" r="5" fill="#16a34a" />
  <line x1="250" y1="225" x2="250" y2="320" stroke="#16a34a" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="240" y="338" font-size="12" font-weight="bold" fill="#16a34a">t₁/₂</text>

  <!-- Tangent at t = 0 (max slope) -->
  <line x1="120" y1="320" x2="280" y2="100" stroke="#2563eb" stroke-width="2" />
  <text x="285" y="105" font-size="11" font-weight="bold" fill="#2563eb">Tangente à t=0 (v_max)</text>

  <!-- Tangent at later t (smaller slope) -->
  <line x1="200" y1="250" x2="400" y2="190" stroke="#9333ea" stroke-width="1.8" stroke-dasharray="4,2" />
  <text x="405" y="190" font-size="11" font-weight="bold" fill="#9333ea">Pente diminue avec t</text>

  <rect x="360" y="225" width="370" height="95" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
  <text x="375" y="248" font-size="11" font-weight="bold" fill="#78350f">Lois de la cinétique chimique :</text>
  <text x="375" y="268" font-size="11" fill="#451a03">• Facteurs cinétiques : Température T ↗ ⟹ vitesse ↗</text>
  <text x="375" y="288" font-size="11" fill="#451a03">• Concentration des réactifs ↗ ⟹ vitesse ↗</text>
  <text x="375" y="306" font-size="11" fill="#451a03">• Catalyseur : accélère la réaction sans figurer dans le bilan.</text>
</svg>`;

// =========================================================================
// LEÇON S-1 : ACIDES ET BASES SELON BRÖNSTED & ÉQUILIBRES IONIQUES
// =========================================================================
export const LESSON_1_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-1`,
  number: `Leçon S-1`,
  title: `Acides et Bases selon Brönsted, Autoprotolyse et Équilibres Aqueux`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de chimie fondamentale et démonstrations`,
  description: `Théorie protonique de Brönsted, couples acide/base, autoprotolyse de l'eau, produit ionique Ke, calcul rigoureux du pH des acides forts, bases fortes, acides et bases faibles, constante d'acidité Ka, pKa, et diagramme de prédominance.`,
  image: {
    caption: `Figure S-1 : Échelle des pKa des couples acido-basiques dans l'eau et domaines de prédominance des espèces.`,
    svgContent: SVG_PC_TLE_S_DOSAGE
  },
  diagram: {
    title: `Acides et Bases de Brönsted`,
    svgContent: SVG_PC_TLE_S_DOSAGE
  },
  introduction: `La théorie acido-basique formulée en 1923 indépendamment par Johannes Brönsted et Thomas Lowry constitue l'un des cadres conceptuels les plus élégants de la chimie contemporaine. En définissant les réactions acide-base comme de purs transferts de protons H⁺ entre espèces conjuguées, cette théorie unifie des milliers de transformations chimiques en solution aqueuse. 
En Terminale Scientifique au Sénégal (S1-S2), ce chapitre pose les équations fondamentales des équilibres chimiques en solution : produit ionique de l'eau K_e, constante d'acidité K_a d'un couple, démonstration mathématique des formules de calcul de pH à partir des bilans de matière et de l'électroneutralité, et tracé des diagrammes de prédominance.`,
  conclusion: `En conclusion, la résolution des équilibres acido-basiques en Série S repose sur le système des quatre équations fondamentales : 1) Conservation de la matière C = [AH] + [A⁻], 2) Électroneutralité de la solution (somme des charges positives = somme des charges négatives), 3) Constante d'acidité K_a = [H₃O⁺][A⁻]/[AH], et 4) Produit ionique de l'eau K_e = [H₃O⁺][HO⁻]. L'équation d'Henderson-Hasselbalch : pH = pK_a + log([A⁻]/[AH]) permet de déterminer instantanément l'espèce prédominante selon la position du pH par rapport au pK_a.`,
  sections: [
    {
      title: `I. THÉORIE PROTONIQUE DE BRÖNSTED ET COUPLES ACIDE/BASE`,
      subsections: [
        {
          subtitle: `A. Définitions de Brönsted et demi-équations`,
          content: [
            `1. Acide selon Brönsted : Toute espèce chimique (molécule ou ion) capable de CÉDER au moins un proton H⁺ au cours d'une réaction chimique :`,
            `Acide ⇄ Base + H⁺.`,
            `2. Base selon Brönsted : Toute espèce chimique capable de CAPTER au moins un proton H⁺.`,
            `3. Couple acide/base noté HA/A⁻ : Deux espèces chimiques conjuguées qui se transforment l'une en l'autre par gain ou perte d'un proton H⁺.`,
            `4. Espèce amphotère (ou ampholyte) : Espèce capable de se comporter comme un acide ou comme une base selon le partenaire réactionnel. L'eau H₂O est le prototype parfait :`,
            `• Comme acide dans le couple H₂O / HO⁻ (eau donne H⁺ pour former l'ion hydroxyde).`,
            `• Comme base dans le couple H₃O⁺ / H₂O (eau capte H⁺ pour former l'ion oxonium).`
          ]
        },
        {
          subtitle: `B. Réaction acido-basique`,
          content: [
            `Une réaction acido-basique est une réaction de transfert de proton(s) entre l'acide du couple 1 et la base du couple 2 :`,
            `Acide₁ + Base₂ ⇄ Base₁ + Acide₂.`,
            `Exemple classique : Réaction de l'acide éthanoïque avec l'ammoniac :`,
            `CH₃-COOH + NH₃ ⇄ CH₃-COO⁻ + NH₄⁺.`
          ]
        }
      ]
    },
    {
      title: `II. CONSTANTE D'ACIDITÉ K_a ET DIAGRAMME DE PRÉDOMINANCE`,
      subsections: [
        {
          subtitle: `A. Définition thermodynamique de K_a et pK_a`,
          content: [
            `Soit un couple acide/base faible HA / A⁻ en solution aqueuse. La réaction de l'acide HA avec l'eau s'écrit :`,
            `HA (aq) + H₂O (l) ⇄ A⁻ (aq) + H₃O⁺ (aq).`,
            `La constante d'acidité du couple à l'équilibre, notée K_a, est le quotient de réaction à l'équilibre :`,
            `K_a = [A⁻]_eq × [H₃O⁺]_eq / [HA]_eq.`,
            `On définit le pK_a par la relation logarithmique :`,
            `pK_a = - log(K_a) ⟺ K_a = 10^(-pK_a).`,
            `Force relative : Plus le pK_a est petit (donc plus K_a est grand), plus l'acide est fort (plus il est dissocié dans l'eau).`
          ]
        },
        {
          subtitle: `B. Relation fondamentale d'Henderson-Hasselbalch et prédominance`,
          content: [
            `En prenant le cologarithme de la définition de K_a :`,
            `-log(K_a) = -log[H₃O⁺] - log([A⁻]/[HA]) ⟺ pK_a = pH - log([A⁻]/[HA]).`,
            `On en déduit la relation fondamentale :`,
            `pH = pK_a + log( [A⁻] / [HA] ).`,
            `Diagramme de prédominance des espèces :`,
            `• Si pH < pK_a - 1 : [HA] > 10 [A⁻] ➔ L'acide HA prédomine largement.`,
            `• Si pH = pK_a : log([A⁻]/[HA]) = 0 ⟹ [HA] = [A⁻] ➔ Égalité des concentrations.`,
            `• Si pH > pK_a + 1 : [A⁻] > 10 [HA] ➔ La base conjuguée A⁻ prédomine largement.`
          ]
        }
      ]
    },
    {
      title: `III. DÉMONSTRATION COMPLÈTE DES FORMULES DE pH AU BACCALAURÉAT`,
      subsections: [
        {
          subtitle: `A. Solution d'acide fort de concentration C`,
          content: [
            `Un acide fort (comme HCl, HNO₃) réagit de façon totale avec l'eau : HCl + H₂O ➔ H₃O⁺ + Cl⁻.`,
            `Si l'autoprotolyse de l'eau est négligeable (C ≥ 10⁻⁶ mol/L), la concentration en ions oxonium est égale à la concentration apportée :`,
            `[H₃O⁺] = C ⟹ pH = - log(C).`
          ]
        },
        {
          subtitle: `B. Solution de base forte de concentration C`,
          content: [
            `Une base forte (comme NaOH, KOH) se dissocie totalement : NaOH ➔ Na⁺ + HO⁻.`,
            `Pour C ≥ 10⁻⁶ mol/L, [HO⁻] = C. En utilisant le produit ionique K_e = [H₃O⁺]·[HO⁻] = 10⁻¹⁴ :`,
            `[H₃O⁺] = K_e / [HO⁻] = 10⁻¹⁴ / C.`,
            `pH = - log(10⁻¹⁴ / C) = 14 + log(C).`
          ]
        },
        {
          subtitle: `C. Solution d'acide faible de concentration C et de constante K_a`,
          content: [
            `Démonstration pas-à-pas de la formule approchée pH = 1/2 (pK_a - log C) :`,
            `Équation d'équilibre : HA + H₂O ⇄ A⁻ + H₃O⁺.`,
            `Approximation 1 : L'acide étant faiblement dissocié (coefficient de dissociation α < 5%), [HA] ≈ C.`,
            `Approximation 2 : En négligeant l'autoprotolyse de l'eau, [A⁻] ≈ [H₃O⁺].`,
            `Injectons dans la constante d'acidité :`,
            `K_a = [A⁻][H₃O⁺] / [HA] ≈ [H₃O⁺]² / C ⟹ [H₃O⁺]² = K_a × C ⟹ [H₃O⁺] = √(K_a × C).`,
            `En prenant -log de chaque membre :`,
            `pH = -log(√(K_a × C)) = -1/2 log(K_a × C) = 1/2 [ -log(K_a) - log(C) ].`,
            `D'où la formule officielle du Bac S :`,
            `pH = 1/2 (pK_a - log C) (valable si pH ≤ pK_a - 1).`
          ]
        },
        {
          subtitle: `D. Solution de base faible de concentration C et de constante K_a`,
          content: [
            `Par un raisonnement symétrique pour une base faible peu protonée :`,
            `[HO⁻]² = K_b × C = (K_e / K_a) × C.`,
            `On démontre la formule officielle :`,
            `pH = 7 + 1/2 (pK_a + log C) (valable si pH ≥ pK_a + 1).`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-2 : DOSAGES ACIDO-BASIQUES ET SOLUTIONS TAMPONS
// =========================================================================
export const LESSON_2_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-2`,
  number: `Leçon S-2`,
  title: `Dosages Acido-Basiques et Solutions Tampons`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de métrologie chimique et titrages`,
  description: `Principe du titrage acido-basique, réaction support de dosage (rapide, totale, univoque), méthode des tangentes parallèles et courbe dérivée dpH/dV, choix raisonné des indicateurs colorés de fin de titrage, et solutions tampons.`,
  image: {
    caption: `Figure S-2 : Montage expérimental d'un dosage acido-basique avec burette graduée, agitateur magnétique et pH-mètre étalonné.`,
    svgContent: SVG_PC_TLE_S_DOSAGE
  },
  diagram: {
    title: `Dosages Acido-Basiques`,
    svgContent: SVG_PC_TLE_S_DOSAGE
  },
  introduction: `Le dosage ou titrage volumétrique est la méthode analytique reine de la chimie quantitative. Dans les laboratoires de contrôle qualité des Industries Chimiques du Sénégal (ICS), de la SAR (Société Africaine de Raffinage) ou de l'Institut Pasteur de Dakar, le titrage permet de doser avec une exactitude absolue la concentration inconnue d'un soluté dans un échantillon commercial, environnemental ou médical. 
Ce chapitre de Terminale S traite de la théorie complète des dosages acido-basiques : critères thermodynamiques de la réaction de titrage, repérage géométrique du point d'équivalence par la méthode des tangentes ou par la courbe dérivée, choix des indicateurs de pH, et étude approfondie des solutions tampons à pH stable.`,
  conclusion: `En conclusion, le titrage acido-basique repose sur la relation fondamentale à l'équivalence : n_acide_initial / a = n_base_versée / b (pour une réaction aA + bB ➔ Produits). Pour un acide monoacide dosé par une base monobasique, C_A·V_A = C_B·V_bE. Le point d'équivalence E présente un pH neutre (pH_E = 7) pour acide fort/base forte, basique (pH_E > 7) pour acide faible/base forte, et acide (pH_E < 7) pour base faible/acide fort. À la demi-équivalence (V_b = V_bE/2), la solution forme un tampon parfait où pH = pK_a.`,
  sections: [
    {
      title: `I. PRINCIPE DU DOSAGE ACIDO-BASIQUE ET ÉQUIVALENCE`,
      subsections: [
        {
          subtitle: `A. Conditions exigées pour une réaction support de dosage`,
          content: [
            `Pour qu'une réaction chimique puisse servir de support à un dosage quantitatif précis, elle doit obligatoirement satisfaire à trois conditions strictes :`,
            `1. Être TOTALE (constante d'équilibre K_R ≥ 10⁴) : tous les réactifs versés doivent réagir intégralement.`,
            `2. Être RAPIDE (quasi instantanée) : l'équilibre doit être atteint immédiatement après chaque addition de réactif titrant.`,
            `3. Être UNIQUE (ou sélective) : aucune réaction secondaire parasite ne doit interférer avec le soluté à doser.`
          ]
        },
        {
          subtitle: `B. Définition rigoureuse de l'équivalence`,
          content: [
            `L'équivalence acido-basique est l'état du système chimique où les réactifs titré et titrant ont été mélangés dans les PROPORTIONS STŒCHIOMÉTRIQUES de l'équation de réaction.`,
            `À l'équivalence, il y a changement de réactif limitant :`,
            `Avant l'équivalence, le réactif titrant versé est limitant.`,
            `Après l'équivalence, le réactif titré est entièrement consommé et le titrant devient en excès.`,
            `Relation stœchiométrique fondamentale : n_A(initial) = n_B(versé à l'équivalence) ⟺ C_A × V_A = C_B × V_bE.`,
            `D'où l'inconnue : C_A = (C_B × V_bE) / V_A.`
          ]
        }
      ]
    },
    {
      title: `II. ÉTUDE COMPARÉE DES DEUX GRANDS TYPES DE DOSAGES`,
      subsections: [
        {
          subtitle: `A. Dosage d'un acide fort par une base forte (HCl par NaOH)`,
          content: [
            `Équation support : H₃O⁺ + HO⁻ ➔ 2 H₂O (K_R = 1/K_e = 10¹⁴ à 25°C, réaction totale et exothermique).`,
            `Allure de la courbe pH = f(V_b) :`,
            `• Point initial : pH bas (pH = -log C_A).`,
            `• Évolution lente au début, puis SAUT DE pH vertical très brutal entre pH 4 et pH 10.`,
            `• Point d'équivalence E : la solution ne contient que des ions spectateurs Cl⁻ et Na⁺ et de l'eau pure. Donc pH_E = 7,0 à 25°C (neutre).`,
            `• Indicateur coloré approprié : Le Bleu de Bromothymol (BBT) dont la zone de virage [6,0 - 7,6] englobe parfaitement pH_E = 7.`
          ]
        },
        {
          subtitle: `B. Dosage d'un acide faible par une base forte (CH₃COOH par NaOH)`,
          content: [
            `Équation support : CH₃COOH + HO⁻ ➔ CH₃COO⁻ + H₂O (K_R = K_a / K_e = 10^(-4,8) / 10^(-14) = 10^(9,2) >> 10⁴, totale).`,
            `Allure remarquable de la courbe :`,
            `1. Montée initiale rapide due à la présence d'ions acétate.`,
            `2. Zone de quasi-plateau à faible pente appelée ZONE TAMPON.`,
            `3. Point de demi-équivalence (V_b = V_bE / 2) : la moitié de l'acide initial a été transformée en base conjuguée : [CH₃COOH] = [CH₃COO⁻].`,
            `D'après la formule d'Henderson : pH = pK_a + log(1) = pK_a.`,
            `4. Saut de pH moins étendu que pour l'acide fort (entre pH 7 et pH 11).`,
            `5. Point d'équivalence E : tout l'acide a été transformé en sa base conjuguée CH₃COO⁻ (base faible). Donc le milieu à l'équivalence est BASIQUE : pH_E > 7 (souvent pH_E ≈ 8,5 - 9,0).`,
            `Indicateur coloré approprié : La Phénolphtaléine (zone de virage [8,2 - 10,0]). Le BBT est totalement inadapté car il virerait bien avant l'équivalence !`
          ]
        }
      ]
    },
    {
      title: `III. LES SOLUTIONS TAMPONS ET LEURS PROPRIÉTÉS`,
      subsections: [
        {
          subtitle: `A. Définition et préparation d'une solution tampon`,
          content: [
            `Une solution tampon est une solution dont le pH varie très peu :`,
            `1. Lors de l'addition modérée d'un acide fort ou d'une base forte.`,
            `2. Lors d'une dilution modérée avec de l'eau pure.`,
            `Composition chimique d'un tampon : Un mélange équimolaire (ou de concentrations voisines) d'un acide faible et de sa base conjuguée :`,
            `[HA] ≈ [A⁻], donc pH ≈ pK_a.`,
            `Trois méthodes de préparation expérimentale :`,
            `1. Mélange direct de volumes égaux de solutions équimolaires d'acide faible et de sa base conjuguée (ex : CH₃COOH + CH₃COONa).`,
            `2. Neutralisation partielle d'un acide faible par une demi-quantité stœchiométrique de base forte (demi-équivalence V_b = V_bE/2).`,
            `3. Neutralisation partielle d'une base faible par une demi-quantité stœchiométrique d'acide fort.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-3 : CINÉTIQUE CHIMIQUE
// =========================================================================
export const LESSON_3_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-3`,
  number: `Leçon S-3`,
  title: `Cinétique Chimique : Vitesse de Réaction et Facteurs Cinétiques`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de cinétique réactionnelle`,
  description: `Systèmes lents et rapides, avancement de réaction x(t), vitesse volumique de réaction v = (1/V)(dx/dt), vitesse de disparition et d'apparition, méthodes de suivi cinétique, facteurs cinétiques (température, concentration, catalyseur), et temps de demi-réaction t₁/₂.`,
  image: {
    caption: `Figure S-3 : Courbe cinétique d'avancement x = f(t), tracé des tangentes de vitesse et détermination graphique de t₁/₂.`,
    svgContent: SVG_PC_TLE_S_CINETIQUE
  },
  diagram: {
    title: `Cinétique Chimique`,
    svgContent: SVG_PC_TLE_S_CINETIQUE
  },
  introduction: `La thermodynamique chimique permet de prédire si une réaction est théoriquement possible (sens d'évolution spontanée) et quel est son état d'équilibre final. Cependant, elle est totalement muette sur une question pratique cruciale : combien de temps faudra-t-il pour atteindre cet équilibre ? 
Certaines réactions sont explosives ou quasi instantanées (durée < 1 milliseconde, comme les précipitations ou les réactions acido-basiques), tandis que d'autres sont lentes (oxydation du fer en rouille, estérification, fermentations) ou infiniment lentes (la transformation du diamant en graphite prend des millions d'années). 
La cinétique chimique est la branche de la chimie physique qui étudie la vitesse d'évolution temporelle des systèmes chimiques et analyse les paramètres permettant de l'accélérer ou de la ralentir (facteurs cinétiques).`,
  conclusion: `En conclusion, la cinétique chimique en Terminale S repose sur la détermination expérimentale de la vitesse volumique : v(t) = (1/V)·(dx/dt). Graphiquement, cette vitesse est égale au coefficient directeur de la tangente à la courbe x(t) divisé par le volume total V du mélange réactionnel. Au fur et à mesure que les réactifs sont consommés, leurs concentrations diminuent, les chocs efficaces se raréfient et la vitesse décroît inéluctablement pour devenir nulle à l'état final. Le temps de demi-réaction t₁/₂ caractérise la rapidité globale du système.`,
  sections: [
    {
      title: `I. VITESSES DE RÉACTION ET DÉFINITIONS FONDAMENTALES`,
      subsections: [
        {
          subtitle: `A. Avancement de réaction x(t) et vitesse volumique`,
          content: [
            `Soit une réaction chimique en phase liquide homogène de volume constant V :`,
            `a A + b B ➔ c C + d D.`,
            `L'avancement de la réaction à l'instant t est noté x(t) (en moles).`,
            `Définition de la vitesse volumique de réaction : La vitesse volumique de réaction à l'instant t est la dérivée première de l'avancement par rapport au temps divisée par le volume total V du mélange :`,
            `v(t) = (1 / V) × (dx / dt).`,
            `Unités : x en mol, t en secondes (s) ou minutes (min), V en litres (L) ⟹ v s'exprime en mol·L⁻¹·s⁻¹ ou mol·L⁻¹·min⁻¹.`
          ]
        },
        {
          subtitle: `B. Vitesses d'apparition d'un produit et de disparition d'un réactif`,
          content: [
            `1. Vitesse volumique d'apparition d'un produit C :`,
            `v_app(C) = d[C] / dt.`,
            `2. Vitesse volumique de disparition d'un réactif A :`,
            `Puisque la concentration [A] diminue au cours du temps, la dérivée d[A]/dt est négative. Pour obtenir une vitesse positive, on pose :`,
            `v_disp(A) = - d[A] / dt.`,
            `Relations fondamentales entre les vitesses stœchiométriques :`,
            `v(t) = (1/a) × v_disp(A) = (1/b) × v_disp(B) = (1/c) × v_app(C) = (1/d) × v_app(D).`
          ]
        }
      ]
    },
    {
      title: `II. LE TEMPS DE DEMI-RÉACTION t₁/₂`,
      subsections: [
        {
          subtitle: `A. Définition et détermination graphique`,
          content: [
            `Définition officielle : Le temps de demi-réaction, noté t₁/₂, est la durée nécessaire pour que l'avancement x de la réaction atteigne la MOITIÉ de sa valeur finale (ou maximale) :`,
            `x(t₁/₂) = x_f / 2 = x_max / 2 (pour une réaction totale).`,
            `Méthode pratique de détermination graphique au Bac :`,
            `1. Repérer sur la courbe expérimentale x = f(t) la valeur finale maximale x_max sur le plateau horizontal.`,
            `2. Calculer la demi-valeur numérique : x_demi = x_max / 2.`,
            `3. Tracer la ligne horizontale d'ordonnée x_demi jusqu'à son intersection avec la courbe.`,
            `4. Projeter orthogonalement ce point sur l'axe des abscisses pour lire directement la valeur de t₁/₂.`
          ]
        }
      ]
    },
    {
      title: `III. LES FACTEURS CINÉTIQUES ET LEURS MÉCANISMES MICROSCOPIQUES`,
      subsections: [
        {
          subtitle: `A. Rôle de la température et de la concentration`,
          content: [
            `1. La température : Une augmentation de la température du milieu réactionnel accélère toujours la réaction chimique (car elle augmente l'agitation thermique moléculaire, la fréquence des collisions et la proportion de chocs possédant une énergie supérieure à l'énergie d'activation E_a selon la loi d'Arrhenius).`,
            `Application pratique : La trempe chimique (immersion brutale du ballon dans de la glace fondante à 0°C) permet de bloquer instantanément une réaction pour doser un réactif à un instant t précis.`,
            `2. La concentration des réactifs : Plus les réactifs sont concentrés, plus le nombre de chocs efficaces par unité de volume et de temps est élevé, et plus la réaction est rapide.`
          ]
        },
        {
          subtitle: `B. La catalyse et ses différentes formes`,
          content: [
            `Un catalyseur est une substance qui augmente la vitesse d'une réaction chimique sans être consommée par celle-ci (il ne figure pas dans l'équation-bilan globale). Il agit en proposant un nouveau chemin réactionnel comportant une énergie d'activation plus faible.`,
            `Classification de la catalyse :`,
            `• Catalyse homogène : Catalyseur et réactifs sont dans la même phase physique (ex : ions H₃O⁺ en solution liquide pour l'estérification).`,
            `• Catalyse hétérogène : Catalyseur et réactifs sont dans des phases différentes (ex : platine ou nickel solide pour l'hydrogénation de gaz).`,
            `• Catalyse enzymatique : Assurée par des macromolécules protéiques biologiques (enzymes), d'une spécificité et d'une efficacité extraordinaires.`
          ]
        }
      ]
    }
  ]
};
