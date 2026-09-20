import { LessonContent } from './courses';
import {
  SVG_SVT_3EME_PHAGOCYTOSE
} from './diagrams_3eme_svt';

// =========================================================================
// SVT 3ÈME - SCIENCES DE LA VIE
// LEÇONS 8 À 14 : LE MONDE DES MICROBES ET LE SYSTÈME IMMUNITAIRE
// COURS COMPLETS ET APPROFONDIS POUR LE BFEM (SÉNÉGAL)
// =========================================================================

export const LESSON_8_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-8',
  number: 'Leçon 8',
  title: 'LE MONDE DES MICROBES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Les microbes, ou micro-organismes, sont des êtres vivants microscopiques invisibles à l’œil nu, présents partout dans notre environnement : dans l’air, l’eau, le sol, sur les aliments et sur notre peau. Si certains d’entre eux sont des agents pathogènes redoutables capables de provoquer des maladies graves (paludisme, tétanos, tuberculose), l’immense majorité des microbes sont inoffensifs, voire indispensables à la vie sur Terre et utilisés par l’Homme dans les industries agroalimentaires et pharmaceutiques.",
  fullText: `Le monde microbien est caractérisé par une diversité biologique colossale et des modes de vie très variés.

I. LA CLASSIFICATION DES MICRO-ORGANISMES
Les micro-organismes se répartissent en quatre grands groupes :
1. Les Bactéries :
Organismes unicellulaires procaryotes (dépourvus de noyau individualisé, matériel génétique libre dans le cytoplasme) mesurant de 1 à 10 micromètres (µm). Selon leur forme géométrique :
- Les Bacilles : bactéries en bâtonnets allongés (ex : Bacille de Koch de la tuberculose, Bacille tétanique).
- Les Coques : bactéries sphériques, isolées ou en groupes (staphylocoques en grappes, streptocoques en chaînettes, diplocoques par paires comme le méningocoque).
- Les Vibrions : bactéries incurvées en virgule (ex : Vibrion cholérique).
- Les Spirilles et Spirochètes : bactéries spiralées (ex : Treponema pallidum de la syphilis).

2. Les Virus :
Entités biologiques acellulaires ultramicroscopiques (20 à 300 nanomètres, visibles uniquement au microscope électronique). Ils sont constitués d’une capside protéique protectrice enveloppant un matériel génétique (ADN ou ARN). Les virus sont des parasites intracellulaires obligatoires : incapables de se multiplier par eux-mêmes, ils doivent pénétrer dans une cellule vivante hôte et détourner sa machinerie pour fabriquer de nouveaux virus (ex : Virus de la grippe, VIH, virus de l’hépatite B, virus de la rougeole).

3. Les Champignons microscopiques (Micromycètes) :
Organismes eucaryotes (avec un vrai noyau). On distingue :
- Les Levures : unicellulaires (ex : Saccharomyces cerevisiae pour la fabrication du pain et de la bière, Candida albicans responsable de mycoses).
- Les Moisissures : pluricellulaires filamenteuses (ex : Penicillium notatum produisant la pénicilline).

4. Les Protozoaires :
Organismes unicellulaires eucaryotes mobiles vivant en milieu aqueux ou dans les liquides biologiques (ex : Plasmodium falciparum responsable du paludisme, amibe dysentérique Entamoeba histolytica).

II. MICROBES UTILES ET MICROBES PATHOGÈNES
1. Les microbes utiles et symbiotiques :
- Le microbiote humain : des milliards de bactéries vivent en symbiose sur notre peau et dans notre tube digestif (microbiote intestinal), facilitant la digestion et empêchant l’implantation d’agents pathogènes.
- Applications industrielles : fermentation lactique (yaourt, fromage), fermentation alcoolique, production d’antibiotiques (pénicilline) et génie génétique (production d’insuline humaine par des bactéries OGM).
2. Le pouvoir pathogène des microbes :
Il repose sur deux mécanismes :
- Le pouvoir invasif : capacité du microbe à proliférer rapidement dans l’organisme et à envahir les tissus (ex : septicémie).
- Le pouvoir toxique : sécrétion de substances toxiques virulentes appelées toxines :
  * Les exotoxines : protéines solubles très puissantes libérées dans le sang par les bactéries vivantes (ex : toxine tétanique bloquant les réflexes d’inhibition musculaire).
  * Les endotoxines : composants toxiques de la paroi bactérienne libérés lors de la destruction de la bactérie.`,
  sections: [
    {
      title: 'I. Les Quatre Grands Groupes de Micro-organismes',
      content: [
        'Le monde microbien rassemble les bactéries procaryotes, les virus parasites obligatoires, les champignons microscopiques et les protozoaires unicellulaires.',
        'Leur taille varie du micromètre (bactéries) au nanomètre (virus).'
      ],
      table: {
        headers: ['Groupe microbien', 'Structure cellulaire', 'Taille typique', 'Exemple pathogène', 'Exemple utile'],
        rows: [
          ['Bactéries', 'Procaryote (sans noyau)', '1 à 10 µm', 'Bacille de Koch (Tuberculose)', 'Lactobacillus (Fermentation du lait)'],
          ['Virus', 'Acellulaire (parasite absolu)', '20 à 300 nm', 'VIH (SIDA), Virus de la rage', 'Bactériophages en phagothérapie'],
          ['Champignons', 'Eucaryote (levures/moisissures)', '5 à 50 µm', 'Candida albicans (Mycose)', 'Penicillium (Antibiotique Pénicilline)'],
          ['Protozoaires', 'Eucaryote unicellulaire mobile', '10 à 100 µm', 'Plasmodium falciparum (Paludisme)', 'Protozoaires épurateurs des stations d’eau']
        ]
      }
    },
    {
      title: 'II. Pouvoir Pathogène : Invasivité et Toxines',
      content: [
        'Les bactéries pathogènes agissent soit en envahissant directement les organes (pouvoir invasif), soit en libérant des poisons biologiques extrêmement puissants (toxines tétanique, diphtérique ou botulique).'
      ]
    }
  ],
  diagram: {
    title: 'Classification du Monde Microbien',
    root: 'MICROBES',
    branches: [
      {
        name: '4 Familles Biologiques',
        subtitle: 'Organisation',
        items: ['Bactéries procaryotes (bacilles, coques)', 'Virus parasites obligatoires (ARN/ADN)', 'Champignons microscopiques (levures)', 'Protozoaires eucaryotes (Plasmodium)']
      },
      {
        name: 'Rôles & Toxines',
        subtitle: 'Impact biologique',
        items: ['Microbiote protecteur & fermentations', 'Exotoxines solubles sécrétées (Tétanos)', 'Endotoxines de paroi', 'Pouvoir invasif (septicémie)']
      }
    ]
  },
  conclusion: "Le monde des microbes est omniprésent et diversifié. La distinction claire entre germes pathogènes et germes utiles permet d’adopter des règles d’hygiène préventive tout en exploitant les biotechnologies modernes."
};

export const LESSON_9_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-9',
  number: 'Leçon 9',
  title: 'BARRIÈRES NATURELLES, CONTAMINATION ET INFECTION MICROBIENNE',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Le corps humain est en contact permanent avec d’innombrables micro-organismes potentiellement dangereux. Pour empêcher leur pénétration, notre organisme a développé au cours de l’évolution des lignes de défense remarquables : les barrières naturelles. Lorsque ces défenses sont franchies lors d’une brèche, on assiste à la contamination. Si les germes parviennent ensuite à se multiplier et à léser les tissus, l’infection s’installe.",
  fullText: `La protection de l’organisme face au péril microbien commence par l’intégrité de ses barrières anatomiques et physiologiques.

I. LES BARRIÈRES NATURELLES DE L’ORGANISME
L’organisme dispose de trois types complémentaires de barrières protectrices :
1. Les Barrières Mécaniques :
- La Peau : revêtement externe imperméable dont la couche cornée superficielle est kératinisée et se desquame continuellement, éliminant les microbes fixés.
- Les Muqueuses : tapissent les cavités ouvertes vers l’extérieur (voies respiratoires, digestives, urinaires, génitales). Le mucus visqueux piège les poussières et les microbes, tandis que les cils vibratiles de l’arbre respiratoire les refoulent continuellement vers le pharynx pour être expectorés ou avalés.

2. Les Barrières Chimiques :
Les sécrétions corporelles créent des conditions hostiles à la survie des microbes :
- Le Sébum et la Sueur : créent un film lipidique acide (pH ~ 5,5) sur la peau qui freine la multiplication microbienne.
- Les Larmes et la Salive : contiennent une enzyme antibactérienne, le lysozyme, qui hydrolyse la paroi des bactéries.
- Le Suc Gastrique de l’estomac : extrêmement acide (acide chlorhydrique, pH 1 à 2), il détruit la quasi-totalité des germes ingérés avec la nourriture.
- Les sécrétions vaginales acides : protègent les voies génitales féminines.

3. Les Barrières Écologiques ou Biologiques :
Le microbiote normal (bactéries commensales de la peau et du tube digestif) entre en compétition pour l’espace et les nutriments avec les germes pathogènes opportunistes et produit des substances inhibitrices (bactériocines).

II. LA CONTAMINATION MICROBIENNE
La contamination est la pénétration accidentelle de micro-organismes pathogènes à travers l’une des barrières naturelles dans le milieu intérieur.
Voies de contamination :
- Voie cutanée : piqûre, coupure, brûlure, morsure d’animal ou piqûre d’insecte vecteur (ex : moustique anophèle pour le paludisme).
- Voie respiratoire : inhalation de gouttelettes de salive émises lors de la toux ou d’éternuements (tuberculose, grippe, coronavirus).
- Voie digestive : ingestion d’eau souillée ou d’aliments contaminés (choléra, typhoïde).
- Voie génitale : rapports sexuels non protégés (syphilis, VIH, gonorrhée).
- Voie sanguine : transfusion non contrôlée, seringues ou objets tranchants souillés partagés.

III. DE LA CONTAMINATION À L’INFECTION
Dès que les microbes ont franchi la barrière, ils pénètrent dans le milieu intérieur (sang, lymphe, liquide interstitiel) : c’est l’Infection.
1. Modalités de l’infection bactérienne :
- Infection locale : prolifération limitée au point d’entrée avec formation d’un abcès de pus.
- Septicémie : passage massif et continu de bactéries vivantes dans la circulation sanguine, disséminant l’infection à tout l’organisme avec fièvre élevée et risque de choc septique mortel.
- Toxinémie : les bactéries restent localisées au niveau de la plaie mais libèrent une toxine soluble qui diffuse dans tout le sang et attaque des organes cibles vitaux (ex : le bacille tétanique au fond d’une plaie souillée libère la tétanospasmine neurotoxique).
2. Modalités de l’infection virale :
Pénétration du virus dans une cellule cible, transcription du génome viral, synthèse de milliers de nouveaux virions et éclatement (lyse) de la cellule hôte infectée, propageant l’infection aux cellules voisines.`,
  sections: [
    {
      title: 'I. Les Trois Catégories de Barrières Naturelles',
      content: [
        'La peau kératinisée et les muqueuses ciliées forment la première ligne de défense mécanique.',
        'Les sécrétions acides (suc gastrique, sueur) et enzymatiques (lysozyme des larmes) apportent une barrière chimique inhospitalière.',
        'La flore commensale (microbiote) empêche la colonisation par compétition écologique.'
      ],
      table: {
        headers: ['Type de barrière', 'Organes et sécrétions', 'Mécanisme d’action protecteur'],
        rows: [
          ['Mécanique', 'Épiderme cutané, mucus, cils bronchiques', 'Imperméabilité physique, piégeage et refoulement des particules'],
          ['Chimique', 'Suc gastrique (HCl), larmes, salive, sueur', 'Acidité extrême létale pour les germes et lysozyme lytique'],
          ['Biologique', 'Microbiote cutané et flore intestinale', 'Compétition trophique et sécrétion de bactériocines protectrices']
        ]
      }
    },
    {
      title: 'II. Contamination et Voies de Pénétration',
      content: [
        'La contamination est l’intrusion du germe à la faveur d’une lésion ou par voie muqueuse.',
        'Les voies respiratoire, digestive, cutanée, sanguine et sexuelle constituent les portes d’entrée des maladies transmissibles.'
      ]
    },
    {
      title: 'III. Infection : Infection Locale, Septicémie et Toxinémie',
      content: [
        'L’infection correspond à la multiplication des micro-organismes dans le corps.',
        'On distingue l’infection bactérienne locale (abcès), généralisée (septicémie) ou toxinique (toxinémie tétanique).'
      ]
    }
  ],
  diagram: {
    title: 'Défenses, Contamination et Infection',
    root: 'BARRIÈRES & INFECTION',
    branches: [
      {
        name: 'Barrières Protectrices',
        subtitle: 'Lignes de front',
        items: ['Mécaniques (peau intacte, mucus, cils)', 'Chimiques (pH acide, lysozyme larmes)', 'Biologiques (microbiote intestinal)']
      },
      {
        name: 'Phases Pathologiques',
        subtitle: 'Évolution de la maladie',
        items: ['Contamination (franchissement de la barrière)', 'Infection locale (abcès, pus)', 'Septicémie (germes dans tout le sang)', 'Toxinémie (diffusion de toxines létales)']
      }
    ]
  },
  conclusion: "Le maintien de l’intégrité cutanéo-muqueuse et les gestes d’hygiène quotidienne (lavage des mains à l’eau et au savon, désinfection immédiate des plaies) sont les meilleurs remparts contre la contamination microbienne."
};

export const LESSON_10_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-10',
  number: 'Leçon 10',
  title: 'L’IMMUNITÉ NATURELLE OU NON SPÉCIFIQUE',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Lorsque des microbes franchissent les barrières naturelles de la peau ou des muqueuses, l’organisme réagit immédiatement en déployant un ensemble de défenses automatiques : c’est l’immunité naturelle ou non spécifique (ou immunité innée). Présente dès la naissance, cette réponse agit sans délai (en quelques minutes à quelques heures) et de manière identique quel que soit le type d’agent agresseur, à travers la réaction inflammatoire aiguë et la phagocytose.",
  fullText: `L’immunité innée constitue la première ligne de défense cellulaire et vasculaire face à toute intrusion microbienne.

I. LA RÉACTION INFLAMMATOIRE AIGUË
Lors d’une piqûre (par exemple par une épine souillée), les cellules résidentes du tissu lésé (mastocytes et macrophages tissulaires) détectent les microbes grâce à des récepteurs de reconnaissance de motifs moléculaires (PRR) et libèrent des médiateurs chimiques de l’inflammation, dont l’Histamine.
Cette libération déclenche les 4 signes cardinaux de l’inflammation (décrits par Celse dans l’Antiquité) :
1. La Rougeur : due à la vasodilatation des artérioles et capillaires sanguins augmentant l’afflux de sang local.
2. La Chaleur : conséquence directe de l’afflux sanguin chaud provenant du centre de l’organisme.
3. Le Gonflement (ou Œdème) : causé par l’augmentation de la perméabilité capillaire qui laisse fuiter le plasma sanguin dans le tissu conjonctif lésé.
4. La Douleur : provoquée par la compression mécanique des terminaisons nerveuses par l’œdème et par la stimulation chimique des nocicepteurs par les prostaglandines et la bradykinine.

II. LA DIAPÉDÈSE
Sous l’effet des signaux chimiotactiques, les globules blancs sanguins (leucocytes, en particulier les polynucléaires neutrophiles et les monocytes) ralentissent, adhèrent à la paroi interne des capillaires et s’aplatissent pour se faufiler entre les cellules endothéliales sans déchirer le vaisseau : ce processus d’émigration cellulaire est la Diapédèse. Arrivés dans le tissu contaminé, les monocytes se différencient en volumineux macrophages prêts à dévorer les microbes.

III. LA PHAGOCYTOSE ET SES QUATRE ÉTAPES CHRONOLOGIQUES
La phagocytose est le processus cellulaire par lequel un leucocyte phagocytaire (polynucléaire neutrophile ou macrophage) capture, englobe et détruit un micro-organisme ou une particule étrangère.
Elle se déroule en 4 étapes remarquables :
1. Étape 1 : Attraction chimiotactique et Adhésion :
Le phagocyte est attiré vers le foyer infectieux par des substances chimiques émises par les microbes (chimiotactisme). Il adhère ensuite fermement à la membrane du microbe grâce à ses récepteurs de surface.
2. Étape 2 : Ingestion ou Englobement :
Le phagocyte émet des prolongements cytoplasmiques appelés pseudopodes qui enveloppent complètement le micro-organisme. Les pseudopodes fusionnent, enfermant le microbe dans une poche membranaire intracellulaire : le Phagosome (ou vésicule de phagocytose).
3. Étape 3 : Digestion enzymatique :
Des granules cytoplasmiques contenant des enzymes digestives destructrices, les Lysosomes, viennent fusionner avec la membrane du phagosome pour former un Phagolysosome. Les enzymes lytiques découpent et détruisent la bactérie en 15 à 30 minutes.
4. Étape 4 : Rejet des résidus (Exocytose) :
Les débris antigéniques inoffensifs issus de la digestion sont expulsés hors du phagocyte par exocytose dans le milieu interstitiel.

IV. L’ISSUE DE LA PHAGOCYTOSE
- Cas favorable : tous les microbes sont détruits et éliminés. La réaction inflammatoire régresse et les tissus cicatrisent.
- Cas défavorable : certains microbes très virulents (ex : bactéries à capsules protectrices comme le pneumocoque) résistent aux enzymes digestives ou sécrètent des toxines qui tuent le phagocyte. L’accumulation de phagocytes morts, de débris cellulaires et de bactéries forme le Pus. L’infection risque alors de s’étendre : l’organisme doit alors mobiliser sa deuxième ligne de défense, l’immunité acquise spécifique.`,
  sections: [
    {
      title: 'I. La Réaction Inflammatoire Aiguë et ses Quatre Signes Cardinaux',
      content: [
        'La lésion cutanée déclenche immédiatement l’afflux sanguin et l’œdème sous l’action de l’histamine.',
        'Rougeur, chaleur, gonflement et douleur sont les manifestations cliniques universelles de la réponse innée.'
      ],
      table: {
        headers: ['Signe cardinal de l’inflammation', 'Cause physiologique immédiate', 'Bénéfice biologique pour l’organisme'],
        rows: [
          ['Rougeur (Rubor)', 'Vasodilatation des capillaires sanguins', 'Augmentation du débit sanguin et arrivée massive de leucocytes'],
          ['Chaleur (Calor)', 'Afflux de sang chaud central', 'Accélération des réactions enzymatiques de défense et inhibition des germes'],
          ['Gonflement (Tumor / Œdème)', 'Fuite de plasma dans les tissus', 'Dilution des toxines microbiennes et passage des anticorps'],
          ['Douleur (Dolor)', 'Stimulation des fibres nerveuses nociceptives', 'Alerte du cerveau pour protéger et immobiliser la zone blessée']
        ]
      }
    },
    {
      title: 'II. Mécanisme de la Phagocytose en 4 Étapes',
      content: [
        'La diapédèse permet aux globules blancs de quitter les vaisseaux sanguins pour rejoindre le foyer infectieux.',
        'La phagocytose se réalise en 4 étapes successives : Adhésion, Ingestion, Digestion enzymatique et Rejet des déchets.'
      ],
      image: {
        url: SVG_SVT_3EME_PHAGOCYTOSE,
        alt: 'Schéma des 4 étapes chronologiques de la phagocytose par un leucocyte',
        caption: 'Figure 10.1 : Les étapes de la phagocytose : adhésion du germe, formation du phagosome, digestion lysosomiale et rejet par exocytose.'
      }
    }
  ],
  diagram: {
    title: 'L’Immunité Naturelle Non Spécifique',
    root: 'IMMUNITÉ INNÉE',
    branches: [
      {
        name: 'Réaction Inflammatoire',
        subtitle: 'Signes cardinaux',
        items: ['Vasodilatation (rougeur + chaleur)', 'Œdème par fuite de plasma', 'Douleur (stimulation nerveuse)', 'Diapédèse des leucocytes']
      },
      {
        name: 'Phagocytose (4 étapes)',
        subtitle: 'Destruction microbienne',
        items: ['1. Adhésion membranaire', '2. Ingestion (phagosome)', '3. Digestion (lysosomes)', '4. Rejet des résidus (exocytose)']
      }
    ]
  },
  conclusion: "L’immunité naturelle non spécifique est la première ligne de défense rapide et indispensable. Si elle est débordée, elle sert de pont indispensable pour activer l’immunité acquise hautement spécifique."
};

export const LESSON_11_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-11',
  number: 'Leçon 11',
  title: 'L’IMMUNITÉ ACQUISE OU SPÉCIFIQUE',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Lorsque l’immunité innée et la phagocytose ne suffisent pas à enrayer une infection, l’organisme met en œuvre une réponse hautement perfectionnée : l’immunité acquise (ou spécifique). Cette forme de défense présente trois caractéristiques majeures : la spécificité (elle ne cible qu’un seul antigène précis), la mémoire immunitaire (la réponse est plus rapide et plus intense lors d’un second contact) et la diversité. Elle s’organise en deux branches complémentaires : la réponse humorale médiée par les anticorps et la réponse cellulaire médiée par les lymphocytes T cytotoxiques.",
  fullText: `L’immunité spécifique repose sur la reconnaissance précise d’antigènes par les lymphocytes.

I. LES NOTIONS D’ANTIGÈNE ET D’ANTICORPS
- L’Antigène (Ag) : toute molécule étrangère à l’organisme (protéine, glucide de paroi microbienne, toxine) capable de déclencher une réaction immunitaire spécifique.
- L’Anticorps (Ac ou Immunoglobuline) : protéine en forme de Y synthétisée par les plasmocytes, présente dans le sang et la lymphe (humeurs). Chaque anticorps possède une partie constante (région Fc) et deux sites de fixation variables (régions Fab) dont la conformation spatiale s’adapte de manière complémentaire, comme une clé dans une serrure, à un épitope précis de l’antigène.

II. L’IMMUNITÉ À MÉDIATION HUMORALE (RÉPONSE PAR ANTICORPS)
Cette voie est dirigée contre les toxines et les microbes extracellulaires circulant dans les liquides de l’organisme.
1. Reconnaissance et sélection clonale :
Chaque Lymphocyte B (LB) porte à sa surface des anticorps membranaires identiques. Seuls les clones de LB dont les récepteurs reconnaissent l’antigène étranger sont sélectionnés.
2. Prolifération et différenciation :
Activés (avec l’aide indispensable des lymphocytes T4 auxiliaires sécréteurs d’interleukines), les LB sélectionnés se multiplient intensément par mitoses successives. Ils se différencient ensuite en deux populations :
- Les Plasmocytes : cellules effectrices volumineuses au réticulum endoplasmique surdéveloppé, de durée de vie courte, produisant jusqu’à 2 000 anticorps solubles par seconde.
- Les Lymphocytes B Mémoires : cellules à longue durée de vie qui restent en réserve dans les organes lymphoïdes (ganglions, rate).
3. Neutralisation par le Complexe Immun :
Les anticorps solubles circulants se lient spécifiquement aux antigènes pour former un réseau insoluble : le Complexe Immun (ou réaction d’agglutination / précipitation).
Effets du complexe immun :
- Neutralisation immédiate de l’infectiosité du microbe ou de la toxicité du poison.
- Opsonisation : facilite et décuple la phagocytose par les macrophages qui possèdent des récepteurs pour la partie constante des anticorps.

III. L’IMMUNITÉ À MÉDIATION CELLULAIRE (RÉPONSE CYTOTOXIQUE)
Cette voie est indispensable pour éliminer les agents pathogènes intracellulaires (virus cachés dans les cellules de l’hôte, bactéries intracellulaires comme le Bacille de Koch) et les cellules cancéreuses.
1. Les acteurs : les Lymphocytes T8 :
Les LT8 possèdent des récepteurs T (TCR) capables de reconnaître un antigène viral présenté à la surface d’une cellule anormale par les molécules du Complexe Majeur d’Histocompatibilité (CMH).
2. Différenciation en Lymphocytes T Cytotoxiques (LTc) :
Après activation et prolifération clonale, les LT8 deviennent des Lymphocytes T Cytotoxiques (LTc ou cellules tueuses).
3. Le baiser de la mort cellulaire :
Le LTc s’accole étroitement à la cellule cible infectée et libère des protéines destructrices :
- La Perforine : s’insère dans la membrane de la cellule cible et forme des canaux perméables géants.
- Les Granzymes : enzymes qui pénètrent par ces canaux et déclenchent le suicide programmé (apoptose) ou l’éclatement osmotique de la cellule infectée, détruisant le virus caché.

IV. LA MÉMOIRE IMMUNITAIRE
Lors d’un premier contact avec un antigène (réponse primaire), la production d’anticorps est lente (délai de 5 à 7 jours) et d’intensité modérée.
Lors d’un deuxième contact avec le même antigène (réponse secondaire), les lymphocytes mémoires (LB et LT) réagissent presque instantanément : la production d’anticorps est quasi immédiate, massive et durable. C’est le fondement scientifique de la vaccination.`,
  sections: [
    {
      title: 'I. Antigènes, Anticorps et Notion de Spécificité',
      content: [
        'L’antigène est le marqueur étranger déclencheur ; l’anticorps est l’arme moléculaire sur mesure produite en réponse.',
        'La complémentarité stérique entre le site anticorps et l’épitope antigénique garantit la neutralisation exclusive du microbe ciblé.'
      ]
    },
    {
      title: 'II. Les Deux Voies de l’Immunité Adaptative : Humorale et Cellulaire',
      content: [
        'La voie humorale mobilise les Lymphocytes B transformés en plasmocytes pour inonder le sang d’anticorps.',
        'La voie cellulaire mobilise les Lymphocytes T8 devenus cytotoxiques (LTc) pour perforer et lyser les cellules infectées par des virus.'
      ],
      table: {
        headers: ['Voie immunitaire', 'Cellules clés', 'Médiateurs / Armes', 'Cibles principales', 'Mode d’action'],
        rows: [
          ['Médiation Humorale', 'Lymphocytes B -> Plasmocytes', 'Anticorps solubles circulants (Ig)', 'Bactéries extracellulaires, toxines', 'Formation de complexes immuns et neutralisation'],
          ['Médiation Cellulaire', 'Lymphocytes T8 -> LT cytotoxiques', 'Perforine et granzymes', 'Cellules infectées par des virus, cellules cancéreuses', 'Lyse cellulaire directe par perforation membranaire'],
          ['Régulation centrale', 'Lymphocytes T4 auxiliaires', 'Interleukines (cytokines)', 'Ensemble du système immunitaire', 'Chef d’orchestre stimulant LB et LT8']
        ]
      }
    },
    {
      title: 'III. La Mémoire Immunologique et la Réponse Secondaire',
      content: [
        'La réponse primaire produit des clones mémoires à longue durée de vie.',
        'La réponse secondaire est foudroyante et protège l’individu contre les réinfections.'
      ]
    }
  ],
  diagram: {
    title: 'L’Immunité Acquise Spécifique',
    root: 'IMMUNITÉ SPÉCIFIQUE',
    branches: [
      {
        name: 'Voie Humorale (LB)',
        subtitle: 'Liquides & humeurs',
        items: ['Lymphocytes B sélectionnés', 'Différenciation en Plasmocytes', 'Sécrétion massive d’anticorps', 'Complexes immuns neutralisants']
      },
      {
        name: 'Voie Cellulaire (LT)',
        subtitle: 'Cellules anormales',
        items: ['Lymphocytes T8 & T4 auxiliaires', 'Différenciation en LTc cytotoxiques', 'Sécrétion de perforine (lyse de la cible)', 'Lymphocytes B et T Mémoires']
      }
    ]
  },
  conclusion: "L’immunité acquise dote l’organisme d’un système de défense adaptatif et mémorisable d’une extraordinaire précision, capable de neutraliser toxines et cellules parasitées tout en préservant l’intégrité du soi."
};

export const LESSON_12_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-12',
  number: 'Leçon 12',
  title: 'LES DYSFONCTIONNEMENTS DU SYSTÈME IMMUNITAIRE : LES ALLERGIES',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Normalement conçu pour protéger l’organisme contre les agents pathogènes dangereux, le système immunitaire peut parfois commettre des erreurs de jugement et réagir de façon disproportionnée et violente contre des substances étrangères inoffensives de notre environnement quotidien (pollens, poussières, aliments, venins d’insectes). Cette hypersensibilité immunitaire anormale définit l’Allergie. L’allergie la plus fréquente est l’hypersensibilité immédiate médiée par des anticorps particuliers : les Immunoglobulines E (IgE).",
  fullText: `L’allergie est une pathologie immunitaire en constante augmentation dans le monde moderne.

I. LES ALLERGÈNES ET LEURS VOIES DE PÉNÉTRATION
Un allergène est un antigène environnemental inoffensif pour un sujet normal, mais capable de provoquer une réaction allergique chez un individu prédisposé (sujet atopique).
Principaux allergènes :
- Les Pneumallergènes (inhalés) : grains de pollen (arbres, graminées), acariens logés dans les matelas et tapis, poils et squames de chat ou de chien, moisissures.
- Les Trophallergènes (ingérés) : arachides, lait de vache, œufs, poissons, fruits de mer, blé.
- Les Allergènes de contact : nickel des bijoux fantaisie, latex des gants, cosmétiques, colorants textiles.
- Les Allergènes injectés : venins d’abeilles ou de guêpes, médicaments injectables (pénicilline, anesthésiques).

II. LE MÉCANISME DE L’HYPERSENSIBILITÉ IMMÉDIATE EN DEUX PHASES
La réaction allergique ne survient jamais lors du tout premier contact avec l’allergène. Elle nécessite deux étapes successives obligatoires :
1. La Phase de Sensibilisation (Premier contact silencieux) :
- L’allergène pénètre dans l’organisme pour la première fois.
- Les lymphocytes B stimulés produisent de façon anormale des anticorps de classe IgE (au lieu d’IgG ou d’IgM).
- Ces IgE se fixent par leur partie constante sur des récepteurs situés à la membrane de cellules immunitaires riches en granules : les Mastocytes tissulaires et les Granulocytes basophiles.
- À ce stade, le sujet ne ressent absolument aucun symptôme : il est devenu sensibilisé.

2. La Phase de Déclenchement (Contacts ultérieurs) :
- Lors d’une nouvelle exposition au même allergène, les molécules d’allergène viennent se fixer directement sur les IgE déjà attachées aux mastocytes.
- Ce pontage entre deux IgE adjacentes provoque l’activation brutale du mastocyte et sa dégranulation explosive : une libération massive de médiateurs chimiques préformés, principalement l’Histamine.
- L’histamine entraîne en quelques secondes à minutes : une dilatation intense des vaisseaux sanguins, une fuite de liquide (œdème) et une contraction spasmodique des muscles lisses des bronches.

III. LES MANIFESTATIONS CLINIQUES DE L’ALLERGIE
Selon l’organe touché :
- Rhinite allergique (rhume des foins) : éternuements en salves, nez bouché, écoulement nasal limpide, démangeaisons oculaires.
- Asthme bronchique : crise de suffocation avec sifflements respiratoires expiratoires due au rétrécissement des bronchioles.
- Urticaire : plaques rouges cutanées gonflées et très prurigineuses (qui démangent).
- Œdème de Quincke : gonflement brutal du visage, des lèvres et surtout de la gorge (larynx) pouvant entraîner une asphyxie mortelle en l’absence de soins immédiats.
- Le Choc Anaphylactique : forme la plus gravissime de l’allergie. Vasodilatation généralisée provoquant une chute brutale et mortelle de la pression artérielle (collapsus cardiovasculaire) avec détresse respiratoire. Il s’agit d’une urgence médicale absolue nécessitant une injection sous-cutanée immédiate d’adrénaline.

IV. DIAGNOSTIC ET TRAITEMENT DES ALLERGIES
- Diagnostic : tests cutanés (prick-tests) consistant à déposer des gouttes d’allergènes purifiés sur l’avant-bras et à piquer légèrement l’épiderme pour observer l’apparition d’une rougeur et d’une papule en 15 minutes.
- Traitements symptomatiques : médicaments antihistaminiques bloquant l’action de l’histamine, corticoïdes anti-inflammatoires, bronchodilatateurs dans l’asthme.
- Traitement de fond : la désensibilisation (ou immunothérapie allergénique) consistant à administrer des doses croissantes et régulières de l’allergène pendant 3 à 5 ans pour rééduquer le système immunitaire vers la production d’IgG bloquantes.`,
  sections: [
    {
      title: 'I. Définition de l’Allergie et Diversité des Allergènes',
      content: [
        'L’allergie est une hyper-réactivité immunitaire néfaste face à des molécules anodines de l’environnement.',
        'Les pollens, acariens, aliments et piqûres d’hyménoptères constituent les allergènes majeurs.'
      ]
    },
    {
      title: 'II. Les Deux Temps de l’Hypersensibilité Immédiate',
      content: [
        'Premier temps : la phase de sensibilisation avec production d’IgE et fixation sur les mastocytes (sans symptômes).',
        'Deuxième temps : la phase de déclenchement avec pontage des IgE, libération massive d’histamine et symptômes aigus.'
      ],
      table: {
        headers: ['Phase de la réaction', 'Événements biologiques', 'Présence de symptômes cliniques', 'Traitement recommandé'],
        rows: [
          ['1. Sensibilisation', 'Production d’IgE par les plasmocytes et fixation aux mastocytes', 'Absence totale de symptômes (silencieux)', 'Éviction préventive de l’allergène'],
          ['2. Déclenchement local', 'Pontage des IgE par l’allergène et libération d’histamine', 'Rhinite, conjonctivite, crise d’asthme, urticaire', 'Antihistaminiques, corticoïdes, bronchodilatateurs'],
          ['3. Urgence vitale', 'Dégranulation systémique foudroyante dans tout le corps', 'Œdème de Quincke laryngé, choc anaphylactique', 'Injection immédiate d’Adrénaline en urgence vitale']
        ]
      }
    },
    {
      title: 'III. Diagnostic et Prise en Charge Médicale',
      content: [
        'Les prick-tests cutanés permettent d’identifier l’allergène incriminé.',
        'La désensibilisation progressive permet une guérison durable en reprogrammant le système immunitaire.'
      ]
    }
  ],
  diagram: {
    title: 'Mécanisme de l’Allergie Immédiate',
    root: 'RÉACTION ALLERGIQUE',
    branches: [
      {
        name: 'Phase 1 : Sensibilisation',
        subtitle: '1er contact silencieux',
        items: ['Entrée de l’allergène anodin', 'Sécrétion anormale d’anticorps IgE', 'Fixation des IgE sur les mastocytes', 'Aucun symptôme clinique visible']
      },
      {
        name: 'Phase 2 : Déclenchement',
        subtitle: 'Contacts ultérieurs',
        items: ['Pontage des IgE par l’allergène', 'Dégranulation explosive d’histamine', 'Vasodilatation & spasme bronchique', 'Rhinite, asthme, choc anaphylactique']
      }
    ]
  },
  conclusion: "L’allergie est le résultat d’un emballement pathologique du système immunitaire. L’identification rigoureuse des allergènes et l’éviction préventive constituent avec l’adrénaline d’urgence les piliers de la sécurité des personnes allergiques."
};

export const LESSON_13_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-13',
  number: 'Leçon 13',
  title: 'LES AGRESSIONS CONTRE LE SYSTÈME IMMUNITAIRE : LE VIH ET LE SIDA',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Alors que le système immunitaire a pour mission fondamentale d’éliminer les microbes agresseurs, certains virus ont développé une stratégie machiavélique consistant à s’attaquer directement aux cellules chefs d’orchestre de l’immunité. C’est le cas du VIH (Virus de l’Immunodéficience Humaine), agent responsable du SIDA (Syndrome d’Immuno-Déficience Acquise). En détruisant progressivement les lymphocytes T4, le VIH laisse l’organisme sans défense face à des infections dites opportunistes qui finissent par entraîner le décès.",
  fullText: `Le SIDA est l’une des pandémies majeures de l’histoire contemporaine, particulièrement présente en Afrique subsaharienne.

I. STRUCTURE DU VIRUS DU SIDA (VIH)
Le VIH est un rétrovirus sphérique enveloppé d’environ 100 nanomètres. Sa structure comprend :
- Une enveloppe lipidique dérivée de la cellule hôte, hérissée de glycoprotéines de surface, notamment la gp120 et la gp41.
- Une capside protéique conique centrale renfermant le matériel génétique : deux molécules identiques d’ARN viral monocaténaire.
- Des enzymes virales indispensables : la Transcriptase inverse (qui convertit l’ARN viral en ADN proviral), l’Intégrase et la Protéase.

II. LE CYCLE DE MULTIPLICATION DU VIH ET LA DESTRUCTION DES LT4
La cible privilégiée du VIH est le Lymphocyte T4 (ou CD4), car la glycoprotéine virale gp120 possède une affinité d’attachement spécifique pour la protéine membranaire CD4 portée par les LT4.
Étapes du cycle viral :
1. Fixation de la gp120 sur le récepteur CD4 et les corécepteurs (CCR5/CXCR4) de la membrane du LT4.
2. Fusion de l’enveloppe virale et pénétration de la capside dans le cytoplasme.
3. Rétrotranscription : la transcriptase inverse copie l’ARN viral en une molécule d’ADN double brin (ADN proviral).
4. Intégration : l’intégrase insère l’ADN proviral dans le génome (les chromosomes) de la cellule hôte. Le virus peut y rester dormant des années.
5. Transcription et Traduction : lors de l’activation du LT4, la machinerie cellulaire fabrique de nombreux ARN et protéines virales.
6. Assemblage et Bourgeonnement : les nouveaux virions s’assemblent et bourgeonnent à la membrane en emportant un fragment de celle-ci, ce qui finit par détruire (lyser) le lymphocyte T4.

III. LES PHASES D’ÉVOLUTION DE L’INFECTION PAR LE VIH
Sans traitement, la maladie évolue en trois phases successives :
1. La Primo-infection (quelques semaines après contamination) :
Multiplication virale intense avec pic de charge virale. Symptômes pseudogrippaux bénins (fièvre, fatigue, courbatures, ganglions gonflés). Le système immunitaire réagit en produisant des anticorps anti-VIH : la personne devient séropositive pour le VIH (dépistable par test ELISA ou test rapide après une fenêtre sérologique de 2 à 4 semaines).
2. La Phase Asymptomatique (latence clinique de 5 à 10 ans) :
Le sujet ne ressent aucun symptôme et paraît en parfaite santé, mais le virus continue de se multiplier silencieusement dans les ganglions et le nombre de LT4 diminue lentement mais inexorablement. Le sujet séropositif est hautement contagieux !
3. La Phase SIDA Déclaré :
Le taux de LT4 s’effondre en dessous d’un seuil critique (moins de 200 LT4 par microlitre de sang, alors que la normale est de 800 à 1 200/µL). Le système immunitaire est paralysé. Des microbes habituellement inoffensifs déclenchent des Maladies Opportunistes mortelles : tuberculose pulmonaire grave, candidose buccale et œsophagienne, toxoplasmose cérébrale, pneumonie à Pneumocystis jirovecii, sarcome de Kaposi (cancer vasculaire de la peau).

IV. MODES DE TRANSMISSION ET MOYENS DE PRÉVENTION
1. Les trois voies de transmission :
- Voie sexuelle (plus de 85 % des cas) : rapports vaginaux, anaux ou buccaux non protégés avec une personne séropositive.
- Voie sanguine : seringues et aiguilles contaminées partagées, transfusion de sang non contrôlé, tatouages ou scarifications avec matériel non stérilisé.
- Voie materno-fœtale (transmission mère-enfant) : pendant la grossesse à travers le placenta, lors de l’accouchement par contact sanguin, ou lors de l’allaitement maternel.
Attention : Le VIH ne se transmet JAMAIS par la salive, les larmes, les piqûres de moustiques, la sueur, les poignées de main, les étreintes ou le partage des repas !

2. Traitement et Prévention :
- Il n’existe à ce jour aucun vaccin curatif ou préventif contre le VIH.
- Les Traitements Antirétroviraux (ARV ou Trithérapie) : bloquent la réplication virale en ciblant les enzymes virales. Ils réduisent la charge virale dans le sang jusqu’à un niveau indétectable (charge virale indétectable = virus intransmissible : concept U=U / I=I). Ils permettent aux personnes séropositives de vivre longtemps et en bonne santé.
- Prévention : fidélité réciproque entre partenaires non infectés, utilisation systématique et correcte du préservatif masculin ou féminin lors de tout rapport sexuel à risque, dépistage régulier et gratuit, stérilisation des instruments médicaux.`,
  sections: [
    {
      title: 'I. Le VIH : Structure et Tropisme envers les LT4',
      content: [
        'Le VIH est un rétrovirus à ARN qui cible exclusivement les Lymphocytes T4 auxiliaires portant le récepteur CD4.',
        'La destruction des LT4 paralyse l’ensemble de l’immunité humorale et cellulaire, car ces cellules sont les chefs d’orchestre de la coordination immunitaire.'
      ],
      table: {
        headers: ['Composant du VIH', 'Nature biochimique', 'Rôle dans l’infection de la cellule hôte'],
        rows: [
          ['Glycoprotéine gp120', 'Protéine d’enveloppe', 'Fixation spécifique sur le récepteur CD4 du lymphocyte T4'],
          ['Transcriptase inverse', 'Enzyme virale', 'Rétrotranscription de l’ARN viral en ADN proviral double brin'],
          ['Intégrase', 'Enzyme virale', 'Insertion de l’ADN viral dans les chromosomes de la cellule humaine'],
          ['ARN viral', 'Acide nucléique génomique', 'Contient les gènes nécessaires à la fabrication des futurs virions']
        ]
      }
    },
    {
      title: 'II. Les Trois Phases Cliniques et l’Effondrement des LT4',
      content: [
        'La primo-infection est suivie d’une longue phase asymptomatique silencieuse et trompeuse.',
        'Le passage au stade SIDA déclaré est marqué par la chute des LT4 en dessous de 200/mm³ et l’apparition de maladies opportunistes gravissimes.'
      ]
    },
    {
      title: 'III. Modes de Transmission et Stratégies de Lutte au Sénégal',
      content: [
        'Le VIH se transmet par voie sexuelle, sanguine et de la mère à l’enfant.',
        'Le Sénégal est pionnier en Afrique dans la lutte contre le SIDA grâce à un dépistage précoce, la prévention de la transmission mère-enfant (PTME) et la gratuité des antirétroviraux (ARV).'
      ]
    }
  ],
  diagram: {
    title: 'Cycle et Évolution du VIH/SIDA',
    root: 'VIH & SIDA',
    branches: [
      {
        name: 'Cibles & Réplication',
        subtitle: 'Détournement cellulaire',
        items: ['Fixation gp120 sur récepteur CD4', 'Rétrotranscription ARN en ADN proviral', 'Intégration dans le génome', 'Destruction progressive des LT4']
      },
      {
        name: 'Phases & Prévention',
        subtitle: 'Évolution clinique',
        items: ['Primo-infection & Séropositivité', 'Phase asymptomatique (5-10 ans)', 'SIDA déclaré & maladies opportunistes', 'Préservatifs, trithérapie ARV (U=U)']
      }
    ]
  },
  conclusion: "Le VIH détruit les défenses immunitaires de l’intérieur en anéantissant les lymphocytes T4. La connaissance des modes réels de transmission, le port du préservatif et le dépistage volontaire sont les piliers pour briser la chaîne de contamination."
};

export const LESSON_14_SVT_3EME: LessonContent = {
  id: 'svt-3eme-lecon-14',
  number: 'Leçon 14',
  title: 'LES AIDES À L’IMMUNITÉ',
  subject: 'SVT',
  classLevel: '3ème',
  introduction: "Face à des infections bactériennes ou virales fulgurantes qui risquent de submerger les défenses naturelles avant que l’organisme n’ait eu le temps de fabriquer ses propres anticorps, la médecine a mis au point des interventions thérapeutiques et préventives décisives : la vaccination, la sérothérapie et l’antibiothérapie. Ces découvertes fondamentales ont révolutionné la santé publique mondiale et sauvé des centaines de millions de vies humaines.",
  fullText: `Les aides à l’immunité permettent de prévenir ou de guérir les maladies infectieuses.

I. LA VACCINATION : UNE IMMUNISATION ACTIVE ET PRÉVENTIVE
1. Origine historique :
Découverte en 1796 par le médecin anglais Edward Jenner (qui utilise la vaccine de la vache pour immuniser contre la variole) et théorisée en 1880 par Louis Pasteur (mise au point des vaccins contre le choléra des poules, le charbon et la rage).
2. Principe biologique :
La vaccination consiste à injecter dans l’organisme un antigène pathogène rendu inoffensif (bactérie ou virus tué, virus atténué, anatoxine purifiée ou fragment d’antigène recombinant), tout en conservant son pouvoir immunogène (capacité à déclencher une réaction immunitaire).
L’organisme réagit comme face au vrai microbe :
- Il produit des anticorps et des lymphocytes spécifiques.
- Surtout, il fabrique des lymphocytes B et T mémoires à longue durée de vie.
3. Les rappels vaccinaux :
La quantité d’anticorps et de cellules mémoires diminue avec le temps. Les injections de rappel stimulent à nouveau la mémoire immunitaire et relancent une production massive et durable d’anticorps.
Caractéristiques de la vaccination :
- Immunité active : l’organisme fabrique lui-même ses propres défenses.
- Action préventive : elle doit être réalisée avant tout contact avec le microbe virulent.
- Effet lent à s’établir (délai de 1 à 3 semaines).
- Protection durable (plusieurs années ou décennies grâce à la mémoire).

II. LA SÉROTHÉRAPIE : UNE IMMUNISATION PASSIVE ET CURATIVE
1. Principe biologique :
Découverte par Emil von Behring et Shibasaburo Kitasato en 1890, la sérothérapie consiste à injecter directement dans le sang d’un patient malade un sérum contenant des anticorps spécifiques déjà formés, prélevés sur un animal immunisé ou un donneur humain guéri.
Exemple d’urgence vitale : injection de sérum antitétanique chez une personne non vaccinée présentant une plaie souillée de terre.
2. Caractéristiques de la sérothérapie :
- Immunité passive : l’organisme reçoit des anticorps extérieurs sans faire aucun effort de fabrication.
- Action curative immédiate : les anticorps injectés neutralisent instantanément les toxines ou les microbes.
- Protection temporaire et éphémère : les anticorps exogènes sont progressivement éliminés par l’organisme en 2 à 3 semaines.
- Aucune mémoire immunitaire n’est développée.

III. LES MÉDICAMENTS ANTIMICROBIENS : LES ANTIBIOTIQUES
1. Découverte d’Alexander Fleming (1928) :
Fleming découvre que la moisissure Penicillium notatum sécrète une substance capable d’inhiber la croissance des bactéries staphylocoques : la Pénicilline.
2. Définition et mode d’action :
Un antibiotique est une substance chimique naturelle ou synthétique capable de détruire spécifiquement les bactéries (effet bactéricide) ou de bloquer leur multiplication (effet bactériostatique), sans endommager les cellules de l’organisme humain.
Attention majeure : Les antibiotiques sont strictement inefficaces contre les virus (grippe, rhume, VIH, hépatite) !
3. L’Antibiogramme :
Examen de laboratoire consistant à tester la sensibilité d’une souche bactérienne isolée chez un malade vis-à-vis de plusieurs disques d’antibiotiques différents placés sur une boîte de culture. L’apparition d’une zone claire d’inhibition autour du disque montre l’efficacité de l’antibiotique.
4. Le péril de l’antibiorésistance :
L’usage abusif ou inachevé d’antibiotiques sélectionne des souches bactériennes mutantes devenues résistantes (bactéries multirésistantes ou superbactéries), rendant certaines infections incurables.
Règle d’or : Respecter scrupuleusement les doses et la durée prescrite par le médecin, et ne jamais pratiquer l’automédication antibiotique.`,
  sections: [
    {
      title: 'I. Comparaison Fondamentale : Vaccination vs Sérothérapie',
      content: [
        'Le vaccin immunise activement et durablement en stimulant la mémoire immunitaire avant la maladie.',
        'Le sérum guérit immédiatement en injectant des anticorps tout prêts lors d’une urgence vitale mais sans effet mémoire.'
      ],
      table: {
        headers: ['Critère de comparaison', 'La Vaccination (Vaccin)', 'La Sérothérapie (Sérum)'],
        rows: [
          ['Substance injectée', 'Antigène inoffensif (microbe atténué, anatoxine)', 'Anticorps spécifiques déjà formés (immunoglobulines)'],
          ['Origine des anticorps', 'Produits par l’organisme du sujet vacciné', 'Fournis de l’extérieur (organisme donneur ou animal)'],
          ['Nature de l’immunité', 'Active (travail de l’organisme)', 'Passive (aucun travail cellulaire)'],
          ['Délai d’action', 'Lente (1 à 3 semaines pour être efficace)', 'Immédiate (dès l’injection intraveineuse/musculaire)'],
          ['Durée de protection', 'Durable (plusieurs années grâce aux rappels)', 'Temporaire et courte (2 à 3 semaines)'],
          ['But médical principal', 'Préventif (appliqué sur un sujet sain)', 'Curatif (appliqué sur un sujet malade en urgence)']
        ]
      }
    },
    {
      title: 'II. Les Antibiotiques et l’Antibiogramme',
      content: [
        'Les antibiotiques ciblent exclusivement les structures des bactéries (paroi, ribosomes bactériens).',
        'L’antibiogramme permet au biologiste de mesurer les diamètres d’inhibition pour choisir l’antibiotique le plus efficace.',
        'La surconsommation d’antibiotiques favorise l’émergence de souches multirésistantes.'
      ]
    }
  ],
  diagram: {
    title: 'Aides Médicales à l’Immunité',
    root: 'AIDES À L’IMMUNITÉ',
    branches: [
      {
        name: 'Vaccin (Prévention)',
        subtitle: 'Immunité active',
        items: ['Antigènes inoffensifs injectés', 'Formation de lymphocytes mémoires', 'Action lente mais durable', 'Rappels réguliers indispensables']
      },
      {
        name: 'Sérum & Antibiotiques',
        subtitle: 'Traitements curatifs',
        items: ['Sérum : anticorps immédiats d’urgence', 'Protection passive temporaire', 'Antibiotiques : ciblent les bactéries (inutiles sur virus)', 'Antibiogramme & lutte contre la résistance']
      }
    ]
  },
  conclusion: "Vaccins, sérums et antibiotiques constituent la panoplie thérapeutique maîtresse de la médecine moderne. Leur usage éclairé et rationnel conditionne l’éradication des épidémies et la sécurité sanitaire des populations."
};
