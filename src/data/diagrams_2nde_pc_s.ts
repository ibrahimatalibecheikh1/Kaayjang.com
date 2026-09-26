// =========================================================================
// FIGURES VECTORIELLES ET SCHÉMAS SVG — PHYSIQUE-CHIMIE SECONDE S (SÉNÉGAL)
// Conformes au document officiel Seconde S et au programme national
// =========================================================================

export const SVG_P1_ELECTRISATION = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 240" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="220" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="32" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P1 : PHÉNOMÈNES D'ÉLECTRISATION & TRANSFERT DE CHARGES
  </text>
  <g transform="translate(60, 60)">
    <circle cx="90" cy="65" r="45" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="90" y="60" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#b45309">Na⁺</text>
    <text x="90" y="78" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#92400e">Perte d'électron</text>
  </g>
  <g transform="translate(250, 110)">
    <line x1="10" y1="15" x2="130" y2="15" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <text x="70" y="5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">Transfert d'e⁻</text>
    <text x="70" y="32" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">Attraction électrostatique (Coulomb)</text>
  </g>
  <g transform="translate(410, 60)">
    <circle cx="90" cy="65" r="45" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="90" y="60" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#1e40af">Cl⁻</text>
    <text x="90" y="78" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#1e3a8a">Gain d'électron</text>
  </g>
  <defs>
    <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/>
    </marker>
  </defs>
  <text x="325" y="210" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Loi de Coulomb : F = k · (|q₁ · q₂|) / r² (avec k = 9·10⁹ N·m²/C²)
  </text>
</svg>
`)}`;

export const SVG_P2_CIRCUIT = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 240" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="220" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P2 : CIRCUIT ÉLECTRIQUE SIMPLE ET SENS DU COURANT
  </text>
  <!-- Circuit rectangulaire -->
  <line x1="120" y1="70" x2="530" y2="70" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="530" y1="70" x2="530" y2="170" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="530" y1="170" x2="120" y2="170" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="120" y1="170" x2="120" y2="70" stroke="#0f172a" stroke-width="2.5"/>
  <!-- Générateur à gauche -->
  <g transform="translate(100, 100)">
    <rect x="0" y="0" width="40" height="40" fill="#ffffff"/>
    <line x1="10" y1="20" x2="20" y2="20" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="20" y1="5" x2="20" y2="35" stroke="#dc2626" stroke-width="3"/>
    <line x1="26" y1="10" x2="26" y2="30" stroke="#0f172a" stroke-width="4"/>
    <line x1="26" y1="20" x2="36" y2="20" stroke="#0f172a" stroke-width="2.5"/>
    <text x="14" y="0" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">+</text>
    <text x="30" y="0" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">-</text>
    <text x="-45" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Générateur</text>
  </g>
  <!-- Flèche sens conventionnel I -->
  <line x1="300" y1="65" x2="360" y2="65" stroke="#dc2626" stroke-width="3" marker-end="url(#arrowRed)"/>
  <text x="330" y="55" font-family="sans-serif" font-size="12" font-weight="800" fill="#dc2626">I (Courant)</text>
  <!-- Flèche mouvement des électrons -->
  <line x1="360" y1="175" x2="300" y2="175" stroke="#2563eb" stroke-width="3" marker-end="url(#arrowBlueP2)"/>
  <text x="330" y="195" font-family="sans-serif" font-size="11" font-weight="700" fill="#2563eb">Mouvement réel des électrons (e⁻)</text>
  <!-- Lampe à droite -->
  <g transform="translate(510, 100)">
    <circle cx="20" cy="20" r="16" fill="#fef9c3" stroke="#0f172a" stroke-width="2"/>
    <line x1="9" y1="9" x2="31" y2="31" stroke="#0f172a" stroke-width="2"/>
    <line x1="9" y1="31" x2="31" y2="9" stroke="#0f172a" stroke-width="2"/>
    <text x="45" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Lampe</text>
  </g>
  <defs>
    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
    </marker>
    <marker id="arrowBlueP2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/>
    </marker>
  </defs>
  <text x="325" y="222" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Le courant circule du pôle (+) vers le pôle (-) à l'extérieur du générateur.
  </text>
</svg>
`)}`;

export const SVG_P3_AMPEREMETRE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="180" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P3 : BRANCHEMENT D'UN AMPÈREMÈTRE EN SÉRIE & LOI DES NŒUDS
  </text>
  <line x1="70" y1="100" x2="280" y2="100" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="370" y1="100" x2="580" y2="100" stroke="#0f172a" stroke-width="2.5"/>
  <!-- Symbole Ampèremètre -->
  <circle cx="325" cy="100" r="30" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
  <text x="325" y="108" font-family="sans-serif" font-size="22" font-weight="900" text-anchor="middle" fill="#2563eb">A</text>
  <text x="270" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Borne A (+)</text>
  <text x="375" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Borne COM (-)</text>
  <text x="325" y="150" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">
    Loi des nœuds : Σ I_entrantes = Σ I_sortantes | Débit : I = ΔQ / Δt (A)
  </text>
  <text x="325" y="172" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    L'ampèremètre possède une résistance interne très faible (idéalement r ≈ 0 Ω) pour ne pas perturber le circuit.
  </text>
</svg>
`)}`;

export const SVG_P4_VOLTMETRE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 220" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="200" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P4 : BRANCHEMENT D'UN VOLTMÈTRE EN DÉRIVATION
  </text>
  <!-- Ligne principale avec dipôle -->
  <line x1="80" y1="80" x2="260" y2="80" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="260" y="65" width="130" height="30" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
  <text x="325" y="85" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a">Dipôle (R)</text>
  <line x1="390" y1="80" x2="570" y2="80" stroke="#0f172a" stroke-width="2.5"/>
  <!-- Points de connexion A et B -->
  <circle cx="230" cy="80" r="4" fill="#dc2626"/>
  <text x="230" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">A</text>
  <circle cx="420" cy="80" r="4" fill="#0f172a"/>
  <text x="420" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">B</text>
  <!-- Dérivation du voltmètre -->
  <line x1="230" y1="80" x2="230" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="230" y1="150" x2="295" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="420" y1="80" x2="420" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="420" y1="150" x2="355" y2="150" stroke="#2563eb" stroke-width="2"/>
  <circle cx="325" cy="150" r="26" fill="#ffffff" stroke="#2563eb" stroke-width="2.5"/>
  <text x="325" y="157" font-family="sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#2563eb">V</text>
  <text x="325" y="195" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Tension U_AB = V_A - V_B | Additivité en série : U_AC = U_AB + U_BC | Résistance interne très grande (R_V → ∞)
  </text>
</svg>
`)}`;

export const SVG_P5_DIPOLES_PASSIFS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 240" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="220" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P5 : CARACTÉRISTIQUE D'UN CONDUCTEUR OHMIQUE & ASSOCIATIONS
  </text>
  <!-- Repère U = f(I) -->
  <g transform="translate(80, 50)">
    <line x1="0" y1="130" x2="180" y2="130" stroke="#0f172a" stroke-width="2"/>
    <line x1="0" y1="130" x2="0" y2="10" stroke="#0f172a" stroke-width="2"/>
    <text x="185" y="135" font-family="sans-serif" font-size="11" font-weight="bold">I (A)</text>
    <text x="-5" y="5" font-family="sans-serif" font-size="11" font-weight="bold">U (V)</text>
    <!-- Droite U = R*I -->
    <line x1="0" y1="130" x2="160" y2="30" stroke="#dc2626" stroke-width="2.5"/>
    <text x="110" y="60" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">Pente = R</text>
    <text x="70" y="150" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Loi d'Ohm : U = R · I</text>
  </g>
  <!-- Schémas Série et Dérivation -->
  <g transform="translate(320, 55)">
    <rect width="280" height="65" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
    <text x="140" y="20" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#166534">ASSOCIATION SÉRIE</text>
    <text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#15803d">R_eq = R₁ + R₂ + ... + R_n</text>
  </g>
  <g transform="translate(320, 130)">
    <rect width="280" height="65" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="140" y="20" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#1e40af">ASSOCIATION DÉRIVATION</text>
    <text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#2563eb">1 / R_eq = 1 / R₁ + 1 / R₂</text>
  </g>
  <text x="325" y="218" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Effet Joule : P = R · I² = U² / R | Résistivité : R = ρ · L / S
  </text>
</svg>
`)}`;

export const SVG_P6_DIPOLES_ACTIFS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 230" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="210" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P6 : CARACTÉRISTIQUE D'UN GÉNÉRATEUR RÉEL & POINT DE FONCTIONNEMENT
  </text>
  <g transform="translate(90, 50)">
    <line x1="0" y1="120" x2="220" y2="120" stroke="#0f172a" stroke-width="2"/>
    <line x1="0" y1="120" x2="0" y2="10" stroke="#0f172a" stroke-width="2"/>
    <text x="225" y="125" font-family="sans-serif" font-size="11" font-weight="bold">I</text>
    <text x="-5" y="5" font-family="sans-serif" font-size="11" font-weight="bold">U</text>
    <!-- Droite Générateur U = E - rI -->
    <line x1="0" y1="25" x2="190" y2="110" stroke="#dc2626" stroke-width="2.5"/>
    <text x="10" y="20" font-family="sans-serif" font-size="11" font-weight="800" fill="#dc2626">E (f.é.m)</text>
    <text x="180" y="105" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">Pente = -r</text>
    <!-- Caractéristique Récepteur U = R*I -->
    <line x1="0" y1="120" x2="160" y2="30" stroke="#2563eb" stroke-width="2"/>
    <!-- Point de fonctionnement -->
    <circle cx="106" cy="67" r="5" fill="#16a34a"/>
    <text x="115" y="65" font-family="sans-serif" font-size="11" font-weight="900" fill="#16a34a">F (I_F, U_F)</text>
  </g>
  <g transform="translate(370, 60)">
    <rect width="230" height="110" rx="8" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5"/>
    <text x="115" y="25" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#c2410c">BILAN ÉNERGÉTIQUE</text>
    <text x="15" y="50" font-family="sans-serif" font-size="11" fill="#7c2d12">• U = E - r · I</text>
    <text x="15" y="70" font-family="sans-serif" font-size="11" fill="#7c2d12">• Puissance totale : P_tot = E · I</text>
    <text x="15" y="90" font-family="sans-serif" font-size="11" fill="#7c2d12">• Pertes Joule : P_J = r · I²</text>
    <text x="15" y="110" font-family="sans-serif" font-size="11" fill="#7c2d12">• Puissance utile : P_u = U · I</text>
  </g>
  <text x="325" y="202" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Au point de fonctionnement F : E - r · I_F = R · I_F ⇒ I_F = E / (R + r) (Loi de Pouillet)
  </text>
</svg>
`)}`;

export const SVG_P7_AOP = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 230" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="210" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P7 : AMPLIFICATEUR OPÉRATIONNEL EN RÉGIME LINÉAIRE
  </text>
  <!-- Schéma triangle AOP -->
  <g transform="translate(180, 50)">
    <polygon points="50,20 170,70 50,120" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5"/>
    <text x="65" y="45" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">-</text>
    <text x="65" y="105" font-family="sans-serif" font-size="14" font-weight="bold" fill="#16a34a">+</text>
    <!-- Entrées -->
    <line x1="0" y1="40" x2="50" y2="40" stroke="#0f172a" stroke-width="2"/>
    <line x1="0" y1="100" x2="50" y2="100" stroke="#0f172a" stroke-width="2"/>
    <text x="-40" y="44" font-family="sans-serif" font-size="11" font-weight="bold">e⁻ (Inv)</text>
    <text x="-50" y="104" font-family="sans-serif" font-size="11" font-weight="bold">e⁺ (Non-inv)</text>
    <!-- Sortie -->
    <line x1="170" y1="70" x2="250" y2="70" stroke="#0f172a" stroke-width="2"/>
    <text x="260" y="74" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">S (U_s)</text>
  </g>
  <g transform="translate(60, 160)">
    <rect width="250" height="45" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
    <text x="125" y="18" font-family="sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#166534">MONTAGE NON INVERSEUR</text>
    <text x="125" y="35" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">G = U_s / U_e = 1 + (R₂ / R₁)</text>
  </g>
  <g transform="translate(340, 160)">
    <rect width="250" height="45" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
    <text x="125" y="18" font-family="sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#1e40af">MONTAGE INVERSEUR</text>
    <text x="125" y="35" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#2563eb">G = U_s / U_e = - (R₂ / R₁)</text>
  </g>
</svg>
`)}`;

export const SVG_P8_MOUVEMENT = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="180" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P8 : CHRONOPHOTOGRAPHIE DU MOUVEMENT RECTILIGNE UNIFORME (MRU)
  </text>
  <line x1="70" y1="90" x2="570" y2="90" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack)"/>
  <!-- Positions à intervalles de temps égaux tau -->
  <circle cx="100" cy="90" r="6" fill="#dc2626"/>
  <text x="100" y="115" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">M₀ (t₀)</text>
  <circle cx="200" cy="90" r="6" fill="#dc2626"/>
  <text x="200" y="115" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">M₁ (t₁)</text>
  <circle cx="300" cy="90" r="6" fill="#dc2626"/>
  <text x="300" y="115" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">M₂ (t₂)</text>
  <circle cx="400" cy="90" r="6" fill="#dc2626"/>
  <text x="400" y="115" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">M₃ (t₃)</text>
  <circle cx="500" cy="90" r="6" fill="#dc2626"/>
  <text x="500" y="115" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">M₄ (t₄)</text>
  <!-- Vecteur vitesse v -->
  <line x1="300" y1="70" x2="370" y2="70" stroke="#2563eb" stroke-width="3" marker-end="url(#arrowBlueV)"/>
  <text x="335" y="60" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">v</text>
  <defs>
    <marker id="arrowBlack" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#0f172a"/>
    </marker>
    <marker id="arrowBlueV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/>
    </marker>
  </defs>
  <text x="325" y="150" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#0f172a">
    Distances égales : M₀M₁ = M₁M₂ = M₂M₃ = M₃M₄ pendant des durées égales Δt
  </text>
  <text x="325" y="170" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Loi horaire du MRU : x(t) = v · t + x₀ | Conversion : 1 m/s = 3,6 km/h
  </text>
</svg>
`)}`;

export const SVG_P9_FORCES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 230" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="210" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P9 : BILAN VECTORIEL DES ACTIONS MÉCANIQUES & PRINCIPE D'INERTIE
  </text>
  <!-- Solide sur table avec forces R, P, F, f -->
  <g transform="translate(180, 100)">
    <!-- Support -->
    <line x1="-80" y1="35" x2="200" y2="35" stroke="#64748b" stroke-width="3"/>
    <!-- Solide -->
    <rect x="10" y="-25" width="80" height="60" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
    <circle cx="50" cy="5" r="4" fill="#0f172a"/>
    <text x="50" y="-3" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">G</text>
    <!-- Poids P -->
    <line x1="50" y1="5" x2="50" y2="65" stroke="#dc2626" stroke-width="3" marker-end="url(#arrP)"/>
    <text x="60" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">P</text>
    <!-- Réaction R -->
    <line x1="50" y1="35" x2="50" y2="-25" stroke="#16a34a" stroke-width="3" marker-end="url(#arrR)"/>
    <text x="60" y="-15" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">R</text>
    <!-- Force de traction F -->
    <line x1="90" y1="5" x2="160" y2="5" stroke="#2563eb" stroke-width="3" marker-end="url(#arrF)"/>
    <text x="150" y="-5" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">F_traction</text>
    <!-- Force de frottement f -->
    <line x1="10" y1="35" x2="-40" y2="35" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrf)"/>
    <text x="-40" y="25" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706">f</text>
  </g>
  <defs>
    <marker id="arrP" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#dc2626"/></marker>
    <marker id="arrR" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#16a34a"/></marker>
    <marker id="arrF" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#2563eb"/></marker>
    <marker id="arrf" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#d97706"/></marker>
  </defs>
  <text x="325" y="195" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Principe d'inertie (1ère loi de Newton) : Si Σ F_ext = 0 ⇔ V_G = cte (Repos ou MRU) | Loi de Hooke : T = k · Δl
  </text>
</svg>
`)}`;

export const SVG_P10_POIDS_MASSE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 220" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="200" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P10 : RELATION POIDS-MASSE ET VECTEUR POIDS
  </text>
  <!-- Dynamomètre mesurant P -->
  <g transform="translate(100, 50)">
    <rect x="35" y="0" width="20" height="70" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="45" y1="70" x2="45" y2="85" stroke="#0f172a" stroke-width="2"/>
    <circle cx="45" cy="100" r="15" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="45" y="104" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">m</text>
    <!-- Vecteur P vertical vers le bas -->
    <line x1="45" y1="115" x2="45" y2="155" stroke="#dc2626" stroke-width="3" marker-end="url(#arrP10)"/>
    <text x="55" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">P</text>
    <text x="45" y="-5" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Dynamomètre</text>
  </g>
  <g transform="translate(240, 55)">
    <rect width="360" height="120" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
    <text x="180" y="25" font-family="sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#1e40af">DISTINCTION FONDAMENTALE</text>
    <text x="20" y="50" font-family="sans-serif" font-size="11" fill="#1e3a8a">• <strong>Masse m</strong> : Quantité de matière invariable (en kg), mesurée avec une balance.</text>
    <text x="20" y="72" font-family="sans-serif" font-size="11" fill="#1e3a8a">• <strong>Poids P</strong> : Force de pesanteur dirigée vers le bas (en N), mesurée au dynamomètre.</text>
    <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">P = m · g &nbsp;&nbsp;(avec g ≈ 9,8 N/kg à Dakar)</text>
  </g>
  <defs>
    <marker id="arrP10" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#dc2626"/></marker>
  </defs>
</svg>
`)}`;

export const SVG_P11_EQUILIBRE_3_FORCES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 230" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="210" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P11 : ÉQUILIBRE SOUS 3 FORCES NON PARALLÈLES (TRIANGLE FERMÉ)
  </text>
  <!-- Objet suspendu par 2 fils -->
  <g transform="translate(130, 50)">
    <line x1="-60" y1="0" x2="60" y2="0" stroke="#0f172a" stroke-width="3"/>
    <line x1="-50" y1="0" x2="0" y2="70" stroke="#64748b" stroke-width="2"/>
    <line x1="50" y1="0" x2="0" y2="70" stroke="#64748b" stroke-width="2"/>
    <circle cx="0" cy="70" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
    <!-- Vecteurs forces -->
    <line x1="0" y1="70" x2="0" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#arrP11)"/>
    <text x="8" y="110" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">P</text>
    <line x1="0" y1="70" x2="-35" y2="25" stroke="#2563eb" stroke-width="3" marker-end="url(#arrT1)"/>
    <text x="-35" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">T₁</text>
    <line x1="0" y1="70" x2="35" y2="25" stroke="#16a34a" stroke-width="3" marker-end="url(#arrT2)"/>
    <text x="30" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">T₂</text>
  </g>
  <!-- Polygone / Triangle dynamique des forces fermé -->
  <g transform="translate(390, 70)">
    <rect width="210" height="110" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
    <text x="105" y="20" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#166534">DYNAMIQUE FERMÉE</text>
    <path d="M 50 30 L 140 30 L 95 95 Z" fill="none" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="95" y="25" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb">T₁ + T₂ + P = 0</text>
    <text x="105" y="70" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">Forces concourantes</text>
    <text x="105" y="90" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#334155">Σ F_x = 0 et Σ F_y = 0</text>
  </g>
  <defs>
    <marker id="arrP11" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#dc2626"/></marker>
    <marker id="arrT1" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#2563eb"/></marker>
    <marker id="arrT2" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#16a34a"/></marker>
  </defs>
</svg>
`)}`;

export const SVG_P12_MOMENT_LEVIER = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 220" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="200" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P12 : ÉQUILIBRE D'UN SOLIDE MOBILE AUTOUR D'UN AXE (LEVIER)
  </text>
  <!-- Levier / barre horizontale -->
  <line x1="80" y1="110" x2="560" y2="110" stroke="#0f172a" stroke-width="5"/>
  <!-- Pivot (Axe delta) -->
  <polygon points="325,110 310,140 340,140" fill="#dc2626"/>
  <text x="325" y="160" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#dc2626">Axe (Δ)</text>
  <!-- Masse 1 à gauche -->
  <line x1="140" y1="110" x2="140" y2="60" stroke="#2563eb" stroke-width="3" marker-end="url(#arrF1)"/>
  <text x="140" y="50" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">F₁</text>
  <line x1="140" y1="125" x2="325" y2="125" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="230" y="138" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">d₁</text>
  <!-- Masse 2 à droite -->
  <line x1="480" y1="110" x2="480" y2="60" stroke="#16a34a" stroke-width="3" marker-end="url(#arrF2)"/>
  <text x="480" y="50" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a">F₂</text>
  <line x1="325" y1="125" x2="480" y2="125" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="400" y="138" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">d₂</text>
  <defs>
    <marker id="arrF1" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#2563eb"/></marker>
    <marker id="arrF2" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#16a34a"/></marker>
  </defs>
  <text x="325" y="195" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">
    Théorème des moments : Σ M_Δ(F) = 0 ⇔ F₁ · d₁ = F₂ · d₂ (avec M = ± F · d en N·m)
  </text>
</svg>
`)}`;

export const SVG_P13_LUMIERE_PROPAGATION = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 200" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="180" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="28" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P13 : PROPAGATION RECTILIGNE DE LA LUMIÈRE & FORMATION DES OMBRES
  </text>
  <!-- Source ponctuelle S -->
  <circle cx="70" cy="100" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
  <text x="70" y="80" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Source S</text>
  <!-- Objet opaque -->
  <circle cx="250" cy="100" r="25" fill="#475569"/>
  <text x="250" y="65" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#475569">Objet opaque</text>
  <!-- Rayons lumineux rectilignes -->
  <line x1="70" y1="100" x2="520" y2="45" stroke="#eab308" stroke-width="2"/>
  <line x1="70" y1="100" x2="520" y2="155" stroke="#eab308" stroke-width="2"/>
  <!-- Écran récepteur -->
  <line x1="520" y1="30" x2="520" y2="170" stroke="#0f172a" stroke-width="4"/>
  <text x="545" y="105" font-family="sans-serif" font-size="11" font-weight="bold">Écran</text>
  <!-- Ombre portée -->
  <line x1="520" y1="45" x2="520" y2="155" stroke="#1e293b" stroke-width="8"/>
  <text x="440" y="105" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Ombre portée</text>
  <text x="325" y="185" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Dans un milieu transparent, homogène et isotrope, la lumière se propage en ligne droite à c = 3,00·10⁸ m/s.
  </text>
</svg>
`)}`;

export const SVG_P14_P15_OPTIQUE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 240" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="220" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="28" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE P14 & P15 : LOIS DE SNELL-DESCARTES (RÉFLEXION ET RÉFRACTION)
  </text>
  <!-- Interface des deux milieux -->
  <line x1="50" y1="120" x2="590" y2="120" stroke="#0f172a" stroke-width="2.5"/>
  <text x="90" y="110" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af">Milieu 1 (Indice n₁)</text>
  <text x="90" y="140" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Milieu 2 (Indice n₂ &gt; n₁)</text>
  <!-- Normale au point d'incidence I -->
  <line x1="325" y1="30" x2="325" y2="210" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="335" y="45" font-family="sans-serif" font-size="10" font-weight="bold" fill="#64748b">Normale</text>
  <!-- Rayon incident -->
  <line x1="180" y1="40" x2="325" y2="120" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrRayon)"/>
  <text x="210" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Incident (i₁)</text>
  <!-- Rayon réfléchi (i' = i₁) -->
  <line x1="325" y1="120" x2="470" y2="40" stroke="#d97706" stroke-width="2.5"/>
  <text x="420" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706">Réfléchi (r = i₁)</text>
  <!-- Rayon réfracté (n1 sin i1 = n2 sin i2) -->
  <line x1="325" y1="120" x2="410" y2="210" stroke="#2563eb" stroke-width="2.5"/>
  <text x="385" y="180" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">Réfracté (i₂)</text>
  <defs>
    <marker id="arrRayon" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#dc2626"/></marker>
  </defs>
  <text x="325" y="225" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Loi 1 : Réflexion : r = i₁ | Loi 2 : Réfraction : n₁ · sin(i₁) = n₂ · sin(i₂)
  </text>
</svg>
`)}`;

export const SVG_C1_C2_ATOME = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 230" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="210" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE C1 & C2 : MODÈLE SIMPLIFIÉ DE L'ATOME ET STRUCTURE DE LA MATIÈRE
  </text>
  <!-- Noyau central -->
  <g transform="translate(200, 115)">
    <!-- Orbites elliptiques -->
    <ellipse cx="0" cy="0" rx="90" ry="35" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="0" cy="0" rx="35" ry="90" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Noyau -->
    <circle cx="0" cy="0" r="22" fill="#dc2626"/>
    <text x="0" y="4" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#ffffff">Z p⁺, N n⁰</text>
    <!-- Électrons sur orbites -->
    <circle cx="90" cy="0" r="5" fill="#2563eb"/>
    <circle cx="-90" cy="0" r="5" fill="#2563eb"/>
    <circle cx="0" cy="90" r="5" fill="#2563eb"/>
    <circle cx="0" cy="-90" r="5" fill="#2563eb"/>
  </g>
  <!-- Encadré explicatif -->
  <g transform="translate(360, 50)">
    <rect width="250" height="130" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="125" y="22" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#1e40af">COMPOSITION FONDAMENTALE</text>
    <text x="15" y="45" font-family="sans-serif" font-size="11" fill="#1e3a8a">• Numéro atomique Z = nombre de protons</text>
    <text x="15" y="65" font-family="sans-serif" font-size="11" fill="#1e3a8a">• Nombre de masse A = Z + N</text>
    <text x="15" y="85" font-family="sans-serif" font-size="11" fill="#1e3a8a">• Électroneutralité : Nb protons = Nb électrons</text>
    <text x="15" y="105" font-family="sans-serif" font-size="11" fill="#1e3a8a">• Masse concentrée dans le noyau : m ≈ A · m_nucléon</text>
  </g>
  <text x="325" y="202" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Classification périodique : éléments classés par Z croissant. Les éléments d'une même colonne ont le même nombre d'e⁻ de valence.
  </text>
</svg>
`)}`;

export const SVG_C3_C4_MOLE_LIAISONS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 230" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="210" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="30" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE C3 & C4 : LIAISONS CHIMIQUES ET QUANTITÉ DE MATIÈRE (LA MOLE)
  </text>
  <!-- Représentation 1 mole -->
  <g transform="translate(60, 60)">
    <circle cx="80" cy="55" r="45" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
    <text x="80" y="48" font-family="sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#b45309">1 mol</text>
    <text x="80" y="68" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#92400e">6,022·10²³ entités</text>
    <text x="80" y="85" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#78350f">N_A (Avogadro)</text>
  </g>
  <g transform="translate(240, 50)">
    <rect width="360" height="135" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="180" y="22" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">RELATIONS FONDAMENTALES DU COURS</text>
    <text x="20" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0284c7">• Nombre de moles solide/liquide : n = m / M</text>
    <text x="20" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">• Nombre de moles gaz : n = V / V_m &nbsp;(V_m = 22,4 L/mol à 0°C)</text>
    <text x="20" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9333ea">• Concentration molaire : C = n / V &nbsp;&nbsp;|&nbsp;&nbsp; C_m = m / V = C · M</text>
    <text x="20" y="112" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">• Règle de l'octet / duet : saturation de la couche externe</text>
  </g>
</svg>
`)}`;

export const SVG_C9_C10_PH_IONS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 240" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
  <rect x="10" y="10" width="630" height="220" rx="10" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="325" y="28" font-family="sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">
    FIGURE C9 & C10 : ÉCHELLE DE pH ET CARACTÉRISATION DES IONS
  </text>
  <!-- Échelle de pH de 0 à 14 -->
  <g transform="translate(60, 50)">
    <defs>
      <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ef4444"/>
        <stop offset="25%" stop-color="#f97316"/>
        <stop offset="50%" stop-color="#22c55e"/>
        <stop offset="75%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#3b82f6"/>
      </linearGradient>
    </defs>
    <rect x="0" y="15" width="530" height="25" rx="6" fill="url(#phGrad)"/>
    <text x="15" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">0</text>
    <text x="265" y="32" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#ffffff">7 (Neutre)</text>
    <text x="515" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">14</text>
    <text x="80" y="55" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">ACIDE ([H₃O⁺] &gt; [OH⁻])</text>
    <text x="430" y="55" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#2563eb">BASIQUE ([OH⁻] &gt; [H₃O⁺])</text>
  </g>
  <!-- Précipités caractéristiques -->
  <g transform="translate(50, 125)">
    <rect width="550" height="75" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="275" y="20" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">TESTS D'IDENTIFICATION PAR PRÉCIPITATION</text>
    <text x="15" y="42" font-family="sans-serif" font-size="10" fill="#334155">
      • <strong>Cl⁻</strong> + Ag⁺ → <strong>AgCl(s)</strong> (Précipité blanc noircissant à la lumière)
    </text>
    <text x="15" y="60" font-family="sans-serif" font-size="10" fill="#334155">
      • <strong>SO₄²⁻</strong> + Ba²⁺ → <strong>BaSO₄(s)</strong> (Précipité blanc insoluble)
    </text>
    <text x="310" y="42" font-family="sans-serif" font-size="10" fill="#334155">
      • <strong>Cu²⁺</strong> + 2 OH⁻ → <strong>Cu(OH)₂(s)</strong> (Précipité bleu caractéristique)
    </text>
    <text x="310" y="60" font-family="sans-serif" font-size="10" fill="#334155">
      • <strong>Fe²⁺</strong> → <strong>Fe(OH)₂</strong> (vert) &nbsp;|&nbsp; <strong>Fe³⁺</strong> → <strong>Fe(OH)₃</strong> (rouille)
    </text>
  </g>
  <text x="325" y="222" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#64748b">
    Formule : pH = -log[H₃O⁺] ⇔ [H₃O⁺] = 10^(-pH) | Produit ionique de l'eau à 25°C : Ke = [H₃O⁺] · [OH⁻] = 10⁻¹⁴
  </text>
</svg>
`)}`;
