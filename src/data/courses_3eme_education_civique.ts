import { ContentData, LessonContent } from './courses';

// =========================================================================
// RÉPUBLIQUE DU SÉNÉGAL
// COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (TROISIÈME)
// Programme officiel intégral pour la préparation à l'examen du BFEM
// Conforme au document officiel : 3 Chapitres, 11 Leçons détaillées et 2 Dossiers officiels
// =========================================================================

// -------------------------------------------------------------------------
// CHAPITRE I : ENVIRONNEMENT ET PATRIMOINE
// -------------------------------------------------------------------------

export const LESSON_1_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LE PATRIMOINE NATUREL : TYPOLOGIE',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le patrimoine naturel englobe l'ensemble des biens dont les richesses sont issues de la nature : les formations géologiques, physiographiques, les zones délimitées constituant l'habitat d'espèces animales et végétales menacées, ainsi que les sites naturels ayant une valeur universelle exceptionnelle du point de vue de la science, de la conservation ou de la beauté naturelle. Au Sénégal, ce patrimoine constitue non seulement une richesse biologique indispensable à l'équilibre des écosystèmes, mais aussi un pilier économique à travers des secteurs majeurs comme le tourisme, la pêche et l'artisanat.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE I : ENVIRONNEMENT ET PATRIMOINE

Leçon 1 : Le patrimoine naturel : typologie

I. Définition et fondements du patrimoine naturel
Le patrimoine naturel englobe l'ensemble des biens dont les richesses sont issues de la nature : les formations géologiques, physiographiques, les zones délimitées constituant l'habitat d'espèces animales et végétales menacées, ainsi que les sites naturels ayant une valeur universelle exceptionnelle du point de vue de la science, de la conservation ou de la beauté naturelle.
Au Sénégal, ce patrimoine constitue non seulement une richesse biologique indispensable à l'équilibre des écosystèmes, mais aussi un pilier économique à travers des secteurs majeurs comme le tourisme, la pêche et l'artisanat.

II. Typologie des ressources naturelles du Sénégal
1. Le patrimoine faunique : Le Sénégal abrite une faune sauvage riche mais fortement menacée. On y retrouve de grands mammifères (lions, éléphants, léopards, hippopotames), une avifaune exceptionnelle (oiseaux migrateurs et sédentaires) et des espèces marines variées. Cette faune est concentrée dans des espaces protégés pour éviter son extinction face au braconnage.
2. Le patrimoine floristique : Il comprend le couvert végétal national, subdivisé en plusieurs zones éco-géographiques. Au nord, la steppe sahélienne domine avec des espèces résilientes comme l'acacia. Au centre se déploie la savane arborée. Au sud, la Casamance abrite des forêts denses et d'importantes zones de mangrove (palétuviers) indispensables à la reproduction des espèces marines.
3. Le patrimoine hydrique et géologique : Les fleuves Sénégal, Gambie et Casamance, associés à des lacs comme le Lac de Guiers ou le Lac Rose, forment le réseau hydraulique. Le patrimoine géologique se manifeste par des sites remarquables tels que les Îles de la Madeleine, les mamelles de Dakar ou les falaises de Bandafassi.

III. Les grands sanctuaires de la biodiversité nationale
Pour préserver cette diversité, l'État a classé plusieurs zones érigées en parcs nationaux et réserves :
• Le Parc National du Niokolo-Koba (PNNK) : Situé au sud-est, c'est le plus grand parc du pays. Il protège la grande faune africaine et est classé patrimoine mondial de l'UNESCO.
• Le Parc National des Oiseaux du Djoudj (PNOD) : Situé dans le delta du fleuve Sénégal, c'est le troisième sanctuaire ornithologique au monde, accueillant des millions d'oiseaux migrateurs chaque année.
• La Réserve de Biosphère du Delta du Saloum (RBDS) : Zone humide d'importance internationale, elle se caractérise par ses réseaux de bolongs, ses îles et sa riche biodiversité marine.`,
  sections: [
    {
      title: 'I. Définition et fondements du patrimoine naturel',
      content: [
        "Le patrimoine naturel rassemble les ressources biologiques, géologiques et paysagères créées par la nature sans intervention de l'homme.",
        "Il possède une triple valeur :",
        "• Valeur écologique : maintien de la biodiversité, régulation du climat, préservation des nappes phréatiques et cycle des éléments nutritifs.",
        "• Valeur économique : base de subsistance pour des millions de citoyens (agriculture, pêche artisanale, élevage pastoral, pharmacopée traditionnelle) et levier du tourisme écologique.",
        "• Valeur culturelle et scientifique : support de recherche, patrimoine identitaire et cadre de vie des communautés."
      ]
    },
    {
      title: 'II. Typologie des ressources naturelles du Sénégal',
      content: [
        "1. Le patrimoine faunique :",
        "• Grands mammifères menacés : éléphants de brousse, lions d'Afrique de l'Ouest, léopards, hippopotames, buffles, élands de Derby (la plus grande antilope du monde, endémique du Niokolo-Koba).",
        "• Avifaune remarquable : pélicans blancs, flamants roses, cormorans, hérons, passereaux et rapaces migrateurs venus d'Europe et d'Asie.",
        "• Faune ichtyologique et marine : mérous (thiof), capitaines, crevettes, tortues marines, lamantins d'Afrique de l'Ouest.",
        "2. Le patrimoine floristique :",
        "• Zone sahélienne (Nord) : steppes arbustives à Acacia raddiana, balanites et graminées épineuses adaptées au stress hydrique.",
        "• Zone soudanienne (Centre) : savanes arborées dominées par le baobab (Adansonia digitata), le rônier, le néré et le caïlcédrat.",
        "• Zone guinéenne (Sud - Casamance) : forêts denses humides, fromagers géants, tecks et mangroves à Rhizophora le long des estuaires.",
        "3. Le patrimoine hydrique et géologique :",
        "• Réseau hydrographique : les fleuves Sénégal (1 790 km), Gambie et Casamance, les cours d'eau temporaires et les lacs majeurs (Lac de Guiers, réserve d'eau potable de Dakar, et Lac Rose à forte salinité).",
        "• Curiosités géologiques : les falaises de grès de Bandafassi et d'Iwol (Pays Bassari), les volcans éteints des Mamelles de la presqu'île du Cap-Vert, l'archipel volcanique des Îles de la Madeleine."
      ],
      table: {
        headers: ['Branche du Patrimoine', 'Composantes au Sénégal', 'Menaces Principales'],
        rows: [
          ["Patrimoine Faunique", "Élands de Derby, lions, pélicans, lamantins, thiof", "Braconnage, surpêche, fragmentation des habitats."],
          ["Patrimoine Floristique", "Forêts de Casamance, mangroves, baobabs, acacias", "Coupe illégale de bois précieux, feux de brousse, sécheresse."],
          ["Patrimoine Hydrique & Géologique", "Fleuves Sénégal et Gambie, Lac de Guiers, Mamelles", "Pollution industrielle, ensablement, prélèvements excessifs."]
        ]
      }
    },
    {
      title: 'III. Les grands sanctuaires de la biodiversité nationale',
      content: [
        "• Le Parc National du Niokolo-Koba (PNNK) : Couvre plus de 913 000 hectares dans les régions de Tambacounda et Kédougou. Sanctuaire majeur pour l'éland de Derby, le lion d'Afrique de l'Ouest et les chimpanzés de savane. Classé réserve de biosphère et patrimoine mondial par l'UNESCO.",
        "• Le Parc National des Oiseaux du Djoudj (PNOD) : Situé dans le delta du fleuve Sénégal sur 16 000 hectares. 3ème réserve ornithologique au monde, étape migratoire vitale pour 3 millions d'oiseaux (pélicans, spatules, canards d'Europe).",
        "• La Réserve de Biosphère du Delta du Saloum (RBDS) : Réseau complexe d'îles sableuses, d'estuaires, d'amas coquilliers ancestraux et de bolongs bordés de palétuviers abritant une faune marine et aviaire exceptionnelle.",
        "• Autres aires protégées : Parc National de la Langue de Barbarie (Saint-Louis), Parc National des Îles de la Madeleine (Dakar), Réserve Spéciale de Faune de Guembeul."
      ]
    }
  ],
  conclusion: "La préservation du patrimoine naturel est une obligation constitutionnelle et morale inscrite à l'article 25-2 de la Constitution sénégalaise. Chaque élève doit devenir un éco-citoyen vigilant pour protéger ce trésor menacé."
};

export const LESSON_2_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-2',
  number: 'LEÇON 2',
  title: 'PROTECTION DU PATRIMOINE NATUREL : LES CODES',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "L'exploitation abusive des ressources, la déforestation, la pollution urbaine et le braconnage nécessitent une réglementation stricte. L'État du Sénégal a mis en place un arsenal juridique contraignant composé de plusieurs codes sectoriels afin de sanctionner les comportements destructeurs et promouvoir un développement durable.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE I : ENVIRONNEMENT ET PATRIMOINE

Leçon 2 : Protection du patrimoine naturel : les codes

I. Justification de la protection juridique
L'exploitation abusive des ressources, la déforestation, la pollution urbaine et le braconnage nécessitent une réglementation stricte. L'État du Sénégal a mis en place un arsenal juridique contraignant composé de plusieurs codes sectoriels afin de sanctionner les comportements destructeurs et promouvoir un développement durable.

II. Analyse des codes sectoriels de protection
1. Le Code de l'Environnement : Il fixe les règles fondamentales visant à prévenir, réduire et lutter contre les pollutions et nuisances. Il impose notamment des études d'impact environnemental (EIE) avant la réalisation de tout grand projet industriel ou d'infrastructure.
2. Le Code Forestier : Il régit la gestion, l'exploitation et la protection des ressources forestières. Il interdit la coupe illégale de bois, réglemente le charbonnage et définit le domaine forestier de l'État tout en fixant de lourdes peines pour les contrevenants.
3. Le Code Minier : Il encadre la recherche et l'exploitation des substances minérales. Il oblige les entreprises minières à respecter les normes environnementales, à réhabiliter les sites après exploitation et à verser des compensations aux communautés locales.
4. Le Code de l'Eau et le Code de l'Hygiène : Le Code de l'eau protège la ressource contre le gaspillage et la pollution industrielle. Le Code de l'hygiène réglemente la salubrité publique, la gestion des déchets ménagers et industriels, et sanctionne le dépôt sauvage d'ordures.

III. Le rôle des citoyens et des structures communautaires
La loi seule ne suffit pas. La protection de l'environnement requiert un civisme actif : participation aux campagnes de reboisement, dénonciation des délits environnementaux et adoption de comportements éco-responsables au quotidien.`,
  sections: [
    {
      title: 'I. Justification de la protection juridique de la nature',
      content: [
        "Face à la pression démographique, aux changements climatiques et à la prédation économique, les ressources naturelles ne peuvent survivre sans encadrement légal strict.",
        "Le Sénégal s'est doté d'une législation moderne articulée autour du principe pollueur-payeur et de la responsabilité environnementale.",
        "L'article 25-2 de la Constitution dispose : « Chacun a droit à un environnement sain. La défense, la préservation et l'amélioration de l'environnement incombent aux pouvoirs publics et à chaque citoyen. »"
      ]
    },
    {
      title: 'II. Analyse approfondie des codes sectoriels de protection',
      content: [
        "1. Le Code de l'Environnement (Loi n° 2001-01) :",
        "• Définit la politique globale de prévention des pollutions de l'air, des sols et des eaux continentales et marines.",
        "• Obligation d'Étude d'Impact Environnemental et Social (EIES) : aucun projet d'autoroute, d'usine chimique, de centrale électrique ou d'hôtel ne peut démarrer sans autorisation du ministère chargé de l'Environnement.",
        "2. Le Code Forestier (Loi n° 2018-25) :",
        "• Distingue le domaine forestier classé de l'État (forêts classées, parcs nationaux) et le domaine forestier protégé des collectivités territoriales.",
        "• Répression sévère du trafic de bois : emprisonnement ferme pour la coupe d'espèces protégées (comme le ptérocarpe ou bois de rose en Casamance, le caïlcédrat, le vène).",
        "• Réglementation stricte des permis de coupe et des quotas de fabrication de charbon de bois.",
        "3. Le Code Minier (Loi n° 2016-32) :",
        "• Obligation légale de restauration et de réhabilitation des sols après l'extraction (mines d'or de Kédougou, phosphates de Taïba, carrières de calcaire et de basalte de Thiès).",
        "• Alimentation obligatoire d'un fonds de développement local au bénéfice direct des populations riveraines des mines.",
        "4. Le Code de l'Eau (Loi n° 81-13) et le Code de l'Hygiène (Loi n° 83-71) :",
        "• Le Code de l'Eau garantit un accès équitable aux ressources hydriques et interdit tout rejet toxique dans les nappes souterraines ou les cours d'eau.",
        "• Le Code de l'Hygiène fixe les règles de salubrité publique, sanctionne les dépôts anarchiques d'immondices et impose la propreté des établissements recevant du public."
      ],
      table: {
        headers: ['Code Sectoriel', 'Champs d’Application', 'Mesure Phare / Sanction'],
        rows: [
          ["Code de l'Environnement", "Pollutions, nuisances, installations classées", "Étude d'impact environnemental (EIES) préalable obligatoire."],
          ["Code Forestier", "Forêts, faune, charbonnage, bois d'œuvre", "Peines de prison et confiscation pour trafic illégal de bois."],
          ["Code Minier", "Or, phosphates, zircon, carrières", "Obligation de réhabilitation écologique et fonds communautaires."],
          ["Code de l'Eau & de l'Hygiène", "Eaux de surface, nappes, salubrité urbaine", "Interdiction des rejets toxiques et répression des dépôts sauvages."]
        ]
      }
    },
    {
      title: 'III. Le rôle des citoyens et des structures communautaires',
      content: [
        "L'efficacité des textes législatifs repose sur l'appropriation populaire :",
        "• Civisme environnemental : tri et gestion rationnelle des ordures ménagères, économie d'eau et d'énergie.",
        "• Mobilisation citoyenne : participation assidue aux campagnes nationales de reboisement (Grande Muraille Verte, Journée nationale de l'Arbre).",
        "• Veille et alerte : signalement des coupes illégales, des feux allumés imprudemment et des pollutions aux brigades des Eaux et Forêts et à la gendarmerie environnementale.",
        "• Implication des ASC et associations de quartier dans les initiatives communautaires durables."
      ]
    }
  ],
  conclusion: "Les codes de protection constituent le bouclier juridique du Sénégal contre la prédation écologique. La loi combinée au civisme communautaire est la seule garantie d'un développement durable et équitable."
};

export const LESSON_3_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-3',
  number: 'LEÇON 3',
  title: 'LE PATRIMOINE HISTORIQUE ET CULTUREL : TYPOLOGIE, PROTECTION ET STRATÉGIES DE PROMOTION',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le patrimoine historique et culturel se compose des biens matériels et immatériels hérités du passé, qui témoignent de l'histoire, des valeurs, des croyances et du génie créateur des populations du Sénégal. Il forge l'identité nationale et favorise la cohésion sociale.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE I : ENVIRONNEMENT ET PATRIMOINE

Leçon 3 : Le patrimoine historique et culturel : typologie, protection et stratégies de promotion

I. Définition et distinctions conceptuelles
Le patrimoine historique et culturel se compose des biens matériels et immatériels hérités du passé, qui témoignent de l'histoire, des valeurs, des croyances et du génie créateur des populations du Sénégal. Il forge l'identité nationale et favorise la cohésion sociale.

II. Typologie du patrimoine culturel
1. Le patrimoine matériel : Il comprend les monuments historiques, les bâtiments d'architecture coloniale (Saint-Louis, Gorée), les sites archéologiques (les cercles mégalithiques de Sénégambie), les objets d'art et les manuscrits anciens exposés dans les musées.
2. Le patrimoine immatériel : Il regroupe les traditions orales, les contes, les épopées (comme celle de Soundiata Keïta), les musiques traditionnelles, les danses, les savoir-faire artisanaux, les rites initiatiques (le Kankourang en Casamance) et les valeurs sociétales telles que la Teranga.

III. Stratégies de protection, de conservation et de promotion
Le ministère de la Culture, en partenariat avec des organisations internationales comme l'UNESCO, procède à l'inventaire et au classement des sites menacés. La promotion passe par le développement du tourisme culturel, l'introduction de ces thématiques dans les programmes scolaires et l'organisation de festivals nationaux et internationaux pour valoriser le génie sénégalais.`,
  sections: [
    {
      title: 'I. Définition et distinctions conceptuelles',
      content: [
        "Le patrimoine culturel représente l'héritage matériel et spirituel légué par les générations antérieures.",
        "Il incarne la mémoire collective, raffermit le sentiment d'appartenance à la communauté nationale et transmet des repères éthiques aux jeunes générations.",
        "La convention de l'UNESCO de 1972 (patrimoine matériel) et celle de 2003 (patrimoine immatériel) fournissent le cadre juridique international de sa protection."
      ]
    },
    {
      title: 'II. Typologie du patrimoine culturel sénégalais',
      content: [
        "1. Le patrimoine culturel matériel (tangible) :",
        "• L'Île de Gorée : Mémoire universelle de la traite négrière transatlantique, inscrite au patrimoine mondial depuis 1978 (Maison des Esclaves, fortifications).",
        "• L'Île de Saint-Louis : Première capitale coloniale du Sénégal et de l'AOF, célèbre pour son architecture coloniale métisse, son plan en damier et le Pont Faidherbe.",
        "• Les cercles mégalithiques de Sénégambie (Sine Ngayène, Wanar) : Vestiges archéologiques funéraires millénaires uniques en Afrique de l'Ouest.",
        "• Le Pays Bassari, paysages culturels Bassari, Peul et Bédik : Habitats perchés, terrasses de culture et sanctuaires dans la région de Kédougou.",
        "• Les objets d'art, poteries, masques et manuscrits anciens conservés au Musée des Civilisations Noires de Dakar et à l'IFAN.",
        "2. Le patrimoine culturel immatériel (intangible) :",
        "• Le Kankourang : Rite d'initiation et figure mythique mandingue protectrice de l'ordre moral et des initiés en Casamance et à Mbour, inscrit par l'UNESCO.",
        "• Les traditions orales et épopées : Les récits des griots (Guéweul) chantant l'épopée de Soundiata Keïta, les hauts faits d'El Hadj Omar Tall, de Lat Dior ou d'Aline Sitoé Diatta.",
        "• Les savoir-faire artisanaux : Tissage du pagne traditionnel (Serrou Rabal), travail du cuir, poterie de Joal, piroguerie d'art.",
        "• Les valeurs cardinales de société : La Teranga (hospitalité légendaire), le Kersa (retenue et pudeur), le Jom (dignité et courage moral) et le Sutura (discrétion bienveillante)."
      ],
      table: {
        headers: ['Catégorie', 'Exemples Notables au Sénégal', 'Reconnaissance'],
        rows: [
          ["Patrimoine Matériel Bâti", "Île de Gorée, Île de Saint-Louis, Pont Faidherbe", "Patrimoine Mondial UNESCO."],
          ["Patrimoine Archéologique", "Cercles mégalithiques de Sine Ngayène et Wanar", "Patrimoine Mondial UNESCO."],
          ["Patrimoine Immatériel Rituel", "Le Kankourang (rites mandingues d'initiation)", "Chef-d'œuvre du patrimoine oral et immatériel."],
          ["Valeurs & Traditions", "Teranga, Kersa, Jom, contes des griots", "Héritage moral et identitaire national."]
        ]
      }
    },
    {
      title: 'III. Stratégies de protection, de conservation et de promotion',
      content: [
        "• L'inventaire national et le classement par la Direction du Patrimoine Culturel du ministère de la Culture.",
        "• La restauration architecturale des bâtiments historiques menacés de ruine à Saint-Louis et à Gorée.",
        "• La transmission scolaire et universitaire pour enraciner la jeunesse dans ses racines culturelles authentiques.",
        "• Le rayonnement international à travers les grands événements : Biennale de l'Art africain contemporain (Dak'Art), Festival National des Arts et de la Culture (FESNAC)."
      ]
    }
  ],
  conclusion: "Un peuple qui oublie son patrimoine culturel perd son âme et ses repères. La préservation de notre héritage historique est le ciment de l'unité nationale et le tremplin de notre émergence."
};

export const DOSSIER_1_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-dossier-1',
  number: 'DOSSIER AC 1',
  title: 'LE DÉBOISEMENT ET LA LUTTE CONTRE LES FEUX DE BROUSSE',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Ce dossier analyse le phénomène de la déforestation au Sénégal, accentué par la coupe clandestine de bois de chauffe et de bois d'œuvre (notamment le réseau de trafic de bois de rose en Casamance). Les feux de brousse, souvent provoqués par l'imprudence humaine ou des pratiques agricoles inadaptées, détruisent chaque année des milliers d'hectares de tapis végétal, appauvrissent les sols et entraînent l'exode des espèces animales. Les solutions résident dans les techniques de pare-feux, le renforcement de la surveillance par les agents des Eaux et Forêts, et la sensibilisation des comités villageois de vigilance.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE I : ENVIRONNEMENT ET PATRIMOINE

Dossier AC 1 : Le déboisement et la lutte contre les feux de brousse

Ce dossier analyse le phénomène de la déforestation au Sénégal, accentué par la coupe clandestine de bois de chauffe et de bois d'œuvre (notamment le réseau de trafic de bois de rose en Casamance). Les feux de brousse, souvent provoqués par l'imprudence humaine ou des pratiques agricoles inadaptées, détruisent chaque année des milliers d'hectares de tapis végétal, appauvrissent les sols et entraînent l'exode des espèces animales. Les solutions résident dans les techniques de pare-feux, le renforcement de la surveillance par les agents des Eaux et Forêts, et la sensibilisation des comités villageois de vigilance.`,
  sections: [
    {
      title: 'I. Les causes majeures du déboisement au Sénégal',
      content: [
        "1. La surexploitation pour l'énergie domestique : Plus de 80% des ménages en zone rurale et périurbaine dépendent encore du bois de chauffe et du charbon de bois pour la cuisson quotidienne.",
        "2. Le trafic criminel de bois d'œuvre : Pillage massif des forêts de Casamance (bois de rose / Pterocarpus erinaceus, vène) alimentant des réseaux transfrontaliers clandestins.",
        "3. L'expansion agricole et pastorale non maîtrisée : Défrichements anarchiques par brûlis, avancée des zones de culture sur les forêts classées."
      ]
    },
    {
      title: 'II. L’impact dévastateur des feux de brousse',
      content: [
        "• Destruction du couvert végétal : Chaque saison sèche, entre 200 000 et 400 000 hectares de pâturages et de forêts partent en fumée.",
        "• Dégradation et stérilisation des sols : Disparition de la matière organique superficielle, accélération de l'érosion éolienne et hydrique.",
        "• Menace vitale pour la faune : Destruction des nids, mort de petits mammifères et disparition des zones de pâturage pour le bétail.",
        "• Bilan économique lourd : Perte de stocks de foin, destruction de vergers et incendies accidentels de concessions villageoises."
      ]
    },
    {
      title: 'III. Les solutions durables et stratégies de riposte',
      content: [
        "• Aménagement de réseaux de pare-feux : Bandes de terre défrichées et nettoyées de 10 à 20 mètres de large pour stopper net la progression des flammes.",
        "• Renforcement opérationnel des services des Eaux, Forêts et Chasses : Patrouilles armées, contrôles routiers rigoureux et application sans faiblesse du Code Forestier.",
        "• Mobilisation des Comités Villageois de Vigilance : Implication directe des jeunes et des femmes dans l'alerte précoce et l'extinction rapide des départs de feu.",
        "• Promotion des énergies alternatives : Vulgarisation du biogaz, des foyers améliorés à haut rendement et de l'énergie solaire thermique."
      ]
    }
  ],
  conclusion: "La lutte contre le déboisement et les feux de brousse est une urgence de sécurité nationale. Préserver les forêts du Sénégal, c'est garantir l'eau, la fertilité des terres et l'avenir des générations futures."
};

// -------------------------------------------------------------------------
// CHAPITRE II : VIVRE ENSEMBLE
// -------------------------------------------------------------------------

export const LESSON_4_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LA CULTURE DE LA PAIX',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "La culture de la paix est un ensemble de valeurs, d'attitudes et de comportements qui rejettent la violence et préviennent les conflits en s'attaquant à leurs causes profondes par le dialogue et la négociation. Elle repose sur le respect des droits fondamentaux de la personne humaine.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE II : VIVRE ENSEMBLE

Leçon 4 : La culture de la paix

I. Les fondements de la culture de la paix
La culture de la paix est un ensemble de valeurs, d'attitudes et de comportements qui rejettent la violence et préviennent les conflits en s'attaquant à leurs causes profondes par le dialogue et la négociation. Elle repose sur le respect des droits fondamentaux de la personne humaine.

II. Le dialogue socio-culturel et interreligieux au Sénégal
Le Sénégal est souvent cité en exemple pour sa stabilité sociale. Cette paix repose sur des mécanismes endogènes puissants :
Le cousinage à plaisanterie (Kal ou Déenkkou) : Un outil de régulation sociale permettant à différents groupes ethniques (Sérères-Diolas, Peuls-Forgerons) de désamorcer les tensions par l'humour.
La tolérance interreligieuse : Une coexistence pacifique exemplaire entre la majorité musulmane et la minorité chrétienne, illustrée par le respect mutuel des fêtes religieuses, des cimetières mixtes dans certaines localités et le dialogue permanent entre les chefs confrériques et l'Église.

III. Les menaces contemporaines à la cohésion sociale
Malgré ces acquis, la paix sociale fait face à de nouveaux défis : la montée des discours identitaires et communautaristes, l'usage irresponsable des réseaux sociaux véhiculant la désinformation et la haine, ainsi que la précarité économique des jeunes qui alimente les tensions politiques.`,
  sections: [
    {
      title: 'I. Les fondements universels de la culture de la paix',
      content: [
        "Selon l'UNESCO, la culture de la paix consiste à transformer les réflexes de violence en réflexes de dialogue, d'écoute et de coopération.",
        "Elle implique :",
        "• Le respect inconditionnel de la vie humaine et de la dignité de chacun.",
        "• Le règlement pacifique et concerté des différends par la médiation plutôt que par la force.",
        "• L'égalité réelle entre les hommes et les femmes et la participation démocratique."
      ]
    },
    {
      title: 'II. Les mécanismes sénégalais de cohésion sociale',
      content: [
        "Le Sénégal dispose de remparts culturels historiques uniques au monde :",
        "1. Le cousinage de plaisanterie (Kal, Déenkkou ou Sanankuya) :",
        "• Pacte séculaire liant Sérères et Diolas, Peuls et Sérères, ou encore certaines familles (Ndiaye et Diop, Fall et Wade).",
        "• Permet de désamorcer instantanément des querelles potentiellement graves par la dérision amicale, l'insulte rituelle non agressive et le rappel du pacte d'assistance mutuelle.",
        "2. La concorde interreligieuse harmonieuse :",
        "• Près de 95% de musulmans et 5% de chrétiens coexistent en parfaite fraternité, formant souvent des familles mixtes.",
        "• Célébration partagée des fêtes : les chrétiens offrent le Ngallakh de Pâques à leurs voisins musulmans, qui partagent la viande de Tabaski en retour.",
        "• Présence de cimetières mixtes où reposent ensemble musulmans et chrétiens (comme dans l'île aux coquillages de Fadiouth).",
        "• Concertation permanente et médiation bienveillante des guides des grandes confréries soufies (Tidianiyya, Mouridiyya, Qadiriyya, Layeniyya) et de l'Archevêché de Dakar."
      ],
      table: {
        headers: ['Mécanisme de Paix', 'Modalités au Sénégal', 'Effet Social'],
        rows: [
          ["Cousinage à plaisanterie (Kal)", "Alliances Sérères-Diolas, Peuls-Sérères, patrons", "Désamorce les rancœurs et proscrit l'affrontement."],
          ["Dialogue Interreligieux", "Partage des fêtes (Ngallakh, Tabaski), familles mixtes", "Cimente l'unité nationale au-dessus des confessions."],
          ["Médiation des Guides", "Appels à la paix des Khalifes généraux et Évêques", "Apaise les tensions politiques et préserve la concorde."]
        ]
      }
    },
    {
      title: 'III. Les menaces contemporaines à la cohésion nationale',
      content: [
        "• La dérive communautariste : Tentation chez certains acteurs d'instrumentaliser l'appartenance ethnique ou régionale à des fins politiques partisanes.",
        "• Les dérives numériques sur les réseaux sociaux : Propagation instantanée de fausses nouvelles (fake news), de discours d'incitation à la haine, de cyber-harcèlement et d'intolérance.",
        "• La vulnérabilité socio-économique : Le chômage des jeunes et les inégalités criantes créent un terreau propice aux explosions de colère urbaine."
      ]
    }
  ],
  conclusion: "La paix n'est pas un acquis définitif mais une construction quotidienne. Il appartient à chaque jeune citoyen sénégalais de cultiver la tolérance, de vérifier les informations avant de les relayer et de préserver le vivre-ensemble."
};

export const LESSON_5_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-5',
  number: 'LEÇON 5',
  title: 'SOLIDARITÉ ET INTÉGRATION EN AFRIQUE',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "L'intégration régionale et continentale repose sur le constat que les micro-États africains, hérités de la colonisation, ne peuvent faire face isolément aux défis de la mondialisation. S'unir devient une obligation économique, politique et sécuritaire pour assurer le développement de l'Afrique.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE II : VIVRE ENSEMBLE

Leçon 5 : Solidarité et intégration en Afrique

I. L'idéal panafricain et la nécessité de l'intégration
L'intégration régionale et continentale repose sur le constat que les micro-États africains, hérités de la colonisation, ne peuvent faire face isolément aux défis de la mondialisation. S'unir devient une obligation économique, politique et sécuritaire pour assurer le développement de l'Afrique.

II. L'Union Africaine (UA)
Succédant à l'OUA en 2002, l'UA a pour objectif de promouvoir l'unité, la solidarité africaine, et d'accélérer l'intégration politique et socio-économique du continent. Elle dispose d'institutions comme la Commission de l'UA, le Conseil de paix et de sécurité, et oeuvre pour la mise en place de la ZLECAf (Zone de libre-échange continentale africaine).

III. Les organisations d'intégration sous-régionale
1. La CEDEAO (Communauté Économique des États de l'Afrique de l'Ouest) : Créée en 1975, elle vise la libre circulation des personnes, des biens et des capitaux. Au-delà de l'économie, elle joue un rôle crucial dans la gestion des crises politiques et le maintien de la paix via ses forces d'interposition.
2. L'UEMOA (Union Économique et Monétaire Ouest-Africaine) : Regroupant les États ayant en commun l'usage du franc CFA, elle vise l'harmonisation des politiques fiscales, juridiques et monétaires pour créer un marché commun intégré.
3. L'OMVS (Organisation pour la Mise en Valeur du Fleuve Sénégal) : Exemple réussi de coopération inter-États (Sénégal, Mali, Mauritanie, Guinée) pour la gestion partagée des ressources hydrauliques, la production d'énergie hydroélectrique et le développement de l'agriculture irriguée.`,
  sections: [
    {
      title: "I. L'idéal panafricain et la nécessité vitale de l'intégration",
      content: [
        "Les frontières actuelles de l'Afrique résultent du partage colonial opéré lors de la conférence de Berlin (1884-1885).",
        "Ces frontières artificielles ont morcelé le continent en micro-marchés étroits, sans poids géopolitique suffisant face aux blocs mondiaux (Union Européenne, États-Unis, Chine).",
        "L'intégration africaine vise à créer un espace uni de plus de 1,4 milliard d'habitants permettant de peser dans le commerce mondial et de garantir la sécurité collective."
      ]
    },
    {
      title: "II. L'Union Africaine (UA) et ses ambitions",
      content: [
        "• Création : Fondée en 2002 à Durban (Afrique du Sud), l'UA succède à l'Organisation de l'Unité Africaine (OUA créée en 1963 à Addis-Abeba).",
        "• Objectifs majeurs : Réaliser l'unité politique du continent, accélérer l'intégration socio-économique, éradiquer la pauvreté et instaurer la paix.",
        "• Organes clés :",
        "  - La Conférence des Chefs d'État et de Gouvernement (organe suprême de décision).",
        "  - La Commission de l'UA (organe exécutif siégeant à Addis-Abeba).",
        "  - Le Conseil de Paix et de Sécurité (CPS) chargé de la gestion des conflits.",
        "• La ZLECAf (Zone de Libre-Échange Continentale Africaine) : Projet phare éliminant progressivement les droits de douane entre pays africains pour doper le commerce intra-africain."
      ]
    },
    {
      title: "III. Les organisations d'intégration sous-régionale en Afrique de l'Ouest",
      content: [
        "1. La CEDEAO (Traité de Lagos de 1975) :",
        "• 15 pays membres initiaux formant un espace de libre circulation des personnes et des biens sans visa grâce au passeport CEDEAO.",
        "• Dimension sécuritaire et maintien de l'ordre constitutionnel (forces de maintien de la paix, médiations diplomatiques).",
        "2. L'UEMOA (Traité de Dakar de 1994) :",
        "• 8 États membres d'Afrique de l'Ouest partageant une monnaie commune (le Franc CFA émis par la BCEAO).",
        "• Harmonisation fiscale, convergence macro-économique et reconnaissance mutuelle des diplômes.",
        "3. L'OMVS (créée en 1972) :",
        "• Regroupe le Sénégal, le Mali, la Mauritanie et la Guinée.",
        "• Gestion commune exemplaire des barrages de Diama (anti-sel) et de Manantali (hydroélectricité et retenue d'irrigation)."
      ],
      table: {
        headers: ['Organisation', 'Création & Siège', 'Missions Principales'],
        rows: [
          ["Union Africaine (UA)", "2002 • Addis-Abeba (Éthiopie)", "Unité politique, paix continentale, ZLECAf."],
          ["CEDEAO", "1975 • Abuja (Nigeria)", "Libre circulation sans visa, marché unique, paix."],
          ["UEMOA", "1994 • Ouagadougou (Burkina Faso)", "Zone monétaire CFA, union douanière et convergence."],
          ["OMVS", "1972 • Dakar (Sénégal)", "Gestion partagée de l'eau, barrages de Diama et Manantali."]
        ]
      }
    }
  ],
  conclusion: "L'engagement du Sénégal pour l'unité africaine est historique : l'article 84 de notre Constitution prévoit expressément que le Sénégal peut céder tout ou partie de sa souveraineté pour réaliser l'unité africaine."
};

// -------------------------------------------------------------------------
// CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME
// -------------------------------------------------------------------------

export const LESSON_6_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-6',
  number: 'LEÇON 6',
  title: 'L’ORGANISATION DU POUVOIR LÉGISLATIF',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le pouvoir législatif au Sénégal est exercé par un parlement monocaméral représenté par l'Assemblée nationale. Les députés sont élus au suffrage universel direct pour un mandat de cinq ans, selon un système combinant le scrutin majoritaire départemental et le scrutin proportionnel national.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME

Leçon 6 : L’organisation du pouvoir législatif

I. Le statut et la composition de l'Assemblée nationale
Le pouvoir législatif au Sénégal est exercé par un parlement monocaméral représenté par l'Assemblée nationale. Les députés sont élus au suffrage universel direct pour un mandat de cinq ans, selon un système combinant le scrutin majoritaire départemental et le scrutin proportionnel national.

II. Les missions fondamentales du pouvoir législatif
1. Le vote de la loi : L'Assemblée nationale examine et vote les projets de loi (déposés par le gouvernement) et les propositions de loi (déposées par les députés). Elle vote également la loi de finances (budget de l'État).
2. Le contrôle de l'action gouvernementale : Les députés contrôlent le travail des ministres à travers des questions orales, des questions écrites, des commissions d'enquête parlementaires et le vote d'une éventuelle motion de censure.

III. Le fonctionnement et les garanties d'indépendance
L'Assemblée est dirigée par un Bureau avec à sa tête le Président de l'Assemblée nationale. Pour garantir leur liberté d'expression et de vote, les députés bénéficient de l'immunité parlementaire, ce qui empêche qu'ils soient poursuivis ou arrêtés pour des opinions émises dans l'exercice de leurs fonctions, sauf en cas de flagrant délit.`,
  sections: [
    {
      title: "I. Le statut et la composition de l'Assemblée nationale",
      content: [
        "Le parlement sénégalais est monocaméral : il est composé d'une chambre unique, l'Assemblée Nationale (165 députés).",
        "Mode d'élection mixte :",
        "• Scrutin majoritaire à un tour dans les départements (dont la diaspora à l'étranger).",
        "• Scrutin proportionnel au plus fort reste sur une liste nationale.",
        "• Application stricte de la loi sur la parité absolue de 2010 : alternance obligatoire homme/femme sur chaque liste déposée."
      ]
    },
    {
      title: 'II. Les missions fondamentales du pouvoir législatif',
      content: [
        "1. Le vote de la loi :",
        "• Les textes examinés sont soit des « projets de loi » (émanant du Premier ministre et du Président), soit des « propositions de loi » (émanant des députés).",
        "• Le vote annuel de la Loi de Finances détermine les recettes (impôts) et les dépenses publiques de la République.",
        "2. Le contrôle rigoureux de l'action du Gouvernement :",
        "• Les questions d'actualité, questions orales et écrites adressées aux ministres.",
        "• Les commissions d'enquête parlementaires pour faire la lumière sur des affaires publiques.",
        "• La motion de censure : moyen par lequel l'Assemblée peut renverser le Gouvernement en cas de désaccord majeur sur sa politique."
      ]
    },
    {
      title: "III. Le fonctionnement et les garanties d'indépendance",
      content: [
        "• Le Bureau de l'Assemblée Nationale : Composé du Président de l'Assemblée, de vice-présidents, de questeurs et de secrétaires élus.",
        "• Les commissions techniques permanentes (Finances, Lois, Éducation, Défense, Affaires étrangères...).",
        "• L'immunité parlementaire : Protège le député contre toute arrestation ou poursuite judiciaire pour les propos tenus à l'hémicycle afin d'assurer l'indépendance absolue de son mandat."
      ]
    }
  ],
  conclusion: "L'Assemblée nationale est le temple de la démocratie représentative au Sénégal. Elle exprime la souveraineté du peuple à travers la confection des lois et la surveillance attentive de l'Exécutif."
};

export const LESSON_7_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-7',
  number: 'LEÇON 7',
  title: 'L’ORGANISATION DU POUVOIR JUDICIAIRE',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le pouvoir judiciaire est indépendant des pouvoirs exécutif et législatif. La justice est rendue au nom du peuple sénégalais sur toute l'étendue du territoire. Elle repose sur des principes clés : l'égalité de tous devant la loi, la gratuité des procédures (les juges étant payés par l'État), le droit à un procès équitable et la présomption d'innocence.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME

Leçon 7 : L’organisation du pouvoir judiciaire

I. Les principes fondamentaux de la justice
Le pouvoir judiciaire est indépendant des pouvoirs exécutif et législatif. La justice est rendue au nom du peuple sénégalais sur toute l'étendue du territoire. Elle repose sur des principes clés : l'égalité de tous devant la loi, la gratuité des procédures (les juges étant payés par l'État), le droit à un procès équitable et la présomption d'innocence.

II. L'architecture judiciaire sénégalaise
Le système judiciaire comporte plusieurs paliers :
Les juridictions de base : Les Tribunaux d'Instance et de Grande Instance (TGI) qui tranchent les litiges du quotidien (civils, commerciaux, correctionnels).
Les Cours d'Appel : Elles réexaminent les affaires déjà jugées en premier ressort lorsque l'une des parties n'est pas satisfaite du verdict.
Les Hautes Juridictions : La Cour Suprême (qui contrôle la légalité des décisions des cours inférieures), le Conseil Constitutionnel (qui juge de la conformité des lois à la Constitution et valide les élections) et la Cour des Comptes (qui contrôle les finances publiques).

III. Le Conseil Supérieur de la Magistrature et l'indépendance
Pour garantir l'impartialité des juges, la Constitution consacre l'inamovibilité des magistrats du siège. Le Conseil Supérieur de la Magistrature gère la carrière, les nominations et la discipline des magistrats.`,
  sections: [
    {
      title: 'I. Les principes cardinaux régissant la justice',
      content: [
        "• L'indépendance de la justice : Les juges ne reçoivent d'ordres d'aucun pouvoir politique dans leurs jugements.",
        "• L'égalité devant la loi : Tout justiciable, riche ou pauvre, puissant ou démuni, est soumis aux mêmes règles.",
        "• La présomption d'innocence : Tout accusé est réputé innocent tant que sa culpabilité n'a pas été légalement établie lors d'un procès équitable.",
        "• La gratuité de la justice : Les justiciables ne rémunèrent pas les juges ; la justice est un service public républicain."
      ]
    },
    {
      title: "II. L'organisation pyramidale des cours et tribunaux",
      content: [
        "1. Juridictions de premier degré (juridictions de base) :",
        "• Tribunaux d'Instance (au niveau des départements) : litiges de moindre gravité, petits délits, état civil.",
        "• Tribunaux de Grande Instance (TGI) : affaires pénales graves (crimes jugés par la chambre criminelle), litiges civils et commerciaux importants.",
        "2. Juridictions de second degré :",
        "• Les Cours d'Appel (Dakar, Saint-Louis, Kaolack, Thiès, Ziguinchor) : rejugent le litige en fait et en droit sur recours d'une partie insatisfaite.",
        "3. Les Hautes Juridictions républicaines :",
        "• La Cour Suprême : juge la conformité au droit des décisions rendues en dernier ressort (juge de la légalité, ne rejuge pas les faits).",
        "• Le Conseil Constitutionnel : contrôle la constitutionnalité des lois et proclame les résultats définitifs des élections présidentielles et législatives.",
        "• La Cour des Comptes : juge les comptes des comptables publics et contrôle la bonne utilisation des deniers de l'État."
      ],
      table: {
        headers: ['Niveau Juridictionnel', 'Institutions', 'Rôle & Compétence'],
        rows: [
          ["1er Degré (Base)", "Tribunaux d'Instance & TGI", "Tranchent les litiges civils, délits et crimes en 1ère instance."],
          ["2ème Degré", "Cours d'Appel", "Réexaminent totalement l'affaire si appel interjeté."],
          ["Sommet Judiciaire", "Cour Suprême", "Contrôle la stricte conformité aux lois des cours inférieures."],
          ["Contrôle Spécialisé", "Conseil Constitutionnel & Cour des Comptes", "Conformité constitutionnelle, élections et gestion des fonds publics."]
        ]
      }
    },
    {
      title: "III. Le Conseil Supérieur de la Magistrature et l'inamovibilité",
      content: [
        "• Règle de l'inamovibilité : Les magistrats du siège ne peuvent être révoqués, suspendus ou déplacés sans leur consentement ou sans faute disciplinaire grave.",
        "• Rôle du Conseil Supérieur de la Magistrature : Organe constitutionnel garant de la gestion des carrières, nominations et indépendance statutaire des magistrats."
      ]
    }
  ],
  conclusion: "Une justice indépendante et impartiale est le garant ultime de la paix sociale et du respect des droits de l'homme dans un État de droit."
};

export const LESSON_8_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-8',
  number: 'LEÇON 8',
  title: 'L’ÉTAT DE DROIT ET LA BONNE GOUVERNANCE',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Un État de droit est un système institutionnel dans lequel la puissance publique est soumise au droit. Les gouvernants, tout comme les citoyens, doivent respecter les lois en vigueur. Il implique l'existence d'une hiérarchie des normes juridiques (la Constitution étant au sommet) et la possibilité de contester un acte de l'administration devant les tribunaux.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME

Leçon 8 : L’État de droit et la bonne gouvernance

I. Concept de l'État de droit
Un État de droit est un système institutionnel dans lequel la puissance publique est soumise au droit. Les gouvernants, tout comme les citoyens, doivent respecter les lois en vigueur. Il implique l'existence d'une hiérarchie des normes juridiques (la Constitution étant au sommet) et la possibilité de contester un acte de l'administration devant les tribunaux.

II. Les principes fondamentaux de la bonne gouvernance
La bonne gouvernance est la gestion responsable, transparente et efficace des ressources publiques et des affaires de l'État. Elle se caractérise par :
• La transparence et l'obligation de rendre des comptes.
• L'efficacité de l'administration publique au service des citoyens.
• La lutte active contre la corruption, le népotisme et le détournement de deniers publics.

III. Les organes de contrôle et de régulation au Sénégal
Pour matérialiser ces principes, le Sénégal s'est doté d'institutions spécialisées : l'OFNAC (Office national de lutte contre la Fraude et la Corruption), la CENTIF (Cellule Nationale de Traitement des Informations Financières) et la Cour des Comptes.`,
  sections: [
    {
      title: "I. Les fondements juridiques de l'État de droit",
      content: [
        "Dans l'État de droit, nul n'est au-dessus de la loi : ni le Président de la République, ni les ministres, ni les hauts dignitaires.",
        "Critères indispensables :",
        "• Séparation nette des trois pouvoirs (exécutif, législatif, judiciaire).",
        "• Soumission de l'administration publique au contrôle de la légalité.",
        "• Respect effectif des droits humains et des libertés fondamentales garantis par des juges indépendants."
      ]
    },
    {
      title: 'II. Les piliers de la bonne gouvernance républicaine',
      content: [
        "• Transparence budgétaire et obligation de rendre des comptes (redevabilité) envers le peuple souverain.",
        "• Intégrité morale des gestionnaires publics et dénonciation des conflits d'intérêts.",
        "• Déclaration obligatoire de patrimoine pour les hautes autorités de l'État lors de leur prise de fonction et à leur départ.",
        "• Sanction impartiale de la corruption, de la concussion et du gaspillage des deniers publics."
      ]
    },
    {
      title: 'III. Les institutions de contrôle et de régulation au Sénégal',
      content: [
        "• L'OFNAC (Office National de Lutte contre la Fraude et la Corruption) : Reçoit les plaintes des citoyens, diligente des enquêtes et recueille les déclarations de patrimoine des gestionnaires de fonds publics.",
        "• La CENTIF (Cellule Nationale de Traitement des Informations Financières) : Lutte contre le blanchiment de capitaux et le financement occulte ou terroriste.",
        "• La Cour des Comptes et l'IGE (Inspection Générale d'État) : Audits exhaustifs des ministères, agences nationales et sociétés d'État pour débusquer les fautes de gestion."
      ],
      table: {
        headers: ['Organe de Contrôle', 'Nature Juridique', 'Mission Principale'],
        rows: [
          ["OFNAC", "Autorité administrative indépendante", "Prévention et répression de la fraude et corruption."],
          ["CENTIF", "Cellule de renseignement financier", "Lutte contre le blanchiment d'argent et les flux illicites."],
          ["Cour des Comptes", "Haute juridiction financière", "Contrôle de la régularité des dépenses et comptes publics."],
          ["IGE", "Corps de contrôle supérieur d'État", "Vérification administrative et managériale sous l'autorité du Président."]
        ]
      }
    }
  ],
  conclusion: "L'État de droit et la bonne gouvernance sont les deux piliers indispensables pour attirer les investissements, éradiquer la pauvreté et garantir le développement équitable du Sénégal."
};

export const LESSON_9_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-9',
  number: 'LEÇON 9',
  title: 'LES DROITS DE L’HOMME',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Les Droits de l'Homme sont des prérogatives inhérentes à la nature humaine, universelles, inaliénables et sacrées. Ils se sont construits progressivement à travers l'histoire pour protéger l'individu contre l'arbitraire du pouvoir.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME

Leçon 9 : Les Droits de l’Homme

I. Évolution historique et philosophique
Les Droits de l'Homme sont des prérogatives inhérentes à la nature humaine, universelles, inaliénables et sacrées. Ils se sont construits progressivement à travers l'histoire pour protéger l'individu contre l'arbitraire du pouvoir.

II. Analyse des textes fondamentaux
1. La Déclaration des Droits de l'Homme et du Citoyen (1789) : Texte fondateur de la Révolution française, il proclame la liberté et l'égalité des droits des citoyens dès la naissance.
2. La Déclaration Universelle des Droits de l'Homme (DUDH - 1948) : Adoptée par l'ONU au lendemain de la Seconde Guerre mondiale, elle pose le socle des droits civils, politiques, économiques et culturels applicables à tous les êtres humains.
3. La Charte Africaine des Droits de l'Homme et des Peuples (CADHP - 1981) : Elle intègre les spécificités culturelles africaines en liant les droits individuels aux devoirs envers la famille et la communauté, et en insistant sur le droit des peuples à disposer d'eux-mêmes.

III. Les mécanismes de protection et de promotion
La protection est assurée au niveau national par les tribunaux et le Comité Sénégalais des Droits de l'Homme (CSDH), et au niveau international par les agences de l'ONU et des ONG telles qu'Amnesty International.`,
  sections: [
    {
      title: 'I. Évolution historique et trois générations de droits',
      content: [
        "• 1ère génération (Droits civils et politiques) : Droit à la vie, liberté d'opinion, liberté de circulation, droit de vote (issus des révolutions du XVIIIe siècle).",
        "• 2ème génération (Droits économiques et sociaux) : Droit au travail, droit à la santé, à l'éducation et à la grève (issus des luttes ouvrières du XIXe siècle).",
        "• 3ème génération (Droits de solidarité) : Droit à la paix, au développement et à un environnement sain (affirmés au XXe siècle)."
      ]
    },
    {
      title: 'II. Analyse des trois textes internationaux et régionaux majeurs',
      content: [
        "1. Déclaration de 1789 : Article 1er : « Les hommes naissent et demeurent libres et égaux en droits ».",
        "2. DUDH de 1948 (Paris, ONU) : 30 articles universels protégeant l'intégrité de la personne contre la torture, l'esclavage et la discrimination.",
        "3. Charte de Banjul (CADHP 1981) : Spécificité africaine remarquable combinant droits individuels, respect des aînés, devoirs envers la communauté et droit des peuples au développement."
      ],
      table: {
        headers: ['Texte Fondateur', 'Date & Cadre', 'Apport Spécifique'],
        rows: [
          ["DDHC", "1789 • Révolution française", "Proclamation universelle de l'égalité et de la liberté naturelle."],
          ["DUDH", "1948 • Assemblée générale ONU", "Socle universel des droits civils, économiques et culturels."],
          ["CADHP", "1981 • OUA / Banjul", "Union des droits et devoirs, préservation des valeurs de solidarité africaine."]
        ]
      }
    },
    {
      title: 'III. Mécanismes de surveillance et de défense',
      content: [
        "• Au Sénégal : Le Comité Sénégalais des Droits de l'Homme (CSDH), les tribunaux républicains et la Raddho (Rencontre Africaine pour la Défense des Droits de l'Homme).",
        "• À l'échelle internationale : Le Conseil des Droits de l'Homme de l'ONU (Genève), la Cour Africaine des Droits de l'Homme et des Peuples (Arusha) et les grandes ONG mondiales (Amnesty International, Human Rights Watch)."
      ]
    }
  ],
  conclusion: "Défendre les droits de l'homme, c'est préserver la paix et l'humanité en chacun de nous. Nul ne peut être libre tant qu'un seul être humain subit l'injustice ou l'oppression."
};

export const LESSON_10_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-10',
  number: 'LEÇON 10',
  title: 'LES DROITS DE LA FEMME',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Historiquement, les pesanteurs sociales, les traditions mal interprétées et le manque d'accès à l'instruction ont maintenu les femmes dans une situation de vulnérabilité et de dépendance. La reconnaissance de leurs droits est un enjeu de justice sociale et de développement économique.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME

Leçon 10 : Les droits de la femme

I. Le contexte socio-culturel et les inégalités de genre
Historiquement, les pesanteurs sociales, les traditions mal interprétées et le manque d'accès à l'instruction ont maintenu les femmes dans une situation de vulnérabilité et de dépendance. La reconnaissance de leurs droits est un enjeu de justice sociale et de développement économique.

II. Les instruments juridiques de protection
Au niveau international, le Sénégal a ratifié la CEDEF (Convention sur l'élimination de toutes les formes de discrimination à l'égard des femmes) et le Protocole de Maputo en Afrique. La Constitution sénégalaise proclame l'égalité des citoyens devant la loi sans distinction de sexe, garantissant aux femmes le droit d'accès à la propriété foncière et à un salaire égal.

III. La loi sur la parité au Sénégal
Adoptée le 14 mai 2010, la loi instituant la parité absolue homme-femme oblige toutes les listes de candidatures pour les institutions totalement ou partiellement électives (Assemblée nationale, conseils municipaux, conseils départementaux) à comporter alternativement des candidats des deux sexes, sous peine de rejet de la liste. C'est une avancée majeure pour la représentativité politique des femmes.`,
  sections: [
    {
      title: 'I. Le contexte socio-culturel et les discriminations persistantes',
      content: [
        "• Pesanteurs traditionnelles : Mariages précoces ou forcés, violences basées sur le genre (VBG), surcharge des travaux domestiques non rémunérés.",
        "• Obstacles économiques : Difficulté d'accès au crédit bancaire, limitation coutumière de l'accès à la propriété de la terre en milieu rural.",
        "• L'autonomisation des femmes est le moteur du développement : éduquer une fille, c'est éduquer une nation entière."
      ]
    },
    {
      title: 'II. Le cadre juridique international et constitutionnel',
      content: [
        "• La CEDEF (1979) : Traité fondamental interdisant toute distinction, exclusion ou restriction fondée sur le sexe.",
        "• Le Protocole de Maputo (2003) : Protocole panafricain garantissant les droits politiques, économiques et reproductifs des femmes en Afrique.",
        "• La Constitution du Sénégal (article 7 et article 25) : Égalité solennelle en droits, droit à un salaire égal pour un travail de valeur égale, criminalisation du viol et des violences faites aux femmes."
      ]
    },
    {
      title: 'III. La loi historique sur la parité absolue de 2010',
      content: [
        "• Loi n° 2010-11 du 28 mai 2010 : Instaure la parité absolue hommes-femmes dans toutes les institutions totalement ou partiellement électives.",
        "• Mécanisme contraignant du « zippage » : Les listes de candidatures doivent alterner strictement homme/femme/homme ou femme/homme/femme ; toute liste ne respectant pas cette règle est purement et simplement rejetée par la direction générale des élections.",
        "• Résultat spectaculaire : Le Sénégal s'est hissé parmi les pays au monde ayant le plus fort taux de femmes parlementaires (plus de 40% de députées à l'Assemblée nationale)."
      ],
      table: {
        headers: ['Niveau Juridique', 'Instrument', 'Règle / Avancée Majeure'],
        rows: [
          ["International", "CEDEF (ONU - 1979)", "Élimination de toutes les discriminations à l'égard des femmes."],
          ["Africain", "Protocole de Maputo (2003)", "Protection des droits fondamentaux des femmes africaines."],
          ["Constitutionnel", "Constitution sénégalaise", "Égalité hommes-femmes, droit au salaire égal et accès foncier."],
          ["Législatif National", "Loi sur la parité (2010)", "Parité absolue alternée sur toutes les listes électorales."]
        ]
      }
    }
  ],
  conclusion: "La pleine émancipation de la femme sénégalaise n'est pas seulement un impératif de justice morale, c'est la condition sine qua non de l'essor économique et de l'équilibre démocratique de notre nation."
};

export const LESSON_11_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-11',
  number: 'LEÇON 11',
  title: 'LES DROITS DE L’ENFANT',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "En raison de son manque de maturité physique et intellectuelle, l'enfant a besoin d'une protection spéciale et de soins particuliers, y compris d'une protection juridique appropriée, avant comme après la naissance.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME

Leçon 11 : Les droits de l’enfant

I. Vulnérabilité spécifique de l'enfant
En raison de son manque de maturité physique et intellectuelle, l'enfant a besoin d'une protection spéciale et de soins particuliers, y compris d'une protection juridique appropriée, avant comme après la naissance.

II. Les instruments internationaux de protection
1. La Convention relative aux Droits de l'Enfant (CDE - 1989) : Adoptée par l'ONU, elle repose sur quatre principes fondamentaux : la non-discrimination, l'intérêt supérieur de l'enfant, le droit à la vie, à la survie et au développement, et le respect des opinions de l'enfant.
2. La Charte Africaine des Droits et du Bien-être de l'Enfant (CADBEE) : Elle adapte ces principes aux réalités du continent africain.

III. Les défis de la protection de l'enfance au Sénégal
Le Sénégal fait face à des problématiques majeures : la mendicité forcée de certains enfants talibés, le travail précoce des enfants dans les marchés ou les sites d'orpaillage clandestins, les mariages des enfants et les violences physiques ou sexuelles. L'État et la société civile luttent à travers des programmes de scolarisation obligatoire et des centres de sauvegarde pour mineurs.`,
  sections: [
    {
      title: "I. La vulnérabilité spécifique et définition de l'enfant",
      content: [
        "• Définition juridique : Selon la CDE, est considéré comme enfant tout être humain âgé de moins de dix-huit (18) ans.",
        "• Vulnérabilité biologique et psychologique nécessitant l'intervention protectrice de la famille, de l'école et de l'État.",
        "• L'enfant est titulaire de droits opposables aux adultes et aux pouvoirs publics."
      ]
    },
    {
      title: 'II. Les instruments internationaux de protection de l’enfance',
      content: [
        "1. La Convention relative aux Droits de l'Enfant (CDE de 1989) : Traité international le plus largement ratifié au monde.",
        "Quatre principes piliers fondamentaux :",
        "• 1. La non-discrimination (aucun enfant ne doit souffrir d'inégalité de traitement).",
        "• 2. L'intérêt supérieur de l'enfant (doit guider toute décision judiciaire, administrative ou parentale).",
        "• 3. Le droit à la vie, à la survie et au plein développement physique, mental et moral.",
        "• 4. Le droit de participation et de liberté d'expression (l'avis de l'enfant doit être écouté selon son âge et sa maturité).",
        "2. La Charte Africaine des Droits et du Bien-être de l'Enfant (CADBEE de 1990) :",
        "• Insiste sur la responsabilité de la communauté et protège les enfants contre les pratiques traditionnelles néfastes (mutilations génitales, mariages d'enfants)."
      ],
      table: {
        headers: ['Principe CDE', 'Signification Concrète', 'Mise en Œuvre au Sénégal'],
        rows: [
          ["Non-discrimination", "Mêmes droits pour tous les enfants sans distinction.", "Égalité d'accès aux écoles et structures de santé."],
          ["Intérêt supérieur", "La décision doit toujours privilégier le bien-être de l'enfant.", "Priorité dans les décisions du juge des enfants."],
          ["Survie & Développement", "Vaccination, nutrition saine et scolarité garantie.", "Programmes de santé maternelle et scolarité obligatoire jusqu'à 16 ans."],
          ["Participation", "Droit de s'exprimer et d'être entendu.", "Création de parlements et clubs d'enfants dans les collèges."]
        ]
      }
    },
    {
      title: "III. Les défis majeurs de la protection de l'enfance au Sénégal",
      content: [
        "• Le drame des enfants talibés errants et la mendicité forcée : Nécessité de moderniser les daaras et de punir les réseaux d'exploitation.",
        "• Le travail précoce et dangereux : Présence d'enfants dans les marchés, ateliers de mécanique ou sites d'orpaillage artisanal à Kédougou.",
        "• Les mariages d'enfants et grossesses précoces privant les jeunes filles de leur droit fondamental à poursuivre leurs études.",
        "• Les dispositifs de riposte de l'État : Brigade des mineurs, centres de premier accueil, numéros verts gratuits de signalement (116) et stratégie nationale de protection de l'enfance."
      ]
    }
  ],
  conclusion: "Protéger les enfants, c'est garantir l'avenir de la République. Aucun sacrifice n'est de trop pour assurer à chaque enfant sénégalais un toit, de l'amour, des soins et une éducation de qualité."
};

export const DOSSIER_2_3_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-dossier-2-3',
  number: 'DOSSIER AC 2 & 3',
  title: 'LA CONSTITUTION SÉNÉGALAISE ET LE CODE ÉLECTORAL',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "La Constitution est la Loi Fondamentale qui organise l'État, définit la forme de la République (laïque, démocratique et sociale), fixe la séparation des pouvoirs et garantit les libertés publiques. Le Code électoral, quant à lui, est l'ensemble des règles qui régissent l'organisation des scrutins, l'inscription sur les listes électorales, le déroulement du vote, la transparence du dépouillement et la proclamation des résultats par les instances habilitées (CENA, Conseil Constitutionnel). Ces deux outils sont les piliers de l'expression démocratique au Sénégal.",
  fullText: `COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME — SÉNÉGAL
CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME

Dossier AC 2 & AC 3 : La Constitution sénégalaise et le Code électoral

La Constitution est la Loi Fondamentale qui organise l'État, définit la forme de la République (laïque, démocratique et sociale), fixe la séparation des pouvoirs et garantit les libertés publiques. Le Code électoral, quant à lui, est l'ensemble des règles qui régissent l'organisation des scrutins, l'inscription sur les listes électorales, le déroulement du vote, la transparence du dépouillement et la proclamation des résultats par les instances habilitées (CENA, Conseil Constitutionnel). Ces deux outils sont les piliers de l'expression démocratique au Sénégal.`,
  sections: [
    {
      title: "I. La Constitution sénégalaise : Clé de voûte institutionnelle",
      content: [
        "• Définition : Texte juridique suprême trônant au sommet de la hiérarchie des normes (principe de constitutionnalité).",
        "• Contenu fondamental :",
        "  - La forme de l'État : République laïque, démocratique, indivisible et sociale.",
        "  - La séparation stricte des trois pouvoirs : Exécutif, Législatif et Judiciaire.",
        "  - Le catalogue des droits fondamentaux inaliénables des citoyens.",
        "  - Les clauses d'éternité (Article 103) interdisant toute révision sur la forme républicaine, la laïcité et la limitation des mandats présidentiels à deux consécutifs."
      ]
    },
    {
      title: 'II. Le Code électoral : Instrument technique de la démocratie',
      content: [
        "Le Code électoral régit l'ensemble des opérations électorales pour garantir des scrutins libres, sincères et transparents :",
        "• L'inscription biométrique sur les listes électorales et la délivrance de la carte d'électeur sécurisée.",
        "• Les règles strictes de campagne électorale et l'égal accès des candidats aux médias publics (contrôlé par le CNRA).",
        "• Le déroulement du scrutin : présence d'enveloppes opaques, passage obligatoire par l'isoloir, trempage du doigt dans l'encre indélébile.",
        "• Le dépouillement public dans les bureaux de vote sous le regard des représentants des candidats, des observateurs indépendants et de la société civile."
      ]
    },
    {
      title: 'III. Les instances de contrôle et de proclamation des résultats',
      content: [
        "• La CENA (Commission Électorale Nationale Autonome) : Supervise et contrôle l'ensemble des opérations électorales avec des délégués dans chaque bureau de vote.",
        "• Les Commissions départementales et nationales de recensement des votes : Centralisent et vérifient les procès-verbaux.",
        "• Le Conseil Constitutionnel : Seule juridiction compétente pour examiner les recours électoraux et proclamer les résultats définitifs de l'élection présidentielle et des élections législatives."
      ],
      table: {
        headers: ['Institution Électorale', 'Statut', 'Rôle Clé'],
        rows: [
          ["CENA", "Structure indépendante permanente", "Supervision, contrôle et arbitrage du scrutin."],
          ["Commission Nationale", "Magistrats et représentants de partis", "Recensement provisoire des votes."],
          ["Conseil Constitutionnel", "Haute juridiction constitutionnelle", "Contentieux électoral et proclamation définitive des résultats."]
        ]
      }
    }
  ],
  conclusion: "La Constitution et le Code électoral sont les deux piliers qui assurent la stabilité légendaire et les alternances démocratiques pacifiques du Sénégal. Leur respect scrupuleux par tous est le garant de la paix civile."
};

// -------------------------------------------------------------------------
// EXPORTATION COMPLÈTE DU PROGRAMME OFFICIEL POUR L'APPLICATION
// -------------------------------------------------------------------------

export const COURSES_EDUCATION_CIVIQUE_3EME: ContentData[] = [
  // CHAPITRE I : ENVIRONNEMENT ET PATRIMOINE
  {
    id: 'civique-3eme-lecon-1',
    title: 'LEÇON 1 : LE PATRIMOINE NATUREL : TYPOLOGIE',
    type: 'cours',
    badge: 'Partie 1 • Environnement & Patrimoine',
    description: 'Définition et fondements du patrimoine naturel, typologie des ressources fauniques, floristiques et hydriques du Sénégal, et grands sanctuaires (PNNK, PNOD, Delta du Saloum).',
    lessonData: LESSON_1_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-2',
    title: 'LEÇON 2 : PROTECTION DU PATRIMOINE NATUREL : LES CODES',
    type: 'cours',
    badge: 'Partie 1 • Environnement & Patrimoine',
    description: 'Justification de la protection légale, analyse des codes sectoriels (Environnement, Forestier, Minier, Eau, Hygiène) et rôle citoyen éco-responsable.',
    lessonData: LESSON_2_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-3',
    title: 'LEÇON 3 : LE PATRIMOINE HISTORIQUE ET CULTUREL : TYPOLOGIE, PROTECTION ET STRATÉGIES DE PROMOTION',
    type: 'cours',
    badge: 'Partie 1 • Environnement & Patrimoine',
    description: 'Patrimoine matériel (Gorée, Saint-Louis, mégalithes) et immatériel (Kankourang, Teranga, traditions orales), sauvegarde et valorisation internationale UNESCO.',
    lessonData: LESSON_3_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-dossier-1',
    title: 'DOSSIER AC 1 : LE DÉBOISEMENT ET LA LUTTE CONTRE LES FEUX DE BROUSSE',
    type: 'cours',
    badge: 'Partie 1 • Environnement & Patrimoine',
    description: 'Causes de la déforestation, trafic de bois en Casamance, conséquences désastreuses des feux de brousse et solutions (pare-feux, comités de vigilance villageois).',
    lessonData: DOSSIER_1_CIVIQUE_3EME
  },

  // CHAPITRE II : VIVRE ENSEMBLE
  {
    id: 'civique-3eme-lecon-4',
    title: 'LEÇON 4 : LA CULTURE DE LA PAIX',
    type: 'cours',
    badge: 'Partie 2 • Vivre Ensemble & Intégration',
    description: 'Fondements de la culture de la paix, dialogue socio-culturel et cousinage à plaisanterie (Kal/Déenkkou), concorde interreligieuse et menaces contemporaines.',
    lessonData: LESSON_4_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-5',
    title: 'LEÇON 5 : SOLIDARITÉ ET INTÉGRATION EN AFRIQUE',
    type: 'cours',
    badge: 'Partie 2 • Vivre Ensemble & Intégration',
    description: 'Idéal panafricain, Union Africaine (UA) et ZLECAf, intégration sous-régionale ouest-africaine (CEDEAO, UEMOA, OMVS).',
    lessonData: LESSON_5_CIVIQUE_3EME
  },

  // CHAPITRE III : DÉMOCRATIE, ÉTAT ET DROITS DE L'HOMME
  {
    id: 'civique-3eme-lecon-6',
    title: 'LEÇON 6 : L’ORGANISATION DU POUVOIR LÉGISLATIF',
    type: 'cours',
    badge: "Partie 3 • Démocratie, État & Droits de l'Homme",
    description: "Statut et composition de l'Assemblée nationale (165 députés, parité), vote de la loi et de la loi de finances, contrôle gouvernemental et immunité parlementaire.",
    lessonData: LESSON_6_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-7',
    title: 'LEÇON 7 : L’ORGANISATION DU POUVOIR JUDICIAIRE',
    type: 'cours',
    badge: "Partie 3 • Démocratie, État & Droits de l'Homme",
    description: 'Principes de la justice, juridictions de base (Tribunaux d’Instance, TGI), Cours d’Appel, Hautes Juridictions (Cour Suprême, Conseil Constitutionnel) et Conseil de la Magistrature.',
    lessonData: LESSON_7_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-8',
    title: 'LEÇON 8 : L’ÉTAT DE DROIT ET LA BONNE GOUVERNANCE',
    type: 'cours',
    badge: "Partie 3 • Démocratie, État & Droits de l'Homme",
    description: 'Concept de l’État de droit, principes de transparence et de redevabilité, organes de contrôle spécialisés au Sénégal (OFNAC, CENTIF, Cour des Comptes, IGE).',
    lessonData: LESSON_8_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-9',
    title: 'LEÇON 9 : LES DROITS DE L’HOMME',
    type: 'cours',
    badge: "Partie 3 • Démocratie, État & Droits de l'Homme",
    description: 'Évolution philosophique, 3 générations de droits, analyse des textes clés (DDHC 1789, DUDH 1948, Charte Africaine de Banjul 1981) et mécanismes de protection.',
    lessonData: LESSON_9_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-10',
    title: 'LEÇON 10 : LES DROITS DE LA FEMME',
    type: 'cours',
    badge: "Partie 3 • Démocratie, État & Droits de l'Homme",
    description: 'Inégalités de genre, instruments juridiques de protection (CEDEF, Protocole de Maputo, Constitution) et loi sur la parité absolue de 2010.',
    lessonData: LESSON_10_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-11',
    title: 'LEÇON 11 : LES DROITS DE L’ENFANT',
    type: 'cours',
    badge: "Partie 3 • Démocratie, État & Droits de l'Homme",
    description: 'Vulnérabilité spécifique, 4 principes piliers de la CDE (1989), Charte Africaine (CADBEE) et défis de protection au Sénégal (talibés, travail précoce, mariages d’enfants).',
    lessonData: LESSON_11_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-dossier-2-3',
    title: 'DOSSIER AC 2 & AC 3 : LA CONSTITUTION SÉNÉGALAISE ET LE CODE ÉLECTORAL',
    type: 'cours',
    badge: "Partie 3 • Démocratie, État & Droits de l'Homme",
    description: 'La Constitution comme Loi Fondamentale suprême et le Code électoral garant des scrutins transparents supervisés par la CENA et le Conseil Constitutionnel.',
    lessonData: DOSSIER_2_3_CIVIQUE_3EME
  }
];

export const CIVIQUE_3EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons & dossiers (3ème/BFEM)', count: 13 },
  { id: 'part-1', label: 'Chapitre 1 : Environnement & Patrimoine', count: 4 },
  { id: 'part-2', label: 'Chapitre 2 : Vivre Ensemble & Intégration', count: 2 },
  { id: 'part-3', label: "Chapitre 3 : Démocratie, État & Droits de l'Homme", count: 7 }
];
