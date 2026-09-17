import { LessonContent } from './courses';
import {
  SVG_CHIMIE_FIG1_AIR_COMPOSITION,
  SVG_CHIMIE_FIG2_COMBUSTION_O2_EXPERIENCE,
  SVG_CHIMIE_FIG3_SERINGUE_COMPRESSION_EXPANSION,
  SVG_CHIMIE_FIG4_MOLECULES_CORPS_SIMPLES_COMPOSES,
  SVG_CHIMIE_FIG5_COMBUSTION_CARBONE_EAU_CHAUX,
  SVG_CHIMIE_FIG6_REACTION_MOLECULAIRE_EQUILIBREE
} from './diagrams_4eme_chimie';

// =========================================================================
// COURS COMPLET DE CHIMIE — CLASSE DE QUATRIÈME (4ÈME)
// Conforme au Programme Officiel Sénégalais des Sciences Physiques
// Les 5 leçons officielles avec figures vectorielles obligatoires et 3 exercices résolus par leçon
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON C1 : L'AIR, UN MÉLANGE DE GAZ
// -------------------------------------------------------------------------
export const LESSON_C1_CHIMIE_4EME: LessonContent = {
  id: 'chimie-4eme-lecon-c1',
  number: 'Leçon C1 (Chimie)',
  title: "L'air, un mélange de gaz",
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "L'air est le fluide qui entoure la Terre et constitue l'atmosphère. Bien qu'invisible et inodore, il est composé de plusieurs gaz indispensables à la vie. En classe de 4ème, l'étude de l'air permet de comprendre qu'il ne s'agit pas d'un corps pur mais d'un mélange homogène gazeux constitué principalement de diazote (~78 % ou 4/5) et de dioxygène (~21 % ou 1/5), prouvé expérimentalement par la combustion sous éprouvette graduée.",
  fullText: `Leçon C1 : L'air, un mélange de gaz

Introduction :
L'air est le fluide qui entoure la Terre et constitue l'atmosphère. Bien qu'invisible et inodore, il est composé de plusieurs gaz indispensables à la vie.

I. La Composition de l'air
L'air n'est pas un corps pur, c'est un mélange homogène de plusieurs gaz. Dans un volume d'air pur et sec, on trouve principalement deux gaz :
• Le Dioxygène (O₂) : Constitue environ 21 % du volume de l'air (environ 1/5). C'est le gaz indispensable à la respiration des êtres vivants et aux combustions.
• Le Diazote (N₂) : Constitue environ 78 % du volume de l'air (environ 4/5). C'est un gaz inerte qui ralentit l'action trop vive du dioxygène.
• Autres gaz : Les 1 % restants sont composés de gaz rares (argon, hélium), de dioxyde de carbone (CO₂) et de vapeur d'eau.

Figure 1 : Graphique simplifié de la répartition en volume des constituants majeurs de l'air :
- Diazote (78 %)
- Dioxygène (21 %)
- Autres gaz (1 %)

II. Expérience de mise en évidence du dioxygène
Pour prouver que l'air contient environ 1/5 de dioxygène, on réalise l'expérience de la bougie ou du phosphore sous une éprouvette graduée retournée sur une cuve à eau.
Observation : Lors de la combustion, la flamme s'éteint rapidement dès que le dioxygène est entièrement consommé. On constate alors que l'eau monte dans l'éprouvette et occupe environ un cinquième (1/5) du volume initial.

Figure 2 : Expérience montrant la consommation du dioxygène de l'air :
- Début : éprouvette remplie d'air (V₀), bougie allumée.
- Fin : flamme éteinte, eau monte d'un cinquième (1/5), diazote inerte restant (4/5).`,
  sections: [
    {
      title: '1. Composition volumique de l\'air atmosphérique',
      image: {
        url: SVG_CHIMIE_FIG1_AIR_COMPOSITION,
        alt: "Figure 1 : Graphique simplifié de la répartition en volume des constituants majeurs de l'air",
        caption:
          "Figure 1 : Répartition en volume des constituants de l'air : Diazote N₂ (78 % ≈ 4/5), Dioxygène O₂ (21 % ≈ 1/5) et autres gaz (1 % : Argon, CO₂, vapeur d'eau)."
      },
      subsections: [
        {
          subtitle: 'L\'air : un mélange homogène gazeux',
          content: [
            "• L'air n'est pas un corps pur, mais un mélange homogène de gaz transparents et incolores.",
            "• Le Diazote (N₂) : 78 % en volume (soit environ 4/5 du volume total). C'est un gaz inerte qui ne participe pas à la respiration cellulaire et modère les combustions.",
            "• Le Dioxygène (O₂) : 21 % en volume (soit environ 1/5 du volume total). Gaz indispensable à la vie de tous les êtres vivants et comburant obligatoire pour entretenir le feu.",
            "• Les gaz minoritaires (1 %) : Gaz rares (Argon, Néon, Hélium), dioxyde de carbone CO₂ (0,04 %) et vapeur d'eau variable selon l'hygrométrie."
          ]
        }
      ]
    },
    {
      title: '2. Expérience de mise en évidence du dioxygène',
      image: {
        url: SVG_CHIMIE_FIG2_COMBUSTION_O2_EXPERIENCE,
        alt: 'Figure 2 : Expérience montrant la consommation du dioxygène de l\'air',
        caption:
          'Figure 2 : Sous la cloche retournée sur la cuve à eau, la combustion de la bougie consomme tout le dioxygène disponible. Dès extinction, l\'eau monte et comble exactement 1/5 du volume initial.'
      },
      subsections: [
        {
          subtitle: 'Protocole expérimental et interprétation physique',
          content: [
            "• Début : Une bougie allumée est placée sur un support au milieu d'une cuve à eau et recouverte d'une éprouvette graduée.",
            "• Déroulement : La bougie brûle en consommant le dioxygène de l'air enfermé. La flamme vacille puis s'éteint dès l'épuisement complet du dioxygène.",
            "• Observation finale : L'eau monte dans l'éprouvette et occupe précisément 1/5 (environ 20 %) du volume intérieur.",
            "• Conclusion : Le dioxygène représentait environ un cinquième du volume total de l'air. Le gaz restant (4/5) est le diazote, incombustible."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas (3 exercices complets)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calcul des volumes de diazote et de dioxygène dans une pièce',
          content: [
            "Une salle de classe de 4ème au Sénégal a pour dimensions : longueur L = 8 m, largeur l = 6 m et hauteur h = 3 m.",
            "1. Calculer le volume total d'air V contenu dans cette salle de classe en mètres cubes (m³), puis en litres (L).",
            "2. En utilisant les proportions simplifiées (1/5 de dioxygène et 4/5 de diazote), calculer le volume de dioxygène V(O₂) présent dans la salle en m³.",
            "3. Calculer le volume de diazote V(N₂) présent dans la salle en m³.",
            "4. Quel volume de gaz minoritaires (1 %) la salle renferme-t-elle ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Calcul du volume total de la salle :",
            "   • Volume d'un parallélépipède rectangle : V = L × l × h",
            "   • V = 8 m × 6 m × 3 m = 144 m³.",
            "   • Conversion en litres : Sachant que 1 m³ = 1 000 L, V = 144 × 1 000 = 144 000 litres d'air.",
            "2. Volume de dioxygène V(O₂) :",
            "   • V(O₂) = V × (1/5) = 144 / 5 = 28,8 m³ (soit 28 800 L de dioxygène pur).",
            "3. Volume de diazote V(N₂) :",
            "   • V(N₂) = V × (4/5) = (144 × 4) / 5 = 115,2 m³ (soit 115 200 L de diazote inerte).",
            "4. Volume des gaz minoritaires (1 %) :",
            "   • V(autres) = 144 × 0,01 = 1,44 m³ (soit 1 440 L)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Expérience de l\'éprouvette graduée et de la bougie',
          content: [
            "Un élève réalise l'expérience de la Figure 2 avec une éprouvette graduée contenant initialement un volume V₀ = 250 mL d'air au-dessus de la cuve à eau.",
            "Il allume la bougie et pose rapidement l'éprouvette dessus.",
            "1. Pourquoi la flamme de la bougie s'éteint-elle au bout de quelques secondes ?",
            "2. Quel est le volume d'eau V_eau qui monte dans l'éprouvette après refroidissement complet ?",
            "3. Quel est le volume de gaz V_gaz restant dans l'éprouvette ? De quel gaz s'agit-il principalement ?",
            "4. Si l'on introduisait une nouvelle allumette enflammée dans le gaz restant, que se passerait-il ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Cause de l'extinction de la flamme :",
            "   • La combustion de la bougie consomme le dioxygène présent dans l'air enfermé. Dès que tout le dioxygène est épuisé, la combustion ne peut plus se poursuivre : la flamme s'éteint faute de comburant.",
            "2. Volume d'eau monté dans l'éprouvette :",
            "   • L'eau monte pour remplacer le dioxygène consommé, soit environ 1/5 du volume initial :",
            "   • V_eau = V₀ × (1/5) = 250 mL / 5 = 50 mL.",
            "3. Volume et nature du gaz restant :",
            "   • Volume restant : V_gaz = V₀ - V_eau = 250 - 50 = 200 mL (ou V₀ × 4/5 = 200 mL).",
            "   • Ce gaz est principalement composé de DIAZOTE (N₂), avec d'infimes traces de dioxyde de carbone et de gaz rares.",
            "4. Test de l'allumette :",
            "   • L'allumette s'éteindrait immédiatement car le diazote est un gaz inerte qui n'entretient absolument pas les combustions."
          ]
        },
        {
          subtitle: 'Exercice 3 : Énoncé — Respiration et consommation d\'air chez l\'humain',
          content: [
            "Au repos, un collégien inspire environ 0,5 litre d'air à chaque inspiration et effectue 16 respirations par minute.",
            "1. Calculer le volume total d'air inspiré par cet élève en 1 heure.",
            "2. Calculer le volume de dioxygène pur contenu dans cet air inspiré en 1 heure.",
            "3. L'air expiré contient encore environ 16 % de dioxygène. Calculer le volume réel de dioxygène consommé (absorbé dans le sang) par l'organisme de cet élève en 1 heure."
          ]
        },
        {
          subtitle: 'Exercice 3 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Volume total d'air inspiré en 1 heure :",
            "   • Nombre d'inspirations en 1 heure (60 minutes) : N = 16 × 60 = 960 inspirations.",
            "   • Volume total d'air : V_air = 960 × 0,5 L = 480 litres d'air par heure.",
            "2. Volume de dioxygène inspiré :",
            "   • V(O₂ inspiré) = 480 L × 0,21 = 100,8 litres de dioxygène.",
            "3. Volume réel de dioxygène consommé :",
            "   • Pourcentage de dioxygène absorbé par les poumons : 21 % - 16 % = 5 % de l'air inspiré.",
            "   • V(O₂ consommé) = 480 L × 0,05 = 24 litres de dioxygène pur consommé en 1 heure."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Structure et composition de l\'air',
    root: 'L\'Air Atmosphérique',
    branches: [
      {
        name: 'DIAZOTE N₂ (78 % ≈ 4/5)',
        subtitle: 'Gaz inerte majoritaire',
        items: [
          'Formule N₂, inodore et incolore',
          'Incombustible, n\'entretient pas la vie',
          'Modère l\'action oxydante du dioxygène'
        ]
      },
      {
        name: 'DIOXYGÈNE O₂ (21 % ≈ 1/5)',
        subtitle: 'Comburant indispensable',
        items: [
          'Formule O₂, nécessaire à la respiration',
          'Comburant indispensable des combustions',
          'Mis en évidence par l\'eau qui monte d\'1/5'
        ]
      },
      {
        name: 'GAZ MINORITAIRES (1 %)',
        subtitle: 'Traces atmosphériques',
        items: [
          'Argon, Hélium, Néon (gaz rares)',
          'Dioxyde de carbone CO₂ (0,04 %)',
          'Vapeur d\'eau en proportion variable'
        ]
      }
    ]
  },
  conclusion:
    "L'air est un mélange gazeux homogène indispensable à la biosphère terrestre. Formé de 4/5 de diazote et de 1/5 de dioxygène, sa proportion d'oxygène est prouvée avec exactitude par l'expérience de la cuve à eau."
};

// -------------------------------------------------------------------------
// LEÇON C2 : PROPRIÉTÉS PHYSIQUES DES GAZ
// -------------------------------------------------------------------------
export const LESSON_C2_CHIMIE_4EME: LessonContent = {
  id: 'chimie-4eme-lecon-c2',
  number: 'Leçon C2 (Chimie)',
  title: 'Propriétés physiques des gaz',
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "Contrairement aux solides et aux liquides, les gaz n'ont pas de forme propre ni de volume propre. Ils possèdent des propriétés physiques très particulières qui gouvernent la météorologie, les pneumatiques et l'aéronautique. Cette leçon détaille la compressibilité, l'expansibilité à l'aide du modèle de la seringue bouchée, et démontre expérimentalement que l'air possède une masse mesurable (environ 1,2 g à 1,3 g par litre).",
  fullText: `Leçon C2 : Propriétés physiques des gaz

Introduction :
Contrairement aux solides et aux liquides, les gaz n'ont pas de forme propre ni de volume propre. Ils possèdent des propriétés physiques très particulières.

I. Compressibilité et expansibilité
• La Compressibilité : On dit qu'un gaz est compressible car on peut diminuer son volume en exerçant une pression sur lui.
• L'Expansibilité : Un gaz est expansible car il occupe tout le volume du récipient qui le contient. Si on augmente l'espace disponible, il se détend.

Figure 3 : Mise en évidence de la compressibilité et de l'expansibilité avec une seringue bouchée :
- Compression (V diminue) : On pousse le piston, le volume diminue et la pression augmente.
- Expansion (V augmente) : On tire le piston, le volume augmente et la pression diminue.

II. La masse de l'air
L'air semble léger, mais il a une masse mesurable. Dans des conditions normales de température et de pression (0 °C au niveau de la mer) :
À retenir : La masse d'un litre (1 L) d'air est d'environ 1,2 g à 1,3 g sous la pression atmosphérique normale (1013 hPa).

Expérience de pesée : On pèse un ballon bien gonflé. On retire ensuite un volume précis d'air (ex : 1,5 litre d'air par déplacement d'eau) et on repèse le ballon. La différence de masse permet de déduire la masse de l'air extrait.`,
  sections: [
    {
      title: '1. Compressibilité et expansibilité des gaz',
      image: {
        url: SVG_CHIMIE_FIG3_SERINGUE_COMPRESSION_EXPANSION,
        alt: 'Figure 3 : Mise en évidence de la compressibilité et de l\'expansibilité avec une seringue bouchée',
        caption:
          'Figure 3 : Seringue bouchée hermétiquement : 1. Compression (le piston est poussé, le volume diminue, la pression augmente) ; 2. Expansion (le piston est tiré, le volume augmente, la pression diminue).'
      },
      subsections: [
        {
          subtitle: 'Le comportement microscopique des molécules de gaz',
          content: [
            "• Absence de forme propre : Un gaz prend la forme du récipient qui l'accueille.",
            "• Absence de volume propre : Un gaz occupe systématiquement TOUT le volume qui lui est offert.",
            "• Compressibilité : Lorsqu'on pousse le piston d'une seringue bouchée, les molécules d'air se rapprochent les unes des autres : le volume diminue et les chocs sur les parois augmentent (la pression monte).",
            "• Expansibilité (ou détente) : Lorsqu'on tire le piston, les molécules s'écartent : le volume augmente et la pression diminue."
          ]
        }
      ]
    },
    {
      title: '2. La masse de l\'air et expérience de pesée',
      subsections: [
        {
          subtitle: 'Valeur de référence universelle',
          content: [
            "• Sous la pression normale (1013 hPa) et à 20 °C : la masse volumique de l'air est d'environ ρ = 1,2 g/L à 1,3 g/L.",
            "• Cela prouve formellement que l'air n'est pas « rien » : c'est de la matière tangible composée d'atomes et de molécules ayant une masse réelle."
          ]
        },
        {
          subtitle: 'Expérience de pesée par déplacement d\'eau',
          content: [
            "• Étape 1 : On gonfle un ballon de football à l'aide d'une pompe et on mesure sa masse initiale m₁ sur une balance électronique précise au centième de gramme.",
            "• Étape 2 : On relie le ballon à un tuyau plongeant sous une bouteille de 1,5 L remplie d'eau et retournée dans une cuve (recueil par déplacement d'eau).",
            "• Étape 3 : On laisse s'échapper exactement 1,5 L d'air du ballon dans la bouteille.",
            "• Étape 4 : On repèse le ballon : sa nouvelle masse m₂ est inférieure à m₁.",
            "• Étape 5 : La différence Δm = m₁ - m₂ donne exactement la masse des 1,5 L d'air extrait !"
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas (3 exercices complets)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calcul de la masse de l\'air extrait d\'un ballon',
          content: [
            "Un professeur de sciences physiques réalise l'expérience de la pesée de l'air avec ses élèves de 4ème :",
            "• Masse du ballon bien gonflé : m₁ = 428,6 g.",
            "• On extrait un volume V = 2 litres d'air par la méthode de déplacement d'eau dans une éprouvette.",
            "• La nouvelle masse du ballon après extraction est : m₂ = 426,0 g.",
            "1. Pourquoi la masse du ballon a-t-elle diminué ?",
            "2. Calculer la masse m_air des 2 litres d'air extraits du ballon.",
            "3. En déduire la masse d'un litre (1 L) d'air dans les conditions de l'expérience. Ce résultat est-il conforme au cours ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Cause de la diminution de masse :",
            "   • La masse du ballon diminue car de la matière (des molécules d'air) a quitté le ballon lors de l'extraction.",
            "2. Calcul de la masse d'air extraite :",
            "   • m_air = m₁ - m₂ = 428,6 g - 426,0 g = 2,6 g.",
            "   • La masse des 2 litres d'air extraits est de 2,6 grammes.",
            "3. Masse d'un litre d'air :",
            "   • Masse pour 1 L = 2,6 g / 2 = 1,3 g/L.",
            "   • Ce résultat est parfaitement conforme au cours, qui indique qu'un litre d'air pèse entre 1,2 g et 1,3 g."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Masse totale de l\'air contenu dans une chambre à coucher',
          content: [
            "Une chambre à coucher à Dakar a un volume intérieur total de V = 45 m³.",
            "On prend pour masse volumique de l'air : ρ = 1,25 kg/m³ (ou 1,25 g/L).",
            "1. Rappeler la formule liant la masse m, la masse volumique ρ et le volume V.",
            "2. Calculer la masse totale d'air contenu dans cette chambre en kilogrammes (kg).",
            "3. Comparer cette masse à celle d'un sac de ciment usuel de 50 kg. Cet air peut-il encore être qualifié d'impondérable ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Formule fondamentale :",
            "   • m = ρ × V  (avec m en kg, ρ en kg/m³ et V en m³).",
            "2. Calcul de la masse d'air :",
            "   • m = 1,25 kg/m³ × 45 m³ = 56,25 kg.",
            "3. Comparaison et conclusion :",
            "   • L'air contenu dans cette pièce pèse plus de 56 kg, soit davantage qu'un sac de ciment entier de 50 kg !",
            "   • Cela démontre de manière spectaculaire que l'air n'est absolument pas impondérable : bien qu'invisible, il exerce un poids considérable."
          ]
        },
        {
          subtitle: 'Exercice 3 : Énoncé — Comportement du gaz dans une seringue et manomètre',
          content: [
            "On enferme 60 cm³ d'air dans une seringue munie d'un manomètre (appareil mesurant la pression). La pression initiale indiquée est P₁ = 1 000 hPa.",
            "1. L'embout étant hermétiquement bouché, on repousse le piston jusqu'à la graduation 30 cm³.",
            "   a. Quel phénomène physique subit l'air enfermé ?",
            "   b. La pression indiquée par le manomètre va-t-elle augmenter ou diminuer ? Pourquoi ?",
            "2. On tire ensuite le piston jusqu'à la graduation 90 cm³.",
            "   a. Quel phénomène physique subit l'air ?",
            "   b. Comment évolue la pression mesurée ?",
            "3. La masse des molécules d'air à l'intérieur de la seringue a-t-elle changé lors de ces manipulations ? Justifier."
          ]
        },
        {
          subtitle: 'Exercice 3 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Piston poussé à 30 cm³ :",
            "   a. L'air subit une COMPRESSION (son volume diminue de 60 à 30 cm³).",
            "   b. La pression augmente (elle double environ pour atteindre près de 2 000 hPa), car les mêmes molécules sont confinées dans un espace deux fois plus restreint et heurtent les parois plus violemment.",
            "2. Piston tiré à 90 cm³ :",
            "   a. L'air subit une EXPANSION (ou détente).",
            "   b. La pression diminue, car les molécules disposent de plus d'espace.",
            "3. Conservation de la masse :",
            "   • La masse d'air enfermé reste STRICTEMENT IDENTIQUE car la seringue est bouchée : aucune molécule n'est entrée ni sortie. Seul l'espacement entre les molécules a été modifié."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Propriétés physiques et caractéristiques de l\'air',
    root: 'Propriétés des Gaz',
    branches: [
      {
        name: 'COMPRESSIBILITÉ',
        subtitle: 'Piston poussé',
        items: [
          'Le volume diminue (V décroît)',
          'La pression augmente (P croît)',
          'Molécules plus resserrées'
        ]
      },
      {
        name: 'EXPANSIBILITÉ',
        subtitle: 'Piston tiré',
        items: [
          'Le volume augmente (V croît)',
          'La pression diminue (P décroît)',
          'Molécules plus dispersées'
        ]
      },
      {
        name: 'MASSE DE L\'AIR',
        subtitle: 'Matière mesurable',
        items: [
          '1 L d\'air ≈ 1,2 g à 1,3 g (1013 hPa, 20°C)',
          'Mesure par déplacement d\'eau',
          'L\'air a une masse et un poids réel'
        ]
      }
    ]
  },
  conclusion:
    "Les gaz se distinguent par l'absence de forme et de volume propres, leur compressibilité et leur expansibilité. La matière gazeuse possède une masse mesurable (environ 1,3 g/L) prouvée par la pesée par déplacement d'eau."
};

// -------------------------------------------------------------------------
// LEÇON C3 : STRUCTURE PARTICULAIRE DE LA MATIÈRE : ATOMES ET MOLÉCULES
// -------------------------------------------------------------------------
export const LESSON_C3_CHIMIE_4EME: LessonContent = {
  id: 'chimie-4eme-lecon-c3',
  number: 'Leçon C3 (Chimie)',
  title: 'Structure particulaire de la matière : atomes et molécules',
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "Pour expliquer les propriétés physiques et chimiques de la matière, les scientifiques utilisent le modèle moléculaire. La matière est constituée de minuscules particules invisibles à l'œil nu : les atomes et les molécules. Cette leçon présente le tableau conventionnel des atomes (carbone, hydrogène, oxygène, azote), les règles d'écriture des formules chimiques avec indices et les modèles moléculaires des corps simples et composés.",
  fullText: `Leçon C3 : Structure particulaire de la matière : atomes et molécules

Introduction :
Pour expliquer les propriétés physiques et chimiques de la matière, les scientifiques utilisent le modèle moléculaire. La matière est constituée de minuscules particules.

I. Les Atomes
Un atome est le constituant fondamental de la matière. Chaque atome est représenté par un symbole chimique (une lettre majuscule, parfois suivie d'une minuscule) et modélisé par une sphère de couleur déterminée :
- Nom de l'atome : Carbone | Symbole : C | Modèle géométrique : Sphère Noire
- Nom de l'atome : Hydrogène | Symbole : H | Modèle géométrique : Sphère Blanche / Grise
- Nom de l'atome : Oxygène | Symbole : O | Modèle géométrique : Sphère Rouge
- Nom de l'atome : Azote | Symbole : N | Modèle géométrique : Sphère Bleue

II. Les Molécules
Une molécule est un assemblage d'atomes liés entre eux. Elle est représentée par une formule chimique indiquant le type et le nombre de chaque atome.
• Les indices (les petits chiffres en bas à droite du symbole) indiquent le nombre d'atomes de ce type présents dans la molécule. S'il n'y a pas de chiffre, cela signifie qu'il y a un seul atome.

Figure 4 : Modèles moléculaires de corps simples et composés :
- Dioxygène (O₂) : 2 atomes d'oxygène rouges liés entre eux (corps simple).
- Eau (H₂O) : 1 atome d'oxygène rouge lié à 2 atomes d'hydrogène blancs (corps composé).
- Dioxyde de carbone (CO₂) : 1 atome de carbone noir central lié à 2 atomes d'oxygène rouges (corps composé).`,
  sections: [
    {
      title: '1. Les atomes : symboles et modèles conventionnels',
      subsections: [
        {
          subtitle: 'Le tableau des 4 atomes fondamentaux du collège',
          content: [
            "• Définition : L'atome est la brique élémentaire constitutive de toute matière dans l'Univers.",
            "• Carbone : Symbole C — Modèle : Sphère Noire.",
            "• Hydrogène : Symbole H — Modèle : Sphère Blanche ou Grise claire (le plus petit atome).",
            "• Oxygène : Symbole O — Modèle : Sphère Rouge.",
            "• Azote : Symbole N (de Nitrogenium) — Modèle : Sphère Bleue.",
            "• Règle de graphie : La première lettre du symbole est TOUJOURS une majuscule (C, H, O, N, Fe, Cu, Cl)."
          ]
        }
      ]
    },
    {
      title: '2. Les molécules, formules chimiques et modèles moléculaires',
      image: {
        url: SVG_CHIMIE_FIG4_MOLECULES_CORPS_SIMPLES_COMPOSES,
        alt: 'Figure 4 : Modèles moléculaires de corps simples et composés',
        caption:
          'Figure 4 : Modèles moléculaires compacts : Dioxygène O₂ (corps simple, 2 sphères rouges), Eau H₂O (corps composé, 1 sphère rouge + 2 sphères blanches), Dioxyde de carbone CO₂ (corps composé, 1 sphère noire + 2 sphères rouges).'
      },
      subsections: [
        {
          subtitle: 'Lecture et écriture des formules chimiques',
          content: [
            "• Molécule : Assemblage électriquement neutre d'atomes unis par des liaisons chimiques.",
            "• Règle de l'indice : L'indice placé en bas à droite d'un symbole indique le nombre d'atomes de cet élément dans la molécule. L'absence d'indice équivaut au chiffre 1 (ex : dans CO₂, il y a 1 atome de C et 2 atomes de O).",
            "• Corps simple : Molécule formée d'un seul type d'atomes (ex : Dioxygène O₂, Dihydrogène H₂, Diazote N₂).",
            "• Corps composé : Molécule formée d'au moins deux sortes d'atomes différents (ex : Eau H₂O, Dioxyde de carbone CO₂, Butane C₄H₁₀)."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas (3 exercices complets)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Décodage de formules chimiques et composition atomique',
          content: [
            "On donne les formules chimiques suivantes :",
            "a) Méthane : CH₄",
            "b) Dihydrogène : H₂",
            "c) Butane : C₄H₁₀",
            "d) Monoxyde de carbone : CO",
            "1. Pour chaque molécule, donner le nom et le nombre exact de chaque atome qui la compose.",
            "2. Indiquer pour chacune s'il s'agit d'un corps pur simple ou d'un corps pur composé.",
            "3. Décrire l'aspect du modèle moléculaire (couleur et nombre de sphères) pour le méthane CH₄."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Composition atomique détaillée :",
            "   • a) CH₄ (Méthane) : 1 atome de carbone (C) et 4 atomes d'hydrogène (H).",
            "   • b) H₂ (Dihydrogène) : 2 atomes d'hydrogène (H).",
            "   • c) C₄H₁₀ (Butane) : 4 atomes de carbone (C) et 10 atomes d'hydrogène (H).",
            "   • d) CO (Monoxyde de carbone) : 1 atome de carbone (C) et 1 atome d'oxygène (O).",
            "2. Nature (corps simple ou composé) :",
            "   • H₂ : Corps simple (un seul type d'atome : H).",
            "   • CH₄, C₄H₁₀, CO : Corps composés (présence d'atomes différents : C et H ou C et O).",
            "3. Modèle moléculaire du méthane CH₄ :",
            "   • 1 sphère noire centrale (atome de carbone C) entourée de 4 sphères blanches (atomes d'hydrogène H)."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — De la description atomique à la formule chimique brute',
          content: [
            "Écrire la formule chimique brute correspondant à chacune des descriptions moléculaires suivantes :",
            "1. Une molécule de dioxyde de soufre contenant un atome de soufre (symbole S) et deux atomes d'oxygène.",
            "2. Une molécule d'ammoniac formée d'un atome d'azote et de trois atomes d'hydrogène.",
            "3. Une molécule d'éthanol formée de deux atomes de carbone, six atomes d'hydrogène et un atome d'oxygène.",
            "4. Une molécule d'ozone composée de trois atomes d'oxygène."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Dioxyde de soufre : 1 atome S et 2 atomes O ➔ Formule : SO₂.",
            "2. Ammoniac : 1 atome N et 3 atomes H ➔ Formule : NH₃.",
            "3. Éthanol : 2 atomes C, 6 atomes H et 1 atome O ➔ Formule : C₂H₆O.",
            "4. Ozone : 3 atomes O ➔ Formule : O₃."
          ]
        },
        {
          subtitle: 'Exercice 3 : Énoncé — Distinction entre coefficient et indice',
          content: [
            "Soient les deux notations chimiques suivantes : '3 O₂' et '2 H₂O'.",
            "1. Quelle est la différence fondamentale entre un coefficient (chiffre placé devant la formule) et un indice (chiffre placé en bas à droite) ?",
            "2. Pour la notation '3 O₂', déterminer :",
            "   a. Le nombre total de molécules.",
            "   b. Le nombre total d'atomes d'oxygène.",
            "3. Pour la notation '2 H₂O', déterminer :",
            "   a. Le nombre de molécules d'eau.",
            "   b. Le nombre total d'atomes d'hydrogène et d'atomes d'oxygène."
          ]
        },
        {
          subtitle: 'Exercice 3 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Règle fondamentale :",
            "   • L'indice indique combien d'atomes sont liés à l'intérieur d'une seule molécule.",
            "   • Le coefficient indique combien de molécules indépendantes sont présentes dans l'échantillon.",
            "2. Étude de '3 O₂' :",
            "   a. Il y a 3 molécules indépendantes de dioxygène.",
            "   b. Chaque molécule contenant 2 atomes d'oxygène, le total est : 3 × 2 = 6 atomes d'oxygène.",
            "3. Étude de '2 H₂O' :",
            "   a. Il y a 2 molécules d'eau.",
            "   b. Chaque molécule comporte 2 H et 1 O. Le total est : 2 × 2 = 4 atomes d'hydrogène et 2 × 1 = 2 atomes d'oxygène."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Structure de la matière : Atomes et Molécules',
    root: 'Structure Particulaire',
    branches: [
      {
        name: 'LES ATOMES (BRIQUES)',
        subtitle: 'Constituants fondamentaux',
        items: [
          'Carbone C : Sphère Noire',
          'Hydrogène H : Sphère Blanche/Grise',
          'Oxygène O : Sphère Rouge',
          'Azote N : Sphère Bleue'
        ]
      },
      {
        name: 'LES MOLÉCULES',
        subtitle: 'Assemblage d\'atomes',
        items: [
          'Unies par des liaisons chimiques',
          'Indices : nombre d\'atomes dans la molécule',
          'Coefficients : nombre total de molécules'
        ]
      },
      {
        name: 'CORPS SIMPLES VS COMPOSÉS',
        subtitle: 'Classification chimique',
        items: [
          'Corps simple : 1 seule sorte d\'atomes (O₂, H₂, N₂)',
          'Corps composé : atomes différents (H₂O, CO₂, CH₄)',
          'Modèles moléculaires compacts standardisés'
        ]
      }
    ]
  },
  conclusion:
    "Toute la matière est faite d'atomes représentés par des symboles et des sphères colorées conventionnelles. Les molécules résultent de l'assemblage de ces atomes selon des formules chimiques précises régies par les indices."
};

// -------------------------------------------------------------------------
// LEÇON C4 : LES COMBUSTIONS
// -------------------------------------------------------------------------
export const LESSON_C4_CHIMIE_4EME: LessonContent = {
  id: 'chimie-4eme-lecon-c4',
  number: 'Leçon C4 (Chimie)',
  title: 'Les combustions',
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "Une combustion est une transformation chimique au cours de laquelle un corps brûle en présence d'un gaz (généralement le dioxygène) en libérant de l'énergie thermique (chaleur) et souvent de la lumière. Cette leçon examine en détail la combustion du carbone (mise en évidence du dioxyde de carbone par l'eau de chaux), la combustion complète et incomplète du butane (gaz domestique), et alerte sur le danger mortel du monoxyde de carbone.",
  fullText: `Leçon C4 : Les combustions

Introduction :
Une combustion est une transformation chimique au cours de laquelle un corps brûle en présence d'un gaz (généralement le dioxygène) en libérant de l'énergie thermique (chaleur).

I. La combustion du Carbone
Lorsque le carbone (contenu dans le charbon de bois) brûle dans le dioxygène pur, la combustion est vive et produit des étincelles.
• Les Réactifs (corps consommés) : le Carbone (C) et le Dioxygène (O₂).
• Le Produit (corps formé) : le Dioxyde de carbone (CO₂). On le met en évidence avec de l'eau de chaux qui se trouble en sa présence.
• Bilan textuel : Carbone + Dioxygène → Dioxyde de carbone

Figure 5 : Combustion du carbone et test d'identification du gaz formé :
- Combustion vive avec étincelles dans le dioxygène pur.
- Eau de chaux limpide qui se trouble (blanc laiteux) attestant de la formation de CO₂.

II. Combustion du Butane
Le butane (gaz de cuisine) peut subir deux types de combustion selon la quantité d'air disponible :
1. Combustion complète (Excès d'air) : La flamme est bleue, très chaude. Elle produit du dioxyde de carbone (CO₂) et de l'eau (H₂O).
2. Combustion incomplète (Défaut d'air) : La flamme est jaune-orangée, éclairante mais moins chaude. Elle produit un dépôt de noir de carbone (suie) et un gaz toxique invisible : le monoxyde de carbone (CO).`,
  sections: [
    {
      title: '1. La combustion du carbone et identification du produit',
      image: {
        url: SVG_CHIMIE_FIG5_COMBUSTION_CARBONE_EAU_CHAUX,
        alt: 'Figure 5 : Combustion du carbone et test d\'identification du gaz formé',
        caption:
          'Figure 5 : Combustion vive du fusain incandescent dans le dioxygène pur avec projection d\'étincelles, suivie du test de confirmation à l\'eau de chaux qui se trouble (formation de carbonate de calcium).'
      },
      subsections: [
        {
          subtitle: 'Déroulement de l\'expérience',
          content: [
            "• Étape 1 : On porte un morceau de fusain (charbon de bois constitué de carbone pur) à incandescence dans l'air, puis on le plonge dans un flacon rempli de dioxygène pur.",
            "• Observation : La combustion devient immédiatement très vive avec un éclat éblouissant et des projections d'étincelles.",
            "• Étape 2 : Une fois la combustion achevée, on verse de l'eau de chaux limpide dans le flacon et on agite.",
            "• Observation : L'eau de chaux blanchit et devient trouble : cela prouve formellement la formation de dioxyde de carbone (CO₂).",
            "• Bilan textuel officiel : Carbone + Dioxygène ➔ Dioxyde de carbone."
          ]
        }
      ]
    },
    {
      title: '2. Combustion complète et incomplète du butane (gaz domestique)',
      subsections: [
        {
          subtitle: 'Combustion complète (Excès de dioxygène)',
          content: [
            "• Conditions : Virolles du brûleur grandement ouvertes, apport massif d'air.",
            "• Aspect de la flamme : Flamme bleue, courte, très chaude (température > 1 200 °C) et peu éclairante.",
            "• Produits formés : Uniquement du dioxyde de carbone (CO₂) et de l'eau (H₂O sous forme de buée).",
            "• Aucun dépôt noir sous les casseroles."
          ]
        },
        {
          subtitle: 'Combustion incomplète (Défaut de dioxygène) et dangers',
          content: [
            "• Conditions : Brûleur encrassé ou aération insuffisante dans une pièce fermée.",
            "• Aspect de la flamme : Flamme jaune-orangée, longue, vacillante, moins chaude et très éclairante.",
            "• Produits formés : Noir de carbone (suie salissante sous les récipients) et MONOXYDE DE CARBONE (CO).",
            "• DANGER MORTEL : Le monoxyde de carbone (CO) est un gaz incolore, inodore et hautement toxique. Il se fixe sur l'hémoglobine du sang à la place de l'oxygène et peut provoquer l'asphyxie et la mort en quelques minutes. D'où la nécessité absolue d'aérer les cuisines et logements."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas (3 exercices complets)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Bilan et masses lors de la combustion du carbone',
          content: [
            "On brûle complètement une masse m₁ = 12 g de carbone pur dans un flacon contenant du dioxygène.",
            "Après combustion, tout le carbone a disparu et on a recueilli une masse m₂ = 44 g de dioxyde de carbone (CO₂).",
            "1. Écrire le bilan en toutes lettres de cette transformation chimique.",
            "2. Quels sont les réactifs ? Quel est le produit ?",
            "3. En appliquant la loi de conservation de la masse, calculer la masse m(O₂) de dioxygène consommée lors de cette combustion.",
            "4. Quel réactif simple permet de prouver que le gaz recueilli est bien du dioxyde de carbone ?"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Bilan textuel :",
            "   • Carbone + Dioxygène ➔ Dioxyde de carbone.",
            "2. Réactifs et produit :",
            "   • Réactifs (disparaissent) : Carbone (C) et Dioxygène (O₂).",
            "   • Produit (apparaît) : Dioxyde de carbone (CO₂).",
            "3. Calcul de la masse de dioxygène consommée :",
            "   • D'après la loi de conservation de la masse : Masse des réactifs = Masse des produits.",
            "   • m(Carbone) + m(Dioxygène) = m(Dioxyde de carbone).",
            "   • 12 g + m(O₂) = 44 g.",
            "   • m(O₂) = 44 g - 12 g = 32 g de dioxygène consommé.",
            "4. Test d'identification du CO₂ :",
            "   • On utilise de l'EAU DE CHAUX limpide qui se trouble (forme un précipité blanc laiteux) en présence de dioxyde de carbone."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Diagnostic d\'une gazinière et sécurité domestique',
          content: [
            "Dans une cuisine mal aérée à Thiès, une ménagère constate que le dessous de ses casseroles se recouvre d'une couche noire de suie et que la flamme de son réchaud à gaz est jaune.",
            "1. De quel type de combustion s'agit-il (complète ou incomplète) ? Justifier les deux indices qui permettent de l'affirmer.",
            "2. Quelle est la nature chimique de la matière noire déposée sous les casseroles ?",
            "3. Quel gaz invisible et mortel risque de s'accumuler dans la cuisine lors de cette combustion ?",
            "4. Quelles sont les deux mesures urgentes à prendre pour rétablir une combustion complète et sécurisée ?"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Type de combustion :",
            "   • Il s'agit d'une COMBUSTION INCOMPLÈTE.",
            "   • Les deux indices évidents sont : la couleur jaune-orangée de la flamme et le dépôt noir de suie.",
            "2. Nature du dépôt noir :",
            "   • Le dépôt noir est du NOIR DE CARBONE (ou suie), c'est-à-dire du carbone pur non brûlé par manque de dioxygène.",
            "3. Gaz dangereux formé :",
            "   • Le gaz toxique invisible et inodore formé est le MONOXYDE DE CARBONE (CO).",
            "4. Mesures de sécurité urgentes :",
            "   • Ouvrir immédiatement portes et fenêtres pour aérer la pièce et renouveler le dioxygène.",
            "   • Nettoyer les brûleurs du réchaud et régler la bague d'admission d'air (virole) pour obtenir une flamme bleue."
          ]
        },
        {
          subtitle: 'Exercice 3 : Énoncé — Combustion complète du butane et condensats',
          content: [
            "On approche une assiette froide au-dessus de la flamme bleue d'un brûleur à gaz butane en marche normale.",
            "1. Qu'observe-t-on sur la face inférieure de l'assiette ?",
            "2. Quel produit de la combustion est ainsi mis en évidence ?",
            "3. On place ensuite un entonnoir au-dessus de la flamme relié à un flacon d'eau de chaux. Qu'observe-t-on pour l'eau de chaux ?",
            "4. Écrire le bilan textuel complet de la combustion complète du butane."
          ]
        },
        {
          subtitle: 'Exercice 3 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Observation sur l'assiette froide :",
            "   • On observe la formation immédiate de buée (fines gouttelettes de liquide transparent).",
            "2. Produit identifié :",
            "   • La buée est de l'EAU (H₂O) formée à l'état de vapeur lors de la combustion et condensée au contact de la paroi froide.",
            "3. Observation pour l'eau de chaux :",
            "   • L'eau de chaux se trouble, ce qui confirme la présence de DIOXYDE DE CARBONE (CO₂).",
            "4. Bilan textuel officiel :",
            "   • Butane + Dioxygène ➔ Dioxyde de carbone + Eau."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Les combustions et leurs caractéristiques',
    root: 'Les Combustions',
    branches: [
      {
        name: 'COMBUSTION DU CARBONE',
        subtitle: 'Charbon de bois dans O₂',
        items: [
          'Réactifs : Carbone C + Dioxygène O₂',
          'Produit : Dioxyde de carbone CO₂',
          'Test caractéristique : Eau de chaux troublée'
        ]
      },
      {
        name: 'COMBUSTION COMPLÈTE DU BUTANE',
        subtitle: 'Excès d\'air (Flamme bleue)',
        items: [
          'Très chaude, non salissante',
          'Produits : CO₂ + Eau H₂O',
          'Rendement thermique maximal'
        ]
      },
      {
        name: 'COMBUSTION INCOMPLÈTE',
        subtitle: 'Défaut d\'air (Flamme jaune)',
        items: [
          'Moins chaude, dépôt de suie (carbone)',
          'Danger mortel : Monoxyde de carbone CO',
          'Aération obligatoire des locaux'
        ]
      }
    ]
  },
  conclusion:
    "Les combustions sont des transformations chimiques exothermiques majeures. La combustion complète génère du dioxyde de carbone et de l'eau, tandis que la combustion incomplète produit du noir de carbone et le redoutable monoxyde de carbone."
};

// -------------------------------------------------------------------------
// LEÇON C5 : LA RÉACTION CHIMIQUE
// -------------------------------------------------------------------------
export const LESSON_C5_CHIMIE_4EME: LessonContent = {
  id: 'chimie-4eme-lecon-c5',
  number: 'Leçon C5 (Chimie)',
  title: 'La réaction chimique',
  subject: 'Physique-Chimie',
  classLevel: '4ème',
  introduction:
    "Une transformation chimique est un phénomène au cours duquel des corps disparaissent (les réactifs) tandis que de nouveaux corps apparaissent (les produits). Énoncée au XVIIIe siècle par Antoine Lavoisier, la loi universelle de conservation de la masse stipule que « Rien ne se perd, rien ne se crée, tout se transforme ». Cette leçon détaille la conservation des atomes et la méthode pour équilibrer une équation chimique à l'aide des coefficients stœchiométriques.",
  fullText: `Leçon C5 : La réaction chimique

Introduction :
Une transformation chimique est un phénomène au cours duquel des corps disparaissent (les réactifs) tandis que de nouveaux corps apparaissent (les produits).

I. La Loi de conservation de la masse
Énoncée par Antoine Lavoisier : « Rien ne se perd, rien ne se crée, tout se transforme ». Au cours d'une réaction chimique, la masse totale des réactifs consommés est strictement égale à la masse totale des produits formés.
Cela implique que les atomes se conservent : tous les atomes présents dans les réactifs se réarrangent pour former les molécules des produits. Aucun atome ne disparaît, aucun atome n'apparaît.

II. Écriture et équilibrage d'une équation chimique
Pour respecter la conservation des atomes, on écrit une équation chimique en plaçant des nombres appelés coefficients stœchiométriques devant les formules chimiques.

Exemple 1 : Combustion du carbone
C + O₂ → CO₂
L'équation est déjà équilibrée : 1 atome de carbone et 2 atomes d'oxygène de chaque côté.

Exemple 2 : Combustion du dihydrogène
Non équilibrée : H₂ + O₂ → H₂O (2 atomes d'oxygène à gauche, seulement 1 à droite)
Équilibrée : 2 H₂ + O₂ → 2 H₂O
Vérification : 4 atomes d'hydrogène et 2 atomes d'oxygène à gauche comme à droite.

Figure 6 : Représentation moléculaire de la conservation des atomes au cours de la réaction :
- Réactifs : 2 H₂ + O₂ (4 atomes H blancs + 2 atomes O rouges)
- Produits : 2 H₂O (2 molécules d'eau comprenant 4 atomes H blancs et 2 atomes O rouges)`,
  sections: [
    {
      title: '1. La loi de conservation de la masse de Lavoisier',
      subsections: [
        {
          subtitle: 'Le principe fondamental de la chimie moderne',
          content: [
            "• Définition d'une réaction chimique : Réarrangement d'atomes où les liaisons des molécules initiales sont brisées pour former de nouvelles molécules.",
            "• Réactifs : Espèces chimiques présentes au départ qui réagissent et sont consommées.",
            "• Produits : Nouvelles espèces chimiques formées lors de la transformation.",
            "• Loi de Lavoisier : Masse totale des réactifs consommés = Masse totale des produits formés.",
            "• Au niveau microscopique : Le nombre et la nature de chaque atome restent strictement identiques entre le début et la fin de la réaction."
          ]
        }
      ]
    },
    {
      title: '2. Écriture et équilibrage d\'une équation chimique',
      image: {
        url: SVG_CHIMIE_FIG6_REACTION_MOLECULAIRE_EQUILIBREE,
        alt: 'Figure 6 : Représentation moléculaire de la conservation des atomes au cours de la réaction',
        caption:
          'Figure 6 : Modélisation particulaire de 2 H₂ + O₂ ➔ 2 H₂O. Les 4 atomes d\'hydrogène blancs et 2 atomes d\'oxygène rouges des réactifs se réarrangent pour former exactement 2 molécules d\'eau : aucun atome n\'est perdu ni créé.'
      },
      subsections: [
        {
          subtitle: 'Méthode pas-à-pas pour équilibrer une équation',
          content: [
            "• RÈGLE D'OR : On ne modifie JAMAIS les indices des formules chimiques (ex : on n'écrit jamais H₂O₂ pour équilibrer l'eau !).",
            "• RÈGLE D'ACTION : On ajuste uniquement les COEFFICIENTS placés devant les formules chimiques.",
            "• Exemple type : Combustion du dihydrogène :",
            "  1. Équation brute : H₂ + O₂ ➔ H₂O.",
            "  2. Constat : 2 atomes O à gauche mais seulement 1 atome O à droite.",
            "  3. Étape 1 : On place le coefficient 2 devant H₂O : H₂ + O₂ ➔ 2 H₂O (maintenant 2 O à droite, mais 4 H).",
            "  4. Étape 2 : On place le coefficient 2 devant H₂ à gauche : 2 H₂ + O₂ ➔ 2 H₂O.",
            "  5. Vérification finale : 4 atomes H et 2 atomes O de part et d'autre de la flèche !"
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application résolus pas-à-pas (3 exercices complets)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Équilibrage d\'équations chimiques fondamentales',
          content: [
            "Équilibrer les quatre équations chimiques suivantes en détaillant le comptage des atomes de chaque élément :",
            "a) Combustion du carbone : C + O₂ ➔ CO₂",
            "b) Formation de l'eau : H₂ + O₂ ➔ H₂O",
            "c) Oxydation du fer : Fe + O₂ ➔ Fe₂O₃",
            "d) Combustion du méthane : CH₄ + O₂ ➔ CO₂ + H₂O"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique pas-à-pas',
          content: [
            "a) C + O₂ ➔ CO₂ :",
            "   • À gauche : 1 C, 2 O. À droite : 1 C, 2 O.",
            "   • L'équation est DÉJÀ ÉQUILIBRÉE : C + O₂ ➔ CO₂.",
            "b) H₂ + O₂ ➔ H₂O :",
            "   • Pour 2 O à gauche, il faut 2 H₂O à droite (➔ 4 H). On compense avec 2 H₂ à gauche :",
            "   • Équation équilibrée : 2 H₂ + O₂ ➔ 2 H₂O.",
            "c) Fe + O₂ ➔ Fe₂O₃ :",
            "   • À droite, Fe₂O₃ a 3 oxygènes (impair). Le plus petit multiple commun de 2 et 3 est 6 O :",
            "   • On prend 2 Fe₂O₃ à droite (4 Fe et 6 O), d'où 3 O₂ et 4 Fe à gauche :",
            "   • Équation équilibrée : 4 Fe + 3 O₂ ➔ 2 Fe₂O₃.",
            "d) CH₄ + O₂ ➔ CO₂ + H₂O :",
            "   • Carbone : 1 C à gauche, 1 C à droite (équilibré).",
            "   • Hydrogène : 4 H à gauche (CH₄), donc 2 H₂O à droite (2 × 2 = 4 H).",
            "   • Oxygène : À droite on a 2 O (dans CO₂) + 2 O (dans 2 H₂O) = 4 O au total. Il faut donc 2 O₂ à gauche :",
            "   • Équation équilibrée : CH₄ + 2 O₂ ➔ CO₂ + 2 H₂O."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Loi de Lavoisier et calcul de masse des réactifs',
          content: [
            "On réalise l'attaque de m₁ = 6,5 g de zinc métallique (Zn) par une solution d'acide chlorhydrique.",
            "Au cours de la réaction chimique, il se forme du chlorure de zinc et un dégagement de dihydrogène gazeux (H₂).",
            "Après réaction totale du zinc :",
            "• La masse d'acide consommée est m₂ = 7,3 g.",
            "• La masse de chlorure de zinc produite est m₃ = 13,6 g.",
            "1. Quels sont les réactifs de cette réaction ? Quels sont les produits ?",
            "2. Énoncer la loi de Lavoisier.",
            "3. Calculer la masse m(H₂) de dihydrogène gazeux qui s'est échappée."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Identification :",
            "   • Réactifs consommés : Zinc (Zn) et Acide chlorhydrique.",
            "   • Produits formés : Chlorure de zinc et Dihydrogène (H₂).",
            "2. Énoncé de la loi de Lavoisier :",
            "   • « Rien ne se perd, rien ne se crée, tout se transforme ». La masse totale des réactifs consommés est strictement égale à la masse totale des produits formés.",
            "3. Calcul de la masse de dihydrogène m(H₂) :",
            "   • m(réactifs) = m(produits)",
            "   • m(zinc) + m(acide) = m(chlorure de zinc) + m(dihydrogène)",
            "   • 6,5 g + 7,3 g = 13,6 g + m(H₂)",
            "   • 13,8 g = 13,6 g + m(H₂)",
            "   • m(H₂) = 13,8 g - 13,6 g = 0,2 g de dihydrogène échappé."
          ]
        },
        {
          subtitle: 'Exercice 3 : Énoncé — Interprétation moléculaire et bilan stœchiométrique',
          content: [
            "On considère la réaction de combustion du monoxyde de carbone avec l'équation :",
            "2 CO + O₂ ➔ 2 CO₂",
            "1. Vérifier que cette équation respecte rigoureusement la conservation des atomes.",
            "2. Si l'on fait réagir 100 molécules de monoxyde de carbone (CO) :",
            "   a. Combien de molécules de dioxygène (O₂) sont nécessaires pour une réaction complète ?",
            "   b. Combien de molécules de dioxyde de carbone (CO₂) obtient-on ?",
            "3. Représenter schématiquement cette réaction avec les sphères colorées des modèles moléculaires."
          ]
        },
        {
          subtitle: 'Exercice 3 : Corrigé méthodique pas-à-pas',
          content: [
            "1. Vérification de la conservation des atomes :",
            "   • Côté réactifs (gauche) : 2 atomes de Carbone (dans 2 CO) et (2 × 1) + 2 = 4 atomes d'Oxygène.",
            "   • Côté produits (droite) : 2 atomes de Carbone et 2 × 2 = 4 atomes d'Oxygène.",
            "   • Le nombre d'atomes de chaque élément est rigoureusement identique : conservation parfaite.",
            "2. Proportions moléculaires :",
            "   a. D'après les coefficients stœchiométriques, il faut 1 molécule de O₂ pour 2 molécules de CO.",
            "      • Pour 100 molécules de CO, il faut : 100 / 2 = 50 molécules de O₂.",
            "   b. Le coefficient de CO₂ étant égal à celui de CO (ratio 2 pour 2, soit 1 pour 1), on obtient exactement 100 molécules de CO₂.",
            "3. Modélisation particulaire :",
            "   • 2 couples (1 sphère noire + 1 sphère rouge) + 1 doublet (2 sphères rouges) ➔ 2 trios linéaires (1 sphère rouge + 1 sphère noire + 1 sphère rouge)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'La réaction chimique et lois de conservation',
    root: 'Réaction Chimique',
    branches: [
      {
        name: 'LOI DE LAVOISIER',
        subtitle: 'Conservation de la masse',
        items: [
          '« Rien ne se perd, rien ne se crée »',
          'Masse des réactifs = Masse des produits',
          'Conservation absolue des atomes'
        ]
      },
      {
        name: 'ÉQUATION CHIMIQUE',
        subtitle: 'Symboles et coefficients',
        items: [
          'Réactifs à gauche ➔ Produits à droite',
          'Ajustement par coefficients stœchiométriques',
          'Interdiction absolue de modifier les indices'
        ]
      },
      {
        name: 'RÉARRANGEMENT PARTICULAIRE',
        subtitle: 'Échelle microscopique',
        items: [
          'Rupture des liaisons initiales',
          'Formation de nouvelles liaisons chimiques',
          'Même nombre d\'atomes de chaque espèce'
        ]
      }
    ]
  },
  conclusion:
    "La réaction chimique réorganise les atomes des réactifs pour engendrer les molécules des produits sans aucune perte ni création de matière, conformément à la loi immortelle d'Antoine Lavoisier."
};
