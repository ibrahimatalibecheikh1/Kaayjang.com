import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE 4ÈME - DEUXIÈME PARTIE : L'AFRIQUE PHYSIQUE - MILIEU NATUREL
// CONFORME AU PROGRAMME OFFICIEL DU MINISTÈRE DE L'ÉDUCATION NATIONALE DU SÉNÉGAL
// LEÇONS 6 À 10 : COURS INTÉGRAUX DÉTAILLÉS, SCHÉMAS VECTORIELS, EXERCICES & CORRIGÉS
// =========================================================================

export const LESSON_6_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-6',
  number: 'LEÇON 6',
  title: 'PRÉSENTATION GÉNÉRALE DU CONTINENT AFRICAIN',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `Considérée comme le berceau de l'humanité où sont apparus les premiers hominidés, l'Afrique est un continent d'une dimension monumentale et aux caractéristiques biogéographiques singulières. Par sa position géographique unique au cœur du globe terrestre, elle est le seul continent traversé en son milieu par l'Équateur et recoupé à la fois par le méridien de Greenwich, le tropique du Cancer et le tropique du Capricorne. Cette position centrale lui confère une remarquable symétrie de ses zones climatiques et naturelles. Cette leçon présente la situation astronomique, les limites maritimes, la morphologie massive de ses côtes et les grands ensembles régionaux du continent africain.`,
  diagram: {
    title: 'Schéma Récapitulatif : Identité Géographique de l\'Afrique',
    root: 'LE CONTINENT AFRICAIN',
    branches: [
      {
        name: 'Position Géographique',
        subtitle: 'Carrefour astronomique mondial',
        items: [
          'Traversé par l\'Équateur (0°) en son milieu',
          'Traversé par le méridien de Greenwich (0°)',
          'Encadré par le tropique du Cancer (23°27\' N) et du Capricorne (23°27\' S)',
          'Position centrale entre hémisphères Nord, Sud, Est et Ouest'
        ]
      },
      {
        name: 'Dimensions & Morphologie',
        subtitle: 'Un bloc continental massif',
        items: [
          'Superficie : 30,3 millions de km² (3e rang mondial)',
          'Côtes rectilignes (30 500 km) avec peu de baies abritées',
          'Îles majeures : Madagascar (587 000 km²), Comores, Seychelles, Cap-Vert, Maurice'
        ]
      },
      {
        name: 'Grands Ensembles Régionaux',
        subtitle: 'Subdivisions géopolitiques',
        items: [
          'Afrique du Nord (Maghreb et Égypte)',
          'Afrique de l\'Ouest (16 pays dont le Sénégal)',
          'Afrique centrale (bassin forestier du Congo)',
          'Afrique de l\'Est (Grands Lacs et hauts plateaux)',
          'Afrique australe (zone tempérée et minière)'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. SITUATION GÉOGRAPHIQUE ET LIMITES DU CONTINENT AFRICAIN',
      content: [
        `L'Afrique occupe une place géométrique remarquable sur le planisphère mondial. Elle est véritablement au centre du monde habité.`,
        `C'est le seul continent au monde qui s'étend de manière quasi équilibrée de part et d'autre de l'Équateur, entre 37°21' de latitude Nord (au Cap Blanc en Tunisie) et 34°51' de latitude Sud (au Cap des Aiguilles en Afrique du Sud).`
      ],
      subsections: [
        {
          subtitle: 'A. Les limites maritimes et terrestres',
          content: [
            `Le continent africain est entouré d'étendues marines sur la quasi-totalité de son périmètre :`,
            `• Au Nord : La mer Méditerranée, qui sépare l'Afrique de l'Europe. Le détroit de Gibraltar ne fait que 14 km de large entre le Maroc et l'Espagne. Au Nord-Est, le canal artificiel de Suez (Égypte) sépare l'Afrique de l'Asie tout en reliant la Méditerranée à la mer Rouge.`,
            `• À l'Est : La mer Rouge et l'océan Indien. Le détroit de Bab-el-Mandeb sépare la corne de l'Afrique de la péninsule arabique.`,
            `• À l'Ouest : L'océan Atlantique, qui baigne les côtes sénégalaises et le golfe de Guinée.`,
            `• Au Sud : La zone de convergence tumultueuse où se rencontrent les eaux de l'océan Atlantique et de l'océan Indien au niveau du Cap des Aiguilles.`
          ]
        },
        {
          subtitle: 'B. Les dimensions et la compacité du continent',
          content: [
            `• Une superficie colossale : L'Afrique s'étend sur environ 30,3 millions de kilomètres carrés (en incluant ses îles), soit environ 20% des terres émergées de la planète et trois fois la superficie de l'Europe.`,
            `• Les distances record :`,
            `  - Du Nord au Sud (de Ras Ben Sakka en Tunisie au Cap des Aiguilles) : environ 8 000 km.`,
            `  - D'Est en Ouest (de la pointe de Ras Hafun en Somalie à la presqu'île du Cap-Vert à Dakar) : environ 7 500 km. Dakar est ainsi la pointe continentale la plus occidentale de tout le continent africain.`,
            `• Des côtes peu découpées : Les côtes africaines ont une longueur totale d'environ 30 500 km. Elles sont très rectilignes, dépourvues de grands fjords, de golfes profonds (à l'exception du golfe de Guinée) ou de baies naturelles abritées, ce qui a longtemps rendu l'accès maritime difficile.`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 370" width="100%" height="100%">
              <rect width="700" height="370" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">CARTE DE SITUATION ET LIMITES DE L'AFRIQUE</text>
              <!-- Silhouette stylisée du continent africain -->
              <g transform="translate(180, 50)">
                <!-- Tracé Afrique -->
                <path d="M 50 15 C 80 10, 150 12, 180 25 C 200 35, 230 45, 250 80 C 270 110, 310 140, 300 170 C 280 200, 240 240, 210 270 C 180 300, 160 305, 140 290 C 120 270, 110 230, 90 200 C 60 180, 40 180, 10 170 C -10 160, -20 140, 0 110 C 20 80, 20 40, 50 15 Z"
                      fill="%23fef3c7" stroke="%23d97706" stroke-width="2.5"/>
                <!-- Madagascar -->
                <ellipse cx="275" cy="240" rx="15" ry="40" transform="rotate(20, 275, 240)" fill="%23fde68a" stroke="%23d97706" stroke-width="1.8"/>
                <text x="295" y="245" font-size="10" font-weight="bold" fill="%2392400e">Madagascar</text>

                <!-- Équateur (0°) -->
                <line x1="-50" y1="160" x2="350" y2="160" stroke="%23dc2626" stroke-width="2.5" stroke-dasharray="6,3"/>
                <text x="355" y="164" font-size="11" font-weight="bold" fill="%23dc2626">Équateur (0°)</text>

                <!-- Tropique du Cancer -->
                <line x1="-30" y1="75" x2="330" y2="75" stroke="%23ea580c" stroke-width="1.8" stroke-dasharray="5,3"/>
                <text x="335" y="79" font-size="10" font-weight="bold" fill="%23ea580c">Tropique du Cancer (23°27' N)</text>

                <!-- Tropique du Capricorne -->
                <line x1="-30" y1="245" x2="330" y2="245" stroke="%23ea580c" stroke-width="1.8" stroke-dasharray="5,3"/>
                <text x="335" y="249" font-size="10" font-weight="bold" fill="%23ea580c">Tropique du Capricorne (23°27' S)</text>

                <!-- Méridien de Greenwich -->
                <line x1="70" y1="-10" x2="70" y2="320" stroke="%23059669" stroke-width="2" stroke-dasharray="5,3"/>
                <text x="70" y="-15" text-anchor="middle" font-size="10" font-weight="bold" fill="%23059669">Greenwich (0°)</text>

                <!-- Villes / Repères -->
                <!-- Dakar -->
                <circle cx="0" cy="115" r="4" fill="%232563eb"/>
                <text x="-5" y="115" text-anchor="end" font-size="10" font-weight="bold" fill="%231e40af">Dakar (Cap-Vert)</text>

                <!-- Mers & Océans -->
                <text x="140" y="5" text-anchor="middle" font-size="11" font-weight="bold" fill="%230284c7">Mer Méditerranée</text>
                <text x="-70" y="210" text-anchor="middle" font-size="11" font-weight="bold" fill="%230369a1">OCÉAN ATLANTIQUE</text>
                <text x="330" y="110" font-size="11" font-weight="bold" fill="%230369a1">Mer Rouge</text>
                <text x="330" y="210" font-size="11" font-weight="bold" fill="%230369a1">OCÉAN INDIEN</text>
              </g>
              <!-- Encadré synthèse -->
              <g transform="translate(20, 240)">
                <rect width="180" height="110" fill="white" stroke="%23cbd5e1" rx="8"/>
                <text x="10" y="20" font-size="10" font-weight="bold" fill="%230f172a">RECORDS DU CONTINENT</text>
                <text x="10" y="40" font-size="9" fill="%23475569">• Superficie : 30,3 millions km²</text>
                <text x="10" y="58" font-size="9" fill="%23475569">• Du Nord au Sud : 8 000 km</text>
                <text x="10" y="76" font-size="9" fill="%23475569">• D'Est en Ouest : 7 500 km</text>
                <text x="10" y="94" font-size="9" font-weight="bold" fill="%232563eb">• Dakar : Pointe Ouest de l'Afrique</text>
              </g>
            </svg>`,
            caption: "Figure 4 : Situation astronomique, limites maritimes et repères du continent africain."
          }
        }
      ]
    },
    {
      title: 'II. LES GRANDS ENSEMBLES RÉGIONAUX DE L\'AFRIQUE',
      content: [
        `Pour faciliter l'analyse géographique et économique, les géographes subdivisent le continent en 5 grandes régions naturelles et géopolitiques :`
      ],
      subsections: [
        {
          subtitle: 'A. Présentation des cinq régions africaines',
          content: [
            `1. L'Afrique du Nord (ou Septentrionale) : Comprend les pays du Maghreb (Maroc, Algérie, Tunisie), la Libye et l'Égypte. Séparée du reste du continent par l'immensité du désert du Sahara, elle est bordée par la Méditerranée et marquée par l'arabité et l'islam.`,
            `2. L'Afrique de l'Ouest (ou Occidentale) : Rassemble 16 pays (dont le Sénégal, le Mali, la Côte d'Ivoire, la Guinée, le Nigeria et le Ghana). Elle s'étire de la zone sahélienne aride jusqu'aux forêts humides du golfe de Guinée.`,
            `3. L'Afrique centrale : Dominée par la gigantesque cuvette et le réseau hydrographique du fleuve Congo, recouverte par la deuxième plus grande forêt tropicale humide du monde (RDC, Cameroun, Gabon, Congo-Brazzaville, RCA, Tchad).`,
            `4. L'Afrique de l'Est (ou Orientale) : Pays des hauts plateaux, des grands volcans et de la Great Rift Valley (Éthiopie, Kenya, Ouganda, Tanzanie, Rwanda, Burundi).`,
            `5. L'Afrique australe : Région méridionale tempérée et minière, dominée économiquement par l'Afrique du Sud, entourée par la Namibie, le Botswana, la Zambie, le Zimbabwe, le Mozambique et Madagascar.`
          ]
        },
        {
          subtitle: 'B. La dualité Afrique du Nord / Afrique subsaharienne',
          content: [
            `La barrière naturelle du Sahara a historiquement distingué l'Afrique blanche du Nord de l'Afrique subsaharienne (ou Afrique noire). Cependant, les flux migratoires, les routes caravanières transsahariennes multiséculaires et les projets d'intégration économique contemporains unissent intimement ces deux espaces.`
          ]
        }
      ]
    },
    {
      title: "III. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Questions et exercices de synthèse pour tester les connaissances sur la géographie générale de l'Afrique.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : Contrôle de connaissances',
          content: [
            `1. Donner la superficie totale du continent africain et son rang mondial.`,
            `2. Quelles sont les mers et les océans qui bordent l'Afrique au Nord, à l'Ouest et à l'Est ?`,
            `3. Quelle est la position géographique particulière de la presqu'île du Cap-Vert (Dakar) à l'échelle du continent africain ?`,
            `4. Nommer les cinq grands ensembles régionaux de l'Afrique.`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. L'Afrique couvre environ 30,3 millions de kilomètres carrés (avec ses îles). Elle occupe le 3ème rang mondial en superficie (après l'Asie et l'Amérique).`,
            `2. Limites maritimes : Au Nord par la mer Méditerranée, à l'Ouest par l'océan Atlantique, et à l'Est par l'océan Indien et la mer Rouge.`,
            `3. Dakar (presqu'île du Cap-Vert) constitue le point le plus occidental (le plus à l'Ouest) de tout le continent africain (longitude 17°26' Ouest).`,
            `4. Les cinq grands ensembles sont : l'Afrique du Nord, l'Afrique de l'Ouest, l'Afrique centrale, l'Afrique de l'Est et l'Afrique australe.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 6 : PRÉSENTATION GÉNÉRALE DU CONTINENT AFRICAIN\n\nINTRODUCTION\nConsidérée comme le berceau de l'humanité où sont apparus les premiers hominidés, l'Afrique est un continent d'une dimension monumentale et aux caractéristiques biogéographiques singulières. Par sa position géographique unique au cœur du globe terrestre, elle est le seul continent traversé en son milieu par l'Équateur et recoupé à la fois par le méridien de Greenwich, le tropique du Cancer et le tropique du Capricorne. Cette position centrale lui confère une remarquable symétrie de ses zones climatiques et naturelles. Cette leçon présente la situation astronomique, les limites maritimes, la morphologie massive de ses côtes et les grands ensembles régionaux du continent africain.\n\nSchéma Récapitulatif : Identité Géographique de l\\\n\nCarrefour astronomique mondial\n\nUn bloc continental massif\n\nSubdivisions géopolitiques\n\nI. SITUATION GÉOGRAPHIQUE ET LIMITES DU CONTINENT AFRICAIN\n\nA. Les limites maritimes et terrestres\n\nB. Les dimensions et la compacité du continent\n\nII. LES GRANDS ENSEMBLES RÉGIONAUX DE L\\\n\nA. Présentation des cinq régions africaines\n\nB. La dualité Afrique du Nord / Afrique subsaharienne\n\nIII. EXERCICES D\n\nExercice : Contrôle de connaissances\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nDe par sa position centrale, son immensité territoriale et la richesse de ses façades océaniques, l'Afrique dispose d'un potentiel géographique exceptionnel. Cependant, la régularité rectiligne de ses côtes a nécessité des efforts considérables pour construire des ports artificiels modernes.",
  conclusion: `De par sa position centrale, son immensité territoriale et la richesse de ses façades océaniques, l'Afrique dispose d'un potentiel géographique exceptionnel. Cependant, la régularité rectiligne de ses côtes a nécessité des efforts considérables pour construire des ports artificiels modernes.`
};

export const LESSON_7_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LE RELIEF ET LES SOLS DE L\'AFRIQUE',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `À l'échelle du globe, le relief de l'Afrique frappe le voyageur par sa grande monotonie d'ensemble, son altitude moyenne modérée et son ancienneté géologique. Contrairement à l'Asie ou à l'Amérique dominées par d'immenses cordillères de plissements récents, l'Afrique est constituée d'un vieux socle précambrien rigide aplani par l'érosion. Ce socle est dominé par de vastes plateaux étagés, de gigantesques cuvettes intérieures et une spectaculaire balafre tectonique à l'Est : la vallée du Rift (Great Rift Valley). De la géologie et du climat dépendent également les sols africains, qui présentent une fragilité marquée face aux agressions humaines et climatiques.`,
  diagram: {
    title: 'Schéma Récapitulatif : Reliefs et Pédologie Africains',
    root: 'RELIEF ET SOLS D\'AFRIQUE',
    branches: [
      {
        name: 'Formes de Relief Majeures',
        subtitle: 'Plateaux et cuvettes',
        items: [
          'Plateaux étagés (bas à l\'Ouest ~300-500m, hauts à l\'Est & Sud &gt;1000m)',
          'Grandes cuvettes intérieures (Congo, Tchad, Niger)',
          'Plaines littorales très étroites le long des côtes'
        ]
      },
      {
        name: 'Reliefs Montagneux & Failles',
        subtitle: 'Tectonique et volcanisme',
        items: [
          'Great Rift Valley (faille de 6 000 km d\'Éthiopie au Mozambique)',
          'Sommets volcaniques : Kilimandjaro (5 895 m), Mont Kenya (5 199 m)',
          'Massifs anciens : Hoggar, Tibesti, Drakensberg ; Chaîne jeune : Atlas'
        ]
      },
      {
        name: 'Diversité des Sols',
        subtitle: 'Pédologie et vulnérabilité',
        items: [
          'Sols ferrallitiques rouges (zones humides, fragiles, lessivés)',
          'Sols ferrugineux tropicaux (savanes sahéliennes, risque de cuirasse)',
          'Sols arides et squelettiques des déserts (pauvres en humus)'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LES GRANDS ENSEMBLES DE RELIEF : PLATEAUX ET CUVETTES',
      content: [
        `Le continent africain est caractérisé par deux formes dominantes de relief qui couvrent la majorité de sa surface : les plateaux et les cuvettes sédimentaires.`,
        `On distingue traditionnellement « l'Afrique basse » au Nord-Ouest et « l'Afrique haute » au Sud et à l'Est.`
      ],
      subsections: [
        {
          subtitle: 'A. La prédominance des plateaux étagés',
          content: [
            `• Qu'est-ce qu'un plateau ? C'est une surface plane ou légèrement ondulée où les cours d'eau coulent au fond de vallées encaissées.`,
            `• Les plateaux de l'Afrique occidentale et septentrionale : Situés à une altitude modeste oscillant entre 200 et 500 mètres. Ils descendent en marches d'escalier vers l'Atlantique.`,
            `• Les hauts plateaux de l'Est et du Sud : Situés à plus de 1 000 mètres d'altitude en moyenne, avec des sommets dépassant 2 500 mètres en Éthiopie et en Afrique du Sud.`
          ]
        },
        {
          subtitle: 'B. Les cuvettes intérieures et l\'étroitesse des plaines',
          content: [
            `• Les grandes cuvettes sédimentaires : Vastes dépressions intérieures de forme circulaire ou ovale entourées de plateaux :`,
            `  - La cuvette du Congo : Cœur vert de l'Afrique centrale, marécageuse et drainée par le fleuve Congo.`,
            `  - La cuvette du Tchad : Dépression fermée endoréique au cœur du Sahel.`,
            `  - La cuvette du moyen Niger et la cuvette du Kalahari au Sud.`,
            `• L'étroitesse des plaines littorales : Les plaines africaines sont très peu développées. Elles se limitent à un mince liseré côtier de quelques dizaines de kilomètres de large.`
          ]
        }
      ]
    },
    {
      title: 'II. LES HAUTS SOMMETS, LES MONTAGNES ET LE RIFT EST-AFRICAIN',
      content: [
        `Bien que plat dans son ensemble, le continent africain possède des chaînes de montagnes impressionnantes et une faille tectonique unique au monde.`
      ],
      subsections: [
        {
          subtitle: 'A. Les montagnes africaines',
          content: [
            `• La chaîne de l'Atlas au Nord-Ouest (Maroc, Algérie, Tunisie) : Seule chaîne de plissement jeune et récent (Ère Tertiaire) en Afrique, culminant au Djebel Toubkal (4 167 m au Maroc).`,
            `• Le Drakensberg au Sud : Montagne ancienne et érodée bordant l'Afrique du Sud et le Lesotho (3 482 m).`,
            `• Les massifs volcaniques centraux du Sahara : Le Hoggar (Algérie, 2 918 m) et le Tibesti (Tchad, 3 415 m).`
          ]
        },
        {
          subtitle: 'B. La Great Rift Valley et les géants volcaniques',
          content: [
            `• La Vallée du Rift africain : C'est une gigantesque fracture de l'écorce terrestre s'étendant sur plus de 6 000 km de long, depuis la mer Rouge et l'Éthiopie jusqu'au Mozambique. Le continent est en train de se déchirer lentement à cet endroit sous l'effet de la tectonique des plaques.`,
            `• Les grands volcans associés : L'activité tectonique du Rift a donné naissance aux plus hauts sommets du continent :`,
            `  - Le mont Kilimandjaro (Tanzanie) : Volcan aux neiges éternelles, point culminant de l'Afrique à 5 895 mètres d'altitude.`,
            `  - Le mont Kenya (5 199 m) et le mont Ruwenzori (5 109 m).`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 340" width="100%" height="100%">
              <rect width="700" height="340" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">PROFIL GÉOLOGIQUE ET RELIEFS COMPARÉS DE L'AFRIQUE</text>
              <g transform="translate(50, 70)">
                <!-- Coupe Ouest - Est à travers le continent -->
                <text x="0" y="20" font-size="11" font-weight="bold" fill="%232563eb">OUEST (Atlantique)</text>
                <text x="580" y="20" font-size="11" font-weight="bold" fill="%230284c7">EST (Océan Indien)</text>

                <!-- Sol et coupe -->
                <!-- Ouest: Plaine côtière basse -> Plateau bas (300m) -> Cuvette Congo (400m) -> Rift & Hauts Plateaux (2500m) -> Kilimandjaro (5895m) -> Océan Indien -->
                <path d="M 0 180 L 40 180 L 70 140 L 170 140 L 210 165 L 310 165 L 350 90 L 420 80 L 440 30 L 460 85 L 480 130 L 500 130 L 530 180 L 600 180 L 600 220 L 0 220 Z"
                      fill="%23fed7aa" stroke="%23ea580c" stroke-width="2"/>

                <!-- Lac de faille (Rift) -->
                <rect x="470" y="115" width="20" height="15" fill="%2338bdf8"/>

                <!-- Labels -->
                <line x1="20" y1="180" x2="20" y2="130" stroke="%23475569" stroke-dasharray="2,2"/>
                <text x="20" y="125" text-anchor="middle" font-size="9" fill="%23475569">Plaine littorale</text>

                <text x="120" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="%239a3412">Plateaux de l'Ouest (300-500 m)</text>
                <text x="260" y="155" text-anchor="middle" font-size="10" font-weight="bold" fill="%23059669">Cuvette du Congo (sédiments)</text>

                <!-- Kilimandjaro -->
                <text x="440" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="%23dc2626">▲ Kilimandjaro (5 895 m)</text>
                <text x="440" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="%230369a1">Great Rift Valley</text>
                <text x="480" y="145" text-anchor="middle" font-size="8.5" fill="%230284c7">Lacs de faille (Tanganyika)</text>

                <!-- Echelle altitude indicative -->
                <line x1="0" y1="215" x2="600" y2="215" stroke="%2364748b"/>
                <text x="300" y="235" text-anchor="middle" font-size="10" font-weight="bold" fill="%23334155">Coupe schématique transversale du continent africain</text>
              </g>
              <g transform="translate(70, 275)">
                <rect width="560" height="50" fill="white" stroke="%23cbd5e1" rx="8"/>
                <text x="20" y="20" font-size="10" font-weight="bold" fill="%23dc2626">Point culminant :</text>
                <text x="125" y="20" font-size="10" fill="%231e293b">Kilimandjaro (5 895 m en Tanzanie) - Volcan aux neiges éternelles</text>
                <text x="20" y="38" font-size="10" font-weight="bold" fill="%23059669">Point le plus bas :</text>
                <text x="125" y="38" font-size="10" fill="%231e293b">Lac Assal (-155 m à Djibouti dans la dépression de l'Afar)</text>
              </g>
            </svg>`,
            caption: "Figure 5 : Profil géologique transversal de l'Afrique montrant les plateaux, cuvettes et le Rift."
          }
        }
      ]
    },
    {
      title: 'III. LA DIVERSITÉ ET LA FRAGILITÉ DES SOLS AFRICAINS',
      content: [
        `La pédologie (science qui étudie les sols) montre que les sols africains sont le résultat de l'altération du vieux socle géologique sous l'action intense des pluies et des fortes températures.`
      ],
      subsections: [
        {
          subtitle: 'A. Typologie des sols majeurs en Afrique',
          content: [
            `1. Les sols ferrallitiques (ou latéritiques) : Sols rouges et profonds des régions équatoriales et tropicales humides (forêt et savane humide). Ils sont riches en oxydes de fer et d'aluminium, mais très pauvres en humus en raison du lessivage intense par les pluies torrentielles. Très fragiles, ils s'épuisent rapidement dès que la forêt est abattue.`,
            `2. Les sols ferrugineux tropicaux : Sols caractéristiques des savanes soudaniennes et sahéliennes (comme au Sénégal, appelés « sols Dior » sablonneux et « sols Deck » argileux). Ils conviennent aux cultures de mil et d'arachide, mais risquent le phénomène de cuirassement (formation d'une croûte dure stérile sous l'action du soleil) s'ils sont dénudés.`,
            `3. Les sols arides et désertiques : Sols squelettiques, sableux ou salins des déserts (Sahara, Kalahari). Ils sont dépourvus de matière organique et totalement impropres aux cultures sans apport massif d'eau d'irrigation.`
          ]
        },
        {
          subtitle: 'B. Le problème de l\'érosion et de l\'épuisement des terres',
          content: [
            `La surexploitation agricole, la déforestation et le surpâturage favorisent l'érosion éolienne (par le vent) et hydrique (par les eaux de ruissellement), menaçant la sécurité alimentaire de millions de paysans.`
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Exercices pour tester la compréhension des reliefs et des sols de l'Afrique.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : QCM et questions précises',
          content: [
            `1. Quel est le point culminant de l'Afrique et dans quel pays est-il situé ?`,
            `2. Qu'est-ce que la Great Rift Valley et comment s'est-elle formée ?`,
            `3. Quelle est la différence majeure entre un sol ferrallitique et un sol ferrugineux ?`,
            `4. Pourquoi dit-on que les sols de la forêt équatoriale sont fragiles ?`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Le point culminant de l'Afrique est le mont Kilimandjaro avec 5 895 mètres d'altitude, situé en Tanzanie.`,
            `2. La Great Rift Valley est une gigantesque faille ou fossé d'effondrement tectonique s'étendant sur plus de 6 000 km en Afrique de l'Est, provoquée par l'écartement lent de deux plaques tectoniques.`,
            `3. Les sols ferrallitiques se forment en zone très humide et sont soumis à un lessivage chimique intense qui emporte la silice pour laisser le fer et l'alumine. Les sols ferrugineux se forment en zone tropicale à saison sèche marquée et risquent le cuirassement en surface.`,
            `4. En forêt équatoriale, la fertilité du sol dépend uniquement de la litière végétale en décomposition permanente. Si la forêt est abattue, les pluies torrentielles lavent immédiatement le sol, le rendant stérile en quelques années.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 7 : LE RELIEF ET LES SOLS DE L\\\n\nINTRODUCTION\nÀ l'échelle du globe, le relief de l'Afrique frappe le voyageur par sa grande monotonie d'ensemble, son altitude moyenne modérée et son ancienneté géologique. Contrairement à l'Asie ou à l'Amérique dominées par d'immenses cordillères de plissements récents, l'Afrique est constituée d'un vieux socle précambrien rigide aplani par l'érosion. Ce socle est dominé par de vastes plateaux étagés, de gigantesques cuvettes intérieures et une spectaculaire balafre tectonique à l'Est : la vallée du Rift (Great Rift Valley). De la géologie et du climat dépendent également les sols africains, qui présentent une fragilité marquée face aux agressions humaines et climatiques.\n\nSchéma Récapitulatif : Reliefs et Pédologie Africains\n\nPlateaux et cuvettes\n\nTectonique et volcanisme\n\nPédologie et vulnérabilité\n\nI. LES GRANDS ENSEMBLES DE RELIEF : PLATEAUX ET CUVETTES\n\nA. La prédominance des plateaux étagés\n\nB. Les cuvettes intérieures et l\\\n\nII. LES HAUTS SOMMETS, LES MONTAGNES ET LE RIFT EST-AFRICAIN\n\nA. Les montagnes africaines\n\nB. La Great Rift Valley et les géants volcaniques\n\nIII. LA DIVERSITÉ ET LA FRAGILITÉ DES SOLS AFRICAINS\n\nA. Typologie des sols majeurs en Afrique\n\nB. Le problème de l\\\n\nIV. EXERCICES D\n\nExercice : QCM et questions précises\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nLe relief africain, largement tabulaire et aplani, facilite les communications et l'implantation humaine. En revanche, la grande fragilité des sols face à l'érosion exige des pratiques agricoles durables pour préserver l'avenir de l'agriculture.",
  conclusion: `Le relief africain, largement tabulaire et aplani, facilite les communications et l'implantation humaine. En revanche, la grande fragilité des sols face à l'érosion exige des pratiques agricoles durables pour préserver l'avenir de l'agriculture.`
};

export const LESSON_8_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-8',
  number: 'LEÇON 8',
  title: 'LE CLIMAT DE L\'AFRIQUE',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `Traversée en son milieu par l'Équateur, l'Afrique est le continent le plus chaud de la planète Terre. Plus des trois quarts de sa surface sont compris à l'intérieur de la zone intertropicale où le rayonnement solaire est intense tout au long de l'année. La caractéristique fondamentale de la climatologie africaine est sa remarquable symétrie zonale : en s'éloignant de l'Équateur vers le Nord comme vers le Sud, on retrouve la même succession ordonnée de climats, du climat équatorial hyper-humide jusqu'aux déserts arides, puis aux franges méditerranéennes tempérées. Cette leçon analyse les facteurs climatiques moteurs (masses d'air, Front Intertropical) et les grandes zones climatiques.`,
  diagram: {
    title: 'Schéma Récapitulatif : Les Mécanismes et Nuances du Climat Africain',
    root: 'LE CLIMAT DE L\'AFRIQUE',
    branches: [
      {
        name: 'Facteurs Moteurs',
        subtitle: 'Dynamique atmosphérique',
        items: [
          'Position intertropicale (chaleur permanente toute l\'année)',
          'Harmattan : Alizé continental du Nord-Est, chaud, sec et poussiéreux',
          'Mousson : Vent océanique du Sud-Ouest, chaud et gorgé d\'humidité',
          'Front Intertropical (FIT) : Zone de rencontre mobile régulant les saisons'
        ]
      },
      {
        name: 'Domaines Chauds & Humides',
        subtitle: 'Zone équatoriale et tropicale',
        items: [
          'Climat équatorial (bassin du Congo) : &gt; 2 000 mm/an, sans saison sèche',
          'Climat tropical humide (soudanien) : 1 saison sèche, 1 long hivernage',
          'Climat tropical sec (sahélien) : Saison sèche longue (8-9 mois), pluies faibles'
        ]
      },
      {
        name: 'Domaines Arides & Tempérés',
        subtitle: 'Extrêmes climatiques',
        items: [
          'Climat désertique (Sahara, Kalahari) : Pluies &lt; 100 mm, écarts thermiques jour/nuit',
          'Climat méditerranéen (pointes Nord et Sud) : Étés chauds/secs, hivers doux/pluvieux'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LES FACTEURS ET MÉCANISMES DU CLIMAT AFRICAIN',
      content: [
        `Le climat d'une région est déterminé par sa position par rapport au soleil, son altitude, sa distance à la mer et surtout le déplacement régulier des grandes masses d'air.`
      ],
      subsections: [
        {
          subtitle: 'A. La position intertropicale et les températures',
          content: [
            `• Une insolation maximale : L'Afrique reçoit des rayons solaires presque verticaux à midi toute l'année, ce qui explique pourquoi les températures moyennes annuelles y dépassent généralement 25°C à 30°C dans les plaines.`,
            `• Les saisons ne sont pas marquées par le froid hivernal (comme en Europe), mais par le rythme des pluies : la saison sèche et la saison des pluies (appelée hivernage en Afrique de l'Ouest).`
          ]
        },
        {
          subtitle: 'B. Le jeu des masses d\'air : Harmattan, Mousson et FIT',
          content: [
            `La vie météorologique de l'Afrique de l'Ouest et centrale est régie par l'affrontement permanent de deux grands vents :`,
            `• L'Harmattan : Vent continental d'Est et Nord-Est originaire des anticyclones du Sahara. Il est extrêmement chaud le jour, sec, brûlant et chargé de fines poussières ocre qui obscurcissent le ciel et dessèchent la végétation.`,
            `• La Mousson : Vent océanique issu de l'anticyclone de Sainte-Hélène au Sud de l'Atlantique. En traversant l'océan, il se charge de vapeur d'eau et apporte les pluies bienfaitrices en soufflant du Sud-Ouest vers le continent.`,
            `• Le FIT (Front Intertropical) : C'est la ligne de contact où se heurtent la Mousson humide et l'Harmattan sec.`,
            `  - En été boréal (juillet-août), le FIT remonte vers le Nord : la Mousson envahit le Sénégal et le Sahel, apportant l'hivernage.`,
            `  - En hiver boréal (décembre-janvier), le FIT redescend vers le Sud : l'Harmattan domine, imposant la sécheresse.`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 350" width="100%" height="100%">
              <rect width="700" height="350" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">LE JEU DES MASSES D'AIR EN AFRIQUE : HARMATTAN, MOUSSON ET FIT</text>
              <g transform="translate(100, 60)">
                <!-- Carte schématique Afrique de l'Ouest -->
                <rect width="500" height="250" fill="%23fffbeb" stroke="%23cbd5e1" rx="12"/>

                <!-- Zone Sahara (Harmattan) -->
                <rect x="0" y="0" width="500" height="90" fill="%23fef3c7" opacity="0.6"/>
                <text x="250" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="%23b45309">DOMAINE SAHARIEN : ANTICYCLONE CONTINENTAL</text>

                <!-- Flèches Harmattan (rouges / orange descendant vers le SO) -->
                <g stroke="%23ea580c" stroke-width="3" fill="none">
                  <path d="M 120 40 L 90 90" marker-end="url(#arrow)"/>
                  <path d="M 250 40 L 220 90"/>
                  <path d="M 380 40 L 350 90"/>
                </g>
                <text x="260" y="70" font-size="11" font-weight="bold" fill="%23c2410c">HARMATTAN (Vent chaud, sec et poussiéreux du NE)</text>

                <!-- Ligne du FIT (Front Intertropical) -->
                <line x1="0" y1="120" x2="500" y2="120" stroke="%23dc2626" stroke-width="3.5" stroke-dasharray="8,4"/>
                <rect x="180" y="108" width="140" height="24" fill="%23dc2626" rx="6"/>
                <text x="250" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="white">LIGNE DU FIT (Contact)</text>

                <!-- Zone Océan / Golfe de Guinée (Mousson) -->
                <rect x="0" y="160" width="500" height="90" fill="%23eff6ff" opacity="0.8"/>
                <text x="250" y="235" text-anchor="middle" font-size="12" font-weight="bold" fill="%231e40af">OCÉAN ATLANTIQUE / GOLFE DE GUINÉE</text>

                <!-- Flèches Mousson (bleues montant vers le NE) -->
                <g stroke="%232563eb" stroke-width="3" fill="none">
                  <path d="M 100 210 L 130 150"/>
                  <path d="M 230 210 L 260 150"/>
                  <path d="M 360 210 L 390 150"/>
                </g>
                <text x="270" y="180" font-size="11" font-weight="bold" fill="%231d4ed8">MOUSSON (Vent océanique humide du Sud-Ouest)</text>

                <!-- Explication dynamique -->
                <text x="10" y="145" font-size="10" font-style="italic" fill="%23475569">← Remontée vers le Nord en Juillet-Août (Hivernage)</text>
                <text x="290" y="145" font-size="10" font-style="italic" fill="%23475569">Descente vers le Sud en Janvier (Saison sèche) →</text>
              </g>
            </svg>`,
            caption: 'Figure 6 : La dynamique du Front Intertropical (FIT) et la confrontation Harmattan / Mousson.'
          }
        }
      ]
    },
    {
      title: 'II. LES GRANDES ZONES CLIMATIQUES DE L\'AFRIQUE',
      content: [
        `La répartition des précipitations et des températures définit 4 grands types de climats s'organisant symétriquement de part et d'autre de l'Équateur :`
      ],
      subsections: [
        {
          subtitle: 'A. Le climat équatorial et le climat tropical humide',
          content: [
            `1. Le climat équatorial (bassin du Congo, côte du golfe de Guinée) :`,
            `   - Températures constamment élevées (26°C à 28°C) avec une très faible amplitude thermique annuelle (moins de 2°C d'écart entre les mois).`,
            `   - Précipitations torrentielles dépassant 2 000 mm par an réparties sur toute l'année, sans aucune vraie saison sèche.`,
            `2. Le climat tropical humide ou soudanien (Casamance au Sénégal, sud du Mali, Guinée) :`,
            `   - Pluviométrie abondante comprise entre 800 mm et 1 500 mm par an.`,
            `   - Alternance nette de deux saisons : une saison des pluies (hivernage) durant 5 à 7 mois et une saison sèche.`
          ]
        },
        {
          subtitle: 'B. Le climat tropical sec et le climat désertique',
          content: [
            `3. Le climat tropical sec ou sahélien (centre et nord du Sénégal, Niger, Tchad) :`,
            `   - Pluies faibles, concentrées sur 2 à 3 mois seulement (250 à 600 mm par an).`,
            `   - Saison sèche très longue (8 à 10 mois) accompagnée de fortes chaleurs dépassant souvent 40°C en avril-mai.`,
            `4. Le climat désertique ou saharien (Sahara au Nord, Kalahari et Namib au Sud) :`,
            `   - Précipitations rarissimes et irrégulières inférieures à 100 mm par an.`,
            `   - Écarts de température monumentaux entre le jour (50°C à l'ombre) et la nuit (parfois proche de 0°C).`
          ]
        },
        {
          subtitle: 'C. Le climat méditerranéen',
          content: [
            `Situé aux deux pointes extrêmes du continent (au Maghreb au Nord et dans la région du Cap en Afrique du Sud) : étés chauds et ensoleillés sans pluie, et hivers doux avec des précipitations régulières.`
          ]
        }
      ]
    },
    {
      title: "III. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Entraînement aux notions climatiques fondamentales.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : Analyse de notions',
          content: [
            `1. Définir : Harmattan, Mousson, Front Intertropical (FIT).`,
            `2. Pourquoi fait-il chaud en permanence dans la zone intertropicale africaine ?`,
            `3. Quel est le climat dominant dans le nord du Sénégal et quelles sont ses caractéristiques pluviométriques ?`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Définitions :`,
            `   • Harmattan : Vent chaud, sec et poussiéreux soufflant du Nord-Est continental vers le Sud-Ouest.`,
            `   • Mousson : Vent humide et tiède venu de l'océan Atlantique Sud qui apporte les pluies sur le continent.`,
            `   • FIT (Front Intertropical) : Ligne de contact et d'affrontement entre l'Harmattan et la Mousson dont les oscillations régulent le début et la fin de l'hivernage.`,
            `2. La zone intertropicale africaine reçoit un ensoleillement maximal permanent car les rayons du soleil y frappent le sol à la verticale ou presque toute l'année.`,
            `3. Le nord du Sénégal (Podor, Matam, Saint-Louis) est sous l'emprise du climat sahélien (tropical sec) : il se caractérise par des pluies faibles (moins de 400 mm) concentrées entre juillet et septembre et une très longue saison sèche de 9 mois.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 8 : LE CLIMAT DE L\\\n\nINTRODUCTION\nTraversée en son milieu par l'Équateur, l'Afrique est le continent le plus chaud de la planète Terre. Plus des trois quarts de sa surface sont compris à l'intérieur de la zone intertropicale où le rayonnement solaire est intense tout au long de l'année. La caractéristique fondamentale de la climatologie africaine est sa remarquable symétrie zonale : en s'éloignant de l'Équateur vers le Nord comme vers le Sud, on retrouve la même succession ordonnée de climats, du climat équatorial hyper-humide jusqu'aux déserts arides, puis aux franges méditerranéennes tempérées. Cette leçon analyse les facteurs climatiques moteurs (masses d'air, Front Intertropical) et les grandes zones climatiques.\n\nSchéma Récapitulatif : Les Mécanismes et Nuances du Climat Africain\n\nDynamique atmosphérique\n\nZone équatoriale et tropicale\n\nExtrêmes climatiques\n\nI. LES FACTEURS ET MÉCANISMES DU CLIMAT AFRICAIN\n\nA. La position intertropicale et les températures\n\nB. Le jeu des masses d\\\n\nII. LES GRANDES ZONES CLIMATIQUES DE L\\\n\nA. Le climat équatorial et le climat tropical humide\n\nB. Le climat tropical sec et le climat désertique\n\nC. Le climat méditerranéen\n\nIII. EXERCICES D\n\nExercice : Analyse de notions\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nLe climat est le grand régulateur de la vie en Afrique : il détermine la répartition des ressources en eau, dicte le calendrier agricole des paysans et influence la localisation des populations.",
  conclusion: `Le climat est le grand régulateur de la vie en Afrique : il détermine la répartition des ressources en eau, dicte le calendrier agricole des paysans et influence la localisation des populations.`
};

export const LESSON_9_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-9',
  number: 'LEÇON 9',
  title: 'L\'HYDROGRAPHIE DE L\'AFRIQUE',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `L'Afrique dispose d'un réseau hydrographique colossal comprenant certains des plus célèbres fleuves du monde et de gigantesques lacs d'eau douce. Pourtant, cette ressource vitale est très inégalement répartie à la surface du continent. Tandis que l'Afrique centrale et le bassin équatorial regorgent d'une abondance hydrique permanente, les zones désertiques et sahéliennes souffrent de sécheresses chroniques et d'un stress hydrique sévère. Les fleuves africains, rythmés par les saisons climatiques, présentent des régimes contrastés et constituent une ressource géostratégique majeure pour la production d'électricité, l'irrigation et la pêche.`,
  diagram: {
    title: 'Schéma Récapitulatif : Hydrographie et Grands Bassins Africains',
    root: 'L\'HYDROGRAPHIE AFRICAINE',
    branches: [
      {
        name: 'Grands Fleuves Record',
        subtitle: 'Les artères vitales',
        items: [
          'Le Nil (6 650 km) : Plus long fleuve du monde, traverse le désert vers la Méditerranée',
          'Le Congo (4 700 km) : 2e débit mondial (41 000 m³/s), fleuve le plus puissant d\'Afrique',
          'Le Niger (4 200 km) : Grande boucle vitale en Afrique de l\'Ouest',
          'Le Sénégal (1 790 km) : Fleuve partagé vital pour le Sénégal, le Mali et la Mauritanie'
        ]
      },
      {
        name: 'Les Grands Lacs',
        subtitle: 'Réserves d\'eau douce',
        items: [
          'Lac Victoria (68 800 km²) : Plus grand lac d\'Afrique, source du Nil Blanc',
          'Lacs de faille du Rift : Lac Tanganyika (très profond, 1 470 m), Lac Malawi',
          'Lac Tchad : Lac résiduel sahélien peu profond menacé d\'assèchement'
        ]
      },
      {
        name: 'Régimes & Économie',
        subtitle: 'Potentiel hydraulique',
        items: [
          'Régime équatorial régulier (Congo) vs Régime tropical à crues violentes (Sénégal)',
          'Hydroélectricité (barrages de Manantali, Inga, Assouan, Renaissance)',
          'Irrigation agricole et sécurité alimentaire partagée (OMVS, OMVA)'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LES GRANDS FLEUVES AFRICAINS ET LEURS CARACTÉRISTIQUES',
      content: [
        `Le relief de plateaux et les précipitations contrastées donnent naissance à de très grands fleuves au tracé souvent complexe comportant des coudes et des rapides.`
      ],
      subsections: [
        {
          subtitle: 'A. Le Nil et le Congo : deux géants mondiaux',
          content: [
            `• Le Nil (6 650 km) : Plus long fleuve du monde. Il naît de deux branches : le Nil Blanc issu du lac Victoria et le Nil Bleu descendant des hauts plateaux pluvieux d'Éthiopie. Il accomplit l'exploit de traverser l'aride désert du Sahara sans recevoir aucun affluent sur 2 000 km avant de former un delta fertile en Méditerranée. Il est la source de vie de l'Égypte et du Soudan.`,
            `• Le Congo (4 700 km) : Deuxième fleuve le plus puissant de la planète après l'Amazone par son débit gigantesque (environ 41 000 mètres cubes par seconde à son embouchure). Alimenté en permanence par les pluies équatoriales de ses affluents situés au Nord et au Sud de l'Équateur, son débit reste exceptionnellement régulier toute l'année.`
          ]
        },
        {
          subtitle: 'B. Le fleuve Niger et le fleuve Sénégal en Afrique de l\'Ouest',
          content: [
            `• Le Niger (4 200 km) : Troisième fleuve d'Afrique. Il prend sa source dans les montagnes du Fouta-Djalon en Guinée, monte vers le Nord pour former un delta intérieur au Mali, décrit une immense boucle vers Tombouctou puis redescend au Nigeria pour se jeter dans l'Atlantique par un immense delta pétrolifère.`,
            `• Le fleuve Sénégal (1 790 km) : Formé à Bafoulabé (Mali) par la réunion du Bafing et du Bakoye, il sert de frontière naturelle entre le Sénégal et la Mauritanie avant de se jeter dans l'Atlantique à Saint-Louis. Il fait l'objet d'une gestion solidaire exemplaire à travers l'OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal).`
          ],
          image: {
            alt: 'Figure et diagramme pédagogique officiel',
            url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 350" width="100%" height="100%">
              <rect width="700" height="350" fill="%23f8fafc" rx="16"/>
              <text x="350" y="26" text-anchor="middle" font-size="15" font-weight="bold" fill="%231e293b">LES GRANDS FLEUVES ET LACS DU CONTINENT AFRICAIN</text>
              <g transform="translate(140, 50)">
                <!-- Tracé Afrique -->
                <path d="M 50 15 C 80 10, 150 12, 180 25 C 200 35, 230 45, 250 80 C 270 110, 310 140, 300 170 C 280 200, 240 240, 210 270 C 180 300, 160 305, 140 290 C 120 270, 110 230, 90 200 C 60 180, 40 180, 10 170 C -10 160, -20 140, 0 110 C 20 80, 20 40, 50 15 Z"
                      fill="%23f1f5f9" stroke="%2394a3b8" stroke-width="2"/>

                <!-- Fleuve Nil (bleu foncé) -->
                <path d="M 235 180 Q 230 140 225 100 Q 235 60 215 25" fill="none" stroke="%230284c7" stroke-width="3"/>
                <text x="235" y="65" font-size="11" font-weight="bold" fill="%230369a1">Le Nil (6 650 km)</text>

                <!-- Fleuve Congo -->
                <path d="M 200 210 Q 150 190 140 160 Q 170 130 185 150" fill="none" stroke="%232563eb" stroke-width="3.5"/>
                <text x="110" y="165" font-size="11" font-weight="bold" fill="%231d4ed8">Le Congo</text>

                <!-- Fleuve Niger -->
                <path d="M 30 120 Q 80 100 110 120 Q 125 145 105 170" fill="none" stroke="%23059669" stroke-width="2.5"/>
                <text x="50" y="95" font-size="10" font-weight="bold" fill="%23047857">Le Niger</text>

                <!-- Fleuve Sénégal -->
                <path d="M 10 110 Q 25 105 40 115" fill="none" stroke="%23d97706" stroke-width="2.5"/>
                <text x="-50" y="105" font-size="10" font-weight="bold" fill="%23b45309">Sénégal</text>

                <!-- Lac Victoria -->
                <circle cx="235" cy="180" r="10" fill="%2338bdf8" stroke="%230284c7" stroke-width="1.5"/>
                <text x="250" y="185" font-size="9" font-weight="bold" fill="%230284c7">Lac Victoria</text>

                <!-- Lac Tanganyika -->
                <ellipse cx="225" cy="210" rx="4" ry="16" fill="%2338bdf8" stroke="%230284c7"/>
                <text x="235" y="215" font-size="8.5" fill="%230369a1">Tanganyika</text>

                <!-- Lac Tchad -->
                <ellipse cx="140" cy="115" rx="8" ry="6" fill="%2338bdf8" stroke="%230284c7"/>
                <text x="150" y="115" font-size="8.5" fill="%230369a1">Lac Tchad</text>
              </g>
              <g transform="translate(480, 70)">
                <rect width="200" height="240" fill="white" stroke="%23cbd5e1" rx="10"/>
                <text x="100" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="%230f172a">REPERES HYDROLOGIQUES</text>
                <line x1="15" y1="30" x2="185" y2="30" stroke="%23e2e8f0"/>
                <text x="15" y="50" font-size="10" font-weight="bold" fill="%230284c7">• Nil :</text>
                <text x="25" y="65" font-size="9" fill="%23475569">6 650 km (plus long fleuve)</text>

                <text x="15" y="85" font-size="10" font-weight="bold" fill="%232563eb">• Congo :</text>
                <text x="25" y="100" font-size="9" fill="%23475569">41 000 m³/s (débit n°2 mondial)</text>

                <text x="15" y="120" font-size="10" font-weight="bold" fill="%23059669">• Niger :</text>
                <text x="25" y="135" font-size="9" fill="%23475569">4 200 km (delta intérieur)</text>

                <text x="15" y="155" font-size="10" font-weight="bold" fill="%23d97706">• Sénégal :</text>
                <text x="25" y="170" font-size="9" fill="%23475569">1 790 km (OMVS)</text>

                <text x="15" y="190" font-size="10" font-weight="bold" fill="%230284c7">• Lac Victoria :</text>
                <text x="25" y="205" font-size="9" fill="%23475569">68 800 km² (n°1 Afrique)</text>
                <text x="25" y="220" font-size="8.5" fill="%2364748b">Source du Nil Blanc</text>
              </g>
            </svg>`,
            caption: 'Figure 7 : Réseau hydrographique majeur de l\'Afrique : fleuves et grands lacs.'
          }
        }
      ]
    },
    {
      title: 'II. LES GRANDS LACS AFRICAINS ET LES RÉGIMES HYDROLOGIQUES',
      content: [
        `L'Afrique de l'Est abrite la deuxième plus grande concentration d'eau douce lacustre au monde après l'Amérique du Nord.`
      ],
      subsections: [
        {
          subtitle: 'A. Les types de lacs africains',
          content: [
            `• Les lacs tectoniques du Rift : Formés dans les profondes failles tectoniques, ils sont étroits, très allongés et extraordinairement profonds :`,
            `  - Le lac Tanganyika : Deuxième lac le plus profond du monde (1 470 m de profondeur) après le lac Baïkal.`,
            `  - Le lac Malawi (ou Nyassa) : Profond de 700 m.`,
            `• Les lacs de cuvette peu profonds :`,
            `  - Le lac Victoria : Plus grand lac d'Afrique (environ 68 800 km²), mais peu profond (80 m au maximum).`,
            `  - Le lac Tchad : Lac résiduel d'eau douce en zone sahélienne dont la superficie a diminué de 90% sous l'effet des sécheresses et des prélèvements agricoles.`
          ]
        },
        {
          subtitle: 'B. Les régimes fluviaux et le potentiel économique',
          content: [
            `• Régime équatorial (fleuve Congo) : Alimentation toute l'année, variations de débit faibles.`,
            `• Régime tropical (fleuve Sénégal, Niger) : Marqué par de violentes crues pendant l'hivernage et un étiage très bas en saison sèche.`,
            `• Le potentiel économique : Énorme potentiel hydroélectrique (barrage de Manantali au Mali pour l'OMVS, barrage d'Assouan en Égypte, Grand barrage de la Renaissance en Éthiopie, projet de barrage Grand Inga en RDC).`
          ]
        }
      ]
    },
    {
      title: "III. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Exercices pour tester la maîtrise de l'hydrographie africaine.`
      ],
      subsections: [
        {
          subtitle: 'Exercice de synthèse',
          content: [
            `1. Quel est le fleuve le plus long d'Afrique et celui qui a le plus fort débit ?`,
            `2. Pourquoi le fleuve Congo conserve-t-il un débit régulier tout au long de l'année ?`,
            `3. Citer les pays membres de l'OMVS et le nom d'un barrage hydroélectrique construit sur le bassin du fleuve Sénégal.`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Le fleuve le plus long est le Nil (6 650 km). Le fleuve au plus fort débit est le Congo (environ 41 000 m³/s).`,
            `2. Le fleuve Congo s'écoule de part et d'autre de l'Équateur : quand ses affluents de la rive droite (hémisphère Nord) sont en saison sèche, ses affluents de la rive gauche (hémisphère Sud) sont en pleine saison des pluies, et inversement. Il reçoit donc de l'eau en abondance sans interruption.`,
            `3. L'OMVS regroupe le Sénégal, le Mali, la Mauritanie et la Guinée. Parmi les barrages célèbres figurent le barrage hydroélectrique de Manantali (Mali) et le barrage anti-sel de Diama (Sénégal/Mauritanie).`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 9 : L\\\n\nINTRODUCTION\nL'Afrique dispose d'un réseau hydrographique colossal comprenant certains des plus célèbres fleuves du monde et de gigantesques lacs d'eau douce. Pourtant, cette ressource vitale est très inégalement répartie à la surface du continent. Tandis que l'Afrique centrale et le bassin équatorial regorgent d'une abondance hydrique permanente, les zones désertiques et sahéliennes souffrent de sécheresses chroniques et d'un stress hydrique sévère. Les fleuves africains, rythmés par les saisons climatiques, présentent des régimes contrastés et constituent une ressource géostratégique majeure pour la production d'électricité, l'irrigation et la pêche.\n\nSchéma Récapitulatif : Hydrographie et Grands Bassins Africains\n\nLes artères vitales\n\nRéserves d\\\n\nPotentiel hydraulique\n\nI. LES GRANDS FLEUVES AFRICAINS ET LEURS CARACTÉRISTIQUES\n\nA. Le Nil et le Congo : deux géants mondiaux\n\nB. Le fleuve Niger et le fleuve Sénégal en Afrique de l\\\n\nII. LES GRANDS LACS AFRICAINS ET LES RÉGIMES HYDROLOGIQUES\n\nA. Les types de lacs africains\n\nB. Les régimes fluviaux et le potentiel économique\n\nIII. EXERCICES D\n\nExercice de synthèse\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nL'hydrographie africaine est un atout stratégique inestimable. La coopération transfrontalière autour des bassins partagés (comme l'OMVS pour le fleuve Sénégal) est un modèle indispensable pour garantir la paix et l'accès à l'eau.",
  conclusion: `L'hydrographie africaine est un atout stratégique inestimable. La coopération transfrontalière autour des bassins partagés (comme l'OMVS pour le fleuve Sénégal) est un modèle indispensable pour garantir la paix et l'accès à l'eau.`
};

export const LESSON_10_GEOGRAPHIE_4EME: LessonContent = {
  id: 'geo-4eme-lecon-10',
  number: 'LEÇON 10',
  title: 'LA VÉGÉTATION ET LA FAUNE EN AFRIQUE',
  subject: 'Géographie',
  classLevel: '4ème',
  introduction: `La végétation et la faune d'Afrique sont directement tributaires de la répartition des zones climatiques et des quantités de pluie. En se déplaçant de l'Équateur humide vers les déserts arides du Nord et du Sud, les formations végétales subissent une dégradation progressive : la majestueuse forêt dense sempervirente cède la place à la savane arborée, puis à la steppe buissonneuse épineuse, avant de s'effacer devant le désert stérile. À chaque domaine végétal correspond une faune sauvage admirablement adaptée. Cette extraordinaire biodiversité africaine constitue un patrimoine mondial inestimable, aujourd'hui gravement menacé par la déforestation, le braconnage et l'avancée du désert.`,
  diagram: {
    title: 'Schéma Récapitulatif : Les Grands Domaines Bioclimatiques d\'Afrique',
    root: 'BIOMES AFRICAINS',
    branches: [
      {
        name: 'Forêt Dense Équatoriale',
        subtitle: 'Canopée et biodiversité luxuriante',
        items: [
          'Arbres géants à étages multiples (fromager, acajou, okoumé) jusqu\'à 50 m',
          'Faune arboricole : Singes (chimpanzés, gorilles), oiseaux rares',
          'Grands mammifères forestiers : Éléphants de forêt, léopards, okapis'
        ]
      },
      {
        name: 'Savanes et Steppes',
        subtitle: 'Milieux ouverts tropicaux',
        items: [
          'Savane arborée et herbeuse (baobabs, rôniers, acacias)',
          'Royaume des grands herbivores (zèbres, girafes, antilopes, buffles)',
          'Grands prédateurs carnivores (lions, guépards, hyènes)',
          'Steppe sahélienne : Graminées courtes et buissons épineux (épineux)'
        ]
      },
      {
        name: 'Déserts & Préservation',
        subtitle: 'Adaptations et menaces',
        items: [
          'Plantes xérophiles (cactus, épineux) et oasis de palmiers-dattiers',
          'Menaces : Déforestation pour bois de chauffe, braconnage, feux de brousse',
          'Protection : Parcs nationaux (Niokolo-Koba au Sénégal, Serengeti en Tanzanie)'
        ]
      }
    ]
  },
  sections: [
    {
      title: 'I. LE DOMAINE DE LA FORÊT DENSE ÉQUATORIALE',
      content: [
        `La forêt dense équatoriale (ou forêt ombrophile sempervirente) se développe dans les régions chaudes et humides toute l'année, principalement dans la cuvette du Congo et le littoral du golfe de Guinée.`
      ],
      subsections: [
        {
          subtitle: 'A. Caractéristiques botaniques de la forêt dense',
          content: [
            `• Une forêt toujours verte (sempervirente) : Les arbres ne perdent pas toutes leurs feuilles en même temps.`,
            `• Une organisation verticale en plusieurs étages (strates) :`,
            `  - La strate émergente : Arbres géants atteignant 40 à 60 mètres de hauteur (acajou, okoumé, fromager ou baobab de forêt).`,
            `  - La canopée continue : Voûte de feuillage dense située entre 20 et 30 mètres qui intercepte la lumière du soleil, laissant le sol dans une pénombre humide permanente.`,
            `  - Le sous-bois : Fougeuses, lianes géantes entrelacées et plantes épiphytes qui s'accrochent aux troncs pour capter la lumière.`
          ]
        },
        {
          subtitle: 'B. La faune de la forêt dense',
          content: [
            `Le manque d'espace au sol favorise les animaux capables de grimper et de voler :`,
            `• Animaux arboricoles : Chimpanzés, gorilles des plaines et des montagnes, colobes, oiseaux multicolores (calaos, perroquets).`,
            `• Insectes et reptiles : Serpents venimeux, pythons, myriades de papillons et de termites.`,
            `• Faune terrestre spécialisée : Éléphants nains de forêt, buffles de forêt, potamochères et okapis.`
          ]
        }
      ]
    },
    {
      title: 'II. LE DOMAINE DES SAVANES ET DES STEPPES TROPICALES',
      content: [
        `En s'éloignant de la forêt équatoriale, la diminution des précipitations entraîne l'apparition de milieux ouverts où l'herbe domine.`
      ],
      subsections: [
        {
          subtitle: 'A. La savane (humide à sèche)',
          content: [
            `• Végétation : Tapis continu de hautes herbes (pouvant atteindre 2 à 3 mètres pendant l'hivernage) parsemé d'arbres isolés résistants au feu : le baobab (arbre emblématique du Sénégal), le rônier, le néré et le karité.`,
            `• Le paradis des grands mammifères : C'est le biotope des grands troupeaux d'herbivores migrateurs (zèbres, gnous, girafes, éléphants de savane, phacochères) et de leurs redoutables prédateurs (lions, léopards, guépards, hyènes tachetées).`
          ]
        },
        {
          subtitle: 'B. La steppe sahélienne',
          content: [
            `• Végétation : Tapis discontinu d'herbes rases et buissons épineux (famille des acacias comme Acacia senegal produisant la gomme arabique).`,
            `• Faune : Animaux sobres capables de parcourir de longues distances sans boire (gazelles, dromadaires, outardes, rongeurs).`
          ]
        }
      ]
    },
    {
      title: 'III. LE DOMAINE DÉSERTIQUE ET LA CONSERVATION DE LA NATURE',
      content: [
        `Dans les déserts (Sahara, Kalahari), la vie végétale est extrêmement clairsemée et conditionnée par la présence des nappes souterraines.`
      ],
      subsections: [
        {
          subtitle: 'A. Adaptations au désert',
          content: [
            `• Végétation xérophile : Plantes à longues racines pivotantes, feuilles réduites en épines pour éviter l'évaporation (cactus, acacias sahariens). Dans les oasis, les palmiers-dattiers créent des îlots d'agriculture intensive.`,
            `• Faune désertique : Fennecs aux grandes oreilles dissipant la chaleur, vipères à cornes, scorpions, dromadaires.`
          ]
        },
        {
          subtitle: 'B. Menaces anthropiques et parcs nationaux',
          content: [
            `• Menaces : Déforestation massive pour le charbon de bois, surpâturage du bétail, feux de brousse tardifs et braconnage des espèces protégées (rhinocéros pour leurs cornes, éléphants pour l'ivoire).`,
            `• Protection : Création de sanctuaires naturels comme le Parc National du Niokolo-Koba et le Parc des Oiseaux du Djoudj au Sénégal, le Serengeti en Tanzanie ou le Kruger en Afrique du Sud.`
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS DÉTAILLÉS",
      content: [
        `Exercices pour vérifier l'assimilation des domaines biogéographiques africains.`
      ],
      subsections: [
        {
          subtitle: 'Exercice : Vrai/Faux et justifications',
          content: [
            `1. Vrai ou Faux : Dans la forêt équatoriale dense, la majorité des animaux vivent au sol dans les herbes.`,
            `2. Nommer deux arbres caractéristiques de la savane sénégalaise.`,
            `3. Quelles sont les principales menaces qui pèsent sur la faune et la flore en Afrique ?`,
            `4. Citer un parc national réputé au Sénégal participant à la conservation de la biodiversité.`
          ]
        },
        {
          subtitle: 'Corrigé détaillé de l\'Exercice',
          content: [
            `1. Faux : Le sol de la forêt équatoriale est obscur et encombré ; la majorité des animaux (singes, oiseaux) vivent dans la canopée arboricole.`,
            `2. Le baobab (Adansonia digitata) et le rônier (ou acacia).`,
            `3. La déforestation pour le bois de chauffe, les feux de brousse, le surpâturage entraînant la désertification, et le braconnage illégal des grands animaux.`,
            `4. Le Parc National du Niokolo-Koba (situé dans le sud-est du Sénégal) ou le Parc National des Oiseaux du Djoudj dans le delta du fleuve Sénégal.`
          ]
        }
      ]
    }
  ],
  fullText: "LEÇON 10 : LA VÉGÉTATION ET LA FAUNE EN AFRIQUE\n\nINTRODUCTION\nLa végétation et la faune d'Afrique sont directement tributaires de la répartition des zones climatiques et des quantités de pluie. En se déplaçant de l'Équateur humide vers les déserts arides du Nord et du Sud, les formations végétales subissent une dégradation progressive : la majestueuse forêt dense sempervirente cède la place à la savane arborée, puis à la steppe buissonneuse épineuse, avant de s'effacer devant le désert stérile. À chaque domaine végétal correspond une faune sauvage admirablement adaptée. Cette extraordinaire biodiversité africaine constitue un patrimoine mondial inestimable, aujourd'hui gravement menacé par la déforestation, le braconnage et l'avancée du désert.\n\nSchéma Récapitulatif : Les Grands Domaines Bioclimatiques d\\\n\nCanopée et biodiversité luxuriante\n\nMilieux ouverts tropicaux\n\nAdaptations et menaces\n\nI. LE DOMAINE DE LA FORÊT DENSE ÉQUATORIALE\n\nA. Caractéristiques botaniques de la forêt dense\n\nB. La faune de la forêt dense\n\nII. LE DOMAINE DES SAVANES ET DES STEPPES TROPICALES\n\nA. La savane (humide à sèche)\n\nB. La steppe sahélienne\n\nIII. LE DOMAINE DÉSERTIQUE ET LA CONSERVATION DE LA NATURE\n\nA. Adaptations au désert\n\nB. Menaces anthropiques et parcs nationaux\n\nIV. EXERCICES D\n\nExercice : Vrai/Faux et justifications\n\nCorrigé détaillé de l\\\n\nCONCLUSION\nLa biodiversité végétale et animale de l'Afrique est un trésor écologique et touristique universel. La préservation de ces écosystèmes fragiles par l'éducation des populations et la création d'aires protégées est un impératif pour les générations futures.",
  conclusion: `La biodiversité végétale et animale de l'Afrique est un trésor écologique et touristique universel. La préservation de ces écosystèmes fragiles par l'éducation des populations et la création d'aires protégées est un impératif pour les générations futures.`
};
