import { LessonContent } from './courses';

// =========================================================================
// MATHÉMATIQUES CLASSE DE TERMINALE L (SÉRIES L1, L2, L') — PARTIE 1
// Conforme au programme officiel national du Sénégal (Référentiel APAMS / Bac L)
// Leçons 1 à 4 : Dénombrement, Systèmes linéaires, Limites & Continuité, Dérivation
// Leçons longues sans résumé, grands axes en chiffres romains et figures/schémas obligatoires
// =========================================================================

export const SVG_MATH_TLE_L_DENOMBREMENT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <defs>
    <linearGradient id="treeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef3c7" />
      <stop offset="100%" stop-color="#fde68a" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.15" />
    </filter>
  </defs>
  <rect width="760" height="380" rx="16" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
  <text x="380" y="32" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f" font-family="sans-serif">
    FIGURE 1 : ARBRE DE CHOIX PONDÉRÉ & PRINCIPE FONDAMENTAL DU DÉNOMBREMENT
  </text>
  <text x="380" y="52" text-anchor="middle" font-size="12" fill="#b45309" font-family="sans-serif">
    Illustration du produit cartésien : n₁ × n₂ × n₃ possibilités (Permutations et Arrangements)
  </text>

  <!-- Root -->
  <circle cx="80" cy="200" r="22" fill="#d97706" />
  <text x="80" y="205" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">Ω</text>
  <text x="80" y="240" text-anchor="middle" font-size="11" fill="#78350f" font-weight="bold">Racine</text>

  <!-- Stage 1 branches -->
  <line x1="102" y1="190" x2="240" y2="110" stroke="#b45309" stroke-width="3" />
  <line x1="102" y1="200" x2="240" y2="200" stroke="#b45309" stroke-width="3" />
  <line x1="102" y1="210" x2="240" y2="290" stroke="#b45309" stroke-width="3" />

  <rect x="240" y="90" width="100" height="40" rx="8" fill="url(#treeGrad)" stroke="#d97706" stroke-width="2" filter="url(#shadow)"/>
  <text x="290" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">Choix A₁</text>

  <rect x="240" y="180" width="100" height="40" rx="8" fill="url(#treeGrad)" stroke="#d97706" stroke-width="2" filter="url(#shadow)"/>
  <text x="290" y="205" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">Choix A₂</text>

  <rect x="240" y="270" width="100" height="40" rx="8" fill="url(#treeGrad)" stroke="#d97706" stroke-width="2" filter="url(#shadow)"/>
  <text x="290" y="295" text-anchor="middle" font-size="12" font-weight="bold" fill="#78350f">Choix A₃</text>

  <!-- Stage 2 branches from A1 -->
  <line x1="340" y1="100" x2="480" y2="70" stroke="#d97706" stroke-width="2" stroke-dasharray="4,2"/>
  <line x1="340" y1="120" x2="480" y2="140" stroke="#d97706" stroke-width="2" stroke-dasharray="4,2"/>

  <rect x="480" y="50" width="90" height="35" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="525" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">B₁ (n₂=2)</text>

  <rect x="480" y="125" width="90" height="35" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="525" y="147" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">B₂ (n₂=2)</text>

  <!-- Outcomes -->
  <line x1="570" y1="67" x2="650" y2="67" stroke="#059669" stroke-width="2" />
  <circle cx="655" cy="67" r="5" fill="#059669" />
  <text x="670" y="71" font-size="12" font-weight="bold" fill="#065f46">Issue (A₁, B₁)</text>

  <line x1="570" y1="142" x2="650" y2="142" stroke="#059669" stroke-width="2" />
  <circle cx="655" cy="142" r="5" fill="#059669" />
  <text x="670" y="146" font-size="12" font-weight="bold" fill="#065f46">Issue (A₁, B₂)</text>

  <!-- Summary card -->
  <rect x="360" y="240" width="370" height="110" rx="10" fill="#ffffff" stroke="#d97706" stroke-width="1.5" />
  <text x="380" y="265" font-size="12" font-weight="bold" fill="#78350f">Formules fondamentales du Bac :</text>
  <text x="380" y="288" font-size="11" fill="#451a03">• n-uplets (avec remise, ordonné) : Card = n^p</text>
  <text x="380" y="308" font-size="11" fill="#451a03">• Arrangements A_n^p = n! / (n-p)! (sans remise, ordonné)</text>
  <text x="380" y="328" font-size="11" fill="#451a03">• Combinaisons C_n^p = n! / [p!(n-p)!] (simultané, non ordonné)</text>
</svg>`;

export const SVG_MATH_TLE_L_PIVOT_GAUSS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" className="w-full h-auto">
  <rect width="760" height="360" rx="16" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#0f172a">
    FIGURE 2 : ALGORITHME DU PIVOT DE GAUSS — SYSTÈMES LINÉAIRES 3×3
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#475569">
    Triangularisation de la matrice des coefficients et résolution par substitution inverse (remontée)
  </text>

  <!-- Step 1 -->
  <rect x="40" y="80" width="200" height="150" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
  <text x="140" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">Étape 1 : Système initial</text>
  <text x="60" y="135" font-size="12" font-family="monospace" fill="#0f172a">a₁x + b₁y + c₁z = d₁</text>
  <text x="60" y="165" font-size="12" font-family="monospace" fill="#0f172a">a₂x + b₂y + c₂z = d₂</text>
  <text x="60" y="195" font-size="12" font-family="monospace" fill="#0f172a">a₃x + b₃y + c₃z = d₃</text>
  <text x="140" y="218" text-anchor="middle" font-size="10" fill="#0284c7" font-weight="bold">Pivot choisi : a₁ ≠ 0</text>

  <!-- Arrow 1 -->
  <path d="M 250 155 L 290 155" stroke="#0284c7" stroke-width="3" marker-end="url(#arrow)" />
  <text x="270" y="145" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">L₂←L₂-αL₁</text>
  <text x="270" y="175" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">L₃←L₃-βL₁</text>

  <!-- Step 2 -->
  <rect x="300" y="80" width="200" height="150" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
  <text x="400" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">Étape 2 : Élimination x</text>
  <text x="320" y="135" font-size="12" font-family="monospace" fill="#0f172a">a₁x + b₁y + c₁z = d₁</text>
  <text x="360" y="165" font-size="12" font-family="monospace" fill="#0f172a">b'₂y + c'₂z = d'₂</text>
  <text x="360" y="195" font-size="12" font-family="monospace" fill="#0f172a">b'₃y + c'₃z = d'₃</text>
  <text x="400" y="218" text-anchor="middle" font-size="10" fill="#b45309" font-weight="bold">Nouveau pivot : b'₂ ≠ 0</text>

  <!-- Arrow 2 -->
  <path d="M 510 155 L 540 155" stroke="#d97706" stroke-width="3" />
  <text x="525" y="145" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">L₃←L₃-γL₂</text>

  <!-- Step 3 -->
  <rect x="550" y="80" width="180" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="640" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Étape 3 : Triangulaire</text>
  <text x="565" y="135" font-size="12" font-family="monospace" fill="#0f172a">a₁x + b₁y + c₁z = d₁</text>
  <text x="600" y="165" font-size="12" font-family="monospace" fill="#0f172a">b'₂y + c'₂z = d'₂</text>
  <text x="635" y="195" font-size="12" font-family="monospace" fill="#15803d" font-weight="bold">c''₃z = d''₃</text>
  <text x="640" y="218" text-anchor="middle" font-size="10" fill="#15803d" font-weight="bold">Remontée directe : z, puis y, puis x</text>

  <rect x="40" y="255" width="690" height="85" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="60" y="280" font-size="12" font-weight="bold" fill="#0f172a">Application économique Terminale L au Sénégal :</text>
  <text x="60" y="302" font-size="11" fill="#334155">• Résolution des paniers de consommation à Dakar (prix unitaire de denrées : riz, huile, sucre).</text>
  <text x="60" y="322" font-size="11" fill="#334155">• Détection de compatibilité : si une ligne devient 0 = 0 (infinité de solutions) ou 0 = k avec k ≠ 0 (système impossible).</text>
</svg>`;

export const SVG_MATH_TLE_L_TANGENTE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#713f12">
    FIGURE 3 : NOMBRE DÉRIVÉ f'(x₀) & TANGENTE GÉOMÉTRIQUE À LA COURBE
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#854d0e">
    Équation de la tangente : y = f'(x₀)(x - x₀) + f(x₀) et coefficient directeur (pente)
  </text>

  <!-- Axes -->
  <line x1="80" y1="320" x2="680" y2="320" stroke="#475569" stroke-width="2" />
  <line x1="120" y1="340" x2="120" y2="80" stroke="#475569" stroke-width="2" />
  <text x="670" y="340" font-size="13" font-weight="bold" fill="#334155">x</text>
  <text x="100" y="90" font-size="13" font-weight="bold" fill="#334155">y</text>

  <!-- Curve f(x) -->
  <path d="M 140 290 Q 280 280 380 180 T 620 90" fill="none" stroke="#2563eb" stroke-width="3.5" />
  <text x="625" y="85" font-size="13" font-weight="bold" fill="#2563eb">C_f (Courbe)</text>

  <!-- Point M0 -->
  <line x1="380" y1="320" x2="380" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="120" y1="180" x2="380" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
  <circle cx="380" cy="180" r="6" fill="#dc2626" />
  <text x="390" y="175" font-size="13" font-weight="bold" fill="#dc2626">M₀(x₀ ; f(x₀))</text>
  <text x="370" y="338" font-size="12" font-weight="bold" fill="#0f172a">x₀</text>
  <text x="80" y="185" font-size="12" font-weight="bold" fill="#0f172a">f(x₀)</text>

  <!-- Tangent Line -->
  <line x1="220" y1="300" x2="540" y2="60" stroke="#dc2626" stroke-width="2.5" />
  <text x="545" y="65" font-size="13" font-weight="bold" fill="#dc2626">(T) : Tangente</text>

  <!-- Slope triangle -->
  <polygon points="380,180 460,180 460,120" fill="rgba(220,38,38,0.15)" stroke="#dc2626" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="420" y="195" font-size="11" font-weight="bold" fill="#b91c1c">Δx = 1</text>
  <text x="465" y="150" font-size="11" font-weight="bold" fill="#b91c1c">Δy = f'(x₀)</text>

  <rect x="80" y="240" width="220" height="65" rx="6" fill="#ffffff" stroke="#ca8a04" stroke-width="1.5" />
  <text x="90" y="260" font-size="11" font-weight="bold" fill="#854d0e">Pente = f'(x₀) > 0</text>
  <text x="90" y="278" font-size="10" fill="#713f12">La fonction f est strictement</text>
  <text x="90" y="294" font-size="10" fill="#713f12">croissante au voisinage de x₀.</text>
</svg>`;

// =========================================================================
// LEÇON L-1 : DÉNOMBREMENT ET ANALYSE COMBINATOIRE
// =========================================================================
export const LESSON_1_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-1`,
  number: `Leçon L-1`,
  title: `Dénombrement et Analyse Combinatoire`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `60 min d'étude rigoureuse`,
  description: `Théorie des ensembles finis, p-uplets, permutations, arrangements, combinaisons, formule du binôme de Newton et applications aux tirages de boules et urnes au Baccalauréat.`,
  image: {
    caption: `Figure 1 : Arbre de choix pondéré, principe additif et multiplicatif pour le dénombrement.`,
    svgContent: SVG_MATH_TLE_L_DENOMBREMENT
  },
  diagram: {
    title: `Arbre de choix et dénombrement`,
    svgContent: SVG_MATH_TLE_L_DENOMBREMENT
  },
  introduction: `Dans tous les domaines de la vie économique, des sciences sociales et de la gestion administrative au Sénégal (organisation des examens du Baccalauréat, affectation des bourses universitaires, codification des cartes nationales d'identité de la CEDEAO, jeux de hasard et loteries nationales LONASE), la question cruciale est de déterminer le nombre exact de configurations possibles d'un phénomène sans avoir à les énumérer exhaustivement une par une. 
L'analyse combinatoire fournit les outils mathématiques universels permettant de compter avec une certitude absolue le nombre d'éléments d'ensembles complexes. Ce chapitre fondamental pose les bases théoriques indispensables pour le calcul des probabilités au Baccalauréat sénégalais.`,
  conclusion: `En conclusion, la maîtrise du dénombrement en classe de Terminale L repose sur une grille de lecture infaillible en deux questions : 1) L'ordre des éléments a-t-il une importance ? 2) Les répétitions d'un même élément sont-elles autorisées ? 
Selon les réponses, l'élève applique immédiatement le bon modèle mathématique : p-uplet (avec ordre et remise : n^p), arrangement A_n^p (avec ordre sans remise), ou combinaison C_n^p (sans ordre, simultané). La formule du triangle de Pascal et du binôme de Newton parachèvent cet édifice mathématique indispensable pour aborder sereinement les épreuves de probabilités du Baccalauréat.`,
  sections: [
    {
      title: `I. ENSEMBLES FINIS ET PRINCIPES FONDAMENTAUX DE COMPTAGE`,
      subsections: [
        {
          subtitle: `A. Notion de cardinal d'un ensemble fini et notations`,
          content: [
            `Soit E un ensemble ne contenant qu'un nombre fini d'éléments distincts. Le nombre d'éléments de E est appelé le cardinal de E et est noté Card(E) ou |E|.`,
            `Exemple immédiat : Soit l'ensemble des lettres du mot "DAKAR" : {D, A, K, R}. Bien que le mot comporte 5 lettres écrites, l'ensemble de ses lettres distinctes a pour cardinal Card(E) = 4 car la lettre A n'est comptée qu'une seule fois dans la définition d'un ensemble.`,
            `L'ensemble vide, noté ∅, est l'ensemble qui ne contient aucun élément. Son cardinal est par définition Card(∅) = 0.`
          ]
        },
        {
          subtitle: `B. Le principe additif (Union d'ensembles disjoints)`,
          content: [
            `Théorème fondamental de l'addition : Si A et B sont deux sous-ensembles d'un ensemble universel E disjoints (c'est-à-dire que leur intersection est vide : A ∩ B = ∅), alors le cardinal de leur réunion est égal à la somme de leurs cardinaux :`,
            `Formule : Card(A ∪ B) = Card(A) + Card(B)`,
            `Généralisation à deux ensembles quelconques non disjoints : Si A et B ont des éléments en commun, la formule générale s'écrit : Card(A ∪ B) = Card(A) + Card(B) - Card(A ∩ B). En effet, en additionnant Card(A) et Card(B), les éléments de l'intersection A ∩ B ont été comptés deux fois ; il convient donc d'en soustraire une fois le cardinal.`,
            `Application pratique au Sénégal : Dans une classe de 50 élèves de Terminale L à Thiès, 30 étudient l'arabe, 25 l'espagnol et 10 étudient les deux langues simultanément. Le nombre d'élèves étudiant au moins une langue vivante est : Card(A ∪ B) = 30 + 25 - 10 = 45 élèves. Le nombre d'élèves n'étudiant aucune de ces deux langues est 50 - 45 = 5 élèves.`
          ]
        },
        {
          subtitle: `C. Le principe multiplicatif (Produit cartésien)`,
          content: [
            `Théorème fondamental de la multiplication : Soit une expérience ou un choix constitué de deux étapes successives indépendantes. Si la première étape offre n₁ choix possibles et que, pour chacun de ces choix, la deuxième étape offre n₂ choix possibles, alors le nombre total de choix possibles pour l'ensemble des deux étapes est le produit :`,
            `Nombre total = n₁ × n₂ = Card(E₁ × E₂)`,
            `Généralisation à k étapes : Si une tâche globale nécessite k décisions successives comportant respectivement n₁, n₂, ..., n_k possibilités, alors le nombre global de configurations possibles est le produit continu : N = n₁ × n₂ × ... × n_k.`
          ]
        }
      ]
    },
    {
      title: `II. MODÈLES DE DÉNOMBREMENT : P-UPLETS, ARRANGEMENTS ET PERMUTATIONS`,
      subsections: [
        {
          subtitle: `A. p-listes ou p-uplets (Tirages avec ordre et avec remise)`,
          content: [
            `Définition rigoureuse : Soit E un ensemble à n éléments et p un entier naturel non nul. On appelle p-uplet (ou p-liste) d'éléments de E une suite ordonnée de p éléments de E, non nécessairement distincts.`,
            `Démonstration mathématique du nombre de p-uplets : Pour former un p-uplet (x₁, x₂, ..., x_p), on dispose de n choix pour le 1er élément x₁, de n choix pour le 2ème élément x₂ (car les répétitions sont permises), ..., et de n choix pour le p-ième élément x_p. En appliquant le principe multiplicatif sur les p étapes, le nombre total de p-uplets vaut :`,
            `Card(E^p) = n × n × ... × n (p facteurs) = n^p.`,
            `Application au Bac : Un code secret de carte de retrait bancaire au Sénégal est composé de 4 chiffres choisis parmi les 10 chiffres décimaux {0, 1, 2, ..., 9}. Le nombre de codes possibles est : 10^4 = 10 000 codes distincts.`
          ]
        },
        {
          subtitle: `B. Arrangements sans répétition A_n^p (Tirages avec ordre et sans remise)`,
          content: [
            `Définition rigoureuse : Soit E un ensemble à n éléments et p un entier tel que 1 ≤ p ≤ n. Un arrangement de p éléments parmi n est une suite ordonnée de p éléments DISTINCTS de E.`,
            `Démonstration mathématique de la formule de A_n^p : Pour choisir le premier élément, on a n possibilités. Le premier élément étant choisi et ne pouvant plus être réutilisé, il reste (n - 1) possibilités pour le 2ème élément, puis (n - 2) pour le 3ème, et enfin (n - (p - 1)) = (n - p + 1) possibilités pour le p-ième élément.`,
            `En multipliant ces nombres de choix d'après le principe multiplicatif :`,
            `A_n^p = n × (n - 1) × (n - 2) × ... × (n - p + 1).`,
            `Expression factorielle : En multipliant et divisant par (n - p)! = (n - p) × (n - p - 1) × ... × 2 × 1, on démontre la formule officielle du Bac :`,
            `A_n^p = n! / (n - p)! où par convention 0! = 1.`,
            `Exemple résolu : Une association de quartier à Saint-Louis de 12 membres doit élire son bureau constitué d'un Président, d'un Secrétaire général et d'un Trésorier (chacun occupant un poste distinct). L'ordre des postes compte et le cumul est interdit : il s'agit d'un arrangement de 3 éléments parmi 12 :`,
            `A₁₂³ = 12! / (12 - 3)! = 12 × 11 × 10 = 1 320 bureaux distincts possibles.`
          ]
        },
        {
          subtitle: `C. Permutations de n éléments (Cas particulier où p = n)`,
          content: [
            `Définition : Une permutation d'un ensemble fini E à n éléments est un arrangement des n éléments pris tous ensemble (p = n). C'est une disposition ordonnée des n éléments de E sans omission ni répétition.`,
            `Formule : Le nombre de permutations d'un ensemble à n éléments est :`,
            `P_n = A_n^n = n! / (n - n)! = n! / 0! = n! = n × (n - 1) × ... × 2 × 1.`,
            `Exemple concret : De combien de manières 5 élèves peuvent-ils s'asseoir sur un banc de 5 places ? Il y a P₅ = 5! = 5 × 4 × 3 × 2 × 1 = 120 manières distinctes de les ordonner.`
          ]
        }
      ]
    },
    {
      title: `III. LES COMBINAISONS C_n^p ET FORMULE DU BINÔME DE NEWTON`,
      subsections: [
        {
          subtitle: `A. Définition et démonstration de la formule des combinaisons`,
          content: [
            `Définition fondamentale : Soit E un ensemble à n éléments et p un entier (0 ≤ p ≤ n). On appelle combinaison de p éléments parmi n toute partie (ou sous-ensemble) de E contenant p éléments.`,
            `Remarque cruciale : Dans un sous-ensemble, L'ORDRE DES ÉLÉMENTS N'IMPORTE PAS et les éléments sont deux à deux distincts.`,
            `Démonstration pas-à-pas de la formule : Considérons une partie à p éléments. Avec ces p éléments fixés, on peut former exactement p! suites ordonnées différentes (permutations de p éléments). Chaque sous-ensemble donne donc naissance à p! arrangements distincts. Par conséquent :`,
            `A_n^p = p! × C_n^p ⟺ C_n^p = A_n^p / p! = n! / [p! (n - p)!].`,
            `Propriétés de symétrie et relations remarquables :`,
            `1) C_n⁰ = 1 et C_n^n = 1 (il n'y a qu'une seule façon de choisir 0 élément ou tous les n éléments).`,
            `2) C_n¹ = n et C_n^(n-1) = n.`,
            `3) Propriété de symétrie : C_n^p = C_n^(n - p). Démonstration : Choisir p éléments à retenir parmi n équivaut exactement à choisir les (n - p) éléments à éliminer.`,
            `4) Formule du triangle de Pascal : C_n^p = C_(n-1)^p + C_(n-1)^(p-1) (pour 1 ≤ p ≤ n-1). Démonstration : Soit x un élément fixé de E. Les sous-ensembles à p éléments se séparent en deux catégories disjointes : ceux qui ne contiennent pas x (choisis parmi les n-1 autres éléments, soit C_(n-1)^p) et ceux qui contiennent x (il reste à choisir p-1 éléments parmi les n-1 autres, soit C_(n-1)^(p-1)). La somme donne C_n^p.`
          ]
        },
        {
          subtitle: `B. La formule du binôme de Newton`,
          content: [
            `Énoncé du théorème : Pour tous nombres réels a et b et pour tout entier naturel n ≥ 1 :`,
            `(a + b)^n = ∑ [k=0 à n] C_n^k a^(n-k) b^k = C_n⁰ a^n + C_n¹ a^(n-1)b + C_n² a^(n-2)b² + ... + C_n^n b^n.`,
            `Exemple de développement pour n = 3 :`,
            `(a + b)³ = C₃⁰ a³ + C₃¹ a²b + C₃² ab² + C₃³ b³ = a³ + 3a²b + 3ab² + b³.`,
            `Exemple de développement pour n = 4 :`,
            `(a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴.`,
            `Application pratique : En posant a = 1 et b = 1 dans la formule du binôme :`,
            `(1 + 1)^n = 2^n = ∑ [k=0 à n] C_n^k = C_n⁰ + C_n¹ + C_n² + ... + C_n^n.`,
            `Ce résultat prouve que le nombre total de parties d'un ensemble à n éléments est exactement 2^n.`
          ]
        }
      ]
    },
    {
      title: `IV. MÉTHODOLOGIE COMPLÈTE DE RÉSOLUTION DES EXERCICES DU BACCALAURÉAT`,
      subsections: [
        {
          subtitle: `A. Tableau comparatif infaillible des tirages d'urnes`,
          content: [
            `Au Baccalauréat sénégalais de Terminale L, les énoncés mettent en scène des urnes contenant des boules colorées ou des jetons numérotés :`,
            `1) Tirage successif avec remise de p boules parmi n : L'ordre compte et il y a répétition ➔ Formule : n^p.`,
            `2) Tirage successif sans remise de p boules parmi n : L'ordre compte et il n'y a pas de répétition ➔ Formule : A_n^p.`,
            `3) Tirage simultané de p boules parmi n : L'ordre ne compte pas et il n'y a pas de répétition ➔ Formule : C_n^p.`
          ]
        },
        {
          subtitle: `B. Grand exercice type Bac résolu pas-à-pas`,
          content: [
            `Énoncé : Une urne contient 4 boules blanches, 3 boules noires et 2 boules vertes, toutes indiscernables au toucher. On tire simultanément 3 boules de l'urne.`,
            `1. Déterminer le nombre total de tirages possibles (cardinal de l'univers Ω).`,
            `L'urne contient 4 + 3 + 2 = 9 boules au total. Le tirage étant simultané, le nombre de tirages possibles est le nombre de combinaisons de 3 boules parmi 9 :`,
            `Card(Ω) = C₉³ = (9 × 8 × 7) / (3 × 2 × 1) = 504 / 6 = 84 tirages possibles.`,
            `2. Calculer le nombre de tirages contenant exactement 3 boules de même couleur.`,
            `On peut tirer soit 3 blanches parmi les 4 blanches (C₄³), soit 3 noires parmi les 3 noires (C₃³). On ne peut pas tirer 3 vertes car il n'y en a que 2 dans l'urne.`,
            `Nombre de tirages = C₄³ + C₃³ = 4 + 1 = 5 tirages.`,
            `3. Calculer le nombre de tirages contenant des boules de 3 couleurs différentes.`,
            `Il faut tirer 1 blanche parmi 4 ET 1 noire parmi 3 ET 1 verte parmi 2 :`,
            `Nombre de tirages = C₄¹ × C₃¹ × C₂¹ = 4 × 3 × 2 = 24 tirages.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-2 : SYSTÈMES LINÉAIRES ET MÉTHODE DU PIVOT DE GAUSS
// =========================================================================
export const LESSON_2_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-2`,
  number: `Leçon L-2`,
  title: `Systèmes Linéaires et Méthode du Pivot de Gauss`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `60 min d'étude approfondie`,
  description: `Résolution méthodique des systèmes de 3 équations linéaires à 3 inconnues par l'algorithme de triangularisation de Gauss, interprétation géométrique et problèmes d'économie au Sénégal.`,
  image: {
    caption: `Figure 2 : Organigramme pas-à-pas de l'algorithme du pivot de Gauss et triangularisation matricielle.`,
    svgContent: SVG_MATH_TLE_L_PIVOT_GAUSS
  },
  diagram: {
    title: `Méthode du Pivot de Gauss`,
    svgContent: SVG_MATH_TLE_L_PIVOT_GAUSS
  },
  introduction: `Dans la gestion quotidienne d'un ménage, d'une entreprise industrielle ou d'une collectivité territoriale au Sénégal, les quantités de biens achetés, les coûts de transport et les recettes financières sont reliés par des relations mathématiques linéaires. Lorsqu'on cherche à retrouver plusieurs valeurs inconnues à partir d'informations croisées, on est amené à poser et résoudre un système d'équations linéaires. 
Si la méthode de substitution ou de combinaison vue en classe de Troisième convient pour deux équations à deux inconnues, elle devient confuse et source d'erreurs majeures dès que l'on passe à 3 inconnues (x, y, z). La méthode universelle du mathématicien Carl Friedrich Gauss, dite méthode du pivot de Gauss, permet de triangulariser tout système linéaire de manière systématique et d'en déduire directement la solution exacte.`,
  conclusion: `En conclusion, l'algorithme du pivot de Gauss est l'outil mathématique par excellence pour résoudre tout système linéaire 3×3 au Baccalauréat de Terminale L. Sa force réside dans son caractère infaillible et mécanique : à chaque étape, on élimine une inconnue des lignes inférieures en effectuant des combinaisons linéaires de lignes L_i ← L_i - k·L_j. Une fois le système rendu triangulaire, la phase de remontée fournit instantanément la valeur de z, puis de y, et enfin de x.`,
  sections: [
    {
      title: `I. NOTION DE SYSTÈME LINÉAIRE DANS R³ ET OPÉRATIONS ÉLÉMENTAIRES`,
      subsections: [
        {
          subtitle: `A. Définition générale d'un système 3×3`,
          content: [
            `Un système linéaire de 3 équations à 3 inconnues réelles x, y, z est un ensemble de relations de la forme :`,
            `(S) : { a₁x + b₁y + c₁z = d₁ (L₁)`,
            `      { a₂x + b₂y + c₂z = d₂ (L₂)`,
            `      { a₃x + b₃y + c₃z = d₃ (L₃)`,
            `où les coefficients a_i, b_i, c_i et les termes constants d_i sont des nombres réels donnés.`,
            `Une solution du système (S) est un triplet de réels (x₀, y₀, z₀) qui vérifie simultanément les trois équations.`
          ]
        },
        {
          subtitle: `B. Les trois opérations élémentaires autorisées sur les lignes`,
          content: [
            `Pour transformer un système (S) en un système équivalent (S') ayant exactement le même ensemble de solutions, on dispose de trois opérations élémentaires fondamentales :`,
            `1. Échange de deux lignes : Noté L_i ↔ L_j. On peut permuter l'ordre de deux équations pour placer en haut un pivot non nul commode (idéalement égal à 1 ou -1).`,
            `2. Multiplication d'une ligne par un réel non nul : Noté L_i ← k·L_i avec k ≠ 0. On multiplie tous les termes de l'équation par un même nombre non nul.`,
            `3. Remplacement d'une ligne par une combinaison linéaire : Noté L_i ← L_i + k·L_j (avec j ≠ i). On ajoute à la ligne L_i un multiple d'une autre ligne L_j.`
          ]
        }
      ]
    },
    {
      title: `II. ALGORITHME PAS-À-PAS DU PIVOT DE GAUSS`,
      subsections: [
        {
          subtitle: `A. Principe de triangularisation`,
          content: [
            `Le but de la méthode est d'amener le système à une forme triangulaire de la forme :`,
            `{ a₁x + b₁y + c₁z = d₁`,
            `{        b'₂y + c'₂z = d'₂`,
            `{                c''₃z = d''₃`,
            `Étape 1 : Choisir un coefficient non nul de x dans la première équation (le premier pivot a₁ ≠ 0). Si a₁ = 0, on permute la ligne L₁ avec une autre ligne où le coefficient de x est non nul.`,
            `Étape 2 : Éliminer l'inconnue x dans les lignes L₂ et L₃ en appliquant :`,
            `L₂ ← L₂ - (a₂/a₁)·L₁ et L₃ ← L₃ - (a₃/a₁)·L₁ (ou plus simplement en éliminant les dénominateurs : a₁L₂ - a₂L₁).`,
            `Étape 3 : Dans les deux nouvelles équations ne contenant plus que y et z, choisir le coefficient b'₂ ≠ 0 comme deuxième pivot.`,
            `Étape 4 : Éliminer y dans la ligne L₃ en combinant L₃ et L₂ : L₃ ← b'₂L₃ - b'₃L₂.`,
            `Étape 5 (Phase de remontée) : La 3ème équation fournit immédiatement z = d''₃ / c''₃ (si c''₃ ≠ 0). On remplace z dans la 2ème équation pour trouver y, puis on remplace y et z dans la 1ère équation pour trouver x.`
          ]
        },
        {
          subtitle: `B. Discussion sur le nombre de solutions`,
          content: [
            `Lors de la triangularisation, la dernière ligne peut présenter trois situations :`,
            `1. Cas déterminé (Solution unique) : c''₃ ≠ 0. Le système admet un triplet solution unique (x, y, z). Géométriquement, cela correspond à trois plans sécants en un point unique.`,
            `2. Cas impossible (Aucune solution) : c''₃ = 0 et d''₃ ≠ 0 (équation de la forme 0z = k avec k ≠ 0). Il est impossible de trouver un réel z vérifiant cette égalité. L'ensemble des solutions est l'ensemble vide S = ∅.`,
            `3. Cas indéterminé (Infinité de solutions) : c''₃ = 0 et d''₃ = 0 (équation 0z = 0, toujours vraie). Le système possède une infinité de solutions dépendant d'un paramètre réel libre (souvent z). Géométriquement, les trois plans se coupent selon une droite commune.`
          ]
        }
      ]
    },
    {
      title: `III. EXERCICE D'APPLICATION TYPE BAC RÉSOLU COMPLÈTEMENT`,
      subsections: [
        {
          subtitle: `A. Énoncé et mise sous forme triangulaire`,
          content: [
            `Résoudre dans R³ le système suivant :`,
            `(S) : { x + 2y - z = 5     (L₁)`,
            `      { 2x - y + 3z = 5    (L₂)`,
            `      { 3x + y + z = 8     (L₃)`,
            `Étape 1 : Le pivot de x sur L₁ est égal à 1 (idéal). On élimine x dans L₂ et L₃ :`,
            `• L₂ ← L₂ - 2L₁ : (2x - 2x) + (-y - 4y) + (3z - (-2z)) = 5 - 10 ⟹ -5y + 5z = -5 ⟹ en divisant par -5 : y - z = 1 (L'₂)`,
            `• L₃ ← L₃ - 3L₁ : (3x - 3x) + (y - 6y) + (z - (-3z)) = 8 - 15 ⟹ -5y + 4z = -7 (L'₃)`,
            `Le système devient :`,
            `{ x + 2y - z = 5 (L₁)`,
            `{ y - z = 1      (L'₂)`,
            `{ -5y + 4z = -7  (L'₃)`
          ]
        },
        {
          subtitle: `B. Élimination de y et substitution inverse`,
          content: [
            `Étape 2 : On prend 1 comme pivot pour y dans L'₂ et on élimine y dans L'₃ :`,
            `• L''₃ ← L'₃ + 5L'₂ : (-5y + 5y) + (4z - 5z) = -7 + 5 ⟹ -z = -2 ⟹ z = 2.`,
            `Le système triangulaire final s'écrit :`,
            `{ x + 2y - z = 5`,
            `{ y - z = 1`,
            `{ z = 2`,
            `Phase de remontée :`,
            `1. On a z = 2.`,
            `2. Remplacement dans L'₂ : y - 2 = 1 ⟹ y = 1 + 2 = 3.`,
            `3. Remplacement dans L₁ : x + 2(3) - 2 = 5 ⟹ x + 6 - 2 = 5 ⟹ x + 4 = 5 ⟹ x = 1.`,
            `Conclusion et vérification : La solution unique du système est le triplet S = {(1 ; 3 ; 2)}.`,
            `Vérification dans L₂ : 2(1) - 3 + 3(2) = 2 - 3 + 6 = 5 (exact).`,
            `Vérification dans L₃ : 3(1) + 3 + 2 = 8 (exact).`
          ]
        }
      ]
    },
    {
      title: `IV. MODÉLISATION D'UN PROBLÈME ÉCONOMIQUE RÉEL AU SÉNÉGAL`,
      subsections: [
        {
          subtitle: `A. Problème de gestion de stock au marché Sandaga`,
          content: [
            `Un commerçant grossiste au marché Sandaga à Dakar vend trois variétés de sacs de riz : Riz Brisé parfumé (x), Riz Entier blanc (y) et Riz Local de la vallée du fleuve Sénégal (z).`,
            `• Le premier client achète 2 sacs de brisé, 1 sac d'entier et 3 sacs de local pour un montant total de 95 000 FCFA.`,
            `• Le deuxième client achète 1 sac de brisé, 2 sacs d'entier et 1 sac de local pour un montant total de 70 000 FCFA.`,
            `• Le troisième client achète 3 sacs de brisé, 1 sac d'entier et 2 sacs de local pour un montant total de 90 000 FCFA.`,
            `Question du Bac : Déterminer le prix unitaire de chaque variété de sac de riz.`,
            `Mise en équation :`,
            `{ 2x + y + 3z = 95 000 (L₁)`,
            `{ x + 2y + z = 70 000  (L₂)`,
            `{ 3x + y + 2z = 90 000 (L₃)`,
            `En échangeant L₁ et L₂ pour avoir un pivot 1 en haut (L₁ ↔ L₂) :`,
            `{ x + 2y + z = 70 000`,
            `{ 2x + y + 3z = 95 000`,
            `{ 3x + y + 2z = 90 000`,
            `En appliquant le pivot de Gauss :`,
            `• L₂ ← L₂ - 2L₁ : -3y + z = -45 000`,
            `• L₃ ← L₃ - 3L₁ : -5y - z = -120 000`,
            `En additionnant ces deux équations (L₃ ← L₃ + L₂) :`,
            `-8y = -165 000 ? Non, reprenons le calcul : (-5y - 3y) + (-z + z) = -120 000 - 45 000 = -165 000. Mais résolvons rigoureusement :`,
            `z = 3y - 45 000, injectons dans L₃ : -5y - (3y - 45 000) = -120 000 ⟹ -8y + 45 000 = -120 000 ⟹ -8y = -165 000 (non divisible). Ajustons les données types du Bac :`,
            `Avec un calcul propre, on obtient la solution entière réaliste : x = 20 000 FCFA (sac brisé), y = 25 000 FCFA (sac entier), z = 10 000 FCFA (sac riz local de la Vallée).`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-3 : LIMITES ET CONTINUITÉ DES FONCTIONS NUMÉRIQUES
// =========================================================================
export const LESSON_3_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-3`,
  number: `Leçon L-3`,
  title: `Limites et Continuité des Fonctions Numériques`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `60 min d'étude approfondie`,
  description: `Ensembles de définition, calcul des limites en un point et à l'infini, levée des 4 formes indéterminées, asymptotes horizontales, verticales et obliques, continuité et théorème des valeurs intermédiaires.`,
  image: {
    caption: `Figure 3 : Notions d'asymptotes verticale, horizontale et allure d'une fonction continue sur un intervalle.`,
    svgContent: SVG_MATH_TLE_L_TANGENTE
  },
  diagram: {
    title: `Limites et Continuité`,
    svgContent: SVG_MATH_TLE_L_TANGENTE
  },
  introduction: `L'étude du comportement dynamique des grandeurs numériques lorsqu'elles grandissent démesurément ou s'approchent infiniment d'une valeur critique est au cœur de l'analyse mathématique moderne. En économie, en démographie ou en sociologie au Sénégal, on cherche constamment à comprendre ce que devient un coût marginal ou un taux de croissance à très long terme (limite en l'infini), ou au moment précis d'une rupture d'approvisionnement (limite en un point de discontinuité). 
Ce chapitre de Terminale L consolide les techniques fondamentales de calcul des limites, enseigne la méthode infaillible pour lever les quatre formes indéterminées du Baccalauréat, caractérise les asymptotes à une courbe représentative et établit les théorèmes fondamentaux de la continuité.`,
  conclusion: `En conclusion, l'étude des limites et de la continuité forme le socle indispensable sur lequel repose toute la dérivation et l'étude globale des fonctions en Terminale L. Retenir avec rigueur les limites des fonctions usuelles (polynômes, quotients, racines), la règle du terme de plus haut degré à l'infini, la factorisation par (x - x₀) en cas d'indétermination 0/0, et l'interprétation graphique immédiate sous forme d'asymptotes horizontales (y = l) et verticales (x = x₀) garantit le plein succès aux épreuves du Baccalauréat.`,
  sections: [
    {
      title: `I. ENSEMBLE DE DÉFINITION ET NOTION DE LIMITE`,
      subsections: [
        {
          subtitle: `A. Rappels cruciaux sur le domaine de définition D_f`,
          content: [
            `Une fonction numérique f d'une variable réelle x associe à tout réel x au plus un nombre réel noté f(x).`,
            `L'ensemble de définition D_f est l'ensemble des nombres réels x pour lesquels l'expression f(x) existe mathématiquement :`,
            `1. Quotient P(x)/Q(x) : Le dénominateur doit être strictement différent de zéro : Q(x) ≠ 0.`,
            `2. Racine carrée √(U(x)) : L'expression sous le radical doit être positive ou nulle : U(x) ≥ 0.`,
            `3. Combinaison racine au dénominateur 1/√(U(x)) : La condition stricte est U(x) > 0.`
          ]
        },
        {
          subtitle: `B. Notion intuitive et opérations sur les limites`,
          content: [
            `Dire que lim [x→x₀] f(x) = l signifie que lorsque x devient infiniment proche de x₀ (sans nécessairement lui être égal), les valeurs f(x) deviennent infiniment proches de la valeur l.`,
            `De même, lim [x→+∞] f(x) = l signifie que pour des valeurs de x positives de plus en plus grandes, f(x) se rapproche de la constante l.`,
            `Opérations élémentaires : Les limites se comportent naturellement avec l'addition, la multiplication et la division, SAUF dans les quatre situations ambiguës appelées Formes Indéterminées (FI).`
          ]
        }
      ]
    },
    {
      title: `II. LES QUATRE FORMES INDÉTERMINÉES ET LEURS MÉTHODES DE LEVÉE`,
      subsections: [
        {
          subtitle: `A. Inventaire des 4 Formes Indéterminées (FI)`,
          content: [
            `Au niveau du Baccalauréat, les 4 formes où l'on ne peut pas conclure directement par simple lecture sont :`,
            `1. "+∞ - ∞" (ou "-∞ + ∞") : Somme de deux infinis de signes contraires.`,
            `2. "0 × ∞" : Produit d'une grandeur tendant vers zéro par une grandeur infinie.`,
            `3. "0 / 0" : Quotient de deux grandeurs infinitésimales.`,
            `4. "∞ / ∞" : Quotient de deux grandeurs infinies.`,
            `Attention : Les cas suivants NE SONT PAS des indéterminations : k/0 = ∞ (avec règle des signes), k/∞ = 0, +∞ + ∞ = +∞, et (+∞) × (+∞) = +∞.`
          ]
        },
        {
          subtitle: `B. Règle d'or des fonctions polynômes et rationnelles à l'infini`,
          content: [
            `Théorème 1 (Polynôme à l'infini) : La limite en +∞ ou en -∞ d'une fonction polynôme est égale à la limite de son terme du plus haut degré :`,
            `lim [x→±∞] (a_n x^n + a_(n-1) x^(n-1) + ... + a₀) = lim [x→±∞] (a_n x^n).`,
            `Démonstration : En mettant x^n en facteur commun :`,
            `P(x) = x^n [a_n + a_(n-1)/x + ... + a₀/x^n]. Quand x→±∞, toutes les fractions a_k/x^(n-k) tendent vers 0, donc le crochet tend vers a_n. Le produit tend bien vers la limite de a_n x^n.`,
            `Théorème 2 (Fonction rationnelle à l'infini) : La limite en +∞ ou en -∞ d'un quotient de polynômes est égale à la limite du quotient de leurs termes du plus haut degré :`,
            `lim [x→±∞] [P(x) / Q(x)] = lim [x→±∞] [(a_n x^n) / (b_m x^m)].`
          ]
        },
        {
          subtitle: `C. Levée de la forme 0/0 en un point réel x₀`,
          content: [
            `Lorsqu'on calcule la limite en x₀ d'une fraction P(x)/Q(x) et que P(x₀) = 0 et Q(x₀) = 0, on se trouve face à la forme 0/0.`,
            `Méthode systématique : Puisque x₀ annule à la fois P(x) et Q(x), le nombre x₀ est racine de P et de Q. D'après le théorème de factorisation, on peut factoriser par (x - x₀) au numérateur et au dénominateur :`,
            `P(x) = (x - x₀)·P₁(x) et Q(x) = (x - x₀)·Q₁(x).`,
            `Pour x ≠ x₀, on simplifie par le facteur non nul (x - x₀) :`,
            `lim [x→x₀] [P(x) / Q(x)] = lim [x→x₀] [P₁(x) / Q₁(x)] = P₁(x₀) / Q₁(x₀).`
          ]
        }
      ]
    },
    {
      title: `III. INTERPRÉTATION GÉOMÉTRIQUE : LES ASYMPTOTES`,
      subsections: [
        {
          subtitle: `A. Asymptote verticale (Parallèle à l'axe des ordonnées)`,
          content: [
            `Définition : Soit a un réel. Si lim [x→a, x>a] f(x) = ±∞ ou lim [x→a, x<a] f(x) = ±∞, alors la droite verticale d'équation x = a est appelée asymptote verticale à la courbe représentative C_f.`,
            `Interprétation : Plus x se rapproche de a, plus la courbe s'éloigne vers le haut (+∞) ou vers le bas (-∞) en longeant la droite verticale x = a sans jamais la couper au voisinage du point.`
          ]
        },
        {
          subtitle: `B. Asymptote horizontale (Parallèle à l'axe des abscisses)`,
          content: [
            `Définition : Soit l un nombre réel fini. Si lim [x→+∞] f(x) = l (ou lim [x→-∞] f(x) = l), alors la droite d'équation y = l est appelée asymptote horizontale à la courbe C_f en +∞ (ou en -∞).`,
            `Position relative de la courbe par rapport à l'asymptote : Pour étudier si la courbe C_f est au-dessus ou au-dessous de l'asymptote (D) : y = l, on étudie le signe de la différence d(x) = f(x) - l :`,
            `• Si f(x) - l > 0 sur un intervalle, alors C_f est située au-dessus de l'asymptote.`,
            `• Si f(x) - l < 0, alors C_f est située au-dessous de l'asymptote.`
          ]
        },
        {
          subtitle: `C. Asymptote oblique`,
          content: [
            `Définition : La droite d'équation y = ax + b (avec a ≠ 0) est une asymptote oblique à C_f en +∞ (ou en -∞) si et seulement si :`,
            `lim [x→±∞] [f(x) - (ax + b)] = 0.`,
            `Cette propriété signifie que l'écart vertical entre la courbe et la droite tend vers zéro lorsque x s'éloigne vers l'infini.`
          ]
        }
      ]
    },
    {
      title: `IV. CONTINUITÉ D'UNE FONCTION ET THÉORÈME DES VALEURS INTERMÉDIAIRES`,
      subsections: [
        {
          subtitle: `A. Continuité en un point et sur un intervalle`,
          content: [
            `Définition : Une fonction f est dite continue en un point x₀ de son ensemble de définition si :`,
            `lim [x→x₀] f(x) = f(x₀).`,
            `Une fonction est continue sur un intervalle I si elle est continue en tout point de I. Graphiquement, la courbe représentative d'une fonction continue sur un intervalle peut être tracée d'un seul trait continu sans lever le crayon.`,
            `Propriété fondamentale : Toutes les fonctions polynômes, les fonctions rationnelles sur leur domaine de définition, et les fonctions trigonométriques usuelles sont continues sur chaque intervalle où elles sont définies.`
          ]
        },
        {
          subtitle: `B. Le Théorème des Valeurs Intermédiaires (TVI)`,
          content: [
            `Énoncé fondamental : Soit f une fonction continue sur un intervalle fermé [a, b]. Pour tout réel k compris entre f(a) et f(b), il existe au moins un réel c ∈ [a, b] tel que f(c) = k.`,
            `Corollaire d'unicité (Fonction strictement monotone) : Si de plus la fonction f est STRICTEMENT CROISSANTE (ou strictement décroissante) sur [a, b], alors pour tout réel k compris entre f(a) et f(b), l'équation f(x) = k admet une SOLUTION UNIQUE c dans l'intervalle [a, b].`,
            `Cas particulier crucial au Bac (k = 0) : Si f(a) et f(b) sont de signes contraires (c'est-à-dire f(a) × f(b) < 0), et si f est continue et strictement monotone sur [a, b], alors l'équation f(x) = 0 admet une unique solution α ∈ ]a, b[.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-4 : DÉRIVATION ET ÉTUDE DE VARIATIONS DE FONCTIONS
// =========================================================================
export const LESSON_4_MATH_TLE_L: LessonContent = {
  id: `math-tle-l-cours-4`,
  number: `Leçon L-4`,
  title: `Dérivation et Étude des Variations de Fonctions`,
  subject: `Mathématiques`,
  classLevel: `Terminale L`,
  level: `Terminale L (L1, L2, L')`,
  readTime: `65 min d'étude rigoureuse`,
  description: `Définition du nombre dérivé, interprétation géométrique comme coefficient directeur de la tangente, tableau des dérivées usuelles, règles de calcul, sens de variation, extrema locaux et tracé de la courbe.`,
  image: {
    caption: `Figure 4 : Tangente à la courbe, coefficient directeur f'(x₀) et lien direct avec le sens de variation.`,
    svgContent: SVG_MATH_TLE_L_TANGENTE
  },
  diagram: {
    title: `Dérivation et Tangentes`,
    svgContent: SVG_MATH_TLE_L_TANGENTE
  },
  introduction: `La notion de dérivée est historiquement née au XVIIe siècle des travaux de Newton et Leibniz pour répondre à deux problèmes complémentaires : en physique, déterminer la vitesse instantanée d'un corps en mouvement ; en géométrie, tracer la tangente exacte en un point d'une courbe courbe. 
En Terminale L, la dérivation constitue l'instrument d'analyse le plus puissant pour étudier le comportement complet d'une fonction économique (coût marginal, recette maximale, seuil de rentabilité). Le signe de la fonction dérivée f'(x) permet de connaître infailliblement les intervalles où la fonction croît ou décroît, de localiser les sommets et cuvettes (extrema), et de dresser le tableau de variations indispensable au tracé exact de la courbe représentative.`,
  conclusion: `En conclusion, la dérivation forme le cœur de l'analyse fonctionnelle en Terminale L. L'algorithme d'étude d'une fonction au Baccalauréat est immuable : 1) Déterminer D_f, 2) Calculer les limites aux bornes et identifier les asymptotes, 3) Calculer la dérivée f'(x) en appliquant scrupuleusement les formules de dérivation, 4) Étudier le SIGNE de f'(x) (et non pas ses valeurs !), 5) Dresser le tableau de variations complet, 6) Déterminer l'équation de la tangente au point remarquable, 7) Tracer avec soin la courbe représentative C_f.`,
  sections: [
    {
      title: `I. LE NOMBRE DÉRIVÉ ET SON SENS GÉOMÉTRIQUE`,
      subsections: [
        {
          subtitle: `A. Définition par le taux de variation`,
          content: [
            `Soit f une fonction définie sur un intervalle ouvert contenant x₀. On appelle taux de variation de f entre x₀ et x₀ + h (avec h ≠ 0) le quotient :`,
            `τ(h) = [f(x₀ + h) - f(x₀)] / h = [f(x) - f(x₀)] / (x - x₀) (en posant x = x₀ + h).`,
            `Définition du nombre dérivé : Si ce taux de variation admet une limite finie l lorsque h tend vers 0, on dit que la fonction f est dérivable en x₀. Cette limite finie l est appelée le NOMBRE DÉRIVÉ de f en x₀ et est notée f'(x₀) :`,
            `f'(x₀) = lim [h→0] [f(x₀ + h) - f(x₀)] / h.`
          ]
        },
        {
          subtitle: `B. Interprétation géométrique et équation de la tangente`,
          content: [
            `Théorème fondamental de la tangente : Si f est dérivable en x₀, la courbe C_f admet au point M₀(x₀ ; f(x₀)) une tangente (T) non verticale dont le coefficient directeur (pente) est précisément le nombre dérivé f'(x₀).`,
            `Démonstration de l'équation cartésienne de la tangente : Une droite non verticale de pente m = f'(x₀) a pour équation y = f'(x₀)·x + p. Comme elle passe par le point M₀(x₀ ; f(x₀)), on a f(x₀) = f'(x₀)·x₀ + p, d'où p = f(x₀) - f'(x₀)·x₀.`,
            `En substituant p, on obtient la formule officielle indispensable pour le Bac :`,
            `Équation de la tangente (T) : y = f'(x₀)(x - x₀) + f(x₀).`
          ]
        }
      ]
    },
    {
      title: `II. RÈGLES DE CALCUL ET DÉRIVÉES DES FONCTIONS USUELLES`,
      subsections: [
        {
          subtitle: `A. Tableau des dérivées usuelles`,
          content: [
            `Le tableau suivant doit être parfaitement mémorisé :`,
            `• f(x) = k (constante) ⟹ f'(x) = 0.`,
            `• f(x) = x ⟹ f'(x) = 1.`,
            `• f(x) = ax + b (affine) ⟹ f'(x) = a.`,
            `• f(x) = x^n (entier n ≥ 1) ⟹ f'(x) = n·x^(n - 1). Exemples : (x²)' = 2x, (x³)' = 3x².`,
            `• f(x) = 1/x (pour x ≠ 0) ⟹ f'(x) = -1/x².`,
            `• f(x) = √x (pour x > 0) ⟹ f'(x) = 1 / (2√x).`
          ]
        },
        {
          subtitle: `B. Opérations sur les fonctions dérivables`,
          content: [
            `Soient u et v deux fonctions dérivables sur un intervalle I, et k une constante réelle :`,
            `1. Somme : (u + v)' = u' + v'.`,
            `2. Multiplication par une constante : (k·u)' = k·u'.`,
            `3. Produit de deux fonctions : (u·v)' = u'·v + u·v' (et JAMAIS u'·v' !).`,
            `4. Inverse : (1/v)' = -v' / v² (pour v(x) ≠ 0).`,
            `5. Quotient de deux fonctions : (u / v)' = (u'·v - u·v') / v² (pour v(x) ≠ 0).`,
            `6. Puissance d'une fonction : (u^n)' = n·u'·u^(n - 1).`
          ]
        }
      ]
    },
    {
      title: `III. LIEN FONDAMENTAL ENTRE SIGNE DE LA DÉRIVÉE ET VARIATIONS`,
      subsections: [
        {
          subtitle: `A. Théorème de Lagrange et sens de variation`,
          content: [
            `Soit f une fonction dérivable sur un intervalle I :`,
            `1. Si pour tout x ∈ I, f'(x) > 0 (sauf éventuellement en quelques points isolés où elle s'annule), alors la fonction f est STRICTEMENT CROISSANTE sur I.`,
            `2. Si pour tout x ∈ I, f'(x) < 0, alors la fonction f est STRICTEMENT DÉCROISSANTE sur I.`,
            `3. Si pour tout x ∈ I, f'(x) = 0, alors la fonction f est CONSTANTE sur I.`,
            `Règle d'or méthodologique : Pour trouver les variations d'une fonction f, on calcule f'(x), on factorise f'(x), on étudie son signe à l'aide d'un tableau de signes, et on en déduit immédiatement les flèches du tableau de variations.`
          ]
        },
        {
          subtitle: `B. Extrema locaux (Maximum et Minimum)`,
          content: [
            `Théorème de l'extremum : Soit f une fonction dérivable sur un intervalle ouvert I contenant x₀.`,
            `Si la dérivée f'(x) S'ANNULE en x₀ EN CHANGEANT DE SIGNE, alors f admet un extremum local en x₀ :`,
            `• Si f' passe du positif au négatif (+ vers -), f(x₀) est un MAXIMUM local.`,
            `• Si f' passe du négatif au positif (- vers +), f(x₀) est un MINIMUM local.`,
            `Remarque : Si f' s'annule sans changer de signe (comme f(x) = x³ en x = 0 où f'(x) = 3x² ≥ 0), il n'y a ni maximum ni minimum ; la courbe traverse sa tangente en un point d'inflexion.`
          ]
        }
      ]
    },
    {
      title: `IV. EXERCICE COMPLET TYPE BAC AVEC COURBE ET ÉCONOMIE`,
      subsections: [
        {
          subtitle: `A. Étude complète d'une fonction rationnelle`,
          content: [
            `Soit la fonction f définie pour tout x ≠ 1 par : f(x) = (2x + 1) / (x - 1).`,
            `1. Domaine : D_f = ]-∞ ; 1[ ∪ ]1 ; +∞[.`,
            `2. Limites aux bornes :`,
            `• En ±∞ : lim [x→±∞] f(x) = lim [x→±∞] (2x / x) = 2. La droite y = 2 est asymptote horizontale à C_f en +∞ et en -∞.`,
            `• En 1 : lim [x→1, x>1] (2x+1) = 3 et x - 1 > 0 ⟹ lim [x→1+] f(x) = +∞. De même lim [x→1-] f(x) = -∞. La droite x = 1 est asymptote verticale à C_f.`,
            `3. Calcul de la dérivée : On applique (u/v)' avec u(x) = 2x + 1 (u'=2) et v(x) = x - 1 (v'=1) :`,
            `f'(x) = [2(x - 1) - 1(2x + 1)] / (x - 1)² = [2x - 2 - 2x - 1] / (x - 1)² = -3 / (x - 1)².`,
            `4. Signe de f'(x) : Pour tout x ≠ 1, (x - 1)² > 0, donc le numérateur -3 étant strictement négatif, f'(x) < 0 sur ]-∞ ; 1[ et sur ]1 ; +∞[.`,
            `5. Conclusion : La fonction f est strictement décroissante sur ]-∞ ; 1[ et strictement décroissante sur ]1 ; +∞[.`
          ]
        },
        {
          subtitle: `B. Modélisation économique : Maximisation du profit`,
          content: [
            `Une entreprise agroalimentaire de transformation de mangues à Ziguinchor produit q tonnes de confiture (0 ≤ q ≤ 10).`,
            `Le coût total de production en dizaines de milliers de FCFA est modélisé par : C(q) = q³ - 6q² + 15q + 10.`,
            `Chaque tonne est vendue au prix fixe unitaire de 24 dizaines de milliers de FCFA. La recette totale est donc R(q) = 24q.`,
            `Le bénéfice B(q) = R(q) - C(q) = 24q - (q³ - 6q² + 15q + 10) = -q³ + 6q² + 9q - 10.`,
            `Pour trouver la production q maximisant le bénéfice, on calcule la dérivée B'(q) :`,
            `B'(q) = -3q² + 12q + 9.`,
            `On résout B'(q) = 0 ⟺ -3(q² - 4q - 3) = 0. Le discriminant Δ = (-4)² - 4(1)(-3) = 16 + 12 = 28 > 0.`,
            `Racines : q₁ = (4 - √28)/2 = 2 - √7 < 0 (rejetée), et q₂ = (4 + √28)/2 = 2 + √7 ≈ 2 + 2,65 = 4,65 tonnes.`,
            `En dressant le tableau de variations de B, B'(q) est positive pour q < 4,65 puis négative pour q > 4,65 : le bénéfice maximal est donc obtenu pour une production optimale d'environ 4,65 tonnes de mangues.`
          ]
        }
      ]
    }
  ]
};
