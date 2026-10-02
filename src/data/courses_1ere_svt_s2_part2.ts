import { LessonContent } from './courses';
import {
  SVG_SVT_1ERE_SPECTRE_PHOTOSYNTHESE,
  SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
} from './diagrams_1ere_svt';

// =========================================================================
// SVT PREMIÈRE S2 — PARTIE 2 : BIOÉNERGÉTIQUE ET ADN (LEÇONS 8 À 14)
// Programme officiel conforme au Ministère de l'Éducation Nationale du Sénégal
// =========================================================================

export const LESSON_8_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-8',
  number: '8',
  title: 'LEÇON 8 : LA RESPIRATION CELLULAIRE ET LA GLYCOLYSE CYTOSOLIQUE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Voie aérobie de dégradation des molécules organiques. Étude détaillée de la glycolyse dans le hyaloplasme, équations chimiques, bilan en ATP et transporteurs réduits NADH, H+.',
  introduction: 'La vie cellulaire exige un apport continu d\'énergie libre immédiatement mobilisable sous forme d\'adénosine triphosphate (ATP). Pour produire cette monnaie énergétique universelle, les cellules eucaryotes hétérotrophes et autotrophes réalisent la respiration cellulaire, un ensemble complexe d\'oxydations phosphorylantes en présence de dioxygène conduisant à la minéralisation totale du glucose en dioxyde de carbone et en eau. La première étape obligatoire de ce catabolisme, commune à la respiration et aux fermentations, se déroule dans le hyaloplasme (cytosol) en dehors de tout organite : c\'est la glycolyse. Cette leçon analyse avec précision les étapes biochimiques de la glycolyse, ses rendements énergétiques et son rôle de plaque tournante métabolique.',
  conclusion: 'En conclusion, la glycolyse constitue la voie primitive universelle de dégradation des glucides, conservée chez tous les êtres vivants. Bien que son bilan énergétique net immédiat soit modeste (2 molécules d\'ATP par molécule de glucose), elle produit deux molécules de pyruvate à 3 carbones et deux coenzymes réduits NADH, H+ qui alimentent les étapes mitochondriales ultérieures de la respiration aérobie.',
  sections: [
    {
      title: 'I. VUE D\'ENSEMBLE DE LA RESPIRATION CELLULAIRE ET ÉQUATION GLOBALE',
      content: [
        '1. Définition biologique de la respiration :',
        'La respiration cellulaire est un processus catabolique aérobie d\'oxydo-réduction au cours duquel une molécule organique énergétique (le glucose C6H12O6) est totalement oxydée et dégradée en substances minérales dépourvues d\'énergie chimique (CO2 et H2O), avec libération d\'une quantité considérable d\'énergie captée sous forme d\'ATP.',
        '2. Équation chimique globale de la respiration du glucose :',
        'C6H12O6 + 6 O2 + 36 à 38 (ADP + Pi) → 6 CO2 + 6 H2O + 36 à 38 ATP + Chaleur.',
        'L\'oxydation complète d\'une mole de glucose libère 2 840 kJ d\'énergie libre standard. Avec une énergie d\'environ 30,5 kJ stockée par mole d\'ATP produite, le rendement thermodynamique de la respiration atteint près de 40%, ce qui est remarquablement élevé par rapport aux moteurs thermiques humains.'
      ]
    },
    {
      title: 'II. LES ÉTAPES BIOCHIMIQUES DE LA GLYCOLYSE DANS LE CYTOSOL',
      content: [
        'La glycolyse se déroule en milieu anaérobie dans le cytosol et comprend 10 réactions enzymatiques successives scindées en deux phases majeures :',
        '1. Phase d\'investissement énergétique (consommation de 2 ATP) :',
        '• Phosphorylation du glucose en glucose-6-phosphate par l\'hexokinase avec consommation d\'un premier ATP.',
        '• Isomérisation en fructose-6-phosphate.',
        '• Deuxième phosphorylation en fructose-1,6-bisphosphate par la phosphofructokinase-1 (PFK-1), enzyme régulatrice majeure, consommant un second ATP.',
        '• Clivage du squelette à 6 carbones en deux molécules de triose-phosphate : le glycéraldéhyde-3-phosphate (G3P) et la dihydroxyacétone-phosphate.',
        '2. Phase de libération d\'énergie (production de 4 ATP et 2 NADH, H+) :',
        'Pour chacune des deux molécules de G3P :',
        '• Oxydation par une déshydrogénase couplée à la réduction d\'un coenzyme NAD+ en NADH, H+, et incorporation d\'un phosphate inorganique pour former du 1,3-bisphosphoglycérate (1,3-BPG).',
        '• Synthèse d\'ATP par phosphorylation au niveau du substrat (formation de 3-phosphoglycérate).',
        '• Réarrangements intramoléculaires aboutissant au phosphoénolpyruvate (PEP).',
        '• Deuxième phosphorylation au niveau du substrat catalysée par la pyruvate kinase, générant un nouvel ATP et une molécule d\'acide pyruvique (pyruvate : CH3-CO-COOH).'
      ]
    },
    {
      title: 'III. BILAN MATÉRIEL ET ÉNERGÉTIQUE NET DE LA GLYCOLYSE',
      content: [
        'Pour une molécule de glucose dégradée (C6) :',
        '• 2 molécules de pyruvate (C3H4O3) produites.',
        '• 2 coenzymes réduits : 2 (NADH + H+).',
        '• 2 ATP nets produits (4 ATP synthétisés - 2 ATP investis).',
        'Équation stœchiométrique nette de la glycolyse :',
        'Glucose + 2 NAD+ + 2 ADP + 2 Pi → 2 Pyruvates + 2 (NADH, H+) + 2 ATP + 2 H2O.',
        'Destinée du pyruvate :',
        'En présence de dioxygène (aérobiose), le pyruvate pénètre activement dans la mitochondrie via un transporteur spécifique pour y subir l\'oxydation respiratoire. En absence d\'O2 (anaérobiose), il reste dans le cytoplasme et subit la fermentation.'
      ]
    }
  ]
};

export const LESSON_9_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-9',
  number: '9',
  title: 'LEÇON 9 : LE CYCLE DE KREBS ET LA CHAÎNE RESPIRATOIRE MITOCHONDRIALE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Décarboxylation oxydative du pyruvate, cycle de l\'acide citrique dans la matrice mitochondriale. Complexes de la chaîne respiratoire, gradient transmembranaire de protons et synthèse d\'ATP.',
  introduction: 'Alors que la glycolyse n\'extrait qu\'une fraction infime de l\'énergie contenue dans la molécule de glucose, la mitochondrie est la véritable « centrale énergétique » de la cellule eucaryote. C\'est au sein de cet organite à double membrane que s\'achève l\'oxydation intégrale des résidus carbonés et que s\'opère la production massive d\'ATP. La matrice mitochondriale héberge les enzymes de la décarboxylation du pyruvate et du cycle de Krebs (ou cycle de l\'acide citrique), tandis que la membrane interne mitochondriale héberge les complexes protéiques transporteurs d\'électrons de la chaîne respiratoire couplés aux sphères pédonculées (ATP synthétases). Cette leçon détaille avec une haute précision les mécanismes moléculaires de la phosphorylation oxydative.',
  conclusion: 'En conclusion, la mitochondrie réalise l\'oxydation terminale des nutriments organiques avec une efficacité stupéfiante. Par le cycle de Krebs, tous les carbones du glucose sont convertis en CO2 résiduel, tandis que leurs électrons et protons sont captés par le NAD+ et le FAD. La chaîne respiratoire oxyde ensuite ces coenzymes en utilisant le dioxygène comme accepteur final d\'électrons pour former de l\'eau, couplant ce flux à la synthèse de 32 à 34 molécules d\'ATP par la théorie chimio-osmotique de Peter Mitchell.',
  sections: [
    {
      title: 'I. LA DÉCARBOXYLATION OXYDATIVE DU PYRUVATE EN ACÉTYL-COENZYME A',
      content: [
        'Dans la matrice mitochondriale, chaque molécule de pyruvate subit une attaque par le complexe multi-enzymatique de la pyruvate déshydrogénase :',
        '• Décarboxylation : élimination d\'un carbone sous forme d\'une molécule de dioxyde de carbone (CO2).',
        '• Oxydation : transfert de deux électrons et deux protons au NAD+, formant un NADH, H+.',
        '• Liaison à la coenzyme A (CoA-SH) pour former une molécule d\'acétyl-CoA à 2 carbones à liaison thioester hautement énergétique.',
        'Équation pour 1 pyruvate : Pyruvate + CoA-SH + NAD+ → Acétyl-CoA + CO2 + NADH, H+.'
      ]
    },
    {
      title: 'II. LE CYCLE DE KREBS (CYCLE DE L\'ACIDE CITRIQUE) DANS LA MATRICE',
      content: [
        'Le cycle de Krebs est une boucle métabolique cyclique constituée de 8 réactions enzymatiques :',
        '1. Condensation initiale : l\'acétyl-CoA (2C) fusionne avec une molécule d\'oxaloacétate (4C) pour former une molécule de citrate (6C), libérant la coenzyme A.',
        '2. Isomérisation en isocitrate.',
        '3. Première décarboxylation oxydative : libération d\'un CO2 et production d\'un premier NADH, H+ pour former l\'α-cétoglutarate (5C).',
        '4. Deuxième décarboxylation oxydative : libération d\'un deuxième CO2 et formation d\'un second NADH, H+ pour donner le succinyl-CoA (4C).',
        '5. Phosphorylation au niveau du substrat : formation d\'un GTP (équivalent à 1 ATP) et de succinate.',
        '6. Oxydation du succinate en fumarate par la succinate déshydrogénase, avec réduction d\'un coenzyme FAD en FADH2.',
        '7. Hydratation en malate.',
        '8. Oxydation terminale du malate régénérant l\'oxaloacétate (4C), avec formation d\'un troisième NADH, H+.',
        'Bilan d\'un tour de cycle de Krebs (pour 1 acétyl-CoA) : 2 CO2 + 3 NADH, H+ + 1 FADH2 + 1 ATP.',
        'Pour 1 molécule de glucose d\'origine (soit 2 acétyl-CoA) : 4 CO2 + 6 NADH, H+ + 2 FADH2 + 2 ATP.'
      ]
    },
    {
      title: 'III. LA CHAÎNE RESPIRATOIRE ET LA THÉORIE CHIMIO-OSMOTIQUE DE MITCHELL',
      content: [
        '1. La chaîne de transport des électrons dans la membrane interne :',
        'La membrane interne contient 4 grands complexes enzymatiques (I, II, III, IV) et deux transporteurs mobiles (l\'ubiquinone/coenzyme Q et le cytochrome c) :',
        '• Les coenzymes réduits NADH, H+ et FADH2 cèdent leurs électrons de haute énergie au complexe I et II.',
        '• Les électrons circulent en cascade le long de transporteurs à potentiels d\'oxydo-réduction croissants.',
        '• Au complexe IV (cytochrome c oxydase), les électrons sont finalement cédés à l\'accepteur terminal, le dioxygène O2, qui se combine aux protons H+ pour former de l\'eau (H2O) : 1/2 O2 + 2 H+ + 2 e- → H2O.',
        '2. Le gradient électrochimique de protons et l\'ATP synthétase :',
        'L\'énergie libérée par le transfert d\'électrons est utilisée par les complexes I, III et IV pour pomper activement des protons H+ de la matrice vers l\'espace intermembranaire. Il en résulte un gradient électrochimique de protons (différence de pH et de potentiel électrique).',
        'Ces protons ne peuvent refluer vers la matrice qu\'à travers un canal spécifique constitué par la sphère pédonculée (l\'ATP synthétase). Ce flux de protons (force proton-motrice) entraîne la rotation d\'un rotor moléculaire qui catalyse la phosphorylation de l\'ADP : ADP + Pi → ATP.',
        'Rendement énergétique théorique : l\'oxydation d\'un NADH, H+ permet la synthèse d\'environ 2,5 à 3 ATP, tandis qu\'un FADH2 génère environ 1,5 à 2 ATP.',
        'Bilan global de la respiration complète d\'une molécule de glucose : 36 à 38 ATP.'
      ]
    }
  ]
};

export const LESSON_10_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-10',
  number: '10',
  title: 'LEÇON 10 : LES FERMENTATIONS CELLULAIRES ET VOIES ANAÉROBIES',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '30 min de lecture approfondie',
  description: 'Étude des fermentations alcoolique et lactique en anaérobiose. Mécanisme de régénération du NAD+, équations biochimiques, bilan énergétique comparatif avec la respiration et applications agro-alimentaires.',
  introduction: 'En l\'absence de dioxygène ou chez les organismes anaérobies stricts ou facultatifs (comme les levures et certaines bactéries lactiques), ainsi que dans les fibres musculaires squelettiques soumises à un effort intense et brutal, la chaîne respiratoire mitochondriale ne peut fonctionner faute d\'accepteur final d\'électrons. Dans ces conditions d\'anaérobiose, la glycolyse risquerait d\'être rapidement bloquée par épuisement des stocks de coenzymes oxydés NAD+. La fermentation constitue une voie métabolique alternative d\'urgence permettant la régénération vitale du NAD+ en transférant les électrons du NADH, H+ directement sur le pyruvate ou l\'un de ses dérivés. Cette leçon explore les fermentations alcoolique et lactique, compare leurs bilans et aborde leurs nombreuses applications traditionnelles et industrielles au Sénégal.',
  conclusion: 'En conclusion, les fermentations constituent des voies anaérobies de secours remarquables permettant la survie en milieu hypoxique ou anoxique. Contrairement à la respiration qui réalise une minéralisation totale avec un rendement d\'environ 38 ATP par glucose, la fermentation n\'effectue qu\'une dégradation incomplète laissant subsister des résidus organiques riches en énergie chimique latente (éthanol ou acide lactique), pour un rendement énergétique net de seulement 2 ATP par mole de glucose.',
  sections: [
    {
      title: 'I. LA NÉCESSITÉ BIOLOGIQUE DE LA RÉGÉNÉRATION DU NAD+',
      content: [
        'Lors de la glycolyse cytosolique, l\'oxydation du glycéraldéhyde-3-phosphate nécessite du coenzyme NAD+ sous sa forme oxydée :',
        '2 G3P + 2 NAD+ + 2 Pi → 2 (1,3-BPG) + 2 NADH, H+.',
        'La quantité intracellulaire de NAD+ étant très limitée, la glycolyse s\'interromprait quasi-instantanément si le NADH, H+ n\'était pas rapidement réoxydé en NAD+.',
        'En aérobiose, cette réoxydation est assurée par la chaîne respiratoire mitochondriale. En anaérobiose, elle est prise en charge par les enzymes fermentaires qui utilisent le pyruvate comme accepteur d\'électrons.'
      ]
    },
    {
      title: 'II. LA FERMENTATION ALCOOLIQUE (EXEMPLE DES LEVURES SACCHAROMYCES CEREVISIAE)',
      content: [
        'La fermentation alcoolique se déroule dans le hyaloplasme des levures et de certaines cellules végétales en anaérobiose :',
        '1. Étape de décarboxylation du pyruvate :',
        'Le pyruvate (3C) subit une décarboxylation catalysée par la pyruvate décarboxylase, libérant du dioxyde de carbone gazeux (CO2) et produisant de l\'acétaldéhyde (éthanal, 2C) :',
        'CH3-CO-COOH → CH3-CHO + CO2.',
        '2. Étape de réduction en éthanol :',
        'L\'acétaldéhyde est réduit en éthanol (alcool éthylique) par l\'alcool déshydrogénase, avec réoxydation simultanée d\'un NADH, H+ en NAD+ :',
        'CH3-CHO + NADH, H+ → CH3-CH2OH + NAD+.',
        'Équation globale de la fermentation alcoolique :',
        'C6H12O6 + 2 ADP + 2 Pi → 2 Éthanol (C2H5OH) + 2 CO2 + 2 ATP.',
        'Applications :',
        '• Panification : le CO2 dégagé forme des bulles qui font gonfler la pâte à pain.',
        '• Brasserie et vinification : production de boissons alcoolisées traditionnelles (comme le vin de palme / bunuk en Casamance).'
      ]
    },
    {
      title: 'III. LA FERMENTATION LACTIQUE ET LE MUSCLE EN HYPOXIE',
      content: [
        'La fermentation lactique s\'effectue sans production de CO2, par réduction directe du pyruvate :',
        '1. Réaction enzymatique :',
        'La lactate déshydrogénase (LDH) catalyse le transfert direct des électrons et protons du NADH, H+ sur le groupe carbonyle du pyruvate pour former de l\'acide lactique (ou lactate sous forme ionisée) :',
        'CH3-CO-COOH + NADH, H+ → CH3-CHOH-COOH + NAD+.',
        'Équation globale de la fermentation lactique :',
        'C6H12O6 + 2 ADP + 2 Pi → 2 Acide lactique (C3H6O3) + 2 ATP.',
        '2. Dans le muscle lors d\'un effort anaérobie violent (sprint) :',
        'Lorsque l\'apport en O2 par le système cardio-vasculaire devient insuffisant, les fibres musculaires glycolytiques rapides recourent à la fermentation lactique pour régénérer rapidement l\'ATP. L\'accumulation de lactate et l\'acidification intracellulaire (baisse de pH) contribuent à la fatigue musculaire et aux crampes.',
        '3. Applications agro-alimentaires au Sénégal :',
        'Fabrication des laits caillés traditionnels (lait caillé pasteurisé, sow) par les ferments lactiques (Lactobacillus bulgaricus, Streptococcus thermophilus) qui acidifient le milieu et provoquent la coagulation des caséines du lait.'
      ]
    }
  ]
};

export const LESSON_11_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-11',
  number: '11',
  title: 'LEÇON 11 : LA PHOTOSYNTHÈSE : LA PHASE PHOTOCHIMIQUE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Absorption des photons lumineux par les photosystèmes des thylakoïdes. Photolyse de l\'eau, chaîne de transfert d\'électrons et synthèse de NADPH et d\'ATP.',
  introduction: 'La biosphère terrestre dépend fondamentalement de la photosynthèse, le processus biologique par lequel les végétaux chlorophylliens, les algues et les cyanobactéries captent l\'énergie lumineuse des photons solaires pour synthétiser des molécules organiques hautement énergétiques à partir de dioxyde de carbone et d\'eau, tout en rejetant du dioxygène. Chez les eucaryotes végétaux, ce phénomène se localise dans les chloroplastes et s\'articule en deux phases complémentaires et indissociables : la phase photochimique (dite phase claire), dépendante de la lumière, localisée dans les membranes des thylakoïdes, et la phase non photochimique (dite phase sombre ou cycle de Calvin), indépendante de la lumière, localisée dans le stroma. Cette leçon analyse en profondeur les mécanismes biophysiques et biochimiques de la phase photochimique.',
  conclusion: 'En conclusion, la phase photochimique convertit l\'énergie radiative solaire en énergie chimique transitoire stable sous forme de deux molécules indispensables : l\'ATP (pouvoir phosphorylant) et le NADPH, H+ (pouvoir réducteur), tout en dégageant du dioxygène issu de l\'oxydation de l\'eau. Ces composés hautement énergétiques migrent immédiatement dans le stroma pour alimenter la réduction du dioxyde de carbone lors du cycle de Calvin.',
  image: {
    svgContent: SVG_SVT_1ERE_SPECTRE_PHOTOSYNTHESE,
    alt: 'Spectre d\'absorption de la chlorophylle et spectre d\'action photosynthétique',
    caption: 'Figure 5 : Spectres d\'absorption des pigments chlorophylliens (a et b) et spectre d\'action de la photosynthèse'
  },
  diagram: {
    title: 'Spectres de la Photosynthèse',
    svgContent: SVG_SVT_1ERE_SPECTRE_PHOTOSYNTHESE
  },
  sections: [
    {
      title: 'I. LOCALISATION ET PIGMENTS PHOTOSYNTHÉTIQUES',
      content: [
        '1. Ultrastructure du chloroplaste :',
        'Organite délimité par une double membrane renfermant un liquide riche en enzymes (le stroma) dans lequel baigne un réseau de sacs membranaires aplatis appelés thylakoïdes. Ces thylakoïdes s\'empilent par endroits en formant des grana.',
        '2. Les pigments chlorophylliens et caroténoïdes :',
        'Insérés dans la membrane phospholipidique des thylakoïdes, ils comprennent :',
        '• La chlorophylle a (pigment principal au cœur des centres réactionnels).',
        '• La chlorophylle b et les caroténoïdes (bêta-carotène, xanthophylles), qui agissent comme pigments accessoires collecteurs d\'ondes lumineuses complémentaires.',
        '3. Analyse spectrale :',
        'Le spectre d\'absorption présente deux pics majeurs dans les longueurs d\'onde du bleu (430-450 nm) et du rouge (660-680 nm), et une absorption quasi-nulle dans le vert (500-550 nm). Le spectre d\'action photosynthétique (intensité de photosynthèse mesurée par le dégagement d\'O2) se superpose rigoureusement au spectre d\'absorption, prouvant expérimentalement que la chlorophylle est l\'agent photorecepteur actif.'
      ]
    },
    {
      title: 'II. LES PHOTOSYSTÈMES ET LA PHOTOLYSE DE L\'EAU',
      content: [
        '1. Architecture d\'un photosystème (PSI et PSII) :',
        'Chaque photosystème est une unité supramoléculaire comprenant une antenne collectrice de photons (formée de centaines de molécules de pigments) guidant l\'énergie lumineuse par résonance vers un centre réactionnel contenant une paire spéciale de chlorophylles a (P680 pour le PSII, P700 pour le PSI).',
        '2. La photolyse de l\'eau au niveau du PSII :',
        'Sous l\'impact des photons, le centre réactionnel P680 perd des électrons et devient un oxydant extrêmement puissant capable d\'arracher des électrons à une molécule d\'eau grâce à un complexe enzymatique à manganèse situé du côté intraluminal :',
        '2 H2O → O2 + 4 H+ + 4 e-.',
        'L\'oxygène rejeté par les végétaux lors de la photosynthèse provient exclusivement de la photolyse de l\'eau (démontré par Ruben et Kamen à l\'aide de l\'isotope lourd 18O).'
      ]
    },
    {
      title: 'III. LA CHAÎNE D\'OXYDORÉDUCTION ET LA SYNTHÈSE D\'ATP ET NADPH',
      content: [
        '1. Le flux d\'électrons (Schéma en Z) :',
        '• Les électrons arrachés à l\'eau sont excités au PSII (P680), puis descendent une première chaîne de transporteurs (plastoquinone, complexe cytochromique b6f, plastocyanine) jusqu\'au PSI (P700).',
        '• Au PSI, les électrons reçoivent une nouvelle impulsion photonique qui les propulse vers la ferrédoxine.',
        '• La ferrédoxine-NADP+ réductase transfère finalement ces électrons à l\'accepteur final NADP+ situé du côté du stroma, pour former du NADPH, H+ :',
        'NADP+ + 2 H+ + 2 e- → NADPH, H+.',
        '2. La photophosphorylation non cyclique de l\'ADP :',
        'Le passage des électrons dans le complexe cytochromique s\'accompagne d\'un pompage actif de protons du stroma vers la lumière des thylakoïdes. Conjugué aux protons libérés par la photolyse de l\'eau, il se crée un fort gradient de pH entre la lumière acide (pH ≈ 5) et le stroma alcalin (pH ≈ 8).',
        'Le reflux des protons à travers les ATP synthétases thylakoïdiennes entraîne la synthèse d\'ATP dans le stroma : ADP + Pi → ATP.'
      ]
    }
  ]
};

export const LESSON_12_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-12',
  number: '12',
  title: 'LEÇON 12 : LA PHOTOSYNTHÈSE : PHASE NON PHOTOCHIMIQUE ET CYCLE DE CALVIN',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 2 : Nutrition, métabolisme et énergie cellulaire',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Incorporation du dioxyde de carbone atmosphérique par la Rubisco dans le stroma. Étude du cycle de Calvin-Benson, synthèse des trioses phosphates et devenir de l\'amidon.',
  introduction: 'La phase photochimique a permis d\'emmagasiner l\'énergie solaire sous forme d\'ATP et de NADPH, H+. Cependant, ces composés sont instables et ne peuvent servir au stockage durable d\'énergie. La deuxième phase de la photosynthèse, appelée phase non photochimique ou cycle de Calvin-Benson, se déroule dans le stroma du chloroplaste. Elle assure la fixation et la réduction enzymatique du dioxyde de carbone minéral (CO2) pour fabriquer des glucides stables (trioses-phosphates, glucose, amidon). Cette leçon retrace les expériences historiques de Calvin et Benson à l\'aide du 14C et décortique les trois grandes étapes du cycle de Calvin ainsi que le rôle capital de l\'enzyme la plus abondante de la planète : la Rubisco.',
  conclusion: 'En conclusion, le cycle de Calvin constitue la passerelle universelle entre le monde minéral inerte et le monde organique vivant en intégrant le CO2 atmosphérique dans les glucides. L\'amidon accumulé transitoirement dans les chloroplastes durant la journée est hydrolysé la nuit en saccharose hydrosoluble, transporté par la sève élaborée dans les vaisseaux du liber (phloème) vers les organes de réserve (graines d\'arachide, tubercules de patate douce ou de manioc au Sénégal).',
  sections: [
    {
      title: 'I. LES EXPÉRIENCES HISTORIQUES DE CALVIN ET BENSON (1950)',
      content: [
        'Melvin Calvin et ses collaborateurs ont élucidé la séquence d\'apparition des composés carbonés grâce à un protocole expérimental ingénieux :',
        '• Suspension d\'algues vertes unicellulaires (Chlorelles) éclairées dans un récipient plat (le lollipop).',
        '• Injection de dioxyde de carbone marqué au carbone radioactif (14CO2).',
        '• Arrêt brutal du métabolisme à intervalles de temps très courts (quelques secondes) par projection des algues dans du méthanol bouillant.',
        '• Séparation des molécules par chromatographie bidimensionnelle sur papier et révélation par autoradiographie.',
        'Résultats essentiels :',
        '• Après 2 secondes : le premier composé radioactif détecté est une molécule à 3 carbones phosphorylée : l\'acide 3-phosphoglycérique (APG).',
        '• Après 5 à 10 secondes : apparition de trioses-phosphates (glycéraldéhyde-3-phosphate / G3P).',
        '• Après 30 secondes et plus : détection d\'hexoses (glucose, fructose), de saccharose et de ribulose-1,5-bisphosphate (RuBP).'
      ]
    },
    {
      title: 'II. LES TROIS ÉTAPES FONDAMENTALES DU CYCLE DE CALVIN',
      content: [
        'Le cycle de Calvin s\'articule en trois phases ordonnées dans le stroma :',
        '1. La carboxylation (Fixation du CO2) :',
        'Le CO2 réagit avec un glucide accepteur à 5 carbones : le ribulose-1,5-bisphosphate (RuBP). Cette réaction est catalysée par la ribulose-1,5-bisphosphate carboxylase/oxygénase (Rubisco). Il se forme un intermédiaire instable à 6 carbones qui se scinde immédiatement en 2 molécules d\'acide 3-phosphoglycérique (APG, 3C) :',
        'RuBP (5C) + CO2 (1C) + H2O → 2 APG (3C).',
        '2. La réduction de l\'APG en trioses-phosphates :',
        'Chaque molécule d\'APG est d\'abord phosphorylée par l\'ATP produit lors de la phase claire en 1,3-bisphosphoglycérate, puis réduite par le NADPH, H+ pour former du glycéraldéhyde-3-phosphate (G3P ou triose-phosphate).',
        '3. La régénération de l\'accepteur RuBP :',
        'Pour 6 molécules de CO2 fixées, 12 molécules de G3P sont synthétisées :',
        '• 2 molécules de G3P sortent du cycle pour être converties dans le cytoplasme en glucose, saccharose ou amidon.',
        '• Les 10 autres molécules de G3P (soit 30 carbones au total) sont réorganisées par une suite complexe de réactions enzymatiques consommant de l\'ATP pour régénérer 6 molécules de RuBP (6 × 5C = 30 carbones), permettant ainsi la pérennité du cycle.'
      ]
    },
    {
      title: 'III. FACTEURS INFLUENÇANT LA PHOTOSYNTHÈSE ET DEVENIR DES PRODUITS',
      content: [
        '1. Facteurs environnementaux limitants :',
        '• Éclairement lumineux : augmentation de la photosynthèse jusqu\'à un seuil de saturation lumineuse.',
        '• Concentration atmosphérique en CO2 : le taux actuel de 0,04% est souvent limitant ; un enrichissement en CO2 en serre augmente le rendement.',
        '• Température : influence fortement l\'activité de la Rubisco (optimum entre 25°C et 35°C selon les espèces végétales).',
        '• Disponibilité en eau : en cas de stress hydrique au Sahel, les stomates se ferment pour limiter la transpiration, ce qui stoppe l\'entrée du CO2 et bloque la photosynthèse.',
        '2. Devenir des glucides formés :',
        'L\'amidon accumulé de jour sous forme d\'inclusions dans le stroma est converti la nuit en saccharose soluble qui migre par la sève élaborée pour édifier les parois (cellulose), fournir de l\'énergie aux racines et constituer les réserves de nos cultures vivrières sénégalaises (mil, sorgho, maïs, niébé).'
      ]
    }
  ]
};

export const LESSON_13_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-13',
  number: '13',
  title: 'LEÇON 13 : STRUCTURE MOLÉCULAIRE DE L\'ADN ET MODÈLE DE WATSON-CRICK',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 3 : Information génétique et synthèse des protéines',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Nature chimique de l\'acide désoxyribonucléique (désoxyribose, acide phosphorique, bases azotées A, T, G, C). Règles d\'équimolarité de Chargaff et modèle de la double hélice antiparallèle de Watson et Crick.',
  introduction: 'Au cœur de chaque cellule vivante réside le plan d\'organisation de l\'organisme, codé sous forme moléculaire dans l\'acide désoxyribonucléique (ADN). Bien que découvert dès 1869 par Friedrich Miescher sous le nom de « nucléine », la preuve définitive que l\'ADN est le support matériel exclusif de l\'information génétique n\'a été apportée qu\'au milieu du XXe siècle par les expériences fondatrices d\'Avery, MacLeod et McCarty (1944) puis de Hershey et Chase (1952). En 1953, James Watson et Francis Crick, exploitant les clichés de diffraction des rayons X de Rosalind Franklin et les règles d\'équimolarité d\'Erwin Chargaff, élucidaient la structure tridimensionnelle en double hélice de l\'ADN. Cette leçon analyse avec une rigueur absolue la constitution chimique de l\'ADN et les propriétés géométriques et stéréochimiques de la double hélice.',
  conclusion: 'En conclusion, la structure en double hélice de l\'ADN offre une explication moléculaire parfaite aux deux impératifs fondamentaux de la génétique : la conservation fidèle de l\'information par complémentarité des bases et sa réplication semi-conservative intégrale. L\'extrême stabilité de la molécule repose sur la multitude de liaisons hydrogène internes protégées au cœur de l\'hélice par le squelette hydrophile sucre-phosphate externe.',
  sections: [
    {
      title: 'I. LES CONSTITUANTS CHIMIQUES FONDAMENTAUX DE L\'ADN',
      content: [
        'L\'hydrolyse chimique ménagée d\'une molécule d\'ADN révèle trois constituants de base :',
        '1. L\'acide phosphorique (H3PO4) : groupement phosphate apportant des charges négatives à la molécule.',
        '2. Un sucre pentose à 5 carbones : le 2-désoxy-D-ribose (dépourvu d\'oxygène sur son carbone C\'2).',
        '3. Quatre bases azotées hétérocycliques :',
        '• Deux bases puriques (à double cycle carboné et azoté) : l\'Adénine (A) et la Guanine (G).',
        '• Deux bases pyrimidiques (à cycle hexagonal simple) : la Thymine (T) et la Cytosine (C).',
        'L\'association covalente d\'une base azotée et d\'un désoxyribose forme un nucléoside. L\'estérification du nucléoside par un groupement phosphate sur le carbone C\'5 forme un nucléotide, qui est le monomère élémentaire de l\'ADN (dAMP, dTMP, dGMP, dCMP).'
      ]
    },
    {
      title: 'II. LES RÈGLES D\'ÉQUIMOLARITÉ D\'ERWIN CHARGAFF (1950)',
      content: [
        'En analysant la composition en bases de l\'ADN extrait d\'espèces variées, Erwin Chargaff a découvert des proportions stoechiométriques constantes universelles :',
        '• Le nombre de molécules d\'adénine est toujours rigoureusement égal au nombre de thymines : A = T (soit A/T = 1).',
        '• Le nombre de guanines est toujours égal au nombre de cytosines : G = C (soit G/C = 1).',
        '• Le rapport des purines sur les pyrimidines est égal à l\'unité : (A + G) / (T + C) = 1.',
        '• En revanche, le rapport de spécificité (A + T) / (G + C) varie d\'une espèce à l\'autre, caractérisant la signature génétique de chaque taxon.'
      ]
    },
    {
      title: 'III. LE MODÈLE DE LA DOUBLE HÉLICE DE WATSON ET CRICK (1953)',
      content: [
        '1. Architecture générale de la double hélice B :',
        '• L\'ADN est constitué de deux chaînes polynucléotidiques enroulées en hélice droite (sens horaire) autour d\'un axe central commun.',
        '• Les deux squelettes sucre-phosphate courent à la périphérie externe de l\'hélice, exposant leurs charges négatives à l\'eau.',
        '• Les bases azotées sont orientées perpendiculairement à l\'axe vers l\'intérieur de la double hélice, empilées à la manière des marches d\'un escalier en colimaçon.',
        '2. Complémentarité stricte des bases azotées :',
        'À l\'intérieur de la molécule, une base purique volumineuse fait toujours face à une base pyrimidique compacte, assurant un diamètre régulier de 2 nm (20 Å) :',
        '• L\'Adénine s\'apparie exclusivement avec la Thymine par 2 liaisons hydrogène (A = T).',
        '• La Guanine s\'apparie exclusivement avec la Cytosine par 3 liaisons hydrogène (G ≡ C). Les segments riches en G-C sont donc thermodynamiquement plus stables et plus difficiles à dénaturer par la chaleur.',
        '3. Antiparallélisme des deux brins :',
        'Les deux brins d\'ADN sont orientés en sens opposés (antiparallèles) : un brin s\'étend dans le sens 5\' phosphate vers 3\' hydroxyle (5\' → 3\'), tandis que son brin complémentaire est orienté dans le sens 3\' vers 5\' (3\' → 5\'). Le pas d\'hélice mesure 3,4 nm et comprend exactement 10 paires de nucléotides par tour complet.'
      ]
    }
  ]
};

export const LESSON_14_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-14',
  number: '14',
  title: 'LEÇON 14 : LA RÉPLICATION SEMI-CONSERVATIVE DE L\'ADN',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 3 : Information génétique et synthèse des protéines',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Expérience historique de Meselson et Stahl avec l\'azote lourd 15N. Mécanisme moléculaire de la fourche de réplication, rôle de l\'hélicase, primase, ADN polymérase et fragments d\'Okazaki.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Évolution de la Quantité d’ADN lors de la Réplication (Phase S) et Cycle Cellulaire',
    svgContent: SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
  },
  introduction: 'Lors de la phase S de l\'interphase, la cellule doit dupliquer fidèlement l\'ensemble de son matériel génétique avant d\'entrer en division mitotique. Comme le formulaient déjà Watson et Crick dans leur publication historique : « Il n\'a pas échappé à notre attention que l\'appariement spécifique que nous avons postulé suggère immédiatement un mécanisme possible de copie pour le matériel génétique ». Trois hypothèses théoriques s\'affrontaient : le modèle conservatif, le modèle dispersif et le modèle semi-conservatif. En 1958, Matthew Meselson et Franklin Stahl ont tranché de façon magistrale ce dilemme par une expérience élégante devenue un classique des sciences du vivant. Cette leçon décrit cette expérience fondatrice et dissèque la machinerie enzymatique opérant au sein des yeux et fourches de réplication.',
  conclusion: 'En conclusion, la réplication semi-conservative de l\'ADN assure la copie conforme du génome. Grâce aux propriétés de relecture (proofreading) de l\'ADN polymérase, le taux d\'erreur spontané est extraordinairement bas (moins d\'une erreur pour un milliard de nucléotides incorporés). Cette fidélité remarquable garantit la stabilité de l\'information génétique tout en laissant subsister une marge infime de mutations nécessaire à l\'évolution des espèces.',
  sections: [
    {
      title: 'I. L\'EXPÉRIENCE DE MESELSON ET STAHL (1958)',
      content: [
        'Meselson et Stahl ont cultivé des bactéries Escherichia coli sur un milieu de culture contenant un isotope lourd de l\'azote (15N), de sorte que tout l\'ADN bactérien soit lourd (densité élevée).',
        '1. Première étape (Génération 0 - G0) :',
        'L\'extraction et la centrifugation de l\'ADN en gradient de chlorure de césium (CsCl) montrent une bande unique située au fond du tube : c\'est l\'ADN lourd (15N-15N).',
        '2. Deuxième étape (Génération 1 - G1) :',
        'Les bactéries sont transférées sur un milieu contenant de l\'azote léger normal (14N) et cultivées pendant exactement un cycle de division (20 min). Après centrifugation, on n\'observe qu\'une seule bande d\'ADN située à une densité intermédiaire (ADN hybride 15N-14N).',
        '• Réfutation du modèle conservatif : ce modèle prévoyait une bande lourde et une bande légère distinctes. Il est donc définitivement éliminé.',
        '3. Troisième étape (Génération 2 - G2) :',
        'Après un second cycle de division sur milieu léger 14N, la centrifugation révèle deux bandes d\'égale intensité : 50% d\'ADN hybride (15N-14N) et 50% d\'ADN léger (14N-14N).',
        '• Réfutation du modèle dispersif : ce modèle prévoyait une seule bande de plus en plus légère.',
        '• Conclusion indiscutable : la réplication est semi-conservative. Chaque molécule fille hérite d\'un brin matrice parental intact et d\'un brin néoformé complémentaire.'
      ]
    },
    {
      title: 'II. LES MÉCANISMES MOLÉCULAIRES DE LA FOURCHE DE RÉPLICATION',
      content: [
        'La réplication débute au niveau de séquences spécifiques appelées origines de réplication, formant des « yeux de réplication » qui progressent de manière bidirectionnelle.',
        '1. Ouverture et déroulement de la double hélice :',
        '• L\'hélicase rompt les liaisons hydrogène reliant les bases azotées complémentaires pour séparer les deux brins.',
        '• Les protéines SSB se fixent sur les brins simples pour empêcher leur réappariement prématuré.',
        '• La topoisomérase (gyrase) soulage les tensions de surenroulement en amont de la fourche.',
        '2. Synthèse asymétrique des brins par l\'ADN polymérase :',
        'L\'ADN polymérase ne peut fonctionner que sous deux contraintes impératives : elle exige une amorce d\'ARN préexistante (synthétisée par la primase) et ne peut polymériser les nouveaux désoxyribonucléotides que dans le sens 5\' vers 3\'. Les deux brins de la double hélice étant antiparallèles, la synthèse s\'effectue différemment sur chacun d\'eux :',
        '• Le brin précoce (brin avancé) : orienté 3\' → 5\' vers la fourche, il est synthétisé de façon continue dans le sens 5\' → 3\' au fur et à mesure que l\'hélicase progresse.',
        '• Le brin tardif (brin discontinu) : orienté 5\' → 3\' vers la fourche, il est synthétisé à reculons par petits fragments successifs appelés fragments d\'Okazaki (de 1 000 à 2 000 nucléotides). Chaque fragment nécessite une amorce d\'ARN, qui est ensuite éliminée, comblée par de l\'ADN polymérase et soudée par une ADN ligase.'
      ]
    }
  ]
};
