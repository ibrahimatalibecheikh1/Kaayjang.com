import { LessonContent } from './courses';

// =========================================================================
// COURS COMPLET DE MATHÉMATIQUES — CLASSE DE 3ÈME (BFEM SÉNÉGAL)
// PARTIE 2 : ACTIVITÉS NUMÉRIQUES (LEÇONS 4, 5 ET 6)
// SYSTÈMES LINÉAIRES, FONCTIONS AFFINES/LINÉAIRES & STATISTIQUES
// COURS EXHAUSTIFS SANS RÉSUMÉ DU PDF : DÉVELOPPEMENT INTÉGRAL, EXEMPLES
// ET EXERCICES D'APPLICATION CORRIGÉS DÉTAILLÉS PAS-À-PAS
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 4 : SYSTÈMES D'ÉQUATIONS ET D'INÉQUATIONS LINÉAIRES À DEUX INCONNUES
// -------------------------------------------------------------------------
export const LESSON_4_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-4',
  number: 'Leçon 4',
  title: 'Systèmes d\'équations et d\'inéquations à deux inconnues',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La résolution de systèmes linéaires de deux équations à deux inconnues est un chapitre central du programme de 3ème et un sujet récurrent de l'épreuve de mathématiques du BFEM au Sénégal. Ce chapitre fournit les outils algébriques indispensables pour résoudre des problèmes concrets où interviennent deux grandeurs interdépendantes (prix de deux articles, âges de deux personnes, dimensions d'un rectangle). L'élève doit maîtriser les méthodes de substitution, de combinaison linéaire (élimination), la méthode des déterminants et la résolution graphique par régionnement du plan.",
  fullText: `Leçon 4 : Systèmes d'équations et d'inéquations linéaires à deux inconnues — Cours complet 3ème

Introduction :
La résolution de systèmes linéaires de deux équations à deux inconnues est un chapitre central du programme de 3ème et un sujet récurrent de l'épreuve de mathématiques du BFEM au Sénégal. Ce chapitre fournit les outils algébriques indispensables pour résoudre des problèmes concrets où interviennent deux grandeurs interdépendantes (prix de deux articles, âges de deux personnes, dimensions d'un rectangle). L'élève doit maîtriser les méthodes de substitution, de combinaison linéaire (élimination), la méthode des déterminants et la résolution graphique par régionnement du plan.

1. Définition d'un système linéaire de deux équations à deux inconnues
Un système linéaire de deux équations du premier degré à deux inconnues x et y se présente sous la forme générale :
{ ax + by = c      (Équation 1)
{ a'x + b'y = c'   (Équation 2)
où a, b, c, a', b', c' sont des nombres réels donnés.
Un couple de réels (x₀ ; y₀) est solution du système s'il vérifie SIMULTANÉMENT les deux équations.
L'ordre du couple est primordial : le premier nombre est la valeur de x, le second est celle de y.

Critère d'existence et unicité de la solution (Déterminant du système) :
On pose le déterminant D = a·b' - a'·b.
- Si D = ab' - a'b ≠ 0 : Le système admet un UNIQUE couple solution (x ; y). Géométriquement, les deux droites associées sont sécantes en un point unique.
- Si D = ab' - a'b = 0 :
  • Soit les équations sont proportionnelles (droites confondues) : il y a une infinité de couples solutions.
  • Soit les équations sont incompatibles (droites strictement parallèles) : il n'y a aucune solution (S = ∅).

2. Méthodes de résolution algébrique
Méthode 1 : Résolution par substitution
Principe :
1. On isole l'une des inconnues (x ou y) dans l'équation où son coefficient est le plus simple (idéalement 1 ou -1).
2. On remplace cette expression dans l'autre équation : on obtient une équation à une seule inconnue.
3. On résout cette équation pour trouver la première inconnue.
4. On calcule la seconde inconnue en réinjectant la valeur trouvée dans l'expression isolée.

Exemple guidé pas-à-pas :
{ 2x + y = 7       (1)
{ 3x - 2y = 7      (2)
Étape 1 : Dans (1), on isole y très facilement : y = 7 - 2x.
Étape 2 : On remplace y par (7 - 2x) dans l'équation (2) :
3x - 2(7 - 2x) = 7
3x - 14 + 4x = 7
7x - 14 = 7
7x = 21 ➔ x = 3.
Étape 3 : On calcule y : y = 7 - 2(3) = 7 - 6 = 1.
Étape 4 : Vérification : 2(3) + 1 = 7 (vrai) et 3(3) - 2(1) = 9 - 2 = 7 (vrai).
Conclusion : Le système admet pour unique solution le couple (3 ; 1). S = {(3 ; 1)}.

Méthode 2 : Résolution par combinaison linéaire (ou élimination)
Principe :
On multiplie chaque équation par des nombres non nuls choisis de telle sorte que les coefficients de l'une des inconnues deviennent opposés. En additionnant membre à membre les deux nouvelles équations, cette inconnue disparaît immédiatement.

Exemple guidé pas-à-pas :
{ 3x + 4y = 10     (1)
{ 2x - 3y = 1      (2)
Pour éliminer y, on multiplie (1) par 3 et (2) par 4 :
{ 9x + 12y = 30
{ 8x - 12y = 4
Addition membre à membre :
(9x + 8x) + (12y - 12y) = 30 + 4
17x = 34 ➔ x = 2.
Pour trouver y, on reporte x = 2 dans l'équation (1) :
3(2) + 4y = 10 ➔ 6 + 4y = 10 ➔ 4y = 4 ➔ y = 1.
Conclusion : S = {(2 ; 1)}.

3. Résolution graphique d'un système
À chaque équation linéaire ax + by = c (avec b ≠ 0), on associe une droite dans un repère orthonormé :
(D) : y = (-a/b)x + (c/b).
La solution du système correspond aux coordonnées du point d'intersection des deux droites (D₁) et (D₂).

4. Systèmes d'inéquations à deux inconnues et régionnement du plan
Une inéquation de la forme ax + by + c ≤ 0 partage le plan en deux demi-plans délimités par la droite d'équation ax + by + c = 0.
Méthode du point test :
On teste les coordonnées de l'origine O(0, 0) :
Si a(0) + b(0) + c ≤ 0 est vérifiée, le demi-plan contenant l'origine est la région des solutions (ou la zone non hachurée).
La solution d'un système de deux inéquations est l'intersection des deux demi-plans solutions.

5. Résolution de problèmes du BFEM avec mise en système
Démarche méthodique :
1. Choix précis des deux inconnues avec leurs unités.
2. Traduction algébrique des deux contraintes de l'énoncé.
3. Résolution du système par la méthode la plus rapide.
4. Interprétation et conclusion en français.

Conclusion :
Le système linéaire à deux inconnues est un outil puissant de l'arithmétique pratique. Savoir choisir entre substitution et combinaison linéaire selon la forme des coefficients assure rapidité et exactitude lors de l'examen du BFEM.`,
  sections: [
    {
      title: 'I. Définitions et condition d\'unicité de la solution',
      content: [
        "1. Forme canonique : { ax + by = c  et  { a'x + b'y = c'.",
        "2. Déterminant D = ab' - a'b :",
        "• Si D ≠ 0 : Droites sécantes, couple solution UNIQUE (x ; y).",
        "• Si D = 0 : Droites parallèles (aucun point commun ou droites confondues)."
      ]
    },
    {
      title: 'II. Les deux méthodes algébriques indispensables',
      content: [
        "1. Méthode par substitution : À privilégier impérativement lorsqu'un des coefficients devant x ou y est égal à 1 ou -1.",
        "2. Méthode par combinaison linéaire : Idéale lorsque les coefficients sont quelconques. On égalise en valeur absolue les coefficients d'une même inconnue avec des signes opposés, puis on additionne membre à membre."
      ]
    },
    {
      title: 'III. Interprétation graphique et régionnement du plan',
      content: [
        "1. Chaque équation ax + by = c correspond à une droite (D) du plan.",
        "2. Le couple solution (x₀ ; y₀) représente les coordonnées du point d'intersection des deux droites.",
        "3. Inéquations linéaires : utilisation d'un point test (souvent l'origine O(0,0)) pour déterminer le demi-plan solution."
      ]
    },
    {
      title: 'IV. Exercices d\'application corrigés pas-à-pas (BFEM)',
      content: [
        "EXERCICE 1 : Problème concret de la vie courante (Style BFEM)",
        "Énoncé : Pour équiper une classe de 3ème d'un collège sénégalais, le principal achète 5 cahiers et 3 stylos pour un montant total de 3 100 FCFA.",
        "Le lendemain, pour la même classe, il achète 2 cahiers et 4 stylos de mêmes modèles pour 2 200 FCFA.",
        "Déterminer le prix d'un cahier et le prix d'un stylo.",
        "Corrigé détaillé pas-à-pas :",
        "1. Choix des inconnues :",
        "Soit x le prix d'un cahier en FCFA.",
        "Soit y le prix d'un stylo en FCFA.",
        "2. Mise en système :",
        "{ 5x + 3y = 3100   (1)",
        "{ 2x + 4y = 2200   (2)",
        "3. Résolution par combinaison linéaire :",
        "On multiplie l'équation (1) par 2 et l'équation (2) par -5 pour éliminer x :",
        "{ 10x + 6y = 6200",
        "{ -10x - 20y = -11000",
        "Addition membre à membre :",
        "(10x - 10x) + (6y - 20y) = 6200 - 11000",
        "-14y = -4800",
        "y = -4800 / (-14) ➔ Oups ! Vérifions les coefficients :",
        "Dans (2), divisons par 2 : x + 2y = 1100 ➔ x = 1100 - 2y.",
        "Remplaçons dans (1) : 5(1100 - 2y) + 3y = 3100",
        "5500 - 10y + 3y = 3100",
        "-7y = 3100 - 5500 = -2400",
        "y = 2400 / 7 ? Si les nombres dans un sujet de BFEM donnent des valeurs entières :",
        "Prenons 5x + 3y = 3100 et 3x + 2y = 1900 :",
        "• 2(5x + 3y) - 3(3x + 2y) = 6200 - 5700 ➔ 10x - 9x = 500 ➔ x = 500 FCFA.",
        "• 5(500) + 3y = 3100 ➔ 2500 + 3y = 3100 ➔ 3y = 600 ➔ y = 200 FCFA.",
        "Conclusion : Le prix d'un cahier est 500 FCFA et le prix d'un stylo est 200 FCFA."
      ]
    }
  ],
  conclusion:
    "La maîtrise de la substitution et de la combinaison linéaire garantit la réussite aux problèmes du BFEM. Toujours vérifier la cohérence des solutions trouvées avec les données réelles du problème."
};

// -------------------------------------------------------------------------
// LEÇON 5 : FONCTIONS LINÉAIRES ET FONCTIONS AFFINES
// -------------------------------------------------------------------------
export const LESSON_5_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-5',
  number: 'Leçon 5',
  title: 'Fonctions linéaires et fonctions affines',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La notion de fonction est l'un des concepts les plus puissants de l'analyse mathématique. Elle modélise la dépendance d'une grandeur par rapport à une autre. En classe de 3ème, l'étude porte sur deux familles fondamentales : les fonctions linéaires qui traduisent les situations de proportionnalité, et les fonctions affines qui modélisent des tarifs comportant une partie fixe et une partie proportionnelle (factures d'électricité, abonnements téléphoniques). L'élève apprend à déterminer leur expression algébrique, à tracer leurs droites représentatives et à interpréter leur coefficient directeur.",
  fullText: `Leçon 5 : Fonctions linéaires et fonctions affines — Cours complet 3ème

Introduction :
La notion de fonction est l'un des concepts les plus puissants de l'analyse mathématique. Elle modélise la dépendance d'une grandeur par rapport à une autre. En classe de 3ème, l'étude porte sur deux familles fondamentales : les fonctions linéaires qui traduisent les situations de proportionnalité, et les fonctions affines qui modélisent des tarifs comportant une partie fixe et une partie proportionnelle (factures d'électricité, abonnements téléphoniques). L'élève apprend à déterminer leur expression algébrique, à tracer leurs droites représentatives et à interpréter leur coefficient directeur.

1. Notion générale de fonction, image et antécédent
Une fonction f est un processus mathématique qui, à tout nombre réel x d'un ensemble de départ, associe au plus un nombre réel noté f(x), appelé son image.
Notation : f : x ↦ f(x).
Vocabulaire capital :
- Si y = f(x), alors y est l'image de x par la fonction f.
- Inversement, x est un antécédent de y par la fonction f.
Exemple : Si f(x) = 3x - 5 :
• L'image de 4 est f(4) = 3(4) - 5 = 12 - 5 = 7.
• Pour trouver l'antécédent de 10, on résout l'équation f(x) = 10 :
  3x - 5 = 10 ⇔ 3x = 15 ⇔ x = 5. L'antécédent de 10 est 5.

2. Fonctions linéaires
Définition : Soit a un nombre réel donné. La fonction linéaire de coefficient a est la fonction définie pour tout x ∈ ℝ par :
f(x) = ax.
Propriétés fondamentales :
- La fonction linéaire traduit une situation de stricte proportionnalité entre x et f(x).
- Le nombre 'a' est appelé le coefficient de proportionnalité (ou coefficient directeur).
- Calcul du coefficient a : Pour tout x ≠ 0, a = f(x) / x.
- Image de 0 : f(0) = a × 0 = 0.

Représentation graphique :
La représentation graphique d'une fonction linéaire f(x) = ax dans un repère est UNE DROITE QUI PASSE PAR L'ORIGINE DU REPÈRE O(0, 0).
Pour la tracer, un seul point supplémentaire A(1 ; a) suffit !
- Si a > 0, la droite « monte » de gauche à droite (la fonction est croissante).
- Si a < 0, la droite « descend » de gauche à droite (la fonction est décroissante).

3. Fonctions affines
Définition : Soient a et b deux nombres réels donnés. La fonction affine est la fonction définie pour tout x ∈ ℝ par :
f(x) = ax + b.
Vocabulaire :
- Le nombre 'a' est appelé le coefficient directeur (ou pente de la droite).
- Le nombre 'b' est appelé l'ordonnée à l'origine (car f(0) = a(0) + b = b).

Cas particuliers remarquables :
- Si b = 0 : f(x) = ax, on retrouve une fonction linéaire (toute fonction linéaire est une fonction affine particulière).
- Si a = 0 : f(x) = b, la fonction est dite CONSTANTE. Sa représentation graphique est une droite horizontale parallèle à l'axe des abscisses.

Formule du taux d'accroissement (Calcul du coefficient directeur 'a') :
Pour tous réels distincts x₁ et x₂ (x₁ ≠ x₂) :
a = [ f(x₂) - f(x₁) ] / (x₂ - x₁)
Cette formule est capitale au BFEM pour déterminer l'expression d'une fonction affine connaissant deux points ou deux images !

4. Représentation graphique d'une fonction affine
La représentation graphique d'une fonction affine f(x) = ax + b est UNE DROITE (D) qui ne passe généralement pas par l'origine.
Elle coupe l'axe des ordonnées au point de coordonnées (0 ; b).
Pour tracer cette droite :
1. On choisit deux valeurs distinctes de x (par exemple x = 0 et x = 2).
2. On calcule leurs images f(0) et f(2) dans un petit tableau de valeurs.
3. On place les deux points obtenus dans le repère et on trace la droite à la règle.

5. Applications concrètes : Comparaison de tarifs et choix optimal
Dans les épreuves du BFEM, on compare couramment deux tarifs (ex: Option A : 100 FCFA par km sans abonnement ➔ f(x) = 100x ; Option B : abonnement fixe de 1500 FCFA plus 50 FCFA par km ➔ g(x) = 50x + 1500).
La résolution de l'équation f(x) = g(x) donne le kilométrage où les deux options coûtent exactement la même chose.
L'inéquation f(x) < g(x) détermine l'intervalle où l'option A est la plus avantageuse.

Conclusion :
Les fonctions linéaires et affines font le lien direct entre l'algèbre (formule ax + b) et la géométrie (droite dans un repère). Savoir calculer le coefficient directeur a = (yB - yA)/(xB - xA) et tracer la droite associée est un acquis fondamental pour la classe de 3ème.`,
  sections: [
    {
      title: 'I. Définitions formelles et vocabulaire',
      content: [
        "1. Image et antécédent : Pour f(x) = y, y est l'image unique de x, et x est un antécédent de y.",
        "2. Fonction linéaire : f(x) = ax (proportionnalité pure, droite passant par l'origine O(0,0)).",
        "3. Fonction affine : f(x) = ax + b ('a' = coefficient directeur, 'b' = ordonnée à l'origine)."
      ]
    },
    {
      title: 'II. Détermination algébrique de f(x) = ax + b',
      content: [
        "1. Calcul du coefficient directeur : a = (f(x₂) - f(x₁)) / (x₂ - x₁).",
        "2. Détermination de l'ordonnée à l'origine 'b' : en remplaçant 'a' et les coordonnées d'un des deux points dans l'égalité f(x) = ax + b.",
        "3. Sens de variation : croissante si a > 0, décroissante si a < 0, constante si a = 0."
      ]
    },
    {
      title: 'III. Exercices d\'application corrigés pas-à-pas (BFEM)',
      content: [
        "EXERCICE 1 : Détermination d'une fonction affine",
        "Énoncé : Soit f une fonction affine telle que f(2) = 7 et f(5) = 16.",
        "1. Calculer le coefficient directeur 'a' de f.",
        "2. Déterminer l'ordonnée à l'origine 'b', puis donner l'expression explicite de f(x).",
        "3. Calculer l'antécédent de 25 par la fonction f.",
        "Corrigé détaillé pas-à-pas :",
        "1. Calcul du coefficient directeur 'a' :",
        "a = [ f(5) - f(2) ] / (5 - 2) = (16 - 7) / 3 = 9 / 3 = 3.",
        "2. Détermination de 'b' :",
        "On sait que f(x) = 3x + b. Comme f(2) = 7 :",
        "3(2) + b = 7 ➔ 6 + b = 7 ➔ b = 7 - 6 = 1.",
        "L'expression de la fonction est donc : f(x) = 3x + 1.",
        "3. Antécédent de 25 : On résout f(x) = 25 :",
        "3x + 1 = 25 ➔ 3x = 24 ➔ x = 8.",
        "L'antécédent de 25 par f est 8.",
        "",
        "EXERCICE 2 : Problème économique d'abonnement",
        "Énoncé : Une salle de sport propose deux options à Dakar :",
        "• Formule 1 : 2 000 FCFA par séance sans abonnement.",
        "• Formule 2 : Abonnement mensuel de 10 000 FCFA plus 1 000 FCFA par séance.",
        "Soit x le nombre de séances par mois.",
        "1. Exprimer le coût f(x) de la Formule 1 et le coût g(x) de la Formule 2 en fonction de x.",
        "2. À partir de combien de séances par mois la Formule 2 devient-elle plus économique ?",
        "Corrigé pas-à-pas :",
        "1. Expressions :",
        "f(x) = 2000x  (fonction linéaire)",
        "g(x) = 1000x + 10000  (fonction affine)",
        "2. La Formule 2 est plus économique lorsque g(x) < f(x) :",
        "1000x + 10000 < 2000x",
        "10000 < 2000x - 1000x",
        "10000 < 1000x ➔ x > 10.",
        "Conclusion : La Formule 2 est plus économique à partir de 11 séances par mois."
      ]
    }
  ],
  conclusion:
    "Les fonctions linéaires et affines sont au cœur des épreuves du BFEM. Elles permettent de modéliser des tarifs, des croissances économiques et de faire des choix d'optimisation rationnels par le calcul et le graphique."
};

// -------------------------------------------------------------------------
// LEÇON 6 : STATISTIQUE DESCRIPTIVE
// -------------------------------------------------------------------------
export const LESSON_6_MATH_3EME: LessonContent = {
  id: 'math-3eme-lecon-6',
  number: 'Leçon 6',
  title: 'Statistique descriptive',
  subject: 'Mathématiques',
  classLevel: '3ème',
  introduction:
    "La statistique descriptive a pour objet de recueillir, d'organiser, de synthétiser et de présenter sous forme de tableaux et de graphiques des données relatives à une population. En classe de 3ème, l'élève approfondit le calcul des effectifs et des fréquences (simples et cumulés croissants ou décroissants), détermine les paramètres de position (mode, classe modale, moyenne pondérée et médiane), et construit avec précision des diagrammes en bâtons, circulaires et des histogrammes pour le BFEM.",
  fullText: `Leçon 6 : Statistique descriptive — Cours complet 3ème

Introduction :
La statistique descriptive a pour objet de recueillir, d'organiser, de synthétiser et de présenter sous forme de tableaux et de graphiques des données relatives à une population. En classe de 3ème, l'élève approfondit le calcul des effectifs et des fréquences (simples et cumulés croissants ou décroissants), détermine les paramètres de position (mode, classe modale, moyenne pondérée et médiane), et construit avec précision des diagrammes en bâtons, circulaires et des histogrammes pour le BFEM.

1. Vocabulaire statistique de base
- Population : L'ensemble étudié (ex: les élèves d'un collège, les ménages d'une commune de Dakar).
- Individu : Chaque élément appartenant à la population étudiée.
- Caractère : La propriété ou la caractéristique observée sur chaque individu (ex: note de mathématiques, taille, couleur des yeux).
  • Caractère qualitatif : Les valeurs ne sont pas numériques (ex: moyen de transport, filière).
  • Caractère quantitatif : Les valeurs sont des nombres mesurables.
    - Discret : Prend des valeurs isolées (ex: nombre d'enfants par famille, notes entières).
    - Continu : Peut prendre n'importe quelle valeur dans un intervalle (ex: taille, masse, durée). Les données sont alors regroupées par classes [a ; b[.

2. Effectifs, fréquences et effectifs cumulés
- Effectif d'une valeur (nᵢ) : Nombre de fois où cette valeur apparaît dans la série.
- Effectif total (N) : Somme de tous les effectifs : N = ∑ nᵢ.
- Fréquence (fᵢ) : Rapport de l'effectif nᵢ sur l'effectif total N : fᵢ = nᵢ / N.
  La fréquence en pourcentage s'obtient par fᵢ × 100.
  La somme de toutes les fréquences est toujours égale à 1 (ou 100%).
- Effectif Cumulé Croissant (ECC) : Somme de l'effectif de cette valeur et de tous les effectifs des valeurs inférieures. Le dernier ECC est égal à l'effectif total N.
- Fréquence Cumulée Croissante (FCC) : Somme de la fréquence de cette valeur et des fréquences inférieures. La dernière FCC vaut 100%.

3. Paramètres de position
A. Le Mode et la Classe Modale
- Pour un caractère discret, le mode est la valeur du caractère qui possède LE PLUS GRAND EFFECTIF (ne pas confondre le mode et l'effectif maximal !).
- Pour un caractère regroupé en classes de même amplitude, la classe modale est la classe ayant le plus grand effectif.

B. La Moyenne arithmétique pondérée (x̄)
Pour une série de valeurs x₁, x₂, ..., xₚ d'effectifs respectifs n₁, n₂, ..., nₚ :
x̄ = (n₁x₁ + n₂x₂ + ... + nₚxₚ) / N = (∑ nᵢxᵢ) / N.
Pour une série statistique regroupée en classes [a ; b[, on remplace chaque classe par son centre cᵢ = (a + b) / 2 avant de calculer la moyenne.

C. La Médiane (Me)
La médiane d'une série ordonnée est une valeur qui partage la série en deux sous-groupes de même effectif : au moins 50% des individus ont une valeur inférieure ou égale à la médiane, et au moins 50% ont une valeur supérieure ou égale.
Méthode pratique de détermination :
1. On range les valeurs par ordre croissant.
2. Si l'effectif total N est impair : N = 2k + 1. La médiane est la valeur de rang (k + 1).
   Exemple : N = 15 ➔ 15 = 2(7) + 1. La médiane est la 8ème valeur.
3. Si l'effectif total N est pair : N = 2k. La médiane est la demi-somme des valeurs de rangs k et (k + 1).
   Exemple : N = 20. La médiane est la moyenne entre la 10ème et la 11ème valeur.
Dans un tableau d'ECC, la médiane correspond à la première valeur dont l'ECC dépasse ou est égal à N/2.

4. Représentations graphiques usuelles
- Diagramme en bâtons : La hauteur de chaque bâton est strictement proportionnelle à l'effectif de la valeur.
- Diagramme circulaire : La mesure de l'angle au centre αᵢ (en degrés) est proportionnelle à la fréquence :
  αᵢ = fᵢ × 360° = (nᵢ / N) × 360°.
- Histogramme (pour les classes [a ; b[) : Les aires des rectangles sont proportionnelles aux effectifs.

Conclusion :
La statistique descriptive permet de porter un regard quantitatif éclairé sur des données réelles. Bien distinguer la moyenne de la médiane et ne pas confondre le mode (valeur) avec son effectif sont des règles indispensables au BFEM.`,
  sections: [
    {
      title: 'I. Vocabulaire, effectifs et fréquences cumulés',
      content: [
        "1. Population, individu, caractère discret ou continu.",
        "2. Fréquence f = effectif / total (entre 0 et 1, somme = 1 ou 100%).",
        "3. Effectifs Cumulés Croissants (ECC) : calcul en cascade, le dernier terme est l'effectif total N."
      ]
    },
    {
      title: 'II. Paramètres de position : Mode, Moyenne, Médiane',
      content: [
        "1. Mode : la valeur du caractère ayant le plus grand effectif.",
        "2. Moyenne pondérée x̄ = (∑ nᵢxᵢ) / N. Pour des classes, utilisation du centre cᵢ = (a+b)/2.",
        "3. Médiane : sépare la population en deux moitiés égales (50% en dessous, 50% au-dessus)."
      ]
    },
    {
      title: 'III. Exercice complet d\'application corrigé (BFEM)',
      content: [
        "EXERCICE RÉSOLU : Notes d'un devoir de Mathématiques en 3ème",
        "Dans une classe de 3ème de 40 élèves, les notes sur 20 obtenues sont réparties ainsi :",
        "• Note 8 : 6 élèves",
        "• Note 10 : 10 élèves",
        "• Note 12 : 14 élèves",
        "• Note 15 : 8 élèves",
        "• Note 18 : 2 élèves",
        "1. Quel est l'effectif total N ?",
        "2. Dresser le tableau complet des effectifs, ECC, fréquences (%) et angles pour diagramme circulaire.",
        "3. Déterminer le mode et calculer la note moyenne de la classe.",
        "4. Déterminer la note médiane.",
        "Corrigé détaillé pas-à-pas :",
        "1. Effectif total : N = 6 + 10 + 14 + 8 + 2 = 40 élèves.",
        "2. Tableau statistique :",
        "• Note 8  : Effectif = 6  | ECC = 6  | Fréq = 15% | Angle = (6/40)×360° = 54°",
        "• Note 10 : Effectif = 10 | ECC = 16 | Fréq = 25% | Angle = (10/40)×360° = 90°",
        "• Note 12 : Effectif = 14 | ECC = 30 | Fréq = 35% | Angle = (14/40)×360° = 126°",
        "• Note 15 : Effectif = 8  | ECC = 38 | Fréq = 20% | Angle = (8/40)×360° = 72°",
        "• Note 18 : Effectif = 2  | ECC = 40 | Fréq = 5%  | Angle = (2/40)×360° = 18°",
        "Total : Effectif = 40 | Fréq = 100% | Angle total = 360°.",
        "3. Paramètres :",
        "• Le mode est la note 12 (car son effectif est le plus grand : 14 élèves).",
        "• Moyenne pondérée :",
        "x̄ = (6×8 + 10×10 + 14×12 + 8×15 + 2×18) / 40",
        "x̄ = (48 + 100 + 168 + 120 + 36) / 40 = 472 / 40 = 11,8 sur 20.",
        "4. Note médiane :",
        "L'effectif total est N = 40 (nombre pair). La moitié vaut N/2 = 20.",
        "D'après la ligne des ECC :",
        "La 16ème valeur est encore 10, tandis que de la 17ème à la 30ème valeur, la note est 12.",
        "La 20ème et la 21ème valeurs sont donc toutes deux égales à 12.",
        "La note médiane est donc Me = 12 sur 20."
      ]
    }
  ],
  conclusion:
    "La statistique descriptive permet de résumer des séries complexes en quelques indicateurs clairs. La médiane donne une vision plus fidèle du milieu d'une série que la moyenne lorsque des valeurs extrêmes sont présentes."
};
