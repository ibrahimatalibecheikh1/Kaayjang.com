import { LessonContent } from './courses';
import {
  SVG_MATH_1ERE_PARABOLE,
  SVG_MATH_1ERE_SYSTEME_DEMI_PLANS,
  SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE,
  SVG_MATH_1ERE_DROITE_MAYER,
  SVG_MATH_1ERE_TANGENTE_COURBE,
  SVG_MATH_1ERE_ARBRE_PROBABILITE
} from './diagrams_1ere_math';

// =========================================================================
// MATHÉMATIQUES — PREMIÈRE L (SÉRIE LITTÉRAIRE L1 & L2)
// Programme officiel conforme au référentiel national de l'APAMS (Sénégal)
// Cours magistraux intégraux, démonstrations, exercices résolus & figures obligatoires
// =========================================================================

export const LESSON_1_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-1',
  number: '1',
  title: 'CHAPITRE 1 : SYSTÈMES D’ÉQUATIONS, D’INÉQUATIONS ET PROGRAMMATION LINÉAIRE',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Algèbre et Programmation Linéaire',
  level: 'Première L (L1 & L2)',
  readTime: '45 min de lecture approfondie',
  description: 'Résolution de systèmes linéaires 3×3 par la méthode du pivot de Gauss. Systèmes d\'inéquations à deux inconnues, délimitation graphique de la région admissible et optimisation linéaire aux sommets.',
  image: {
    caption: 'Figure 1 : Résolution graphique d’un système d’inéquations — Détermination de la région admissible polygonale et recherche du sommet optimal S.',
    svgContent: SVG_MATH_1ERE_SYSTEME_DEMI_PLANS
  },
  diagram: {
    title: 'Programmation Linéaire et Demi-plans',
    svgContent: SVG_MATH_1ERE_SYSTEME_DEMI_PLANS
  },
  introduction: `Dans la gestion économique moderne, qu'il s'agisse de la gestion d'une entreprise commerciale à Dakar, de la coopérative agricole dans le bassin arachidier ou de la logistique portuaire, les décideurs sont confrontés au problème d'allouer au mieux des ressources limitées (matières premières, main-d'œuvre, capital financier) afin de maximiser un profit ou de minimiser un coût de production. Cette problématique mathématique s'exprime sous forme de systèmes d'équations et d'inéquations linéaires. 
Ce chapitre enseigne la méthode systématique et rigoureuse du pivot de Gauss pour résoudre les systèmes à trois inconnues, puis la méthode graphique de résolution des systèmes d'inéquations définissant une région admissible polygonale dans le plan, avant d'aborder les fondements de la programmation linéaire.`,
  conclusion: `En conclusion, la méthode du pivot de Gauss fournit un algorithme universel infaillible pour résoudre n'importe quel système linéaire à 3 équations et 3 inconnues, en éliminant progressivement les variables pour aboutir à un système triangulaire immédiatement résoluble par remontée. En programmation linéaire, le théorème fondamental affirme que le maximum ou le minimum d'une fonction économique linéaire sur un polygone convexe de contraintes est nécessairement atteint sur au moins l'un de ses sommets extrêmes.`,
  sections: [
    {
      title: 'I. LES SYSTÈMES LINÉAIRES DE TROIS ÉQUATIONS À TROIS INCONNUES',
      content: [
        '1. Définition générale :',
        'Un système linéaire de trois équations à trois inconnues réelles x, y, z s\'écrit sous la forme standard :',
        '(S) : { a₁x + b₁y + c₁z = d₁  (L₁)',
        '      { a₂x + b₂y + c₂z = d₂  (L₂)',
        '      { a₃x + b₃y + c₃z = d₃  (L₃)',
        'où aᵢ, bᵢ, cᵢ sont les coefficients réels des inconnues et dᵢ les termes constants indépendants.',
        'Une solution du système est un triplet ordonné de nombres réels (x₀, y₀, z₀) qui vérifie simultanément et rigoureusement les trois égalités.',
        '2. Les trois opérations élémentaires autorisées sur les lignes :',
        'Pour résoudre le système sans modifier l\'ensemble de ses solutions (systèmes équivalents), on peut appliquer trois types de transformations sur les lignes :',
        '• Échanger l\'ordre de deux équations (Li ↔ Lj) afin de placer un coefficient simple (idéalement 1 ou -1) en position de pivot.',
        '• Multiplier tous les termes d\'une équation par une constante réelle non nulle k (Li ← k·Li avec k ≠ 0).',
        '• Remplacer une ligne par la combinaison linéaire de cette ligne avec une autre ligne (Li ← α·Li + β·Lj avec α ≠ 0).',
        'Ces opérations conservent intégralement l\'ensemble des solutions du système.'
      ]
    },
    {
      title: 'II. ALGORITHME DE RÉSOLUTION PAR LE PIVOT DE GAUSS',
      content: [
        'L\'algorithme du pivot de Gauss s\'articule en deux phases fondamentales :',
        '1. La phase d\'élimination (triangularisation du système) :',
        '• Étape 1 : Choisir la première équation L₁ comme ligne pivot avec le terme a₁x comme pivot (s\'il est nul, échanger L₁ avec une autre ligne).',
        '• Étape 2 : Éliminer l\'inconnue x dans les lignes L₂ et L₃ en effectuant les combinaisons : L₂ ← a₁·L₂ - a₂·L₁ et L₃ ← a₁·L₃ - a₃·L₁.',
        'On obtient un système réduit où L₂ et L₃ ne contiennent plus que les deux inconnues y et z.',
        '• Étape 3 : Dans le sous-système formé par les nouvelles lignes L₂ et L₃, choisir un second pivot sur l\'inconnue y, puis éliminer y dans L₃.',
        'Le système final obtenu est alors sous forme échelonnée (triangulaire) :',
        '{ a₁x + b₁y + c₁z = d₁',
        '{        b\'₂y + c\'₂z = d\'₂',
        '{               c\'\'₃z = d\'\'₃',
        '2. La phase de substitution inverse (remontée) :',
        '• De la troisième équation L₃, on déduit immédiatement la valeur unique de z = d\'\'₃ / c\'\'₃.',
        '• On remplace la valeur numérique trouvée pour z dans la deuxième équation L₂ pour calculer y.',
        '• Enfin, on substitue les valeurs de y et de z dans la première équation L₁ pour obtenir la valeur de x.',
        '• On conclut en écrivant l\'ensemble des solutions : S = {(x₀, y₀, z₀)}.'
      ]
    },
    {
      title: 'III. EXERCICE D\'APPLICATION DU COURS RÉSOLU PAS À PAS (PIVOT DE GAUSS)',
      content: [
        'Énoncé officiel du programme sénégalais :',
        'Résoudre dans ℝ³ par la méthode du pivot de Gauss le système linéaire suivant :',
        '(S) : { x + y + z = 6    (L₁)',
        '      { 2x - y + z = 3   (L₂)',
        '      { x + 2y - z = 3   (L₃)',
        'Résolution méthodique détaillée :',
        '• Étape 1 : Le pivot de L₁ sur l\'inconnue x est 1. Éliminons x dans L₂ et L₃ :',
        'Opération L₂ ← L₂ - 2L₁ :',
        '(2x - y + z) - 2(x + y + z) = 3 - 2(6)',
        '2x - y + z - 2x - 2y - 2z = 3 - 12 ➔ -3y - z = -9  (nouvelle L₂)',
        'Opération L₃ ← L₃ - L₁ :',
        '(x + 2y - z) - (x + y + z) = 3 - 6',
        'x + 2y - z - x - y - z = -3 ➔ y - 2z = -3  (nouvelle L₃)',
        'Le système équivalent partiel s\'écrit :',
        '{ x + y + z = 6      (L₁)',
        '{ -3y - z = -9       (L₂)',
        '{ y - 2z = -3        (L₃)',
        '• Étape 2 : Éliminons y dans L₃ en combinant L₂ et L₃ :',
        'Opération L₃ ← 3·L₃ + L₂ :',
        '3(y - 2z) + (-3y - z) = 3(-3) + (-9)',
        '3y - 6z - 3y - z = -9 - 9 ➔ -7z = -18 ➔ z = 18/7.',
        '• Étape 3 : Remontée et substitution pour trouver y et x :',
        'Calcul de y à partir de L₂ (-3y - z = -9) :',
        '-3y - 18/7 = -9 ➔ -3y = -9 + 18/7 = (-63 + 18)/7 = -45/7 ➔ y = (-45/7) / (-3) = 15/7.',
        'Calcul de x à partir de L₁ (x + y + z = 6) :',
        'x + 15/7 + 18/7 = 6 ➔ x + 33/7 = 42/7 ➔ x = 42/7 - 33/7 = 9/7.',
        '• Conclusion et vérification :',
        'Le triplet solution unique est : S = {(9/7 ; 15/7 ; 18/7)}.',
        'Vérification dans L₂ : 2(9/7) - (15/7) + (18/7) = (18 - 15 + 18)/7 = 21/7 = 3. L\'égalité est parfaitement vérifiée.'
      ]
    },
    {
      title: 'IV. SYSTÈMES D\'INÉQUATIONS DU PREMIER DEGRÉ ET RÉGION ADMISSIBLE',
      content: [
        '1. Droite frontière et demi-plan de solution :',
        'Toute inéquation de la forme ax + by + c ≤ 0 (avec (a, b) ≠ (0, 0)) partage le plan repéré en deux demi-plans délimités par la droite frontière (D) d\'équation ax + by + c = 0 :',
        '• Pour savoir quel demi-plan est solution, on choisit un point test n\'appartenant pas à la droite (généralement l\'origine O(0, 0) si c ≠ 0).',
        '• Si les coordonnées du point test vérifient l\'inéquation, le demi-plan contenant ce point est l\'ensemble solution.',
        '• Dans le cas contraire, c\'est le demi-plan opposé qui est la zone des solutions.',
        '2. Région admissible d\'un système :',
        'Un système de plusieurs inéquations linéaires :',
        '{ a₁x + b₁y ≤ c₁',
        '{ a₂x + b₂y ≤ c₂',
        '{ x ≥ 0 , y ≥ 0',
        'définit dans le plan une zone géométrique fermée ou ouverte appelée polygone ou région admissible.',
        'Cette région représente graphiquement l\'ensemble des couples (x, y) satisfaisant toutes les contraintes techniques et économiques imposées.'
      ]
    },
    {
      title: 'V. FONDEMENTS DE LA PROGRAMMATION LINÉAIRE',
      content: [
        '1. Définition du problème d\'optimisation :',
        'Soit une fonction économique Z = α·x + β·y (appelée fonction objectif ou fonction de coût/profit).',
        'L\'objectif est de déterminer le couple (x₀, y₀) de la région admissible qui rend Z maximale (maximisation du bénéfice) ou minimale (minimisation des coûts).',
        '2. Théorème fondamental de la programmation linéaire :',
        'Si la région admissible est un polygone convexe borné non vide, la fonction objectif linéaire Z atteint son extremum (maximum ou minimum) en au moins l\'un des sommets du polygone.',
        '3. Méthode pratique d\'évaluation aux sommets :',
        '• Déterminer par intersection de droites les coordonnées exactes de tous les sommets du polygone (O, A, B, C...).',
        '• Calculer la valeur numérique prise par la fonction Z en chacun des sommets.',
        '• Le sommet qui procure la plus grande valeur de Z donne la solution optimale du problème.'
      ]
    }
  ]
};

export const LESSON_2_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-2',
  number: '2',
  title: 'CHAPITRE 2 : POLYNÔMES, FACTORISATION ET SIGNE DU TRINÔME DU SECOND DEGRÉ',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Algèbre et Fonctions Polynômes',
  level: 'Première L (L1 & L2)',
  readTime: '45 min de lecture approfondie',
  description: 'Polynômes réels de degré n ≤ 4. Division euclidienne, factorisation par (x - α), calcul du discriminant Δ d’un trinôme, parabole représentative et tableau de signes pour inéquations.',
  image: {
    caption: 'Figure 2 : Courbe représentative d’un polynôme du second degré f(x) = ax² + bx + c (a > 0, Δ > 0) — Sommet S(-b/2a ; -Δ/4a), axe de symétrie et racines x₁ et x₂.',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  diagram: {
    title: 'Polynômes et Parabole du Second Degré',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  introduction: `Les polynômes constituent la famille de fonctions mathématiques la plus simple et la plus puissante pour modéliser des phénomènes économiques et physiques, de l'évolution d'une population à la prévision des bénéfices d'une entreprise. En Première L, le programme officiel de mathématiques stipule l'étude approfondie des polynômes réels de degré inférieur ou égal à 4. 
Ce chapitre pose les règles de la division euclidienne des polynômes, démontre le théorème fondamental de la racine (factorisation par x - α), développe la résolution des trinômes du second degré via le discriminant delta (Δ), et établit la méthode infaillible du tableau de signes pour résoudre les inéquations polynomiales.`,
  conclusion: `En conclusion, l'étude des polynômes repose sur le principe de la réduction de degré par factorisation. Dès qu'une racine réelle α est identifiée par inspection ou calcul, le polynôme P(x) de degré n se factorise exactement sous la forme (x - α)·Q(x) où Q(x) est de degré n - 1. Pour le trinôme du second degré ax² + bx + c, le discriminant Δ = b² - 4ac dicte entièrement la nature des racines réelles et le signe du trinôme (du signe de a à l'extérieur des racines).`,
  sections: [
    {
      title: 'I. NOTION DE POLYNÔME ET VOCABULAIRE FONDAMENTAL',
      content: [
        '1. Définition formelle :',
        'Une fonction polynôme à coefficients réels est une fonction P définie sur ℝ par une expression de la forme :',
        'P(x) = aₙ xⁿ + aₙ₋₁ xⁿ⁻¹ + ... + a₁ x + a₀',
        'où n est un entier naturel (n ∈ ℕ), et aₙ, aₙ₋₁, ..., a₀ sont des nombres réels fixés avec aₙ ≠ 0.',
        '• Le nombre n est appelé le degré du polynôme, noté d°(P) = n.',
        '• Le réel aₙ est le coefficient du terme de plus haut degré (ou coefficient dominant).',
        '• Le terme a₀ est le terme constant.',
        '2. Égalité de deux polynômes :',
        'Deux fonctions polynômes P et Q sont rigoureusement égales sur ℝ si et seulement si elles ont le même degré et leurs coefficients de même puissance sont égaux un à un (principe d\'identification des coefficients).'
      ]
    },
    {
      title: 'II. RACINE D\'UN POLYNÔME ET FACTORISATION PAR (x - α)',
      content: [
        '1. Définition d\'une racine (ou zéro) :',
        'Soit P un polynôme et α un nombre réel. On dit que α est une racine (ou un zéro) de P si et seulement si P(α) = 0.',
        '2. Théorème fondamental de divisibilité :',
        'Un nombre réel α est racine du polynôme P si et seulement si P(x) est factorisable par le binôme (x - α).',
        'C\'est-à-dire qu\'il existe un unique polynôme Q(x) tel que pour tout réel x :',
        'P(x) = (x - α) · Q(x), avec d°(Q) = d°(P) - 1.',
        '3. Techniques pour obtenir le quotient Q(x) :',
        '• Méthode 1 : La division euclidienne posée de P(x) par (x - α), analogue à la division posée des entiers.',
        '• Méthode 2 : L\'identification des coefficients. On écrit la forme générale de Q(x) avec des coefficients indéterminés (a, b, c), on développe l\'expression (x - α)Q(x), et on identifie les coefficients terme à terme avec ceux de P(x).'
      ]
    },
    {
      title: 'III. TRINÔME DU SECOND DEGRÉ ET DISCRIMINANT Δ',
      content: [
        'Soit le trinôme T(x) = ax² + bx + c avec a ≠ 0.',
        '1. Forme canonique du trinôme :',
        'En factorisant a et en complétant le début d\'un carré remarquable (x + b/(2a))², on obtient :',
        'T(x) = a [ (x + b/(2a))² - (b² - 4ac)/(4a²) ].',
        'On pose le discriminant : Δ = b² - 4ac.',
        'D\'où la forme canonique : T(x) = a [ (x + b/(2a))² - Δ/(4a²) ].',
        '2. Résolution de l\'équation ax² + bx + c = 0 selon le signe de Δ :',
        '• Cas 1 : Si Δ > 0, l\'équation possède deux racines réelles distinctes :',
        'x₁ = (-b - √Δ) / (2a)   et   x₂ = (-b + √Δ) / (2a).',
        'Le trinôme se factorise alors sous la forme : T(x) = a (x - x₁) (x - x₂).',
        '• Cas 2 : Si Δ = 0, l\'équation possède une racine double réelle :',
        'x₀ = -b / (2a).',
        'Le trinôme se factorise sous la forme : T(x) = a (x - x₀)².',
        '• Cas 3 : Si Δ < 0, l\'équation n\'admet aucune racine réelle dans ℝ.',
        'Le trinôme ne peut pas se factoriser en produit de facteurs du premier degré dans ℝ.',
        '3. Signe du trinôme du second degré :',
        '• Si Δ > 0 : T(x) est du signe de a à l\'extérieur des racines (pour x ∈ ]-∞, x₁[ ∪ ]x₂, +∞[ en supposant x₁ < x₂), et du signe opposé de a entre les racines (pour x ∈ ]x₁, x₂[).',
        '• Si Δ = 0 : T(x) est constamment du signe de a pour tout x ≠ x₀, et s\'annule en x₀.',
        '• Si Δ < 0 : T(x) est strictement du signe de a pour tout x ∈ ℝ (ne s\'annule jamais).'
      ]
    },
    {
      title: 'IV. EXERCICE D\'APPLICATION DU COURS RÉSOLU PAS À PAS (FACTORISATION ET INÉQUATION)',
      content: [
        'Énoncé officiel du programme sénégalais :',
        'Soit le polynôme du troisième degré défini par : P(x) = x³ - 4x² + x + 6.',
        '1. Vérifier que 2 est une racine évidente de P(x).',
        '2. Factoriser entièrement P(x) en produit de facteurs du premier degré.',
        '3. Dresser le tableau de signes de P(x) et en déduire l\'ensemble des solutions de l\'inéquation P(x) ≤ 0.',
        'Résolution méthodique détaillée :',
        '• Étape 1 : Calculons P(2) :',
        'P(2) = (2)³ - 4(2)² + (2) + 6 = 8 - 4(4) + 2 + 6 = 8 - 16 + 8 = 0.',
        'Comme P(2) = 0, le réel 2 est bien une racine de P, ce qui garantit que P(x) est divisible par (x - 2).',
        '• Étape 2 : Factorisation de P(x) :',
        'Il existe trois réels a, b, c tels que : P(x) = (x - 2)(ax² + bx + c).',
        'En développant : (x - 2)(ax² + bx + c) = ax³ + bx² + cx - 2ax² - 2bx - 2c = ax³ + (b - 2a)x² + (c - 2b)x - 2c.',
        'Par identification avec P(x) = x³ - 4x² + x + 6 :',
        '{ a = 1',
        '{ b - 2(1) = -4 ➔ b = -4 + 2 = -2',
        '{ -2c = 6 ➔ c = -3.',
        'Vérification du coefficient de x : c - 2b = -3 - 2(-2) = -3 + 4 = 1 (conforme !).',
        'On a donc : P(x) = (x - 2)(x² - 2x - 3).',
        '• Factorisons le trinôme du second degré Q(x) = x² - 2x - 3 :',
        'Calcul du discriminant : Δ = b² - 4ac = (-2)² - 4(1)(-3) = 4 + 12 = 16 > 0.',
        '√Δ = √16 = 4.',
        'Les deux racines sont :',
        'x₁ = (-(-2) - 4) / 2 = (2 - 4) / 2 = -2 / 2 = -1.',
        'x₂ = (-(-2) + 4) / 2 = (2 + 4) / 2 = 6 / 2 = 3.',
        'Le trinôme se factorise en : (x - x₁)(x - x₂) = (x - (-1))(x - 3) = (x + 1)(x - 3).',
        'Conclusion de la factorisation complète :',
        'P(x) = (x - 2)(x - 3)(x + 1).',
        '• Étape 3 : Tableau de signes de P(x) :',
        'Les trois racines classées par ordre croissant sont : -1, 2 et 3.',
        'Intervalle ]-∞, -1[ : (x+1) est -, (x-2) est -, (x-3) est - ➔ Produit P(x) : -',
        'Intervalle ]-1, 2[ : (x+1) est +, (x-2) est -, (x-3) est - ➔ Produit P(x) : +',
        'Intervalle ]2, 3[ : (x+1) est +, (x-2) est +, (x-3) est - ➔ Produit P(x) : -',
        'Intervalle ]3, +∞[ : (x+1) est +, (x-2) est +, (x-3) est + ➔ Produit P(x) : +',
        '• Résolution de l\'inéquation P(x) ≤ 0 :',
        'L\'expression P(x) est négative ou nulle sur les intervalles où le produit porte le signe - ou s\'annule.',
        'S = ]-∞ ; -1] ∪ [2 ; 3].'
      ]
    }
  ]
};

export const LESSON_3_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-3',
  number: '3',
  title: 'CHAPITRE 3 : LIMITES, CONTINUITÉ ET DÉRIVABILITÉ DES FONCTIONS',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Analyse et Calcul Différentiel',
  level: 'Première L (L1 & L2)',
  readTime: '45 min de lecture approfondie',
  description: 'Comportement d’une fonction à l’infini, limites des polynômes et fonctions rationnelles, continuité en un point, taux de variation, nombre dérivé et formules de dérivation.',
  image: {
    caption: 'Figure 3 : Interprétation géométrique du nombre dérivé — La droite tangente (T) en A(a, f(a)) a pour coefficient directeur la limite du taux d’accroissement f’(a).',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  diagram: {
    title: 'Nombre Dérivé et Tangente à la Courbe',
    svgContent: SVG_MATH_1ERE_TANGENTE_COURBE
  },
  introduction: `L'analyse infinitésimale et le calcul différentiel, inventés simultanément au XVIIe siècle par Isaac Newton et Gottfried Wilhelm Leibniz, ont révolutionné la compréhension scientifique du mouvement et du changement continu. En classe de Première L, l'étude des limites et des dérivées permet de dépasser la simple observation statique d'une courbe pour analyser la dynamique locale d'une fonction : croît-elle ? décroît-elle ? à quelle vitesse ? 
Ce chapitre formalise les limites à l'infini et en un point, la continuité intuitive et rigoureuse des fonctions, la définition du nombre dérivé via le taux de variation, le tableau des dérivées usuelles et le lien fondamental entre le signe de la fonction dérivée et le sens de variation.`,
  conclusion: `En conclusion, la dérivation transforme un problème géométrique complexe (le tracé et la forme d'une courbe) en un problème algébrique simple (l'étude du signe d'un polynôme f'(x)). Lorsque la dérivée est strictement positive sur un intervalle, la fonction y est strictement croissante ; lorsque la dérivée est strictement négative, la fonction est strictement décroissante ; et lorsqu'elle s'annule en changeant de signe, la fonction admet un extremum local (maximum ou minimum).`,
  sections: [
    {
      title: 'I. LIMITES DE FONCTIONS ET COMPORTEMENT ASYMPTOTIQUE',
      content: [
        '1. Notion intuitive de limite :',
        'La limite d\'une fonction f en un point x₀ (ou à l\'infini) décrit la valeur vers laquelle tend f(x) lorsque la variable x se rapproche de x₀ (ou devient arbitrairement grande positivement ou négativement).',
        '2. Limites fondamentales des fonctions polynômes à l\'infini :',
        'Règle d\'or : En +∞ et en -∞, une fonction polynôme a exactement la même limite que son terme de plus haut degré (terme dominant).',
        'Exemple : Soit P(x) = 2x³ - 5x² + 4x - 7.',
        '• lim_{x → +∞} P(x) = lim_{x → +∞} (2x³) = +∞.',
        '• lim_{x → -∞} P(x) = lim_{x → -∞} (2x³) = -∞ (car (-∞)³ = -∞ et 2 > 0).',
        '3. Limites des fonctions rationnelles à l\'infini :',
        'Une fonction rationnelle est le quotient de deux polynômes f(x) = P(x) / Q(x).',
        'Règle d\'or : En +∞ et en -∞, une fonction rationnelle a la même limite que le quotient des termes de plus haut degré de son numérateur et de son dénominateur.',
        'Exemple : f(x) = (3x² - 2x + 1) / (5x² + 7x - 4).',
        'lim_{x → +∞} f(x) = lim_{x → +∞} (3x² / 5x²) = 3/5. La droite d\'équation y = 3/5 est alors une asymptote horizontale.'
      ]
    },
    {
      title: 'II. CONTINUITÉ D\'UNE FONCTION NUMÉRIQUE',
      content: [
        '1. Définition en un point :',
        'Une fonction f définie sur un intervalle ouvert contenant a est dite continue en a si et seulement si :',
        'lim_{x → a} f(x) = f(a).',
        '2. Continuité sur un intervalle :',
        'Une fonction est continue sur un intervalle I si elle est continue en tout point de cet intervalle.',
        'Graphiquement, la courbe représentative d\'une fonction continue sur un intervalle se trace d\'un trait continu, sans lever le crayon du papier.',
        '3. Théorèmes de continuité usuels :',
        '• Toute fonction polynôme est continue sur ℝ tout entier.',
        '• Toute fonction rationnelle est continue sur chacun des intervalles de son ensemble de définition (partout où son dénominateur ne s\'annule pas).'
      ]
    },
    {
      title: 'III. NOMBRE DÉRIVÉ ET INTERPRÉTATION GÉOMÉTRIQUE',
      content: [
        '1. Taux de variation (ou taux d\'accroissement) :',
        'Soit f une fonction définie sur un intervalle I et a ∈ I. Pour tout réel h non nul tel que a + h ∈ I, le taux de variation de f entre a et a + h est le quotient :',
        'τ(h) = [ f(a + h) - f(a) ] / h.',
        'Géométriquement, ce taux représente le coefficient directeur de la droite sécante reliant le point A(a, f(a)) au point M(a + h, f(a + h)).',
        '2. Nombre dérivé en a :',
        'La fonction f est dite dérivable en a si le taux de variation τ(h) admet une limite finie réelle lorsque h tend vers 0.',
        'Cette limite finie est appelée le nombre dérivé de f en a et est notée f\'(a) :',
        'f\'(a) = lim_{h → 0} [ f(a + h) - f(a) ] / h.',
        '3. Interprétation géométrique et équation de la tangente :',
        'Le nombre dérivé f\'(a) représente exactement la pente (coefficient directeur) de la droite tangente (T) à la courbe représentative au point de contact A(a, f(a)).',
        'L\'équation cartésienne réduite de la tangente (T) est donnée par la formule :',
        'y = f\'(a) · (x - a) + f(a).'
      ]
    },
    {
      title: 'IV. RÈGLES DE DÉRIVATION ET FORMULES OPÉRATOIRES',
      content: [
        '1. Dérivées des fonctions élémentaires :',
        '• Si f(x) = k (constante), alors f\'(x) = 0.',
        '• Si f(x) = x, alors f\'(x) = 1.',
        '• Si f(x) = ax + b (affine), alors f\'(x) = a.',
        '• Si f(x) = xⁿ (avec n ≥ 1 entier), alors f\'(x) = n · xⁿ⁻¹.',
        'Exemples : (x²)\' = 2x ; (x³)\' = 3x² ; (x⁴)\' = 4x³.',
        '• Si f(x) = 1/x (pour x ≠ 0), alors f\'(x) = -1 / x².',
        '2. Formules d\'opération sur les dérivées :',
        'Soient u et v deux fonctions dérivables et k une constante réelle :',
        '• Somme : (u + v)\' = u\' + v\'.',
        '• Multiplication par une constante : (k · u)\' = k · u\'.',
        '• Produit : (u · v)\' = u\' · v + u · v\'.',
        '• Inverse : (1 / v)\' = -v\' / v² (pour v(x) ≠ 0).',
        '• Quotient : (u / v)\' = (u\' · v - u · v\') / v² (pour v(x) ≠ 0).'
      ]
    },
    {
      title: 'V. EXERCICE D\'APPLICATION DU COURS RÉSOLU PAS À PAS (DÉRIVÉE ET VARIATIONS)',
      content: [
        'Énoncé officiel du programme sénégalais :',
        'Soit la fonction numérique f définie sur ℝ par : f(x) = x² - 3x + 2.',
        '1. Calculer la dérivée f\'(x).',
        '2. Étudier le signe de f\'(x) et dresser le tableau complet des variations de f.',
        '3. Déterminer l\'équation de la tangente (T) au point d\'abscisse x₀ = 2.',
        'Résolution méthodique détaillée :',
        '• Étape 1 : Calcul de la fonction dérivée :',
        'f est une fonction polynôme du second degré, dérivable sur ℝ.',
        'f\'(x) = (x²)\' - 3(x)\' + (2)\' = 2x - 3(1) + 0 = 2x - 3.',
        '• Étape 2 : Signe de f\'(x) et variations :',
        'Résolvons l\'équation f\'(x) = 0 ➔ 2x - 3 = 0 ➔ 2x = 3 ➔ x = 3/2 = 1,5.',
        '• Pour x < 3/2 : 2x - 3 < 0, donc f\'(x) < 0. La fonction f est strictement décroissante sur ]-∞ ; 3/2].',
        '• Pour x > 3/2 : 2x - 3 > 0, donc f\'(x) > 0. La fonction f est strictement croissante sur [3/2 ; +∞[.',
        '• Valeur de l\'extremum au point d\'annulation x = 3/2 :',
        'f(3/2) = (3/2)² - 3(3/2) + 2 = 9/4 - 9/2 + 2 = 9/4 - 18/4 + 8/4 = -1/4 = -0,25.',
        'La fonction admet un minimum absolu en x = 3/2 valant -1/4.',
        '• Étape 3 : Équation de la tangente au point x₀ = 2 :',
        'Formule : y = f\'(2) · (x - 2) + f(2).',
        'Calculons f(2) : f(2) = 2² - 3(2) + 2 = 4 - 6 + 2 = 0.',
        'Calculons f\'(2) : f\'(2) = 2(2) - 3 = 4 - 3 = 1.',
        'L\'équation de la tangente (T) est donc :',
        'y = 1 · (x - 2) + 0 ➔ y = x - 2.'
      ]
    }
  ]
};

export const LESSON_4_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-4',
  number: '4',
  title: 'CHAPITRE 4 : ÉTUDE DES FONCTIONS POLYNÔMES ET HOMOGRAPHIQUES',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Analyse et Représentations Graphiques',
  level: 'Première L (L1 & L2)',
  readTime: '45 min de lecture approfondie',
  description: 'Plan complet d\'étude d\'une fonction numérique : domaine, parité, limites, dérivée, tableau de variations, extremums et asymptotes. Étude comparée de la parabole et de l\'hyperbole.',
  image: {
    caption: 'Figure 4 : Tracé d’une fonction homographique f(x) = (ax + b)/(cx + d) — Hyperbole équilatère avec ses asymptotes verticale (x = -d/c) et horizontale (y = a/c).',
    svgContent: SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE
  },
  diagram: {
    title: 'Fonction Homographique et Hyperbole',
    svgContent: SVG_MATH_1ERE_FONCTION_HOMOGRAPHIQUE
  },
  introduction: `L'étude systématique d'une fonction numérique constitue la synthèse par excellence de tout le programme d'analyse de Première L. Elle permet de construire la « carte d'identité » exhaustive d'une fonction et de tracer sa courbe représentative avec une exactitude graphique irréprochable. 
Ce chapitre détaille le plan méthodique universel d'étude de fonction en 7 étapes, applique cette démarche rigoureuse aux fonctions polynômes du second et du troisième degré (paraboles et courbes en S), puis approfondit l'étude des fonctions homographiques dont les représentations graphiques sont des hyperboles caractérisées par leurs asymptotes.`,
  conclusion: `En conclusion, l'étude complète d'une fonction permet de relier le calcul algébrique (dérivée, discriminant, limites) à la géométrie analytique (tangentes horizontales aux extremums, axes ou centres de symétrie, asymptotes). Pour une fonction homographique f(x) = (ax + b)/(cx + d), le point d'intersection des deux asymptotes Ω(-d/c, a/c) est toujours le centre de symétrie de l'hyperbole.`,
  sections: [
    {
      title: 'I. LE PLAN GÉNÉRAL D\'ÉTUDE D\'UNE FONCTION NUMÉRIQUE',
      content: [
        'Pour étudier méthodiquement toute fonction f, on suit scrupuleusement les 7 étapes suivantes :',
        '1. Ensemble de définition (Df) : déterminer les valeurs réelles pour lesquelles l\'expression f(x) a un sens mathématique (dénominateurs non nuls, expressions sous radicaux positives ou nulles).',
        '2. Éléments de symétrie et réduction du domaine :',
        '• Parité : si pour tout x ∈ Df, -x ∈ Df et f(-x) = f(x), f est paire (l\'axe des ordonnées (Oy) est axe de symétrie). Si f(-x) = -f(x), f est impaire (l\'origine O est centre de symétrie).',
        '• Périodicité éventuelle.',
        '3. Limites aux bornes du domaine de définition : calcul des limites en +∞, -∞ et aux valeurs interdites.',
        '4. Dérivation : calcul de f\'(x) et factorisation pour préparer l\'étude de son signe.',
        '5. Signe de la dérivée et tableau de variations complet : noter les racines de f\', les flèches de croissance/décroissance et les extremums locaux.',
        '6. Recherche des asymptotes et points remarquables : asymptotes verticales, horizontales, intersections avec les axes de coordonnées (f(0) et solutions de f(x) = 0).',
        '7. Tracé soigné de la courbe (Cf) dans un repère orthonormé (O ; i, j) en plaçant d\'abord les asymptotes, les tangentes horizontales puis la courbe.'
      ]
    },
    {
      title: 'II. ÉTUDE DES FONCTIONS POLYNÔMES DU SECOND DEGRÉ (PARABOLES)',
      content: [
        'Toute fonction de la forme f(x) = ax² + bx + c (avec a ≠ 0) a pour courbe une parabole (P) :',
        '• Son ensemble de définition est Df = ℝ.',
        '• Sa dérivée est f\'(x) = 2ax + b, qui s\'annule pour x = -b / (2a).',
        '• Le sommet de la parabole est le point S(-b / (2a) ; f(-b / (2a))) = S(-b / (2a) ; -Δ / (4a)).',
        '• La droite verticale d\'équation x = -b / (2a) est l\'axe de symétrie orthogonal de la parabole.',
        '• Orientation de la parabole :',
        '  - Si a > 0 : la parabole est ouverte vers le haut (convexe), la fonction décroît puis croît, admettant un minimum absolu en S.',
        '  - Si a < 0 : la parabole est ouverte vers le bas (concave), la fonction croît puis décroît, admettant un maximum absolu en S.'
      ]
    },
    {
      title: 'III. ÉTUDE DES FONCTIONS HOMOGRAPHIQUES (HYPERBOLES)',
      content: [
        'Une fonction homographique est définie par f(x) = (ax + b) / (cx + d) avec c ≠ 0 et ad - bc ≠ 0.',
        '1. Ensemble de définition :',
        'Le dénominateur s\'annule pour cx + d = 0 ➔ x = -d/c.',
        'L\'ensemble de définition est donc Df = ℝ \\ {-d/c} = ]-∞ ; -d/c[ ∪ ]-d/c ; +∞[.',
        '2. Dérivée d\'une fonction homographique :',
        'En appliquant la formule du quotient (u/v)\' :',
        'f\'(x) = [ a(cx + d) - (ax + b)c ] / (cx + d)² = (acx + ad - acx - bc) / (cx + d)² = (ad - bc) / (cx + d)².',
        'Le dénominateur (cx + d)² étant strictement positif sur Df, le signe de f\'(x) dépend uniquement du déterminant numérateur ad - bc :',
        '• Si ad - bc > 0 : f\'(x) > 0 sur chaque intervalle, la fonction est strictement croissante sur ]-∞ ; -d/c[ et sur ]-d/c ; +∞[.',
        '• Si ad - bc < 0 : f\'(x) < 0 sur chaque intervalle, la fonction est strictement décroissante sur chacun de ces deux intervalles.',
        '3. Asymptotes de l\'hyperbole :',
        '• Asymptote verticale : droite d\'équation x = -d/c (car lim_{x → -d/c} f(x) = ±∞).',
        '• Asymptote horizontale : droite d\'équation y = a/c (car lim_{x → ±∞} f(x) = a/c).',
        '• Centre de symétrie : le point de concours des asymptotes Ω(-d/c ; a/c) est le centre de symétrie de la courbe.'
      ]
    },
    {
      title: 'IV. EXERCICE D\'APPLICATION DU COURS RÉSOLU PAS À PAS (ÉTUDE COMPLÈTE)',
      content: [
        'Énoncé officiel du programme sénégalais :',
        'Soit la fonction f définie sur ℝ par : f(x) = x² - 4x + 3.',
        '1. Déterminer les limites de f en -∞ et en +∞.',
        '2. Calculer la dérivée f\'(x), étudier son signe et dresser le tableau de variations.',
        '3. Déterminer les coordonnées du sommet S et les points d\'intersection avec l\'axe des abscisses.',
        'Résolution méthodique détaillée :',
        '• 1. Limites aux infinis :',
        'f est un polynôme de terme dominant x².',
        'lim_{x → -∞} f(x) = lim_{x → -∞} (x²) = +∞.',
        'lim_{x → +∞} f(x) = lim_{x → +∞} (x²) = +∞.',
        '• 2. Dérivée et tableau de variations :',
        'f\'(x) = 2x - 4 = 2(x - 2).',
        'f\'(x) = 0 ⇔ x = 2.',
        'Pour x ∈ ]-∞ ; 2[, f\'(x) < 0 ➔ f est strictement décroissante.',
        'Pour x ∈ ]2 ; +∞[, f\'(x) > 0 ➔ f est strictement croissante.',
        '• 3. Coordonnées du sommet S :',
        'Pour x = 2, f(2) = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1.',
        'Le sommet est donc S(2 ; -1). C\'est un minimum absolu.',
        '• 4. Points d\'intersection avec l\'axe des abscisses (f(x) = 0) :',
        'x² - 4x + 3 = 0. Δ = (-4)² - 4(1)(3) = 16 - 12 = 4 > 0, √Δ = 2.',
        'x₁ = (4 - 2) / 2 = 1   et   x₂ = (4 + 2) / 2 = 3.',
        'La parabole coupe l\'axe des abscisses aux points A(1, 0) et B(3, 0), et l\'axe des ordonnées en C(0, 3).'
      ]
    }
  ]
};

export const LESSON_5_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-5',
  number: '5',
  title: 'CHAPITRE 5 : SUITES ARITHMÉTIQUES, SUITES GÉOMÉTRIQUES ET APPLICATIONS FINANCIÈRES',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Analyse et Mathématiques Financières',
  level: 'Première L (L1 & L2)',
  readTime: '45 min de lecture approfondie',
  description: 'Suites définies par formule explicite et par récurrence. Suites arithmétiques et géométriques, terme général, somme des n premiers termes et modélisation d\'une épargne en Francs CFA.',
  image: {
    caption: 'Figure 5 : Représentation graphique d’une suite numérique — Évolution discrète des termes uₙ en fonction du rang n et calcul de la somme cumulée des montants.',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  diagram: {
    title: 'Suites Arithmétiques et Géométriques',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  introduction: `Une suite numérique est une suite ordonnée de nombres indexés par les entiers naturels 0, 1, 2, 3... Les suites constituent l'outil mathématique par excellence pour modéliser des évolutions temporelles discontinues : croissance annuelle d'une population au Sénégal, remboursements mensuels d'un prêt bancaire, amortissement d'un matériel agricole ou calcul des intérêts d'une tontine ou d'un compte d'épargne. 
Ce chapitre présente les deux familles majeures de suites au programme de Première L : les suites arithmétiques (à accroissement constant) et les suites géométriques (à croissance proportionnelle/multiplicative), avec leurs formules de terme général, leurs calculs de sommes partielles et leurs applications économiques concrètes exprimées en Francs CFA.`,
  conclusion: `En conclusion, la distinction fondamentale entre suite arithmétique et suite géométrique tient à la nature du passage d'un terme au suivant : addition d'une raison r constante dans le cas arithmétique (croissance linéaire), ou multiplication par une raison q constante dans le cas géométrique (croissance exponentielle). Dans les applications financières réelles, une suite arithmétique modélise une épargne à versements fixes, tandis qu'une suite géométrique modélise un capital placé à intérêts composés.`,
  sections: [
    {
      title: 'I. NOTION DE SUITE NUMÉRIQUE ET MODES DE DÉFINITION',
      content: [
        '1. Définition générale :',
        'Une suite numérique réelle u est une fonction dont l\'ensemble de départ est une partie de l\'ensemble des entiers naturels ℕ (généralement ℕ tout entier ou ℕ* = {1, 2, 3...}) et dont l\'ensemble d\'arrivée est ℝ.',
        'On note u(n) = uₙ (lire « u indice n »), et la suite est notée globalement (uₙ) ou (uₙ)_{n ∈ ℕ}.',
        'Le nombre uₙ est le terme de rang n (ou terme général).',
        '2. Les deux modes de définition d\'une suite :',
        '• Formule explicite : uₙ est donné directement en fonction de l\'entier n, sous la forme uₙ = f(n). On peut calculer directement n\'importe quel terme sans connaître les précédents (ex : uₙ = 3n + 5).',
        '• Relation de récurrence : la suite est définie par la donnée de son premier terme (ex : u₀) et d\'une relation liant chaque terme au terme précédent : uₙ₊₁ = f(uₙ).'
      ]
    },
    {
      title: 'II. LES SUITES ARITHMÉTIQUES',
      content: [
        '1. Définition :',
        'Une suite (uₙ) est dite arithmétique s\'il existe un nombre réel r, appelé la raison de la suite, tel que pour tout entier naturel n :',
        'uₙ₊₁ = uₙ + r.',
        'Chaque terme s\'obtient en ajoutant le même nombre r au terme précédent.',
        '2. Formule explicite du terme général uₙ :',
        '• Si le premier terme est u₀ : pour tout n ∈ ℕ, uₙ = u₀ + n · r.',
        '• Si le premier terme est u₁ : pour tout n ≥ 1, uₙ = u₁ + (n - 1) · r.',
        '• De manière générale : pour tous entiers n et p, uₙ = uₚ + (n - p) · r.',
        '3. Sens de variation d\'une suite arithmétique :',
        'Comme uₙ₊₁ - uₙ = r :',
        '• Si r > 0 : la suite est strictement croissante.',
        '• Si r < 0 : la suite est strictement décroissante.',
        '• Si r = 0 : la suite est constante.',
        '4. Somme des termes consécutifs d\'une suite arithmétique :',
        'La somme Sₙ = u₀ + u₁ + ... + uₙ des (n + 1) premiers termes vaut :',
        'Sₙ = (Nombre de termes) × [ (Premier terme + Dernier terme) / 2 ].',
        'Sₙ = (n + 1) · (u₀ + uₙ) / 2.'
      ]
    },
    {
      title: 'III. LES SUITES GÉOMÉTRIQUES',
      content: [
        '1. Définition :',
        'Une suite (uₙ) est dite géométrique s\'il existe un nombre réel q non nul, appelé la raison de la suite, tel que pour tout entier naturel n :',
        'uₙ₊₁ = q · uₙ.',
        'Chaque terme s\'obtient en multipliant le terme précédent par la même constante q.',
        '2. Formule explicite du terme général uₙ :',
        '• Si le premier terme est u₀ : pour tout n ∈ ℕ, uₙ = u₀ · qⁿ.',
        '• Si le premier terme est u₁ : pour tout n ≥ 1, uₙ = u₁ · qⁿ⁻¹.',
        '• De manière générale : uₙ = uₚ · qⁿ⁻ᵖ.',
        '3. Somme des termes consécutifs d\'une suite géométrique (avec q ≠ 1) :',
        'La somme Sₙ = u₀ + u₁ + ... + uₙ des (n + 1) premiers termes est donnée par :',
        'Sₙ = (Premier terme) × [ (1 - q^(Nombre de termes)) / (1 - q) ].',
        'Sₙ = u₀ · (1 - qⁿ⁺¹) / (1 - q).'
      ]
    },
    {
      title: 'IV. EXERCICE D\'APPLICATION DU COURS RÉSOLU PAS À PAS (ÉPARGNE EN F CFA)',
      content: [
        'Énoncé officiel du programme sénégalais :',
        'Un élève de Première L décide d\'ouvrir un plan d\'épargne personnel au Sénégal pour financer ses futures études universitaires.',
        'Il dépose une somme initiale u₁ = 20 000 F CFA le premier mois.',
        'Chaque mois suivant, il augmente son versement mensuel de 2 500 F CFA par rapport au mois précédent.',
        '1. Quelle est la nature de la suite (uₙ) des versements mensuels ? Préciser son premier terme et sa raison.',
        '2. Exprimer uₙ en fonction du numéro de mois n.',
        '3. Déterminer le montant exact versé le 12e mois (u₁₂).',
        '4. Calculer la somme totale S₁₂ épargnée par cet élève au bout des 12 mois de l\'année.',
        'Résolution méthodique détaillée :',
        '• 1. Nature de la suite :',
        'D\'un mois au suivant, le montant du versement augmente d\'une valeur constante fixe de 2 500 F CFA :',
        'uₙ₊₁ = uₙ + 2 500.',
        'La suite (uₙ) est donc une suite arithmétique de premier terme u₁ = 20 000 F CFA et de raison r = 2 500 F CFA.',
        '• 2. Expression de uₙ en fonction de n :',
        'Comme le premier terme commence à l\'indice n = 1, la formule du terme général est :',
        'uₙ = u₁ + (n - 1) · r = 20 000 + (n - 1) × 2 500.',
        '• 3. Calcul du 12e montant (u₁₂) :',
        'Pour n = 12 :',
        'u₁₂ = 20 000 + (12 - 1) × 2 500 = 20 000 + 11 × 2 500 = 20 000 + 27 500 = 47 500 F CFA.',
        'Le montant versé lors du 12e mois est donc exactement de 47 500 F CFA.',
        '• 4. Calcul de la somme totale épargnée sur l\'année (S₁₂) :',
        'S₁₂ = u₁ + u₂ + ... + u₁₂ représente la somme de 12 termes consécutifs de la suite arithmétique.',
        'Formule de la somme :',
        'S₁₂ = (Nombre de termes) × [ (Premier terme + Dernier terme) / 2 ]',
        'S₁₂ = 12 × [ (u₁ + u₁₂) / 2 ] = 12 × [ (20 000 + 47 500) / 2 ] = 12 × [ 67 500 / 2 ] = 12 × 33 750 = 405 000 F CFA.',
        'Au terme des 12 mois, l\'élève aura constitué un capital total épargné de 405 000 F CFA.'
      ]
    }
  ]
};

export const LESSON_6_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-6',
  number: '6',
  title: 'CHAPITRE 6 : STATISTIQUE À DEUX VARIABLES ET AJUSTEMENT LINÉAIRE DE MAYER',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Statistique et Traitement de Données',
  level: 'Première L (L1 & L2)',
  readTime: '45 min de lecture approfondie',
  description: 'Séries statistiques doubles (xᵢ, yᵢ), construction du nuage de points. Méthode d’ajustement de Mayer par partition en deux sous-groupes, calcul des points moyens G₁ et G₂, équation de la droite et prévisions.',
  image: {
    caption: 'Figure 6 : Ajustement affine d’une série double par la méthode de Mayer — Partition équilibrée du nuage en deux sous-groupes et tracé de la droite de Mayer passant par G₁ et G₂.',
    svgContent: SVG_MATH_1ERE_DROITE_MAYER
  },
  diagram: {
    title: 'Nuage de Points et Droite de Mayer',
    svgContent: SVG_MATH_1ERE_DROITE_MAYER
  },
  introduction: `Dans les sciences humaines, la démographie, la sociologie et l'économie sénégalaise, on étudie très fréquemment deux grandeurs quantitatives simultanées mesurées sur un même groupe d'individus : la pluviométrie annuelle et le rendement en arachide, le niveau d'instruction et le revenu mensuel, ou le budget publicitaire d'un commerce et son chiffre d'affaires. Une telle étude relève de la statistique à deux variables.
Lorsque le nuage de points présente une forme allongée suggérant une corrélation linéaire entre les deux grandeurs, on cherche à résumer cette liaison par une droite d'ajustement. Ce chapitre enseigne la construction rigoureuse du nuage de points et la méthode géométrique d'ajustement linéaire de Mayer au programme de Première L, permettant de faire des prévisions et des interpolations fiables.`,
  conclusion: `En conclusion, la méthode de Mayer fournit un procédé manuel géométrique simple et robuste pour modéliser une tendance linéaire sans calculs lourds de covariance ou de moindres carrés. En scindant la série ordonnée en deux sous-groupes égaux, les deux points moyens G₁ et G₂ synthétisent fidèlement l'inertie du nuage. La droite obtenue (G₁G₂) permet ensuite d'effectuer des prévisions fiables par interpolation ou extrapolation prudente.`,
  sections: [
    {
      title: 'I. SÉRIES STATISTIQUES DOUBLES ET NUAGE DE POINTS',
      content: [
        '1. Définition d\'une série statistique à deux variables :',
        'On observe simultanément deux caractères quantitatifs X et Y sur une population de N individus. Les données sont recueillies sous forme de N couples de valeurs numériques : (x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ).',
        '2. Le nuage de points :',
        'Dans un repère orthogonal du plan, le nuage de points associé à la série double est l\'ensemble des points Mᵢ de coordonnées (xᵢ, yᵢ).',
        '• Forme du nuage : si les points sont disposés de manière allongée le long d\'une direction rectiligne privilégiée, on dit qu\'il existe une présomption de corrélation linéaire entre X et Y.',
        '• Un ajustement linéaire consiste à remplacer le nuage de points par une droite d\'équation y = ax + b passant le plus près possible de l\'ensemble des points.',
        '3. Le point moyen global G :',
        'Le point moyen global du nuage est le point G ayant pour coordonnées les moyennes arithmétiques respectives des variables X et Y :',
        'x̄ = (x₁ + x₂ + ... + xₙ) / n   et   ȳ = (y₁ + y₂ + ... + yₙ) / n.'
      ]
    },
    {
      title: 'II. PRINCIPE DE LA MÉTHODE D\'AJUSTEMENT DE MAYER',
      content: [
        'La méthode de Mayer consiste à partager le nuage de points ordonné en deux sous-groupes de même effectif (ou d\'effectifs différant d\'une unité si n est impair), puis à déterminer la droite passant par les points moyens de chaque sous-groupe :',
        '1. Étape 1 : Ranger impérativement les couples (xᵢ, yᵢ) par ordre croissant des valeurs de x (si plusieurs x sont égaux, classer selon les y).',
        '2. Étape 2 : Partager la série en deux sous-groupes de tailles équilibrées :',
        '• Groupe 1 : constitué des p premiers couples ordonnés.',
        '• Groupe 2 : constitué des (n - p) derniers couples ordonnés.',
        '3. Étape 3 : Calculer le point moyen G₁(x̄₁ ; ȳ₁) du premier groupe et le point moyen G₂(x̄₂ ; ȳ₂) du second groupe.',
        '4. Étape 4 : Déterminer l\'équation cartésienne de la droite de Mayer (G₁G₂) :',
        'La droite a pour équation y = ax + b, où :',
        '• Le coefficient directeur (pente) est : a = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁).',
        '• L\'ordonnée à l\'origine b s\'obtient en écrivant que la droite passe par G₁ : b = ȳ₁ - a · x̄₁ (ou par G₂).',
        '5. Propriété remarquable :',
        'Si les deux sous-groupes ont le même effectif, la droite de Mayer passe exactement par le point moyen global G du nuage !'
      ]
    },
    {
      title: 'III. EXERCICE D\'APPLICATION DU COURS RÉSOLU PAS À PAS (DROITE DE MAYER)',
      content: [
        'Énoncé officiel du programme sénégalais :',
        'Soit la série statistique double suivante comportant n = 6 observations déjà ordonnées selon les valeurs de x :',
        '(1, 2) ; (2, 3) ; (3, 5) ; (4, 6) ; (5, 8) ; (6, 9).',
        '1. Partager la série en deux sous-groupes de 3 points chacun et calculer les coordonnées des points moyens G₁ et G₂.',
        '2. Déterminer l\'équation de la droite d\'ajustement de Mayer y = ax + b sous forme de fractions irréductibles.',
        '3. Estimer graphiquement et par le calcul la valeur prévisible de y pour x = 10.',
        'Résolution méthodique détaillée :',
        '• 1. Partition en deux sous-groupes et points moyens :',
        'Comme n = 6, on forme deux groupes d\'effectif égal p = 3 :',
        '• Groupe 1 : (1, 2), (2, 3), (3, 5).',
        'x̄₁ = (1 + 2 + 3) / 3 = 6 / 3 = 2.',
        'ȳ₁ = (2 + 3 + 5) / 3 = 10 / 3.',
        'Le point moyen du groupe 1 est : G₁(2 ; 10/3).',
        '• Groupe 2 : (4, 6), (5, 8), (6, 9).',
        'x̄₂ = (4 + 5 + 6) / 3 = 15 / 3 = 5.',
        'ȳ₂ = (6 + 8 + 9) / 3 = 23 / 3.',
        'Le point moyen du groupe 2 est : G₂(5 ; 23/3).',
        '• 2. Calcul des coefficients de la droite de Mayer y = ax + b :',
        '• Calcul de la pente a :',
        'a = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁) = [ 23/3 - 10/3 ] / [ 5 - 2 ] = (13/3) / 3 = 13 / 9.',
        '• Calcul de l\'ordonnée à l\'origine b (en utilisant G₁) :',
        'b = ȳ₁ - a · x̄₁ = 10/3 - (13/9) × 2 = 10/3 - 26/9 = 30/9 - 26/9 = 4/9.',
        '• Conclusion de l\'équation de la droite :',
        'La droite d\'ajustement de Mayer a pour équation exacte :',
        'y = (13/9) x + 4/9.',
        '• 3. Prévision statistique pour x = 10 :',
        'y = (13/9)(10) + 4/9 = 130/9 + 4/9 = 134/9 ≈ 14,89.',
        'Pour x = 10, la valeur prévisionnelle du caractère y est d\'environ 14,9.'
      ]
    }
  ]
};

export const LESSON_7_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-7',
  number: '7',
  title: 'CHAPITRE 7 : DÉNOMBREMENT, ARRANGEMENTS, COMBINAISONS ET BINÔME DE NEWTON',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Dénombrement et Analyse Combinatoire',
  level: 'Première L (L1 & L2)',
  readTime: '45 min de lecture approfondie',
  description: 'Principes additifs et multiplicatifs, arbres de choix. Factorielle n!, p-listes, arrangements Anp, combinaisons Cnp, triangle de Pascal et formule du binôme de Newton.',
  image: {
    caption: 'Figure 7 : Modélisation des choix par arbre de dénombrement — Comptage exhaustif des issues, distinction fondamentale entre ordre (arrangements) et non-ordre (combinaisons).',
    svgContent: SVG_MATH_1ERE_ARBRE_PROBABILITE
  },
  diagram: {
    title: 'Arbres de Choix et Analyse Combinatoire',
    svgContent: SVG_MATH_1ERE_ARBRE_PROBABILITE
  },
  introduction: `Le dénombrement (ou analyse combinatoire) est la branche des mathématiques qui s'intéresse aux techniques de comptage rigoureux du nombre d'éléments d'un ensemble fini sans avoir à énumérer une à une toutes les possibilités. Dans la vie citoyenne, administrative et économique au Sénégal, le dénombrement est omniprésent : composition d'un bureau de vote ou d'une association de quartier, génération des numéros d'immatriculation des véhicules ou des numéros de téléphone à 9 chiffres, tirages des jeux de loterie, et calculs de probabilités élémentaires.
Ce chapitre établit les principes fondamentaux du dénombrement, clarifie la distinction essentielle entre tirages ordonnés (arrangements) et tirages simultanés sans ordre (combinaisons), formalise la factorielle n! et démontre la célèbre formule du binôme de Newton.`,
  conclusion: `En conclusion, l'analyse combinatoire repose sur une grille de décision simple en deux questions : 1) L'ordre des éléments compte-t-il ? (Si oui : p-listes ou arrangements ; si non : combinaisons). 2) Les répétitions d'éléments sont-elles autorisées ? Le coefficient binomial C_n^p donne le nombre de sous-ensembles de p éléments dans un ensemble à n éléments, et les coefficients de la formule du binôme de Newton (a + b)ⁿ se lisent directement sur la n-ième ligne du triangle de Pascal.`,
  sections: [
    {
      title: 'I. LES DEUX PRINCIPES FONDAMENTAUX DU DÉNOMBREMENT',
      content: [
        '1. Le principe additif (Règle de la somme) :',
        'Si un événement A peut se réaliser de n₁ façons et un événement B de n₂ façons, et si A et B sont mutuellement exclusifs (disjoints, c\'est-à-dire ne pouvant pas se réaliser en même temps), alors l\'événement « A ou B » peut se réaliser de n₁ + n₂ façons différentes.',
        'En langage ensembliste : si A ∩ B = ∅, alors Card(A ∪ B) = Card(A) + Card(B).',
        '2. Le principe multiplicatif (Règle du produit) :',
        'Si une procédure se décompose en deux étapes successives indépendantes, la première étape offrant n₁ choix possibles et la seconde n₂ choix possibles, alors le nombre total de façons d\'accomplir la procédure complète est égal au produit :',
        'N = n₁ × n₂.',
        'Ce principe se généralise à k étapes successives : N = n₁ × n₂ × ... × nₖ.',
        'Graphiquement, on représente ces choix successifs par un arbre de dénombrement où chaque chemin complet de la racine à une feuille représente une issue possible.'
      ]
    },
    {
      title: 'II. LES P-LISTES (OU P-UPLETS AVEC RÉPÉTITION)',
      content: [
        '1. Définition :',
        'Soit E un ensemble fini à n éléments et p un entier naturel non nul. Une p-liste (ou p-uplet) d\'éléments de E est une suite ordonnée de p éléments de E (les répétitions sont autorisées).',
        '2. Théorème de comptage :',
        'Le nombre total de p-listes d\'un ensemble à n éléments est égal à :',
        'N = nᵖ (n puissance p).',
        'Exemple d\'application au Sénégal : Un code secret de carte bancaire GIM-UEMOA est constitué de 4 chiffres choisis parmi les 10 chiffres décimaux {0, 1, ..., 9}. Le nombre total de codes possibles est : 10⁴ = 10 000 codes distincts.'
      ]
    },
    {
      title: 'III. LA FACTORIELLE ET LES ARRANGEMENTS (AVEC ORDRE ET SANS RÉPÉTITION)',
      content: [
        '1. Définition de la factorielle n! :',
        'Pour tout entier naturel n ≥ 1, le factoriel de n, noté n!, est le produit de tous les entiers strictement positifs de 1 jusqu\'à n :',
        'n! = 1 × 2 × 3 × ... × (n - 1) × n.',
        'Par convention mathématique impérative : 0! = 1.',
        'Exemples : 1! = 1 ; 2! = 2 ; 3! = 6 ; 4! = 24 ; 5! = 120.',
        '2. Les arrangements A_n^p :',
        'Un arrangement de p éléments choisis parmi n éléments distincts (avec 1 ≤ p ≤ n) est une suite ordonnée de p éléments deux à deux distincts (sans répétition).',
        'Formule du nombre d\'arrangements :',
        'A_n^p = n × (n - 1) × (n - 2) × ... × (n - p + 1) = n! / (n - p)!.',
        '3. Les permutations (cas particulier p = n) :',
        'Une permutation d\'un ensemble à n éléments est un arrangement des n éléments (changement d\'ordre des n éléments).',
        'Le nombre total de permutations de n éléments est : A_n^n = n! / (n - n)! = n! / 0! = n!.'
      ]
    },
    {
      title: 'IV. LES COMBINAISONS C_n^p (SANS ORDRE ET SANS RÉPÉTITION)',
      content: [
        '1. Définition :',
        'Une combinaison de p éléments choisis parmi n éléments (avec 0 ≤ p ≤ n) est un sous-ensemble (ou partie) de p éléments pris parmi n éléments distincts.',
        'Dans une combinaison, l\'ordre des éléments ne compte pas du tout ! Par exemple, le sous-ensemble {A, B, C} est strictement identique à {B, A, C} ou {C, A, B}.',
        '2. Formule fondamentale des combinaisons :',
        'Comme chaque combinaison de p éléments engendre p! arrangements différents en changeant l\'ordre des p éléments, on a la relation : A_n^p = p! × C_n^p.',
        'D\'où la formule : C_n^p = A_n^p / p! = n! / [ p! · (n - p)! ].',
        'Notations usuelles : C_n^p ou \\binom{n}{p} (lire « p parmi n »).',
        '3. Propriétés remarquables des combinaisons :',
        '• C_n^0 = 1   et   C_n^n = 1.',
        '• C_n^1 = n   et   C_n^{n-1} = n.',
        '• Symétrie : C_n^p = C_n^{n-p}. (Choisir p éléments à garder équivaut à choisir les n - p éléments à rejeter).',
        '• Formule de récurrence de Pascal : C_n^p = C_{n-1}^p + C_{n-1}^{p-1}.'
      ]
    },
    {
      title: 'V. LE TRIANGLE DE PASCAL ET LA FORMULE DU BINÔME DE NEWTON',
      content: [
        '1. Le triangle arithmétique de Pascal :',
        'Chaque terme d\'une ligne est obtenu en additionnant les deux termes situés juste au-dessus de lui :',
        'n = 0 : 1',
        'n = 1 : 1   1',
        'n = 2 : 1   2   1',
        'n = 3 : 1   3   3   1',
        'n = 4 : 1   4   6   4   1',
        'n = 5 : 1   5  10  10   5   1',
        '2. Formule du binôme de Newton :',
        'Pour tous nombres réels a et b et pour tout entier naturel n ≥ 1 :',
        '(a + b)ⁿ = Σ_{k=0}^n C_n^k · aⁿ⁻ᵏ · bᵏ.',
        'Développements usuels :',
        '• Pour n = 2 : (a + b)² = a² + 2ab + b².',
        '• Pour n = 3 : (a + b)³ = a³ + 3a²b + 3ab² + b³.',
        '• Pour n = 4 : (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴.'
      ]
    },
    {
      title: 'VI. EXERCICE D\'APPLICATION DU COURS RÉSOLU PAS À PAS (COMBINAISONS)',
      content: [
        'Énoncé officiel du programme sénégalais :',
        'Dans une classe de Première L comprenant 8 élèves candidats, on souhaite constituer un groupe de travail de 3 élèves.',
        '1. L\'ordre intervient-il dans la formation de ce groupe ?',
        '2. Combien de groupes différents de 3 élèves peut-on former parmi ces 8 candidats ?',
        'Résolution méthodique détaillée :',
        '• 1. Analyse de la situation :',
        'La composition d\'un groupe de travail ne dépend pas de l\'ordre dans lequel les élèves sont désignés (désigner {Mamadou, Fatou, Ibrahima} revient exactement au même que {Fatou, Ibrahima, Mamadou}). Il s\'agit donc d\'un tirage sans ordre et sans répétition : c\'est une combinaison.',
        '• 2. Calcul du nombre de combinaisons C₈³ :',
        'On applique la formule avec n = 8 et p = 3 :',
        'C₈³ = 8! / [ 3! · (8 - 3)! ] = 8! / (3! · 5!).',
        'Simplification astucieuse des factorielles :',
        '8! = 8 × 7 × 6 × 5!',
        'C₈³ = (8 × 7 × 6 × 5!) / (3! × 5!) = (8 × 7 × 6) / 3! = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = 56.',
        'Conclusion : On peut former exactement 56 groupes distincts de 3 élèves.'
      ]
    }
  ]
};

export const LESSON_8_MATH_1ERE_L: LessonContent = {
  id: 'math-1ere-l-chap-8',
  number: '8',
  title: 'CHAPITRE 8 : SÉRIE OFFICIELLE D’EXERCICES DE SYNTHÈSE RÉSOLUS (PREMIÈRE L)',
  subject: 'Mathématiques',
  classLevel: 'Première L',
  module: 'Synthèse et Évaluations Type Bac',
  level: 'Première L (L1 & L2)',
  readTime: '50 min d\'entraînement approfondi',
  description: 'Résolution détaillée et commentée des 6 exercices de synthèse officiels du référentiel APAMS : systèmes de Gauss, factorisation, dérivation, suites, Mayer et analyse combinatoire.',
  image: {
    caption: 'Figure 8 : Synthèse des outils d’analyse et d’algèbre — Visualisation combinée des variations, extremums locaux et droites remarquables.',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  diagram: {
    title: 'Synthèse Méthodologique Première L',
    svgContent: SVG_MATH_1ERE_PARABOLE
  },
  introduction: `Ce module de synthèse regroupe l'intégralité des 6 grands exercices d'évaluation récapitulatifs figurant dans le document officiel de l'APAMS pour la classe de Première L au Sénégal. Chaque exercice est traité avec toutes ses étapes intermédiaires, ses justifications théoriques et ses vérifications, offrant un outil d'auto-évaluation et de préparation aux devoirs et aux compositions trimestrielles.`,
  conclusion: `En conclusion, la maîtrise de ces 6 exercices de synthèse garantit une assimilation complète des compétences requises en Première L : méthode du pivot de Gauss, factorisation et tableau de signes d'un polynôme de degré 3, étude complète d'une fonction cubique f(x) = x³ - 3x² - 9x + 5, calculs financiers sur les suites arithmétiques, régression linéaire de Mayer et dénombrement d'arrangements et de combinaisons.`,
  sections: [
    {
      title: 'I. EXERCICE DE SYNTHÈSE 1 : SYSTÈME LINÉAIRE 3×3 PAR LE PIVOT DE GAUSS',
      content: [
        'Énoncé : Résoudre le système { x + y + z = 6 ; 2x - y + z = 3 ; x + 2y - z = 3.',
        'Solution pas à pas :',
        '• L₂ - 2L₁ donne : -3y - z = -9.',
        '• L₃ - L₁ donne : y - 2z = -3.',
        '• De L₃, on tire y = 2z - 3.',
        '• En remplaçant dans L₂ : -3(2z - 3) - z = -9 ➔ -6z + 9 - z = -9 ➔ -7z = -18 ➔ z = 18/7.',
        '• Par suite : y = 2(18/7) - 3 = 36/7 - 21/7 = 15/7.',
        '• Et x = 6 - (y + z) = 42/7 - (15/7 + 18/7) = 42/7 - 33/7 = 9/7.',
        '• Conclusion : S = {(9/7 ; 15/7 ; 18/7)}.'
      ]
    },
    {
      title: 'II. EXERCICE DE SYNTHÈSE 2 : FACTORISATION ET INÉQUATION P(x) ≤ 0',
      content: [
        'Énoncé : Factoriser P(x) = x³ - 4x² + x + 6 puis résoudre P(x) ≤ 0.',
        'Solution pas à pas :',
        '• Racine évidente : P(2) = 8 - 16 + 2 + 6 = 0, donc (x - 2) est facteur.',
        '• Division de P(x) par (x - 2) : P(x) = (x - 2)(x² - 2x - 3).',
        '• Factorisation du trinôme x² - 2x - 3 : Δ = 16, racines x = -1 et x = 3 ➔ (x² - 2x - 3) = (x - 3)(x + 1).',
        '• Forme factorisée complète : P(x) = (x - 2)(x - 3)(x + 1).',
        '• Tableau de signes : P s\'annule en -1, 2, 3. Les signes sont successivement - sur ]-∞, -1], + sur [-1, 2], - sur [2, 3] et + sur [3, +∞[.',
        '• Conclusion : P(x) ≤ 0 pour x ∈ ]-∞ ; -1] ∪ [2 ; 3].'
      ]
    },
    {
      title: 'III. EXERCICE DE SYNTHÈSE 3 : ÉTUDE DES VARIATIONS D\'UNE FONCTION DU 3e DEGRÉ',
      content: [
        'Énoncé : Étudier les variations de f(x) = x³ - 3x² - 9x + 5.',
        'Solution pas à pas :',
        '• Dérivée : f\'(x) = 3x² - 6x - 9 = 3(x² - 2x - 3).',
        '• Factorisation de f\'(x) : f\'(x) = 3(x - 3)(x + 1).',
        '• Annulation de la dérivée : f\'(x) = 0 pour x = -1 et x = 3 (tangentes horizontales).',
        '• Signe de f\'(x) : du signe de a (a = 3 > 0) à l\'extérieur des racines.',
        '  - Pour x ∈ ]-∞ ; -1[ ∪ ]3 ; +∞[, f\'(x) > 0 ➔ f est strictement croissante.',
        '  - Pour x ∈ ]-1 ; 3[, f\'(x) < 0 ➔ f est strictement décroissante.',
        '• Valeurs des extremums :',
        '  - Maximum local en x = -1 : f(-1) = (-1)³ - 3(-1)² - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10.',
        '  - Minimum local en x = 3 : f(3) = (3)³ - 3(3)² - 9(3) + 5 = 27 - 27 - 27 + 5 = -22.'
      ]
    },
    {
      title: 'IV. EXERCICE DE SYNTHÈSE 4 : APPLICATION FINANCIÈRE DES SUITES ARITHMÉTIQUES',
      content: [
        'Énoncé : Une épargne commence à 20 000 F CFA et augmente de 2 500 F CFA chaque mois. Calculer le 12e montant et la somme totale des 12 montants.',
        'Solution pas à pas :',
        '• u₁ = 20 000 et r = 2 500.',
        '• 12e versement : u₁₂ = u₁ + (12 - 1)r = 20 000 + 11 × 2 500 = 20 000 + 27 500 = 47 500 F CFA.',
        '• Somme des 12 montants : S₁₂ = 12 × (u₁ + u₁₂) / 2 = 12 × (20 000 + 47 500) / 2 = 12 × 33 750 = 405 000 F CFA.'
      ]
    },
    {
      title: 'V. EXERCICE DE SYNTHÈSE 5 : AJUSTEMENT DE MAYER',
      content: [
        'Énoncé : Pour la série (1, 2), (2, 3), (3, 5), (4, 6), (5, 8), (6, 9), déterminer la droite de Mayer.',
        'Solution pas à pas :',
        '• G₁(x̄₁ = 2 ; ȳ₁ = 10/3) et G₂(x̄₂ = 5 ; ȳ₂ = 23/3).',
        '• Pente : a = (23/3 - 10/3) / (5 - 2) = (13/3) / 3 = 13/9.',
        '• Ordonnée à l\'origine : b = 10/3 - (13/9)(2) = 30/9 - 26/9 = 4/9.',
        '• Équation : y = (13/9)x + 4/9.'
      ]
    },
    {
      title: 'VI. EXERCICE DE SYNTHÈSE 6 : DÉNOMBREMENT COMBINAISONS ET ARRANGEMENTS',
      content: [
        'Énoncé : Avec 10 élèves, calculer le nombre de groupes de 4 et le nombre d\'attributions de trois rôles distincts (Président, Secrétaire, Trésorier) à trois élèves.',
        'Solution pas à pas :',
        '• 1. Nombre de groupes de 4 élèves (sans ordre) : Combinaison C₁₀⁴.',
        'C₁₀⁴ = 10! / [ 4! · 6! ] = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 5 040 / 24 = 210 groupes.',
        '• 2. Attribution de 3 rôles distincts (avec ordre) : Arrangement A₁₀³.',
        'A₁₀³ = 10 × 9 × 8 = 720 façons distinctes de constituer le bureau.'
      ]
    }
  ]
};

export const COURSES_MATH_1ERE_L = [
  LESSON_1_MATH_1ERE_L,
  LESSON_2_MATH_1ERE_L,
  LESSON_3_MATH_1ERE_L,
  LESSON_4_MATH_1ERE_L,
  LESSON_5_MATH_1ERE_L,
  LESSON_6_MATH_1ERE_L,
  LESSON_7_MATH_1ERE_L,
  LESSON_8_MATH_1ERE_L
];
