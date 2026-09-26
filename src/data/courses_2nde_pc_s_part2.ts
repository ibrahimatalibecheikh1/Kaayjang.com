import { LessonContent } from './courses';
import {
  SVG_P8_MOUVEMENT,
  SVG_P9_FORCES,
  SVG_P10_POIDS_MASSE,
  SVG_P11_EQUILIBRE_3_FORCES,
  SVG_P12_MOMENT_LEVIER
} from './diagrams_2nde_pc_s';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE SECONDE S (SÉNÉGAL)
// DEUXIÈME PARTIE : PHYSIQUE — MÉCANIQUE NEWTONIENNE ET STATIQUE (P8 À P12)
// Conforme au programme officiel national de la République du Sénégal
// Leçons intégrales sans résumé avec figures vectorielles SVG
// =========================================================================

export const LESSON_P8_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p8',
  number: 'Chapitre P8',
  title: 'Généralités sur le mouvement et cinématique',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Mécanique',
  readTime: '65 min',
  description: 'Relativité du mouvement, choix d\'un référentiel (terrestre, géocentrique, héliocentrique), trajectoire, vitesse moyenne, vecteur vitesse instantanée, mouvement rectiligne uniforme (MRU), loi horaire et diagrammes.',
  introduction: `La cinématique est la branche de la mécanique qui étudie la géométrie et l'évolution temporelle des mouvements des corps matériels indépendamment des causes qui les provoquent. Le mouvement d'un objet n'a pas de sens absolu : il est intrinsèquement relatif au référentiel choisi par l'observateur. Cette leçon détaille les concepts de trajectoire, de vecteur vitesse et les caractéristiques du Mouvement Rectiligne Uniforme.`,
  sections: [
    {
      title: 'I. Référentiel et trajectoire d\'un mobile',
      content: `### 1. La relativité du mouvement et choix du référentiel
Un corps est en mouvement par rapport à un autre corps de référence si sa position varie au cours du temps. Un **référentiel** est un solide indéformable par rapport auquel on repère les positions successives d'un mobile, muni d'un repère d'espace $(O, \\vec{i}, \\vec{j}, \\vec{k})$ et d'un repère de temps (horloge fixant une origine $t = 0$).
* **Référentiel terrestre** : lié à la surface de la Terre (adapté pour les études de laboratoire, chutes de corps, véhicules routiers).
* **Référentiel géocentrique** : ayant son origine au centre de la Terre et ses axes dirigés vers trois étoiles lointaines considérées comme fixes (adapté pour l'étude des satellites terrestres et de la Lune).
* **Référentiel héliocentrique (de Copernic)** : ayant son origine au centre du Soleil (adapté pour l'étude des planètes du système solaire).

### 2. Notion de trajectoire
La trajectoire d'un point matériel est l'ensemble continu des positions successives occupées par ce point au cours du temps. Elle dépend du référentiel choisi.
* **Trajectoire rectiligne** : segment ou droite.
* **Trajectoire circulaire** : cercle ou arc de cercle.
* **Trajectoire curviligne** : courbe quelconque dans l'espace.`
    },
    {
      title: 'II. Vecteur vitesse moyenne et instantanée',
      content: `### 1. Vitesse moyenne scalaire
La vitesse moyenne $v_m$ d'un mobile parcourant une distance $d$ pendant la durée $\\Delta t = t_2 - t_1$ est :
$$v_m = \\frac{d}{\\Delta t}$$
* Unités : $d$ en mètres (m), $\\Delta t$ en secondes (s), $v_m$ en $\\text{m/s}$ ou $\\text{m}\\cdot\\text{s}^{-1}$.
* **Règle de conversion indispensable** :
$$1 \\text{ m/s} = 3{,}6 \\text{ km/h} \\quad \\Longleftrightarrow \\quad 1 \\text{ km/h} = \\frac{1}{3{,}6} \\text{ m/s} \\approx 0{,}278 \\text{ m/s}$$

### 2. Vecteur vitesse instantanée $\\vec{v}$
La vitesse instantanée caractérise la rapidité et la direction du déplacement d'un point à un instant précis $t$.
Sur un enregistrement chronophotographique où les positions sont prises à des intervalles de temps réguliers $\\tau$ :
$$\\vec{v}_i = \\frac{\\vec{M_{i-1}M_{i+1}}}{2\\tau}$$
Le vecteur vitesse instantanée possède 4 caractéristiques incontournables :
1. **Point d'application** : la position $M_i$ occupée par le mobile à l'instant considéré.
2. **Direction** : la tangente à la trajectoire au point $M_i$.
3. **Sens** : celui du mouvement à cet instant.
4. **Norme (valeur)** : $v_i = \\frac{M_{i-1}M_{i+1}}{2\\tau}$ en $\\text{m/s}$.`
    },
    {
      title: 'III. Le Mouvement Rectiligne Uniforme (MRU)',
      content: `### 1. Définition et critères
Un mouvement est **rectiligne uniforme** si :
* Sa trajectoire est une ligne droite.
* Son vecteur vitesse instantanée $\\vec{v}$ reste rigoureusement constant au cours du temps (même direction, même sens, même valeur).
* Le mobile parcourt des distances égales pendant des durées égales.

### 2. Équation horaire du MRU
Sur un axe orienté $(O, \\vec{i})$, l'abscisse $x(t)$ du mobile à chaque instant $t$ vérifie :
$$x(t) = v \\cdot t + x_0$$
* $v$ : valeur algébrique de la vitesse constante (en $\\text{m/s}$).
* $t$ : temps écoulé depuis l'instant initial (en s).
* $x_0$ : abscisse à l'instant initial $t = 0$ (en m).

### 3. Exploitation graphique
* **Graphe de position $x = f(t)$** : c'est une droite dont le coefficient directeur est égal à la vitesse $v = \\frac{\\Delta x}{\\Delta t}$.
* **Graphe de vitesse $v = f(t)$** : c'est une droite horizontale constante. L'aire sous la courbe entre deux instants correspond exactement à la distance parcourue $\\Delta x$.`
    }
  ],
  image: {
    url: SVG_P8_MOUVEMENT,
    caption: 'Figure P8 : Enregistrement chronophotographique du Mouvement Rectiligne Uniforme (MRU) et vecteur vitesse'
  },
  conclusion: `La caractérisation cinématique du MRU constitue le fondement sur lequel s'appuie la dynamique galiléenne : un objet libre de toute force ou soumis à des forces qui se compensent conserve indéfiniment son état de repos ou de mouvement rectiligne uniforme.`
};

export const LESSON_P9_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p9',
  number: 'Chapitre P9',
  title: 'Généralités sur les forces et le principe d\'inertie',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Mécanique',
  readTime: '70 min',
  description: 'Action mécanique, modélisation vectorielle d\'une force, forces de contact et à distance, résultante vectorielle, premier principe de Newton (principe d\'inertie) et étude de la tension d\'un ressort (loi de Hooke).',
  introduction: `Une action mécanique exercée par un corps extérieur (l'acteur) sur le système étudié (le receveur) est modélisée en physique par un être mathématique : le vecteur force. Les forces sont responsables de la modification de la vitesse d'un corps, de la courbure de sa trajectoire ou de sa déformation mécanique. Cette leçon aborde la modélisation vectorielle et le principe d'inertie.`,
  sections: [
    {
      title: 'I. Définition et représentation vectorielle d\'une force',
      content: `### 1. Effets d\'une force
Une force peut avoir :
* **Un effet dynamique** : mettre un corps au repos en mouvement ou modifier le vecteur vitesse d'un mobile en déplacement (accélération, freinage, déviation).
* **Un effet statique** : maintenir un corps au repos en équilibre ou provoquer sa déformation élastique ou plastique.

### 2. Les 4 caractéristiques du vecteur force $\\vec{F}$
Tout vecteur force est déterminé par :
1. **Le point d'application** : le point matériel précis de contact (force de contact localisée) ou le centre de gravité $G$ du système (force à distance ou répartie).
2. **La droite d'action (direction)** : la ligne géométrique suivant laquelle l'action s'exerce (verticale, horizontale, inclinée d'un angle $\\alpha$).
3. **Le sens** : l'orientation de l'action le long de la droite d'action (vers le bas, vers le haut, vers la droite, etc.).
4. **L'intensité (norme)** : la valeur de l'effort, mesurée en **Newtons (N)** à l'aide d'un dynamomètre.`
    },
    {
      title: 'II. Typologie des forces de la mécanique classique',
      content: `### 1. Forces de contact
Nécessitent un contact physique direct entre l'acteur et le receveur :
* **Tension d'un fil ou câble $\\vec{T}$** : dirigée le long du fil, orientée du solide vers le fil tendu.
* **Réaction normale d'un support $\\vec{R}_N$** : perpendiculaire à la surface de contact, orientée vers l'extérieur du support (empêche l'enfoncement).
* **Force de frottement $\\vec{f}$** : tangentielle à la surface de contact, opposée au glissement ou à la tendance au mouvement.
* **Poussée d'Archimède $\\vec{F}_A$** : force verticale ascendante exercée par un fluide sur un corps immergé.

### 2. Forces à distance
S'exercent à travers l'espace sans contact matériel :
* **Le poids $\\vec{P}$** : attraction gravitationnelle terrestre.
* **La force électrostatique coulombienne $\\vec{F}_e$** : entre corps électrisés.
* **La force magnétique** : exercée par un aimant sur un matériau ferromagnétique.`
    },
    {
      title: 'III. Le Principe d\'Inertie (Première loi de Newton)',
      content: `### 1. Énoncé fondamental
Dans un référentiel galiléen, si la somme vectorielle de toutes les forces extérieures appliquées à un solide est nulle, alors son centre d'inertie $G$ est soit au repos absolu, soit animé d'un mouvement rectiligne uniforme :
$$\\sum \\vec{F}_{\\text{ext}} = \\vec{0} \\quad \\Longleftrightarrow \\quad \\vec{v}_G = \\vec{\\text{constante}}$$
* Réciproque : Si un corps n'a pas un mouvement rectiligne uniforme (s'il accélère, ralentit ou tourne), alors la résultante des forces qui s'exercent sur lui n'est pas nulle ($\sum \\vec{F}_{\\text{ext}} \\ne \\vec{0}$).

### 2. Notion de système isolé et pseudo-isolé
* **Système mécaniquement isolé** : système soumis à aucune force extérieure (idéal théorique).
* **Système pseudo-isolé** : système soumis à des forces extérieures qui se compensent exactement à chaque instant : $\\sum \\vec{F}_{\\text{ext}} = \\vec{0}$.`
    },
    {
      title: 'IV. Étude expérimentale d\'un ressort hélicoïdal : Loi de Hooke',
      content: `Lorsqu'on suspend une masse à un ressort de longueur à vide $l_0$, il s'étire et atteint une longueur finale $l$. L'allongement est $\\Delta l = l - l_0$.
À l'équilibre, le poids de la masse compense la tension de rappel du ressort :
$$T = k \\cdot |\\Delta l| = k \\cdot |l - l_0|$$
* $T$ : tension de rappel en Newtons (N).
* $k$ : raideur intrinsèque du ressort en $\\text{N/m}$ ou $\\text{N}\\cdot\\text{m}^{-1}$.
* $\\Delta l$ : allongement élastique en mètres (m).
La courbe $T = f(\\Delta l)$ est une droite passant par l'origine dont la pente donne la constante de raideur $k$.`
    }
  ],
  image: {
    url: SVG_P9_FORCES,
    caption: 'Figure P9 : Bilan vectoriel des forces sur un solide, principe d\'inertie et tension du ressort'
  },
  conclusion: `La maîtrise du bilan des forces extérieures appliquées à un système constitue l'étape préparatoire indispensable pour résoudre n'importe quel problème de statique ou de dynamique en sciences physiques.`
};

export const LESSON_P10_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p10',
  number: 'Chapitre P10',
  title: 'Le poids, la masse et la gravitation',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Mécanique',
  readTime: '65 min',
  description: 'Distinction conceptuelle entre masse et poids, champ de pesanteur local g, relation vectorielle P = m·g, variation de la pesanteur selon l\'altitude et la latitude, et loi universelle de la gravitation de Newton.',
  introduction: `Dans le langage courant, les termes « masse » et « poids » sont fréquemment confondus à tort. En sciences physiques, il s'agit de deux grandeurs physiques fondamentalement distinctes par leur nature, leurs unités et leurs modes de mesure. Cette leçon formalise la relation de proportionnalité $P = m \\cdot g$ et explore les origines gravitationnelles de la pesanteur.`,
  sections: [
    {
      title: 'I. La masse d\'un corps : propriété intrinsèque',
      content: `### 1. Définition et invariance
La **masse $m$** d'un corps représente la quantité de matière contenue dans ce corps (le nombre total de nucléons composant ses atomes) ainsi que son inertie vis-à-vis des variations de mouvement.
* C'est une **grandeur scalaire invariante** : elle ne change jamais, que l'objet se trouve à Dakar, au sommet de l'Everest, sur la Lune ou dans le vide interstellaire.
* Son unité dans le Système International est le **kilogramme (kg)**.
* Elle se mesure par comparaison à l'aide d'une **balance** (à plateaux ou électronique).`
    },
    {
      title: 'II. Le poids d\'un corps : force de pesanteur',
      content: `### 1. Définition physique
Le **poids $\\vec{P}$** d'un corps à la surface d'un astre est l'action mécanique gravitationnelle exercée à distance par cet astre sur le corps.
C'est une grandeur vectorielle caractérisée par :
1. **Point d'application** : le centre de gravité $G$ de l'objet.
2. **Direction** : la verticale du lieu (définie par la direction du fil à plomb).
3. **Sens** : vers le centre de la Terre (vers le bas).
4. **Intensité $P$** : mesurée en **Newtons (N)** à l'aide d'un dynamomètre.`
    },
    {
      title: 'III. La relation vectorielle poids-masse et champ de pesanteur',
      content: `### 1. Formule fondamentale
En tout lieu d'un champ de pesanteur, le vecteur poids est proportionnel au vecteur accélération de la pesanteur $\\vec{g}$ :
$$\\vec{P} = m \\cdot \\vec{g} \\quad \\Longleftrightarrow \\quad P = m \\cdot g$$
* $P$ : intensité du poids en Newtons (N).
* $m$ : masse du corps en kilogrammes (kg).
* $g$ : intensité de la pesanteur locale en $\\text{N/kg}$ ou $\\text{m/s}^2$.

### 2. Variations de l'intensité de pesanteur $g$
L'intensité de la pesanteur terrestre dépend de la latitude et de l'altitude :
* **Influence de la latitude** (la Terre étant aplatie aux pôles, le rayon terrestre au pôle est inférieur à celui à l'équateur) :
  * À l'équateur : $g \\approx 9{,}78 \\text{ N/kg}$.
  * À Dakar (latitude $14{,}7^\\circ\\text{ N}$) : $g \\approx 9{,}786 \\approx 9{,}80 \\text{ N/kg}$.
  * À Paris : $g \\approx 9{,}81 \\text{ N/kg}$.
  * Aux pôles : $g \\approx 9{,}83 \\text{ N/kg}$.
* **Influence de l'altitude $h$** : $g$ diminue lorsque l'altitude augmente :
$$g(h) = g_0 \\cdot \\left(\\frac{R_T}{R_T + h}\\right)^2$$
* **Sur la Lune** : $g_{\\text{Lune}} \\approx 1{,}62 \\text{ N/kg} \\approx \\frac{g_{\\text{Terre}}}{6}$. Un astronaute de masse $m = 70\\text{ kg}$ pèse $686\\text{ N}$ sur Terre, mais seulement $113\\text{ N}$ sur la Lune !`
    },
    {
      title: 'IV. Origine gravitationnelle du poids (Loi universelle de Newton)',
      content: `Deux corps ponctuels de masses $M$ et $m$ séparés par une distance $d$ s'attirent mutuellement selon la loi universelle de la gravitation :
$$F_G = G \\cdot \\frac{M \\cdot m}{d^2}$$
* $G = 6{,}67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.
En assimilant le poids d'un objet au niveau du sol à la force d'attraction exercée par la Terre (masse $M_T$, rayon $R_T$) :
$$P = F_G \\iff m \\cdot g_0 = G \\cdot \\frac{M_T \\cdot m}{R_T^2} \\iff g_0 = \\frac{G \\cdot M_T}{R_T^2}$$`
    }
  ],
  image: {
    url: SVG_P10_POIDS_MASSE,
    caption: 'Figure P10 : Mesure du poids au dynamomètre et relation fondamentale P = m·g'
  },
  conclusion: `La masse est la mémoire matérielle immuable de l'objet, tandis que le poids est la manifestation locale et variable de l'interaction gravitationnelle exercée par l'astre d'accueil.`
};

export const LESSON_P11_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p11',
  number: 'Chapitre P11',
  title: 'Équilibre d\'un solide soumis à des forces non parallèles',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Mécanique',
  readTime: '70 min',
  description: 'Conditions d\'équilibre statique, forces concourantes et coplanaires, construction du polygone des forces (triangle fermé), méthode analytique de projection orthogonale sur deux axes cartésiens et applications.',
  introduction: `L'étude de l'équilibre des solides sous l'action de forces non parallèles constitue la base de la statique, indispensable pour la conception d'échafaudages, de ponts, de grues portuaires et de toitures architecturales. Cette leçon établit les deux conditions universelles d'équilibre et détaille les méthodes de résolution graphique et analytique.`,
  sections: [
    {
      title: 'I. Les conditions générales d\'équilibre d\'un solide',
      content: `Pour qu'un solide indéformable soumis à un ensemble de forces extérieures soit en équilibre statique dans un référentiel galiléen, deux conditions nécessaires et suffisantes doivent être satisfaites :
1. **Équilibre de translation** : la somme vectorielle de toutes les forces extérieures appliquées est rigoureusement nulle :
$$\\sum \\vec{F}_{\\text{ext}} = \\vec{0} \\iff \\vec{F}_1 + \\vec{F}_2 + \\dots + \\vec{F}_n = \\vec{0}$$
2. **Équilibre de rotation** : la somme des moments de toutes les forces par rapport à n'importe quel axe est nulle : $\\sum \\mathcal{M}_{\\Delta}(\\vec{F}) = 0$.`
    },
    {
      title: 'II. Cas d\'un solide soumis à 3 forces non parallèles',
      content: `Lorsqu'un solide est maintenu en équilibre sous l'action de trois forces non parallèles $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$, les propriétés géométriques suivantes sont obligatoirement vérifiées :
1. **Les forces sont coplanaires** (elles se trouvent dans un même plan géométrique).
2. **Les lignes d'action sont concourantes** en un point unique $I$ :
$$\\mathcal{D}_1 \\cap \\mathcal{D}_2 \\cap \\mathcal{D}_3 = \\{I\\}$$
3. **La résultante vectorielle est nulle** :
$$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$$`
    },
    {
      title: 'III. Méthode de résolution graphique : Le triangle des forces',
      content: `La condition vectorielle $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$ implique que si l'on trace les vecteurs forces bout à bout à l'échelle, on obtient un **triangle géométrique parfaitement fermé** (le point de départ coïncide avec le point d'arrivée).
* Si l'un des angles est droit ($90^\\circ$), on applique le théorème de Pythagore et la trigonométrie usuelle :
$$\\sin \\alpha = \\frac{\\text{Côté opposé}}{\\text{Hypoténuse}}, \\quad \\cos \\alpha = \\frac{\\text{Côté adjacent}}{\\text{Hypoténuse}}, \\quad \\tan \\alpha = \\frac{\\text{Côté opposé}}{\\text{Côté adjacent}}$$
* Si le triangle n'est pas rectangle, on applique le théorème d'Al-Kashi ou la loi des sinus :
$$\\frac{F_1}{\\sin \\alpha_1} = \\frac{F_2}{\\sin \\alpha_2} = \\frac{F_3}{\\sin \\alpha_3}$$`
    },
    {
      title: 'IV. Méthode de résolution analytique (Projections cartésiennes)',
      content: `C'est la méthode de référence, la plus générale et la plus précise :
1. On isole le système et on dresse le bilan exhaustif des forces appliquées.
2. On choisit un repère orthonormé judicieux $(O, \\vec{i}, \\vec{j})$, par exemple avec l'axe $(Ox)$ horizontal et l'axe $(Oy)$ vertical (ou parallèle et perpendiculaire à un plan incliné).
3. On projette l'équation vectorielle $\\sum \\vec{F} = \\vec{0}$ sur chaque axe :
$$\\begin{cases} \\sum F_x = 0 \\iff F_{1x} + F_{2x} + F_{3x} = 0 \\\\ \\sum F_y = 0 \\iff F_{1y} + F_{2y} + F_{3y} = 0 \\end{cases}$$
On obtient ainsi un système linéaire de deux équations scalaires permettant de déterminer deux grandeurs inconnues (intensités de tensions ou angles d'inclinaison).`
    }
  ],
  image: {
    url: SVG_P11_EQUILIBRE_3_FORCES,
    caption: 'Figure P11 : Équilibre sous trois forces non parallèles, concourance et dynamique fermée'
  },
  conclusion: `La projection des forces sur un repère orthonormé adapté transforme une équation vectorielle spatiale complexe en deux simples équations algébriques résolubles avec rigueur.`
};

export const LESSON_P12_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p12',
  number: 'Chapitre P12',
  title: 'Équilibre d\'un solide mobile autour d\'un axe fixe',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Mécanique',
  readTime: '70 min',
  description: 'Rotation d\'un solide autour d\'un axe fixe, définition et calcul du moment d\'une force M = ± F·d, bras de levier, convention de signe, théorème des moments, couples de forces et applications aux machines simples.',
  introduction: `L'action d'une force sur un solide ne se limite pas à produire une translation : lorsqu'un solide possède un axe de rotation fixe, une force peut provoquer sa mise en rotation ou modifier sa vitesse angulaire. L'efficacité d'une force pour faire tourner un corps est mesurée par son moment. Cette leçon développe le théorème des moments et les principes des leviers.`,
  sections: [
    {
      title: 'I. Moment d\'une force par rapport à un axe fixe $(\\Delta)$',
      content: `### 1. Définition et formule fondamentale
Soit un solide mobile autour d'un axe fixe orienté $(\\Delta)$. L'aptitude d'une force orthogonale à $(\\Delta)$ à faire tourner ce solide est mesurée par son **moment**, noté $\\mathcal{M}_{\\Delta}(\\vec{F})$ :
$$\\mathcal{M}_{\\Delta}(\\vec{F}) = \\pm F \\cdot d$$
* $F$ : intensité de la force en Newtons (N).
* $d$ : **bras de levier**, c'est-à-dire la **distance perpendiculaire la plus courte** entre l'axe de rotation $(\\Delta)$ et la droite d'action de la force, exprimée en mètres (m).
* $\\mathcal{M}_{\\Delta}(\\vec{F})$ : moment de la force en Newton-mètre ($\\text{N}\\cdot\\text{m}$).

### 2. Convention de signe et orientation
On choisit arbitrairement (ou selon l'énoncé) un sens positif de rotation (généralement le sens trigonométrique anti-horaire) :
* $\\mathcal{M}_{\\Delta}(\\vec{F}) > 0$ si la force tend à faire tourner le solide dans le sens positif.
* $\\mathcal{M}_{\\Delta}(\\vec{F}) < 0$ si la force tend à faire tourner le solide dans le sens négatif.

### 3. Cas de moment nul
Le moment d'une force par rapport à un axe $(\\Delta)$ est rigoureusement nul dans deux cas géométriques cruciaux :
1. La droite d'action de la force **coupe l'axe de rotation** ($d = 0$).
2. La droite d'action de la force est **parallèle à l'axe de rotation** (elle ne produit aucun effet de rotation).`
    },
    {
      title: 'II. Le Théorème des moments (Condition d\'équilibre de rotation)',
      content: `### Énoncé du théorème des moments
Pour qu'un solide mobile autour d'un axe fixe $(\\Delta)$ soit en équilibre de rotation statique, la somme algébrique des moments de toutes les forces extérieures appliquées par rapport à cet axe doit être rigoureusement nulle :
$$\\sum \\mathcal{M}_{\\Delta}(\\vec{F}_{\\text{ext}}) = 0$$
$$\\mathcal{M}_{\\Delta}(\\vec{F}_1) + \\mathcal{M}_{\\Delta}(\\vec{F}_2) + \\dots + \\mathcal{M}_{\\Delta}(\\vec{F}_n) = 0$$`
    },
    {
      title: 'III. Notion de couple de forces',
      content: `Un **couple de forces** est constitué de deux forces parallèles $\\vec{F}_1$ et $\\vec{F}_2$ ayant la même intensité, des directions parallèles et des sens opposés :
$$\\vec{F}_1 = - \\vec{F}_2 \\quad \\text{et} \\quad F_1 = F_2 = F$$
* La résultante d'un couple est nulle (il ne produit aucune translation : $\\vec{F}_1 + \\vec{F}_2 = \\vec{0}$).
* Le moment d'un couple est indépendant de la position de l'axe et ne dépend que de l'écartement $D$ entre leurs lignes d'action :
$$\\mathcal{M} = F \\cdot D$$
Exemples quotidiens : tourner une clé dans une serrure, tourner un volant automobile à deux mains, dévisser un bouchon de bouteille.`
    },
    {
      title: 'IV. Applications technologiques : Les leviers et treuils',
      content: `Dans un levier en équilibre de pivot $O$, soumis à une force motrice $\\vec{F}_m$ à la distance $d_m$ et à une force résistante $\\vec{F}_r$ à la distance $d_r$ :
$$F_m \\cdot d_m = F_r \\cdot d_r \\iff F_m = F_r \\cdot \\frac{d_r}{d_m}$$
Si le bras de levier moteur $d_m$ est beaucoup plus grand que le bras résistant $d_r$, l'effort nécessaire $F_m$ est considérablement démultiplié ! C'est le principe qui permet de soulever des charges colossales avec un pied-de-biche, une brouette, des pinces ou une balance romaine.`
    }
  ],
  image: {
    url: SVG_P12_MOMENT_LEVIER,
    caption: 'Figure P12 : Équilibre d\'un solide mobile autour d\'un axe fixe, théorème des moments et levier'
  },
  conclusion: `Le théorème des moments démontre que l'efficacité d'une action mécanique en rotation dépend tout autant de la distance d'application (bras de levier) que de la force brute déployée.`
};

export const COURSES_2NDE_PC_S_PART2: LessonContent[] = [
  LESSON_P8_SECONDE_S,
  LESSON_P9_SECONDE_S,
  LESSON_P10_SECONDE_S,
  LESSON_P11_SECONDE_S,
  LESSON_P12_SECONDE_S
];
