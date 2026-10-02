import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE PREMIÈRE (SÉNÉGAL) — VOLUME 4 (LEÇONS 19 À 23)
// Grandes parties I, II, III, IV, V... Figures, Schémas, Cartes & Tableaux
// Conforme au programme officiel consolidé de Géographie Première
// =========================================================================

export const LESSON_19_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-19',
  number: 'LEÇON 19',
  title: 'La dynamique urbaine et les problèmes des villes',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '28 min',
  description: 'Déficit d\'infrastructures, crise du logement et habitat spontané, congestion de la mobilité, risques environnementaux (inondations, déchets) et aménagement urbain durable (TER, BRT, Diamniadio).',
  introduction: `La dynamique urbaine désigne l'ensemble des forces démographiques, économiques, sociales et spatiales qui animent et transforment la ville au fil du temps. Si les métropoles sont d'incontestables foyers d'innovation, de brassage culturel et de création de richesses, leur croissance spectaculaire et souvent anarchique engendre des crises multidimensionnelles aiguës. Dans les pays du Sud, l'explosion de la population urbaine devance largement le rythme de construction des infrastructures publiques, provoquant des déficits chroniques en logements décents, une congestion permanente des transports, des risques environnementaux redoutables (inondations récurrentes, pollution de l'air, accumulation toxique des ordures) et une fragmentation socio-spatiale marquée. Comprendre ces dysfonctionnements est impératif pour bâtir des villes durables, résilientes et solidaires.`,
  sections: [
    {
      title: 'I. LE DÉFICIT CHRONIQUE D\'INFRASTRUCTURES ET DE SERVICES COLLECTIFS',
      content: [
        '1. La crise de l\'eau potable et de l\'assainissement : Dans de nombreuses métropoles africaines, plus d\'un tiers des citadins n\'a pas accès à un robinet d\'eau potable à domicile et dépend de bornes-fontaines payantes ou de charretiers d\'eau insalubre. L\'absence de réseau de tout-à-l\'égout pour les eaux usées favorise les maladies hydriques (choléra, diarrhées).',
        '2. Les délestages et l\'accès à l\'énergie : Réseaux électriques saturés par la climatisation et les appareils ménagers, entraînant des coupures répétées qui pénalisent artisans, commerces et ménages.',
        '3. La saturation des équipements éducatifs et sanitaires : Classes surchargées de plus de 80 élèves en banlieue et hôpitaux publics manquant cruellement de lits et de plateaux techniques modernes.'
      ]
    },
    {
      title: 'II. LA CRISE DU LOGEMENT ET LA PROLIFÉRATION DE L\'HABITAT PRÉCAIRE',
      content: [
        '1. La spéculation foncière et la flambée des loyers : Dans les centres métropolitains et les quartiers résidentiels, les prix du mètre carré ont été multipliés par dix en vingt ans, excluant les ménages modestes et les jeunes diplômés du marché du logement formel.',
        '2. L\'habitat spontané non loti et les bidonvilles (slums / favelas) :',
        '• Plus d\'un milliard d\'êtres humains vivent aujourd\'hui dans des bidonvilles à l\'échelle planétaire.',
        '• Caractéristiques : Bâti de fortune en tôle, planches ou briques de récupération, absence de titres fonciers officiels, insécurité juridique permanente face aux expulsions et déguerpissements.',
        '• Occupation des zones impropres à l\'habitat : Marécages, flancs de collines instables sujets aux glissements de terrain ou cuvettes inondables (ex: Keur Massar, Pikine, Dalifort dans la banlieue de Dakar).'
      ]
    },
    {
      title: 'III. LA SATURATION DES TRANSPORTS ET LA CRISE DE LA MOBILITÉ URBAINE',
      content: [
        '1. Les embouteillages monstres et l\'asphyxie de la circulation :',
        '• Explosion du parc automobile individuel et afflux massif de taxis clandestins ("clando").',
        '• Rapprochement vers une seule voie d\'accès centrale dans les villes péninsulaires comme Dakar (le goulet d\'étranglement de l\'entrée de la presqu\'île).',
        '2. Les coûts économiques et sanitaires de la paralysie :',
        '• Des millions d\'heures de travail perdues chaque jour dans les bouchons (estimées à plus de 100 milliards de FCFA de pertes annuelles pour l\'économie dakaroise).',
        '• Consommation excessive de carburant et émissions massives de gaz polluants et de particules fines causant des maladies respiratoires chez les enfants.',
        '3. Les transports artisanaux collectifs : Minibus vétustes ("cars rapides" et "Tata" à Dakar, "Danfo" à Lagos, "Gbaka" à Abidjan) assurant l\'essentiel des déplacements au prix d\'une indiscipline routière récurrente.'
      ]
    },
    {
      title: 'IV. LES CRISES ÉCOLOGIQUES ET RISQUES NATURELS EN MILIEU URBAIN',
      content: [
        '1. Les inondations urbaines récurrentes : L\'imperméabilisation des sols par le béton et le bitume empêche l\'infiltration naturelle des eaux de pluie. Les ruissellements d\'orage transforment les routes en torrents et submergent les quartiers situés dans d\'anciens bas-fonds marécageux.',
        '2. La crise de la gestion des déchets solides ménagers :',
        '• Des milliers de tonnes d\'ordures générées quotidiennement sans tri sélectif.',
        '• La tragédie des décharges géantes à ciel ouvert (ex: la décharge de Mbeubeuss à Malika/Keur Massar), sources de fumées toxiques permanentes, de pollution des nappes phréatiques par les lixiviats et de prolifération de vecteurs de maladies.',
        '3. Les îlots de chaleur urbains et l\'absence d\'espaces verts : Rareté des parcs arborés dans les villes du Sud, accentuant la chaleur et l\'inconfort thermique pour les populations.'
      ],
      table: {
        headers: ['Problème urbain majeur', 'Causes directes', 'Conséquences pour les citadins', 'Solutions d\'aménagement durable'],
        rows: [
          ['Inondations', 'Occupation de zones basses + bétonnage', 'Destruction de maisons, stagnation, paludisme', 'Bassins de rétention, canalisations d\'eaux pluviales (PROGEP)'],
          ['Embouteillages', 'Infrastructures insuffisantes, voitures individuelles', 'Pertes de temps, surcoût en carburant, pollution', 'Transports collectifs propres en site propre (TER, BRT)'],
          ['Déchets solides', 'Collecte défaillante, absence de recyclage', 'Décharges sauvages (Mbeubeuss), odeurs, maladies', 'Centres d\'enfouissement technique, valorisation énergétique'],
          ['Crise du logement', 'Spéculation foncière, loyers inabordables', 'Prolifération de bidonvilles et habitat précaire', 'Programmes de logements sociaux (100 000 logements)']
        ]
      }
    },
    {
      title: 'V. LES SOLUTIONS D\'AMÉNAGEMENT URBAIN DURABLE AU SÉNÉGAL',
      content: [
        'Face à ces défis critiques, l\'État du Sénégal met en œuvre des projets structurants majeurs :',
        '1. La révolution des transports collectifs de masse en site propre :',
        '• Le TER (Train Express Régional) : Ligne ferroviaire électrique moderne reliant la gare historique de Dakar à Diamniadio en 35 minutes (avec prolongement vers l\'Aéroport AIBD), transportant plus de 60 000 voyageurs par jour en toute sécurité.',
        '• Le BRT (Bus Rapid Transit) : Réseau de bus 100 % électriques articulés circulant sur des voies réservées exclusives de Guédiawaye au centre-ville de Dakar, désenclavant les quartiers les plus denses.',
        '2. La décentralisation et le polycentrisme : Le Pôle Urbain de Diamniadio :',
        '• Situé à 35 km à la sortie de la presqu\'île pour rompre avec le schéma monocentrique.',
        '• Regroupe des ministères gouvernementaux, des universités modernes (UAM), un parc industriel, des hôpitaux de pointe, des centres de données numériques et des logements écologiques.',
        '3. Les programmes d\'assainissement et de lutte contre les inondations (PROGEP) : Creusement de grands canaux d\'évacuation des eaux pluviales et aménagement de lacs de rétention artificiels à Keur Massar et Thiaroye.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ÉLABORATION D\'UN DIAGNOSTIC URBAIN',
      content: [
        'Exercice 1 : Construire les grands axes d\'un diagnostic territorial d\'une commune urbaine confrontée aux inondations.',
        'Correction : Le diagnostic doit comporter 5 étapes : 1. Diagnostic physique (topographie, cuvettes naturelles, nature perméable ou argileuse des sols, pluviométrie historique). 2. Diagnostic démographique et foncier (taux de croissance de la population, proportion d\'habitat spontané non loti, empiètement sur les zones inondables). 3. Diagnostic des infrastructures (linéaire de caniveaux existants, canaux de drainage, état d\'obstruction par les ordures ménagères). 4. Analyse des impacts sanitaires et économiques (maladies, pertes matérielles). 5. Recommandations concrètes d\'aménagement (curage régulier, bassins d\'orage, relogement des ménages des zones rouges).',
        'Exercice 2 : En quoi le BRT et le TER modifient-ils en profondeur la mobilité quotidienne des banlieusards dakarois ?',
        'Correction : En circulant sur des sites propres réservés totalement indépendants des embouteillages de la circulation générale, le TER et le BRT garantissent des temps de trajet prévisibles et considérablement réduits (passant de 2 à 3 heures d\'attente et de bouchons à seulement 30 à 40 minutes). De plus, leur motorisation électrique réduit drastiquement les émissions de gaz à effet de serre et de particules toxiques.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma systémique : Les défis urbains et les réponses d\'aménagement durable',
    root: 'DÉFIS & SOLUTIONS URBAINES',
    branches: [
      {
        name: 'DYSFONCTIONNEMENTS AIGUS',
        subtitle: 'Crises de la ville non planifiée',
        items: [
          'Inondations destructrices dans les bas-fonds (Keur Massar)',
          'Embouteillages monstres paralysant l\'activité économique',
          'Pollution atmosphérique et décharge de Mbeubeuss',
          'Crise du logement, cherté des loyers et bidonvilles'
        ]
      },
      {
        name: 'RÉPONSES STRUCTURANTES (SÉNÉGAL)',
        subtitle: 'Infrastructures modernes de pointe',
        items: [
          'TER électrique reliant Dakar à Diamniadio et AIBD',
          'BRT 100 % électrique sur voies dédiées exclusives',
          'Canaux de drainage d\'eaux pluviales et bassins (PROGEP)',
          'Programme national de construction de logements sociaux'
        ]
      },
      {
        name: 'VISION POLYCENTRIQUE D\'AVENIR',
        subtitle: 'Désengorgement métropolitain',
        items: [
          'Pôle urbain moderne de Diamniadio (ministères, UAM)',
          'Zones d\'activités industrielles et technologiques hors du centre',
          'Rééquilibrage territorial vers les villes secondaires',
          'Objectif : ville verte, inclusive et résiliente'
        ]
      }
    ]
  },
  conclusion: `La dynamique urbaine met à l'épreuve la capacité d'anticipation des États et des municipalités. Si les métropoles africaines concentrent d'immenses défis environnementaux et sociaux, elles portent également en elles les solutions d'avenir. Le déploiement de transports de masse modernes (TER, BRT) et la création de pôles secondaires polycentriques comme Diamniadio tracent la voie d'un urbanisme durable respectueux de la qualité de vie des citoyens.`
};

export const LESSON_20_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-20',
  number: 'LEÇON 20',
  title: 'Les moyens de communication : transports et télécommunications',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Réseaux de transport (maritime, aérien, ferroviaire, routier), révolution de la conteneurisation, télécommunications et câbles sous-marins, concepts de nœud et d’enclavement, et hub logistique sénégalais.',
  introduction: `Les moyens de communication constituent le système circulatoire de l'espace géographique et le support matériel indispensable de la mondialisation. Ils regroupent les infrastructures de transport permettant le déplacement physique des personnes et des marchandises, et les réseaux de télécommunications assurant la transmission immatérielle quasi instantanée des informations, des ordres financiers et des savoirs. L'histoire du développement territorial est indissociable de la contraction continue de l'espace-temps permise par les innovations techniques : la conteneurisation maritime a standardisé le commerce planétaire, l'aviation a relié les continents en quelques heures, et l'Internet par câbles sous-marins à fibre optique a synchronisé l'économie mondiale. Analyser les réseaux, leurs nœuds et leurs axes permet de saisir comment l'accessibilité forge la puissance économique et comment l'enclavement perpétue le sous-développement.`,
  sections: [
    {
      title: 'I. LES DIFFÉRENTS MODES DE TRANSPORT ET LA RÉVOLUTION DE L\'INTERMODALITÉ',
      content: [
        '1. Le transport maritime : Géant incontesté du commerce mondial :',
        '• Assure plus de 80 à 90 % du volume total des échanges internationaux de marchandises.',
        '• Atouts : Coût de transport par tonne-kilomètre imbattable et capacité d\'emport gigantesque des navires modernes (porte-conteneurs géants dépassant 24 000 EVP, vraquiers pétroliers et minéraliers de 300 000 tonnes).',
        '• La révolution de la conteneurisation (inventée par Malcolm McLean en 1956) : Boîte métallique standardisée (20 ou 40 pieds) transférable sans rupture de charge entre le navire, le train et le camion.',
        '2. Le transport aérien : Vitesse et valeur ajoutée :',
        '• Véhicule moins de 1 % du volume de fret mondial mais plus de 30 % de la valeur marchande (produits pharmaceutiques, composants électroniques, fleurs, or).',
        '• Indispensable pour la mobilité des voyageurs d\'affaires et le tourisme international.',
        '3. Le transport ferroviaire : Efficacité continentale pour les pondéreux et trains à grande vitesse (TGV).',
        '4. Le transport routier : Indispensable pour la desserte fine de porte-à-porte, mais consommateur d\'énergie et générateur de gaz à effet de serre.',
        '5. L\'intermodalité et les plateformes logistiques : Combinaison optimale de plusieurs modes de transport au sein d\'un même corridor logistique (hubs multimodaux).'
      ],
      table: {
        headers: ['Mode de transport', 'Avantages majeurs', 'Inconvénients / Limites', 'Marchandises types'],
        rows: [
          ['Maritime', 'Capacité colossale, coût unitaire très faible', 'Lenteur relative, dépendance aux façades côtières', 'Hydrocarbures, céréales, minerais, produits manufacturés'],
          ['Aérien', 'Vitesse extrême, franchissement de tout relief', 'Coût élevé, pollution carbone, volume limité', 'Fret précieux, produits périssables, passagers'],
          ['Ferroviaire', 'Transport lourd terrestre économique, ponctualité', 'Rigidité des rails, investissement initial lourd', 'Conteneurs terrestres, pondéreux (phosphates, ciment)'],
          ['Routier', 'Souplesse totale, desserte de porte-à-porte', 'Congestion, accidents, pollution, coût sur longue distance', 'Distribution finale, alimentation quotidienne, colis']
        ]
      }
    },
    {
      title: 'II. LES TÉLÉCOMMUNICATIONS ET LA RÉVOLUTION NUMÉRIQUE',
      content: [
        '1. La dématérialisation des flux : Circulation instantanée de données numériques, de transactions boursières, de vidéos et de communications orales.',
        '2. L\'infrastructure matérielle sous-jacente du cyberespace :',
        '• Contrairement au mythe d\'un Internet purement virtuel et aérien, plus de 98 % des communications intercontinentales transitent par un réseau sous-marin de plus de 1,3 million de kilomètres de câbles à fibre optique posés au fond des océans.',
        '• Les constellations de satellites en orbite basse (Starlink) et les stations terriennes.',
        '• Les Data Centers (centres de serveurs informatiques géants) hyper-consommateurs d\'énergie électrique et d\'eau de refroidissement.',
        '3. La fracture numérique (Digital divide) : Disparités criantes d\'accès au très haut débit entre les métropoles connectées et les zones rurales isolées d\'Afrique.'
      ]
    },
    {
      title: 'III. CONCEPTS FONDAMENTAUX DE LA GÉOGRAPHIE DES RÉSEAUX',
      content: [
        '1. Le réseau : Ensemble de lignes (arcs/axes) et de points d\'interconnexion (nœuds) reliant des territoires.',
        '2. Le nœud : Point de convergence de plusieurs voies de communication où s\'effectuent les correspondances, le transbordement et le tri des marchandises (ports maritimes, aéroports internationaux, gares ferroviaires centrales).',
        '3. L\'axe de transport (ou corridor) : Faisceau continu d\'infrastructures parallèles (autoroute, voie ferrée, oléoduc) reliant des pôles majeurs d\'activité.',
        '4. L\'accessibilité et l\'enclavement :',
        '• L\'accessibilité mesure la facilité (en temps, coût et distance) avec laquelle un territoire peut être atteint depuis l\'extérieur.',
        '• L\'enclavement désigne l\'isolement physique ou tarifaire d\'un espace dépourvu de voies de communication modernes. L\'absence d\'accès direct à la mer constitue un lourd handicap pour les pays de l\'hinterland ouest-africain (Mali, Burkina Faso, Niger).'
      ]
    },
    {
      title: 'IV. LES POINTS DE PASSAGE STRATÉGIQUES DU COMMERCE MARITIME MONDIAL',
      content: [
        'Le commerce maritime mondial est contraint par des détroits et canaux artificiels étroits ("choke points") d\'une importance géopolitique capitale :',
        '1. Le Canal de Suez (Égypte) : Relie la Méditerranée à la Mer Rouge, évitant le contournement de tout le continent africain par le Cap de Bonne-Espérance.',
        '2. Le Canal de Panama : Relie l\'océan Atlantique et l\'océan Pacifique.',
        '3. Le Détroit de Malacca (entre l\'Indonésie et la Malaisie) : Plus de 80 000 navires par an alimentant les usines d\'Asie orientale.',
        '4. Le Détroit d\'Ormuz : Verrou stratégique pétrolier du Golfe persique.',
        '5. Le Détroit de Gibraltar et le Détroit du Pas-de-Calais.'
      ]
    },
    {
      title: 'V. LES INFRASTRUCTURES DE COMMUNICATION AU SÉNÉGAL',
      content: [
        'Situé à la pointe la plus occidentale du continent africain, le Sénégal valorise sa position de hub régional :',
        '1. Le Port Autonome de Dakar (PAD) :',
        '• Port naturel en eau profonde exceptionnel, premier débouché maritime du Mali enclavé (port de transit pour des millions de tonnes de fret malien).',
        '• Terminal à conteneurs moderne concédé à DP World et futur Port en eau profonde de Ndayane pour accueillir les porte-conteneurs géants de dernière génération.',
        '2. L\'Aéroport International Blaise Diagne (AIBD) de Diass : Hub aéroportuaire moderne remplaçant l\'ancien aéroport Léopold Sédar Senghor.',
        '3. Le réseau autoroutier et le chemin de fer : Autoroutes à péage Dakar-Diamniadio-AIBD-Thiès-Touba ("Ila Touba") et relance du train de fret Dakar-Bamako.',
        '4. Le carrefour numérique des câbles sous-marins : Dakar est le point d\'atterrissement de plusieurs câbles sous-marins à fibre optique transatlantiques majeurs (SAT-3, ACE, MainOne).'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ANALYSE DE RÉSEAUX',
      content: [
        'Exercice 1 : Définir avec précision : rupture de charge, intermodalité, EVP et hub logistique.',
        'Correction : Rupture de charge : étape lors d\'un transport au cours de laquelle la marchandise change de moyen de transport (ex: transbordement d\'un conteneur d\'un navire sur un wagon de train), générant des coûts et des délais. Intermodalité : utilisation successive de plusieurs modes de transport intégrés dans une même chaîne logistique sans manipulation directe de la marchandise elle-même grâce au conteneur standardisé. EVP : Équivalent Vingt Pieds, unité de mesure normalisée internationale de volume des conteneurs maritimes. Hub logistique : plate-forme aéroportuaire ou portuaire centrale assurant la redistribution de flux massifs de passagers ou de marchandises vers des destinations secondaires (système "Hub and Spoke").',
        'Exercice 2 : Pourquoi le Port de Dakar est-il vital pour l\'économie du Mali ?',
        'Correction : Le Mali est un pays de l\'intérieur enclavé sans aucun débouché maritime direct. Le Port Autonome de Dakar est son accès océanique le plus proche géographiquement. Près de 60 à 70 % des importations et exportations maritimes du Mali (coton, carburant, véhicules, céréales, matériel industriel) transitent obligatoirement par les quais de Dakar avant d\'être acheminées par le corridor routier et ferroviaire Dakar-Bamako.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Le fonctionnement d\'un hub logistique multimodal',
    root: 'LE SYSTÈME DES COMMUNICATIONS',
    branches: [
      {
        name: 'FLUX MARITIMES (80 % MONDE)',
        subtitle: 'Conteneurisation standardisée',
        items: [
          'Porte-conteneurs géants reliant les continents',
          'Passage par les verrous géopolitiques (Suez, Panama, Malacca)',
          'Port Autonome de Dakar : porte océanique de l\'Afrique de l\'Ouest',
          'Projet du Port géant de Ndayane pour l\'avenir'
        ]
      },
      {
        name: 'CORRIDORS TERRESTRES',
        subtitle: 'Désenclavement & Continuité',
        items: [
          'Liaison ferroviaire et autoroutière rapide (Ila Touba)',
          'Corridor stratégique d\'intégration Dakar-Bamako',
          'Plateformes logistiques et ports secs intérieurs',
          'Réduction des ruptures de charge et des formalités'
        ]
      },
      {
        name: 'CYBERESPACE & FIBRE OPTIQUE',
        subtitle: 'Télécommunications instantanées',
        items: [
          'Réseau mondial de câbles sous-marins sous les océans (ACE)',
          'Dakar : station d\'atterrissement transatlantique majeure',
          'Internet mobile 4G/5G et banques digitales',
          'Réduction de la fracture numérique territoriale'
        ]
      }
    ]
  },
  conclusion: `Les moyens de communication sont les artères vivantes des territoires. En abolissant les distances et en connectant les hommes, ils commandent la prospérité économique. Pour le Sénégal, consolider son statut de hub logistique, maritime, aérien et numérique de premier rang constitue l'atout maître pour attirer les investissements et réussir son émergence économique.`
};

export const LESSON_21_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-21',
  number: 'LEÇON 21',
  title: 'Les techniques d’échanges : troc et monnaie, bourse de valeurs',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Évolution historique des échanges, du troc aux monnaies métalliques et papier, les 3 fonctions de la monnaie, bourses de valeurs mobilières et intégration monétaire UEMOA (BCEAO, Franc CFA, BRVM).',
  introduction: `L'échange est au cœur de l'activité économique et de la mise en relation des sociétés humaines à travers l'espace. Pour dépasser les limites contraignantes du troc primitif qui exigeait la coïncidence parfaite des désirs et des biens disponibles, les civilisations ont inventé des instruments d'échange universellement reconnus : la monnaie sous toutes ses formes successives (marchandise, métallique, fiduciaire, scripturale puis électronique). Dans le capitalisme mondialisé contemporain, les techniques d'échange ont atteint un degré sophistiqué d'abstraction avec l'essor des bourses de valeurs et des marchés de capitaux dématérialisés. Comprendre ces mécanismes financiers, les circuits bancaires et les marchés boursiers régionaux (comme la BRVM en Afrique de l'Ouest) permet de décrypter comment la valeur circule et finance le développement des territoires.`,
  sections: [
    {
      title: 'I. DU TROC PRIMITIF À L\'INVENTION DE LA MONNAIE',
      content: [
        '1. Le système du troc archaïque : Échange direct d\'un bien contre un autre bien sans intermédiaire financier (ex: échanger deux chèvres contre un sac de mil).',
        '• La limite insurmontable de la double coïncidence des besoins : L\'échange est impossible si le possesseur de mil ne veut pas de chèvres mais cherche des tissus.',
        '• La difficulté d\'évaluation et de divisibilité : Comment fractionner un cheval vivant pour obtenir une petite quantité de sel ?',
        '• L\'impossibilité de stocker durablement la richesse (les denrées agricoles sont périssables).',
        '2. Les monnaies-marchandises primitives : Les sociétés ont d\'abord utilisé des objets rares et acceptés par tous : le sel en blocs au Sahara, les cauris (petits coquillages marins) en Afrique de l\'Ouest, les tissus ou les perles.',
        '3. L\'apparition de la monnaie métallique pesée puis frappée : Or, argent et bronze (lingots puis pièces officielles garanties par le souverain) combinant inaltérabilité, rareté, haute valeur sous un faible volume et parfaite divisibilité.'
      ]
    },
    {
      title: 'II. LES TROIS FONCTIONS ÉCONOMIQUES MAJEURES DE LA MONNAIE',
      content: [
        'Selon la définition économique classique (Aristote, Jean Bodin), un instrument n\'est une véritable monnaie que s\'il remplit simultanément trois fonctions :',
        '1. Intermédiaire des échanges : Permet d\'acheter n\'importe quel bien ou service sans recourir au troc direct, fluidifiant instantanément l\'économie.',
        '2. Unité de compte (ou étalon de mesure) : Sert d\'échelle commune pour chiffrer la valeur de tous les biens, comparer les prix et tenir une comptabilité rationnelle.',
        '3. Réserve de valeur : Permet de différer la consommation dans le temps en épargnant en vue d\'un investissement futur, à condition que l\'inflation ne détruise pas le pouvoir d\'achat.'
      ],
      table: {
        headers: ['Forme de monnaie', 'Support physique', 'Période historique d\'apparition', 'Exemple concret'],
        rows: [
          ['Monnaie-marchandise', 'Objets naturels rares et périssables', 'Antiquité / Sociétés traditionnelles', 'Cauris en Afrique, barres de sel'],
          ['Monnaie métallique', 'Pièces d\'or, d\'argent et d\'alliages', 'À partir du VIIe siècle av. J.-C.', 'Pièces d\'or, sesterces, dinars'],
          ['Monnaie fiduciaire', 'Billets de banque en papier et pièces', 'Moyen Âge / Temps modernes', 'Billets de banque émis par les banques centrales'],
          ['Monnaie scripturale', 'Écritures sur comptes bancaires (chèques, virements)', 'XIXe et XXe siècles', 'Virements bancaires, cartes de crédit Visa'],
          ['Monnaie électronique & Mobile', 'Enregistrement numérique sur serveurs ou smartphones', 'Fin XXe - XXIe siècle', 'Comptes Wave, Orange Money, cartes sans contact']
        ]
      }
    },
    {
      title: 'III. LES FORMES MODERNES DE LA MONNAIE ET LA DÉMATÉRIALISATION',
      content: [
        '1. La monnaie fiduciaire : Billets de banque imprimés sur papier spécial sécurisé dont la valeur repose uniquement sur la confiance ("fiducia" en latin) accordée à la banque centrale émettrice.',
        '2. La monnaie scripturale : Monnaie créée sous forme d\'écritures sur les livres de comptes des banques commerciales (chèques, virements, cartes bancaires). Elle représente aujourd\'hui plus de 90 % de la masse monétaire des économies développées.',
        '3. La monnaie électronique et le mobile money : Dématérialisation totale des transactions sur téléphone portable (Wave, Orange Money) devenue le support privilégié du commerce en Afrique de l\'Ouest.',
        '4. Les cryptomonnaies et crypto-actifs (Bitcoin, Ethereum) : Monnaies numériques décentralisées reposant sur la technologie blockchain, sans contrôle d\'une banque centrale étatique.'
      ]
    },
    {
      title: 'IV. LES BOURSES DE VALEURS ET LES MARCHÉS FINANCIERS',
      content: [
        '1. Définition et utilité d\'une bourse de valeurs : C\'est un marché officiel et réglementé où s\'achètent et se vendent des titres financiers négociables émis par des entreprises privées ou par les États pour financer leurs investissements :',
        '• L\'action : Titre de propriété représentant une fraction du capital d\'une société anonyme. L\'actionnaire perçoit une part des bénéfices appelée dividende et court le risque de perdre son capital en cas de baisse du cours.',
        '• L\'obligation : Titre de créance représentant un emprunt à long terme émis par une entreprise ou un État. Le souscripteur perçoit un intérêt périodique fixe (coupon) et récupère son capital à l\'échéance.',
        '2. Le rôle macro-économique capital de la bourse : Canaliser l\'épargne dormante des ménages et des fonds d\'investissement vers le financement des grandes infrastructures (autoroutes, centrales électriques, usines) sans alourdir indûment la dette bancaire des États.',
        '3. Les grandes places boursières mondiales : Wall Street à New York (NYSE et NASDAQ), Londres (LSE), Tokyo, Shanghai, Paris (Euronext).'
      ]
    },
    {
      title: 'V. L\'EXPÉRIENCE RÉGIONALE OUEST-AFRICAINE : LE FRANC CFA, LA BCEAO ET LA BRVM',
      content: [
        '1. L\'Union Économique et Monétaire Ouest-Africaine (UEMOA) : Regroupe 8 pays partageant une même monnaie commune (le Franc CFA) : Bénin, Burkina Faso, Côte d\'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal et Togo.',
        '2. La Banque Centrale des États de l\'Afrique de l\'Ouest (BCEAO) :',
        '• Siège institutionnel basé à Dakar.',
        '• Missions : Émission exclusive des billets et pièces de FCFA, conduite de la politique monétaire, surveillance de l\'inflation et gestion des réserves de change.',
        '3. La Bourse Régionale des Valeurs Mobilières (BRVM) :',
        '• Siège basé à Abidjan avec des antennes nationales de bourse dans chaque capitale (dont Dakar).',
        '• Institution financière unique au monde : Première bourse transnationale commune à huit pays souverains.',
        '• Permet aux entreprises sénégalaises (comme Sonatel première capitalisation de la BRVM, Total Sénégal) et à l\'État sénégalais de lever des centaines de milliards de FCFA sous forme d\'emprunts obligataires pour financer les projets d\'infrastructures du pays.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS FINANCIÈRES',
      content: [
        'Exercice 1 : Distinguer clairement une action et une obligation financière.',
        'Correction : Une action est un titre de copropriété d\'une fraction d\'une entreprise : l\'actionnaire devient propriétaire partiel, a droit de vote à l\'assemblée générale, perçoit un dividende variable selon la rentabilité de l\'entreprise et assume un risque financier. Une obligation est un simple titre de créance (un prêt d\'argent consenti à l\'entreprise ou à l\'État) : l\'obligataire n\'est pas propriétaire mais créancier, il n\'a pas de droit de vote, perçoit un intérêt contractuel fixe garanti et a la certitude d\'être remboursé de sa mise de départ à l\'échéance convenue.',
        'Exercice 2 : En quoi la monnaie scripturale et le Mobile Money stimulent-ils la vitesse de circulation de l\'argent dans l\'économie ?',
        'Correction : En supprimant la contrainte du déplacement physique nécessaire pour remettre des billets de banque ou des pièces de monnaie en main propre, la monnaie scripturale et le Mobile Money permettent d\'effectuer des paiements instantanés et sécurisés à distance à n\'importe quelle heure. L\'argent qui dormait sous forme d\'épargne liquide non productive est immédiatement réinjecté dans les circuits commerciaux, multipliant les transactions quotidiennes et accélérant l\'activité économique générale.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma financier : Le circuit d\'épargne et le rôle de la Bourse (BRVM)',
    root: 'TECHNIQUES D\'ÉCHANGES & MARCHÉS',
    branches: [
      {
        name: 'ÉVOLUTION DE LA MONNAIE',
        subtitle: 'De la matière à l\'abstraction',
        items: [
          'Troc initial bloqué par la double coïncidence des besoins',
          'Monnaie métallique (or, argent) : inaltérable et divisible',
          'Monnaie fiduciaire : billets garantis par la banque centrale',
          'Dématérialisation : Mobile Money (Wave, Orange Money)'
        ]
      },
      {
        name: 'FINANCE & BOURSE DE VALEURS',
        subtitle: 'Canalisation de l\'épargne',
        items: [
          'Actions : titres de propriété donnant droit aux dividendes',
          'Obligations : titres d\'emprunt d\'État ou d\'entreprises',
          'Financement des grands projets d\'infrastructures sans dette',
          'Places géantes : Wall Street, Londres, Tokyo'
        ]
      },
      {
        name: 'L\'INTÉGRATION UEMOA',
        subtitle: 'BCEAO & BRVM',
        items: [
          'Monnaie commune : Franc CFA partagé par 8 pays',
          'Banque centrale commune : BCEAO sise à Dakar',
          'Bourse Régionale des Valeurs Mobilières (BRVM à Abidjan)',
          'Succès de la Sonatel sénégalaise cotée en bourse'
        ]
      }
    ]
  },
  conclusion: `Les techniques d'échange et la monnaie ont permis à l'humanité de dépasser le troc archaïque pour bâtir une économie d'échanges à l'échelle planétaire. De la petite transaction quotidienne par smartphone jusqu'aux levées de fonds géantes à la BRVM pour financer les autoroutes et les ports, la maîtrise des mécanismes monétaires et boursiers constitue un vecteur capital pour l'indépendance financière et la souveraineté économique du Sénégal.`
};

export const LESSON_22_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-22',
  number: 'LEÇON 22',
  title: 'L’organisation du commerce mondial et l’échange inégal',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '28 min',
  description: 'Mondialisation des échanges, triade économique, acteurs du commerce (OMC, FTN), théorie et mécanismes de l’échange inégal, détérioration des termes de l’échange et stratégies de dépassement.',
  introduction: `Le commerce international est le moteur par excellence de la mondialisation contemporaine. Favorisé par la baisse continue des coûts de transport maritime et aérien, par le démantèlement des barrières douanières sous l'égide de l'OMC et par le déploiement planétaire des Firmes Transnationales (FTN), le volume des échanges de marchandises et de services a progressé à un rythme deux fois plus rapide que la production mondiale depuis 1945. Cependant, ce commerce planétaire ne profite pas équitablement à tous les territoires. Les géographes et économistes critiques ont développé la théorie de l'« échange inégal » pour démontrer comment la détérioration des termes de l'échange enferme les pays exportateurs de matières premières brutes du Sud dans une asymétrie structurelle par rapport aux pays industrialisés qui vendent des biens manufacturés et des technologies à forte valeur ajoutée.`,
  sections: [
    {
      title: 'I. L\'EXPANSION ET LA GÉOGRAPHIE DU COMMERCE MONDIAL',
      content: [
        '1. L\'explosion quantitative des flux : La valeur des exportations mondiales de marchandises dépasse aujourd\'hui 25 000 milliards de dollars par an, complétée par plus de 7 000 milliards de dollars de services (tourisme, transport, logiciels, finance).',
        '2. La prépondérance des produits manufacturés : Les biens industriels représentent plus de 70 % des échanges de marchandises, loin devant les hydrocarbures et minerais (environ 18 %) et les produits agricoles (environ 10 %).',
        '3. La géographie asymétrique des flux (La Triade et les pays émergents) :',
        '• Les trois pôles de commandement traditionnels de la "Triade" : Amérique du Nord, Europe occidentale et Asie orientale développée (Japon, Corée du Sud).',
        '• La montée en puissance spectaculaire de la Chine : Devenue le premier exportateur mondial de marchandises ("l\'usine du monde").',
        '• La marginalisation persistante de l\'Afrique subsaharienne : Ne représente que moins de 2,5 à 3 % du commerce mondial total, malgré ses immenses richesses minières et agricoles.'
      ]
    },
    {
      title: 'II. LES ACTEURS DU COMMERCE MONDIAL',
      content: [
        '1. Les Firmes Transnationales (FTN) : Entreprises possédant des filiales productives dans plusieurs pays. Elles réalisent les deux tiers du commerce international, et un tiers des échanges mondiaux est constitué de commerce intra-firme (échanges internes entre filiales d\'un même groupe).',
        '2. L\'Organisation Mondiale du Commerce (OMC) : Institution créée en 1995 siégeant à Genève, chargée d\'édicter les règles commerciales multilatérales, d\'abaisser les droits de douane et de trancher les litiges commerciaux entre États membres.',
        '3. Les États et les blocs régionaux : Signent des accords de libre-échange pour défendre leurs filières économiques nationales et imposer des normes sanitaires et techniques.'
      ]
    },
    {
      title: 'III. LA NOTION ET LES MÉCANISMES DE L\'ÉCHANGE INÉGAL',
      content: [
        'Théorisée par des économistes comme Raul Prebisch, Samir Amin et Arghiri Emmanuel, la notion d\'échange inégal décrit une situation structurelle où le commerce international appauvrit un partenaire au profit de l\'autre :',
        '1. La Détérioration des Termes de l\'Échange (DTE) :',
        '• Les termes de l\'échange mesurent le rapport entre l\'indice des prix des exportations d\'un pays et l\'indice des prix de ses importations : Termes de l\'échange = (Prix des exportations / Prix des importations) × 100.',
        '• Le constat historique accablant : Les cours des matières premières brutes (arachide, cacao, café, fer, bauxite) stagnent ou baissent sur longue période sous l\'effet de la concurrence entre pays producteurs et de la spéculation boursière, tandis que les prix des biens manufacturés et équipements technologiques importés du Nord (tracteurs, ordinateurs, médicaments, véhicules) ne cessent d\'augmenter.',
        '• La conséquence concrète : Un pays du Sud doit exporter toujours plus de tonnes d\'arachide ou de coton pour pouvoir acheter le même tracteur ou la même tonne de ciment qu\'il y a vingt ans !',
        '2. L\'asymétrie de la valeur ajoutée : Vendre des matières premières brutes génère une valeur ajoutée minime sur place, tandis que les pays transformateurs captent 90 % du profit en aval (exemple emblématique du chocolat fabriqué en Europe à partir des fèves ivoiriennes).'
      ],
      table: {
        headers: ['Poste d\'échange', 'Nature des produits échangés', 'Niveau de valeur ajoutée captée', 'Fixation des cours boursiers'],
        rows: [
          ['Exportations du Sud (ex: Afrique)', 'Matières premières brutes (cacao, arachide, fer)', 'Très faible valeur ajoutée (< 10 %)', 'Fixés unilatéralement à Londres/Chicago'],
          ['Importations du Sud (venues du Nord)', 'Produits industriels finis, machines, médicaments', 'Très haute valeur ajoutée (> 80 %)', 'Fixés par les multinationales du Nord']
        ]
      }
    },
    {
      title: 'IV. LA DÉPENDANCE ÉCONOMIQUE DES PAYS DU SUD',
      content: [
        '1. La vulnérabilité de la mono-exportation : Des pays tirent plus de 80 % de leurs recettes budgétaires d\'un seul ou de deux produits (ex: le pétrole au Nigeria et en Angola, l\'or et le coton au Mali). Tout retournement baissier sur les bourses mondiales entraîne immédiatement des crises de la dette et des coupes budgétaires sévères dans l\'éducation et la santé.',
        '2. Le protectionnisme caché et les subventions agricoles déloyales du Nord : Les pays occidentaux subventionnent massivement leurs propres agriculteurs (subventions de la PAC en Europe ou du Farm Bill aux USA pour les producteurs de coton), ce qui fait chuter artificiellement les cours mondiaux et ruine les paysans africains non subventionnés.'
      ]
    },
    {
      title: 'V. LES STRATÉGIES POUR SORTIR DU PIÈGE DE L\'ÉCHANGE INÉGAL',
      content: [
        'Pour inverser cette logique asymétrique, les pays du Sud disposent de plusieurs leviers stratégiques majeurs :',
        '1. La transformation industrielle locale sur place : Cesser d\'exporter le minerai de fer brut pour fabriquer de l\'acier local ; cesser d\'exporter la graine d\'arachide brute pour produire de l\'huile raffinée et du biocarburant ; cesser d\'exporter le cacao brut pour fabriquer du chocolat de luxe en Afrique.',
        '2. L\'industrialisation par substitution d\'importations : Produire localement les biens couramment importés (savon, ciment, riz de table, matériaux de construction) pour préserver les devises de la nation.',
        '3. La diversification économique : Ne plus dépendre d\'une seule matière première en stimulant le tourisme, les technologies de l\'information et les services.',
        '4. L\'intégration économique régionale (ZLECAf, CEDEAO) : Créer de vastes marchés intérieurs africains unifiés pour commercer entre pays frères sans dépendre exclusivement des marchés d\'Europe ou d\'Amérique.',
        '5. Le commerce équitable : Mouvement garantissant un prix minimum rémunérateur aux producteurs paysans du Sud, indépendant des spéculations boursières mondiales.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ANALYSE DE CAS',
      content: [
        'Exercice 1 : Un pays africain vendait en 1980 une tonne de café brut pour acheter 10 sacs d\'engrais chimiques importés. En 2024, il doit vendre 3 tonnes de café pour obtenir les mêmes 10 sacs d\'engrais. Nommez et expliquez précisément ce phénomène économique.',
        'Correction : Ce phénomène s\'appelle la Détérioration des Termes de l\'Échange (DTE). Il traduit la baisse du pouvoir d\'achat des exportations de matières premières brutes par rapport au coût croissant des biens industriels manufacturés importés. L\'indice des termes de l\'échange de ce pays a été divisé par trois, ce qui oblige la nation à travailler et à produire trois fois plus pour acquérir la même quantité d\'équipements importés.',
        'Exercice 2 : Pourquoi la transformation locale des fèves de cacao en Côte d\'Ivoire constitue-t-elle une priorité absolue pour le développement national ?',
        'Correction : Sur un marché mondial du chocolat pesant plus de 130 milliards de dollars par an, les pays producteurs de fèves brutes comme la Côte d\'Ivoire et le Ghana ne touchent collectivement que moins de 6 à 7 % de la valeur totale finale. En broyant et en transformant les fèves en beurre de cacao, poudre et chocolat fini sur place, le pays crée des dizaines de milliers d\'emplois industriels ouvriers et d\'ingénieurs, multiplie ses recettes fiscales et capte la plus-value financière qui enrichissait jusque-là les multinationales européennes.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma explicatif : Le mécanisme de l\'échange inégal et de la valeur ajoutée',
    root: 'LE COMMERCE MONDIAL & L\'ÉCHANGE INÉGAL',
    branches: [
      {
        name: 'EXPORTATION DE MATIÈRES BRUTES',
        subtitle: 'Spécialisation vulnérable du Sud',
        items: [
          'Arachide, coton, cacao, pétrole brut, minerai de fer',
          'Valeur ajoutée dérisoire captée sur le sol national (<10 %)',
          'Prix fixés sur les bourses spéculatives mondiales (Londres, Chicago)',
          'Instabilité permanente des recettes budgétaires de l\'État'
        ]
      },
      {
        name: 'IMPORTATION DE PRODUITS FINIS',
        subtitle: 'Surcoûts industriels du Nord',
        items: [
          'Machines, tracteurs, véhicules, médicaments, produits high-tech',
          'Prix en hausse continue intégrant salaires élevés et R&D',
          'Détérioration continue des termes de l\'échange (DTE)',
          'Pression permanente sur la balance des paiements'
        ]
      },
      {
        name: 'VOIES DE RUPTURE & SOUVERAINETÉ',
        subtitle: 'Stratégies de dépassement',
        items: [
          'Transformation industrielle locale de 100 % des matières',
          'Industrialisation par substitution d\'importations',
          'ZLECAf : grand marché intérieur africain unifié',
          'Création d\'emplois industriels stables pour la jeunesse'
        ]
      }
    ]
  },
  conclusion: `L'organisation actuelle du commerce mondial perpétue de graves disparités entre nations. L'échange inégal n'est cependant pas une fatalité immuable : il peut être combattu par la transformation industrielle sur place de nos ressources nationales, par la diversification productive et par la solidarité commerciale africaine au sein de la ZLECAf.`
};

export const LESSON_23_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-23',
  number: 'LEÇON 23',
  title: 'Les espaces d’intégration économique : problématique et organisation',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '28 min',
  description: 'Théorie de l’intégration régionale (les 5 étapes de Balassa), modèles comparés (Union Européenne, CEDEAO, UEMOA), acquis, obstacles structurels et dynamique de la ZLECAf.',
  introduction: `Dans une économie mondialisée dominée par des géants continentaux (États-Unis, Chine, Union Européenne, Inde), les États isolés de taille modeste sont confrontés à l'étroitesse de leurs marchés nationaux et à une vulnérabilité diplomatique accrue. Pour surmonter cet émiettement territorial et peser dans les négociations commerciales internationales, les pays se regroupent au sein d'espaces d'intégration économique régionale. L'intégration économique désigne le processus institutionnel et politique par lequel plusieurs nations souveraines décident d'éliminer progressivement les barrières douanières entre elles et de coordonner leurs politiques sectorielles et monétaires. De l'expérience historique très avancée de l'Union Européenne aux regroupements ouest-africains que sont la CEDEAO et l'UEMOA, jusqu'au projet ambitieux de la ZLECAf à l'échelle de tout le continent, l'intégration régionale est la clé de voûte de l'émancipation économique de l'Afrique.`,
  sections: [
    {
      title: 'I. LES OBJECTIFS ET MOTIVATIONS DE L\'INTÉGRATION ÉCONOMIQUE RÉGIONALE',
      content: [
        '1. L\'élargissement du marché intérieur : Permettre aux entreprises d\'accéder à des dizaines ou centaines de millions de consommateurs sans barrières douanières, favorisant les économies d\'échelle et la compétitivité.',
        '2. L\'attraction des investissements productifs (IDE) : Les firmes multinationales préfèrent investir dans un grand espace unifié doté de règles juridiques stables et harmonisées plutôt que dans un pays morcelé.',
        '3. Le renforcement de la puissance géopolitique collective : Parler d\'une seule voix dans les négociations multilatérales de l\'OMC et face aux grandes puissances.',
        '4. La consolidation de la paix et de la sécurité collective : En créant une interdépendance économique forte, on prévient les conflits armés entre États voisins (principe fondateur de la construction européenne après 1945 et de la CEDEAO).'
      ]
    },
    {
      title: 'II. LA TYPOLOGIE THÉORIQUE DES DEGRÉS D\'INTÉGRATION (LES 5 ÉTAPES DE BALASSA)',
      content: [
        'L\'économiste Bela Balassa a formalisé en 1961 les cinq stades progressifs d\'intégration économique :',
        '1. Étape 1 : La Zone de Libre-Échange (ZLE) : Suppression des droits de douane et des quotas quantitatifs sur les marchandises circulant entre les pays membres. Chaque pays conserve sa propre politique tarifaire vis-à-vis des pays extérieurs (ex: ALENA / ACEUM entre USA, Canada et Mexique).',
        '2. Étape 2 : L\'Union Douanière : En plus du libre-échange interne, les pays membres adoptent un Tarif Extérieur Commun (TEC) : toute marchandise étrangère entrant dans l\'espace paie exactement les mêmes droits de douane, quel que soit le port d\'entrée.',
        '3. Étape 3 : Le Marché Commun : Ajoute à l\'union douanière la libre circulation absolue de tous les facteurs de production : les marchandises, les services, les capitaux financiers et les PERSONNES (citoyens pouvant voyager, résider et travailler librement dans n\'importe quel pays membre sans visa).',
        '4. Étape 4 : L\'Union Économique et Monétaire (UEM) : Harmonisation et coordination des politiques macroéconomiques, fiscales et budgétaires, et adoption d\'une MONNAIE UNIQUE gérée par une banque centrale commune (ex: l\'Euro dans la Zone Euro, le Franc CFA dans l\'UEMOA).',
        '5. Étape 5 : L\'Union Politique (ou fédération) : Stade suprême où les États fusionnent leurs diplomaties, leurs armées et leurs gouvernements sous une autorité politique fédérale commune.'
      ],
      table: {
        headers: ['Stade d\'intégration (Balassa)', 'Suppression douanes internes', 'Tarif extérieur commun (TEC)', 'Libre circulation des personnes', 'Monnaie unique', 'Exemple concret'],
        rows: [
          ['1. Zone de libre-échange', 'OUI', 'NON', 'NON', 'NON', 'ZLECAf (en cours), ACEUM'],
          ['2. Union douanière', 'OUI', 'OUI', 'NON', 'NON', 'Zollverein historique'],
          ['3. Marché commun', 'OUI', 'OUI', 'OUI', 'NON', 'CEDEAO (visas supprimés)'],
          ['4. Union économique & monétaire', 'OUI', 'OUI', 'OUI', 'OUI', 'UEMOA (Franc CFA), Zone Euro'],
          ['5. Union politique complète', 'OUI', 'OUI', 'OUI', 'OUI', 'États-Unis d\'Amérique']
        ]
      }
    },
    {
      title: 'III. L\'EXPÉRIENCE DE L\'UNION EUROPÉENNE (UE) : SUCCÈS ET DÉFIS',
      content: [
        '1. La genèse : Partie en 1951 de la CECA (Charbon et Acier) et du Traité de Rome (CEE en 1957) à 6 pays pour éliminer le spectre de la guerre, l\'Union Européenne regroupe aujourd\'hui 27 États membres et plus de 450 millions d\'habitants.',
        '2. Les réussites majeures : Le Grand Marché Unique sans frontières physiques (espace Schengen), la monnaie unique (l\'Euro géré par la BCE), la PAC assurant la sécurité alimentaire, et un poids diplomatique et commercial majeur.',
        '3. Les tensions actuelles : Crise de la gouvernance supranationale, montée de l\'euroscepticisme, départ historique du Royaume-Uni (le Brexit en 2020), et disparités de richesses persistantes entre pays du Nord et pays de l\'Est.'
      ]
    },
    {
      title: 'IV. L\'INTÉGRATION SOUS-RÉGIONALE EN AFRIQUE DE L\'OUEST : CEDEAO ET UEMOA',
      content: [
        'L\'Afrique de l\'Ouest offre l\'un des paysages institutionnels d\'intégration les plus denses du continent :',
        '1. La CEDEAO (Communauté Économique des États de l\'Afrique de l\'Ouest) :',
        '• Fondée en 1975 par le Traité de Lagos, regroupe plus de 400 millions de citoyens.',
        '• Acquis majeurs : Liberté totale de circulation des personnes sans visa avec passeport biométrique CEDEAO, Tarif Extérieur Commun (TEC-CEDEAO) et interventions militaires de paix (ECOMOG).',
        '• Crises géopolitiques récentes : Coups d\'État militaires au Sahel ayant entraîné la création de l\'Alliance des États du Sahel (AES : Mali, Burkina Faso, Niger) et des tensions sur leur maintien au sein de la CEDEAO.',
        '2. L\'UEMOA (Union Économique et Monétaire Ouest-Africaine) :',
        '• Créée à Dakar en 1994, regroupe 8 pays francophones et lusophones.',
        '• Réalisations solides : Monnaie commune stable (FCFA), Banque Centrale commune (BCEAO à Dakar), critères de convergence macroéconomique stricts (déficit public inférieur à 3 % du PIB) et Bourse Régionale (BRVM).'
      ]
    },
    {
      title: 'V. LES OBSTACLES STRUCTURELS ET L\'HORIZON DE LA ZLECAF',
      content: [
        '1. Les freins récurrents à l\'intégration ouest-africaine :',
        '• Faiblesse dramatique du commerce intra-régional : Moins de 15 % des échanges des pays ouest-africains se font entre voisins (l\'essentiel reste orienté vers l\'Europe et l\'Asie) en raison de la similitude des productions agricoles non transformées.',
        '• L\'insuffisance criante des infrastructures physiques de liaison (routes dégradées, voies ferrées non interconnectées).',
        '• La persistance de tracasseries routières et de barrières non tarifaires illégales le long des corridors.',
        '2. La Zone de Libre-Échange Continentale Africaine (ZLECAf) :',
        '• Signée à Kigali en 2018 par 54 pays de l\'Union Africaine, entrée officiellement en vigueur.',
        '• Ambition : Créer le plus grand marché unique au monde par le nombre de pays, regroupant 1,4 milliard d\'habitants pour démanteler 90 % des droits de douane continentaux et propulser l\'industrialisation africaine.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ANALYSE COMPARÉE',
      content: [
        'Exercice 1 : Quelles sont les différences fondamentales entre une Zone de Libre-Échange (ZLE) et une Union Douanière ?',
        'Correction : Dans une zone de libre-échange, les pays membres suppriment les droits de douane sur les marchandises échangées entre eux, mais chaque pays reste libre de fixer ses propres tarifs douaniers indépendants vis-à-vis des pays extérieurs. Dans une union douanière, les pays font un pas supplémentaire décisif : en plus du libre-échange interne, ils adoptent un Tarif Extérieur Commun (TEC) unique appliqué de manière identique par tous les membres aux frontières extérieures de l\'espace commun.',
        'Exercice 2 : Pourquoi le commerce intra-africain est-il si faible comparé au commerce intra-européen ?',
        'Correction : En Europe, plus de 65 % du commerce se fait entre pays européens membres parce que leurs économies sont industrialisées, diversifiées et complémentaires, reliées par des autoroutes et des trains ultra-rapides. En Afrique, le commerce intra-continental ne dépasse pas 15 à 17 % car les pays héritent d\'économies de traite coloniales concurrentes (chacun exporte les mêmes matières premières brutes vers le Nord et importe des machines du Nord), combinées à des réseaux de transport transfrontaliers vétustes et à des barrières non tarifaires persistantes.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma en escalier : Les cinq stades d\'intégration selon Bela Balassa',
    root: 'LES DEGRÉS D\'INTÉGRATION ÉCONOMIQUE',
    branches: [
      {
        name: 'STADES 1 & 2 : COMMERCE',
        subtitle: 'ZLE & Union Douanière',
        items: [
          '1. Zone de libre-échange : zéro douane entre membres',
          '2. Union douanière : adoption du Tarif Extérieur Commun (TEC)',
          'Exemples : ZLECAf à l\'échelle de l\'Afrique, TEC-CEDEAO',
          'Suppression progressive des barrières tarifaires'
        ]
      },
      {
        name: 'STADES 3 & 4 : INTÉGRATION AVANCÉE',
        subtitle: 'Marché Commun & Monnaie',
        items: [
          '3. Marché commun : libre circulation des personnes et capitaux',
          '4. Union économique & monétaire : monnaie unique (Franc CFA / Euro)',
          'Exemple modèle ouest-africain : UEMOA & BCEAO',
          'Critères de convergence macroéconomique'
        ]
      },
      {
        name: 'STADE 5 : UNION POLITIQUE',
        subtitle: 'Fédération d\'États',
        items: [
          'Politique étrangère et diplomatie unifiées',
          'Armée commune et défense intégrée',
          'Parlement souverain et constitution fédérale',
          'Objectif ultime des Pères fondateurs du Panafricanisme'
        ]
      }
    ]
  },
  conclusion: `L'intégration économique n'est plus une simple option diplomatique : elle est une ardente nécessité de survie et d'émancipation pour le Sénégal et l'Afrique. En surmontant les frontières coloniales, en faisant tomber les barrières douanières et en unifiant nos marchés au sein de la CEDEAO et de la ZLECAf, le continent se donne les moyens de transformer ses richesses sur place et d'offrir un avenir prospère à sa jeunesse.`
};
