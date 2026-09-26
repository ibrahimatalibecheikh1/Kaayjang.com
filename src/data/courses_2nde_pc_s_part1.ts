import { LessonContent } from './courses';
import {
  SVG_P1_ELECTRISATION,
  SVG_P2_CIRCUIT,
  SVG_P3_AMPEREMETRE,
  SVG_P4_VOLTMETRE,
  SVG_P5_DIPOLES_PASSIFS,
  SVG_P6_DIPOLES_ACTIFS,
  SVG_P7_AOP
} from './diagrams_2nde_pc_s';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE SECONDE S (SÉNÉGAL)
// PREMIÈRE PARTIE : PHYSIQUE — ÉLECTRICITÉ ET ÉLECTRONIQUE (P1 À P7)
// Conforme au programme officiel national (72h de Physique)
// Leçons intégrales développées, sans résumé, avec figures vectorielles SVG
// =========================================================================

export const LESSON_P1_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p1',
  number: 'Chapitre P1',
  title: 'Phénomènes d\'électrisation et charges électriques',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Électricité et Électronique',
  readTime: '60 min',
  description: 'Nature microscopique de la matière, charges électriques, les trois modes d\'électrisation (frottement, contact, influence), loi de Coulomb, conducteurs et isolants, et applications expérimentales.',
  introduction: `La matière ordinaire est constituée d'atomes comprenant un noyau central chargé positivement et un nuage d'électrons chargés négativement. Dans un corps neutre, la somme algébrique des charges positives compense exactement celle des charges négatives. Un corps est dit électrisé lorsqu'il possède un excès ou un déficit d'électrons. Cette première leçon de Seconde S pose les fondements de l'électrostatique et de la théorie particulaire des charges électriques.`,
  sections: [
    {
      title: 'I. La charge électrique et structure microscopique',
      content: `### 1. La charge élémentaire et quantification
L'expérience montre que toute charge électrique mesurable $q$ portée par un corps est un multiple entier de la charge élémentaire fondamentale $e$ :
$$q = n \\cdot e \\quad \\text{avec } e \\approx 1{,}602 \\times 10^{-19} \\text{ C}$$
* L'électron porte la charge négative $-e = -1{,}602 \\times 10^{-19} \\text{ C}$.
* Le proton porte la charge positive $+e = +1{,}602 \\times 10^{-19} \\text{ C}$.
* Le neutron est électriquement neutre ($q = 0 \\text{ C}$).

### 2. Le principe de conservation de la charge électrique
Dans tout système électriquement isolé, la charge totale algébrique se conserve rigoureusement au cours de toute interaction physique ou chimique :
$$\\sum q_{\\text{initial}} = \\sum q_{\\text{final}}$$
L'électrisation d'un corps n'est jamais une création de charge, mais un simple transfert ordonné d'électrons entre corps en présence.`
    },
    {
      title: 'II. Les trois modes fondamentaux d\'électrisation',
      content: `### 1. Électrisation par frottement
Lorsque deux matériaux de nature différente sont frottés l'un contre l'autre (par exemple une baguette d'ébonite frottée avec de la peau de chat, ou une tige de verre frottée avec de la soie), des électrons périphériques sont arrachés à l'un des matériaux et transférés sur l'autre :
* Le matériau qui capture des électrons devient chargé négativement ($q < 0$).
* Le matériau qui cède des électrons devient chargé positivement ($q > 0$).

### 2. Électrisation par contact
Lorsqu'un conducteur neutre entre en contact direct avec un corps préalablement chargé, une fraction des charges libres de ce dernier migre instantanément vers le conducteur neutre afin d'égaliser les potentiels. Après séparation mécanique, les deux corps portent des charges de même signe et se repoussent mutuellement.

### 3. Électrisation par influence électrostatique (sans contact)
Lorsqu'on approche un corps chargé (sans le toucher) d'un conducteur neutre isolé :
* Les charges mobiles (électrons libres) du conducteur se redistribuent : la face la plus proche du corps inducteur acquiert une charge de signe opposé, tandis que la face éloignée acquiert une charge de même signe.
* Globalement, le conducteur reste électriquement neutre, mais localement polarisé.`
    },
    {
      title: 'III. Loi de Coulomb et interactions électrostatiques',
      content: `### 1. Énoncé de la loi de Coulomb
Deux charges ponctuelles $q_A$ et $q_B$ situées à une distance $r$ l'une de l'autre dans le vide (ou dans l'air) exercent mutuellement l'une sur l'autre des forces électrostatiques directement opposées selon la droite qui les joint :
$$F = k \\cdot \\frac{|q_A \\cdot q_B|}{r^2}$$
* $F$ : intensité de la force en Newtons (N).
* $q_A, q_B$ : valeurs algébriques des charges en Coulombs (C).
* $r$ : distance inter-charges en mètres (m).
* $k = \\frac{1}{4\\pi \\varepsilon_0} \\approx 9{,}0 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.

### 2. Nature de l'interaction
* **Charges de même signe** ($q_A \\cdot q_B > 0$) : forces répulsives.
* **Charges de signes contraires** ($q_A \\cdot q_B < 0$) : forces attractives.`
    },
    {
      title: 'IV. Conducteurs et isolants électriques',
      content: `* **Conducteurs électriques** (métaux, graphite, solutions électrolytiques) : contiennent des porteurs de charge libres de se déplacer sur de grandes distances (électrons de conduction dans les métaux, ions positifs et négatifs dans les électrolytes).
* **Isolants ou diélectriques** (verre, plastique, ébonite, air sec) : tous les électrons sont solidement liés aux noyaux atomiques ; les charges restent localisées au point d'impact ou de frottement.`
    }
  ],
  image: {
    url: SVG_P1_ELECTRISATION,
    caption: 'Figure P1 : Phénomènes d\'électrisation, transfert d\'électrons et interaction coulombienne'
  },
  conclusion: `L'électrisation met en lumière la nature discontinue et granulaire de la charge électrique. Elle régit les phénomènes atmosphériques (foudre), le fonctionnement des photocopieurs, le dépoussiérage électrostatique industriel et constitue le point de départ de tout le domaine de l'électricité.`
};

export const LESSON_P2_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p2',
  number: 'Chapitre P2',
  title: 'Généralités sur le courant électrique',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Électricité et Électronique',
  readTime: '60 min',
  description: 'Définition du courant électrique, circuit fermé, sens conventionnel versus déplacement microscopique des électrons, courant continu et alternatif, effets du courant et sécurité des personnes.',
  introduction: `Le courant électrique est un déplacement d'ensemble ordonné de porteurs de charge électrique dans un milieu conducteur sous l'effet d'un champ électrique créé par un générateur. Cette leçon traite des conditions de circulation du courant, de la distinction entre sens conventionnel et mouvement réel des électrons, et des multiples effets énergétiques.`,
  sections: [
    {
      title: 'I. Le circuit électrique et conditions de circulation',
      content: `### 1. Constitution d'un circuit électrique
Un circuit électrique élémentaire est une boucle fermée comprenant au minimum :
1. **Un générateur** (pile, accumulateur, dynamo) qui fournit l'énergie électrique en créant une dissymétrie de charges entre ses bornes.
2. **Un ou plusieurs récepteurs** (lampe, résistor, moteur, électrolyseur) qui absorbent l'énergie électrique pour la convertir en une autre forme d'énergie.
3. **Des conducteurs de liaison** (fils de cuivre) reliant les dipôles.
4. **Un organe de commande** (interrupteur).

### 2. Condition de passage du courant
Le courant électrique ne peut s'établir et persister de façon durable que si le circuit forme **une chaîne ininterrompue de conducteurs (circuit fermé)** entre les bornes du générateur.`
    },
    {
      title: 'II. Sens conventionnel et nature microscopique du courant',
      content: `### 1. Le sens conventionnel du courant
Par convention historique universelle, à l'extérieur du générateur, le courant électrique sort par la borne positive $(+)$ et rentre par la borne négative $(-)$.

### 2. La réalité microscopique du déplacement des porteurs
* **Dans les conducteurs métalliques** : le courant est assuré exclusivement par le flux ordonné des **électrons libres**, qui sont des particules chargées négativement. Ils sont donc repoussés par la borne $(-)$ et attirés par la borne $(+)$. Les électrons se déplacent donc en sens inverse du sens conventionnel du courant !
* **Dans les solutions électrolytiques** : le courant est assuré par une double migration simultanée :
  * Les cations (ions positifs, ex : $\\text{Na}^+, \\text{Cu}^{2+}$) migrent vers la cathode (sens conventionnel du courant).
  * Les anions (ions négatifs, ex : $\\text{Cl}^-, \\text{SO}_4^{2-}$) migrent vers l'anode (sens opposé).`
    },
    {
      title: 'III. Courant continu et courant alternatif',
      content: `* **Courant continu (DC - Direct Current)** : l'intensité et le sens de circulation des porteurs de charge restent rigoureusement constants au cours du temps (fourni par les piles chimiques, accumulateurs et cellules solaires photovoltaïques).
* **Courant alternatif (AC - Alternating Current)** : les porteurs de charge effectuent un mouvement de va-et-vient périodique. La forme temporelle usuelle est sinusoïdale (distribuée par le réseau national Senelec à une fréquence standard $f = 50 \\text{ Hz}$).`
    },
    {
      title: 'IV. Les différents effets du courant électrique',
      content: `1. **Effet thermique (Effet Joule)** : tout conducteur métallique parcouru par un courant s'échauffe (fers à repasser, radiateurs, fusibles).
2. **Effet lumineux** : émission de lumière par incandescence (filament de tungstène) ou par décharge dans un gaz (tubes fluorescents) ou luminescence dans les diodes LED.
3. **Effet magnétique** : un fil parcouru par un courant dévie une aiguille aimantée placée dans son voisinage (expérience d'Oersted, électroaimants, moteurs électriques).
4. **Effet chimique** : passage du courant entraînant des réactions d'oxydoréduction non spontanées (électrolyse de l'eau, galvanoplastie).`
    }
  ],
  image: {
    url: SVG_P2_CIRCUIT,
    caption: 'Figure P2 : Circuit électrique simple, sens conventionnel du courant et flux réel des électrons'
  },
  conclusion: `La compréhension du courant électrique repose sur la dualité entre la description macroscopique pratique (sens conventionnel de $+$ vers $-$) et la cinétique microscopique réelle des porteurs de charge dans la matière.`
};

export const LESSON_P3_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p3',
  number: 'Chapitre P3',
  title: 'Intensité du courant électrique',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Électricité et Électronique',
  readTime: '65 min',
  description: 'Définition du débit de charge, unité Ampère, mesure par ampèremètre analogique et numérique, calcul d\'incertitude, loi d\'unicité dans un circuit série et loi des nœuds dans un circuit avec dérivations.',
  introduction: `L'intensité du courant électrique quantifie la cadence à laquelle la charge électrique traverse une section droite de conducteur. C'est une grandeur scalaire fondamentale du Système International (SI), mesurée en ampères. Cette leçon développe le formalisme mathématique, les lois des circuits (loi des nœuds) et les protocoles de mesure rigoureux.`,
  sections: [
    {
      title: 'I. Définition mathématique et unité',
      content: `### 1. Débit de charge
L'intensité $I$ d'un courant continu est égale à la quantité de charge électrique $\\Delta Q$ qui traverse une section droite de conducteur pendant un intervalle de temps $\\Delta t$ :
$$I = \\frac{\\Delta Q}{\\Delta t}$$
* Si le courant est constant :
$$Q = I \\cdot t \\quad \\text{avec } Q = N \\cdot e$$
* $I$ : intensité du courant en ampères (A).
* $Q$ : quantité de charge en coulombs (C).
* $t$ : durée en secondes (s).
* $N$ : nombre d'électrons ayant traversé la section.
* $e = 1{,}6 \\times 10^{-19} \\text{ C}$.

**Exemple d'application** : Un courant de $2\\text{ A}$ circule pendant $1\\text{ minute}$ ($60\\text{ s}$).
$$Q = 2 \\times 60 = 120 \\text{ C}$$
Nombre d'électrons traversant le conducteur :
$$N = \\frac{Q}{e} = \\frac{120}{1{,}6 \\times 10^{-19}} = 7{,}5 \\times 10^{20} \\text{ électrons !}$$`
    },
    {
      title: 'II. Mesure de l\'intensité avec l\'ampèremètre',
      content: `### 1. Protocole de branchement
* L'ampèremètre doit **toujours être branché en série** dans la branche où l'on désire connaître l'intensité.
* Le courant doit entrer par la borne positive notée $(\\text{A})$ ou $(\\text{mA})$ et ressortir par la borne commune notée $(\\text{COM})$.
* **Règle d'or de sécurité** : On choisit toujours au départ le calibre le plus grand pour éviter de détériorer l'appareil, puis on commute vers le calibre immédiatement supérieur à la valeur mesurée pour optimiser la résolution.

### 2. Lecture sur ampèremètre à aiguille
Pour un ampèremètre analogique :
$$I = \\frac{C \\cdot L}{E}$$
* $C$ : calibre sélectionné.
* $L$ : division lue par l'aiguille sur le cadran.
* $E$ : graduation maximale de l'échelle.`
    },
    {
      title: 'III. Lois de l\'intensité dans les circuits',
      content: `### 1. Circuit série : Loi d'unicité de l'intensité
Dans un circuit constitué d'une seule boucle sans dérivation, l'intensité du courant est rigoureusement identique en tout point du circuit :
$$I_1 = I_2 = I_3 = \\dots = I$$
La position d'un dipôle ou d'un ampèremètre n'a aucune influence sur la valeur mesurée.

### 2. Circuit en dérivation : Loi des nœuds
Un **nœud** est un point de jonction reliant au moins trois conducteurs.
**Énoncé de la loi des nœuds** : La somme algébrique des intensités des courants arrivant à un nœud est égale à la somme des intensités des courants qui en repartent :
$$\\sum I_{\\text{entrants}} = \\sum I_{\\text{sortants}}$$
*Exemple* : Si trois branches arrivent à un nœud avec des courants $I_1$ et $I_2$, et que deux branches en repartent avec des courants $I_3$ et $I_4$ :
$$I_1 + I_2 = I_3 + I_4$$`
    }
  ],
  image: {
    url: SVG_P3_AMPEREMETRE,
    caption: 'Figure P3 : Montage en série d\'un ampèremètre et formalisme de la loi des nœuds'
  },
  conclusion: `La loi des nœuds traduit à l'échelle macroscopique le principe fondamental de conservation de la charge électrique : aucun électron ne peut disparaître ou s'accumuler indéfiniment en un point de jonction d'un circuit stable.`
};

export const LESSON_P4_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p4',
  number: 'Chapitre P4',
  title: 'Tension électrique et potentiel',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Électricité et Électronique',
  readTime: '65 min',
  description: 'Notion de potentiel électrique, différence de potentiel (tension), voltmètre en dérivation, loi d\'additivité des tensions (loi des mailles), oscillographe cathodique et caractéristiques des tensions variables.',
  introduction: `Pour que des porteurs de charge se déplacent et forment un courant, il est indispensable d'exercer sur eux une force motrice d'origine électrique. Cette force découle d'une différence de potentiel entre deux points du circuit, désignée sous le nom de tension électrique, mesurée en volts. Cette leçon aborde la mesure, l'additivité des tensions et la visualisation temporelle.`,
  sections: [
    {
      title: 'I. Notion de potentiel et définition de la tension',
      content: `### 1. Différence de potentiel électrique
Chaque point $M$ d'un circuit possède un état électrique quantifié par son potentiel électrique noté $V_M$, exprimé en volts (V).
La tension électrique $U_{AB}$ entre deux points $A$ et $B$ est par définition la différence de potentiel entre le point $A$ et le point $B$ :
$$U_{AB} = V_A - V_B$$
* Si $V_A > V_B$, alors $U_{AB} > 0$.
* Propriété d'antisymétrie : $U_{BA} = V_B - V_A = - U_{AB}$.
* La tension aux bornes d'un fil de connexion parfait de résistance nulle est nulle : $U = 0\\text{ V}$.

### 2. Référence des potentiels : la masse
Par convention, on choisit généralement un point de référence appelé **masse** dont le potentiel est fixé arbitrairement à zéro volt : $V_{\\text{masse}} = 0\\text{ V}$. Le potentiel en tout point $M$ devient alors égal à la tension entre $M$ et la masse : $V_M = U_{M,\\text{masse}}$.`
    },
    {
      title: 'II. Mesure de la tension électrique',
      content: `### 1. Utilisation du voltmètre
* Le voltmètre se branche **toujours en dérivation (en parallèle)** aux bornes du dipôle étudié.
* Pour mesurer $U_{AB} = V_A - V_B$, on relie la borne $(\\text{V})$ au point $A$ et la borne $(\\text{COM})$ au point $B$.
* Un voltmètre idéal possède une **résistance interne infinie** ($R_V \\to +\\infty$) afin de ne dériver aucun courant hors de la branche analysée.

### 2. Observation à l'oscilloscope
L'oscilloscope permet de visualiser l'évolution temporelle d'une tension $u(t)$ :
* **Sensibilité verticale $S_v$** (en $\\text{V/div}$) : permet de calculer la tension crête $U_{\\max} = S_v \\cdot y$.
* **Vitesse de balayage horizontal $S_h$** (en $\\text{s/div}$ ou $\\text{ms/div}$) : permet de mesurer la période $T = S_h \\cdot x$, d'où la fréquence $f = \\frac{1}{T}$ en Hertz (Hz).
* Pour une tension sinusoïdale : la tension efficace vaut $U_{\\text{eff}} = \\frac{U_{\\max}}{\\sqrt{2}}$.`
    },
    {
      title: 'III. Lois de la tension dans les circuits',
      content: `### 1. Dipôles en dérivation : unicité de la tension
Deux dipôles montés en parallèle entre deux nœuds communs $A$ et $B$ sont soumis à la même tension électrique :
$$U_{\\text{branche 1}} = U_{\\text{branche 2}} = U_{AB}$$

### 2. Dipôles en série : loi d'additivité des tensions (Loi des mailles)
Soient trois points consécutifs $A$, $B$ et $C$ d'un circuit en série :
$$U_{AC} = U_{AB} + U_{BC}$$
**Démonstration algébrique immédiate** :
$$U_{AB} + U_{BC} = (V_A - V_B) + (V_B - V_C) = V_A - V_C = U_{AC} \\quad \\text{(C.Q.F.D.)}$$
Dans une maille orientée fermée, la somme algébrique de toutes les tensions rencontrées est rigoureusement nulle : $\\sum U_k = 0$.`
    }
  ],
  image: {
    url: SVG_P4_VOLTMETRE,
    caption: 'Figure P4 : Branchement d\'un voltmètre en dérivation et additivité des tensions en série'
  },
  conclusion: `La tension électrique représente l'énergie par unité de charge mise en jeu lors du déplacement des porteurs : $E = q \\cdot U$. Elle constitue le moteur indispensable à la circulation du courant.`
};

export const LESSON_P5_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p5',
  number: 'Chapitre P5',
  title: 'Dipôles passifs : conducteurs ohmiques et loi d\'Ohm',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Électricité et Électronique',
  readTime: '70 min',
  description: 'Définition d\'un dipôle passif, loi d\'Ohm U = R·I, caractéristique tension-courant, résistance et résistivité d\'un matériau, associations de résistances en série et en dérivation, et puissance Joule.',
  introduction: `Un dipôle passif est un récepteur électrique qui ne peut pas fournir spontanément d'énergie électrique au circuit ; lorsqu'il est traversé par un courant, il convertit intégralement ou partiellement l'énergie électrique reçue en d'autres formes (thermique, lumineuse, chimique). Le conducteur ohmique (ou résistor) est le dipôle passif linéaire fondamental.`,
  sections: [
    {
      title: 'I. Le conducteur ohmique et la loi d\'Ohm',
      content: `### 1. Énoncé de la loi d'Ohm
À température constante, la tension $U_{AB}$ aux bornes d'un conducteur ohmique de résistance $R$ est strictement proportionnelle à l'intensité $I$ du courant qui le traverse de la borne $A$ vers la borne $B$ :
$$U_{AB} = R \\cdot I$$
* $U_{AB}$ : tension en volts (V).
* $I$ : intensité en ampères (A).
* $R$ : résistance électrique en ohms ($\\Omega$).
* La conductance $G$ est l'inverse de la résistance : $G = \\frac{1}{R}$, exprimée en siemens (S).

### 2. Caractéristique courant-tension
La caractéristique $U = f(I)$ d'un résistor est une **droite passant par l'origine** des axes.
Le coefficient directeur (la pente) de cette droite représente la résistance $R$ :
$$R = \\frac{\\Delta U}{\\Delta I} = \\text{Constante}$$`
    },
    {
      title: 'II. Résistance d\'un conducteur filiforme et résistivité',
      content: `Pour un fil cylindrique conducteur homogène de longueur $L$ et de section droite $S$ :
$$R = \\rho \\cdot \\frac{L}{S}$$
* $R$ : résistance en ohms ($\\Omega$).
* $L$ : longueur du fil en mètres (m).
* $S$ : aire de la section en mètres carrés ($\\text{m}^2$).
* $\\rho$ : résistivité électrique du matériau en ohm-mètre ($\\Omega\\cdot\\text{m}$).
  * Cuivre : $\\rho \\approx 1{,}7 \\times 10^{-8} \\,\\Omega\\cdot\\text{m}$ (excellent conducteur).
  * Argent : $\\rho \\approx 1{,}6 \\times 10^{-8} \\,\\Omega\\cdot\\text{m}$.
  * Nichrome : $\\rho \\approx 1{,}0 \\times 10^{-6} \\,\\Omega\\cdot\\text{m}$ (fils chauffants).`
    },
    {
      title: 'III. Associations de résistors',
      content: `### 1. Association en série
Lorsque $n$ résistors sont branchés bout à bout en série, traversés par la même intensité :
$$R_{\\text{eq}} = R_1 + R_2 + \\dots + R_n = \\sum_{i=1}^n R_i$$
La résistance équivalente est toujours supérieure à la plus grande des résistances individuelles.

### 2. Association en dérivation (parallèle)
Lorsque $n$ résistors sont connectés aux mêmes nœuds, soumis à la même tension :
$$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}$$
Pour deux résistors en dérivation :
$$R_{\\text{eq}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$$
La résistance équivalente est toujours inférieure à la plus petite des résistances associées.`
    },
    {
      title: 'IV. Puissance et énergie dissipées par effet Joule',
      content: `La puissance électrique absorbée et dissipée sous forme thermique par un résistor idéal s'exprime par :
$$P = U \\cdot I = R \\cdot I^2 = \\frac{U^2}{R}$$
L'énergie thermique dégagée pendant une durée $\\Delta t$ vaut :
$$W_J = P \\cdot \\Delta t = R \\cdot I^2 \\cdot \\Delta t \\quad \\text{(en Joules)}$$`
    }
  ],
  image: {
    url: SVG_P5_DIPOLES_PASSIFS,
    caption: 'Figure P5 : Caractéristique U = f(I) d\'un conducteur ohmique et règles d\'associations série/dérivation'
  },
  conclusion: `La loi d'Ohm constitue la relation de base du dimensionnement des circuits électroniques et électriques industriels.`
};

export const LESSON_P6_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p6',
  number: 'Chapitre P6',
  title: 'Dipôles actifs : générateurs réels et point de fonctionnement',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Électricité et Électronique',
  readTime: '70 min',
  description: 'Définition d\'un dipôle actif, force électromotrice E, résistance interne r, équation de fonctionnement U = E - rI, caractéristique d\'un générateur, loi de Pouillet et détermination graphique du point de fonctionnement.',
  introduction: `Un dipôle actif est un composant capable d'entretenir la circulation durable d'un courant électrique en transformant de l'énergie chimique, mécanique, lumineuse ou thermique en énergie électrique. Contrairement à un générateur idéal de tension, tout générateur réel présente des pertes énergétiques internes modélisées par une résistance interne.`,
  sections: [
    {
      title: 'I. Modèle linéaire d\'un générateur réel',
      content: `### 1. Définitions de E et r
Un générateur réel (pile, batterie, alimentation régulée) est modélisé par l'association en série de :
* Une source idéale de tension de **force électromotrice $E$ (f.é.m)**, exprimée en volts (V). La f.é.m est la tension mesurée à vide, lorsque le générateur ne débite aucun courant ($I = 0$).
* Une **résistance interne $r$**, exprimée en ohms ($\\Omega$).

### 2. Loi de fonctionnement d'un générateur en convention générateur
Lorsque le générateur débite une intensité $I$ vers le circuit extérieur, sa tension aux bornes diminue en raison de la chute ohmique interne :
$$U_{PN} = E - r \\cdot I$$
* À vide ($I = 0$) : $U_{PN} = E$.
* En court-circuit ($U_{PN} = 0$) : le courant de court-circuit vaut $I_{\\text{cc}} = \\frac{E}{r}$ (valeur maximale et potentiellement destructrice pour la source).`
    },
    {
      title: 'II. Caractéristique d\'un générateur et bilan énergétique',
      content: `### 1. Allure graphique de U = f(I)
La caractéristique d'un dipôle actif linéaire est un segment de droite décroissant :
* L'ordonnée à l'origine (pour $I = 0$) est égale à la f.é.m $E$.
* La pente de la droite est égale à l'opposé de la résistance interne :
$$\\text{Pente} = -r = \\frac{\\Delta U}{\\Delta I} < 0$$

### 2. Bilan de puissance du générateur
En multipliant l'équation $U = E - rI$ par l'intensité $I$, on obtient :
$$U \\cdot I = E \\cdot I - r \\cdot I^2 \\iff E \\cdot I = U \\cdot I + r \\cdot I^2$$
* $P_{\\text{totale}} = E \\cdot I$ : puissance électromagnétique totale générée.
* $P_{\\text{utile}} = U \\cdot I$ : puissance électrique effectivement fournie au circuit extérieur.
* $P_{\\text{perdue}} = r \\cdot I^2$ : puissance dissipée sous forme de chaleur dans le générateur par effet Joule.
* **Rendement du générateur** :
$$\\eta = \\frac{P_{\\text{utile}}}{P_{\\text{totale}}} = \\frac{U \\cdot I}{E \\cdot I} = \\frac{U}{E} = 1 - \\frac{r \\cdot I}{E} \\le 1$$`
    },
    {
      title: 'III. Point de fonctionnement et Loi de Pouillet',
      content: `### 1. Point de fonctionnement d'un circuit simple (Générateur + Résistor)
Considérons un générateur $(E, r)$ débitant dans un résistor de charge $R$.
* Pour le générateur : $U = E - r \\cdot I$
* Pour le résistor : $U = R \\cdot I$
À l'équilibre, le courant unique $I_F$ et la tension commune $U_F$ sont déterminés par l'intersection des deux caractéristiques :
$$E - r \\cdot I_F = R \\cdot I_F \\iff E = (R + r) \\cdot I_F$$
D'où la célèbre **Loi de Pouillet** :
$$I_F = \\frac{E}{R + r}$$
Et la tension au point de fonctionnement :
$$U_F = R \\cdot I_F = \\frac{R}{R + r} \\cdot E$$`
    }
  ],
  image: {
    url: SVG_P6_DIPOLES_ACTIFS,
    caption: 'Figure P6 : Caractéristique d\'un dipôle actif linéaire et détermination du point de fonctionnement F'
  },
  conclusion: `L'intersection entre la droite de charge d'un dipôle passif et la caractéristique d'un dipôle actif définit le point de fonctionnement unique qui régit le comportement du système électrique.`
};

export const LESSON_P7_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p7',
  number: 'Chapitre P7',
  title: 'Amplificateur opérationnel : amplification d\'une tension',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Électricité et Électronique',
  readTime: '70 min',
  description: 'Présentation de l\'amplificateur opérationnel (AOP), modèle de l\'AOP idéal, régime linéaire versus régime saturé, montages amplificateurs non inverseur et inverseur, et applications technologiques.',
  introduction: `L'amplificateur opérationnel (A.O. ou AOP) est un circuit intégré fondamental de l'électronique analogique moderne. Disposant de deux entrées et d'une sortie, il permet d'amplifier avec une très grande précision de faibles tensions issues de capteurs (microphones, sondes de température, biocapteurs médicaux). Cette leçon de Seconde S aborde son comportement idéal et ses montages canoniques.`,
  sections: [
    {
      title: 'I. Présentation et modèle de l\'AOP idéal',
      content: `### 1. Brochage et symbole normalisé
L'AOP comporte essentiellement :
* Une **entrée inverseuse** notée $e^-$ (ou $-$), portée au potentiel $V^-$.
* Une **entrée non inverseuse** notée $e^+$ (ou $+$), portée au potentiel $V^+$.
* Une **sortie** notée $S$, portée au potentiel $V_s$ (tension de sortie $U_s = V_s - V_{\\text{masse}}$).
* Deux bornes d'alimentation symétrique continues $+V_{\\text{cc}}$ et $-V_{\\text{cc}}$ (typiquement $+15\\text{ V}$ et $-15\\text{ V}$).

### 2. Hypothèses de l'AOP idéal en régime linéaire
Dans le modèle idéal retenu au lycée :
1. **Courants d'entrée nuls** (impédance d'entrée infinie) :
$$i^+ = 0 \\quad \\text{et} \\quad i^- = 0$$
2. **Gain différentiel infini en boucle ouverte** ($A_0 \\to +\\infty$) :
Pour que la tension de sortie $U_s$ reste finie et non saturée, la tension différentielle d'entrée $\\varepsilon = V^+ - V^-$ doit être rigoureusement nulle :
$$\\varepsilon = V^+ - V^- = 0 \\iff V^+ = V^-$$
Cette égalité fondamentale n'est vérifiée que si le montage comporte une **contre-réaction négative** (bouclage entre la sortie $S$ et l'entrée inverseuse $e^-$).`
    },
    {
      title: 'II. Étude du montage amplificateur non inverseur',
      content: `Dans ce montage, le signal d'entrée $U_e$ est appliqué directement à l'entrée non inverseuse $e^+$, tandis que la contre-réaction est assurée par un pont diviseur résistif ($R_1, R_2$) vers $e^-$.
* Potentiel en $e^+$ : $V^+ = U_e$.
* Comme $i^- = 0$, les résistors $R_1$ et $R_2$ forment un diviseur de tension alimenté par $U_s$ :
$$V^- = \\frac{R_1}{R_1 + R_2} \\cdot U_s$$
* En régime linéaire, $V^+ = V^-$, donc :
$$U_e = \\frac{R_1}{R_1 + R_2} \\cdot U_s \\iff U_s = \\left(1 + \\frac{R_2}{R_1}\\right) \\cdot U_e$$
* **Gain en tension** :
$$G = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1} \\ge 1$$
Le gain est toujours strictement supérieur à 1 et le signal de sortie est **en phase** avec le signal d'entrée.`
    },
    {
      title: 'III. Étude du montage amplificateur inverseur',
      content: `Dans ce montage, l'entrée non inverseuse $e^+$ est reliée à la masse ($V^+ = 0\\text{ V}$), tandis que la tension d'entrée $U_e$ attaque l'entrée inverseuse $e^-$ à travers une résistance $R_1$, bouclée à la sortie par $R_2$.
* Comme $V^+ = 0$ et $V^+ = V^-$, le point $e^-$ est une **masse virtuelle** : $V^- = 0\\text{ V}$.
* Loi des nœuds au point $e^-$ :
$$i_1 + i_2 = i^- = 0 \\iff \\frac{U_e - V^-}{R_1} + \\frac{U_s - V^-}{R_2} = 0$$
* En remplaçant $V^- = 0$ :
$$\\frac{U_e}{R_1} + \\frac{U_s}{R_2} = 0 \\iff \\frac{U_s}{R_2} = - \\frac{U_e}{R_1}$$
D'où l'expression du gain en tension :
$$U_s = - \\frac{R_2}{R_1} \\cdot U_e \\iff G = \\frac{U_s}{U_e} = - \\frac{R_2}{R_1}$$
Le signe négatif indique une inversion de polarité (déphasage de $180^\\circ$ ou $\\pi\\text{ rad}$).`
    },
    {
      title: 'IV. Régime de saturation',
      content: `Si la valeur théorique calculée pour $U_s$ excède la tension d'alimentation du composant, l'AOP quitte le régime linéaire et sature :
* Si $U_s \\ge +V_{\\text{sat}} \\approx +V_{\\text{cc}}$, alors la sortie reste plafonnée à $+V_{\\text{sat}}$.
* Si $U_s \\le -V_{\\text{sat}} \\approx -V_{\\text{cc}}$, alors la sortie reste plafonnée à $-V_{\\text{sat}}$.`
    }
  ],
  image: {
    url: SVG_P7_AOP,
    caption: 'Figure P7 : Symbole de l\'amplificateur opérationnel, montages non inverseur et inverseur'
  },
  conclusion: `L'amplificateur opérationnel illustre la puissance de la rétroaction négative : en combinant un gain intrinsèque quasi-infini avec des résistances passives, on obtient une amplification rigoureusement calibrée et insensible aux dérives thermiques.`
};

export const COURSES_2NDE_PC_S_PART1: LessonContent[] = [
  LESSON_P1_SECONDE_S,
  LESSON_P2_SECONDE_S,
  LESSON_P3_SECONDE_S,
  LESSON_P4_SECONDE_S,
  LESSON_P5_SECONDE_S,
  LESSON_P6_SECONDE_S,
  LESSON_P7_SECONDE_S
];
