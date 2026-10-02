import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE TERMINALE (SÉRIES L & S) — PARTIE 3 (LEÇONS 8 À 10)
// Les géants d'Asie et puissances émergentes : Japon, Chine et Brésil
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_8_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-8',
  number: 'LEÇON 8',
  title: 'LE JAPON : UNE PUISSANCE ASIATIQUE ORIGINALE ET SES LIMITES',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Deuxième Partie • Les grandes puissances économiques mondiales (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Étude géographique du modèle de développement nippon : le défi relevé d'un archipel insulaire exigu et exposé aux risques naturels majeurs (séismes, tsunamis, volcanisme), les ressorts du miracle économique d'après-guerre (rôle de l'État et du MITI, conglomérats Keiretsu, toyotisme et qualité totale), l'organisation spatiale hyper-concentrée de la mégalopole du Tokaido (Tokyo-Nagoya-Osaka), et les défis existentiels contemporains : vieillissement démographique extrême, dette publique record dépassant 260 % du PIB et vulnérabilité énergétique exacerbée par la catastrophe de Fukushima.",
  image: {
    caption: 'Figure 8.1 : L’archipel japonais et la mégalopole côtière du Tokaido',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="japGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#japGrad)" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">L'ESPACE ÉCONOMIQUE NIPPON : LA MÉGALOPOLE DU TOKAIDO &amp; LE MODÈLE INDUSTRIEL</text>
      
      <!-- Colonne 1 : Contraintes naturelles & Résilience -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">1. CONTRAINTES &amp; SURMONTE</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Archipel montagneux à 73% (Honshu)</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Ceinture de feu du Pacifique (séismes)</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Risques majeurs : séismes, tsunamis, typhons</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Catastrophe de Fukushima Daiichi (2011)</text>
      <text x="35" y="178" font-size="10" font-weight="bold" fill="#047857">• Résilience technique :</text>
      <text x="35" y="195" font-size="9" fill="#4b5563">• Polders industriels géants conquis sur la mer</text>
      <text x="35" y="208" font-size="9" fill="#4b5563">• Normes antisismiques les plus strictes au monde</text>
      
      <!-- Colonne 2 : La Mégalopole Tokaido -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">2. LA MÉGALOPOLE TOKAIDO</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Axe urbanisé de plus de 500 km :</text>
      <text x="295" y="118" font-size="9" fill="#dc2626">Tokyo-Yokohama → Nagoya → Osaka-Kobe</text>
      <text x="285" y="138" font-size="10" fill="#374151">• 80 millions d'habitants (65% pop japonaise)</text>
      <text x="285" y="156" font-size="10" fill="#374151">• Produit plus de 75% du PIB industriel national</text>
      <text x="285" y="174" font-size="10" fill="#374151">• Reliée par le Shinkansen (train à grande vitesse)</text>
      <text x="285" y="195" font-size="10" font-weight="bold" fill="#1e3a8a">Tokyo : 1re aire urbaine mondiale (37M hab)</text>
      
      <!-- Colonne 3 : Défis et Crise du Modèle -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#6b7280" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#1f2937" text-anchor="middle">3. LIMITES STRUCTURELLES</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Hiver démographique le plus grave :</text>
      <text x="550" y="118" font-size="9" fill="#991b1b">Fécondité : 1,2 • 30% ont plus de 65 ans</text>
      <text x="540" y="138" font-size="10" fill="#374151">• Perte de 500 000 habitants par an</text>
      <text x="540" y="156" font-size="10" fill="#374151">• Dette publique record : &gt; 260% du PIB</text>
      <text x="540" y="174" font-size="10" fill="#374151">• Dépendance énergétique : 90% hydrocarbures</text>
      <text x="540" y="195" font-size="9" font-weight="bold" fill="#047857">Concurrence directe de la Chine et de la Corée</text>
    </svg>`
  },
  introduction: "Le Japon représente un modèle unique de réussite économique et technologique en Asie. Privé de ressources minérales et énergétiques, confiné sur un archipel volcanique et montagneux exigu de 378 000 km² soumis aux caprices dévastateurs de la nature, l'Empire du Soleil-Levant a su se hisser au rang de quatrième puissance économique de la planète (après avoir longtemps occupé le deuxième rang mondial derrière les États-Unis). Ce 'miracle' économique s'est appuyé sur une cohésion sociale remarquable, une organisation industrielle révolutionnaire (le toyotisme, les Keiretsu) et un investissement massif dans la recherche et le développement. Néanmoins, le pays est aujourd'hui confronté à une crise existentielle sans précédent marquée par un déclin démographique accéléré, une dette publique colossale et la concurrence féroce de ses voisins asiatiques.",
  sections: [
    {
      title: "I. Les contraintes du milieu naturel et le défi de l'espace",
      content: [
        "1. L'exiguïté et le morcellement d'un territoire hostile :",
        "   - Archipel formé de quatre îles principales (Honshu, Hokkaido, Kyushu, Shikoku) et de milliers d'îlots.",
        "   - Relief dominé à 73 % par des montagnes accidentées et des forêts, laissant seulement 15 % de terres planes utilisables pour l'agriculture, l'habitat et les usines (les plaines littorales comme celle du Kanto autour de Tokyo).",
        "2. Les risques naturels majeurs omniprésents :",
        "   - Localisation sur la 'ceinture de feu du Pacifique' à la jonction instable de quatre plaques tectoniques (Pacifique, Eurasienne, Philippine et Nord-Américaine).",
        "   - Plus de 100 volcans actifs (dont le mont Fuji), des milliers de secousses sismiques annuelles, typhons dévastateurs en fin d'été et risques de tsunamis meurtriers (séisme et tsunami de Sendai du 11 mars 2011 provoquant la catastrophe nucléaire de Fukushima Daiichi).",
        "3. La conquête de l'espace sur la mer et les prouesses technologiques :",
        "   - Aménagement systématique de polders industriels et terre-pleins artificiels conquis sur les baies côtières (baie de Tokyo, baie d'Osaka avec l'aéroport international du Kansai entièrement construit sur une île artificielle flottante).",
        "   - Infrastructures de désenclavement titanesques : le tunnel sous-marin du Seikan (53 km reliant Honshu à Hokkaido) et les ponts suspendus de Seto-Ohashi."
      ]
    },
    {
      title: "II. Les ressorts du modèle économique nippon et la puissance industrielle",
      content: [
        "1. Le rôle stratégique de l'État et des Keiretsu :",
        "   - Rôle coordinateur historique du puissant Ministère de l'Économie, du Commerce et de l'Industrie (METI, anciennement MITI) orientant les investissements nationaux vers les secteurs d'avenir.",
        "   - Les 'Keiretsu' : conglomérats industriels et financiers géants aux participations croisées, articulés autour d'une banque pivot et d'une société générale de commerce ('Sogo Shosha' comme Mitsubishi, Mitsui, Sumitomo).",
        "2. L'innovation managériale et productive : le Toyotisme :",
        "   - Conçu par l'ingénieur Taiichi Ohno chez Toyota, ce modèle d'organisation du travail a supplanté le fordisme occidental.",
        "   - Principes des 'cinq zéros' : zéro panne, zéro défaut, zéro délai, zéro stock (gestion en flux tendus ou 'Just-in-Time' / Kanban) et zéro papier.",
        "3. Les fleurons industriels mondiaux :",
        "   - Automobile : Toyota (premier constructeur mondial en volume), Honda, Nissan.",
        "   - Électronique grand public, optique et robotique de pointe : Sony, Panasonic, Canon, Nikon, Fanuc (leader mondial des robots industriels).",
        "   - Pôle financier de Tokyo : la bourse de Kabuto-cho et des banques géantes (MUFG)."
      ]
    },
    {
      title: "III. L'organisation spatiale : la domination écrasante de la Mégalopole Tokaido",
      content: [
        "1. La Mégalopole du Tokaido (le Japon de l'Endroit) :",
        "   - Ruban urbain continu et surpeuplé de plus de 500 kilomètres le long de la façade pacifique sud, reliant les conurbations du Grand Tokyo (plaine du Kanto), de Nagoya (région du Chubu) et du Kansai (Osaka-Kyoto-Kobe).",
        "   - Concentre plus de 80 millions d'habitants (près des deux tiers de la population nippone) sur moins de 20 % du territoire national, et génère plus des trois quarts de la richesse industrielle du pays.",
        "   - Desservie par la première ligne ferroviaire à grande vitesse du monde, le Shinkansen (inauguré en 1964).",
        "2. Le 'Japon de l'Envers' :",
        "   - Façade bordant la mer du Japon et l'île septentrionale d'Hokkaido : espaces ruraux et montagneux enclavés, subissant des hivers rigoureux et un dépeuplement continu au profit de la capitale."
      ]
    },
    {
      title: "IV. Les vulnérabilités critiques et le déclin relatif du Japon",
      content: [
        "1. La catastrophe démographique : le pays le plus vieux du monde :",
        "   - Taux de fécondité effondré à 1,2 enfant par femme. Plus de 30 % de la population a désormais plus de 65 ans.",
        "   - Le Japon perd plus de 500 000 habitants chaque année (sa population est passée de 128 millions en 2010 à moins de 124 millions aujourd'hui et pourrait tomber sous 90 millions en 2060).",
        "   - Phénomène massif des villages fantômes ('Akiya' : millions de maisons abandonnées) et fermeture annuelle de centaines d'écoles reconverties.",
        "   - Réticence culturelle et politique historique envers l'immigration de travail.",
        "2. L'endettement public record :",
        "   - La dette publique dépasse 260 % du PIB, le niveau le plus élevé de tous les pays industrialisés, résultat de décennies de plans de relance successifs après l'éclatement de la bulle spéculative des années 1990.",
        "3. La dépendance énergétique et la concurrence asiatique :",
        "   - Importation de plus de 90 % de ses besoins en énergies fossiles, dépendance aggravée par la mise à l'arrêt prolongée du parc nucléaire après l'accident de Fukushima.",
        "   - Perte de parts de marché massives dans l'électronique face aux géants sud-coréens (Samsung) et chinois."
      ]
    }
  ]
};

export const LESSON_9_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-9',
  number: 'LEÇON 9',
  title: 'LA CHINE : L’ÉMERGENCE D’UNE NOUVELLE SUPERPUISSANCE MONDIALE',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Deuxième Partie • Les grandes puissances économiques mondiales (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Analyse géographique de la trajectoire spectaculaire de l'Empire du Milieu : de l'ère maoïste aux réformes pragmatiques de Deng Xiaoping ('socialisme de marché' à partir de 1978), littoralisation et Zones Économiques Spéciales (ZES), statut d'« atelier du monde », montée en gamme technologique foudroyante (BATX, véhicules électriques, IA, conquête spatiale), la stratégie planétaire des Nouvelles Routes de la Soie (Belt and Road Initiative), et les formidables défis intérieurs : disparités criantes entre le littoral prospère et l'Ouest intérieur, dégradation environnementale et tournant démographique lié à la fin de la politique de l'enfant unique.",
  image: {
    caption: 'Figure 9.1 : L’organisation spatiale de la Chine et l’ouverture sur le monde',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="chnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#chnGrad)" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">L'ESPACE CHINOIS : LITTORALISATION, ZONES ÉCONOMIQUES SPÉCIALES &amp; NOUVELLES ROUTES DE LA SOIE</text>
      
      <!-- Colonne 1 : La Façade Littorale Prospère -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">1. LA CHINE DU LITTORAL</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Cœur battant de l'économie (80% des exportations)</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Les ZES pionnières (Shenzhen, Zhuhai)</text>
      <text x="35" y="138" font-size="10" fill="#374151">• Delta du Yangzi Jiang : Shanghai (1er port mondial)</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Delta de la Rivière des Perles : Shenzhen, Canton</text>
      <text x="35" y="174" font-size="10" fill="#374151">• Pôle politique et culturel : Pékin (Beijing)</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#047857">Montée en gamme : BATX &amp; Tech</text>
      <text x="35" y="210" font-size="9" fill="#047857">Huawei, BYD (voitures électriques), TikTok</text>
      
      <!-- Colonne 2 : L'Intérieur et l'Ouest Chinois -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">2. CHINE DU CENTRE &amp; DE L'OUEST</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Le Centre : grenier agricole et bassin de main-d'œuvre (Wuhan, Chongqing : métropole de 32M hab)</text>
      <text x="285" y="126" font-size="10" fill="#374151">• L'Ouest aride et montagneux :</text>
      <text x="295" y="142" font-size="9" fill="#4b5563">Tibet, Xinjiang (minorité Ouïghoure)</text>
      <text x="285" y="160" font-size="10" fill="#374151">• Richesses minières, pétrole, gaz et coton</text>
      <text x="285" y="178" font-size="10" fill="#374151">• Programme d'État 'Go West' (désenclavement TGV)</text>
      <text x="285" y="198" font-size="10" font-weight="bold" fill="#dc2626">Disparités de revenus de 1 à 3 avec le littoral</text>
      
      <!-- Colonne 3 : Les Nouvelles Routes de la Soie -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">3. « BELT AND ROAD INITIATIVE »</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Projet géostratégique mondial (BRI lancé en 2013) :</text>
      <text x="540" y="124" font-size="9" fill="#1e40af">• Route terrestre eurasiatique (trains de fret vers l'Europe)</text>
      <text x="540" y="142" font-size="9" fill="#1e40af">• Route maritime du XXIe siècle (collier de perles)</text>
      <text x="540" y="160" font-size="10" fill="#374151">• Investissements massifs en Afrique :</text>
      <text x="550" y="176" font-size="9" fill="#047857">Ports de Djibouti, chemins de fer, mines</text>
      <text x="540" y="198" font-size="10" font-weight="bold" fill="#dc2626">Ambition de supplanter le leadership US</text>
    </svg>`
  },
  introduction: "En l'espace de quatre décennies, la République Populaire de Chine a accompli la plus prodigieuse métamorphose économique de l'histoire moderne. Pays agraire pauvre et meurtri par le maoïsme à la mort de Mao Zedong en 1976, la Chine est aujourd'hui la deuxième puissance économique mondiale en PIB nominal (dépassant 18 000 milliards de dollars) et la première puissance en Parité de Pouvoir d'Achat (PPA). Devenue l'incontestable 'atelier du monde' puis une superpuissance technologique et spatiale de premier rang, la Chine déploie son influence planétaire via les Nouvelles Routes de la Soie. Toutefois, cette ascension fulgurante s'accompagne de déséquilibres intérieurs monumentaux entre une façade littorale hyper-développée et un arrière-pays continental déshérité.",
  sections: [
    {
      title: "I. De la rupture maoïste aux réformes du « socialisme de marché »",
      content: [
        "1. L'héritage de l'ère maoïste (1949-1976) :",
        "   - Collectivisation forcée des terres (communes populaires), industrialisation lourde étatique sur le modèle stalinien.",
        "   - Tragédies humaines colossales : la famine meurtrière du 'Grand Bond en avant' (1958-1961, faisant plus de 30 millions de morts) et le chaos de la 'Révolution culturelle' (1966-1976).",
        "2. Le tournant historique pragmatique de Deng Xiaoping (décembre 1978) :",
        "   - Adoption du slogan réaliste : 'Peu importe qu'un chat soit blanc ou noir, pourvu qu'il attrape les souris'.",
        "   - Théorie des 'Quatre Modernisations' (agriculture, industrie, science et technologie, défense nationale) et décollectivisation agricole avec le système de responsabilité familiale.",
        "3. La politique de la 'porte ouverte' et la littoralisation :",
        "   - Création à partir de 1980 des premières Zones Économiques Spéciales (ZES) dans le Sud : Shenzhen (village de pêcheurs devenu une mégapole technologique de 17 millions d'habitants à côté de Hong Kong), Zhuhai, Shantou, Xiamen, puis ouverture de 14 villes côtières.",
        "   - Avantages fiscaux et douaniers accordés aux capitaux étrangers (IDE) de la diaspora chinoise pour attirer les délocalisations industrielles mondiales."
      ]
    },
    {
      title: "II. L'« atelier du monde » et la montée en gamme technologique",
      content: [
        "1. La domination manufacturière planétaire :",
        "   - Premier exportateur mondial de marchandises depuis son adhésion décisive à l'OMC en décembre 2001.",
        "   - Production de plus de 50 % de l'acier mondial, 70 % des panneaux solaires photovoltaïques, 80 % des climatiseurs et ordinateurs portables, et près de 90 % des terres rares raffinées indispensables aux technologies vertes et d'armement.",
        "2. La transformation en géant de la haute technologie ('Made in China 2025') :",
        "   - Émergence des géants du numérique (BATX : Baidu, Alibaba, Tencent, Xiaomi) rivalisant avec les GAFAM.",
        "   - Domination écrasante dans le déploiement des réseaux de télécommunication 5G (Huawei) et dans les véhicules électriques (BYD devenant le premier constructeur mondial de voitures électriques, surclassant Tesla).",
        "   - Programme spatial autonome spectaculaire : station spatiale Tiangong habitée en orbite, missions lunaires (Chang'e) avec alunissage réussi sur la face cachée de la Lune, et exploration de la planète Mars (robot Zhurong)."
      ]
    },
    {
      title: "III. L'organisation spatiale : les contrastes géographiques de la Chine",
      content: [
        "1. La Chine côtière et littorale (le cœur économique triomphant) :",
        "   - Les trois grands foyers urbains et industriels moteurs :",
        "     * Le delta de la Rivière des Perles (Guangzhou, Shenzhen, Hong Kong) : pôle mondial de l'électronique.",
        "     * Le delta du fleuve Yangzi Jiang (Shanghai, Hangzhou, Suzhou) : premier pôle portuaire, financier et manufacturier.",
        "     * Le golfe de Bohai au nord (Pékin, Tianjin) : commandement politique, industrie lourde et hautes technologies.",
        "2. La Chine centrale et intérieure (l'arrière-pays en transition) :",
        "   - Régions rizicoles très peuplées traversées par le Yangzi Jiang (barrage hydroélectrique des Trois-Gorges, le plus grand de la planète).",
        "   - Métropoles géantes en plein essor industriel (Wuhan, Chengdu, Chongqing).",
        "3. La Chine de l'Ouest (les immensités périphériques arides) :",
        "   - Xinjiang et Tibet : plus de la moitié du territoire national mais moins de 5 % de la population.",
        "   - Enjeux stratégiques majeurs : réserves d'uranium, de pétrole et de gaz, couloirs terrestres vers l'Asie centrale et tensions géopolitiques avec les minorités ouïghoure et tibétaine."
      ]
    },
    {
      title: "IV. Les défis intérieurs majeurs et la géopolitique des Nouvelles Routes de la Soie",
      content: [
        "1. Les fractures sociales et la question des Mingong :",
        "   - Près de 290 millions de travailleurs migrants ruraux ('Mingong') sans permis de résidence urbain (Hukou), longtemps privés d'accès aux services publics (écoles, hôpitaux) dans les métropoles côtières.",
        "2. Le choc du vieillissement démographique :",
        "   - Héritage de la politique drastique de l'enfant unique (1979-2015) : taux de fécondité tombé à 1,0 enfant par femme.",
        "   - Entrée de la Chine dans une phase de décroissance démographique irréversible, dépassée par l'Inde comme pays le plus peuplé du globe en 2023.",
        "3. Le défi environnemental catastrophique :",
        "   - Premier émetteur mondial de gaz à effet de serre (brûlant plus de la moitié du charbon mondial), pollution sévère des nappes phréatiques et des sols agricoles.",
        "4. Les Nouvelles Routes de la Soie ('Belt and Road Initiative' - BRI) :",
        "   - Titanesque projet d'infrastructures reliant la Chine à l'Asie centrale, l'Afrique et l'Europe par des voies ferrées, oléoducs et ports maritimes pour sécuriser ses approvisionnements énergétiques et écouler ses surcapacités industrielles."
      ]
    }
  ]
};

export const LESSON_10_GEOGRAPHIE_TLE: LessonContent = {
  id: 'geo-tle-lecon-10',
  number: 'LEÇON 10',
  title: 'LE BRÉSIL : GÉANT ÉCONOMIQUE ÉMERGENT D’AMÉRIQUE LATINE ET FRACTURES SOCIALES',
  subject: 'Géographie',
  classLevel: 'Terminale',
  module: 'Deuxième Partie • Les grandes puissances économiques mondiales (Séries L & S)',
  level: "Terminale L & S (Programme du Baccalauréat)",
  readTime: "60 min d'étude approfondie",
  description: "Monographie géographique complète de la première puissance d'Amérique latine : un géant territorial (8,5 millions de km²) et démographique (215 millions d'habitants), superpuissance agricole planétaire (soja, viande bovine, café, sucre/éthanol), puissance industrielle et aéronautique (Embraer), pétrole off-shore présalifère, le triangle moteur du Sudeste (São Paulo, Rio de Janeiro, Belo Horizonte), et les fractures béantes du modèle : inégalités socio-économiques extrêmes, violence urbaine et favelas, saccage écologique de l'Amazonie et instabilité politique.",
  image: {
    caption: 'Figure 10.1 : L’organisation de l’espace brésilien : Le Sudeste moteur et le front pionnier amazonien',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="brzGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#brzGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">L'ORGANISATION DU TERRITOIRE BRÉSILIEN : LE SUDESTE HYPER-PUISSANT &amp; LES PÉRIPHÉRIES</text>
      
      <!-- Colonne 1 : Le Sudeste Moteur -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="137" y="78" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">1. LE SUDESTE MOTEUR</text>
      <text x="35" y="102" font-size="10" fill="#374151">• Triangle São Paulo - Rio - Belo Horizonte</text>
      <text x="35" y="120" font-size="10" fill="#374151">• Concentre plus de 55% du PIB industriel</text>
      <text x="35" y="138" font-size="10" fill="#374151">• São Paulo : mégapole économique (22M hab)</text>
      <text x="35" y="156" font-size="10" fill="#374151">• Port de Santos : 1er port d'Amérique latine</text>
      <text x="35" y="174" font-size="10" fill="#374151">• Siège de Petrobras, Vale, Embraer</text>
      <text x="35" y="196" font-size="10" font-weight="bold" fill="#dc2626">Contraste brutal : favelas &amp; gratte-ciel</text>
      
      <!-- Colonne 2 : L'Agrobusiness du Centre-Ouest -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="390" y="78" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">2. GÉANT DE L'AGROBUSINESS</text>
      <text x="285" y="102" font-size="10" fill="#374151">• Le grenier agricole planétaire :</text>
      <text x="295" y="120" font-size="9" fill="#047857">1er exportateur mondial de soja, sucre, bœuf, jus d'orange et café</text>
      <text x="285" y="142" font-size="10" fill="#374151">• Centre-Ouest (Mato Grosso) et Cerrado</text>
      <text x="285" y="160" font-size="10" fill="#374151">• Fermes géantes mécanisées (Fazendas)</text>
      <text x="285" y="178" font-size="10" fill="#374151">• Capitale politique futuriste : Brasília (1960)</text>
      <text x="285" y="198" font-size="10" font-weight="bold" fill="#1e3a8a">Puissance énergétique hydroélectrique (Itaipu)</text>
      
      <!-- Colonne 3 : L'Amazonie & Le Nordeste -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="642" y="78" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">3. AMAZONIE &amp; NORDESTE</text>
      <text x="540" y="102" font-size="10" fill="#374151">• Le Nordeste : région pauvre historique</text>
      <text x="550" y="118" font-size="9" fill="#4b5563">Sécheresses récurrentes du Sertão, exode rural</text>
      <text x="540" y="138" font-size="10" fill="#374151">• L'Amazonie : front pionnier prédateur</text>
      <text x="550" y="154" font-size="9" fill="#dc2626">Déforestation massive par le feu (brûlis)</text>
      <text x="550" y="168" font-size="9" fill="#dc2626">Gisement de fer géant de Carajás</text>
      <text x="540" y="190" font-size="10" font-weight="bold" fill="#991b1b">Péril climatique planétaire</text>
    </svg>`
  },
  introduction: "Cinquième pays du monde par sa superficie (8,5 millions de km²) et septième par sa population (environ 215 millions d'habitants), le Brésil est le géant incontesté du continent sud-américain. Membre fondateur du groupe des BRICS, le pays s'est affirmé au début du XXIe siècle comme une puissance émergente majeure, combinant un statut de 'ferme du monde' (premier exportateur mondial de soja, de viande bovine et de café) à une industrie aéronautique et pétrolière d'excellence. Toutefois, le 'pays d'avenir' décrit par Stefan Zweig demeure profondément entravé par des disparités régionales séculaires, des inégalités sociales abyssales symbolisées par les favelas, et la destruction alarmante de la forêt amazonienne.",
  sections: [
    {
      title: "I. Les fondements de la puissance brésilienne",
      content: [
        "1. L'immensité territoriale et les ressources naturelles abondantes :",
        "   - Territoire occupant près de la moitié du continent sud-américain, frontalier de 10 pays (tous sauf le Chili et l'Équateur).",
        "   - Le premier réservoir d'eau douce de la planète avec le bassin de l'Amazone et le barrage hydroélectrique d'Itaipu sur le Paraná (l'un des plus puissants du monde partagé avec le Paraguay).",
        "   - Immenses gisements miniers : premier exportateur mondial de minerai de fer de haute teneur (mines à ciel ouvert de Carajás exploitées par le géant Vale), bauxite, manganèse et or.",
        "   - Découverte majeure d'hydrocarbures 'présalifères' offshore en eaux très profondes au large de Rio de Janeiro, propulsant la compagnie nationale Petrobras.",
        "2. Une population métissée et nombreuse :",
        "   - Population jeune et urbanisée à plus de 87 %, issue d'un creuset d'amérindiens, descendants d'esclaves africains (le Brésil ayant été le premier récepteur de la traite négrière transatlantique) et d'immigrants européens et asiatiques (notamment japonais à São Paulo)."
      ]
    },
    {
      title: "II. Les piliers de l'économie : l'agrobusiness et l'industrie de pointe",
      content: [
        "1. La superpuissance agricole planétaire (l'Agrobusiness) :",
        "   - Premier producteur et exportateur mondial de soja (dépassant les États-Unis), de sucre, d'éthanol carburant, de café, de viande bovine, de poulet et de jus d'orange concentré.",
        "   - Modèle des immenses 'Fazendas' ultra-mécanisées du Centre-Ouest (Mato Grosso) et du Cerrado, financées par de puissants lobbies agro-industriels ('bancada ruralista').",
        "2. Une puissance industrielle diversifiée :",
        "   - Constructeur aéronautique mondial Embraer (troisième fabricant d'avions civils au monde derrière Airbus et Boeing, leader mondial des avions régionaux de 70 à 130 places).",
        "   - Pôle automobile, sidérurgique, textile et pétrochimique d'envergure internationale concentré dans le Sudeste."
      ]
    },
    {
      title: "III. Les disparités régionales et l'organisation de l'espace",
      content: [
        "1. Le Sudeste, cœur économique hégémonique :",
        "   - Triangle mégapolitain São Paulo - Rio de Janeiro - Belo Horizonte concentrant plus de 40 % de la population et plus de la moitié du PIB national.",
        "   - São Paulo : capitale économique et financière de l'Amérique du Sud (22 millions d'habitants), connectée au port géant de Santos.",
        "2. Le Sud agricole et moderne :",
        "   - Région tempérée colonisée par des émigrants allemands et italiens, réputée pour son agriculture familiale moderne, son élevage et son haut niveau d'IDH (Curitiba, Porto Alegre).",
        "3. Le Nordeste, périphérie déshéritée :",
        "   - Berceau historique de la canne à sucre, marqué par les sécheresses endémiques du Sertão, le sous-développement et une émigration massive vers les favelas de São Paulo et Rio.",
        "4. Le Centre-Ouest et l'Amazonie (les fronts pionniers) :",
        "   - Création ex nihilo de Brasília au centre du pays en 1960 (plan en forme d'avion d'Oscar Niemeyer et Lúcio Costa) pour désenclaver l'intérieur.",
        "   - L'Amazonie : front pionnier ouvert par des routes de pénétration (Transamazonienne), théâtre de conflits fonciers violents entre bûcherons, orpailleurs clandestins ('garimpeiros'), grands éleveurs et peuples autochtones amérindiens."
      ]
    },
    {
      title: "IV. Les fractures sociales béantes et les menaces écologiques",
      content: [
        "1. L'abîme des inégalités de revenus et les favelas :",
        "   - L'un des coefficients de Gini les plus élevés du monde : les 10 % les plus riches accaparent plus de 40 % du revenu national.",
        "   - Prolifération des 'favelas' (bidonvilles accrochés aux collines de Rio de Janeiro ou s'étendant à perte de vue à São Paulo), marquées par le manque d'assainissement, le chômage et le contrôle armé des cartels de narcotrafiquants.",
        "2. L'urgence écologique : le saccage de la forêt amazonienne :",
        "   - La déforestation accélérée par le brûlis et l'abattage clandestin détruit le plus grand réservoir de biodiversité de la planète et menace son rôle vital de régulateur du climat et de puits de carbone mondial.",
        "3. La vulnérabilité politique et les soubresauts économiques :",
        "   - Forte sensibilité aux fluctuations des cours mondiaux des matières premières (choc de la fin du super-cycle des matières premières) et violentes polarisations politiques intérieures."
      ]
    }
  ]
};
