// =========================================================================
// FIGURES ET SCHÉMAS VECTORIELS (SVG) PÉDAGOGIQUES — CLASSE DE 4ÈME
// ACTIVITÉS GÉOMÉTRIQUES (MATHS) & PHYSIQUE-CHIMIE (CHIMIE ET ÉLECTRICITÉ)
// =========================================================================

// -------------------------------------------------------------------------
// 1. MATHÉMATIQUES — GÉOMÉTRIE : THÉORÈME DE PYTHAGORE (DIRECT)
// -------------------------------------------------------------------------
export const SVG_PYTHAGORE_DIRECT = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="100%" height="100%" className="w-full h-auto">
  <defs>
    <linearGradient id="pythGradTri" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="hypoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
    <filter id="shadowPyth" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Arrière-plan stylisé quadrillé -->
  <rect width="760" height="440" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  <g opacity="0.4" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4">
    <line x1="50" y1="50" x2="710" y2="50"/>
    <line x1="50" y1="120" x2="710" y2="120"/>
    <line x1="50" y1="190" x2="710" y2="190"/>
    <line x1="50" y1="260" x2="710" y2="260"/>
    <line x1="50" y1="330" x2="710" y2="330"/>
    <line x1="50" y1="400" x2="710" y2="400"/>
  </g>

  <!-- BANDEAU TITRE -->
  <rect x="20" y="16" width="720" height="38" rx="8" fill="#1e293b"/>
  <text x="380" y="41" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui, sans-serif" font-weight="800" letter-spacing="0.5">
    FIGURE 1 : LE THÉORÈME DIRECT DE PYTHAGORE — TRIANGLE RECTANGLE
  </text>

  <!-- CARRES SUR LES CÔTÉS (Démonstration d'aire) -->
  <!-- Carré sur côté AC (hauteur = 140, carré vers la gauche) -->
  <rect x="80" y="120" width="140" height="140" fill="#38bdf8" fill-opacity="0.2" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 2"/>
  <text x="150" y="185" text-anchor="middle" fill="#0369a1" font-size="13" font-family="system-ui" font-weight="700">Aire = b²</text>
  <text x="150" y="205" text-anchor="middle" fill="#0284c7" font-size="11" font-family="system-ui">b = AC</text>

  <!-- Carré sur côté AB (base = 200, carré vers le bas) -->
  <rect x="220" y="260" width="200" height="160" fill="#a855f7" fill-opacity="0.15" stroke="#7e22ce" stroke-width="2" stroke-dasharray="4 2"/>
  <text x="320" y="340" text-anchor="middle" fill="#6b21a8" font-size="13" font-family="system-ui" font-weight="700">Aire = c²</text>
  <text x="320" y="360" text-anchor="middle" fill="#7e22ce" font-size="11" font-family="system-ui">c = AB</text>

  <!-- TRIANGLE RECTANGLE PRINCIPAL ABC (A=(220, 260), B=(420, 260), C=(220, 120)) -->
  <polygon points="220,260 420,260 220,120" fill="url(#pythGradTri)" stroke="#1e3a8a" stroke-width="3" filter="url(#shadowPyth)"/>

  <!-- Angle droit en A -->
  <rect x="220" y="236" width="24" height="24" fill="#ef4444" fill-opacity="0.2" stroke="#dc2626" stroke-width="2"/>
  <circle cx="232" cy="248" r="2" fill="#dc2626"/>

  <!-- Côtés en couleur & annotations -->
  <!-- Côté AC -->
  <line x1="220" y1="260" x2="220" y2="120" stroke="#0284c7" stroke-width="4"/>
  <text x="205" y="195" text-anchor="end" fill="#0369a1" font-size="14" font-family="system-ui" font-weight="800">Côté AC (b)</text>

  <!-- Côté AB -->
  <line x1="220" y1="260" x2="420" y2="260" stroke="#7e22ce" stroke-width="4"/>
  <text x="320" y="285" text-anchor="middle" fill="#6b21a8" font-size="14" font-family="system-ui" font-weight="800">Côté AB (c)</text>

  <!-- Hypoténuse BC -->
  <line x1="220" y1="120" x2="420" y2="260" stroke="url(#hypoGrad)" stroke-width="5"/>
  <text x="345" y="170" text-anchor="start" fill="#dc2626" font-size="15" font-family="system-ui" font-weight="900">
    HYPOTÉnUSE [BC] (a)
  </text>
  <text x="345" y="190" text-anchor="start" fill="#991b1b" font-size="12" font-family="system-ui" font-weight="600">
    (Côté le plus long, opposé à l'angle droit)
  </text>

  <!-- Points A, B, C -->
  <circle cx="220" cy="260" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
  <text x="210" y="285" fill="#dc2626" font-size="16" font-family="system-ui" font-weight="900">A (Angle droit)</text>

  <circle cx="420" cy="260" r="6" fill="#1e3a8a" stroke="#ffffff" stroke-width="2"/>
  <text x="435" y="270" fill="#1e3a8a" font-size="16" font-family="system-ui" font-weight="900">B</text>

  <circle cx="220" cy="120" r="6" fill="#1e3a8a" stroke="#ffffff" stroke-width="2"/>
  <text x="215" y="105" fill="#1e3a8a" font-size="16" font-family="system-ui" font-weight="900">C</text>

  <!-- ENCADRÉ FORMULE OFFICIELLE -->
  <rect x="470" y="210" width="270" height="190" rx="12" fill="#ffffff" stroke="#3b82f6" stroke-width="2" filter="url(#shadowPyth)"/>
  <rect x="470" y="210" width="270" height="34" rx="12" fill="#2563eb"/>
  <text x="605" y="233" text-anchor="middle" fill="#ffffff" font-size="13" font-family="system-ui" font-weight="800">ÉGALITÉ DE PYTHAGORE</text>
  
  <text x="490" y="275" fill="#1e293b" font-size="13" font-family="system-ui" font-weight="600">Dans le triangle ABC rect. en A :</text>
  <rect x="488" y="288" width="234" height="42" rx="8" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="605" y="315" text-anchor="middle" fill="#1d4ed8" font-size="18" font-family="system-ui" font-weight="900">
    BC² = AB² + AC²
  </text>
  <text x="490" y="352" fill="#475569" font-size="12" font-family="system-ui">Calcul d'un côté de l'angle droit :</text>
  <text x="605" y="375" text-anchor="middle" fill="#b91c1c" font-size="14" font-family="system-ui" font-weight="800">
    AB² = BC² - AC²
  </text>
  <text x="605" y="393" text-anchor="middle" fill="#b91c1c" font-size="14" font-family="system-ui" font-weight="800">
    AC² = BC² - AB²
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// 2. MATHÉMATIQUES — GÉOMÉTRIE : RÉCIPROQUE DE PYTHAGORE
// -------------------------------------------------------------------------
export const SVG_PYTHAGORE_RECIPROQUE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" className="w-full h-auto">
  <rect width="760" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  
  <!-- BANDEAU TITRE -->
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#0f172a"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui, sans-serif" font-weight="800">
    FIGURE 2 : TEST D'ORTHOGONALITÉ — RÉCIPROQUE VS CONTRAPOSÉE
  </text>

  <!-- CAS 1 : TRIANGLE RECTANGLE (BC² = AB² + AC²) -->
  <g transform="translate(30, 70)">
    <rect width="335" height="325" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect width="335" height="32" rx="12" fill="#15803d"/>
    <text x="167" y="22" text-anchor="middle" fill="#ffffff" font-size="13" font-family="system-ui" font-weight="800">
      CAS 1 : TRIANGLE RECTANGLE (Vérifié ✓)
    </text>

    <!-- Triangle 8, 15, 17 -->
    <polygon points="40,210 200,210 40,90" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
    <rect x="40" y="190" width="20" height="20" fill="#22c55e" fill-opacity="0.3" stroke="#16a34a" stroke-width="2"/>
    
    <text x="25" y="215" fill="#15803d" font-weight="800" font-size="14">A</text>
    <text x="205" y="215" fill="#15803d" font-weight="800" font-size="14">B</text>
    <text x="30" y="85" fill="#15803d" font-weight="800" font-size="14">C</text>

    <text x="120" y="228" text-anchor="middle" fill="#166534" font-size="12" font-weight="700">AB = 15 cm</text>
    <text x="25" y="150" text-anchor="end" fill="#166534" font-size="12" font-weight="700">AC = 8 cm</text>
    <text x="135" y="140" text-anchor="start" fill="#15803d" font-size="13" font-weight="900">BC = 17 cm</text>

    <rect x="20" y="240" width="295" height="72" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
    <text x="30" y="260" fill="#166534" font-size="12" font-weight="700">• BC² = 17² = 289</text>
    <text x="30" y="278" fill="#166534" font-size="12" font-weight="700">• AB² + AC² = 15² + 8² = 225 + 64 = 289</text>
    <text x="30" y="298" fill="#15803d" font-size="12" font-weight="900">BC² = AB² + AC² ➔ ABC est rectangle en A.</text>
  </g>

  <!-- CAS 2 : TRIANGLE NON RECTANGLE (BC² ≠ AB² + AC²) -->
  <g transform="translate(395, 70)">
    <rect width="335" height="325" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
    <rect width="335" height="32" rx="12" fill="#b91c1c"/>
    <text x="167" y="22" text-anchor="middle" fill="#ffffff" font-size="13" font-family="system-ui" font-weight="800">
      CAS 2 : TRIANGLE NON RECTANGLE (✕)
    </text>

    <!-- Triangle 6, 7, 9 (non rectangle) -->
    <polygon points="50,210 210,210 85,95" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
    <line x1="50" y1="190" x2="70" y2="210" stroke="#dc2626" stroke-width="2"/>
    <line x1="70" y1="190" x2="50" y2="210" stroke="#dc2626" stroke-width="2"/>
    
    <text x="35" y="215" fill="#b91c1c" font-weight="800" font-size="14">E</text>
    <text x="215" y="215" fill="#b91c1c" font-weight="800" font-size="14">F</text>
    <text x="80" y="85" fill="#b91c1c" font-weight="800" font-size="14">G</text>

    <text x="130" y="228" text-anchor="middle" fill="#991b1b" font-size="12" font-weight="700">EF = 7 cm</text>
    <text x="55" y="145" text-anchor="end" fill="#991b1b" font-size="12" font-weight="700">EG = 6 cm</text>
    <text x="155" y="145" text-anchor="start" fill="#b91c1c" font-size="13" font-weight="900">GF = 9 cm (plus long)</text>

    <rect x="20" y="240" width="295" height="72" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="30" y="260" fill="#991b1b" font-size="12" font-weight="700">• GF² = 9² = 81</text>
    <text x="30" y="278" fill="#991b1b" font-size="12" font-weight="700">• EG² + EF² = 6² + 7² = 36 + 49 = 85</text>
    <text x="30" y="298" fill="#b91c1c" font-size="12" font-weight="900">81 ≠ 85 ➔ EFG n'est PAS rectangle.</text>
  </g>
</svg>
`;

// -------------------------------------------------------------------------
// 3. MATHÉMATIQUES — GÉOMÉTRIE : LE COSINUS D'UN ANGLE AIGU
// -------------------------------------------------------------------------
export const SVG_COSINUS_ANGLE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" className="w-full h-auto">
  <rect width="760" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#1e1b4b"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIGURE 3 : LE COSINUS D'UN ANGLE AIGU DANS LE TRIANGLE RECTANGLE
  </text>

  <!-- Triangle rectangle ABC rectangle en A -->
  <polygon points="120,290 440,290 120,100" fill="#e0e7ff" stroke="#3730a3" stroke-width="3"/>
  <rect x="120" y="266" width="24" height="24" fill="#dc2626" fill-opacity="0.2" stroke="#dc2626" stroke-width="2"/>
  <circle cx="132" cy="278" r="2" fill="#dc2626"/>

  <!-- Angle aigu B en surbrillance avec arc -->
  <path d="M 390 290 A 50 50 0 0 0 415 273" fill="none" stroke="#2563eb" stroke-width="4"/>
  <text x="380" y="270" fill="#1d4ed8" font-size="16" font-family="system-ui" font-weight="900">α (Angle B)</text>

  <!-- Côté adjacent surligné -->
  <line x1="120" y1="290" x2="440" y2="290" stroke="#2563eb" stroke-width="6"/>
  <text x="280" y="318" text-anchor="middle" fill="#1d4ed8" font-size="15" font-family="system-ui" font-weight="900">
    CÔTÉ ADJACENT À L'ANGLE B [AB]
  </text>

  <!-- Hypoténuse surlignée -->
  <line x1="120" y1="100" x2="440" y2="290" stroke="#7c3aed" stroke-width="6"/>
  <text x="310" y="180" text-anchor="start" fill="#6d28d9" font-size="16" font-family="system-ui" font-weight="900">
    HYPOTÉnUSE [BC]
  </text>

  <!-- Côté opposé -->
  <line x1="120" y1="100" x2="120" y2="290" stroke="#64748b" stroke-width="4" stroke-dasharray="6 3"/>
  <text x="105" y="200" text-anchor="end" fill="#475569" font-size="13" font-family="system-ui" font-weight="700">
    Côté opposé à B [AC]
  </text>

  <!-- Sommets -->
  <text x="105" y="305" fill="#dc2626" font-size="16" font-weight="900">A (Angle droit)</text>
  <text x="455" y="298" fill="#1d4ed8" font-size="18" font-weight="900">B</text>
  <text x="110" y="90" fill="#3730a3" font-size="18" font-weight="900">C</text>

  <!-- PANNEAU FORMULES ET MNÉMOTECHNIQUE -->
  <g transform="translate(480, 80)">
    <rect width="255" height="305" rx="12" fill="#ffffff" stroke="#4338ca" stroke-width="2"/>
    <rect width="255" height="34" rx="12" fill="#4338ca"/>
    <text x="127" y="23" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800">DÉFINITION & PROPRIÉTÉS</text>

    <text x="20" y="65" fill="#1e1b4b" font-size="13" font-weight="700">Formule fondamentale :</text>
    <rect x="15" y="78" width="225" height="54" rx="8" fill="#eef2ff" stroke="#818cf8" stroke-width="1.5"/>
    <text x="127" y="102" text-anchor="middle" fill="#312e81" font-size="15" font-weight="900">
      cos(B) = Côté adjacent / Hypoténuse
    </text>
    <text x="127" y="122" text-anchor="middle" fill="#4338ca" font-size="14" font-weight="800">
      cos(B) = AB / BC
    </text>

    <text x="20" y="160" fill="#1e1b4b" font-size="13" font-weight="700">Propriétés clés :</text>
    <text x="25" y="182" fill="#3730a3" font-size="12" font-weight="600">• Sans unité</text>
    <text x="25" y="202" fill="#3730a3" font-size="12" font-weight="600">• 0 &lt; cos(Angle aigu) &lt; 1</text>
    <text x="25" y="222" fill="#b91c1c" font-size="12" font-weight="800">• Calculatrice en mode DEG</text>

    <rect x="15" y="240" width="225" height="50" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
    <text x="127" y="260" text-anchor="middle" fill="#86198f" font-size="12" font-weight="800">
      Mnémotechnique : CAH
    </text>
    <text x="127" y="278" text-anchor="middle" fill="#701a75" font-size="11" font-weight="600">
      (Cosinus = Adjacent / Hypoténuse)
    </text>
  </g>
</svg>
`;

// -------------------------------------------------------------------------
// 4. MATHÉMATIQUES — GÉOMÉTRIE : THÉORÈME DE THALÈS
// -------------------------------------------------------------------------
export const SVG_THALES_CONFIGURATION = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" className="w-full h-auto">
  <rect width="760" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#047857"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIGURE 4 : THÉORÈME DE THALÈS — CONFIGURATION TRIANGULAIRE DIRECTE
  </text>

  <!-- Triangle ABC grand (A=380, 80; B=140, 340; C=620, 340) -->
  <polygon points="380,80 140,340 620,340" fill="#ecfdf5" stroke="#047857" stroke-width="3"/>
  
  <!-- Droite parallèle (MN) (M=240, 232; N=520, 232) -->
  <polygon points="380,80 240,232 520,232" fill="#a7f3d0" fill-opacity="0.45"/>
  <line x1="80" y1="232" x2="680" y2="232" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 3"/>
  <line x1="240" y1="232" x2="520" y2="232" stroke="#1d4ed8" stroke-width="4"/>

  <!-- Droite (BC) -->
  <line x1="80" y1="340" x2="680" y2="340" stroke="#059669" stroke-width="4"/>

  <!-- Flèches de parallélisme -->
  <path d="M 370 226 L 385 232 L 370 238" fill="none" stroke="#dc2626" stroke-width="3"/>
  <path d="M 370 334 L 385 340 L 370 346" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="400" y="226" fill="#dc2626" font-size="12" font-weight="800">(MN) // (BC)</text>

  <!-- Sommets et Points -->
  <circle cx="380" cy="80" r="6" fill="#047857" stroke="#ffffff" stroke-width="2"/>
  <text x="380" y="70" text-anchor="middle" fill="#047857" font-size="18" font-weight="900">A (Sommet commun)</text>

  <circle cx="240" cy="232" r="6" fill="#1d4ed8" stroke="#ffffff" stroke-width="2"/>
  <text x="215" y="235" fill="#1d4ed8" font-size="16" font-weight="900">M</text>

  <circle cx="520" cy="232" r="6" fill="#1d4ed8" stroke="#ffffff" stroke-width="2"/>
  <text x="535" y="235" fill="#1d4ed8" font-size="16" font-weight="900">N</text>

  <circle cx="140" cy="340" r="6" fill="#047857" stroke="#ffffff" stroke-width="2"/>
  <text x="120" y="355" fill="#047857" font-size="18" font-weight="900">B</text>

  <circle cx="620" cy="340" r="6" fill="#047857" stroke="#ffffff" stroke-width="2"/>
  <text x="635" y="355" fill="#047857" font-size="18" font-weight="900">C</text>

  <!-- ENCADRÉ FORMULE DES 3 RAPPORTS -->
  <rect x="130" y="362" width="500" height="46" rx="10" fill="#ffffff" stroke="#047857" stroke-width="2"/>
  <text x="380" y="390" text-anchor="middle" fill="#065f46" font-size="16" font-weight="900">
    Si (MN) // (BC), alors : AM / AB = AN / AC = MN / BC
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// 5. MATHÉMATIQUES — GÉOMÉTRIE : LE THÉORÈME DES MILIEUX
// -------------------------------------------------------------------------
export const SVG_THEOREME_MILIEUX = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 410" width="100%" height="100%" className="w-full h-auto">
  <rect width="760" height="410" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#c2410c"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIGURE 5 : LE THÉORÈME DES MILIEUX DANS UN TRIANGLE
  </text>

  <!-- Triangle ABC -->
  <polygon points="380,80 140,330 620,330" fill="#fff7ed" stroke="#9a3412" stroke-width="3"/>
  
  <!-- Segment des milieux [IJ] -->
  <line x1="260" y1="205" x2="500" y2="205" stroke="#ea580c" stroke-width="5"/>

  <!-- Codage milieu I sur [AB] (double barre) -->
  <line x1="315" y1="135" x2="325" y2="150" stroke="#0284c7" stroke-width="3"/>
  <line x1="319" y1="132" x2="329" y2="147" stroke="#0284c7" stroke-width="3"/>
  <line x1="195" y1="260" x2="205" y2="275" stroke="#0284c7" stroke-width="3"/>
  <line x1="199" y1="257" x2="209" y2="272" stroke="#0284c7" stroke-width="3"/>

  <!-- Codage milieu J sur [AC] (deux petits cercles) -->
  <circle cx="440" cy="142" r="4" fill="#16a34a"/>
  <circle cx="560" cy="268" r="4" fill="#16a34a"/>

  <!-- Sommets et Milieux -->
  <circle cx="380" cy="80" r="6" fill="#9a3412" stroke="#ffffff" stroke-width="2"/>
  <text x="380" y="70" text-anchor="middle" fill="#9a3412" font-size="18" font-weight="900">A</text>

  <circle cx="260" cy="205" r="7" fill="#ea580c" stroke="#ffffff" stroke-width="2"/>
  <text x="210" y="210" fill="#ea580c" font-size="17" font-weight="900">I (Milieu de [AB])</text>

  <circle cx="500" cy="205" r="7" fill="#ea580c" stroke="#ffffff" stroke-width="2"/>
  <text x="515" y="210" fill="#ea580c" font-size="17" font-weight="900">J (Milieu de [AC])</text>

  <circle cx="140" cy="330" r="6" fill="#9a3412" stroke="#ffffff" stroke-width="2"/>
  <text x="120" y="350" fill="#9a3412" font-size="18" font-weight="900">B</text>

  <circle cx="620" cy="330" r="6" fill="#9a3412" stroke="#ffffff" stroke-width="2"/>
  <text x="635" y="350" fill="#9a3412" font-size="18" font-weight="900">C</text>

  <!-- PANNEAU PROPRIÉTÉS CLÉS -->
  <rect x="80" y="348" width="600" height="48" rx="10" fill="#ffffff" stroke="#c2410c" stroke-width="2"/>
  <text x="380" y="370" text-anchor="middle" fill="#9a3412" font-size="14" font-weight="800">
    PROPRIÉTÉ 1 : (IJ) // (BC)   •   PROPRIÉTÉ 2 : IJ = 1/2 BC (ou BC = 2 × IJ)
  </text>
  <text x="380" y="388" text-anchor="middle" fill="#ea580c" font-size="12" font-weight="700">
    Réciproque : Si une droite passe par le milieu I et est parallèle à (BC), elle coupe [AC] en son milieu J.
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// 6. MATHÉMATIQUES — GÉOMÉTRIE : LA TRANSLATION
// -------------------------------------------------------------------------
export const SVG_TRANSLATION = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 410" width="100%" height="100%" className="w-full h-auto">
  <defs>
    <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#e11d48"/>
    </marker>
  </defs>
  <rect width="760" height="410" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#be123c"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIGURE 6 : LA TRANSLATION ET SES PROPRIÉTÉS VECTORIELLES
  </text>

  <!-- Vecteur de référence u -->
  <g transform="translate(60, 75)">
    <rect width="210" height="55" rx="8" fill="#ffffff" stroke="#fda4af" stroke-width="1.5"/>
    <line x1="20" y1="28" x2="160" y2="28" stroke="#e11d48" stroke-width="4" marker-end="url(#arrowHead)"/>
    <text x="90" y="20" text-anchor="middle" fill="#be123c" font-size="14" font-weight="900">Vecteur de glissement u</text>
    <text x="90" y="45" text-anchor="middle" fill="#9f1239" font-size="10" font-weight="600">Direction • Sens • Distance</text>
  </g>

  <!-- Triangle ABC initial -->
  <polygon points="120,290 260,290 180,180" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
  <text x="100" y="300" fill="#1d4ed8" font-size="16" font-weight="900">A</text>
  <text x="270" y="300" fill="#1d4ed8" font-size="16" font-weight="900">B</text>
  <text x="175" y="165" fill="#1d4ed8" font-size="16" font-weight="900">C</text>

  <!-- Vecteurs de translation AA', BB', CC' -->
  <line x1="120" y1="290" x2="380" y2="290" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrowHead)"/>
  <line x1="260" y1="290" x2="520" y2="290" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrowHead)"/>
  <line x1="180" y1="180" x2="440" y2="180" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrowHead)"/>

  <!-- Triangle image A'B'C' -->
  <polygon points="380,290 520,290 440,180" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
  <text x="370" y="310" fill="#15803d" font-size="16" font-weight="900">A'</text>
  <text x="530" y="310" fill="#15803d" font-size="16" font-weight="900">B'</text>
  <text x="435" y="165" fill="#15803d" font-size="16" font-weight="900">C'</text>

  <!-- Parallélogramme ABB'A' en évidence -->
  <polygon points="120,290 260,290 520,290 380,290" fill="#fef08a" fill-opacity="0.3"/>

  <!-- PANNEAU CONSERVATION -->
  <rect x="60" y="340" width="640" height="52" rx="10" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
  <text x="380" y="362" text-anchor="middle" fill="#9f1239" font-size="13" font-weight="800">
    CARACTÉRISATION : Si B' est l'image de B par la translation qui transforme A en A', alors ABB'A' est un parallélogramme.
  </text>
  <text x="380" y="380" text-anchor="middle" fill="#475569" font-size="12" font-weight="600">
    Conservations strictes : longueurs (A'B' = AB), angles, alignement, parallélisme et aires.
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// 7. MATHÉMATIQUES — GÉOMÉTRIE : PYRAMIDE ET CÔNE DE RÉVOLUTION (ESPACE)
// -------------------------------------------------------------------------
export const SVG_PYRAMIDE_CONE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" className="w-full h-auto">
  <rect width="760" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#475569"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIGURE 7 : GÉOMÉTRIE DANS L'ESPACE — PYRAMIDE RÉGULIÈRE ET CÔNE DE RÉVOLUTION
  </text>

  <!-- PARTIE GAUCHE : PYRAMIDE RÉGULIÈRE À BASE CARRÉE -->
  <g transform="translate(35, 65)">
    <rect width="330" height="330" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
    <text x="165" y="26" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="800">1. PYRAMIDE RÉGULIÈRE</text>

    <!-- Base en perspective : A=(50, 240), B=(190, 240), C=(260, 190), D=(120, 190) -->
    <!-- Arêtes visibles et cachées -->
    <line x1="50" y1="240" x2="190" y2="240" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="190" y1="240" x2="260" y2="190" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="260" y1="190" x2="120" y2="190" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3"/>
    <line x1="120" y1="190" x2="50" y2="240" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3"/>

    <!-- Centre O et Hauteur h = [SO] -->
    <!-- O = (155, 215), S = (155, 70) -->
    <line x1="155" y1="70" x2="155" y2="215" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 2"/>
    <rect x="155" y="205" width="12" height="10" fill="#fecaca" stroke="#dc2626" stroke-width="1"/>
    
    <!-- Arêtes latérales -->
    <line x1="155" y1="70" x2="50" y2="240" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="155" y1="70" x2="190" y2="240" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="155" y1="70" x2="260" y2="190" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="155" y1="70" x2="120" y2="190" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3"/>

    <circle cx="155" cy="70" r="5" fill="#dc2626"/>
    <text x="155" y="60" text-anchor="middle" fill="#dc2626" font-size="15" font-weight="900">S (Sommet)</text>
    <text x="140" y="145" text-anchor="end" fill="#dc2626" font-size="13" font-weight="800">Hauteur h</text>
    <text x="170" y="222" fill="#475569" font-size="12" font-weight="700">O</text>

    <!-- Sommets base -->
    <text x="35" y="248" fill="#0f172a" font-size="13" font-weight="800">A</text>
    <text x="195" y="255" fill="#0f172a" font-size="13" font-weight="800">B</text>
    <text x="270" y="195" fill="#0f172a" font-size="13" font-weight="800">C</text>

    <rect x="15" y="260" width="300" height="55" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="165" y="280" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="700">Volume d'une pyramide :</text>
    <text x="165" y="302" text-anchor="middle" fill="#2563eb" font-size="15" font-weight="900">V = (Aire de la Base × h) / 3</text>
  </g>

  <!-- PARTIE DROITE : CÔNE DE RÉVOLUTION -->
  <g transform="translate(395, 65)">
    <rect width="330" height="330" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
    <text x="165" y="26" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="800">2. CÔNE DE RÉVOLUTION</text>

    <!-- Base circulaire en perspective (ellipse) -->
    <!-- Centre O = (165, 220), rx=110, ry=35 -->
    <ellipse cx="165" cy="220" rx="110" ry="35" fill="#f1f5f9" stroke="#0f172a" stroke-width="2" stroke-dasharray="none"/>
    <!-- Demi-ellipse arrière cachée -->
    <path d="M 55 220 A 110 35 0 0 1 275 220" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3"/>

    <!-- Sommet S = (165, 70) -->
    <!-- Génératrices visibles -->
    <line x1="165" y1="70" x2="55" y2="220" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="165" y1="70" x2="275" y2="220" stroke="#0f172a" stroke-width="2.5"/>

    <!-- Hauteur [SO] -->
    <line x1="165" y1="70" x2="165" y2="220" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 2"/>
    <!-- Rayon [OB] (O=(165,220), B=(275, 220)) -->
    <line x1="165" y1="220" x2="275" y2="220" stroke="#2563eb" stroke-width="3"/>
    <rect x="165" y="210" width="10" height="10" fill="#fecaca" stroke="#dc2626" stroke-width="1"/>

    <circle cx="165" cy="70" r="5" fill="#dc2626"/>
    <text x="165" y="60" text-anchor="middle" fill="#dc2626" font-size="15" font-weight="900">S (Sommet)</text>
    <text x="150" y="145" text-anchor="end" fill="#dc2626" font-size="13" font-weight="800">Hauteur h</text>
    <text x="220" y="214" text-anchor="middle" fill="#2563eb" font-size="13" font-weight="800">Rayon R</text>
    <text x="235" y="140" fill="#7c3aed" font-size="13" font-weight="800">Génératrice g</text>
    <text x="155" y="235" fill="#475569" font-size="12" font-weight="700">O</text>

    <rect x="15" y="260" width="300" height="55" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="165" y="278" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="700">Pythagore : g² = h² + R²</text>
    <text x="165" y="302" text-anchor="middle" fill="#7c3aed" font-size="15" font-weight="900">V = (π × R² × h) / 3</text>
  </g>
</svg>
`;

// -------------------------------------------------------------------------
// 8. PHYSIQUE-CHIMIE 4ÈME — CHIMIE : MODÈLE MOLÉCULAIRE DE L'EAU (FIG 1)
// -------------------------------------------------------------------------
export const SVG_MOLECULE_EAU = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 430" width="100%" height="100%" className="w-full h-auto">
  <defs>
    <!-- Dégradé sphérique pour atome Oxygène (Rouge) -->
    <radialGradient id="gradOxy" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="40%" stop-color="#ef4444"/>
      <stop offset="85%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#7f1d1d"/>
    </radialGradient>
    <!-- Dégradé sphérique pour atome Hydrogène (Blanc/Gris) -->
    <radialGradient id="gradHydro" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#e2e8f0"/>
      <stop offset="90%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#64748b"/>
    </radialGradient>
    <filter id="shadowMolecule" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="6" stdDeviation="6" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="760" height="430" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>

  <!-- BANDEAU TITRE -->
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#0369a1"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIG 1 : MODÈLE MOLÉCULAIRE COMPACT ET ÉCLATÉ DE L'EAU (H₂O)
  </text>

  <!-- ZONE PRINCIPALE : MODÈLE TRIDIMENSIONNEL H2O -->
  <!-- Oxygène central : (380, 160) Rayon 55 -->
  <!-- Hydrogène 1 gauche : (305, 235) Rayon 36 -->
  <!-- Hydrogène 2 droite : (455, 235) Rayon 36 -->
  <!-- Liaisons covalentes en tiretées -->
  <line x1="380" y1="160" x2="305" y2="235" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
  <line x1="380" y1="160" x2="455" y2="235" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>

  <!-- Arc de mesure d'angle 104.5° -->
  <path d="M 335 205 A 60 60 0 0 1 425 205" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 2"/>
  <rect x="345" y="195" width="70" height="24" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="380" y="212" text-anchor="middle" fill="#b45309" font-size="13" font-weight="900">104,5°</text>

  <!-- Sphère Hydrogène gauche -->
  <circle cx="305" cy="235" r="38" fill="url(#gradHydro)" filter="url(#shadowMolecule)" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="305" y="243" text-anchor="middle" fill="#334155" font-size="22" font-weight="900">H</text>

  <!-- Sphère Hydrogène droite -->
  <circle cx="455" cy="235" r="38" fill="url(#gradHydro)" filter="url(#shadowMolecule)" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="455" y="243" text-anchor="middle" fill="#334155" font-size="22" font-weight="900">H</text>

  <!-- Sphère Oxygène centrale (dessinée après pour être au premier plan) -->
  <circle cx="380" cy="150" r="56" fill="url(#gradOxy)" filter="url(#shadowMolecule)" stroke="#fca5a5" stroke-width="2"/>
  <text x="380" y="160" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="900">O</text>

  <!-- Légendes fléchées -->
  <text x="180" y="155" text-anchor="end" fill="#b91c1c" font-size="14" font-weight="800">
    Atome d'Oxygène (O)
  </text>
  <line x1="190" y1="150" x2="315" y2="150" stroke="#b91c1c" stroke-width="2" stroke-dasharray="3 3"/>

  <text x="180" y="240" text-anchor="end" fill="#475569" font-size="14" font-weight="800">
    Atomes d'Hydrogène (H)
  </text>
  <line x1="190" y1="235" x2="260" y2="235" stroke="#475569" stroke-width="2" stroke-dasharray="3 3"/>

  <!-- Encadré descriptif de droite -->
  <g transform="translate(535, 75)">
    <rect width="195" height="190" rx="10" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
    <rect width="195" height="28" rx="10" fill="#0284c7"/>
    <text x="97" y="19" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="800">CARTE D'IDENTITÉ H₂O</text>
    
    <text x="12" y="52" fill="#0f172a" font-size="12" font-weight="700">Formule : <tspan fill="#0284c7" font-weight="900">H₂O</tspan></text>
    <text x="12" y="74" fill="#0f172a" font-size="11">1 atome d'Oxygène</text>
    <text x="12" y="92" fill="#0f172a" font-size="11">2 atomes d'Hydrogène</text>
    <line x1="10" y1="104" x2="185" y2="104" stroke="#e2e8f0"/>
    <text x="12" y="124" fill="#0f172a" font-size="11" font-weight="700">Propriétés sous 1 atm :</text>
    <text x="12" y="144" fill="#0369a1" font-size="11">• Fusion : <tspan font-weight="800">0 °C</tspan></text>
    <text x="12" y="162" fill="#b91c1c" font-size="11">• Ébullition : <tspan font-weight="800">100 °C</tspan></text>
    <text x="12" y="180" fill="#15803d" font-size="11">• Masse vol. : <tspan font-weight="800">1 kg / L</tspan></text>
  </g>

  <!-- TROIS ÉTATS DE LA MATIÈRE AU NIVEAU MICROSCOPIQUE -->
  <g transform="translate(30, 290)">
    <rect width="700" height="120" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- État Solide -->
    <rect x="15" y="12" width="210" height="96" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="120" y="32" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="800">ÉTAT SOLIDE (Glace)</text>
    <text x="120" y="52" text-anchor="middle" fill="#1e40af" font-size="11">Molécules ordonnées, liées</text>
    <text x="120" y="70" text-anchor="middle" fill="#1e40af" font-size="11">et très rapprochées</text>
    <text x="120" y="94" text-anchor="middle" fill="#2563eb" font-size="11" font-weight="800">Forme & Volume propres</text>

    <!-- État Liquide -->
    <rect x="245" y="12" width="210" height="96" rx="8" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="350" y="32" text-anchor="middle" fill="#15803d" font-size="12" font-weight="800">ÉTAT LIQUIDE (Eau)</text>
    <text x="350" y="52" text-anchor="middle" fill="#166534" font-size="11">Molécules désordonnées,</text>
    <text x="350" y="70" text-anchor="middle" fill="#166534" font-size="11">mobiles et compactes</text>
    <text x="350" y="94" text-anchor="middle" fill="#16a34a" font-size="11" font-weight="800">Volume propre, pas de forme</text>

    <!-- État Gazeux -->
    <rect x="475" y="12" width="210" height="96" rx="8" fill="#fff7ed" stroke="#fed7aa"/>
    <text x="580" y="32" text-anchor="middle" fill="#c2410c" font-size="12" font-weight="800">ÉTAT GAZEUX (Vapeur)</text>
    <text x="580" y="52" text-anchor="middle" fill="#9a3412" font-size="11">Molécules très espacées,</text>
    <text x="580" y="70" text-anchor="middle" fill="#9a3412" font-size="11">très agitées et libres</text>
    <text x="580" y="94" text-anchor="middle" fill="#ea580c" font-size="11" font-weight="800">Compressible & Expansible</text>
  </g>
</svg>
`;

// -------------------------------------------------------------------------
// 9. PHYSIQUE-CHIMIE 4ÈME — CHIMIE : FILTRATION ET DISTILLATION
// -------------------------------------------------------------------------
export const SVG_FILTRATION_DISTILLATION = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" className="w-full h-auto">
  <rect width="760" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>
  
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#0284c7"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    MÉTHODES DE SÉPARATION : MONTAGES DE FILTRATION ET DE DISTILLATION
  </text>

  <!-- MONTAGE 1 : FILTRATION -->
  <g transform="translate(35, 65)">
    <rect width="330" height="330" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="165" y="26" text-anchor="middle" fill="#0369a1" font-size="14" font-weight="800">1. MONTAGE DE FILTRATION</text>

    <!-- Support potence -->
    <rect x="40" y="60" width="8" height="230" fill="#64748b"/>
    <rect x="25" y="280" width="60" height="12" fill="#334155"/>
    <!-- Anneau support -->
    <rect x="48" y="120" width="65" height="6" fill="#64748b"/>

    <!-- Entonnoir -->
    <polygon points="80,120 180,120 135,175 135,210 125,210 125,175" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <!-- Papier filtre plissé avec résidu marron -->
    <polygon points="90,123 170,123 130,170" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <circle cx="130" cy="145" r="10" fill="#78350f" fill-opacity="0.8"/>
    <circle cx="140" cy="140" r="6" fill="#78350f" fill-opacity="0.8"/>
    <text x="200" y="140" fill="#92400e" font-size="12" font-weight="800">↳ Résidu solide</text>
    <text x="200" y="156" fill="#92400e" font-size="10">(Boue / Particules)</text>

    <!-- Gouttes de liquide -->
    <circle cx="130" cy="220" r="3" fill="#38bdf8"/>
    <circle cx="130" cy="232" r="3" fill="#38bdf8"/>

    <!-- Bécher en verre récepteur -->
    <rect x="95" y="215" width="70" height="70" rx="4" fill="none" stroke="#0284c7" stroke-width="2"/>
    <rect x="97" y="245" width="66" height="38" rx="2" fill="#bae6fd" fill-opacity="0.7"/>
    <text x="180" y="260" fill="#0369a1" font-size="12" font-weight="800">↳ Filtrat limpide</text>
    <text x="180" y="275" fill="#0369a1" font-size="10">(Mélange homogène)</text>

    <text x="165" y="312" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="700">
      Sépare solide et liquide d'un mélange hétérogène.
    </text>
  </g>

  <!-- MONTAGE 2 : DISTILLATION -->
  <g transform="translate(395, 65)">
    <rect width="330" height="330" rx="12" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="165" y="26" text-anchor="middle" fill="#0369a1" font-size="14" font-weight="800">2. MONTAGE DE DISTILLATION</text>

    <!-- Chauffe-ballon -->
    <rect x="40" y="200" width="75" height="50" rx="6" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
    <text x="77" y="230" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="800">Chauffe-ballon</text>

    <!-- Ballon à fond rond -->
    <circle cx="77" cy="180" r="32" fill="#fed7aa" fill-opacity="0.5" stroke="#ea580c" stroke-width="2"/>
    <rect x="71" y="115" width="12" height="35" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
    <text x="77" y="195" text-anchor="middle" fill="#c2410c" font-size="9" font-weight="700">Eau salée (100°C)</text>

    <!-- Thermomètre -->
    <line x1="77" y1="90" x2="77" y2="135" stroke="#dc2626" stroke-width="2"/>
    <text x="77" y="85" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="900">100 °C</text>

    <!-- Tube réfrigérant droit en biais -->
    <line x1="83" y1="125" x2="230" y2="210" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
    <line x1="83" y1="125" x2="230" y2="210" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
    
    <!-- Circulation eau froide -->
    <text x="160" y="145" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="800">Réfrigérant à eau</text>
    <text x="210" y="180" fill="#0284c7" font-size="9">Entrée eau froide ↳</text>

    <!-- Erlenmeyer de collecte -->
    <polygon points="225,230 255,230 270,275 210,275" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <polygon points="214,258 266,258 269,273 211,273" fill="#38bdf8" fill-opacity="0.8"/>
    <text x="240" y="295" text-anchor="middle" fill="#0369a1" font-size="12" font-weight="800">Distillat (Eau pure)</text>

    <text x="165" y="315" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="700">
      Ébullition + Condensation = Obtention d'un corps pur !
    </text>
  </g>
</svg>
`;

// -------------------------------------------------------------------------
// 10. PHYSIQUE-CHIMIE 4ÈME — PHYSIQUE : CIRCUIT ÉLECTRIQUE SIMPLE (FIG 2)
// -------------------------------------------------------------------------
export const SVG_CIRCUIT_SIMPLE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" className="w-full h-auto">
  <defs>
    <filter id="glowLamp" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="760" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>

  <!-- BANDEAU TITRE -->
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#4338ca"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIG 2 : SCHÉMA NORMALISÉ D'UN CIRCUIT ÉLECTRIQUE SIMPLE EN SÉRIE
  </text>

  <!-- SCHÉMA ÉLECTRIQUE NORMALISÉ (BOUCLE RECTANGULAIRE) -->
  <!-- Rectangle du circuit : x=120, y=90, w=400, h=200 -->
  <!-- Ligne supérieure avec interrupteur fermé -->
  <line x1="120" y1="90" x2="280" y2="90" stroke="#1e293b" stroke-width="4"/>
  <!-- Interrupteur fermé (deux plots et barre fermée) -->
  <circle cx="280" cy="90" r="5" fill="#1e293b"/>
  <line x1="280" y1="90" x2="340" y2="90" stroke="#15803d" stroke-width="4"/>
  <circle cx="340" cy="90" r="5" fill="#1e293b"/>
  <text x="310" y="75" text-anchor="middle" fill="#15803d" font-size="13" font-weight="800">Interrupteur K (Fermé)</text>
  <line x1="340" y1="90" x2="520" y2="90" stroke="#1e293b" stroke-width="4"/>

  <!-- Côté droit descendant vers la lampe -->
  <line x1="520" y1="90" x2="520" y2="165" stroke="#1e293b" stroke-width="4"/>
  <!-- Symbole Lampe L : Cercle avec croix X -->
  <g transform="translate(520, 190)">
    <circle cx="0" cy="0" r="28" fill="#fef08a" stroke="#eab308" stroke-width="3" filter="url(#glowLamp)"/>
    <line x1="-19" y1="-19" x2="19" y2="19" stroke="#b45309" stroke-width="3.5"/>
    <line x1="-19" y1="19" x2="19" y2="-19" stroke="#b45309" stroke-width="3.5"/>
  </g>
  <text x="560" y="195" fill="#b45309" font-size="14" font-weight="800">Lampe L</text>
  <text x="560" y="212" fill="#15803d" font-size="12" font-weight="700">(Allumée ✓)</text>
  <line x1="520" y1="218" x2="520" y2="290" stroke="#1e293b" stroke-width="4"/>

  <!-- Ligne inférieure -->
  <line x1="520" y1="290" x2="120" y2="290" stroke="#1e293b" stroke-width="4"/>

  <!-- Côté gauche montant avec le générateur (Pile) ou G -->
  <line x1="120" y1="290" x2="120" y2="215" stroke="#1e293b" stroke-width="4"/>
  <!-- Symbole Pile / Générateur normalisé (grand trait fin +, petit trait épais -) -->
  <g transform="translate(120, 190)">
    <!-- Borne + (grand trait fin) -->
    <line x1="-24" y1="-12" x2="24" y2="-12" stroke="#dc2626" stroke-width="3.5"/>
    <!-- Borne - (court trait épais) -->
    <line x1="-14" y1="12" x2="14" y2="12" stroke="#1e293b" stroke-width="6"/>
  </g>
  <text x="75" y="175" fill="#dc2626" font-size="18" font-weight="900">+</text>
  <text x="75" y="210" fill="#1e293b" font-size="20" font-weight="900">−</text>
  <text x="60" y="195" text-anchor="end" fill="#dc2626" font-size="14" font-weight="800">Pile / Générateur G</text>
  <line x1="120" y1="165" x2="120" y2="90" stroke="#1e293b" stroke-width="4"/>

  <!-- PANNEAU DROIT : SYMBOLES NORMALISÉS DE BASE -->
  <g transform="translate(560, 65)">
    <rect width="180" height="330" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="180" height="28" rx="10" fill="#312e81"/>
    <text x="90" y="19" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">SYMBOLES NORMALISÉS</text>

    <!-- Pile -->
    <g transform="translate(20, 50)">
      <line x1="0" y1="15" x2="40" y2="15" stroke="#dc2626" stroke-width="2"/>
      <line x1="8" y1="25" x2="32" y2="25" stroke="#1e293b" stroke-width="4"/>
      <text x="50" y="22" fill="#0f172a" font-size="11" font-weight="700">Pile / Générateur</text>
    </g>

    <!-- Lampe -->
    <g transform="translate(20, 95)">
      <circle cx="20" cy="15" r="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
      <line x1="10" y1="5" x2="30" y2="25" stroke="#ca8a04" stroke-width="2"/>
      <line x1="10" y1="25" x2="30" y2="5" stroke="#ca8a04" stroke-width="2"/>
      <text x="50" y="20" fill="#0f172a" font-size="11" font-weight="700">Lampe</text>
    </g>

    <!-- Interrupteur Ouvert -->
    <g transform="translate(20, 140)">
      <circle cx="10" cy="15" r="3" fill="#1e293b"/>
      <line x1="10" y1="15" x2="30" y2="5" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="35" cy="15" r="3" fill="#1e293b"/>
      <text x="50" y="20" fill="#0f172a" font-size="11" font-weight="700">Inter. ouvert</text>
    </g>

    <!-- Moteur -->
    <g transform="translate(20, 185)">
      <circle cx="20" cy="15" r="14" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
      <text x="20" y="20" text-anchor="middle" fill="#4338ca" font-size="13" font-weight="900">M</text>
      <text x="50" y="20" fill="#0f172a" font-size="11" font-weight="700">Moteur</text>
    </g>

    <!-- Résistance -->
    <g transform="translate(20, 230)">
      <rect x="5" y="6" width="30" height="18" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <text x="50" y="20" fill="#0f172a" font-size="11" font-weight="700">Résistance</text>
    </g>

    <!-- Fils de connexion -->
    <g transform="translate(20, 275)">
      <line x1="5" y1="15" x2="35" y2="15" stroke="#1e293b" stroke-width="3"/>
      <text x="50" y="20" fill="#0f172a" font-size="11" font-weight="700">Fils conducteurs</text>
    </g>
  </g>

  <!-- BANDEAU INFÉRIEUR : RÈGLE CONDUCTEURS ET ISOLANTS -->
  <rect x="30" y="325" width="510" height="70" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="45" y="348" fill="#1e293b" font-size="12" font-weight="800">
    • Conducteurs : laissent passer le courant (métaux : cuivre, fer, alu, graphite, eau salée).
  </text>
  <text x="45" y="368" fill="#1e293b" font-size="12" font-weight="800">
    • Isolants : empêchent le passage du courant (matières plastiques, bois sec, verre, air).
  </text>
  <text x="45" y="386" fill="#dc2626" font-size="11" font-weight="800">
    Danger : court-circuit si les 2 bornes de la pile sont reliées sans récepteur !
  </text>
</svg>
`;

// -------------------------------------------------------------------------
// 11. PHYSIQUE-CHIMIE 4ÈME — PHYSIQUE : LE SENS DU COURANT ET LA DIODE / DEL
// -------------------------------------------------------------------------
export const SVG_SENS_COURANT_DIODE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" width="100%" height="100%" className="w-full h-auto">
  <defs>
    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect width="760" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="2"/>

  <!-- BANDEAU TITRE -->
  <rect x="20" y="14" width="720" height="38" rx="8" fill="#b91c1c"/>
  <text x="380" y="39" text-anchor="middle" fill="#ffffff" font-size="15" font-family="system-ui" font-weight="800">
    FIG 3 : SENS CONVENTIONNEL DU COURANT ET FONCTIONNEMENT DE LA DIODE / DEL
  </text>

  <!-- BANDEAU RÈGLE DU SENS CONVENTIONNEL -->
  <rect x="30" y="60" width="700" height="40" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="380" y="85" text-anchor="middle" fill="#991b1b" font-size="13" font-weight="800">
    CONVENTION INTERNATIONALE : Le courant sort par la borne (+) de la pile et rentre par la borne (−).
  </text>

  <!-- MONTAGE 1 : SENS PASSANT (DEL ALLUMÉE) -->
  <g transform="translate(35, 110)">
    <rect width="330" height="285" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect width="330" height="30" rx="12" fill="#15803d"/>
    <text x="165" y="20" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800">
      MONTAGE A : SENS PASSANT (DEL Allumée ✓)
    </text>

    <!-- Circuit rectangle -->
    <!-- Haut avec Diode orientée de gauche à droite -->
    <line x1="40" y1="60" x2="130" y2="60" stroke="#1e293b" stroke-width="3.5"/>
    <line x1="60" y1="52" x2="110" y2="52" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowRed)"/>
    <text x="85" y="44" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="800">Courant I</text>

    <!-- Symbole Diode / DEL (Triangle pointe vers la droite + barre verticale) -->
    <g transform="translate(155, 60)">
      <polygon points="-16,-12 -16,12 8,0" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
      <line x1="8" y1="-14" x2="8" y2="14" stroke="#15803d" stroke-width="3"/>
      <!-- Flèches d'émission lumineuse DEL -->
      <line x1="0" y1="-15" x2="10" y2="-25" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowRed)"/>
      <line x1="10" y1="-12" x2="20" y2="-22" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowRed)"/>
    </g>

    <line x1="175" y1="60" x2="290" y2="60" stroke="#1e293b" stroke-width="3.5"/>
    <!-- Côté droit descendant vers la lampe -->
    <line x1="290" y1="60" x2="290" y2="130" stroke="#1e293b" stroke-width="3.5"/>
    <!-- Lampe allumée -->
    <circle cx="290" cy="150" r="18" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <line x1="277" y1="137" x2="303" y2="163" stroke="#ca8a04" stroke-width="2"/>
    <line x1="277" y1="163" x2="303" y2="137" stroke="#ca8a04" stroke-width="2"/>
    <line x1="290" y1="170" x2="290" y2="230" stroke="#1e293b" stroke-width="3.5"/>

    <!-- Bas -->
    <line x1="290" y1="230" x2="40" y2="230" stroke="#1e293b" stroke-width="3.5"/>
    <line x1="220" y1="238" x2="120" y2="238" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowRed)"/>

    <!-- Gauche avec Pile (+ en haut, - en bas) -->
    <line x1="40" y1="230" x2="40" y2="160" stroke="#1e293b" stroke-width="3.5"/>
    <!-- Symbole pile -->
    <line x1="25" y1="135" x2="55" y2="135" stroke="#dc2626" stroke-width="3"/>
    <text x="18" y="132" fill="#dc2626" font-size="14" font-weight="900">+</text>
    <line x1="30" y1="155" x2="50" y2="155" stroke="#1e293b" stroke-width="5"/>
    <text x="18" y="160" fill="#1e293b" font-size="16" font-weight="900">−</text>
    <line x1="40" y1="135" x2="40" y2="60" stroke="#1e293b" stroke-width="3.5"/>

    <rect x="15" y="248" width="300" height="28" rx="6" fill="#f0fdf4"/>
    <text x="165" y="267" text-anchor="middle" fill="#15803d" font-size="12" font-weight="800">
      La diode laisse passer : Le courant circule !
    </text>
  </g>

  <!-- MONTAGE 2 : SENS BLOQUANT (DEL ÉTEINTE) -->
  <g transform="translate(395, 110)">
    <rect width="330" height="285" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
    <rect width="330" height="30" rx="12" fill="#b91c1c"/>
    <text x="165" y="20" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800">
      MONTAGE B : SENS BLOQUANT (DEL Éteinte ✕)
    </text>

    <!-- Circuit rectangle -->
    <line x1="40" y1="60" x2="130" y2="60" stroke="#1e293b" stroke-width="3.5"/>

    <!-- Symbole Diode inversée (triangle pointe vers la gauche, barre à gauche) -->
    <g transform="translate(165, 60)">
      <polygon points="16,-12 16,12 -8,0" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <line x1="-8" y1="-14" x2="-8" y2="14" stroke="#dc2626" stroke-width="3.5"/>
      <!-- Croix rouge bloquant -->
      <line x1="-16" y1="-16" x2="16" y2="16" stroke="#dc2626" stroke-width="2"/>
      <line x1="-16" y1="16" x2="16" y2="-16" stroke="#dc2626" stroke-width="2"/>
    </g>

    <line x1="185" y1="60" x2="290" y2="60" stroke="#1e293b" stroke-width="3.5"/>
    <!-- Côté droit descendant vers la lampe -->
    <line x1="290" y1="60" x2="290" y2="130" stroke="#1e293b" stroke-width="3.5"/>
    <!-- Lampe éteinte -->
    <circle cx="290" cy="150" r="18" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
    <line x1="277" y1="137" x2="303" y2="163" stroke="#94a3b8" stroke-width="2"/>
    <line x1="277" y1="163" x2="303" y2="137" stroke="#94a3b8" stroke-width="2"/>
    <line x1="290" y1="170" x2="290" y2="230" stroke="#1e293b" stroke-width="3.5"/>

    <!-- Bas -->
    <line x1="290" y1="230" x2="40" y2="230" stroke="#1e293b" stroke-width="3.5"/>

    <!-- Gauche avec Pile (+ en haut, - en bas) -->
    <line x1="40" y1="230" x2="40" y2="160" stroke="#1e293b" stroke-width="3.5"/>
    <!-- Symbole pile -->
    <line x1="25" y1="135" x2="55" y2="135" stroke="#dc2626" stroke-width="3"/>
    <text x="18" y="132" fill="#dc2626" font-size="14" font-weight="900">+</text>
    <line x1="30" y1="155" x2="50" y2="155" stroke="#1e293b" stroke-width="5"/>
    <text x="18" y="160" fill="#1e293b" font-size="16" font-weight="900">−</text>
    <line x1="40" y1="135" x2="40" y2="60" stroke="#1e293b" stroke-width="3.5"/>

    <rect x="15" y="248" width="300" height="28" rx="6" fill="#fef2f2"/>
    <text x="165" y="267" text-anchor="middle" fill="#b91c1c" font-size="12" font-weight="800">
      La diode bloque le passage : Courant nul (I = 0) !
    </text>
  </g>
</svg>
`;
