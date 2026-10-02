import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE PREMIÈRE (SÉNÉGAL) — VOLUME 2 (LEÇONS 7 À 12)
// Grandes parties I, II, III, IV, V... Figures, Schémas, Cartes & Tableaux
// Conforme au programme officiel consolidé de Géographie Première
// =========================================================================

export const LESSON_7_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-7',
  number: 'LEÇON 7',
  title: 'La répartition de la population mondiale',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Inégale distribution planétaire, foyers majeurs (Asie orientale, Asie du Sud, Europe), déserts humains, facteurs physiques, historiques, économiques et littoralisation.',
  introduction: `La population mondiale est caractérisée par une extrême hétérogénéité spatiale. Plus de la moitié des êtres humains est massée sur moins de 10 % des terres émergées, tandis que d'immenses espaces continentaux demeurent pratiquement inhabités. Cette géographie contrastée oppose de gigantesques foyers de peuplement à des déserts démographiques. Loin d'être le fruit du seul déterminisme climatique ou naturel, la carte de la population mondiale est le produit combiné de millénaires d'histoire agraire, d'innovations techniques, de la révolution industrielle et de la polarisation littorale liée à la mondialisation contemporaine.`,
  sections: [
    {
      title: 'I. LES GRANDS FOYERS DE PEUPLEMENT DE LA PLANÈTE',
      content: [
        '1. Les trois foyers majeurs (concentrant plus de la moitié de l\'humanité) :',
        '• L\'Asie du Sud (environ 1,9 milliard d\'habitants) : Englobe l\'Inde, le Pakistan et le Bangladesh. Très fortes densités rurales dans les plaines alluviales fertiles de l\'Indus et du Gange ainsi que dans les mégapoles (Mumbai, Delhi, Dhaka).',
        '• L\'Asie orientale (environ 1,7 milliard d\'habitants) : Englobe la Chine littorale, le Japon, la péninsule coréenne et Taïwan. Région rizicole historique devenue le centre manufacturier et technologique mondial.',
        '• L\'Europe occidentale et centrale (environ 600 millions d\'habitants) : Foyer ancien à forte urbanisation (la dorsale européenne ou "banane bleue" de Londres à Milan), berceau de la révolution industrielle.',
        '2. Les foyers secondaires de peuplement :',
        '• Le Sud-Est asiatique (Indonésie notamment l\'île de Java, Vietnam, Philippines).',
        '• Le Nord-Est des États-Unis et la région des Grands Lacs (Mégalopolis de Boston à Washington).',
        '• Le Golfe de Guinée et le Nigeria (plus de 220 millions d\'habitants, premier géant démographique africain).',
        '• Le littoral brésilien (Sudeste : São Paulo, Rio de Janeiro) et la vallée du Nil en Égypte (étroite bande fertile au milieu du désert).'
      ],
      table: {
        headers: ['Foyer de peuplement', 'Type de foyer', 'Population estimée', 'Atouts majeurs / Origine historique'],
        rows: [
          ['Asie du Sud (Inde, Gange)', 'Majeur', '~1,9 milliard', 'Plaines alluviales, mousson, riziculture inondée'],
          ['Asie orientale (Chine, Japon)', 'Majeur', '~1,7 milliard', 'Riziculture irriguée, essor industriel et technologique'],
          ['Europe occidentale', 'Majeur', '~600 millions', 'Plaines tempérées, révolution industrielle, tertiarisation'],
          ['Golfe de Guinée (Nigeria)', 'Secondaire', '~350 millions', 'Agriculture vivrière, hydrocarbures, dynamisme marchand'],
          ['Nord-Est américain', 'Secondaire', '~150 millions', 'Commerce transatlantique, industrie et métropolisation']
        ]
      }
    },
    {
      title: 'II. LES DÉSERTS HUMAINS ET ZONES DE FAIBLES DENSITÉS',
      content: [
        'À l\'inverse des foyers de concentration, les zones de vide démographique (densités inférieures à 2 habitants par km²) couvrent de vastes étendues :',
        '1. Les déserts froids des hautes latitudes polaires et subpolaires : Groenland, Grand Nord canadien, Sibérie, Antarctique. Le froid intense, le pergélisol (sol gelé en permanence) et la longue nuit polaire interdisent l\'agriculture.',
        '2. Les déserts chauds et arides : Sahara (le plus vaste au monde), désert d\'Arabie, déserts australiens, Kalahari, Atacama. L\'absence chronique d\'eau liquide et l\'aridité sévère limitent la vie aux rares oasis.',
        '3. Les forêts denses humides équatoriales : Bassin d\'Amazonie, bassin du Congo. Végétation inextricable, sols latéritiques pauvres et lessivés, et prévalence de maladies parasitaires.',
        '4. Les hautes altitudes et reliefs escarpés : Himalaya, Rocheuses, Andes, hauts plateaux du Tibet. Pente, raréfaction de l\'oxygène et froid limitent l\'habitat permanent.'
      ]
    },
    {
      title: 'III. LES FACTEURS PHYSIQUES ET LEURS LIMITES EXPLICATIVES',
      content: [
        '1. Le climat : L\'abondance de chaleur et d\'humidité favorise la biomasse végétale et les récoltes, à condition que les pluies soient prévisibles. Le froid extrême et l\'aridité sont de puissants freins.',
        '2. Le relief et la topographie : Les plaines, deltas et vallées alluviales ont attiré les hommes par leur fertilité et la facilité d\'aménagement des voies de communication. Les montagnes ont parfois servi de refuges protecteurs face aux invasions (pays kabyle, pays dogon, hauts plateaux éthiopiens).',
        '3. Le rôle de l\'eau : Fleuves et rivières sont indispensables à l\'irrigation, à l\'alimentation humaine, à la force motrice et à la navigation commerciale (le Nil en Égypte, le fleuve Sénégal en zone sahélienne).'
      ]
    },
    {
      title: 'IV. LES FACTEURS HISTORIQUES, TECHNIQUES ET ÉCONOMIQUES',
      content: [
        '1. L\'ancienneté du peuplement et des civilisations agraires : Les régions ayant maîtrisé très tôt la domestication du riz (riziculture asiatique irriguée capable de nourrir jusqu\'à 1 000 habitants au km² avec plusieurs récoltes annuelles) conservent aujourd\'hui encore une avance démographique colossale.',
        '2. Les traumatismes historiques : Les dépeuplements brutaux liés aux traites négrières transatlantique et orientale en Afrique, ou au choc microbien consécutif à la conquête européenne en Amérique amérindienne, ont vidé durablement de vastes terroirs.',
        '3. La Révolution industrielle et l\'urbanisation : Dès le XIXe siècle, les gisements de charbon et de fer ont fixé des foules ouvrières dans les "pays noirs" européens, avant que les usines et les bureaux ne polarisent les métropoles.'
      ]
    },
    {
      title: 'V. LES DYNAMIQUES CONTEMPORAINES : LITTORALISATION ET MÉTROPOLISATION',
      content: [
        '1. Le tropisme maritime (la littoralisation) : Plus de 60 % de la population mondiale vit aujourd\'hui à moins de 100 kilomètres d\'un littoral maritime. Les côtes attirent les hommes en raison du commerce maritime conteneurisé mondialisé, de la pêche, du tourisme balnéaire et des zones industrialo-portuaires (ZIP).',
        '2. La métropolisation planétaire : La population se concentre préférentiellement dans les grandes mégapoles (Tokyo, Shanghai, Delhi, Le Caire, Lagos).',
        '3. Au Sénégal : Illustration spectaculaire de cette dissymétrie spatiale : la façade atlantique et la région de Dakar concentrent la quasi-totalité des investissements, laissant l\'Est et le Nord-Est semi-déserts.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET CROQUIS DE SYNTHÈSE',
      content: [
        'Exercice 1 : Réaliser la légende méthodique d\'un croquis de répartition de la population mondiale.',
        'Correction : La légende doit être structurée en trois rubriques hiérarchisées : 1. Les zones de concentration humaine (figurés de surface de couleur chaude : rouge pour les foyers majeurs, orange pour les foyers secondaires, cercles proportionnels pour les grandes mégapoles). 2. Les déserts humains (figurés de surface de couleur froide : bleu clair pour le froid polaire, jaune pour les déserts arides, vert rayé pour les forêts équatoriales). 3. Les dynamiques spatiales (flèches orientées vers les littoraux illustrant la littoralisation et l\'exode rural).',
        'Exercice 2 : Pourquoi l\'île de Java (Indonésie) concentre-t-elle plus de 150 millions d\'habitants sur une surface modeste alors que l\'île voisine de Bornéo est presque vide ?',
        'Correction : Java possède des sols volcaniques d\'une fertilité exceptionnelle régénérés par les cendres des volcans actifs, combinés à un climat équatorial de mousson et une tradition séculaire de riziculture en terrasses irriguées très soignée. Bornéo possède des sols latéritiques pauvres et lessivés recouverts d\'une forêt dense équatoriale sans le même potentiel agronomique volcanique.'
      ]
    }
  ],
  diagram: {
    title: 'Croquis schématique : Les grands contrastes de peuplement mondial',
    root: 'RÉPARTITION DE LA POPULATION MONDIALE',
    branches: [
      {
        name: 'FOYERS MAJEURS (> 4 MILLIARDS)',
        subtitle: 'Concentrations humaines historiques',
        items: [
          'Asie du Sud (Inde, Pakistan, Bangladesh : 1,9 Md)',
          'Asie orientale (Chine, Japon, Corée : 1,7 Md)',
          'Europe occidentale et centrale (600 millions)',
          'Foyers secondaires : Golfe de Guinée, Nord-Est USA, Java'
        ]
      },
      {
        name: 'DÉSERTS DÉMOGRAPHIQUES (< 2 HAB/KM²)',
        subtitle: 'Contraintes naturelles sévères',
        items: [
          'Déserts froids polaires (Groenland, Sibérie, Antarctique)',
          'Déserts arides et chauds (Sahara, Arabie, Gobi)',
          'Grandes forêts équatoriales denses (Amazonie, Congo)',
          'Hautes altitudes montagneuses (Tibet, Himalaya, Andes)'
        ]
      },
      {
        name: 'DYNAMIQUES CONTEMPORAINES',
        subtitle: 'Mondialisation et mobilités',
        items: [
          'Littoralisation : 60 % de l\'humanité sur les côtes',
          'Métropolisation : essor des mégapoles géantes',
          'Attraction des bassins portuaires et axes de transport',
          'Exode rural massif vers les capitales du Sud'
        ]
      }
    ]
  },
  conclusion: `La répartition de la population mondiale n'est ni figée ni le simple reflet de la géographie physique. Elle témoigne de la capacité séculaire des sociétés à aménager les milieux, à innover et à s'insérer dans les circuits du commerce mondial. La littoralisation et la métropolisation continuent aujourd'hui de creuser les contrastes entre les pleins et les vides de l'espace terrestre.`
};

export const LESSON_8_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-8',
  number: 'LEÇON 8',
  title: 'TP : calcul et carte des densités de population',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '28 min',
  description: 'Calculs de densités (brute, physiologique, agricole), méthode de discrétisation cartographique, seuils de classes et analyse spatiale comparée des 14 régions du Sénégal.',
  introduction: `La densité de population est l'indicateur quantitatif fondamental permettant d'évaluer le degré d'occupation humaine d'un territoire et de comparer des entités spatiales de dimensions inégales. Cependant, le calcul d'une simple moyenne arithmétique globale peut occulter des disparités internes majeures. Ce Travail Pratique apprend à l'élève à manier les différentes formules de densités, à élaborer une carte choroplèthe rigoureuse par classes de valeurs (discrétisation) et à rédiger un commentaire géographique critique à différentes échelles territoriales.`,
  sections: [
    {
      title: 'I. LES DIFFÉRENTES FORMULES ET TYPES DE DENSITÉS',
      content: [
        '1. La densité brute (ou arithmétique) :',
        '• Formule : Densité (D) = Population totale (P) / Superficie totale (S).',
        '• Unité obligatoire : Habitants par kilomètre carré (hab/km²).',
        '• Utilité : Indicateur standard de comparaison internationale et interrégionale.',
        '2. La densité physiologique (ou utile) :',
        '• Formule : Densité physiologique = Population totale / Superficie des terres cultivables.',
        '• Utilité : Mesure la pression démographique réelle exercée sur les ressources nourricières du sol. En Égypte par exemple, la densité brute est d\'environ 105 hab/km², mais la densité physiologique dépasse 2 500 hab/km² dans l\'étroite vallée du Nil cultivable.',
        '3. La densité agricole (ou rurale) :',
        '• Formule : Densité agricole = Population active agricole / Superficie agricole utile (SAU).',
        '• Utilité : Renseigne sur l\'intensité de la main-d\'œuvre et le niveau de mécanisation des campagnes.'
      ]
    },
    {
      title: 'II. LES LIMITES DE LA DENSITÉ MOYENNE ET LE PIÈGE DU CHANGEMENT D\'ÉCHELLE',
      content: [
        '1. L\'illusion de l\'homogénéité : Une densité moyenne nationale masque la dispersion ou la concentration interne. Un pays immense avec une densité moyenne de 4 hab/km² (comme le Canada ou l\'Australie) concentre 90 % de ses habitants dans une étroite frange urbaine méridionale, laissant le reste du territoire désert.',
        '2. Le changement d\'échelle (principe fondamental de la géographie) :',
        '• À l\'échelle mondiale : L\'Afrique de l\'Ouest apparaît comme une région modérément peuplée (~60 hab/km²).',
        '• À l\'échelle nationale du Sénégal : La densité moyenne nationale est d\'environ 90 hab/km² (18 millions d\'habitants sur 196 722 km²).',
        '• À l\'échelle régionale : Dakar compte plus de 7 000 hab/km², tandis que Kédougou compte moins de 12 hab/km².',
        '• À l\'échelle communale intra-dakaroise : Médina ou Guediawaye dépassent 30 000 hab/km² !'
      ]
    },
    {
      title: 'III. MÉTHODOLOGIE DE RÉALISATION D\'UNE CARTE CHOROPLÈTHE DE DENSITÉ',
      content: [
        'Pour cartographier les densités régionales à partir d\'une série de données, il convient de respecter la méthode cartographique normalisée :',
        '1. Classer les données par ordre croissant ou décroissant.',
        '2. Déterminer le nombre de classes : Habituellement 4 à 5 classes pour conserver une bonne lisibilité visuelle.',
        '3. Choisir les seuils de classes (discrétisation) : Utiliser des intervalles réguliers, des classes selon les moyennes ou des seuils naturels de rupture de pente.',
        '4. Adopter un dégradé de valeurs visuelles cohérent : Choisir une seule couleur (monochrome) et faire varier l\'intensité du clair (faibles densités) au foncé (très fortes densités), ou utiliser des hachures de plus en plus serrées.',
        '5. Respecter les règles cartographiques (TOLE) : Titre clair, Orientation (flèche du Nord), Légende ordonnée et Échelle métrique.'
      ]
    },
    {
      title: 'IV. EXERCICE D\'APPLICATION : LES DENSITÉS RÉGIONALES DU SÉNÉGAL',
      content: [
        'Calcul des densités régionales du Sénégal à partir des données de l\'ANSD (arrondies pour exercice) :',
        '• Région de Dakar : Pop = 4 000 000 hab ; Superficie = 550 km² ➔ Densité = 7 272 hab/km².',
        '• Région de Thiès : Pop = 2 300 000 hab ; Superficie = 6 600 km² ➔ Densité = 348 hab/km².',
        '• Région de Diourbel : Pop = 1 800 000 hab ; Superficie = 4 800 km² ➔ Densité = 375 hab/km².',
        '• Région de Kaolack : Pop = 1 300 000 hab ; Superficie = 5 350 km² ➔ Densité = 243 hab/km².',
        '• Région de Saint-Louis : Pop = 1 150 000 hab ; Superficie = 19 000 km² ➔ Densité = 60,5 hab/km².',
        '• Région de Tambacounda : Pop = 900 000 hab ; Superficie = 42 700 km² ➔ Densité = 21 hab/km².',
        '• Région de Kédougou : Pop = 200 000 hab ; Superficie = 16 900 km² ➔ Densité = 11,8 hab/km².'
      ],
      table: {
        headers: ['Région', 'Population (hab)', 'Superficie (km²)', 'Densité brute (hab/km²)', 'Niveau relatif'],
        rows: [
          ['Dakar', '4 000 000', '550', '7 272', 'Hyper-dense (saturation)'],
          ['Diourbel', '1 800 000', '4 800', '375', 'Très forte densité (bassin arachidier)'],
          ['Thiès', '2 300 000', '6 600', '348', 'Très forte densité (littoral & carrefour)'],
          ['Kaolack', '1 300 000', '5 350', '243', 'Forte densité'],
          ['Saint-Louis', '1 150 000', '19 000', '60,5', 'Moyenne densité (vallée du fleuve)'],
          ['Tambacounda', '900 000', '42 700', '21', 'Faible densité (Sénégal oriental)'],
          ['Kédougou', '200 000', '16 900', '11,8', 'Très faible densité (relief et enclavement)']
        ]
      }
    },
    {
      title: 'V. PROPOSITION DE DISCRÉTISATION EN 4 CLASSES POUR LA CARTE DU SÉNÉGAL',
      content: [
        'Pour cartographier le Sénégal, nous proposons la classification suivante :',
        '• Classe 1 (Très faible densité) : Moins de 25 hab/km² (Tambacounda, Kédougou, Matam). Couleur : Jaune très pâle ou hachures très espacées.',
        '• Classe 2 (Densité moyenne) : 25 à 100 hab/km² (Saint-Louis, Louga, Kolda, Sédhiou, Ziguinchor). Couleur : Orange clair.',
        '• Classe 3 (Forte densité) : 100 à 400 hab/km² (Fatick, Kaolack, Kaffrine, Thiès, Diourbel). Couleur : Orange vif.',
        '• Classe 4 (Hyper-concentration urbaine) : Plus de 400 hab/km² (Dakar). Couleur : Rouge sombre ou quadrillage noir dense.'
      ]
    },
    {
      title: 'VI. COMMENTAIRE GÉOGRAPHIQUE RÉDIGÉ DE LA CARTE DES DENSITÉS DU SÉNÉGAL',
      content: [
        'Modèle de commentaire complet :',
        '« La carte des densités de population du Sénégal met en évidence une dissymétrie spatiale frappante entre l\'Ouest du pays et l\'Est. On observe un gradient décroissant très net de l\'Atlantique vers l\'intérieur des terres. L\'Ouest sénégalais, articulé autour du triangle Dakar-Thiès-Touba et du Bassin arachidier, concentre plus de 60 % des habitants sur moins de 15 % du territoire national. Cette forte densité résulte de l\'attrait des activités portuaires et tertiaires, de l\'ancienneté de la mise en valeur arachidière et de l\'influence religieuse des cités religieuses comme Touba. En revanche, le Sénégal oriental (Tambacounda, Kédougou) et le Ferlo pastoral se caractérisent par un semi-vide humain (<25 hab/km²), imputable à l\'aridité pastorale, aux sols cuirassés latéritiques, à l\'éloignement des grands axes d\'échanges et à un sous-équipement historique en infrastructures de désenclavement. Cette opposition fondamentale Ouest/Est constitue le défi numéro un de l\'aménagement du territoire sénégalais contemporain. »'
      ]
    }
  ],
  diagram: {
    title: 'Schéma méthodologique : De la donnée statistique à la carte thématique',
    root: 'TP CARTO DES DENSITÉS',
    branches: [
      {
        name: '1. CALCUL RIGOUREUX',
        subtitle: 'Densité = Pop / Sup',
        items: [
          'Vérifier les unités (hab et km²)',
          'Distinguer densité brute et densité utile',
          'Ranger la série par ordre croissant',
          'Repérer les valeurs extrêmes (min et max)'
        ]
      },
      {
        name: '2. DISCRÉTISATION',
        subtitle: 'Découpage en classes',
        items: [
          'Déterminer 4 à 5 classes équilibrées',
          'Fixer des bornes claires et non chevauchantes',
          'Ex: <25, 25-100, 100-400, >400 hab/km²',
          'Attribuer un dégradé de couleur logique'
        ]
      },
      {
        name: '3. INTERPRÉTATION',
        subtitle: 'Commentaire géographique',
        items: [
          'Décrire les pôles d\'hyper-densité (Dakar)',
          'Identifier les zones de faible peuplement (Est)',
          'Expliquer les causes (historiques, économiques)',
          'Proposer des solutions d\'aménagement équilibré'
        ]
      }
    ]
  },
  conclusion: `Le calcul et la cartographie des densités permettent de révéler la structure spatiale réelle d'un pays. En déconstruisant les moyennes nationales simplistes, l'élève apprend à analyser les fractures territoriales et à comprendre les choix stratégiques d'aménagement du territoire indispensables pour un développement équilibré.`
};

export const LESSON_9_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-9',
  number: 'LEÇON 9',
  title: 'Les formes traditionnelles de mise en valeur agricole dans les pays tropicaux',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Contraintes bioclimatiques tropicales, agriculture itinérante sur brûlis, culture sédentaire de savane, terroir sereer et riziculture inondée traditionnelle en Casamance.',
  introduction: `Dans les pays tropicaux, l'agriculture traditionnelle constitue bien plus qu'une simple activité économique : elle représente le socle culturel, social et nourricier de centaines de millions de paysans. Établies dans des milieux bioclimatiques exigeants, marqués par l'alternance d'une saison sèche et d'une saison des pluies ainsi que par la fragilité des sols, ces agricultures ont développé au fil des siècles une remarquable ingéniosité d'adaptation. De l'agriculture itinérante sur brûlis en milieu forestier aux terroirs d'agroforesterie sédentaire des savanes ou à la riziculture submergée de mangrove, elles ont su nourrir les hommes sans épuiser les écosystèmes. Aujourd'hui, la croissance démographique et le réchauffement climatique bousculent ces équilibres séculaires.`,
  sections: [
    {
      title: 'I. LES CONTRAINTES ET POTENTIALITÉS DU MILIEU TROPICAL',
      content: [
        '1. Le régime pluviométrique contrasté : Les agricultures tropicales dépendent étroitement de la mousson et de la durée de la saison des pluies (hivernage). Dans la zone sahélienne et soudanienne, les pluies sont concentrées sur 3 à 5 mois, avec une forte variabilité interannuelle et des risques de poches de sécheresse destructrices.',
        '2. La fragilité des sols tropicaux :',
        '• Les sols ferrugineux tropicaux et ferrallitiques ont une teneur modeste en humus, lequel se décompose très vite sous l\'effet de la chaleur.',
        '• Le lessivage par les averses d\'orage violentes entraîne les nutriments en profondeur.',
        '• Le risque d\'induration et de cuirassement latéritique stérilise les parcelles si le couvert végétal est éliminé sans précaution.',
        '3. Les atouts : Une énergie solaire abondante tout au long de l\'année et l\'existence de bas-fonds et de vallées alluviales fertiles.'
      ]
    },
    {
      title: 'II. L\'AGRICULTURE ITINÉRANTE SUR BRÛLIS (RAY / LADANG)',
      content: [
        '1. Le principe écologique du brûlis : Pratiquée historiquement en forêt dense tropicale humide (bassin amazonien, Afrique centrale, Asie du Sud-Est).',
        '2. Le cycle cultural méthodique :',
        '• Le défrichement et l\'abattage sélectif des arbres à la fin de la saison sèche.',
        '• Le feu contrôlé (brûlis) : Les cendres végétales fournissent les sels minéraux indispensables (phosphore, potassium, calcium) pour fertiliser temporairement le sol.',
        '• Les semailles manuelles de cultures associées (manioc, igname, maïs, bananier).',
        '• L\'abandon de la parcelle après 2 à 3 années de récolte lorsque les rendements déclinent et que les mauvaises herbes envahissent le champ.',
        '3. La longue jachère forestière : La terre est mise au repos pendant 15 à 25 ans pour permettre la régénération spontanée de la forêt et la restauration du stock d\'humus.',
        '4. Les limites contemporaines : Ce système n\'est durable qu\'avec des densités démographiques très faibles (<10 hab/km²). Sous l\'effet de la pression humaine, la jachère est raccourcie, provoquant la déforestation et la dégradation irréversible des sols.'
      ]
    },
    {
      title: 'III. L\'AGRICULTURE SÉDENTAIRE DE SAVANE ET LA POLYCULTURE VIVRIÈRE',
      content: [
        '1. Les grands traits des systèmes de savane : Pratiqués en Afrique subsaharienne soudanienne. L\'habitat est regroupé en villages permanents entourés de terroirs concentriques.',
        '2. La structure de l\'espace villageois :',
        '• Les champs de case (terroir immédiat) : Fumés continuellement avec les ordures ménagères et le fumier animal, cultivés en continu sans jachère (maïs, légumes, piments).',
        '• Les champs de village : Portant les grandes cultures céréalières vivrières (mil souna, sorgho, maïs) et les légumineuses (niébé).',
        '• Les champs de brousse périphériques : Plus éloignés, cultivés de façon extensive avec une rotation et une jachère courte.',
        '3. L\'association et la rotation culturale : Pour éviter l\'épuisement des sols, les paysans associent sur la même parcelle une céréale exigeante en azote (le mil) et une légumineuse qui fixe l\'azote atmosphérique dans le sol (l\'arachide ou le niébé).'
      ]
    },
    {
      title: 'IV. LES MODÈLES TRADITIONNELS D\'EXCELLENCE AU SÉNÉGAL',
      content: [
        'Le Sénégal offre deux exemples historiques majeurs d\'agricultures traditionnelles particulièrement sophistiquées :',
        '1. Le système agro-sylvo-pastoral Sereer du Sine-Saloum :',
        '• L\'arbre providentiel Faidherbia albida (Kad) : Cet arbre a un cycle inversé : il perd ses feuilles pendant la saison des pluies (laissant passer la lumière du soleil pour le mil et l\'arachide) et fournit un feuillage dense et des gousses riches en protéines pour le bétail pendant la saison sèche.',
        '• L\'intégration étroite de l\'élevage bovin : Le bétail parqué la nuit dans les champs fertilise directement la terre par ses déjections (fumure animale). Ce système permettait de maintenir de fortes densités humaines (>80 hab/km²) sans épuiser le sol et sans engrais chimiques.',
        '2. La riziculture inondée traditionnelle Diola en Casamance :',
        '• Aménagement minutieux des mangroves et bas-fonds de vallées fluviales.',
        '• Utilisation de l\'outil emblématique : le kadiandou (longue pelle en bois armée de fer manipulée avec force).',
        '• Système complexe de digues et de diguettes en terre avec clapets anti-sel en bois de rônier permettant d\'évacuer l\'eau salée marine et de retenir les eaux douces de pluie pour cultiver le riz submergé.'
      ]
    },
    {
      title: 'V. CRISE ET ADAPTATIONS DES SYSTÈMES TRADITIONNELS',
      content: [
        '1. Les facteurs de déséquilibre : Explosion démographique rurale, fragmentation foncière des exploitations familiales, sécheresses récurrentes et appauvrissement des sols.',
        '2. Le raccourcissement ou la disparition de la jachère : Sans période de repos suffisante, les sols se fatiguent et la fertilité s\'effondre.',
        '3. Les réponses paysannes : Adoption de techniques de conservation des eaux et des sols (cordons pierreux, zaï, demi-lunes), recours au compostage biologique et diversification maraîchère.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS D\'ÉVALUATION',
      content: [
        'Exercice 1 : Définir avec précision : jachère, association culturale, rotation culturale et agroforesterie.',
        'Correction : Jachère : période pendant laquelle une parcelle labourable est laissée au repos sans culture pour régénérer naturellement sa fertilité et son eau. Association culturale : culture simultanée de plusieurs espèces végétales différentes sur la même parcelle. Rotation culturale : succession ordonnée de cultures différentes sur une même parcelle au fil des années. Agroforesterie : mode d\'exploitation associant sur un même terroir arbres, cultures annuelles et élevage.',
        'Exercice 2 : En quoi le cycle biologique du Faidherbia albida (Kad) est-il exceptionnel et adapté à l\'agriculture tropicale sahélienne ?',
        'Correction : Le Faidherbia albida possède une phénologie inversée unique : il est vert et feuillu en saison sèche (fournissant ombre et fourrage riche en azote au bétail affamé) et perd la totalité de ses feuilles dès les premières pluies de l\'hivernage. Il ne fait donc aucune ombre aux cultures de mil ou d\'arachide, tout en enrichissant le sol en matière organique par la décomposition de ses feuilles tombées au sol.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma agronomique : L\'équilibre agro-sylvo-pastoral du terroir sereer',
    root: 'LE TERROIR TRADITIONNEL DU SINE',
    branches: [
      {
        name: 'L\'ARBRE : FAIDHERBIA ALBIDA (KAD)',
        subtitle: 'Clé de voûte agroforestière',
        items: [
          'Cycle inversé : feuilles en saison sèche, nu en hivernage',
          'Fixation de l\'azote dans le sol par ses racines',
          'Apport de litière organique fertilisante',
          'Fourrage protéiné abondant pour le troupeau'
        ]
      },
      {
        name: 'L\'ÉLEVAGE : BÉTAIL BOVIN',
        subtitle: 'Fertilisation et capital sur pied',
        items: [
          'Pacage sous les arbres durant la saison sèche',
          'Parcage nocturne dans les champs à cultiver',
          'Apport massif de fumure animale naturelle',
          'Force de traction animale pour les labours'
        ]
      },
      {
        name: 'LES CULTURES : MIL & ARACHIDE',
        subtitle: 'Sécurité alimentaire & revenu',
        items: [
          'Le mil souna garantit la nourriture de base',
          'L\'arachide apporte un complément monétaire',
          'Association niébé pour l\'équilibre nutritif',
          'Rendements préservés sans intrants chimiques'
        ]
      }
    ]
  },
  conclusion: `Les formes traditionnelles de mise en valeur agricole dans les pays tropicaux témoignent d'une écologie paysanne remarquable. Loin de représenter un archaïsme à éliminer, les savoir-faire traditionnels – intégration de l'élevage, agroforesterie du Kad et gestion fine de l'eau – constituent des sources d'inspiration capitales pour inventer l'agriculture durable et résiliente de demain.`
};

export const LESSON_10_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-10',
  number: 'LEÇON 10',
  title: 'Les cultures commerciales dans les pays tropicaux',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Économie de traite, grandes filières tropicales (arachide, coton, cacao, café, palmier à huile), agro-industrie, dépendance aux marchés mondiaux et filières sénégalaises.',
  introduction: `Une culture commerciale (ou culture de rente) est une production agricole destinée en priorité non pas à l'autoconsommation familiale du paysan, mais à la commercialisation sur les marchés nationaux ou internationaux d'exportation. Imposées ou fortement encouragées à l'époque coloniale pour approvisionner les industries des métropoles européennes en matières premières bon marché (arachide, coton, cacao, hévéa, café), les cultures commerciales demeurent aujourd'hui au cœur des économies des pays tropicaux. Si elles procurent des revenus monétaires indispensables aux paysans et des devises fiscales aux États, elles exposent également les territoires à une dépendance critique face à la volatilité des cours mondiaux et à des concurrences sévères avec la sécurité alimentaire vivrière.`,
  sections: [
    {
      title: 'I. GENÈSE HISTORIQUE ET NOTION D\'ÉCONOMIE DE TRAITE',
      content: [
        '1. La mise en place coloniale de l\'économie de traite : À la fin du XIXe siècle, les administrations coloniales ont orienté les campagnes africaines vers des monocultures d\'exportation par le biais de l\'impôt de capitation obligatoire payable en numéraire, contraignant les paysans à vendre une production marchande.',
        '2. L\'organisation spatiale extravertie : Les réseaux ferroviaires (le Dakar-Niger au Sénégal) et routiers ont été tracés non pas pour relier les régions entre elles, mais pour drainer les récoltes de l\'intérieur vers les ports d\'embarquement maritime à destination de l\'Europe.',
        '3. La persistance post-coloniale : Après les indépendances, la plupart des pays tropicaux ont conservé cette spécialisation pour financer leurs budgets d\'État grâce aux recettes d\'exportation.'
      ]
    },
    {
      title: 'II. TYPOLOGIE DES GRANDES PRODUCTIONS COMMERCIALES TROPICALES',
      content: [
        '1. Les cultures arbustives et de plantation pérennes :',
        '• Le Cacao et le Café : Cultures de forêt humide. La Côte d\'Ivoire et le Ghana assurent à eux deux plus de 60 % de l\'offre mondiale de fèves de cacao.',
        '• Le Palmier à huile et l\'Hévéa (caoutchouc) : Essor gigantesque en Asie du Sud-Est (Indonésie, Malaisie) et en Afrique centrale.',
        '• La Banane d\'exportation et la Canne à sucre : Souvent contrôlées par des multinationales agro-industrielles sur de vastes plantations.',
        '2. Les cultures annuelles de savane et zone sahélienne :',
        '• Le Coton : "L\'or blanc" du Sahel et de la savane ouest-africaine (Mali, Burkina Faso, Bénin, Sénégal oriental avec la SODEFITEX).',
        '• L\'Arachide : Culture reine du Sénégal, du Nigeria et du Soudan, destinée à la fabrication d\'huile végétale alimentaire de qualité et de tourteaux pour l\'alimentation du bétail.'
      ],
      table: {
        headers: ['Culture commerciale', 'Zone bioclimatique', 'Principaux pays producteurs tropicaux', 'Débouchés industriels majeurs'],
        rows: [
          ['Cacao', 'Forêt tropicale humide', 'Côte d\'Ivoire, Ghana, Indonésie, Cameroun', 'Chocolaterie, confiserie, cosmétiques'],
          ['Café (Arabica/Robusta)', 'Hauts plateaux & forêt tropicale', 'Brésil, Vietnam, Colombie, Éthiopie', 'Industrie des boissons et agroalimentaire'],
          ['Coton', 'Savane soudano-sahélienne', 'Mali, Burkina Faso, Bénin, Tchad, Sénégal', 'Industrie textile, filature, huile de coton'],
          ['Arachide', 'Savane sahélienne (Bassin arachidier)', 'Sénégal, Nigeria, Inde, Soudan', 'Huilerie de table, tourteaux pour bétail'],
          ['Palmier à huile', 'Zone équatoriale très humide', 'Indonésie, Malaisie, Nigeria', 'Agroalimentaire, biocarburants, savonnerie']
        ]
      }
    },
    {
      title: 'III. L\'ANALYSE DE LA FILIÈRE AGRO-INDUSTRIELLE : DU CHAMP AU MARCHÉ',
      content: [
        'Une filière regroupe l\'ensemble des étapes, des agents économiques et des flux matériels et financiers reliant la production agricole à la consommation finale :',
        '1. L\'amont agricole : Fourniture des semences sélectionnées, des engrais minéraux, des pesticides et du petit matériel de culture.',
        '2. La production agricole : Réalisée soit par des millions de petits exploitants familiaux sur des parcelles de 1 à 5 hectares, soit sur de grands domaines agro-industriels capitalistes.',
        '3. La collecte et le stockage : Réseau de commerçants intermédiaires ("bana-banas"), de coopératives paysannes ou de points de collecte officiels.',
        '4. La première transformation industrielle : Égrenage du coton (séparation de la fibre et de la graine), trituration de l\'arachide en usine pour extraire l\'huile brute.',
        '5. Le transport logistique et l\'embarquement maritime vers les marchés mondiaux.',
        '6. Le déséquilibre de la chaîne de valeur : La quasi-totalité de la valeur ajoutée et des profits est captée en aval par les négociants internationaux et les multinationales de transformation finale situées au Nord.'
      ]
    },
    {
      title: 'IV. ATOUTS, RISQUES ET IMPACTS DE LA SPÉCIALISATION COMMERCIALE',
      content: [
        '1. Les avantages économiques :',
        '• Rentrée de devises étrangères pour équilibrer la balance commerciale des États.',
        '• Revenus monétaires liquides pour les familles rurales permettant d\'acheter des biens manufacturés, de payer les frais de santé et de scolarité.',
        '• Création d\'emplois dans les transports, l\'artisanat et les usines de transformation.',
        '2. Les risques et vulnérabilités majeures :',
        '• La dépendance aux fluctuations des cours mondiaux : Fixés sur les bourses de matières premières de Londres, Chicago ou New York, les cours subissent des krachs brutaux imprévisibles.',
        '• La concurrence avec les cultures vivrières : Lorsque les meilleures terres et la main-d\'œuvre sont consacrées aux cultures d\'exportation, la production vivrière locale (mil, sorgho, igname) est délaissée, forçant le pays à importer du riz et du blé pour nourrir ses villes.',
        '• L\'épuisement des sols et la déforestation par la monoculture intensive.'
      ]
    },
    {
      title: 'V. L\'EXEMPLE DU BASSIN ARACHIDIER ET DU COTON AU SÉNÉGAL',
      content: [
        '1. Le Bassin arachidier sénégalais : Couvre les régions de Diourbel, Thiès, Fatick, Kaolack, Kaffrine. L\'arachide a structuré le peuplement, les voies ferrées et l\'urbanisation de cités comme Kaolack (capitale de l\'arachide et port fluvial sur le Saloum).',
        '2. Les acteurs de la filière arachidière : Les producteurs réunis en coopératives, les huileries industrielles historiques (SONACOS, Novasen), mais aussi les acheteurs étrangers et les artisans locaux fabriquant la pâte d\'arachide locale (tigadèguè).',
        '3. Le coton au Sénégal oriental et en Haute-Casamance : Développé par la SODEFITEX avec des usines d\'égrenage à Tambacounda, Vélingara et Kahone. Il constitue la principale culture de rente de ces régions.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ANALYSE DE CAS PRATIQUE',
      content: [
        'Exercice 1 : Construire un schéma linéaire annoté d\'une filière de culture commerciale en identifiant les flux physiques et les flux monétaires.',
        'Correction : Le schéma doit représenter cinq boîtes successives reliées par des flèches : [Fournisseurs d\'intrants] ➔ [Producteurs paysans] ➔ [Collecteurs / Coopératives] ➔ [Usines de trituration/égrenage] ➔ [Marché mondial / Consommateurs]. Les flux physiques (matières premières) circulent de gauche à droite. Les flux monétaires (paiements et crédits) circulent de droite à gauche.',
        'Exercice 2 : Pourquoi dit-on que les paysans producteurs de cacao en Afrique de l\'Ouest ne maîtrisent pas le prix de leur propre travail ?',
        'Correction : Les cours du cacao ne sont pas fixés par les agriculteurs ivoiriens ou ghanéens, mais sont déterminés sur les marchés boursiers financiers internationaux (Bourse de Londres et New York) en fonction de la spéculation financière mondiale, des prévisions météorologiques globales et des stocks des multinationales occidentales. Les paysans sont de simples "preneurs de prix" (price takers).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma de filière : Le circuit complet d\'une culture commerciale tropicale',
    root: 'FILIÈRE AGRO-INDUSTRIELLE TROPICALE',
    branches: [
      {
        name: 'AMONT AGRICOLE',
        subtitle: 'Intrants & Préparation',
        items: [
          'Fourniture de semences sélectionnées et certifiées',
          'Engrais chimiques (NPK, urée) et produits phytosanitaires',
          'Crédit de campagne agricole octroyé aux paysans',
          'Matériel aratoire (semoures, houes, bœufs de trait)'
        ]
      },
      {
        name: 'PRODUCTION & COLLECTE',
        subtitle: 'Terroirs paysans & Pesée',
        items: [
          'Culture par des exploitations familiales',
          'Récolte manuelle, séchage et décorticage',
          'Points de collecte officiels et marchés ruraux',
          'Stockage en hangars pour éviter les moisissures'
        ]
      },
      {
        name: 'TRANSFORMATION & EXPORT',
        subtitle: 'Usines, Logistique & Marché',
        items: [
          'Première transformation locale (huilerie SONACOS, égrenage)',
          'Transport routier et ferroviaire vers le Port de Dakar',
          'Exportation maritime vers les marchés d\'Europe et d\'Asie',
          'Volatilité des cours boursiers internationaux'
        ]
      }
    ]
  },
  conclusion: `Les cultures commerciales constituent une arme à double tranchant pour les pays tropicaux. Si elles demeurent indispensables pour monétariser les campagnes et alimenter les caisses de l'État, la dépendance exclusive à quelques matières premières brutes non transformées enferme les économies dans l'échange inégal. La transformation industrielle locale et la diversification vers des cultures vivrières à haute valeur ajoutée constituent les impératifs de la souveraineté économique.`
};

export const LESSON_11_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-11',
  number: 'LEÇON 11',
  title: 'Les mutations récentes de la mise en valeur agricole dans les pays tropicaux',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Facteurs de mutation, aménagements hydro-agricoles irrigués (Vallée du fleuve Sénégal, SAED), maraîchage intensif des Niayes, agrobusiness moderne et défis fonciers.',
  introduction: `Depuis quelques décennies, les campagnes des pays tropicaux connaissent des bouleversements profonds et accélérés. Sous la pression de la croissance démographique fulgurante, d'une urbanisation galopante qui démultiplie la demande alimentaire des villes et de l'ouverture aux marchés mondiaux, les systèmes agricoles traditionnels subissent une vigoureuse recomposition. Cette modernisation se manifeste par la multiplication des grands aménagements hydro-agricoles irrigués, la diffusion de la motorisation, l'explosion du maraîchage périurbain et l'irruption de l'agrobusiness capitalistique. Loin de faire disparaître les pratiques ancestrales, ces mutations engendrent une coexistence complexe entre agriculture familiale et grandes firmes agro-industrielles, tout en posant de graves questions foncières et écologiques.`,
  sections: [
    {
      title: 'I. LES FACTEURS ET MOTEURS DES MUTATIONS AGRICOLES RÉCENTES',
      content: [
        '1. La pression de la demande alimentaire urbaine : L\'Afrique de l\'Ouest compte désormais près de la moitié de ses habitants dans les villes. Les citadins réclament des produits frais quotidiens (oignons, tomates, légumes, fruits, lait, œufs, viande) et des céréales faciles à cuire (riz blanc), stimulant de nouvelles filières maraîchères et intensives.',
        '2. Les traumatismes climatiques des grandes sécheresses sahéliennes (1970-1985) : La baisse durable de la pluviométrie a contraint les États et les bailleurs de fonds à s\'émanciper de la dépendance exclusive aux pluies en investissant massivement dans la maîtrise totale de l\'eau d\'irrigation.',
        '3. Les politiques publiques volontaristes et l\'ouverture aux capitaux privés : Programmes nationaux d\'autosuffisance en riz, subventions aux intrants, et octroi de baux emphytéotiques à des investisseurs privés nationaux et internationaux.'
      ]
    },
    {
      title: 'II. LA MAÎTRISE DE L\'EAU ET L\'ESSOR DES PÉRIMÈTRES IRRIGUÉS',
      content: [
        '1. La mise en valeur des vallées fluviales : Les grands fleuves tropicaux (Sénégal, Niger, Volta, Nil) sont devenus des axes stratégiques de sécurité alimentaire.',
        '2. L\'exemple emblématique de la Vallée du Fleuve Sénégal et de la SAED :',
        '• La régulation du fleuve grâce aux grands barrages de l\'OMVS : Le barrage anti-sel de Diama (à l\'embouchure) empêche la remontée des eaux marines salées, et le barrage réservoir de Manantali (au Mali) stocke l\'eau douce pour permettre deux à trois récoltes de riz par an.',
        '• L\'encadrement par la SAED (Société d\'Aménagement et d\'Exploitation des terres du Delta et de la vallée du fleuve Sénégal) : Aménagement de Périmètres Irrigués Villageois (PIV) et de grands casiers rizicoles industriels avec stations de pompage électrique et réseau de canaux adducteurs et de drainage.',
        '• L\'enjeu de l\'autosuffisance en riz : La vallée produit des centaines de milliers de tonnes de riz paddy blanc de qualité supérieure concurrent du riz brisé importé d\'Asie.'
      ]
    },
    {
      title: 'III. L\'ESSOR DU MARAÎCHAGE INTENSIF : L\'EXEMPLE DES NIAYES AU SÉNÉGAL',
      content: [
        '1. Les spécificités géographiques de la bande des Niayes : Étroite bande littorale s\'étirant de Dakar à Saint-Louis sur près de 180 km, caractérisée par des dépressions interdunaires fertiles où la nappe phréatique d\'eau douce affleure à faible profondeur (céanes).',
        '2. Une agriculture commerciale hautement intensive :',
        '• Utilisation de motopompes, de tuyaux d\'arrosage goutte-à-goutte et d\'engrais organiques et minéraux.',
        '• Spécialisations maraîchères majeures : Oignon, pomme de terre, carotte, chou, tomate cerise, mangues d\'exportation.',
        '• Rôle nourricier capital : Les Niayes fournissent plus de 80 % des légumes consommés dans la métropole dakaroise.',
        '3. Les menaces actuelles : Baisse de la nappe phréatique due aux pompages excessifs, salinisation des terres et pression foncière immobilière agressive qui grignote les parcelles agricoles au profit de cités résidentielles.'
      ]
    },
    {
      title: 'IV. L\'IRRUPTION DE L\'AGROBUSINESS CAPITALISTE MODERNE',
      content: [
        '1. Caractéristiques de l\'agrobusiness : Grandes entreprises privées disposant de capitaux importants, de machines modernes (tracteurs, moissonneuses, pivots d\'arrosage automatisés) et de techniciens agronomes salariés.',
        '2. Exemples au Sénégal : La Compagnie Sucrière Sénégalaise (CSS) à Richard-Toll (plus de 12 000 hectares de canne à sucre irriguée alimentant une immense raffinerie), la SENHUILE, ou les fermes d\'exportation de haricots verts et de melons vers l\'Europe.',
        '3. Le débat sur les accaparements de terres ("Land grabbing") : L\'attribution de milliers d\'hectares à des firmes privées suscite souvent la colère des communautés villageoises locales qui se voient dépossédées de leurs terres coutumières et de leurs zones de pâturage ancestrales.'
      ]
    },
    {
      title: 'V. LIMITES ENVIRONNEMENTALES ET DÉFIS SOCIAUX DE LA MUTATION',
      content: [
        '1. La salinisation et l\'alcalinisation des sols irrigués : Sans un système de drainage efficace, l\'évaporation intense sous le soleil tropical fait remonter les sels minéraux à la surface du sol, stérilisant définitivement des milliers d\'hectares.',
        '2. Les pollutions par les produits chimiques : Utilisation excessive de pesticides et d\'engrais chimiques polluant les nappes phréatiques et les cours d\'eau, avec des risques sanitaires pour les populations riveraines.',
        '3. Les coûts exorbitants de l\'énergie et du carburant pour les motopompes : Alourdissent les dettes des coopératives paysannes.',
        '4. La cohabitation nécessaire : L\'avenir réside dans une alliance harmonieuse entre l\'agriculture familiale sécurisée sur son foncier et l\'agrobusiness porteur de technologies et de débouchés industriels.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS DE SYNTHÈSE',
      content: [
        'Exercice 1 : Quelles sont les différences fondamentales entre l\'agriculture familiale traditionnelle et l\'agrobusiness moderne ?',
        'Correction : L\'agriculture familiale utilise une main-d\'œuvre familiale non salariée, dispose de petites superficies (1 à 5 ha), utilise un outillage manuel ou la traction animale et vise simultanément l\'autoconsommation vivrière et la vente du surplus. L\'agrobusiness moderne repose sur le salariat, mobilise d\'immenses capitaux financiers, exploite des centaines ou milliers d\'hectares ultra-mécanisés avec une irrigation de pointe, et vise exclusivement le profit commercial sur les marchés nationaux ou d\'exportation.',
        'Exercice 2 : Expliquez le rôle conjoint du barrage de Diama et du barrage de Manantali pour l\'agriculture de la Vallée du fleuve Sénégal.',
        'Correction : Le barrage de Diama (barrage anti-sel) bloque la remontée de la langue d\'eau de mer salée vers l\'amont lors des étiages, maintenant l\'eau du fleuve parfaitement douce pour l\'irrigation et la consommation. Le barrage de Manantali (barrage réservoir en amont au Mali) régule le débit du fleuve tout au long de l\'année et stocke d\'immenses réserves d\'eau, permettant ainsi l\'irrigation permanente en saison sèche (contre-saison chaude et froide).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma d\'aménagement : Le système hydro-agricole de la Vallée du Fleuve Sénégal',
    root: 'AMÉNAGEMENT DE LA VALLÉE DU FLEUVE SÉNÉGAL',
    branches: [
      {
        name: 'LES DEUX GRANDS BARRAGES OMVS',
        subtitle: 'Maîtrise régionale du fleuve',
        items: [
          'Barrage de Diama : stop à la marée salée atlantique',
          'Barrage de Manantali : réservoir d\'eau douce et énergie',
          'Régulation continue du débit toute l\'année',
          'Élimination du risque d\'assèchement total'
        ]
      },
      {
        name: 'LES PÉRIMÈTRES IRRIGUÉS (SAED)',
        subtitle: 'Casiers rizicoles & PIV',
        items: [
          'Stations de pompage électrique sur le fleuve',
          'Canaux adducteurs, digues et casiers nivelés au laser',
          'Canaux de drainage évacuant les eaux saumâtres',
          'Double récolte annuelle de riz paddy'
        ]
      },
      {
        name: 'ENJEUX & DÉFIS CONTEMPORAINS',
        subtitle: 'Viabilité économique & écologique',
        items: [
          'Autosuffisance nationale en riz de consommation',
          'Prévention de la salinisation des parcelles',
          'Coût de l\'énergie et maintenance des motopompes',
          'Équilibre entre exploitations familiales et firmes privées'
        ]
      }
    ]
  },
  conclusion: `Les mutations récentes de la mise en valeur agricole dans les pays tropicaux révèlent un monde rural en pleine effervescence. La modernisation hydro-agricole et l'intensification maraîchère prouvent le dynamisme des paysans africains. Pour transformer durablement ces progrès en véritable levier de développement, il est capital de préserver les sols de la salinisation, de protéger les droits fonciers des exploitations familiales et de bâtir un complexe agroalimentaire national compétitif.`
};

export const LESSON_12_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-12',
  number: 'LEÇON 12',
  title: 'L’évolution des formes de mise en valeur agricole en Europe',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Révolution agricole européenne, Politique Agricole Commune (PAC productiviste puis durable), spécialisations régionales, complexe agro-industriel et transition agro-écologique.',
  introduction: `Au lendemain de la Seconde Guerre mondiale, l'agriculture européenne était ruinée, incapable de nourrir les populations sans rationnement. En quelques décennies, grâce à une modernisation technique foudroyante et au cadre politique unifié de la Politique Agricole Commune (PAC) lancée en 1962, l'Europe occidentale a accompli une mutation agraire sans équivalent dans l'histoire humaine. Devenue la deuxième puissance exportatrice agroalimentaire mondiale, l'agriculture européenne s'est transformée en un système productiviste ultra-spécialisé et hyper-mécanisé, étroitement intégré aux géants de l'industrie agroalimentaire. Cependant, les dérives écologiques (pollutions aux nitrates, disparition de la biodiversité) et les crises de surproduction ont imposé depuis les années 1990 un virage vers la durabilité, la qualité sanitaire et l'agro-écologie.`,
  sections: [
    {
      title: 'I. LA MODERNISATION HISTORIQUE D\'APRÈS-GUERRE ET LE MODÈLE PRODUCTIVISTE',
      content: [
        '1. La révolution technique et scientifique :',
        '• La motorisation et la mécanisation généralisée : Remplacement des chevaux par des tracteurs surpuissants, des moissonneuses-batteuses et des robots de traite automatiques.',
        '• La "chimisation" : Utilisation massive d\'engrais chimiques de synthèse (azote, phosphore, potasse) et de produits phytosanitaires (pesticides, fongicides, herbicides).',
        '• La sélection génétique : Création de semences hybrides à haut rendement et sélection rigoureuse des races bovines et porcines laitières et bouchères.',
        '2. Les mutations spatiales : Le remembrement foncier :',
        '• Regroupement des parcelles paysannes morcelées en grands îlots homogènes.',
        '• Arrachage des haies et des talus traditionnels (disparition du bocage) pour laisser passer les grands engins agricoles, créant des paysages d\'openfield géants.',
        '3. L\'effondrement de la population active agricole : Les agriculteurs sont passés de plus de 35 % de la population active dans les années 1950 à moins de 2 à 3 % aujourd\'hui, tandis que la production a été multipliée par cinq.'
      ]
    },
    {
      title: 'II. LE RÔLE DÉTERMINANT DE LA POLITIQUE AGRICOLE COMMUNE (PAC)',
      content: [
        'Créée par le Traité de Rome et mise en œuvre en 1962 par la Communauté Économique Européenne (CEE), la PAC reposait sur trois principes fondateurs :',
        '1. L\'unicité du marché et la libre circulation des produits agricoles entre pays membres sans droits de douane intérieurs.',
        '2. La préférence communautaire : Protection du marché européen contre les importations agricoles extérieures moins chères par le prélèvement de taxes douanières aux frontières.',
        '3. La solidarité financière : Financement des soutiens par le budget européen (FEOGA).',
        '4. Le mécanisme initial des prix garantis : L\'Europe garantissait aux agriculteurs l\'achat de toute leur récolte à un prix supérieur au cours mondial. Ce système a entraîné des records de rendements, mais a aussi provoqué des surproductions gigantesques dans les années 1980 ("montagnes de beurre" et "lacs de lait") qui ont coûté des fortunes au budget européen.'
      ]
    },
    {
      title: 'III. L\'INTÉGRATION AGRO-INDUSTRIELLE : LE COMPLEXE AGROALIMENTAIRE',
      content: [
        'L\'agriculture européenne contemporaine ne fonctionne plus de façon isolée : elle est le maillon central d\'un vaste complexe agro-industriel :',
        '1. En amont : Les géants des semences, des engrais, de la robotique agricole et des banques de crédit.',
        '2. Au centre : L\'agriculteur devenu un chef d\'entreprise hautement qualifié, souvent lié par contrat d\'exclusivité à des coopératives agricoles géantes ou à des multinationales privées.',
        '3. En aval : L\'industrie agroalimentaire (laiteries, abattoirs industriels, conserveries, surgélation comme Danone, Nestlé, Lactalis) et les centrales d\'achat de la grande distribution (hypermarchés Carrefour, Auchan, Lidl) qui imposent des normes drastiques de calibrage et des prix d\'achat très bas.'
      ]
    },
    {
      title: 'IV. LES GRANDES SPÉCIALISATIONS RÉGIONALES EN EUROPE',
      content: [
        'L\'Europe agricole s\'est profondément spécialisée selon les aptitudes naturelles et les proximités de marchés :',
        '1. Les grandes plaines céréalières et industrielles : Le Bassin parisien en France, la plaine de Beauce, l\'Est de l\'Angleterre et le Bassin du Pô en Italie. Champs géants de blé, maïs, colza et betterave sucrière à très haute rentabilité.',
        '2. Les régions d\'élevage intensif hors-sol : Bretagne (France), Pays-Bas, Danemark, Flandre. Élevages porcins, avicoles et laitiers concentrés alimentés avec du soja importé du Brésil.',
        '3. L\'agriculture méditerranéenne spécialisée : Espagne (l\'Andalousie et sa "mer de plastique" de serres maraîchères géantes à Almería), Italie du Sud, Grèce. Cultures de la vigne, de l\'olivier, des agrumes et des primeurs maraîchers irrigués.',
        '4. Les zones de montagne : Alpes, Pyrénées, Massif central. Élevage extensif pour la fabrication de fromages sous appellation d\'origine protégée (AOP) et entretien des paysages touristiques.'
      ],
      table: {
        headers: ['Zone géographique', 'Type d\'agriculture dominante', 'Productions emblématiques', 'Caractéristiques techniques'],
        rows: [
          ['Grandes plaines du Nord-Ouest (France, Allemagne)', 'Céréaliculture & grandes cultures', 'Blé tendre, orge, maïs, colza, betterave', 'Openfield, fermes de 100 à 300 ha, hyper-mécanisation'],
          ['Façade atlantique & mer du Nord (Bretagne, Pays-Bas)', 'Élevage intensif laitier & hors-sol', 'Lait, porcs, volailles, œufs', 'Bâtiments automatisés, lisier, forte concentration'],
          ['Bassin méditerranéen (Espagne, Italie, Grèce)', 'Arboriculture, viticulture & maraîchage', 'Vins fins, huile d\'olive, agrumes, tomates', 'Irrigation au goutte-à-goutte, serres géantes, main-d\'œuvre'],
          ['Massifs montagneux (Alpes, Massif Central)', 'Polyculture-élevage traditionnel', 'Bovins et ovins laitiers, fromages AOP', 'Pâturage d\'alpage, maintien du tissu rural et du tourisme']
        ]
      }
    },
    {
      title: 'V. LIMITES DU MODÈLE PRODUCTIVISTE ET TRANSITION AGRO-ÉCOLOGIQUE',
      content: [
        '1. Les dégâts environnementaux et sanitaires :',
        '• Pollution des nappes phréatiques et des rivières par les nitrates et pesticides (prolifération d\'algues vertes toxiques en Bretagne).',
        '• Érosion et tassement des sols par les engins lourds, disparition des abeilles et des pollinisateurs.',
        '• Crises sanitaires majeures (crise de la "vache folle" en 1996 provoquée par des farines animales dans l\'alimentation des bovins herbivores).',
        '2. Les réformes successives de la PAC : Abandon des prix garantis, découplage des aides (subventions versées à l\'hectare sous condition de respect de critères écologiques : jachères fleuries, haies, réduction des pesticides).',
        '3. L\'essor de l\'agriculture biologique et des circuits courts : Demande accrue des consommateurs pour des produits sans pesticides (Label Bio), vente directe du producteur au consommateur (AMAP) et traçabilité rigoureuse "de la fourche à la fourchette".'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS COMPARATIVES',
      content: [
        'Exercice 1 : Quelles sont les différences majeures entre la PAC initiale de 1962 et la PAC réformée contemporaine ?',
        'Correction : La PAC de 1962 était purement productiviste : son objectif unique était d\'augmenter les volumes à tout prix pour atteindre l\'autosuffisance grâce à des prix garantis encourageant la surproduction et l\'usage massif d\'engrais chimiques. La PAC contemporaine est régulatrice et agro-environnementale : elle a supprimé les prix garantis illimités, verse des aides directes conditionnées au respect de l\'environnement ("éco-régimes"), encourage la biodiversité, soutient l\'agriculture biologique et privilégie la qualité sanitaire et le bien-être animal.',
        'Exercice 2 : Pourquoi la présence massive d\'élevages porcins industriels en Bretagne a-t-elle engendré des marées vertes sur les plages atlantiques ?',
        'Correction : Les déjections des millions de porcs élevés en Bretagne (le lisier) sont épandues sur les champs comme fertilisant. Le sol ne pouvant absorber ces quantités excessives, les nitrates solubles sont lessivés par les pluies vers les rivières puis rejetés dans les baies marines côtières. Ces nitrates en excès agissent comme un engrais puissant stimulant la prolifération anarchique d\'algues vertes (ulves) qui, en se décomposant sur le sable, dégagent des gaz hautement toxiques (hydrogène sulfuré).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma d\'évolution : De l\'Europe productiviste à la transition agro-écologique',
    root: 'ÉVOLUTION DE L\'AGRICULTURE EUROPÉENNE',
    branches: [
      {
        name: 'MODÈLE PRODUCTIVISTE (1950-1990)',
        subtitle: 'Course aux volumes & modernisme',
        items: [
          'Mécanisation totale, remembrement, openfield',
          'Usage massif d\'engrais chimiques et pesticides',
          'PAC à prix garantis : surproduction massive',
          'Chute spectaculaire de la main-d\'œuvre (<3 %)'
        ]
      },
      {
        name: 'INTÉGRATION AGROALIMENTAIRE',
        subtitle: 'Le complexe agro-industriel',
        items: [
          'Contrats stricts avec les multinationales (Danone, Lactalis)',
          'Dépendance aux centrales d\'achat des supermarchés',
          'Spécialisation régionale poussée (céréales, lait, serres)',
          'Importation d\'aliments pour le bétail (soja brésilien)'
        ]
      },
      {
        name: 'TRANSITION AGRO-ÉCOLOGIQUE',
        subtitle: 'Qualité, santé & environnement',
        items: [
          'Réformes de la PAC : éco-régimes et verdissement',
          'Essor fulgurant de l\'Agriculture Biologique (Bio)',
          'Circuits courts, labels de qualité et traçabilité',
          'Lutte contre la pollution des nappes et des littoraux'
        ]
      }
    ]
  },
  conclusion: `L'histoire de l'agriculture européenne constitue un laboratoire fascinant de l'agronomie mondiale. Après avoir relevé triomphalement le défi de la quantité et de l'indépendance alimentaire, elle affronte aujourd'hui le défi de la qualité, de la santé publique et de la réconciliation écologique avec la nature. Cette expérience offre des leçons précieuses pour les pays en développement appelés à moderniser leurs agricultures sans reproduire les impasses du productivisme aveugle.`
};
