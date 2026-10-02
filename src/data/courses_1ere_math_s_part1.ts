import { LessonContent } from './courses';
import {
  SVG_MATH_1ERE_PARABOLE,
  SVG_MATH_1ERE_TANGENTE_COURBE,
  SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE,
  SVG_MATH_1ERE_CERCLE_TRIGONOMETRIQUE
} from './diagrams_1ere_math';

// =========================================================================
// MATHÉMATIQUES — PREMIÈRE S (S1 & S2) — PARTIE 1 : ANALYSE & SUITES
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (Sénégal)
// Leçons approfondies sans résumé, grands axes en chiffres romains & figures obligatoires
// =========================================================================

export const LESSON_1_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-1',
  number: '1',
  title: 'CHAPITRE S-1 : GÉNÉRALITÉS SUR LES FONCTIONS NUMÉRIQUES D’UNE VARIABLE RÉELLE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Analyse • Fonctions et Suites',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Ensembles de définition, éléments de symétrie (parité, centre et axe de symétrie), fonctions majorées, minorées, bornées, et opération de composition g ∘ f.',
  image: {
    caption: 'Figure S-1 : Éléments de symétrie d’une courbe représentative — Axe de symétrie vertical x = a et centre de symétrie Ω(a, b).',
    svgContent: SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE
  },
  diagram: {
    title: 'Symétries et Propriétés des Fonctions Numériques',
    svgContent: SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE
  },
  introduction: `En classe de Première S (Séries S1 et S2), l'analyse mathématique franchit un cap qualitatif décisif. Les fonctions ne sont plus seulement envisagées comme de simples formules de calcul, mais comme des applications fonctionnelles dont il s'agit d'analyser la structure géométrique globale et locale : domaines de validité, symétries axiales ou centrales, périodicités, bornes et comportements asymptotiques.
Ce premier chapitre d'Analyse consolide les méthodes rigoureuses de détermination du domaine de définition, développe les conditions nécessaires et suffisantes de parité et d'imparité, démontre les formules de changement de repère pour les axes et centres de symétrie, formalise la notion de fonction bornée et étudie l'opération fondamentale de composition des fonctions numériques.`,
  conclusion: `En conclusion, l'étude des généralités fonctionnelles constitue le socle indispensable sur lequel s'appuient les chapitres de limites, de continuité et de dérivation. La maîtrise des règles de symétrie (f(2a - x) = f(x) pour un axe de symétrie x = a, et f(2a - x) + f(x) = 2b pour un centre de symétrie Ω(a, b)) permet de restreindre l'intervalle d'étude à une moitié du domaine, divisant par deux les calculs nécessaires.`,
  sections: [
    {
      title: 'I. ENSEMBLE DE DÉFINITION D\'UNE FONCTION NUMÉRIQUE',
      content: [
        '1. Définition générale :',
        'L\'ensemble de définition Df d\'une fonction numérique f d\'une variable réelle x est l\'ensemble des nombres réels x pour lesquels l\'image f(x) existe et peut être calculée dans ℝ.',
        '2. Règles fondamentales de détermination de Df :',
        '• Règle du quotient : Si f(x) = P(x) / Q(x), la condition d\'existence est Q(x) ≠ 0.',
        '• Règle du radical : Si f(x) = √(u(x)), la condition d\'existence est u(x) ≥ 0.',
        '• Règle combinée : Si f(x) = P(x) / √(u(x)), la condition d\'existence est u(x) > 0 (strictement positif).',
        '3. Exemple détaillé :',
        'Déterminer le domaine de définition de f(x) = √(x² - 9) / (x - 5).',
        'Conditions simultanées : { x² - 9 ≥ 0  et  x - 5 ≠ 0 }.',
        'x² - 9 = (x - 3)(x + 3) ≥ 0 ➔ x ∈ ]-∞ ; -3] ∪ [3 ; +∞[.',
        'Et x ≠ 5.',
        'D\'où l\'ensemble de définition : Df = ]-∞ ; -3] ∪ [3 ; 5[ ∪ ]5 ; +∞[.'
      ]
    },
    {
      title: 'II. PARITÉ ET ÉLÉMENTS DE SYMÉTRIE DE LA COURBE REPRÉSENTATIVE',
      content: [
        '1. Fonctions paires et impaires :',
        'Soit f une fonction numérique de domaine Df centré en 0 (c\'est-à-dire : pour tout x ∈ Df, -x ∈ Df) :',
        '• f est dite paire si pour tout x ∈ Df, f(-x) = f(x).',
        'Propriété géométrique : L\'axe des ordonnées (Oy), d\'équation x = 0, est un axe de symétrie orthogonal pour la courbe (Cf).',
        '• f est dite impaire si pour tout x ∈ Df, f(-x) = -f(x).',
        'Propriété géométrique : L\'origine du repère O(0, 0) est un centre de symétrie pour la courbe (Cf).',
        '2. Axe de symétrie d\'équation x = a :',
        'La droite verticale d\'équation x = a est axe de symétrie pour (Cf) si et seulement si pour tout réel h tel que a + h ∈ Df :',
        'a - h ∈ Df   et   f(a + h) = f(a - h),',
        'ce qui s\'écrit de manière équivalente en posant X = a + h : pour tout x ∈ Df, (2a - x) ∈ Df et f(2a - x) = f(x).',
        '3. Centre de symétrie Ω(a, b) :',
        'Le point Ω(a, b) est un centre de symétrie pour la courbe (Cf) si et seulement si pour tout réel h tel que a + h ∈ Df :',
        'a - h ∈ Df   et   [ f(a + h) + f(a - h) ] / 2 = b,',
        'ce qui équivaut à la relation fondamentale : f(2a - x) + f(x) = 2b.'
      ]
    },
    {
      title: 'III. FONCTIONS MAJORÉES, MINORÉES ET BORNÉES',
      content: [
        'Soit f une fonction numérique définie sur un intervalle I de ℝ :',
        '1. Fonction majorée :',
        'f est dite majorée sur I s\'il existe un réel M tel que pour tout x ∈ I : f(x) ≤ M.',
        'Le réel M est appelé un majorant de f sur I (il n\'est pas unique : tout réel supérieur à M est aussi un majorant).',
        '2. Fonction minorée :',
        'f est dite minorée sur I s\'il existe un réel m tel que pour tout x ∈ I : f(x) ≥ m.',
        'Le réel m est appelé un minorant de f sur I.',
        '3. Fonction bornée :',
        'f est dite bornée sur I si elle est à la fois majorée et minorée sur I, c\'est-à-dire s\'il existe deux réels m et M tels que pour tout x ∈ I : m ≤ f(x) ≤ M.',
        'Propriété équivalente : f est bornée sur I si et seulement s\'il existe un réel k > 0 tel que pour tout x ∈ I : |f(x)| ≤ k.'
      ]
    },
    {
      title: 'IV. COMPOSITION DE DEUX FONCTIONS NUMÉRIQUES',
      content: [
        '1. Définition de la fonction composée g ∘ f :',
        'Soient f une fonction de domaine Df et g une fonction de domaine Dg.',
        'La fonction composée de f par g, notée g ∘ f (lire « g rond f »), est la fonction définie par :',
        '(g ∘ f)(x) = g(f(x)).',
        '2. Domaine de définition de g ∘ f :',
        'D_{g ∘ f} = { x ∈ ℝ  tels que  x ∈ Df  et  f(x) ∈ Dg }.',
        'Attention majeure : L\'ordre des fonctions est capital ! En général, g ∘ f ≠ f ∘ g (la composition n\'est pas commutative).',
        '3. Sens de variation d\'une fonction composée :',
        'Soient I et J deux intervalles de ℝ tels que f(I) ⊂ J :',
        '• Si f et g ont le même sens de variation (toutes deux croissantes ou toutes deux décroissantes), alors g ∘ f est strictement croissante.',
        '• Si f et g ont des sens de variation contraires (l\'une croissante et l\'autre décroissante), alors g ∘ f est strictement décroissante.'
      ]
    }
  ]
};

export const LESSON_2_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-2',
  number: '2',
  title: 'CHAPITRE S-2 : ÉQUATIONS ET INÉQUATIONS DU SECOND DEGRÉ, SYSTÈMES ET ÉQUATIONS BICARRÉES',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Analyse • Algèbre Polynomiale',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Discriminant Δ, relations entre coefficients et racines (somme S et produit P), équations réductibles au second degré (bicarrées, changement de variable), inéquations et systèmes non linéaires.',
  image: {
    caption: 'Figure S-2 : Parabole du second degré f(x) = ax² + bx + c — Visualisation des racines, du sommet et du signe du trinôme.',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  diagram: {
    title: 'Équations du Second Degré et Discriminant',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  introduction: `La résolution des équations algébriques du second degré est connue depuis les mathématiciens babyloniens et formalisée au IXe siècle par Al-Khwarizmi dans son célèbre traité d'algèbre. En Première S, la maîtrise du second degré ne se limite pas à l'application mécanique de la formule quadratique du discriminant : elle constitue un outil omniprésent pour résoudre des équations bicarrées, des équations avec radicaux (équations irrationnelles), des équations trigonométriques et des systèmes symétriques à deux inconnues.
Ce chapitre approfondit les relations d'Euler-Viète reliant les racines à leurs coefficients (S = -b/a, P = c/a), démontre la méthode du discriminant réduit Δ', analyse le signe des racines sans les calculer, et résout les équations se ramenant au second degré par changement de variable.`,
  conclusion: `En conclusion, la théorie du trinôme ax² + bx + c fournit une boîte à outils universelle. Les relations S = x₁ + x₂ = -b/a et P = x₁ · x₂ = c/a permettent de trouver deux nombres connaissant leur somme et leur produit (qui sont les solutions de l'équation X² - SX + P = 0), ou de déterminer instantanément le signe des racines (selon les signes de P et de S) sans avoir à calculer leurs valeurs explicites.`,
  sections: [
    {
      title: 'I. DISCRIMINANT ET FORMULES DES RACINES D\'UN TRINÔME',
      content: [
        'Soit l\'équation ax² + bx + c = 0 avec a ≠ 0.',
        '1. Discriminant complet Δ = b² - 4ac :',
        '• Si Δ > 0 : deux racines réelles distinctes x₁ = (-b - √Δ) / (2a) et x₂ = (-b + √Δ) / (2a).',
        '• Si Δ = 0 : une racine double réelle x₀ = -b / (2a).',
        '• Si Δ < 0 : aucune racine réelle dans ℝ.',
        '2. Discriminant réduit Δ\' (cas où b est pair : b = 2b\') :',
        'On pose b\' = b / 2. Le discriminant réduit est défini par : Δ\' = b\'² - ac.',
        'Comme Δ = 4Δ\', Δ et Δ\' ont exactement le même signe.',
        'Si Δ\' > 0, les racines s\'expriment de façon allégée par : x₁ = (-b\' - √Δ\') / a  et  x₂ = (-b\' + √Δ\') / a.'
      ]
    },
    {
      title: 'II. RELATIONS ENTRE COEFFICIENTS ET RACINES (SOMME ET PRODUIT)',
      content: [
        'Soient x₁ et x₂ les racines réelles de l\'équation ax² + bx + c = 0 (avec Δ ≥ 0) :',
        '1. Formules de Viète :',
        '• Somme des racines : S = x₁ + x₂ = -b / a.',
        '• Produit des racines : P = x₁ · x₂ = c / a.',
        '2. Recherche de deux réels connaissant leur somme S et leur produit P :',
        'Deux nombres réels x et y ont pour somme S et pour produit P si et seulement si ils sont les solutions de l\'équation du second degré :',
        'X² - S·X + P = 0.',
        'Cette équation admet des solutions réelles si et seulement si son discriminant Δ = S² - 4P ≥ 0.',
        '3. Étude du signe des racines sans les calculer :',
        'Soit un trinôme admettant deux racines (Δ > 0) :',
        '• Si P < 0 : les deux racines sont de signes contraires (l\'une est strictement positive, l\'autre strictement négative).',
        '• Si P > 0 et S > 0 : les deux racines sont toutes deux strictement positives.',
        '• Si P > 0 et S < 0 : les deux racines sont toutes deux strictement négatives.'
      ]
    },
    {
      title: 'III. ÉQUATIONS BICARRÉES ET CHANGEMENT DE VARIABLE',
      content: [
        '1. Définition d\'une équation bicarrée :',
        'Une équation bicarrée est une équation polynomiale de degré 4 ne comportant que des puissances paires de l\'inconnue x :',
        'a x⁴ + b x² + c = 0  (avec a ≠ 0).',
        '2. Méthode de résolution par changement de variable :',
        '• On pose la nouvelle variable auxiliaire : X = x² (avec la contrainte impérative X ≥ 0).',
        '• L\'équation initiale devient une équation quadratique classique en X : a X² + b X + c = 0.',
        '• On calcule le discriminant Δ = b² - 4ac et on détermine les solutions réelles X₁ et X₂.',
        '• On ne retient que les solutions Xᵢ positives ou nulles (car un carré est toujours positif ou nul dans ℝ).',
        '• Pour chaque Xᵢ ≥ 0, on résout x² = Xᵢ, ce qui donne les racines initiales : x = -√Xᵢ  et  x = +√Xᵢ.',
        'Exemple d\'application résolu :',
        'Résoudre dans ℝ : x⁴ - 5x² + 4 = 0.',
        'Posons X = x² (X ≥ 0) ➔ X² - 5X + 4 = 0.',
        'Δ = (-5)² - 4(1)(4) = 25 - 16 = 9 > 0, √Δ = 3.',
        'X₁ = (5 - 3) / 2 = 1   et   X₂ = (5 + 3) / 2 = 4.',
        'Les deux solutions sont strictement positives ! On résout :',
        '• x² = 1 ➔ x = -1 ou x = 1.',
        '• x² = 4 ➔ x = -2 ou x = 2.',
        'L\'ensemble des solutions de l\'équation bicarrée est donc : S = {-2 ; -1 ; 1 ; 2}.'
      ]
    },
    {
      title: 'IV. ÉQUATIONS IRRATIONNELLES (AVEC RADICAUX)',
      content: [
        '1. Forme type √(A(x)) = B(x) :',
        'L\'élévation au carré exige impérativement que les deux membres soient de même signe !',
        'L\'équation √(A(x)) = B(x) est rigoureusement équivalente au système :',
        '{ B(x) ≥ 0        (condition de positivité du second membre)',
        '{ A(x) = [ B(x) ]² (égalité des carrés).',
        '(Remarque : la condition d\'existence A(x) ≥ 0 est automatiquement satisfaite puisque A(x) est égal au carré B(x)² ≥ 0).',
        '2. Exemple d\'application résolu :',
        'Résoudre dans ℝ : √(2x + 3) = x.',
        'Équivalence : { x ≥ 0  et  2x + 3 = x² }.',
        'x² - 2x - 3 = 0. Δ = 4 - 4(1)(-3) = 16. Racines : x₁ = -1 et x₂ = 3.',
        'On confronte avec la condition x ≥ 0 :',
        '• x = -1 est rejeté car négatif (une racine carrée ne peut jamais être négative).',
        '• x = 3 est accepté car 3 ≥ 0, et √(2(3)+3) = √9 = 3.',
        'Conclusion : S = {3}.'
      ]
    }
  ]
};

export const LESSON_3_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-3',
  number: '3',
  title: 'CHAPITRE S-3 : LIMITES DE FONCTIONS ET CONTINUITÉ SUR UN INTERVALLE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Analyse • Calcul Infinitésimal',
  level: 'Première S (S1 & S2)',
  readTime: '50 min de lecture approfondie',
  description: 'Opérations sur les limites, levée méthodique des 4 formes indéterminées, théorème des gendarmes, limites trigonométriques remarquables, continuité et Théorème des Valeurs Intermédiaires (TVI).',
  image: {
    caption: 'Figure S-3 : Illustration géométrique du Théorème des Valeurs Intermédiaires (TVI) — Continuité d’une fonction traversant l’axe des abscisses f(a)·f(b) < 0.',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  diagram: {
    title: 'Limites, Formes Indéterminées et TVI',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  introduction: `La notion de limite est le pilier central sur lequel repose l'ensemble de l'édifice mathématique moderne de l'analyse, permettant de donner un sens rigoureux à la division par l'infiniment petit et au comportement vers l'infiniment grand. En Première S, l'apprentissage des limites exige de maîtriser les techniques algébriques expertes de levée des formes indéterminées (factorisation par le terme dominant, multiplication par l'expression conjuguée, changement de variable).
Ce chapitre développe les théorèmes d'encadrement (théorème des gendarmes), établit la limite trigonométrique universelle lim_{x → 0} (sin x)/x = 1, formalise la continuité sur un intervalle et démontre l'un des théorèmes les plus puissants des mathématiques appliquées : le Théorème des Valeurs Intermédiaires (TVI) et son corollaire de bijection.`,
  conclusion: `En conclusion, le calcul des limites permet d'élucider le comportement asymptotique d'une fonction aux frontières de son domaine et d'identifier avec exactitude les asymptotes verticales, horizontales ou obliques (y = ax + b lorsque lim [f(x) - (ax + b)] = 0). Le Théorème des Valeurs Intermédiaires garantit quant à lui l'existence de solutions à des équations f(x) = k même lorsqu'il est impossible d'en expliciter algébriquement la formule exacte.`,
  sections: [
    {
      title: 'I. LES QUATRE FORMES INDÉTERMINÉES FONDAMENTALES ET LEURS TECHNIQUES DE LEVÉE',
      content: [
        'En analyse, il existe quatre formes indéterminées (FI) où les règles opératoires directes ne permettent pas de conclure :',
        '1. La forme indéterminée « +∞ - ∞ » :',
        '• Technique du terme dominant : on factorise par la plus grande puissance de x.',
        '• Technique de l\'expression conjuguée : pour les expressions avec radicaux, on multiplie et divise par l\'expression conjuguée : (√A - B) = (A - B²) / (√A + B).',
        '2. La forme indéterminée « 0 / 0 » :',
        '• Pour les fractions rationnelles au point a : comme le numérateur et le dénominateur s\'annulent en a, ils sont tous deux factorisables par (x - a). On simplifie par (x - a) avant de recalculer la limite.',
        '• Pour les radicaux : multiplication par la quantité conjuguée pour faire apparaître (x - a) au numérateur.',
        '3. La forme indéterminée « ∞ / ∞ » :',
        '• En +∞ ou -∞, on factorise le numérateur et le dénominateur par leurs termes de plus haut degré respectifs et on simplifie.',
        '4. La forme indéterminée « 0 × ∞ » :',
        '• On réécrit l\'expression sous forme de quotient pour se ramener à « 0 / 0 » ou « ∞ / ∞ ».'
      ]
    },
    {
      title: 'II. THÉORÈMES DE COMPARAISON ET THÉORÈME DES GENDARMES',
      content: [
        '1. Théorème d\'encadrement (dit « Théorème des gendarmes ») :',
        'Soient f, g et h trois fonctions définies sur un intervalle I contenant x₀ (ou au voisinage de ±∞) :',
        'Si pour tout x ∈ I : g(x) ≤ f(x) ≤ h(x),',
        'et si lim_{x → x₀} g(x) = L  et  lim_{x → x₀} h(x) = L  (avec L réel fini),',
        'alors la fonction f admet une limite en x₀ et : lim_{x → x₀} f(x) = L.',
        '2. Théorèmes de minoration et de majoration à l\'infini :',
        '• Si f(x) ≥ g(x) au voisinage de +∞ et si lim_{x → +∞} g(x) = +∞, alors par comparaison : lim_{x → +∞} f(x) = +∞.',
        '• Si f(x) ≤ h(x) au voisinage de +∞ et si lim_{x → +∞} h(x) = -∞, alors : lim_{x → +∞} f(x) = -∞.'
      ]
    },
    {
      title: 'III. LIMITES TRIGONOMÉTRIQUES REMARQUABLES',
      content: [
        'À partir de considérations géométriques sur le cercle trigonométrique (encadrement de l\'aire d\'un secteur circulaire : sin x ≤ x ≤ tan x pour x ∈ ]0 ; π/2[), on démontre les limites remarquables fondamentales en 0 (avec x exprimé impérativement en radians) :',
        '1. lim_{x → 0} (sin x / x) = 1.',
        '2. lim_{x → 0} (tan x / x) = 1.',
        '3. lim_{x → 0} [ (1 - cos x) / x² ] = 1/2.',
        'Exemple de calcul guidé :',
        'Calculer lim_{x → 0} [ sin(3x) / sin(5x) ].',
        'On réécrit le quotient : [ sin(3x) / (3x) ] × [ (5x) / sin(5x) ] × (3/5).',
        'Quand x → 0, sin(3x)/(3x) → 1 et 5x/sin(5x) → 1.',
        'Par produit : la limite est égale à 1 × 1 × (3/5) = 3/5.'
      ]
    },
    {
      title: 'IV. THÉORÈME DES VALEURS INTERMÉDIAIRES (TVI)',
      content: [
        '1. Énoncé du TVI général :',
        'Si une fonction f est continue sur un intervalle fermé borné [a, b], alors pour tout réel k compris entre f(a) et f(b), il existe au moins un réel c ∈ [a, b] tel que :',
        'f(c) = k.',
        '2. Corollaire fondamental de l\'annulation (f(c) = 0) :',
        'Si f est continue sur [a, b] et si f(a) et f(b) sont de signes contraires (c\'est-à-dire f(a) · f(b) ≤ 0), alors l\'équation f(x) = 0 admet au moins une solution c dans l\'intervalle [a, b].',
        '3. Théorème de la bijection (TVI avec stricte monotonie) :',
        'Si f est continue ET strictement monotone (strictement croissante ou strictement décroissante) sur [a, b], alors pour tout réel k compris entre f(a) et f(b), l\'équation f(x) = k admet une unique solution dans [a, b].'
      ]
    }
  ]
};

export const LESSON_4_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-4',
  number: '4',
  title: 'CHAPITRE S-4 : DÉRIVATION, ÉTUDE COMPLÈTE DE FONCTIONS ET BRANCHES INFINIES',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Analyse • Calcul Différentiel Approfondi',
  level: 'Première S (S1 & S2)',
  readTime: '50 min de lecture approfondie',
  description: 'Nombre dérivé, dérivée des fonctions composées (uⁿ, √u, 1/u), extremums locaux, point d\'inflexion, recherche des asymptotes obliques y = ax + b et étude méthodique des fonctions rationnelles.',
  image: {
    caption: 'Figure S-4 : Tracé complet d’une fonction rationnelle avec ses asymptotes et tangentes horizontales aux extremums locaux.',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  diagram: {
    title: 'Dérivation et Tracé de Courbes',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  introduction: `La dérivation est l'instrument le plus puissant et le plus élégant de l'analyse mathématique pour ausculter le comportement local et global des fonctions réelles. En série S, l'étude de la dérivation est poussée à son plus haut degré de technicité : maîtrise des dérivées de fonctions composées, caractérisation des tangentes horizontales, des points d'inflexion (où la dérivée seconde s'annule en changeant de signe), et identification des branches infinies et asymptotes obliques.
Ce chapitre formalise les théorèmes liant le signe de la dérivée au sens de variation strict, établit les formules des dérivées de composées, résout les problèmes d'optimisation géométrique et physique (dimensionnement de volumes maximaux), et déroule l'étude complète d'une fonction rationnelle complexe.`,
  conclusion: `En conclusion, l'étude complète d'une fonction en Première S marie la rigueur de l'algèbre différentielle à la géométrie du plan : le tableau de variations résume les asymptotes et extremums, tandis que le tracé de la courbe (Cf) intègre le positionnement relatif par rapport aux asymptotes via l'étude du signe de la différence f(x) - (ax + b).`,
  sections: [
    {
      title: 'I. FORMULES DE DÉRIVATION DES FONCTIONS COMPOSÉES',
      content: [
        'Soit u une fonction dérivable sur un intervalle I :',
        '1. Puissance entière : (uⁿ)\' = n · u\' · uⁿ⁻¹  (pour tout n ∈ ℕ*).',
        'Exemple : f(x) = (3x² - 5x + 1)⁴ ➔ f\'(x) = 4(6x - 5)(3x² - 5x + 1)³.',
        '2. Racine carrée : (√(u))\' = u\' / (2√u)  (pour tout x tel que u(x) > 0).',
        'Exemple : f(x) = √(2x² + 7) ➔ f\'(x) = (4x) / (2√(2x² + 7)) = (2x) / √(2x² + 7).',
        '3. Inverse : (1 / u)\' = -u\' / u²  (pour u(x) ≠ 0).',
        '4. Règle générale de la chaîne : (v ∘ u)\'(x) = u\'(x) · v\'(u(x)).'
      ]
    },
    {
      title: 'II. LIEN ENTRE DÉRIVÉE ET VARIATIONS & EXTREMUMS LOCAUX',
      content: [
        'Soit f une fonction dérivable sur un intervalle I de ℝ :',
        '1. Théorème de la monotonie :',
        '• f est constante sur I si et seulement si f\'(x) = 0 pour tout x ∈ I.',
        '• Si f\'(x) > 0 pour tout x ∈ I (sauf éventuellement en un nombre fini de points isolés où elle s\'annule), alors f est strictement croissante sur I.',
        '• Si f\'(x) < 0 pour tout x ∈ I, alors f est strictement décroissante sur I.',
        '2. Caractérisation des extremums locaux :',
        'Soit x₀ un point intérieur à l\'intervalle I :',
        'Si la dérivée f\' s\'annule en x₀ en changeant de signe, alors la fonction f admet un extremum local en x₀ :',
        '• Passage de + à - : maximum local f(x₀).',
        '• Passage de - à + : minimum local f(x₀).',
        'En ce point x₀, la tangente à la courbe est strictement horizontale (pente nulle).'
      ]
    },
    {
      title: 'III. RECHERCHE DES ASYMPTOTES OBLIQUES ET BRANCHES INFINIES',
      content: [
        '1. Définition de l\'asymptote oblique :',
        'La droite (D) d\'équation y = ax + b (avec a ≠ 0) est asymptote oblique à la courbe (Cf) en +∞ (ou en -∞) si et seulement si :',
        'lim_{x → +∞} [ f(x) - (ax + b) ] = 0.',
        '2. Détermination pratique des coefficients a et b :',
        '• Calcul de la pente : a = lim_{x → ±∞} [ f(x) / x ].',
        '• Calcul de l\'ordonnée à l\'origine : b = lim_{x → ±∞} [ f(x) - ax ].',
        '3. Position relative de la courbe par rapport à l\'asymptote :',
        'Pour savoir si la courbe (Cf) est située au-dessus ou au-dessous de son asymptote (D) :',
        'On étudie le signe algébrique de la différence d(x) = f(x) - (ax + b) :',
        '• Si d(x) > 0, la courbe (Cf) est au-dessus de (D).',
        '• Si d(x) < 0, la courbe (Cf) est au-dessous de (D).'
      ]
    }
  ]
};

export const LESSON_5_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-5',
  number: '5',
  title: 'CHAPITRE S-5 : FONCTIONS CIRCULAIRES TRIGONOMÉTRIQUES (SINUS, COSINUS, TANGENTE)',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Analyse • Fonctions Circulaires',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Étude des fonctions x ↦ sin x, x ↦ cos x, x ↦ tan x. Périodicité 2π et π, parités, dérivées trigonométriques, tableaux de variations sur l\'intervalle fondamental et tracés des sinusoïdes.',
  image: {
    caption: 'Figure S-5 : Cercle trigonométrique et définition géométrique des fonctions circulaires fondamentales cos x, sin x et tan x.',
    svgContent: SVG_MATH_1ERE_CERCLE_TRIGONOMETRIQUE
  },
  diagram: {
    title: 'Fonctions Circulaires et Sinusoïdes',
    svgContent: SVG_MATH_1ERE_CERCLE_TRIGONOMETRIQUE
  },
  introduction: `Les fonctions circulaires ou trigonométriques (sinus, cosinus et tangente) modélisent les phénomènes périodiques naturels et physiques : ondes sonores et lumineuses, courants alternatifs électriques dans les réseaux de la Senelec, marées océaniques le long de la presqu'île de Dakar et oscillations mécaniques d'un pendule.
Ce chapitre formalise l'analyse mathématique rigoureuse de ces fonctions sur ℝ : réduction de l'intervalle d'étude grâce à la périodicité de période T = 2π (ou T = π pour la tangente) et à la parité, dérivation géométrique des fonctions trigonométriques ((sin x)' = cos x, (cos x)' = -sin x, (tan x)' = 1 + tan² x), et tracé des sinusoïdes représentatives.`,
  conclusion: `En conclusion, les fonctions trigonométriques sont au carrefour de la géométrie euclidienne et de l'analyse fonctionnelle. Grâce aux propriétés de périodicité f(x + 2π) = f(x) et de parité, l'étude complète d'une fonction sinusoïdale sur la droite réelle ℝ tout entière se ramène à son étude sur un intervalle d'amplitude réduite comme [0, π], la courbe complète se déduisant par symétrie axiale ou centrale et par translations successives de vecteurs 2kπ·i.`,
  sections: [
    {
      title: 'I. ÉTUDE COMPLÈTE DE LA FONCTION SINUS : f(x) = sin x',
      content: [
        '1. Propriétés fondamentales :',
        '• Ensemble de définition : Df = ℝ.',
        '• Périodicité : pour tout x ∈ ℝ, sin(x + 2π) = sin x. La fonction sinus est périodique de période 2π.',
        '• Parité : pour tout x ∈ ℝ, sin(-x) = -sin x. La fonction est impaire (symétrie par rapport à l\'origine O).',
        '• Intervalle d\'étude réduit : on peut restreindre l\'étude à I₀ = [0 ; π].',
        '2. Dérivation et variations :',
        '• La fonction sinus est dérivable sur ℝ et : (sin x)\' = cos x.',
        '• Sur [0 ; π] : cos x > 0 pour x ∈ [0 ; π/2[ (f est croissante de 0 à 1) et cos x < 0 pour x ∈ ]π/2 ; π] (f est décroissante de 1 à 0).',
        '• f\'(π/2) = cos(π/2) = 0 : la courbe admet une tangente horizontale au point (π/2, 1).',
        '3. Courbe représentative : La courbe est appelée une sinusoïde, comprise entre les droites y = -1 et y = 1.'
      ]
    },
    {
      title: 'II. ÉTUDE COMPLÈTE DE LA FONCTION COSINUS : g(x) = cos x',
      content: [
        '1. Propriétés fondamentales :',
        '• Ensemble de définition : Dg = ℝ.',
        '• Périodicité : périodique de période 2π (cos(x + 2π) = cos x).',
        '• Parité : pour tout x ∈ ℝ, cos(-x) = cos x. La fonction est paire (symétrie par rapport à l\'axe (Oy)).',
        '• Intervalle d\'étude réduit : [0 ; π].',
        '2. Dérivation et variations :',
        '• La fonction cosinus est dérivable sur ℝ et : (cos x)\' = -sin x.',
        '• Sur [0 ; π] : sin x > 0 pour x ∈ ]0 ; π[, donc g\'(x) = -sin x < 0.',
        'La fonction cosinus est donc strictement décroissante sur [0 ; π], décroissant de cos(0) = 1 à cos(π) = -1.',
        '3. Lien avec la fonction sinus : cos x = sin(x + π/2). La courbe du cosinus (cosinusoïde) se déduit de celle du sinus par une translation horizontale de vecteur -(π/2)·i.'
      ]
    },
    {
      title: 'III. ÉTUDE COMPLÈTE DE LA FONCTION TANGENTE : h(x) = tan x',
      content: [
        '1. Définition et domaine :',
        'tan x = sin x / cos x. La fonction existe si et seulement si cos x ≠ 0, c\'est-à-dire x ≠ π/2 + kπ (k ∈ ℤ).',
        'D_tan = ℝ \\ { π/2 + kπ , k ∈ ℤ }.',
        '2. Périodicité et parité :',
        '• tan(x + π) = sin(x + π) / cos(x + π) = (-sin x) / (-cos x) = tan x. La fonction tangente est périodique de période π.',
        '• tan(-x) = -tan x : la fonction est impaire.',
        '• Intervalle d\'étude privilégié : [0 ; π/2[.',
        '3. Dérivée et variations :',
        '• Formules de dérivation : (tan x)\' = 1 + tan² x = 1 / cos² x.',
        'Comme cos² x > 0, la dérivée est strictement positive partout où elle est définie.',
        'La fonction tangente est donc strictement croissante sur chaque intervalle de son domaine.',
        '• Limite en π/2 par valeurs inférieures : lim_{x → (π/2)⁻} tan x = +∞.',
        'La droite x = π/2 est une asymptote verticale.'
      ]
    }
  ]
};

export const LESSON_6_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-6',
  number: '6',
  title: 'CHAPITRE S-6 : PRIMITIVES D’UNE FONCTION CONTINUE ET INTRODUCTION AU CALCUL INTÉGRAL',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Analyse • Calcul Intégral',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Définition d’une primitive, ensemble des primitives sur un intervalle, tableau des primitives usuelles et composées (u’uⁿ, u’/√u, u’/u²), condition initiale F(x₀) = y₀ et calcul d’aires planes.',
  image: {
    caption: 'Figure S-6 : Notion géométrique d’intégrale et de primitive — Aire de la surface plane délimitée sous la courbe d’une fonction continue positive.',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  diagram: {
    title: 'Primitives et Calcul d’Aires',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  introduction: `L'opération de recherche de primitives est le problème inverse exact de la dérivation : étant donnée une fonction f, il s'agit de reconstituer une fonction F dont f est la dérivée. En physique, cette opération est fondamentale : connaissant l'accélération d'un solide, on trouve sa vitesse par recherche de primitive ; connaissant sa vitesse, on obtient sa position.
Ce chapitre formalise la définition des primitives, démontre le théorème fondamental de structure (deux primitives d'une même fonction sur un intervalle diffèrent d'une constante réelle additive), dresse le tableau exhaustif des primitives usuelles et composées, et illustre l'unicité de la primitive vérifiant une condition initiale imposée.`,
  conclusion: `En conclusion, la théorie des primitives ouvre la voie royale vers le calcul intégral en classe de Terminale S. Pour toute fonction continue sur un intervalle I, l'ensemble de ses primitives est une famille infinie de fonctions parallèles de la forme F(x) + C (avec C ∈ ℝ), et la fixation d'une condition initiale F(x₀) = y₀ permet de sélectionner l'unique trajectoire répondant au problème physique posé.`,
  sections: [
    {
      title: 'I. DÉFINITION ET PROPRIÉTÉS FONDAMENTALES DES PRIMITIVES',
      content: [
        '1. Définition formelle :',
        'Soit f une fonction numérique définie sur un intervalle I de ℝ. On appelle primitive de f sur I toute fonction F dérivable sur I telle que pour tout x ∈ I :',
        'F\'(x) = f(x).',
        '2. Théorème d\'existence :',
        'Toute fonction continue sur un intervalle I admet des primitives sur cet intervalle.',
        '3. Théorème de structure :',
        'Si F est une primitive de f sur un intervalle I, alors :',
        '• Pour toute constante réelle C, la fonction G définie par G(x) = F(x) + C est également une primitive de f sur I.',
        '• Réciproquement, toute primitive de f sur I s\'écrit sous la forme F(x) + C où C est une constante réelle.',
        '4. Théorème de la condition initiale :',
        'Soient x₀ un point de I et y₀ un nombre réel quelconque.',
        'Il existe une unique primitive F₀ de f sur I vérifiant la condition initiale : F₀(x₀) = y₀.'
      ]
    },
    {
      title: 'II. TABLEAU DES PRIMITIVES USUELLES FONDAMENTALES',
      content: [
        'Pour chaque fonction f(x), on donne une primitive F(x) (à une constante C près) :',
        '• f(x) = 0 ➔ F(x) = C',
        '• f(x) = a (constante) ➔ F(x) = a·x',
        '• f(x) = x ➔ F(x) = x² / 2',
        '• f(x) = xⁿ (n ∈ ℕ*) ➔ F(x) = xⁿ⁺¹ / (n + 1)',
        '• f(x) = 1 / x² (sur ]0 ; +∞[ ou ]-∞ ; 0[) ➔ F(x) = -1 / x',
        '• f(x) = 1 / √x (sur ]0 ; +∞[) ➔ F(x) = 2√x',
        '• f(x) = cos x ➔ F(x) = sin x',
        '• f(x) = sin x ➔ F(x) = -cos x',
        '• f(x) = 1 + tan² x = 1 / cos² x ➔ F(x) = tan x'
      ]
    },
    {
      title: 'III. PRIMITIVES DE FONCTIONS COMPOSÉES',
      content: [
        'Soit u une fonction dérivable sur un intervalle I :',
        '• Forme u\' · uⁿ (avec n ∈ ℕ*) ➔ Primitive : uⁿ⁺¹ / (n + 1).',
        'Exemple : f(x) = (2x + 3)(x² + 3x - 5)⁴. On a u(x) = x² + 3x - 5 et u\'(x) = 2x + 3.',
        'La primitive est : F(x) = (x² + 3x - 5)⁵ / 5 + C.',
        '• Forme u\' / u² (pour u(x) ≠ 0) ➔ Primitive : -1 / u.',
        '• Forme u\' / √u (pour u(x) > 0) ➔ Primitive : 2√u.',
        '• Forme u\' · cos(u) ➔ Primitive : sin(u).',
        '• Forme u\' · sin(u) ➔ Primitive : -cos(u).'
      ]
    }
  ]
};

export const LESSON_7_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-7',
  number: '7',
  title: 'CHAPITRE S-7 : SUITES NUMÉRIQUES RÉELLES ET CONVERGENCE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Analyse • Suites et Limites',
  level: 'Première S (S1 & S2)',
  readTime: '50 min de lecture approfondie',
  description: 'Modes de génération des suites, raisonnement par récurrence, sens de variation, suites bornées, suites arithmétiques et géométriques, notion de limite finie et théorème de convergence monotone.',
  image: {
    caption: 'Figure S-7 : Représentation graphique en toile d’araignée d’une suite récurrente uₙ₊₁ = f(uₙ) avec la première bissectrice y = x.',
    svgContent: SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE
  },
  diagram: {
    title: 'Suites Numériques et Toile d’Araignée',
    svgContent: SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE
  },
  introduction: `Les suites réelles sont indispensables pour appréhender les processus discrets et les approximations numériques successives (algorithmes de dichotomie, méthode de Newton, suites de points fixes). En Première S, l'étude des suites franchit une étape d'abstraction majeure avec l'introduction du principe du raisonnement par récurrence, l'analyse fine des critères de convergence et la représentation géométrique des suites récurrentes u_{n+1} = f(u_n) sur la première bissectrice y = x.
Ce chapitre formalise les définitions des suites monotones et bornées, démontre les théorèmes de convergence et applique les suites aux calculs de limites et aux modélisations de dynamique de populations.`,
  conclusion: `En conclusion, le théorème de convergence monotone constitue un résultat fondamental de l'analyse : toute suite réelle croissante et majorée est obligatoirement convergente vers une limite finie L, et toute suite décroissante et minorée converge également. Si la suite vérifie de plus une relation u_{n+1} = f(u_n) avec f continue, alors sa limite éventuelle L vérifie nécessairement l'équation du point fixe f(L) = L.`,
  sections: [
    {
      title: 'I. LE PRINCIPE DU RAISONNEMENT PAR RÉCURRENCE',
      content: [
        'Pour démontrer qu\'une propriété P(n) dépendant d\'un entier n est vraie pour tout entier n ≥ n₀, on procède en trois étapes obligatoires :',
        '1. L\'Initialisation : on vérifie scrupuleusement que la propriété est vraie pour le premier rang n₀ (c\'est-à-dire que P(n₀) est vraie).',
        '2. L\'Hérédité : on suppose que la propriété P(k) est vraie pour un certain entier fixé k ≥ n₀ (hypothèse de récurrence), et on démontre rigoureusement sous cette hypothèse que la propriété reste vraie au rang suivant k + 1 (c\'est-à-dire que P(k + 1) est vraie).',
        '3. La Conclusion : on conclut solennellement que d\'après le principe de récurrence, la propriété P(n) est vraie pour tout entier naturel n ≥ n₀.'
      ]
    },
    {
      title: 'II. SENS DE VARIATION ET SUITES BORNÉES',
      content: [
        '1. Sens de variation d\'une suite (uₙ) :',
        '• (uₙ) est dite croissante si pour tout n : uₙ₊₁ ≥ uₙ (c\'est-à-dire uₙ₊₁ - uₙ ≥ 0).',
        '• (uₙ) est dite décroissante si pour tout n : uₙ₊₁ ≤ uₙ (c\'est-à-dire uₙ₊₁ - uₙ ≤ 0).',
        '• Méthode du quotient (pour une suite à termes strictement positifs uₙ > 0) :',
        'Si uₙ₊₁ / uₙ ≥ 1 pour tout n, la suite est croissante ; si uₙ₊₁ / uₙ ≤ 1, elle est décroissante.',
        '2. Suites majorées, minorées, bornées :',
        '• (uₙ) est majorée s\'il existe M ∈ ℝ tel que pour tout n : uₙ ≤ M.',
        '• (uₙ) est minorée s\'il existe m ∈ ℝ tel que pour tout n : uₙ ≥ m.',
        '• (uₙ) est bornée si elle est à la fois majorée et minorée (m ≤ uₙ ≤ M).'
      ]
    },
    {
      title: 'III. SUITES ARITHMÉTIQUES ET GÉOMÉTRIQUES EN PREMIÈRE S',
      content: [
        '1. Suite arithmétique de raison r :',
        '• Définition : uₙ₊₁ = uₙ + r.',
        '• Terme général : uₙ = u₀ + n·r  (ou uₙ = uₚ + (n - p)r).',
        '• Somme : Sₙ = (n + 1)(u₀ + uₙ) / 2.',
        '• Limite : si r > 0, lim uₙ = +∞ ; si r < 0, lim uₙ = -∞.',
        '2. Suite géométrique de raison q :',
        '• Définition : uₙ₊₁ = q · uₙ.',
        '• Terme général : uₙ = u₀ · qⁿ.',
        '• Somme (q ≠ 1) : Sₙ = u₀ · (1 - qⁿ⁺¹) / (1 - q).',
        '• Convergence selon la valeur de q :',
        '  - Si -1 < q < 1 (c\'est-à-dire |q| < 1) : lim_{n → +∞} qⁿ = 0 (la suite converge vers 0).',
        '  - Si q > 1 et u₀ > 0 : lim_{n → +∞} qⁿ = +∞ (diverge).',
        '  - Si q ≤ -1 : la suite n\'admet aucune limite (diverge par oscillations).'
      ]
    },
    {
      title: 'IV. THÉORÈMES DE CONVERGENCE MONOTONE',
      content: [
        '1. Théorème fondamental de la limite monotone :',
        '• Toute suite réelle croissante et majorée est convergente vers une limite finie L.',
        '• Toute suite réelle décroissante et minorée est convergente vers une limite finie L.',
        '2. Théorème du point fixe pour les suites récurrentes uₙ₊₁ = f(uₙ) :',
        'Si une suite définie par uₙ₊₁ = f(uₙ) converge vers une limite finie L, et si la fonction f est continue au point L, alors la limite L est nécessairement solution de l\'équation :',
        'f(L) = L.'
      ]
    }
  ]
};

export const COURSES_MATH_1ERE_S_PART1 = [
  LESSON_1_MATH_1ERE_S,
  LESSON_2_MATH_1ERE_S,
  LESSON_3_MATH_1ERE_S,
  LESSON_4_MATH_1ERE_S,
  LESSON_5_MATH_1ERE_S,
  LESSON_6_MATH_1ERE_S,
  LESSON_7_MATH_1ERE_S
];
