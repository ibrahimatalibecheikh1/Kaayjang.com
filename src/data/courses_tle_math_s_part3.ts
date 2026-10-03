import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 3
// Conforme au programme officiel national du Sénégal (Bac S1 - S2)
// Leçons S-8 à S-10 : Nombres Complexes, Similitudes Directes, Dénombrement Avancé
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_MATH_TLE_S_COMPLEXES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#581c87">
    FIGURE S-8 : LE PLAN COMPLEXE D'ARGAND-CAUCHY & FORME TRIGONOMÉTRIQUE
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#7e22ce">
    Affixe z = a + ib = r(cos θ + i sin θ) = r e^(iθ) avec module r = |z| et argument θ = arg(z)
  </text>

  <!-- Axes -->
  <line x1="80" y1="220" x2="680" y2="220" stroke="#475569" stroke-width="2" />
  <line x1="300" y1="360" x2="300" y2="60" stroke="#475569" stroke-width="2" />
  <text x="670" y="240" font-size="13" font-weight="bold" fill="#334155">Axe Réel (Re)</text>
  <text x="270" y="75" font-size="13" font-weight="bold" fill="#334155">Axe Imaginaire (Im)</text>
  <text x="285" y="235" font-size="12" fill="#64748b">O</text>

  <!-- Vector OM -->
  <line x1="300" y1="220" x2="480" y2="120" stroke="#2563eb" stroke-width="3" />
  <circle cx="480" cy="120" r="6" fill="#2563eb" />
  <text x="490" y="115" font-size="13" font-weight="bold" fill="#2563eb">M(z = a + ib)</text>

  <!-- Module r -->
  <text x="380" y="160" font-size="13" font-weight="bold" fill="#2563eb">r = |z|</text>

  <!-- Angle theta -->
  <path d="M 360 220 A 60 60 0 0 0 351 192" fill="none" stroke="#dc2626" stroke-width="2.5" />
  <text x="370" y="205" font-size="13" font-weight="bold" fill="#dc2626">θ = arg(z)</text>

  <!-- Projections a and b -->
  <line x1="480" y1="220" x2="480" y2="120" stroke="#94a3b8" stroke-dasharray="3,3" />
  <text x="475" y="240" font-size="12" font-weight="bold" fill="#0f172a">a = r cos θ</text>

  <line x1="300" y1="120" x2="480" y2="120" stroke="#94a3b8" stroke-dasharray="3,3" />
  <text x="210" y="125" font-size="12" font-weight="bold" fill="#0f172a">b = r sin θ</text>

  <!-- Conjugate point M bar -->
  <circle cx="480" cy="320" r="5" fill="#9333ea" />
  <text x="490" y="325" font-size="12" font-weight="bold" fill="#9333ea">M̄(z̄ = a - ib)</text>
  <line x1="300" y1="220" x2="480" y2="320" stroke="#9333ea" stroke-width="1.8" stroke-dasharray="4,2" />

  <rect x="420" y="240" width="320" height="95" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.5"/>
  <text x="435" y="262" font-size="11" font-weight="bold" fill="#581c87">Formules d'Euler &amp; de Moivre :</text>
  <text x="435" y="280" font-size="11" fill="#3b0764">• Moivre : (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)</text>
  <text x="435" y="298" font-size="11" fill="#3b0764">• Euler : cos θ = (e^iθ + e^-iθ)/2</text>
  <text x="435" y="316" font-size="11" fill="#3b0764">• Euler : sin θ = (e^iθ - e^-iθ)/(2i)</text>
</svg>`;

export const SVG_MATH_TLE_S_SIMILITUDE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#9a3412">
    FIGURE S-9 : SIMILITUDE DIRECTE DU PLAN COMPLEXE s(Ω, k, θ)
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#c2410c">
    Écriture complexe : z' - ω = k e^(iθ) (z - ω) avec centre Ω(ω), rapport k = |a| &gt; 0 et angle θ = arg(a)
  </text>

  <!-- Center Omega -->
  <circle cx="200" cy="240" r="7" fill="#dc2626" />
  <text x="180" y="265" font-size="13" font-weight="bold" fill="#dc2626">Ω (Centre)</text>

  <!-- Point M -->
  <circle cx="360" cy="240" r="6" fill="#0284c7" />
  <text x="365" y="260" font-size="12" font-weight="bold" fill="#0284c7">M(z)</text>
  <line x1="200" y1="240" x2="360" y2="240" stroke="#0284c7" stroke-width="2.5" />
  <text x="270" y="232" font-size="11" font-weight="bold" fill="#0284c7">d = ΩM</text>

  <!-- Point M' image -->
  <circle cx="480" cy="110" r="6" fill="#16a34a" />
  <text x="490" y="110" font-size="13" font-weight="bold" fill="#16a34a">M'(z') = s(M)</text>
  <line x1="200" y1="240" x2="480" y2="110" stroke="#16a34a" stroke-width="2.5" />
  <text x="320" y="160" font-size="11" font-weight="bold" fill="#16a34a">ΩM' = k · ΩM</text>

  <!-- Angle theta arc -->
  <path d="M 280 240 A 80 80 0 0 0 262 211" fill="none" stroke="#ea580c" stroke-width="3" />
  <text x="280" y="215" font-size="13" font-weight="bold" fill="#ea580c">θ = angle de rotation</text>

  <!-- Card classification -->
  <rect x="360" y="220" width="370" height="130" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="1.5"/>
  <text x="375" y="242" font-size="11" font-weight="bold" fill="#9a3412">Classification des transformations z' = az + b :</text>
  <text x="375" y="262" font-size="11" fill="#7c2d12">• a = 1 : Translation de vecteur u d'affixe b</text>
  <text x="375" y="282" font-size="11" fill="#7c2d12">• a ∈ R* \ {1} : Homothétie de rapport k = a, centre ω = b/(1-a)</text>
  <text x="375" y="302" font-size="11" fill="#7c2d12">• |a| = 1, a ≠ 1 : Rotation d'angle θ = arg(a), centre ω = b/(1-a)</text>
  <text x="375" y="322" font-size="11" fill="#7c2d12">• a quelconque non réel (|a| ≠ 1) : Similitude directe plane</text>
</svg>`;

// =========================================================================
// LEÇON S-8 : NOMBRES COMPLEXES : ALGÈBRE ET TRIGONOMÉTRIE
// =========================================================================
export const LESSON_8_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-8`,
  number: `Leçon S-8`,
  title: `Nombres Complexes : Algèbre et Trigonométrie`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min d'algèbre pure et démonstrations`,
  description: `Corps des nombres complexes C, forme algébrique, conjugué, module, argument, forme trigonométrique et exponentielle, formules d'Euler et de Moivre, linéarisation trigonométrique et résolution complète des équations polynomiales dans C.`,
  image: {
    caption: `Figure S-8 : Représentation géométrique d'un nombre complexe dans le plan d'Argand-Cauchy.`,
    svgContent: SVG_MATH_TLE_S_COMPLEXES
  },
  diagram: {
    title: `Nombres Complexes`,
    svgContent: SVG_MATH_TLE_S_COMPLEXES
  },
  introduction: `Les nombres complexes constituent l'un des triomphes intellectuels les plus éclatants de l'histoire des mathématiques. Nés au XVIe siècle des intuitions des algébristes italiens Cardan, Tartaglia et Bombelli pour résoudre les équations du troisième degré où des racines carrées de nombres négatifs apparaissaient miraculeusement comme intermédiaires de calcul, ils furent rigoureusement formalisés par Gauss et Euler. 
En introduisant le nombre imaginaire pur i vérifiant i² = -1, le corps C des nombres complexes confère au plan géométrique une structure algébrique d'une puissance absolue. En Terminale S au Sénégal, la maîtrise des complexes est incontournable : forme trigonométrique, formule de Moivre et d'Euler, et résolution des équations du second degré.`,
  conclusion: `En conclusion, le maniement des nombres complexes en Terminale S requiert une double aisance : algébrique (développement, conjugué z·z̄ = |z|², identification des parties réelle et imaginaire) et trigonométrique (multiplication des modules et addition des arguments : |z·z'| = |z|·|z'| et arg(z·z') = arg(z) + arg(z') [2π]). Les formules d'Euler permettent de linéariser sans effort les polynômes trigonométriques cos^n(x) et sin^n(x) pour le calcul intégral.`,
  sections: [
    {
      title: `I. LE CORPS C DES NOMBRES COMPLEXES ET FORME ALGÉBRIQUE`,
      subsections: [
        {
          subtitle: `A. Théorème d'existence et forme algébrique`,
          content: [
            `Théorème fondamental : Il existe un ensemble noté C, appelé ensemble des nombres complexes, qui vérifie les propriétés suivantes :`,
            `1. C contient l'ensemble des nombres réels R (R ⊂ C).`,
            `2. C est muni d'une addition et d'une multiplication qui prolongent celles de R et possèdent les mêmes propriétés de commutativité, d'associativité et de distributivité (corps commutatif).`,
            `3. C contient un élément particulier noté i tel que i² = -1.`,
            `4. Tout nombre complexe z s'écrit de manière UNIQUE sous la forme :`,
            `z = a + i·b, où a et b sont des nombres réels.`,
            `Cette écriture est appelée la FORME ALGÉBRIQUE de z. Le réel a est la partie réelle de z (notée Re(z)), et le réel b est la partie imaginaire de z (notée Im(z)).`
          ]
        },
        {
          subtitle: `B. Le conjugué d'un nombre complexe`,
          content: [
            `Définition : Soit z = a + ib avec (a, b) ∈ R². On appelle conjugué de z le nombre complexe noté z̄ (z barre) défini par :`,
            `z̄ = a - ib.`,
            `Propriétés opératoires fondamentales :`,
            `• z + z̄ = 2a = 2 Re(z) (un réel).`,
            `• z - z̄ = 2ib = 2i Im(z) (un imaginaire pur).`,
            `• z · z̄ = (a + ib)(a - ib) = a² - (ib)² = a² + b² (un réel positif ou nul).`,
            `• z est un nombre réel ⟺ z = z̄.`,
            `• z est imaginaire pur ⟺ z = -z̄ (avec z ≠ 0).`,
            `• Morphisme de conjugaison : (z₁ + z₂)̄ = z̄₁ + z̄₂ et (z₁ × z₂)̄ = z̄₁ × z̄₂.`
          ]
        }
      ]
    },
    {
      title: `II. MODULE, ARGUMENT ET FORME TRIGONOMÉTRIQUE`,
      subsections: [
        {
          subtitle: `A. Module d'un nombre complexe`,
          content: [
            `Définition géométrique et algébrique : Soit z = a + ib avec (a, b) ∈ R². On appelle module de z le nombre réel positif noté |z| défini par :`,
            `|z| = √(a² + b²) = √(z · z̄).`,
            `Dans le plan complexe rapporté à un repère orthonormé direct (O; u, v), si M est le point d'affixe z, le module |z| est exactement la distance euclidienne OM = ||OM||.`,
            `Inégalité triangulaire : Pour tous z₁, z₂ ∈ C :`,
            `||z₁| - |z₂|| ≤ |z₁ + z₂| ≤ |z₁| + |z₂|.`
          ]
        },
        {
          subtitle: `B. Argument et forme exponentielle d'Euler`,
          content: [
            `Soit z un nombre complexe non nul (z ≠ 0). Soit M son image dans le plan.`,
            `On appelle argument de z, noté arg(z), toute mesure en radians de l'angle orienté de vecteurs (u, OM). L'argument est défini à un multiple entier de 2π près (modulo 2π) :`,
            `cos θ = a / |z| et sin θ = b / |z|.`,
            `Notation exponentielle d'Euler : Par convention d'Euler, on pose pour tout réel θ :`,
            `e^(iθ) = cos θ + i sin θ.`,
            `Tout nombre complexe non nul z admet donc l'écriture :`,
            `z = r · e^(iθ), où r = |z| > 0 et θ = arg(z) [2π].`,
            `Théorème de Moivre : Pour tout réel θ et pour tout entier relatif n :`,
            `(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ) ⟺ (e^(iθ))^n = e^(i·nθ).`
          ]
        }
      ]
    },
    {
      title: `III. RÉSOLUTION DES ÉQUATIONS POLYNOMIALES DANS C`,
      subsections: [
        {
          subtitle: `A. Racines carrées d'un nombre complexe quelconque`,
          content: [
            `Soit Z = X + iY un complexe donné. On cherche z = x + iy tel que z² = Z.`,
            `Système fondamental à trois équations :`,
            `{ x² - y² = X (partie réelle de z² = Z)`,
            `{ 2xy = Y     (partie imaginaire de z² = Z)`,
            `{ x² + y² = √(X² + Y²) = |Z| (égalité des modules |z|² = |Z|)`,
            `En additionnant la 1ère et la 3ème équation : 2x² = |Z| + X ⟹ x = ± √((|Z| + X)/2).`,
            `En soustrayant la 1ère de la 3ème : 2y² = |Z| - X ⟹ y = ± √((|Z| - X)/2).`,
            `Le signe du produit xy est donné par l'équation 2xy = Y : si Y > 0, x et y ont le même signe ; si Y < 0, x et y ont des signes opposés.`
          ]
        },
        {
          subtitle: `B. Équation du second degré az² + bz + c = 0 (a, b, c ∈ C)`,
          content: [
            `On calcule le discriminant complexe : Δ = b² - 4ac.`,
            `Soit δ une racine carrée complexe de Δ (telle que δ² = Δ).`,
            `L'équation admet deux solutions dans C (qui sont confondues si Δ = 0) :`,
            `z₁ = (-b - δ) / (2a) et z₂ = (-b + δ) / (2a).`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-9 : APPLICATIONS GÉOMÉTRIQUES ET SIMILITUDES DIRECTES
// =========================================================================
export const LESSON_9_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-9`,
  number: `Leçon S-9`,
  title: `Applications Géométriques des Complexes et Similitudes Directes`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de géométrie analytique et théorèmes`,
  description: `Interprétation géométrique du module et de l'argument, alignement et orthogonalité, écritures complexes des isométries, et étude exhaustive des similitudes directes planes (centre, rapport, angle, forme réduite).`,
  image: {
    caption: `Figure S-9 : Similitude directe plane, transformation géométrique d'un triangle et invariants d'affixes.`,
    svgContent: SVG_MATH_TLE_S_SIMILITUDE
  },
  diagram: {
    title: `Similitudes Directes`,
    svgContent: SVG_MATH_TLE_S_SIMILITUDE
  },
  introduction: `L'alliance de l'algèbre des nombres complexes et de la géométrie euclidienne plane constitue le joyau du programme de Terminale S1-S2 au Sénégal. Dans le plan orienté, les opérations arithmétiques élémentaires correspondent exactement aux grandes transformations géométriques : l'addition correspond à la translation vectorielle, la multiplication par un réel positif à une homothétie, la multiplication par un complexe de module 1 à une rotation d'angle θ, et la multiplication par un complexe non nul quelconque à une similitude directe. 
Ce chapitre enseigne la caractérisation géométrique des configurations remarquables (triangles rectangles, équilatéraux, carrés, alignement de points, cocyclicité) et fournit la théorie complète des similitudes directes planes au Baccalauréat.`,
  conclusion: `En conclusion, les similitudes directes unifient toute la géométrie plane du Baccalauréat Scientifique. La formule canonique d'une similitude directe de centre Ω(ω), de rapport k > 0 et d'angle θ est : z' - ω = k e^(iθ) (z - ω). Pour toute application affine z' = az + b avec a ≠ 0 : si a = 1 c'est une translation ; si a ≠ 1, c'est l'unique similitude directe de centre Ω d'affixe ω = b/(1 - a), de rapport k = |a| et d'angle θ = arg(a) [2π].`,
  sections: [
    {
      title: `I. INTERPRÉTATION GÉOMÉTRIQUE DES QUOTIENTS DE COMPLEXES`,
      subsections: [
        {
          subtitle: `A. Distance et angle orienté`,
          content: [
            `Soient A, B, C, D quatre points d'affixes respectives z_A, z_B, z_C, z_D avec A ≠ B et C ≠ D :`,
            `1. Distance euclidienne : AB = |z_B - z_A|.`,
            `2. Angle orienté de vecteurs : (u, AB) = arg(z_B - z_A) [2π].`,
            `3. Angle orienté entre deux droites sécantes :`,
            `(AB, CD) = arg((z_D - z_C) / (z_B - z_A)) [2π].`,
            `Rapport des longueurs : CD / AB = |(z_D - z_C) / (z_B - z_A)|.`
          ]
        },
        {
          subtitle: `B. Critères d'alignement et d'orthogonalité`,
          content: [
            `Soient trois points distincts A, B, C d'affixes z_A, z_B, z_C :`,
            `1. Alignement : Les points A, B, C sont alignés si et seulement si l'angle (AB, AC) = 0 [π], ce qui équivaut à :`,
            `(z_C - z_A) / (z_B - z_A) est un NOMBRE RÉEL (c'est-à-dire arg = 0 ou π).`,
            `2. Orthogonalité : Les droites (AB) et (AC) sont perpendiculaires si et seulement si l'angle (AB, AC) = ± π/2 [2π], ce qui équivaut à :`,
            `(z_C - z_A) / (z_B - z_A) est un IMAGINAIRE PUR (c'est-à-dire partie réelle nulle).`
          ]
        },
        {
          subtitle: `C. Caractérisation des triangles remarquables`,
          content: [
            `Soit le quotient Z = (z_C - z_A) / (z_B - z_A) :`,
            `• Le triangle ABC est rectangle et isocèle en A ⟺ Z = ± i = e^(± iπ/2).`,
            `• Le triangle ABC est équilatéral direct ⟺ Z = e^(iπ/3) = 1/2 + i√3/2.`
          ]
        }
      ]
    },
    {
      title: `II. LES SIMILITUDES DIRECTES PLANES`,
      subsections: [
        {
          subtitle: `A. Définition géométrique et éléments caractéristiques`,
          content: [
            `Définition : Une similitude directe du plan est une transformation bijective du plan qui conserve les angles orientés et multiplie toutes les distances par une constante strictement positive k > 0 (appelée rapport de la similitude).`,
            `Théorème fondamental de classification : Toute similitude directe qui n'est pas une translation admet un UNIQUE point invariant (ou point fixe) appelé le CENTRE Ω de la similitude.`,
            `Éléments caractéristiques : Une similitude directe s distincte de l'identité est entièrement déterminée par le triplet (Ω, k, θ) :`,
            `• Son centre Ω.`,
            `• Son rapport k = |a| > 0.`,
            `• Son angle de rotation θ = arg(a) [2π].`
          ]
        },
        {
          subtitle: `B. Forme complexe réduite et détermination pratique`,
          content: [
            `Soit s une similitude directe d'écriture complexe z' = az + b avec a ∈ C* et b ∈ C.`,
            `1. Détermination du centre Ω d'affixe ω : On résout l'équation du point fixe s(Ω) = Ω ⟺ ω = aω + b ⟺ ω(1 - a) = b ⟹`,
            `ω = b / (1 - a) (dès que a ≠ 1).`,
            `2. Écriture sous forme réduite centrée en Ω :`,
            `En soustrayant membre à membre z' = az + b et ω = aω + b :`,
            `z' - ω = a (z - ω) = k e^(iθ) (z - ω).`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-10 : DÉNOMBREMENT ET COMBINATOIRE AVANCÉE
// =========================================================================
export const LESSON_10_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-10`,
  number: `Leçon S-10`,
  title: `Dénombrement et Combinatoire Avancée`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de démonstrations et méthodes combinatoires`,
  description: `Cardinal d'ensembles finis, produit cartésien, p-uplets, permutations, factorielle, arrangements A_n^p, combinaisons C_n^p, propriétés du triangle de Pascal, démonstration par récurrence du binôme de Newton et partitions d'ensembles.`,
  image: {
    caption: `Figure S-10 : Arbre combinatoire complet et relations de récurrence du triangle de Pascal.`,
    svgContent: SVG_MATH_TLE_S_COMPLEXES
  },
  diagram: {
    title: `Dénombrement Avancé`,
    svgContent: SVG_MATH_TLE_S_COMPLEXES
  },
  introduction: `L'analyse combinatoire est la branche des mathématiques qui étudie les configurations finies, les arrangements d'objets discrets et les techniques d'énumération abstraite. En Terminale Scientifique (S1-S2), elle quitte le terrain purement applicatif pour devenir une théorie mathématique rigoureuse reposant sur la théorie des bijections entre ensembles finis. 
La formule du binôme de Newton y est formellement démontrée par récurrence, les propriétés de symétrie et de sommation des coefficients binomiaux sont décortiquées, et les techniques de double comptage préparent directement aux épreuves de probabilités les plus exigeantes du Baccalauréat.`,
  conclusion: `En conclusion, le dénombrement en Série S exige une modélisation mathématique irréprochable sous forme d'applications injectives, surjectives ou bijectives : 1) Les tirages avec remise et ordre correspondent aux applications d'un ensemble de p éléments vers un ensemble de n éléments (n^p), 2) Les tirages sans remise et avec ordre correspondent aux injections (arrangements A_n^p = n!/(n-p)!), 3) Les tirages simultanés sans ordre correspondent aux parties de cardinal p (combinaisons C_n^p = n!/[p!(n-p)!]).`,
  sections: [
    {
      title: `I. THÉORIE DES ENSEMBLES FINIS ET APPLICATIONS BIJECTIVES`,
      subsections: [
        {
          subtitle: `A. Lemme des bergers et principe de double comptage`,
          content: [
            `Lemme des bergers : Soit f une application surjective d'un ensemble fini E sur un ensemble fini F telle que chaque élément de F admet exactement k antécédents dans E (f est dite k-à-1). Alors :`,
            `Card(E) = k × Card(F) ⟺ Card(F) = Card(E) / k.`,
            `Ce principe fondamental explique pourquoi le nombre de combinaisons C_n^p s'obtient en divisant le nombre d'arrangements A_n^p par p! (car chaque sous-ensemble à p éléments admet exactement p! permutations ordonnées distinctes).`
          ]
        }
      ]
    },
    {
      title: `II. DÉMONSTRATION COMPLÈTE DU BINÔME DE NEWTON PAR RÉCURRENCE`,
      subsections: [
        {
          subtitle: `A. Théorème et preuve magistrale`,
          content: [
            `Théorème : Pour tous nombres réels ou complexes a et b, et pour tout entier naturel n ≥ 1 :`,
            `(a + b)^n = ∑ [k=0 à n] C_n^k a^(n - k) b^k.`,
            `Démonstration pas-à-pas par récurrence sur n :`,
            `1. Initialisation pour n = 1 :`,
            `Membre de gauche : (a + b)¹ = a + b.`,
            `Membre de droite : ∑ [k=0 à 1] C₁^k a^(1-k) b^k = C₁⁰ a¹ b⁰ + C₁¹ a⁰ b¹ = 1·a·1 + 1·1·b = a + b.`,
            `La formule est donc vérifiée pour n = 1.`,
            `2. Hérédité : Supposons la formule vraie pour un entier n ≥ 1 fixé (Hypothèse de récurrence HR). Calculons (a + b)^(n + 1) :`,
            `(a + b)^(n + 1) = (a + b) × (a + b)^n = (a + b) × [ ∑ [k=0 à n] C_n^k a^(n-k) b^k ]`,
            `= a × [ ∑ C_n^k a^(n-k) b^k ] + b × [ ∑ C_n^k a^(n-k) b^k ]`,
            `= ∑ [k=0 à n] C_n^k a^(n+1-k) b^k + ∑ [k=0 à n] C_n^k a^(n-k) b^(k+1).`,
            `Effectuons le changement d'indice j = k + 1 dans la deuxième somme :`,
            `= C_n⁰ a^(n+1) + ∑ [k=1 à n] C_n^k a^(n+1-k) b^k + ∑ [j=1 à n] C_n^(j-1) a^(n+1-j) b^j + C_n^n b^(n+1).`,
            `En regroupant les termes de même degré a^(n+1-k) b^k et en utilisant la relation de Pascal C_n^k + C_n^(k-1) = C_(n+1)^k :`,
            `= C_(n+1)⁰ a^(n+1) + ∑ [k=1 à n] C_(n+1)^k a^(n+1-k) b^k + C_(n+1)^(n+1) b^(n+1)`,
            `= ∑ [k=0 à n+1] C_(n+1)^k a^(n+1-k) b^k.`,
            `La propriété est donc démontrée au rang n + 1.`,
            `3. Conclusion : D'après le principe de récurrence, la formule du binôme est vraie pour tout entier n ≥ 1.`
          ]
        }
      ]
    }
  ]
};
