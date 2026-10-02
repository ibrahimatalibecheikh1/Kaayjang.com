import { LessonContent } from './courses';
import { SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ } from './diagrams_1ere_svt';

// =========================================================================
// SVT PREMIÈRE S2 — PARTIE 3 : EXPRESSION DU GÉNOME ET REPRODUCTION (LEÇONS 15 À 21)
// Programme officiel conforme au Ministère de l'Éducation Nationale du Sénégal
// =========================================================================

export const LESSON_15_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-15',
  number: '15',
  title: 'LEÇON 15 : L\'EXPRESSION DU MESSAGE GÉNÉTIQUE : LA TRANSCRIPTION EN ARNm',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 3 : Information génétique et synthèse des protéines',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Du gène à l\'ARN messager dans le noyau des eucaryotes. Rôle de l\'ARN polymérase, étapes de l\'initiation, élongation et terminaison, maturation de l\'ARN pré-messager (épissage des introns).',
  introduction: 'Chez les eucaryotes, l\'ADN contenant les plans de fabrication de l\'organisme est confiné dans le noyau cellulaire, tandis que la machinerie d\'assemblage des protéines (les ribosomes) réside dans le cytoplasme. Il existe donc un intermédiaire moléculaire transitoire chargé de véhiculer l\'information génétique du compartiment nucléaire vers le cytoplasme : l\'acide ribonucléique messager (ARNm). La transcription est le mécanisme enzymatique au cours duquel la séquence de nucléotides d\'un gène d\'ADN est recopiée fidèlement sous forme d\'une molécule d\'ARN monocaténaire complémentaire. Cette leçon examine la structure de l\'ARN, le fonctionnement de l\'ARN polymérase et le phénomène remarquable de l\'épissage alternatif.',
  conclusion: 'En conclusion, la transcription constitue la première étape incontournable de l\'expression des gènes. Chez les eucaryotes, la structure morcelée des gènes permet, grâce à l\'épissage alternatif des exons, de produire plusieurs protéines distinctes à partir d\'une unique séquence d\'ADN initiale, expliquant pourquoi le génome humain (environ 20 000 gènes) peut coder plus de 100 000 protéines fonctionnelles différentes.',
  sections: [
    {
      title: 'I. STRUCTURE CHIMIQUE COMPARÉE DE L\'ARN ET DE L\'ADN',
      content: [
        'L\'ARN diffère de l\'ADN par trois caractères biochimiques majeurs :',
        '• Le pentose : c\'est le D-ribose, possédant un groupement hydroxyle (-OH) sur son carbone C\'2 (au lieu d\'un hydrogène pour le désoxyribose).',
        '• Les bases azotées : l\'Uracile (U) remplace la Thymine (T). L\'uracile est une pyrimidine complémentaire de l\'adénine.',
        '• La conformation : l\'ARN est généralement constitué d\'une seule chaîne de ribonucléotides (monocaténaire), beaucoup plus courte et plus instable que la molécule d\'ADN.',
        'Les trois grandes classes d\'ARN cellulaires :',
        '1. L\'ARN messager (ARNm) : copie temporaire d\'un gène servant de matrice pour la traduction.',
        '2. L\'ARN de transfert (ARNt) : adapteur moléculaire en feuille de trèfle portant un acide aminé spécifique et un anticodon.',
        '3. L\'ARN ribosomique (ARNr) : composant structural et catalytique majeur des sous-unités du ribosome.'
      ]
    },
    {
      title: 'II. LES ÉTAPES DE LA TRANSCRIPTION DANS LE NOYAU',
      content: [
        'La transcription est catalysée par l\'ARN polymérase II et se décompose en trois étapes ordonnées :',
        '1. L\'Initiation :',
        'L\'ARN polymérase reconnaît une séquence nucléotidique spécifique située en amont du gène appelée promoteur (boîte TATA). Elle se fixe avec l\'aide de facteurs de transcription généraux et écarte localement les deux brins de la double hélice d\'ADN, créant une bulle de transcription.',
        '2. L\'Élongation :',
        'L\'ARN polymérase se déplace le long du brin matrice (brin transcrit orienté 3\' → 5\') et polymérise les ribonucléotides libres présents dans le nucléoplasme par complémentarité de bases (A s\'apparie avec U, T avec A, C avec G, G avec C). La synthèse de l\'ARN s\'effectue rigoureusement dans le sens 5\' vers 3\'. Le brin d\'ARN néoformé est identique au brin non transcrit (brin codant), à l\'exception du remplacement de T par U.',
        '3. La Terminaison :',
        'L\'enzyme rencontre un signal de terminaison (signal de polyadénylation), libère le transcrit primaire d\'ARN et se détache de la matrice d\'ADN, qui se referme instantanément en double hélice.'
      ]
    },
    {
      title: 'III. LA MATURATION DU TRANSCRIT PRIMAIRE CHEZ LES EUCARYOTES',
      content: [
        'Chez les eucaryotes, l\'ARN issu de la transcription est un ARN pré-messager qui doit subir une maturation nucléaire avant son exportation vers le cytoplasme :',
        '• Ajout d\'une coiffe en 5\' (7-méthylguanosine) qui protège l\'ARNm des nucléases et facilite la reconnaissance par le ribosome.',
        '• Ajout d\'une queue poly-A en 3\' (longue chaîne de 100 à 250 adénines) stabilisant la molécule.',
        '• L\'Épissage : les gènes eucaryotes sont morcelés, composés d\'exons (séquences codantes) entrecoupés d\'introns (séquences non codantes). Un complexe ribonucléoprotéique géant appelé splicéosome excise avec une extrême précision les introns et suture bout à bout les exons.',
        '• L\'épissage alternatif : selon les types cellulaires ou les signaux physiologiques, certains exons peuvent être conservés ou éliminés, permettant à un même gène de coder plusieurs isoformes protéiques aux propriétés distinctes.'
      ]
    }
  ]
};

export const LESSON_16_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-16',
  number: '16',
  title: 'LEÇON 16 : LE CODE GÉNÉTIQUE ET LA TRADUCTION DES PROTÉINES',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 3 : Information génétique et synthèse des protéines',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Déchiffrage du code génétique universel et dégénéré. Mécanismes moléculaires de la traduction ribosomique dans le cytoplasme : initiation, élongation, translocation et terminaison.',
  introduction: 'La transcription a permis de recopier l\'information génétique sous forme d\'un message linéaire d\'ARN messager écrit dans l\'alphabet à 4 lettres des bases azotées (A, U, C, G). La traduction est le processus biochimique complexe par lequel la cellule convertit ce message nucléotidique en une séquence d\'acides aminés écrite dans l\'alphabet à 20 lettres des protéines. Ce passage d\'un langage à l\'autre s\'appuie sur un système de correspondance universel : le code génétique, et mobilise une usine macromoléculaire sophistiquée : le ribosome, assisté des ARN de transfert. Cette leçon décrypte les propriétés du code génétique et détaille pas à pas les trois étapes de la traduction ribosomique.',
  conclusion: 'En conclusion, la traduction permet la concrétisation phénotypique de l\'information génétique. Plusieurs ribosomes peuvent glisser simultanément sur une même molécule d\'ARNm, formant un polysome (polyribosome) qui démultiplie l\'efficacité de la synthèse protéique. Une fois synthétisée, la chaîne polypeptidique quitte le ribosome pour acquérir sa conformation tridimensionnelle fonctionnelle (repliement en hélice alpha et feuillet bêta) dans le réticulum endoplasmique et l\'appareil de Golgi.',
  sections: [
    {
      title: 'I. LES CARACTÉRISTIQUES FONDAMENTALES DU CODE GÉNÉTIQUE',
      content: [
        '1. Le concept de codon (triplet de bases) :',
        'Avec 4 bases différentes, des combinaisons de 1 base permettraient de coder seulement 4 acides aminés ; des doublets (4² = 16) resteraient insuffisants pour coder les 20 acides aminés du vivant. Il faut donc au minimum des triplets de bases (4³ = 64 codons possibles), ce qui est largement suffisant.',
        '2. Les propriétés cardinales du code génétique :',
        '• Dégénéré (ou redondant) : plusieurs codons différents peuvent coder le même acide aminé (synonymes). Par exemple, la leucine et l\'arginine sont codées chacune par 6 codons différents.',
        '• Non ambigu : un codon donné ne code jamais qu\'un seul et unique acide aminé précis.',
        '• Universel : à de très rares exceptions mitochondriales près, le même codon code le même acide aminé chez tous les êtres vivants, de la bactérie à l\'Homme (base de la transgénèse et du génie génétique).',
        '• Ponctué :',
        '  - Le codon d\'initiation AUG : code la Méthionine et indique au ribosome le début de la lecture.',
        '  - Trois codons STOP (non-sens) : UAA, UAG et UGA, qui ne correspondent à aucun acide aminé et déclenchent la fin de la traduction.'
      ]
    },
    {
      title: 'II. LES ACTEURS MAJEURS DE LA TRADUCTION',
      content: [
        '• L\'ARN messager : porteur de la séquence codante ordonnée en codons successifs.',
        '• Les ribosomes : complexes formés d\'ARNr et de dizaines de protéines, composés d\'une petite sous-unité (40S chez les eucaryotes, qui lit l\'ARNm) et d\'une grande sous-unité (60S, qui catalyse la formation des liaisons peptidiques). Ils possèdent deux sites de fixation fonctionnels : le site P (peptidyl) et le site A (aminoacyl).',
        '• Les ARN de transfert (ARNt) : molécules adaptatrices possédant à une extrémité un site de liaison spécifique pour un acide aminé donné, et à l\'autre extrémité une boucle portant un triplet de bases appelé anticodon, rigoureusement complémentaire du codon de l\'ARNm.',
        '• Énergie : sous forme de GTP et d\'ATP.',
        '• Facteurs protéiques d\'initiation, d\'élongation et de terminaison.'
      ]
    },
    {
      title: 'III. LES TROIS ÉTAPES DE LA SYNTHÈSE PROTÉIQUE',
      content: [
        '1. L\'Initiation :',
        'La petite sous-unité ribosomique se fixe à la coiffe 5\' de l\'ARNm et glisse jusqu\'à repérer le premier codon AUG. L\'ARNt initiateur portant la méthionine (Met) s\'apparie par son anticodon 3\'-UAC-5\' sur le codon AUG. La grande sous-unité ribosomique vient ensuite se clipser, plaçant l\'ARNt initiateur dans le site P du ribosome, le site A restant libre.',
        '2. L\'Élongation (cycle répétitif en 3 temps) :',
        '• Entrée d\'un nouvel ARNt chargé de son acide aminé dans le site A vacant, par reconnaissance spécifique codon-anticodon.',
        '• Formation de la liaison peptidique : l\'activité peptidyl-transférase de la grande sous-unité catalyse la création d\'une liaison peptidique entre la méthionine et le second acide aminé. La méthionine se détache de son ARNt.',
        '• Translocation : le ribosome avance d\'un codon (3 nucléotides) vers l\'extrémité 3\' de l\'ARNm. L\'ARNt déchargé passe dans le site de sortie E et est expulsé ; l\'ARNt portant le dipeptide glisse du site A vers le site P, libérant le site A pour l\'arrivée du codon suivant.',
        '3. La Terminaison :',
        'Lorsque le ribosome atteint l\'un des trois codons STOP (UAA, UAG, UGA), aucun ARNt ne possède d\'anticodon complémentaire. Un facteur de libération protéique (release factor) se fixe sur le site A. Il hydrolyse la liaison entre le polypeptide et le dernier ARNt, libérant la protéine mature dans le cytosol. Les deux sous-unités ribosomiques se dissocient.'
      ]
    }
  ]
};

export const LESSON_17_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-17',
  number: '17',
  title: 'LEÇON 17 : LES MUTATIONS GÉNÉTIQUES ET LEURS CONSÉQUENCES PHÉNOTYPIQUES',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 3 : Information génétique et synthèse des protéines',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Mutations ponctuelles par substitution, délétion ou insertion. Mutations silencieuses, faux-sens et non-sens. Étude clinique et génétique de la drépanocytose (mutation HbS) au Sénégal.',
  introduction: 'L\'information génétique est d\'une grande stabilité grâce aux mécanismes de fidélité de l\'ADN polymérase et aux systèmes de réparation enzymatique de l\'ADN. Néanmoins, des altérations accidentelles de la séquence de nucléotides peuvent échapper à cette surveillance : ce sont les mutations génétiques. Lorsqu\'elles touchent les cellules de la lignée germinale (gamètes), ces mutations deviennent héréditaires et se transmettent à la descendance. Elles constituent le moteur ultime de la diversité des allèles et de l\'évolution biologique, mais sont également la cause de maladies génétiques sévères. Cette leçon examine la typologie des mutations et analyse en détail l\'exemple emblématique de la drépanocytose, une affection hématologique majeure en Afrique de l\'Ouest.',
  conclusion: 'En conclusion, les mutations génétiques illustrent de façon éclatante le lien direct entre la séquence de nucléotides de l\'ADN (génotype), la structure primaire de la protéine et les caractères observables de l\'organisme (phénotype moléculaire, cellulaire et macroscopique). La drépanocytose démontre en outre l\'impact de la sélection naturelle : la persistance à fréquence élevée de l\'allèle HbS dans les zones tropicales endémiques de paludisme comme le Sénégal s\'explique par l\'avantage sélectif conféré aux hétérozygotes AS, résistants aux formes mortelles de Plasmodium falciparum.',
  sections: [
    {
      title: 'I. TYPOLOGIE DES MUTATIONS PONCTUELLES DE L\'ADN',
      content: [
        'Une mutation ponctuelle est une modification portant sur une ou quelques paires de nucléotides d\'un gène :',
        '1. La substitution :',
        'Remplacement d\'un nucléotide par un autre. Selon ses répercussions sur la séquence protéique résultante :',
        '• Mutation silencieuse (synonyme) : le nouveau codon créé code le même acide aminé en vertu de la redondance du code génétique (ex. UUA → UUG codent tous deux la leucine). Aucun impact sur la protéine.',
        '• Mutation faux-sens : le nouveau codon spécifie un acide aminé différent. Si l\'acide aminé modifié se situe au cœur du site actif ou altère le repliement de la protéine, la fonction peut être anéantie (ex. drépanocytose).',
        '• Mutation non-sens : la substitution transforme un codon codant en un codon STOP prématuré (UAA, UAG, UGA), provoquant l\'arrêt brutal de la traduction et la synthèse d\'une protéine tronquée inactive.',
        '2. L\'insertion et la délétion (mutations décalantes / frameshift) :',
        'L\'ajout ou la perte d\'un ou deux nucléotides modifie le cadre de lecture des triplets en aval de la mutation, transformant toute la suite des acides aminés et aboutissant presque systématiquement à un codon STOP prématuré.'
      ]
    },
    {
      title: 'II. LES AGENTS MUTAGÈNES ET LES MÉCANISMES DE RÉPARATION',
      content: [
        'Si des mutations surviennent spontanément par tautomérie des bases ou dépurination, leur fréquence est considérablement accrue par l\'exposition à des agents mutagènes :',
        '• Agents physiques : rayonnements ionisants (rayons X, rayons gamma créant des cassures de brins), rayons ultraviolets (UV induisant la formation de dimères de thymine covalents).',
        '• Agents chimiques : benzopyrène de la fumée de tabac, aflatoxines produites par les moisissures des arachides mal séchées au Sahel, agents alkylants et analogues de bases.',
        '• Systèmes de réparation : les enzymes BER (Base Excision Repair) et NER (Nucleotide Excision Repair) détectent les anomalies, excisent le fragment altéré et resynthétisent le brin sain par une ADN polymérase guidée par le brin complémentaire.'
      ]
    },
    {
      title: 'III. ÉTUDE APPROFONDIE DE LA DRÉPANOCYTOSE (ANÉMIE FALCIFORME)',
      content: [
        'La drépanocytose est une maladie génétique autosomique récessive très répandue en Afrique subsaharienne (touchant environ 10 à 15% de porteurs sains au Sénégal) :',
        '1. Au niveau moléculaire (ADN et protéine) :',
        'Le gène codant la chaîne β de l\'hémoglobine, situé sur le chromosome 11, subit une substitution ponctuelle au 6e codon : le triplet GAG est transformé en GTG sur le brin non transcrit (CTC → CAC sur le brin transcrit). L\'acide glutamique normal (polaire, hydrophile) est remplacé par une valine (apolaire, hydrophobe).',
        '2. Au niveau cellulaire (hématies) :',
        'En condition d\'hypoxie (baisse de la pression partielle en dioxygène), l\'hémoglobine anormale HbS polymérise en longues fibres rigides qui déforment le globule rouge biconcave souple en faucille rigide et fragile (falciformation).',
        '3. Au niveau macroscopique (phénotype clinique) :',
        '• Anémie hémolytique chronique : les hématies falciformes sont précocement détruites dans la rate.',
        '• Crises vaso-occlusives (CVO) douloureuses : les globules rouges rigides s\'agglutinent et bloquent les capillaires sanguins, provoquant des ischémies tissulaires et des douleurs intenses osseuses et abdominales.',
        '• Vulnérabilité majeure aux infections bactériennes.'
      ]
    }
  ]
};

export const LESSON_18_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-18',
  number: '18',
  title: 'LEÇON 18 : L\'APPAREIL GÉNITAL MASCULIN ET LA SPERMATOGENÈSE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 4 : Reproduction et physiologie génitale',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Anatomie et histologie du testicule : tubes séminifères et tissu interstitiel de Leydig. Étapes cytologiques complètes de la spermatogenèse et de la spermiogenèse, structure du spermatozoïde.',
  introduction: 'La fonction reproductrice chez l\'Homme a pour mission biologique fondamentale d\'assurer la perpétuation de l\'espèce à travers la production, la maturation et l\'émission de gamètes hautement spécialisés. Chez le mâle, l\'appareil génital présente la double particularité d\'assurer une fonction exocrine (fabrication continue de spermatozoïdes haploïdes mobiles par la spermatogenèse) et une fonction endocrine (sécrétion de l\'hormone mâle majeure, la testostérone). Le testicule en constitue l\'organe central. Cette leçon examine l\'architecture microscopique du parenchyme testiculaire, retrace le parcours de différenciation des cellules germinales et décrit la cytologie fine du gamète mâle mature.',
  conclusion: 'En conclusion, la spermatogenèse est un processus biologique continu, intense et hautement régulé, produisant plus de 100 millions de spermatozoïdes par jour depuis la puberté jusqu\'à la fin de la vie. Les cellules de Sertoli jouent un rôle nourricier et protecteur capital en formant la barrière hémato-testiculaire, indispensable pour soustraire les spermatozoïdes haploïdes antigéniques à la destruction par le système immunitaire de l\'organisme.',
  sections: [
    {
      title: 'I. ANATOMIE ET HISTOLOGIE DU TESTICULE',
      content: [
        '1. Organisation macroscopique :',
        'Les deux testicules sont logés dans une poche cutanée externe, les bourses (scrotum), qui maintient les gonades à une température de 34 à 35°C (2 à 3°C inférieure à la température corporelle centrale), condition thermique absolue indispensable au bon déroulement de la spermatogenèse.',
        '2. Organisation histologique au microscope optique :',
        'Chaque testicule est subdivisé en 200 à 300 lobules testiculaires contenant chacun 1 à 4 tubes séminifères pelotonnés :',
        '• La paroi des tubes séminifères : tapissée d\'un épithélium germinal stratifié où les cellules germinales progressent de la périphérie (membrane basale) vers la lumière centrale du tube au cours de leur différenciation. Elle renferme également les cellules somatiques nourricières de Sertoli, géantes et riches en glycogène.',
        '• Le tissu interstitiel : situé dans les espaces intertubulaires, richement vascularisé, il contient les cellules endocrines de Leydig responsables de la stéroïdogenèse (synthèse de testostérone).'
      ]
    },
    {
      title: 'II. LES ÉTAPES DE LA SPERMATOGENÈSE ET DE LA SPERMIOGENÈSE',
      content: [
        'D\'une durée moyenne de 74 jours chez l\'Homme, la spermatogenèse se déroule de façon continue et centripète selon 4 phases successives :',
        '1. Phase de multiplication :',
        'À la périphérie du tube, les cellules souches diploïdes appelées spermatogonies souches (2n) se divisent par mitoses successives. Une cellule fille reste spermatogonie souche pour perpétuer le stock, l\'autre s\'engage dans la lignée en spermatogonie B.',
        '2. Phase de grandissement :',
        'Les spermatogonies B augmentent de volume cytoplasmique et accumulent des réserves nutritives pour devenir des spermatocytes de premier ordre (spermatocytes I, 2n chromosomes dupliqués).',
        '3. Phase de maturation (les deux divisions de la méiose) :',
        '• La première division (méiose réductionnelle) : chaque spermatocyte I (2n) donne naissance à deux spermatocytes de deuxième ordre (spermatocytes II), cellules haploïdes (n = 23 chromosomes à 2 chromatides).',
        '• La deuxième division (méiose équationnelle) : chaque spermatocyte II se divise rapidement sans réplication intermédiaire pour donner deux spermatides rondes haploïdes (n chromosomes simples). Un spermatocyte I produit donc 4 spermatides.',
        '4. Phase de différenciation (Spermiogenèse, durée 24 jours) :',
        'Transformation morphologique sans division cellulaire d\'une spermatide ronde en spermatozoïde filiforme adapté au mouvement :',
        '• Formation de l\'acrosome : fusion des vésicules de l\'appareil de Golgi contenant des enzymes hydrolytiques (hyaluronidase, acrosine) coiffant les deux tiers antérieurs du noyau.',
        '• Condensation extrême du noyau : remplacement des histones par des protamines.',
        '• Élongation du flagelle à partir du centriole distal constitué d\'un axonème microtubulaire (9 doublets périphériques + 1 paire centrale).',
        '• Manchon mitochondrial : regroupement des mitochondries en spirale serrée autour de la pièce intermédiaire pour fournir l\'ATP nécessaire au battement flagellaire.',
        '• Élimination du cytoplasme excédentaire sous forme de gouttelettes phagocytées par les cellules de Sertoli.'
      ]
    },
    {
      title: 'III. MORPHOLOGIE ET CARACTÉRISTIQUES DU GAMÈTE MÂLE',
      content: [
        'Le spermatozoïde mature mesure environ 60 µm de long et comprend trois parties :',
        '• La tête (5 µm) : aplatie et ovalaire, contenant le noyau haploïde coiffé de l\'acrosome.',
        '• La pièce intermédiaire (5 µm) : renferme les centrioles et la spirale mitochondriale génératrice d\'énergie.',
        '• La queue ou flagelle (50 µm) : appareil propulseur assurant une mobilité rectiligne active d\'environ 2 à 3 mm/minute dans le mucus utérin.',
        'Transit et maturation épididymaire :',
        'Les spermatozoïdes libérés dans la lumière des tubes séminifères (spermiation) sont immobiles et incapables de féconder. Ils transitent pendant 12 à 14 jours dans l\'épididyme où ils acquièrent leur mobilité flagellaire et subissent une décapacitation membranaire protectrice.'
      ]
    }
  ]
};

export const LESSON_19_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-19',
  number: '19',
  title: 'LEÇON 19 : RÉGULATION HORMONALE DE LA FONCTION REPRODUCTRICE MASCULINE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 4 : Reproduction et physiologie génitale',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'L\'axe hypothalamo-hypophysaire : rôle de la GnRH pulsatile, de la LH et de la FSH. Rétrocontrôle négatif exercé par la testostérone et l\'inhibine sur l\'axe gonadotrope.',
  introduction: 'La spermatogenèse et la sécrétion de testostérone ne sont pas des phénomènes autonomes ; elles sont placées sous le contrôle d\'un système neuro-endocrinien central complexe constitué par l\'hypothalamus et l\'antéhypophyse (axe hypothalamo-hypophyso-testiculaire). Chez l\'homme adulte, la production des gamètes et la concentration sanguine de testostérone demeurent remarquablement constantes tout au long de l\'année. Cette stabilité homéostatique repose sur un système régulateur à boucles de rétroaction négative (rétrocontrôle négatif) ajustant en permanence les sécrétions hormonales. Cette leçon analyse les hormones gonadotropes, leurs cellules cibles testiculaires et les mécanismes de régulation maintenant l\'équilibre physiologique masculin.',
  conclusion: 'En conclusion, la fonction reproductrice mâle est gouvernée par un axe neuro-hormonal hiérarchisé fonctionnant en régime pulsatile régulier. La testostérone et l\'inhibine exercent un frein physiologique permanent (rétrocontrôle négatif) sur le complexe hypothalamo-hypophysaire, garantissant une sécrétion hormonale et une production spermatique équilibrées sans fluctuations brutales.',
  sections: [
    {
      title: 'I. L\'AXE HYPOTHALAMO-HYPOPHYSAIRE CHEZ L\'HOMME',
      content: [
        '1. L\'Hypothalamus et la neurosécrétion de GnRH :',
        'Les neurones hypothalamiques sécrètent dans le système porte hypothalamo-hypophysaire une neurohormone peptidique : la gonadolibérine (GnRH). La sécrétion de GnRH est obligatoirement pulsatile (un pic toutes les 90 à 120 minutes chez l\'homme). Une administration continue de GnRH désensibilise les récepteurs hypophysaires et bloque totalement la production d\'hormones sexuelles.',
        '2. L\'Hypophyse antérieure (Adénohypophyse) et les gonadostimulines :',
        'En réponse aux décharges de GnRH, les cellules gonadotropes de l\'hypophyse antérieure sécrètent dans la circulation générale deux glycoprotéines complémentaires :',
        '• La LH (Luteinizing Hormone / Hormone lutéinisante) : stimule spécifiquement les cellules interstitielles de Leydig, favorisant la synthèse et la sécrétion de la testostérone.',
        '• La FSH (Follicle Stimulating Hormone / Hormone folliculo-stimulante) : cible directement les cellules de Sertoli situées dans les tubes séminifères, stimulant la spermatogenèse et la synthèse d\'une protéine de transport indispensable, l\'ABP (Androgen Binding Protein).'
      ]
    },
    {
      title: 'II. RÔLE DE LA TESTOSTÉRONE DANS L\'ORGANISME MASCULIN',
      content: [
        'La testostérone est une hormone stéroïde synthétisée à partir du cholestérol par les cellules de Leydig :',
        '• Action locale intratesticulaire : liée à l\'ABP sertolienne, elle est maintenue à une concentration élevée dans les tubes séminifères, condition indispensable à l\'accomplissement de la spermatogenèse.',
        '• Action périphérique : induit et maintient le développement des caractères sexuels primaires (croissance des organes génitaux, pénis, vésicules séminales, prostate) et secondaires (pilosité faciale et corporelle, mue de la voix par épaississement des cordes vocales, développement de la masse musculaire et squelettique, libido).'
      ]
    },
    {
      title: 'III. LES MÉCANISMES DU RÉTROCONTRÔLE NÉGATIF',
      content: [
        'Pour éviter tout emballement du système, le testicule renseigne en continu l\'axe hypothalamo-hypophysaire sur son niveau d\'activité :',
        '1. Rétrocontrôle par la testostérone :',
        'Lorsque la concentration plasmatique de testostérone dépasse la valeur consigne, elle agit en retour sur l\'hypothalamus en diminuant la fréquence des pulses de GnRH, et sur l\'hypophyse en freinant la libération de LH. Inversement, une baisse de testostérone lève l\'inhibition, entraînant une hausse de LH qui rétablit la sécrétion.',
        '2. Rétrocontrôle par l\'inhibine :',
        'Les cellules de Sertoli sécrètent une hormone peptidique, l\'inhibine, proportionnellement à l\'intensité de la spermatogenèse. L\'inhibine exerce un rétrocontrôle négatif sélectif sur l\'antéhypophyse pour inhiber la sécrétion de FSH sans affecter la LH.',
        'Expériences de castration :',
        'La castration bilatérale chez un animal mâle entraîne l\'effondrement de la testostéronémie et l\'élévation spectaculaire (hypersécrétion) des taux sanguins de LH et de FSH, prouvant de façon éclatante l\'existence permanente du rétrocontrôle négatif.'
      ]
    }
  ]
};

export const LESSON_20_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-20',
  number: '20',
  title: 'LEÇON 20 : L\'APPAREIL GÉNITAL FÉMININ ET L\'OVOGENÈSE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 4 : Reproduction et physiologie génitale',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Anatomie des voies génitales féminines et structure ovarienne. Les étapes de l\'ovogenèse comparée à la spermatogenèse, constitution des follicules ovariens et blocages méiotiques.',
  introduction: 'Contrairement à la reproduction masculine caractérisée par une production continue de milliards de spermatozoïdes depuis la puberté, la physiologie féminine se distingue par une discontinuité cyclique fondamentale et une réserve préétablie de cellules reproductrices constituée dès la vie embryonnaire. L\'ovaire, gonade femelle, assure la double fonction de produire de façon cyclique un unique gamète femelle fécondable (l\'ovocyte II) et de sécréter les hormones sexuelles femelles (œstrogènes et progestérone). Cette leçon étudie l\'anatomie de l\'appareil reproducteur féminin, les étapes de l\'ovogenèse et la dynamique de la folliculogenèse ovarienne.',
  conclusion: 'En conclusion, l\'ovogenèse est un processus discontinu, limité dans le temps (de la puberté à la ménopause) et marqué par deux blocages méiotiques successifs. Contrairement à la spermatogenèse qui produit 4 gamètes fonctionnels pour une cellule mère, l\'ovogenèse concentre la totalité du cytoplasme et des réserves macromoléculaires dans un seul gros gamète fonctionnel (l\'ovocyte II de 120 µm), au détriment de deux globules polaires dégénérescents.',
  sections: [
    {
      title: 'I. ANATOMIE DES VOIES GÉNITALES FÉMININES',
      content: [
        'L\'appareil génital féminin comprend :',
        '• Les deux ovaires : gonades ovoïdes situées dans la cavité pelvienne, composées d\'une zone médullaire centrale conjonctivo-vasculaire et d\'une zone corticale périphérique riche en follicules ovariens à divers stades d\'évolution.',
        '• Les trompes de Fallope (oviductes) : conduits ciliés et musculeux présentant un pavillon frangé coiffant l\'ovaire pour capter l\'ovocyte émis, et une ampoule tubaire, siège anatomique de la fécondation.',
        '• L\'utérus : organe musculaire creux (myomètre) tapissé d\'une muqueuse interne hautement vascularisée (l\'endomètre) où se déroule la nidation et le développement fœtal.',
        '• Le col utérin : sécrète la glaire cervicale dont la texture et le maillage varient au cours du cycle.',
        '• Le vagin et la vulve : organes de copulation et voie naturelle d\'expulsion lors de l\'accouchement.'
      ]
    },
    {
      title: 'II. LES ÉTAPES DE L\'OVOGENÈSE ET LES BLOCAGES MÉIOTIQUES',
      content: [
        '1. Phase de multiplication (Exclusivement pendant la vie fœtale intra-utérine) :',
        'Les ovogonies (2n) se multiplient par mitoses dans l\'ovaire de l\'embryon femelle jusqu\'au 7e mois de grossesse. À la naissance, le stock d\'environ 1 million d\'ovocytes est définitivement fixé ; il n\'y a plus aucune cellule souche ni division mitotique après la naissance.',
        '2. Phase de grandissement et 1er blocage méiotique :',
        'Les ovogonies s\'accroissent en ovocytes I (2n). Ils débutent la méiose I et s\'arrêtent au stade diplotène de la Prophase I. Ces ovocytes I restent quiescent au repos pendant 12 à 50 ans, entourés de cellules folliculaires aplaties pour former les follicules primordiaux.',
        '3. Phase de maturation (À partir de la puberté, à chaque cycle menstruel) :',
        'Sous l\'effet du pic de LH préovulatoire, un ovocyte I sélectionné reprend et achève sa division réductionnelle. La division du cytoplasme est très asymétrique : elle produit une cellule volumineuse gorgée de réserves, l\'ovocyte II (n), et une minuscule cellule avortée expulsée en périphérie, le 1er globule polaire.',
        '• 2e blocage méiotique : l\'ovocyte II entame aussitôt la division équationnelle mais se bloque en Métaphase II. C\'est cet ovocyte II bloqué en métaphase II qui est expulsé dans la trompe lors de l\'ovulation.',
        '• Achèvement de la méiose : la métaphase II ne s\'achève que s\'il y a pénétration d\'un spermatozoïde (fécondation), provoquant l\'expulsion du 2e globule polaire et la constitution du pronucléus femelle.'
      ]
    },
    {
      title: 'III. LA FOLLICULOGENÈSE OVARIENNE',
      content: [
        'Un follicule est une formation sphérique corticale abritant un ovocyte entouré de cellules somatiques folliculaires :',
        '• Follicule primordial : ovocyte I entouré d\'une seule couche de cellules folliculaires aplaties (35 µm).',
        '• Follicule primaire : les cellules folliculaires deviennent cubiques.',
        '• Follicule secondaire (plein) : multiplication cellulaire formant la granulosa autour d\'une membrane translucide glycoprotéique : la zone pellucide. Apparition des thèques interne et externe.',
        '• Follicule cavitaire (tertiaire) : apparition d\'une cavité remplie de liquide folliculaire appelée antrum.',
        '• Follicule mûr de De Graaf (20 mm) : volumineux, saillant à la surface de l\'ovaire, prêt à éclater au 14e jour du cycle sous l\'effet du pic de LH pour expulser l\'ovocyte II entouré de sa corona radiata : c\'est l\'ovulation.'
      ]
    }
  ]
};

export const LESSON_21_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-21',
  number: '21',
  title: 'LEÇON 21 : LE CYCLE OVARIEN, LE CYCLE UTÉRIN ET LES COURBES HORMONALES',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 4 : Reproduction et physiologie génitale',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '45 min de lecture approfondie',
  description: 'Synchronisation parfaite du cycle ovarien (phase folliculaire, ovulation, phase lutéale) et du cycle utérin (menstruation, prolifération, dentelle utérine). Analyse détaillée des courbes de LH, FSH, œstradiol et progestérone.',
  introduction: 'Chez la femme pubère, la physiologie génitale est scandée par une rythmicité mensuelle rigoureuse : le cycle menstruel, d\'une durée moyenne de 28 jours. Ce cycle résulte de la synchronisation étroite entre les transformations anatomiques de l\'ovaire (cycle ovarien) et les remaniements vasculaires et glandulaires de l\'endomètre (cycle utérin). Cette coordination est orchestrée par les variations cycliques des hormones hypophysaires (LH, FSH) et ovariennes (œstrogènes, progestérone). L\'apparition périodique des règles (menstruations) marque le début conventionnel du cycle (Jour 1). Cette leçon analyse pas à pas l\'évolution des courbes hormonales et les modifications tissulaires associées préparant l\'utérus à une éventuelle nidation.',
  conclusion: 'En conclusion, le cycle reproducteur féminin est un modèle biologique de précision remarquable synchronisant la maturation de la cellule fécondable avec la réceptivité maximale de l\'utérus. En l\'absence de fécondation, la chute hormonale brutale liée à la régression du corps jaune déclenche la nécrose de l\'endomètre et le retour des règles. En revanche, si la fécondation a lieu, la sécrétion précoce d\'HCG par le trophoblaste maintient le corps jaune actif et la sécrétion de progestérone, bloquant les règles et assurant le maintien de la grossesse.',
  image: {
    svgContent: SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ,
    alt: 'Courbes synchronisées du cycle hormonal féminin sur 28 jours',
    caption: 'Figure 3 : Évolution des hormones hypophysaires (LH, FSH), hormones ovariennes, cycle ovarien et dentelle utérine'
  },
  diagram: {
    title: 'Cycle Menstruel et Régulation Hormonale',
    svgContent: SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ
  },
  sections: [
    {
      title: 'I. LE CYCLE OVARIEN (PHASE FOLLICULAIRE, OVULATION, PHASE LUTÉALE)',
      content: [
        '1. Phase folliculaire (J1 à J14) :',
        'Sous l\'influence de la FSH hypophysaire, une cohorte de follicules tertiaires entame sa phase de croissance finale. Un seul follicule sélectionné devient dominant et mûrit en follicule de De Graaf, les autres dégénérant par atrésie folliculaire. La thèque interne et la granulosa du follicule en croissance sécrètent des quantités croissantes d\'œstrogènes (17-bêta-œstradiol).',
        '2. L\'Ovulation (Jour 14 pour un cycle standard de 28 jours) :',
        'Déclenchée par une brusque décharge d\'hormone lutéinisante (le pic de LH), la paroi du follicule de De Graaf s\'amincit sous l\'action d\'enzymes protéolytiques et se rompt. L\'ovocyte II bloqué en métaphase II est expulsé à la surface de l\'ovaire et aspiré par les cils du pavillon tubaire.',
        '3. Phase lutéale (ou lutéinique, J14 à J28) :',
        'Les cellules de la granulosa et de la thèque interne du follicule rompu se chargent d\'un pigment caroténoïde jaune (lutéine) et se transforment en corps jaune (corpus luteum). Le corps jaune sécrète massivement de la progestérone et des œstrogènes. En absence de fécondation, le corps jaune régresse spontanément vers le 24e-26e jour en une cicatrice fibreuse blanche (corpus albicans).'
      ]
    },
    {
      title: 'II. LE CYCLE UTÉRIN ET LES MODIFICATIONS DE L\'ENDOMÈTRE',
      content: [
        'L\'utérus réagit directement aux stimulations hormonales ovariennes à travers 3 phases :',
        '1. La phase menstruelle (Règles, J1 à J5) :',
        'En fin de cycle précédent, la chute des taux sanguins d\'œstrogènes et de progestérone provoque une vasoconstriction prolongée des artères spiralées de l\'endomètre, entraînant l\'ischémie, la nécrose et la desquamation de la zone superficielle (couche fonctionnelle). Le sang mêlé de débris tissulaires s\'écoule par le col : ce sont les règles.',
        '2. La phase proliférative (J6 à J14) :',
        'Sous l\'effet exclusif des œstrogènes sécrétés par le follicule mûr, la muqueuse utérine se régénère à partir de la couche basale résiduelle. Son épaisseur passe de 1 mm à 4-5 mm, les glandes en tube s\'allongent et les artérioles se développent.',
        '3. La phase sécrétoire (J15 à J28) :',
        'Sous l\'action conjuguée des œstrogènes et surtout de la progestérone sécrétée par le corps jaune, la muqueuse atteint 7 à 8 mm. Les glandes deviennent très sinueuses et spiralées, sécrétant un mucus riche en glycogène. Les artérioles forment des anses spiralées denses donnant à l\'endomètre l\'aspect caractéristique de dentelle utérine, optimale pour la nidation de l\'embryon.'
      ]
    },
    {
      title: 'III. ÉVOLUTION COMPARÉE DES PROFILS HORMONAUX SUR LA COURBE',
      content: [
        'L\'analyse graphique de la figure expérimentale met en évidence 4 courbes synchrones :',
        '• La courbe de FSH : taux modéré en début de phase folliculaire (recrutement folliculaire), fléchissement au milieu par rétrocontrôle négatif modéré, puis petit pic transitoire à J14 synchrone du pic de LH.',
        '• La courbe de LH : sécrétion basale faible durant tout le cycle, interrompue de façon spectaculaire par un pic aigu massif atteignant son zénith 24 à 36 heures avant l\'ovulation (signal ovulatoire déclencheur).',
        '• La courbe des œstrogènes (Œstradiol) : courbe bipyramidale présentant un premier sommet très élevé vers J12-J13 (sécrété par le follicule mûr), suivi d\'une baisse post-ovulatoire, puis d\'un second dôme plus arrondi en phase lutéale (sécrété par le corps jaune).',
        '• La courbe de progestérone : concentration quasi-nulle pendant toute la phase folliculaire (inférieure à 1 ng/mL), s\'élevant dès l\'ovulation pour former un dôme élevé culminant vers J21-J22 (phase lutéale, 10 à 20 ng/mL) avant de chuter brutalement si la nidation n\'a pas lieu.'
      ]
    }
  ]
};
