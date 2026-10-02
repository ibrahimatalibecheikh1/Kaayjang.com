import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE PREMIÈRE (SÉNÉGAL) — VOLUME 3 (LEÇONS 13 À 18)
// Grandes parties I, II, III, IV, V... Figures, Schémas, Cartes & Diagrammes
// Conforme au programme officiel consolidé de Géographie Première
// =========================================================================

export const LESSON_13_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-13',
  number: 'LEÇON 13',
  title: 'Les formes modernes de mise en valeur agricole dans les pays neufs',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Notion de pays neufs (USA, Canada, Australie, Brésil, Argentine), gigantisme des exploitations, agro-business américain, ceintures agricoles (belts), chaîne logistique mondiale et limites écologiques.',
  introduction: `Dans la géographie classique, l'expression « pays neufs » désigne les vastes territoires colonisés et peuplés tardivement par les vagues migratoires européennes aux XVIIIe et XIXe siècles, principalement en Amérique du Nord (États-Unis, Canada), en Océanie (Australie, Nouvelle-Zélande) et dans certaines régions d'Amérique du Sud (Brésil, Argentine). Disposant d'espaces continentaux immenses sans passé féodal ni morcellement foncier médiéval, ces nations ont inventé un modèle d'agriculture commerciale extensive à très grande échelle. Caractérisé par des exploitations de dimensions colossales, une motorisation d'avant-garde, une intégration totale au système de l'agrobusiness et une chaîne logistique mondiale ultra-performante, ce modèle domine les exportations planétaires de céréales, d'oléagineux et de viande, tout en révélant de graves fragilités environnementales.`,
  sections: [
    {
      title: 'I. CARACTÉRISTIQUES FONDAMENTALES DES « PAYS NEUFS »',
      content: [
        '1. L\'immensité territoriale et l\'abondance des terres : Les "pays neufs" disposent d\'un ratio terres cultivables par habitant sans équivalent dans le monde (plus de 1,5 à 2 hectares par habitant aux États-Unis et en Australie, contre moins de 0,2 en Chine ou en Europe).',
        '2. L\'absence de paysannerie traditionnelle attachée au sol : La colonisation a effacé les populations autochtones originelles (Indiens d\'Amérique, Aborigènes) pour instaurer une agriculture de conquête conçue dès le départ comme une activité industrielle et spéculative tournée vers le profit.',
        '3. Le découpage géométrique orthogonal de l\'espace : Aux États-Unis et au Canada, le système du "Township and Range" (créé par le Land Ordinance de 1785) a découpé le territoire en carrés géométriques parfaits de 1 mile de côté (sections de 640 acres soit environ 260 hectares), visibles d\'avion sous la forme d\'un damier gigantesque avec des routes rectilignes et des parcelles circulaires irriguées par pivot central.'
      ]
    },
    {
      title: 'II. LE GIGANTISME TECHNIQUE ET LA SPÉCIALISATION RÉGIONALE (LES "BELTS" AMÉRICAINS)',
      content: [
        '1. Le gigantisme des structures agraires : Les fermes familiales dépassent couramment 500 à 2 000 hectares dans les Grandes Plaines américaines et 10 000 à 50 000 hectares (stations d\'élevage ou "ranches") en Australie et en Argentine (Pampa).',
        '2. La motorisation extrême et la technologie satellitaire : Moissonneuses géantes guidées par GPS et intelligence artificielle, épandage aérien par avion ou drone agricole, capteurs d\'humidité du sol et semoirs surpuissants permettant à un seul exploitant et ses enfants de gérer des milliers d\'hectares.',
        '3. Le système historique des "Belts" (ceintures agricoles spécialisées aux États-Unis) :',
        '• La Corn Belt (Midwest : Iowa, Illinois, Indiana) : Climat chaud et humide en été, sols noirs très fertiles (mollisols). Première région productrice de maïs et de soja au monde, étroitement associée à l\'engraissement intensif des bovins et porcs.',
        '• La Wheat Belt (Grandes Plaines du Kansas au Dakota) : Vaste ceinture céréalière semi-aride découpée en blé d\'hiver au Sud et blé de printemps au Nord et au Canada.',
        '• La Cotton Belt : Historiquement au Sud-Est (devenue le "Sun Belt" polyculture-volailles-fruits).',
        '• La Dairy Belt (Grands Lacs et Nord-Est) : Production laitière intensive pour les grandes mégapoles urbaines.',
        '• Le Ranching pastoral extensif : Dans les zones arides de l\'Ouest (Texas, Montana, Wyoming).'
      ],
      table: {
        headers: ['Région / Ceinture', 'Conditions géographiques', 'Productions maîtresses', 'Destination économique'],
        rows: [
          ['Corn Belt (Midwest américain)', 'Plaines tempérées chaudes, sols profonds', 'Maïs grain, soja, élevage bovin/porcin', 'Alimentation du bétail, biocarburants (éthanol), export'],
          ['Wheat Belt (Grandes Plaines)', 'Climat continental semi-aride', 'Blé tendre et dur de printemps et d\'hiver', 'Farine industrielle, panification, exportation mondiale'],
          ['Pampa argentine & Cerrado brésilien', 'Savanes et prairies subtropicales', 'Soja transgénique, maïs, bœuf de boucherie', 'Exportation massive vers la Chine et l\'Europe'],
          ['Ranches d\'Australie', 'Zones semi-désertiques (Outback)', 'Bovins viande, ovins pour la laine mérinos', 'Marchés asiatiques et industrie textile mondiale']
        ]
      }
    },
    {
      title: 'III. L\'AGROBUSINESS AMÉRICAIN : INTÉGRATION VERTICALE COMPLÈTE',
      content: [
        'Le terme "Agribusiness", forgé aux États-Unis par Davis et Goldberg en 1957, englobe la totalité du complexe agro-industriel :',
        '1. En amont : Les géants des intrants, de la biotechnologie et du matériel (John Deere, Bayer-Monsanto, Corteva).',
        '2. Au centre : Les exploitants endettés qui contractualisent la totalité de leur production avant même les semailles.',
        '3. En aval : Les cartels mondiaux du négoce de grains appelés le groupe "ABCD" (ADM, Bunge, Cargill, Louis Dreyfus) qui contrôlent le stockage mondial, le transport maritime et la spéculation sur les marchés financiers.',
        '4. Les feedlots (parcs d\'engraissement industriels géants) : Des dizaines de milliers de bœufs sont parqués à l\'air libre sur des sols nus et nourris exclusivement de céréales et de compléments azotés pour produire de la viande standardisée en un temps record.'
      ]
    },
    {
      title: 'IV. LE RÔLE ESSENTIEL DE LA LOGISTIQUE CONTINENTALE ET MONDIALE',
      content: [
        'L\'agriculture des pays neufs ne pourrait exister sans un réseau d\'infrastructures de transport de masse ultra-performant :',
        '1. Les silos cathédrales régionaux : Immenses tours en béton implantées le long des voies ferrées pour collecter, nettoyer et calibrer le grain par millions de tonnes.',
        '2. Les trains de grains géants (Unit trains) : Convois ferroviaires de plus de 100 wagons-trémies circulant d\'une seule traite du Midwest vers les terminaux côtiers.',
        '3. L\'axe fluvial majeur du Mississippi : Artère vitale sur laquelle naviguent des trains de barges poussées (un seul convoi de barges transporte l\'équivalent de 1 000 camions) jusqu\'au port d\'exportation de La Nouvelle-Orléans.',
        '4. Les terminaux portuaires céréaliers automatisés : Chargement ultra-rapide des navires vraquiers géants (Panamax et Capesize) à destination de l\'Europe, de la Chine et de l\'Afrique.'
      ]
    },
    {
      title: 'V. LIMITES ÉCOLOGIQUES ET VULNÉRABILITÉS MAJEURES DU MODÈLE',
      content: [
        '1. L\'érosion des sols et le spectre du "Dust Bowl" : Dans les années 1930, le labourage mécanique excessif des prairies arides américaines combiné à la sécheresse a provoqué de gigantesques tempêtes de poussière qui ont décapé l\'horizon fertile des sols.',
        '2. L\'épuisement critique des nappes phréatiques fossiles : L\'aquifère géant d\'Ogallala, qui s\'étend sous huit États américains et alimente des dizaines de milliers de pivots d\'irrigation circulaires, s\'épuise à un rythme alarmant (nappe non renouvelable).',
        '3. La dépendance totale à l\'énergie fossile : Ce système consomme des quantités considérables de pétrole et de gaz pour faire tourner les engins géants et fabriquer les engrais azotés.',
        '4. La vulnérabilité aux cours mondiaux et à l\'endettement : Malgré leur gigantisme, les fermiers américains et brésiliens sont lourdement endettés auprès des banques et dépendent massivement des subventions d\'État ("Farm Bill") pour éviter la faillite en cas de chute des cours boursiers mondiaux.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ANALYSE DE LA CHAÎNE LOGISTIQUE',
      content: [
        'Exercice 1 : Construire le schéma annoté de la chaîne logistique complète reliant un champ de blé du Kansas au Port de Dakar au Sénégal.',
        'Correction : Le circuit comprend : 1. Récolte dans le champ par moissonneuse guidée par GPS. 2. Camion benne acheminant le grain vers le silo local du chemin de fer. 3. Train géant de wagons-trémies ou convoi de barges sur le Mississippi. 4. Élévateur terminal du port de La Nouvelle-Orléans. 5. Navire céréalier vraquier traversant l\'Atlantique. 6. Déchargement par aspiration pneumatique aux Grands Moulins de Dakar (Mole 8 du Port Autonome de Dakar). 7. Transformation en farine de pain consommée dans les boulangeries sénégalaises.',
        'Exercice 2 : Pourquoi la nappe d\'Ogallala aux États-Unis est-elle qualifiée de nappe fossile et quel danger menace les agriculteurs des Grandes Plaines ?',
        'Correction : Une nappe est dite fossile lorsqu\'elle a été emprisonnée dans le sous-sol lors d\'ères géologiques passées (périodes glaciaires pluvieuses) et qu\'elle ne reçoit plus aucune recharge naturelle significative par les pluies actuelles en raison de l\'aridité du climat. Son pompage continu et massif pour l\'irrigation des céréales s\'apparente à une extraction minière : le niveau baisse chaque année sans espoir de renouvellement, condamnant à terme l\'agriculture irriguée à disparaître au profit d\'un retour forcé à l\'élevage extensif sec.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma logistique : La chaîne d\'exportation céréalière des pays neufs',
    root: 'AGROBUSINESS & LOGISTIQUE MONDIALE',
    branches: [
      {
        name: 'EXPLOITATION GÉANTE',
        subtitle: 'Production mécanisée',
        items: [
          'Parcelles géantes en damier ou cercles irrigués (pivot)',
          'Tracteurs et moissonneuses guidés par GPS / IA',
          'Intégration amont : semences OGM, engrais, banques',
          'Très faible main-d\'œuvre (1 à 2 actifs pour 1 000 ha)'
        ]
      },
      {
        name: 'DRAINAGE LOGISTIQUE',
        subtitle: 'Silos, Trains & Barges',
        items: [
          'Silos cathédrales le long des axes ferroviaires',
          'Unit trains de plus de 100 wagons-trémies',
          'Trains de barges poussées sur le fleuve Mississippi',
          'Minimisation absolue du coût unitaire de transport'
        ]
      },
      {
        name: 'TERMINAUX GÉANTS & EXPORT',
        subtitle: 'Marché mondial & Vraquiers',
        items: [
          'Terminaux portuaires automatisés (Golfe du Mexique)',
          'Navires céréaliers vraquiers géants (Panamax)',
          'Marchés à terme et bourses de grains (CBOT Chicago)',
          'Livraison des ports du monde entier (Dakar, Rotterdam, Shanghai)'
        ]
      }
    ]
  },
  conclusion: `Les pays neufs ont poussé l'agriculture commerciale à son stade industriel ultime. Puissants greniers du monde capables de nourrir des milliards d'êtres humains à bas coût, ces pays incarnent le triomphe de la logistique et du gigantisme capitalistique. Mais la crise climatique, le tarissement des nappes fossiles et l'érosion des sols rappellent que la puissance technologique ne peut durablement s'affranchir des limites écologiques de la biosphère.`
};

export const LESSON_14_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-14',
  number: 'LEÇON 14',
  title: 'La pêche : formes traditionnelle et moderne',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '28 min',
  description: 'Ressources halieutiques mondiales, facteurs biologiques (upwelling), pêche artisanale vs industrielle, chaîne de valeur littorale, et rôle stratégique de la pêche au Sénégal.',
  introduction: `La pêche est une activité millénaire d'exploitation d'une ressource biologique naturelle renouvelable : la faune aquatique des océans, des mers intérieures et des eaux douces. Avec plus de 180 millions de tonnes de poissons, crustacés et mollusques capturés ou élevés chaque année dans le monde, elle constitue un pilier fondamental de la sécurité alimentaire, fournissant plus de 20 % des protéines animales à des milliards d'êtres humains. La géographie distingue traditionnellement la pêche artisanale, enracinée dans les communautés côtières et fortement créatrice d'emplois, et la pêche industrielle hauturière, véritable usine flottante hyper-technologique. Au Sénégal, pays maritime par excellence doté de plus de 700 kilomètres de côtes atlantiques réputées parmi les plus poissonneuses du globe, la pêche est le premier secteur exportateur et l'âme de l'alimentation nationale.`,
  sections: [
    {
      title: 'I. LES FACTEURS GÉOGRAPHIQUES ET BIOLOGIQUES DE LA RESSOURCE HALIEUTIQUE',
      content: [
        'La répartition du poisson dans les océans est très inégale et dépend de facteurs écologiques et océanographiques précis :',
        '1. Le rôle déterminant du plateau continental : Zone sous-marine peu profonde (moins de 200 mètres) bordant les côtes. Pénétrée par la lumière solaire nécessaire à la photosynthèse du phytoplancton, elle concentre l\'écrasante majorité des stocks de poissons.',
        '2. Les phénomènes d\'upwelling (remontées d\'eaux côtières froides) : Sous l\'action des vents réguliers qui poussent les eaux de surface vers le large, des eaux sous-marines profondes froides et saturées de sels minéraux nutritifs (phosphates, nitrates) remontent à la surface. Ces sels fertilisent le phytoplancton, base d\'une chaîne trophique marine d\'une richesse prodigieuse.',
        '3. Les quatre grands upwellings mondiaux :',
        '• Le courant de Humboldt (Pérou / Chili) : première zone d\'anchois au monde.',
        '• Le courant des Canaries (Mauritanie et Sénégal) : l\'un des écosystèmes marins les plus productifs d\'Afrique.',
        '• Le courant de Benguela (Namibie / Afrique du Sud).',
        '• Le courant de Californie (côte ouest des États-Unis).'
      ]
    },
    {
      title: 'II. LA PÊCHE ARTISANALE : TECHNIQUES, EMPLOI ET ANCRAGE TERRITORIAL',
      content: [
        '1. Définition et caractéristiques :',
        '• Unités de petite taille : Pirogues traditionnelles en bois ou en fibre de verre (de 8 à 22 mètres au Sénégal), équipées de moteurs hors-bord de 15 à 60 chevaux.',
        '• Forte intensité en main-d\'œuvre : Mobilise des équipages nombreux (5 à 25 pêcheurs par pirogue selon les engins).',
        '• Marées courtes : Sorties journalières ou de quelques jours (glacières de glace concassée embarquées à bord).',
        '2. La diversité des engins de pêche artisanale :',
        '• La senne tournante et coulissante : Immense filet encerclant les bancs de petits pélagiques (sardinelles / "yaboy").',
        '• Les filets maillants dérivants ou dormants pour les poissons démersaux de fond.',
        '• La ligne et la palangre : Pratique sélective capturant des poissons nobles (mérous / "thiof", daurades, thons).',
        '3. Rôle nourricier et social irremplaçable : La pêche artisanale fournit plus de 80 % des débarquements destinés à la consommation locale au Sénégal et garantit le plat national emblématique : le Thiéboudienne (Ceebu jën).'
      ]
    },
    {
      title: 'III. LA PÊCHE INDUSTRIELLE HAUTURIÈRE : L\'USINE EN PLEINE MER',
      content: [
        '1. Des navires géants à très forte autonomie : Chalutiers congélateurs, thoniers-senneurs et navires-usines de 50 à plus de 120 mètres de long capables de rester en mer pendant plusieurs mois.',
        '2. La détection électronique et satellitaire : Radars marins, échosondeurs multifaisceaux, sonars 3D et repérage par satellite des zones thermiques et des bancs de poissons.',
        '3. Le traitement industriel immédiat à bord : Dès la capture, le poisson est trié mécaniquement, étêté, éviscéré, fileté, conditionné en cartons et surgelé à −30 °C dans les cales frigorifiques.',
        '4. Les pavillons étrangers et les flottes multinationales : Flottes industrielles battant pavillon de l\'Union Européenne (Espagne, France), de Chine, de Russie ou de Corée du Sud sillonnant les eaux internationales et les Zones Économiques Exclusives (ZEE) africaines.'
      ],
      table: {
        headers: ['Critères de comparaison', 'Pêche artisanale traditionnelle', 'Pêche industrielle moderne'],
        rows: [
          ['Embarcations', 'Pirogues bois/fibre (8 à 22 m), moteur hors-bord', 'Chalutiers géants, thoniers congélateurs (50 à 120 m)'],
          ['Équipage et emplois', 'Forte intensité de main-d\'œuvre (millions d\'emplois)', 'Faible équipage hautement qualifié et mécanisé'],
          ['Rayon d\'action et durée', 'Côte et plateau continental (1 à 5 jours)', 'Hauturière, eaux internationales (plusieurs mois)'],
          ['Techniques de détection', 'Observation visuelle, oiseaux marins, expérience locale', 'Sondeurs, radars, sonars et guidage par satellite'],
          ['Traitement des captures', 'Débarquement frais sur la plage, salage/fumage artisanal', 'Surgélation et usine de filetage automatisée à bord'],
          ['Destination des captures', 'Alimentation locale et marchés sous-régionaux', 'Exportation internationale et usines de farines animales']
        ]
      }
    },
    {
      title: 'IV. LA FILIÈRE AVAL : DE LA PLAGE AU MARCHÉ',
      content: [
        'La valeur économique et les emplois de la pêche se démultiplient après le débarquement :',
        '1. Le quai de débarquement et la criée : Négociations effervescentes dès l\'arrivée des pirogues entre pêcheurs, mareyeurs et revendeuses.',
        '2. Le mareyage : Achat, transport frigorifique rapide en camions isothermes vers les marchés des villes de l\'intérieur (Thiès, Touba, Tambacounda) et les pays limitrophes enclavés (Mali, Burkina Faso).',
        '3. La transformation artisanale locale (réservée historiquement aux femmes) :',
        '• Le séchage au soleil et salage : Production de "guèye" et de "tambadiang".',
        '• Le fumage traditionnel : Production de "kétiakh" sur des claies en bois ou fours améliorés, assurant la conservation des protéines pendant des mois sans réfrigération.',
        '4. L\'industrie de conserve et de semi-conserve : Conserveries de thon et unités de traitement des céphalopodes (poulpes, seiches) et crevettes pour l\'exportation vers l\'Europe et l\'Asie.'
      ]
    },
    {
      title: 'V. LA PÊCHE AU SÉNÉGAL : PILIER ÉCONOMIQUE ET DÉFIS CRITIQUES',
      content: [
        '1. Le poids macro-économique au Sénégal :',
        '• Premier pourvoyeur de devises d\'exportation avec plus de 250 milliards de FCFA par an.',
        '• Fait vivre directement ou indirectement plus de 600 000 personnes (soit près de 15 à 18 % de la population active nationale).',
        '• Les grands ports et sites de débarquement : Dakar (Port de pêche), Kayar, Saint-Louis (Guet Ndar), Mbour, Joal-Fadiouth, Kafountine.',
        '2. La crise aiguë de la ressource et la surexploitation halieutique :',
        '• Raréfaction dramatique des espèces nobles (le "thiof" ou mérou blanc est devenu hors de prix) et baisse inquiétante des captures de sardinelles.',
        '• La controverse des usines de farine de poisson : Des dizaines d\'usines étrangères implantées sur la côte sénégalaise et mauritanienne transforment des centaines de milliers de tonnes de sardinelles fraîches en farine animale exportée pour nourrir les saumons d\'élevage en Europe ou les porcs en Chine, privant les ménages sénégalais de leur nourriture de base.',
        '• Les accords de pêche internationaux et la pêche illégale non déclarée (INN).',
        '3. Le drame de l\'émigration : Désemparés face à la baisse des prises, de nombreux jeunes pêcheurs reconvertissent leurs pirogues pour convoyer des migrants clandestins vers les îles Canaries ("Barça ou Barsakh").'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS MÉTHODOLOGIQUES',
      content: [
        'Exercice 1 : Pourquoi les côtes sénégalaises et mauritaniennes sont-elles exceptionnellement riches en poissons ?',
        'Correction : Cette prodigieuse richesse biologique résulte de la conjonction de deux facteurs géographiques majeurs : 1. L\'existence d\'un large plateau continental baigné par la lumière du soleil. 2. La présence d\'un puissant upwelling côtier généré par le courant froid des Canaries et les alizés maritimes, qui fait remonter en continu des profondeurs marines des sels minéraux fertilisant une profusion de phytoplancton, aliment de base des bancs de poissons.',
        'Exercice 2 : Analysez les conséquences de l\'implantation des usines de farine de poisson sur la sécurité alimentaire au Sénégal.',
        'Correction : Les usines de farine de poisson créent une concurrence déloyale écrasante en rachetant massivement les débarquements de sardinelles ("yaboy") à des prix que les ménages pauvres et les femmes transformatrices de "kétiakh" ne peuvent plus payer. Cela provoque une flambée du prix du poisson sur les marchés locaux, aggrave la malnutrition protéique des populations vulnérables et détruit des milliers d\'emplois traditionnels féminins dans la transformation artisanale.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma écosystémique : L\'upwelling côtier et la chaîne halieutique sénégalaise',
    root: 'LE SECTEUR HALIEUTIQUE SÉNÉGALAIS',
    branches: [
      {
        name: 'MÉCANISME BIOLOGIQUE (UPWELLING)',
        subtitle: 'Fertilité marine exceptionnelle',
        items: [
          'Alizés poussant les eaux superficielles chaudes au large',
          'Remontée d\'eaux profondes froides riches en nutriments',
          'Prolifération explosive du phytoplancton et zooplancton',
          'Attraction de bancs immenses de sardinelles et poissons nobles'
        ]
      },
      {
        name: 'PÊCHE ARTISANALE (COEUR SOCIAL)',
        subtitle: 'Pirogues & Emplois massifs',
        items: [
          'Pirogues motorisées (Saint-Louis, Kayar, Mbour, Joal)',
          'Sennes tournantes, lignes à main et filets maillants',
          'Alimente 80 % de la consommation nationale (Thiéboudienne)',
          'Transformation par les femmes : fumage (kétiakh), séchage'
        ]
      },
      {
        name: 'DÉFIS & THÉÂTRE DE TENSIONS',
        subtitle: 'Surexploitation & Souveraineté',
        items: [
          'Pillage par les chalutiers géants et pêche illégale (INN)',
          'Scandale des usines de farine de poisson exportée',
          'Chute des stocks de "thiof" et paupérisation des pêcheurs',
          'Tentations de la migration clandestine vers les Canaries'
        ]
      }
    ]
  },
  conclusion: `La pêche est l'un des trésors géographiques et économiques les plus précieux du Sénégal et de l'Afrique côtière. Face à la double menace de la surexploitation industrielle et des usines de farine de poisson, la préservation des stocks halieutiques exige une régulation étatique rigoureuse, le repos biologique des espèces marines et la sanctuarisation de la pêche artisanale au service exclusif de la souveraineté alimentaire nationale.`
};

export const LESSON_15_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-15',
  number: 'LEÇON 15',
  title: 'La ville : définition et fonctions',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Définition géographique et statistique de la ville, morphologie urbaine, typologie des fonctions urbaines (politique, marchande, financière, culturelle), rayonnement et primauté dakaroise.',
  introduction: `La ville est l'établissement humain le plus complexe et le plus transformateur façonné par les sociétés au cours de leur histoire. Elle ne se caractérise pas seulement par une haute densité démographique et un paysage dominé par le bâti continu en dur : elle est avant tout un foyer d'activités tertiaires et secondaires, un nœud d'interconnexion pour les flux matériels et immatériels, et un centre d'impulsion exerçant un commandement et un rayonnement sur son environnement régional, national ou mondial. Définir la ville impose de croiser des seuils statistiques nécessairement variables selon les pays avec des critères sociologiques et spatiaux, tout en analysant la palette des fonctions qui justifient son existence et structurent son organisation interne.`,
  sections: [
    {
      title: 'I. LA DÉFINITION GÉOGRAPHIQUE DE LA VILLE ET LES CRITÈRES STATISTIQUES',
      content: [
        '1. La difficulté d\'une définition universelle unique : Il n\'existe aucun seuil démographique mondial unique agréé par tous les États.',
        '• En France : Une agglomération est qualifiée d\'urbaine dès qu\'elle regroupe au moins 2 000 habitants agglomérés sans discontinuité du bâti supérieure à 200 mètres.',
        '• En Suède ou au Danemark : Le seuil statistique n\'est que de 200 habitants.',
        '• Au Japon ou en Suisse : Le seuil s\'élève à 10 000, voire 30 000 habitants.',
        '• Au Sénégal : Sont officiellement considérées comme urbaines les localités érigées en communes par décret administratif ou celles dépassant 10 000 habitants agglomérés exerçant majoritairement des activités non agricoles.',
        '2. Les critères qualitatifs et fonctionnels complémentaires :',
        '• La morphologie spatiale : Densité élevée du bâti, hauteur des immeubles, voiries bitumées, réseaux d\'adduction d\'eau, d\'électricité et de télécommunications.',
        '• La prédominance des activités non agricoles : La majorité de la population active travaille dans les services (commerce, administration, banques, santé, enseignement) ou l\'industrie.',
        '• Le mode de vie urbain : Individualisation des comportements, diversification sociale, mixité culturelle et rythme de vie accéléré.'
      ]
    },
    {
      title: 'II. LES GRANDES FONCTIONS URBAINES',
      content: [
        'Une ville n\'existe que par les rôles qu\'elle remplit pour sa propre population et pour les territoires extérieurs qu\'elle dessert. Ces fonctions urbaines sont multiples et souvent cumulées :',
        '1. La fonction politique et administrative (Fonction régalienne) : Siège de la présidence, des ministères, des assemblées parlementaires, des cours de justice, des ambassades et des préfectures (ex: Dakar capitale du Sénégal, Washington, Yamoussoukro).',
        '2. La fonction commerciale et de distribution : Présence de marchés de gros et de détail, de centres commerciaux, d\'entrepôts logistiques et de foires internationales (ex: Kaolack carrefour commercial arachidier).',
        '3. La fonction industrielle et manufacturière : Parcs industriels, raffineries, usines textiles ou chimiques valorisant des matières premières et une abondante main-d\'œuvre.',
        '4. La fonction financière et tertiaire supérieure : Sièges sociaux de multinationales, bourses de valeurs mobilières, banques centrales (BCEAO à Dakar).',
        '5. La fonction culturelle, éducative et scientifique : Universités, grands hôpitaux spécialisés, musées nationaux, centres de recherche.',
        '6. Les fonctions spécifiques particulières :',
        '• Fonction religieuse et spirituelle : Cités saintes polarisant des pèlerinages géants (Touba avec le Grand Magal, Tivaouane, La Mecque, Rome, Jérusalem).',
        '• Fonction touristique et balnéaire (Saly Portudal, Nice, Cancún) ou minière (Kédougou, Lubumbashi).'
      ],
      table: {
        headers: ['Fonction urbaine', 'Infrastructures typiques', 'Exemple international', 'Exemple au Sénégal'],
        rows: [
          ['Politique & Administrative', 'Palais présidentiel, ministères, ambassades', 'Washington, Paris, Brasilia', 'Dakar-Plateau'],
          ['Religieuse & Pèlerinage', 'Grandes mosquées, basiliques, sanctuaires', 'La Mecque, Rome, Varanasi', 'Touba, Tivaouane, Popenguine'],
          ['Commerciale & Carrefour', 'Marchés de gros, ports secs, gares de fret', 'Dubaï, Singapour, Hambourg', 'Kaolack, Touba, Diaobé'],
          ['Industrielle & Portuaire', 'Terminaux à conteneurs, zones franches, usines', 'Rotterdam, Shanghai, Busan', 'Dakar (Zone industrielle, Mole 8)'],
          ['Balnéaire & Touristique', 'Complexes hôteliers, plages, marinas', 'Cancún, Miami, Palma', 'Saly Portudal, Cap Skirring']
        ]
      }
    },
    {
      title: 'III. L\'ORGANISATION MORPHOLOGIQUE INTERNE DE LA VILLE',
      content: [
        'L\'espace urbain n\'est pas homogène : il s\'organise en zones fonctionnelles différenciées :',
        '1. Le Centre-ville / CBD (Central Business District) : Le cœur historique des affaires, caractérisé par une très forte densité verticale, les valeurs foncières les plus chères, la concentration des sièges sociaux et banques, et une faible population résidente la nuit (ex: Le Plateau à Dakar, Manhattan à New York).',
        '2. Les quartiers résidentiels péricentraux : Quartiers aisés ou de classe moyenne bien équipés en voiries et espaces verts (ex: Almadies, Fann, Point E à Dakar).',
        '3. Les quartiers populaires et denses : Habitat dense, tissu commercial foisonnant (ex: Médina, Grand Dakar).',
        '4. Les banlieues et périphéries lointaines : Banlieues dortoirs pavillonnaires ou au contraire ceintures d\'habitats spontanés non lotis et bidonvilles mal desservis par les transports (ex: Pikine, Guédiawaye, Keur Massar).'
      ]
    },
    {
      title: 'IV. LE RAYONNEMENT ET LA HIÉRARCHIE URBAINE',
      content: [
        '1. L\'aire d\'influence urbaine : Espace géographique polarisé par la ville, qui y puise sa nourriture, son eau et ses travailleurs quotidiens, et auquel elle fournit des biens manufacturés, des soins spécialisés et des décisions politiques.',
        '2. Le réseau urbain hiérarchisé : Organisation pyramidale théorique comprenant des petites villes relais, des villes moyennes d\'équilibre et une métropole dominante.',
        '3. Le déséquilibre de la primauté urbaine (Macrocéphalie) : Dans de nombreux pays du Sud, la ville principale écrase totalement toutes les autres cités. L\'indice de primauté (rapport entre la population de la 1ère ville et celle de la 2ème ville) dépasse souvent 4 ou 5. Au Sénégal, Dakar est près de 4 fois plus peuplée que Touba, deuxième agglomération du pays.'
      ]
    },
    {
      title: 'V. L\'EXEMPLE MAJEUR DE LA MÉTROPOLE DAKAROISE',
      content: [
        '1. Un site péninsulaire exigu : Située à l\'extrémité de la presqu\'île du Cap-Vert, Dakar est enfermée dans un cul-de-sac géographique entouré par l\'océan sur trois côtés, ce qui bloque son extension spatiale naturelle.',
        '2. Le cumul exceptionnel de fonctions :',
        '• Capitale politique et diplomatique de la République.',
        '• Port Autonome de Dakar (PAD) : hub maritime majeur de l\'Atlantique.',
        '• Pôle financier, bancaire et boursier de l\'Afrique de l\'Ouest.',
        '• Siège de la plus prestigieuse université de la région (UCAD) et des hôpitaux nationaux.',
        '3. La réponse face à l\'asphyxie : Le projet étatique de desserrement vers le Pôle Urbain de Diamniadio et la liaison rapide par le TER (Train Express Régional) et les autoroutes à péage.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ANALYSE DE PAYSAGE URBAIN',
      content: [
        'Exercice 1 : Pourquoi la seule taille démographique ne suffit-elle pas à définir une ville en géographie ?',
        'Correction : Un gros village agricole en Inde ou au Nigeria peut regrouper 15 000 habitants sans être une ville, car la quasi-totalité des habitants y pratique une agriculture d\'autoconsommation, sans services administratifs, banques, hôpitaux ni voiries bitumées. Inversement, une cité administrative ou minière de 5 000 habitants avec des fonctions de commandement, des banques et des industries est une authentique ville. C\'est la nature des fonctions et la primauté des activités non agricoles qui définissent fondamentalement le fait urbain.',
        'Exercice 2 : Définir et différencier "site urbain" et "situation urbaine".',
        'Correction : Le site urbain est le cadre physique précis, topographique et naturel sur lequel la ville s\'est initialement implantée (une colline défensive, une île fluviale, une presqu\'île comme à Dakar). La situation urbaine est la position géographique relative de la ville par rapport aux grands axes de communication, aux routes commerciales et aux régions voisines (Dakar en situation d\'extrême avancée maritime de l\'Afrique vers les Amériques et l\'Europe).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma concentrique : La structure fonctionnelle et spatiale d\'une ville',
    root: 'LA STRUCTURE URBAINE',
    branches: [
      {
        name: 'LE CENTRE-VILLE (CBD)',
        subtitle: 'Cœur des affaires & Commandement',
        items: [
          'Ministères, palais présidentiel, sièges sociaux',
          'Banques, bourses, cabinets de conseil',
          'Très forte valeur du mètre carré de terrain',
          'Emplois tertiaires de jour, dépeuplement la nuit'
        ]
      },
      {
        name: 'COURONNES RÉSIDENTIELLES',
        subtitle: 'Habitats & Commerces de quartier',
        items: [
          'Quartiers péricentraux aisés (Almadies, Fann)',
          'Quartiers populaires denses (Médina, Grand Dakar)',
          'Écoles, cliniques, marchés de proximité',
          'Tissu artisanal et petits commerces informels'
        ]
      },
      {
        name: 'PÉRIPHÉRIES & BANLIEUES',
        subtitle: 'Extension & Desserrement',
        items: [
          'Banlieues dortoirs à forte croissance (Pikine, Guédiawaye)',
          'Zones industrielles et parcs logistiques (Diamniadio)',
          'Mobilités pendulaires intenses vers le centre le matin',
          'Nouveaux pôles urbains planifiés pour désengorger'
        ]
      }
    ]
  },
  conclusion: `La ville est le moteur économique, culturel et technologique des sociétés modernes. En concentrant le pouvoir de décision et les activités créatrices de valeur, elle rayonne sur les territoires environnants. Mais son efficacité spatiale dépend de sa capacité à équilibrer ses fonctions et à maîtriser sa morphologie pour offrir un cadre de vie inclusif à tous ses habitants.`
};

export const LESSON_16_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-16',
  number: 'LEÇON 16',
  title: 'Diversité des processus et des formes d’urbanisation dans le monde',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '28 min',
  description: 'Explosion urbaine mondiale, transition urbaine, mégapoles et mégalopolis, étalement urbain (sprawl), périurbanisation et contrastes Nord-Sud d’urbanisation.',
  introduction: `L'urbanisation est l'un des phénomènes géographiques majeurs de l'époque contemporaine. Elle désigne à la fois la croissance numérique de la population résidant en ville et l'extension physique des espaces bâtis au détriment des campagnes. Depuis l'année charnière 2008, l'humanité a franchi un seuil historique : plus de la moitié de la population mondiale vit désormais en ville, et ce taux devrait atteindre près de 70 % d'ici 2050. Toutefois, cette transition urbaine planétaire ne s'opère pas au même rythme ni sous les mêmes formes selon les continents : alors que les pays développés du Nord connaissent une urbanisation stabilisée et maîtrisée marquée par la périurbanisation, les pays du Sud, particulièrement en Afrique et en Asie, font face à une explosion urbaine effrénée, créatrice de mégapoles géantes confrontées à des défis d'aménagement titanesques.`,
  sections: [
    {
      title: 'I. LA TRANSITION URBAINE MONDIALE : RYTHMES ET ÉVOLUTIONS',
      content: [
        '1. La notion de transition urbaine : Passage d\'une société majoritairement rurale à une société majoritairement urbaine.',
        '• En 1800 : Seulement 3 % de l\'humanité vivait en ville.',
        '• En 1950 : Le taux d\'urbanisation mondiale atteignait 30 % (750 millions de citadins).',
        '• En 2024 : Le taux dépasse 57 % (plus de 4,5 milliards de citadins).',
        '2. Les deux moteurs conjoints de la croissance urbaine :',
        '• L\'accroissement naturel urbain : Les villes disposant d\'un meilleur accès relatif aux soins médicaux et à l\'eau potable, le taux de natalité y surpasse le taux de mortalité, générant une croissance interne puissante.',
        '• L\'exode rural massif : Arrivée incessante de ruraux fuyant la pauvreté des campagnes, le manque de terres et l\'absence d\'emplois vers les opportunités supposées de la ville.',
        '• L\'intégration spatiale : Annexion et transformation des villages ruraux limitrophes au fur et à mesure de l\'avancée du front d\'urbanisation.'
      ]
    },
    {
      title: 'II. LES CONTRASTES NORD-SUD DANS LE PROCESSUS D\'URBANISATION',
      content: [
        '1. L\'urbanisation ancienne et stabilisée des pays du Nord :',
        '• Taux d\'urbanisation très élevés : Supérieurs à 75 à 85 % (Amérique du Nord, Europe, Japon, Australie).',
        '• Croissance urbaine très faible (<1 % par an) : La population rurale étant devenue résiduelle, l\'exode rural est achevé.',
        '• Le modèle de la périurbanisation : Les ménages quittent les centres denses pour s\'installer dans des maisons individuelles avec jardin situées dans des communes rurales périphériques, tout en continuant à travailler dans la ville-centre (mobilité automobile).',
        '2. L\'explosion urbaine foudroyante des pays du Sud :',
        '• Taux d\'urbanisation encore modérés mais en hausse vertigineuse : L\'Afrique et l\'Asie du Sud comptent entre 40 et 50 % de citadins, mais les villes y grandissent à un rythme de 3 à 5 % par an !',
        '• Le phénomène de gigantisme urbain : Le Sud concentre désormais la quasi-totalité des nouvelles mégapoles planétaires (Lagos, Kinshasa, Le Caire, Dhaka, Delhi, Karachi).',
        '• L\'incapacité des investissements publics à suivre ce rythme foudroyant, générant une prolifération de quartiers informels précaires sans réseaux.'
      ],
      table: {
        headers: ['Caractéristiques', 'Modèle des pays du Nord (Europe, Amérique N.)', 'Modèle des pays du Sud (Afrique subsaharienne, Asie S.)'],
        rows: [
          ['Taux d\'urbanisation actuel', 'Très élevé (75 à 85 %)', 'Moyen mais en explosion (40 à 52 %)'],
          ['Taux de croissance annuel', 'Très faible (< 0,8 % par an)', 'Très rapide et massif (3 à 5 % par an)'],
          ['Moteur dominant', 'Attraction métropolitaine tertiaire', 'Exode rural massif + très fort accroissement naturel'],
          ['Forme spatiale dominante', 'Étalement pavillonnaire, périurbanisation', 'Extensions informelles, bidonvilles, forte densification'],
          ['Encadrement planifié', 'Zonage strict, transports de masse, réseaux complets', 'Saturation des voiries, déficit d\'assainissement et d\'eau']
        ]
      }
    },
    {
      title: 'III. LA GÉOGRAPHIE DU GIGANTISME URBAIN : MÉGAPOLES ET MÉGALOPOLIS',
      content: [
        '1. La métropole et la métropolisation : Processus de concentration sélective des populations, des fonctions de commandement économique, politique et culturel dans les plus grandes agglomérations reliées au réseau mondial.',
        '2. Les mégapoles (Mega-cities) : Agglomérations géantes dépassant le seuil statistique de 10 millions d\'habitants fixé par l\'ONU. On en dénombre aujourd\'hui plus de 35 dans le monde :',
        '• Tokyo (Japon) : Première agglomération mondiale avec plus de 37 millions d\'habitants.',
        '• Delhi, Shanghai, São Paulo, Mumbai, Mexico, Le Caire, Pékin.',
        '• En Afrique : Le Caire (~22 millions), Lagos (~16 millions), Kinshasa (~15 millions).',
        '3. Les conurbations et les mégalopolis : Nébuleuses urbaines polycentriques gigantesques nées de la soudure spatiale de plusieurs métropoles indépendantes le long d\'axes de communication majeurs :',
        '• La Mégalopolis nord-américaine (BosWash) : S\'étire sur près de 800 km de Boston à Washington en passant par New York et Philadelphie (plus de 55 millions d\'habitants).',
        '• La Mégalopole japonaise (Tokaïdo) : De Tokyo à Osaka-Kobe.',
        '• La Dorsale européenne (Banane bleue) : De Londres à Milan via la vallée du Rhin.'
      ]
    },
    {
      title: 'IV. LES FORMES DE L\'ÉTALEMENT URBAIN : DU CENTRE AUX PÉRIPHÉRIES',
      content: [
        '1. L\'étalement urbain (Urban sprawl) : Dilution horizontale continue de la ville sur des dizaines de kilomètres à la campagne.',
        '2. Les conséquences environnementales et financières de l\'étalement :',
        '• Consommation irréversible des meilleures terres agricoles périurbaines fertiles (le cas des Niayes à Dakar).',
        '• Allongement considérable des distances de déplacement domicile-travail et explosion de la consommation de carburant et de la pollution atmosphérique.',
        '• Coût astronomique pour les municipalités contraintes de prolonger les réseaux d\'eau, de tout-à-l\'égout et d\'électricité sur des superficies démesurées.',
        '3. La ville compacte et la densification : Modèle alternatif préconisé par les urbanistes durables, consistant à reconstruire la ville sur elle-même (surélévation des immeubles, réhabilitation des friches industrielles, transports en commun en site propre).'
      ]
    },
    {
      title: 'V. L\'URBANISATION AU SÉNÉGAL ET EN AFRIQUE DE L\'OUEST',
      content: [
        '1. Une transition urbaine fulgurante : Au Sénégal, le taux d\'urbanisation est passé de moins de 25 % à l\'indépendance à près de 48 % aujourd\'hui, et dépassera 60 % avant 2035.',
        '2. Le déséquilibre territorial aigu de la macrocéphalie dakaroise : Dakar concentre près du quart de la population totale du pays et plus de la moitié de la population urbaine nationale.',
        '3. L\'essor spectaculaire des villes secondaires : Thiès, Saint-Louis, Kaolack, Ziguinchor, et particulièrement Touba devenue la deuxième métropole nationale grâce à son statut foncier autonome et son dynamisme marchand.',
        '4. Les défis d\'équipements : Prolifération des zones inondables habitées en banlieue (Pikine, Guédiawaye, Keur Massar), embouteillages paralysants et insuffisance des réseaux d\'assainissement liquide et solide.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS DE SYNTHÈSE',
      content: [
        'Exercice 1 : Distinguer avec précision : urbanisation, croissance urbaine, exode rural, périurbanisation et métropolisation.',
        'Correction : Urbanisation : processus d\'augmentation de la proportion d\'habitants vivant en ville et d\'extension des modes de vie urbains. Croissance urbaine : augmentation quantitative du nombre absolu d\'habitants d\'une agglomération. Exode rural : départ définitif de populations des campagnes pour s\'installer en ville. Périurbanisation : diffusion de l\'habitat urbain dans les espaces ruraux entourant la ville-centre. Métropolisation : mouvement de concentration accrue des fonctions de décision, des richesses et des emplois stratégiques dans les très grandes villes.',
        'Exercice 2 : Pourquoi l\'étalement urbain horizontal pose-t-il de graves problèmes pour la sécurité alimentaire des villes africaines ?',
        'Correction : Les villes se sont historiquement implantées à proximité de plaines fertiles ou de zones humides fournissant fruits et légumes frais (les Niayes à Dakar). L\'étalement urbain horizontal anarchique grignote et bétonne ces terres maraîchères de proximité. Les citadins sont alors contraints d\'importer leur nourriture de régions très lointaines ou de l\'étranger à des coûts de transport élevés, ce qui renchérit le coût de la vie et fragilise la sécurité alimentaire.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma comparatif : Les deux modèles d\'urbanisation dans le monde',
    root: 'LES PROCESSUS D\'URBANISATION MONDIALE',
    branches: [
      {
        name: 'MODÈLE DU NORD (STABILISÉ)',
        subtitle: 'Périurbanisation & Métropolisation',
        items: [
          'Taux élevé (75-85 %) mais croissance ralentie (<1 %)',
          'Exode rural historique achevé',
          'Périurbanisation : maisons individuelles dans les villages',
          'Réseaux de transports métropolitains interconnectés'
        ]
      },
      {
        name: 'MODÈLE DU SUD (EXPLOSIF)',
        subtitle: 'Macrocéphalie & Habitat spontané',
        items: [
          'Taux moyen (40-52 %) en hausse ultra-rapide (3-5 %)',
          'Double moteur : fort accroissement naturel + exode rural',
          'Émergence de mégapoles géantes (Lagos, Kinshasa)',
          'Déficit criant de voiries, d\'eau et d\'assainissement'
        ]
      },
      {
        name: 'LES FORMES SPATIALES GÉANTES',
        subtitle: 'Mégapoles & Mégalopoles',
        items: [
          'Mégapoles : agglomérations de plus de 10 millions d\'hab',
          'Mégalopolis : nébuleuses urbaines géantes soudées (BosWash)',
          'Conurbations polycentriques et corridors de développement',
          'Enjeux de durabilité : compacité contre étalement'
        ]
      }
    ]
  },
  conclusion: `L'urbanisation mondiale est une vague irréversible qui redéfinit l'écoumène planétaire. Si elle offre d'immenses opportunités d'émancipation sociale, d'accès à l'éducation et de création de richesses, son rythme effréné dans les pays du Sud exige des politiques d'aménagement courageuses pour freiner l'étalement anarchique, équiper les périphéries et promouvoir un réseau de villes moyennes équilibré au Sénégal comme dans toute l'Afrique.`
};

export const LESSON_17_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-17',
  number: 'LEÇON 17',
  title: 'Les activités urbaines : l’industrie et ses mutations',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Facteurs de localisation industrielle en ville, mutations contemporaines (automatisation, délocalisation, DIT), recomposition spatiale (friches centrales, parcs périphériques) et tissu industriel sénégalais.',
  introduction: `L'industrie est l'activité économique du secteur secondaire qui transforme des matières premières brutes (minérales, énergétiques ou agricoles) en produits semi-finis ou en biens de consommation manufacturés. Historiquement, la ville et l'industrie ont entretenu des relations symbiotiques : la révolution industrielle du XIXe siècle a nourri l'urbanisation en concentrant les usines au plus près de la main-d\'œuvre et des marchés consommateurs, tandis que les villes fournissaient les capitaux bancaires, les infrastructures portuaires et les voies ferrées. Aujourd'hui, sous l'effet de l'automatisation, des impératifs environnementaux et de la mondialisation des chaînes de valeur, l'industrie urbaine connaît de profondes mutations spatiales : les vieilles usines désertent les centres denses pour se redéployer dans de vastes parcs industriels périphériques ou se délocaliser à l'échelle internationale.`,
  sections: [
    {
      title: 'I. LES FACTEURS TRADITIONNELS DE LOCALISATION INDUSTRIELLE DANS LA VILLE',
      content: [
        '1. La proximité du marché de consommation : Les industries de biens de consommation courante (agroalimentaire, boissons, imprimerie, meubles) s\'implantent au cœur ou aux abords immédiats des métropoles pour minimiser les coûts de transport final et répondre sans délai à la demande.',
        '2. L\'accès à une main-d\'œuvre abondante et diversifiée : La ville offre un vivier complet allant des ouvriers non qualifiés du secteur formel et informel aux ingénieurs, techniciens supérieurs et concepteurs formés dans les universités.',
        '3. La présence d\'infrastructures lourdes de transport : Ports maritimes en eau profonde, nœuds ferroviaires, aéroports et autoroutes indispensables pour recevoir des pondéreux (matières premières lourdes et encombrantes) et réexpédier les produits finis.',
        '4. Les économies d\'agglomération : Bénéfice pour une entreprise de s\'installer à côté d\'autres usines pour partager des fournisseurs communs, des réseaux d\'énergie (électricité haute tension), des services de maintenance et de sous-traitance.'
      ]
    },
    {
      title: 'II. LES MUTATIONS CONTEMPORAINES DE L\'APPAREIL PRODUCTIF INDUSTRIEL',
      content: [
        '1. L\'automatisation et la robotisation : Les chaînes de montage modernes remplacent la force musculaire ouvrière par des robots programmables et des logiciels industriels. La part de la main-d\'œuvre baisse tandis que les exigences de qualification technique augmentent.',
        '2. La tertiarisation de l\'industrie : Les coûts de fabrication matérielle pure diminuent au profit de la recherche et développement (R&D), du design, du marketing, de la logistique et du service après-vente.',
        '3. La fragmentation mondiale des chaînes de valeur (Division Internationale du Travail - DIT) : Une entreprise transnationale ne fabrique plus tout au même endroit :',
        '• La conception et l\'ingénierie sont conservées dans les métropoles du Nord (Silicon Valley, Tokyo, Paris).',
        '• La fabrication des composants et l\'assemblage sont délocalisés dans les pays du Sud ou émergents à bas salaires (Chine, Vietnam, Bangladesh, Mexique).',
        '• La commercialisation et la finance s\'opèrent à l\'échelle planétaire.'
      ]
    },
    {
      title: 'III. LA RECOMPOSITION SPATIALE : DU CENTRE-VILLE AUX PÉRIPHÉRIES',
      content: [
        '1. Le départ des industries hors des centres urbains (Désindustrialisation urbaine centrale) :',
        '• Les causes : Hausse vertigineuse du prix des terrains dans le centre, saturation de la circulation routière bloquant les camions, plaintes des riverains contre la pollution, les odeurs et le bruit, et réglementations écologiques interdisant les usines dangereuses.',
        '• Le devenir des sites centraux libérés : Reconversion des friches industrielles en écoquartiers d\'habitation, en centres culturels, en lofts d\'artistes ou en parcs tertiaires de bureaux.',
        '2. Le redéploiement dans les zones industrielles périphériques :',
        '• Création de vastes parcs d\'activités le long des autoroutes, près des aéroports et des contournements urbains.',
        '• Les avantages : Terrains vastes, plats et bon marché permettant la construction d\'usines de plain-pied optimisées pour les chariots élévateurs et les semi-remorques.',
        '3. Les Zones Industrialo-Portuaires (ZIP) : Complexes gigantesques associant terminaux maritimes conteneurisés, raffineries de pétrole, sidérurgie sur l\'eau et usines chimiques (ex: Rotterdam, Shanghai, Tanger Med).'
      ],
      table: {
        headers: ['Espace urbain', 'Caractéristiques du tissu industriel', 'Avantages comparatifs', 'Inconvénients / Contraintes'],
        rows: [
          ['Centres-villes historiques', 'Friches en reconversion, artisanat léger', 'Proximité des clients et des décideurs', 'Foncier inabordable, embouteillages, normes anti-pollution'],
          ['Périphéries & Parcs d\'activités', 'Usines modernes de plain-pied, hangars', 'Grands terrains bon marché, accès autoroutier', 'Éloignement des lieux de résidence des ouvriers'],
          ['Zones Industrialo-Portuaires (ZIP)', 'Pétrochimie, métallurgie, agroalimentaire lourd', 'Déchargement direct sans rupture de charge', 'Risques technologiques majeurs, pollution littorale']
        ]
      }
    },
    {
      title: 'IV. LES NUISANCES URBAINES ET LES DÉFIS ENVIRONNEMENTAUX DE L\'INDUSTRIE',
      content: [
        '1. Les pollutions industrielles multiples : Rejets d\'eaux usées toxiques dans les nappes et les baies maritimes, fumées polluantes dégradant la qualité de l\'air citadin (oxydes d\'azote, particules fines), et génération de déchets dangereux.',
        '2. Les risques technologiques majeurs : Risques d\'incendie, d\'explosion ou d\'émanations toxiques (catastrophes historiques de Bhopal en Inde ou d\'AZF à Toulouse).',
        '3. La nécessaire planification urbaine : Séparation stricte des zones résidentielles et des zones industrielles par des ceintures vertes tampons, obligation d\'Études d\'Impact Environnemental et Social (EIES) et stations de traitement des effluents industriels.'
      ]
    },
    {
      title: 'V. L\'INDUSTRIE URBAINE AU SÉNÉGAL : ÉTAT DES LIEUX ET NOUVEAUX PÔLES',
      content: [
        '1. L\'hyper-concentration historique dans la presqu\'île de Dakar : Dakar concentre plus de 80 % du tissu manufacturier sénégalais le long de l\'axe Bel-Air, Hann, Thiaroye, Rufisque :',
        '• Industries agroalimentaires (Grandes Moulins de Dakar, brasseries SOBOSIDA, laiteries, conserveries).',
        '• Cimenteries géantes à Rufisque (SOCOCIM) et Kirène (Dangote, Ciments du Sahel).',
        '• Raffinage de pétrole (Société Africaine de Raffinage - SAR à Mbao) et chimie (Industries Chimiques du Sénégal - ICS).',
        '2. Le drame écologique de la Baie de Hann : Autrefois l\'une des plus belles baies d\'Afrique, elle a été transformée en déversoir d\'effluents industriels toxiques non traités, entraînant la destruction de l\'écosystème marin et de graves risques sanitaires pour les populations riveraines (programme de dépollution en cours).',
        '3. La délocalisation salvatrice vers Diamniadio : Création du Parc Industriel International de Diamniadio (PIID) pour accueillir les nouvelles industries dans un cadre moderne, écologique et désengorgé.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS MÉTHODOLOGIQUES',
      content: [
        'Exercice 1 : Quelles sont les principales raisons qui poussent les entreprises industrielles à quitter le centre des métropoles pour s\'installer en périphérie ?',
        'Correction : Les entreprises quittent le centre-ville en raison de : 1. Le coût prohibitif du foncier dans le centre qui empêche l\'agrandissement des usines. 2. L\'exiguïté des parcelles qui interdit la construction de bâtiments modernes de plain-pied adaptés aux chaînes automatisées. 3. Les embouteillages permanents qui bloquent les camions de livraison. 4. Les contraintes environnementales et les plaintes des riverains contre la pollution, le bruit et les odeurs. La périphérie offre à l\'inverse de vastes terrains bon marché directement reliés aux autoroutes.',
        'Exercice 2 : Définir la notion d\'économie d\'agglomération en milieu urbain.',
        'Correction : Une économie d\'agglomération désigne l\'ensemble des gains de productivité et des réductions de coûts dont bénéficie une entreprise du simple fait de sa localisation à proximité d\'autres entreprises et d\'un grand centre urbain : accès immédiat à des fournisseurs de pièces détachées, à des sous-traitants spécialisés, à une main-d\'œuvre qualifiée, à des réseaux d\'énergie fiables et à des services financiers et de maintenance partagés.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma spatial : Les mutations de la localisation industrielle urbaine',
    root: 'L\'INDUSTRIE EN MILIEU URBAIN',
    branches: [
      {
        name: 'CENTRE ANCIEN (DÉPART)',
        subtitle: 'Désindustrialisation centrale',
        items: [
          'Cherté du sol et saturation des voiries',
          'Conflits d\'usage avec les habitants (bruit, fumées)',
          'Fermeture des usines vétustes du XIXe-XXe',
          'Reconversion des friches en bureaux et logements'
        ]
      },
      {
        name: 'PÉRIPHÉRIE MODERNE (ACCUEIL)',
        subtitle: 'Parcs d\'activités & Autoroutes',
        items: [
          'Vastes terrains plats et peu coûteux',
          'Bâtiments de plain-pied pour robots et chariots',
          'Connexion directe aux autoroutes et aéroports',
          'Ex: Parc Industriel de Diamniadio au Sénégal'
        ]
      },
      {
        name: 'LITTORAL & MONDIALISATION',
        subtitle: 'Zones Industrialo-Portuaires (ZIP)',
        items: [
          'Usines embranchées directement sur les quais',
          'Importation de pondéreux (pétrole brut, blé, minerais)',
          'Pétrochimie (SAR), engrais (ICS), cimenteries (SOCOCIM)',
          'Exigence vitale de dépollution (Baie de Hann)'
        ]
      }
    ]
  },
  conclusion: `L'industrie urbaine est au cœur d'une grande métamorphose spatiale. En quittant les centres denses pour se déployer dans les parcs périphériques et les zones portuaires, elle redéfinit les équilibres territoriaux. Pour le Sénégal, le défi réside dans l'industrialisation durable de ses nouveaux pôles urbains (Diamniadio) afin de créer des emplois décents pour la jeunesse tout en réparant les blessures environnementales héritées du passé.`
};

export const LESSON_18_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-18',
  number: 'LEÇON 18',
  title: 'Les activités urbaines : commerce, services et mutations',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Tertiarisation métropolitaine, services supérieurs et rares, révolution commerciale (malls, e-commerce, logistique), dualité formel / informel dans les villes du Sud et modèle dakaroise.',
  introduction: `La ville contemporaine est par essence le royaume du secteur tertiaire. Si l'industrie a façonné le paysage urbain du siècle dernier, ce sont aujourd'hui le commerce et les services qui emploient la grande majorité des citadins et façonnent les dynamiques économiques et spatiales métropolitaines. Cette prépondérance des services – ou tertiarisation – s'accompagne d'une profonde révolution technologique et spatiale : apparition des centres commerciaux géants (malls), essor fulgurant du commerce électronique (e-commerce), multiplication des hubs logistiques et digitalisation des flux financiers. Dans les pays du Sud comme le Sénégal, cette modernité cohabite au quotidien avec un secteur informel omniprésent, dynamique et pourvoyeur essentiel d'emplois et de subsistance pour les ménages.`,
  sections: [
    {
      title: 'I. LA TERTIAIRISATION DE L\'ÉCONOMIE URBAINE ET LA DIVERSITÉ DES SERVICES',
      content: [
        '1. La tertiarisation : Définie comme la progression continue du poids des activités tertiaires dans le PIB et dans la population active occupée. Dans les grandes métropoles mondiales, le tertiaire concentre souvent plus de 75 à 85 % des emplois.',
        '2. La classification des services urbains :',
        '• Les services aux particuliers (services de proximité) : Commerce de détail, alimentation, coiffure, réparation, restauration, hôtellerie, transports urbains quotidiens.',
        '• Les services collectifs non marchands : Écoles, collèges, universités, centres de santé, hôpitaux, services de police, justice et administration municipale.',
        '• Les services supérieurs aux entreprises (services rares ou quaternaires) : Ingénierie financière, sièges sociaux de banques et d\'assurances, cabinets d\'avocats d\'affaires internationaux, agences de publicité, firmes de conseil en stratégie et audit, centres de recherche et développement technologique. Ces services rares se concentrent exclusivement dans les métropoles de rang mondial.'
      ]
    },
    {
      title: 'II. LES MUTATIONS CONTEMPORAINES DU COMMERCE URBAIN',
      content: [
        'L\'appareil commercial urbain a connu plusieurs révolutions spatiales successives :',
        '1. La crise du petit commerce traditionnel et l\'avènement de la grande distribution : Dès la seconde moitié du XXe siècle au Nord, les hypermarchés et grands centres commerciaux périphériques ("malls") ont attiré les consommateurs grâce à d\'immenses parkings gratuits, des prix cassés et le regroupement sous un même toit de centaines de boutiques.',
        '2. La révolution du commerce électronique (e-commerce) et ses impacts géographiques :',
        '• Achat en ligne via smartphone et plateformes numériques (Amazon, Jumia).',
        '• Loin de supprimer l\'espace physique, l\'e-commerce transforme la ville en multipliant les entrepôts de stockage géants en périphérie, les plateformes de messagerie et les camionnettes ou motos de livraison à domicile ("dernier kilomètre").',
        '3. Le retour de l\'attractivité des centres-villes : Pour lutter contre l\'évasion commerciale vers la périphérie, les centres-villes misent sur la piétonnisation, l\'animation festive, les boutiques de luxe et les concepts-stores.'
      ]
    },
    {
      title: 'III. LA DUALITÉ DU COMMERCE DANS LES VILLES DU SUD : FORMEL ET INFORMEL',
      content: [
        'Dans les villes d\'Afrique subsaharienne et d\'Asie, l\'espace marchand est marqué par une dualité spectaculaire entre deux mondes interconnectés :',
        '1. Le secteur commercial formel moderne : Supermarchés et hypermarchés climatisés (Auchan, Carrefour, Casino au Sénégal), galeries marchandes modernes, boutiques franchisées internationales. Il s\'adresse principalement aux classes moyennes et aisées, offre des produits emballés standardisés et paie des impôts formels à l\'État.',
        '2. Le secteur commercial informel dominant :',
        '• Représente souvent plus de 70 à 80 % des emplois marchands et de l\'approvisionnement alimentaire des ménages.',
        '• Se caractérise par l\'absence d\'enregistrement officiel au registre du commerce, la précarité des statuts, l\'absence de sécurité sociale et l\'utilisation exclusive d\'argent liquide ou de mobile money.',
        '• Les formes spatiales : Grands marchés populaires ouverts, échoppes de quartier ("boutiques mauritaniennes" au Sénégal), marchands ambulants occupant trottoirs et carrefours aux feux rouges, étals de tabliers.'
      ],
      table: {
        headers: ['Critères de comparaison', 'Commerce formel moderne (ex: Hypermarchés)', 'Commerce informel populaire (ex: Marchés, ambulants)'],
        rows: [
          ['Statut juridique & fiscalité', 'Enregistré, TVA collectée, comptabilité officielle', 'Non déclaré, pas de tenue comptable, taxes journalières'],
          ['Localisation spatiale', 'Centres commerciaux, grands axes, quartiers aisés', 'Trottoirs, marchés ouverts, ruelles de quartier, carrefours'],
          ['Clientèle cible', 'Classes moyennes, expatriés, ménages solvables', 'Ensemble de la population, ménages à revenus modestes'],
          ['Mode de vente et prix', 'Prix fixes affichés, code-barres, cartes bancaires', 'Négociation et marchandage, vente au détail (détaillant)'],
          ['Rôle socio-économique', 'Investissements lourds, modernisation des filières', 'Amortisseur social fondamental contre le chômage de masse']
        ]
      }
    },
    {
      title: 'IV. LES MARCHÉS URBAINS EMBLÉMATIQUES DU SÉNÉGAL',
      content: [
        '1. Les grands marchés historiques de Dakar :',
        '• Le Marché Sandaga : Cœur marchand historique du Plateau, temple du prêt-à-porter, des tissus, des chaussures et de l\'électronique.',
        '• Le Marché Colobane : Plaque tournante ouest-africaine de la friperie (vêtements d\'occasion importés d\'Europe et des USA), des pièces détachées et de l\'artisanat mécanique.',
        '• Le Marché HLM : Capitale internationale des tissus précieux (wax, bazin riche brodé, dentelles) attirant des acheteuses de toute l\'Afrique de l\'Ouest et de la diaspora.',
        '• Le Marché aux poissons de Soumbédioune et de Pikine.',
        '2. Les marchés régionaux majeurs : Le marché central de Kaolack (l\'un des plus vastes d\'Afrique de l\'Ouest), le marché Ocass de Touba (poumon économique de la ville sainte).'
      ]
    },
    {
      title: 'V. LA RÉVOLUTION DE LA FINANCE DIGITALE : LE MOBILE MONEY',
      content: [
        '1. Le saut technologique du "Leapfrogging" : L\'Afrique de l\'Ouest et le Sénégal ont sauté l\'étape historique du compte bancaire traditionnel par carte et carnet de chèques pour adopter directement la banque mobile sur smartphone.',
        '2. L\'omniprésence des opérateurs de Mobile Money : Déploiement massif de Wave, Orange Money et Free Money.',
        '3. Conséquences économiques et spatiales :',
        '• Inclusion financière spectaculaire : Des millions de personnes non bancarisées peuvent instantanément transférer de l\'argent, payer leurs factures d\'eau et d\'électricité, ou régler leurs achats chez le boutiquier du coin.',
        '• Reconfiguration spatiale des rues : Prolifération de milliers de kiosques et points de service mobiles peints aux couleurs des opérateurs dans chaque ruelle de quartier.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET QUESTIONS D\'ANALYSE',
      content: [
        'Exercice 1 : Pourquoi le secteur informel est-il qualifié d\'« amortisseur social » indispensable dans les grandes villes du Sud ?',
        'Correction : En l\'absence d\'allocations chômage et face à la rareté des emplois créés par l\'État et les entreprises privées formelles, le secteur informel permet à des centaines de milliers de jeunes et de femmes sans qualification de générer un revenu journalier de subsistance (commerce ambulant, restauration de rue, petits métiers). De plus, en fractionnant les produits en quantités minuscules adaptées aux maigres bourses quotidiennes des familles défavorisées (vente de sucre au morceau, d\'huile à la louche), il assure la survie alimentaire des quartiers populaires.',
        'Exercice 2 : En quoi la révolution du Mobile Money (Wave, Orange Money) a-t-elle profondément transformé les transactions commerciales au Sénégal ?',
        'Correction : Le Mobile Money a démocratisé les paiements électroniques instantanés à coût quasi nul. Il a sécurisé les commerçants et les clients en réduisant les risques d\'agression et de vol liés à la détention d\'importantes sommes de billets de banque, facilité les transferts d\'argent entre les citadins et leurs familles restées au village, et accéléré la vitesse de circulation de l\'argent au sein de toute l\'économie marchande urbaine.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma de structure : L\'écosystème commercial et tertiaire urbain',
    root: 'COMMERCE & SERVICES URBAINS',
    branches: [
      {
        name: 'SECTEUR FORMEL MODERNE',
        subtitle: 'Grandes surfaces & Finance',
        items: [
          'Hypermarchés et supermarchés (Auchan, Carrefour)',
          'Galeries marchandes fermées et boutiques franchisées',
          'Sièges de banques, assurances et firmes de conseil',
          'Normes d\'hygiène, prix fixes et traçabilité fiscale'
        ]
      },
      {
        name: 'SECTEUR INFORMEL POPULAIRE',
        subtitle: 'Marchés ouverts & Proximité',
        items: [
          'Marchés historiques vibrants (Sandaga, Colobane, HLM)',
          'Marchands ambulants et échoppes dans toutes les ruelles',
          'Vente au détail adaptée au pouvoir d\'achat quotidien',
          'Amortisseur social indispensable contre le chômage'
        ]
      },
      {
        name: 'RÉVOLUTION DIGITALE',
        subtitle: 'Mobile Money & Logistique',
        items: [
          'Triomphe du Mobile Money (Wave, Orange Money)',
          'Paiements dématérialisés accessibles à tous sans compte bancaire',
          'Essor du commerce en ligne et livraison par moto',
          'Réseaux de kiosques de quartier dans chaque coin de rue'
        ]
      }
    ]
  },
  conclusion: `Le commerce et les services sont le véritable cœur battant de la ville contemporaine. En combinant la modernité des grandes surfaces et des paiements digitaux sur smartphone avec l'incroyable vitalité et résilience du commerce populaire informel, les villes sénégalaises et africaines inventent un modèle tertiaire hybride et original. L'enjeu d'avenir consiste à organiser l'espace public urbain pour permettre une cohabitation harmonieuse et digne entre toutes ces activités marchandes.`
};
