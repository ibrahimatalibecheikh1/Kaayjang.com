export interface LessonContent {
  id: string;
  number: string;
  title: string;
  subject: string;
  classLevel: string;
  fullText: string;
  introduction: string;
  sections: {
    title: string;
    subsections?: {
      subtitle: string;
      content: string[];
      table?: {
        headers: string[];
        rows: string[][];
      };
      image?: {
        url: string;
        alt: string;
        caption?: string;
        svgContent?: string;
      };
    }[];
    content?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    image?: {
      url: string;
      alt: string;
      caption?: string;
      svgContent?: string;
    };
    jobCards?: {
      jobTitle: string;
      frenchTitle: string;
      imageUrl: string;
      sector: string;
      definition: string;
      keyVocabulary: string[];
      exampleSentences: string[];
      toolsAndPlaces: string;
    }[];
  }[];
  diagram: {
    title: string;
    root: string;
    branches: {
      name: string;
      subtitle: string;
      items: string[];
    }[];
  };
  senegalMap?: {
    mode: 'administrative' | 'relief' | 'climat' | 'hydrographie' | 'cartographie' | 'regional';
    title?: string;
    description?: string;
    highlightedFeatures?: string[];
  };
  conclusion: string;
  pdfUrl?: string;
}

export interface ContentData {
  id: string;
  title: string;
  type: 'cours' | 'ressource';
  description: string;
  badge?: string;
  link?: string;
  content?: string;
  lessonData?: LessonContent;
}

export const LESSON_1_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LES COMPOSANTES DE NOTRE CADRE DE VIE',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Chaque jour, nous évoluons dans un espace géographique bien défini qui nous entoure : c'est notre cadre de vie. Cet espace présente des aspects visuels, géographiques et écologiques très différents selon l'endroit où l'on se trouve sur le territoire sénégalais. Pour comprendre la structure de notre cadre de vie, il est nécessaire d'étudier d'abord les deux grands types de milieux qui existent, puis d'analyser en détail les éléments qui les constituent.`,
  sections: [
    {
      title: 'I. LES DEUX GRANDS TYPES DE MILIEUX DE VIE',
      content: [
        `Le cadre de vie au Sénégal se manifeste principalement sous deux formes distinctes qui se différencient par l'activité humaine, l'architecture et la densité de la nature.`
      ],
      subsections: [
        {
          subtitle: 'A. Le milieu rural',
          content: [
            `Le milieu rural correspond à la campagne ou aux zones villageoises (par exemple, les villages de la région de Thiès, de la Casamance ou du Ferlo).`,
            `• Les caractéristiques spatiales : L'espace y est vaste, ouvert et peu modifié de façon artificielle. Les habitations sont souvent dispersées ou regroupées en petits noyaux villageois traditionnels (cases, concessions). Les infrastructures en béton et les routes goudronnées y sont rares ; on y trouve plutôt des pistes en banco ou en sable.`,
            `• La place de la nature : La végétation naturelle (savane, forêts, baobabs, rôniers) et les espaces agricoles (champs de mil, d'arachide, rizières) y occupent la majeure partie de la surface terrestre.`,
            `• La densité de population : L'humaine y est faible. Les nuisances sonores et industrielles y sont quasiment inexistantes.`
          ]
        },
        {
          subtitle: 'B. Le milieu urbain',
          content: [
            `Le milieu urbain correspond à la ville (par exemple, les agglomérations de Dakar, Pikine, Saint-Louis ou Touba).`,
            `• Les caractéristiques spatiales : L'espace y est fortement aménagé, segmenté et restructuré par l'Homme. Il se caractérise par des lotissements alignés, des bâtiments en hauteur, des maisons en maçonnerie, des usines et un réseau dense de routes asphaltées ou pavées.`,
            `• La place de la nature : La nature y est reléguée au second plan, souvent confinée dans des espaces très précis et contrôlés (jardins publics, arbres d'alignement le long des avenues). Le sol naturel est majoritairement recouvert par le goudron et le béton.`,
            `• La densité de population : La concentration humaine y est extrêmement élevée. Ce milieu engendre des flux de transport permanents et une production massive de déchets et d'effluents.`
          ]
        }
      ]
    },
    {
      title: 'II. L\'ANALYSE DES COMPOSANTES DU CADRE DE VIE',
      content: [
        `Peu importe le milieu (rural ou urbain) dans lequel on se trouve, une observation scientifique rigoureuse permet de diviser tous les éléments visibles ou invisibles du cadre de vie en deux grandes composantes interactives : la composante biologique et la composante physique.`
      ],
      subsections: [
        {
          subtitle: 'A. La composante biologique (ou monde vivant)',
          content: [
            `Elle regroupe l'ensemble des structures qui naissent, se nourrissent, grandissent, se reproduisent et meurent. En écologie, cet ensemble d'êtres vivants occupant un espace s'appelle la biocénose. Elle comprend trois catégories fondamentales :`,
            `1. La flore (les végétaux) : Ce sont les organismes fixes ou ancrés au sol qui fabriquent leur propre matière. Exemples au Sénégal : Le baobab (Adansonia digitata), le rônier, le manguier, le sédem (Ziziphus mauritiana), l'herbe du tapis herbacé, le maraîchage (les filaos de la Grande Côte).`,
            `2. La faune (les animaux) : Ce sont les organismes généralement mobiles qui doivent consommer d'autres êtres vivants pour se nourrir. Exemples au Sénégal : Les mammifères (singes, chacals), les oiseaux (tourterelles, calaos, pélicans du Djoudj), les insectes (criquets, termites), les poissons et les reptiles (lézards margouillats, serpents).`,
            `3. Les micro-organismes : Ce sont les êtres vivants invisibles à l'œil nu, observables uniquement au microscope, présents dans le sol, l'eau et sur les autres organismes. Exemples : Les bactéries du sol qui décomposent les feuilles mortes, les champignons microscopiques, les paramécies dans les eaux stagnantes.`
          ]
        },
        {
          subtitle: 'B. La composante physique (ou monde non-vivant)',
          content: [
            `Elle regroupe tous les éléments inertes, qui ne possèdent pas de fonctions vitales (ne respirent pas, ne se reproduisent pas). En écologie, ce support physique et chimique s'appelle le biotope. Elle se subdivise en deux sous-groupes :`,
            `1. Les éléments minéraux naturels : Ce sont les constituants d'origine géologique et climatique qui forment la structure de la Terre et permettent la survie des êtres vivants.`,
            `  - Le sol et les roches (la lithosphère) : Le sable fin, la terre de culture (diéri ou walo), les blocs de latérite rouge, les roches basaltiques (comme aux Mamelles de Ouakam).`,
            `  - L'eau (l'hydrosphère) : L'eau liquide des puits, des marigots, des fleuves (fleuve Sénégal, fleuve Casamance), de l'océan Atlantique, mais aussi l'humidité invisible.`,
            `  - L'air (l'atmosphère) : Le mélange de gaz invisible qui entoure la Terre (dioxygène, diazote, dioxyde de carbone) et dont les mouvements forment le vent (comme l'Alizé ou l'Harmattan).`,
            `2. Les aménagements et constructions de l'Homme : Ce sont les éléments artificiels fabriqués par l'être humain à partir de matières premières minérales ou végétales pour transformer son environnement et l'adapter à ses besoins. Exemples : Les pistes, les autoroutes à péage, les ponts (comme le pont Faidherbe à Saint-Louis), les poteaux électriques, les habitations en ciment, les banquettes de retenue des sols.`
          ]
        }
      ]
    },
    {
      title: 'III. LES INSTRUMENTS D\'ÉTUDE DU CADRE DE VIE',
      content: [
        `Pour étudier scientifiquement ces composantes sur le terrain ou en laboratoire, le biologiste utilise des outils précis :`,
        `• La loupe à main : Permet d'observer les détails des petits insectes ou des parties d'une fleur directement sur le terrain.`,
        `• Le microscope optique : Permet d'observer les micro-organismes ou les cellules des êtres vivants en classe ou en laboratoire.`,
        `• Le thermomètre : Mesure la température de l'air ou de l'eau (paramètre de la composante physique).`,
        `• Le bocal de capture / La pince : Permettent de récolter des échantillons de la faune ou de la flore sans les abîmer.`
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural du cadre de vie',
    root: 'NOTRE CADRE DE VIE',
    branches: [
      {
        name: 'COMPOSANTE BIOLOGIQUE',
        subtitle: 'Le monde vivant / Biocénose',
        items: [
          'La Flore (Végétaux : Baobab, rônier, filao...)',
          'La Faune (Animaux : Mammifères, oiseaux, insectes...)',
          'Les Micro-organismes (Bactéries du sol, champignons microscopiques...)'
        ]
      },
      {
        name: 'COMPOSANTE PHYSIQUE',
        subtitle: 'Le monde non-vivant / Biotope',
        items: [
          'Éléments minéraux naturels (Eau, Air, Roches, Sols du Sénégal)',
          'Aménagements humains (Bâtiments, Routes, Ponts, Poteaux électriques)'
        ]
      }
    ]
  },
  senegalMap: {
    mode: 'regional',
    title: 'Exploration géographique : Les écosystèmes et cadres de vie au Sénégal',
    description: 'Explorez la diversité des cadres de vie à travers les 14 régions du Sénégal : du milieu urbain dense de Dakar aux savanes arborées du Ferlo, vallées fluviales et mangroves de Casamance.',
    highlightedFeatures: ['dakar', 'saint-louis', 'ziguinchor', 'thies', 'kedougou']
  },
  conclusion: `Notre cadre de vie, qu'il soit rural ou urbain, est une structure complexe. Il résulte de l'association permanente entre des composantes physiques inertes (qui servent de support et de ressources) et des composantes biologiques vivantes (qui colonisent ce support). La compréhension de ces éléments est essentielle avant d'étudier, dans la leçon suivante, comment ces différentes composantes dépendent les unes des autres pour maintenir l'équilibre de la nature.`,
  fullText: `LEÇON 1 : LES COMPOSANTES DE NOTRE CADRE DE VIE

INTRODUCTION
Chaque jour, nous évoluons dans un espace géographique bien défini qui nous entoure : c'est notre cadre de vie. Cet espace présente des aspects visuels, géographiques et écologiques très différents selon l'endroit où l'on se trouve sur le territoire sénégalais. Pour comprendre la structure de notre cadre de vie, il est nécessaire d'étudier d'abord les deux grands types de milieux qui existent, puis d'analyser en détail les éléments qui les constituent.

I. LES DEUX GRANDS TYPES DE MILIEUX DE VIE
Le cadre de vie au Sénégal se manifeste principalement sous deux formes distinctes qui se différencient par l'activité humaine, l'architecture et la densité de la nature.

A. Le milieu rural
Le milieu rural correspond à la campagne ou aux zones villageoises (par exemple, les villages de la région de Thiès, de la Casamance ou du Ferlo).
Les caractéristiques spatiales : L'espace y est vaste, ouvert et peu modifié de façon artificielle. Les habitations sont souvent dispersées ou regroupées en petits noyaux villageois traditionnels (cases, concessions). Les infrastructures en béton et les routes goudronnées y sont rares ; on y trouve plutôt des pistes en banco ou en sable.
La place de la nature : La végétation naturelle (savane, forêts, baobabs, rôniers) et les espaces agricoles (champs de mil, d'arachide, rizières) y occupent la majeure partie de la surface terrestre.
La densité de population : L'humaine y est faible. Les nuisances sonores et industrielles y sont quasiment inexistantes.

B. Le milieu urbain
Le milieu urbain correspond à la ville (par exemple, les agglomérations de Dakar, Pikine, Saint-Louis ou Touba).
Les caractéristiques spatiales : L'espace y est fortement aménagé, segmenté et restructuré par l'Homme. Il se caractérise par des lotissements alignés, des bâtiments en hauteur, des maisons en maçonnerie, des usines et un réseau dense de routes asphaltées ou pavées.
La place de la nature : La nature y est reléguée au second plan, souvent confinée dans des espaces très précis et contrôlés (jardins publics, arbres d'alignement le long des avenues). Le sol naturel est majoritairement recouvert par le goudron et le béton.
La densité de population : La concentration humaine y est extrêmement élevée. Ce milieu engendre des flux de transport permanents et une production massive de déchets et d'effluents.

II. L'ANALYSE DES COMPOSANTES DU CADRE DE VIE
Peu importe le milieu (rural ou urbain) dans lequel on se trouve, une observation scientifique rigoureuse permet de diviser tous les éléments visibles ou invisibles du cadre de vie en deux grandes composantes interactives : la composante biologique et la composante physique.

                         [ NOTRE CADRE DE VIE ]
                                   |
        +--------------------------+--------------------------+
        |                                                     |
[ COMPOSANTE BIOLOGIQUE ]                             [ COMPOSANTE PHYSIQUE ]
(Le monde vivant / Biocénose)                        (Le monde non-vivant / Biotope)
        |                                                     |
        +---> La Flore (Végétaux)                             +---> Éléments minéraux naturels
        |                                                     |     (Eau, Air, Roches/Sol)
        +---> La Faune (Animaux)                              |
        |                                                     +---> Aménagements humains
        +---> Les Micro-organismes                                  (Bâtiments, Routes, Ponts)

A. La composante biologique (ou monde vivant)
Elle regroupe l'ensemble des structures qui naissent, se nourrissent, grandissent, se reproduisent et meurent. En écologie, cet ensemble d'êtres vivants occupant un espace s'appelle la biocénose. Elle comprend trois catégories fondamentales :
1. La flore (les végétaux)
Ce sont les organismes fixes ou ancrés au sol qui fabriquent leur propre matière.
Exemples au Sénégal : Le baobab (Adansonia digitata), le rônier, le manguier, le sédem (Ziziphus mauritiana), l'herbe du tapis herbacé, le maraîchage (les filaos de la Grande Côte).
2. La faune (les animaux)
Ce sont les organismes généralement mobiles qui doivent consommer d'autres êtres vivants pour se nourrir.
Exemples au Sénégal : Les mammifères (singes, chacals), les oiseaux (tourterelles, calaos, pélicans du Djoudj), les insectes (criquets, termites), les poissons et les reptiles (lézards margouillats, serpents).
3. Les micro-organismes
Ce sont les êtres vivants invisibles à l'œil nu, observables uniquement au microscope, présents dans le sol, l'eau et sur les autres organismes.
Exemples : Les bactéries du sol qui décomposent les feuilles mortes, les champignons microscopiques, les paramécies dans les eaux stagnantes.

B. La composante physique (ou monde non-vivant)
Elle regroupe tous les éléments inertes, qui ne possèdent pas de fonctions vitales (ne respirent pas, ne se reproduisent pas). En écologie, ce support physique et chimique s'appelle le biotope. Elle se subdivise en deux sous-groupes :
1. Les éléments minéraux naturels
Ce sont les constituants d'origine géologique et climatique qui forment la structure de la Terre et permettent la survie des êtres vivants.
Le sol et les roches (la lithosphère) : Le sable fin, la terre de culture (diéri ou walo), les blocs de latérite rouge, les roches basaltiques (comme aux Mamelles de Ouakam).
L'eau (l'hydrosphère) : L'eau liquide des puits, des marigots, des fleuves (fleuve Sénégal, fleuve Casamance), de l'océan Atlantique, mais aussi l'humidité invisible.
L'air (l'atmosphère) : Le mélange de gaz invisible qui entoure la Terre (dioxygène, diazote, dioxyde de carbone) et dont les mouvements forment le vent (comme l'Alizé ou l'Harmattan).
2. Les aménagements et constructions de l'Homme
Ce sont les éléments artificiels fabriqués par l'être humain à partir de matières premières minérales ou végétales pour transformer son environnement et l'adapter à ses besoins.
Exemples : Les pistes, les autoroutes à péage, les ponts (comme le pont Faidherbe à Saint-Louis), les poteaux électriques, les habitations en ciment, les banquettes de retenue des sols.

III. LES INSTRUMENTS D'ÉTUDE DU CADRE DE VIE
Pour étudier scientifiquement ces composantes sur le terrain ou en laboratoire, le biologiste utilise des outils précis :
La loupe à main : Permet d'observer les détails des petits insectes ou des parties d'une fleur directement sur le terrain.
Le microscope optique : Permet d'observer les micro-organismes ou les cellules des êtres vivants en classe ou en laboratoire.
Le thermomètre : Mesure la température de l'air ou de l'eau (paramètre de la composante physique).
Le bocal de capture / La pince : Permettent de récolter des échantillons de la faune ou de la flore sans les abîmer.

CONCLUSION
Notre cadre de vie, qu'il soit rural ou urbain, est une structure complexe. Il résulte de l'association permanente entre des composantes physiques inertes (qui servent de support et de ressources) et des composantes biologiques vivantes (qui colonisent ce support). La compréhension de ces éléments est essentielle avant d'étudier, dans la leçon suivante, comment ces différentes composantes dépendent les unes des autres pour maintenir l'équilibre de la nature.`
};

export const LESSON_2_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LEUR MILIEU',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Dans la première leçon, nous avons appris que notre cadre de vie est composé d'éléments physiques (le biotope : sol, eau, air, climat) et d'êtres vivants (la biocénose : flore, faune, micro-organismes). Toutefois, ces êtres vivants ne vivent pas isolés les uns des autres ni coupés de leur environnement physique. Au contraire, ils tissent entre eux de multiples interactions et dépendent étroitement des ressources de leur milieu. Comment s'organisent les relations alimentaires entre les êtres vivants ? Quelles sont les autres formes d'interactions qui les unissent ? Et comment s'adaptent-ils aux conditions climatiques et physiques spécifiques du Sénégal pour survivre ?`,
  sections: [
    {
      title: 'I. LES RELATIONS ALIMENTAIRES (OU TROPHIQUES) DANS L\'ENVIRONNEMENT',
      content: [
        `Dans tout écosystème naturel au Sénégal (la savane, la forêt de Casamance, les cours d'eau ou les mares), la relation la plus vitale qui unit les êtres vivants est la recherche de nourriture. Ces échanges de matière et d'énergie s'organisent selon une hiérarchie précise appelée chaîne alimentaire.`
      ],
      subsections: [
        {
          subtitle: 'A. La chaîne alimentaire et les niveaux trophiques',
          content: [
            `Une chaîne alimentaire est une suite ordonnée d'êtres vivants dans laquelle chacun mange celui qui le précède avant d'être mangé par celui qui le suit. Chaque maillon de la chaîne occupe un niveau trophique bien défini :`,
            `1. Les producteurs primaires : Ce sont toujours des végétaux chlorophylliens (arbres comme le baobab, acacia, herbes de savane, phytoplancton des marigots). Grâce à la photosynthèse, ils fabriquent leur propre matière organique à partir de l'eau, du dioxyde de carbone et de la lumière solaire. Ce sont des êtres autotrophes.`,
            `2. Les consommateurs primaires (herbivores ou phytophages) : Ce sont les animaux qui se nourrissent directement de végétaux. Exemples au Sénégal : Le criquet pèlerin, la gazelle, le zébu, la chenille, le mouton de tabaski.`,
            `3. Les consommateurs secondaires (carnivores de 1er ordre) : Ce sont les prédateurs qui se nourrissent d'herbivores. Exemples : Le lézard margouillat qui gobe le criquet, la grenouille, le caméléon, la couleuvre.`,
            `4. Les consommateurs tertiaires (carnivores de 2nd ordre ou superprédateurs) : Ce sont les animaux qui se nourrissent d'autres carnivores. Exemples : L'aigle ravisseur, le chacal, le lion du Parc National du Niokolo-Koba.`,
            `5. Les décomposeurs : Ce sont les micro-organismes (bactéries, champignons microscopiques) et invertébrés du sol (termites, vers) qui décomposent la matière organique morte (feuilles mortes, cadavres, excréments) pour la transformer en sels minéraux réutilisables par les plantes.`
          ]
        },
        {
          subtitle: 'B. Le réseau trophique (ou réseau alimentaire)',
          content: [
            `Dans la nature, un être vivant ne mange pas une seule espèce et ne sert pas de nourriture à un seul prédateur. Plusieurs chaînes alimentaires s'entrecroisent pour constituer un réseau trophique.`,
            `• Exemple de réseau trophique en savane sénégalaise :`,
            `  - Herbe de savane ➔ Criquet ➔ Margouillat ➔ Aigle`,
            `  - Herbe de savane ➔ Zébu / Gazelle ➔ Chacal ou Hyène`,
            `  - Feuilles d'acacia ➔ Girafe / Chèvre ➔ Grand prédateur`,
            `Tous les déchets et cadavres de ces chaînes sont recyclés par les termites et bactéries du sol, assurant la fermeture du cycle de la matière.`
          ]
        }
      ]
    },
    {
      title: 'II. LES AUTRES FORMES D\'INTERACTIONS ENTRE LES ÊTRES VIVANTS',
      content: [
        `En dehors de la prédation, les êtres vivants d'un même milieu établissent des relations variées de coopération, de dépendance ou de rivalité.`
      ],
      subsections: [
        {
          subtitle: 'A. Les interactions positives et coopératives',
          content: [
            `1. La symbiose : C'est une association intime, durable et obligatoire à bénéfice mutuel entre deux organismes d'espèces différentes.`,
            `Exemple emblématique au Sénégal : L'association entre les racines de l'arachide (ou du niébé) et les bactéries Rhizobium du sol. Ces bactéries forment de petites boules appelées nodosités sur les racines. Elles captent l'azote de l'air pour nourrir la plante, et la plante leur fournit les sucres nécessaires à leur survie.`,
            `2. Le mutualisme : C'est une coopération avantageuse pour les deux partenaires mais non obligatoire.`,
            `Exemple : Les abeilles qui butinent le nectar des fleurs de manguier ou de baobab. L'abeille récolte sa nourriture et, en se déplaçant, transporte le pollen qui féconde les fleurs (pollinisation).`,
            `3. Le commensalisme : C'est une association où une espèce tire un profit sans nuire ni aider l'autre espèce hôte.`,
            `Exemple au Sénégal : Le héron garde-bœuf (oiseau blanc) qui accompagne les troupeaux de zébus. En marchant, les bœufs font fuir les criquets et sauterelles dans l'herbe, ce qui permet au héron de se nourrir facilement sans gêner le bétail.`
          ]
        },
        {
          subtitle: 'B. Les interactions négatives et compétitives',
          content: [
            `1. Le parasitisme : C'est une relation dans laquelle un organisme (le parasite) vit aux dépens d'un autre être vivant (l'hôte) en prélevant ses nutriments et en l'affaiblissant sans le tuer immédiatement.`,
            `Exemples au Sénégal : Le moustique Anophèle femelle qui pique l'Homme pour prélever du sang et lui transmet le parasite Plasmodium falciparum responsable du paludisme ; les tiques fixées sur la peau des bœufs et moutons ; le gui parasitant les branches des arbres.`,
            `2. La compétition : C'est la lutte entre plusieurs individus pour l'accès à une même ressource limitée du biotope (points d'eau en saison sèche, lumière sous la canopée forestière, abris ou partenaires reproducteurs).`
          ]
        }
      ]
    },
    {
      title: 'III. L\'ADAPTATION DES ÊTRES VIVANTS À LEUR MILIEU AU SÉNÉGAL',
      content: [
        `Pour survivre aux conditions physiques particulières du Sénégal (chaleur, aridité, saison sèche prolongée, salinité des estuaires), les êtres vivants ont développé des adaptations remarquables :`
      ],
      subsections: [
        {
          subtitle: 'A. Adaptation à la sécheresse (climat sahélien et soudanien)',
          content: [
            `• Chez les végétaux :`,
            `  - Le baobab (Adansonia digitata) : Possède un tronc spongieux capable d'emmagasiner plusieurs dizaines de milliers de litres d'eau pendant l'hivernage. En saison sèche, il perd toutes ses feuilles pour stopper l'évapotranspiration.`,
            `  - L'acacia (Faidherbia albida ou Acacia tortilis) : Possède des feuilles réduites en petites folioles ou épines pour limiter les pertes d'eau, ainsi qu'une longue racine pivotante qui s'enfonce très profondément dans le sol pour atteindre la nappe phréatique.`,
            `  - Les cactus et euphorbes : Stockent l'eau dans leurs tiges gorgées de suc et réduisent leurs feuilles en aiguilles protectrices.`,
            `• Chez les animaux :`,
            `  - Le dromadaire : Peut rester plus de deux semaines sans boire grâce à la graisse de sa bosse (transformée en eau métabolique) et produit une urine très concentrée.`,
            `  - Les petits rongeurs (gerbilles de savane) : Vivent dans des terriers profonds et frais pendant la journée pour fuir la canicule et ne sortent que la nuit.`
          ]
        },
        {
          subtitle: 'B. Adaptation au milieu aquatique et à la mangrove',
          content: [
            `• La mangrove (Sine-Saloum et Casamance) : Les palétuviers (Rhizophora) poussent dans une vase salée et instable. Ils développent des racines-échasses aériennes pour s'ancrer solidement contre les marées, et des pneumatophores (racines dressées verticalement hors de l'eau) pour capter l'oxygène de l'air malgré le sol asphyxiant.`,
            `• Les poissons d'eau douce (tilapias du fleuve Sénégal) : Possèdent des branchies pour extraire le dioxygène dissous dans l'eau et un corps fuselé avec nageoires pour se déplacer avec agilité.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural des relations dans l\'environnement',
    root: 'RELATIONS DANS L\'ENVIRONNEMENT',
    branches: [
      {
        name: 'RELATIONS ALIMENTAIRES (TROPHIQUES)',
        subtitle: 'Chaînes et réseaux alimentaires',
        items: [
          'Producteurs primaires (Végétaux chlorophylliens : Baobab, acacia, herbe)',
          'Consommateurs I (Herbivores : Criquet, zébu, gazelle)',
          'Consommateurs II & III (Carnivores : Margouillat, serpent, aigle, chacal)',
          'Décomposeurs (Bactéries du sol, champignons, termites)'
        ]
      },
      {
        name: 'AUTRES INTERACTIONS INTER-ESPÈCES',
        subtitle: 'Associations bénéfiques ou antagonistes',
        items: [
          'Symbiose (Nodosités de l\'arachide et bactéries Rhizobium)',
          'Commensalisme (Héron garde-bœuf et troupeaux de bétail)',
          'Parasitisme (Moustique Anophèle / tiques du bétail)',
          'Compétition (Lutte pour l\'eau et la lumière)'
        ]
      },
      {
        name: 'ADAPTATIONS AU MILIEU PHYSIQUE',
        subtitle: 'Survie face aux contraintes du climat au Sénégal',
        items: [
          'Sécheresse (Tronc réservoir du baobab, feuilles épineuses des acacias)',
          'Mangrove saline (Racines-échasses et pneumatophores des palétuviers)',
          'Milieu aquatique (Branchies et nageoires des poissons)'
        ]
      }
    ]
  },
  conclusion: `Tous les êtres vivants d'un écosystème sont étroitement interconnectés. Les relations alimentaires assurent la circulation continue de la matière et de l'énergie, depuis l'énergie solaire captée par les plantes jusqu'aux décomposeurs du sol. L'équilibre naturel repose sur la présence et la santé de chacun de ces maillons : la disparition d'une seule espèce (par la déforestation, le braconnage ou la pollution) fragilise l'ensemble du réseau trophique. Au Sénégal, préserver notre cadre de vie exige de protéger ces équilibres biologiques indispensables à notre propre survie.`,
  fullText: `LEÇON 2 : LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LEUR MILIEU

INTRODUCTION
Dans la première leçon, nous avons appris que notre cadre de vie est composé d'éléments physiques (le biotope : sol, eau, air, climat) et d'êtres vivants (la biocénose : flore, faune, micro-organismes). Toutefois, ces êtres vivants ne vivent pas isolés les uns des autres ni coupés de leur environnement physique. Au contraire, ils tissent entre eux de multiples interactions et dépendent étroitement des ressources de leur milieu. Comment s'organisent les relations alimentaires entre les êtres vivants ? Quelles sont les autres formes d'interactions qui les unissent ? Et comment s'adaptent-ils aux conditions climatiques et physiques spécifiques du Sénégal pour survivre ?

I. LES RELATIONS ALIMENTAIRES (OU TROPHIQUES) DANS L'ENVIRONNEMENT
Dans tout écosystème naturel au Sénégal (la savane, la forêt de Casamance, les cours d'eau ou les mares), la relation la plus vitale qui unit les êtres vivants est la recherche de nourriture. Ces échanges de matière et d'énergie s'organisent selon une hiérarchie précise appelée chaîne alimentaire.

A. La chaîne alimentaire et les niveaux trophiques
Une chaîne alimentaire est une suite ordonnée d'êtres vivants dans laquelle chacun mange celui qui le précède avant d'être mangé par celui qui le suit. Chaque maillon de la chaîne occupe un niveau trophique bien défini :
1. Les producteurs primaires : Ce sont toujours des végétaux chlorophylliens (arbres comme le baobab, acacia, herbes de savane, phytoplancton des marigots). Grâce à la photosynthèse, ils fabriquent leur propre matière organique à partir de l'eau, du dioxyde de carbone et de la lumière solaire. Ce sont des êtres autotrophes.
2. Les consommateurs primaires (herbivores ou phytophages) : Ce sont les animaux qui se nourrissent directement de végétaux. Exemples au Sénégal : Le criquet pèlerin, la gazelle, le zébu, la chenille, le mouton de tabaski.
3. Les consommateurs secondaires (carnivores de 1er ordre) : Ce sont les prédateurs qui se nourrissent d'herbivores. Exemples : Le lézard margouillat qui gobe le criquet, la grenouille, le caméléon, la couleuvre.
4. Les consommateurs tertiaires (carnivores de 2nd ordre ou superprédateurs) : Ce sont les animaux qui se nourrissent d'autres carnivores. Exemples : L'aigle ravisseur, le chacal, le lion du Parc National du Niokolo-Koba.
5. Les décomposeurs : Ce sont les micro-organismes (bactéries, champignons microscopiques) et invertébrés du sol (termites, vers) qui décomposent la matière organique morte (feuilles mortes, cadavres, excréments) pour la transformer en sels minéraux réutilisables par les plantes.

B. Le réseau trophique (ou réseau alimentaire)
Dans la nature, un être vivant ne mange pas une seule espèce et ne sert pas de nourriture à un seul prédateur. Plusieurs chaînes alimentaires s'entrecroisent pour constituer un réseau trophique.
Exemple de réseau trophique en savane sénégalaise :
- Herbe de savane ➔ Criquet ➔ Margouillat ➔ Aigle
- Herbe de savane ➔ Zébu / Gazelle ➔ Chacal ou Hyène
- Feuilles d'acacia ➔ Girafe / Chèvre ➔ Grand prédateur
Tous les déchets et cadavres de ces chaînes sont recyclés par les termites et bactéries du sol, assurant la fermeture du cycle de la matière.

                 [ RELATIONS DANS L'ENVIRONNEMENT ]
                                 |
     +---------------------------+---------------------------+
     |                           |                           |
[ RELATIONS ALIMENTAIRES ]  [ INTERACTIONS INTER-ESPÈCES ]  [ ADAPTATIONS AU MILIEU ]
 (Chaînes et réseaux)         (Coopération / Rivalité)      (Contraintes climatiques)
     |                           |                           |
     +-> Producteurs (Plantes)   +-> Symbiose (Arachide)     +-> Sécheresse (Baobab)
     |                           |                           |
     +-> Consommateurs I, II, III+-> Commensalisme (Héron)   +-> Mangrove (Palétuvier)
     |                           |                           |
     +-> Décomposeurs (Sol)      +-> Parasitisme (Moustique) +-> Aquatique (Poissons)

II. LES AUTRES FORMES D'INTERACTIONS ENTRE LES ÊTRES VIVANTS
En dehors de la prédation, les êtres vivants d'un même milieu établissent des relations variées de coopération, de dépendance ou de rivalité.

A. Les interactions positives et coopératives
1. La symbiose : Association intime, durable et obligatoire à bénéfice mutuel entre deux organismes d'espèces différentes.
Exemple emblématique au Sénégal : L'association entre les racines de l'arachide (ou du niébé) et les bactéries Rhizobium du sol. Ces bactéries forment de petites boules appelées nodosités sur les racines. Elles captent l'azote de l'air pour nourrir la plante, et la plante leur fournit les sucres nécessaires à leur survie.
2. Le mutualisme : Coopération avantageuse pour les deux partenaires mais non obligatoire.
Exemple : Les abeilles qui butinent le nectar des fleurs de manguier ou de baobab. L'abeille récolte sa nourriture et transporte le pollen qui féconde les fleurs (pollinisation).
3. Le commensalisme : Association où une espèce tire un profit sans nuire ni aider l'autre espèce hôte.
Exemple au Sénégal : Le héron garde-bœuf (oiseau blanc) qui accompagne les troupeaux de zébus. En marchant, les bœufs font fuir les criquets et sauterelles dans l'herbe, ce qui permet au héron de se nourrir facilement sans gêner le bétail.

B. Les interactions négatives et compétitives
1. Le parasitisme : Relation dans laquelle un organisme (le parasite) vit aux dépens d'un autre être vivant (l'hôte) en prélevant ses nutriments et en l'affaiblissant sans le tuer immédiatement.
Exemples au Sénégal : Le moustique Anophèle femelle qui pique l'Homme pour prélever du sang et lui transmet le parasite Plasmodium falciparum responsable du paludisme ; les tiques fixées sur la peau des bœufs et moutons ; le gui parasitant les branches des arbres.
2. La compétition : Lutte entre plusieurs individus pour l'accès à une même ressource limitée du biotope (points d'eau en saison sèche, lumière sous la canopée forestière, abris ou partenaires reproducteurs).

III. L'ADAPTATION DES ÊTRES VIVANTS À LEUR MILIEU AU SÉNÉGAL
Pour survivre aux conditions physiques particulières du Sénégal (chaleur, aridité, saison sèche prolongée, salinité des estuaires), les êtres vivants ont développé des adaptations remarquables :

A. Adaptation à la sécheresse (climat sahélien et soudanien)
Chez les végétaux :
- Le baobab (Adansonia digitata) : Possède un tronc spongieux capable d'emmagasiner plusieurs dizaines de milliers de litres d'eau pendant l'hivernage. En saison sèche, il perd toutes ses feuilles pour stopper l'évapotranspiration.
- L'acacia (Faidherbia albida ou Acacia tortilis) : Possède des feuilles réduites en petites folioles ou épines pour limiter les pertes d'eau, ainsi qu'une longue racine pivotante qui s'enfonce très profondément dans le sol pour atteindre la nappe phréatique.
- Les cactus et euphorbes : Stockent l'eau dans leurs tiges gorgées de suc et réduisent leurs feuilles en aiguilles protectrices.
Chez les animaux :
- Le dromadaire : Peut rester plus de deux semaines sans boire grâce à la graisse de sa bosse (transformée en eau métabolique) et produit une urine très concentrée.
- Les petits rongeurs (gerbilles de savane) : Vivent dans des terriers profonds et frais pendant la journée pour fuir la canicule et ne sortent que la nuit.

B. Adaptation au milieu aquatique et à la mangrove
La mangrove (Sine-Saloum et Casamance) : Les palétuviers (Rhizophora) poussent dans une vase salée et instable. Ils développent des racines-échasses aériennes pour s'ancrer solidement contre les marées, et des pneumatophores (racines dressées verticalement hors de l'eau) pour capter l'oxygène de l'air malgré le sol asphyxiant.
Les poissons d'eau douce (tilapias du fleuve Sénégal) : Possèdent des branchies pour extraire le dioxygène dissous dans l'eau et un corps fuselé avec nageoires pour se déplacer avec agilité.

CONCLUSION
Tous les êtres vivants d'un écosystème sont étroitement interconnectés. Les relations alimentaires assurent la circulation continue de la matière et de l'énergie, depuis l'énergie solaire captée par les plantes jusqu'aux décomposeurs du sol. L'équilibre naturel repose sur la présence et la santé de chacun de ces maillons : la disparition d'une seule espèce (par la déforestation, le braconnage ou la pollution) fragilise l'ensemble du réseau trophique. Au Sénégal, préserver notre cadre de vie exige de protéger ces équilibres biologiques indispensables à notre propre survie.`
};

export const LESSON_3_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-3',
  number: 'LEÇON 3',
  title: 'LA PROTECTION DE NOTRE CADRE DE VIE',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Le cadre de vie est l'environnement dans lequel nous vivons chaque jour. Il comprend notre maison, notre école, notre quartier, ainsi que la nature qui nous entoure (l'air, l'eau, les plantes). Protéger notre cadre de vie est indispensable pour rester en bonne santé et respecter les autres.`,
  sections: [
    {
      title: 'I. QU\'EST-CE QUI ABÎME NOTRE CADRE DE VIE ?',
      content: [
        `Dans notre quotidien, plusieurs actions humaines provoquent la pollution et rendent notre environnement insalubre :`
      ],
      subsections: [
        {
          subtitle: 'Les principales sources de pollution et de dégradation',
          content: [
            `• Les déchets abandonnés : Jeter des sachets plastiques, des canettes ou des emballages par terre ou dans les caniveaux salit les rues et bouche les évacuations d'eau.`,
            `• La pollution de l'air : Les fumées des voitures, des motos, des usines et les feux de poubelles rendent l'air difficile à respirer.`,
            `• La pollution de l'eau : Verser des produits chimiques, des huiles de moteur ou des eaux usées dans la nature contamine les nappes souterraines et les rivières.`,
            `• Le bruit excessif : Les klaxons permanents, la musique trop forte et les cris troublent le repos et la concentration des habitants.`
          ]
        }
      ]
    },
    {
      title: 'II. COMMENT PROTÉGER NOTRE CADRE DE VIE ?',
      content: [
        `Tout le monde doit participer à la protection de l'environnement, à l'échelle de l'élève comme à celle de l'État.`
      ],
      subsections: [
        {
          subtitle: 'A. Les gestes de l\'élève éco-citoyen',
          content: [
            `Chaque élève de 6ème peut agir grâce à des gestes simples :`,
            `• Le respect de la poubelle : Ne jamais jeter un déchet par terre. Utiliser les poubelles de tri si elles existent (séparer le plastique du reste).`,
            `• La propreté de l'école : Participer au nettoyage de la classe et de la cour de récréation, et prendre soin du matériel.`,
            `• L'économie des ressources : Bien fermer les robinets d'eau après utilisation et éteindre les lumières en sortant d'une pièce.`,
            `• Le respect de la nature : Ne pas arracher les feuilles des plantes, ne pas casser les branches des arbres et respecter les espaces verts.`
          ]
        },
        {
          subtitle: 'B. Le rôle de la commune et de l\'État',
          content: [
            `Les autorités publiques mettent en place de grands moyens :`,
            `• La collecte des ordures : Passer régulièrement ramasser les bacs à ordures des maisons pour les envoyer à la décharge publique.`,
            `• Le nettoyage public : Balayer les grandes avenues et curer les caniveaux avant la saison des pluies.`,
            `• Les lois et les sanctions : Interdire les comportements polluants (comme l'usage des sacs plastiques non biodégradables) et donner des amendes à ceux qui salissent l'espace public.`
          ]
        }
      ]
    },
    {
      title: 'III. POURQUOI EST-CE IMPORTANT ?',
      content: [
        `Protéger notre cadre de vie est une nécessité vitale au quotidien :`
      ],
      subsections: [
        {
          subtitle: 'Les deux raisons fondamentales',
          content: [
            `• Pour la santé : Un cadre de vie propre évite la multiplication des moustiques (qui transmettent le paludisme), des rats et des maladies comme le choléra.`,
            `• Pour le bien-être : Vivre dans un quartier propre, calme et arboré est beaucoup plus agréable pour étudier, jouer et grandir.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Protection de notre cadre de vie',
    root: 'PROTECTION DE NOTRE CADRE DE VIE',
    branches: [
      {
        name: 'CE QUI ABÎME LE CADRE DE VIE',
        subtitle: 'Pollutions et nuisances',
        items: [
          'Déchets abandonnés & sachets plastiques bouchant les caniveaux',
          'Pollution de l\'air (fumées de moteurs, feux de poubelle)',
          'Pollution de l\'eau (produits chimiques, huiles, eaux usées)',
          'Bruit excessif (klaxons, musique assourdissante, tapages)'
        ]
      },
      {
        name: 'COMMENT PROTÉGER LE CADRE DE VIE',
        subtitle: 'Mobilisation des élèves et de l\'État',
        items: [
          'L\'élève : Poubelles, propreté de l\'école, tri des déchets',
          'Économies : Fermer les robinets d\'eau, éteindre les lampes',
          'Nature : Respect des arbres, ne pas arracher les végétaux',
          'État/Commune : Collecte des ordures, curage des caniveaux, lois et amendes'
        ]
      },
      {
        name: 'POURQUOI EST-CE IMPORTANT ?',
        subtitle: 'Santé et bien-être communautaire',
        items: [
          'Santé : Barrière contre le paludisme (moustiques), rats et choléra',
          'Bien-être : Quartier propre, calme et arboré',
          'Cadre d\'études : Climat serein pour étudier, jouer et grandir'
        ]
      }
    ]
  },
  conclusion: `Protéger notre cadre de vie est indispensable pour rester en bonne santé et respecter les autres. Que ce soit à la maison, à l'école ou dans la rue, chaque geste compte. En devenant des éco-citoyens responsables dès la classe de 6ème, nous contribuons activement au bien-être de notre communauté et à la préservation de notre environnement au Sénégal.`,
  fullText: `LEÇON 3 : LA PROTECTION DE NOTRE CADRE DE VIE

INTRODUCTION
Le cadre de vie est l'environnement dans lequel nous vivons chaque jour. Il comprend notre maison, notre école, notre quartier, ainsi que la nature qui nous entoure (l'air, l'eau, les plantes). Protéger notre cadre de vie est indispensable pour rester en bonne santé et respecter les autres.

I. QU'EST-CE QUI ABÎME NOTRE CADRE DE VIE ?
Dans notre quotidien, plusieurs actions humaines provoquent la pollution et rendent notre environnement insalubre :
- Les déchets abandonnés : Jeter des sachets plastiques, des canettes ou des emballages par terre ou dans les caniveaux salit les rues et bouche les évacuations d'eau.
- La pollution de l'air : Les fumées des voitures, des motos, des usines et les feux de poubelles rendent l'air difficile à respirer.
- La pollution de l'eau : Verser des produits chimiques, des huiles de moteur ou des eaux usées dans la nature contamine les nappes souterraines et les rivières.
- Le bruit excessif : Les klaxons permanents, la musique trop forte et les cris troublent le repos et la concentration des habitants.

                   [ LA PROTECTION DE NOTRE CADRE DE VIE ]
                                      |
         +----------------------------+----------------------------+
         |                                                         |
[ LES ATTEINTES AU CADRE ]                                [ LES ACTIONS ÉCO-CITOYENNES ]
(Pollutions & Dégradations)                                 (Protection et Préservation)
         |                                                         |
         +---> Déchets abandonnés & caniveaux bouchés              +---> L'élève : Poubelle, propreté,
         |                                                         |     économie d'eau & respect des arbres
         +---> Pollution de l'air (fumées, feux)                   |
         |                                                         +---> L'État & Communes : Collecte des
         +---> Pollution de l'eau (huiles, eaux usées)             |     ordures, curage & lois écologiques
         |                                                         |
         +---> Nuisances sonores (klaxons, bruits)                 +---> Objectifs : Santé (zéro paludisme)
                                                                         & bien-être pour étudier

II. COMMENT PROTÉGER NOTRE CADRE DE VIE ?
Tout le monde doit participer à la protection de l'environnement, à l'échelle de l'élève comme à celle de l'État.

A. Les gestes de l'élève éco-citoyen
Chaque élève de 6ème peut agir grâce à des gestes simples :
- Le respect de la poubelle : Ne jamais jeter un déchet par terre. Utiliser les poubelles de tri si elles existent (séparer le plastique du reste).
- La propreté de l'école : Participer au nettoyage de la classe et de la cour de récréation, et prendre soin du matériel.
- L'économie des ressources : Bien fermer les robinets d'eau après utilisation et éteindre les lumières en sortant d'une pièce.
- Le respect de la nature : Ne pas arracher les feuilles des plantes, ne pas casser les branches des arbres et respecter les espaces verts.

B. Le rôle de la commune et de l'État
Les autorités publiques mettent en place de grands moyens :
- La collecte des ordures : Passer régulièrement ramasser les bacs à ordures des maisons pour les envoyer à la décharge publique.
- Le nettoyage public : Balayer les grandes avenues et curer les caniveaux avant la saison des pluies.
- Les lois et les sanctions : Interdire les comportements polluants (comme l'usage des sacs plastiques non biodégradables) et donner des amendes à ceux qui salissent l'espace public.

III. POURQUOI EST-CE IMPORTANT ?
- Pour la santé : Un cadre de vie propre évite la multiplication des moustiques (qui transmettent le paludisme), des rats et des maladies comme le choléra.
- Pour le bien-être : Vivre dans un quartier propre, calme et arboré est beaucoup plus agréable pour étudier, jouer et grandir.

CONCLUSION
Protéger notre cadre de vie est indispensable pour rester en bonne santé et respecter les autres. Que ce soit à la maison, à l'école ou dans la rue, chaque geste compte. En devenant des éco-citoyens responsables dès la classe de 6ème, nous contribuons activement au bien-être de notre communauté et à la préservation de notre environnement au Sénégal.`
};

export const LESSON_4_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LEUR MILIEU DE VIE',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Après avoir étudié comment protéger notre cadre de vie, il est important de comprendre que les êtres vivants ne vivent pas isolés. Ils établissent des relations constantes entre eux et avec les éléments non vivants (le milieu physique) qui les entourent.`,
  sections: [
    {
      title: 'I. LES COMPOSANTES D\'UN MILIEU DE VIE',
      content: [
        `Un milieu de vie (comme une forêt, une mare ou un jardin) est toujours composé de deux grandes parties qui interagissent :`
      ],
      subsections: [
        {
          subtitle: 'La composante vivante et la composante non vivante',
          content: [
            `• La composante vivante (Le biocénose) : Elle comprend la flore (l'ensemble des végétaux) et la faune (l'ensemble des animaux). Elle inclut également les champignons et les êtres vivants microscopiques.`,
            `• La composante non vivante (Le milieu physique ou biotope) : Elle est formée par les éléments minéraux comme l'eau, l'air, les roches et le sol. Ce milieu possède des caractéristiques physiques précises : la température, l'humidité et la luminosité.`
          ]
        }
      ]
    },
    {
      title: 'II. LES RELATIONS ENTRE LES ÊTRES VIVANTS (RELATIONS BIOTIQUES)',
      content: [
        `Dans un même milieu, les êtres vivants dépendent les uns des autres pour survivre. On distingue plusieurs types de relations :`
      ],
      subsections: [
        {
          subtitle: 'A. Les relations alimentaires (La nutrition)',
          content: [
            `C'est la relation la plus importante. Les êtres vivants forment une chaîne alimentaire :`,
            `• Les producteurs : Ce sont les végétaux verts (chlorophylliens). Ils fabriquent leur propre nourriture à partir de l'eau, du soleil et des sels minéraux.`,
            `• Les consommateurs : Ce sont les animaux. Les herbivores mangent les plantes, et les carnivores mangent d'autres animaux (relation de prédation).`,
            `• Les décomposeurs : Les vers de terre, champignons et bactéries transforment les restes d'animaux et de plantes morts en matière minérale pour enrichir le sol.`
          ]
        },
        {
          subtitle: 'B. Les autres types de relations',
          content: [
            `• La relation de support ou d'habitat : Un oiseau construit son nid sur un arbre ; un insecte se cache sous l'écorce. L'arbre sert de logement.`,
            `• La relation de transport : Les abeilles transportent le pollen des fleurs pour les aider à se reproduire. Les animaux transportent parfois des graines dans leurs poils.`
          ]
        }
      ]
    },
    {
      title: 'III. LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LE MILIEU PHYSIQUE',
      content: [
        `Le milieu non vivant influence directement la répartition et le comportement des êtres vivants.`
      ],
      subsections: [
        {
          subtitle: 'Influences du biotope et actions réciproques sur le milieu',
          content: [
            `• L'influence de l'eau et de l'humidité : Les grenouilles ou les nénuphars ont besoin d'un milieu aquatique pour vivre. Dans le désert, les plantes (comme le cactus) s'adaptent à la sécheresse.`,
            `• L'influence de la lumière et de la température : Les lézards sortent au soleil pour se réchauffer. Certaines plantes ne poussent qu'à l'ombre des grands arbres.`,
            `• L'action des êtres vivants sur le milieu : Les êtres vivants modifient aussi leur milieu. Par exemple, les racines des arbres fixent le sol et empêchent l'érosion, tandis que la forêt rejette de l'oxygène et rend l'air plus frais.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Les relations entre les êtres vivants et leur milieu de vie',
    root: 'ÉCOSYSTÈME (MILIEU DE VIE)',
    branches: [
      {
        name: 'COMPOSANTES DU MILIEU',
        subtitle: 'Biocénose & Biotope',
        items: [
          'Biocénose (vivant) : Flore (végétaux), faune (animaux), champignons, microbes',
          'Biotope (non vivant) : Eau, air, roches, sol, température, humidité, lumière'
        ]
      },
      {
        name: 'RELATIONS ENTRE VIVANTS',
        subtitle: 'Nutrition, support & transport',
        items: [
          'Alimentaires : Producteurs (plantes) → Consommateurs (animaux) → Décomposeurs (vers/sol)',
          'Support / Habitat : Arbres abritant nids d\'oiseaux ou insectes sous écorce',
          'Transport : Abeilles transportant le pollen, animaux dispersant les graines'
        ]
      },
      {
        name: 'RELATIONS AVEC LE MILIEU PHYSIQUE',
        subtitle: 'Influences & actions réciproques',
        items: [
          'Eau & Humidité : Grenouilles/nénuphars en milieu aquatique, cactus au désert',
          'Lumière & Température : Lézards au soleil, plantes d\'ombre',
          'Action sur le milieu : Racines anti-érosion, forêt rejetant de l\'oxygène'
        ]
      }
    ]
  },
  conclusion: `Les êtres vivants et leur milieu physique constituent un ensemble indissociable en équilibre permanent. Grâce aux relations de nutrition (producteurs, consommateurs, décomposeurs), d'habitat et de transport, la vie se perpétue. En comprenant comment les facteurs physiques (eau, lumière, sol) influencent les espèces et comment la végétation protège la terre contre l'érosion, l'élève comprend l'importance vitale de préserver l'équilibre de chaque milieu de vie.`,
  fullText: `LEÇON 4 : LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LEUR MILIEU DE VIE

INTRODUCTION
Après avoir étudié comment protéger notre cadre de vie, il est important de comprendre que les êtres vivants ne vivent pas isolés. Ils établissent des relations constantes entre eux et avec les éléments non vivants (le milieu physique) qui les entourent.

I. LES COMPOSANTES D'UN MILIEU DE VIE
Un milieu de vie (comme une forêt, une mare ou un jardin) est toujours composé de deux grandes parties qui interagissent :
- La composante vivante (Le biocénose) : Elle comprend la flore (l'ensemble des végétaux) et la faune (l'ensemble des animaux). Elle inclut également les champignons et les êtres vivants microscopiques.
- La composante non vivante (Le milieu physique ou biotope) : Elle est formée par les éléments minéraux comme l'eau, l'air, les roches et le sol. Ce milieu possède des caractéristiques physiques précises : la température, l'humidité et la luminosité.

                   [ LES RELATIONS DANS LE MILIEU DE VIE ]
                                      |
         +----------------------------+----------------------------+
         |                                                         |
[ ENTRE LES ÊTRES VIVANTS ]                               [ AVEC LE MILIEU PHYSIQUE ]
(Relations biotiques)                                       (Facteurs abiotiques)
         |                                                         |
         +---> Alimentaires : Producteurs -> Consommateurs         +---> Eau / Humidité : Grenouille, nénuphar,
         |     -> Décomposeurs (chaîne trophique)                  |     adaptations désertiques (cactus)
         |                                                         |
         +---> Support & Habitat : Nids d'oiseaux dans             +---> Température & Lumière : Lézard au soleil,
         |     les arbres, insectes sous écorce                    |     plantes d'ombre
         |                                                         |
         +---> Transport : Pollinisation par abeilles,             +---> Action sur le milieu : Racines anti-érosion,
               graines dispersées par animaux                            rejet d'oxygène et fraîcheur

II. LES RELATIONS ENTRE LES ÊTRES VIVANTS (RELATIONS BIOTIQUES)
Dans un même milieu, les êtres vivants dépendent les uns des autres pour survivre. On distingue plusieurs types de relations :

A. Les relations alimentaires (La nutrition)
C'est la relation la plus importante. Les êtres vivants forment une chaîne alimentaire :
- Les producteurs : Ce sont les végétaux verts (chlorophylliens). Ils fabriquent leur propre nourriture à partir de l'eau, du soleil et des sels minéraux.
- Les consommateurs : Ce sont les animaux. Les herbivores mangent les plantes, et les carnivores mangent d'autres animaux (relation de prédation).
- Les décomposeurs : Les vers de terre, champignons et bactéries transforment les restes d'animaux et de plantes morts en matière minérale pour enrichir le sol.

B. Les autres types de relations
- La relation de support ou d'habitat : Un oiseau construit son nid sur un arbre ; un insecte se cache sous l'écorce. L'arbre sert de logement.
- La relation de transport : Les abeilles transportent le pollen des fleurs pour les aider à se reproduire. Les animaux transportent parfois des graines dans leurs poils.

III. LES RELATIONS ENTRE LES ÊTRES VIVANTS ET LE MILIEU PHYSIQUE
Le milieu non vivant influence directement la répartition et le comportement des êtres vivants.
- L'influence de l'eau et de l'humidité : Les grenouilles ou les nénuphars ont besoin d'un milieu aquatique pour vivre. Dans le désert, les plantes (comme le cactus) s'adaptent à la sécheresse.
- L'influence de la lumière et de la température : Les lézards sortent au soleil pour se réchauffer. Certaines plantes ne poussent qu'à l'ombre des grands arbres.
- L'action des êtres vivants sur le milieu : Les êtres vivants modifient aussi leur milieu. Par exemple, les racines des arbres fixent le sol et empêchent l'érosion, tandis que la forêt rejette de l'oxygène et rend l'air plus frais.

CONCLUSION
Les êtres vivants et leur milieu physique constituent un ensemble indissociable en équilibre permanent. Grâce aux relations de nutrition (producteurs, consommateurs, décomposeurs), d'habitat et de transport, la vie se perpétue. En comprenant comment les facteurs physiques (eau, lumière, sol) influencent les espèces et comment la végétation protège la terre contre l'érosion, l'élève comprend l'importance vitale de préserver l'équilibre de chaque milieu de vie.`
};

export const LESSON_5_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LE PEUPLEMENT D\'UN MILIEU AU COURS DES SAISONS',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Les conditions physiques d'un milieu (température, humidité, durée du jour) changent tout au long de l'année. Pour survivre, les êtres vivants modifient leur présence ou leur comportement : c'est le peuplement alterné du milieu.`,
  sections: [
    {
      title: 'I. LE COMPORTEMENT DES ANIMAUX FACE AUX CHANGEMENTS DE SAISONS',
      content: [
        `Les animaux utilisent différentes stratégies pour passer la mauvaise saison (l'hiver ou la saison sèche) :`
      ],
      subsections: [
        {
          subtitle: 'Stratégies d\'adaptation et survie chez les animaux',
          content: [
            `• La migration : Certains animaux quittent leur milieu pour aller vers des régions plus chaudes où la nourriture est abondante. Exemples : Les hirondelles, les cigognes ou certains papillons (le Monarque).`,
            `• L'hibernation : D'autres animaux s'endorment profondément dans un abri isolé (terrier, grotte). Leur température corporelle baisse et leur cœur bat très lentement pour économiser l'énergie. Exemples : La marmotte, le hérisson, le loir.`,
            `• Le changement de forme (Le cycle de vie) : Certains animaux meurent à l'approche de la mauvaise saison mais laissent des formes résistantes qui écloront au retour des beaux jours. Exemples : Les insectes passent l'hiver sous forme d'œufs, de larves ou de chrysalides cachées dans le sol ou l'écorce des arbres.`
          ]
        }
      ]
    },
    {
      title: 'II. LE COMPORTEMENT DES VÉGÉTAUX FACE AUX CHANGEMENTS DE SAISONS',
      content: [
        `Contrairement aux animaux, les végétaux ne peuvent pas se déplacer. Ils s'adaptent sur place sous deux formes principales :`
      ],
      subsections: [
        {
          subtitle: 'A. Les plantes vivaces (qui vivent plusieurs années)',
          content: [
            `Elles passent la mauvaise saison en modifiant leur aspect extérieur :`,
            `• La perte des feuilles : Les arbres à feuilles caduques (comme le chêne ou le hêtre) perdent leurs feuilles en automne pour stopper la circulation de la sève et résister au gel. Ils protègent leurs futurs rameaux dans des bourgeons imperméables.`,
            `• La vie au ralenti sous terre : Les parties aériennes (tiges et feuilles) de certaines plantes meurent, mais la plante survit sous terre grâce à des organes de réserve. Exemples : Les bulbes (tulipe, oignon) ou les rhizomes (fougère).`
          ]
        },
        {
          subtitle: 'B. Les plantes annuelles (qui vivent moins d\'un an)',
          content: [
            `Ces plantes meurent complètement à l'arrivée de la mauvaise saison. Elles passent cette période uniquement sous forme de graines qui attendent le retour de conditions favorables (chaleur et humidité) pour germer au printemps suivant.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Le peuplement d\'un milieu au cours des saisons',
    root: 'PEUPLEMENT DU MILIEU SELON LES SAISONS',
    branches: [
      {
        name: 'STRATÉGIES DES ANIMAUX',
        subtitle: 'Fuite, sommeil et métamorphose',
        items: [
          'Migration : Départ vers des zones clémentes (hirondelles, cigognes, papillon monarque)',
          'Hibernation : Sommeil profond et métabolisme ralenti (marmotte, hérisson, loir)',
          'Changement de forme : Formes résistantes (œufs, larves, chrysalides dans le sol/écorce)'
        ]
      },
      {
        name: 'PLANTES VIVACES (SURVIE PLURIANNUELLE)',
        subtitle: 'Adaptation sur place sans mourir',
        items: [
          'Perte des feuilles : Arbres à feuilles caduques (arrêt de la sève, bourgeons protégés)',
          'Vie souterraine au ralenti : Organes de réserve (bulbes d\'oignons, rhizomes de fougères)'
        ]
      },
      {
        name: 'PLANTES ANNUELLES (CYCLE < 1 AN)',
        subtitle: 'Continuité par les graines',
        items: [
          'Mort de la plante adulte à la mauvaise saison',
          'Survie sous forme de graines résistantes',
          'Germination au retour des pluies et de la chaleur'
        ]
      }
    ]
  },
  conclusion: `Face aux changements de saisons, les paysages se modifient car les êtres vivants s'adaptent pour survivre. Qu'il s'agisse de fuir (migration), de dormir (hibernation), de perdre ses feuilles ou de laisser des graines, les espèces animales et végétales assurent ainsi leur continuité d'une année sur l'autre.`,
  fullText: `LEÇON 5 : LE PEUPLEMENT D'UN MILIEU AU COURS DES SAISONS

INTRODUCTION
Les conditions physiques d'un milieu (température, humidité, durée du jour) changent tout au long de l'année. Pour survivre, les êtres vivants modifient leur présence ou leur comportement : c'est le peuplement alterné du milieu.

I. LE COMPORTEMENT DES ANIMAUX FACE AUX CHANGEMENTS DE SAISONS
Les animaux utilisent différentes stratégies pour passer la mauvaise saison (l'hiver ou la saison sèche) :
- La migration : Certains animaux quittent leur milieu pour aller vers des régions plus chaudes où la nourriture est abondante. Exemples : Les hirondelles, les cigognes ou certains papillons (le Monarque).
- L'hibernation : D'autres animaux s'endorment profondément dans un abri isolé (terrier, grotte). Leur température corporelle baisse et leur cœur bat très lentement pour économiser l'énergie. Exemples : La marmotte, le hérisson, le loir.
- Le changement de forme (Le cycle de vie) : Certains animaux meurent à l'approche de la mauvaise saison mais laissent des formes résistantes qui écloront au retour des beaux jours. Exemples : Les insectes passent l'hiver sous forme d'œufs, de larves ou de chrysalides cachées dans le sol ou l'écorce des arbres.

                   [ LE PEUPLEMENT SELON LES SAISONS ]
                                   |
         +-------------------------+-------------------------+
         |                                                   |
[ CHEZ LES ANIMAUX ]                                [ CHEZ LES VÉGÉTAUX ]
(Mobilité & Métamorphoses)                           (Adaptations sur place)
         |                                                   |
         +---> Migration (Hirondelles, Cigognes)             +---> Plantes Vivaces :
         |                                                   |     • Chute des feuilles & bourgeons
         +---> Hibernation (Marmotte, Hérisson)              |     • Organes souterrains (bulbes, rhizomes)
         |                                                   |
         +---> Changement de forme :                         +---> Plantes Annuelles :
               Œufs, larves, chrysalides dans le sol               Disparition de la plante & graines

II. LE COMPORTEMENT DES VÉGÉTAUX FACE AUX CHANGEMENTS DE SAISONS
Contrairement aux animaux, les végétaux ne peuvent pas se déplacer. Ils s'adaptent sur place sous deux formes principales :

A. Les plantes vivaces (qui vivent plusieurs années)
Elles passent la mauvaise saison en modifiant leur aspect extérieur :
- La perte des feuilles : Les arbres à feuilles caduques (comme le chêne ou le hêtre) perdent leurs feuilles en automne pour stopper la circulation de la sève et résister au gel. Ils protègent leurs futurs rameaux dans des bourgeons imperméables.
- La vie au ralenti sous terre : Les parties aériennes (tiges et feuilles) de certaines plantes meurent, mais la plante survit sous terre grâce à des organes de réserve. Exemples : Les bulbes (tulipe, oignon) ou les rhizomes (fougère).

B. Les plantes annuelles (qui vivent moins d'un an)
Ces plantes meurent complètement à l'arrivée de la mauvaise saison. Elles passent cette période uniquement sous forme de graines qui attendent le retour de conditions favorables (chaleur et humidité) pour germer au printemps suivant.

CONCLUSION
Face aux changements de saisons, les paysages se modifient car les êtres vivants s'adaptent pour survivre. Qu'il s'agisse de fuir (migration), de dormir (hibernation), de perdre ses feuilles ou de laisser des graines, les espèces animales et végétales assurent ainsi leur continuité d'une année sur l'autre.`
};

export const LESSON_6_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LA CLASSIFICATION DES ÊTRES VIVANTS',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Face à l'immense variété des êtres vivants peuplant la Terre, les scientifiques ont élaboré une méthode rigoureuse pour les classer. Classer ne désigne pas trier selon l'utilité pour l'Homme (animaux utiles ou nuisibles) ni selon le milieu de vie (aquatique, terrestre ou aérien), car ces critères mènent à des erreurs (ex. la baleine vit dans l'eau mais est un mammifère qui allaite, et la chauve-souris vole mais n'est pas un oiseau). La classification scientifique moderne regroupe les organismes en fonction de ce qu'ils possèdent en commun : les attributs anatomiques partagés, organisés en groupes emboîtés qui révèlent leurs liens de parenté.`,
  sections: [
    {
      title: 'I. LA CLASSIFICATION SCIENTIFIQUE DES ANIMAUX',
      content: [
        `La première grande distinction anatomique sépare le règne animal selon la présence ou l'absence d'un squelette interne osseux articulé autour d'une colonne vertébrale.`
      ],
      subsections: [
        {
          subtitle: 'A. Le groupe des Vertébrés (Animaux possédant une colonne vertébrale)',
          content: [
            `Les Vertébrés possèdent un squelette interne osseux ou cartilagineux qui protège le système nerveux central. On les divise en 5 grandes classes :`,
            `1. Les Mammifères : Possèdent des poils sur la peau et des mamelles chez la femelle pour allaiter leurs petits avec du lait maternel. Ils sont homéothermes (à température constante / sang chaud) et respirent par des poumons. Exemples : le chien, la vache zébu, le cheval, le mouton, la chauve-souris, le dauphin et l'Homme.`,
            `2. Les Oiseaux : Possèdent un corps recouvert de plumes, deux membres antérieurs transformés en ailes et un bec rigide sans dents. Ils pondent des œufs à coquille calcaire dure (ovipares) et sont homéothermes. Exemples : la poule, le pigeon, le héron garde-bœufs, l'épervier, l'autruche.`,
            `3. Les Reptiles : Possèdent une peau sèche et imperméable recouverte d'écailles soudées (ou d'une carapace cornée). Ils sont poïkilothermes (à température variable / sang froid) et respirent par des poumons. Exemples : le lézard, le margouillat (agame des colons), le serpent boa, la tortue, le crocodile du Nil.`,
            `4. Les Amphibiens : Possèdent une peau nue, très mince et constamment humide sans aucune écaille. Ils mènent une double vie : un stade larvaire aquatique nageur respirant par des branchies (le têtard), puis une métamorphose en adulte terrestre à 4 pattes respirant par des poumons et par la peau. Exemples : la grenouille, le crapaud, le triton.`,
            `5. Les Poissons : Végètent et nagent strictement dans l'eau. Ils possèdent une peau recouverte d'écailles non soudées (libres et imbriquées), des membres transformés en nageoires et respirent sous l'eau grâce à des branchies situées sous les opercules (ouïes). Exemples : le tilapia (carpe du fleuve), le thiof (mérou blanc), la carpe, la sardinelle.`
          ]
        },
        {
          subtitle: 'B. Le groupe des Invertébrés (Animaux sans colonne vertébrale)',
          content: [
            `Les Invertébrés ne possèdent aucun squelette interne osseux. Ils regroupent une immense diversité d'organismes :`,
            `1. Les Arthropodes : Animaux au corps segmenté possédant des pattes articulées et une carapace externe rigide protectrice (exosquelette en chitine) qui les oblige à faire des mues régulières pour grandir. Ils comprennent :`,
            `   • Les Insectes (6 pattes articulées, corps en 3 parties : tête, thorax, abdomen, 1 paire d'antennes et souvent des ailes. Ex. le criquet, l'abeille, la mouche, le moustique anophèle).`,
            `   • Les Arachnides (8 pattes articulées, corps en 2 parties : céphalothorax et abdomen, sans antennes ni ailes. Ex. l'araignée, le scorpion, la tique).`,
            `   • Les Crustacés (10 pattes ou plus, 2 paires d'antennes, carapace imprégnée de calcaire, branchies aquatiques. Ex. le crabe des mangroves, la crevette, la langouste).`,
            `   • Les Myriapodes (mille-pattes au corps formé d'une longue suite d'anneaux portant chacun 1 ou 2 paires de pattes. Ex. l'iule, la scolopendre).`,
            `2. Les Mollusques : Animaux possédant un corps mou non articulé, souvent enveloppé d'un manteau qui sécrète une coquille calcaire protectrice (externe ou interne), et se déplaçant à l'aide d'un pied musculeux. Exemples : l'escargot, la moule d'eau douce, l'huître des palétuviers, la seiche, le calmar.`,
            `3. Les Annélides : Animaux au corps mou, cylindrique et allongé, formé d'une succession d'anneaux visibles sans pattes articulées. Exemples : le ver de terre (lombric), la sangsue.`
          ]
        }
      ]
    },
    {
      title: 'II. LA CLASSIFICATION SCIENTIFIQUE DES VÉGÉTAUX',
      content: [
        `Les végétaux sont classés selon la présence d'organes spécialisés (racines, tiges, feuilles avec vaisseaux de sève) et de leurs structures de reproduction (graines, fleurs, spores, cônes) :`
      ],
      subsections: [
        {
          subtitle: 'Les quatre grands groupes du règne végétal',
          content: [
            `1. Les Spermaphytes (Plantes à graines) : Végétaux vasculaires complets possédant de vraies racines, des tiges dressées, des feuilles chlorophylliennes et des graines assurant la dissémination de l'espèce. On distingue :`,
            `   • Les Angiospermes : Plantes à fleurs dont les ovules sont protégés à l'intérieur d'un ovaire qui se transforme en fruit renfermant les graines. C'est le groupe végétal le plus vaste et dominant. Exemples : le manguier, le baobab, l'arachide, le maïs, le flamboyant, le cotonnier.`,
            `   • Les Gymnospermes : Plantes dont les graines sont "nues", c'est-à-dire directement fixées sur les écailles d'un cône ligneux sans être enfermées dans un fruit. Exemples : le pin, le cyprès, le sapin.`,
            `2. Les Ptéridophytes (Les Fougères) : Plantes sans fleurs ni graines. Elles possèdent de vraies racines, des tiges souterraines horizontales (rhizomes) et de grandes feuilles découpées (frondes) traversées par des vaisseaux conducteurs de sève. Elles se reproduisent grâce à des spores microscopiques abritées dans des sporanges sous les feuilles. Exemple : la fougère aigle.`,
            `3. Les Bryophytes (Les Mousses) : Petites plantes vertes pionnières des milieux humides et ombragés, fixées au sol par de simples rhizoïdes sans vraies racines ni canaux conducteurs pour la sève. Elles absorbent l'eau directement par leurs petites feuilles et se dispersent par spores. Exemples : la mousse des troncs d'arbres, la sphaigne.`,
            `4. Les Thallophytes (Les Algues) : Végétaux aquatiques primitifs simples, vivant en eau douce ou dans la mer. Leur corps végétatif n'est pas différencié en racines, tiges ou feuilles : il forme un thalle souple flottant ou fixé aux rochers. Exemples : la spirogyre (eau douce), la laitue de mer, les sargasses.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : La classification scientifique des êtres vivants',
    root: 'CLASSIFICATION SCIENTIFIQUE PAR ATTRIBUTS',
    branches: [
      {
        name: 'ANIMAUX VERTÉBRÉS (COLONNE VERTÉBRALE)',
        subtitle: '5 Classes anatomiques',
        items: [
          'Mammifères : Poils, mamelles, homéothermes (chien, vache, Homme)',
          'Oiseaux : Plumes, ailes, bec sans dents, œufs à coquille (poule, pigeon)',
          'Reptiles : Peau sèche à écailles soudées, sang froid (lézard, serpent, tortue)',
          'Amphibiens : Peau nue et humide, double vie eau/terre (grenouille, crapaud)',
          'Poissons : Écailles libres, nageoires, branchies sous ouïes (tilapia, thiof)'
        ]
      },
      {
        name: 'ANIMAUX INVERTÉBRÉS (SANS COLONNE)',
        subtitle: 'Arthropodes, Mollusques, Annélides',
        items: [
          'Arthropodes : Carapace & pattes articulées (Insectes 6p, Arachnides 8p, Crustacés 10p+)',
          'Mollusques : Corps mou, coquille calcaire protectrice, pied musculeux (escargot, moule)',
          'Annélides : Corps mou et allongé divisé en suite d\'anneaux (ver de terre, sangsue)'
        ]
      },
      {
        name: 'CLASSIFICATION DES VÉGÉTAUX',
        subtitle: 'Selon organes et mode de reproduction',
        items: [
          'Spermaphytes (graines) : Angiospermes (graines dans fruit : manguier) & Gymnospermes (cônes : pin)',
          'Ptéridophytes (fougères) : Racines, tiges, frondes, reproduction par spores sans fleurs',
          'Bryophytes (mousses) : Petites plantes d\'humidité sans vraies racines ni vaisseaux',
          'Thallophytes (algues) : Végétaux aquatiques simples à corps en thalle non différencié'
        ]
      }
    ]
  },
  conclusion: `La classification moderne des êtres vivants est basée sur le partage de caractères anatomiques communs (attributs) et non sur l'utilité ou l'habitat. En classant les organismes dans des groupes emboîtés, la science met en évidence les liens de parenté entre les différentes espèces et retrace l'histoire de la biodiversité.`,
  fullText: `LEÇON 6 : LA CLASSIFICATION DES ÊTRES VIVANTS

INTRODUCTION
Face à l'immense variété des êtres vivants, les scientifiques ont mis au point une méthode pour les classer.
Classer ne désigne pas trier selon l'utilité ou le milieu de vie, mais regrouper les organismes en fonction de ce qu'ils possèdent en commun (les attributs).

I. LA CLASSIFICATION SCIENTIFIQUE DES ANIMAUX
La première grande distinction sépare les animaux selon la présence ou l'absence d'un squelette interne osseux.

A. Le groupe des Vertébrés : Animaux possédant une colonne vertébrale. On les divise en 5 classes :
• Les Mammifères : Possèdent des poils et des mamelles pour allaiter leurs petits (ex. le chien, la vache, l'Homme).
• Les Oiseaux : Possèdent des plumes, deux ailes et un bec rigide sans dents (ex. la poule, le pigeon).
• Les Reptiles : Possèdent une peau recouverte d'écailles soudées (ex. le lézard, le serpent, la tortue).
• Les Amphibiens : Possèdent une peau nue et humide (ex. la grenouille, le crapaud).
• Les Poissons : Vivent dans l'eau, possèdent des écailles non soudées et des nageoires (ex. le tilapia, la carpe).

                   [ LA CLASSIFICATION SCIENTIFIQUE DES ÊTRES VIVANTS ]
                                           |
         +---------------------------------+---------------------------------+
         |                                                                   |
[ CLASSIFICATION DES ANIMAUX ]                                      [ CLASSIFICATION DES VÉGÉTAUX ]
(Selon le squelette et les attributs)                               (Selon organes et reproduction)
         |                                                                   |
         +---> VERTÉBRÉS (colonne vertébrale) :                              +---> SPERMAPHYTES (Plantes à graines) :
         |     • Mammifères (poils, mamelles : vache, Homme)                 |     • Angiospermes (fleurs, fruit : manguier)
         |     • Oiseaux (plumes, ailes, bec : poule, pigeon)                |     • Gymnospermes (graines nues sur cône : pin)
         |     • Reptiles (écailles soudées : lézard, tortue)                |
         |     • Amphibiens (peau nue et humide : grenouille)                +---> PTÉRIDOPHYTES (Fougères) :
         |     • Poissons (écailles libres, nageoires : tilapia)             |     Racines, tiges, frondes, spores sans fleurs
         |                                                                   |
         +---> INVERTÉBRÉS (sans colonne) :                                  +---> BRYOPHYTES (Mousses) :
               • Arthropodes (pattes articulées & carapace)                  |     Sans vraies racines ni canaux pour sève
                 - Insectes (6 pattes : criquet, abeille)                    |
                 - Arachnides (8 pattes : araignée, scorpion)                +---> THALLOPHYTES (Algues) :
                 - Crustacés (10 pattes ou plus : crabe, crevette)                 Corps simple en thalle non différencié
               • Mollusques (corps mou, coquille : escargot, moule)
               • Annélides (corps mou annelé : ver de terre)

B. Le groupe des Invertébrés : Animaux ne possédant pas de colonne vertébrale.
• Les Arthropodes : Possèdent des pattes articulées et une carapace externe rigide. Ils comprennent les Insectes (6 pattes, ex. le criquet), les Arachnides (8 pattes, ex. l'araignée) et les Crustacés (10 pattes ou plus, ex. le crabe).
• Les Mollusques : Possèdent un corps mou, souvent protégé par une coquille (ex. l'escargot, la moule).
• Les Annélides : Possèdent un corps mou et allongé divisé en une suite d'anneaux (ex. le ver de terre).

II. LA CLASSIFICATION SCIENTIFIQUE DES VÉGÉTAUX
Les végétaux sont classés selon la présence d'organes spécialisés et de structures de reproduction.
• Les Spermaphytes (Plantes à graines) : Possèdent des racines, tiges, feuilles et des graines. On trouve les Angiospermes (graines dans un fruit, plantes à fleurs comme le manguier) et les Gymnospermes (graines nues sur un cône comme le pin).
• Les Ptéridophytes (Les Fougères) : Possèdent des racines, tiges et feuilles découpées, mais pas de fleurs ni de graines. Se reproduisent par spores.
• Les Bryophytes (Les Mousses) : Petites plantes vertes des milieux humides sans vraies racines ni canaux pour la sève.
• Les Thallophytes (Les Algues) : Végétaux aquatiques simples dont le corps n'est pas divisé en organes (thalle).

CONCLUSION
La classification moderne des êtres vivants est basée sur le partage de caractères anatomiques communs (attributs) et non sur l'utilité ou l'habitat. En classer les organismes dans des groupes emboîtés, la science met en évidence les liens de parenté entre les différentes espèces.`
};

export const LESSON_7_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LES COMPOSANTS DES ÊTRES VIVANTS',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Tout ce qui vit, de la plus petite bactérie à la baleine, est constitué de matière organisée. Un être vivant n’est pas un bloc unique. Il est formé d’un ensemble de composants chimiques et structuraux qui travaillent ensemble pour maintenir la vie : se nourrir, grandir, se reproduire et réagir à l’environnement. Dans cette leçon, nous allons voir de quoi est fait un être vivant et comment ces composants sont organisés.`,
  sections: [
    {
      title: 'I. LES COMPOSANTS CHIMIQUES DES ÊTRES VIVANTS',
      content: [
        `Le corps d’un être vivant contient environ 20 éléments chimiques. On les regroupe en 2 grandes catégories :`
      ],
      subsections: [
        {
          subtitle: '1. Les composants minéraux',
          content: [
            `• L’eau (H₂O) : Constituant majoritaire de tous les êtres vivants (représente souvent 65 % à plus de 90 % de la masse de l'organisme). Elle permet le déroulement de l'ensemble des réactions chimiques vitales et assure le transport des substances nutritives et des déchets.`,
            `• Les sels minéraux : Indispensables au bon fonctionnement biologique en proportions variées :`,
            `- Le calcium (Ca) pour la formation et la solidité des os, des dents et des coquilles.`,
            `- Le fer (Fe) constituant clé de l'hémoglobine pour le transport du dioxygène dans le sang.`,
            `- Le sodium (Na) et le potassium (K) essentiels pour la transmission de l’influx nerveux et l'équilibre cellulaire.`,
            `- Le phosphore (P) pour la structure des membranes cellulaires et la synthèse de l'ADN.`
          ]
        },
        {
          subtitle: '2. Les composants organiques',
          content: [
            `Ce sont des molécules complexes élaborées par les êtres vivants, toutes caractérisées par un squelette d'atomes de carbone :`,
            `• Les glucides : Rôle énergétique fondamental immédiat ou de réserve (ex. le glucose, le saccharose, l'amidon chez les végétaux).`,
            `• Les lipides : Réserve majeure d’énergie à long terme et constituants essentiels des membranes cellulaires (ex. graisses animales, huiles végétales).`,
            `• Les protides : Rôle primordial de construction de la matière vivante et de catalyse biologique (ex. protéines musculaires, collagène, enzymes digestives).`,
            `• Les acides nucléiques : Molécules support de l’information héréditaire et des programmes génétiques (ex. ADN dans le noyau cellulaire, ARN).`
          ]
        }
      ]
    },
    {
      title: 'II. LES COMPOSANTS CELLULAIRES',
      content: [
        `La cellule est l’unité structurale et fonctionnelle de base de tout être vivant.`
      ],
      subsections: [
        {
          subtitle: '1. Structure générale d’une cellule',
          content: [
            `Toute cellule vivante comporte trois éléments structuraux indispensables :`,
            `• La membrane plasmique : Enveloppe externe souple qui délimite la cellule, la protège contre les agressions extérieures et régule avec précision toutes les entrées et sorties de substances.`,
            `• Le cytoplasme : Milieu liquide et gélatineux où baignent les organites cellulaires et où se déroulent les réactions métaboliques.`,
            `• Le matériel génétique : Porte l'ensemble des instructions et programmes nécessaires au fonctionnement et à la reproduction de la cellule.`
          ]
        },
        {
          subtitle: '2. Les deux types de cellules',
          content: [
            `• La cellule procaryote : Cellule sans noyau vrai individualisé (l'ADN n'est pas enfermé dans une membrane) et sans organites complexes. Exemple classique : les bactéries.`,
            `• La cellule eucaryote : Cellule plus évoluée munie d'un noyau bien délimité par une membrane nucléaire et d'organites spécialisés :`,
            `- Le noyau : Centre de commande renfermant l'information héréditaire (ADN).`,
            `- Les mitochondries : Centrales énergétiques assurant la respiration cellulaire et la production d'énergie.`,
            `- Les ribosomes : Usines cellulaires fabriquant les protéines à partir des instructions génétiques.`,
            `- Les chloroplastes : Organites spécifiques des cellules végétales chlorophylliennes qui captent l'énergie lumineuse pour la photosynthèse.`
          ]
        }
      ]
    },
    {
      title: 'III. LES NIVEAUX D’ORGANISATION CHEZ LES ÊTRES PLURICELLULAIRES',
      content: [
        `Chez les plantes et les animaux pluricellulaires, les cellules ne travaillent pas isolées mais collaborent au sein d'une organisation hiérarchisée :`
      ],
      subsections: [
        {
          subtitle: 'Les 5 niveaux d’organisation du vivant',
          content: [
            `1. La cellule : Unité structurale et fonctionnelle de base de la matière vivante.`,
            `2. Le tissu : Groupe de cellules spécialisées et coordonnées pour remplir une tâche précise (ex. le tissu musculaire contractile, le tissu osseux, le tissu végétal conducteur).`,
            `3. L'organe : Association de plusieurs tissus différents travaillant ensemble pour assurer une fonction déterminée (ex. le cœur, la feuille, le foie, les poumons).`,
            `4. Le système (ou appareil) : Ensemble coordonné de plusieurs organes complémentaires assurant une grande fonction vitale (ex. le système digestif, le système respiratoire, le système nerveux).`,
            `5. L'organisme : L’être vivant entier et fonctionnel capable d'interagir harmonieusement avec son milieu de vie.`
          ]
        }
      ]
    },
    {
      title: 'IV. SPÉCIFICITÉS SELON LES RÈGNES DU MONDE VIVANT',
      content: [
        `Bien que partageant le modèle cellulaire commun, les cellules présentent des caractéristiques spécifiques selon le règne biologique :`
      ],
      subsections: [
        {
          subtitle: 'Comparaison des spécificités cellulaires',
          content: [
            `• Les Végétaux : Possèdent une paroi rigide externe en cellulose, des chloroplastes pour fabriquer leur matière organique et une grande vacuole centrale de réserve d'eau.`,
            `• Les Animaux : Pas de paroi rigide (cellules souples), pas de chloroplastes, mais présence de tissus nerveux et musculaires spécialisés pour le mouvement et la perception.`,
            `• Les Champignons : Possèdent une paroi cellulaire rigide en chitine, sont dépourvus de chloroplastes et se nourrissent par absorption de matière organique préexistante.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Organisation et composants des êtres vivants',
    root: 'LES COMPOSANTS DES ÊTRES VIVANTS',
    branches: [
      {
        name: 'COMPOSANTS CHIMIQUES',
        subtitle: 'Minéraux et Molécules organiques',
        items: [
          'Minéraux : Eau H₂O (solvant vital 65-90%) + Sels minéraux (Calcium, Fer, Sodium, Potassium, Phosphore)',
          'Organiques à base de carbone : Glucides (énergie), Lipides (réserves & membranes)',
          'Protides (construction & enzymes) + Acides nucléiques (ADN/ARN support héréditaire)'
        ]
      },
      {
        name: 'COMPOSANTS CELLULAIRES',
        subtitle: 'Procaryotes et Eucaryotes',
        items: [
          'Structure générale : Membrane plasmique + Cytoplasme + Matériel génétique',
          'Procaryotes : Sans noyau vrai (ex. bactéries)',
          'Eucaryotes : Avec noyau + Mitochondries (énergie), Ribosomes, Chloroplastes (végétaux)'
        ]
      },
      {
        name: 'NIVEAUX D\'ORGANISATION',
        subtitle: 'De la cellule à l\'organisme',
        items: [
          '1. Cellule (unité de base) ➔ 2. Tissu (musculaire, végétal)',
          '3. Organe (cœur, feuille, foie) ➔ 4. Système (digestif, respiratoire)',
          '5. Organisme (l\'être vivant entier et coordonné)'
        ]
      }
    ]
  },
  conclusion: `Un être vivant est donc constitué de composants chimiques associés pour former des cellules. Ces cellules s’organisent ensuite en tissus, organes et systèmes pour former un organisme fonctionnel. La vie dépend de l’interaction entre tous ces niveaux, du plus petit au plus grand. Comprendre ces composants permet de comprendre comment fonctionne un être vivant.`,
  fullText: `LEÇON 7 : LES COMPOSANTS DES ÊTRES VIVANTS

INTRODUCTION
Tout ce qui vit, de la plus petite bactérie à la baleine, est constitué de matière organisée. Un être vivant n’est pas un bloc unique. Il est formé d’un ensemble de composants chimiques et structuraux qui travaillent ensemble pour maintenir la vie : se nourrir, grandir, se reproduire et réagir à l’environnement. 
Dans cette leçon, nous allons voir de quoi est fait un être vivant et comment ces composants sont organisés.

I. LES COMPOSANTS CHIMIQUES DES ÊTRES VIVANTS
Le corps d’un être vivant contient environ 20 éléments chimiques. On les regroupe en 2 catégories :

1. Les composants minéraux :
• L’eau (H2O) : constituant majoritaire. Elle permet les réactions chimiques et le transport des substances.
• Les sels minéraux : calcium pour les os, fer pour le sang, sodium et potassium pour l’influx nerveux, phosphore pour l’ADN.

2. Les composants organiques :
Ce sont des molécules à base de carbone.
• Les glucides : rôle énergétique. Exemple : glucose, amidon.
• Les lipides : réserve d’énergie et constituants des membranes. Exemple : graisses, huiles.
• Les protides : rôle de construction et de catalyse. Exemple : protéines, enzymes, muscles.
• Les acides nucléiques : support de l’information héréditaire. Exemple : ADN, ARN.

                   [ LES COMPOSANTS DES ÊTRES VIVANTS ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
[ NIVEAU CHIMIQUE ]                                     [ NIVEAU BIOLOGIQUE ]
(Matière constitutive)                                  (Cellules & Niveaux d'organisation)
         |                                                       |
         +---> Composants minéraux :                             +---> Structure cellulaire :
         |     • Eau (H₂O) : Réactions & transports              |     • Membrane plasmique (protection & échanges)
         |     • Sels : Calcium (os), Fer (sang), P, Na, K       |     • Cytoplasme (milieu liquide & organites)
         |                                                       |     • Matériel génétique (instructions ADN)
         +---> Composants organiques :                           |
               • Glucides : Énergie immédiate (glucose)          +---> Types de cellules :
               • Lipides : Réserves & membranes (huiles)         |     • Procaryote : Sans noyau vrai (bactéries)
               • Protides : Bâtisseurs & enzymes                 |     • Eucaryote : Noyau, mitochondries, chloroplastes
               • Acides nucléiques : Hérédité (ADN/ARN)          |
                                                                 +---> Niveaux d'organisation :
                                                                       Cellule ➔ Tissu ➔ Organe ➔ Système ➔ Organisme

II. LES COMPOSANTS CELLULAIRES
La cellule est l’unité de base de tout être vivant.

1. Structure générale d’une cellule :
• Membrane plasmique : protège et régule les entrées et sorties.
• Cytoplasme : liquide où baignent les organites.
• Matériel génétique : porte les instructions de la cellule.

2. Les deux types de cellules :
• Cellule procaryote : sans noyau vrai, sans organites complexes. Exemple : bactéries.
• Cellule eucaryote : avec noyau et organites.
  Organites principaux : noyau, mitochondries pour produire l’énergie, ribosomes pour fabriquer les protéines, chloroplastes chez les plantes.

III. LES NIVEAUX D’ORGANISATION CHEZ LES ÊTRES PLURICELLULAIRES
Chez les plantes et les animaux, les cellules ne travaillent pas isolées :
1. Cellule : unité de base.
2. Tissu : groupe de cellules spécialisées. Exemple : tissu musculaire, tissu végétal.
3. Organe : plusieurs tissus associés. Exemple : cœur, feuille, foie.
4. Système : plusieurs organes pour une même fonction. Exemple : système digestif, système respiratoire.
5. Organisme : l’être vivant entier.

IV. SPÉCIFICITÉS SELON LES RÈGNES
• Végétaux : possèdent une paroi en cellulose, des chloroplastes et une grande vacuole.
• Animaux : pas de paroi, pas de chloroplastes, présence de tissus nerveux et musculaires.
• Champignons : paroi en chitine et mode de nutrition par absorption.

CONCLUSION
Un être vivant est donc constitué de composants chimiques associés pour former des cellules. Ces cellules s’organisent ensuite en tissus, organes et systèmes pour former un organisme fonctionnel. La vie dépend de l’interaction entre tous ces niveaux, du plus petit au plus grand. Comprendre ces composants permet de comprendre comment fonctionne un être vivant.`
};

export const LESSON_8_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-8',
  number: 'LEÇON 8',
  title: 'LA NUTRITION CHEZ LES ANIMAUX',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Tous les animaux ont besoin d’énergie et de matière pour grandir, se déplacer et assurer leurs fonctions vitales. Contrairement aux végétaux, les animaux ne peuvent pas fabriquer leur propre nourriture. Ils doivent donc prélever la matière organique déjà fabriquée dans leur environnement. Ce processus s’appelle la nutrition. Nous allons voir comment les animaux se nourrissent et comment les aliments sont transformés dans leur organisme.`,
  sections: [
    {
      title: 'I. LES MODES D’ALIMENTATION CHEZ LES ANIMAUX',
      content: [
        `Les animaux n’ont pas tous le même régime alimentaire. On les classe selon la nature de ce qu’ils consomment dans leur milieu :`
      ],
      subsections: [
        {
          subtitle: 'Les cinq grands modes alimentaires',
          content: [
            `1. Les herbivores : Se nourrissent uniquement d'aliments d'origine végétale (herbe, feuilles, graines, fruits). Exemple : la vache, le lapin, la chèvre.`,
            `2. Les carnivores : Se nourrissent uniquement de la chair d’autres animaux (proies capturées ou charognes). Exemple : le lion, le requin, l'aigle.`,
            `3. Les omnivores : Consomment à la fois des aliments d’origine végétale et d’origine animale selon les disponibilités. Exemple : l'Homme, l'ours, le porc.`,
            `4. Les détritivores : Se nourrissent de débris de matière organique morte en décomposition et participent au recyclage des sols. Exemple : le ver de terre, le cloporte.`,
            `5. Les parasites : Vivent aux dépens d’un autre être vivant hôte dont ils tirent directement leur nourriture sans le tuer immédiatement. Exemple : le ténia (ver solitaire), le moustique.`
          ]
        }
      ]
    },
    {
      title: 'II. LES ÉTAPES DE LA NUTRITION CHEZ LES ANIMAUX',
      content: [
        `Quel que soit le régime alimentaire, la nutrition se déroule selon une série d'étapes physiologiques successives et ordonnées :`
      ],
      subsections: [
        {
          subtitle: 'De l’ingestion à l’égestion des déchets',
          content: [
            `1. L’ingestion : C’est l’entrée des aliments dans l’organisme par la bouche. Les dents et la salive commencent déjà la transformation mécanique et chimique du bol alimentaire.`,
            `2. La digestion : C’est la transformation des aliments complexes en nutriments simples directement assimilables par l'organisme. Elle a lieu tout au long du tube digestif :`,
            `- Digestion mécanique : Broyage et découpage par les dents dans la bouche, puis brassage et malaxage puissant par les muscles de l’estomac.`,
            `- Digestion chimique : Action catalytique des sucs et enzymes digestives sécrétées par les glandes salivaires, l’estomac, le pancréas et l’intestin. Au cours de cette réaction :`,
            `  • Les glucides complexes sont découpés en molécules simples de glucose.`,
            `  • Les protides (protéines) sont fractionnés en acides aminés.`,
            `  • Les lipides (graisses) sont transformés en acides gras et en glycérol.`,
            `3. L’absorption : Les nutriments simples solubles traversent la paroi interne de l’intestin grêle pour passer dans le sang et la lymphe au niveau des villosités intestinales (replis microscopiques très vascularisés). Ils sont ensuite transportés par la circulation sanguine vers toutes les cellules du corps.`,
            `4. L’assimilation : Les cellules absorbent et utilisent ces nutriments pour produire de l’énergie vitale (par la respiration cellulaire), construire de nouvelles molécules, réparer les tissus et assurer la croissance de l'animal.`,
            `5. L’égestion : C’est le rejet hors de l’organisme des résidus alimentaires non digérés (fibres, débris) sous forme de matières fécales (fèces) par l'anus. D’autres déchets toxiques issus du métabolisme cellulaire, comme l’urée, sont filtrés et éliminés dans les urines par les reins.`
          ]
        }
      ]
    },
    {
      title: 'III. L’APPAREIL DIGESTIF DES ANIMAUX ET SES ADAPTATIONS',
      content: [
        `La structure anatomique du tube digestif varie considérablement d'une espèce à l'autre selon son régime alimentaire spécifique :`
      ],
      subsections: [
        {
          subtitle: 'Comparaison anatomique selon les régimes',
          content: [
            `• Chez les carnivores : Le tube digestif est relativement court car la viande est une matière riche et facile à digérer. Ils possèdent des dents pointues (crocs) pour déchirer la chair, des molaires tranchantes (carnassières) et des griffes puissantes pour attraper et immobiliser leur proie.`,
            `• Chez les herbivores : Le tube digestif est extrêmement long (jusqu'à 20 fois la longueur du corps) car la cellulose végétale est très difficile et longue à digérer. Les ruminants possèdent un estomac complexe divisé en plusieurs poches (la panse ou rumen, le bonnet, le feuillet et la caillette) pour fermenter l'herbe. Leurs mâchoires sont munies de dents plates et larges à crêtes d'émail pour broyer longuement l’herbe.`,
            `• Chez l’Homme : L'appareil digestif est parfaitement adapté à un régime omnivore diversifié. Il comprend dans l'ordre : la bouche, le pharynx, l’œsophage, l’estomac, l’intestin grêle, le gros intestin et l’anus, assistés par des glandes annexes (foie, pancréas, glandes salivaires).`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : La nutrition et l\'appareil digestif chez les animaux',
    root: 'LA NUTRITION CHEZ LES ANIMAUX',
    branches: [
      {
        name: 'MODES ALIMENTAIRES',
        subtitle: '5 Régimes selon les aliments',
        items: [
          'Herbivores (végétaux : vache, lapin, chèvre)',
          'Carnivores (chair : lion, requin, aigle) & Omnivores (mixte : Homme, porc)',
          'Détritivores (décomposition : ver de terre) & Parasites (ténia, moustique)'
        ]
      },
      {
        name: 'ÉTAPES DE LA NUTRITION',
        subtitle: 'De l\'aliment à la cellule',
        items: [
          '1. Ingestion (bouche, salive) ➔ 2. Digestion mécanique & chimique (enzymes)',
          'Glucides ➔ Glucose | Protides ➔ Acides aminés | Lipides ➔ Acides gras',
          '3. Absorption (villosités ➔ sang) ➔ 4. Assimilation ➔ 5. Égestion (fèces, urée)'
        ]
      },
      {
        name: 'ADAPTATIONS DIGESTIVES',
        subtitle: 'Anatomie liée au régime',
        items: [
          'Carnivores : Tube court, crocs et griffes pour chair tendre',
          'Herbivores : Tube très long, estomac complexe (ruminants) et dents plates',
          'Homme : Tube omnivore complet (bouche, œsophage, estomac, intestins)'
        ]
      }
    ]
  },
  conclusion: `La nutrition chez les animaux repose sur la prise d’aliments, leur digestion, l’absorption des nutriments et l’élimination des déchets. Chaque espèce possède un appareil digestif adapté à son mode d’alimentation. Grâce à la nutrition, l’animal obtient l’énergie et les matériaux nécessaires pour vivre et se développer.`,
  fullText: `LEÇON 8 : LA NUTRITION CHEZ LES ANIMAUX

INTRODUCTION
Tous les animaux ont besoin d’énergie et de matière pour grandir, se déplacer et assurer leurs fonctions vitales. Contrairement aux végétaux, les animaux ne peuvent pas fabriquer leur propre nourriture. Ils doivent donc prélever la matière organique déjà fabriquée dans leur environnement. Ce processus s’appelle la nutrition.  
Nous allons voir comment les animaux se nourrissent et comment les aliments sont transformés dans leur organisme.

I. LES MODES D’ALIMENTATION CHEZ LES ANIMAUX
Les animaux n’ont pas tous le même régime alimentaire. On les classe selon ce qu’ils consomment :
1. Les herbivores : se nourrissent uniquement de végétaux. Exemple : vache, lapin, chèvre.
2. Les carnivores : se nourrissent uniquement de chair d’autres animaux. Exemple : lion, requin, aigle.
3. Les omnivores : consomment à la fois des végétaux et des animaux. Exemple : homme, ours, porc.
4. Les détritivores : se nourrissent de matière organique en décomposition. Exemple : ver de terre, cloporte.
5. Les parasites : vivent aux dépens d’un autre être vivant dont ils tirent leur nourriture. Exemple : ténia, moustique.

                   [ LA NUTRITION CHEZ LES ANIMAUX ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
[ MODES & ADAPTATIONS ]                                 [ ÉTAPES DE LA NUTRITION ]
(Régimes et appareils digestifs)                        (De l'aliment aux cellules)
         |                                                       |
         +---> Les régimes alimentaires :                        +---> 1. Ingestion :
         |     • Herbivore : Végétaux (vache, lapin)             |     Bouche, mastication (dents) & salive
         |     • Carnivore : Chair (lion, requin, aigle)         |
         |     • Omnivore : Végétaux & animaux (Homme, porc)     +---> 2. Digestion (mécanique & chimique) :
         |     • Détrivore : Matière en décomposition (ver)      |     Glucides ➔ Glucose | Protides ➔ Acides aminés
         |     • Parasite : Aux dépens d'un hôte (ténia)         |     Lipides ➔ Acides gras & glycérol
         |                                                       |
         +---> Adaptations du tube digestif :                    +---> 3. Absorption & 4. Assimilation :
               • Carnivore : Tube court, crocs & griffes         |     Villosités intestinales ➔ Sang ➔ Cellules
               • Herbivore : Tube très long, estomac complexe    |
               • Homme : Tube équilibré complet                  +---> 5. Égestion & élimination :
                                                                       Rejet fèces (anus) & élimination urée (reins)

II. LES ÉTAPES DE LA NUTRITION CHEZ LES ANIMAUX
Quel que soit le régime, la nutrition se déroule en plusieurs étapes successives :

1. L’ingestion :
C’est l’entrée des aliments dans l’organisme par la bouche. Les dents et la salive commencent déjà la transformation mécanique et chimique.

2. La digestion :
C’est la transformation des aliments complexes en nutriments simples assimilables. Elle a lieu dans le tube digestif.
• Digestion mécanique : broyage par les dents, brassage dans l’estomac.
• Digestion chimique : action des enzymes produites par la salive, l’estomac, le pancréas et l’intestin. Les glucides deviennent du glucose, les protides des acides aminés, les lipides des acides gras et du glycérol.

3. L’absorption :
Les nutriments simples passent de l’intestin grêle dans le sang et la lymphe au niveau des villosités intestinales. Ils sont ensuite transportés vers toutes les cellules.

4. L’assimilation :
Les cellules utilisent les nutriments pour produire de l’énergie, construire de nouvelles cellules et assurer la croissance.

5. L’égestion :
C’est le rejet des déchets et des résidus non digérés hors de l’organisme sous forme de fèces. D’autres déchets comme l’urée sont éliminés par les reins.

III. L’APPAREIL DIGESTIF DES ANIMAUX
Sa structure varie selon le régime alimentaire :
• Chez les carnivores : tube digestif court car la viande est facile à digérer. Dents pointues et griffes pour attraper la proie.
• Chez les herbivores : tube digestif très long avec un estomac complexe à plusieurs poches chez les ruminants. Dents plates pour broyer l’herbe.
• Chez l’homme : appareil digestif adapté à un régime omnivore. Il comprend : bouche, œsophage, estomac, intestin grêle, gros intestin, anus.

CONCLUSION
La nutrition chez les animaux repose sur la prise d’aliments, leur digestion, l’absorption des nutriments et l’élimination des déchets. Chaque espèce possède un appareil digestif adapté à son mode d’alimentation. Grâce à la nutrition, l’animal obtient l’énergie et les matériaux nécessaires pour vivre et se développer.`
};

export const LESSON_9_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-9',
  number: 'LEÇON 9',
  title: 'LA NUTRITION CHEZ LES PLANTES',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Contrairement aux animaux, les plantes ne se déplacent pas pour chercher leur nourriture. Elles fabriquent elles-mêmes leur matière organique à partir d’éléments minéraux et de l’énergie du soleil. Ce mode de nutrition est appelé nutrition autotrophe. Nous allons voir comment une plante se nourrit et quelles sont les conditions nécessaires à sa croissance.`,
  sections: [
    {
      title: 'I. LES BESOINS NUTRITIFS DES PLANTES',
      content: [
        `Pour vivre et se développer, une plante a besoin de deux types de substances fondamentales :`
      ],
      subsections: [
        {
          subtitle: 'Éléments minéraux et éléments organiques',
          content: [
            `1. Les éléments minéraux : Prélevés dans le sol par les racines sous forme de sels minéraux dissous dans l’eau. Exemples : nitrates (azote), phosphates (phosphore), potassium, calcium, magnésium, fer. Ils servent à fabriquer les protéines cellulaires, l’ADN et la chlorophylle.`,
            `2. Les éléments organiques : La plante fabrique elle-même ses glucides, lipides et protides. Pour accomplir cette synthèse biochimique, elle a impérativement besoin de dioxyde de carbone (CO₂) prélevé dans l'air, d’eau (H₂O) issue du sol et d'énergie lumineuse.`
          ]
        }
      ]
    },
    {
      title: 'II. LES ÉTAPES DE LA NUTRITION CHEZ LES PLANTES VERTES',
      content: [
        `Chez les végétaux chlorophylliens, la nutrition se déroule selon quatre étapes coordonnées :`
      ],
      subsections: [
        {
          subtitle: 'Absorption, photosynthèse, transport et réserves',
          content: [
            `1. L’absorption :`,
            `• De l’eau et des sels minéraux : Réalisée au niveau du sol par les poils absorbants situés sur les jeunes racines.`,
            `• Du dioxyde de carbone (CO₂) : Réalisée dans l’atmosphère par les stomates, de minuscules orifices microscopiques situés sous les feuilles.`,
            `2. La photosynthèse :`,
            `C’est la fabrication de matière organique par la plante verte en présence de lumière. Elle a lieu dans les feuilles, au niveau des chloroplastes qui contiennent le pigment vert de la chlorophylle.`,
            `• Bilan chimique de la photosynthèse : CO₂ + H₂O + énergie lumineuse ➔ Glucose + O₂ (avec chlorophylle).`,
            `• Le glucose produit sert de brique fondamentale pour fabriquer toutes les autres substances organiques. Le dioxygène (O₂) est rejeté dans l’air par les stomates.`,
            `3. Le transport des sèves :`,
            `• La sève brute : Composée d’eau et de sels minéraux absorbés dans le sol, elle monte des racines vers les tiges et les feuilles par les vaisseaux conducteurs du xylème (bois).`,
            `• La sève élaborée : Nourricière et très riche en glucose fabriqué lors de la photosynthèse, elle circule des feuilles vers toutes les parties de la plante (bourgeons, tiges, racines, fleurs et fruits) par les vaisseaux du phloème (liber).`,
            `4. L’utilisation et la mise en réserve :`,
            `Les nutriments produits sont directement consommés pour assurer la croissance cellulaire, la floraison et la fructification. L’excès de matière organique est stocké sous forme de réserves (principalement d’amidon) dans les racines (carottes), les tiges (tubercules de manioc ou pomme de terre), les fruits (bananes, mangues) ou les graines (arachide, maïs).`
          ]
        }
      ]
    },
    {
      title: 'III. AUTRES MODES DE NUTRITION CHEZ LES PLANTES',
      content: [
        `Bien que la majorité des végétaux soient autotrophes, certaines espèces végétales ont développé des adaptations nutritives particulières :`
      ],
      subsections: [
        {
          subtitle: 'Plantes parasites, carnivores et saprophytes',
          content: [
            `• Les plantes parasites : Dépourvues ou pauvres en chlorophylle, elles ne réalisent pas ou peu la photosynthèse. Elles développent des suçoirs pour prélever directement la sève brute ou élaborée d’une plante hôte. Exemple : la cuscute.`,
            `• Les plantes carnivores : Poussant dans des sols marécageux très pauvres en azote et en sels minéraux, elles capturent et digèrent de petits insectes grâce à des pièges mobiles ou collants afin d'en extraire les sels minéraux indispensables. Exemple : la dionée attrape-mouche, la sarracénie.`,
            `• Les plantes saprophytes : Elles tirent leur nourriture de la décomposition de matière organique morte présente dans la litière forestière ou le terreau.`
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : La nutrition autotrophe et les flux de sèves chez les plantes',
    root: 'NUTRITION CHEZ LES PLANTES',
    branches: [
      {
        name: 'BESOINS & ABSORPTION',
        subtitle: 'Sol, Air & Soleil',
        items: [
          'Éléments minéraux : Eau + Sels minéraux (nitrates, phosphates, potassium, fer)',
          "Poils absorbants racinaires (eau et sels) & Stomates foliaires (CO₂ de l'air)",
          'Énergie solaire captée par la chlorophylle des chloroplastes'
        ]
      },
      {
        name: 'PHOTOSYNTHÈSE & SÈVES',
        subtitle: 'Synthèse et circulation',
        items: [
          "Photosynthèse : CO₂ + H₂O + Lumière ➔ Glucose + Rejet d'O₂",
          'Sève brute montante (xylème) : Eau + sels minéraux des racines vers les feuilles',
          'Sève élaborée descendante (phloème) : Glucose nourricier vers tous les organes'
        ]
      },
      {
        name: 'RÉSERVES & AUTRES MODES',
        subtitle: 'Stockage & Adaptations',
        items: [
          "Mise en réserve : Stockage d'amidon (racines, tubercules, graines, fruits)",
          'Plantes parasites (suçoirs de sève : cuscute)',
          "Plantes carnivores (capture d'insectes : dionée) & Saprophytes"
        ]
      }
    ]
  },
  conclusion: `La nutrition chez les plantes vertes repose sur l’absorption d’eau et de sels minéraux dans le sol, et de CO2 dans l’air. Grâce à la photosynthèse, elles transforment ces éléments minéraux en matière organique en utilisant l’énergie solaire. Elles produisent ainsi leur propre nourriture et du dioxygène indispensable à la vie sur Terre.`,
  fullText: `LEÇON 9 : LA NUTRITION CHEZ LES PLANTES

INTRODUCTION
Contrairement aux animaux, les plantes ne se déplacent pas pour chercher leur nourriture. Elles fabriquent elles-mêmes leur matière organique à partir d’éléments minéraux et de l’énergie du soleil. Ce mode de nutrition est appelé nutrition autotrophe.  
Nous allons voir comment une plante se nourrit et quelles sont les conditions nécessaires à sa croissance.

I. LES BESOINS NUTRITIFS DES PLANTES
Pour vivre et se développer, une plante a besoin de deux types de substances :
1. Les éléments minéraux : Prélevés dans le sol par les racines sous forme de sels minéraux dissous dans l’eau. Exemples : nitrates, phosphates, potassium, calcium, magnésium, fer. Ils servent à fabriquer les protéines, l’ADN, la chlorophylle.
2. Les éléments organiques : La plante fabrique elle-même ses glucides, lipides et protides. Elle a aussi besoin de dioxyde de carbone CO2 et d’eau H2O.

                   [ LA NUTRITION CHEZ LES PLANTES ]
                                     |
         +---------------------------+---------------------------+
         |                                                       |
[ BESOINS & MODES ]                                     [ ÉTAPES DE LA NUTRITION ]
(Minéraux, CO₂ et Soleil)                               (Absorption, Photosynthèse, Transport)
         |                                                       |
         +---> Besoins nutritifs :                               +---> 1. Absorption :
         |     • Éléments minéraux : Eau + Sels (sol)            |     • Racines (poils absorbants) : Eau + sels minéraux
         |     • Gaz : Dioxyde de carbone CO₂ (air)              |     • Feuilles (stomates) : Dioxyde de carbone CO₂
         |     • Énergie lumineuse : Soleil                      |
         |                                                       +---> 2. Photosynthèse (dans les chloroplastes) :
         +---> Autres modes de nutrition :                       |     CO₂ + H₂O + Lumière ➔ Glucose + O₂ rejeté
               • Parasites : Prélèvent la sève (cuscute)         |
               • Carnivores : Capture d'insectes (dionée)        +---> 3. Transport des sèves :
               • Saprophytes : Matière en décomposition          |     • Sève brute montante (Xylème) : Eau + sels
                                                                 |     • Sève élaborée descendante (Phloème) : Glucose
                                                                 |
                                                                 +---> 4. Utilisation & Réserves :
                                                                       Croissance & stockage d'amidon (tubercules, graines)

II. LES ÉTAPES DE LA NUTRITION CHEZ LES PLANTES VERTES

1. L’absorption :
• De l’eau et des sels minéraux : par les poils absorbants des racines dans le sol.
• Du dioxyde de carbone : par les stomates des feuilles dans l’air.

2. La photosynthèse :
C’est la fabrication de matière organique par la plante verte. Elle a lieu dans les feuilles, au niveau des chloroplastes qui contiennent la chlorophylle.
Bilan de la photosynthèse :
CO₂ + H₂O + énergie lumineuse ➔ Glucose + O₂ (en présence de chlorophylle).
Le glucose sert à fabriquer d’autres substances. Le dioxygène est rejeté dans l’air.

3. Le transport :
La sève brute, composée d’eau et de sels minéraux, monte des racines vers les feuilles par les vaisseaux conducteurs du xylème.
La sève élaborée, riche en glucose, circule des feuilles vers toutes les parties de la plante par le phloème.

4. L’utilisation et la réserve :
Les nutriments produits sont utilisés pour la croissance, la floraison, la fructification. L’excès est stocké dans les racines, tiges, fruits ou graines sous forme d’amidon.

III. AUTRES MODES DE NUTRITION CHEZ LES PLANTES
Toutes les plantes ne sont pas autotrophes :
• Les plantes parasites : prélèvent directement la sève d’une autre plante. Exemple : cuscute.
• Les plantes carnivores : capturent des insectes pour obtenir des sels minéraux. Exemple : dionée, sarracénie.
• Les plantes saprophytes : se nourrissent de matière organique en décomposition.

CONCLUSION
La nutrition chez les plantes vertes repose sur l’absorption d’eau et de sels minéraux dans le sol, et de CO2 dans l’air. Grâce à la photosynthèse, elles transforment ces éléments minéraux en matière organique en utilisant l’énergie solaire. Elles produisent ainsi leur propre nourriture et du dioxygène indispensable à la vie sur Terre.`
};

export const LESSON_10_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-10',
  number: 'LEÇON 10',
  title: 'LA REPRODUCTION CHEZ LES ÊTRES VIVANTS',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `La reproduction est l’une des 4 grandes fonctions vitales avec la nutrition, la relation et la croissance. Elle n’est pas indispensable à la survie d’un individu, mais elle est indispensable à la survie de l’espèce. Grâce à la reproduction, les êtres vivants transmettent leur patrimoine génétique à la génération suivante. Il existe 2 grands types de reproduction : la reproduction asexuée et la reproduction sexuée. Chaque type a des avantages et se retrouve dans différents groupes d’êtres vivants.`,
  sections: [
    {
      title: 'I. LA REPRODUCTION ASEXUÉE',
      content: [
        `Elle met en jeu un seul parent. Il n’y a pas de gamètes ni de fécondation.`
      ],
      subsections: [
        {
          subtitle: '1. Caractéristiques générales',
          content: [
            `• Un seul individu à l’origine de la descendance.`,
            `• Les descendants sont génétiquement identiques au parent : ce sont des clones.`,
            `• Processus rapide et très économique en énergie.`,
            `• Particulièrement efficace pour coloniser rapidement un milieu stable et favorable.`
          ]
        },
        {
          subtitle: '2. Les principaux modes de reproduction asexuée',
          content: [
            `• La scissiparité ou division binaire : La cellule mère se divise en deux cellules filles identiques (ex. bactéries, paramécie, amibe).`,
            `• Le bourgeonnement : Une petite excroissance appelée bourgeon apparaît sur le parent, grandit puis se détache pour former un nouvel être (ex. levure, hydre d’eau douce, corail).`,
            `• La fragmentation et régénération : Le corps se casse en plusieurs fragments et chaque fragment régénère un individu complet (ex. vers, étoile de mer, spirogyre).`,
            `• La sporulation : Formation de spores résistantes et légères qui germent pour donner de nouveaux individus (ex. champignons, mousses, fougères).`,
            `• La multiplication végétative chez les plantes : C’est une reproduction naturelle ou artificielle :`,
            `  - Naturelle : stolon du fraisier, tubercule de pomme de terre, bulbe d’oignon, rhizome du gingembre.`,
            `  - Artificielle : bouturage (tige coupée mise en terre), marcottage (tige enterrée puis sevrée), greffage (union de deux tissus végétaux).`
          ]
        },
        {
          subtitle: '3. Avantages et limites',
          content: [
            `• Avantages : Multiplication rapide en grand nombre et conservation intégrale des caractères génétiques avantageux.`,
            `• Limites : Absence totale de diversité génétique. En cas de changement brusque du milieu ou d’épidémie, toute la population clone risque de disparaître.`
          ]
        }
      ]
    },
    {
      title: 'II. LA REPRODUCTION SEXUÉE',
      content: [
        `Elle met en jeu deux parents de sexes différents et la fusion de deux cellules reproductrices appelées gamètes.`
      ],
      subsections: [
        {
          subtitle: '1. Caractéristiques générales',
          content: [
            `• Deux parents indispensables : un mâle et une femelle.`,
            `• Présence de gamètes spécialisés : spermatozoïde (mâle) et ovule (femelle).`,
            `• Brassage génétique : les descendants héritent d'un mélange d'allèles et sont différents des parents et différents entre eux.`,
            `• Permet une plus grande adaptabilité face aux maladies et favorise l’évolution de l’espèce.`
          ]
        },
        {
          subtitle: '2. Les étapes clés de la reproduction sexuée',
          content: [
            `• La gamétogenèse : Formation des gamètes dans les organes reproducteurs ou gonades. Spermatogenèse (testicules) chez le mâle, ovogenèse (ovaires) chez la femelle.`,
            `• La rencontre des gamètes ou fécondation : Fusion du spermatozoïde et de l’ovule aboutissant à une cellule-œuf ou zygote. Fécondation externe dans l’eau (poissons, amphibiens) ou interne dans les voies génitales de la femelle (mammifères, oiseaux, reptiles, insectes).`,
            `• Le développement embryonnaire : Le zygote se divise par mitoses successives pour former un embryon, puis un nouvel individu.`,
            `• La naissance ou la germination : Selon l’espèce animale (éclosion ou mise bas) ou végétale (germination de la graine).`
          ]
        },
        {
          subtitle: '3. La reproduction sexuée chez les animaux',
          content: [
            `• Oviparité : Développement de l’embryon dans un œuf pondu hors du corps de la mère et protégé par une coquille (ex. oiseaux, reptiles, poissons, insectes).`,
            `• Viviparité : Développement de l’embryon à l’intérieur de l’utérus maternel, nourri via le placenta et le cordon ombilical jusqu'à la mise bas (ex. homme, vache, chien, chat).`,
            `• Ovoviviparité : L’œuf muni de réserves reste dans les voies génitales de la mère jusqu’à l’éclosion immédiate (ex. vipère, certains requins).`
          ]
        },
        {
          subtitle: '4. La reproduction sexuée chez les plantes à fleurs',
          content: [
            `• La pollinisation : Transport des grains de pollen de l’étamine (organe mâle) vers le stigmate du pistil (organe femelle), assuré par le vent, l’eau ou les insectes pollinisateurs (abeilles).`,
            `• La fécondation : Le tube pollinique s'allonge et le gamète mâle fusionne avec l’ovule logé dans l'ovaire de la fleur.`,
            `• Formation de la graine et du fruit : L’ovule fécondé devient une graine contenant l’embryon ; la paroi du pistil grossit et se transforme en fruit qui protège et dissémine la graine.`
          ]
        },
        {
          subtitle: '5. La reproduction chez les autres végétaux',
          content: [
            `• Chez les mousses et fougères : Alternance de générations avec une phase sexuée (production de gamètes nageurs nécessitant l'eau) et une phase asexuée (production de spores).`,
            `• Chez les algues : Reproduction souvent sexuée avec libération des gamètes directement dans l’eau.`
          ]
        }
      ]
    },
    {
      title: 'III. TABLEAU COMPARATIF : REPRODUCTION ASEXUÉE VS SEXUÉE',
      content: [
        `Synthèse comparative des deux grands modes de reproduction du vivant :`,
        `• Nombre de parents : Asexuée = 1 seul parent | Sexuée = 2 parents (mâle et femelle).`,
        `• Cellules reproductrices (Gamètes) : Asexuée = Absents | Sexuée = Présents (spermatozoïde et ovule).`,
        `• Fécondation : Asexuée = Absente | Sexuée = Présente (interne ou externe).`,
        `• Diversité génétique des descendants : Asexuée = Nulle (clones identiques) | Sexuée = Élevée (brassage génétique, individus uniques).`,
        `• Vitesse de multiplication : Asexuée = Très rapide et abondante | Sexuée = Lente, demande du temps et de l'énergie.`,
        `• Exemples emblématiques : Asexuée = Bactérie, fraisier, hydre d'eau douce | Sexuée = Homme, chien, oiseau, manguier.`
      ]
    },
    {
      title: 'IV. IMPORTANCE BIOLOGIQUE DE LA REPRODUCTION',
      content: [
        `La reproduction joue un rôle essentiel à trois niveaux :`,
        `• Pour l’individu : Elle lui permet de transmettre ses gènes et son patrimoine héréditaire à la génération suivante.`,
        `• Pour l’espèce : Elle assure le renouvellement des générations, le maintien des effectifs et la colonisation de nouveaux milieux.`,
        `• Pour l’écosystème : Elle renouvelle la biomasse et maintient l'équilibre des réseaux trophiques et des chaînes alimentaires.`
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : La reproduction asexuée et sexuée chez les êtres vivants',
    root: 'LA REPRODUCTION DU VIVANT',
    branches: [
      {
        name: 'REPRODUCTION ASEXUÉE',
        subtitle: '1 parent - Sans fécondation (Clones)',
        items: [
          'Modes : Scissiparité (bactéries), Bourgeonnement (levure, hydre)',
          'Fragmentation (étoile de mer) & Sporulation (fougères, champignons)',
          'Végétative naturelle (stolons, tubercules) & artificielle (bouturage, greffe)'
        ]
      },
      {
        name: 'REPRODUCTION SEXUÉE',
        subtitle: '2 parents - Gamètes & Fécondation',
        items: [
          'Gamètes : Spermatozoïde (mâle) + Ovule (femelle) ➔ Zygote (cellule-œuf)',
          'Animaux : Ovipares (œuf externe), Vivipares (utérus/placenta), Ovovivipares',
          'Plantes à fleurs : Pollinisation ➔ Fécondation ➔ Graine + Fruit'
        ]
      },
      {
        name: 'COMPARATIF & IMPORTANCE',
        subtitle: 'Diversité et pérennité',
        items: [
          'Asexuée : Rapide, économique, clones identiques sans diversité',
          'Sexuée : Brassage génétique, adaptation et évolution des espèces',
          "Importance : Continuité de l'espèce, transmission des gènes, équilibre des écosystèmes"
        ]
      }
    ]
  },
  conclusion: `La reproduction est donc une fonction vitale qui garantit la continuité de la vie. La reproduction asexuée favorise la quantité et la rapidité, alors que la reproduction sexuée favorise la qualité et l’adaptation par la diversité. Dans la nature, beaucoup d’êtres vivants utilisent les deux modes selon les conditions du milieu.`,
  fullText: `LEÇON 10 : LA REPRODUCTION CHEZ LES ÊTRES VIVANTS (VERSION DÉTAILLÉE)

INTRODUCTION
La reproduction est l’une des 4 grandes fonctions vitales avec la nutrition, la relation et la croissance. Elle n’est pas indispensable à la survie d’un individu, mais elle est indispensable à la survie de l’espèce.  
Grâce à la reproduction, les êtres vivants transmettent leur patrimoine génétique à la génération suivante.  
Il existe 2 grands types de reproduction : la reproduction asexuée et la reproduction sexuée. Chaque type a des avantages et se retrouve dans différents groupes d’êtres vivants.

                   [ LA REPRODUCTION CHEZ LES ÊTRES VIVANTS ]
                                       |
         +-----------------------------+-----------------------------+
         |                                                           |
[ REPRODUCTION ASEXUÉE ]                                    [ REPRODUCTION SEXUÉE ]
(1 parent • Sans gamètes • Clones)                          (2 parents • Gamètes • Diversité)
         |                                                           |
         +---> Modes asexués :                                       +---> Étapes clés :
         |     • Scissiparité (bactérie, paramécie)                  |     • Gamétogenèse : Spermatozoïde & Ovule
         |     • Bourgeonnement (levure, hydre)                      |     • Fécondation : Interne ou externe ➔ Zygote
         |     • Fragmentation (étoile de mer, vers)                 |     • Développement : Embryon puis naissance
         |     • Sporulation (champignon, mousse)                    |
         |     • Végétative : Stolons, tubercules, boutures          +---> Chez les animaux :
         |                                                           |     • Ovipares : Œuf pondu à l'extérieur (poule)
         +---> Avantages & Limites :                                 |     • Vivipares : Utérus & placenta (Homme, vache)
               • Multiplication rapide et abondante                  |     • Ovovivipares : Éclosion dans la mère (vipère)
               • Absence de diversité (vulnérabilité)                |
                                                                     +---> Chez les plantes à fleurs :
                                                                           Pollinisation ➔ Fécondation ➔ Graine & Fruit

I. LA REPRODUCTION ASEXUÉE
Elle met en jeu un seul parent. Il n’y a pas de gamètes ni de fécondation.

1. Caractéristiques générales
- Un seul individu à l’origine
- Les descendants sont génétiquement identiques au parent : ce sont des clones
- Rapide et économique en énergie
- Efficace dans un milieu stable

2. Les principaux modes
- La scissiparité ou division binaire : La cellule mère se divise en deux cellules filles identiques. Exemple : bactéries, paramécie, amibe.
- Le bourgeonnement : Une petite excroissance appelée bourgeon apparaît sur le parent, grandit puis se détache. Exemple : levure, hydre d’eau douce, corail.
- La fragmentation et régénération : Le corps se casse en plusieurs fragments et chaque fragment régénère un individu complet. Exemple : vers, étoile de mer, spirogyre.
- La sporulation : Formation de spores résistantes qui donnent de nouveaux individus. Exemple : champignons, mousses, fougères.
- La multiplication végétative chez les plantes : C’est une reproduction naturelle ou artificielle.
  • Naturelle : stolon du fraisier, tubercule de pomme de terre, bulbe d’oignon, rhizome du gingembre.
  • Artificielle : bouturage, marcottage, greffage.

3. Avantages et limites
Avantages : multiplication rapide, conservation des caractères.
Limites : absence de diversité. Si le milieu change, toute la population peut disparaître.

II. LA REPRODUCTION SEXUÉE
Elle met en jeu deux parents et la fusion de deux gamètes.

1. Caractéristiques générales
- Deux parents : un mâle et une femelle
- Présence de gamètes : spermatozoïde et ovule
- Brassage génétique : les descendants sont différents des parents et entre eux
- Permet l’adaptation et l’évolution de l’espèce

2. Les étapes clés
- La gamétogenèse : formation des gamètes dans les organes reproducteurs. Spermatogenèse chez le mâle, ovogenèse chez la femelle.
- La rencontre des gamètes ou fécondation : fusion du spermatozoïde et de l’ovule pour former le zygote. Elle peut être externe dans l’eau chez les poissons et amphibiens, ou interne dans le corps de la femelle chez les mammifères et oiseaux.
- Le développement : le zygote se divise par mitose pour former un embryon, puis un nouvel individu.
- La naissance ou la germination : selon l’espèce.

3. La reproduction sexuée chez les animaux
- Oviparité : développement de l’embryon dans un œuf hors du corps de la mère. Exemple : oiseau, reptile, insecte.
- Viviparité : développement de l’embryon dans le corps de la mère. Exemple : homme, vache, chien.
- Ovoviviparité : l’œuf reste dans le corps de la mère jusqu’à l’éclosion. Exemple : vipère.

4. La reproduction sexuée chez les plantes à fleurs
- Pollinisation : transport du pollen de l’étamine vers le stigmate du pistil. Par le vent, l’eau ou les insectes.
- Fécondation : le gamète mâle du grain de pollen fusionne avec le gamète femelle de l’ovule.
- Formation de la graine et du fruit : la graine contient l’embryon. Le fruit protège la graine et assure sa dispersion.

5. La reproduction chez les autres végétaux
- Chez les mousses et fougères : alternance de génération avec une phase sexuée et une phase asexuée. Nécessite l’eau pour la fécondation.
- Chez les algues : souvent sexuée avec libération des gamètes dans l’eau.

III. TABLEAU COMPARATIF
Critère                  | Reproduction asexuée           | Reproduction sexuée
-------------------------+--------------------------------+--------------------------------
Nombre de parents        | 1                              | 2 (mâle et femelle)
Gamètes                  | Absents                        | Présents (spermatozoïde, ovule)
Fécondation              | Absente                        | Présente (interne ou externe)
Diversité génétique      | Non (clones identiques)        | Oui (brassage génétique)
Vitesse                  | Très rapide                    | Lente
Exemples                 | Bactérie, fraisier, hydre      | Homme, chien, manguier

IV. IMPORTANCE DE LA REPRODUCTION
- Pour l’individu : permet de transmettre ses gènes.
- Pour l’espèce : assure le maintien et la dispersion.
- Pour l’écosystème : renouvelle les populations et participe aux chaînes alimentaires.

CONCLUSION
La reproduction est donc une fonction vitale qui garantit la continuité de la vie. La reproduction asexuée favorise la quantité et la rapidité, alors que la reproduction sexuée favorise la qualité et l’adaptation par la diversité. Dans la nature, beaucoup d’êtres vivants utilisent les deux modes selon les conditions du milieu.`
};

export const LESSON_11_SVT_6EME: LessonContent = {
  id: 'svt-6eme-lecon-11',
  number: 'LEÇON 11',
  title: 'LA CLASSIFICATION DES ÊTRES VIVANTS',
  subject: 'SVT',
  classLevel: '6ème',
  introduction: `Sur Terre, on estime qu’il existe plusieurs millions d’espèces vivantes. Pour mieux les étudier et les comprendre, les scientifiques ont besoin de les ranger et de les nommer. C’est le rôle de la classification. Classifier, c’est regrouper les êtres vivants selon leurs ressemblances et leurs différences. La classification actuelle est basée sur l’évolution et les caractères communs.`,
  sections: [
    {
      title: 'I. LES BASES DE LA CLASSIFICATION',
      content: [
        `La classification scientifique permet d’ordonner la formidable diversité du monde vivant selon des principes rigoureux.`
      ],
      subsections: [
        {
          subtitle: '1. Objectif de la classification',
          content: [
            `• Identifier avec certitude chaque être vivant observé dans la nature.`,
            `• Donner un nom scientifique unique et universel à chaque espèce pour éviter les confusions liées aux langues locales.`,
            `• Mettre en évidence les liens de parenté et l’histoire évolutive entre les espèces.`
          ]
        },
        {
          subtitle: '2. La nomenclature binomiale',
          content: [
            `• Proposée par le naturaliste suédois Carl Linné au 18e siècle.`,
            `• Chaque espèce vivante porte un nom scientifique latin formé de deux mots (système binomial) :`,
            `  - Le premier mot commence par une majuscule et désigne le Genre.`,
            `  - Le second mot s’écrit entièrement en minuscules et précise l’espèce.`,
            `• Exemples : Homo sapiens pour l'être humain, Mangifera indica pour le manguier, Panthera leo pour le lion.`
          ]
        },
        {
          subtitle: '3. Les critères de classification',
          content: [
            `• Les biologistes observent des caractères anatomiques (organes, squelette), physiologiques (mode de respiration, digestion), cellulaires (noyau, paroi) et aujourd’hui moléculaires (génétique, séquençage de l'ADN).`,
            `• Règle fondamentale : Plus deux êtres vivants partagent un grand nombre de caractères dérivés communs, plus leur lien de parenté est étroit.`
          ]
        }
      ]
    },
    {
      title: 'II. LES GRANDS GROUPES D’ÊTRES VIVANTS (LES 5 RÈGNES)',
      content: [
        `La classification classique moderne répartit l’ensemble du monde vivant en 5 grands règnes fondamentaux :`
      ],
      subsections: [
        {
          subtitle: '1. Le règne des Monères (Bactéries)',
          content: [
            `• Êtres vivants microscopiques unicellulaires et procaryotes (dépourvus de véritable noyau délimité par une membrane).`,
            `• Mode de nutrition très varié : autotrophes (photosynthèse bactérienne) ou hétérotrophes (saprophytes, symbiotiques, parasites pathogènes).`,
            `• Exemples : Bactéries lactiques, bacilles, cyanobactéries (algues bleues).`
          ]
        },
        {
          subtitle: '2. Le règne des Protistes',
          content: [
            `• Organismes unicellulaires ou pluricellulaires très simples, mais eucaryotes (cellules possédant un noyau bien délimité).`,
            `• Vivent principalement dans l'eau douce, l'eau de mer et les milieux très humides.`,
            `• Exemples : L'amibe, la paramécie ciliée, les algues unicellulaires (chlamydomonas).`
          ]
        },
        {
          subtitle: '3. Le règne des Champignons (Fungi)',
          content: [
            `• Organismes eucaryotes dont la paroi cellulaire contient de la chitine.`,
            `• Nutrition par absorption externe de substances dissoutes. Ne possèdent pas de chlorophylle et ne réalisent jamais de photosynthèse (hétérotrophes stricts).`,
            `• Exemples : Les levures (champignons microscopiques unicellulaires du pain), les moisissures et les champignons à chapeau (champignon de Paris, pleurote).`
          ]
        },
        {
          subtitle: '4. Le règne des Végétaux ou Plantes',
          content: [
            `• Êtres vivants pluricellulaires, eucaryotes et autotrophes grâce à la chlorophylle logée dans leurs chloroplastes.`,
            `• Leurs cellules sont protégées par une épaisse paroi rigide faite de cellulose.`,
            `• Exemples : Les mousses, les fougères, les conifères (pin) et les plantes à fleurs (manguier, baobab, mil, cotonnier).`
          ]
        },
        {
          subtitle: '5. Le règne des Animaux',
          content: [
            `• Organismes pluricellulaires, eucaryotes et hétérotrophes se nourrissant par ingestion d’autres êtres vivants.`,
            `• Cellules sans paroi rigide, présence de tissus spécialisés (muscles, système nerveux) conférant la motricité active.`,
            `• Exemples : Les éponges, les vers de terre, les insectes (criquet), les mollusques, les poissons (tilapia), les oiseaux et les mammifères (homme, lion).`
          ]
        }
      ]
    },
    {
      title: 'III. LES NIVEAUX DE CLASSIFICATION (HIÉRARCHIE TAXINOMIQUE)',
      content: [
        `Pour classer précisément une espèce vivante, la taxinomie utilise une suite emboîtée de 7 rangs hiérarchiques obligatoires, du plus général au plus spécifique :`,
        `• Ordre hiérarchique : Règne ➔ Embranchement ➔ Classe ➔ Ordre ➔ Famille ➔ Genre ➔ Espèce.`,
        `• Exemple concret appliqué à l’être humain :`,
        `  - Règne : Animal (pluricellulaire hétérotrophe)`,
        `  - Embranchement : Vertébrés / Cordés (présence d'une colonne vertébrale)`,
        `  - Classe : Mammifères (présence de mamelles et poils, allaitement des petits)`,
        `  - Ordre : Primates (pouce opposable, vision binoculaire en relief)`,
        `  - Famille : Hominidés (bipédie permanente, station debout)`,
        `  - Genre : Homo (gros cerveau, fabrication d'outils complexes)`,
        `  - Espèce : Homo sapiens (l'Homme moderne pensant)`
      ]
    },
    {
      title: 'IV. LES CRITÈRES DISTINCTIFS POUR SÉPARER ANIMAUX ET VÉGÉTAUX',
      content: [
        `Tableau de comparaison cellulaire, nutritionnelle et fonctionnelle entre les deux grands règnes pluricellulaires :`,
        `• Structure cellulaire : Animal = Absence de paroi rigide et absence de chloroplastes | Végétal = Présence d'une paroi cellulosique et de chloroplastes à chlorophylle.`,
        `• Mode de nutrition : Animal = Hétérotrophe (ingestion de matière organique préexistante) | Végétal = Autotrophe (photosynthèse à partir d'eau, CO₂ et sels minéraux).`,
        `• Déplacement actif : Animal = Oui (muscles, locomotion volontaire dans l'environnement) | Végétal = Non (organisme fixé au sol, pas de locomotion).`,
        `• Nature des réserves glucidiques : Animal = Glycogène (stocké dans le foie et les muscles) | Végétal = Amidon (stocké dans les graines, tubercules et racines).`
      ]
    },
    {
      title: 'V. L’ÉVOLUTION DES MÉTHODES DE CLASSIFICATION',
      content: [
        `• Autrefois, les naturalistes classaient souvent les organismes selon leur ressemblance morphologique superficielle ou leur milieu de vie (ex. ranger dauphins et baleines avec les requins sous le groupe des poissons).`,
        `• La systématique moderne s’appuie sur l’anatomie comparée, l’embryologie et surtout l'analyse génétique de l’ADN.`,
        `• Cette approche a permis de rétablir les véritables liens de parenté évolutive : les baleines et dauphins possèdent des poumons, allaitent leurs petits avec des mamelles et partagent des séquences génétiques avec les mammifères terrestres, révélant qu'ils sont des mammifères adaptés au milieu marin.`
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Les 5 règnes et la hiérarchie de classification du vivant',
    root: 'CLASSIFICATION DU VIVANT',
    branches: [
      {
        name: 'LES 5 GRANDS RÈGNES',
        subtitle: 'Organisation cellulaire et nutrition',
        items: [
          'Monères : Procaryotes sans noyau (Bactéries lactiques, cyanobactéries)',
          'Protistes (Amibe, Paramécie) & Champignons (Chitine, absorption, hétérotrophes)',
          'Végétaux (Pluricellulaires autotrophes chlorophylliens) & Animaux (Hétérotrophes mobiles)'
        ]
      },
      {
        name: 'HIÉRARCHIE TAXINOMIQUE',
        subtitle: 'Du plus général au plus précis',
        items: [
          '7 Rangs : Règne > Embranchement > Classe > Ordre > Famille > Genre > Espèce',
          'Nomenclature binomiale de Linné en latin : Genre + espèce (Homo sapiens)',
          'Critères de parenté : Anatomie, physiologie, ultrastructure cellulaire et ADN'
        ]
      },
      {
        name: 'ANIMAUX VS VÉGÉTAUX',
        subtitle: 'Critères diagnostiques',
        items: [
          'Cellule : Paroi cellulosique + chloroplaste (Végétal) vs Membrane souple (Animal)',
          'Nutrition & Mobilité : Autotrophie & fixé (Végétal) vs Hétérotrophie & mobile (Animal)',
          "Réserves d'énergie : Amidon chez les plantes vs Glycogène chez les animaux"
        ]
      }
    ]
  },
  conclusion: `La classification permet de mettre de l’ordre dans la diversité du vivant. Elle regroupe les êtres vivants en 5 grands règnes et en plusieurs niveaux hiérarchiques. Chaque espèce porte un nom scientifique unique qui indique sa place dans cette classification. Comprendre la classification, c’est comprendre l’histoire et les liens entre tous les êtres vivants.`,
  fullText: `LEÇON 11 : LA CLASSIFICATION DES ÊTRES VIVANTS

INTRODUCTION
Sur Terre, on estime qu’il existe plusieurs millions d’espèces vivantes. Pour mieux les étudier et les comprendre, les scientifiques ont besoin de les ranger et de les nommer. C’est le rôle de la classification.  
Classifier, c’est regrouper les êtres vivants selon leurs ressemblances et leurs différences. La classification actuelle est basée sur l’évolution et les caractères communs.

                   [ LA CLASSIFICATION DES ÊTRES VIVANTS ]
                                       |
    +----------------------------------+----------------------------------+
    |                                                                     |
[ LES 5 GRANDS RÈGNES DU VIVANT ]                                 [ HIÉRARCHIE TAXINOMIQUE ]
    |                                                                     |
    +---> 1. Monères : Procaryotes unicellulaires sans noyau (Bactéries)  +---> RÈGNE (ex. Animal)
    |                                                                     |        |
    +---> 2. Protistes : Eucaryotes simples (Amibe, Paramécie)            +---> EMBRANCHEMENT (Vertébrés)
    |                                                                     |        |
    +---> 3. Champignons : Eucaryotes hétérotrophes à chitine (Levures)   +---> CLASSE (Mammifères)
    |                                                                     |        |
    +---> 4. Végétaux : Eucaryotes autotrophes chlorophylliens (Plantes)  +---> ORDRE (Primates)
    |                                                                     |        |
    +---> 5. Animaux : Eucaryotes hétérotrophes mobiles (Homme, Faune)    +---> FAMILLE (Hominidés)
                                                                          |        |
                                                                          +---> GENRE (Homo)
                                                                          |        |
                                                                          +---> ESPÈCE (Homo sapiens)

I. LES BASES DE LA CLASSIFICATION
1. Objectif de la classification
- Identifier un être vivant avec précision.
- Donner un nom scientifique unique à chaque espèce pour une communication universelle.
- Montrer les liens de parenté évolutifs entre les espèces vivantes.

2. La nomenclature binomiale
Proposée par Carl Linné au 18e siècle.  
Chaque espèce a un nom en latin composé de 2 mots : le Genre (avec majuscule) et l’espèce (en minuscules).  
Exemple : Homo sapiens pour l’homme, Mangifera indica pour le manguier.

3. Les critères de classification
On utilise des caractères anatomiques, physiologiques, cellulaires et aujourd’hui génétiques (ADN).  
Plus deux êtres vivants ont de caractères communs, plus ils sont proches.

II. LES GRANDS GROUPES D’ÊTRES VIVANTS
La classification actuelle reconnaît 5 grands règnes :

1. Le règne des Monères
Êtres unicellulaires procaryotes, sans noyau délimité.  
Exemple : bactéries, cyanobactéries.  
Mode de nutrition varié : autotrophe ou hétérotrophe.

2. Le règne des Protistes
Êtres unicellulaires ou pluricellulaires simples, eucaryotes (avec vrai noyau).  
Exemple : amibe, paramécie, algues unicellulaires.  
Vivent surtout dans l’eau et milieux humides.

3. Le règne des Champignons
Êtres eucaryotes, à paroi en chitine.  
Nutrition par absorption. Ne font pas de photosynthèse (hétérotrophes).  
Exemple : levure, moisissure, champignon de Paris.

4. Le règne des Végétaux ou Plantes
Êtres pluricellulaires, eucaryotes, autotrophes.  
Possèdent de la chlorophylle et une paroi en cellulose.  
Exemple : mousse, fougère, pin, manguier, baobab.

5. Le règne des Animaux
Êtres pluricellulaires, eucaryotes, hétérotrophes.  
Pas de paroi cellulaire, capables de se déplacer.  
Exemple : éponge, ver, insecte, poisson, oiseau, homme.

III. LES NIVEAUX DE CLASSIFICATION
Pour chaque espèce, on utilise une hiérarchie de 7 groupes principaux, du plus grand au plus petit :
Règne > Embranchement > Classe > Ordre > Famille > Genre > Espèce

Exemple avec l’homme :  
- Règne : Animal  
- Embranchement : Vertébrés  
- Classe : Mammifères  
- Ordre : Primates  
- Famille : Hominidés  
- Genre : Homo  
- Espèce : sapiens

IV. LES CRITÈRES POUR SÉPARER ANIMAUX ET VÉGÉTAUX
Critère       | Animal                            | Végétal
--------------+-----------------------------------+-----------------------------------
Cellule       | Pas de paroi, pas de chloroplaste | Paroi en cellulose, chloroplastes
Nutrition     | Hétérotrophe (ingestion)          | Autotrophe (photosynthèse)
Déplacement   | Oui (mobilité active)             | Non (fixé au sol)
Réserve       | Glycogène                         | Amidon

V. L’ÉVOLUTION DE LA CLASSIFICATION
Avant on classait selon l’apparence. Aujourd’hui on utilise aussi l’ADN.  
Cela permet de corriger certains groupes et de montrer les vraies relations de parenté.  
Exemple : les baleines sont classées avec les mammifères et non avec les poissons car elles ont des poumons, allaitent leurs petits et partagent le même ADN de base.

CONCLUSION
La classification permet de mettre de l’ordre dans la diversité du vivant. Elle regroupe les êtres vivants en 5 grands règnes et en plusieurs niveaux hiérarchiques. Chaque espèce porte un nom scientifique unique qui indique sa place dans cette classification. Comprendre la classification, c’est comprendre l’histoire et les liens entre tous les êtres vivants.`
};

export const LESSON_1_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-1',
  number: 'LEÇON 1',
  title: 'INTRODUCTION À LA PHONÉTIQUE – SONS ET LETTRES',
  subject: 'Français',
  classLevel: '6ème',
  introduction: `En français, ce que l’on écrit ne correspond pas toujours à ce que l’on prononce. Pour bien lire, écrire et s’exprimer, il est indispensable de comprendre la relation entre les signes visuels écrits (les lettres ou graphies) et les sons produits par la voix (les phonèmes). Cette première leçon pose les bases indispensables de la phonétique française.`,
  sections: [
    {
      title: "I. SITUATION D'OBSERVATION",
      content: [
        "Observez attentivement la phrase suivante écrite au tableau :",
        "« Le chef cherche son chat. »",
        "• Comptez le nombre de lettres écrites dans le mot « chat » : il y a 4 lettres (c, h, a, t).",
        "• Prononcez le mot « chat » à haute voix. Combien de sons entendez-vous ? On entend seulement 2 sons : le son [ʃ] (noté par l'association ch) et le son [a].",
        "• Constat fondamental : Il n'y a pas toujours égalité entre le nombre de lettres écrites et le nombre de sons entendus."
      ]
    },
    {
      title: 'II. LA DIFFÉRENCE ENTRE GRAPHIE (LETTRE) ET PHONÈME (SON)',
      content: [
        "En français, ce que l’on écrit ne correspond pas toujours directement à ce que l’on prononce."
      ],
      subsections: [
        {
          subtitle: '1. La graphie (ou lettre)',
          content: [
            "• C'est le signe visuel graphique que l'on écrit et que l'on lit sur la page.",
            "• L'alphabet français compte 26 lettres (6 voyelles graphiques : a, e, i, o, u, y et 20 consonnes graphiques)."
          ]
        },
        {
          subtitle: '2. Le phonème (ou son)',
          content: [
            "• C'est l'unité de son distinctive que l'oreille perçoit et que l'appareil vocal émet à l'oral.",
            "• La langue française compte 36 phonèmes fondamentaux.",
            "• Un même phonème peut s'écrire de multiples façons (ex: le son [o] dans auto, mot, eau, chapeau)."
          ]
        },
        {
          subtitle: "3. L'Alphabet Phonétique International (API)",
          content: [
            "• C'est un système de symboles universels rigoureux utilisé par les linguistes pour noter la prononciation exacte des mots dans toutes les langues du monde.",
            "• Règle de notation : Chaque symbole phonétique est obligatoirement écrit entre crochets [ ] (ex: [ʃ], [a], [o], [k], [ʁ])."
          ]
        }
      ]
    },
    {
      title: 'III. LES GRANDES CATÉGORIES DE PHONÈMES',
      content: [
        "Les 36 phonèmes de la langue française se divisent en trois groupes distincts :"
      ],
      subsections: [
        {
          subtitle: '1. Les voyelles (16 phonèmes)',
          content: [
            "• Sons produits par la libre vibration des cordes vocales sans que l'air soit bloqué dans la bouche ou la gorge.",
            "• Exemples oraux : [a] dans papa, [i] dans midi, [u] dans loup, [e] dans été.",
            "• Exemples nasaux (l'air passe par la bouche et le nez) : [ɑ̃] dans banc/maman, [ɔ̃] dans pont, [ɛ̃] dans matin/pain."
          ]
        },
        {
          subtitle: '2. Les consonnes (17 phonèmes)',
          content: [
            "• Sons produits lorsque le passage de l'air expulsé est partiellement ou totalement bloqué par la langue, les dents, les lèvres ou le palais.",
            "• Exemples : [p] dans pont, [t] dans table, [f] dans phare, [s] dans sac, [k] dans carotte ou chrono, [ʁ] dans rouge, [ʃ] dans chat."
          ]
        },
        {
          subtitle: '3. Les semi-voyelles ou semi-consonnes (3 phonèmes)',
          content: [
            "• Sons intermédiaires très brefs entre la voyelle et la consonne, toujours associés à une autre voyelle.",
            "• [j] (yod) : dans yeux, fille, soleil.",
            "• [w] (oué) : dans oiseau, oui, roi.",
            "• [ɥ] : dans nuit, huile, huit."
          ]
        }
      ]
    },
    {
      title: 'IV. TABLEAU DE CORRESPONDANCE ET PIÈGES COURANTS',
      content: [
        "Analyse comparative de mots illustrant les écarts entre l'écrit (lettres) et l'oral (sons) :",
        "• « Banc » : 4 lettres (b, a, n, c) ➔ 2 sons : [b] et [ɑ̃]. Explication : Le 'c' final est muet, et le groupe 'an' s'associe pour former 1 seul son nasal.",
        "• « Oiseau » : 6 lettres (o, i, s, e, a, u) ➔ 4 sons : [w], [a], [z], [o]. Explication : Le groupe 'oi' forme [wa], le 's' entre deux voyelles se prononce [z], et le trigramme 'eau' produit le son unique [o].",
        "• « Chrono » : 6 lettres (c, h, r, o, n, o) ➔ 5 sons : [k], [ʁ], [o], [n], [o]. Explication : Ici, le groupe 'ch' (d'origine grecque) se prononce [k] et non [ʃ]."
      ]
    },
    {
      title: "V. EXERCICES D'APPLICATION ET CORRIGÉS",
      content: [
        "Entraînements pratiques pour vérifier la maîtrise des graphies et phonèmes :"
      ],
      subsections: [
        {
          subtitle: 'Exercice 1 : Compter le nombre de lettres et le nombre de sons (phonèmes)',
          content: [
            "• Mot « Fille » : 5 lettres (f-i-l-l-e) ➔ 3 sons : [f], [i], [j]. Le 'e' final est muet et 'll' produit le son semi-voyelle [j].",
            "• Mot « Matin » : 5 lettres (m-a-t-i-n) ➔ 4 sons : [m], [a], [t], [ɛ̃]. Les lettres 'i' et 'n' forment la voyelle nasale unique [ɛ̃].",
            "• Mot « Taxe » : 4 lettres (t-a-x-e) ➔ 4 sons : [t], [a], [k], [s]. La lettre unique 'x' vaut ici 2 sons consécutifs [k]+[s], et le 'e' est muet."
          ]
        },
        {
          subtitle: 'Exercice 2 : Identifier le son identique malgré des orthographes différentes',
          content: [
            "• Série 1 : « eau », « chapeau », « auto », « mot » ➔ Son commun : le phonème [o] (graphies : eau, au, o, ot).",
            "• Série 2 : « poisson », « ciel », « leçon », « tasse » ➔ Son commun : le phonème [s] (graphies : ss, c, ç).",
            "• Série 3 : « phare », « fleur », « physique », « difficile » ➔ Son commun : le phonème [f] (graphies : ph, f, ff)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: "Schéma structural : Graphies (lettres) et Phonèmes (sons) en français",
    root: 'LA PHONÉTIQUE DU FRANÇAIS',
    branches: [
      {
        name: 'LA GRAPHIE (ÉCRIT)',
        subtitle: "26 lettres de l'alphabet",
        items: [
          '6 voyelles écrites (a, e, i, o, u, y)',
          '20 consonnes écrites (b, c, d, f, g...)',
          'Lettres muettes (banc, chat) et groupements (an, eau, ch)'
        ]
      },
      {
        name: 'LE PHONÈME (ORAL)',
        subtitle: '36 sons fondamentaux (API)',
        items: [
          '16 Voyelles : orales ([a], [i]) et nasales ([ɑ̃], [ɛ̃], [ɔ̃])',
          '17 Consonnes : air freiné ([p], [t], [f], [k], [ʃ])',
          '3 Semi-voyelles : [j] (fille), [w] (oiseau), [ɥ] (nuit)'
        ]
      },
      {
        name: 'APPLICATION & PIÈGES',
        subtitle: 'Décalages fréquents écrit/oral',
        items: [
          '1 son = plusieurs lettres : « chapeau » ➔ son [o]',
          '1 lettre = 2 sons : « taxe » ➔ [k] + [s]',
          "Notations exactes entre crochets de l'API [ ]"
        ]
      }
    ]
  },
  conclusion: `La phonétique permet de dissocier ce que l'on voit (les 26 lettres de l'alphabet) de ce que l'on entend (les 36 sons du français notés par l'API). Maîtriser cette distinction permet d'éviter les pièges de l'orthographe, d'améliorer sa prononciation et de réussir la lecture et la dictée.`,
  fullText: `LEÇON 1 : INTRODUCTION À LA PHONÉTIQUE – SONS ET LETTRES

INTRODUCTION
En français, ce que l’on écrit ne correspond pas toujours à ce que l’on prononce. Pour bien lire, écrire et s’exprimer, il est indispensable de comprendre la relation entre les signes visuels écrits (les lettres ou graphies) et les sons produits par la voix (les phonèmes).

                   [ LA PHONÉTIQUE FRANÇAISE : SONS ET LETTRES ]
                                         |
         +-------------------------------+-------------------------------+
         |                                                               |
  [ LA GRAPHIE (L'ÉCRIT) ]                                    [ LE PHONÈME (L'ORAL) ]
  • 26 lettres dans l'alphabet                                • 36 sons fondamentaux en français
  • Signes visuels écrits                                     • Notés entre crochets de l'API : [ ]
         |                                                               |
         +---> 6 voyelles écrites (a, e, i, o, u, y)                  +---> 16 Voyelles :
         |                                                            |     • Orales : [a], [i], [u], [o]...
         +---> 20 consonnes écrites (b, c, d, f...)                   |     • Nasales : [ɑ̃] (an), [ɛ̃] (in), [ɔ̃] (on)
         |                                                            |
         +---> Digrammes & lettres muettes :                          +---> 17 Consonnes :
               • « chat » : 4 lettres ➔ 2 sons [ʃ] et [a]                   • Blocage de l'air ([p], [t], [k], [f], [s])
               • « banc » : 4 lettres ➔ 2 sons [b] et [ɑ̃]
               • « oiseau » : 6 lettres ➔ 4 sons [w][a][z][o]         +---> 3 Semi-voyelles :
                                                                            • [j] (fille, yeux), [w] (oui), [ɥ] (nuit)

I. SITUATION D'OBSERVATION
Observez attentivement la phrase suivante écrite au tableau :
« Le chef cherche son chat. »
• Comptez le nombre de lettres écrites dans le mot « chat ». (Il y a 4 lettres : c, h, a, t).
• Prononcez le mot « chat » à haute voix. Combien de sons entendez-vous ? (On entend 2 sons : le son [ʃ] et le son [a]).

II. LA DIFFÉRENCE ENTRE GRAPHIE (LETTRE) ET PHONÈME (SON)
En français, ce que l'on écrit ne correspond pas toujours à ce que l'on prononce.
• La graphie (ou lettre) : C'est le signe visuel que l'on écrit. L'alphabet français compte 26 lettres.
• Le phonème (ou son) : C'est l'unité de son que l'on entend à l'oral. La langue française compte 36 phonèmes fondamentaux.
• L'Alphabet Phonétique International (API) : C'est un système de symboles universels utilisé pour noter la prononciation exacte des mots. Chaque symbole est écrit entre crochets [ ].

III. LES GRANDES CATÉGORIES DE PHONÈMES
Les 36 phonèmes du français se divisent en trois groupes distincts :
• Les voyelles (16 phonèmes) : Sons produits par la vibration des cordes vocales sans que l'air soit bloqué (ex: [a] dans papa, [i] dans midi).
• Les consonnes (17 phonèmes) : Sons produits lorsque le passage de l'air est partiellement ou totalement bloqué par la langue, les dents ou les lèvres (ex: [p] dans pont, [f] dans phare).
• Les semi-voyelles ou semi-consonnes (3 phonèmes) : Sons intermédiaires entre la voyelle et la consonne (ex: [j] dans yeux, [w] dans oiseau, [ɥ] dans nuit).

IV. TABLEAU DE CORRESPONDANCE ET PIÈGES COURANTS
Mot écrit | Nombre de lettres       | Nombre de sons (phonèmes)      | Explication
----------+-------------------------+--------------------------------+---------------------------------------------
Banc      | 4 lettres (b, a, n, c)  | 2 sons : [b] et [ɑ̃]            | Le c est muet, an forme 1 seul son nasal.
Oiseau    | 6 lettres (o, i, s, e..)| 4 sons : [w], [a], [z], [o]    | Les groupes de lettres créent de nouveaux sons.
Chrono    | 6 lettres (c, h, r, o..)| 5 sons : [k], [ʁ], [o], [n], [o]| Ici, ch se prononce [k] et non [ʃ].

V. EXERCICES D'APPLICATION
Exercice 1 :
Pour chacun des mots suivants, comptez le nombre de lettres et le nombre de sons (phonèmes) :
• Fille : 5 lettres (f-i-l-l-e) ➔ 3 sons ([f], [i], [j]).
• Matin : 5 lettres (m-a-t-i-n) ➔ 4 sons ([m], [a], [t], [ɛ̃]).
• Taxe : 4 lettres (t-a-x-e) ➔ 4 sons ([t], [a], [k], [s]).

Exercice 2 :
Trouvez le point commun phonétique (le son identique) entre les mots suivants malgré leur orthographe différente :
• « eau », « chapeau », « auto », « mot » ➔ Le son [o]
• « poisson », « ciel », « leçon », « tasse » ➔ Le son [s]
• « phare », « fleur », « physique », « difficile » ➔ Le son [f]

CONCLUSION
La phonétique permet de dissocier ce que l'on voit (les 26 lettres de l'alphabet) de ce que l'on entend (les 36 phonèmes). Maîtriser cette distinction et les symboles de l'API permet d'éviter les pièges de l'orthographe française, d'améliorer sa prononciation et de réussir la lecture à haute voix comme les dictées.`
};

export const LESSON_2_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LES VOYELLES ORALES ET NASALES',
  subject: 'Français',
  classLevel: '6ème',
  introduction: "Dans la langue française, les voyelles constituent le noyau de toute syllabe. Selon le trajet suivi par l'air lors de la phonation, les voyelles se divisent en deux grandes familles physiologiques : les voyelles orales (où l'air expulsé s'échappe exclusivement par la bouche) et les voyelles nasales (où le voile du palais s'abaisse pour laisser passer une partie de l'air par le nez).",
  sections: [
    {
      title: "I. SITUATION D'OBSERVATION",
      content: [
        "Prononcez à haute voix les deux listes de mots suivantes :",
        "• Liste A : Matin – Pain – Vent – Pont",
        "• Liste B : Matière – Pape – Vache – Porte",
        "Observez attentivement le passage de l'air :",
        "• Dans la Liste A, l'air sort simultanément par la bouche et par le nez (sons nasaux). Si l'on se pince le nez en les prononçant, le son est nettement déformé ou bloqué.",
        "• Dans la Liste B, l'air sort uniquement et librement par la bouche (sons oraux). Se pincer le nez n'affecte pas leur émission sonore."
      ]
    },
    {
      title: 'II. LES VOYELLES ORALES (12 PHONÈMES)',
      content: [
        "Une voyelle est dite orale lorsque le voile du palais est relevé contre la paroi du pharynx, ce qui obstrue l'accès aux fosses nasales et oblige l'air vibratoire à s'échapper exclusivement par la cavité buccale (la bouche).",
        "La langue française compte 12 voyelles orales distinctes répertoriées par l'API :",
        "• [a] : papa, sac, table",
        "• [i] : midi, stylo, livre",
        "• [u] : loup, genou, tour",
        "• [e] (é fermé) : café, aller, chez, nez",
        "• [ɛ] (è ouvert) : père, fête, mer, terre",
        "• [o] (o fermé) : moto, beau, dos, saut",
        "• [ɔ] (o ouvert) : porte, robe, sol",
        "• [y] : rue, tissu, lune",
        "• [ø] (eu fermé) : deux, peu, feu",
        "• [œ] (eu ouvert) : peur, fleur, sœur",
        "• [ə] (e muet ou caduc) : le, petit, fenêtre, samedi",
        "• [ɑ] (a postérieur, plus grave et plus rare) : pâte, âne"
      ]
    },
    {
      title: 'III. LES VOYELLES NASALES (4 PHONÈMES)',
      content: [
        "Une voyelle est dite nasale lorsque le voile du palais est abaissé, permettant à une partie du souffle d'air pulmonaire de traverser librement les fosses nasales (le nez) en même temps que la bouche.",
        "Le français compte 4 voyelles nasales fondamentales :",
        "• [ɛ̃] : brin, train, timbre, main, faim, peinture",
        "• [ɑ̃] : banc, enfant, temps, vent, champ",
        "• [ɔ̃] : rond, pantalon, ombre, pont, maison",
        "• [œ̃] : un, parfum, brun, humble (souvent confondu avec [ɛ̃] dans la prononciation parisienne moderne, mais distinct dans la diction soignée)."
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS",
      content: [
        "Exercice pratique : Classez les mots suivants dans un tableau selon que la voyelle principale soulignée est orale ou nasale : Chambre, Plein, Mur, Son, Balle, Lundi."
      ],
      subsections: [
        {
          subtitle: 'Tableau de classement et analyse phonétique',
          content: [
            "• « Chambre » (voyelle écrite 'am') ➔ VOYELLE NASALE : le phonème [ɑ̃]. L'air s'échappe par la bouche et le nez.",
            "• « Plein » (voyelle écrite 'ein') ➔ VOYELLE NASALE : le phonème [ɛ̃].",
            "• « Mur » (voyelle écrite 'u') ➔ VOYELLE ORALE : le phonème [y]. Le voile du palais est relevé, l'air sort par la bouche.",
            "• « Son » (voyelle écrite 'on') ➔ VOYELLE NASALE : le phonème [ɔ̃].",
            "• « Balle » (voyelle écrite 'a') ➔ VOYELLE ORALE : le phonème [a].",
            "• « Lundi » (voyelle écrite 'un') ➔ VOYELLE NASALE : le phonème [œ̃] (ou [ɛ̃])."
          ]
        },
        {
          subtitle: 'Astuce pour la dictée et la lecture',
          content: [
            "• Dès qu'une voyelle est immédiatement suivie d'une consonne nasale (m ou n) dans la même syllabe (ex: vent, faim, pont), elle devient une voyelle nasale.",
            "• Si le m ou le n est suivi d'une voyelle (ex: m-a-t-i-n-ée, p-a-p-e), la voyelle redevient orale !"
          ]
        }
      ]
    }
  ],
  diagram: {
    title: "Schéma structural : Voyelles Orales vs Voyelles Nasales",
    root: 'LES 16 VOYELLES DU FRANÇAIS',
    branches: [
      {
        name: 'VOYELLES ORALES (12 sons)',
        subtitle: 'Voile du palais RELEVÉ ➔ Air par la bouche seule',
        items: [
          '[a] (papa), [i] (midi), [u] (loup), [y] (rue)',
          '[e] (café) / [ɛ] (père), [o] (moto) / [ɔ] (porte)',
          '[ø] (deux) / [œ] (fleur), [ə] (le), [ɑ] (pâte)'
        ]
      },
      {
        name: 'VOYELLES NASALES (4 sons)',
        subtitle: 'Voile du palais ABAISSÉ ➔ Air par bouche + nez',
        items: [
          '[ɛ̃] (brin, train, pain, matin)',
          '[ɑ̃] (banc, enfant, vent, temps)',
          '[ɔ̃] (rond, pont, pantalon, ombre)',
          '[œ̃] (un, parfum, brun)'
        ]
      },
      {
        name: 'TEST PRATIQUE & RÈGLE',
        subtitle: 'Reconnaître le type de voyelle',
        items: [
          'Test du nez pincé : bloque ou altère les nasales',
          'Suivie de m/n en fin de syllabe = nasale (banc, pont)',
          'Suivie de voyelle = redevient orale (fine, cousine)'
        ]
      }
    ]
  },
  conclusion: "La distinction entre voyelles orales (12 phonèmes) et voyelles nasales (4 phonèmes) repose sur le rôle moteur du voile du palais. Cette maîtrise physiologique et phonétique est la clé d'une prononciation limpide et d'une orthographe maîtrisée en 6ème.",
  fullText: `LEÇON 2 : LES VOYELLES ORALES ET NASALES

INTRODUCTION
Dans la langue française, les voyelles constituent le noyau de toute syllabe. Selon le trajet suivi par l'air lors de la phonation, les voyelles se divisent en deux grandes familles physiologiques : les voyelles orales et les voyelles nasales.

                     [ LES 16 VOYELLES DU FRANÇAIS ]
                                    |
         +--------------------------+--------------------------+
         |                                                     |
  [ VOYELLES ORALES (12 sons) ]                         [ VOYELLES NASALES (4 sons) ]
  • Voile du palais RELEVÉ                              • Voile du palais ABAISSÉ
  • L'air sort uniquement par la bouche                 • L'air sort par la bouche ET le nez
         |                                                     |
         +---> Voyelles de base :                              +---> [ɛ̃] : brin, train, pain, matin
         |     • [a] : papa, sac                               +---> [ɑ̃] : banc, vent, enfant, temps
         |     • [i] : midi, stylo                             +---> [ɔ̃] : rond, pont, pantalon
         |     • [u] : loup, genou                             +---> [œ̃] : un, parfum, brun
         |     • [y] : rue, tissu
         |
         +---> Voyelles fermées / ouvertes :
         |     • [e] (café) / [ɛ] (père, fête)
         |     • [o] (moto) / [ɔ] (porte)
         |     • [ø] (deux) / [œ] (fleur)
         |     • [ə] (le, petit)
         |     • [ɑ] (pâte, âne)

I. SITUATION D'OBSERVATION
Prononcez à haute voix les deux listes de mots suivantes :
• Liste A : Matin – Pain – Vent – Pont
• Liste B : Matière – Pape – Vache – Porte
Observez attentivement le passage de l'air :
Dans la Liste A, l'air sort par la bouche et par le nez (sons nasaux).
Dans la Liste B, l'air sort uniquement par la bouche (sons oraux).

II. LES VOYELLES ORALES
Une voyelle est dite orale lorsque le voile du palais est relevé, ce qui oblige l'air vibratoire à s'échapper exclusivement par la cavité buccale (la bouche). Le français compte 12 voyelles orales :
• [a] : papa, sac
• [i] : midi, stylo
• [u] : loup, genou
• [e] (é fermé) : café, aller, chez
• [ɛ] (è ouvert) : père, fête, mer
• [o] (o fermé) : moto, beau, dos
• [ɔ] (o ouvert) : porte, robe
• [y] : rue, tissu
• [ø] (eu fermé) : deux, peu
• [œ] (eu ouvert) : peur, fleur
• [ə] (e muet ou caduc) : le, petit, fenêtre
• [ɑ] (a postérieur, plus rare) : pâte

III. LES VOYELLES NASALES
Une voyelle est dite nasale lorsque le voile du palais est abaissé, permettant à une partie de l'air de passer par les fosses nasales (le nez). Le français compte 4 voyelles nasales principales :
• [ɛ̃] : brin, train, timbre, main
• [ɑ̃] : banc, enfant, temps
• [ɔ̃] : rond, pantalon, ombre
• [œ̃] : un, parfum (souvent confondu avec [ɛ̃] dans la prononciation courante)

IV. EXERCICES D'APPLICATION (LEÇON 2)
Exercice : Classez les mots suivants dans un tableau selon que la voyelle soulignée est orale ou nasale :
Chambre, Plein, Mur, Son, Balle, Lundi.

Corrigé détaillé :
1. Chambre (am) ➔ Voyelle nasale : le son [ɑ̃]
2. Plein (ein)   ➔ Voyelle nasale : le son [ɛ̃]
3. Mur (u)       ➔ Voyelle orale : le son [y]
4. Son (on)      ➔ Voyelle nasale : le son [ɔ̃]
5. Balle (a)     ➔ Voyelle orale : le son [a]
6. Lundi (un)    ➔ Voyelle nasale : le son [œ̃] (ou [ɛ̃])

CONCLUSION
La distinction entre voyelles orales (12 phonèmes) et voyelles nasales (4 phonèmes) repose sur le mécanisme du voile du palais. Elle est essentielle pour l'orthographe et la prononciation juste.`
};

export const LESSON_3_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-3',
  number: 'LEÇON 3',
  title: 'LES CONSONNES ET LES SEMI-VOYELLES (SEMI-CONSONNES)',
  subject: 'Français',
  classLevel: '6ème',
  introduction: "Contrairement aux voyelles émises par libre passage de l'air, la prononciation d'une consonne rencontre toujours un obstacle sur le flux d'air (lèvres, dents, langue, palais). La langue française compte 17 consonnes réparties entre sourdes, sonores, nasales et liquides, ainsi que 3 semi-voyelles (ou semi-consonnes) qui font le pont entre consonnes et voyelles.",
  sections: [
    {
      title: "I. SITUATION D'OBSERVATION",
      content: [
        "Prononcez les sons de ces deux lettres isolées : [p] et [b].",
        "• Posez deux doigts sur votre gorge (au niveau de la trachée et des cordes vocales) :",
        "• Pour [p], les cordes vocales ne vibrent pas : c'est une consonne sourde.",
        "• Pour [b], les cordes vocales vibrent sous les doigts : c'est une consonne sonore."
      ]
    },
    {
      title: 'II. LES CONSONNES (17 PHONÈMES)',
      content: [
        "Contrairement aux voyelles, l'émission d'une consonne rencontre un obstacle partiel ou complet sur le passage de l'air (lèvres, dents, langue, palais).",
        "On classe les 17 consonnes selon deux critères phonétiques majeurs :"
      ],
      subsections: [
        {
          subtitle: '1. Les consonnes sourdes et sonores',
          content: [
            "• Sourdes (absence de vibration des cordes vocales) : [p] (pont), [t] (terre), [k] (cou), [f] (feu), [s] (sac), [ʃ] (chat).",
            "• Sonores (vibration des cordes vocales) : [b] (bon), [d] (dent), [g] (gare), [v] (ville), [z] (zèbre), [ʒ] (jour).",
            "• Remarque : Ces consonnes fonctionnent par paires articulatoires (ex: [p]/[b], [t]/[d], [k]/[g], [f]/[v], [s]/[z], [ʃ]/[ʒ])."
          ]
        },
        {
          subtitle: '2. Les consonnes nasales et liquides',
          content: [
            "• Nasales (l'air s'échappe simultanément par les cavités nasales) : [m] (maman), [n] (nid), [ɲ] (pagne, montagne), [ŋ] (parking, camping).",
            "• Liquides / Continues (l'air s'écoule de manière fluide et continue sans occlusion brusque) : [l] (lune), [ʁ] (rue, rouge)."
          ]
        }
      ]
    },
    {
      title: 'III. LES SEMI-VOYELLES OU SEMI-CONSONNES (3 PHONÈMES)',
      content: [
        "Ce sont des sons intermédiaires très particuliers. Ils fonctionnent dans la syllabe comme des consonnes, mais ils possèdent le timbre acoustique d'une voyelle. Ils ne peuvent jamais former une syllabe à eux seuls et s'articulent toujours en combinaison avec une autre voyelle.",
        "Le français compte 3 semi-voyelles fondamentales :",
        "• [j] (Yod) : Correspond au son 'i' très bref. Exemples : pied, fille, yeux, soleil, grenouille.",
        "• [w] : Correspond au son 'ou' très bref. Exemples : oui, moi, watara, oiseau, loi.",
        "• [ɥ] : Correspond au son 'u' très bref. Exemples : lui, nuit, fruit, huit, cuisine."
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS",
      content: [
        "Exercice : Identifiez le symbole de la semi-voyelle présente dans chacun des mots suivants :",
        "1. Cahier",
        "2. Cuisine",
        "3. Oiseau"
      ],
      subsections: [
        {
          subtitle: 'Corrigé détaillé et analyse phonétique',
          content: [
            "1. « Cahier » ➔ Semi-voyelle [j] (Yod) : dans la syllabe « -hier », la lettre 'i' se prononce comme une semi-voyelle [j] liée au son [e] : [kaje].",
            "2. « Cuisine » ➔ Semi-voyelle [ɥ] : la lettre 'u' devant le 'i' devient la semi-voyelle [ɥ] : [kɥizin].",
            "3. « Oiseau » ➔ Semi-voyelle [w] : le groupe écrit 'oi' se transcrit phonétiquement par la semi-voyelle [w] suivie du [a] : [wazo]."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: "Schéma structural : Consonnes (17 sons) et Semi-voyelles (3 sons)",
    root: 'CONSONNES & SEMI-VOYELLES',
    branches: [
      {
        name: 'CONSONNES ORALES (12 sons)',
        subtitle: 'Paires sourdes et sonores',
        items: [
          'Sourdes (sans vibration) : [p], [t], [k], [f], [s], [ʃ]',
          'Sonores (avec vibration) : [b], [d], [g], [v], [z], [ʒ]',
          'Obstacle mécanique formé par lèvres, dents, langue'
        ]
      },
      {
        name: 'NASALES & LIQUIDES (5 sons)',
        subtitle: 'Résonance nasale et fluidité',
        items: [
          'Nasales (air par le nez) : [m] (maman), [n] (nid), [ɲ] (pagne), [ŋ] (parking)',
          'Liquides (flux continu) : [l] (lune), [ʁ] (rue)'
        ]
      },
      {
        name: 'SEMI-VOYELLES (3 sons)',
        subtitle: 'Sons intermédiaires articulés avec voyelle',
        items: [
          '[j] (Yod) : fille, pied, yeux',
          '[w] (son ou) : oui, oiseau, moi',
          '[ɥ] (son u) : nuit, lui, cuisine'
        ]
      }
    ]
  },
  conclusion: "Les 17 consonnes (sourdes, sonores, nasales, liquides) et les 3 semi-voyelles complètent l'inventaire des 36 phonèmes de la langue française. Savoir observer la vibration des cordes vocales et repérer les semi-voyelles garantit une parfaite maîtrise de l'oral et de l'écrit.",
  fullText: `LEÇON 3 : LES CONSONNES ET LES SEMI-VOYELLES (SEMI-CONSONNES)

INTRODUCTION
Contrairement aux voyelles, l'émission d'une consonne rencontre un obstacle sur le passage de l'air. La langue française compte 17 consonnes et 3 semi-voyelles (semi-consonnes).

                   [ LES CONSONNES (17) ET SEMI-VOYELLES (3) ]
                                        |
         +------------------------------+------------------------------+
         |                              |                              |
  [ CONSONNES ORALES (12) ]      [ NASALES & LIQUIDES (5) ]     [ SEMI-VOYELLES (3) ]
  • Obstacle dans la bouche      • Nasales : [m], [n],          • Sons intermédiaires
  • 6 sourdes (sans vibration) :   [ɲ] (pagne), [ŋ] (parking)   • [j] (Yod) : fille, pied
    [p], [t], [k], [f], [s], [ʃ] • Liquides : [l], [ʁ]          • [w] : oui, oiseau, moi
  • 6 sonores (vibration) :                                     • [ɥ] : lui, nuit, cuisine
    [b], [d], [g], [v], [z], [ʒ]

I. SITUATION D'OBSERVATION
Prononcez les sons de ces deux lettres isolées : [p] et [b].
• Posez deux doigts sur votre gorge (au niveau des cordes vocales).
• Pour [p], les cordes vocales ne vibrent pas (consonne sourde).
• Pour [b], les cordes vocales vibrent (consonne sonore).

II. LES CONSONNES (17 PHONÈMES)
Contrairement aux voyelles, l'émission d'une consonne rencontre un obstacle sur le passage de l'air (lèvres, dents, langue, palais). On les classe selon deux critères majeurs :

1. Les consonnes sourdes et sonores :
• Sourdes (pas de vibration) : [p] (pont), [t] (terre), [k] (cou), [f] (feu), [s] (sac), [ʃ] (chat).
• Sonores (vibration) : [b] (bon), [d] (dent), [g] (gare), [v] (ville), [z] (zèbre), [ʒ] (jour).

2. Les consonnes nasales et liquides :
• Nasales : [m] (maman), [n] (nid), [ɲ] (pagne), [ŋ] (parking).
• Liquides / Continues : [l] (lune), [ʁ] (rue).

III. LES SEMI-VOYELLES OU SEMI-CONSONNES (3 PHONÈMES)
Ce sont des sons intermédiaires. Ils fonctionnent comme des consonnes mais ont le timbre d'une voyelle. Ils s'articulent toujours avec une autre voyelle :
• [j] (Yod) : Correspond au son i. Exemples : pied, fille, yeux.
• [w] : Correspond au son ou. Exemples : oui, moi, watara.
• [ɥ] : Correspond au son u. Exemples : lui, nuit, fruit.

IV. EXERCICES D'APPLICATION (LEÇON 3)
Exercice : Identifiez le symbole de la semi-voyelle présente dans chacun des mots suivants :
1. Cahier
2. Cuisine
3. Oiseau

Corrigé détaillé :
1. Cahier  ➔ Semi-voyelle [j] (dans la syllabe -hier)
2. Cuisine ➔ Semi-voyelle [ɥ] (dans la syllabe cui-)
3. Oiseau  ➔ Semi-voyelle [w] (dans le groupe oi-)

CONCLUSION
L'étude des 17 consonnes et des 3 semi-voyelles permet de maîtriser l'ensemble des 36 sons du français pour réussir à la fois la prononciation, la lecture et l'orthographe.`
};

export const LESSON_6_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LE SUJET DU VERBE (GRAMMAIRE)',
  subject: 'Français',
  classLevel: '6ème',
  introduction: "Le sujet est la fonction essentielle qui régit l'accord du verbe dans la phrase. Qu'il accomplisse l'action, la subisse ou qu'il soit dans l'état exprimé par le verbe, le sujet dicte la personne grammaticale et le nombre du verbe conjugué.",
  sections: [
    {
      title: "I. SITUATION D'OBSERVATION",
      content: [
        "Lisez attentivement les phrases suivantes :",
        "• Le vieux pêcheur répare son filet au bord du fleuve.",
        "• Chaque soir, ils révisent leurs leçons.",
        "• Marcher est excellent pour la santé.",
        "Dans chaque phrase, un mot ou groupe de mots commande le verbe :",
        "- 'Le vieux pêcheur' commande 'répare' (3e personne du singulier).",
        "- 'ils' commande 'révisent' (3e personne du pluriel).",
        "- 'Marcher' commande 'est' (3e personne du singulier)."
      ]
    },
    {
      title: 'II. DÉFINITION ET RÔLE DU SUJET',
      content: [
        "Le sujet est l'élément capital de la phrase qui fait l'action exprimée par le verbe, ou qui subit cette action, ou qui est dans l'état décrit par le verbe.",
        "• Règle d'or : C'est le sujet qui commande obligatoirement l'accord du verbe en personne (1ère, 2ème, 3ème) et en nombre (singulier, pluriel).",
        "Exemple : Si le sujet passe au pluriel, le verbe change immédiatement de forme : 'Le pêcheur répare' ➔ 'Les pêcheurs réparent'."
      ]
    },
    {
      title: 'III. COMMENT IDENTIFIER LE SUJET ?',
      content: [
        "Pour repérer avec certitude le sujet d'un verbe conjugué, on procède en posant une question ciblée juste avant le verbe :",
        "• « Qui est-ce qui ? » (pour les êtres animés, personnes ou animaux) + verbe ?",
        "• « Qu'est-ce qui ? » (pour les choses, idées ou actions) + verbe ?",
        "Application aux phrases observées :",
        "• Exemple 1 : « Qui est-ce qui répare son filet ? » ➔ Réponse : Le vieux pêcheur (Sujet).",
        "• Exemple 2 : « Qu'est-ce qui est excellent pour la santé ? » ➔ Réponse : Marcher (Sujet).",
        "Astuce de contrôle : On peut aussi encadrer le sujet par la formule « C'est... qui » ou « Ce sont... qui » (Ex : 'C'est le vieux pêcheur qui répare son filet')."
      ]
    },
    {
      title: 'IV. LES CLASSES GRAMMATICALES DU SUJET',
      content: [
        "Le sujet peut appartenir à différentes catégories ou classes grammaticales (natures) :",
        "• Un groupe nominal (GN) : « Le jeune élève écoute attentivement. »",
        "• Un nom propre : « Fatou range soigneusement ses affaires. »",
        "• Un pronom personnel (je, tu, il, elle, on, nous, vous, ils, elles) : « Ils arrivent à l'école. »",
        "• Un verbe à l'infinitif : « Étudier demande de la persévérance et des efforts. »",
        "• Un pronom démonstratif, possessif ou relatif : « Celui-ci réussira. / Le mien fonctionne. / La fille qui chante est ma sœur. »"
      ]
    },
    {
      title: "V. EXERCICE D'APPLICATION ET CORRIGÉS",
      content: [
        "Exercice : Soulignez le sujet de chaque verbe conjugué et donnez sa nature exacte (nom propre, groupe nominal, pronom personnel, verbe à l'infinitif) :",
        "1. Ousmane achète un dictionnaire.",
        "2. La grande pirogue affronte les vagues.",
        "3. Elle écrit une lettre à son amie."
      ],
      subsections: [
        {
          subtitle: 'Corrigé détaillé et analyse grammaticale',
          content: [
            "1. « Ousmane achète un dictionnaire. »",
            "   • Verbe conjugué : 'achète'",
            "   • Question : Qui est-ce qui achète ? ➔ Ousmane",
            "   • Sujet : Ousmane | Nature : Nom propre (singulier).",
            "2. « La grande pirogue affronte les vagues. »",
            "   • Verbe conjugué : 'affronte'",
            "   • Question : Qu'est-ce qui affronte ? ➔ La grande pirogue",
            "   • Sujet : La grande pirogue | Nature : Groupe nominal (GN) formé d'un déterminant, d'un adjectif et d'un nom chef de groupe.",
            "3. « Elle écrit une lettre à son amie. »",
            "   • Verbe conjugué : 'écrit'",
            "   • Question : Qui est-ce qui écrit ? ➔ Elle",
            "   • Sujet : Elle | Nature : Pronom personnel (3e personne du singulier, féminin)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Le Sujet du Verbe',
    root: 'LE SUJET DU VERBE',
    branches: [
      {
        name: 'RÔLE & ACCORD',
        subtitle: "Donneur d'accord au verbe",
        items: [
          "Fait l'action, la subit ou vit l'état",
          'Commande personne (1re, 2e, 3e)',
          'Commande nombre (singulier, pluriel)'
        ]
      },
      {
        name: 'IDENTIFICATION',
        subtitle: 'Questions clés et encadrement',
        items: [
          '« Qui est-ce qui ? » + verbe (personnes)',
          "« Qu'est-ce qui ? » + verbe (choses)",
          'Encadrement : « C\'est... qui »'
        ]
      },
      {
        name: 'CLASSES GRAMMATICALES',
        subtitle: 'Diversité de la nature du sujet',
        items: [
          'Groupe nominal (GN) : Le vieux pêcheur',
          'Nom propre : Fatou, Ousmane',
          'Pronom : Il, Elle, Ils, Chacun',
          "Verbe à l'infinitif : Marcher, Étudier"
        ]
      }
    ]
  },
  conclusion: "Le sujet est la cheville ouvrière de la phrase : en trouvant toujours 'qui est-ce qui' ou 'qu'est-ce qui' fait l'action, l'élève de 6ème identifie sans faille le sujet et accorde impeccablement la terminaison du verbe.",
  fullText: `LEÇON 6 : LE SUJET DU VERBE (GRAMMAIRE)

INTRODUCTION
Le sujet est l'élément qui commande obligatoirement l'accord du verbe dans la phrase en personne et en nombre.

                     [ LE SUJET DU VERBE ]
                               |
         +---------------------+---------------------+
         |                     |                     |
  [ RÔLE & ACCORD ]      [ COMMENT LE TROUVER ]   [ NATURES DU SUJET ]
  • Commande le verbe    • « Qui est-ce qui ? »   • Nom propre (Fatou)
  • Accorde en personne    (personnes/animaux)    • Groupe nominal (Le vieux pêcheur)
    et en nombre         • « Qu'est-ce qui ? »    • Pronom (Ils, elle)
                           (choses/actions)       • Infinitif (Marcher)
                         • Test : « C'est... qui »

I. SITUATION D'OBSERVATION
Lisez les phrases suivantes :
• Le vieux pêcheur répare son filet au bord du fleuve.
• Chaque soir, ils révisent leurs leçons.
• Marcher est excellent pour la santé.

II. DÉFINITION ET RÔLE DU SUJET
Le sujet est l'élément de la phrase qui fait l'action exprimée par le verbe, ou qui subit cette action, ou qui est dans l'état décrit par le verbe.
• C'est le sujet qui commande l'accord du verbe en personne (1ère, 2ème, 3ème) et en nombre (singulier, pluriel).

III. COMMENT IDENTIFIER LE SUJET ?
Pour trouver le sujet d'un verbe, on pose la question : « Qui est-ce qui ? » (pour les personnes) ou « Qu'est-ce qui ? » (pour les choses) juste avant le verbe.
• Exemple 1 : Qui est-ce qui répare son filet ? → Le vieux pêcheur (Sujet).
• Exemple 2 : Qu'est-ce qui est excellent pour la santé ? → Marcher (Sujet).

IV. LES CLASSES GRAMMATICALES DU SUJET
Le sujet peut être de différentes natures :
• Un groupe nominal (GN) : Le jeune élève écoute.
• Un nom propre : Fatou range ses affaires.
• Un pronom personnel : Ils arrivent à l'école.
• Un verbe à l'infinitif : Étudier demande des efforts.

V. EXERCICE D'APPLICATION
Exercice : Soulignez le sujet de chaque verbe conjugué et donnez sa nature :
1. Ousmane achète un dictionnaire.
2. La grande pirogue affronte les vagues.
3. Elle écrit une lettre à son amie.

Corrigé :
1. Ousmane ➔ Sujet | Nature : Nom propre.
2. La grande pirogue ➔ Sujet | Nature : Groupe nominal (GN).
3. Elle ➔ Sujet | Nature : Pronom personnel.

CONCLUSION
L'identification du sujet permet de réussir tous les accords sujet-verbe en grammaire et en dictée.`
};

export const LESSON_7_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-7',
  number: 'LEÇON 7',
  title: "LE PRÉSENT DE L'INDICATIF DES VERBES DU 1ER ET 2ÈME GROUPE (CONJUGAISON)",
  subject: 'Français',
  classLevel: '6ème',
  introduction: "Le présent de l'indicatif est le temps de base de la communication quotidienne et de l'énonciation. Il permet d'exprimer des actions contemporaines du moment où l'on parle, des habitudes ancrées ou des vérités universelles, selon des règles de terminaisons régulières pour les 1er et 2ème groupes.",
  sections: [
    {
      title: "I. SITUATION D'OBSERVATION",
      content: [
        "Observez les verbes en gras dans le texte suivant :",
        "« Nous habitons à Dakar. Mon frère finit ses études cette année. »",
        "Analyse :",
        "• 'Habitons' est une forme du verbe habiter (verbe régulier du 1er groupe en -er).",
        "• 'Finit' est une forme du verbe finir (verbe régulier du 2ème groupe en -ir, dont le participe présent est en -issant).",
        "• Ces deux actions se déroulent au moment où le locuteur s'exprime : les verbes sont conjugués au présent de l'indicatif."
      ]
    },
    {
      title: "II. EMPLOI DU PRÉSENT DE L'INDICATIF",
      content: [
        "On emploie le présent de l'indicatif dans plusieurs situations fondamentales :",
        "• Une action présente (présent d'énonciation) : L'action se déroule exactement au moment où l'on parle. Exemple : « J'écris au tableau. » / « Le maître explique la règle. »",
        "• Une habitude (présent d'habitude ou de répétition) : L'action se répète de façon régulière. Exemple : « Chaque matin, le soleil se lève à l'est. » / « Chaque soir, nous révisons. »",
        "• Une vérité générale : Un fait scientifique, moral ou géographique qui est toujours vrai dans le temps. Exemple : « La Terre tourne autour du soleil. » / « L'eau bout à 100°C. »"
      ]
    },
    {
      title: 'III. FORMATION ET TERMINAISONS',
      content: [
        "La formation du présent de l'indicatif pour ces deux groupes suit une méthode systématique : Radical de l'infinitif + Terminaisons spécifiques du groupe."
      ],
      subsections: [
        {
          subtitle: '1. Les verbes du 1er groupe (-er, sauf aller)',
          content: [
            "On prend le radical de l'infinitif (on retire la terminaison -er) et on ajoute les terminaisons suivantes : -e, -es, -e, -ons, -ez, -ent.",
            "Exemple modèle : HABITER (Radical : habit-)",
            "• J'habite",
            "• Tu habites",
            "• Il / Elle / On habite",
            "• Nous habitons",
            "• Vous habitez",
            "• Ils / Elles habitent",
            "Attention : Les terminaisons -e, -es, -ent sont silencieuses (lettres muettes)."
          ]
        },
        {
          subtitle: '2. Les verbes du 2ème groupe (-ir, participe présent en -issant)',
          content: [
            "Pour appartenir au 2ème groupe, le verbe doit se terminer en -ir et faire son participe présent en -issant (ex: finir ➔ finissant, choisir ➔ choisissant).",
            "On prend le radical de l'infinitif (on retire -ir) et on ajoute les terminaisons suivantes : -is, -is, -it, -issons, -issez, -issent.",
            "Exemple modèle : FINIR (Radical : fin-)",
            "• Je finis",
            "• Tu finis",
            "• Il / Elle finit",
            "• Nous finissons",
            "• Vous finissez",
            "• Ils / Elles finissent"
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICE D'APPLICATION ET CORRIGÉS",
      content: [
        "Exercice : Conjuguez les verbes entre parenthèses au présent de l'indicatif :",
        "1. Vous (saluer) le directeur.",
        "2. Les enfants (grandir) rapidement.",
        "3. Tu (choisir) une belle couleur."
      ],
      subsections: [
        {
          subtitle: 'Corrigé détaillé et justification des terminaisons',
          content: [
            "1. « Vous saluez le directeur. »",
            "   • Verbe 'saluer' (1er groupe, radical salu-). Avec le pronom 'Vous', la terminaison est -ez ➔ saluez.",
            "2. « Les enfants grandissent rapidement. »",
            "   • Verbe 'grandir' (2ème groupe, faisant grandissant, radical grand-). Avec le sujet 'Les enfants' (3e pers. du pluriel = ils), la terminaison est -issent ➔ grandissent.",
            "3. « Tu choisis une belle couleur. »",
            "   • Verbe 'choisir' (2ème groupe, radical chois-). Avec la 2e personne du singulier 'Tu', la terminaison est -is ➔ choisis."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: "Schéma structural : Le Présent de l'Indicatif (1er et 2ème Groupe)",
    root: "PRÉSENT DE L'INDICATIF",
    branches: [
      {
        name: "VALEURS D'EMPLOI",
        subtitle: 'Quand utiliser le présent ?',
        items: [
          "Présent immédiat (J'écris au tableau)",
          'Habitude répétée (Chaque matin, il part)',
          'Vérité générale (La Terre tourne)'
        ]
      },
      {
        name: '1ER GROUPE (-ER)',
        subtitle: 'Radical + [-e, -es, -e, -ons, -ez, -ent]',
        items: [
          'Je chante, Tu chantes, Il chante',
          'Nous chantons, Vous chantez, Ils chantent',
          "Terminaisons -e, -es, -ent muettes à l'oral"
        ]
      },
      {
        name: '2ÈME GROUPE (-IR)',
        subtitle: 'Radical + [-is, -is, -it, -issons, -issez, -issent]',
        items: [
          'Participe présent en -issant (finissant)',
          'Je finis, Tu finis, Il finit',
          'Nous finissons, Vous finissez, Ils finissent'
        ]
      }
    ]
  },
  conclusion: "La maîtrise du présent de l'indicatif pour les verbes du 1er groupe (-e, -es, -e, -ons, -ez, -ent) et du 2ème groupe (-is, -is, -it, -issons, -issez, -issent) est le fondement de toute rédaction claire et sans faute en classe de 6ème.",
  fullText: `LEÇON 7 : LE PRÉSENT DE L'INDICATIF DES VERBES DU 1ER ET 2ÈME GROUPE (CONJUGAISON)

INTRODUCTION
Le présent de l'indicatif exprime une action qui se déroule au moment où l'on parle, une habitude ou une vérité générale.

                     [ PRÉSENT DE L'INDICATIF ]
                                 |
         +-----------------------+-----------------------+
         |                                               |
  [ 1ER GROUPE (-er) ]                           [ 2ÈME GROUPE (-ir en -issant) ]
  • Radical + terminaisons :                     • Radical + terminaisons :
    -e, -es, -e, -ons, -ez, -ent                   -is, -is, -it, -issons, -issez, -issent
  • Exemple : HABITER                            • Exemple : FINIR
    - J'habite                                     - Je finis
    - Tu habites                                   - Tu finis
    - Il / Elle habite                             - Il / Elle finit
    - Nous habitons                                - Nous finissons
    - Vous habitez                                 - Vous finissez
    - Ils / Elles habitent                         - Ils / Elles finissent

I. SITUATION D'OBSERVATION
Observez les verbes :
« Nous habitons à Dakar. Mon frère finit ses études cette année. »
• Habitons est le verbe habiter (1er groupe).
• Finit est le verbe finir (2ème groupe).
• Ces deux actions se déroulent en ce moment : les verbes sont au présent de l'indicatif.

II. EMPLOI DU PRÉSENT DE L'INDICATIF
On utilise le présent de l'indicatif pour :
• Une action présente : qui se passe au moment où l'on parle (J'écris au tableau).
• Une habitude : qui se répète régulièrement (Chaque matin, le soleil se lève).
• Une vérité générale : fait toujours vrai (La Terre tourne autour du soleil).

III. FORMATION ET TERMINAISONS
1. Les verbes du 1er groupe (-er)
Radical de l'infinitif + terminaisons : -e, -es, -e, -ons, -ez, -ent.
• J'habite, Tu habites, Il/Elle habite, Nous habitons, Vous habitez, Ils/Elles habitent.

2. Les verbes du 2ème groupe (-ir, participe présent en -issant)
Radical de l'infinitif + terminaisons : -is, -is, -it, -issons, -issez, -issent.
• Je finis, Tu finis, Il/Elle finit, Nous finissons, Vous finissez, Ils/Elles finissent.

IV. EXERCICE D'APPLICATION
Exercice : Conjuguez les verbes entre parenthèses au présent de l'indicatif :
1. Vous (saluer) le directeur. ➔ Vous saluez le directeur.
2. Les enfants (grandir) rapidement. ➔ Les enfants grandissent rapidement.
3. Tu (choisir) une belle couleur. ➔ Tu choisis une belle couleur.

CONCLUSION
Ces terminaisons régulières constituent la base de la conjugaison française à mémoriser pour l'expression écrite.`
};

export const LESSON_4_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LES FORMES DE PHRASES',
  subject: 'Français',
  classLevel: '6ème',
  introduction: "En français, chaque phrase possède obligatoirement un type (déclaratif, interrogatif, impératif ou exclamatif). En plus de ce type, la phrase peut revêtir une ou plusieurs formes. Il existe deux formes fondamentales qui s'opposent : la forme affirmative et la forme négative.",
  sections: [
    {
      title: 'I. INTRODUCTION AUX FORMES DE PHRASES',
      content: [
        "Toute phrase produite à l'oral ou à l'écrit relève obligatoirement d'un type de phrase déterminé (déclaratif, interrogatif, impératif ou exclamatif).",
        "En plus de son type, chaque phrase se présente sous une forme spécifique. Les deux formes cardinales de la langue française sont :",
        "• La forme affirmative : elle valide l'énoncé.",
        "• La forme négative : elle réfute ou conteste l'énoncé.",
        "Remarque : Les autres formes (passive, emphatique, impersonnelle) peuvent s'y combiner ultérieurement."
      ]
    },
    {
      title: 'II. LA FORME AFFIRMATIVE',
      content: [
        "Une phrase est à la forme affirmative lorsqu'elle sert à exprimer une affirmation, à dire 'oui', ou à déclarer qu'un fait est vrai ou se réalise effectivement.",
        "Exemples d'application :",
        "• « Le professeur explique la leçon au tableau. »",
        "• « Les élèves de 6ème révisent leurs examens. »",
        "• « Les bateaux rentrent au port de Dakar. »"
      ]
    },
    {
      title: 'III. LA FORME NÉGATIVE',
      content: [
        "Une phrase est à la forme négative lorsqu'elle sert à nier un fait, à dire 'non', ou à déclarer qu'une action ne se réalise pas ou est réfutée."
      ],
      subsections: [
        {
          subtitle: '1. La structure de la négation',
          content: [
            "La négation se construit généralement à l'aide de deux mots (des adverbes ou locutions adverbiales de négation) qui encadrent le verbe conjugué :",
            "• Ne ... pas (Négation totale) : « Malick ne mange pas sa mangue. »",
            "• Ne ... plus (Indique la fin d'une action passée) : « Il ne pleut plus sur Dakar. »",
            "• Ne ... jamais (Indique l'absence totale dans le temps) : « Fatou ne triche jamais pendant les devoirs. »",
            "• Ne ... rien (S'oppose à 'quelque chose') : « Lamine ne comprend rien à cet exercice. »",
            "• Ne ... personne (S'oppose à 'quelqu'un') : « Je ne vois personne dans la cour de l'école. »",
            "• Ne ... guère (S'oppose à 'beaucoup') : « Il ne mange guère ce matin. »",
            "• Ni ... ni (Négation double ou coordonnée) : « Il ne boit ni thé ni café. »"
          ]
        },
        {
          subtitle: '2. La place de la négation selon le temps du verbe',
          content: [
            "• Temps simple : Les mots de la négation encadrent directement le verbe conjugué.",
            "  Exemple : Samba ne part pas.",
            "• Temps composé : Les mots de la négation encadrent l'auxiliaire (être ou avoir), et le participe passé se place après le second mot de négation.",
            "  Exemple : Samba n'est pas parti. / Les élèves n'ont rien compris.",
            "• Verbe à l'infinitif : Les deux mots de la négation se placent côte à côte juste devant le verbe à l'infinitif.",
            "  Exemple : Il est interdit de ne pas écouter. / Prière de ne rien jeter."
          ]
        }
      ]
    },
    {
      title: 'IV. LES TRANSFORMATIONS DE DÉTERMINANTS À LA FORME NÉGATIVE',
      content: [
        "Lorsqu'une phrase passe de la forme affirmative à la forme négative, les articles indéfinis (un, une, des) et les articles partitifs (du, de la, des) se transforment généralement en 'de' ou 'd''.",
        "Exemples de transformations obligatoires :",
        "• Affirmatif : « Le menuisier fabrique des tables. » ➔ Négatif : « Le menuisier ne fabrique pas de tables. »",
        "• Affirmatif : « Elle boit du lait. » ➔ Négatif : « Elle ne boit pas de lait. »",
        "• Affirmatif : « Oumar mange une pomme. » ➔ Négatif : « Oumar ne mange pas de pomme. »",
        "Exception : Avec le verbe 'être', l'article indéfini ne change pas (Ex : « C'est un ami » ➔ « Ce n'est pas un ami »)."
      ]
    },
    {
      title: "V. EXERCICES D'APPLICATION ET CORRIGÉS",
      content: [
        "Exercice 1 : Mettez les phrases affirmatives suivantes à la forme négative en utilisant la négation appropriée :",
        "1. « Ali a encore faim. »",
        "2. « Quelqu'un frappe à la porte. »",
        "3. « Nous avons acheté des cahiers neufs. »",
        "Exercice 2 : Indiquez la forme (affirmative ou négative) de chaque phrase :",
        "a) « Les enfants ne courent jamais sous l'orage. »",
        "b) « Le train de Thiès arrive à l'heure. »"
      ],
      subsections: [
        {
          subtitle: 'Corrigé détaillé et explications syntaxiques',
          content: [
            "Exercice 1 :",
            "1. « Ali n'a plus faim. » ('encore' devient 'ne... plus').",
            "2. « Personne ne frappe à la porte. » ('quelqu'un' sujet devient 'personne ne').",
            "3. « Nous n'avons pas acheté de cahiers neufs. » (temps composé : encadrement de l'auxiliaire 'avons' ; l'article 'des' se transforme en 'de').",
            "Exercice 2 :",
            "a) Forme négative (présence de la locution 'ne... jamais').",
            "b) Forme affirmative (aucun élément de négation)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Formes de phrases (Affirmative vs Négative)',
    root: 'LES FORMES DE PHRASES',
    branches: [
      {
        name: 'FORME AFFIRMATIVE',
        subtitle: 'Affirme un fait ou dit « oui »',
        items: [
          'Le professeur explique la leçon',
          'Les élèves révisent leurs cours',
          'Absence totale de marques négatives'
        ]
      },
      {
        name: 'FORME NÉGATIVE',
        subtitle: 'Nie un fait ou dit « non »',
        items: [
          'Ne... pas / Ne... plus / Ne... jamais',
          'Ne... rien / Ne... personne / Ne... guère',
          'Encadre le verbe (temps simple) ou auxiliaire (temps composé)'
        ]
      },
      {
        name: 'RÈGLES PARTICULIÈRES',
        subtitle: 'Transformations des déterminants & infinitif',
        items: [
          'un / une / des / du ➔ « de » ou « d\' » (pas de mangue)',
          'Devant infinitif : les 2 mots collés (de ne pas parler)',
          'Exception avec le verbe être : maintien de l\'article'
        ]
      }
    ]
  },
  conclusion: "La distinction entre phrase affirmative et phrase négative est fondamentale. Maîtriser le bon choix des adverbes de négation et la transformation des déterminants ('de' à la place de 'des/du') garantit la correction syntaxique des rédactions en 6ème.",
  fullText: `LEÇON 4 : LES FORMES DE PHRASES

I. INTRODUCTION
En français, chaque phrase possède obligatoirement un type (déclaratif, interrogatif, impératif ou exclamatif). En plus de ce type, la phrase peut revêtir une ou plusieurs formes. Il existe deux formes fondamentales qui s'opposent : la forme affirmative et la forme négative.

                   [ LES DEUX FORMES DE PHRASES ]
                                 |
         +-----------------------+-----------------------+
         |                                               |
  [ FORME AFFIRMATIVE ]                           [ FORME NÉGATIVE ]
  • Exprime une affirmation                       • Exprime un refus, un démenti
  • Dit « oui », valide un fait                   • Dit « non », nie un fait
  • Ex: Le professeur explique.                   • Encadrement : Ne ... pas / plus / jamais
                                                  • Ex: Samba ne part pas.

II. LA FORME AFFIRMATIVE
Une phrase est à la forme affirmative lorsqu'elle sert à exprimer une affirmation, à dire "oui", ou à déclarer qu'un fait est vrai ou se réalise.
• Exemple : Le professeur explique la leçon au tableau.
• Exemple : Les élèves de 6ème révisent leurs examens.

III. LA FORME NÉGATIVE
Une phrase est à la forme négative lorsqu'elle sert à nier un fait, à dire "non", ou à déclarer qu'une action ne se réalise pas.

1. La structure de la négation :
La négation se construit généralement à l'aide de deux mots (des adverbes de négation) qui encadrent le verbe conjugué.
• Ne ... pas (Négation totale) : Malick ne mange pas sa mangue.
• Ne ... plus (Indique la fin d'une action passée) : Il ne pleut plus sur Dakar.
• Ne ... jamais (Indique l'absence totale dans le temps) : Fatou ne triche jamais pendant les devoirs.
• Ne ... rien (S'oppose à "quelque chose") : Lamine ne comprend rien à cet exercice.
• Ne ... personne (S'oppose à "quelqu'un") : Je ne vois personne dans la cour de l'école.

2. La place de la négation selon le temps du verbe :
• Temps simple : Les mots de la négation encadrent le verbe. (Samba ne part pas.)
• Temps composé : Les mots de la négation encadrent l'auxiliaire (être ou avoir), et le participe passé se place après le deuxième mot de la négation. (Samba n'est pas parti.)
• Verbe à l'infinitif : Les deux mots de la négation se placent côte à côte devant l'infinitif. (Il est interdit de ne pas écouter.)

IV. LES TRANSFORMATIONS DE DÉTERMINANTS À LA FORME NÉGATIVE
Lorsqu'une phrase passe de la forme affirmative à la forme négative, les articles indéfinis (un, une, des) et les articles partitifs (du, de la, des) se transforment souvent en de ou d'.
• Affirmatif : Le menuisier fabrique des tables. ➔ Négatif : Le menuisier ne fabrique pas de tables.
• Affirmatif : Elle boit du lait. ➔ Négatif : Elle ne boit pas de lait.

V. EXERCICES D'APPLICATION
1. « Ali a encore faim. » ➔ « Ali n'a plus faim. »
2. « Quelqu'un frappe à la porte. » ➔ « Personne ne frappe à la porte. »
3. « Nous avons acheté des cahiers neufs. » ➔ « Nous n'avons pas acheté de cahiers neufs. »

CONCLUSION
La maîtrise des formes affirmative et négative permet de structurer la pensée et d'éviter les erreurs courantes lors des rédactions et dictées.`
};

export const LESSON_5_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LES CONSTITUANTS DE LA PHRASE SIMPLE (LE GROUPE NOMINAL ET LE GROUPE VERBAL)',
  subject: 'Français',
  classLevel: '6ème',
  introduction: "La phrase simple est l'unité syntaxique élémentaire construite autour d'un seul verbe conjugué. Elle repose sur deux piliers indissociables et obligatoires : le Groupe Nominal Sujet (GNS), qui indique de qui ou de quoi l'on parle, et le Groupe Verbal (GV), qui exprime ce que fait ou ce qu'est le sujet.",
  sections: [
    {
      title: 'I. DÉFINITION DE LA PHRASE SIMPLE',
      content: [
        "Une phrase simple est une phrase autonome qui ne contient qu'un seul verbe conjugué (une seule proposition indépendante).",
        "Elle est construite autour de deux constituants obligatoires et fondamentaux : le Groupe Nominal Sujet (GNS) et le Groupe Verbal (GV).",
        "• Modèle syntaxique fondamental : Phrase = GNS + GV",
        "Exemple : « Les élèves (GNS) écoutent le maître (GV). »"
      ]
    },
    {
      title: 'II. LE GROUPE NOMINAL SUJET (GNS)',
      content: [
        "Le Groupe Nominal Sujet désigne l'être (personne, animal) ou la chose qui fait l'action exprimée par le verbe, ou dont on parle.",
        "Pour repérer facilement le GNS, on pose la question : « Qui est-ce qui ? » (êtres animés) ou « Qu'est-ce qui ? » (inanimés) juste avant le verbe."
      ],
      subsections: [
        {
          subtitle: '1. La composition du GNS',
          content: [
            "Le noyau du GNS est toujours un nom ou un pronom. Il peut se présenter sous plusieurs structures :",
            "• Un nom propre seul : « Awa prépare le repas. »",
            "• Un pronom personnel seul : « Ils écoutent le directeur. »",
            "• Un nom commun accompagné d'un déterminant : « Le navet est mûr. »",
            "• Un nom enrichi (déterminant + nom + adjectif qualificatif ou complément du nom) : « Le jeune écolier sénégalais marche vers sa classe. »"
          ]
        }
      ]
    },
    {
      title: 'III. LE GROUPE VERBAL (GV)',
      content: [
        "Le Groupe Verbal exprime ce que fait le sujet, ou ce que l'on dit à propos de ce sujet. Le noyau incontournable du groupe verbal est le verbe conjugué.",
        "Selon la nature du verbe, le GV adopte différentes structures syntaxiques :"
      ],
      subsections: [
        {
          subtitle: '1. La structure du GV avec un verbe intransitif',
          content: [
            "Certains verbes n'ont pas besoin de complément pour avoir un sens complet. Le GV est alors réduit au verbe seul.",
            "Exemple : « Le soleil brille. »",
            "• GNS = Le soleil",
            "• GV = brille (verbe seul sans complément)"
          ]
        },
        {
          subtitle: '2. La structure du GV avec un verbe transitif',
          content: [
            "Le verbe est suivi d'un ou de plusieurs compléments essentiels qui ne peuvent être ni supprimés ni déplacés sans dénaturer le sens de la phrase :",
            "• Avec un Complément d'Objet Direct (COD) : Le complément est directement relié au verbe sans préposition. On pose la question 'qui ?' ou 'quoi ?' après le verbe.",
            "  Exemple : « L'agriculteur cultive le mil. » (GV = cultive le mil | COD = le mil)",
            "• Avec un Complément d'Objet Indirect (COI) : Le complément est relié au verbe par une préposition (à, de). On pose la question 'à qui ?', 'à quoi ?', 'de qui ?' ou 'de quoi ?'.",
            "  Exemple : « L'enfant obéit à ses parents. » (GV = obéit à ses parents | COI = à ses parents)"
          ]
        },
        {
          subtitle: "3. La structure du GV avec un verbe d'état",
          content: [
            "Lorsque le verbe est un verbe d'état (être, paraître, sembler, devenir, demeurer, rester, avoir l'air), le GV est composé du verbe et d'un attribut du sujet.",
            "L'attribut exprime une qualité ou un état attribué au sujet.",
            "Exemple : « Cette école devient très grande. »",
            "• GNS = Cette école",
            "• GV = devient très grande (verbe d'état 'devient' + attribut du sujet 'très grande')"
          ]
        }
      ]
    },
    {
      title: "IV. EXERCICES D'APPLICATION ET CORRIGÉS",
      content: [
        "Exercice 1 : Séparez le GNS et le GV d'un trait oblique ( / ) dans les phrases suivantes :",
        "1. « Le vent violent souffle sur la côte. »",
        "2. « Moussa parle à son professeur de sciences. »",
        "3. « Les mangues semblent délicieuses. »",
        "Exercice 2 : Précisez la structure du GV (verbe intransitif seul, verbe + COD, verbe + COI, ou verbe d'état + attribut)."
      ],
      subsections: [
        {
          subtitle: 'Corrigé détaillé et analyse grammaticale',
          content: [
            "1. « Le vent violent / souffle sur la côte. »",
            "   • GNS = 'Le vent violent' (Nom enrichi : déterminant + nom + adjectif)",
            "   • GV = 'souffle sur la côte' (verbe intransitif 'souffle' + complément de lieu)",
            "2. « Moussa / parle à son professeur de sciences. »",
            "   • GNS = 'Moussa' (Nom propre)",
            "   • GV = 'parle à son professeur de sciences' (verbe 'parle' + COI 'à son professeur de sciences')",
            "3. « Les mangues / semblent délicieuses. »",
            "   • GNS = 'Les mangues' (déterminant + nom)",
            "   • GV = 'semblent délicieuses' (verbe d'état 'semblent' + attribut du sujet 'délicieuses')"
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Les deux constituants de la phrase simple',
    root: 'PHRASE SIMPLE = GNS + GV',
    branches: [
      {
        name: 'GROUPE NOMINAL SUJET (GNS)',
        subtitle: '« Qui est-ce qui ? » / « Qu\'est-ce qui ? »',
        items: [
          'Nom propre seul : Awa',
          'Pronom personnel : Ils, Elle',
          'Nom commun avec déterminant : Le navet',
          'Nom enrichi : Le jeune écolier sénégalais'
        ]
      },
      {
        name: 'GROUPE VERBAL (GV)',
        subtitle: 'Exprime l\'action ou l\'état du sujet',
        items: [
          'Intransitif (seul) : Le soleil brille',
          'Transitif direct (+ COD) : cultive le mil',
          'Transitif indirect (+ COI) : obéit à ses parents',
          'Verbe d\'état (+ Attribut) : devient très grande'
        ]
      },
      {
        name: 'TESTS SYNTAXIQUES',
        subtitle: 'Constituants indispensables',
        items: [
          'Ni le GNS ni le GV ne peuvent être supprimés',
          'Ordre habituel en français : GNS avant le GV',
          'Accord : le verbe du GV s\'accorde avec le GNS'
        ]
      }
    ]
  },
  conclusion: "La structure canonique de la phrase simple (GNS + GV) est le socle de toute la syntaxe française. Savoir repérer le GNS et décortiquer la structure du GV (COD, COI, attribut) est le garant d'une analyse grammaticale solide dès la 6ème.",
  fullText: `LEÇON 5 : LES CONSTITUANTS DE LA PHRASE SIMPLE (LE GROUPE NOMINAL ET LE GROUPE VERBAL)

I. DÉFINITION DE LA PHRASE SIMPLE
Une phrase simple est une phrase autonome qui ne contient qu'un seul verbe conjugué. Elle est construite autour de deux constituants obligatoires et fondamentaux : le Groupe Nominal Sujet (GNS) et le Groupe Verbal (GV).
• Modèle syntaxique : Phrase = GNS + GV

              [ LES CONSTITUANTS DE LA PHRASE SIMPLE ]
                                 |
         +-----------------------+-----------------------+
         |                                               |
  [ GROUPE NOMINAL SUJET (GNS) ]                  [ GROUPE VERBAL (GV) ]
  • De qui ou de quoi on parle                   • Ce que fait ou est le sujet
  • « Qui est-ce qui ? »                         • Noyau : Verbe conjugué
  • Compositions possibles :                     • 3 structures majeures :
    - Nom propre : Awa                              1. Intransitif : Le soleil brille.
    - Pronom : Ils                                  2. Transitif : cultive le mil (COD) /
    - Déterminant + Nom : Le navet                     obéit à ses parents (COI).
    - Nom enrichi : Le jeune écolier                3. Verbe d'état + Attribut :
                                                       devient très grande.

II. LE GROUPE NOMINAL SUJET (GNS)
Le Groupe Nominal Sujet désigne l'être ou la chose qui fait l'action exprimée par le verbe, ou dont on parle. Pour le trouver, on pose la question : "Qu'est-ce qui ?" ou "Qui est-ce qui ?" avant le verbe.

1. La composition du GNS :
Le noyau du GNS est toujours un nom ou un pronom. Il peut être :
• Un nom propre seul : Exemple : Awa prépare le repas.
• Un pronom personnel seul : Exemple : Ils écoutent le directeur.
• Un nom commun accompagné d'un déterminant : Exemple : Le navet est mûr.
• Un nom enrichi (déterminant + nom + adjectif) : Exemple : Le jeune écolier sénégalais marche vers sa classe.

III. LE GROUPE VERBAL (GV)
Le Groupe Verbal exprime ce que fait le sujet, ou ce que l'on dit à propos de ce sujet. Le noyau du groupe verbal est le verbe conjugué.

1. La structure du GV avec un verbe intransitif :
Certains verbes n'ont pas besoin de complément pour avoir un sens complet. Le GV est alors réduit au verbe seul.
• Exemple : Le soleil brille. (GNS = Le soleil / GV = brille)

2. La structure du GV avec un verbe transitif :
Le verbe est suivi d'un ou de plusieurs compléments essentiels qui ne peuvent être ni supprimés ni déplacés sans changer le sens de la phrase.
• Avec un Complément d'Objet Direct (COD) : Le complément est directement relié au verbe. On pose la question "qui ?" ou "quoi ?".
  Exemple : L'agriculteur cultive le mil. (GV = cultive le mil)
• Avec un Complément d'Objet Indirect (COI) : Le complément est relié au verbe par une préposition (à, de). On pose la question "à qui ?", "à quoi ?", "de qui ?" ou "de quoi ?".
  Exemple : L'enfant obéit à ses parents. (GV = obéit à ses parents)

3. La structure du GV avec un verbe d'état :
Lorsque le verbe est un verbe d'état (être, paraître, sembler, devenir, demeurer, rester), le GV est composé du verbe et d'un attribut du sujet.
• Exemple : Cette école devient très grande. (GV = devient très grande)

IV. EXERCICES D'APPLICATION
1. « Le vent violent / souffle sur la côte. » ➔ GNS = Le vent violent | GV = souffle sur la côte
2. « Moussa / parle à son professeur. » ➔ GNS = Moussa | GV = parle à son professeur (COI)
3. « Les mangues / semblent délicieuses. » ➔ GNS = Les mangues | GV = semblent délicieuses (Attribut)

CONCLUSION
La maîtrise du GNS et du GV permet de structurer correctement chaque phrase et constitue la clé de l'analyse grammaticale en 6ème.`
};

export const LESSON_9_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-9',
  number: 'LEÇON 9',
  title: "LE PRÉSENT DE L'INDICATIF DES VERBES DU 3ÈME GROUPE (CONJUGAISON)",
  subject: 'Français',
  classLevel: '6ème',
  introduction: "Le troisième groupe réunit tous les verbes irréguliers de la langue française. Contrairement aux deux premiers groupes réguliers, les verbes du 3ème groupe subissent fréquemment des modifications de leur radical et adoptent différentes séries de terminaisons (-s/-s/-t, -ds/-ds/-d, -ts/-ts/-t, ou -x/-x/-t). La maîtrise de ces verbes indispensables nécessite une étude méthodique de leurs familles et l'apprentissage par cœur des auxiliaires et des verbes usuels.",
  sections: [
    {
      title: 'I. CARACTÉRISTIQUES DES VERBES DU 3ÈME GROUPE',
      content: [
        "Le troisième groupe comprend tous les verbes irréguliers qui ne rentrent ni dans le premier groupe (en -er), ni dans le deuxième groupe (en -ir finissant en -issant). Il rassemble :",
        "• Le verbe aller (qui se termine par -er mais possède une conjugaison complètement irrégulière).",
        "• Les verbes se terminant en -ir qui ne font pas leur pluriel en -issons (ex: partir ➔ nous partons, venir ➔ nous venons, sortir ➔ nous sortons).",
        "• Tous les verbes se terminant en -oir (ex: voir, pouvoir, vouloir, savoir, devoir).",
        "• Tous les verbes se terminant en -re (ex: prendre, rendre, faire, dire, lire, mettre).",
        "Contrairement aux deux premiers groupes, les verbes du 3ème groupe changent souvent de radical au cours de la conjugaison. Leurs terminaisons varient selon les familles de verbes."
      ]
    },
    {
      title: 'II. LES TERMINAISONS COURANTES : -S, -S, -T, -ONS, -EZ, -ENT',
      content: [
        "C'est le modèle régulateur le plus fréquent pour la majorité des verbes en -ir, -oir et -re.",
        "Exemple avec le verbe Partir (terminaison en -ir) :",
        "• Je pars",
        "• Tu pars",
        "• Il / Elle / On part",
        "• Nous partons",
        "• Vous partez",
        "• Ils / Elles partent",
        "Exemple avec le verbe Voir (terminaison en -oir) :",
        "• Je vois",
        "• Tu vois",
        "• Il / Elle / On voit",
        "• Nous voyons",
        "• Vous voyez",
        "• Ils / Elles voient"
      ]
    },
    {
      title: 'III. LES VERBES EN -DRE : -DS, -DS, -D, -ONS, -EZ, -ENT',
      content: [
        "Les verbes qui se terminent par -dre (comme prendre, vendre, attendre, entendre, rendre, descendre) conservent généralement le 'd' du radical aux personnes du singulier.",
        "Exemple avec le verbe Vendre :",
        "• Je vends, Tu vends, Il / Elle / On vend, Nous vendons, Vous vendez, Ils / Elles vendent.",
        "Attention au cas de Prendre (modification du radical au pluriel) :",
        "• Je prends, Tu prends, Il prend, Nous prenons, Vous prenez, Ils prennent (double 'n').",
        "Exception importante : Les verbes en -aindre, -eindre, -oindre (ex: craindre, peindre, joindre) et en -soudre (ex: résoudre) perdent leur 'd' et reprennent les terminaisons classiques (-s, -s, -t).",
        "• Exemple : Je crains, Tu crains, Il craint, Nous craignons, Vous craignez, Ils craignent."
      ]
    },
    {
      title: 'IV. LES VERBES EN -TRE : -TS, -TS, -T, -ONS, -EZ, -ENT',
      content: [
        "Les verbes comme mettre, battre et leurs dérivés perdent un 't' du radical aux personnes du singulier.",
        "Exemple avec le verbe Mettre :",
        "• Je mets",
        "• Tu mets",
        "• Il / Elle / On met",
        "• Nous mettons",
        "• Vous mettez",
        "• Ils / Elles mettent"
      ]
    },
    {
      title: 'V. LES VERBES POUVOIR ET VOULOIR : -X, -X, -T, -ONS, -EZ, -ENT',
      content: [
        "Ces deux verbes modaux fondamentaux ont une conjugaison très particulière au singulier où les terminaisons habituelles en -s sont remplacées par des -x. Le radical change également entre le singulier et le pluriel.",
        "Exemple avec le verbe Pouvoir :",
        "• Je peux, Tu peux, Il / Elle / On peut, Nous pouvons, Vous pouvez, Ils / Elles peuvent.",
        "Exemple avec le verbe Vouloir :",
        "• Je veux, Tu veux, Il / Elle / On veut, Nous voulons, Vous voulez, Ils / Elles veulent."
      ]
    },
    {
      title: 'VI. CAS PARTICULIERS TRÈS FRÉQUENTS (ÊTRE, AVOIR, ALLER, FAIRE, DIRE)',
      content: [
        "Ces verbes essentiels de la langue française doivent être appris par cœur en classe de 6ème en raison de leurs fortes irrégularités lexicales :"
      ],
      table: {
        headers: ['Pronom', 'Être', 'Avoir', 'Aller', 'Faire', 'Dire'],
        rows: [
          ["Je / J'", 'suis', 'ai', 'vais', 'fais', 'dis'],
          ['Tu', 'es', 'as', 'vas', 'fais', 'dis'],
          ['Il / Elle / On', 'est', 'a', 'va', 'fait', 'dit'],
          ['Nous', 'sommes', 'avons', 'allons', 'faisons', 'disons'],
          ['Vous', 'êtes', 'avez', 'allez', 'faites', 'dites'],
          ['Ils / Elles', 'sont', 'ont', 'vont', 'font', 'disent']
        ]
      }
    },
    {
      title: "VII. EXERCICES D'APPLICATION ET CORRIGÉS",
      content: [
        "Exercice d'entraînement : Conjuguez au présent de l'indicatif les verbes entre parenthèses :",
        "1. « Nous (prendre) le bus pour aller au collège. »",
        "2. « Vous (faire) toujours attention en traversant la route. »",
        "3. « Fatou et Awa (partir) en voyage à Saint-Louis. »",
        "4. « Tu (vouloir) un fruit bien mûr ? »",
        "5. « Les marchands (vendre) des mangues sur le marché. »",
        "6. « Vous (dire) toujours la vérité à vos parents. »"
      ],
      subsections: [
        {
          subtitle: 'Corrigé explicatif',
          content: [
            "1. « Nous prenons le bus pour aller au collège. » (verbe prendre : radical pren- au pluriel).",
            "2. « Vous faites toujours attention en traversant la route. » (verbe faire : forme irrégulière 'faites' à la 2e personne du pluriel).",
            "3. « Fatou et Awa partent en voyage à Saint-Louis. » (verbe partir du 3e groupe : terminaison -ent).",
            "4. « Tu veux un fruit bien mûr ? » (verbe vouloir : terminaison spécifique en -x).",
            "5. « Les marchands vendent des mangues sur le marché. » (verbe vendre en -dre : terminaison -ent).",
            "6. « Vous dites toujours la vérité à vos parents. » (verbe dire : forme irrégulière 'dites' à la 2e personne du pluriel)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: "Schéma structural : Le Présent de l'Indicatif des Verbes du 3ème Groupe",
    root: 'VERBES DU 3ÈME GROUPE AU PRÉSENT',
    branches: [
      {
        name: 'MODÈLE COURANT',
        subtitle: '-s, -s, -t, -ons, -ez, -ent',
        items: [
          'Partir : je pars, tu pars, il part',
          'Voir : je vois, tu vois, il voit',
          'Venir : je viens, tu viens, il vient'
        ]
      },
      {
        name: 'VERBES EN -DRE ET -TRE',
        subtitle: '-ds, -ds, -d et -ts, -ts, -t',
        items: [
          'Vendre : je vends, tu vends, il vend',
          'Mettre : je mets, tu mets, il met',
          'Prendre : prends, prend, prenons, prennent'
        ]
      },
      {
        name: 'PARTICULARITÉS & TABLEAU',
        subtitle: '-x, -x, -t et verbes irréguliers',
        items: [
          'Pouvoir / Vouloir : je peux, tu veux',
          'Être (suis, es, est, sommes, êtes, sont)',
          'Avoir, Aller, Faire (faites), Dire (dites)'
        ]
      }
    ]
  },
  conclusion: "Les verbes du 3ème groupe demandent une attention particulière en 6ème. L'assimilation des quatre familles de terminaisons et la mémorisation rigoureuse du tableau des verbes usuels (Être, Avoir, Aller, Faire, Dire) sont indispensables pour une expression écrite précise et sans faute.",
  fullText: `LEÇON 9 (SUITE) : LE PRÉSENT DE L'INDICATIF DES VERBES DU 3ÈME GROUPE

I. CARACTÉRISTIQUES DES VERBES DU 3ÈME GROUPE
Le troisième groupe comprend tous les verbes irréguliers qui ne rentrent ni dans le premier groupe, ni dans le deuxième groupe. Il rassemble :
• Le verbe aller (malgré sa terminaison en -er).
• Les verbes se terminant en -ir qui ne font pas leur pluriel en -issons (ex: partir, venir).
• Les verbes se terminant en -oir (ex: voir, pouvoir).
• Les verbes se terminant en -re (ex: prendre, rendre, faire).
Contrairement aux deux premiers groupes, les verbes du 3ème groupe changent souvent de radical au cours de la conjugaison. Leurs terminaisons varient selon les familles de verbes.

II. LES TERMINAISONS COURANTES : -S, -S, -T, -ONS, -EZ, -ENT
C'est le modèle le plus fréquent pour la majorité des verbes en -ir, -oir et -re.
• Exemple avec le verbe Partir (terminaison en -ir) :
  - Je pars
  - Tu pars
  - Il / Elle / On part
  - Nous partons
  - Vous partez
  - Ils / Elles partent
• Exemple avec le verbe Voir (terminaison en -oir) :
  - Je vois
  - Tu vois
  - Il / Elle / On voit
  - Nous voyons
  - Vous voyez
  - Ils / Elles voient

III. LES VERBES EN -DRE : -DS, -DS, -D, -ONS, -EZ, -ENT
Les verbes qui se terminent par -dre (comme prendre, vendre, attendre, entendre) conservent généralement le d du radical aux personnes du singulier.
• Exemple avec le verbe Vendre :
  - Je vends, Tu vends, Il / Elle / On vend, Nous vendons, Vous vendez, Ils / Elles vendent.
• Attention au cas de Prendre (modification du radical au pluriel) :
  - Je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.
• Exception importante : Les verbes en -aindre, -eindre, -oindre (ex: craindre, peindre, joindre) et -soudre (ex: résoudre) perdent leur d et prennent les terminaisons classiques (-s, -s, -t).
  - Exemple : Je crains, tu crains, il craint, nous craignons.

IV. LES VERBES EN -TRE : -TS, -TS, -T, -ONS, -EZ, -ENT
Les verbes comme mettre ou battre perdent un t du radical aux personnes du singulier.
• Exemple avec le verbe Mettre :
  - Je mets, Tu mets, Il / Elle / On met, Nous mettons, Vous mettez, Ils / Elles mettent.

V. LES VERBES POUVOIR ET VOULOIR : -X, -X, -T, -ONS, -EZ, -ENT
Ces deux verbes ont une conjugaison très particulière au singulier où les terminaisons -s sont remplacées par des -x. Le radical change également entre le singulier et le pluriel.
• Exemple avec le verbe Pouvoir :
  - Je peux, Tu peux, Il / Elle / On peut, Nous pouvons, Vous pouvez, Ils / Elles peuvent.
• Exemple avec le verbe Vouloir :
  - Je veux, Tu veux, Il / Elle / On veut, Nous voulons, Vous voulez, Ils / Elles veulent.

VI. CAS PARTICULIERS TRÈS FRÉQUENTS (ÊTRE, AVOIR, ALLER, FAIRE, DIRE)
Ces verbes essentiels doivent être appris par cœur en classe de 6ème en raison de leurs fortes irrégularités.

| Pronom       | Être   | Avoir  | Aller  | Faire   | Dire   |
|--------------|--------|--------|--------|---------|--------|
| Je / J'      | suis   | ai     | vais   | fais    | dis    |
| Tu           | es     | as     | vas    | fais    | dis    |
| Il / Elle    | est    | a      | va     | fait    | dit    |
| Nous         | sommes | avons  | allons | faisons | disons |
| Vous         | êtes   | avez   | allez  | faites  | dites  |
| Ils / Elles  | sont   | ont    | vont   | font    | disent |

VII. EXERCICES D'APPLICATION
1. Nous (prendre) le bus. ➔ Nous prenons le bus.
2. Vous (faire) attention. ➔ Vous faites attention.
3. Fatou et Awa (partir). ➔ Fatou et Awa partent.
4. Tu (vouloir) une mangue ? ➔ Tu veux une mangue ?
5. Vous (dire) la vérité. ➔ Vous dites la vérité.`
};

export const LESSON_8_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-8',
  number: 'LEÇON 8',
  title: 'LES ADJECTIFS QUALIFICATIFS « ÉPITHÈTES » ET « ATTRIBUTS »',
  subject: 'Français',
  classLevel: '6ème',
  introduction: "Thème : Paix et Tolérance | Sous-thème : Accepter les autres.\nL'adjectif qualificatif est un mot variable essentiel de la langue française qui permet de caractériser, de qualifier ou de décrire un nom ou un pronom. Selon sa place et sa relation syntaxique avec le nom, il remplit deux fonctions grammaticales fondamentales : la fonction d'épithète (directement rattaché au nom) et la fonction d'attribut (séparé du nom ou sujet par un verbe d'état). Cette leçon combine lecture suivie, analyse grammaticale, manipulations de recherche et de fixation, conjugaison des verbes être et avoir au passé composé, structures syntaxiques et lexique thématique de la tolérance.",
  sections: [
    {
      title: '1. LECTURE SUIVIE - TEXTE N°7 : LE PETIT LAPIN BLANC',
      content: [
        "Support pédagogique : Texte n°7 intitulé « Le petit lapin blanc ».",
        "Activités d'apprentissage et objectifs de la séance :",
        "• Lecture expressive et fluide du texte à voix haute en respectant la ponctuation, les groupes de souffle et les liaisons.",
        "• Contrôle approfondi de la compréhension : répondre à des questions précises sur le déroulement du récit, les comportements des personnages face à la différence et les leçons de tolérance qui s'en dégagent.",
        "• Mettre en correspondance le texte et les images (illustrations) : associer chaque passage narratif ou descriptif à l'illustration correspondante pour caractériser les personnages."
      ]
    },
    {
      title: '2. GRAMMAIRE - LES ADJECTIFS QUALIFICATIFS ÉPITHÈTES ET ATTRIBUTS',
      content: [
        "L'adjectif qualificatif apporte une précision essentielle sur la nature, la forme, la couleur ou l'état d'un être animé ou d'une chose."
      ],
      subsections: [
        {
          subtitle: 'A. Définition et règle d’accord',
          content: [
            "• Définition : L’adjectif qualificatif est un mot variable qui donne une qualité, une caractéristique ou un défaut au nom qu'il accompagne.",
            "• Règle d'or de l'accord : L’adjectif qualificatif s’accorde obligatoirement en genre (masculin ou féminin) et en nombre (singulier ou pluriel) avec le nom (ou le pronom) auquel il se rapporte.",
            "Exemple : « un ami fidèle » ➔ « une amie fidèle » (accord en genre) ; « des amis fidèles » (accord en nombre)."
          ]
        },
        {
          subtitle: 'B. L’adjectif qualificatif épithète',
          content: [
            "• Position : L’adjectif est placé directement à côté du nom qu’il qualifie (immédiatement avant ou immédiatement après), sans aucun verbe intermédiaire.",
            "• Rôle dans le groupe nominal : Il fait partie intégrante du Groupe Nominal (GN). On peut généralement le supprimer sans rendre la phrase agrammaticale.",
            "Exemples officiels du cours :",
            "• « un petit lapin » ➔ 'petit' est adjectif qualificatif épithète du nom 'lapin'.",
            "• « une grande différence » ➔ 'grande' est adjectif qualificatif épithète du nom 'différence'.",
            "• « des enfants tolérants » ➔ 'tolérants' est adjectif qualificatif épithète du nom 'enfants'."
          ]
        },
        {
          subtitle: 'C. L’adjectif qualificatif attribut du sujet',
          content: [
            "• Position et relation : L’adjectif est séparé du nom (ou du pronom sujet) par un verbe d’état.",
            "• Les verbes d’état principaux : être, paraître, sembler, devenir, rester, demeurer, avoir l’air, passer pour.",
            "• Propriété essentielle : Contrairement à l'épithète, l'attribut du sujet est un constituant essentiel du Groupe Verbal (GV) ; il ne peut être ni supprimé ni déplacé sans détruire le sens de la phrase.",
            "• Accord : L’adjectif attribut s'accorde en genre et en nombre avec le sujet du verbe d'état.",
            "Exemples officiels du cours :",
            "• « Le lapin est petit. » ➔ 'petit' est adjectif qualificatif attribut du sujet 'Le lapin' (séparé par le verbe d'état 'est').",
            "• « Les enfants semblent différents. » ➔ 'différents' est attribut du sujet 'Les enfants' (séparé par le verbe d'état 'semblent').",
            "• « Elle est devenue tolérante. » ➔ 'tolérante' est attribut du sujet 'Elle' (accord féminin singulier avec 'Elle')."
          ]
        }
      ]
    },
    {
      title: '3. MANIPULATION - RECHERCHE DANS LE TEXTE',
      content: [
        "Consigne : Dans le texte « Le petit lapin blanc », relever 5 adjectifs qualificatifs épithètes et 5 adjectifs qualificatifs attributs.",
        "Exemples de relevés et d'analyse :"
      ],
      subsections: [
        {
          subtitle: 'Relevé des 5 adjectifs qualificatifs épithètes',
          content: [
            "1. « un petit lapin » ➔ 'petit' (épithète, placé avant le nom 'lapin').",
            "2. « ses longues oreilles » ➔ 'longues' (épithète, placé avant le nom 'oreilles').",
            "3. « une fourrure blanche » ➔ 'blanche' (épithète, placé après le nom 'fourrure').",
            "4. « un regard doux » ➔ 'doux' (épithète, placé après le nom 'regard').",
            "5. « des animaux tolérants » ➔ 'tolérants' (épithète, placé après le nom 'animaux')."
          ]
        },
        {
          subtitle: 'Relevé des 5 adjectifs qualificatifs attributs',
          content: [
            "1. « Le lapin est petit. » ➔ 'petit' (attribut du sujet 'Le lapin', verbe être).",
            "2. « Les autres animaux paraissaient méfiants. » ➔ 'méfiants' (attribut du sujet 'Les autres animaux', verbe paraître).",
            "3. « Sa démarche semblait hésitante. » ➔ 'hésitante' (attribut du sujet 'Sa démarche', verbe sembler).",
            "4. « Les enfants sont devenus tolérants. » ➔ 'tolérants' (attribut du sujet 'Les enfants', verbe devenir).",
            "5. « Tous les amis restèrent unis. » ➔ 'unis' (attribut du sujet 'Tous les amis', verbe rester)."
          ]
        }
      ]
    },
    {
      title: '4. MANIPULATION - FIXATION (EXERCICES PRATIQUES)',
      content: [
        "Consigne : Compléter chaque phrase avec un adjectif qualificatif pertinent en précisant sa fonction grammaticale (épithète ou attribut) :",
        "1. « Ce garçon est... »",
        "2. « J’ai vu une fille... »",
        "3. « Les différences nous rendent... »"
      ],
      subsections: [
        {
          subtitle: 'Propositions de réponses et analyse des accords',
          content: [
            "1. « Ce garçon est travailleur / attentif / tolérant. » ➔ 'travailleur' est adjectif qualificatif attribut du sujet 'Ce garçon' (relié par le verbe d'état 'est').",
            "2. « J’ai vu une fille souriante / intelligente / généreuse. » ➔ 'souriante' est adjectif qualificatif épithète du nom 'fille' (directement rattaché au nom dans le groupe nominal).",
            "3. « Les différences nous rendent plus forts / tolérants / unis. » ➔ adjectif qualificatif attribut décrivant l'état provoqué par les différences."
          ]
        }
      ]
    },
    {
      title: '5. CONJUGAISON - LES VERBES « ÊTRE » ET « AVOIR » AU PASSÉ COMPOSÉ',
      content: [
        "Le passé composé est un temps composé du mode indicatif employé pour exprimer un fait passé achevé au moment où l'on parle. Il se construit avec l'auxiliaire (être ou avoir) au présent de l'indicatif suivi du participe passé du verbe conjugué (« été » pour être, « eu » pour avoir)."
      ],
      table: {
        headers: ['Pronom personnel', 'Verbe ÊTRE au passé composé', 'Verbe AVOIR au passé composé'],
        rows: [
          ["J' / Je", "j'ai été", "j'ai eu"],
          ['Tu', 'tu as été', 'tu as eu'],
          ['Il / Elle / On', 'il / elle / on a été', 'il / elle / on a eu'],
          ['Nous', 'nous avons été', 'nous avons eu'],
          ['Vous', 'vous avez été', 'vous avez eu'],
          ['Ils / Elles', 'ils / elles ont été', 'ils / elles ont eu']
        ]
      },
      subsections: [
        {
          subtitle: 'Exercices de transformation au passé composé',
          content: [
            "Consigne : Mettez les phrases suivantes au passé composé :",
            "• Phrase 1 : « Le lapin est sage et attentif. » ➔ « Le lapin a été sage et attentif. »",
            "• Phrase 2 : « Nous avons de la patience envers nos camarades. » ➔ « Nous avons eu de la patience envers nos camarades. »",
            "• Phrase 3 : « Tu es respectueux des coutumes. » ➔ « Tu as été respectueux des coutumes. »",
            "• Phrase 4 : « Les élèves ont une grande volonté de s'entraider. » ➔ « Les élèves ont eu une grande volonté de s'entraider. »"
          ]
        }
      ]
    },
    {
      title: '6. STRUCTURES SYNTAXIQUES',
      content: [
        "Deux structures syntaxiques majeures sont à acquérir pour formuler des propositions complètes à l'écrit et à l'oral :",
        "• Structure 1 : « participer à quelque chose »",
        "  - Signification : prendre part activement à un événement, une activité ou un travail commun.",
        "  - Exemple : « Les élèves de 6ème participent à la semaine de la tolérance. »",
        "• Structure 2 : « intervenir pour + infinitif »",
        "  - Signification : agir ou prendre la parole afin d'accomplir une action déterminée.",
        "  - Exemple : « Le maître intervient pour réconcilier les deux camarades en désaccord. »"
      ]
    },
    {
      title: '7. LEXIQUE DU THÈME (PAIX ET TOLÉRANCE)',
      content: [
        "Vocabulaire fondamental à maîtriser et à réinvestir dans les productions écrites :",
        "• la taille : dimension ou hauteur d'une personne ou d'un être vivant (être grand, moyen ou petit).",
        "• les différences : ensemble des particularités physiques, culturelles ou de caractère qui distinguent les individus les uns des autres.",
        "• la tolérance : attitude d'ouverture d'esprit consistant à respecter les opinions, les croyances et les manières d'être différentes des siennes.",
        "• accepter : accueillir favorablement, reconnaître la légitimité d'une situation ou d'une personne sans la rejeter.",
        "• respecter : traiter avec déférence et considération autrui et ne pas porter atteinte à sa dignité."
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : Les Adjectifs Qualificatifs Épithètes et Attributs',
    root: 'L’ADJECTIF QUALIFICATIF',
    branches: [
      {
        name: 'FONCTION ÉPITHÈTE',
        subtitle: 'Directement rattaché au nom',
        items: [
          'Placé avant ou après le nom (dans le GN)',
          'Aucun verbe entre le nom et l’adjectif',
          'Supprimable sans altérer la grammaire',
          'Ex: un petit lapin, une grande différence'
        ]
      },
      {
        name: 'FONCTION ATTRIBUT',
        subtitle: 'Relié au sujet par un verbe d’état',
        items: [
          'Verbes d’état : être, paraître, sembler, devenir, rester...',
          'Non supprimable (élément essentiel du GV)',
          'S’accorde en genre et en nombre avec le sujet',
          'Ex: Le lapin est petit, Les enfants semblent différents'
        ]
      },
      {
        name: 'CONJUGAISON & THÈME',
        subtitle: 'Passé composé & Tolérance',
        items: [
          'Être : j’ai été, tu as été, nous avons été...',
          'Avoir : j’ai eu, tu as eu, nous avons eu...',
          'Structures : participer à, intervenir pour + inf.',
          'Lexique : taille, différences, tolérance, respecter'
        ]
      }
    ]
  },
  conclusion: "L'adjectif qualificatif permet de colorer et de préciser notre expression. Bien différencier l'adjectif épithète (accolé au nom) de l'adjectif attribut (relié par un verbe d'état) est une règle clé de grammaire en 6ème. Conjuguée aux valeurs de tolérance et d'acceptation d'autrui, cette leçon arme l'élève pour une rédaction riche, bienveillante et rigoureuse.",
  fullText: `LEÇON 8 : LES ADJECTIFS QUALIFICATIFS « ÉPITHÈTES » ET « ATTRIBUTS »

Thème : Paix et Tolérance
Sous-thème : Accepter les autres

1. Lecture suivie
Texte n°7 : Le petit lapin blanc
- Lecture expressive du texte
- Contrôle de la compréhension : répondre à des questions sur le texte
- Mettre en correspondance le texte et les images

2. Grammaire
Les adjectifs qualificatifs épithètes et attributs
- Définition : L’adjectif qualificatif est un mot variable qui donne une qualité ou un défaut au nom. Il s’accorde en genre et en nombre avec le nom.
- Épithète : L’adjectif est placé directement à côté du nom qu’il qualifie, sans verbe.
  Exemples : un petit lapin, une grande différence, des enfants tolérants
- Attribut : L’adjectif est séparé du nom par un verbe d’état : être, paraître, sembler, devenir, rester, avoir l’air.
  Exemples : Le lapin est petit. Les enfants semblent différents. Elle est devenue tolérante.

3. Manipulation - Recherche
Dans le texte Le petit lapin blanc, relever 5 adjectifs épithètes et 5 adjectifs attributs.

4. Manipulation - Fixation
Compléter avec un adjectif qualificatif :
1. Ce garçon est...
2. J’ai vu une fille...
3. Les différences nous rendent...

5. Conjugaison
Les verbes « être » et « avoir » au passé composé
- être : j’ai été, tu as été, il/elle a été, nous avons été, vous avez été, ils/elles ont été
- avoir : j’ai eu, tu as eu, il/elle a eu, nous avons eu, vous avez eu, ils/elles ont eu
Exercices de transformation de phrases au passé composé.

6. Structures
- participer à quelque chose
- intervenir pour + infinitif

7. Lexique
la taille, les différences, la tolérance, accepter, respecter`
};

export const LESSON_10_FRANCAIS_6EME: LessonContent = {
  id: 'francais-6eme-lecon-10',
  number: 'LEÇON 10',
  title: 'LA PHRASE INTERROGATIVE AVEC « QUE » ET INVERSION DU SUJET',
  subject: 'Français',
  classLevel: '6ème',
  introduction: "Thème : Paix et Tolérance | Sous-thème : Accepter les autres.\nSavoir interroger avec justesse et courtoisie est indispensable pour instaurer le dialogue, désamorcer les conflits et comprendre les différences. La phrase interrogative permet de demander une information, d'ouvrir une discussion ou de solliciter l'avis d'autrui. Cette leçon aborde deux mécanismes fondamentaux de la syntaxe interrogative soignée en 6ème : l'emploi du pronom interrogatif « que » (remplaçant un COD) et la règle de l'inversion du sujet (avec le trait d'union obligatoire et l'insertion du -t- euphonique).",
  sections: [
    {
      title: '1. GRAMMAIRE - LA PHRASE INTERROGATIVE',
      content: [
        "La phrase interrogative se termine à l'écrit par un point d'interrogation (?) et sert à poser une question. En registre soutenu et standard, elle obéit à des règles de construction précises."
      ],
      subsections: [
        {
          subtitle: 'A. L’interrogation avec « que »',
          content: [
            "• Rôle grammatical : « Que » est un pronom interrogatif qui remplace un Complément d'Objet Direct (COD).",
            "• Position : Il se place obligatoirement en tête de phrase interrogative.",
            "• Élision : Devant un mot commençant par une voyelle ou un 'h' muet, « que » s'élide en « qu' ».",
            "Exemples officiels du cours :",
            "• « Que fais-tu ? » ➔ Tu fais quoi ? ('Que' remplace le COD de l'action).",
            "• « Que veux-tu ? » ➔ Tu veux quoi ?",
            "• « Que devons-nous accepter ? » ➔ Nous devons accepter quoi ?",
            "• « Qu’exiges-tu de tes camarades ? » ➔ Élision devant voyelle."
          ]
        },
        {
          subtitle: 'B. L’inversion du sujet',
          content: [
            "• Principe : Pour former une question soignée, on inverse la place ordinaire du verbe et du pronom personnel sujet (le verbe se place en premier, suivi du pronom sujet).",
            "• Règle 1 (Trait d'union) : On met toujours un trait d’union entre le verbe conjugué et le pronom sujet inversé.",
            "  Exemple : « Parles-tu ? » / « Venez-vous ? » / « Écoutez-vous ? »",
            "• Règle 2 (Le « -t- » euphonique) : Lorsque le verbe se termine par une voyelle (notamment à la 3ème personne du singulier avec il, elle ou on) et que le pronom commence par une voyelle, on ajoute un « -t- » euphonique entre deux traits d'union pour éviter la rencontre heurtée de deux sons voyelles.",
            "  Exemples : « Aime-t-il ? » (et non 'aime il') | « Parle-t-elle ? » (et non 'parle elle')",
            "Exemples de transformation du cours :",
            "• Phrase déclarative : « Tu acceptes » ➔ Phrase interrogative : « Acceptes-tu ? »",
            "• Phrase déclarative : « Il refuse » ➔ Phrase interrogative : « Refuse-t-il ? »"
          ]
        }
      ]
    },
    {
      title: '2. MANIPULATION - RECHERCHE (TRANSFORMER EN INTERROGATIVES)',
      content: [
        "Consigne : Transformer les phrases affirmatives suivantes en phrases interrogatives avec inversion du sujet :",
        "1. « Tu veux te réconcilier. »",
        "2. « Il accepte les différences. »",
        "3. « Vous participez au projet. »"
      ],
      subsections: [
        {
          subtitle: 'Corrigé explicatif et analyse syntaxique',
          content: [
            "1. « Tu veux te réconcilier. » ➔ « Veux-tu te réconcilier ? »",
            "   • Analyse : Inversion simple du verbe 'veux' et du pronom sujet 'tu', reliés par un trait d'union.",
            "2. « Il accepte les différences. » ➔ « Accepte-t-il les différences ? »",
            "   • Analyse : Le verbe 'accepte' se termine par un 'e' (voyelle) et 'il' commence par un 'i' (voyelle). On intercale obligatoirement le '-t-' euphonique : 'Accepte-t-il'.",
            "3. « Vous participez au projet. » ➔ « Participez-vous au projet ? »",
            "   • Analyse : Inversion de 'participez' et 'vous' avec trait d'union et ajout du point d'interrogation final."
          ]
        }
      ]
    },
    {
      title: '3. MANIPULATION - FIXATION',
      content: [
        "Exercices d'entraînement à la formulation interrogative sur les thèmes de la tolérance et du respect mutuel :"
      ],
      subsections: [
        {
          subtitle: 'A. Poser 5 questions avec « que » sur le thème des différences',
          content: [
            "1. « Que penses-tu des différences culturelles entre les individus ? »",
            "2. « Que pouvons-nous apprendre des personnes qui ne vivent pas comme nous ? »",
            "3. « Que ressens-tu lorsqu'un camarade est victime de moqueries à l'école ? »",
            "4. « Que proposez-vous pour mieux accueillir les nouveaux élèves dans la classe ? »",
            "5. « Que signifie pour toi le respect de la liberté d'expression ? »"
          ]
        },
        {
          subtitle: 'B. Poser 5 questions avec inversion du sujet sur le thème de la tolérance',
          content: [
            "1. « Acceptes-tu de dialoguer pacifiquement avec ceux qui ne partagent pas ton opinion ? »",
            "2. « Respecte-t-il les croyances et les coutumes de ses voisins ? » (noter le '-t-' euphonique)",
            "3. « Soutenez-vous vos camarades en difficulté lors des travaux de groupe ? »",
            "4. « Refuse-t-elle la violence et les insultes dans la cour de récréation ? » (noter le '-t-' euphonique)",
            "5. « Encourageons-nous toujours l'entraide et le pardon au sein de notre collège ? »"
          ]
        }
      ]
    },
    {
      title: '4. STRUCTURES DE COMMUNICATION',
      content: [
        "Structures syntaxiques ciblées à maîtriser dans les dialogues et les rédactions :",
        "• « participer à quelque chose » : s'engager avec d'autres dans une activité commune.",
        "  Exemple : « Les élèves participent activement à la marche pour la fraternité. »",
        "• « intervenir pour + infinitif » : agir dans une intention précise pour aider ou pacifier.",
        "  Exemple : « Le principal du collège intervient pour rappeler les valeurs de la paix. »",
        "• « la phrase interrogative avec que et inversion du sujet » : structure complète alliant pronom et inversion.",
        "  Exemple : « Que préconisez-vous pour résoudre ce désaccord ? »"
      ]
    },
    {
      title: '5. LEXIQUE DU THÈME (PAIX ET TOLÉRANCE)',
      content: [
        "Vocabulaire fondamental pour argumenter, dialoguer et exprimer ses émotions :",
        "• les différences : ce qui singularise chaque être humain par rapport aux autres.",
        "• accepter : reconnaître la valeur de l'autre sans préjugé ni rejet.",
        "• refuser : dire non à l'intolérance, au racisme et à la discrimination.",
        "• se réconcilier : rétablir la bonne entente, la cordialité et la confiance après une dispute.",
        "• comprendre : se mettre à la place de l'autre pour saisir ses sentiments et ses besoins.",
        "• respecter : accorder de la considération à chacun et honorer ses droits fondamentaux."
      ]
    },
    {
      title: '6. OBJECTIFS DE COMMUNICATION',
      content: [
        "Compétences d'expression orale et écrite développées à travers la leçon :",
        "• Décrire des scènes : représenter avec clarté et précision des situations de vie collective (scène de solidarité, accueil d'un nouvel élève).",
        "• Travailler sur les répliques : construire des dialogues théâtraux ou romanesques authentiques, vivants et équilibrés entre deux interlocuteurs.",
        "• Reconstituer un paragraphe : ordonner logiquement des phrases en utilisant des connecteurs logiques et des formes de phrases variées.",
        "• Justifier un point de vue : défendre une prise de position avec des arguments clairs pour promouvoir la réconciliation et la tolérance."
      ]
    }
  ],
  diagram: {
    title: 'Schéma structural : La Phrase Interrogative avec « Que » et Inversion du Sujet',
    root: 'LA PHRASE INTERROGATIVE',
    branches: [
      {
        name: 'INTERROGATION AVEC « QUE »',
        subtitle: 'Pronom interrogatif remplaçant un COD',
        items: [
          'Placé obligatoirement en tête de phrase',
          'Élision en qu’ devant voyelle ou h muet',
          'Ex: Que fais-tu ? Que veux-tu ?',
          'Ex: Que devons-nous accepter ?'
        ]
      },
      {
        name: 'INVERSION DU SUJET',
        subtitle: 'Ordre Verbe + Pronom Sujet',
        items: [
          'Trait d’union obligatoire : Parles-tu ?',
          '-t- euphonique entre voyelles : Aime-t-il ? Refuse-t-il ?',
          'Transformation : Tu acceptes ➔ Acceptes-tu ?',
          'Point d’interrogation (?) final'
        ]
      },
      {
        name: 'COMMUNICATION & VALEURS',
        subtitle: 'Paix, Dialogue & Tolérance',
        items: [
          'Structures : participer à, intervenir pour + inf.',
          'Lexique : différences, accepter, refuser, réconcilier',
          'Objectifs : décrire des scènes, rédiger des répliques'
        ]
      }
    ]
  },
  conclusion: "La phrase interrogative construite avec « que » et l'inversion du sujet offre une formulation élégante et rigoureuse indispensable à la communication courtoise. En associant la technique grammaticale (trait d'union, -t- euphonique) aux thèmes civiques de la paix et de l'acceptation de l'autre, cette leçon permet aux élèves de 6ème de devenir des interlocuteurs respectueux et engagés.",
  fullText: `LEÇON 10 : LA PHRASE INTERROGATIVE AVEC « QUE » ET INVERSION DU SUJET

Thème : Paix et Tolérance
Sous-thème : Accepter les autres

1. Grammaire
La phrase interrogative
- L’interrogation avec « que »
  « Que » est un pronom interrogatif qui remplace un COD. Il se place en tête de phrase.
  Exemples : Que fais-tu ? Que veux-tu ? Que devons-nous accepter ?
- L’inversion du sujet
  Pour former une question, on inverse le verbe et le pronom sujet.
  Règles :
  1. Trait d’union entre le verbe et le pronom : Parles-tu ?
  2. Ajout d’un -t- euphonique entre voyelles à la 3ème personne : Aime-t-il ? Parle-t-elle ?
  Exemples : Tu acceptes → Acceptes-tu ? Il refuse → Refuse-t-il ?

2. Manipulation - Recherche
Transformer en interrogatives :
1. Tu veux te réconcilier.
2. Il accepte les différences.
3. Vous participez au projet.

3. Manipulation - Fixation
Poser 5 questions avec « que » sur le thème des différences.
Poser 5 questions avec inversion du sujet sur le thème de la tolérance.

4. Structures
- participer à quelque chose
- intervenir pour + infinitif
- la phrase interrogative avec « que » et inversion du sujet

5. Lexique
les différences, accepter, refuser, se réconcilier, comprendre, respecter

6. Objectifs de communication
- décrire des scènes
- travailler sur les répliques
- reconstituer un paragraphe
- justifier un point de vue`
};
