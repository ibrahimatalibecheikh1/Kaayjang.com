import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 1
// Conforme au programme officiel national du Sénégal (Bac S1 - S2)
// Leçons S-1 à S-4 : Analyse fondamentale (Limites/Continuité, Dérivation/TAF, Logarithmes, Exponentielles)
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_MATH_TLE_S_TAF = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#14532d">
    FIGURE S-1 : THÉORÈME DES ACCROISSEMENTS FINIS (TAF) & SÉCANTE PARALLÈLE
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#15803d">
    Il existe c ∈ ]a, b[ tel que f'(c) = [f(b) - f(a)] / (b - a) (La tangente en c est parallèle à la sécante (AB))
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#334155" stroke-width="2" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#1e293b">x</text>
  <text x="95" y="90" font-size="13" font-weight="bold" fill="#1e293b">y</text>

  <!-- Curve f(x) -->
  <path d="M 180 270 Q 280 120 400 190 T 600 110" fill="none" stroke="#2563eb" stroke-width="3.5" />
  <text x="610" y="110" font-size="13" font-weight="bold" fill="#2563eb">C_f</text>

  <!-- Points A and B -->
  <circle cx="180" cy="270" r="6" fill="#0f172a" />
  <text x="160" y="275" font-size="12" font-weight="bold" fill="#0f172a">A(a, f(a))</text>
  <line x1="180" y1="320" x2="180" y2="270" stroke="#94a3b8" stroke-dasharray="3,3" />
  <text x="175" y="338" font-size="12" font-weight="bold" fill="#0f172a">a</text>

  <circle cx="600" cy="110" r="6" fill="#0f172a" />
  <text x="610" y="130" font-size="12" font-weight="bold" fill="#0f172a">B(b, f(b))</text>
  <line x1="600" y1="320" x2="600" y2="110" stroke="#94a3b8" stroke-dasharray="3,3" />
  <text x="595" y="338" font-size="12" font-weight="bold" fill="#0f172a">b</text>

  <!-- Secant Line AB -->
  <line x1="138" y1="286" x2="642" y2="94" stroke="#0284c7" stroke-width="2" stroke-dasharray="6,3" />
  <text x="635" y="90" font-size="12" font-weight="bold" fill="#0284c7">Sécante (AB)</text>

  <!-- Point c and Tangent -->
  <circle cx="330" cy="155" r="6" fill="#dc2626" />
  <text x="330" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">M(c, f(c))</text>
  <line x1="330" y1="320" x2="330" y2="155" stroke="#dc2626" stroke-dasharray="3,3" />
  <text x="325" y="338" font-size="12" font-weight="bold" fill="#dc2626">c</text>

  <!-- Tangent parallel to AB -->
  <line x1="200" y1="205" x2="460" y2="105" stroke="#dc2626" stroke-width="2.5" />
  <text x="465" y="105" font-size="12" font-weight="bold" fill="#dc2626">Tangente // à (AB)</text>

  <rect x="360" y="235" width="370" height="75" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
  <text x="375" y="255" font-size="11" font-weight="bold" fill="#14532d">Formule de Lagrange (TAF) :</text>
  <text x="375" y="275" font-size="11" fill="#15803d">f(b) - f(a) = f'(c)(b - a) avec a &lt; c &lt; b</text>
  <text x="375" y="295" font-size="10" fill="#15803d">Corollaire : Inégalité des accroissements finis : m(b-a) ≤ f(b)-f(a) ≤ M(b-a)</text>
</svg>`;

export const SVG_MATH_TLE_S_CROISSANCES_COMPAREES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">
    FIGURE S-2 : HIÉRARCHIE DES CROISSANCES COMPARÉES EN +∞ (BAC S)
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#2563eb">
    Ordre de domination asymptotique : ln(x) &lt;&lt; x^n &lt;&lt; e^x quand x → +∞
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#334155" stroke-width="2" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#1e293b">x</text>
  <text x="100" y="90" font-size="13" font-weight="bold" fill="#1e293b">y</text>

  <!-- Curve ln(x) (very slow) -->
  <path d="M 125 340 Q 150 280 280 260 T 640 230" fill="none" stroke="#16a34a" stroke-width="3" />
  <text x="645" y="235" font-size="12" font-weight="bold" fill="#16a34a">y = ln(x) (croissance très lente)</text>

  <!-- Curve y = x -->
  <line x1="120" y1="320" x2="480" y2="100" stroke="#0284c7" stroke-width="2.5" />
  <text x="490" y="105" font-size="12" font-weight="bold" fill="#0284c7">y = x (linéaire)</text>

  <!-- Curve y = x² -->
  <path d="M 120 320 Q 200 310 260 250 T 360 85" fill="none" stroke="#d97706" stroke-width="3" />
  <text x="365" y="85" font-size="12" font-weight="bold" fill="#d97706">y = x² (puissance)</text>

  <!-- Curve y = e^x (explosive) -->
  <path d="M 120 318 Q 180 315 220 220 T 260 85" fill="none" stroke="#dc2626" stroke-width="3.5" />
  <text x="265" y="85" font-size="12" font-weight="bold" fill="#dc2626">y = e^x (explosion exponentielle)</text>

  <rect x="360" y="250" width="370" height="85" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="375" y="270" font-size="11" font-weight="bold" fill="#1e3a8a">Limites de croissances comparées à retenir :</text>
  <text x="375" y="290" font-size="11" fill="#1d4ed8">• lim [x→+∞] (e^x / x^n) = +∞ et lim [x→-∞] (x^n · e^x) = 0</text>
  <text x="375" y="310" font-size="11" fill="#1d4ed8">• lim [x→+∞] (ln x / x^n) = 0 et lim [x→0+] (x^n · ln x) = 0</text>
</svg>`;

// =========================================================================
// LEÇON S-1 : LIMITES, CONTINUITÉ ET THÉORÈME DES VALEURS INTERMÉDIAIRES
// =========================================================================
export const LESSON_1_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-1`,
  number: `Leçon S-1`,
  title: `Limites, Continuité et Théorème des Valeurs Intermédiaires`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `70 min de démonstrations rigoureuses`,
  description: `Définitions formelles (ε-δ), opérations sur les limites, théorèmes d'encadrement (théorème des gendarmes), continuité, prolongement par continuité, bijection continue et TVI avec algorithme de dichotomie.`,
  image: {
    caption: `Figure S-1 : Théorème des valeurs intermédiaires, bijection continue et existence d'une racine unique.`,
    svgContent: SVG_MATH_TLE_S_TAF
  },
  diagram: {
    title: `Limites, Continuité et TVI`,
    svgContent: SVG_MATH_TLE_S_TAF
  },
  introduction: `Dans le cursus scientifique de Terminale S au Sénégal, l'analyse mathématique atteint un degré d'exigence et de formalisme rigoureux indispensable à la préparation aux études d'ingénieurs (École Polytechnique de Thiès, ESP Dakar) et aux facultés scientifiques de l'UCAD et de l'UGB. 
Les notions de limite et de continuité ne sont plus seulement abordées de manière intuitive, mais démontrées selon les critères universels de Weierstrass et Cauchy. Ce premier chapitre fondamental pose les règles d'or du calcul des limites, démontre le théorème des gendarmes pour les fonctions trigonométriques et rationnelles, caractérise la continuité globale et locale, et démontre le théorème des valeurs intermédiaires (TVI) ainsi que le théorème de la bijection.`,
  conclusion: `En conclusion, la maîtrise des limites et de la continuité en Terminale S exige trois réflexes majeurs au Baccalauréat : 1) La levée systématique des formes indéterminées par factorisation du terme dominant en ±∞ ou par l'expression conjuguée avec radicaux, 2) L'utilisation rigoureuse du théorème des gendarmes pour encadrer les fonctions oscillantes de type sin(x)/x, et 3) La rédaction irréprochable du théorème de la bijection (continuité stricte + stricte monotonie) pour prouver l'existence et l'unicité de la solution d'une équation f(x) = k sur un intervalle donné.`,
  sections: [
    {
      title: `I. TOPOLOGIE DE R ET DÉFINITION FORMELLE DES LIMITES`,
      subsections: [
        {
          subtitle: `A. Définition en langage formel (ε - δ)`,
          content: [
            `Soit f une fonction définie sur un intervalle I de R contenant x₀ (sauf éventuellement en x₀).`,
            `Définition formelle : On dit que f admet pour limite le nombre réel l en x₀ si :`,
            `∀ ε > 0, ∃ δ > 0 tel que ∀ x ∈ I, (0 < |x - x₀| < δ ⟹ |f(x) - l| < ε).`,
            `Définition de la limite infinie en +∞ :`,
            `On dit que lim [x→+∞] f(x) = +∞ si : ∀ M > 0, ∃ A > 0 tel que ∀ x ∈ I, (x > A ⟹ f(x) > M).`,
            `Cette formalisation traduit mathématiquement que f(x) peut être rendue aussi grande que l'on veut pourvu que x soit choisi suffisamment grand.`
          ]
        },
        {
          subtitle: `B. Théorème d'unicité de la limite`,
          content: [
            `Théorème : Si une fonction f admet une limite l en un point x₀ (ou en ±∞), cette limite est UNIQUE.`,
            `Démonstration par l'absurde : Supposons que f admette deux limites distinctes l₁ et l₂ avec l₁ < l₂.`,
            `Posons ε = (l₂ - l₁) / 2 > 0.`,
            `Par définition de la limite, il existe δ₁ > 0 tel que si |x - x₀| < δ₁, alors |f(x) - l₁| < ε ⟹ f(x) < l₁ + ε = (l₁ + l₂)/2.`,
            `De même, il existe δ₂ > 0 tel que si |x - x₀| < δ₂, alors |f(x) - l₂| < ε ⟹ f(x) > l₂ - ε = (l₁ + l₂)/2.`,
            `En prenant δ = min(δ₁, δ₂), pour tout x tel que 0 < |x - x₀| < δ, on aurait simultanément f(x) < (l₁ + l₂)/2 et f(x) > (l₁ + l₂)/2, ce qui est strictement contradictoire. Donc l₁ = l₂.`
          ]
        }
      ]
    },
    {
      title: `II. THÉORÈMES DE COMPARAISON ET THÉORÈME DES GENDARMES`,
      subsections: [
        {
          subtitle: `A. Théorème des gendarmes (ou d'encadrement)`,
          content: [
            `Énoncé du théorème : Soient f, g et h trois fonctions définies sur un intervalle ouvert contenant x₀ (ou sur un intervalle ]A ; +∞[).`,
            `Si pour tout x au voisinage de x₀ (ou pour x > A) :`,
            `g(x) ≤ f(x) ≤ h(x), et si lim g(x) = l et lim h(x) = l (avec l réel fini),`,
            `alors la fonction f admet également une limite en ce point et lim f(x) = l.`,
            `Démonstration pas-à-pas de la limite classique : lim [x→+∞] (sin(x) / x) = 0 :`,
            `Pour tout réel x > 0, on sait que -1 ≤ sin(x) ≤ 1.`,
            `Comme x > 0, en divisant l'inégalité par x sans changer le sens :`,
            `-1/x ≤ sin(x)/x ≤ 1/x.`,
            `Or lim [x→+∞] (-1/x) = 0 et lim [x→+∞] (1/x) = 0.`,
            `D'après le théorème des gendarmes, la fonction f(x) = sin(x)/x est coincée entre deux grandeurs tendant vers 0, donc lim [x→+∞] (sin(x) / x) = 0.`
          ]
        },
        {
          subtitle: `B. Théorèmes de minoration et majoration à l'infini`,
          content: [
            `1. Si pour tout x suffisamment grand, f(x) ≥ g(x) et si lim [x→+∞] g(x) = +∞, alors lim [x→+∞] f(x) = +∞.`,
            `2. Si pour tout x suffisamment grand, f(x) ≤ h(x) et si lim [x→+∞] h(x) = -∞, alors lim [x→+∞] f(x) = -∞.`
          ]
        }
      ]
    },
    {
      title: `III. CONTINUITÉ ET PROLONGEMENT PAR CONTINUITÉ`,
      subsections: [
        {
          subtitle: `A. Continuité ponctuelle et latérale`,
          content: [
            `Une fonction f définie sur un intervalle contenant x₀ est continue en x₀ si et seulement si :`,
            `lim [x→x₀] f(x) = f(x₀).`,
            `Continuité à gauche et à droite : f est continue en x₀ si et seulement si elle est continue à gauche et à droite en ce point, c'est-à-dire :`,
            `lim [x→x₀, x<x₀] f(x) = lim [x→x₀, x>x₀] f(x) = f(x₀).`
          ]
        },
        {
          subtitle: `B. Prolongement par continuité`,
          content: [
            `Soit f une fonction définie sur I \\ {x₀}. Si f admet une limite finie l en x₀, alors la fonction g définie par :`,
            `g(x) = f(x) pour tout x ≠ x₀, et g(x₀) = l,`,
            `est appelée le prolongement par continuité de f en x₀. La fonction g est continue en x₀.`,
            `Exemple célèbre au Bac S : Soit f(x) = (sin x)/x définie sur R*.`,
            `On sait que lim [x→0] (sin x)/x = 1. La fonction g définie par g(x) = (sin x)/x si x ≠ 0 et g(0) = 1 est le prolongement par continuité de f en 0.`
          ]
        }
      ]
    },
    {
      title: `IV. THÉORÈMES FONDAMENTAUX SUR LES INTERVALLES : TVI ET BIJECTION`,
      subsections: [
        {
          subtitle: `A. Théorème des Valeurs Intermédiaires (TVI)`,
          content: [
            `Théorème de Bolzano-Cauchy (TVI) : L'image d'un intervalle I par une fonction continue f est un intervalle.`,
            `Formulation pratique : Si f est continue sur [a, b], alors pour tout réel k compris entre f(a) et f(b), il existe au moins un réel c ∈ [a, b] tel que f(c) = k.`,
            `Théorème de la Bijection (ou corollaire fondamental) : Si f est STRICTEMENT MONOTONE (strictement croissante ou strictement décroissante) et CONTINUE sur un intervalle I, alors :`,
            `1. f réalise une bijection de l'intervalle I sur l'intervalle image J = f(I).`,
            `2. Pour tout réel k ∈ J, l'équation f(x) = k admet une UNIQUE solution α dans I.`,
            `3. La bijection réciproque f^(-1) est également continue et strictement monotone de même sens sur J.`
          ]
        },
        {
          subtitle: `B. Algorithme de dichotomie pour l'encadrement de la racine`,
          content: [
            `Pour encadrer la solution unique α de l'équation f(x) = 0 sur [a, b] avec f(a)·f(b) < 0 :`,
            `On calcule le milieu m = (a + b) / 2 et on évalue le signe de f(m) :`,
            `• Si f(m) = 0, alors α = m.`,
            `• Si f(a) et f(m) sont de signes contraires, alors α ∈ [a, m]. On pose le nouveau b = m.`,
            `• Sinon, α ∈ [m, b]. On pose le nouveau a = m.`,
            `À chaque étape, la longueur de l'intervalle contenant α est divisée par 2 : l_n = (b - a)/2^n. Cet algorithme permet d'atteindre une précision arbitraire de 10^(-3) en une dizaine d'itérations.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-2 : DÉRIVATION, THÉORÈME DE ROLLE ET ACCROISSEMENTS FINIS
// =========================================================================
export const LESSON_2_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-2`,
  number: `Leçon S-2`,
  title: `Dérivation, Théorème de Rolle et des Accroissements Finis`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de cours magistral et preuves`,
  description: `Dérivabilité, demi-tangentes, dérivée d'une fonction composée et réciproque, théorème de Rolle, théorème des accroissements finis (TAF), inégalité des accroissements finis (IAF), dérivée seconde, convexité et points d'inflexion.`,
  image: {
    caption: `Figure S-2 : Illustration géométrique du théorème de Rolle et du théorème des accroissements finis de Lagrange.`,
    svgContent: SVG_MATH_TLE_S_TAF
  },
  diagram: {
    title: `Dérivation et TAF`,
    svgContent: SVG_MATH_TLE_S_TAF
  },
  introduction: `La théorie de la dérivation est le cœur battant de l'analyse mathématique classique. Si le calcul des dérivées usuelles a été introduit en Première S, la classe de Terminale S élève ce concept à son plus haut degré de rigueur conceptuelle avec l'étude des théorèmes fondamentaux : le Théorème de Rolle et le Théorème des Accroissements Finis (TAF) de Joseph-Louis Lagrange. 
Ces théorèmes permettent de relier rigoureusement les variations globales d'une fonction f sur un intervalle [a, b] à son comportement local instantané f'(c), et fournissent l'inégalité des accroissements finis (IAF), instrument suprême pour démontrer la convergence des suites récurrentes au Baccalauréat.`,
  conclusion: `En conclusion, la dérivation en Terminale S permet de percer tous les secrets géométriques et analytiques d'une fonction : dérivabilité à gauche/droite menant aux points anguleux et demi-tangentes verticales, calcul des composées et des réciproques (f^(-1))' = 1/[f'∘f^(-1)], application du TAF et de l'IAF pour borner des intégrales et des erreurs de troncature, et calcul de la dérivée seconde f''(x) pour déterminer la concavité, la convexité et la position exacte des points d'inflexion.`,
  sections: [
    {
      title: `I. DÉRIVABILITÉ PONCTUELLE ET DÉRIVÉES DES FONCTIONS COMPOSÉES`,
      subsections: [
        {
          subtitle: `A. Dérivabilité à gauche, à droite et interprétation géométrique`,
          content: [
            `Une fonction f est dérivable à droite en x₀ si lim [x→x₀+] [f(x) - f(x₀)] / (x - x₀) existe et est finie. Cette limite est notée f'_d(x₀).`,
            `De même, la dérivée à gauche est notée f'_g(x₀).`,
            `Théorème fondamental : Une fonction f est dérivable en x₀ si et seulement si elle est dérivable à gauche et à droite en ce point et si :`,
            `f'_g(x₀) = f'_d(x₀) = f'(x₀).`,
            `Interprétations géométriques des singularités au Bac :`,
            `1. Point anguleux : Si f'_g(x₀) ≠ f'_d(x₀) (deux réels distincts), la courbe présente un point anguleux formé de deux demi-tangentes de pentes différentes (exemple classique : f(x) = |x| en x = 0 où f'_g(0) = -1 et f'_d(0) = 1).`,
            `2. Demi-tangente verticale : Si le taux de variation tend vers ±∞ quand x tend vers x₀, la fonction n'est pas dérivable en x₀ mais la courbe admet une demi-tangente verticale d'équation x = x₀ (exemple : f(x) = √x en x = 0).`
          ]
        },
        {
          subtitle: `B. Dérivée d'une fonction composée g ∘ f`,
          content: [
            `Théorème de dérivation en chaîne (Chain Rule) : Soit f une fonction dérivable sur un intervalle I, et g une fonction dérivable sur un intervalle J contenant f(I).`,
            `Alors la fonction composée h = g ∘ f est dérivable sur I, et pour tout x ∈ I :`,
            `(g ∘ f)'(x) = f'(x) × g'(f(x)).`,
            `Corollaires immédiats :`,
            `• [u(x)^n]' = n · u'(x) · u(x)^(n - 1).`,
            `• [√(u(x))]' = u'(x) / [2√(u(x))] (pour u(x) > 0).`,
            `• [cos(u(x))]' = -u'(x) · sin(u(x)).`,
            `• [sin(u(x))]' = u'(x) · cos(u(x)).`
          ]
        },
        {
          subtitle: `C. Dérivée de la fonction réciproque f^(-1)`,
          content: [
            `Théorème : Soit f une bijection continue et dérivable sur un intervalle I. Soit y₀ = f(x₀) avec x₀ ∈ I.`,
            `Si f'(x₀) ≠ 0, alors la bijection réciproque f^(-1) est dérivable en y₀ et :`,
            `(f^(-1))'(y₀) = 1 / f'(x₀) = 1 / f'(f^(-1)(y₀)).`,
            `Démonstration pas-à-pas : Par définition de la bijection réciproque, pour tout y ∈ f(I) :`,
            `f(f^(-1)(y)) = y.`,
            `En dérivant les deux membres par rapport à y en utilisant la formule des composées :`,
            `(f^(-1))'(y) × f'(f^(-1)(y)) = 1.`,
            `Comme f'(f^(-1)(y)) ≠ 0, on peut diviser pour obtenir : (f^(-1))'(y) = 1 / f'(f^(-1)(y)).`
          ]
        }
      ]
    },
    {
      title: `II. THÉORÈME DE ROLLE ET THÉORÈME DES ACCROISSEMENTS FINIS`,
      subsections: [
        {
          subtitle: `A. Théorème de Michel Rolle (1691)`,
          content: [
            `Énoncé du théorème : Soit f une fonction numérique satisfaisant aux trois conditions :`,
            `1. f est continue sur le segment fermé [a, b].`,
            `2. f est dérivable sur l'intervalle ouvert ]a, b[.`,
            `3. f(a) = f(b).`,
            `Alors, il existe au moins un réel c ∈ ]a, b[ tel que f'(c) = 0.`,
            `Démonstration rigoureuse : La fonction f étant continue sur le segment fermé borné [a, b], elle est bornée et atteint ses bornes (théorème de Weierstrass) : soient M = max f et m = min f sur [a, b].`,
            `• Si M = m, alors f est constante sur [a, b], donc sa dérivée est nulle en tout point c de ]a, b[.`,
            `• Si M > m, comme f(a) = f(b), l'un au moins des extrema (M ou m) est atteint en un point c intérieur à ]a, b[ (c ≠ a et c ≠ b).`,
            `Puisque f admet un extremum local en c et que f est dérivable en c, le théorème de Fermat sur les extrema locaux implique nécessairement que f'(c) = 0.`
          ]
        },
        {
          subtitle: `B. Théorème des Accroissements Finis (TAF) de Lagrange`,
          content: [
            `Énoncé du théorème : Soit f une fonction continue sur [a, b] et dérivable sur ]a, b[.`,
            `Alors, il existe au moins un réel c ∈ ]a, b[ tel que :`,
            `[f(b) - f(a)] / (b - a) = f'(c) ⟺ f(b) - f(a) = f'(c)(b - a).`,
            `Démonstration élégante utilisant le théorème de Rolle : Introduisons la fonction auxiliaire g définie sur [a, b] par :`,
            `g(x) = f(x) - [f(a) + ((f(b) - f(a))/(b - a))·(x - a)].`,
            `Cette fonction g mesure l'écart vertical entre la courbe de f et la sécante reliant A(a, f(a)) à B(b, f(b)).`,
            `1. g est continue sur [a, b] comme somme de fonctions continues.`,
            `2. g est dérivable sur ]a, b[.`,
            `3. g(a) = f(a) - f(a) = 0, et g(b) = f(b) - [f(a) + f(b) - f(a)] = 0. Donc g(a) = g(b) = 0.`,
            `Les hypothèses du théorème de Rolle sont vérifiées pour g. Il existe donc c ∈ ]a, b[ tel que g'(c) = 0.`,
            `Or g'(x) = f'(x) - (f(b) - f(a))/(b - a). Donc g'(c) = 0 équivaut exactement à f'(c) = (f(b) - f(a))/(b - a).`
          ]
        },
        {
          subtitle: `C. Inégalité des Accroissements Finis (IAF)`,
          content: [
            `Théorème 1 (Encadrement) : Soit f continue sur [a, b] et dérivable sur ]a, b[.`,
            `S'il existe deux réels m et M tels que pour tout x ∈ ]a, b[, m ≤ f'(x) ≤ M, alors :`,
            `m(b - a) ≤ f(b) - f(a) ≤ M(b - a).`,
            `Théorème 2 (Forme absolue / Contractance) : S'il existe un réel k > 0 tel que pour tout x ∈ I, |f'(x)| ≤ k, alors pour tous x, y ∈ I :`,
            `|f(x) - f(y)| ≤ k |x - y|.`,
            `Application majeure au Bac : Si k < 1, la fonction f est dite contractante. Cela permet de prouver la convergence de suites récurrentes u_(n+1) = f(u_n) vers le point fixe unique l avec l'inégalité : |u_n - l| ≤ k^n |u₀ - l|.`
          ]
        }
      ]
    },
    {
      title: `III. DÉRIVÉE SECONDE, CONVEXITÉ ET POINTS D'INFLEXION`,
      subsections: [
        {
          subtitle: `A. Convexité et concavité`,
          content: [
            `Définitions géométriques et analytiques :`,
            `• Une fonction f est dite CONVEXE sur un intervalle I si sa courbe C_f est située entièrement AU-DESSUS de chacune de ses tangentes.`,
            `Critère dérivée seconde : f est convexe sur I si et seulement si pour tout x ∈ I, f''(x) ≥ 0 (ou de manière équivalente, f' est croissante sur I).`,
            `• Une fonction f est dite CONCAVE sur I si sa courbe C_f est située entièrement AU-DESSOUS de chacune de ses tangentes.`,
            `Critère dérivée seconde : f est concave sur I si et seulement si pour tout x ∈ I, f''(x) ≤ 0 (ou f' est décroissante sur I).`
          ]
        },
        {
          subtitle: `B. Point d'inflexion`,
          content: [
            `Définition : Un point d'inflexion I(x₀ ; f(x₀)) est un point où la courbe représentative C_f TRAVERSE sa tangente (la fonction change de convexité : elle passe de concave à convexe ou de convexe à concave).`,
            `Théorème caractéristique : Le point I(x₀ ; f(x₀)) est un point d'inflexion si et seulement si la dérivée seconde f''(x) S'ANNULE EN x₀ EN CHANGEANT DE SIGNE.`,
            `Exemple classique : Pour f(x) = x³, f'(x) = 3x² et f''(x) = 6x. La dérivée seconde f'' s'annule en 0 et change de signe (négative pour x < 0, positive pour x > 0). Le point O(0 ; 0) est un point d'inflexion.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-3 : FONCTIONS LOGARITHMES
// =========================================================================
export const LESSON_3_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-3`,
  number: `Leçon S-3`,
  title: `Fonctions Logarithmes`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de démonstrations approfondies`,
  description: `Construction analytique de ln, démonstration complète des théorèmes de croissances comparées, logarithmes décimal et de base a, études de branches infinies, asymptotes et représentations graphiques complexes.`,
  image: {
    caption: `Figure S-3 : Hiérarchie des croissances comparées à l'infini entre logarithme, polynômes et exponentielle.`,
    svgContent: SVG_MATH_TLE_S_CROISSANCES_COMPAREES
  },
  diagram: {
    title: `Fonctions Logarithmes`,
    svgContent: SVG_MATH_TLE_S_CROISSANCES_COMPAREES
  },
  introduction: `Dans l'arsenal mathématique du Baccalauréat Scientifique au Sénégal (Séries S1 et S2), la fonction logarithme népérien occupe une place centrale. Définie rigoureusement comme l'unique primitive s'annulant en 1 de la fonction inverse 1/x sur ]0 ; +∞[, elle transforme l'opération multiplicative en une addition continue. 
Ce chapitre décortique toutes les propriétés structurales du logarithme, démontre de manière inattaquable les théorèmes de croissances comparées (croissance plus faible que n'importe quelle puissance polynomiale x^n), étudie les fonctions composées ln(u(x)), et détaille les méthodes d'étude des branches paraboliques et des asymptotes obliques.`,
  conclusion: `En conclusion, le maniement des fonctions logarithmes en Terminale S requiert une précision chirurgicale : respect absolu du domaine de définition strictement positif, application systématique des croissances comparées pour lever les formes indéterminées en 0 et en +∞, et dérivation des fonctions composées u'/u. Au Bac S, la fonction ln est quasi-systématiquement au cœur du grand problème d'analyse noté sur 10 à 12 points.`,
  sections: [
    {
      title: `I. CONSTRUCTION ET PROPRIÉTÉS ANALYTIQUES DE LA FONCTION ln`,
      subsections: [
        {
          subtitle: `A. Définition intégrale et unicité`,
          content: [
            `Théorème fondamental de l'analyse : La fonction x ↦ 1/x étant continue sur ]0 ; +∞[, elle y admet une infinité de primitives. Une seule de ces primitives s'annule en x = 1.`,
            `Définition formelle : La fonction logarithme népérien, notée ln, est la primitive de x ↦ 1/x sur ]0 ; +∞[ telle que ln(1) = 0 :`,
            `ln(x) = ∫₁^x (1/t) dt pour tout x > 0.`,
            `Démonstration de la propriété fondamentale ln(a·b) = ln(a) + ln(b) :`,
            `Fixons a > 0 et considérons la fonction f définie sur ]0 ; +∞[ par f(x) = ln(a·x).`,
            `Dérivons f par rapport à x : d'après la formule de dérivation des composées [g(kx)]' = k·g'(kx), on a :`,
            `f'(x) = a × (1 / (a·x)) = 1 / x = (ln x)'.`,
            `Puisque f'(x) = (ln x)' pour tout x > 0, les fonctions f(x) et ln(x) ont la même dérivée. Elles diffèrent donc d'une constante C réelle :`,
            `ln(a·x) = ln(x) + C.`,
            `Pour déterminer la constante C, posons x = 1 : ln(a × 1) = ln(1) + C ⟹ ln(a) = 0 + C ⟹ C = ln(a).`,
            `On en déduit donc l'identité pour tout x > 0 : ln(a·x) = ln(x) + ln(a). En posant x = b, on démontre rigoureusement que ln(a·b) = ln(a) + ln(b).`
          ]
        }
      ]
    },
    {
      title: `II. DÉMONSTRATION COMPLÈTE DES CROISSANCES COMPARÉES`,
      subsections: [
        {
          subtitle: `A. Démonstration du théorème fondamental lim [x→+∞] (ln x / x) = 0`,
          content: [
            `Démonstration magistrale : Pour tout réel t ≥ 1, montrons l'inégalité 1/t ≤ 1/√t :`,
            `En effet, pour t ≥ 1, √t ≤ t ⟹ 1/t ≤ 1/√t.`,
            `Intégrons cette inégalité entre 1 et x (avec x > 1) :`,
            `∫₁^x (1/t) dt ≤ ∫₁^x t^(-1/2) dt.`,
            `Or le premier membre vaut ln(x). Le second membre s'intègre directement :`,
            `[2 t^(1/2)]₁^x = 2√x - 2.`,
            `D'où pour tout x > 1 : 0 ≤ ln(x) ≤ 2√x - 2 < 2√x.`,
            `Divisons toute l'inégalité par x (comme x > 0) :`,
            `0 < (ln x) / x < (2√x) / x = 2 / √x.`,
            `Or lim [x→+∞] (2 / √x) = 0.`,
            `D'après le théorème des gendarmes, on conclut de façon irréfutable :`,
            `lim [x→+∞] (ln(x) / x) = 0.`
          ]
        },
        {
          subtitle: `B. Généralisation à toute puissance n ≥ 1 et limite en zéro`,
          content: [
            `1. Pour tout entier n ≥ 1 : lim [x→+∞] [ln(x) / x^n] = 0.`,
            `Preuve : Posons X = x^(1/n) ⟺ x = X^n. Quand x→+∞, X→+∞.`,
            `ln(x)/x^n = ln(X^n)/X^n = (n·ln X)/X^n = n/X^(n-1) × (ln X)/X ⟶ 0.`,
            `2. Limite en zéro (croissance comparée au voisinage de 0) : lim [x→0+] (x^n · ln x) = 0.`,
            `Preuve : Posons le changement de variable t = 1/x ⟺ x = 1/t. Quand x→0+, t→+∞.`,
            `x^n · ln(x) = (1/t^n) · ln(1/t) = - (ln t) / t^n ⟶ 0 d'après le résultat précédent.`
          ]
        }
      ]
    },
    {
      title: `III. LOGARITHME DE BASE A ET LOGARITHME DÉCIMAL`,
      subsections: [
        {
          subtitle: `A. Définition et changement de base`,
          content: [
            `Soit a un nombre réel strictement positif et différent de 1 (a > 0 et a ≠ 1).`,
            `On appelle fonction logarithme de base a la fonction notée log_a définie sur ]0 ; +∞[ par :`,
            `log_a(x) = ln(x) / ln(a).`,
            `Propriété fondamentale : log_a(a) = ln(a)/ln(a) = 1, et log_a(a^y) = y pour tout réel y.`,
            `Le logarithme décimal (base 10) : Noté log (sans indice) :`,
            `log(x) = ln(x) / ln(10).`,
            `Il vérifie log(10^n) = n pour tout entier n, et est utilisé en chimie pour la définition du pH : pH = -log[H₃O⁺].`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-4 : FONCTIONS EXPONENTIELLES ET FONCTIONS PUISSANCES
// =========================================================================
export const LESSON_4_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-4`,
  number: `Leçon S-4`,
  title: `Fonctions Exponentielles et Fonctions Puissances`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de démonstrations intégrales`,
  description: `Bijection réciproque de ln, caractérisation différentielle y' = y avec y(0) = 1, croissances comparées à l'infini, exponentielle de base a, fonctions puissances x^α et équations différentielles y' = ay.`,
  image: {
    caption: `Figure S-4 : Courbes exponentielles de bases différentes et comparaison avec les fonctions puissances.`,
    svgContent: SVG_MATH_TLE_S_CROISSANCES_COMPAREES
  },
  diagram: {
    title: `Fonctions Exponentielles`,
    svgContent: SVG_MATH_TLE_S_CROISSANCES_COMPAREES
  },
  introduction: `La fonction exponentielle naturelle x ↦ e^x est l'une des fonctions les plus fascinantes et les plus fondamentales de toute la physique et des mathématiques. Elle est l'unique fonction réelle non identiquement nulle qui est égale à sa propre dérivée : (e^x)' = e^x, propriété à l'origine de la modélisation de tous les phénomènes de désintégration radioactive (physique nucléaire), de charge/décharge de condensateur (électrocinétique) et de dynamique des populations. 
Ce chapitre de Terminale S approfondit la caractérisation différentielle de l'exponentielle, démontre rigoureusement le théorème d'existence et d'unicité de la solution de l'équation différentielle y' = ay, établit les limites de croissances comparées et généralise l'analyse aux fonctions puissances quelconques x^α.`,
  conclusion: `En conclusion, la fonction exponentielle domine toutes les puissances polynomiales à l'infini : e^x l'emporte toujours sur x^n en +∞, et x^n l'emporte toujours sur e^x en -∞. La maîtrise conjointe des dérivées composées [e^u]' = u'·e^u et [u^α]' = α·u'·u^(α-1) ainsi que de la résolution des équations différentielles linéaires y' = ay constitue un prérequis incontournable pour le Baccalauréat Scientifique.`,
  sections: [
    {
      title: `I. CARACTÉRISATION DIFFÉRENTIELLE ET PROPRIÉTÉS ANALYTIQUES`,
      subsections: [
        {
          subtitle: `A. Théorème d'existence et unicité de l'exponentielle`,
          content: [
            `Théorème fondamental : Il existe une unique fonction f dérivable sur R telle que :`,
            `f' = f et f(0) = 1.`,
            `Démonstration pas-à-pas de l'unicité :`,
            `Supposons qu'il existe une fonction f vérifiant f' = f et f(0) = 1.`,
            `Étape 1 : Montrons que f ne s'annule jamais sur R. Considérons la fonction auxiliaire φ(x) = f(x) × f(-x).`,
            `Dérivons φ par rapport à x : φ'(x) = f'(x)·f(-x) + f(x)·(-f'(-x)).`,
            `Comme f' = f, on a : φ'(x) = f(x)·f(-x) - f(x)·f(-x) = 0.`,
            `La dérivée de φ est identiquement nulle sur R, donc φ est constante. Pour x = 0, φ(0) = f(0)·f(0) = 1 × 1 = 1.`,
            `Donc pour tout réel x : f(x)·f(-x) = 1. Ce produit valant 1, f(x) ne peut jamais être égal à 0 !`,
            `Étape 2 : Unicité. Supposons une seconde fonction g vérifiant g' = g et g(0) = 1.`,
            `Considérons le quotient ψ(x) = g(x) / f(x) (parfaitement défini puisque f ne s'annule jamais).`,
            `Dérivons ψ : ψ'(x) = [g'(x)·f(x) - g(x)·f'(x)] / [f(x)]² = [g(x)·f(x) - g(x)·f(x)] / [f(x)]² = 0.`,
            `La fonction ψ est donc constante. Pour x = 0 : ψ(0) = g(0)/f(0) = 1/1 = 1.`,
            `Par conséquent, pour tout x ∈ R, g(x)/f(x) = 1 ⟺ g(x) = f(x). La solution est unique.`
          ]
        }
      ]
    },
    {
      title: `II. CROISSANCES COMPARÉES DE L'EXPONENTIELLE`,
      subsections: [
        {
          subtitle: `A. Démonstration de lim [x→+∞] (e^x / x) = +∞`,
          content: [
            `Démonstration rigoureuse : Étudions la fonction g(x) = e^x - x²/2 pour x ≥ 0.`,
            `• g'(x) = e^x - x.`,
            `• g''(x) = e^x - 1.`,
            `Pour tout x ≥ 0, e^x ≥ e⁰ = 1, donc g''(x) ≥ 0. La fonction g' est donc croissante sur [0 ; +∞[.`,
            `Or g'(0) = e⁰ - 0 = 1 > 0. Comme g' est croissante, pour tout x ≥ 0, g'(x) ≥ g'(0) = 1 > 0.`,
            `La fonction g est donc elle-même strictement croissante sur [0 ; +∞[.`,
            `Comme g(0) = e⁰ - 0 = 1 > 0, pour tout x ≥ 0 : g(x) ≥ 1 > 0 ⟹ e^x > x² / 2.`,
            `Divisons cette inégalité par x (avec x > 0) :`,
            `e^x / x > x / 2.`,
            `Or lim [x→+∞] (x / 2) = +∞. D'après le théorème de comparaison, on déduit :`,
            `lim [x→+∞] (e^x / x) = +∞.`
          ]
        },
        {
          subtitle: `B. Généralisation aux puissances et limites en -∞`,
          content: [
            `• Pour tout entier n ≥ 1 : lim [x→+∞] (e^x / x^n) = +∞.`,
            `• Limite en -∞ : lim [x→-∞] (x^n · e^x) = 0.`,
            `Preuve : Posons X = -x ⟺ x = -X. Quand x→-∞, X→+∞.`,
            `x^n · e^x = (-X)^n · e^(-X) = (-1)^n · [X^n / e^X] = (-1)^n / [e^X / X^n] ⟶ 0.`
          ]
        }
      ]
    },
    {
      title: `III. FONCTIONS PUISSANCES x^α (α ∈ R)`,
      subsections: [
        {
          subtitle: `A. Définition pour x > 0`,
          content: [
            `Pour tout réel α quelconque et pour tout réel x > 0, on définit :`,
            `x^α = e^(α · ln x).`,
            `Dérivée de la fonction puissance : f(x) = x^α.`,
            `En appliquant la dérivée de l'exponentielle d'une fonction composée :`,
            `f'(x) = (α · ln x)' · e^(α · ln x) = (α / x) · x^α = α · x^(α - 1).`,
            `On retrouve ainsi la formule classique de dérivation valable pour tout exposant réel α (entier, rationnel, irrationnel).`
          ]
        }
      ]
    }
  ]
};
