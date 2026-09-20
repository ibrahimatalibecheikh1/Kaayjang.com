import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE 4ÈME - PREMIÈRE PARTIE : MÉTHODOLOGIE ET OUTILS STATISTIQUES
// CONFORME AU PROGRAMME OFFICIEL DU MINISTÈRE DE L'ÉDUCATION NATIONALE DU SÉNÉGAL
// LEÇONS 1 À 5 : COURS INTÉGRAUX DÉTAILLÉS, SCHÉMAS VECTORIELS, EXERCICES & CORRIGÉS
// =========================================================================

export const LESSON_1_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LES OUTILS DU GÉOGRAPHE – REPÉRAGE, ORIENTATION ET LECTURE DE CARTES',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `La géographie moderne est la science des territoires et de l'organisation spatiale des sociétés humaines. Loin d'être une simple énumération de noms de pays ou de fleuves, elle cherche à comprendre comment les hommes habitent, aménagent, modifient et protègent leur milieu de vie. Pour y parvenir, le géographe utilise des instruments scientifiques rigoureux de repérage, d'orientation et de représentation cartographique. Cette première leçon permet à l'élève de 4ème d'acquérir les fondements indispensables pour localiser n'importe quel point sur le globe terrestre, manipuler une boussole ou un récepteur GPS, et décoder méthodiquement une carte géographique à l'aide de son titre, de son échelle, de son orientation et de sa légende.`,
  diagram: {
    title: 'Schéma Récapitulatif : Les Outils Fondamentaux du Géographe',
    root: 'OUTILS DU GÉOGRAPHE',
    branches: [
      {
        name: 'Repérage Planétaire',
        subtitle: 'Coordonnées géographiques',
        items: [
          'Parallèles (mesure de la latitude : 0° à 90° Nord/Sud)',
          'Méridiens (mesure de la longitude : 0° à 180° Est/Ouest)',
          'Repères cardinaux : Équateur, Greenwich, Tropiques, Cercles polaires'
        ]
      },
      {
        name: 'Orientation Spatiale',
        subtitle: 'Terrain et navigation',
        items: [
          'Rose des vents (4 points cardinaux et 4 points intermédiaires)',
          'Boussole magnétique (aiguille aimantée vers le Nord magnétique)',
          'Système GPS satellitaire (triangulation et coordonnées instantanées)'
        ]
      },
      {
        name: 'Langage Cartographique',
        subtitle: 'Les 4 composantes de la carte',
        items: [
          'Titre précis (thème, espace et date)',
          'Échelle (rapport mathématique numérique ou graphique)',
          'Orientation (flèche vers le Nord géographique)',
          'Légende (figurés ponctuels, linéaires et de surface)'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LE REPÉRAGE ET LA LOCALISATION GÉOGRAPHIQUE',
      content: [
        `Pour localiser avec une exactitude absolue un lieu à la surface de la planète, les géographes ont quadrillé la Terre d'un réseau de lignes imaginaires appelées coordonnées géographiques.`,
        `Ce quadrillage universel repose sur deux familles de lignes : les parallèles et les méridiens.`
      ],
      subsections: [
        {
          subtitle: 'A. Les coordonnées géographiques : Parallèles et Latitude',
          content: [
            `• Les parallèles : Ce sont des cercles imaginaires horizontaux tracés parallèlement à l'Équateur. L'Équateur est le plus grand de tous les cercles : c'est le parallèle d'origine coté 0°. Il sépare la Terre en deux moitiés égales appelées hémisphères : l'hémisphère Nord (ou boréal) et l'hémisphère Sud (ou austral).`,
            `• La latitude : C'est la distance angulaire mesurée en degrés (°), minutes (') et secondes (\") qui sépare un point donné de l'Équateur vers le Nord ou vers le Sud.`,
            `  - La latitude varie de 0° (à l'Équateur) jusqu'à 90° Nord (au pôle Nord) et 90° Sud (au pôle Sud).`,
            `  - Exemple concret au Sénégal : La ville de Dakar est située approximativement à 14°40' de latitude Nord.`
          ]
        },
        {
          subtitle: 'B. Les coordonnées géographiques : Méridiens et Longitude',
          content: [
            `• Les méridiens : Ce sont des demi-cercles imaginaires verticaux reliant le pôle Nord au pôle Sud. Tous les méridiens ont exactement la même longueur. Par convention internationale, le méridien d'origine (0°) est le méridien de Greenwich, qui traverse l'observatoire royal près de Londres.`,
            `• La longitude : C'est la distance angulaire mesurée en degrés qui sépare un point donné du méridien de Greenwich vers l'Est ou vers l'Ouest.`,
            `  - La longitude varie de 0° (sur le méridien de Greenwich) jusqu'à 180° vers l'Est ou vers l'Ouest.`,
            `  - Exemple concret au Sénégal : Dakar est située à environ 17°26' de longitude Ouest. Les coordonnées complètes de Dakar sont donc (14°40' N ; 17°26' O).`
          ]
        },
        {
          subtitle: 'C. Les grands repères astronomiques et géographiques du globe',
          content: [
            `Le globe terrestre comporte 5 lignes parallèles majeures qui déterminent les grandes zones thermiques du monde :`,
            `• L'Équateur (0°) : Il reçoit une insolation maximale toute l'année.`,
            `• Le tropique du Cancer (23°27' Nord) : Limite septentrionale de la zone intertropicale.`,
            `• Le tropique du Capricorne (23°27' Sud) : Limite méridionale de la zone intertropicale.`,
            `• Le cercle polaire arctique (66°33' Nord) et le cercle polaire antarctique (66°33' Sud) : Délimitent les zones glaciales polaires.`,
            `Entre les tropiques et les cercles polaires s'étendent les deux zones tempérées (tempérée nord et tempérée sud).`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 360" width="100%" height="100%">
              <defs>
                <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="%23dbeafe"/>
                  <stop offset="100%" stop-color="%23bfdbfe"/>
                </linearGradient>
              </defs>
              <rect width="700" height="360" fill="%23f8fafc" rx="16"/>
              <text x="350" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">LE QUADRILLAGE GÉOGRAPHIQUE MONDIAL : PARALLÈLES ET MÉRIDIENS</text>
              <g transform="translate(220, 190)">
                <circle cx="0" cy="0" r="130" fill="url(%23globeGrad)" stroke="%232563eb" stroke-width="2.5"/>
                <!-- Axe des pôles -->
                <line x1="0" y1="-145" x2="0" y2="145" stroke="%23ef4444" stroke-width="2" stroke-dasharray="4,3"/>
                <text x="0" y="-150" text-anchor="middle" font-size="11" font-weight="bold" fill="%23b91c1c">Pôle Nord (90° N)</text>
                <text x="0" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="%23b91c1c">Pôle Sud (90° S)</text>
                <!-- Équateur -->
                <ellipse cx="0" cy="0" rx="130" ry="15" fill="none" stroke="%23dc2626" stroke-width="3"/>
                <text x="140" y="5" font-size="11" font-weight="bold" fill="%23dc2626">Équateur (0° Latitude)</text>
                <!-- Tropique du Cancer -->
                <ellipse cx="0" cy="-52" rx="119" ry="12" fill="none" stroke="%23d97706" stroke-width="1.8" stroke-dasharray="5,3"/>
                <text x="130" y="-50" font-size="10" font-weight="bold" fill="%23d97706">Tropique du Cancer (23°27' N)</text>
                <!-- Tropique du Capricorne -->
                <ellipse cx="0" cy="52" rx="119" ry="12" fill="none" stroke="%23d97706" stroke-width="1.8" stroke-dasharray="5,3"/>
                <text x="130" y="55" font-size="10" font-weight="bold" fill="%23d97706">Tropique du Capricorne (23°27' S)</text>
                <!-- Cercle Arctique -->
                <ellipse cx="0" cy="-100" rx="82" ry="8" fill="none" stroke="%230284c7" stroke-width="1.5" stroke-dasharray="4,2"/>
                <text x="95" y="-100" font-size="9" font-weight="bold" fill="%230284c7">Cercle Arctique (66°33' N)</text>
                <!-- Méridien de Greenwich -->
                <ellipse cx="0" cy="0" rx="40" ry="130" fill="none" stroke="%23059669" stroke-width="2"/>
                <text x="-5" y="-70" text-anchor="end" font-size="10" font-weight="bold" fill="%23059669">Greenwich (0° Long.)</text>
              </g>
              <g transform="translate(480, 70)">
                <rect width="200" height="250" fill="white" stroke="%23cbd5e1" rx="10"/>
                <text x="100" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="%230f172a">À RETENIR</text>
                <line x1="15" y1="34" x2="185" y2="34" stroke="%23e2e8f0"/>
                <text x="15" y="55" font-size="10" font-weight="bold" fill="%23dc2626">• Latitude :</text>
                <text x="25" y="70" font-size="9" fill="%23475569">Distance angulaire Nord-Sud</text>
                <text x="25" y="83" font-size="9" fill="%23475569">par rapport à l'Équateur.</text>
                <text x="25" y="96" font-size="9" fill="%23475569">De 0° à 90°.</text>

                <text x="15" y="120" font-size="10" font-weight="bold" fill="%23059669">• Longitude :</text>
                <text x="25" y="135" font-size="9" fill="%23475569">Distance angulaire Est-Ouest</text>
                <text x="25" y="148" font-size="9" fill="%23475569">par rapport à Greenwich.</text>
                <text x="25" y="161" font-size="9" fill="%23475569">De 0° à 180°.</text>

                <text x="15" y="185" font-size="10" font-weight="bold" fill="%232563eb">• Dakar (Sénégal) :</text>
                <text x="25" y="200" font-size="9.5" font-weight="bold" fill="%231e3a8a">14°40' N ; 17°26' O</text>
                <text x="25" y="215" font-size="8.5" fill="%2364748b">Afrique de l'Ouest</text>
                <text x="25" y="228" font-size="8.5" fill="%2364748b">Pointe la plus occidentale</text>
              </g>
            </svg>`,
            caption: 'Figure 1 : Le repérage planétaire par parallèles (latitude) et méridiens (longitude).'
          }
        }
      ]
    },
    {
      title: "II. L'ORIENTATION SUR LE TERRAIN ET DANS L'ESPACE",
      content: [
        `S'orienter signifie déterminer sa position par rapport aux quatre points cardinaux et savoir quelle direction suivre pour atteindre sa destination.`
      ],
      subsections: [
        {
          subtitle: 'A. La rose des vents et les repères naturels',
          content: [
            `• Les quatre points cardinaux majeurs :`,
            `  - Le Nord (N) : Correspond à la direction de l'étoile Polaire dans l'hémisphère Nord.`,
            `  - Le Sud (S) : Direction opposée au Nord, correspondant à la position du soleil à midi solaire dans l'hémisphère Nord tempéré.`,
            `  - L'Est (E) ou Levant : Direction approximative où le soleil se lève chaque matin.`,
            `  - L'Ouest (O ou W) ou Couchant : Direction approximative où le soleil se couche chaque soir.`,
            `• Les points intermédiaires : Nord-Est (NE), Sud-Est (SE), Sud-Ouest (SO), Nord-Ouest (NO). L'ensemble forme la rose des vents.`
          ]
        },
        {
          subtitle: 'B. Les instruments traditionnels et technologiques modernes',
          content: [
            `• La boussole : Inventée par les Chinois puis perfectionnée par les navigateurs arabes et européens, elle contient une aiguille métallique aimantée montée sur un pivot. L'aiguille pointe invariablement vers le pôle Nord magnétique de la Terre en raison du champ magnétique terrestre.`,
            `• Le GPS (Global Positioning System) : Système de géolocalisation spatiale révolutionnaire reposant sur une constellation d'au moins 24 satellites militaires et civils en orbite autour de la Terre. Un récepteur GPS (ou un smartphone) capte les signaux d'au moins 4 satellites simultanément pour calculer en une fraction de seconde l'altitude, la latitude et la longitude exactes à quelques mètres près.`
          ]
        }
      ]
    },
    {
      title: "III. LA LECTURE ET L'INTERPRÉTATION DES CARTES GÉOGRAPHIQUES",
      content: [
        `Une carte est une représentation plane, géométrique, réduite, conventionnelle et simplifiée de la surface courbe de la Terre.`,
        `Pour être correctement lue et comprise, toute carte doit comporter obligatoirement quatre éléments incontournables : le Titre, l'Échelle, l'Orientation et la Légende.`
      ],
      subsections: [
        {
          subtitle: "A. Les quatre composantes indispensables d'une carte",
          content: [
            `1. Le Titre : Il indique de façon précise le sujet étudié, l'espace géographique concerné et l'époque de référence (ex : « Carte des densités de population en Afrique en 2025 »).`,
            `2. L'Échelle : Rapport mathématique constant entre la distance sur la carte et la distance réelle sur le terrain.`,
            `   - Échelle numérique : Fraction du type 1/1 000 000 (signifie que 1 cm sur la carte = 1 000 000 cm = 10 km réels).`,
            `   - Échelle graphique : Segment de droite gradué en kilomètres facilitant la mesure directe.`,
            `3. L'Orientation : Représentée généralement par une flèche surmontée d'un « N » indiquant le Nord géographique.`,
            `4. La Légende : Dictionnaire de la carte qui traduit la signification de tous les figurés graphiques :`,
            `   - Figurés ponctuels (points, triangles, cercles) pour des éléments localisés (villes, ports, forages).`,
            `   - Figurés linéaires (lignes, flèches) pour les cours d'eau, routes, voies ferrées ou flux migratoires.`,
            `   - Figurés de surface (plages de couleurs, hachures) pour les zones de végétation, les climats ou les fortes densités.`
          ]
        },
        {
          subtitle: 'B. Typologie des cartes géographiques',
          content: [
            `• Cartes topographiques : Représentent le relief précis (courbes de niveau, altitudes cotées), les cours d'eau, les voies de communication et les zones bâties.`,
            `• Cartes thématiques : Spécialisées dans un sujet précis (climatologie, démographie, géologie, production agricole, réseaux industriels).`
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Voici une série d'exercices progressifs pour consolider la maîtrise des coordonnées géographiques, des calculs d'échelle et de la lecture cartographique.`
      ],
      subsections: [
        {
          subtitle: "Exercice 1 : Questions de cours et définitions",
          content: [
            `1. Définir les termes suivants : Latitude, Longitude, Échelle numérique, Légende.`,
            `2. Quels sont les deux repères mondiaux d'origine pour la mesure des coordonnées géographiques ?`,
            `3. Donner la différence fondamentale entre une boussole et un récepteur GPS.`
          ]
        },
        {
          subtitle: "Corrigé détaillé de l'Exercice 1",
          content: [
            `1. Définitions :`,
            `   • Latitude : Distance angulaire mesurée en degrés (de 0° à 90°) séparant un point quelconque de l'Équateur vers le Nord ou le Sud.`,
            `   • Longitude : Distance angulaire mesurée en degrés (de 0° à 180°) séparant un point du méridien de Greenwich vers l'Est ou l'Ouest.`,
            `   • Échelle numérique : Rapport fractionnaire constant entre une distance mesurée sur la carte et la distance réelle au sol exprimée dans la même unité.`,
            `   • Légende : Tableau ou encadré récapitulatif traduisant la signification précise de tous les figurés, couleurs et symboles de la carte.`,
            `2. Les deux repères d'origine sont : l'Équateur (0° de latitude) et le méridien de Greenwich (0° de longitude).`,
            `3. La boussole utilise le champ magnétique naturel de la Terre pour orienter son aiguille vers le Nord magnétique, sans nécessiter d'énergie. Le GPS fonctionne à l'aide d'un réseau artificiel de satellites en orbite calculant les coordonnées exactes par triangulation numérique en temps réel.`
          ]
        },
        {
          subtitle: "Exercice 2 : Calcul pratique d'échelle et de distance",
          content: [
            `Énoncé : Sur une carte routière du Sénégal à l'échelle 1/500 000, un élève mesure une distance de 14 cm entre la ville de Thiès et la ville de Kaolack.`,
            `1. Que signifie concrètement l'échelle 1/500 000 ?`,
            `2. Calculer en kilomètres la distance réelle séparant ces deux villes.`
          ]
        },
        {
          subtitle: "Corrigé détaillé de l'Exercice 2",
          content: [
            `1. Signification de 1/500 000 : Chaque centimètre (1 cm) mesuré sur le papier de la carte représente 500 000 cm dans la réalité sur le terrain.`,
            `2. Calcul mathématique de la distance réelle :`,
            `   • Distance réelle = distance sur la carte × dénominateur de l'échelle`,
            `   • Distance réelle = 14 cm × 500 000 = 7 000 000 cm`,
            `   • Conversion en unités usuelles :`,
            `     7 000 000 cm = 70 000 mètres = 70 kilomètres.`,
            `   • Conclusion : La distance réelle séparant Thiès de Kaolack est de 70 km.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 1 : LES OUTILS DU GÉOGRAPHE – REPÉRAGE, ORIENTATION ET LECTURE DE CARTES\n\nINTRODUCTION\nLa géographie moderne est la science des territoires et de l'organisation spatiale des sociétés humaines. Loin d'être une simple énumération de noms de pays ou de fleuves, elle cherche à comprendre comment les hommes habitent, aménagent, modifient et protègent leur milieu de vie. Pour y parvenir, le géographe utilise des instruments scientifiques rigoureux de repérage, d'orientation et de représentation cartographique. Cette première leçon permet à l'élève de 4ème d'acquérir les fondements indispensables pour localiser n'importe quel point sur le globe terrestre, manipuler une boussole ou un récepteur GPS, et décoder méthodiquement une carte géographique à l'aide de son titre, de son échelle, de son orientation et de sa légende.\n\nSchéma Récapitulatif : Les Outils Fondamentaux du Géographe\n\nCoordonnées géographiques\n\nTerrain et navigation\n\nLes 4 composantes de la carte\n\nI. LE REPÉRAGE ET LA LOCALISATION GÉOGRAPHIQUE\n\nA. Les coordonnées géographiques : Parallèles et Latitude\n\nB. Les coordonnées géographiques : Méridiens et Longitude\n\nC. Les grands repères astronomiques et géographiques du globe\n\nII. L\n\nA. La rose des vents et les repères naturels\n\nB. Les instruments traditionnels et technologiques modernes\n\nIII. LA LECTURE ET L\n\nA. Les quatre composantes indispensables d\n\nB. Typologie des cartes géographiques\n\nIV. EXERCICES D\n\nExercice 1 : Questions de cours et définitions\n\nCorrigé détaillé de l\n\nExercice 2 : Calcul pratique d\n\nCorrigé détaillé de l\n\nCONCLUSION\nLa maîtrise des coordonnées géographiques, des points cardinaux et des composantes de la carte constitue la boîte à outils indispensable de tout élève de 4ème. Ces techniques scientifiques permettent non seulement de décoder l'espace environnant avec rigueur, mais également d'aborder avec succès l'étude physique, humaine et économique du continent africain.",
  conclusion: `La maîtrise des coordonnées géographiques, des points cardinaux et des composantes de la carte constitue la boîte à outils indispensable de tout élève de 4ème. Ces techniques scientifiques permettent non seulement de décoder l'espace environnant avec rigueur, mais également d'aborder avec succès l'étude physique, humaine et économique du continent africain.`
};

export const LESSON_2_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-2',
  number: 'LEÇON 2',
  title: 'MÉTHODOLOGIE DES GRAPHIQUES (1) – LES DIAGRAMMES',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `En géographie, les données statistiques numériques (productions agricoles, tonnages de minerais, pourcentages de populations) sont souvent présentées sous forme de longs tableaux austères difficiles à analyser immédiatement. Pour rendre ces données visuellement parlantes, faciles à comparer et immédiatement compréhensibles, le géographe recourt à la construction de diagrammes. Cette leçon détaille la méthodologie rigoureuse pour construire et réussir les diagrammes circulaires, semi-circulaires et en barres (histogrammes), en insistant sur les formules mathématiques de conversion d'angles et les règles de mise en page exigées lors des examens.`,
  diagram: {
    title: 'Schéma Récapitulatif : Les Diagrammes Statistiques en Géographie',
    root: 'LES DIAGRAMMES STATISTIQUES',
    branches: [
      {
        name: 'Diagramme Circulaire (360°)',
        subtitle: 'Répartition globale intégrale',
        items: [
          'Total équivalent à 100% = 360°',
          'Formule : Angle (°) = Pourcentage × 3,6',
          'Outils : Compas, rapporteur, règle',
          'Usage : Parts de marché, tranches d\'âge'
        ]
      },
      {
        name: 'Diagramme Semi-circulaire (180°)',
        subtitle: 'Demi-cercle de distribution',
        items: [
          'Total équivalent à 100% = 180°',
          'Formule : Angle (°) = Pourcentage × 1,8',
          'Usage : Répartitions budgétaires, parlements'
        ]
      },
      {
        name: 'Diagramme en Barres (Histogramme)',
        subtitle: 'Comparaison de grandeurs',
        items: [
          'Axe vertical : Échelle arithmétique stricte (1 cm = X unités)',
          'Largeur des barres rigoureusement égale',
          'Espacement régulier entre les barres',
          'Usage : Comparaisons de productions ou de pays'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LE DIAGRAMME CIRCULAIRE ET SEMI-CIRCULAIRE (DIAGRAMMES SECTORIELS)',
      content: [
        `Les diagrammes sectoriels (circulaires ou en camembert) sont conçus pour montrer la répartition proportionnelle d'un phénomène global divisé en plusieurs catégories.`,
        `Le principe de base est la stricte proportionnalité entre le pourcentage d'une part et l'angle au centre mesuré en degrés.`
      ],
      subsections: [
        {
          subtitle: 'A. Le diagramme circulaire complet (360°)',
          content: [
            `• Principe géométrique : La totalité du cercle représente 100% de la grandeur étudiée, ce qui correspond à un tour complet de 360°.`,
            `• Règle de trois : Si 100% équivaut à 360°, alors 1% équivaut à 360° / 100 = 3,6°.`,
            `• Formule mathématique incontournable :`,
            `  Angle en degrés (°) = Valeur en pourcentage (%) × 3,6`,
            `• Exemple pratique d'application : Répartition de la population par tranches d'âge dans un pays africain :`,
            `  - Moins de 15 ans : 40% → Angle = 40 × 3,6 = 144°`,
            `  - 15 à 64 ans : 55% → Angle = 55 × 3,6 = 198°`,
            `  - 65 ans et plus : 5% → Angle = 5 × 3,6 = 18°`,
            `  - Vérification obligatoire : 144° + 198° + 18° = 360°. La somme doit TOUJOURS être égale à 360°.`
          ]
        },
        {
          subtitle: 'B. Le diagramme semi-circulaire (180°)',
          content: [
            `• Principe géométrique : Le demi-cercle représente 100% des données, ce qui correspond à un angle plat de 180°.`,
            `• Règle de trois : Si 100% équivaut à 180°, alors 1% équivaut à 180° / 100 = 1,8°.`,
            `• Formule mathématique :`,
            `  Angle en degrés (°) = Valeur en pourcentage (%) × 1,8`,
            `• Reprenons le même exemple :`,
            `  - Moins de 15 ans (40%) → 40 × 1,8 = 72°`,
            `  - 15 à 64 ans (55%) → 55 × 1,8 = 99°`,
            `  - 65 ans et plus (5%) → 5 × 1,8 = 9°`,
            `  - Vérification : 72° + 99° + 9° = 180°.`
          ]
        },
        {
          subtitle: 'C. Étapes méthodologiques de construction',
          content: [
            `1. Tracer au compas un cercle ou demi-cercle de rayon suffisant (généralement 4 à 5 cm pour assurer une bonne lisibilité).`,
            `2. Tracer un rayon horizontal initial partant du centre vers la droite.`,
            `3. Poser le centre du rapporteur exactement sur le centre du cercle en alignant le zéro sur le rayon initial.`,
            `4. Marquer l'angle du premier secteur, tracer le rayon, puis positionner à chaque fois le rapporteur sur le nouveau rayon tracé pour mesurer le secteur suivant.`,
            `5. Colorier chaque secteur avec une couleur distincte et reporter les pourcentages à l'intérieur ou à l'aide de flèches.`,
            `6. Ajouter impérativement : le Titre en haut, la Légende explicative et la Source des données.`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 350" width="100%" height="100%">
              <rect width="700" height="350" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">CONSTRUCTION D'UN DIAGRAMME CIRCULAIRE (360°) & FORMULE</text>
              <g transform="translate(220, 180)">
                <!-- Camembert 3 tranches : 144° (0 to 144), 198° (144 to 342), 18° (342 to 360) -->
                <!-- Secteur 1: 40% = 144 deg (blue) -->
                <path d="M 0 0 L 120 0 A 120 120 0 0 1 -97.08 70.53 Z" fill="%233b82f6" stroke="white" stroke-width="2"/>
                <!-- Secteur 2: 55% = 198 deg (emerald) -->
                <path d="M 0 0 L -97.08 70.53 A 120 120 0 1 1 114.13 -37.08 Z" fill="%2310b981" stroke="white" stroke-width="2"/>
                <!-- Secteur 3: 5% = 18 deg (amber) -->
                <path d="M 0 0 L 114.13 -37.08 A 120 120 0 0 1 120 0 Z" fill="%23f59e0b" stroke="white" stroke-width="2"/>
                <circle cx="0" cy="0" r="4" fill="white"/>
                <!-- Labels -->
                <text x="40" y="70" font-size="12" font-weight="bold" fill="white">40% (144°)</text>
                <text x="-70" y="-30" font-size="12" font-weight="bold" fill="white">55% (198°)</text>
                <text x="125" y="-20" font-size="11" font-weight="bold" fill="%23b45309">5% (18°)</text>
              </g>
              <g transform="translate(430, 60)">
                <rect width="250" height="260" fill="white" stroke="%23cbd5e1" rx="12"/>
                <text x="125" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="%230f172a">FORMULES DE CONVERSION</text>
                <line x1="15" y1="34" x2="235" y2="34" stroke="%23e2e8f0"/>

                <rect x="15" y="48" width="220" height="60" fill="%23eff6ff" rx="8" stroke="%2393c5fd"/>
                <text x="25" y="68" font-size="11" font-weight="bold" fill="%231e40af">Diagramme Circulaire :</text>
                <text x="25" y="90" font-size="13" font-weight="bold" fill="%232563eb">Angle (°) = % × 3,6</text>

                <rect x="15" y="118" width="220" height="60" fill="%23ecfdf5" rx="8" stroke="%236ee7b7"/>
                <text x="25" y="138" font-size="11" font-weight="bold" fill="%23065f46">Diagramme Semi-circulaire :</text>
                <text x="25" y="160" font-size="13" font-weight="bold" fill="%23059669">Angle (°) = % × 1,8</text>

                <text x="20" y="200" font-size="10" font-weight="bold" fill="%23475569">Règle de vérification :</text>
                <text x="20" y="218" font-size="9" fill="%2364748b">• Circulaire : Somme des angles = 360°</text>
                <text x="20" y="234" font-size="9" fill="%2364748b">• Semi-circulaire : Somme = 180°</text>
                <text x="20" y="250" font-size="9" fill="%2364748b">• Les pourcentages totalisent 100%</text>
              </g>
            </svg>`,
            caption: "Figure 2 : Calcul et traçage géométrique d'un diagramme circulaire sectoriel."
          }
        }
      ]
    },
    {
      title: 'II. LE DIAGRAMME EN BARRES OU HISTOGRAMME',
      content: [
        `Le diagramme en barres est la représentation graphique optimale pour comparer des valeurs numériques absolues appartenant à des catégories distinctes et indépendantes à un moment donné (ex : comparer la production agricole de mil, de maïs et de riz au Sénégal).`
      ],
      subsections: [
        {
          subtitle: "A. Choix de l'échelle verticale et règles de traçage",
          content: [
            `• L'axe horizontal (abscisses) : Porte les différentes catégories étudiées (ex : les cultures, les pays, les régions).`,
            `• L'axe vertical (ordonnées) : Porte les valeurs chiffrées avec une échelle arithmétique régulière et obligatoire.`,
            `  - Exemple de choix d'échelle : Si la valeur maximale à représenter est de 500 000 tonnes et que la hauteur disponible est de 10 cm, on choisira : 1 cm = 50 000 tonnes (ou 1 cm = 100 000 tonnes selon la place).`,
            `• Règle d'or de construction :`,
            `  - Toutes les barres doivent obligatoirement avoir exactement la même largeur (ex : 1 cm ou 1,5 cm).`,
            `  - L'espace séparant deux barres consécutives doit être constant et régulier (ex : 0,5 cm ou 1 cm).`,
            `  - Les barres ne doivent jamais se toucher, sauf s'il s'agit d'un histogramme de classes continues.`
          ]
        },
        {
          subtitle: 'B. Les erreurs fréquentes à bannir lors des examens',
          content: [
            `1. Oublier le titre : Un graphique sans titre n'a aucune valeur scientifique.`,
            `2. Oublier l'unité sur l'axe des ordonnées : Indiquer clairement s'il s'agit de tonnes, de millions d'habitants, de milliards de FCFA ou de pourcentages.`,
            `3. Ne pas respecter la régularité de l'échelle : Écrire 10, puis 20, puis sauter subitement à 50 sur un même intervalle de 1 cm est une erreur fatale.`,
            `4. Oublier la légende ou le fléchage des catégories.`
          ]
        }
      ]
    },
    {
      title: "III. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Entraînement complet aux calculs de conversion et à l'analyse de diagrammes.`
      ],
      subsections: [
        {
          subtitle: "Exercice : Calcul d'angles pour un diagramme circulaire",
          content: [
            `Données statistiques : La répartition des terres agricoles d'une région du Sénégal est la suivante :`,
            `• Céréales vivrières (mil, maïs, sorgho) : 50%`,
            `• Cultures de rente (arachide, coton) : 35%`,
            `• Cultures maraîchères et fruitières : 15%`,
            `Questions :`,
            `1. Calculer l'angle en degrés de chaque secteur pour un diagramme circulaire complet (360°).`,
            `2. Calculer l'angle en degrés de chaque secteur si l'on souhaitait réaliser un diagramme semi-circulaire (180°).`,
            `3. Procéder à la vérification des calculs.`
          ]
        },
        {
          subtitle: 'Corrigé détaillé pas à pas',
          content: [
            `1. Calculs pour le diagramme circulaire complet (Angle = % × 3,6) :`,
            `   • Céréales vivrières : 50 × 3,6 = 180°`,
            `   • Cultures de rente : 35 × 3,6 = 126°`,
            `   • Cultures maraîchères : 15 × 3,6 = 54°`,
            `   • Vérification : 180° + 126° + 54° = 360°. Le résultat est parfaitement exact.`,
            `2. Calculs pour le diagramme semi-circulaire (Angle = % × 1,8) :`,
            `   • Céréales vivrières : 50 × 1,8 = 90°`,
            `   • Cultures de rente : 35 × 1,8 = 63°`,
            `   • Cultures maraîchères : 15 × 1,8 = 27°`,
            `   • Vérification : 90° + 63° + 27° = 180°.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 2 : MÉTHODOLOGIE DES GRAPHIQUES (1) – LES DIAGRAMMES\n\nINTRODUCTION\nEn géographie, les données statistiques numériques (productions agricoles, tonnages de minerais, pourcentages de populations) sont souvent présentées sous forme de longs tableaux austères difficiles à analyser immédiatement. Pour rendre ces données visuellement parlantes, faciles à comparer et immédiatement compréhensibles, le géographe recourt à la construction de diagrammes. Cette leçon détaille la méthodologie rigoureuse pour construire et réussir les diagrammes circulaires, semi-circulaires et en barres (histogrammes), en insistant sur les formules mathématiques de conversion d'angles et les règles de mise en page exigées lors des examens.\n\nSchéma Récapitulatif : Les Diagrammes Statistiques en Géographie\n\nRépartition globale intégrale\n\nDemi-cercle de distribution\n\nComparaison de grandeurs\n\nI. LE DIAGRAMME CIRCULAIRE ET SEMI-CIRCULAIRE (DIAGRAMMES SECTORIELS)\n\nA. Le diagramme circulaire complet (360°)\n\nB. Le diagramme semi-circulaire (180°)\n\nC. Étapes méthodologiques de construction\n\nII. LE DIAGRAMME EN BARRES OU HISTOGRAMME\n\nA. Choix de l\n\nB. Les erreurs fréquentes à bannir lors des examens\n\nIII. EXERCICES D\n\nExercice : Calcul d\n\nCorrigé détaillé pas à pas\n\nCONCLUSION\nLe diagramme circulaire et le diagramme en barres sont des outils fondamentaux d'expression graphique en géographie. Leur maîtrise rigoureuse garantit à l'élève d'obtenir le maximum de points lors des devoirs et des examens officiels.",
  conclusion: `Le diagramme circulaire et le diagramme en barres sont des outils fondamentaux d'expression graphique en géographie. Leur maîtrise rigoureuse garantit à l'élève d'obtenir le maximum de points lors des devoirs et des examens officiels.`
};

export const LESSON_3_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-3',
  number: 'LEÇON 3',
  title: 'MÉTHODOLOGIE DES GRAPHIQUES (2) – LES COURBES ET DIAGRAMMES OMBROTHERMIQUES',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `Tandis que les diagrammes analysent des situations statiques à une date donnée, les courbes géographiques traduisent la dynamique d'un phénomène qui évolue dans le temps : croissance démographique, évolution des récoltes, variation des cours mondiaux ou changements de températures. Parmi ces outils, le diagramme ombrothermique occupe une place d'honneur en géographie : il combine sur un même repère graphique les températures et les précipitations selon la célèbre formule écologique de Bagnouls et Gaussen (P = 2T). Cette leçon détaille la méthode exacte pour tracer et interpréter ces courbes indispensables.`,
  diagram: {
    title: 'Schéma Récapitulatif : Courbes Temporelles et Diagrammes Ombrothermiques',
    root: 'LES COURBES GÉOGRAPHIQUES',
    branches: [
      {
        name: 'Courbe Temporelle Simple',
        subtitle: 'Évolution continue',
        items: [
          'Axe horizontal : Temps régulier (années, mois)',
          'Axe vertical : Quantité mesurée avec échelle stricte',
          'Interprétation : Hausse, baisse, stagnation, pics'
        ]
      },
      {
        name: 'Diagramme Ombrothermique',
        subtitle: 'Règle stricte P = 2T',
        items: [
          'Axe gauche : Précipitations (P) en mm (échelle double)',
          'Axe droit : Températures (T) en °C',
          'Barres bleues pour P et courbe rouge pour T',
          'Période sèche délimitée lorsque la courbe T dépasse les barres P'
        ]
      },
      {
        name: 'Méthode d\'Analyse',
        subtitle: 'Démarche d\'interprétation',
        items: [
          '1. Présentation du graphique (titre, lieu, période)',
          '2. Description de l\'évolution globale et des phases',
          '3. Explication géographique des causes et conséquences'
        ]
      }
    ]
  },
  sections: [
    {
      title: "I. LA COURBE D'ÉVOLUTION TEMPORELLE (LINÉAIRE)",
      content: [
        `La courbe d'évolution est employée chaque fois que l'on veut observer comment une variable quantitative augmente, diminue ou se stabilise au fil du temps (ex : l'évolution de la population africaine entre 1960 et 2026).`
      ],
      subsections: [
        {
          subtitle: 'A. Règles de construction des axes',
          content: [
            `• Axe horizontal des abscisses (X) : Il est toujours et obligatoirement réservé au temps (les années, les décennies, les mois). L'intervalle entre deux années consécutives doit être rigoureusement constant (ex : 1 cm = 5 ans).`,
            `• Axe vertical des ordonnées (Y) : Il porte la grandeur mesurée (millions d'habitants, tonnes de céréales, etc.). L'échelle arithmétique doit être clairement précisée (ex : 1 cm = 10 millions d'habitants).`,
            `• Placement des points : Chaque point correspond au croisement exact entre l'année en abscisse et la valeur correspondante en ordonnée.`,
            `• Traçage : Les points sont reliés entre eux par un trait continu fin, tracé à la règle si l'évolution est discontinue, ou à main levée fluide s'il s'agit d'une tendance continue.`
          ]
        },
        {
          subtitle: "B. Méthode d'interprétation d'une courbe en 3 étapes",
          content: [
            `1. Identifier la tendance générale : Le phénomène est-il en croissance (hausse), en régression (baisse) ou en stagnation (stabilité) ?`,
            `2. Découper en périodes homogènes : Repérer les dates de rupture, les accélérations brutales ou les ralentissements.`,
            `3. Relever les valeurs extrêmes : Préciser le maximum (pic le plus haut) et le minimum (creux le plus bas) avec leurs dates respectives.`
          ]
        }
      ]
    },
    {
      title: 'II. LE DIAGRAMME OMBROTHERMIQUE (COMBINAISON CLIMATIQUE)',
      content: [
        `Le diagramme ombrothermique (du grec « ombros » qui signifie pluie et « thermos » qui signifie chaleur) est le graphique spécialisé par excellence pour caractériser le climat d'une région donnée.`,
        `Il superpose les précipitations mensuelles moyennes et les températures moyennes mensuelles sur les 12 mois de l'année.`
      ],
      subsections: [
        {
          subtitle: 'A. La règle stricte de correspondance P = 2T (Gaussen)',
          content: [
            `Pour que le graphique permette d'identifier visuellement les mois biologiquement secs pour les plantes et l'agriculture, les botanistes Gaussen et Bagnouls ont établi la règle mathématique universelle :`,
            `L'échelle des précipitations (P en millimètres) doit être exactement le double de celle des températures (T en degrés Celsius).`,
            `• Ainsi, si 1 cm représente 10°C sur l'axe des températures à droite, 1 cm doit obligatoirement représenter 20 mm sur l'axe des précipitations à gauche.`,
            `• Si 20°C correspond à une hauteur de 2 cm, 40 mm doit être tracé à cette même hauteur de 2 cm.`
          ]
        },
        {
          subtitle: 'B. Convention des couleurs et identification de la saison sèche',
          content: [
            `• Les 12 mois de l'année (J, F, M, A, M, J, J, A, S, O, N, D) sont placés sur l'axe horizontal.`,
            `• Les précipitations sont dessinées sous forme de barres ou colonnes verticales bleu foncé (axe vertical gauche).`,
            `• Les températures sont dessinées sous forme d'une courbe continue rouge vif reliant les moyennes mensuelles (axe vertical droit).`,
            `• Définition du mois sec : Un mois est dit biologiquement sec lorsque la quantité de pluie en millimètres est inférieure au double de la température en degrés : P < 2T.`,
            `• Sur le graphique, la saison sèche correspond à la période où la courbe rouge des températures passe AU-DESSUS des barres bleues de précipitations. Cette zone est traditionnellement coloriée en jaune ou hachurée.`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 360" width="100%" height="100%">
              <rect width="700" height="360" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">DIAGRAMME OMBROTHERMIQUE SAHÉLIEN TYPE (ST-LOUIS / DAKAR)</text>
              <g transform="translate(70, 60)">
                <!-- Cadre du graphique -->
                <rect width="480" height="230" fill="white" stroke="%23cbd5e1"/>
                <!-- Axe P (gauche) : 0 à 200 mm -->
                <text x="-45" y="12" font-size="10" font-weight="bold" fill="%232563eb">P (mm)</text>
                <text x="-10" y="234" text-anchor="end" font-size="9" fill="%232563eb">0</text>
                <text x="-10" y="179" text-anchor="end" font-size="9" fill="%232563eb">50</text>
                <text x="-10" y="124" text-anchor="end" font-size="9" fill="%232563eb">100</text>
                <text x="-10" y="69" text-anchor="end" font-size="9" fill="%232563eb">150</text>
                <text x="-10" y="14" text-anchor="end" font-size="9" fill="%232563eb">200</text>

                <!-- Axe T (droite) : 0 à 100°C (règle P = 2T) -->
                <text x="525" y="12" font-size="10" font-weight="bold" fill="%23dc2626">T (°C)</text>
                <text x="490" y="234" font-size="9" fill="%23dc2626">0°</text>
                <text x="490" y="179" font-size="9" fill="%23dc2626">25°</text>
                <text x="490" y="124" font-size="9" fill="%23dc2626">50°</text>

                <!-- Lignes de repères -->
                <line x1="0" y1="175" x2="480" y2="175" stroke="%23f1f5f9" stroke-width="1"/>
                <line x1="0" y1="120" x2="480" y2="120" stroke="%23f1f5f9" stroke-width="1"/>
                <line x1="0" y1="65" x2="480" y2="65" stroke="%23f1f5f9" stroke-width="1"/>

                <!-- Mois J F M A M J J A S O N D (largeur 40px chaque) -->
                <!-- Barres de pluie P (mm): J=0, F=0, M=0, A=0, M=2, J=15, J=75, A=180, S=110, O=20, N=1, D=0 -->
                <rect x="202" y="213" width="36" height="17" fill="%2360a5fa"/> <!-- Juin 15mm -->
                <rect x="242" y="148" width="36" height="82" fill="%233b82f6"/> <!-- Juil 75mm -->
                <rect x="282" y="32" width="36" height="198" fill="%231d4ed8"/> <!-- Août 180mm -->
                <rect x="322" y="109" width="36" height="121" fill="%232563eb"/> <!-- Sept 110mm -->
                <rect x="362" y="208" width="36" height="22" fill="%2360a5fa"/> <!-- Oct 20mm -->

                <!-- Zone sèche hachurée en jaune là où T > P -->
                <polygon points="2,175 40,173 80,170 120,165 160,160 200,158 240,165 240,230 2,230" fill="%23fef08a" opacity="0.4"/>
                <polygon points="360,160 400,162 440,168 480,174 480,230 360,230" fill="%23fef08a" opacity="0.4"/>

                <!-- Courbe rouge des températures : 22, 23, 25, 27, 28, 29, 28, 27, 28, 29, 27, 24 -->
                <!-- Échelle T: 25°C = 175px (y = 230 - T*2.2) -->
                <polyline points="20,181 60,179 100,175 140,170 180,168 220,166 260,168 300,170 340,168 380,166 420,170 460,177"
                          fill="none" stroke="%23dc2626" stroke-width="3"/>
                <!-- Points rouges -->
                <circle cx="20" cy="181" r="3" fill="%23dc2626"/>
                <circle cx="60" cy="179" r="3" fill="%23dc2626"/>
                <circle cx="100" cy="175" r="3" fill="%23dc2626"/>
                <circle cx="140" cy="170" r="3" fill="%23dc2626"/>
                <circle cx="180" cy="168" r="3" fill="%23dc2626"/>
                <circle cx="220" cy="166" r="3" fill="%23dc2626"/>
                <circle cx="260" cy="168" r="3" fill="%23dc2626"/>
                <circle cx="300" cy="170" r="3" fill="%23dc2626"/>
                <circle cx="340" cy="168" r="3" fill="%23dc2626"/>
                <circle cx="380" cy="166" r="3" fill="%23dc2626"/>
                <circle cx="420" cy="170" r="3" fill="%23dc2626"/>
                <circle cx="460" cy="177" r="3" fill="%23dc2626"/>

                <!-- Libellés des mois -->
                <text x="20" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">J</text>
                <text x="60" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">F</text>
                <text x="100" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">M</text>
                <text x="140" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">A</text>
                <text x="180" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">M</text>
                <text x="220" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">J</text>
                <text x="260" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">J</text>
                <text x="300" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">A</text>
                <text x="340" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">S</text>
                <text x="380" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">O</text>
                <text x="420" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">N</text>
                <text x="460" y="246" text-anchor="middle" font-size="9" font-weight="bold" fill="%23475569">D</text>

                <!-- Annotations -->
                <text x="90" y="205" font-size="10" font-weight="bold" fill="%23ca8a04">SAISON SÈCHE (P &lt; 2T)</text>
                <text x="270" y="20" font-size="10" font-weight="bold" fill="%231d4ed8">Hivernage (Pluies concentrées)</text>
              </g>
              <g transform="translate(565, 75)">
                <rect width="125" height="200" fill="white" stroke="%23cbd5e1" rx="8"/>
                <text x="62" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="%230f172a">LÉGENDE</text>
                <line x1="10" y1="26" x2="115" y2="26" stroke="%23e2e8f0"/>
                <rect x="12" y="38" width="14" height="14" fill="%232563eb" rx="2"/>
                <text x="32" y="50" font-size="8.5" font-weight="bold" fill="%231e3a8a">Précipitations (P)</text>
                <line x1="12" y1="75" x2="26" y2="75" stroke="%23dc2626" stroke-width="3"/>
                <circle cx="19" cy="75" r="3" fill="%23dc2626"/>
                <text x="32" y="78" font-size="8.5" font-weight="bold" fill="%23991b1b">Température (T)</text>
                <rect x="12" y="100" width="14" height="14" fill="%23fef08a" stroke="%23ca8a04"/>
                <text x="32" y="112" font-size="8.5" fill="%23713f12">Période sèche</text>
                <text x="12" y="145" font-size="8.5" font-weight="bold" fill="%230f172a">Règle Gaussen :</text>
                <text x="12" y="162" font-size="10" font-weight="bold" fill="%232563eb">P = 2T</text>
                <text x="12" y="180" font-size="8" fill="%2364748b">Si T &gt; P → Sécheresse</text>
              </g>
            </svg>`,
            caption: 'Figure 3 : Diagramme ombrothermique sahélien avec application stricte de la formule P = 2T.'
          }
        }
      ]
    },
    {
      title: "III. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Cas pratique de lecture et d'analyse d'un diagramme ombrothermique.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : Analyse climatique',
          content: [
            `À partir du diagramme ombrothermique ci-dessus :`,
            `1. Quelle est la règle fondamentale d'échelle liant les précipitations et les températures ?`,
            `2. Citer les mois qui constituent la saison des pluies (hivernage).`,
            `3. Combien de mois dure la saison sèche ? Quel problème majeur cela pose-t-il pour l'agriculture pluviale ?`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Règle fondamentale : La règle de Gaussen impose que l'échelle des précipitations en mm soit exactement le double de celle des températures en °C (P = 2T).`,
            `2. La saison des pluies s'étend de juillet à septembre (avec un début timide en juin et une fin en octobre). Le pic de pluie se situe en août avec 180 mm.`,
            `3. La saison sèche dure près de 8 à 9 mois (de novembre à mai/juin). Conséquence agricole : L'agriculture pluviale ne peut être pratiquée que pendant 3 à 4 mois par an, ce qui expose les paysans au sous-emploi saisonnier et impose le recours à l'irrigation pour cultiver en saison sèche.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 3 : MÉTHODOLOGIE DES GRAPHIQUES (2) – LES COURBES ET DIAGRAMMES OMBROTHERMIQUES\n\nINTRODUCTION\nTandis que les diagrammes analysent des situations statiques à une date donnée, les courbes géographiques traduisent la dynamique d'un phénomène qui évolue dans le temps : croissance démographique, évolution des récoltes, variation des cours mondiaux ou changements de températures. Parmi ces outils, le diagramme ombrothermique occupe une place d'honneur en géographie : il combine sur un même repère graphique les températures et les précipitations selon la célèbre formule écologique de Bagnouls et Gaussen (P = 2T). Cette leçon détaille la méthode exacte pour tracer et interpréter ces courbes indispensables.\n\nSchéma Récapitulatif : Courbes Temporelles et Diagrammes Ombrothermiques\n\nÉvolution continue\n\nRègle stricte P = 2T\n\nDémarche d\\\n\nI. LA COURBE D\n\nA. Règles de construction des axes\n\nB. Méthode d\n\nII. LE DIAGRAMME OMBROTHERMIQUE (COMBINAISON CLIMATIQUE)\n\nA. La règle stricte de correspondance P = 2T (Gaussen)\n\nB. Convention des couleurs et identification de la saison sèche\n\nIII. EXERCICES D\n\nExercice : Analyse climatique\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nLa maîtrise des courbes et du diagramme ombrothermique permet à l'élève d'analyser scientifiquement les rythmes climatiques et environnementaux qui gouvernent la vie rurale en Afrique.",
  conclusion: `La maîtrise des courbes et du diagramme ombrothermique permet à l'élève d'analyser scientifiquement les rythmes climatiques et environnementaux qui gouvernent la vie rurale en Afrique.`
};

export const LESSON_4_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-4',
  number: 'LEÇON 4',
  title: 'MÉTHODOLOGIE DE LA DISSERTATION EN HISTOIRE-GÉOGRAPHIE',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `La dissertation en Histoire-Géographie est un exercice d'argumentation rédigé, structuré et cohérent. Elle a pour objectif de vérifier si l'élève a assimilé les connaissances du cours et s'il est capable de les organiser logiquement pour répondre à une question centrale appelée problématique. Loin d'être un simple étalage de mémoire ou un résumé désordonné, la dissertation répond à des règles formelles d'architecture intellectuelle universelles : une introduction rigoureuse en 3 étapes, un développement équilibré en parties et sous-parties, et une conclusion en 2 étapes. Cette leçon détaille la méthodologie pas à pas avec des exemples concrets.`,
  diagram: {
    title: 'Schéma Récapitulatif : L\'Architecture d\'une Dissertation Réussie',
    root: 'STRUCTURE DE LA DISSERTATION',
    branches: [
      {
        name: '1. L\'Introduction (3 Étapes)',
        subtitle: 'Indissociable et sans titre',
        items: [
          'Étape 1 : Amener le sujet (contexte général et repères)',
          'Étape 2 : Poser la problématique (la question centrale)',
          'Étape 3 : Annoncer le plan (les 2 ou 3 grandes parties)'
        ]
      },
      {
        name: '2. Le Développement',
        subtitle: 'Argumentation équilibrée',
        items: [
          'Grandes parties articulées par des transitions fluides',
          'Chaque paragraphe = 1 idée principale + 1 explication + 1 exemple',
          'Pas de titres rédigés de type "I." ou "II." sur la copie d\'examen'
        ]
      },
      {
        name: '3. La Conclusion (2 Étapes)',
        subtitle: 'Clôture de la démonstration',
        items: [
          'Étape 1 : Le bilan (réponse synthétique à la problématique)',
          'Étape 2 : L\'ouverture (perspective future ou élargissement spatial)'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LA PHASE PRÉPARATOIRE : ANALYSE DU SUJET AU BROUILLON',
      content: [
        `Avant de rédiger la moindre ligne sur sa copie d'examen, l'élève doit consacrer au moins 15 à 20 minutes au travail préparatoire sur sa feuille de brouillon.`,
        `Cette phase garantit d'éviter le piège fatal du hors-sujet.`
      ],
      subsections: [
        {
          subtitle: 'A. Décortiquer le sujet et définir les mots-clés',
          content: [
            `• Lire le sujet plusieurs fois attentivement : Repérer chaque mot sans en négliger aucun.`,
            `• Délimiter le cadre spatial et temporel : Dans quelle zone géographique se déroule le sujet (Sénégal, Afrique de l'Ouest, Afrique tout entière) ? À quelle époque (actuelle, contemporaine) ?`,
            `• Définir les concepts clés : Qu'entend-on par « contraintes physiques », « transition démographique », « intégration régionale » ? Définir ces termes évite les confusions.`,
            `• Identifier la consigne implicite ou explicite : S'agit-il de comparer, d'expliquer les causes et conséquences, ou d'évaluer des atouts et des faiblesses ?`
          ]
        },
        {
          subtitle: 'B. Mobiliser les connaissances et élaborer le plan détaillé',
          content: [
            `• Le remue-méninges (brainstorming) : Noter sur le brouillon toutes les idées, exemples précis, chiffres et faits qui se rapportent au sujet.`,
            `• Regrouper les idées en 2 ou 3 grands centres d'intérêt qui formeront les parties du plan :`,
            `  - Plan thématique classique : Causes / Conséquences / Solutions.`,
            `  - Plan dialectique : Atouts / Contraintes / Perspectives.`,
            `  - Plan comparatif : Deux espaces ou deux systèmes économiques face à face.`
          ]
        }
      ]
    },
    {
      title: "II. LA STRUCTURE RIGOREUSE DE LA RÉDACTION",
      content: [
        `Une dissertation réussie ressemble à un édifice harmonieux où chaque bloc a une fonction précise.`
      ],
      subsections: [
        {
          subtitle: "A. L'Introduction (obligatoirement en 3 étapes)",
          content: [
            `L'introduction est le premier contact du correcteur avec votre travail. Elle doit être rédigée d'un seul bloc (un seul paragraphe) et comporter obligatoirement :`,
            `1. Amener le sujet (Accroche) : Situer le sujet dans son contexte géographique ou historique général en partant d'une idée large pour rétrécir vers le thème.`,
            `2. Poser la problématique : Formuler sous forme de question directe ou indirecte le problème central que soulève le sujet.`,
            `3. Annoncer le plan : Présenter clairement et avec élégance les deux ou trois axes majeurs qui seront développés (ex : « Dans un premier temps, nous analyserons... avant d'examiner dans un second temps... »).`
          ]
        },
        {
          subtitle: 'B. Le Développement : argumentation et exemples',
          content: [
            `• Organisation en paragraphes : Chaque idée principale fait l'objet d'un paragraphe distinct commençant par un alinéa (deux carreaux en retrait).`,
            `• La formule de l'argumentation : Idée directrice + Explication scientifique approfondie + Exemple précis chiffré ou localisé.`,
            `• Les transitions : À la fin de chaque grande partie, une phrase de transition fait le bilan de ce qui vient d'être dit et annonce logiquement la partie suivante.`
          ]
        },
        {
          subtitle: 'C. La Conclusion (obligatoirement en 2 étapes)',
          content: [
            `La conclusion apporte la réponse définitive à la problématique posée au départ :`,
            `1. Le bilan récapitulatif : Résumer en deux ou trois phrases les conclusions majeures de votre démonstration sans JAMAIS introduire un fait nouveau qui n'a pas été développé plus haut.`,
            `2. L'ouverture : Élargir le sujet vers une perspective future, un défi environnemental à venir ou une comparaison avec une autre région du monde.`
          ]
        }
      ]
    },
    {
      title: "III. CONSEILS DE PRÉSENTATION ET EXERCICE PRATIQUE",
      content: [
        `L'esthétique et la propreté de la copie jouent un rôle majeur dans l'évaluation.`
      ],
      subsections: [
        {
          subtitle: 'A. Règles de présentation de la copie',
          content: [
            `• Sauter 2 lignes entre l'introduction et le développement.`,
            `• Sauter 1 ligne entre les grandes parties du développement.`,
            `• Sauter 2 lignes entre le développement et la conclusion.`,
            `• Ne JAMAIS écrire les titres « Introduction », « I. », « II. » ou « Conclusion » sur la copie : la mise en page et les alinéas doivent suffire à guider la lecture du correcteur.`
          ]
        },
        {
          subtitle: "B. Exercice d'application : Rédiger une introduction type",
          content: [
            `Sujet : « L'inégale répartition de la population en Afrique : atouts et contraintes pour le développement. »`,
            `Consigne : Rédiger sur votre feuille l'introduction complète respectant les trois étapes obligatoires.`
          ]
        },
        {
          subtitle: "Corrigé type de l'introduction",
          content: [
            `Modèle d'introduction rédigée :`,
            `« Avec plus de 30 millions de kilomètres carrés et une population dépassant 1,4 milliard d'habitants, l'Afrique est un continent caractérisé par de spectaculaires contrastes spatiaux. Tandis que de vastes déserts comme le Sahara restent presque vides d'hommes, des foyers hyper-peuplés s'étirent le long du golfe de Guinée ou de la vallée du Nil. Dès lors, on peut se demander quels sont les facteurs qui expliquent cette inégale répartition du peuplement africain et en quoi cette configuration constitue à la fois un atout démographique et un frein au développement économique du continent ? Pour répondre à cette question, nous analyserons d'abord les facteurs géographiques et historiques de cette distribution spatiale, puis nous évaluerons les conséquences socio-économiques de cette concentration humaine. »`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 4 : MÉTHODOLOGIE DE LA DISSERTATION EN HISTOIRE-GÉOGRAPHIE\n\nINTRODUCTION\nLa dissertation en Histoire-Géographie est un exercice d'argumentation rédigé, structuré et cohérent. Elle a pour objectif de vérifier si l'élève a assimilé les connaissances du cours et s'il est capable de les organiser logiquement pour répondre à une question centrale appelée problématique. Loin d'être un simple étalage de mémoire ou un résumé désordonné, la dissertation répond à des règles formelles d'architecture intellectuelle universelles : une introduction rigoureuse en 3 étapes, un développement équilibré en parties et sous-parties, et une conclusion en 2 étapes. Cette leçon détaille la méthodologie pas à pas avec des exemples concrets.\n\nSchéma Récapitulatif : L\\\n\nIndissociable et sans titre\n\nArgumentation équilibrée\n\nClôture de la démonstration\n\nI. LA PHASE PRÉPARATOIRE : ANALYSE DU SUJET AU BROUILLON\n\nA. Décortiquer le sujet et définir les mots-clés\n\nB. Mobiliser les connaissances et élaborer le plan détaillé\n\nII. LA STRUCTURE RIGOREUSE DE LA RÉDACTION\n\nA. L\n\nB. Le Développement : argumentation et exemples\n\nC. La Conclusion (obligatoirement en 2 étapes)\n\nIII. CONSEILS DE PRÉSENTATION ET EXERCICE PRATIQUE\n\nA. Règles de présentation de la copie\n\nB. Exercice d\n\nCorrigé type de l\n\nCONCLUSION\nLa dissertation en géographie récompense la clarté de la pensée et la rigueur de l'argumentation. En s'entraînant régulièrement à respecter les trois étapes de l'introduction et les deux étapes de la conclusion, l'élève développe son esprit de synthèse et s'assure d'excellentes notes.",
  conclusion: `La dissertation en géographie récompense la clarté de la pensée et la rigueur de l'argumentation. En s'entraînant régulièrement à respecter les trois étapes de l'introduction et les deux étapes de la conclusion, l'élève développe son esprit de synthèse et s'assure d'excellentes notes.`
};

export const LESSON_5_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-5',
  number: 'LEÇON 5',
  title: 'MÉTHODOLOGIE DU COMMENTAIRE DE DOCUMENTS',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `Le commentaire de documents est la seconde grande épreuve canonique d'évaluation en Histoire et en Géographie. Il consiste à étudier, analyser, expliquer et critiquer un ensemble de documents scientifiques mis à la disposition de l'élève : un texte d'auteur ou de presse, un tableau statistique numérique, une carte thématique ou une photographie de paysage. L'objectif de l'épreuve n'est ni de réciter son cours par cœur sans regarder les documents, ni de recopier passivement le texte. Il s'agit de croiser les informations fournies par les documents avec les connaissances théoriques acquises en classe pour répondre à un questionnaire directif.`,
  diagram: {
    title: 'Schéma Récapitulatif : Les 3 Piliers du Commentaire de Documents',
    root: 'LE COMMENTAIRE DE DOCUMENTS',
    branches: [
      {
        name: '1. Phase de Présentation',
        subtitle: 'Fiche d\'identité du document',
        items: [
          'Nature : Texte, tableau statistique, carte, photo',
          'Auteur : Qualité, fonction, nationalité',
          'Source & Date : Titre de l\'ouvrage, année de parution',
          'Idée générale : Thème central en une phrase'
        ]
      },
      {
        name: '2. Phase d\'Analyse',
        subtitle: 'Exploitation des données',
        items: [
          'Repérage des faits et des données chiffrées',
          'Bannir la paraphrase (reformuler avec ses propres mots)',
          'Justifier systématiquement par des citations ou chiffres'
        ]
      },
      {
        name: '3. Phase d\'Explication & Critique',
        subtitle: 'Apport personnel',
        items: [
          'Expliquer le « Pourquoi » et le « Comment » avec le cours',
          'Évaluer la portée, l\'intérêt et les limites du document'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LA PRÉSENTATION COMPLÈTE DU DOCUMENT',
      content: [
        `La première question d'un devoir de commentaire de documents demande presque toujours de présenter le ou les documents.`,
        `Cette présentation obéit à la règle mnémonique universelle des « 4 critères » : Nature, Auteur, Source/Date, Idée générale.`
      ],
      subsections: [
        {
          subtitle: 'A. Les quatre critères d\'identification obligatoire',
          content: [
            `1. La Nature : Préciser le type exact de document :`,
            `   - Texte (article de presse, extrait d'un rapport de l'ONU, discours politique, extrait d'un manuel).`,
            `   - Tableau statistique (données numériques de production, de population ou de commerce).`,
            `   - Carte thématique ou topographique.`,
            `   - Photographie aérienne ou image satellite.`,
            `2. L'Auteur : Qui a produit le document ? Préciser son nom, son statut professionnel ou l'organisme émetteur (ex : Banque Mondiale, FAO, ANSD du Sénégal, géographe spécialiste).`,
            `3. La Source et la Date : Dans quel ouvrage, revue ou site internet officiel le document a-t-il été publié ? En quelle année ? La date permet de savoir si les données sont récentes ou historiques.`,
            `4. L'Idée générale : Résumer en une seule phrase claire et concise le message essentiel ou le thème central traité par le document.`
          ]
        }
      ]
    },
    {
      title: "II. LA TECHNIQUE DE RÉPONSE AUX QUESTIONS D'ANALYSE",
      content: [
        `Après la présentation, le sujet propose une série de questions directrices auxquelles l'élève doit répondre avec méthode.`
      ],
      subsections: [
        {
          subtitle: 'A. Le piège absolu : la paraphrase',
          content: [
            `• Qu'est-ce que la paraphrase ? C'est le fait de recopier mot à mot de longues phrases du document en croyant avoir répondu. La paraphrase est sévèrement sanctionnée par les correcteurs.`,
            `• Comment répondre correctement ?`,
            `  - Il faut reformuler l'information avec ses propres mots de vocabulaire géographique.`,
            `  - Si l'on cite une expression remarquable du texte, elle doit obligatoirement être placée entre guillemets (« ... ») et être immédiatement suivie d'une explication personnelle.`
          ]
        },
        {
          subtitle: 'B. Le traitement des tableaux statistiques',
          content: [
            `Lorsqu'il s'agit d'analyser un tableau de chiffres :`,
            `• Ne pas se contenter de réécrire les chiffres du tableau.`,
            `• Classer les données : repérer le pays ou la catégorie qui est au premier rang (maximum) et au dernier rang (minimum).`,
            `• Calculer les écarts ou les taux d'évolution pour enrichir la réponse (ex : « Le pays A produit trois fois plus que le pays B »).`
          ]
        }
      ]
    },
    {
      title: "III. L'EXPLICATION ET LA CRITIQUE DU DOCUMENT",
      content: [
        `C'est dans cette dernière partie que l'élève démontre son intelligence géographique en apportant ses connaissances personnelles.`
      ],
      subsections: [
        {
          subtitle: 'A. Éclairer le document grâce au cours',
          content: [
            `Le document décrit généralement ce qui se passe (les faits). L'élève doit expliquer pourquoi cela se passe ainsi (les causes scientifiques) et quelles en sont les répercussions (les conséquences).`,
            `Exemple : Si le document montre une forte baisse des récoltes d'arachide au Sénégal, l'élève mobilisera son cours sur les sécheresses récurrentes, la dégradation des sols et la baisse des subventions aux semences.`
          ]
        },
        {
          subtitle: 'B. Évaluer la portée et les limites du document',
          content: [
            `• La portée : Quel est l'intérêt de ce document ? Que nous apprend-il d'essentiel sur la réalité du territoire étudié ?`,
            `• Les limites ou non-dits : Le document est-il incomplet ? L'auteur a-t-il omis de mentionner certains facteurs importants ? Les données chiffrées sont-elles trop anciennes ?`
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICE PRATIQUE ET CORRIGÉ D'UN COMMENTAIRE",
      content: [
        `Mise en pratique sur un document officiel.`
      ],
      subsections: [
        {
          subtitle: "Exercice : Présentation d'un document",
          content: [
            `Document : « En Afrique subsaharienne, l'urbanisation s'opère à un rythme sans précédent dans l'histoire de l'humanité. Alors qu'en 1960 moins de 15% de la population vivait en ville, ce taux atteint aujourd'hui plus de 42% et devrait dépasser 55% en 2040. Mais cette croissance urbaine foudroyante génère des bidonvilles géants, des coupures d'eau et une saturation des transports. »`,
            `Source : Rapport ONU-Habitat sur l'état des villes africaines, Nairobi, 2023.`,
            `Consigne : Présenter ce document selon les 4 critères officiels.`
          ]
        },
        {
          subtitle: 'Corrigé type de la présentation',
          content: [
            `• Nature : Extrait d'un rapport officiel d'une organisation internationale (ONU-Habitat).`,
            `• Auteur : L'agence des Nations Unies pour les établissements humains (ONU-Habitat).`,
            `• Source et Date : Rapport sur l'état des villes africaines, publié à Nairobi en 2023.`,
            `• Idée générale : La croissance urbaine explosive en Afrique subsaharienne et les multiples défis sociaux et d'infrastructures qu'elle engendre.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 5 : MÉTHODOLOGIE DU COMMENTAIRE DE DOCUMENTS\n\nINTRODUCTION\nLe commentaire de documents est la seconde grande épreuve canonique d'évaluation en Histoire et en Géographie. Il consiste à étudier, analyser, expliquer et critiquer un ensemble de documents scientifiques mis à la disposition de l'élève : un texte d'auteur ou de presse, un tableau statistique numérique, une carte thématique ou une photographie de paysage. L'objectif de l'épreuve n'est ni de réciter son cours par cœur sans regarder les documents, ni de recopier passivement le texte. Il s'agit de croiser les informations fournies par les documents avec les connaissances théoriques acquises en classe pour répondre à un questionnaire directif.\n\nSchéma Récapitulatif : Les 3 Piliers du Commentaire de Documents\n\nFiche d\\\n\nExploitation des données\n\nApport personnel\n\nI. LA PRÉSENTATION COMPLÈTE DU DOCUMENT\n\nA. Les quatre critères d\\\n\nII. LA TECHNIQUE DE RÉPONSE AUX QUESTIONS D\n\nA. Le piège absolu : la paraphrase\n\nB. Le traitement des tableaux statistiques\n\nIII. L\n\nA. Éclairer le document grâce au cours\n\nB. Évaluer la portée et les limites du document\n\nIV. EXERCICE PRATIQUE ET CORRIGÉ D\n\nExercice : Présentation d\n\nCorrigé type de la présentation\n\nCONCLUSION\nLe commentaire de documents développe l'esprit critique, la capacité d'analyse et l'autonomie intellectuelle de l'élève. Il prépare idéalement aux épreuves du Brevet (BFEM) et aux exigences du second cycle.",
  conclusion: `Le commentaire de documents développe l'esprit critique, la capacité d'analyse et l'autonomie intellectuelle de l'élève. Il prépare idéalement aux épreuves du Brevet (BFEM) et aux exigences du second cycle.`
};
