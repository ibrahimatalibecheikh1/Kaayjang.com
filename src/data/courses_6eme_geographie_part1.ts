import { LessonContent } from './courses';

// =========================================================================
// COURS DE GÉOGRAPHIE - CLASSE DE 6ÈME (PROGRAMME OFFICIEL SÉNÉGALAIS)
// PARTIE 1 : INITIATION À LA GÉOGRAPHIE ET OUTILS DU GÉOGRAPHE (LEÇONS 1 À 3)
// TEXTE INTÉGRAL SANS AUCUN RÉSUMÉ CONFORME AU DOCUMENT OFFICIEL DU MINISTÈRE
// =========================================================================

export const LESSON_1_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-1',
  number: 'Leçon 1',
  title: 'La géographie : définition, objet et utilité',
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "La géographie est souvent perçue à tort comme une simple liste de capitales ou de fleuves à mémoriser. En réalité, elle constitue une science dynamique et essentielle pour comprendre comment notre société s'installe et évolue sur la planète Terre. Pour l'élève de 6ème au Sénégal, cette première leçon pose les jalons théoriques qui lui permettront de jeter un regard critique et scientifique sur son environnement immédiat.",
  fullText: `Leçon 1 : La géographie : définition, objet et utilité

Introduction : La géographie est souvent perçue à tort comme une simple liste de capitales ou de fleuves à mémoriser. En réalité, elle constitue une science dynamique et essentielle pour comprendre comment notre société s'installe et évolue sur la planète Terre. Pour l'élève de 6ème au Sénégal, cette première leçon pose les jalons théoriques qui lui permettront de jeter un regard critique et scientifique sur son environnement immédiat.

1. L'origine étymologique et l'évolution de la science
Le mot géographie provient de l'association de deux racines grecques anciennes : « Gê » qui désigne la Terre, et « graphein » qui exprime l'action d'écrire, de dessiner ou de décrire. À l'origine, durant l'Antiquité, le géographe était donc un descripteur de paysages, un voyageur qui cartographiait les côtes et racontait les modes de vie des peuples lointains. Aujourd'hui, la géographie moderne a dépassé ce stade de simple inventaire visuel. Elle est devenue une science explicative fondamentale qui analyse comment les sociétés humaines s'organisent dans l'espace.

2. L'objet d'étude de la géographie moderne
L'objet principal de la géographie moderne réside dans l'analyse approfondie des relations constantes, réciproques et complexes entre l'Homme et son milieu naturel. D'une part, nous étudions l'influence du milieu physique sur l'Homme : les climats, les reliefs et les cours d'eau dictent les zones habitables, les périodes de culture agricole et les routes de transport. D'autre part, nous analysons l'action transformatrice de l'Homme sur son milieu : par la construction de grandes villes comme Dakar, le creusement de canaux, l'édification de barrages (comme le barrage de Diama) ou malheureusement la déforestation.

3. Les trois grandes branches de la géographie
Pour structurer ses recherches, la géographie se subdivise en trois branches interconnectées. La géographie physique étudie les composantes naturelles de la Terre (l'atmosphère, le relief, les océans, les fleuves, la faune et la flore). La géographie humaine s'intéresse aux populations, à leur densité, leur croissance démographique et leurs mouvements migratoires. Enfin, la géographie économique analyse la façon dont les Hommes produisent des richesses, exploitent les ressources naturelles et échangent des marchandises à travers l'agriculture, l'industrie et le commerce.

4. La méthode scientifique du géographe
Le géographe n'invente pas, il observe de manière structurée selon une démarche scientifique rigoureuse en cinq phases fondamentales : L'observation directe (sur le terrain) ou indirecte (via des photos satellites ou des cartes) ; la localisation précise du phénomène étudié sur la surface du globe ; la description fidèle de ses caractéristiques ; l'explication des causes profondes de son existence ; et la comparaison avec d'autres espaces géographiques pour en dégager des lois générales.

5. Pourquoi étudions-nous la géographie ? Son utilité pratique
L'utilité de la géographie se manifeste dans la vie quotidienne et citoyenne. Elle permet d'abord de s'orienter efficacement lors des déplacements. Ensuite, elle s'avère indispensable pour l'aménagement du territoire : les gouvernements s'appuient sur des études géographiques pour choisir l'emplacement des futures lignes de train (comme le TER au Sénégal), des hôpitaux ou des zones industrielles. Enfin, elle offre les clés nécessaires pour comprendre et combattre les crises environnementales majeures actuelles, telles que l'avancée du désert dans la zone sahélienne ou l'érosion côtière sur la Petite Côte sénégalaise.

Conclusion : En conclusion, la géographie ne se limite pas à contempler la Terre, elle donne les outils indispensables pour l'habiter intelligemment. Elle transforme l'élève en un citoyen conscient des enjeux de son pays et protecteur de sa nature environnante.`,
  sections: [
    {
      title: "1. L'origine étymologique et l'évolution de la science",
      content: [
        "Le mot géographie provient de l'association de deux racines grecques anciennes : « Gê » qui désigne la Terre, et « graphein » qui exprime l'action d'écrire, de dessiner ou de décrire.",
        "À l'origine, durant l'Antiquité, le géographe était donc un descripteur de paysages, un voyageur qui cartographiait les côtes et racontait les modes de vie des peuples lointains.",
        "Aujourd'hui, la géographie moderne a dépassé ce stade de simple inventaire visuel. Elle est devenue une science explicative fondamentale qui analyse comment les sociétés humaines s'organisent dans l'espace."
      ]
    },
    {
      title: "2. L'objet d'étude de la géographie moderne",
      content: [
        "L'objet principal de la géographie moderne réside dans l'analyse approfondie des relations constantes, réciproques et complexes entre l'Homme et son milieu naturel.",
        "D'une part, nous étudions l'influence du milieu physique sur l'Homme : les climats, les reliefs et les cours d'eau dictent les zones habitables, les périodes de culture agricole et les routes de transport.",
        "D'autre part, nous analysons l'action transformatrice de l'Homme sur son milieu : par la construction de grandes villes comme Dakar, le creusement de canaux, l'édification de barrages (comme le barrage de Diama) ou malheureusement la déforestation."
      ]
    },
    {
      title: '3. Les trois grandes branches de la géographie',
      content: [
        'Pour structurer ses recherches, la géographie se subdivise en trois branches interconnectées :',
        '• La géographie physique : étudie les composantes naturelles de la Terre (l\'atmosphère, le relief, les océans, les fleuves, la faune et la flore).',
        '• La géographie humaine : s\'intéresse aux populations, à leur densité, leur croissance démographique et leurs mouvements migratoires.',
        '• La géographie économique : analyse la façon dont les Hommes produisent des richesses, exploitent les ressources naturelles et échangent des marchandises à travers l\'agriculture, l\'industrie et le commerce.'
      ]
    },
    {
      title: '4. La méthode scientifique du géographe',
      content: [
        'Le géographe n\'invente pas, il observe de manière structurée selon une démarche scientifique rigoureuse en cinq phases fondamentales :',
        '1. L\'observation directe (sur le terrain) ou indirecte (via des photos satellites ou des cartes) ;',
        '2. La localisation précise du phénomène étudié sur la surface du globe ;',
        '3. La description fidèle de ses caractéristiques ;',
        '4. L\'explication des causes profondes de son existence ;',
        '5. La comparaison avec d\'autres espaces géographiques pour en dégager des lois générales.'
      ]
    },
    {
      title: '5. Pourquoi étudions-nous la géographie ? Son utilité pratique',
      content: [
        "L'utilité de la géographie se manifeste dans la vie quotidienne et citoyenne.",
        "Elle permet d'abord de s'orienter efficacement lors des déplacements.",
        "Ensuite, elle s'avère indispensable pour l'aménagement du territoire : les gouvernements s'appuient sur des études géographiques pour choisir l'emplacement des futures lignes de train (comme le TER au Sénégal), des hôpitaux ou des zones industrielles.",
        "Enfin, elle offre les clés nécessaires pour comprendre et combattre les crises environnementales majeures actuelles, telles que l'avancée du désert dans la zone sahélienne ou l'érosion côtière sur la Petite Côte sénégalaise."
      ]
    }
  ],
  diagram: {
    title: 'Synthèse Méthodologique de la Géographie',
    root: 'LA SCIENCE GÉOGRAPHIQUE',
    branches: [
      {
        name: 'Étymologie & Objet',
        subtitle: 'Gê (Terre) + Graphein (Écrire)',
        items: ['Relations Homme-Milieu', 'Milieu physique sur Homme', 'Action de l\'Homme sur la nature']
      },
      {
        name: 'Trois Branches Majeures',
        subtitle: 'Champs d\'investigation',
        items: ['Géographie physique', 'Géographie humaine', 'Géographie économique']
      },
      {
        name: 'Démarche & Utilité',
        subtitle: '5 étapes & Citoyenneté',
        items: ['Observation & Localisation', 'Description, Explication, Comparaison', 'Aménagement du territoire & Écologie']
      }
    ]
  },
  conclusion:
    "En conclusion, la géographie ne se limite pas à contempler la Terre, elle donne les outils indispensables pour l'habiter intelligemment. Elle transforme l'élève en un citoyen conscient des enjeux de son pays et protecteur de sa nature environnante."
};

export const LESSON_2_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-2',
  number: 'Leçon 2',
  title: "Les outils du géographe : l'observation et la boussole",
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "Pour mener à bien ses missions d'analyse, le géographe ne peut pas se déplacer au hasard ou sans méthode. Il s'appuie sur une boîte à outils spécifique. Cette leçon se propose de détailler les deux premiers instruments fondamentaux du chercheur de l'espace : ses propres capacités d'observation méthodique et l'usage technique de la boussole pour l'orientation dans l'espace sénégalais.",
  fullText: `Leçon 2 : Les outils du géographe : l'observation et la boussole

Introduction : Pour mener à bien ses missions d'analyse, le géographe ne peut pas se déplacer au hasard ou sans méthode. Il s'appuie sur une boîte à outils spécifique. Cette leçon se propose de détailler les deux premiers instruments fondamentaux du chercheur de l'espace : ses propres capacités d'observation méthodique et l'usage technique de la boussole pour l'orientation dans l'espace sénégalais.

1. L'observation géographique, pilier de la recherche
L'observation est l'acte fondateur de toute démarche géographique. Elle se divise en deux catégories distinctes. L'observation directe s'effectue lorsque le géographe se rend physiquement sur le terrain, marche dans un quartier, examine la texture du sol d'un champ ou mesure le débit d'un bras de fleuve. L'observation indirecte, quant à elle, utilise des intermédiaires techniques indispensables : des cartes topographiques, des photographies aériennes prises par des avions, ou des images satellitaires de haute précision fournies par la technologie spatiale moderne.

2. La boussole : origine, structure et principe technique
La boussole est un instrument d'orientation universel inventé à l'origine en Chine et perfectionné au cours des siècles. Sa structure repose sur un élément central : une aiguille aimantée montée sur un pivot libre de ses mouvements. Le principe de fonctionnement est physique : la Terre se comporte comme un gigantesque aimant avec un pôle Nord et un pôle Sud magnétiques. L'aiguille aimantée de la boussole, attirée par ces forces invisibles, s'aligne automatiquement et pointe toujours de manière constante vers le Nord magnétique de la Terre.

3. Le cadran et la rose des vents
Le fond du boîtier de la boussole est habillé par un cadran appelé la rose des vents. Ce cadran circulaire indique les directions. On y trouve d'abord les quatre points cardinaux principaux : le Nord (N), le Sud (S), l'Est (E) et l'Ouest (O ou W). Pour affiner l'orientation, on utilise les points collatéraux ou intermédiaires : le Nord-Est (NE), le Sud-Est (SE), le Nord-Ouest (NO) et le Sud-Ouest (SO). Le cadran est également gradué de 0 à 360 degrés, le Nord correspondant précisément au degré 0 ou 360.

4. Guide pratique : Comment utiliser une boussole sur le terrain
Pour utiliser correctement une boussole lors d'une sortie sur le terrain au Sénégal, l'élève doit suivre des consignes précises. Il faut tenir la boussole bien à plat, horizontalement dans la paume de la main, à hauteur de poitrine. Il est impératif de s'éloigner de tout objet métallique lourd (voitures, poteaux électriques, structures en fer forgé) qui pourrait fausser le champ magnétique de l'aiguille. On tourne ensuite le boîtier jusqu'à ce que la ligne repère coïncide exactement avec la pointe aimantée indiquant le Nord. On peut alors lire instantanément toutes les autres directions environnantes.

Conclusion : En conclusion, l'observation et la boussole forment le duo initial indispensable à tout géographe. Sans une observation rigoureuse, les données manquent ; sans boussole, le chercheur se perdrait, incapable de situer ses découvertes par rapport aux repères cardinaux de notre planète.`,
  sections: [
    {
      title: "1. L'observation géographique, pilier de la recherche",
      content: [
        "L'observation est l'acte fondateur de toute démarche géographique. Elle se divise en deux catégories distinctes.",
        "L'observation directe s'effectue lorsque le géographe se rend physiquement sur le terrain, marche dans un quartier, examine la texture du sol d'un champ ou mesure le débit d'un bras de fleuve.",
        "L'observation indirecte, quant à elle, utilise des intermédiaires techniques indispensables : des cartes topographiques, des photographies aériennes prises par des avions, ou des images satellitaires de haute précision fournies par la technologie spatiale moderne."
      ]
    },
    {
      title: '2. La boussole : origine, structure et principe technique',
      content: [
        "La boussole est un instrument d'orientation universel inventé à l'origine en Chine et perfectionné au cours des siècles.",
        'Sa structure repose sur un élément central : une aiguille aimantée montée sur un pivot libre de ses mouvements.',
        'Le principe de fonctionnement est physique : la Terre se comporte comme un gigantesque aimant avec un pôle Nord et un pôle Sud magnétiques. L\'aiguille aimantée de la boussole, attirée par ces forces invisibles, s\'aligne automatiquement et pointe toujours de manière constante vers le Nord magnétique de la Terre.'
      ]
    },
    {
      title: '3. Le cadran et la rose des vents',
      content: [
        'Le fond du boîtier de la boussole est habillé par un cadran appelé la rose des vents. Ce cadran circulaire indique les directions.',
        'On y trouve d\'abord les quatre points cardinaux principaux : le Nord (N), le Sud (S), l\'Est (E) et l\'Ouest (O ou W).',
        'Pour affiner l\'orientation, on utilise les points collatéraux ou intermédiaires : le Nord-Est (NE), le Sud-Est (SE), le Nord-Ouest (NO) et le Sud-Ouest (SO).',
        'Le cadran est également gradué de 0 à 360 degrés, le Nord correspondant précisément au degré 0 ou 360.'
      ]
    },
    {
      title: '4. Guide pratique : Comment utiliser une boussole sur le terrain',
      content: [
        "Pour utiliser correctement une boussole lors d'une sortie sur le terrain au Sénégal, l'élève doit suivre des consignes précises.",
        '1. Il faut tenir la boussole bien à plat, horizontalement dans la paume de la main, à hauteur de poitrine.',
        '2. Il est impératif de s\'éloigner de tout objet métallique lourd (voitures, poteaux électriques, structures en fer forgé) qui pourrait fausser le champ magnétique de l\'aiguille.',
        '3. On tourne ensuite le boîtier jusqu\'à ce que la ligne repère coïncide exactement avec la pointe aimantée indiquant le Nord.',
        '4. On peut alors lire instantanément toutes les autres directions environnantes.'
      ]
    }
  ],
  diagram: {
    title: 'Orientation et Boussole',
    root: 'LES OUTILS D\'ORIENTATION',
    branches: [
      {
        name: 'Observation Géographique',
        subtitle: 'Modes de recueil',
        items: ['Directe (terrain, marche, mesures)', 'Indirecte (cartes, photos aériennes, satellites)']
      },
      {
        name: 'La Boussole',
        subtitle: 'Principe physique',
        items: ['Aiguille aimantée sur pivot', 'Magnétisme terrestre', 'Indique toujours le Nord magnétique']
      },
      {
        name: 'Rose des Vents & Cadran',
        subtitle: 'Points de repère',
        items: ['Cardinaux : N, S, E, O', 'Collatéraux : NE, SE, NO, SO', 'Graduation de 0° à 360°']
      }
    ]
  },
  conclusion:
    "En conclusion, l'observation et la boussole forment le duo initial indispensable à tout géographe. Sans une observation rigoureuse, les données manquent ; sans boussole, le chercheur se perdrait, incapable de situer ses découvertes par rapport aux repères cardinaux de notre planète."
};

export const LESSON_3_GEOGRAPHIE_6EME: LessonContent = {
  id: 'geographie-6eme-lecon-3',
  number: 'Leçon 3',
  title: "L'initiation à la cartographie : orientation, échelle et légende",
  subject: 'Géographie',
  classLevel: '6ème',
  introduction:
    "La carte est le langage universel de la géographie. Elle permet de représenter de vastes portions d'espaces ou la Terre entière sur une feuille de papier ou un écran. Cette leçon guide l'élève de 6ème dans l'apprentissage de la lecture et de la compréhension d'une carte à travers la maîtrise de ses trois piliers techniques obligatoires : l'orientation, l'échelle et la légende.",
  fullText: `Leçon 3 : L'initiation à la cartographie : orientation, échelle et légende

Introduction : La carte est le langage universel de la géographie. Elle permet de représenter de vastes portions d'espaces ou la Terre entière sur une feuille de papier ou un écran. Cette leçon guide l'élève de 6ème dans l'apprentissage de la lecture et de la compréhension d'une carte à travers la maîtrise de ses trois piliers techniques obligatoires : l'orientation, l'échelle et la légende.

1. Qu'est-ce qu'une carte géographique ?
Une carte se définit mathématiquement et géographiquement comme une représentation plane, réduite, simplifiée et conventionnelle de la surface de la Terre ou d'une partie de celle-ci. Elle est plane car elle aplatit la forme sphérique du globe terrestre. Elle est réduite car il est impossible de dessiner un pays à sa taille réelle. Elle est simplifiée car elle ne montre que les éléments essentiels sélectionnés par le cartographe, et conventionnelle car elle utilise des symboles acceptés partout dans le monde.

2. L'orientation d'une carte
Pour qu'une carte soit scientifiquement exploitable, elle doit obligatoirement être orientée. Par convention internationale, le haut d'une carte routière, scolaire ou militaire indique presque toujours la direction du Nord. Pour lever toute ambiguïté, les cartographes dessinent systématiquement dans un coin du document une flèche d'orientation pointant vers le Nord ou une rose des vents miniature. Cela permet à l'utilisateur d'aligner le plan papier avec la réalité du terrain.

3. La notion d'échelle : numérique et graphique
L'échelle est le rapport constant entre la distance mesurée sur la carte et la distance réelle correspondante sur le terrain. Elle se présente sous deux formes. L'échelle numérique s'écrit sous forme de fraction, par exemple 1/100 000 (un cent-millième). Cela signifie que 1 centimètre mesuré avec une règle sur la carte représente en réalité 100 000 centimètres dans la nature (soit 1 kilomètre). L'échelle graphique est une ligne droite segmentée et graduée en kilomètres ou en mètres, agissant comme une règle pré-calculée directement imprimée sur le document.

4. La légende, la clé de décodage des symboles
Une carte sans légende est un dessin muet et incompréhensible. La légende rassemble, classe et explique la signification de tous les signes, couleurs et symboles géographiques utilisés sur la carte. On distingue trois types de symboles : Les symboles ponctuels (un point pour une ville, un triangle pour un sommet de montagne), les symboles linéaires (un trait bleu pour un fleuve comme le Saloum, un double trait rouge pour une route nationale) et les symboles de surface ou aplats de couleurs (du vert pour une forêt tropicale casamançaise, du jaune pour le désert de Louga).

Conclusion : En conclusion, la cartographie est un art de la réduction mathématique et de la symbolisation. La maîtrise de l'orientation, de l'échelle et de la légende confère à l'élève une autonomie complète pour décrypter n'importe quelle carte du monde.`,
  // LIAISON AVEC LA CARTE DU SÉNÉGAL
  senegalMap: {
    mode: 'cartographie',
    title: 'Mise en Pratique Cartographique sur la Carte du Sénégal',
    description:
      'Illustration interactive des trois piliers fondamentaux : orientation par la rose des vents (Nord), échelle graphique/numérique (1/2 500 000) et légende normalisée (symboles ponctuels, linéaires et de surface).'
  },
  sections: [
    {
      title: "1. Qu'est-ce qu'une carte géographique ?",
      content: [
        "Une carte se définit mathématiquement et géographiquement comme une représentation plane, réduite, simplifiée et conventionnelle de la surface de la Terre ou d'une partie de celle-ci.",
        "• Elle est plane car elle aplatit la forme sphérique du globe terrestre.",
        "• Elle est réduite car il est impossible de dessiner un pays à sa taille réelle.",
        "• Elle est simplifiée car elle ne montre que les éléments essentiels sélectionnés par le cartographe.",
        "• Elle est conventionnelle car elle utilise des symboles et des couleurs acceptés partout dans le monde."
      ]
    },
    {
      title: "2. L'orientation d'une carte",
      content: [
        "Pour qu'une carte soit scientifiquement exploitable, elle doit obligatoirement être orientée.",
        "Par convention internationale, le haut d'une carte routière, scolaire ou militaire indique presque toujours la direction du Nord.",
        "Pour lever toute ambiguïté, les cartographes dessinent systématiquement dans un coin du document une flèche d'orientation pointant vers le Nord ou une rose des vents miniature. Cela permet à l'utilisateur d'aligner le plan papier avec la réalité du terrain."
      ]
    },
    {
      title: "3. La notion d'échelle : numérique et graphique",
      content: [
        "L'échelle est le rapport constant entre la distance mesurée sur la carte et la distance réelle correspondante sur le terrain. Elle se présente sous deux formes :",
        "• L'échelle numérique s'écrit sous forme de fraction, par exemple 1/100 000 (un cent-millième). Cela signifie que 1 centimètre mesuré avec une règle sur la carte représente en réalité 100 000 centimètres dans la nature (soit 1 kilomètre).",
        "• L'échelle graphique est une ligne droite segmentée et graduée en kilomètres ou en mètres, agissant comme une règle pré-calculée directement imprimée sur le document."
      ]
    },
    {
      title: '4. La légende, la clé de décodage des symboles',
      content: [
        "Une carte sans légende est un dessin muet et incompréhensible. La légende rassemble, classe et explique la signification de tous les signes, couleurs et symboles géographiques utilisés sur la carte.",
        "On distingue trois types de symboles essentiels :",
        "1. Les symboles ponctuels : un point pour une ville (comme Dakar ou Thiès), un triangle pour un sommet de montagne (comme Nepen Diakha) ;",
        "2. Les symboles linéaires : un trait bleu pour un fleuve (comme le Saloum ou le fleuve Sénégal), un double trait rouge pour une route nationale ;",
        "3. Les symboles de surface ou aplats de couleurs : du vert pour une forêt tropicale casamançaise, du jaune pour les zones sahéliennes de Louga."
      ]
    }
  ],
  diagram: {
    title: 'Les Trois Piliers de la Cartographie',
    root: 'LA CARTE GÉOGRAPHIQUE',
    branches: [
      {
        name: '1. L\'Orientation',
        subtitle: 'Indique le Nord',
        items: ['Convention : le haut vers le Nord', 'Flèche d\'orientation', 'Rose des vents miniature']
      },
      {
        name: '2. L\'Échelle',
        subtitle: 'Rapport distance carte / terrain',
        items: ['Échelle numérique (ex: 1/100 000)', 'Échelle graphique (ligne graduée en km)', 'Permet de calculer les distances réelles']
      },
      {
        name: '3. La Légende',
        subtitle: 'Clé de décodage universelle',
        items: ['Symboles ponctuels (villes, sommets)', 'Symboles linéaires (fleuves, routes)', 'Symboles de surface (forêts, savanes, zones)']
      }
    ]
  },
  conclusion:
    "En conclusion, la cartographie est un art de la réduction mathématique et de la symbolisation. La maîtrise de l'orientation, de l'échelle et de la légende confère à l'élève une autonomie complète pour décrypter n'importe quelle carte du monde."
};
