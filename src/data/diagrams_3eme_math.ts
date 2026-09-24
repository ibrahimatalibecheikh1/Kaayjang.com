// =========================================================================
// FIGURES VECTORIELLES SVG POUR MATHÉMATIQUES 3ÈME (BFEM SÉNÉGAL)
// =========================================================================

// -------------------------------------------------------------------------
// FIGURE 1 : THÉORÈME DE THALÈS (CONFIGURATIONS EMBOÎTÉE & PAPILLON)
// -------------------------------------------------------------------------
export const SVG_THALES_3EME = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" class="w-full h-auto">
  <defs>
    <linearGradient id="mathThalesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.08"/>
    </linearGradient>
  </defs>

  <rect width="760" height="420" fill="#f8fafc" rx="14" stroke="#e2e8f0" stroke-width="2"/>
  
  <!-- Titre -->
  <rect x="20" y="15" width="720" height="38" rx="8" fill="#1e293b"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="700">
    FIGURE 1 : LE THÉORÈME DE THALÈS — CONFIGURATION DU TRIANGLE ET PAPILLON
  </text>

  <!-- Configuration emboîtée (Gauche) -->
  <g transform="translate(40, 75)">
    <rect width="320" height="290" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="30" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="700">Configuration 1 : Triangle emboîté</text>
    
    <!-- Triangle principal ABC -->
    <polygon points="160,55 50,225 270,225" fill="url(#mathThalesGrad)" stroke="#2563eb" stroke-width="2.5"/>
    <!-- Droite parallèle (MN) // (BC) -->
    <line x1="95" y1="155" x2="225" y2="155" stroke="#dc2626" stroke-width="3"/>
    
    <!-- Points & Labels -->
    <circle cx="160" cy="55" r="4" fill="#1e293b"/>
    <text x="160" y="48" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="800">A</text>
    
    <circle cx="50" cy="225" r="4" fill="#1e293b"/>
    <text x="40" y="240" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="800">B</text>
    
    <circle cx="270" cy="225" r="4" fill="#1e293b"/>
    <text x="280" y="240" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="800">C</text>
    
    <circle cx="95" cy="155" r="4" fill="#dc2626"/>
    <text x="80" y="155" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="800">M</text>
    
    <circle cx="225" cy="155" r="4" fill="#dc2626"/>
    <text x="240" y="155" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="800">N</text>
    
    <!-- Formule clé -->
    <rect x="25" y="250" width="270" height="30" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="160" y="270" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="700">
      Si (MN) // (BC) alors : AM/AB = AN/AC = MN/BC
    </text>
  </g>

  <!-- Configuration papillon (Droite) -->
  <g transform="translate(400, 75)">
    <rect width="320" height="290" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="30" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="700">Configuration 2 : Droites sécantes (Papillon)</text>
    
    <!-- Triangle supérieur et inférieur -->
    <polygon points="160,140 70,60 250,60" fill="url(#mathThalesGrad)" stroke="#2563eb" stroke-width="2"/>
    <polygon points="160,140 40,225 280,225" fill="url(#mathThalesGrad)" stroke="#2563eb" stroke-width="2"/>
    
    <!-- Parallèles (BC) et (MN) -->
    <line x1="70" y1="60" x2="250" y2="60" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="40" y1="225" x2="280" y2="225" stroke="#dc2626" stroke-width="2.5"/>
    
    <!-- Points -->
    <circle cx="160" cy="140" r="4" fill="#1e293b"/>
    <text x="175" y="145" text-anchor="start" fill="#0f172a" font-size="13" font-weight="800">A (sommet)</text>
    
    <circle cx="70" cy="60" r="4" fill="#dc2626"/>
    <text x="60" y="55" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="800">M</text>
    <circle cx="250" cy="60" r="4" fill="#dc2626"/>
    <text x="260" y="55" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="800">N</text>
    
    <circle cx="40" cy="225" r="4" fill="#2563eb"/>
    <text x="30" y="240" text-anchor="middle" fill="#2563eb" font-size="13" font-weight="800">B</text>
    <circle cx="280" cy="225" r="4" fill="#2563eb"/>
    <text x="290" y="240" text-anchor="middle" fill="#2563eb" font-size="13" font-weight="800">C</text>
    
    <!-- Formule clé -->
    <rect x="25" y="250" width="270" height="30" rx="6" fill="#fef2f2" stroke="#fecaca"/>
    <text x="160" y="270" text-anchor="middle" fill="#991b1b" font-size="12" font-weight="700">
      Si (MN) // (BC) alors : AM/AB = AN/AC = MN/BC
    </text>
  </g>
  
  <text x="380" y="400" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600">
    BFEM Sénégal — Outil indispensable pour le calcul de distances et la démonstration du parallélisme
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// FIGURE 2 : TRIGONOMÉTRIE DANS LE TRIANGLE RECTANGLE (SOH CAH TOA)
// -------------------------------------------------------------------------
export const SVG_TRIGO_3EME = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 400" width="100%" height="100%" class="w-full h-auto">
  <rect width="760" height="400" fill="#f8fafc" rx="14" stroke="#e2e8f0" stroke-width="2"/>
  
  <!-- Titre -->
  <rect x="20" y="15" width="720" height="38" rx="8" fill="#1e293b"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="700">
    FIGURE 2 : TRIGONOMÉTRIE DANS LE TRIANGLE RECTANGLE — SOH CAH TOA
  </text>

  <!-- Triangle rectangle -->
  <g transform="translate(60, 85)">
    <polygon points="50,220 380,220 380,50" fill="#eff6ff" stroke="#1e40af" stroke-width="3"/>
    
    <!-- Angle droit en B -->
    <rect x="360" y="200" width="20" height="20" fill="none" stroke="#1e40af" stroke-width="2"/>
    
    <!-- Angle aigu alpha en A -->
    <path d="M 100,220 A 50 50 0 0 0 92,197" fill="none" stroke="#d97706" stroke-width="3"/>
    <text x="110" y="210" fill="#d97706" font-size="15" font-weight="800">α</text>
    
    <!-- Points -->
    <circle cx="50" cy="220" r="4" fill="#0f172a"/>
    <text x="35" y="235" fill="#0f172a" font-size="14" font-weight="800">A</text>
    
    <circle cx="380" cy="220" r="4" fill="#0f172a"/>
    <text x="395" y="235" fill="#0f172a" font-size="14" font-weight="800">B (angle droit)</text>
    
    <circle cx="380" cy="50" r="4" fill="#0f172a"/>
    <text x="395" y="55" fill="#0f172a" font-size="14" font-weight="800">C</text>
    
    <!-- Côtés et étiquettes -->
    <text x="215" y="245" text-anchor="middle" fill="#2563eb" font-size="13" font-weight="700">Côté adjacent à α (AB)</text>
    <text x="400" y="140" fill="#059669" font-size="13" font-weight="700">Côté opposé à α (BC)</text>
    <text x="195" y="115" transform="rotate(-27 195 115)" fill="#dc2626" font-size="14" font-weight="800">Hypoténuse (AC)</text>
  </g>

  <!-- Panneau des formules -->
  <g transform="translate(480, 80)">
    <rect width="250" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="125" y="25" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="800">MÉMO TECHNIQUE SOH-CAH-TOA</text>
    
    <!-- Cosinus -->
    <rect x="15" y="40" width="220" height="42" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="25" y="65" fill="#1e40af" font-size="13" font-weight="700">cos(α) = Adjacent / Hypo = AB / AC</text>
    
    <!-- Sinus -->
    <rect x="15" y="90" width="220" height="42" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="25" y="115" fill="#065f46" font-size="13" font-weight="700">sin(α) = Opposé / Hypo = BC / AC</text>
    
    <!-- Tangente -->
    <rect x="15" y="140" width="220" height="42" rx="6" fill="#fffbeb" stroke="#fde68a"/>
    <text x="25" y="165" fill="#92400e" font-size="13" font-weight="700">tan(α) = Opposé / Adj = BC / AB</text>
    
    <!-- Relations clés -->
    <rect x="15" y="195" width="220" height="52" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="125" y="215" text-anchor="middle" fill="#475569" font-size="11" font-weight="700">cos²(α) + sin²(α) = 1</text>
    <text x="125" y="235" text-anchor="middle" fill="#475569" font-size="11" font-weight="700">tan(α) = sin(α) / cos(α)</text>
  </g>

  <text x="380" y="375" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600">
    Les valeurs du cosinus et du sinus d'un angle aigu sont strictement comprises entre 0 et 1.
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// FIGURE 3 : ANGLES INSCRITS ET ANGLE AU CENTRE
// -------------------------------------------------------------------------
export const SVG_ANGLES_INSCRITS_3EME = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 390" width="100%" height="100%" class="w-full h-auto">
  <rect width="760" height="390" fill="#f8fafc" rx="14" stroke="#e2e8f0" stroke-width="2"/>
  
  <!-- Titre -->
  <rect x="20" y="15" width="720" height="38" rx="8" fill="#1e293b"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="700">
    FIGURE 3 : ANGLE AU CENTRE ET ANGLES INSCRITS INTERCEPTANT LE MÊME ARC
  </text>

  <!-- Cercle géométrique -->
  <g transform="translate(180, 215)">
    <!-- Cercle principal -->
    <circle cx="0" cy="0" r="120" fill="#ffffff" stroke="#334155" stroke-width="2.5"/>
    <circle cx="0" cy="0" r="4" fill="#0f172a"/>
    <text x="8" y="-5" fill="#0f172a" font-size="13" font-weight="800">O (centre)</text>
    
    <!-- Arc intercepté AB (en bas, en vert épais) -->
    <path d="M -85,85 A 120 120 0 0 0 85,85" fill="none" stroke="#059669" stroke-width="5"/>
    <text x="0" y="110" text-anchor="middle" fill="#065f46" font-size="12" font-weight="800">Arc intercepté AB</text>
    
    <!-- Points A et B -->
    <circle cx="-85" cy="85" r="5" fill="#059669"/>
    <text x="-105" y="95" fill="#059669" font-size="14" font-weight="800">A</text>
    <circle cx="85" cy="85" r="5" fill="#059669"/>
    <text x="95" y="95" fill="#059669" font-size="14" font-weight="800">B</text>
    
    <!-- Angle au centre AOB (orange) -->
    <line x1="0" y1="0" x2="-85" y2="85" stroke="#d97706" stroke-width="2.5"/>
    <line x1="0" y1="0" x2="85" y2="85" stroke="#d97706" stroke-width="2.5"/>
    <text x="0" y="45" text-anchor="middle" fill="#b45309" font-size="13" font-weight="800">AÔB = 2α</text>
    
    <!-- Point M sur le cercle (angle inscrit 1) -->
    <circle cx="0" cy="-120" r="5" fill="#2563eb"/>
    <text x="0" y="-130" text-anchor="middle" fill="#2563eb" font-size="14" font-weight="800">M</text>
    <line x1="0" y1="-120" x2="-85" y2="85" stroke="#2563eb" stroke-width="2"/>
    <line x1="0" y1="-120" x2="85" y2="85" stroke="#2563eb" stroke-width="2"/>
    <text x="0" y="-85" text-anchor="middle" fill="#1d4ed8" font-size="13" font-weight="800">AMB = α</text>
    
    <!-- Point N sur le cercle (angle inscrit 2) -->
    <circle cx="105" cy="-58" r="5" fill="#7c3aed"/>
    <text x="120" y="-62" fill="#7c3aed" font-size="14" font-weight="800">N</text>
    <line x1="105" y1="-58" x2="-85" y2="85" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="105" y1="-58" x2="85" y2="85" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4 3"/>
  </g>

  <!-- Panneau des propriétés du cours -->
  <g transform="translate(420, 75)">
    <rect width="310" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="155" y="25" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="800">THÉORÈMES FONDAMENTAUX</text>
    
    <!-- Théorème 1 -->
    <rect x="15" y="40" width="280" height="60" rx="6" fill="#fef3c7" stroke="#fde68a"/>
    <text x="25" y="60" fill="#92400e" font-size="12" font-weight="700">1. Relation Angle au Centre / Angle Inscrit :</text>
    <text x="25" y="80" fill="#78350f" font-size="12">Mes(AÔB) = 2 × Mes(AMB)</text>
    
    <!-- Théorème 2 -->
    <rect x="15" y="110" width="280" height="60" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="25" y="130" fill="#1e40af" font-size="12" font-weight="700">2. Deux angles inscrits :</text>
    <text x="25" y="150" fill="#1e3a8a" font-size="12">Deux angles inscrits interceptant le même</text>
    <text x="25" y="165" fill="#1e3a8a" font-size="12">arc ont la même mesure : Mes(AMB) = Mes(ANB)</text>
    
    <!-- Théorème 3 -->
    <rect x="15" y="180" width="280" height="65" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="25" y="200" fill="#065f46" font-size="12" font-weight="700">3. Cas du demi-cercle :</text>
    <text x="25" y="220" fill="#047857" font-size="12">Si [AB] est un diamètre, tout point M du</text>
    <text x="25" y="235" fill="#047857" font-size="12">cercle forme un triangle AMB rectangle en M (90°)</text>
  </g>

  <text x="380" y="365" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600">
    Propriétés géométriques incontournables des épreuves de géométrie du BFEM.
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// FIGURE 4 : REPÈRE ORTHONORMÉ ET VECTEURS DANS LE PLAN
// -------------------------------------------------------------------------
export const SVG_VECTEURS_REP_3EME = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 390" width="100%" height="100%" class="w-full h-auto">
  <rect width="760" height="390" fill="#f8fafc" rx="14" stroke="#e2e8f0" stroke-width="2"/>
  
  <!-- Titre -->
  <rect x="20" y="15" width="720" height="38" rx="8" fill="#1e293b"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="700">
    FIGURE 4 : REPÈRE ORTHONORMÉ (O, I, J) — COORDONNÉES DE VECTEURS ET DISTANCE
  </text>

  <!-- Repère quadrillé -->
  <g transform="translate(60, 75)">
    <rect width="320" height="260" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    
    <!-- Quadrillage -->
    <g stroke="#e2e8f0" stroke-width="1">
      <line x1="40" y1="20" x2="40" y2="240"/><line x1="80" y1="20" x2="80" y2="240"/>
      <line x1="120" y1="20" x2="120" y2="240"/><line x1="160" y1="20" x2="160" y2="240"/>
      <line x1="200" y1="20" x2="200" y2="240"/><line x1="240" y1="20" x2="240" y2="240"/>
      <line x1="280" y1="20" x2="280" y2="240"/>
      
      <line x1="20" y1="40" x2="300" y2="40"/><line x1="20" y1="80" x2="300" y2="80"/>
      <line x1="20" y1="120" x2="300" y2="120"/><line x1="20" y1="160" x2="300" y2="160"/>
      <line x1="20" y1="200" x2="300" y2="200"/>
    </g>

    <!-- Axes (Ox) et (Oy) passant par (120, 160) -->
    <line x1="20" y1="160" x2="300" y2="160" stroke="#0f172a" stroke-width="2"/>
    <polygon points="300,160 292,156 292,164" fill="#0f172a"/>
    <text x="295" y="175" fill="#0f172a" font-size="12" font-weight="700">x</text>

    <line x1="120" y1="240" x2="120" y2="20" stroke="#0f172a" stroke-width="2"/>
    <polygon points="120,20 116,28 124,28" fill="#0f172a"/>
    <text x="105" y="30" fill="#0f172a" font-size="12" font-weight="700">y</text>

    <!-- Origine O(0,0) -->
    <circle cx="120" cy="160" r="3" fill="#0f172a"/>
    <text x="105" y="175" fill="#0f172a" font-size="12" font-weight="700">O</text>

    <!-- Vecteur AB : A(1, 1) -> (160, 120), B(4, 3) -> (280, 40) -->
    <line x1="160" y1="120" x2="280" y2="40" stroke="#2563eb" stroke-width="3"/>
    <polygon points="280,40 268,45 273,53" fill="#2563eb"/>
    <circle cx="160" cy="120" r="4" fill="#1e40af"/>
    <text x="150" y="115" fill="#1e40af" font-size="13" font-weight="800">A(1; 1)</text>
    <circle cx="280" cy="40" r="4" fill="#1e40af"/>
    <text x="260" y="30" fill="#1e40af" font-size="13" font-weight="800">B(4; 3)</text>

    <!-- Décomposition vecteur (Δx = 3, Δy = 2) -->
    <line x1="160" y1="120" x2="280" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="220" y="135" fill="#dc2626" font-size="11" font-weight="700">xB - xA = 3</text>
    <line x1="280" y1="120" x2="280" y2="40" stroke="#059669" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="285" y="90" fill="#059669" font-size="11" font-weight="700">yB - yA = 2</text>
  </g>

  <!-- Panneau des formules algébriques -->
  <g transform="translate(420, 75)">
    <rect width="300" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="150" y="25" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="800">FORMULES FONDAMENTALES DU BFEM</text>
    
    <rect x="15" y="40" width="270" height="46" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="25" y="60" fill="#1e40af" font-size="12" font-weight="700">1. Coordonnées d'un vecteur :</text>
    <text x="25" y="76" fill="#1e3a8a" font-size="12">AB (xB - xA ; yB - yA)</text>
    
    <rect x="15" y="95" width="270" height="46" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="25" y="115" fill="#166534" font-size="12" font-weight="700">2. Milieu I d'un segment [AB] :</text>
    <text x="25" y="131" fill="#14532d" font-size="12">xI = (xA + xB) / 2  ;  yI = (yA + yB) / 2</text>
    
    <rect x="15" y="150" width="270" height="50" rx="6" fill="#fef2f2" stroke="#fecaca"/>
    <text x="25" y="170" fill="#991b1b" font-size="12" font-weight="700">3. Distance entre deux points :</text>
    <text x="25" y="188" fill="#7f1d1d" font-size="12">AB = √[ (xB - xA)² + (yB - yA)² ]</text>
    
    <rect x="15" y="208" width="270" height="42" rx="6" fill="#fdf4ff" stroke="#f5d0fe"/>
    <text x="25" y="225" fill="#86198f" font-size="11" font-weight="700">Condition de colinéarité :</text>
    <text x="25" y="239" fill="#701a75" font-size="11">X·Y' - X'·Y = 0  (droites parallèles)</text>
  </g>

  <text x="380" y="365" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600">
    Repère orthonormé : axes perpendiculaires et même unité de longueur OI = OJ = 1.
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// FIGURE 5 : GÉOMÉTRIE DANS L'ESPACE (PYRAMIDE & CÔNE DE RÉVOLUTION)
// -------------------------------------------------------------------------
export const SVG_ESPACE_3EME = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 390" width="100%" height="100%" class="w-full h-auto">
  <rect width="760" height="390" fill="#f8fafc" rx="14" stroke="#e2e8f0" stroke-width="2"/>
  
  <!-- Titre -->
  <rect x="20" y="15" width="720" height="38" rx="8" fill="#1e293b"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="700">
    FIGURE 5 : SOLIDES DE L'ESPACE — PYRAMIDE RÉGULIÈRE ET CÔNE DE RÉVOLUTION
  </text>

  <!-- Pyramide régulière (Gauche) -->
  <g transform="translate(60, 75)">
    <rect width="300" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="150" y="25" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="700">Pyramide à base carrée</text>
    
    <!-- Base carrée en perspective ABCD -->
    <polygon points="60,200 180,200 240,160 120,160" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <line x1="60" y1="200" x2="120" y2="160" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Sommet S et arêtes latérales -->
    <circle cx="150" cy="50" r="4" fill="#1e40af"/>
    <text x="150" y="42" text-anchor="middle" fill="#1e40af" font-size="13" font-weight="800">S (sommet)</text>
    
    <line x1="150" y1="50" x2="60" y2="200" stroke="#1e40af" stroke-width="2"/>
    <line x1="150" y1="50" x2="180" y2="200" stroke="#1e40af" stroke-width="2"/>
    <line x1="150" y1="50" x2="240" y2="160" stroke="#1e40af" stroke-width="2"/>
    <line x1="150" y1="50" x2="120" y2="160" stroke="#1e40af" stroke-width="1.5" stroke-dasharray="3 3"/>
    
    <!-- Hauteur SH au centre de la base -->
    <line x1="150" y1="50" x2="150" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="160" y="115" fill="#dc2626" font-size="12" font-weight="800">h (hauteur)</text>
    
    <!-- Formule volume -->
    <rect x="20" y="215" width="260" height="34" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="150" y="237" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="700">
      Volume = (1/3) × Aire de la Base × h
    </text>
  </g>

  <!-- Cône de révolution (Droite) -->
  <g transform="translate(400, 75)">
    <rect width="300" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="150" y="25" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="700">Cône de révolution</text>
    
    <!-- Base circulaire (ellipse) -->
    <ellipse cx="150" cy="190" rx="90" ry="28" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
    
    <!-- Sommet S et génératrices -->
    <circle cx="150" cy="50" r="4" fill="#065f46"/>
    <text x="150" y="42" text-anchor="middle" fill="#065f46" font-size="13" font-weight="800">S (sommet)</text>
    
    <line x1="150" y1="50" x2="60" y2="190" stroke="#059669" stroke-width="2"/>
    <line x1="150" y1="50" x2="240" y2="190" stroke="#059669" stroke-width="2"/>
    
    <!-- Hauteur SO -->
    <line x1="150" y1="50" x2="150" y2="190" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="155" y="120" fill="#dc2626" font-size="12" font-weight="800">h (hauteur)</text>
    
    <!-- Rayon de la base R -->
    <line x1="150" y1="190" x2="240" y2="190" stroke="#2563eb" stroke-width="2"/>
    <text x="195" y="185" fill="#2563eb" font-size="12" font-weight="800">R</text>
    
    <!-- Génératrice a : a² = h² + R² -->
    <text x="90" y="115" transform="rotate(-57 90 115)" fill="#047857" font-size="12" font-weight="700">Génératrice g</text>
    
    <!-- Formule volume -->
    <rect x="20" y="215" width="260" height="34" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="150" y="237" text-anchor="middle" fill="#166534" font-size="12" font-weight="700">
      Volume = (1/3) × π × R² × h
    </text>
  </g>

  <text x="380" y="365" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600">
    Rapport de réduction k : longueurs multipliées par k, aires par k² et volumes par k³.
  </text>
</svg>
`;
