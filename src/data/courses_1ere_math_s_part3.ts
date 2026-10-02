import { LessonContent } from './courses';
import {
  SVG_MATH_1ERE_ARBRE_PROBABILITE,
  SVG_MATH_1ERE_DROITE_MAYER
} from './diagrams_1ere_math';

// =========================================================================
// MATHÉMATIQUES — PREMIÈRE S (S1 & S2) — PARTIE 3 : PROBABILITÉS & STATISTIQUES
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (Sénégal)
// Leçons approfondies sans résumé, grands axes en chiffres romains & figures obligatoires
// =========================================================================

export const LESSON_14_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-14',
  number: '14',
  title: 'CHAPITRE S-14 : DÉNOMBREMENT ET ANALYSE COMBINATOIRE APPROFONDIE',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Probabilités • Analyse Combinatoire',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Techniques de comptage en ensembles finis : principes additif et multiplicatif, p-listes (nᵖ), arrangements A_n^p, permutations n!, combinaisons C_n^p, triangle de Pascal et formule du binôme de Newton.',
  image: {
    caption: 'Figure S-14 : Arbre de choix et modélisation combinatoire des tirages successifs et simultanés.',
    svgContent: SVG_MATH_1ERE_ARBRE_PROBABILITE
  },
  diagram: {
    title: 'Dénombrement et Analyse Combinatoire',
    svgContent: SVG_MATH_1ERE_ARBRE_PROBABILITE
  },
  introduction: `L'analyse combinatoire est la discipline mathématique dédiée à l'art de compter le nombre de configurations discrètes au sein d'ensembles finis. En Première S, le dénombrement est le préambule obligatoire et rigoureux à la théorie des probabilités : pour calculer la probabilité d'un événement selon le principe de Laplace (« nombre de cas favorables divisé par nombre de cas possibles »), encore faut-il dénombrer infailliblement ces deux cardinaux.
Ce chapitre formalise les quatre modèles classiques de tirage (avec remise ordonnée, sans remise ordonnée, simultané sans remise, avec remise non ordonnée), démontre par récurrence la formule du binôme de Newton et exploite les propriétés d'invariance du triangle de Pascal.`,
  conclusion: `En conclusion, le choix du modèle de dénombrement repose sur la grille dichotomique stricte : Ordre / Sans ordre et Répétition / Sans répétition. Tirer p objets successivement avec remise parmi n donne nᵖ issues ; les tirer successivement sans remise donne A_n^p issues ; les tirer simultanément (sans ordre ni remise) donne C_n^p issues. La formule de symétrie C_n^p = C_n^{n-p} et la formule d'addition de Pascal C_n^p = C_{n-1}^p + C_{n-1}^{p-1} forment le socle de toute la combinatoire moderne.`,
  sections: [
    {
      title: 'I. MODÉLISATION DES DIFFÉRENTS TYPES DE TIRAGES DANS UNE URNE',
      content: [
        'Soit une urne contenant n boules distinctes identifiables. On effectue un prélèvement de p boules (avec p ≤ n) :',
        '1. Tirage successif avec remise (p-listes ou p-uplets) :',
        '• On tire une boule, on note son résultat, puis on la remet dans l\'urne avant de tirer la suivante.',
        '• L\'ordre des tirages compte, et une même boule peut être tirée plusieurs fois.',
        '• Nombre d\'issues possibles : N = nᵖ.',
        '2. Tirage successif sans remise (Arrangements A_n^p) :',
        '• On tire une boule, on note son résultat et on la garde en main avant de tirer la suivante.',
        '• L\'ordre des tirages compte, mais aucune boule ne peut être tirée deux fois (sans répétition).',
        '• Nombre d\'issues possibles : A_n^p = n! / (n - p)! = n(n - 1)...(n - p + 1).',
        '• Cas particulier où p = n (toutes les boules sont tirées) : c\'est une permutation des n boules, donnant n! issues.',
        '3. Tirage simultané de p boules (Combinaisons C_n^p) :',
        '• On extrait en une seule poignée p boules de l\'urne à la fois.',
        '• L\'ordre des boules ne compte pas du tout, et les répétitions sont impossibles.',
        '• Nombre d\'issues possibles : C_n^p = \\binom{n}{p} = n! / [ p! (n - p)! ].'
      ]
    },
    {
      title: 'II. PROPRIÉTÉS DES COEFFICIENTS BINOMIAUX ET FORMULE DE NEWTON',
      content: [
        '1. Propriétés remarquables des combinaisons C_n^p :',
        '• C_n^0 = C_n^n = 1  et  C_n^1 = C_n^{n-1} = n.',
        '• Symétrie : C_n^p = C_n^{n-p}.',
        '• Formule de Pascal : C_n^p = C_{n-1}^p + C_{n-1}^{p-1}.',
        '• Somme de la n-ième ligne du triangle de Pascal : Σ_{k=0}^n C_n^k = 2ⁿ (cardinal de l\'ensemble des parties P(E)).',
        '2. Formule du binôme de Newton :',
        'Pour tous nombres réels ou complexes a et b, et tout entier n ∈ ℕ* :',
        '(a + b)ⁿ = Σ_{k=0}^n C_n^k · aⁿ⁻ᵏ · bᵏ',
        '= C_n^0 aⁿ + C_n^1 aⁿ⁻¹ b + C_n^2 aⁿ⁻² b² + ... + C_n^n bⁿ.'
      ]
    }
  ]
};

export const LESSON_15_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-15',
  number: '15',
  title: 'CHAPITRE S-15 : CALCUL DES PROBABILITÉS ET VARIABLES ALÉATOIRES',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Probabilités • Événements et Lois',
  level: 'Première S (S1 & S2)',
  readTime: '50 min de lecture approfondie',
  description: 'Espace probabilisé fini, équiprobabilité, probabilités conditionnelles P_B(A), arbres pondérés, indépendance d’événements, formule des probabilités totales, variables aléatoires et loi binomiale B(n, p).',
  image: {
    caption: 'Figure S-15 : Arbre pondéré complet de probabilité — Nœuds, probabilités directes, probabilités conditionnelles et formule des probabilités totales.',
    svgContent: SVG_MATH_1ERE_ARBRE_PROBABILITE
  },
  diagram: {
    title: 'Arbre Pondéré et Probabilités Totales',
    svgContent: SVG_MATH_1ERE_ARBRE_PROBABILITE
  },
  introduction: `La théorie des probabilités, née des échanges épistolaires entre Blaise Pascal et Pierre de Fermat en 1654 sur les jeux de hasard, fournit le cadre mathématique rigoureux pour quantifier l'incertitude et modéliser le hasard. Dans le monde contemporain, les probabilités sous-tendent les sciences de l'ingénieur, l'épidémiologie médicale, la génétique des populations au Sénégal et la gestion financière du risque.
Ce chapitre formalise les axiomes de Kolmogorov dans le cas des univers finis, développe l'outil majeur de l'arbre pondéré pour traiter le conditionnement, démontre la formule des probabilités totales et introduit la notion fondamentale de variable aléatoire discrète avec son espérance, sa variance et la loi binomiale.`,
  conclusion: `En conclusion, la formule des probabilités totales P(B) = Σ P(Aᵢ ∩ B) = Σ P(Aᵢ)·P_{Aᵢ}(B) est la clé de voûte du calcul probabiliste structuré en arbres pondérés. Une variable aléatoire X transforme chaque issue d'une expérience aléatoire en une valeur numérique ; son espérance mathématique E(X) représente la valeur moyenne théorique espérée à long terme, et sa variance V(X) mesure la dispersion des valeurs autour de la moyenne.`,
  sections: [
    {
      title: 'I. PROBABILITÉS CONDITIONNELLES ET ARBRES PONDÉRÉS',
      content: [
        '1. Définition de la probabilité conditionnelle :',
        'Soit un univers fini Ω muni d\'une probabilité P. Soient A et B deux événements avec P(B) > 0.',
        'La probabilité conditionnelle de l\'événement A sachant que l\'événement B est réalisé, notée P(A|B) ou P_B(A), est définie par :',
        'P_B(A) = P(A ∩ B) / P(B).',
        '2. Formule des probabilités composées :',
        'De la définition précédente, on déduit immédiatement :',
        'P(A ∩ B) = P(B) × P_B(A) = P(A) × P_A(B).',
        '3. Règle des chemins sur un arbre pondéré :',
        '• Règle 1 : La somme des probabilités des branches issues d\'un même nœud est toujours égale à 1.',
        '• Règle 2 : La probabilité de l\'événement correspondant à un chemin complet est égale au produit des probabilités portées par les branches de ce chemin.'
      ]
    },
    {
      title: 'II. FORMULE DES PROBABILITÉS TOTALES ET INDÉPENDANCE',
      content: [
        '1. Système complet d\'événements (Partition de Ω) :',
        'Des événements A₁, A₂, ..., Aₙ forment une partition de l\'univers Ω si et seulement si ils sont deux à deux disjoints (Aᵢ ∩ Aⱼ = ∅ pour i ≠ j) et leur réunion est égale à l\'univers tout entier (A₁ ∪ A₂ ∪ ... ∪ Aₙ = Ω).',
        '2. Formule des probabilités totales :',
        'Si A₁, A₂, ..., Aₙ forment une partition de Ω avec P(Aᵢ) > 0 pour tout i, alors pour tout événement B :',
        'P(B) = P(A₁ ∩ B) + P(A₂ ∩ B) + ... + P(Aₙ ∩ B)',
        '= P(A₁) × P_{A₁}(B) + P(A₂) × P_{A₂}(B) + ... + P(Aₙ) × P_{Aₙ}(B).',
        'Cas usuel avec un événement A et son contraire Ā :',
        'P(B) = P(A ∩ B) + P(Ā ∩ B) = P(A) · P_A(B) + P(Ā) · P_Ā(B).',
        '3. Indépendance de deux événements :',
        'Deux événements A et B sont dits indépendants si et seulement si :',
        'P(A ∩ B) = P(A) × P(B).',
        'Si P(B) > 0, cette condition équivaut rigoureusement à : P_B(A) = P(A) (la réalisation de B n\'influence en rien la probabilité de A).'
      ]
    },
    {
      title: 'III. VARIABLES ALÉATOIRES DISCRÈTES ET PARAMÈTRES',
      content: [
        '1. Définition :',
        'Une variable aléatoire discrète X sur un univers fini Ω est une fonction qui associe à chaque issue élémentaire ω de Ω un nombre réel X(ω).',
        'L\'ensemble des valeurs prises par X est noté X(Ω) = {x₁, x₂, ..., xₖ}.',
        '2. Loi de probabilité de X :',
        'C\'est la donnée des probabilités pᵢ = P(X = xᵢ) pour chaque valeur possible xᵢ, vérifiant obligatoirement : Σ pᵢ = 1.',
        '3. Paramètres statistiques d\'une variable aléatoire :',
        '• Espérance mathématique (moyenne pondérée) : E(X) = Σ xᵢ · pᵢ.',
        '• Variance : V(X) = Σ (xᵢ - E(X))² · pᵢ = E(X²) - [E(X)]² (Formule de König-Huygens).',
        '• Écart-type : σ(X) = √(V(X)).'
      ]
    },
    {
      title: 'IV. LE SCHÉMA DE BERNOULLI ET LA LOI BINOMIALE B(n, p)',
      content: [
        '1. Épreuve de Bernoulli :',
        'Une épreuve de Bernoulli est une expérience aléatoire n\'admettant que deux issues possibles : le Succès (S) de probabilité p, et l\'Échec (E) de probabilité q = 1 - p.',
        '2. Schéma de Bernoulli et loi binomiale :',
        'On répète n fois de manière identique et indépendante une même épreuve de Bernoulli de paramètre p.',
        'Soit X la variable aléatoire égale au nombre total de succès obtenus au cours de ces n épreuves.',
        'On dit que X suit la loi binomiale de paramètres n et p, notée B(n, p).',
        '3. Formule de probabilité de la loi binomiale :',
        'Pour tout entier k ∈ {0, 1, 2, ..., n} :',
        'P(X = k) = C_n^k · pᵏ · (1 - p)ⁿ⁻ᵏ.',
        '4. Espérance et variance de la loi binomiale :',
        '• E(X) = n · p.',
        '• V(X) = n · p · (1 - p).',
        '• σ(X) = √(n · p · (1 - p)).'
      ]
    }
  ]
};

export const LESSON_16_MATH_1ERE_S: LessonContent = {
  id: 'math-1ere-s-chap-16',
  number: '16',
  title: 'CHAPITRE S-16 : STATISTIQUE À DEUX VARIABLES ET AJUSTEMENT LINÉAIRE DES MOINDRES CARRÉS',
  subject: 'Mathématiques',
  classLevel: 'Première S',
  module: 'Pôle Statistiques • Régression Linéaire',
  level: 'Première S (S1 & S2)',
  readTime: '45 min de lecture approfondie',
  description: 'Séries statistiques doubles, covariance Cov(X,Y), méthode des moindres carrés, droite de régression linéaire de y en x, coefficient de corrélation linéaire r de Pearson et prévisions statistiques.',
  image: {
    caption: 'Figure S-16 : Droite de régression linéaire des moindres carrés passant par le point moyen G(x̄, ȳ) et minimisant la somme des résidus carrés.',
    svgContent: SVG_MATH_1ERE_DROITE_MAYER
  },
  diagram: {
    title: 'Statistiques Doubles et Régression Linéaire',
    svgContent: SVG_MATH_1ERE_DROITE_MAYER
  },
  introduction: `Dans l'analyse quantitative de données expérimentales en sciences physiques, en chimie, en biologie et en économie, l'étude des séries statistiques à deux caractères simultanés permet d'analyser l'existence et l'intensité d'une relation fonctionnelle entre deux grandeurs X et Y.
En Première S, l'étude dépasse la méthode géométrique élémentaire de Mayer pour aborder la méthode optimale de la droite de régression linéaire par les moindres carrés (introduite par Legendre et Gauss), qui minimise rigoureusement la somme des carrés des écarts verticaux entre les points observés et la droite, et formalise le coefficient de corrélation linéaire r de Bravais-Pearson.`,
  conclusion: `En conclusion, la régression par les moindres carrés fournit la modélisation affine optimale de Y en fonction de X sous la forme y = ax + b, où la pente a = Cov(X, Y) / V(X) et la droite passe impérativement par le point moyen global G(x̄, ȳ). Le coefficient de corrélation linéaire r mesure la force du lien linéaire : dès que |r| est proche de 1 (|r| ≥ 0,85 ou 0,9), l'ajustement linéaire est jugé excellent et autorise des extrapolations rigoureuses.`,
  sections: [
    {
      title: 'I. PARAMÈTRES D\'UNE SÉRIE STATISTIQUE DOUBLE (X, Y)',
      content: [
        'Soit une série double (x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ) d\'effectif total N :',
        '1. Moyennes arithmétiques :',
        'x̄ = (1/N) Σ xᵢ   et   ȳ = (1/N) Σ yᵢ.',
        'Le point G(x̄, ȳ) est le point moyen du nuage de points.',
        '2. Variances et écarts-types marginaux :',
        '• V(X) = (1/N) Σ (xᵢ - x̄)² = (1/N) Σ xᵢ² - x̄²  ;  σ_X = √(V(X)).',
        '• V(Y) = (1/N) Σ (yᵢ - ȳ)² = (1/N) Σ yᵢ² - ȳ²  ;  σ_Y = √(V(Y)).',
        '3. La Covariance de la série double :',
        'La covariance mesure la variation conjointe des deux caractères :',
        'Cov(X, Y) = (1/N) Σ (xᵢ - x̄)(yᵢ - ȳ) = (1/N) Σ xᵢ yᵢ - x̄ · ȳ (Formule pratique de König).'
      ]
    },
    {
      title: 'II. LA MÉTHODE DES MOINDRES CARRÉS ET LA DROITE DE RÉGRESSION',
      content: [
        '1. Principe des moindres carrés :',
        'On cherche la droite (D) d\'équation y = ax + b qui minimise la somme des carrés des résidus verticaux S(a, b) = Σ [ yᵢ - (a xᵢ + b) ]².',
        '2. Formules des coefficients de la droite de régression de y en x :',
        'Les coefficients qui minimisent cette somme d\'écarts sont donnés par :',
        '• La pente a : a = Cov(X, Y) / V(X).',
        '• L\'ordonnée à l\'origine b : b = ȳ - a · x̄.',
        'Conséquence remarquable : La droite de régression linéaire des moindres carrés passe rigoureusement par le point moyen G(x̄, ȳ) !',
        'Son équation réduite peut s\'écrire directement sous la forme centrée :',
        'y - ȳ = [ Cov(X, Y) / V(X) ] · (x - x̄).'
      ]
    },
    {
      title: 'III. COEFFICIENT DE CORRÉLATION LINÉAIRE DE PEARSON',
      content: [
        '1. Définition :',
        'Le coefficient de corrélation linéaire entre X et Y, noté r, est le quotient sans dimension :',
        'r = Cov(X, Y) / [ σ_X · σ_Y ] = Cov(X, Y) / √[ V(X) · V(Y) ].',
        '2. Propriétés et interprétation critique :',
        '• L\'inégalité de Cauchy-Schwarz garantit que : -1 ≤ r ≤ 1.',
        '• r a toujours exactement le même signe que la pente a de la droite de régression.',
        '• Si |r| = 1 : tous les points du nuage sont exactement alignés sur la droite.',
        '• Si |r| ≥ 0,85 ou 0,90 : la corrélation linéaire est forte ; l\'ajustement linéaire est de grande qualité et les prévisions sont fiables.',
        '• Si |r| est proche de 0 (ex. |r| < 0,5) : il n\'y a pas de corrélation linéaire entre X et Y (un ajustement linéaire n\'a pas de sens statistique).'
      ]
    }
  ]
};

export const COURSES_MATH_1ERE_S_PART3 = [
  LESSON_14_MATH_1ERE_S,
  LESSON_15_MATH_1ERE_S,
  LESSON_16_MATH_1ERE_S
];
