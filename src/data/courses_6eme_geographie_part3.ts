import { LessonContent } from './courses';

// =========================================================================
// COURS DE GÉOGRAPHIE - CLASSE DE 6ÈME (PROGRAMME OFFICIEL DU SÉNÉGAL)
// PARTIE 3 : LA GÉOGRAPHIE GÉNÉRALE DU SÉNÉGAL (LEÇONS 9 À 13)
// TEXTE INTÉGRAL SANS AUCUN RÉSUMÉ CONFORME AU DOCUMENT OFFICIEL DU MINISTÈRE
// AVEC INTRODUCTION ET CONCLUSION COMPLÈTES POUR CHAQUE LEÇON
// =========================================================================

export const LESSON_9_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-9',
  number: 'Leçon 9',
  title: "La situation géographique et l'organisation administrative du Sénégal",
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Avec cette neuvième leçon, l'échelle d'étude change définitivement pour embrasser le territoire national dans sa globalité. Pour devenir un citoyen éclairé, l'élève de 6ème doit savoir localiser son pays avec exactitude sur la carte du monde et de l'Afrique, connaître ses frontières terrestres et maritimes, et comprendre comment l'État gère le territoire national à travers son découpage administratif.",
  fullText: `Leçon 9 : La situation géographique et l'organisation administrative du Sénégal

Introduction : Avec cette neuvième leçon, l'échelle d'étude change définitivement pour embrasser le territoire national dans sa globalité. Pour devenir un citoyen éclairé, l'élève de 6ème doit savoir localiser son pays avec exactitude sur la carte du monde et de l'Afrique, connaître ses frontières terrestres et maritimes, et comprendre comment l'État gère le territoire national à travers son découpage administratif.

1. La situation géographique absolue et relative du Sénégal
Le Sénégal se situe à l'extrémité occidentale du continent africain, formant la pointe de l'Afrique de l'Ouest. En coordonnées absolues, il s'étend entre les latitudes 12°8 et 16°41 Nord, et les longitudes 11°21 et 17°32 Ouest. La Pointe des Almadies, située à Dakar, constitue le point le plus à l'ouest de tout le continent africain. Cette position géographique stratégique fait du Sénégal une porte d'entrée maritime majeure pour l'Afrique de l'Ouest et un carrefour des routes aériennes internationales.

2. Les frontières du Sénégal et l'enclave gambienne
Le Sénégal s'étend sur une superficie totale de 196 722 kilomètres carrés. Il possède une large façade maritime de plus de 700 kilomètres ouverte à l'Ouest sur l'Océan Atlantique. Ses frontières terrestres sont partagées avec plusieurs pays voisins : au Nord et au Nord-Est par le fleuve Sénégal qui le sépare de la Mauritanie ; à l'Est par la rivière Falémé qui forme la frontière avec le Mali ; au Sud par la Guinée et la Guinée-Bissau. Le Sénégal présente une particularité géopolitique unique : il entoure presque complètement la République de la Gambie, un État indépendant qui s'enfonce en enclave le long du fleuve Gambie sur plus de 300 kilomètres.

3. L'organisation administrative : les 14 régions du Sénégal
Pour rapprocher l'administration des citoyens et assurer un développement équilibré, le territoire du Sénégal est découpé en plusieurs entités territoriales superposées. La plus grande division est la région administrative, dirigée par un Gouverneur nommé par le Président de la République. Le Sénégal compte aujourd'hui 14 régions administratives. L'élève doit être capable de les lister et de les localiser : Dakar, Thiès, Diourbel, Louga, Saint-Louis, Matam, Kaffrine, Kaolack, Fatick, Tambacounda, Kédougou, Kolda, Sédhiou et Ziguinchor.

4. Les subdivisions inférieures : départements, arrondissements et communes
Chaque région est subdivisée à son tour en départements (au nombre de 46 au total dans le pays), placés sous l'autorité d'un Préfet. Les départements se découpent ensuite en arrondissements, gérés par des Sous-Préfets. Enfin, à la base du système administratif se trouvent les Communes (urbaines ou rurales), qui sont des collectivités territoriales dirigées par des Maires élus directement par la population locale pour gérer les affaires de proximité (écoles, état civil, éclairage public).

Conclusion : En conclusion, la maîtrise de la situation géographique et de la carte administrative du Sénégal est indispensable à tout élève. Elle lui permet de mieux visualiser l'unité nationale à travers la diversité de ses territoires décentralisés.`,
  senegalMap: {
    mode: 'administrative',
    title: 'Situation Géographique et Carte Administrative du Sénégal',
    description:
      'Pointe des Almadies (extrême Ouest), 700 km de façade atlantique, fleuve Sénégal (Mauritanie), rivière Falémé (Mali), Guinée, Guinée-Bissau, enclave gambienne et les 14 régions administratives.'
  },
  sections: [
    {
      title: '1. La situation géographique absolue et relative du Sénégal',
      content: [
        "Le Sénégal se situe à l'extrémité occidentale du continent africain, formant la pointe de l'Afrique de l'Ouest.",
        "En coordonnées absolues, il s'étend entre les latitudes 12°8 et 16°41 Nord, et les longitudes 11°21 et 17°32 Ouest.",
        "La Pointe des Almadies, située à Dakar, constitue le point le plus à l'ouest de tout le continent africain.",
        "Cette position géographique stratégique fait du Sénégal une porte d'entrée maritime majeure pour l'Afrique de l'Ouest et un carrefour des routes aériennes internationales."
      ]
    },
    {
      title: "2. Les frontières du Sénégal et l'enclave gambienne",
      content: [
        "Le Sénégal s'étend sur une superficie totale de 196 722 kilomètres carrés.",
        "Il possède une large façade maritime de plus de 700 kilomètres ouverte à l'Ouest sur l'Océan Atlantique.",
        "Ses frontières terrestres sont partagées avec plusieurs pays voisins :",
        "• Au Nord et au Nord-Est par le fleuve Sénégal qui le sépare de la Mauritanie ;",
        "• À l'Est par la rivière Falémé qui forme la frontière avec le Mali ;",
        "• Au Sud par la Guinée et la Guinée-Bissau.",
        "Le Sénégal présente une particularité géopolitique unique : il entoure presque complètement la République de la Gambie, un État indépendant qui s'enfonce en enclave le long du fleuve Gambie sur plus de 300 kilomètres."
      ]
    },
    {
      title: "3. L'organisation administrative : les 14 régions du Sénégal",
      content: [
        "Pour rapprocher l'administration des citoyens et assurer un développement équilibré, le territoire du Sénégal est découpé en plusieurs entités territoriales superposées.",
        "La plus grande division est la région administrative, dirigée par un Gouverneur nommé par le Président de la République.",
        "Le Sénégal compte aujourd'hui 14 régions administratives. L'élève doit être capable de les lister et de les localiser :",
        "Dakar, Thiès, Diourbel, Louga, Saint-Louis, Matam, Kaffrine, Kaolack, Fatick, Tambacounda, Kédougou, Kolda, Sédhiou et Ziguinchor."
      ]
    },
    {
      title: '4. Les subdivisions inférieures : départements, arrondissements et communes',
      content: [
        "Chaque région est subdivisée à son tour en départements (au nombre de 46 au total dans le pays), placés sous l'autorité d'un Préfet.",
        "Les départements se découpent ensuite en arrondissements, gérés par des Sous-Préfets.",
        "Enfin, à la base du système administratif se trouvent les Communes (urbaines ou rurales), qui sont des collectivités territoriales dirigées par des Maires élus directement par la population locale pour gérer les affaires de proximité (écoles, état civil, éclairage public)."
      ]
    }
  ],
  diagram: {
    title: 'Organisation Territoriale et Frontières du Sénégal',
    root: 'TERRITOIRE DU SÉNÉGAL',
    branches: [
      {
        name: 'Position & Coordonnées',
        subtitle: '196 722 km²',
        items: ['Latitudes : 12°8 à 16°41 N', 'Longitudes : 11°21 à 17°32 O', 'Pointe des Almadies (Extrême Ouest)']
      },
      {
        name: 'Frontières & Enclave',
        subtitle: 'Façade atlantique & voisins',
        items: ['Ouest : 700 km d\'Océan Atlantique', 'Nord : Fleuve Sénégal (Mauritanie)', 'Est : Rivière Falémé (Mali)', 'Sud : Guinée & Guinée-Bissau', 'Enclave : Gambie (> 300 km)']
      },
      {
        name: 'Échelons Administratifs',
        subtitle: 'Décentralisation',
        items: ['14 Régions (Gouverneurs)', '46 Départements (Préfets)', 'Arrondissements (Sous-Préfets)', 'Communes urbaines & rurales (Maires)']
      }
    ]
  },
  conclusion:
    "En conclusion, la maîtrise de la situation géographique et de la carte administrative du Sénégal est indispensable à tout élève. Elle lui permet de mieux visualiser l'unité nationale à travers la diversité de ses territoires décentralisés."
};

export const LESSON_10_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-10',
  number: 'Leçon 10',
  title: 'Le relief et la géologie du Sénégal',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Le paysage du Sénégal semble à première vue plat et uniforme. Pourtant, une étude géomorphologique attentive révèle des nuances structurelles importantes entre le Nord, l'Ouest et le Sud-Est du pays. Cette leçon explore le sous-sol sénégalais (la géologie) et les formes extérieures du terrain (le relief) afin de comprendre l'architecture physique du territoire national.",
  fullText: `Leçon 10 : Le relief et la géologie du Sénégal

Introduction : Le paysage du Sénégal semble à première vue plat et uniforme. Pourtant, une étude géomorphologique attentive révèle des nuances structurelles importantes entre le Nord, l'Ouest et le Sud-Est du pays. Cette leçon explore le sous-sol sénégalais (la géologie) et les formes extérieures du terrain (le relief) afin de comprendre l'architecture physique du territoire national.

1. Les structures géologiques : le Bassin sédimentaire et le Socle ancien
Le sous-sol du Sénégal est divisé en deux grands ensembles géologiques d'âges et de natures totalement différents. Le Bassin sédimentaire occupe plus de 75 % du territoire national (le centre, l'ouest et le nord). Il est formé de roches jeunes (sables, argiles, calcaires) accumulées au fond de la mer qui recouvrait la région il y a des millions d'années. Le Socle ancien, situé au Sud-Est (régions de Kédougou et franges de Tambacounda), est constitué de roches très vieilles, dures et d'origine volcanique ou cristalline (granite, schistes), riches en minerais précieux comme l'or et le fer.

2. Les grandes formes de relief : plaines et bas plateaux
Le relief du Sénégal est globalement bas, l'altitude moyenne ne dépassant guère 50 mètres sur la majeure partie du pays. Les plaines dominent le Nord et le Nord-Ouest (vallée du fleuve Sénégal, zone du Ferlo). Les plateaux bas et tabulaires occupent le centre et l'ouest du pays (plateau de Thiès, plateau du Horlo). Ces plateaux calcaires ou cuirassés par de la latérite offrent des paysages horizontaux entcoupés par des vallées sèches fossiles.

3. Les reliefs d'exception : les Mamelles de Dakar et le massif du Fouta Djallon
Le relief présente deux exceptions majeures à cette horizontalité. À l'extrême Ouest, la presqu'île du Cap-Vert (Dakar) abrite les collines volcaniques des Mamelles, dont la plus haute porte le phare de Dakar à environ 105 mètres d'altitude. Au Sud-Est, le relief s'élève vigoureusement à l'approche des contreforts montagneux du massif du Fouta Djallon (situé principalement en Guinée). C'est la zone des collines de Kédougou, où l'on trouve le point culminant du pays près du village de Nepen Diakha, s'élevant à plus de 581 mètres d'altitude.

4. Conséquences économiques du relief et de la géologie
Cette configuration physique influence fortement l'économie du Sénégal. Les plaines et plateaux sédimentaires facilitent la construction des routes, des voies ferrées et la pratique de la grande agriculture mécanique (arachide, maraîchage). La nature géologique du sous-sol sédimentaire fournit des phosphates (à Taïba et Matam) et du calcaire pour le ciment. À l'inverse, le socle ancien du Sud-Est, bien que plus difficile d'accès en raison de son relief accidenté, constitue le poumon minier du Sénégal grâce à l'exploitation industrielle et artisanale de l'or de Sabodala.

Conclusion : En conclusion, le relief sénégalais, bien que majoritairement plan, possède une diversité géologique cachée qui détermine la répartition des ressources minières et agricoles du pays.`,
  senegalMap: {
    mode: 'relief',
    title: 'Relief et Géologie du Sénégal',
    description:
      'Plaines et bas plateaux sédimentaires (75% du territoire), socle ancien cristallin et minier du Sud-Est, collines volcaniques des Mamelles (105 m) et sommet national à Nepen Diakha (581 m).'
  },
  sections: [
    {
      title: '1. Les structures géologiques : le Bassin sédimentaire et le Socle ancien',
      content: [
        "Le sous-sol du Sénégal est divisé en deux grands ensembles géologiques d'âges et de natures totalement différents :",
        "• Le Bassin sédimentaire : occupe plus de 75 % du territoire national (le centre, l'ouest et le nord). Il est formé de roches jeunes (sables, argiles, calcaires) accumulées au fond de la mer qui recouvrait la région il y a des millions d'années.",
        "• Le Socle ancien : situé au Sud-Est (régions de Kédougou et franges de Tambacounda), est constitué de roches très vieilles, dures et d'origine volcanique ou cristalline (granite, schistes), riches en minerais précieux comme l'or et le fer."
      ]
    },
    {
      title: '2. Les grandes formes de relief : plaines et bas plateaux',
      content: [
        "Le relief du Sénégal est globalement bas, l'altitude moyenne ne dépassant guère 50 mètres sur la majeure partie du pays.",
        "Les plaines dominent le Nord et le Nord-Ouest (vallée du fleuve Sénégal, zone du Ferlo).",
        "Les plateaux bas et tabulaires occupent le centre et l'ouest du pays (plateau de Thiès, plateau du Horlo).",
        "Ces plateaux calcaires ou cuirassés par de la latérite offrent des paysages horizontaux entcoupés par des vallées sèches fossiles."
      ]
    },
    {
      title: '3. Les reliefs d\'exception : les Mamelles de Dakar et le massif du Fouta Djallon',
      content: [
        "Le relief présente deux exceptions majeures à cette horizontalité :",
        "• À l'extrême Ouest : la presqu'île du Cap-Vert (Dakar) abrite les collines volcaniques des Mamelles, dont la plus haute porte le phare de Dakar à environ 105 mètres d'altitude.",
        "• Au Sud-Est : le relief s'élève vigoureusement à l'approche des contreforts montagneux du massif du Fouta Djallon (situé principalement en Guinée). C'est la zone des collines de Kédougou, où l'on trouve le point culminant du pays près du village de Nepen Diakha, s'élevant à plus de 581 mètres d'altitude."
      ]
    },
    {
      title: '4. Conséquences économiques du relief et de la géologie',
      content: [
        "Cette configuration physique influence fortement l'économie du Sénégal :",
        "• Les plaines et plateaux sédimentaires facilitent la construction des routes, des voies ferrées et la pratique de la grande agriculture mécanique (arachide, maraîchage).",
        "• La nature géologique du sous-sol sédimentaire fournit des phosphates (à Taïba et Matam) et du calcaire pour le ciment.",
        "• À l'inverse, le socle ancien du Sud-Est, bien que plus difficile d'accès en raison de son relief accidenté, constitue le poumon minier du Sénégal grâce à l'exploitation industrielle et artisanale de l'or de Sabodala."
      ]
    }
  ],
  diagram: {
    title: 'Relief et Géologie du Sénégal',
    root: 'RELIEF ET GÉOLOGIE DU SÉNÉGAL',
    branches: [
      {
        name: 'Deux Ensembles Géologiques',
        subtitle: 'Sous-sol national',
        items: ['Bassin sédimentaire (> 75% du pays, roches jeunes)', 'Socle ancien Sud-Est (Kédougou, roches dures)', 'Richesses minières : phosphates, or et fer']
      },
      {
        name: 'Formes Dominantes',
        subtitle: 'Altitude moyenne < 50 m',
        items: ['Plaines du Nord et du Ferlo', 'Plateaux de Thiès et du Horlo', 'Cuirasses latéritiques & vallées fossiles']
      },
      {
        name: 'Reliefs d\'Exception & Économie',
        subtitle: 'Points hauts & ressources',
        items: ['Collines des Mamelles (Dakar, 105 m)', 'Nepen Diakha (Kédougou, 581 m)', 'Agriculture mécanique & mines d\'or de Sabodala']
      }
    ]
  },
  conclusion:
    "En conclusion, le relief sénégalais, bien que majoritairement plan, possède une diversité géologique cachée qui détermine la répartition des ressources minières et agricoles du pays."
};

export const LESSON_11_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-11',
  number: 'Leçon 11',
  title: 'Le climat et les zones de végétation du Sénégal',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Le Sénégal est situé entièrement dans la zone intertropicale, ce qui lui confère un climat chaud toute l'année. Cependant, en se déplaçant du Nord vers le Sud du pays, on observe une augmentation spectaculaire des pluies qui transforme radicalement les paysages végétaux. Cette leçon analyse les mécanismes climatiques nationaux et décrit les grandes zones de végétation qui en découlent.",
  fullText: `Leçon 11 : Le climat et les zones de végétation du Sénégal

Introduction : Le Sénégal est situé entièrement dans la zone intertropicale, ce qui lui confère un climat chaud toute l'année. Cependant, en se déplaçant du Nord vers le Sud du pays, on observe une augmentation spectaculaire des pluies qui transforme radicalement les paysages végétaux. Cette leçon analyse les mécanismes climatiques nationaux et décrit les grandes zones de végétation qui en découlent.

1. Les facteurs du climat sénégalais : masses d'air et vents
Le climat du Sénégal est dicté par le déplacement de trois grands vents ou masses d'air qui alternent au cours de l'année. L'alizé maritime, un vent frais et humide en provenance de l'Océan Atlantique, souffle en saison sèche sur la bande côtière et adoucit les températures de Dakar à Saint-Louis. L'harmattan, un vent chaud, sec et chargé de poussière du désert, souffle de l'Est en saison sèche sur l'intérieur du pays, provoquant de fortes chaleurs diurnes. La mousson, un vent chaud et saturé d'humidité venant du Sud-Sud-Ouest, apporte les pluies (l'hivernage) entre juin et octobre.

2. Les nuances climatiques : du domaine sahélien au domaine soudano-guinéen
On distingue trois grands domaines climatiques selon la quantité totale de pluie reçue par an. Le climat sahélien, au Nord (de Podor à Matam), reçoit moins de 400 mm de pluie par an, avec une saison sèche qui dure 9 à 10 mois. Le climat soudanien, au Centre (Bassin arachidier, Tambacounda), reçoit entre 400 mm et 900 mm de pluie, offrant un hivernage plus marqué. Le climat sous-guinéen ou guinéen, au Sud (Ziguinchor, Kolda, Sédhiou), reçoit plus de 1 000 mm de pluie par an, la saison des pluies y étant longue, intense et régulière.

3. La végétation du Nord et du Centre : la steppe et la savane
La végétation s'adapte strictement à cette répartition des pluies. Dans le domaine sahélien au Nord, la rareté de l'eau donne naissance à la steppe, un tapis d'herbes courtes et discontinues parsemé d'arbres épineux (acacias à gomme, baobabs). Dans le domaine soudanien au Centre, les pluies plus abondantes permettent le développement de la savane arborée ou boisée. C'est le domaine des grands arbres comme le baobab, le néré, le khaya (caïlcédrat) et des hautes herbes qui jaunissent dès la fin des pluies.

4. La végétation du Sud : la forêt dense et la mangrove
Dans le domaine guinéen en Casamance, la végétation devient luxuriante. On y trouve la forêt tropicale semi-caducifoliée, caractérisée par des arbres géants (le fromager, le rônier, le teck) dont les feuillages forment une voûte ombragée. Le long des bras de mer et des estuaires de la Casamance et du Sine-Saloum, là où l'eau douce des fleuves rencontre l'eau salée de l'océan, se développe un écosystème forestier unique et fragile : la mangrove, constituée de palétuviers dont les racines échasses s'enfoncent dans la vase hydrographique.

Conclusion : En conclusion, le climat et la végétation du Sénégal dessinent une transition écologique progressive du Nord aride vers le Sud forestier. Préserver ces écosystèmes contre les changements climatiques est un impératif national.`,
  senegalMap: {
    mode: 'climat',
    title: 'Climats, Vents et Végétation du Sénégal',
    description:
      'Alizé maritime, Harmattan et Mousson. Les 3 domaines : Sahélien (< 400 mm, steppe), Soudanien (400-900 mm, savane) et Guinéen (> 1 000 mm, forêt dense et mangrove).'
  },
  sections: [
    {
      title: "1. Les facteurs du climat sénégalais : masses d'air et vents",
      content: [
        "Le climat du Sénégal est dicté par le déplacement de trois grands vents ou masses d'air qui alternent au cours de l'année :",
        "• L'alizé maritime : un vent frais et humide en provenance de l'Océan Atlantique, souffle en saison sèche sur la bande côtière et adoucit les températures de Dakar à Saint-Louis.",
        "• L'harmattan : un vent chaud, sec et chargé de poussière du désert, souffle de l'Est en saison sèche sur l'intérieur du pays, provoquant de fortes chaleurs diurnes.",
        "• La mousson : un vent chaud et saturé d'humidité venant du Sud-Sud-Ouest, apporte les pluies (l'hivernage) entre juin et octobre."
      ]
    },
    {
      title: '2. Les nuances climatiques : du domaine sahélien au domaine soudano-guinéen',
      content: [
        "On distingue trois grands domaines climatiques selon la quantité totale de pluie reçue par an :",
        "• Le climat sahélien, au Nord (de Podor à Matam) : reçoit moins de 400 mm de pluie par an, avec une saison sèche qui dure 9 à 10 mois.",
        "• Le climat soudanien, au Centre (Bassin arachidier, Tambacounda) : reçoit entre 400 mm et 900 mm de pluie, offrant un hivernage plus marqué.",
        "• Le climat sous-guinéen ou guinéen, au Sud (Ziguinchor, Kolda, Sédhiou) : reçoit plus de 1 000 mm de pluie par an, la saison des pluies y étant longue, intense et régulière."
      ]
    },
    {
      title: '3. La végétation du Nord et du Centre : la steppe et la savane',
      content: [
        "La végétation s'adapte strictement à cette répartition des pluies :",
        "• Dans le domaine sahélien au Nord : la rareté de l'eau donne naissance à la steppe, un tapis d'herbes courtes et discontinues parsemé d'arbres épineux (acacias à gomme, baobabs).",
        "• Dans le domaine soudanien au Centre : les pluies plus abondantes permettent le développement de la savane arborée ou boisée. C'est le domaine des grands arbres comme le baobab, le néré, le khaya (caïlcédrat) et des hautes herbes qui jaunissent dès la fin des pluies."
      ]
    },
    {
      title: '4. La végétation du Sud : la forêt dense et la mangrove',
      content: [
        "Dans le domaine guinéen en Casamance, la végétation devient luxuriante :",
        "• On y trouve la forêt tropicale semi-caducifoliée, caractérisée par des arbres géants (le fromager, le rônier, le teck) dont les feuillages forment une voûte ombragée.",
        "• Le long des bras de mer et des estuaires de la Casamance et du Sine-Saloum, là où l'eau douce des fleuves rencontre l'eau salée de l'océan, se développe un écosystème forestier unique et fragile : la mangrove, constituée de palétuviers dont les racines échasses s'enfoncent dans la vase hydrographique."
      ]
    }
  ],
  diagram: {
    title: 'Climat et Zones Végétales du Sénégal',
    root: 'CLIMAT ET VÉGÉTATION',
    branches: [
      {
        name: 'Masses d\'Air (3 Vents)',
        subtitle: 'Mécanismes atmosphériques',
        items: ['Alizé maritime (côte fraîche)', 'Harmattan (chaud, sec de l\'Est)', 'Mousson (Sud-Sud-Ouest, pluies)']
      },
      {
        name: 'Nord & Centre',
        subtitle: 'Sahélien & Soudanien',
        items: ['Sahélien (< 400 mm) : Steppe et acacias', 'Soudanien (400-900 mm) : Savane arborée', 'Baobabs, néré et caïlcédrats']
      },
      {
        name: 'Sud (Guinéen)',
        subtitle: '> 1 000 mm / an',
        items: ['Casamance, Kolda, Sédhiou', 'Forêt dense : Fromagers et tecks', 'Mangroves à palétuviers dans les estuaires']
      }
    ]
  },
  conclusion:
    "En conclusion, le climat et la végétation du Sénégal dessinent une transition écologique progressive du Nord aride vers le Sud forestier. Préserver ces écosystèmes contre les changements climatiques est un impératif national."
};

export const LESSON_12_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-12',
  number: 'Leçon 12',
  title: 'Le réseau hydrographique du Sénégal : les fleuves et les rivières',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "L'eau est la sève de l'Afrique sahélienne. Le Sénégal a la chance d'être traversé par plusieurs grands cours d'eau qui jouent un rôle capital dans l'agriculture, l'approvisionnement en eau potable et l'histoire du pays. Cette douzième leçon étudie l'anatomie hydrographique nationale en analysant les caractéristiques, le régime et l'importance économique des grands fleuves sénégalais.",
  fullText: `Leçon 12 : Le réseau hydrographique du Sénégal : les fleuves et les rivières

Introduction : L'eau est la sève de l'Afrique sahélienne. Le Sénégal a la chance d'être traversé par plusieurs grands cours d'eau qui jouent un rôle capital dans l'agriculture, l'approvisionnement en eau potable et l'histoire du pays. Cette douzième leçon étudie l'anatomie hydrographique nationale en analysant les caractéristiques, le régime et l'importance économique des grands fleuves sénégalais.

1. Le Fleuve Sénégal, artère vitale du Nord
Le fleuve Sénégal est le plus long et le plus important du pays, mesurant environ 1 790 kilomètres au total (dont la moitié borde le territoire sénégalais). Il prend sa source dans les montagnes du Fouta Djallon en Guinée (sous les noms de Bafing et Bakoye) avant de s'écouler vers le Nord-Ouest pour former la frontière naturelle entre le Sénégal et la Mauritanie. Il se jette dans l'Océan Atlantique à Saint-Louis par une embouchure mobile. Son régime est tropical de transition, marqué par une crue spectaculaire en septembre-octobre et un étiage très bas en mai-juin. Deux grands barrages internationaux (Diama et Manantali) régulent ses eaux pour permettre l'agriculture irriguée du riz et produire de l'électricité.

2. Le Fleuve Gambie et ses affluents de l'Est
Le fleuve Gambie prend également sa source dans le château d'eau du Fouta Djallon en Guinée. Il entre au Sénégal par le Sud-Est, traverse le Parc National du Niokolo-Koba où il reçoit plusieurs affluents majeurs comme la nappe de la Gambie et le fleuve Koulountou. Il poursuit sa course vers l'Ouest en entrant sur le territoire de la République de la Gambie avant de se jeter dans l'Océan Atlantique. C'est un fleuve au débit puissant et régulier, dont les berges abritent une faune riche et des forêts galeries épaisses.

3. Les cours d'eau du Sud et du Centre : la Casamance et le Saloum
Le fleuve Casamance est un cours d'eau typiquement sénégalais qui prend sa source près de Kolda et s'écoule entièrement dans la région méridionale du pays. C'est un fleuve maritime à faible pente, ce qui permet à l'eau de mer salée de remonter très loin à l'intérieur des terres en saison sèche, créant un estuaire géant. Le Saloum (et son affluent le Sine) est en réalité un bras de mer ou un « fleuve inverse » envahi par l'océan, situé dans la région de Kaolack et Fatick. Son eau est extrêmement salée, ce qui limite l'agriculture mais favorise l'exploitation industrielle du sel (à Kaolack).

4. L'importance économique et humaine de l'hydrographie
Les cours d'eau sont au cœur du développement du Sénégal. Ils permettent la pratique de la pêche continentale, fournissent l'eau douce indispensable à l'irrigation des cultures (le riz en vallée du fleuve et en Casamance, la canne à sucre à Richard-Toll), et constituent des voies de transport pour les marchandises et les populations. De plus, les fleuves alimentent en eau potable les grandes villes sénégalaises via des installations de pompage majeures (comme l'usine de Keur Momar Sarr sur le lac de Guiers, qui est une réserve d'eau douce alimentée par le fleuve Sénégal).

Conclusion : En conclusion, le réseau hydrographique du Sénégal est d'une richesse inestimable. Une gestion solidaire et écologique de ces eaux, notamment à travers des organisations régionales comme l'OMVS et l'OMVG, est la clé de la sécurité alimentaire du pays.`,
  senegalMap: {
    mode: 'hydrographie',
    title: 'Réseau Hydrographique du Sénégal',
    description:
      'Le fleuve Sénégal (1 790 km, barrages de Diama et Manantali, Lac de Guiers), le fleuve Gambie (Niokolo-Koba), le fleuve Casamance (100% sénégalais) et le fleuve inverse du Saloum (sel de Kaolack).'
  },
  sections: [
    {
      title: '1. Le Fleuve Sénégal, artère vitale du Nord',
      content: [
        "Le fleuve Sénégal est le plus long et le plus important du pays, mesurant environ 1 790 kilomètres au total (dont la moitié borde le territoire sénégalais).",
        "Il prend sa source dans les montagnes du Fouta Djallon en Guinée (sous les noms de Bafing et Bakoye) avant de s'écouler vers le Nord-Ouest pour former la frontière naturelle entre le Sénégal et la Mauritanie.",
        "Il se jette dans l'Océan Atlantique à Saint-Louis par une embouchure mobile.",
        "Son régime est tropical de transition, marqué par une crue spectaculaire en septembre-octobre et un étiage très bas en mai-juin.",
        "Deux grands barrages internationaux (Diama et Manantali) régulent ses eaux pour permettre l'agriculture irriguée du riz et produire de l'électricité."
      ]
    },
    {
      title: "2. Le Fleuve Gambie et ses affluents de l'Est",
      content: [
        "Le fleuve Gambie prend également sa source dans le château d'eau du Fouta Djallon en Guinée.",
        "Il entre au Sénégal par le Sud-Est, traverse le Parc National du Niokolo-Koba où il reçoit plusieurs affluents majeurs comme la nappe de la Gambie et le fleuve Koulountou.",
        "Il poursuit sa course vers l'Ouest en entrant sur le territoire de la République de la Gambie avant de se jeter dans l'Océan Atlantique.",
        "C'est un fleuve au débit puissant et régulier, dont les berges abritent une faune riche et des forêts galeries épaisses."
      ]
    },
    {
      title: '3. Les cours d\'eau du Sud et du Centre : la Casamance et le Saloum',
      content: [
        "Le fleuve Casamance est un cours d'eau typiquement sénégalais qui prend sa source près de Kolda et s'écoule entièrement dans la région méridionale du pays.",
        "C'est un fleuve maritime à faible pente, ce qui permet à l'eau de mer salée de remonter très loin à l'intérieur des terres en saison sèche, créant un estuaire géant.",
        "Le Saloum (et son affluent le Sine) est en réalité un bras de mer ou un « fleuve inverse » envahi par l'océan, situé dans la région de Kaolack et Fatick.",
        "Son eau est extrêmement salée, ce qui limite l'agriculture mais favorise l'exploitation industrielle du sel (à Kaolack)."
      ]
    },
    {
      title: '4. L\'importance économique et humaine de l\'hydrographie',
      content: [
        "Les cours d'eau sont au cœur du développement du Sénégal :",
        "• Ils permettent la pratique de la pêche continentale ;",
        "• Ils fournissent l'eau douce indispensable à l'irrigation des cultures (le riz en vallée du fleuve et en Casamance, la canne à sucre à Richard-Toll) ;",
        "• Ils constituent des voies de transport pour les marchandises et les populations ;",
        "• De plus, les fleuves alimentent en eau potable les grandes villes sénégalaises via des installations de pompage majeures (comme l'usine de Keur Momar Sarr sur le lac de Guiers, qui est une réserve d'eau douce alimentée par le fleuve Sénégal)."
      ]
    }
  ],
  diagram: {
    title: 'Réseau Hydrographique et Rôle Économique',
    root: 'HYDROGRAPHIE DU SÉNÉGAL',
    branches: [
      {
        name: 'Fleuve Sénégal (1 790 km)',
        subtitle: 'Artère vitale du Nord',
        items: ['Source au Fouta Djallon (Guinée)', 'Barrages Diama (anti-sel) & Manantali', 'Lac de Guiers & usine de Keur Momar Sarr']
      },
      {
        name: 'Fleuve Gambie & Affluents',
        subtitle: 'Sud-Est et Niokolo-Koba',
        items: ['Source au Fouta Djallon', 'Traverse le Parc Niokolo-Koba', 'Affluent Koulountou & estuaire atlantique']
      },
      {
        name: 'Casamance & Saloum',
        subtitle: 'Sud et Centre',
        items: ['Casamance : Source à Kolda, 100% sénégalais', 'Saloum & Sine : Fleuves inverses maritimes', 'Production industrielle de sel à Kaolack']
      }
    ]
  },
  conclusion:
    "En conclusion, le réseau hydrographique du Sénégal est d'une richesse inestimable. Une gestion solidaire et écologique de ces eaux, notamment à travers des organisations régionales comme l'OMVS et l'OMVG, est la clé de la sécurité alimentaire du pays."
};

export const LESSON_13_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-13',
  number: 'Leçon 13',
  title: "Méthodologie et réalisation d'une enquête de terrain en milieu local",
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "La géographie n'est pas une science enfermée dans les manuels scolaires ; elle s'apprend d'abord en allant observer le monde réel. Cette dernière leçon du programme de 6ème est une initiation pratique. Elle enseigne à l'élève la méthodologie scientifique indispensable pour concevoir, réaliser et rédiger une enquête géographique de terrain au sein de son propre quartier ou village au Sénégal.",
  fullText: `Leçon 13 : Méthodologie et réalisation d'une enquête de terrain en milieu local

Introduction : La géographie n'est pas une science enfermée dans les manuels scolaires ; elle s'apprend d'abord en allant observer le monde réel. Cette dernière leçon du programme de 6ème est une initiation pratique. Elle enseigne à l'élève la méthodologie scientifique indispensable pour concevoir, réaliser et rédiger une enquête géographique de terrain au sein de son propre quartier ou village au Sénégal.

1. La préparation théorique de l'enquête en classe
Une enquête de terrain réussie ne s'improvise pas, elle se prépare minutieusement en classe sous la direction du professeur. La première phase consiste à choisir un sujet d'étude précis et limité (par exemple : « L'approvisionnement en eau potable dans notre quartier », « La gestion des ordures au marché local » ou « L'activité maraîchère du village »). Les élèves définissent ensuite les objectifs de l'enquête et élaborent les outils de collecte de données : le guide d'observation des paysages et le questionnaire contenant les questions fermées ou ouvertes à poser aux habitants.

2. La descente sur le terrain et la collecte des données
C'est la phase d'action concrète. Munis de leurs cahiers de notes, de boussoles, de stylos et éventuellement d'appareils photo, les élèves, divisés en petits groupes de travail, parcourent l'espace choisi. Ils appliquent les compétences acquises : ils observent le relief ou l'état de salubrité, localisent les points stratégiques (forages, décharges), et interrogent avec respect et courtoisie les acteurs locaux (familles, commerçants, chefs de village ou délégués de quartier) en notant fidèlement leurs réponses.

3. Le dépouillement et le traitement des informations récoltées
De retour en classe, le travail de laboratoire commence. Les groupes d'élèves mettent en commun leurs notes pour trier et classer les informations recueillies. C'est l'étape du dépouillement. Les données chiffrées sont calculées et transformées en tableaux statistiques simples ou en graphiques faciles à lire (diagrammes en barres). Les cartes ou croquis de l'espace visité sont dessinés proprement, en y intégrant obligatoirement une orientation, une échelle approximative et une légende claire.

4. La rédaction et la présentation du rapport d'enquête
La dernière étape consiste à rédiger un rapport écrit final structuré. Ce document doit obligatoirement comporter : une introduction (qui présente le sujet, le lieu et la date de l'enquête) ; un développement (divisé en parties logiques décrivant la situation observée, expliquant les causes des problèmes découverts et présentant les opinions des habitants) ; et une conclusion (qui résume les découvertes majeures et propose des solutions citoyennes applicables). Ce rapport peut ensuite être exposé en classe ou présenté devant les autorités de l'école.

Conclusion : En conclusion, l'enquête de terrain transforme l'élève de 6ème de simple spectateur en un véritable jeune chercheur géographe. Elle lui apprend la rigueur de la science et l'importance de l'engagement citoyen pour le développement de sa localité.`,
  sections: [
    {
      title: "1. La préparation théorique de l'enquête en classe",
      content: [
        "Une enquête de terrain réussie ne s'improvise pas, elle se prépare minutieusement en classe sous la direction du professeur.",
        "La première phase consiste à choisir un sujet d'étude précis et limité (par exemple : « L'approvisionnement en eau potable dans notre quartier », « La gestion des ordures au marché local » ou « L'activité maraîchère du village »).",
        "Les élèves définissent ensuite les objectifs de l'enquête et élaborent les outils de collecte de données :",
        "• Le guide d'observation des paysages ;",
        "• Le questionnaire contenant les questions fermées ou ouvertes à poser aux habitants."
      ]
    },
    {
      title: '2. La descente sur le terrain et la collecte des données',
      content: [
        "C'est la phase d'action concrète.",
        "Munis de leurs cahiers de notes, de boussoles, de stylos et éventuellement d'appareils photo, les élèves, divisés en petits groupes de travail, parcourent l'espace choisi.",
        "Ils appliquent les compétences acquises :",
        "• Ils observent le relief ou l'état de salubrité ;",
        "• Ils localisent les points stratégiques (forages, décharges) ;",
        "• Ils interrogent avec respect et courtoisie les acteurs locaux (familles, commerçants, chefs de village ou délégués de quartier) en notant fidèlement leurs réponses."
      ]
    },
    {
      title: '3. Le dépouillement et le traitement des informations récoltées',
      content: [
        "De retour en classe, le travail de laboratoire commence.",
        "Les groupes d'élèves mettent en commun leurs notes pour trier et classer les informations recueillies. C'est l'étape du dépouillement.",
        "Les données chiffrées sont calculées et transformées en tableaux statistiques simples ou en graphiques faciles à lire (diagrammes en barres).",
        "Les cartes ou croquis de l'espace visité sont dessinés proprement, en y intégrant obligatoirement une orientation, une échelle approximative et une légende claire."
      ]
    },
    {
      title: "4. La rédaction et la présentation du rapport d'enquête",
      content: [
        "La dernière étape consiste à rédiger un rapport écrit final structuré.",
        "Ce document doit obligatoirement comporter :",
        "• Une introduction : qui présente le sujet, le lieu et la date de l'enquête ;",
        "• Un développement : divisé en parties logiques décrivant la situation observée, expliquant les causes des problèmes découverts et présentant les opinions des habitants ;",
        "• Une conclusion : qui résume les découvertes majeures et propose des solutions citoyennes applicables.",
        "Ce rapport peut ensuite être exposé en classe ou présenté devant les autorités de l'école."
      ]
    }
  ],
  diagram: {
    title: 'Démarche de l\'Enquête de Terrain',
    root: 'MÉTHODOLOGIE D\'ENQUÊTE GÉOGRAPHIQUE',
    branches: [
      {
        name: '1. Préparation en Classe',
        subtitle: 'Cadrage scientifique',
        items: ['Choix du sujet précis & limité', 'Définition des objectifs', 'Guide d\'observation & questionnaire']
      },
      {
        name: '2. Descente sur le Terrain',
        subtitle: 'Collecte active',
        items: ['Boussoles, carnets & photos', 'Observation des paysages', 'Interviews des acteurs locaux']
      },
      {
        name: '3. Dépouillement & Rapport',
        subtitle: 'Restitution & Citoyenneté',
        items: ['Tri des données & tableaux/graphiques', 'Tracé de croquis orientés avec légende', 'Rapport écrit : Intro, Développement, Conclusion']
      }
    ]
  },
  conclusion:
    "En conclusion, l'enquête de terrain transforme l'élève de 6ème de simple spectateur en un véritable jeune chercheur géographe. Elle lui apprend la rigueur de la science et l'importance de l'engagement citoyen pour le développement de sa localité."
};
