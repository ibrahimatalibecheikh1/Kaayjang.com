import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 4
// Conforme au programme officiel national du Sénégal (Bac S1 - S2)
// Leçons S-11 à S-13 : Probabilités/Loi Binomiale, Géométrie dans l'Espace, Arithmétique dans Z
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_MATH_TLE_S_ESPACE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#0369a1">
    FIGURE S-11 : GÉOMÉTRIE DE L'ESPACE — PLAN (P) ET VECTEUR NORMAL n(a, b, c)
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#0284c7">
    Équation cartésienne ax + by + cz + d = 0 et distance point-plan d(A, P) = |ax_A + by_A + cz_A + d| / √(a² + b² + c²)
  </text>

  <!-- 3D Plane representation (parallelogram) -->
  <polygon points="160,260 480,260 620,150 300,150" fill="rgba(2,132,199,0.15)" stroke="#0284c7" stroke-width="2.5" />
  <text x="560" y="180" font-size="14" font-weight="bold" fill="#0284c7">Plan (P)</text>

  <!-- Point M0 on plane -->
  <circle cx="360" cy="205" r="5" fill="#0f172a" />
  <text x="340" y="225" font-size="12" font-weight="bold" fill="#0f172a">M₀(x₀, y₀, z₀)</text>

  <!-- Vector normal n perpendicular to plane -->
  <line x1="360" y1="205" x2="360" y2="75" stroke="#dc2626" stroke-width="3" />
  <polygon points="360,65 354,80 366,80" fill="#dc2626" />
  <text x="375" y="90" font-size="14" font-weight="bold" fill="#dc2626">n(a, b, c) ⊥ (P)</text>

  <!-- Right angle mark at M0 -->
  <polygon points="360,185 380,185 380,205 360,205" fill="none" stroke="#dc2626" stroke-width="1.5" />

  <!-- External Point A -->
  <circle cx="240" cy="110" r="6" fill="#16a34a" />
  <text x="210" y="110" font-size="13" font-weight="bold" fill="#16a34a">A(x_A, y_A, z_A)</text>

  <!-- Projection H of A on Plane -->
  <line x1="240" y1="110" x2="240" y2="215" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3" />
  <circle cx="240" cy="215" r="5" fill="#16a34a" />
  <text x="250" y="235" font-size="12" font-weight="bold" fill="#16a34a">H (Projeté ortho)</text>
  <text x="140" y="170" font-size="12" font-weight="bold" fill="#15803d">d(A, P) = AH</text>

  <rect x="360" y="260" width="370" height="95" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="375" y="282" font-size="11" font-weight="bold" fill="#0369a1">Produit vectoriel u ∧ v dans l'espace :</text>
  <text x="375" y="302" font-size="11" fill="#0f172a">• n = u ∧ v est orthogonal à la fois à u et à v.</text>
  <text x="375" y="320" font-size="11" fill="#0f172a">• Norme : ||u ∧ v|| = ||u|| · ||v|| · |sin(u, v)| = Aire du parallélogramme.</text>
  <text x="375" y="338" font-size="11" fill="#0f172a">• u et v colinéaires ⟺ u ∧ v = 0.</text>
</svg>`;

export const SVG_MATH_TLE_S_PROBABILITES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">
    FIGURE S-12 : LOI BINOMIALE B(n, p) & ESPÉRANCE MATHÉMATIQUE E(X) = n·p
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#b45309">
    Répétition de n épreuves de Bernoulli identiques et indépendantes : P(X = k) = C_n^k p^k (1-p)^(n-k)
  </text>

  <!-- Distribution bars -->
  <!-- k=0 -->
  <rect x="120" y="295" width="40" height="25" fill="#fde68a" stroke="#d97706" />
  <text x="140" y="338" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">k=0</text>

  <!-- k=1 -->
  <rect x="180" y="250" width="40" height="70" fill="#fde68a" stroke="#d97706" />
  <text x="200" y="338" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">k=1</text>

  <!-- k=2 -->
  <rect x="240" y="180" width="40" height="140" fill="#fde68a" stroke="#d97706" />
  <text x="260" y="338" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">k=2</text>

  <!-- k=3 (mode / mean) -->
  <rect x="300" y="120" width="40" height="200" fill="#d97706" stroke="#b45309" />
  <text x="320" y="338" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">k=3</text>
  <text x="320" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">E(X)=np</text>

  <!-- k=4 -->
  <rect x="360" y="170" width="40" height="150" fill="#fde68a" stroke="#d97706" />
  <text x="380" y="338" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">k=4</text>

  <!-- k=5 -->
  <rect x="420" y="240" width="40" height="80" fill="#fde68a" stroke="#d97706" />
  <text x="440" y="338" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">k=5</text>

  <!-- k=6 -->
  <rect x="480" y="290" width="40" height="30" fill="#fde68a" stroke="#d97706" />
  <text x="500" y="338" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">k=6</text>

  <!-- Baseline -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2" />

  <!-- Info Card -->
  <rect x="470" y="80" width="260" height="130" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="485" y="105" font-size="11" font-weight="bold" fill="#78350f">Paramètres de la loi B(n, p) :</text>
  <text x="485" y="128" font-size="11" fill="#451a03">• Espérance : E(X) = n · p</text>
  <text x="485" y="148" font-size="11" fill="#451a03">• Variance : V(X) = n · p · (1 - p)</text>
  <text x="485" y="168" font-size="11" fill="#451a03">• Écart-type : σ(X) = √(n · p · q)</text>
  <text x="485" y="188" font-size="10" fill="#92400e">avec q = 1 - p (probabilité d'échec).</text>
</svg>`;

// =========================================================================
// LEÇON S-11 : CALCUL DES PROBABILITÉS ET VARIABLES ALÉATOIRES
// =========================================================================
export const LESSON_11_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-11`,
  number: `Leçon S-11`,
  title: `Calcul des Probabilités et Variables Aléatoires`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de probabilités formelles et preuves`,
  description: `Axiomatique de Kolmogorov, probabilités conditionnelles, indépendance, formule des probabilités totales, formule de Bayes, variable aléatoire discrète, schéma de Bernoulli, loi binomiale B(n, p), démonstration de E(X) = np et inégalité de Bienaymé-Tchebychev.`,
  image: {
    caption: `Figure S-11 : Schéma de Bernoulli, loi binomiale B(n, p) et histogramme de probabilités.`,
    svgContent: SVG_MATH_TLE_S_PROBABILITES
  },
  diagram: {
    title: `Probabilités et Loi Binomiale`,
    svgContent: SVG_MATH_TLE_S_PROBABILITES
  },
  introduction: `La théorie moderne des probabilités, axiomatisée par le mathématicien russe Andreï Kolmogorov en 1933, est la science mathématique de l'incertitude et du hasard quantifié. En Terminale S, les probabilités ne reposent plus seulement sur le dénombrement combinatoire élémentaire, mais sur une structure probabilisée rigoureuse (Ω, P). 
Ce chapitre formalise les concepts de probabilités conditionnelles, démontre la célèbre formule d'inversion des causes de Thomas Bayes, construit la théorie des variables aléatoires réelles, et démontre rigoureusement l'espérance et la variance de la loi binomiale issue du schéma de Bernoulli.`,
  conclusion: `En conclusion, le chapitre de probabilités en Terminale S constitue l'un des exercices les plus sûrs et les plus gratifiants du Baccalauréat Scientifique si l'on applique avec rigueur : 1) La rédaction claire des événements considérés avec notation mathématique précise, 2) L'application de la formule des probabilités totales en citant explicitement le système complet d'événements formant partition de l'univers, et 3) L'identification immédiate du schéma de Bernoulli (répétition de n épreuves identiques, indépendantes à 2 issues) menant à la loi binomiale B(n, p).`,
  sections: [
    {
      title: `I. PROBABILITÉS CONDITIONNELLES, TOTALES ET FORMULE DE BAYES`,
      subsections: [
        {
          subtitle: `A. Probabilité conditionnelle et indépendance`,
          content: [
            `Soit (Ω, P) un espace probabilisé fini. Soit B un événement tel que P(B) > 0.`,
            `Définition : La probabilité conditionnelle de l'événement A sachant B est le réel :`,
            `P(A | B) = P_B(A) = P(A ∩ B) / P(B).`,
            `Propriété : L'application P_B : A ↦ P_B(A) est une véritable mesure de probabilité sur Ω (elle vérifie tous les axiomes de Kolmogorov : P_B(Ω) = 1, positivité et additivité sur les disjoints).`,
            `Indépendance : Deux événements A et B sont dits indépendants si et seulement si :`,
            `P(A ∩ B) = P(A) × P(B).`
          ]
        },
        {
          subtitle: `B. Formule des probabilités totales et formule de Bayes`,
          content: [
            `Définition de partition : Une famille d'événements (A₁, A₂, ..., A_n) forme une partition de l'univers Ω (ou un système complet d'événements) si :`,
            `1. Les événements sont deux à deux disjoints : A_i ∩ A_j = ∅ pour tout i ≠ j.`,
            `2. Leur réunion forme tout l'univers : A₁ ∪ A₂ ∪ ... ∪ A_n = Ω.`,
            `3. Pour tout i, P(A_i) > 0.`,
            `Théorème des probabilités totales : Pour tout événement B de Ω :`,
            `P(B) = ∑ [i=1 à n] P(B ∩ A_i) = ∑ [i=1 à n] P(A_i) × P(B | A_i).`,
            `Théorème de Bayes (Probabilité des causes) : Pour tout événement B tel que P(B) > 0 et pour tout k ∈ {1, ..., n} :`,
            `P(A_k | B) = [ P(A_k) × P(B | A_k) ] / [ ∑ [i=1 à n] P(A_i) × P(B | A_i) ].`
          ]
        }
      ]
    },
    {
      title: `II. VARIABLES ALÉATOIRES DISCRÈTES ET PARAMÈTRES STATISTIQUES`,
      subsections: [
        {
          subtitle: `A. Loi de probabilité, espérance et variance`,
          content: [
            `Soit X une variable aléatoire prenant les valeurs {x₁, x₂, ..., x_m} avec les probabilités p_i = P(X = x_i).`,
            `1. Espérance mathématique : E(X) = ∑ [i=1 à m] x_i · p_i.`,
            `Propriété de linéarité : Pour tous réels a et b : E(aX + b) = a·E(X) + b.`,
            `2. Variance : V(X) = E[(X - E(X))²] = ∑ p_i (x_i - E(X))².`,
            `Formule de König-Huygens (très commode au Bac) : V(X) = E(X²) - [E(X)]² = [∑ p_i · x_i²] - [E(X)]².`,
            `3. Écart-type : σ(X) = √V(X) ≥ 0.`
          ]
        }
      ]
    },
    {
      title: `III. LE SCHÉMA DE BERNOULLI ET LA LOI BINOMIALE B(n, p)`,
      subsections: [
        {
          subtitle: `A. Épreuve et schéma de Bernoulli`,
          content: [
            `1. Épreuve de Bernoulli : Une expérience aléatoire comportant exactement deux issues complémentaires :`,
            `• Le succès (S) de probabilité p (0 < p < 1).`,
            `• L'échec (E ou S̄) de probabilité q = 1 - p.`,
            `2. Schéma de Bernoulli d'ordre n : La répétition de n épreuves de Bernoulli identiques et mutuellement INDÉPENDANTES (avec remise).`
          ]
        },
        {
          subtitle: `B. Démonstration de la formule de la loi binomiale B(n, p)`,
          content: [
            `Soit X la variable aléatoire égale au nombre total de succès obtenus au cours des n épreuves. X prend ses valeurs dans {0, 1, 2, ..., n}.`,
            `Théorème fondamental : Pour tout entier k ∈ {0, 1, ..., n} :`,
            `P(X = k) = C_n^k · p^k · (1 - p)^(n - k).`,
            `Démonstration pas-à-pas :`,
            `Considérons une suite particulière d'issues comportant exactement k succès et (n - k) échecs (par exemple S S ... S E E ... E).`,
            `Puisque les épreuves sont indépendantes, la probabilité de cette suite particulière s'obtient par le produit des probabilités individuelles :`,
            `P = p × p × ... × p × (1-p) × ... × (1-p) = p^k · (1-p)^(n-k).`,
            `Or, il existe autant de suites différentes à k succès que de manières de placer les k succès parmi les n places de tirages, c'est-à-dire le nombre de combinaisons C_n^k.`,
            `Les suites étant disjointes, la probabilité totale est la somme de ces probabilités identiques :`,
            `P(X = k) = C_n^k · p^k · (1-p)^(n-k).`
          ]
        },
        {
          subtitle: `C. Démonstration de l'espérance E(X) = np et de la variance V(X) = np(1-p)`,
          content: [
            `Démonstration par la décomposition en variables indicatrices :`,
            `Pour chaque épreuve i ∈ {1, ..., n}, définissons la variable de Bernoulli X_i telle que :`,
            `X_i = 1 si l'épreuve i est un succès, et X_i = 0 si c'est un échec.`,
            `On a : E(X_i) = 1·p + 0·(1-p) = p, et E(X_i²) = 1²·p + 0²·(1-p) = p.`,
            `D'où la variance : V(X_i) = E(X_i²) - [E(X_i)]² = p - p² = p(1 - p).`,
            `Or, le nombre total de succès X est la somme directe des indicatrices : X = X₁ + X₂ + ... + X_n.`,
            `Par linéarité de l'espérance :`,
            `E(X) = E(X₁ + ... + X_n) = E(X₁) + ... + E(X_n) = n × p.`,
            `De plus, les épreuves étant indépendantes, les variables X_i sont mutuellement indépendantes. La variance d'une somme de variables indépendantes est égale à la somme de leurs variances :`,
            `V(X) = V(X₁) + ... + V(X_n) = n × p(1 - p).`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-12 : GÉOMÉTRIE VECTORIELLE ET ANALYTIQUE DANS L'ESPACE
// =========================================================================
export const LESSON_12_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-12`,
  number: `Leçon S-12`,
  title: `Géométrie Vectorielle et Analytique dans l'Espace`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de géométrie euclidienne dans R³`,
  description: `Repères orthonormés de l'espace, produit scalaire, produit vectoriel u ∧ v, équation cartésienne de plans, représentations paramétriques de droites, positions relatives, calcul de distances point-plan, et intersections plans-sphères.`,
  image: {
    caption: `Figure S-12 : Plan de l'espace, vecteur normal n et distance d'un point A au plan.`,
    svgContent: SVG_MATH_TLE_S_ESPACE
  },
  diagram: {
    title: `Géométrie dans l'Espace`,
    svgContent: SVG_MATH_TLE_S_ESPACE
  },
  introduction: `La géométrie tridimensionnelle permet de modéliser l'espace physique dans lequel nous vivons (architecture, génie civil, télécommunications par satellites, navigation maritime au large des côtes sénégalaises). 
En Terminale S, l'introduction des coordonnées cartésiennes (x, y, z) et du repère orthonormé (O; i, j, k) permet de transformer tous les problèmes géométriques de positions relatives et de distances en résolutions de systèmes algébriques linéaires. 
Ce chapitre formalise les équations cartésiennes des plans, les représentations paramétriques des droites, le produit vectoriel, et établit la formule de la distance d'un point à un plan.`,
  conclusion: `En conclusion, la géométrie de l'espace au Baccalauréat Scientifique repose sur trois automatismes fondamentaux : 1) Déterminer un vecteur normal n(a, b, c) à un plan à partir de deux vecteurs directeurs non colinéaires en utilisant le produit vectoriel n = u ∧ v, 2) Écrire l'équation cartésienne ax + by + cz + d = 0 et déterminer d en injectant les coordonnées d'un point connu, 3) Calculer la distance point-plan d(A, P) = |ax_A + by_A + cz_A + d| / √(a² + b² + c²) pour étudier la position relative d'une sphère et d'un plan (tangent si d = R, sécant selon un cercle si d < R, disjoint si d > R).`,
  sections: [
    {
      title: `I. PRODUIT SCALAIRE ET PRODUIT VECTORIEL DANS L'ESPACE`,
      subsections: [
        {
          subtitle: `A. Produit scalaire dans une base orthonormée`,
          content: [
            `Soient u(x, y, z) et v(x', y', z') deux vecteurs dans une base orthonormée (i, j, k).`,
            `Le produit scalaire est le nombre réel donné par :`,
            `u · v = x·x' + y·y' + z·z' = ||u|| · ||v|| · cos(u, v).`,
            `Critère d'orthogonalité : u ⊥ v ⟺ u · v = 0 ⟺ x·x' + y·y' + z·z' = 0.`
          ]
        },
        {
          subtitle: `B. Le produit vectoriel u ∧ v`,
          content: [
            `Définition analytique : Le produit vectoriel de u(x, y, z) et v(x', y', z') est le vecteur noté u ∧ v de coordonnées :`,
            `u ∧ v = (y·z' - z·y') i + (z·x' - x·z') j + (x·y' - y·x') k.`,
            `Propriétés géométriques fondamentales :`,
            `1. n = u ∧ v est ORTHOGONAL à u ET à v : n · u = 0 et n · v = 0.`,
            `2. Le trièdre (u, v, u ∧ v) est direct.`,
            `3. Norme : ||u ∧ v|| = ||u|| · ||v|| · |sin(u, v)| (représente l'aire du parallélogramme construit sur u et v).`,
            `4. Colinéarité : Deux vecteurs u et v sont colinéaires si et seulement si u ∧ v = 0.`
          ]
        }
      ]
    },
    {
      title: `II. ÉQUATIONS DE PLANS ET DE DROITES DANS L'ESPACE`,
      subsections: [
        {
          subtitle: `A. Équation cartésienne d'un plan`,
          content: [
            `Théorème fondamental : Un plan (P) de l'espace passant par un point A(x_A, y_A, z_A) et de vecteur normal non nul n(a, b, c) est l'ensemble des points M(x, y, z) vérifiant :`,
            `AM · n = 0 ⟺ a(x - x_A) + b(y - y_A) + c(z - z_A) = 0.`,
            `En développant et en posant d = - (a x_A + b y_A + c z_A), on obtient l'équation cartésienne canonique :`,
            `ax + by + cz + d = 0 (avec a, b, c non tous nuls).`
          ]
        },
        {
          subtitle: `B. Représentation paramétrique d'une droite`,
          content: [
            `Une droite (D) passant par A(x_A, y_A, z_A) et de vecteur directeur u(α, β, γ) est l'ensemble des points M(x, y, z) tels qu'il existe un réel t ∈ R vérifiant AM = t·u :`,
            `{ x = x_A + α·t`,
            `{ y = y_A + β·t   (t ∈ R).`,
            `{ z = z_A + γ·t`
          ]
        },
        {
          subtitle: `C. Distance d'un point à un plan`,
          content: [
            `Théorème : La distance d'un point A(x_A, y_A, z_A) au plan (P) d'équation ax + by + cz + d = 0 est la longueur AH où H est le projeté orthogonal de A sur (P) :`,
            `d(A, P) = |a x_A + b y_A + c z_A + d| / √(a² + b² + c²).`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-13 : ARITHMÉTIQUE DANS L'ENSEMBLE Z DES ENTIERS RELATIFS
// =========================================================================
export const LESSON_13_MATH_TLE_S: LessonContent = {
  id: `math-tle-s-cours-13`,
  number: `Leçon S-13`,
  title: `Arithmétique dans l'Ensemble Z des Entiers Relatifs`,
  subject: `Mathématiques`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `80 min de théorie des nombres et preuves classiques`,
  description: `Divisibilité dans Z, division euclidienne, PGCD, algorithme d'Euclide, identité de Bézout, théorème de Gauss, équations diophantiennes ax + by = c, congruences dans Z/nZ et petit théorème de Fermat.`,
  image: {
    caption: `Figure S-13 : Algorithme des divisions euclidiennes successives d'Euclide et remontée de Bézout.`,
    svgContent: SVG_MATH_TLE_S_ESPACE
  },
  diagram: {
    title: `Arithmétique dans Z`,
    svgContent: SVG_MATH_TLE_S_ESPACE
  },
  introduction: `L'arithmétique, qualifiée par le prince des mathématiciens Carl Friedrich Gauss de "Reine des mathématiques", étudie les propriétés intrinsèques des nombres entiers, la divisibilité, les nombres premiers et les congruences. 
Longtemps considérée comme la branche la plus pure et abstraite des sciences, l'arithmétique moderne est aujourd'hui au cœur des technologies les plus stratégiques au monde et au Sénégal : cryptographie asymétrique RSA protégeant les transactions de monnaie électronique (Wave, Orange Money), cartes bancaires, sécurité des données d'État et protocoles internet sécurisés HTTPS. 
Ce chapitre de Terminale S1-S2 enseigne la division euclidienne, démontre les théorèmes de Bézout et de Gauss, et résout les équations diophantiennes.`,
  conclusion: `En conclusion, l'arithmétique en Série S repose sur la chaîne déductive la plus parfaite des mathématiques : 1) Algorithme d'Euclide pour déterminer le PGCD(a, b), 2) Théorème de Bézout : a et b sont premiers entre eux ssi ∃ (u, v) ∈ Z² tel que au + bv = 1, 3) Théorème de Gauss : si a divise le produit bc et si a et b sont premiers entre eux, alors a divise c, et 4) Congruences modulo n simplifiant les calculs de restes et puissances grâce au petit théorème de Fermat : si p est premier et ne divise pas a, alors a^(p-1) ≡ 1 [p].`,
  sections: [
    {
      title: `I. DIVISIBILITÉ, DIVISION EUCLIDIENNE ET PGCD`,
      subsections: [
        {
          subtitle: `A. Théorème de la division euclidienne`,
          content: [
            `Théorème fondamental : Pour tout entier a ∈ Z et pour tout entier b ∈ N* (b > 0), il existe un UNIQUE couple d'entiers relatifs (q, r) tels que :`,
            `a = b · q + r avec 0 ≤ r < b.`,
            `L'entier a est le dividende, b le diviseur, q le quotient et r le reste.`
          ]
        },
        {
          subtitle: `B. PGCD et Algorithme d'Euclide`,
          content: [
            `Définition : Soient a et b deux entiers non tous nuls. Le plus grand entier qui divise simultanément a et b est appelé le Plus Grand Commun Diviseur, noté PGCD(a, b) ou a ∧ b.`,
            `Théorème d'Euclide : Si a = b·q + r (division euclidienne), alors :`,
            `PGCD(a, b) = PGCD(b, r).`,
            `Algorithme d'Euclide : On effectue les divisions euclidiennes successives jusqu'à obtenir un reste nul. Le PGCD est le DERNIER RESTE NON NUL.`
          ]
        }
      ]
    },
    {
      title: `II. THÉORÈMES DE BÉZOUT ET DE GAUSS`,
      subsections: [
        {
          subtitle: `A. Théorème d'Étienne Bézout (1730-1783)`,
          content: [
            `Théorème de Bézout : Deux entiers relatifs a et b sont premiers entre eux (c'est-à-dire PGCD(a, b) = 1) si et seulement si il existe un couple d'entiers (u, v) ∈ Z² tel que :`,
            `a · u + b · v = 1.`,
            `Corollaire général : Pour tous entiers a et b de PGCD d, il existe (u, v) ∈ Z² tel que a·u + b·v = d.`
          ]
        },
        {
          subtitle: `B. Théorème de Carl Friedrich Gauss`,
          content: [
            `Théorème fondamental de Gauss : Soient a, b et c trois entiers relatifs non nuls.`,
            `Si a divise le produit b · c, et si a et b sont PREMIERS ENTRE EUX (PGCD(a, b) = 1),`,
            `alors a DIVISE c.`,
            `Démonstration pas-à-pas avec le théorème de Bézout :`,
            `Puisque PGCD(a, b) = 1, d'après le théorème de Bézout, il existe (u, v) ∈ Z² tel que :`,
            `a·u + b·v = 1.`,
            `Multiplions toute l'égalité par c :`,
            `a·c·u + b·c·v = c.`,
            `Par hypothèse, a divise le produit bc : il existe donc un entier k tel que bc = k·a.`,
            `Substituons bc :`,
            `a·c·u + (k·a)·v = c ⟺ a · (c·u + k·v) = c.`,
            `Puisque c·u + k·v est un entier relatif, on en déduit immédiatement que a divise c.`
          ]
        }
      ]
    },
    {
      title: `III. ÉQUATIONS DIOPHANTIENNES ax + by = c ET CONGRUENCES`,
      subsections: [
        {
          subtitle: `A. Résolution complète dans Z² de ax + by = c`,
          content: [
            `Théorème d'existence : L'équation ax + by = c admet des solutions entières (x, y) ∈ Z² si et seulement si le PGCD(a, b) divise c.`,
            `Méthode de résolution pas-à-pas au Bac :`,
            `1. Simplifier l'équation en divisant par d = PGCD(a, b) : a'x + b'y = c' avec a' ∧ b' = 1.`,
            `2. Trouver une solution particulière (x₀, y₀) grâce à l'algorithme d'Euclide remonté.`,
            `3. Soustraire membre à membre pour obtenir la forme homogène : a'(x - x₀) = -b'(y - y₀).`,
            `4. Appliquer le théorème de Gauss : b' divise a'(x - x₀) et a' ∧ b' = 1 ⟹ b' divise (x - x₀). Donc x - x₀ = k·b' ⟹ x = x₀ + k·b'.`,
            `5. Injecter pour trouver y = y₀ - k·a' avec k ∈ Z.`
          ]
        },
        {
          subtitle: `B. Le Petit Théorème de Pierre de Fermat`,
          content: [
            `Théorème : Soit p un nombre premier et a un entier relatif non divisible par p.`,
            `Alors : a^(p - 1) ≡ 1 [p].`,
            `Forme équivalente pour tout entier a : Pour tout entier a et tout premier p, a^p ≡ a [p].`
          ]
        }
      ]
    }
  ]
};
