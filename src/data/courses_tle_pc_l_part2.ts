import { LessonContent } from './courses';

// =========================================================================
// PHYSIQUE-CHIMIE CLASSE DE TERMINALE L (SÉRIES L2, L') — PARTIE 2 (CHIMIE)
// Conforme au programme officiel national du Sénégal (Baccalauréat Série L)
// Leçons L-4 à L-6 : Solutions aqueuses & pH, Chimie organique & Savonnerie, Plastiques & Environnement
// Leçons longues sans résumé, schémas vectoriels expérimentaux et démonstrations obligatoires
// =========================================================================

export const SVG_PC_TLE_L_PH_ECHELLE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <defs>
    <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="25%" stop-color="#f97316" />
      <stop offset="50%" stop-color="#22c55e" />
      <stop offset="75%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>
  <rect width="760" height="380" rx="16" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">
    FIGURE 4 : ÉCHELLE DE pH DES SOLUTIONS AQUEUSES À 25°C & NATURE DES ESPÈCES
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#2563eb">
    pH = -log[H₃O⁺] et produit ionique de l'eau K_e = [H₃O⁺]·[HO⁻] = 1,0 × 10⁻¹⁴ à 25°C
  </text>

  <!-- pH Gradient Bar -->
  <rect x="60" y="110" width="640" height="40" rx="8" fill="url(#phGrad)" stroke="#334155" stroke-width="2"/>

  <!-- Ticks and labels -->
  <!-- 0 -->
  <line x1="60" y1="150" x2="60" y2="165" stroke="#334155" stroke-width="2" />
  <text x="60" y="182" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">0</text>
  <text x="60" y="95" text-anchor="middle" font-size="11" fill="#dc2626">Acide fort</text>

  <!-- 3 -->
  <line x1="197" y1="150" x2="197" y2="165" stroke="#334155" stroke-width="2" />
  <text x="197" y="182" text-anchor="middle" font-size="13" font-weight="bold" fill="#ea580c">3</text>
  <text x="197" y="95" text-anchor="middle" font-size="11" fill="#ea580c">Vinaigre/Citron</text>

  <!-- 7 -->
  <line x1="380" y1="150" x2="380" y2="165" stroke="#334155" stroke-width="2.5" />
  <text x="380" y="182" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">7 (Neutre)</text>
  <text x="380" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Eau pure (25°C)</text>

  <!-- 10 -->
  <line x1="517" y1="150" x2="517" y2="165" stroke="#334155" stroke-width="2" />
  <text x="517" y="182" text-anchor="middle" font-size="13" font-weight="bold" fill="#0284c7">10</text>
  <text x="517" y="95" text-anchor="middle" font-size="11" fill="#0284c7">Eau savonneuse</text>

  <!-- 14 -->
  <line x1="700" y1="150" x2="700" y2="165" stroke="#334155" stroke-width="2" />
  <text x="700" y="182" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">14</text>
  <text x="700" y="95" text-anchor="middle" font-size="11" fill="#2563eb">Soude NaOH</text>

  <!-- Regions comparison -->
  <rect x="60" y="210" width="280" height="60" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" />
  <text x="200" y="232" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">Milieu Acide (pH &lt; 7)</text>
  <text x="200" y="252" text-anchor="middle" font-size="11" fill="#b91c1c">[H₃O⁺] &gt; [HO⁻] &gt; 10⁻⁷ mol/L</text>

  <rect x="420" y="210" width="280" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
  <text x="560" y="232" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Milieu Basique (pH &gt; 7)</text>
  <text x="560" y="252" text-anchor="middle" font-size="11" fill="#1d4ed8">[HO⁻] &gt; [H₃O⁺] et [H₃O⁺] &lt; 10⁻⁷ mol/L</text>

  <rect x="60" y="290" width="640" height="75" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="80" y="312" font-size="11" font-weight="bold" fill="#0f172a">Potabilisation de l'eau au Sénégal (Normes OMS / Sen'Eau) :</text>
  <text x="80" y="332" font-size="11" fill="#334155">• pH de l'eau potable toléré : entre 6,5 et 8,5.</text>
  <text x="80" y="350" font-size="11" fill="#334155">• Traitement à Keur Momar Sarr (KMS 3) : Décantation ➔ Filtration sur sable ➔ Désinfection au chlore gazeux Cl₂.</text>
</svg>`;

export const SVG_PC_TLE_L_SAVON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" className="w-full h-auto">
  <rect width="760" height="380" rx="16" fill="#fdf4ff" stroke="#c084fc" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#581c87">
    FIGURE 5 : STRUCTURE DE L'ION SAVON & FORMATION D'UNE MICELLE DÉTERGENTE
  </text>
  <text x="380" y="50" text-anchor="middle" font-size="12" fill="#7e22ce">
    Molécule amphiphile : queue lipophile/hydrophobe (apolaire) et tête hydrophile/lipophobe (polaire -COO⁻)
  </text>

  <!-- Single Soap Molecule -->
  <rect x="60" y="80" width="310" height="130" rx="10" fill="#ffffff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="215" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#581c87">Molécule d'oléate de sodium R-COO⁻ Na⁺</text>

  <!-- Zigzag tail -->
  <polyline points="80,150 100,135 120,150 140,135 160,150 180,135 200,150 220,135 240,150" fill="none" stroke="#d97706" stroke-width="3.5" />
  <!-- Hydrophilic head circle -->
  <circle cx="265" cy="150" r="16" fill="#2563eb" />
  <text x="265" y="155" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">-COO⁻</text>
  <circle cx="300" cy="150" r="12" fill="#16a34a" />
  <text x="300" y="154" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Na⁺</text>

  <text x="150" y="180" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Queue lipophile (R : C₁₇H₃₃-)</text>
  <text x="280" y="195" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Tête hydrophile polaire</text>

  <!-- Micelle representation (Right) -->
  <circle cx="560" cy="180" r="85" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <!-- Grease Drop in center -->
  <circle cx="560" cy="180" r="35" fill="#78350f" />
  <text x="560" y="185" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Tache de gras</text>

  <!-- Surrounding soap molecules -->
  <!-- Tails pointing inward to grease, heads outward to water -->
  <line x1="560" y1="145" x2="560" y2="105" stroke="#d97706" stroke-width="2.5" />
  <circle cx="560" cy="100" r="9" fill="#2563eb" />

  <line x1="560" y1="215" x2="560" y2="255" stroke="#d97706" stroke-width="2.5" />
  <circle cx="560" cy="260" r="9" fill="#2563eb" />

  <line x1="525" y1="180" x2="485" y2="180" stroke="#d97706" stroke-width="2.5" />
  <circle cx="480" cy="180" r="9" fill="#2563eb" />

  <line x1="595" y1="180" x2="635" y2="180" stroke="#d97706" stroke-width="2.5" />
  <circle cx="640" cy="180" r="9" fill="#2563eb" />

  <text x="560" y="295" text-anchor="middle" font-size="12" font-weight="bold" fill="#581c87">Micelle en émulsion dans l'eau</text>

  <rect x="60" y="235" width="360" height="120" rx="8" fill="#ffffff" stroke="#c084fc" stroke-width="1.5"/>
  <text x="75" y="257" font-size="11" font-weight="bold" fill="#581c87">Fabrication artisanale de savon au Sénégal :</text>
  <text x="75" y="277" font-size="11" fill="#3b0764">• Huile végétale (arachide, palme) + Soude caustique (NaOH)</text>
  <text x="75" y="297" font-size="11" fill="#3b0764">  ➔ Savon (carboxylate de sodium) + Glycérol (glycérine)</text>
  <text x="75" y="317" font-size="11" fill="#3b0764">• Relargage : précipitation du savon à l'eau saturée en sel (NaCl).</text>
  <text x="75" y="335" font-size="10" fill="#7e22ce">Le savon n'est pas soluble dans l'eau salée : il flotte en surface.</text>
</svg>`;

// =========================================================================
// LEÇON L-4 : L'EAU ET LES SOLUTIONS AQUEUSES : ACIDITÉ ET pH
// =========================================================================
export const LESSON_4_PC_TLE_L: LessonContent = {
  id: `pc-tle-l-cours-4`,
  number: `Leçon L-4`,
  title: `L'Eau et les Solutions Aqueuses : Acidité, Basicité et pH`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale L`,
  level: `Terminale L (Séries L2 & L')`,
  readTime: `60 min d'étude approfondie`,
  description: `Autoprotolyse de l'eau, produit ionique Ke, définition du pH de Soren Sorensen, acides et bases du quotidien, indicateurs colorés et procédé de potabilisation industrielle de l'eau au Sénégal (usine de Keur Momar Sarr).`,
  image: {
    caption: `Figure 4 : Échelle de pH de 0 à 14, concentrations en ions H₃O⁺ et HO⁻ et procédé de potabilisation au Sénégal.`,
    svgContent: SVG_PC_TLE_L_PH_ECHELLE
  },
  diagram: {
    title: `Solutions Aqueuses et pH`,
    svgContent: SVG_PC_TLE_L_PH_ECHELLE
  },
  introduction: `L'eau est la molécule indispensable à toute vie humaine, végétale et animale au Sénégal. En chimie, l'eau liquide n'est pas un simple solvant passif : elle participe activement à des échanges de protons entre ses propres molécules (réaction d'autoprotolyse). L'équilibre entre les ions oxonium H₃O⁺ (responsables du caractère acide) et les ions hydroxyde HO⁻ (responsables du caractère basique) détermine le potentiel hydrogène (pH) de la solution. 
De la composition de notre sang (pH strictement régulé entre 7,35 et 7,45) à la potabilisation des eaux du fleuve Sénégal ou du lac de Guiers, la mesure et le contrôle du pH sont vitaux. Ce chapitre enseigne aux élèves de Terminale L la théorie de l'acidité et de la basicité, l'utilisation des indicateurs colorés naturels et industriels, et le cycle de traitement de l'eau potable au Sénégal.`,
  conclusion: `En conclusion, la mesure du pH repose sur la relation fondamentale : pH = -log[H₃O⁺] ⟺ [H₃O⁺] = 10^(-pH) mol/L. À 25°C, la neutralité correspond exactement à pH = 7 ([H₃O⁺] = [HO⁻] = 10^(-7) mol/L). Tout apport d'acide augmente la concentration en ions H₃O⁺ et fait baisser le pH en dessous de 7, tandis qu'un apport de base augmente les ions HO⁻ et élève le pH au-dessus de 7. Les indicateurs colorés permettent de déterminer visuellement le domaine de pH d'une solution par simple changement de couleur.`,
  sections: [
    {
      title: `I. L'AUTOPROTOLYSE DE L'EAU ET LE PRODUIT IONIQUE K_e`,
      subsections: [
        {
          subtitle: `A. L'équilibre d'autoprotolyse de l'eau pure`,
          content: [
            `Même dans l'eau la plus pure, il se produit une réaction chimique spontanée et réversible au cours de laquelle une molécule d'eau cède un proton H⁺ à une autre molécule d'eau :`,
            `2 H₂O (l) ⇄ H₃O⁺ (aq) + HO⁻ (aq).`,
            `Cette réaction est appelée autoprotolyse de l'eau.`,
            `À cet équilibre chimique est associée une constante d'équilibre appelée PRODUIT IONIQUE DE L'EAU, notée K_e :`,
            `K_e = [H₃O⁺] × [HO⁻].`,
            `À la température standard de 25°C, K_e = 1,0 × 10⁻¹⁴ (sans unité).`,
            `En prenant le cologarithme pK_e = -log(K_e) = 14 à 25°C.`
          ]
        },
        {
          subtitle: `B. Définition du pH et échelle de 0 à 14`,
          content: [
            `En 1909, le chimiste danois Søren Sørensen introduit la notion de pH pour simplifier l'écriture des très faibles concentrations d'ions oxonium :`,
            `pH = - log[H₃O⁺], où [H₃O⁺] est exprimée en mol/L.`,
            `Réciproquement : [H₃O⁺] = 10^(-pH) mol/L.`,
            `Classification des solutions à 25°C :`,
            `1. Solution neutre : [H₃O⁺] = [HO⁻] = 10⁻⁷ mol/L ⟹ pH = -log(10⁻⁷) = 7.`,
            `2. Solution acide : [H₃O⁺] > [HO⁻] ⟹ [H₃O⁺] > 10⁻⁷ mol/L ⟹ pH < 7.`,
            `3. Solution basique : [H₃O⁺] < [HO⁻] ⟹ [H₃O⁺] < 10⁻⁷ mol/L ⟹ pH > 7.`
          ]
        }
      ]
    },
    {
      title: `II. LES INDICATEURS COLORÉS DE pH`,
      subsections: [
        {
          subtitle: `A. Principe de fonctionnement et zone de virage`,
          content: [
            `Un indicateur coloré acido-basique est une espèce chimique dont la forme acide (notée InH) et la forme basique conjuguée (notée In⁻) ont des teintes distinctes en solution aqueuse :`,
            `InH (couleur 1) + H₂O ⇄ In⁻ (couleur 2) + H₃O⁺.`,
            `L'intervalle de pH dans lequel la solution prend une teinte intermédiaire sensible est appelé ZONE DE VIRAGE.`,
            `Principaux indicateurs usuels :`,
            `• Héliantine : vire du rouge au jaune entre pH 3,1 et 4,4.`,
            `• Bleu de bromothymol (BBT) : jaune en milieu acide (pH < 6,0), vert à la neutralité (pH ≈ 7), et bleu en milieu basique (pH > 7,6). C'est l'indicateur idéal des titrages neutres.`,
            `• Phénolphtaléine : incolore en milieu acide et neutre (pH < 8,2), et rose fuchsia vif en milieu basique (pH > 10,0).`
          ]
        }
      ]
    },
    {
      title: `III. POTABILISATION ET CONTRÔLE DE L'EAU AU SÉNÉGAL`,
      subsections: [
        {
          subtitle: `A. Le procédé industriel à l'usine de Keur Momar Sarr (KMS)`,
          content: [
            `L'eau pompée dans le lac de Guiers est turbide et chargée de matières organiques et de bactéries. Elle subit à l'usine de traitement KMS un processus rigoureux :`,
            `1. Dégrillage et tamisage : élimination des gros débris flottants (végétaux, branchages).`,
            `2. Coagulation-floculation : ajout de sulfate d'aluminium pour agglomérer les particules colloïdales en flocons lourds.`,
            `3. Décantation : les flocons se déposent au fond des bassins sous l'effet de la gravité.`,
            `4. Filtration rapide sur lit de sable de silice : retient les microparticules résiduelles.`,
            `5. Ajustement du pH (neutralisation) : à l'aide de chaux pour éviter que l'eau soit agressive envers les canalisations.`,
            `6. Désinfection finale au chlore gazeux (Cl₂) : élimine 100% des agents pathogènes et maintient un chlore résiduel protecteur dans le réseau jusqu'aux robinets de Dakar.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-5 : CHIMIE ORGANIQUE APPLIQUÉE ET ALIMENTATION
// =========================================================================
export const LESSON_5_PC_TLE_L: LessonContent = {
  id: `pc-tle-l-cours-5`,
  number: `Leçon L-5`,
  title: `Chimie Organique Appliquée et Alimentation`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale L`,
  level: `Terminale L (Séries L2 & L')`,
  readTime: `60 min d'étude et procédés industriels`,
  description: `Familles chimiques (hydrocarbures, alcools, acides carboxyliques, esters), lipides et triglycérides, réaction de saponification, mode d'action nettoyant du savon et fabrication artisanale au Sénégal.`,
  image: {
    caption: `Figure 5 : Formule d'un ion savon amphiphile et formation des micelles en émulsion pour dissoudre les graisses.`,
    svgContent: SVG_PC_TLE_L_SAVON
  },
  diagram: {
    title: `Chimie Organique et Savonnerie`,
    svgContent: SVG_PC_TLE_L_SAVON
  },
  introduction: `La chimie organique est la chimie des composés du carbone et de l'hydrogène. Elle est au cœur de l'industrie agroalimentaire, cosmétique et pharmaceutique au Sénégal. Les corps gras végétaux traditionnels de notre terroir (l'huile d'arachide de Kaolack, l'huile de palme de Casamance, le beurre de karité et l'huile de coco) sont constitués de triglycérides. 
Par une réaction séculaire appelée saponification, l'action d'une base forte sur ces corps gras produit du savon et du glycérol. Ce chapitre étudie les grandes fonctions organiques oxygénées, détaille le mécanisme chimique de la saponification et explique scientifiquement le pouvoir nettoyant détergent des savons.`,
  conclusion: `En conclusion, la réaction de saponification : Triglycéride (corps gras) + 3 NaOH (soude) ➔ 3 R-COO⁻ Na⁺ (savon) + Glycérol est une réaction totale, lente à froid mais accélérée à chaud. L'ion savon possède une structure amphiphile unique : une longue chaîne carbonée hydrophobe qui s'enfonce dans les taches de graisse et une tête carboxylate hydrophile chargée qui reste en contact avec l'eau. Lors du rinçage, les micelles emprisonnant la saleté sont évacuées avec l'eau courante.`,
  sections: [
    {
      title: `I. LES GRANDES FAMILLES DE LA CHIMIE ORGANIQUE OXYGÉNÉE`,
      subsections: [
        {
          subtitle: `A. Groupes caractéristiques fonctionnels`,
          content: [
            `1. Les alcools : possèdent le groupe hydroxyle -OH lié à un carbone tétraédrique (exemple : éthanol CH₃-CH₂-OH).`,
            `2. Les acides carboxyliques : possèdent le groupe carboxyle -COOH (exemple : acide acétique CH₃-COOH du vinaigre).`,
            `3. Les esters : possèdent le groupe -COO- issu de la réaction entre un acide carboxylique et un alcool (molécules aromatiques responsables des parfums fruités des mangues et bananes).`,
            `4. Le glycérol (propane-1,2,3-triol) : un trialcool comportant 3 fonctions alcool sur une chaîne à 3 carbones : CH₂OH-CHOH-CH₂OH.`
          ]
        }
      ]
    },
    {
      title: `II. LES LIPIDES ET LA RÉACTION DE SAPONIFICATION`,
      subsections: [
        {
          subtitle: `A. Structure des triglycérides (corps gras)`,
          content: [
            `Les huiles et graisses végétales ou animales sont des triesters du glycérol et d'acides gras à longue chaîne carbonée (12 à 22 carbones), appelés triglycérides.`,
            `Exemple : Le trioléate de glycéryle (oléine), constituant majeur de l'huile d'arachide au Sénégal.`,
            `Équation bilan générale de la saponification :`,
            `Triglycéride + 3 (Na⁺ + HO⁻) ➔ Glycérol + 3 (R-COO⁻ + Na⁺).`,
            `Caractéristiques de la réaction :`,
            `• Contrairement à l'hydrolyse acide d'un ester qui est limitée et réversible, la saponification par les ions hydroxyde est TOTALE (irréversible).`,
            `• Elle est athermique et relativement lente à température ambiante ; on la chauffe à reflux pour l'accélérer.`
          ]
        },
        {
          subtitle: `B. Le procédé de relargage au sel marin (NaCl)`,
          content: [
            `Après la cuisson du mélange huile + soude, le savon et le glycérol restent dissous dans l'eau.`,
            `Pour séparer le savon pur, on verse une solution concentrée d'eau salée (saumure de sel marin NaCl de Kaolack ou du lac Rose).`,
            `Principe chimique : Par effet d'ion commun Na⁺ et augmentation de la force ionique, la solubilité du carboxylate de sodium devient quasi nulle : le savon précipite en grumeaux solides qui surnagent. C'est le relargage.`,
            `La phase aqueuse inférieure contenant le glycérol est soutirée.`
          ]
        }
      ]
    },
    {
      title: `III. MODE D'ACTION DÉTERGENT DU SAVON`,
      subsections: [
        {
          subtitle: `A. Structure amphiphile de l'ion savon`,
          content: [
            `L'ion carboxylate R-COO⁻ est composé de deux parties chimiquement opposées :`,
            `1. La queue carbonée R- (15 à 17 atomes de carbone) : apolaire, LIPOMOBILE (aime les graisses) et HYDROPHOBE (fuit l'eau).`,
            `2. La tête carboxylate -COO⁻ : chargée négativement, polaire, HYDROPHILE (aime l'eau) et LIPOPHOBE.`,
            `Mécanisme de lavage :`,
            `En présence d'une tache huileuse sur un tissu, les queues hydrophobes des molécules de savon pénètrent au cœur de la graisse tandis que les têtes hydrophiles restent tournées vers l'eau.`,
            `Sous l'effet de l'agitation mécanique, la goutte de graisse est fragmentée en gouttelettes microscopiques entourées d'une couronne de têtes négatives : ce sont les MICELLES.`,
            `Les micelles se repoussant mutuellement du fait de leurs charges négatives, elles restent en suspension colloïdale stable dans l'eau de lavage et sont évacuées lors du rinçage.`
          ]
        }
      ]
    }
  ]
};

// =========================================================================
// LEÇON L-6 : MATIÈRES PLASTIQUES ET ENVIRONNEMENT
// =========================================================================
export const LESSON_6_PC_TLE_L: LessonContent = {
  id: `pc-tle-l-cours-6`,
  number: `Leçon L-6`,
  title: `Matières Plastiques et Environnement`,
  subject: `Physique-Chimie`,
  classLevel: `Terminale L`,
  level: `Terminale L (Séries L2 & L')`,
  readTime: `60 min d'écologie et chimie verte`,
  description: `Polymères synthétiques (PE, PP, PVC, PET, PS), thermoplastiques et thermodurcissables, pollution plastique au Sénégal, loi interdisant les sachets plastiques à usage unique, recyclage et bioplastiques.`,
  image: {
    caption: `Figure 6 : Symboles universels de recyclage des matières plastiques (codes 1 à 7) et cycle de valorisation matière.`,
    svgContent: SVG_PC_TLE_L_SAVON
  },
  diagram: {
    title: `Matières Plastiques et Recyclage`,
    svgContent: SVG_PC_TLE_L_SAVON
  },
  introduction: `Les matières plastiques ont révolutionné notre quotidien au XXe siècle par leur légèreté, leur étanchéité, leur résistance mécanique et leur faible coût de production. Cependant, leur extraordinaire longévité chimique (plus de 400 ans pour se dégrader dans la nature) en a fait l'un des fléaux écologiques les plus dévastateurs de notre siècle. 
Au Sénégal, la prolifération des sachets plastiques légers non biodégradables (les "périls plastiques") a décimé le bétail par ingestion, bouché les canaux d'évacuation des eaux pluviales à Dakar provoquant des inondations dévastatrices, et pollué durablement le littoral atlantique. 
Ce chapitre de Terminale L étudie la chimie des polymères synthétiques, analyse les filières de recyclage et présente les alternatives d'avenir des bioplastiques biodégradables.`,
  conclusion: `En conclusion, la chimie des polymères distingue les thermoplastiques (recyclables car ils fondent sous l'effet de la chaleur, comme le PET des bouteilles d'eau ou le PEHD des bidons) et les thermodurcissables (qui brûlent sans fondre et ne peuvent pas être refondus). Face à l'urgence environnementale, le Sénégal a promulgué la Loi 2020-04 interdisant les produits plastiques à usage unique. L'économie circulaire et le développement de biopolymères à base d'amidon de manioc ou de résidus agricoles locaux constituent la réponse scientifique durable à cette crise.`,
  sections: [
    {
      title: `I. STRUCTURE CHIMIQUE ET CLASSIFICATION DES POLYMÈRES`,
      subsections: [
        {
          subtitle: `A. Réactions de polymérisation`,
          content: [
            `Un polymère est une macromolécule géante constituée par la répétition d'un très grand nombre de motifs élémentaires identiques appelés monomères reliés par des liaisons covalentes.`,
            `Degré de polymérisation n : nombre moyen de molécules de monomère enchaînées :`,
            `Masse molaire du polymère M = n × M_monomère.`,
            `Exemple du polyéthylène (PE) : n CH₂=CH₂ ➔ -[CH₂-CH₂]_n-.`
          ]
        },
        {
          subtitle: `B. Les grandes familles de plastiques usuels et codes de recyclage`,
          content: [
            `• Code 1 - PET (Polyéthylène téréphtalate) : transparent et rigide, utilisé pour les bouteilles d'eau minérale et de sodas.`,
            `• Code 2 - PEHD (Polyéthylène haute densité) : opaque et rigide, utilisé pour les bidons d'huile et flacons de détergent.`,
            `• Code 3 - PVC (Polychlorure de vinyle) : tuyaux d'évacuation sanitaire, menuiseries.`,
            `• Code 4 - PEBD (Polyéthylène basse densité) : souple et étanche, sachets plastiques et films d'emballage.`,
            `• Code 5 - PP (Polypropylène) : résistant à la chaleur, bouchons de bouteilles, emballages micro-ondables.`,
            `• Code 6 - PS (Polystyrène) : vaisselle jetable, gobelets à café, isolation thermique expansée.`
          ]
        }
      ]
    },
    {
      title: `II. IMPACTS ÉCOLOGIQUES ET LÉGISLATION AU SÉNÉGAL`,
      subsections: [
        {
          subtitle: `A. Le péril plastique et la loi 2020-04`,
          content: [
            `Conséquences environnementales et sanitaires au Sénégal :`,
            `1. Mortalité pastorale : les moutons et vaches ingèrent les sachets abandonnés qui obstruent la panse (formation de bézoards) et provoquent la mort par occlusion digestive.`,
            `2. Inondations urbaines : obstruction systématique des caniveaux d'assainissement à Dakar, Pikine et Guédiawaye.`,
            `3. Microplastiques marins : dégradation mécanique en particules microscopiques ingérées par les poissons côtiers (thiof, sardines) et contamination de la chaîne alimentaire humaine.`,
            `La Loi sénégalaise N° 2020-04 : interdit formellement la production, l'importation, la distribution et la détention de sachets plastiques à usage unique à poignées sur tout le territoire national.`
          ]
        }
      ]
    }
  ]
};
