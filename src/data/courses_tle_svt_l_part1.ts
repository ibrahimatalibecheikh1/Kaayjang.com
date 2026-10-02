import { LessonContent } from './courses';

// =========================================================================
// SVT CLASSE DE TERMINALE L (SÉRIES L1, L2, L') — PARTIE 1 (LEÇONS L-1 À L-4)
// Nutrition, santé publique et physiologie de la reproduction
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_1_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-1',
  number: 'LEÇON L-1',
  title: 'LES BESOINS NUTRITIONNELS ET LA RATION ALIMENTAIRE ÉQUILIBRÉE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 1 • Alimentation, Nutrition et Santé Publique (Série L)',
  level: 'Terminale L1, L2 & L\'',
  readTime: '60 min d\'étude approfondie',
  description: 'Étude physiologique des besoins de l\'organisme humain : composition des aliments (macronutriments et micronutriments), dépense énergétique (métabolisme de base, travail musculaire, thermorégulation), calcul d\'une ration alimentaire équilibrée selon l\'âge, le sexe et l\'activité au Sénégal, et règles hygiéniques de l\'alimentation.',
  image: {
    caption: 'Figure L1.1 : La pyramide alimentaire et les proportions de la ration équilibrée 421 GPL',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtLGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#ea580c" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtLGrad1)" stroke="#ea580c" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7c2d12" text-anchor="middle">LES PILIERS DE LA NUTRITION HUMAINE ET RATION ÉQUILIBRÉE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">1. Macronutriments</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Glucides : 50 à 55% de l'énergie (17 kJ/g)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Lipides : 30 à 35% de l'énergie (38 kJ/g)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Protides : 12 à 15% (bâtisseurs)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Eau : 1,5 à 2 L indispensables</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Règle d'or : Règle du 421 GPL</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">2. Micronutriments</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Minéraux : Fer (hématies), Calcium</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Iode : hormones thyroïdiennes</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Vitamines liposolubles (A, D, E, K)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Vitamines hydrosolubles (B, C)</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Rôles fonctionnels &amp; protecteurs</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">3. Dépenses Énergétiques</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Métabolisme de base (repos absolu)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Thermorégulation (chaleur tropicale)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Activité physique &amp; musculaire</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Travail digestif (ADS)</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Équilibre : Entrées = Sorties</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — CLASSE DE TERMINALE L (L1, L2, L')

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 1 : ALIMENTATION, NUTRITION ET SANTÉ PUBLIQUE AU SÉNÉGAL
LEÇON L-1 : LES BESOINS NUTRITIONNELS ET LA RATION ALIMENTAIRE ÉQUILIBRÉE

INTRODUCTION GÉNÉRALE

Pour entretenir la vie, construire ses tissus corporels et fournir l'énergie nécessaire à ses multiples activités physiques et intellectuelles, le corps humain a besoin d'un approvisionnement alimentaire permanent et adapté. Cependant, manger ne se résume pas à apaiser la faim : une alimentation saine exige une adéquation quantitative et qualitative entre les apports nutritionnels et les dépenses physiologiques de l'organisme.

Au Sénégal et dans les pays du Sahel, la question de la ration alimentaire équilibrée revêt une importance sociétale et de santé publique majeure. La coexistence entre régimes traditionnels (à base de céréales locales comme le mil, le maïs, le sorgho, de légumineuses comme le niébé et de poisson) et l'urbanisation rapide marquée par la consommation excessive d'aliments importés (riz blanc raffiné, sucres rapides, huiles de palme) crée de nouveaux déséquilibres métaboliques. L'étude scientifique de la ration alimentaire permet de concevoir des régimes harmonieux et adaptés à chaque étape de l'existence.

---

I. LA COMPOSITION DES ALIMENTS : MACRONUTRIMENTS ET MICRONUTRIMENTS

Les aliments consommés sont des mélanges complexes de substances simples que la digestion décompose en nutriments directement assimilables par l'épithélium intestinal :

1. Les macronutriments (nutriments énergétiques et bâtisseurs)
- Les glucides (sucres) :
  * Principale source d'énergie rapidement mobilisable de l'organisme.
  * Glucides simples à assimilation rapide (glucose, fructose des fruits, saccharose du sucre de canne) et glucides complexes à diffusion lente (amidon du mil, du manioc, du riz, de l'igname).
  * Valeur énergétique : 1 g de glucides libère 17 kJ (soit environ 4 kcal).
  * Ils doivent représenter 50 à 55 % de l'apport énergétique quotidien total.
- Les lipides (matières grasses) :
  * Composés de triglycérides, d'acides gras saturés et d'acides gras insaturés essentiels (oméga-3 et oméga-6 non synthétisables par l'homme).
  * Rôles : réserve d'énergie à haute densité, constituants majeurs des membranes cellulaires et précurseurs d'hormones stéroïdes.
  * Valeur énergétique la plus élevée : 1 g de lipides libère 38 kJ (soit environ 9 kcal).
  * Doivent représenter 30 à 35 % de l'apport énergétique total.
- Les protides (protéines) :
  * Macromolécules formées d'acides aminés reliés par des liaisons peptidiques.
  * Rôle avant tout plastique, structural et bâtisseur (synthèse des fibres musculaires d'actine et myosine, des enzymes, des anticorps et de l'hémoglobine).
  * Parmi les 20 acides aminés du vivant, 8 sont dits essentiels pour l'adulte (9 chez l'enfant) car l'organisme ne sait pas les fabriquer : ils doivent obligatoirement provenir de l'alimentation (viande, poisson, œufs, produits laitiers, ou association complémentaire céréale + légumineuse comme mil + niébé).
  * Valeur énergétique : 1 g de protides libère 17 kJ (soit environ 4 kcal). Doivent représenter 12 à 15 % de la ration.

2. Les micronutriments (nutriments non énergétiques protecteurs et fonctionnels)
- L'eau : Premier constituant du corps humain (environ 60 à 65 % du poids corporel chez l'adulte, et 75 % chez le nourrisson). Solvant universel des réactions biochimiques, vecteur de transport du sang et agent central de la thermorégulation par sudation. Les pertes quotidiennes (urine, sueur, respiration) imposent un apport minimal de 1,5 à 2 litres d'eau potable par jour en climat tropical sahélien.
- Les sels minéraux et oligo-éléments :
  * Le calcium (Ca) et le phosphore (P) : minéralisation des os et des dents, contraction musculaire, transmission synaptique et coagulation sanguine.
  * Le fer (Fe) : constituant de l'hème de l'hémoglobine transportant le dioxygène dans les hématies.
  * L'iode (I) : indispensable à la synthèse des hormones thyroïdiennes régulatrices du métabolisme basal.
  * Le sodium (Na) et le potassium (K) : équilibre osmotique et potentiel de membrane neuronal.
- Les vitamines : Molécules organiques requises à doses minimes mais indispensables au métabolisme :
  * Vitamines liposolubles (solubles dans les graisses) :
    - Vitamine A (rétinol) : vision crépusculaire, intégrité des épithéliums et croissance (présente dans l'huile de palme rouge, la carotte, le foie).
    - Vitamine D (calciférol) : absorption intestinale du calcium et ossification (synthétisée par la peau sous l'effet des rayons UV solaires abondants au Sénégal).
    - Vitamine E (antioxydant protecteur membranaire) et vitamine K (coagulation sanguine).
  * Vitamines hydrosolubles (solubles dans l'eau) :
    - Vitamine C (acide ascorbique) : synthèse du collagène, résistance aux infections, puissant antioxydant (présente dans le pain de singe / fruit du baobab bouye, le bissap, les agrumes, la mangue).
    - Vitamines du groupe B (B1, B2, B6, B9 acide folique, B12) : coenzymes du métabolisme énergétique et hématopoïèse.

---

II. LA DÉPENSE ÉNERGÉTIQUE DE L'ORGANISME HUMAIN

Pour maintenir sa masse corporelle constante, l'individu doit respecter le principe de thermodynamique de l'équilibre énergétique :
Apports énergétiques ingérés = Dépenses énergétiques totales

La dépense énergétique journalière totale d'un sujet comprend quatre postes fondamentaux :
1. Le métabolisme de base (MB) :
- Dépense énergétique minimale irréductible nécessaire pour assurer la survie de l'organisme au repos complet, à jeun depuis 12 heures, allongé et à neutralité thermique (environ 20-25 °C).
- Il couvre le travail automatique des organes vitaux : battements cardiaques, mouvements respiratoires, filtration rénale, tonus musculaire résiduel et maintien des gradients ioniques cellulaires.
- Il représente environ 60 à 70 % de la dépense totale d'un individu sédentaire (environ 6 000 à 7 000 kJ/jour chez la femme et 7 500 à 8 500 kJ/jour chez l'homme).
- Il varie selon l'âge (plus élevé chez l'enfant en croissance), le sexe (plus élevé chez l'homme car sa masse musculaire est plus importante) et l'état physiologique (grossesse, allaitement, fièvre).

2. L'activité physique et musculaire :
- Poste le plus variable : de 20 % chez un sédentaire à plus de 50 % chez un travailleur de force (agriculteur, maçon, docker) ou un athlète d'endurance.

3. La thermorégulation :
- L'homme étant un animal homéotherme (température centrale stable à 37 °C), l'organisme dépense de l'énergie pour lutter contre le froid (thermogenèse par frisson) ou contre la chaleur excessive (thermolyse par vasodilatation cutanée et sudation active).

4. L'action dynamique spécifique (ADS) ou thermogenèse alimentaire :
- Dépense d'énergie requise par le travail mécanique et biochimique de digestion, d'absorption intestinale et de stockage des nutriments (environ 10 % de la ration).

---

III. LA RATION ALIMENTAIRE ÉQUILIBRÉE ET LES RÈGLES DIÉTÉTIQUES

1. Définition de la ration alimentaire
La ration alimentaire est la quantité totale d'aliments solides et liquides qu'un individu doit consommer au cours d'une journée (24 heures) pour couvrir l'intégralité de ses besoins énergétiques, plastiques et fonctionnels, sans carence ni excès.

2. Les caractéristiques d'une ration équilibrée
Pour être physiologiquement optimale, la ration doit satisfaire à trois conditions indissociables :
- Condition quantitative : La valeur énergétique totale fournie par les aliments doit égaler la dépense journalière (environ 10 000 à 11 000 kJ/jour pour un adolescent lycéen moyen).
- Condition qualitative : Tous les groupes d'aliments indispensables doivent être présents (aliments énergétiques, aliments bâtisseurs et aliments protecteurs).
- Règle d'or de l'équilibre des nutriments énergétiques (Règle du 421 GPL) :
  * Pour 100 g de nutriments consommés : environ 4 parts de Glucides (55 % de l'énergie), 2 parts de Protides (15 % de l'énergie) et 1 part de Lipides (30 % de l'énergie).
  * Rapport protidique équilibré : Protéines animales / Protéines végétales ≥ 1 pour garantir un apport complet en tous les acides aminés indispensables.

3. Adaptation de la ration aux situations physiologiques au Sénégal
- La femme enceinte et allaitante : Augmentation notable des besoins en protides bâtisseurs, en fer (prévention de l'anémie fœto-maternelle), en calcium et en acide folique (vitamine B9 pour prévenir les malformations du tube neural du fœtus).
- L'enfant et l'adolescent en pleine croissance : Ration surchargée en protéines nobles, calcium et vitamine D pour l'édification du squelette et de la masse musculaire.
- Le travailleur de force sous climat chaud : Augmentation majeure de la ration glucidique énergétique et apport abondant en eau potable et en sel pour compenser les pertes sudorales importantes.`
  ,
  sections: [
    {
      title: 'I. Macronutriments et micronutriments alimentaires',
      content: [
        '1. Macronutriments énergétiques : glucides (17 kJ/g, 55% de l\'énergie), lipides (38 kJ/g, 30%) et protides bâtisseurs (17 kJ/g, 15% avec acides aminés indispensables).',
        '2. Micronutriments fonctionnels : eau vitale (1,5 à 2 L/jour), minéraux (fer, calcium, iode) et vitamines liposolubles/hydrosolubles protectrices.'
      ]
    },
    {
      title: 'II. Postes de la dépense énergétique humaine',
      content: [
        '1. Métabolisme de base (MB) : dépense irréductible de survie à jeun et au repos thermique complet (60 à 70% de la dépense totale).',
        '2. Dépenses variables : travail musculaire d\'activité physique, thermorégulation en climat tropical sahélien et action dynamique spécifique digestive.'
      ]
    },
    {
      title: 'III. Critères d\'une ration alimentaire équilibrée',
      content: [
        '1. Équilibre quantitatif (Entrées = Sorties) et qualitatif (présence conjointe d\'aliments énergétiques, bâtisseurs et protecteurs).',
        '2. Règle du 421 GPL et adaptations physiologiques : surcroît de fer et calcium chez la femme enceinte, et besoins accrus chez l\'adolescent en croissance.'
      ]
    }
  ]
};

export const LESSON_2_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-2',
  number: 'LEÇON L-2',
  title: 'LES MALADIES NUTRITIONNELLES ET LES CARENCES AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 1 • Alimentation, Nutrition et Santé Publique (Série L)',
  level: 'Terminale L1, L2 & L\'',
  readTime: '65 min d\'étude approfondie',
  description: 'Analyse épidémiologique et clinique des déséquilibres alimentaires en santé publique au Sénégal : malnutrition protéino-calorique de l\'enfant (Kwashiorkor et Marasme nutritionnel), avitaminoses (scorbut, rachitisme, xérophtalmie, béribéri), carences minérales (anémie ferriprive, goitre endémique par déficit en iode), les maladies de surcharge en milieu urbain (obésité, athérosclérose, diabète) et les politiques de fortification alimentaire au Sénégal.',
  image: {
    caption: 'Figure L1.2 : Comparaison clinique Kwashiorkor versus Marasme et spectre des carences nutritionnelles',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtLGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#ea580c" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtLGrad2)" stroke="#ea580c" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7c2d12" text-anchor="middle">LES PATHOLOGIES DE LA MALNUTRITION ET DES CARENCES</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">1. Le Kwashiorkor</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Carence protidique pure</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Œdèmes des membres &amp; visage</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Ventre ballonné (hépatomégalie)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Cheveux décolorés et cassants</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Survient au sevrage brutal</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">2. Le Marasme</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Carence globale (calories + protides)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Absence totale d'œdèmes</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Fonte musculaire &amp; adipeuse extrême</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Visage de vieillard ridé</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Famine &amp; sous-alimentation</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">3. Carences Spécifiques</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Anémie ferriprive : carence en Fer</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Goitre &amp; crétinisme : manque d'Iode</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Xérophtalmie : manque de Vitamine A</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Rachitisme : manque Vitamine D/Ca</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Politiques d'enrichissement</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — CLASSE DE TERMINALE L (L1, L2, L')

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 1 : ALIMENTATION, NUTRITION ET SANTÉ PUBLIQUE AU SÉNÉGAL
LEÇON L-2 : LES MALADIES NUTRITIONNELLES ET LES CARENCES AU SÉNÉGAL

INTRODUCTION GÉNÉRALE

La santé et l'espérance de vie d'une population sont tributaires de son état nutritionnel. Dans les pays en développement comme le Sénégal, le secteur de la santé fait face à un phénomène complexe appelé le "double fardeau nutritionnel" :
- D'une part, la persistance de la sous-nutrition et des carences en micronutriments (malnutrition par défaut), touchant sévèrement les enfants de moins de 5 ans et les femmes enceintes dans les zones rurales déshéritées ou périurbaines ;
- D'autre part, l'émergence galopante de la surnutrition et des maladies chroniques non transmissibles (obésité, diabète de type 2, hypertension artérielle, maladies cardiovasculaires) liées à la sédentarité et aux régimes trop riches en sucres raffinés et graisses saturées dans les grandes agglomérations (Dakar, Thiès, Kaolack).
L'analyse scientifique des étiologies, des symptômes cliniques et des moyens de prévention de ces pathologies est indispensable à la formation civique et citoyenne des bacheliers sénégalais.

---

I. LA MALNUTRITION PROTÉINO-CALORIQUE DE L'ENFANT : KWASHIORKOR ET MARASME

La malnutrition aiguë demeure l'une des causes sous-jacentes majeures de mortalité infantile au Sahel. Deux formes cliniques opposées doivent être rigoureusement distinguées :

1. Le Kwashiorkor (malnutrition protidique pure)
- Étiologie : Mot d'origine ghanéenne signifiant "la maladie de l'aîné lorsqu'un cadet vient de naître". Il survient typiquement chez le jeune enfant entre 1 et 3 ans lors d'un sevrage brutal du lait maternel (riche en protéines équilibrées), remplacé par une bouillie exclusive de céréales ou de tubercules (manioc) riche en glucides mais dépourvue de protéines animales ou de légumineuses.
- Signes cliniques cardinaux :
  * Les œdèmes nutritionnels bilatéraux déclives : débutent aux chevilles et aux pieds, puis envahissent les jambes, les cuisses et le visage (faciès lunaire bouffi). L'effondrement du taux d'albumine sanguine (hypoalbuminémie) fait chuter la pression oncotique plasmatique, ce qui provoque la fuite massive d'eau des vaisseaux sanguins vers les tissus interstitiels.
  * Le gros ventre ballonné (hépatomégalie) : stéatose hépatique sévère (accumulation de triglycérides dans les hépatocytes par défaut de synthèse des apolipoprotéines de transport).
  * Les lésions cutanées et capillaires : la peau se craquelle et pèle (dermatose en émail craquelé) ; les cheveux se décolorent (roux ou blonds), deviennent fins, secs et cassants.
  * Les troubles psychomoteurs : enfant apathique, prostré, triste, refusant de s'alimenter (anorexie).
- Traitement : Réhabilitation nutritionnelle progressive par des laits thérapeutiques enrichis en protéines et minéraux (F-75 puis F-100) pour éviter le syndrome de renutrition inappropriée.

2. Le Marasme nutritionnel (sous-nutrition globale)
- Étiologie : Carence sévère et concomitante à la fois en calories (énergie) et en protéines. Il frappe le nourrisson avant l'âge de 1 an, souvent consécutif à un allaitement insuffisant, des gastro-entérites infectieuses répétées avec diarrhées ou à l'extrême pauvreté.
- Signes cliniques :
  * Absence totale d'œdèmes (ce qui permet de le distinguer formellement du Kwashiorkor).
  * Fonte musculaire et adipeuse absolue : perte intégrale du tissu adipeux sous-cutané (les os sont saillants sous une peau flétrie devenue trop grande pour le corps).
  * Faciès caractéristique de "vieillard ridé" avec yeux enfoncés dans les orbites.
  * Enfant alerte, affamé et anxieux, en quête permanente de nourriture.
- Traitement : Réalimentation énergétique progressive par des aliments thérapeutiques prêts à l'emploi (ATPE comme le Plumpy'Nut, pâte à base d'arachide enrichie en micronutriments conçue pour le contexte africain).

---

II. LES MALADIES DE CARENCES EN MICRONUTRIMENTS (LES FAIMS INVISIBLES)

1. L'anémie ferriprive (carence en fer)
- Problème de santé publique numéro un au Sénégal : touche près de 60 à 70 % des enfants d'âge préscolaire et plus de 50 % des femmes enceintes.
- Cause : Apport alimentaire insuffisant en fer héminique biodisponible (viandes, poissons) combiné à des régimes riches en céréales contenant des phytates (qui inhibent l'absorption intestinale du fer) et aux spoliations parasitaires chroniques (ankylostomose, paludisme).
- Signes cliniques : Pâleur des conjonctives et de la paume des mains, fatigue permanente (asthénie), essoufflement à l'effort, vertiges, céphalées, retards d'apprentissage chez l'élève et risque accru d'hémorragie délivrance mortelle chez la parturiente.
- Prévention : Supplémentation systématique des femmes enceintes en comprimés de fer-acide folique lors des consultations prénatales, et enrichissement de la farine de blé industrielle en fer et acide folique au Sénégal.

2. Le goitre endémique et le crétinisme (carence en iode)
- L'iode est indispensable à la glande thyroïde pour produire les hormones T3 et T4.
- Dans les régions intérieures du Sénégal éloignées de l'océan (ex. région de Tambacounda et Kédougou) où les sols sont lessivés et pauvres en iode :
  * Hypertrophie compensatrice de la glande thyroïde : formation d'une volumineuse masse au cou appelée goitre.
  * Chez le fœtus et le jeune enfant : la carence sévère entraîne le crétinisme endémique, caractérisé par un retard mental profond et irréversible doublé d'un nanisme dysharmonieux.
- Prévention : Loi rendant obligatoire l'iodation universelle du sel de cuisine au Sénégal.

3. Les avitaminoses majeures
- La xérophtalmie (carence en vitamine A) : Première cause de cécité évitable chez l'enfant en Afrique. Débute par une héméralopie (baisse de la vision au crépuscule), puis dessèchement de la conjonctive (taches de Bitôt) et ulcération destructrice de la cornée (kératomalacie). Prévention : campagnes nationales de supplémentation semestrielle en capsules de vitamine A et promotion de l'huile de palme rouge et des légumes feuilles locaux (moringa, oseille de Guinée).
- Le rachitisme (carence en vitamine D et calcium) : Déformation osseuse chez l'enfant (jambes arquées en parenthèses, chapelet costal, retard de fermeture de la fontanelle).
- Le scorbut (carence en vitamine C) : Déchaussement des dents, saignement des gencives, hémorragies cutanées sous-périostées et mort par défaillance cardiaque. Prévention : consommation régulière de fruits frais locaux (mangues, agrumes, bouye de baobab).

---

III. LES MALADIES PAR SURCHARGE ET LA TRANSITION NUTRITIONNELLE EN MILIEU URBAIN

Dans les métropoles sénégalaises (Dakar, Pikine, Guédiawaye, Rufisque), la modification profonde des modes de vie engendre une flambée des pathologies de surcharge :
1. L'obésité et le surpoids :
- Définis par l'Indice de Masse Corporelle (IMC = Poids en kg / (Taille en m)²) supérieur à 25 kg/m² (surpoids) ou 30 kg/m² (obésité).
- Causée par la consommation excessive d'aliments hypercaloriques (boissons gazeuses sucrées, fritures, restauration rapide) et la sédentarité (temps prolongé devant les écrans, transports motorisés).
- Facteur culturel : L'embonpoint féminin a longtemps été perçu dans la société traditionnelle sénégalaise comme un signe d'aisance sociale, de beauté et de fécondité, favorisant des pratiques dangereuses de gavage médicamenteux illégal (utilisation abusive de corticoïdes pour grossir).
2. L'athérosclérose et les maladies cardiovasculaires :
- L'excès de cholestérol sanguin (dépôt lipidique) forme des plaques d'athérome dans la paroi des artères, provoquant leur durcissement et leur obstruction progressive (infarctus du myocarde, accidents vasculaires cérébraux AVC).
3. Le diabète de type 2 :
- Lié à l'insulinorésistance provoquée par l'excès de graisse viscérale abdominale.`
  ,
  sections: [
    {
      title: 'I. La malnutrition protéino-calorique : Kwashiorkor vs Marasme',
      content: [
        '1. Kwashiorkor : carence protidique pure au sevrage, œdèmes bilatéraux par hypoalbuminémie, hépatomégalie stéatosique et cheveux cassants décolorés.',
        '2. Marasme : sous-alimentation globale (calories et protéines), fonte musculaire et adipeuse complète sans œdèmes, faciès de vieillard ridé.',
        '3. Protocoles thérapeutiques de renutrition : laits F-75/F-100 et pâtes nutritives ATPE.'
      ]
    },
    {
      title: 'II. Carences en micronutriments en santé publique au Sénégal',
      content: [
        '1. Anémie ferriprive : déficit en fer réduisant l\'hémoglobine, fatigue et risques obstétricaux ; enrichissement obligatoire de la farine.',
        '2. Carence iodée : goitre thyroïdien et crétinisme irréversible ; prévention par l\'iodation universelle du sel de cuisine.',
        '3. Avitaminoses : xérophtalmie (cécité par manque de vitamine A), rachitisme (vitamine D) et scorbut (vitamine C).'
      ]
    },
    {
      title: 'III. Maladies de surcharge et transition nutritionnelle urbaine',
      content: [
        '1. Double fardeau nutritionnel : sous-nutrition infantile rurale versus épidémie d\'obésité et diabète en milieu urbain.',
        '2. Facteurs : sédentarité, alimentation industrielle hypercalorique et représentations culturelles de l\'embonpoint.'
      ]
    }
  ]
};

export const LESSON_3_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-3',
  number: 'LEÇON L-3',
  title: 'PHYSIOLOGIE DE LA REPRODUCTION ET HYGIÈNE SEXUELLE',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 2 • Santé de la Reproduction et Démographie (Série L)',
  level: 'Terminale L1, L2 & L\'',
  readTime: '65 min d\'étude approfondie',
  description: 'Étude anatomique et physiologique des appareils génitaux masculin et féminin : modifications morphologiques et psychologiques de la puberté, cycles sexuels chez la femme (cycle ovarien, menstruel et de la glaire cervicale), identification rigoureuse de la période de fécondité, hygiène menstruelle, et importance vitale du suivi médical prénatal au Sénégal.',
  image: {
    caption: 'Figure L1.3 : Anatomie fonctionnelle de l\'appareil reproducteur féminin et synchronisation des cycles',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtLGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#ea580c" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtLGrad3)" stroke="#ea580c" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7c2d12" text-anchor="middle">ANATOMIE ET CYCLES SEXUELS DE LA REPRODUCTION HUMAINE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">1. Appareil Féminin</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Ovaires : production d'ovocytes &amp; hormones</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Trompes : lieu de la fécondation</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Utérus (myomètre &amp; endomètre)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Col utérin &amp; glaire cervicale</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Organes pairs &amp; cavitaires</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">2. Le Cycle de 28 Jours</text>
        <text x="14" y="52" font-size="11" fill="#374151">• J1 à J5 : Règles (desquamation)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• J6 à J13 : Folliculaire (œstrogènes)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• J14 : Ovulation (libération ovocyte)</text>
        <text x="14" y="118" font-size="11" fill="#374151">• J15 à J28 : Lutéale (progestérone)</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Période féconde : J11 à J16</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">3. Hygiène &amp; Maternité</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Hygiène menstruelle rigoureuse</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Suivi médical prénatal régulier</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Dépistage précoce des complications</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Accouchement assisté en maternité</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Réduction mortalité maternelle</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — CLASSE DE TERMINALE L (L1, L2, L')

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 2 : SANTÉ DE LA REPRODUCTION ET DÉMOGRAPHIE
LEÇON L-3 : PHYSIOLOGIE DE LA REPRODUCTION ET HYGIÈNE SEXUELLE

INTRODUCTION GÉNÉRALE

La puberté marque l'étape biologique charnière où l'enfant acquiert la maturité physiologique de ses organes reproducteurs et la capacité de procréer. Cette transformation s'accompagne de profonds bouleversements hormonaux, physiques et psycho-affectifs.

Chez la femme, la reproduction obéit à un rythme biologique cyclique régulier qui se manifeste de façon visible par les règles ou menstruations. La maîtrise des mécanismes intimes des cycles sexuels et de la période de fécondité est un prérequis fondamental pour la santé des jeunes filles et des jeunes hommes, la prévention des grossesses précoces non désirées en milieu scolaire, et la promotion d'une hygiène corporelle et sexuelle responsable.

---

I. ANATOMIE FONCTIONNELLE DES APPAREILS REPRODUCTEURS

1. L'appareil reproducteur masculin
- Les testicules : glandes ovoïdes logées hors de l'abdomen dans les bourses (scrotum) pour maintenir une température d'environ 34 °C indispensable à la spermatogenèse. Ils ont une double fonction :
  * Production continue de spermatozoïdes dans les tubes séminifères ;
  * Sécrétion de testostérone par les cellules interstitielles de Leydig.
- Les voies spermatiques : épididyme (lieu de maturation et de stockage des spermatozoïdes), canaux déférents et urètre traversant le pénis.
- Les glandes annexes : vésicules séminales et prostate sécrétant le liquide séminal riche en fructose et mucus basique pour nourrir et protéger les spermatozoïdes contre l'acidité vaginale. Le mélange forme le sperme.

2. L'appareil reproducteur féminin
- Les ovaires : gonades femelles situées dans la cavité pelvienne, produisant les ovocytes et sécrétant les œstrogènes et la progestérone.
- Les trompes de Fallope (trompes utérines) : conduits bordés de cils vibratiles reliant les ovaires à l'utérus. Le tiers supérieur (l'ampoule tubaire) est le lieu unique et exclusif où s'effectue la fécondation.
- L'utérus : organe musculaire creux en forme de poire inversée comprenant :
  * Le myomètre : épaisse paroi de muscle lisse contractile lors de l'accouchement ;
  * L'endomètre : muqueuse interne richement vascularisée subissant des remaniements cycliques pour accueillir l'embryon ;
  * Le col de l'utérus (cervix) : sécrète la glaire cervicale qui ferme l'orifice utérin.
- Le vagin et la vulve (organes de copulation et d'accouchement).

---

II. LES CYCLES SEXUELS CHEZ LA FEMME ET LA PÉRIODE DE FÉCONDITÉ

Chez la femme, un cycle sexuel complet dure conventionnellement 28 jours. Par convention internationale, le premier jour du cycle (J1) correspond au premier jour d'apparition des saignements menstruels (règles).

1. La synchronisation des trois cycles féminins
- Le cycle ovarien :
  * Phase folliculaire (J1 à J13) : Maturation d'un follicule cavitaire qui sécrète des œstrogènes en quantité croissante.
  * Ovulation (J14 pour un cycle de 28 jours) : Libération de l'ovocyte par rupture folliculaire.
  * Phase lutéale (J15 à J28) : Formation du corps jaune sécrétant progestérone et œstrogènes. Durée fixe et constante de 14 jours chez toutes les femmes.
- Le cycle utérin (menstruel) :
  * Menstruations (J1 à J5) : Desquamation hémorragique de la muqueuse en raison de la chute hormonale.
  * Phase de prolifération (J6 à J14) : Reconstitution et épaississement de la muqueuse sous l'action des œstrogènes.
  * Phase sécrétoire (J15 à J28) : Formation de la dentelle utérine riche en glycogène sous l'action de la progestérone.
- Le cycle de la glaire cervicale :
  * En période non féconde : Glaire épaisse, acide et visqueuse à maillage très serré formant un bouchon impénétrable aux spermatozoïdes et aux microbes.
  * En période ovulatoire (autour de J14) : Sous l'effet du pic d'œstrogènes, la glaire devient abondante, limpide, filante (ressemblant à du blanc d'œuf cru), alcaline et à maillage très lâche, facilitant l'ascension rapide des spermatozoïdes vers l'utérus.

2. Détermination scientifique de la période de fécondité
- Durée de survie des gamètes dans les voies génitales féminines :
  * Les spermatozoïdes conservent leur pouvoir fécondant pendant environ 3 à 4 jours (72 à 96 heures) dans la glaire cervicale ;
  * L'ovocyte a une durée de vie très courte : il ne reste fécondable que pendant 24 heures (1 jour) après l'ovulation.
- Calcul de la fenêtre de fécondité pour un cycle théorique de 28 jours :
  * Ovulation le 14e jour (J14).
  * En tenant compte de la survie des spermatozoïdes : un rapport sexuel ayant lieu 3 jours avant l'ovulation (J11, J12, J13) peut être fécondant.
  * En tenant compte de la survie de l'ovocyte : un rapport ayant lieu jusqu'à 24h après l'ovulation (J15) peut être fécondant.
  * Période de fécondité théorique : du 11e au 16e jour du cycle (J11 à J16).
- Attention aux cycles irréguliers : La phase folliculaire est variable d'un cycle à l'autre et sensible au stress, aux voyages et aux émotions. Seule la phase lutéale est constante (toujours 14 jours). Pour un cycle de 32 jours, l'ovulation a lieu le 18e jour (32 - 14 = J18). Pour un cycle de 24 jours, l'ovulation a lieu le 10e jour (24 - 14 = J10).

---

III. HYGIÈNE SEXUELLE, HYGIÈNE MENSTRUELLE ET MATERNITÉ SANS RISQUE

1. L'hygiène menstruelle chez la jeune fille
- Utilisation de protections hygiéniques propres et saines (serviettes hygiéniques jetables ou lavables en coton bien désinfectées, culottes menstruelles).
- Changement régulier des protections (toutes les 4 à 6 heures) pour éviter la prolifération de bactéries et le choc toxique staphylococcique.
- Toilette intime quotidienne à l'eau propre et au savon doux neutre : laver uniquement la vulve d'avant en arrière (du méat urinaire vers l'anus pour ne pas ramener de germes fécaux dans le vagin). Bannir formellement les douches vaginales internes qui détruisent la flore protectrice de Döderlein et favorisent les mycoses.

2. Le suivi médical prénatal au Sénégal : La maternité sans risque
- La mortalité maternelle et néonatale demeure une préoccupation majeure au Sénégal.
- Recommandation officielle du Ministère de la Santé : Au moins 4 Consultations Prénatales (CPN) médicalisées obligatoires durant la grossesse :
  * Première CPN (avant 3 mois) : Déclaration de grossesse, confirmation de l'âge gestationnel par échographie, recherche du groupe sanguin et du statut Rhésus (prévention de l'incompatibilité fœto-maternelle), dépistage du VIH, de la syphilis et de l'hépatite B.
  * Deuxième et troisième CPN : Mesure de la pression artérielle (dépistage de la toxémie gravidique / pré-éclampsie), supplémentation continue en fer et acide folique, et administration du Traitement Préventif Intermittent (TPI) du paludisme à la sulfadoxine-pyriméthamine (SP).
  * Quatrième CPN : Préparation de l'accouchement assisté par un personnel qualifié (sage-femme, médecin) dans une structure de santé agréée, prévenant ainsi les drames de l'hémorragie de la délivrance et des infections post-partum.`
  ,
  sections: [
    {
      title: 'I. Anatomie comparée des appareils reproducteurs',
      content: [
        '1. Appareil masculin : testicules (tubes séminifères producteurs de gamètes et cellules de Leydig sécrétrices de testostérone), épididyme, canaux déférents et glandes annexes.',
        '2. Appareil féminin : ovaires producteurs d\'ovocytes, trompes de Fallope (lieu exclusif de la fécondation), utérus (myomètre et endomètre) et vagin.'
      ]
    },
    {
      title: 'II. Synchronisation des cycles sexuels et période de fécondité',
      content: [
        '1. Synchronisme des 3 cycles : ovarien (folliculaire, ovulation à J14, corps jaune), utérin (règles puis dentelle utérine) et glaire cervicale filante alcaline.',
        '2. Période de fécondité : calcul basée sur la durée de survie des spermatozoïdes (3-4 jours) et de l\'ovocyte (24 heures) -> J11 à J16 pour un cycle de 28 jours.'
      ]
    },
    {
      title: 'III. Hygiène menstruelle et suivi médical prénatal',
      content: [
        '1. Règles d\'hygiène intime : toilette vulvaire d\'avant en arrière, proscription des douches vaginales agressives pour préserver la flore de Döderlein.',
        '2. Protocole des 4 CPN au Sénégal : dépistages obligatoires (VIH, anémie, pré-éclampsie), prévention du paludisme et accouchement en maternité sécurisée.'
      ]
    }
  ]
};

export const LESSON_4_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-4',
  number: 'LEÇON L-4',
  title: 'LA MAÎTRISE DE LA FÉCONDITÉ ET LA RÉGULATION DES NAISSANCES',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 2 • Santé de la Reproduction et Démographie (Série L)',
  level: 'Terminale L1, L2 & L\'',
  readTime: '65 min d\'étude approfondie',
  description: 'Étude scientifique et sociétale de la planification familiale : avantages médicaux et économiques de l\'espacement des naissances, classification méthodique des méthodes contraceptives (naturelles, barrières, hormonales, intra-utérines, chirurgicales), mode d\'action, efficacité (indice de Pearl), et aperçu des techniques modernes de Procréation Médicalement Assistée (PMA : insémination artificielle, FIVETE).',
  image: {
    caption: 'Figure L1.4 : Panorama comparatif des méthodes contraceptives et leurs points d\'impact physiologiques',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="svtLGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#ea580c" stop-opacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="16" fill="url(#svtLGrad4)" stroke="#ea580c" stroke-width="1.5"/>
      <text x="390" y="32" font-size="16" font-weight="bold" fill="#7c2d12" text-anchor="middle">LES VOIES DE LA MAÎTRISE DE LA PROCRÉATION HUMAINE</text>
      
      <g transform="translate(30, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">1. Méthodes Barrières</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Préservatif masculin en latex</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Préservatif féminin (fémidon)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Double protection :</text>
        <text x="14" y="118" font-size="11" fill="#374151">  Grossesse non désirée + IST/VIH</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Seule protection contre IST</text>
      </g>

      <g transform="translate(280, 60)">
        <rect width="220" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="110" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">2. Méthodes Hormonales</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Pilule combinée (œstro-progestatif)</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Implants sous-cutanés (3 à 5 ans)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Injections trimestrielles</text>
        <text x="14" y="118" font-size="11" fill="#374151">• Triple action : blocage ovulation,</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">  glaire hostile &amp; atrophie endomètre</text>
      </g>

      <g transform="translate(535, 60)">
        <rect width="215" height="170" rx="10" fill="#ffffff" stroke="#f97316" stroke-width="1.5"/>
        <text x="107" y="24" font-size="13" font-weight="bold" fill="#7c2d12" text-anchor="middle">3. DIU &amp; PMA</text>
        <text x="14" y="52" font-size="11" fill="#374151">• Stérilet / DIU au cuivre ou hormonal</text>
        <text x="14" y="74" font-size="11" fill="#374151">• Contraception d'urgence (pilule J+)</text>
        <text x="14" y="96" font-size="11" fill="#374151">• Procréation Médicalement Assistée :</text>
        <text x="14" y="118" font-size="11" fill="#374151">  Insémination artificielle &amp; FIVETE</text>
        <text x="14" y="140" font-size="11" fill="#c2410c" font-weight="bold">→ Traitement de l'infertilité du couple</text>
      </g>
    </svg>`
  },
  fullText: `COURS MAGISTRAL APPROFONDI — CLASSE DE TERMINALE L (L1, L2, L')

DISCIPLINE : SCIENCES DE LA VIE ET DE LA TERRE (SVT)
THÈME 2 : SANTÉ DE LA REPRODUCTION ET DÉMOGRAPHIE
LEÇON L-4 : LA MAÎTRISE DE LA FÉCONDITÉ ET LA RÉGULATION DES NAISSANCES

INTRODUCTION GÉNÉRALE

La maîtrise de la procréation constitue l'une des conquêtes scientifiques et sociales les plus décisives du XXe siècle. Elle permet aux individus et aux couples de choisir librement et de manière responsable le moment d'avoir des enfants, leur nombre et l'espacement entre les naissances.

Au Sénégal, la planification familiale représente un levier stratégique majeur de développement économique et d'émancipation féminine. L'espacement adéquat des grossesses (d'au moins 2 à 3 ans) réduit de façon spectaculaire la mortalité maternelle et infantile en permettant à l'organisme de la mère de récupérer ses réserves biologiques et en garantissant un allaitement prolongé de l'enfant. À l'opposé, les progrès de la biologie de la reproduction offrent aujourd'hui des solutions médicales aux couples souffrant d'infertilité involontaire grâce à la Procréation Médicalement Assistée (PMA).

---

I. LES MÉTHODES CONTRACEPTIVES ET LEUR MODE D'ACTION

On appelle contraception l'ensemble des moyens réversibles et temporaires utilisés pour empêcher la survenue d'une grossesse lors d'un rapport sexuel. L'efficacité d'une méthode est mesurée scientifiquement par l'Indice de Pearl (nombre de grossesses non désirées pour 100 femmes utilisant la méthode pendant un an).

1. Les méthodes naturelles (d'abstinence périodique)
- Principe : Repérer la période fertile du cycle féminin et s'abstenir de tout rapport sexuel non protégé pendant ces jours à risque.
- La méthode du calendrier (Ogino-Knaus) : Calcul statistique basé sur la régularité des 6 à 12 cycles précédents. Méthode très peu fiable chez la jeune fille (indice de Pearl élevé de 15 à 25 %) en raison des fluctuations imprévisibles de la date d'ovulation.
- La méthode des températures basales : La progestérone sécrétée par le corps jaune après l'ovulation élève la température rectale matinale d'environ 0,3 à 0,5 °C (plateau thermique au-dessus de 37 °C). L'ovulation a lieu juste avant ce décalage thermique.
- La méthode Billings (observation de la glaire cervicale) : Reconnaissance de l'apparition d'une glaire cervicale abondante, fluide et transparente annonçant l'imminence de l'ovulation.
- La méthode MAMA (Méthode de l'Allaitement Maternel et de l'Aménorrhée) : Chez la femme qui allaite son enfant au sein de manière exclusive, fréquente et à la demande (jour et nuit), la prolactine hypophysaire inhibe la sécrétion de GnRH et bloque l'ovulation pendant les 6 premiers mois.

2. Les méthodes mécaniques et barrières
- Le préservatif masculin (condom en latex) et féminin (fémidon en polyuréthane) :
  * Ils recueillent le sperme lors de l'éjaculation et empêchent physiquement les spermatozoïdes de pénétrer dans les voies génitales féminines.
  * Propriété capitale unique : Ils constituent la seule et unique méthode contraceptive au monde qui assure simultanément une protection efficace contre les Infections Sexuellement Transmissibles (IST) et le VIH/SIDA (stratégie de la "double protection").
- Les spermicides : Ovules, gels ou crèmes introduits au fond du vagin avant le rapport, détruisant la membrane des spermatozoïdes (souvent utilisés en appoint).

3. Les méthodes hormonales (hautement efficaces, Indice de Pearl < 1 %)
- La pilule combinée œstroprogestative :
  * Prise orale quotidienne d'une association d'œstrogène synthétique et de progestatif.
  * Triple mécanisme d'action synergique :
    1. Blocage absolu de l'ovulation : Les hormones de synthèse exercent un rétrocontrôle négatif continu sur l'axe hypothalamo-hypophysaire, maintenant les taux de LH et FSH à un niveau plancher (absence de pic de LH, donc pas d'ovulation).
    2. Modification de la glaire cervicale : La glaire reste épaisse, visqueuse et imperméable aux spermatozoïdes tout au long du cycle.
    3. Atrophie de l'endomètre : La muqueuse utérine reste mince et impropre à toute nidation embryonnaire éventuelle.
- Les implants sous-cutanés (ex. Norplant, Jadelle, Implanon) : Petits bâtonnets souples insérés sous la peau de la face interne du bras par un agent de santé, libérant en continu une faible dose de progestatif pendant 3 à 5 ans.
- Les injections intramusculaires trimestrielles de progestatif (ex. Dépo-Provera).

4. Le Dispositif Intra-Utérin (DIU ou Stérilet)
- Petit dispositif en forme de "T" ou de boucle en plastique inséré par un médecin ou une sage-femme au fond de la cavité utérine pour une durée de 5 à 10 ans.
- DIU au cuivre : Le cuivre libéré exerce un effet cytotoxique direct sur les spermatozoïdes (altère leur motilité et leur pouvoir fécondant) et induit une réaction inflammatoire locale bénigne de l'endomètre empêchant toute nidation.
- DIU hormonal (libérant du lévonorgestrel) : Épaissit la glaire et atrophie l'endomètre.

5. La contraception d'urgence (la "pilule du lendemain")
- Prise hormonale exceptionnelle à forte dose de progestatif (Lévonorgestrel) ou d'acétate d'ulipristal après un rapport sexuel non protégé ou un accident de préservatif.
- Doit être prise le plus tôt possible, idéalement dans les 24 heures et au maximum dans les 72 heures (3 jours) suivant le rapport. Elle agit en retardant ou bloquant l'ovulation si elle n'a pas encore eu lieu. Ce n'est en aucun cas une méthode abortive ni une contraception de routine.

---

II. LA PROCRÉATION MÉDICALEMENT ASSISTÉE (PMA) FACE À L'INFERTILITÉ

L'infertilité touche environ 15 à 20 % des couples (causes masculines pour un tiers : azoospermie, oligospermie, asthénospermie ; causes féminines pour un tiers : trompes bouchées, anovulation, endométriose ; et causes mixtes ou inexpliquées pour le dernier tiers). La PMA offre plusieurs solutions biotechnologiques :

1. L'insémination artificielle intra-utérine (IA)
- Après sélection et concentration des spermatozoïdes les plus mobiles du conjoint (ou d'un donneur), ceux-ci sont directement déposés dans la cavité utérine à l'aide d'un fin cathéter au moment précis de l'ovulation de la femme (stimulée hormonalement).

2. La Fécondation In Vitro et Transfert d'Embryon (FIVETE)
- Étapes du protocole médical :
  * 1. Stimulation ovarienne par injections de gonadotrophines pour obtenir plusieurs follicules mûrs.
  * 2. Ponction des ovocytes sous contrôle échographique par voie vaginale.
  * 3. Mise en présence in vitro dans une boîte de Pétri des ovocytes avec des centaines de milliers de spermatozoïdes (ou injection intracytoplasmique d'un spermatozoïde unique dans l'ovocyte par micro-manipulation : technique ICSI).
  * 4. Développement embryonnaire précoce en incubateur pendant 2 à 5 jours.
  * 5. Transfert de 1 à 2 embryons sélectionnés directement dans la cavité utérine de la future mère. Les embryons surnuméraires sont congelés par vitrification.`
  ,
  sections: [
    {
      title: 'I. Les méthodes contraceptives et leur efficacité',
      content: [
        '1. Méthodes naturelles : Ogino, température basale, glaire cervicale Billings et allaitement MAMA (efficacité modérée liée aux irrégularités du cycle).',
        '2. Méthodes barrières : préservatif masculin et féminin offrant la double protection vitale (contraception + protection absolue contre les IST/VIH).',
        '3. Méthodes hormonales : pilule combinée œstroprogestative, implants et injections agissant par blocage du pic de LH, glaire hostile et atrophie de l\'endomètre.',
        '4. Dispositif intra-utérin (DIU au cuivre ou hormonal) et contraception d\'urgence au lévonorgestrel.'
      ]
    },
    {
      title: 'II. La Procréation Médicalement Assistée (PMA)',
      content: [
        '1. Diagnostic de l\'infertilité du couple : causes féminines (trompes obstruées, anovulation) et masculines (oligo-asthénospermie).',
        '2. Techniques biotechnologiques : insémination artificielle intra-utérine et protocole de FIVETE (stimulation, ponction, fécondation in vitro et transfert embryonnaire).'
      ]
    }
  ]
};
