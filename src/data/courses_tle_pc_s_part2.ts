import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE TERMINALE S (SÉRIES S1, S2) — PARTIE 2 (CHIMIE ORGANIQUE)
// Conforme au programme officiel national du Sénégal (Baccalauréat Série S)
// Leçons S-4 & S-5 : Estérification/Hydrolyse, Saponification, Composés Azotés & Peptides
// Leçons exhaustives sans résumé, démonstrations intégrales pas-à-pas et figures/schémas obligatoires
// =========================================================================

export const SVG_PC_TLE_S_ESTERIFICATION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#581c87">
    FIGURE S-4 : ÉQUILIBRE D'ESTÉRIFICATION-HYDROLYSE & CHAUFFAGE À REFLUX
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#7e22ce">
    R-COOH + R'-OH ⇄ R-COO-R' + H₂O (Réaction lente, athermique et limitée avec constante K = 4 pour alcools primaires)
  </text>

  <!-- Left: Chemical reaction formula -->
  <rect x="60" y="80" width="340" height="150" rx="10" fill="#ffffff" stroke="#c084fc" stroke-width="1.5"/>
  <text x="230" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#581c87">Bilan de l'Équilibre Chimique</text>
  <text x="80" y="135" font-size="12" font-family="monospace" fill="#0f172a">Acide carboxylique + Alcool</text>
  <text x="140" y="160" font-size="16" font-weight="bold" fill="#dc2626">⇄ (Équilibre réversible)</text>
  <text x="80" y="185" font-size="12" font-family="monospace" fill="#0f172a">Ester + Eau</text>
  <text x="80" y="215" font-size="11" fill="#7e22ce">Sens 1 : Estérification | Sens 2 : Hydrolyse</text>

  <!-- Right: Reflux Setup drawing -->
  <rect x="440" y="80" width="260" height="270" rx="10" fill="#ffffff" stroke="#9333ea" stroke-width="1.5"/>
  <text x="570" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#581c87">Montage de Chauffage à Reflux</text>

  <!-- Condenser Tube -->
  <rect x="555" y="120" width="30" height="130" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
  <text x="610" y="170" font-size="10" fill="#4338ca">Réfrigérant</text>
  <text x="610" y="185" font-size="10" fill="#4338ca">à boules</text>
  <!-- Water in/out -->
  <line x1="535" y1="230" x2="555" y2="230" stroke="#0284c7" stroke-width="2" />
  <text x="475" y="235" font-size="10" fill="#0284c7">Eau froide (in)</text>
  <line x1="585" y1="135" x2="605" y2="135" stroke="#0284c7" stroke-width="2" />
  <text x="610" y="140" font-size="10" fill="#0284c7">Eau tiède (out)</text>

  <!-- Flask -->
  <path d="M 555 250 L 540 280 A 35 35 0 1 0 600 280 L 585 250 Z" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
  <text x="570" y="300" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">Mélange réactionnel</text>

  <!-- Heat source -->
  <rect x="535" y="325" width="70" height="15" rx="3" fill="#ef4444" stroke="#b91c1c" />
  <text x="570" y="337" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Chauffe-ballon</text>

  <!-- Yield summary table -->
  <rect x="60" y="245" width="340" height="105" rx="8" fill="#fdf4ff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="75" y="267" font-size="11" font-weight="bold" fill="#581c87">Rendements pour un mélange équimolaire :</text>
  <text x="75" y="287" font-size="11" fill="#3b0764">• Alcool primaire R-CH₂OH : Rendement r = 67% (K = 4)</text>
  <text x="75" y="307" font-size="11" fill="#3b0764">• Alcool secondaire R-CHOH-R' : Rendement r = 60% (K = 2,25)</text>
  <text x="75" y="327" font-size="11" fill="#3b0764">• Alcool tertiaire R₃C-OH : Rendement très faible r ≈ 5%</text>
</svg>`;

export const SVG_PC_TLE_S_LIAISON_PEPTIDIQUE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#14532d">
    FIGURE S-5 : CONDENSATION DE DEUX ACIDES α-AMINÉS & LIAISON PEPTIDIQUE
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#15803d">
    Formation de la liaison amide -CO-NH- avec élimination d'une molécule d'eau (H₂O)
  </text>

  <!-- Amino acid 1 -->
  <rect x="60" y="90" width="280" height="120" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="200" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Acide α-aminé 1 (Glycine / Alanine)</text>
  <text x="80" y="150" font-size="13" font-family="monospace" fill="#0f172a">H₂N — CH(R₁) — C(=O)—OH</text>
  <text x="240" y="180" font-size="11" font-weight="bold" fill="#dc2626">OH réactif</text>

  <!-- Plus sign -->
  <text x="360" y="155" text-anchor="middle" font-size="24" font-weight="bold" fill="#15803d">+</text>

  <!-- Amino acid 2 -->
  <rect x="400" y="90" width="300" height="120" rx="10" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
  <text x="550" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">Acide α-aminé 2</text>
  <text x="420" y="150" font-size="13" font-family="monospace" fill="#0f172a">H — NH — CH(R₂) — COOH</text>
  <text x="420" y="180" font-size="11" font-weight="bold" fill="#dc2626">H réactif</text>

  <!-- Reaction Arrow -->
  <line x1="380" y1="220" x2="380" y2="250" stroke="#15803d" stroke-width="3" />
  <polygon points="380,260 373,248 387,248" fill="#15803d" />
  <text x="440" y="245" font-size="11" font-weight="bold" fill="#dc2626">- H₂O (Condensation)</text>

  <!-- Dipeptide Result Box -->
  <rect x="100" y="265" width="560" height="95" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
  <text x="380" y="290" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">Dipeptide formé</text>
  <text x="140" y="325" font-size="14" font-family="monospace" fill="#0f172a">H₂N — CH(R₁) — </text>
  <!-- Highlighted peptide bond -->
  <rect x="290" y="308" width="130" height="28" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2" />
  <text x="300" y="327" font-size="14" font-family="monospace" font-weight="bold" fill="#dc2626">CO — NH</text>
  <text x="430" y="325" font-size="14" font-family="monospace" fill="#0f172a"> — CH(R₂) — COOH</text>
  <text x="355" y="352" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Liaison peptidique (amide)</text>
</svg>`;

// =========================================================================
// LEÇON S-4 : ESTÉRIFICATION ET HYDROLYSE DES ESTERS
// =========================================================================
export const LESSON_4_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-4`,
  number: `Leçon S-4`,
  title: `Estérification et Hydrolyse des Esters`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de chimie organique fondamentale`,
  description: `Groupement ester, nomenclature systématique, caractéristiques de l'équilibre d'estérification-hydrolyse (lente, athermique, limitée), constante d'équilibre K, rendements selon la classe de l'alcool, et méthodes d'optimisation (chlorures d'acyle, anhydrides, appareil de Dean-Stark).`,
  image: {
    caption: `Figure S-4 : Dispositif de chauffage à reflux et caractéristiques thermodynamiques de l'équilibre d'estérification.`,
    svgContent: SVG_PC_TLE_S_ESTERIFICATION
  },
  diagram: {
    title: `Estérification et Hydrolyse`,
    svgContent: SVG_PC_TLE_S_ESTERIFICATION
  },
  introduction: `Les esters sont des composés organiques oxygénés omniprésents dans la nature, responsables des arômes délicats des fleurs et des saveurs fruitées des fruits tropicaux au Sénégal (mangue, ananas, goyave), et constituant la trame des corps gras (lipides). 
Au niveau de la Terminale S, la réaction réversible entre un acide carboxylique et un alcool constitue le modèle classique par excellence d'un équilibre chimique dynamique. 
Ce chapitre décortique les quatre caractéristiques physico-chimiques de cette réaction, démontre le calcul de la constante d'équilibre K et du rendement stœchiométrique selon la classe de l'alcool utilisé, et enseigne les méthodes industrielles de déplacement d'équilibre selon le principe de Le Chatelier ou par utilisation de réactifs dérivés plus réactifs (chlorures d'acyle et anhydrides d'acide).`,
  conclusion: `En conclusion, l'estérification directe : R-COOH + R'-OH ⇄ R-COO-R' + H₂O est une réaction lente, athermique (sa constante d'équilibre K est indépendante de la température) et limitée. Pour un mélange équimolaire initial, le rendement maximal est de 67% avec un alcool primaire (K = 4) et de 60% avec un alcool secondaire (K = 2,25). Pour obtenir un rendement de 100%, le chimiste remplace l'acide carboxylique par son chlorure d'acyle R-COCl ou son anhydride d'acide (R-CO)₂O, ce qui rend la réaction rapide, totale et très exothermique.`,
  sections: [
    {
      title: `I. STRUCTURE, NOMENCLATURE ET PROPRIÉTÉS DES ESTERS`,
      subsections: [
        {
          subtitle: `A. Formule générale et règles de nomenclature IUPAC`,
          content: [
            `La formule générale d'un ester est R-COO-R' (ou R-COOR'), où R est un atome d'hydrogène ou un groupe alkyle, et R' est un groupe alkyle impérativement carboné.`,
            `Nomenclature officielle IUPAC en deux parties :`,
            `1. Première partie : issue de l'acide carboxylique en remplaçant la terminaison "-oïque" par "-oate" de la chaîne principale comportant le carbone fonctionnel.`,
            `2. Deuxième partie : nom du groupe alkyle R' attaché à l'oxygène, terminé par "-yle".`,
            `Exemples types du Baccalauréat :`,
            `• CH₃-COO-CH₂-CH₃ : Éthanoate d'éthyle (odeur de colle et de solvant).`,
            `• H-COO-CH₃ : Méthanoate de méthyle.`,
            `• CH₃-CH₂-COO-CH(CH₃)₂ : Propanoate d'isopropyle (ou de 1-méthyléthyle).`
          ]
        }
      ]
    },
    {
      title: `II. LES CARACTÉRISTIQUES DE L'ÉQUILIBRE D'ESTÉRIFICATION-HYDROLYSE`,
      subsections: [
        {
          subtitle: `A. Les trois caractéristiques fondamentales`,
          content: [
            `1. Lente : À température ambiante sans catalyseur, l'équilibre met plusieurs mois ou années à s'établir.`,
            `2. Athermique : La variation d'enthalpie de réaction est quasi nulle (ΔH ≈ 0). La réaction ne dégage ni n'absorbe de chaleur. Conséquence capitale selon la loi de Van 't Hoff : LA TEMPÉRATURE N'A AUCUNE INFLUENCE SUR LA VALEUR DU RENDEMENT FINAL NI SUR LA CONSTANTE D'ÉQUILIBRE K ! Elle n'agit que comme facteur cinétique pour accélérer l'atteinte de l'équilibre.`,
            `3. Limitée : La réaction s'arrête lorsque les vitesses des réactions directe (estérification) et inverse (hydrolyse) deviennent égales, laissant subsister des quantités notables de tous les réactifs.`
          ]
        },
        {
          subtitle: `B. Constante d'équilibre K et calcul du rendement`,
          content: [
            `Soit l'état d'équilibre : Acide + Alcool ⇄ Ester + Eau.`,
            `La constante d'équilibre thermodynamique s'écrit (le volume V se simplifiant) :`,
            `K = [Ester]_eq × [Eau]_eq / ( [Acide]_eq × [Alcool]_eq ) = (n_ester × n_eau) / (n_acide × n_alcool).`,
            `Pour un mélange initial équimolaire (1 mol d'acide + 1 mol d'alcool primaire) :`,
            `À l'équilibre : n_ester = x_eq, n_eau = x_eq, n_acide = 1 - x_eq, n_alcool = 1 - x_eq.`,
            `K = x_eq² / (1 - x_eq)² = 4 ⟹ x_eq / (1 - x_eq) = √4 = 2 ⟹ x_eq = 2 - 2x_eq ⟹ 3x_eq = 2 ⟹`,
            `x_eq = 2/3 ≈ 0,67 mol.`,
            `Le rendement maximal théorique est donc de : r = x_eq / x_max = (2/3) / 1 = 66,7% ≈ 67%.`
          ]
        }
      ]
    },
    {
      title: `III. MÉTHODES D'OPTIMISATION DU RENDEMENT DE L'ESTÉRIFICATION`,
      subsections: [
        {
          subtitle: `A. Déplacement d'équilibre selon le principe de Le Chatelier`,
          content: [
            `Pour augmenter le rendement au-delà de 67% :`,
            `1. Utiliser un excès de l'un des réactifs (généralement l'alcool le moins cher, par exemple 3 moles d'alcool pour 1 mole d'acide, ce qui porte le rendement à plus de 90%).`,
            `2. Éliminer l'un des produits au fur et à mesure de sa formation :`,
            `• Élimination de l'eau formée à l'aide d'un appareil de Dean-Stark par distillation hétéroazéotropique avec du toluène ou du cyclohexane.`,
            `• Distillation fractionnée de l'ester si son point d'ébullition est le plus bas du mélange.`
          ]
        },
        {
          subtitle: `B. Utilisation de dérivés d'acides plus réactifs (Synthèse totale)`,
          content: [
            `1. Action d'un chlorure d'acyle R-COCl sur un alcool :`,
            `R-COCl + R'-OH ➔ R-COO-R' + HCl (gazeux).`,
            `Caractéristiques : Réaction TOTALE (irréversible), TRÈS RAPIDE et EXOTHERMIQUE.`,
            `2. Action d'un anhydride d'acide (R-CO)₂O sur un alcool :`,
            `(R-CO)₂O + R'-OH ➔ R-COO-R' + R-COOH.`,
            `Caractéristiques : Réaction TOTALE et RAPIDE.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON S-5 : SAPONIFICATION, COMPOSÉS AZOTÉS ET ACIDES AMINÉS
// =========================================================================
export const LESSON_5_PC_TLE_S: LessonContent = {
  id: `pc-tle-s-cours-5`,
  number: `Leçon S-5`,
  title: `Saponification, Composés Azotés et Acides α-Aminés`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale S`,
  level: `Terminale S (S1 & S2)`,
  readTime: `75 min de chimie organique structurale`,
  description: `Amines (classes et basicité), acides α-aminés, carbone asymétrique, chiralité, énantiomères D et L, amphion (zwitterion), liaison peptidique, structure des peptides et protéines, et saponification totale des triglycérides.`,
  image: {
    caption: `Figure S-5 : Mécanisme de condensation peptidique et formation de la liaison amide entre deux acides α-aminés.`,
    svgContent: SVG_PC_TLE_S_LIAISON_PEPTIDIQUE
  },
  diagram: {
    title: `Composés Azotés et Peptides`,
    svgContent: SVG_PC_TLE_S_LIAISON_PEPTIDIQUE
  },
  introduction: `Les composés organiques azotés forment la charpente moléculaire de la matière vivante. Des neurotransmetteurs cérébraux aux enzymes catalysant nos métabolismes, les fonctions amine, amide et acide aminé sont au cœur de la biochimie. 
En Terminale S, l'étude des amines met en évidence leur caractère basique dû au doublet non liant de l'atome d'azote. L'analyse des acides α-aminés introduit le concept spatial fondamental de chiralité moléculaire (stéréochimie) avec le carbone asymétrique C*. 
La formation de la liaison peptidique par condensation amido-carboxylique pose enfin les fondations chimiques de la synthèse des protéines.`,
  conclusion: `En conclusion, ce chapitre fait le pont entre la chimie organique et la biologie moléculaire : 1) Les amines sont des bases de Brönsted réagissant avec l'eau : R-NH₂ + H₂O ⇄ R-NH₃⁺ + HO⁻, 2) Tout acide α-aminé (sauf la glycine où R = H) possède un carbone asymétrique C* et présente deux énantiomères chiraux images l'un de l'autre dans un miroir plan, 3) En solution aqueuse, l'acide aminé existe sous forme d'amphion dipolaire (zwitterion) H₃N⁺-CH(R)-COO⁻ qui agit comme un régulateur de pH, 4) La liaison peptidique -CO-NH- relie les acides aminés en chaînes peptidiques avec un ordre conventionnel de l'extrémité N-terminale vers l'extrémité C-terminale.`,
  sections: [
    {
      title: `I. LES AMINES : CLASSIFICATION ET PROPRIÉTÉS ACIDO-BASIQUES`,
      subsections: [
        {
          subtitle: `A. Classes d'amines`,
          content: [
            `Une amine dérive formellement de l'ammoniac NH₃ par substitution d'un, deux ou trois atomes d'hydrogène par des groupes alkyles R :`,
            `• Amine primaire : R-NH₂ (un seul carbone lié à N).`,
            `• Amine secondaire : R-NH-R' (deux carbones liés à N).`,
            `• Amine tertiaire : R-N(R')-R'' (trois carbones liés à N).`
          ]
        },
        {
          subtitle: `B. Propriétés basiques et nucléophiles`,
          content: [
            `L'atome d'azote possède un doublet électronique non liant capable de capter un proton H⁺. Les amines sont donc des BASES DE BRÖNSTED faibles en solution aqueuse :`,
            `R-NH₂ + H₂O ⇄ R-NH₃⁺ + HO⁻.`,
            `Au couple ion alkylammonium / amine R-NH₃⁺ / R-NH₂ est associé un pK_a compris entre 9,5 et 11. En milieu acide (pH < 9), l'amine se trouve sous forme de sel d'ammonium soluble.`
          ]
        }
      ]
    },
    {
      title: `II. LES ACIDES α-AMINÉS ET LA CHIRALITÉ`,
      subsections: [
        {
          subtitle: `A. Formule générale et stéréochimie`,
          content: [
            `Un acide α-aminé possède un groupe amine -NH₂ et un groupe carboxyle -COOH fixés sur le MÊME atome de carbone adjacent (appelé carbone α) :`,
            `R - CH(NH₂) - COOH.`,
            `Carbone asymétrique C* : Pour tous les acides aminés naturels (à l'exception de la glycine H-CH(NH₂)-COOH), le carbone α est lié à 4 atomes ou groupes d'atomes différents (-H, -NH₂, -COOH, -R). C'est un centre de chiralité.`,
            `Énantiomères : La molécule n'est pas superposable à son image dans un miroir plan : elle existe sous deux formes stéréoisomères optiques appelées énantiomères (séries D et L en représentation de Fischer). Tous les acides aminés composant les protéines vivantes sont de la série L.`
          ]
        },
        {
          subtitle: `B. L'état dipolaire de l'amphion (Zwitterion)`,
          content: [
            `Par transfert intramoléculaire de proton entre la fonction acide -COOH et la fonction basique -NH₂, l'acide aminé se transforme spontanément en un ion dipolaire globalement neutre appelé AMPHION (ou zwitterion) :`,
            `R - CH(NH₃⁺) - COO⁻.`,
            `Comportement acido-basique ampholyte : L'amphion possède deux couples pK_a₁ (autour de 2,3 pour le groupe carboxylate) et pK_a₂ (autour de 9,6 pour le groupe ammonium) :`,
            `• En milieu très acide (pH < 2) : Forme cationique H₃N⁺-CH(R)-COOH.`,
            `• En milieu neutre (au point isoélectrique pHi) : Forme zwitterionique neutre H₃N⁺-CH(R)-COO⁻.`,
            `• En milieu très basique (pH > 10) : Forme anionique H₂N-CH(R)-COO⁻.`
          ]
        }
      ]
    },
    {
      title: `III. LA LIAISON PEPTIDIQUE ET SYNTHÈSE DES PROTÉINES`,
      subsections: [
        {
          subtitle: `A. Réaction de condensation peptidique`,
          content: [
            `La réaction entre le groupe carboxyle d'un acide aminé 1 et le groupe amine d'un acide aminé 2 avec élimination d'une molécule d'eau forme une fonction amide appelée LIAISON PEPTIDIQUE :`,
            `-CO-OH + H-NH- ➔ -CO-NH- + H₂O.`,
            `Propriété géométrique essentielle : La liaison C-N de la liaison peptidique possède un caractère partiel de double liaison par délocalisation électronique (mésomérie avec le carbonyle). Par conséquent, les 4 atomes du groupe peptidique (-CO-NH-) sont RIGIDEMENT COPLANAIRES, ce qui impose aux chaînes de protéines leur conformation tridimensionnelle hélicoïdale (hélice α, feuillet β).`
          ]
        },
        {
          subtitle: `B. Dipeptides distincts`,
          content: [
            `Deux acides aminés différents A et B peuvent former 4 dipeptides distincts par condensation non sélective :`,
            `A-A, B-B, A-B (extrémité N sur A, C sur B), et B-A (extrémité N sur B, C sur A).`,
            `Pour synthétiser spécifiquement le dipeptide A-B, le chimiste doit utiliser des groupes protecteurs sur l'amine de A et sur le carboxyle de B, activer le carboxyle de A, puis déprotéger après couplage.`
          ]
        }
      ]
    }
  ]
};
