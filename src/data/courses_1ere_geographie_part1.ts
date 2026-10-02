import { LessonContent } from './courses';

// =========================================================================
// GÉOGRAPHIE CLASSE DE PREMIÈRE (SÉNÉGAL) — VOLUME 1 (LEÇONS 1 À 6)
// Grandes parties I, II, III, IV, V... Figures, Schémas, Courbes & Cartes
// Conforme au programme officiel consolidé de Géographie Première
// =========================================================================

export const LESSON_1_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-1',
  number: 'LEÇON 1',
  title: 'Les inégalités de développement dans le monde',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '25 min',
  description: 'Notions fondamentales, indicateurs composites (PIB, IDH, IPM), fractures Nord-Sud, pays émergents, disparités régionales et facteurs explicatifs du développement.',
  introduction: `Le développement est un processus cumulatif de transformation économique, sociale, démographique et spatiale qui accroît durablement le bien-être et les capabilités des populations. Il ne se réduit en aucun cas à la simple croissance quantitative des richesses produites : un pays peut afficher un produit intérieur brut élevé tout en maintenant une majorité de ses citoyens dans l'extrême précarité. L'analyse des inégalités de développement constitue l'une des clés majeures de la géographie contemporaine, permettant de saisir les disparités entre les grandes régions planétaires, mais également les déchirures territoriales internes qui fragmentent les États du Nord comme ceux du Sud.`,
  sections: [
    {
      title: 'I. NOTIONS FONDAMENTALES ET DISTINCTION CROISSANCE / DÉVELOPPEMENT',
      content: [
        '1. La croissance économique : Elle désigne l\'augmentation quantitative soutenue de la production de biens et de services dans une économie sur une période donnée. Elle se mesure principalement par l\'évolution en pourcentage du Produit Intérieur Brut (PIB). C\'est un phénomène purement matériel, qui peut survenir sans partage équitable des richesses.',
        '2. Le développement : Introduit par les économistes et géographes humanistes, le développement implique des mutations structurelles qualitatives : élévation du niveau d\'instruction, amélioration de l\'espérance de vie et de l\'état sanitaire, émancipation des femmes, accès garanti aux libertés fondamentales et aux infrastructures de base (eau potable, électricité, assainissement).',
        '3. Le mal-développement et le sous-développement : Le sous-développement traduit un blocage structurel caractérisé par la dépendance économique extérieure, l\'extraversion des filières d\'exportation, la désarticulation des secteurs productifs et la pauvreté endémique d\'une grande frange de la population.'
      ],
      table: {
        headers: ['Concept', 'Nature', 'Unité / Indicateur', 'Objectif final'],
        rows: [
          ['Croissance', 'Quantitative', 'Taux de variation du PIB', 'Accumulation de biens matériels'],
          ['Développement', 'Qualitative & Structurelle', 'IDH, IPM, niveau de vie', 'Épanouissement et bien-être humain durable'],
          ['Développement durable', 'Holistique & Intergénérationnelle', 'Indicateurs sociaux, environnementaux et économiques', 'Préservation des ressources pour les générations futures']
        ]
      }
    },
    {
      title: 'II. LES INDICATEURS DE MESURE DU DÉVELOPPEMENT',
      content: [
        'Pour évaluer et cartographier les niveaux de développement, les géographes combinent indicateurs simples et indicateurs composites :',
        '1. Les indicateurs strictement économiques : Le PIB par habitant en Parité de Pouvoir d\'Achat (PPA) permet d\'ajuster les revenus au coût réel de la vie locale. Cependant, il ignore les ravages écologiques, le travail informel non déclaré (vital en Afrique) et l\'inégale répartition interne (mesurée par le coefficient de Gini).',
        '2. L\'Indicateur de Développement Humain (IDH) : Créé en 1990 par le PNUD (sous l\'impulsion d\'Amartya Sen et Mahbub ul Haq), l\'IDH est compris entre 0 et 1. Il synthétise trois dimensions essentielles :',
        '• La santé et la longévité : mesurées par l\'espérance de vie à la naissance (minimum 20 ans, maximum 85 ans).',
        '• L\'accès au savoir et à l\'éducation : calculé à partir de la durée moyenne de scolarisation des adultes de plus de 25 ans et de la durée attendue de scolarisation des enfants d\'âge scolaire.',
        '• Le niveau de vie décent : évalué par le Revenu National Brut (RNB) par habitant exprimé en dollars PPA logarithmiques.',
        '3. L\'Indicateur de Pauvreté Multidimensionnelle (IPM) : Mesure les privations directes vécues simultanément par un ménage en matière de santé (nutrition, mortalité infantile), d\'éducation (années d\'études, fréquentation scolaire) et de conditions de vie (eau potable, combustible, électricité, assainissement, sol du logement).'
      ]
    },
    {
      title: 'III. LA GÉOGRAPHIE MONDIALE DES DISPARITÉS DE DÉVELOPPEMENT',
      content: [
        '1. La fracture Nord-Sud historique : La ligne Brandt, tracée en 1980, séparait traditionnellement un "Nord" riche et industrialisé (Amérique du Nord, Europe occidentale, Japon, Australie) d\'un "Sud" dépendant et sous-développé. Si cette limite conserve une valeur pédagogique, le monde contemporain est devenu beaucoup plus multipolaire et contrasté.',
        '2. L\'émergence des puissances du Sud : Les BRICS (Brésil, Russie, Inde, Chine, Afrique du Sud) et les nouveaux pays industrialisés ont bouleversé l\'économie mondiale en s\'imposant comme usines de la planète ou géants technologiques, générant une classe moyenne nombreuse tout en maintenant de fortes poches de précarité.',
        '3. Les Pays les Moins Avancés (PMA) : Catégorie regroupant environ 45 États (dont plus d\'une trentaine en Afrique subsaharienne, dont le Sénégal longtemps classé parmi eux), confrontés à une vulnérabilité économique extrême, un IDH inférieur à 0,550 et une forte dépendance aux aides extérieures et aux aléas climatiques.'
      ]
    },
    {
      title: 'IV. LES FACTEURS EXPLICATIFS DES DISPARITÉS SPATIALES',
      content: [
        '1. Facteurs historiques et géopolitiques : L\'héritage de la colonisation a structuré des économies de traite extraverties, tournées vers le pillage des matières premières et le drainage vers les ports d\'embarquement côtiers, au détriment des marchés intérieurs.',
        '2. Facteurs politiques et gouvernance : La stabilité institutionnelle, l\'état de droit, la transparence de la gestion publique et la lutte contre la corruption sont des conditions impératives pour attirer les investissements productifs et financer les services publics.',
        '3. Facteurs géographiques et d\'accessibilité : L\'enclavement territorial (absence d\'accès direct à la mer comme au Mali, Burkina Faso ou Niger), l\'éloignement des grandes routes maritimes mondiales et la vulnérabilité aux sécheresses sahéliennes créent des surcoûts logistiques considérables.'
      ]
    },
    {
      title: 'V. LES DISPARITÉS INTRA-ÉTATIQUES : L\'ÉCHELLE LOCALE ET RÉGIONALE',
      content: [
        '1. La fracture métropole / campagne : Dans tous les pays, et particulièrement au Sud, la capitale et les métropoles concentrent les investissements, les universités, les hôpitaux de référence et les emplois qualifiés, reléguant les campagnes périphériques dans l\'isolement.',
        '2. L\'exemple du Sénégal : Dakar, occupant seulement 0,28 % de la superficie nationale, concentre plus de 80 % des industries, des flux financiers et des services modernes, tandis que les régions périphériques de l\'Est et du Sud-Est (Matam, Tambacounda, Kédougou) présentent des déficits marqués en infrastructures de base.',
        '3. La ségrégation spatiale intra-urbaine : Au sein même des agglomérations, la proximité des quartiers huppés et des quartiers informels inondables ou insalubres illustre la dimension territoriale des inégalités sociales.'
      ]
    },
    {
      title: 'VI. TRAVAUX DIRIGÉS ET EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Deux pays A et B ont le même PIB par habitant (4 500 $). Le pays A a une espérance de vie de 72 ans et un taux d\'alphabétisation de 88 %, tandis que le pays B a une espérance de vie de 54 ans et un taux d\'alphabétisation de 42 %. Expliquez pourquoi leurs IDH respectifs divergent fortement.',
        'Correction : L\'IDH est un indicateur composite calculé à partir de trois dimensions pondérées (santé, éducation et niveau de vie). Même si leur RNB/hab est identique, le pays A obtient des indices partiels de santé et d\'éducation très supérieurs à ceux du pays B. Le pays A aura un IDH moyen-élevé (> 0,680) tandis que le pays B aura un IDH faible (< 0,510). Cela prouve que la richesse financière ne suffit pas à définir le développement réel.',
        'Exercice 2 : Calculez l\'écart absolu et l\'écart relatif entre le PIB/hab du pays X (45 000 $) et du pays Y (1 500 $).',
        'Correction : Écart absolu = 45 000 − 1 500 = 43 500 $. Écart relatif = 45 000 / 1 500 = 30. Le citoyen moyen du pays X dispose de 30 fois plus de revenus statistiques que celui du pays Y.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma conceptuel : La mesure composite de l\'IDH (PNUD)',
    root: 'INDICE DE DÉVELOPPEMENT HUMAIN (IDH : 0 à 1)',
    branches: [
      {
        name: 'SANTÉ & LONGÉVITÉ',
        subtitle: 'Indice de Santé (I-Santé)',
        items: [
          'Espérance de vie à la naissance',
          'Valeurs bornes : min 20 ans, max 85 ans',
          'Indicateur de la qualité du système hospitalier',
          'Reflet de la nutrition et de la mortalité infantile'
        ]
      },
      {
        name: 'ACCÈS AU SAVOIR',
        subtitle: 'Indice d\'Éducation (I-Éducation)',
        items: [
          'Durée moyenne de scolarisation des adultes (>25 ans)',
          'Durée attendue de scolarisation des enfants',
          'Mesure de l\'alphabétisation et de la formation technique',
          'Poids déterminant pour l\'employabilité'
        ]
      },
      {
        name: 'NIVEAU DE VIE DÉCENT',
        subtitle: 'Indice de Revenu (I-Revenu)',
        items: [
          'Revenu National Brut (RNB) par habitant',
          'Conversion en dollars PPA (parité de pouvoir d\'achat)',
          'Échelle logarithmique (rendement marginal décroissant)',
          'Mesure de la capacité d\'achat réelle des ménages'
        ]
      }
    ]
  },
  conclusion: `L'étude des inégalités de développement met en lumière un monde profondément fragmenté. Dépassant la simple vision binaire Nord-Sud, le géographe moderne observe un gradient complexe de situations allant des métropoles mondialisées ultraconnectées aux périphéries rurales enclavées. Comprendre ces mécanismes est indispensable pour concevoir des politiques d'aménagement du territoire équitables et inclusives au Sénégal comme à l'échelle internationale.`
};

export const LESSON_2_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-2',
  number: 'LEÇON 2',
  title: 'La population : groupes humains, langues et religions',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Diversité anthropologique et culturelle, classification des familles de langues, foyers et diffusion des grandes religions, et modèle de cohésion sociale au Sénégal.',
  introduction: `La population mondiale, franchissant le seuil des 8 milliards d'habitants, offre une extraordinaire diversité culturelle, linguistique et religieuse. La géographie humaine étudie cette diversité spatiale sans établir la moindre hiérarchie biologique ou morale entre les communautés humaines. Loin des clichés essentialistes, langues et religions constituent des marqueurs géographiques dynamiques, reflets de millénaires de migrations, de conquêtes, d'échanges marchands et d'adaptations aux milieux. Au Sénégal, ce carrefour de civilisations illustre de manière exemplaire comment la pluralité ethnique et religieuse peut forger une cohésion nationale harmonieuse.`,
  sections: [
    {
      title: 'I. LES GROUPES HUMAINS ET LA DIVERSITÉ ANTHROPOLOGIQUE',
      content: [
        '1. Réfutation scientifique de la hiérarchie des "races" : La génétique moderne des populations et l\'anthropologie ont démontré l\'unicité de l\'espèce humaine (Homo sapiens). Les variations phénotypiques (pigmentation cutanée, morphologie) sont de simples adaptations climatiques superficielles sans aucune corrélation intellectuelle ou morale.',
        '2. Les notions d\'ethnie et de communauté culturelle : L\'ethnie désigne un groupe d\'individus partageant une même langue vernaculaire, des mythes d\'origine, des coutumes, des arts et un sentiment subjectif d\'appartenance commune.',
        '3. Le dynamisme des identités : Loin d\'être figées, les identités culturelles évoluent en permanence par métissage, acculturation et brassage au sein des grandes villes mondiales.'
      ]
    },
    {
      title: 'II. LA MOSAÏQUE LINGUISTIQUE MONDIALE',
      content: [
        'On dénombre aujourd\'hui entre 6 000 et 7 000 langues vivantes dans le monde, regroupées en grandes familles généalogiques :',
        '1. La famille indo-européenne : La plus étendue géographiquement (environ 45 % de l\'humanité), comprenant les langues romanes (français, espagnol, portugais, italien), germaniques (anglais, allemand), slaves (russe, polonais) et indo-iraniennes (hindi, persan).',
        '2. La famille sino-tibétaine : Deuxième par le nombre de locuteurs, dominée par le mandarin et les dialectes chinois en Asie orientale.',
        '3. La famille Niger-Congo : Dominante en Afrique subsaharienne, elle rassemble plus de 1 500 langues dont le wolof, le pulaar (peul), le serer, le mandingue, le jola et le swahili en Afrique de l\'Est.',
        '4. Les autres grandes familles : Afro-asiatique (arabe, berbère, haoussa, amharique), austronésienne (Asie du Sud-Est et Madagascar), dravidienne (Inde du Sud) et amérindienne.',
        '5. Les langues internationales véhiculaires : L\'anglais (lingua franca de l\'économie, de la science et d\'Internet), le français (espace francophone et diplomatie), l\'espagnol et l\'arabe transcendent les frontières politiques nationales.'
      ],
      table: {
        headers: ['Famille linguistique', 'Principales langues', 'Foyer géographique majeur', 'Nombre estimé de locuteurs'],
        rows: [
          ['Indo-européenne', 'Anglais, Espagnol, Hindi, Français, Russe', 'Europe, Amériques, Asie du Sud', '~3,2 milliards'],
          ['Sino-tibétaine', 'Mandarin, Cantonais, Tibétain, Birman', 'Chine, Asie orientale et du Sud-Est', '~1,4 milliard'],
          ['Niger-Congo', 'Wolof, Pulaar, Swahili, Yorouba, Zoulou', 'Afrique de l\'Ouest, Centrale, Australe', '~600 millions'],
          ['Afro-asiatique', 'Arabe classique et dialectal, Haoussa, Berbère', 'Afrique du Nord, Moyen-Orient, Sahel', '~500 millions']
        ]
      }
    },
    {
      title: 'III. LA GÉOGRAPHIE DES GRANDES RELIGIONS ET LEURS FOYERS DE DIFFUSION',
      content: [
        '1. Les religions monothéistes universalistes à vocation prosélyte :',
        '• Le Christianisme (environ 2,4 milliards de fidèles) : Né au Proche-Orient, subdivisé en catholicisme, protestantisme et orthodoxie. Présent en Europe, Amériques, Afrique subsaharienne et Océanie.',
        '• L\'Islam (environ 1,9 milliard de fidèles) : Né en Arabie au VIIe siècle sous le prophète Mohammed (PSL), subdivisé en sunnisme (environ 85-90 %) et chiisme. Rayonne du Maghreb à l\'Asie du Sud-Est (Indonésie premier pays musulman au monde).',
        '2. Les religions orientales et polythéistes / philosophiques :',
        '• L\'Hindouisme (1,2 milliard) : Fortement ancré dans le sous-continent indien.',
        '• Le Bouddhisme (500 millions) : Diffusé en Asie orientale, Asie du Sud-Est et Himalaya.',
        '3. Les Religions Traditionnelles Africaines (RTA) : Fondées sur le culte des ancêtres, l\'animisme et le respect sacré des forces de la nature, elles imprègnent profondément les cultures et traditions subsahariennes.'
      ]
    },
    {
      title: 'IV. ENJEUX GÉOPOLITIQUES : FACTEUR D\'INTÉGRATION OU DE TENSION',
      content: [
        '1. Cohésion et solidarité transnationale : Les aires culturelles partagées facilitent le commerce international et les alliances régionales (Francophonie, Commonwealth, Ligue Arabe, OCI).',
        '2. Instrumentalisation et conflits géopolitiques : Lorsque des fractures linguistiques ou religieuses coïncident avec des inégalités économiques ou foncières, elles peuvent être manipulées à des fins de guerre civile ou de terrorisme transfrontalier.',
        '3. La sécularisation et la laïcité : L\'État moderne garantit la liberté de culte tout en maintenant la neutralité de l\'espace public institutionnel.'
      ]
    },
    {
      title: 'V. L\'EXEMPLE DU SÉNÉGAL : MODÈLE DE DIALOGUE INTERCULTUREL ET RELIGIEUX',
      content: [
        '1. Diversité linguistique harmonieuse : Le wolof constitue la langue véhiculaire nationale comprise par plus de 85 % des citoyens, cohabitant avec le pulaar, le seereer, le jola, le mandinka, le soninké et le français langue officielle d\'administration.',
        '2. Concorde religieuse exemplaire : Population à plus de 95 % musulmane (organisée autour de confréries pacifiques : Tidjanyya, Mouridiyya, Qadiriyya, Layéniyya) et environ 4 % chrétienne (catholique et protestante). Les fêtes religieuses (Tabaski, Korité, Noël, Pâques) sont partagées dans un respect fraternel mutuel remarquable.',
        '3. La régulation coutumière du "Cousinage à plaisanterie" (Kaliragal / Massanké) : Mécanisme socioculturel traditionnel séculaire désamorçant toute tension interethnique entre patronymes alliés (Ndiaye et Diop, Seck et Fall, Jola et Serer).'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET TRAVAUX PRATIQUES GUIDÉS',
      content: [
        'Exercice 1 : Pourquoi les frontières politiques en Afrique ne correspondent-elles pas aux aires linguistiques ?',
        'Correction : Lors de la Conférence de Berlin (1884-1885), les puissances coloniales européennes ont découpé le continent selon des méridiens, des fleuves ou des compromis diplomatiques artificiels, sans tenir compte des royaumes précoloniaux et des aires linguistiques. Une même communauté linguistique (comme les Haoussas entre le Niger et le Nigeria, ou les Peuls à travers toute la zone sahélienne) s\'est ainsi retrouvée éclatée entre plusieurs États indépendants.',
        'Exercice 2 : Définir et différencier "langue officielle", "langue nationale" et "langue véhiculaire".',
        'Correction : La langue officielle est celle reconnue par la Constitution pour les actes de l\'État, l\'enseignement formel et la justice (ex: le français au Sénégal). La langue nationale est une langue locale bénéficiant d\'une codification et d\'une reconnaissance institutionnelle. La langue véhiculaire est la langue adoptée spontanément par des populations de langues maternelles différentes pour communiquer et commercer entre elles au quotidien (ex: le wolof au Sénégal).'
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Les composantes de la diversité socioculturelle',
    root: 'LA DIVERSITÉ DE LA POPULATION MONDIALE',
    branches: [
      {
        name: 'FAMILLES LINGUISTIQUES',
        subtitle: 'Classification généalogique',
        items: [
          'Indo-européenne (anglais, espagnol, français, hindi)',
          'Sino-tibétaine (mandarin chinois)',
          'Niger-Congo (wolof, pulaar, swahili)',
          'Afro-asiatique (arabe, haoussa)'
        ]
      },
      {
        name: 'AIRES RELIGIEUSES',
        subtitle: 'Systèmes de croyance & diffusion',
        items: [
          'Christianisme (catholiques, protestants, orthodoxes)',
          'Islam (sunnites, chiites, confréries)',
          'Hindouisme & Bouddhisme en Asie',
          'Religions Traditionnelles Africaines (RTA)'
        ]
      },
      {
        name: 'MODÈLE SÉNÉGALAIS',
        subtitle: 'Cohésion & Concorde nationale',
        items: [
          'Wolof langue véhiculaire dominante',
          'Harmonie exemplaire musulmans-chrétiens',
          'Régulation par le cousinage à plaisanterie',
          'État laïc garant de la paix civile'
        ]
      }
    ]
  },
  conclusion: `L'étude géographique des populations, des langues et des religions démontre que la diversité culturelle est une immense richesse spatiale et humaine. Lorsqu'elle repose sur la reconnaissance mutuelle, l'état de droit et des mécanismes séculaires de dialogue comme au Sénégal, elle constitue un pilier inébranlable de stabilité politique et de développement partagé.`
};

export const LESSON_3_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-3',
  number: 'LEÇON 3',
  title: 'L’accroissement de la population mondiale et les politiques démographiques',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '28 min',
  description: 'Équation démographique, phases de la transition démographique, contrastes Nord-Sud de fécondité, politiques antinatalistes et pronatalistes, et dividende démographique africain.',
  introduction: `L'humanité a connu au cours des deux derniers siècles une accélération démographique spectaculaire, passant d'un milliard d'habitants vers 1800 à deux milliards en 1927, six milliards en 1999 et plus de huit milliards dans les années 2020. Cette dynamique planétaire repose sur l'évolution différentielle des taux de natalité et de mortalité, modélisée par la transition démographique. Loin d'être uniforme, le monde d'aujourd'hui est scindé entre les pays développés touchés par l'hiver démographique et le vieillissement prononcé, et les pays du Sud, notamment l'Afrique subsaharienne, caractérisés par une forte jeunesse et un potentiel d'accroissement remarquable qui nécessite des politiques démographiques adaptées.`,
  sections: [
    {
      title: 'I. L\'ÉQUATION DÉMOGRAPHIQUE FONDAMENTALE ET LES TAUX STATISTIQUES',
      content: [
        'Pour quantifier l\'évolution spatiale d\'une population entre deux dates t0 et t1, les géographes et démographes appliquent l\'équation de bilan démographique :',
        '1. L\'Accroissement Naturel (AN) : AN = Naissances − Décès.',
        '• Taux Brut de Natalité (TBN) : Nombre de naissances vivantes pour 1 000 habitants en une année (‰). TBN = (Naissances / Population moyenne) × 1 000.',
        '• Taux Brut de Mortalité (TBM) : Nombre de décès enregistrés pour 1 000 habitants en une année (‰). TBM = (Décès / Population moyenne) × 1 000.',
        '• Taux d\'Accroissement Naturel (TAN) : TAN = TBN − TBM (exprimé en ‰ ou en % en divisant par 10).',
        '2. Le Solde Migratoire (SM) : Différence entre le nombre d\'immigrants entrant et d\'émigrants sortant du territoire.',
        '3. L\'Accroissement Total : Accroissement Global = (Naissances − Décès) + (Immigrants − Émigrants).'
      ],
      table: {
        headers: ['Indicateur', 'Formule mathématique', 'Unité habituelle', 'Interprétation géographique'],
        rows: [
          ['Taux Brut de Natalité', '(Naissances / Pop) × 1 000', 'Pour mille (‰)', 'Intensité de la natalité globale'],
          ['Taux Brut de Mortalité', '(Décès / Pop) × 1 000', 'Pour mille (‰)', 'Niveau sanitaire et structure par âge'],
          ['Accroissement naturel', 'TBN − TBM', '‰ ou %', 'Croissance biologique hors migrations'],
          ['Indice Synthétique de Fécondité', 'Moyenne d\'enfants / femme', 'Enfants par femme', 'Seuil de remplacement fixé à 2,1']
        ]
      }
    },
    {
      title: 'II. LE MODÈLE THÉORIQUE DE LA TRANSITION DÉMOGRAPHIQUE',
      content: [
        'La transition démographique est le passage historique d\'un régime démographique traditionnel (haute natalité et haute mortalité, croissance faible) à un régime démographique moderne (faible natalité et faible mortalité, croissance faible ou nulle). Elle se décompose en quatre phases distinctes :',
        '1. Régime pré-transitionnel (Régime ancien) : Taux de natalité très élevé (35 à 45 ‰) compensé par une mortalité infantile et générale tout aussi forte et irrégulière (crises frumentaires, épidémies, guerres). La population stagne ou croît très lentement.',
        '2. Première phase de transition (Phase d\'expansion explosive) : La mortalité chute de façon abrupte grâce aux progrès de l\'hygiène, de l\'assainissement, de la médecine et de la sécurité alimentaire. La natalité reste quant à elle très élevée en raison de l\'inertie des comportements socioculturels. L\'écart entre les deux courbes s\'élargit : c\'est le pic d\'explosion démographique.',
        '3. Deuxième phase de transition (Phase de décélération) : La mortalité continue de diminuer plus modérément jusqu\'à un plancher physiologique (7 à 9 ‰). La natalité s\'effondre à son tour sous l\'effet de l\'urbanisation, de la scolarisation féminine, du coût élevé de l\'enfant et de la diffusion des contraceptifs. Le rythme d\'accroissement ralentit progressivement.',
        '4. Régime post-transitionnel (Régime moderne) : Natalité et mortalité s\'équilibrent à des niveaux bas (8 à 11 ‰). Dans certains pays développés, la natalité chute sous la mortalité, provoquant un déficit naturel et une baisse absolue de la population.'
      ]
    },
    {
      title: 'III. LA GÉOGRAPHIE MONDIALE DES SITUATIONS DÉMOGRAPHIQUES CONTEMPORAINES',
      content: [
        '1. Les pays développés et émergents en déclin démographique :',
        '• En Europe (Allemagne, Italie, Espagne), en Asie orientale (Japon, Corée du Sud où la fécondité est tombée sous 0,8 enfant par femme) et en Chine, la fécondité est nettement inférieure au seuil de renouvellement des générations (2,1 enfants par femme).',
        '• Conséquences : Vieillissement accéléré, pénurie de main-d\'œuvre active, fragilisation des régimes de retraite et dévitalisation des territoires ruraux.',
        '2. L\'Afrique subsaharienne en pleine transition démographique :',
        '• Les pays subsahariens se situent au milieu de la transition démographique : la mortalité a significativement baissé tandis que la fécondité reste élevée (souvent 4 à 5 enfants par femme, voire plus de 6 au Niger).',
        '• Le cas du Sénégal : Le taux de natalité avoisine 32 ‰ pour une mortalité de l\'ordre de 6 à 7 ‰, soit un taux d\'accroissement naturel annuel supérieur à 2,5 %. Plus de 40 % de la population a moins de 15 ans. Cette jeunesse constitue à la fois un défi titanesque pour l\'école et la santé, et une opportunité d\'avenir si l\'on parvient à capter le "dividende démographique".'
      ]
    },
    {
      title: 'IV. LES POLITIQUES DÉMOGRAPHIQUES DANS LE MONDE',
      content: [
        'Face aux déséquilibres, les États mettent en place deux grandes catégories de politiques publiques :',
        '1. Les politiques antinatalistes (freiner la natalité) :',
        '• Mesures autoritaires historiques : L\'exemple emblématique de la politique de l\'enfant unique en Chine (1979-2015), avec sanctions financières, stérilisations et avortements forcés. Cette politique a provoqué un vieillissement précoce et un fort déficit de femmes (avortements sélectifs).',
        '• Politiques incitatives et de santé reproductive : Sensibilisation au planning familial, espacement des naissances, gratuité de la contraception et scolarisation accrue des jeunes filles (stratégie adoptée par le Sénégal et de nombreux pays africains).',
        '2. Les politiques pronatalistes (stimuler les naissances) :',
        '• Pratiquées en France, en Russie, au Japon et dans les pays scandinaves : versement d\'allocations familiales substantielles, congés maternité et paternité rémunérés, construction massive de crèches, abattements fiscaux pour les familles nombreuses.'
      ]
    },
    {
      title: 'V. L\'ENJEU DU DIVIDENDE DÉMOGRAPHIQUE POUR LE SÉNÉGAL ET L\'AFRIQUE',
      content: [
        '1. Définition du dividende démographique : Croissance économique accélérée qui peut survenir lorsqu\'une baisse de la fécondité fait chuter la proportion de personnes à charge (enfants de moins de 15 ans) par rapport à la population en âge de travailler (15-64 ans).',
        '2. Les conditions indispensables pour le concrétiser :',
        '• Investissements massifs et qualitatifs dans l\'éducation et la formation professionnelle technique.',
        '• Émancipation sociale et accès des femmes aux opportunités d\'emploi formel.',
        '• Création massive d\'emplois décents dans l\'industrie, l\'agriculture moderne et les technologies de l\'information.',
        '• Bonne gouvernance et climat des affaires propice à l\'initiative privée.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET ANALYSE MÉTHODOLOGIQUE DE COURBES',
      content: [
        'Exercice 1 : Un pays comptant 18 millions d\'habitants enregistre 576 000 naissances et 126 000 décès au cours de l\'année. Calculez son TBN, son TBM et son taux d\'accroissement naturel en ‰ et en %.',
        'Correction : TBN = (576 000 / 18 000 000) × 1 000 = 32 ‰. TBM = (126 000 / 18 000 000) × 1 000 = 7 ‰. Accroissement naturel = 32 − 7 = 25 ‰, soit 2,5 % par an.',
        'Exercice 2 : Méthodologie d\'analyse d\'une courbe d\'évolution démographique.',
        'Pour commenter une courbe démographique lors d\'un devoir de géographie, l\'élève doit respecter quatre étapes successives : 1. Présentation du document (nature, variable en abscisse/ordonnée, unité, période couverte). 2. Description des phases (découper la courbe en segments homogènes, préciser dates de début et fin, calculer la variation absolue et relative). 3. Explication des mécanismes géographiques (relier chaque phase aux progrès sanitaires, aux crises historiques ou aux politiques d\'État). 4. Conclusion sur les perspectives futures.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma & Courbe synthétique : Le modèle en 4 phases de la Transition Démographique',
    root: 'TRANSITION DÉMOGRAPHIQUE MONDIALE',
    branches: [
      {
        name: 'RÉGIME ANCIEN (PHASE 0)',
        subtitle: 'Forte mortalité & Forte natalité',
        items: [
          'TBN élevé (35-45 ‰) & TBM élevé (35-40 ‰)',
          'Famines récurrentes, épidémies, guerres',
          'Croissance naturelle presque nulle',
          'Espérance de vie très faible (<35 ans)'
        ]
      },
      {
        name: 'PHASE 1 (EXPANSION)',
        subtitle: 'Chute brutale de la mortalité',
        items: [
          'Progrès sanitaires, eau potable, vaccins',
          'Natalité reste au sommet (inertie culturelle)',
          'Écart maximal entre les deux courbes',
          'Explosion de la population (ex: Afrique 1960-2000)'
        ]
      },
      {
        name: 'PHASE 2 (DÉCÉLÉRATION)',
        subtitle: 'Baisse rapide de la natalité',
        items: [
          'Urbanisation, coût de l\'éducation, planning',
          'Scolarisation des filles & travail des femmes',
          'Ralentissement progressif de la croissance',
          'Ex: Amérique latine, Afrique du Nord, Asie'
        ]
      },
      {
        name: 'RÉGIME MODERNE (POST-TRANSITION)',
        subtitle: 'Faibles taux & Vieillissement',
        items: [
          'TBN et TBM faibles et stables (8-10 ‰)',
          'Fécondité inférieure à 2,1 enfants / femme',
          'Risque de déclin naturel (Europe, Japon, Corée)',
          'Enjeux massifs de financement des retraites'
        ]
      }
    ]
  },
  conclusion: `L'accroissement démographique mondial connaît une mutation décisive : alors que le pic du taux de croissance planétaire a été franchi, le centre de gravité démographique de la Terre bascule vers le Sud et particulièrement vers l'Afrique. La maîtrise des équations démographiques et la mise en œuvre de politiques d'investissement dans le capital humain détermineront la réussite du développement durable au Sénégal et sur le continent africain.`
};

export const LESSON_4_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-4',
  number: 'LEÇON 4',
  title: 'Les migrations',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Typologie des flux migratoires, facteurs répulsifs (Push) et attractifs (Pull), grands pôles mondiaux, transferts financiers, fuite des cerveaux et dynamiques ouest-africaines.',
  introduction: `La migration est un déplacement de population impliquant un changement de lieu de résidence habituelle pour une durée significative. Phénomène consubstantiel à l'histoire de l'humanité, elle concerne aujourd'hui près de 300 millions de migrants internationaux et plus d'un milliard de migrants internes. Les mobilités contemporaines reflètent avec une acuité saisissante les disparités de richesse, les conflits géopolitiques, les bouleversements climatiques et l'interconnexion globale du monde. Les flux migratoires reconfigurent en profondeur tant les territoires d'origine que les espaces d'accueil, créant de nouvelles solidarités transnationales tout en soulevant d'ardus débats politiques sur les frontières et l'intégration.`,
  sections: [
    {
      title: 'I. TYPOLOGIE DES FLUX MIGRATOIRES ET STATUTS JURIDIQUES',
      content: [
        '1. Selon l\'échelle spatiale :',
        '• Migrations internes : S\'effectuent à l\'intérieur des frontières d\'un même État. La forme majeure est l\'exode rural (déplacement définitif des campagnes vers les villes) et les migrations interrégionales vers les pôles économiques côtiers ou miniers.',
        '• Migrations internationales : Franchissement d\'au moins une frontière politique souveraine d\'un pays d\'origine vers un pays de destination.',
        '2. Selon la durée et la régularité :',
        '• Migrations permanentes ou de long séjour (installation définitive ou pluriannuelle).',
        '• Migrations temporaires ou saisonnières (ex: la navétanie historique des travailleurs de l\'arachide au Sénégal).',
        '• Mobilités pendulaires : Déplacements quotidiens rythmés entre le lieu de domicile et le lieu de travail ou d\'études (ne constituent pas une migration au sens strict car il n\'y a pas changement de résidence).',
        '3. Selon le degré de libre arbitre et le cadre juridique :',
        '• Migrations économiques et volontaires : Recherche de meilleures conditions de vie, d\'études ou d\'emploi rémunérateur.',
        '• Migrations forcées et droit d\'asile : Selon la Convention de Genève de 1951, le réfugié est une personne qui a fui son pays en raison de craintes fondées de persécutions (politiques, religieuses, ethniques) ou de guerres. Le demandeur d\'asile sollicite la reconnaissance formelle de ce statut protecteur.',
        '• Déplacés environnementaux et climatiques : Populations contraintes de quitter leur terroir sous l\'effet de la désertification, des sécheresses extrêmes, des inondations ou de la submersion marine.'
      ]
    },
    {
      title: 'II. LES FACTEURS EXPLICATIFS : LE MODÈLE PUSH / PULL',
      content: [
        'Les géographes analysent les causes migratoires en croisant les facteurs de rejet ("Push") du lieu de départ et les facteurs d\'attraction ("Pull") du lieu d\'arrivée :',
        '1. Facteurs répulsifs (Push dans les pays de départ) : Chômage massif des jeunes, sous-emploi rural, salaires dérisoires, insécurité civile et conflits armés, absence de perspectives d\'ascension sociale, dégradation des terres agricoles par l\'érosion et la sécheresse.',
        '2. Facteurs attractifs (Pull dans les pays d\'accueil) : Salaires nominaux très supérieurs, demande forte de main-d\'œuvre (bâtiment, restauration, agriculture, services aux personnes âgées), accès à des universités et hôpitaux de référence, libertés publiques, image valorisée véhiculée par les réseaux sociaux et la télévision.',
        '3. Les canaux facilitateurs et les réseaux transnationaux : La présence d\'une communauté diasporique déjà implantée réduit le coût et l\'incertitude du voyage en offrant accueil, hébergement et orientations pour trouver du travail.'
      ]
    },
    {
      title: 'III. LA GÉOGRAPHIE DES GRANDS FOYERS ET CIRCUITS MIGRATOIRES MONDIAUX',
      content: [
        '1. Les pôles d\'attraction majeurs :',
        '• L\'Amérique du Nord (États-Unis et Canada) : Premier pôle mondial d\'immigration, recevant des flux majeurs d\'Amérique latine (Mexique, Amérique centrale) et d\'Asie.',
        '• L\'Europe occidentale : Pôle d\'accueil historique pour les flux d\'Afrique du Nord, d\'Afrique subsaharienne, du Proche-Orient et d\'Europe orientale.',
        '• Les monarchies pétrolières du Golfe Persique (Arabie Saoudite, Émirats Arabes Unis, Qatar) : Où les travailleurs étrangers (venus d\'Inde, du Pakistan, des Philippines, d\'Égypte) constituent souvent la majorité absolue de la population active totale.',
        '2. L\'importance sous-estimée des migrations Sud-Sud : Contrairement aux idées reçues, les migrations entre pays du Sud représentent un volume numérique supérieur aux migrations Sud-Nord. En Afrique, plus de 80 % des migrants subsahariens restent à l\'intérieur du continent africain (dans les pays voisins plus prospères comme la Côte d\'Ivoire, le Sénégal, le Gabon, l\'Afrique du Sud).'
      ]
    },
    {
      title: 'IV. LES IMPACTS TERRITORIAUX ET ÉCONOMIQUES DES MIGRATIONS',
      content: [
        '1. Dans les espaces et pays de départ :',
        '• Impact financier positif des transferts de fonds (remittances) : Au Sénégal, les envois d\'argent de la diaspora dépassent 1 600 milliards de FCFA par an (environ 10 % du PIB national), surpassant l\'Aide Publique au Développement. Ils financent la nourriture des ménages, la construction de maisons, de mosquées, de forages et de centres de santé.',
        '• Impact négatif de la fuite des cerveaux ("Brain drain") : Départ massif des médecins, ingénieurs, infirmiers et enseignants qualifiés formés à grands frais au Sud vers les pays occidentaux.',
        '2. Dans les espaces et pays d\'arrivée :',
        '• Rajeunissement démographique et soutien à l\'activité économique : Les travailleurs migrants pourvoient des emplois essentiels délaissés par les nationaux et cotisent aux systèmes de retraite.',
        '• Défis logistiques et urbains : Pression sur le parc de logements, les transports publics, et gestion des crispations politiques liées à l\'intégration.'
      ]
    },
    {
      title: 'V. LES DYNAMIQUES MIGRATOIRES AU SÉNÉGAL ET EN AFRIQUE DE L\'OUEST',
      content: [
        '1. Le Sénégal, terre historique d\'immigration et d\'émigration : Carrefour ouest-africain, le Sénégal accueille des ressortissants de Guinée, du Mali, de Mauritanie, du Nigeria et du Liban parfaitement intégrés dans le tissu commercial.',
        '2. L\'émigration sénégalaise : Anciennement orientée vers la France, elle s\'est diversifiée vers l\'Italie, l\'Espagne, les États-Unis et les pays d\'Afrique centrale.',
        '3. Le drame de l\'émigration irrégulière : Les départs périlleux par pirogue sur la route maritime atlantique vers les îles Canaries ou à travers le désert du Sahara soulignent l\'urgence de créer des emplois décents et des opportunités économiques attractives pour la jeunesse locale.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION ET COMMENTAIRE DE CARTE DE FLUX',
      content: [
        'Exercice 1 : Commenter méthodiquement une carte de flux migratoires mondiaux.',
        'Correction : Un commentaire géographique de carte de flux doit suivre l\'ordre suivant : 1. Localiser et nommer les foyers d\'émission (départ) et de réception (arrivée). 2. Décrire la direction et l\'épaisseur relative des flèches figurant les volumes de migrants. 3. Expliquer les disparités économiques et sécuritaires motrices de ces flux. 4. Nuancer en rappelant l\'ampleur des flux intrarégionaux Sud-Sud souvent masqués par la focalisation sur les routes vers l\'Occident.',
        'Exercice 2 : Pourquoi les transferts d\'argent ne suffisent-ils pas à eux seuls pour amorcer un développement durable ?',
        'Correction : Si les transferts soutiennent la consommation immédiate des familles et préviennent la famine, ils sont majoritairement orientés vers des dépenses de subsistance ou l\'immobilier résidentiel non productif, plutôt que vers l\'investissement productif industriel ou agricole générant des emplois durables sur place.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma cartographique : Les grands flux migratoires mondiaux contemporains',
    root: 'LES MIGRATIONS INTERNATIONALES',
    branches: [
      {
        name: 'PÔLES D\'ÉMISSION (DÉPART)',
        subtitle: 'Facteurs répulsifs (Push)',
        items: [
          'Afrique subsaharienne (Sahel, Golfe de Guinée)',
          'Asie du Sud (Inde, Pakistan, Bangladesh)',
          'Amérique centrale et Caraïbes',
          'Proche et Moyen-Orient (conflits)'
        ]
      },
      {
        name: 'PÔLES D\'ATTRACTION (ARRIVÉE)',
        subtitle: 'Facteurs attractifs (Pull)',
        items: [
          'Amérique du Nord (USA, Canada)',
          'Europe occidentale (France, Allemagne, Italie)',
          'Pays du Golfe (Émirats, Arabie Saoudite)',
          'Hubs régionaux africains (Côte d\'Ivoire, Sénégal)'
        ]
      },
      {
        name: 'RETOMBÉES TERRITORIALES',
        subtitle: 'Effets spatiaux & économiques',
        items: [
          'Transferts financiers massifs (remittances)',
          'Fuite des cerveaux et perte de main-d\'œuvre qualifiée',
          'Rajeunissement des pays de destination',
          'Défis d\'intégration et d\'aménagement urbain'
        ]
      }
    ]
  },
  conclusion: `Les migrations internationales constituent un révélateur puissant de l'état du monde. Ni simple menace ni remède miracle, elles forment un pont humain et financier reliant les territoires. La gouvernance internationale des migrations et la régulation concertée de la mobilité humaine constituent l'un des plus grands défis politiques du XXIe siècle.`
};

export const LESSON_5_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-5',
  number: 'LEÇON 5',
  title: 'Les structures de la population mondiale',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '26 min',
  description: 'Structure par âge et par sexe, typologie morphologique des pyramides des âges, structure socioprofessionnelle, répartition sectorielle et loi de Clark-Fisher.',
  introduction: `La structure d'une population correspond à sa composition interne selon différents critères démographiques, biologiques et socio-économiques. Deux axes d'analyse sont prépondérants en géographie : d'une part, la structure biologique par sexe et par âge, visualisée par la pyramide des âges ; d'autre part, la structure économique selon le statut d'activité et la répartition des emplois entre les trois grands secteurs de production. L'analyse combinée de ces structures révèle le niveau d'avancement économique d'un territoire, ses besoins prioritaires immédiats (crèches, écoles, emplois, universités ou maisons de retraite) et les défis de sa gouvernance prospective.`,
  sections: [
    {
      title: 'I. LA STRUCTURE PAR ÂGE ET PAR SEXE',
      content: [
        '1. La structure par sexe (Sex-ratio) : Le sex-ratio exprime le rapport du nombre d\'hommes pour 100 femmes. À la naissance, il naît naturellement environ 105 garçons pour 100 filles. Cependant, en raison d\'une surmortalité masculine à tous les âges de la vie et d\'une espérance de vie féminine supérieure (de 4 à 8 ans selon les régions), le rapport s\'inverse dans les classes âgées où les femmes sont largement majoritaires.',
        '2. La répartition par grands groupes d\'âges conventionnels :',
        '• Les jeunes (0 à 14 ans) : Représentent la population dépendante d\'âge scolaire. Moins de 18 % dans les pays développés, mais plus de 40 % en Afrique subsaharienne.',
        '• Les adultes en âge d\'activité (15 à 64 ans) : Portent le poids de la production économique et des cotisations fiscales.',
        '• Les personnes âgées (65 ans et plus) : Dépassent 20 % dans les pays de l\'OCDE (Japon, Allemagne, Italie), contre moins de 4 % en Afrique de l\'Ouest.'
      ]
    },
    {
      title: 'II. LA PYRAMIDE DES ÂGES : TYPOLOGIE MORPHOLOGIQUE ET INTERPRÉTATION',
      content: [
        'La pyramide des âges est un double histogramme horizontal représentant la répartition d\'une population par tranches d\'âge (souvent quinquennales : 0-4 ans, 5-9 ans...) avec les hommes à gauche et les femmes à droite. On distingue quatre grands types morphologiques de pyramides :',
        '1. La pyramide en forme de parasol / tour Eiffel (profil triangulaire à base très évasée) : Caractéristique des pays jeunes du Sud (Sénégal, Mali, Niger). Forte natalité, base très large, sommet très étroit et effilé sous l\'effet d\'une mortalité qui s\'exerce à tous les âges.',
        '2. La pyramide en cloche (profil en ogive) : Les générations d\'adultes et d\'enfants ont des effectifs voisins. Signale une population entrée en fin de transition démographique avec une natalité maîtrisée (ex: certains pays émergents d\'Amérique latine ou d\'Asie).',
        '3. La pyramide en as de pique / urne cinéraire (base rétrécie, renflement au centre, sommet élargi) : Caractéristique des pays développés vieillissants (France, Canada, Russie). Déclin de la natalité et allongement remarquable de l\'espérance de vie.',
        '4. La pyramide en champignon / toupie inversée : Base très étroite et sommet hypertrophié (ex: Japon, Allemagne, Corée du Sud). Signale un vieillissement prononcé et un déficit naturel critique.'
      ]
    },
    {
      title: 'III. LA STRUCTURE SOCIOPROFESSIONNELLE ET LA POPULATION ACTIVE',
      content: [
        '1. Population active vs Population inactive :',
        '• La population active regroupe l\'ensemble des personnes en âge de travailler qui exercent un emploi rémunéré ou qui sont à la recherche effective d\'un emploi (les chômeurs).',
        '• La population inactive comprend les enfants, les élèves, les étudiants, les personnes au foyer et les retraités.',
        '2. Le taux de dépendance démographique : Rapport entre la population dépendante (moins de 15 ans et plus de 65 ans) et la population en âge de travailler (15-64 ans). Plus ce taux est élevé, plus le fardeau financier reposant sur les actifs est lourd.',
        '3. Le chômage et le sous-emploi : Dans les pays en développement, le taux de chômage statistique masque souvent un immense secteur informel où les travailleurs exercent de petits métiers précaires sans protection sociale ni salaire garanti.'
      ]
    },
    {
      title: 'IV. LA RÉPARTITION SECTORIELLE DE L\'EMPLOI ET LA LOI DE CLARK-FISHER',
      content: [
        'Colin Clark et Jean Fourastié ont mis en évidence la théorie des trois secteurs et le glissement progressif de la main-d\'œuvre avec le développement technique :',
        '1. Le secteur primaire (agriculture, élevage, pêche, sylviculture) : Mobilise une part écrasante de la main-d\'œuvre dans les pays traditionnels (souvent plus de 50 à 60 % en Afrique de l\'Ouest), mais moins de 2 à 3 % dans les pays hautement industrialisés en raison de la motorisation et des rendements mécanisés.',
        '2. Le secteur secondaire (industries de transformation, mines, bâtiment et travaux publics) : Croît fortement lors de la phase d\'industrialisation, puis régresse sous l\'effet de l\'automatisation, de la robotisation et des délocalisations.',
        '3. Le secteur tertiaire (services marchands et non marchands : commerce, banques, enseignement, santé, transports, tourisme) : Phénomène mondial de tertiarisation. Dans les pays développés, le secteur tertiaire concentre plus de 75 % des emplois.'
      ],
      table: {
        headers: ['Secteur d\'activité', 'Activités incluses', 'Poids dans un pays du Sud (ex: Sénégal)', 'Poids dans un pays du Nord (ex: France)'],
        rows: [
          ['Primaire', 'Agriculture, pêche, élevage, exploitation forestière', '~50 à 55 % des actifs', '~2 à 3 % des actifs'],
          ['Secondaire', 'Industries manufacturières, mines, BTP, énergie', '~12 à 15 % des actifs', '~18 à 20 % des actifs'],
          ['Tertiaire', 'Commerce, services publics, banques, transports', '~32 à 35 % des actifs', '~78 à 80 % des actifs']
        ]
      }
    },
    {
      title: 'V. DÉFIS SOCIO-ÉCONOMIQUES COMPARÉS DES STRUCTURES PAR ÂGE',
      content: [
        '1. Défis d\'une population jeune (Afrique subsaharienne / Sénégal) :',
        '• Éducation : Nécessité de construire des milliers de salles de classe, de recruter des dizaines de milliers d\'enseignants et d\'équiper les universités.',
        '• Santé pédiatrique et maternelle : Vaccination, lutte contre la malnutrition infantile et le paludisme.',
        '• Emploi : Pression immense sur le marché du travail pour insérer chaque année des centaines de milliers de nouveaux arrivants.',
        '2. Défis d\'une population vieillissante (Europe / Japon) :',
        '• Financement des retraites et des systèmes de sécurité sociale.',
        '• Pénurie de main-d\'œuvre dans l\'industrie et les services.',
        '• Dépendance médicale : Développement de la "silver economy" et prise en charge des maladies neurodégénératives.'
      ]
    },
    {
      title: 'VI. EXERCICES D\'APPLICATION CORRIGÉS',
      content: [
        'Exercice 1 : Une localité compte 60 000 habitants, dont 26 000 enfants de moins de 15 ans, 31 000 personnes de 15 à 64 ans, et 3 000 personnes de 65 ans et plus. Calculez le taux de dépendance démographique global.',
        'Correction : Taux de dépendance = [(Pop <15 ans + Pop ≥65 ans) / Pop 15-64 ans] × 100 = [(26 000 + 3 000) / 31 000] × 100 = (29 000 / 31 000) × 100 = 93,5 %. Cela signifie que 100 actifs doivent subvenir aux besoins de 93,5 personnes à charge.',
        'Exercice 2 : Décrivez et interprétez une échancrure (creux) observée dans les classes d\'âges 40-44 ans sur une pyramide.',
        'Correction : Un creux correspond à un déficit d\'effectifs qui peut s\'expliquer par : une baisse sévère de la natalité 40 à 44 ans auparavant (guerre, famine, épidémie), ou une hécatombe spécifique ayant frappé cette cohorte (conflit armé touchant les jeunes adultes), ou encore une forte vague d\'émigration sélective.'
      ]
    }
  ],
  diagram: {
    title: 'Schéma comparatif : Profils types de pyramides des âges',
    root: 'PROFILS DE PYRAMIDES DES ÂGES',
    branches: [
      {
        name: 'PROFIL EN PARASOL (PAYS DU SUD)',
        subtitle: 'Base très large, sommet pointu',
        items: [
          'Forte natalité & forte proportion de jeunes (>40 %)',
          'Forte mortalité cumulée réduisant les tranches âgées',
          'Pays : Sénégal, Niger, Mali, Tchad',
          'Enjeux : scolarisation massive, emploi des jeunes'
        ]
      },
      {
        name: 'PROFIL EN CLOCHE (TRANSITION AVANCÉE)',
        subtitle: 'Base stabilisée, corps équilibré',
        items: [
          'Baisse récente de la fécondité',
          'Effectifs d\'enfants équivalents aux jeunes adultes',
          'Pays : Brésil, Inde, Algérie, Indonésie',
          'Fenêtre d\'opportunité du dividende démographique'
        ]
      },
      {
        name: 'PROFIL EN URNE / CHAMPIGNON (NORD)',
        subtitle: 'Base rétrécie, sommet hypertrophié',
        items: [
          'Fécondité faible (< 1,5 enf/femme)',
          'Proportion massive de seniors (> 22 %)',
          'Pays : Japon, Allemagne, Italie, Corée du Sud',
          'Enjeux : pénurie d\'actifs, retraites, dépendance'
        ]
      }
    ]
  },
  conclusion: `L'étude des structures de la population démontre que la démographie est le miroir fidèle des trajectoires de développement. L'analyse rigoureuse des pyramides des âges et de la structure sectorielle de l'emploi fournit aux planificateurs territoriaux les données scientifiques irremplaçables pour orienter les investissements publics vers les urgences de chaque territoire.`
};

export const LESSON_6_GEO_1ERE: LessonContent = {
  id: 'geo-1ere-lecon-6',
  number: 'LEÇON 6',
  title: 'TP : construction et commentaire de pyramides des âges et diagrammes triangulaires',
  subject: 'Géographie',
  classLevel: 'Première',
  readTime: '30 min',
  description: 'Guide méthodologique pratique : construction pas-à-pas de pyramides des âges, grille de commentaire géométrique et historique, et lecture/tracé du diagramme triangulaire sectoriel.',
  introduction: `Ce Travail Pratique (TP) a pour vocation de doter l'élève de Première des compétences techniques indispensables pour construire, analyser et commenter deux outils graphiques majeurs du géographe : la pyramide des âges et le diagramme triangulaire de structures d'emploi. Savoir convertir un tableau statistique en une représentation graphique normalisée, soignée et rigoureuse, puis en tirer un commentaire géographique argumenté et problématisé constitue une exigence fondamentale de l'épreuve de géographie au Baccalauréat.`,
  sections: [
    {
      title: 'I. MÉTHODOLOGIE TECHNIQUE DE CONSTRUCTION DE LA PYRAMIDE DES ÂGES',
      content: [
        'Pour réaliser une pyramide des âges irréprochable sur feuille millimétrée ou quadrillée, l\'élève doit appliquer rigoureusement les étapes suivantes :',
        '1. Préparation du tableau de données : Les effectifs ou pourcentages doivent être répartis par tranches d\'âge identiques (habituellement quinquennales : 0-4 ans, 5-9 ans, 10-14 ans... jusqu\'à 75 ans et plus) et ventilés distinctement entre hommes et femmes.',
        '2. Tracé du repère orthonormé :',
        '• Tracer un axe vertical central représentant l\'échelle des âges. Indiquer les âges au centre de bas en haut (les nouveau-nés en bas, les plus âgés au sommet).',
        '• Tracer deux demi-axes horizontaux partant de l\'axe central : le demi-axe de gauche est réservé aux HOMMES, le demi-axe de droite est réservé aux FEMMES.',
        '3. Choix impératif d\'une échelle régulière identique des deux côtés : Déterminer la valeur maximale pour choisir une échelle lisible (par exemple : 1 cm pour 1 % ou 1 cm pour 50 000 habitants). La même échelle doit être scrupuleusement conservée pour le côté masculin et le côté féminin.',
        '4. Tracé des bandes horizontales : Construire pour chaque classe d\'âge un rectangle horizontal dont la longueur est proportionnelle à l\'effectif ou au pourcentage.',
        '5. Les finitions obligatoires : Inscrire le TITRE complet (en mentionnant le pays et l\'année des données), la mention des SEXES (Hommes à gauche, Femmes à droite), l\'UNITÉ sur l\'axe horizontal (effectifs absolus ou pourcentages) et la SOURCE statistique (ex: ANSD, ONU, Banque Mondiale).'
      ]
    },
    {
      title: 'II. GRILLE MÉTHODIQUE DE COMMENTAIRE D\'UNE PYRAMIDE DES ÂGES',
      content: [
        'Le commentaire d\'une pyramide ne doit jamais se limiter à une plate énumération de chiffres : il doit suivre un plan rigoureux en trois temps :',
        '1. La description morphologique géométrique d\'ensemble :',
        '• La base (0-14 ans) : Est-elle large, moyenne ou rétrécie ? Elle renseigne directement sur la natalité récente.',
        '• Le corps (15-64 ans) : Est-il rectiligne, bombé ou rétréci ? Il indique le réservoir de population active.',
        '• Le sommet (65 ans et plus) : Est-il effilé et pointu ou épais et volumineux ? Il reflète l\'espérance de vie et le vieillissement.',
        '2. L\'analyse des accidents et irrégularités historiques (creux et saillies) :',
        '• Les échancrures (creux) : Déficits d\'effectifs provoqués par des baisses de natalité lors de guerres passées, de pandémies ou d\'émigrations massives.',
        '• Les saillies (bosses) : Poussées de natalité consécutives à des reprises économiques ("Baby-boom") ou vagues d\'immigration d\'actifs.',
        '3. L\'interprétation socio-économique et prospective : En déduire le régime démographique du territoire et formuler les défis d\'aménagement qui en découlent (besoins en écoles, emplois, logements, retraites).'
      ]
    },
    {
      title: 'III. MÉTHODOLOGIE ET PRINCIPE DU DIAGRAMME TRIANGULAIRE',
      content: [
        '1. Définition et utilité : Le diagramme triangulaire (ou triangle des structures) est un triangle équilatéral permettant de représenter graphiquement la répartition d\'un ensemble décomposé en TROIS composantes complémentaires dont la somme fait exactement 100 % (par exemple : les pourcentages d\'actifs dans le secteur primaire, secondaire et tertiaire).',
        '2. Organisation des sommets et des côtés du triangle :',
        '• Chaque sommet correspond à 100 % de l\'une des composantes et à 0 % pour les deux autres.',
        '• Les trois axes gradués de 0 à 100 % forment les côtés du triangle équilatéral, avec un sens de lecture précis (généralement dans le sens des aiguilles d\'une montre).',
        '3. Méthode pour placer un point représentant un pays :',
        '• Repérer la valeur de la première composante (ex: Primaire = 50 %) sur l\'axe correspondant et tracer une ligne parallèle au côté opposé.',
        '• Repérer la valeur de la deuxième composante (ex: Secondaire = 15 %) et tracer la ligne correspondante.',
        '• Le point d\'intersection donne automatiquement la position du pays, et la troisième composante (Tertiaire = 35 %) s\'y vérifie parfaitement puisque 50 + 15 + 35 = 100 %.'
      ]
    },
    {
      title: 'IV. EXERCICE PRATIQUE GUIDÉ N° 1 : PYRAMIDE DES ÂGES DU SÉNÉGAL',
      content: [
        'Données statistiques simplifiées par grands groupes :',
        '• 0-14 ans : 42 % (Hommes : 21,3 %, Femmes : 20,7 %)',
        '• 15-64 ans : 54 % (Hommes : 26,8 %, Femmes : 27,2 %)',
        '• 65 ans et plus : 4 % (Hommes : 1,8 %, Femmes : 2,2 %)',
        'Commentaire guidé rédigé :',
        '« La pyramide des âges du Sénégal présente une forme typique en tour Eiffel ou en parasol avec une base extrêmement large et un sommet effilé. La base large (42 % de jeunes de moins de 15 ans) témoigne d\'un taux de natalité soutenu et d\'une population exceptionnellement jeune. Le corps de la pyramide se rétrécit progressivement en raison d\'une mortalité qui s\'exerce de manière continue. Le sommet très pointu (seulement 4 % de 65 ans et plus) s\'explique par une espérance de vie moyenne encore modeste (environ 68 ans) par rapport aux pays du Nord. Les femmes sont légèrement plus nombreuses au sommet, traduisant la surmortalité masculine aux âges avancés. Ce profil impose au Sénégal des investissements massifs dans les infrastructures scolaires, universitaires et sanitaires ainsi qu\'une stratégie volontariste d\'insertion professionnelle des jeunes. »'
      ]
    },
    {
      title: 'V. EXERCICE PRATIQUE GUIDÉ N° 2 : DIAGRAMME TRIANGULAIRE DE TROIS PAYS',
      content: [
        'Données sectorielles de trois pays à positionner et comparer :',
        '• Pays A (Niger) : Primaire = 72 %, Secondaire = 8 %, Tertiaire = 20 %',
        '• Pays B (Chine) : Primaire = 24 %, Secondaire = 28 %, Tertiaire = 48 %',
        '• Pays C (France) : Primaire = 2 %, Secondaire = 19 %, Tertiaire = 79 %',
        'Analyse comparative :',
        'Le pays A se situe très près du sommet "Primaire", caractéristique d\'une économie agraire traditionnelle peu industrialisée. Le pays B occupe une position centrale-médiane, illustrant une économie émergente en phase avancée d\'industrialisation avec forte montée des services. Le pays C se localise tout près du sommet "Tertiaire", reflétant une économie post-industrielle hyper-tertiarisée où l\'agriculture est ultra-mécanisée.'
      ],
      table: {
        headers: ['Pays', 'Secteur Primaire (%)', 'Secteur Secondaire (%)', 'Secteur Tertiaire (%)', 'Total (%)', 'Zone dans le triangle'],
        rows: [
          ['Pays A (Agraire)', '72 %', '8 %', '20 %', '100 %', 'Proche du sommet Primaire'],
          ['Pays B (Émergent)', '24 %', '28 %', '48 %', '100 %', 'Position centrale / médiane'],
          ['Pays C (Tertiarisé)', '2 %', '19 %', '79 %', '100 %', 'Proche du sommet Tertiaire']
        ]
      }
    },
    {
      title: 'VI. CONSIGNES DE RÉDACTION ET ERREURS À PROSCRIRE EN ÉVALUATION',
      content: [
        '1. Les 4 erreurs graphiques sanctionnées par les correcteurs au Baccalauréat :',
        '• Erreur d\'échelle : Utiliser des échelles différentes entre le côté masculin et le côté féminin d\'une pyramide.',
        '• Oubli des mentions cardinales : Oublier le titre, les unités (‰ ou %) ou la légende.',
        '• Confusion des axes : Inverser les âges et les effectifs.',
        '• Manque de soin : Barres tracées sans règle graduée ou graduations irrégulières.',
        '2. Règle d\'or du commentaire : Toujours associer le constat chiffré à son explication géographique causale. Ne jamais dire « la barre des 0-4 ans est longue » sans ajouter « ce qui s\'explique par le maintien d\'une forte fécondité liée aux mariages précoces et à la faible prévalence contraceptive ».'
      ]
    }
  ],
  diagram: {
    title: 'Schéma méthodologique : Les deux outils graphiques du TP',
    root: 'TP MÉTHODOLOGIE GRAPHIQUE',
    branches: [
      {
        name: 'LA PYRAMIDE DES ÂGES',
        subtitle: 'Structure par âge & par sexe',
        items: [
          'Axe vertical : âges croissants du bas vers le haut',
          'Deux demi-axes horizontaux : Hommes (G) / Femmes (D)',
          'Même échelle métrique obligatoire des deux côtés',
          'Interprétation : Base (natalité), Sommet (longévité)'
        ]
      },
      {
        name: 'LE DIAGRAMME TRIANGULAIRE',
        subtitle: 'Structure ternaire (Somme = 100 %)',
        items: [
          'Triangle équilatéral à trois axes de 0 à 100 %',
          'Représente Primaire + Secondaire + Tertiaire',
          'Chaque axe orienté dans le sens horaire',
          'Point d\'intersection unique visualisant l\'économie'
        ]
      },
      {
        name: 'RÈGLES D\'EXCELLENCE AU BAC',
        subtitle: 'Critères de notation officielle',
        items: [
          'Titre complet et précis avec date et lieu',
          'Graduation régulière et rigoureuse à la règle',
          'Légende soignée et unités explicites',
          'Commentaire problématisé (constat + explication)'
        ]
      }
    ]
  },
  conclusion: `La maîtrise de la pyramide des âges et du diagramme triangulaire confère à l'élève une véritable rigueur de géographe. Ces représentations permettent de dépasser la théorie abstraite pour visualiser concrètement les structures démographiques et économiques des sociétés contemporaines et réussir avec brio les épreuves pratiques de géographie.`
};
