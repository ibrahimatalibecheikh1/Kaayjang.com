import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 4 (LEÇONS 11 À 15)
// L'Afrique, la CEDEAO et le Sénégal : Économie, Aménagement et Développement
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_11_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-11',
  number: 'LEÇON 11',
  title: 'L’AFRIQUE DANS LA MONDIALISATION : UN CONTINENT CONVOITÉ AUX MARGES DE L’ÉCONOMIE GLOBALE',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Troisième Partie • Les espaces en développement, l’Afrique et le Sénégal (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Analyse géographique de la place de l'Afrique dans le système-monde : paradoxe d'un continent immensément riche en ressources stratégiques (pétrole, gaz, cobalt, coltan, bauxite, or, terres arables) mais marginalisé dans le commerce planétaire (moins de 3 % des échanges mondiaux), insertion économique asymétrique héritée de la colonisation (économie de rente extractive), formidable dividende démographique potentiel (1,4 milliard d'habitants, jeunesse exceptionnelle), explosion urbaine et convoitises géopolitiques exacerbées entre puissances traditionnelles occidentales et nouveaux acteurs du Sud (Chine, Russie, Turquie, pays du Golfe).",
  image: {
    caption: 'Figure 11.1 : L’Afrique dans la mondialisation : Richesses convoitées et défis de transformation',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="afrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#afrGrad)" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#78350f" text-anchor="middle">L'AFRIQUE DANS LE SYSTÈME-MONDE : ENTRE RESSOURCES STRATÉGIQUES ET CONVOITISES</text>
      
      <!-- Colonne 1 : Le Trésor des Ressources -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">1. RESSOURCES DU CONTINENT</text>
      <text x="35" y="102" font-size="10" fill="#374151">• 30% des réserves minérales mondiales :</text>
      <text x="45" y="118" font-size="9" fill="#047857">Cobalt (70% RDC), Coltan, Bauxite (Guinée)</text>
      <text x="35" y="136" font-size="10" fill="#374151">• Hydrocarbures : Algérie, Nigeria, Angola, Sénégal</text>
      <text x="35" y="154" font-size="10" fill="#374151">• 60% des terres arables non cultivées</text>
      <text x="35" y="172" font-size="10" fill="#374151">• 1,4 milliard d'habitants (médiane : 19 ans)</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#b45309">Potentiel de croissance immense</text>
      
      <!-- Colonne 2 : Marginalité dans le Commerce -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">2. MARGINALITÉ &amp; RENTE</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Moins de 3% du commerce planétaire</text>
      <text x="285" y="120" font-size="10" fill="#374151">• Échange inégal : exportations brutes de minerais et pétrole sans transformation locale</text>
      <text x="285" y="146" font-size="10" fill="#374151">• Importation de produits finis et alimentaires</text>
      <text x="285" y="164" font-size="10" fill="#374151">• Faible commerce intra-africain (&lt; 16%)</text>
      <text x="285" y="186" font-size="10" font-weight="bold" fill="#dc2626">Fuite illicite des capitaux : &gt; 80 Mds $/an</text>
      
      <!-- Colonne 3 : Les Nouvelles Convoitises -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">3. RIVALITÉS GÉOPOLITIQUES</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Chine : 1er partenaire commercial bilatéral</text>
      <text x="540" y="120" font-size="10" fill="#374151">• Russie : sécurité, armement et diplomatie</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Turquie &amp; Pays du Golfe : investissements</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Recul de l'influence française et occidentale</text>
      <text x="540" y="180" font-size="10" font-weight="bold" fill="#059669">L'espoir : ZLECAf &amp; Union Africaine</text>
      <text x="540" y="196" font-size="9" fill="#047857">Industrialisation locale et marché unique</text>
    </svg>`
  },
  introduction: "Longtemps qualifiée à tort de 'continent à la dérive' ou de marge passive de l'économie planétaire, l'Afrique est aujourd'hui au cœur des recompositions géopolitiques mondiales. Riche d'une superficie de plus de 30 millions de km² et d'une population jeune et dynamique de plus de 1,4 milliard d'âmes appelée à doubler d'ici 2050, le continent regorge de richesses minérales, énergétiques et agricoles cruciales pour la transition écologique et technologique globale (lithium, cobalt, coltan, bauxite). Néanmoins, son insertion dans les circuits de la mondialisation demeure lourdement marquée par des asymétries structurelles : spécialisation primaire non transformée, déficit d'infrastructures énergétiques et de transport, et dépendance aux financements extérieurs. Face à ce constat, l'éveil citoyen, la diversification des partenariats et la Zone de Libre-Échange Continentale Africaine (ZLECAf) ouvrent la voie à une nouvelle souveraineté économique.",
  sections: [
    {
      title: "I. Les atouts fondamentaux de l'Afrique : géologie, démographie et terres arables",
      content: [
        "1. Un scandale géologique et minier planétaire :",
        "   - Le continent abrite près de 30 % des réserves minérales mondiales identifiées :",
        "     * Plus de 70 % du cobalt mondial (RDC, indispensable aux batteries des voitures électriques et smartphones).",
        "     * Leader mondial du coltan (RDC), du platine et du chrome (Afrique du Sud), de la bauxite (Guinée, première réserve mondiale avec plus du quart des réserves globales), du manganèse (Gabon) et des phosphates (Maroc et Sénégal).",
        "   - Hydrocarbures majeurs : pétrole et gaz naturel en Algérie, Libye, Nigeria, Angola, Égypte, et les nouveaux géants côtiers émergents comme le Sénégal et la Mauritanie (champs de Sangomar et Grand Tortue Ahmeyim).",
        "2. Le dividende démographique et la jeunesse africaine :",
        "   - Le continent le plus jeune de la terre : âge médian de 19 ans (contre plus de 42 ans en Europe et au Japon).",
        "   - Plus de 60 % de la population a moins de 25 ans, constituant un immense vivier de main-d'œuvre, un puissant moteur d'innovation numérique (M-Pesa, fintechs florissantes) et un marché de consommateurs en expansion fulgurante.",
        "3. Le potentiel agricole et le capital écologique :",
        "   - L'Afrique concentre environ 60 % des terres arables non cultivées de la planète, représentant l'ultime frontière pour la sécurité alimentaire mondiale.",
        "   - Le deuxième poumon écologique de la Terre : le bassin forestier du Congo, premier puits de carbone vert et bleu de la planète absorbant plus de carbone que l'Amazonie."
      ]
    },
    {
      title: "II. Une insertion asymétrique et les limites structurelles",
      content: [
        "1. La marginalisation commerciale persistante :",
        "   - L'Afrique ne représente qu'environ 2,5 à 3 % du commerce international de marchandises.",
        "   - La malédiction des rentes primaires : l'économie de rente extractive héritée du pacte colonial contraint la majorité des États à exporter des matières premières brutes à faible valeur ajoutée (pétrole brut, cacao, café, minerais non raffinés) et à réimporter à prix d'or des produits manufacturés, du carburant raffiné et des denrées alimentaires de base (blé, riz).",
        "2. Le déficit criant d'infrastructures et l'enclavement :",
        "   - Plus de 600 millions d'Africains n'ont toujours pas accès à l'électricité.",
        "   - Déficit chronique de réseaux ferroviaires et routiers interconnectés : les réseaux hérités de la colonisation reliaient les mines aux ports d'exportation vers l'Europe sans jamais interconnecter les capitales africaines entre elles.",
        "3. La faiblesse dramatique du commerce intra-africain :",
        "   - Les échanges entre pays africains ne représentent que 15 à 16 % de leur commerce total (contre plus de 65 % en Europe et 50 % en Asie), freinés par des tracasseries douanières, des barrières non tarifaires et l'absence de monnaies communes convertibles.",
        "4. L'évasion fiscale et la fuite illicite des capitaux :",
        "   - L'Afrique perd plus de 88 milliards de dollars par an en flux financiers illicites (fraude fiscale des multinationales, fausse facturation commerciale, corruption), soit beaucoup plus que le montant annuel cumulé de toute l'Aide Publique au Développement (APD) reçue."
      ]
    },
    {
      title: "III. La ruée vers l'Afrique : le nouvel échiquier géopolitique",
      content: [
        "1. L'ancrage dominant de la Chine :",
        "   - Devenue depuis 2009 le premier partenaire commercial bilatéral de l'Afrique devant les États-Unis et les anciennes métropoles coloniales.",
        "   - Financement d'infrastructures lourdes (ports, lignes TGV à voie standard au Kenya, lignes électriques, sièges d'institutions comme celui de l'Union Africaine à Addis-Abeba).",
        "2. Le recul de l'Occident et l'irruption de nouveaux acteurs :",
        "   - Perte d'influence militaire et économique de la France et des puissances occidentales au Sahel et en Afrique de l'Ouest.",
        "   - Montée en puissance de la Russie (coopération sécuritaire, armement, céréales et engrais), de la Turquie (diplomatie active des compagnies aériennes Turkish Airlines et entreprises de BTP), de l'Inde et des Émirats Arabes Unis (gestion de terminaux portuaires par DP World à Dakar et dans la Corne de l'Afrique)."
      ]
    },
    {
      title: "IV. Les leviers de la renaissance africaine : ZLECAf et industrialisation",
      content: [
        "1. La ZLECAf, moteur d'émancipation continentale :",
        "   - Signée à Kigali en 2018 et opérationnelle depuis 2021, la Zone de Libre-Échange Continentale Africaine regroupe 54 pays signataires.",
        "   - Objectif : supprimer progressivement 90 % des droits de douane pour stimuler la transformation locale des matières premières, créer des chaînes de valeur régionales (ex. production de batteries électriques associant la RDC, la Zambie et le Maroc) et accélérer la prospérité partagée.",
        "2. L'intégration des énergies renouvelables et le numérique :",
        "   - Essor des parcs solaires et éoliens, hydrogène vert en Mauritanie et au Maroc, et utilisation pionnière du paiement mobile (Mobile Money) favorisant l'inclusion financière des populations non bancarisées."
      ]
    }
  ]
};

export const LESSON_12_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-12',
  number: 'LEÇON 12',
  title: 'L’INTÉGRATION RÉGIONALE EN AFRIQUE DE L’OUEST : LA CEDEAO ET L’UEMOA',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Troisième Partie • Les espaces en développement, l’Afrique et le Sénégal (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Étude géographique et institutionnelle des deux organisations d'intégration en Afrique de l'Ouest : la Communauté Économique des États de l'Afrique de l'Ouest (CEDEAO fondée par le traité de Lagos en 1975) et l'Union Économique et Monétaire Ouest-Africaine (UEMOA créée à Dakar en 1994), leurs objectifs fondamentaux (union douanière, Tarif Extérieur Commun TEC, libre circulation des personnes et des biens sans visa, projet de monnaie unique ECO), leurs réalisations concrètes (infrastructures routières, passeport biométrique CEDEAO) et les graves crises contemporaines : fractures monétaires, coups d'État militaires, création de l'Alliance des États du Sahel (AES) et menaces de désintégration.",
  image: {
    caption: 'Figure 12.1 : L’espace ouest-africain : CEDEAO, UEMOA et les flux d’intégration',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="cedeaoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#cedeaoGrad)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">L'INTÉGRATION OUEST-AFRICAINE : LA CEDEAO ET L'UEMOA FACE AUX DÉFIS GÉOPOLITIQUES</text>
      
      <!-- Colonne 1 : La CEDEAO (Lagos 1975) -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#059669" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">1. LA CEDEAO (15 ÉTATS)</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Traité de Lagos (28 mai 1975)</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Marché de plus de 400 millions d'habitants</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Poids lourd : Nigeria (&gt; 65% PIB sous-région)</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Protocole de libre circulation sans visa</text>
      <text x="35" y="174" font-size="10" fill="#374151">• Passeport biométrique unifié CEDEAO</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#1e3a8a">Projet monétaire : l'ECO unique</text>
      
      <!-- Colonne 2 : L'UEMOA (Dakar 1994) -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. L'UEMOA (8 ÉTATS)</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Traité de Dakar (10 janvier 1994)</text>
      <text x="285" y="120" font-size="10" fill="#374151">• 8 pays partageant le Franc CFA :</text>
      <text x="295" y="136" font-size="9" fill="#047857">Sénégal, Côte d'Ivoire, Mali, Burkina, Niger, Bénin, Togo, Guinée-Bissau</text>
      <text x="285" y="156" font-size="10" fill="#374151">• Banque centrale commune : BCEAO (Dakar)</text>
      <text x="285" y="174" font-size="10" fill="#374151">• Bourse Régionale des Valeurs : BRVM (Abidjan)</text>
      <text x="285" y="196" font-size="10" font-weight="bold" fill="#047857">Stabilité monétaire &amp; inflation maîtrisée</text>
      
      <!-- Colonne 3 : Crises & Tensions Géopolitiques -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">3. CRISES ET FRACTURES</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Coups d'État militaires au Sahel :</text>
      <text x="550" y="118" font-size="9" fill="#dc2626">Mali, Burkina Faso, Niger</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Sanctions économiques &amp; embargos contestés</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Création de l'AES (Alliance des États du Sahel)</text>
      <text x="540" y="174" font-size="10" fill="#374151">• Annonce de retrait de la CEDEAO (2024)</text>
      <text x="540" y="196" font-size="10" font-weight="bold" fill="#b91c1c">Menace de partition de l'espace régional</text>
    </svg>`
  },
  introduction: "L'Afrique de l'Ouest constitue historiquement un espace pionnier en matière de regroupement économique sur le continent africain. Confrontés à l'exiguïté de marchés nationaux hérités de la balkanisation coloniale, les pays ouest-africains ont compris très tôt que l'intégration régionale était la condition sine qua non de leur survie économique et de leur souveraineté. Deux organisations complémentaires et imbriquées structurent cet espace : la CEDEAO (regroupement global de 15 États lusophones, anglophones et francophones) et l'UEMOA (union monétaire resserrée de 8 pays partageant le Franc CFA et la BCEAO à Dakar). Toutefois, cet édifice intégrateur traverse aujourd'hui la plus grave crise de son histoire, déchiré par les coups d'État au Sahel, la contestation du franc CFA et la constitution de l'Alliance des États du Sahel (AES).",
  sections: [
    {
      title: "I. Les origines et missions fondamentales de la CEDEAO et de l'UEMOA",
      content: [
        "1. La CEDEAO (créée le 28 mai 1975 par le traité de Lagos) :",
        "   - Regroupe initialement 15 pays (Bénin, Burkina Faso, Cabo Verde, Côte d'Ivoire, Gambie, Ghana, Guinée, Guinée-Bissau, Liberia, Mali, Niger, Nigeria, Sénégal, Sierra Leone, Togo).",
        "   - Objectif initial : promouvoir la coopération et l'intégration dans tous les domaines d'activité économique (industrie, transports, télécommunications, énergie, agriculture, ressources naturelles, commerce, questions monétaires et financières).",
        "   - Poids économique asymétrique écrasant du Nigeria qui concentre à lui seul plus de 50 % de la population totale (220 millions d'habitants) et plus des deux tiers du PIB global de la communauté grâce à sa rente pétrolière.",
        "2. L'UEMOA (fondée à Dakar le 10 janvier 1994) :",
        "   - Créée au lendemain de la dévaluation traumatisante de 50 % du Franc CFA pour consolider la solidarité macroéconomique des pays francophones (rejoints en 1997 par la Guinée-Bissau).",
        "   - Objectifs stricts de convergence macroéconomique : respect de critères de convergence (déficit budgétaire inférieur à 3 % du PIB, taux d'endettement public plafonné à 70 % du PIB, inflation maîtrisée à moins de 3 % par an).",
        "   - Institutions communes basées à Dakar (Banque Centrale des États de l'Afrique de l'Ouest BCEAO) et à Ouagadougou (Commission de l'UEMOA), et marché financier régional (BRVM à Abidjan)."
      ]
    },
    {
      title: "II. Les réalisations concrètes de l'intégration sous-régionale",
      content: [
        "1. La libre circulation des personnes et des biens :",
        "   - Le protocole sur la libre circulation des personnes, le droit de résidence et d'établissement adopté en 1979 : suppression des visas d'entrée pour tout citoyen de la communauté muni d'une pièce d'identité valide ou du passeport biométrique CEDEAO.",
        "   - Instauration du Tarif Extérieur Commun (TEC-CEDEAO entré en vigueur en 2015) harmonisant les droits de douane aux frontières extérieures selon 5 bandes tarifaires (de 0 % pour les biens sociaux de première nécessité à 35 % pour les biens spécifiques de développement économique).",
        "2. Les infrastructures de désenclavement et l'énergie :",
        "   - Réalisation de corridors routiers régionaux reliant les ports de la côte atlantique (Dakar, Abidjan, Tema, Lomé, Cotonou) aux pays sahéliens de l'hinterland sans littoral (Mali, Burkina Faso, Niger).",
        "   - Le Système d'Échange d'Énergie Électrique Ouest-Africain (EEEOA / WAPP) interconnectant les réseaux électriques nationaux pour partager l'énergie produite (barrages de Manantali, Soubré, centrales solaires).",
        "3. Le maintien de la paix et de la démocratie :",
        "   - L'ECOMOG (force armée d'interposition de la CEDEAO) intervenue avec succès lors des guerres civiles du Liberia et de Sierra Leone, et la mission ECOMIG déployée en Gambie en 2017 pour faire respecter le verdict des urnes."
      ]
    },
    {
      title: "III. Les pesanteurs économiques et les obstacles structurels",
      content: [
        "1. La faiblesse persistance du commerce formel intra-régional :",
        "   - Malgré les traités, le commerce formel entre États membres ne dépasse pas 12 à 15 % du commerce total.",
        "   - Faible complémentarité des économies qui produisent souvent les mêmes matières premières agricoles (arachide, cacao, coton) destinées aux marchés des pays du Nord et de l'Asie.",
        "2. Les entraves non tarifaires et les tracasseries routières :",
        "   - Multiplicité des postes de contrôle policiers, douaniers et de gendarmerie le long des corridors routiers (racket, surcoûts logistiques, retards prohibitifs découragent les transporteurs sénégalais ou maliens).",
        "3. Les retards du serpent monétaire : le projet de l'ECO :",
        "   - Prévu pour remplacer à terme le Franc CFA et les monnaies nationales (Naira nigérian, Cedi ghanéen), le lancement de la monnaie unique ECO est sans cesse reporté en raison de l'incapacité de la plupart des États membres à respecter durablement les critères de convergence économique."
      ]
    },
    {
      title: "IV. Les séismes politiques récents et la menace de désintégration",
      content: [
        "1. La cascade de coups d'État militaires au Sahel (2020-2023) :",
        "   - Prise du pouvoir par des juntes militaires au Mali, au Burkina Faso et au Niger, sur fond de faillite sécuritaire face au terrorisme djihadiste et de rejet virulent de l'influence française.",
        "   - Réaction de la CEDEAO : imposition d'embargos économiques et financiers brutaux (fermeture des frontières avec le Sénégal et la Côte d'Ivoire, gel des avoirs bancaires à la BCEAO) et menaces d'intervention militaire rejetées par les populations ouest-africaines.",
        "2. La création de l'Alliance des États du Sahel (AES) et la rupture de janvier 2024 :",
        "   - Les trois pays sahéliens (Mali, Burkina Faso, Niger) ont officialisé en janvier 2024 leur retrait 'avec effet immédiat' de la CEDEAO pour fonder la Confédération de l'Alliance des États du Sahel (AES).",
        "   - Conséquences géopolitiques majeures : risque de fracture irrémédiable de l'espace sous-régional, remise en cause de la libre circulation des personnes et biens, et perte d'hinterland vital pour les ports de Dakar et d'Abidjan."
      ]
    }
  ]
};

export const LESSON_13_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-13',
  number: 'LEÇON 13',
  title: 'LE SÉNÉGAL : ATOUTS NATURELS, POSITION GÉOSTRATÉGIQUE ET DYNAMIQUE DÉMOGRAPHIQUE',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Troisième Partie • Les espaces en développement, l’Afrique et le Sénégal (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Étude géographique approfondie des bases territoriales et humaines du Sénégal : position géographique exceptionnelle de 'porte océane de l'Afrique de l'Ouest' (718 km de côtes atlantiques, pointe des Almadies), cadre physique diversifié (relief plat, climats étagés du sahélien au sud-guinéen, réseau hydrographique majeur : fleuves Sénégal, Gambie, Casamance), dynamique démographique vigoureuse (recensement RGPH-5 de 2023 comptant plus de 18 millions d'habitants, extrême jeunesse), transition urbaine rapide et littoralisation accélérée du peuplement sur l'axe Dakar-Thiès.",
  image: {
    caption: 'Figure 13.1 : Le Sénégal : Position carrefour, zones bioclimatiques et concentration démographique',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="senAtoutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#senAtoutGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">LE SÉNÉGAL : POSITION STRATÉGIQUE ATLANTIQUE, BIOCLIMATS &amp; PEUPLEMENT</text>
      
      <!-- Colonne 1 : Position Carrefour & Façade Maritime -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">1. POSITION GÉOSTRATÉGIQUE</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Avancée la plus occidentale d'Afrique</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Pointe des Almadies (17°32' Ouest)</text>
      <text x="35" y="138" font-size="10" fill="#374151">• 718 km de côtes sur l'océan Atlantique</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Carrefour maritime Europe - Amériques - Afrique</text>
      <text x="35" y="174" font-size="10" fill="#374151">• Port autonome de Dakar (PAD en eaux profondes)</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#047857">Porte d'entrée naturelle du Sahel</text>
      
      <!-- Colonne 2 : Cadre Physique & Bioclimats -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">2. MILIEU NATUREL &amp; EAU</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Superficie : 196 722 km² • Relief de plaines</text>
      <text x="285" y="120" font-size="10" fill="#374151">• Climat tropical rythmé par l'hivernage :</text>
      <text x="295" y="136" font-size="9" fill="#b45309">- Domaine sahélien (Nord : 200 à 400 mm/an)</text>
      <text x="295" y="148" font-size="9" fill="#047857">- Domaine soudanien (Centre : 500 à 900 mm/an)</text>
      <text x="295" y="160" font-size="9" fill="#065f46">- Domaine subguinéen (Sud : &gt; 1 200 mm/an)</text>
      <text x="285" y="180" font-size="10" fill="#374151">• Réseau hydrographique exceptionnel :</text>
      <text x="295" y="196" font-size="9" fill="#1e40af">Fleuves Sénégal (1 700 km), Gambie, Casamance</text>
      
      <!-- Colonne 3 : Démographie & Macroéconomie -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">3. DYNAMIQUE POPULATION</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Recensement RGPH-5 (2023) :</text>
      <text x="550" y="118" font-size="9" fill="#dc2626">18,1 millions d'habitants (croissance 2,7%/an)</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Extrême jeunesse : 50% ont &lt; 19 ans</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Taux d'urbanisation : &gt; 48 %</text>
      <text x="540" y="174" font-size="10" fill="#374151">• Littoralisation écrasante :</text>
      <text x="550" y="190" font-size="9" fill="#dc2626">Dakar concentre 23% pop sur 0,28% du territoire</text>
    </svg>`
  },
  introduction: "Situé à la pointe la plus occidentale du continent africain, le Sénégal bénéficie d'une position géostratégique privilégiée qui en fait un carrefour maritime, aérien et diplomatique incontournable entre l'Afrique, l'Europe et les Amériques. Doté d'une superficie de 196 722 km² et d'une façade atlantique poissonneuse de plus de 700 km, le pays jouit d'une stabilité politique exceptionnelle saluée à travers le monde. Les données du 5e Recensement Général de la Population et de l'Habitat (RGPH-5 de 2023) confirment une dynamique démographique très vigoureuse, avec une population dépassant les 18 millions d'habitants caractérisée par une jeunesse éclatante. Cependant, cette vitalité humaine s'accompagne d'une littoralisation excessive et d'une urbanisation fulgurante qui posent de redoutables défis d'emploi, d'éducation et d'aménagement.",
  sections: [
    {
      title: "I. Les atouts géographiques et la position de carrefour atlantique",
      content: [
        "1. Une position géostratégique de premier plan :",
        "   - La presqu'île du Cap-Vert et la pointe des Almadies constituent le point le plus occidental du continent africain.",
        "   - Façade maritime rectiligne et sableuse au nord (Grande Côte), rocheuse autour de la presqu'île de Dakar, et découpée en estuaires et mangroves au sud (Petite Côte, Sine-Saloum, Casamance).",
        "   - Le Port Autonome de Dakar (PAD) : port naturel en eaux profondes bénéficiant d'un tirant d'eau exceptionnel, carrefour obligatoire des grandes lignes maritimes de l'Atlantique Sud et débouché naturel du Mali enclavé.",
        "2. Un relief tabulaire favorable aux communications :",
        "   - Territoire plat d'altitude moyenne inférieure à 100 mètres, constitué d'un vaste bassin sédimentaire d'âge secondaire et tertiaire recouvert de dunes de sable quarternaires (dunes rouges du Cayor).",
        "   - Rares accidents topographiques : les collines des Mamelles à Dakar (d'origine volcanique basaltique, 105 m), le plateau de Thiès (130 m) et les contreforts du massif du Fouta-Djalon au sud-est (mont Assirik culminant à 581 m dans le parc du Niokolo-Koba)."
      ]
    },
    {
      title: "II. La diversité bioclimatique et les ressources hydrologiques",
      content: [
        "1. La zonation climatique et la mousson :",
        "   - Climat tropical sahélien et soudanien alternant deux saisons contrastées : une longue saison sèche (de novembre à mai) dominée par l'alizé maritime frais sur la côte et l'harmattan chaud et sec de l'est à l'intérieur, et une courte saison des pluies (l'hivernage de juin à octobre) amenée par la mousson humide du sud-ouest.",
        "   - Gradient pluviométrique croissant du nord vers le sud :",
        "     * Domaine sahélien au nord (Saint-Louis, Podor, Matam) : 200 à 400 mm d'eau par an.",
        "     * Domaine soudanien au centre (Bassin arachidier, Kaolack, Tambacounda) : 500 à 900 mm/an.",
        "     * Domaine subguinéen au sud (Casamance, Ziguinchor, Kédougou) : 1 000 à plus de 1 500 mm/an permettant une végétation forestière dense.",
        "2. Un potentiel hydrographique remarquable :",
        "   - Le fleuve Sénégal (1 700 km de long) : aménagé par l'OMVS avec le barrage anti-sel de Diama à l'embouchure et le barrage hydroélectrique régulateur de Manantali au Mali.",
        "   - Le fleuve Gambie (1 150 km) et le fleuve Casamance (320 km) arrosant les riches terres agricoles du Sud.",
        "   - Les nappes phréatiques maestrichtiennes et quaternaires fournissant la majorité de l'eau potable des centres urbains."
      ]
    },
    {
      title: "III. La dynamique démographique : résultats du recensement de 2023",
      content: [
        "1. L'évolution quantitative et le rythme de croissance :",
        "   - Selon les résultats définitifs de l'ANSD (RGPH-5 de 2023), la population du Sénégal s'élève à 18 126 390 habitants (contre 13,5 millions en 2013 et seulement 3,1 millions à l'indépendance en 1960).",
        "   - Taux d'accroissement naturel annuel élevé de 2,7 %, résultant d'une natalité encore forte (indice synthétique de fécondité de 4,2 enfants par femme) et d'une baisse continue de la mortalité grâce aux progrès médicaux.",
        "2. Une jeunesse exceptionnelle : atout ou défi ?",
        "   - Plus de 50 % de la population a moins de 19 ans, et les moins de 35 ans représentent les trois quarts (75 %) des Sénégalais.",
        "   - Défi herculéen de la demande sociale : éducation de base, formation professionnelle, insertion sur le marché de l'emploi pour éviter le drame des migrations clandestines par pirogues vers les îles Canaries ('Barça mba Barzakh')."
      ]
    },
    {
      title: "IV. La répartition spatiale : littoralisation et urbanisation galopante",
      content: [
        "1. Une distribution géographique profondément déséquilibrée :",
        "   - Plus de 55 % de la population est concentrée sur la façade maritime ouest (sur moins de 15 % de la surface nationale).",
        "   - Densités contrastées : plus de 7 000 habitants/km² dans la région de Dakar contre moins de 25 hab/km² dans les immensités orientales de Tambacounda et Kédougou.",
        "2. L'explosion urbaine et la macrocéphalie dakaroise :",
        "   - Taux d'urbanisation national approchant les 50 % (alors qu'il n'était que de 23 % en 1960).",
        "   - L'agglomération de Dakar compte plus de 4 millions d'habitants (près du quart de la population totale du pays sur 0,28 % du territoire), asphyxiée par les embouteillages, la spéculation foncière et les inondations hivernales dans les quartiers spontanés de la banlieue (Pikine, Guédiawaye, Keur Massar).",
        "   - Essor des métropoles secondaires régionales : Touba-Mbacké (deuxième agglomération démographique du pays avec plus d'un million et demi d'habitants), Thiès, Saint-Louis, Kaolack et Ziguinchor."
      ]
    }
  ]
};

export const LESSON_14_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-14',
  number: 'LEÇON 14',
  title: 'LES SECTEURS ÉCONOMIQUES DU SÉNÉGAL : AGRICULTURE, PÊCHE, MINES, PÉTROLE ET SERVICES',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Troisième Partie • Les espaces en développement, l’Afrique et le Sénégal (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Analyse géographique et économique exhaustive de l'appareil productif sénégalais : le secteur primaire (crise et reconversion du bassin arachidier, riziculture irriguée de la vallée du fleuve, maraîchage des Niayes, élevage extensif du Ferlo et pêche maritime artisanale et industrielle confrontée à la raréfaction de la ressource), le secteur secondaire en pleine mutation (phosphates de Taïba, cimenteries, industries agroalimentaires et entrée historique dans le cercle des producteurs de pétrole et de gaz avec Sangomar et GTA), et la prédominance du secteur tertiaire (commerce informel, télécoms, secteur bancaire et tourisme balnéaire et culturel).",
  image: {
    caption: 'Figure 14.1 : Structure économique du Sénégal : Secteurs traditionnels et émergence des hydrocarbures',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="senEcoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#senEcoGrad)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">L'APPAREIL PRODUCTIF SÉNÉGALAIS : DIVERSIFICATION, RESSOURCES &amp; NOUVEAUX DÉFIS</text>
      
      <!-- Colonne 1 : Secteur Primaire (15% PIB • 50% actifs) -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">1. SECTEUR PRIMAIRE</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Agriculture vivrière et industrielle :</text>
      <text x="45" y="118" font-size="9" fill="#047857">Arachide (bassin historique), Riz (Vallée fleuve), Niayes (oignon, tomate, mangue)</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Élevage : cheptel du Ferlo et pastoralisme</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Pêche maritime : 1re source de devises</text>
      <text x="45" y="172" font-size="9" fill="#dc2626">Menacée par la surpêche &amp; navires industriels</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#b45309">Vulnérabilité aux aléas pluviométriques</text>
      
      <!-- Colonne 2 : Secteur Secondaire & Hydrocarbures -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">2. MINES &amp; PÉTROLE (RÉVOLUTION)</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Cimenteries géantes : Dangote, Sococim, Ciments Sahel</text>
      <text x="285" y="122" font-size="10" fill="#374151">• Mines : Phosphates (Taïba), Zircon, Or (Kédougou)</text>
      <text x="285" y="142" font-size="10" font-weight="bold" fill="#059669">• Tournant pétrolier et gazier (2024) :</text>
      <text x="295" y="158" font-size="9" fill="#047857">- Champ pétrolier de Sangomar (100 000 barils/j)</text>
      <text x="295" y="170" font-size="9" fill="#047857">- Champ gazier Grand Tortue Ahmeyim (GTA)</text>
      <text x="295" y="182" font-size="9" fill="#047857">- Champ de Yakaar-Teranga (gaz naturel)</text>
      <text x="285" y="202" font-size="9" font-weight="bold" fill="#1e3a8a">Stratégie Gas-to-Power &amp; industrialisation</text>
      
      <!-- Colonne 3 : Secteur Tertiaire (Services) -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3. SECTEUR TERTIAIRE (&gt; 50% PIB)</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Poids écrasant du secteur informel</text>
      <text x="540" y="120" font-size="10" fill="#374151">• Télécoms &amp; Numérique (Orange, Free, Wave)</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Secteur bancaire et microfinance</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Tourisme balnéaire et d'affaires :</text>
      <text x="550" y="172" font-size="9" fill="#4b5563">Saly Portudal, Gorée, Casamance, Saint-Louis</text>
      <text x="540" y="196" font-size="10" font-weight="bold" fill="#047857">Hub logistique aéroportuaire AIBD</text>
    </svg>`
  },
  introduction: "L'économie sénégalaise présente une structure duale typique des pays en développement, marquée par la coexistence d'un vaste secteur informel traditionnel et d'îlots de modernité technologique. Si le secteur primaire n'engendre qu'environ 15 % du Produit Intérieur Brut, il concentre près de la moitié de la population active du pays, demeurant le garant de l'équilibre social rural. Le secteur tertiaire, dominé par le commerce et les télécommunications, génère plus de la moitié de la richesse nationale. Toutefois, le Sénégal vit un tournant historique avec l'exploitation commerciale de ses gisements offshore d'or noir et de gaz naturel (Sangomar et GTA), qui promet de bouleverser la balance énergétique et d'impulser une industrialisation pérenne.",
  sections: [
    {
      title: "I. Le secteur primaire : agricultures, élevage et pêche maritime",
      content: [
        "1. L'agriculture sénégalaise et ses bassins de production :",
        "   - L'arachide (culture de rente historique) : cultivée dans le Bassin arachidier (régions de Diourbel, Kaolack, Fatick, Kaffrine). Confrontée à l'épuisement des sols, aux aléas pluviométriques et aux difficultés de la filière huilière industrielle (SONACOS) concurrencée par les exportateurs de graines vers la Chine.",
        "   - Les céréales vivrières : mil, sorgho, maïs au centre et au sud, et riziculture irriguée intensive dans la vallée du fleuve Sénégal (gérée par la SAED) visant l'autosuffisance alimentaire nationale.",
        "   - La zone maraîchère et fruitière des Niayes : bande côtière fertile de Dakar à Saint-Louis produisant l'essentiel des oignons, pommes de terre, tomates et mangues d'exportation.",
        "2. L'élevage pastoral et la filière laitière :",
        "   - Cheptel nombreux mais extensif concentré dans la zone sylvopastorale du Ferlo (zébus peuls, ovins et caprins).",
        "   - Faiblesse de la collecte laitière industrielle et forte dépendance aux importations de lait en poudre européen subventionné.",
        "3. La pêche maritime, pilier socio-économique en crise :",
        "   - Première pourvoyeuse de devises du pays et source essentielle de protéines animales pour les ménages (le plat national du 'Thiéboudienne').",
        "   - Secteur artisanal puissant employant plus de 600 000 pêcheurs (pirogues motorisées à Kayar, Guet Ndar, Soumbédioune, Mbour, Joal).",
        "   - Crise dramatique de la raréfaction des ressources halieutiques : surexploitation des fonds marins par les chalutiers géants étrangers sous accords de pêche controversés et usines de farine de poisson, privant les pêcheurs locaux de leur gagne-pain et alimentant l'émigration clandestine."
      ]
    },
    {
      title: "II. Le secteur secondaire : mines, industries et l'ère du pétrole et du gaz",
      content: [
        "1. L'industrie extractive et manufacturière :",
        "   - Exploitation des phosphates de chaux à Taïba et de fer à Kédougou, valorisés par les Industries Chimiques du Sénégal (ICS) pour fabriquer des engrais phosphoriques exportés vers l'Inde.",
        "   - Cimenteries modernes parmi les plus grandes d'Afrique de l'Ouest : Sococim (Rufisque), Ciments du Sahel (Kirène) et Dangote Cement (Pout).",
        "   - Exploitation de l'or industriel à Sabodala (Kédougou) et du zircon minéral sur la Grande Côte (GCO à Diogo).",
        "2. L'entrée historique dans l'ère pétrolière et gazière (2024) :",
        "   - Le gisement pétrolier de Sangomar (au large de Rufisque) : première extraction commerciale de brut démarrée en juin 2024, opérée par Woodside Energy avec le navire géant FPSO Léopold Sédar Senghor (capacité de production de 100 000 barils par jour).",
        "   - Le mégaprojet gazier Grand Tortue Ahmeyim (GTA) : gisement transfrontalier partagé 50/50 avec la Mauritanie à 2 850 m de profondeur d'eau, produisant du GNL d'exportation via une usine flottante (FLNG).",
        "   - Le gisement de gaz naturel de Yakaar-Teranga destiné à la stratégie nationale 'Gas-to-Power' : alimenter les centrales thermiques de la Senelec pour faire baisser drastiquement le coût de l'électricité et alimenter la future industrie pétrochimique nationale."
      ]
    },
    {
      title: "III. Le secteur tertiaire : commerce, télécoms et tourisme",
      content: [
        "1. L'omniprésence du secteur informel :",
        "   - Représente plus de 40 % du PIB et près de 90 % de la création d'emplois urbains : petit commerce de détail, marchés hebdomadaires ('loumas' ruraux), marchands ambulants et transports collectifs ('cars rapides', taxis 'clando').",
        "2. Les télécommunications et la finance digitale :",
        "   - L'un des secteurs les plus dynamiques du continent : taux de pénétration de la téléphonie mobile dépassant 115 %.",
        "   - Révolution des services financiers numériques avec Orange Money et Wave, démocratisant l'accès à la finance pour des millions de citoyens sans compte bancaire formel.",
        "3. L'industrie touristique :",
        "   - Deuxième pourvoyeur de devises : tourisme balnéaire sur la Petite-Côte (Saly Portudal, Pointe Sarène), tourisme mémoriel et culturel (île historique de Gorée classée par l'UNESCO, Saint-Louis coloniale), écotourisme en Casamance et ornithologie dans le parc du Djoudj."
      ]
    }
  ]
};

export const LESSON_15_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-15',
  number: 'LEÇON 15',
  title: 'DISPARITÉS RÉGIONALES ET AMÉNAGEMENT DU TERRITOIRE AU SÉNÉGAL',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Troisième Partie • Les espaces en développement, l’Afrique et le Sénégal (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Analyse géographique des déséquilibres spatiaux majeurs du Sénégal : la macrocéphalie dakaroise étouffante face au dénuement et à l'enclavement des régions périphériques de l'intérieur (le Sénégal oriental, le Ferlo sahélien et la Casamance enclavée par l'enclave gambienne), les politiques publiques de rééquilibrage territorial (de l'aménagement du territoire historique à l'Acte III de la décentralisation), les programmes de rattrapage (PUDC, PUMA, PACASEN) et les grands chantiers structurants contemporains : pôle urbain de Diamniadio, TER, BRT, réseau autoroutier et futur port en eaux profondes de Ndayane.",
  image: {
    caption: 'Figure 15.1 : Les disparités régionales et les axes de l’aménagement du territoire au Sénégal',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="senAmenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#senAmenGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">AMÉNAGEMENT DU TERRITOIRE SÉNÉGALAIS : MACROCÉPHALIE DAKAROISE &amp; PÔLES D'ÉQUILIBRE</text>
      
      <!-- Colonne 1 : La Macrocéphalie Dakaroise -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">1. LA MACROCÉPHALIE DAKAR</text>
      <text x="35" y="102" font-size="10" fill="#374151">• 0,28% du territoire national</text>
      <text x="35" y="120" font-size="10" fill="#374151">• 23% de la population totale (4M hab)</text>
      <text x="35" y="138" font-size="10" fill="#374151">• &gt; 80% des entreprises et des industries</text>
      <text x="35" y="156" font-size="10" fill="#374151">• &gt; 85% des transactions bancaires</text>
      <text x="35" y="174" font-size="10" fill="#374151">• Saturation : pollution, foncier inabordable, embouteillages quotidiens chroniques</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#dc2626">Concentration excessive des pouvoirs</text>
      
      <!-- Colonne 2 : Périphéries Enclavées -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">2. LES PÉRIPHÉRIES DÉLAISSÉES</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Le Sénégal Oriental (Tamba, Kédougou) :</text>
      <text x="295" y="118" font-size="9" fill="#b45309">Isolé, faible réseau routier, pauvreté</text>
      <text x="285" y="136" font-size="10" fill="#374151">• La Casamance au sud :</text>
      <text x="295" y="152" font-size="9" fill="#047857">Séparée par la Gambie, conflit armé MFDC historique, désenclavement pont Farafenni</text>
      <text x="285" y="172" font-size="10" fill="#374151">• Le Ferlo pastoral :</text>
      <text x="295" y="188" font-size="9" fill="#6b7280">Désert médical, accès difficile à l'eau potable</text>
      
      <!-- Colonne 3 : Les Grands Projets d'Équilibre -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#059669" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">3. PROJETS DE RÉÉQUILIBRAGE</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Pôle urbain de Diamniadio (ministères, ONU)</text>
      <text x="540" y="120" font-size="10" fill="#374151">• TER Dakar-AIBD et BRT 100% électrique</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Autoroutes Ila Touba et Mbour-Fatick-Kaolack</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Port du futur de Ndayane (DP World)</text>
      <text x="540" y="174" font-size="10" fill="#374151">• PUDC &amp; PUMA : pistes rurales et forages</text>
      <text x="540" y="196" font-size="10" font-weight="bold" fill="#1e3a8a">Acte III de la décentralisation (territoires)</text>
    </svg>`
  },
  introduction: "L'espace géographique sénégalais est frappé par une anomalie territoriale majeure : l'hypercentralisation démographique, économique et administrative sur la presqu'île de Dakar, phénomène qualifié de macrocéphalie urbaine. Avec moins de 0,3 % de la superficie nationale, la région-capitale concentre près du quart de la population du pays, 80 % des industries et la quasi-totalité des services supérieurs, tandis que les régions de l'intérieur (Ferlo, Sénégal oriental, Casamance) souffrent d'un sous-équipement criant et de l'enclavement. Pour conjurer cette fracture territoriale intenable, les politiques d'aménagement du territoire et l'Acte III de la décentralisation déploient de gigantesques projets d'infrastructures de désenclavement et de décongestion urbaine.",
  sections: [
    {
      title: "I. La macrocéphalie dakaroise et ses effets pervers",
      content: [
        "1. Une concentration spatiale démesurée :",
        "   - La région de Dakar s'étend sur seulement 550 km² (0,28 % du Sénégal) mais abrite plus de 4 millions d'habitants (densité supérieure à 7 000 hab/km²).",
        "   - Elle concentre plus de 80 % des entreprises formelles, 85 % des emplois modernes, 87 % des transactions bancaires, la totalité des ministères et institutions républicaines, et les principaux centres hospitaliers universitaires et grandes universités (UCAD).",
        "2. L'asphyxie urbaine et les coûts de la congestion :",
        "   - Configuration en cul-de-sac de la presqu'île qui entonnoirise les flux pendulaires quotidiens : embouteillages monstres coûtant plus de 100 milliards de FCFA par an à l'économie nationale.",
        "   - Flambée vertigineuse du coût du foncier et des loyers, pénurie de logements décents et prolifération de quartiers précaires inondables en banlieue (Keur Massar, Yeumbeul, Médina Gounass).",
        "   - Problèmes environnementaux aigus : pollution atmosphérique par les échappements automobiles et crise de gestion des ordures de la décharge géante de Mbeubeuss."
      ]
    },
    {
      title: "II. Le diagnostic des régions périphériques défavorisées",
      content: [
        "1. Le Sénégal Oriental (régions de Tambacounda et Kédougou) :",
        "   - Représente près de 30 % du territoire national mais moins de 7 % de la population.",
        "   - Région isolée malgré ses immenses richesses minières (or de Sabodala) et touristiques (Niokolo-Koba) : réseau routier secondaire très dégradé, rareté des structures sanitaires spécialisées et taux d'analphabétisme élevé.",
        "2. La Casamance au Sud (Ziguinchor, Sédhiou, Kolda) :",
        "   - Grenier agricole naturel du pays au potentiel rizicole, fruitier et touristique exceptionnel.",
        "   - Enclavement géographique historique causé par l'enclave territoriale de la République de Gambie, contraignant les voyageurs à contourner ou à emprunter le ferry du fleuve Gambie (soulagé récemment par l'inauguration du pont Sénégambie de Farafenni en 2019).",
        "   - Conflit armé indépendantiste déclenché en 1982 par le MFDC (Mouvement des Forces Démocratiques de Casamance), ayant ralenti le développement économique et touristique pendant quatre décennies.",
        "3. La zone sylvopastorale du Ferlo :",
        "   - Immense région sahélienne semi-aride marquée par le manque d'eau, l'insuffisance des forages pastoraux motorisés et la précarité des services sociaux de base."
      ]
    },
    {
      title: "III. Les politiques d'aménagement : de l'indépendance à l'Acte III",
      content: [
        "1. Les premières tentatives d'organisation de l'espace :",
        "   - Le Plan National d'Aménagement du Territoire (PNAT) adopté en 1997 : proposition de métropoles d'équilibre régionales pour délester Dakar (Saint-Louis, Kaolack, Tambacounda, Ziguinchor).",
        "2. L'Acte III de la décentralisation (2013) :",
        "   - Objectif constitutionnel : 'organiser le Sénégal en territoires viables, compétitifs et porteurs de développement durable'.",
        "   - Suppression des régions en tant que collectivités locales au profit de la communalisation intégrale et de l'érection des départements en collectivités territoriales autonomes.",
        "3. Les programmes d'urgence d'équité territoriale :",
        "   - Le Programme d'Urgence de Développement Communautaire (PUDC) : construction accélérée de pistes rurales de désenclavement, forages et châteaux d'eau, électrification de milliers de villages ruraux et fourniture de moulins à mil aux groupements féminins.",
        "   - Le PUMA (Programme d'Urgence de Modernisation des Axes et Territoires Frontaliers) pour sécuriser et équiper les zones frontalières isolées."
      ]
    },
    {
      title: "IV. Les grands chantiers contemporains de désengorgement et de modernisation",
      content: [
        "1. Le pôle urbain de Diamniadio et la nouvelle façade métropolitaine :",
        "   - Ville nouvelle édifiée à 35 km de Dakar sur plus de 1 600 hectares : ministères délocalisés (Sphères ministérielles), Maison des Nations Unies, parc des technologies numériques, complexe hôtelier et hôpital de pointe.",
        "2. Les infrastructures de transport de masse et de désenclavement :",
        "   - Le Train Express Régional (TER) reliant Dakar à Diamniadio en 20 minutes (et son prolongement vers l'aéroport AIBD).",
        "   - Le Bus Rapid Transit (BRT) : ligne de bus 100 % électriques sur voies réservées traversant Dakar du nord au sud (de Petersen à Guédiawaye).",
        "   - L'extension du réseau autoroutier à péage : axe Dakar-AIBD-Mbour-Thiès, l'autoroute Ila Touba (115 km) reliant la capitale religieuse et le chantier de l'autoroute Mbour-Fatick-Kaolack.",
        "3. Le port maritime du futur à Ndayane :",
        "   - Mégaprojet portuaire de plus d'un milliard de dollars développé par DP World sur la Petite Côte pour accueillir les plus grands porte-conteneurs du monde et délester définitivement le port historique de Dakar."
      ]
    }
  ]
};
