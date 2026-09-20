# -*- coding: utf-8 -*-
"""Generates courses_3eme_svt_part4.ts (Lessons 18 to 22: Sciences de la Terre)"""

code = '''import { LessonContent } from './courses';
import {
  SVG_SVT_3EME_TECTONIQUE_PLAQUES,
  SVG_SVT_3EME_CYCLE_ROCHES
} from './diagrams_3eme_svt';

// =========================================================================
// SVT 3ÈME - DEUXIÈME PARTIE : SCIENCES DE LA TERRE
// LEÇONS 18 À 22 : TECTONIQUE DES PLAQUES, VOLCANISME, SÉISMES ET GÉOLOGIE
// COURS INTÉGRAUX ENRICHIS ET CONFORMES AU BFEM DU SÉNÉGAL
// =========================================================================

export const LESSON_18_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-18',
  number: 'Leçon 18',
  title: 'LA TECTONIQUE DES PLAQUES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "La tectonique des plaques est la théorie unificatrice des géosciences modernes. Initiée en 1912 par le météorologue allemand Alfred Wegener sous le nom de « dérive des continents » puis confirmée dans les années 1960 par l'exploration des fonds océaniques et le paléomagnétisme, elle explique la dynamique globale de notre planète : la mobilité des continents, la naissance des océans, la surrection des chaînes de montagnes ainsi que la localisation des séismes et du volcanisme terrestre.",
  fullText: `La surface de la Terre n'est pas un bloc rigide et immobile, mais une mosaïque vivante de fragments en perpétuel mouvement.

I. DES ARGUMENTS DE WEGENER À LA TECTONIQUE MODERNE
1. Les arguments historiques de la dérive des continents :
- Argument morphologique : emboîtement géométrique frappant des côtes de part et d'autre de l'océan Atlantique (comme les pièces d'un puzzle entre la côte est de l'Amérique du Sud et la côte ouest de l'Afrique).
- Argument paléontologique : présence de fossiles identiques d'animaux terrestres incapables de traverser un vaste océan (ex : le reptile Mesosaurus ou la fougère Glossopteris) dans les strates sédimentaires d'Afrique et d'Amérique du Sud.
- Argument pétrographique et géologique : continuité parfaite des formations rocheuses anciennes (boucliers précambriens) et des chaînes de montagnes calédoniennes de part et d'autre de l'Atlantique.
- Argument paléoclimatique : traces de glaciers anciens (tillites glaciaires) datant de 300 millions d'années retrouvées en Afrique du Sud, en Inde et au Brésil, prouvant que ces blocs étaient autrefois réunis au pôle Sud dans un unique supercontinent : la Pangée, entourée d'un immense océan, la Panthalassa.

II. STRUCTURE INTERNE DU GLOBE ET NOTION DE PLAQUE LITHOSPHÉRIQUE
1. Lithosphère rigide et Asthénosphère ductile :
- La Lithosphère : enveloppe externe rigide et cassante de la Terre, d'une épaisseur moyenne de 100 km (environ 70 à 150 km sous les continents, 10 à 70 km sous les océans). Elle est constituée par la croûte terrestre (croûte continentale granitique ou océanique basaltique) et par la partie supérieure rigide du manteau supérieur.
- L'Asthénosphère : couche sous-jacente du manteau supérieur, s'étendant jusqu'à environ 670 km de profondeur. Bien que solide, ses températures élevées la rendent ductile, plastique et déformable sur les échelles de temps géologiques.
2. Définition d'une plaque lithosphérique :
Une plaque lithosphérique (ou plaque tectonique) est un vaste morceau rigide de la lithosphère, peu déformé en son centre, délimité par des bordures étroites géologiquement très actives où se concentrent les séismes et les volcans. La surface terrestre est découpée en une douzaine de grandes plaques (plaque Africaine, Eurasiatique, Sud-Américaine, Nord-Américaine, Pacifique, Indo-Australienne, Nazca, etc.).

III. LES TROIS TYPES DE LIMITES DE PLAQUES ET LE MOTEUR DU MOUVEMENT
1. Limites divergentes (ou constructives) : les Dorsales océaniques et Rifts :
- Écartement de deux plaques lithosphériques sous l'effet de courants magmatiques ascendants.
- Au centre de la dorsale (vallée de rift), le magma basaltique remonte, se refroidit au contact de l'eau et forme continuellement une nouvelle croûte océanique : c'est le phénomène d'accrétion océanique ou d'expansion des fonds océaniques (vitesse de 2 à 15 cm par an). Exemple : la dorsale médio-atlantique et le grand rift est-africain.
2. Limites convergentes (ou destructives) : Subduction et Collision continentale :
- La Subduction : enfoncement d'une plaque océanique froide, dense et lourde sous une plaque continentale moins dense ou sous une autre plaque océanique, plongeant dans l'asthénosphère. Ce phénomène s'accompagne d'une fosse océanique profonde, de séismes le long d'un plan incliné (plan de Wadati-Benioff) et d'un volcanisme explosif intense (ex : la ceinture de feu du Pacifique, la Cordillère des Andes).
- La Collision continentale : lorsque deux masses continentales se rencontrent après disparition totale d'un océan intermédiaire, aucune des deux croûtes granitiques peu denses ne peut s'enfoncer. Elles s'empilent, se plissent et s'épaississent, créant une haute chaîne de montagnes : c'est l'Orogenèse (ex : la chaîne de l'Himalaya née de la collision entre l'Inde et l'Eurasie).
3. Limites coulissantes ou transformantes :
Les plaques glissent horizontalement l'une contre l'autre le long de failles de décrochement sans création ni destruction de lithosphère. Elles provoquent des séismes superficiels violents (ex : la faille de San Andreas en Californie).
4. Le moteur de la tectonique : la convection thermique mantellique :
La chaleur colossale dégagée par la désintégration radioactive au cœur de la Terre engendre de gigantesques courants de convection thermiques lents dans le manteau : la matière chaude et moins dense monte sous les dorsales, tandis que la matière froide et dense plonge au niveau des zones de subduction, entraînant les plaques lithosphériques comme des tapis roulants.`,
  sections: [
    {
      title: 'I. Des Arguments de Wegener à la Validation Paléomagnétique',
      content: [
        'Alfred Wegener a réuni des preuves morphologiques, fossiles, géologiques et climatiques démontrant la dérive des continents à partir de la Pangée.',
        'La confirmation moderne repose sur la cartographie du plancher océanique et les inversions magnétiques enregistrées dans les basaltes sous-marins.'
      ]
    },
    {
      title: 'II. Les Frontières Géologiques : Divergence, Subduction et Coulissage',
      content: [
        'La lithosphère rigide se déplace sur l\'asthénosphère ductile sous l\'effet de la convection mantellique.',
        'Les dorsales créent de la croûte basaltique par accrétion ; les zones de subduction recyclent la lithosphère plongeante et provoquent séismes et volcans explosifs.'
      ],
      image: {
        url: SVG_SVT_3EME_TECTONIQUE_PLAQUES,
        alt: 'Schéma dynamique de la tectonique des plaques, divergence océanique et subduction',
        caption: 'Figure 18.1 : Les mouvements des plaques lithosphériques : divergence au niveau de la dorsale océanique, subduction sous la marge continentale et courants de convection.'
      },
      table: {
        headers: ['Type de frontière de plaque', 'Mouvement tectonique', 'Phénomènes géologiques majeurs', 'Exemple géographique réel'],
        rows: [
          ['Divergente (constructive)', 'Écartement des plaques', 'Rift central, accrétion de croûte océanique, volcanisme effusif sous-marin', 'Dorsale médio-atlantique, Rift est-africain'],
          ['Convergente : Subduction', 'Rapprochement et plongement', 'Fosse océanique profonde, séismes violents (plan de Benioff), volcans explosifs', 'Fosse du Pérou-Chili (Cordillère des Andes)'],
          ['Convergente : Collision', 'Affrontement de deux continents', 'Plissements intenses, épaississement crustal, orogenèse (montagnes)', 'Himalaya (Asie), Alpes (Europe)'],
          ['Transformante / Coulissante', 'Glissement latéral sans relief', 'Frottements intenses, absence de volcanisme mais séismes superficiels dévastateurs', 'Faille de San Andreas (Californie)']
        ]
      }
    }
  ],
  diagram: {
    title: 'La Tectonique des Plaques',
    root: 'TECTONIQUE DES PLAQUES',
    branches: [
      {
        name: '3 Frontières Tectoniques',
        subtitle: 'Cinématique des plaques',
        items: ['Divergence : Dorsales & rifts (accrétion)', 'Convergence : Subduction & collision (orogenèse)', 'Coulissage : Failles transformantes (séismes)']
      },
      {
        name: 'Moteur & Structure',
        subtitle: 'Géodynamique interne',
        items: ['Lithosphère rigide (100 km) sur Asthénosphère', 'Courants de convection thermique du manteau', 'Wegener & fossiles de la Pangée', 'Ceinture de feu du Pacifique']
      }
    ]
  },
  conclusion: "La tectonique des plaques offre une clé de lecture globale et cohérente de la planète Terre, reliant les mouvements profonds du manteau aux catastrophes géologiques de surface et à la formation des reliefs."
};

export const LESSON_19_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-19',
  number: 'Leçon 19',
  title: 'LE VOLCANISME ET LES SÉISMES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Les séismes (tremblements de terre) et les éruptions volcaniques sont les manifestations de surface les plus spectaculaires, brutales et dévastatrices de la dynamique interne de notre Terre. Liés aux tensions et aux remontées magmatiques le long des frontières de plaques lithosphériques, ils témoignent de la formidable énergie thermique emprisonnée sous nos pieds. L'étude de leurs mécanismes permet d'évaluer les risques géologiques et d'élaborer des plans de prévention et de prévision parasismique.",
  fullText: `Séismes et volcans libèrent en quelques instants l'énergie accumulée pendant des décennies ou des siècles.

I. LES SÉISMES OU TREMBLEMENTS DE TERRE
1. Origine tectonique d'un séisme :
Sous l'effet des mouvements constants des plaques, les roches de la croûte terrestre subissent des contraintes mécaniques colossales (compression, distension ou cisaillement) et se déforment élastiquement. Lorsque la résistance des roches est dépassée, une rupture brutale se produit le long d'une faille préexistante ou nouvelle.
2. Définitions fondamentales :
- Le Foyer (ou Hypocentre) : point précis en profondeur où se produit la rupture initiale de la roche et la libération brutale de l'énergie.
- L'Épicentre : point de la surface terrestre situé à la verticale exacte du foyer. C'est là où l'intensité ressentie et les dégâts sont généralement les plus dévastateurs.
- Les Ondes sismiques : vibrations élastiques se propageant dans toutes les directions de l'espace à partir du foyer. On distingue :
  * Les ondes P (premières ou primaires) : ondes longitudinales de compression-dilatation se propageant dans tous les milieux (solides et liquides), les plus rapides (vitesse 6 à 8 km/s).
  * Les ondes S (secondaires) : ondes transversales de cisaillement qui ne se propagent que dans les solides (vitesse 3 à 5 km/s).
  * Les ondes de surface (ondes de Rayleigh et de Love) : plus lentes, mais d'amplitude considérable, responsables des destructions matérielles en surface.
3. Mesure des séismes :
- Sismographe et Sismogramme : appareil enregistrant l'amplitude et le temps d'arrivée des ondes sismiques.
- Échelle de Richter (Magnitude) : mesure quantitative logarithmique de l'énergie réelle libérée au foyer (chaque degré représente une énergie 32 fois plus grande que le précédent).
- Échelle MSK / EMS-98 (Intensité) : mesure qualitative en 12 degrés basée sur les effets ressentis par la population et les destructions d'édifices à un endroit donné.

II. LE VOLCANISME : DEUX GRANDS TYPES D'ÉRUPTIONS
Le volcanisme est l'émission à la surface du globe de matières minérales en fusion (magma, lave) et de gaz provenant des profondeurs. Un volcan comprend : un réservoir magmatique en profondeur, une cheminée volcanique et un cratère sommital.
1. Le Volcanisme Effusif (les "Volcans Rouges") :
- Caractéristiques du magma : pauvre en silice (basaltique), très fluide, à température très élevée (~1 100°C à 1 200°C). Les gaz dissous s'échappent facilement sans violence.
- Manifestations : fontaines de lave spectaculaires et longues coulées de lave rouge fluide qui s'étirent sur des kilomètres. Cône volcanique aplati en forme de bouclier (ex : Kilauea à Hawaï, Piton de la Fournaise à La Réunion). Danger modéré pour les populations qui ont le temps d'évacuer.
2. Le Volcanisme Explosif (les "Volcans Gris") :
- Caractéristiques du magma : très riche en silice (andésitique ou rhyolitique), très visqueux et pâteux, à température plus basse (~800°C). Le magma obstrue la cheminée en formant un bouchon ou un dôme de lave. Les gaz sous pression s'accumulent jusqu'à pulvériser le dôme dans une explosion cataclysmique.
- Manifestations : formation d'un immense panache de cendres ascendant et déclenchement de Nuées Ardentes (avalanches pyroclastiques de gaz brûlants, cendres incandescentes et blocs de lave dévalant les pentes à plus de 300 km/h à des températures de 500°C à 800°C). Exemples : Montagne Pelée en Martinique (1902, 30 000 morts), Mont Saint Helens, Vésuve (destruction de Pompéi). Danger extrême.

III. PRÉVISION, PRÉVENTION ET RISQUES GÉOLOGIQUES
- Prévention parasismique : respect des normes architecturales de construction parasismique (fondations sur vérins amortisseurs, chaînage métallique, structures souples) et entraînement des populations aux gestes de survie.
- Surveillance volcanique : réseaux d'observatoires surveillant les séismes précurseurs (trémors volcaniques), le gonflement des flancs de l'édifice par inclinomètres, et la composition des émissions de gaz fumerolliens.`,
  sections: [
    {
      title: 'I. Mécanisme Tectonique des Tremblements de Terre',
      content: [
        'La rupture brutale des roches soumises à contraintes au foyer libère les ondes P, S et de surface.',
        'L\'épicentre subit les secousses les plus destructrices ; la magnitude de Richter évalue l\'énergie réelle alors que l\'intensité MSK évalue les dégâts matériels.'
      ],
      table: {
        headers: ['Critère comparatif', 'Volcanisme Effusif (Volcans Rouges)', 'Volcanisme Explosif (Volcans Gris)'],
        rows: [
          ['Composition du magma', 'Basaltique, très pauvre en silice', 'Andésitique/Rhyolitique, très riche en silice'],
          ['Viscosité de la lave', 'Très fluide, s\'écoule rapidement', 'Très visqueuse et pâteuse, forme un dôme/bouchon'],
          ['Échappement des gaz', 'Facile et continu sans explosion violente', 'Gaz piégés sous pression extrême provoquant l\'explosion'],
          ['Reliefs formés', 'Cône volcanique en bouclier très étalé', 'Dôme pointu, aiguille de lave, cratère d\'explosion'],
          ['Phénomènes dangereux', 'Coulées de lave lentes (dégâts matériels)', 'Nuées ardentes foudroyantes, panaches de cendres, lahars'],
          ['Localisation tectonique', 'Dorsales océaniques et points chauds (Hawaï)', 'Zones de subduction (Ceinture de feu du Pacifique)']
        ]
      }
    },
    {
      title: 'II. Nuées Ardentes et Surveillance des Risques',
      content: [
        'Les nuées ardentes constituent le danger volcanique le plus meurtrier.',
        'Les sismomètres et les satellites permettent d\'anticiper les éruptions et d\'ordonner l\'évacuation préventive des populations.'
      ]
    }
  ],
  diagram: {
    title: 'Séismes et Types de Volcans',
    root: 'SÉISMES & VOLCANS',
    branches: [
      {
        name: 'Sismicité Terrestre',
        subtitle: 'Rupture sous contraintes',
        items: ['Foyer (hypocentre en profondeur)', 'Épicentre à la verticale en surface', 'Ondes P (rapides), S et de surface', 'Magnitude Richter & normes parasismiques']
      },
      {
        name: 'Deux Volcanismes',
        subtitle: 'Magmas & éruptions',
        items: ['Volcans rouges effusifs (laves fluides, Hawaï)', 'Volcans gris explosifs (dômes, nuées ardentes)', 'Points chauds vs Subduction', 'Observatoires & surveillance des trémors']
      }
    ]
  },
  conclusion: "Séismes et éruptions volcaniques illustrent la dissipation continue de l'énergie thermique du globe. Si l'on ne peut empêcher un séisme, la prévention architecturale et la surveillance volcanologique moderne permettent de sauver des milliers de vies humaines."
};

export const LESSON_20_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-20',
  number: 'Leçon 20',
  title: 'LA FORMATION DES ROCHES MÉTAMORPHIQUES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Les roches qui composent l'écorce terrestre ne sont pas éternellement immuables. Lorsqu'une roche préexistante (qu'elle soit d'origine sédimentaire, magmatique ou déjà métamorphique) se trouve soumise, sous l'effet de l'enfouissement ou des forces tectoniques, à des conditions de température et de pression très différentes de celles de sa formation, elle subit une métamorphose : c'est le Métamorphisme. Ce processus géologique fondamental s'effectue obligatoirement à l'état entièrement solide sans jamais atteindre le point de fusion.",
  fullText: `Le métamorphisme est une transformation minéralogique et texturale à l'état solide.

I. DÉFINITION ET FACTEURS DU MÉTAMORPHISME
1. Définition rigoureuse :
Le métamorphisme est l'ensemble des transformations structurales, minéralogiques et chimiques subies par une roche à l'état solide sous l'action de la température et/ou de la pression. Si la roche venait à fondre, on entrerait dans le domaine du magmatisme.
2. Les deux facteurs physico-chimiques déterminants :
- La Température (T) : elle augmente régulièrement avec la profondeur en vertu du gradient géothermique moyen (environ 30°C par kilomètre de profondeur). La chaleur accélère les réactions chimiques, rompt les liaisons cristallines et favorise la recristallisation de nouveaux minéraux stables à haute température.
- La Pression (P) : on distingue deux composantes de pression :
  * La Pression lithostatique (ou hydrostatique) : pression uniforme exercée par le poids des roches sus-jacentes, qui augmente avec la profondeur et compacte les minéraux.
  * La Pression orientée (ou contrainte tectonique) : forces latérales exercées lors du rapprochement des plaques lithosphériques, qui écrasent et orientent les minéraux perpendiculairement à la direction de la force.

II. LES MODIFICATIONS TEXTURALES ET MINÉRALOGIQUES
1. Modifications structurales (Orientations sous contrainte) :
Sous l'effet de la pression orientée, les minéraux s'aplatissent et s'alignent :
- La Schistosité : débitage facile de la roche en feuillets parallèles très minces sous le choc d'un marteau, sans distinction de lits de couleurs différentes (ex : les Schistes ardoisiers, l'ardoise des toitures).
- La Foliation : stade plus poussé de métamorphisme où la roche se sépare en lits alternés clairs (riches en quartz et feldspaths) et lits sombres (riches en micas noirs biotite et amphiboles). Exemple type : le Gneiss.
2. Recristallisation et Minéraux index :
Les minéraux anciens deviennent instables et se transforment en nouveaux minéraux néoformés appelés minéraux index ou minéraux repères, dont la présence renseigne avec précision sur les conditions de température et de pression subies :
- À basse température et basse pression : Chlorite, Serpentine.
- À température moyenne : Micas (Muscovite, Biotite).
- À haute pression et haute température : Grenat, Disthène, Staurotide, Sillimanite.

III. LES DEUX GRANDS TYPES DE MÉTAMORPHISME
1. Le Métamorphisme thermique ou de Contact :
- Se produit au contact direct d'une intrusion magmatique brûlante (pluton de granite montant) qui cuit littéralement les roches encaissantes sédimentaires.
- Facteur prédominant : la Température très élevée, avec une pression faible.
- La zone transformée forme une enveloppe étroite de quelques mètres à quelques kilomètres autour de l'intrusion appelée Auréole de métamorphisme. Les roches obtenues sont dures, massives et dépourvues de schistosité (ex : les Cornéennes, le marbre issu de la cuisson d'un calcaire pur).
2. Le Métamorphisme régional ou Général :
- Affecte d'immenses territoires continentaux (plusieurs dizaines de milliers de km²) lors de la collision des plaques lithosphériques et de la formation des chaînes de montagnes (orogenèse).
- Facteurs conjugués : élévation conjointe et colossale de la Température ET de la Pression orientée sur de grandes profondeurs.
- On observe une série métamorphique progressive à partir d'une même roche initiale (par exemple une argile sédimentaire) :
  Argile sédimentaire -> Schiste ardoisier -> Micaschiste -> Gneiss -> (si la température augmente encore, la roche commence à fondre : c'est la Migmatite, puis le Magma par anatexie).`,
  sections: [
    {
      title: 'I. Facteurs du Métamorphisme : Température et Pression',
      content: [
        'Le métamorphisme s\'effectue à l\'état rigoureusement solide sans fusion magmatique.',
        'La température thermique et la pression tectonique orientée réorganisent la maille cristalline des minéraux.'
      ]
    },
    {
      title: 'II. Schistosité, Foliation et Série Métamorphique de l\'Argile',
      content: [
        'La contrainte tectonique engendre d\'abord la schistosité feuilletée puis la foliation en rubans alternés clairs et sombres du gneiss.',
        'La série métamorphique de l\'argile illustre le gradient d\'enfouissement jusqu\'au seuil de l\'anatexie.'
      ],
      table: {
        headers: ['Stade de métamorphisme', 'Roche métamorphique obtenue', 'Structure texturale', 'Minéraux caractéristiques'],
        rows: [
          ['Non métamorphique (départ)', 'Argile sédimentaire', 'Massive ou litée sédimentaire', 'Minéraux argileux, quartz'],
          ['Métamorphisme très faible', 'Schiste ardoisier / Ardoise', 'Schistosité fine en feuillets', 'Chlorite, séricite'],
          ['Métamorphisme moyen', 'Micaschiste', 'Schistosité marquée et petits lits', 'Micas blancs et noirs, grenats'],
          ['Métamorphisme intense', 'Gneiss', 'Foliation (lits sombres et clairs)', 'Feldspaths, quartz, biotite, sillimanite'],
          ['Limite de fusion partielle', 'Migmatite', 'Mélange roche rubanée et granite', 'Début de fusion (anatexie magmatique)']
        ]
      }
    },
    {
      title: 'III. Métamorphisme de Contact vs Métamorphisme Régional',
      content: [
        'Le métamorphisme de contact cuit localement la roche autour d\'un magma sans pression orientée (cornéennes).',
        'Le métamorphisme régional façonne les racines des chaînes de montagnes sur des centaines de kilomètres.'
      ]
    }
  ],
  diagram: {
    title: 'Formation des Roches Métamorphiques',
    root: 'MÉTAMORPHISME',
    branches: [
      {
        name: 'Facteurs Physiques',
        subtitle: 'Pression & Chaleur',
        items: ['Transformation à l\'état solide', 'Gradient géothermique (T)', 'Pression orientée tectonique (P)', 'Minéraux index (grenat, disthène)']
      },
      {
        name: 'Structures & Types',
        subtitle: 'Textures rocheuses',
        items: ['Schistosité (feuillets de schiste)', 'Foliation (lits alternés du gneiss)', 'Métamorphisme de contact (auréole)', 'Métamorphisme régional (chaînes orogéniques)']
      }
    ]
  },
  conclusion: "Les roches métamorphiques sont les témoins pétrifiés des forces orogéniques souterraines. Leur étude renseigne sur les profondeurs et les températures atteintes par les continents au fil des ères géologiques."
};

export const LESSON_21_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-21',
  number: 'Leçon 21',
  title: 'LE CYCLE DES ROCHES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Les trois grandes catégories de roches qui constituent notre planète — les roches magmatiques, les roches sédimentaires et les roches métamorphiques — ne sont pas des entités isolées et figées. Elles participent à un recyclage gigantesque et perpétuel régulé par la tectonique des plaques et l'action du climat : le Cycle des Roches. Chaque type de roche peut être détruit, altéré ou enfoui pour donner naissance à l'un des deux autres types au cours de cycles s'étalant sur des dizaines ou centaines de millions d'années.",
  fullText: `Le cycle des roches synthétise l'interaction constante entre les processus géodynamiques externes et internes de la Terre.

I. LES TROIS GRANDES FAMILLES DE ROCHES
1. Les Roches Magmatiques (ou Ignées) :
Issues du refroidissement et de la cristallisation d'un magma fondu.
- Roches plutoniques : refroidies très lentement en profondeur (cristaux visibles à l'œil nu, texture grenue). Exemple majeur : le Granite.
- Roches volcaniques : refroidies brutalement en surface au contact de l'air ou de l'eau (pâte vitreuse non cristallisée avec microlites, texture microlitique). Exemple : le Basalte (fonds océaniques, falaises de Dakar aux Almadies).
2. Les Roches Sédimentaires :
Formées à la surface de la Terre par l'accumulation et la consolidation de particules détritiques (sables, galets, argiles) ou par précipitation chimique (calcaires) et accumulation de débris organiques (charbon, pétrole). Elles sont caractérisées par leur disposition en strates horizontales et renferment souvent des fossiles (ex : calcaires de Bargny et grès au Sénégal).
3. Les Roches Métamorphiques :
Issues de la transformation à l'état solide de roches préexistantes soumises à de fortes pressions et températures (ex : Schistes, Gneiss, Marbres).

II. LE PARCOURS DYNAMIQUE DU CYCLE GÉOLOGIQUE
Le cycle se décompose en deux grands volets complémentaires :
1. Le Cycle Exogène (Processus de surface) :
- Altération et Érosion : les roches exposées aux intempéries (pluie, soleil, vent, gel, racines des arbres) sont altérées chimiquement et fragmentées mécaniquement.
- Transport : les particules détachées (sédiments) sont transportées par la gravité, les cours d'eau (fleuves Sénégal, Gambie), le vent ou les vagues marines.
- Sédimentation : dépôt des sédiments au fond des lacs, deltas et bassins océaniques en couches horizontales successives (strates).
- Diagenèse : sous le poids des couches supérieures, les sédiments subissent un tassement (compaction, expulsion de l'eau) et une cimentation chimique qui les transforme en roches sédimentaires cohérentes (ex : le sable devient grès, la boue devient argile compactée).

2. Le Cycle Endogène (Processus de profondeur) :
- Enfouissement et Métamorphisme : l'accumulation continue de sédiments (subsidence) ou le jeu des plaques tectoniques entraîne les roches sédimentaires ou magmatiques vers de grandes profondeurs. La pression et la température s'élèvent : les roches subissent un métamorphisme et se transforment en schistes ou gneiss.
- L'Anatexie (Fusion mantellique) : si la roche continue de s'enfoncer et que la température dépasse 700°C à 800°C en présence d'eau, elle fond partiellement puis totalement. Elle se retransforme en un Magma liquide incandescent.
- Remontée magmatique et Cristallisation : ce nouveau magma, moins dense que l'encaissant, remonte vers la surface :
  * Soit il s'arrête en profondeur et cristallise lentement pour reformer une roche magmatique plutonique (Granite).
  * Soit il perce la surface lors d'une éruption et refroidit vite pour donner du Basalte.
- Surrection et Érosion : les mouvements tectoniques et la collision continentale soulèvent ces roches profondes pour former des montagnes, exposant à nouveau le granite ou les schistes à l'érosion météorique de surface. Le cycle infini recommence !`,
  sections: [
    {
      title: 'I. Les Trois Familles Pétrographiques Fondamentales',
      content: [
        'Les roches magmatiques (granite, basalte) naissent de la cristallisation du magma.',
        'Les roches sédimentaires (grès, calcaire) se forment par altération, transport et diagenèse en surface.',
        'Les roches métamorphiques (gneiss, schistes) résultent d\'un réajustement à l\'état solide en profondeur.'
      ]
    },
    {
      title: 'II. Dynamique Circulaire : De la Surface aux Profondeurs Mantelliques',
      content: [
        'Le cycle exogène transforme les reliefs rocheux en sédiments consolidés.',
        'Le cycle endogène enfouit les roches, les métamorphise, puis les fond par anatexie pour régénérer le magma originel.'
      ],
      image: {
        url: SVG_SVT_3EME_CYCLE_ROCHES,
        alt: 'Schéma dynamique complet du cycle perpétuel des roches terrestres',
        caption: 'Figure 21.1 : Le cycle perpétuel des roches : interactions entre roches magmatiques, sédimentaires et métamorphiques par érosion, enfouissement et anatexie.'
      },
      table: {
        headers: ['Étape du cycle', 'Milieu de déroulement', 'Phénomènes géologiques', 'Famille de roches produite'],
        rows: [
          ['Érosion & Diagenèse', 'Surface terrestre & bassins océaniques', 'Altération météorique, transport d\'alluvions, compactage et cimentation', 'Roches sédimentaires (Grès, Calcaires)'],
          ['Enfouissement tectonique', 'Croûte moyenne à profonde (5-20 km)', 'Hausse de Pression et Température, schistosité et recristallisation solide', 'Roches métamorphiques (Schistes, Gneiss)'],
          ['Anatexie & Cristallisation', 'Croûte profonde (> 25 km) et surface', 'Fusion totale en magma puis refroidissement lent ou éruptif rapide', 'Roches magmatiques (Granite ou Basalte)'],
          ['Orogenèse & Surrection', 'Chaînes de montagnes en surrection', 'Soulèvement tectonique ramenant les roches profondes à l\'air libre', 'Exposition au nouveau cycle d\'érosion']
        ]
      }
    }
  ],
  diagram: {
    title: 'Le Cycle Perpétuel des Roches',
    root: 'CYCLE DES ROCHES',
    branches: [
      {
        name: 'Processus Exogènes',
        subtitle: 'De la surface aux bassins',
        items: ['Altération par l\'eau & le climat', 'Érosion & transport par les cours d\'eau', 'Sédimentation en strates régulières', 'Diagenèse (compaction & cimentation)']
      },
      {
        name: 'Processus Endogènes',
        subtitle: 'Des profondeurs au magma',
        items: ['Enfouissement & métamorphisme', 'Anatexie (fusion mantellique à haute T)', 'Cristallisation magmatique (Pluton/Volcan)', 'Soulèvement orogénique de surface']
      }
    ]
  },
  conclusion: "La Terre est une machine thermique dynamique qui recycle continuellement ses roches. Rien ne se perd, les roches s'altèrent, s'enfoncent, fondent et renaissent dans une chorégraphie géologique perpétuelle."
};

export const LESSON_22_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-22',
  number: 'Leçon 22',
  title: 'LA CHRONOLOGIE EN GÉOLOGIE',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "L'histoire de notre planète s'étend sur une durée vertigineuse d'environ 4,55 milliards d'années. Pour reconstituer cette fabuleuse fresque chronologique, décrypter l'évolution des espèces vivantes et dater les événements tectoniques majeurs (plissements, failles, intrusions magmatiques), les géologues utilisent deux méthodes d'investigation complémentaires : la chronologie relative (qui permet de classer les structures les unes par rapport aux autres) et la chronologie absolue (qui fournit un âge chiffré précis en millions d'années).",
  fullText: `La datation géologique permet d'ordonner les événements de l'histoire terrestre dans le temps.

I. LA CHRONOLOGIE RELATIVE ET SES PRINCIPES STRATIGRAPHIQUES
La chronologie relative permet d'établir l'ordre chronologique de succession d'événements géologiques (strates sédimentaires, plissements, failles, coulées magmatiques) sans donner de valeur chiffrée. Elle repose sur quatre principes universels :
1. Le Principe de Superposition :
Dans une série sédimentaire normale non déformée (non inversée par la tectonique), une couche (ou strate) est toujours plus récente que celle qu'elle recouvre et plus ancienne que celle qui est au-dessus d'elle.
2. Le Principe de Continuité :
Une même strate sédimentaire, délimitée par un même toit et un même mur, a le même âge géologique sur toute son étendue spatiale, même si sa composition lithologique change latéralement.
3. Le Principe de Recoupement :
Toute déformation tectonique (faille, pli) ou toute intrusion magmatique (dyke, filon de basalte, pluton de granite) est obligatoirement postérieure (plus récente) aux couches rocheuses qu'elle affecte ou traverse.
4. Le Principe d'Inclusion :
Tout fragment de roche inclus dans une autre couche est plus ancien que la roche qui l'englobe (ex : un galet de quartzite emprisonné dans un poudingue est plus ancien que la formation du poudingue).

II. LA BIOSTRATIGRAPHIE ET LES FOSSILES STRATIGRAPHIQUES
1. Définition et principe d'identité paléontologique :
Deux strates sédimentaires géographiquement très éloignées qui contiennent les mêmes fossiles stratigraphiques ont rigoureusement le même âge géologique.
2. Les caractéristiques d'un bon fossile stratigraphique :
Tous les fossiles ne sont pas exploitables pour la datation. Un bon fossile stratigraphique doit réunir trois critères essentiels :
- Une brève durée d'existence à l'échelle des temps géologiques (évolution biologique très rapide d'une espèce à l'autre), assurant une datation précise.
- Une vaste répartition géographique mondiale (organismes marins pélagiques nageurs ou planctoniques flottants disséminés par les courants).
- Une abondance numérique colossale et une fossilisation facile (coquilles dures, carapaces).
Exemples emblématiques :
* Les Trilobites (arthropodes marins) : exclusifs de l'Ère Primaire (Paléozoïque).
* Les Ammonites (céphalopodes à coquille spiralée cloisonnée) : caractéristiques absolues de l'Ère Secondaire (Mésozoïque).
* Les Nummulites (foraminifères unicellulaires en pièces de monnaie) : caractéristiques de l'Ère Tertiaire (Cénozoïque).

III. LA CHRONOLOGIE ABSOLUE : LA DATATION RADIOCHRONOLOGIQUE
Contrairement à la datation relative, la chronologie absolue donne l'âge numérique précis d'une roche ou d'un fossile exprimé en années.
1. Principe de la désintégration radioactive :
Certains minéraux renferment naturellement lors de leur cristallisation des isotopes radioactifs instables (isotopes pères). Au fil du temps, ces isotopes se désintègrent spontanément à un rythme rigoureusement constant, indépendant de la température et de la pression, en isotopes stables (isotopes fils).
2. Notion de demi-vie (ou période radioactive T) :
C'est la durée nécessaire pour que la moitié des atomes radioactifs pères initialement présents dans l'échantillon se désintègrent en atomes fils. En mesurant au spectromètre de masse le rapport entre atomes pères restants et atomes fils accumulés, on calcule l'âge de la roche :
- Méthode du Carbone 14 (14C) : période T = 5 730 ans. Permet de dater les restes organiques (bois, charbon, ossement, momie) jusqu'à environ 50 000 ans (préhistoire et archéologie).
- Méthode Potassium-Argon (40K / 40Ar) : période T = 1,25 milliard d'années. Idéale pour dater les roches volcaniques anciennes et les fossiles d'hominidés en Afrique de l'Est.
- Méthode Uranium-Plomb (238U / 206Pb) : période T = 4,5 milliards d'années, utilisée pour déterminer l'âge absolu de la formation de la Terre et des météorites primitives.`,
  sections: [
    {
      title: 'I. Les Quatre Principes de la Chronologie Relative',
      content: [
        'La superposition stipule que la strate inférieure est la plus ancienne dans une pile non inversée.',
        'Le recoupement démontre que la faille ou l\'intrusion de basalte est toujours plus jeune que les couches qu\'elle fracture.'
      ],
      table: {
        headers: ['Principe de datation', 'Énoncé synthétique', 'Application sur le terrain'],
        rows: [
          ['Superposition', 'Couche inférieure plus ancienne que la couche supérieure', 'Datation relative d\'une série de roches sédimentaires'],
          ['Continuité', 'Une même strate a le même âge sur toute son étendue', 'Corrélation stratigraphique entre deux collines voisines'],
          ['Recoupement', 'L\'événement déformant est postérieur aux roches affectées', 'Datation relative d\'une faille tectonique ou d\'un filon magmatique'],
          ['Inclusion', 'Le débris rocheux inclus est plus ancien que la roche réceptrice', 'Galets emprisonnés dans un conglomérat / poudingue']
        ]
      }
    },
    {
      title: 'II. Fossiles Stratigraphiques Repères des Grandes Ères',
      content: [
        'Un fossile stratigraphique performant associe courte durée d\'existence géologique et vaste dispersion océanique.',
        'Trilobites pour l\'Ère Primaire, Ammonites pour l\'Ère Secondaire et Nummulites pour l\'Ère Tertiaire sont les boussoles paléontologiques du géologue.'
      ]
    },
    {
      title: 'III. La Datation Absolue par les Radio-isotopes',
      content: [
        'La désintégration régulière d\'isotopes instables sert de sablier géochronologique immuable.',
        'Le Carbone 14 date les restes organiques récents tandis que le Potassium-Argon chiffre les roches magmatiques en millions d\'années.'
      ]
    }
  ],
  diagram: {
    title: 'La Chronologie Géologique',
    root: 'DATATION GÉOLOGIQUE',
    branches: [
      {
        name: 'Chronologie Relative',
        subtitle: 'Ordre de succession',
        items: ['Principe de superposition (bas = ancien)', 'Principe de recoupement (failles, dykes)', 'Principe de continuité des strates', 'Fossiles (Trilobites, Ammonites, Nummulites)']
      },
      {
        name: 'Chronologie Absolue',
        subtitle: 'Âge chiffré précis',
        items: ['Désintégration radioactive d\'isotopes', 'Demi-vie ou période radioactive T', 'Carbone 14 (matière organique < 50 000 ans)', 'Potassium-Argon & Uranium-Plomb (millions d\'années)']
      }
    ]
  },
  conclusion: "La combinaison de la chronologie relative stratigraphique et des mesures radiochronologiques absolues a permis aux scientifiques d'ériger l'Échelle des Temps Géologiques, jalonnant l'histoire de la Terre et de la vie depuis ses origines."
};
'''

with open('src/data/courses_3eme_svt_part4.ts', 'w', encoding='utf-8') as f:
    f.write(code)

print("Created src/data/courses_3eme_svt_part4.ts successfully.")
