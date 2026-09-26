import { LessonContent } from './courses';
import {
  SVG_P13_LUMIERE_PROPAGATION,
  SVG_P14_P15_OPTIQUE,
  SVG_C1_C2_ATOME,
  SVG_C3_C4_MOLE_LIAISONS
} from './diagrams_2nde_pc_s';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE SECONDE S (SÉNÉGAL)
// TROISIÈME PARTIE : OPTIQUE GÉOMÉTRIQUE (P13 À P15) & CHIMIE GÉNÉRALE (C1 À C5)
// Conforme au programme officiel national de la République du Sénégal
// Leçons intégrales sans résumé avec figures vectorielles SVG
// =========================================================================

export const LESSON_P13_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p13',
  number: 'Chapitre P13',
  title: 'Propagation rectiligne de la lumière et ombres',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Optique Géométrique',
  readTime: '65 min',
  description: 'Sources primaires et objets diffusants, principe de propagation rectiligne dans un milieu transparent homogène et isotrope, vitesse de la lumière c, ombres propre et portée, pénombre, éclipses et chambre noire.',
  introduction: `L'optique géométrique repose sur la notion de rayon lumineux et sur l'hypothèse fondamentale que la lumière se propage en ligne droite. Cette modélisation intuitive permet d'expliquer la formation des ombres, le mécanisme des éclipses solaires et lunaires, ainsi que le principe de formation des images dans une chambre noire.`,
  sections: [
    {
      title: 'I. Les sources de lumière et récepteurs',
      content: `* **Sources primaires** : corps qui produisent eux-mêmes la lumière qu'ils émettent par incandescence ou luminescence (le Soleil, les étoiles, la flamme d'une bougie, le filament d'une lampe, les vers luisants).
* **Objets diffusants (sources secondaires)** : corps qui ne produisent pas de lumière propre mais renvoient (diffusent ou réfléchissent) dans toutes les directions une fraction de la lumière qu'ils reçoivent (la Lune, les planètes, un mur blanc, une feuille de papier, notre corps).
* **Milieu de propagation** :
  * *Transparent* : laisse passer la lumière et permet de voir nettement les objets au travers (vide, air pur, eau limpide, verre mince).
  * *Translucide* : laisse passer la lumière mais diffuse les rayons, empêchant une vision nette (verre dépoli, papier calque).
  * *Opaque* : ne laisse passer aucune lumière (bois, métaux, carton).`
    },
    {
      title: 'II. Principe de propagation rectiligne de la lumière',
      content: `### 1. Énoncé fondamental
Dans un milieu transparent, homogène et isotrope (dont les propriétés physiques sont identiques en tout point et dans toutes les directions), **la lumière se propage en ligne droite**.
* Un **rayon lumineux** est représenté géométriquement par une droite fléchée indiquant le sens de propagation de l'énergie lumineuse.
* Un **faisceau lumineux** est un ensemble de rayons issus d'une même source (faisceau parallèle/cylindrique, convergent ou divergent).

### 2. Vitesse de propagation de la lumière
Dans le vide absolu, la lumière se déplace à une vitesse universelle limite, notée $c$ (célérité) :
$$c = 299\\,792\\,458 \\text{ m/s} \\approx 3{,}00 \\times 10^8 \\text{ m/s} = 300\\,000 \\text{ km/s}$$
Dans les milieux matériels transparents (eau, verre), la lumière se déplace à une vitesse $v < c$.`
    },
    {
      title: 'III. Formation des ombres et éclipses',
      content: `### 1. Source ponctuelle
Lorsqu'un objet opaque sphérique est éclairé par une source lumineuse ponctuelle $S$ :
* **Ombre propre** : la partie arrière de l'objet non éclairée par la source.
* **Cône d'ombre** : la région de l'espace située derrière l'objet ne recevant aucun rayon lumineux.
* **Ombre portée** : la zone sombre délimitée projetée sur un écran récepteur placé derrière l'objet.

### 2. Source étendue et pénombre
Si la source lumineuse a des dimensions non négligeables (source étendue) :
* Entre la zone de pleine lumière et l'ombre portée totale apparaît une zone intermédiaire partiellement éclairée appelée **pénombre**.

### 3. Les éclipses astronomiques
* **Éclipse de Soleil** : la Lune passe exactement entre le Soleil et la Terre ($S - L - T$). Les observateurs situés dans le cône d'ombre lunaire assistent à une éclipse totale.
* **Éclipse de Lune** : la Terre s'interpose entre le Soleil et la Lune ($S - T - L$). La pleine Lune pénètre dans le cône d'ombre de la Terre.`
    },
    {
      title: 'IV. Principe de la chambre noire',
      content: `Une boîte opaque munie d'un minuscule orifice (sténopé) sur sa face avant et d'un écran translucide à l'arrière forme une image inversée d'un objet lumineux situé devant elle.
Par le théorème de Thalès, la taille de l'image $A'B'$ et la taille de l'objet $AB$ sont liées par :
$$\\frac{A'B'}{AB} = \\frac{d'}{d}$$
* $d$ : distance objet - sténopé.
* $d'$ : profondeur de la boîte (distance sténopé - écran).`
    }
  ],
  image: {
    url: SVG_P13_LUMIERE_PROPAGATION,
    caption: 'Figure P13 : Propagation rectiligne de la lumière, faisceaux et formation des ombres portées'
  },
  conclusion: `La propagation rectiligne de la lumière constitue le principe cardinal sur lequel reposent la géodésie, l'astronomie de position, la photographie et l'ensemble de l'optique géométrique.`
};

export const LESSON_P14_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p14',
  number: 'Chapitre P14',
  title: 'Réflexion de la lumière et miroirs plans',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Optique Géométrique',
  readTime: '65 min',
  description: 'Phénomène de réflexion spéculaire versus diffuse, vocabulaire géométrique (normale, angle d\'incidence, angle de réflexion), les deux lois de Snell-Descartes pour la réflexion et propriétés de l\'image donnée par un miroir plan.',
  introduction: `Lorsqu'un faisceau lumineux rencontre la surface polie séparant deux milieux, une fraction ou la totalité de l'énergie lumineuse est renvoyée dans le milieu initial : c'est le phénomène de réflexion. Cette leçon établit les lois de la réflexion et détaille les caractéristiques géométriques des images formées par les miroirs plans.`,
  sections: [
    {
      title: 'I. Définitions et vocabulaire géométrique',
      content: `Considérons un rayon lumineux tombant sur une surface réfléchissante plane au point de contact $I$, appelé **point d'incidence** :
* **Le rayon incident** : le rayon lumineux arrivant sur la surface.
* **Le rayon réfléchi** : le rayon renvoyé dans le même milieu après impact.
* **La normale $(IN)$** : la droite perpendiculaire à la surface réfléchissante au point d'incidence $I$.
* **Le plan d'incidence** : le plan géométrique contenant le rayon incident et la normale $(IN)$.
* **L'angle d'incidence $i$** : l'angle orienté entre le rayon incident et la normale $(IN)$.
* **L'angle de réflexion $r$** : l'angle orienté entre le rayon réfléchi et la normale $(IN)$.`
    },
    {
      title: 'II. Les deux lois de Snell-Descartes pour la réflexion',
      content: `### Première loi de Descartes (Coplanarité)
Le rayon réfléchi est situé dans le plan d'incidence défini par le rayon incident et la normale à la surface réfléchissante.

### Deuxième loi de Descartes (Égalité des angles)
L'angle de réflexion $r$ est rigoureusement égal à l'angle d'incidence $i$ :
$$r = i$$
* Si $i = 0^\\circ$ (incidence normale, rayon perpendiculaire au miroir), alors $r = 0^\\circ$ : le rayon repart exactement sur lui-même en sens inverse.`
    },
    {
      title: 'III. Réflexion spéculaire vs Réflexion diffuse',
      content: `* **Réflexion spéculaire (régulière)** : se produit sur une surface parfaitement lisse et polie (miroir métallique, vitre, surface d'eau calme). Un faisceau parallèle incident donne un faisceau réfléchi parfaitement parallèle dans une direction unique.
* **Réflexion diffuse (diffusion)** : se produit sur une surface rugueuse à l'échelle microscopique (papier, tissu, mur). Les normales locales étant orientées dans toutes les directions aléatoires, la lumière est renvoyée dans toutes les directions de l'espace, ce qui permet à l'œil d'observer l'objet sous n'importe quel angle.`
    },
    {
      title: 'IV. Étude du miroir plan',
      content: `Un miroir plan est une surface plane rigoureusement réfléchissante.
### Caractéristiques fondamentales de l'image
Pour un objet réel $AB$ placé devant un miroir plan :
1. **Image virtuelle** : les rayons réfléchis semblent diverger à partir d'un point $A'$ situé « derrière » le miroir. L'image ne peut pas être recueillie sur un écran physique placé derrière le miroir.
2. **Symétrie axiale orthogonale** : l'image $A'B'$ est le symétrique géométrique exact de l'objet $AB$ par rapport au plan du miroir.
3. **Même taille et même sens** : le grandissement est $\\gamma = +1$. L'image est droite et de même dimension que l'objet.
4. **Inversion latérale (chiralité)** : la droite de l'objet correspond à la gauche de l'image (effet d'inversion droite-gauche).`
    }
  ],
  image: {
    url: SVG_P14_P15_OPTIQUE,
    caption: 'Figure P14 : Lois de Snell-Descartes de la réflexion spéculaire (i = r) et réfraction'
  },
  conclusion: `Les lois de la réflexion régissent la construction des instruments d'observation périscopiques, des télescopes réflecteurs de Newton et des systèmes de guidage laser.`
};

export const LESSON_P15_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p15',
  number: 'Chapitre P15',
  title: 'Réfraction et dispersion de la lumière',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Physique — Optique Géométrique',
  readTime: '70 min',
  description: 'Changement de milieu, indice de réfraction n = c/v, lois de Snell-Descartes pour la réfraction n1·sin(i1) = n2·sin(i2), angle limite et réflexion totale, dispersion de la lumière blanche par un prisme et formation de l\'arc-en-ciel.',
  introduction: `Lorsqu'un rayon lumineux traverse la surface de séparation (dioptre) entre deux milieux transparents différents (par exemple de l'air vers l'eau), sa vitesse de propagation se modifie brusquement, ce qui provoque une déviation angulaire de sa trajectoire : c'est la réfraction. Cette leçon étudie la réfraction, la réflexion totale et le phénomène de dispersion chromatique.`,
  sections: [
    {
      title: 'I. L\'indice de réfraction absolu d\'un milieu',
      content: `La vitesse $v$ de la lumière dans un milieu matériel transparent est toujours inférieure à sa célérité $c$ dans le vide.
L'**indice de réfraction absolu $n$** d'un milieu est le rapport sans dimension de la célérité dans le vide sur la vitesse dans ce milieu :
$$n = \\frac{c}{v} \\ge 1$$
* Dans le vide : $n = 1$ (exactement).
* Dans l'air : $n_{\\text{air}} \\approx 1{,}0003 \\approx 1{,}00$.
* Dans l'eau pure : $n_{\\text{eau}} \\approx 1{,}33 = \\frac{4}{3}$.
* Dans le verre ordinaire : $n_{\\text{verre}} \\approx 1{,}50$ à $1{,}60$.
* Dans le diamant : $n_{\\text{diamant}} \\approx 2{,}42$.
Un milieu est dit **plus réfringent** qu'un autre si son indice de réfraction est plus élevé ($n_2 > n_1$).`
    },
    {
      title: 'II. Les lois de Snell-Descartes pour la réfraction',
      content: `### Première loi
Le rayon réfracté est situé dans le plan d'incidence défini par le rayon incident et la normale au dioptre.

### Deuxième loi fondamentale
Soient deux milieux d'indices respectifs $n_1$ et $n_2$. L'angle d'incidence $i_1$ et l'angle de réfraction $i_2$ vérifient la relation universelle :
$$n_1 \\cdot \\sin(i_1) = n_2 \\cdot \\sin(i_2)$$

### Sens de la déviation
* **Passage vers un milieu plus réfringent** ($n_2 > n_1$, ex : air $\\to$ verre) :
$$\\sin(i_2) = \\frac{n_1}{n_2} \\sin(i_1) < \\sin(i_1) \\implies i_2 < i_1$$
Le rayon réfracté **se rapproche de la normale**.
* **Passage vers un milieu moins réfringent** ($n_2 < n_1$, ex : eau $\\to$ air) :
$$i_2 > i_1$$
Le rayon réfracté **s'éloigne de la normale**.`
    },
    {
      title: 'III. Phénomène d\'angle limite et réflexion totale',
      content: `Lorsque la lumière passe d'un milieu plus réfringent vers un milieu moins réfringent ($n_1 > n_2$) :
Comme $i_2 > i_1$, l'angle réfracté atteint sa valeur maximale $i_2 = 90^\\circ$ pour un angle d'incidence critique appelé **angle limite** $\\lambda$ :
$$n_1 \\cdot \\sin(\\lambda) = n_2 \\cdot \\sin(90^\\circ) = n_2 \\cdot 1 \\iff \\sin(\\lambda) = \\frac{n_2}{n_1}$$
*Exemple pour l'eau ($n_1 = 1{,}33$) vers l'air ($n_2 = 1{,}00$) :*
$$\\sin(\\lambda) = \\frac{1}{1{,}33} = 0{,}75 \\implies \\lambda \\approx 48{,}6^\\circ$$
* **Conséquence majeure (Réflexion totale)** : Pour tout angle d'incidence supérieur à l'angle limite ($i_1 > \\lambda$), aucun rayon ne peut traverser le dioptre : il n'y a plus de réfraction, et 100% de la lumière est réfléchie selon les lois de la réflexion !
* **Applications technologiques** : les **fibres optiques** à gradient d'indice (télécommunications internet à très haut débit sous-marines et terrestres au Sénégal), les prismes à réflexion totale des jumelles et les endoscopes médicaux.`
    },
    {
      title: 'IV. Dispersion de la lumière blanche par un prisme',
      content: `### 1. Expérience historique de Newton (1666)
Lorsqu'un mince faisceau de lumière blanche traverse un prisme de verre transparent, il ressort sous forme d'un faisceau étalé en éventail présentant toutes les couleurs de l'arc-en-ciel : c'est le **spectre visible** continu, s'étendant du rouge (longueur d'onde $\\lambda_0 \\approx 750 \\text{ nm}$) au violet ($\\lambda_0 \\approx 400 \\text{ nm}$).

### 2. Interprétation physique
La lumière blanche est **polychromatique** (composée d'une infinité de lumières monochromatiques).
Dans la matière transparente dispersive, la vitesse de propagation de la lumière dépend de sa fréquence (et donc de sa couleur) :
$$v_{\\text{rouge}} > v_{\\text{violet}} \\implies n_{\\text{violet}} > n_{\\text{rouge}}$$
L'indice du prisme étant plus élevé pour le violet que pour le rouge, le violet est **plus dévié** que le rouge selon la loi $n \\cdot \\sin(i) = \\text{cte}$.

### 3. L'arc-en-ciel
Dans l'atmosphère, les gouttes d'eau de pluie en suspension se comportent comme de minuscules prismes sphériques : la lumière du Soleil y subit une réfraction en entrant, une réflexion totale interne, puis une seconde réfraction en sortant avec séparation chromatique.`
    }
  ],
  image: {
    url: SVG_P14_P15_OPTIQUE,
    caption: 'Figure P15 : Déviation d\'un rayon par réfraction et séparation spectrale des longueurs d\'onde'
  },
  conclusion: `La réfraction et la dispersion ouvrent les portes de la spectroscopie moderne, permettant d'identifier la composition chimique des étoiles et la structure fine des molécules.`
};

export const LESSON_C1_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c1',
  number: 'Chapitre C1',
  title: 'Mélanges et corps purs : séparation et critères de pureté',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Chimie Générale',
  readTime: '65 min',
  description: 'Définition d\'un corps pur simple et composé, mélanges homogènes et hétérogènes, techniques expérimentales de séparation (filtration, décantation, distillation fractionnée, chromatographie) et constantes physiques d\'identification.',
  introduction: `La matière qui nous entoure dans la nature se présente presque toujours sous forme de mélanges complexes. L'objectif premier du chimiste consiste à isoler, purifier et identifier les espèces chimiques individuelles pour étudier leurs propriétés et leurs transformations. Cette leçon pose les bases de la taxonomie de la matière et des techniques séparatives en Seconde S.`,
  sections: [
    {
      title: 'I. Classification fondamentale : Corps purs et mélanges',
      content: `### 1. Corps pur
Un corps pur est constitué d'une seule espèce chimique (un seul type de molécules ou un seul type d'atomes ou d'ions associés) :
* **Corps pur simple** : constitué d'atomes d'un seul et même élément chimique (ex : le dihydrogène $\\text{H}_2$, le dioxygène $\\text{O}_2$, le fer métallique $\\text{Fe}$, le carbone graphite $\\text{C}$).
* **Corps pur composé** : constitué de molécules ou de réseaux ioniques comportant au moins deux éléments chimiques distincts liés chimiquement (ex : l'eau pure $\\text{H}_2\\text{O}$, le dioxyde de carbone $\\text{CO}_2$, le chlorure de sodium $\\text{NaCl}$).

### 2. Mélanges homogènes et hétérogènes
Un mélange est une association de plusieurs espèces chimiques distinctes qui ne réagissent pas chimiquement entre elles :
* **Mélange hétérogène** : on peut distinguer à l'œil nu ou à la loupe au moins deux phases ou constituants différents (ex : eau + huile, eau boueuse du fleuve Sénégal, jus de bissap non filtré).
* **Mélange homogène (ou solution)** : présente un aspect uniforme et une seule phase macroscopique continue ; les molécules des différents constituants sont intimement dispersées à l'échelle moléculaire (ex : eau sucrée limpide, air atmosphérique, alliage de bronze).`
    },
    {
      title: 'II. Méthodes physiques de séparation des mélanges',
      content: `### 1. Séparation des mélanges hétérogènes
* **La décantation** : repose sur la différence de masse volumique (densité) des constituants sous l'effet de la pesanteur (sédimentation des solides lourds au fond, ou utilisation d'une ampoule à décanter pour deux liquides non miscibles).
* **La filtration** : consiste à faire passer le mélange à travers un filtre poreux (papier filtre) qui retient la phase solide insoluble (le résidu) et laisse passer la phase liquide limpide (le filtrat).

### 2. Séparation des mélanges homogènes
* **La distillation simple et fractionnée** : exploite les différences de températures d'ébullition des constituants d'un mélange liquide. Le liquide le plus volatil s'évapore en premier, ses vapeurs montent dans la colonne de Vigreux, puis se condensent dans un réfrigérant à eau pour former le **distillat**. C'est le procédé universel de raffinage du pétrole brut et de désalinisation.
* **La chromatographie sur couche mince (CCM)** : sépare et identifie les constituants d'un mélange selon leurs affinités différentielles entre une phase fixe stationnaire (silice sur plaque) et une phase mobile liquide (l'éluant qui monte par capillarité).`
    },
    {
      title: 'III. Critères physiques de pureté d\'un corps',
      content: `Un corps pur se caractérise par des grandeurs physiques constantes et reproductibles sous une pression atmosphérique donnée :
* **Température de changement d'état constante** (palier thermique) :
  * Pour l'eau pure à $1\\text{ atm}$ ($1013\\text{ hPa}$) : fusion à $0^\\circ\\text{C}$ et ébullition à $100^\\circ\\text{C}$ rigoureuses.
  * Un mélange ne présente pas de palier de température horizontal lors de son ébullition ou de sa solidification.
* **Masse volumique $\\rho$** : $\\rho = \\frac{m}{V}$ (ex : $\\rho_{\\text{eau}} = 1{,}00\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$).
* **Densité $d$** : par rapport à l'eau pour les liquides et solides ($d = \\frac{\\rho}{\\rho_{\\text{eau}}}$) ou par rapport à l'air pour les gaz ($d = \\frac{M}{29}$).`
    }
  ],
  image: {
    url: SVG_C1_C2_ATOME,
    caption: 'Figure C1 : Distinction particulaire entre corps pur, solution homogène et méthodes séparatives'
  },
  conclusion: `La caractérisation des corps purs par leurs constantes physiques est la méthode fondamentale de contrôle qualité en chimie pharmaceutique et agroalimentaire.`
};

export const LESSON_C2_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c2',
  number: 'Chapitre C2',
  title: 'Éléments, structure atomique et classification périodique',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Chimie Générale',
  readTime: '70 min',
  description: 'Élément chimique, composition du noyau atomique (protons, neutrons), numéro atomique Z, nombre de masse A, isotopes, répartition électronique en couches (K, L, M), et structure du tableau périodique de Mendeleïev.',
  introduction: `Tous les corps de l'univers matériel sont bâtis à partir d'une centaine d'éléments chimiques fondamentaux. L'atome, brique élémentaire de la matière, est structuré en un noyau central infiniment petit et dense entouré d'électrons en mouvement rapide. Cette leçon aborde le modèle atomique de Bohr-Rutherford et l'organisation périodique des éléments.`,
  sections: [
    {
      title: 'I. Structure microscopique de l\'atome',
      content: `### 1. Le noyau atomique et les nucléons
Le noyau est situé au centre de l'atome, occupant un volume environ $100\\,000$ fois plus petit que celui de l'atome (structure lacunaire).
Il est composé de particules appelées **nucléons** :
* **Les protons** : particules chargées positivement, de charge $q_p = +e = +1{,}602 \\times 10^{-19} \\text{ C}$ et de masse $m_p \\approx 1{,}673 \\times 10^{-27} \\text{ kg}$.
* **Les neutrons** : particules électriquement neutres ($q_n = 0 \\text{ C}$), de masse quasi-identique au proton $m_n \\approx 1{,}675 \\times 10^{-27} \\text{ kg}$.
* Le nombre de protons est le **numéro atomique $Z$**.
* Le nombre de neutrons est noté $N$.
* Le nombre total de nucléons est le **nombre de masse $A = Z + N$**.

### 2. Le nuage électronique et électroneutralité
Autour du noyau gravitent $Z$ électrons de charge $-e$. Comme l'atome est électriquement neutre :
$$\\text{Nombre d'électrons} = \\text{Nombre de protons} = Z$$
La masse de l'électron ($m_e \\approx 9{,}109 \\times 10^{-31} \\text{ kg}$) étant environ $1836$ fois plus faible que celle d'un nucléon, **la quasi-totalité de la masse de l'atome est concentrée dans son noyau** :
$$m_{\\text{atome}} \\approx A \\cdot m_{\\text{nucléon}}$$

### 3. Notation symbolique standard d'un nucléide
Un noyau atomique d'un élément de symbole $X$ est représenté par :
$$\\text{}^{A}_{Z}X$$
*Exemple* : L'atome de carbone 12 : $\\text{}^{12}_{6}\\text{C}$ possède $Z = 6$ protons, $6$ électrons et $N = 12 - 6 = 6$ neutrons.`
    },
    {
      title: 'II. Notion d\'isotopes et d\'ions monoatomiques',
      content: `### 1. Les isotopes
Des atomes sont dits **isotopes** s'ils possèdent le **même numéro atomique $Z$** (même nombre de protons et donc même élément chimique avec les mêmes propriétés chimiques), mais des **nombres de masse $A$ différents** (nombres de neutrons $N$ différents).
*Exemples* : Les trois isotopes de l'hydrogène :
* L'hydrogène ordinaire (protium) : $\\text{}^{1}_{1}\\text{H}$ ($1$ p, $0$ n).
* Le deutérium : $\\text{}^{2}_{1}\\text{H}$ ($1$ p, $1$ n).
* Le tritium : $\\text{}^{3}_{1}\\text{H}$ ($1$ p, $2$ n, radioactif).

### 2. Les ions monoatomiques
* **Cation** : atome qui a **perdu** un ou plusieurs électrons ; il porte une charge globale positive (ex : $\\text{Na}^+, \\text{Ca}^{2+}, \\text{Al}^{3+}$).
* **Anion** : atome qui a **gagné** un ou plusieurs électrons ; il porte une charge globale négative (ex : $\\text{Cl}^-, \\text{O}^{2-}, \\text{S}^{2-}$).`
    },
    {
      title: 'III. Répartition électronique par couches (Règles de remplissage)',
      content: `Au niveau Seconde S, les électrons se répartissent en couches concentriques successives désignées par les lettres $K$ ($n=1$), $L$ ($n=2$), $M$ ($n=3$) selon les règles de Pauli :
* Chaque couche peut contenir au maximum $2n^2$ électrons :
  * Couche $K$ : au maximum $2$ électrons.
  * Couche $L$ : au maximum $8$ électrons.
  * Couche $M$ (jusqu'à $Z=18$) : au maximum $8$ électrons.
* **Ordre de remplissage** : On remplit complètement la couche la plus interne avant de passer à la couche suivante.
* **Couche externe (de valence)** : la dernière couche occupée. Ses électrons (électrons de valence) déterminent la réactivité chimique et les liaisons.
*Exemple* : L'atome de chlore ($Z=17$) : sa structure électronique s'écrit $(K)^2 (L)^8 (M)^7$. Sa couche externe est la couche $M$, contenant 7 électrons de valence.`
    },
    {
      title: 'IV. Le Tableau périodique des éléments',
      content: `Dans la classification périodique moderne :
1. Les éléments sont rangés par **numéro atomique $Z$ croissant**.
2. Chaque **ligne horizontale (période)** correspond au remplissage d'une couche électronique ($n=1, 2, 3$).
3. Chaque **colonne verticale (groupe ou famille)** rassemble les éléments ayant le **même nombre d'électrons sur leur couche externe**. Ils possèdent donc des propriétés chimiques analogues !
* **Famille des métaux alcalins (colonne 1, sauf H)** : 1 électron externe ($\\text{Li}, \\text{Na}, \\text{K}$), très réactifs, forment des cations $X^+$.
* **Famille des métaux alcalino-terreux (colonne 2)** : 2 électrons externes ($\\text{Be}, \\text{Mg}, \\text{Ca}$), forment des cations $X^{2+}$.
* **Famille des halogènes (colonne 17 ou VII A)** : 7 électrons externes ($\\text{F}, \\text{Cl}, \\text{Br}, \\text{I}$), forment des anions $X^-$.
* **Famille des gaz nobles / rares (colonne 18 ou VIII A)** : couche externe saturée à 8 électrons (ou 2 pour He). Ils sont chimiquement inertes et très stables.`
    }
  ],
  image: {
    url: SVG_C1_C2_ATOME,
    caption: 'Figure C2 : Modèle de l\'atome (noyau et électrons) et principe de la classification périodique'
  },
  conclusion: `Le génie du tableau périodique de Mendeleïev est de révéler que les propriétés macroscopiques des éléments sont la conséquence directe du nombre d'électrons de valence de leurs atomes.`
};

export const LESSON_C3_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c3',
  number: 'Chapitre C3',
  title: 'Liaisons chimiques et représentation de Lewis',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Chimie Générale',
  readTime: '70 min',
  description: 'Recherche de la stabilité électronique, règles du duet et de l\'octet, liaison covalente simple et multiple, doublets liants et non liants, formules de Lewis des molécules usuelles et liaison ionique.',
  introduction: `À l'exception remarquable des gaz nobles, les atomes isolés possèdent une couche électronique externe incomplète, ce qui les rend instables. Pour acquérir une structure électronique stable identique à celle du gaz noble le plus proche, les atomes établissent des liaisons chimiques en mettant en commun ou en transférant des électrons de valence.`,
  sections: [
    {
      title: 'I. Les règles de stabilité : Duet et Octet',
      content: `Pour acquérir la configuration électronique particulièrement stable d'un gaz rare :
* **Règle du duet** : Les atomes proches de l'hélium ($Z \\le 5$ : hydrogène, lithium, béryllium) cherchent à entourer leur couche externe de **2 électrons** (structure en $(K)^2$).
* **Règle de l'octet** : Tous les autres éléments ($Z > 5$) cherchent à acquérir **8 électrons sur leur couche de valence** (structure en $(L)^8$ ou $(M)^8$).

Pour satisfaire à ces règles, les atomes disposent de deux mécanismes principaux :
1. Perdre ou gagner des électrons pour former des **ions** (liaison ionique).
2. Mettre en commun des électrons en formant des **liaisons covalentes** (molécules).`
    },
    {
      title: 'II. La liaison covalente et le modèle de Lewis',
      content: `### 1. Définition de la liaison covalente
Une liaison covalente résulte de la **mise en commun d'une paire d'électrons de valence (un doublet liant)** entre deux atomes. Chaque atome fournit généralement un électron à la liaison. Le doublet d'électrons appartient désormais aux deux atomes, contribuant à compléter simultanément la couche externe de chacun d'eux.
* **Liaison simple** : partage d'un doublet d'électrons (noté par un tiret $-$).
* **Liaison double** : partage de deux doublets d'électrons (noté par deux tirets parallèles $=$).
* **Liaison triple** : partage de trois doublets d'électrons (noté par trois tirets $\\equiv$).

### 2. Doublets liants et doublets non liants
Dans la représentation de Lewis d'une molécule :
* Un **doublet liant** est une paire d'électrons partagée entre deux atomes assurant la liaison chimique.
* Un **doublet non liant** est une paire d'électrons de valence appartenant exclusivement à un seul atome (non partagée).`
    },
    {
      title: 'III. Formules de Lewis des molécules fondamentales',
      content: `Calculons le nombre de liaisons covalentes formées par les atomes usuels :
* **Hydrogène $\\text{H}$** ($1$ e⁻ externe) : a besoin de $1$ e⁻ pour saturer en duet $\\implies$ **$1$ liaison covalente** (monovalent).
* **Carbone $\\text{C}$** ($4$ e⁻ externes) : a besoin de $4$ e⁻ pour saturer en octet $\\implies$ **$4$ liaisons covalentes** (tétravalent).
* **Azote $\\text{N}$** ($5$ e⁻ externes) : a besoin de $3$ e⁻ $\\implies$ **$3$ liaisons et $1$ doublet non liant** (trivalent).
* **Oxygène $\\text{O}$** ($6$ e⁻ externes) : a besoin de $2$ e⁻ $\\implies$ **$2$ liaisons et $2$ doublets non liants** (divalent).
* **Chlore $\\text{Cl}$ et halogènes** ($7$ e⁻ externes) : ont besoin de $1$ e⁻ $\\implies$ **$1$ liaison et $3$ doublets non liants**.

### Exemples d'application indispensables
1. **Molécule d'eau $\\text{H}_2\\text{O}$** :
L'atome central d'oxygène forme deux liaisons simples avec les hydrogènes et conserve deux doublets non liants :
$$\\text{H} - \\overline{\\underline{\\text{O}}} - \\text{H}$$
2. **Molécule de méthane $\\text{CH}_4$** :
Le carbone central forme quatre liaisons simples dirigées vers quatre hydrogènes.
3. **Molécule de dioxyde de carbone $\\text{CO}_2$** :
Le carbone central établit une double liaison avec chaque atome d'oxygène :
$$\\overline{\\underline{\\text{O}}} = \\text{C} = \\overline{\\underline{\\text{O}}}$$`
    },
    {
      title: 'IV. La liaison ionique',
      content: `Dans un cristal ionique (comme le sel de table $\\text{NaCl}$), des atomes d'électronégativités très différentes ne partagent pas d'électrons :
* Le sodium cède complètement son électron périphérique : $\\text{Na} \\to \\text{Na}^+ + e^-$.
* Le chlore capture cet électron : $\\text{Cl} + e^- \\to \\text{Cl}^-$.
Les ions formés $\\text{Na}^+$ et $\\text{Cl}^-$ s'attirent mutuellement par **attraction électrostatique coulombienne** isotrope et s'organisent en un réseau tridimensionnel cristallin régulier et électriquement neutre.`
    }
  ],
  image: {
    url: SVG_C3_C4_MOLE_LIAISONS,
    caption: 'Figure C3 : Liaison ionique, liaison covalente de Lewis et règles de l\'octet'
  },
  conclusion: `Le schéma de Lewis permet de prévoir avec une remarquable précision la géométrie spatiale, la valence et la réactivité chimique des molécules organiques et inorganiques.`
};

export const LESSON_C4_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c4',
  number: 'Chapitre C4',
  title: 'La mole et les grandeurs molaires',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Chimie Générale',
  readTime: '70 min',
  description: 'La mole comme unité macroscopique de quantité de matière, constante d\'Avogadro N_A, masse molaire atomique et moléculaire, volume molaire d\'un gaz V_m, densité des gaz et formules de conversion.',
  introduction: `Les atomes et les molécules étant des entités microscopiques d'une extrême petitesse et de masse infime, il est rigoureusement impossible de les compter un par un au laboratoire. Les chimistes ont donc introduit une unité de comptage par paquets macroscopiques : la mole. Cette leçon établit les relations fondamentales reliant le monde microscopique aux grandeurs mesurables.`
  ,
  sections: [
    {
      title: 'I. La mole : Unité de quantité de matière',
      content: `### 1. Définition officielle de la mole
La **mole** (symbole : **mol**) est l'unité internationale de quantité de matière, notée $n$.
Une mole d'entités élémentaires (atomes, molécules, ions, électrons) contient exactement un nombre déterminé d'entités égal à la **constante d'Avogadro**, notée $N_A$ :
$$N_A \\approx 6{,}022 \\times 10^{23} \\text{ mol}^{-1}$$

### 2. Relation entre nombre d'entités $N$ et quantité de matière $n$
Le nombre total $N$ d'entités microscopiques présentes dans un échantillon de $n$ moles est :
$$N = n \\cdot N_A \\iff n = \\frac{N}{N_A}$$`
    },
    {
      title: 'II. La masse molaire',
      content: `### 1. Masse molaire atomique
La masse molaire atomique $M$ d'un élément est la masse d'une mole d'atomes de cet élément. Elle s'exprime en **grammes par mole (g/mol ou $\\text{g}\\cdot\\text{mol}^{-1}$)** et figure dans le tableau périodique en tenant compte des abondances isotopiques naturelles :
* $M(\\text{H}) = 1{,}0 \\text{ g/mol}$
* $M(\\text{C}) = 12{,}0 \\text{ g/mol}$
* $M(\\text{N}) = 14{,}0 \\text{ g/mol}$
* $M(\\text{O}) = 16{,}0 \\text{ g/mol}$
* $M(\\text{Na}) = 23{,}0 \\text{ g/mol}$
* $M(\\text{Cl}) = 35{,}5 \\text{ g/mol}$

### 2. Masse molaire moléculaire
La masse molaire d'un corps pur moléculaire s'obtient en faisant la somme des masses molaires atomiques de tous les atomes constituant sa formule chimique brute :
*Exemples* :
* Pour l'eau $\\text{H}_2\\text{O}$ :
$$M(\\text{H}_2\\text{O}) = 2 \\cdot M(\\text{H}) + M(\\text{O}) = 2 \\times 1 + 16 = 18{,}0 \\text{ g/mol}$$
* Pour le glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6$ :
$$M = (6 \\times 12) + (12 \\times 1) + (6 \\times 16) = 72 + 12 + 96 = 180{,}0 \\text{ g/mol}$$

### 3. Relation fondamentale masse - quantité de matière
La masse $m$ d'un échantillon contenant $n$ moles d'une espèce de masse molaire $M$ est :
$$m = n \\cdot M \\iff n = \\frac{m}{M}$$
* $m$ : masse en grammes (g).
* $M$ : masse molaire en g/mol.
* $n$ : quantité de matière en moles (mol).`
    },
    {
      title: 'III. Le volume molaire d\'un gaz et densité',
      content: `### 1. Loi d'Avogadro-Ampère
Des volumes égaux de gaz différents, mesurés dans les mêmes conditions de température et de pression, contiennent le même nombre de moles.

### 2. Volume molaire $V_m$
Le **volume molaire d'un gaz**, noté $V_m$, est le volume occupé par une mole de ce gaz à une température $T$ et sous une pression $P$ données :
$$n = \\frac{V}{V_m} \\iff V = n \\cdot V_m$$
* Dans les **conditions normales de température et de pression (CNTP : $T = 0^\\circ\\text{C} = 273{,}15\\text{ K}, P = 1\\text{ atm}$)** :
$$V_m = 22{,}4 \\text{ L/mol}$$
* Dans les **conditions usuelles ($T = 20^\\circ\\text{C}, P = 1\\text{ atm}$)** : $V_m \\approx 24{,}0 \\text{ L/mol}$.

### 3. Densité d'un gaz par rapport à l'air
La densité $d$ d'un gaz par rapport à l'air (masse molaire moyenne de l'air $\\approx 29 \\text{ g/mol}$) est donnée par :
$$d = \\frac{M}{29}$$
* Si $d > 1$, le gaz est plus lourd que l'air et stagne au sol (ex : $\\text{CO}_2$, $M=44 \\implies d=1{,}52$).
* Si $d < 1$, le gaz est plus léger que l'air et monte au plafond (ex : $\\text{CH}_4$, $M=16 \\implies d=0{,}55$).`
    }
  ],
  image: {
    url: SVG_C3_C4_MOLE_LIAISONS,
    caption: 'Figure C4 : La mole, le nombre d\'Avogadro et les formules de conversion n = m/M et n = V/Vm'
  },
  conclusion: `La mole est la passerelle de conversion indispensable permettant au chimiste de peser des masses en grammes ou de prélever des volumes en litres pour faire réagir des nombres précis de molécules.`
};

export const LESSON_C5_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c5',
  number: 'Chapitre C5',
  title: 'Réactions chimiques et équation-bilan',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Chimie Générale',
  readTime: '70 min',
  description: 'Transformation chimique, réactifs et produits, conservation des éléments chimiques et des charges, équilibrage stœchiométrique, tableau d\'avancement, détermination du réactif limitant et rendement.',
  introduction: `Une transformation chimique est un processus au cours duquel des espèces chimiques initiales (les réactifs) disparaissent en réorganisant leurs atomes pour donner naissance à de nouvelles espèces chimiques (les produits). L'équation-bilan traduit symboliquement et quantitativement cette transformation en respectant scrupuleusement la loi universelle de conservation de la matière énoncée par Lavoisier.`,
  sections: [
    {
      title: 'I. La transformation chimique et conservation de Lavoisier',
      content: `### 1. Principe de conservation de Lavoisier (1789)
*« Rien ne se perd, rien ne se crée, tout se transforme. »*
Au cours de toute réaction chimique :
1. **Conservation des éléments chimiques** : Chaque type d'atome présent dans les réactifs doit se retrouver en nombre rigoureusement identique dans les produits.
2. **Conservation de la charge électrique totale** : La somme algébrique des charges des réactifs est égale à la somme algébrique des charges des produits.
3. **Conservation de la masse** : La masse totale des réactifs consommés est égale à la masse totale des produits formés : $\\sum m_{\\text{réactifs consommés}} = \\sum m_{\\text{produits formés}}$.`
    },
    {
      title: 'II. Écriture et équilibrage d\'une équation chimique',
      content: `Une équation chimique s'écrit sous la forme conventionnelle :
$$\\alpha \\cdot A + \\beta \\cdot B \\longrightarrow \\gamma \\cdot C + \\delta \\cdot D$$
* $A$ et $B$ sont les **réactifs**.
* $C$ et $D$ sont les **produits**.
* $\\alpha, \\beta, \\gamma, \\delta$ sont les **coefficients stœchiométriques** entiers, les plus petits possibles.
* **Règle absolue d'équilibrage** : On ne modifie JAMAIS les indices à l'intérieur d'une formule chimique (qui définissent l'identité de la molécule) ! On ajuste uniquement les coefficients stœchiométriques placés devant les espèces.

### Exemples d'équilibrage méthodique
1. **Synthèse de l'eau** :
$$2\\,\\text{H}_2 + \\text{O}_2 \\longrightarrow 2\\,\\text{H}_2\\text{O}$$
Vérification : $4$ atomes $\\text{H}$ et $2$ atomes $\\text{O}$ de chaque côté.
2. **Combustion complète du propane $\\text{C}_3\\text{H}_8$** :
$$\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\longrightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$$
3. **Action de l'acide sur le fer** :
$$\\text{Fe} + 2\\,\\text{H}^+ \\longrightarrow \\text{Fe}^{2+} + \\text{H}_2$$`
    },
    {
      title: 'III. Stœchiométrie et tableau d\'avancement de réaction',
      content: `### 1. Notion d'avancement $x$
L'avancement $x$, exprimé en moles (mol), mesure le nombre de fois où la réaction s'est produite selon l'équation stœchiométrique.
Pour l'équation $\\alpha A + \\beta B \\to \\gamma C + \\delta D$ :
À l'instant $t$ :
* $n(A) = n_0(A) - \\alpha \\cdot x$
* $n(B) = n_0(B) - \\beta \\cdot x$
* $n(C) = \\gamma \\cdot x$
* $n(D) = \\delta \\cdot x$

### 2. Réactif limitant et avancement maximal $x_{\\max}$
Le **réactif limitant** est celui qui est totalement épuisé en premier, provoquant l'arrêt de la réaction chimique.
Pour déterminer le réactif limitant, on compare les rapports molaires initiaux :
$$\\frac{n_0(A)}{\\alpha} \\quad \\text{et} \\quad \\frac{n_0(B)}{\\beta}$$
* Si $\\frac{n_0(A)}{\\alpha} < \\frac{n_0(B)}{\\beta}$ : $A$ est le réactif limitant, et $x_{\\max} = \\frac{n_0(A)}{\\alpha}$.
* Si $\\frac{n_0(A)}{\\alpha} > \\frac{n_0(B)}{\\beta}$ : $B$ est le réactif limitant, et $x_{\\max} = \\frac{n_0(B)}{\\beta}$.
* Si $\\frac{n_0(A)}{\\alpha} = \\frac{n_0(B)}{\\beta}$ : les réactifs sont introduits dans les **proportions stœchiométriques exactes** ; ils disparaissent tous les deux simultanément.`
    }
  ],
  image: {
    url: SVG_C3_C4_MOLE_LIAISONS,
    caption: 'Figure C5 : Proportions stœchiométriques, bilan de matière et équilibre d\'une réaction chimique'
  },
  conclusion: `L'équation-bilan et le tableau d'avancement constituent l'outil prédictif central de l'ingénierie chimique pour calculer avec exactitude la quantité de produits obtenus et les réactifs nécessaires.`
};

export const COURSES_2NDE_PC_S_PART3: LessonContent[] = [
  LESSON_P13_SECONDE_S,
  LESSON_P14_SECONDE_S,
  LESSON_P15_SECONDE_S,
  LESSON_C1_SECONDE_S,
  LESSON_C2_SECONDE_S,
  LESSON_C3_SECONDE_S,
  LESSON_C4_SECONDE_S,
  LESSON_C5_SECONDE_S
];
