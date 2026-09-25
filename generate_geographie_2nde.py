# -*- coding: utf-8 -*-
import json

# =========================================================================
# LESSONS 1 to 20 - GÉOGRAPHIE SECONDE (SÉNÉGAL)
# =========================================================================

lessons_geographie = [
    {
        "num": 1,
        "title": "Les moyens de connaissance de l'Univers",
        "intro": "L’Univers désigne l’ensemble de l’espace, de la matière, de l’énergie, des galaxies, des étoiles, des planètes et des autres objets célestes. Son étude cherche à comprendre son organisation, son histoire et les phénomènes qui s’y produisent. L’être humain ne peut pas observer directement toutes les régions de l’Univers : il utilise donc des instruments, des méthodes de mesure et des modèles scientifiques.",
        "sections": [
            {
                "title": "I. L’observation de l’Univers",
                "content": ["Pendant longtemps, l’observation du ciel s’est faite à l’œil nu. Les astronomes repéraient les positions apparentes des étoiles, des planètes et de la Lune. L’invention de la lunette astronomique puis du télescope a permis d’observer des objets beaucoup plus lointains et de distinguer des détails invisibles à l’œil nu."]
            },
            {
                "title": "II. Les instruments modernes",
                "content": ["Les observatoires astronomiques utilisent des télescopes optiques, des radiotélescopes et des instruments sensibles à différentes longueurs d’onde. Les satellites et les sondes spatiales permettent d’effectuer des observations au-dessus de l’atmosphère terrestre et d’étudier directement certains objets ou environnements du système solaire."]
            },
            {
                "title": "III. Les informations fournies par la lumière",
                "content": ["La lumière provenant des astres constitue une source essentielle d’information. Son analyse permet notamment d’étudier la température, la composition chimique, les mouvements et certaines propriétés physiques des étoiles et des galaxies. Les décalages spectraux peuvent également renseigner sur le mouvement des objets par rapport à l’observateur."]
            },
            {
                "title": "IV. Les mesures et les modèles",
                "content": ["Les distances astronomiques sont très grandes. Les scientifiques utilisent donc des unités adaptées, notamment l’unité astronomique et l’année-lumière. Les observations sont confrontées à des calculs et à des modèles qui permettent de tester des hypothèses et d’expliquer les phénomènes observés."]
            }
        ],
        "conclusion": "La connaissance de l’Univers repose sur l’observation, la mesure, l’expérimentation indirecte, le traitement des données et la modélisation. Les progrès des instruments améliorent continuellement notre compréhension du cosmos."
    },
    {
        "num": 2,
        "title": "Les mouvements de la Terre",
        "intro": "La Terre n’est pas immobile. Elle effectue plusieurs mouvements dans l’espace. Les deux mouvements essentiels étudiés en géographie sont la rotation de la Terre sur elle-même et sa révolution autour du Soleil. Ces mouvements expliquent notamment l’alternance du jour et de la nuit, la mesure du temps et les saisons.",
        "sections": [
            {
                "title": "I. La rotation de la Terre",
                "content": ["La Terre tourne sur elle-même autour d’un axe imaginaire passant approximativement par les pôles. Elle effectue un tour complet en environ vingt-quatre heures. La rotation se fait d’ouest en est. Elle donne l’impression que le Soleil et les autres astres se déplacent d’est en ouest dans le ciel."]
            },
            {
                "title": "II. Conséquences de la rotation",
                "content": ["La rotation explique l’alternance du jour et de la nuit. À un moment donné, une moitié de la Terre est éclairée tandis que l’autre est dans l’obscurité. La rotation intervient aussi dans le calcul des heures locales et des fuseaux horaires. Elle participe enfin à certains phénomènes physiques comme la déviation des mouvements à grande échelle."]
            },
            {
                "title": "III. La révolution autour du Soleil",
                "content": ["La Terre se déplace autour du Soleil sur une orbite légèrement elliptique. Elle accomplit une révolution en environ 365 jours et un quart. C’est pourquoi le calendrier comporte une année bissextile selon des règles précises."]
            },
            {
                "title": "IV. L’inclinaison de l’axe terrestre et les saisons",
                "content": ["L’axe de rotation de la Terre est incliné par rapport au plan de son orbite. Cette inclinaison, combinée à la révolution autour du Soleil, entraîne une variation de l’angle d’arrivée des rayons solaires et de la durée du jour selon les périodes de l’année. Elle explique l’existence des saisons."]
            }
        ],
        "conclusion": "Les mouvements de la Terre sont essentiels pour comprendre l’organisation du temps géographique, l’alternance jour-nuit et le cycle annuel des saisons."
    },
    {
        "num": 3,
        "title": "Travaux pratiques : planètes, représentations de la Terre et coordonnées géographiques",
        "intro": "La compréhension du système solaire et de la Terre nécessite des méthodes précises de repérage et de représentation de l'espace. Les cartes et globes permettent de projeter la surface terrestre sphérique et d'établir des coordonnées géographiques universelles.",
        "sections": [
            {
                "title": "I. Les planètes du système solaire",
                "content": ["Le système solaire comprend le Soleil et les corps qui lui sont liés par la gravitation. Les huit planètes sont, dans l’ordre à partir du Soleil, Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Les quatre premières sont des planètes telluriques, principalement rocheuses. Les quatre dernières sont des planètes géantes."]
            },
            {
                "title": "II. Le globe terrestre",
                "content": ["Le globe est une représentation sphérique de la Terre. Il respecte mieux les formes générales et les rapports de position entre les continents et les océans qu’une représentation plane. Il permet de visualiser les pôles, l’équateur, les méridiens et les parallèles."]
            },
            {
                "title": "III. Les coordonnées géographiques",
                "content": ["Pour localiser précisément un point sur la Terre, on utilise la latitude et la longitude. La latitude mesure la distance angulaire par rapport à l’équateur, vers le nord ou vers le sud. La longitude mesure la distance angulaire par rapport au méridien origine, vers l’est ou vers l’ouest."]
            },
            {
                "title": "IV. Les principales lignes imaginaires",
                "content": ["L’équateur partage la Terre en deux hémisphères. Le méridien origine sert de référence pour la longitude. Les tropiques et les cercles polaires permettent également de repérer les grandes zones astronomiques de la planète."]
            },
            {
                "title": "V. Lire une carte",
                "content": ["La carte est une représentation plane et réduite de tout ou partie de la surface terrestre. Pour la lire, il faut identifier son titre, son orientation, sa légende, son échelle et les figurés utilisés. Les projections cartographiques entraînent toujours certaines déformations."]
            }
        ],
        "conclusion": "La maîtrise des outils cartographiques, du globe et des coordonnées géographiques est indispensable pour tout géographe afin de localiser, mesurer et analyser les phénomènes spatiaux à l'échelle du globe."
    },
    {
        "num": 4,
        "title": "La répartition des continents et des océans",
        "intro": "La surface terrestre est composée de terres émergées et de vastes étendues d’eau. Les continents et les océans sont inégalement répartis entre les deux hémisphères. Cette organisation influence les climats, les circulations atmosphériques et marines ainsi que les activités humaines.",
        "sections": [
            {
                "title": "I. Les continents",
                "content": ["On distingue généralement l’Afrique, l’Europe, l’Asie, l’Amérique, l’Océanie et l’Antarctique. Selon les conventions scolaires, l’Amérique peut être divisée en Amérique du Nord et Amérique du Sud. L’Asie et l’Europe forment une vaste continuité continentale appelée Eurasie."]
            },
            {
                "title": "II. Les océans et les mers",
                "content": ["Les principaux océans sont l’océan Pacifique, l’Atlantique, l’Indien, l’Arctique et l’océan Austral. Les mers sont des étendues d’eau généralement plus petites et souvent partiellement entourées par des terres. Les océans jouent un rôle majeur dans les échanges de chaleur et d’humidité."]
            },
            {
                "title": "III. Une répartition inégale",
                "content": ["Les terres émergées sont davantage présentes dans l’hémisphère Nord, tandis que l’hémisphère Sud est dominé par les océans. Cette répartition contribue à différencier les conditions climatiques et les paysages."]
            },
            {
                "title": "IV. Les conséquences géographiques",
                "content": ["Les océans constituent des voies de communication majeures et une source de ressources. Les littoraux concentrent de nombreuses populations et activités. Les grandes masses continentales influencent aussi la circulation atmosphérique et les contrastes thermiques."]
            }
        ],
        "conclusion": "La dissymétrie géographique entre terres émergées et domaines maritimes est un facteur clé déterminant la géopolitique mondiale, les circulations maritimes et les équilibres climatiques globaux."
    },
    {
        "num": 5,
        "title": "Les eaux marines",
        "intro": "Les eaux marines couvrent la majeure partie de la surface terrestre. Elles sont animées par des mouvements permanents qui résultent notamment des vents, des différences de température et de salinité, de la gravitation et des marées.",
        "sections": [
            {
                "title": "I. Les vagues",
                "content": ["Les vagues correspondent principalement à des mouvements de la surface de la mer provoqués par le vent. À l’approche des côtes, leur comportement change en fonction de la profondeur et de la configuration du littoral."]
            },
            {
                "title": "II. Les marées",
                "content": ["Les marées sont des variations périodiques du niveau de la mer liées principalement à l’attraction gravitationnelle de la Lune et du Soleil et au mouvement de la Terre. Elles comprennent alternativement des phases de montée et de descente du niveau marin."]
            },
            {
                "title": "III. Les courants marins",
                "content": ["Les courants marins sont des déplacements relativement organisés de masses d’eau. Les courants de surface sont fortement influencés par les vents et la rotation terrestre. Les différences de température et de salinité participent également aux circulations océaniques profondes."]
            },
            {
                "title": "IV. Le rôle des eaux marines",
                "content": ["Les océans régulent une partie de la température mondiale, transportent de la chaleur, participent au cycle de l’eau et abritent de nombreux écosystèmes. Ils fournissent aussi des ressources halieutiques, minérales et énergétiques."]
            }
        ],
        "conclusion": "Les eaux marines constituent le régulateur thermique essentiel de la biosphère et le moteur principal des équilibres atmosphériques de la Terre."
    },
    {
        "num": 6,
        "title": "Travaux pratiques : répartition des océans, mers et courants marins",
        "intro": "L'exercice de cartographie océanique permet de relier la dynamique des courants marins chauds et froids aux climats littoraux et aux corridors maritimes mondiaux.",
        "sections": [
            {
                "title": "I. Construire un planisphère schématique",
                "content": ["Pour réaliser un planisphère, on commence par tracer les contours simplifiés des principaux continents et par placer les océans. Il faut ensuite ajouter les éléments demandés en respectant une légende claire et une orientation."]
            },
            {
                "title": "II. Localiser les principaux courants",
                "content": ["Sur une carte mondiale, on distingue des courants chauds et des courants froids. Ils se déplacent selon des trajectoires générales liées à la circulation océanique. La représentation doit utiliser des figurés différents afin de rendre leur sens et leur nature lisibles."]
            },
            {
                "title": "III. Exploiter la carte",
                "content": ["La lecture d’une carte des courants permet de mettre en relation la circulation océanique et les conditions climatiques des littoraux. Elle permet également d’identifier les grandes façades maritimes et les espaces de forte circulation maritime."]
            }
        ],
        "conclusion": "La lecture cartographique des courants marins permet d'expliquer pourquoi certaines façades côtières sont arides (courants froids comme celui des Canaries au large du Sénégal) tandis que d'autres bénéficient de climats tempérés humides."
    },
    {
        "num": 7,
        "title": "L’atmosphère : structure et composition",
        "intro": "L’atmosphère est l’enveloppe gazeuse qui entoure la Terre. Elle est maintenue autour de la planète par la gravitation. Sa composition et sa structure déterminent de nombreux phénomènes météorologiques et climatiques.",
        "sections": [
            {
                "title": "I. Composition de l’atmosphère",
                "content": ["L’air sec est composé principalement de diazote et de dioxygène, auxquels s’ajoutent de faibles quantités d’autres gaz. La vapeur d’eau est variable dans l’espace et dans le temps. Les poussières et aérosols peuvent également être présents dans l’atmosphère."]
            },
            {
                "title": "II. Les principales couches",
                "content": ["La troposphère est la couche la plus proche du sol et le siège de la majorité des phénomènes météorologiques. Au-dessus se trouve la stratosphère, où se situe la majeure partie de l’ozone atmosphérique. Plus haut se trouvent la mésosphère, la thermosphère et les régions externes de l’atmosphère."]
            },
            {
                "title": "III. Le rôle de l’atmosphère",
                "content": ["L’atmosphère protège la surface terrestre contre une partie des rayonnements et contribue à maintenir des conditions thermiques compatibles avec la vie. Elle permet également le cycle de l’eau et la circulation des masses d’air."]
            }
        ],
        "conclusion": "L'atmosphère terrestre est une enveloppe protectrice dynamique dont la composition équilibrée et la stratification permettent le maintien de la vie et la circulation météorologique."
    },
    {
        "num": 8,
        "title": "Les facteurs du climat",
        "intro": "Le climat correspond aux conditions atmosphériques moyennes observées sur une longue période dans une région. Sa répartition mondiale dépend de plusieurs facteurs qui agissent ensemble.",
        "sections": [
            {
                "title": "I. La latitude",
                "content": ["La latitude est un facteur majeur car elle influence l’angle d’incidence des rayons solaires. Les régions proches de l’équateur reçoivent en moyenne davantage d’énergie solaire que les régions proches des pôles."]
            },
            {
                "title": "II. L’altitude",
                "content": ["Lorsque l’altitude augmente, la température de l’air diminue généralement dans la troposphère. Les reliefs peuvent aussi modifier les précipitations et créer des contrastes entre versants exposés et versants abrités."]
            },
            {
                "title": "III. La distance à la mer",
                "content": ["La mer se réchauffe et se refroidit plus lentement que les continents. Les régions côtières connaissent donc souvent des amplitudes thermiques plus faibles que les régions continentales."]
            },
            {
                "title": "IV. Les courants marins",
                "content": ["Les courants chauds peuvent adoucir certains littoraux tandis que les courants froids peuvent contribuer à abaisser les températures et à modifier l’humidité de l’air. Leur influence dépend de leur trajectoire et de la configuration régionale."]
            },
            {
                "title": "V. Les reliefs et la circulation atmosphérique",
                "content": ["Les montagnes constituent des obstacles aux masses d’air. Les grands systèmes de pression et les vents dominants participent également à la répartition des températures et des précipitations."]
            }
        ],
        "conclusion": "La combinaison de facteurs astronomiques (latitude), géographiques (altitude, continentalité) et aérologiques (pressions, vents) crée l'infinie variété des climats terrestres."
    },
    {
        "num": 9,
        "title": "Les éléments du climat",
        "intro": "L’étude d’un climat repose sur plusieurs éléments mesurables. Les principaux sont la température, les précipitations, la pression atmosphérique, l’humidité, les vents et la nébulosité.",
        "sections": [
            {
                "title": "I. La température",
                "content": ["La température indique le degré de chaleur de l’air. On étudie notamment les moyennes mensuelles, les moyennes annuelles, les maxima, les minima et l’amplitude thermique."]
            },
            {
                "title": "II. Les précipitations",
                "content": ["Les précipitations comprennent la pluie, la neige et la grêle. Elles sont mesurées avec un pluviomètre et exprimées généralement en millimètres. Leur répartition annuelle permet de distinguer différentes saisons humides et sèches."]
            },
            {
                "title": "III. La pression et les vents",
                "content": ["La pression atmosphérique correspond au poids exercé par la colonne d’air. Les différences de pression entraînent des mouvements d’air appelés vents. La direction et la vitesse des vents constituent des informations importantes pour l’analyse climatique."]
            },
            {
                "title": "IV. Les diagrammes climatiques",
                "content": ["Un diagramme climatique associe généralement les températures et les précipitations mensuelles. Il permet d’identifier les périodes sèches et humides, l’amplitude thermique et les caractéristiques générales d’un climat."]
            }
        ],
        "conclusion": "La mesure rigoureuse des paramètres thermiques, pluviométriques et barométriques est le fondement de la climatologie physique et de la prévision météorologique."
    },
    {
        "num": 10,
        "title": "Travaux pratiques : carte des climats et construction de diagrammes",
        "intro": "La méthode du diagramme ombrothermique (P = 2T) et la cartographie des zones climatiques constituent les exercices pratiques fondamentaux de la géographie de seconde.",
        "sections": [
            {
                "title": "I. Construire un diagramme climatique",
                "content": ["On commence par disposer les douze mois de l’année sur l’axe horizontal. Les précipitations sont représentées à l’aide d’une échelle adaptée et les températures par une courbe. La lecture doit tenir compte des unités et des échelles utilisées."]
            },
            {
                "title": "II. Déterminer les saisons",
                "content": ["La répartition mensuelle des précipitations permet de repérer les saisons humides et sèches. La température permet de préciser les variations thermiques annuelles. L’interprétation doit être fondée sur les données et non sur l’apparence seule du graphique."]
            },
            {
                "title": "III. Réaliser une carte climatique",
                "content": ["Une carte climatique nécessite une légende organisée. Les grands domaines climatiques sont localisés en fonction de la latitude, du relief, de la proximité des océans et de la circulation atmosphérique."]
            },
            {
                "title": "IV. Interpréter",
                "content": ["L’interprétation consiste à décrire la répartition spatiale, à rechercher les facteurs explicatifs et à relier les caractéristiques climatiques aux paysages et aux activités humaines."]
            }
        ],
        "conclusion": "L'interprétation combinée des diagrammes ombrothermiques et des cartes bioclimatiques permet de comprendre l'adaptation des sociétés agraires sénégalaises et mondiales aux rythmes des saisons."
    },
    {
        "num": 11,
        "title": "La tectonique des plaques et l’isostasie",
        "intro": "La surface solide de la Terre est organisée en grandes plaques lithosphériques mobiles. La tectonique des plaques permet d’expliquer une grande partie de la répartition des séismes, des volcans, des chaînes de montagnes et de certaines formes du relief.",
        "sections": [
            {
                "title": "I. Structure générale de la Terre",
                "content": ["La Terre est organisée en grandes enveloppes internes. La lithosphère, rigide, repose sur une partie plus ductile du manteau supérieur. Les mouvements internes de la planète sont liés à sa chaleur et aux transferts d’énergie dans son intérieur."]
            },
            {
                "title": "II. Les plaques lithosphériques",
                "content": ["Les plaques sont des ensembles rigides qui se déplacent les unes par rapport aux autres. Elles peuvent s’écarter, se rapprocher ou coulisser latéralement."]
            },
            {
                "title": "III. Les limites de plaques",
                "content": ["Aux dorsales océaniques, des matériaux remontent et contribuent à la formation de nouvelle lithosphère océanique. Dans les zones de convergence, une plaque peut s’enfoncer sous une autre, ou deux continents peuvent entrer en collision. Les limites transformantes correspondent à des mouvements de coulissage."]
            },
            {
                "title": "IV. L’isostasie",
                "content": ["L’isostasie désigne l’équilibre gravitaire relatif entre la lithosphère et les matériaux sous-jacents. Les variations de charge, par exemple l’érosion ou l’accumulation de glace, peuvent entraîner des mouvements verticaux de réajustement."]
            }
        ],
        "conclusion": "La théorie de la tectonique des plaques constitue la clé de voûte de la géologie moderne, unifiant l'orogenèse, la sismicité, le volcanisme et la dérive continentale."
    },
    {
        "num": 12,
        "title": "Les roches",
        "intro": "Les roches sont des matériaux naturels constitués d’un ou plusieurs minéraux. Elles constituent la croûte terrestre et participent à la formation des paysages.",
        "sections": [
            {
                "title": "I. Les roches magmatiques",
                "content": ["Elles résultent du refroidissement et de la solidification d’un magma. Lorsque le refroidissement a lieu en profondeur, les cristaux peuvent être relativement développés. Lorsqu’il se produit en surface, le refroidissement est généralement plus rapide."]
            },
            {
                "title": "II. Les roches sédimentaires",
                "content": ["Elles se forment à partir de matériaux déposés puis compactés et cimentés, ou par précipitation de substances dissoutes. Elles sont souvent disposées en couches et peuvent contenir des fossiles."]
            },
            {
                "title": "III. Les roches métamorphiques",
                "content": ["Elles résultent de la transformation de roches préexistantes sous l’effet de la pression, de la température et de fluides, sans fusion complète de la roche."]
            },
            {
                "title": "IV. Le cycle des roches",
                "content": ["Les roches peuvent être transformées au cours du temps. Une roche peut être altérée, érodée, transportée et déposée ; elle peut ensuite devenir sédimentaire ou subir des transformations métamorphiques. La fusion et la solidification peuvent produire de nouvelles roches magmatiques."]
            }
        ],
        "conclusion": "Le cycle perpétuel des roches illustre la dynamique de la lithosphère, transformant sans cesse la matière minérale sous l'action combinée des énergies interne et externe."
    },
    {
        "num": 13,
        "title": "Les grands types de structures et leur répartition",
        "intro": "La structure géologique désigne l’organisation des roches dans la croûte terrestre. Elle influence fortement les formes du relief et l’implantation de certains paysages.",
        "sections": [
            {
                "title": "I. Les structures horizontales",
                "content": ["Dans les régions où les couches sont peu déformées, la résistance différente des roches à l’érosion peut produire des plateaux, des corniches et des formes étagées."]
            },
            {
                "title": "II. Les structures plissées",
                "content": ["Les forces de compression peuvent déformer les couches rocheuses en plis. Les grands reliefs montagneux récents sont souvent associés à des structures plissées et à des zones de convergence des plaques."]
            },
            {
                "title": "III. Les structures faillées",
                "content": ["Une faille est une cassure accompagnée d’un déplacement relatif des blocs. Les mouvements peuvent être verticaux ou horizontaux. Les failles jouent un rôle important dans l’organisation de nombreux reliefs."]
            },
            {
                "title": "IV. Répartition mondiale",
                "content": ["Les grandes structures géologiques se répartissent selon l’histoire géologique des continents et les mouvements des plaques. Les chaînes récentes sont notamment associées aux zones de convergence, tandis que les vieux socles correspondent à des domaines continentaux anciens."]
            }
        ],
        "conclusion": "L'agencement structural guide l'érosion et détermine la morphologie des paysages géographiques : bassins sédimentaires calmes, rifts effondrés ou cordillères plissées."
    },
    {
        "num": 14,
        "title": "L’érosion",
        "intro": "L’érosion correspond à l’ensemble des processus qui désagrègent, enlèvent et transportent les matériaux de la surface terrestre. Elle transforme continuellement les reliefs.",
        "sections": [
            {
                "title": "I. L’altération",
                "content": ["L’altération modifie les roches sous l’action de l’eau, des variations de température, des gaz atmosphériques et des organismes vivants. Elle peut être mécanique ou chimique."]
            },
            {
                "title": "II. Le transport",
                "content": ["Les matériaux produits par l’altération peuvent être transportés par les eaux courantes, les glaciers, le vent ou les mouvements de gravité. La capacité de transport dépend notamment de l’énergie du milieu."]
            },
            {
                "title": "III. Le dépôt",
                "content": ["Lorsque l’énergie du milieu diminue, les matériaux transportés peuvent se déposer. Les dépôts successifs contribuent à former des plaines alluviales, des deltas, des dunes et d’autres formes sédimentaires."]
            },
            {
                "title": "IV. Les facteurs de l’érosion",
                "content": ["Le climat, la pente, la nature des roches, la végétation et les activités humaines influencent l’intensité de l’érosion. La déforestation, certaines pratiques agricoles et l’urbanisation peuvent accentuer le ruissellement et la perte des sols."]
            }
        ],
        "conclusion": "L'érosion est une force morphogénique majeure qui façonne la surface terrestre à travers le triptyque altération-transport-dépôt."
    },
    {
        "num": 15,
        "title": "Les formes de relief terrestre et leur répartition",
        "intro": "Le relief désigne les formes et les différences d’altitude de la surface terrestre. Il résulte de l’action combinée des forces internes de la Terre et des processus externes d’érosion et de sédimentation.",
        "sections": [
            {
                "title": "I. Les montagnes",
                "content": ["Les montagnes sont des reliefs élevés caractérisés par des pentes importantes. Elles peuvent être associées à des chaînes plissées, à des blocs soulevés ou à des édifices volcaniques."]
            },
            {
                "title": "II. Les plateaux",
                "content": ["Un plateau est une surface relativement élevée et généralement peu accidentée, limitée par des versants ou des ruptures de pente. Sa forme dépend de la structure géologique et de l’érosion."]
            },
            {
                "title": "III. Les plaines et bassins",
                "content": ["Les plaines sont des surfaces de faible relief. Elles peuvent être constituées de dépôts alluviaux, marins ou continentaux. Les bassins correspondent à des zones relativement déprimées susceptibles d’accumuler des sédiments."]
            },
            {
                "title": "IV. Les reliefs littoraux",
                "content": ["Les côtes présentent des falaises, plages, cordons littoraux, lagunes, estuaires et deltas. Leur évolution dépend de l’érosion marine, des vagues, des courants, des marées et des apports sédimentaires."]
            },
            {
                "title": "V. Répartition",
                "content": ["Les grands reliefs ne sont pas répartis au hasard. Les chaînes montagneuses sont fréquemment associées aux limites de plaques, tandis que les grandes plaines sédimentaires occupent notamment des bassins et des marges continentales."]
            }
        ],
        "conclusion": "La répartition des formes de relief résulte de l'incessant combat entre les forces endogènes d'édification (tectonique) et les forces exogènes d'aplanissement (érosion)."
    },
    {
        "num": 16,
        "title": "Travaux pratiques : carte des reliefs et initiation à la coupe topographique",
        "intro": "La coupe topographique est la technique graphique reine de la géomorphologie permettant de restituer le profil vertical du relief à partir d'une carte à courbes de niveau.",
        "sections": [
            {
                "title": "I. Lire une carte topographique",
                "content": ["Une carte topographique représente le relief à l’aide notamment de courbes de niveau. Une courbe de niveau relie des points de même altitude. L’écart d’altitude entre deux courbes successives est appelé équidistance."]
            },
            {
                "title": "II. Reconnaître les formes du relief",
                "content": ["Des courbes très rapprochées indiquent une pente forte, tandis que des courbes espacées correspondent à une pente plus douce. La disposition des courbes permet de reconnaître sommets, vallées, versants, cols et dépressions."]
            },
            {
                "title": "III. Construire une coupe topographique",
                "content": ["Pour réaliser une coupe, on trace une ligne entre deux points de la carte, reporte les intersections avec les courbes de niveau puis place les altitudes correspondantes sur un profil. Les points sont ensuite reliés pour obtenir la forme générale du relief."]
            },
            {
                "title": "IV. Réaliser une carte schématique",
                "content": ["Une carte schématique simplifie la réalité tout en conservant les informations essentielles. Elle doit comporter un titre, une légende organisée, une orientation et des figurés lisibles."]
            }
        ],
        "conclusion": "L'initiation à la coupe topographique permet au lycéen de visualiser concrètement les trois dimensions du paysage géographique et d'en analyser les contraintes d'aménagement."
    },
    {
        "num": 17,
        "title": "Les régions intertropicales",
        "intro": "La zone intertropicale se situe approximativement entre les deux tropiques. Elle reçoit une quantité importante d’énergie solaire tout au long de l’année, mais les températures et les précipitations varient fortement selon les régions.",
        "sections": [
            {
                "title": "I. Les milieux équatoriaux",
                "content": ["Les régions équatoriales connaissent généralement des températures élevées et des précipitations abondantes. La végétation naturelle est souvent dense, avec des forêts sempervirentes. Les sols et les ressources doivent être gérés en fonction des contraintes locales."]
            },
            {
                "title": "II. Les milieux tropicaux humides",
                "content": ["Ils connaissent une saison humide marquée et une saison sèche plus ou moins longue. Les savanes et les formations boisées y sont fréquentes. L’agriculture, l’élevage et l’exploitation forestière constituent des activités importantes."]
            },
            {
                "title": "III. Les milieux tropicaux secs",
                "content": ["Lorsque la saison sèche devient longue, la végétation se raréfie. Les espaces de savane sèche et les zones proches des milieux désertiques sont soumis à une forte variabilité des précipitations."]
            },
            {
                "title": "IV. Les milieux désertiques",
                "content": ["Les déserts se caractérisent par une très faible quantité de précipitations et une forte contrainte hydrique. Les populations se concentrent davantage autour des points d’eau, des oasis, des cours d’eau ou des zones bénéficiant d’aménagements hydrauliques."]
            },
            {
                "title": "V. Potentialités et contraintes",
                "content": ["La zone intertropicale dispose de ressources agricoles, forestières, minières et énergétiques importantes. Elle connaît cependant des contraintes liées à la sécheresse, aux fortes pluies, à l’érosion des sols, aux risques cycloniques dans certaines régions et à la pression sur les ressources."]
            }
        ],
        "conclusion": "Les régions intertropicales abritent une formidable biodiversité et d'immenses ressources agricoles, mais exigent une gestion durable face à la vulnérabilité climatique et à la dégradation des sols."
    },
    {
        "num": 18,
        "title": "Les régions tempérées",
        "intro": "Les régions tempérées se situent principalement entre les zones tropicales et les zones polaires. Elles présentent une grande diversité de climats et de paysages en raison de la latitude, de l’influence maritime, des reliefs et de la circulation atmosphérique.",
        "sections": [
            {
                "title": "I. Les domaines océaniques",
                "content": ["Les régions tempérées océaniques connaissent généralement des températures modérées et des précipitations réparties sur une grande partie de l’année. Les amplitudes thermiques sont relativement faibles près des façades maritimes."]
            },
            {
                "title": "II. Les domaines continentaux",
                "content": ["À l’intérieur des continents, l’influence de la mer diminue. Les amplitudes thermiques annuelles peuvent devenir importantes, avec des hivers froids et des étés plus chauds selon la latitude et la continentalité."]
            },
            {
                "title": "III. Les domaines méditerranéens",
                "content": ["Ils sont caractérisés par des étés chauds et secs et des hivers plus doux et relativement humides. La végétation et les pratiques agricoles sont adaptées à la sécheresse estivale."]
            },
            {
                "title": "IV. Les potentialités",
                "content": ["Les régions tempérées disposent souvent de conditions favorables à l’agriculture, à l’élevage, à l’industrie, aux transports et à l’urbanisation. Leur forte mise en valeur entraîne aussi des enjeux environnementaux liés à la pollution, à l’artificialisation des sols et à la gestion de l’eau."]
            }
        ],
        "conclusion": "Les régions tempérées constituent les foyers historiques majeurs de concentration démographique et industrielle de la planète, confrontés aujourd'hui à la transition écologique."
    },
    {
        "num": 19,
        "title": "Les régions polaires",
        "intro": "Les régions polaires entourent les pôles Nord et Sud. Elles se caractérisent par de très basses températures, une forte saisonnalité de la lumière et des conditions environnementales difficiles.",
        "sections": [
            {
                "title": "I. Le domaine arctique",
                "content": ["L’Arctique correspond à la région autour du pôle Nord. Il comprend un océan largement entouré de continents et d’îles. La banquise varie selon les saisons. Des populations humaines vivent dans plusieurs parties de cet espace."]
            },
            {
                "title": "II. Le domaine antarctique",
                "content": ["L’Antarctique est un continent recouvert d’une vaste calotte glaciaire. Les conditions climatiques y sont particulièrement rigoureuses. La présence humaine y est surtout liée aux activités scientifiques et à des installations temporaires ou spécialisées."]
            },
            {
                "title": "III. Les milieux et les ressources",
                "content": ["La végétation est limitée par le froid et la courte période favorable. Les espaces polaires possèdent des ressources minérales et biologiques potentielles, mais leur exploitation est soumise à de fortes contraintes environnementales et à des règles internationales selon les espaces concernés."]
            },
            {
                "title": "IV. Les changements environnementaux",
                "content": ["Les régions polaires sont sensibles aux variations du climat. La réduction de certaines surfaces de glace, les modifications des écosystèmes et les changements dans les conditions de vie des populations constituent des sujets majeurs d’observation scientifique."]
            }
        ],
        "conclusion": "Les calottes polaires sont les sentinelles avancées du réchauffement climatique mondial, dont la fonte menace directement les équilibres maritimes de la planète entière."
    },
    {
        "num": 20,
        "title": "L’originalité des montagnes et des littoraux",
        "intro": "Les montagnes et les littoraux sont deux grands types d’espaces présentant des caractéristiques physiques particulières. Ils concentrent des ressources et des activités humaines tout en étant soumis à des risques naturels et à de fortes transformations.",
        "sections": [
            {
                "title": "I. L’originalité des montagnes",
                "content": ["Les montagnes se caractérisent par l’altitude, les fortes pentes, l’étagement des températures et une grande diversité des milieux. L’altitude modifie les conditions climatiques et la végétation. Les populations s’adaptent aux contraintes par l’agriculture, l’élevage, les activités touristiques et l’exploitation de certaines ressources."]
            },
            {
                "title": "II. Les ressources montagnardes",
                "content": ["Les montagnes peuvent fournir de l’eau, du bois, des ressources minérales et des possibilités hydroélectriques. Elles présentent également une biodiversité importante. Toutefois, les pentes fortes rendent certains espaces vulnérables à l’érosion, aux glissements de terrain et aux avalanches selon les régions."]
            },
            {
                "title": "III. L’originalité des littoraux",
                "content": ["Les littoraux sont des espaces de contact entre la terre et la mer. Ils comprennent des plages, falaises, estuaires, deltas, lagunes et cordons littoraux. Ils sont soumis à l’action des vagues, des marées, des courants et des apports sédimentaires."]
            },
            {
                "title": "IV. Les activités littorales",
                "content": ["Les littoraux concentrent des ports, des villes, des zones industrielles, des activités de pêche, de tourisme et de commerce. Cette concentration s’explique par leur accessibilité, leurs ressources et leur position dans les échanges mondiaux."]
            },
            {
                "title": "V. Risques et aménagement",
                "content": ["Les littoraux sont exposés à l’érosion côtière, aux submersions marines et, dans certaines régions, aux cyclones ou tsunamis. L’aménagement doit donc tenir compte de la dynamique naturelle du littoral, de la protection des écosystèmes et des besoins des populations."]
            }
        ],
        "conclusion": "Les montagnes et les littoraux sont des espaces à forte valeur naturelle et économique. Leur mise en valeur nécessite une connaissance précise des contraintes physiques et une gestion attentive des ressources et des risques."
    }
]

def make_full_text(lesson):
    lines = [
        "RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE",
        "DIRECTION DE L'ENSEIGNEMENT MOYEN ET SECONDAIRE GÉNÉRAL",
        "PROGRAMME OFFICIEL DE COURS — NIVEAU : CLASSE DE SECONDE (SÉRIES L & S)",
        "DISCIPLINE : GÉOGRAPHIE",
        "",
        f"LEÇON {lesson['num']} : {lesson['title'].upper()}",
        "",
        "INTRODUCTION",
        lesson["intro"],
        ""
    ]
    for s in lesson["sections"]:
        lines.append(s["title"])
        for c in s["content"]:
            lines.append(c)
        lines.append("")
    lines.append("CONCLUSION")
    lines.append(lesson["conclusion"])
    return "\n".join(lines)

def make_ts_code(lesson):
    var_name = f"LESSON_{lesson['num']}_GEOGRAPHIE_2NDE"
    full_text = make_full_text(lesson).replace("`", "\\`")
    intro = lesson["intro"].replace("`", "\\`")
    conclusion = lesson["conclusion"].replace("`", "\\`")
    
    sections_json = []
    for s in lesson["sections"]:
        s_obj = {
            "title": s["title"],
            "content": s["content"]
        }
        sections_json.append(s_obj)
    
    sec_str = json.dumps(sections_json, ensure_ascii=False, indent=4)
    
    code = f"""export const {var_name}: LessonContent = {{
  id: 'geographie-2nde-lecon-{lesson['num']}',
  number: 'LEÇON {lesson['num']}',
  title: `{lesson['title']}`,
  subject: 'Géographie',
  classLevel: 'Seconde',
  fullText: `{full_text}`,
  introduction: `{intro}`,
  sections: {sec_str},
  conclusion: `{conclusion}`
}};
"""
    return var_name, code

# Partition into 3 parts:
# Part 1: 1..6 (Partie I & début Partie II)
# Part 2: 7..16 (Partie II : Atmosphère, Climat, Géologie & Reliefs)
# Part 3: 17..20 (Partie III : Régions naturelles)

parts = [
    (1, 6, "src/data/courses_2nde_geographie_part1.ts", "PARTIE I : LA TERRE DANS LE SYSTÈME SOLAIRE & OCÉANS"),
    (7, 16, "src/data/courses_2nde_geographie_part2.ts", "PARTIE II : LA PLANÈTE TERRE (ATMOSPHÈRE, CLIMATS, GÉOLOGIE & RELIEFS)"),
    (17, 20, "src/data/courses_2nde_geographie_part3.ts", "PARTIE III : LES RÉGIONS NATURELLES DU GLOBE ET LEURS POTENTIALITÉS")
]

for start_num, end_num, fpath, part_title in parts:
    file_lessons = [l for l in lessons_geographie if start_num <= l["num"] <= end_num]
    code_blocks = []
    for l in file_lessons:
        _, c = make_ts_code(l)
        code_blocks.append(c)
    
    content = f"""import {{ LessonContent }} from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE SECONDE (SÉRIES L & S) — {part_title}
// Conforme au programme officiel national de la République du Sénégal
// Cours complets et développés intégraux sans résumé
// =========================================================================

{"".join(code_blocks)}"""
    
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {fpath} (Lessons {start_num} to {end_num})")

# Generate index file
index_exports = []
content_items = []

for l in lessons_geographie:
    num = l["num"]
    var_name = f"LESSON_{num}_GEOGRAPHIE_2NDE"
    if 1 <= num <= 6:
        badge_part = "Partie 1 • Système solaire & Océans"
    elif 7 <= num <= 16:
        badge_part = "Partie 2 • Atmosphère, Climat & Reliefs"
    else:
        badge_part = "Partie 3 • Régions naturelles du globe"
    
    index_exports.append(var_name)
    content_items.append(f"""  {{
    id: 'geographie-2nde-cours-{num}',
    title: 'LEÇON {num} : {l['title'].upper()}',
    type: 'cours',
    badge: '{badge_part}',
    description: `{l['intro'][:220]}...`,
    lessonData: {var_name}
  }}""")

joined_items = ",\n".join(content_items)

index_content = f"""// =========================================================================
// INDEX CENTRAL DES COURS DE GÉOGRAPHIE CLASSE DE SECONDE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 20 Leçons exhaustives intégrales sans résumé
// =========================================================================

import {{ ContentData, LessonContent }} from './courses';
import {{
  {", ".join([f"LESSON_{i}_GEOGRAPHIE_2NDE" for i in range(1, 7)])}
}} from './courses_2nde_geographie_part1';
import {{
  {", ".join([f"LESSON_{i}_GEOGRAPHIE_2NDE" for i in range(7, 17)])}
}} from './courses_2nde_geographie_part2';
import {{
  {", ".join([f"LESSON_{i}_GEOGRAPHIE_2NDE" for i in range(17, 21)])}
}} from './courses_2nde_geographie_part3';

export {{
  {", ".join(index_exports)}
}};

export const GEOGRAPHIE_2NDE_PARTS = [
  {{ id: 'all', label: 'Toutes les leçons', count: '20' }},
  {{ id: 'part-1', label: 'Partie 1 • Système solaire & Océans', count: '6' }},
  {{ id: 'part-2', label: 'Partie 2 • Atmosphère, Climat & Reliefs', count: '10' }},
  {{ id: 'part-3', label: 'Partie 3 • Régions naturelles du globe', count: '4' }}
];

export const COURSES_GEOGRAPHIE_2NDE: ContentData[] = [
{joined_items},
  {{
    id: 'res-geographie-2nde-tp-diagramme',
    title: 'Fiche Pratique TP : Construction et Interprétation des Diagrammes Ombrothermiques',
    type: 'ressource',
    badge: 'Travaux Pratiques',
    description: 'Méthode complète de tracé P = 2T, détermination des saisons sèches et humides, calcul des amplitudes thermiques annuelles.',
    link: '#'
  }},
  {{
    id: 'res-geographie-2nde-tp-topographie',
    title: 'Fiche Pratique TP : Réalisation pas à pas d\\'une Coupe Topographique',
    type: 'ressource',
    badge: 'Travaux Pratiques',
    description: 'Méthodologie détaillée : lecture des courbes de niveau, calcul des pentes, tracé du profil topographique et orientation.',
    link: '#'
  }}
];
"""

with open("src/data/courses_2nde_geographie_index.ts", "w", encoding="utf-8") as f:
    f.write(index_content)
print("Generated src/data/courses_2nde_geographie_index.ts")
