// =========================================================================
// SCHÉMAS ET FIGURES SCIENTIFIQUES VECTORIELLES — SVT CLASSE DE 3ÈME
// Conformes au Programme Officiel du Ministère de l'Éducation Nationale (Sénégal)
// Préparation active aux épreuves du BFEM
// =========================================================================

/**
 * Figure 1 : Anatomie de l'œil humain, étude de la vision et anomalies de réfraction
 */
export const SVG_SVT_3EME_OEIL_VISION = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bgVision" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="70%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#172554"/>
    </radialGradient>
    <filter id="dropShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgVision)" rx="16"/>
  <rect x="10" y="10" width="830" height="460" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Titre Principal -->
  <text x="425" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 2.1 : Structure anatomique de l'œil humain et optique de la vision
  </text>
  <text x="425" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Les trois tuniques protectrices, les quatre milieux transparents et la réfraction des rayons sur la rétine
  </text>

  <!-- Globe Oculaire Principal (Gauche) -->
  <g transform="translate(40, 70)">
    <!-- Sclérotique (Coque externe blanche) -->
    <path d="M 120,40 A 130,130 0 1,1 120,280 C 70,260 40,210 40,160 C 40,110 70,60 120,40 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="3"/>

    <!-- Choroïde (Couche intermédiaire sombre vascularisée) -->
    <path d="M 124,46 A 124,124 0 1,1 124,274 C 80,256 52,210 52,160 C 52,110 80,64 124,46 Z" fill="#334155" stroke="#1e293b" stroke-width="2"/>

    <!-- Rétine (Couche interne photosensible orangée) -->
    <path d="M 140,62 A 108,108 0 1,1 140,258" fill="none" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>

    <!-- Corps Vitré (Masse gélatineuse centrale) -->
    <path d="M 130,55 A 115,115 0 1,1 130,265 C 100,240 85,200 85,160 C 85,120 100,80 130,55 Z" fill="#e0f2fe" opacity="0.6"/>

    <!-- Nerf Optique (Sortie à l'arrière) -->
    <path d="M 285,145 L 340,135 L 340,185 L 285,175 Z" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <text x="348" y="164" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c">Nerf optique (Sensitif)</text>

    <!-- Fovéa / Tache Jaune -->
    <circle cx="282" cy="160" r="4" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <text x="296" y="196" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309">Fovéa (Acuité maximale)</text>
    <line x1="282" y1="164" x2="295" y2="190" stroke="#d97706" stroke-width="1.5" stroke-dasharray="2,2"/>

    <!-- Cornée transparente à l'avant -->
    <path d="M 120,40 C 45,70 15,110 15,160 C 15,210 45,250 120,280" fill="none" stroke="#38bdf8" stroke-width="4"/>

    <!-- Cristallin (Lentille biconvexe) -->
    <ellipse cx="120" cy="160" rx="14" ry="48" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5" opacity="0.85"/>
    <text x="120" y="224" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0369a1">Cristallin</text>

    <!-- Iris (Diaphragme coloré) & Pupille -->
    <line x1="112" y1="92" x2="118" y2="132" stroke="#1d4ed8" stroke-width="5" stroke-linecap="round"/>
    <line x1="112" y1="228" x2="118" y2="188" stroke="#1d4ed8" stroke-width="5" stroke-linecap="round"/>

    <!-- Rayons lumineux incidents traversant le cristallin -->
    <line x1="-15" y1="115" x2="120" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
    <line x1="-15" y1="205" x2="120" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
    <line x1="120" y1="140" x2="282" y2="160" stroke="#dc2626" stroke-width="2"/>
    <line x1="120" y1="180" x2="282" y2="160" stroke="#dc2626" stroke-width="2"/>

    <!-- Objet (Flèche verticale en avant) -->
    <line x1="-10" y1="115" x2="-10" y2="205" stroke="#16a34a" stroke-width="4"/>
    <polygon points="-10,110 -15,122 -5,122" fill="#16a34a"/>
    <text x="-15" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d">Objet (AB)</text>

    <!-- Image inversée sur la rétine -->
    <line x1="280" y1="150" x2="280" y2="170" stroke="#16a34a" stroke-width="3"/>
    <polygon points="280,174 276,164 284,164" fill="#16a34a"/>
    <text x="210" y="248" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d">Image inversée (A'B')</text>

    <!-- Légendes des tuniques et milieux -->
    <g transform="translate(0, 290)">
      <rect x="0" y="0" width="370" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">Les 3 Tuniques Concentriques :</text>
      <text x="10" y="34" font-family="system-ui, sans-serif" font-size="10" fill="#475569">1. Sclérotique (blanche/protectrice) prolongée par la Cornée</text>
      <text x="10" y="48" font-family="system-ui, sans-serif" font-size="10" fill="#475569">2. Uvée : Choroïde nourricière sombre + Iris délimitant la pupille</text>
      <text x="10" y="62" font-family="system-ui, sans-serif" font-size="10" fill="#475569">3. Rétine : membrane nerveuse photosensible (cônes et bâtonnets)</text>
    </g>
  </g>

  <!-- Panneau Droit : Anomalies de réfraction (Myopie & Hypermétropie) -->
  <g transform="translate(450, 75)">
    <rect x="0" y="0" width="370" height="375" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#dropShadow)"/>

    <text x="185" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#0f172a">
      Anomalies de Réfraction et Corrections Optiques
    </text>

    <!-- 1. ŒIL ÉMMÉTROPE (NORMAL) -->
    <g transform="translate(15, 40)">
      <rect x="0" y="0" width="340" height="95" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#166534">1. Œil Émmétrope (Vision Parfaite)</text>
      <!-- Schéma miniature oeil normal -->
      <ellipse cx="80" cy="55" rx="35" ry="25" fill="#ffffff" stroke="#15803d" stroke-width="1.5"/>
      <ellipse cx="65" cy="55" rx="4" ry="14" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
      <line x1="20" y1="46" x2="65" y2="50" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="20" y1="64" x2="65" y2="60" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="65" y1="50" x2="115" y2="55" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="65" y1="60" x2="115" y2="55" stroke="#dc2626" stroke-width="1.5"/>
      <circle cx="115" cy="55" r="3" fill="#16a34a"/>
      <!-- Texte descriptif -->
      <text x="135" y="44" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d">Convergence exacte sur la rétine</text>
      <text x="135" y="60" font-family="system-ui, sans-serif" font-size="9.5" fill="#374151">• Image nette spontanée</text>
      <text x="135" y="74" font-family="system-ui, sans-serif" font-size="9.5" fill="#374151">• Aucune correction nécessaire</text>
    </g>

    <!-- 2. MYOPIE -->
    <g transform="translate(15, 148)">
      <rect x="0" y="0" width="340" height="105" rx="6" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#991b1b">2. Myopie (Œil trop long ou trop convergent)</text>
      <!-- Schéma myopie -->
      <ellipse cx="80" cy="58" rx="42" ry="25" fill="#ffffff" stroke="#b91c1c" stroke-width="1.5"/>
      <ellipse cx="60" cy="58" rx="4" ry="14" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
      <!-- Verre divergent correcteur -->
      <path d="M 44,42 C 47,58 47,58 44,74 L 40,74 C 43,58 43,58 40,42 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="1"/>
      <line x1="15" y1="50" x2="60" y2="54" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="15" y1="66" x2="60" y2="62" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="60" y1="54" x2="105" y2="58" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="60" y1="62" x2="105" y2="58" stroke="#dc2626" stroke-width="1.5"/>
      <circle cx="105" cy="58" r="3" fill="#dc2626"/>
      <!-- Texte descriptif -->
      <text x="135" y="44" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7f1d1d">Foyer F' en avant de la rétine</text>
      <text x="135" y="60" font-family="system-ui, sans-serif" font-size="9.5" fill="#374151">• Vision de loin floue, vision de près nette</text>
      <text x="135" y="74" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c">Correction : Verres divergents (biconcaves)</text>
      <text x="135" y="88" font-family="system-ui, sans-serif" font-size="9" fill="#6b7280">qui repoussent le foyer sur la rétine</text>
    </g>

    <!-- 3. HYPERMÉTROPIE -->
    <g transform="translate(15, 262)">
      <rect x="0" y="0" width="340" height="100" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af">3. Hypermétropie (Œil trop court ou peu convergent)</text>
      <!-- Schéma hypermétropie -->
      <ellipse cx="80" cy="56" rx="28" ry="25" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5"/>
      <ellipse cx="65" cy="56" rx="4" ry="14" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
      <!-- Verre convergent correcteur -->
      <ellipse cx="44" cy="56" rx="3" ry="14" fill="#93c5fd" stroke="#2563eb" stroke-width="1"/>
      <line x1="15" y1="48" x2="65" y2="52" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="15" y1="64" x2="65" y2="60" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="65" y1="52" x2="118" y2="56" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="65" y1="60" x2="118" y2="56" stroke="#dc2626" stroke-width="1.5"/>
      <circle cx="118" cy="56" r="3" fill="#2563eb"/>
      <!-- Texte descriptif -->
      <text x="135" y="44" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">Foyer F' en arrière de la rétine</text>
      <text x="135" y="58" font-family="system-ui, sans-serif" font-size="9.5" fill="#374151">• Fatigue visuelle, vision de près floue</text>
      <text x="135" y="72" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8">Correction : Verres convergents (biconvexes)</text>
      <text x="135" y="86" font-family="system-ui, sans-serif" font-size="9" fill="#6b7280">qui avancent l'image exactement sur la rétine</text>
    </g>
  </g>
</svg>`)}`;

/**
 * Figure 2 : Structure de la synapse chimique neuro-neuronique et transmission de l'influx
 */
export const SVG_SVT_3EME_SYNAPSE = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" height="100%">
  <defs>
    <linearGradient id="bgSyn" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgSyn)" rx="16"/>
  <rect x="10" y="10" width="780" height="400" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="400" y="38" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 3.1 : Structure ultrastructurale d'une synapse chimique neuro-neuronique
  </text>
  <text x="400" y="58" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Conversion du potentiel d'action électrique en médiateur chimique (neurotransmetteur) dans la fente synaptique
  </text>

  <!-- Bouton Pré-synaptique (Membrane supérieure) -->
  <path d="M 120,80 L 120,130 C 120,200 240,240 400,240 C 560,240 680,200 680,130 L 680,80 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
  <text x="400" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#1e40af">
    ÉLÉMENT PRÉ-SYNAPTIQUE (Terminaison axonale)
  </text>

  <!-- Flèche Sens du Potentiel d'action -->
  <g transform="translate(360, 125)">
    <line x1="40" y1="0" x2="40" y2="40" stroke="#dc2626" stroke-width="4"/>
    <polygon points="40,48 32,36 48,36" fill="#dc2626"/>
    <text x="55" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b91c1c">Arrivée du PA</text>
  </g>

  <!-- Vésicules synaptiques -->
  <g transform="translate(240, 160)">
    <circle cx="20" cy="20" r="14" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <circle cx="18" cy="18" r="2" fill="#c2410c"/><circle cx="23" cy="22" r="2" fill="#c2410c"/><circle cx="22" cy="17" r="2" fill="#c2410c"/>
    
    <circle cx="80" cy="30" r="14" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <circle cx="78" cy="28" r="2" fill="#c2410c"/><circle cx="83" cy="32" r="2" fill="#c2410c"/>
    
    <!-- Vésicule en cours d'exocytose -->
    <path d="M 150,60 C 150,75 170,75 170,60" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <circle cx="156" cy="68" r="2.5" fill="#ea580c"/>
    <circle cx="164" cy="72" r="2.5" fill="#ea580c"/>

    <circle cx="240" cy="25" r="14" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <circle cx="238" cy="23" r="2" fill="#c2410c"/><circle cx="243" cy="27" r="2" fill="#c2410c"/>
  </g>
  <text x="210" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c">Vésicules synaptiques</text>

  <!-- Fente Synaptique (20-50 nm) -->
  <rect x="120" y="240" width="560" height="40" fill="#fef3c7" opacity="0.6"/>
  <text x="695" y="265" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b45309">Fente synaptique (20 - 50 nm)</text>

  <!-- Molécules de Neurotransmetteurs libérés -->
  <g fill="#ea580c">
    <circle cx="380" cy="255" r="3.5"/><circle cx="395" cy="265" r="3.5"/><circle cx="415" cy="250" r="3.5"/>
    <circle cx="430" cy="268" r="3.5"/><circle cx="360" cy="262" r="3.5"/><circle cx="450" cy="258" r="3.5"/>
  </g>
  <text x="400" y="295" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#c2410c">
    Neurotransmetteurs libérés (ex: Acétylcholine)
  </text>

  <!-- Membrane Post-Synaptique (Inférieure) -->
  <path d="M 120,280 C 240,280 560,280 680,280 L 680,360 L 120,360 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
  <text x="400" y="345" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#15803d">
    ÉLÉMENT POST-SYNAPTIQUE (Dendrite ou corps cellulaire récepteur)
  </text>

  <!-- Récepteurs membranaires post-synaptiques -->
  <g fill="#0284c7" stroke="#0369a1" stroke-width="1.5">
    <path d="M 330,280 L 330,288 L 340,288 L 340,280 Z"/>
    <path d="M 390,280 L 390,288 L 400,288 L 400,280 Z"/>
    <path d="M 450,280 L 450,288 L 460,288 L 460,280 Z"/>
  </g>
  <text x="260" y="318" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1">Récepteurs spécifiques canaux</text>
  <line x1="325" y1="315" x2="335" y2="292" stroke="#0284c7" stroke-width="1.5"/>

  <!-- Flèche nouveau potentiel d'action post-synaptique -->
  <g transform="translate(560, 310)">
    <line x1="0" y1="0" x2="40" y2="0" stroke="#16a34a" stroke-width="3"/>
    <polygon points="48,0 38,-5 38,5" fill="#16a34a"/>
    <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">Propagation du nouveau PA</text>
  </g>
</svg>`)}`;

/**
 * Figure 3 : Trajet de l'influx nerveux lors d'un arc réflexe médullaire
 */
export const SVG_SVT_3EME_ARC_REFLEXE = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 440" width="100%" height="100%">
  <defs>
    <linearGradient id="bgReflexe" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgReflexe)" rx="16"/>
  <rect x="10" y="10" width="830" height="420" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="425" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 4.1 : L'Arc Réflexe Médullaire Inné (5 Composants Anatomiques)
  </text>
  <text x="425" y="56" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Trajet centripète du message sensitif puis centrifuge du message moteur à travers la moelle épinière
  </text>

  <!-- 1. Récepteur Sensoriel (Peau / Stimulus piquant) -->
  <g transform="translate(40, 110)">
    <rect x="0" y="0" width="130" height="100" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <text x="65" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#991b1b">1. RÉCEPTEUR</text>
    <text x="65" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#b91c1c">Peau / Récepteur</text>
    <text x="65" y="60" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#7f1d1d">sensoriel cutané</text>
    <!-- Symbole stimulus -->
    <path d="M 65,70 L 65,92 M 55,80 L 75,80" stroke="#dc2626" stroke-width="3"/>
    <text x="65" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#dc2626">Stimulus (Douleur)</text>
  </g>

  <!-- 2. Conducteur Afférent Sensitif (Fibre nerveuse sensitive en bleu) -->
  <path d="M 170,160 C 260,160 300,120 440,150" fill="none" stroke="#2563eb" stroke-width="4"/>
  <!-- Ganglion rachidien (Renflement avec corps cellulaire du neurone sensitif en T) -->
  <circle cx="340" cy="138" r="14" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
  <circle cx="340" cy="138" r="4" fill="#1e40af"/>
  <text x="340" y="115" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" text-anchor="middle" fill="#1e40af">Ganglion spinal</text>
  <text x="340" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#475569">(Corps cellulaire en T)</text>
  <text x="240" y="185" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1d4ed8">2. Conducteur afférent</text>
  <text x="240" y="200" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e40af">(Nerf sensitif centripète)</text>

  <!-- 3. Centre Nerveux : Coupe transversale de Moelle Épinière -->
  <g transform="translate(440, 100)">
    <!-- Substance Blanche (Périphérique) -->
    <ellipse cx="140" cy="110" rx="130" ry="90" fill="#f1f5f9" stroke="#64748b" stroke-width="2.5"/>
    <text x="140" y="35" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#475569">
      3. CENTRE RÉFLEXE : Moelle Épinière
    </text>
    <text x="140" y="50" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#64748b">Substance blanche (périphérique)</text>

    <!-- Sillon antérieur et postérieur -->
    <line x1="140" y1="20" x2="140" y2="60" stroke="#94a3b8" stroke-width="2"/>
    <line x1="140" y1="160" x2="140" y2="200" stroke="#94a3b8" stroke-width="2"/>

    <!-- Substance Grise en Papillon (Centrale) -->
    <!-- Cornes dorsales (sensitives) et ventrales (motrices) -->
    <path d="M 140,110 C 110,80 90,65 75,70 C 65,80 75,100 105,115 C 75,130 65,150 75,160 C 95,165 115,145 140,120 C 165,145 185,165 205,160 C 215,150 205,130 175,115 C 205,100 215,80 205,70 C 190,65 170,80 140,110 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
    <text x="140" y="114" font-family="system-ui, sans-serif" font-size="9" font-weight="800" text-anchor="middle" fill="#334155">Substance grise</text>

    <!-- Interneurone d'association (Vert) -->
    <circle cx="85" cy="85" r="4" fill="#16a34a"/>
    <line x1="85" y1="85" x2="85" y2="145" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="2,2"/>
    <circle cx="85" cy="145" r="4" fill="#16a34a"/>
    <text x="35" y="120" font-family="system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#15803d">Interneurone</text>

    <!-- Corne postérieure (Dorsale) et antérieure (Ventrale) -->
    <text x="210" y="75" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#1e3a8a">Racine dorsale</text>
    <text x="210" y="165" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#b91c1c">Racine ventrale</text>
  </g>

  <!-- 4. Conducteur Efférent Moteur (Fibre nerveuse motrice en rouge) -->
  <path d="M 525,245 C 400,260 300,260 170,310" fill="none" stroke="#dc2626" stroke-width="4"/>
  <text x="240" y="275" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b91c1c">4. Conducteur efférent</text>
  <text x="240" y="290" font-family="system-ui, sans-serif" font-size="9.5" fill="#991b1b">(Nerf moteur centrifuge)</text>

  <!-- 5. Effecteur (Muscle qui se contracte) -->
  <g transform="translate(40, 270)">
    <rect x="0" y="0" width="130" height="90" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="65" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#166534">5. EFFECTEUR</text>
    <text x="65" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">Muscle squelettique</text>
    <text x="65" y="60" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#14532d">Contraction / Retrait</text>
    <path d="M 40,74 C 65,65 65,85 90,74" fill="none" stroke="#16a34a" stroke-width="3"/>
  </g>

  <!-- Résumé séquentiel au bas -->
  <g transform="translate(40, 380)">
    <rect x="0" y="0" width="770" height="36" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    <text x="385" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">
      Trajet : Stimulus → Récepteur sensoriel → Voie afférente (sensitive) → Centre nerveux (Moelle) → Voie efférente (motrice) → Muscle effecteur
    </text>
  </g>
</svg>`)}`;

/**
 * Figure 4 : Les 4 étapes de la phagocytose (Immunité innée non spécifique)
 */
export const SVG_SVT_3EME_PHAGOCYTOSE = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 420" width="100%" height="100%">
  <defs>
    <linearGradient id="bgPhago" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgPhago)" rx="16"/>
  <rect x="10" y="10" width="830" height="400" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="425" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 10.1 : Les 4 étapes successives de la phagocytose par un leucocyte
  </text>
  <text x="425" y="56" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Mécanisme effecteur majeur de l'immunité innée non spécifique (macrophages et polynucléaires)
  </text>

  <!-- ÉTAPE 1 : ADHÉSION & ATTRACTION -->
  <g transform="translate(30, 80)">
    <rect x="0" y="0" width="180" height="260" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
    <rect x="10" y="10" width="160" height="24" rx="6" fill="#2563eb"/>
    <text x="90" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#ffffff">
      1. Adhésion
    </text>
    <!-- Phagocyte avec membrane -->
    <ellipse cx="90" cy="140" rx="60" ry="50" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <!-- Noyau polylobé -->
    <path d="M 75,130 C 65,115 105,115 95,130 C 115,140 100,165 85,150 C 70,160 65,140 75,130 Z" fill="#1e40af"/>
    <!-- Bactérie à la surface -->
    <ellipse cx="90" cy="85" rx="10" ry="6" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="90" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#1e3a8a">
      Fixation du microbe
    </text>
    <text x="90" y="235" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#475569">
      aux récepteurs membranaires
    </text>
  </g>

  <!-- ÉTAPE 2 : ENGLOBEMENT / INGESTION -->
  <g transform="translate(230, 80)">
    <rect x="0" y="0" width="180" height="260" rx="10" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
    <rect x="10" y="10" width="160" height="24" rx="6" fill="#16a34a"/>
    <text x="90" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#ffffff">
      2. Ingestion
    </text>
    <!-- Phagocyte avec pseudopodes qui enveloppent -->
    <path d="M 40,140 C 40,90 65,80 75,95 C 80,105 75,115 85,115 C 95,115 90,105 105,95 C 115,80 140,90 140,140 C 140,185 40,185 40,140 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <!-- Noyau -->
    <ellipse cx="90" cy="155" rx="20" ry="14" fill="#15803d"/>
    <!-- Bactérie enfermée dans le phagosome -->
    <circle cx="90" cy="108" r="10" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
    <ellipse cx="90" cy="108" rx="6" ry="4" fill="#ef4444"/>
    <text x="90" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#14532d">
      Formation du Phagosome
    </text>
    <text x="90" y="235" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#475569">
      par émission de pseudopodes
    </text>
  </g>

  <!-- ÉTAPE 3 : DIGESTION ENZYMATIQUE -->
  <g transform="translate(430, 80)">
    <rect x="0" y="0" width="180" height="260" rx="10" fill="#fefce8" stroke="#fef08a" stroke-width="1.5"/>
    <rect x="10" y="10" width="160" height="24" rx="6" fill="#ca8a04"/>
    <text x="90" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#ffffff">
      3. Digestion
    </text>
    <!-- Phagocyte -->
    <ellipse cx="90" cy="140" rx="60" ry="50" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
    <ellipse cx="90" cy="155" rx="20" ry="14" fill="#854d0e"/>
    <!-- Phagolysosome (Lysosomes fusionnés avec enzymes détruisant la bactérie) -->
    <circle cx="90" cy="110" r="14" fill="#ffffff" stroke="#eab308" stroke-width="1.5"/>
    <!-- Morceaux fragmentés de bactérie -->
    <circle cx="87" cy="108" r="2.5" fill="#ef4444"/><circle cx="93" cy="112" r="2" fill="#ef4444"/>
    <!-- Petits lysosomes autour -->
    <circle cx="70" cy="105" r="4" fill="#f59e0b"/><circle cx="110" cy="105" r="4" fill="#f59e0b"/>
    <text x="90" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#713f12">
      Attaque enzymatique
    </text>
    <text x="90" y="235" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#475569">
      par les sucs des lysosomes
    </text>
  </g>

  <!-- ÉTAPE 4 : REJET DES DÉCHETS (EXOCYTOSE) -->
  <g transform="translate(630, 80)">
    <rect x="0" y="0" width="180" height="260" rx="10" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1.5"/>
    <rect x="10" y="10" width="160" height="24" rx="6" fill="#db2777"/>
    <text x="90" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#ffffff">
      4. Rejet des débris
    </text>
    <!-- Phagocyte ouvrant une vésicule à l'extérieur -->
    <path d="M 40,140 C 40,90 80,90 85,100 C 85,110 95,110 95,100 C 100,90 140,90 140,140 C 140,185 40,185 40,140 Z" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
    <ellipse cx="90" cy="155" rx="20" ry="14" fill="#9d174d"/>
    <!-- Débris expulsés vers le haut -->
    <circle cx="86" cy="85" r="2" fill="#ef4444"/><circle cx="94" cy="80" r="2.5" fill="#ef4444"/><circle cx="91" cy="90" r="1.5" fill="#ef4444"/>
    <text x="90" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#831843">
      Exocytose des débris
    </text>
    <text x="90" y="235" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle" fill="#475569">
      ou formation de pus en cas de mort
    </text>
  </g>

  <!-- Banderole Récapitulative -->
  <g transform="translate(30, 355)">
    <rect x="0" y="0" width="780" height="40" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    <text x="390" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">
      Chronologie : Chimiotactisme / Adhésion → Ingestion (Phagosome) → Digestion enzymatique (Phagolysosome) → Rejet / Élimination
    </text>
  </g>
</svg>`)}`;

/**
 * Figure 5 : La Tectonique des Plaques (Divergence océanique, Subduction et Convection mantellique)
 */
export const SVG_SVT_3EME_TECTONIQUE_PLAQUES = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bgTect" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#0369a1" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="mantleGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fed7aa"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgTect)" rx="16"/>
  <rect x="10" y="10" width="840" height="460" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="430" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 18.1 : Dynamique de la Lithosphère : Divergence (Dorsale) et Convergence (Subduction)
  </text>
  <text x="430" y="56" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Moteur thermique : Courants de convection mantelliques, accrétion basaltique et recyclage lithosphérique
  </text>

  <!-- Bloc Schématique Coupe Géologique -->
  <g transform="translate(30, 75)">
    <!-- Océan -->
    <rect x="40" y="50" width="500" height="50" fill="url(#oceanGrad)"/>
    <text x="290" y="78" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff" opacity="0.9">
      OCÉAN (Hydrophère)
    </text>

    <!-- Continent / Plaque Continentale à Droite (Granitique, ~30-40 km d'épaisseur) -->
    <path d="M 540,50 C 580,25 640,15 780,20 L 780,180 L 520,180 L 540,50 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <text x="660" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#92400e">
      Croûte Continentale
    </text>
    <text x="660" y="98" font-family="system-ui, sans-serif" font-size="10" fill="#78350f">
      (Granite, densité ~2.7)
    </text>
    <!-- Chaîne de montagnes / Volcan explosif sur le continent -->
    <polygon points="630,20 645,-15 660,20" fill="#b45309"/>
    <!-- Panache volcanique explosif -->
    <ellipse cx="645" cy="-25" rx="14" ry="8" fill="#64748b" opacity="0.8"/>
    <text x="645" y="-38" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#dc2626">Volcan gris (Explosif)</text>

    <!-- Asthénosphère sous-jacente (Ductile / Chaud) -->
    <rect x="0" y="180" width="780" height="170" fill="url(#mantleGrad)"/>
    <text x="390" y="270" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#ffffff">
      ASTHÉNOSPHÈRE DUCTILE (Manteau supérieur chaud)
    </text>

    <!-- CELLULES DE CONVECTION (Flèches circulaires dans le manteau) -->
    <!-- Cellule gauche (sens anti-horaire) -->
    <path d="M 160,280 C 130,240 130,220 180,200" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="6,4"/>
    <polygon points="185,200 173,195 178,206" fill="#ffffff"/>
    <!-- Cellule droite sous la dorsale (sens horaire) -->
    <path d="M 280,280 C 310,240 310,220 260,200" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="6,4"/>
    <polygon points="255,200 267,195 262,206" fill="#ffffff"/>

    <!-- ZONE DE DIVERGENCE : DORSALE OCÉANIQUE (Au centre-gauche, x=220) -->
    <!-- Montée de magma à l'axe de la dorsale -->
    <polygon points="205,180 235,180 225,90 215,90" fill="#dc2626"/>
    <path d="M 120,100 L 215,90 L 220,105 L 225,90 L 320,100 L 320,160 L 120,160 Z" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <text x="220" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle" fill="#dc2626">
      DORSALE (Rift central)
    </text>

    <!-- Flèches d'écartement / Divergence -->
    <g transform="translate(170, 125)">
      <line x1="0" y1="0" x2="-35" y2="0" stroke="#facc15" stroke-width="4"/>
      <polygon points="-42,0 -32,-6 -32,6" fill="#facc15"/>
      <text x="-25" y="-8" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f172a">Écartement</text>
    </g>
    <g transform="translate(270, 125)">
      <line x1="0" y1="0" x2="35" y2="0" stroke="#facc15" stroke-width="4"/>
      <polygon points="42,0 32,-6 32,6" fill="#facc15"/>
      <text x="5" y="-8" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f172a">Écartement</text>
    </g>

    <!-- ZONE DE CONVERGENCE : FOSSE & SUBDUCTION (x=500 à 600) -->
    <!-- Plaque océanique plongeante (Dense, ~3.0) -->
    <path d="M 320,100 L 500,100 L 610,260 L 560,290 L 460,160 L 320,160 Z" fill="#475569" stroke="#1e293b" stroke-width="2"/>
    <text x="495" y="85" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#0284c7">Fosse océanique</text>
    <line x1="495" y1="90" x2="495" y2="105" stroke="#0284c7" stroke-width="2"/>

    <!-- Flèche de subduction -->
    <g transform="translate(520, 170)">
      <line x1="0" y1="0" x2="30" y2="40" stroke="#facc15" stroke-width="4"/>
      <polygon points="35,46 22,40 32,32" fill="#facc15"/>
      <text x="35" y="30" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff">Subduction</text>
    </g>

    <!-- Foyer de séismes le long du plan de Benioff -->
    <circle cx="510" cy="130" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="535" cy="170" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="560" cy="210" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
    <text x="570" y="215" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ffffff">Séismes (Plan de Wadati-Benioff)</text>
  </g>

  <!-- Légende inférieure -->
  <g transform="translate(30, 420)">
    <rect x="0" y="0" width="800" height="40" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    <text x="400" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0f172a">
      Trois limites de plaques : Divergence (Création de croûte / Dorsales) • Convergence (Destruction / Subduction &amp; Collision) • Coulissage (Failles transformantes)
    </text>
  </g>
</svg>`)}`;

/**
 * Figure 6 : Le Cycle perpétuel des Roches (Magmatiques, Sédimentaires et Métamorphiques)
 */
export const SVG_SVT_3EME_CYCLE_ROCHES = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 440" width="100%" height="100%">
  <defs>
    <linearGradient id="bgCycle" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgCycle)" rx="16"/>
  <rect x="10" y="10" width="800" height="420" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="410" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 21.1 : Le Cycle Dynamique et Perpétuel des Roches Terrestres
  </text>
  <text x="410" y="56" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Interconnexion entre processus géologiques externes (érosion, sédimentation) et internes (métamorphisme, fusion mantellique)
  </text>

  <!-- 1. ROCHES MAGMATIQUES (Haut Droite) -->
  <g transform="translate(480, 80)">
    <rect x="0" y="0" width="260" height="90" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2.5"/>
    <text x="130" y="28" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#991b1b">
      ROCHES MAGMATIQUES
    </text>
    <text x="130" y="48" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#b91c1c">
      Plutoniques (Granite) &amp; Volcaniques (Basalte)
    </text>
    <text x="130" y="68" font-family="system-ui, sans-serif" font-size="9.5" text-anchor="middle" fill="#7f1d1d">
      Nées du refroidissement et cristallisation du magma
    </text>
  </g>

  <!-- 2. ROCHES SÉDIMENTAIRES (Haut Gauche) -->
  <g transform="translate(60, 80)">
    <rect x="0" y="0" width="260" height="90" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
    <text x="130" y="28" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#075985">
      ROCHES SÉDIMENTAIRES
    </text>
    <text x="130" y="48" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0369a1">
      Grès, Calcaires, Argiles, Sables consolidés
    </text>
    <text x="130" y="68" font-family="system-ui, sans-serif" font-size="9.5" text-anchor="middle" fill="#0c4a6e">
      Formées par altération, transport et diagenèse
    </text>
  </g>

  <!-- Flèche Roches Magmatiques -> Roches Sédimentaires (Érosion & Sédimentation) -->
  <g transform="translate(320, 105)">
    <line x1="160" y1="20" x2="0" y2="20" stroke="#0284c7" stroke-width="3"/>
    <polygon points="-8,20 2,14 2,26" fill="#0284c7"/>
    <text x="80" y="12" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#0369a1">
      Altération, Érosion, Diagenèse
    </text>
  </g>

  <!-- 3. ROCHES MÉTAMORPHIQUES (Bas Centre) -->
  <g transform="translate(270, 240)">
    <rect x="0" y="0" width="270" height="95" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
    <text x="135" y="28" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#92400e">
      ROCHES MÉTAMORPHIQUES
    </text>
    <text x="135" y="48" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#b45309">
      Schistes, Micaschistes, Gneiss
    </text>
    <text x="135" y="68" font-family="system-ui, sans-serif" font-size="9.5" text-anchor="middle" fill="#78350f">
      Transformation à l'état solide sous Pression &amp; Température
    </text>
  </g>

  <!-- Flèche Roches Sédimentaires -> Roches Métamorphiques (Enfouissement / Métamorphisme) -->
  <path d="M 190,170 C 190,210 240,260 270,260" fill="none" stroke="#d97706" stroke-width="3"/>
  <polygon points="270,260 260,254 262,266" fill="#d97706"/>
  <text x="140" y="225" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#b45309">
    Enfouissement (P &amp; T)
  </text>

  <!-- Flèche Roches Magmatiques -> Roches Métamorphiques (Métamorphisme) -->
  <path d="M 610,170 C 610,210 570,260 540,260" fill="none" stroke="#d97706" stroke-width="3"/>
  <polygon points="540,260 548,266 550,254" fill="#d97706"/>
  <text x="590" y="225" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#b45309">
    Métamorphisme de contact
  </text>

  <!-- MAGMA EN PROFONDEUR (Tout en bas) -->
  <g transform="translate(300, 360)">
    <ellipse cx="105" cy="22" rx="130" ry="24" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <text x="105" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="#b91c1c">
      MAGMA MANTELLIQUE (Fusion / Anatexie)
    </text>
  </g>

  <!-- Flèche Métamorphiques -> Magma (Anatexie / Fusion totale) -->
  <line x1="405" y1="335" x2="405" y2="358" stroke="#dc2626" stroke-width="3"/>
  <polygon points="405,362 400,352 410,352" fill="#dc2626"/>

  <!-- Flèche Magma -> Roches Magmatiques (Refroidissement & Cristallisation) -->
  <path d="M 535,380 C 720,380 740,220 660,170" fill="none" stroke="#dc2626" stroke-width="3"/>
  <polygon points="660,170 668,178 672,166" fill="#dc2626"/>
  <text x="690" y="320" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#b91c1c">
    Cristallisation
  </text>
</svg>`)}`;

/**
 * Figure 7 : L'Appareil Digestif Humain et le Processus de Digestion
 */
export const SVG_SVT_3EME_DIGESTION = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgDig" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="shadowDig" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgDig)" rx="16"/>
  <rect x="10" y="10" width="830" height="480" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

  <text x="425" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#0f172a">
    Figure 23.1 : Anatomie de l'Appareil Digestif et Digestion Chimique des Aliments
  </text>
  <text x="425" y="56" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#64748b">
    Transformation mécanique et enzymatique des macromolécules en nutriments assimilables et absorption intestinale
  </text>

  <!-- Silhouette & Organes du Tube Digestif (Gauche) -->
  <g transform="translate(40, 75)">
    <!-- Contour silhouette humaine simplifié -->
    <path d="M 120,0 C 135,0 145,15 145,30 C 145,45 135,55 125,60 L 130,80 C 160,90 170,120 170,240 L 170,360 L 50,360 L 50,240 C 50,120 60,90 90,80 L 95,60 C 85,55 75,45 75,30 C 75,15 85,0 120,0 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- 1. Bouche & Glandes salivaires -->
    <ellipse cx="105" cy="30" rx="8" ry="4" fill="#fda4af" stroke="#e11d48" stroke-width="1.5"/>
    <circle cx="120" cy="35" r="5" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
    <text x="180" y="32" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#be123c">1. Bouche &amp; Glandes salivaires</text>
    <line x1="120" y1="30" x2="175" y2="30" stroke="#e11d48" stroke-width="1.5"/>

    <!-- 2. Œsophage -->
    <path d="M 110,40 L 110,110" stroke="#fb7185" stroke-width="6" stroke-linecap="round"/>
    <text x="180" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9f1239">2. Œsophage (Péristaltisme)</text>
    <line x1="114" y1="75" x2="175" y2="75" stroke="#fb7185" stroke-width="1.5"/>

    <!-- 3. Estomac -->
    <path d="M 110,110 C 90,115 85,140 100,160 C 115,175 135,160 130,140 C 128,125 125,115 110,110 Z" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
    <text x="180" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#be123c">3. Estomac (Suc gastrique HCl + Pepsine)</text>
    <line x1="130" y1="135" x2="175" y2="135" stroke="#e11d48" stroke-width="1.5"/>

    <!-- Foie & Vésicule biliaire (Glandes annexes) -->
    <path d="M 65,115 C 80,105 100,110 100,135 C 95,150 70,150 65,130 Z" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
    <circle cx="85" cy="138" r="4" fill="#16a34a"/>
    <text x="15" y="125" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#78350f">Foie &amp; Bile</text>

    <!-- Pancréas (Sous l'estomac) -->
    <ellipse cx="115" cy="165" rx="15" ry="5" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="180" y="168" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#a16207">Pancréas (Suc pancréatique)</text>

    <!-- 4. Intestin Grêle (Au centre, replié) -->
    <path d="M 105,175 C 95,190 120,195 110,210 C 100,225 125,230 115,245 C 105,255 120,265 110,275" fill="none" stroke="#f472b6" stroke-width="6" stroke-linecap="round"/>
    <text x="180" y="225" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#be185d">4. Intestin grêle (Absorption des nutriments)</text>
    <line x1="120" y1="220" x2="175" y2="220" stroke="#f472b6" stroke-width="1.5"/>

    <!-- 5. Gros Intestin / Côlon (Encadre l'intestin grêle) -->
    <path d="M 75,270 L 75,185 C 75,175 85,170 95,170 L 135,170 C 145,170 150,175 150,185 L 150,290 L 120,290 L 120,330" fill="none" stroke="#fb923c" stroke-width="8" stroke-linecap="round"/>
    <text x="180" y="285" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#c2410c">5. Gros intestin / Côlon (Réabsorption d'eau)</text>
    <line x1="155" y1="280" x2="175" y2="280" stroke="#fb923c" stroke-width="1.5"/>

    <!-- 6. Rectum & Anus -->
    <text x="180" y="330" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#7c2d12">6. Rectum &amp; Anus (Évacuation des selles)</text>
    <line x1="125" y1="330" x2="175" y2="330" stroke="#7c2d12" stroke-width="1.5"/>
  </g>

  <!-- Tableau Bio-chimique de la Digestion (Droite) -->
  <g transform="translate(480, 80)">
    <rect x="0" y="0" width="340" height="380" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadowDig)"/>
    <text x="170" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#0f172a">
      Tableau Récapitulatif des Enzymes Digestives
    </text>

    <!-- GLUCIDES -->
    <g transform="translate(15, 40)">
      <rect x="0" y="0" width="310" height="75" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af">GLUCIDES (Amidon, Sucres complexes)</text>
      <text x="10" y="34" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e3a8a">• Bouche : Amylase salivaire → Maltose</text>
      <text x="10" y="48" font-family="system-ui, sans-serif" font-size="9.5" fill="#1e3a8a">• Intestin : Amylase pancréatique + Maltase</text>
      <text x="10" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb">→ NUTRIMENT FINAL : GLUCOSE</text>
    </g>

    <!-- PROTÉINES / PROTIDES -->
    <g transform="translate(15, 125)">
      <rect x="0" y="0" width="310" height="75" rx="6" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9d174d">PROTIDES (Viandes, Poissons, Œufs)</text>
      <text x="10" y="34" font-family="system-ui, sans-serif" font-size="9.5" fill="#831843">• Estomac : Pepsine (en milieu acide HCl) → Peptides</text>
      <text x="10" y="48" font-family="system-ui, sans-serif" font-size="9.5" fill="#831843">• Intestin : Peptidases et Trypsine</text>
      <text x="10" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#db2777">→ NUTRIMENT FINAL : ACIDES AMINÉS</text>
    </g>

    <!-- LIPIDES -->
    <g transform="translate(15, 210)">
      <rect x="0" y="0" width="310" height="75" rx="6" fill="#fefce8" stroke="#fde047" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#854d0e">LIPIDES (Huiles, Graisses, Beurre)</text>
      <text x="10" y="34" font-family="system-ui, sans-serif" font-size="9.5" fill="#713f12">• Duodénum : Émulsion mécanique par la Bile</text>
      <text x="10" y="48" font-family="system-ui, sans-serif" font-size="9.5" fill="#713f12">• Intestin : Lipase pancréatique et intestinale</text>
      <text x="10" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ca8a04">→ NUTRIMENTS : ACIDES GRAS + GLYCÉROL</text>
    </g>

    <!-- EAU, SELS & VITAMINES -->
    <g transform="translate(15, 295)">
      <rect x="0" y="0" width="310" height="65" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#166534">EAU, SELS MINÉRAUX &amp; VITAMINES</text>
      <text x="10" y="34" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d">• Petites molécules non transformées par les enzymes</text>
      <text x="10" y="50" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#16a34a">→ ABSORPTION DIRECTE dans le sang</text>
    </g>
  </g>
</svg>`)}`;
