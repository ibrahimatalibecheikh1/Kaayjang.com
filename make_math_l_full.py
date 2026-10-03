# -*- coding: utf-8 -*-

script_math_l = """import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE TERMINALE L (SÉRIES L1, L2, L')
// Référentiel officiel national APAMS de la République du Sénégal
// 7 chapitres intégraux sans résumé, démonstrations complètes et schémas vectoriels
// =========================================================================

export const LESSON_1_MATH_TLE_L: LessonContent = {
  id: 'math-tle-l-chap-1',
  number: 'CHAPITRE L-1',
  title: 'FONCTIONS POLYNÔMES DU SECOND ET TROISIÈME DEGRÉ, LIMITES ET DÉRIVATION',
  subject: 'Mathématiques',
  classLevel: 'Terminale',
  module: 'Pôle 1 • Analyse et Fonctions Numériques (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Étude analytique rigoureuse : révision approfondie du discriminant Delta, factorisation et tableau de signes du trinôme, calcul de limites (formes indéterminées 0/0 et infini/infini, factorisation par le terme de plus haut degré), nombre dérivé et équation de la tangente y = f'(x0)(x - x0) + f(x0), tableau des dérivées usuelles, lien fondamental entre signe de la dérivée et sens de variation, extremums locaux et tracé normé des courbes représentatives avec recherche des asymptotes.",
  image: {
    caption: 'Figure L1.1 : Parabole d’un trinôme, tangente en un point et extremum local',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="mathL1Grad" x1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#mathL1Grad)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ANALYSE DU SECOND DEGRÉ ET COURBE REPRÉSENTATIVE : PARABOLE, TANGENTE ET EXTREMUM</text>
      
      <!-- Grille repère orthonormé -->
      <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="200" y1="40" x2="200" y2="240" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="420,210 410,205 410,215" fill="#9ca3af"/>
      <polygon points="200,40 195,50 205,50" fill="#9ca3af"/>
      <text x="415" y="225" font-size="12" font-weight="bold" fill="#374151">x</text>
      <text x="185" y="48" font-size="12" font-weight="bold" fill="#374151">y</text>
      <text x="188" y="224" font-size="11" fill="#4b5563">O</text>
      
      <!-- Parabole y = -0.5*(x-2)^2 + 3.5 (inversée avec sommet en (260, 80)) -->
      <!-- O est à x=200, y=210. Unité = 30px -->
      <!-- Sommet S(2, 3.5) => x = 200 + 60 = 260, y = 210 - 105 = 105 -->
      <path d="M 120 210 Q 260 0 400 210" fill="none" stroke="#2563eb" stroke-width="3"/>
      <circle cx="260" cy="105" r="4.5" fill="#dc2626"/>
      <text x="260" y="90" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Sommet S(xS ; yS) [Extremum f'(x)=0]</text>
      
      <!-- Tangente horizontale au sommet -->
      <line x1="180" y1="105" x2="340" y2="105" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="350" y="109" font-size="10" font-weight="bold" fill="#dc2626">Tangente : y = f(xS)</text>
      
      <!-- Tangente oblique en x=140 -->
      <line x1="90" y1="230" x2="230" y2="90" stroke="#059669" stroke-width="2"/>
      <circle cx="160" cy="160" r="4" fill="#059669"/>
      <text x="90" y="150" font-size="10" font-weight="bold" fill="#047857">Tangente en x0 : pente f'(x0)</text>
      
      <!-- Panneau formules essentielles à droite -->
      <rect x="450" y="50" width="310" height="190" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="605" y="72" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">FORMULAIRE FONDAMENTAL TERMINALE L</text>
      <line x1="450" y1="82" x2="760" y2="82" stroke="#e5e7eb" stroke-width="1"/>
      <text x="465" y="102" font-size="10" font-weight="bold" fill="#374151">• Trinôme : ax² + bx + c = 0 (a ≠ 0)</text>
      <text x="475" y="118" font-size="9" fill="#1d4ed8">Δ = b² - 4ac ; si Δ &gt; 0, x1,2 = (-b ± √Δ)/(2a)</text>
      <text x="465" y="138" font-size="10" font-weight="bold" fill="#374151">• Dérivation usuelle :</text>
      <text x="475" y="153" font-size="9" fill="#047857">(xⁿ)' = n·xⁿ⁻¹ ; (u + v)' = u' + v' ; (k·u)' = k·u'</text>
      <text x="475" y="167" font-size="9" fill="#047857">(u·v)' = u'v + uv' ; (1/v)' = -v'/v² ; (u/v)' = (u'v - uv')/v²</text>
      <text x="465" y="188" font-size="10" font-weight="bold" fill="#374151">• Équation de la Tangente au point x0 :</text>
      <text x="475" y="204" font-size="10" font-weight="bold" fill="#b91c1c">y = f'(x0)·(x - x0) + f(x0)</text>
      <text x="465" y="225" font-size="9" fill="#4b5563">• Si f'(x) &gt; 0 sur I, f est strictement croissante</text>
    </svg>`
  },
  introduction: "L'analyse mathématique en classe de Terminale L constitue l'outil fondamental de modélisation des phénomènes d'évolution, qu'ils soient économiques (coût de production, chiffre d'affaires, bénéfice maximal), sociologiques ou démographiques. La maîtrise des fonctions polynômes du second et du troisième degré repose sur une double compétence : d'une part la maîtrise algébrique rigoureuse (résolution d'équations, factorisation, étude de signes du discriminant Delta), et d'autre part l'outil infinitésimal du calcul différentiel (détermination des limites, calcul des fonctions dérivées, détermination des extremums et tracé géométrique des courbes avec leurs tangentes).",
  sections: [
    {
      title: "I. Le trinôme du second degré : forme canonique, racines et factorisation",
      content: [
        "1. Définition et forme canonique :",
        "   - Soit le trinôme P(x) = ax² + bx + c avec a, b, c réels et a ≠ 0.",
        "   - Démonstration de la mise sous forme canonique :",
        "     P(x) = a [x² + (b/a)x + c/a] = a [(x + b/(2a))² - b²/(4a²) + c/a] = a [(x + b/(2a))² - (b² - 4ac)/(4a²)].",
        "   - On pose le discriminant Δ = b² - 4ac. La forme canonique s'écrit : P(x) = a [(x + b/(2a))² - Δ/(4a²)].",
        "2. Discussion et résolution de l'équation ax² + bx + c = 0 selon le signe de Δ :",
        "   - Cas 1 (Δ > 0) : L'équation admet deux racines réelles distinctes x1 = (-b - √Δ)/(2a) et x2 = (-b + √Δ)/(2a). Le trinôme se factorise sous la forme P(x) = a(x - x1)(x - x2).",
        "   - Cas 2 (Δ = 0) : L'équation admet une racine double x0 = -b/(2a). Le trinôme se factorise sous la forme P(x) = a(x - x0)².",
        "   - Cas 3 (Δ < 0) : L'équation n'admet aucune racine réelle dans ℝ. Le trinôme ne se factorise pas dans ℝ.",
        "3. Règle du signe du trinôme :",
        "   - Si Δ > 0 : P(x) est du signe de 'a' à l'extérieur des racines (pour x ∈ ]-∞, x1[ ∪ ]x2, +∞[) et du signe contraire de 'a' à l'intérieur des racines (pour x ∈ ]x1, x2[).",
        "   - Si Δ = 0 : P(x) est toujours du signe de 'a' pour tout x ≠ x0, et s'annule en x0.",
        "   - Si Δ < 0 : P(x) est strictement du signe de 'a' pour tout x ∈ ℝ."
      ]
    },
    {
      title: "II. Limites de fonctions et levée des formes indéterminées",
      content: [
        "1. Limites aux bornes infinies (+∞ et -∞) des fonctions polynômes :",
        "   - Règle fondamentale : La limite en +∞ (ou en -∞) d'une fonction polynôme est égale à la limite de son monôme de plus haut degré.",
        "   - Démonstration pour f(x) = ax³ + bx² + cx + d : en factorisant par x³ pour x ≠ 0, f(x) = x³ [a + b/x + c/x² + d/x³]. Or lim (b/x) = lim (c/x²) = lim (d/x³) = 0, donc lim f(x) = lim (ax³).",
        "2. Les quatre formes indéterminées classiques :",
        "   - '∞ - ∞', '0 × ∞', '0 / 0' et '∞ / ∞'.",
        "3. Techniques de levée d'indétermination en Terminale L :",
        "   - Pour '∞ / ∞' d'une fraction rationnelle P(x)/Q(x) en ±∞ : factorisation par le monôme de plus haut degré au numérateur et au dénominateur puis simplification.",
        "   - Pour '0 / 0' en un réel x0 : factorisation par (x - x0) au numérateur et au dénominateur (par division euclidienne ou méthode d'Horner), puis simplification avant de réévaluer la limite."
      ]
    },
    {
      title: "III. Dérivation : nombre dérivé, tangentes et règles de calcul",
      content: [
        "1. Définition du nombre dérivé :",
        "   - Une fonction f est dérivable en un point x0 si le taux d'accroissement admet une limite finie quand h tend vers 0 :",
        "     f'(x0) = lim_{h → 0} [f(x0 + h) - f(x0)] / h.",
        "   - Interprétation géométrique : f'(x0) représente le coefficient directeur (la pente) de la droite tangente à la courbe de f au point A(x0 ; f(x0)).",
        "2. Équation de la tangente à la courbe :",
        "   - Formule fondamentale : y = f'(x0) · (x - x0) + f(x0).",
        "3. Tableau des dérivées usuelles :",
        "   - f(x) = k (constante) ⇒ f'(x) = 0.",
        "   - f(x) = x ⇒ f'(x) = 1 ; f(x) = x² ⇒ f'(x) = 2x ; f(x) = x³ ⇒ f'(x) = 3x² ; f(x) = xⁿ ⇒ f'(x) = n · xⁿ⁻¹.",
        "   - f(x) = 1/x ⇒ f'(x) = -1/x².",
        "4. Règles opératoires de dérivation :",
        "   - Somme : (u + v)' = u' + v'.",
        "   - Produit par un scalaire : (k · u)' = k · u'.",
        "   - Produit de deux fonctions : (u · v)' = u'v + uv'.",
        "   - Inverse : (1/v)' = -v' / v² (pour v(x) ≠ 0).",
        "   - Quotient : (u / v)' = (u'v - uv') / v²."
      ]
    },
    {
      title: "IV. Étude complète d'une fonction et tracé de la courbe représentative",
      content: [
        "1. Théorème fondamental reliant dérivée et sens de variation :",
        "   - Si f'(x) > 0 sur un intervalle I, alors f est strictement croissante sur I.",
        "   - Si f'(x) < 0 sur un intervalle I, alors f est strictement décroissante sur I.",
        "   - Si f'(x) = 0 sur I, alors f est constante sur I.",
        "2. Extremums locaux :",
        "   - Si la dérivée f' s'annule en x0 en changeant de signe, alors la fonction f admet un extremum local en x0 (un maximum si f' passe du positif au négatif, un minimum si f' passe du négatif au positif). La tangente en ce point est horizontale (f'(x0) = 0).",
        "3. Protocole pas à pas pour l'épreuve du Bac :",
        "   - Étape 1 : Déterminer l'ensemble de définition Df.",
        "   - Étape 2 : Calculer les limites aux bornes de Df et repérer les asymptotes (asymptote verticale x = a si lim_{x→a} f(x) = ±∞ ; asymptote horizontale y = b si lim_{x→±∞} f(x) = b).",
        "   - Étape 3 : Calculer la dérivée f'(x) et étudier son signe (factorisation ou résolution).",
        "   - Étape 4 : Dresser le tableau de variation complet (lignes de x, du signe de f'(x), et des variations de f(x) avec les limites et extremums).",
        "   - Étape 5 : Calculer les coordonnées des points remarquables (intersections avec les axes, tangentes particulières) et tracer la courbe dans un repère orthonormé propre."
      ]
    }
  ]
};

export const LESSON_2_MATH_TLE_L: LessonContent = {
  id: 'math-tle-l-chap-2',
  number: 'CHAPITRE L-2',
  title: 'LA FONCTION LOGARITHME NÉPÉRIEN (ln)',
  subject: 'Mathématiques',
  classLevel: 'Terminale',
  module: 'Pôle 1 • Analyse et Fonctions Numériques (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Étude complète et rigoureuse de la fonction logarithme népérien : définition comme unique primitive de 1/x sur ]0, +∞[ s'annulant en 1, propriétés fondamentales ln(ab) = ln(a) + ln(b), ln(a/b) = ln(a) - ln(b), ln(aⁿ) = n·ln(a), limites usuelles et croissances comparées, dérivée de ln(u), étude de la courbe représentative et résolution d'équations et inéquations logarithmiques appliquées à l'économie et à la démographie.",
  image: {
    caption: 'Figure L2.1 : Courbe de la fonction ln(x), asymptote verticale x=0 et tangente au point (1, 0)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="lnGrad" x1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#lnGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">COURBE DE LA FONCTION LOGARITHME NÉPÉRIEN : y = ln(x)</text>
      
      <!-- Repère -->
      <line x1="80" y1="180" x2="440" y2="180" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="140" y1="35" x2="140" y2="245" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="440,180 430,175 430,185" fill="#9ca3af"/>
      <polygon points="140,35 135,45 145,45" fill="#9ca3af"/>
      <text x="435" y="196" font-size="12" font-weight="bold" fill="#374151">x</text>
      <text x="125" y="45" font-size="12" font-weight="bold" fill="#374151">y</text>
      <text x="128" y="194" font-size="11" fill="#4b5563">O</text>
      
      <!-- Asymptote verticale x = 0 (axe des y) en pointillés rouges -->
      <line x1="140" y1="40" x2="140" y2="240" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="75" y="235" font-size="10" font-weight="bold" fill="#dc2626">Asymptote x = 0</text>
      
      <!-- Points clés : (1, 0) => x = 140 + 50 = 190, y = 180 -->
      <!-- (e, 1) avec e ≈ 2.718 => x = 140 + 136 = 276, y = 180 - 50 = 130 -->
      <circle cx="190" cy="180" r="4.5" fill="#047857"/>
      <text x="190" y="200" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">(1 ; 0)</text>
      <circle cx="276" cy="130" r="4.5" fill="#047857"/>
      <text x="285" y="125" font-size="11" font-weight="bold" fill="#047857">(e ; 1)</text>
      
      <!-- Courbe y = ln(x) -->
      <!-- Plonge vers -infini en x -> 0+, monte doucement -->
      <path d="M 144 245 C 150 200, 165 185, 190 180 C 220 170, 250 145, 276 130 C 330 100, 390 85, 430 75" fill="none" stroke="#047857" stroke-width="3"/>
      
      <!-- Tangente en (1, 0) : y = x - 1 (pente = 1) -->
      <line x1="130" y1="240" x2="250" y2="120" stroke="#f59e0b" stroke-width="2"/>
      <text x="215" y="110" font-size="10" font-weight="bold" fill="#b45309">Tangente : y = x - 1</text>
      
      <!-- Encadré propriétés à droite -->
      <rect x="470" y="50" width="290" height="190" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="615" y="72" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">PROPRIÉTÉS FONDAMENTALES</text>
      <line x1="470" y1="82" x2="760" y2="82" stroke="#e5e7eb" stroke-width="1"/>
      <text x="485" y="102" font-size="10" font-weight="bold" fill="#374151">• Domaine : ]0 ; +∞[ ; ln(1) = 0 ; ln(e) = 1</text>
      <text x="485" y="122" font-size="10" font-weight="bold" fill="#047857">• Propriété algébrique fondamentale :</text>
      <text x="495" y="138" font-size="10" fill="#047857">ln(a × b) = ln(a) + ln(b)</text>
      <text x="495" y="153" font-size="10" fill="#047857">ln(a / b) = ln(a) - ln(b) ; ln(1/b) = -ln(b)</text>
      <text x="495" y="168" font-size="10" fill="#047857">ln(aⁿ) = n · ln(a) ; ln(√a) = (1/2) · ln(a)</text>
      <text x="485" y="188" font-size="10" font-weight="bold" fill="#374151">• Dérivée : (ln x)' = 1/x &gt; 0 sur ]0 ; +∞[</text>
      <text x="485" y="205" font-size="10" font-weight="bold" fill="#b91c1c">• Limites remarquables :</text>
      <text x="495" y="222" font-size="9" fill="#dc2626">lim_{x→0⁺} ln(x) = -∞ ; lim_{x→+∞} ln(x) = +∞</text>
    </svg>`
  },
  introduction: "La fonction logarithme népérien, notée ln, est l'une des fonctions transcendantes les plus puissantes des mathématiques. Découverte historiquement par John Napier (Neper) pour transformer les calculs de multiplications fastidieuses en simples additions, elle constitue en classe de Terminale L la première fonction non algébrique étudiée. Elle possède la propriété remarquable de transformer un produit en somme : ln(ab) = ln a + ln b. Son étude rigoureuse est indispensable pour résoudre les équations exponentielles issues des calculs financiers d'intérêts composés et des modèles de croissance démographique au Sénégal.",
  sections: [
    {
      title: "I. Définition, ensemble de définition et valeurs particulières",
      content: [
        "1. Définition mathématique :",
        "   - La fonction logarithme népérien, notée ln, est l'unique primitive sur ]0, +∞[ de la fonction x ↦ 1/x qui s'annule en 1.",
        "   - Ainsi, pour tout réel x > 0 : (ln x)' = 1/x et ln(1) = 0.",
        "2. Ensemble de définition :",
        "   - La fonction ln(x) est définie si et seulement si son argument est strictement positif : D_ln = ]0, +∞[ = ℝ₊*.",
        "   - Pour une fonction composée f(x) = ln(u(x)), l'ensemble de définition est l'ensemble des réels x tels que u(x) > 0.",
        "3. Le nombre e (base du logarithme népérien) :",
        "   - Il existe un unique nombre réel noté 'e' tel que ln(e) = 1. Ce nombre irrationnel vaut approximativement e ≈ 2,71828."
      ]
    },
    {
      title: "II. Propriétés algébriques fondamentales",
      content: [
        "1. La relation fonctionnelle fondamentale :",
        "   - Pour tous réels a > 0 et b > 0 : ln(a × b) = ln(a) + ln(b).",
        "2. Conséquences algébriques directes :",
        "   - Logarithme de l'inverse : ln(1/b) = -ln(b).",
        "     Démonstration : ln(b × 1/b) = ln(1) = 0 ⇒ ln(b) + ln(1/b) = 0 ⇒ ln(1/b) = -ln(b).",
        "   - Logarithme du quotient : ln(a/b) = ln(a × 1/b) = ln(a) + ln(1/b) = ln(a) - ln(b).",
        "   - Logarithme d'une puissance : pour tout entier relatif n : ln(aⁿ) = n · ln(a).",
        "   - Logarithme d'une racine carrée : ln(√a) = ln(a^(1/2)) = (1/2) · ln(a)."
      ]
    },
    {
      title: "III. Étude analytique : limites, variations et dérivée de ln(u)",
      content: [
        "1. Limites fondamentales aux bornes :",
        "   - En 0 par valeurs supérieures : lim_{x → 0⁺} ln(x) = -∞ (l'axe des ordonnées x = 0 est asymptote verticale à la courbe).",
        "   - En +∞ : lim_{x → +∞} ln(x) = +∞.",
        "2. Dérivée et sens de variation :",
        "   - Pour tout x ∈ ]0, +∞[, (ln x)' = 1/x.",
        "   - Comme x > 0, 1/x > 0 strictement : la fonction ln est strictement croissante et continue sur ]0, +∞[.",
        "   - Conséquence d'injectivité : pour tous a, b > 0 : ln(a) = ln(b) ⇔ a = b, et ln(a) < ln(b) ⇔ a < b.",
        "   - Signe de ln(x) : ln(x) < 0 pour x ∈ ]0, 1[ ; ln(1) = 0 ; ln(x) > 0 pour x ∈ ]1, +∞[.",
        "3. Dérivation de la fonction composée ln(u) :",
        "   - Si u est une fonction dérivable et strictement positive sur un intervalle I, alors la fonction f(x) = ln(u(x)) est dérivable sur I et sa dérivée est :",
        "     [ln(u)]' = u' / u.",
        "   - Exemple d'application : si f(x) = ln(2x² + 3), alors u(x) = 2x² + 3 > 0, u'(x) = 4x, d'où f'(x) = 4x / (2x² + 3)."
      ]
    },
    {
      title: "IV. Résolution d'équations, inéquations et applications concrètes",
      content: [
        "1. Méthode de résolution des équations logarithmiques :",
        "   - Étape 1 : Poser impérativement les conditions d'existence (domaine de validité de l'équation).",
        "   - Étape 2 : Utiliser les propriétés de regroupement pour aboutir à une forme ln(A) = ln(B) ⇔ A = B, ou poser un changement de variable X = ln(x) pour se ramener à une équation du second degré aX² + bX + c = 0.",
        "   - Étape 3 : Vérifier que les solutions obtenues appartiennent bien au domaine de validité.",
        "2. Application financière et démographique :",
        "   - Problème du temps de doublement d'un capital : un capital placé à intérêts composés au taux annuel de 5 % est multiplié chaque année par 1,05. Au bout de combien d'années n le capital aura-t-il doublé ?",
        "   - Résolution : (1,05)ⁿ ≥ 2 ⇔ ln((1,05)ⁿ) ≥ ln(2) ⇔ n · ln(1,05) ≥ ln(2) ⇔ n ≥ ln(2) / ln(1,05) ≈ 0,6931 / 0,04879 ≈ 14,2 ans. Le capital double au bout de 15 ans."
      ]
    }
  ]
};
"""

with open('generate_math_l.py', 'w', encoding='utf-8') as f:
    f.write(script_math_l)

print("Script generate_math_l.py écrit avec succès")
