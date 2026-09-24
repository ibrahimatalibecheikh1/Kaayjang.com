import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 3ÈME (BFEM SÉNÉGAL)
// PARTIE 1 : ACTIVITÉS NUMÉRIQUES (LEÇONS 1, 2 ET 3)
// COURS EXHAUSTIFS SANS RÉSUMÉ DU PDF : DÉFINITIONS, THÉORÈMES, EXEMPLES
// ET EXERCICES D'APPLICATION CORRIGÉS DÉTAILLÉS PAS-À-PAS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 1 : RACINES CARRÉES
// -------------------------------------------------------------------------
export const LESSON_1_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-1',
  number: 'Leçon 1',
  title: 'Racines carrées',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La notion de racine carrée est un outil central de l'analyse et du calcul algébrique en classe de 3ème. Elle permet de résoudre des problèmes géométriques fondamentaux (application du théorème de Pythagore, calcul de diagonales, aires) et des équations de la forme x² = a. L'étude approfondie de ses propriétés opératoires, de la simplification sous la forme a√b et de la rationalisation des dénominateurs (expression conjuguée) constitue une compétence indispensable pour la réussite aux épreuves du BFEM.",
  fullText: `Leçon 1 : Racines carrées — Cours complet pour la classe de 3ème

Introduction :
La notion de racine carrée est un outil central de l'analyse et du calcul algébrique en classe de 3ème. Elle permet de résoudre des problèmes géométriques fondamentaux (application du théorème de Pythagore, calcul de diagonales, aires) et des équations de la forme x² = a. L'étude approfondie de ses propriétés opératoires, de la simplification sous la forme a√b et de la rationalisation des dénominateurs (expression conjuguée) constitue une compétence indispensable pour la réussite aux épreuves du BFEM.

1. Définition et existence d'une racine carrée
Définition : Soit a un nombre réel positif ou nul (a ≥ 0). On appelle racine carrée de a l'unique nombre réel positif, noté √a, dont le carré est égal à a.
Autrement dit : (√a)² = a et √a ≥ 0.
Le symbole √ est appelé le radical et le nombre a situé sous le radical est appelé le radicande.

Règle capitale d'existence :
Une racine carrée d'un nombre négatif N'EXISTE PAS dans l'ensemble des réels ℝ.
Par exemple, √(-9) n'a aucun sens mathématique en classe de 3ème.

Carrés parfaits fondamentaux à connaître par cœur :
√0 = 0 ; √1 = 1 ; √4 = 2 ; √9 = 3 ; √16 = 4 ; √25 = 5 ; √36 = 6 ; √49 = 7 ; √64 = 8 ; √81 = 9 ; √100 = 10 ; √121 = 11 ; √144 = 12 ; √169 = 13 ; √196 = 14 ; √225 = 15 ; √256 = 16 ; √400 = 20.

Propriété immédiate : Pour tout nombre réel x :
√(x²) = |x| (valeur absolue de x).
- Si x ≥ 0, alors √(x²) = x. Exemple : √(5²) = 5.
- Si x < 0, alors √(x²) = -x (qui est positif !). Exemple : √((-7)²) = |-7| = 7.

2. Propriétés opératoires des racines carrées
Théorème 1 : Produit de racines carrées
Pour tous réels a ≥ 0 et b ≥ 0 :
√(a × b) = √a × √b
Exemples :
• √(4 × 9) = √36 = 6 et √4 × √9 = 2 × 3 = 6.
• √18 = √(9 × 2) = √9 × √2 = 3√2.
• √50 = √(25 × 2) = 5√2.
• √75 = √(25 × 3) = 5√3.

Théorème 2 : Quotient de racines carrées
Pour tout réel a ≥ 0 et tout réel b > 0 (strictement positif) :
√(a / b) = √a / √b
Exemples :
• √(49 / 16) = √49 / √16 = 7/4.
• √(8 / 2) = √4 = 2 ou √8 / √2 = √(8/2) = √4 = 2.

ATTENTION MAJEURE (Erreur classique à bannir) :
La racine carrée d'une somme n'est PAS égale à la somme des racines carrées :
√(a + b) ≠ √a + √b (sauf si a = 0 ou b = 0).
Preuve par contre-exemple :
√(9 + 16) = √25 = 5.
Or, √9 + √16 = 3 + 4 = 7.
Comme 5 ≠ 7, on a bien √(9 + 16) ≠ √9 + √16 !
De même, √(a - b) ≠ √a - √b.

3. Écriture d'un nombre sous la forme a√b
Pour simplifier une racine carrée sous la forme a√b où a et b sont des entiers avec b le plus petit possible :
1. On décompose le radicande en un produit dont l'un des facteurs est le plus grand carré parfait possible (4, 9, 16, 25, 36, 49, 64, 81, 100...).
2. On applique la règle √(k² × b) = k√b.
Exemple guidé : Simplifier A = 3√75 - 2√27 + 5√12 :
• √75 = √(25 × 3) = 5√3.
• √27 = √(9 × 3) = 3√3.
• √12 = √(4 × 3) = 2√3.
D'où :
A = 3(5√3) - 2(3√3) + 5(2√3)
A = 15√3 - 6√3 + 10√3
A = (15 - 6 + 10)√3 = 19√3.

4. Rendre rationnel le dénominateur d'une fraction (Expression conjuguée)
En mathématiques, on évite de laisser un radical au dénominateur d'une fraction.

Cas 1 : Le dénominateur est de la forme b√c (un seul terme avec radical)
Règle : On multiplie le numérateur et le dénominateur par √c.
Exemple :
A = 5 / √3 = (5 × √3) / (√3 × √3) = 5√3 / 3.
B = 4 / (3√2) = (4 × √2) / (3√2 × √2) = 4√2 / (3 × 2) = 4√2 / 6 = 2√2 / 3.

Cas 2 : Le dénominateur est de la forme a + √b ou √a - √b (somme ou différence)
Règle : On multiplie le numérateur et le dénominateur par l'expression conjuguée du dénominateur, en utilisant l'identité remarquable (x - y)(x + y) = x² - y².
- L'expression conjuguée de (a + √b) est (a - √b).
- L'expression conjuguée de (√a - √b) est (√a + √b).

Exemple détaillé : Rendre rationnel le dénominateur de C = 3 / (2 + √5) :
L'expression conjuguée de 2 + √5 est 2 - √5.
C = [3 × (2 - √5)] / [(2 + √5)(2 - √5)]
C = (6 - 3√5) / [2² - (√5)²]
C = (6 - 3√5) / (4 - 5)
C = (6 - 3√5) / (-1) = -6 + 3√5 = 3√5 - 6.

5. Résolution des équations de la forme x² = a
Soit a un nombre réel donné. L'équation x² = a se résout selon le signe de a :
- Si a > 0 : L'équation admet exactement deux solutions réelles distinctes : x = √a et x = -√a.
  Exemple : x² = 9 ⇔ x = 3 ou x = -3. L'ensemble des solutions est S = {-3 ; 3}.
- Si a = 0 : L'équation admet une unique solution : x = 0. S = {0}.
- Si a < 0 : Le carré d'un nombre réel étant toujours positif ou nul, l'équation n'admet AUCUNE solution dans ℝ. S = ∅.
  Exemple : x² = -16 n'a aucune solution réelle (S = ∅).

Conclusion :
La maîtrise des racines carrées repose sur la rigueur du calcul numérique : ne jamais sommer les radicandes, savoir repérer les carrés parfaits, manipuler l'expression conjuguée et penser systématiquement à la double solution positive et négative de l'équation x² = a.`,
  sections: [
    {
      title: 'I. Définition, existence et carrés parfaits',
      content: [
        "1. Définition mathématique formelle :",
        "Pour tout nombre réel a ≥ 0, la racine carrée de a, notée √a, est l'unique réel positif dont le carré vaut a : (√a)² = a et √a ≥ 0.",
        "2. Règle absolue d'existence : Le radicande (le nombre sous la racine) DOIT TOUJOURS être supérieur ou égal à 0. Un nombre strictement négatif n'admet AUCUNE racine carrée dans ℝ.",
        "3. Carrés parfaits à mémoriser pour les épreuves du BFEM :",
        "• 0² = 0 ➔ √0 = 0",
        "• 1² = 1 ➔ √1 = 1",
        "• 2² = 4 ➔ √4 = 2",
        "• 3² = 9 ➔ √9 = 3",
        "• 4² = 16 ➔ √16 = 4",
        "• 5² = 25 ➔ √25 = 5",
        "• 6² = 36 ➔ √36 = 6",
        "• 7² = 49 ➔ √49 = 7",
        "• 8² = 64 ➔ √64 = 8",
        "• 9² = 81 ➔ √81 = 9",
        "• 10² = 100 ➔ √100 = 10",
        "• 11² = 121 ➔ √121 = 11",
        "• 12² = 144 ➔ √144 = 12",
        "• 13² = 169 ➔ √169 = 13",
        "• 14² = 196 ➔ √196 = 14",
        "• 15² = 225 ➔ √225 = 15",
        "• 16² = 256 ➔ √256 = 16",
        "• 20² = 400 ➔ √400 = 20",
        "4. Propriété de la valeur absolue : Pour tout x ∈ ℝ, √(x²) = |x|. Si x < 0, alors √(x²) = -x. Exemple : √((-8)²) = |-8| = 8."
      ]
    },
    {
      title: 'II. Propriétés opératoires et pièges fréquents',
      content: [
        "1. Produit : √(a × b) = √a × √b (pour a ≥ 0 et b ≥ 0).",
        "Application directe : √(k² × b) = k√b. Exemple : √72 = √(36 × 2) = 6√2.",
        "2. Quotient : √(a / b) = √a / √b (pour a ≥ 0 et b > 0).",
        "Exemple : √(25 / 4) = √25 / √4 = 5/2.",
        "3. PIÈGE CLASSIQUE À PROSCRIRE ABSOLUMENT :",
        "√(a + b) ≠ √a + √b et √(a - b) ≠ √a - √b.",
        "Contre-exemple obligatoire à retenir : √(16 + 9) = √25 = 5, alors que √16 + √9 = 4 + 3 = 7. Comme 5 ≠ 7, l'égalité est fausse !"
      ]
    },
    {
      title: 'III. Rationalisation du dénominateur (Expression conjuguée)',
      content: [
        "1. Cas d'un dénominateur simple k√a : On multiplie numérateur et dénominateur par √a.",
        "Exemple : 7 / √5 = (7 × √5) / (√5 × √5) = 7√5 / 5.",
        "2. Cas d'un binôme avec radicaux (a + √b ou √a - √b) : On multiplie par son expression conjuguée.",
        "• L'expression conjuguée de (a + √b) est (a - √b).",
        "• On utilise la troisième identité remarquable : (x + y)(x - y) = x² - y².",
        "Exemple type BFEM : Rendre rationnel D = (1 + √2) / (3 - √2) :",
        "D = [(1 + √2)(3 + √2)] / [(3 - √2)(3 + √2)]",
        "D = [1×3 + 1×√2 + 3√2 + (√2)²] / [3² - (√2)²]",
        "D = [3 + 4√2 + 2] / [9 - 2] = (5 + 4√2) / 7."
      ]
    },
    {
      title: 'IV. Résolution rigoureuse des équations x² = a',
      content: [
        "Soit l'équation x² = a :",
        "• Si a > 0 : Deux solutions réelles opposées S = {-√a ; √a}.",
        "Exemple : x² = 18 ⇔ x = √18 = 3√2 ou x = -3√2. S = {-3√2 ; 3√2}.",
        "• Si a = 0 : Une solution unique x = 0. S = {0}.",
        "• Si a < 0 : Aucune solution dans ℝ car un carré réel est toujours ≥ 0. S = ∅.",
        "Exemple : x² + 25 = 0 ⇔ x² = -25. Impossible dans ℝ, S = ∅."
      ]
    },
    {
      title: 'V. Exercices d\'application résolus pas-à-pas (Style BFEM)',
      content: [
        "EXERCICE 1 : Simplification d'écritures avec radicaux",
        "Énoncé : Écrire sous la forme a√b (avec a et b entiers, b le plus petit possible) l'expression :",
        "E = 2√108 - 5√48 + √300 - √12.",
        "Corrigé détaillé pas-à-pas :",
        "1. Décomposition des radicandes avec le carré parfait 3 :",
        "• 108 = 36 × 3 ➔ √108 = √(36 × 3) = 6√3.",
        "• 48 = 16 × 3 ➔ √48 = √(16 × 3) = 4√3.",
        "• 300 = 100 × 3 ➔ √300 = √(100 × 3) = 10√3.",
        "• 12 = 4 × 3 ➔ √12 = √(4 × 3) = 2√3.",
        "2. Remplacement dans l'expression :",
        "E = 2(6√3) - 5(4√3) + 10√3 - 2√3",
        "E = 12√3 - 20√3 + 10√3 - 2√3",
        "E = (12 - 20 + 10 - 2)√3 = 0√3 = 0.",
        "Conclusion : E = 0.",
        "",
        "EXERCICE 2 : Comparaison et encadrement",
        "Énoncé : Soient x = 3√5 et y = 4√3.",
        "1. Comparer les nombres x et y.",
        "2. En déduire le signe de x - y et l'écriture simplifiée de √( (3√5 - 4√3)² ).",
        "Corrigé détaillé pas-à-pas :",
        "1. Comparaison par les carrés (car x et y sont tous deux positifs) :",
        "• x² = (3√5)² = 3² × (√5)² = 9 × 5 = 45.",
        "• y² = (4√3)² = 4² × (√3)² = 16 × 3 = 48.",
        "Comme 45 < 48, on en déduit x² < y². Les nombres étant positifs, x < y, soit 3√5 < 4√3.",
        "2. Signe de x - y : Comme x < y, on a x - y < 0 (négatif).",
        "3. Simplification de √( (3√5 - 4√3)² ) :",
        "D'après la propriété √(A²) = |A|, comme 3√5 - 4√3 est négatif :",
        "√( (3√5 - 4√3)² ) = |3√5 - 4√3| = -(3√5 - 4√3) = 4√3 - 3√5."
      ]
    }
  ],
  conclusion:
    "En résumé, les racines carrées obéissent à des règles précises : le produit et le quotient sont compatibles avec le radical, mais l'addition ne l'est jamais. La technique de l'expression conjuguée permet d'éliminer les radicaux aux dénominateurs, et l'équation x² = a donne toujours deux solutions opposées lorsque a est strictement positif."
};

// -------------------------------------------------------------------------
// LEÇON 2 : CALCUL LITTÉRAL ET IDENTITÉS REMARQUABLES
// -------------------------------------------------------------------------
export const LESSON_2_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-2',
  number: 'Leçon 2',
  title: 'Calcul littéral et identités remarquables',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "Le calcul littéral est le langage universel des mathématiques. En classe de 3ème, l'élève consolide les techniques de développement, de réduction et de factorisation d'expressions algébriques. Les trois identités remarquables constituent des automatismes indispensables qui permettent de factoriser des polynômes du second degré, de simplifier des fractions rationnelles et de préparer efficacement la résolution d'équations et d'inéquations aux épreuves du BFEM.",
  fullText: `Leçon 2 : Calcul littéral et identités remarquables — Cours complet 3ème

Introduction :
Le calcul littéral est le langage universel des mathématiques. En classe de 3ème, l'élève consolide les techniques de développement, de réduction et de factorisation d'expressions algébriques. Les trois identités remarquables constituent des automatismes indispensables qui permettent de factoriser des polynômes du second degré, de simplifier des fractions rationnelles et de préparer efficacement la résolution d'équations et d'inéquations aux épreuves du BFEM.

1. Développer et réduire une expression
Définition du développement : Développer une expression algébrique, c'est transformer un produit de facteurs en une somme algébrique de termes.
Définition de la réduction : Réduire une expression, c'est regrouper les termes de même degré (les termes en x², les termes en x et les termes constants) pour l'écrire avec le plus petit nombre de termes possible.

Règles de distributivité :
- Distributivité simple : k(a + b) = ka + kb et k(a - b) = ka - kb.
- Double distributivité : (a + b)(c + d) = ac + ad + bc + bd.
Exemple :
Développer A = (2x - 3)(4x + 5) :
A = 2x × 4x + 2x × 5 - 3 × 4x - 3 × 5
A = 8x² + 10x - 12x - 15
A = 8x² - 2x - 15.

2. Les trois identités remarquables fondamentales
Pour tous nombres réels a et b :
1ère identité (Carré d'une somme) :
(a + b)² = a² + 2ab + b²
Le terme 2ab est appelé le double produit.

2ème identité (Carré d'une différence) :
(a - b)² = a² - 2ab + b²
Attention : le carré b² est toujours précédé d'un signe '+', seul le double produit porte le signe '-'.

3ème identité (Produit d'une somme par une différence) :
(a + b)(a - b) = a² - b²
Cette identité remarquable ne contient pas de terme en double produit.

Exemples d'application directe en développement :
• (3x + 4)² = (3x)² + 2(3x)(4) + 4² = 9x² + 24x + 16.
• (5x - 2)² = (5x)² - 2(5x)(2) + 2² = 25x² - 20x + 4.
• (4x - 7)(4x + 7) = (4x)² - 7² = 16x² - 49.

3. Factorisation d'une expression algébrique
Définition : Factoriser une expression, c'est transformer une somme algébrique en un produit de facteurs.
La factorisation est l'opération inverse du développement.

Méthode 1 : Recherche d'un facteur commun évident ou caché
On utilise les formules : ka + kb = k(a + b) ou ka - kb = k(a - b).
Exemple : Factoriser B = (2x + 1)(x - 3) + (2x + 1)(5x + 4) :
Le facteur commun est (2x + 1).
B = (2x + 1) [ (x - 3) + (5x + 4) ]
B = (2x + 1) (x - 3 + 5x + 4)
B = (2x + 1)(6x + 1).

Méthode 2 : Utilisation des identités remarquables dans le sens inverse
- Pour factoriser a² + 2ab + b², on écrit (a + b)².
- Pour factoriser a² - 2ab + b², on écrit (a - b)².
- Pour factoriser a² - b², on écrit (a - b)(a + b).
Exemples :
• 49x² + 42x + 9 = (7x)² + 2(7x)(3) + 3² = (7x + 3)².
• 16x² - 40x + 25 = (4x)² - 2(4x)(5) + 5² = (4x - 5)².
• 36x² - 25 = (6x)² - 5² = (6x - 5)(6x + 5).

Méthode 3 : Factorisation d'une différence de deux carrés complexes [A² - B²]
C'est le type d'exercice le plus fréquent au BFEM.
Formule : A² - B² = (A - B)(A + B).
Exemple type : Factoriser C = (3x - 2)² - (2x + 5)² :
Ici, A = (3x - 2) et B = (2x + 5).
C = [ (3x - 2) - (2x + 5) ] [ (3x - 2) + (2x + 5) ]
Attention aux signes lors du retrait des parenthèses dans le premier crochet :
C = (3x - 2 - 2x - 5) (3x - 2 + 2x + 5)
C = (x - 7)(5x + 3).

4. Fractions rationnelles (Conditions d'existence et simplification)
Une fraction rationnelle est le quotient de deux polynômes : F(x) = P(x) / Q(x).
Condition d'existence (Domaine de définition) :
La fraction rationnelle F(x) existe si et seulement si son dénominateur est strictement non nul : Q(x) ≠ 0.
Méthode de simplification :
1. Déterminer la condition d'existence en résolvant Q(x) = 0.
2. Factoriser le numérateur P(x) et le dénominateur Q(x).
3. Simplifier par les facteurs communs non nuls.

Conclusion :
Le calcul littéral exige méthode, précision d'écriture et maîtrise des identités remarquables. Reconnaître immédiatement la forme A² - B² = (A - B)(A + B) et savoir factoriser par regroupement de termes sont les clés de voûte de la réussite en mathématiques au collège.`,
  sections: [
    {
      title: 'I. Développer et réduire les expressions algébriques',
      content: [
        "1. Distributivité simple et double :",
        "• k(a + b) = ka + kb  ;  k(a - b) = ka - kb",
        "• (a + b)(c + d) = ac + ad + bc + bd",
        "2. Règle des signes lors de la suppression des parenthèses :",
        "• Un signe '+' devant une parenthèse ne change aucun signe : +(a - b) = a - b.",
        "• Un signe '-' devant une parenthèse inverse TOUS les signes intérieurs : -(a - b + c) = -a + b - c.",
        "3. Réduction méthodique par puissances décroissantes de x : ordonner selon ax² + bx + c."
      ]
    },
    {
      title: 'II. Les trois identités remarquables',
      content: [
        "1. Carré d'une somme : (a + b)² = a² + 2ab + b²",
        "Exemple : (2x + 5)² = 4x² + 20x + 25.",
        "2. Carré d'une différence : (a - b)² = a² - 2ab + b²",
        "Exemple : (3x - 4)² = 9x² - 24x + 16.",
        "3. Produit d'une somme par sa différence : (a + b)(a - b) = a² - b²",
        "Exemple : (5x + 3)(5x - 3) = 25x² - 9."
      ]
    },
    {
      title: 'III. Techniques de factorisation (Méthodes clés BFEM)',
      content: [
        "1. Facteur commun apparent ou par groupement :",
        "Exemple : (x - 2)(3x + 1) - (x - 2)(x - 4) = (x - 2)[(3x + 1) - (x - 4)] = (x - 2)(2x + 5).",
        "2. Reconnaissance directe d'identités remarquables :",
        "• 9x² + 30x + 25 = (3x + 5)²",
        "• 4x² - 28x + 49 = (2x - 7)²",
        "• 16x² - 81 = (4x - 9)(4x + 9)",
        "3. Différence de deux carrés A² - B² = (A - B)(A + B) avec expressions composées :",
        "Exemple : (4x - 1)² - 9 = (4x - 1)² - 3² = (4x - 1 - 3)(4x - 1 + 3) = (4x - 4)(4x + 2) = 8(x - 1)(2x + 1)."
      ]
    },
    {
      title: 'IV. Exercices d\'application corrigés pas-à-pas (Style BFEM)',
      content: [
        "EXERCICE 1 : Développement, factorisation et calcul de valeur numérique",
        "Soit l'expression algébrique : P(x) = (2x - 3)² - (x + 1)(2x - 3).",
        "1. Développer et réduire P(x).",
        "2. Factoriser P(x).",
        "3. Calculer la valeur exacte de P(√2).",
        "Corrigé détaillé pas-à-pas :",
        "1. Développement de P(x) :",
        "(2x - 3)² = (2x)² - 2(2x)(3) + 3² = 4x² - 12x + 9.",
        "(x + 1)(2x - 3) = 2x² - 3x + 2x - 3 = 2x² - x - 3.",
        "P(x) = (4x² - 12x + 9) - (2x² - x - 3)",
        "P(x) = 4x² - 12x + 9 - 2x² + x + 3",
        "P(x) = 2x² - 11x + 12.",
        "2. Factorisation de P(x) :",
        "Facteur commun évident : (2x - 3).",
        "P(x) = (2x - 3) [ (2x - 3) - (x + 1) ]",
        "P(x) = (2x - 3) (2x - 3 - x - 1)",
        "P(x) = (2x - 3)(x - 4).",
        "3. Calcul de P(√2) en utilisant la forme développée 2x² - 11x + 12 :",
        "P(√2) = 2(√2)² - 11(√2) + 12",
        "P(√2) = 2(2) - 11√2 + 12 = 4 - 11√2 + 12 = 16 - 11√2.",
        "",
        "EXERCICE 2 : Étude d'une fraction rationnelle",
        "Soit F(x) = (4x² - 9) / [(2x - 3)(x + 5)].",
        "1. Donner la condition d'existence de F(x).",
        "2. Simplifier F(x).",
        "Corrigé détaillé pas-à-pas :",
        "1. Condition d'existence : Le dénominateur ne doit pas s'annuler :",
        "(2x - 3)(x + 5) ≠ 0 ⇔ 2x - 3 ≠ 0 et x + 5 ≠ 0 ⇔ x ≠ 3/2 et x ≠ -5.",
        "Le domaine de définition est donc D = ℝ \\ {-5 ; 3/2}.",
        "2. Simplification :",
        "On factorise le numérateur : 4x² - 9 = (2x)² - 3² = (2x - 3)(2x + 3).",
        "D'où pour tout x ∈ D :",
        "F(x) = [(2x - 3)(2x + 3)] / [(2x - 3)(x + 5)].",
        "En simplifiant par le facteur non nul (2x - 3), on obtient :",
        "F(x) = (2x + 3) / (x + 5)."
      ]
    }
  ],
  conclusion:
    "Le calcul littéral est une boîte à outils universelle : maîtriser le développement permet de vérifier un calcul ou de simplifier des expressions développées, tandis que la factorisation est l'étape préparatoire indispensable pour résoudre des équations produits et étudier les signes des fractions rationnelles."
};

// -------------------------------------------------------------------------
// LEÇON 3 : ÉQUATIONS ET INÉQUATIONS DU PREMIER DEGRÉ À UNE INCONNUE
// -------------------------------------------------------------------------
export const LESSON_3_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-3',
  number: 'Leçon 3',
  title: 'Équations et inéquations du 1er degré à une inconnue',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "Les équations et inéquations du premier degré constituent le cœur de la modélisation mathématique au collège. Elles permettent de traduire en langage algébrique des problèmes concrets issus de la vie courante, du commerce ou de la physique. En classe de 3ème, l'élève apprend à résoudre les équations produits-nuls de degré supérieur, les inéquations avec changement de sens lors de la multiplication par un nombre négatif, et à dresser des tableaux de signes pour résoudre des inéquations produits ou quotients.",
  fullText: `Leçon 3 : Équations et inéquations du 1er degré à une inconnue — Cours complet 3ème

Introduction :
Les équations et inéquations du premier degré constituent le cœur de la modélisation mathématique au collège. Elles permettent de traduire en langage algébrique des problèmes concrets issus de la vie courante, du commerce ou de la physique. En classe de 3ème, l'élève apprend à résoudre les équations produits-nuls de degré supérieur, les inéquations avec changement de sens lors de la multiplication par un nombre négatif, et à dresser des tableaux de signes pour résoudre des inéquations produits ou quotients.

1. Équations du premier degré à une inconnue
Une équation du premier degré à une inconnue x est une égalité de la forme ax + b = 0 (avec a ≠ 0).
Règle de résolution :
ax = -b ⇔ x = -b / a.
L'ensemble des solutions est S = {-b/a}.

2. Équations produits-nuls
Propriété fondamentale :
Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul.
Formulation algébrique :
A × B = 0 ⇔ A = 0 ou B = 0.
Cette règle permet de résoudre des équations du second degré qui ont été préalablement factorisées.

Exemple guidé : Résoudre dans ℝ l'équation (3x - 5)(2x + 7) = 0 :
Un produit de facteurs est nul si l'un des facteurs est nul :
3x - 5 = 0  ou  2x + 7 = 0
3x = 5      ou  2x = -7
x = 5/3     ou  x = -7/2
L'ensemble des solutions est S = {-7/2 ; 5/3}.

Exemple avec factorisation préalable : Résoudre 4x² - 25 = 0 :
On reconnaît A² - B² = (2x - 5)(2x + 5) = 0.
2x - 5 = 0 ou 2x + 5 = 0 ⇔ x = 5/2 ou x = -5/2.
S = {-5/2 ; 5/2}.

3. Inéquations du premier degré à une inconnue
Une inéquation est une inégalité comportant une inconnue x.
RÈGLE D'OR DES INÉQUATIONS (À retenir impérativement) :
- Lorsqu'on ajoute ou soustrait un même nombre aux deux membres d'une inégalité, le sens de l'inégalité NE CHANGE PAS.
- Lorsqu'on multiplie ou divise les deux membres d'une inégalité par un nombre STRICTEMENT POSITIF, le sens de l'inégalité NE CHANGE PAS.
- ATTENTION : Lorsqu'on multiplie ou divise les deux membres d'une inégalité par un nombre STRICTEMENT NÉGATIF, le sens de l'inégalité S'INVERSE (< devient >, ≤ devient ≥).

Exemple : Résoudre -3x + 4 ≤ 19 :
-3x ≤ 19 - 4
-3x ≤ 15
En divisant par -3 (qui est strictement négatif), on change le sens de l'inégalité :
x ≥ 15 / (-3)
x ≥ -5.
L'ensemble des solutions est l'intervalle S = [-5 ; +∞[.
Sur une droite graduée, on hachure la zone située à droite de -5, avec le crochet tourné vers les solutions en -5 car l'inégalité est large (≥).

4. Tableaux de signes (Inéquations produits et inéquations quotients)
Pour résoudre une inéquation de la forme (ax + b)(cx + d) ≥ 0 ou (ax + b) / (cx + d) ≤ 0 :
1. On étudie le signe de chaque facteur du premier degré :
   ax + b = 0 pour x = -b/a.
   Le facteur ax + b est du signe de a après sa racine (-b/a), et du signe de -a avant.
2. On regroupe les résultats dans un tableau de signes.
3. On applique la règle des signes du produit (+ par + donne +, + par - donne -, etc.).
4. Pour une fraction rationnelle, le dénominateur cx + d ne doit jamais être nul (valeur interdite représentée par une double barre ||).
5. On lit l'ensemble des solutions S correspondant au signe demandé.

5. Résolution de problèmes concrets
Méthode en 4 étapes :
1. Choix de l'inconnue (ex: « Soit x le prix d'un cahier »).
2. Mise en équation (ou inéquation) du texte.
3. Résolution algébrique de l'équation.
4. Vérification et conclusion formulée par une phrase claire.

Conclusion :
La résolution des équations et inéquations est une compétence transversale capitale. Le piège récurrent reste le changement de sens lors de la division par un nombre négatif dans les inéquations et l'oubli de la factorisation préalable pour les équations produits-nuls.`,
  sections: [
    {
      title: 'I. Équations du premier degré et équations produits',
      content: [
        "1. Équation de base ax + b = 0 :",
        "Si a ≠ 0, x = -b/a. S = {-b/a}.",
        "2. Règle du produit nul :",
        "A(x) × B(x) = 0 ⇔ A(x) = 0 ou B(x) = 0.",
        "3. Méthode pour les équations du second degré en 3ème :",
        "Tout ramener dans le membre de gauche pour avoir ... = 0, factoriser à l'aide d'un facteur commun ou d'une identité remarquable, puis appliquer la règle du produit nul."
      ]
    },
    {
      title: 'II. Inéquations et représentations graphiques',
      content: [
        "1. Propriétés de compatibilité avec l'ordre :",
        "• a ≤ b ⇔ a + c ≤ b + c",
        "• a ≤ b et c > 0 ⇔ ac ≤ bc",
        "• a ≤ b et c < 0 ⇔ ac ≥ bc (INVERSION DU SENS)",
        "2. Notations des intervalles :",
        "• x ≥ a ➔ S = [a ; +∞[ (a inclus)",
        "• x > a ➔ S = ]a ; +∞[ (a exclu)",
        "• x ≤ a ➔ S = ]-∞ ; a] (a inclus)",
        "• x < a ➔ S = ]-∞ ; a[ (a exclu)"
      ]
    },
    {
      title: 'III. Tableaux de signes pour produits et quotients',
      content: [
        "1. Signe d'un binôme ax + b :",
        "Il s'annule en x = -b/a. Il a le signe de 'a' à droite de -b/a, et le signe contraire de 'a' à gauche.",
        "2. Construction du tableau : une ligne pour chaque facteur, une ligne bilan obtenue par la règle des signes.",
        "3. Inéquations quotients : la valeur qui annule le dénominateur est une VALEUR INTERDITE, signalée impérativement par une DOUBLE BARRE || dans la ligne du quotient."
      ]
    },
    {
      title: 'IV. Exercices résolus pas-à-pas (BFEM)',
      content: [
        "EXERCICE 1 : Résolution d'inéquation quotient avec tableau de signes",
        "Énoncé : Résoudre dans ℝ l'inéquation : (2x - 6) / (3 - x) ≥ 0.",
        "Corrigé détaillé pas-à-pas :",
        "1. Valeur interdite : Le dénominateur 3 - x doit être non nul :",
        "3 - x = 0 ⇔ x = 3. La valeur interdite est 3. L'expression n'existe que pour x ≠ 3.",
        "2. Annulation du numérateur :",
        "2x - 6 = 0 ⇔ 2x = 6 ⇔ x = 3.",
        "Remarque : Ici, le numérateur et le dénominateur s'annulent pour la même valeur x = 3.",
        "Simplification : Pour tout x ≠ 3, (2x - 6) / (3 - x) = 2(x - 3) / [-(x - 3)] = -2.",
        "Comme -2 ≥ 0 est impossible, l'inéquation n'admet AUCUNE solution : S = ∅.",
        "",
        "EXERCICE 2 : Inéquation produit classique",
        "Énoncé : Résoudre dans ℝ : (2x + 4)(5 - x) ≤ 0.",
        "Corrigé détaillé pas-à-pas :",
        "1. Zéros des facteurs :",
        "• 2x + 4 = 0 ⇔ x = -2 (coefficient a = 2 > 0 : négatif à gauche de -2, positif à droite).",
        "• 5 - x = 0 ⇔ x = 5 (coefficient a = -1 < 0 : positif à gauche de 5, négatif à droite).",
        "2. Tableau de signes :",
        "Pour x ∈ ]-∞ ; -2[ : (2x+4) est -, (5-x) est +, produit = -.",
        "Pour x = -2 : produit = 0.",
        "Pour x ∈ ]-2 ; 5[ : (2x+4) est +, (5-x) est +, produit = +.",
        "Pour x = 5 : produit = 0.",
        "Pour x ∈ ]5 ; +∞[ : (2x+4) est +, (5-x) est -, produit = -.",
        "3. Conclusion : On cherche les valeurs où le produit est négatif ou nul (≤ 0) :",
        "S = ]-∞ ; -2] ∪ [5 ; +∞[."
      ]
    }
  ],
  conclusion:
    "Les inéquations exigent une grande vigilance sur le sens des symboles. Le tableau de signes est la méthode infaillible pour ne commettre aucune erreur de signe sur les produits et quotients algébriques."
};
