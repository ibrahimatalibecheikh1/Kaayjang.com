// =========================================================================
// FIGURES GÉOMÉTRIQUES ET SCIENTIFIQUES VECTORIELLES — MATHÉMATIQUES 5ÈME
// Conformes au document officiel "PROGRAMME COMPLET DE MATHÉMATIQUES - CLASSE DE 5ÈME"
// Inclut obligatoirement les Figures 1 à 5 du PDF et les schémas conceptuels numériques
// =========================================================================

/**
 * Figure 1 : Symétrie centrale du point A par rapport au centre O
 * (Document officiel PDF Page 3)
 * A, O, A' sont alignés, O est le milieu de [AA'], segments [OA] et [OA'] de même longueur codés.
 */
export const SVG_MATH5_FIG1_SYMETRIE_CENTRALE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig1Math" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="shadowFig1Math" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.07"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgFig1Math)" rx="16"/>
  <rect x="12" y="12" width="736" height="296" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre & Sous-titre -->
  <text x="380" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 1 : Symétrie centrale du point A par rapport au centre O
  </text>
  <text x="380" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    O est le milieu du segment [AA&apos;] • Rotation de 180° (demi-tour) autour de O • Longueurs OA = OA&apos;
  </text>

  <!-- Droite support en pointillés -->
  <line x1="80" y1="235" x2="680" y2="95" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Segment principal [AA'] -->
  <line x1="160" y1="215" x2="600" y2="115" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Demi-tour indicatif (arc fléché) -->
  <path d="M 230 175 A 160 80 0 0 1 530 100" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,4"/>
  <polygon points="535,97 520,95 528,107" fill="#ec4899"/>
  <text x="380" y="105" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#db2777">
    Demi-tour de 180°
  </text>

  <!-- Point A -->
  <circle cx="160" cy="215" r="6" fill="#2563eb"/>
  <circle cx="160" cy="215" r="9" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="145" y="245" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#1e40af">
    A
  </text>
  <text x="140" y="265" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#64748b">
    Point initial
  </text>

  <!-- Centre O -->
  <circle cx="380" cy="165" r="7" fill="#ef4444"/>
  <circle cx="380" cy="165" r="11" fill="none" stroke="#f87171" stroke-width="1.5"/>
  <text x="380" y="145" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" text-anchor="middle" fill="#b91c1c">
    O
  </text>
  <text x="380" y="195" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#b91c1c">
    Centre de symétrie (Milieu)
  </text>

  <!-- Point A' -->
  <circle cx="600" cy="115" r="6" fill="#2563eb"/>
  <circle cx="600" cy="115" r="9" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="615" y="110" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#1e40af">
    A&apos;
  </text>
  <text x="615" y="130" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#64748b">
    Symétrique de A
  </text>

  <!-- Codages d'égalité de longueurs : double trait sur [OA] et sur [OA'] -->
  <!-- Sur [OA] (milieu = (270, 190)) -->
  <line x1="264" y1="184" x2="272" y2="196" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
  <line x1="270" y1="182" x2="278" y2="194" stroke="#059669" stroke-width="3" stroke-linecap="round"/>

  <!-- Sur [OA'] (milieu = (490, 140)) -->
  <line x1="484" y1="134" x2="492" y2="146" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
  <line x1="490" y1="132" x2="498" y2="144" stroke="#059669" stroke-width="3" stroke-linecap="round"/>

  <!-- Encadré récapitulatif -->
  <g transform="translate(60, 270)">
    <rect x="0" y="0" width="640" height="30" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="320" y="20" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e40af">
      Propriété fondamentale : A, O et A&apos; sont alignés et OA = OA&apos; (O est le milieu exact de [AA&apos;]).
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 2 : Deux droites parallèles coupées par une sécante
 * (Document officiel PDF Page 3)
 * Droites (d1) et (d2) horizontales et parallèles, sécante rouge oblique,
 * mise en évidence des angles alternes-internes égaux et correspondants égaux.
 */
export const SVG_MATH5_FIG2_ANGLES_PARALLELES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig2Math" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgFig2Math)" rx="16"/>
  <rect x="12" y="12" width="736" height="336" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre & Sous-titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 2 : Deux droites parallèles coupées par une sécante
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    (d1) // (d2) coupées par une sécante (Δ) • Angles alternes-internes égaux • Angles correspondants égaux
  </text>

  <!-- Droite (d1) -->
  <line x1="80" y1="120" x2="680" y2="120" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
  <text x="700" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#0f172a">(d1)</text>

  <!-- Droite (d2) -->
  <line x1="80" y1="230" x2="680" y2="230" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
  <text x="700" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#0f172a">(d2)</text>

  <!-- Sécante rouge (Δ) (pente -0.7) -->
  <!-- Point intersection haut : I(280, 120), Point intersection bas : J(420, 230) -->
  <line x1="160" y1="26" x2="540" y2="324" stroke="#dc2626" stroke-width="3.5" stroke-linecap="round"/>
  <text x="555" y="335" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#dc2626">Sécante (Δ)</text>

  <!-- Intersections I et J -->
  <circle cx="280" cy="120" r="5" fill="#dc2626"/>
  <circle cx="420" cy="230" r="5" fill="#dc2626"/>
  <text x="255" y="115" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#1e293b">I</text>
  <text x="435" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#1e293b">J</text>

  <!-- Angles Alternes-Internes (Violet/Indigo) -->
  <!-- Angle en I en bas à droite : de (d1 droite = 0°) vers sécante bas (38°) -->
  <path d="M 330 120 A 50 50 0 0 1 319 151 L 280 120 Z" fill="#6366f1" fill-opacity="0.45" stroke="#4f46e5" stroke-width="2"/>
  <text x="330" y="145" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#4338ca">â₁ (Alter.-int.)</text>

  <!-- Angle en J en haut à gauche : de (d2 gauche = 180°) vers sécante haut (218°) -->
  <path d="M 370 230 A 50 50 0 0 1 381 199 L 420 230 Z" fill="#6366f1" fill-opacity="0.45" stroke="#4f46e5" stroke-width="2"/>
  <text x="330" y="215" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#4338ca">â₂ (Alter.-int.)</text>

  <!-- Angles Correspondants (Vert émeraude) -->
  <!-- Angle en I en haut à droite (au-dessus de d1) : de (d1 droite = 0°) vers sécante haut (218°-180° = 38° ou plutôt angle aigu haut) -->
  <path d="M 330 120 A 50 50 0 0 0 319 89 L 280 120 Z" fill="#10b981" fill-opacity="0.4" stroke="#059669" stroke-width="2"/>
  <text x="330" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#047857">ĉ₁ (Corresp.)</text>

  <!-- Angle en J en bas à droite (sous d2) : même position que ĉ₁ -->
  <path d="M 470 230 A 50 50 0 0 1 459 261 L 420 230 Z" fill="#10b981" fill-opacity="0.4" stroke="#059669" stroke-width="2"/>
  <text x="470" y="255" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#047857">ĉ₂ (Corresp.)</text>

  <!-- Légende en bas -->
  <g transform="translate(60, 280)">
    <rect x="0" y="0" width="310" height="50" rx="8" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1.5"/>
    <rect x="12" y="16" width="18" height="18" rx="4" fill="#6366f1"/>
    <text x="38" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#3730a3">Angles alternes-internes égaux</text>
    <text x="38" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#4338ca">Situés entre (d1) et (d2), de part et d&apos;autre de (Δ) : â₁ = â₂</text>
  </g>
  <g transform="translate(390, 280)">
    <rect x="0" y="0" width="310" height="50" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
    <rect x="12" y="16" width="18" height="18" rx="4" fill="#10b981"/>
    <text x="38" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#065f46">Angles correspondants égaux</text>
    <text x="38" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#047857">Même position relative par rapport aux droites : ĉ₁ = ĉ₂</text>
  </g>
</svg>
`)}`;

/**
 * Figure 3 : Triangle ABC quelconque. Somme des angles = 180°
 * (Document officiel PDF Page 4)
 * Triangle ABC quelconque avec ses trois angles mis en couleur (somme = 180°)
 * et tracé indicatif des droites remarquables (hauteur, médiatrice, médiane, bissectrice).
 */
export const SVG_MATH5_FIG3_TRIANGLE_ANGLES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig3Math" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgFig3Math)" rx="16"/>
  <rect x="12" y="12" width="736" height="336" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre & Sous-titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 3 : Triangle ABC quelconque • Somme des angles = 180°
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    Dans tout triangle : Mesure(Â) + Mesure(B̂) + Mesure(Ĉ) = 180° • Droites remarquables du triangle
  </text>

  <!-- Sommets du triangle : A(260, 90), B(120, 260), C(540, 260) -->
  <!-- Fond du triangle -->
  <polygon points="260,90 120,260 540,260" fill="#f0f9ff" stroke="#0284c7" stroke-width="3"/>

  <!-- Angle A (orange) -->
  <path d="M 239 116 A 35 35 0 0 1 290 114 L 260 90 Z" fill="#f97316" fill-opacity="0.45" stroke="#ea580c" stroke-width="2"/>
  <!-- Angle B (vert) -->
  <path d="M 160 260 A 40 40 0 0 0 145 230 L 120 260 Z" fill="#10b981" fill-opacity="0.45" stroke="#059669" stroke-width="2"/>
  <!-- Angle C (violet) -->
  <path d="M 495 260 A 45 45 0 0 1 505 239 L 540 260 Z" fill="#8b5cf6" fill-opacity="0.45" stroke="#7c3aed" stroke-width="2"/>

  <!-- Sommet A -->
  <circle cx="260" cy="90" r="5" fill="#0f172a"/>
  <text x="260" y="75" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#0f172a">A</text>
  <text x="260" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#ea580c">Â = 65°</text>

  <!-- Sommet B -->
  <circle cx="120" cy="260" r="5" fill="#0f172a"/>
  <text x="100" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#0f172a">B</text>
  <text x="175" y="248" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#059669">B̂ = 75°</text>

  <!-- Sommet C -->
  <circle cx="540" cy="260" r="5" fill="#0f172a"/>
  <text x="555" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#0f172a">C</text>
  <text x="475" y="248" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#7c3aed">Ĉ = 40°</text>

  <!-- Hauteur issue de A (pointillée rouge) avec angle droit sur [BC] en H(260, 260) -->
  <line x1="260" y1="90" x2="260" y2="260" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
  <!-- Symbole angle droit en H -->
  <rect x="260" y="246" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="265" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#dc2626">H (Hauteur)</text>

  <!-- Médiane issue de A passant par le milieu M de [BC] (M = (330, 260)) -->
  <circle cx="330" cy="260" r="3.5" fill="#2563eb"/>
  <line x1="260" y1="90" x2="330" y2="260" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="2,2"/>
  <text x="330" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">M (Milieu - Médiane)</text>

  <!-- Panneau récapitulatif à droite -->
  <g transform="translate(560, 80)">
    <rect x="0" y="0" width="175" height="160" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="87" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">THÉORÈME CLÉ</text>
    <line x1="15" y1="34" x2="160" y2="34" stroke="#cbd5e1" stroke-width="1"/>
    <text x="15" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#ea580c">Â = 65°</text>
    <text x="15" y="75" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#059669">+ B̂ = 75°</text>
    <text x="15" y="95" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#7c3aed">+ Ĉ = 40°</text>
    <line x1="15" y1="105" x2="160" y2="105" stroke="#cbd5e1" stroke-width="1"/>
    <text x="15" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#0284c7">= 180°</text>
    <text x="15" y="146" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-style="italic" fill="#64748b">Toujours vrai !</text>
  </g>

  <!-- Encadré bas des 4 droites remarquables -->
  <g transform="translate(30, 298)">
    <rect x="0" y="0" width="700" height="36" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="350" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e40af">
      Droites remarquables : Médiatrice (⟂ au milieu), Hauteur (issue du sommet ⟂ au côté opposé), Bissectrice (partage l&apos;angle en 2), Médiane (joint sommet au milieu).
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 4 : Parallélogramme classique (côtés opposés parallèles)
 * (Document officiel PDF Page 4)
 * Parallélogramme ABCD avec côtés opposés parallèles et égaux,
 * diagonales [AC] et [BD] se coupant en leur milieu O (centre de symétrie),
 * et rappels visuels des cas particuliers (Rectangle, Losange, Carré).
 */
export const SVG_MATH5_FIG4_PARALLELOGRAMME = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig4Math" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgFig4Math)" rx="16"/>
  <rect x="12" y="12" width="736" height="336" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre & Sous-titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 4 : Le Parallélogramme et ses propriétés fondamentales
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    Côtés opposés parallèles et de même longueur • Diagonales se coupent en leur milieu O (centre de symétrie)
  </text>

  <!-- Parallélogramme ABCD -->
  <!-- A(180, 95), B(450, 95), C(390, 220), D(120, 220) -->
  <polygon points="180,95 450,95 390,220 120,220" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/>

  <!-- Diagonales [AC] et [BD] -->
  <line x1="180" y1="95" x2="390" y2="220" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="450" y1="95" x2="120" y2="220" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Centre O = milieu des diagonales : (285, 157.5) -->
  <circle cx="285" cy="157.5" r="5" fill="#dc2626"/>
  <text x="285" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" text-anchor="middle" fill="#b91c1c">O (Milieu)</text>

  <!-- Sommets -->
  <text x="170" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#1e3a8a">A</text>
  <text x="460" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#1e3a8a">B</text>
  <text x="400" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#1e3a8a">C</text>
  <text x="100" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#1e3a8a">D</text>

  <!-- Flèches de parallélisme : (AB) // (DC) et (AD) // (BC) -->
  <text x="315" y="90" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#2563eb">▶▶ (AB) // (DC)</text>
  <text x="255" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#2563eb">▶▶</text>
  <text x="135" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#059669">▲</text>
  <text x="425" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#059669">▲</text>

  <!-- Panneau des 3 cas particuliers à droite -->
  <g transform="translate(500, 80)">
    <rect x="0" y="0" width="230" height="150" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="115" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">CAS PARTICULIERS</text>
    <line x1="10" y1="30" x2="220" y2="30" stroke="#cbd5e1" stroke-width="1"/>

    <text x="12" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#2563eb">1. RECTANGLE :</text>
    <text x="12" y="66" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#334155">4 angles droits + diagonales égales</text>

    <text x="12" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#059669">2. LOSANGE :</text>
    <text x="12" y="104" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#334155">4 côtés égaux + diagonales perpendiculaires</text>

    <text x="12" y="126" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#d97706">3. CARRÉ :</text>
    <text x="12" y="142" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#334155">Rectangle + Losange réunis (4 droits, 4 égaux)</text>
  </g>

  <!-- Encadré bas récapitulatif -->
  <g transform="translate(30, 255)">
    <rect x="0" y="0" width="700" height="75" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="20" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#1e40af">
      PROPRIÉTÉS FONDAMENTALES D&apos;UN PARALLÉLOGRAMME :
    </text>
    <text x="20" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="#1e3a8a">
      • Ses diagonales se coupent en leur milieu commun O, qui est le centre de symétrie de la figure.
    </text>
    <text x="20" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="#1e3a8a">
      • Ses côtés opposés sont parallèles et ont la même longueur : AB = DC et AD = BC. Les angles opposés sont égaux.
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 5 : Cylindre de révolution de hauteur h
 * (Document officiel PDF Page 4)
 * Cylindre de révolution dans l'espace avec axe vertical, hauteur h, rayon r,
 * bases disques parallèles et patron déplié (rectangle 2πr × h + 2 disques).
 */
export const SVG_MATH5_FIG5_CYLINDRE_ESPACE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig5Math" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <linearGradient id="cylGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="25%" stop-color="#f8fafc"/>
      <stop offset="75%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgFig5Math)" rx="16"/>
  <rect x="12" y="12" width="736" height="336" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre & Sous-titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 5 : Cylindre de révolution de hauteur h et son patron déplié
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    Deux bases disques superposables et parallèles de rayon r • Surface latérale rectangulaire de dimensions 2πr × h
  </text>

  <!-- Partie gauche : Vue 3D du cylindre -->
  <g transform="translate(110, 85)">
    <!-- Base inférieure (partie arrière en pointillés, partie avant en trait plein) -->
    <path d="M 0 170 A 65 24 0 0 1 130 170" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
    <path d="M 0 170 A 65 24 0 0 0 130 170" fill="none" stroke="#0f172a" stroke-width="2.5"/>

    <!-- Corps du cylindre -->
    <rect x="0" y="30" width="130" height="140" fill="url(#cylGrad)" fill-opacity="0.35"/>
    <line x1="0" y1="30" x2="0" y2="170" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="130" y1="30" x2="130" y2="170" stroke="#0f172a" stroke-width="2.5"/>

    <!-- Base supérieure (ellipse complète visible) -->
    <ellipse cx="65" cy="30" rx="65" ry="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="65" cy="30" r="3.5" fill="#0284c7"/>
    <!-- Rayon r -->
    <line x1="65" y1="30" x2="130" y2="30" stroke="#0284c7" stroke-width="2"/>
    <text x="95" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#0369a1">Rayon r</text>

    <!-- Axe central et hauteur h -->
    <line x1="65" y1="30" x2="65" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>
    <circle cx="65" cy="170" r="3.5" fill="#dc2626"/>
    <!-- Flèche hauteur h cotation -->
    <line x1="155" y1="30" x2="155" y2="170" stroke="#dc2626" stroke-width="2"/>
    <polygon points="155,27 151,37 159,37" fill="#dc2626"/>
    <polygon points="155,173 151,163 159,163" fill="#dc2626"/>
    <text x="175" y="105" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#b91c1c">h</text>

    <text x="65" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">
      Cylindre de révolution
    </text>
  </g>

  <!-- Partie droite : Patron déplié -->
  <g transform="translate(420, 85)">
    <!-- Disque supérieur -->
    <circle cx="130" cy="20" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="130" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#0284c7">Base 1</text>

    <!-- Rectangle de la surface latérale -->
    <!-- Largeur = 260 (représente 2πr), Hauteur = 120 (représente h) -->
    <rect x="0" y="46" width="260" height="120" rx="4" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
    <text x="130" y="110" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#1e293b">
      Surface latérale déroulée
    </text>
    <text x="130" y="128" font-family="system-ui, -apple-system, sans-serif" font-size="11" text-anchor="middle" fill="#475569">
      Aire latérale = Périmètre base × h = 2 × π × r × h
    </text>

    <!-- Disque inférieur -->
    <circle cx="130" cy="190" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="130" y="194" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#0284c7">Base 2</text>

    <!-- Cotations du patron -->
    <!-- Cotation longueur = 2πr -->
    <line x1="0" y1="40" x2="260" y2="40" stroke="#0284c7" stroke-width="1.5"/>
    <text x="130" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0284c7">Longueur = Périmètre du disque = 2 × π × r</text>

    <!-- Cotation hauteur h -->
    <line x1="270" y1="46" x2="270" y2="166" stroke="#dc2626" stroke-width="1.5"/>
    <text x="280" y="110" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#dc2626">h</text>

    <text x="130" y="225" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">
      Patron du cylindre
    </text>
  </g>

  <!-- Encadré formules au bas -->
  <g transform="translate(30, 275)">
    <rect x="0" y="0" width="700" height="55" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="20" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#1e40af">
      FORMULES OFFICIELLES DE CALCUL DU CYLINDRE ET DU PRISME DROIT :
    </text>
    <text x="20" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="#1e3a8a">
      • Aire de la base = π × r² • Aire latérale = 2 × π × r × h • Volume = Aire de la base × Hauteur = π × r² × h
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure pour Leçon 1 : Priorités opératoires (Arbre hiérarchique de calcul)
 */
export const SVG_MATH5_FIG_PRIORITES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bgPrio" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgPrio)" rx="16"/>
  <rect x="12" y="12" width="736" height="276" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Hiérarchie universelle des priorités opératoires
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    1. Parenthèses les plus internes • 2. Multiplications et divisions (gauche à droite) • 3. Additions et soustractions
  </text>

  <!-- Étapes pyramidales -->
  <!-- Niveau 1 : Parenthèses -->
  <g transform="translate(180, 75)">
    <rect x="0" y="0" width="400" height="42" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <text x="200" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" text-anchor="middle" fill="#991b1b">
      PRIORITÉ 1 : ( ... ) Calculs entre parenthèses et crochets
    </text>
  </g>

  <!-- Niveau 2 : Multiplications & Divisions -->
  <g transform="translate(130, 128)">
    <rect x="0" y="0" width="500" height="42" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="250" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" text-anchor="middle" fill="#92400e">
      PRIORITÉ 2 : × et ÷ Multiplications et Divisions (de gauche à droite)
    </text>
  </g>

  <!-- Niveau 3 : Additions & Soustractions -->
  <g transform="translate(80, 180)">
    <rect x="0" y="0" width="600" height="42" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
    <text x="300" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" text-anchor="middle" fill="#166534">
      PRIORITÉ 3 : + et - Additions et Soustractions (de gauche à droite)
    </text>
  </g>

  <!-- Exemple pas à pas -->
  <g transform="translate(50, 235)">
    <rect x="0" y="0" width="660" height="40" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="330" y="25" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#0f172a">
      Exemple : A = 5 + 3 × (10 - 4) ➔ A = 5 + 3 × 6 (parenthèse) ➔ A = 5 + 18 (multiplication) ➔ A = 23.
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure pour Leçon 4 : Nombres relatifs (Droite graduée, signe et distance à zéro)
 */
export const SVG_MATH5_FIG_RELATIFS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bgRelatifs" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgRelatifs)" rx="16"/>
  <rect x="12" y="12" width="736" height="276" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Repérage sur la droite graduée : Nombres relatifs et distance à zéro
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    Origine O (abscisse 0) • Nombres négatifs à gauche • Nombres positifs à droite • Deux opposés sont équidistants de O
  </text>

  <!-- Droite graduée avec flèche -->
  <line x1="50" y1="150" x2="710" y2="150" stroke="#0f172a" stroke-width="3"/>
  <polygon points="715,150 700,143 700,157" fill="#0f172a"/>

  <!-- Graduations de -5 à +5 (Origine au centre : x = 380) ; pas = 60px -->
  <!-- -5(80), -4(140), -3(200), -2(260), -1(320), 0(380), +1(440), +2(500), +3(560), +4(620), +5(680) -->
  <!-- Graduations -->
  <g stroke="#64748b" stroke-width="2">
    <line x1="80" y1="140" x2="80" y2="160"/>
    <line x1="140" y1="140" x2="140" y2="160"/>
    <line x1="200" y1="140" x2="200" y2="160"/>
    <line x1="260" y1="140" x2="260" y2="160"/>
    <line x1="320" y1="140" x2="320" y2="160"/>
    <!-- Origine O plus haute -->
    <line x1="380" y1="130" x2="380" y2="170" stroke="#dc2626" stroke-width="3"/>
    <line x1="440" y1="140" x2="440" y2="160"/>
    <line x1="500" y1="140" x2="500" y2="160"/>
    <line x1="560" y1="140" x2="560" y2="160"/>
    <line x1="620" y1="140" x2="620" y2="160"/>
    <line x1="680" y1="140" x2="680" y2="160"/>
  </g>

  <!-- Chiffres sous l'axe -->
  <g font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" text-anchor="middle" fill="#1e293b">
    <text x="80" y="185">-5</text>
    <text x="140" y="185">-4</text>
    <text x="200" y="185">-3</text>
    <text x="260" y="185">-2</text>
    <text x="320" y="185">-1</text>
    <text x="380" y="190" font-size="18" font-weight="900" fill="#dc2626">0 (O)</text>
    <text x="440" y="185">+1</text>
    <text x="500" y="185">+2</text>
    <text x="560" y="185">+3</text>
    <text x="620" y="185">+4</text>
    <text x="680" y="185">+5</text>
  </g>

  <!-- Mise en évidence de deux opposés : A(-3) et B(+3) -->
  <circle cx="200" cy="150" r="6" fill="#2563eb"/>
  <text x="200" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#2563eb">Point A (-3)</text>
  <circle cx="560" cy="150" r="6" fill="#2563eb"/>
  <text x="560" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#2563eb">Point B (+3)</text>

  <!-- Distance à zéro (arcs en haut) -->
  <path d="M 200 135 Q 290 95 380 135" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="290" y="105" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#2563eb">Distance = 3 unités</text>

  <path d="M 380 135 Q 470 95 560 135" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="470" y="105" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#2563eb">Distance = 3 unités</text>

  <!-- Encadré explicatif -->
  <g transform="translate(50, 220)">
    <rect x="0" y="0" width="660" height="55" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
    <text x="330" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#1e40af">
      RÈGLE DE COMPARAISON : Tout nombre positif est supérieur à tout nombre négatif.
    </text>
    <text x="330" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#1e3a8a">
      Entre deux nombres négatifs, le plus grand est celui qui a la plus petite distance à zéro : ex : -2 &gt; -5.
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure pour Leçon 6 : Simple distributivité k × (a + b) = k × a + k × b
 */
export const SVG_MATH5_FIG_DISTRIBUTIVITE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bgDist" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgDist)" rx="16"/>
  <rect x="12" y="12" width="736" height="276" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Démonstration géométrique de la simple distributivité
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#475569">
    L&apos;aire totale du grand rectangle de côtés k et (a + b) est égale à la somme des aires des deux rectangles : k × (a + b) = k × a + k × b
  </text>

  <!-- Grand rectangle découpé en deux rectangles -->
  <!-- Hauteur k = 110px ; largeur rectangle 1 = 180px ; largeur rectangle 2 = 240px -->
  <g transform="translate(170, 85)">
    <!-- Rectangle 1 (vert) : aire k × a -->
    <rect x="0" y="0" width="180" height="110" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
    <text x="90" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#15803d">
      Aire = k × a
    </text>

    <!-- Rectangle 2 (bleu) : aire k × b -->
    <rect x="180" y="0" width="240" height="110" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
    <text x="300" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#0369a1">
      Aire = k × b
    </text>

    <!-- Cotation hauteur k -->
    <line x1="-15" y1="0" x2="-15" y2="110" stroke="#dc2626" stroke-width="2"/>
    <text x="-35" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" text-anchor="middle" fill="#dc2626">k</text>

    <!-- Cotation largeur 'a' -->
    <line x1="0" y1="-10" x2="180" y2="-10" stroke="#16a34a" stroke-width="2"/>
    <text x="90" y="-18" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#16a34a">a</text>

    <!-- Cotation largeur 'b' -->
    <line x1="180" y1="-10" x2="420" y2="-10" stroke="#0284c7" stroke-width="2"/>
    <text x="300" y="-18" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#0284c7">b</text>

    <!-- Cotation totale (a + b) sous le rectangle -->
    <line x1="0" y1="125" x2="420" y2="125" stroke="#0f172a" stroke-width="2"/>
    <text x="210" y="145" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="900" text-anchor="middle" fill="#0f172a">Largeur totale = (a + b)</text>
  </g>

  <!-- Encadré formule bas -->
  <g transform="translate(50, 245)">
    <rect x="0" y="0" width="660" height="36" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="330" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#0f172a">
      Développement : k × (a + b) = k × a + k × b  •  Factorisation : k × a + k × b = k × (a + b)
    </text>
  </g>
</svg>
`)}`;

export const SVG_MATH5_FIG5_CYLINDRE_PRISME = SVG_MATH5_FIG5_CYLINDRE_ESPACE;
