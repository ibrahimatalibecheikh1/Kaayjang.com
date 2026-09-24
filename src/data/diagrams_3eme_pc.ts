// =========================================================================
// FIGURES VECTORIELLES ET SCHÉMAS EXPÉRIMENTAUX — PHYSIQUE-CHIMIE 3ÈME (BFEM)
// Conformes au Programme Officiel du Ministère de l'Éducation Nationale du Sénégal
// =========================================================================

/**
 * Figure 1 : Préparation de solutions aqueuses (Dissolution et Dilution)
 */
export const SVG_PC3_FIG1_SOLUTIONS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <defs>
    <linearGradient id="bgSol" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="shadowSol" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgSol)" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 1 : PRÉPARATION DE SOLUTIONS AQUEUSES — PROTOCOLES EXPÉRIMENTAUX
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    A. Dissolution d'un soluté solide (Cm = m/V ; C = n/V) &nbsp;|&nbsp; B. Dilution d'une solution mère (C₀·V₀ = C₁·V₁)
  </text>

  <!-- Partie A : Dissolution -->
  <g transform="translate(30, 65)">
    <rect width="330" height="230" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" filter="url(#shadowSol)"/>
    <text x="165" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#166534">
      A. DISSOLUTION D'UN SOLIDE
    </text>

    <!-- Étape 1 : Pesée -->
    <rect x="25" y="45" width="70" height="60" rx="6" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
    <rect x="35" y="80" width="50" height="15" rx="3" fill="#cbd5e1"/>
    <ellipse cx="60" cy="70" rx="18" ry="6" fill="#fde047" stroke="#ca8a04"/>
    <text x="60" y="58" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#334155">1. Pesée</text>
    <text x="60" y="118" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#166534">m = C × M × V</text>

    <!-- Étape 2 : Entonnoir + Fiole -->
    <g transform="translate(130, 45)">
      <!-- Fiole jaugée -->
      <path d="M 30 25 L 30 55 L 15 95 Q 12 105 25 105 L 55 105 Q 68 105 65 95 L 50 55 L 50 25 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <!-- Entonnoir -->
      <polygon points="22,10 58,10 43,30 37,30" fill="#ffffff" stroke="#64748b" stroke-width="1"/>
      <line x1="28" y1="45" x2="52" y2="45" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="40" y="8" font-family="system-ui, sans-serif" font-size="8" font-weight="700" text-anchor="middle" fill="#0369a1">Entonnoir</text>
      <text x="40" y="125" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#334155">2. Ajout eau + agitation</text>
    </g>

    <!-- Étape 3 : Ajustement trait de jauge -->
    <g transform="translate(235, 45)">
      <path d="M 30 25 L 30 55 L 15 95 Q 12 105 25 105 L 55 105 Q 68 105 65 95 L 50 55 L 50 25 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
      <!-- Trait de jauge -->
      <line x1="28" y1="45" x2="52" y2="45" stroke="#dc2626" stroke-width="2"/>
      <!-- Menisque -->
      <path d="M 30 45 Q 40 47 50 45" fill="none" stroke="#0369a1" stroke-width="1.5"/>
      <text x="40" y="18" font-family="system-ui, sans-serif" font-size="8" font-weight="800" text-anchor="middle" fill="#dc2626">Trait de jauge</text>
      <text x="40" y="125" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#334155">3. Ménisque au trait</text>
    </g>

    <!-- Formule clé -->
    <rect x="15" y="180" width="300" height="38" rx="6" fill="#ffffff" stroke="#86efac" stroke-width="1"/>
    <text x="165" y="196" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#15803d">
      C = n / V = m / (M × V) &nbsp;⟺&nbsp; Cm = C × M
    </text>
    <text x="165" y="210" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">
      m en g ; V en L ; M en g/mol ; C en mol/L ; Cm en g/L
    </text>
  </g>

  <!-- Partie B : Dilution -->
  <g transform="translate(400, 65)">
    <rect width="330" height="230" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" filter="url(#shadowSol)"/>
    <text x="165" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1d4ed8">
      B. DILUTION D'UNE SOLUTION MÈRE
    </text>

    <!-- Pipette jaugée prélevant V0 -->
    <g transform="translate(30, 45)">
      <rect x="25" y="2" width="8" height="100" fill="#f8fafc" stroke="#3b82f6" stroke-width="1.5"/>
      <rect x="21" y="40" width="16" height="30" rx="4" fill="#60a5fa" opacity="0.6"/>
      <!-- Trait de jauge pipette -->
      <line x1="23" y1="20" x2="35" y2="20" stroke="#dc2626" stroke-width="1.5"/>
      <text x="29" y="118" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#1e40af">1. Prélèvement V₀</text>
      <text x="29" y="130" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#64748b">(Pipette jaugée)</text>
    </g>

    <!-- Fiole jaugée recevant V0 et complétée à V1 -->
    <g transform="translate(160, 45)">
      <path d="M 30 25 L 30 55 L 15 95 Q 12 105 25 105 L 55 105 Q 68 105 65 95 L 50 55 L 50 25 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <line x1="28" y1="45" x2="52" y2="45" stroke="#dc2626" stroke-width="1.5"/>
      <text x="40" y="118" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#1e40af">2. Fiole de volume V₁</text>
      <text x="40" y="130" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#64748b">Compléter à l'eau distillée</text>
    </g>

    <!-- Formule de dilution -->
    <rect x="15" y="180" width="300" height="38" rx="6" fill="#ffffff" stroke="#93c5fd" stroke-width="1"/>
    <text x="165" y="196" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#1d4ed8">
      Conservation matière : C₀ × V₀ = C₁ × V₁
    </text>
    <text x="165" y="210" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">
      Facteur de dilution : F = C₀ / C₁ = V₁ / V₀ (F &gt; 1)
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 2 : Échelle de pH & Expérience de neutralisation acido-basique
 */
export const SVG_PC3_FIG2_ACIDES_BASES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <defs>
    <linearGradient id="pHGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="25%" stop-color="#f97316"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="75%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 2 : LE pH ET LA RÉACTION DE NEUTRALISATION ACIDO-BASIQUE
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Mesure au papier pH / pH-mètre &nbsp;|&nbsp; Réaction exothermique : Acide + Base ➔ Sel + Eau
  </text>

  <!-- Échelle de pH de 0 à 14 -->
  <g transform="translate(30, 65)">
    <rect x="0" y="10" width="700" height="28" rx="6" fill="url(#pHGrad)" stroke="#475569" stroke-width="1"/>
    
    <!-- Repères pH -->
    <line x1="0" y1="8" x2="0" y2="42" stroke="#0f172a" stroke-width="2"/>
    <text x="5" y="5" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b91c1c">0</text>
    <text x="70" y="5" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Citron (2,5)</text>

    <line x1="350" y1="8" x2="350" y2="42" stroke="#0f172a" stroke-width="2"/>
    <text x="350" y="5" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#15803d">pH = 7 (NEUTRE)</text>

    <line x1="700" y1="8" x2="700" y2="42" stroke="#0f172a" stroke-width="2"/>
    <text x="695" y="5" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="end" fill="#1e40af">14</text>
    <text x="630" y="5" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Soude (13-14)</text>

    <!-- Zones explicatives -->
    <rect x="0" y="46" width="340" height="22" rx="4" fill="#fee2e2"/>
    <text x="170" y="61" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#991b1b">
      MILIEU ACIDE : pH &lt; 7 (Excès d'ions H⁺ / H₃O⁺)
    </text>

    <rect x="360" y="46" width="340" height="22" rx="4" fill="#dbeafe"/>
    <text x="530" y="61" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#1e40af">
      MILIEU BASIQUE : pH &gt; 7 (Excès d'ions OH⁻)
    </text>
  </g>

  <!-- Montage expérimental neutralisation -->
  <g transform="translate(40, 150)">
    <!-- Burette graduée avec Soude NaOH -->
    <g transform="translate(180, 0)">
      <rect x="35" y="0" width="10" height="90" fill="#e0f2fe" stroke="#3b82f6" stroke-width="1"/>
      <polygon points="35,90 45,90 41,105 39,105" fill="#3b82f6"/>
      <circle cx="40" cy="95" r="4" fill="#ef4444"/> <!-- Robinet -->
      <text x="55" y="30" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e40af">Burette : Soude</text>
      <text x="55" y="42" font-family="system-ui, sans-serif" font-size="8" fill="#64748b">(Na⁺ + OH⁻)</text>
      <!-- Goutte tombante -->
      <circle cx="40" cy="115" r="2.5" fill="#3b82f6"/>
    </g>

    <!-- Bécher sous la burette -->
    <g transform="translate(180, 75)">
      <path d="M 15 45 L 15 80 Q 15 85 20 85 L 60 85 Q 65 85 65 80 L 65 45" fill="#fef3c7" stroke="#334155" stroke-width="1.5"/>
      <text x="40" y="70" font-family="system-ui, sans-serif" font-size="8" font-weight="700" text-anchor="middle" fill="#b45309">HCl + BBT</text>
      <!-- Thermomètre -->
      <line x1="28" y1="20" x2="28" y2="78" stroke="#dc2626" stroke-width="2"/>
      <circle cx="28" cy="80" r="3" fill="#dc2626"/>
      <text x="-40" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626">Thermomètre (T monte)</text>
    </g>

    <!-- Boîte de virage BBT et Équation bilan -->
    <g transform="translate(350, 5)">
      <rect width="330" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="165" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">
        VIRAGE DE L'INDICATEUR BBT &amp; ÉQUATION
      </text>

      <g transform="translate(20, 30)">
        <rect x="0" y="0" width="80" height="24" rx="4" fill="#fef08a" stroke="#ca8a04"/>
        <text x="40" y="16" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#854d0e">Acide : JAUNE</text>

        <rect x="105" y="0" width="80" height="24" rx="4" fill="#bbf7d0" stroke="#16a34a"/>
        <text x="145" y="16" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#166534">Neutre : VERT</text>

        <rect x="210" y="0" width="80" height="24" rx="4" fill="#bfdbfe" stroke="#2563eb"/>
        <text x="250" y="16" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#1e40af">Base : BLEU</text>
      </g>

      <rect x="15" y="65" width="300" height="60" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="165" y="82" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#15803d">
        ÉQUATION BILAN DE NEUTRALISATION :
      </text>
      <text x="165" y="98" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0f172a">
        (H⁺ + Cl⁻) + (Na⁺ + OH⁻) ➔ (Na⁺ + Cl⁻) + H₂O
      </text>
      <text x="165" y="114" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">
        Équation ionique réduite : H⁺ + OH⁻ ➔ H₂O (Exothermique)
      </text>
    </g>
  </g>
</svg>
`)}`;

/**
 * Figure 3 : Action de HCl sur les métaux & Identification des ions par la soude
 */
export const SVG_PC3_FIG3_METAUX = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 3 : ACTION DE L'ACIDE CHLORHYDRIQUE SUR LES MÉTAUX &amp; TESTS D'IDENTIFICATION
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Dégagement de H₂ (test « pop » à la flamme) &nbsp;|&nbsp; Caractérisation des ions Fe²⁺, Fe³⁺, Cu²⁺, Zn²⁺ par NaOH
  </text>

  <!-- Partie 1 : 3 Tubes à essais réaction avec HCl -->
  <g transform="translate(30, 65)">
    <rect width="320" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">
      1. ACTION DE HCl DILUÉ SUR LES MÉTAUX
    </text>

    <!-- Tube 1 : Fer + HCl -->
    <g transform="translate(35, 40)">
      <rect x="10" y="0" width="25" height="110" rx="5" fill="#f0fdf4" stroke="#475569" stroke-width="1.5"/>
      <!-- Liquide vert pâle -->
      <path d="M 11 50 L 11 104 Q 11 109 22 109 Q 34 109 34 104 L 34 50 Z" fill="#bbf7d0"/>
      <!-- Grenaille de Fer -->
      <circle cx="22" cy="100" r="4" fill="#334155"/>
      <!-- Bulles de H2 -->
      <circle cx="18" cy="80" r="2" fill="#ffffff" stroke="#22c55e"/>
      <circle cx="27" cy="65" r="2.5" fill="#ffffff" stroke="#22c55e"/>
      <circle cx="21" cy="40" r="2" fill="#ffffff" stroke="#22c55e"/>
      <!-- Flamme pop -->
      <polygon points="22,10 18,-5 26,-5" fill="#f97316"/>
      <text x="22" y="-10" font-family="system-ui, sans-serif" font-size="8" font-weight="800" text-anchor="middle" fill="#dc2626">« POP ! » (H₂)</text>
      <text x="22" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#15803d">Fer (Fe)</text>
      <text x="22" y="137" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#475569">Sol. verte Fe²⁺</text>
    </g>

    <!-- Tube 2 : Zinc + HCl -->
    <g transform="translate(135, 40)">
      <rect x="10" y="0" width="25" height="110" rx="5" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
      <!-- Liquide incolore -->
      <path d="M 11 50 L 11 104 Q 11 109 22 109 Q 34 109 34 104 L 34 50 Z" fill="#e2e8f0"/>
      <!-- Morceaux de zinc -->
      <rect x="18" y="96" width="9" height="7" fill="#64748b"/>
      <!-- Bulles de H2 vives -->
      <circle cx="23" cy="85" r="2.5" fill="#ffffff" stroke="#3b82f6"/>
      <circle cx="17" cy="68" r="2" fill="#ffffff" stroke="#3b82f6"/>
      <circle cx="26" cy="50" r="3" fill="#ffffff" stroke="#3b82f6"/>
      <text x="22" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#1e40af">Zinc (Zn)</text>
      <text x="22" y="137" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#475569">Sol. incolore Zn²⁺</text>
    </g>

    <!-- Tube 3 : Cuivre + HCl -->
    <g transform="translate(235, 40)">
      <rect x="10" y="0" width="25" height="110" rx="5" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
      <!-- Liquide transparent -->
      <path d="M 11 50 L 11 104 Q 11 109 22 109 Q 34 109 34 104 L 34 50 Z" fill="#f1f5f9"/>
      <!-- Tournure de cuivre rouge -->
      <ellipse cx="22" cy="100" rx="8" ry="4" fill="#b45309"/>
      <text x="22" y="70" font-family="system-ui, sans-serif" font-size="8" font-weight="700" text-anchor="middle" fill="#dc2626">Pas de réaction</text>
      <text x="22" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#b45309">Cuivre (Cu)</text>
      <text x="22" y="137" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#dc2626">Inerte à froid</text>
    </g>

    <text x="160" y="200" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0f172a">
      Fe + 2 H⁺ ➔ Fe²⁺ + H₂ &nbsp;|&nbsp; Zn + 2 H⁺ ➔ Zn²⁺ + H₂
    </text>
    <text x="160" y="215" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#64748b">
      Le dihydrogène produit émet une détonation caractéristique (« pop ») à la flamme.
    </text>
  </g>

  <!-- Partie 2 : Identification des ions par la soude (NaOH) -->
  <g transform="translate(370, 65)">
    <rect width="360" height="230" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="180" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0369a1">
      2. PRÉCIPITÉS CARACTÉRISTIQUES AVEC LA SOUDE (NaOH)
    </text>

    <!-- 4 Tubes d'identification -->
    <!-- Fe2+ -->
    <g transform="translate(25, 40)">
      <rect x="0" y="0" width="22" height="105" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="2" y="60" width="18" height="40" fill="#22c55e" opacity="0.8"/>
      <text x="11" y="120" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#15803d">Fe²⁺</text>
      <text x="11" y="132" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#15803d">Vert rouille</text>
      <text x="11" y="142" font-family="system-ui, sans-serif" font-size="7" text-anchor="middle" fill="#64748b">Fe(OH)₂</text>
    </g>

    <!-- Fe3+ -->
    <g transform="translate(110, 40)">
      <rect x="0" y="0" width="22" height="105" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="2" y="60" width="18" height="40" fill="#c2410c" opacity="0.85"/>
      <text x="11" y="120" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#9a3412">Fe³⁺</text>
      <text x="11" y="132" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#9a3412">Rouille</text>
      <text x="11" y="142" font-family="system-ui, sans-serif" font-size="7" text-anchor="middle" fill="#64748b">Fe(OH)₃</text>
    </g>

    <!-- Cu2+ -->
    <g transform="translate(195, 40)">
      <rect x="0" y="0" width="22" height="105" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="2" y="60" width="18" height="40" fill="#0284c7" opacity="0.85"/>
      <text x="11" y="120" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#0369a1">Cu²⁺</text>
      <text x="11" y="132" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#0369a1">Bleu azur</text>
      <text x="11" y="142" font-family="system-ui, sans-serif" font-size="7" text-anchor="middle" fill="#64748b">Cu(OH)₂</text>
    </g>

    <!-- Zn2+ -->
    <g transform="translate(280, 40)">
      <rect x="0" y="0" width="22" height="105" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
      <rect x="2" y="60" width="18" height="40" fill="#e2e8f0" stroke="#cbd5e1"/>
      <text x="11" y="120" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#334155">Zn²⁺</text>
      <text x="11" y="132" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#334155">Blanc gélatineux</text>
      <text x="11" y="142" font-family="system-ui, sans-serif" font-size="7" text-anchor="middle" fill="#64748b">Zn(OH)₂</text>
    </g>

    <!-- Récapitulatif -->
    <rect x="15" y="170" width="330" height="48" rx="6" fill="#ffffff" stroke="#bae6fd" stroke-width="1"/>
    <text x="180" y="188" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" text-anchor="middle" fill="#0369a1">
      Règle : Ion métallique Mⁿ⁺ + n OH⁻ ➔ M(OH)ₙ (Précipité coloré)
    </text>
    <text x="180" y="205" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#64748b">
      Permet d'identifier sans ambiguïté la nature de la solution lors des sujets du BFEM.
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 4 : Analyse de l'eau (Voltmètre de Hofmann) & Synthèse (Eudiomètre de Volta)
 */
export const SVG_PC3_FIG4_EAU = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 4 : ANALYSE (ÉLECTROLYSE) ET SYNTHÈSE DE L'EAU (2 H₂O ⇄ 2 H₂ + O₂)
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Rapport volumique strict : Volume(H₂) = 2 × Volume(O₂) &nbsp;|&nbsp; Analyse décomposante et Synthèse recomposante
  </text>

  <!-- Voltmètre de Hofmann -->
  <g transform="translate(30, 65)">
    <rect width="330" height="230" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="165" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0369a1">
      A. ANALYSE (ÉLECTROLYSE DE H₂O)
    </text>

    <!-- Dispositif U inversé avec ampoule centrale -->
    <!-- Branche Cathode (-) H2 (2 volumes) -->
    <rect x="60" y="40" width="30" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="60" y="40" width="30" height="60" fill="#f8fafc"/> <!-- Gaz H2 2 volumes -->
    <text x="75" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#dc2626">2V (H₂)</text>
    <line x1="60" y1="100" x2="90" y2="100" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>
    <!-- Électrode Cathode -->
    <line x1="75" y1="140" x2="75" y2="175" stroke="#334155" stroke-width="3"/>
    <text x="75" y="190" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#dc2626">Cathode (-)</text>

    <!-- Branche Anode (+) O2 (1 volume) -->
    <rect x="230" y="40" width="30" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="230" y="40" width="30" height="30" fill="#f8fafc"/> <!-- Gaz O2 1 volume -->
    <text x="245" y="58" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#1e40af">1V (O₂)</text>
    <line x1="230" y1="70" x2="260" y2="70" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>
    <!-- Électrode Anode -->
    <line x1="245" y1="140" x2="245" y2="175" stroke="#334155" stroke-width="3"/>
    <text x="245" y="190" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#1e40af">Anode (+)</text>

    <!-- Tube central de remplissage -->
    <path d="M 140 35 L 140 160 L 90 160 M 170 35 L 170 160 L 230 160" fill="none" stroke="#0284c7" stroke-width="1.5"/>
    <polygon points="135,35 175,35 165,55 145,55" fill="#e0f2fe" stroke="#0284c7"/>
    <text x="155" y="30" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#0369a1">Eau acidifiée</text>

    <text x="165" y="215" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" text-anchor="middle" fill="#0369a1">
      2 H₂O ➔ 2 H₂ (gaz) + O₂ (gaz)
    </text>
  </g>

  <!-- Eudiomètre de Volta (Synthèse) -->
  <g transform="translate(390, 65)">
    <rect width="340" height="230" rx="10" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1.5"/>
    <text x="170" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#86198f">
      B. SYNTHÈSE (EUDIOMÈTRE DE VOLTA)
    </text>

    <!-- Tube gradué épais retourné sur cuve -->
    <g transform="translate(130, 35)">
      <rect x="15" y="0" width="50" height="130" rx="6" fill="#fdf2f8" stroke="#a21caf" stroke-width="1.5"/>
      <!-- Gaz 2 vol H2 + 1 vol O2 -->
      <rect x="17" y="2" width="46" height="70" fill="#f5d0fe" opacity="0.6"/>
      <text x="40" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#86198f">2 vol H₂ + 1 vol O₂</text>
      <!-- Étincelle électrique -->
      <line x1="0" y1="50" x2="25" y2="50" stroke="#f59e0b" stroke-width="2"/>
      <line x1="80" y1="50" x2="55" y2="50" stroke="#f59e0b" stroke-width="2"/>
      <polygon points="40,43 43,49 48,47 44,53 48,58 41,54 36,58 38,51 34,47" fill="#eab308"/>
      <text x="40" y="65" font-family="system-ui, sans-serif" font-size="7" font-weight="800" text-anchor="middle" fill="#b45309">Étincelle !</text>
      <!-- Gouttelettes d'eau formée -->
      <circle cx="25" cy="80" r="1.5" fill="#3b82f6"/>
      <circle cx="55" cy="85" r="1.5" fill="#3b82f6"/>
      <circle cx="35" cy="95" r="2" fill="#3b82f6"/>
      <text x="40" y="115" font-family="system-ui, sans-serif" font-size="7.5" font-weight="700" text-anchor="middle" fill="#1e40af">Buée / Eau formée</text>
      <!-- Cuve mercure / eau -->
      <rect x="-30" y="130" width="140" height="20" rx="4" fill="#94a3b8" stroke="#475569"/>
    </g>

    <text x="170" y="195" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" text-anchor="middle" fill="#86198f">
      2 H₂ + O₂ ➔ 2 H₂O
    </text>
    <text x="170" y="212" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#64748b">
      Détonation vive dans les proportions 2 pour 1, sans aucun gaz résiduel.
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 5 : Les Alcanes (CnH2n+2) & Combustions (complète vs incomplète)
 */
export const SVG_PC3_FIG5_ALCANES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 5 : LES 4 PREMIERS ALCANES (CₙH₂ₙ₊₂) &amp; COMBUSTIONS COMPLÈTE ET INCOMPLÈTE
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Méthane CH₄, Éthane C₂H₆, Propane C₃H₈, Butane C₄H₁₀ &nbsp;|&nbsp; Flamme bleue (CO₂ + H₂O) vs Flamme jaune (Suie C + toxique CO)
  </text>

  <!-- 4 premiers alcanes -->
  <g transform="translate(30, 65)">
    <rect width="330" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="165" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">
      LES 4 PREMIERS ALCANES LINÉAIRES
    </text>

    <g transform="translate(20, 40)">
      <!-- n=1 Méthane -->
      <rect x="0" y="0" width="135" height="65" rx="6" fill="#ffffff" stroke="#94a3b8"/>
      <text x="12" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">1. Méthane</text>
      <text x="12" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">CH₄</text>
      <text x="12" y="54" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">Gaz des marais / biogaz</text>

      <!-- n=2 Éthane -->
      <rect x="150" y="0" width="135" height="65" rx="6" fill="#ffffff" stroke="#94a3b8"/>
      <text x="162" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">2. Éthane</text>
      <text x="162" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">C₂H₆</text>
      <text x="162" y="54" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">Gaz naturel</text>

      <!-- n=3 Propane -->
      <rect x="0" y="75" width="135" height="65" rx="6" fill="#ffffff" stroke="#94a3b8"/>
      <text x="12" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">3. Propane</text>
      <text x="12" y="113" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">C₃H₈</text>
      <text x="12" y="129" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">GPL carburant</text>

      <!-- n=4 Butane -->
      <rect x="150" y="75" width="135" height="65" rx="6" fill="#ffffff" stroke="#94a3b8"/>
      <text x="162" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">4. Butane</text>
      <text x="162" y="113" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">C₄H₁₀</text>
      <text x="162" y="129" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">Bouteille de gaz Sénégal</text>
    </g>

    <text x="165" y="205" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" text-anchor="middle" fill="#0f172a">
      Formule générale : CₙH₂ₙ₊₂
    </text>
  </g>

  <!-- Combustions -->
  <g transform="translate(390, 65)">
    <rect width="340" height="230" rx="10" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
    <text x="170" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#854d0e">
      COMBUSTIONS COMPLÈTE VS INCOMPLÈTE
    </text>

    <!-- Complète -->
    <g transform="translate(20, 40)">
      <rect width="140" height="120" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
      <text x="70" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#1e40af">COMPLÈTE</text>
      <!-- Flamme bleue -->
      <path d="M 70 30 Q 60 65 62 80 Q 70 85 78 80 Q 80 65 70 30 Z" fill="#3b82f6"/>
      <text x="70" y="98" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#1e40af">Flamme bleue</text>
      <text x="70" y="110" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#15803d">O₂ en excès ➔ CO₂ + H₂O</text>
    </g>

    <!-- Incomplète -->
    <g transform="translate(180, 40)">
      <rect width="140" height="120" rx="6" fill="#fff7ed" stroke="#fdba74"/>
      <text x="70" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#c2410c">INCOMPLÈTE</text>
      <!-- Flamme jaune -->
      <path d="M 70 30 Q 55 65 60 80 Q 70 85 80 80 Q 85 65 70 30 Z" fill="#eab308"/>
      <!-- Dépôt de suie -->
      <line x1="50" y1="25" x2="90" y2="25" stroke="#0f172a" stroke-width="4"/>
      <text x="70" y="98" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#c2410c">Flamme jaune</text>
      <text x="70" y="110" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#b91c1c">Manque O₂ ➔ C (suie) + CO</text>
    </g>

    <text x="170" y="185" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#b91c1c">
      DANGER MORTEL : Monoxyde de carbone CO (gaz inodore asphyxiant)
    </text>
    <text x="170" y="205" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#0f172a">
      Butane : 2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 6 : Les lentilles minces & Construction géométrique de l'image réelle
 */
export const SVG_PC3_FIG6_LENTILLES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 6 : LES LENTILLES MINCES &amp; LES 3 RAYONS CARACTÉRISTIQUES
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Vergence C = 1 / f (en dioptries δ) &nbsp;|&nbsp; Construction géométrique de l'image A'B' d'un objet lumineux AB
  </text>

  <!-- Banc d'optique schéma -->
  <g transform="translate(30, 70)">
    <rect width="700" height="225" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

    <!-- Axe optique principal -->
    <line x1="20" y1="110" x2="680" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,3"/>
    <text x="670" y="105" font-family="system-ui, sans-serif" font-size="10" font-style="italic" fill="#64748b">Δ</text>

    <!-- Lentille convergente en x=350 -->
    <line x1="350" y1="20" x2="350" y2="200" stroke="#0284c7" stroke-width="2.5"/>
    <!-- Flèches convergentes aux extrémités -->
    <polygon points="350,15 344,28 356,28" fill="#0284c7"/>
    <polygon points="350,205 344,192 356,192" fill="#0284c7"/>

    <!-- Centre optique O -->
    <circle cx="350" cy="110" r="3" fill="#0f172a"/>
    <text x="353" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">O</text>

    <!-- Foyer objet F (x=210) et Foyer image F' (x=490) => f = 140px -->
    <circle cx="210" cy="110" r="3" fill="#dc2626"/>
    <text x="210" y="127" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#dc2626">F</text>
    <circle cx="490" cy="110" r="3" fill="#dc2626"/>
    <text x="490" y="127" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#dc2626">F'</text>

    <!-- Objet AB en x=110 (AB vertical, hauteur 50px) -->
    <line x1="110" y1="110" x2="110" y2="60" stroke="#16a34a" stroke-width="3"/>
    <polygon points="110,55 106,66 114,66" fill="#16a34a"/>
    <text x="105" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#16a34a">A</text>
    <text x="105" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#16a34a">B</text>

    <!-- Rayon 1 (Bleu) : Parallèle à l'axe émergent par F' -->
    <line x1="110" y1="60" x2="350" y2="60" stroke="#2563eb" stroke-width="2"/>
    <line x1="350" y1="60" x2="620" y2="156.4" stroke="#2563eb" stroke-width="2"/>

    <!-- Rayon 2 (Rouge) : Passe par le centre optique O sans déviation -->
    <line x1="110" y1="60" x2="620" y2="166.25" stroke="#ef4444" stroke-width="2"/>

    <!-- Rayon 3 (Orange) : Passe par F et émerge parallèlement -->
    <line x1="110" y1="60" x2="350" y2="162.8" stroke="#f97316" stroke-width="2"/>
    <line x1="350" y1="162.8" x2="620" y2="162.8" stroke="#f97316" stroke-width="2"/>

    <!-- Image A'B' renversée en x=525 -->
    <!-- Calcul intersection : A'B' à x = 490 + ... = 525 px -->
    <line x1="525" y1="110" x2="525" y2="147" stroke="#7c3aed" stroke-width="3"/>
    <polygon points="525,152 521,142 529,142" fill="#7c3aed"/>
    <text x="532" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#7c3aed">A'</text>
    <text x="532" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#7c3aed">B'</text>

    <!-- Légende des 3 rayons -->
    <g transform="translate(20, 165)">
      <rect width="320" height="50" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="10" y="15" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#2563eb">1. Rayon // à l'axe ➔ Émerge en passant par F'</text>
      <text x="10" y="30" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ef4444">2. Rayon par le centre O ➔ Non dévié</text>
      <text x="10" y="45" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#f97316">3. Rayon par F ➔ Émerge parallèle à l'axe</text>
    </g>

    <!-- Encadré Formule de la vergence -->
    <g transform="translate(470, 165)">
      <rect width="210" height="50" rx="4" fill="#f0f9ff" stroke="#0284c7"/>
      <text x="105" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0369a1">
        C = 1 / f
      </text>
      <text x="105" y="38" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#64748b">
        C en dioptries (δ) ; f = OF' en mètres (m)
      </text>
    </g>
  </g>
</svg>
`)}`;

/**
 * Figure 7 : Dispersion de la lumière & Modèle réduit de l'œil et corrections
 */
export const SVG_PC3_FIG7_DISPERSION_OEIL = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 7 : DISPERSION DE LA LUMIÈRE &amp; MODÈLE OPTIQUE DE L'ŒIL HUMAIN
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Spectre continu de Newton par prisme &nbsp;|&nbsp; Modèle : Cristallin (lentille) + Rétine (écran) &nbsp;|&nbsp; Myopie et Hypermétropie
  </text>

  <!-- Partie A : Prisme et dispersion -->
  <g transform="translate(30, 65)">
    <rect width="320" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">
      A. DISPERSION PAR LE PRISME
    </text>

    <!-- Faisceau blanc incident -->
    <line x1="20" y1="100" x2="110" y2="100" stroke="#94a3b8" stroke-width="4"/>
    <text x="65" y="90" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#475569">Lumière blanche</text>

    <!-- Prisme de verre -->
    <polygon points="150,50 110,140 190,140" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>

    <!-- Éventail spectral à la sortie -->
    <line x1="160" y1="95" x2="280" y2="60" stroke="#ef4444" stroke-width="2.5"/> <!-- Rouge moins dévié -->
    <text x="290" y="64" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ef4444">Rouge (moins dévié)</text>

    <line x1="160" y1="98" x2="280" y2="75" stroke="#f97316" stroke-width="2"/>
    <line x1="160" y1="101" x2="280" y2="90" stroke="#eab308" stroke-width="2"/>
    <line x1="160" y1="104" x2="280" y2="105" stroke="#22c55e" stroke-width="2"/>
    <line x1="160" y1="107" x2="280" y2="120" stroke="#06b6d4" stroke-width="2"/>

    <line x1="160" y1="110" x2="280" y2="135" stroke="#7c3aed" stroke-width="2.5"/> <!-- Violet plus dévié -->
    <text x="290" y="139" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#7c3aed">Violet (plus dévié)</text>

    <!-- Écran de réception -->
    <rect x="275" y="50" width="4" height="100" fill="#334155"/>

    <text x="160" y="195" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0f172a">
      Spectre visible continu (ROJVBIV)
    </text>
    <text x="160" y="210" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#64748b">
      Recomposition par le disque de Newton en rotation rapide.
    </text>
  </g>

  <!-- Partie B : Modèle réduit de l'œil et défauts de vision -->
  <g transform="translate(370, 65)">
    <rect width="360" height="230" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
    <text x="180" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#166534">
      B. MODÈLE DE L'ŒIL &amp; CORRECTIONS BFEM
    </text>

    <!-- Œil normal -->
    <g transform="translate(20, 35)">
      <circle cx="50" cy="35" r="30" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
      <!-- Cristallin -->
      <ellipse cx="30" cy="35" rx="4" ry="16" fill="#60a5fa" stroke="#2563eb"/>
      <!-- Rayons convergents sur la rétine -->
      <line x1="10" y1="25" x2="30" y2="25" stroke="#eab308" stroke-width="1.5"/>
      <line x1="10" y1="45" x2="30" y2="45" stroke="#eab308" stroke-width="1.5"/>
      <line x1="30" y1="25" x2="80" y2="35" stroke="#eab308" stroke-width="1.5"/>
      <line x1="30" y1="45" x2="80" y2="35" stroke="#eab308" stroke-width="1.5"/>
      <!-- Rétine -->
      <path d="M 75 15 A 30 30 0 0 1 75 55" stroke="#dc2626" stroke-width="3" fill="none"/>
      <text x="50" y="78" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#15803d">1. Œil normal</text>
      <text x="50" y="90" font-family="system-ui, sans-serif" font-size="7.5" text-anchor="middle" fill="#64748b">Image exacte sur rétine</text>
    </g>

    <!-- Myopie -->
    <g transform="translate(135, 35)">
      <circle cx="50" cy="35" r="30" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
      <ellipse cx="30" cy="35" rx="5" ry="16" fill="#3b82f6"/>
      <!-- Image EN AVANT de la rétine -->
      <line x1="30" y1="25" x2="65" y2="35" stroke="#eab308" stroke-width="1.5"/>
      <line x1="30" y1="45" x2="65" y2="35" stroke="#eab308" stroke-width="1.5"/>
      <circle cx="65" cy="35" r="2.5" fill="#dc2626"/>
      <path d="M 75 15 A 30 30 0 0 1 75 55" stroke="#dc2626" stroke-width="2" fill="none"/>
      <text x="50" y="78" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#b91c1c">2. Myopie</text>
      <text x="50" y="90" font-family="system-ui, sans-serif" font-size="7.5" text-anchor="middle" fill="#dc2626">Image EN AVANT</text>
      <text x="50" y="102" font-family="system-ui, sans-serif" font-size="8" font-weight="700" text-anchor="middle" fill="#2563eb">Verre DIVERGENT</text>
    </g>

    <!-- Hypermétropie -->
    <g transform="translate(250, 35)">
      <circle cx="50" cy="35" r="30" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
      <ellipse cx="30" cy="35" rx="3" ry="16" fill="#93c5fd"/>
      <!-- Image EN ARRIÈRE de la rétine -->
      <line x1="30" y1="25" x2="88" y2="35" stroke="#eab308" stroke-width="1.5"/>
      <line x1="30" y1="45" x2="88" y2="35" stroke="#eab308" stroke-width="1.5"/>
      <circle cx="88" cy="35" r="2.5" fill="#dc2626"/>
      <path d="M 75 15 A 30 30 0 0 1 75 55" stroke="#dc2626" stroke-width="2" fill="none"/>
      <text x="50" y="78" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#c2410c">3. Hypermétropie</text>
      <text x="50" y="90" font-family="system-ui, sans-serif" font-size="7.5" text-anchor="middle" fill="#c2410c">Image EN ARRIÈRE</text>
      <text x="50" y="102" font-family="system-ui, sans-serif" font-size="8" font-weight="700" text-anchor="middle" fill="#15803d">Verre CONVERGENT</text>
    </g>

    <!-- Correspondance biologique / physique -->
    <rect x="15" y="155" width="330" height="65" rx="6" fill="#ffffff" stroke="#86efac" stroke-width="1"/>
    <text x="165" y="172" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" text-anchor="middle" fill="#166534">
      ÉQUIVALENCES MODÈLE RÉDUIT :
    </text>
    <text x="165" y="188" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#334155">
      • Cristallin = Lentille convergente &nbsp;|&nbsp; • Rétine = Écran de projection
    </text>
    <text x="165" y="202" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#334155">
      • Pupille / Iris = Diaphragme régulant le flux lumineux
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 8 : Les Forces — Poids et Masse (Dynamomètre et courbe P = f(m))
 */
export const SVG_PC3_FIG8_POIDS_MASSE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 8 : FORCES, POIDS ET MASSE — EXPÉRIENCE DU DYNAMOMÈTRE
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Masse m (invariable en kg) vs Poids P (force gravitationnelle en N) &nbsp;|&nbsp; Relation fondamentale : P = m × g
  </text>

  <!-- Dispositif dynamomètre -->
  <g transform="translate(30, 65)">
    <rect width="320" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">
      DISPOSITIF DE MESURE PAR DYNAMOMÈTRE
    </text>

    <!-- Potence et dynamomètre -->
    <g transform="translate(90, 40)">
      <!-- Support potence -->
      <line x1="0" y1="0" x2="40" y2="0" stroke="#334155" stroke-width="4"/>
      <!-- Corps cylindrique du dynamomètre gradué -->
      <rect x="35" y="5" width="20" height="85" rx="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <!-- Ressort hélicoïdal -->
      <path d="M 45 10 L 45 20 L 40 25 L 50 30 L 40 35 L 50 40 L 45 45 L 45 65" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Index curseur -->
      <polygon points="56,65 62,62 62,68" fill="#dc2626"/>
      <!-- Crochet -->
      <path d="M 45 90 L 45 105 A 6 6 0 0 1 39 111" fill="none" stroke="#334155" stroke-width="2"/>
      <!-- Masse marquée suspendue -->
      <rect x="25" y="112" width="28" height="25" rx="3" fill="#64748b"/>
      <text x="39" y="128" font-family="system-ui, sans-serif" font-size="8" font-weight="800" text-anchor="middle" fill="#ffffff">500 g</text>

      <!-- Vecteur Poids P vertical vers le bas -->
      <line x1="39" y1="125" x2="39" y2="165" stroke="#ef4444" stroke-width="3"/>
      <polygon points="39,170 35,160 43,160" fill="#ef4444"/>
      <text x="48" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ef4444">P⃗</text>

      <!-- Graduations -->
      <text x="18" y="70" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626">4,9 N</text>
    </g>

    <!-- Tableau de comparaison -->
    <g transform="translate(15, 175)">
      <rect width="290" height="45" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="145" y="18" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#0f172a">
        MASSE : m = 0,5 kg (Balance, quantité de matière)
      </text>
      <text x="145" y="34" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#dc2626">
        POIDS : P = 4,9 N (Dynamomètre, force exercée par la Terre)
      </text>
    </g>
  </g>

  <!-- Courbe expérimentale P = f(m) -->
  <g transform="translate(370, 65)">
    <rect width="360" height="230" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
    <text x="180" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#166534">
      COURBE EXPÉRIMENTALE P = f(m)
    </text>

    <!-- Axes du graphique -->
    <g transform="translate(50, 45)">
      <line x1="0" y1="120" x2="260" y2="120" stroke="#334155" stroke-width="2"/>
      <line x1="0" y1="120" x2="0" y2="0" stroke="#334155" stroke-width="2"/>
      <!-- Flèches -->
      <polygon points="265,120 255,116 255,124" fill="#334155"/>
      <polygon points="0,-5 -4,5 4,5" fill="#334155"/>
      <text x="270" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">m (kg)</text>
      <text x="5" y="-2" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">P (N)</text>

      <!-- Droite linéaire passant par l'origine -->
      <line x1="0" y1="120" x2="240" y2="10" stroke="#2563eb" stroke-width="2.5"/>

      <!-- Points expérimentaux -->
      <circle cx="60" cy="92.5" r="3.5" fill="#dc2626"/> <!-- 0.1 kg -> 0.98 N -->
      <circle cx="120" cy="65" r="3.5" fill="#dc2626"/>  <!-- 0.2 kg -> 1.96 N -->
      <circle cx="180" cy="37.5" r="3.5" fill="#dc2626"/> <!-- 0.3 kg -> 2.94 N -->

      <text x="150" y="50" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#2563eb">Pente = g = P/m</text>
    </g>

    <!-- Formule fondamentale -->
    <rect x="25" y="175" width="310" height="45" rx="6" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
    <text x="180" y="195" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" text-anchor="middle" fill="#15803d">
      P = m × g &nbsp;⟺&nbsp; g = P / m ≈ 9,8 N/kg au Sénégal
    </text>
    <text x="180" y="210" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#64748b">
      La droite passe par l'origine : le poids est proportionnel à la masse.
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 9 : Équilibre sous 2 forces & Travail mécanique (W = F × L)
 */
export const SVG_PC3_FIG9_EQUILIBRE_TRAVAIL = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 9 : ÉQUILIBRE D'UN SOLIDE &amp; TRAVAIL MÉCANIQUE D'UNE FORCE
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Conditions d'équilibre (F⃗₁ + F⃗₂ = 0⃗) &nbsp;|&nbsp; Travail mécanique : W = F × L (Moteur &gt; 0, Résistant &lt; 0, Nul = 0)
  </text>

  <!-- Équilibre sous 2 forces -->
  <g transform="translate(30, 65)">
    <rect width="320" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="160" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0f172a">
      1. ÉQUILIBRE SOUS DEUX FORCES
    </text>

    <!-- Solide S suspendu ou posé sur table -->
    <g transform="translate(130, 45)">
      <!-- Table -->
      <line x1="-30" y1="65" x2="90" y2="65" stroke="#334155" stroke-width="3"/>
      <!-- Solide rectangulaire -->
      <rect x="0" y="25" width="60" height="40" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <circle cx="30" cy="45" r="3" fill="#0f172a"/>
      <text x="30" y="42" font-family="system-ui, sans-serif" font-size="8" font-weight="800" text-anchor="middle" fill="#0f172a">G</text>

      <!-- Réaction de la table R vers le haut -->
      <line x1="30" y1="45" x2="30" y2="5" stroke="#2563eb" stroke-width="3"/>
      <polygon points="30,0 26,10 34,10" fill="#2563eb"/>
      <text x="40" y="12" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#2563eb">R⃗</text>

      <!-- Poids P vers le bas -->
      <line x1="30" y1="45" x2="30" y2="85" stroke="#dc2626" stroke-width="3"/>
      <polygon points="30,90 26,80 34,80" fill="#dc2626"/>
      <text x="40" y="85" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626">P⃗</text>
    </g>

    <!-- Les 3 conditions écrites -->
    <g transform="translate(15, 145)">
      <rect width="290" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="145" y="16" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" text-anchor="middle" fill="#0f172a">
        CONDITIONS STRICTES DU BFEM :
      </text>
      <text x="10" y="32" font-family="system-ui, sans-serif" font-size="8.5" fill="#334155">1. Même droite d'action (colinéaires)</text>
      <text x="10" y="46" font-family="system-ui, sans-serif" font-size="8.5" fill="#334155">2. Sens directement opposés</text>
      <text x="10" y="60" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#2563eb">3. Même intensité : R = P &nbsp;⟺&nbsp; R⃗ + P⃗ = 0⃗</text>
    </g>
  </g>

  <!-- Travail et Puissance mécanique -->
  <g transform="translate(370, 65)">
    <rect width="360" height="230" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
    <text x="180" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#0369a1">
      2. TRAVAIL &amp; PUISSANCE MÉCANIQUE
    </text>

    <!-- Schéma déplacement d'un mobile -->
    <g transform="translate(30, 40)">
      <!-- Sol -->
      <line x1="0" y1="50" x2="300" y2="50" stroke="#64748b" stroke-width="2"/>
      <!-- Objet tiré -->
      <rect x="40" y="20" width="50" height="30" rx="3" fill="#93c5fd" stroke="#1d4ed8"/>
      <!-- Force motrice F -->
      <line x1="90" y1="35" x2="160" y2="35" stroke="#16a34a" stroke-width="3"/>
      <polygon points="165,35 155,30 155,40" fill="#16a34a"/>
      <text x="125" y="28" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#16a34a">F⃗</text>
      <!-- Flèche déplacement L -->
      <line x1="40" y1="65" x2="220" y2="65" stroke="#334155" stroke-width="1.5"/>
      <polygon points="225,65 218,61 218,69" fill="#334155"/>
      <text x="130" y="78" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#334155">Déplacement L (m)</text>
    </g>

    <!-- Formules -->
    <g transform="translate(20, 130)">
      <rect width="320" height="85" rx="6" fill="#ffffff" stroke="#bae6fd" stroke-width="1.5"/>
      <text x="160" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0369a1">
        TRAVAIL CONSTANT : W = F × L
      </text>
      <text x="160" y="36" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">
        W en Joules (J) ; F en Newtons (N) ; L en mètres (m)
      </text>

      <line x1="20" y1="45" x2="300" y2="45" stroke="#e2e8f0"/>

      <text x="160" y="60" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0f172a">
        PUISSANCE : P = W / t = F × v
      </text>
      <text x="160" y="75" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#64748b">
        P en Watts (W) ; t en secondes (s) ; v en m/s
      </text>
    </g>
  </g>
</svg>
`)}`;

/**
 * Figure 10 : Courant alternatif sinusoïdal & Puissance/Énergie (Facture Senelec)
 */
export const SVG_PC3_FIG10_ELECTRICITE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="10" y="10" width="740" height="300" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="800" text-anchor="middle" fill="#0f172a">
    FIGURE 10 : COURANT ALTERNATIF SINUSOÏDAL &amp; ÉNERGIE ÉLECTRIQUE (SENELEC)
  </text>
  <text x="380" y="50" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">
    Oscilloscope (Umax, T, f = 50 Hz au Sénégal) &nbsp;|&nbsp; Relation Umax = Ueff × √2 &nbsp;|&nbsp; Énergie E = P × t (kWh et Joules)
  </text>

  <!-- Écran oscilloscope -->
  <g transform="translate(30, 65)">
    <rect width="320" height="230" rx="10" fill="#0f172a" stroke="#334155" stroke-width="2"/>
    <text x="160" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#38bdf8">
      OSCILLOGRAMME DU COURANT SINUSOÏDAL
    </text>

    <!-- Grille de l'oscilloscope 8x6 div -->
    <g transform="translate(20, 35)">
      <!-- Lignes de grille -->
      <path d="M 0 0 L 280 0 M 0 25 L 280 25 M 0 50 L 280 50 M 0 75 L 280 75 M 0 100 L 280 100 M 0 125 L 280 125 M 0 150 L 280 150" stroke="#1e293b" stroke-width="1"/>
      <path d="M 0 0 L 0 150 M 35 0 L 35 150 M 70 0 L 70 150 M 105 0 L 105 150 M 140 0 L 140 150 M 175 0 L 175 150 M 210 0 L 210 150 M 245 0 L 245 150 M 280 0 L 280 150" stroke="#1e293b" stroke-width="1"/>

      <!-- Axe zéro central -->
      <line x1="0" y1="75" x2="280" y2="75" stroke="#475569" stroke-width="1.5"/>

      <!-- Onde sinusoïdale lumineuse verte -->
      <path d="M 0 75 Q 35 15 70 75 T 140 75 T 210 75 T 280 75" fill="none" stroke="#22c55e" stroke-width="2.5"/>

      <!-- Repère Umax -->
      <line x1="35" y1="75" x2="35" y2="25" stroke="#f43f5e" stroke-width="2"/>
      <polygon points="35,20 31,28 39,28" fill="#f43f5e"/>
      <text x="45" y="45" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#f43f5e">Umax</text>

      <!-- Repère Période T -->
      <line x1="0" y1="135" x2="140" y2="135" stroke="#38bdf8" stroke-width="2"/>
      <polygon points="0,135 6,131 6,139" fill="#38bdf8"/>
      <polygon points="140,135 134,131 134,139" fill="#38bdf8"/>
      <text x="70" y="147" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#38bdf8">Période T (1 cycle complet)</text>
    </g>

    <text x="160" y="215" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#94a3b8">
      Sensibilité H = 5 ms/div &nbsp;|&nbsp; Sensibilité V = 100 V/div
    </text>
  </g>

  <!-- Formules électriques & Facturation Senelec -->
  <g transform="translate(370, 65)">
    <rect width="360" height="230" rx="10" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
    <text x="180" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#854d0e">
      RELATIONS FONDAMENTALES DU BFEM
    </text>

    <!-- Boîte 1 : T, f, Ueff -->
    <rect x="15" y="40" width="330" height="55" rx="6" fill="#ffffff" stroke="#fde047"/>
    <text x="180" y="58" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0f172a">
      f = 1 / T &nbsp;|&nbsp; Au Sénégal : f = 50 Hz ➔ T = 0,02 s = 20 ms
    </text>
    <text x="180" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#dc2626">
      Umax = Ueff × √2 &nbsp;⟺&nbsp; Ueff = Umax / √2 ≈ 0,707 × Umax
    </text>

    <!-- Boîte 2 : Puissance et Énergie -->
    <rect x="15" y="105" width="330" height="60" rx="6" fill="#ffffff" stroke="#fde047"/>
    <text x="180" y="123" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#15803d">
      PUISSANCE : P = Ueff × Ieff &nbsp;(en Watts W)
    </text>
    <text x="180" y="141" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#1d4ed8">
      ÉNERGIE : E = P × t &nbsp;(en Joules ou en kWh)
    </text>
    <text x="180" y="157" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">
      Conversion capitale : 1 kWh = 1 000 W × 3 600 s = 3 600 000 J (3,6 × 10⁶ J)
    </text>

    <!-- Facture Senelec -->
    <rect x="15" y="175" width="330" height="42" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="180" y="193" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" text-anchor="middle" fill="#166534">
      FACTURE SENELEC : Coût = Énergie (kWh) × Prix unitaire
    </text>
    <text x="180" y="207" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#64748b">
      Protection des personnes : Disjoncteur différentiel + Prise de terre obligatoire.
    </text>
  </g>
</svg>
`)}`;
