// =========================================================================
// SCHÉMAS ET FIGURES MATHÉMATIQUES VECTORIELLES — CLASSE DE PREMIÈRE
// Séries L et S (S1 - S2) — Conformes au Programme Officiel du Sénégal
// =========================================================================

// 1. Parabole du second degré avec axe de symétrie, sommet S(-b/2a, -Δ/4a) et racines
export const SVG_MATH_1ERE_PARABOLE = `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <defs>
    <linearGradient id="parabGrid" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
    </marker>
    <marker id="axisArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
  </defs>

  <rect width="700" height="420" fill="url(#parabGrid)" rx="12" />

  <!-- Grille fine -->
  <g stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3">
    <line x1="50" y1="70" x2="650" y2="70" />
    <line x1="50" y1="130" x2="650" y2="130" />
    <line x1="50" y1="190" x2="650" y2="190" />
    <line x1="50" y1="250" x2="650" y2="250" />
    <line x1="50" y1="310" x2="650" y2="310" />
    <line x1="50" y1="370" x2="650" y2="370" />
    <line x1="120" y1="30" x2="120" y2="390" />
    <line x1="200" y1="30" x2="200" y2="390" />
    <line x1="280" y1="30" x2="280" y2="390" />
    <line x1="360" y1="30" x2="360" y2="390" />
    <line x1="440" y1="30" x2="440" y2="390" />
    <line x1="520" y1="30" x2="520" y2="390" />
    <line x1="600" y1="30" x2="600" y2="390" />
  </g>

  <!-- Axes du repère (O, i, j) -->
  <line x1="60" y1="260" x2="640" y2="260" stroke="#334155" stroke-width="2.2" marker-end="url(#arrow)" />
  <line x1="200" y1="380" x2="200" y2="40" stroke="#334155" stroke-width="2.2" marker-end="url(#arrow)" />
  <text x="645" y="265" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">x</text>
  <text x="195" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">y</text>
  <text x="186" y="278" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">O</text>

  <!-- Axe de symétrie x = -b/(2a) = 360 -->
  <line x1="360" y1="50" x2="360" y2="380" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" />
  <text x="365" y="65" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Axe : x = -b/(2a)</text>

  <!-- Parabole P: y = a x^2 + b x + c (ici a > 0, passe par S(360, 320), racines x1=260, x2=460) -->
  <!-- Formule paramétrique de la courbe -->
  <path d="M 170 70 Q 360 480 550 70" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" />

  <!-- Sommet S -->
  <circle cx="360" cy="326" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
  <line x1="200" y1="326" x2="360" y2="326" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
  <text x="122" y="331" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">-Δ/(4a)</text>
  <text x="368" y="342" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#dc2626">S (-b/2a ; -Δ/4a)</text>

  <!-- Racines x1 et x2 -->
  <circle cx="275" cy="260" r="5" fill="#2563eb" />
  <text x="268" y="248" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">x₁</text>
  <circle cx="445" cy="260" r="5" fill="#2563eb" />
  <text x="440" y="248" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">x₂</text>

  <!-- Ordonnée à l'origine (0, c) -->
  <circle cx="200" cy="120" r="5" fill="#059669" />
  <text x="175" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#059669">c</text>

  <!-- Badge indicatif -->
  <g transform="translate(470, 20)">
    <rect width="210" height="92" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" opacity="0.95" />
    <text x="15" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a">f(x) = ax² + bx + c (a &gt; 0)</text>
    <text x="15" y="44" font-family="system-ui, sans-serif" font-size="11" fill="#475569">• Δ = b² - 4ac &gt; 0 (2 racines)</text>
    <text x="15" y="62" font-family="system-ui, sans-serif" font-size="11" fill="#475569">• Parabole convexe (tournée vers le haut)</text>
    <text x="15" y="80" font-family="system-ui, sans-serif" font-size="11" fill="#dc2626">• Minimum absolu atteint en S</text>
  </g>
</svg>`;

// 2. Région admissible d'un système d'inéquations linéaires & Optimisation
export const SVG_MATH_1ERE_SYSTEME_DEMI_PLANS = `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <defs>
    <linearGradient id="polyGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#93c5fd" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.35" />
    </linearGradient>
    <marker id="ar1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
    </marker>
  </defs>

  <rect width="700" height="420" fill="#fafafa" rx="12" />

  <!-- Grille -->
  <g stroke="#f1f5f9" stroke-width="1.5">
    <line x1="80" y1="60" x2="640" y2="60" />
    <line x1="80" y1="140" x2="640" y2="140" />
    <line x1="80" y1="220" x2="640" y2="220" />
    <line x1="80" y1="300" x2="640" y2="300" />
    <line x1="160" y1="40" x2="160" y2="360" />
    <line x1="280" y1="40" x2="280" y2="360" />
    <line x1="400" y1="40" x2="400" y2="360" />
    <line x1="520" y1="40" x2="520" y2="360" />
  </g>

  <!-- Axes -->
  <line x1="100" y1="340" x2="620" y2="340" stroke="#334155" stroke-width="2.5" marker-end="url(#ar1)" />
  <line x1="140" y1="360" x2="140" y2="50" stroke="#334155" stroke-width="2.5" marker-end="url(#ar1)" />
  <text x="625" y="345" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">x</text>
  <text x="135" y="42" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">y</text>
  <text x="125" y="358" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">O</text>

  <!-- Polygone de région admissible (ABCD) -->
  <polygon points="140,340 380,340 320,180 140,210" fill="url(#polyGrad)" stroke="#1d4ed8" stroke-width="2.5" />

  <!-- Ligne frontière D1: 2x + 3y <= 1200 -->
  <line x1="100" y1="170" x2="420" y2="350" stroke="#ef4444" stroke-width="2" />
  <text x="425" y="355" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ef4444">(D₁)</text>

  <!-- Ligne frontière D2: x + y <= 500 -->
  <line x1="240" y1="100" x2="420" y2="370" stroke="#10b981" stroke-width="2" />
  <text x="245" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#10b981">(D₂)</text>

  <!-- Sommets du polygone -->
  <circle cx="140" cy="340" r="5" fill="#1e3a8a" />
  <text x="145" y="358" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">O(0, 0)</text>

  <circle cx="380" cy="340" r="5" fill="#1e3a8a" />
  <text x="385" y="358" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">A(x₁, 0)</text>

  <circle cx="320" cy="180" r="6" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
  <text x="330" y="175" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#b45309">S (Optimum)</text>

  <circle cx="140" cy="210" r="5" fill="#1e3a8a" />
  <text x="88" y="215" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">B(0, y₂)</text>

  <!-- Étiquette au centre de la région admissible -->
  <rect x="180" y="250" width="140" height="42" rx="6" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2" />
  <text x="190" y="267" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">RÉGION ADMISSIBLE</text>
  <text x="200" y="283" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Polygone des solutions</text>

  <!-- Encadré programmation linéaire -->
  <g transform="translate(450, 40)">
    <rect width="220" height="110" rx="8" fill="#ffffff" stroke="#6366f1" stroke-width="1.5" />
    <text x="15" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#4338ca">Programmation Linéaire</text>
    <text x="15" y="47" font-family="system-ui, sans-serif" font-size="11" fill="#475569">• Région admissible convexe</text>
    <text x="15" y="67" font-family="system-ui, sans-serif" font-size="11" fill="#475569">• Fonction objectif Z = ax + by</text>
    <text x="15" y="87" font-family="system-ui, sans-serif" font-size="11" fill="#b45309">• Le maximum est atteint</text>
    <text x="15" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#b45309">  sur un sommet (ici S)</text>
  </g>
</svg>`;

// 3. Fonction homographique f(x) = (ax + b)/(cx + d) avec asymptotes
export const SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE = `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <defs>
    <marker id="ar2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
    </marker>
  </defs>

  <rect width="700" height="420" fill="#fcfcfd" rx="12" />

  <!-- Grille -->
  <g stroke="#f1f5f9" stroke-width="1.2">
    <line x1="50" y1="90" x2="650" y2="90" />
    <line x1="50" y1="160" x2="650" y2="160" />
    <line x1="50" y1="230" x2="650" y2="230" />
    <line x1="50" y1="300" x2="650" y2="300" />
    <line x1="50" y1="370" x2="650" y2="370" />
    <line x1="120" y1="30" x2="120" y2="390" />
    <line x1="220" y1="30" x2="220" y2="390" />
    <line x1="320" y1="30" x2="320" y2="390" />
    <line x1="420" y1="30" x2="420" y2="390" />
    <line x1="520" y1="30" x2="520" y2="390" />
    <line x1="620" y1="30" x2="620" y2="390" />
  </g>

  <!-- Axes (O, x, y) avec O(280, 240) -->
  <line x1="50" y1="240" x2="650" y2="240" stroke="#334155" stroke-width="2.2" marker-end="url(#ar2)" />
  <line x1="260" y1="390" x2="260" y2="30" stroke="#334155" stroke-width="2.2" marker-end="url(#ar2)" />
  <text x="655" y="245" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">x</text>
  <text x="255" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">y</text>
  <text x="245" y="258" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">O</text>

  <!-- Asymptote verticale x = -d/c = 360 -->
  <line x1="360" y1="35" x2="360" y2="385" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" />
  <text x="365" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ef4444">Asymptote verticale : x = -d/c</text>

  <!-- Asymptote horizontale y = a/c = 150 -->
  <line x1="50" y1="150" x2="650" y2="150" stroke="#10b981" stroke-width="2" stroke-dasharray="6,4" />
  <text x="500" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#10b981">Asymptote horizontale : y = a/c</text>

  <!-- Centre de symétrie Ω(-d/c, a/c) = (360, 150) -->
  <circle cx="360" cy="150" r="6" fill="#7c3aed" stroke="#ffffff" stroke-width="2" />
  <text x="368" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#7c3aed">Ω (-d/c ; a/c)</text>

  <!-- Branche 1 (x < -d/c) -->
  <path d="M 60 162 Q 320 170 345 385" fill="none" stroke="#2563eb" stroke-width="3.2" stroke-linecap="round" />

  <!-- Branche 2 (x > -d/c) -->
  <path d="M 375 35 Q 400 135 640 142" fill="none" stroke="#2563eb" stroke-width="3.2" stroke-linecap="round" />

  <!-- Encadré explicatif -->
  <g transform="translate(60, 260)">
    <rect width="180" height="95" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
    <text x="12" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Hyperbole équilatère</text>
    <text x="12" y="42" font-family="system-ui, sans-serif" font-size="11" fill="#475569">f(x) = (ax + b) / (cx + d)</text>
    <text x="12" y="62" font-family="system-ui, sans-serif" font-size="11" fill="#475569">• Df = ℝ \\ {-d/c}</text>
    <text x="12" y="82" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#7c3aed">• Symétrie par rapport à Ω</text>
  </g>
</svg>`;

// 4. Statistique à deux variables : Nuage de points & Droite d'ajustement de Mayer
export const SVG_MATH_1ERE_DROITE_MAYER = `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <defs>
    <marker id="ar3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
    </marker>
  </defs>

  <rect width="700" height="420" fill="#fafafa" rx="12" />

  <!-- Grille -->
  <g stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2">
    <line x1="80" y1="80" x2="620" y2="80" />
    <line x1="80" y1="140" x2="620" y2="140" />
    <line x1="80" y1="200" x2="620" y2="200" />
    <line x1="80" y1="260" x2="620" y2="260" />
    <line x1="80" y1="320" x2="620" y2="320" />
    <line x1="160" y1="50" x2="160" y2="350" />
    <line x1="240" y1="50" x2="240" y2="350" />
    <line x1="320" y1="50" x2="320" y2="350" />
    <line x1="400" y1="50" x2="400" y2="350" />
    <line x1="480" y1="50" x2="480" y2="350" />
    <line x1="560" y1="50" x2="560" y2="350" />
  </g>

  <!-- Axes -->
  <line x1="70" y1="340" x2="640" y2="340" stroke="#334155" stroke-width="2.2" marker-end="url(#ar3)" />
  <line x1="90" y1="360" x2="90" y2="40" stroke="#334155" stroke-width="2.2" marker-end="url(#ar3)" />
  <text x="645" y="345" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">x (Variable explicative)</text>
  <text x="85" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">y (Variable expliquée)</text>

  <!-- Séparation des deux sous-groupes de Mayer par trait vertical -->
  <line x1="330" y1="50" x2="330" y2="340" stroke="#cbd5e1" stroke-width="1.8" stroke-dasharray="5,3" />
  <text x="180" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Groupe 1 (n/2 premiers points)</text>
  <text x="360" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#047857">Groupe 2 (n/2 derniers points)</text>

  <!-- Droite de Mayer passant par G1(210, 240) et G2(470, 120) -->
  <line x1="80" y1="300" x2="600" y2="60" stroke="#dc2626" stroke-width="3.2" stroke-linecap="round" />
  <text x="540" y="55" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#dc2626">Droite de Mayer : y = ax + b</text>

  <!-- Points du nuage Groupe 1 (bleus) -->
  <circle cx="140" cy="275" r="5" fill="#0284c7" />
  <circle cx="190" cy="255" r="5" fill="#0284c7" />
  <circle cx="230" cy="230" r="5" fill="#0284c7" />
  <circle cx="280" cy="205" r="5" fill="#0284c7" />

  <!-- Points du nuage Groupe 2 (verts) -->
  <circle cx="380" cy="170" r="5" fill="#10b981" />
  <circle cx="430" cy="140" r="5" fill="#10b981" />
  <circle cx="490" cy="110" r="5" fill="#10b981" />
  <circle cx="540" cy="85" r="5" fill="#10b981" />

  <!-- Points moyens G1 et G2 -->
  <circle cx="210" cy="241" r="8" fill="#e11d48" stroke="#ffffff" stroke-width="2.5" />
  <text x="220" y="246" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#be123c">G₁ (x̄₁, ȳ₁)</text>

  <circle cx="460" cy="126" r="8" fill="#e11d48" stroke="#ffffff" stroke-width="2.5" />
  <text x="470" y="131" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#be123c">G₂ (x̄₂, ȳ₂)</text>

  <!-- Formule de la pente -->
  <g transform="translate(100, 110)">
    <rect width="210" height="75" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1.4" />
    <text x="12" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#991b1b">Méthode de Mayer</text>
    <text x="12" y="44" font-family="system-ui, sans-serif" font-size="11" fill="#334155">Pente : a = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁)</text>
    <text x="12" y="64" font-family="system-ui, sans-serif" font-size="11" fill="#334155">Constante : b = ȳ₁ - a·x̄₁</text>
  </g>
</svg>`;

// 5. Cercle trigonométrique complet (Angles remarquables, cosinus, sinus, tangente)
export const SVG_MATH_1ERE_CERCLE_TRIGONOMETRIQUE = `<svg viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <defs>
    <marker id="arTrig" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
    </marker>
  </defs>

  <rect width="700" height="480" fill="#fcfcfd" rx="12" />

  <!-- Centre du cercle (350, 240), Rayon R = 150 -->
  <!-- Cercle trigonométrique -->
  <circle cx="350" cy="240" r="150" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5" />

  <!-- Axes du repère -->
  <line x1="120" y1="240" x2="580" y2="240" stroke="#334155" stroke-width="2" marker-end="url(#arTrig)" />
  <line x1="350" y1="450" x2="350" y2="30" stroke="#334155" stroke-width="2" marker-end="url(#arTrig)" />
  <text x="585" y="245" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">cos x</text>
  <text x="340" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">sin x</text>
  <text x="336" y="256" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">O</text>

  <!-- Rayons pour angles remarquables (Quadrant 1 & 2) -->
  <!-- pi/6 (30°) -> cos=sqrt(3)/2=0.866, sin=0.5 -> x = 350 + 130, y = 240 - 75 -->
  <line x1="350" y1="240" x2="480" y2="165" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,2" />
  <circle cx="480" cy="165" r="4.5" fill="#dc2626" />
  <text x="490" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">π/6 (30°)</text>

  <!-- pi/4 (45°) -> cos=sin=0.707 -> x = 350 + 106, y = 240 - 106 -->
  <line x1="350" y1="240" x2="456" y2="134" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,2" />
  <circle cx="456" cy="134" r="4.5" fill="#dc2626" />
  <text x="466" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">π/4 (45°)</text>

  <!-- pi/3 (60°) -> cos=0.5, sin=0.866 -> x = 350 + 75, y = 240 - 130 -->
  <line x1="350" y1="240" x2="425" y2="110" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,2" />
  <circle cx="425" cy="110" r="4.5" fill="#dc2626" />
  <text x="432" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">π/3 (60°)</text>

  <!-- pi/2 (90°) -->
  <circle cx="350" cy="90" r="5" fill="#2563eb" />
  <text x="355" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">π/2 (0, 1)</text>

  <!-- pi (180°) -->
  <circle cx="200" cy="240" r="5" fill="#2563eb" />
  <text x="155" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">π (-1, 0)</text>

  <!-- 0 / 2pi -->
  <circle cx="500" cy="240" r="5" fill="#2563eb" />
  <text x="508" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">0 / 2π (1, 0)</text>

  <!-- 3pi/2 -->
  <circle cx="350" cy="390" r="5" fill="#2563eb" />
  <text x="355" y="410" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">3π/2 (0, -1)</text>

  <!-- Projetés sur axes pour angle x = pi/3 -->
  <line x1="425" y1="110" x2="425" y2="240" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2" />
  <line x1="425" y1="110" x2="350" y2="110" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="4,2" />
  <text x="415" y="258" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#16a34a">1/2</text>
  <text x="305" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#9333ea">√3/2</text>

  <!-- Axe des tangentes (x = 1) -->
  <line x1="500" y1="40" x2="500" y2="440" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,3" />
  <text x="505" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b45309">Axe des tangentes (tan x)</text>

  <!-- Formules clés -->
  <g transform="translate(40, 40)">
    <rect width="180" height="90" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.3" />
    <text x="12" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">Propriétés fondatrices</text>
    <text x="12" y="44" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• cos² x + sin² x = 1</text>
    <text x="12" y="64" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• -1 ≤ cos x ≤ 1 ; -1 ≤ sin x ≤ 1</text>
    <text x="12" y="82" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• tan x = sin x / cos x</text>
  </g>
</svg>`;

// 6. Tangente, Nombre dérivé & Approximation affine
export const SVG_MATH_1ERE_TANGENTE_COURBE = `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <defs>
    <marker id="arDeriv" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
    </marker>
  </defs>

  <rect width="700" height="420" fill="#fbfcfd" rx="12" />

  <!-- Axes -->
  <line x1="60" y1="360" x2="640" y2="360" stroke="#334155" stroke-width="2.2" marker-end="url(#arDeriv)" />
  <line x1="120" y1="390" x2="120" y2="40" stroke="#334155" stroke-width="2.2" marker-end="url(#arDeriv)" />
  <text x="645" y="365" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">x</text>
  <text x="115" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155">y</text>
  <text x="105" y="378" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">O</text>

  <!-- Courbe C_f -->
  <path d="M 140 340 C 260 320, 340 240, 420 180 S 560 60, 620 50" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" />
  <text x="600" y="40" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">C_f</text>

  <!-- Point de contact A(a, f(a)) = (340, 240) -->
  <circle cx="340" cy="240" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
  <line x1="340" y1="240" x2="340" y2="360" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
  <line x1="120" y1="240" x2="340" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
  <text x="335" y="378" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#334155">a</text>
  <text x="75" y="245" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#334155">f(a)</text>
  <text x="350" y="235" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#dc2626">A (a, f(a))</text>

  <!-- Tangente (T) en A de pente f'(a) = -0.75 -> y - 240 = -0.75 (x - 340) -->
  <line x1="180" y1="360" x2="500" y2="120" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" />
  <text x="510" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ef4444">Tangente (T)</text>

  <!-- Triangle d'accroissement pour la pente f'(a) -->
  <line x1="340" y1="180" x2="420" y2="180" stroke="#059669" stroke-width="2" />
  <line x1="420" y1="180" x2="420" y2="240" stroke="#059669" stroke-width="2" />
  <text x="375" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#059669">Δx = 1</text>
  <text x="430" y="215" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#059669">Δy = f'(a)</text>

  <!-- Encadré équation de la tangente -->
  <g transform="translate(180, 70)">
    <rect width="250" height="75" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1.5" />
    <text x="15" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#991b1b">Équation de la Tangente (T)</text>
    <text x="15" y="47" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#2563eb">y = f'(a) · (x - a) + f(a)</text>
    <text x="15" y="66" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">Nombre dérivé = coefficient directeur</text>
  </g>
</svg>`;

// 7. Barycentre dans le plan & Théorème de la médiane / Al-Kashi
export const SVG_MATH_1ERE_BARYCENTRE_AL_KASHI = `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <rect width="700" height="420" fill="#f8fafc" rx="12" />

  <!-- Triangle ABC : A(260, 90), B(120, 320), C(540, 320) -->
  <polygon points="260,90 120,320 540,320" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.5" />

  <!-- Sommets A, B, C -->
  <circle cx="260" cy="90" r="6" fill="#1e40af" />
  <text x="255" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#1e40af">A (α)</text>

  <circle cx="120" cy="320" r="6" fill="#1e40af" />
  <text x="90" y="335" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#1e40af">B (β)</text>

  <circle cx="540" cy="320" r="6" fill="#1e40af" />
  <text x="550" y="335" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#1e40af">C (γ)</text>

  <!-- Milieu I de [BC] : I(330, 320) -->
  <circle cx="330" cy="320" r="5" fill="#059669" />
  <text x="325" y="345" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#059669">I (Milieu de [BC])</text>

  <!-- Médiane (AI) -->
  <line x1="260" y1="90" x2="330" y2="320" stroke="#059669" stroke-width="2" stroke-dasharray="5,3" />

  <!-- Centre de gravité G / Barycentre G(306, 243) -->
  <circle cx="306" cy="243" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
  <text x="320" y="248" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#dc2626">G = bar{(A,α),(B,β),(C,γ)}</text>

  <!-- Lados c, b, a -->
  <text x="170" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">c = AB</text>
  <text x="420" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">b = AC</text>
  <text x="325" y="305" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#475569">a = BC</text>

  <!-- Encadré Al-Kashi & Théorème de la médiane -->
  <g transform="translate(420, 50)">
    <rect width="250" height="150" rx="8" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5" />
    <text x="12" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Relations métriques fondamentales</text>
    <text x="12" y="44" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">• Théorème d'Al-Kashi (Carnot) :</text>
    <text x="20" y="62" font-family="system-ui, sans-serif" font-size="11" fill="#334155">a² = b² + c² - 2bc · cos Â</text>
    <text x="12" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#059669">• Théorème de la médiane :</text>
    <text x="20" y="102" font-family="system-ui, sans-serif" font-size="11" fill="#334155">AB² + AC² = 2AI² + BC²/2</text>
    <text x="12" y="124" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#7c3aed">• Barycentre :</text>
    <text x="20" y="140" font-family="system-ui, sans-serif" font-size="11" fill="#334155">α GA + β GB + γ GC = 0</text>
  </g>
</svg>`;

// 8. Arbre de Probabilités Pondéré Complet
export const SVG_MATH_1ERE_ARBRE_PROBABILITE = `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto rounded-xl shadow-md bg-white border border-indigo-100">
  <rect width="700" height="420" fill="#f8fafc" rx="12" />

  <!-- Nœud racine (80, 210) -->
  <circle cx="80" cy="210" r="7" fill="#1e3a8a" />
  <text x="50" y="215" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#1e3a8a">Ω</text>

  <!-- Branches niveau 1 : vers A(260, 110) et vers A_bar(260, 310) -->
  <line x1="80" y1="210" x2="260" y2="110" stroke="#2563eb" stroke-width="2.5" />
  <line x1="80" y1="210" x2="260" y2="310" stroke="#64748b" stroke-width="2.5" />

  <text x="150" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">P(A)</text>
  <text x="145" y="280" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#475569">P(Ā) = 1 - P(A)</text>

  <!-- Nœud A et Ā -->
  <circle cx="260" cy="110" r="7" fill="#2563eb" />
  <text x="252" y="95" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#1e40af">A</text>

  <circle cx="260" cy="310" r="7" fill="#64748b" />
  <text x="252" y="335" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#475569">Ā</text>

  <!-- Branches niveau 2 à partir de A : vers B(460, 60) et vers B_bar(460, 160) -->
  <line x1="260" y1="110" x2="460" y2="60" stroke="#059669" stroke-width="2" />
  <line x1="260" y1="110" x2="460" y2="160" stroke="#dc2626" stroke-width="2" />

  <text x="340" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#059669">P_A(B)</text>
  <text x="340" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">P_A(B̄)</text>

  <!-- Branches niveau 2 à partir de Ā : vers B(460, 260) et vers B_bar(460, 360) -->
  <line x1="260" y1="310" x2="460" y2="260" stroke="#059669" stroke-width="2" />
  <line x1="260" y1="310" x2="460" y2="360" stroke="#dc2626" stroke-width="2" />

  <text x="340" y="275" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#059669">P_Ā(B)</text>
  <text x="340" y="350" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">P_Ā(B̄)</text>

  <!-- Feuilles et issues à droite -->
  <circle cx="460" cy="60" r="5" fill="#059669" />
  <text x="475" y="65" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#065f46">A ∩ B ➔ P(A ∩ B) = P(A) × P_A(B)</text>

  <circle cx="460" cy="160" r="5" fill="#dc2626" />
  <text x="475" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#991b1b">A ∩ B̄ ➔ P(A ∩ B̄) = P(A) × P_A(B̄)</text>

  <circle cx="460" cy="260" r="5" fill="#059669" />
  <text x="475" y="265" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#065f46">Ā ∩ B ➔ P(Ā ∩ B) = P(Ā) × P_Ā(B)</text>

  <circle cx="460" cy="360" r="5" fill="#dc2626" />
  <text x="475" y="365" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#991b1b">Ā ∩ B̄ ➔ P(Ā ∩ B̄) = P(Ā) × P_Ā(B̄)</text>

  <!-- Formule des probabilités totales encadrée -->
  <g transform="translate(180, 10)">
    <rect width="360" height="36" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.2" />
    <text x="15" y="23" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a">Probabilités totales : P(B) = P(A ∩ B) + P(Ā ∩ B)</text>
  </g>
</svg>`;
