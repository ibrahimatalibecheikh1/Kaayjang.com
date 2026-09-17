import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE 5ÈME - PREMIÈRE PARTIE : INTRODUCTION & CHAPITRE I (DÉBUT)
// PROGRAMME OFFICIEL DU SÉNÉGAL - ENSEIGNEMENT MOYEN
// COURS INTÉGRAUX DÉTAILLÉS AVEC ENRICHISSEMENTS PÉDAGOGIQUES
// =========================================================================

export const LESSON_1_GEOGRAPHIE_5EME: LessonContent = {
  id: 'geo-5eme-lecon-1',
  number: 'LEÇON 1',
  title: 'INITIATION À LA CONSTRUCTION ET À L\'INTERPRÉTATION DES CARTES ET DES GRAPHIQUES',
  subject: 'Géographie',
  classLevel: '5ème',
  introduction: `La géographie est la science qui étudie et décrit l'organisation de l'espace terrestre et les interactions entre les sociétés humaines et leur milieu naturel. Pour accomplir cette mission, le géographe ne se contente pas de textes narratifs : il s'appuie sur deux langages visuels fondamentaux universels : la carte géographique et le graphique statistique. En classe de 5ème, l'élève apprend non seulement à décoder ces documents essentiels, mais également à maîtriser les calculs d'échelle, les règles de sémiologie graphique (le langage des couleurs et des formes) et une démarche méthodologique rigoureuse en quatre étapes pour interpréter n'importe quel document géographique avec clarté et précision scientifique.`,
  sections: [
    {
      title: 'I. LES OUTILS DE REPRÉSENTATION CARTOGRAPHIQUE',
      content: [
        `Une carte est une représentation géométrique plane, simplifiée, conventionnelle et réduite de tout ou partie de la surface de la Terre. Parce que la Terre est sphérique, la carte est le résultat d'une projection mathématique sur une surface plane.`,
        `Pour qu'une carte soit scientifiquement exploitable et compréhensible par tous, elle doit obligatoirement comporter quatre composantes fondamentales : l'échelle, la légende, l'orientation et le titre.`
      ],
      subsections: [
        {
          subtitle: 'A. L\'échelle : rapport de réduction et calculs pratiques',
          content: [
            `L'échelle est le rapport mathématique constant entre la distance mesurée sur la carte (en centimètres) et la distance réelle correspondante mesurée sur le terrain (convertie dans la même unité).`,
            `• L'échelle numérique : Elle se présente sous la forme d'une fraction dont le numérateur est toujours 1. Par exemple : 1/10 000, 1/50 000 ou 1/1 000 000.`,
            `  - Exemple 1/50 000 signifie : 1 cm sur la carte représente 50 000 cm sur le terrain (soit 500 m ou 0,5 km).`,
            `  - Exemple 1/1 000 000 signifie : 1 cm sur la carte équivaut à 1 000 000 cm dans la réalité (soit 10 000 m ou 10 km).`,
            `• L'échelle graphique : C'est une ligne droite ou un segment gradué en sous-multiples (mètres ou kilomètres) qui permet de lire directement les distances réelles à l'aide d'un double décimètre ou d'une bandelette de papier sans faire de calcul complexe. Son grand avantage est qu'elle reste toujours exacte si la carte est agrandie ou réduite lors d'une photocopie.`,
            `• Règle de calcul pour l'élève de 5ème :`,
            `  - Pour trouver la distance réelle (D) : D = distance sur la carte (d) × dénominateur de l'échelle.`,
            `  - Application concrète : Sur une carte routière du Sénégal au 1/1 000 000, la distance mesurée à la règle entre Dakar et Thiès est de 7 cm. Distance réelle = 7 cm × 1 000 000 = 7 000 000 cm = 70 km !`
          ],
          table: {
            headers: ["Type d'échelle", "Échelle numérique type", "Équivalence réelle pour 1 cm", "Usage principal en géographie"],
            rows: [
              ["Grande échelle", "1/10 000 à 1/25 000", "1 cm = 100 m à 250 m", "Plans de villes, quartiers (Dakar Plateau), parcelles agricoles"],
              ["Moyenne échelle", "1/50 000 à 1/100 000", "1 cm = 500 m à 1 km", "Cartes topographiques, arrondissements, forêts classées"],
              ["Petite échelle", "1/500 000 à 1/10 000 000", "1 cm = 5 km à 100 km", "Cartes d'un pays entier (Sénégal), cartes des continents, planisphères mondiaux"]
            ]
          }
        },
        {
          subtitle: 'B. La légende, l\'orientation et le titre',
          content: [
            `• La légende : C'est le dictionnaire ou le code de la carte. Elle rassemble et explique la signification exacte de tous les symboles, teintes et textures utilisés. En cartographie, on distingue trois grandes familles de figurés :`,
            `  1. Les figurés ponctuels : Petits points, carrés, cercles ou pictogrammes indiquant un lieu précis isolé (ex : un carré noir pour une capitale comme Dakar, un cercle pour un chef-lieu régional comme Saint-Louis, une pirogue pour un quai de pêche).`,
            `  2. Les figurés linéaires : Lignes continues ou discontinues matérialisant des réalités continues dans l'espace (ex : ligne bleue pour le fleuve Sénégal, trait noir épais pour une voie ferrée, double trait rouge pour une route nationale goudronnée, tiretés pour une frontière d'État).`,
            `  3. Les figurés de surface : Couleurs plates, dégradés ou hachures couvrant une zone étendue (ex : vert pour les forêts denses de Casamance, ocre/jaune pour la steppe du Ferlo, bleu pour l'océan Atlantique ou le Lac de Guiers).`,
            `• L'orientation : Elle indique la direction géographique du Nord magnétique ou géographique, représentée par une flèche orientée vers le haut de la carte ou par une rose des vents avec les quatre points cardinaux (Nord, Sud, Est, Ouest).`,
            `• Le titre : Il doit obligatoirement être clair, précis et complet. Il indique le thème cartographié, le lieu géographique concerné et la date de validité des données (ex : « Carte administrative des 14 régions du Sénégal en 2024 »).`
          ]
        }
      ]
    },
    {
      title: 'II. LES GRAPHIQUES EN GÉOGRAPHIE : FORMES ET USAGES',
      content: [
        `Les graphiques constituent un outil statistique essentiel qui permet de traduire visuellement des tableaux de chiffres complexes en représentations graphiques immédiatement compréhensibles.`,
        `Selon la nature des données observées, le géographe choisit un type de graphique spécifique.`
      ],
      subsections: [
        {
          subtitle: 'A. Les trois grands types de graphiques scolaires',
          content: [
            `1. Le diagramme en barres (ou bâtons) :`,
            `  - Définition : Graphique composé de rectangles verticaux ou horizontaux de même largeur, dont la hauteur ou la longueur est strictement proportionnelle à la valeur numérique représentée.`,
            `  - Utilisation : C'est l'outil idéal pour comparer des grandeurs distinctes à une date donnée (ex : comparer la population des villes de Dakar, Touba, Thiès, Kaolack et Ziguinchor).`,
            `2. Le diagramme circulaire ou semi-circulaire (« camembert ») :`,
            `  - Définition : Disque ou demi-disque divisé en secteurs angulaires, où chaque part est proportionnelle à la part relative (en pourcentage %) d'une composante dans un ensemble total égal à 100 %.`,
            `  - Règle de tracé : Pour un cercle complet (360°), angle = pourcentage × 3,6°. Pour un demi-cercle (180°), angle = pourcentage × 1,8°.`,
            `  - Utilisation : Idéal pour montrer la répartition d'un tout (ex : répartition des religions au Sénégal, ou répartition des ethnies wolof, sérère, pulaar, diola).`,
            `3. La courbe d'évolution temporelle :`,
            `  - Définition : Ligne brisée ou continue reliant des points dans un repère orthonormé composé de deux axes (l'axe horizontal des abscisses X représentant le temps : mois ou années ; l'axe vertical des ordonnées Y représentant la valeur du phénomène mesuré).`,
            `  - Utilisation : Outil indispensable pour étudier la variation d'un phénomène dans la durée (ex : évolution de la population sénégalaise de 1960 à nos jours, ou courbe des températures moyennes mensuelles à Matam).`
          ],
          table: {
            headers: ["Type de graphique", "Disposition visuelle", "Données recommandées", "Exemple géographique sénégalais"],
            rows: [
              ["Diagramme en barres / bâtons", "Colonnes verticales ou barres horizontales", "Comparaison de valeurs distinctes", "Production arachidière par région en tonnes"],
              ["Diagramme circulaire (camembert)", "Disque découpé en parts d'angles proportionnels", "Répartition en % d'un ensemble total (100%)", "Répartition de la population active par secteur économique (primaire, secondaire, tertiaire)"],
              ["Courbe d'évolution", "Ligne continue reliant des points temporels", "Variations d'un phénomène continu dans le temps", "Courbe des précipitations mensuelles de Tambacounda (janvier à décembre)"],
              ["Diagramme ombrothermique", "Superposition de barres bleues (pluies P) et courbe rouge (T°)", "Croisement Climat : P = 2T (seuil d'aridité)", "Diagramme climatique de Podor ou Ziguinchor"]
            ]
          }
        }
      ]
    },
    {
      title: 'III. MÉTHODE D\'INTERPRÉTATION D\'UN DOCUMENT GÉOGRAPHIQUE',
      content: [
        `Face à une carte, un graphique ou un tableau statistique en devoir ou à l'examen du BFEM, l'élève ne doit pas improviser. Il doit appliquer rigoureusement la démarche scientifique en quatre étapes :`
      ],
      subsections: [
        {
          subtitle: 'A. La démarche scientifique d\'analyse en 4 étapes',
          content: [
            `1. Étape 1 : Présentation du document (Qui ? Quoi ? Où ? Quand ?)`,
            `   - Préciser la nature exacte du document (carte thématique, diagramme circulaire, courbe d'évolution, tableau statistique).`,
            `   - Citer le titre complet sans omission.`,
            `   - Identifier la source officielle (ex : ANSD - Agence Nationale de la Statistique et de la Démographie, Ministère de l'Environnement, Banque Mondiale) et la date de publication.`,
            `2. Étape 2 : Description des faits observables (Que voit-on objectivement ?)`,
            `   - Observer les données avec neutralité sans chercher à les expliquer immédiatement.`,
            `   - Relever les tendances générales (hausse continue, stabilité, baisse prononcée).`,
            `   - Relever avec précision les extrêmes : la valeur maximale (le pic), la valeur minimale (le creux) et l'écart entre eux.`,
            `3. Étape 3 : Explication géographique (Pourquoi observe-t-on cela ?)`,
            `   - C'est le cœur de l'analyse : mobiliser ses connaissances du cours pour expliquer les causes géographiques, climatiques, historiques ou économiques des faits constatés.`,
            `   - Exemple : Si la courbe des pluies s'élève brutalement entre juillet et septembre, expliquer le rôle de la mousson océanique et de la remontée vers le nord du Front Intertropical (FIT).`,
            `4. Étape 4 : Synthèse et conclusion critique (Quelle est la portée du document ?)`,
            `   - Résumer en une ou deux phrases l'enseignement majeur du document.`,
            `   - Ouvrir sur les conséquences socio-économiques ou territoriales (ex : nécessité de construire des forages pour compenser le déficit pluviométrique).`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Les Outils Fondamentaux du Géographe en 5ème',
    root: 'OUTILS DU GÉOGRAPHE',
    branches: [
      {
        name: 'LA CARTE',
        subtitle: 'Représentation plane et réduite',
        items: [
          'Échelle : Numérique (1/100 000) ou Graphique',
          'Légende : Figurés ponctuels, linéaires et de surface',
          'Orientation : Flèche du Nord et rose des vents',
          'Titre : Sujet, espace géographique et date'
        ]
      },
      {
        name: 'LES GRAPHIQUES',
        subtitle: 'Traduction visuelle des statistiques',
        items: [
          'Diagramme en barres : Comparer des quantités',
          'Diagramme circulaire : Répartition en % d\'un tout (100%)',
          'Courbe d\'évolution : Variations dans le temps (axe X / Y)',
          'Ombrothermique : Précipitations (P) et Températures (T)'
        ]
      },
      {
        name: 'DÉMARCHE D\'ANALYSE',
        subtitle: 'Méthode scientifique en 4 étapes',
        items: [
          '1. Présentation : Nature, titre, source, date',
          '2. Description : Tendances, pics, creux, régularités',
          '3. Explication : Recherche des causes géographiques',
          '4. Synthèse : Bilan et portée générale'
        ]
      }
    ]
  },
  senegalMap: {
    mode: 'cartographie',
    title: 'Visualisation cartographique des outils du géographe',
    description: 'Comprendre l\'orientation, les coordonnées et les échelles appliquées au territoire national du Sénégal.'
  },
  conclusion: `La maîtrise des cartes et des graphiques confère à l'élève une autonomie intellectuelle indispensable : elle transforme des chiffres abstraits et des paysages complexes en connaissances ordonnées et exploitables. Grâce à la rigueur des calculs d'échelle et au respect de la méthode en quatre étapes (Présentation, Description, Explication, Synthèse), l'élève de 5ème dispose de toutes les clés pour aborder avec succès l'étude physique, humaine et économique du territoire sénégalais.`,
  fullText: `LEÇON 1 : INITIATION À LA CONSTRUCTION ET À L'INTERPRÉTATION DES CARTES ET DES GRAPHIQUES

INTRODUCTION : LES OUTILS DU GÉOGRAPHE
La carte est une représentation géométrique, plane, simplifiée et réduite de tout ou partie de la surface terrestre. Pour la construire et la lire, le géographe utilise plusieurs éléments fondamentaux : l'échelle (rapport entre la distance sur la carte et la distance réelle, exprimée sous forme numérique comme 1/10 000 ou graphique), la légende (système de symboles, de couleurs et de figurés ponctuels, linéaires ou de surface qui traduisent les informations), l'orientation (généralement indiquée par la flèche du Nord) et le titre.

II. Les graphiques en géographie : Les graphiques permettent de traduire des données statistiques chiffrées en expressions visuelles faciles à analyser. Les principaux types de graphiques utilisés sont : le diagramme en barres ou bâtons (idéal pour comparer des données entre elles), le diagramme circulaire ou semi-circulaire (dit en 'camembert', utilisé pour montrer la répartition en pourcentages d'un tout), et la courbe d'évolution (courbe linéaire montrant les variations d'un phénomène dans le temps, comme la croissance démographique ou les températures mensuelles).

III. Méthode d'interprétation : L'analyse d'un document géographique suit une démarche rigoureuse : 1. Présentation du document (nature, titre, source, date) ; 2. Description des faits observables (constater les tendances, les pics, les baisses ou les régularités) ; 3. Explication (rechercher les causes des phénomènes observés) ; 4. Synthèse (résumer l'intérêt géographique du document).`
};

export const LESSON_2_GEOGRAPHIE_5EME: LessonContent = {
  id: 'geo-5eme-lecon-2',
  number: 'LEÇON 2',
  title: 'ÉTUDE DE SITUATION DU SÉNÉGAL',
  subject: 'Géographie',
  classLevel: '5ème',
  introduction: `Situer un pays est la première démarche indispensable en géographie : cela permet de comprendre son climat, ses opportunités économiques maritimes, ses relations diplomatiques avec ses voisins et ses atouts stratégiques mondiaux. Le Sénégal occupe une position géographique privilégiée et tout à fait singulière sur la planète : il constitue la pointe la plus avancée du continent africain vers l'océan Atlantique. Cette leçon étudie la situation absolue (coordonnées mathématiques), la situation relative (frontières et enclavement gambien) ainsi que l'importance géopolitique et économique de cette position exceptionnelle de carrefour intercontinental.`,
  sections: [
    {
      title: 'I. SITUATION ABSOLUE : COORDONNÉES GÉOGRAPHIQUES ET SUPERFICIE',
      content: [
        `La situation absolue correspond à l'adresse astronomique exacte d'un pays sur le globe terrestre, déterminée par le quadrillage des parallèles (latitudes) et des méridiens (longitudes).`
      ],
      subsections: [
        {
          subtitle: 'A. Coordonnées extrêmes du Sénégal',
          content: [
            `• En latitude (par rapport à l'Équateur) : Le Sénégal est situé dans l'hémisphère Nord, entre 12°20\' de latitude Nord (au Sud, près de la frontière guinéenne) et 16°41\' de latitude Nord (au Nord, sur le coude septentrional du fleuve Sénégal près de Podor et Dagana).`,
            `  - Conséquence climatique majeure : Situé entièrement dans la zone intertropicale chaude, le pays ne connaît jamais d'hiver thermique (pas de neige ni de gel), mais une alternance saisonnière régie par le régime des pluies.`,
            `• En longitude (par rapport au méridien de Greenwich) : Le Sénégal est situé dans l'hémisphère Ouest (Occidental), entre 11°21\' de longitude Ouest (à l'Est, sur la rivière Falémé marquant la frontière malienne) et 17°32\' de longitude Ouest (à l'Ouest, à la Pointe des Almadies).`,
            `• La Pointe des Almadies : Située sur la presqu'île du Cap-Vert à Dakar, la pointe des Almadies (17°32' Ouest) est le point le plus occidental de tout le continent africain. C'est le « nez » de l'Afrique avançant vers le continent américain.`,
            `• La superficie nationale : Le territoire sénégalais couvre une superficie totale de 196 722 km². C'est un pays de taille moyenne à l'échelle africaine, environ le tiers de la France ou deux fois la superficie du Portugal.`
          ],
          table: {
            headers: ["Point cardinal extrême", "Localisation précise au Sénégal", "Coordonnée géographique", "Signification géographique"],
            rows: [
              ["Extrême Nord", "Dagana / Île à Morfil (Fleuve Sénégal)", "16°41' Nord", "Limite sahélienne la plus proche du désert saharien"],
              ["Extrême Sud", "Frontière avec la Guinée (près de Salémata/Niaguis)", "12°20' Nord", "Zone subguinéenne humide et forestière"],
              ["Extrême Ouest", "Pointe des Almadies (Dakar)", "17°32' Ouest", "Point le plus à l'Ouest du continent africain entier"],
              ["Extrême Est", "Confluent Falémé - Fleuve Sénégal (Mali)", "11°21' Ouest", "Porte du continent continental intérieur"]
            ]
          }
        }
      ]
    },
    {
      title: 'II. SITUATION RELATIVE ET LIMITES GÉOGRAPHIQUES DU PAYS',
      content: [
        `La situation relative définit la position du Sénégal par rapport aux mers, océans et pays qui l'entourent immédiatement.`
      ],
      subsections: [
        {
          subtitle: 'A. La façade maritime atlantique',
          content: [
            `À l'Ouest, le Sénégal s'ouvre généreusement sur l'océan Atlantique par une longue façade maritime d'environ 700 kilomètres de côtes.`,
            `Cette façade se compose de deux grands secteurs :`,
            `• La Grande Côte (de Saint-Louis à Dakar) : Bordée de cordons dunaires vifs et de la zone maraîchère fertile des Niayes.`,
            `• La Petite Côte et le littoral du Sud (de Rufisque à la Casamance, en passant par Mbour, Joal et le delta du Saloum) : Littoral plus abrité, riche en baies, mangroves et plages propices au tourisme balnéaire et à la pêche artisanale.`
          ]
        },
        {
          subtitle: 'B. Les cinq frontières terrestres et la singularité gambienne',
          content: [
            `Le Sénégal partage ses frontières terrestres avec cinq pays voisins :`,
            `1. Au Nord et Nord-Est avec la Mauritanie : Frontière naturelle continue de plus de 800 km tracée par le cours du fleuve Sénégal.`,
            `2. À l'Est avec le Mali : Frontière délimitée en grande partie par le cours d'eau de la rivière Falémé (affluent majeur du fleuve Sénégal).`,
            `3. Au Sud-Est avec la République de Guinée (Guinée-Conakry) : Frontière marquée par les contreforts montagneux du Fouta-Djalon.`,
            `4. Au Sud avec la Guinée-Bissau : Frontière délimitant les forêts et rizières de la basse Casamance.`,
            `5. L'enclavement géopolitique unique de la Gambie :`,
            `  - Héritage de la colonisation (rivalité franco-britannique du XIXe siècle), la République de Gambie est un État souverain qui forme une bande étroite de terre de 25 à 50 km de large s'enfonçant à l'intérieur du Sénégal sur plus de 300 kilomètres, le long des deux rives du fleuve Gambie.`,
            `  - À l'exception de sa petite façade océanique à l'Ouest, la Gambie est totalement enclavée dans le Sénégal.`,
            `  - Conséquence majeure : Elle sépare physiquement le Sénégal du Nord des régions méridionales de la Casamance (Ziguinchor, Sédhiou, Kolda). Pendant des décennies, la traversée nécessitait de longs bacs fluviaux ou un détour de plusieurs centaines de kilomètres par Tambacounda. Depuis 2019, l'inauguration du pont Sénégambie (à Farafenni) facilite grandement la continuité territoriale et les échanges.`
          ]
        }
      ]
    },
    {
      title: 'III. IMPORTANCE STRATÉGIQUE DE LA POSITION GÉOGRAPHIQUE DU SÉNÉGAL',
      content: [
        `La position géographique du Sénégal lui confère un rôle de premier plan à l'échelle régionale et mondiale :`,
        `• Une plaque tournante commerciale maritime : Le Port Autonome de Dakar (PAD) bénéficie d'une rade protégée en eau profonde et constitue le premier port d'escale pour les navires marchands effectuant la liaison entre l'Europe, l'Amérique du Sud et l'Afrique australe. C'est également le port naturel de transit pour le Mali enclavé.`,
        `• Un carrefour aérien international : L'Aéroport International Blaise Diagne (AIBD) de Diass est l'un des hubs les plus modernes d'Afrique de l'Ouest, reliant Dakar aux grandes capitales d'Europe, des Amériques et d'Afrique.`,
        `• Connexion numérique mondiale : C'est sur les côtes sénégalaises que se raccordent les grands câbles sous-marins internationaux en fibre optique (ACE, Atlantis 2) reliant l'Afrique au reste du globe.`
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Situation Géographique et Limites du Sénégal',
    root: 'SITUATION DU SÉNÉGAL',
    branches: [
      {
        name: 'SITUATION ABSOLUE',
        subtitle: '196 722 km² • Zone intertropicale',
        items: [
          'Latitudes : 12°20\' N à 16°41\' N (chaud toute l\'année)',
          'Longitudes : 11°21\' W à 17°32\' W',
          'Pointe des Almadies : Extrême Ouest du continent africain'
        ]
      },
      {
        name: 'LIMITES ET FRONTIÈRES',
        subtitle: 'Façade atlantique + 5 pays voisins',
        items: [
          'Ouest : Océan Atlantique (700 km de littoral)',
          'Nord : Mauritanie (fleuve Sénégal)',
          'Est : Mali (rivière Falémé)',
          'Sud : Guinée et Guinée-Bissau',
          'Enclave : Gambie (divise le Nord et la Casamance)'
        ]
      },
      {
        name: 'ATOUTS GÉOPOLITIQUES',
        subtitle: 'Carrefour stratégique mondial',
        items: [
          'Port Autonome de Dakar (eau profonde, escale maritime)',
          'AIBD : Hub aérien vers Europe, Amérique et Afrique',
          'Desserte des pays de l\'hinterland enclavés (Mali)',
          'Atterrissement des câbles sous-marins de télécommunication'
        ]
      }
    ]
  },
  senegalMap: {
    mode: 'administrative',
    title: 'Carte de situation et frontières du Sénégal',
    description: 'Façade atlantique de 700 km, les 5 frontières terrestres et l\'enclave gambienne.'
  },
  conclusion: `Grâce à ses 196 722 km², ses coordonnées intertropicales et sa pointe avancée des Almadies, le Sénégal dispose d'un emplacement géostratégique exceptionnel. Cette situation d'ouverture maritime sur l'Atlantique en fait une porte d'entrée majeure vers l'Afrique de l'Ouest et un carrefour incontournable du commerce mondial, tout en imposant le défi permanent du désenclavement de la Casamance à travers l'espace gambien.`,
  fullText: `LEÇON 2 : ÉTUDE DE SITUATION DU SÉNÉGAL

CHAPITRE I : LES ASPECTS PHYSIQUES DU SÉNÉGAL
I. Situation absolue (coordonnées géographiques) : Le Sénégal est situé à l'extrémité occidentale de l'Afrique. Il est compris entre les latitudes 12°20 et 16°41 Nord, et les longitudes 11°21 et 17°32 Ouest. Son point le plus à l'ouest, la pointe des Almadies (Dakar), constitue également le point le plus occidental du continent africain. Le territoire s'étend sur une superficie de 196 722 km².

II. Situation relative et limites : Le Sénégal est une façade maritime ouverte sur l'océan Atlantique à l'ouest, avec environ 700 km de côtes. Il partage ses frontières terrestres avec cinq pays : la Mauritanie au nord et au nord-est (frontière naturelle tracée par le fleuve Sénégal), le Mali à l'est (délimité en partie par la rivière Falémé), la Guinée au sud-est et la Guinée-Bissau au sud. Une particularité géopolitique unique est l'enclavement de la République de la Gambie, qui s'enfonce à l'intérieur du Sénégal sur plus de 300 km le long du fleuve Gambie, divisant le pays entre le Nord et la région sud de la Casamance.

III. Importance de la position géographique : Cette position stratégique fait du Sénégal une plaque tournante commerciale et un carrefour maritime et aérien majeur entre l'Afrique, l'Europe et les Amériques, notamment grâce aux infrastructures du Port Autonome de Dakar.`
};

export const LESSON_3_GEOGRAPHIE_5EME: LessonContent = {
  id: 'geo-5eme-lecon-3',
  number: 'LEÇON 3',
  title: 'LA STRUCTURE GÉOLOGIQUE ET LE RELIEF DU SÉNÉGAL',
  subject: 'Géographie',
  classLevel: '5ème',
  introduction: `La forme extérieure d'un pays (son relief) est le résultat direct de son histoire géologique enfouie dans le sous-sol : la nature des roches, leur ancienneté et les forces d'érosion qui les ont façonnées au fil de centaines de millions d'années. Au Sénégal, le sous-sol se divise nettement en deux domaines contrastés : un immense bassin sédimentaire récent et un vieux socle rocheux cristallin très ancien. Cette structure géologique explique pourquoi le relief sénégalais est globalement très plat et peu vigoureux, dominé par de vastes plaines et de modestes plateaux, avec pour seule exception montagnarde les contreforts du Fouta-Djalon au Sud-Est.`,
  sections: [
    {
      title: 'I. LA STRUCTURE GÉOLOGIQUE DU SÉNÉGAL',
      content: [
        `Le sous-sol du Sénégal est composé de deux ensembles géologiques dissemblables par leur âge, leur composition minéralogique et leur étendue :`
      ],
      subsections: [
        {
          subtitle: 'A. Le bassin sédimentaire sénégalo-mauritanien (75 % du territoire)',
          content: [
            `• Superficie et localisation : Il s'étend sur près des trois quarts (75 %) du pays, couvrant tout le Centre, l'Ouest, le Nord et le Sud-Ouest. C'est la plus grande province géologique du pays.`,
            `• Époque de formation : Formé au cours des ères secondaire (Mésozoïque) et tertiaire (Cénozoïque), puis recouvert de sables au quaternaire. Durant ces périodes, la mer a envahi le continent (transgression marine) puis s'est retirée (régression) à plusieurs reprises, déposant des couches épaisses horizontales de sédiments marins.`,
            `• Nature des roches : On y trouve des roches meubles et tendres : sables dunaires, argiles, marnes, grès, calcaires coquilliers et phosphates.`,
            `• Richesses économiques associées :`,
            `  - Phosphates : Gisements mondialement renommés de Taïba (région de Thiès) et de Matam (Bofal), utilisés pour les engrais agricoles et l'acide phosphorique.`,
            `  - Calcaires : Exploités pour la fabrication du ciment (cimenteries de Bargny, Rufisque et Kirène).`,
            `  - Sables minéralisés (ilménite, zircon, rutile) : Exploités le long du littoral de la Grande Côte (complexe minier de Grande Côte Operations à Diogo).`,
            `  - Hydrocarbures en mer (offshore) : Découvertes majeures de pétrole (champ de Sangomar) et de gaz naturel (champ de Grand Tortue Ahmeyim - GTA à la frontière mauritanienne, et Yakaar-Teranga).`
          ]
        },
        {
          subtitle: 'B. Le socle précambrien du Sénégal oriental (25 % du territoire)',
          content: [
            `• Superficie et localisation : Situé exclusivement à l'extrême Sud-Est du pays, dans les régions administratives de Kédougou et l'Est de Tambacounda.`,
            `• Époque de formation : C'est la partie la plus ancienne du territoire national, remontant à l'ère précambrienne (plus de deux milliards d'années).`,
            `• Nature des roches : Roches magmatiques et métamorphiques extrêmement dures, denses et cristallines (granites, quartzites, schistes, dolérites).`,
            `• Richesses minières métalliques : Ce sous-sol ancien est un véritable trésor géologique :`,
            `  - L'or : Gisements industriels majeurs de Sabodala et Mako, ainsi que nombreux sites d'orpaillage traditionnel.`,
            `  - Le minerai de fer : Immenses gisements non encore exploités de la Falémé (réserves estimées à plus de 600 millions de tonnes).`,
            `  - Autres métaux : Indices prometteurs d'uranium, de cuivre, de chrome et de marbre (marbre de Bandafassi).`
          ],
          table: {
            headers: ["Domaine géologique", "Proportion du pays", "Âge géologique", "Types de roches dominantes", "Principales ressources minières"],
            rows: [
              ["Bassin sédimentaire sénégalo-mauritanien", "75 % (Ouest, Centre, Nord)", "Ères secondaire et tertiaire (récent)", "Sables, argiles, calcaires, marnes, phosphates", "Phosphates (Taïba, Matam), calcaire à ciment, zircon (Diogo), pétrole/gaz"],
              ["Socle ancien précambrien", "25 % (Sud-Est, Kédougou)", "Précambrien (> 2 milliards d'années)", "Granites, quartzites, schistes cristallins (durs)", "Or (Sabodala), minerai de fer (Falémé), marbre (Bandafassi)"]
            ]
          }
        }
      ]
    },
    {
      title: 'II. LE RELIEF DU SÉNÉGAL : FORMES ET ENSEMBLES TOPOGRAPHIQUES',
      content: [
        `Le relief du Sénégal est remarquablement plat, régulier et peu vigoureux. Plus de 90 % du territoire national est situé à des altitudes inférieures à 100 mètres au-dessus du niveau de la mer.`,
        `On distingue sur le territoire trois grandes unités géomorphologiques : les plaines, les plateaux et les massifs montagneux du Sud-Est.`
      ],
      subsections: [
        {
          subtitle: 'A. Les plaines : l\'unité morphologique dominante',
          content: [
            `Les plaines recouvrent l'immense majorité des paysages sénégalais :`,
            `1. La vallée alluviale du fleuve Sénégal (au Nord) : Vaste plaine d'inondation très plate (le Walo) propice aux cultures irriguées (riz, canne à sucre) et le Dieri (terres exondées non inondables).`,
            `2. Les plaines du Ferlo : Immenses étendues planes et sablonneuses semi-désertiques au Centre-Nord, dédiées à l'élevage pastoral extensif.`,
            `3. Les plaines côtières et littorales : Les bas-fonds humides des Niayes le long de la Grande Côte et les plaines d'estuaires marécageuses de la Casamance et du Sine-Saloum.`
          ]
        },
        {
          subtitle: 'B. Les plateaux : de faibles ondulations sédimentaires',
          content: [
            `Les plateaux sont des étendues relativement planes où les cours d'eau ont creusé des vallées peu profondes :`,
            `• Le plateau de Thiès : Culminant entre 100 et 140 mètres d'altitude, il domine la plaine littorale par une falaise abrupte (falaise de Thiès) et abrite la forêt classée de Thiès.`,
            `• Les plateaux cuirassés du Ferlo et du Bassin arachidier : Recouverts d'une carapace de latérite ferrugineuse durcie.`,
            `• La presqu'île du Cap-Vert et les collines des Mamelles : Vestiges volcaniques récents du Quaternaire s'élevant à 105 mètres d'altitude à Dakar (surmontées du célèbre Phare des Mamelles).`
          ]
        },
        {
          subtitle: 'C. Les massifs et montagnes : l\'exception du Sud-Est',
          content: [
            `C'est la seule région du Sénégal qui présente un relief montagneux vigoureux, correspondant aux contreforts septentrionaux du massif guinéen du Fouta-Djalon :`,
            `• Localisation : Région de Kédougou (pays Bassari et Bédik).`,
            `• Paysage : Crêtes rocheuses, escarpements vertigineux, plateaux gréseux étagés et cascades spectaculaires (cascade de Dindéfélo haute de 100 m).`,
            `• Le point culminant du Sénégal : Il se situe sur la crête frontalière près du village de Nepen Diakha, s'élevant à environ 581 mètres d'altitude (longtemps estimé à 600 m). C'est le toit du Sénégal !`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Géologie et Relief du Sénégal',
    root: 'GÉOLOGIE & RELIEF DU SÉNÉGAL',
    branches: [
      {
        name: 'GÉOLOGIE',
        subtitle: 'Deux ensembles contrastés',
        items: [
          'Bassin sédimentaire (75%) : Sables, argiles, calcaires, phosphates',
          'Socle précambrien (25%) : Granites et schistes durs (Kédougou)',
          'Ressources sédimentaires : Phosphates, ciment, gaz, pétrole',
          'Ressources cristallines : Or (Sabodala), fer (Falémé)'
        ]
      },
      {
        name: 'RELIEF GÉNÉRAL',
        subtitle: 'Plat et monotone (< 200 m)',
        items: [
          'Plaines dominantes : Vallée du fleuve, Ferlo, plaines côtières',
          'Plateaux sédimentaires : Plateau de Thiès (100-140 m), Ferlo',
          'Reliefs volcaniques : Deux Mamelles de Dakar (105 m)'
        ]
      },
      {
        name: 'ZONE MONTAGNEUSE',
        subtitle: 'Contreforts du Fouta-Djalon (Sud-Est)',
        items: [
          'Localisation : Kédougou, pays Bassari',
          'Point culminant : Près de Nepen Diakha (environ 581 m)',
          'Sites remarquables : Cascades de Dindéfélo (100 m de chute)'
        ]
      }
    ]
  },
  senegalMap: {
    mode: 'relief',
    title: 'Carte du relief et de la géologie du Sénégal',
    description: 'Bassin sédimentaire occidental, socle cristallin de Kédougou et point culminant de Nepen Diakha (581 m).'
  },
  conclusion: `La topographie du Sénégal se caractérise par une remarquable harmonie : un relief plat et ouvert dominé par le grand bassin sédimentaire sur 75 % du territoire, facilitant l'agriculture, le peuplement et les communications terrestres, et une forteresse rocheuse au Sud-Est où le vieux socle précambrien recèle les plus grands trésors métalliques (or, fer) tout en dressant le sommet du pays à Nepen Diakha (581 m).`,
  fullText: `LEÇON 3 : LA STRUCTURE GÉOLOGIQUE ET LE RELIEF

I. La structure géologique : Le sous-sol sénégalais est constitué de deux grandes formations géologiques :
1. Le bassin sédimentaire sénégalo-mauritanien : Il occupe la majeure partie du territoire (environ 75%). Formé aux ères secondaire et tertiaire, il est composé de couches sédimentaires successives (sables, argiles, calcaires, phosphates).
2. Le socle précambrien : Situé à l'extrémité sud-est (Sénégal oriental), il est constitué de roches dures, anciennes et cristallines (granites, quartzites, schistes), riches en ressources minières comme l'or et le fer.

II. Le relief : Le relief du Sénégal est globalement plat et peu vigoureux, caractérisé par de faibles altitudes (généralement inférieures à 200 mètres). On distingue trois grands ensembles :
1. Les plaines : Elles dominent le paysage (vallée du fleuve Sénégal, plaines du Ferlo, plaines côtières).
2. Les plateaux : Formations sédimentaires de faible altitude, comme le plateau de Thiès (qui culmine à une centaine de mètres) ou les plateaux du Ferlo.
3. Les massifs et montagnes : Localisés uniquement dans le Sud-Est du pays. Ce sont les contreforts du massif du Fouta-Djalon. Le point culminant du pays se situe près de Nepen Diakha, s'élevant à environ 581 mètres d'altitude.`
};
