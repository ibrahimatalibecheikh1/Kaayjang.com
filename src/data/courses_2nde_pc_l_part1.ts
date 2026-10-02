import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE SECONDE L — PREMIÈRE PARTIE : PHYSIQUE
// Conforme au programme officiel national de la République du Sénégal
// Cours complets et ultra-détaillés sans résumé — leçons approfondies
// =========================================================================

export const LESSON_1_PC_2NDE_L: LessonContent = {
  id: 'pc-2nde-l-lecon-1',
  number: 'CHAPITRE 1',
  title: `L'électricité dans notre environnement : charges, conducteurs, isolants et sécurité`,
  subject: 'Physique-Chimie',
  classLevel: 'Seconde',
  fullText: `PROGRAMME DE PHYSIQUE-CHIMIE — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
PARTIE I : PHYSIQUE

CHAPITRE 1 : L'ÉLECTRICITÉ DANS NOTRE ENVIRONNEMENT

INTRODUCTION GÉNÉRALE
L'électricité est devenue l'énergie indispensable au fonctionnement du monde contemporain. Elle intervient à chaque instant de notre quotidien : dans l'éclairage de nos maisons et de nos rues, l'alimentation des appareils électroménagers (réfrigérateurs, ventilateurs, climatiseurs), le fonctionnement des télécommunications (téléphones portables, ordinateurs, réseaux internet), les transports ferroviaires et automobiles, ainsi que dans les infrastructures hospitalières et industrielles. Pour comprendre l'utilisation rationnelle de l'électricité, l'élève de Seconde L doit acquérir les notions physiques fondamentales qui régissent la matière à l'échelle microscopique, distinguer les différents types de matériaux (conducteurs et isolants), identifier les multiples effets du courant électrique et maîtriser impérativement les règles strictes de sécurité électrique afin de prévenir les accidents corporels et les incendies.

I. STRUCTURE DE LA MATIÈRE ET CHARGES ÉLECTRIQUES
1. La structure atomique de la matière
Toute matière (solide, liquide ou gazeuse) est constituée d'atomes, particules microscopiques d'un diamètre de l'ordre de 10⁻¹⁰ mètre (un dixième de nanomètre). Un atome comprend :
- Un noyau central très dense et compact, constitué de deux types de nucléons :
  * Les protons, particules chargées positivement. La charge élémentaire d'un proton est q_p = +e = +1,6 × 10⁻¹⁹ Coulomb (C).
  * Les neutrons, particules électriquement neutres de charge nulle (q_n = 0 C).
- Un cortège d'électrons en mouvement rapide autour du noyau, formant le nuage électronique. Chaque électron porte une charge élémentaire négative exacte q_e = -e = -1,6 × 10⁻¹⁹ C. La masse d'un électron est environ 1 836 fois plus faible que celle d'un proton (m_e ≈ 9,1 × 10⁻³¹ kg).
2. La neutralité électrique de l'atome
Dans un atome neutre à l'état fondamental, le nombre d'électrons gravitant autour du noyau est rigoureusement égal au nombre de protons présents dans le noyau (noté Z, numéro atomique). Par conséquent, la charge positive totale du noyau compense exactement la charge négative totale du nuage électronique :
Q_atome = (+Z × e) + (-Z × e) = 0 Coulomb.
L'atome est donc électriquement neutre dans son ensemble.
3. Les phénomènes d'électrisation et la loi des charges
Un corps matériel peut être électrisé lorsqu'il acquiert un excès ou subit un déficit d'électrons par rapport à son état neutre :
- Par frottement : en frottant une baguette de verre avec de la soie ou une règle en plastique sur un tissu en laine, des électrons sont arrachés de l'un des corps et transférés sur l'autre.
- Par contact : lorsqu'un corps déjà électrisé touche un corps neutre, des électrons migrent à travers la zone de contact.
- Par influence : l'approche d'un corps chargé induit une redistribution spatiale des charges mobiles sans contact direct.
Règle fondamentale d'électrostatique :
- Deux charges de même signe se repoussent mutuellement (répulsion entre deux charges positives ou entre deux charges négatives).
- Deux charges de signes opposés s'attirent mutuellement (attraction entre une charge positive et une charge négative).
Un corps qui a perdu des électrons possède un excès de charges positives : il est chargé positivement.
Un corps qui a capté des électrons possède un excès de charges négatives : il est chargé négativement.

II. CONDUCTEURS ET ISOLANTS ÉLECTRIQUES
La capacité d'un matériau à laisser circuler le courant électrique dépend de la mobilité de ses porteurs de charges microscopiques :
1. Les conducteurs électriques
Un conducteur électrique est un matériau qui contient des porteurs de charges libres capables de se déplacer sous l'effet d'une différence de potentiel :
- Dans les solides métalliques (cuivre, aluminium, fer, argent, or) : les atomes sont organisés en réseau cristallin. Les électrons périphériques les plus éloignés du noyau ne restent pas attachés à un atome précis ; ils se détachent et forment un "gaz d'électrons libres" mobiles dans tout le volume du métal. Le cuivre est le conducteur par excellence utilisé pour les fils et câbles des installations domestiques en raison de son excellente conductivité et de sa malléabilité. L'aluminium est privilégié pour les lignes aériennes haute tension de la Senelec pour sa légèreté.
- Dans les liquides ioniques (électrolytes) : les solutions aqueuses contenant des ions dissous (comme l'eau salée contenant des ions sodium Na⁺ et chlorure Cl⁻, ou l'acide chlorhydrique) conduisent le courant électrique grâce à la double migration des ions positifs (cations) vers la borne négative et des ions négatifs (anions) vers la borne positive. L'eau pure distillée est un très mauvais conducteur, mais l'eau du robinet ou l'eau de pluie chargée de sels minéraux dissous est conductrice.
2. Les isolants électriques (diélectriques)
Un isolant électrique est un matériau qui ne possède pratiquement aucun porteur de charge libre. Les électrons y sont fortement liés à leurs noyaux respectifs et ne peuvent pas se déplacer sous des tensions usuelles.
Exemples courants : le verre, la porcelaine, le plastique sec (PVC gainant les fils électriques), le caoutchouc des semelles de chaussures de sécurité, le bois sec, l'air sec, la bakélite.
Remarque capitale : un matériau isolant peut devenir conducteur s'il est mouillé (l'eau apporte des impuretés ioniques) ou si la tension appliquée dépasse sa tension de claquage (comme l'air qui s'ionise brutalement lors d'un éclair d'orage).

III. LES MULTIPLES EFFETS DU COURANT ÉLECTRIQUE DANS LA VIE QUOTIDIENNE
Le courant électrique est un flux ordonné de charges électriques. Lors de sa traversée d'un récepteur, il se manifeste par quatre effets physiques majeurs :
1. L'effet thermique (ou effet Joule)
Tout conducteur métallique traversé par un courant électrique s'échauffe par friction microscopique entre les électrons mobiles et les atomes du réseau cristallin.
- Applications utiles : fers à repasser, chauffe-eau électriques, radiateurs, grille-pain, plaques de cuisson, fusibles thermiques.
- Inconvénients majeurs : pertes d'énergie calorifique en ligne lors du transport de l'électricité (pertes Joule dans les câbles), échauffement anormal des circuits électriques surchargés pouvant déclencher des incendies.
2. L'effet lumineux
L'électricité peut produire de la lumière de deux manières principales :
- Par incandescence : le passage du courant porte un filament métallique réfractaire (tungstène) à plus de 2 500 °C jusqu'à ce qu'il émette de la lumière blanche.
- Par luminescence et électroluminescence : décharge électrique dans un gaz (tubes néon fluorescents) ou émission de photons lors du passage d'électrons à travers une jonction semi-conductrice (diodes électroluminescentes ou lampes LED), offrant un rendement énergétique bien supérieur et consommant beaucoup moins d'énergie.
3. L'effet magnétique
Tout conducteur parcouru par un courant électrique engendre un champ magnétique dans son voisinage immédiat (expérience historique d'Oersted en 1820 faisant dévier l'aiguille d'une boussole).
- Applications : création d'électroaimants (bobine de fil entourant un noyau de fer doux qui s'aimante uniquement lorsque le courant passe, utilisé dans les sonnettes de porte, les grues de levage de ferraille), moteurs électriques (ventilateurs, mixeurs, pompes hydrauliques transformant l'énergie électrique en énergie mécanique de rotation) et transformateurs électriques.
4. L'effet chimique
Le passage d'un courant électrique continu à travers une solution conductrice (électrolyte) provoque des réactions chimiques d'oxydoréduction aux électrodes : c'est l'électrolyse.
- Applications industrielles : galvanoplastie (dépôt électrolytique d'une fine couche protectrice d'or, d'argent, de zinc ou de chrome sur un métal ordinaire), recharge des batteries automobiles et accumulateurs de téléphones portables, et production industrielle d'aluminium et de chlore.

IV. LA SÉCURITÉ ÉLECTRIQUE ET LA PRÉVENTION DES RISQUES
L'utilisation de l'électricité comporte des risques graves d'accidents corporels et de sinistres matériels que chaque citoyen doit connaître :
1. Les risques corporels pour l'homme
Le corps humain est constitué à plus de 65 % d'eau salée : il est donc conducteur d'électricité. Le passage du courant à travers le corps humain s'appelle l'électrisation. Si cette électrisation entraîne la mort, on parle d'électrocution.
Les effets physiologiques dépendent de l'intensité du courant traversant le corps :
- De 1 à 5 milliampères (mA) : seuil de perception, picotement léger ;
- À 10 mA : contraction musculaire involontaire (tétanisation), la victime ne peut plus lâcher le fil conducteur ("effet de collage") ;
- De 25 à 30 mA : tétanisation des muscles de la cage thoracique, blocage respiratoire et asphyxie en quelques secondes ;
- Au-delà de 50 mA : fibrillation ventriculaire du cœur (désorganisation totale des battements cardiaques), arrêt circulatoire mortel en quelques minutes.
Facteur aggravant : la peau mouillée ou humide a une résistance électrique beaucoup plus faible que la peau sèche. Une tension ordinaire de 220 V du secteur domestique peut être mortelle instantanément les mains ou les pieds mouillés.
2. Les causes fréquentes d'accidents et d'incendies
- Le court-circuit : contact direct accidentel entre le fil de phase et le fil de neutre sans récepteur intermédiaire. La résistance du circuit devient quasi nulle, entraînant une montée vertigineuse de l'intensité (plusieurs centaines d'ampères), un échauffement instantané des câbles et l'inflammation des gaines plastiques.
- La surcharge électrique : branchement excessif d'appareils de forte puissance sur une même multiprise, provoquant la fusion des fils par effet Joule excessif.
- Les contacts directs (toucher un fil dénudé sous tension) et indirects (défaut d'isolement interne d'une machine dont la carcasse métallique se retrouve accidentellement sous tension).
3. Les dispositifs de protection réglementaires
Toute installation électrique aux normes doit comporter :
- Le disjoncteur général et les disjoncteurs divisionnaires magnéto-thermiques : coupent automatiquement le circuit en cas de court-circuit brutal ou de surcharge persistante.
- Les fusibles : cartouches contenant un fil d'alliage calibré qui fond dès que l'intensité dépasse la valeur nominale inscrite (ex. fusible 10 A ou 16 A), ouvrant ainsi le circuit.
- Le disjoncteur différentiel à haute sensibilité (30 mA) associé à la prise de terre : si un courant de fuite vers la terre dépasse 30 mA (par exemple lorsqu'une personne touche la carcasse d'une machine défectueuse reliée à la terre), le disjoncteur différentiel coupe le courant en moins de 30 millisecondes, sauvant la vie de l'utilisateur.

CONCLUSION ET CONSIGNES CIVIQUES
L'électricité est une ressource prodigieuse qui exige le respect scrupuleux des règles de sécurité. Ne jamais toucher un interrupteur ou un appareil avec les mains mouillées, ne jamais tirer sur le cordon pour débrancher une prise, couper systématiquement le disjoncteur général avant toute intervention sur l'installation et ne jamais bricoler un fusible avec un fil de cuivre non calibré sont les gestes élémentaires qui sauvent des vies.`,
  introduction: `L'électricité est devenue l'énergie indispensable au fonctionnement du monde contemporain. Elle intervient à chaque instant de notre quotidien : dans l'éclairage de nos maisons et de nos rues, l'alimentation des appareils électroménagers (réfrigérateurs, ventilateurs, climatiseurs), le fonctionnement des télécommunications (téléphones portables, ordinateurs, réseaux internet), les transports ferroviaires et automobiles, ainsi que dans les infrastructures hospitalières et industrielles. Pour comprendre l'utilisation rationnelle de l'électricité, l'élève de Seconde L doit acquérir les notions physiques fondamentales qui régissent la matière à l'échelle microscopique, distinguer les différents types de matériaux (conducteurs et isolants), identifier les multiples effets du courant électrique et maîtriser impérativement les règles strictes de sécurité électrique afin de prévenir les accidents corporels et les incendies.`,
  sections: [
    {
      title: "I. Structure de la matière et charges électriques",
      content: [
        "L'atome est composé d'un noyau dense (protons de charge +e = +1,6 × 10⁻¹⁹ C et neutrons neutres) et d'un nuage d'électrons de charge -e.",
        "Neutralité électrique : le nombre d'électrons est égal au nombre de protons Z, donc la charge globale de l'atome est nulle.",
        "Électrisation : un corps électrisé possède un excès d'électrons (chargé négativement) ou un déficit d'électrons (chargé positivement). Deux charges de même signe se repoussent, deux charges de signes opposés s'attirent."
      ]
    },
    {
      title: "II. Conducteurs et isolants électriques",
      content: [
        "Conducteurs : contiennent des porteurs de charges mobiles. Dans les métaux (cuivre, aluminium), ce sont les électrons libres. Dans les solutions aqueuses (eau salée), ce sont les ions (cations et anions).",
        "Isolants : ne contiennent pas de charges libres (verre, plastique PVC sec, caoutchouc, bois sec). L'humidité ou une surtension peut rendre un isolant conducteur."
      ]
    },
    {
      title: "III. Les multiples effets du courant électrique",
      content: [
        "Effet thermique (effet Joule) : échauffement de tout conducteur traversé par un courant (fer à repasser, chauffe-eau, mais aussi risques d'incendies).",
        "Effet lumineux : incandescence (filament chaud) et luminescence économique (lampes LED).",
        "Effet magnétique : création d'un champ magnétique autour du courant (électroaimants, moteurs de ventilateurs).",
        "Effet chimique : réactions d'oxydoréduction par électrolyse (placage des métaux, recharge de batteries)."
      ]
    },
    {
      title: "IV. La sécurité électrique et les dispositifs de protection",
      content: [
        "Dangers corporels : électrisation et électrocution. Le corps humain est conducteur. Dès 10 mA, tétanisation musculaire ; dès 25 mA, arrêt respiratoire ; au-delà de 50 mA, fibrillation cardiaque mortelle. Danger décuplé avec les mains ou pieds mouillés.",
        "Dangers matériels : court-circuit (intensité colossale, incendies) et surcharge des multiprises.",
        "Protection obligatoire : disjoncteurs, fusibles calibrés, et disjoncteur différentiel 30 mA associé à la prise de terre pour évacuer les courants de fuite."
      ]
    }
  ],
  conclusion: `L'électricité est une ressource prodigieuse qui exige le respect scrupuleux des règles de sécurité. Ne jamais toucher un interrupteur ou un appareil avec les mains mouillées, ne jamais tirer sur le cordon pour débrancher une prise, couper systématiquement le disjoncteur général avant toute intervention sur l'installation et ne jamais bricoler un fusible avec un fil de cuivre non calibré sont les gestes élémentaires qui sauvent des vies.`
};

export const LESSON_2_PC_2NDE_L: LessonContent = {
  id: 'pc-2nde-l-lecon-2',
  number: 'CHAPITRE 2',
  title: `Le circuit électrique : composants, associations série et dérivation, symboles normalisés`,
  subject: 'Physique-Chimie',
  classLevel: 'Seconde',
  fullText: `PROGRAMME DE PHYSIQUE-CHIMIE — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
PARTIE I : PHYSIQUE

CHAPITRE 2 : LE CIRCUIT ÉLECTRIQUE

INTRODUCTION
L'énergie électrique ne peut se manifester et accomplir un travail utile que si elle circule au sein d'une boucle fermée appelée circuit électrique. De la simple lampe de poche jusqu'aux réseaux électriques complexes de nos habitations ou d'un lycée, les principes directeurs de circulation, de raccordement et de schéma demeurent identiques. L'objectif de cette leçon est d'étudier la composition d'un circuit électrique, de distinguer sans équivoque un circuit ouvert d'un circuit fermé, d'analyser le rôle respectif des générateurs et des récepteurs, de comparer les associations en série et en dérivation (parallèle) et de maîtriser la réalisation de schémas normalisés clairs et rigoureux.

I. NOTION DE CIRCUIT ÉLECTRIQUE ET COMPOSANTS ÉLÉMENTAIRES
1. Définition du circuit électrique
Un circuit électrique est une chaîne continue de dipôles électriques (composants possédant deux bornes de raccordement) reliés entre eux par des conducteurs métalliques (fils de connexion), dans laquelle le courant électrique peut circuler de manière continue.
2. Les quatre éléments constitutifs incontournables
Pour qu'un circuit électrique fonctionne, il doit obligatoirement réunir :
- Un générateur : appareil qui produit ou fournit l'énergie électrique au circuit en créant un déséquilibre de charges entre ses deux bornes. Exemples : pile électrochimique (pile ronde 1,5 V, pile plate 4,5 V), batterie d'accumulateurs (batterie 12 V de voiture), dynamo de bicyclette, panneau solaire photovoltaïque, prise secteur de la Senelec.
- Un ou plusieurs récepteurs : appareils qui reçoivent l'énergie électrique et la transforment en une autre forme d'énergie utile. Exemples : lampe (transforme en énergie lumineuse et thermique), moteur électrique (transforme en énergie mécanique de rotation), résistance chauffante (transforme en chaleur).
- Les fils de connexion : conducteurs en cuivre souple gainés de plastique isolant qui assurent la liaison électrique sans perte entre les bornes des différents composants.
- L'organe de commande (interrupteur) : dispositif mécanique permettant d'interrompre ou d'autoriser à volonté le passage du courant électrique dans le circuit sans avoir à débrancher les fils.

II. CIRCUIT FERMÉ ET CIRCUIT OUVERT
1. Le circuit fermé
Un circuit est dit fermé lorsque la chaîne des composants et des conducteurs forme une boucle ininterrompue entre la borne positive (+) et la borne négative (-) du générateur. Dans ce cas :
- Les électrons libres peuvent circuler dans tout le circuit.
- Le courant électrique circule effectivement.
- Les récepteurs fonctionnent (la lampe s'allume, le moteur tourne).
2. Le circuit ouvert
Un circuit est dit ouvert dès lors que la continuité de la chaîne conductrice est rompue en un point quelconque (interrupteur en position ouverte, fil débranché, filament d'une lampe grillé ou fusible fondu). Dans ce cas :
- L'air, qui est un excellent isolant électrique, s'interpose entre les conducteurs.
- Le courant électrique ne peut plus circuler du tout (l'intensité est rigoureusement nulle : I = 0 A).
- Tous les récepteurs situés dans cette branche s'éteignent instantanément.

III. ASSOCIATIONS EN SÉRIE ET ASSOCIATIONS EN DÉRIVATION
La manière dont les composants sont connectés entre eux modifie fondamentalement le comportement du circuit électrique :
1. Le circuit en série (boucle unique)
- Définition : dans un montage en série, les dipôles sont branchés les uns à la suite des autres, formant une seule et unique boucle de courant sans aucune bifurcation.
- Propriétés fondamentales :
  * Le courant électrique est le même à travers tous les dipôles.
  * Si l'on ajoute des lampes supplémentaires en série, la résistance totale augmente et l'éclat de toutes les lampes faiblit progressivement.
  * Inconvénient majeur : si une seule lampe grille ou est dévissée, le circuit est ouvert dans son ensemble et toutes les autres lampes s'éteignent instantanément. C'était le défaut classique des anciennes guirlandes lumineuses de Noël.
2. Le circuit en dérivation (ou en parallèle, à plusieurs boucles)
- Définition : dans un montage en dérivation, le circuit comporte des bifurcations appelées nœuds (point de rencontre d'au moins trois conducteurs). Les récepteurs sont branchés en parallèle sur différentes branches dérivées reliées aux deux mêmes points communs (bornes du générateur).
- Propriétés fondamentales :
  * Le circuit comprend une branche principale (qui contient le générateur) et plusieurs branches dérivées (chacune contenant un récepteur).
  * Indépendance totale des récepteurs : si une lampe grille ou est retirée dans une branche dérivée, les autres branches continuent d'être alimentées normalement et leurs récepteurs continuent de fonctionner sans aucune perturbation.
  * Maintien de la tension nominale : chaque récepteur branché en dérivation reçoit la totalité de la tension délivrée par le générateur.
  * Application universelle : l'ensemble des installations domestiques (maisons, écoles, bureaux) est obligatoirement raccordé en dérivation. Lorsque vous éteignez la lumière de votre chambre, le réfrigérateur et le téléviseur du salon continuent de fonctionner.

IV. LES SYMBOLES NORMALISÉS ET LE SCHÉMA ÉLECTRIQUE
Pour représenter un circuit de manière universelle, compréhensible par tous les techniciens et ingénieurs du monde entier, la physique utilise des symboles graphiques normalisés :
1. Les principaux symboles normalisés
- Pile / Générateur de courant continu : deux traits parallèles inégaux (le trait long et fin représente le pôle positif +, le trait court et épais représente le pôle négatif -).
- Lampe à incandescence : un cercle traversé d'une croix en 'X'.
- Interrupteur ouvert : deux petits cercles avec un segment levé.
- Interrupteur fermé : deux petits cercles reliés par un segment continu.
- Moteur électrique : un cercle contenant la lettre majuscule 'M'.
- Conducteur ohmique (résistance) : un rectangle allongé avec deux bornes d'extrémité.
- Fils de connexion : traits droits continus horizontaux et verticaux.
- Nœud de dérivation : un point noir épais à l'intersection de deux conducteurs.
- Ampèremètre : un cercle contenant la lettre majuscule 'A'.
- Voltmètre : un cercle contenant la lettre majuscule 'V'.
2. Règles de dessin d'un schéma électrique
- Utiliser impérativement une règle et un crayon pour tracer des lignes bien droites.
- Dessiner les schémas sous une forme rectangulaire ou carrée avec des angles droits nets.
- Ne jamais placer un symbole dans un angle du rectangle.
- Indiquer clairement le sens conventionnel du courant électrique par des flèches placées sur les fils (le courant circule conventionnellement à l'extérieur du générateur de la borne positive + vers la borne négative -).

CONCLUSION
La maîtrise du circuit électrique, de ses composants actifs et passifs, et la distinction nette entre le montage en série (fragile et dépendant) et le montage en dérivation (robuste, indépendant et adopté universellement dans l'habitat) constituent le fondement pratique indispensable pour aborder l'étude quantitative des grandeurs électriques que sont l'intensité et la tension.`,
  introduction: `L'énergie électrique ne peut se manifester et accomplir un travail utile que si elle circule au sein d'une boucle fermée appelée circuit électrique. De la simple lampe de poche jusqu'aux réseaux électriques complexes de nos habitations ou d'un lycée, les principes directeurs de circulation, de raccordement et de schéma demeurent identiques. L'objectif de cette leçon est d'étudier la composition d'un circuit électrique, de distinguer sans équivoque un circuit ouvert d'un circuit fermé, d'analyser le rôle respectif des générateurs et des récepteurs, de comparer les associations en série et en dérivation (parallèle) et de maîtriser la réalisation de schémas normalisés clairs et rigoureux.`,
  sections: [
    {
      title: "I. Notion de circuit électrique et composants élémentaires",
      content: [
        "Un circuit électrique est une chaîne continue de conducteurs et de dipôles permettant la circulation du courant.",
        "Composants indispensables : générateur (fournit l'énergie : pile, batterie), récepteur (transforme l'énergie : lampe, moteur), fils conducteurs et interrupteur (commande marche/arrêt)."
      ]
    },
    {
      title: "II. Circuit fermé et circuit ouvert",
      content: [
        "Circuit fermé : chaîne conductrice continue, les électrons circulent, le courant passe et les récepteurs fonctionnent.",
        "Circuit ouvert : chaîne interrompue (interrupteur ouvert, fil débranché, lampe grillée), l'air isolant bloque le passage du courant (I = 0 A)."
      ]
    },
    {
      title: "III. Associations en série et en dérivation",
      content: [
        "Montage en série : boucle unique, dipôles branchés les uns après les autres. Si un élément tombe en panne ou est retiré, tout le circuit s'éteint.",
        "Montage en dérivation (parallèle) : plusieurs boucles connectées aux mêmes nœuds. Indépendance totale des récepteurs : chaque appareil fonctionne séparément à la tension nominale. C'est le montage utilisé dans toutes les habitations."
      ]
    },
    {
      title: "IV. Symboles normalisés et règles de schématisation",
      content: [
        "Symboles officiels : pile (+ long et fin, - court et épais), lampe (cercle avec croix), interrupteur, moteur (M), résistance (rectangle), ampèremètre (A), voltmètre (V).",
        "Règles : tracé rectangulaire à la règle, angles droits nets, aucun composant dans un angle, flèches indiquant le sens conventionnel du courant du pôle (+) vers le pôle (-)."
      ]
    }
  ],
  conclusion: `La maîtrise du circuit électrique, de ses composants actifs et passifs, et la distinction nette entre le montage en série (fragile et dépendant) et le montage en dérivation (robuste, indépendant et adopté universellement dans l'habitat) constituent le fondement pratique indispensable pour aborder l'étude quantitative des grandeurs électriques que sont l'intensité et la tension.`
};

export const LESSON_3_PC_2NDE_L: LessonContent = {
  id: 'pc-2nde-l-lecon-3',
  number: 'CHAPITRE 3',
  title: `Intensité et tension électriques : définitions, lois des circuits, mesures et calibres`,
  subject: 'Physique-Chimie',
  classLevel: 'Seconde',
  fullText: `PROGRAMME DE PHYSIQUE-CHIMIE — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
PARTIE I : PHYSIQUE

CHAPITRE 3 : INTENSITÉ ET TENSION ÉLECTRIQUES

INTRODUCTION
Pour caractériser quantitativement le courant électrique et prévoir le comportement des installations, la physique définit deux grandeurs fondamentales inséparables mais de natures distinctes : l'intensité du courant électrique (notée I) et la tension électrique (notée U). Si l'intensité mesure le débit de charges électriques s'écoulant à travers un conducteur, la tension représente la force motrice ou la différence d'état électrique qui pousse ces charges à se déplacer. L'élève de Seconde L doit assimiler avec précision les unités légales, les appareils de mesure spécifiques, les modalités de branchement et les lois fondamentales qui s'appliquent dans les circuits en série et en dérivation (loi d'unicité, loi d'additivité des intensités et des tensions).

I. L'INTENSITÉ DU COURANT ÉLECTRIQUE
1. Définition physique
L'intensité du courant électrique caractérise le débit de charges électriques, c'est-à-dire la quantité d'électricité Q (mesurée en coulombs C) qui traverse une section droite d'un conducteur pendant une durée t (mesurée en secondes s) :
I = Q / t
où :
- I est l'intensité du courant en ampères (A) ;
- Q est la quantité de charge électrique totale en coulombs (C) ;
- t est la durée de passage en secondes (s).
Puisque chaque électron porte une charge élémentaire e = 1,6 × 10⁻¹⁹ C, une quantité de charge Q correspond à un nombre N d'électrons tel que Q = N × e.
Par exemple, un courant d'intensité I = 1 A correspond au passage vertigineux d'environ 6,24 × 10¹⁸ électrons par seconde à travers la section du fil conducteur !
2. Unités et sous-multiples
L'unité légale du Système International (SI) est l'ampère (symbole : A), nommé en hommage au physicien français André-Marie Ampère.
Sous-multiples et multiples usuels :
- Le milliampère : 1 mA = 10⁻³ A = 0,001 A.
- Le microampère : 1 µA = 10⁻⁶ A.
- Le kiloampère : 1 kA = 10³ A = 1 000 A (utilisé dans les lignes haute tension).
3. Mesure de l'intensité : l'ampèremètre
L'appareil de mesure de l'intensité est l'ampèremètre (ou la fonction ampèremètre d'un multimètre numérique) :
- Règle de branchement absolue : l'ampèremètre doit obligatoirement être branché en SÉRIE dans la branche où l'on souhaite mesurer le courant. Il faut donc ouvrir le circuit pour y insérer l'appareil afin que la totalité des charges le traverse.
- Polarité : le courant doit entrer par la borne positive (notée 'A' ou 'mA') et sortir par la borne négative (notée 'COM').
- Danger mortel de court-circuit : ne JAMAIS brancher un ampèremètre en dérivation aux bornes d'un générateur ou d'un récepteur, car sa résistance interne quasi nulle provoquerait un court-circuit destructeur instantané !

II. LA TENSION ÉLECTRIQUE
1. Définition physique
La tension électrique (ou différence de potentiel ddp) entre deux points A et B d'un circuit, notée U_AB, caractérise la différence d'état électrique qui existe entre ces deux points. Elle peut être comparée au dénivelé topographique ou à la différence de pression qui fait couler l'eau d'un barrage vers une vallée : sans dénivelé (tension nulle), l'eau ne coule pas (aucun courant ne circule).
2. Unités et sous-multiples
L'unité légale de tension dans le Système International est le volt (symbole : V), en hommage au physicien italien Alessandro Volta, inventeur de la pile électrique.
Sous-multiples et multiples usuels :
- Le millivolt : 1 mV = 10⁻³ V = 0,001 V.
- Le kilovolt : 1 kV = 10³ V = 1 000 V.
- Le mégavolt : 1 MV = 10⁶ V.
Exemples de tensions familières : pile bâton (1,5 V), batterie de smartphone (3,7 V), batterie de voiture (12 V), secteur domestique au Sénégal (220 V alternatif), ligne THT Senelec (90 kV ou 225 kV).
3. Mesure de la tension : le voltmètre
L'appareil de mesure de la tension est le voltmètre :
- Règle de branchement absolue : le voltmètre se branche toujours en DÉRIVATION (en parallèle) aux bornes du dipôle étudié, sans ouvrir ni modifier le circuit en fonctionnement.
- Polarité : la borne 'V' est reliée au point de plus haut potentiel (côté positif) et la borne 'COM' au point de plus bas potentiel (côté négatif).

III. LES LOIS DE L'INTENSITÉ DANS LES CIRCUITS
1. Dans un circuit en série : Loi d'unicité de l'intensité
Dans un circuit ne comportant qu'une seule boucle sans dérivation, le débit de charges est identique en tout point :
Loi : L'intensité du courant électrique est la même en tout point d'un circuit en série.
I = I₁ = I₂ = I₃ = ...
L'ordre des dipôles n'a aucune influence sur l'intensité du courant.
2. Dans un circuit en dérivation : Loi d'additivité des intensités (Loi des nœuds)
Un nœud est le point de jonction d'au moins trois conducteurs. Les charges électriques ne s'accumulent pas au nœud.
Loi : L'intensité du courant dans la branche principale est égale à la somme des intensités qui circulent dans les différentes branches dérivées.
I_principale = I₁ + I₂ + I₃ + ...

IV. LES LOIS DE LA TENSION DANS LES CIRCUITS
1. Dans un circuit en dérivation : Loi d'unicité de la tension
Loi : La tension électrique est exactement la même aux bornes de dipôles branchés en dérivation entre les mêmes nœuds.
U_générateur = U₁ = U₂ = U₃ = ...
C'est pour cette raison fondamentale que tous les appareils électroménagers d'une maison (lampe de 60 W, fer à repasser de 1 200 W, réfrigérateur) sont branchés en dérivation : ils reçoivent tous la même tension de 220 V requise pour leur fonctionnement normal.
2. Dans un circuit en série : Loi d'additivité des tensions (Loi des mailles)
Loi : La tension aux bornes d'un ensemble de dipôles branchés en série est égale à la somme des tensions aux bornes de chacun d'eux.
U_générateur = U₁ + U₂ + U₃ + ...

V. CHOIX DU CALIBRE ET PRÉCAUTIONS EXPÉRIMENTALES
Sur un appareil de mesure analogique ou multimètre :
- Le calibre est la valeur maximale que l'appareil peut mesurer sans risque de détérioration.
- Règle de sécurité : toujours débuter la mesure par le calibre le plus élevé possible, puis descendre progressivement vers un calibre inférieur plus proche de la valeur mesurée afin d'obtenir la meilleure précision de lecture.
- Si le chiffre '1.' ou 'OL' apparaît sur un écran numérique, il y a dépassement de calibre : il faut immédiatement passer à un calibre supérieur.

CONCLUSION
L'intensité I (débit d'électrons en ampères mesuré en série) et la tension U (différence d'état en volts mesurée en dérivation) constituent le duo fondamental de l'électrocinétique. La compréhension de la loi d'unicité et de la loi d'additivité permet de calculer n'importe quelle grandeur inconnue dans un réseau électrique et d'analyser rationnellement le fonctionnement des installations quotidiennes.`,
  introduction: `Pour caractériser quantitativement le courant électrique et prévoir le comportement des installations, la physique définit deux grandeurs fondamentales inséparables mais de natures distinctes : l'intensité du courant électrique (notée I) et la tension électrique (notée U). Si l'intensité mesure le débit de charges électriques s'écoulant à travers un conducteur, la tension représente la force motrice ou la différence d'état électrique qui pousse ces charges à se déplacer. L'élève de Seconde L doit assimiler avec précision les unités légales, les appareils de mesure spécifiques, les modalités de branchement et les lois fondamentales qui s'appliquent dans les circuits en série et en dérivation (loi d'unicité, loi d'additivité des intensités et des tensions).`,
  sections: [
    {
      title: "I. L'intensité du courant électrique",
      content: [
        "Définition : débit de charges électriques à travers une section droite : I = Q / t (avec Q en coulombs, t en secondes, I en ampères A).",
        "Puisque Q = N × e (e = 1,6 × 10⁻¹⁹ C), un courant de 1 A équivaut au passage de 6,24 × 10¹⁸ électrons par seconde.",
        "Mesure : l'ampèremètre se branche obligatoirement EN SÉRIE. Le courant entre par la borne A et sort par COM. Ne jamais le brancher en dérivation (danger de court-circuit)."
      ]
    },
    {
      title: "II. La tension électrique",
      content: [
        "Définition : différence d'état électrique (potentiel) entre deux points d'un circuit, analogue au dénivelé d'une chute d'eau.",
        "Unité : le volt (V). Tensions usuelles : pile (1,5 V), secteur (220 V).",
        "Mesure : le voltmètre se branche obligatoirement EN DÉRIVATION aux bornes du composant, entre la borne V (+) et COM (-)."
      ]
    },
    {
      title: "III. Les lois de l'intensité",
      content: [
        "En série : loi d'unicité => I = I₁ = I₂ (l'intensité est la même partout dans la boucle).",
        "En dérivation : loi d'additivité (loi des nœuds) => I_principale = I₁ + I₂ + ... (l'intensité principale se divise entre les branches)."
      ]
    },
    {
      title: "IV. Les lois de la tension",
      content: [
        "En dérivation : loi d'unicité => U_générateur = U₁ = U₂ (tous les appareils reçoivent la même tension, cas des prises de la maison à 220 V).",
        "En série : loi d'additivité => U_générateur = U₁ + U₂ + ... (la tension totale est la somme des tensions partielles)."
      ]
    },
    {
      title: "V. Choix des calibres et précautions",
      content: [
        "Le calibre est la valeur maximale mesurable. Toujours débuter par le plus grand calibre pour protéger l'appareil, puis réduire pour affiner la précision de lecture."
      ]
    }
  ],
  conclusion: `L'intensité I (débit d'électrons en ampères mesuré en série) et la tension U (différence d'état en volts mesurée en dérivation) constituent le duo fondamental de l'électrocinétique. La compréhension de la loi d'unicité et de la loi d'additivité permet de calculer n'importe quelle grandeur inconnue dans un réseau électrique et d'analyser rationnellement le fonctionnement des installations quotidiennes.`
};

export const LESSON_4_PC_2NDE_L: LessonContent = {
  id: 'pc-2nde-l-lecon-4',
  number: 'CHAPITRE 4',
  title: `Mouvement et vitesse : relativité du mouvement, trajectoire, vitesse moyenne et mouvement uniforme`,
  subject: 'Physique-Chimie',
  classLevel: 'Seconde',
  fullText: `PROGRAMME DE PHYSIQUE-CHIMIE — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
PARTIE I : PHYSIQUE

CHAPITRE 4 : MOUVEMENT ET VITESSE

INTRODUCTION
Dans l'Univers, rien n'est dans un état d'immobilité absolue : les planètes gravitent autour des étoiles, l'air circule dans l'atmosphère, les véhicules se déplacent sur les routes et le sang circule dans nos artères. La cinématique est la branche de la mécanique physique qui étudie et décrit les mouvements des corps dans l'espace indépendamment des causes qui les provoquent. Pour décrire rigoureusement le mouvement d'un mobile, le physicien doit nécessairement définir un solide de référence appelé référentiel, caractériser la trajectoire suivie et quantifier la rapidité du déplacement par la notion de vitesse moyenne. L'élève de Seconde L apprendra à convertir les unités de vitesse, à identifier les différents types de mouvements et à maîtriser la loi horaire du mouvement rectiligne uniforme.

I. LA NOTION DE RÉFÉRENTIEL ET LA RELATIVITÉ DU MOUVEMENT
1. Qu'est-ce qu'un référentiel ?
Un référentiel est un objet matériel indéformable (ou ensemble d'objets fixes les uns par rapport aux autres) choisi arbitrairement par l'observateur, par rapport auquel on étudie la position et le déplacement d'un mobile au cours du temps. Un référentiel est obligatoirement associé à :
- Un repère d'espace (axes orthonormés gradués permettant de repérer les coordonnées cartésiennes de position) ;
- Un repère de temps (une horloge ou un chronomètre avec une origine des temps t = 0 s).
2. Le principe de relativité du mouvement
Le mouvement et le repos ne sont jamais absolus : ils sont éminemment relatifs au référentiel choisi. Un même objet peut être simultanément en mouvement par rapport à un référentiel et parfaitement immobile par rapport à un autre.
Exemple concret classique :
Imaginons un passager assis dans un bus Dakar Dem Dikk roulant sur la voie réservée du BRT à 50 km/h :
- Par rapport au bus (référentiel du bus) : la position du passager ne change pas au cours du temps ; le passager est au REPOS.
- Par rapport à un piéton arrêté sur le trottoir (référentiel terrestre) : la position du passager change de 50 kilomètres chaque heure ; le passager est en MOUVEMENT.
3. Les trois grands référentiels usuels en physique
- Le référentiel terrestre (ou du laboratoire) : lié à la surface de la Terre. Il est utilisé pour tous les mouvements de la vie quotidienne (course d'un athlète, déplacement d'une voiture, vol d'un oiseau).
- Le référentiel géocentrique : son origine est le centre de la Terre, et ses trois axes sont dirigés vers trois étoiles lointaines fixes. Il est utilisé pour étudier le mouvement des satellites artificiels et de la Lune autour de la Terre.
- Le référentiel héliocentrique (de Copernic) : son origine est le centre du Soleil. Il est utilisé pour étudier le mouvement des planètes du système solaire gravitant autour du Soleil.

II. LA TRAJECTOIRE D'UN MOBILE
1. Définition
La trajectoire d'un point mobile est l'ensemble continu de toutes les positions successives occupées par ce point au cours de son déplacement dans un référentiel donné. Tout comme le mouvement lui-même, la forme de la trajectoire dépend du référentiel d'observation.
2. Les trois grandes formes de trajectoires
- Trajectoire rectiligne : la trajectoire est une portion de ligne droite (ex. une bille tombant en chute libre verticale sans vent).
- Trajectoire circulaire : la trajectoire est un cercle ou un arc de cercle (ex. l'extrémité de l'aiguille d'une montre, une cabine de grande roue).
- Trajectoire curviligne : la trajectoire est une courbe plane ou gauche quelconque qui n'est ni une droite ni un cercle (ex. la trajectoire parabolique d'un ballon de football botté par un joueur).

III. LA VITESSE MOYENNE ET LES CONVERSIONS D'UNITÉS
1. Définition de la vitesse moyenne
La vitesse moyenne (notée v) d'un mobile est le quotient de la distance totale d parcourue par la durée totale Δt mise pour parcourir cette distance :
v = d / Δt
Formules dérivées indispensables :
- Pour calculer la distance parcourue : d = v × Δt
- Pour calculer la durée du parcours : Δt = d / v
2. Les unités de mesure et leur conversion
- Dans le Système International (SI), l'unité légale de vitesse est le mètre par seconde (m/s ou m·s⁻¹), avec la distance d en mètres (m) et la durée Δt en secondes (s).
- Dans la vie courante, on utilise universellement le kilomètre par heure (km/h ou km·h⁻¹), avec la distance d en kilomètres (km) et la durée Δt en heures (h).
Relation de conversion fondamentale :
1 km = 1 000 m et 1 h = 3 600 s.
Donc 1 m/s = (1/1 000 km) / (1/3 600 h) = 3 600 / 1 000 km/h = 3,6 km/h.
Règle d'or :
- Pour convertir des m/s en km/h : on MULTIPLIE par 3,6.
- Pour convertir des km/h en m/s : on DIVISE par 3,6.
Exemples pratiques :
- Une vitesse de 20 m/s équivaut à : 20 × 3,6 = 72 km/h.
- Une limitation de vitesse en ville de 50 km/h équivaut à : 50 / 3,6 ≈ 13,89 m/s.
- Une vitesse de 90 km/h sur l'autoroute à péage équivaut à : 90 / 3,6 = 25 m/s.

IV. LE MOUVEMENT UNIFORME
1. Définition et caractéristiques
Un mouvement est dit uniforme lorsque la valeur de la vitesse du mobile demeure strictement constante au cours du temps (la vitesse ne varie pas : v = constante).
Dans un mouvement uniforme, le mobile parcourt des distances égales pendant des intervalles de temps successifs égaux. La distance parcourue d est directement proportionnelle à la durée t.
2. Le Mouvement Rectiligne Uniforme (MRU)
C'est le mouvement le plus simple en physique : le mobile se déplace en ligne droite (trajectoire rectiligne) à vitesse constante.
Sa loi horaire d'espace s'écrit :
d = v × t (ou x(t) = v × t + x₀)
Le graphe de la distance d en fonction du temps t est une droite passant par l'origine, dont le coefficient directeur est égal à la vitesse v.
3. Distinction avec d'autres types de mouvements
- Mouvement accéléré : la valeur de la vitesse augmente au cours du temps (le mobile va de plus en plus vite).
- Mouvement ralenti (ou décéléré) : la valeur de la vitesse diminue au cours du temps (le mobile freine).

CONCLUSION
La description d'un mouvement nécessite toujours la précision rigoureuse du référentiel choisi. La combinaison de la trajectoire (rectiligne, circulaire ou curviligne) et de l'évolution de la vitesse (uniforme, accéléré ou ralenti) permet de classifier et de modéliser tous les déplacements mécaniques du monde qui nous entoure.`,
  introduction: `Dans l'Univers, rien n'est dans un état d'immobilité absolue : les planètes gravitent autour des étoiles, l'air circule dans l'atmosphère, les véhicules se déplacent sur les routes et le sang circule dans nos artères. La cinématique est la branche de la mécanique physique qui étudie et décrit les mouvements des corps dans l'espace indépendamment des causes qui les provoquent. Pour décrire rigoureusement le mouvement d'un mobile, le physicien doit nécessairement définir un solide de référence appelé référentiel, caractériser la trajectoire suivie et quantifier la rapidité du déplacement par la notion de vitesse moyenne. L'élève de Seconde L apprendra à convertir les unités de vitesse, à identifier les différents types de mouvements et à maîtriser la loi horaire du mouvement rectiligne uniforme.`,
  sections: [
    {
      title: "I. Référentiel et relativité du mouvement",
      content: [
        "Un référentiel est un solide de référence muni d'un repère d'espace et d'une horloge, par rapport auquel on étudie la position du mobile.",
        "Relativité : le repos et le mouvement dépendent du référentiel choisi (ex. un voyageur dans un bus est immobile par rapport au bus, mais en mouvement à 50 km/h par rapport au sol terrestre).",
        "Référentiels classiques : terrestre (vie quotidienne), géocentrique (satellites) et héliocentrique (planètes autour du Soleil)."
      ]
    },
    {
      title: "II. Trajectoire d'un mobile",
      content: [
        "La trajectoire est la ligne continue formée par l'ensemble des positions successives du point mobile.",
        "Trois formes majeures : rectiligne (ligne droite), circulaire (cercle) et curviligne (courbe quelconque)."
      ]
    },
    {
      title: "III. Vitesse moyenne et conversions",
      content: [
        "Vitesse moyenne : v = d / Δt (distance divisée par la durée). Formules associées : d = v × Δt et Δt = d / v.",
        "Unités : légale en mètres par seconde (m/s), usuelle en kilomètres par heure (km/h).",
        "Facteur clé de conversion : 1 m/s = 3,6 km/h. On multiplie par 3,6 pour passer de m/s à km/h ; on divise par 3,6 pour passer de km/h à m/s."
      ]
    },
    {
      title: "IV. Le mouvement rectiligne uniforme (MRU)",
      content: [
        "Mouvement uniforme : la vitesse reste constante au cours du temps (v = constante). Des distances égales sont parcourues pendant des durées égales.",
        "MRU : trajectoire en ligne droite à vitesse constante. La distance est proportionnelle au temps : d = v × t."
      ]
    }
  ],
  conclusion: `La description d'un mouvement nécessite toujours la précision rigoureuse du référentiel choisi. La combinaison de la trajectoire (rectiligne, circulaire ou curviligne) et de l'évolution de la vitesse (uniforme, accéléré ou ralenti) permet de classifier et de modéliser tous les déplacements mécaniques du monde qui nous entoure.`
};

export const LESSON_5_PC_2NDE_L: LessonContent = {
  id: 'pc-2nde-l-lecon-5',
  number: 'CHAPITRE 5',
  title: `Interaction mécanique et force : modélisation vectorielle, effets d'une force et équilibre`,
  subject: 'Physique-Chimie',
  classLevel: 'Seconde',
  fullText: `PROGRAMME DE PHYSIQUE-CHIMIE — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
PARTIE I : PHYSIQUE

CHAPITRE 5 : INTERACTION ENTRE OBJETS : LA FORCE

INTRODUCTION
Pourquoi un objet initialement au repos se met-il soudainement en mouvement ? Pourquoi un ballon dévie-t-il de sa trajectoire lorsqu'un gardien le repousse ? Pourquoi un ressort s'allonge-t-il lorsqu'on y suspend une masse ? En physique mécanique, toute modification de l'état de mouvement ou de repos d'un corps résulte d'une interaction avec un autre objet. Pour modéliser et quantifier mathématiquement cette action mécanique, la physique introduit le concept de force, représenté par un outil vectoriel. L'élève de Seconde L découvrira la distinction entre interactions de contact et à distance, les quatre caractéristiques d'une force, ses effets dynamiques ou statiques, ainsi que la condition fondamentale d'équilibre d'un solide soumis à deux forces opposées.

I. LA NOTION D'INTERACTION MÉCANIQUE
1. Définition de l'interaction
Deux objets A et B sont en interaction mécanique dès lors que l'objet A exerce une action mécanique sur l'objet B, et simultanément l'objet B exerce une action mécanique en retour sur l'objet A. En physique, les actions ne sont jamais isolées ou unilatérales : elles sont toujours réciproques (troisième loi de Newton ou principe des actions réciproques : F_(A/B) = -F_(B/A)).
2. Les deux grandes catégories d'interactions
- Les interactions de contact : les deux corps doivent impérativement être en contact matériel direct pour que l'action s'exerce :
  * Interaction de poussée (un joueur qui pousse un chariot) ;
  * Interaction de traction (un câble qui tracte une pirogue) ;
  * Interaction de frottement (frottement des pneus sur le goudron de la route) ;
  * Réaction de soutien d'un support (une table qui soutient un livre posé sur elle).
- Les interactions à distance : les deux corps exercent des actions mutuelles à travers l'espace sans contact physique direct :
  * L'interaction gravitationnelle : attraction universelle entre deux masses quelconques (la Terre attirant la Lune, le Soleil attirant la Terre, la Terre attirant tous les corps situés à sa surface) ;
  * L'interaction magnétique : attraction ou répulsion entre deux aimants ou entre un aimant et un métal ferreux ;
  * L'interaction électrostatique : attraction ou répulsion entre deux corps porteurs de charges électriques.

II. LE CONCEPT DE FORCE ET SA REPRÉSENTATION VECTORIELLE
1. Qu'est-ce qu'une force ?
Une force est la grandeur physique vectorielle qui modélise l'action mécanique exercée par un objet donneur (l'acteur) sur un objet receveur (le système étudié).
L'unité de mesure légale de l'intensité d'une force dans le Système International est le newton (symbole : N), en hommage au savant anglais Sir Isaac Newton. L'appareil de mesure servant à mesurer l'intensité d'une force est le dynamomètre (fondé sur l'allongement élastique calibré d'un ressort).
2. Les quatre caractéristiques fondamentales d'un vecteur force
Puisqu'une force ne se résume pas à un simple chiffre, elle est représentée graphiquement par un vecteur (un segment de droite fléché noté F) parfaitement défini par quatre éléments :
- Le point d'application : point matériel précis où s'exerce la force. Pour une force de contact ponctuelle, c'est le point de contact ; pour une force répartie ou à distance (comme le poids), c'est le centre de gravité G de l'objet.
- La direction (ou droite d'action) : la droite géométrique selon laquelle la force s'exerce (verticale, horizontale, inclinée d'un angle donné).
- Le sens : l'orientation de l'action le long de la droite d'action (vers le haut, vers le bas, vers la droite, vers la gauche, vers l'avant).
- L'intensité (ou norme) : la valeur numérique de la force exprimée en newtons (N), mesurée avec un dynamomètre. Sur le dessin, la longueur de la flèche est rigoureusement proportionnelle à l'intensité de la force selon une échelle choisie (ex. 1 cm pour 10 N).

III. LES EFFETS D'UNE FORCE SUR UN CORPS
L'action d'une force sur un objet receveur peut produire deux catégories d'effets observables :
1. Un effet dynamique (sur le mouvement)
Une force peut :
- Mettre un objet en mouvement à partir du repos (un coup de pied dans un ballon immobile) ;
- Augmenter la vitesse d'un objet en mouvement (accélération lorsque la force pousse dans le sens du mouvement) ;
- Réduire la vitesse d'un objet en mouvement (ralentissement ou freinage lorsque la force s'oppose au mouvement) ;
- Modifier la trajectoire de l'objet (incurvation de la trajectoire d'une balle sous l'action d'un vent latéral ou de la pesanteur).
2. Un effet statique (sur la forme ou le repos)
Une force peut :
- Déformer temporairement ou définitivement un solide (écrasement d'une balle en mousse, allongement d'un ressort élastique, torsion d'une barre de métal) ;
- Maintenir un corps en équilibre statique (un tableau retenu immobile au mur par un fil tendu).

IV. L'ÉQUILIBRE D'UN SOLIDE SOUMIS À DEUX FORCES
1. Définition de l'équilibre
Un solide est dit en équilibre dans un référentiel donné lorsque sa position demeure rigoureusement immobile et inchangée au cours du temps dans ce référentiel.
2. Condition d'équilibre sous deux forces
Lorsqu'un solide est soumis à l'action exclusive de deux forces F₁ et F₂, il est en équilibre statique si et seulement si ces deux forces se compensent exactement :
Condition vectorielle :
F₁ + F₂ = 0 (vecteur nul)
Ce qui implique géométriquement et physiquement trois propriétés strictes :
- Les deux forces ont la même droite d'action (même direction) ;
- Les deux forces ont des sens opposés (l'une tire dans un sens, l'autre tire dans le sens contraire) ;
- Les deux forces ont rigoureusement la même intensité : F₁ = F₂ (en newtons).
Exemple classique d'équilibre :
Un livre de masse m posé immobile sur une table horizontale est soumis à deux forces qui se compensent :
- Son poids P, force verticale descendante exercée par la Terre ;
- La réaction normale R de la table, force verticale ascendante exercée par la surface de la table.
On a P + R = 0, d'où P = R. Le livre reste immobile.

CONCLUSION
La force est l'outil vectoriel central de la mécanique. Qu'elle soit de contact ou à distance, une force se caractérise par son point d'application, sa direction, son sens et son intensité en newtons. La compréhension de l'équilibre sous deux forces opposées permet d'aborder avec clarté la force la plus omniprésente sur Terre : le poids des corps.`,
  introduction: `Pourquoi un objet initialement au repos se met-il soudainement en mouvement ? Pourquoi un ballon dévie-t-il de sa trajectoire lorsqu'un gardien le repousse ? Pourquoi un ressort s'allonge-t-il lorsqu'on y suspend une masse ? En physique mécanique, toute modification de l'état de mouvement ou de repos d'un corps résulte d'une interaction avec un autre objet. Pour modéliser et quantifier mathématiquement cette action mécanique, la physique introduit le concept de force, représenté par un outil vectoriel. L'élève de Seconde L découvrira la distinction entre interactions de contact et à distance, les quatre caractéristiques d'une force, ses effets dynamiques ou statiques, ainsi que la condition fondamentale d'équilibre d'un solide soumis à deux forces opposées.`,
  sections: [
    {
      title: "I. La notion d'interaction mécanique",
      content: [
        "Deux corps sont en interaction lorsqu'ils exercent des actions réciproques l'un sur l'autre (F_A/B = -F_B/A).",
        "Interactions de contact : poussée, traction, frottement, réaction d'un support.",
        "Interactions à distance : gravitationnelle (pesanteur), magnétique (aimants), électrostatique (charges électriques)."
      ]
    },
    {
      title: "II. Le concept de force et ses caractéristiques vectorielles",
      content: [
        "Une force modélise l'action d'un corps sur un autre. Son intensité se mesure en newtons (N) à l'aide d'un dynamomètre.",
        "Quatre caractéristiques d'un vecteur force : point d'application, direction (droite d'action), sens (orientation), et intensité en newtons (longueur du segment fléché selon une échelle)."
      ]
    },
    {
      title: "III. Effets d'une force",
      content: [
        "Effet dynamique : mise en mouvement, accélération, freinage, ou déviation de la trajectoire.",
        "Effet statique : déformation d'un matériau (allongement de ressort) ou maintien en équilibre immobile."
      ]
    },
    {
      title: "IV. Équilibre d'un solide soumis à deux forces",
      content: [
        "Condition d'équilibre : F₁ + F₂ = 0.",
        "Les deux forces doivent avoir la même droite d'action, des sens opposés et la même intensité (F₁ = F₂ en newtons). Exemple : un livre sur une table (poids vers le bas compensé par la réaction normale vers le haut)."
      ]
    }
  ],
  conclusion: `La force est l'outil vectoriel central de la mécanique. Qu'elle soit de contact ou à distance, une force se caractérise par son point d'application, sa direction, son sens et son intensité en newtons. La compréhension de l'équilibre sous deux forces opposées permet d'aborder avec clarté la force la plus omniprésente sur Terre : le poids des corps.`
};

export const LESSON_6_PC_2NDE_L: LessonContent = {
  id: 'pc-2nde-l-lecon-6',
  number: 'CHAPITRE 6',
  title: `Poids, masse et relation entre poids et masse : pesanteur, mesures et représentations`,
  subject: 'Physique-Chimie',
  classLevel: 'Seconde',
  fullText: `PROGRAMME DE PHYSIQUE-CHIMIE — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
PARTIE I : PHYSIQUE

CHAPITRE 6 : POIDS, MASSE ET RELATION ENTRE POIDS ET MASSE

INTRODUCTION
Dans le langage courant, les termes "poids" et "masse" sont très fréquemment confondus par abus de langage : on dit couramment "je pèse 65 kilogrammes" ou "ce sac a un poids de 50 kg". En sciences physiques, cette confusion est une faute conceptuelle majeure. La masse et le poids sont deux grandeurs physiques fondamentalement distinctes par leur nature, leurs propriétés, leurs unités de mesure et leurs instruments d'évaluation. La masse est une propriété intrinsèque invariable liée à la quantité de matière contenue dans un corps, tandis que le poids est une force d'attraction gravitationnelle variable exercée par un astre comme la Terre. L'élève de Seconde L apprendra à distinguer formellement ces deux notions, à appliquer la formule de proportionnalité P = m × g et à représenter graphiquement le vecteur poids.

I. LA MASSE D'UN OBJET
1. Définition physique
La masse (notée m) d'un corps est une grandeur scalaire qui caractérise la quantité de matière dont ce corps est constitué (c'est-à-dire le nombre et la nature des atomes qui le composent), ainsi que son inertie (sa résistance à la mise en mouvement).
2. Propriété d'invariance absolue
La masse d'un objet est une caractéristique intrinsèque et invariable. Elle ne dépend ni du lieu géographique, ni de l'altitude, ni de l'astre sur lequel se trouve l'objet :
Un astronaute ou un sac de riz de 50 kg possède une masse de 50 kg à Dakar au niveau de la mer, 50 kg au sommet du mont Everest, 50 kg sur la Lune et 50 kg en apesanteur dans la station spatiale internationale !
3. Instrument et unité de mesure
- L'instrument de mesure de la masse est la balance (balance à plateaux Roberval comparant des masses étalons, ou balance électronique mesurant la masse par capteur piézoélectrique).
- L'unité légale du Système International (SI) est le kilogramme (symbole : kg).
- Multiples et sous-multiples usuels :
  * Le gramme : 1 g = 10⁻³ kg = 0,001 kg ;
  * Le milligramme : 1 mg = 10⁻⁶ kg = 0,000001 kg ;
  * La tonne : 1 t = 10³ kg = 1 000 kg.

II. LE POIDS D'UN OBJET
1. Définition physique
Le poids (noté P) d'un objet est la force d'attraction gravitationnelle à distance exercée par la Terre (ou par l'astre sur lequel il se trouve) sur cet objet situé dans son champ de pesanteur.
2. Propriété de variabilité spatiale
Contrairement à la masse, le poids n'est pas invariable : il dépend de la masse de l'astre attracteur et de la distance qui sépare l'objet du centre de cet astre. Le poids diminue lorsqu'on s'élève en altitude (éloignement du centre de la Terre) et varie légèrement selon la latitude (la Terre étant aplatie aux pôles, un corps pèse légèrement plus lourd aux pôles qu'à l'Équateur). Sur la Lune, dont la masse est bien inférieure à celle de la Terre, le poids d'un même corps est environ 6 fois plus faible que sur Terre !
3. Instrument et unité de mesure
- Le poids étant une force, son unité légale dans le Système International est le newton (symbole : N).
- L'instrument de mesure du poids est le dynamomètre.
4. Les quatre caractéristiques du vecteur poids (P)
- Point d'application : le centre de gravité de l'objet (noté G), point d'équilibre géométrique de la masse.
- Direction : la verticale du lieu (donnée par le fil à plomb, qui passe par le centre de la Terre).
- Sens : dirigé de haut en bas (vers le centre de la Terre).
- Intensité (norme) : valeur en newtons mesurée au dynamomètre ou calculée par P = m × g.

III. RELATION MATHÉMATIQUE ENTRE LE POIDS ET LA MASSE
1. La relation de proportionnalité
À la surface ou à proximité immédiate de la Terre, le poids P d'un objet est directement proportionnel à sa masse m :
P = m × g
où :
- P est le poids exprimé impérativement en newtons (N) ;
- m est la masse exprimée impérativement en kilogrammes (kg) ;
- g est le coefficient de proportionnalité, appelé intensité de la pesanteur (ou accélération de la pesanteur), exprimé en newtons par kilogramme (N/kg) ou en m/s².
2. Formules dérivées indispensables
- Pour calculer la masse à partir du poids : m = P / g
- Pour déterminer l'intensité de la pesanteur : g = P / m
3. Valeurs de l'intensité de la pesanteur g
- À la surface de la Terre : g varie légèrement entre l'Équateur (g ≈ 9,78 N/kg) et les pôles (g ≈ 9,83 N/kg). En classe de Seconde au Sénégal, on utilise couramment la valeur moyenne approchée g = 9,8 N/kg, ou très souvent la valeur arrondie g = 10 N/kg pour faciliter les calculs mentaux.
- Sur la Lune : g_Lune ≈ 1,6 N/kg (soit environ 6 fois moins que sur Terre).
Exemple d'application comparatif :
Calculons le poids d'un élève de masse m = 60 kg sur Terre et sur la Lune :
- Sur Terre (avec g = 10 N/kg) : P_Terre = 60 × 10 = 600 N.
- Sur la Lune (avec g = 1,6 N/kg) : P_Lune = 60 × 1,6 = 96 N.
La masse de l'élève reste invariablement 60 kg, mais son poids a chuté de plus de 80 % sur la Lune !

IV. TABLEAU SYNTHÉTIQUE DE DIFFÉRENCIATION POIDS / MASSE
| Critère de comparaison | La Masse (m) | Le Poids (P) |
|---|---|---|
| Définition | Quantité de matière d'un corps | Force d'attraction gravitationnelle |
| Nature physique | Grandeur scalaire (un seul nombre) | Grandeur vectorielle (4 caractéristiques) |
| Variabilité | Invariable partout dans l'Univers | Variable selon le lieu et l'altitude |
| Unité légale SI | Le kilogramme (kg) | Le newton (N) |
| Instrument de mesure | La balance | Le dynamomètre |
| Formule de liaison | m = P / g | P = m × g |

CONCLUSION
La distinction entre poids et masse est le premier pas vers la rigueur scientifique en physique. Alors que la masse mesure la matière présente dans un corps indépendamment de l'environnement cosmique, le poids traduit la force avec laquelle la Terre attire cette matière vers son centre. La relation P = m × g relie harmonieusement ces deux grandeurs par l'intermédiaire de la pesanteur terrestre.`,
  introduction: `Dans le langage courant, les termes "poids" et "masse" sont très fréquemment confondus par abus de langage : on dit couramment "je pèse 65 kilogrammes" ou "ce sac a un poids de 50 kg". En sciences physiques, cette confusion est une faute conceptuelle majeure. La masse et le poids sont deux grandeurs physiques fondamentalement distinctes par leur nature, leurs propriétés, leurs unités de mesure et leurs instruments d'évaluation. La masse est une propriété intrinsèque invariable liée à la quantité de matière contenue dans un corps, tandis que le poids est une force d'attraction gravitationnelle variable exercée par un astre comme la Terre. L'élève de Seconde L apprendra à distinguer formellement ces deux notions, à appliquer la formule de proportionnalité P = m × g et à représenter graphiquement le vecteur poids.`,
  sections: [
    {
      title: "I. La masse d'un objet",
      content: [
        "Définition : quantité de matière contenue dans un corps et mesure de son inertie.",
        "Invariance absolue : la masse ne change jamais, qu'on soit à Dakar, au sommet de l'Everest ou sur la Lune.",
        "Mesure : avec une balance. Unité légale : le kilogramme (kg)."
      ]
    },
    {
      title: "II. Le poids d'un objet",
      content: [
        "Définition : force d'attraction gravitationnelle exercée par la Terre sur l'objet.",
        "Variabilité : dépend du lieu, de l'altitude et de l'astre (environ 6 fois plus faible sur la Lune).",
        "Mesure : avec un dynamomètre. Unité légale : le newton (N).",
        "Vecteur poids : point d'application (centre de gravité G), direction (verticale du lieu), sens (vers le bas, centre de la Terre), et intensité en newtons."
      ]
    },
    {
      title: "III. Relation P = m × g",
      content: [
        "Formule de proportionnalité : P = m × g (avec P en N, m en kg, et g en N/kg).",
        "Formules associées : m = P / g et g = P / m.",
        "Intensité de la pesanteur : sur Terre g ≈ 9,8 N/kg (souvent arrondi à 10 N/kg dans les exercices) ; sur la Lune g ≈ 1,6 N/kg."
      ]
    },
    {
      title: "IV. Comparaison et synthèse",
      content: [
        "Ne jamais confondre masse (en kg, mesurée par balance, invariable) et poids (force en newtons N, mesurée par dynamomètre, variable)."
      ]
    }
  ],
  conclusion: `La distinction entre poids et masse est le premier pas vers la rigueur scientifique en physique. Alors que la masse mesure la matière présente dans un corps indépendamment de l'environnement cosmique, le poids traduit la force avec laquelle la Terre attire cette matière vers son centre. La relation P = m × g relie harmonieusement ces deux grandeurs par l'intermédiaire de la pesanteur terrestre.`
};
