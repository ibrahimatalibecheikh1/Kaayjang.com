import { LessonContent } from './courses';
import {
  SVG_SVT_1ERE_CINETIQUE_ENZYME,
  SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE,
} from './diagrams_1ere_svt';

// =========================================================================
// SVT PREMIÈRE S2 — PARTIE 1 : CELLULE, DIVISION ET NUTRITION (LEÇONS 1 À 7)
// Programme officiel conforme au Ministère de l'Éducation Nationale du Sénégal
// =========================================================================

export const LESSON_1_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-1',
  number: '1',
  title: 'LEÇON 1 : ORGANISATION ULTRASTRUCTURALE ET COMPARTIMENTATION CELLULAIRE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 1 : Organisation cellulaire et division',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Étude comparative de l\'ultrastructure des cellules procaryotes et eucaryotes au microscope électronique à transmission. Rôle des organites cellulaires et compartimentation membranaire.',
  introduction: 'La cellule constitue l\'unité structurale, fonctionnelle et reproductive fondamentale de tous les êtres vivants. Si le microscope optique a permis au XIXe siècle d\'établir la théorie cellulaire énoncée par Schleiden et Schwann, c\'est l\'avènement de la microscopie électronique à transmission (MET) au XXe siècle qui a révélé l\'extraordinaire complexité de l\'ultrastructure cellulaire. Les observations ultrastructurales démontrent une dichotomie majeure du vivant entre les organismes procaryotes, dépourvus de noyau individualisé, et les organismes eucaryotes, caractérisés par une compartimentation membranaire interne poussée. Cette leçon vise à disséquer avec rigueur l\'organisation moléculaire et ultrastructurale de ces deux types d\'organisation, d\'établir le rôle précis de chaque organite et de comprendre comment cette compartimentation optimise le métabolisme cellulaire.',
  conclusion: 'En conclusion, la cellule eucaryote se distingue de la cellule procaryote par une compartimentation membranaire sophistiquée. Cette organisation spatiale permet l\'isolement de micro-environnements physico-chimiques spécifiques (pH acide dans les lysosomes, potentiel électrochimique transmembranaire dans les mitochondries et chloroplastes), évitant les interférences entre voies métaboliques antagonistes (par exemple la synthèse et la dégradation des acides gras). Cette compartimentation a constitué le saut évolutif majeur autorisant l\'émergence des organismes pluricellulaires complexes.',
  sections: [
    {
      title: 'I. LA THÉORIE CELLULAIRE ET LES ÉCHELLES D\'OBSERVATION EN BIOLOGIE',
      content: [
        '1. Les trois postulats fondamentaux de la théorie cellulaire :',
        '• Tout organisme vivant est constitué d\'une ou de plusieurs cellules (unité structurale).',
        '• La cellule est le siège de toutes les réactions biochimiques du métabolisme assurant le maintien de la vie (unité fonctionnelle).',
        '• Toute cellule provient obligatoirement d\'une cellule préexistante par division cellulaire (« Omnis cellula e cellula », Rudolf Virchow, 1855).',
        '2. Pouvoir de résolution et techniques d\'exploration ultrastructurale :',
        'L\'œil humain possède un pouvoir séparateur limite d\'environ 100 µm (0,1 mm). Le microscope photonique (optique), limité par la diffraction de la lumière visible, atteint une résolution maximale de 0,2 µm (200 nm), permettant d\'observer le contour cellulaire, le noyau, les chloroplastes et les grosses vacuoles. En revanche, le microscope électronique à transmission (MET), utilisant un faisceau d\'électrons accélérés de très courte longueur d\'onde, atteint une résolution de 0,2 nm (2 Å), dévoilant les membranes biologiques, les ribosomes de 20 nm, les crêtes mitochondriales et les complexes macromoléculaires.'
      ]
    },
    {
      title: 'II. L\'ORGANISATION ULTRASTRUCTURALE COMPARÉE : PROCARYOTES VERSUS EUCARYOTES',
      content: [
        '1. Les cellules procaryotes (exemple de la bactérie Escherichia coli) :',
        'Les procaryotes sont des cellules de petite taille (1 à 5 µm), délimitées par une membrane plasmique doublée extérieurement d\'une paroi rigide de peptidoglycane (muréine). Leur cytoplasme ne contient aucun organite délimité par une membrane. Le matériel génétique est constitué d\'une molécule d\'ADN circulaire unique, non associée à des histones, localisée dans une région non délimitée appelée nucléoïde. Elles possèdent de nombreux ribosomes libres de type 70S et parfois des plasmides (petites molécules d\'ADN extrachromosomique conférant la résistance aux antibiotiques).',
        '2. Les cellules eucaryotes (animales et végétales) :',
        'D\'une taille comprise entre 10 et 100 µm, elles renferment un noyau vrai entouré d\'une enveloppe nucléaire percée de pores, et un vaste réseau d\'endomembranes délimitant des compartiments spécialisés.'
      ]
    },
    {
      title: 'III. LES ORGANITES CELLULAIRES ET LEUR SPÉCIALISATION FONCTIONNELLE',
      content: [
        'A. Le noyau et l\'enveloppe nucléaire :',
        'Centre régulateur de la cellule, le noyau renferme la chromatine (complexe d\'ADN et de protéines histones). Il est ceinturé par une double membrane percée de complexes de pores nucléaires régulant les flux bidirectionnels de macromolécules (ARN messagers vers le cytoplasme, protéines régulatrices vers le noyau). Le nucléole est le siège de la transcription des ARN ribosomiques et de l\'assemblage des sous-unités des ribosomes.',
        'B. Le réticulum endoplasmique et l\'appareil de Golgi :',
        '• Réticulum endoplasmique granuleux (REG ou ergastoplasme) : réseau de sacs aplatis tapissés de ribosomes 80S, spécialisé dans la synthèse, le repliement et la maturation des protéines exportables ou membranaires.',
        '• Réticulum endoplasmique lisse (REL) : réseau tubulaire sans ribosomes, siège de la synthèse des lipides membranaires et des stéroïdes, et de la détoxification cellulaire.',
        '• Appareil de Golgi : empilement de saccules discoïdes (dictyosome) présentant une face cis (entrée) et une face trans (sortie). Il assure la maturation post-traductionnelle (glycosylation, sulfatation) et le tri-adressage des macromolécules par des vésicules de sécrétion.',
        'C. Les organites de conversion énergétique : Mitochondries et Chloroplastes :',
        '• La mitochondrie : présente chez toutes les cellules eucaryotes aérobies, délimitée par une double membrane dont l\'interne forme des invaginations (crêtes mitochondriales) riches en complexes de la chaîne respiratoire et en ATP synthétases. Sa matrice contient un ADN circulaire propre et des ribosomes 70S, vestige de son origine endosymbiotique.',
        '• Le chloroplaste : présent exclusivement chez les végétaux chlorophylliens, siège de la photosynthèse. Délimité par une double membrane renfermant le stroma et un réseau de thylakoïdes empilés en grana, contenant les pigments photosynthétiques (chlorophylles a et b, caroténoïdes).'
      ]
    },
    {
      title: 'IV. LES PARTICULARITÉS DE LA CELLULE VÉGÉTALE',
      content: [
        'La cellule végétale se distingue nettement de la cellule animale par trois structures majeures :',
        '1. La paroi pecto-cellulosique : enveloppe externe rigide composée de microfibrilles de cellulose enrobées dans une matrice de pectine et d\'hémicellulose. Elle confère une résistance mécanique remarquable, protège contre la lyse osmotique et maintient la forme cellulaire sous l\'effet de la pression de turgescence.',
        '2. La grande vacuole centrale : compartiment aqueux occupant jusqu\'à 90% du volume cellulaire, délimité par une membrane spécifique appelée tonoplaste. Elle stocke l\'eau, des ions minéraux, des pigments anthocyaniques et participe activement à la régulation osmotique et à la turgescence des tissus.',
        '3. Les plastes : chloroplastes (photosynthèse), amyloplastes (stockage d\'amidon dans les tubercules de manioc et de pomme de terre) et chromoplastes (pigments caroténoïdes des fleurs et fruits mûrs).'
      ]
    }
  ]
};

export const LESSON_2_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-2',
  number: '2',
  title: 'LEÇON 2 : LE CYCLE CELLULAIRE ET LA DIVISION MITOTIQUE CONFORME',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 1 : Organisation cellulaire et division',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Mécanismes moléculaires et cytologiques de l\'interphase (G1, S, G2) et des quatre phases de la mitose. Conservation rigoureuse de l\'information génétique et régulation du cycle.',
  introduction: 'La pérennité des espèces pluricellulaires et le renouvellement continu des tissus reposent sur la capacité des cellules somatiques à se reproduire à l\'identique par mitose. Chez l\'Homme, des milliards de divisions ont lieu quotidiennement pour renouveler les cellules sanguines, épidermiques et intestinales. La mitose s\'inscrit dans un ensemble ordonné d\'événements constituant le cycle cellulaire, comprenant l\'interphase (phases G1, S et G2) et la phase M de division. Cette leçon détaille avec une grande rigueur le comportement des chromosomes, le fuseau achromatique, le dédoublement de l\'ADN et les mécanismes de régulation qui garantissent la conformité génétique absolue entre la cellule mère et les deux cellules filles.',
  conclusion: 'En conclusion, la mitose est une division conforme qui assure la transmission intégrale du caryotype et du génome d\'une cellule mère à deux cellules filles génétiquement identiques. L\'alternance rigoureuse entre la duplication de l\'ADN en phase S et le partage équitable des chromatides sœurs en anaphase garantit la stabilité chromosomique à travers les générations cellulaires. Tout dysfonctionnement des points de contrôle du cycle cellulaire peut entraîner une prolifération anarchique et l\'apparition de processus tumoraux ou de cancers.',
  image: {
    svgContent: SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE,
    alt: 'Cycle cellulaire et étapes de la mitose',
    caption: 'Figure 4 : Les quatre étapes de la mitose (Prophase, Métaphase, Anaphase, Télophase) et la cinétique de l\'ADN (Q à 2Q)'
  },
  diagram: {
    title: 'Phases du Cycle Cellulaire et de la Mitose',
    svgContent: SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
  },
  sections: [
    {
      title: 'I. LES PHASES DE L\'INTERPHASE ET LA DUPLICATION DU MATÉRIEL GÉNÉTIQUE',
      content: [
        'L\'interphase est la période la plus longue du cycle cellulaire (environ 90% de la durée totale). Loin d\'être une phase de repos, elle se caractérise par une intense activité métabolique divisée en trois étapes successives :',
        '1. La phase G1 (Gap 1 - Première phase de croissance) :',
        'La cellule fraîchement issue de la division précédente augmente son volume cytoplasmique, synthétise massivement des ARN messagers et des protéines structurales et enzymatiques. Chaque chromosome est constitué d\'une seule chromatide (quantité d\'ADN = Q). La cellule évalue son environnement au niveau du point de restriction (point R) avant d\'engager la réplication.',
        '2. La phase S (Synthèse de l\'ADN) :',
        'Au cours de cette étape cruciale, la cellule réplique l\'intégralité de son ADN selon un mécanisme semi-conservatif catalysé par les ADN polymérases. Chaque molécule d\'ADN donne naissance à deux molécules filles identiques reliées par un centromère. La quantité d\'ADN passe progressivement de Q à 2Q. Chaque chromosome est désormais bichromatidien.',
        '3. La phase G2 (Gap 2 - Préparation à la mitose) :',
        'Poursuite de la croissance cellulaire, synthèse des protéines nécessaires au fuseau mitotique (notamment la tubuline) et duplication du centrosome (organisateur des microtubules chez les animaux). La quantité d\'ADN reste constante à 2Q.'
      ]
    },
    {
      title: 'II. LES QUATRE PHASES DE LA MITOSE (DIVISION CELLULAIRE)',
      content: [
        '1. La Prophase :',
        '• Condensation progressive de la chromatine : les molécules d\'ADN s\'enroulent autour des histones, rendant les chromosomes nettement visibles au microscope optique sous forme de bâtonnets dédoublés (deux chromatides sœurs unies par le centromère).',
        '• Migration des centrosomes : les deux centrosomes s\'écartent vers les deux pôles opposés de la cellule en polymérisant les microtubules pour former le fuseau achromatique (fuseau mitotique).',
        '• Désagrégation de l\'enveloppe nucléaire et disparition des nucléoles sous l\'action de phosphorylations enzymatiques.',
        '2. La Métaphase :',
        '• Les microtubules kinétochoriens du fuseau se fixent solidement sur les kinétochores situés de part et d\'autre des centromères des chromosomes.',
        '• Sous l\'effet de forces de traction équilibrées exercées depuis les deux pôles, tous les chromosomes s\'alignent rigoureusement dans le plan médian de la cellule.',
        '• Formation de la plaque équatoriale (ou plaque métaphasique). C\'est à ce stade que les chromosomes atteignent leur condensation maximale, permettant la réalisation des caryotypes.',
        '3. L\'Anaphase :',
        '• Rupture et clivage simultané et brutal des centromères unissant les deux chromatides sœurs de chaque chromosome.',
        '• Dépolymérisation des microtubules kinétochoriens provoquant la traction et la migration rapide de chaque chromatide simple (devenue chromosome fils indépendant) vers son pôle respectif : c\'est l\'ascension polaire.',
        '• Chaque lot polaire reçoit exactement le même nombre de chromosomes simples (2n = 46 chez l\'Homme).',
        '4. La Télophase et la Cytodiérèse :',
        '• Décondensation des chromosomes en chromatine diffuse.',
        '• Reconstitution de l\'enveloppe nucléaire autour de chaque lot de chromosomes et réapparition des nucléoles.',
        '• Dissolution complète du fuseau mitotique.',
        '• Cytodiérèse (cloisonnement cytoplasmique) : chez la cellule animale, elle s\'opère par un anneau contractile d\'actine et de myosine provoquant un sillon d\'étranglement centripète. Chez la cellule végétale, en raison de la rigidité de la paroi, la cytodiérèse s\'effectue par formation centrifuge d\'une nouvelle paroi appelée phragmoplaste à partir de vésicules golgiennes.'
      ]
    },
    {
      title: 'III. LES POINTS DE CONTRÔLE DU CYCLE CELLULAIRE ET LE CANCER',
      content: [
        'La progression du cycle cellulaire est strictement surveillée par des points de contrôle moléculaires (checkpoints) pilotés par des complexes enzymatiques formés de cyclines et de kinases dépendantes des cyclines (CDK) :',
        '• Point de contrôle G1/S : vérifie l\'absence de cassure ou d\'altération de l\'ADN avant la réplication. En cas d\'anomalie, la protéine p53 (gardienne du génome) bloque le cycle ou active l\'apoptose (mort cellulaire programmée).',
        '• Point de contrôle G2/M : s\'assure que l\'ADN a été fidèlement et intégralement dupliqué avant d\'autoriser l\'entrée en mitose.',
        '• Point de contrôle du fuseau (SAC en métaphase) : vérifie l\'attachement correct de tous les kinétochores aux fibres du fuseau avant de libérer la séparase déclenchant l\'anaphase.',
        'Une mutation touchant les gènes régulateurs (oncogènes ou gènes suppresseurs de tumeurs comme p53) lève ces verrous de sécurité et provoque des divisions incontrôlées à l\'origine des cancers.'
      ]
    }
  ]
};

export const LESSON_3_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-3',
  number: '3',
  title: 'LEÇON 3 : LA MÉIOSE ET LES BRASSAGES CHROMOSOMIQUES DE LA REPRODUCTION SEXUÉE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 1 : Organisation cellulaire et division',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '45 min de lecture approfondie',
  description: 'Étude des deux divisions de la méiose (réductionnelle et équationnelle). Mécanismes des brassages intrachromosomique (crossing-over) et interchromosomique, genèse de la diversité génétique.',
  introduction: 'La reproduction sexuée se caractérise par l\'alternance cyclique de deux événements biologiques fondamentaux : la méiose, qui divise par deux le nombre de chromosomes pour former des gamètes haploïdes (n), et la fécondation, qui réunit deux gamètes pour reconstituer une cellule-œuf diploïde (2n). La méiose ne se résume pas à une simple réduction chromosomique : elle constitue le moteur principal de la diversité génétique des populations grâce aux brassages chromosomiques. Cette leçon examine en profondeur la succession des deux divisions méiotiques, la formation des bivalents, les mécanismes moléculaires du crossing-over en prophase I et la ségrégation aléatoire des allèles en anaphase I.',
  conclusion: 'En conclusion, la méiose est un mécanisme biologique d\'une élégance remarquable qui combine réduction chromatique et création infinie de nouveauté génétique. Le brassage intrachromosomique multiplie de façon vertigineuse le nombre de combinaisons alléliques, tandis que le brassage interchromosomique produit 2^n gamètes différents pour une espèce à n paires de chromosomes. Chez l\'Homme (n = 23), cela représente plus de 8,4 millions de combinaisons gamétiques rien que par brassage interchromosomique, nombre amplifié par la fécondation fortuite qui porte à plus de 70 000 milliards le nombre de zygotes génétiquement uniques possibles pour un même couple.',
  sections: [
    {
      title: 'I. LA PREMIÈRE DIVISION MÉIOTIQUE : DIVISION RÉDUCTIONNELLE',
      content: [
        'Précédée d\'une interphase avec duplication de l\'ADN (Q → 2Q), la première division sépare les chromosomes homologues de chaque paire, faisant passer la cellule d\'un état diploïde (2n) à un état haploïde (n) avec des chromosomes bichromatidiens.',
        '1. La Prophase I (la plus longue et complexe) :',
        '• Appariement étroit des chromosomes homologues le long de leur axe : formation des complexes synaptonémiques créant des bivalents (ou tétrades de quatre chromatides).',
        '• Phénomène d\'enjambement (Crossing-over) : les chromatides non sœurs s\'entrecroisent au niveau de points de contact appelés chiasmas. Des cassures enzymatiques suivies d\'échanges réciproques de fragments de chromatides surviennent, créant de nouvelles combinaisons d\'allèles : c\'est le brassage intrachromosomique.',
        '2. La Métaphase I :',
        'Les paires de chromosomes homologues (bivalents) s\'alignent sur le plan équatorial du fuseau. Chaque chromosome d\'une paire fait face à un pôle opposé, les centromères étant situés de part et d\'autre du plan équatorial.',
        '3. L\'Anaphase I :',
        '• Séparation des chromosomes homologues sans clivage des centromères (les chromatides sœurs restent unies).',
        '• Migration aléatoire et indépendante de chaque chromosome homologue vers l\'un des deux pôles : c\'est le brassage interchromosomique.',
        '4. La Télophase I :',
        'Formation de deux cellules filles haploïdes (n chromosomes dupliqués à 2 chromatides chacune).'
      ]
    },
    {
      title: 'II. LA DEUXIÈME DIVISION MÉIOTIQUE : DIVISION ÉQUATIONNELLE',
      content: [
        'Elle se déroule immédiatement après la télophase I, sans interphase intermédiaire ni réplication d\'ADN.',
        '1. Prophase II : brève, les chromosomes déjà condensés se fixent au nouveau fuseau mitotique orienté perpendiculairement au précédent.',
        '2. Métaphase II : alignement des n chromosomes bichromatidiens sur la plaque équatoriale, centromères positionnés sur le plan équatorial.',
        '3. Anaphase II : clivage des centromères et séparation des chromatides sœurs, qui migrent vers les pôles opposés.',
        '4. Télophase II : décondensation de l\'ADN, reconstitution de 4 enveloppes nucléaires et cytodiérèse aboutissant à 4 cellules haploïdes (n) à chromosomes simples (quantité d\'ADN = Q/2).'
      ]
    },
    {
      title: 'III. L\'ANALYSE COMPARATIVE DES DEUX BRASSAGES GÉNÉTIQUES',
      content: [
        '• Brassage intrachromosomique : survient en Prophase I grâce aux crossing-over entre chromatides non-sœurs de chromosomes homologues. Il permet l\'échange d\'allèles entre gènes liés (situés sur le même chromosome). La fréquence de recombinaison dépend de la distance génétique entre les loci mesurée en centimorgans (cM).',
        '• Brassage interchromosomique : intervient en Anaphase I par la disjonction aléatoire et indépendante des chromosomes parentaux (d\'origine maternelle ou paternelle). Pour 2n chromosomes, il existe 2^n assortiments chromosomiques possibles dans les gamètes.',
        '• Amplification par la fécondation : la rencontre aléatoire entre un spermatozoïde issu de 2^23 possibilités et un ovocyte issu de 2^23 possibilités multiplie ces combinaisons (2^23 × 2^23 ≈ 7 × 10^13 combinaisons), garantissant l\'unicité génétique absolue de chaque individu.'
      ]
    }
  ]
};

export const LESSON_4_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-4',
  number: '4',
  title: 'LEÇON 4 : LES ANOMALIES CHROMOSOMIQUES ET L\'ANALYSE DES CARYOTYPES HUMAINS',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 1 : Organisation cellulaire et division',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Techniques d\'établissement des caryotypes, anomalies de nombre (aneuploïdies : trisomies, monosomies) et anomalies de structure (délétions, translocations). Mécanismes de non-disjonction méiotique.',
  introduction: 'Le caryotype humain normal comporte 46 chromosomes organisés en 23 paires : 22 paires d\'autosomes identiques chez les deux sexes et une paire de gonosomes ou chromosomes sexuels (XX chez la femme, XY chez l\'homme). Lors de la gamétogenèse, des accidents méiotiques peuvent survenir, perturbant la répartition numérique des chromosomes ou altérant leur structure morphologique. Ces anomalies chromosomiques, souvent décelables dès le diagnostic prénatal, sont responsables de fausses couches spontanées précoces ou de syndromes congénitaux majeurs. Cette leçon aborde les étapes de réalisation d\'un caryotype, les mécanismes de non-disjonction méiotique et les principales aberrations chromosomiques humaines.',
  conclusion: 'En conclusion, l\'étude des caryotypes met en lumière la fragilité des mécanismes méiotiques. Les accidents de non-disjonction chromosomique en anaphase I ou II sont la cause directe des aneuploïdies viables (trisomie 21, Turner, Klinefelter) ou létales. L\'âge maternel avancé constitue le facteur de risque prédominant dans la survenue des trisomies par vieillissement des ovocytes bloqués en prophase I depuis la vie fœtale. Aujourd\'hui, le diagnostic prénatal non invasif (DPNI) sur ADN fœtal circulant dans le sang maternel permet un dépistage précoce très fiable de ces anomalies.',
  sections: [
    {
      title: 'I. PROTOCOLE D\'ÉTABLISSEMENT D\'UN CARYOTYPE HUMAIN',
      content: [
        'La réalisation d\'un caryotype se déroule selon un protocole expérimental rigoureux :',
        '1. Prélèvement cellulaire : sang veineux périphérique (lymphocytes T), liquide amniotique par amniocentèse ou villosités choriales pour le diagnostic prénatal.',
        '2. Mise en culture et stimulation mitogène : incubation à 37°C avec de la phytohémagglutinine (PHA) pour stimuler les mitoses.',
        '3. Blocage en métaphase : ajout de colchicine ou de colcémide, un poison du fuseau mitotique qui inhibe la polymérisation des microtubules et bloque les cellules en pleine métaphase.',
        '4. Choc hypotonique : passage dans une solution diluée pour faire gonfler les cellules d\'eau et disperser les chromosomes.',
        '5. Fixation, étalement sur lame, coloration en bandes (G-banding au Giemsa ou R-banding) et classement par taille décroissante, position du centromère (métacentrique, submétacentrique, acrocentrique) et motifs de bandes caractéristiques.'
      ]
    },
    {
      title: 'II. LES ANOMALIES DE NOMBRE : LES ANEUPLOÏDIES',
      content: [
        'Les aneuploïdies résultent d\'un défaut de disjonction des chromosomes homologues en anaphase I ou d\'un défaut de séparation des chromatides sœurs en anaphase II.',
        'A. Anomalies autosomiques :',
        '• La Trisomie 21 (Syndrome de Down) : formule chromosomique 47, XX, +21 ou 47, XY, +21. Cliniquement caractérisée par une hypotonie musculaire, un faciès évocateur (épicanthus, fentes palpébrales obliques), un pli palmaire transverse unique, un retard psychomoteur et une prédisposition aux malformations cardiaques.',
        '• Les trisomies 18 (syndrome d\'Edwards) et 13 (syndrome de Patau) : gravissimes, associées à des malformations viscérales multiples entraînant généralement le décès dans les premières semaines de vie.',
        'B. Anomalies gonosomiques (chromosomes sexuels) :',
        '• Syndrome de Turner (Monosomie X : 45, X0) : phénotype féminin, petite taille, impubérisme, ovaires rudimentaires fibreux entraînant une stérilité, cou palmé (pterygium colli).',
        '• Syndrome de Klinefelter (47, XXY) : phénotype masculin, grande taille, gynécomastie (développement des glandes mammaires), atrophie testiculaire avec azoospermie (absence de spermatozoïdes) et stérilité.'
      ]
    },
    {
      title: 'III. LES ANOMALIES DE STRUCTURE CHROMOSOMIQUE',
      content: [
        'Elles proviennent de cassures chromosomiques suivies de réarrangements anormaux :',
        '• La délétion : perte d\'un fragment chromosomique (exemple du syndrome du cri du chat dû à la délétion partielle du bras court du chromosome 5 : 46, XX, del(5p)).',
        '• La translocation réciproque : échange de segments entre deux chromosomes non homologues sans perte de matériel génétique (translocation équilibrée, le sujet est sain mais risque de transmettre des gamètes déséquilibrés).',
        '• La translocation robertsonienne : fusion de deux chromosomes acrocentriques (ex. 14 et 21), responsable d\'environ 4% des cas de trisomies 21 dites par translocation, transmissibles héréditairement.'
      ]
    }
  ]
};

export const LESSON_5_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-5',
  number: '5',
  title: 'LEÇON 5 : LES ALIMENTS, BESOINS NUTRITIONNELS ET ÉQUILIBRE ALIMENTAIRE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Classification des constituants alimentaires (macronutriments et micronutriments), valeur énergétique des aliments, ration alimentaire équilibrée et étude des pathologies nutritionnelles au Sénégal.',
  introduction: 'Pour assurer sa survie, sa croissance, son entretien tissulaire et ses dépenses énergétiques, l\'organisme humain doit impérativement puiser dans son environnement une grande variété de nutriments. Les aliments consommés constituent des mélanges complexes de principes nutritifs que la biochimie classe en macronutriments (glucides, lipides, protides) et micronutriments (sels minéraux, oligo-éléments, vitamines et eau). Une ration alimentaire inadéquate en quantité ou en qualité perturbe gravement l\'homéostasie corporelle. Cette leçon traite de la composition chimique des aliments, du calcul des bilans énergétiques et des règles de l\'équilibre nutritionnel, avec un regard attentif sur les réalités sanitaires de l\'Afrique subsaharienne.',
  conclusion: 'En conclusion, une ration alimentaire équilibrée doit satisfaire simultanément aux impératifs quantitatifs énergétiques et aux exigences qualitatives de l\'organisme. Au Sénégal, les politiques de santé publique visent à éradiquer la malnutrition protéino-énergétique infantile par la valorisation de produits locaux à haute valeur nutritionnelle (mil, niébé, feuilles de moringa, poudre de pain de singe / bouye) tout en luttant contre l\'urbanisation des régimes alimentaires favorisant l\'explosion du diabète et de l\'obésité chez l\'adulte.',
  sections: [
    {
      title: 'I. LES GROUPES D\'ALIMENTS ET LES CATÉGORIES DE NUTRIMENTS',
      content: [
        '1. Les macronutriments (fournisseurs d\'énergie et bâtisseurs) :',
        '• Les glucides : hydrates de carbone (sucres rapides oses et osides ; sucres lents polyosides comme l\'amidon). Rôle éminemment énergétique rapide. Valeur énergétique : 17 kJ/g (4 kcal/g).',
        '• Les lipides : triglycérides, phospholipides, cholestérol. Principale réserve d\'énergie de l\'organisme et constituants majeurs des membranes cellulaires. Rôle structural et énergétique élevé : 38 kJ/g (9 kcal/g).',
        '• Les protides : protéines et peptides formés d\'acides aminés. Rôle primordial plastique (bâtisseur de tissus, enzymes, anticorps, hémoglobine). 8 acides aminés sont dits essentiels chez l\'adulte (leucine, isoleucine, valine, thréonine, méthionine, phénylalanine, tryptophane, lysine) car non synthétisables par l\'organisme. Valeur : 17 kJ/g (4 kcal/g).',
        '2. Les micronutriments indispensables :',
        '• L\'eau : constituant majeur du corps humain (environ 65% du poids corporel), solvant universel et milieu de toutes les réactions cellulaires.',
        '• Les sels minéraux et oligo-éléments : calcium et phosphore (squelette et dents), fer (hème de l\'hémoglobine), iode (hormones thyroïdiennes), sodium et potassium (potentiel de membrane et conduction nerveuse).',
        '• Les vitamines : substances organiques actives à doses infimes, liposolubles (A, D, E, K) ou hydrosolubles (vitamines du groupe B et vitamine C).'
      ]
    },
    {
      title: 'II. LES BESOINS ÉNERGÉTIQUES ET LA RATION ALIMENTAIRE',
      content: [
        '1. Le métabolisme de base (MB) :',
        'Il représente la dépense énergétique minimale incompressible nécessaire au maintien des fonctions vitales de l\'organisme au repos absolu, à jeun depuis 12 heures, à neutralité thermique (20-22°C pour l\'homme habillé). Chez un adulte jeune de 70 kg, le MB est d\'environ 6 000 à 7 000 kJ/jour (1 400 à 1 700 kcal).',
        '2. Les facteurs de variation de la dépense énergétique totale :',
        '• L\'activité physique : coefficient multiplicateur majeur (sédentaire vs travailleur manuel ou sportif).',
        '• La thermorégulation : lutte contre le froid ou contre la chaleur excessive.',
        '• Les états physiologiques : croissance chez l\'enfant, grossesse et allaitement chez la femme.',
        '3. Règle de l\'équilibre nutritionnel (règle du 421 GPL) :',
        'Dans une ration équilibrée, l\'apport calorique quotidien moyen doit respecter la répartition recommandée : 50 à 55% de glucides, 30 à 35% de lipides et 12 à 15% de protéines (avec au moins 50% de protéines d\'origine animale ou issues de mélanges complémentaires céréales-légumineuses).'
      ]
    },
    {
      title: 'III. LES MALADIES NUTRITIONNELLES ET CARENTIELLES',
      content: [
        '• Le Kwashiorkor : malnutrition protéique sévère survenant souvent lors du sevrage brutal de l\'enfant remplacé par une bouillie exclusivement glucidique (mil, manioc). Signes : œdèmes des membres inférieurs et de la face, léthargie, cheveux roux décolorés et cassants, hépatomégalie stéatosique.',
        '• Le Marasme nutritionnel : sous-nutrition globale (déficit à la fois calorique et protéique). L\'enfant présente une fonte musculaire et adipeuse extrême (« peau sur les os »), un visage ridé de vieillard.',
        '• Les avitaminoses : scorbut (carence en vitamine C), rachitisme (carence en vitamine D et calcium entraînant une déformation osseuse), xérophtalmie et cécité crépusculaire (carence en vitamine A), béri-béri (carence en vitamine B1).'
      ]
    }
  ]
};

export const LESSON_6_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-6',
  number: '6',
  title: 'LEÇON 6 : LA DIGESTION ENZYMATIQUE ET L\'ABSORPTION INTESTINALE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Transformation mécanique et chimique des macromolécules alimentaires en nutriments assimilables le long du tube digestif. Mécanismes d\'absorption au niveau des villosités intestinales.',
  introduction: 'Les macromolécules ingérées lors de l\'alimentation (amidon, protéines volumineuses, lipides complexes) sont incapables de franchir la barrière épithéliale du tube digestif en raison de leur taille et de leur insolubilité. La digestion est le processus physiologique au cours duquel les aliments subissent une hydrolyse chimique progressive catalysée par des enzymes spécifiques tout au long de leur transit digestif. Les produits terminaux de cette fragmentation moléculaire, appelés nutriments (glucose, acides aminés, acides gras, monoglycérides), franchissent ensuite la paroi intestinale pour gagner le milieu intérieur : c\'est l\'absorption intestinale. Cette leçon retrace le trajet digestif et détaille la biochimie des hydrolyses et les voies d\'absorption sanguine et lymphatique.',
  conclusion: 'En conclusion, la digestion réalise une véritable simplification moléculaire transformant des polyosides, protéines et triglycérides en nutriments directement utilisables par les cellules. L\'intestin grêle, grâce à sa structure plissée démultipliée par les villosités et microvillosités (surface d\'échange supérieure à 200 m²), constitue la plateforme universelle d\'absorption où convergent deux voies complémentaires : la voie sanguine drainant les nutriments hydrosolubles directement vers le foie par la veine porte hépatique, et la voie lymphatique acheminant les lipides vers la circulation générale via le canal thoracique.',
  sections: [
    {
      title: 'I. LES PHÉNOMÈNES MÉCANIQUES ET CHIMIQUES LE LONG DU TRACTUS DIGESTIF',
      content: [
        '1. Dans la cavité buccale :',
        '• Action mécanique : mastication par les dents et insalivation formant le bol alimentaire.',
        '• Action chimique : l\'amylase salivaire (ptialine) hydrolyse l\'amidon cuit en un diholoside, le maltose, à pH voisin de 7.',
        '2. Dans l\'estomac :',
        '• Brassage par les contractions péristaltiques de la musculeuse gastrique.',
        '• Le suc gastrique sécrété par les glandes fundiques contient de l\'acide chlorhydrique (HCl créant un pH très acide entre 1,5 et 2) et du pepsinogène. En milieu acide, le pepsinogène s\'active en pepsine, une endopeptidase puissante qui découpe les longues chaînes polypeptidiques en peptides plus courts.',
        '3. Dans le duodénum et l\'intestin grêle (siège majeur de la digestion) :',
        'Le chyme acide est déversé dans le duodénum où il reçoit deux sécrétions capitales :',
        '• La bile sécrétée par le foie et stockée dans la vésicule biliaire : ne contient pas d\'enzymes, mais des sels biliaires qui émulsionnent les graisses en microgouttelettes, augmentant considérablement la surface de contact avec les lipases.',
        '• Le suc pancréatique (pH basique 8 tamponné par les bicarbonates) : renferme l\'amylase pancréatique (achève la dégradation de l\'amidon en maltose), la trypsine et la chymotrypsine (fragmentent les peptides en dipeptides et tripeptides), et la lipase pancréatique (hydrolyse les triglycérides en acides gras libres et glycérol).'
      ]
    },
    {
      title: 'II. L\'ÉQUIPEMENT ENZYMATIQUE DE LA BORDURE EN BROSSE',
      content: [
        'La membrane des entérocytes (cellules absorbantes de l\'épithélium intestinal) possède des microvillosités garnies d\'enzymes terminales ancrées dans la bordure en brosse :',
        '• Maltase : hydrolyse le maltose en 2 molécules de glucose.',
        '• Saccharase (invertase) : hydrolyse le saccharose en glucose et fructose.',
        '• Lactase : hydrolyse le lactose en glucose et galactose.',
        '• Peptidases (aminopeptidases et dipeptidases) : hydrolysent les petits peptides en acides aminés individuels.'
      ]
    },
    {
      title: 'III. L\'ABSORPTION INTESTINALE ET SES DEUX VOIES DE TRANSPORT',
      content: [
        '1. L\'adaptation anatomique de la muqueuse intestinale :',
        'La paroi de l\'intestin grêle présente trois niveaux successifs d\'amplification de surface : les valvules conniventes (replis circulaires), les villosités intestinales (1 mm de haut tapissées d\'un épithélium unistratifié richement vascularisé) et les microvillosités cellulaires. Cet ensemble confère à l\'intestin une surface d\'échange colossale de 200 à 300 m².',
        '2. Les deux voies de transport des nutriments :',
        '• La voie sanguine (veineuse) : empruntée par l\'eau, les sels minéraux, les vitamines hydrosolubles (B, C), les oses simples (glucose, galactose, fructose) et les acides aminés. Ils traversent l\'entérocyte par diffusion facilitée ou cotransport actif avec le Na+, gagnent les capillaires sanguins villositaires, rejoignent les veines mésentériques et sont collectés par la veine porte hépatique qui les dirige directement vers le foie pour stockage et régulation.',
        '• La voie lymphatique (chylifère) : empruntée par les acides gras à longue chaîne et les monoglycérides. Réestérifiés sous forme de triglycérides dans l\'entérocyte et associés à des protéines pour former des chylomicrons, ils pénètrent dans le canal chylifère central de la villosité, gagnent la citerne de Pecquet puis le canal thoracique qui se jette dans la veine sous-clavière gauche sans passer immédiatement par le foie.'
      ]
    }
  ]
};

export const LESSON_7_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-7',
  number: '7',
  title: 'LEÇON 7 : LES ENZYMES ET LA CINÉTIQUE ENZYMATIQUE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Nature protéique des biocatalyseurs, notion de site actif, formation du complexe enzyme-substrat [ES]. Étude approfondie de la courbe de cinétique de Michaelis-Menten (Vmax, Km), effet de la température, du pH et des inhibiteurs.',
  introduction: 'Toutes les transformations chimiques du métabolisme cellulaire s\'effectueraient à des vitesses infiniment lentes, incompatibles avec la vie, en l\'absence de catalyseurs biologiques. Les enzymes sont des macromolécules protéiques douées d\'un pouvoir catalytique exceptionnel, capables d\'accélérer les réactions de plusieurs millions de fois dans les conditions douces de température, de pression et de pH compatibles avec la matière vivante. Dotées d\'une double spécificité remarquable (spécificité de substrat et spécificité d\'action), les enzymes fonctionnent grâce à une région fonctionnelle restreinte appelée site actif. Cette leçon analyse avec précision les mécanismes d\'action des enzymes, interprète la courbe cinétique fondamentale de Michaelis-Menten et étudie les facteurs physico-chimiques et pharmacologiques modulant leur activité.',
  conclusion: 'En conclusion, les enzymes sont les chevilles ouvrières du métabolisme cellulaire. Le modèle cinétique de Michaelis-Menten démontre que la réaction est limitée par la formation du complexe intermédiaire [ES] et la saturation progressive des sites actifs. La constante de Michaelis (Km) mesure précisément l\'affinité de l\'enzyme pour son substrat, paramètre indispensable en pharmacologie pour le développement d\'inhibiteurs enzymatiques compétitifs ou allostériques ciblant spécifiquement des agents pathogènes.',
  image: {
    svgContent: SVG_SVT_1ERE_CINETIQUE_ENZYME,
    alt: 'Courbe de cinétique enzymatique et facteurs influençant la vitesse',
    caption: 'Figure 1 : Cinétique de Michaelis-Menten Vi = f([S]), Vmax, Km, et courbes d\'influence de la température et du pH'
  },
  diagram: {
    title: 'Cinétique Enzymatique et Régulation',
    svgContent: SVG_SVT_1ERE_CINETIQUE_ENZYME
  },
  sections: [
    {
      title: 'I. NATURE ET PROPRIÉTÉS GÉNÉRALES DES CATALYSEURS BIOLOGIQUES',
      content: [
        '1. Définition d\'un catalyseur :',
        'Un catalyseur est une substance qui accélère la vitesse d\'une réaction thermodynamiquement possible en abaissant son énergie d\'activation, sans modifier la constante d\'équilibre finale et en se retrouvant intact à la fin de la réaction.',
        '2. Les caractéristiques exclusives des enzymes :',
        '• Efficacité prodigieuse : agissent à des concentrations infimes (mille à un million de fois plus rapides que les catalyseurs chimiques minéraux).',
        '• Double spécificité :',
        '  - Spécificité de substrat : l\'enzyme ne reconnaît qu\'un seul substrat ou une famille très étroite de molécules isomères (ex. la lactase n\'hydrolyse que le lactose et est inactive sur le maltose ou le saccharose).',
        '  - Spécificité d\'action : pour un même substrat, une enzyme ne catalyse qu\'un seul type précis de réaction (hydrolyse, oxydo-réduction, phosphorylation, décarboxylation).'
      ]
    },
    {
      title: 'II. LE SITE ACTIF ET LE COMPLEXE ENZYME-SUBSTRAT [ES]',
      content: [
        'L\'action enzymatique repose sur la formation transitoire obligatoire d\'un complexe enzyme-substrat :',
        'E + S ⇄ [ES] → E + P (où E est l\'enzyme, S le substrat et P le produit).',
        '1. Organisation spatiale du site actif :',
        'Le site actif est une cavité ou crevasse tridimensionnelle à la surface de l\'enzyme, constituée de quelques acides aminés rapprochés par le repliement de la chaîne polypeptidique. Il comprend :',
        '• Le site de liaison (ou de reconnaissance) : reconnaît et immobilise le substrat par des liaisons faibles (hydrogène, ioniques, hydrophobes). Modèle de la « clé et serrure » d\'Emil Fischer, perfectionné par le modèle de « l\'ajustement induit » de Koshland (l\'enzyme adapte sa conformation lors de la liaison du substrat).',
        '• Le site catalytique : renferme les résidus d\'acides aminés qui participent directement à la rupture ou à la création de liaisons chimiques dans la molécule de substrat.'
      ]
    },
    {
      title: 'III. ÉTUDE DE LA CINÉTIQUE DE MICHAELIS-MENTEN ET INTERPRÉTATION DE LA COURBE',
      content: [
        '1. Allure de la courbe Vi = f([S]) à concentration enzymatique constante :',
        'La courbe de la vitesse initiale en fonction de la concentration en substrat présente une forme hyperbolique caractéristique divisée en trois segments :',
        '• À faible concentration en substrat ([S] << Km) : la vitesse initiale Vi est proportionnelle à [S] (phase linéaire d\'ordre 1). Beaucoup de sites actifs sont vacants.',
        '• À concentration moyenne : la vitesse augmente plus lentement, la courbe s\'infléchit.',
        '• À forte concentration en substrat ([S] >> Km) : la vitesse atteint un plateau limite asymptotique appelé Vitesse maximale (Vmax). Tous les sites actifs des molécules enzymatiques sont occupés en permanence (saturation de l\'enzyme, cinétique d\'ordre zéro).',
        '2. La constante de Michaelis (Km) :',
        'Elle correspond à la concentration en substrat pour laquelle la vitesse initiale est égale à la moitié de la vitesse maximale : Vi = Vmax / 2.',
        'Signification biologique de Km : Km est inversement proportionnel à l\'affinité de l\'enzyme pour son substrat. Plus la valeur de Km est faible, plus l\'affinité de l\'enzyme est élevée car une infime quantité de substrat suffit à saturer 50% des sites actifs.'
      ]
    },
    {
      title: 'IV. FACTEURS INFLUENÇANT L\'ACTIVITÉ ENZYMATIQUE',
      content: [
        '1. Effet de la température :',
        '• De 0°C à 37°C : la vitesse augmente avec la température par augmentation de l\'agitation thermique moléculaire et de la fréquence des collisions efficaces.',
        '• À 37-40°C chez l\'Homme : température optimale où la vitesse est maximale.',
        '• Au-delà de 55-60°C : chute brutale de l\'activité due à la dénaturation thermique irréversible de la protéine par rupture des liaisons faibles maintenant la structure tertiaire du site actif.',
        '2. Effet du pH du milieu :',
        'Chaque enzyme possède un pH optimum d\'activité où l\'ionisation des chaînes latérales du site actif est idéale. Exemples : la pepsine gastrique est optimale à pH 2 ; l\'amylase salivaire à pH 7 ; la trypsine pancréatique à pH 8,5. Les écarts extrêmes de pH entraînent la dénaturation de l\'enzyme.',
        '3. Effet des inhibiteurs :',
        '• Inhibiteur compétitif : molécule de structure analogue au substrat qui rivalise avec lui pour occuper le site actif. Augmente le Km apparent sans modifier Vmax (l\'inhibition peut être levée par un excès de substrat).',
        '• Inhibiteur non compétitif : se lie sur un site allostérique distinct du site actif, altérant la conformation catalytique de l\'enzyme. Diminue Vmax sans modifier le Km.'
      ]
    }
  ]
};
