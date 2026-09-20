import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE 4ÈME - QUATRIÈME PARTIE : GÉOGRAPHIE RÉGIONALE ET ENVIRONNEMENT
// CONFORME AU PROGRAMME OFFICIEL DU MINISTÈRE DE L'ÉDUCATION NATIONALE DU SÉNÉGAL
// LEÇONS 15 À 17 : COURS INTÉGRAUX DÉTAILLÉS, SCHÉMAS VECTORIELS, EXERCICES & CORRIGÉS
// =========================================================================

export const LESSON_15_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-15',
  number: 'LEÇON 15',
  title: 'ÉTUDE ÉCONOMIQUE D\'UNE RÉGION AFRICAINE – L\'AGRICULTURE',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `L'agriculture constitue le véritable cœur battant de l'économie africaine. Elle emploie plus de 55% à 60% de la population active continentale et contribue de manière substantielle au Produit Intérieur Brut (PIB) de la plupart des États subsahariens. Pourtant, l'agriculture africaine est profondément duale : elle oppose un vaste secteur vivrier familial traditionnel, reposant sur des techniques ancestrales et tributaire des caprices de la pluie, à un secteur commercial d'exportation hérité de la période coloniale, orienté vers la vente de produits bruts sur le marché mondial (cacao, café, arachide, coton). Cette leçon analyse cette dualité agraire, la place de l'élevage et de la pêche, ainsi que les défis de la souveraineté alimentaire.`,
  diagram: {
    title: 'Schéma Récapitulatif : Le Dualisme Agricole Africain',
    root: 'L\'AGRICULTURE AFRICAINE',
    branches: [
      {
        name: 'Agriculture Vivrière',
        subtitle: 'Sécurité alimentaire locale',
        items: [
          'Céréales sèches sahéliennes : mil, sorgho, maïs, fonio',
          'Tubercules des zones humides : manioc, igname, patate douce',
          'Riziculture (Casamance, delta du fleuve Sénégal, Madagascar)',
          'Contraintes : dépendance de la pluie, outillage manuel rudimentaire (daba, hilaire)'
        ]
      },
      {
        name: 'Agriculture de Rente',
        subtitle: 'Cultures d\'exportation',
        items: [
          'Arachide au Sénégal (Bassin arachidier : Kaolack, Diourbel)',
          'Cacao et café : Côte d\'Ivoire (n°1 mondial du cacao) et Ghana',
          'Coton : Mali, Burkina Faso, Bénin (« or blanc »)',
          'Vulnérabilité : fluctuations imprévisibles des cours boursiers mondiaux'
        ]
      },
      {
        name: 'Élevage & Pêche',
        subtitle: 'Protéines et pastoralisme',
        items: [
          'Élevage pastoral transhumant sahélien (zébus, moutons, chèvres)',
          'Pêche artisanale très active le long des côtes sénégalaises',
          'Pêche industrielle et défi du pillage par les chalutiers étrangers'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. L\'AGRICULTURE VIVRIÈRE TRADITIONNELLE ET L\'AUTOSUBSTANCE',
      content: [
        `L'agriculture vivrière est destinée en priorité à nourrir la famille du paysan et les marchés locaux des villages et des villes.`
      ],
      subsections: [
        {
          subtitle: 'A. La répartition des cultures vivrières selon les zones climatiques',
          content: [
            `• Dans la zone sahélienne et soudanienne (Sénégal, Mali, Niger, Burkina Faso) : Les céréales rustiques dominent car elles supportent la rareté des pluies : le mil (petit mil et sorgho), le maïs, le niébé (haricot local) et le fonio.`,
            `• Dans la zone forestière et équatoriale humide (golfe de Guinée, Afrique centrale) : Les racines et tubercules riches en féculents constituent la base alimentaire : le manioc, l'igname, le taro et la banane plantain.`,
            `• Le riz : Consommé massivement en ville, il est cultivé de manière traditionnelle en Casamance et de façon irriguée intensive dans la vallée du fleuve Sénégal grâce aux aménagements de la SAED.`
          ]
        },
        {
          subtitle: 'B. Les faiblesses techniques et le déficit vivrier',
          content: [
            `• Un outillage manuel encore rudimentaire : La daba, la houe, la machette et l'hilaire restent les outils prédominants ; la mécanisation (tracteurs) demeure marginale.`,
            `• L'extrême dépendance de la pluie : Moins de 6% des terres cultivées en Afrique subsaharienne sont irriguées. Une baisse de la pluviométrie entraîne immédiatement des famines locales.`,
            `• Faiblesse des rendements et insuffisance des silos de stockage post-récolte face aux attaques des rongeurs et insectes.`
          ]
        }
      ]
    },
    {
      title: 'II. L\'AGRICULTURE COMMERCIALE OU AGRICULTURE DE RENTE',
      content: [
        `Mise en place pendant la colonisation pour approvisionner les métropoles européennes en matières premières bon marché, l'agriculture commerciale rapporte des devises aux États mais pose de lourds problèmes structurels.`
      ],
      subsections: [
        {
          subtitle: 'A. Les grandes filières de cultures de rente',
          content: [
            `• Le cacao : La Côte d'Ivoire est le premier producteur mondial (plus de 40% de l'offre planétaire), suivie de près par le Ghana.`,
            `• Le café : Cultivé principalement en Éthiopie (berceau historique du café arabica), en Ouganda et en Côte d'Ivoire.`,
            `• L'arachide : Pilier économique historique du Sénégal (Bassin arachidier : Kaolack, Fatick, Kaffrine, Diourbel) transformée en huile par la Sonacos.`,
            `• Le coton : Surnommé « l'or blanc », il fait vivre des millions de familles au Mali, au Bénin, au Burkina Faso et au Tchad.`,
            `• Le thé (Kenya, n°1 africain), le palmier à huile, l'hévéa (caoutchouc) et la canne à sucre.`
          ]
        },
        {
          subtitle: 'B. Les risques de l\'agriculture de rente',
          content: [
            `• La dépendance aux marchés boursiers occidentaux : Les prix sont fixés à Londres et New York ; un effondrement des cours appauvrit instantanément les planteurs.`,
            `• La concurrence avec les cultures vivrières : Les meilleures terres fertiles et les engrais sont souvent réservés aux cultures d'exportation au détriment de la nourriture des populations locales.`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 350" width="100%" height="100%">
              <rect width="700" height="350" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">DUALISME AGRICOLE AFRICAIN : VIVRIER VS COMMERCIAL</text>
              <g transform="translate(60, 60)">
                <!-- Boîte 1 : Vivrier -->
                <rect x="0" y="0" width="270" height="210" fill="%23f0fdf4" stroke="%2322c55e" stroke-width="2" rx="12"/>
                <text x="135" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="%2315803d">1. SECTEUR VIVRIER</text>
                <line x1="20" y1="42" x2="250" y2="42" stroke="%23bbf7d0"/>

                <text x="20" y="65" font-size="10" font-weight="bold" fill="%23166534">Cultures :</text>
                <text x="30" y="82" font-size="9.5" fill="%23374151">• Mil, sorgho, maïs, riz</text>
                <text x="30" y="99" font-size="9.5" fill="%23374151">• Manioc, igname, patate douce</text>

                <text x="20" y="125" font-size="10" font-weight="bold" fill="%23166534">Caractéristiques :</text>
                <text x="30" y="142" font-size="9.5" fill="%23374151">• Exploitations familiales petites</text>
                <text x="30" y="159" font-size="9.5" fill="%23374151">• Outillage manuel (daba, hilaire)</text>
                <text x="30" y="176" font-size="9.5" fill="%23374151">• Très forte dépendance de la pluie</text>
                <text x="30" y="193" font-size="9.5" font-weight="bold" fill="%2315803d">→ But : Nourrir la population</text>

                <!-- Boîte 2 : Commercial de rente -->
                <rect x="310" y="0" width="270" height="210" fill="%23fffbeb" stroke="%23f59e0b" stroke-width="2" rx="12"/>
                <text x="445" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="%23b45309">2. SECTEUR COMMERCIAL (RENTE)</text>
                <line x1="330" y1="42" x2="560" y2="42" stroke="%23fde68a"/>

                <text x="330" y="65" font-size="10" font-weight="bold" fill="%2392400e">Cultures :</text>
                <text x="340" y="82" font-size="9.5" fill="%23374151">• Cacao, café (Côte d'Ivoire, Ghana)</text>
                <text x="340" y="99" font-size="9.5" fill="%23374151">• Arachide (Sénégal), coton (Mali)</text>

                <text x="330" y="125" font-size="10" font-weight="bold" fill="%2392400e">Caractéristiques :</text>
                <text x="340" y="142" font-size="9.5" fill="%23374151">• Plantations industrielles privées</text>
                <text x="340" y="159" font-size="9.5" fill="%23374151">• Engrais chimiques et pesticides</text>
                <text x="340" y="176" font-size="9.5" fill="%23374151">• Vente sur le marché mondial (bourses)</text>
                <text x="340" y="193" font-size="9.5" font-weight="bold" fill="%23b45309">→ But : Rapporter des devises</text>
              </g>
              <g transform="translate(100, 290)">
                <rect width="500" height="40" fill="white" stroke="%23cbd5e1" rx="8"/>
                <text x="250" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="%23dc2626">L'OBJECTIF CLÉ : LA SOUVERAINETÉ ALIMENTAIRE AFRICAINE</text>
              </g>
            </svg>`,
            caption: 'Figure 10 : Comparaison structurée entre agriculture vivrière et agriculture commerciale.'
          }
        }
      ]
    },
    {
      title: 'III. L\'ÉLEVAGE ET LA PÊCHE EN AFRIQUE',
      content: [
        `L'élevage et la pêche complètent l'activité agricole et apportent l'essentiel des protéines animales :`
      ],
      subsections: [
        {
          subtitle: 'A. Le pastoralisme et l\'élevage sahélien',
          content: [
            `• L'élevage extensif transhumant : Pratiqué par des pasteurs traditionnels (comme les Peuls) au Sénégal (zone du Ferlo), au Mali et au Niger. Les bergers déplacent leurs troupeaux de zébus gobé, de moutons et de chèvres au gré des pâturages et des forages d'eau.`,
            `• Les contraintes : Malnutrition du bétail en fin de saison sèche, épidémies vétérinaires et conflits fréquents avec les agriculteurs sédentaires pour l'accès à l'eau.`
          ]
        },
        {
          subtitle: 'B. La pêche artisanale et industrielle',
          content: [
            `• Une activité ancestrale majeure au Sénégal : Le littoral sénégalais bénéficie d'eaux très poissonneuses grâce au phénomène d'« upwelling » (remontée d'eaux froides de profondeur très riches en nutriments). Des dizaines de milliers de pêcheurs artisans opèrent en pirogues motorisées (à Kayar, Soumbédioune, Mbour, Saint-Louis).`,
            `• Les menaces : La surpêche industrielle menée par des navires-usines étrangers et le changement climatique épuisent la ressource halieutique, poussant de jeunes pêcheurs au chômage.`
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Exercices pour tester les connaissances sur l'agriculture, l'élevage et la pêche.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : Questions d\'analyse agricole',
          content: [
            `1. Quelle est la différence entre une culture vivrière et une culture de rente ? Citer deux exemples pour chacune.`,
            `2. Pourquoi la Côte d'Ivoire est-elle une puissance agricole mondiale ?`,
            `3. Quel est le rôle du bassin arachidier dans l'histoire économique du Sénégal ?`,
            `4. Quelles sont les difficultés majeures rencontrées par les pêcheurs artisans au Sénégal ?`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Une culture vivrière est cultivée pour la nourriture directe de la population locale (ex : mil, manioc). Une culture de rente est cultivée pour être vendue et exportée afin d'obtenir des devises (ex : cacao, café, arachide).`,
            `2. La Côte d'Ivoire est le premier producteur et exportateur mondial de fèves de cacao (environ 40% du marché mondial) et l'un des premiers producteurs de café, d'anacarde (noix de cajou) et d'huile de palme.`,
            `3. Le bassin arachidier (Kaolack, Fatick, Kaffrine, Diourbel) a constitué pendant plus d'un siècle la principale source de revenus monétaires des paysans sénégalais et a alimenté l'industrie des huileries (Sonacos).`,
            `4. La raréfaction des poissons due à la surpêche des chalutiers industriels étrangers, la hausse du coût du carburant pour les pirogues et les risques de navigation en haute mer.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 15 : ÉTUDE ÉCONOMIQUE D\\\n\nINTRODUCTION\nL'agriculture constitue le véritable cœur battant de l'économie africaine. Elle emploie plus de 55% à 60% de la population active continentale et contribue de manière substantielle au Produit Intérieur Brut (PIB) de la plupart des États subsahariens. Pourtant, l'agriculture africaine est profondément duale : elle oppose un vaste secteur vivrier familial traditionnel, reposant sur des techniques ancestrales et tributaire des caprices de la pluie, à un secteur commercial d'exportation hérité de la période coloniale, orienté vers la vente de produits bruts sur le marché mondial (cacao, café, arachide, coton). Cette leçon analyse cette dualité agraire, la place de l'élevage et de la pêche, ainsi que les défis de la souveraineté alimentaire.\n\nSchéma Récapitulatif : Le Dualisme Agricole Africain\n\nSécurité alimentaire locale\n\nCultures d\\\n\nProtéines et pastoralisme\n\nI. L\\\n\nA. La répartition des cultures vivrières selon les zones climatiques\n\nB. Les faiblesses techniques et le déficit vivrier\n\nII. L\\\n\nA. Les grandes filières de cultures de rente\n\nB. Les risques de l\\\n\nIII. L\\\n\nA. Le pastoralisme et l\\\n\nB. La pêche artisanale et industrielle\n\nIV. EXERCICES D\n\nExercice : Questions d\\\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nL'Afrique dispose de 60% des terres arables non cultivées de la planète. En investissant dans l'irrigation, les semences améliorées et la transformation locale des produits agricoles, le continent peut non seulement nourrir l'ensemble de ses citoyens mais aussi devenir le grenier alimentaire du monde.",
  conclusion: `L'Afrique dispose de 60% des terres arables non cultivées de la planète. En investissant dans l'irrigation, les semences améliorées et la transformation locale des produits agricoles, le continent peut non seulement nourrir l'ensemble de ses citoyens mais aussi devenir le grenier alimentaire du monde.`
};

export const LESSON_16_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-16',
  number: 'LEÇON 16',
  title: 'ÉTUDE ÉCONOMIQUE D\'UNE RÉGION AFRICAINE – L\'INDUSTRIE ET LES RESSOURCES',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `Le sous-sol de l'Afrique est un véritable « scandale géologique » tant il regorge de richesses minérales et énergétiques indispensables au fonctionnement de l'économie mondiale : pétrole, gaz naturel, or, diamants, cuivre, cobalt, coltan, bauxite, fer et uranium. Pourtant, paradoxalement, l'Afrique demeure le continent le moins industrialisé de la planète, ne pesant que pour environ 1,5% de la production manufacturière mondiale. Pendant des décennies, l'Afrique s'est contentée d'extraire et d'exporter ses matières premières à l'état brut sans les transformer. Cette leçon dresse le panorama des ressources minérales et énergétiques, analyse les faiblesses du tissu industriel et explore les pistes de l'industrialisation africaine.`,
  diagram: {
    title: 'Schéma Récapitulatif : Ressources Minérales et Défi Industriel Africain',
    root: 'INDUSTRIE ET RESSOURCES',
    branches: [
      {
        name: 'Ressources Énergétiques',
        subtitle: 'Pétrole, gaz et énergies propres',
        items: [
          'Pétrole : Nigeria (1er producteur), Angola, Algérie, Libye',
          'Nouvelles découvertes offshore au Sénégal : Sangomar (pétrole) et Grand Tortue Ahmeyim GTA (gaz)',
          'Potentiel gigantesque en énergies solaires, hydroélectriques et éoliennes'
        ]
      },
      {
        name: 'Minerais Stratégiques',
        subtitle: 'Matériaux de la transition mondiale',
        items: [
          'Cobalt et coltan (RDC) : indispensables aux batteries et smartphones',
          'Bauxite (Guinée) : 2e producteur mondial (matière première de l\'aluminium)',
          'Or : Afrique du Sud, Ghana, Mali, Sénégal (mines de Sabodala)',
          'Platine, chrome, manganèse, phosphates (Taïba au Sénégal)'
        ]
      },
      {
        name: 'Défis de l\'Industrialisation',
        subtitle: 'De l\'extraction à la transformation',
        items: [
          'Tissu industriel dominé par l\'agroalimentaire léger (brasseries, huileries, cimenteries)',
          'Faiblesse de la métallurgie lourde et de la chimie fine',
          'Impératif : raffiner et transformer sur place pour créer des emplois qualifiés'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. UN SOUS-SOL FABULEUSEMENT RICHE EN RESSOURCES MINIÈRES ET ÉNERGÉTIQUES',
      content: [
        `L'Afrique détient environ 30% des réserves mondiales de minerais et d'importants gisements d'hydrocarbures.`
      ],
      subsections: [
        {
          subtitle: 'A. Les ressources énergétiques : pétrole et gaz naturel',
          content: [
            `• Les géants du pétrole africain : Le Nigeria (delta du Niger), l'Angola, l'Algérie, la Libye et l'Égypte sont les principaux producteurs historiques.`,
            `• L'émergence récente du Sénégal : Avec l'exploitation des gisements offshore de Sangomar (pétrole) et du Grand Tortue Ahmeyim - GTA (gaz naturel partagé avec la Mauritanie), le Sénégal est entré dans le cercle des pays producteurs d'hydrocarbures, offrant des perspectives nouvelles pour son économie et sa souveraineté énergétique.`,
            `• L'énergie hydroélectrique et solaire : L'Afrique possède le premier potentiel mondial d'énergie solaire grâce à son ensoleillement permanent et un potentiel hydroélectrique colossal (fleuve Congo, Nil, Zambèze).`
          ]
        },
        {
          subtitle: 'B. Les minerais stratégiques et précieux',
          content: [
            `• Le cobalt et le coltan en RDC (République Démocratique du Congo) : La RDC détient plus de 70% de la production mondiale de cobalt, métal indispensable à la fabrication des batteries des véhicules électriques et des smartphones.`,
            `• La bauxite en Guinée : Deuxième producteur mondial de bauxite, roche nécessaire à la fabrication de l'aluminium.`,
            `• L'or et les métaux précieux : L'Afrique du Sud, le Ghana, le Mali et le Sénégal (complexe minier de Sabodala au Sénégal oriental) comptent parmi les grands extracteurs d'or mondiaux.`,
            `• Les phosphates au Maroc (1er exportateur mondial) et au Sénégal (gisements de Taïba et Matam pour les engrais).`
          ]
        }
      ]
    },
    {
      title: 'II. LA FAIBLESSE STRUCTURELLE DU TISSU INDUSTRIEL AFRICAIN',
      content: [
        `Malgré cette abondance de matières premières, le secteur manufacturier demeure sous-développé.`
      ],
      subsections: [
        {
          subtitle: 'A. La prédominance des industries légères de première nécessité',
          content: [
            `L'industrie africaine est principalement constituée de :`,
            `• L'agroalimentaire : Minoteries, huileries (Sonacos), brasseries, sucreries (Compagnie Sucrière Sénégalaise - CSS à Richard-Toll).`,
            `• Les matériaux de construction : Cimenteries (SOCOCIM, Dangote, Ciments du Sahel au Sénégal) pour répondre au boom du bâtiment.`,
            `• Le textile et l'artisanat manufacturier.`
          ]
        },
        {
          subtitle: 'B. L\'absence d\'industries de transformation lourde et ses causes',
          content: [
            `L'Afrique ne possède que très peu d'aciéries, d'usines automobiles complètes, d'industries chimiques de pointe ou de fonderies électroniques. Moins de 15% des minerais extraits sont raffinés sur place.`,
            `Les causes de ce retard industriel :`,
            `• Le coût et l'irrégularité de l'électricité qui majorent les coûts de fabrication.`,
            `• Le manque criant de main-d'œuvre technique qualifiée (ingénieurs, techniciens supérieurs).`,
            `• L'étroitesse des marchés nationaux et le manque de capitaux d'investissement locaux.`
          ]
        }
      ]
    },
    {
      title: 'III. LES PERSPECTIVES D\'UNE INDUSTRIALISATION DURABLE',
      content: [
        `Pour rompre avec l'exportation brute de ses matières premières (« malédiction des ressources »), l'Afrique met en œuvre de nouvelles stratégies :`
      ],
      subsections: [
        {
          subtitle: 'A. Les leviers de la révolution industrielle africaine',
          content: [
            `• La transformation locale obligatoire : Interdire l'exportation de minerais bruts et de grumes de bois non sciées pour obliger les compagnies à installer des usines sur place.`,
            `• La création de Parcs Industriels et de Zones Économiques Spéciales (ZES) : Comme la ZES de Diass près de l'aéroport AIBD au Sénégal, offrant des avantages fiscaux pour attirer les investisseurs.`,
            `• L'effet catalyseur de la ZLECAF : Un marché de 1,4 milliard d'habitants permettant aux usines africaines de réaliser des économies d'échelle et d'écouler leurs produits manufacturés sur tout le continent.`
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Exercices d'évaluation sur les ressources et l'industrie.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : Contrôle des connaissances',
          content: [
            `1. Citer trois pays africains producteurs majeurs de pétrole.`,
            `2. Quel minerai stratégique la RDC produit-elle en très grande quantité pour les batteries électriques mondiales ?`,
            `3. Quelles sont les récentes découvertes énergétiques majeures au Sénégal ?`,
            `4. Pourquoi dit-on que l'Afrique doit passer de l'économie d'extraction à l'économie de transformation ?`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Le Nigeria, l'Angola et l'Algérie (ou la Libye, l'Égypte).`,
            `2. Le cobalt (ainsi que le coltan).`,
            `3. Le gisement pétrolier de Sangomar et le gisement de gaz naturel offshore de Grand Tortue Ahmeyim (GTA) à la frontière sénégalo-mauritanienne.`,
            `4. Parce que l'exportation de matières brutes ne rapporte que très peu d'argent et ne crée pas d'emplois locaux. En transformant sur place ses minerais et ses produits agricoles en produits finis (raffinage, usines), l'Afrique crée de la valeur ajoutée et des millions d'emplois pour sa jeunesse.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 16 : ÉTUDE ÉCONOMIQUE D\\\n\nINTRODUCTION\nLe sous-sol de l'Afrique est un véritable « scandale géologique » tant il regorge de richesses minérales et énergétiques indispensables au fonctionnement de l'économie mondiale : pétrole, gaz naturel, or, diamants, cuivre, cobalt, coltan, bauxite, fer et uranium. Pourtant, paradoxalement, l'Afrique demeure le continent le moins industrialisé de la planète, ne pesant que pour environ 1,5% de la production manufacturière mondiale. Pendant des décennies, l'Afrique s'est contentée d'extraire et d'exporter ses matières premières à l'état brut sans les transformer. Cette leçon dresse le panorama des ressources minérales et énergétiques, analyse les faiblesses du tissu industriel et explore les pistes de l'industrialisation africaine.\n\nSchéma Récapitulatif : Ressources Minérales et Défi Industriel Africain\n\nPétrole, gaz et énergies propres\n\nMatériaux de la transition mondiale\n\nDe l\\\n\nI. UN SOUS-SOL FABULEUSEMENT RICHE EN RESSOURCES MINIÈRES ET ÉNERGÉTIQUES\n\nA. Les ressources énergétiques : pétrole et gaz naturel\n\nB. Les minerais stratégiques et précieux\n\nII. LA FAIBLESSE STRUCTURELLE DU TISSU INDUSTRIEL AFRICAIN\n\nA. La prédominance des industries légères de première nécessité\n\nB. L\\\n\nIII. LES PERSPECTIVES D\\\n\nA. Les leviers de la révolution industrielle africaine\n\nIV. EXERCICES D\n\nExercice : Contrôle des connaissances\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nL'avenir économique de l'Afrique réside dans sa capacité à maîtriser la chaîne de valeur de ses ressources naturelles. L'accès à une énergie abondante et propre sera la clé de voûte de cette industrialisation.",
  conclusion: `L'avenir économique de l'Afrique réside dans sa capacité à maîtriser la chaîne de valeur de ses ressources naturelles. L'accès à une énergie abondante et propre sera la clé de voûte de cette industrialisation.`
};

export const LESSON_17_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-17',
  number: 'LEÇON 17',
  title: 'L\'IMPACT DE L\'HOMME SUR L\'ENVIRONNEMENT EN AFRIQUE ET DÉVELOPPEMENT DURABLE',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `Le continent africain traverse une crise écologique sans précédent dans son histoire contemporaine. Bien que les populations africaines soient historiquement celles qui ont le moins contribué aux émissions mondiales de gaz à effet de serre (moins de 4% du total mondial), l'Afrique est la région la plus vulnérable aux impacts dévastateurs du réchauffement climatique planétaire. Aux aléas naturels s'ajoutent les pressions directes exercées par les activités humaines : déforestation massive pour le charbon de bois, feux de brousse, surpâturage, pollution urbaine par les plastiques et érosion côtière. Face à ces menaces vitales, le concept de développement durable s'impose comme une urgence absolue pour concilier progrès économique et préservation de la Terre.`,
  diagram: {
    title: 'Schéma Récapitulatif : Crise Écologique et Solutions Durables en Afrique',
    root: 'ENVIRONNEMENT & DÉVELOPPEMENT DURABLE',
    branches: [
      {
        name: 'Pressions Anthropiques',
        subtitle: 'Destructions causées par l\'homme',
        items: [
          'Déforestation accélérée pour le bois de chauffe et l\'agriculture',
          'Surpâturage et feux de brousse qui détruisent la régénération des sols',
          'Pollution urbaine par les plastiques et rejets toxiques sans traitement',
          'Érosion côtière menaçant les villes littorales (Saint-Louis, Rufisque)'
        ]
      },
      {
        name: 'Impacts Climatiques',
        subtitle: 'Une vulnérabilité exacerbée',
        items: [
          'Avancée du désert (désertification au Sahel)',
          'Sécheresses prolongées suivies d\'inondations torrentielles catastrophiques',
          'Baisse des rendements agricoles et multiplication des réfugiés climatiques'
        ]
      },
      {
        name: 'Solutions & Espoirs',
        subtitle: 'Projets d\'avenir durables',
        items: [
          'La Grande Muraille Verte de Dakar à Djibouti (8 000 km d\'arbres)',
          'Énergies renouvelables (centrales solaires comme à Bokhol et Malicounda au Sénégal)',
          'Éco-citoyenneté et reboisement communautaire dans les écoles'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LES GRANDES DÉGRADATIONS ENVIRONNEMENTALES DUES À L\'HOMME',
      content: [
        `L'explosion démographique combinée à des pratiques économiques inadaptées accélère la dégradation des milieux naturels africains.`
      ],
      subsections: [
        {
          subtitle: 'A. La déforestation et l\'avancée du désert',
          content: [
            `• La dépendance au bois-énergie : Plus de 80% des ménages d'Afrique subsaharienne dépendent du bois de chauffe et du charbon de bois pour cuisiner quotidiennement. Chaque année, des millions d'hectares de forêts disparaissent en Casamance, au Congo et à Madagascar.`,
            `• Les feux de brousse répétés : Utilisés pour défricher les champs ou pour renouveler l'herbe des pâturages, les feux tardifs détruisent les jeunes pousses, appauvrissent le sol et tuent la microfaune.`,
            `• La désertification : Sous l'effet combiné des sécheresses et du déboisement, le désert du Sahara progresse vers le Sud à un rythme alarmant, transformant d'anciennes terres arables en dunes stériles.`
          ]
        },
        {
          subtitle: 'B. Les pollutions urbaines et l\'érosion côtière',
          content: [
            `• La prolifération des déchets plastiques : Les sachets plastiques à usage unique polluent les paysages, bouchent les caniveaux (provoquant des inondations urbaines) et étouffent le bétail qui les ingère.`,
            `• L'érosion côtière galopante : L'extraction anarchique de sable marin sur les plages pour la construction immobilière et la montée du niveau de la mer font reculer le trait de côte de 1 à 2 mètres par an au Sénégal, détruisant des maisons et des mosquées à Saint-Louis (quartier de Guet Ndar) et à Rufisque.`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 350" width="100%" height="100%">
              <rect width="700" height="350" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">LE PROJET TITANESQUE DE LA GRANDE MURAILLE VERTE AFRICAINE</text>
              <g transform="translate(100, 60)">
                <!-- Carte schématique du Sahel -->
                <rect width="500" height="220" fill="%23fef3c7" stroke="%23cbd5e1" rx="12"/>
                <text x="250" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="%23b45309">DÉSERT DU SAHARA (ARIDE)</text>

                <!-- Bande de la Grande Muraille Verte -->
                <path d="M 20 120 C 100 100, 200 130, 300 110 C 400 95, 450 115, 480 120"
                      fill="none" stroke="%2315803d" stroke-width="26" stroke-linecap="round" opacity="0.8"/>
                <path d="M 20 120 C 100 100, 200 130, 300 110 C 400 95, 450 115, 480 120"
                      fill="none" stroke="%2386efac" stroke-width="12" stroke-linecap="round"/>

                <!-- Points extrémités -->
                <circle cx="20" cy="120" r="7" fill="%23dc2626"/>
                <text x="20" y="145" text-anchor="middle" font-size="10" font-weight="bold" fill="%23991b1b">Dakar (Sénégal)</text>

                <circle cx="480" cy="120" r="7" fill="%23dc2626"/>
                <text x="480" y="145" text-anchor="middle" font-size="10" font-weight="bold" fill="%23991b1b">Djibouti</text>

                <text x="250" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="%23052e16">BANDE REBOISÉE DE 8 000 KM SUR 15 KM DE LARGE</text>

                <text x="250" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="%23166534">ZONE SAHÉLIENNE EN RESTAURATION ÉCOLOGIQUE</text>
                <text x="250" y="200" text-anchor="middle" font-size="9.5" fill="%23374151">11 pays africains unis pour stopper l'avancée du désert et créer des oasis d'agroécologie</text>
              </g>
              <g transform="translate(100, 295)">
                <rect width="500" height="40" fill="white" stroke="%23cbd5e1" rx="8"/>
                <text x="250" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="%23059669">Symbole universel de la résistance écologique et de la résilience africaine</text>
              </g>
            </svg>`,
            caption: 'Figure 11 : Le tracé transcontinental de la Grande Muraille Verte de Dakar à Djibouti.'
          }
        }
      ]
    },
    {
      title: 'II. LE CHANGEMENT CLIMATIQUE MONDIAL : UNE INJUSTICE POUR L\'AFRIQUE',
      content: [
        `Bien qu'émettant une part négligeable de gaz à effet de serre, le continent subit les chocs climatiques les plus violents :`
      ],
      subsections: [
        {
          subtitle: 'A. Les manifestations directes du réchauffement',
          content: [
            `• Dérèglement des régimes de précipitations : Retards de l'hivernage, sécheresses soudaines en pleine période de floraison des céréales, ou pluies diluviennes provoquant des crues éclair dévastatrices.`,
            `• Menace sur la sécurité alimentaire : Baisse prévisible de 10% à 20% des rendements des cultures vivrières sous l'effet des vagues de chaleur extrême.`,
            `• L'apparition des réfugiés climatiques : Paysans et pasteurs contraints d'abandonner leurs terres stérilisées pour grossir les banlieues des villes.`
          ]
        }
      ]
    },
    {
      title: 'III. LES SOLUTIONS D\'AVENIR : LE DÉVELOPPEMENT DURABLE EN ACTION',
      content: [
        `Pour inverser cette trajectoire, des initiatives majeures mobilisent les États et les citoyens :`
      ],
      subsections: [
        {
          subtitle: 'A. Les grands projets de restauration écologique',
          content: [
            `• La Grande Muraille Verte (GMV) : Lancée par les chefs d'État africains (dont le Sénégal qui a été un pionnier actif avec l'Agence Nationale de la Grande Muraille Verte), cette initiative monumentale vise à créer un corridor végétal de 8 000 km de long sur 15 km de large, allant de Dakar à Djibouti, en plantant des espèces adaptées (Acacia senegal, balanites). Elle permet de retenir les sols, de recharger les nappes phréatiques et de créer des jardins maraîchers pour les femmes.`,
            `• La transition vers les énergies renouvelables : Le Sénégal est devenu un modèle africain avec la mise en service de nombreuses centrales solaires photovoltaïques (Santhiou Mékhé, Bokhol, Malicounda) et du grand parc éolien de Taïba Ndiaye.`,
            `• L'éducation à l'environnement : Sensibiliser les élèves dès le collège au tri des ordures, à la réduction des plastiques et à la plantation d'arbres dans les cours d'école.`
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Exercices pour tester la compréhension de l'environnement et du développement durable.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : Réflexion écologique',
          content: [
            `1. Définir : Désertification, Développement durable, Érosion côtière.`,
            `2. Pourquoi dit-on que l'Afrique subit une « injustice climatique » ?`,
            `3. Qu'est-ce que le projet de la Grande Muraille Verte et quel est son tracé géographique ?`,
            `4. Citer deux actions quotidiennes qu'un citoyen ou un élève peut faire pour protéger son environnement.`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Définitions :`,
            `   • Désertification : Dégradation continue des terres arides et semi-arides sous l'effet des variations climatiques et des activités humaines, conduisant à des conditions désertiques.`,
            `   • Développement durable : Développement qui répond aux besoins des générations actuelles sans compromettre la capacité des générations futures à répondre aux leurs (alliant écologie, économie et société).`,
            `   • Érosion côtière : Phénomène d'usure et de recul du littoral sous l'action des vagues maritimes, des marées et du prélèvement de sable.`,
            `2. L'injustice climatique vient du fait que l'Afrique produit moins de 4% des émissions mondiales de gaz à effet de serre responsables du réchauffement, mais c'est elle qui en subit les conséquences les plus graves (sécheresses, inondations, famine) avec des moyens financiers très limités pour s'y adapter.`,
            `3. La Grande Muraille Verte est un projet panafricain de reforestation et de restauration des terres de 8 000 km de long sur 15 km de large traversant 11 pays, de Dakar (Sénégal) à Djibouti.`,
            `4. Deux actions concrètes : Planter et entretenir des arbres, éviter l'utilisation de sachets plastiques à usage unique et ne pas jeter d'ordures dans les caniveaux.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 17 : L\\\n\nINTRODUCTION\nLe continent africain traverse une crise écologique sans précédent dans son histoire contemporaine. Bien que les populations africaines soient historiquement celles qui ont le moins contribué aux émissions mondiales de gaz à effet de serre (moins de 4% du total mondial), l'Afrique est la région la plus vulnérable aux impacts dévastateurs du réchauffement climatique planétaire. Aux aléas naturels s'ajoutent les pressions directes exercées par les activités humaines : déforestation massive pour le charbon de bois, feux de brousse, surpâturage, pollution urbaine par les plastiques et érosion côtière. Face à ces menaces vitales, le concept de développement durable s'impose comme une urgence absolue pour concilier progrès économique et préservation de la Terre.\n\nSchéma Récapitulatif : Crise Écologique et Solutions Durables en Afrique\n\nDestructions causées par l\\\n\nUne vulnérabilité exacerbée\n\nProjets d\\\n\nI. LES GRANDES DÉGRADATIONS ENVIRONNEMENTALES DUES À L\\\n\nA. La déforestation et l\\\n\nB. Les pollutions urbaines et l\\\n\nII. LE CHANGEMENT CLIMATIQUE MONDIAL : UNE INJUSTICE POUR L\\\n\nA. Les manifestations directes du réchauffement\n\nIII. LES SOLUTIONS D\\\n\nA. Les grands projets de restauration écologique\n\nIV. EXERCICES D\n\nExercice : Réflexion écologique\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nLa préservation de notre environnement n'est pas un luxe, mais une condition absolue de notre survie. L'Afrique a l'opportunité historique d'inventer un modèle de développement écologique propre, fondé sur l'énergie solaire et le respect de la nature.",
  conclusion: `La préservation de notre environnement n'est pas un luxe, mais une condition absolue de notre survie. L'Afrique a l'opportunité historique d'inventer un modèle de développement écologique propre, fondé sur l'énergie solaire et le respect de la nature.`
};
