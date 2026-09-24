import { LessonContent } from './courses';
import {
  SVG_PC3_FIG4_EAU,
  SVG_PC3_FIG5_ALCANES
} from './diagrams_3eme_pc';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE 3ÈME — DEUXIÈME PARTIE : CHIMIE (LEÇONS 4-5 & 6)
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (BFEM Sénégal)
// Leçons approfondies et détaillées avec protocoles expérimentaux obligatoires et figures
// =========================================================================

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// LEÇON 4 : ANALYSE DE L'EAU PAR ÉLECTROLYSE (CHIMIE)
// -------------------------------------------------------------------------
export const LESSON_4_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-4',
  number: 'Leçon 4 (Chimie)',
  title: 'Analyse de l\'eau par électrolyse : voltmètre de Hofmann, identification des gaz et rapport volumique',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Pendant des siècles, l'eau a été considérée par les savants de l'Antiquité comme un élément fondamental indivisible, au même titre que la terre, l'air et le feu. C'est à la fin du XVIIIe siècle qu'Antoine Lavoisier démontre de manière éclatante que l'eau est en réalité un corps composé d'hydrogène et d'oxygène. En classe de 3ème, nous établissons expérimentalement la décomposition de l'eau par électrolyse dans un voltmètre de Hofmann, permettant de recueillir deux volumes de dihydrogène à la cathode pour un volume de dioxygène à l'anode.",
  fullText: `Leçon 4 : Analyse de l'eau par électrolyse : voltmètre de Hofmann, identification des gaz et rapport volumique

Introduction :
L'analyse de l'eau est une réaction de décomposition chimique qui prouve que l'eau n'est pas un corps simple mais un corps composé formé d'hydrogène et d'oxygène dans un rapport volumique rigoureux de deux pour un (2:1).

I. Principe de l'électrolyse de l'eau
1. Définition :
L'électrolyse est une décomposition chimique provoquée par le passage d'un courant électrique continu dans une solution conductrice appelée électrolyte.
L'eau distillée pure étant un mauvais conducteur du courant, on lui ajoute une petite quantité d'acide sulfurique (H₂SO₄) ou d'hydroxyde de sodium (soude NaOH). Ce soluté acidifie ou alcalinise l'eau, augmentant sa conductivité ionique sans participer à la réaction de décomposition.

2. Dispositif expérimental : le Voltmètre de Hofmann :
Le voltmètre de Hofmann comprend trois tubes verticaux en verre reliés à leur base :
- Deux tubes gradués latéraux fermés à leur sommet par des robinets d'arrêt étanches et munis chacun à leur base d'une électrode inattaquable en platine.
- Un tube central surmonté d'un entonnoir servant au remplissage de la solution d'eau acidifiée.
- L'électrode reliée à la borne positive (+) du générateur de courant continu est l'ANODE.
- L'électrode reliée à la borne négative (-) du générateur de courant continu est la CATHODE.

3. Déroulement et observations expérimentales :
Dès que l'on applique une tension continue d'environ 6 à 12 V aux bornes des électrodes :
- Des chapelets continus de bulles gazeuses se dégagent simultanément sur les deux électrodes de platine.
- Les gaz montent dans les deux tubes gradués et s'accumulent au sommet en refoulant le liquide vers le réservoir central.
- À la CATHODE (-) : le volume de gaz recueilli est exactement le DOUBLE du volume recueilli à l'ANODE (+) :
  V(Cathode) = 2 × V(Anode).

4. Identification et caractérisation des deux gaz formés :
- Gaz cathodique (-) : On ouvre avec précaution le robinet du tube relié au pôle négatif et on approche une allumette enflammée de l'orifice. Le gaz s'enflamme avec une petite détonation sèche caractéristique (« pop ») : ce gaz est du DIHYDROGÈNE (H₂).
- Gaz anodique (+) : On ouvre le robinet du tube relié au pôle positif et on présente une bûchette de bois portant un point incandescent (allumette qui rougeoie). La flamme se rallume vivement : ce gaz est du DIOXYGÈNE (O₂).

5. Équation bilan de la réaction d'électrolyse :
2 H₂O (liquide) ➔ 2 H₂ (gaz) + O₂ (gaz)
Deux molécules d'eau se décomposent pour fournir deux molécules de dihydrogène et une molécule de dioxygène.

II. Composition massique et volumique de l'eau
1. Composition en volume :
Le rapport des volumes gazeux formés est de 2 volumes de H₂ pour 1 volume de O₂ (soit 66,7 % de H₂ et 33,3 % de O₂).
2. Composition en masse :
- Masse molaire : M(H) = 1 g/mol ; M(O) = 16 g/mol ; M(H₂O) = 18 g/mol.
- Pourcentage en masse d'hydrogène : %H = (2 / 18) × 100 ≈ 11,11 %.
- Pourcentage en masse d'oxygène : %O = (16 / 18) × 100 ≈ 88,89 %.`,
  sections: [
    {
      title: '1. Protocole expérimental obligatoire : Électrolyse dans le Voltmètre de Hofmann',
      image: {
        url: SVG_PC3_FIG4_EAU,
        alt: 'Figure 4A : Électrolyse de l\'eau dans le voltmètre de Hofmann',
        caption:
          'Figure 4A : Voltmètre de Hofmann pour l\'analyse électrolytique de l\'eau (2 volumes de H₂ à la cathode négative contre 1 volume de O₂ à l\'anode positive).'
      },
      subsections: [
        {
          subtitle: 'Protocole opératoire étape par étape',
          content: [
            "• Matériel requis : Voltmètre de Hofmann à électrodes de platine, générateur continu 12 V, fils de connexion, eau distillée, acide sulfurique dilué (ou pastilles de soude), allumettes et bûchette de bois.",
            "• Remplissage : Verser l'eau acidifiée par l'entonnoir central en maintenant les deux robinets ouverts pour purger tout l'air présent. Fermer les robinets dès que le liquide affleure.",
            "• Connexion : Relier l'électrode de gauche au pôle (-) (Cathode) et l'électrode de droite au pôle (+) (Anode).",
            "• Mise sous tension : Allumer le générateur 12 V continu.",
            "• Constat volumique : Lorsque 40 mL de gaz sont recueillis à la cathode, exactement 20 mL de gaz sont présents à l'anode.",
            "• Tests de validation au BFEM : Détonation sèche (« pop ») pour H₂ à la cathode ; réactivation de la bûchette incandescente pour O₂ à l'anode."
          ]
        }
      ]
    },
    {
      title: '2. Proportions massiques et volumiques de l\'eau',
      subsections: [
        {
          subtitle: 'Calculs de masse et pourcentages dans la molécule H₂O',
          content: [
            "• Masse molaire atomique : M(H) = 1 g/mol ; M(O) = 16 g/mol.",
            "• Masse molaire de l'eau : M(H₂O) = (2 × 1) + 16 = 18 g/mol.",
            "• Pourcentage en masse d'hydrogène : %H = (2 / 18) × 100 = 11,11 %.",
            "• Pourcentage en masse d'oxygène : %O = (16 / 18) × 100 = 88,89 %.",
            "• Pourcentage en volume : 66,7 % de H₂ pour 33,3 % de O₂ (rapport 2:1)."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Électrolyse complète d\'une masse d\'eau acidifiée',
          content: [
            "Énoncé : Lors de l'électrolyse d'une solution d'eau acidifiée, on recueille 60 mL de dihydrogène à la cathode. Le volume molaire vaut Vm = 24 L/mol.",
            "1. Déterminer le volume de dioxygène recueilli à l'anode.",
            "2. Calculer la quantité de matière n(H₂) de dihydrogène obtenue.",
            "3. En déduire la masse m d'eau décomposée.",
            "Corrigé :",
            "1. V(O₂) = V(H₂) / 2 = 60 mL / 2 = 30 mL.",
            "2. n(H₂) = V(H₂) / Vm = 0,060 L / 24 L/mol = 0,0025 mol.",
            "3. D'après l'équation 2 H₂O ➔ 2 H₂ + O₂, n(H₂O) = n(H₂) = 0,0025 mol. m(H₂O) = n × M = 0,0025 × 18 = 0,045 g = 45 mg."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Analyse de l\'eau par électrolyse',
    root: 'Électrolyse de l\'eau',
    branches: [
      {
        name: 'CATHODE (-)',
        subtitle: 'Pôle négatif',
        items: ['Dégagement de dihydrogène H₂', 'Volume recueilli = 2 × V(O₂)', 'Test : détonation sèche (« pop »)']
      },
      {
        name: 'ANODE (+)',
        subtitle: 'Pôle positif',
        items: ['Dégagement de dioxygène O₂', 'Volume recueilli = V(O₂)', 'Test : rallume une bûchette incandescente']
      },
      {
        name: 'ÉQUATION BILAN',
        subtitle: 'Décomposition',
        items: ['2 H₂O ➔ 2 H₂ + O₂', '2 moles d\'eau donnent 2 moles de H₂ et 1 mole de O₂', 'Rapport volumique constant 2:1']
      }
    ]
  },
  conclusion:
    "L'électrolyse de l'eau dans le voltmètre de Hofmann démontre de façon indiscutable que deux volumes de dihydrogène sont combinés à un volume de dioxygène pour constituer l'eau liquide (H₂O)."
};

// -------------------------------------------------------------------------
// LEÇON 5 : SYNTHÈSE DE L'EAU (CHIMIE)
// -------------------------------------------------------------------------
export const LESSON_5_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-5',
  number: 'Leçon 5 (Chimie)',
  title: 'Synthèse de l\'eau : eudiomètre de Volta, étincelle électrique et calculs des mélanges avec excès',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Si l'analyse consiste à décomposer l'eau en ses constituants élémentaires, la synthèse est l'opération chimique inverse : fabriquer de l'eau liquide en faisant réagir du dihydrogène avec du dioxygène. Réalisée pour la première fois par Lavoisier puis perfectionnée par Volta grâce à son eudiomètre à étincelle électrique, cette réaction spectaculaire confirme rigoureusement les proportions stœchiométriques 2 volumes de H₂ pour 1 volume de O₂ et permet d'étudier les mélanges gazeux renfermant un réactif en excès.",
  fullText: `Leçon 5 : Synthèse de l'eau : eudiomètre de Volta, étincelle électrique et calculs des mélanges avec excès

Introduction :
La synthèse de l'eau est la réaction chimique exothermique par laquelle le dihydrogène et le dioxygène se combinent sous l'effet d'une étincelle électrique pour former de l'eau liquide.

I. Dispositif expérimental : l'eudiomètre de Volta
1. Description de l'eudiomètre :
L'eudiomètre est un tube cylindrique en verre très épais et résistant, fermé à son extrémité supérieure et gradué en millilitres (mL).
Près du sommet fermé, deux tiges métalliques conductrices en platine traversent la paroi en verre en se faisant face à une distance de 1 à 2 mm (électrodes d'étincelage).
Le tube est initialement rempli d'eau (ou de mercure) et retourné verticalement sur une cuve à eau.

2. Protocole expérimental et déclenchement de la réaction :
- On injecte dans l'eudiomètre des volumes connus de dihydrogène (H₂) et de dioxygène (O₂) au moyen d'une éprouvette graduée.
- On raccorde les deux électrodes de platine à une bobine d'induction ou à un allume-gaz piézoélectrique.
- On fait jaillir une étincelle électrique au sein du mélange gazeux.

II. Étude des différents types de mélanges
1. Cas 1 : Mélange dans les proportions stœchiométriques (rapport 2:1) :
- Exemple : Introduction de 40 mL de H₂ et 20 mL de O₂ (Volume total initial = 60 mL).
- Dès le jaillissement de l'étincelle :
  * Une vive détonation retentit, accompagnée d'un éclair lumineux bref.
  * Une fine buée liquide (gouttelettes d'eau) apparaît instantanément sur les parois intérieures refroidies de l'eudiomètre.
  * L'eau de la cuve monte brutalement et vient remplir la TOTALITÉ du tube.
  * Le volume de gaz restant au sommet est STRICTEMENT NUL (0 mL).
  * Conclusion : Tous les réactifs ont entièrement réagi.

2. Cas 2 : Mélange avec excès de dihydrogène (H₂) :
- Exemple : Introduction de 50 mL de H₂ et 20 mL de O₂ (Volume initial = 70 mL).
- Les 20 mL de O₂ nécessitent exactement 2 × 20 mL = 40 mL de H₂ pour réagir.
- Après l'étincelle, l'eau monte dans le tube mais s'arrête en laissant un volume résiduel de gaz de 10 mL au sommet (50 mL - 40 mL = 10 mL).
- Le test à la flamme sur ce gaz résiduel produit une petite détonation (« pop ») : c'est du dihydrogène non consommé qui était en excès.

3. Cas 3 : Mélange avec excès de dioxygène (O₂) :
- Exemple : Introduction de 40 mL de H₂ et 30 mL de O₂ (Volume initial = 70 mL).
- Les 40 mL de H₂ ne peuvent réagir qu'avec 40 / 2 = 20 mL de O₂.
- Après l'étincelle, il subsiste 10 mL de gaz résiduel au sommet (30 mL - 20 mL = 10 mL).
- Le test de la bûchette incandescente confirme qu'il s'agit de dioxygène O₂ non consommé.

III. Équation bilan et conclusion de la synthèse
2 H₂ (gaz) + O₂ (gaz) ➔ 2 H₂O (liquide) + Dégagement de chaleur
La synthèse de l'eau confirme avec une précision absolue la composition moléculaire de l'eau : deux atomes d'hydrogène pour un atome d'oxygène (H₂O).`,
  sections: [
    {
      title: '1. Protocole expérimental obligatoire : Synthèse eudiométrique de l\'eau',
      image: {
        url: SVG_PC3_FIG4_EAU,
        alt: 'Figure 4B : Synthèse de l\'eau dans l\'eudiomètre de Volta',
        caption:
          'Figure 4B : Synthèse de l\'eau dans l\'eudiomètre de Volta par étincelle électrique (condensation de buée liquide et montée de l\'eau dans le tube).'
      },
      subsections: [
        {
          subtitle: 'Protocole opératoire et étude de l\'excès',
          content: [
            "• Matériel : Eudiomètre renforcé de Volta gradué, allumeur piézoélectrique ou bobine d'induction, cuve à eau, éprouvettes graduées de prélèvement de H₂ et O₂.",
            "• Expérience 1 (Proportions parfaites) : 40 mL de H₂ + 20 mL de O₂. Après étincelle, le liquide monte jusqu'au sommet du tube. Volume gazeux restant = 0 mL.",
            "• Expérience 2 (Excès de H₂) : 60 mL de H₂ + 20 mL de O₂. Après étincelle, il reste 20 mL de gaz. Le test de l'allumette donne un « pop », prouvant l'excès de H₂.",
            "• Règle d'or du BFEM : 2 volumes de H₂ s'associent toujours avec 1 volume de O₂. Le réactif en surnombre demeure intact à la fin de la transformation."
          ]
        }
      ]
    },
    {
      title: '2. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice résolu : Analyse d\'un mélange gazeux avec excès',
          content: [
            "Énoncé : Dans un eudiomètre contenant de l'eau, on introduit 35 cm³ de dihydrogène et 25 cm³ de dioxygène. On fait éclater une étincelle électrique.",
            "1. Écrire l'équation bilan de la réaction.",
            "2. Quel est le réactif en excès ? Justifier par le calcul.",
            "3. Quel volume de ce gaz reste-t-il après l'étincelle et le refroidissement de l'appareil ?",
            "4. Quel test expérimental permet d'identifier la nature du gaz résiduel ?",
            "Corrigé :",
            "1. 2 H₂ + O₂ ➔ 2 H₂O.",
            "2. D'après le rapport stœchiométrique V(H₂) = 2 × V(O₂). Pour consommer 25 cm³ de O₂, il faudrait 2 × 25 = 50 cm³ de H₂. Or on ne dispose que de 35 cm³ de H₂. C'est donc le dioxygène O₂ qui est en excès (le dihydrogène est le réactif limitant).",
            "3. Le volume de O₂ consommé par 35 cm³ de H₂ est V_consommé(O₂) = 35 / 2 = 17,5 cm³. Le volume résiduel est donc : V_restant(O₂) = 25 - 17,5 = 7,5 cm³.",
            "4. On approche une bûchette de bois présentant un point incandescent : elle se rallume vivement, confirmant qu'il s'agit de dioxygène O₂."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Synthèse de l\'eau dans l\'eudiomètre',
    root: 'Synthèse de l\'Eau',
    branches: [
      {
        name: 'MÉLANGE STŒCHIOMÉTRIQUE',
        subtitle: 'Rapport 2:1',
        items: ['2 volumes de H₂ + 1 volume de O₂', 'Étincelle électrique ➔ détonation', 'Condensation de buée liquide', 'Volume résiduel = 0 mL']
      },
      {
        name: 'MÉLANGE AVEC EXCÈS',
        subtitle: 'Gaz restant',
        items: ['Excès de H₂ ➔ reste H₂ (test « pop »)', 'Excès de O₂ ➔ reste O₂ (bûchette incandescente)', 'V(gaz réagi) = 3 × V(O₂ consommé)']
      },
      {
        name: 'ÉQUATION BILAN',
        subtitle: 'Recomposition',
        items: ['2 H₂ + O₂ ➔ 2 H₂O + Chaleur', 'Réaction fortement exothermique', 'Confirme la formule chimique H₂O']
      }
    ]
  },
  conclusion:
    "La synthèse de l'eau dans l'eudiomètre de Volta confirme avec éclat que l'eau est la combinaison de deux volumes de dihydrogène pour un volume de dioxygène. La maîtrise du calcul des volumes résiduels en présence d'un réactif en excès est une compétence reine du BFEM sénégalais."
};

// Rétrocompatibilité : export de l'ancienne variable combinée
export const LESSON_4_5_PC_3EME: LessonContent = LESSON_4_PC_3EME;

// -------------------------------------------------------------------------
// LEÇON 6 : LES HYDROCARBURES / LES ALCANES
// -------------------------------------------------------------------------
export const LESSON_6_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-6',
  number: 'Leçon 6 (Chimie)',
  title: 'Les hydrocarbures et les alcanes : formule CnH2n+2, nomenclature et combustions',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Le pétrole et le gaz naturel constituent aujourd'hui des ressources stratégiques mondiales majeures, et plus particulièrement au Sénégal avec l'exploitation des gisements pétro-gaziers offshore de Sangomar et de Grand Tortue Ahmeyim (GTA). Ces combustibles fossiles sont composés principalement d'hydrocarbures, c'est-à-dire de molécules organiques constituées exclusivement d'atomes de carbone (C) et d'hydrogène (H). Cette leçon présente la famille des alcanes à chaîne ouverte saturée, la nomenclature des quatre premiers membres (méthane, éthane, propane, butane), les bouteilles de gaz domestique au Sénégal, ainsi que la distinction capitale entre combustion complète et combustion incomplète génératrice de monoxyde de carbone.",
  fullText: `Leçon 6 : Les hydrocarbures et les alcanes : formule CnH2n+2, nomenclature et combustions

Introduction :
Un hydrocarbure est un composé chimique organique renfermant uniquement des éléments carbone (C) et hydrogène (H).

I. Définition et formule générale des alcanes
1. Définition :
Les alcanes sont des hydrocarbures saturés dont la chaîne carbonée est ouverte (acyclique) et ne comporte que des liaisons simples de covalence entre atomes de carbone (C-C) et entre atomes de carbone et d'hydrogène (C-H).

2. Formule brute générale :
La formule générale des alcanes linéaires et ramifiés est :
CₙH₂ₙ₊₂  (où n est un entier naturel non nul : n ≥ 1).

II. Les quatre premiers alcanes (à connaître par cœur pour le BFEM)
1. Méthane (n = 1) :
- Formule brute : CH₄
- Formule développée : un carbone central lié à 4 atomes d'hydrogène.
- Présence : Principal constituant du gaz naturel (85 à 95 %), gaz des marais issu de la fermentation anaérobie des matières végétales, biogaz produit au Sénégal par les biodigesteurs villageois.

2. Éthane (n = 2) :
- Formule brute : C₂H₆ (n=2 ➔ 2n+2 = 6).
- Formule semi-développée : CH₃-CH₃.

3. Propane (n = 3) :
- Formule brute : C₃H₈ (n=3 ➔ 2n+2 = 8).
- Formule semi-développée : CH₃-CH₂-CH₃.
- Utilisé comme gaz combustible liquide sous pression (bouteilles industrielles et réservoirs GPL).

4. Butane (n = 4) :
- Formule brute : C₄H₁₀ (n=4 ➔ 2n+2 = 10).
- Formule semi-développée : CH₃-CH₂-CH₂-CH₃.
- C'est le gaz domestique universellement utilisé au Sénégal dans les bouteilles orange ou bleues de 2,7 kg, 6 kg (« bouteille Touba ») et 12,5 kg pour la cuisine familiale.

III. Les combustions des alcanes
La réaction la plus importante des alcanes sur le plan énergétique est leur combustion dans le dioxygène de l'air.

1. La combustion complète (en présence d'un excès de dioxygène O₂) :
- Caractéristiques : La flamme est courte, BLEUE, très chaude et non fuligineuse (ne noircit pas les casseroles).
- Produits exclusifs : Dioxyde de carbone (CO₂) et vapeur d'eau (H₂O).
- Équation générale de combustion complète d'un alcane :
  CₙH₂ₙ₊₂ + [(3n + 1) / 2] O₂ ➔ n CO₂ + (n + 1) H₂O
- Cas du méthane (n=1) : CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O
- Cas du butane (n=4) : 2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O

2. La combustion incomplète (par manque ou défaut de dioxygène O₂) :
- Caractéristiques : La flamme est JAUNE, éclairante, molle et dégage une fumée noire épaisse.
- Produits formés : En plus de la vapeur d'eau, elle produit du carbone solide sous forme de suie noire (qui encrasse et noircit les récipients de cuisson) et surtout du monoxyde de carbone (CO).
- DANGER EXTRÊME DU MONOXYDE DE CARBONE (CO) :
  Le monoxyde de carbone est un gaz incolore, inodore, non irritant et MORTEL. Lorsqu'il est inhalé, il se fixe sur l'hémoglobine du sang avec une affinité 200 fois supérieure à celle du dioxygène, privant les organes vitaux et le cerveau d'oxygène (asphyxie silencieuse dans les chambres fermées avec des fourneaux à charbon ou des réchauds défectueux).`,
  sections: [
    {
      title: '1. Famille des alcanes et étude expérimentale des combustions',
      image: {
        url: SVG_PC3_FIG5_ALCANES,
        alt: 'Figure 5 : Les 4 premiers alcanes et combustions complète vs incomplète',
        caption:
          'Figure 5 : Formules des 4 premiers alcanes linéaires (CH₄, C₂H₆, C₃H₈, C₄H₁₀) et mise en évidence de la combustion complète (flamme bleue, buée + eau de chaux troublée) vs incomplète (flamme jaune fuligineuse produisant suie noire et CO toxique).'
      },
      subsections: [
        {
          subtitle: 'Protocole expérimental obligatoire : Combustion complète du butane sur bec Bunsen',
          content: [
            "• Matériel : Bec Bunsen relié à une bouteille de butane (ou réchaud à gaz), boîte d'allumettes, bécher très sec et froid, tube en U ou fiole contenant de l'eau de chaux limpide, soucoupe en porcelaine blanche.",
            "• Étape 1 (Ouverture de la virole) : Ouvrir complètement la bague d'aération (virole) du brûleur pour permettre une arrivée maximale d'air (dioxygène en excès). Allumer le gaz : la flamme est d'un bleu vif éclatant.",
            "• Étape 2 (Mise en évidence de l'eau) : Placer le bécher froid au-dessus de la flamme pendant quelques secondes. Observation : Des gouttelettes d'eau liquide (buée) se condensent instantanément sur les parois froides du verre.",
            "• Étape 3 (Mise en évidence du dioxyde de carbone CO₂) : À l'aide d'un entonnoir inversé relié à un flacon laveur contenant de l'eau de chaux limpide, aspirer les gaz brûlés. Observation : L'eau de chaux se trouble rapidement avec apparition d'un précipité blanc de carbonate de calcium (CaCO₃).",
            "• Conclusion : La combustion complète du butane produit exclusivement de l'eau (H₂O) et du dioxyde de carbone (CO₂)."
          ]
        },
        {
          subtitle: 'Protocole expérimental obligatoire : Combustion incomplète et mise en évidence du carbone',
          content: [
            "• Étape 1 (Fermeture de la virole) : Tourner la virole du brûleur pour fermer totalement l'orifice d'arrivée d'air. Le dioxygène arrive alors en quantité insuffisante.",
            "• Étape 2 (Changement de flamme) : La flamme bleue disparaît pour laisser place à une grande flamme jaune ondulante et fuligineuse.",
            "• Étape 3 (Dépôt de carbone) : Passer rapidement une soucoupe en porcelaine blanche ou un fond de casserole au sommet de la flamme jaune. Observation : Une épaisse couche noire poudreuse se dépose instantanément. C'est du carbone pur (suie).",
            "• Danger sanitaire : Cette réaction produit obligatoirement du monoxyde de carbone (CO), nécessitant d'aérer immédiatement la pièce de travail."
          ]
        }
      ]
    },
    {
      title: '2. Règles d\'équilibrage des équations de combustion',
      subsections: [
        {
          subtitle: 'Méthode pas-à-pas pour équilibrer la combustion d\'un alcane au BFEM',
          content: [
            "• Étape 1 : Écrire la formule de l'alcane et de O₂ à gauche, et CO₂ + H₂O à droite.",
            "• Étape 2 (Carbone) : Si l'alcane contient 'n' atomes de carbone, placer le coefficient 'n' devant CO₂.",
            "• Étape 3 (Hydrogène) : L'alcane contient (2n + 2) atomes d'hydrogène. Comme chaque molécule d'eau H₂O apporte 2 atomes de H, placer le coefficient (2n + 2) / 2 = (n + 1) devant H₂O.",
            "• Étape 4 (Oxygène) : Compter le nombre total d'atomes d'oxygène à droite : (2 × n) dans CO₂ + (n + 1) dans H₂O = (3n + 1) atomes d'oxygène. Placer la fraction [(3n + 1) / 2] devant O₂.",
            "• Étape 5 (Coefficients entiers) : Si (3n + 1) est impair (comme pour le butane où n=4 ➔ 3×4+1 = 13), multiplier TOUS les coefficients de l'équation par 2 :",
            "  2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Combustion complète du butane d\'une cuisinière',
          content: [
            "Une bouteille de gaz butane domestique de 6 kg (utilisée à Dakar) alimente un réchaud à gaz en combustion complète.",
            "Données : M(C) = 12 g/mol ; M(H) = 1 g/mol ; Volume molaire Vm = 24 L/mol.",
            "1. Écrire et équilibrer l'équation bilan de la combustion complète du butane C₄H₁₀.",
            "2. Calculer la masse molaire M(C₄H₁₀) du butane.",
            "3. Calculer la quantité de matière n de butane contenue dans la bouteille de 6 kg.",
            "4. Quel volume de dioxygène V(O₂) pur est nécessaire pour brûler totalement ce gaz ?",
            "5. Quel volume d'air V(air) cela représente-t-il, sachant que l'air contient 20 % de dioxygène en volume ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique et rédigé',
          content: [
            "1. Équation de combustion complète du butane :",
            "   2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O.",
            "2. Masse molaire du butane C₄H₁₀ :",
            "   M = (4 × 12) + (10 × 1) = 48 + 10 = 58 g/mol.",
            "3. Quantité de matière de butane dans 6 kg :",
            "   m = 6 kg = 6 000 g.",
            "   n(C₄H₁₀) = m / M = 6 000 / 58 ≈ 103,45 mol.",
            "4. Volume de dioxygène V(O₂) consommé :",
            "   D'après les coefficients stœchiométriques de l'équation :",
            "   n(O₂) / 13 = n(C₄H₁₀) / 2 ➔ n(O₂) = (13 / 2) × n(C₄H₁₀) = 6,5 × 103,45 ≈ 672,4 mol.",
            "   V(O₂) = n(O₂) × Vm = 672,4 mol × 24 L/mol ≈ 16 138 Litres (soit environ 16,14 m³ de dioxygène pur).",
            "5. Volume d'air requis :",
            "   V(air) = 5 × V(O₂) = 5 × 16 138 L ≈ 80 690 Litres d'air (soit 80,7 m³ d'air).",
            "   Remarque pratique : Une bonne aération de la cuisine est indispensable pour apporter ce volume d'air considérable et éviter toute combustion incomplète mortelle."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Les alcanes et leurs combustions',
    root: 'Les Alcanes (CₙH₂ₙ₊₂)',
    branches: [
      {
        name: 'LES 4 PREMIERS',
        subtitle: 'Chaîne saturée',
        items: [
          'n=1 : Méthane CH₄ (biogaz, gaz naturel)',
          'n=2 : Éthane C₂H₆',
          'n=3 : Propane C₃H₈',
          'n=4 : Butane C₄H₁₀ (gaz domestique Sénégal)'
        ]
      },
      {
        name: 'COMBUSTION COMPLÈTE',
        subtitle: 'Excès de O₂',
        items: [
          'Flamme bleue non salissante',
          'Produits exclusifs : CO₂ (eau de chaux) + H₂O (buée)',
          'Équation : 2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O'
        ]
      },
      {
        name: 'COMBUSTION INCOMPLÈTE',
        subtitle: 'Défaut de O₂',
        items: [
          'Flamme jaune fuligineuse',
          'Dépôt de carbone pur C (suie noire)',
          'Production de Monoxyde de Carbone CO (gaz toxique mortel)'
        ]
      }
    ]
  },
  conclusion:
    "Les alcanes sont des combustibles de premier ordre dans la vie moderne. La combustion complète libère un maximum d'énergie thermique propre sous forme de CO₂ et H₂O, tandis que la combustion incomplète présente un grave danger d'intoxication au monoxyde de carbone CO."
};
