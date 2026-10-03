import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 2
// Conforme au programme officiel national du Sénégal (Bac S1 - S2)
// Leçons S-5 à S-7 : Primitives/Intégrales, Équations Différentielles, Suites Numériques
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_MATH_TLE_S_INTEGRALE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <defs>
    <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.05" />
    </linearGradient>
  </defs>
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">
    FIGURE S-5 : CALCUL INTÉGRAL, AIRE SOUS LA COURBE & INTÉGRATION PAR PARTIES
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#2563eb">
    Aire A = ∫[a à b] f(x) dx = F(b) - F(a) (U.A.) et formule ∫ u·v' = [u·v] - ∫ u'·v
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#334155" stroke-width="2" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#1e293b">x</text>
  <text x="95" y="90" font-size="13" font-weight="bold" fill="#1e293b">y</text>

  <!-- Area under curve between a and b -->
  <path d="M 220 320 L 220 220 Q 340 130 440 180 T 560 120 L 560 320 Z" fill="url(#areaGrad)" stroke="none" />

  <!-- Curve f(x) -->
  <path d="M 140 260 Q 240 210 340 140 T 640 110" fill="none" stroke="#2563eb" stroke-width="3.5" />
  <text x="645" y="115" font-size="13" font-weight="bold" fill="#2563eb">C_f (f ≥ 0)</text>

  <!-- Bounds a and b -->
  <line x1="220" y1="320" x2="220" y2="215" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" />
  <circle cx="220" cy="215" r="5" fill="#dc2626" />
  <text x="215" y="338" font-size="12" font-weight="bold" fill="#dc2626">a</text>

  <line x1="560" y1="320" x2="560" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" />
  <circle cx="560" cy="120" r="5" fill="#dc2626" />
  <text x="555" y="338" font-size="12" font-weight="bold" fill="#dc2626">b</text>

  <!-- Area Label -->
  <rect x="330" y="220" width="140" height="40" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="400" y="245" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Aire = ∫_a^b f(x)dx</text>

  <rect x="360" y="80" width="370" height="90" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="375" y="105" font-size="11" font-weight="bold" fill="#1e3a8a">Propriétés clés des intégrales au Bac :</text>
  <text x="375" y="125" font-size="11" fill="#334155">• Linéarité : ∫ (αf + βg) = α∫f + β∫g</text>
  <text x="375" y="145" font-size="11" fill="#334155">• Relation de Chasles : ∫_a^b f + ∫_b^c f = ∫_a^c f</text>
  <text x="375" y="162" font-size="11" fill="#334155">• Positivité : Si f ≤ g sur [a,b] avec a ≤ b ⟹ ∫_a^b f ≤ ∫_a^b g</text>
</svg>`;

export const SVG_MATH_TLE_S_SUITES_TOILE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">
    FIGURE S-6 : SUITES RÉCURRENTES u_(n+1) = f(u_n) & TOILE D'ARAIGNÉE (ESCALIER)
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#b45309">
    Construction géométrique des termes u₀, u₁, u₂, u₃ et convergence vers le point fixe l = f(l)
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#475569" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#475569" stroke-width="2" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#334155">x</text>
  <text x="100" y="90" font-size="13" font-weight="bold" fill="#334155">y</text>

  <!-- Line y = x -->
  <line x1="120" y1="320" x2="520" y2="100" stroke="#9333ea" stroke-width="2" stroke-dasharray="6,4" />
  <text x="525" y="105" font-size="12" font-weight="bold" fill="#9333ea">(Δ) : y = x</text>

  <!-- Curve f(x) -->
  <path d="M 140 260 Q 300 240 380 180 T 560 120" fill="none" stroke="#2563eb" stroke-width="3" />
  <text x="565" y="125" font-size="12" font-weight="bold" fill="#2563eb">y = f(x)</text>

  <!-- Fixed point intersection -->
  <circle cx="380" cy="180" r="6" fill="#dc2626" />
  <text x="390" y="175" font-size="12" font-weight="bold" fill="#dc2626">Point fixe (l, l)</text>

  <!-- Web / Cobweb steps -->
  <!-- u0 -->
  <line x1="180" y1="320" x2="180" y2="248" stroke="#16a34a" stroke-width="2" />
  <circle cx="180" cy="320" r="4" fill="#16a34a" />
  <text x="175" y="338" font-size="11" font-weight="bold" fill="#16a34a">u₀</text>

  <!-- step 1 : u0 -> f(u0) -> y=x gives u1 on x -->
  <line x1="180" y1="248" x2="252" y2="248" stroke="#16a34a" stroke-width="2" />
  <line x1="252" y1="248" x2="252" y2="218" stroke="#16a34a" stroke-width="2" />
  <line x1="252" y1="320" x2="252" y2="248" stroke="#94a3b8" stroke-dasharray="2,2" />
  <text x="247" y="338" font-size="11" font-weight="bold" fill="#16a34a">u₁</text>

  <!-- step 2 : u1 -> f(u1) -> y=x gives u2 -->
  <line x1="252" y1="218" x2="310" y2="218" stroke="#16a34a" stroke-width="2" />
  <line x1="310" y1="218" x2="310" y2="198" stroke="#16a34a" stroke-width="2" />
  <line x1="310" y1="320" x2="310" y2="218" stroke="#94a3b8" stroke-dasharray="2,2" />
  <text x="305" y="338" font-size="11" font-weight="bold" fill="#16a34a">u₂</text>

  <!-- step 3 : to fixed point -->
  <line x1="310" y1="198" x2="350" y2="198" stroke="#16a34a" stroke-width="2" />
  <line x1="350" y1="198" x2="350" y2="188" stroke="#16a34a" stroke-width="2" />

  <rect x="360" y="235" width="370" height="85" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
  <text x="375" y="255" font-size="11" font-weight="bold" fill="#78350f">Théorème du point fixe :</text>
  <text x="375" y="275" font-size="11" fill="#b45309">Si f est continue et si (u_n) converge vers l, alors f(l) = l.</text>
  <text x="375" y="295" font-size="10" fill="#b45309">L'escalier converge de façon monotone si f est croissante, en spirale si f est décroissante.</text>
</svg>`;

// =========================================================================
// LEÇON S-5 : PRIMITIVES ET CALCUL INTÉGRAL
// =========================================================================
export const LESSON_5_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-5`,
  number: `Leçon S-5`,
  title: `Primitives et Calcul Intégral`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de cours magistral et démonstrations`,
  description: `Théorème fondamental de l'analyse, tableau exhaustif des primitives, intégrale de Riemann, propriétés algébriques et d'ordre, intégration par parties (IPP), calcul d'aires planes, volumes de révolution et valeur moyenne.`,
  image: {
    caption: `Figure S-5 : Calcul intégral, aire algébrique sous une courbe et formule d'intégration par parties.`,
    svgContent: SVG_MATH_TLE_S_INTEGRALE
  },
  diagram: {
    title: `Primitives et Calcul Intégral`,
    svgContent: SVG_MATH_TLE_S_INTEGRALE
  },
  introduction: `Le calcul intégral est, avec la dérivation, l'un des deux piliers magistraux inventés indépendamment par Isaac Newton et Gottfried Wilhelm Leibniz à la fin du XVIIe siècle. Alors que la dérivation fractionne une courbe pour en analyser la pente instantanée, l'intégration réalise la sommation continue d'une infinité d'éléments infinitésimaux pour en reconstituer l'aire globale, la masse, le travail d'une force ou la valeur moyenne d'un signal électrique. 
Le Théorème Fondamental de l'Analyse établit le pont universel et vertigineux unissant ces deux opérations : dérivation et intégration sont des opérations réciproques. Ce chapitre enseigne aux élèves de Terminale S1-S2 la détermination rigoureuse de primitives, la formule d'intégration par parties et les applications géométriques au calcul d'aires.`,
  conclusion: `En conclusion, le calcul intégral en Terminale S constitue un carrefour fondamental reliant l'analyse pure et la physique appliquée. Les compétences incontournables pour le Baccalauréat sont : 1) La reconnaissance instantanée des formes composées u'·u^n, u'/u, u'·e^u pour primitiver sans hésitation, 2) Le choix judicieux des fonctions u et v' dans la formule d'intégration par parties selon la règle mémotechnique ALPES (Arctan, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus), et 3) L'interprétation géométrique rigoureuse d'une aire entre deux courbes A = ∫ [f(x) - g(x)] dx en unités d'aire (U.A. = ||i|| × ||j||).`,
  sections: [
    {
      title: `I. THÉORIE DES PRIMITIVES D'UNE FONCTION CONTINUE`,
      subsections: [
        {
          subtitle: `A. Définition et théorème d'existence`,
          content: [
            `Définition formelle : Soit f une fonction définie sur un intervalle I de R. On appelle primitive de f sur I toute fonction F dérivable sur I telle que pour tout x ∈ I :`,
            `F'(x) = f(x).`,
            `Théorème d'existence (admis) : Toute fonction continue sur un intervalle I admet des primitives sur cet intervalle.`,
            `Théorème fondamental de l'ensemble des primitives : Si F est une primitive de f sur I, alors l'ensemble de toutes les primitives de f sur I est la famille de fonctions :`,
            `{ x ↦ F(x) + C | C ∈ R }.`,
            `Démonstration pas-à-pas de l'unicité à une constante près :`,
            `Soient F et G deux primitives de f sur l'intervalle I. Par définition, pour tout x ∈ I, F'(x) = f(x) et G'(x) = f(x).`,
            `Considérons la différence H = F - G. Pour tout x ∈ I : H'(x) = F'(x) - G'(x) = f(x) - f(x) = 0.`,
            `Or, une fonction dont la dérivée est identiquement nulle sur un INTERVALLE I est obligatoirement constante.`,
            `Il existe donc une constante réelle C telle que pour tout x ∈ I, H(x) = C, soit F(x) = G(x) + C.`,
            `Corollaire (Condition initiale) : Pour tout x₀ ∈ I et tout y₀ ∈ R, il existe une UNIQUE primitive F₀ de f sur I vérifiant F₀(x₀) = y₀.`
          ]
        },
        {
          subtitle: `B. Tableau des primitives des fonctions composées (Le catalogue du Bac)`,
          content: [
            `Soit u une fonction dérivable sur un intervalle I :`,
            `• u' · u^n (n ≠ -1) ⟹ F(x) = (1 / (n + 1)) · u^(n + 1) + C.`,
            `• u' / u (u > 0) ⟹ F(x) = ln(u) + C. De manière générale (u ≠ 0) : F(x) = ln(|u|) + C.`,
            `• u' / √u (u > 0) ⟹ F(x) = 2√u + C.`,
            `• u' · e^u ⟹ F(x) = e^u + C.`,
            `• u' · cos(u) ⟹ F(x) = sin(u) + C.`,
            `• u' · sin(u) ⟹ F(x) = -cos(u) + C.`,
            `• u' / (1 + u²) ⟹ F(x) = arctan(u) + C (spécifique S1).`
          ]
        }
      ]
    },
    {
      title: `II. L'INTÉGRALE DE RIEMANN ET SES PROPRIÉTÉS FONDAMENTALES`,
      subsections: [
        {
          subtitle: `A. Définition par les primitives`,
          content: [
            `Soit f une fonction continue sur un intervalle I, et soient a et b deux réels de I. Soit F une primitive quelconque de f sur I.`,
            `On appelle intégrale de f de a à b le nombre réel noté ∫_a^b f(t) dt défini par :`,
            `∫_a^b f(t) dt = [F(t)]_a^b = F(b) - F(a).`,
            `Indépendance de la primitive choisie : Si G est une autre primitive, G(x) = F(x) + C, donc G(b) - G(a) = [F(b) + C] - [F(a) + C] = F(b) - F(a). La valeur de l'intégrale ne dépend pas de la constante C.`
          ]
        },
        {
          subtitle: `B. Propriétés fondamentales de l'intégrale`,
          content: [
            `1. Linéarité : Pour toutes fonctions continues f et g sur [a, b] et pour tous réels α, β :`,
            `∫_a^b [α·f(x) + β·g(x)] dx = α ∫_a^b f(x) dx + β ∫_a^b g(x) dx.`,
            `2. Relation de Chasles : Pour tous réels a, b, c :`,
            `∫_a^b f(x) dx + ∫_b^c f(x) dx = ∫_a^c f(x) dx.`,
            `3. Positivité et ordre : Si a ≤ b :`,
            `• Si f(x) ≥ 0 sur [a, b], alors ∫_a^b f(x) dx ≥ 0.`,
            `• Si f(x) ≤ g(x) sur [a, b], alors ∫_a^b f(x) dx ≤ ∫_a^b g(x) dx.`,
            `4. Inégalité de la moyenne : Si m ≤ f(x) ≤ M pour tout x ∈ [a, b] (avec a ≤ b), alors :`,
            `m(b - a) ≤ ∫_a^b f(x) dx ≤ M(b - a).`
          ]
        }
      ]
    },
    {
      title: `III. LA FORMULE D'INTÉGRATION PAR PARTIES (IPP)`,
      subsections: [
        {
          subtitle: `A. Énoncé et démonstration complète`,
          content: [
            `Théorème de l'IPP : Soient u et v deux fonctions de classe C¹ (dérivables à dérivées continues) sur un intervalle [a, b]. Alors :`,
            `∫_a^b u(x)·v'(x) dx = [u(x)·v(x)]_a^b - ∫_a^b u'(x)·v(x) dx.`,
            `Démonstration pas-à-pas :`,
            `D'après la règle de dérivation du produit de deux fonctions, pour tout x ∈ [a, b] :`,
            `(u · v)'(x) = u'(x)·v(x) + u(x)·v'(x).`,
            `En isolant le terme u(x)·v'(x) :`,
            `u(x)·v'(x) = (u · v)'(x) - u'(x)·v(x).`,
            `Intégrons les deux membres entre a et b en utilisant la linéarité de l'intégrale :`,
            `∫_a^b u(x)·v'(x) dx = ∫_a^b (u · v)'(x) dx - ∫_a^b u'(x)·v(x) dx.`,
            `Or, une primitive évidente de la dérivée (u · v)' est le produit u · v lui-même :`,
            `∫_a^b (u · v)'(x) dx = [u(x)·v(x)]_a^b.`,
            `On démontre ainsi exactement la formule de l'intégration par parties.`
          ]
        },
        {
          subtitle: `B. Exemple fondamental du Bac S : Calcul de ∫₁^e ln(x) dx`,
          content: [
            `On cherche à calculer I = ∫₁^e ln(x) dx = ∫₁^e 1 × ln(x) dx.`,
            `Posons le choix stratégique selon la règle ALPES :`,
            `• u(x) = ln(x) ⟹ u'(x) = 1/x.`,
            `• v'(x) = 1 ⟹ v(x) = x.`,
            `Les fonctions u et v sont de classe C¹ sur [1 ; e]. En appliquant la formule d'IPP :`,
            `I = [x · ln(x)]₁^e - ∫₁^e (1/x) × x dx.`,
            `I = [e · ln(e) - 1 · ln(1)] - ∫₁^e 1 dx.`,
            `Comme ln(e) = 1 et ln(1) = 0 :`,
            `I = [e - 0] - [x]₁^e = e - (e - 1) = e - e + 1 = 1.`,
            `Conclusion : L'aire sous la courbe du logarithme népérien entre 1 et e est exactement égale à 1 unité d'aire !`
          ]
        }
      ]
    },
    {
      title: `IV. APPLICATIONS GÉOMÉTRIQUES : CALCUL D'AIRES ET VALEUR MOYENNE`,
      subsections: [
        {
          subtitle: `A. Aire comprise entre deux courbes`,
          content: [
            `Soient f et g deux fonctions continues sur [a, b] telles que pour tout x ∈ [a, b], f(x) ≥ g(x).`,
            `L'aire A du domaine plan délimité par les courbes C_f, C_g et les droites verticales x = a et x = b est donnée par :`,
            `A = ∫_a^b [f(x) - g(x)] dx (en unités d'aire U.A.).`,
            `Si le repère est orthogonal avec ||i|| = 2 cm et ||j|| = 3 cm, l'unité d'aire vaut :`,
            `1 U.A. = 2 cm × 3 cm = 6 cm².`,
            `L'aire en centimètres carrés est alors : A(cm²) = A(U.A.) × 6.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-6 : ÉQUATIONS DIFFÉRENTIELLES LINÉAIRES
// =========================================================================
export const LESSON_6_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-6`,
  number: `Leçon S-6`,
  title: `Équations Différentielles Linéaires`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de résolution et preuves`,
  description: `Équations du premier ordre y' + ay = 0 et y' + ay = b, équations du second ordre à coefficients constants ay'' + by' + cy = 0, discriminant caractéristique, oscillateur harmonique y'' + ω²y = 0 et applications en physique.`,
  image: {
    caption: `Figure S-6 : Oscillations harmoniques libres et amorties solutions des équations différentielles du second ordre.`,
    svgContent: SVG_MATH_TLE_S_SUITES_TOILE
  },
  diagram: {
    title: `Équations Différentielles`,
    svgContent: SVG_MATH_TLE_S_SUITES_TOILE
  },
  introduction: `Une équation différentielle est une équation dont l'inconnue n'est pas un nombre, mais une fonction y, et qui met en jeu cette fonction et ses dérivées successives (y', y''). C'est le langage universel de la modélisation en sciences de la nature et de l'ingénieur : lois de la dynamique de Newton (F = m·d²x/dt²), oscillations électriques des circuits RLC, décroissance radioactive en physique nucléaire et cinétique chimique. 
Ce chapitre formalise la structure algébrique des solutions (espace vectoriel de dimension 1 ou 2), résout intégralement les équations du premier et du second ordre à coefficients constants réels, et établit les théorèmes d'unicité avec conditions initiales (problème de Cauchy).`,
  conclusion: `En conclusion, la résolution d'une équation différentielle linéaire au Baccalauréat Scientifique obéit à une méthodologie immuable : 1) Trouver la solution générale y_h de l'équation homogène sans second membre, 2) Déterminer une solution particulière y_p du même type que le second membre, 3) Écrire la solution générale complète y = y_h + y_p, et 4) Déterminer les constantes d'intégration (C, C₁, C₂) grâce aux conditions initiales imposées.`,
  sections: [
    {
      title: `I. ÉQUATIONS DIFFÉRENTIELLES DU PREMIER ORDRE y' + ay = f(x)`,
      subsections: [
        {
          subtitle: `A. Équation homogène y' + ay = 0 (avec a constant non nul)`,
          content: [
            `Théorème fondamental : Les solutions sur R de l'équation différentielle y' + ay = 0 sont les fonctions de la forme :`,
            `y(x) = C · e^(-ax), où C est une constante réelle arbitraire.`,
            `Démonstration pas-à-pas de l'équivalence :`,
            `y' + ay = 0 ⟺ e^(ax)·y' + a·e^(ax)·y = 0.`,
            `On reconnaît dans le membre de gauche la dérivée exacte du produit de fonctions [e^(ax) · y]' :`,
            `[e^(ax) · y]' = 0.`,
            `Une fonction dont la dérivée est nulle sur l'intervalle R est constante. Il existe donc une constante C ∈ R telle que :`,
            `e^(ax) · y(x) = C ⟺ y(x) = C · e^(-ax).`,
            `Unicité avec condition initiale : Pour tout couple (x₀, y₀), il existe une unique solution vérifiant y(x₀) = y₀, donnée par C = y₀ · e^(ax₀).`
          ]
        },
        {
          subtitle: `B. Équation avec second membre constant y' + ay = b`,
          content: [
            `Théorème : Les solutions sur R de l'équation y' + ay = b (avec a ≠ 0) sont de la forme :`,
            `y(x) = C · e^(-ax) + b/a, où C ∈ R.`,
            `Remarque : La constante y_p(x) = b/a est une solution particulière évidente car y'_p = 0 et a(b/a) = b.`
          ]
        }
      ]
    },
    {
      title: `II. ÉQUATIONS DU SECOND ORDRE ay'' + by' + cy = 0`,
      subsections: [
        {
          subtitle: `A. L'équation caractéristique ar² + br + c = 0`,
          content: [
            `Soit l'équation différentielle linéaire du second ordre : ay'' + by' + cy = 0 (avec a ≠ 0).`,
            `On lui associe son équation caractéristique algébrique : a r² + b r + c = 0, de discriminant Δ = b² - 4ac.`,
            `Théorème de classification des solutions selon le signe de Δ :`,
            `1. Premier cas : Δ > 0 (Deux racines réelles distinctes r₁ et r₂)`,
            `Les solutions générales sur R sont les fonctions :`,
            `y(x) = C₁ · e^(r₁ x) + C₂ · e^(r₂ x), avec (C₁, C₂) ∈ R².`,
            `2. Deuxième cas : Δ = 0 (Une racine réelle double r₀ = -b / (2a))`,
            `Les solutions générales sur R sont les fonctions :`,
            `y(x) = (C₁ x + C₂) · e^(r₀ x), avec (C₁, C₂) ∈ R².`,
            `3. Troisième cas : Δ < 0 (Deux racines complexes conjuguées r = α ± iβ avec α = -b/(2a) et β = √(|Δ|)/(2a))`,
            `Les solutions générales réelles sur R sont les fonctions oscillantes amorties :`,
            `y(x) = e^(α x) · [C₁ cos(β x) + C₂ sin(β x)], avec (C₁, C₂) ∈ R².`
          ]
        },
        {
          subtitle: `B. Cas particulier fondamental de l'oscillateur harmonique y'' + ω²y = 0`,
          content: [
            `L'équation caractéristique est r² + ω² = 0, dont les racines sont imaginaires pures r = ± iω (α = 0 et β = ω).`,
            `Les solutions générales sur R sont :`,
            `y(x) = C₁ cos(ω x) + C₂ sin(ω x) = A cos(ω x + φ),`,
            `où A est l'amplitude maximale et φ la phase à l'origine. Ce résultat est le fondement de tous les oscillateurs mécaniques et électromagnétiques libres sans frottement étudiés en physique Terminale S.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-7 : SUITES NUMÉRIQUES RÉELLES ET RÉCURRENCE
// =========================================================================
export const LESSON_7_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-7`,
  number: `Leçon S-7`,
  title: `Suites Numériques Réelles et Récurrence`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de démonstrations intégrales`,
  description: `Axiome de récurrence, convergence, théorèmes de comparaison, théorème de la convergence monotone, suites adjacentes, et étude complète des suites récurrentes u_(n+1) = f(u_n) avec le théorème du point fixe.`,
  image: {
    caption: `Figure S-7 : Graphique en escalier d'une suite récurrente u_(n+1) = f(u_n) et convergence vers le point fixe l.`,
    svgContent: SVG_MATH_TLE_S_SUITES_TOILE
  },
  diagram: {
    title: `Suites Récurrentes`,
    svgContent: SVG_MATH_TLE_S_SUITES_TOILE
  },
  introduction: `L'étude des suites réelles en Terminale S représente le passage de l'analyse discrète vers la topologie de la droite réelle. Le raisonnement par récurrence, formalisé par Giuseppe Peano, permet de prouver la validité d'une propriété pour une infinité dénombrable d'entiers naturels. 
Au Baccalauréat S1-S2 au Sénégal, l'étude des suites récurrentes u_(n+1) = f(u_n) est l'un des exercices les plus sélectifs : elle combine la recherche d'intervalles stables f(I) ⊂ I, l'application de l'Inégalité des Accroissements Finis (IAF) pour établir la contractance, et la détermination exacte de la limite comme point fixe l = f(l).`,
  conclusion: `En conclusion, la rigueur dans la rédaction des suites en Terminale S est essentielle : annonce explicite de l'hypothèse de récurrence P(n), initialisation pour n₀, étape d'hérédité montrant que P(k) implique P(k+1), et conclusion. Pour les suites récurrentes, l'enchaînement canonique au Bac est : 1) Montrer que u_n ∈ [a, b] par récurrence, 2) Établir |f'(x)| ≤ k avec k < 1, 3) Appliquer l'IAF pour en déduire |u_(n+1) - l| ≤ k|u_n - l|, 4) Itérer pour prouver |u_n - l| ≤ k^n |u₀ - l|, et 5) Conclure à la convergence par le théorème des gendarmes car lim k^n = 0.`,
  sections: [
    {
      title: `I. LE PRINCIPE DE RAISONNEMENT PAR RÉCURRENCE`,
      subsections: [
        {
          subtitle: `A. Axiome fondamental de récurrence`,
          content: [
            `Soit P(n) une proposition mathématique dépendant d'un entier naturel n ≥ n₀.`,
            `Pour démontrer que P(n) est vraie pour tout entier n ≥ n₀, on procède en trois étapes obligatoires :`,
            `1. Étape d'initialisation : On vérifie que la proposition est vraie pour le premier terme, c'est-à-dire que P(n₀) est vraie.`,
            `2. Étape d'hérédité : On suppose que pour un entier k quelconque fixé (k ≥ n₀), la proposition P(k) est vraie (c'est l'hypothèse de récurrence HR). On démontre alors, en utilisant cette hypothèse, que la proposition reste vraie au rang suivant, c'est-à-dire que P(k + 1) est vraie.`,
            `3. Conclusion : Par le principe de récurrence, la proposition P(n) est vraie pour tout entier naturel n ≥ n₀.`
          ]
        }
      ]
    },
    {
      title: `II. THÉORÈMES DE CONVERGENCE MONOTONE ET SUITES ADJACENTES`,
      subsections: [
        {
          subtitle: `A. Théorème de la convergence monotone`,
          content: [
            `Théorème fondamental de l'analyse réelle :`,
            `1. Toute suite croissante et majorée est CONVERGENTE (sa limite l est la borne supérieure de l'ensemble de ses termes).`,
            `2. Toute suite décroissante et minorée est CONVERGENTE (sa limite l est la borne inférieure de ses termes).`,
            `Remarque cruciale : Ce théorème affirme avec certitude l'EXISTENCE de la limite sans nécessairement donner sa valeur numérique.`
          ]
        },
        {
          subtitle: `B. Suites adjacentes`,
          content: [
            `Définition : Deux suites (u_n) et (v_n) sont dites adjacentes si et seulement si :`,
            `1. L'une est croissante (par exemple u_n).`,
            `2. L'autre est décroissante (par exemple v_n).`,
            `3. La limite de leur différence est nulle : lim [n→+∞] (v_n - u_n) = 0.`,
            `Théorème des suites adjacentes : Si deux suites (u_n) et (v_n) sont adjacentes, alors elles convergent et ont la MÊME LIMITE l. De plus, pour tout entier n : u_n ≤ l ≤ v_n.`
          ]
        }
      ]
    },
    {
      title: `III. ÉTUDE DES SUITES RÉCURRENTES u_(n+1) = f(u_n)`,
      subsections: [
        {
          subtitle: `A. Théorème du point fixe`,
          content: [
            `Théorème : Soit f une fonction continue sur un intervalle I de R. Soit (u_n) une suite définie par u₀ ∈ I et u_(n+1) = f(u_n).`,
            `Si la suite (u_n) est convergente vers une limite finie l appartenant à I, alors cette limite l est obligatoirement un POINT FIXE de la fonction f, c'est-à-dire solution de l'équation :`,
            `f(l) = l.`,
            `Démonstration : Comme lim [n→+∞] u_n = l et que f est continue en l, on a lim [n→+∞] f(u_n) = f(l).`,
            `Or par définition, u_(n+1) = f(u_n). Puisque la suite u_(n+1) a la même limite que u_n (à savoir l), on en déduit par unicité de la limite que l = f(l).`
          ]
        }
      ]
    }
  ]
};
