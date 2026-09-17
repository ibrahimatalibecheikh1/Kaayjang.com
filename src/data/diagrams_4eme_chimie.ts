// =========================================================================
// SCHÉMAS ET FIGURES SCIENTIFIQUES VECTORIELLES — CHIMIE 4ÈME
// Conformes au document officiel "Cours Complet de Chimie - Classe de 4ème"
// =========================================================================

/**
 * Figure 1 : Graphique simplifié de la répartition en volume des constituants majeurs de l'air
 * Diazote (78%), Dioxygène (21%), Autres gaz (1%)
 */
export const SVG_CHIMIE_FIG1_AIR_COMPOSITION = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="shadowFig1" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgFig1)" rx="16"/>
  <rect x="12" y="12" width="736" height="256" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 1 : Répartition en volume des constituants majeurs de l'air
  </text>
  <text x="380" y="64" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    L'air est un mélange homogène de gaz : ~4/5 de Diazote, ~1/5 de Dioxygène et ~1% d'autres gaz
  </text>

  <!-- Conteneur des barres de proportion -->
  <g transform="translate(45, 90)">
    <!-- Cadre extérieur -->
    <rect x="0" y="0" width="670" height="90" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#shadowFig1)"/>

    <!-- Bloc Diazote 78% (522.6px) -->
    <rect x="4" y="4" width="518" height="82" rx="6" fill="#3b82f6"/>
    <text x="263" y="43" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800" text-anchor="middle" fill="#ffffff">
      Diazote (78 %)
    </text>
    <text x="263" y="66" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="#dbeafe">
      N₂ — Environ 4/5 du volume (gaz inerte)
    </text>

    <!-- Bloc Dioxygène 21% (140.7px) -->
    <rect x="526" y="4" width="100" height="82" rx="6" fill="#f87171"/>
    <text x="576" y="43" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#ffffff">
      Dioxygène (21 %)
    </text>
    <text x="576" y="64" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" fill="#fee2e2">
      O₂ (~1/5)
    </text>

    <!-- Bloc Autres gaz 1% (36px) -->
    <rect x="630" y="4" width="36" height="82" rx="4" fill="#34d399"/>
    <text x="648" y="49" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#065f46">
      1%
    </text>
  </g>

  <!-- Légende en dessous -->
  <g transform="translate(60, 210)">
    <circle cx="10" cy="10" r="7" fill="#3b82f6"/>
    <text x="26" y="14" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#1e3a8a">Diazote N₂ (78% ≈ 4/5)</text>

    <circle cx="250" cy="10" r="7" fill="#f87171"/>
    <text x="266" y="14" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#991b1b">Dioxygène O₂ (21% ≈ 1/5, entretient la vie & les combustions)</text>

    <circle cx="560" cy="10" r="7" fill="#34d399"/>
    <text x="576" y="14" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#065f46">Autres gaz (1% : Argon, CO₂, vapeur)</text>
  </g>
</svg>
`)}`;

/**
 * Figure 2 : Expérience montrant la consommation du dioxygène de l'air
 * Bougie allumée sous éprouvette retournée sur cuve à eau : Début vs Fin (eau monte d'1/5)
 */
export const SVG_CHIMIE_FIG2_COMBUSTION_O2_EXPERIENCE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgFig2)" rx="16"/>
  <rect x="12" y="12" width="736" height="336" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 2 : Expérience de mise en évidence du dioxygène de l'air
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Consommation du dioxygène (1/5 du volume) par combustion et montée de l'eau
  </text>

  <!-- GRANDE CUVE À EAU COMMUNE EN BAS -->
  <g id="cuve">
    <rect x="70" y="240" width="620" height="40" rx="4" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
    <rect x="73" y="248" width="614" height="28" fill="url(#waterGrad)" opacity="0.6"/>
    <text x="380" y="266" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">
      Cuve d'eau colorée
    </text>
  </g>

  <!-- ================= ÉTAT INITIAL : DÉBUT ================= -->
  <g transform="translate(140, 70)">
    <!-- Cadre / Cloche -->
    <rect x="0" y="10" width="140" height="170" rx="4" fill="#ffffff" fill-opacity="0.8" stroke="#334155" stroke-width="2.5"/>
    <text x="70" y="-2" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#1e293b">
      DÉBUT (t = 0)
    </text>

    <!-- Air enfermé (100% du volume) -->
    <rect x="2" y="12" width="136" height="158" fill="#f1f5f9" opacity="0.5"/>
    <text x="70" y="35" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">
      Air initial (V₀)
    </text>
    <text x="70" y="50" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle" fill="#2563eb">
      4/5 N₂ + 1/5 O₂
    </text>

    <!-- Bougie allumée -->
    <!-- Support bougie -->
    <rect x="52" y="145" width="36" height="25" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" rx="2"/>
    <rect x="66" y="100" width="8" height="45" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
    <!-- Mèche -->
    <line x1="70" y1="100" x2="70" y2="92" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Flamme vive -->
    <ellipse cx="70" cy="84" rx="7" ry="12" fill="url(#flameGrad)"/>
    <ellipse cx="70" cy="85" rx="3.5" ry="6" fill="#ffffff" opacity="0.8"/>

    <!-- Petit niveau d'eau initial au bas de l'éprouvette -->
    <rect x="2" y="165" width="136" height="15" fill="url(#waterGrad)" opacity="0.8"/>

    <!-- Commentaire -->
    <text x="70" y="200" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle" fill="#1e40af">
      La bougie brûle dans le dioxygène O₂
    </text>
  </g>

  <!-- FLÈCHE DE TRANSFORMATION -->
  <g transform="translate(355, 145)">
    <line x1="0" y1="0" x2="45" y2="0" stroke="#f59e0b" stroke-width="4"/>
    <polygon points="45,-6 57,0 45,6" fill="#f59e0b"/>
    <text x="25" y="-12" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle">
      Combustion
    </text>
  </g>

  <!-- ================= ÉTAT FINAL : FIN ================= -->
  <g transform="translate(470, 70)">
    <!-- Cadre / Cloche -->
    <rect x="0" y="10" width="140" height="170" rx="4" fill="#ffffff" fill-opacity="0.8" stroke="#334155" stroke-width="2.5"/>
    <text x="70" y="-2" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#dc2626">
      FIN (Flamme éteinte)
    </text>

    <!-- Zone supérieure : Gaz résiduels incombustibles (4/5 N₂ inerte) -->
    <rect x="2" y="12" width="136" height="126" fill="#f1f5f9" opacity="0.6"/>
    <text x="70" y="35" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">
      Gaz restant : Diazote N₂
    </text>
    <text x="70" y="50" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle" fill="#64748b">
      ~ 4/5 du volume initial (inerte)
    </text>

    <!-- Montée de l'eau occupant exactement 1/5 du volume -->
    <rect x="2" y="138" width="136" height="42" fill="url(#waterGrad)" opacity="0.9"/>
    <line x1="2" y1="138" x2="138" y2="138" stroke="#1e40af" stroke-width="2" stroke-dasharray="3,2"/>

    <!-- Bougie éteinte noyée / mèche avec fumée -->
    <rect x="52" y="145" width="36" height="25" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" rx="2"/>
    <rect x="66" y="110" width="8" height="35" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
    <line x1="70" y1="110" x2="70" y2="104" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Filet de fumée grise -->
    <path d="M 70 104 Q 67 98 72 92 Q 76 86 71 80" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2"/>

    <!-- Flèche de cote 1/5 pour la colonne d'eau -->
    <line x1="148" y1="138" x2="148" y2="180" stroke="#dc2626" stroke-width="2"/>
    <line x1="143" y1="138" x2="153" y2="138" stroke="#dc2626" stroke-width="2"/>
    <line x1="143" y1="180" x2="153" y2="180" stroke="#dc2626" stroke-width="2"/>
    <text x="156" y="162" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">
      1/5
    </text>

    <text x="70" y="200" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#dc2626">
      L'eau est montée d'environ 1/5 (20 %)
    </text>
  </g>

  <!-- Conclusion d'expérience -->
  <rect x="70" y="300" width="620" height="32" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <text x="380" y="321" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e3a8a">
    Conclusion : Le dioxygène consommé par la combustion représentait 1/5 (21 %) du volume d'air initial.
  </text>
</svg>
`)}`;

/**
 * Figure 3 : Propriétés physiques des gaz — Compressibilité et Expansibilité avec une seringue bouchée
 * Compression (Volume diminue) vs Expansion (Volume augmente)
 */
export const SVG_CHIMIE_FIG3_SERINGUE_COMPRESSION_EXPANSION = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <linearGradient id="pistonGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgFig3)" rx="16"/>
  <rect x="12" y="12" width="736" height="296" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 3 : Mise en évidence de la compressibilité et de l'expansibilité avec une seringue bouchée
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Les gaz n'ont ni forme propre ni volume propre : ils sont compressibles et expansibles
  </text>

  <!-- ================= GAUCHE : COMPRESSION (V DIMINUE) ================= -->
  <g transform="translate(60, 95)">
    <text x="140" y="-10" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#dc2626">
      COMPRESSION (Le volume diminue)
    </text>

    <!-- Corps de la seringue -->
    <rect x="20" y="10" width="200" height="60" rx="3" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
    <!-- Embout bouché rouge -->
    <rect x="8" y="32" width="12" height="16" rx="2" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="14" y="60" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">Bouchon</text>

    <!-- Gaz comprimé (espace réduit) -->
    <rect x="22" y="12" width="78" height="56" fill="#fecaca" opacity="0.6"/>
    <!-- Molécules d'air très serrées (points) -->
    <circle cx="35" cy="25" r="3" fill="#dc2626"/>
    <circle cx="55" cy="22" r="3" fill="#dc2626"/>
    <circle cx="75" cy="28" r="3" fill="#dc2626"/>
    <circle cx="45" cy="40" r="3" fill="#dc2626"/>
    <circle cx="68" cy="42" r="3" fill="#dc2626"/>
    <circle cx="38" cy="55" r="3" fill="#dc2626"/>
    <circle cx="60" cy="58" r="3" fill="#dc2626"/>
    <circle cx="85" cy="50" r="3" fill="#dc2626"/>
    <text x="60" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#991b1b">
      Air comprimé (haute pression)
    </text>

    <!-- Piston poussé vers la gauche -->
    <rect x="100" y="12" width="20" height="56" fill="#334155"/>
    <rect x="120" y="34" width="120" height="12" fill="url(#pistonGrad)"/>
    <rect x="240" y="24" width="8" height="32" rx="2" fill="#475569"/>

    <!-- Flèche de force de poussée -->
    <g transform="translate(260, 40)">
      <line x1="35" y1="0" x2="8" y2="0" stroke="#dc2626" stroke-width="4"/>
      <polygon points="8,-6 -2,0 8,6" fill="#dc2626"/>
      <text x="20" y="-10" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">
        POUSSER
      </text>
    </g>

    <!-- Bilan sous la compression -->
    <rect x="10" y="105" width="270" height="50" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
    <text x="145" y="126" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">
      • La pression du gaz augmente
    </text>
    <text x="145" y="144" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">
      • Le volume du gaz diminue
    </text>
  </g>

  <!-- ================= DROITE : EXPANSION (V AUGMENTE) ================= -->
  <g transform="translate(430, 95)">
    <text x="140" y="-10" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#2563eb">
      EXPANSION / DÉTENTE (Le volume augmente)
    </text>

    <!-- Corps de la seringue -->
    <rect x="20" y="10" width="200" height="60" rx="3" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
    <!-- Embout bouché rouge -->
    <rect x="8" y="32" width="12" height="16" rx="2" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="14" y="60" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">Bouchon</text>

    <!-- Gaz expansé (espace large) -->
    <rect x="22" y="12" width="168" height="56" fill="#dbeafe" opacity="0.6"/>
    <!-- Molécules d'air très espacées -->
    <circle cx="35" cy="25" r="3" fill="#2563eb"/>
    <circle cx="75" cy="22" r="3" fill="#2563eb"/>
    <circle cx="120" cy="30" r="3" fill="#2563eb"/>
    <circle cx="165" cy="25" r="3" fill="#2563eb"/>
    <circle cx="50" cy="50" r="3" fill="#2563eb"/>
    <circle cx="100" cy="55" r="3" fill="#2563eb"/>
    <circle cx="145" cy="52" r="3" fill="#2563eb"/>
    <text x="106" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#1e40af">
      Air détendu (basse pression)
    </text>

    <!-- Piston tiré vers la droite -->
    <rect x="190" y="12" width="20" height="56" fill="#334155"/>
    <rect x="210" y="34" width="40" height="12" fill="url(#pistonGrad)"/>
    <rect x="250" y="24" width="8" height="32" rx="2" fill="#475569"/>

    <!-- Flèche de force de tirage -->
    <g transform="translate(265, 40)">
      <line x1="0" y1="0" x2="25" y2="0" stroke="#2563eb" stroke-width="4"/>
      <polygon points="25,-6 35,0 25,6" fill="#2563eb"/>
      <text x="16" y="-10" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2563eb" text-anchor="middle">
        TIRER
      </text>
    </g>

    <!-- Bilan sous l'expansion -->
    <rect x="10" y="105" width="270" height="50" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="145" y="126" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">
      • La pression du gaz diminue
    </text>
    <text x="145" y="144" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">
      • Le volume du gaz augmente
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 4 : Modèles moléculaires de corps simples et composés
 * Dioxygène (O2), Eau (H2O), Dioxyde de carbone (CO2)
 */
export const SVG_CHIMIE_FIG4_MOLECULES_CORPS_SIMPLES_COMPOSES = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <radialGradient id="atomRed" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="40%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </radialGradient>
    <radialGradient id="atomWhite" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </radialGradient>
    <radialGradient id="atomBlack" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="40%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgFig4)" rx="16"/>
  <rect x="12" y="12" width="736" height="276" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 4 : Modèles moléculaires de corps simples et composés
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Atomes : Carbone C (noir), Hydrogène H (blanc/gris), Oxygène O (rouge), Azote N (bleu)
  </text>

  <!-- ================= 1. DIOXYGÈNE O₂ ================= -->
  <g transform="translate(40, 85)">
    <rect x="0" y="0" width="200" height="175" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="100" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">
      Dioxygène (O₂)
    </text>
    <text x="100" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">
      Corps simple moléculaire
    </text>

    <!-- 2 atomes d'oxygène rouges liés -->
    <circle cx="82" cy="90" r="28" fill="url(#atomRed)"/>
    <circle cx="118" cy="90" r="28" fill="url(#atomRed)"/>

    <text x="100" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">
      Formule : O₂
    </text>
    <text x="100" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#475569" text-anchor="middle">
      2 atomes d'oxygène
    </text>
  </g>

  <!-- ================= 2. EAU H₂O ================= -->
  <g transform="translate(280, 85)">
    <rect x="0" y="0" width="200" height="175" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="100" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">
      Eau (H₂O)
    </text>
    <text x="100" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">
      Corps composé moléculaire
    </text>

    <!-- 1 oxygène central rouge et 2 hydrogènes blancs coudés -->
    <circle cx="100" cy="84" r="28" fill="url(#atomRed)"/>
    <circle cx="75" cy="106" r="16" fill="url(#atomWhite)" stroke="#cbd5e1" stroke-width="1"/>
    <circle cx="125" cy="106" r="16" fill="url(#atomWhite)" stroke="#cbd5e1" stroke-width="1"/>

    <text x="100" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb" text-anchor="middle">
      Formule : H₂O
    </text>
    <text x="100" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#475569" text-anchor="middle">
      1 Oxygène + 2 Hydrogènes
    </text>
  </g>

  <!-- ================= 3. DIOXYDE DE CARBONE CO₂ ================= -->
  <g transform="translate(520, 85)">
    <rect x="0" y="0" width="200" height="175" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="100" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">
      Dioxyde de Carbone (CO₂)
    </text>
    <text x="100" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">
      Corps composé moléculaire
    </text>

    <!-- 1 carbone noir central et 2 oxygènes rouges latéraux alignés -->
    <circle cx="62" cy="90" r="26" fill="url(#atomRed)"/>
    <circle cx="100" cy="90" r="24" fill="url(#atomBlack)"/>
    <circle cx="138" cy="90" r="26" fill="url(#atomRed)"/>

    <text x="100" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">
      Formule : CO₂
    </text>
    <text x="100" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#475569" text-anchor="middle">
      1 Carbone + 2 Oxygènes
    </text>
  </g>
</svg>
`)}`;

/**
 * Figure 5 : Combustion du carbone et test d'identification du gaz formé
 * Flacon avec combustion vive du carbone (incandescence et étincelles) puis test à l'eau de chaux troublée
 */
export const SVG_CHIMIE_FIG5_COMBUSTION_CARBONE_EAU_CHAUX = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <radialGradient id="emberGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="25%" stop-color="#fef08a"/>
      <stop offset="60%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgFig5)" rx="16"/>
  <rect x="12" y="12" width="736" height="316" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 5 : Combustion du carbone et test d'identification du gaz formé
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Carbone (C) + Dioxygène (O₂) ➔ Dioxyde de carbone (CO₂) qui trouble l'eau de chaux
  </text>

  <!-- ================= ÉTAPE 1 : COMBUSTION VIVE DANS O₂ ================= -->
  <g transform="translate(110, 80)">
    <text x="90" y="-5" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#ea580c">
      1. COMBUSTION VIVE DANS O₂
    </text>

    <!-- Flacon en verre -->
    <rect x="40" y="15" width="100" height="150" rx="12" fill="#ffffff" fill-opacity="0.8" stroke="#334155" stroke-width="2.5"/>
    <rect x="70" y="5" width="40" height="15" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>

    <!-- Cuillère à déflagration suspendue -->
    <line x1="90" y1="0" x2="90" y2="85" stroke="#475569" stroke-width="3"/>
    <path d="M 80 85 Q 90 92 100 85" fill="none" stroke="#475569" stroke-width="3"/>

    <!-- Morceau de fusain incandescent (charbon de bois) -->
    <circle cx="90" cy="85" r="14" fill="url(#emberGlow)"/>
    <!-- Étincelles vives -->
    <line x1="90" y1="65" x2="90" y2="60" stroke="#f59e0b" stroke-width="2"/>
    <line x1="72" y1="72" x2="66" y2="67" stroke="#f59e0b" stroke-width="2"/>
    <line x1="108" y1="72" x2="114" y2="67" stroke="#f59e0b" stroke-width="2"/>
    <line x1="110" y1="95" x2="118" y2="100" stroke="#f59e0b" stroke-width="2"/>
    <line x1="70" y1="95" x2="62" y2="100" stroke="#f59e0b" stroke-width="2"/>

    <text x="90" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">
      Dioxygène pur (O₂)
    </text>

    <!-- Légende sous le flacon 1 -->
    <text x="90" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" text-anchor="middle">
      Incandescence très vive
    </text>
    <text x="90" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" text-anchor="middle">
      Production d'étincelles
    </text>
  </g>

  <!-- FLÈCHE VERS ÉTAPE 2 -->
  <g transform="translate(330, 160)">
    <line x1="0" y1="0" x2="80" y2="0" stroke="#0284c7" stroke-width="3"/>
    <polygon points="80,-6 92,0 80,6" fill="#0284c7"/>
    <text x="46" y="-12" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">
      + Eau de chaux
    </text>
    <text x="46" y="22" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">
      Agitation
    </text>
  </g>

  <!-- ================= ÉTAPE 2 : TEST À L'EAU DE CHAUX TROUBLÉE ================= -->
  <g transform="translate(470, 80)">
    <text x="90" y="-5" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#0284c7">
      2. TEST DU GAZ PRODUIT
    </text>

    <!-- Flacon bouché -->
    <rect x="40" y="15" width="100" height="150" rx="12" fill="#ffffff" fill-opacity="0.8" stroke="#334155" stroke-width="2.5"/>
    <!-- Bouchon hermétique -->
    <rect x="68" y="5" width="44" height="16" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>

    <!-- Gaz incolore dioxyde de carbone CO₂ dans le flacon -->
    <rect x="42" y="17" width="96" height="98" fill="#f8fafc" opacity="0.4"/>
    <text x="90" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#475569" text-anchor="middle">
      Gaz CO₂ formé
    </text>

    <!-- Eau de chaux blanchie / troublée au fond -->
    <rect x="42" y="115" width="96" height="48" rx="2" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/>
    <!-- Précipité blanc laiteux (particules de carbonate de calcium) -->
    <circle cx="60" cy="130" r="3" fill="#ffffff"/>
    <circle cx="85" cy="125" r="2.5" fill="#ffffff"/>
    <circle cx="110" cy="132" r="3" fill="#ffffff"/>
    <circle cx="72" cy="145" r="2.5" fill="#ffffff"/>
    <circle cx="100" cy="148" r="3" fill="#ffffff"/>

    <text x="90" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f172a" text-anchor="middle">
      Eau de chaux
    </text>
    <text x="90" y="153" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0369a1" text-anchor="middle">
      TROUBLÉE (blanc)
    </text>

    <!-- Légende sous le flacon 2 -->
    <text x="90" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">
      Confirmation formelle :
    </text>
    <text x="90" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">
      Présence de CO₂
    </text>
  </g>

  <!-- Bilan textuel officiel en bas -->
  <rect x="70" y="275" width="620" height="36" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="298" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#0f172a">
    Bilan de la réaction : Carbone (C) + Dioxygène (O₂) ➔ Dioxyde de carbone (CO₂)
  </text>
</svg>
`)}`;

/**
 * Figure 6 : Représentation moléculaire de la conservation des atomes au cours de la réaction chimique
 * 2 H2 + O2 ➔ 2 H2O
 * (4 atomes H blancs + 2 atomes O rouges ➔ 2 molécules H2O contenant 4 atomes H et 2 atomes O)
 */
export const SVG_CHIMIE_FIG6_REACTION_MOLECULAIRE_EQUILIBREE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bgFig6" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <radialGradient id="atomRed6" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="40%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </radialGradient>
    <radialGradient id="atomWhite6" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgFig6)" rx="16"/>
  <rect x="12" y="12" width="736" height="276" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="380" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 6 : Représentation moléculaire de la conservation des atomes
  </text>
  <text x="380" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Loi de Lavoisier : « Rien ne se perd, rien ne se crée, tout se transforme » — Les atomes se réarrangent
  </text>

  <!-- ================= GAUCHE : LES RÉACTIFS (2 H₂ + O₂) ================= -->
  <g transform="translate(60, 90)">
    <rect x="0" y="0" width="260" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="130" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">
      RÉACTIFS : 2 H₂ + O₂
    </text>

    <!-- Molécule 1 de H₂ -->
    <circle cx="45" cy="55" r="14" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>
    <circle cx="68" cy="55" r="14" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>

    <!-- Signe + -->
    <text x="100" y="70" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#64748b" text-anchor="middle">+</text>

    <!-- Molécule 2 de H₂ -->
    <circle cx="45" cy="95" r="14" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>
    <circle cx="68" cy="95" r="14" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>

    <!-- Molécule de O₂ -->
    <circle cx="150" cy="75" r="22" fill="url(#atomRed6)"/>
    <circle cx="186" cy="75" r="22" fill="url(#atomRed6)"/>

    <!-- Comptage atomes réactifs -->
    <text x="130" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">
      Total : 4 atomes H (blancs) + 2 atomes O (rouges)
    </text>
  </g>

  <!-- FLÈCHE DE LA RÉACTION CHIMIQUE -->
  <g transform="translate(335, 155)">
    <line x1="0" y1="0" x2="80" y2="0" stroke="#0f172a" stroke-width="4"/>
    <polygon points="80,-7 95,0 80,7" fill="#0f172a"/>
    <text x="45" y="-12" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">
      Réaction
    </text>
  </g>

  <!-- ================= DROITE : LES PRODUITS (2 H₂O) ================= -->
  <g transform="translate(440, 90)">
    <rect x="0" y="0" width="260" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="130" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">
      PRODUITS : 2 H₂O
    </text>

    <!-- 1ère molécule d'eau H₂O -->
    <circle cx="65" cy="70" r="22" fill="url(#atomRed6)"/>
    <circle cx="45" cy="88" r="13" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>
    <circle cx="85" cy="88" r="13" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>

    <!-- Signe + -->
    <text x="130" y="80" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#64748b" text-anchor="middle">+</text>

    <!-- 2ème molécule d'eau H₂O -->
    <circle cx="195" cy="70" r="22" fill="url(#atomRed6)"/>
    <circle cx="175" cy="88" r="13" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>
    <circle cx="215" cy="88" r="13" fill="url(#atomWhite6)" stroke="#cbd5e1" stroke-width="1"/>

    <!-- Comptage atomes produits -->
    <text x="130" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">
      Total : 4 atomes H (blancs) + 2 atomes O (rouges)
    </text>
  </g>

  <!-- Équation chimique équilibrée et bilan en bas -->
  <rect x="60" y="240" width="640" height="36" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
  <text x="380" y="263" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#1e3a8a">
    Équation chimique équilibrée : 2 H₂ + O₂ ➔ 2 H₂O (Conservation parfaite de la matière et des atomes)
  </text>
</svg>
`)}`;
