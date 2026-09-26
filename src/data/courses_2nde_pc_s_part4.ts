import { LessonContent } from './courses';
import {
  SVG_C9_C10_PH_IONS,
  SVG_P4_VOLTMETRE
} from './diagrams_2nde_pc_s';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE SECONDE S (SÉNÉGAL)
// QUATRIÈME PARTIE : CHIMIE DES SOLUTIONS AQUEUSES & CARACTÉRISATION DES IONS (C6 À C10)
// ET ANNEXE OFFICIELLE DU FORMULAIRE ESSENTIEL
// Conforme au programme officiel national de la République du Sénégal
// Leçons intégrales développées sans résumé avec figures vectorielles SVG
// =========================================================================

export const LESSON_C6_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c6',
  number: 'Chapitre C6',
  title: 'Généralités sur les solutions aqueuses : dissolution et dilution',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Solutions Aqueuses',
  readTime: '70 min',
  description: 'Notions de soluté, solvant eau, solution aqueuse, concentration massique Cm, concentration molaire C, relation Cm = C·M, protocole expérimental de dissolution en fiole jaugée, dilution d\'une solution mère (C_mère·V_mère = C_fille·V_fille) et saturation.',
  introduction: `L'eau est le solvant le plus abondant et le plus efficace sur notre planète en raison de la forte polarité de sa molécule et de son pouvoir diélectrique élevé. Une solution aqueuse est un mélange liquide homogène obtenu en dissolvant une espèce chimique (soluté) dans l'eau. Cette leçon développe le calcul des concentrations, la relation de passage et les protocoles opératoires précis de laboratoire.`,
  sections: [
    {
      title: 'I. Définitions fondamentales des solutions',
      content: `### 1. Solvant, soluté et solution
* **Le solvant** : le composant liquide présent en très grande majorité dans le mélange. Lorsque le solvant est l'eau, la solution obtenue est qualifiée de **solution aqueuse**.
* **Le soluté** : l'espèce chimique minoritaire dissoute dans le solvant. Le soluté peut être :
  * Un solide ionique ou moléculaire (ex : $\\text{NaCl}$, glucose, permanganate de potassium $\\text{KMnO}_4$).
  * Un liquide (ex : éthanol, acide sulfurique).
  * Un gaz (ex : chlorure d'hydrogène $\\text{HCl}$, dioxyde de carbone $\\text{CO}_2$).
* **La solution** : le mélange homogène résultant, limpide et monophasique.

### 2. Solubilité et saturation
La **solubilité $s$** est la masse maximale (ou quantité maximale de matière) de soluté que l'on peut dissoudre dans un litre de solvant à une température donnée (en $\\text{g/L}$ ou $\\text{mol/L}$).
* Si $C_m < s$ : la solution est **non saturée** (tout le soluté introduit est dissous).
* Si l'on ajoute du soluté au-delà de sa limite de solubilité, la solution devient **saturée** : le soluté en excès ne se dissout plus et forme un dépôt solide au fond du récipient.`
    },
    {
      title: 'II. Expressions rigoureuses de la concentration',
      content: `### 1. Concentration massique (titre massique) $C_m$
C'est la masse $m$ de soluté dissous par unité de volume total $V$ de solution :
$$C_m = \\frac{m}{V}$$
* $m$ : masse de soluté dissous en grammes (g).
* $V$ : volume total de la solution en litres (L).
* $C_m$ : concentration massique en grammes par litre (g/L ou $\\text{g}\\cdot\\text{L}^{-1}$).

### 2. Concentration molaire (molarité) $C$
C'est la quantité de matière $n$ (nombre de moles) de soluté dissous par unité de volume total $V$ de solution :
$$C = \\frac{n}{V}$$
* $n$ : nombre de moles de soluté en moles (mol).
* $V$ : volume de la solution en litres (L).
* $C$ : concentration molaire en moles par litre (mol/L ou $\\text{mol}\\cdot\\text{L}^{-1}$).

### 3. Relation fondamentale entre $C_m$ et $C$
Sachant que $n = \\frac{m}{M}$, où $M$ est la masse molaire du soluté en g/mol :
$$m = n \\cdot M$$
En remplaçant dans la formule de $C_m$ :
$$C_m = \\frac{m}{V} = \\frac{n \\cdot M}{V} = \\left(\\frac{n}{V}\\right) \\cdot M$$
D'où la relation de conversion universelle :
$$C_m = C \\cdot M \\iff C = \\frac{C_m}{M}$$`
    },
    {
      title: 'III. Protocoles expérimentaux de laboratoire',
      content: `### 1. Préparation d'une solution par dissolution d'un solide
1. **Calcul** : Calculer la masse de soluté nécessaire : $m = C \\cdot M \\cdot V$ (ou $m = C_m \\cdot V$).
2. **Pesée** : Peser précisément la masse $m$ à la balance électronique à l'aide d'une coupelle de pesée propre et d'une spatule.
3. **Dissolution initiale** : Introduire le solide dans un bécher, ajouter un volume partiel d'eau distillée, agiter avec un agitateur en verre jusqu'à dissolution complète.
4. **Transfert quantitatif** : Verser le contenu du bécher dans une **fiole jaugée** de volume $V$ à l'aide d'un entonnoir à liquide. Rincer soigneusement le bécher et l'entonnoir à l'eau distillée et récupérer les eaux de rinçage dans la fiole.
5. **Ajustement** : Remplir la fiole jaugée à l'eau distillée jusqu'aux deux tiers, agiter, puis compléter au compte-gouttes (pipette Pasteur) jusqu'à ce que le bas du **ménisque** affleure exactement le trait de jauge.
6. **Homogénéisation** : Boucher la fiole et la retourner plusieurs fois pour homogénéiser la solution.

### 2. Préparation d'une solution par dilution d'une solution mère
La dilution consiste à ajouter de l'eau distillée à un volume $V_0$ d'une solution concentrée (solution mère de concentration $C_0$) pour obtenir un volume plus grand $V_1$ d'une solution moins concentrée (solution fille de concentration $C_1 < C_0$).
* **Principe fondamental d'invariance** : La quantité de matière de soluté prélevée dans la solution mère se retrouve intégralement dans la solution fille :
$$n_{\\text{prélevé}} = n_{\\text{fille}} \\iff C_0 \\cdot V_0 = C_1 \\cdot V_1$$
* **Facteur de dilution $F$** :
$$F = \\frac{C_0}{C_1} = \\frac{V_1}{V_0} > 1$$
* **Matériel volumétrique obligatoire** : Pipette jaugée munie d'une propipette (pour prélever $V_0$) et fiole jaugée de volume $V_1$.`
    }
  ],
  conclusion: `La rigueur des calculs de concentration et la précision gestuelle lors des dissolutions et dilutions conditionnent l'exactitude de toutes les synthèses et titrages ultérieurs en sciences chimiques.`
};

export const LESSON_C7_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-p7-chimie',
  number: 'Chapitre C7',
  title: 'Solutions aqueuses acides et ion oxonium',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Solutions Aqueuses',
  readTime: '65 min',
  description: 'Définition d\'un acide, l\'ion oxonium H3O+, réaction d\'ionisation dans l\'eau, étude approfondie de l\'acide chlorhydrique, réaction avec les métaux (Fe, Zn, Al), dégagement de dihydrogène et consignes strictes de sécurité.',
  introduction: `Les solutions acides sont caractérisées au laboratoire par leur saveur aigre, leur action sur les colorants végétaux et leur aptitude à attaquer vigoureusement certains métaux usuels en libérant du dihydrogène gazeux. Au niveau moléculaire, un acide se définit par sa capacité à libérer des protons dans l'eau pour former des ions oxonium $\\text{H}_3\\text{O}^+$.`,
  sections: [
    {
      title: 'I. Définition et ionisation des acides dans l\'eau',
      content: `### 1. Définition d'un acide (théorie de Brønsted)
Un acide est une espèce chimique capable de céder au moins un proton $\\text{H}^+$ lors d'une réaction chimique.

### 2. Formation de l'ion oxonium $\\text{H}_3\\text{O}^+$
Le proton $\\text{H}^+$ étant un noyau dépouillé d'électron, il ne peut pas exister à l'état libre dans l'eau : il se fixe instantanément sur un doublet non liant d'une molécule d'eau par liaison de coordinence :
$$\\text{H}^+ + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_3\\text{O}^+ \\quad \\text{(ion oxonium, souvent appelé hydronium)}$$
Une solution aqueuse est acide lorsqu'elle contient un excès d'ions $\\text{H}_3\\text{O}^+$ par rapport aux ions hydroxyde $\\text{OH}^-$ :
$$[\\text{H}_3\\text{O}^+] > [\\text{OH}^-]$$

### 3. Exemple majeur : L'acide chlorhydrique
Le chlorure d'hydrogène $\\text{HCl}$ est un gaz incolore très soluble dans l'eau. Lors de sa dissolution, il réagit totalement avec l'eau selon une réaction d'ionisation complète :
$$\\text{HCl} + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_3\\text{O}^+ + \\text{Cl}^-$$
Une solution d'acide chlorhydrique est donc un mélange équimolaire d'ions oxonium $\\text{H}_3\\text{O}^+$ et d'ions chlorure $\\text{Cl}^-$.`
    },
    {
      title: 'II. Propriétés chimiques et action sur les métaux',
      content: `### 1. Action sur les métaux usuels
L'acide chlorhydrique dilué réagit à froid avec certains métaux réducteurs (le zinc $\\text{Zn}$, le fer $\\text{Fe}$, l'aluminium $\\text{Al}$) avec effervescence due au dégagement de **dihydrogène gazeux $\\text{H}_2$** (qui produit une détonation caractéristique "pop" à la flamme) :
* **Action sur le zinc $\\text{Zn}$** :
$$\\text{Zn} + 2\\,\\text{H}_3\\text{O}^+ \\longrightarrow \\text{Zn}^{2+} + \\text{H}_2\\uparrow + 2\\,\\text{H}_2\\text{O}$$
* **Action sur le fer $\\text{Fe}$** :
$$\\text{Fe} + 2\\,\\text{H}_3\\text{O}^+ \\longrightarrow \\text{Fe}^{2+} + \\text{H}_2\\uparrow + 2\\,\\text{H}_2\\text{O}$$
* **Action sur l'aluminium $\\text{Al}$** :
$$2\\,\\text{Al} + 6\\,\\text{H}_3\\text{O}^+ \\longrightarrow 2\\,\\text{Al}^{3+} + 3\\,\\text{H}_2\\uparrow + 6\\,\\text{H}_2\\text{O}$$
* **Inertie du cuivre** : L'acide chlorhydrique n'attaque pas le cuivre métallique $\\text{Cu}$ car le cuivre est moins réducteur que le dihydrogène.

### 2. Action sur les carbonates (calcaire)
L'acide réagit vivement avec le carbonate de calcium $\\text{CaCO}_3$ avec effervescence de dioxyde de carbone $\\text{CO}_2$ (qui trouble l'eau de chaux) :
$$\\text{CaCO}_3 + 2\\,\\text{H}_3\\text{O}^+ \\longrightarrow \\text{Ca}^{2+} + \\text{CO}_2\\uparrow + 3\\,\\text{H}_2\\text{O}$$`
    },
    {
      title: 'III. Règles vitales de sécurité au laboratoire',
      content: `* Les acides concentrés (acide sulfurique $\\text{H}_2\\text{SO}_4$, acide chlorhydrique fumant, acide nitrique $\\text{HNO}_3$) sont extrêmement corrosifs pour la peau et les yeux.
* **Port obligatoire** : blouse 100% coton, gants en nitrile étanches et lunettes de protection intégrales.
* **RÈGLE FONDAMENTALE DE DILUTION** : **On verse TOUJOURS l'acide dans l'eau, et JAMAIS l'eau dans l'acide !**
* *Justification physique* : La dissolution d'un acide concentré est très exothermique (dégage beaucoup de chaleur). Verser de l'eau dans l'acide concentré provoque une vaporisation instantanée locale de l'eau avec projection violente de gouttelettes d'acide bouillant.`
    }
  ],
  conclusion: `Les solutions acides illustrent le rôle pivot de l'ion oxonium comme agent d'oxydation des métaux et catalyseur dans de nombreuses réactions industrielles.`
};

export const LESSON_C8_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c8',
  number: 'Chapitre C8',
  title: 'Solutions aqueuses basiques et neutralisation',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Solutions Aqueuses',
  readTime: '65 min',
  description: 'Définition d\'une base, ion hydroxyde OH-, étude de l\'hydroxyde de sodium (soude NaOH), dissociation ionique, réaction exothermique de neutralisation acido-basique et applications industrielles.',
  introduction: `Les solutions basiques possèdent des propriétés opposées et complémentaires à celles des acides. Glissantes au toucher (effet savonneux dû à la saponification des lipides cutanés), elles virent les indicateurs colorés et neutralisent les acides en formant de l'eau et un sel. Cette leçon étudie la soude, l'ion hydroxyde et la réaction de neutralisation.`,
  sections: [
    {
      title: 'I. Définition et ionisation des bases dans l\'eau',
      content: `### 1. Définition d'une base (théorie de Brønsted)
Une base est une espèce chimique capable de capter au moins un proton $\\text{H}^+$ lors d'une réaction chimique.
Une solution aqueuse est dite **basique** lorsqu'elle contient une concentration en **ions hydroxyde $\\text{OH}^-$** supérieure à celle des ions oxonium $\\text{H}_3\\text{O}^+$ :
$$[\\text{OH}^-] > [\\text{H}_3\\text{O}^+]$$

### 2. L'hydroxyde de sodium (la soude)
La soude pure $\\text{NaOH}$ est un solide blanc ionique, déliquescent (absorbe l'humidité de l'air) et avide de dioxyde de carbone atmosphérique (se carbonate en $\\text{Na}_2\\text{CO}_3$).
Dans l'eau, la soude se dissocie totalement avec un fort dégagement thermique :
$$\\text{NaOH}_{(\\text{s})} \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+_{(\\text{aq})} + \\text{OH}^-_{(\\text{aq})}$$
Les ions sodium $\\text{Na}^+$ sont des ions spectateurs (inactifs) ; les propriétés basiques sont assurées par les ions hydroxyde $\\text{OH}^-$.

### 3. Autres exemples de bases usuelles
* L'hydroxyde de potassium (potasse) : $\\text{KOH} \\to \\text{K}^+ + \\text{OH}^-$.
* L'hydroxyde de calcium (chaux éteinte) : $\\text{Ca(OH)}_2 \\to \\text{Ca}^{2+} + 2\\,\\text{OH}^-$.
* L'ammoniac en solution (ammoniaque) : $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$.`
    },
    {
      title: 'II. La réaction de neutralisation acido-basique',
      content: `### 1. Principe de la réaction de neutralisation
Lorsqu'on mélange une solution acide (contenant des ions $\\text{H}_3\\text{O}^+$) et une solution basique (contenant des ions $\\text{OH}^-$), il se produit une réaction chimique rapide, quasi-instantanée et fortement exothermique :
$$\\text{H}_3\\text{O}^+ + \\text{OH}^- \\longrightarrow 2\\,\\text{H}_2\\text{O}$$
Les ions $\\text{H}_3\\text{O}^+$ et $\\text{OH}^-$ se neutralisent mutuellement pour reformer des molécules d'eau neutres.

### 2. Équation complète (acide chlorhydrique + soude)
$$(\\text{H}_3\\text{O}^+ + \\text{Cl}^-) + (\\text{Na}^+ + \\text{OH}^-) \\longrightarrow (\\text{Na}^+ + \\text{Cl}^-) + 2\\,\\text{H}_2\\text{O}$$
À l'équivalence acido-basique exacte (lorsque $n(\\text{H}_3\\text{O}^+) = n(\\text{OH}^-)$), la solution obtenue est une solution aqueuse de chlorure de sodium $\\text{NaCl}$ parfaitement neutre de $\\text{pH} = 7$ à $25^\\circ\\text{C}$. Par évaporation de l'eau, on recueille des cristaux blancs de sel de cuisine $\\text{NaCl}$.`
    },
    {
      title: 'III. Applications industrielles et domestiques',
      content: `* **Fabrication des savons** : hydrolyse basique des triglycérides (huiles d'arachide, palme) par la soude concentrée (procédé de saponification).
* **Débouchage des canalisations** : la soude caustique dissout les matières organiques, graisses et cheveux obstruant les tuyaux.
* **Traitement des eaux et effluents industriels** : neutralisation des rejets acides miniers ou industriels avant évacuation dans la nature.`
    }
  ],
  conclusion: `La réaction de neutralisation $\\text{H}_3\\text{O}^+ + \\text{OH}^- \\to 2\\,\\text{H}_2\\text{O}$ est la réaction reine de la volumétrie acido-basique, permettant de déterminer la concentration inconnue d'une solution par titrage.`
};

export const LESSON_C9_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c9',
  number: 'Chapitre C9',
  title: 'Notion de pH et indicateurs colorés',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Solutions Aqueuses',
  readTime: '70 min',
  description: 'Définition logarithmique du pH = -log[H3O+], autoprotolyse et produit ionique de l\'eau Ke, échelle de pH (0 à 14), mesure par papier pH et pH-mètre étalonné, indicateurs colorés (BBT, hélianthine, phénolphtaléine) et effet de la dilution.',
  introduction: `L'acidité ou la basicité d'une solution aqueuse dépend directement de la concentration molaire en ions oxonium $[\\text{H}_3\\text{O}^+]$, qui peut varier de plusieurs ordres de grandeur (de $1\\text{ mol/L}$ à $10^{-14}\\text{ mol/L}$). Pour manier des nombres simples, le biochimiste danois Sørensen a introduit en 1909 l'échelle logarithmique de pH (potentiel Hydrogène).`,
  sections: [
    {
      title: 'I. Définition mathématique du pH et autoprotolyse de l\'eau',
      content: `### 1. Définition du pH
Pour les solutions aqueuses diluées (concentration inférieure à $0{,}1\\text{ mol/L}$), le **pH** est défini par la fonction logarithme décimal :
$$\\text{pH} = - \\log_{10}[\\text{H}_3\\text{O}^+] \\iff [\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}}$$
* $[\\text{H}_3\\text{O}^+]$ est obligatoirement exprimée en **moles par litre (mol/L)**.
* Le pH est une grandeur scalaire **sans dimension (sans unité)**.

### 2. Le produit ionique de l'eau $K_e$
L'eau pure subit une réaction d'auto-ionisation spontanée très limitée appelée autoprotolyse :
$$2\\,\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{OH}^-$$
Le produit des concentrations des ions oxonium et hydroxyde est une constante à température fixée, appelée **produit ionique de l'eau**, noté $K_e$ :
$$K_e = [\\text{H}_3\\text{O}^+] \\cdot [\\text{OH}^-] = 10^{-14} \\quad \\text{à } 25^\\circ\\text{C}$$
En prenant le cologarithme ($-\\log$) :
$$\\text{pH} + \\text{pOH} = 14 \\quad \\text{à } 25^\\circ\\text{C}$$`
    },
    {
      title: 'II. L\'Échelle de pH de 0 à 14 (à 25°C)',
      content: `À la température standard de $25^\\circ\\text{C}$ :
* **Solution neutre** :
$$[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = \\sqrt{10^{-14}} = 10^{-7} \\text{ mol/L} \\implies \\mathbf{\\text{pH} = 7}$$
* **Solution acide** :
$$[\\text{H}_3\\text{O}^+] > 10^{-7} \\text{ mol/L} \\implies \\mathbf{0 \\le \\text{pH} < 7}$$
Plus le pH est bas, plus la solution est concentrée en ions $\\text{H}_3\\text{O}^+$ et plus son acidité est forte.
* **Solution basique** :
$$[\\text{H}_3\\text{O}^+] < 10^{-7} \\text{ mol/L} \\implies [\\text{OH}^-] > 10^{-7} \\text{ mol/L} \\implies \\mathbf{7 < \\text{pH} \\le 14}$$
Plus le pH est élevé, plus la solution est basique.`
    },
    {
      title: 'III. Méthodes de mesure du pH et indicateurs colorés',
      content: `### 1. Appareils de mesure
* **Le papier pH** : bandelette imprégnée d'un mélange d'indicateurs dont la couleur change en fonction de la solution. Donne une estimation rapide à une unité de pH près en comparant avec un nuancier étalon.
* **Le pH-mètre électronique** : instrument de précision composé d'une sonde de verre et d'un millivoltmètre. Il doit être préalablement étalonné avec au moins deux solutions tampons certifiées (généralement $\\text{pH} = 7{,}00$ et $\\text{pH} = 4{,}00$ ou $10{,}00$). Il fournit une précision de $\\pm 0{,}01$ unité.

### 2. Les indicateurs colorés acido-basiques
Un indicateur coloré est un couple acide/base faible dont la forme acide conjuguée et la forme basique possèdent des teintes distinctes. L'intervalle de pH où les deux formes coexistent s'appelle la **zone de virage** :
| Indicateur coloré | Couleur en milieu acide | Zone de virage | Couleur en milieu basique |
| :--- | :--- | :--- | :--- |
| **Bleu de bromothymol (BBT)** | Jaune | $6{,}0 - 7{,}6$ (Teinte sensible verte) | Bleu |
| **Hélianthine (Méthylorange)** | Rouge | $3{,}1 - 4{,}4$ (Orangé) | Jaune |
| **Phénolphtaléine** | Incolore | $8{,}2 - 10{,}0$ | Rose fuchsia |`
    },
    {
      title: 'IV. Effet de la dilution sur le pH d\'une solution',
      content: `* **Lorsqu'on dilue une solution acide** : la concentration en $[\\text{H}_3\\text{O}^+]$ diminue, l'acidité faiblit et **le pH augmente en tendant vers 7 (la neutralité)** sans jamais dépasser 7.
* **Lorsqu'on dilue une solution basique** : la concentration en $[\\text{OH}^-]$ diminue, la basicité faiblit et **le pH diminue en tendant vers 7** sans jamais descendre en dessous de 7.`
    }
  ],
  image: {
    url: SVG_C9_C10_PH_IONS,
    caption: 'Figure C9 : Échelle colorimétrique de pH de 0 à 14 et zones de virage des indicateurs'
  },
  conclusion: `La maîtrise du pH est vitale pour la biologie cellulaire (le sang humain est tamponné à $\\text{pH} = 7{,}40 \\pm 0{,}05$), l'agronomie (acidité des sols de Casamance ou du bassin arachidier) et le traitement des eaux potables.`
};

export const LESSON_C10_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-c10',
  number: 'Chapitre C10',
  title: 'Caractérisation et identification de quelques ions',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Chimie — Solutions Aqueuses',
  readTime: '65 min',
  description: 'Principe d\'analyse qualitative, réactions de précipitation spécifiques, tests d\'identification des anions (chlorure Cl-, sulfate SO4(2-)) et des cations métalliques (Cu2+, Fe2+, Fe3+, Zn2+, Al3+).',
  introduction: `L'analyse chimique qualitative a pour but de détecter et d'identifier la nature des espèces chimiques présentes dans une solution inconnue. La méthode de choix au lycée repose sur des réactions de précipitation spécifiques : l'introduction d'un réactif sélectif entraîne la formation instantanée d'un composé solide insoluble (un précipité) ayant une couleur et des propriétés physico-chimiques distinctives.`,
  sections: [
    {
      title: 'I. Principe de la détection par précipitation',
      content: `Un précipité est un solide insoluble qui se forme et décante spontanément au sein d'une phase liquide à la suite d'une réaction chimique entre deux solutions électrolytiques.
La réaction d'identification s'écrit sous forme ionique nette en omettant les ions spectateurs.

*Règle d'or de rigueur analytique* : Tout test d'identification doit être réalisé dans un tube à essai propre, sur un faible volume d'échantillon ($2$ à $3\\text{ mL}$), en introduisant le réactif goutte à goutte et en comparant systématiquement avec un tube témoin rempli d'eau distillée.`
    },
    {
      title: 'II. Identification des anions usuels',
      content: `### 1. Test de l'ion chlorure $\\text{Cl}^-$
* **Réactif** : Solution de nitrate d'argent $(\\text{Ag}^+ + \\text{NO}_3^-)$.
* **Observation** : Formation immédiate d'un **précipité blanc de chlorure d'argent $\\text{AgCl}$ qui noircit lentement à la lumière**.
* **Équation-bilan** :
$$\\text{Ag}^+ + \\text{Cl}^- \\longrightarrow \\text{AgCl}_{(\\text{s})}\\downarrow$$

### 2. Test de l'ion sulfate $\\text{SO}_4^{2-}$
* **Réactif** : Solution de chlorure de baryum $(\\text{Ba}^{2+} + 2\\,\\text{Cl}^-)$.
* **Observation** : Formation d'un **précipité blanc lourd et cristallin de sulfate de baryum $\\text{BaSO}_4$**, totalement insoluble dans les acides forts dilués.
* **Équation-bilan** :
$$\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\longrightarrow \\text{BaSO}_{4(\\text{s})}\\downarrow$$`
    },
    {
      title: 'III. Identification des cations métalliques',
      content: `On utilise comme réactif commun universel une solution basique d'hydroxyde de sodium (soude $\\text{Na}^+ + \\text{OH}^-$) ajoutée goutte à goutte :

### 1. Ion cuivre(II) $\\text{Cu}^{2+}$
* La solution initiale est généralement bleue.
* **Observation** : Formation d'un **précipité bleu caractéristique d'hydroxyde de cuivre(II)**.
* **Équation** :
$$\\text{Cu}^{2+} + 2\\,\\text{OH}^- \\longrightarrow \\text{Cu(OH)}_{2(\\text{s})}\\downarrow$$

### 2. Ion fer(II) $\\text{Fe}^{2+}$
* La solution initiale est vert pâle.
* **Observation** : Formation d'un **précipité vert olive d'hydroxyde de fer(II)**, qui s'oxyde rapidement au contact de l'air en devenant brun-rouille en surface.
* **Équation** :
$$\\text{Fe}^{2+} + 2\\,\\text{OH}^- \\longrightarrow \\text{Fe(OH)}_{2(\\text{s})}\\downarrow$$

### 3. Ion fer(III) $\\text{Fe}^{3+}$
* La solution initiale est jaune-orangée.
* **Observation** : Formation instantanée d'un **précipité rouille (brun-rougeâtre) d'hydroxyde de fer(III)**.
* **Équation** :
$$\\text{Fe}^{3+} + 3\\,\\text{OH}^- \\longrightarrow \\text{Fe(OH)}_{3(\\text{s})}\\downarrow$$

### 4. Ion zinc $\\text{Zn}^{2+}$ et Ion aluminium $\\text{Al}^{3+}$
* **Observation** : Donnent tous deux un **précipité blanc gélatineux** d'hydroxyde avec la soude :
$$\\text{Zn}^{2+} + 2\\,\\text{OH}^- \\longrightarrow \\text{Zn(OH)}_{2(\\text{s})}\\downarrow$$
$$\\text{Al}^{3+} + 3\\,\\text{OH}^- \\longrightarrow \\text{Al(OH)}_{3(\\text{s})}\\downarrow$$
* Propriété d'amphotérie : En ajoutant un excès de soude concentrée, ces précipités blancs se dissolvent pour redonner une solution limpide (formation d'ions complexes tétrahydroxozincate $[\\text{Zn(OH)}_4]^{2-}$ et tétrahydroxoaluminate $[\\text{Al(OH)}_4]^-$).`
    }
  ],
  image: {
    url: SVG_C9_C10_PH_IONS,
    caption: 'Figure C10 : Réactions de précipitation et couleurs des tests d\'identification des ions'
  },
  conclusion: `Ces réactions de précipitation spécifiques constituent l'arsenal classique de l'analyse chimique minérale pour vérifier la potabilité de l'eau, doser la pollution des sols ou contrôler les solutions médicamenteuses.`
};

export const LESSON_ANNEXE_PC_SECONDE_S: LessonContent = {
  id: 'pc-2nde-s-annexe-formulaire',
  number: 'Annexe Officielle',
  title: 'Formulaire essentiel de Physique-Chimie Seconde S',
  subject: 'Physique-Chimie',
  classLevel: 'Seconde S',
  module: 'Annexe & Révision Générale',
  readTime: '30 min',
  description: 'Recueil complet et officiel des formules mathématiques, lois physiques, unités SI et constantes universelles au programme de Seconde S au Sénégal.',
  introduction: `Ce formulaire essentiel rassemble toutes les relations mathématiques et physiques exigées aux devoirs et examens de la classe de Seconde S au Sénégal, structuré selon les 4 grands domaines du programme.`,
  sections: [
    {
      title: 'I. Domaine Électricité et Électronique',
      content: `* **Intensité et charge** : $I = \\frac{\\Delta Q}{\\Delta t}$ (A), $Q = I \\cdot t = N \\cdot e$ avec $e = 1{,}602 \\times 10^{-19} \\text{ C}$.
* **Loi des nœuds** : $\\sum I_{\\text{entrants}} = \\sum I_{\\text{sortants}}$.
* **Tension et potentiel** : $U_{AB} = V_A - V_B$ (V) ; relation d'additivité en série : $U_{AC} = U_{AB} + U_{BC}$.
* **Loi d'Ohm (conducteur ohmique)** : $U = R \\cdot I$.
* **Résistance d'un fil** : $R = \\rho \\cdot \\frac{L}{S}$ (avec $\\rho$ en $\\Omega\\cdot\\text{m}$, $L$ en m, $S$ en $\\text{m}^2$).
* **Associations de résistances** :
  * En série : $R_{\\text{eq}} = R_1 + R_2 + \\dots + R_n$.
  * En dérivation : $\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\implies R_{\\text{eq}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$.
* **Puissance et effet Joule** : $P = U \\cdot I = R \\cdot I^2 = \\frac{U^2}{R}$ (W) ; Énergie : $E = P \\cdot t$ (J).
* **Dipôles actifs (générateur réel)** : $U = E - r \\cdot I$ ; Loi de Pouillet : $I = \\frac{E}{R + r}$.
* **Amplificateur opérationnel idéal** :
  * Montage non inverseur : $G = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1} > 0$.
  * Montage inverseur : $G = \\frac{U_s}{U_e} = -\\frac{R_2}{R_1} < 0$.`
    },
    {
      title: 'II. Domaine Mécanique et Statique',
      content: `* **Vitesse moyenne** : $v_m = \\frac{d}{\\Delta t}$ ($1 \\text{ m/s} = 3{,}6 \\text{ km/h}$).
* **Loi horaire du MRU** : $x(t) = v \\cdot t + x_0$.
* **Force élastique du ressort (loi de Hooke)** : $T = k \\cdot |\\Delta l| = k \\cdot |l - l_0|$ (en N).
* **Relation poids-masse** : $\\vec{P} = m \\cdot \\vec{g} \\iff P = m \\cdot g$ (avec $g \\approx 9{,}8 \\text{ N/kg}$ au Sénégal).
* **Loi universelle de la gravitation** : $F = G \\cdot \\frac{m_1 \\cdot m_2}{d^2}$ ($G = 6{,}67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$).
* **Équilibre d'un solide soumis à des forces non parallèles** :
  $$\\sum \\vec{F}_{\\text{ext}} = \\vec{0} \\iff \\begin{cases} \\sum F_x = 0 \\\\ \\sum F_y = 0 \\end{cases}$$
* **Moment d'une force par rapport à un axe $(\\Delta)$** : $\\mathcal{M}_{\\Delta}(\\vec{F}) = \\pm F \\cdot d$ (en $\\text{N}\\cdot\\text{m}$).
* **Théorème des moments** : $\\sum \\mathcal{M}_{\\Delta}(\\vec{F}_{\\text{ext}}) = 0$.
* **Équilibre du levier** : $F_1 \\cdot d_1 = F_2 \\cdot d_2$.`
    },
    {
      title: 'III. Domaine Optique Géométrique',
      content: `* **Vitesse de la lumière dans le vide** : $c \\approx 3{,}00 \\times 10^8 \\text{ m/s}$.
* **Indice de réfraction absolu** : $n = \\frac{c}{v} \\ge 1$.
* **Loi de Snell-Descartes pour la réflexion** : $r = i$.
* **Loi de Snell-Descartes pour la réfraction** : $n_1 \\cdot \\sin(i_1) = n_2 \\cdot \\sin(i_2)$.
* **Angle limite de réflexion totale (si $n_1 > n_2$)** : $\\sin(\\lambda) = \\frac{n_2}{n_1}$.`
    },
    {
      title: 'IV. Domaine Chimie Générale et Solutions Aqueuses',
      content: `* **Quantité de matière solide / liquide** : $n = \\frac{m}{M}$ (mol).
* **Nombre d'entités** : $N = n \\cdot N_A$ ($N_A = 6{,}022 \\times 10^{23} \\text{ mol}^{-1}$).
* **Quantité de matière d'un gaz** : $n = \\frac{V}{V_m}$ ($V_m = 22{,}4 \\text{ L/mol}$ en CNTP).
* **Densité d'un gaz** : $d = \\frac{M}{29}$.
* **Concentration massique** : $C_m = \\frac{m}{V}$ (g/L).
* **Concentration molaire** : $C = \\frac{n}{V}$ (mol/L).
* **Relation de passage** : $C_m = C \\cdot M \\iff C = \\frac{C_m}{M}$.
* **Loi de dilution** : $C_{\\text{mère}} \\cdot V_{\\text{mère}} = C_{\\text{fille}} \\cdot V_{\\text{fille}}$ ; Facteur de dilution : $F = \\frac{C_{\\text{mère}}}{C_{\\text{fille}}} = \\frac{V_{\\text{fille}}}{V_{\\text{mère}}}$.
* **Relation du pH** : $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] \\iff [\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}}$.
* **Produit ionique de l'eau (à 25°C)** : $K_e = [\\text{H}_3\\text{O}^+] \\cdot [\\text{OH}^-] = 10^{-14} \\implies \\text{pH} + \\text{pOH} = 14$.
* **Neutralisation acido-basique** : $\\text{H}_3\\text{O}^+ + \\text{OH}^- \\longrightarrow 2\\,\\text{H}_2\\text{O}$.`
    }
  ],
  conclusion: `Ce formulaire essentiel résume avec rigueur l'ensemble des outils quantitatifs indispensables à la réussite de l'élève en Seconde Scientifique (S) au Sénégal.`
};

export const COURSES_2NDE_PC_S_PART4: LessonContent[] = [
  LESSON_C6_SECONDE_S,
  LESSON_C7_SECONDE_S,
  LESSON_C8_SECONDE_S,
  LESSON_C9_SECONDE_S,
  LESSON_C10_SECONDE_S,
  LESSON_ANNEXE_PC_SECONDE_S
];
