import { LessonContent } from './courses';
import {
  SVG_SVT_1ERE_CINETIQUE_ENZYME,
  SVG_SVT_1ERE_POTENTIEL_ACTION,
  SVG_SVT_1ERE_REGULATION_GLYCEMIE,
  SVG_SVT_1ERE_GEOLOGIE_SENEGAL,
  SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
} from './diagrams_1ere_svt';

// =========================================================================
// SVT PREMIÈRE S1 — PROGRAMME SCIENTIFIQUE APPROFONDI (SÉRIE S1)
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (Sénégal)
// =========================================================================

export const LESSON_1_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-1',
  number: '1',
  title: 'LEÇON S1-1 : CINÉTIQUE ENZYMATIQUE APPROFONDIE ET RÉGULATION ALLOSTÉRIQUE',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 1 : Biocatalyse et bioénergétique cellulaire',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '40 min de lecture approfondie',
  description: 'Modèle mathématique de Michaelis-Menten, linéarisation de Lineweaver-Burk. Étude des inhibiteurs compétitifs, non-compétitifs et allostérie.',
  introduction: 'En série S1, l\'étude de la catalyse enzymatique dépasse la simple description qualitative pour aborder la quantification cinétique et les mécanismes moléculaires fins de la régulation métabolique. Les enzymes sont des machines moléculaires régulées avec une précision chirurgicale pour ajuster en temps réel le débit des voies biochimiques aux besoins énergétiques de la cellule. Cette leçon aborde la dérivation de l\'équation cinétique fondamentale de Leonor Michaelis et Maud Menten, la représentation en double inverse de Lineweaver-Burk et les enzymes allostériques à courbe sigmoïde.',
  conclusion: 'En conclusion, la cinétique enzymatique offre un modèle mathématique rigoureux de la catalyse biologique. La distinction entre enzymes michaeliennes (à courbe hyperbolique) et enzymes allostériques (à courbe sigmoïde coopérative) est essentielle en physiologie : les enzymes allostériques constituent les verrous régulateurs maîtres qui contrôlent les grands carrefours métaboliques cellulaires par rétro-inhibition (feed-back négatif).',
  image: {
    svgContent: SVG_SVT_1ERE_CINETIQUE_ENZYME,
    alt: 'Courbe de cinétique enzymatique et facteurs influençant la vitesse',
    caption: 'Figure 1 : Cinétique de Michaelis-Menten Vi = f([S]), Vmax, Km, et courbes d\'influence de la température et du pH'
  },
  diagram: {
    title: 'Cinétique Enzymatique Approfondie',
    svgContent: SVG_SVT_1ERE_CINETIQUE_ENZYME
  },
  sections: [
    {
      title: 'I. MODÉLISATION MATHÉMATIQUE DE LA RÉACTION ENZYMATIQUE',
      content: [
        '1. Le schéma réactionnel de base :',
        'E + S ⇄ (k1 / k-1) [ES] → (kcat) E + P, où k1 et k-1 sont les constantes de vitesse de formation et de dissociation du complexe enzyme-substrat, et kcat la constante catalytique (ou turn-over number).',
        '2. L\'équation de Michaelis-Menten :',
        'Sous l\'hypothèse de l\'état quasi-stationnaire de Briggs et Haldane (la concentration du complexe [ES] reste constante pendant la phase initiale de mesure) :',
        'Vi = (Vmax × [S]) / (Km + [S]), où Km = (k-1 + kcat) / k1.',
        '3. La constante d\'efficacité catalytique :',
        'Le rapport kcat / Km mesure la performance catalytique globale de l\'enzyme. La limite théorique maximale est fixée par la vitesse de diffusion des molécules dans l\'eau (environ 10^8 à 10^9 M^-1 s^-1) : les enzymes atteignant cette limite sont dites « catalytiquement parfaites ».'
      ]
    },
    {
      title: 'II. LINÉARISATION DE LINEWEAVER-BURK (REPRÉSENTATION EN DOUBLE INVERSE)',
      content: [
        'Pour déterminer expérimentalement Vmax et Km avec une grande précision sans extrapolation hasardeuse sur une hyperbole, on utilise l\'inverse de l\'équation de Michaelis-Menten :',
        '1 / Vi = (Km / Vmax) × (1 / [S]) + (1 / Vmax).',
        'C\'est l\'équation d\'une droite affine y = ax + b, où :',
        '• La variable x est 1 / [S], et la variable y est 1 / Vi.',
        '• La pente de la droite vaut Km / Vmax.',
        '• L\'ordonnée à l\'origine (x = 0) donne directement 1 / Vmax.',
        '• L\'abscisse à l\'origine (y = 0) donne la valeur -1 / Km.',
        'Grâce à ce tracé linéaire, la comparaison graphique d\'une enzyme normale et d\'une enzyme en présence d\'inhibiteur est immédiate.'
      ]
    },
    {
      title: 'III. ENZYMES ALLOSTÉRIQUES ET COOPÉRATIVITÉ',
      content: [
        'Toutes les enzymes ne suivent pas la cinétique hyperbolique de Michaelis-Menten :',
        '• Structure oligomérique : les enzymes allostériques sont des protéines formées de plusieurs sous-unités (protomères) possédant chacune un site catalytique et un ou plusieurs sites régulateurs distincts (sites allostériques).',
        '• Courbe de cinétique sigmoïde (en S) : la fixation d\'une molécule de substrat sur un premier site induit un changement conformationnel qui augmente considérablement l\'affinité des autres sites pour le substrat (phénomène de coopérativité positive).',
        '• Effecteurs allostériques :',
        '  - Activateurs allostériques : stabilisent la forme active relaxée (R), déplaçant la courbe vers la gauche.',
        '  - Inhibiteurs allostériques : stabilisent la forme inactive tendue (T), déplaçant la courbe vers la droite.'
      ]
    }
  ]
};

export const LESSON_2_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-2',
  number: '2',
  title: 'LEÇON S1-2 : BIOÉNERGÉTIQUE CELLULAIRE ET COUPLAGE CHIMIO-OSMOTIQUE',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 1 : Biocatalyse et bioénergétique cellulaire',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '35 min de lecture approfondie',
  description: 'Thermodynamique des systèmes vivants, variation d\'énergie libre de Gibbs (ΔG°). Chaîne respiratoire, potentiels redox standards et théorie chimio-osmotique de Mitchell.',
  introduction: 'La cellule vivante est un système thermodynamique ouvert qui échange continuellement de la matière et de l\'énergie avec son environnement pour maintenir son état hautement ordonné loin de l\'équilibre thermodynamique mortel. Les réactions métaboliques cellulaires obéissent aux lois universelles de la thermodynamique. La conversion de l\'énergie chimique contenue dans les liaisons des nutriments en molécules d\'ATP repose sur des couplages énergétiques rigoureux entre réactions endergoniques défavorables et réactions exergoniques spontanées. Cette leçon détaille la thermodynamique biochimique et formalise le couplage chimio-osmotique transmembranaire.',
  conclusion: 'En conclusion, la bioénergétique cellulaire illustre la façon dont l\'évolution a résolu le problème du couplage énergétique à l\'échelle nanométrique. Le mécanisme de Mitchell, fondé sur la force proton-motrice générée par les potentiels d\'oxydo-réduction de la chaîne respiratoire, constitue l\'un des principes unificateurs les plus puissants de la biologie moderne.',
  sections: [
    {
      title: 'I. THERMODYNAMIQUE BIOLOGIQUE ET VARIATION D\'ÉNERGIE LIBRE',
      content: [
        '1. Le concept d\'énergie libre de Gibbs (G) :',
        'Dans les conditions cellulaires de température et pression constantes, la variation d\'énergie libre ΔG détermine la spontanéité d\'une réaction biochimique :',
        'ΔG = ΔH - TΔS, où ΔH est la variation d\'enthalpie et ΔS la variation d\'entropie.',
        '• Réaction exergonique (ΔG < 0) : libère de l\'énergie libre, thermodynamiquement spontanée.',
        '• Réaction endergonique (ΔG > 0) : nécessite un apport externe d\'énergie, non spontanée.',
        '• À l\'équilibre chimique : ΔG = 0.',
        '2. L\'ATP comme transporteur universel d\'énergie :',
        'L\'hydrolyse de la liaison phosphoanhydride terminale de l\'ATP présente une variation d\'énergie libre standard très négative : ATP + H2O → ADP + Pi (ΔG°\' = -30,5 kJ/mol). La cellule utilise cette libération d\'énergie pour coupler l\'hydrolyse de l\'ATP à des synthèses endergoniques ou des transports actifs.'
      ]
    },
    {
      title: 'II. POTENTIELS D\'OXYDO-RÉDUCTION DANS LA CHAÎNE RESPIRATOIRE',
      content: [
        '1. Équation de Nernst et cascade redox :',
        'Le flux spontané des électrons s\'effectue toujours du couple de potentiel d\'oxydoréduction standard le plus électronégatif vers le couple le plus électropositif :',
        '• Couple NAD+ / NADH, H+ : E°\' = -0,32 V.',
        '• Complexe I (FMN / Fe-S) : E°\' ≈ -0,30 V à -0,10 V.',
        '• Coenzyme Q / Ubiquinol : E°\' = +0,04 V.',
        '• Cytochrome c (Fe3+ / Fe2+) : E°\' = +0,25 V.',
        '• Complexe IV (Cytochrome a/a3) : E°\' = +0,38 V.',
        '• Couple accepteur terminal 1/2 O2 / H2O : E°\' = +0,82 V.',
        '2. Calcul de l\'énergie libérée :',
        'La différence de potentiel total ΔE°\' entre NADH, H+ et O2 est de 1,14 V. La relation fondamentale ΔG°\' = -nFΔE°\' (où n = 2 électrons et F = 96 500 C/mol) donne une libération colossale de -220 kJ/mol par paire d\'électrons transférée, largement suffisante pour alimenter le pompage des protons.'
      ]
    },
    {
      title: 'III. LA FORCE PROTON-MOTRICE DE MITCHELL (Δp)',
      content: [
        'Le pompage de protons de la matrice vers l\'espace intermembranaire par les complexes I, III et IV génère une force proton-motrice (Δp) qui combine deux composantes thermodynamiques :',
        'Δp = ΔΨ - (2,3 RT / F) × ΔpH, où :',
        '• ΔΨ est la différence de potentiel électrique transmembranaire (environ 160 à 180 mV, matrice négative).',
        '• ΔpH est la différence de concentration en protons (environ 0,75 à 1 unité de pH plus acide dans l\'espace intermembranaire).',
        'Le flux spontané de retour des protons à travers le rotor F0 et le stator F1 de l\'ATP synthétase induit un couple mécanique rotatif qui synthétise 1 mole d\'ATP pour environ 3 à 4 protons réinjectés.'
      ]
    }
  ]
};

export const LESSON_3_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-3',
  number: '3',
  title: 'LEÇON S1-3 : RÉGULATION NEURO-HORMONALE DE LA GLYCÉMIE ET HOMÉOSTASIE',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 2 : Physiologie nerveuse et régulations',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '40 min de lecture approfondie',
  description: 'Boucle de régulation de la glycémie, cellules alpha et bêta des îlots de Langerhans, mécanismes d\'action de l\'insuline et du glucagon. Étude des diabètes de type 1 et 2.',
  introduction: 'La glycémie, c\'est-à-dire la concentration de glucose libre dissous dans le plasma sanguin, est une constante biologique vitale maintenue à une valeur remarquablement étroite autour de 1,00 g/L (5,5 mmol/L) chez un individu sain. Le glucose étant le carburant énergétique exclusif et obligatoire des cellules cérébrales (neurones) et des hématies, toute baisse excessive (hypoglycémie < 0,6 g/L) entraîne rapidement un coma hypoglycémique mortel. Inversement, une hyperglycémie chronique (> 1,26 g/L à jeun) caractérise le diabète sucré, responsable de graves lésions vasculaires et rénales. Cette leçon décortique le système de régulation à rétroaction négative maintenant l\'homéostasie glycémique.',
  conclusion: 'En conclusion, la régulation glycémique est un archétype de système asservi à rétroaction négative. L\'insuline est la seule et unique hormone hypoglycémiante de l\'organisme, tandis qu\'il existe plusieurs hormones hyperglycémiantes synergiques (glucagon, adrénaline, cortisol, hormone de croissance), témoignant de la priorité absolue donnée par l\'évolution à la prévention de l\'hypoglycémie cérébrale létale.',
  image: {
    svgContent: SVG_SVT_1ERE_REGULATION_GLYCEMIE,
    alt: 'Diagramme de régulation de la glycémie et boucle de rétroaction',
    caption: 'Figure 6 : Boucle réflexe à rétrocontrôle négatif de la glycémie : îlots de Langerhans, insuline, glucagon et organes cibles'
  },
  diagram: {
    title: 'Boucle de Régulation Glycémique',
    svgContent: SVG_SVT_1ERE_REGULATION_GLYCEMIE
  },
  sections: [
    {
      title: 'I. LE SYSTÈME DE RÉGULATION GLYCÉMIQUE COMME SYSTÈME ASSERVI',
      content: [
        'Tout système de régulation biologique comporte 4 éléments interconnectés :',
        '• Le paramètre réglé : la glycémie (valeur de consigne : 1,00 g/L).',
        '• Les capteurs de consigne : cellules chémoréceptrices capables de mesurer directement la glycémie en temps réel (cellules des îlots de Langerhans du pancréas).',
        '• Les messagers régulateurs : les hormones pancréatiques véhiculées par voie sanguine.',
        '• Les effecteurs : foie, muscles et tissu adipeux qui corrigent l\'écart par stockage ou déstockage de glucose.'
      ]
    },
    {
      title: 'II. LES DEUX HORMONES ANTAGONISTES DU PANCRÉAS ENDOCRINE',
      content: [
        '1. L\'Insuline (Hormone de l\'abondance - Hypoglycémiante) :',
        '• Sécrétée par les cellules β situées au centre des îlots de Langerhans en réponse à une élévation de la glycémie (après un repas).',
        '• Actions sur les cellules cibles :',
        '  - Foie : active la glycogénogenèse (synthèse de glycogène) et inhibe la glycogénolyse.',
        '  - Muscles : stimule la translocation des transporteurs GLUT4 à la membrane, augmentant l\'entrée du glucose et son stockage sous forme de glycogène musculaire.',
        '  - Tissu adipeux : favorise la lipogenèse (transformation du glucose en triglycérides).',
        '2. Le Glucagon (Hormone de la pénurie - Hyperglycémiant) :',
        '• Sécrété par les cellules α situées en périphérie des îlots en réponse à une baisse de la glycémie (jeûne, sport).',
        '• Action exclusive sur le foie : active la glycogénolyse hépatique et la néoglucogenèse à partir du glycérol et des acides aminés, provoquant la libération rapide de glucose dans le sang.'
      ]
    },
    {
      title: 'III. LES DÉRÈGLEMENTS DE L\'HOMÉOSTASIE : LES DIABÈTES',
      content: [
        '• Diabète de type 1 (DT1 - insulinodépendant) : maladie auto-immune caractérisée par la destruction sélective des cellules β productrices d\'insuline par des lymphocytes T autoréactifs. Traitement obligatoire par injections quotidiennes d\'insuline exogène.',
        '• Diabète de type 2 (DT2 - non insulinodépendant) : pathologie métabolique liée à l\'obésité et à la sédentarité, combinant une insulinorésistance des tissus cibles et un épuisement progressif des cellules β. Traitement par règles hygiéno-diététiques, antidiabétiques oraux puis insulinothérapie.',
        'Au Sénégal, le diabète représente un défi majeur de santé publique géré activement par le Centre Marc Sankalé de Dakar.'
      ]
    }
  ]
};

export const LESSON_4_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-4',
  number: '4',
  title: 'LEÇON S1-4 : NEUROPHYSIOLOGIE : POTENTIEL DE REPOS ET POTENTIEL D\'ACTION',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 2 : Physiologie nerveuse et régulations',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '45 min de lecture approfondie',
  description: 'Biophysique membranaire : équation de Nernst et Goldman-Hodgkin-Katz. Genèse du potentiel de repos (-70 mV), cinétique ionique des canaux Na+ et K+ voltage-dépendants lors du potentiel d\'action.',
  introduction: 'Le système nerveux assure la communication rapide et le traitement des informations au sein de l\'organisme grâce à des cellules hautement excitables : les neurones. Le message nerveux est de nature électrique, fondé sur des variations transitoires de la différence de potentiel électrique existant de part et d\'autre de la membrane plasmique de la fibre nerveuse (axone). Cette leçon traite des bases biophysiques de l\'électrophysiologie : l\'origine du potentiel de repos maintenu par la pompe Na+/K+, la genèse stéréotypée du potentiel d\'action consécutif à l\'ouverture des canaux ioniques voltage-dépendants, et les lois de conduction le long de l\'axone.',
  conclusion: 'En conclusion, le potentiel d\'action est l\'unité élémentaire universelle de l\'influx nerveux, fonctionnant selon la loi du tout ou rien avec une amplitude constante. L\'intensité d\'un stimulus sensoriel n\'est donc pas codée par la taille du potentiel d\'action, mais par sa fréquence d\'émission le long de l\'axone (codage en modulation de fréquence).',
  image: {
    svgContent: SVG_SVT_1ERE_POTENTIEL_ACTION,
    alt: 'Courbe oscillographique du potentiel d\'action d\'un neurone',
    caption: 'Figure 2 : Oscillogramme d\'un potentiel d\'action monophasique : dépolarisation, repolarisation, hyperpolarisation et période réfractaire'
  },
  diagram: {
    title: 'Neurophysiologie et Potentiel d\'Action',
    svgContent: SVG_SVT_1ERE_POTENTIEL_ACTION
  },
  sections: [
    {
      title: 'I. LE POTENTIEL DE REPOS MEMBRANAIRE (-70 mV)',
      content: [
        '1. La dissymétrie ionique transmembranaire :',
        'Au repos, les concentrations ioniques de part et d\'autre de la membrane plasmique d\'un neurone sont très inégales :',
        '• Ions Sodium (Na+) : très concentrés à l\'extérieur (145 mmol/L) et faibles à l\'intérieur (12 mmol/L).',
        '• Ions Potassium (K+) : très concentrés à l\'intérieur (150 mmol/L) et faibles à l\'extérieur (4 mmol/L).',
        '• Anions protéiques non diffusibles (A-) : confinés dans le cytosol.',
        '2. L\'origine biophysique du potentiel de repos :',
        'La membrane est beaucoup plus perméable aux ions K+ qu\'aux ions Na+ grâce à la présence de canaux de fuite au potassium toujours ouverts. Les ions K+ diffusent passivement vers l\'extérieur selon leur gradient de concentration, créant un déficit de charges positives à l\'intérieur qui génère une d.d.p négative d\'environ -70 mV.',
        '3. La pompe Na+/K+ ATPase :',
        'Pour empêcher la dissipation des gradients par les flux de fuite, une pompe membranaire consommant de l\'ATP expulse activement 3 ions Na+ vers l\'extérieur tout en réinjectant 2 ions K+ vers l\'intérieur contre leurs gradients électrochimiques respectifs.'
      ]
    },
    {
      title: 'II. LE POTENTIEL D\'ACTION ET SA CINÉTIQUE IONIQUE',
      content: [
        'Lorsqu\'une stimulation électrique dépasse le seuil d\'excitation (-50 mV), la membrane déclenche un potentiel d\'action monophasique stéréotypé :',
        '1. La phase de dépolarisation rapide (-70 mV → +30 mV) :',
        'L\'atteinte du seuil ouvre instantanément les canaux sodiques voltage-dépendants (canaux Na+ v-d). Les ions Na+ s\'engouffrent massivement dans le cytoplasme selon leur gradient électrochimique (courant entrant de sodium), inversant brutalement la polarité membranaire.',
        '2. La phase de repolarisation (+30 mV → -70 mV) :',
        'Les canaux Na+ s\'inactivent automatiquement tandis que les canaux potassiques voltage-dépendants (canaux K+ v-d) s\'ouvrent plus lentement. Les ions K+ sortent massivement de l\'axone (courant sortant de potassium), ramenant le potentiel vers des valeurs négatives.',
        '3. L\'hyperpolarisation (-80 mV) et retour au repos :',
        'La fermeture retardée des canaux K+ v-d provoque une fuite excessive d\'ions positifs, abaissant transitoirement le potentiel à -80 mV avant que la pompe Na+/K+ ne rétablisse les concentrations d\'équilibre de repos.'
      ]
    },
    {
      title: 'III. LOIS DE CONDUCTION ET PÉRIODE RÉFRACTAIRE',
      content: [
        '• La loi du Tout ou Rien : sous le seuil d\'excitation, il n\'y a que des réponses locales décrémentielles ; dès que le seuil est franchi, le potentiel d\'action apparaît d\'emblée avec son amplitude maximale (+100 mV au total) indépendamment de l\'intensité du stimulus.',
        '• La période réfractaire absolue : pendant la dépolarisation et le début de repolarisation, les canaux Na+ sont inactivés ; aucun stimulus, même surpuissant, ne peut déclencher de second PA.',
        '• Conduction saltatoire sur axones myélinisés : chez les vertébrés, la gaine de myéline isolante est interrompue régulièrement au niveau des nœuds de Ranvier, où se concentrent tous les canaux voltage-dépendants. L\'influx saute d\'un nœud à l\'autre à une vitesse fulgurante atteignant 100 à 120 m/s.'
      ]
    }
  ]
};

export const LESSON_5_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-5',
  number: '5',
  title: 'LEÇON S1-5 : LA TRANSMISSION SYNAPTIQUE ET L\'INTÉGRATION NEURONALE',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 2 : Physiologie nerveuse et régulations',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '35 min de lecture approfondie',
  description: 'Anatomie fonctionnelle de la synapse chimique. Libération des neurotransmetteurs par exocytose, potentiels postsynaptiques excitateurs (PPSE) et inhibiteurs (PPSI), sommation spatiale et temporelle.',
  introduction: 'La propagation de l\'influx nerveux le long d\'un neurone individuel est électrique, mais le passage du message d\'un neurone à un autre s\'effectue au niveau de zones de jonction spécialisées appelées synapses. Au niveau de la synapse chimique, majoritaire chez l\'Homme, l\'espace synaptique constitue une barrière infranchissable pour le courant électrique. La transmission exige donc la conversion du signal électrique en un signal chimique représenté par des molécules de neurotransmetteurs. Chaque neurone central reçoit des milliers de connexions synaptiques simultanées, certaines excitatrices et d\'autres inhibitrices. Cette leçon analyse le fonctionnement moléculaire de la synapse et la capacité d\'intégration sommative du neurone postsynaptique.',
  conclusion: 'En conclusion, la synapse chimique est une valve unidirectionnelle assurant la transmission polarisée des messages nerveux et servant de microprocesseur élémentaire. L\'intégration neuronale au niveau du cône axonique (segment initial) par sommation algébrique des PPSE et PPSI décide de l\'émission ou du silence d\'un nouveau train de potentiels d\'action.',
  sections: [
    {
      title: 'I. STRUCTURE ET FONCTIONNEMENT D\'UNE SYNAPSE CHIMIQUE',
      content: [
        'Une synapse chimique comprend trois compartiments :',
        '• L\'élément présynaptique : renflement axonal (bouton terminal) renfermant des vésicules synaptiques remplies de neurotransmetteur (ex. acétylcholine, GABA, glutamate, dopamine) et de nombreuses mitochondries.',
        '• La fente synaptique : espace extracellulaire étroit d\'environ 20 à 30 nm.',
        '• L\'élément postsynaptique : membrane garnie de récepteurs-canaux spécifiques.',
        'La cascade d\'événements lors de la transmission synaptique :',
        '1. L\'arrivée des potentiels d\'action dépolarise le bouton présynaptique.',
        '2. Ouverture de canaux calciques voltage-dépendants (entrée massive d\'ions Ca2+).',
        '3. L\'élévation du calcium cytosolique déclenche la fusion des vésicules synaptiques avec la membrane présynaptique et l\'exocytose du neurotransmetteur dans la fente.',
        '4. Diffusion du neurotransmetteur et fixation réversible sur les récepteurs postsynaptiques.',
        '5. Inactivation rapide du neurotransmetteur (par dégradation enzymatique comme l\'acétylcholinestérase ou par recapture présynaptique).'
      ]
    },
    {
      title: 'II. LES POTENTIELS POSTSYNAPTIQUES : PPSE ET PPSI',
      content: [
        'Selon la nature du récepteur-canal activé :',
        '• Synapse excitatrice (PPSE) : le neurotransmetteur (ex. acétylcholine, glutamate) ouvre des canaux sodiques chimio-dépendants. L\'entrée d\'ions Na+ provoque une dépolarisation locale transitoire appelée Potentiel Postsynaptique Excitateur (PPSE).',
        '• Synapse inhibitrice (PPSI) : le neurotransmetteur (ex. GABA, glycine) ouvre des canaux chlorures (Cl-) ou potassiques (K+). L\'entrée de Cl- ou la sortie de K+ provoque une hyperpolarisation de la membrane postsynaptique appelée Potentiel Postsynaptique Inhibiteur (PPSI), éloignant le neurone du seuil d\'excitation.'
      ]
    },
    {
      title: 'III. L\'INTÉGRATION NEURONALE PAR SOMMATION',
      content: [
        'Les PPSE et PPSI sont des potentiels gradués qui se propagent de manière décrémentielle vers le corps cellulaire et le segment initial de l\'axone (cône de dépolarisation). Le neurone réalise une sommation permanente de tous les signaux reçus :',
        '• Sommation temporelle : addition des potentiels générés successivement et de façon rapprochée dans le temps par une même synapse activée à haute fréquence.',
        '• Sommation spatiale : addition algébrique simultanée des PPSE et des PPSI provenant de différentes synapses réparties sur l\'arbre dendritique et le soma.',
        'Si la somme algébrique au niveau du cône axonique dépasse le seuil critique d\'environ -50 mV, un ou plusieurs potentiels d\'action sont déclenchés et propagés le long de l\'axone. Si le seuil n\'est pas atteint, le signal s\'éteint sans transmission.'
      ]
    }
  ]
};

export const LESSON_6_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-6',
  number: '6',
  title: 'LEÇON S1-6 : GÉNÉTIQUE MENDÉLIENNE, LIAISON ET CARTES FACTORIELLES',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 3 : Génétique formelle et dynamique géologique',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '45 min de lecture approfondie',
  description: 'Lois de Mendel, monohybridisme et dihybridisme. Gènes indépendants (test-cross 1:1:1:1) versus gènes liés (linkage complet et incomplet), crossing-over et établissement de cartes génétiques.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Brassages Chromosomiques et Cycle Cellulaire',
    svgContent: SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
  },
  diagram: {
    title: 'Génétique Formelle et Chromosomes',
    svgContent: SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
  },
  introduction: 'Fondée par les expériences pionnières du moine Gregor Mendel sur les pois en 1865, puis enrichie au début du XXe siècle par les travaux de Thomas Hunt Morgan sur la drosophile (Drosophila melanogaster), la génétique formelle permet d\'élucider les lois statistiques gouvernant la transmission des caractères héréditaires. En série S1, l\'analyse génétique exige une rigueur mathématique sans faille pour interpréter les proportions phénotypiques issues de croisements expérimentaux. Cette leçon analyse le monohybridisme, le dihybridisme à gènes indépendants, le phénomène de liaison factorielle (linkage) et la construction de cartes chromosomiques factorielles.',
  conclusion: 'En conclusion, la génétique formelle a permis de cartographier les génomes bien avant l\'avènement du séquençage moléculaire. La fréquence de recombinaison observée lors d\'un test-cross fournit une mesure directe de la distance physique séparant deux loci sur un même chromosome, 1% de recombinaison définissant conventionnellement 1 centimorgan (cM).',
  sections: [
    {
      title: 'I. LES LOIS FONDAMENTALES DE MENDEL',
      content: [
        '1. Première loi de Mendel (Uniformité des hybrides de F1) :',
        'Le croisement entre deux lignées pures (homozygotes) différant par un seul caractère donne une génération F1 homogène, tous les individus présentant le même phénotype (phénotype de l\'allèle dominant).',
        '2. Deuxième loi de Mendel (Ségrégation indépendante des allèles en F2) :',
        'L\'autofécondation ou le croisement entre individus de F1 donne en génération F2 une ségrégation des phénotypes dans les proportions statistiques caractéristiques : 3/4 [phénotype dominant] et 1/4 [phénotype récessif] (rapport 3:1).',
        '3. Le croisement-test (Test-cross ou Back-cross) :',
        'Consiste à croiser un individu de génotype inconnu (présentant le phénotype dominant) avec un individu homozygote récessif pour tous les gènes étudiés. Les proportions phénotypiques des descendants reflètent directement la nature et les proportions des gamètes produits par l\'individu testé.'
      ]
    },
    {
      title: 'II. LE DIHYBRIDISME : GÈNES INDÉPENDANTS VERSUS GÈNES LIÉS',
      content: [
        '1. Troisième loi de Mendel : Gènes indépendants (sur deux paires de chromosomes distinctes) :',
        '• En F2 issue du croisement F1 × F1 : apparition de 4 phénotypes dans les proportions classiques : 9/16 [AB], 3/16 [Ab], 3/16 [aB], 1/16 [ab].',
        '• En test-cross (F1 × double récessif) : obtention de 4 phénotypes équiprobables dans les proportions 25% - 25% - 25% - 25% (rapport 1:1:1:1). C\'est la preuve du brassage interchromosomique par ségrégation aléatoire des chromosomes en anaphase I.',
        '2. Gènes liés (Linkage : situés sur la même paire de chromosomes homologues) :',
        '• Liaison totale (absence de crossing-over, ex. chez le mâle de drosophile) : le test-cross ne donne que deux phénotypes parentaux à 50% - 50%.',
        '• Liaison partielle avec crossing-over (cas général) : le test-cross produit 4 phénotypes de fréquences très inégales :',
        '  - Phénotypes parentaux majoritaires (> 50%).',
        '  - Phénotypes recombinés minoritaires (< 50%) issus du brassage intrachromosomique par enjambement en prophase I.'
      ]
    },
    {
      title: 'III. CALCUL DES DISTANCES GÉNÉTIQUES ET CARTES FACTORIELLES',
      content: [
        '1. Formule du pourcentage de recombinaison (Taux de crossing-over) :',
        'P = (Nombre total d\'individus recombinés / Nombre total d\'individus issus du test-cross) × 100.',
        '2. Établissement de la carte génétique (Cartographie factorielle) :',
        'Par définition de Thomas Hunt Morgan et Alfred Sturtevant, 1% de recombinaison équivaut à 1 unité de distance génétique ou centimorgan (1 cM).',
        'Exemple d\'application : si deux gènes A et B présentent un taux de recombinaison de 12%, ils sont distants de 12 cM sur le chromosome. Par des croisements triples (test-cross à 3 points A, B, C), l\'analyse de l\'ordre des loci et des doubles crossing-over permet de dresser la carte factorielle linéaire exacte du chromosome.'
      ]
    }
  ]
};

export const LESSON_7_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-7',
  number: '7',
  title: 'LEÇON S1-7 : TECTONIQUE DES PLAQUES ET DYNAMIQUE DU MANTEAU TERRESTRE',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 3 : Génétique formelle et dynamique géologique',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '40 min de lecture approfondie',
  description: 'Modèle de la tectonique globale, convection mantellique et flux géothermique. Cinématique des plaques lithosphériques, dorsales océaniques, rifting et paléomagnétisme.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Profil Géologique, Structure Lithosphérique et Dynamique Magmatique',
    svgContent: SVG_SVT_1ERE_GEOLOGIE_SENEGAL
  },
  diagram: {
    title: 'Coupe Lithosphérique et Dynamique du Manteau',
    svgContent: SVG_SVT_1ERE_GEOLOGIE_SENEGAL
  },
  introduction: 'La théorie de la tectonique des plaques, formulée à la fin des années 1960 par Jason Morgan, Dan McKenzie et Xavier Le Pichon à partir des idées précurseuses d\'Alfred Wegener sur la dérive des continents, constitue le paradigme fondamental unificateur de la géologie moderne. Elle envisage la couche superficielle rigide de la Terre, la lithosphère (épaisse de 100 km), découpée en une douzaine de plaques rigides mobiles glissant sur une couche mantellique ductile plus déformable, l\'asthénosphère. En série S1, cette dynamique est abordée sous l\'angle des bilans thermiques du globe, de la convection thermique mantellique et des signatures géophysiques (anomalies magnétiques, sismologie).',
  conclusion: 'En conclusion, la tectonique des plaques est l\'expression superficielle de la machine thermique terrestre, qui évacue continuellement vers l\'espace la chaleur accumulée lors de l\'accrétion planétaire et de la désintégration radioactive du manteau. Les dorsales océaniques créent de la nouvelle lithosphère, tandis que les fosses de subduction la recyclent dans le manteau profond, maintenant la surface du globe constante.',
  sections: [
    {
      title: 'I. LA CHALEUR INTERNE DU GLOBE ET LES MODES DE TRANSFERT THERMIQUE',
      content: [
        '1. Les sources de chaleur interne :',
        '• La chaleur primordiale d\'accrétion : stockée lors de la formation de la Terre il y a 4,55 milliards d\'années.',
        '• La chaleur radiogénique : produite en continu par la désintégration radioactive d\'isotopes à longue demi-vie (Uranium 238, Thorium 232, Potassium 40) présents dans le manteau et la croûte continentale.',
        '2. Conduction versus Convection :',
        '• La conduction : transfert de chaleur de proche en proche sans déplacement macroscopique de matière, mode très lent dominant dans la lithosphère rigide.',
        '• La convection : transfert de chaleur efficace accompagné de mouvements de matière (courants de convection mantelliques) dans les roches ductiles et visqueuses du manteau solide sur des millions d\'années.'
      ]
    },
    {
      title: 'II. LES PREUVES GÉOPHYSIQUES DE L\'EXPANSION OCÉANIQUE',
      content: [
        '1. Le paléomagnétisme et la théorie du tapis roulant de Hess (1962) :',
        'Lorsqu\'un basalte refroidit sous son point de Curie (580°C pour la magnétite), ses minéraux ferromagnétiques s\'aimantent parallèlement au champ magnétique terrestre de l\'époque. Comme le champ magnétique terrestre s\'inverse périodiquement au cours des temps géologiques, les fonds océaniques enregistrent des bandes d\'anomalies magnétiques parallèles et parfaitement symétriques de part et d\'autre de la crête des dorsales (modèle de Vine et Matthews, 1963).',
        '2. Les forages océaniques profonds (programmes DSDP et ODP) :',
        'L\'âge des sédiments au contact du plancher basaltique augmente de façon rigoureusement proportionnelle à l\'éloignement de l\'axe de la dorsale, prouvant l\'accrétion continue de nouvelle croûte océanique.'
      ]
    },
    {
      title: 'III. CINÉMATIQUE ET LIMITES DE PLAQUES',
      content: [
        'On distingue trois catégories de frontières lithosphériques :',
        '• Limites divergentes (Constructives) : dorsales médio-océaniques et rifts continentaux (ex. Rift Est-Africain), caractérisées par un flux de chaleur très élevé, un volcanisme basaltique tholéiitique et des failles normales en distension.',
        '• Limites convergentes (Destructives) : zones de subduction (où une plaque océanique dense s\'enfonce sous une plaque chevauchante) et zones de collision continentale.',
        '• Limites transformantes (Conservatives) : failles coulissantes où les plaques glissent horizontalement l\'une contre l\'autre sans création ni destruction de croûte (ex. faille de San Andreas en Californie).'
      ]
    }
  ]
};

export const LESSON_8_SVT_1ERE_S1: LessonContent = {
  id: 'svt-1ere-s1-lecon-8',
  number: '8',
  title: 'LEÇON S1-8 : MAGMATISME DE SUBDUCTION ET COLLISION CONTINENTALE',
  subject: 'SVT',
  classLevel: 'Première S1',
  module: 'Module 3 : Génétique formelle et dynamique géologique',
  level: 'Première S1 (Sciences Mathématiques & Physiques)',
  readTime: '35 min de lecture approfondie',
  description: 'Mécanismes thermiques et hydriques de la subduction. Fusion partielle de la péridotite mantellique hydratée, volcanisme andésitique explosif et orogenèse par collision continentale.',
  introduction: 'Les zones de subduction sont les régions les plus instables et géologiquement actives du globe, concentrant plus de 80% des séismes profonds et la majorité du volcanisme explosif planétaire (la fameuse « ceinture de feu du Pacifique »). Au fur et à mesure que la lithosphère océanique vieillit, elle se refroidit, s\'épaissit et devient plus dense que l\'asthénosphère sous-jacente. Cette instabilité gravitaire provoque son enfoncement spontané dans le manteau. Cette leçon examine la thermodynamique et la pétrologie des zones de subduction, la genèse des magmas calco-alcalins et l\'aboutissement ultime de la fermeture océanique : la collision continentale et la formation des chaînes de montagnes.',
  conclusion: 'En conclusion, le cycle de Wilson résume la vie et la mort des océans : ouverture continentale par rifting, océanisation, subduction puis collision orogénique. Le socle du Sénégal oriental porte d\'ailleurs les stigmates de ces cycles majeurs anciens : les ceintures de roches vertes de Mako à Kédougou sont d\'anciens arcs volcaniques de subduction birimiens accrétés au craton africain il y a deux milliards d\'années.',
  sections: [
    {
      title: 'I. LA MÉCANIQUE ET LA GÉOMÉTRIE DE LA SUBDUCTION',
      content: [
        '1. La distribution des foyers sismiques (Plan de Wadati-Benioff) :',
        'La lithosphère océanique plongeante, froide et cassante, pénètre dans un manteau chaud. Les séismes s\'alignent sur un plan incliné de 30° à 60° plongeant depuis la fosse océanique jusqu\'à 700 km de profondeur, marquant la friction et les contraintes internes de la plaque plongeante.',
        '2. Le métamorphisme hydrothermal préalable :',
        'Au cours de son voyage depuis la dorsale, la croûte océanique basaltique a été intensément hydratée au contact de l\'eau de mer (métamorphisme hydrothermal créant des faciès schistes verts riches en hornblende et chlorite).'
      ]
    },
    {
      title: 'II. LE MÉTAMORPHISME PROGRADE ET LA FUSION DU MANTEAU',
      content: [
        '1. La déshydratation de la plaque plongeante :',
        'Lors de son enfouissement en subduction sous forte pression et basse température relative, la plaque subit un métamorphisme prograde :',
        'Schistes verts → Schistes bleus (à glaucophane) → Éclogites (à grenat et jadéite pyroxénique).',
        'Ces transformations minéralogiques solides libèrent des quantités colossales d\'eau minérale vers le coin de manteau chevauchant situé au-dessus.',
        '2. La fusion partielle de la péridotite hydratée :',
        'La péridotite mantellique anhydre ne peut pas fondre aux températures régnant à 100 km de profondeur. Mais l\'apport de l\'eau libérée par la subduction abaisse brutalement le point de fusion (le solidus) de la péridotite. Il en résulte une fusion partielle générant un magma riche en eau et en silice.',
        '3. Le volcanisme andésitique explosif :',
        'Le magma ascendant subit une différenciation et s\'enrichit en gaz. En surface, il produit des éruptions explosives majeures associant des nuées ardentes dévastatrices, des dômes de lave visqueuse (andésites, dacites, rhyolites) et des plutons granitiques profonds (granodiorites).'
      ]
    },
    {
      title: 'III. DE LA SUBDUCTION À LA COLLISION CONTINENTALE',
      content: [
        'Lorsque la totalité de la lithosphère océanique a été subductée, deux croûtes continentales de faible densité (2,7 g/cm³) entrent en contact. La croûte continentale étant trop légère pour s\'enfoncer dans le manteau, le mouvement de convergence se traduit par un gigantesque empilement tectonique :',
        '• Raccourcissement horizontal et épaississement crustal par chevauchements et failles inverses.',
        '• Formation d\'une chaîne de collision (orogenèse, type Himalaya ou Alpes).',
        '• Présence d\'ophiolites : lambeaux de lithosphère océanique ancienne charriés sur le continent, témoins irréfutables de la suture océanique disparue.'
      ]
    }
  ]
};
