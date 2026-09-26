import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE SECONDE L — DEUXIÈME PARTIE
// Conforme au référentiel officiel national APAMS (Octobre 2006) — Sénégal
// Cours complets et ultra-détaillés sans résumé — leçons approfondies
// =========================================================================

export const LESSON_5_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-5',
  number: 'CHAPITRE 5',
  title: `Statistique descriptive : paramètres de position (mode, médiane, quartiles, moyenne) et de dispersion (variance, écart-type, étendue)`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 5 : STATISTIQUE DESCRIPTIVE

INTRODUCTION
La statistique descriptive est la science mathématique qui collecte, organise, résume et analyse des ensembles de données numériques ou qualitatives afin d'en dégager des informations synthétiques claires et objectives. Dans nos sociétés actuelles, elle est au cœur de la sociologie, de la démographie (recensements de l'ANSD au Sénégal), de l'économie, de la gestion et du journalisme. Pour résumer fidèlement une série statistique sans en perdre la substance, le statisticien calcule deux familles de paramètres complémentaires : les paramètres de position (qui indiquent autour de quelle valeur centrale les données se regroupent : mode, médiane, quartiles et moyenne) et les paramètres de dispersion (qui mesurent l'étalement ou l'homogénéité des données autour du centre : étendue, intervalle interquartile, variance et écart-type).

I. VOCABULAIRE FONDAMENTAL DE LA STATISTIQUE
1. Notions de base
- La population statistique : l'ensemble global des éléments faisant l'objet de l'étude (ex. l'ensemble des 40 élèves d'une classe de Seconde L du Lycée Lamine Guèye).
- L'individu (ou unité statistique) : chaque élément appartenant à la population (un élève).
- L'échantillon : un sous-ensemble représentatif prélevé au sein de la population lorsque celle-ci est trop vaste pour être interrogée exhaustivement.
- Le caractère statistique : la propriété ou la grandeur observée sur chaque individu (ex. la note obtenue à un devoir de mathématiques, la taille en cm, la couleur des yeux, la mention au BFEM).
2. Caractère qualitatif et caractère quantitatif
- Caractère qualitatif : les modalités ne sont pas des nombres, mais des catégories ou des mots (ex. la langue parlée à la maison, le sexe, la série choisie).
- Caractère quantitatif : les valeurs prises sont des nombres mesurables sur lesquels les opérations arithmétiques ont un sens. On distingue :
  * Le caractère quantitatif discret : ne peut prendre que des valeurs numériques isolées (le nombre d'enfants par famille : 0, 1, 2, 3...) ;
  * Le caractère quantitatif continu : peut prendre n'importe quelle valeur dans un intervalle réel donné (la taille, le poids, la durée d'un trajet), souvent regroupé en classes d'intervalles [a ; b[.
3. Effectifs et fréquences
- L'effectif d'une valeur (noté n_i) : le nombre de fois où cette valeur apparaît dans la population.
- L'effectif total (noté N) : la somme de tous les effectifs particuliers : N = n₁ + n₂ + ... + n_k.
- La fréquence (notée f_i) : la proportion relative de l'effectif n_i par rapport à l'effectif total N :
  f_i = n_i / N
  La fréquence s'exprime par un nombre décimal compris entre 0 et 1, ou en pourcentage en multipliant par 100 :
  f_i (%) = (n_i / N) × 100 %.
Propriété fondamentale : la somme de toutes les fréquences est rigoureusement égale à 1 (ou 100 %).
Exemple d'application :
Dans une classe de 40 élèves, 12 ont obtenu la note de 10/20 au devoir.
Effectif n_i = 12.
Effectif total N = 40.
Fréquence f = 12 / 40 = 0,30 = 30 %.

II. LES PARAMÈTRES DE POSITION CENTRALE
Les paramètres de position permettent de situer le "centre de gravité" ou la valeur typique de la distribution :
1. Le mode (et la classe modale)
Le mode d'une série statistique est la valeur du caractère qui possède l'effectif le plus grand (la valeur la plus fréquente). Si les données sont regroupées en classes d'égale amplitude, on parle de classe modale.
Exemple :
Considérons la série de notes : 4, 5, 5, 6, 7, 7, 7, 8.
La valeur 7 apparaît 3 fois (effectif maximal). Le mode est donc 7.
Une série peut être unimodale (un seul mode) ou bimodale (deux valeurs à égalité d'effectif maximal).
2. La médiane (notée Me)
La médiane est la valeur centrale qui partage la population ordonnée en deux groupes d'effectifs égaux : 50 % des individus ont une valeur inférieure ou égale à la médiane, et 50 % ont une valeur supérieure ou égale.
Protocole de détermination :
On range impérativement toutes les valeurs de la série dans l'ORDRE CROISSANT.
- Cas 1 : L'effectif total N est impair (N = 2p + 1)
  La médiane est la valeur située exactement au rang central (N + 1) / 2 = p + 1.
  Exemple : série ordonnée de N = 5 valeurs : 4, 5, 7, 8, 10.
  Le rang central est (5 + 1) / 2 = 3. La médiane est la 3e valeur : Me = 7.
- Cas 2 : L'effectif total N est pair (N = 2p)
  La médiane est la demi-somme (moyenne arithmétique) des deux valeurs centrales situées aux rangs N/2 et (N/2 + 1).
  Exemple : série ordonnée de N = 6 valeurs : 2, 4, 7, 9, 10, 12.
  Les deux valeurs centrales sont la 3e (7) et la 4e (9).
  Médiane Me = (7 + 9) / 2 = 16 / 2 = 8.
3. Les quartiles (Q₁ et Q₃)
Les quartiles partagent la série ordonnée en quatre quarts égaux d'effectif :
- Le premier quartile (Q₁) : la plus petite valeur de la série ordonnée telle qu'au moins 25 % (un quart) des données lui soient inférieures ou égales.
  Convention de calcul : on calcule N / 4. Si ce nombre n'est pas entier, on prend l'entier immédiatement supérieur (arrondi par excès), et Q₁ est la valeur située à ce rang.
- Le troisième quartile (Q₃) : la plus petite valeur telle qu'au moins 75 % (trois quarts) des données lui soient inférieures ou égales (rang correspondant à 3N / 4 arrondi par excès).
- Le deuxième quartile (Q₂) correspond exactement à la médiane (Me).
Exemple : pour N = 20 observations ordonnées, N/4 = 5 (Q₁ est au rang 5) et 3N/4 = 15 (Q₃ est au rang 15).
4. La moyenne arithmétique (notée x̄)
La moyenne arithmétique est le quotient de la somme de toutes les valeurs observées par l'effectif total N :
- Pour une série brute de valeurs individuelles x₁, x₂, ..., x_n :
  x̄ = (x₁ + x₂ + ... + x_n) / n
- Pour une série pondérée par des effectifs n₁, n₂, ..., n_k :
  x̄ = (n₁×x₁ + n₂×x₂ + ... + n_k×x_k) / N
Exemple de calcul :
Notes d'un élève : 8, 10, 10, 12, 15 (effectif total n = 5).
x̄ = (8 + 10 + 10 + 12 + 15) / 5 = 55 / 5 = 11,0.

III. LES PARAMÈTRES DE DISPERSION
Donner la moyenne ou la médiane d'une série ne suffit pas pour décrire la réalité : deux classes peuvent avoir exactement la même moyenne de 10/20, mais l'une est très homogène (toutes les notes sont entre 9 et 11) tandis que l'autre est très hétérogène (notes entre 0 et 20). Les paramètres de dispersion mesurent cet étalement :
1. L'étendue (notée E)
L'étendue est la différence entre la valeur maximale et la valeur minimale observées de la série :
Étendue = Valeur maximale - Valeur minimale
Exemple : pour la série 3, 4, 5, 5, 7, 8, 10, l'étendue est E = 10 - 3 = 7.
L'étendue donne une première idée de la dispersion, mais elle est très sensible aux valeurs extrêmes aberrantes.
2. L'intervalle interquartile et l'écart interquartile
- L'intervalle interquartile est l'intervalle fermé [Q₁ ; Q₃]. Il rassemble les 50 % centraux de la population étudiée.
- L'écart interquartile (ou amplitude interquartile) est la différence :
  I = Q₃ - Q₁
Ce paramètre a l'immense avantage d'éliminer les 25 % des valeurs les plus basses et les 25 % des valeurs les plus hautes : il est donc insensible aux valeurs extrêmes exceptionnelles. Une petite amplitude interquartile indique que la moitié centrale des individus est très concentrée.
3. La variance (notée V)
La variance est la moyenne arithmétique des carrés des écarts de chaque valeur par rapport à la moyenne générale x̄ :
V = [ (x₁ - x̄)² + (x₂ - x̄)² + ... + (x_n - x̄)² ] / n
Formule avec effectifs pondérés :
V = [ n₁(x₁ - x̄)² + n₂(x₂ - x̄)² + ... + n_k(x_k - x̄)² ] / N
Puisque chaque écart est élevé au carré, la variance est TOUJOURS un nombre réel positif ou nul (V ≥ 0).
4. L'écart-type (noté σ, lettre grecque sigma)
L'inconvénient de la variance est que son unité est le carré de l'unité de la variable (par exemple des "notes au carré" ou des "francs CFA au carré"). Pour revenir à l'unité naturelle de la grandeur observée, on prend la racine carrée de la variance :
σ = √V
L'écart-type est le paramètre de dispersion de référence absolue en mathématiques. Plus l'écart-type est petit, plus les valeurs sont resserrées autour de la moyenne (population homogène) ; plus il est grand, plus les données sont dispersées (population hétérogène).
Exemple complet de calcul de variance et d'écart-type :
Soit la petite série de notes : 2, 4, 6 (n = 3).
- Moyenne : x̄ = (2 + 4 + 6) / 3 = 12 / 3 = 4.
- Écarts à la moyenne : (2 - 4) = -2 ; (4 - 4) = 0 ; (6 - 4) = +2.
- Carrés des écarts : (-2)² = 4 ; 0² = 0 ; 2² = 4.
- Variance V = (4 + 0 + 4) / 3 = 8 / 3 ≈ 2,67.
- Écart-type σ = √(8/3) ≈ 1,63.

CONCLUSION
L'analyse statistique moderne repose toujours sur un couple indissociable associant un paramètre de position et un paramètre de dispersion : soit le couple (Moyenne, Écart-type) pour les distributions symétriques, soit le couple (Médiane, Écart interquartile) pour les distributions dissymétriques. Cette double lecture permet d'interpréter avec rigueur scientifique n'importe quel ensemble de données sociologiques ou économiques.`,
  introduction: `La statistique descriptive est la science mathématique qui collecte, organise, résume et analyse des ensembles de données numériques ou qualitatives afin d'en dégager des informations synthétiques claires et objectives. Dans nos sociétés actuelles, elle est au cœur de la sociologie, de la démographie (recensements de l'ANSD au Sénégal), de l'économie, de la gestion et du journalisme. Pour résumer fidèlement une série statistique sans en perdre la substance, le statisticien calcule deux familles de paramètres complémentaires : les paramètres de position (qui indiquent autour de quelle valeur centrale les données se regroupent : mode, médiane, quartiles et moyenne) et les paramètres de dispersion (qui mesurent l'étalement ou l'homogénéité des données autour du centre : étendue, intervalle interquartile, variance et écart-type).`,
  sections: [
    {
      title: "I. Vocabulaire statistique fondamental",
      content: [
        "Population, individu, échantillon, caractère quantitatif (discret ou continu) ou qualitatif.",
        "Effectif n_i, effectif total N, fréquence f_i = n_i / N (exprimée entre 0 et 1 ou en %). La somme des fréquences vaut 1."
      ]
    },
    {
      title: "II. Paramètres de position centrale",
      content: [
        "Mode : valeur d'effectif maximal (ex. dans 4, 5, 5, 6, 7, 7, 7, 8 le mode est 7).",
        "Médiane : partage la série ordonnée en deux moitiés égales. N impair => rang (N+1)/2 ; N pair => moyenne des rangs N/2 et N/2+1.",
        "Quartiles : Q₁ (25 % au moins) et Q₃ (75 % au moins).",
        "Moyenne arithmétique x̄ : somme des valeurs divisée par N. Pondérée : x̄ = ∑(n_i × x_i) / N."
      ]
    },
    {
      title: "III. Paramètres de dispersion",
      content: [
        "Étendue = Max - Min (très sensible aux extrêmes).",
        "Intervalle interquartile [Q₁ ; Q₃] et écart interquartile Q₃ - Q₁ (englobe les 50 % centraux sans influence des extrêmes).",
        "Variance V = ∑ (x_i - x̄)² / N (toujours positive ou nulle).",
        "Écart-type σ = √V : mesure l'éloignement moyen par rapport à la moyenne, dans la même unité que la variable. Ex. pour 2, 4, 6 => x̄ = 4, V = 8/3, σ ≈ 1,63."
      ]
    },
    {
      title: "IV. Interprétation statistique",
      content: [
        "Deux séries peuvent avoir la même moyenne tout en ayant des dispersions très dissemblables (l'une groupée, l'autre très étalée). D'où la nécessité de toujours associer position et dispersion."
      ]
    }
  ],
  conclusion: `L'analyse statistique moderne repose toujours sur un couple indissociable associant un paramètre de position et un paramètre de dispersion : soit le couple (Moyenne, Écart-type) pour les distributions symétriques, soit le couple (Médiane, Écart interquartile) pour les distributions dissymétriques. Cette double lecture permet d'interpréter avec rigueur scientifique n'importe quel ensemble de données sociologiques ou économiques.`
};

export const LESSON_6_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-6',
  number: 'CHAPITRE 6',
  title: `Systèmes d'équations et d'inéquations du premier degré à deux inconnues : méthodes algébriques, méthode graphique et problèmes`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 6 : SYSTÈMES D'ÉQUATIONS ET D'INÉQUATIONS DU PREMIER DEGRÉ À DEUX INCONNUES

INTRODUCTION
De nombreux problèmes de la vie quotidienne, de l'économie domestique et de la gestion commerciale font intervenir simultanément deux grandeurs inconnues liées par plusieurs conditions distinctes (par exemple déterminer le prix unitaire d'un stylo et d'un cahier à partir de deux achats groupés distincts, ou trouver les dimensions d'un champ rectangulaire connaissant son périmètre et sa superficie). Mathématiquement, ces situations se traduisent par un système de deux équations ou inéquations du premier degré à deux inconnues x et y. L'élève de Seconde L doit maîtriser avec assurance les deux grandes méthodes algébriques de résolution (la méthode par substitution et la méthode par addition/combinaison linéaire), savoir interpréter géométriquement la solution comme le point d'intersection de deux droites sécantes, modéliser un problème concret et déterminer la zone de validité d'un système d'inéquations par la méthode des demi-plans et du point-test.

I. SYSTÈME DE DEUX ÉQUATIONS DU PREMIER DEGRÉ À DEUX INCONNUES
1. Définition générale
Un système de deux équations linéaires du premier degré à deux inconnues x et y est un ensemble de deux égalités de la forme :
{ ax + by = e
{ cx + dy = f
où a, b, c, d, e, f sont des nombres réels fixés (avec (a, b) ≠ (0, 0) et (c, d) ≠ (0, 0)).
Une solution de ce système est un couple ordonné de nombres réels (x₀, y₀) qui vérifie simultanément et exactement les deux équations.
Vérification d'une solution : pour vérifier si un couple (x, y) est solution, on remplace x et y par leurs valeurs dans chaque équation et on contrôle que les deux égalités numériques obtenues sont vraies.

II. LES MÉTHODES ALGÉBRIQUES DE RÉSOLUTION
1. La méthode par substitution
- Principe : on isole l'une des inconnues (x ou y) dans l'équation où son coefficient est le plus simple (de préférence 1 ou -1), puis on remplace (substitue) son expression algébrique dans l'autre équation. On obtient alors une équation du premier degré à une seule inconnue, que l'on résout facilement.
Exemple complet résolu pas à pas :
Résoudre dans R² le système (S₁) :
{ x + y = 7      (Équation 1)
{ 2x - y = 5     (Équation 2)
- Étape 1 : Dans l'équation (1), isolons y en fonction de x :
  y = 7 - x
- Étape 2 : Remplaçons y par (7 - x) dans l'équation (2) :
  2x - (7 - x) = 5
  2x - 7 + x = 5
  3x - 7 = 5
  3x = 5 + 7 = 12
  x = 12 / 3 = 4.
- Étape 3 : Remplaçons la valeur trouvée x = 4 dans l'expression de y :
  y = 7 - 4 = 3.
- Conclusion : L'unique couple solution est (4, 3) : S = {(4, 3)}.
2. La méthode par addition (ou combinaison linéaire / élimination)
- Principe : on multiplie une des équations (ou les deux) par des nombres non nuls choisis de telle sorte que les coefficients de l'une des inconnues deviennent opposés. En additionnant membre à membre les deux équations obtenues, cette inconnue s'élimine automatiquement !
Exemple complet résolu pas à pas :
Résoudre dans R² le système (S₂) :
{ 2x + 3y = 13    (Équation 1)
{ 4x - 3y = 5     (Équation 2)
- Remarque immédiate : les coefficients de y sont déjà opposés (+3 et -3).
- Étape 1 : Additionnons membre à membre les deux équations :
  (2x + 4x) + (3y - 3y) = 13 + 5
  6x + 0 = 18
  x = 18 / 6 = 3.
- Étape 2 : Remplaçons x = 3 dans l'équation (1) pour trouver y :
  2(3) + 3y = 13
  6 + 3y = 13
  3y = 13 - 6 = 7
  y = 7/3.
- Conclusion : L'unique solution est le couple (3, 7/3) : S = {(3, 7/3)}.

III. INTERPRÉTATION GÉOMÉTRIQUE : LA MÉTHODE GRAPHIQUE
Chaque équation linéaire ax + by = e représente dans le repère cartésien une droite du plan :
- Si b ≠ 0, l'équation s'écrit sous forme réduite : y = (-a/b)x + (e/b).
La résolution graphique du système consiste à tracer les deux droites correspondantes (D₁) et (D₂) :
- Cas 1 (les droites sont sécantes) : les coefficients directeurs sont différents. Les droites se coupent en un unique point d'intersection M(x₀, y₀). Le système admet une solution unique.
  Exemple : les droites (D₁) : y = -x + 7 et (D₂) : y = 2x - 5 se coupent au point de coordonnées (4, 3).
- Cas 2 (les droites sont strictement parallèles) : les deux droites ont la même pente mais des ordonnées à l'origine différentes. Elles ne se rencontrent jamais. Le système n'admet aucune solution : S = ∅.
- Cas 3 (les droites sont confondues) : les deux équations sont proportionnelles. Les droites sont superposées. Le système admet une infinité de solutions.

IV. TRADUCTION ET RÉSOLUTION D'UN PROBLÈME CONCRET
La résolution d'un problème concret suit toujours quatre étapes méthodologiques rigoureuses :
- Étape 1 : Choix et identification claire des inconnues ;
- Étape 2 : Traduction de l'énoncé en un système de deux équations ;
- Étape 3 : Résolution algébrique du système ;
- Étape 4 : Conclusion rédigée avec les unités et vérification dans le contexte réel.
Problème résolu :
Au marché Sandaga de Dakar, deux élèves achètent des fournitures scolaires :
- Moussa achète 2 stylos et 3 cahiers pour un montant total de 2 100 F CFA.
- Fatou achète 3 stylos et 2 cahiers du même modèle pour un montant de 1 900 F CFA.
Déterminer le prix unitaire d'un stylo et d'un cahier.
- Étape 1 : Choix des inconnues
  Soit x le prix d'un stylo (en F CFA) et y le prix d'un cahier (en F CFA).
- Étape 2 : Mise en équation
  Achat de Moussa : 2x + 3y = 2 100
  Achat de Fatou : 3x + 2y = 1 900
- Étape 3 : Résolution par combinaison
  Multiplions l'équation (1) par 3 et l'équation (2) par 2 pour égaliser les x :
  (1) × 3 => 6x + 9y = 6 300
  (2) × 2 => 6x + 4y = 3 800
  Soustrayons membre à membre :
  (6x - 6x) + (9y - 4y) = 6 300 - 3 800
  5y = 2 500  <=>  y = 2 500 / 5 = 500 F CFA.
  Remplaçons y = 500 dans 3x + 2y = 1 900 :
  3x + 2(500) = 1 900
  3x + 1 000 = 1 900  <=>  3x = 900  <=>  x = 300 F CFA.
- Étape 4 : Conclusion
  Un stylo coûte 300 F CFA et un cahier coûte 500 F CFA.
  Vérification : 2(300) + 3(500) = 600 + 1 500 = 2 100 F CFA (exact).

V. INÉQUATIONS ET SYSTÈMES D'INÉQUATIONS DU PREMIER DEGRÉ À DEUX INCONNUES
1. Inéquation et demi-plan frontière
Une inéquation de la forme ax + by ≤ c définit géométriquement un demi-plan délimité par la droite frontière d'équation ax + by = c.
Méthode de résolution graphique par point-test :
- On trace la droite frontière (en trait plein si l'inégalité est large ≤ ou ≥, en trait discontinu si l'inégalité est stricte < ou >).
- On choisit un point d'essai n'appartenant pas à la droite frontière, très souvent l'origine O(0, 0).
- On teste les coordonnées de O(0, 0) dans l'inéquation :
  * Si l'inégalité obtenue est VRAIE, le demi-plan contenant l'origine O est la région solution.
  * Si l'inégalité est FAUSSE, la région solution est l'autre demi-plan ne contenant pas O. On hachure ou colorie la zone convenable.
Exemple :
Résoudre graphiquement x + y ≤ 5.
- La droite frontière est (D) : x + y = 5, soit y = -x + 5.
- Testons O(0, 0) : 0 + 0 = 0 ≤ 5. C'est vrai !
- La région solution est donc le demi-plan contenant l'origine O, y compris la droite frontière.
2. Systèmes d'inéquations à deux inconnues
La région solution d'un système de plusieurs inéquations est l'INTERSECTION des demi-plans solutions de chaque inéquation. Cette région fermée ou ouverte forme souvent un polygone convexe dans le plan (utilisé en programmation linéaire économique pour maximiser un profit).

CONCLUSION
La résolution des systèmes linéaires à deux inconnues par substitution, combinaison ou lecture graphique forme un outil d'une puissance redoutable pour modéliser les choix économiques et allouer de manière optimale les ressources dans des situations concrètes.`,
  introduction: `De nombreux problèmes de la vie quotidienne, de l'économie domestique et de la gestion commerciale font intervenir simultanément deux grandeurs inconnues liées par plusieurs conditions distinctes (par exemple déterminer le prix unitaire d'un stylo et d'un cahier à partir de deux achats groupés distincts, ou trouver les dimensions d'un champ rectangulaire connaissant son périmètre et sa superficie). Mathématiquement, ces situations se traduisent par un système de deux équations ou inéquations du premier degré à deux inconnues x et y. L'élève de Seconde L doit maîtriser avec assurance les deux grandes méthodes algébriques de résolution (la méthode par substitution et la méthode par addition/combinaison linéaire), savoir interpréter géométriquement la solution comme le point d'intersection de deux droites sécantes, modéliser un problème concret et déterminer la zone de validité d'un système d'inéquations par la méthode des demi-plans et du point-test.`,
  sections: [
    {
      title: "I. Système de deux équations à deux inconnues",
      content: [
        "Forme générale : { ax + by = e ; cx + dy = f }.",
        "Une solution est un couple ordonné (x, y) vérifiant les deux égalités."
      ]
    },
    {
      title: "II. Méthodes algébriques de résolution",
      content: [
        "Substitution : isoler une inconnue dans une équation et l'injecter dans l'autre. Ex. x+y=7 et 2x-y=5 => y = 7-x => 2x-(7-x)=5 => 3x=12 => x=4, y=3 => S = {(4, 3)}.",
        "Addition (élimination) : multiplier les lignes pour obtenir des coefficients opposés et sommer. Ex. 2x+3y=13 et 4x-3y=5 => 6x=18 => x=3, y=7/3."
      ]
    },
    {
      title: "III. Interprétation graphique",
      content: [
        "Chaque équation représente une droite. La solution unique est le point d'intersection des deux droites sécantes.",
        "Si droites strictement parallèles : pas de solution (S = ∅). Si confondues : infinité de solutions."
      ]
    },
    {
      title: "IV. Traduction de problèmes concrets",
      content: [
        "Démarche en 4 étapes : choix des inconnues, mise en équation, résolution algébrique, conclusion contextualisée avec vérification.",
        "Exemple fournitures : 2x+3y=2100 et 3x+2y=1900 donne x = 300 F CFA (stylo) et y = 500 F CFA (cahier)."
      ]
    },
    {
      title: "V. Inéquations à deux inconnues et demi-plans",
      content: [
        "Inéquation ax+by ≤ c définit un demi-plan bordé par la droite ax+by=c.",
        "Méthode du point-test : tester O(0,0) (ex. pour x+y ≤ 5, 0 ≤ 5 est vrai, donc le demi-plan contenant O est solution).",
        "Système d'inéquations : intersection géométrique des demi-plans (zone polygonale)."
      ]
    }
  ],
  conclusion: `La résolution des systèmes linéaires à deux inconnues par substitution, combinaison ou lecture graphique forme un outil d'une puissance redoutable pour modéliser les choix économiques et allouer de manière optimale les ressources dans des situations concrètes.`
};

export const LESSON_7_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-7',
  number: 'CHAPITRE 7',
  title: `Équations et inéquations du second degré : forme canonique, discriminant Delta, factorisation et signe du trinôme`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 7 : ÉQUATIONS ET INÉQUATIONS DU SECOND DEGRÉ DANS R

INTRODUCTION
Le second degré constitue une étape reine de l'apprentissage de l'algèbre au lycée. Alors que les équations du premier degré ne décrivent que des relations strictement linéaires, le second degré permet de modéliser des trajectoires paraboliques, des optimisations de surfaces et des fonctions de coûts et de recettes économiques non linéaires. Un trinôme du second degré est une expression polynomiale où l'inconnue apparaît élevée à la puissance 2. Cette leçon guide l'élève de Seconde L à travers la théorie du second degré : la mise sous forme canonique révélant le sommet de la parabole, le calcul du discriminant Δ (Delta) déterminant le nombre de racines réelles, les relations fondamentales de somme et produit des racines, la factorisation complète du trinôme et l'étude méthodique de son signe pour résoudre les inéquations du second degré.
(Remarque conforme aux directives APAMS : les équations à paramètres sont hors programme en Seconde L).

I. VOCABULAIRE ET FORME CANONIQUE D'UN TRINÔME DU SECOND DEGRÉ
1. Définition du trinôme
On appelle trinôme du second degré toute expression algébrique d'inconnue x pouvant s'écrire sous la forme développée et réduite :
P(x) = ax² + bx + c
où a, b, c sont des nombres réels constants fixés, avec la condition impérative que a ≠ 0 (si a était nul, l'expression deviendrait du premier degré).
- a est le coefficient du terme de second degré en x² ;
- b est le coefficient du terme de premier degré en x ;
- c est le terme constant (ou terme indépendant).
2. La forme canonique du trinôme
La forme canonique est une écriture algébrique où la variable x n'apparaît qu'une seule et unique fois au sein d'un carré parfait.
Formule canonique théorique générale :
P(x) = a [ (x + b/(2a))² - (b² - 4ac) / (4a²) ]
On peut également poser α = -b / (2a) et β = P(α) pour écrire :
P(x) = a(x - α)² + β
Dans le plan, le point S(α, β) représente le sommet de la parabole associée au trinôme.
3. Démonstration et méthode pratique de mise sous forme canonique
Exemple 1 : Mettre sous forme canonique P(x) = x² - 6x + 5
- On remarque que les deux premiers termes x² - 6x sont le début du développement de (x - 3)² car :
  (x - 3)² = x² - 6x + 9, d'où x² - 6x = (x - 3)² - 9.
- On remplace dans P(x) :
  P(x) = (x - 3)² - 9 + 5 = (x - 3)² - 4.
  La forme canonique est : P(x) = (x - 3)² - 4.
Exemple 2 : Mettre sous forme canonique Q(x) = x² + 4x - 5
- x² + 4x = (x + 2)² - 4.
- Q(x) = (x + 2)² - 4 - 5 = (x + 2)² - 9.

II. LE DISCRIMINANT DELTA ET LA RÉSOLUTION DE L'ÉQUATION ax² + bx + c = 0
1. Définition du discriminant Δ
Le nombre réel discriminant, noté par la lettre grecque majuscule Δ (Delta), est défini par la relation :
Δ = b² - 4ac
Ce nombre magique discrimine (sépare) les différents cas possibles concernant l'existence et le nombre de racines réelles de l'équation ax² + bx + c = 0.
2. Théorème fondamental de résolution
Selon le signe de Δ, trois situations exclusives se présentent :
- Cas 1 : Si Δ > 0 (discriminant strictement positif)
  L'équation admet DEUX RACINES RÉELLES DISTINCTES x₁ et x₂ données par les formules :
  x₁ = (-b - √Δ) / (2a)   et   x₂ = (-b + √Δ) / (2a)
  L'ensemble des solutions est : S = {x₁ ; x₂}.
- Cas 2 : Si Δ = 0 (discriminant nul)
  L'équation admet UNE RACINE RÉELLE DOUBLE x₀ donnée par :
  x₀ = -b / (2a)
  L'ensemble des solutions est le singleton : S = {-b / (2a)}.
- Cas 3 : Si Δ < 0 (discriminant strictement négatif)
  Puisque la racine carrée d'un nombre négatif n'existe pas dans R, l'équation n'admet AUCUNE RACINE RÉELLE.
  L'ensemble des solutions dans R est l'ensemble vide : S = ∅.
3. Exemples d'application résolus pas à pas
Exemple 1 (Δ > 0) : Résoudre dans R l'équation 2x² - 5x - 3 = 0.
- Identification des coefficients : a = 2, b = -5, c = -3.
- Calcul de Δ :
  Δ = b² - 4ac = (-5)² - 4(2)(-3) = 25 - (-24) = 25 + 24 = 49.
  Puisque 49 > 0, il y a deux racines distinctes. √Δ = √49 = 7.
- Calcul des racines :
  x₁ = [-(-5) - 7] / [2(2)] = (5 - 7) / 4 = -2 / 4 = -1/2.
  x₂ = [-(-5) + 7] / [2(2)] = (5 + 7) / 4 = 12 / 4 = 3.
  Ensemble des solutions : S = {-1/2 ; 3}.
Exemple 2 (Δ = 0) : Résoudre x² - 4x + 4 = 0.
- a = 1, b = -4, c = 4.
- Δ = (-4)² - 4(1)(4) = 16 - 16 = 0.
- Racine double : x₀ = -(-4) / [2(1)] = 4 / 2 = 2.
  Solution : S = {2} (on remarque en effet que x² - 4x + 4 = (x - 2)² = 0).
Exemple 3 (résolution directe par identités remarquables) :
Certaines équations incomplètes se résolvent sans calculer Δ :
- x² - 9 = 0 <=> (x - 3)(x + 3) = 0 <=> x = 3 ou x = -3. S = {-3 ; 3}.
- 3x² - 6x = 0 <=> 3x(x - 2) = 0 <=> x = 0 ou x = 2. S = {0 ; 2}.

III. SOMME ET PRODUIT DES RACINES D'UN TRINÔME
Lorsque le trinôme ax² + bx + c admet deux racines réelles x₁ et x₂ (distinctes ou confondues), leur somme S et leur produit P vérifient les remarquables relations :
Somme S = x₁ + x₂ = -b / a
Produit P = x₁ × x₂ = c / a
Applications très utiles :
- Trouver une racine évidente (0, 1 ou -1) et en déduire instantanément la seconde sans calculer Δ :
  * Si a + b + c = 0, alors x₁ = 1 est racine évidente, et l'autre racine est x₂ = c/a.
  * Si a - b + c = 0, alors x₁ = -1 est racine évidente, et l'autre est x₂ = -c/a.
- Former une équation du second degré connaissant la somme S et le produit P de deux nombres :
  Ces deux nombres sont les racines de l'équation : X² - S·X + P = 0.

IV. FACTORISATION D'UN TRINÔME DU SECOND DEGRÉ
Le discriminant Δ régit également la factorisation du trinôme :
- Si Δ > 0 : le trinôme se factorise sous la forme d'un produit de deux facteurs du premier degré :
  P(x) = a(x - x₁)(x - x₂)
  Exemple : pour 2x² - 5x - 3 (racines -1/2 et 3) :
  P(x) = 2(x - (-1/2))(x - 3) = 2(x + 1/2)(x - 3) = (2x + 1)(x - 3).
- Si Δ = 0 : le trinôme est le carré d'un binôme :
  P(x) = a(x - x₀)²
- Si Δ < 0 : le trinôme ne peut PAS être factorisé dans R en produit de facteurs du premier degré.

V. SIGNE D'UN TRINÔME DU SECOND DEGRÉ ET RÉSOLUTION D'INÉQUATIONS
1. Règle générale du signe de ax² + bx + c
- Cas 1 (Δ > 0, deux racines x₁ < x₂) :
  Règle d'or : Le trinôme est du SIGNE DE 'a' à l'EXTÉRIEUR de l'intervalle des racines [x₁ ; x₂], et du SIGNE CONTRAIRE DE 'a' à l'INTÉRIEUR des racines (entre x₁ et x₂).
  Tableau de signes :
  x        | -∞        x₁        x₂        +∞
  ax²+bx+c |   signe a   0  -signe a 0   signe a
- Cas 2 (Δ = 0, racine double x₀) :
  Le trinôme est toujours du SIGNE DE 'a' pour tout x ≠ x₀, et s'annule en x₀.
- Cas 3 (Δ < 0, aucune racine) :
  Le trinôme est STRICTEMENT du SIGNE DE 'a' pour tout réel x de R (il ne change jamais de signe).
2. Résolution d'inéquations du second degré
Exemple 1 : Résoudre dans R l'inéquation x² - 5x + 6 ≥ 0.
- Trinôme : a = 1 (positif), b = -5, c = 6.
- Δ = 25 - 24 = 1 > 0. Racines : x₁ = (5 - 1)/2 = 2 et x₂ = (5 + 1)/2 = 3.
- Règle du signe : a = 1 > 0, donc le trinôme est positif ou nul à l'extérieur des racines : x ≤ 2 ou x ≥ 3.
- Ensemble solution : S = ]-∞ ; 2] ∪ [3 ; +∞[.
Exemple 2 : Résoudre dans R l'inéquation -x² + 4x - 3 > 0.
- a = -1 (négatif), b = 4, c = -3.
- Δ = 16 - 12 = 4 > 0. Racines : x₁ = (-4 - 2)/(-2) = 3 et x₂ = (-4 + 2)/(-2) = 1.
- Règle du signe : le trinôme est strictement positif entre les racines (signe opposé à a = -1) : 1 < x < 3.
- Ensemble solution : S = ]1 ; 3[.

CONCLUSION
L'étude du second degré couronne le calcul algébrique au lycée. Grâce au discriminant Δ, à la forme canonique et à la règle d'or des signes, l'élève de Seconde L possède toutes les clés pour factoriser, résoudre et interpréter graphiquement les paraboles.`,
  introduction: `Le second degré constitue une étape reine de l'apprentissage de l'algèbre au lycée. Alors que les équations du premier degré ne décrivent que des relations strictement linéaires, le second degré permet de modéliser des trajectoires paraboliques, des optimisations de surfaces et des fonctions de coûts et de recettes économiques non linéaires. Un trinôme du second degré est une expression polynomiale où l'inconnue apparaît élevée à la puissance 2. Cette leçon guide l'élève de Seconde L à travers la théorie du second degré : la mise sous forme canonique révélant le sommet de la parabole, le calcul du discriminant Δ (Delta) déterminant le nombre de racines réelles, les relations fondamentales de somme et produit des racines, la factorisation complète du trinôme et l'étude méthodique de son signe pour résoudre les inéquations du second degré. (Remarque conforme aux directives APAMS : les équations à paramètres sont hors programme en Seconde L).`,
  sections: [
    {
      title: "I. Trinôme et forme canonique",
      content: [
        "P(x) = ax² + bx + c avec a ≠ 0.",
        "Forme canonique : P(x) = a[(x + b/(2a))² - (b²-4ac)/(4a²)] = a(x - α)² + β, avec sommet S(α, β) où α = -b/(2a).",
        "Exemples : x² - 6x + 5 = (x - 3)² - 4 ; x² + 4x - 5 = (x + 2)² - 9."
      ]
    },
    {
      title: "II. Discriminant Delta et résolution de ax² + bx + c = 0",
      content: [
        "Discriminant : Δ = b² - 4ac.",
        "Si Δ > 0 : deux racines réelles distinctes x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a). Ex. 2x² - 5x - 3 = 0 => Δ = 49 => x₁ = -1/2, x₂ = 3.",
        "Si Δ = 0 : une racine double x₀ = -b/(2a). Ex. x² - 4x + 4 = 0 => x₀ = 2.",
        "Si Δ < 0 : aucune racine réelle dans R (S = ∅)."
      ]
    },
    {
      title: "III. Somme, produit et factorisation",
      content: [
        "Somme S = x₁ + x₂ = -b/a ; Produit P = x₁ × x₂ = c/a.",
        "Racines évidentes : si a+b+c = 0, racine 1 et c/a ; si a-b+c = 0, racine -1 et -c/a.",
        "Factorisation : si Δ > 0, P(x) = a(x - x₁)(x - x₂). Ex. 2x² - 5x - 3 = (2x + 1)(x - 3). Si Δ = 0, a(x - x₀)²."
      ]
    },
    {
      title: "IV. Signe du trinôme et inéquations",
      content: [
        "Règle d'or : signe de 'a' à l'extérieur des racines, signe contraire de 'a' entre les racines.",
        "Exemples : x² - 5x + 6 ≥ 0 (a > 0) => à l'extérieur de [2; 3] => S = ]-∞ ; 2] ∪ [3 ; +∞[.",
        "-x² + 4x - 3 > 0 (a < 0) => signe opposé (positif) entre les racines 1 et 3 => S = ]1 ; 3[."
      ]
    }
  ],
  conclusion: `L'étude du second degré couronne le calcul algébrique au lycée. Grâce au discriminant Δ, à la forme canonique et à la règle d'or des signes, l'élève de Seconde L possède toutes les clés pour factoriser, résoudre et interpréter graphiquement les paraboles.`
};

export const LESSON_8_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-8',
  number: 'CHAPITRE 8',
  title: `Tracé de courbes : fonctions de référence (carré, cube, inverse, racine carrée), transformations et comparaison`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
HORAIRE HEBDOMADAIRE : 3 HEURES

CHAPITRE 8 : TRACÉ DE COURBES ET FONCTIONS DE RÉFÉRENCE

INTRODUCTION
L'analyse mathématique s'appuie sur un catalogue de fonctions usuelles fondamentales, appelées fonctions de référence, dont l'allure graphique et les propriétés algébriques doivent être parfaitement connues et mémorisées par l'élève de Seconde L. Ces fonctions élémentaires (la fonction carré f(x) = x², la fonction cube f(x) = x³, la fonction inverse f(x) = 1/x et la fonction racine carrée f(x) = √x) constituent les briques de base à partir desquelles toutes les fonctions plus élaborées sont construites. Cette leçon détaille l'étude des domaines de définition, la parité et les symétries remarquables, les tableaux de valeurs types, les transformations graphiques induites par un coefficient multiplicateur (ax² et ax³), ainsi que le protocole rigoureux de tracé point par point à la main et l'utilisation de la calculatrice scientifique.

I. LA FONCTION CARRÉ : f(x) = x²
1. Caractéristiques analytiques
- Domaine de définition : D_f = R = ]-∞ ; +∞[ (tout réel possède un carré).
- Parité : Pour tout réel x, f(-x) = (-x)² = x² = f(x). La fonction carré est PAIRE.
- Propriété géométrique de parité : la courbe représentative d'une fonction paire est symétrique par rapport à l'axe vertical des ordonnées (Oy). Deux points d'abscisses opposées x et -x ont la même ordonnée y.
2. Tableau de valeurs type et tracé de la parabole
Table type de points remarquables :
x    | -3 | -2 | -1 | 0 | 1 | 2 | 3
--------------------------------------
f(x) |  9 |  4 |  1 | 0 | 1 | 4 | 9
Allure graphique : La courbe est une parabole de sommet O(0, 0), orientée vers le haut. La fonction est strictement décroissante sur ]-∞ ; 0] et strictement croissante sur [0 ; +∞[. Son minimum absolu est 0 atteint en x = 0.

II. LA FONCTION CUBE : f(x) = x³
1. Caractéristiques analytiques
- Domaine de définition : D_f = R = ]-∞ ; +∞[.
- Parité : Pour tout réel x, f(-x) = (-x)³ = -x³ = -f(x). La fonction cube est IMPAIRE.
- Propriété géométrique d'imparité : la courbe représentative d'une fonction impaire est symétrique par rapport à l'origine O(0, 0) du repère (symétrie centrale).
2. Tableau de valeurs type
x    | -2 | -1 | 0 | 1 | 2
-------------------------
f(x) | -8 | -1 | 0 | 1 | 8
Allure graphique : La courbe traverse l'origine O où elle admet une tangente horizontale d'inflexion. La fonction cube est strictement croissante sur tout R.

III. LA FONCTION INVERSE : f(x) = 1/x
1. Caractéristiques analytiques
- Domaine de définition : la division par zéro étant impossible, D_f = R* = R \\ {0} = ]-∞ ; 0[ ∪ ]0 ; +∞[.
- Parité : f(-x) = 1/(-x) = -1/x = -f(x). La fonction inverse est IMPAIRE (symétrie centrale par rapport à l'origine O).
2. Tableau de valeurs et asymptotes
x    | -4    | -2   | -1 | -1/2 | 1/2 | 1 | 2   | 4
-------------------------------------------------------
f(x) | -0,25 | -0,5 | -1 | -2   |  2  | 1 | 0,5 | 0,25
Allure graphique : La courbe est une hyperbole composée de deux branches disjointes situées dans le premier et le troisième quadrant.
Notion d'asymptote :
- Lorsque x devient très grand (vers +∞ ou -∞), f(x) se rapproche de 0 sans jamais l'atteindre : l'axe des abscisses (d'équation y = 0) est une asymptote horizontale.
- Lorsque x se rapproche de 0, f(x) tend vers l'infini : l'axe des ordonnées (d'équation x = 0) est une asymptote verticale. La courbe ne touche jamais les axes !

IV. LA FONCTION RACINE CARRÉE : f(x) = √x
1. Caractéristiques analytiques
- Domaine de définition : la racine carrée n'étant définie que pour des nombres positifs ou nuls, D_f = R+ = [0 ; +∞[.
- Il n'y a pas de parité car le domaine n'est pas symétrique par rapport à zéro.
2. Tableau de valeurs type
x    | 0 | 1 | 4 | 9 | 16
--------------------------
f(x) | 0 | 1 | 2 | 3 |  4
Allure graphique : La courbe débute au point O(0, 0) et se développe uniquement dans le premier quadrant. La fonction est strictement croissante sur [0 ; +∞[. Sa croissance est d'abord rapide puis ralentit progressivement.

V. LES TRANSFORMATIONS GRAPHIKES ax² ET ax³
L'introduction d'un coefficient multiplicateur réel non nul a modifie l'ouverture et l'orientation des courbes :
1. Courbe de g(x) = ax²
- Rôle du signe de a :
  * Si a > 0 : la parabole est orientée les branches vers le haut (sommet O est un minimum).
  * Si a < 0 : la parabole est orientée les branches vers le bas (sommet O est un maximum). La courbe y = -x² est le symétrique orthogonal de y = x² par rapport à l'axe des abscisses.
- Rôle de la valeur absolue |a| :
  * Si |a| > 1 (ex. y = 3x²) : chaque ordonnée est multipliée par 3. La parabole est étirée verticalement et apparaît plus étroite et resserrée autour de l'axe des ordonnées.
  * Si 0 < |a| < 1 (ex. y = x²/2) : chaque ordonnée est divisée par 2. La parabole est aplatie verticalement et apparaît plus large et ouverte.
2. Courbe de h(x) = ax³
- Si a > 0 : la courbe conserve l'allure croissante de x³ en étant plus raide si a > 1.
- Si a < 0 (ex. y = -x³) : la courbe s'inverse et devient strictement décroissante sur R.

VI. PROTOCOLE MÉTHODOLOGIQUE DE TRACÉ D'UNE COURBE POINT PAR POINT
Pour réussir le tracé précis d'une courbe en devoir de Seconde L :
- Étape 1 : Déterminer le domaine de définition et repérer d'éventuelles symétries (parité / imparité) qui permettent de réduire le travail de tracé à la partie positive des x.
- Étape 2 : Choisir une fenêtre graphique et des échelles judicieuses adaptées aux dimensions de la feuille.
- Étape 3 : Construire un tableau de valeurs numériques suffisamment dense en calculant les coordonnées de 5 à 9 points représentatifs, en privilégiant des valeurs simples de x.
- Étape 4 : Placer chaque point (x, y) avec une fine croix au crayon dans le repère.
- Étape 5 : Relier les points d'un geste souple par une courbe continue et lisse, sans tracer de segments brisés à la règle (sauf s'il s'agit de fonctions affines).
- Étape 6 : Vérifier la cohérence de l'allure obtenue à l'aide de la calculatrice scientifique.

CONCLUSION
Les fonctions de référence x², x³, 1/x et √x constituent le répertoire visuel et fonctionnel de base de tout raisonnement mathématique. Savoir les tracer point par point, anticiper l'effet d'un coefficient multiplicateur a et exploiter leurs symétries permet de maîtriser l'interprétation graphique des phénomènes scientifiques et économiques.`,
  introduction: `L'analyse mathématique s'appuie sur un catalogue de fonctions usuelles fondamentales, appelées fonctions de référence, dont l'allure graphique et les propriétés algébriques doivent être parfaitement connues et mémorisées par l'élève de Seconde L. Ces fonctions élémentaires (la fonction carré f(x) = x², la fonction cube f(x) = x³, la fonction inverse f(x) = 1/x et la fonction racine carrée f(x) = √x) constituent les briques de base à partir desquelles toutes les fonctions plus élaborées sont construites. Cette leçon détaille l'étude des domaines de définition, la parité et les symétries remarquables, les tableaux de valeurs types, les transformations graphiques induites par un coefficient multiplicateur (ax² et ax³), ainsi que le protocole rigoureux de tracé point par point à la main et l'utilisation de la calculatrice scientifique.`,
  sections: [
    {
      title: "I. Fonction carré f(x) = x²",
      content: [
        "Définie sur R, paire f(-x) = x² (symétrie axiale par rapport à l'axe vertical Oy).",
        "Table type : (-3, 9), (-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4), (3, 9). Parabole de sommet O tournée vers le haut."
      ]
    },
    {
      title: "II. Fonction cube f(x) = x³",
      content: [
        "Définie sur R, impaire f(-x) = -x³ (symétrie centrale par rapport à l'origine O).",
        "Table type : (-2, -8), (-1, -1), (0, 0), (1, 1), (2, 8). Strictement croissante sur R avec point d'inflexion en O."
      ]
    },
    {
      title: "III. Fonction inverse f(x) = 1/x",
      content: [
        "Définie sur R* = R \\ {0}, impaire (symétrie par rapport à O).",
        "Courbe : hyperbole en deux branches dans les quadrants I et III.",
        "Asymptotes : axe des abscisses y = 0 et axe des ordonnées x = 0 (la courbe s'en approche sans jamais les toucher)."
      ]
    },
    {
      title: "IV. Fonction racine carrée f(x) = √x",
      content: [
        "Définie sur R+ = [0 ; +∞[.",
        "Table type : (0, 0), (1, 1), (4, 2), (9, 3), (16, 4). Courbe débutant en O et strictement croissante dans le quadrant I."
      ]
    },
    {
      title: "V. Transformations ax² et ax³ et protocole de tracé",
      content: [
        "Pour ax² : si a > 0 parabole vers le haut, si a < 0 parabole vers le bas. Si |a| > 1 courbe plus resserrée, si |a| < 1 courbe plus ouverte.",
        "Protocole de tracé : domaine et symétries, choix d'échelle, tableau de valeurs (5 à 9 points), placement précis des croix et tracé lisse à main levée."
      ]
    }
  ],
  conclusion: `Les fonctions de référence x², x³, 1/x et √x constituent le répertoire visuel et fonctionnel de base de tout raisonnement mathématique. Savoir les tracer point par point, anticiper l'effet d'un coefficient multiplicateur a et exploiter leurs symétries permet de maîtriser l'interprétation graphique des phénomènes scientifiques et économiques.`
};

export const LESSON_9_MATH_2NDE_L: LessonContent = {
  id: 'math-2nde-l-lecon-9',
  number: 'ANNEXE MÉTHODES & SYNTHÈSE',
  title: `Méthodes de travail et exercices de synthèse corrigés en Mathématiques Seconde L`,
  subject: 'Mathématiques',
  classLevel: 'Seconde',
  fullText: `RÉPUBLIQUE DU SÉNÉGAL — MINISTÈRE DE L'ÉDUCATION NATIONALE
ASSOCIATION DES PROFESSEURS AFRICAINS DE MATHÉMATIQUES AU SÉNÉGAL (APAMS)
PROGRAMME OFFICIEL DE MATHÉMATIQUES — SÉRIE L (LITTÉRAIRE) — CLASSE DE SECONDE
ANNEXE PÉDAGOGIQUE OFFICIELLE

MÉTHODES DE TRAVAIL ET EXERCICES DE SYNTHÈSE CORRIGÉS EN MATHÉMATIQUES SECONDE L

INTRODUCTION
Pour réussir l'épreuve de mathématiques en série L au Sénégal (coefficient 2 au Baccalauréat L), l'élève doit développer des réflexes méthodologiques clairs. Cette annexe offre un guide de rédaction rigoureux pour présenter une solution mathématique selon les exigences des professeurs correcteurs du second cycle, suivi d'une série d'exercices de synthèse couvrant l'ensemble des chapitres du programme et accompagnés de leurs corrigés complets et minutieusement justifiés.

I. LES RÈGLES DE RÉDACTION D'UNE BONNE COPIE DE MATHÉMATIQUES
1. Démarche en quatre temps
Pour traiter n'importe quel exercice :
- Lire attentivement l'énoncé en entier pour identifier les données fournies et la question posée.
- Poser les conditions d'existence (dénominateurs non nuls, quantités sous racine positives).
- Citer la formule de cours ou le théorème avant de commencer les calculs.
- Effectuer les calculs sans sauts d'étapes injustifiés et conclure par une phrase claire en encadrant ou soulignant le résultat final.
2. Propreté et symbolisme
- Employer les symboles d'équivalence (<=>) ou d'implication (=>) à bon escient.
- Soigner la présentation des fractions avec la barre horizontale alignée avec le signe égal.
- Ne jamais laisser de résultat sous forme fractionnaire non simplifiée ou sous forme de racine non réduite.

II. SÉRIE D'EXERCICES DE SYNTHÈSE
1. Exercice 1 (Pourcentages successifs)
Une facture d'achat de fournitures d'un montant de 80 000 F CFA bénéficie d'abord d'une remise commerciale de 10 %, puis est soumise à la TVA sénégalaise au taux de 18 %.
a) Calculer le montant final à payer.
b) Expliquer pourquoi les pourcentages -10 % et +18 % ne s'additionnent pas simplement en +8 %.

2. Exercice 2 (Fonction affine et géométrie)
Soit la fonction affine f définie sur R par f(x) = 3x - 7.
a) Calculer l'image de 5 par la fonction f.
b) Déterminer l'antécédent de 8 par la fonction f.
c) Donner l'équation de la droite (D) représentant graphiquement f dans un repère du plan, ainsi que son coefficient directeur et son ordonnée à l'origine.

3. Exercice 3 (Statistique descriptive)
Une série statistique ordonnée compte N = 12 valeurs représentant les notes d'élèves :
3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 18.
a) Calculer l'étendue de cette série.
b) Déterminer la médiane Me de la série.
c) Déterminer le premier quartile Q₁ et le troisième quartile Q₃.
d) En déduire l'intervalle interquartile et l'écart interquartile.

4. Exercice 4 (Systèmes linéaires)
Résoudre dans R² le système linéaire suivant par deux méthodes différentes (substitution puis addition) :
{ 2x + y = 7
{ x - y = 2

5. Exercice 5 (Second degré et signe du trinôme)
a) Résoudre dans R l'équation du second degré : x² - 4x - 5 = 0.
b) Factoriser le trinôme P(x) = x² - 4x - 5.
c) Dresser le tableau de signes de P(x) et en déduire l'ensemble des solutions de l'inéquation : x² - 4x - 5 ≤ 0.
d) Représenter cet ensemble de solutions sur une droite réelle graduée.

6. Exercice 6 (Tracé comparatif de courbes)
Dans un même repère orthonormal :
a) Dresser un tableau de valeurs pour la fonction carré f(x) = x² et pour la fonction racine carrée g(x) = √x.
b) Tracer l'allure des deux courbes et préciser leurs points d'intersection.

III. CORRIGÉS DÉTAILLÉS ET JUSTIFIÉS
1. Corrigé de l'Exercice 1
a) Calcul du montant final :
- Remise de 10 % : coefficient multiplicateur k₁ = 1 - 10/100 = 0,90.
  Montant après remise = 80 000 × 0,90 = 72 000 F CFA.
- Taxe de 18 % appliquée sur le montant remisé : coefficient k₂ = 1 + 18/100 = 1,18.
  Montant final = 72 000 × 1,18 = 84 960 F CFA.
b) Explication :
Les pourcentages ne s'additionnent pas directement car ils ne s'appliquent pas à la même valeur de base. La remise de 10 % s'applique au montant initial de 80 000 F CFA, tandis que la taxe de 18 % s'applique sur le montant intermédiaire réduit de 72 000 F CFA. Le coefficient multiplicateur global est k = 0,90 × 1,18 = 1,062, ce qui équivaut à une hausse globale réelle de 6,2 % (et non pas 8 %).

2. Corrigé de l'Exercice 2
a) Image de 5 :
f(5) = 3(5) - 7 = 15 - 7 = 8.
L'image de 5 par f est 8.
b) Antécédent de 8 :
On résout l'équation f(x) = 8 :
3x - 7 = 8  <=>  3x = 8 + 7 = 15  <=>  x = 15 / 3 = 5.
L'unique antécédent de 8 est 5 (ce qui confirme la question précédente).
c) Équation de la droite représentative :
L'équation est (D) : y = 3x - 7.
Le coefficient directeur est m = 3 et l'ordonnée à l'origine est p = -7.

3. Corrigé de l'Exercice 3
a) Étendue :
Étendue = Max - Min = 18 - 3 = 15.
b) Médiane Me :
L'effectif total est N = 12 (nombre pair).
Les deux valeurs centrales sont la 6e valeur (qui vaut 9) et la 7e valeur (qui vaut 10).
Me = (9 + 10) / 2 = 19 / 2 = 9,5.
c) Quartiles Q₁ et Q₃ :
- Pour Q₁ : N / 4 = 12 / 4 = 3. Q₁ est la 3e valeur ordonnée : Q₁ = 6.
- Pour Q₃ : 3N / 4 = 3 × 12 / 4 = 9. Q₃ est la 9e valeur ordonnée : Q₃ = 12.
d) Intervalle et écart interquartile :
- Intervalle interquartile : [Q₁ ; Q₃] = [6 ; 12].
- Écart interquartile : Q₃ - Q₁ = 12 - 6 = 6.
Exactement 50 % des élèves ont une note comprise entre 6 et 12/20.

4. Corrigé de l'Exercice 4
Résolution du système { 2x + y = 7 (1) ; x - y = 2 (2) } :
- Méthode 1 : Par addition
  En sommant membre à membre (1) et (2) :
  (2x + x) + (y - y) = 7 + 2
  3x = 9  <=>  x = 3.
  En remplaçant x = 3 dans (2) :
  3 - y = 2  <=>  y = 3 - 2 = 1.
  Solution : S = {(3, 1)}.
- Méthode 2 : Par substitution
  De (2), on tire : x = 2 + y.
  On injecte dans (1) :
  2(2 + y) + y = 7  <=>  4 + 2y + y = 7  <=>  3y = 7 - 4 = 3  <=>  y = 1.
  Puis x = 2 + 1 = 3. On retrouve bien le couple unique (3, 1).

5. Corrigé de l'Exercice 5
a) Résolution de x² - 4x - 5 = 0 :
a = 1, b = -4, c = -5.
Δ = (-4)² - 4(1)(-5) = 16 + 20 = 36 = 6² > 0.
x₁ = (4 - 6) / 2 = -2 / 2 = -1.
x₂ = (4 + 6) / 2 = 10 / 2 = 5.
(Remarque : a - b + c = 1 - (-4) - 5 = 0, donc -1 était racine évidente).
Solutions : S = {-1 ; 5}.
b) Factorisation :
P(x) = a(x - x₁)(x - x₂) = 1(x - (-1))(x - 5) = (x + 1)(x - 5).
c) Signe et inéquation x² - 4x - 5 ≤ 0 :
Puisque a = 1 > 0, le trinôme est négatif ou nul entre les racines :
Tableau de signes :
x      | -∞      -1       5      +∞
x²+4x-5|    +     0   -   0   +
L'inéquation P(x) ≤ 0 est vérifiée pour x ∈ [-1 ; 5].
Solutions : S = [-1 ; 5].
d) Représentation sur la droite graduée :
Segment fermé commençant au point d'abscisse -1 avec un crochet fermé '[' et se terminant au point d'abscisse 5 avec un crochet fermé ']'.

6. Corrigé de l'Exercice 6
a) Tableau de valeurs :
Pour f(x) = x² : (0, 0), (1, 1), (2, 4).
Pour g(x) = √x : (0, 0), (1, 1), (4, 2).
b) Points d'intersection :
On résout x² = √x pour x ≥ 0 :
x⁴ = x  <=>  x(x³ - 1) = 0  <=>  x = 0 ou x = 1.
Les deux courbes se coupent exactement en deux points : l'origine O(0, 0) et le point A(1, 1). Sur [0 ; 1], la courbe de √x est au-dessus de celle de x² ; sur [1 ; +∞[, la parabole x² dépasse très largement la racine carrée.

CONCLUSION
Ces exercices de synthèse illustrent parfaitement la complémentarité des outils du programme de Seconde L : le calcul algébrique rigoureux s'associe à la vision géométrique et à l'interprétation concrète pour donner du sens aux mathématiques.`,
  introduction: `Pour réussir l'épreuve de mathématiques en série L au Sénégal (coefficient 2 au Baccalauréat L), l'élève doit développer des réflexes méthodologiques clairs. Cette annexe offre un guide de rédaction rigoureux pour présenter une solution mathématique selon les exigences des professeurs correcteurs du second cycle, suivi d'une série d'exercices de synthèse couvrant l'ensemble des chapitres du programme et accompagnés de leurs corrigés complets et minutieusement justifiés.`,
  sections: [
    {
      title: "I. Règles de rédaction et démarche",
      content: [
        "Lire l'énoncé, poser les conditions d'existence, citer la formule de cours, détailler les étapes sans saut injustifié et encadrer le résultat avec son unité.",
        "Rigueur des symboles d'équivalence (<=>) et propreté des tracés géométriques."
      ]
    },
    {
      title: "II. Exercices de synthèse représentatifs",
      content: [
        "Exercice 1 : pourcentages successifs (80 000 F - 10 % puis + 18 % = 84 960 F CFA).",
        "Exercice 2 : fonction affine f(x) = 3x - 7 (image de 5 = 8, antécédent de 8 = 5).",
        "Exercice 3 : statistique (série de 12 notes, médiane Me = 9,5, Q₁ = 6, Q₃ = 12).",
        "Exercice 4 : système 2x+y=7 et x-y=2 résolu par substitution et addition => (3, 1).",
        "Exercice 5 : second degré x²-4x-5 ≤ 0 => racines -1 et 5 => S = [-1 ; 5].",
        "Exercice 6 : comparaison x² et √x, intersection en (0, 0) et (1, 1)."
      ]
    },
    {
      title: "III. Corrigés détaillés et commentés",
      content: [
        "Solutions rédigées étape par étape avec justifications mathématiques intégrales et conseils méthodologiques."
      ]
    }
  ],
  conclusion: `Ces exercices de synthèse illustrent parfaitement la complémentarité des outils du programme de Seconde L : le calcul algébrique rigoureux s'associe à la vision géométrique et à l'interprétation concrète pour donner du sens aux mathématiques.`
};

export const COURSES_MATH_2NDE_L_PART2: LessonContent[] = [
  LESSON_5_MATH_2NDE_L,
  LESSON_6_MATH_2NDE_L,
  LESSON_7_MATH_2NDE_L,
  LESSON_8_MATH_2NDE_L,
  LESSON_9_MATH_2NDE_L
];

export interface Math2ndeLModule {
  id: string;
  name: string;
  shortName: string;
  description: string;
  badge: string;
  count: number;
}

export const MATH_2NDE_L_PART2_MODULES: Math2ndeLModule[] = [
  {
    id: 'part2',
    name: 'Deuxième Partie : Statistiques, Systèmes, Second Degré, Courbes et Méthodologie (Chapitres 5 à 8 & Annexe)',
    shortName: 'Partie 2 (Chapitres 5-8 & Annexe)',
    description: 'Programme officiel APAMS : statistique descriptive, systèmes 2x2, équations du second degré, tracé des courbes usuelles et annexe méthodologique.',
    badge: 'Partie 2 • Chapitres 5 à 8 & Méthodes',
    count: 5
  }
];
