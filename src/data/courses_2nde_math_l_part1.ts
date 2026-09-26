import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE SECONDE L — PREMIÈRE PARTIE
// Conforme au référentiel officiel national APAMS (Octobre 2006) — Sénégal
// Cours complets et ultra-détaillés sans résumé — leçons approfondies
// =========================================================================

export const LESSON_1_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-1',
  number: 'CHAPITRE 1',
  title: `Calcul dans R : fractions, radicaux, identités remarquables, valeur absolue et équations du premier degré`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 1 : CALCUL DANS L'ENSEMBLE DES NOMBRES RÉELS (R)

INTRODUCTION
L'ensemble des nombres réels, noté R, constitue le cadre universel de tout le calcul algébrique et de l'analyse fonctionnelle au lycée. Ce premier chapitre consolide et approfondit les techniques fondamentales de calcul indispensables pour aborder sereinement les chapitres suivants du programme de Seconde L. Il traite successivement du calcul fractionnaire rationnel et des conditions d'existence, de la manipulation rigoureuse des radicaux (racines carrées) et de leur rationalisation, du maniement des identités remarquables aux degrés 2 et 3, de l'étude géométrique de la valeur absolue et des intervalles de R, et enfin de la résolution méthodique des équations, inéquations et systèmes d'inéquations du premier degré à une inconnue.

I. FRACTIONS ET CALCULS ALGÉBRIQUES
1. Définition et condition d'existence
Une fraction ou quotient algébrique de la forme A/B n'a de sens mathématique que si et seulement si son dénominateur est strictement non nul :
Condition d'existence : B ≠ 0.
Règle fondamentale : si une expression rationnelle contient une variable x au dénominateur, il faut déterminer en premier lieu son ensemble de définition en excluant toutes les valeurs qui annulent le dénominateur.
Exemple d'application :
L'expression E(x) = (2x + 1) / (x - 3) est définie si et seulement si x - 3 ≠ 0, c'est-à-dire x ≠ 3. Son domaine de définition est D_E = R \\ {3} = ]-∞ ; 3[ ∪ ]3 ; +∞[.
2. Règles opératoires fondamentales sur les fractions
Pour tous réels a, b, c, d avec b ≠ 0 et d ≠ 0 :
- Addition et soustraction : recherche d'un dénominateur commun
  a/b + c/d = (a×d + b×c) / (b×d)
  a/b - c/d = (a×d - b×c) / (b×d)
- Multiplication : produit des numérateurs entre eux et des dénominateurs entre eux
  (a/b) × (c/d) = (a×c) / (b×d)
- Division : pour diviser par une fraction non nulle (avec c ≠ 0), on multiplie par sa fraction inverse
  (a/b) / (c/d) = (a/b) × (d/c) = (a×d) / (b×c)
- Règle des signes :
  (-a)/b = a/(-b) = -(a/b)  et  (-a)/(-b) = a/b.
3. Exemples d'application commentés
Exemple 1 : Addition numérique
Calculer A = 3/4 + 5/6.
Le plus petit dénominateur commun entre 4 et 6 est 12 (car 12 = 4 × 3 = 6 × 2).
3/4 = (3 × 3) / (4 × 3) = 9/12
5/6 = (5 × 2) / (6 × 2) = 10/12
A = 9/12 + 10/12 = (9 + 10) / 12 = 19/12.
Exemple 2 : Simplification d'expression rationnelle
Simplifier E(x) = 2/x + 3/(2x) pour x ≠ 0.
Le dénominateur commun est 2x :
2/x = (2 × 2) / (2x) = 4/(2x)
E(x) = 4/(2x) + 3/(2x) = (4 + 3) / (2x) = 7/(2x).

II. RADICAUX ET RACINES CARRÉES DANS R
1. Définition de la racine carrée
Pour tout nombre réel positif ou nul a (a ≥ 0), la racine carrée de a, notée √a, est l'unique nombre réel positif ou nul dont le carré est égal à a :
(√a)² = a  et  √a ≥ 0.
Conséquence majeure : la racine carrée d'un nombre strictement négatif n'existe pas dans R !
2. Propriétés fondamentales des radicaux
Pour tous réels a ≥ 0 et b ≥ 0 :
- Produit : √(a × b) = √a × √b
- Quotient (avec b > 0) : √(a / b) = √a / √b
- Carré sous le radical : √(a²) = |a| (valeur absolue de a). Si a ≥ 0, √(a²) = a ; si a < 0, √(a²) = -a.
- Attention capitale : en général, √(a + b) ≠ √a + √b ! (Exemple : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7 ≠ 5).
3. Simplification des radicaux par extraction de carrés parfaits
Pour simplifier √A, on décompose le nombre A en un produit faisant apparaître le plus grand carré parfait possible (4, 9, 16, 25, 36, 49, 64, 81, 100...) :
- Exemple : simplifier √180.
  180 = 36 × 5.
  √180 = √(36 × 5) = √36 × √5 = 6√5.
- Exemple : simplifier √72.
  72 = 36 × 2.
  √72 = √(36 × 2) = 6√2.
4. Rationalisation du dénominateur (rendre rationnel un dénominateur)
Pour éliminer une racine carrée au dénominateur d'une fraction :
- Si le dénominateur est de la forme √b : on multiplie numérateur et dénominateur par √b :
  a / √b = (a × √b) / (√b × √b) = (a√b) / b.
  Exemple : 3 / √5 = (3 × √5) / (√5 × √5) = (3√5) / 5.
- Si le dénominateur est de la forme (a + √b) ou (√a - √b) : on multiplie numérateur et dénominateur par l'expression conjuguée :
  Exemple : 2 / (3 - √5) = [2 × (3 + √5)] / [(3 - √5)(3 + √5)] = [2(3 + √5)] / (3² - (√5)²) = [2(3 + √5)] / (9 - 5) = [2(3 + √5)] / 4 = (3 + √5) / 2.

III. IDENTITÉS REMARQUABLES, DÉVELOPPEMENT ET FACTORISATION
1. Les trois identités remarquables du second degré
Pour tous réels a et b :
- Carré d'une somme : (a + b)² = a² + 2ab + b²
- Carré d'une différence : (a - b)² = a² - 2ab + b²
- Différence de deux carrés : (a + b)(a - b) = a² - b²
2. Les identités remarquables du troisième degré (degré 3)
Au second cycle, l'élève de Seconde L doit maîtriser les développements et factorisations cubiques :
- Cube d'une somme : (a + b)³ = a³ + 3a²b + 3ab² + b³
- Cube d'une différence : (a - b)³ = a³ - 3a²b + 3ab² - b³
- Somme de deux cubes : a³ + b³ = (a + b)(a² - ab + b²)
- Différence de deux cubes : a³ - b³ = (a - b)(a² + ab + b²)
3. Vocabulaire opératoire
- Développer : transformer un produit de facteurs en une somme algébrique de termes en distribuant les coefficients et en supprimant les parenthèses.
- Réduire : regrouper les termes de même degré (les x² ensemble, les x ensemble, les constantes ensemble).
- Factoriser : transformer une somme algébrique en un produit de facteurs, soit en repérant un facteur commun évident, soit en utilisant une identité remarquable.
Exemple 1 (Développement) :
Développer et réduire A(x) = (2x - 3)² - (x + 1)(x - 1).
(2x - 3)² = (2x)² - 2(2x)(3) + 3² = 4x² - 12x + 9
(x + 1)(x - 1) = x² - 1² = x² - 1
A(x) = (4x² - 12x + 9) - (x² - 1) = 4x² - 12x + 9 - x² + 1 = 3x² - 12x + 10.
Exemple 2 (Factorisation par identité remarquable) :
Factoriser B(x) = 9x² - 25.
On reconnaît a² - b² avec a = 3x et b = 5 :
B(x) = (3x)² - 5² = (3x - 5)(3x + 5).
Exemple 3 (Factorisation par mise en évidence de facteur commun) :
Factoriser C(x) = 4x² + 12x.
Le facteur commun est 4x :
C(x) = 4x(x + 3).

IV. VALEUR ABSOLUE ET INTERVALLES DANS R
1. Définition et interprétation géométrique
La valeur absolue d'un nombre réel x, notée |x|, représente la distance géométrique entre le point d'abscisse x et l'origine O d'abscisse 0 sur la droite réelle graduée :
- Si x ≥ 0 : |x| = x  (ex. |+5| = 5 ; |0| = 0)
- Si x < 0 : |x| = -x  (ex. |-7| = -(-7) = 7)
Propriété fondamentale : la valeur absolue d'un réel est TOUJOURS positive ou nulle (|x| ≥ 0 pour tout x ∈ R).
Distance entre deux réels a et b :
La distance géométrique entre deux points A d'abscisse a et B d'abscisse b sur la droite graduée est donnée par :
d(a, b) = AB = |b - a| = |a - b|.
2. Les équations avec valeur absolue
Pour r > 0 et a ∈ R :
- |x - a| = r <=> x - a = r  ou  x - a = -r <=> x = a + r  ou  x = a - r.
- |A| = |B| <=> A = B  ou  A = -B.
Exemple résolu :
Résoudre dans R l'équation |2x + 1| = |x - 2|.
Deux cas se présentent :
- Cas 1 : 2x + 1 = x - 2  <=>  2x - x = -2 - 1  <=>  x = -3.
- Cas 2 : 2x + 1 = -(x - 2)  <=>  2x + 1 = -x + 2  <=>  2x + x = 2 - 1  <=>  3x = 1  <=>  x = 1/3.
Ensemble des solutions : S = {-3 ; 1/3}.
3. Les inéquations avec valeur absolue et intervalles
Pour r ≥ 0 :
- |x - a| ≤ r <=> -r ≤ x - a ≤ r <=> a - r ≤ x ≤ a + r <=> x ∈ [a - r ; a + r] (intervalle fermé centré en a de rayon r).
- |x - a| ≥ r <=> x - a ≤ -r  ou  x - a ≥ r <=> x ≤ a - r  ou  x ≥ a + r <=> x ∈ ]-∞ ; a - r] ∪ [a + r ; +∞[.
Exemple résolu :
Résoudre dans R l'inéquation |x - 2| ≤ 3.
Traduction géométrique : la distance entre x et 2 est inférieure ou égale à 3.
-3 ≤ x - 2 ≤ 3
En ajoutant 2 à chaque membre :
-3 + 2 ≤ x ≤ 3 + 2  <=>  -1 ≤ x ≤ 5.
L'ensemble des solutions est l'intervalle fermé : S = [-1 ; 5].

V. ÉQUATIONS, INÉQUATIONS ET SYSTÈMES DU PREMIER DEGRÉ DANS R
1. Équation du premier degré à une inconnue
Une équation du premier degré à une inconnue x est une égalité qui peut se ramener sous la forme canonique :
ax + b = 0  (avec a ≠ 0).
Méthode de résolution :
ax = -b  <=>  x = -b / a.
L'unique solution est le réel -b/a : S = {-b/a}.
Exemple :
Résoudre 5x - 7 = 2x + 8.
On regroupe les termes en x à gauche et les constantes à droite :
5x - 2x = 8 + 7
3x = 15
x = 15 / 3 = 5.
Solution : S = {5}.
2. Inéquations du premier degré à une inconnue
Règle d'or absolue des inéquations :
Lorsqu'on multiplie ou divise les deux membres d'une inéquation par un nombre réel STRICTEMENT NÉGATIF, le sens de l'inégalité s'inverse obligatoirement (< devient >, et ≤ devient ≥) !
Exemple résolu :
Résoudre dans R l'inéquation : -3x + 4 > 10.
-3x > 10 - 4
-3x > 6
On divise les deux membres par -3 (nombre négatif) : le symbole s'inverse !
x < 6 / (-3)
x < -2.
L'ensemble des solutions est l'intervalle ouvert : S = ]-∞ ; -2[.
3. Systèmes d'inéquations à une inconnue
Résoudre un système de plusieurs inéquations à une inconnue x revient à chercher les valeurs de x qui vérifient SIMULTANÉMENT toutes les inéquations du système.
L'ensemble solution final est l'INTERSECTION géométrique des ensembles de solutions de chaque inéquation :
S_système = S₁ ∩ S₂.
Exemple résolu :
Résoudre le système : { x > 1 et x ≤ 5 }.
La première inéquation donne S₁ = ]1 ; +∞[.
La deuxième inéquation donne S₂ = ]-∞ ; 5].
L'intersection des deux intervalles sur la droite graduée est :
S = S₁ ∩ S₂ = ]1 ; 5].

CONCLUSION
La maîtrise des calculs de fractions, des radicaux, des identités remarquables, de la valeur absolue et des inéquations constitue la boîte à outils universelle du lycéen en Seconde L. Ces automatismes de calcul rigoureux sont indispensables pour aborder l'étude des fonctions, des statistiques et des équations du second degré.`,
  introduction: `L'ensemble des nombres réels, noté R, constitue le cadre universel de tout le calcul algébrique et de l'analyse fonctionnelle au lycée. Ce premier chapitre consolide et approfondit les techniques fondamentales de calcul indispensables pour aborder sereinement les chapitres suivants du programme de Seconde L. Il traite successivement du calcul fractionnaire rationnel et des conditions d'existence, de la manipulation rigoureuse des radicaux (racines carrées) et de leur rationalisation, du maniement des identités remarquables aux degrés 2 et 3, de l'étude géométrique de la valeur absolue et des intervalles de R, et enfin de la résolution méthodique des équations, inéquations et systèmes d'inéquations du premier degré à une inconnue.`,
  sections: [
    {
      title: "I. Fractions et calcul algébrique",
      content: [
        "Condition d'existence : le dénominateur doit être non nul (B ≠ 0). Ex. E(x) = (2x+1)/(x-3) définie pour x ≠ 3.",
        "Opérations : dénominateur commun pour l'addition a/b + c/d = (ad+bc)/(bd) ; produit (a/b)×(c/d) = ac/bd ; division par multiplication par l'inverse (a/b)/(c/d) = ad/bc.",
        "Exemples : 3/4 + 5/6 = 9/12 + 10/12 = 19/12 ; 2/x + 3/(2x) = 7/(2x)."
      ]
    },
    {
      title: "II. Radicaux et racines carrées",
      content: [
        "Définition : √a est l'unique réel positif tel que (√a)² = a (avec a ≥ 0).",
        "Propriétés : √(ab) = √a × √b ; √(a/b) = √a / √b ; √(a²) = |a|. Attention : √(a+b) ≠ √a + √b.",
        "Extraction de carrés parfaits : √180 = √(36×5) = 6√5 ; √72 = 6√2.",
        "Rationalisation du dénominateur : 3/√5 = 3√5/5 ; utilisation de l'expression conjuguée pour a/(b-√c)."
      ]
    },
    {
      title: "III. Identités remarquables, développement et factorisation",
      content: [
        "Degré 2 : (a+b)² = a² + 2ab + b² ; (a-b)² = a² - 2ab + b² ; (a+b)(a-b) = a² - b².",
        "Degré 3 : (a+b)³ = a³ + 3a²b + 3ab² + b³ ; (a-b)³ = a³ - 3a²b + 3ab² - b³ ; a³-b³ = (a-b)(a²+ab+b²) ; a³+b³ = (a+b)(a²-ab+b²).",
        "Développer = distribuer et supprimer parenthèses ; Factoriser = transformer une somme en produit (mise en facteur commun ou identités)."
      ]
    },
    {
      title: "IV. Valeur absolue et intervalles",
      content: [
        "Définition : |x| = x si x ≥ 0 et -x si x < 0. Représente la distance de x à 0 sur la droite réelle.",
        "Distance entre deux réels : d(a, b) = |b - a|.",
        "Équations : |x-a| = r <=> x = a+r ou x = a-r. Ex. |2x+1| = |x-2| donne x = -3 ou x = 1/3.",
        "Inéquations : |x-a| ≤ r <=> a-r ≤ x ≤ a+r (intervalle fermé). Ex. |x-2| ≤ 3 donne S = [-1 ; 5]."
      ]
    },
    {
      title: "V. Équations et inéquations du premier degré",
      content: [
        "Équation ax+b = 0 : x = -b/a. Ex. 5x - 7 = 2x + 8 donne 3x = 15 => x = 5.",
        "Inéquations : diviser ou multiplier par un négatif inverse le sens de l'inégalité ! Ex. -3x + 4 > 10 => -3x > 6 => x < -2, soit S = ]-∞ ; -2[.",
        "Système d'inéquations : intersection des intervalles solutions (S₁ ∩ S₂). Ex. x > 1 et x ≤ 5 => S = ]1 ; 5]."
      ]
    }
  ],
  conclusion: `La maîtrise des calculs de fractions, des radicaux, des identités remarquables, de la valeur absolue et des inéquations constitue la boîte à outils universelle du lycéen en Seconde L. Ces automatismes de calcul rigoureux sont indispensables pour aborder l'étude des fonctions, des statistiques et des équations du second degré.`
};

export const LESSON_2_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-2',
  number: 'CHAPITRE 2',
  title: `Situations de proportionnalité : pourcentages, taux d'intérêt, échelles, mouvement uniforme et fonction linéaire`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 2 : SITUATIONS DE PROPORTIONNALITÉ

INTRODUCTION
La notion de proportionnalité est l'un des concepts mathématiques les plus anciens, les plus universels et les plus omniprésents dans la vie économique, commerciale et scientifique. Deux grandeurs variables sont dites proportionnelles lorsque les valeurs de l'une s'obtiennent en multipliant les valeurs correspondantes de l'autre par un nombre fixe et constant, appelé coefficient de proportionnalité. En classe de Seconde L, l'étude de la proportionnalité dépasse le cadre arithmétique élémentaire du collège pour faire le lien avec les outils économiques et géographiques modernes : calculs de pourcentages d'évolution (hausses, réductions et pourcentages successifs), calculs d'intérêts bancaires simples, utilisation des échelles cartographiques et architecturales, cinématique du mouvement uniforme et modélisation par la fonction linéaire.

I. LES POURCENTAGES ET LEURS APPLICATIONS ÉCONOMIQUES
1. Définition d'un pourcentage
Un pourcentage est une manière d'exprimer une proportion ou un ratio par rapport à une base de référence égale à 100.
Prendre t % d'une quantité totale X revient à calculer :
Y = X × (t / 100).
2. Pourcentage d'augmentation (hausse)
Lorsqu'une grandeur de valeur initiale V_i subit une augmentation de t %, sa nouvelle valeur finale V_f est obtenue en ajoutant le montant de la hausse :
Montant de la hausse = V_i × (t / 100)
V_f = V_i + V_i × (t / 100) = V_i × (1 + t / 100)
Le facteur multiplicateur d'une augmentation de t % est donc :
k = 1 + t / 100.
Exemple d'application concrète :
Le prix d'un sac de riz de 50 kg à Dakar coûte 25 000 F CFA. Suite à une hausse des cours mondiaux, son prix augmente de 8 %.
Calculons le nouveau prix :
- Montant de l'augmentation : 25 000 × 0,08 = 2 000 F CFA.
- Prix final : 25 000 + 2 000 = 27 000 F CFA.
Ou directement avec le coefficient multiplicateur :
k = 1 + 8/100 = 1,08
Prix final = 25 000 × 1,08 = 27 000 F CFA.
3. Pourcentage de diminution (réduction, solde, rabais)
Lorsqu'une grandeur de valeur initiale V_i subit une réduction ou une baisse de t %, sa valeur finale V_f est calculée par :
Montant de la baisse = V_i × (t / 100)
V_f = V_i - V_i × (t / 100) = V_i × (1 - t / 100)
Le facteur multiplicateur d'une diminution de t % est donc :
k = 1 - t / 100.
Exemple :
Un magasin de confection applique une remise promotionnelle de 15 % sur un tissu bazin affiché à 40 000 F CFA.
k = 1 - 15/100 = 0,85
Prix final après remise = 40 000 × 0,85 = 34 000 F CFA.
4. Évolutions successives (attention au piège classique !)
Règle d'or : On ne doit JAMAIS additionner directement des pourcentages d'évolutions successives ! Pour calculer l'effet de plusieurs variations successives, on multiplie entre eux les coefficients multiplicateurs successifs :
k_global = k₁ × k₂ × ...
Exemple démonstratif :
Une facture de 80 000 F CFA subit une remise de 10 %, puis une taxe de 18 %.
- Coefficient de remise : k₁ = 1 - 10/100 = 0,90
- Coefficient de taxe : k₂ = 1 + 18/100 = 1,18
- Coefficient multiplicateur global : k_global = 0,90 × 1,18 = 1,062 (ce qui correspond à une hausse globale de 6,2 %, et non pas -10 % + 18 % = +8 % !).
Montant final = 80 000 × 1,062 = 84 960 F CFA.
5. Les intérêts simples en économie
Dans les opérations financières d'épargne ou d'emprunt à court terme, l'intérêt simple est proportionnel au capital C placé, au taux d'intérêt annuel t (ou i = t/100) et à la durée de placement n (en années) :
Intérêt = C × i × n
Le capital final accumulé après n années est :
C_final = C + Intérêt = C × (1 + i × n).
Exemple résolu :
Un artisan place un capital de C = 150 000 F CFA à la banque à un taux d'intérêt simple annuel de 5 % pendant une durée de 2 ans.
- Intérêt perçu : I = 150 000 × 0,05 × 2 = 15 000 F CFA.
- Capital total disponible au terme des 2 ans : 150 000 + 15 000 = 165 000 F CFA.

II. LES ÉCHELLES GÉOGRAPHIQUES ET ARCHITECTURALES
1. Définition de l'échelle
L'échelle d'une carte géographique, d'un plan d'architecte ou d'une maquette est le rapport constant entre une distance mesurée sur le document graphique (d_plan) et la distance réelle correspondante mesurée sur le terrain (D_réelle), exprimées toutes deux impérativement dans la MÊME unité de longueur (généralement le centimètre cm) :
Échelle k = Distance sur le plan / Distance réelle sur le terrain
On note conventionnellement l'échelle sous la forme d'une fraction unitaire : 1 / n (ou 1:n).
Cela signifie que 1 cm mesuré sur le plan représente en réalité n cm sur le terrain.
Formules dérivées indispensables :
- Pour calculer la distance réelle : D_réelle = d_plan × n
- Pour calculer la distance sur le plan : d_plan = D_réelle / n
2. Exemples d'application cartographique
Exemple 1 :
Sur une carte topographique du Sénégal à l'échelle 1:50 000, le tracé d'une route entre deux villages mesure d = 6 cm. Quelle est la distance réelle sur le terrain ?
D_réelle = 6 cm × 50 000 = 300 000 cm.
Convertissons en mètres puis en kilomètres :
300 000 cm = 3 000 m = 3 km.
La route mesure exactement 3 kilomètres dans la réalité.
Exemple 2 :
Sur une carte routière à l'échelle 1:100 000, deux localités sont distantes de 4,5 cm sur le papier.
D_réelle = 4,5 cm × 100 000 = 450 000 cm = 4 500 m = 4,5 km.

III. PROPORTIONNALITÉ DANS LE MOUVEMENT UNIFORME
Dans un mouvement uniforme, la vitesse moyenne v est constante. La distance parcourue d est directement proportionnelle à la durée t du parcours :
d = v × t
Le coefficient de proportionnalité reliant la durée à la distance est la vitesse v :
v = d / t  et  t = d / v.
Règle essentielle de cohérence des unités :
- Si la vitesse est exprimée en kilomètres par heure (km/h), la distance doit être en kilomètres (km) et la durée en heures décimales (h).
- Pour convertir des minutes en heures : on divise le nombre de minutes par 60 (ex. 25 min = 25/60 h ; 40 min = 40/60 h = 2/3 h).
Exemple résolu :
Une automobile roule à une vitesse constante de 72 km/h pendant 25 minutes. Quelle est la distance parcourue ?
Durée en heures : t = 25 / 60 h.
Distance : d = 72 × (25 / 60) = (72 / 60) × 25 = 1,2 × 25 = 30 km.
Exemple résolu 2 :
Un cycliste roule à une vitesse constante de 18 km/h pendant 40 minutes.
t = 40 / 60 h = 2/3 h.
d = 18 × (2/3) = 12 km.

IV. TABLEAU DE PROPORTIONNALITÉ ET FONCTION LINÉAIRE
1. Le tableau de proportionnalité et la quatrième proportionnelle
Deux séries de nombres forment un tableau de proportionnalité si l'on passe de la première ligne à la seconde en multipliant toujours par le même coefficient k :
y = k × x
La règle de trois ou produit en croix permet de calculer une quatrième proportionnelle inconnue x :
Si a / b = c / x, alors a × x = b × c, d'où x = (b × c) / a.
Exemple :
3 cahiers coûtent 1 800 F CFA. Quel est le prix de 7 cahiers au même tarif ?
- Coefficient de proportionnalité (prix unitaire) : k = 1 800 / 3 = 600 F CFA par cahier.
- Prix de 7 cahiers : 7 × 600 = 4 200 F CFA.
2. Traduction fonctionnelle : la fonction linéaire
Toute relation de proportionnalité entre deux grandeurs réelles x et y se modélise mathématiquement par une fonction linéaire f :
f(x) = k × x
où k est le coefficient de proportionnalité (également appelé coefficient directeur de la droite).
Propriété géométrique fondamentale :
La représentation graphique d'une fonction linéaire f(x) = kx dans un repère du plan est TOUJOURS une droite qui passe impérativement par l'origine O(0, 0) du repère.

CONCLUSION
La proportionnalité unifie des domaines d'application variés : commerce, banque, cartographie, physique et géométrie. Maîtriser le calcul des coefficients multiplicateurs de pourcentages, la règle de trois et la représentation cartésienne par une droite passant par l'origine permet d'aborder sans difficulté la généralisation naturelle de la fonction linéaire : la fonction affine.`,
  introduction: `La notion de proportionnalité est l'un des concepts mathématiques les plus anciens, les plus universels et les plus omniprésents dans la vie économique, commerciale et scientifique. Deux grandeurs variables sont dites proportionnelles lorsque les valeurs de l'une s'obtiennent en multipliant les valeurs correspondantes de l'autre par un nombre fixe et constant, appelé coefficient de proportionnalité. En classe de Seconde L, l'étude de la proportionnalité dépasse le cadre arithmétique élémentaire du collège pour faire le lien avec les outils économiques et géographiques modernes : calculs de pourcentages d'évolution (hausses, réductions et pourcentages successifs), calculs d'intérêts bancaires simples, utilisation des échelles cartographiques et architecturales, cinématique du mouvement uniforme et modélisation par la fonction linéaire.`,
  sections: [
    {
      title: "I. Pourcentages et intérêts simples",
      content: [
        "Hausse de t % : V_finale = V_initiale × (1 + t/100). Ex. 25 000 F + 8 % = 25 000 × 1,08 = 27 000 F CFA.",
        "Baisse de t % : V_finale = V_initiale × (1 - t/100). Ex. 40 000 F - 15 % = 40 000 × 0,85 = 34 000 F CFA.",
        "Évolutions successives : on multiplie les coefficients multiplicateurs (k_global = k₁ × k₂), on n'additionne JAMAIS les pourcentages.",
        "Intérêt simple : Intérêt = Capital × i × n (avec i taux et n durée en années)."
      ]
    },
    {
      title: "II. Échelles cartographiques",
      content: [
        "Échelle k = distance sur le plan / distance réelle sur le terrain (en même unité).",
        "Échelle 1:50 000 : 1 cm sur la carte = 50 000 cm = 500 m = 0,5 km sur le terrain. 6 cm = 3 km.",
        "Échelle 1:100 000 : 4,5 cm = 450 000 cm = 4,5 km."
      ]
    },
    {
      title: "III. Mouvement uniforme",
      content: [
        "Vitesse constante : distance proportionnelle au temps d = v × t.",
        "Conversions de durées : 25 min = 25/60 h => à 72 km/h, d = 72 × 25/60 = 30 km. 40 min = 2/3 h => à 18 km/h, d = 12 km."
      ]
    },
    {
      title: "IV. Tableau de proportionnalité et fonction linéaire",
      content: [
        "Coefficient de proportionnalité k tel que y = kx. Quatrième proportionnelle par produit en croix.",
        "Modélisation : fonction linéaire f(x) = kx. Sa représentation graphique est une droite passant par l'origine O(0, 0)."
      ]
    }
  ],
  conclusion: `La proportionnalité unifie des domaines d'application variés : commerce, banque, cartographie, physique et géométrie. Maîtriser le calcul des coefficients multiplicateurs de pourcentages, la règle de trois et la représentation cartésienne par une droite passant par l'origine permet d'aborder sans difficulté la généralisation naturelle de la fonction linéaire : la fonction affine.`
};

export const LESSON_3_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-3',
  number: 'CHAPITRE 3',
  title: `Fonction affine et droites du plan : coefficient directeur, droites parallèles, perpendicularité et distance`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 3 : FONCTION AFFINE ET DROITES DU PLAN

INTRODUCTION
Dans l'étude des phénomènes quantitatifs, les relations les plus simples et les plus fréquemment rencontrées sont les relations affines, où une grandeur varie de manière directement proportionnelle à l'accroissement d'une autre tout en partant d'une valeur initiale non nulle (comme une facture d'électricité comportant un abonnement fixe plus un prix au kilowattheure, ou une course de taxi avec une prise en charge au compteur). En mathématiques, la fonction affine f(x) = ax + b est le lien privilégié entre l'algèbre et la géométrie analytique plane : sa courbe représentative est une droite. L'élève de Seconde L approfondira la notion de coefficient directeur et de taux d'accroissement, l'étude des fonctions affines par morceaux (tarifications par tranches), la détermination de l'équation d'une droite passant par deux points, les critères de parallélisme et de perpendicularité, ainsi que la formule de la distance euclidienne entre deux points dans un repère orthonormal.

I. FONCTION LINÉAIRE ET FONCTION AFFINE
1. La fonction linéaire
Une fonction linéaire f est une fonction définie sur R par une relation de la forme :
f(x) = ax
où a est un nombre réel fixé, appelé coefficient directeur (ou coefficient de proportionnalité).
- Si a > 0 : la fonction est strictement croissante sur R.
- Si a < 0 : la fonction est strictement décroissante sur R.
- Si a = 0 : la fonction est nulle partout (f(x) = 0).
Représentation graphique : c'est une droite (D) passant obligatoirement par l'origine du repère O(0, 0) et par le point de coordonnées (1, a).
2. La fonction affine
Une fonction affine f est une fonction définie sur R par :
f(x) = ax + b
où a et b sont deux réels fixés :
- a est le coefficient directeur (pente de la droite) ;
- b est l'ordonnée à l'origine (valeur de la fonction en zéro : f(0) = a×0 + b = b). Le point de coordonnées (0, b) est le point d'intersection de la droite avec l'axe vertical des ordonnées (Oy).
Cas particuliers remarquables :
- Si b = 0 : f(x) = ax, la fonction affine est une fonction linéaire (cas particulier).
- Si a = 0 : f(x) = b, la fonction est constante (sa courbe est une droite horizontale parallèle à l'axe des abscisses).

II. TAUX D'ACCROISSEMENT ET PROPRIÉTÉ CARACTÉRISTIQUE
1. Propriété des accroissements proportionnels
Une fonction f définie sur R est affine si et seulement si les accroissements des images sont proportionnels aux accroissements de la variable x :
Pour tous réels distincts x₁ et x₂ (x₁ ≠ x₂) :
a = [f(x₂) - f(x₁)] / (x₂ - x₁)
Ce rapport constant a est le taux d'accroissement (ou coefficient directeur).
Signification concrète : lorsque la variable x augmente de 1 unité, l'image f(x) augmente de a unités (ou diminue de |a| si a < 0). Lorsque x augmente de h unités, f(x) varie de a × h unités.
2. Image et antécédent
- Calculer l'image d'un nombre k par f revient à remplacer x par k dans l'expression : Image = f(k).
  Exemple : pour f(x) = 2x - 5, l'image de 4 est f(4) = 2(4) - 5 = 8 - 5 = 3.
- Chercher l'antécédent d'un nombre y par f revient à résoudre l'équation f(x) = y d'inconnue x.
  Exemple : chercher l'antécédent de 7 par f(x) = 2x - 5 :
  2x - 5 = 7  <=>  2x = 7 + 5 = 12  <=>  x = 12 / 2 = 6.
  L'unique antécédent de 7 est 6.
3. Déterminer une fonction affine à partir de deux points
On cherche la fonction affine f(x) = ax + b telle que f(1) = 4 et f(3) = 10.
- Étape 1 : calculer le coefficient directeur a :
  a = [f(3) - f(1)] / (3 - 1) = (10 - 4) / 2 = 6 / 2 = 3.
  La fonction s'écrit donc f(x) = 3x + b.
- Étape 2 : déterminer l'ordonnée à l'origine b en utilisant l'une des valeurs connues (par exemple f(1) = 4) :
  f(1) = 3(1) + b = 4  <=>  3 + b = 4  <=>  b = 4 - 3 = 1.
- Conclusion : la fonction affine recherchée est f(x) = 3x + 1.

III. FONCTIONS AFFINES PAR MORCEAUX (MODÉLISATION ÉCONOMIQUE)
Une fonction affine par morceaux est une fonction dont l'expression algébrique est définie par différentes fonctions affines sur différents intervalles du domaine de définition. Elle est couramment utilisée en économie pour modéliser les tarifications par tranches (factures d'eau de la Sen'Eau, tranches d'électricité Senelec, frais de livraison ou impôt progressif).
Exemple d'application concrète :
Une entreprise de télécommunications propose la tarification suivante pour un forfait de communication mensuel :
- Pour une durée de communication x comprise entre 0 et 10 heures : coût forfaitaire de 500 F CFA par heure, soit C(x) = 500x.
- Pour une durée x dépassant 10 heures : les 10 premières heures coûtent 5 000 F CFA, et chaque heure supplémentaire au-delà de 10 heures est facturée 700 F CFA, soit :
  C(x) = 5 000 + 700(x - 10) = 700x - 2 000.
Calculs :
- Pour x = 8 heures : 8 ≤ 10, on utilise la première formule : C(8) = 500 × 8 = 4 000 F CFA.
- Pour x = 12 heures : 12 > 10, on utilise la seconde formule : C(12) = 5 000 + 700(12 - 10) = 5 000 + 700 × 2 = 5 000 + 1 400 = 6 400 F CFA.

IV. GÉOMÉTRIE ANALYTIQUE : DROITES DU PLAN ET REPÈRE ORTHONORMAL
Dans un repère orthonormal (O, i, j), les axes (Ox) et (Oy) sont perpendiculaires et possèdent la même unité de longueur.
1. Équation réduite d'une droite non verticale
Toute droite (D) non parallèle à l'axe des ordonnées admet une équation réduite unique de la forme :
y = mx + p
où :
- m est le coefficient directeur (pente) de la droite ;
- p est l'ordonnée à l'origine (le point (0, p) appartient à la droite).
Si la droite passe par deux points connus A(x_A, y_A) et B(x_B, y_B) avec x_A ≠ x_B :
m = (y_B - y_A) / (x_B - x_A)
Exemple résolu :
Déterminer l'équation de la droite (AB) passant par A(2, 1) et B(5, 7).
- Coefficient directeur : m = (7 - 1) / (5 - 2) = 6 / 3 = 2.
  L'équation s'écrit y = 2x + p.
- Puisque A(2, 1) appartient à la droite, ses coordonnées vérifient l'équation :
  1 = 2(2) + p  <=>  1 = 4 + p  <=>  p = 1 - 4 = -3.
- L'équation réduite de la droite (AB) est : y = 2x - 3.
2. Droites verticales
Une droite parallèle à l'axe des ordonnées (Oy) a tous ses points qui possèdent la même abscisse constante c. Son équation est de la forme :
x = c
Cette droite n'admet pas de coefficient directeur m (pente infinie) et ne correspond pas à une fonction.
3. Conditions de parallélisme et de perpendicularité de deux droites
Soient deux droites d'équations réduites (D₁) : y = m₁x + p₁ et (D₂) : y = m₂x + p₂ :
- Condition de parallélisme :
  Deux droites (D₁) et (D₂) sont strictement parallèles ou confondues si et seulement si elles ont le MÊME coefficient directeur :
  (D₁) // (D₂) <=> m₁ = m₂
  Exemple : les droites y = 3x + 1 et y = 3x - 8 ont toutes deux pour coefficient directeur 3. Elles sont rigoureusement parallèles.
- Condition de perpendicularité (orthogonalité) :
  Deux droites non verticales (D₁) et (D₂) sont perpendiculaires si et seulement si le produit de leurs coefficients directeurs est égal à -1 :
  (D₁) ⊥ (D₂) <=> m₁ × m₂ = -1
  Exemple : la droite (D₁) : y = 2x + 1 et la droite (D₂) : y = -0,5x + 4 sont perpendiculaires car m₁ × m₂ = 2 × (-0,5) = -1.

V. DISTANCE EUCLIDIENNE ENTRE DEUX POINTS DANS UN REPÈRE ORTHONORMAL
Dans un repère orthonormal, la distance géométrique entre deux points A(x_A, y_A) et B(x_B, y_B), notée AB, découle directement du théorème de Pythagore :
AB = √[ (x_B - x_A)² + (y_B - y_A)² ]
Exemple de calcul :
Calculer la distance entre les points A(1, 2) et B(5, 5).
x_B - x_A = 5 - 1 = 4
y_B - y_A = 5 - 2 = 3
AB = √[ 4² + 3² ] = √[ 16 + 9 ] = √25 = 5 unités de longueur.
Exemple 2 :
Calculer la distance entre C(-1, 4) et D(3, 1).
CD = √[ (3 - (-1))² + (1 - 4)² ] = √[ (3 + 1)² + (-3)² ] = √[ 4² + 9 ] = √[ 16 + 9 ] = √25 = 5.

CONCLUSION
La fonction affine et la géométrie de la droite scellent le mariage parfait de l'algèbre et de la géométrie. La maîtrise du coefficient directeur, des équations de droites, des critères de parallélisme/orthogonalité et de la formule de distance offre les bases géométriques indispensables pour aborder les lectures graphiques et les systèmes d'équations.`,
  introduction: `Dans l'étude des phénomènes quantitatifs, les relations les plus simples et les plus fréquemment rencontrées sont les relations affines, où une grandeur varie de manière directement proportionnelle à l'accroissement d'une autre tout en partant d'une valeur initiale non nulle (comme une facture d'électricité comportant un abonnement fixe plus un prix au kilowattheure, ou une course de taxi avec une prise en charge au compteur). En mathématiques, la fonction affine f(x) = ax + b est le lien privilégié entre l'algèbre et la géométrie analytique plane : sa courbe représentative est une droite. L'élève de Seconde L approfondira la notion de coefficient directeur et de taux d'accroissement, l'étude des fonctions affines par morceaux (tarifications par tranches), la détermination de l'équation d'une droite passant par deux points, les critères de parallélisme et de perpendicularité, ainsi que la formule de la distance euclidienne entre deux points dans un repère orthonormal.`,
  sections: [
    {
      title: "I. Fonctions linéaires et affines",
      content: [
        "Fonction linéaire f(x) = ax : proportionnalité pure, droite passant par l'origine O(0, 0).",
        "Fonction affine f(x) = ax + b : a = coefficient directeur (pente), b = ordonnée à l'origine (point (0, b) sur l'axe Oy)."
      ]
    },
    {
      title: "II. Taux d'accroissement et détermination",
      content: [
        "Taux d'accroissement constant : a = [f(x₂) - f(x₁)] / (x₂ - x₁).",
        "Image : remplacer x par la valeur (ex. f(4) pour 2x-5 donne 3). Antécédent : résoudre f(x) = y (ex. 2x-5 = 7 donne x = 6).",
        "Déterminer f(x) avec deux points : si f(1) = 4 et f(3) = 10 => a = (10-4)/(3-1) = 3, puis b = 4 - 3(1) = 1 => f(x) = 3x + 1."
      ]
    },
    {
      title: "III. Fonctions affines par morceaux",
      content: [
        "Expressions affines différentes selon les intervalles (ex. tarification d'énergie par tranches : C(x) = 500x pour x ≤ 10 et 5000 + 700(x-10) pour x > 10)."
      ]
    },
    {
      title: "IV. Équations de droites, parallélisme et perpendicularité",
      content: [
        "Équation réduite : y = mx + p. Pente m = (y_B - y_A)/(x_B - x_A).",
        "Parallélisme : m₁ = m₂. Ex. y = 3x + 1 et y = 3x - 8 sont parallèles.",
        "Perpendicularité : m₁ × m₂ = -1. Ex. y = 2x et y = -0,5x sont perpendiculaires."
      ]
    },
    {
      title: "V. Distance entre deux points",
      content: [
        "Formule de distance dans un repère orthonormal : AB = √[ (x_B - x_A)² + (y_B - y_A)² ]. Ex. A(1, 2) et B(5, 5) => AB = √(4² + 3²) = 5."
      ]
    }
  ],
  conclusion: `La fonction affine et la géométrie de la droite scellent le mariage parfait de l'algèbre et de la géométrie. La maîtrise du coefficient directeur, des équations de droites, des critères de parallélisme/orthogonalité et de la formule de distance offre les bases géométriques indispensables pour aborder les lectures graphiques et les systèmes d'équations.`
};

export const LESSON_4_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-4',
  number: 'CHAPITRE 4',
  title: `Lectures graphiques : construction, lecture d'images et d'antécédents, interprétation et interpolation linéaire`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 4 : LECTURES GRAPHIQUES ET INTERPOLATION LINÉAIRE

INTRODUCTION
Dans la vie professionnelle, économique, sociale et médiatique (articles de presse, rapports statistiques, bilans d'entreprises, graphiques météo), les données numériques ne sont presque jamais présentées sous forme de formules algébriques abstraites, mais sous forme de courbes et de diagrammes visuels. Savoir lire, interpréter avec esprit critique, construire correctement une représentation graphique et estimer des valeurs intermédiaires non mesurées par la méthode d'interpolation linéaire sont des compétences indispensables pour tout citoyen éclairé, et plus particulièrement pour un élève de la filière littéraire et des sciences humaines. Cette leçon enseigne les protocoles méthodologiques stricts de construction graphique, la lecture directe des images et des antécédents, l'analyse des variations et des extremums, ainsi que le calcul de l'interpolation linéaire.

I. CONSTRUIRE UNE REPRÉSENTATION GRAPHIQUE À PARTIR DE DONNÉES
1. Choix du repère et des grandeurs sur les axes
- L'axe horizontal (axe des abscisses Ox) reçoit toujours la variable indépendante (la grandeur que l'on contrôle ou qui s'écoule naturellement, comme le temps en heures, jours ou années, ou l'âge).
- L'axe vertical (axe des ordonnées Oy) reçoit la variable dépendante ou mesurée (la grandeur observée, comme la température, le chiffre d'affaires, la distance, le prix).
2. Le choix crucial de l'échelle
Le choix des échelles doit permettre d'utiliser au maximum l'espace disponible de la feuille de papier millimétré ou quadrillé :
- Indiquer clairement l'origine O(0, 0) ou signaler une éventuelle coupure d'axe si les valeurs commencent loin de zéro.
- Choisir des graduations régulières faciles à lire (1 cm pour 1 h, 2 h, 5 h ou 10 h ; 1 cm pour 10 F, 50 F ou 100 F). Ne jamais changer d'échelle le long d'un même axe !
- Préciser lisiblement le nom des grandeurs et leurs unités à l'extrémité de chaque axe.
3. Positionnement des points et tracé de la courbe
- Chaque couple de valeurs (x, y) du tableau statistique est représenté par un point repéré par une petite croix fine en forme de '+' ou de '×' (ne jamais faire de gros pâtés d'encre).
- Relier les points :
  * Si le phénomène est continu dans le temps (température, distance d'un véhicule), on relie les points par une courbe lisse et régulière tracée à main levée sans coupure.
  * Si le phénomène varie par bonds rectilignes supposés, on relie les points à la règle par des segments successifs (ligne brisée).
Exemple d'application :
Relevé des températures à Dakar au cours d'une journée :
- Temps t (heures) : 0 h, 6 h, 12 h, 18 h, 24 h.
- Température T (°C) : 22 °C, 20 °C, 31 °C, 27 °C, 23 °C.
On place les heures en abscisse (1 cm pour 3 h) et les températures en ordonnée (1 cm pour 2 °C à partir de 18 °C). Les cinq points obtenus permettent de visualiser instantanément l'évolution thermique quotidienne avec le minimum matinal à 6 h (20 °C) et le pic thermique diurne à 12 h (31 °C).

II. LIRE UNE IMAGE ET UN ANTÉCÉDENT SUR UN GRAPHIQUE
1. Trouver l'image d'un nombre x = a
Démarche géométrique :
- Étape 1 : Repérer le nombre a sur l'axe horizontal des abscisses.
- Étape 2 : Tracer mentalement ou en pointillés fins une droite verticale d'équation x = a jusqu'à ce qu'elle coupe la courbe en un point M.
- Étape 3 : Depuis ce point M, tracer une droite horizontale vers l'axe vertical des ordonnées.
- Étape 4 : Lire l'ordonnée correspondante b. Ce nombre b est l'image de a par la fonction : f(a) = b.
Remarque : chaque abscisse a du domaine de définition ne possède qu'une SEULE image sur la courbe.
2. Trouver le ou les antécédents d'un nombre y = b
Démarche géométrique :
- Étape 1 : Repérer la valeur b sur l'axe vertical des ordonnées.
- Étape 2 : Tracer une droite horizontale d'équation y = b à travers tout le repère.
- Étape 3 : Repérer tous les points d'intersection de cette droite horizontale avec la courbe.
- Étape 4 : Depuis chaque point d'intersection, descendre verticalement vers l'axe des abscisses pour lire les valeurs x₁, x₂, etc.
Remarque fondamentale : un nombre b peut avoir aucun, un seul, ou plusieurs antécédents différents !
Exemple :
Si la courbe passe par les points A(2, 5), B(4, 7) et C(6, 5) :
- L'image de 4 est 7 (f(4) = 7).
- Le nombre 5 possède deux antécédents distincts : 2 et 6 (car f(2) = 5 et f(6) = 5).

III. INTERPRÉTER UNE ÉVOLUTION ET VIGILANCE SUR LES ÉCHELLES
1. Sens de variation d'une grandeur
- Croissance : la courbe monte de gauche à droite sur l'intervalle [a ; b]. Cela signifie que lorsque x augmente, la grandeur y augmente également.
- Décroissance : la courbe descend de gauche à droite. Lorsque x augmente, y diminue.
- Constance (palier) : la courbe est un segment horizontal parfaitement plat. La grandeur y reste constante malgré l'écoulement de x.
2. Extremums : maximum et minimum
- Le maximum d'une fonction sur un intervalle est le point le plus haut atteint par la courbe (sommet).
- Le minimum est le point le plus bas (creux). Dans un contexte économique, le minimum représente par exemple le coût de production le plus bas ou le prix le plus avantageux.
3. Vigilance critique sur les effets d'échelle trompeurs
Attention aux manipulations visuelles fréquentes dans la presse et les publicités :
Une courbe peut sembler grimper de manière spectaculaire si l'axe vertical commence à 990 au lieu de 0 et si l'échelle est étirée, alors que la variation numérique réelle n'est que de 1 % ! Il faut TOUJOURS lire les valeurs chiffrées exactes sur les graduations avant de porter un jugement économique ou social.

IV. L'INTERPOLATION LINÉAIRE
1. Définition et principe mathématique
L'interpolation linéaire est une méthode de calcul numérique qui permet d'estimer la valeur inconnue y d'une grandeur pour une valeur x située entre deux points de mesure connus A(x₁, y₁) et B(x₂, y₂), en faisant l'hypothèse simplificatrice que la variation entre ces deux points est régulière et linéaire (proportionnalité des accroissements sur le segment [AB]).
2. La formule d'interpolation linéaire
Le taux d'accroissement m sur le segment [AB] est constant :
m = (y₂ - y₁) / (x₂ - x₁)
Pour toute valeur x comprise entre x₁ et x₂ (x₁ ≤ x ≤ x₂), la valeur interpolée y vérifie :
(y - y₁) / (y₂ - y₁) = (x - x₁) / (x₂ - x₁)
d'où la formule explicite :
y = y₁ + m × (x - x₁) = y₁ + [ (y₂ - y₁) / (x₂ - x₁) ] × (x - x₁)
3. Exemple d'application concret résolu
Un relevé de consommation électrique industrielle indique :
- À x₁ = 10 jours de production, la consommation cumulée est de y₁ = 120 kWh.
- À x₂ = 20 jours de production, la consommation cumulée est de y₂ = 150 kWh.
On souhaite estimer la consommation cumulée au jour x = 14 jours par interpolation linéaire :
- Étape 1 : calcul du taux d'accroissement par jour :
  m = (150 - 120) / (20 - 10) = 30 / 10 = 3 kWh par jour.
- Étape 2 : calcul de l'accroissement de x depuis le point de départ x₁ = 10 :
  Δx = 14 - 10 = 4 jours.
- Étape 3 : augmentation correspondante de consommation :
  Δy = m × Δx = 3 × 4 = 12 kWh.
- Étape 4 : estimation de la consommation à x = 14 :
  y = 120 + 12 = 132 kWh.
Grâce à l'interpolation linéaire, la consommation au 14e jour est estimée avec rigueur à 132 kWh.

CONCLUSION
La lecture graphique et l'interpolation linéaire permettent de faire parler les représentations visuelles avec la plus grande rigueur mathématique. Ces compétences de décodage des courbes, d'analyse des tendances et d'estimation raisonnée constituent des atouts majeurs pour les études littéraires, économiques et de sciences sociales.`,
  introduction: `Dans la vie professionnelle, économique, sociale et médiatique (articles de presse, rapports statistiques, bilans d'entreprises, graphiques météo), les données numériques ne sont presque jamais présentées sous forme de formules algébriques abstraites, mais sous forme de courbes et de diagrammes visuels. Savoir lire, interpréter avec esprit critique, construire correctement une représentation graphique et estimer des valeurs intermédiaires non mesurées par la méthode d'interpolation linéaire sont des compétences indispensables pour tout citoyen éclairé, et plus particulièrement pour un élève de la filière littéraire et des sciences humaines. Cette leçon enseigne les protocoles méthodologiques stricts de construction graphique, la lecture directe des images et des antécédents, l'analyse des variations et des extremums, ainsi que le calcul de l'interpolation linéaire.`,
  sections: [
    {
      title: "I. Construction d'une représentation graphique",
      content: [
        "Axe horizontal (Ox) : variable indépendante (temps, âge). Axe vertical (Oy) : grandeur mesurée (température, coût).",
        "Échelle régulière et proportionnée, unités précisées sur chaque axe.",
        "Points tracés avec de fines croix '+' reliées par une courbe lisse pour un phénomène continu."
      ]
    },
    {
      title: "II. Lecture d'image et d'antécédent",
      content: [
        "Image de a : partir de a sur l'axe des abscisses, monter jusqu'à la courbe, lire l'ordonnée f(a). Chaque abscisse a au plus une image.",
        "Antécédents de b : tracer l'horizontale y = b, repérer les intersections avec la courbe et lire les abscisses correspondantes. Il peut y avoir 0, 1 ou plusieurs antécédents."
      ]
    },
    {
      title: "III. Interprétation d'évolution et vigilance",
      content: [
        "Courbe montante = croissance ; courbe descendante = diminution ; palier horizontal = grandeur constante.",
        "Maximum = point le plus haut ; Minimum = point le plus bas (coût minimal).",
        "Vigilance : se méfier des graphiques sans origine zéro ou aux échelles tronquées déformant visuellement la réalité."
      ]
    },
    {
      title: "IV. Interpolation linéaire",
      content: [
        "Estimer une valeur inconnue y entre deux points mesurés A(x₁, y₁) et B(x₂, y₂) en supposant une variation linéaire régulière.",
        "Taux d'accroissement m = (y₂ - y₁) / (x₂ - x₁). Formule : y = y₁ + m × (x - x₁).",
        "Exemple : de (10, 120) à (20, 150), le taux est m = 30/10 = 3/unité. Pour x = 14, y = 120 + 3 × (14 - 10) = 132."
      ]
    }
  ],
  conclusion: `La lecture graphique et l'interpolation linéaire permettent de faire parler les représentations visuelles avec la plus grande rigueur mathématique. Ces compétences de décodage des courbes, d'analyse des tendances et d'estimation raisonnée constituent des atouts majeurs pour les études littéraires, économiques et de sciences sociales.`
};

export const COURSES_MATH_2NDE_L_PART1: LessonContent[] = [
  LESSON_1_MATH_2NDE_L,
  LESSON_2_MATH_2NDE_L,
  LESSON_3_MATH_2NDE_L,
  LESSON_4_MATH_2NDE_L
];

export interface Math2ndeLModule {
  id: string;
  name: string;
  shortName: string;
  description: string;
  badge: string;
  count: number;
}

export const MATH_2NDE_L_PART1_MODULES: Math2ndeLModule[] = [
  {
    id: 'part1',
    name: 'Première Partie : Calcul dans ℝ, Proportionnalité et Fonctions Affines (Chapitres 1 à 4)',
    shortName: 'Partie 1 (Chapitres 1-4)',
    description: 'Programme officiel APAMS : calcul dans ℝ, fractions, racines carrées, proportionnalité, pourcentages, fonctions affines et lectures graphiques.',
    badge: 'Partie 1 • Chapitres 1 à 4',
    count: 4
  }
];
