import { LessonContent } from './courses';

// =========================================================================
// SVT CLASSE DE TERMINALE L (SÉRIES L1, L2, L') — PARTIE 2 (LEÇONS L-5 À L-8)
// Génétique humaine, Immunologie, Écologie et Environnement au Sénégal
// Programme officiel national de la République du Sénégal
// Leçons exhaustives sans résumé, grands axes et schémas scientifiques
// =========================================================================

export const LESSON_5_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-5',
  number: 'LEÇON L-5',
  title: 'LA GÉNÉTIQUE HUMAINE ET LA TRANSMISSION DES CARACTÈRES HÉRÉDITAIRES',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 2 • Génétique humaine et Hérédité (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Principes de la génétique formelle appliquée à l'espèce humaine : étude des arbres généalogiques (pédigrées), transmission des anomalies autosomiques dominantes et récessives (drépanocytose, albinisme), des anomalies liées aux hétérochromosomes X et Y (hémophilie, daltonisme), caryotypes et anomalies chromosomiques, et importance du conseil génétique prénuptial au Sénégal.",
  image: {
    caption: 'Figure L5.1 : Arbre généalogique (pédigrée) et transmission de la drépanocytose autosomique récessive',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="genLGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#047857" stop-opacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#genLGrad)" stroke="#10b981" stroke-width="1.5"/>
      <text x="390" y="28" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">MODÈLE DE TRANSMISSION GÉNÉTIQUE HUMAINE : ARBRE GÉNÉALOGIQUE & CROISEMENTS</text>
      
      <!-- Légende symboles -->
      <rect x="50" y="55" width="22" height="22" fill="#fff" stroke="#1f2937" stroke-width="1.5"/>
      <text x="80" y="71" font-size="11" fill="#374151">Homme sain</text>
      <circle cx="170" cy="66" r="11" fill="#fff" stroke="#1f2937" stroke-width="1.5"/>
      <text x="190" y="71" font-size="11" fill="#374151">Femme saine</text>
      
      <rect x="290" y="55" width="22" height="22" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
      <text x="320" y="71" font-size="11" fill="#374151">Homme malade [S]</text>
      <circle cx="430" cy="66" r="11" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
      <text x="450" y="71" font-size="11" fill="#374151">Femme malade [S]</text>
      
      <!-- Arbre Généalogique Génération I -->
      <text x="30" y="125" font-size="13" font-weight="bold" fill="#047857">I</text>
      <rect x="70" y="110" width="26" height="26" fill="#fff" stroke="#1f2937" stroke-width="2"/>
      <line x1="96" y1="123" x2="160" y2="123" stroke="#1f2937" stroke-width="2"/>
      <circle cx="173" cy="123" r="13" fill="#fff" stroke="#1f2937" stroke-width="2"/>
      <text x="60" y="150" font-size="10" fill="#047857">Père (A//S)</text>
      <text x="160" y="150" font-size="10" fill="#047857">Mère (A//S)</text>
      
      <!-- Descendance Génération II -->
      <line x1="128" y1="123" x2="128" y2="175" stroke="#1f2937" stroke-width="2"/>
      <line x1="60" y1="175" x2="230" y2="175" stroke="#1f2937" stroke-width="2"/>
      
      <line x1="60" y1="175" x2="60" y2="195" stroke="#1f2937" stroke-width="2"/>
      <circle cx="60" cy="207" r="12" fill="#fff" stroke="#1f2937" stroke-width="2"/>
      <text x="45" y="232" font-size="9" fill="#374151">Fille (A//A)</text>
      
      <line x1="115" y1="175" x2="115" y2="195" stroke="#1f2937" stroke-width="2"/>
      <rect x="103" y="195" width="24" height="24" fill="#fff" stroke="#1f2937" stroke-width="2"/>
      <text x="95" y="232" font-size="9" fill="#374151">Fils (A//S)</text>
      
      <line x1="175" y1="175" x2="175" y2="195" stroke="#1f2937" stroke-width="2"/>
      <circle cx="175" cy="207" r="12" fill="#fff" stroke="#1f2937" stroke-width="2"/>
      <text x="155" y="232" font-size="9" fill="#374151">Fille (A//S)</text>
      
      <line x1="230" y1="175" x2="230" y2="195" stroke="#1f2937" stroke-width="2"/>
      <rect x="218" y="195" width="24" height="24" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
      <text x="210" y="232" font-size="9" font-weight="bold" fill="#b91c1c">Fils (S//S)</text>
      
      <!-- Échiquier de croisement Punnett -->
      <rect x="360" y="100" width="390" height="135" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="555" y="118" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">ÉCHIQUIER DE CROISEMENT : PARENTS HÉTÉROZYGOTES (A//S x A//S)</text>
      <line x1="360" y1="128" x2="750" y2="128" stroke="#10b981" stroke-width="1"/>
      <line x1="440" y1="128" x2="440" y2="235" stroke="#10b981" stroke-width="1"/>
      <line x1="595" y1="128" x2="595" y2="235" stroke="#10b981" stroke-width="1"/>
      <line x1="360" y1="180" x2="750" y2="180" stroke="#10b981" stroke-width="1"/>
      
      <text x="400" y="155" font-size="11" font-weight="bold" fill="#1f2937">Gamète ♂ / ♀</text>
      <text x="515" y="155" font-size="11" font-weight="bold" fill="#047857">Gamète ♀ A (50%)</text>
      <text x="670" y="155" font-size="11" font-weight="bold" fill="#b91c1c">Gamète ♀ S (50%)</text>
      
      <text x="400" y="205" font-size="11" font-weight="bold" fill="#047857">Gamète ♂ A</text>
      <text x="515" y="202" font-size="10" fill="#047857">A//A (Sain homozygote) : 25%</text>
      <text x="670" y="202" font-size="10" fill="#d97706">A//S (Porteur sain) : 25%</text>
      
      <text x="400" y="228" font-size="11" font-weight="bold" fill="#b91c1c">Gamète ♂ S</text>
      <text x="515" y="225" font-size="10" fill="#d97706">A//S (Porteur sain) : 25%</text>
      <text x="670" y="225" font-size="10" font-weight="bold" fill="#b91c1c">S//S (Malade drépanocytaire) : 25%</text>
    </svg>`
  },
  introduction: "L'hérédité humaine obéit aux lois universelles de Mendel, mais son analyse chez l'Homme présente des contraintes éthiques et biologiques majeures (absence de croisements dirigés, faible descendance par génération, long temps de génération). Les généticiens recourent donc à l'analyse des arbres généalogiques (pédigrées), au caryotype et aux techniques de biologie moléculaire. Au Sénégal et en Afrique subsaharienne, la compréhension de la transmission des tares héréditaires, en particulier la drépanocytose (hémoglobinose S) dont la prévalence du trait atteint 8 à 12 % de la population, constitue un enjeu de santé publique de premier plan justifiant le conseil génétique prémarital.",
  sections: [
    {
      title: "I. Les particularités méthodologiques de la génétique humaine",
      content: [
        "1. Les obstacles à l'étude génétique chez l'Homme : impossibilité morale et éthique des croisements expérimentaux dirigés, cycle biologique long (20 à 25 ans entre deux générations), et descendance numériquement limitée ne permettant pas une vérification statistique immédiate des proportions mendéliennes classiques (3/4, 1/4 ou 9/16, 3/16, 3/16, 1/16).",
        "2. Les outils d'investigation : établissement d'arbres généalogiques normés selon les conventions internationales (carré pour l'homme, cercle pour la femme, losange pour le sexe indéterminé, symboles noircis ou colorés pour les individus atteints du phénotype étudié, double trait pour les unions consanguines).",
        "3. L'analyse chromosomique (caryotype) : blocage des mitoses en métaphase à la colchicine, choc hypotonique et coloration des bandes chromosomiques (bandes G ou R) pour dénombrer les autosomes (44 autosomes = 22 paires) et les gonosomes ou hétérochromosomes (XX chez la femme, XY chez l'homme, total 2n = 46 chromosomes)."
      ]
    },
    {
      title: "II. Hérédité autosomique récessive : exemple majeur de la drépanocytose",
      content: [
        "1. Critères diagnostiques d'un allèle récessif autosomique sur un pédigrée :",
        "   - Deux parents phénotypiquement sains peuvent donner naissance à un enfant malade (l'anomalie 'saute' des générations). Les deux parents sont obligatoirement hétérozygotes porteurs sains (conducteurs).",
        "   - Deux parents atteints ne donnent naissance qu'à des enfants malades.",
        "   - Les deux sexes (garçons et filles) sont atteints dans des proportions équivalentes, ce qui écarte la localisation sur les chromosomes sexuels (exclusion du gonosome).",
        "2. La drépanocytose (hémoglobinopathie S) : mutation ponctuelle sur le gène codant la chaîne bêta de la globine (remplacement de l'adénine par la thymine au codon 6, substituant l'acide glutamique hydrophile par la valine hydrophobe).",
        "3. Conséquences physiologiques : en condition d'hypoxie (manque d'oxygène, altitude, fièvre, déshydratation), l'hémoglobine HbS polymérise en fibres insolubles rigides, déformant le globule rouge en faucille (drépanocyte ou hématie falciforme).",
        "4. Symptômes cliniques : anémie hémolytique chronique, crises vaso-occlusives hyperalgiques (occlusion des capillaires par les hématies rigides entraînant ischémie et nécrose tissulaire), susceptibilité accrue aux infections bactériennes majeures (splénomégalie puis atrophie splénique).",
        "5. Phénotypes et génotypes : individu sain [A] de génotype (A//A) ; porteur sain du trait drépanocytaire [AS] de génotype (A//S), généralement asymptomatique et bénéficiant d'une résistance relative au neuropaludisme à Plasmodium falciparum (sélection équilibrée en zone intertropicale) ; drépanocytaire homozygote malade [S] de génotype (S//S).",
        "6. Risque lors de l'union de deux porteurs sains (A//S x A//S) : 25% d'enfants sains homozygotes (A//A), 50% d'enfants porteurs sains hétérozygotes (A//S), et 25% d'enfants atteints d'anémie falciforme sévère (S//S)."
      ]
    },
    {
      title: "III. Hérédité autosomique dominante et hérédité liée au sexe (gonosomique)",
      content: [
        "1. Hérédité autosomique dominante (exemple de la chorée de Huntington ou de la brachydactylie) :",
        "   - Tout individu atteint a au moins un parent atteint (sauf cas rare de mutation de novo). La tare ne saute pas de génération.",
        "   - Un parent atteint hétérozygote transmet l'allèle muté à 50% de sa descendance, quel que soit le sexe de l'enfant.",
        "2. Hérédité récessive liée au chromosome X (exemple de l'hémophilie et du daltonisme) :",
        "   - Chez la femme (XX) : l'anomalie n'apparaît que si elle est homozygote mutée (Xm//Xm). Les femmes hétérozygotes (X+//Xm) sont conductrices saines sans manifestation phénotypique car l'allèle normal est dominant.",
        "   - Chez l'homme (XY) : l'homme ne possédant qu'un seul chromosome X (hémizygote), la présence d'un seul allèle muté (Xm//Y) suffit à exprimer pleinement la maladie.",
        "   - Conséquence statistique : la maladie frappe quasi exclusivement les hommes. Les garçons malades reçoivent obligatoirement leur chromosome X altéré de leur mère. Un père malade ne transmet jamais la tare à ses fils (il leur transmet son chromosome Y), mais toutes ses filles deviennent obligatoirement conductrices.",
        "3. L'hémophilie : déficit en facteurs de coagulation (facteur VIII pour l'hémophilie A, facteur IX pour l'hémophilie B), entraînant des hémorragies spontanées ou prolongées, des hématomes profonds et des hémarthroses articulaires invalidantes.",
        "4. Le daltonisme : anomalie de perception des couleurs (achromatopsie partielle rouge-vert par absence ou dysfonctionnement des pigments opsines rétiniens)."
      ]
    },
    {
      title: "IV. Aberrations chromosomiques et Conseil Génétique au Sénégal",
      content: [
        "1. Anomalies de nombre (aneuploïdies) : résultent d'une non-disjonction méiotique des chromosomes homologues ou des chromatides sœurs lors de la gamétogenèse maternelle ou paternelle :",
        "   - Trisomie 21 (syndrome de Down) : présence de trois chromosomes 21 (47, XX, +21 ou 47, XY, +21). Caractérisée par un profil cranio-facial particulier, une hypotonie musculaire, un retard psychomoteur et des cardiopathies congénitales fréquentes.",
        "   - Syndrome de Klinefelter (47, XXY) : phénotype masculin, grande taille, gynécomastie et infertilité.",
        "   - Syndrome de Turner (45, X0) : phénotype féminin, petite taille, impubérisme et stérilité.",
        "2. Le conseil génétique et le diagnostic prénatal :",
        "   - Consultation médicale spécialisée visant à informer les couples à risque sur la probabilité de transmettre une affection héréditaire.",
        "   - Dépistage prénuptial obligatoire : test d'Emmel et électrophorèse de l'hémoglobine pour identifier les couples à risque drépanocytaire (AS x AS) et prévenir la naissance d'enfants SS.",
        "   - Diagnostic prénatal par amniocentèse ou biopsie de trophoblaste, échographie fœtale et prise en charge multidisciplinaire précoce."
      ]
    }
  ]
};

export const LESSON_6_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-6',
  number: 'LEÇON L-6',
  title: 'LE SYSTÈME IMMUNITAIRE, LE SOI, LE NON-SOI ET LES DYSFONCTIONNEMENTS',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 3 • Immunologie et Défense de l’Organisme (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Étude complète des défenses immunitaires de l'organisme humain : distinction entre le soi (marquage HLA) et le non-soi (antigènes), immunité innée non spécifique (barrières naturelles, réaction inflammatoire aiguë, phagocytose) et immunité adaptative spécifique (lymphocytes B, anticorps circulants, lymphocytes T cytotoxiques), mémoire immunitaire, vaccination et dysfonctionnements majeurs (allergies et infection par le VIH-SIDA).",
  image: {
    caption: 'Figure L6.1 : Les deux voies de l’immunité adaptative : médiation humorale (LB) et médiation cellulaire (LT)',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="immLGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#immLGrad)" stroke="#2563eb" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LE SYSTÈME IMMUNITAIRE HUMAIN : INNÉ ET ADAPTATIF SPÉCIFIQUE</text>
      
      <!-- Phase 1 : Immunité Innée -->
      <rect x="25" y="55" width="220" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="135" y="78" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">1. IMMUNITÉ INNÉE</text>
      <text x="35" y="105" font-size="11" fill="#374151">• Barrières physiques (peau, muqueuses)</text>
      <text x="35" y="125" font-size="11" fill="#374151">• Barrières chimiques (larmes, suc gastrique)</text>
      <text x="35" y="145" font-size="11" font-weight="bold" fill="#dc2626">• Réaction inflammatoire aiguë :</text>
      <text x="45" y="165" font-size="10" fill="#4b5563">Rougeur, chaleur, tumeur, douleur</text>
      <text x="35" y="190" font-size="11" font-weight="bold" fill="#2563eb">• Phagocytose :</text>
      <text x="45" y="210" font-size="10" fill="#4b5563">Adhésion → Ingestion → Digestion</text>
      <text x="45" y="225" font-size="10" fill="#4b5563">Granulocytes & Macrophages</text>
      
      <!-- Phase 2 : Médiation Humorale LB -->
      <rect x="280" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="392" y="78" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. MÉDIATION HUMORALE</text>
      <text x="290" y="105" font-size="11" fill="#374151">• Acteurs : Lymphocytes B (LB)</text>
      <text x="290" y="125" font-size="11" fill="#374151">• Reconnaissance directe de l'antigène</text>
      <text x="290" y="145" font-size="11" fill="#374151">• Coopération avec LT4 auxiliaires (IL-2)</text>
      <text x="290" y="165" font-size="11" fill="#374151">• Prolifération et différenciation :</text>
      <text x="300" y="185" font-size="10" fill="#1d4ed8">→ Plasmocytes : sécrétion anticorps</text>
      <text x="300" y="200" font-size="10" fill="#047857">→ LB mémoires à longue durée</text>
      <text x="290" y="225" font-size="10" font-weight="bold" fill="#b91c1c">Neutralisation : complexe immun</text>
      
      <!-- Phase 3 : Médiation Cellulaire LT -->
      <rect x="535" y="55" width="220" height="185" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
      <text x="645" y="78" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">3. MÉDIATION CELLULAIRE</text>
      <text x="545" y="105" font-size="11" fill="#374151">• Acteurs : Lymphocytes T8 (LT8)</text>
      <text x="545" y="125" font-size="11" fill="#374151">• Reconnaissance antigène + CMH/HLA</text>
      <text x="545" y="145" font-size="11" fill="#374151">• Coopération cellulaire avec LT4</text>
      <text x="545" y="165" font-size="11" fill="#374151">• Différenciation en :</text>
      <text x="555" y="185" font-size="10" fill="#047857">→ LT cytotoxiques (LTC effecteurs)</text>
      <text x="555" y="200" font-size="10" fill="#047857">→ LT8 mémoires</text>
      <text x="545" y="225" font-size="10" font-weight="bold" fill="#dc2626">Cytolyse par perforine & granzyme</text>
    </svg>`
  },
  introduction: "Le système immunitaire constitue le dispositif biologique de défense de l'organisme contre les agressions infectieuses (virus, bactéries, parasites, champignons) et contre les cellules modifiées ou cancéreuses. Pour préserver son intégrité, il doit impérativement distinguer le 'soi' du 'non-soi'. Lorsque cette régulation faillit, apparaissent des hypersensibilités (allergies), des maladies auto-immunes ou des immunodéficiences acquises catastrophiques, dont le modèle pandémique est le syndrome d'immunodéficience acquise (SIDA) provoqué par le rétrovirus VIH.",
  sections: [
    {
      title: "I. La notion de soi et de non-soi biologique",
      content: [
        "1. L'identité biologique et les marqueurs du 'soi' :",
        "   - Le complexe majeur d'histocompatibilité (CMH chez les vertébrés, HLA chez l'Homme pour Human Leukocyte Antigen) : glycoprotéines membranaires uniques à chaque individu (sauf jumeaux monozygotes ou vrais jumeaux).",
        "   - Molécules HLA de classe I (exprimées sur toutes les cellules nucléées de l'organisme) et de classe II (exprimées sur les cellules présentatrices d'antigènes : macrophages, cellules dendritiques, lymphocytes B).",
        "   - Les groupes sanguins érythrocytaires (système ABO et facteur Rhésus) : antigènes polysaccharidiques fixés sur la membrane des hématies, définissant la compatibilité transfusionnelle vitale.",
        "2. Le 'non-soi' et les antigènes : toute substance ou particule étrangère à l'organisme (ou molécule du soi modifiée) capable de déclencher une réponse immunitaire spécifique. Les parties de l'antigène reconnues par les récepteurs immunitaires sont les épitopes ou déterminants antigéniques."
      ]
    },
    {
      title: "II. L'immunité innée et la réaction inflammatoire aiguë",
      content: [
        "1. Les premières lignes de défense : barrières mécaniques (épiderme kératinisé, desquamation, mucus respiratoire, cils vibratiles) et chimiques (sébum acide, lysozyme salivaire et lacrymal, acide chlorhydrique stomacal, flore symbiotique intestinale).",
        "2. La réaction inflammatoire aiguë : réponse stéréotypée et rapide survenant après lésion tissulaire et franchissement des barrières épithéliales. Elle se manifeste par 4 signes cardinaux décrits par Celse : rougeur (rubor), chaleur (calor), gonflement ou œdème (tumor) et douleur (dolor).",
        "3. Mécanisme cellulaire et moléculaire : libération de médiateurs chimiques de l'inflammation (histamine, sérotonine, prostaglandines, leucotriènes) par les mastocytes et macrophages sentinelles, provoquant vasodilatation locale, perméabilité capillaire accrue et diapédèse des leucocytes (migration des polynucléaires neutrophiles et monocytes à travers la paroi vasculaire).",
        "4. La phagocytose : processus fondamental d'ingestion et de digestion des corps étrangers par les cellules phagocytaires en quatre étapes ordonnées :",
        "   - Phase 1 : Adhésion du phagocyte à la particule antigénique grâce aux récepteurs PRR (Pattern Recognition Receptors).",
        "   - Phase 2 : Ingestion par émission de pseudopodes formant une vésicule close (phagosome).",
        "   - Phase 3 : Digestion enzymatique par fusion des lysosomes avec le phagosome (formation du phagolysosome contenant protéases, hydrolases et dérivés réactifs de l'oxygène).",
        "   - Phase 4 : Rejet des déchets non digestibles par exocytose ou présentation des peptides antigéniques à la membrane."
      ]
    },
    {
      title: "III. L'immunité adaptative spécifique : médiations humorale et cellulaire",
      content: [
        "1. Les organes lymphoïdes :",
        "   - Organes primaires ou centraux : moelle osseuse (naissance de toutes les cellules sanguines et maturation des lymphocytes B) et thymus (maturation et éducation des lymphocytes T par élimination des clones auto-réactifs).",
        "   - Organes secondaires ou périphériques : ganglions lymphatiques, rate, amygdales, plaques de Peyer (lieux de rencontre entre antigènes et lymphocytes naïfs).",
        "2. La réponse à médiation humorale (les anticorps) :",
        "   - Récepteurs membranaires des lymphocytes B : immunoglobulines de surface (BCR) reconnaissant directement l'antigène soluble ou particulaire natif.",
        "   - Activation et coopération : sous l'action des interleukines (IL-2, IL-4) sécrétées par les lymphocytes T auxiliaires (LT4 ou CD4+), les LB sélectionnés prolifèrent clonalement puis se différencient en plasmocytes hypersécréteurs d'anticorps circulants et en lymphocytes B mémoires.",
        "   - Structure de l'anticorps : protéine en 'Y' formée de 4 chaînes polypeptidiques (2 chaînes lourdes H et 2 chaînes légères L) unies par des ponts disulfures, comprenant une région constante (Fc effectrice) et des régions variables hypervariables (Fab formant le paratope complémentaire de l'épitope).",
        "   - Mode d'action : formation du complexe immun (neutralisation des toxines ou virus), activation de la cascade du complément et opsonisation facilitant la phagocytose.",
        "3. La réponse à médiation cellulaire (les cellules tueuses) :",
        "   - Les lymphocytes T8 (cytotoxiques CD8+) ne reconnaissent l'antigène que s'il est présenté par une molécule HLA de classe I d'une cellule cible anormale (cellule infectée par un virus ou cellule tumorale).",
        "   - Après prolifération et différenciation sous l'influence des signaux des LT4, les lymphocytes T cytotoxiques (LTC) libèrent par exocytose orientée de la perforine (qui crée des pores membranaires) et des granzymes (qui déclenchent la mort cellulaire programmée ou apoptose par le 'baiser de la mort')."
      ]
    },
    {
      title: "IV. Mémoire immunitaire, vaccination et dysfonctionnements (Allergies, VIH/SIDA)",
      content: [
        "1. La mémoire immunitaire et le principe de la vaccination :",
        "   - La réponse primaire (premier contact) est lente (délai de latence de 6 à 10 jours), d'intensité modérée, dominée par les IgM.",
        "   - La réponse secondaire (contacts ultérieurs) est immédiate, massive, durable, dominée par les IgG de haute affinité grâce au contingent de cellules mémoires (LB et LT mémoires à longue durée de vie).",
        "   - La vaccination : administration d'antigènes atténués ou inactivés induisant la formation de cellules mémoires sans provoquer la maladie clinique (protection individuelle et immunité grégaire ou collective).",
        "2. Les allergies (hypersensibilité immédiate de type I) :",
        "   - Phase de sensibilisation silencieuse : premier contact avec l'allergène (pollens, poussières, acariens, arachide) conduisant à la production exagérée d'IgE qui se fixent sur les mastocytes tissulaires.",
        "   - Phase de déclenchement : lors du second contact, la fixation de l'allergène sur les IgE membranaires provoque la dégranulation brutale et massive des mastocytes libérant l'histamine. Manifestations cliniques : rhinite, conjonctivite, crise d'asthme, urticaire ou choc anaphylactique mortel.",
        "3. L'infection par le virus de l'immunodéficience humaine (VIH) et le SIDA :",
        "   - Structure du VIH : rétrovirus enveloppé contenant un génome à ARN monocaténaire et une enzyme clé, la transcriptase inverse, avec des glycoprotéines d'enveloppe (gp120) ayant une affinité spécifique pour le récepteur CD4 des lymphocytes T4 et des macrophages.",
        "   - Cycle réplicatif : fixation gp120-CD4, fusion membranaire, décapsidation, rétrotranscription de l'ARN viral en ADN proviral par la transcriptase inverse, intégration au génome hôte par l'intégrase, transcription, traduction et bourgeonnement de nouveaux virions.",
        "   - Histoire naturelle de l'infection : phase de primo-infection (syndrome grippal, virémie élevée puis séroconversion), phase asymptomatique de latence clinique (destruction progressive et silencieuse des LT4 durant plusieurs années), et phase de SIDA déclaré lorsque les LT4 chutent sous le seuil critique de 200 cellules/mm³ de sang, laissant la porte ouverte aux infections opportunistes dévastatrices (tuberculose, candidose, pneumocystose, sarcome de Kaposi).",
        "   - Prévention et traitement : préservatifs, dépistage volontaire gratuit au Sénégal, traitement antirétroviral combiné (trithérapie ARV) bloquant la réplication virale et rendant la charge virale indétectable (Indétectable = Intransmissible : I=I)."
      ]
    }
  ]
};

export const LESSON_7_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-7',
  number: 'LEÇON L-7',
  title: 'LES ÉCOSYSTÈMES, CYCLES BIOGÉOCHIMIQUES ET ÉQUILIBRES NATURELS AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 4 • Écologie, Écosystèmes et Environnement (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Concepts fondamentaux d'écologie scientifique : définition de l'écosystème (biocénose et biotope), flux d'énergie et réseaux trophiques (producteurs primaires, consommateurs primaires et secondaires, décomposeurs), cycles biogéochimiques du carbone, de l'azote et de l'eau, et étude monographique des écosystèmes majeurs du Sénégal (la mangrove du delta du Saloum et de Casamance, la steppe sahélienne du Ferlo, la savane soudanienne de Niokolo Koba).",
  image: {
    caption: 'Figure L7.1 : Structure trophique d’un écosystème sénégalais et cycle de la matière',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="ecoLGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#059669" stop-opacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#ecoLGrad)" stroke="#059669" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">FONCTIONNEMENT D’UN ÉCOSYSTÈME : FLUX D’ÉNERGIE ET PYRAMIDE TROPHIQUE</text>
      
      <!-- Soleil et Énergie Solaire -->
      <circle cx="90" cy="80" r="30" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
      <text x="90" y="85" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">ÉNERGIE</text>
      <text x="90" y="98" font-size="10" fill="#fff" text-anchor="middle">SOLAIRE</text>
      
      <!-- Flèche Énergie vers Producteurs -->
      <line x1="125" y1="95" x2="175" y2="120" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,4"/>
      <polygon points="175,120 165,113 168,125" fill="#f59e0b"/>
      
      <!-- Niveaux Trophiques Pyramide -->
      <!-- Niveau 1 : Producteurs Primaires -->
      <rect x="180" y="190" width="460" height="45" rx="6" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
      <text x="410" y="212" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">PRODUCTEURS PRIMAIRES AUTOTROPHES (Végétaux chlorophylliens, Phytoplancton, Palétuviers)</text>
      <text x="410" y="226" font-size="10" fill="#ecfdf5" text-anchor="middle">Photosynthèse : Synthèse de matière organique à partir de CO2, eau et sels minéraux</text>
      
      <!-- Niveau 2 : Consommateurs Primaires -->
      <rect x="230" y="135" width="360" height="42" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="410" y="156" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">CONSOMMATEURS I : HERBIVORES & ZOOPLANCTON</text>
      <text x="410" y="169" font-size="9" fill="#eff6ff" text-anchor="middle">(Gazelles, bovins du Ferlo, insectes brouteurs, mollusques des mangroves)</text>
      
      <!-- Niveau 3 : Consommateurs Secondaires et Tertiaires -->
      <rect x="290" y="80" width="240" height="42" rx="6" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
      <text x="410" y="101" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">CONSOMMATEURS II & III : CARNIVORES</text>
      <text x="410" y="114" font-size="9" fill="#fef2f2" text-anchor="middle">(Oiseaux prédateurs du Djoudj, chacals, hyènes)</text>
      
      <!-- Décomposeurs (recyclage) -->
      <rect x="660" y="90" width="105" height="145" rx="6" fill="#f3f4f6" stroke="#4b5563" stroke-width="1.5"/>
      <text x="712" y="112" font-size="10" font-weight="bold" fill="#1f2937" text-anchor="middle">DÉCOMPOSEURS</text>
      <text x="712" y="126" font-size="9" fill="#4b5563" text-anchor="middle">Bactéries, Vers,</text>
      <text x="712" y="138" font-size="9" fill="#4b5563" text-anchor="middle">Champignons</text>
      <text x="712" y="165" font-size="8" fill="#047857" text-anchor="middle">Minéralisation</text>
      <text x="712" y="177" font-size="8" fill="#047857" text-anchor="middle">de la matière</text>
      <text x="712" y="189" font-size="8" fill="#047857" text-anchor="middle">organique en sels</text>
      <text x="712" y="215" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Retour au sol</text>
    </svg>`
  },
  introduction: "L'écologie, science des relations entre les êtres vivants et leur milieu de vie, est essentielle pour appréhender les équilibres qui régissent la biosphère. L'écosystème en constitue l'unité fonctionnelle élémentaire, associant un biotope (milieu physique et abiotique) et une biocénose (ensemble des organismes vivants). Au Sénégal, la diversité bioclimatique remarquable (du domaine sahélien aride au nord jusqu'au domaine subguinéen humide en Casamance) engendre des écosystèmes d'une grande valeur écologique et socio-économique dont la compréhension rationnelle conditionne la survie des populations.",
  sections: [
    {
      title: "I. Structure et organisation d'un écosystème",
      content: [
        "1. Définitions fondamentales :",
        "   - Écosystème = Biotope (substrat géologique, climat, température, pluviométrie, humidité, pH du sol) + Biocénose (phytocénose végétale, zoocénose animale et microbiocénose).",
        "   - Population : ensemble des individus d'une même espèce vivant dans un espace défini à un moment donné.",
        "   - Communauté : ensemble des populations d'espèces différentes occupant le même biotope.",
        "   - Niche écologique : rôle fonctionnel d'une espèce au sein de l'écosystème (son régime alimentaire, son habitat, son rythme d'activité et ses relations avec les autres espèces).",
        "2. Les facteurs écologiques abiotiques et biotiques :",
        "   - Facteurs abiotiques : facteurs climatiques (radiation lumineuse, température, précipitations) et édaphiques (nature du sol, granulométrie, porosité, réserve utile en eau).",
        "   - Facteurs biotiques : interactions intraspécifiques (compétition, coopération sociale) et interspécifiques (symbiose mutualiste, parasitisme, prédation, commensalisme, amensalisme)."
      ]
    },
    {
      title: "II. Fonctionnement trophique et flux d'énergie",
      content: [
        "1. Les chaînes et réseaux trophiques :",
        "   - Producteurs primaires (autotrophes) : végétaux chlorophylliens terrestres et phytoplancton marin qui élaborent leur propre matière organique par photosynthèse en utilisant l'énergie solaire et le dioxyde de carbone.",
        "   - Consommateurs primaires (herbivores) : hétérotrophes qui se nourrissent directement des producteurs.",
        "   - Consommateurs secondaires et tertiaires (carnivores et superprédateurs) : prédateurs chassant d'autres animaux.",
        "   - Décomposeurs (détritivores, bactéries et champignons du sol) : transforment la matière organique morte (litière, cadavres, fèces) en molécules minérales recyclables par les végétaux (minéralisation).",
        "2. Le flux d'énergie :",
        "   - L'énergie lumineuse solaire entre dans l'écosystème, est convertie en énergie chimique par la photosynthèse, puis circule le long de la chaîne trophique.",
        "   - Règle des 10 % (Lindeman) : à chaque niveau trophique successif, environ 90 % de l'énergie est dissipée sous forme de chaleur par la respiration cellulaire, l'excrétion et le métabolisme, tandis que seulement 10 % est convertie en biomasse nouvelle utilisable par le niveau supérieur.",
        "   - L'énergie a un flux unidirectionnel non cyclique (contrairement à la matière qui est continuellement recyclée)."
      ]
    },
    {
      title: "III. Les grands cycles biogéochimiques",
      content: [
        "1. Le cycle du carbone :",
        "   - Fixation : photosynthèse végétale absorbant le CO2 atmosphérique pour produire glucides, lipides et protides.",
        "   - Restitution : respiration des êtres vivants et décomposition de la matière organique libérant du CO2.",
        "   - Stockage et combustibles fossiles : accumulation du carbone dans la biomasse vivante, les sols et les sédiments fossiles (pétrole, gaz, charbon). Les activités humaines (combustion des énergies fossiles, déforestation) rompent l'équilibre en enrichissant l'atmosphère en gaz à effet de serre.",
        "2. Le cycle de l'azote :",
        "   - Fixation biologique : réduction du diazote atmosphérique N2 en ammoniaque par des bactéries libres (Azotobacter) ou symbiotiques (Rhizobium associées aux racines des légumineuses sahéliennes comme l'Arachide ou l'Acacia albida/Faidherbia albida).",
        "   - Nitrification : transformation de l'ammoniaque en nitrites (Nitrosomonas) puis en nitrates assimilables (Nitrobacter).",
        "   - Dénitrification : retour de l'azote à l'état gazeux sous l'action de bactéries anaérobies dans les sols engorgés.",
        "3. Le cycle de l'eau : évaporation océanique, évapotranspiration végétale, condensation en nuages, précipitations (pluies de mousson d'hivernage au Sénégal), ruissellement de surface (fleuves Sénégal, Gambie, Casamance) et infiltration vers les nappes phréatiques maestrichtiennes et quaternaires."
      ]
    },
    {
      title: "IV. Étude monographique des grands écosystèmes du Sénégal",
      content: [
        "1. L'écosystème de la mangrove (Delta du Saloum et Basse Casamance) :",
        "   - Milieu amphibie estuarien d'eaux saumâtres soumis aux marées.",
        "   - Végétation caractéristique : les palétuviers (Rhizophora mangle avec racines échasses aériennes pour la fixation dans la vase instable ; Avicennia africana avec pneumatophores pour la respiration en milieu anoxique saturé en sel).",
        "   - Rôle écologique inestimable : nurserie pour les poissons pélagiques et côtiers, habitat des huîtres de mangrove (Crassostrea gasar), barrière naturelle contre la houle marine et puits de carbone bleu d'une efficacité mondiale.",
        "2. La steppe sahélienne et la savane arborée du Ferlo :",
        "   - Climat aride à longue saison sèche (9 mois) et pluviométrie réduite (200 à 400 mm/an).",
        "   - Flore adaptée au stress hydrique : épineux xérophiles, Acacia senegal (gommier blanc), Balanites aegyptiaca (dattier du désert), graminées éphémères.",
        "   - Écosystème agropastoral dépendant des forages hydrauliques et menacé par le surpâturage et les feux de brousse.",
        "3. La savane soudanienne et le Parc National du Niokolo-Koba (PNNK) :",
        "   - Écosystème forestier et savanicole plus humide du sud-est du Sénégal, classé au patrimoine mondial de l'UNESCO.",
        "   - Refuge de la grande faune africaine : éléphants d'Afrique de l'Ouest, lions, léopards, chimpanzés verus et antilopes géantes (Élan de Derby)."
      ]
    }
  ]
};

export const LESSON_8_SVT_TLE_L: LessonContent = {
  id: 'svt-tle-l-lecon-8',
  number: 'LEÇON L-8',
  title: 'DÉGRADATION DE L’ENVIRONNEMENT, POLLUTIONS ET GESTION DURABLE AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Terminale',
  module: 'Thème 4 • Écologie, Écosystèmes et Environnement (Série L)',
  level: "Terminale L1, L2 & L'",
  readTime: "60 min d'étude approfondie",
  description: "Analyse des agressions environnementales et des périls écologiques contemporains au Sénégal : désertification, déforestation et feux de brousse, érosion côtière dramatique sur la Petite-Côte et à Saint-Louis (Langue de Barbarie), pollutions chimiques, plastiques et industrielles, gestion critique des déchets solides urbains (décharge de Mbeubeuss à Dakar), et stratégies de résilience et de développement durable (Grande Muraille Verte, transition écologique et reboisement communautaire).",
  image: {
    caption: 'Figure L8.1 : Les défis écologiques du Sénégal : Érosion côtière, Désertification et Solutions durables',
    svgContent: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="envLGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ef4444" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="780" height="260" rx="12" fill="url(#envLGrad)" stroke="#dc2626" stroke-width="1.5"/>
      <text x="390" y="26" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">DÉGRADATION ENVIRONNEMENTALE AU SÉNÉGAL ET ACTIONS DE RESTAURATION</text>
      
      <!-- Colonne 1 : Désertification et Déforestation -->
      <rect x="25" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="137" y="78" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">1. DÉSERTIFICATION (FERLO/NORD)</text>
      <text x="35" y="105" font-size="10" fill="#374151">• Sécheresses récurrentes du Sahel</text>
      <text x="35" y="125" font-size="10" fill="#374151">• Déforestation pour le bois de chauffe</text>
      <text x="35" y="145" font-size="10" fill="#374151">• Feux de brousse pastoraux ravageurs</text>
      <text x="35" y="165" font-size="10" fill="#374151">• Surpâturage et piétinement du sol</text>
      <text x="35" y="195" font-size="11" font-weight="bold" fill="#047857">Solution majeure :</text>
      <text x="35" y="215" font-size="10" font-weight="bold" fill="#059669">La Grande Muraille Verte (GMV)</text>
      <text x="35" y="228" font-size="9" fill="#065f46">Plantation d'Acacias, jardins polyvalents</text>
      
      <!-- Colonne 2 : Érosion Côtière -->
      <rect x="275" y="55" width="230" height="185" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="390" y="78" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. ÉROSION CÔTIÈRE (LITTORAL)</text>
      <text x="285" y="105" font-size="10" fill="#374151">• Recul du trait de côte : 1 à 2 m par an</text>
      <text x="285" y="125" font-size="10" fill="#374151">• Rupture de la brèche de Saint-Louis (2003)</text>
      <text x="285" y="145" font-size="10" fill="#374151">• Menaces sur Rufisque, Bargny, Saly</text>
      <text x="285" y="165" font-size="10" fill="#374151">• Destruction de maisons de pêcheurs</text>
      <text x="285" y="195" font-size="11" font-weight="bold" fill="#2563eb">Aménagements :</text>
      <text x="285" y="215" font-size="10" fill="#1e40af">Digues en enrochement, épis marins,</text>
      <text x="285" y="228" font-size="9" fill="#1e40af">Reboisement filaos & recul stratégique</text>
      
      <!-- Colonne 3 : Pollutions & Déchets Urbains -->
      <rect x="530" y="55" width="225" height="185" rx="8" fill="#fff" stroke="#dc2626" stroke-width="1.5"/>
      <text x="642" y="78" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">3. DÉCHETS & POLLUTION DAKAR</text>
      <text x="540" y="105" font-size="10" fill="#374151">• Décharge sauvage de Mbeubeuss (175 ha)</text>
      <text x="540" y="125" font-size="10" fill="#374151">• Pollution plastique des sols et mers</text>
      <text x="540" y="145" font-size="10" fill="#374151">• Rejets industriels dans la baie de Hann</text>
      <text x="540" y="165" font-size="10" fill="#374151">• Lixiviats et contamination des nappes</text>
      <text x="540" y="195" font-size="11" font-weight="bold" fill="#047857">Transition écologique :</text>
      <text x="540" y="215" font-size="10" fill="#065f46">Loi anti-plastique, tri sélectif,</text>
      <text x="540" y="228" font-size="9" fill="#065f46">Projet PROMOGED & énergies solaires</text>
    </svg>`
  },
  introduction: "Le Sénégal est confronté à des crises environnementales majeures résultant de la conjonction des dérèglements climatiques globaux et d'activités anthropiques non régulées. Avec plus de 700 kilomètres de côtes atlantiques concentrant plus de 60 % de la population et l'essentiel du tissu économique, le pays subit une vulnérabilité extrême à l'érosion marine, à la désertification sahélienne, à la pollution des eaux et à la saturation des déchets urbains. Relever le défi du développement durable exige une compréhension scientifique rigoureuse de ces déséquilibres et la mise en œuvre d'innovations écologiques audacieuses.",
  sections: [
    {
      title: "I. La désertification et la dégradation des sols au Sénégal",
      content: [
        "1. Les processus de désertification : dégradation biologique et physique des terres en zones arides, semi-arides et subhumides sèches, conduisant à la perte de fertilité des sols et à l'amenuisement de la couverture végétale.",
        "2. Les causes directes et indirectes :",
        "   - Causes climatiques : baisse tendancielle de la pluviométrie depuis les grandes sécheresses des années 1970-1980, augmentation des températures moyennes et évaporation intense.",
        "   - Causes anthropiques : déforestation massive pour le charbon de bois (combustible ménager prédominant), coupe abusive d'arbres, feux de brousse hivernaux dévastateurs dans les zones sylvopastorales, surpâturage excessif autour des points d'eau et techniques agricoles inadaptées (monoculture de l'arachide épuisant les sols).",
        "3. La salinisation des terres agricoles : phénomène destructeur dans les vallées du fleuve Sénégal, du Sine-Saloum et de la Casamance, où la baisse des débits fluviaux favorise la remontée de la langue d'eau salée de l'océan, stérilisant des milliers d'hectares de rizières fertiles (formation de tannes)."
      ]
    },
    {
      title: "II. L'érosion côtière et la vulnérabilité du littoral sénégalais",
      content: [
        "1. L'ampleur du recul du trait de côte : les côtes sableuses sénégalaises reculent en moyenne de 1 à 2 mètres par an sous l'assaut des houles atlantiques énergétiques et de l'élévation globale du niveau marin.",
        "2. Les points chauds du littoral sénégalais :",
        "   - La brèche de Saint-Louis : creusée artificiellement en octobre 2003 pour sauver la ville coloniale des inondations du fleuve Sénégal, elle s'est élargie de quelques mètres initiaux à plus de 6 kilomètres, modifiant la salinité du fleuve, submergeant des villages de pêcheurs de la Langue de Barbarie (Doun Baba Dièye) et détruisant les cimetières ancestraux et les infrastructures hôtelières.",
        "   - La presqu'île de Dakar et la baie de Rufisque/Bargny : effondrement de falaises côtières et submersion de quartiers historiques d'habitations de pêcheurs traditionnels (Guet Ndar, Thiawlène).",
        "   - La Petite-Côte (Saly Portudal) : menace directe sur les infrastructures balnéaires et touristiques motrices de l'économie nationale.",
        "3. Réponses techniques et limites : enrochement lourd, pose de géotextiles, digues de protection côtière, fixation des dunes par le reboisement de filaos (Casuarina equisetifolia) et nécessité d'un recul stratégique planifié des populations."
      ]
    },
    {
      title: "III. Pollutions industrielles, maritimes et crise des déchets à Dakar",
      content: [
        "1. La gestion des déchets solides et le défi de Mbeubeuss :",
        "   - La décharge à ciel ouvert de Mbeubeuss, créée en 1968 dans une cuvette lacustre asséchée de Malika (banlieue dakaroise), s'étend sur plus de 175 hectares et reçoit quotidiennement plus de 2 500 tonnes d'ordures non triées.",
        "   - Impacts sanitaires et environnementaux : émission continuelle de fumées toxiques et de dioxines cancérogènes par combustion spontanée, prolifération de vecteurs de maladies (mouches, rats), et infiltration du lixiviat (jus de décharge chargé en métaux lourds : plomb, cadmium, mercure) polluant la nappe phréatique de Thiaroye fournissant de l'eau potable aux populations périurbaines.",
        "2. La pollution plastique : prolifération des sachets plastiques à usage unique et microplastiques contaminant les réseaux de drainage urbain (favorisant les inondations hivernales à Dakar), les sols maraîchers des Niayes et l'écosystème marin où ils sont ingérés par les poissons et tortues.",
        "3. La pollution des eaux côtières et la baie de Hann : jadis l'une des plus belles baies d'Afrique, dégradée par le déversement direct de rejets industriels d'usines chimiques, agroalimentaires et d'eaux usées domestiques non épurées (absence de station d'épuration fonctionnelle jusqu'aux chantiers récents de dépollution)."
      ]
    },
    {
      title: "IV. Stratégies de préservation, restauration et développement durable",
      content: [
        "1. L'Initiative de la Grande Muraille Verte (GMV) :",
        "   - Projet panafricain titanesque traversant 11 pays du Sénégal à Djibouti sur 8 000 km de long et 15 km de large le long du Sahel.",
        "   - Section sénégalaise (axe Tessékéré, Widou Thiengoly, Labgar) : plantation de millions d'arbres d'essences sahéliennes résilientes (Acacia senegal, Acacia seyal, Balanites aegyptiaca, Ziziphus mauritiana).",
        "   - Création de 'jardins polyvalents communautaires' gérés par les femmes locales pour le maraîchage, la production d'eau solaire, la restauration pastorale et la séquestration massive du carbone.",
        "2. Les politiques publiques et la législation environnementale sénégalaise :",
        "   - Loi sur l'interdiction des produits plastiques à usage unique (Loi n° 2020-04).",
        "   - Projet PROMOGED (Projet de Promotion de la Gestion Intégrée et de l'Économie des Déchets Solides au Sénégal) visant la modernisation et la fermeture progressive de Mbeubeuss au profit de centres d'enfouissement technique (CET) et du tri-recyclage.",
        "   - Développement massif des énergies renouvelables propres : parcs solaires photovoltaïques (Santhiou Mékhé, Malicounda, Bokhol) et parc éolien de Taïba Ndiaye (158 MW) portant le mix énergétique propre du Sénégal à plus de 30 % de sa production électrique.",
        "3. L'éducation à l'écocitoyenneté et la participation citoyenne : intégration de l'éducation environnementale dans les programmes scolaires, campagnes de reboisement national ('Journée Nationale de l'Arbre') et implication des communautés côtières dans la régénération participative des mangroves."
      ]
    }
  ]
};
