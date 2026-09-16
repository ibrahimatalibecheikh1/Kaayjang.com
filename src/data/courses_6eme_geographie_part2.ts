import { LessonContent } from './courses';

// =========================================================================
// COURS DE GÉOGRAPHIE - CLASSE DE 6ÈME (PROGRAMME OFFICIEL SÉNÉGALAIS)
// PARTIE 2 : LA GÉOGRAPHIE RÉGIONALE APPLIQUÉE (LEÇONS 4 À 8)
// TEXTE INTÉGRAL SANS AUCUN RÉSUMÉ CONFORME AU DOCUMENT OFFICIEL DU MINISTÈRE
// =========================================================================

export const LESSON_4_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-4',
  number: 'Leçon 4',
  title: 'Le cadre physique régional : relief, climat, végétation et hydrographie',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Cette quatrième leçon marque le début de la géographie régionale appliquée. Elle s'intéresse à l'environnement naturel immédiat dans lequel s'insère l'école de l'élève. L'objectif est d'étudier de manière approfondie les structures physiques qui façonnent les paysages de la région administrative locale, en analysant les reliefs, les types de temps, le couvert végétal et les ressources en eau.",
  fullText: `Leçon 4 : Le cadre physique régional : relief, climat, végétation et hydrographie

Introduction : Cette quatrième leçon marque le début de la géographie régionale appliquée. Elle s'intéresse à l'environnement naturel immédiat dans lequel s'insère l'école de l'élève. L'objectif est d'étudier de manière approfondie les structures physiques qui façonnent les paysages de la région administrative locale, en analysant les reliefs, les types de temps, le couvert végétal et les ressources en eau.

1. Le relief régional : formes et structures
Le relief désigne l'ensemble des irrégularités, des creux et des bosses qui forment la surface du sol d'une région. L'élève apprend à identifier l'unité topographique majeure de son milieu proche. S'il étudie dans la région de Dakar, il observera des plateaux calcaires bas et les collines volcaniques des Mamelles. S'il se trouve dans les régions de l'Est comme Tambacounda ou Kédougou, il fera face à des collines plus escarpées, des contreforts montagneux et des vallées rocheuses. L'analyse du relief comprend la mesure des altitudes et l'observation des pentes.

2. Le climat local et ses variations saisonnières
Le climat se définit comme la moyenne des états du temps observer sur une longue période dans une zone donnée. Au Sénégal, les régions partagent un rythme tropical mais connaissent de fortes nuances locales. L'élève étudie les températures de sa région, le volume annuel des précipitations exprimé en millimètres, et l'alternance entre la longue saison sèche (marquée parfois par le vent chaud de l'harmattan) et la saison des pluies ou hivernage (déclenchée par l'arrivée du vent humide de la mousson).

3. La végétation régionale, miroir du climat
La végétation naturelle dépend directement de la quantité de pluie reçue par la région. Les élèves analysent le tapis végétal local. Dans les régions septentrionales du Sénégal (Saint-Louis, Matam), la végétation dominante est la steppe arbustive à épineux (acacias). Dans les régions du centre (Kaolack, Diourbel), on observe la savane arborée parsemée de baobabs. Enfin, dans les régions méridionales (Ziguinchor, Kolda), la pluviométrie abondante permet le développement d'une forêt dense et de mangroves épaisses le long des rivières.

4. L'hydrographie locale et la gestion de l'eau
L'hydrographie englobe l'étude de l'eau sous toutes ses formes dans la région. Cela comprend les cours d'eau visibles (fleuves permanents, rivières temporaires ou marigots), les plans d'eau stagnante (lacs, mares) ainsi que les nappes souterraines invisibles mais cruciales pour les puits. Les élèves cartographient le réseau hydrographique régional et étudient son régime, c'est-à-dire les variations du niveau de l'eau entre les périodes de crues pendant l'hivernage et les périodes de basses eaux ou tarissement en saison sèche.

Conclusion : En conclusion, le cadre physique constitue le socle naturel d'une région. La compréhension du relief, du climat, de la végétation et de l'hydrographie permet d'expliquer pourquoi les populations s'installent à certains endroits plutôt qu'à d'autres.`,
  // LIAISON AVEC LA CARTE DU SÉNÉGAL
  senegalMap: {
    mode: 'regional',
    title: 'Cadre Physique et Écogéographique des Régions du Sénégal',
    description:
      'Observation spatiale des contrastes : le relief des Mamelles de Dakar face aux collines de l\'Est, la steppe au Nord, la savane au Centre et la forêt tropicale dense au Sud.'
  },
  sections: [
    {
      title: '1. Le relief régional : formes et structures',
      content: [
        "Le relief désigne l'ensemble des irrégularités, des creux et des bosses qui forment la surface du sol d'une région.",
        "L'élève apprend à identifier l'unité topographique majeure de son milieu proche.",
        "S'il étudie dans la région de Dakar, il observera des plateaux calcaires bas et les collines volcaniques des Mamelles.",
        "S'il se trouve dans les régions de l'Est comme Tambacounda ou Kédougou, il fera face à des collines plus escarpées, des contreforts montagneux et des vallées rocheuses.",
        "L'analyse du relief comprend la mesure des altitudes et l'observation des pentes."
      ]
    },
    {
      title: '2. Le climat local et ses variations saisonnières',
      content: [
        "Le climat se définit comme la moyenne des états du temps observer sur une longue période dans une zone donnée.",
        "Au Sénégal, les régions partagent un rythme tropical mais connaissent de fortes nuances locales.",
        "L'élève étudie les températures de sa région, le volume annuel des précipitations exprimé en millimètres, et l'alternance entre la longue saison sèche (marquée parfois par le vent chaud de l'harmattan) et la saison des pluies ou hivernage (déclenchée par l'arrivée du vent humide de la mousson)."
      ]
    },
    {
      title: '3. La végétation régionale, miroir du climat',
      content: [
        "La végétation naturelle dépend directement de la quantité de pluie reçue par la région. Les élèves analysent le tapis végétal local :",
        "• Dans les régions septentrionales du Sénégal (Saint-Louis, Matam), la végétation dominante est la steppe arbustive à épineux (acacias).",
        "• Dans les régions du centre (Kaolack, Diourbel), on observe la savane arborée parsemée de baobabs.",
        "• Enfin, dans les régions méridionales (Ziguinchor, Kolda), la pluviométrie abondante permet le développement d'une forêt dense et de mangroves épaisses le long des rivières."
      ]
    },
    {
      title: "4. L'hydrographie locale et la gestion de l'eau",
      content: [
        "L'hydrographie englobe l'étude de l'eau sous toutes ses formes dans la région.",
        "Cela comprend les cours d'eau visibles (fleuves permanents, rivières temporaires ou marigots), les plans d'eau stagnante (lacs, mares) ainsi que les nappes souterraines invisibles mais cruciales pour les puits.",
        "Les élèves cartographient le réseau hydrographique régional et étudient son régime, c'est-à-dire les variations du niveau de l'eau entre les périodes de crues pendant l'hivernage et les périodes de basses eaux ou tarissement en saison sèche."
      ]
    }
  ],
  diagram: {
    title: 'Les Composantes du Cadre Physique Régional',
    root: 'LE CADRE PHYSIQUE',
    branches: [
      {
        name: 'Relief & Pentes',
        subtitle: 'Formes topographiques',
        items: ['Plaines & plateaux bas', 'Mamelles à Dakar', 'Collines & contreforts à l\'Est']
      },
      {
        name: 'Climat & Saisons',
        subtitle: 'Rythme tropical',
        items: ['Saison sèche (Harmattan)', 'Hivernage (Mousson)', 'Précipitations en millimètres']
      },
      {
        name: 'Végétation & Eaux',
        subtitle: 'Miroir du climat',
        items: ['Nord : Steppe à acacias', 'Centre : Savane à baobabs', 'Sud : Forêt dense & mangroves']
      }
    ]
  },
  conclusion:
    "En conclusion, le cadre physique constitue le socle naturel d'une région. La compréhension du relief, du climat, de la végétation et de l'hydrographie permet d'expliquer pourquoi les populations s'installent à certains endroits plutôt qu'à d'autres."
};

export const LESSON_5_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-5',
  number: 'Leçon 5',
  title: 'La population régionale : effectifs, structure et mouvements',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Après avoir analysé le milieu physique naturel, le géographe se tourne vers l'élément humain. Cette leçon examine en détail la population de la région de l'élève. Il s'agit de comprendre combien d'habitants vivent dans cet espace, comment ils se répartissent selon l'âge et le sexe, et quelles sont les dynamiques démographiques qui modifient cette population au fil du temps.",
  fullText: `Leçon 5 : La population régionale : effectifs, structure et mouvements

Introduction : Après avoir analysé le milieu physique naturel, le géographe se tourne vers l'élément humain. Cette leçon examine en détail la population de la région de l'élève. Il s'agit de comprendre combien d'habitants vivent dans cet espace, comment ils se répartissent selon l'âge et le sexe, et quelles sont les dynamiques démographiques qui modifient cette population au fil du temps.

1. Les effectifs et la densité de la population
L'effectif global représente le nombre total d'habitants résidant dans la région, une donnée issue des recensements officiels de l'Agence Nationale de la Statistique et de la Démographie (ANSD). À partir de cet effectif et de la superficie de la région, l'élève calcule la densité démographique, exprimée en habitants par kilomètre carré (hab/km²). On constate de profondes inégalités : la région de Dakar présente des densités extrêmement élevées en raison de son statut macrocéphale, tandis que la région de Tambacounda possède une densité très faible malgré sa vaste superficie.

2. La structure de la population par âge et par sexe
La structure démographique est étudiée à l'aide d'un graphique spécifique appelé la pyramide des âges. Dans toutes les régions du Sénégal, la base de cette pyramide est extrêmement large, ce qui traduit une population caractérisée par une immense jeunesse (les moins de 15 ans représentent souvent près de la moitié des effectifs). Les élèves analysent également la répartition par sexe (hommes/femmes) et les équilibres ou déséquilibres que cela engendre dans l'organisation sociale et scolaire locale.

3. Le mouvement naturel : natalité et mortalité
La population d'une région varie naturellement selon deux indicateurs majeurs : le taux de natalité (nombre de naissances pour 1 000 habitants par an) et le taux de mortalité (nombre de décès pour 1 000 habitants par an). La différence entre ces deux taux donne le taux d'accroissement naturel. Au Sénégal, la baisse progressive de la mortalité combinée à une natalité qui reste vigoureuse explique la croissance démographique rapide observée dans la plupart des régions.

4. Les mouvements migratoires : exode rural et émigration
La population change aussi à cause des déplacements spatiaux. L'exode rural pousse les jeunes des villages de l'intérieur à quitter les champs pour s'installer dans les capitales régionales ou à Dakar à la recherche d'emplois ou d'études. On étudie également les migrations interrégionales et l'émigration internationale, qui vident certaines localités de leurs forces vives mais génèrent des flux financiers importants envoyés par les émigrés pour soutenir leurs familles restées dans la région.

Conclusion : En conclusion, la population régionale est une ressource humaine jeune et dynamique, mais sa croissance rapide pose des défis majeurs en matière d'infrastructures scolaires, de santé et de création d'emplois durables.`,
  sections: [
    {
      title: '1. Les effectifs et la densité de la population',
      content: [
        "L'effectif global représente le nombre total d'habitants résidant dans la région, une donnée issue des recensements officiels de l'Agence Nationale de la Statistique et de la Démographie (ANSD).",
        "À partir de cet effectif et de la superficie de la région, l'élève calcule la densité démographique, exprimée en habitants par kilomètre carré (hab/km²).",
        "On constate de profondes inégalités : la région de Dakar présente des densités extrêmement élevées en raison de son statut macrocéphale, tandis que la région de Tambacounda possède une densité très faible malgré sa vaste superficie."
      ]
    },
    {
      title: '2. La structure de la population par âge et par sexe',
      content: [
        "La structure démographique est étudiée à l'aide d'un graphique spécifique appelé la pyramide des âges.",
        "Dans toutes les régions du Sénégal, la base de cette pyramide est extrêmement large, ce qui traduit une population caractérisée par une immense jeunesse (les moins de 15 ans représentent souvent près de la moitié des effectifs).",
        "Les élèves analysent également la répartition par sexe (hommes/femmes) et les équilibres ou déséquilibres que cela engendre dans l'organisation sociale et scolaire locale."
      ]
    },
    {
      title: '3. Le mouvement naturel : natalité et mortalité',
      content: [
        "La population d'une région varie naturellement selon deux indicateurs majeurs : le taux de natalité (nombre de naissances pour 1 000 habitants par an) et le taux de mortalité (nombre de décès pour 1 000 habitants par an).",
        "La différence entre ces deux taux donne le taux d'accroissement naturel.",
        "Au Sénégal, la baisse progressive de la mortalité combinée à une natalité qui reste vigoureuse explique la croissance démographique rapide observée dans la plupart des régions."
      ]
    },
    {
      title: '4. Les mouvements migratoires : exode rural et émigration',
      content: [
        "La population change aussi à cause des déplacements spatiaux.",
        "L'exode rural pousse les jeunes des villages de l'intérieur à quitter les champs pour s'installer dans les capitales régionales ou à Dakar à la recherche d'emplois ou d'études.",
        "On étudie également les migrations interrégionales et l'émigration internationale, qui vident certaines localités de leurs forces vives mais génèrent des flux financiers importants envoyés par les émigrés pour soutenir leurs familles restées dans la région."
      ]
    }
  ],
  diagram: {
    title: 'Dynamiques Démographiques Régionales',
    root: 'LA POPULATION RÉGIONALE',
    branches: [
      {
        name: 'Effectifs & Densité',
        subtitle: 'Données ANSD',
        items: ['Densité = Habitants / Superficie', 'Forte concentration à Dakar', 'Faible densité à Tambacounda']
      },
      {
        name: 'Structure Jeune',
        subtitle: 'Pyramide des âges',
        items: ['Base très large', '&lt; 15 ans = près de 50%', 'Répartition Hommes/Femmes']
      },
      {
        name: 'Mouvements',
        subtitle: 'Naturels & Spatiaux',
        items: ['Accroissement naturel (Natalité - Mortalité)', 'Exode rural vers les villes', 'Émigration internationale & transferts']
      }
    ]
  },
  conclusion:
    "En conclusion, la population régionale est une ressource humaine jeune et dynamique, mais sa croissance rapide pose des défis majeurs en matière d'infrastructures scolaires, de santé et de création d'emplois durables."
};

export const LESSON_6_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-6',
  number: 'Leçon 6',
  title: 'Les activités économiques régionales',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Les êtres humains doivent travailler pour se nourrir, se loger, se vêtir et développer leur société. Cette sixième leçon dresse le panorama complet des secteurs économiques de la région de l'école. Elle permet à l'élève d'identifier les forces productives locales à travers l'étude des secteurs primaire, secondaire et tertiaire spécifiques à son terroir.",
  fullText: `Leçon 6 : Les activités économiques régionales

Introduction : Les êtres humains doivent travailler pour se nourrir, se loger, se vêtir et développer leur société. Cette sixième leçon dresse le panorama complet des secteurs économiques de la région de l'école. Elle permet à l'élève d'identifier les forces productives locales à travers l'étude des secteurs primaire, secondaire et tertiaire spécifiques à son terroir.

1. Le secteur primaire : agriculture, élevage et pêche
Le secteur primaire extrait les ressources naturelles. L'agriculture régionale est analysée selon ses techniques (outils traditionnels comme la daba ou modernisation mécanique) et ses productions (cultures vivrières comme le mil, le maïs ou le riz en Casamance ; cultures de rente comme l'arachide dans le Bassin arachidier). L'élevage peut être pastoral et nomade ou intensif près des villes. La pêche joue un rôle vital dans les régions côtières (Dakar, Thiès, Saint-Louis, Ziguinchor) en fournissant des protéines aux populations et des emplois dans les quais de débarquement.

2. Le secteur secondaire : artisanat et industries
Le secteur secondaire transforme les matières premières. Dans la majorité des régions du Sénégal, l'artisanat domine largement : menuisiers métalliques, tailleurs, potières, maçons et bijoutiers animent l'économie locale. L'industrie lourde (usines de transformation chimique, cimenteries, usines de conserve de poisson) reste fortement concentrée dans l'axe Dakar-Thiès, bien que des unités de transformation agroalimentaire (décortiqueries de riz ou huileries d'arachide) existent dans d'autres régions.

3. Le secteur tertiaire : le commerce, les transports et les services
Le secteur tertiaire produit des services. Le commerce est le cœur battant des villes et villages sénégalais, caractérisé par les grands marchés hebdomadaires appelés « Loumas », les boutiques de quartier et le secteur informel ambulant. Les transports (taxis-brousse, motos-motos appelées Jakarta, bus de transport en commun, pirogues de transport) assurent la circulation des biens et des personnes. On étudie enfin les services essentiels comme l'éducation, la santé, les banques et le tourisme (très développé sur la Petite Côte ou à Cap Skirring).

Conclusion : En conclusion, l'économie régionale sénégalaise repose sur une diversité d'activités souvent dominées par le secteur informel et l'agriculture de subsistance. Le développement de la région dépend de la modernisation de ces secteurs clés.`,
  sections: [
    {
      title: '1. Le secteur primaire : agriculture, élevage et pêche',
      content: [
        "Le secteur primaire extrait les ressources naturelles.",
        "L'agriculture régionale est analysée selon ses techniques (outils traditionnels comme la daba ou modernisation mécanique) et ses productions (cultures vivrières comme le mil, le maïs ou le riz en Casamance ; cultures de rente comme l'arachide dans le Bassin arachidier).",
        "L'élevage peut être pastoral et nomade ou intensif près des villes.",
        "La pêche joue un rôle vital dans les régions côtières (Dakar, Thiès, Saint-Louis, Ziguinchor) en fournissant des protéines aux populations et des emplois dans les quais de débarquement."
      ]
    },
    {
      title: '2. Le secteur secondaire : artisanat et industries',
      content: [
        "Le secteur secondaire transforme les matières premières.",
        "Dans la majorité des régions du Sénégal, l'artisanat domine largement : menuisiers métalliques, tailleurs, potières, maçons et bijoutiers animent l'économie locale.",
        "L'industrie lourde (usines de transformation chimique, cimenteries, usines de conserve de poisson) reste fortement concentrée dans l'axe Dakar-Thiès, bien que des unités de transformation agroalimentaire (décortiqueries de riz ou huileries d'arachide) existent dans d'autres régions."
      ]
    },
    {
      title: '3. Le secteur tertiaire : le commerce, les transports et les services',
      content: [
        "Le secteur tertiaire produit des services.",
        "Le commerce est le cœur battant des villes et villages sénégalais, caractérisé par les grands marchés hebdomadaires appelés « Loumas », les boutiques de quartier et le secteur informel ambulant.",
        "Les transports (taxis-brousse, motos-motos appelées Jakarta, bus de transport en commun, pirogues de transport) assurent la circulation des biens et des personnes.",
        "On étudie enfin les services essentiels comme l'éducation, la santé, les banques et le tourisme (très développé sur la Petite Côte ou à Cap Skirring)."
      ]
    }
  ],
  diagram: {
    title: 'Les Trois Secteurs Économiques Régionaux',
    root: 'L\'ÉCONOMIE RÉGIONALE',
    branches: [
      {
        name: 'Secteur Primaire',
        subtitle: 'Extraction des ressources',
        items: ['Agriculture vivrière & arachidière', 'Élevage pastoral ou intensif', 'Pêche maritime & continentale']
      },
      {
        name: 'Secteur Secondaire',
        subtitle: 'Transformation des matières',
        items: ['Artisanat local prédominant', 'Industrie concentrée Dakar-Thiès', 'Agroalimentaire (riz, arachide)']
      },
      {
        name: 'Secteur Tertiaire',
        subtitle: 'Production de services',
        items: ['Marchés hebdomadaires (Loumas)', 'Transports (taxis, Jakarta, pirogues)', 'Santé, éducation & tourisme']
      }
    ]
  },
  conclusion:
    "En conclusion, l'économie régionale sénégalaise repose sur une diversité d'activités souvent dominées par le secteur informel et l'agriculture de subsistance. Le développement de la région dépend de la modernisation de ces secteurs clés."
};

export const LESSON_7_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-7',
  number: 'Leçon 7',
  title: "L'organisation de l'espace régional : les villages et les quartiers urbains",
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "L'espace d'une région n'est pas uniforme ; il est structuré, découpé et organisé par les installations humaines. Cette leçon analyse la dualité géographique entre le milieu rural et le milieu urbain au sein de la région. Elle décrit la morphologie des habitats, l'architecture des logements et les modes d'organisation de la vie collective des villages et des villes.",
  fullText: `Leçon 7 : L'organisation de l'espace régional : les villages et les quartiers urbains

Introduction : L'espace d'une région n'est pas uniforme ; il est structuré, découpé et organisé par les installations humaines. Cette leçon analyse la dualité géographique entre le milieu rural et le milieu urbain au sein de la région. Elle décrit la morphologie des habitats, l'architecture des logements et les modes d'organisation de la vie collective des villages et des villes.

1. L'espace rural : typologie et morphologie des villages
Le village se définit comme une petite communauté humaine vivant en milieu rural et tirant ses revenus principalement de l'exploitation de la terre. Les élèves étudient la morphologie des villages de leur région : certains villages sont dits « groupés » ou concentrés autour d'un point d'eau ou d'un grand arbre à palabres (baobab ou fromager), tandis que d'autres sont « dispersés », les concessions familiales étant séparées les unes des autres par de vastes champs de culture. L'habitat traditionnel utilise souvent des matériaux locaux (banco, paille, rônier).

2. L'espace urbain : les villes et la structure des quartiers
La ville se caractérise par une forte concentration de population et une diversité d'activités non agricoles. L'élève analyse la structure des quartiers urbains de sa région. On distingue généralement le centre-ville (qui regroupe l'administration, la préfecture, les banques et le grand marché), les quartiers résidentiels planifiés aux routes goudronnées, et les quartiers périphériques ou spontanés, nés d'une urbanisation rapide et souffrant parfois d'un manque d'infrastructures de base.

3. Les relations d'interdépendance entre villes et villages
La ville et le village ne vivent pas isolés ; ils entretiennent des flux constants d'échanges. Le village approvisionne la ville en produits alimentaires frais (légumes, céréales, lait, poisson) et fournit une main-d'œuvre saisonnière. En retour, la ville approvisionne le village en produits manufacturés (tissus, outils agricoles industriels, engrais, appareils électroniques) et offre des services spécialisés absents en milieu rural, notamment les hôpitaux régionaux et les universités.

Conclusion : En conclusion, l'espace régional est un réseau interconnecté où villes et villages se complètent. Équilibrer le développement entre ces deux mondes est essentiel pour freiner l'exode rural massif.`,
  sections: [
    {
      title: "1. L'espace rural : typologie et morphologie des villages",
      content: [
        "Le village se définit comme une petite communauté humaine vivant en milieu rural et tirant ses revenus principalement de l'exploitation de la terre.",
        "Les élèves étudient la morphologie des villages de leur région :",
        "• Certains villages sont dits « groupés » ou concentrés autour d'un point d'eau ou d'un grand arbre à palabres (baobab ou fromager).",
        "• D'autres sont « dispersés », les concessions familiales étant séparées les unes des autres par de vastes champs de culture.",
        "• L'habitat traditionnel utilise souvent des matériaux locaux (banco, paille, rônier)."
      ]
    },
    {
      title: "2. L'espace urbain : les villes et la structure des quartiers",
      content: [
        "La ville se caractérise par une forte concentration de population et une diversité d'activités non agricoles.",
        "L'élève analyse la structure des quartiers urbains de sa région. On distingue généralement :",
        "• Le centre-ville : qui regroupe l'administration, la préfecture, les banques et le grand marché ;",
        "• Les quartiers résidentiels : planifiés et dotés de routes goudronnées ;",
        "• Les quartiers périphériques ou spontanés : nés d'une urbanisation rapide et souffrant parfois d'un manque d'infrastructures de base."
      ]
    },
    {
      title: "3. Les relations d'interdépendance entre villes et villages",
      content: [
        "La ville et le village ne vivent pas isolés ; ils entretiennent des flux constants d'échanges :",
        "• Le village approvisionne la ville en produits alimentaires frais (légumes, céréales, lait, poisson) et fournit une main-d'œuvre saisonnière.",
        "• En retour, la ville approvisionne le village en produits manufacturés (tissus, outils agricoles industriels, engrais, appareils électroniques) et offre des services spécialisés absents en milieu rural, notamment les hôpitaux régionaux et les universités."
      ]
    }
  ],
  diagram: {
    title: 'Organisation de l\'Espace Régional',
    root: 'ESPACE RÉGIONAL',
    branches: [
      {
        name: 'Espace Rural (Villages)',
        subtitle: 'Activités agricoles',
        items: ['Villages groupés (point d\'eau)', 'Villages dispersés (champs)', 'Matériaux locaux (banco, paille)']
      },
      {
        name: 'Espace Urbain (Villes)',
        subtitle: 'Concentration humaine',
        items: ['Centre-ville (marché, services)', 'Quartiers résidentiels aménagés', 'Quartiers périphériques / spontanés']
      },
      {
        name: 'Interdépendance',
        subtitle: 'Flux d\'échanges réciproques',
        items: ['Campagne vers ville : vivres & travail', 'Ville vers campagne : biens manufacturés & soins', 'Équilibre nécessaire contre l\'exode']
      }
    ]
  },
  conclusion:
    "En conclusion, l'espace régional est un réseau interconnecté où villes et villages se complètent. Équilibrer le développement entre ces deux mondes est essentiel pour freiner l'exode rural massif."
};

export const LESSON_8_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-8',
  number: 'Leçon 8',
  title: 'Les problèmes environnementaux et les perspectives de développement de la région',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Toute région géographique fait face à des difficultés qui menacent son équilibre écologique et le bien-être de ses populations. Cette leçon adopte une approche critique et citoyenne en listant les agressions subies par l'environnement régional, tout en ouvrant des perspectives sur les solutions concrètes et les plans d'avenir menés au niveau local.",
  fullText: `Leçon 8 : Les problèmes environnementaux et les perspectives de développement de la région

Introduction : Toute région géographique fait face à des difficultés qui menacent son équilibre écologique et le bien-être de ses populations. Cette leçon adopte une approche critique et citoyenne en listant les agressions subies par l'environnement régional, tout en ouvrant des perspectives sur les solutions concrètes et les plans d'avenir menés au niveau local.

1. Les défis environnementaux en milieu rural
Dans les zones rurales de la région, l'environnement est menacé par plusieurs fléaux majeurs. La désertification et la dégradation des sols, accentuées par des sécheresses cycliques et des techniques agricoles inadaptées, réduisent la fertilité de la terre. La déforestation, causée par la coupe abusive de bois pour la production de charbon de bois de cuisine, détruit la biodiversité. Dans les régions côtières, la salinisation des terres agricoles (avancée de la langue salée dans les rizières) détruit l'agriculture locale.

2. Les nuisances et pollutions en milieu urbain
Dans les centres urbains et les communes de la région, les problèmes sont liés à la forte concentration humaine. Les élèves étudient la gestion défectueuse des déchets ménagers et plastiques qui encombrent les rues, l'absence de réseaux d'égouts adéquats provoquant l'insalubrité, la pollution de l'air par les transports et les industries, ainsi que le problème dramatique des inondations urbaines récurrentes pendant l'hivernage en raison du manque de canaux d'évacuation des eaux de pluie.

3. Les initiatives locales de protection de la nature
Face à ces crises, des solutions se mettent en place au niveau communautaire et étatique. Les élèves recensent les actions concrètes menées dans leur région : campagnes de reboisement citoyen, création de comités de salubrité de quartier (« Set-Setal »), interdiction des sacs plastiques à usage unique, ou encore la mise en place de réserves naturelles de biosphère protégées pour sauvegarder la faune et la flore locales.

4. Les perspectives de développement économique régional
Le développement passe par une meilleure exploitation des potentialités régionales. Cette sous-partie analyse les projets d'avenir : construction de nouvelles infrastructures routières pour désenclaver les villages isolés, électrification rurale par l'énergie solaire, installation de forages pour sécuriser l'accès à l'eau potable, et valorisation du patrimoine culturel et touristique local pour générer des revenus directs pour les jeunes de la région.

Conclusion : En conclusion, la région dispose de nombreux atouts pour se développer, mais ce progrès doit impérativement s'inscrire dans une démarche durable, respectueuse de la nature et des équilibres écologiques fragiles.`,
  sections: [
    {
      title: '1. Les défis environnementaux en milieu rural',
      content: [
        "Dans les zones rurales de la région, l'environnement est menacé par plusieurs fléaux majeurs.",
        "La désertification et la dégradation des sols, accentuées par des sécheresses cycliques et des techniques agricoles inadaptées, réduisent la fertilité de la terre.",
        "La déforestation, causée par la coupe abusive de bois pour la production de charbon de bois de cuisine, détruit la biodiversité.",
        "Dans les régions côtières, la salinisation des terres agricoles (avancée de la langue salée dans les rizières) détruit l'agriculture locale."
      ]
    },
    {
      title: '2. Les nuisances et pollutions en milieu urbain',
      content: [
        "Dans les centres urbains et les communes de la région, les problèmes sont liés à la forte concentration humaine.",
        "Les élèves étudient la gestion défectueuse des déchets ménagers et plastiques qui encombrent les rues, l'absence de réseaux d'égouts adéquats provoquant l'insalubrité, la pollution de l'air par les transports et les industries, ainsi que le problème dramatique des inondations urbaines récurrentes pendant l'hivernage en raison du manque de canaux d'évacuation des eaux de pluie."
      ]
    },
    {
      title: '3. Les initiatives locales de protection de la nature',
      content: [
        "Face à ces crises, des solutions se mettent en place au niveau communautaire et étatique.",
        "Les élèves recensent les actions concrètes menées dans leur région :",
        "• Les campagnes de reboisement citoyen ;",
        "• La création de comités de salubrité de quartier (« Set-Setal ») ;",
        "• L'interdiction des sacs plastiques à usage unique ;",
        "• La mise en place de réserves naturelles de biosphère protégées pour sauvegarder la faune et la flore locales."
      ]
    },
    {
      title: '4. Les perspectives de développement économique régional',
      content: [
        "Le développement passe par une meilleure exploitation des potentialités régionales.",
        "Cette sous-partie analyse les projets d'avenir :",
        "• La construction de nouvelles infrastructures routières pour désenclaver les villages isolés ;",
        "• L'électrification rurale par l'énergie solaire ;",
        "• L'installation de forages pour sécuriser l'accès à l'eau potable ;",
        "• La valorisation du patrimoine culturel et touristique local pour générer des revenus directs pour les jeunes de la région."
      ]
    }
  ],
  diagram: {
    title: 'Environnement et Perspectives Régionales',
    root: 'ENVIRONNEMENT ET DÉVELOPPEMENT',
    branches: [
      {
        name: 'Défis Ruraux',
        subtitle: 'Atteintes aux sols & forêts',
        items: ['Désertification & érosion', 'Déforestation (charbon de bois)', 'Salinisation des rizières côtières']
      },
      {
        name: 'Pollutions Urbaines',
        subtitle: 'Nuisances de la ville',
        items: ['Déchets ménagers & plastiques', 'Inondations hivernales', 'Pollution atmosphérique']
      },
      {
        name: 'Initiatives & Solutions',
        subtitle: 'Perspectives citoyennes',
        items: ['Reboisement & comités Set-Setal', 'Électrification solaire & forages', 'Désenclavement routier & écotourisme']
      }
    ]
  },
  conclusion:
    "En conclusion, la région dispose de nombreux atouts pour se développer, mais ce progrès doit impérativement s'inscrire dans une démarche durable, respectueuse de la nature et des équilibres écologiques fragiles."
};
