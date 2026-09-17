import { LessonContent } from './courses';
import { SVG_MOLECULE_EAU, SVG_FILTRATION_DISTILLATION } from './diagrams_4eme';

// =========================================================================
// COURS DE PHYSIQUE-CHIMIE (PC) — CLASSE DE 4ÈME
// PARTIE 1 : CHIMIE — L'EAU DANS NOTRE ENVIRONNEMENT & LES MÉLANGES AQUEUX
// COURS COMPLET ET DÉTAILLÉ AVEC DÉFINITIONS, SCHÉMAS EXPÉRIMENTAUX ET EXERCICES CORRIGÉS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 1 : L'EAU DANS NOTRE ENVIRONNEMENT
// -------------------------------------------------------------------------
export const LESSON_1_PC_4EME: LessonContent = {
  id: 'pc-4eme-lecon-1',
  number: 'Leçon 1 (Chimie)',
  title: "L'eau dans notre environnement",
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "L'eau est la substance chimique la plus abondante à la surface de la Terre et la ressource la plus vitale pour le monde vivant. Recouvrant plus de 70 % du globe terrestre, elle lui confère son surnom de « Planète Bleue ». En classe de 4ème, l'étude de l'eau permet de comprendre la structure de la matière à l'échelle moléculaire (la molécule H₂O), les trois états physiques (solide, liquide, gaz), les changements d'état avec conservation de la masse, et les caractéristiques physiques universelles de l'eau pure.",
  fullText: `Leçon 1 : L'eau dans notre environnement

Introduction :
L'eau est la substance chimique la plus abondante à la surface de la Terre et la ressource la plus vitale pour le monde vivant. Recouvrant plus de 70 % du globe terrestre, elle lui confère son surnom de « Planète Bleue ». En classe de 4ème, l'étude de l'eau permet de comprendre la structure de la matière à l'échelle moléculaire (la molécule H₂O), les trois états physiques (solide, liquide, gaz), les changements d'état avec conservation de la masse, et les caractéristiques physiques universelles de l'eau pure.

1. Répartition de l'eau sur la Terre (L'hydrosphère)
L'hydrosphère désigne l'ensemble des réserves d'eau de notre planète.
- Eau salée : Représente environ 97,5 % du volume total d'eau sur Terre. Elle est stockée dans les océans et les mers.
- Eau douce : Ne représente que 2,5 % de l'eau mondiale. Sur ces 2,5 % :
  • Environ 69 % sont immobilisés sous forme de glace dans les calottes polaires et les glaciers de haute montagne.
  • Environ 30 % se trouvent dans les nappes phréatiques et aquifères souterrains.
  • Moins de 1 % constitue l'eau de surface directement accessible à l'Homme (fleuves tels que le fleuve Sénégal, lacs, rivières, atmosphère).
Conclusion écologique : L'eau douce liquide de surface est une ressource extrêmement rare et précieuse qu'il est impératif de protéger contre le gaspillage et la pollution.

2. Les trois états physiques de l'eau et leurs propriétés microscopiques
Dans les conditions naturelles terrestres, l'eau est la seule substance chimique existant simultanément sous trois états physiques distincts :

A. L'état solide (ex : glace, neige, grêle, givre) :
- Propriétés macroscopiques : Un solide possède une forme propre (forme géométrique invariable) et un volume propre (on ne peut pas le comprimer facilement).
- Structure microscopique : Les molécules d'eau sont très ordonnées, fermement liées entre elles et immobiles (elles vibrent seulement sur place). C'est un état ordonné et compact.

B. L'état liquide (ex : eau de pluie, océans, lacs, buée) :
- Propriétés macroscopiques : Un liquide n'a pas de forme propre ; il prend la forme du récipient qui le contient. Sa surface libre au repos est toujours plane et horizontale. Il possède un volume propre.
- Structure microscopique : Les molécules d'eau sont très proches les unes des autres (compact), mais désordonnées et mobiles : elles glissent les unes sur les autres. C'est un état compact et désordonné.

C. L'état gazeux (ex : vapeur d'eau invisible présente dans l'air) :
- Attention piège : La vapeur d'eau est un gaz totalement invisible ! Le brouillard ou le panache blanc qui sort d'une bouilloire est en réalité constitué de minuscules gouttelettes d'eau liquide en suspension dans l'air.
- Propriétés macroscopiques : Un gaz n'a ni forme propre ni volume propre. Il est compressible (son volume peut diminuer sous pression) et expansible (il occupe tout le volume disponible).
- Structure microscopique : Les molécules d'eau sont très éloignées les unes des autres et très agitées : elles se déplacent en ligne droite à grande vitesse et dans toutes les directions. C'est un état dispersé et très désordonné.

3. La molécule d'eau : formule et modèle moléculaire (FIG 1)
- La plus petite particule conservant toutes les propriétés chimiques de l'eau est la molécule d'eau.
- Formule chimique brute : H₂O
- Composition atomique :
  • 2 atomes d'Hydrogène (symbole chimique H, représentés conventionnellement par des sphères blanches).
  • 1 atome d'Oxygène (symbole chimique O, représenté conventionnellement par une sphère rouge plus volumineuse).
- Géométrie de la molécule : Les deux atomes d'hydrogène sont liés à l'atome central d'oxygène avec un angle fixe de 104,5° (forme en V ou coudée).

4. Les changements d'état physique de l'eau
Le passage d'un état physique à un autre est appelé changement d'état (ou transition de phase).
- Fusion : Passage de l'état solide à l'état liquide (ex : un glaçon qui fond).
- Solidification : Passage de l'état liquide à l'état solide (ex : l'eau liquide qui gèle au congélateur).
- Vaporisation : Passage de l'état liquide à l'état gazeux. Elle peut se faire lentement (évaporation à température ambiante) ou rapidement avec formation de bulles (ébullition).
- Liquéfaction (ou condensation liquide) : Passage de l'état gazeux à l'état liquide (ex : formation de buée sur une vitre froide).
- Sublimation : Passage direct de l'état solide à l'état gazeux sans passer par l'état liquide.
- Condensation solide (ou givrage) : Passage direct de l'état gazeux à l'état solide (formation de givre).

Loi fondamentale de conservation :
Lors d'un changement d'état, la masse totale se conserve obligatoirement (la masse ne varie pas), car le nombre et la nature des molécules d'eau restent strictement identiques ! Seule la disposition spatiale des molécules change. En revanche, le volume varie : l'eau liquide qui gèle augmente de volume (cas exceptionnel de l'eau).

5. Constantes physiques universelles de l'eau pure sous la pression normale (1013 hPa)
- Température de fusion / solidification : 0 °C (avec un palier de température constant pendant toute la durée du changement d'état).
- Température d'ébullition : 100 °C (avec un palier de température constant à 100 °C).
- Masse volumique de l'eau liquide pure :
  ρ = 1 kg / L = 1 g / cm³ = 1000 kg / m³.
  Cela signifie qu'un litre d'eau pure pèse exactement 1 kilogramme !`,
  sections: [
    {
      title: '1. Modèle moléculaire et trois états physiques',
      image: {
        url: SVG_MOLECULE_EAU,
        alt: "Fig 1 : Modèle moléculaire de l'eau (H2O) et structure microscopique des trois états",
        caption:
          "Fig 1 : Modèle moléculaire de l'eau H₂O (atome O en rouge, 2 atomes H en blanc, angle 104,5°) et disposition microscopique des molécules dans les états solide, liquide et gazeux."
      },
      subsections: [
        {
          subtitle: 'Structure atomique de la molécule H₂O',
          content: [
            "• Formule chimique : H₂O (deux atomes d'hydrogène reliés à un atome d'oxygène).",
            "• Modèle compact et éclaté : L'oxygène est figuré par une sphère rouge (rayon supérieur) et chaque hydrogène par une sphère blanche.",
            "• Angle de liaison : L'angle O-H-O mesure environ 104,5°, conférant à la molécule une géométrie coudée et un caractère dipolaire essentiel à la vie."
          ]
        },
        {
          subtitle: 'Comparaison des 3 états de la matière',
          content: [
            "• Solide (Glace) : Compact et ordonné. Forme propre et volume propre indéformable.",
            "• Liquide (Eau) : Compact et désordonné. Pas de forme propre, surface libre plane et horizontale au repos.",
            "• Gazeux (Vapeur d'eau) : Dispersé et très agité. Sans forme ni volume propre, compressible et expansible."
          ]
        }
      ]
    },
    {
      title: '2. Changements d\'état et lois de conservation',
      subsections: [
        {
          subtitle: 'Le cycle des changements d\'état',
          content: [
            "• Fusion (Solide ➔ Liquide) et Solidification (Liquide ➔ Solide).",
            "• Vaporisation (Liquide ➔ Gaz) et Liquéfaction (Gaz ➔ Liquide).",
            "• Sublimation (Solide ➔ Gaz) et Condensation solide (Gaz ➔ Solide).",
            "• Palier de température : Pendant le changement d'état d'un corps pur comme l'eau distillée, la température reste constante (0 °C pour la fusion, 100 °C pour l'ébullition)."
          ]
        },
        {
          subtitle: 'Conservation de la masse lors du changement d\'état',
          content: [
            "• RÈGLE D'OR : La masse d'un corps pur ne change JAMAIS lors d'un changement d'état.",
            "• Exemple : 150 g d'eau liquide gelée donnent exactement 150 g de glace solide.",
            "• Variation de volume : La glace occupe un volume plus important que l'eau liquide dont elle provient (c'est pourquoi une bouteille en verre remplie d'eau à ras bord éclate au congélateur)."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Changement d\'état, masse et volume',
          content: [
            "Un élève de 4ème place dans un récipient fermé hermétiquement une masse m₁ = 250 g d'eau liquide.",
            "Il place l'ensemble au congélateur à -15 °C jusqu'à solidification complète de l'eau en un bloc de glace.",
            "1. Définir le changement d'état physique subi par l'eau.",
            "2. Quelle est la masse m₂ de glace obtenue après congélation ? Justifier rigoureusement.",
            "3. L'élève avait mesuré un volume d'eau liquide de 250 mL. Sachant que la masse volumique de la glace est ρ_glace = 0,92 g/cm³, calculer le volume occupé par ce bloc de glace. Le récipient risque-t-il de se déformer ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Identification du changement d'état :",
            "   • L'eau passe de l'état liquide à l'état solide : ce changement d'état s'appelle la SOLIDIFICATION.",
            "2. Détermination de la masse m₂ :",
            "   • Loi physique : Lors d'un changement d'état, la masse se conserve car le nombre et la nature des molécules restent strictement identiques.",
            "   • Donc m₂ = m₁ = 250 g de glace.",
            "3. Calcul du volume du bloc de glace :",
            "   • Formule de la masse volumique : ρ = m / V, d'où V = m / ρ.",
            "   • Application numérique : V_glace = 250 / 0,92 ≈ 271,7 cm³ (soit environ 272 mL).",
            "   • Comparaison : Le volume initial était de 250 mL. Le volume de glace (272 mL) est supérieur au volume initial (+8,8 %). Le récipient risque donc de gonfler ou d'éclater s'il n'est pas extensible."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Propriétés de l\'eau et courbe de température',
          content: [
            "On chauffe dans un ballon 500 mL d'eau pure sous la pression atmosphérique normale (1013 hPa). On relève la température toutes les minutes à l'aide d'un thermomètre.",
            "1. Quelle est la masse des 500 mL d'eau pure liquide au départ ?",
            "2. À quelle température l'eau commence-t-elle à bouillir ?",
            "3. Que constate-t-on sur la température au cours de l'ébullition tant qu'il reste de l'eau liquide dans le ballon ?",
            "4. Quel gaz invisible s'échappe lors de cette ébullition ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Masse des 500 mL d'eau pure :",
            "   • La masse volumique de l'eau pure est ρ = 1 g/mL (ou 1 kg/L).",
            "   • m = ρ × V = 1 g/mL × 500 mL = 500 g (soit 0,5 kg).",
            "2. Température d'ébullition :",
            "   • Sous la pression atmosphérique normale (1013 hPa), la température d'ébullition de l'eau pure est exactement de 100 °C.",
            "3. Observation durant l'ébullition :",
            "   • La température reste rigoureusement constante à 100 °C pendant toute la durée de l'ébullition. Ce palier de température horizontal est la signature caractéristique d'un corps pur.",
            "4. Gaz libéré :",
            "   • Le gaz invisible produit est de la vapeur d'eau (formule H₂O à l'état gazeux)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Cycle de l\'eau et changements d\'état',
    root: 'Molécule H₂O',
    branches: [
      {
        name: 'ÉTAT SOLIDE (GLACE)',
        subtitle: 'Compact et ordonné',
        items: [
          'Forme propre et volume invariable',
          'Fusion à 0 °C (Température constante)',
          'Masse volumique = 0,92 g/cm³'
        ]
      },
      {
        name: 'ÉTAT LIQUIDE (EAU)',
        subtitle: 'Compact et désordonné',
        items: [
          'Pas de forme propre, surface libre plane et horizontale',
          'Masse volumique : 1 kg/L = 1 g/cm³',
          'Conservation stricte de la masse lors des changements d\'état'
        ]
      },
      {
        name: 'ÉTAT GAZEUX (VAPEUR)',
        subtitle: 'Dispersé et très agité',
        items: [
          'Gaz invisible expansible et compressible',
          'Ébullition à 100 °C sous 1013 hPa',
          'Liquéfaction en contact avec une surface froide'
        ]
      }
    ]
  },
  conclusion:
    "L'eau est une ressource vitale sous trois états physiques sur Terre. La conservation absolue de la masse lors des transitions de phase et ses constantes physiques remarquables (0 °C, 100 °C, 1 kg/L) fondent la compréhension scientifique de notre environnement."
};

// -------------------------------------------------------------------------
// LEÇON 2 : L'EAU : UN CORPS PUR, LES MÉLANGES AQUEUX
// -------------------------------------------------------------------------
export const LESSON_2_PC_4EME: LessonContent = {
  id: 'pc-4eme-lecon-2',
  number: 'Leçon 2 (Chimie)',
  title: 'L\'eau : un corps pur, les mélanges aqueux',
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "Dans la nature et dans notre quotidien au Sénégal, l'eau se présente rarement à l'état de corps pur : l'eau du robinet, l'eau des puits, l'eau minérale et les boissons sont des mélanges aqueux. Cette leçon établit la distinction fondamentale entre un corps pur et un mélange, classifie les mélanges en mélanges homogènes et hétérogènes, détaille les techniques séparatives de laboratoire (décantation, filtration, distillation) et présente le test chimique d'identification de l'eau au sulfate de cuivre anhydre.",
  fullText: `Leçon 2 : L'eau : un corps pur, les mélanges aqueux

Introduction :
Dans la nature et dans notre quotidien au Sénégal, l'eau se présente rarement à l'état de corps pur : l'eau du robinet, l'eau des puits, l'eau minérale et les boissons sont des mélanges aqueux. Cette leçon établit la distinction fondamentale entre un corps pur et un mélange, classifie les mélanges en mélanges homogènes et hétérogènes, détaille les techniques séparatives de laboratoire (décantation, filtration, distillation) et présente le test chimique d'identification de l'eau au sulfate de cuivre anhydre.

1. Définitions capitales : Corps pur vs Mélange
A. Un corps pur :
- Définition : Une substance est un corps pur si elle n'est constituée que d'une seule et unique espèce chimique (un seul type de molécules ou d'atomes).
- Exemple : L'eau distillée (qui ne contient que des molécules H₂O), l'oxygène pur, le fer pur, le sel purifié.
- Caractéristique : Un corps pur possède des constantes physiques fixes et invariables (température de fusion constante de 0 °C pour l'eau, température d'ébullition constante de 100 °C sous 1013 hPa).

B. Un mélange :
- Définition : Un mélange est constitué de plusieurs espèces chimiques différentes (au moins deux constituants distincts).
- Exemple : L'eau du robinet, l'eau minérale, l'eau de mer, le thé, l'air, le jus d'orange.
- Mélange aqueux : Un mélange est dit « aqueux » lorsque l'eau est le constituant largement majoritaire (le solvant).

2. Classification des mélanges : Homogènes et Hétérogènes
A. Mélange homogène :
- Définition : Mélange dont on ne peut pas distinguer les différents constituants à l'œil nu après agitation.
- Aspect : Limpide, uniforme dans tout son volume.
- Exemples :
  • Eau + sel de cuisine dissous (eau salée).
  • Eau + sirop de menthe.
  • Eau + alcool (miscibles).
  • L'air pur (mélange de diazote et de dioxygène).

B. Mélange hétérogène :
- Définition : Mélange dont on peut distinguer au moins deux constituants distincts à l'œil nu (ou qui présente des particules visibles en suspension).
- Aspect : Trouble, opaque, ou formant plusieurs couches distinctes (phases).
- Exemples :
  • Eau + huile (liquides non miscibles formant deux phases).
  • Eau boueuse (eau avec particules de terre et de sable).
  • Eau gazeuse avec bulles de gaz remontant en surface.

3. Les techniques de séparation des constituants d'un mélange
Pour purifier l'eau ou isoler ses constituants, les chimistes utilisent des méthodes de séparation physiques :

A. La décantation :
- Principe : Sous l'effet de la pesanteur, les particules solides les plus lourdes d'un mélange hétérogène se déposent au fond du récipient (sédimentation). Pour deux liquides non miscibles (eau et huile), on utilise une ampoule à décanter : le liquide le plus dense (l'eau, ρ = 1 g/cm³) s'écoule par le robinet inférieur, laissant l'huile moins dense (ρ = 0,9 g/cm³) au-dessus.

B. La filtration (Schéma 1) :
- Principe : On fait passer un mélange hétérogène à travers un filtre poreux (papier filtre placé dans un entonnoir).
- Vocabulaire expérimental :
  • Le résidu : Les particules solides insolubles retenues sur le papier filtre.
  • Le filtrat : Le liquide limpide recueilli dans le bécher.
- Résultat : La filtration permet de transformer un mélange hétérogène en un mélange homogène, mais le filtrat contient encore toutes les substances chimiques dissoutes (sels minéraux, colorants, etc.).

C. La distillation (Schéma 2) :
- Principe : Séparation des constituants d'un mélange liquide homogène par vaporisation suivie d'une condensation.
- Déroulement dans le distillateur :
  1. On chauffe l'eau de mer ou l'eau salée dans un ballon avec des grains de pierre ponce pour réguler l'ébullition.
  2. À 100 °C, l'eau pure se vaporise en vapeur d'eau tandis que le sel non volatil reste au fond du ballon.
  3. La vapeur d'eau monte, passe dans le tube réfrigérant droit refroidi en permanence par une circulation d'eau froide.
  4. Au contact des parois froides, la vapeur se liquéfie en gouttelettes d'eau pure.
  5. On recueille dans l'erlenmeyer le distillat : c'est de l'eau distillée, un corps pur !

4. Le test de reconnaissance chimique de l'eau
Pour prouver formellement la présence d'eau dans un aliment, un liquide ou une substance chimique :
- Réactif utilisé : Le sulfate de cuivre anhydre (formule CuSO₄).
- Couleur initiale : Poudre blanche (obtenue en déshydratant du sulfate de cuivre bleu par chauffage).
- Résultat du test : Au contact de la moindre trace d'eau, le sulfate de cuivre anhydre blanc devient immédiatement BLEU vif en s'hydratant (CuSO₄, 5H₂O).
- Si la poudre reste blanche, la substance testée ne contient pas d'eau.`,
  sections: [
    {
      title: '1. Séparation des mélanges : Filtration et Distillation',
      image: {
        url: SVG_FILTRATION_DISTILLATION,
        alt: 'Méthodes de séparation : Montages expérimentaux de filtration et de distillation',
        caption:
          'Montages de laboratoire : 1. Filtration (rétention du résidu solide sur le papier filtre, recueil du filtrat limpide) ; 2. Distillation (ébullition à 100 °C, condensation dans le réfrigérant et recueil du distillat d\'eau pure).'
      },
      subsections: [
        {
          subtitle: 'Le montage de filtration en détail',
          content: [
            "• Matériel indispensable : Support potence, anneau, entonnoir en verre, papier filtre conique plissé, bécher récepteur.",
            "• Résidu : Particules insolubles piégées par les pores du filtre.",
            "• Filtrat : Liquide homogène et limpide traversant le filtre."
          ]
        },
        {
          subtitle: 'Le montage de distillation et obtention du corps pur',
          content: [
            "• Rôle du chauffe-ballon : Porter le mélange aqueux à ébullition (100 °C).",
            "• Rôle de la pierre ponce : Réguler l'ébullition et éviter les projections violentes.",
            "• Rôle du réfrigérant à eau : Condenser la vapeur grâce à la circulation d'eau froide à contre-courant (entrée en bas, sortie en haut).",
            "• Le distillat recueilli est de l'eau distillée, un corps pur."
          ]
        }
      ]
    },
    {
      title: '2. Test d\'identification de l\'eau au sulfate de cuivre anhydre',
      subsections: [
        {
          subtitle: 'Principe du test chimique',
          content: [
            "• Sulfate de cuivre anhydre : Poudre blanche très avide d'eau.",
            "• Test positif (Présence d'eau) : La poudre blanche vire instantanément au BLEU éclatant.",
            "• Test négatif (Absence d'eau) : La poudre reste parfaitement blanche (ex : dans l'huile, l'essence pure ou l'alcool absolu).",
            "• Applications concrètes : Test concluant sur le lait, les jus de fruits, la pomme, le pain, confirmant qu'ils contiennent tous de l'eau."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Classification des mélanges et séparation',
          content: [
            "Au laboratoire, un groupe d'élèves dispose de quatre béchers contenant chacun 100 mL de liquide :",
            "• Bécher A : Eau + sel dissous (solution limpide).",
            "• Bécher B : Eau + huile de cuisine après agitation vigoureuse.",
            "• Bécher C : Eau + sable fin.",
            "• Bécher D : Eau distillée.",
            "1. Classer ces quatre contenus en corps purs, mélanges homogènes et mélanges hétérogènes.",
            "2. Proposer la technique la plus rapide pour séparer le sable du liquide dans le bécher C.",
            "3. Décrire l'aspect du liquide recueilli après cette séparation. Est-ce un corps pur ?",
            "4. Quelle méthode permettrait d'extraire de l'eau pure à partir du bécher A ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Classification méthodique des béchers :",
            "   • Bécher A (Eau + sel dissous) : Mélange HOMOGÈNE (on ne distingue pas le sel à l'œil nu, aspect limpide).",
            "   • Bécher B (Eau + huile) : Mélange HÉTÉROGÈNE (les deux liquides ne se mélangent pas, formation de deux phases distinctes).",
            "   • Bécher C (Eau + sable) : Mélange HÉTÉROGÈNE (particules de sable bien visibles en suspension puis au fond).",
            "   • Bécher D (Eau distillée) : CORPS PUR (ne contient qu'une seule espèce chimique : la molécule d'eau H₂O).",
            "2. Séparation pour le bécher C (Eau + sable) :",
            "   • La technique la plus rapide et la plus efficace est la FILTRATION (ou une décantation préalable suivie d'une filtration). Le sable reste sur le papier filtre sous forme de résidu.",
            "3. Aspect du liquide recueilli (filtrat) :",
            "   • Le filtrat est limpide et transparent. Ce n'est pas forcément un corps pur, car il peut contenir des sels solubles dissous invisibles à l'œil nu.",
            "4. Extraction d'eau pure à partir du bécher A (Eau salée) :",
            "   • Il faut réaliser une DISTILLATION. L'eau s'évapore à 100 °C, se condense dans le réfrigérant et produit de l'eau distillée pure dans l'erlenmeyer, tandis que le sel reste dans le ballon."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Analyse d\'une étiquette d\'eau minérale et test chimique',
          content: [
            "L'étiquette d'une bouteille d'eau minérale vendue à Dakar indique :",
            "Calcium : 78 mg/L  •  Magnésium : 24 mg/L  •  Chlorures : 15 mg/L  •  Sulfates : 12 mg/L.",
            "1. L'eau minérale est-elle un corps pur ou un mélange ? Justifier rigoureusement.",
            "2. Pourquoi qualifie-t-on ce mélange d'aqueux et d'homogène ?",
            "3. Un élève verse quelques gouttes de cette eau minérale sur du sulfate de cuivre anhydre blanc. Qu'observe-t-il ?",
            "4. Quelle masse totale de sels minéraux absorbe une personne qui boit une bouteille de 1,5 L de cette eau ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Nature de l'eau minérale :",
            "   • L'eau minérale est un MÉLANGE. Elle contient non seulement de l'eau, mais également des sels minéraux dissous (ions calcium, magnésium, chlorures, sulfates). Un corps pur ne contiendrait aucun minéral.",
            "2. Justification des qualificatifs :",
            "   • « Aqueux » car le constituant très largement majoritaire (le solvant) est l'eau.",
            "   • « Homogène » car les sels minéraux sont totalement dissous et invisibles à l'œil nu : l'eau est parfaitement limpide.",
            "3. Résultat du test au sulfate de cuivre anhydre :",
            "   • La poudre blanche devient instantanément BLEUE, ce qui confirme sans équivoque la présence d'eau.",
            "4. Calcul de la masse de minéraux absorbée pour 1,5 L :",
            "   • Teneur totale par litre : 78 + 24 + 15 + 12 = 129 mg/L.",
            "   • Pour 1,5 litre : Masse = 129 mg/L × 1,5 L = 193,5 mg de sels minéraux."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Séparation des mélanges et purification de l\'eau',
    root: 'Mélanges Aqueux',
    branches: [
      {
        name: 'MÉLANGE HÉTÉROGÈNE',
        subtitle: 'Au moins 2 constituants visibles',
        items: [
          'Eau boueuse, eau + huile',
          'Décantation (séparation par gravité / densité)',
          'Filtration (papier filtre : résidu + filtrat limpide)'
        ]
      },
      {
        name: 'MÉLANGE HOMOGÈNE',
        subtitle: 'Constituants indiscernables',
        items: [
          'Eau salée, eau minérale, sirops',
          'Filtrat limpide mais contenant des espèces dissoutes',
          'Distillation obligatoire pour séparer les espèces chimiques'
        ]
      },
      {
        name: 'CORPS PUR (EAU DISTILLÉE)',
        subtitle: 'Une seule espèce moléculaire',
        items: [
          'Recueilli sous forme de distillat',
          'Température d\'ébullition fixe à 100 °C',
          'Test au sulfate de cuivre anhydre : virage au BLEU'
        ]
      }
    ]
  },
  conclusion:
    "La distinction entre corps purs et mélanges aqueux régit la chimie pratique. Alors que la filtration ne sépare que les matières en suspension, seule la distillation permet d'extraire de l'eau pure sous forme de distillat, formellement identifiable par le test au sulfate de cuivre anhydre."
};
