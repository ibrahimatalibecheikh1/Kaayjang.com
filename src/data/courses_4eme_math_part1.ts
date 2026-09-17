import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — 4ÈME
// ACTIVITÉS NUMÉRIQUES — PROGRAMME OFFICIEL SÉNÉGALAIS & FRANCOPHONE
// PARTIE 1 : LEÇONS 1 À 4 (NOMBRES RELATIFS & ÉCRITURES FRACTIONNAIRES)
// DÉVELOPPEMENT INTÉGRAL, THÉORIE APPROFONDIE, RÈGLES FORMELLES, EXEMPLES
// ET 2 EXERCICES COMPLETS AVEC CORRIGÉS DÉTAILLÉS PAS-À-PAS PAR LEÇON
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 1 : NOMBRES RELATIFS — ADDITION ET SOUSTRACTION
// -------------------------------------------------------------------------
export const LESSON_1_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-1',
  number: 'Leçon 1',
  title: 'Nombres relatifs — Addition et soustraction',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "L'introduction des nombres relatifs permet de surmonter l'impossibilité de soustraire un nombre plus grand d'un nombre plus petit dans l'ensemble des entiers naturels. Utilisés au quotidien pour mesurer des températures au-dessous de zéro, des variations de bilans financiers, des altitudes négatives ou des charges électriques, les nombres relatifs constituent la clé de voûte de l'algèbre au collège. En classe de 4ème, l'élève approfondit le calcul sur les sommes algébriques, la suppression rigoureuse des parenthèses et l'utilisation fluide des distances à zéro.",
  fullText: `Leçon 1 : Nombres relatifs — Addition et soustraction

Introduction :
L'introduction des nombres relatifs permet de surmonter l'impossibilité de soustraire un nombre plus grand d'un nombre plus petit dans l'ensemble des entiers naturels. Utilisés au quotidien pour mesurer des températures au-dessous de zéro, des variations de bilans financiers, des altitudes négatives ou des charges électriques, les nombres relatifs constituent la clé de voûte de l'algèbre au collège. En classe de 4ème, l'élève approfondit le calcul sur les sommes algébriques, la suppression rigoureuse des parenthèses et l'utilisation fluide des distances à zéro.

1. Définition et repérage d'un nombre relatif
Un nombre relatif est constitué de deux éléments indissociables :
- Son signe : le signe '+' pour les nombres positifs (généralement omis devant un nombre isolé, ex: +5 = 5) et le signe '-' pour les nombres négatifs (ex: -7).
- Sa distance à zéro (ou valeur absolue) : c'est la distance géométrique qui sépare le point représentant ce nombre de l'origine O d'une droite graduée. Elle est toujours un nombre positif.
Exemple : Pour le nombre -8, le signe est négatif et la distance à zéro est 8. On note |-8| = 8.
Deux nombres relatifs sont dits opposés s'ils possèdent la même distance à zéro mais des signes contraires (ex: +14 et -14).

2. Somme de deux nombres relatifs
Règle 1 : Addition de deux nombres relatifs de même signe
Pour additionner deux nombres relatifs de même signe :
1. On conserve le signe commun aux deux nombres.
2. On additionne leurs distances à zéro.
Exemples détaillés :
• (+3) + (+5) = +(3 + 5) = +8
• (-4) + (-7) = -(4 + 7) = -11
• (-12,5) + (-7,3) = -(12,5 + 7,3) = -19,8

Règle 2 : Addition de deux nombres relatifs de signes contraires
Pour additionner deux nombres relatifs de signes contraires :
1. On repère le nombre ayant la plus grande distance à zéro et on conserve son signe pour le résultat final.
2. On soustrait la plus petite distance à zéro de la plus grande distance à zéro.
Exemples détaillés :
• (-9) + (+4) : la distance à zéro de -9 est 9, celle de +4 est 4. Comme 9 > 4, le résultat est négatif : -(9 - 4) = -5.
• (+12) + (-5) : 12 > 5, le résultat est positif : +(12 - 5) = +7.
• (-15) + (+23) = +(23 - 15) = +8.

Propriété fondamentale des opposés :
La somme de deux nombres relatifs opposés est toujours égale à zéro.
Pour tout nombre relatif a : a + (-a) = 0.
Exemple : (-14) + (+14) = 0 ; (+2,75) + (-2,75) = 0.

3. Soustraction de deux nombres relatifs
Règle fondamentale :
Soustraire un nombre relatif revient à additionner son opposé mathématique.
Pour tous nombres relatifs a et b :
a - b = a + (-b)
Cette règle permet de convertir immédiatement toute soustraction en une addition équivalente.
Exemples pas-à-pas :
• (+5) - (+8) = (+5) + (opposé de +8) = (+5) + (-8) = -3
• (-3) - (-7) = (-3) + (opposé de -7) = (-3) + (+7) = +4
• (-10) - (+15) = (-10) + (-15) = -25
• (+6) - (-9) = (+6) + (+9) = +15

4. Sommes algébriques et simplification d'écritures
Une somme algébrique est une suite continue d'additions et de soustractions de nombres relatifs.
Méthode de calcul rapide :
Étape 1 : Transformer toutes les soustractions en additions de l'opposé.
Étape 2 : Éliminer les signes d'addition et les parenthèses superflues :
  - Un signe '+' devant une parenthèse ne change pas le signe du nombre intérieur : +(+a) = a et +(-a) = -a.
  - Un signe '-' devant une parenthèse inverse le signe du nombre intérieur : -(+a) = -a et -(-a) = +a.
Étape 3 : Regrouper tous les termes positifs d'un côté et tous les termes négatifs de l'autre, puis calculer la somme de chaque groupe avant de conclure.

Exemple complet :
Soit à calculer S = (+7) - (+12) + (-5) - (-8) + (+4)
• Conversion : S = (+7) + (-12) + (-5) + (+8) + (+4)
• Écriture simplifiée : S = 7 - 12 - 5 + 8 + 4
• Regroupement des positifs : Positifs = 7 + 8 + 4 = 19
• Regroupement des négatifs : Négatifs = -12 - 5 = -17
• Bilan final : S = 19 - 17 = 2.

Exercice 1 : Calculs fondamentaux de sommes et différences
Énoncé :
1. Calculer les sommes suivantes :
   A = (+15) + (-8)
   B = (-24) + (-16)
   C = (-13,5) + (+19,2)
2. Effectuer les soustractions en détaillant le passage par l'addition de l'opposé :
   D = (+9) - (+17)
   E = (-11) - (-18)
   F = (-7,4) - (+5,6)
Corrigé détaillé pas-à-pas :
1. Calculs des sommes :
   • A = (+15) + (-8) : Le terme +15 a la plus grande distance à zéro (15 > 8). On prend le signe '+' et on soustrait : 15 - 8 = 7. Donc A = +7 (ou 7).
   • B = (-24) + (-16) : Les deux nombres ont le même signe '-'. On conserve le signe '-' et on additionne les distances : 24 + 16 = 40. Donc B = -40.
   • C = (-13,5) + (+19,2) : Le terme +19,2 a la plus grande distance à zéro (19,2 > 13,5). On prend le signe '+' et on soustrait : 19,2 - 13,5 = 5,7. Donc C = +5,7.
2. Soustractions avec addition de l'opposé :
   • D = (+9) - (+17) = (+9) + (-17) = -(17 - 9) = -8.
   • E = (-11) - (-18) = (-11) + (+18) = +(18 - 11) = +7.
   • F = (-7,4) - (+5,6) = (-7,4) + (-5,6) = -(7,4 + 5,6) = -13.

Exercice 2 : Sommes algébriques complexes et résolution de problème
Énoncé :
1. Simplifier l'écriture et calculer la somme algébrique :
   G = (-14) - (-9) + (+25) - (+18) + (-6) - (-11)
2. Problème : À Saint-Louis, la température relevée à 6h du matin est de -2°C.
   - À midi, elle a augmenté de 14°C.
   - À 19h, elle a baissé de 8°C par rapport à midi.
   - À minuit, elle a encore baissé de 5°C.
   Écrire l'expression traduisant l'évolution de la température et calculer la température finale à minuit.
Corrigé détaillé pas-à-pas :
1. Calcul de la somme algébrique G :
   • On transforme les soustractions en additions d'opposés :
     G = (-14) + (+9) + (+25) + (-18) + (-6) + (+11)
   • On simplifie les écritures : G = -14 + 9 + 25 - 18 - 6 + 11
   • Somme des nombres positifs : 9 + 25 + 11 = 45
   • Somme des nombres négatifs : (-14) + (-18) + (-6) = -38
   • Calcul final : G = 45 - 38 = 7.
2. Résolution du problème de température :
   • Expression numérique : T = (-2) + (+14) - (+8) - (+5)
   • Transformation en suite d'additions : T = (-2) + (+14) + (-8) + (-5)
   • Écriture simplifiée : T = -2 + 14 - 8 - 5
   • Regroupement : Positifs = 14 ; Négatifs = -2 - 8 - 5 = -15
   • Calcul : T = 14 - 15 = -1°C.
   Conclusion : La température finale à minuit est de -1°C.

Conclusion :
La maîtrise de l'addition et de la soustraction des nombres relatifs repose sur l'assimilation parfaite de deux mécanismes : la gestion des distances à zéro selon la parité des signes et la règle universelle transformant toute soustraction en addition de l'opposé. Ces compétences garantissent la réussite des calculs algébriques plus avancés de la classe de 4ème.`,
  sections: [
    {
      title: '1. Fondements et repérage des nombres relatifs',
      content: [
        "Un nombre relatif est caractérisé par son signe (+ ou -) et sa distance à zéro (sa valeur absolue).",
        "Deux nombres ayant la même distance à zéro mais des signes opposés sont appelés des nombres opposés (ex: -14 et +14).",
        "Sur une droite graduée, la distance à zéro correspond exactement à la longueur séparant le point de l'origine O."
      ]
    },
    {
      title: '2. Règles opératoires : Addition des relatifs',
      content: [
        "Règle des signes identiques : On conserve le signe commun et on additionne les distances à zéro : (+3) + (+5) = +8 et (-4) + (-7) = -11.",
        "Règle des signes contraires : On prend le signe du terme qui possède la plus grande distance à zéro, puis on calcule la différence entre la plus grande et la plus petite distance à zéro : (-9) + (+4) = -5.",
        "Propriété des opposés : Pour tout nombre a, a + (-a) = 0."
      ]
    },
    {
      title: '3. Règles opératoires : Soustraction et sommes algébriques',
      content: [
        "Théorème de la soustraction : Soustraire un nombre relatif revient à additionner son opposé : a - b = a + (-b).",
        "Exemples : (+5) - (+8) = (+5) + (-8) = -3 ; (-3) - (-7) = (-3) + (+7) = +4.",
        "Somme algébrique : Suite d'additions et de soustractions. Pour la calculer rapidement, on élimine les parenthèses superflues, on regroupe les termes positifs d'un côté et les termes négatifs de l'autre."
      ],
      table: {
        headers: ['Opération initiale', 'Transformation avec opposé', 'Écriture simplifiée', 'Résultat'],
        rows: [
          ['(+12) - (+15)', '(+12) + (-15)', '12 - 15', '-3'],
          ['(-8) - (-14)', '(-8) + (+14)', '-8 + 14', '+6'],
          ['(-9) - (+6)', '(-9) + (-6)', '-9 - 6', '-15'],
          ['(+7) - (-11)', '(+7) + (+11)', '7 + 11', '+18']
        ]
      }
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calculs de sommes et différences',
          content: [
            "1. Calculer les sommes suivantes :",
            "   A = (+15) + (-8)",
            "   B = (-24) + (-16)",
            "   C = (-13,5) + (+19,2)",
            "2. Effectuer les soustractions suivantes en écrivant l'étape intermédiaire avec l'opposé :",
            "   D = (+9) - (+17)",
            "   E = (-11) - (-18)",
            "   F = (-7,4) - (+5,6)"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "• A = (+15) + (-8) : Le terme +15 a la plus grande distance à zéro (15 > 8). Le signe est donc '+' et on effectue 15 - 8 = 7. Résultat : A = 7.",
            "• B = (-24) + (-16) : Deux nombres de même signe négatif. On garde le '-' et on additionne les distances : 24 + 16 = 40. Résultat : B = -40.",
            "• C = (-13,5) + (+19,2) : 19,2 > 13,5 donc le signe est '+'. Différence : 19,2 - 13,5 = 5,7. Résultat : C = +5,7.",
            "• D = (+9) - (+17) = (+9) + (-17) = -(17 - 9) = -8.",
            "• E = (-11) - (-18) = (-11) + (+18) = +(18 - 11) = +7.",
            "• F = (-7,4) - (+5,6) = (-7,4) + (-5,6) = -(7,4 + 5,6) = -13."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Somme algébrique et problème concret',
          content: [
            "1. Calculer la somme algébrique suivante en détaillant les regroupements :",
            "   G = (-14) - (-9) + (+25) - (+18) + (-6) - (-11)",
            "2. Problème : À Saint-Louis, la température relevée à 6h du matin est de -2°C.",
            "   - À midi, elle a augmenté de 14°C.",
            "   - À 19h, elle a baissé de 8°C par rapport à midi.",
            "   - À minuit, elle a encore baissé de 5°C.",
            "   Écrire l'expression globale et déterminer la température exacte à minuit."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Calcul de G :",
            "   • Transformation en additions : G = (-14) + (+9) + (+25) + (-18) + (-6) + (+11)",
            "   • Écriture sans parenthèses : G = -14 + 9 + 25 - 18 - 6 + 11",
            "   • Total des termes positifs : 9 + 25 + 11 = 45",
            "   • Total des termes négatifs : -14 - 18 - 6 = -38",
            "   • Résultat final : G = 45 - 38 = 7.",
            "2. Résolution du problème :",
            "   • Expression mathématique : T = (-2) + (+14) - (+8) - (+5) = -2 + 14 - 8 - 5",
            "   • Regroupement : 14 - (2 + 8 + 5) = 14 - 15 = -1°C.",
            "   • Conclusion : La température à minuit est de -1°C."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : NOMBRES RELATIFS — ADDITION & SOUSTRACTION',
    root: 'NOMBRES RELATIFS',
    branches: [
      {
        name: 'ADDITION',
        subtitle: 'Même signe vs Signes contraires',
        items: [
          'Même signe : signe commun + somme des distances',
          'Signes contraires : signe de la plus grande distance + différence',
          'Deux opposés : somme toujours égale à zéro (a + (-a) = 0)'
        ]
      },
      {
        name: 'SOUSTRACTION',
        subtitle: "L'addition de l'opposé",
        items: [
          'Règle d\'or : a - b = a + (-b)',
          '-(+b) devient +(-b)',
          '-(-b) devient +(+b)'
        ]
      },
      {
        name: 'SOMMES ALGÉBRIQUES',
        subtitle: 'Méthode pratique',
        items: [
          'Supprimer parenthèses superflues',
          'Regrouper les termes positifs ensemble',
          'Regrouper les termes négatifs ensemble',
          'Faire la soustraction finale'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, l'addition et la soustraction des nombres relatifs s'appuient sur deux principes immuables : l'évaluation des distances à zéro et le remplacement systématique d'une soustraction par l'addition de l'opposé. Ces automatismes constituent le socle requis pour aborder sereinement la multiplication et la division."
};

// -------------------------------------------------------------------------
// LEÇON 2 : NOMBRES RELATIFS — MULTIPLICATION ET DIVISION
// -------------------------------------------------------------------------
export const LESSON_2_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-2',
  number: 'Leçon 2',
  title: 'Nombres relatifs — Multiplication et division',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Après avoir appris à combiner les nombres relatifs par l'addition et la soustraction, la classe de 4ème introduit la multiplication et la division relatives. Ces opérations obéissent à la célèbre « règle des signes », formalisée historiquement pour préserver la distributivité de la multiplication sur l'addition. Maîtriser cette règle permet de simplifier des expressions complexes, de déterminer rapidement le signe d'un produit comportant de multiples facteurs et d'appliquer avec exactitude les priorités opératoires.",
  fullText: `Leçon 2 : Nombres relatifs — Multiplication et division

Introduction :
Après avoir appris à combiner les nombres relatifs par l'addition et la soustraction, la classe de 4ème introduit la multiplication et la division relatives. Ces opérations obéissent à la célèbre « règle des signes », formalisée historiquement pour préserver la distributivité de la multiplication sur l'addition. Maîtriser cette règle permet de simplifier des expressions complexes, de déterminer rapidement le signe d'un produit comportant de multiples facteurs et d'appliquer avec exactitude les priorités opératoires.

1. Produit de deux nombres relatifs
Règle des signes pour le produit :
Pour multiplier deux nombres relatifs :
1. On détermine le signe du produit grâce à la règle des signes :
   • Le produit de deux nombres de MÊME SIGNE est toujours POSITIF (+ par + = + et - par - = +).
   • Le produit de deux nombres de SIGNES CONTRAIRES est toujours NÉGATIF (+ par - = - et - par + = -).
2. On multiplie ensuite les distances à zéro entre elles.

Exemples détaillés :
• (-4) × (-5) = +20 (ou 20) : même signe '-', résultat positif.
• (+6) × (+2) = +12 : même signe '+', résultat positif.
• (-3) × (+7) = -21 : signes contraires, résultat négatif.
• (+8) × (-9) = -72 : signes contraires, résultat négatif.

Propriété : Produit de plusieurs facteurs relatifs
Dans un produit constitué de plusieurs facteurs non nuls :
- Le résultat est POSITIF si le nombre de facteurs négatifs est PAIR (0, 2, 4, 6...).
- Le résultat est NÉGATIF si le nombre de facteurs négatifs est IMPAIR (1, 3, 5, 7...).
Les facteurs positifs n'ont aucune influence sur le signe final du produit !
Exemple :
P = (-2) × (-3) × (+5) × (-4) × (+10)
On compte les facteurs négatifs : (-2), (-3), (-4). Il y en a 3 (nombre impair).
Le résultat sera donc négatif : P = -(2 × 3 × 5 × 4 × 10) = -1 200.

2. Quotient de deux nombres relatifs
Règle des signes pour la division :
Pour diviser deux nombres relatifs (le diviseur étant obligatoirement non nul) :
1. On applique exactement la MÊME règle des signes que pour la multiplication :
   • Le quotient de deux nombres de même signe est POSITIF.
   • Le quotient de deux nombres de signes contraires est NÉGATIF.
2. On divise ensuite les distances à zéro.

Pour tous nombres relatifs a et b (avec b ≠ 0) :
- (-a) / (-b) = a / b
- (-a) / b = a / (-b) = - (a / b)

Exemples détaillés :
• (-20) ÷ (-4) = +5 (car 20 ÷ 4 = 5 et les signes sont identiques)
• (+35) ÷ (-7) = -5 (car signes différents)
• (-48) ÷ (+6) = -8
• (+72) ÷ (+8) = +9

Remarque importante : La division par zéro est strictement interdite en mathématiques. L'expression a / 0 n'a aucun sens mathématique.

3. Enchaînements d'opérations et priorités opératoires
Dans une expression sans parenthèses comportant différentes opérations, l'ordre de priorité obligatoire est :
1. Les calculs situés à l'intérieur des parenthèses les plus intérieures.
2. Les puissances (si présentes).
3. Les multiplications et divisions (de gauche à droite).
4. Les additions et soustractions (de gauche à droite).

Exemple d'enchaînement :
Calculer E = 15 - (-3) × 4 + (-18) ÷ (-2)
• Étape 1 (multiplications/divisions) :
  (-3) × 4 = -12
  (-18) ÷ (-2) = +9
• Étape 2 (remplacement) : E = 15 - (-12) + 9
• Étape 3 (soustraction = addition de l'opposé) : E = 15 + 12 + 9 = 36.

Exercice 1 : Calculs directs et produit de facteurs
Énoncé :
1. Calculer les produits et quotients suivants :
   A = (-8) × (+7)
   B = (-6) × (-9)
   C = (-54) ÷ (+6)
   D = (+91) ÷ (-7)
2. Déterminer le signe puis la valeur exacte de l'expression :
   E = (-1) × (-2) × (+3) × (-4) × (-5)
3. Quel est le signe de (-3)^4 ? Quel est le signe de (-3)^5 ?
Corrigé détaillé pas-à-pas :
1. Calculs directs :
   • A = (-8) × (+7) = -56 (signes contraires, résultat négatif).
   • B = (-6) × (-9) = +54 (deux facteurs négatifs, résultat positif).
   • C = (-54) ÷ (+6) = -9 (signes contraires, résultat négatif).
   • D = (+91) ÷ (-7) = -13 (signes contraires, résultat négatif).
2. Calcul de E :
   • On dénombre les facteurs négatifs : (-1), (-2), (-4), (-5).
   • Il y a 4 facteurs négatifs. 4 est un nombre pair, donc le produit est POSITIF.
   • Valeur : E = +(1 × 2 × 3 × 4 × 5) = +120.
3. Étude des puissances :
   • (-3)^4 = (-3) × (-3) × (-3) × (-3) : 4 facteurs négatifs (pair) => le signe est POSITIF (+81).
   • (-3)^5 = (-3) × (-3) × (-3) × (-3) × (-3) : 5 facteurs négatifs (impair) => le signe est NÉGATIF (-243).

Exercice 2 : Enchaînements d'opérations et respect des priorités
Énoncé :
Calculer les expressions suivantes en écrivant toutes les étapes intermédiaires :
1. F = 25 - 4 × (-6) + (-30) ÷ (-5)
2. G = [(-12) + 4 × (-3)] ÷ [(-2) - (-8)]
3. H = -5 × [3 - (-7)] + (-16) ÷ 2
Corrigé détaillé pas-à-pas :
1. Calcul de F :
   • Multiplications et divisions prioritaires :
     4 × (-6) = -24
     (-30) ÷ (-5) = +6
   • On réécrit : F = 25 - (-24) + 6
   • On transforme la soustraction : F = 25 + 24 + 6 = 55.
2. Calcul de G :
   • Calcul du crochet 1 : [(-12) + 4 × (-3)] = [(-12) + (-12)] = -24
   • Calcul du crochet 2 : [(-2) - (-8)] = [(-2) + (+8)] = +6
   • Division finale : G = (-24) ÷ (+6) = -4.
3. Calcul de H :
   • Intérieur des crochets d'abord : [3 - (-7)] = [3 + 7] = 10
   • Multiplication : -5 × 10 = -50
   • Division : (-16) ÷ 2 = -8
   • Somme finale : H = -50 + (-8) = -58.

Conclusion :
La multiplication et la division des nombres relatifs s'appuient sur une règle des signes uniforme et rigoureuse. La détermination du signe global d'un produit par la parité du nombre de facteurs négatifs constitue une technique puissante pour traiter sereinement les calculs algébriques complexes.`,
  sections: [
    {
      title: '1. Produit de deux nombres relatifs et règle des signes',
      content: [
        "Règle des signes : Le produit de deux nombres de même signe est POSITIF (+ par + = + ; - par - = +). Le produit de deux nombres de signes contraires est NÉGATIF (+ par - = - ; - par + = -).",
        "Exemples : (-4) × (-5) = +20 ; (-3) × (+7) = -21 ; (+6) × (+2) = +12.",
        "Propriété des facteurs multiples : Dans un produit de plusieurs facteurs non nuls, le signe est POSITIF si le nombre de facteurs négatifs est PAIR, et NÉGATIF si le nombre de facteurs négatifs est IMPAIR."
      ]
    },
    {
      title: '2. Quotient de deux nombres relatifs',
      content: [
        "La règle des signes est strictement identique à celle de la multiplication : (-20) ÷ (-4) = +5 et (+35) ÷ (-7) = -5.",
        "Égalités de fractions : Pour tous nombres relatifs a et b (avec b non nul), on a : (-a)/(-b) = a/b et (-a)/b = a/(-b) = -(a/b).",
        "Alerte mathématique : Le dénominateur ou diviseur ne peut JAMAIS être égal à zéro."
      ],
      table: {
        headers: ['Opération', 'Signes des termes', 'Règle appliquée', 'Résultat'],
        rows: [
          ['(-8) × (-7)', 'Négatif × Négatif', 'Même signe => Positif', '+56'],
          ['(+9) × (-4)', 'Positif × Négatif', 'Signes contraires => Négatif', '-36'],
          ['(-42) ÷ (+7)', 'Négatif ÷ Positif', 'Signes contraires => Négatif', '-6'],
          ['(-72) ÷ (-9)', 'Négatif ÷ Négatif', 'Même signe => Positif', '+8']
        ]
      }
    },
    {
      title: '3. Priorités opératoires avec les relatifs',
      content: [
        "1. Calculs entre parenthèses d'abord (en commençant par les plus intérieures).",
        "2. Multiplications et divisions (de gauche à droite).",
        "3. Additions et soustractions en dernier lieu."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Règle des signes et parité des facteurs',
          content: [
            "1. Calculer mentalement :",
            "   A = (-8) × (+7)",
            "   B = (-6) × (-9)",
            "   C = (-54) ÷ (+6)",
            "   D = (+91) ÷ (-7)",
            "2. Déterminer le signe puis calculer la valeur exacte de :",
            "   E = (-1) × (-2) × (+3) × (-4) × (-5)",
            "3. Déterminer le signe des puissances : (-5)^8 et (-2)^11 sans calculer leur valeur numérique."
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Calculs directs :",
            "   • A = (-8) × (+7) = -56 (signes contraires => résultat négatif).",
            "   • B = (-6) × (-9) = +54 (même signe négatif => résultat positif).",
            "   • C = (-54) ÷ (+6) = -9 (signes contraires => résultat négatif).",
            "   • D = (+91) ÷ (-7) = -13 (signes contraires => résultat négatif).",
            "2. Expression E :",
            "   • Facteurs négatifs : (-1), (-2), (-4), (-5) -> 4 facteurs négatifs.",
            "   • 4 étant pair, le résultat est POSITIF.",
            "   • Calcul : E = +(1 × 2 × 3 × 4 × 5) = +120.",
            "3. Signes des puissances :",
            "   • (-5)^8 : L'exposant 8 est pair, donc le résultat est strictement POSITIF.",
            "   • (-2)^11 : L'exposant 11 est impair, donc le résultat est strictement NÉGATIF."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Enchaînements et calculs prioritaires',
          content: [
            "Calculer les expressions suivantes en détaillant chaque étape de priorité :",
            "1. F = 25 - 4 × (-6) + (-30) ÷ (-5)",
            "2. G = [(-12) + 4 × (-3)] ÷ [(-2) - (-8)]",
            "3. H = -5 × [3 - (-7)] + (-16) ÷ 2"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Calcul de F :",
            "   • Multiplications et divisions prioritaires : 4 × (-6) = -24 et (-30) ÷ (-5) = +6",
            "   • On remplace : F = 25 - (-24) + 6 = 25 + 24 + 6 = 55.",
            "2. Calcul de G :",
            "   • Crochet 1 : (-12) + [4 × (-3)] = (-12) + (-12) = -24",
            "   • Crochet 2 : (-2) - (-8) = (-2) + (+8) = +6",
            "   • Division : G = (-24) ÷ (+6) = -4.",
            "3. Calcul de H :",
            "   • Crochet : 3 - (-7) = 3 + 7 = 10",
            "   • Multiplication : -5 × 10 = -50",
            "   • Division : (-16) ÷ 2 = -8",
            "   • Somme : H = -50 + (-8) = -58."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : MULTIPLICATION & DIVISION DES RELATIFS',
    root: 'PRODUIT & QUOTIENT',
    branches: [
      {
        name: 'MÊME SIGNE',
        subtitle: '(+) × (+) ou (-) × (-)',
        items: [
          'Résultat toujours POSITIF (+)',
          'Exemple : (-4) × (-5) = +20',
          'Exemple : (-20) ÷ (-4) = +5'
        ]
      },
      {
        name: 'SIGNES CONTRAIRES',
        subtitle: '(+) × (-) ou (-) × (+)',
        items: [
          'Résultat toujours NÉGATIF (-)',
          'Exemple : (-3) × (+7) = -21',
          'Exemple : (+35) ÷ (-7) = -5'
        ]
      },
      {
        name: 'PRODUIT DE FACTEURS',
        subtitle: 'Parité des négatifs',
        items: [
          'Nombre pair de (-) => POSITIF',
          'Nombre impair de (-) => NÉGATIF',
          'Les facteurs positifs ne changent rien au signe final'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, la règle des signes est universelle pour la multiplication et la division des nombres relatifs. Le respect scrupuleux des priorités opératoires et la méthode de comptage de la parité des facteurs négatifs permettent d'éviter toute erreur de signe."
};

// -------------------------------------------------------------------------
// LEÇON 3 : LES FRACTIONS — ADDITION ET SOUSTRACTION
// -------------------------------------------------------------------------
export const LESSON_3_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-3',
  number: 'Leçon 3',
  title: 'Les fractions — Addition et soustraction',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "L'addition et la soustraction de nombres en écriture fractionnaire représentent l'une des compétences de calcul les plus cruciales du collège. En 4ème, les fractions intègrent pleinement les nombres relatifs aux numérateurs et dénominateurs. Qu'il s'agisse de partager des grandeurs, d'additionner des proportions ou de résoudre des problèmes géométriques et physiques, la maîtrise de la réduction au même dénominateur commun (PPCM) et la simplification en fraction irréductible sont indispensables.",
  fullText: `Leçon 3 : Les fractions — Addition et soustraction

Introduction :
L'addition et la soustraction de nombres en écriture fractionnaire représentent l'une des compétences de calcul les plus cruciales du collège. En 4ème, les fractions intègrent pleinement les nombres relatifs aux numérateurs et dénominateurs. Qu'il s'agisse de partager des grandeurs, d'additionner des proportions ou de résoudre des problèmes géométriques et physiques, la maîtrise de la réduction au même dénominateur commun (PPCM) et la simplification en fraction irréductible sont indispensables.

1. Cas de fractions ayant le même dénominateur
Propriété fondamentale :
Pour additionner ou soustraire deux nombres en écriture fractionnaire qui ont le MÊME dénominateur :
1. On additionne ou on soustrait les numérateurs entre eux.
2. On CONSERVE le dénominateur commun (on ne l'additionne JAMAIS !).

Formules formelles :
Pour tous nombres a, b et d (avec d ≠ 0) :
• a/d + b/d = (a + b) / d
• a/d - b/d = (a - b) / d

Exemples d'application :
• 4/7 + 5/7 = (4 + 5) / 7 = 9/7
• 11/13 - 4/13 = (11 - 4) / 13 = 7/13
• (-5)/9 + 2/9 = (-5 + 2) / 9 = -3/9 = -1/3 (simplification par 3).

2. Cas de fractions ayant des dénominateurs différents
Propriété générale :
Pour additionner ou soustraire des fractions qui n'ont pas le même dénominateur, il faut IMPÉRATIVEMENT les réduire au préalable au même dénominateur commun.
Rappel : On ne modifie pas la valeur d'une fraction en multipliant son numérateur et son dénominateur par un même nombre non nul : a/b = (a × k) / (b × k).

Méthode universelle en 3 étapes :
Étape 1 : Trouver un dénominateur commun.
- Cas 1 : L'un des dénominateurs est un multiple de l'autre (ex: 3 et 6 -> multiple commun = 6).
- Cas 2 : Les dénominateurs n'ont pas de facteur commun évident -> on utilise leur PPCM ou leur produit (ex: 4 et 5 -> 20 ; 6 et 8 -> 24).
Étape 2 : Réécrire chaque fraction avec ce dénominateur commun.
Étape 3 : Additionner ou soustraire les numérateurs obtenus, puis simplifier le résultat final pour obtenir une fraction irréductible.

Exemple détaillé :
Calculer A = 2/3 + 5/6
1. Le dénominateur 6 est un multiple de 3 car 3 × 2 = 6.
2. On transforme la première fraction : 2/3 = (2 × 2) / (3 × 2) = 4/6.
3. On effectue la somme : A = 4/6 + 5/6 = (4 + 5) / 6 = 9/6.
4. On simplifie par 3 : 9/6 = (3 × 3) / (2 × 3) = 3/2.

Autre exemple avec produit :
Calculer B = 3/4 - 2/5
1. Dénominateur commun : 4 × 5 = 20.
2. B = (3 × 5)/(4 × 5) - (2 × 4)/(5 × 4) = 15/20 - 8/20 = (15 - 8)/20 = 7/20 (irréductible).

3. Intégration des nombres relatifs dans les écritures fractionnaires
Règle du signe :
Pour tous nombres entiers a et b (avec b ≠ 0) :
(-a) / b = a / (-b) = - (a / b) et (-a) / (-b) = a / b
Conseil méthodique fondamental : Avant tout calcul, il est vivement conseillé de placer le signe '-' devant la barre de fraction ou directement sur le numérateur pour éviter toute confusion avec le dénominateur commun.
Exemple : 5 / (-3) s'écrit immédiatement -5/3.

Exercice 1 : Calculs d'additions et soustractions de fractions
Énoncé :
Calculer et donner le résultat sous forme de fraction irréductible :
1. A = 7/12 + 5/12 - 4/12
2. B = 3/4 + 7/12
3. C = 5/6 - 3/8
4. D = -2/5 + 7/15 - 1/3
Corrigé détaillé pas-à-pas :
1. Calcul de A (même dénominateur) :
   • A = (7 + 5 - 4) / 12 = 8/12
   • On simplifie par 4 : A = (2 × 4) / (3 × 4) = 2/3.
2. Calcul de B (dénominateur multiple) :
   • 12 est multiple de 4 (4 × 3 = 12).
   • 3/4 = (3 × 3)/(4 × 3) = 9/12.
   • B = 9/12 + 7/12 = 16/12.
   • On simplifie par 4 : B = 4/3.
3. Calcul de C (PPCM de 6 et 8) :
   • Multiples de 6 : 6, 12, 18, 24, 30...
   • Multiples de 8 : 8, 16, 24, 32...
   • Le plus petit commun multiple est 24.
   • C = (5 × 4)/(6 × 4) - (3 × 3)/(8 × 3) = 20/24 - 9/24 = 11/24 (fraction irréductible).
4. Calcul de D (trois termes avec relatifs) :
   • Dénominateur commun entre 5, 15 et 3 : c'est 15.
   • -2/5 = (-2 × 3)/(5 × 3) = -6/15
   • 7/15 reste 7/15
   • -1/3 = -(1 × 5)/(3 × 5) = -5/15
   • D = (-6 + 7 - 5) / 15 = (-4)/15 = -4/15.

Exercice 2 : Problème concret de partage fractionnaire
Énoncé :
Un cultivateur de la région de Thiès consacre les 2/5 de son terrain à la culture de l'arachide, le 1/3 à la culture du manioc, et le reste est laissé en jachère pour régénérer le sol.
1. Quelle fraction totale du terrain est occupée par l'arachide et le manioc réunis ?
2. Quelle fraction du terrain représente la portion laissée en jachère ?
3. Si le terrain total possède une superficie de 60 hectares, déterminer en hectares la surface réservée à chaque usage.
Corrigé détaillé pas-à-pas :
1. Fraction occupée par arachide + manioc :
   • Somme : S = 2/5 + 1/3
   • Dénominateur commun (5 et 3 sont premiers entre eux) : 15.
   • S = (2 × 3)/(5 × 3) + (1 × 5)/(3 × 5) = 6/15 + 5/15 = 11/15.
   • Réponse : 11/15 du terrain est cultivé.
2. Fraction laissée en jachère :
   • Le terrain complet correspond à l'unité 1, soit 15/15.
   • J = 1 - 11/15 = 15/15 - 11/15 = 4/15.
   • Réponse : La jachère représente 4/15 du terrain.
3. Calcul des surfaces en hectares :
   • Surface pour l'arachide : 60 × 2/5 = (60 × 2) / 5 = 120 / 5 = 24 hectares.
   • Surface pour le manioc : 60 × 1/3 = 60 / 3 = 20 hectares.
   • Surface en jachère : 60 × 4/15 = (60 / 15) × 4 = 4 × 4 = 16 hectares.
   • Vérification : 24 + 20 + 16 = 60 hectares (exact).

Conclusion :
L'addition et la soustraction de fractions imposent une rigueur mathématique absolue : ne jamais additionner les dénominateurs entre eux, toujours rechercher le plus petit dénominateur commun possible et systématiquement simplifier le résultat final sous forme irréductible.`,
  sections: [
    {
      title: '1. Addition et soustraction avec même dénominateur',
      content: [
        "Règle : On additionne ou on soustrait les numérateurs et on CONSERVE le dénominateur commun.",
        "Formules : a/d + b/d = (a+b)/d et a/d - b/d = (a-b)/d.",
        "Exemples : 4/7 + 5/7 = 9/7 ; 11/13 - 4/13 = 7/13."
      ]
    },
    {
      title: '2. Réduction au même dénominateur et méthode générale',
      content: [
        "Pour des fractions à dénominateurs différents, on cherche un multiple commun (souvent le PPCM) pour réécrire les fractions.",
        "On multiplie le numérateur et le dénominateur par un même nombre non nul sans changer la valeur de la fraction.",
        "Exemple avec multiple : 2/3 + 5/6 = (2×2)/(3×2) + 5/6 = 4/6 + 5/6 = 9/6 = 3/2 (après simplification)."
      ],
      table: {
        headers: ['Calcul demandé', 'Dénominateur commun', 'Mise au même dénominateur', 'Résultat irréductible'],
        rows: [
          ['1/2 + 1/4', '4', '2/4 + 1/4', '3/4'],
          ['2/3 + 5/6', '6', '4/6 + 5/6 = 9/6', '3/2'],
          ['3/4 - 2/5', '20', '15/20 - 8/20', '7/20'],
          ['5/6 - 3/8', '24', '20/24 - 9/24', '11/24']
        ]
      }
    },
    {
      title: '3. Nombres relatifs et fractions',
      content: [
        "Un signe négatif peut se trouver au numérateur, au dénominateur ou devant la barre de fraction : (-a)/b = a/(-b) = -(a/b).",
        "Toujours simplifier les signes d'abord pour avoir des dénominateurs positifs avant d'engager la réduction."
      ]
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Calculs et simplifications',
          content: [
            "Calculer et rendre le résultat sous forme de fraction irréductible :",
            "1. A = 7/12 + 5/12 - 4/12",
            "2. B = 3/4 + 7/12",
            "3. C = 5/6 - 3/8",
            "4. D = -2/5 + 7/15 - 1/3"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. A = (7 + 5 - 4)/12 = 8/12. On simplifie par 4 : 8/12 = 2/3.",
            "2. B = 3/4 + 7/12. Le dénominateur commun est 12 (car 4×3 = 12). 3/4 = 9/12. D'où B = 9/12 + 7/12 = 16/12 = 4/3.",
            "3. C = 5/6 - 3/8. Dénominateur commun = 24. C = (5×4)/24 - (3×3)/24 = 20/24 - 9/24 = 11/24.",
            "4. D = -2/5 + 7/15 - 1/3. Dénominateur commun = 15. D = -6/15 + 7/15 - 5/15 = (-6 + 7 - 5)/15 = -4/15."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Problème de partage de terrain',
          content: [
            "Un cultivateur consacre les 2/5 de son champ à l'arachide, le 1/3 au manioc, et laisse le reste en jachère.",
            "1. Quelle fraction du champ est occupée par l'ensemble des deux cultures ?",
            "2. Quelle fraction représente la jachère ?",
            "3. Sachant que le champ a une superficie totale de 60 hectares, calculer la surface exacte en hectares consacrée à chaque usage."
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Fraction cultivée : 2/5 + 1/3 = 6/15 + 5/15 = 11/15 du champ.",
            "2. Fraction de la jachère : 1 - 11/15 = 15/15 - 11/15 = 4/15 du champ.",
            "3. Surfaces réelles :",
            "   • Arachide : 60 × 2/5 = 120 / 5 = 24 hectares.",
            "   • Manioc : 60 × 1/3 = 20 hectares.",
            "   • Jachère : 60 × 4/15 = 16 hectares.",
            "   Vérification : 24 + 20 + 16 = 60 ha."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : ADDITION & SOUSTRACTION DE FRACTIONS',
    root: 'FRACTIONS (+ et -)',
    branches: [
      {
        name: 'MÊME DÉNOMINATEUR',
        subtitle: 'Cas immédiat',
        items: [
          'Additionner ou soustraire les numérateurs',
          'Garder le dénominateur commun : a/d + b/d = (a+b)/d',
          'Ne JAMAIS additionner les dénominateurs !'
        ]
      },
      {
        name: 'DÉNOMINATEURS DIFFÉRENTS',
        subtitle: 'Réduction préalable',
        items: [
          'Trouver le PPCM des dénominateurs',
          'Multiplier haut et bas par le facteur adapté',
          'Effectuer l\'opération sur les numérateurs'
        ]
      },
      {
        name: 'SIMPLIFICATION',
        subtitle: 'Fraction irréductible',
        items: [
          'Rechercher les diviseurs communs (PGCD)',
          'Diviser numérateur et dénominateur',
          'Donner la forme irréductible finale'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, l'addition et la soustraction de fractions exigent l'alignement préalable sur un dénominateur commun. La simplification systématique du résultat sous forme de fraction irréductible est la règle de rigueur indispensable pour réussir."
};

// -------------------------------------------------------------------------
// LEÇON 4 : LES FRACTIONS — MULTIPLICATION ET DIVISION
// -------------------------------------------------------------------------
export const LESSON_4_MATH_4EME: LessonContent = {
  id: 'math-4eme-lecon-4',
  number: 'Leçon 4',
  title: 'Les fractions — Multiplication et division',
  subject: 'Mathématiques',
  classLevel: '4ème',
  introduction:
    "Contrairement à l'addition qui réclame un dénominateur commun, la multiplication et la division de fractions suivent des mécanismes plus directs mais nécessitent une grande vigilance quant à la simplification préventive. La notion d'inverse mathématique est le cœur théorique de cette leçon : diviser par une fraction revient exactement à multiplier par son inverse. Ce chapitre prépare directement aux calculs de proportions, aux équations et à la trigonométrie.",
  fullText: `Leçon 4 : Les fractions — Multiplication et division

Introduction :
Contrairement à l'addition qui réclame un dénominateur commun, la multiplication et la division de fractions suivent des mécanismes plus directs mais nécessitent une grande vigilance quant à la simplification préventive. La notion d'inverse mathématique est le cœur théorique de cette leçon : diviser par une fraction revient exactement à multiplier par son inverse. Ce chapitre prépare directement aux calculs de proportions, aux équations et à la trigonométrie.

1. Multiplication de deux ou plusieurs fractions
Règle fondamentale :
Pour multiplier deux nombres en écriture fractionnaire :
1. On multiplie les numérateurs entre eux.
2. On multiplie les dénominateurs entre eux.
3. On applique la règle des signes des nombres relatifs.

Formule formelle :
Pour tous nombres a, b, c et d (avec b ≠ 0 et d ≠ 0) :
(a / b) × (c / d) = (a × c) / (b × d)

Exemple d'application directe :
(2/3) × (4/5) = (2 × 4) / (3 × 5) = 8/15.

Conseil capital d'efficacité : La simplification AVANT le produit !
Il ne faut JAMAIS se précipiter pour calculer les produits numériques au numérateur et au dénominateur. Il est considérablement plus judicieux et rapide de décomposer les nombres en facteurs premiers ou produits simples pour simplifier les facteurs communs en haut et en bas AVANT d'effectuer la multiplication finale.
Exemple comparatif :
Calculer M = (15 / 28) × (14 / 25)
• Méthode naïve (lourde) : (15 × 14) / (28 × 25) = 210 / 700 (très pénible à simplifier ensuite).
• Méthode experte (décomposition préalable) :
  15 = 3 × 5 ; 14 = 2 × 7 ; 28 = 4 × 7 = 2 × 2 × 7 ; 25 = 5 × 5
  M = (3 × 5 × 2 × 7) / (2 × 2 × 7 × 5 × 5)
  On barre les facteurs communs 5, 2 et 7 :
  Il reste au numérateur : 3
  Il reste au dénominateur : 2 × 5 = 10
  Donc M = 3/10 en quelques secondes sans calculatrice !

2. Inverse d'un nombre et inverse d'une fraction
Définition mathématique :
Deux nombres relatifs x et y sont dits INVERSES l'un de l'autre si et seulement si leur produit est égal à 1 :
x × y = 1

Propriétés fondamentales :
- Tout nombre relatif non nul a admet un inverse unique noté 1/a (ou a^(-1)).
  Exemple : L'inverse de 4 est 1/4 (ou 0,25) car 4 × 0,25 = 1.
  L'inverse de -5 est 1/(-5) = -1/5 = -0,2.
- L'inverse de la fraction a/b (avec a ≠ 0 et b ≠ 0) est la fraction b/a :
  (a/b) × (b/a) = (a × b) / (b × a) = 1.
  Exemples :
  • L'inverse de 3/7 est 7/3.
  • L'inverse de -5/8 est -8/5.
  • L'inverse de 1/9 est 9/1 = 9.
Attention absolue : ZÉRO n'a pas d'inverse, car le produit de 0 par n'importe quel nombre donne toujours 0, jamais 1 ! Ne jamais confondre l'opposé (qui donne une somme nulle : a + (-a) = 0) et l'inverse (qui donne un produit égal à 1 : a × (1/a) = 1).

3. Division de fractions
Théorème fondamental de la division :
Diviser par un nombre relatif non nul revient à MULTIPLIER par son inverse.
Pour tous nombres a, b, c et d (avec b ≠ 0, c ≠ 0 et d ≠ 0) :
(a / b) ÷ (c / d) = (a / b) × (d / c) = (a × d) / (b × c)

Écriture sous forme de quotient étagé (tour de fraction) :
La division (a/b) / (c/d) s'écrit avec une barre de fraction principale plus longue et alignée avec le signe égal :
(a/b) / (c/d) = (a/b) × (d/c).

Exemples détaillés :
• (5/7) ÷ (3/2) = (5/7) × (2/3) = (5 × 2) / (7 × 3) = 10/21.
• (-4/9) ÷ (8/15) = (-4/9) × (15/8) = - (4 × 15) / (9 × 8) = - (4 × 3 × 5) / (3 × 3 × 4 × 2) = -5/6.
• (7/3) ÷ 14 = (7/3) ÷ (14/1) = (7/3) × (1/14) = (7 × 1) / (3 × 2 × 7) = 1/6.

Exercice 1 : Multiplications et simplifications avancées
Énoncé :
Calculer les expressions suivantes en décomposant au maximum pour donner le résultat sous forme irréductible :
1. A = (21 / 25) × (35 / 14)
2. B = (-16 / 27) × (-9 / 20)
3. C = (12 / -35) × (49 / 18) × (-15 / 14)
Corrigé détaillé pas-à-pas :
1. Calcul de A :
   • On décompose : 21 = 3 × 7 ; 35 = 5 × 7 ; 25 = 5 × 5 ; 14 = 2 × 7
   • A = (3 × 7 × 5 × 7) / (5 × 5 × 2 × 7)
   • On simplifie par 5 et par 7 :
     Il reste en haut : 3 × 7 = 21
     Il reste en bas : 5 × 2 = 10
   • Résultat : A = 21/10.
2. Calcul de B :
   • Règle des signes : (-) × (-) = (+)
   • Décomposition : 16 = 4 × 4 ; 9 = 9 ; 27 = 9 × 3 ; 20 = 4 × 5
   • B = (4 × 4 × 9) / (9 × 3 × 4 × 5)
   • On simplifie par 4 et par 9 :
     En haut : 4
     En bas : 3 × 5 = 15
   • Résultat : B = 4/15.
3. Calcul de C :
   • Décompte des signes négatifs : 3 signes '-' (impair), donc le résultat final est NÉGATIF (-).
   • Décomposition :
     12 = 6 × 2 ; 35 = 5 × 7 ; 49 = 7 × 7 ; 18 = 6 × 3 ; 15 = 3 × 5 ; 14 = 2 × 7
   • C = - (6 × 2 × 7 × 7 × 3 × 5) / (5 × 7 × 6 × 3 × 2 × 7)
   • Simplification de tous les facteurs communs :
     6, 2, 7, 7, 3, 5 s'annulent complètement !
     Il reste : - 1 / 1 = -1.
   • Résultat : C = -1.

Exercice 2 : Divisions de fractions et quotients complexes
Énoncé :
1. Calculer les divisions suivantes et simplifier :
   D = (8/15) ÷ (12/25)
   E = (-21/16) ÷ (7/8)
   F = 18 ÷ (9/4)
2. Calculer le quotient étagé :
   G = (2/3 - 1/4) / (5/6 + 1/2)
Corrigé détaillé pas-à-pas :
1. Divisions :
   • D = (8/15) × (25/12) = (4 × 2 × 5 × 5) / (3 × 5 × 4 × 3) = (2 × 5) / (3 × 3) = 10/9.
   • E = (-21/16) × (8/7) = - (7 × 3 × 8) / (8 × 2 × 7) = -3/2.
   • F = (18/1) × (4/9) = (9 × 2 × 4) / 9 = 8.
2. Quotient étagé G :
   • Étape 1 : Calcul du numérateur N = 2/3 - 1/4
     Dénominateur commun = 12 : N = 8/12 - 3/12 = 5/12.
   • Étape 2 : Calcul du dénominateur D = 5/6 + 1/2
     Dénominateur commun = 6 : D = 5/6 + 3/6 = 8/6 = 4/3.
   • Étape 3 : Division N ÷ D :
     G = (5/12) ÷ (4/3) = (5/12) × (3/4) = (5 × 3) / (4 × 3 × 4) = 5/16.
   • Résultat final : G = 5/16.

Conclusion :
La multiplication et la division de fractions révèlent toute l'élégance de l'arithmétique : en multipliant par l'inverse pour diviser et en simplifiant avant de multiplier, les calculs les plus impressionnants deviennent limpides et immédiats.`,
  sections: [
    {
      title: '1. Multiplication de fractions et simplification préalable',
      content: [
        "Formule : (a/b) × (c/d) = (a×c)/(b×d) avec b et d non nuls.",
        "Exemple immédiat : (2/3) × (4/5) = 8/15.",
        "Méthode experte de simplification : Toujours décomposer numérateurs et dénominateurs pour barrer les facteurs communs AVANT d'effectuer le produit numérique."
      ]
    },
    {
      title: '2. Inverse d\'un nombre et d\'une fraction',
      content: [
        "Définition : Deux nombres relatifs non nuls sont inverses si leur produit est égal à 1.",
        "Propriété : L'inverse de a est 1/a. L'inverse de la fraction a/b est la fraction b/a.",
        "Différence essentielle : Ne jamais confondre l'opposé (a + (-a) = 0) et l'inverse (a × (1/a) = 1). Le nombre 0 n'a AUCUN inverse."
      ]
    },
    {
      title: '3. Division de fractions et quotients étagés',
      content: [
        "Théorème : Diviser par un nombre non nul revient à multiplier par son inverse : (a/b) ÷ (c/d) = (a/b) × (d/c).",
        "Pour un quotient étagé, on calcule d'abord le numérateur global, le dénominateur global, puis on transforme en multiplication par l'inverse."
      ],
      table: {
        headers: ['Division initiale', 'Inverse du diviseur', 'Transformation en produit', 'Résultat simplifié'],
        rows: [
          ['(5/7) ÷ (3/2)', '2/3', '(5/7) × (2/3)', '10/21'],
          ['(-4/9) ÷ (8/15)', '15/8', '(-4/9) × (15/8)', '-5/6'],
          ['(7/3) ÷ 14', '1/14', '(7/3) × (1/14)', '1/6'],
          ['8 ÷ (2/5)', '5/2', '8 × (5/2)', '20']
        ]
      }
    },
    {
      title: '4. Exercices d\'entraînement et Corrigés détaillés',
      subsections: [
        {
          subtitle: 'Exercice 1 : Énoncé — Multiplications et simplification avant calcul',
          content: [
            "Calculer et donner la fraction irréductible en décomposant les nombres :",
            "1. A = (21/25) × (35/14)",
            "2. B = (-16/27) × (-9/20)",
            "3. C = (12/-35) × (49/18) × (-15/14)"
          ]
        },
        {
          subtitle: 'Exercice 1 : Corrigé détaillé pas-à-pas',
          content: [
            "1. A = (3 × 7 × 5 × 7) / (5 × 5 × 2 × 7). On simplifie par 5 et 7 => A = (3 × 7)/(5 × 2) = 21/10.",
            "2. B = (-16/27) × (-9/20). Le produit de deux négatifs est positif. Décomposition : (4 × 4 × 9)/(9 × 3 × 4 × 5). On simplifie par 4 et 9 => B = 4/(3 × 5) = 4/15.",
            "3. C : Trois facteurs négatifs => résultat négatif. C = - (6×2 × 7×7 × 3×5) / (5×7 × 6×3 × 2×7) = -1."
          ]
        },
        {
          subtitle: 'Exercice 2 : Énoncé — Division de fractions et fraction étagée',
          content: [
            "1. Calculer les divisions :",
            "   D = (8/15) ÷ (12/25)",
            "   E = (-21/16) ÷ (7/8)",
            "   F = 18 ÷ (9/4)",
            "2. Calculer le quotient étagé : G = (2/3 - 1/4) / (5/6 + 1/2)"
          ]
        },
        {
          subtitle: 'Exercice 2 : Corrigé détaillé pas-à-pas',
          content: [
            "1. Divisions :",
            "   • D = (8/15) × (25/12) = (4×2 × 5×5)/(3×5 × 4×3) = 10/9.",
            "   • E = (-21/16) × (8/7) = - (7×3 × 8)/(8×2 × 7) = -3/2.",
            "   • F = 18 × (4/9) = (9×2 × 4)/9 = 8.",
            "2. Quotient étagé G :",
            "   • Numérateur : 2/3 - 1/4 = 8/12 - 3/12 = 5/12.",
            "   • Dénominateur : 5/6 + 1/2 = 5/6 + 3/6 = 8/6 = 4/3.",
            "   • Quotient : G = (5/12) ÷ (4/3) = (5/12) × (3/4) = (5×3)/(4×3×4) = 5/16."
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNTHÈSE VISUELLE : MULTIPLICATION & DIVISION DE FRACTIONS',
    root: 'FRACTIONS (× et ÷)',
    branches: [
      {
        name: 'MULTIPLICATION',
        subtitle: 'Numérateur × Numérateur',
        items: [
          'Formule : (a/b) × (c/d) = (a×c)/(b×d)',
          'Simplifier AVANT de multiplier',
          'Appliquer la règle des signes des relatifs'
        ]
      },
      {
        name: 'INVERSE',
        subtitle: 'Produit égal à 1',
        items: [
          'Inverse de a/b est b/a (avec a, b ≠ 0)',
          'Inverse de x est 1/x',
          '0 n\'a PAS d\'inverse'
        ]
      },
      {
        name: 'DIVISION',
        subtitle: 'Multiplier par l\'inverse',
        items: [
          'Formule : (a/b) ÷ (c/d) = (a/b) × (d/c)',
          'Ne jamais diviser directement',
          'Pour les tours de fractions : calculer haut et bas puis multiplier par l\'inverse'
        ]
      }
    ]
  },
  conclusion:
    "En conclusion, la division fractionnaire se ramène toujours à une multiplication par l'inverse. L'habitude de simplifier par décomposition de facteurs avant d'effectuer les produits préserve l'élève des erreurs de calcul et garantit une précision maximale."
};
