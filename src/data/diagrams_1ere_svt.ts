// =========================================================================
// SCHÉMAS, FIGURES ET COURBES SCIENTIFIQUES VECTORIELLES — SVT PREMIÈRE
// Séries S1, S2, L1 et L2 — Conformes au Programme Officiel du Sénégal
// Inspection Générale de l'Éducation Nationale (IGEN - Sénégal)
// =========================================================================

/**
 * 1. Courbe de cinétique enzymatique : Vitesse de réaction en fonction de la concentration en substrat
 * Inclut Vmax, Km (constante de Michaelis), et effet comparatif d'un inhibiteur compétitif
 * Avec sous-graphes : effet de la température (T° optimum) et effet du pH (pH optimum)
 */
export const SVG_SVT_1ERE_CINETIQUE_ENZYME = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEnz" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="shadowBox" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgEnz)" rx="16"/>
  <rect x="12" y="12" width="876" height="496" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- En-tête -->
  <text x="450" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#0f172a">
    COURBE EXPÉRIMENTALE 1 : CINÉTIQUE ENZYMATIQUE ET CATALYSE BIOLOGIQUE
  </text>
  <text x="450" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Vitesse initiale (Vi) en fonction de [Substrat], détermination de Vmax et Km (Michaelis-Menten), et influence de la température et du pH
  </text>

  <!-- Graphe Principal : Vi = f([S]) -->
  <g transform="translate(60, 90)">
    <!-- Fond du graphe -->
    <rect x="0" y="0" width="460" height="340" fill="#ffffff" rx="8" stroke="#e2e8f0" stroke-width="1"/>
    <!-- Quadrillage -->
    <path d="M 0,60 L 460,60 M 0,120 L 460,120 M 0,180 L 460,180 M 0,240 L 460,240 M 0,300 L 460,300" stroke="#f1f5f9" stroke-width="1.5"/>
    <path d="M 90,0 L 90,340 M 180,0 L 180,340 M 270,0 L 270,340 M 360,0 L 360,340" stroke="#f1f5f9" stroke-width="1.5"/>

    <!-- Axes -->
    <line x1="40" y1="300" x2="440" y2="300" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="40" y1="300" x2="40" y2="20" stroke="#0f172a" stroke-width="2.5"/>
    <polygon points="440,296 448,300 440,304" fill="#0f172a"/>
    <polygon points="36,20 40,12 44,20" fill="#0f172a"/>

    <!-- Titres des axes -->
    <text x="445" y="325" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="end" fill="#1e293b">[Substrat] (mmol/L)</text>
    <text x="25" y="15" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">Vi (µmol/min)</text>

    <!-- Asymptote Vmax -->
    <line x1="40" y1="70" x2="430" y2="70" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text x="435" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">Vmax = 100%</text>

    <!-- Ligne Vmax/2 -->
    <line x1="40" y1="185" x2="155" y2="185" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="155" y1="185" x2="155" y2="300" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>
    <circle cx="155" cy="185" r="4" fill="#2563eb"/>
    <text x="35" y="190" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="end" fill="#475569">Vmax / 2</text>
    <text x="155" y="318" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#2563eb">Km</text>

    <!-- Courbe normale enzyme seule (Bleu) -->
    <path d="M 40,300 C 90,220 120,130 190,90 C 260,75 350,71 430,70" fill="none" stroke="#2563eb" stroke-width="3.5"/>
    <text x="290" y="85" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb">Enzyme normale</text>

    <!-- Courbe avec inhibiteur compétitif (Violet) -->
    <path d="M 40,300 C 130,280 200,190 280,120 C 340,85 390,73 430,70" fill="none" stroke="#9333ea" stroke-width="2.5" stroke-dasharray="6 3"/>
    <text x="300" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9333ea">+ Inhibiteur compétitif (Km augmente)</text>

    <!-- Annotations de phases -->
    <rect x="70" y="240" width="80" height="22" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="110" y="255" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#1d4ed8">Phase linéaire</text>

    <rect x="250" y="240" width="95" height="22" rx="4" fill="#fef2f2" stroke="#fecaca"/>
    <text x="297" y="255" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#b91c1c">Phase de saturation</text>
  </g>

  <!-- Graphe Secondaire Haut : Effet de la Température -->
  <g transform="translate(560, 90)">
    <rect x="0" y="0" width="290" height="160" fill="#ffffff" rx="8" stroke="#e2e8f0" stroke-width="1"/>
    <text x="145" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">
      Effet de la Température (°C)
    </text>

    <!-- Axes -->
    <line x1="35" y1="135" x2="265" y2="135" stroke="#334155" stroke-width="1.5"/>
    <line x1="35" y1="135" x2="35" y2="35" stroke="#334155" stroke-width="1.5"/>
    <text x="260" y="150" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="end" fill="#475569">T (°C)</text>
    <text x="25" y="32" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#475569">Activité</text>

    <!-- Courbe T° -->
    <path d="M 45,133 C 70,130 110,120 145,50 C 160,52 175,100 200,134" fill="none" stroke="#ea580c" stroke-width="2.5"/>
    <!-- Optimum -->
    <line x1="145" y1="50" x2="145" y2="135" stroke="#ea580c" stroke-width="1" stroke-dasharray="2 2"/>
    <circle cx="145" cy="50" r="3.5" fill="#ea580c"/>
    <text x="145" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#ea580c">Optimum (37°C)</text>
    <text x="210" y="105" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#dc2626">Dénaturation (&gt;55°C)</text>
  </g>

  <!-- Graphe Secondaire Bas : Effet du pH -->
  <g transform="translate(560, 270)">
    <rect x="0" y="0" width="290" height="160" fill="#ffffff" rx="8" stroke="#e2e8f0" stroke-width="1"/>
    <text x="145" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">
      Effet du pH sur différentes enzymes
    </text>

    <!-- Axes -->
    <line x1="35" y1="135" x2="265" y2="135" stroke="#334155" stroke-width="1.5"/>
    <line x1="35" y1="135" x2="35" y2="35" stroke="#334155" stroke-width="1.5"/>
    <text x="260" y="150" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="end" fill="#475569">pH (0 à 14)</text>
    <text x="25" y="32" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#475569">Activité</text>

    <!-- Pepsine (pH 2) -->
    <path d="M 40,135 C 50,70 65,55 75,55 C 85,55 100,85 110,135" fill="none" stroke="#059669" stroke-width="2"/>
    <text x="75" y="48" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" fill="#059669">Pepsine (pH 2)</text>

    <!-- Amylase salivaire (pH 7) -->
    <path d="M 115,135 C 130,80 145,55 155,55 C 165,55 180,85 195,135" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="155" y="48" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" fill="#2563eb">Amylase (pH 7)</text>

    <!-- Trypsine (pH 8.5) -->
    <path d="M 180,135 C 195,80 205,55 215,55 C 225,55 240,90 250,135" fill="none" stroke="#7c3aed" stroke-width="2"/>
    <text x="215" y="48" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" fill="#7c3aed">Trypsine (pH 8)</text>
  </g>

  <!-- Légende bas de page -->
  <g transform="translate(60, 450)">
    <rect x="0" y="0" width="790" height="42" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
    <text x="20" y="26" font-family="system-ui, sans-serif" font-size="11" fill="#334155">
      <tspan font-weight="800" fill="#0f172a">Formule de Michaelis-Menten : </tspan>
      Vi = (Vmax × [S]) / (Km + [S]). Lorsque [S] = Km, Vi = Vmax / 2. Km reflète l'affinité de l'enzyme (plus Km est faible, plus l'affinité est forte).
    </text>
  </g>
</svg>`;

/**
 * 2. Courbe d'oscillogramme : Le Potentiel d'Action d'une fibre nerveuse (Axone)
 * Indique le potentiel de repos (-70 mV), le seuil d'inversion (-50 mV), la dépolarisation (+30 mV),
 * la repolarisation, l'hyperpolarisation (-80 mV) et la période réfractaire.
 */
export const SVG_SVT_1ERE_POTENTIEL_ACTION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" width="100%" height="100%">
  <defs>
    <linearGradient id="bgPA" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgPA)" rx="16"/>
  <rect x="12" y="12" width="876" height="496" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="450" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#0f172a">
    COURBE OSCILLOGRAPHIQUE 2 : POTENTIEL D'ACTION MONOPHASIQUE DU NEURONE
  </text>
  <text x="450" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Enregistrement à l'oscilloscope cathodique lors d'une stimulation supraliminaire d'un axone géant
  </text>

  <!-- Graphe PA -->
  <g transform="translate(90, 85)">
    <!-- Fond du tracé -->
    <rect x="0" y="0" width="700" height="340" fill="#090d16" rx="10" stroke="#334155" stroke-width="2"/>

    <!-- Grille oscilloscope verte fluorescente subtile -->
    <path d="M 0,56 L 700,56 M 0,112 L 700,112 M 0,168 L 700,168 M 0,224 L 700,224 M 0,280 L 700,280" stroke="#064e3b" stroke-width="1" stroke-dasharray="3 3"/>
    <path d="M 100,0 L 100,340 M 200,0 L 200,340 M 300,0 L 300,340 M 400,0 L 400,340 M 500,0 L 500,340 M 600,0 L 600,340" stroke="#064e3b" stroke-width="1" stroke-dasharray="3 3"/>

    <!-- Axe vertical ddp (mV) -->
    <line x1="70" y1="310" x2="70" y2="20" stroke="#22c55e" stroke-width="2"/>
    <text x="60" y="24" font-family="monospace" font-size="12" font-weight="700" text-anchor="end" fill="#4ade80">+40 mV</text>
    <text x="60" y="68" font-family="monospace" font-size="12" font-weight="700" text-anchor="end" fill="#4ade80">+30 mV (Pic)</text>
    <text x="60" y="150" font-family="monospace" font-size="12" font-weight="700" text-anchor="end" fill="#cbd5e1">0 mV</text>
    <text x="60" y="195" font-family="monospace" font-size="12" font-weight="700" text-anchor="end" fill="#fbbf24">-50 mV (Seuil)</text>
    <text x="60" y="240" font-family="monospace" font-size="12" font-weight="700" text-anchor="end" fill="#38bdf8">-70 mV (Repos)</text>
    <text x="60" y="275" font-family="monospace" font-size="12" font-weight="700" text-anchor="end" fill="#f87171">-80 mV (Hyperpol.)</text>

    <!-- Axe horizontal Temps (ms) -->
    <line x1="70" y1="240" x2="680" y2="240" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
    <text x="680" y="258" font-family="monospace" font-size="11" font-weight="700" text-anchor="end" fill="#94a3b8">Temps (ms) →</text>
    <text x="140" y="258" font-family="monospace" font-size="11" fill="#94a3b8">0</text>
    <text x="210" y="258" font-family="monospace" font-size="11" fill="#94a3b8">1</text>
    <text x="280" y="258" font-family="monospace" font-size="11" fill="#94a3b8">2</text>
    <text x="350" y="258" font-family="monospace" font-size="11" fill="#94a3b8">3</text>
    <text x="420" y="258" font-family="monospace" font-size="11" fill="#94a3b8">4</text>
    <text x="490" y="258" font-family="monospace" font-size="11" fill="#94a3b8">5 ms</text>

    <!-- Artefact de stimulation -->
    <path d="M 120,240 L 122,210 L 124,250 L 126,240" fill="none" stroke="#facc15" stroke-width="2"/>
    <text x="122" y="195" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#facc15">Artefact de stimulation</text>

    <!-- Ligne du seuil -->
    <line x1="126" y1="190" x2="620" y2="190" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3"/>

    <!-- Courbe du Potentiel d'Action (Tracé vert néon haute brillance) -->
    <path d="M 70,240 L 120,240 L 126,240 C 135,240 145,230 155,190 C 170,130 190,65 210,65 C 225,65 240,110 260,180 C 275,235 290,270 320,270 C 370,270 410,242 460,240 L 670,240" 
          fill="none" stroke="#22c55e" stroke-width="4" stroke-linecap="round"/>

    <!-- Balises et étapes -->
    <!-- 1. Dépolarisation -->
    <circle cx="180" cy="120" r="5" fill="#38bdf8"/>
    <text x="195" y="115" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#38bdf8">1. DÉPOLARISATION</text>
    <text x="195" y="128" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Entrée massive d'ions Na+ (canaux voltage-dépendants)</text>

    <!-- Sommet / Inversion -->
    <circle cx="210" cy="65" r="5" fill="#f43f5e"/>
    <text x="210" y="48" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#f43f5e">+30 mV : Inversion de polarité</text>

    <!-- 2. Repolarisation -->
    <circle cx="255" cy="150" r="5" fill="#a855f7"/>
    <text x="270" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#c084fc">2. REPOLARISATION</text>
    <text x="270" y="163" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Fermeture canaux Na+, sortie active d'ions K+</text>

    <!-- 3. Hyperpolarisation -->
    <circle cx="320" cy="270" r="5" fill="#fb923c"/>
    <text x="335" y="290" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#fb923c">3. HYPERPOLARISATION (-80 mV)</text>
    <text x="335" y="303" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Sortie tardive prolongée de K+</text>

    <!-- 4. Rétablissement -->
    <text x="470" y="230" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#4ade80">4. RETOUR AU REPOS</text>
    <text x="470" y="243" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8">Pompe Na+/K+ ATPase (3 Na+ sortis / 2 K+ entrés)</text>
  </g>

  <!-- Période réfractaire -->
  <g transform="translate(90, 435)">
    <rect x="0" y="0" width="700" height="55" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="20" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">
      Propriétés fondamentales : Loi du Tout ou Rien &amp; Période Réfractaire
    </text>
    <text x="20" y="42" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">
      • Période Réfractaire Absolue (0 à 1,5 ms) : aucun nouveau PA n'est possible, canaux Na+ inactivés.
      • Période Réfractaire Relative (1,5 à 3,5 ms) : excitabilité partielle avec stimulation plus intense.
    </text>
  </g>
</svg>`;

/**
 * 3. Courbes synchronisées du Cycle Sexuel Féminin (Cycle Ovarien, Utérin et Hormonal sur 28 jours)
 * Comprend : LH (pic ovulatoire), FSH, Œstrogènes, Progestérone, Follicule et Muqueuse utérine
 */
export const SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 560" width="100%" height="100%">
  <defs>
    <linearGradient id="bgHorm" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#fff5f5"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgHorm)" rx="16"/>
  <rect x="12" y="12" width="896" height="536" rx="12" fill="none" stroke="#fbcfe8" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="460" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#831843">
    COURBES EXPÉRIMENTALES 3 : SYNCHRONISATION DU CYCLE REPRODUCTEUR FÉMININ (28 JOURS)
  </text>
  <text x="460" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#701a75">
    Axe hypothalamo-hypophysaire, hormones ovariennes, folliculogenèse et dentelle utérine
  </text>

  <!-- Axe du temps commun (Jours 1 à 28) -->
  <g transform="translate(140, 75)">
    <!-- Ligne verticale Jour 14 (Ovulation) -->
    <line x1="350" y1="0" x2="350" y2="420" stroke="#db2777" stroke-width="2" stroke-dasharray="4 4"/>
    <rect x="305" y="0" width="90" height="20" rx="4" fill="#fdf2f8" stroke="#f472b6"/>
    <text x="350" y="14" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#db2777">JOUR 14 : OVULATION</text>

    <!-- Zone Phase Folliculaire & Phase Lutéale -->
    <rect x="0" y="0" width="350" height="420" fill="#fdf4ff" opacity="0.4"/>
    <rect x="350" y="0" width="350" height="420" fill="#fff1f2" opacity="0.4"/>

    <text x="175" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#9333ea">PHASE FOLLICULAIRE (J1-J14)</text>
    <text x="525" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#e11d48">PHASE LUTÉALE (J14-J28)</text>

    <!-- 1. Hormones Hypophysaires : LH et FSH -->
    <g transform="translate(0, 30)">
      <rect x="0" y="0" width="700" height="90" fill="#ffffff" rx="6" stroke="#e2e8f0"/>
      <text x="-120" y="45" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#4338ca">Hormones<tspan x="-120" dy="14">hypophysaires</tspan></text>
      
      <!-- Ligne zéro -->
      <line x1="0" y1="75" x2="700" y2="75" stroke="#cbd5e1" stroke-width="1"/>

      <!-- Courbe FSH (Vert) -->
      <path d="M 0,55 C 80,50 200,60 320,40 C 340,30 350,22 360,45 C 400,60 550,65 700,55" fill="none" stroke="#059669" stroke-width="2.5"/>
      <text x="80" y="45" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#059669">FSH</text>

      <!-- Courbe LH (Bleu violet) avec PIC MAJEUR à J14 -->
      <path d="M 0,65 C 100,65 240,65 320,55 C 338,40 348,8 350,8 C 352,8 362,40 380,62 C 450,65 600,65 700,65" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <circle cx="350" cy="8" r="4" fill="#4f46e5"/>
      <text x="350" y="0" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#4f46e5">Pic de LH (Décharge ovulante)</text>
    </g>

    <!-- 2. Hormones Ovariennes : Œstrogènes & Progestérone -->
    <g transform="translate(0, 130)">
      <rect x="0" y="0" width="700" height="100" fill="#ffffff" rx="6" stroke="#e2e8f0"/>
      <text x="-120" y="45" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#be185d">Hormones<tspan x="-120" dy="14">ovariennes</tspan></text>

      <!-- Ligne zéro -->
      <line x1="0" y1="85" x2="700" y2="85" stroke="#cbd5e1" stroke-width="1"/>

      <!-- Œstrogènes / Œstradiol (Rose vif) : 1er pic à J12-13, 2e dôme à J21 -->
      <path d="M 0,78 C 80,75 220,60 320,18 C 340,12 360,60 400,65 C 480,40 550,42 620,70 C 660,80 700,82 700,82" fill="none" stroke="#db2777" stroke-width="2.5"/>
      <text x="240" y="35" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#db2777">Œstrogènes</text>

      <!-- Progestérone (Orange) : quasi nulle avant J14, dôme élevé en phase lutéale -->
      <path d="M 0,84 L 350,84 C 370,80 420,25 520,25 C 620,25 660,75 700,84" fill="none" stroke="#ea580c" stroke-width="3"/>
      <text x="520" y="16" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#ea580c">Progestérone (Sécrétée par le corps jaune)</text>
    </g>

    <!-- 3. Folliculogenèse Ovarienne -->
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="700" height="70" fill="#ffffff" rx="6" stroke="#e2e8f0"/>
      <text x="-120" y="35" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#854d0e">Cycle<tspan x="-120" dy="14">ovarien</tspan></text>

      <!-- Follicule primaire -->
      <circle cx="50" cy="35" r="10" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="50" y="60" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#713f12">Follicule I</text>

      <!-- Follicule mûr de De Graaf -->
      <circle cx="280" cy="35" r="22" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="280" cy="35" r="7" fill="#f97316"/>
      <text x="280" y="66" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#713f12">Follicule mûr</text>

      <!-- Ovulation (Expulsion ovocyte II) -->
      <circle cx="350" cy="35" r="8" fill="#ef4444"/>
      <text x="350" y="58" font-family="system-ui, sans-serif" font-size="8" font-weight="800" text-anchor="middle" fill="#ef4444">Ovocyte II</text>

      <!-- Corps jaune actif -->
      <path d="M 490,20 Q 520,15 540,35 Q 520,55 490,50 Q 470,35 490,20 Z" fill="#fde047" stroke="#eab308" stroke-width="2"/>
      <text x="505" y="65" font-family="system-ui, sans-serif" font-size="8" font-weight="800" text-anchor="middle" fill="#854d0e">Corps jaune</text>

      <!-- Corps jaune dégénéré (Corpus albicans) -->
      <circle cx="660" cy="35" r="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="660" y="58" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#64748b">Corps blanc</text>
    </g>

    <!-- 4. Cycle Utérin (Endomètre et Règles) -->
    <g transform="translate(0, 320)">
      <rect x="0" y="0" width="700" height="90" fill="#ffffff" rx="6" stroke="#e2e8f0"/>
      <text x="-120" y="45" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#991b1b">Cycle<tspan x="-120" dy="14">utérin</tspan></text>

      <!-- Menstruation (J1 à J5) -->
      <rect x="0" y="45" width="125" height="40" fill="#fca5a5" opacity="0.6"/>
      <text x="62" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#991b1b">RÈGLES (J1-J5)</text>

      <!-- Prolifération de la muqueuse (J5 à J14) -->
      <path d="M 125,80 C 180,75 280,50 350,45 L 350,85 L 125,85 Z" fill="#fed7aa"/>
      <text x="235" y="75" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412">Prolifération</text>

      <!-- Dentelle utérine sécrétoire (J14 à J28) -->
      <path d="M 350,45 C 420,35 480,25 560,25 C 640,25 680,50 700,75 L 700,85 L 350,85 Z" fill="#fecdd3"/>
      <!-- Vaisseaux spiralés en dentelle -->
      <path d="M 400,85 Q 405,65 410,55 Q 415,45 420,35" stroke="#e11d48" stroke-width="2" fill="none"/>
      <path d="M 480,85 Q 485,60 490,45 Q 495,35 500,28" stroke="#e11d48" stroke-width="2" fill="none"/>
      <path d="M 560,85 Q 565,60 570,45 Q 575,35 580,28" stroke="#e11d48" stroke-width="2" fill="none"/>
      <text x="520" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#9f1239">Dentelle utérine (Prête pour la nidation)</text>
    </g>

    <!-- Échelle des jours -->
    <g transform="translate(0, 420)">
      <line x1="0" y1="5" x2="700" y2="5" stroke="#334155" stroke-width="2"/>
      <text x="0" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">J1</text>
      <text x="125" y="22" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#475569">J5</text>
      <text x="350" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#db2777">J14 (Ovulation)</text>
      <text x="525" y="22" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#475569">J21 (Max progestérone)</text>
      <text x="700" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="end" fill="#0f172a">J28</text>
    </g>
  </g>

  <!-- Bilan rétrocontrôle -->
  <g transform="translate(30, 500)">
    <rect x="0" y="0" width="860" height="38" rx="6" fill="#fdf2f8" stroke="#fbcfe8"/>
    <text x="15" y="24" font-family="system-ui, sans-serif" font-size="10.5" fill="#831843">
      <tspan font-weight="800">Mécanisme de rétrocontrôle : </tspan>
      À dose modérée (J1-J10), les œstrogènes exercent un rétrocontrôle négatif (RC-) sur l'axe hypophysaire. À forte dose seuil (&gt;200 pg/mL pendant 48h, J12-J13), ils déclenchent un <tspan font-weight="800">rétrocontrôle positif (RC+)</tspan> qui provoque la décharge ovulante de LH.
    </text>
  </g>
</svg>`;

/**
 * 4. Les 4 étapes de la Mitose et le Cycle Cellulaire (G1, S, G2, M)
 * Prophase, Métaphase, Anaphase, Télophase avec fuseau mitotique et chromatides
 */
export const SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgMit" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f0fdf4"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgMit)" rx="16"/>
  <rect x="12" y="12" width="876" height="476" rx="12" fill="none" stroke="#bbf7d0" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="450" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#14532d">
    FIGURE SCIENTIFIQUE 4 : LE CYCLE CELLULAIRE ET LES ÉTAPES DE LA MITOSE (2n = 4)
  </text>
  <text x="450" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#166534">
    Interphase (G1, réplication en phase S, G2) et division mitotique équationnelle conforme
  </text>

  <!-- 4 Panneaux pour Prophase, Métaphase, Anaphase, Télophase -->
  <g transform="translate(30, 80)">
    <!-- 1. Prophase -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="195" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="0" y="0" width="195" height="32" rx="10" fill="#dcfce7"/>
      <text x="97" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#15803d">1. PROPHASE</text>

      <!-- Cellule -->
      <circle cx="97" cy="140" r="75" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <!-- Enveloppe nucléaire qui se fragmente -->
      <circle cx="97" cy="140" r="50" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>

      <!-- Centrosomes & fuseau -->
      <circle cx="45" cy="100" r="4" fill="#ea580c"/>
      <circle cx="150" cy="180" r="4" fill="#ea580c"/>
      <line x1="45" y1="100" x2="150" y2="180" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>

      <!-- Chromosomes condensés dupliqués (X rouge et bleu) -->
      <path d="M 85,125 L 95,145 M 95,125 L 85,145" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <path d="M 105,125 L 115,145 M 115,125 L 105,145" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
      <path d="M 90,150 L 100,165 M 100,150 L 90,165" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 105,148 L 112,163 M 112,148 L 105,163" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>

      <text x="97" y="240" font-family="system-ui, sans-serif" font-size="9.5" text-anchor="middle" fill="#334155">Condensation chromatine</text>
      <text x="97" y="252" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">Disparition membrane nucléaire</text>
    </g>

    <!-- 2. Métaphase -->
    <g transform="translate(215, 0)">
      <rect x="0" y="0" width="195" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="0" y="0" width="195" height="32" rx="10" fill="#dbeafe"/>
      <text x="97" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#1d4ed8">2. MÉTAPHASE</text>

      <!-- Cellule -->
      <circle cx="97" cy="140" r="75" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>

      <!-- Pôles du fuseau achromatique -->
      <circle cx="97" cy="70" r="4" fill="#ea580c"/>
      <circle cx="97" cy="210" r="4" fill="#ea580c"/>

      <!-- Fibres du fuseau -->
      <line x1="97" y1="70" x2="65" y2="140" stroke="#94a3b8" stroke-width="1"/>
      <line x1="97" y1="70" x2="85" y2="140" stroke="#94a3b8" stroke-width="1"/>
      <line x1="97" y1="70" x2="110" y2="140" stroke="#94a3b8" stroke-width="1"/>
      <line x1="97" y1="70" x2="130" y2="140" stroke="#94a3b8" stroke-width="1"/>
      <line x1="97" y1="210" x2="65" y2="140" stroke="#94a3b8" stroke-width="1"/>
      <line x1="97" y1="210" x2="85" y2="140" stroke="#94a3b8" stroke-width="1"/>
      <line x1="97" y1="210" x2="110" y2="140" stroke="#94a3b8" stroke-width="1"/>
      <line x1="97" y1="210" x2="130" y2="140" stroke="#94a3b8" stroke-width="1"/>

      <!-- Plaque équatoriale (alignement des centromères) -->
      <line x1="30" y1="140" x2="165" y2="140" stroke="#e11d48" stroke-width="1" stroke-dasharray="2 2"/>
      <path d="M 60,132 L 70,148 M 70,132 L 60,148" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <path d="M 80,132 L 90,148 M 90,132 L 80,148" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
      <path d="M 105,133 L 115,147 M 115,133 L 105,147" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 125,133 L 135,147 M 135,133 L 125,147" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>

      <text x="97" y="240" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Plaque équatoriale</text>
      <text x="97" y="252" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">Alignement au centre</text>
    </g>

    <!-- 3. Anaphase -->
    <g transform="translate(430, 0)">
      <rect x="0" y="0" width="195" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="0" y="0" width="195" height="32" rx="10" fill="#fef3c7"/>
      <text x="97" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#d97706">3. ANAPHASE</text>

      <!-- Cellule qui s'allonge -->
      <ellipse cx="97" cy="140" rx="72" ry="80" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>

      <!-- Pôles -->
      <circle cx="97" cy="65" r="4" fill="#ea580c"/>
      <circle cx="97" cy="215" r="4" fill="#ea580c"/>

      <!-- Chromatides sœurs qui migrent en V vers le haut -->
      <path d="M 65,108 L 70,95 L 75,108" stroke="#dc2626" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 85,108 L 90,95 L 95,108" stroke="#2563eb" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 105,108 L 110,97 L 115,108" stroke="#dc2626" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 125,108 L 130,97 L 135,108" stroke="#2563eb" stroke-width="2.5" fill="none" stroke-linecap="round"/>

      <!-- Chromatides sœurs qui migrent en V inversé vers le bas -->
      <path d="M 65,172 L 70,185 L 75,172" stroke="#dc2626" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 85,172 L 90,185 L 95,172" stroke="#2563eb" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 105,172 L 110,183 L 115,172" stroke="#dc2626" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 125,172 L 130,183 L 135,172" stroke="#2563eb" stroke-width="2.5" fill="none" stroke-linecap="round"/>

      <text x="97" y="240" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#d97706">Clivage des centromères</text>
      <text x="97" y="252" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">Ascension polaire</text>
    </g>

    <!-- 4. Télophase -->
    <g transform="translate(645, 0)">
      <rect x="0" y="0" width="195" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="0" y="0" width="195" height="32" rx="10" fill="#ede9fe"/>
      <text x="97" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#7c3aed">4. TÉLOPHASE</text>

      <!-- Étranglement cellulaire / sillon de division -->
      <path d="M 30,140 C 30,85 70,65 97,65 C 124,65 164,85 164,140 C 145,140 145,140 164,140 C 164,195 124,215 97,215 C 70,215 30,195 30,140" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <!-- Sillon équatorial de cytodiérèse -->
      <line x1="85" y1="140" x2="109" y2="140" stroke="#7c3aed" stroke-width="2" stroke-dasharray="2 2"/>

      <!-- Reconstitution de 2 noyaux -->
      <circle cx="97" cy="98" r="30" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
      <circle cx="97" cy="182" r="30" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>

      <!-- Chromatine qui se décondense -->
      <text x="97" y="103" font-family="monospace" font-size="12" text-anchor="middle" fill="#2563eb">~ ~ ~</text>
      <text x="97" y="187" font-family="monospace" font-size="12" text-anchor="middle" fill="#dc2626">~ ~ ~</text>

      <text x="97" y="240" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle" fill="#7c3aed">Cytodiérèse achevée</text>
      <text x="97" y="252" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">2 cellules filles identiques (2n)</text>
    </g>
  </g>

  <!-- Cycle Cellulaire : Quantité d'ADN au cours du temps (G1, S, G2, M) -->
  <g transform="translate(30, 360)">
    <rect x="0" y="0" width="840" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="15" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">
      ÉVOLUTION DE LA QUANTITÉ D'ADN PAR CELLULE PENDANT LE CYCLE CELLULAIRE
    </text>

    <!-- Axe Q ADN -->
    <line x1="50" y1="95" x2="800" y2="95" stroke="#334155" stroke-width="1.5"/>
    <line x1="50" y1="95" x2="50" y2="28" stroke="#334155" stroke-width="1.5"/>
    <text x="45" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="end" fill="#dc2626">2Q (Dupliqué)</text>
    <text x="45" y="75" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="end" fill="#2563eb">Q (Simple)</text>

    <!-- Courbe ADN : G1 (Q), S (Q -> 2Q), G2 (2Q), M (2Q -> Q) -->
    <!-- G1 -->
    <line x1="50" y1="72" x2="220" y2="72" stroke="#2563eb" stroke-width="3"/>
    <rect x="75" y="77" width="120" height="16" fill="#eff6ff" rx="3"/>
    <text x="135" y="89" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#1d4ed8">Phase G1 (1 chromatide)</text>

    <!-- Phase S (Réplication) -->
    <line x1="220" y1="72" x2="420" y2="35" stroke="#16a34a" stroke-width="3"/>
    <rect x="250" y="77" width="140" height="16" fill="#f0fdf4" rx="3"/>
    <text x="320" y="89" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#15803d">Phase S (Réplication d'ADN)</text>

    <!-- Phase G2 -->
    <line x1="420" y1="35" x2="620" y2="35" stroke="#dc2626" stroke-width="3"/>
    <rect x="460" y="77" width="120" height="16" fill="#fef2f2" rx="3"/>
    <text x="520" y="89" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#b91c1c">Phase G2 (2 chromatides)</text>

    <!-- Phase M (Mitose : anaphase chute à Q) -->
    <line x1="620" y1="35" x2="720" y2="35" stroke="#7c3aed" stroke-width="2.5"/>
    <line x1="720" y1="35" x2="730" y2="72" stroke="#7c3aed" stroke-width="3"/>
    <line x1="730" y1="72" x2="800" y2="72" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="670" y="77" width="110" height="16" fill="#ede9fe" rx="3"/>
    <text x="725" y="89" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#7c3aed">Phase M (Mitose)</text>
  </g>
</svg>`;

/**
 * 5. Spectre d'absorption de la Chlorophylle et Spectre d'Action Photosynthétique
 * Courbes comparatives dans le domaine de la lumière visible (400 à 700 nm)
 */
export const SVG_SVT_1ERE_SPECTRE_PHOTOSYNTHESE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" width="100%" height="100%">
  <defs>
    <linearGradient id="spectrumRainbow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4c1d95"/>
      <stop offset="15%" stop-color="#2563eb"/>
      <stop offset="35%" stop-color="#06b6d4"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="70%" stop-color="#eab308"/>
      <stop offset="85%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#ffffff" rx="16"/>
  <rect x="12" y="12" width="876" height="476" rx="12" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="450" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#0f172a">
    COURBE EXPÉRIMENTALE 5 : SPECTRES D'ABSORPTION ET D'ACTION DE LA PHOTOSYNTHÈSE
  </text>
  <text x="450" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Corrélation entre l'absorption des pigments foliaires (Chlorophylle a et b) et le dégagement d'O2 (expérience d'Engelmann)
  </text>

  <!-- Graphe Principal -->
  <g transform="translate(80, 85)">
    <!-- Bande spectrale de lumière en arrière-plan bas -->
    <rect x="60" y="270" width="680" height="24" rx="4" fill="url(#spectrumRainbow)" opacity="0.85"/>
    <text x="95" y="286" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff">Violet</text>
    <text x="210" y="286" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff">Bleu</text>
    <text x="380" y="286" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f172a">Vert</text>
    <text x="520" y="286" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f172a">Jaune</text>
    <text x="610" y="286" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff">Orange</text>
    <text x="700" y="286" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff">Rouge</text>

    <!-- Axes -->
    <line x1="60" y1="260" x2="750" y2="260" stroke="#0f172a" stroke-width="2"/>
    <line x1="60" y1="260" x2="60" y2="20" stroke="#0f172a" stroke-width="2"/>
    <text x="750" y="315" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="end" fill="#0f172a">Longueur d'onde λ (nm)</text>
    <text x="45" y="15" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">Efficacité (%)</text>

    <!-- Graduations -->
    <text x="60" y="315" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">400</text>
    <text x="175" y="315" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">450</text>
    <text x="290" y="315" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">500</text>
    <text x="400" y="315" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">550</text>
    <text x="515" y="315" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">600</text>
    <text x="630" y="315" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">650</text>
    <text x="740" y="315" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#64748b">700 nm</text>

    <!-- Courbe 1 : Spectre d'absorption de la Chlorophylle a (Vert foncé) -->
    <!-- Fort pic vers 430 nm, quasi nul entre 500 et 600, second pic vers 660 nm -->
    <path d="M 60,240 C 90,220 120,40 140,35 C 160,35 180,180 230,220 C 300,250 450,250 550,240 C 600,230 640,90 660,85 C 680,85 710,210 740,260" 
          fill="none" stroke="#15803d" stroke-width="3.5"/>
    <text x="145" y="28" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#15803d">Pic Chlorophylle a (430 nm)</text>
    <text x="660" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">Pic Chl a (660 nm)</text>

    <!-- Courbe 2 : Spectre d'absorption de la Chlorophylle b (Vert pomme) -->
    <path d="M 60,250 C 110,245 160,80 180,60 C 200,60 220,190 280,230 C 360,255 480,255 580,245 C 610,240 625,140 645,130 C 665,130 690,230 740,260" 
          fill="none" stroke="#84cc16" stroke-width="2.5" stroke-dasharray="6 3"/>
    <text x="190" y="55" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#65a30d">Chlorophylle b (450 nm &amp; 640 nm)</text>

    <!-- Courbe 3 : Spectre d'Action Photosynthétique (Débit de photosynthèse / O2 produit en Rouge) -->
    <path d="M 60,230 C 90,200 130,50 160,45 C 190,45 240,210 320,225 C 420,235 500,230 580,210 C 630,190 650,80 670,80 C 690,80 720,210 740,250" 
          fill="none" stroke="#dc2626" stroke-width="3"/>
    <text x="350" y="195" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#dc2626">Spectre d'action photosynthétique (intensité d'assimilation du CO2)</text>

    <!-- Flèche montrant le parallélisme -->
    <rect x="290" y="110" width="220" height="48" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="400" y="130" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" text-anchor="middle" fill="#991b1b">SUPERPOSITION REMARQUABLE</text>
    <text x="400" y="146" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#b91c1c">Les radiations les plus absorbées sont les plus efficaces</text>
  </g>

  <!-- Conclusion pédagogique -->
  <g transform="translate(60, 430)">
    <rect x="0" y="0" width="780" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="15" y="26" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">
      <tspan font-weight="800" fill="#0f172a">Interprétation : </tspan>
      La photosynthèse est maximale sous les lumières bleue (430-450 nm) et rouge (650-680 nm). La lumière verte n'étant pas ou peu absorbée, elle est réfléchie ou transmise, ce qui confère aux feuilles leur couleur verte caractéristique.
    </text>
  </g>
</svg>`;

/**
 * 6. Diagramme de régulation de la Glycémie (Boucle de rétroaction hormonale)
 * Pancréas endocrine (îlots de Langerhans), insuline (hypoglycémiante) et glucagon (hyperglycémiant)
 */
export const SVG_SVT_1ERE_REGULATION_GLYCEMIE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGlyc" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#eff6ff"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGlyc)" rx="16"/>
  <rect x="12" y="12" width="876" height="496" rx="12" fill="none" stroke="#bfdbfe" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="450" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#1e3a8a">
    DIAGRAMME SYSTÉMIQUE 6 : RÉGULATION DE LA GLYCÉMIE ET HOMÉOSTASIE
  </text>
  <text x="450" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#2563eb">
    Boucle réflexe endocrine à rétrocontrôle négatif maintenant la glycémie à la valeur consigne de 1 g/L
  </text>

  <!-- Boîte Centrale : Valeur de consigne -->
  <g transform="translate(325, 220)">
    <rect x="0" y="0" width="250" height="70" rx="12" fill="#1e40af" stroke="#1d4ed8" stroke-width="2"/>
    <text x="125" y="28" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#ffffff">PARAMÈTRE RÉGLÉ</text>
    <text x="125" y="50" font-family="system-ui, sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#facc15">GLYCÉMIE ≈ 1,00 g/L</text>
  </g>

  <!-- BRANCHE GAUCHE : HYPERGLYCÉMIE (après un repas) -->
  <g transform="translate(60, 90)">
    <rect x="0" y="0" width="240" height="50" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
    <text x="120" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#dc2626">PERTURBATION 1 : REPAS</text>
    <text x="120" y="40" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#991b1b">Hyperglycémie (&gt; 1,3 g/L)</text>

    <!-- Flèche vers capteur -->
    <line x1="120" y1="50" x2="120" y2="90" stroke="#dc2626" stroke-width="2"/>
    <polygon points="116,85 120,95 124,85" fill="#dc2626"/>

    <!-- Capteur et intégrateur : Cellules Bêta du Pancréas -->
    <g transform="translate(0, 95)">
      <rect x="0" y="0" width="240" height="70" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="120" y="22" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#1e3a8a">CAPTEUR &amp; SÉCRÉTEUR</text>
      <text x="120" y="42" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#2563eb">Cellules β des îlots de Langerhans</text>
      <text x="120" y="60" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">Augmentation de l'insulinémie</text>
    </g>

    <!-- Flèche hormone -->
    <line x1="120" y1="165" x2="120" y2="205" stroke="#2563eb" stroke-width="2"/>
    <polygon points="116,200 120,210 124,200" fill="#2563eb"/>
    <text x="135" y="190" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#2563eb">Insuline</text>

    <!-- Organes effecteurs -->
    <g transform="translate(0, 210)">
      <rect x="0" y="0" width="240" height="90" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="120" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#1e40af">ORGANES EFFECTEURS</text>
      <text x="15" y="40" font-family="system-ui, sans-serif" font-size="9" fill="#1e3a8a">• <tspan font-weight="700">Foie :</tspan> Glycogénogenèse</text>
      <text x="15" y="58" font-family="system-ui, sans-serif" font-size="9" fill="#1e3a8a">• <tspan font-weight="700">Muscles :</tspan> Consommation &amp; stockage</text>
      <text x="15" y="76" font-family="system-ui, sans-serif" font-size="9" fill="#1e3a8a">• <tspan font-weight="700">Tissu adipeux :</tspan> Lipogenèse</text>
    </g>

    <!-- Flèche retour vers la norme -->
    <path d="M 120,300 L 120,340 L 320,340 L 325,290" fill="none" stroke="#16a34a" stroke-width="2"/>
    <polygon points="321,295 325,285 329,295" fill="#16a34a"/>
    <text x="210" y="333" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#16a34a">Baisse de la glycémie → 1 g/L</text>
  </g>

  <!-- BRANCHE DROITE : HYPOGLYCÉMIE (à jeun ou effort physique) -->
  <g transform="translate(600, 90)">
    <rect x="0" y="0" width="240" height="50" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
    <text x="120" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#a16207">PERTURBATION 2 : JEÛNE / SPORT</text>
    <text x="120" y="40" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#854d0e">Hypoglycémie (&lt; 0,8 g/L)</text>

    <!-- Flèche vers capteur -->
    <line x1="120" y1="50" x2="120" y2="90" stroke="#ca8a04" stroke-width="2"/>
    <polygon points="116,85 120,95 124,85" fill="#ca8a04"/>

    <!-- Capteur et intégrateur : Cellules Alpha du Pancréas -->
    <g transform="translate(0, 95)">
      <rect x="0" y="0" width="240" height="70" rx="8" fill="#ffffff" stroke="#fde047" stroke-width="1.5"/>
      <text x="120" y="22" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#854d0e">CAPTEUR &amp; SÉCRÉTEUR</text>
      <text x="120" y="42" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#d97706">Cellules α des îlots de Langerhans</text>
      <text x="120" y="60" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">Sécrétion de Glucagon</text>
    </g>

    <!-- Flèche hormone -->
    <line x1="120" y1="165" x2="120" y2="205" stroke="#d97706" stroke-width="2"/>
    <polygon points="116,200 120,210 124,200" fill="#d97706"/>
    <text x="135" y="190" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#d97706">Glucagon</text>

    <!-- Organes effecteurs -->
    <g transform="translate(0, 210)">
      <rect x="0" y="0" width="240" height="90" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="120" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#b45309">ORGANE EFFECTEUR MAJEUR</text>
      <text x="15" y="45" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#92400e">• Foie exclusif :</text>
      <text x="25" y="62" font-family="system-ui, sans-serif" font-size="9" fill="#78350f">Glycogénolyse (libération de glucose)</text>
      <text x="25" y="78" font-family="system-ui, sans-serif" font-size="9" fill="#78350f">Néoglucogenèse à partir de lipides</text>
    </g>

    <!-- Flèche retour vers la norme -->
    <path d="M 120,300 L 120,340 L -20,340 L -25,290" fill="none" stroke="#16a34a" stroke-width="2"/>
    <polygon points="-29,295 -25,285 -21,295" fill="#16a34a"/>
    <text x="10" y="333" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#16a34a">Hausse de la glycémie → 1 g/L</text>
  </g>

  <!-- Récapitulatif Bas -->
  <g transform="translate(60, 450)">
    <rect x="0" y="0" width="780" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="15" y="26" font-family="system-ui, sans-serif" font-size="10.5" fill="#334155">
      <tspan font-weight="800" fill="#0f172a">Notion clé : </tspan>
      Le foie est le seul organe capable de libérer du glucose dans le sang (organe effecteur hyperglycémiant grâce à la glucose-6-phosphatase). Les muscles stockent du glycogène pour leur propre métabolisme.
    </text>
  </g>
</svg>`;

/**
 * 7. Géologie et Coupe Stratigraphique du Bassin Sédimentaire et Craton du Sénégal
 * Formations des Mamelles de Dakar, phosphates de Taïba, or de Sabodala et cycle des roches
 */
export const SVG_SVT_1ERE_GEOLOGIE_SENEGAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGeo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#fefce8"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGeo)" rx="16"/>
  <rect x="12" y="12" width="876" height="496" rx="12" fill="none" stroke="#fde047" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="450" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#713f12">
    COUPE GÉOLOGIQUE ET RESSOURCES DU SÉNÉGAL (OUEST-EST : DE DAKAR À KÉDOUGOU)
  </text>
  <text x="450" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#854d0e">
    Le Bassin sédimentaire sénégalo-mauritanien, le volcanisme cénozoïque et le socle précambrien birimien
  </text>

  <!-- Coupe Ouest - Est -->
  <g transform="translate(60, 90)">
    <rect x="0" y="0" width="780" height="260" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Profil topographique -->
    <path d="M 0,110 Q 50,60 80,110 L 250,120 L 500,130 Q 640,110 780,80 L 780,260 L 0,260 Z" fill="#f8fafc"/>

    <!-- Volcan des Mamelles à Dakar (Ouest) -->
    <path d="M 20,110 Q 45,55 70,110 Z" fill="#334155" stroke="#0f172a" stroke-width="2"/>
    <path d="M 65,110 Q 80,70 95,110 Z" fill="#475569" stroke="#0f172a" stroke-width="2"/>
    <!-- Coulée de basalte -->
    <path d="M 45,75 Q 30,95 10,115" stroke="#dc2626" stroke-width="3" fill="none"/>
    <text x="55" y="48" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0f172a">Mamelles de Dakar</text>
    <text x="55" y="60" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#b91c1c">Volcanisme quaternaire (Basaltes)</text>

    <!-- Zone Sédimentaire : Bassin Sénégalo-Mauritanien (75% du territoire) -->
    <!-- Couche Quaternaire / Sables dunaires (Jaune) -->
    <path d="M 95,110 L 520,128 L 520,150 L 95,135 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
    <text x="280" y="125" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#854d0e">Dunes &amp; sables littoraux (Zircon de Diogo)</text>

    <!-- Couche Éocène : Phosphates de Taïba & Lam-Lam (Gris orangé) -->
    <path d="M 95,135 L 520,150 L 520,185 L 95,170 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1"/>
    <text x="280" y="162" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412">Éocène : Phosphates de chaux de Taïba &amp; Matam</text>

    <!-- Couche Crétacé : Nappe du Maestrichtien (Bleu aquifère) -->
    <path d="M 95,170 L 520,185 L 520,225 L 95,215 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
    <text x="280" y="200" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0369a1">Crétacé : Grand réservoir d'eau du Maestrichtien</text>

    <!-- Zone Est : Socle Précambrien / Boutonnière de Kédougou-Kéniéba -->
    <path d="M 520,128 L 780,80 L 780,260 L 520,260 Z" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
    <!-- Failles et intrusions magmatiques granitoïdes (Or de Sabodala) -->
    <line x1="560" y1="260" x2="600" y2="105" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 2"/>
    <line x1="680" y1="260" x2="720" y2="90" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 2"/>

    <!-- Gisement d'or -->
    <circle cx="640" cy="130" r="14" fill="#facc15" stroke="#a16207" stroke-width="2"/>
    <text x="640" y="134" font-family="system-ui, sans-serif" font-size="9" font-weight="900" text-anchor="middle" fill="#713f12">OR</text>
    <text x="640" y="155" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" text-anchor="middle" fill="#713f12">Sabodala &amp; Mako</text>

    <text x="650" y="180" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#1e293b">SOCLE BIRIMIEN</text>
    <text x="650" y="195" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#475569">Schistes, quartzites, granites (2 milliards d'années)</text>
    <text x="650" y="210" font-family="system-ui, sans-serif" font-size="8.5" text-anchor="middle" fill="#b91c1c">Minerais de fer de la Falémé</text>

    <!-- Orientation géographique -->
    <text x="20" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#1d4ed8">← OUEST (Océan Atlantique)</text>
    <text x="760" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="900" text-anchor="end" fill="#b91c1c">EST (Mali / Guinée) →</text>
  </g>

  <!-- Tableau des ressources minières du Sénégal -->
  <g transform="translate(60, 365)">
    <rect x="0" y="0" width="780" height="120" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="390" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">
      SYNTHÈSE DES RESSOURCES GÉOLOGIQUES STRATÉGIQUES DU SÉNÉGAL
    </text>

    <g transform="translate(15, 30)">
      <!-- Colonne 1 -->
      <rect x="0" y="0" width="240" height="75" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="12" y="18" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af">1. Hydrogéologie &amp; Énergie</text>
      <text x="12" y="34" font-family="system-ui, sans-serif" font-size="9" fill="#1e3a8a">• Nappe du Maestrichtien (Dakar / Centre)</text>
      <text x="12" y="48" font-family="system-ui, sans-serif" font-size="9" fill="#1e3a8a">• Gaz naturel de Gadiaga &amp; Sangomar</text>
      <text x="12" y="62" font-family="system-ui, sans-serif" font-size="9" fill="#1e3a8a">• Champ pétrolier offshore GTA</text>

      <!-- Colonne 2 -->
      <rect x="255" y="0" width="240" height="75" rx="6" fill="#fefce8" stroke="#fef08a"/>
      <text x="267" y="18" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e">2. Minéraux Industriels</text>
      <text x="267" y="34" font-family="system-ui, sans-serif" font-size="9" fill="#713f12">• Phosphates de Taïba &amp; Matam</text>
      <text x="267" y="48" font-family="system-ui, sans-serif" font-size="9" fill="#713f12">• Zircon &amp; Titane (Grande Côte Diogo)</text>
      <text x="267" y="62" font-family="system-ui, sans-serif" font-size="9" fill="#713f12">• Calcaires de Bargny (Cimenteries)</text>

      <!-- Colonne 3 -->
      <rect x="510" y="0" width="240" height="75" rx="6" fill="#fdf2f8" stroke="#fbcfe8"/>
      <text x="522" y="18" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9d174d">3. Métaux Précieux &amp; Minerais</text>
      <text x="522" y="34" font-family="system-ui, sans-serif" font-size="9" fill="#831843">• Or de Sabodala, Massawa &amp; Mako</text>
      <text x="522" y="48" font-family="system-ui, sans-serif" font-size="9" fill="#831843">• Gisement de Fer de la Falémé</text>
      <text x="522" y="62" font-family="system-ui, sans-serif" font-size="9" fill="#831843">• Marbre d'Ibel (Kédougou)</text>
    </g>
  </g>
</svg>`;

/**
 * 8. Pyramide Écologique et Réseau Trophique Sahélien (Série L1 & L2)
 * Flux d'énergie, perte thermique de 90%, biomasse et bioaccumulation
 */
export const SVG_SVT_1ERE_PYRAMIDE_ECOLOGIQUE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEco" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f0fdf4"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgEco)" rx="16"/>
  <rect x="12" y="12" width="876" height="476" rx="12" fill="none" stroke="#86efac" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="450" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" text-anchor="middle" fill="#14532d">
    FIGURE ÉCOLOGIQUE 8 : PYRAMIDE DES BIOMASSES ET FLUX D'ÉNERGIE (ÉCOSYSTÈME DU SAHEL)
  </text>
  <text x="450" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#166534">
    Règle des 10% de Lindeman : transfert de biomasse et déperdition d'énergie sous forme de chaleur
  </text>

  <!-- Pyramide -->
  <g transform="translate(100, 85)">
    <!-- Niveau 1 : Producteurs Primaires (Base large) -->
    <polygon points="50,280 650,280 575,200 125,200" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
    <text x="350" y="235" font-family="system-ui, sans-serif" font-size="12" font-weight="900" text-anchor="middle" fill="#ffffff">
      PRODUCTEURS PRIMAIRES (PP) : VÉGÉTAUX CHLOROPHYLLIENS
    </text>
    <text x="350" y="255" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#f0fdf4">
      Acacia senegal, Balanites, graminées sahéliennes • Biomasse : 10 000 kg • Énergie : 100 000 kJ
    </text>

    <!-- Niveau 2 : Consommateurs Primaires (Herbivores) -->
    <polygon points="125,200 575,200 500,130 200,130" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    <text x="350" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="900" text-anchor="middle" fill="#ffffff">
      CONSOMMATEURS PRIMAIRES (C1) : HERBIVORES
    </text>
    <text x="350" y="180" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#fefce8">
      Gazelles, criquets pèlerins, bovins zébus • Biomasse : 1 000 kg • Énergie : 10 000 kJ (Rdt = 10%)
    </text>

    <!-- Niveau 3 : Consommateurs Secondaires (Carnivores I) -->
    <polygon points="200,130 500,130 425,70 275,70" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
    <text x="350" y="98" font-family="system-ui, sans-serif" font-size="11" font-weight="900" text-anchor="middle" fill="#ffffff">
      CONSOMMATEURS SECONDAIRES (C2)
    </text>
    <text x="350" y="115" font-family="system-ui, sans-serif" font-size="9.5" text-anchor="middle" fill="#fff7ed">
      Chacals, rapaces, serpents • Biomasse : 100 kg • Énergie : 1 000 kJ
    </text>

    <!-- Niveau 4 : Consommateurs Tertiaires (Super-prédateurs) -->
    <polygon points="275,70 425,70 350,15" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
    <text x="350" y="45" font-family="system-ui, sans-serif" font-size="9" font-weight="900" text-anchor="middle" fill="#ffffff">
      C3 : LION DU NIUKOLO
    </text>
    <text x="350" y="58" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle" fill="#fef2f2">
      Biomasse : 10 kg
    </text>

    <!-- Flèches de déperdition thermique (Chaleur 90% perdue par respiration) -->
    <path d="M 600,240 Q 660,230 680,210" stroke="#ef4444" stroke-width="2.5" fill="none"/>
    <text x="685" y="210" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c">90% Chaleur &amp; excrétats</text>

    <path d="M 525,165 Q 585,155 615,140" stroke="#ef4444" stroke-width="2.5" fill="none"/>
    <text x="620" y="140" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c">90% Perte d'énergie</text>
  </g>

  <!-- Boîte Décomposeurs et Cycle des Éléments -->
  <g transform="translate(60, 395)">
    <rect x="0" y="0" width="780" height="75" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="20" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">
      RÔLE CRUCIAL DES DÉCOMPOSEURS DANS LE SAHEL SÉNÉGALAIS
    </text>
    <text x="20" y="44" font-family="system-ui, sans-serif" font-size="10" fill="#334155">
      Les bactéries du sol, champignons mycorhiziens et termites minéralisent la matière organique morte (litière, cadavres) en sels minéraux (nitrates, phosphates) réutilisables par les racines des acacias : <tspan font-weight="700">le cycle de la matière est fermé</tspan>, alors que le <tspan font-weight="700">flux d'énergie est ouvert</tspan> et unidirectionnel.
    </text>
  </g>
</svg>`;
