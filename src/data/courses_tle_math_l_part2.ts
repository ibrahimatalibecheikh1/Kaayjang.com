import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE TERMINALE L (SÉRIES L1, L2, L') — PARTIE 2
// Conforme au programme officiel national du Sénégal (Référentiel APAMS / Bac L)
// Leçons 5 à 8 : Logarithme & Exponentielle, Suites numériques, Statistiques doubles, Probabilités
// Leçons longues sans résumé, grands axes en chiffres romains et figures/schémas obligatoires
// =========================================================================

export const SVG_MATH_TLE_L_LN_EXP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#581c87">
    FIGURE 5 : COURBES COMPARÉES DES FONCTIONS y = e^x ET y = ln(x)
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#7e22ce">
    Symétrie orthogonale axiale par rapport à la première bissectrice (Δ) : y = x (Bijections réciproques)
  </text>

  <!-- Axes -->
  <line x1="80" y1="280" x2="680" y2="280" stroke="#475569" stroke-width="2" />
  <line x1="280" y1="360" x2="280" y2="60" stroke="#475569" stroke-width="2" />
  <text x="670" y="300" font-size="13" font-weight="bold" fill="#334155">x</text>
  <text x="260" y="75" font-size="13" font-weight="bold" fill="#334155">y</text>
  <text x="265" y="295" font-size="12" fill="#64748b">O</text>

  <!-- Line y = x -->
  <line x1="120" y1="440" x2="560" y2="0" stroke="#9333ea" stroke-width="1.8" stroke-dasharray="6,4" />
  <text x="510" y="45" font-size="12" font-weight="bold" fill="#9333ea">(Δ) : y = x</text>

  <!-- Curve exp(x) -->
  <path d="M 100 278 Q 240 275 280 200 T 400 65" fill="none" stroke="#2563eb" stroke-width="3" />
  <text x="405" y="65" font-size="13" font-weight="bold" fill="#2563eb">y = e^x</text>
  <circle cx="280" cy="200" r="5" fill="#2563eb" />
  <text x="290" y="195" font-size="11" font-weight="bold" fill="#2563eb">(0 ; 1)</text>

  <!-- Curve ln(x) -->
  <path d="M 282 360 Q 285 240 360 280 T 640 180" fill="none" stroke="#059669" stroke-width="3" />
  <text x="645" y="180" font-size="13" font-weight="bold" fill="#059669">y = ln(x)</text>
  <circle cx="360" cy="280" r="5" fill="#059669" />
  <text x="360" y="300" font-size="11" font-weight="bold" fill="#059669">(1 ; 0)</text>

  <!-- Legend Card -->
  <rect x="360" y="80" width="370" height="90" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.5" />
  <text x="375" y="105" font-size="11" font-weight="bold" fill="#581c87">Propriétés clés pour le Bac L :</text>
  <text x="375" y="125" font-size="11" fill="#3b0764">• ln(1) = 0 ; ln(e) = 1 ; e^0 = 1 ; e^1 = e ≈ 2,718</text>
  <text x="375" y="145" font-size="11" fill="#3b0764">• Dérivées : (ln x)' = 1/x (x > 0) et (e^x)' = e^x</text>
  <text x="375" y="162" font-size="11" fill="#3b0764">• Asymptote de ln : x = 0 (axe Oy) | Asymptote de exp : y = 0 en -∞</text>
</svg>`;

export const SVG_MATH_TLE_L_STATISTIQUES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#14532d">
    FIGURE 6 : AJUSTEMENT LINÉAIRE DE MAYER SUR UN NUAGE DE POINTS
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#15803d">
    Division en deux sous-groupes, calcul des points moyens G₁(x̄₁, ȳ₁) et G₂(x̄₂, ȳ₂), et droite (G₁G₂)
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#334155" stroke-width="2" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#1e293b">X (Dépenses)</text>
  <text x="60" y="90" font-size="13" font-weight="bold" fill="#1e293b">Y (Recettes)</text>

  <!-- Scatter points Group 1 -->
  <circle cx="160" cy="280" r="5" fill="#0284c7" />
  <circle cx="200" cy="260" r="5" fill="#0284c7" />
  <circle cx="240" cy="235" r="5" fill="#0284c7" />
  <circle cx="270" cy="210" r="5" fill="#0284c7" />

  <!-- Scatter points Group 2 -->
  <circle cx="360" cy="180" r="5" fill="#d97706" />
  <circle cx="420" cy="160" r="5" fill="#d97706" />
  <circle cx="480" cy="130" r="5" fill="#d97706" />
  <circle cx="540" cy="105" r="5" fill="#d97706" />

  <!-- Boundary line dividing groups -->
  <line x1="310" y1="80" x2="310" y2="320" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
  <text x="210" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Groupe 1 (4 points)</text>
  <text x="430" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Groupe 2 (4 points)</text>

  <!-- Point moyen G1 -->
  <circle cx="217" cy="246" r="8" fill="#0369a1" stroke="#ffffff" stroke-width="2" />
  <text x="217" y="235" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">G₁</text>

  <!-- Point moyen G2 -->
  <circle cx="450" cy="144" r="8" fill="#b45309" stroke="#ffffff" stroke-width="2" />
  <text x="450" y="133" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">G₂</text>

  <!-- Mayer Line (G1G2) -->
  <line x1="120" y1="288" x2="620" y2="70" stroke="#dc2626" stroke-width="2.5" />
  <text x="630" y="75" font-size="12" font-weight="bold" fill="#dc2626">(D) : Droite de Mayer</text>

  <!-- Info box -->
  <rect x="360" y="230" width="370" height="85" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
  <text x="375" y="252" font-size="11" font-weight="bold" fill="#14532d">Formule de la pente de Mayer :</text>
  <text x="375" y="272" font-size="11" fill="#166534">a = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁) et b = ȳ₁ - a·x̄₁</text>
  <text x="375" y="292" font-size="10" fill="#166534">Permet d'estimer et de prévoir Y pour une valeur future de X.</text>
</svg>`;

export const SVG_MATH_TLE_L_PROBABILITES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fdf2f8" stroke="#db2777" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#831843">
    FIGURE 8 : ARBRE PONDÉRÉ DE PROBABILITÉS CONDITIONNELLES & FORMULE DES PROBABILITÉS TOTALES
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#9d174d">
    P(A ∩ B) = P(A) × P_A(B) et P(B) = P(A ∩ B) + P(Ā ∩ B) (Théorème fondamental du Bac L)
  </text>

  <!-- Root -->
  <circle cx="80" cy="190" r="18" fill="#db2777" />
  <text x="80" y="195" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">Ω</text>

  <!-- Level 1 branches -->
  <line x1="98" y1="180" x2="260" y2="110" stroke="#db2777" stroke-width="2.5" />
  <text x="165" y="135" font-size="12" font-weight="bold" fill="#9d174d">P(A)</text>
  <line x1="98" y1="200" x2="260" y2="270" stroke="#db2777" stroke-width="2.5" />
  <text x="165" y="250" font-size="12" font-weight="bold" fill="#9d174d">P(Ā) = 1 - P(A)</text>

  <!-- Nodes A and A-bar -->
  <circle cx="275" cy="110" r="16" fill="#be185d" />
  <text x="275" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">A</text>

  <circle cx="275" cy="270" r="16" fill="#9d174d" />
  <text x="275" y="275" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">Ā</text>

  <!-- Level 2 branches from A -->
  <line x1="291" y1="100" x2="450" y2="70" stroke="#059669" stroke-width="2" />
  <text x="350" y="75" font-size="11" font-weight="bold" fill="#047857">P_A(B)</text>
  <line x1="291" y1="120" x2="450" y2="150" stroke="#dc2626" stroke-width="2" />
  <text x="350" y="145" font-size="11" font-weight="bold" fill="#b91c1c">P_A(B̄)</text>

  <!-- Nodes from A -->
  <circle cx="465" cy="70" r="14" fill="#059669" />
  <text x="465" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B</text>

  <circle cx="465" cy="150" r="14" fill="#dc2626" />
  <text x="465" y="154" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B̄</text>

  <!-- Level 2 branches from A-bar -->
  <line x1="291" y1="260" x2="450" y2="230" stroke="#059669" stroke-width="2" />
  <text x="350" y="235" font-size="11" font-weight="bold" fill="#047857">P_Ā(B)</text>
  <line x1="291" y1="280" x2="450" y2="310" stroke="#dc2626" stroke-width="2" />
  <text x="350" y="305" font-size="11" font-weight="bold" fill="#b91c1c">P_Ā(B̄)</text>

  <!-- Nodes from A-bar -->
  <circle cx="465" cy="230" r="14" fill="#059669" />
  <text x="465" y="234" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B</text>

  <circle cx="465" cy="310" r="14" fill="#dc2626" />
  <text x="465" y="314" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">B̄</text>

  <!-- Outcomes and Probabilities -->
  <text x="500" y="75" font-size="12" font-weight="bold" fill="#065f46">Issue A ∩ B : P(A ∩ B) = P(A) × P_A(B)</text>
  <text x="500" y="155" font-size="12" font-weight="bold" fill="#991b1b">Issue A ∩ B̄ : P(A ∩ B̄) = P(A) × P_A(B̄)</text>
  <text x="500" y="235" font-size="12" font-weight="bold" fill="#065f46">Issue Ā ∩ B : P(Ā ∩ B) = P(Ā) × P_Ā(B)</text>
  <text x="500" y="315" font-size="12" font-weight="bold" fill="#991b1b">Issue Ā ∩ B̄ : P(Ā ∩ B̄) = P(Ā) × P_Ā(B̄)</text>

  <!-- Law of total probability box -->
  <rect x="180" y="335" width="560" height="35" rx="8" fill="#ffffff" stroke="#db2777" stroke-width="1.5" />
  <text x="460" y="357" text-anchor="middle" font-size="11" font-weight="bold" fill="#831843">
    Formule des probabilités totales : P(B) = P(A ∩ B) + P(Ā ∩ B) = P(A)·P_A(B) + P(Ā)·P_Ā(B)
  </text>
</svg>`;

// =========================================================================
// LEÇON L-5 : FONCTIONS LOGARITHME NÉPÉRIEN ET EXPONENTIELLE
// =========================================================================
export const LESSON_5_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-5`,
  number: `Leçon L-5`,
  title: `Fonctions Logarithme Népérien et Exponentielle`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `65 min d'étude approfondie`,
  description: `Définitions, propriétés algébriques fondamentales, résolution d'équations et inéquations, limites remarquables, dérivation et tracés complets de courbes avec bijections réciproques.`,
  image: {
    caption: `Figure 5 : Courbes symétriques des fonctions réciproques y = exp(x) et y = ln(x) par rapport à la droite y = x.`,
    svgContent: SVG_MATH_TLE_L_LN_EXP
  },
  diagram: {
    title: `Fonctions Logarithme et Exponentielle`,
    svgContent: SVG_MATH_TLE_L_LN_EXP
  },
  introduction: `Les fonctions logarithme népérien et exponentielle sont omniprésentes dans l'analyse des phénomènes économiques et humains en Afrique : calcul des intérêts composés dans les banques sénégalaises, croissance exponentielle d'une population ou d'une épidémie, échelle logarithmique de mesure de l'intensité sonore ou du pouvoir d'achat. 
Historiquement inventé par John Napier (Neper) pour transformer les produits fastidieux en additions simples, le logarithme népérien est l'unique fonction qui transforme un produit en somme : ln(a·b) = ln(a) + ln(b). Sa réciproque, la fonction exponentielle, croît plus vite que toute puissance de x. 
Ce chapitre est la pièce maîtresse du programme d'analyse de Terminale L au Baccalauréat sénégalais.`,
  conclusion: `En conclusion, les fonctions ln et exp sont indissociables. La relation d'équivalence absolue : y = e^x ⟺ x = ln(y) (pour y > 0) permet de résoudre instantanément toutes les équations transcendantes du Bac. Pour toute fonction composée, les formules de dérivation [ln(u)]' = u'/u et [e^u]' = u'·e^u permettent de calculer la dérivée sans hésitation et de dresser le tableau de variations en toute sécurité.`,
  sections: [
    {
      title: `I. LA FONCTION LOGARITHME NÉPÉRIEN (ln)`,
      subsections: [
        {
          subtitle: `A. Définition et ensemble de définition`,
          content: [
            `Définition rigoureuse : La fonction logarithme népérien, notée ln, est l'unique primitive de la fonction x ↦ 1/x sur l'intervalle ]0 ; +∞[ qui s'annule en 1 :`,
            `ln(1) = 0 et pour tout x > 0, (ln x)' = 1/x.`,
            `Domaine de validité : L'expression ln(U(x)) n'existe que si et seulement si U(x) est STRICTEMENT POSITIF (U(x) > 0).`,
            `Exemple immédiat : La fonction f(x) = ln(3x - 6) a pour domaine l'intervalle ]2 ; +∞[ car 3x - 6 > 0 ⟺ x > 2.`
          ]
        },
        {
          subtitle: `B. Propriétés algébriques fondamentales (Le cœur du calcul)`,
          content: [
            `Pour tous réels a > 0 et b > 0, et pour tout entier relatif n :`,
            `1. Produit : ln(a × b) = ln(a) + ln(b).`,
            `2. Inverse : ln(1 / a) = -ln(a).`,
            `3. Quotient : ln(a / b) = ln(a) - ln(b).`,
            `4. Puissance : ln(a^n) = n × ln(a).`,
            `5. Racine carrée : ln(√a) = (1/2) × ln(a).`,
            `Démonstration de ln(a/b) = ln(a) - ln(b) : ln(a/b) = ln(a × (1/b)) = ln(a) + ln(1/b) = ln(a) + (-ln(b)) = ln(a) - ln(b).`,
            `Valeur du nombre d'Euler e : Il existe un unique réel noté e tel que ln(e) = 1. Sa valeur approchée est e ≈ 2,71828...`
          ]
        },
        {
          subtitle: `C. Limites remarquables et étude de la fonction ln`,
          content: [
            `Limites aux bornes :`,
            `• lim [x→+∞] ln(x) = +∞.`,
            `• lim [x→0, x>0] ln(x) = -∞ (la droite d'équation x = 0, l'axe des ordonnées, est asymptote verticale à la courbe de ln).`,
            `Dérivée et variations : Pour tout x > 0, (ln x)' = 1/x > 0. La fonction ln est donc STRICTEMENT CROISSANTE sur ]0 ; +∞[.`,
            `Propriété de comparaison : Pour tous a, b > 0 :`,
            `• ln(a) = ln(b) ⟺ a = b.`,
            `• ln(a) < ln(b) ⟺ a < b.`,
            `• ln(x) > 0 ⟺ x > 1, et ln(x) < 0 ⟺ 0 < x < 1.`
          ]
        }
      ]
    },
    {
      title: `II. LA FONCTION EXPONENTIELLE (exp)`,
      subsections: [
        {
          subtitle: `A. Définition comme bijection réciproque de ln`,
          content: [
            `La fonction ln étant continue et strictement croissante de ]0 ; +∞[ sur R, le théorème de la bijection affirme qu'elle admet une fonction réciproque, appelée fonction exponentielle et notée exp ou x ↦ e^x.`,
            `Définition équivalente fondamentale : Pour tout réel x et pour tout réel y > 0 :`,
            `e^x = y ⟺ x = ln(y).`,
            `Identités remarquables :`,
            `• Pour tout réel x : ln(e^x) = x.`,
            `• Pour tout réel x > 0 : e^(ln x) = x.`,
            `• e⁰ = 1 et e¹ = e ≈ 2,718.`
          ]
        },
        {
          subtitle: `B. Propriétés algébriques et dérivée de l'exponentielle`,
          content: [
            `Pour tous réels a et b :`,
            `1. e^(a + b) = e^a × e^b.`,
            `2. e^(-a) = 1 / e^a.`,
            `3. e^(a - b) = e^a / e^b.`,
            `4. (e^a)^n = e^(n·a).`,
            `Dérivée : La fonction exponentielle est dérivable sur R et sa dérivée est elle-même :`,
            `(e^x)' = e^x.`,
            `Puisque pour tout réel x, e^x > 0 (strictement positif), la fonction exponentielle est STRICTEMENT CROISSANTE sur R tout entier.`,
            `Limites aux bornes :`,
            `• lim [x→+∞] e^x = +∞.`,
            `• lim [x→-∞] e^x = 0 (la droite d'équation y = 0, l'axe des abscisses, est asymptote horizontale à la courbe en -∞).`
          ]
        },
        {
          subtitle: `C. Dérivées des fonctions composées ln(u) et exp(u)`,
          content: [
            `Si u est une fonction dérivable sur un intervalle I :`,
            `• Si u(x) > 0 sur I : [ln(u(x))]' = u'(x) / u(x).`,
            `• Pour tout x ∈ I : [e^(u(x))]' = u'(x) × e^(u(x)).`,
            `Exemple 1 : f(x) = ln(x² + 3) ⟹ f'(x) = 2x / (x² + 3).`,
            `Exemple 2 : g(x) = e^(-2x + 1) ⟹ g'(x) = -2·e^(-2x + 1).`
          ]
        }
      ]
    },
    {
      title: `III. RÉSOLUTION D'ÉQUATIONS ET INÉQUATIONS TYPES DU BACCALAURÉAT`,
      subsections: [
        {
          subtitle: `A. Équations avec ln et changement de variable`,
          content: [
            `Exemple 1 : Résoudre dans R l'équation : ln(x - 2) + ln(x + 1) = ln(4).`,
            `Étape 1 : Domaine de validité : x - 2 > 0 et x + 1 > 0 ⟹ x > 2. Donc D_E = ]2 ; +∞[.`,
            `Étape 2 : Application des propriétés : ln[(x - 2)(x + 1)] = ln(4) ⟺ (x - 2)(x + 1) = 4.`,
            `Étape 3 : Résolution : x² - x - 2 = 4 ⟺ x² - x - 6 = 0.`,
            `Discriminant : Δ = (-1)² - 4(1)(-6) = 1 + 24 = 25 = 5².`,
            `Racines : x₁ = (1 - 5)/2 = -2 et x₂ = (1 + 5)/2 = 3.`,
            `Étape 4 : Confrontation au domaine D_E : -2 ∉ ]2 ; +∞[ (rejetée) ; 3 ∈ ]2 ; +∞[ (retenue).`,
            `Conclusion : L'ensemble des solutions est S = {3}.`
          ]
        },
        {
          subtitle: `B. Équations avec exponentielles et trinôme du second degré`,
          content: [
            `Exemple 2 : Résoudre dans R l'équation : e^(2x) - 3e^x + 2 = 0.`,
            `On remarque que e^(2x) = (e^x)². Posons le changement de variable X = e^x avec la contrainte stricte X > 0.`,
            `L'équation devient un trinôme du second degré : X² - 3X + 2 = 0.`,
            `Discriminant : Δ = 9 - 8 = 1. Racines : X₁ = (3 - 1)/2 = 1 et X₂ = (3 + 1)/2 = 2.`,
            `Retour à la variable x :`,
            `• X = 1 ⟺ e^x = 1 ⟺ x = ln(1) = 0.`,
            `• X = 2 ⟺ e^x = 2 ⟺ x = ln(2).`,
            `Les deux solutions sont valides : S = {0 ; ln(2)}.`
          ]
        }
      ]
    },
    {
      title: `IV. APPLICATION ÉCONOMIQUE : INTÉRÊTS COMPOSÉS ET CROISSANCE CONTINUE`,
      subsections: [
        {
          subtitle: `A. Modélisation d'un placement financier à Dakar`,
          content: [
            `Un opérateur économique place un capital C₀ = 2 000 000 FCFA dans une banque de la place à un taux d'intérêt annuel composé de 5%.`,
            `Au bout de n années, le capital acquis est donné par la formule : C_n = C₀ × (1 + 0,05)^n = 2 000 000 × (1,05)^n.`,
            `Question type Bac : Au bout de combien d'années le capital aura-t-il doublé (atteint 4 000 000 FCFA) ?`,
            `Résolution mathématique avec le logarithme népérien :`,
            `2 000 000 × (1,05)^n ≥ 4 000 000 ⟺ (1,05)^n ≥ 2.`,
            `La fonction ln étant strictement croissante sur ]0 ; +∞[, on applique ln de chaque côté :`,
            `ln[(1,05)^n] ≥ ln(2) ⟺ n × ln(1,05) ≥ ln(2).`,
            `Puisque 1,05 > 1, ln(1,05) > 0. On peut diviser sans changer le sens de l'inégalité :`,
            `n ≥ ln(2) / ln(1,05).`,
            `Calcul numérique : ln(2) ≈ 0,69315 et ln(1,05) ≈ 0,04879.`,
            `n ≥ 0,69315 / 0,04879 ≈ 14,20 années.`,
            `Conclusion : Le capital aura plus que doublé au bout de 15 années pleines.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-6 : SUITES NUMÉRIQUES
// =========================================================================
export const LESSON_6_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-6`,
  number: `Leçon L-6`,
  title: `Suites Numériques et Modélisation Financière`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `60 min d'étude approfondie`,
  description: `Suites arithmétiques et géométriques, terme général u_n, calcul des sommes de termes consécutifs S_n, sens de variation, limites et applications économiques aux tontines et crédits au Sénégal.`,
  image: {
    caption: `Figure 6 : Représentation graphique des suites arithmétiques (alignement linéaire) et géométriques (croissance exponentielle).`,
    svgContent: SVG_MATH_TLE_L_STATISTIQUES
  },
  diagram: {
    title: `Suites Numériques`,
    svgContent: SVG_MATH_TLE_L_STATISTIQUES
  },
  introduction: `Une suite numérique est une suite ordonnée infinie de nombres réels indexée par les entiers naturels n ∈ N. C'est l'outil par excellence pour modéliser des évolutions temporelles discrètes (année après année, mois après mois) : cotisations dans une tontine de quartier à Dakar, progression d'un cheptel dans le Ferlo, remboursements mensuels d'un prêt de microfinance ou dépréciation annuelle d'un véhicule de transport Ndiaga Ndiaye. 
En Terminale L, le programme officiel met l'accent sur les deux grandes familles de suites : les suites arithmétiques (progression constante par addition d'une raison r) et les suites géométriques (progression par multiplication d'une raison q).`,
  conclusion: `En conclusion, les suites arithmétiques et géométriques permettent de résoudre l'intégralité des problèmes d'évolution discrète au Baccalauréat L. La distinction est simple : progression arithmétique = accroissement additif constant r (modèle linéaire u_n = u₀ + nr) ; progression géométrique = accroissement multiplicatif constant q (modèle exponentiel u_n = u₀ × q^n). La maîtrise parfaite des formules de sommes S_n = (nombre de termes) × (premier + dernier)/2 et S_n = u₀ × (1 - q^N)/(1 - q) est indispensable.`,
  sections: [
    {
      title: `I. GÉNÉRALITÉS SUR LES SUITES NUMÉRIQUES`,
      subsections: [
        {
          subtitle: `A. Définition et modes de génération`,
          content: [
            `Une suite numérique réelle u est une application de N (ou d'une partie de N) dans R. L'image d'un entier n est notée u_n et appelée terme général de la suite.`,
            `Deux modes fondamentaux de définition :`,
            `1. Forme explicite : u_n est donné directement en fonction de n (exemple : u_n = 3n² - 5). Chaque terme se calcule immédiatement sans connaître les précédents.`,
            `2. Forme par récurrence : On donne le premier terme u₀ et une relation liant chaque terme au suivant : u_(n+1) = f(u_n) (exemple : u₀ = 4 et u_(n+1) = 2u_n + 1).`
          ]
        },
        {
          subtitle: `B. Sens de variation d'une suite`,
          content: [
            `• Une suite (u_n) est dite CROISSANTE si pour tout entier n, u_(n+1) ≥ u_n (c'est-à-dire u_(n+1) - u_n ≥ 0).`,
            `• Une suite (u_n) est dite DÉCROISSANTE si pour tout entier n, u_(n+1) ≤ u_n (c'est-à-dire u_(n+1) - u_n ≤ 0).`,
            `Méthode pratique : On calcule la différence u_(n+1) - u_n et on étudie son signe pour tout n ∈ N.`
          ]
        }
      ]
    },
    {
      title: `II. LES SUITES ARITHMÉTIQUES`,
      subsections: [
        {
          subtitle: `A. Définition et raison`,
          content: [
            `Définition : Une suite (u_n) est dite arithmétique s'il existe un nombre réel constant r, appelé raison de la suite, tel que pour tout entier n :`,
            `u_(n+1) = u_n + r.`,
            `Sens de variation :`,
            `• Si r > 0, la suite est strictement croissante.`,
            `• Si r < 0, la suite est strictement décroissante.`,
            `• Si r = 0, la suite est constante.`
          ]
        },
        {
          subtitle: `B. Formule du terme général et somme des termes`,
          content: [
            `Théorème du terme général : Si (u_n) est une suite arithmétique de premier terme u₀ et de raison r, alors pour tout entier n :`,
            `u_n = u₀ + n·r.`,
            `Si le premier terme est u₁, alors : u_n = u₁ + (n - 1)·r.`,
            `De manière générale, pour deux indices quelconques n et p :`,
            `u_n = u_p + (n - p)·r.`,
            `Théorème de la somme des termes consécutifs : La somme S_n = u₀ + u₁ + ... + u_n (contenant n + 1 termes) vaut :`,
            `S_n = (Nombre de termes) × [ (Premier terme + Dernier terme) / 2 ]`,
            `S_n = (n + 1) × [ (u₀ + u_n) / 2 ].`,
            `Cas particulier célèbre (somme des n premiers entiers) : 1 + 2 + 3 + ... + n = n(n + 1) / 2.`
          ]
        }
      ]
    },
    {
      title: `III. LES SUITES GÉOMÉTRIQUES`,
      subsections: [
        {
          subtitle: `A. Définition et raison`,
          content: [
            `Définition : Une suite (u_n) est dite géométrique s'il existe un nombre réel constant non nul q, appelé raison de la suite, tel que pour tout entier n :`,
            `u_(n+1) = u_n × q.`,
            `Formule du terme général : Si (u_n) est une suite géométrique de premier terme u₀ et de raison q, alors pour tout entier n :`,
            `u_n = u₀ × q^n.`,
            `Si le premier terme est u₁, alors : u_n = u₁ × q^(n - 1).`,
            `De manière générale : u_n = u_p × q^(n - p).`
          ]
        },
        {
          subtitle: `B. Somme des termes consécutifs et limites`,
          content: [
            `Théorème de la somme (pour q ≠ 1) : La somme S_n = u₀ + u₁ + ... + u_n de N = n + 1 termes consécutifs d'une suite géométrique de raison q est donnée par :`,
            `S_n = (Premier terme) × [ (1 - q^(Nombre de termes)) / (1 - q) ] = u₀ × [ (1 - q^(n + 1)) / (1 - q) ].`,
            `Démonstration pas-à-pas de la formule de somme :`,
            `Considérons S = 1 + q + q² + ... + q^n.`,
            `Multiplions par q : q·S = q + q² + q³ + ... + q^(n+1).`,
            `En soustrayant membre à membre S - q·S : tous les termes intermédiaires s'annulent par télescopage :`,
            `S(1 - q) = 1 - q^(n+1). Comme q ≠ 1, on divise par (1 - q) d'où S = (1 - q^(n+1))/(1 - q).`,
            `Convergence d'une suite géométrique (q > 0) :`,
            `• Si 0 < q < 1 : lim [n→+∞] q^n = 0 (la suite converge vers 0).`,
            `• Si q > 1 : lim [n→+∞] q^n = +∞ (la suite diverge vers l'infini).`
          ]
        }
      ]
    },
    {
      title: `IV. GRAND PROBLÈME DE SYNTHÈSE ÉCONOMIQUE AU SÉNÉGAL`,
      subsections: [
        {
          subtitle: `A. Épargne progressive dans une tontine villageoise`,
          content: [
            `Dans un village près de Kaolack, une femme décide de participer à une tontine. Elle verse 10 000 FCFA le premier mois (u₁ = 10 000 FCFA), puis chaque mois suivant, elle augmente son versement de 2 000 FCFA par rapport au mois précédent.`,
            `1. Nature de la suite : u_(n+1) = u_n + 2 000. Il s'agit d'une suite arithmétique de premier terme u₁ = 10 000 et de raison r = 2 000.`,
            `2. Montant versé au 12ème mois (u₁₂) : u₁₂ = u₁ + (12 - 1)·r = 10 000 + 11 × 2 000 = 10 000 + 22 000 = 32 000 FCFA.`,
            `3. Montant total épargné au bout d'un an (12 mois) :`,
            `S₁₂ = u₁ + u₂ + ... + u₁₂ = 12 × [ (u₁ + u₁₂) / 2 ] = 12 × [ (10 000 + 32 000) / 2 ] = 12 × 21 000 = 252 000 FCFA.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-7 : STATISTIQUE À DEUX VARIABLES ET AJUSTEMENT LINÉAIRE
// =========================================================================
export const LESSON_7_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-7`,
  number: `Leçon L-7`,
  title: `Statistique à Deux Variables et Ajustement Linéaire`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `60 min d'étude approfondie`,
  description: `Séries statistiques doubles (X, Y), nuage de points, point moyen G, méthode d'ajustement de Mayer, méthode des moindres carrés, covariance, corrélation linéaire et extrapolations économiques.`,
  image: {
    caption: `Figure 7 : Nuage de points, partage en deux sous-groupes, calcul des points moyens partiels G₁ et G₂ et tracé de la droite de Mayer.`,
    svgContent: SVG_MATH_TLE_L_STATISTIQUES
  },
  diagram: {
    title: `Statistique et Ajustement Linéaire`,
    svgContent: SVG_MATH_TLE_L_STATISTIQUES
  },
  introduction: `Dans l'analyse socio-économique et démographique moderne au Sénégal (suivi du chiffre d'affaires d'une entreprise selon le budget publicitaire, évolution de la production agricole selon la pluviométrie, consommation d'électricité selon la température à Dakar), les décideurs recueillent des données simultanées sur deux grandeurs X et Y. 
L'objet de la statistique bidimensionnelle est d'analyser s'il existe une liaison ou dépendance statistique entre ces deux caractères et, lorsque le nuage de points présente une forme allongée, de déterminer l'équation d'une droite d'ajustement permettant d'effectuer des prévisions fiables pour l'avenir.`,
  conclusion: `En conclusion, la statistique à deux variables fournit à l'élève de Terminale L un outil concret de prévision économique. Au Baccalauréat, la méthode de Mayer est systématiquement testée : division rigoureuse de l'échantillon en deux sous-groupes de même effectif (ou différant d'un seul individu si N est impair), calcul des moyennes partielles x̄ et ȳ, détermination du coefficient directeur a = (ȳ₂ - ȳ₁)/(x̄₂ - x̄₁) et de l'ordonnée à l'origine b = ȳ₁ - a·x̄₁, puis estimation numérique claire et commentée.`,
  sections: [
    {
      title: `I. SÉRIES STATISTIQUES DOUBLES ET NUAGE DE POINTS`,
      subsections: [
        {
          subtitle: `A. Définition et tableau de données`,
          content: [
            `Une série statistique double est l'observation simultanée de deux caractères quantitatifs X et Y sur une même population de taille N.`,
            `Les données se présentent sous la forme de N couples de valeurs : (x₁, y₁), (x₂, y₂), ..., (x_N, y_N).`,
            `Nuage de points : Dans un repère orthogonal du plan, l'ensemble des points M_i(x_i ; y_i) forme ce qu'on appelle le nuage de points associé à la série.`,
            `Point moyen global G : Le point moyen du nuage est le point noté G de coordonnées (x̄ ; ȳ) où x̄ est la moyenne arithmétique des x_i et ȳ la moyenne arithmétique des y_i :`,
            `x̄ = (1/N) ∑ [i=1 à N] x_i et ȳ = (1/N) ∑ [i=1 à N] y_i.`
          ]
        }
      ]
    },
    {
      title: `II. LA MÉTHODE D'AJUSTEMENT LINÉAIRE DE MAYER`,
      subsections: [
        {
          subtitle: `A. Algorithme officiel de Mayer`,
          content: [
            `Lorsque le nuage de points a une forme allongée suggérant une corrélation linéaire, la méthode de Mayer consiste à ajuster le nuage par une droite passant par deux points moyens partiels.`,
            `Étape 1 : Classer les N points par ordre croissant des abscisses x_i.`,
            `Étape 2 : Partager la série ordonnée en deux sous-groupes d'effectifs aussi égaux que possible :`,
            `• Si N est pair (ex : N = 8) : deux groupes de N/2 = 4 points.`,
            `• Si N est impair (ex : N = 7) : un groupe de 4 points et un groupe de 3 points (ou convention indiquée par l'énoncé).`,
            `Étape 3 : Calculer le point moyen G₁(x̄₁ ; ȳ₁) du premier groupe et le point moyen G₂(x̄₂ ; ȳ₂) du deuxième groupe.`,
            `Étape 4 : Déterminer l'équation de la droite (G₁G₂) de la forme y = ax + b :`,
            `• Pente : a = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁).`,
            `• Ordonnée à l'origine : b = ȳ₁ - a·x̄₁ (ou b = ȳ₂ - a·x̄₂).`,
            `Propriété remarquable : La droite de Mayer passe également par le point moyen global G(x̄ ; ȳ).`
          ]
        }
      ]
    },
    {
      title: `III. EXERCICE TYPE BAC RÉSOLU PAS-À-PAS`,
      subsections: [
        {
          subtitle: `A. Données sur les ventes d'arachide à Touba`,
          content: [
            `Le tableau suivant donne l'évolution du chiffre d'affaires Y (en millions de FCFA) d'une coopérative d'arachide en fonction des dépenses publicitaires et logistiques X (en centaines de mille FCFA) sur 6 années consécutives :`,
            `Année 1 : X = 1, Y = 10`,
            `Année 2 : X = 2, Y = 14`,
            `Année 3 : X = 3, Y = 17`,
            `Année 4 : X = 4, Y = 22`,
            `Année 5 : X = 5, Y = 25`,
            `Année 6 : X = 6, Y = 30`,
            `1. Partage en deux sous-groupes (N = 6, donc deux groupes de 3 points) :`,
            `• Groupe 1 : {(1 ; 10), (2 ; 14), (3 ; 17)}`,
            `x̄₁ = (1 + 2 + 3) / 3 = 6 / 3 = 2`,
            `ȳ₁ = (10 + 14 + 17) / 3 = 41 / 3 ≈ 13,67`,
            `• Groupe 2 : {(4 ; 22), (5 ; 25), (6 ; 30)}`,
            `x̄₂ = (4 + 5 + 6) / 3 = 15 / 3 = 5`,
            `ȳ₂ = (22 + 25 + 30) / 3 = 77 / 3 ≈ 25,67`,
            `2. Calcul des coefficients de la droite de Mayer :`,
            `a = (ȳ₂ - ȳ₁) / (x̄₂ - x̄₁) = (77/3 - 41/3) / (5 - 2) = (36/3) / 3 = 12 / 3 = 4.`,
            `b = ȳ₁ - a·x̄₁ = (41/3) - 4 × 2 = 41/3 - 24/3 = 17/3 ≈ 5,67.`,
            `Équation de la droite de Mayer : y = 4x + 17/3 (ou y = 4x + 5,67).`,
            `3. Prévision : Si l'entreprise investit X = 10 centaines de mille FCFA (soit 1 000 000 FCFA), quelle sera l'estimation du chiffre d'affaires ?`,
            `y = 4(10) + 5,67 = 40 + 5,67 = 45,67 millions de FCFA.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-8 : CALCUL DES PROBABILITÉS
// =========================================================================
export const LESSON_8_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-8`,
  number: `Leçon L-8`,
  title: `Calcul des Probabilités et Variables Aléatoires`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `65 min d'étude approfondie`,
  description: `Espaces probabilisés, équiprobabilité, probabilités conditionnelles P_B(A), formule des probabilités totales, indépendance d'événements, variable aléatoire discrète, loi de probabilité et espérance mathématique.`,
  image: {
    caption: `Figure 8 : Arbre de probabilités pondéré avec calcul des probabilités des intersections et formule des probabilités totales.`,
    svgContent: SVG_MATH_TLE_L_PROBABILITES
  },
  diagram: {
    title: `Probabilités et Arbres Pondérés`,
    svgContent: SVG_MATH_TLE_L_PROBABILITES
  },
  introduction: `Le calcul des probabilités est né historiquement d'échanges épistolaires entre Blaise Pascal et Pierre de Fermat au XVIIe siècle pour modéliser les jeux de hasard. Aujourd'hui, il constitue le socle mathématique indispensable de la gestion des risques au Sénégal : fixation des primes d'assurance automobile, évaluation de la fiabilité des réseaux de télécommunication, sondages d'opinion politique et études épidémiologiques en santé publique. 
En Terminale L, après avoir maîtrisé le dénombrement, l'élève apprend à quantifier formellement la chance qu'un événement se produise, à mettre à jour cette probabilité lorsqu'une information préalable est connue (probabilité conditionnelle) et à calculer le gain moyen espéré d'une opération aléatoire via la variable aléatoire.`,
  conclusion: `En conclusion, le calcul des probabilités en Terminale L repose sur une rigueur de formalisation absolue. Les quatre théorèmes fondamentaux à maîtriser pour le Baccalauréat sont : 1) La probabilité d'un événement sous équiprobabilité P(A) = Card(A)/Card(Ω), 2) La formule des probabilités totales P(B) = P(A ∩ B) + P(Ā ∩ B), 3) Le test d'indépendance de deux événements P(A ∩ B) = P(A) × P(B), et 4) L'espérance mathématique E(X) = ∑ x_i·p_i mesurant le gain moyen à long terme.`,
  sections: [
    {
      title: `I. VOCABULAIRE DES PROBABILITÉS ET CAS D'ÉQUIPROBABILITÉ`,
      subsections: [
        {
          subtitle: `A. Événements et axiomes de probabilité`,
          content: [
            `Une expérience aléatoire est une expérience dont le résultat ne peut être prévu à l'avance avec certitude et qui, répétée dans les mêmes conditions, peut donner des issues différentes.`,
            `L'ensemble de toutes les issues possibles est appelé univers et noté Ω. Un événement A est un sous-ensemble de Ω.`,
            `• Événement certain : Ω, de probabilité P(Ω) = 1.`,
            `• Événement impossible : ∅, de probabilité P(∅) = 0.`,
            `• Événement contraire : Noté Ā (ou A bar), constitué des issues qui n'appartiennent pas à A : P(Ā) = 1 - P(A).`,
            `• Réunion d'événements : P(A ∪ B) = P(A) + P(B) - P(A ∩ B).`
          ]
        },
        {
          subtitle: `B. Hypothèse d'équiprobabilité`,
          content: [
            `Lorsque toutes les issues élémentaires ont exactement la même chance de se produire (dés parfaitement équilibrés, boules indiscernables au toucher dans une urne, tirage au sort équitable), on dit qu'il y a équiprobabilité.`,
            `Formule fondamentale d'équiprobabilité :`,
            `P(A) = Nombre de cas favorables / Nombre de cas possibles = Card(A) / Card(Ω).`
          ]
        }
      ]
    },
    {
      title: `II. PROBABILITÉS CONDITIONNELLES ET ARBRES PONDÉRÉS`,
      subsections: [
        {
          subtitle: `A. Définition et notation P_B(A)`,
          content: [
            `Soit B un événement de probabilité non nulle (P(B) > 0). On appelle probabilité conditionnelle de l'événement A sachant que l'événement B est réalisé le quotient noté P(A | B) ou P_B(A) :`,
            `P_B(A) = P(A ∩ B) / P(B).`,
            `Conséquence immédiate (Formule des probabilités composées) :`,
            `P(A ∩ B) = P(B) × P_B(A) = P(A) × P_A(B).`
          ]
        },
        {
          subtitle: `B. Formule des probabilités totales`,
          content: [
            `Théorème fondamental : Si A et Ā forment une partition de l'univers Ω (avec P(A) ≠ 0 et P(Ā) ≠ 0), alors pour tout événement B :`,
            `P(B) = P(A ∩ B) + P(Ā ∩ B) = P(A) × P_A(B) + P(Ā) × P_Ā(B).`,
            `Règle de l'arbre pondéré : La probabilité de l'événement situé au bout d'une branche s'obtient en multipliant les probabilités rencontrées le long du chemin. La probabilité globale d'un événement est la somme des probabilités de tous les chemins menant à cet événement.`
          ]
        },
        {
          subtitle: `C. Indépendance de deux événements`,
          content: [
            `Définition : Deux événements A et B sont dits indépendants si et seulement si :`,
            `P(A ∩ B) = P(A) × P(B).`,
            `Si P(B) > 0, cette relation équivaut à : P_B(A) = P(A), ce qui signifie que la réalisation de B n'a aucune influence sur la probabilité de A.`
          ]
        }
      ]
    },
    {
      title: `III. VARIABLE ALÉATOIRE DISCRÈTE ET ESPÉRANCE MATHÉMATIQUE`,
      subsections: [
        {
          subtitle: `A. Définition et loi de probabilité`,
          content: [
            `Une variable aléatoire discrète X sur un univers Ω est une fonction qui associe un nombre réel à chaque issue de Ω.`,
            `L'ensemble des valeurs prises par X est l'ensemble fini {x₁, x₂, ..., x_k}.`,
            `Déterminer la loi de probabilité de X consiste à calculer pour chaque valeur x_i la probabilité p_i = P(X = x_i).`,
            `Condition de cohérence : La somme de toutes les probabilités doit obligatoirement être égale à 1 : ∑ [i=1 à k] p_i = 1.`
          ]
        },
        {
          subtitle: `B. Espérance mathématique, variance et écart-type`,
          content: [
            `1. Espérance mathématique : Notée E(X), elle représente la valeur moyenne théorique prise par X :`,
            `E(X) = x₁·p₁ + x₂·p₂ + ... + x_k·p_k = ∑ [i=1 à k] x_i·p_i.`,
            `Interprétation financière : Si X représente le gain algébrique d'un joueur dans une loterie :`,
            `• Si E(X) > 0, le jeu est favorable au joueur.`,
            `• Si E(X) < 0, le jeu est défavorable au joueur (bénéfique à l'organisateur).`,
            `• Si E(X) = 0, le jeu est dit équitable.`,
            `2. Variance : V(X) = ∑ p_i·(x_i - E(X))² = [∑ p_i·x_i²] - [E(X)]².`,
            `3. Écart-type : σ(X) = √V(X) (mesure la dispersion des gains autour de la moyenne).`
          ]
        }
      ]
    },
    {
      title: `IV. GRAND EXERCICE COMPLET RÉSOLU TYPE BACCALAURÉAT SÉNÉGALAIS`,
      subsections: [
        {
          subtitle: `A. Énoncé sur un test médical de dépistage`,
          content: [
            `Dans une région sahélienne au Sénégal, une maladie tropicale touche 2% de la population. On dispose d'un test de dépistage biologique dont les caractéristiques sont :`,
            `• Si une personne est malade (M), le test est positif (T) avec une probabilité de 95% : P_M(T) = 0,95.`,
            `• Si une personne est saine (M̄), le test est négatif (T̄) avec une probabilité de 98% : P_M̄(T̄) = 0,98.`,
            `On choisit au hasard un individu dans la population.`,
            `1. Arbre pondéré et probabilité que le test soit positif P(T) :`,
            `P(M) = 0,02 ⟹ P(M̄) = 1 - 0,02 = 0,98.`,
            `P_M(T) = 0,95 ⟹ P_M(T̄) = 0,05.`,
            `P_M̄(T̄) = 0,98 ⟹ P_M̄(T) = 1 - 0,98 = 0,02.`,
            `D'après la formule des probabilités totales :`,
            `P(T) = P(M ∩ T) + P(M̄ ∩ T) = P(M) × P_M(T) + P(M̄) × P_M̄(T)`,
            `P(T) = 0,02 × 0,95 + 0,98 × 0,02 = 0,019 + 0,0196 = 0,0386 (soit 3,86%).`,
            `2. Calcul de la valeur prédictive positive (probabilité que l'individu soit réellement malade sachant que le test est positif) :`,
            `P_T(M) = P(M ∩ T) / P(T) = 0,019 / 0,0386 ≈ 0,4922 (soit environ 49,2%).`,
            `Conclusion médicale surprenante : Même avec un test fiable à 95% et 98%, en raison de la rareté de la maladie (2%), une personne testée positive a moins d'une chance sur deux d'être réellement atteinte ! D'où la nécessité impérative d'un second test de confirmation.`
          ]
        }
      ]
    }
  ]
};
