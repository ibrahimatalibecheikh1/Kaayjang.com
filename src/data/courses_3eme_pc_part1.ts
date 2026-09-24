import { LessonContent } from './courses';
import {
  SVG_PC3_FIG1_SOLUTIONS,
  SVG_PC3_FIG2_ACIDES_BASES,
  SVG_PC3_FIG3_METAUX
} from './diagrams_3eme_pc';

// =========================================================================
// COURS COMPLET DE PHYSIQUE-CHIMIE 3ÈME — PREMIÈRE PARTIE : CHIMIE (LEÇONS 1 À 3)
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (BFEM Sénégal)
// Leçons approfondies et détaillées avec protocoles expérimentaux obligatoires et figures
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 1 : NOTION DE SOLUTION AQUEUSE
// -------------------------------------------------------------------------
export const LESSON_1_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-1',
  number: 'Leçon 1 (Chimie)',
  title: 'Notion de solution aqueuse : dissolution, concentration et dilution',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Les solutions aqueuses sont au cœur de la chimie, de la biologie, de la pharmacie et des applications industrielles courantes au Sénégal (eaux potables de la Sen'Eau, sérum physiologique, engrais liquides). Une solution aqueuse est un mélange liquide homogène obtenu en dissolvant une substance appelée soluté dans de l'eau, qui agit comme solvant. Cette leçon fondamentale approfondit les notions de dissolution, de saturation, les expressions mathématiques de la concentration massique (Cm) et de la concentration molaire (C), la relation de passage entre ces deux grandeurs, ainsi que le protocole opératoire rigoureux de dilution d'une solution mère.",
  fullText: `Leçon 1 : Notion de solution aqueuse : dissolution, concentration et dilution

Introduction :
Une solution aqueuse est un mélange homogène obtenu par dissolution d'une espèce chimique (soluté) dans l'eau liquide (solvant).

I. Définitions fondamentales
1. Solvant, soluté et solution :
- Solvant : C'est le liquide majoritaire dans lequel on dissout le composé. Lorsque le solvant est l'eau, la solution est dite aqueuse.
- Soluté : C'est le corps solide, liquide ou gazeux que l'on dissout (exemples : chlorure de sodium NaCl, saccharose C₁₂H₂₂O₁₁, sulfate de cuivre CuSO₄, acide chlorhydrique gazeux).
- Solution : C'est le mélange homogène résultant de la dispersion des molécules ou des ions du soluté au milieu des molécules d'eau.

2. Solubilité et saturation :
La solubilité est la masse maximale de soluté que l'on peut dissoudre dans un litre d'eau à une température donnée (en g/L).
- Solution non saturée : Tout le soluté introduit est dissous.
- Solution saturée : L'eau ne peut plus dissoudre de soluté supplémentaire à cette température. Tout apport additionnel forme un dépôt solide au fond du récipient.

II. Expressions de la concentration
1. Concentration massique (Cm) :
C'est le quotient de la masse m de soluté dissous par le volume total V de la solution obtenue.
Formule : Cm = m / V
Unités : m en grammes (g), V en litres (L), Cm en grammes par litre (g/L).

2. Concentration molaire (C) :
C'est le quotient de la quantité de matière n (nombre de moles) de soluté dissous par le volume total V de solution.
Formule : C = n / V
Unités : n en moles (mol), V en litres (L), C en moles par litre (mol/L).

3. Relation fondamentale entre Cm et C :
Sachant que le nombre de moles n est lié à la masse m et à la masse molaire M par la relation n = m / M, on a :
m = n × M
En remplaçant m dans Cm = m / V, on obtient :
Cm = (n × M) / V = (n / V) × M
D'où la relation essentielle du BFEM :
Cm = C × M  (avec M en g/mol).

III. La dilution d'une solution aqueuse
Diluer une solution mère de concentration C₀ consiste à lui ajouter de l'eau distillée pour obtenir une solution fille moins concentrée de concentration C₁ (avec C₁ < C₀).
Lors d'une dilution, la quantité de matière de soluté se conserve intégralement :
n(mère) = n(fille)  ⟺  C₀ × V₀ = C₁ × V₁
Le facteur de dilution F est donné par : F = C₀ / C₁ = V₁ / V₀ (F > 1).`,
  sections: [
    {
      title: '1. Définitions et protocoles de préparation (Dissolution & Dilution)',
      image: {
        url: SVG_PC3_FIG1_SOLUTIONS,
        alt: 'Figure 1 : Préparation de solutions aqueuses — Dissolution et Dilution',
        caption:
          'Figure 1 : Montage et étapes méthodologiques pour la préparation d\'une solution aqueuse : A. Dissolution par pesée et ajustement au trait de jauge d\'une fiole jaugée. B. Dilution par prélèvement à la pipette jaugée munie d\'une pro-pipette et ajout d\'eau distillée.'
      },
      subsections: [
        {
          subtitle: 'Protocole expérimental obligatoire n°1 : Préparation d\'une solution par dissolution',
          content: [
            "• Matériel et réactifs requis : Balance électronique de précision (au 0,01 g), coupelle de pesée ou verre de montre, spatule, entonnoir à solide, fiole jaugée de volume V (ex : 100 mL), pissette d'eau distillée, soluté solide pur (ex : chlorure de sodium NaCl).",
            "• Étape 1 (Pesée précise) : Allumer la balance, poser la coupelle et appuyer sur le bouton TARE (zéro). À l'aide de la spatule, peser très exactement la masse m calculée.",
            "• Étape 2 (Introduction dans la fiole) : Placer l'entonnoir sur le col de la fiole jaugée. Verser délicatement le solide pesé. Rincer soigneusement la coupelle et l'entonnoir avec la pissette d'eau distillée pour récupérer chaque grain sans perte.",
            "• Étape 3 (Dissolution intermédiaire) : Remplir la fiole jaugée aux deux tiers (2/3) avec de l'eau distillée. Boucher hermétiquement la fiole et agiter par mouvements circulaires et de bas en haut jusqu'à la disparition complète des cristaux de soluté.",
            "• Étape 4 (Ajustement au trait de jauge) : Compléter à l'aide de la pissette d'eau distillée, puis terminer au compte-gouttes (pipette Pasteur) jusqu'à ce que le bas du ménisque liquide vienne tangenter très exactement le trait de jauge horizontal à hauteur des yeux.",
            "• Étape 5 (Homogénéisation finale) : Reboucher la fiole jaugée et retourner plusieurs fois pour garantir une parfaite homogénéité de la concentration."
          ]
        },
        {
          subtitle: 'Protocole expérimental obligatoire n°2 : Préparation d\'une solution fille par dilution',
          content: [
            "• Objectif : Préparer un volume V₁ d'une solution fille de concentration C₁ à partir d'une solution mère de concentration C₀.",
            "• Calcul préalable : V₀ = (C₁ × V₁) / C₀. C'est le volume précis de solution mère à prélever.",
            "• Étape 1 : Verser un peu de solution mère dans un bécher propre et sec (ne jamais pipeter directement dans le flacon de réserve).",
            "• Étape 2 : Prélever le volume V₀ à l'aide d'une pipette jaugée munie de sa poire d'aspiration (pro-pipette). Ajuster le bas du ménisque au trait de jauge supérieur de la pipette.",
            "• Étape 3 : Transférer le volume V₀ prélevé dans une fiole jaugée de volume V₁.",
            "• Étape 4 : Ajouter de l'eau distillée aux deux tiers, agiter, puis compléter jusqu'au trait de jauge de la fiole. Reboucher et agiter pour homogénéiser."
          ]
        }
      ]
    },
    {
      title: '2. Formules et grandeurs physiques fondamentales',
      subsections: [
        {
          subtitle: 'Tableau récapitulatif des grandeurs et unités du Système International',
          content: [
            "• Masse du soluté (m) : exprimée en grammes (g) ou milligrammes (mg).",
            "• Volume de la solution (V) : exprimé en litres (L) ou millilitres (1 L = 1 000 mL = 1 dm³).",
            "• Masse molaire (M) : somme des masses molaires atomiques des atomes de la molécule, exprimée en grammes par mole (g/mol). Exemple : M(NaCl) = 23 + 35,5 = 58,5 g/mol.",
            "• Quantité de matière (n) : exprimée en moles (mol). Formule : n = m / M.",
            "• Concentration massique (Cm) : Cm = m / V (en g/L).",
            "• Concentration molaire (C) : C = n / V (en mol/L).",
            "• Relation passerelle : Cm = C × M  ⟺  C = Cm / M.",
            "• Règle de dilution : n(prélevé) = n(fille) ⟺ C₀ × V₀ = C₁ × V₁ ⟺ Cm₀ × V₀ = Cm₁ × V₁."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Préparation d\'une solution de sulfate de cuivre CuSO₄',
          content: [
            "Un élève de 3ème veut préparer au laboratoire un volume V = 250 mL d'une solution de sulfate de cuivre CuSO₄ de concentration molaire C = 0,2 mol/L.",
            "Données des masses molaires atomiques : M(Cu) = 64 g/mol ; M(S) = 32 g/mol ; M(O) = 16 g/mol.",
            "1. Calculer la masse molaire M du sulfate de cuivre anhydre CuSO₄.",
            "2. Déterminer la concentration massique Cm de cette solution.",
            "3. En déduire la masse m de solide pur qu'il doit peser sur sa balance électronique.",
            "4. Nommer la verrerie indispensable pour réussir cette opération."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique et rédigé',
          content: [
            "1. Calcul de la masse molaire M(CuSO₄) :",
            "   M = M(Cu) + M(S) + 4 × M(O) = 64 + 32 + (4 × 16) = 96 + 64 = 160 g/mol.",
            "2. Calcul de la concentration massique Cm :",
            "   Cm = C × M = 0,2 mol/L × 160 g/mol = 32 g/L.",
            "3. Calcul de la masse m à peser :",
            "   Volume V = 250 mL = 0,250 L.",
            "   m = Cm × V = 32 g/L × 0,250 L = 8 g (ou m = n × M = C × V × M = 0,2 × 0,250 × 160 = 8 g).",
            "   Il doit donc peser exactement 8,00 g de cristaux de sulfate de cuivre.",
            "4. Verrerie indispensable : coupelle de pesée, spatule, entonnoir à solide, fiole jaugée de 250 mL et pissette d'eau distillée."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Dilution et facteur de dilution',
          content: [
            "On dispose d'une solution commerciale d'hydroxyde de sodium de concentration C₀ = 2 mol/L.",
            "On désire préparer un volume V₁ = 500 mL d'une solution diluée de soude de concentration C₁ = 0,05 mol/L.",
            "1. Quel est le facteur de dilution F ?",
            "2. Calculer le volume V₀ de solution mère qu'il faut prélever.",
            "3. Décrire brièvement les étapes de manipulation."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé méthodique et rédigé',
          content: [
            "1. Facteur de dilution F :",
            "   F = C₀ / C₁ = 2 / 0,05 = 40. La solution mère est donc diluée 40 fois.",
            "2. Volume V₀ de solution mère à prélever :",
            "   Par conservation du soluté : C₀ × V₀ = C₁ × V₁ ➔ V₀ = (C₁ × V₁) / C₀.",
            "   V₀ = (0,05 × 500) / 2 = 25 / 2 = 12,5 mL.",
            "   (Vérification avec F : V₀ = V₁ / F = 500 / 40 = 12,5 mL).",
            "3. Description de la manipulation : À l'aide d'une pipette graduée de précision munie d'une poire, on prélève 12,5 mL de solution mère dans un bécher. On verse ce volume dans une fiole jaugée de 500 mL contenant déjà un fond d'eau distillée. On complète à l'eau distillée jusqu'au trait de jauge, on bouche et on homogénéise."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Notion de solution aqueuse et relations fondamentales',
    root: 'Solution Aqueuse',
    branches: [
      {
        name: 'DISSOLUTION',
        subtitle: 'Soluté solide + Eau',
        items: [
          'Soluté (corps dissous) + Solvant (Eau)',
          'Solution saturée si soluté en excès',
          'Verrerie : fiole jaugée, entonnoir, spatule'
        ]
      },
      {
        name: 'CONCENTRATIONS',
        subtitle: 'Massique et molaire',
        items: [
          'Massique : Cm = m / V (g/L)',
          'Molaire : C = n / V (mol/L)',
          'Lien direct : Cm = C × M'
        ]
      },
      {
        name: 'DILUTION',
        subtitle: 'Ajout de solvant',
        items: [
          'Conservation : C₀ × V₀ = C₁ × V₁',
          'Facteur de dilution : F = C₀ / C₁ > 1',
          'Verrerie : pipette jaugée + fiole jaugée'
        ]
      }
    ]
  },
  conclusion:
    "La maîtrise de la préparation des solutions aqueuses par dissolution ou dilution repose sur la conservation de la masse et de la quantité de matière. La formule Cm = C × M constitue une passerelle incontournable pour réussir tous les calculs du BFEM."
};

// -------------------------------------------------------------------------
// LEÇON 2 : ACIDES ET BASES
// -------------------------------------------------------------------------
export const LESSON_2_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-2',
  number: 'Leçon 2 (Chimie)',
  title: 'Acides et bases : notion de pH, indicateurs colorés et neutralisation',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Dans la vie quotidienne, nous manipulons constamment des substances acides (jus de citron, vinaigre, acide de batterie) et des substances basiques (savon de Marseille, eau de Javel, déboucheurs d'éviers à base de soude caustique). Le caractère acido-basique d'une solution aqueuse est quantifié par une grandeur sans unité : le pH (Potentiel Hydrogène), qui varie entre 0 et 14 à 25 °C. Cette leçon analyse le rôle des ions hydrogène (H⁺) et hydroxyde (OH⁻), le virage des indicateurs colorés usuels, ainsi que la réaction chimique de neutralisation acido-basique caractérisée par son dégagement de chaleur.",
  fullText: `Leçon 2 : Acides et bases : notion de pH, indicateurs colorés et neutralisation

Introduction :
Le pH est une grandeur essentielle permettant de mesurer l'acidité ou la basicité d'une solution aqueuse.

I. Notion de pH et échelle d'acidité
1. Définition du pH :
Le pH (Potentiel Hydrogène) est un nombre sans unité compris entre 0 et 14 (à 25 °C) qui indique la concentration en ions hydrogène H⁺ (ou hydronium H₃O⁺) dissous dans l'eau.
- Solution acide : pH < 7. Elle contient une majorité d'ions H⁺ par rapport aux ions OH⁻. Plus le pH est proche de 0, plus la solution est fortement acide.
- Solution neutre : pH = 7. Elle contient autant d'ions H⁺ que d'ions OH⁻ (exemple : l'eau pure distillée).
- Solution basique : pH > 7. Elle contient une majorité d'ions hydroxyde OH⁻ par rapport aux ions H⁺. Plus le pH est proche de 14, plus la solution est fortement basique.

2. Moyens de mesure du pH :
- Le papier indicateur de pH : imprégné de colorants, il prend une couleur spécifique que l'on compare à un nuancier gradué (précision à 1 unité près).
- Le pH-mètre : appareil électronique muni d'une sonde qui affiche instantanément la valeur numérique du pH au centième près (haute précision).

II. Les indicateurs colorés
Un indicateur coloré est une molécule dont la couleur dépend de la valeur du pH du milieu.
1. Le Bleu de Bromothymol (BBT) :
- En milieu acide (pH < 6,0) : couleur JAUNE.
- En zone de virage / neutralité (6,0 ≤ pH ≤ 7,6) : couleur VERTE.
- En milieu basique (pH > 7,6) : couleur BLEUE.

2. L'Hélianthine (Méthylorange) :
- En milieu acide (pH < 3,1) : couleur ROUGE.
- En milieu basique (pH > 4,4) : couleur JAUNE.

3. La Phénolphtaléine :
- En milieu acide et neutre (pH < 8,2) : INCOLORE.
- En milieu basique (pH > 10,0) : ROSE VIOLACÉ (fuchsia).

III. Réaction de neutralisation acido-basique
Lorsqu'on verse progressivement une solution acide (acide chlorhydrique : H⁺ + Cl⁻) dans une solution basique (hydroxyde de sodium : Na⁺ + OH⁻), il se produit une réaction chimique appelée neutralisation :
- Équation globale avec ions spectateurs : (H⁺ + Cl⁻) + (Na⁺ + OH⁻) ➔ (Na⁺ + Cl⁻) + H₂O
- Équation ionique nette (réduite) : H⁺ + OH⁻ ➔ H₂O
- Propriétés de la neutralisation :
  * C'est une réaction exothermique (la température du mélange s'élève).
  * Les ions H⁺ et OH⁻ se détruisent mutuellement pour former de l'eau neutre.
  * À l'équivalence stœchiométrique, le pH devient rigoureusement égal à 7 (le BBT vire au vert).
  * L'évaporation de l'eau permet d'isoler des cristaux blancs de chlorure de sodium NaCl (sel de cuisine).`,
  sections: [
    {
      title: '1. Échelle de pH et réaction de neutralisation acido-basique',
      image: {
        url: SVG_PC3_FIG2_ACIDES_BASES,
        alt: 'Figure 2 : Échelle de pH et Réaction de neutralisation acido-basique',
        caption:
          'Figure 2 : Graduation du pH de 0 à 14 avec exemples usuels, couleurs des indicateurs colorés (BBT), montage expérimental de dosage avec thermomètre et équation de neutralisation : Acide + Base ➔ Sel + Eau.'
      },
      subsections: [
        {
          subtitle: 'Protocole expérimental obligatoire n°1 : Mesure du pH de solutions du quotidien',
          content: [
            "• Matériel : Boîte de papier pH avec nuancier étalon, coupelles propres, agitateur en verre, pissette d'eau distillée, solutions testées (jus de citron pressé, vinaigre d'alcool, boisson gazeuse, eau minérale, eau savonneuse, eau de Javel diluée, déboucheur Destop).",
            "• Mode opératoire : Découper de petits morceaux de papier pH (environ 1 cm) et les disposer sur une coupelle sèche. À l'aide de l'agitateur en verre préalablement rincé à l'eau distillée, déposer une goutte de la solution sur le papier.",
            "• Observations expérimentales :",
            "  - Jus de citron : le papier devient rouge-orange vif (pH ≈ 2,5 ➔ solution très acide).",
            "  - Vinaigre : coloration orange (pH ≈ 3,0 ➔ acide).",
            "  - Eau distillée : coloration vert pâle (pH = 7,0 ➔ neutre).",
            "  - Eau de savon : coloration vert-bleu (pH ≈ 8,5 ➔ faiblement basique).",
            "  - Eau de Javel : coloration bleue intense (pH ≈ 11,5 ➔ très basique).",
            "• Règle de sécurité impérative : Le port de gants et de lunettes de protection est obligatoire lors de la manipulation des acides et des bases concentrés (danger de brûlures chimiques graves)."
          ]
        },
        {
          subtitle: 'Protocole expérimental obligatoire n°2 : Suivi de la neutralisation acide-base au BBT',
          content: [
            "• Matériel : Bécher de 100 mL, burette graduée de 25 mL sur potence, barreau aimanté et agitateur magnétique, thermomètre gradué au dixième de degré, acide chlorhydrique (HCl) à 0,1 mol/L, soude (NaOH) à 0,1 mol/L, flacon de BBT.",
            "• Dispositif expérimental : Verser 20 mL de solution d'acide chlorhydrique dans le bécher. Ajouter 3 gouttes de BBT : la solution prend une teinte JAUNE franche (milieu acide). Plonger le thermomètre et noter la température initiale (ex : T₀ = 25 °C).",
            "• Remplir la burette avec la solution de soude (hydroxyde de sodium).",
            "• Manipulation : Ouvrir le robinet de la burette et verser la soude goutte à goutte sous agitation continue. Observer simultanément la couleur du bécher et la colonne du thermomètre.",
            "• Observations capitales :",
            "  1. La température monte progressivement de 25 °C à 28,5 °C (réaction exothermique libérant de la chaleur).",
            "  2. À l'approche de 20 mL de soude versée, la coloration jaune vire soudainement au VERT olive stable (point d'équivalence : pH = 7, neutralisation exacte).",
            "  3. Si l'on continue d'ajouter de la soude en excès, la coloration devient immédiatement BLEUE (pH > 7, milieu devenu basique)."
          ]
        }
      ]
    },
    {
      title: '2. Sécurité et dilution des acides et des bases concentrés',
      subsections: [
        {
          subtitle: 'Règle d\'or du chimiste : « Ne jamais verser l\'eau dans l\'acide »',
          content: [
            "• Danger mortel : La dissolution d'un acide fort concentré (acide sulfurique H₂SO₄ ou acide chlorhydrique fumant) dans l'eau est extrêmement exothermique.",
            "• Si l'on verse quelques gouttes d'eau sur de l'acide pur concentré, l'eau s'échauffe instantanément au-delà de 100 °C et se vaporise brutalement, projetant des éclaboussures d'acide brûlant au visage.",
            "• La méthode réglementaire : On verse toujours l'acide goutte à goutte dans une grande quantité d'eau, et JAMAIS l'inverse (« L'eau dans l'acide, c'est le suicide ; l'acide dans l'eau, c'est le repos »)."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Neutralisation d\'une solution d\'acide chlorhydrique par la soude',
          content: [
            "Au laboratoire du collège, un élève introduit un volume Va = 20 mL d'une solution d'acide chlorhydrique de concentration Ca inconnue dans un bécher et ajoute quelques gouttes de BBT.",
            "Il verse à la burette une solution d'hydroxyde de sodium (soude) de concentration Cb = 0,1 mol/L.",
            "Le virage au vert du BBT est obtenu lorsqu'il a versé très exactement un volume Vb = 15 mL de soude.",
            "1. Écrire l'équation bilan moléculaire puis l'équation ionique réduite de la réaction.",
            "2. Pourquoi la température du mélange s'élève-t-elle au cours de l'expérience ?",
            "3. Établir la relation entre Ca, Va, Cb et Vb à l'équivalence, puis calculer la concentration Ca de l'acide.",
            "4. Si l'on évapore la totalité de l'eau du mélange neutre obtenu, quel résidu solide recueille-t-on ? Calculer sa masse."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique et rédigé',
          content: [
            "1. Équations de la réaction :",
            "   • Équation moléculaire : HCl + NaOH ➔ NaCl + H₂O.",
            "   • Équation ionique globale : (H⁺ + Cl⁻) + (Na⁺ + OH⁻) ➔ (Na⁺ + Cl⁻) + H₂O.",
            "   • Équation ionique réduite : H⁺ + OH⁻ ➔ H₂O.",
            "2. Élévation de température : La réaction entre les ions H⁺ et OH⁻ est une réaction exothermique qui libère de l'énergie thermique dans le milieu.",
            "3. Calcul de la concentration Ca :",
            "   À l'équivalence acido-basique, les quantités de matière d'acide et de base sont égales mole à mole :",
            "   n(acide) = n(base) ⟺ Ca × Va = Cb × Vb.",
            "   D'où : Ca = (Cb × Vb) / Va = (0,1 mol/L × 15 mL) / 20 mL = 1,5 / 20 = 0,075 mol/L.",
            "4. Masse du sel NaCl recueilli :",
            "   Le résidu blanc cristallisé est le chlorure de sodium NaCl.",
            "   n(NaCl) formé = n(base) = Cb × Vb = 0,1 × 0,015 L = 0,0015 mol.",
            "   M(NaCl) = 23 + 35,5 = 58,5 g/mol.",
            "   m(NaCl) = n × M = 0,0015 mol × 58,5 g/mol = 0,08775 g ≈ 88 mg."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Acides, bases et neutralisation acido-basique',
    root: 'Acides & Bases',
    branches: [
      {
        name: 'ÉCHELLE DU pH',
        subtitle: 'Mesure de 0 à 14',
        items: [
          'pH < 7 : Acide (richesse en H⁺)',
          'pH = 7 : Neutre (eau pure [H⁺]=[OH⁻])',
          'pH > 7 : Basique (richesse en OH⁻)'
        ]
      },
      {
        name: 'INDICATEURS',
        subtitle: 'Virage colorimétrique',
        items: [
          'BBT : Jaune (acide), Vert (neutre), Bleu (base)',
          'Hélianthine : Rouge (acide), Jaune (base)',
          'Phénolphtaléine : Incolore (acide), Rose (base)'
        ]
      },
      {
        name: 'NEUTRALISATION',
        subtitle: 'Acide + Base',
        items: [
          'H⁺ + OH⁻ ➔ H₂O (Exothermique)',
          'Sel formé : NaCl (évaporation)',
          'Relation équivalence : Ca × Va = Cb × Vb'
        ]
      }
    ]
  },
  conclusion:
    "La neutralisation acido-basique transforme les ions corrosifs H⁺ et OH⁻ en eau inoffensive et en sel minéral. L'équivalence Ca·Va = Cb·Vb est l'outil mathématique par excellence utilisé au BFEM pour doser une solution inconnue."
};

// -------------------------------------------------------------------------
// LEÇON 3 : PROPRIÉTÉS CHIMIQUES DE QUELQUES MÉTAUX
// -------------------------------------------------------------------------
export const LESSON_3_PC_3EME: LessonContent = {
  id: 'pc-3eme-lecon-3',
  number: 'Leçon 3 (Chimie)',
  title: 'Propriétés chimiques de quelques métaux : action des acides et identification des ions',
  subject: 'Physique-Chimie',
  classLevel: '3ème',
  introduction:
    "Les métaux tels que le fer, le zinc, le cuivre et l'aluminium sont omniprésents dans notre environnement technologique et domestique au Sénégal (toitures en tôle de zinc, ustensiles en aluminium, barres de fer à béton, fils électriques en cuivre). Pourtant, ces métaux ne réagissent pas de la même manière face aux agressions chimiques, notamment vis-à-vis des acides. Cette leçon étudie l'action de l'acide chlorhydrique sur le fer, le zinc et le cuivre, la mise en évidence du dihydrogène dégagé, ainsi que les réactions caractéristiques de précipitation par la soude permettant d'identifier avec certitude les ions métalliques en solution.",
  fullText: `Leçon 3 : Propriétés chimiques de quelques métaux : action des acides et identification des ions

Introduction :
L'attaque des métaux par les acides dilués permet de classer les métaux selon leur réactivité et de produire du dihydrogène gazeux.

I. Action de l'acide chlorhydrique sur les métaux usuels
1. Réaction avec le fer (Fe) :
Lorsqu'on verse une solution d'acide chlorhydrique sur de la paille de fer ou de la grenaille de fer :
- On observe une vive effervescence avec dégagement continu d'un gaz incolore et inodore.
- Le fer métallique est progressivement consommé (il disparaît).
- La solution initialement incolore prend une teinte vert pâle caractéristique des ions fer II (Fe²⁺).
- Équation bilan moléculaire : Fe + 2 HCl ➔ FeCl₂ + H₂
- Équation bilan ionique : Fe + 2(H⁺ + Cl⁻) ➔ (Fe²⁺ + 2Cl⁻) + H₂
- Équation ionique réduite : Fe + 2 H⁺ ➔ Fe²⁺ + H₂

2. Réaction avec le zinc (Zn) :
Le zinc réagit encore plus vigoureusement que le fer avec l'acide chlorhydrique :
- Dégagement abondant de bulles de gaz.
- La solution reste incolore et contient des ions zinc (Zn²⁺) et des ions chlorure (Cl⁻).
- Équation ionique réduite : Zn + 2 H⁺ ➔ Zn²⁺ + H₂

3. Inaction sur le cuivre (Cu) :
L'acide chlorhydrique dilué versé sur des tournures de cuivre rouge ne produit AUCUNE effervescence ni à froid, ni à chaud modéré. Le cuivre est un métal noble inattaquable par les ions H⁺.

II. Identification des produits de réaction
1. Caractérisation du gaz dihydrogène (H₂) :
En approchant une flamme (allumette enflammée) de l'orifice du tube à essai où se produit la réaction, on entend une petite détonation sèche caractéristique appelée « pop » ou « aboiement ». Ce test confirme la présence de dihydrogène H₂.

2. Identification des ions métalliques par l'hydroxyde de sodium (soude NaOH) :
Lorsqu'on verse quelques gouttes de soude dans un tube contenant une solution d'ions métalliques, il se forme un précipité solide floconneux caractéristique :
- Ion Fer II (Fe²⁺) : donne un précipité VERT de Fe(OH)₂ (hydroxyde de fer II). Ce précipité s'oxyde lentement à l'air pour devenir rouille.
- Ion Fer III (Fe³⁺) : donne un précipité ROUILLE d'hydroxyde de fer III Fe(OH)₃.
- Ion Cuivre II (Cu²⁺) : donne un précipité BLEU azur d'hydroxyde de cuivre II Cu(OH)₂.
- Ion Zinc (Zn²⁺) : donne un précipité BLANC gélatineux d'hydroxyde de zinc Zn(OH)₂ (soluble dans un excès de soude).`,
  sections: [
    {
      title: '1. Action des acides sur les métaux et tests de précipitation',
      image: {
        url: SVG_PC3_FIG3_METAUX,
        alt: 'Figure 3 : Action de HCl sur les métaux et identification des précipités',
        caption:
          'Figure 3 : Attaque du fer et du zinc par HCl avec test de détonation (« pop ») du dihydrogène, inertie du cuivre, et identification colorée des ions métalliques (Fe²⁺ vert, Fe³⁺ rouille, Cu²⁺ bleu, Zn²⁺ blanc gélatineux) par la soude NaOH.'
      },
      subsections: [
        {
          subtitle: 'Protocole expérimental obligatoire : Attaque des métaux par HCl et test au goulot',
          content: [
            "• Matériel : 3 tubes à essais étiquetés A, B, C sur portoir, pince en bois, boîte d'allumettes, solution d'acide chlorhydrique (environ 1 mol/L), grenaille de fer, morceaux de zinc, tournure de cuivre.",
            "• Étape 1 : Placer une pincée de limaille de fer dans le tube A, des grenailles de zinc dans le tube B, et des copeaux de cuivre dans le tube C.",
            "• Étape 2 : Verser environ 3 mL d'acide chlorhydrique dans chaque tube.",
            "• Étape 3 : Observer les réactions :",
            "  - Tube A (Fer) : Bulles de gaz et solution verdâtre.",
            "  - Tube B (Zinc) : Bulles très vives et solution limpide.",
            "  - Tube C (Cuivre) : Aucune effervescence, le liquide reste incolore et le cuivre conserve sa couleur rouge brillante.",
            "• Étape 4 (Test du pop) : Boucher le tube B quelques secondes avec le pouce pour accumuler le gaz dégagé, puis approcher une allumette enflammée de l'ouverture : un « POP ! » sec et sonore retentit instantanément (test exclusif du H₂)."
          ]
        },
        {
          subtitle: 'Protocole expérimental obligatoire : Caractérisation des ions formés par la soude',
          content: [
            "• Étape 1 : Filtrer le contenu du tube A (après réaction du fer) pour éliminer les débris de fer non réagis.",
            "• Étape 2 : Verser 2 mL du filtrat dans un tube à essai propre.",
            "• Étape 3 : Ajouter goutte à goutte une solution de soude (NaOH) : il apparaît immédiatement un précipité floconneux vert d'hydroxyde de fer II :",
            "  Fe²⁺ + 2 OH⁻ ➔ Fe(OH)₂ (solide vert).",
            "• Étape 4 : De même, avec le filtrat du tube B (zinc), l'ajout de soude produit un précipité blanc d'hydroxyde de zinc :",
            "  Zn²⁺ + 2 OH⁻ ➔ Zn(OH)₂ (solide blanc)."
          ]
        }
      ]
    },
    {
      title: '2. Équations chimiques et bilan de matière',
      subsections: [
        {
          subtitle: 'Analyse stœchiométrique des équations d\'oxydoréduction du BFEM',
          content: [
            "• Dans la réaction Fe + 2 H⁺ ➔ Fe²⁺ + H₂, 1 atome de fer réagit avec 2 ions hydrogène pour fournir 1 ion Fe²⁺ et 1 molécule de H₂.",
            "• À l'échelle molaire : 1 mole de fer (56 g) réagit avec 2 moles d'ions H⁺ pour produire 1 mole de dihydrogène (2 g, soit 22,4 L dans les CNTP ou 24 L à 25 °C).",
            "• Pour le zinc : 1 mole de zinc (65,4 g) donne 1 mole de H₂ (Zn + 2 H⁺ ➔ Zn²⁺ + H₂)."
          ]
        }
      ]
    },
    {
      title: '3. Exercices d\'application et annales résolus du BFEM (Sénégal)',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Attaque de la grenaille de fer par l\'acide chlorhydrique',
          content: [
            "On verse un excès d'acide chlorhydrique sur une masse m = 2,8 g de fer en poudre contenu dans un ballon.",
            "Données : M(Fe) = 56 g/mol ; Volume molaire des gaz dans les conditions de l'expérience : Vm = 24 L/mol.",
            "1. Décrire ce que l'on observe et préciser le test d'identification du gaz dégagé.",
            "2. Écrire l'équation ionique réduite de la réaction.",
            "3. Calculer la quantité de matière n(Fe) de fer ayant réagi.",
            "4. En déduire la quantité de matière puis le volume V(H₂) de dihydrogène recueilli.",
            "5. On prélève un échantillon de la solution finale et on y verse quelques gouttes de soude. Qu'observe-t-on ? Écrire l'équation de la réaction correspondante."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé méthodique et rédigé',
          content: [
            "1. Observations et test : On observe une effervescence (dégagement gazeux) et la disparition progressive de la poudre de fer. La solution devient vert pâle. En approchant une flamme du gaz, il se produit une petite détonation (« pop »), attestant qu'il s'agit de dihydrogène H₂.",
            "2. Équation ionique réduite : Fe + 2 H⁺ ➔ Fe²⁺ + H₂.",
            "3. Quantité de matière de fer :",
            "   n(Fe) = m / M = 2,8 g / 56 g/mol = 0,05 mol.",
            "4. Volume de dihydrogène produit :",
            "   D'après les coefficients stœchiométriques de l'équation, 1 mole de Fe produit 1 mole de H₂.",
            "   Donc : n(H₂) = n(Fe) = 0,05 mol.",
            "   V(H₂) = n(H₂) × Vm = 0,05 mol × 24 L/mol = 1,2 Litre de dihydrogène gazeux.",
            "5. Action de la soude sur la solution finale :",
            "   Il se forme un précipité floconneux vert d'hydroxyde de fer II.",
            "   Équation : Fe²⁺ + 2 OH⁻ ➔ Fe(OH)₂ (solide vert)."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'Propriétés chimiques des métaux et tests d\'identification',
    root: 'Métaux & Acides',
    branches: [
      {
        name: 'ATTAQUE PAR HCl',
        subtitle: 'Réactivité des métaux',
        items: [
          'Fer (Fe) : réaction vive ➔ H₂ + Fe²⁺ (vert pâle)',
          'Zinc (Zn) : réaction très vive ➔ H₂ + Zn²⁺',
          'Cuivre (Cu) : inerte à froid (aucune réaction)'
        ]
      },
      {
        name: 'TEST DU GAZ',
        subtitle: 'Dihydrogène H₂',
        items: [
          'Gaz incolore, inodore et très inflammable',
          'Test à la flamme : détonation « pop » caractéristique',
          'Rapport stœchiométrique : n(H₂) = n(métal)'
        ]
      },
      {
        name: 'TESTS À LA SOUDE',
        subtitle: 'Précipités d\'hydroxydes',
        items: [
          'Fe²⁺ + 2 OH⁻ ➔ Fe(OH)₂ (Vert)',
          'Fe³⁺ + 3 OH⁻ ➔ Fe(OH)₃ (Rouille)',
          'Cu²⁺ + 2 OH⁻ ➔ Cu(OH)₂ (Bleu)',
          'Zn²⁺ + 2 OH⁻ ➔ Zn(OH)₂ (Blanc)'
        ]
      }
    ]
  },
  conclusion:
    "L'action de l'acide chlorhydrique sur les métaux oxydables (Fe, Zn, Al) est une réaction génératrice de dihydrogène et d'ions métalliques, que l'on identifie sans équivoque grâce aux couleurs de leurs précipités d'hydroxydes avec la soude."
};
