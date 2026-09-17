// =========================================================================
// DIAGRAMMES ET FIGURES SVG DE DÉMONSTRATION - HISTOIRE 4ÈME (SÉNÉGAL)
// =========================================================================

export const SVG_HIST4_COMMERCE_TRANSSAHARIEN = `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-80">
  <defs>
    <linearGradient id="sandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="50%" stop-color="#fef3c7"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
    <linearGradient id="northGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="southGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M1,1 L7,4 L1,7 Z" fill="#dc2626"/>
    </marker>
    <marker id="arrowGold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M1,1 L7,4 L1,7 Z" fill="#d97706"/>
    </marker>
  </defs>

  <!-- Fond carte stylisée -->
  <rect x="10" y="10" width="680" height="340" rx="16" fill="url(#sandGrad)" stroke="#d97706" stroke-width="2"/>

  <!-- Titre -->
  <text x="350" y="38" text-anchor="middle" font-size="16" font-weight="900" fill="#78350f" letter-spacing="1">
    FIGURE 1 : LE COMMERCE TRANSSAHARIEN ET L'AFRIQUE DU XVIe SIÈCLE
  </text>
  <text x="350" y="56" text-anchor="middle" font-size="11" font-weight="600" fill="#92400e">
    Axes caravaniers entre le Maghreb, l'Empire Songhaï et les royaumes côtiers
  </text>

  <!-- Zone Nord: Maghreb & Méditerranée -->
  <rect x="80" y="75" width="540" height="52" rx="10" fill="url(#northGrad)"/>
  <text x="350" y="98" text-anchor="middle" font-size="13" font-weight="800" fill="#ffffff">
    AFRIQUE DU NORD &amp; MAGHREB (Fès, Marrakech, Tripoli, Tunis, Le Caire)
  </text>
  <text x="350" y="116" text-anchor="middle" font-size="10.5" font-weight="600" fill="#e0f2fe">
    Exportations : Sel marin, tissus de luxe, armes blanches, chevaux arabes, produits manufacturés
  </text>

  <!-- Zone Centrale: Désert du Sahara & Oasis -->
  <rect x="120" y="148" width="460" height="64" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="350" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="#854d0e">
    DÉSERT DU SAHARA — PISTES CARAVANIÈRES TRANSSAHARIENNES
  </text>
  <text x="350" y="192" text-anchor="middle" font-size="10.5" font-weight="600" fill="#713f12">
    Caravanes de dromadaires (Azalaï) • Relais aux salines de Taghaza &amp; Taoudeni • Puits d'oasis
  </text>

  <!-- Flux d'échange Nord -> Sud -->
  <path d="M220,128 L220,147" stroke="#dc2626" stroke-width="3" marker-end="url(#arrowRed)"/>
  <text x="210" y="140" text-anchor="end" font-size="9.5" font-weight="700" fill="#dc2626">Sel, Armes, Tissus</text>

  <!-- Flux d'échange Sud -> Nord -->
  <path d="M480,228 L480,213" stroke="#d97706" stroke-width="3" marker-end="url(#arrowGold)"/>
  <text x="490" y="222" text-anchor="start" font-size="9.5" font-weight="700" fill="#d97706">Or, Ivoire, Esclaves</text>

  <!-- Zone Sud: Sahel et Afrique de l'Ouest -->
  <rect x="80" y="232" width="540" height="60" rx="10" fill="url(#southGrad)"/>
  <text x="350" y="254" text-anchor="middle" font-size="13" font-weight="800" fill="#ffffff">
    AFRIQUE SUBSAHARIENNE (Empire Songhaï, Grand Djolof, Kongo, Haoussa)
  </text>
  <text x="350" y="272" text-anchor="middle" font-size="10.5" font-weight="600" fill="#d1fae5">
    Pôles majeurs : Tombouctou (Université Sankoré), Gao, Djenné • Or de Bouré et Bambouk
  </text>

  <!-- Légende bas -->
  <g transform="translate(60, 305)">
    <rect x="0" y="0" width="580" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
    <circle cx="25" cy="17" r="6" fill="#059669"/>
    <text x="38" y="21" font-size="10" font-weight="700" fill="#334155">Grandes puissances du XVIe s. : Songhaï (Askia), Grand Djolof (Sénégal), Royaume Kongo, Cités Swahilies</text>
  </g>
</svg>`;

export const SVG_HIST4_GRANDES_DECOUVERTES = `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-80">
  <defs>
    <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Fond océan -->
  <rect x="10" y="10" width="680" height="340" rx="16" fill="url(#oceanGrad)" stroke="#38bdf8" stroke-width="1.5"/>

  <!-- Titre -->
  <text x="350" y="38" text-anchor="middle" font-size="15" font-weight="900" fill="#38bdf8" letter-spacing="1">
    FIGURE 2 : LES GRANDES DÉCOUVERTES (XVe - XVIIe SIÈCLE)
  </text>
  <text x="350" y="56" text-anchor="middle" font-size="11" font-weight="600" fill="#cbd5e1">
    Rupture du monopole ottoman en Méditerranée et premières routes maritimes planétaires
  </text>

  <!-- Boîtes des navigateurs -->
  <g transform="translate(40, 80)">
    <!-- Caravelle & Instruments -->
    <rect x="0" y="0" width="190" height="150" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#d97706"/>
    <text x="95" y="18" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">PROGRÈS TECHNIQUES</text>
    <text x="12" y="50" font-size="10" font-weight="700" fill="#fde68a">• La Caravelle :</text>
    <text x="18" y="66" font-size="9" fill="#e2e8f0">Navire haut, voiles carrées</text>
    <text x="18" y="78" font-size="9" fill="#e2e8f0">&amp; latines pour naviguer au vent.</text>
    <text x="12" y="98" font-size="10" font-weight="700" fill="#fde68a">• Navigation hauturière :</text>
    <text x="18" y="114" font-size="9" fill="#e2e8f0">Boussole magnétique, astrolabe,</text>
    <text x="18" y="126" font-size="9" fill="#e2e8f0">portulans et cartes marines.</text>
    <text x="18" y="140" font-size="9" fill="#38bdf8">Permet de s'éloigner des côtes.</text>
  </g>

  <g transform="translate(255, 80)">
    <!-- Colomb 1492 -->
    <rect x="0" y="0" width="190" height="150" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#dc2626"/>
    <text x="95" y="18" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">CHRISTOPHE COLOMB (1492)</text>
    <text x="12" y="50" font-size="10" font-weight="700" fill="#fca5a5">• Cap à l'Ouest (Espagne) :</text>
    <text x="18" y="66" font-size="9" fill="#e2e8f0">Parti de Palos le 3 août 1492.</text>
    <text x="18" y="80" font-size="9" fill="#e2e8f0">Atteint les Antilles (Guanahani)</text>
    <text x="18" y="92" font-size="9" fill="#e2e8f0">le 12 octobre 1492.</text>
    <text x="12" y="112" font-size="10" font-weight="700" fill="#fca5a5">• Choc du Nouveau Monde :</text>
    <text x="18" y="128" font-size="9" fill="#e2e8f0">Croyait avoir atteint l'Inde.</text>
    <text x="18" y="140" font-size="9" fill="#f87171">Conquête espagnole (Cortés, Pizarro).</text>
  </g>

  <g transform="translate(470, 80)">
    <!-- Vasco de Gama 1498 -->
    <rect x="0" y="0" width="190" height="150" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#059669"/>
    <text x="95" y="18" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">VASCO DE GAMA (1498)</text>
    <text x="12" y="50" font-size="10" font-weight="700" fill="#6ee7b7">• Route du Sud (Portugal) :</text>
    <text x="18" y="66" font-size="9" fill="#e2e8f0">Contourne l'Afrique par</text>
    <text x="18" y="78" font-size="9" fill="#e2e8f0">le Cap de Bonne-Espérance.</text>
    <text x="18" y="92" font-size="9" fill="#e2e8f0">Arrive à Calicut (Inde) en mai 1498.</text>
    <text x="12" y="112" font-size="10" font-weight="700" fill="#6ee7b7">• Comptoirs en Asie :</text>
    <text x="18" y="128" font-size="9" fill="#e2e8f0">Goa, Macao, Batavia.</text>
    <text x="18" y="140" font-size="9" fill="#34d399">Monopole épices, soie, porcelaine.</text>
  </g>

  <!-- Impact global bas -->
  <g transform="translate(40, 248)">
    <rect x="0" y="0" width="620" height="85" rx="10" fill="#0f172a" stroke="#475569"/>
    <text x="310" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#facc15">
      CONSÉQUENCE HISTORIQUE : LA PREMIÈRE MONDIALISATION ÉCONOMIQUE
    </text>
    <text x="310" y="44" text-anchor="middle" font-size="10.5" fill="#f1f5f9">
      • En Amérique : Écrasement des Aztèques et Incas, choc microbien (variole, rougeole) détruisant 80 à 90 % des Amérindiens.
    </text>
    <text x="310" y="62" text-anchor="middle" font-size="10.5" fill="#f1f5f9">
      • En Asie : Résistance des grands empires (Moghol, Ming, Shogunat japonais), commerce par comptoirs maritimes.
    </text>
    <text x="310" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#38bdf8">
      • Pour remplacer la main-d'œuvre amérindienne décimée, l'Europe se tourne vers la déportation d'Africains (traite atlantique).
    </text>
  </g>
</svg>`;

export const SVG_HIST4_COMMERCE_TRIANGULAIRE = `<svg viewBox="0 0 700 370" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-88">
  <defs>
    <marker id="arrowTri1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M1,1 L8,4.5 L1,8 Z" fill="#2563eb"/>
    </marker>
    <marker id="arrowTri2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M1,1 L8,4.5 L1,8 Z" fill="#dc2626"/>
    </marker>
    <marker id="arrowTri3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M1,1 L8,4.5 L1,8 Z" fill="#16a34a"/>
    </marker>
  </defs>

  <rect x="10" y="10" width="680" height="350" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>

  <text x="350" y="36" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a">
    FIGURE 3 : LE CIRCUIT DU COMMERCE TRIANGULAIRE (TRAITE ATLANTIQUE)
  </text>
  <text x="350" y="54" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">
    Mécanisme du trafic négrier international entre l'Europe, l'Afrique et les Amériques (XVIe - XIXe siècle)
  </text>

  <!-- Pôle 1: EUROPE (Nord-Est) -->
  <g transform="translate(420, 75)">
    <rect x="0" y="0" width="220" height="75" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="110" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="#1e40af">1. EUROPE (Ports négriers)</text>
    <text x="110" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">Nantes, Bordeaux, Liverpool, Bristol</text>
    <text x="110" y="58" text-anchor="middle" font-size="9.5" fill="#475569">Chargement de pacotille : armes à feu,</text>
    <text x="110" y="70" text-anchor="middle" font-size="9.5" fill="#475569">poudre, alcool, tissus (guinées), verroterie</text>
  </g>

  <!-- Pôle 2: AFRIQUE (Sud-Est) -->
  <g transform="translate(420, 225)">
    <rect x="0" y="0" width="220" height="85" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
    <text x="110" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="#991b1b">2. AFRIQUE (Côtes &amp; Forts)</text>
    <text x="110" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">Gorée, Saint-Louis, Ouidah, Elmina</text>
    <text x="110" y="58" text-anchor="middle" font-size="9.5" fill="#475569">Razzias, capture de jeunes sains,</text>
    <text x="110" y="70" text-anchor="middle" font-size="9.5" fill="#475569">échange contre les produits européens,</text>
    <text x="110" y="81" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">Embarquement forcé dans les cales</text>
  </g>

  <!-- Pôle 3: AMÉRIQUES & CARAÏBES (Ouest) -->
  <g transform="translate(40, 150)">
    <rect x="0" y="0" width="230" height="90" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
    <text x="115" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="#166534">3. AMÉRIQUES &amp; ANTILLES</text>
    <text x="115" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">Brésil, Caraïbes (Saint-Domingue), USA</text>
    <text x="115" y="58" text-anchor="middle" font-size="9.5" fill="#475569">Vente des captifs survivants aux enchères</text>
    <text x="115" y="70" text-anchor="middle" font-size="9.5" fill="#475569">Travail forcé dans plantations et mines</text>
    <text x="115" y="83" text-anchor="middle" font-size="9.5" font-weight="700" fill="#166534">Production : sucre, coton, café, tabac</text>
  </g>

  <!-- Flèche 1: Europe -> Afrique -->
  <path d="M530,150 L530,223" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#arrowTri1)"/>
  <text x="545" y="190" font-size="9.5" font-weight="700" fill="#2563eb">1er Voyage :</text>
  <text x="545" y="202" font-size="9" fill="#1e40af">Produits manufacturés</text>

  <!-- Flèche 2: Afrique -> Amérique (Passage du Milieu) -->
  <path d="M420,270 C310,290 260,260 272,225" fill="none" stroke="#dc2626" stroke-width="4" marker-end="url(#arrowTri2)"/>
  <text x="320" y="278" text-anchor="middle" font-size="11" font-weight="900" fill="#dc2626">2e Voyage : LE PASSAGE DU MILIEU</text>
  <text x="320" y="292" text-anchor="middle" font-size="9" font-weight="600" fill="#991b1b">Cales surpeuplées, chaînes, scorbut, 15-20% de mortalité en mer</text>

  <!-- Flèche 3: Amérique -> Europe -->
  <path d="M260,150 C310,105 350,95 418,105" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#arrowTri3)"/>
  <text x="340" y="102" text-anchor="middle" font-size="10" font-weight="800" fill="#15803d">3e Voyage : Produits coloniaux tropicaux</text>
  <text x="340" y="115" text-anchor="middle" font-size="9" fill="#166534">Sucre, café, cacao, rhum vers l'Europe</text>

  <!-- Note de bas -->
  <rect x="40" y="325" width="620" height="24" rx="4" fill="#f1f5f9"/>
  <text x="350" y="341" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">
    Un cycle complet durait entre 12 et 18 mois et rapportait des profits colossaux aux armateurs européens.
  </text>
</svg>`;

export const SVG_HIST4_GOREE_SAINT_LOUIS = `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-80">
  <defs>
    <linearGradient id="goreeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff7ed"/>
      <stop offset="100%" stop-color="#ffedd5"/>
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="680" height="340" rx="16" fill="url(#goreeGrad)" stroke="#ea580c" stroke-width="2"/>

  <text x="350" y="36" text-anchor="middle" font-size="15" font-weight="900" fill="#9a3412">
    FIGURE 4 : LES COMPTOIRS DU SÉNÉGAL — SAINT-LOUIS &amp; L'ÎLE DE GORÉE
  </text>
  <text x="350" y="54" text-anchor="middle" font-size="11" font-weight="600" fill="#c2410c">
    Deux piliers stratégiques de la traite atlantique et du commerce colonial en Sénégambie
  </text>

  <!-- Comptoir Saint-Louis -->
  <g transform="translate(35, 75)">
    <rect x="0" y="0" width="300" height="185" rx="12" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
    <rect x="0" y="0" width="300" height="32" rx="12" fill="#ea580c"/>
    <text x="150" y="21" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">
      SAINT-LOUIS DU SÉNÉGAL (Fondé en 1659)
    </text>
    <g transform="translate(15, 45)">
      <text x="0" y="15" font-size="10.5" font-weight="700" fill="#c2410c">• Situation géographique :</text>
      <text x="10" y="30" font-size="9.5" fill="#334155">Île fluviale à l'embouchure du fleuve Sénégal.</text>
      <text x="10" y="44" font-size="9.5" fill="#334155">Verrou d'accès vers l'intérieur du continent.</text>
      <text x="0" y="65" font-size="10.5" font-weight="700" fill="#c2410c">• Activités commerciales :</text>
      <text x="10" y="80" font-size="9.5" fill="#334155">Traite de la gomme arabique, or du Bambouk,</text>
      <text x="10" y="94" font-size="9.5" fill="#334155">et esclaves razziés le long de la vallée.</text>
      <text x="0" y="115" font-size="10.5" font-weight="700" fill="#c2410c">• Société métissée des Signares :</text>
      <text x="10" y="130" font-size="9.5" fill="#334155">Femmes afro-françaises fortunées, propriétaires</text>
      <text x="10" y="144" font-size="9.5" fill="#334155">de maisons de commerce et intermédiaires clés.</text>
    </g>
  </g>

  <!-- Comptoir Île de Gorée -->
  <g transform="translate(365, 75)">
    <rect x="0" y="0" width="300" height="185" rx="12" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
    <rect x="0" y="0" width="300" height="32" rx="12" fill="#ea580c"/>
    <text x="150" y="21" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">
      ÎLE DE GORÉE (Baie de Dakar)
    </text>
    <g transform="translate(15, 45)">
      <text x="0" y="15" font-size="10.5" font-weight="700" fill="#c2410c">• Position militaire convoitée :</text>
      <text x="10" y="30" font-size="9.5" fill="#334155">Disputée entre Portugais, Hollandais,</text>
      <text x="10" y="44" font-size="9.5" fill="#334155">Anglais et Français pour son mouillage sûr.</text>
      <text x="0" y="65" font-size="10.5" font-weight="700" fill="#c2410c">• Maison des Esclaves (1776) :</text>
      <text x="10" y="80" font-size="9.5" fill="#334155">Cellules de tri par âge et poids (60 kg min),</text>
      <text x="10" y="94" font-size="9.5" fill="#334155">marquage au fer rouge, fers aux chevilles.</text>
      <text x="0" y="115" font-size="10.5" font-weight="700" fill="#c2410c">• « Porte du Voyage sans retour » :</text>
      <text x="10" y="130" font-size="9.5" fill="#334155">Ouverture sur l'océan Atlantique où les captifs</text>
      <text x="10" y="144" font-size="9.5" fill="#334155">embarquaient vers les Amériques à jamais.</text>
    </g>
  </g>

  <!-- Bandeau mémoriel -->
  <g transform="translate(35, 275)">
    <rect x="0" y="0" width="630" height="50" rx="8" fill="#7c2d12"/>
    <text x="315" y="22" text-anchor="middle" font-size="11.5" font-weight="800" fill="#fef08a">
      SYMBOLE UNIVERSEL DE LA MÉMOIRE DE L'ESCLAVAGE
    </text>
    <text x="315" y="38" text-anchor="middle" font-size="10" fill="#ffffff">
      Gorée est aujourd'hui classée Patrimoine mondial de l'UNESCO et accueille des pèlerins du monde entier.
    </text>
  </g>
</svg>`;

export const SVG_HIST4_ABOLITION_TIMELINE = `<svg viewBox="0 0 700 330" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-76">
  <rect x="10" y="10" width="680" height="310" rx="16" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>

  <text x="350" y="35" text-anchor="middle" font-size="15" font-weight="900" fill="#115e59">
    FIGURE 5 : LA FRISE CHRONOLOGIQUE DE L'ABOLITION (XVIIIe - XIXe SIÈCLE)
  </text>
  <text x="350" y="52" text-anchor="middle" font-size="11" font-weight="600" fill="#134e4a">
    De la résistance des esclaves aux décrets juridiques d'interdiction
  </text>

  <!-- Ligne de temps principale -->
  <line x1="50" y1="125" x2="650" y2="125" stroke="#0d9488" stroke-width="4" stroke-linecap="round"/>

  <!-- Étape 1 : 1791 -->
  <circle cx="90" cy="125" r="9" fill="#dc2626"/>
  <text x="90" y="105" text-anchor="middle" font-size="12" font-weight="900" fill="#b91c1c">1791 - 1804</text>
  <rect x="25" y="145" width="130" height="100" rx="8" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="90" y="165" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">RÉVOLUTION HAÏTI</text>
  <text x="90" y="180" text-anchor="middle" font-size="8.5" fill="#334155">Toussaint Louverture</text>
  <text x="90" y="195" text-anchor="middle" font-size="8.5" fill="#334155">Révolte victorieuse</text>
  <text x="90" y="210" text-anchor="middle" font-size="8.5" fill="#334155">1ère république noire</text>
  <text x="90" y="225" text-anchor="middle" font-size="8.5" font-weight="700" fill="#b91c1c">Indépendance (1804)</text>

  <!-- Étape 2 : 1807 / 1833 -->
  <circle cx="250" cy="125" r="9" fill="#2563eb"/>
  <text x="250" y="105" text-anchor="middle" font-size="12" font-weight="900" fill="#1d4ed8">1807 / 1833</text>
  <rect x="185" y="145" width="130" height="100" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="250" y="165" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">ROYAUME-UNI</text>
  <text x="250" y="180" text-anchor="middle" font-size="8.5" fill="#334155">1807 : Abolition traite</text>
  <text x="250" y="195" text-anchor="middle" font-size="8.5" fill="#334155">Action des Quakers</text>
  <text x="250" y="210" text-anchor="middle" font-size="8.5" fill="#334155">William Wilberforce</text>
  <text x="250" y="225" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1d4ed8">1833 : Fin esclavage</text>

  <!-- Étape 3 : 1848 -->
  <circle cx="430" cy="125" r="11" fill="#059669"/>
  <text x="430" y="103" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">27 AVRIL 1848</text>
  <rect x="365" y="145" width="130" height="100" rx="8" fill="#ffffff" stroke="#86efac" stroke-width="2"/>
  <text x="430" y="165" text-anchor="middle" font-size="10" font-weight="800" fill="#065f46">FRANCE (Schœlcher)</text>
  <text x="430" y="180" text-anchor="middle" font-size="8.5" fill="#334155">Décret définitif</text>
  <text x="430" y="195" text-anchor="middle" font-size="8.5" fill="#334155">IIe République</text>
  <text x="430" y="210" text-anchor="middle" font-size="8.5" fill="#334155">Application aux 4</text>
  <text x="430" y="225" text-anchor="middle" font-size="8.5" font-weight="700" fill="#047857">communes (Sénégal)</text>

  <!-- Étape 4 : 1865 -->
  <circle cx="590" cy="125" r="9" fill="#7c3aed"/>
  <text x="590" y="105" text-anchor="middle" font-size="12" font-weight="900" fill="#6d28d9">1865</text>
  <rect x="525" y="145" width="130" height="100" rx="8" fill="#ffffff" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="590" y="165" text-anchor="middle" font-size="10" font-weight="800" fill="#5b21b6">ÉTATS-UNIS</text>
  <text x="590" y="180" text-anchor="middle" font-size="8.5" fill="#334155">Guerre de Sécession</text>
  <text x="590" y="195" text-anchor="middle" font-size="8.5" fill="#334155">Abraham Lincoln</text>
  <text x="590" y="210" text-anchor="middle" font-size="8.5" fill="#334155">13e amendement</text>
  <text x="590" y="225" text-anchor="middle" font-size="8.5" font-weight="700" fill="#6d28d9">Libération 4M noirs</text>

  <!-- Bas de page -->
  <g transform="translate(50, 260)">
    <rect x="0" y="0" width="600" height="42" rx="8" fill="#134e4a"/>
    <text x="300" y="18" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">
      Conséquence en Afrique : Transition vers l'exploration géographique &amp; l'exploitation des ressources in situ
    </text>
    <text x="300" y="32" text-anchor="middle" font-size="9.5" fill="#99f6e4">
      La fin de l'exportation des hommes prépare la conquête coloniale européenne à la fin du XIXe siècle.
    </text>
  </g>
</svg>`;

export const SVG_HIST4_DISLOCATION_DJOLOF = `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-80">
  <defs>
    <linearGradient id="djolofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="680" height="340" rx="16" fill="url(#djolofGrad)" stroke="#b45309" stroke-width="2"/>

  <text x="350" y="35" text-anchor="middle" font-size="15" font-weight="900" fill="#78350f">
    FIGURE 6 : LA DISLOCATION DU GRAND DJOLOF (BATAILLE DE DANKI, 1549)
  </text>
  <text x="350" y="53" text-anchor="middle" font-size="11" font-weight="600" fill="#92400e">
    Émergence des royaumes sénégalais indépendants (Cayor, Baol, Waalo, Sine, Saloum)
  </text>

  <!-- L'Empire unifié avant 1549 -->
  <g transform="translate(40, 75)">
    <rect x="0" y="0" width="180" height="150" rx="10" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
    <rect x="0" y="0" width="180" height="28" rx="10" fill="#b45309"/>
    <text x="90" y="18" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">AVANT 1549</text>
    <text x="90" y="48" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">LE GRAND DJOLOF</text>
    <text x="12" y="70" font-size="9" fill="#334155">• Capitale à Yang-Yang</text>
    <text x="12" y="85" font-size="9" fill="#334155">• Dirigé par le Bourba</text>
    <text x="12" y="100" font-size="9" fill="#334155">• Fédère tout l'espace</text>
    <text x="12" y="115" font-size="9" fill="#334155">  wolof et sérère</text>
    <text x="12" y="132" font-size="9" font-weight="700" fill="#b45309">• Dépendance du tribut</text>
  </g>

  <!-- Choc central: Bataille de Danki -->
  <g transform="translate(245, 85)">
    <polygon points="105,0 210,65 105,130 0,65" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
    <text x="105" y="42" text-anchor="middle" font-size="11" font-weight="900" fill="#b91c1c">BATAILLE DE</text>
    <text x="105" y="60" text-anchor="middle" font-size="14" font-weight="900" fill="#dc2626">DANKI (1549)</text>
    <text x="105" y="80" text-anchor="middle" font-size="9" font-weight="700" fill="#991b1b">Amari Ngoné Sobel Fall</text>
    <text x="105" y="93" text-anchor="middle" font-size="8.5" fill="#334155">refuse le tribut et tue</text>
    <text x="105" y="105" text-anchor="middle" font-size="8.5" font-weight="700" fill="#b91c1c">le Bourba Lélé Fouli Fak</text>
  </g>

  <!-- Après 1549 : Les Nouveaux Royaumes -->
  <g transform="translate(480, 68)">
    <rect x="0" y="0" width="180" height="170" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="0" y="0" width="180" height="26" rx="10" fill="#15803d"/>
    <text x="90" y="17" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">ROYAUMES RIVAUX</text>
    <text x="10" y="42" font-size="9.5" font-weight="800" fill="#15803d">• CAYOR :</text>
    <text x="15" y="55" font-size="8.5" fill="#334155">Damel • Armée des Ceddo</text>
    <text x="10" y="73" font-size="9.5" font-weight="800" fill="#15803d">• BAOL :</text>
    <text x="15" y="86" font-size="8.5" fill="#334155">Teigne • Souvent uni au Cayor</text>
    <text x="10" y="104" font-size="9.5" font-weight="800" fill="#15803d">• WAALO :</text>
    <text x="15" y="117" font-size="8.5" fill="#334155">Brak • Delta du fleuve Sénégal</text>
    <text x="10" y="135" font-size="9.5" font-weight="800" fill="#15803d">• SINE &amp; SALOUM :</text>
    <text x="15" y="148" font-size="8.5" fill="#334155">Bour Sine/Saloum • Guelwars</text>
  </g>

  <!-- Tableau comparatif bas -->
  <g transform="translate(40, 250)">
    <rect x="0" y="0" width="620" height="75" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="310" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">
      TITRES OFFICIELS DES SOUVERAINS DE SÉNÉGAMBIE
    </text>
    <text x="80" y="40" font-size="9.5" font-weight="700" fill="#b45309">Bourba Djolof (Djolof)</text>
    <text x="80" y="56" font-size="8.5" fill="#64748b">Empire central déchu</text>

    <text x="235" y="40" font-size="9.5" font-weight="700" fill="#15803d">Damel (Cayor)</text>
    <text x="235" y="56" font-size="8.5" fill="#64748b">Puissance maritime &amp; guerrière</text>

    <text x="375" y="40" font-size="9.5" font-weight="700" fill="#0284c7">Teigne (Baol) / Brak (Waalo)</text>
    <text x="375" y="56" font-size="8.5" fill="#64748b">Contrôle agricole et fluvial</text>

    <text x="530" y="40" font-size="9.5" font-weight="700" fill="#7c3aed">Bour Sine / Saloum</text>
    <text x="530" y="56" font-size="8.5" fill="#64748b">Dynastie sérère des Guelwars</text>
  </g>
</svg>`;

export const SVG_HIST4_FOUTA_TORO_TORODBE = `<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-80">
  <rect x="10" y="10" width="680" height="320" rx="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>

  <text x="350" y="36" text-anchor="middle" font-size="15" font-weight="900" fill="#14532d">
    FIGURE 7 : LA RÉVOLUTION TORODBE DU FOUTA-TORO (1776)
  </text>
  <text x="350" y="54" text-anchor="middle" font-size="11" font-weight="600" fill="#166534">
    Transition du régime Ceddo des Deniankobé vers l'Almamiat théocratique électif
  </text>

  <!-- Colonne 1 : Avant 1776 -->
  <g transform="translate(40, 75)">
    <rect x="0" y="0" width="190" height="160" rx="10" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#dc2626"/>
    <text x="95" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">LES DÉNIANKOBÉ</text>
    <text x="12" y="48" font-size="9.5" font-weight="700" fill="#991b1b">• Fondateur :</text>
    <text x="18" y="62" font-size="9" fill="#334155">Koli Tenguella Ba (XVIe s.)</text>
    <text x="12" y="80" font-size="9.5" font-weight="700" fill="#991b1b">• Nature du pouvoir :</text>
    <text x="18" y="94" font-size="9" fill="#334155">Régime militaire Ceddo,</text>
    <text x="18" y="106" font-size="9" fill="#334155">pratiques non-islamiques</text>
    <text x="12" y="124" font-size="9.5" font-weight="700" fill="#991b1b">• Crise du XVIIIe s. :</text>
    <text x="18" y="138" font-size="9" fill="#334155">Razzias des Maures du Trarza</text>
    <text x="18" y="150" font-size="9" fill="#dc2626">Incapables de protéger le peuple</text>
  </g>

  <!-- Colonne 2 : La Révolution (1776) -->
  <g transform="translate(255, 75)">
    <rect x="0" y="0" width="190" height="160" rx="10" fill="#ffffff" stroke="#eab308" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#ca8a04"/>
    <text x="95" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">RÉVOLUTION DE 1776</text>
    <text x="12" y="48" font-size="9.5" font-weight="700" fill="#854d0e">• Leader idéologique :</text>
    <text x="18" y="62" font-size="9" font-weight="700" fill="#ca8a04">Thierno Souleymane Baal</text>
    <text x="12" y="80" font-size="9.5" font-weight="700" fill="#854d0e">• Les Torodbe :</text>
    <text x="18" y="94" font-size="9" fill="#334155">Lettrés et clercs musulmans</text>
    <text x="18" y="106" font-size="9" fill="#334155">prêchant le djihad libérateur</text>
    <text x="12" y="124" font-size="9.5" font-weight="700" fill="#854d0e">• Principes républicains :</text>
    <text x="18" y="138" font-size="9" fill="#334155">Chef élu, pas de royauté</text>
    <text x="18" y="150" font-size="9" fill="#854d0e">héréditaire, justice sociale</text>
  </g>

  <!-- Colonne 3 : L'Almamiat -->
  <g transform="translate(470, 75)">
    <rect x="0" y="0" width="190" height="160" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#15803d"/>
    <text x="95" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">L'ALMAMIAT</text>
    <text x="12" y="48" font-size="9.5" font-weight="700" fill="#166534">• Premier Almamy :</text>
    <text x="18" y="62" font-size="9" font-weight="700" fill="#15803d">Abdul Kader Kane</text>
    <text x="12" y="80" font-size="9.5" font-weight="700" fill="#166534">• Réformes majeures :</text>
    <text x="18" y="94" font-size="9" fill="#334155">Mosquées-forteresses,</text>
    <text x="18" y="106" font-size="9" fill="#166534">interdiction traite fluviale,</text>
    <text x="18" y="118" font-size="9" fill="#334155">libération des esclaves lettrés</text>
    <text x="12" y="134" font-size="9.5" font-weight="700" fill="#166534">• Fin :</text>
    <text x="18" y="148" font-size="9" fill="#334155">Assassiné en 1807, rivalités</text>
  </g>

  <!-- Bilan bas -->
  <g transform="translate(40, 250)">
    <rect x="0" y="0" width="620" height="55" rx="8" fill="#14532d"/>
    <text x="310" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#86efac">
      PREMIER ÉTAT THÉOCRATIQUE ÉLECTIF D'AFRIQUE DE L'OUEST
    </text>
    <text x="310" y="40" text-anchor="middle" font-size="10" fill="#ffffff">
      Le modèle politique du Fouta-Toro inspirera directement les djihads de Sokoto, du Macina et d'El Hadj Oumar Tall au XIXe siècle.
    </text>
  </g>
</svg>`;

export const SVG_HIST4_CHAKA_ZOULOU_TACTIQUE = `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-80">
  <defs>
    <linearGradient id="zuluGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff1f2"/>
      <stop offset="100%" stop-color="#ffe4e6"/>
    </linearGradient>
    <marker id="arrowZulu" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M1,1 L7,4 L1,7 Z" fill="#e11d48"/>
    </marker>
  </defs>

  <rect x="10" y="10" width="680" height="340" rx="16" fill="url(#zuluGrad)" stroke="#e11d48" stroke-width="2"/>

  <text x="350" y="35" text-anchor="middle" font-size="15" font-weight="900" fill="#9f1239">
    FIGURE 8 : CHAKA ET LA FORMATION TACTIQUE DES CORNES DE BUFFLE
  </text>
  <text x="350" y="53" text-anchor="middle" font-size="11" font-weight="600" fill="#be123c">
    Révolution militaire zoulouse, sagaie d'estoc 'iklwa' et expansionnisme du Mfecane
  </text>

  <!-- Schéma tactique des Cornes de Buffle -->
  <g transform="translate(180, 75)">
    <!-- Ennemi au centre -->
    <rect x="120" y="60" width="100" height="45" rx="8" fill="#64748b" stroke="#334155" stroke-width="2"/>
    <text x="170" y="87" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff">ENNEMI</text>

    <!-- Corne Gauche (Izimpondo) -->
    <path d="M70,180 C40,120 70,60 110,65" fill="none" stroke="#e11d48" stroke-width="4" marker-end="url(#arrowZulu)"/>
    <text x="30" y="105" font-size="10" font-weight="800" fill="#e11d48">CORNE GAUCHE</text>
    <text x="30" y="118" font-size="8.5" fill="#881337">(Guerriers rapides)</text>

    <!-- Corne Droite (Izimpondo) -->
    <path d="M270,180 C300,120 270,60 230,65" fill="none" stroke="#e11d48" stroke-width="4" marker-end="url(#arrowZulu)"/>
    <text x="280" y="105" font-size="10" font-weight="800" fill="#e11d48">CORNE DROITE</text>
    <text x="280" y="118" font-size="8.5" fill="#881337">(Encercler la retraite)</text>

    <!-- Poitrine / Thorax (Isifuba) -->
    <rect x="100" y="160" width="140" height="35" rx="8" fill="#e11d48"/>
    <text x="170" y="182" text-anchor="middle" font-size="10.5" font-weight="900" fill="#ffffff">
      POITRINE / ISIFUBA (Choc frontal)
    </text>

    <!-- Reins / Réserve (Izibunu) -->
    <rect x="120" y="210" width="100" height="28" rx="6" fill="#9f1239"/>
    <text x="170" y="228" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">
      RÉSERVE (Vétérans)
    </text>
  </g>

  <!-- Encadré armement à gauche -->
  <g transform="translate(30, 80)">
    <rect x="0" y="0" width="160" height="155" rx="8" fill="#ffffff" stroke="#fda4af"/>
    <text x="80" y="20" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9f1239">INVENTIONS ARMES</text>
    <text x="8" y="42" font-size="9" font-weight="700" fill="#e11d48">• Sagaie 'Iklwa' :</text>
    <text x="12" y="55" font-size="8.5" fill="#334155">Lame large et manche</text>
    <text x="12" y="67" font-size="8.5" fill="#334155">court pour corps à corps.</text>
    <text x="8" y="87" font-size="9" font-weight="700" fill="#e11d48">• Bouclier 'Isihlangu' :</text>
    <text x="12" y="100" font-size="8.5" fill="#334155">Cuir de vache lourd pour</text>
    <text x="12" y="112" font-size="8.5" fill="#334155">crocheter l'ennemi.</text>
    <text x="8" y="132" font-size="9" font-weight="700" fill="#e11d48">• Régiments 'Impi' :</text>
    <text x="12" y="145" font-size="8.5" fill="#334155">Casernes par classes d'âge.</text>
  </g>

  <!-- Encadré conséquences à droite -->
  <g transform="translate(510, 80)">
    <rect x="0" y="0" width="160" height="155" rx="8" fill="#ffffff" stroke="#fda4af"/>
    <text x="80" y="20" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9f1239">LE MFECANE</text>
    <text x="8" y="42" font-size="9" font-weight="700" fill="#e11d48">• Écrasement :</text>
    <text x="12" y="55" font-size="8.5" fill="#334155">Fuir ou être massacré.</text>
    <text x="8" y="75" font-size="9" font-weight="700" fill="#e11d48">• Nouveaux royaumes :</text>
    <text x="12" y="88" font-size="8.5" fill="#334155">Lesotho (Moshoeshoe),</text>
    <text x="12" y="100" font-size="8.5" fill="#334155">Empire Gaza (Mozambique).</text>
    <text x="8" y="120" font-size="9" font-weight="700" fill="#e11d48">• Mort de Chaka :</text>
    <text x="12" y="133" font-size="8.5" fill="#334155">Assassiné en 1828 par</text>
    <text x="12" y="145" font-size="8.5" fill="#334155">ses demi-frères (Dingane).</text>
  </g>

  <!-- Bilan bas -->
  <rect x="30" y="255" width="640" height="65" rx="8" fill="#9f1239"/>
  <text x="350" y="278" text-anchor="middle" font-size="11" font-weight="800" fill="#fecdd3">
    BOULEVERSEMENT GÉOPOLITIQUE DE L'AFRIQUE AUSTRALE
  </text>
  <text x="350" y="295" text-anchor="middle" font-size="10" fill="#ffffff">
    Le Mfecane transforme l'Afrique australe en une zone de militarisation intensive capable de résister aux invasions européennes
  </text>
  <text x="350" y="309" text-anchor="middle" font-size="9.5" fill="#fda4af">
    (notamment la défaite britannique historique face aux Zoulous à Isandlwana en 1879).
  </text>
</svg>`;

export const SVG_HIST4_MADAGASCAR_MERINA = `<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-80">
  <rect x="10" y="10" width="680" height="320" rx="16" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>

  <text x="350" y="35" text-anchor="middle" font-size="15" font-weight="900" fill="#0f172a">
    FIGURE 9 : MADAGASCAR &amp; LE ROYAUME MERINA AU XIXe SIÈCLE
  </text>
  <text x="350" y="53" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">
    De l'unification des hautes terres à la modernisation et à la résistance nationaliste
  </text>

  <!-- 3 Rois/Reines clés -->
  <g transform="translate(40, 75)">
    <rect x="0" y="0" width="190" height="175" rx="10" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#0284c7"/>
    <text x="95" y="18" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">ANDRIANAMPOINIMERINA</text>
    <text x="95" y="44" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0284c7">(1787 - 1810)</text>
    <text x="12" y="65" font-size="9" font-weight="700" fill="#0369a1">• L'Unificateur :</text>
    <text x="18" y="78" font-size="8.5" fill="#334155">Rassemble les clans de l'Imerina</text>
    <text x="18" y="90" font-size="8.5" fill="#334155">sur les hautes terres centrales.</text>
    <text x="12" y="108" font-size="9" font-weight="700" fill="#0369a1">• La Riziculture :</text>
    <text x="18" y="121" font-size="8.5" fill="#334155">Aménagement des digues et</text>
    <text x="18" y="133" font-size="8.5" fill="#334155">canaux dans la plaine du Betsimitatatra.</text>
    <text x="12" y="150" font-size="9" font-weight="700" fill="#0369a1">• Devise célèbre :</text>
    <text x="18" y="163" font-size="8" font-style="italic" fill="#0f172a">« La mer est la limite de ma rizière »</text>
  </g>

  <g transform="translate(255, 75)">
    <rect x="0" y="0" width="190" height="175" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#059669"/>
    <text x="95" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffffff">RADAMA Ier</text>
    <text x="95" y="44" text-anchor="middle" font-size="9.5" font-weight="700" fill="#059669">(1810 - 1828)</text>
    <text x="12" y="65" font-size="9" font-weight="700" fill="#047857">• Ouverture occidentale :</text>
    <text x="18" y="78" font-size="8.5" fill="#334155">Alliance avec la Grande-Bretagne.</text>
    <text x="12" y="96" font-size="9" font-weight="700" fill="#047857">• Abolition de la traite :</text>
    <text x="18" y="109" font-size="8.5" fill="#334155">Reçoit en échange armes &amp; officiers.</text>
    <text x="12" y="127" font-size="9" font-weight="700" fill="#047857">• Éducation &amp; Écrit :</text>
    <text x="18" y="140" font-size="8.5" fill="#334155">Alphabet latin pour le malgache,</text>
    <text x="18" y="152" font-size="8.5" fill="#334155">écoles London Missionary Society.</text>
    <text x="18" y="165" font-size="8.5" font-weight="700" fill="#047857">Titre de « Roi de Madagascar ».</text>
  </g>

  <g transform="translate(470, 75)">
    <rect x="0" y="0" width="190" height="175" rx="10" fill="#ffffff" stroke="#f43f5e" stroke-width="1.5"/>
    <rect x="0" y="0" width="190" height="28" rx="10" fill="#e11d48"/>
    <text x="95" y="18" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">RANAVALONA Ière</text>
    <text x="95" y="44" text-anchor="middle" font-size="9.5" font-weight="700" fill="#e11d48">(1828 - 1861)</text>
    <text x="12" y="65" font-size="9" font-weight="700" fill="#be123c">• Repli nationaliste :</text>
    <text x="18" y="78" font-size="8.5" fill="#334155">Expulsion des missionnaires chrétiens,</text>
    <text x="18" y="90" font-size="8.5" fill="#334155">protection des coutumes ancestrales.</text>
    <text x="12" y="108" font-size="9" font-weight="700" fill="#be123c">• Industrie de guerre locale :</text>
    <text x="18" y="121" font-size="8.5" fill="#334155">Usines d'armement de Mantasoa</text>
    <text x="18" y="133" font-size="8.5" fill="#334155">fondées avec Jean Laborde.</text>
    <text x="12" y="150" font-size="9" font-weight="700" fill="#be123c">• Souveraineté préservée :</text>
    <text x="18" y="163" font-size="8.5" fill="#be123c">Retarde l'annexion coloniale française.</text>
  </g>

  <!-- Bilan bas -->
  <g transform="translate(40, 265)">
    <rect x="0" y="0" width="620" height="42" rx="8" fill="#0f172a"/>
    <text x="310" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#38bdf8">
      UN ÉTAT MODERNE ET CENTRALISÉ AU CŒUR DE L'OCÉAN INDIEN
    </text>
    <text x="310" y="32" text-anchor="middle" font-size="9.5" fill="#f1f5f9">
      Madagascar a su conjuguer diplomatie internationale, armée professionnelle et défense intransigeante de son identité.
    </text>
  </g>
</svg>`;
