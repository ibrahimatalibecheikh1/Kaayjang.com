# -*- coding: utf-8 -*-

code_math_l = '''import { LessonContent } from './courses';

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
  description: "Étude analytique rigoureuse : discriminant Delta, factorisation et tableau de signes du trinôme, calcul de limites (formes indéterminées 0/0 et infini/infini), nombre dérivé et équation de la tangente y = f'(x0)(x - x0) + f(x0), tableau des dérivées usuelles, lien fondamental entre signe de la dérivée et sens de variation, extremums locaux et tracé normé des courbes représentatives.",
  image: {
    caption: 'Figure L1.1 : Parabole d’un trinôme, tangente en un point et extremum local',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="mathL1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#mathL1Grad)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ANALYSE DU SECOND DEGRÉ ET COURBE REPRÉSENTATIVE : PARABOLE, TANGENTE ET EXTREMUM</text>
      
      <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="200" y1="40" x2="200" y2="240" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="420,210 410,205 410,215" fill="#9ca3af"/>
      <polygon points="200,40 195,50 205,50" fill="#9ca3af"/>
      <text x="415" y="225" font-size="12" font-weight="bold" fill="#374151">x</text>
      <text x="185" y="48" font-size="12" font-weight="bold" fill="#374151">y</text>
      <text x="188" y="224" font-size="11" fill="#4b5563">O</text>
      
      <path d="M 120 210 Q 260 0 400 210" fill="none" stroke="#2563eb" stroke-width="3"/>
      <circle cx="260" cy="105" r="4.5" fill="#dc2626"/>
      <text x="260" y="90" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Sommet S(xS ; yS) [f'(x)=0]</text>
      
      <line x1="180" y1="105" x2="340" y2="105" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="350" y="109" font-size="10" font-weight="bold" fill="#dc2626">Tangente : y = f(xS)</text>
      
      <line x1="90" y1="230" x2="230" y2="90" stroke="#059669" stroke-width="2"/>
      <circle cx="160" cy="160" r="4" fill="#059669"/>
      <text x="90" y="150" font-size="10" font-weight="bold" fill="#047857">Tangente en x0 : pente f'(x0)</text>
      
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
  introduction: "L'analyse mathématique en classe de Terminale L constitue l'outil fondamental de modélisation des phénomènes d'évolution, qu'ils soient économiques (coût de production, chiffre d'affaires, bénéfice maximal), sociologiques ou démographiques. La maîtrise des fonctions polynômes du second et du troisième degré repose sur une double compétence : la maîtrise algébrique rigoureuse (résolution d'équations, factorisation, étude de signes du discriminant Delta) et le calcul différentiel (détermination des limites, calcul des fonctions dérivées, détermination des extremums et tracé géométrique des courbes avec leurs tangentes).",
  sections: [
    {
      title: "I. Le trinôme du second degré : forme canonique, racines et factorisation",
      content: [
        "1. Définition et forme canonique :",
        "   - Soit le trinôme P(x) = ax² + bx + c avec a, b, c réels et a ≠ 0.",
        "   - Démonstration de la mise sous forme canonique :",
        "     P(x) = a [x² + (b/a)x + c/a] = a [(x + b/(2a))² - b²/(4a²) + c/a] = a [(x + b/(2a))² - (b² - 4ac)/(4a²)].",
        "   - En posant le discriminant Δ = b² - 4ac, la forme canonique s'écrit : P(x) = a [(x + b/(2a))² - Δ/(4a²)].",
        "2. Discussion et résolution de l'équation ax² + bx + c = 0 selon le signe de Δ :",
        "   - Cas 1 (Δ > 0) : Deux racines réelles distinctes x1 = (-b - √Δ)/(2a) et x2 = (-b + √Δ)/(2a). Le trinôme se factorise sous la forme P(x) = a(x - x1)(x - x2).",
        "   - Cas 2 (Δ = 0) : Une racine double x0 = -b/(2a). Le trinôme se factorise sous la forme P(x) = a(x - x0)².",
        "   - Cas 3 (Δ < 0) : Aucune racine réelle dans ℝ. Le trinôme ne se factorise pas dans ℝ.",
        "3. Règle du signe du trinôme :",
        "   - Si Δ > 0 : P(x) est du signe de 'a' à l'extérieur des racines et du signe contraire de 'a' entre les racines.",
        "   - Si Δ = 0 : P(x) est toujours du signe de 'a' pour tout x ≠ x0.",
        "   - Si Δ < 0 : P(x) est strictement du signe de 'a' pour tout x ∈ ℝ."
      ]
    },
    {
      title: "II. Limites de fonctions et levée des formes indéterminées",
      content: [
        "1. Limites aux bornes infinies (+∞ et -∞) des fonctions polynômes :",
        "   - Règle fondamentale : La limite en +∞ (ou en -∞) d'une fonction polynôme est égale à la limite de son monôme de plus haut degré.",
        "2. Les quatre formes indéterminées classiques :",
        "   - '∞ - ∞', '0 × ∞', '0 / 0' et '∞ / ∞'.",
        "3. Techniques de levée d'indétermination en Terminale L :",
        "   - Pour '∞ / ∞' d'une fraction rationnelle P(x)/Q(x) en ±∞ : factorisation par le monôme de plus haut degré au numérateur et au dénominateur puis simplification.",
        "   - Pour '0 / 0' en un réel x0 : factorisation par (x - x0) au numérateur et au dénominateur, puis simplification avant d'évaluer la limite."
      ]
    },
    {
      title: "III. Dérivation : nombre dérivé, tangentes et règles de calcul",
      content: [
        "1. Définition du nombre dérivé :",
        "   - f'(x0) = lim_{h → 0} [f(x0 + h) - f(x0)] / h.",
        "   - Interprétation géométrique : f'(x0) représente le coefficient directeur (la pente) de la tangente à la courbe au point A(x0 ; f(x0)).",
        "2. Équation de la tangente à la courbe :",
        "   - Formule fondamentale : y = f'(x0) · (x - x0) + f(x0).",
        "3. Dérivées usuelles et règles opératoires :",
        "   - (xⁿ)' = n · xⁿ⁻¹ ; (u + v)' = u' + v' ; (k · u)' = k · u' ; (u · v)' = u'v + uv' ; (u / v)' = (u'v - uv') / v²."
      ]
    },
    {
      title: "IV. Étude de fonction et tracé de la courbe représentative",
      content: [
        "1. Théorème fondamental :",
        "   - f'(x) > 0 sur I ⇒ f est strictement croissante sur I.",
        "   - f'(x) < 0 sur I ⇒ f est strictement décroissante sur I.",
        "   - f'(x) = 0 sur I ⇒ f est constante sur I.",
        "2. Extremums locaux :",
        "   - Si la dérivée s'annule en x0 en changeant de signe, la fonction f admet un extremum local en x0 (tangente horizontale f'(x0) = 0).",
        "3. Tableau de variation complet et tracé dans un repère orthonormé."
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
  description: "Définition de ln comme unique primitive de 1/x sur ]0, +∞[ s'annulant en 1, propriétés fondamentales ln(ab) = ln(a) + ln(b), ln(a/b) = ln(a) - ln(b), ln(aⁿ) = n·ln(a), limites usuelles et croissances comparées, dérivée de ln(u), étude de la courbe représentative et résolution d'équations et inéquations logarithmiques.",
  image: {
    caption: 'Figure L2.1 : Courbe de la fonction ln(x), asymptote verticale x=0 et tangente au point (1, 0)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="lnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#lnGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">COURBE DE LA FONCTION LOGARITHME NÉPÉRIEN : y = ln(x)</text>
      
      <line x1="80" y1="180" x2="440" y2="180" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="140" y1="35" x2="140" y2="245" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="440,180 430,175 430,185" fill="#9ca3af"/>
      <polygon points="140,35 135,45 145,45" fill="#9ca3af"/>
      <text x="435" y="196" font-size="12" font-weight="bold" fill="#374151">x</text>
      <text x="125" y="45" font-size="12" font-weight="bold" fill="#374151">y</text>
      <text x="128" y="194" font-size="11" fill="#4b5563">O</text>
      
      <line x1="140" y1="40" x2="140" y2="240" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="75" y="235" font-size="10" font-weight="bold" fill="#dc2626">Asymptote x = 0</text>
      
      <circle cx="190" cy="180" r="4.5" fill="#047857"/>
      <text x="190" y="200" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">(1 ; 0)</text>
      <circle cx="276" cy="130" r="4.5" fill="#047857"/>
      <text x="285" y="125" font-size="11" font-weight="bold" fill="#047857">(e ; 1)</text>
      
      <path d="M 144 245 C 150 200, 165 185, 190 180 C 220 170, 250 145, 276 130 C 330 100, 390 85, 430 75" fill="none" stroke="#047857" stroke-width="3"/>
      
      <line x1="130" y1="240" x2="250" y2="120" stroke="#f59e0b" stroke-width="2"/>
      <text x="215" y="110" font-size="10" font-weight="bold" fill="#b45309">Tangente : y = x - 1</text>
      
      <rect x="470" y="50" width="290" height="190" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="615" y="72" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">PROPRIÉTÉS FONDAMENTALES</text>
      <line x1="470" y1="82" x2="760" y2="82" stroke="#e5e7eb" stroke-width="1"/>
      <text x="485" y="102" font-size="10" font-weight="bold" fill="#374151">• Domaine : ]0 ; +∞[ ; ln(1) = 0 ; ln(e) = 1</text>
      <text x="485" y="122" font-size="10" font-weight="bold" fill="#047857">• Propriétés algébriques :</text>
      <text x="495" y="138" font-size="10" fill="#047857">ln(a × b) = ln(a) + ln(b)</text>
      <text x="495" y="153" font-size="10" fill="#047857">ln(a / b) = ln(a) - ln(b) ; ln(1/b) = -ln(b)</text>
      <text x="495" y="168" font-size="10" fill="#047857">ln(aⁿ) = n · ln(a) ; ln(√a) = (1/2) · ln(a)</text>
      <text x="485" y="188" font-size="10" font-weight="bold" fill="#374151">• Dérivée : (ln x)' = 1/x &gt; 0 sur ]0 ; +∞[</text>
      <text x="485" y="205" font-size="10" font-weight="bold" fill="#b91c1c">• Limites : lim_{x→0⁺} ln(x) = -∞ ; lim_{x→+∞} ln(x) = +∞</text>
    </svg>`
  },
  introduction: "La fonction logarithme népérien, notée ln, est l'une des fonctions transcendantes les plus puissantes des mathématiques. Elle possède la propriété remarquable de transformer un produit en somme : ln(ab) = ln a + ln b. Son étude rigoureuse est indispensable pour résoudre les équations exponentielles issues des calculs financiers d'intérêts composés et des modèles de croissance au Sénégal.",
  sections: [
    {
      title: "I. Définition, ensemble de définition et valeurs particulières",
      content: [
        "1. Définition : unique primitive sur ]0, +∞[ de x ↦ 1/x qui s'annule en 1.",
        "2. Domaine de validité : x > 0 strictement. D_ln = ]0, +∞[.",
        "3. Le nombre e : unique réel tel que ln(e) = 1, e ≈ 2,71828."
      ]
    },
    {
      title: "II. Propriétés algébriques fondamentales",
      content: [
        "1. ln(a × b) = ln(a) + ln(b) pour tous a, b > 0.",
        "2. ln(1/b) = -ln(b) et ln(a/b) = ln(a) - ln(b).",
        "3. ln(aⁿ) = n · ln(a) pour tout entier n, et ln(√a) = (1/2) · ln(a)."
      ]
    },
    {
      title: "III. Étude analytique : limites, variations et dérivée de ln(u)",
      content: [
        "1. Limites : lim_{x → 0⁺} ln(x) = -∞ (asymptote verticale x = 0) et lim_{x → +∞} ln(x) = +∞.",
        "2. Dérivée : (ln x)' = 1/x > 0 sur ]0, +∞[. La fonction ln est strictement croissante et continue sur ℝ₊*.",
        "3. Dérivée de la fonction composée : si u(x) > 0, [ln(u)]' = u' / u."
      ]
    },
    {
      title: "IV. Résolution d'équations, inéquations et modélisations",
      content: [
        "1. Équations ln(A) = ln(B) ⇔ A = B avec A > 0 et B > 0.",
        "2. Résolution par changement de variable X = ln(x) conduisant au second degré.",
        "3. Applications financières : calcul du temps de doublement d'un capital à intérêts composés."
      ]
    }
  ]
};

export const LESSON_3_MATH_TLE_L: LessonContent = {
  id: 'math-tle-l-chap-3',
  number: 'CHAPITRE L-3',
  title: 'LA FONCTION EXPONENTIELLE (exp ou e^x)',
  subject: 'Mathématiques',
  classLevel: 'Terminale',
  module: 'Pôle 1 • Analyse et Fonctions Numériques (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Étude complète de la fonction exponentielle : définition comme bijection réciproque de ln(x), propriétés e^(a+b) = e^a · e^b, e^(a-b) = e^a / e^b, (e^a)ⁿ = e^(n·a), limites fondamentales et croissances comparées, dérivée de e^u, résolution d'équations et inéquations exponentielles et applications aux modèles d'évolution démographique et économique.",
  image: {
    caption: 'Figure L3.1 : Courbe de la fonction exponentielle y = e^x, asymptote horizontale y=0',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="expGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#ea580c" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#expGrad)" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">COURBE DE LA FONCTION EXPONENTIELLE : y = e^x</text>
      
      <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="200" y1="35" x2="200" y2="245" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="420,210 410,205 410,215" fill="#9ca3af"/>
      <polygon points="200,35 195,45 205,45" fill="#9ca3af"/>
      <text x="415" y="225" font-size="12" font-weight="bold" fill="#374151">x</text>
      <text x="185" y="45" font-size="12" font-weight="bold" fill="#374151">y</text>
      <text x="188" y="224" font-size="11" fill="#4b5563">O</text>
      
      <line x1="60" y1="210" x2="200" y2="210" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="70" y="195" font-size="10" font-weight="bold" fill="#dc2626">Asymptote y = 0 en -∞</text>
      
      <circle cx="200" cy="170" r="4.5" fill="#dc2626"/>
      <text x="175" y="165" font-size="11" font-weight="bold" fill="#dc2626">(0 ; 1)</text>
      <circle cx="240" cy="100" r="4.5" fill="#dc2626"/>
      <text x="250" y="95" font-size="11" font-weight="bold" fill="#dc2626">(1 ; e)</text>
      
      <!-- Courbe exponentielle montant très vite -->
      <path d="M 70 209 C 140 208, 175 195, 200 170 C 220 145, 240 100, 270 45" fill="none" stroke="#dc2626" stroke-width="3"/>
      
      <!-- Tangente en (0, 1) : y = x + 1 -->
      <line x1="140" y1="230" x2="260" y2="110" stroke="#2563eb" stroke-width="2"/>
      <text x="240" y="125" font-size="10" font-weight="bold" fill="#1d4ed8">Tangente : y = x + 1</text>
      
      <rect x="460" y="50" width="300" height="190" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="610" y="72" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">PROPRIÉTÉS FONDAMENTALES EXPONENTIELLE</text>
      <line x1="460" y1="82" x2="760" y2="82" stroke="#e5e7eb" stroke-width="1"/>
      <text x="475" y="102" font-size="10" font-weight="bold" fill="#374151">• Définition : e^x &gt; 0 strictement pour tout x ∈ ℝ</text>
      <text x="475" y="122" font-size="10" font-weight="bold" fill="#dc2626">• Relations algébriques fondamentales :</text>
      <text x="485" y="138" font-size="10" fill="#dc2626">e^(a + b) = e^a × e^b ; e^(-b) = 1 / e^b</text>
      <text x="485" y="153" font-size="10" fill="#dc2626">e^(a - b) = e^a / e^b ; (e^a)ⁿ = e^(n·a)</text>
      <text x="475" y="174" font-size="10" font-weight="bold" fill="#374151">• Dérivée : (e^x)' = e^x ; (e^u)' = u' · e^u</text>
      <text x="475" y="195" font-size="10" font-weight="bold" fill="#1e3a8a">• Limites fondamentales :</text>
      <text x="485" y="212" font-size="9" fill="#1d4ed8">lim_{x→-∞} e^x = 0 ; lim_{x→+∞} e^x = +∞</text>
      <text x="485" y="228" font-size="9" fill="#047857">Réciprocité : ln(e^x) = x (∀x ∈ ℝ) ; e^(ln x) = x (∀x &gt; 0)</text>
    </svg>`
  },
  introduction: "Réciproque naturelle de la fonction logarithme népérien, la fonction exponentielle e^x est le modèle par excellence des phénomènes à croissance ultra-rapide (croissance microbienne, propagation épidémique, explosion de la dette à taux composé). Elle possède la propriété remarquable d'être égale à sa propre dérivée : (e^x)' = e^x.",
  sections: [
    {
      title: "I. Définition et lien fondamental avec la fonction ln",
      content: [
        "1. Définition comme bijection réciproque :",
        "   - La fonction ln est une bijection continue et strictement croissante de ]0, +∞[ sur ℝ. Sa bijection réciproque est appelée fonction exponentielle, notée exp ou x ↦ e^x.",
        "   - Ainsi : pour tout réel x, e^x > 0 strictement, et y = e^x ⇔ x = ln(y) (avec y > 0).",
        "2. Propriétés de réciprocité :",
        "   - Pour tout réel x : ln(e^x) = x.",
        "   - Pour tout réel x > 0 : e^(ln x) = x.",
        "   - Valeurs particulières : e^0 = 1 car ln(1) = 0 ; e^1 = e ≈ 2,718."
      ]
    },
    {
      title: "II. Propriétés algébriques fondamentales",
      content: [
        "1. e^(a + b) = e^a × e^b pour tous réels a et b.",
        "2. e^(-b) = 1 / e^b et e^(a - b) = e^a / e^b.",
        "3. (e^a)ⁿ = e^(n·a) pour tout entier n relatif."
      ]
    },
    {
      title: "III. Étude analytique : limites, dérivée et variations",
      content: [
        "1. Limites aux bornes :",
        "   - lim_{x → -∞} e^x = 0 (l'axe des abscisses y = 0 est asymptote horizontale en -∞).",
        "   - lim_{x → +∞} e^x = +∞.",
        "2. Dérivabilité et sens de variation :",
        "   - La fonction exponentielle est dérivable sur ℝ et (e^x)' = e^x.",
        "   - Comme e^x > 0 pour tout x, la fonction exponentielle est strictement croissante sur ℝ.",
        "3. Dérivée de la fonction composée e^u :",
        "   - Si u est une fonction dérivable sur un intervalle I, alors [e^(u(x))]' = u'(x) · e^(u(x))."
      ]
    },
    {
      title: "IV. Résolution d'équations et applications économiques",
      content: [
        "1. Équations fondamentales : e^A = e^B ⇔ A = B ; e^A = b (avec b > 0) ⇔ A = ln(b).",
        "2. Inéquations : e^A < e^B ⇔ A < B.",
        "3. Modélisation de la croissance d'une population au Sénégal selon la loi de Malthus : N(t) = N_0 · e^(k·t)."
      ]
    }
  ]
};

export const LESSON_4_MATH_TLE_L: LessonContent = {
  id: 'math-tle-l-chap-4',
  number: 'CHAPITRE L-4',
  title: 'PRIMITIVES ET CALCUL INTÉGRAL SIMPLE',
  subject: 'Mathématiques',
  classLevel: 'Terminale',
  module: 'Pôle 1 • Analyse et Fonctions Numériques (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Notion de primitive d'une fonction continue sur un intervalle, ensemble des primitives F(x) + k, tableau des primitives usuelles (polynômes, 1/x, e^x, u'·uⁿ, u'/u, u'·e^u), définition de l'intégrale définie de a à b, propriétés (linéarité, relation de Chasles) et interprétation géométrique comme aire sous la courbe en unités d'aire (u.a.).",
  image: {
    caption: 'Figure L4.1 : Interprétation géométrique de l’intégrale comme aire du domaine sous la courbe',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="intGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#intGrad)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#3730a3" text-anchor="middle">CALCUL INTÉGRAL : PRIMITIVES ET CALCUL DE L'AIRE SOUS LA COURBE</text>
      
      <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="120" y1="35" x2="120" y2="245" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="420,210 410,205 410,215" fill="#9ca3af"/>
      <polygon points="120,35 115,45 125,45" fill="#9ca3af"/>
      <text x="415" y="225" font-size="12" font-weight="bold" fill="#374151">x</text>
      <text x="105" y="45" font-size="12" font-weight="bold" fill="#374151">y</text>
      
      <!-- Aire grisée entre a=180 et b=320 sous la courbe -->
      <path d="M 180 210 L 180 140 Q 250 80 320 120 L 320 210 Z" fill="#6366f1" fill-opacity="0.25" stroke="#4f46e5" stroke-width="1"/>
      <text x="250" y="165" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Aire A = ∫_a^b f(x)dx</text>
      
      <!-- Courbe f(x) continue positive -->
      <path d="M 140 180 Q 250 50 360 140" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <text x="365" y="135" font-size="11" font-weight="bold" fill="#4f46e5">y = f(x) ≥ 0</text>
      
      <!-- Lignes verticales en a et b -->
      <line x1="180" y1="210" x2="180" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="320" y1="210" x2="320" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="180" y="226" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">a</text>
      <text x="320" y="226" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">b</text>
      
      <rect x="450" y="50" width="310" height="190" rx="8" fill="#fff" stroke="#6366f1" stroke-width="1.5"/>
      <text x="605" y="72" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">TABLEAU DES PRIMITIVES USUELLES</text>
      <line x1="450" y1="82" x2="760" y2="82" stroke="#e5e7eb" stroke-width="1"/>
      <text x="465" y="102" font-size="10" fill="#374151">• f(x) = a ⇒ F(x) = ax + k</text>
      <text x="465" y="120" font-size="10" fill="#374151">• f(x) = xⁿ (n ≠ -1) ⇒ F(x) = [1/(n+1)] · xⁿ⁺¹ + k</text>
      <text x="465" y="138" font-size="10" fill="#374151">• f(x) = 1/x (x &gt; 0) ⇒ F(x) = ln(x) + k</text>
      <text x="465" y="156" font-size="10" fill="#374151">• f(x) = e^x ⇒ F(x) = e^x + k</text>
      <text x="465" y="174" font-size="10" font-weight="bold" fill="#4f46e5">• f(x) = u' · e^u ⇒ F(x) = e^u + k</text>
      <text x="465" y="192" font-size="10" font-weight="bold" fill="#4f46e5">• f(x) = u' / u ⇒ F(x) = ln|u| + k</text>
      <text x="465" y="214" font-size="10" font-weight="bold" fill="#b91c1c">Intégrale : ∫_a^b f(t)dt = [F(t)]_a^b = F(b) - F(a)</text>
    </svg>`
  },
  introduction: "L'opération d'intégration est l'opération réciproque de la dérivation. Trouver une primitive d'une fonction f, c'est retrouver la fonction F dont la dérivée est f : F' = f. En classe de Terminale L, le calcul intégral permet d'évaluer exactement l'aire de surfaces curvilignes non géométriques.",
  sections: [
    {
      title: "I. Notion de primitive d'une fonction continue",
      content: [
        "1. Définition : Soit f une fonction continue sur un intervalle I. On appelle primitive de f sur I toute fonction F dérivable sur I telle que F'(x) = f(x) pour tout x ∈ I.",
        "2. Théorème : Toute fonction continue sur un intervalle I admet des primitives sur I. Si F est une primitive de f, l'ensemble des primitives de f sur I est la famille de fonctions G(x) = F(x) + k, où k est une constante réelle.",
        "3. Condition initiale : Il existe une unique primitive F0 prenant une valeur y0 donnée en un point x0 donné (F0(x0) = y0)."
      ]
    },
    {
      title: "II. Tableau des primitives élémentaires et composées",
      content: [
        "1. Fonctions usuelles :",
        "   - Constante a : F(x) = ax + k.",
        "   - xⁿ (avec n entier ≠ -1) : F(x) = (xⁿ⁺¹) / (n + 1) + k.",
        "   - 1/x (sur ]0, +∞[) : F(x) = ln(x) + k.",
        "   - e^x : F(x) = e^x + k.",
        "2. Formes composées :",
        "   - u' · uⁿ (n ≠ -1) : F = [uⁿ⁺¹] / (n + 1) + k.",
        "   - u' / u (u > 0) : F = ln(u) + k.",
        "   - u' · e^u : F = e^u + k."
      ]
    },
    {
      title: "III. Définition et propriétés de l'intégrale",
      content: [
        "1. Définition : Soit f une fonction continue sur [a, b] et F une primitive quelconque de f sur [a, b]. L'intégrale de f de a à b est le nombre réel noté :",
        "   ∫_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a).",
        "2. Propriétés fondamentales :",
        "   - Linéarité : ∫_a^b [α f(x) + β g(x)] dx = α ∫_a^b f(x) dx + β ∫_a^b g(x) dx.",
        "   - Relation de Chasles : ∫_a^c f(x) dx = ∫_a^b f(x) dx + ∫_b^c f(x) dx.",
        "   - Positivité : si f(x) ≥ 0 sur [a, b] avec a ≤ b, alors ∫_a^b f(x) dx ≥ 0."
      ]
    },
    {
      title: "IV. Interprétation géométrique et calcul d'aires",
      content: [
        "1. Aire sous la courbe d'une fonction positive : Si f est continue et positive (f(x) ≥ 0) sur [a, b], l'aire du domaine délimité par la courbe de f, l'axe des abscisses et les droites verticales x = a et x = b est égale à : A = ∫_a^b f(x) dx (en unités d'aire u.a.).",
        "2. Aire entre deux courbes : Si f(x) ≥ g(x) sur [a, b], l'aire comprise entre les deux courbes est : A = ∫_a^b [f(x) - g(x)] dx."
      ]
    }
  ]
};

export const LESSON_5_MATH_TLE_L: LessonContent = {
  id: 'math-tle-l-chap-5',
  number: 'CHAPITRE L-5',
  title: 'SUITES NUMÉRIQUES ARITHMÉTIQUES ET GÉOMÉTRIQUES ET APPLICATIONS FINANCIÈRES',
  subject: 'Mathématiques',
  classLevel: 'Terminale',
  module: 'Pôle 2 • Suites et Modélisation Financière (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Étude complète des suites numériques en Série L : définition d'une suite, modes de génération (forme explicite et récurrence), suites arithmétiques (raison r, terme général Un = U0 + n·r, somme Sn), suites géométriques (raison q, terme général Un = U0 · qⁿ, somme Sn), sens de variation, limites et applications pratiques directes à la finance au Sénégal (intérêts simples, intérêts composés, calcul d'annuités d'épargne et amortissement d'un prêt bancaire).",
  image: {
    caption: 'Figure L5.1 : Comparaison graphique de la croissance linéaire (suite arithmétique) et exponentielle (suite géométrique)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#suitGrad)" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">SUITES NUMÉRIQUES : CROISSANCE ARITHMÉTIQUE (LINÉAIRE) VS GÉOMÉTRIQUE (EXPONENTIELLE)</text>
      
      <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="80" y1="35" x2="80" y2="235" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="420,210 410,205 410,215" fill="#9ca3af"/>
      <polygon points="80,35 75,45 85,45" fill="#9ca3af"/>
      <text x="415" y="225" font-size="12" font-weight="bold" fill="#374151">n</text>
      <text x="65" y="45" font-size="12" font-weight="bold" fill="#374151">Un</text>
      
      <!-- Suite Arithmétique Un = 20 + 15*n (droite en bleu) -->
      <line x1="80" y1="190" x2="380" y2="90" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,4"/>
      <circle cx="80" cy="190" r="4" fill="#2563eb"/>
      <circle cx="140" cy="170" r="4" fill="#2563eb"/>
      <circle cx="200" cy="150" r="4" fill="#2563eb"/>
      <circle cx="260" cy="130" r="4" fill="#2563eb"/>
      <circle cx="320" cy="110" r="4" fill="#2563eb"/>
      <circle cx="380" cy="90" r="4" fill="#2563eb"/>
      <text x="270" y="80" font-size="11" font-weight="bold" fill="#1d4ed8">Suite Arithmétique (Pente constante r)</text>
      
      <!-- Suite Géométrique Vn = 10 * (1.4)^n (courbe rouge) -->
      <path d="M 80 200 Q 220 190 380 45" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="80" cy="200" r="4" fill="#dc2626"/>
      <circle cx="140" cy="186" r="4" fill="#dc2626"/>
      <circle cx="200" cy="168" r="4" fill="#dc2626"/>
      <circle cx="260" cy="140" r="4" fill="#dc2626"/>
      <circle cx="320" cy="100" r="4" fill="#dc2626"/>
      <circle cx="380" cy="45" r="4" fill="#dc2626"/>
      <text x="320" y="35" font-size="11" font-weight="bold" fill="#dc2626">Suite Géométrique (q &gt; 1)</text>
      
      <!-- Formulaire comparatif à droite -->
      <rect x="440" y="50" width="325" height="190" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="602" y="70" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">SYNTHÈSE DES FORMULES INDISPENSABLES</text>
      <line x1="440" y1="80" x2="765" y2="80" stroke="#e5e7eb" stroke-width="1"/>
      
      <text x="450" y="98" font-size="10" font-weight="bold" fill="#1e3a8a">• Suite Arithmétique (Raison r) :</text>
      <text x="460" y="113" font-size="9" fill="#1e3a8a">U_{n+1} = U_n + r ; U_n = U_0 + n·r = U_p + (n - p)·r</text>
      <text x="460" y="128" font-size="9" fill="#1e3a8a">Somme : S = (nb termes) × [(1er terme + dernier)/2]</text>
      
      <text x="450" y="150" font-size="10" font-weight="bold" fill="#b91c1c">• Suite Géométrique (Raison q ≠ 1) :</text>
      <text x="460" y="165" font-size="9" fill="#b91c1c">V_{n+1} = q · V_n ; V_n = V_0 · qⁿ = V_p · qⁿ⁻ᵖ</text>
      <text x="460" y="180" font-size="9" fill="#b91c1c">Somme : S = (1er terme) × [(1 - qⁿ)/(1 - q)]</text>
      
      <text x="450" y="202" font-size="10" font-weight="bold" fill="#047857">• Mathématiques Financières :</text>
      <text x="460" y="217" font-size="9" fill="#047857">Intérêts simples : C_n = C_0 · (1 + n·i) [Arithmétique]</text>
      <text x="460" y="230" font-size="9" fill="#047857">Intérêts composés : C_n = C_0 · (1 + i)ⁿ [Géométrique]</text>
    </svg>`
  },
  introduction: "Les suites numériques arithmétiques et géométriques constituent l'outil mathématique par excellence pour modéliser des phénomènes discrets évoluant d'année en année ou de mois en mois. Au Sénégal, les applications de ce chapitre sont directes et fondamentales dans la vie économique courante : calcul d'intérêts sur un compte bancaire, planification d'un emprunt immobilier ou d'un prêt de la microfinance, calcul de rentes d'épargne ou prévisions démographiques.",
  sections: [
    {
      title: "I. Les suites arithmétiques : définition, terme général et somme",
      content: [
        "1. Définition par récurrence :",
        "   - Une suite (Un) est arithmétique s'il existe un nombre réel constant r (appelé la raison) tel que pour tout entier n :",
        "     U_{n+1} = U_n + r.",
        "2. Formule explicite du terme général Un :",
        "   - En partant de U0 : U_n = U_0 + n · r.",
        "   - En partant d'un rang p quelconque : U_n = U_p + (n - p) · r.",
        "3. Sens de variation et convergence :",
        "   - Si r > 0, la suite est strictement croissante et lim Un = +∞.",
        "   - Si r < 0, la suite est strictement décroissante et lim Un = -∞.",
        "   - Si r = 0, la suite est constante.",
        "4. Somme des termes consécutifs Sn = U0 + U1 + ... + Un :",
        "   - Formule : S = (Nombre de termes) × [(Premier terme + Dernier terme) / 2].",
        "   - Pour Sn = ∑_{k=0}^n Uk : Nombre de termes = (n - 0 + 1) = n + 1, donc Sn = (n + 1) × (U0 + Un) / 2."
      ]
    },
    {
      title: "II. Les suites géométriques : définition, terme général et somme",
      content: [
        "1. Définition par récurrence :",
        "   - Une suite (Vn) est géométrique s'il existe un nombre réel constant non nul q (appelé la raison) tel que pour tout entier n :",
        "     V_{n+1} = q · V_n.",
        "2. Formule explicite du terme général Vn :",
        "   - En partant de V0 : V_n = V_0 · qⁿ.",
        "   - En partant du rang p : V_n = V_p · qⁿ⁻ᵖ.",
        "3. Comportement et limites selon la valeur de q (avec V0 > 0) :",
        "   - Si q > 1 : la suite est strictement croissante et lim Vn = +∞.",
        "   - Si 0 < q < 1 : la suite est strictement décroissante et lim Vn = 0 (la suite converge vers 0).",
        "   - Si q = 1 : la suite est constante.",
        "4. Somme des termes consécutifs d'une suite géométrique (q ≠ 1) :",
        "   - Formule : S = (Premier terme) × [(1 - q^(Nombre de termes)) / (1 - q)]."
      ]
    },
    {
      title: "III. Applications aux mathématiques financières",
      content: [
        "1. Les intérêts simples (modèle arithmétique) :",
        "   - Les intérêts sont calculés chaque période uniquement sur le capital initial C0.",
        "   - Au taux périodique i, l'intérêt annuel est I = C0 · i. Le capital acquis au bout de n années est :",
        "     C_n = C_0 + n · (C_0 · i) = C_0 · (1 + n · i). (Suite arithmétique de premier terme C0 et de raison r = C0 · i).",
        "2. Les intérêts composés (modèle géométrique) :",
        "   - À la fin de chaque période, les intérêts acquis sont ajoutés au capital pour produire à leur tour de nouveaux intérêts (capitalisation).",
        "   - Le capital au bout de n années est : C_n = C_0 · (1 + i)ⁿ. (Suite géométrique de premier terme C0 et de raison q = 1 + i).",
        "3. Exemple type Bac :",
        "   - Un épargnant dépose 1 000 000 FCFA dans une banque dakaroise rémunérée à 6 % l'an à intérêts composés. Quel sera son capital au bout de 5 ans ?",
        "   - Calcul : C5 = 1 000 000 × (1 + 0,06)⁵ = 1 000 000 × (1,06)⁵ ≈ 1 338 225 FCFA."
      ]
    }
  ]
};

export const LESSON_6_MATH_TLE_L: LessonContent = {
  id: 'math-tle-l-chap-6',
  number: 'CHAPITRE L-6',
  title: 'STATISTIQUE À DEUX VARIABLES ET AJUSTEMENT LINÉAIRE',
  subject: 'Mathématiques',
  classLevel: 'Terminale',
  module: 'Pôle 3 • Organisation des Données et Probabilités (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Étude statistique des séries doubles (X, Y) : représentation par le nuage de points, calcul des moyennes x-bar et y-bar, point moyen G(x-bar ; y-bar), calcul des variances V(X), V(Y), des écarts-types, de la covariance Cov(X, Y), détermination de l'équation de la droite de régression linéaire de Y en X par la méthode des moindres carrés (y = ax + b), calcul du coefficient de corrélation linéaire de Bravais-Pearson r et estimations prévisionnelles.",
  image: {
    caption: 'Figure L6.1 : Nuage de points, point moyen G et droite de régression linéaire des moindres carrés',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="statGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#statGrad)" stroke="#0284c7" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">SÉRIES STATISTIQUES DOUBLES : NUAGE DE POINTS, POINT MOYEN G ET DROITE DES MOINDRES CARRÉS</text>
      
      <line x1="60" y1="210" x2="420" y2="210" stroke="#9ca3af" stroke-width="1.5"/>
      <line x1="80" y1="35" x2="80" y2="235" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="420,210 410,205 410,215" fill="#9ca3af"/>
      <polygon points="80,35 75,45 85,45" fill="#9ca3af"/>
      <text x="415" y="225" font-size="12" font-weight="bold" fill="#374151">x</text>
      <text x="65" y="45" font-size="12" font-weight="bold" fill="#374151">y</text>
      
      <!-- Nuage de points -->
      <circle cx="120" cy="180" r="3.5" fill="#0284c7"/>
      <circle cx="150" cy="165" r="3.5" fill="#0284c7"/>
      <circle cx="180" cy="160" r="3.5" fill="#0284c7"/>
      <circle cx="210" cy="140" r="3.5" fill="#0284c7"/>
      <circle cx="250" cy="130" r="3.5" fill="#0284c7"/>
      <circle cx="280" cy="115" r="3.5" fill="#0284c7"/>
      <circle cx="310" cy="100" r="3.5" fill="#0284c7"/>
      <circle cx="350" cy="85" r="3.5" fill="#0284c7"/>
      <circle cx="380" cy="70" r="3.5" fill="#0284c7"/>
      
      <!-- Point moyen G(x_bar, y_bar) -->
      <circle cx="250" cy="125" r="6" fill="#dc2626"/>
      <text x="250" y="112" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Point Moyen G(x̄ ; ȳ)</text>
      
      <!-- Droite d'ajustement y = ax + b passant par G -->
      <line x1="90" y1="195" x2="400" y2="60" stroke="#dc2626" stroke-width="2.5"/>
      <text x="350" y="55" font-size="11" font-weight="bold" fill="#dc2626">Droite (D) : y = ax + b</text>
      
      <rect x="440" y="50" width="325" height="190" rx="8" fill="#fff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="602" y="70" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">FORMULAIRE DE STATISTIQUE DU BAC L</text>
      <line x1="440" y1="80" x2="765" y2="80" stroke="#e5e7eb" stroke-width="1"/>
      <text x="455" y="98" font-size="10" font-weight="bold" fill="#374151">• Point Moyen : G(x̄ ; ȳ)</text>
      <text x="465" y="113" font-size="9" fill="#0284c7">x̄ = (1/N) ∑ x_i ; ȳ = (1/N) ∑ y_i</text>
      <text x="455" y="132" font-size="10" font-weight="bold" fill="#374151">• Covariance Cov(X, Y) :</text>
      <text x="465" y="147" font-size="9" fill="#047857">Cov(X, Y) = (1/N) ∑ (x_i · y_i) - x̄ · ȳ</text>
      <text x="455" y="167" font-size="10" font-weight="bold" fill="#374151">• Droite des moindres carrés y = ax + b :</text>
      <text x="465" y="182" font-size="10" font-weight="bold" fill="#dc2626">a = Cov(X, Y) / V(X) ; b = ȳ - a · x̄</text>
      <text x="455" y="202" font-size="10" font-weight="bold" fill="#374151">• Coefficient de corrélation linéaire r :</text>
      <text x="465" y="217" font-size="9" fill="#374151">r = Cov(X, Y) / [σ(X) · σ(Y)]</text>
      <text x="465" y="232" font-size="9" font-weight="bold" fill="#059669">Si |r| ≥ 0,85, l'ajustement linéaire est de très bonne qualité</text>
    </svg>`
  },
  introduction: "Dans les sciences humaines, sociales et économiques (études sociologiques, prévisions de récoltes d'arachide au Sénégal, corrélation entre dépenses publicitaires et chiffre d'affaires), on étudie simultanément deux caractères quantitatifs X et Y sur une même population. La statistique à deux variables permet d'analyser l'existence d'une liaison statistique entre ces deux grandeurs, de construire la droite de régression des moindres carrés et de réaliser des prédictions fiables.",
  sections: [
    {
      title: "I. Nuage de points et point moyen G",
      content: [
        "1. Série statistique double : On considère une population de taille N sur laquelle on observe deux variables quantitatives X et Y, formant N couples (xi, yi).",
        "2. Nuage de points : Représentation graphique dans un repère orthogonal où chaque individu est représenté par le point Mi(xi ; yi).",
        "3. Le point moyen G : C'est le centre de gravité du nuage, de coordonnées G(x̄ ; ȳ), où x̄ = (1/N) ∑_{i=1}^N xi et ȳ = (1/N) ∑_{i=1}^N yi."
      ]
    },
    {
      title: "II. Variances, écarts-types et Covariance",
      content: [
        "1. Variances et écarts-types marginaux :",
        "   - V(X) = (1/N) ∑ xi² - (x̄)² et σ(X) = √V(X).",
        "   - V(Y) = (1/N) ∑ yi² - (ȳ)² et σ(Y) = √V(Y).",
        "2. La Covariance Cov(X, Y) :",
        "   - Formule développée (formule de Koenig) : Cov(X, Y) = [(1/N) ∑ (xi · yi)] - x̄ · ȳ.",
        "   - La covariance mesure le sens de variation conjoint des deux variables (positive si les deux grandeurs varient dans le même sens, négative si elles varient en sens inverse)."
      ]
    },
    {
      title: "III. La droite d'ajustement linéaire par la méthode des moindres carrés",
      content: [
        "1. Principe des moindres carrés : Déterminer la droite d'équation (D) : y = ax + b qui minimise la somme des carrés des écarts verticaux ∑ [yi - (a xi + b)]².",
        "2. Formules des coefficients :",
        "   - Pente a : a = Cov(X, Y) / V(X).",
        "   - Ordonnée à l'origine b : comme la droite de régression passe obligatoirement par le point moyen G(x̄, ȳ), on a ȳ = a x̄ + b d'où : b = ȳ - a · x̄.",
        "3. Le coefficient de corrélation linéaire de Bravais-Pearson r :",
        "   - Définition : r = Cov(X, Y) / [σ(X) · σ(Y)].",
        "   - Propriété : -1 ≤ r ≤ 1. Si |r| est proche de 1 (|r| ≥ 0,85 ou 0,9), il existe une forte corrélation linéaire : l'ajustement affine est pleinement justifié.",
        "4. Estimations et prévisions : substitution d'une valeur future x dans l'équation y = ax + b."
      ]
    }
  ]
};

export const LESSON_7_MATH_TLE_L: LessonContent = {
  id: 'math-tle-l-chap-7',
  number: 'CHAPITRE L-7',
  title: 'DÉNOMBREMENT ET CALCUL DES PROBABILITÉS',
  subject: 'Mathématiques',
  classLevel: 'Terminale',
  module: 'Pôle 3 • Organisation des Données et Probabilités (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Étude complète et méthodique du dénombrement et du calcul des probabilités pour le Baccalauréat L : principes additif et multiplicatif, p-listes (tirages successifs avec remise n^p), arrangements A_n^p (tirages sans remise), combinaisons C_n^p (tirages simultanés), triangle de Pascal et formule du binôme, vocabulaire probabiliste (univers, événements), probabilité sur un univers fini équiprobable P(A) = Card(A)/Card(Omega), probabilités conditionnelles P_B(A) et arbres pondérés.",
  image: {
    caption: 'Figure L7.1 : Arbre de dénombrement pondéré et probabilités conditionnelles',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="probGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#ec4899" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#probGrad)" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#5b21b6" text-anchor="middle">DÉNOMBREMENT &amp; ARBRES PONDÉRÉS DE PROBABILITÉS CONDITIONNELLES</text>
      
      <!-- Arbre de probabilités -->
      <!-- Racine -->
      <circle cx="80" cy="135" r="5" fill="#4b5563"/>
      
      <!-- Branches 1er niveau : A et A_bar -->
      <line x1="80" y1="135" x2="180" y2="85" stroke="#8b5cf6" stroke-width="2"/>
      <line x1="80" y1="135" x2="180" y2="185" stroke="#8b5cf6" stroke-width="2"/>
      <text x="125" y="100" font-size="10" font-weight="bold" fill="#6d28d9">P(A)</text>
      <text x="125" y="170" font-size="10" font-weight="bold" fill="#6d28d9">P(Ā)</text>
      
      <circle cx="180" cy="85" r="14" fill="#8b5cf6"/>
      <text x="180" y="89" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">A</text>
      
      <circle cx="180" cy="185" r="14" fill="#9ca3af"/>
      <text x="180" y="189" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Ā</text>
      
      <!-- Branches 2e niveau -->
      <line x1="194" y1="85" x2="280" y2="60" stroke="#059669" stroke-width="1.5"/>
      <line x1="194" y1="85" x2="280" y2="110" stroke="#dc2626" stroke-width="1.5"/>
      <text x="235" y="65" font-size="9" fill="#047857">P_A(B)</text>
      <text x="235" y="108" font-size="9" fill="#b91c1c">P_A(B̄)</text>
      
      <text x="290" y="64" font-size="11" font-weight="bold" fill="#047857">B ⇒ P(A ∩ B) = P(A) × P_A(B)</text>
      <text x="290" y="114" font-size="11" font-weight="bold" fill="#b91c1c">B̄ ⇒ P(A ∩ B̄) = P(A) × P_A(B̄)</text>
      
      <line x1="194" y1="185" x2="280" y2="160" stroke="#059669" stroke-width="1.5"/>
      <line x1="194" y1="185" x2="280" y2="210" stroke="#dc2626" stroke-width="1.5"/>
      <text x="235" y="165" font-size="9" fill="#047857">P_Ā(B)</text>
      <text x="235" y="208" font-size="9" fill="#b91c1c">P_Ā(B̄)</text>
      
      <text x="290" y="164" font-size="11" font-weight="bold" fill="#047857">B ⇒ P(Ā ∩ B) = P(Ā) × P_Ā(B)</text>
      <text x="290" y="214" font-size="11" font-weight="bold" fill="#b91c1c">B̄ ⇒ P(Ā ∩ B̄) = P(Ā) × P_Ā(B̄)</text>
      
      <!-- Encadré Formules Dénombrement -->
      <rect x="520" y="50" width="245" height="190" rx="8" fill="#fff" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="642" y="70" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">OUTILS DU DÉNOMBREMENT</text>
      <line x1="520" y1="78" x2="765" y2="78" stroke="#e5e7eb" stroke-width="1"/>
      
      <text x="530" y="96" font-size="10" font-weight="bold" fill="#1e3a8a">• Avec ordre &amp; avec remise :</text>
      <text x="540" y="110" font-size="9" fill="#1e3a8a">p-liste ⇒ N = n^p</text>
      
      <text x="530" y="130" font-size="10" font-weight="bold" fill="#b91c1c">• Avec ordre &amp; sans remise :</text>
      <text x="540" y="144" font-size="9" fill="#b91c1c">Arrangements ⇒ A_n^p = n! / (n - p)!</text>
      
      <text x="530" y="164" font-size="10" font-weight="bold" fill="#047857">• Sans ordre (Simultané) :</text>
      <text x="540" y="178" font-size="9" fill="#047857">Combinaisons ⇒ C_n^p = n! / [p! · (n - p)!]</text>
      
      <text x="530" y="200" font-size="10" font-weight="bold" fill="#374151">• Équiprobabilité :</text>
      <text x="540" y="215" font-size="9" font-weight="bold" fill="#374151">P(A) = Card(A) / Card(Ω)</text>
      <text x="540" y="230" font-size="9" fill="#4b5563">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</text>
    </svg>`
  },
  introduction: "Le dénombrement et le calcul des probabilités modélisent le hasard, l'incertitude et la prise de décision. Savoir compter le nombre d'issues possibles d'une expérience aléatoire (tirages de cartes, dés, urnes, constitution de bureaux associatifs au Sénégal) est le préalable indispensable pour calculer la probabilité d'un événement.",
  sections: [
    {
      title: "I. Les outils fondamentaux du dénombrement",
      content: [
        "1. Principes additif et multiplicatif :",
        "   - Si un événement E peut se décomposer en deux sous-événements disjoints A et B : Card(A ∪ B) = Card(A) + Card(B).",
        "   - Si un choix s'effectue en p étapes successives indépendantes, la première offrant n1 possibilités, la seconde n2, etc., le nombre total de choix est : N = n1 × n2 × ... × np.",
        "2. Les trois modèles de tirage :",
        "   - Tirage successif avec remise (avec ordre) : p-listes d'éléments distincts ou non. Formule : N = n^p.",
        "   - Tirage successif sans remise (avec ordre) : arrangements de p éléments parmi n. Formule : A_n^p = n! / (n - p)! = n × (n - 1) × ... × (n - p + 1). (Cas particulier p = n : permutations n! = n × (n - 1) × ... × 1).",
        "   - Tirage simultané (sans ordre) : combinaisons de p éléments parmi n. Formule : C_n^p = A_n^p / p! = n! / [p! · (n - p)!].",
        "3. Propriétés des combinaisons et triangle de Pascal :",
        "   - C_n^0 = 1 ; C_n^n = 1 ; C_n^1 = n ; C_n^p = C_n^(n-p) ; Relation de Pascal : C_n^p + C_n^(p+1) = C_(n+1)^(p+1)."
      ]
    },
    {
      title: "II. Vocabulaire probabiliste et équiprobabilité",
      content: [
        "1. Notions élémentaires : Univers Ω de tous les résultats possibles, événement A sous-ensemble de Ω, événement certain (P(Ω) = 1), événement impossible (P(∅) = 0), événement contraire Ā (P(Ā) = 1 - P(A)).",
        "2. Formule de l'équiprobabilité : P(A) = Card(A) / Card(Ω) = (Nombre d'issues favorables à A) / (Nombre total d'issues possibles).",
        "3. Probabilité de l'union : P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Si A et B sont incompatibles (A ∩ B = ∅), P(A ∪ B) = P(A) + P(B)."
      ]
    },
    {
      title: "III. Probabilités conditionnelles et arbres pondérés",
      content: [
        "1. Probabilité conditionnelle : La probabilité que l'événement B se réalise sachant que l'événement A est déjà réalisé (avec P(A) > 0) est notée P_A(B) ou P(B|A) :",
        "   P_A(B) = P(A ∩ B) / P(A).",
        "   D'où la règle de multiplication : P(A ∩ B) = P(A) × P_A(B).",
        "2. Formule des probabilités totales : Si A et Ā forment une partition de l'univers Ω :",
        "   P(B) = P(A ∩ B) + P(Ā ∩ B) = P(A) × P_A(B) + P(Ā) × P_Ā(B).",
        "3. Indépendance : Deux événements A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B)."
      ]
    }
  ]
};
'''

with open('src/data/courses_tle_math_l.ts', 'w', encoding='utf-8') as f:
    f.write(code_math_l)

print("courses_tle_math_l.ts écrit avec succès, longueur :", len(code_math_l))
