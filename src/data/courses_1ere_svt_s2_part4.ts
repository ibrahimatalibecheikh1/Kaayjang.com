import { LessonContent } from './courses';
import {
  SVG_SVT_1ERE_GEOLOGIE_SENEGAL,
  SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ
} from './diagrams_1ere_svt';

// =========================================================================
// SVT PREMIÈRE S2 — PARTIE 4 : PHYSIOLOGIE FÉMININE ET GÉOLOGIE DU SÉNÉGAL (LEÇONS 22 À 28)
// Programme officiel conforme au Ministère de l'Éducation Nationale du Sénégal
// =========================================================================

export const LESSON_22_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-22',
  number: '22',
  title: 'LEÇON 22 : RÉGULATION NEURO-HORMONALE DU CYCLE FÉMININ ET RÉTROCONTRÔLES',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 4 : Reproduction et physiologie génitale',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Contrôle hypothalamo-hypophysaire du cycle ovarien. La bascule du rétrocontrôle négatif vers le rétrocontrôle positif (RC+) déclenchant le pic ovulatoire de LH, et le RC- lutéal.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Courbes Hormonales Synchronisées et Mécanismes de Rétrocontrôle (RC- et RC+)',
    svgContent: SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ
  },
  diagram: {
    title: 'Boucle de Rétrocontrôle Hormonal Féminin',
    svgContent: SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ
  },
  introduction: 'La régulation hormonale chez la femme présente une complexité bien supérieure à celle de l\'homme. Si la sécrétion de testostérone chez l\'homme est soumise à un rétrocontrôle négatif constant et invariable, les hormones ovariennes exercent sur l\'axe hypothalamo-hypophysaire des actions modulées dans le temps, alternant de façon spectaculaire entre inhibition (rétrocontrôle négatif) et stimulation explosive (rétrocontrôle positif). Ce basculement rétro-actif est la clé de voûte physiologique qui déclenche le pic de LH indispensable à l\'ovulation. Cette leçon analyse les mécanismes de rétrocontrôle au cours des différentes phases du cycle et explique le mode d\'action des contraceptifs hormonaux.',
  conclusion: 'En conclusion, la dynamique hormonale féminine repose sur la capacité remarquable de l\'axe hypothalamo-hypophysaire à décoder non seulement la présence des hormones ovariennes, mais aussi leur dose et la durée de leur élévation. Les pilules combinées oestroprogestatives exploitent précisément cette physiologie : en maintenant des doses stables et modérées d\'hormones dans le sang, elles bloquent en permanence la sécrétion de FSH et de LH par rétrocontrôle négatif constant, supprimant tout pic ovulatoire et toute maturation folliculaire.',
  sections: [
    {
      title: 'I. LE RÉTROCONTRÔLE NÉGATIF EN DÉBUT DE PHASE FOLLICULAIRE (J1 À J10)',
      content: [
        '• En début de cycle (J1 à J5), les taux sanguins d\'œstrogènes sont très bas par suite de la régression du corps jaune précédent.',
        '• Cette baisse lève l\'inhibition sur le complexe hypothalamo-hypophysaire : l\'hypophyse sécrète une dose modérée de FSH qui recrute une cohorte de follicules tertiaires.',
        '• Au fur et à mesure que les follicules grossissent, ils sécrètent des œstrogènes à dose modérée (inférieure à 100 pg/mL).',
        '• Rétrocontrôle négatif (RC-) : cette concentration modérée d\'œstrogènes freine la libération de GnRH et de gonadostimulines hypophysaires (surtout FSH). Cette baisse de FSH prive les follicules secondaires de support trophique ; seul le follicule le plus riche en récepteurs à la FSH (le follicule dominant de De Graaf) survit, les autres dégénérant par atrésie.'
      ]
    },
    {
      title: 'II. LA BASCULE VERS LE RÉTROCONTRÔLE POSITIF (J12 À J14) ET LE PIC OVULATOIRE',
      content: [
        '1. La condition de bascule (Le seuil d\'œstradiol) :',
        'À l\'approche de la maturité folliculaire, le volumineux follicule de De Graaf sécrète des quantités massives d\'œstradiol. Lorsque la concentration plasmatique dépasse un seuil critique d\'environ 200 pg/mL et se maintient au-dessus de ce niveau pendant au moins 36 à 48 heures, il se produit une inversion radicale du signal biologique au niveau de l\'hypothalamus et de l\'antéhypophyse.',
        '2. Le rétrocontrôle positif (RC+) :',
        'Au lieu d\'inhiber l\'axe gonadotrope, cette forte concentration exerce une stimulation puissante :',
        '• Accélération spectaculaire de la pulsatilité de GnRH hypothalamique.',
        '• Sensibilisation aiguë des récepteurs hypophysaires à la GnRH.',
        '• Déclenchement d\'une décharge sécrétoire massive et brutale de LH (multipliée par 5 à 10) et de FSH : c\'est le pic préovulatoire de gonadostimulines (décharge ovulante).',
        '3. Conséquence : rupture folliculaire et expulsion de l\'ovocyte II environ 36 heures après le début du pic de LH (ovulation au 14e jour).'
      ]
    },
    {
      title: 'III. LE RÉTROCONTRÔLE NÉGATIF EN PHASE LUTÉALE (J15 À J28)',
      content: [
        '• Après l\'ovulation, le corps jaune se met à sécréter simultanément de fortes doses de progestérone et d\'œstrogènes.',
        '• L\'association synergique de progestérone et d\'œstrogènes exerce un rétrocontrôle négatif extrêmement puissant et verrouillé sur l\'hypothalamus et l\'antéhypophyse.',
        '• Les concentrations de FSH et de LH s\'effondrent à des niveaux très bas, bloquant tout nouveau recrutement folliculaire durant cette phase.',
        '• Vers le 24e-26e jour, en l\'absence d\'embryon, la durée de vie programmée du corps jaune s\'achève. Il régresse (lutéolyse), entraînant l\'effondrement hormonal brutal qui provoque les règles et lève l\'inhibition sur la FSH pour amorcer le cycle suivant.'
      ]
    }
  ]
};

export const LESSON_23_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-23',
  number: '23',
  title: 'LEÇON 23 : LA FÉCONDATION ET LES PREMIÈRES ÉTAPES DU DÉVELOPPEMENT EMBRYONNAIRE',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 4 : Reproduction et physiologie génitale',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Pénétration des spermatozoïdes, réaction acrosomique, blocage de la polyspermie et caryogamie dans l\'ampoule tubaire. Segmentation, blastocyste et nidation dans l\'endomètre.',
  introduction: 'La fécondation marque le point de départ biologique d\'un nouvel individu génétiquement unique issu de la reproduction sexuée. Elle consiste en la rencontre et la fusion intime de deux cellules reproductrices hautement différenciées : le spermatozoïde mobile (gamète mâle) et l\'ovocyte II (gamète femelle). Chez l\'espèce humaine, ce phénomène complexe se déroule au tiers externe de la trompe utérine (ampoule tubaire). Il implique la capacitation des spermatozoïdes, la reconnaissance spécifique d\'espèce, la réaction acrosomique et l\'activation ovocytaire empêchant rigoureusement toute polyspermie létale. Cette leçon analyse les étapes cytologiques et moléculaires de la fécondation, la formation de l\'œuf diploïde et les divisions de segmentation jusqu\'à la nidation utérine.',
  conclusion: 'En conclusion, la fécondation rétablit la diploïdie (2n = 46 chromosomes), détermine le sexe génétique du futur enfant (selon que le spermatozoïde fécondant apporte un chromosome X ou Y) et initie le programme génétique du développement embryonnaire. La nidation au 7e jour parachève cette première semaine de vie en ancrant solidement l\'embryon dans l\'endomètre maternel grâce au trophoblaste invasif sécréteur d\'HCG.',
  sections: [
    {
      title: 'I. LE TRAJET DES GAMÈTES ET LA CAPACITATION',
      content: [
        '1. La traversée des voies génitales féminines par les spermatozoïdes :',
        'Lors d\'un rapport sexuel, 200 à 300 millions de spermatozoïdes sont déposés au fond du vagin. Seule une fraction infime (environ 1%) franchit le col de l\'utérus à travers la glaire cervicale (qui n\'est filante, perméable et alcaline qu\'en période préovulatoire sous l\'effet des œstrogènes). Quelques centaines seulement parviennent dans l\'ampoule tubaire.',
        '2. La capacitation des spermatozoïdes :',
        'Pendant leur ascension dans l\'utérus et les trompes, les spermatozoïdes subissent des modifications biochimiques indispensables appelées capacitation : élimination du cholestérol et des glycoprotéines recouvrant leur membrane acrosomique, augmentation de la perméabilité calcique et acquisition d\'un mouvement hyperactif en coup de fouet.'
      ]
    },
    {
      title: 'II. LES ÉTAPES CYTOLOGIQUES ET MOLÉCULAIRES DE LA FÉCONDATION',
      content: [
        '1. La traversée des enveloppes ovocytaires :',
        '• Traversée de la corona radiata : les spermatozoïdes capacitent se frayent un chemin entre les cellules folliculaires grâce à leurs mouvements flagellaires vigoureux.',
        '• La réaction acrosomique : au contact de la zone pellucide, la protéine ZP3 se lie aux récepteurs du spermatozoïde, déclenchant l\'exocytose des enzymes acrosomiques (hyaluronidase, acrosine). Ces enzymes digèrent localement la zone pellucide.',
        '2. La fusion membranaire et l\'activation ovocytaire :',
        'La membrane plasmique d\'un seul spermatozoïde fusionne avec celle de l\'ovocyte II. Cette fusion déclenche une vague calcique intracellulaire dans l\'ovocyte qui active immédiatement deux réponses vitales :',
        '• La réaction corticale (blocage de la polyspermie) : exocytose massive des granules corticaux déversant des enzymes modifiant la zone pellucide (durcissement) et clivant les récepteurs ZP3. La zone pellucide devient totalement imperméable à tout autre spermatozoïde.',
        '• Réveil métabolique et achèvement de la méiose : reprise de la méiose II par l\'ovocyte, expulsion du 2e globule polaire.',
        '3. L\'amphimixie et la caryogamie :',
        'Le noyau du spermatozoïde se décondense pour former le pronucléus mâle, tandis que le noyau ovocytaire constitue le pronucléus femelle. Les deux pronucléi répliquent leur ADN, se rapprochent au centre de la cellule, perdent leur membrane nucléaire et mettent en commun leurs 46 chromosomes sur le premier fuseau mitotique : la caryogamie donne naissance à la cellule-œuf (zygote diploïde).'
      ]
    },
    {
      title: 'III. LA SEGMENTATION, LA MIGRATION TUBAIRE ET LA NIDATION',
      content: [
        '1. La segmentation (Jour 1 à Jour 4) :',
        'Tout en descendant la trompe vers l\'utérus grâce aux battements ciliaires et aux contractions péristaltiques tubaires, la cellule-œuf subit des divisions mitotiques successives sans augmentation de volume global (enfermée dans la zone pellucide) : stade 2 cellules (J1), 4 cellules (J2), 8 cellules (J3), puis morula (16 à 32 blastomères en aspect de mûre au J4).',
        '2. La formation du blastocyste (Jour 5 à Jour 6) :',
        'La morula pénètre dans la cavité utérine. Du liquide s\'infiltre entre les cellules pour former une cavité centrale appelée blastocèle. L\'embryon devient un blastocyste composé de deux tissus distincts :',
        '• Le bouton embryonnaire (masse cellulaire interne) : donnera l\'embryon lui-même.',
        '• Le trophoblaste : couche de cellules aplaties périphériques qui donnera les annexes fœtales et le placenta.',
        '3. L\'éclosion et la nidation (Jour 6 à Jour 7) :',
        'Le blastocyste s\'extirpe de sa zone pellucide par digestion enzymatique (éclosion). Au 7e jour après la fécondation, le trophoblaste s\'accole à l\'endomètre sécrétoire préparé par la progestérone (dentelle utérine). Les cellules trophoblastiques émettent des prolongements invasifs (syncytiotrophoblaste) qui pénètrent profondément dans la muqueuse maternelle et sécrètent une hormone précoce capitale : l\'HCG (Gonadotrophine chorionique humaine), qui maintient le corps jaune actif et empêche le déclenchement des règles.'
      ]
    }
  ]
};

export const LESSON_24_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-24',
  number: '24',
  title: 'LEÇON 24 : LA GESTATION, LES ÉCHANGES PLACENTAIRES ET L\'ACCOUCHEMENT',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 4 : Reproduction et physiologie génitale',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Physiologie de la grossesse, rôle endocrine et d\'échange du placenta, franchissement de la barrière foeto-maternelle. Déterminisme neuro-hormonal du travail et de la délivrance.',
  introduction: 'La gestation (ou grossesse) est la période de neuf mois (environ 38 à 40 semaines d\'aménorrhée) durant laquelle le fœtus se développe dans la cavité utérine maternelle depuis la fécondation jusqu\'à la mise au monde. Cette prouesse physiologique s\'accompagne d\'adaptations majeures de l\'organisme maternel et repose entièrement sur un organe éphémère d\'une prodigieuse complexité : le placenta. À la fois poumon, intestin, rein et glande endocrine pour le fœtus, le placenta assure tous les transferts vitaux sans qu\'il n\'y ait jamais de mélange direct entre le sang de la mère et celui de son enfant. Cette leçon examine la structure et les fonctions du placenta, l\'évolution de la grossesse et les mécanismes neuro-endocriniens déclenchant le travail et l\'accouchement.',
  conclusion: 'En conclusion, la gestation est une cohabitation immunologique et métabolique remarquable entre deux organismes génétiquement différents. Le placenta joue un rôle protecteur primordial tout en synthétisant les hormones indispensables au maintien de l\'état gestatif. Au terme des 9 mois, l\'élévation de l\'œstriol et la chute relative de progestérone sensibilisent le myomètre à l\'ocytocine, déclenchant l\'accouchement par une boucle réflexe positive.',
  sections: [
    {
      title: 'I. STRUCTURE HISTOLOGIQUE ET FONCTIONS DU PLACENTA',
      content: [
        '1. Organisation anatomique du placenta hémochorial humain :',
        'Le placenta est un disque spongieux et charnu de 15 à 20 cm de diamètre pesant environ 500 g à terme. Il est constitué de deux contingents :',
        '• Le versant fœtal : relié au fœtus par le cordon ombilical (comprenant une veine ombilicale riche en oxygène et deux artères ombilicales chargées de déchets fœtaux) et arborisant des villosités choriales arborescentes.',
        '• Le versant maternel : formé de chambres intervilleuses remplies de sang maternel apporté par les artères utérines spiralées.',
        'La membrane des villosités choriales constitue la barrière placentaire : elle sépare rigoureusement les deux circulations sanguines tout en autorisant des échanges sélectifs massifs.',
        '2. Les fonctions physiologiques du placenta :',
        '• Fonction respiratoire : diffusion passive du dioxygène de la mère vers le fœtus (favorisée par la plus forte affinité de l\'hémoglobine fœtale pour l\'O2) et rejet du CO2.',
        '• Fonction nutritive : transport actif du glucose, des acides aminés, des vitamines et des sels minéraux.',
        '• Fonction excrétrice : élimination de l\'urée, de l\'acide urique et de la créatinine fœtale dans le sang maternel.',
        '• Fonction immunitaire protectrice : transfert sélectif des anticorps maternels de type immunoglobulines G (IgG) conférant au nouveau-né une immunité passive protectrice durant ses premiers mois de vie.',
        'Attention aux dangers : la barrière placentaire laisse malheureusement passer certains agents pathogènes (virus de la rubéole, VIH, toxoplasme, Plasmodium du paludisme) et toxiques (alcool, nicotine, certains médicaments tératogènes).'
      ]
    },
    {
      title: 'II. LE RÔLE ENDOCRINE MAJEUR DU PLACENTA',
      content: [
        'Dès la nidation, le placenta se comporte comme une glande endocrine essentielle :',
        '• L\'HCG (Gonadotrophine chorionique humaine) : sécrétée dès le 7e jour, elle maintient le corps jaune gravidique actif pendant les trois premiers mois de grossesse (détectable dans les tests de grossesse urinaires).',
        '• Les Œstrogènes et la Progestérone : à partir du 3e mois (relais placentaire), le placenta prend en charge la synthèse massive de progestérone (qui bloque toute contraction du myomètre utérin : le « silence utérin ») et d\'œstrogènes (qui stimulent la croissance de l\'utérus et des glandes mammaires).',
        '• L\'HPL (Hormone placentaire lactogène) : stimule le métabolisme maternel et favorise l\'apport de glucose vers le fœtus.'
      ]
    },
    {
      title: 'III. LE DÉTERMINISME NEURO-HORMONAL DE L\'ACCOUCHEMENT (LE TRAVAIL)',
      content: [
        'L\'accouchement se déroule selon 3 étapes consécutives régies par une boucle de rétroaction positive hormonale :',
        '1. La dilatation du col utérin :',
        'En fin de grossesse, la chute relative du rapport progestérone/œstrogènes lève le silence utérin. L\'axe hypophysaire maternel et fœtal libère de l\'ocytocine. L\'ocytocine stimule de puissantes contractions rythmiques péristaltiques du myomètre utérin. La tête du fœtus appuie sur le col de l\'utérus, stimulant les mécanorécepteurs cervicaux qui envoient des influx nerveux vers l\'hypothalamus pour accroître encore plus la libération d\'ocytocine (réflexe de Ferguson). Le col s\'efface et se dilate jusqu\'à 10 cm, la poche des eaux se rompt.',
        '2. L\'expulsion du fœtus :',
        'Sous l\'effet conjugué des contractions utérines réflexes et des poussées volontaires des muscles abdominaux de la mère, le nouveau-né franchit le détroit inférieur du bassin et sort à l\'air libre.',
        '3. La délivrance (15 à 30 minutes après la naissance) :',
        'Reprise de contractions utérines entraînant le décollement et l\'expulsion complète du placenta et des membranes fœtales, suivie d\'une vasoconstriction hémostatique indispensable prévenant les hémorragies du post-partum.'
      ]
    }
  ]
};

export const LESSON_25_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-25',
  number: '25',
  title: 'LEÇON 25 : LES ROCHES MAGMATIQUES : GENÈSE, TEXTURES ET VOLCANISME DES MAMELLES',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 5 : Géologie et ressources géologiques du Sénégal',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '40 min de lecture approfondie',
  description: 'Origine et cristallisation fractionnée des magmas (série de Bowen). Roches plutoniques (granite) et volcaniques (basalte). Étude géologique approfondie du volcanisme de la presqu\'île de Dakar (Mamelles).',
  introduction: 'La croûte terrestre et le manteau supérieur sont le siège d\'une activité géodynamique interne intense qui produit des liquides silicatés à haute température appelés magmas. Lorsque ces magmas montent vers la surface, leur refroidissement progressif conduit à la formation des roches magmatiques (ou endogènes). Selon que la cristallisation s\'effectue lentement en profondeur ou rapidement à la surface lors d\'éruptions volcaniques, les textures et les minéraux formés sont radicalement différents. Au Sénégal, la presqu\'île du Cap-Vert et la région de Dakar portent l\'empreinte spectaculaire d\'un volcanisme cénozoïque et quaternaire illustré par les célèbres collines des Mamelles. Cette leçon explore la genèse magmatique, les textures pétrographiques et la géologie volcanique locale.',
  conclusion: 'En conclusion, les roches magmatiques témoignent des transferts de matière et de chaleur depuis les profondeurs du manteau et de la croûte. La vitesse de refroidissement dicte la texture de la roche : grenue pour les plutons refroidis lentement sous terre (granite), microlithique à pâte vitreuse pour les laves figées à l\'air libre (basalte). Les coulées basaltiques des Mamelles et de l\'île de Gorée ont façonné la géographie de Dakar et fournissent d\'importants matériaux de construction (gravats et granulats de basalte de Diack à Thiès).',
  sections: [
    {
      title: 'I. GENÈSE DES MAGMAS ET PROCESSUS DE CRISTALLISATION',
      content: [
        '1. La fusion partielle des roches en profondeur :',
        'Un magma prend naissance par fusion partielle de roches préexistantes dans le manteau supérieur (péridotite) ou la croûte continentale inférieure. Cette fusion est déclenchée par une hausse de température, une décompression adiabatique (dorsales océaniques et points chauds) ou un apport de fluides volatils abaissant le solidus (zones de subduction).',
        '2. La série de réaction de Bowen et la différenciation magmatique :',
        'Au cours de son ascension et de son refroidissement, le magma cristallise de manière fractionnée :',
        '• Série discontinue (minéraux ferromagnésiens) : olivine → pyroxène → amphibole → biotite.',
        '• Série continue (plagioclases) : anorthite (riche en calcium) → albite (riche en sodium).',
        '• En fin de cristallisation (magma résiduel enrichi en silice) : feldspaths potassiques (orthose), muscovite et quartz libre.'
      ]
    },
    {
      title: 'II. TYPOLOGIE PÉTROGRAPHIQUE ET TEXTURES DES ROCHES MAGMATIQUES',
      content: [
        '1. Les roches plutoniques (cristallisation lente en profondeur) : Exemple du Granite :',
        '• Texture grenue : entièrement cristallisée (holocristalline), constituée de cristaux jointifs visibles à l\'œil nu sans pâte de verre.',
        '• Minéralogie du granite : quartz (translucide, cassure conchoïdale), feldspaths plagioclases et orthose (blanchâtres à roses), biotite (micas noirs étincelants).',
        '2. Les roches volcaniques (refroidissement rapide en surface) : Exemple du Basalte :',
        '• Texture microlithique : gros phénocristaux (olivines vert olive, pyroxènes noirs) emballés dans un feutrage de microlithes de plagioclases baignant dans une pâte de verre amorphe non cristallisée.',
        '• Composition basique pauvre en silice (SiO2 < 52%) et riche en fer et magnésium.'
      ]
    },
    {
      title: 'III. ÉTUDE GÉOLOGIQUE DU VOLCANISME DES MAMELLES DE DAKAR',
      content: [
        'La presqu\'île du Cap-Vert a été le théâtre de deux cycles volcaniques majeurs :',
        '1. Le volcanisme tertiaire (Miocène, 13 à 10 millions d\'années) :',
        'Manifesté par des basaltes et des tufs visibles sur les falaises de Gorée, la pointe des Almadies et l\'anse Bernard, ainsi que les pitons de Diack près de Thiès.',
        '2. Le volcanisme quaternaire (Pléistocène, 1 à 0,5 million d\'années) : Les Mamelles de Dakar :',
        '• Les deux collines des Mamelles (orientale culminant à 105 m avec le Phare des Mamelles, et occidentale portant le Monument de la Renaissance africaine) sont deux cônes pyroclastiques stromboliens jumeaux formés par l\'empilement de scories volcaniques et de bombes basaltiques.',
        '• La coulée de basalte des Mamelles s\'est épanchée sur des sables dunaires quaternaires et forme aujourd\'hui la corniche rocheuse des Almadies. Le refroidissement des coulées a engendré par rétraction thermique de superbes orgues basaltiques (colonnes prismatiques hexagonales) visibles sur la falaise côtière de Ouakam et des Almadies.'
      ]
    }
  ]
};

export const LESSON_26_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-26',
  number: '26',
  title: 'LEÇON 26 : LES ROCHES SÉDIMENTAIRES : GENÈSE ET LE BASSIN DU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 5 : Géologie et ressources géologiques du Sénégal',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Altération des roches, transport, sédimentation et diagenèse. Étude du bassin sédimentaire sénégalo-mauritanien couvrant 75% du Sénégal : calcaires de Rufisque, phosphates de Taïba et grès.',
  introduction: 'Sous l\'action conjuguée des agents météoriques de l\'atmosphère, de l\'eau, du vent et des êtres vivants, les roches magmatiques et métamorphiques affleurant à la surface de la Terre subissent une altération physique et chimique incessante. Les débris et solutés arrachés sont transportés par les cours d\'eau ou le vent vers des zones déprimées appelées bassins sédimentaires, où ils s\'accumulent en strates successives avant d\'être transformés en roches cohérentes par la diagenèse : ce sont les roches sédimentaires. Au Sénégal, les trois quarts du territoire national sont occupés par le Bassin sédimentaire sénégalo-mauritanien, véritable géant géologique renfermant des richesses minières et hydrologiques d\'une importance vitale pour l\'économie. Cette leçon retrace le cycle sédimentaire et dissèque l\'histoire de notre bassin national.',
  conclusion: 'En conclusion, les roches sédimentaires sont les archives stratigraphiques de l\'histoire de la Terre. Grâce aux fossiles qu\'elles renferment (ammonites, foraminifères, dents de requins fossiles de Taïba), les géologues reconstituent les transgressions et régressions marines successives. Au Sénégal, les roches sédimentaires fournissent la totalité du ciment national (calcaires crétacés de Bargny), les engrais pour l\'agriculture (phosphates éocènes de Taïba et Matam) et l\'eau potable des cités (nappes du Maestrichtien).',
  sections: [
    {
      title: 'I. LES QUATRE ÉTAPES DU CYCLE DE FORMATION DES ROCHES SÉDIMENTAIRES',
      content: [
        '1. L\'altération météorique des roches :',
        '• Désagrégation mécanique : fissuration par thermoclastie (forts écarts thermiques jour/nuit au Sahel), gélifraction et action des racines végétales.',
        '• Altération chimique : dissolution des carbonates par l\'eau chargée de CO2, hydrolyse des silicates (les feldspaths du granite s\'hydrolysent en minéraux argileux comme la kaolinite) et oxydation du fer.',
        '2. Le transport des produits d\'altération :',
        'Sous forme solide (galets, sables, limons transportés par le fleuve Sénégal, la Gambie, la Casamance ou les alizés) ou sous forme dissoute (ions Ca2+, HCO3-, Mg2+, SO42-).',
        '3. La sédimentation (Dépôt) :',
        'Elle s\'effectue lorsque la vitesse du fluide baisse (décantation dans les deltas, lagunes, estuaires ou fonds marins). Les sédiments se déposent en couches horizontales parallèles appelées strates selon le principe de superposition géologique.',
        '4. La diagenèse (Lithification) :',
        'Transformation des sédiments meubles et gorgés d\'eau en roches dures et cohérentes sous l\'effet de la compaction (expulsion de l\'eau sous le poids des couches supérieures) et de la cimentation (précipitation de minéraux liants comme la calcite ou la silice entre les grains).'
      ]
    },
    {
      title: 'II. CLASSIFICATION DES ROCHES SÉDIMENTAIRES',
      content: [
        '• Roches détritiques (ou terrigènes) : formées de débris de roches préexistantes : conglomérats (brèches et poudingues), grès (sables consolidés) et argilites.',
        '• Roches chimiques et biochimiques : issues de la précipitation minérale ou de l\'accumulation de squelettes et coquilles d\'organismes marins : calcaires coquilliers, craie, dolomies, roches phosphatées, évaporites (sel gemme du lac Rose et gypse).',
        '• Roches carbonées (organiques) : accumulation de matière végétale décomposée en milieu anoxique (tourbe, lignite, houille, pétrole et gaz naturel).'
      ]
    },
    {
      title: 'III. LE BASSIN SÉDIMENTAIRE SÉNÉGALO-MAURITANIEN',
      content: [
        'Couvrant plus de 75% de la superficie du Sénégal, ce bassin côtier ouvert s\'est formé à partir du Jurassique lors de l\'ouverture de l\'océan Atlantique central :',
        '1. Les strates mésozoïques (Crétacé) :',
        '• Formations marines et deltaïques épaisses de plusieurs milliers de mètres sous Dakar.',
        '• Calcaires et marnes de Popenguine et Bargny.',
        '• Grès du Maestrichtien : réservoir aquifère d\'eau douce le plus stratégique du pays.',
        '2. Les strates cénozoïques (Tertiaire) :',
        '• L\'Éocène inférieur et moyen : dépôt des gisements de phosphates de chaux et d\'alumine de Taïba, Lam-Lam et Matam, formés en mer chaude peu profonde riche en nutriments planctoniques et dents de squales.',
        '• Calcaires marneux de Bargny exploités par la SOCOCIM pour la fabrication du ciment.',
        '3. Les formations quaternaires superficielles :',
        '• Système dunaire de l\'Ogolien (dunes rouges intérieures et dunes jaunes littorales de la Grande Côte de Kayar à Saint-Louis) hébergeant les sables riches en zircon, ilménite et rutile.'
      ]
    }
  ]
};

export const LESSON_27_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-27',
  number: '27',
  title: 'LEÇON 27 : LES ROCHES MÉTAMORPHIQUES ET LE SOCLE PRÉCAMBRIEN DU SÉNÉGAL ORIENTAL',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 5 : Géologie et ressources géologiques du Sénégal',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '35 min de lecture approfondie',
  description: 'Facteurs du métamorphisme (pression et température), métamorphisme régional et de contact. Minéraux index, textures foliées et schisteuses. Le socle birimien de la boutonnière de Kédougou.',
  introduction: 'Lorsque des roches préexistantes (qu\'elles soient d\'origine magmatique, sédimentaire ou déjà métamorphique) sont enfouies profondément dans l\'écorce terrestre lors de mouvements tectoniques ou de collisions orogéniques, elles sont soumises à des conditions physico-chimiques de pression et de température radicalement différentes de celles de leur formation. Sous l\'effet de ces contraintes intenses, sans jamais atteindre le point de fusion totale (état solide préservé), les minéraux se réorganisent, se réorientent et se transforment par recristallisation : c\'est le métamorphisme. Au Sénégal Oriental, dans la région de Kédougou, affleure le vieux socle géologique précambrien (âgé de plus de deux milliards d\'années), constitué de puissantes séries métamorphiques birimiennes renfermant nos plus grands gisements d\'or et de fer. Cette leçon détaille les facteurs du métamorphisme et la géologie du socle sénégalais.',
  conclusion: 'En conclusion, les roches métamorphiques sont les témoins pétrifiés des grandes chaînes de montagnes disparues et des contraintes tectoniques de l\'écorce terrestre. La boutonnière de Kédougou-Kéniéba constitue une fenêtre géologique exceptionnelle sur l\'histoire la plus ancienne du continent africain, abritant un potentiel métallogénique remarquable (ceinture de roches vertes de Mako et bassin sédimentaire métamorphisé de la Falémé).',
  sections: [
    {
      title: 'I. LES FACTEURS ET LES TYPES DE MÉTAMORPHISME',
      content: [
        'Le métamorphisme s\'effectue toujours à l\'état solide sous l\'influence de trois paramètres majeurs :',
        '1. La température (T) : augmente avec la profondeur selon le gradient géothermique moyen (environ 30°C par kilomètre d\'enfouissement). Elle active la diffusion atomique et la recristallisation de nouveaux minéraux stables à haute énergie.',
        '2. La pression (P) :',
        '• Pression lithostatique (ou hydrostatique) : due au poids des couches rocheuses sus-jacentes, uniforme dans toutes les directions.',
        '• Pression orientée (contraintes tectoniques différentielles) : provoque la déformation plastique, l\'aplatissement des minéraux et l\'apparition de plans préférentiels.',
        '3. Les deux grands types de métamorphisme :',
        '• Métamorphisme de contact (thermique pur) : se développe au contact d\'un magma ascendant brûlant qui cuit les roches encaissantes en créant une auréole de métamorphisme (formation de cornéennes dures).',
        '• Métamorphisme régional (thermodynamique) : s\'étend sur des milliers de kilomètres carrés lors de la formation de chaînes de montagnes (orogenèses). Il associe de fortes températures et de très fortes pressions tectoniques.'
      ]
    },
    {
      title: 'II. LES STRUCTURES MÉTAMORPHIQUES ET LES MINÉRAUX INDEX',
      content: [
        '1. Les structures et textures caractéristiques :',
        '• La schistosité : feuilletage régulier de la roche en plans parallèles sous l\'effet de fortes pressions orientées, permettant un débit en feuillets minces (ardoises, schistes).',
        '• La foliation : alternance de lits clairs quartzo-feldspathiques et de lits sombres riches en minéraux ferromagnésiens (biotite, amphibole) formés à température plus élevée (gneiss).',
        '2. La séquence métamorphique d\'une roche argileuse (pélite) :',
        'Sous un métamorphisme régional croissant : Argilite (sédimentaire) → Schiste ardoisier → Micaschiste (paillettes de mica visibles) → Gneiss → Migmatite (début de fusion partielle / anatexie).'
      ]
    },
    {
      title: 'III. LE SOCLE PRÉCAMBRIEN DU SÉNÉGAL ORIENTAL (BOUTONNIÈRE DE KÉDOUGOU-KÉNIÉBA)',
      content: [
        'Affleurant au sud-est du pays sur la rive gauche de la Falémé, ce socle appartient au Craton Ouest-Africain d\'âge Protérozoïque inférieur (Birimien, environ 2,1 à 2 milliards d\'années) :',
        '1. La série volcanique de Mako (ceinture de roches vertes) :',
        'Composée d\'anciennes laves basaltiques sous-marines et d\'andésites métamorphisées en schistes verts et amphibolites, recoupée par d\'importants plutons granitiques (granitoïdes de Saraya et Boboti). Cette zone abrite le grand gisement d\'or de Sabodala et de Mako.',
        '2. La série sédimentaire métamorphisée de Dialé-Daléma et de la Falémé :',
        'Formée de grauwackes, quartzites, pélites et marbres métamorphiques (comme le marbre rose d\'Ibel exploité pour la décoration), bordée par les puissants gisements de minerais de fer de la Falémé.'
      ]
    }
  ]
};

export const LESSON_28_SVT_1ERE_S2: LessonContent = {
  id: 'svt-1ere-s2-lecon-28',
  number: '28',
  title: 'LEÇON 28 : LES RESSOURCES GÉOLOGIQUES ET HYDROGÉOLOGIQUES DU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première S2',
  module: 'Partie 5 : Géologie et ressources géologiques du Sénégal',
  level: 'Première S2 (Sciences Expérimentales)',
  readTime: '45 min de lecture approfondie',
  description: 'Inventaire et localisation cartographique des ressources minières, énergétiques et hydrogéologiques du Sénégal : phosphates, or, fer, zircon, pétrole, gaz et grandes nappes aquifères.',
  introduction: 'Le sous-sol du Sénégal recèle une formidable variété de richesses géologiques directement issues de son histoire géologique complexe, alliant un socle birimien ancien métallogénique à l\'est et un immense bassin sédimentaire méso-cénozoïque à l\'ouest. Longtemps qualifié de pays à vocation essentiellement agricole, le Sénégal s\'affirme aujourd\'hui comme une grande nation minière et un producteur émergent d\'hydrocarbures offshore (pétrole et gaz naturel). Par ailleurs, dans un contexte sahélien marqué par l\'irrégularité des pluies, les nappes hydrogéologiques souterraines représentent la ressource naturelle la plus vitale pour la sécurité hydrique et l\'alimentation des populations urbaines et rurales. Cette leçon dresse le panorama complet des ressources du sous-sol sénégalais.',
  conclusion: 'En conclusion, le sous-sol sénégalais constitue un puissant levier d\'émergence économique et industrielle. La valorisation locale de ces ressources (transformation des phosphates en engrais chimiques aux ICS de Darou Khoudoss, raffinage de l\'or, production d\'électricité gazière gas-to-power) doit s\'accompagner d\'une gouvernance environnementale stricte pour préserver les sols, éviter la pollution des nappes phréatiques et garantir un développement durable pour les générations futures.',
  image: {
    svgContent: SVG_SVT_1ERE_GEOLOGIE_SENEGAL,
    alt: 'Coupe géologique et ressources du Sénégal d\'Ouest en Est',
    caption: 'Figure 7 : Coupe Ouest-Est du Sénégal : Mamelles de Dakar, Bassin sédimentaire, nappes aquifères et socle birimien de Kédougou'
  },
  diagram: {
    title: 'Ressources Géologiques du Sénégal',
    svgContent: SVG_SVT_1ERE_GEOLOGIE_SENEGAL
  },
  sections: [
    {
      title: 'I. LES RESSOURCES HYDROGÉOLOGIQUES (L\'EAU SOUTERRAINE)',
      content: [
        'Dans le bassin sédimentaire sénégalais, les nappes aquifères souterraines fournissent plus de 80% de l\'eau potable du pays :',
        '1. La nappe superficielle des sables quaternaires :',
        'Nappe phréatique libre de faible profondeur (nappe des Thiaroye dans la banlieue de Dakar, sables du littoral nord dans les Niayes). Essentielle pour le maraîchage, mais très vulnérable aux pollutions par les nitrates et les rejets urbains.',
        '2. Les nappes intermédiaires de l\'Éocène et du Paléocène :',
        'Nappes calcaires exploitées dans la région de Sébikotane et de Pout pour l\'approvisionnement en eau de la région dakaroise.',
        '3. La nappe profonde du Maestrichtien (Crétacé supérieur) :',
        'Le joyau hydrogéologique du Sénégal ! Immense réservoir de grès aquifères captifs s\'étendant sous la quasi-totalité du bassin sédimentaire sur plus de 150 000 km², entre 100 et 400 mètres de profondeur. Elle emmagasine des réserves gigantesques de plusieurs centaines de milliards de mètres cubes d\'eau douce, exploitées par des centaines de forages ruraux du bassin arachidier et acheminées vers Dakar par les usines de captage de Pout et les forages du centre.'
      ]
    },
    {
      title: 'II. LES RESSOURCES MINÉRALES ET MÉTALLIFÈRES DU SÉNÉGAL',
      content: [
        '1. Les minéraux industriels et de construction :',
        '• Les phosphates de chaux : exploités à ciel ouvert par les ICS à Taïba (région de Thiès) et à Matam (phosphates de Ndendory). Principale matière première pour la fabrication d\'acide phosphorique et d\'engrais chimiques.',
        '• Le zircon et les minéraux lourds (ilménite, rutile) : exploités sur le littoral de la Grande Côte à Diogo par Grande Côte Operations (GCO), plaçant le Sénégal parmi les premiers producteurs mondiaux de zircon (utilisé dans les céramiques et l\'industrie nucléaire).',
        '• Les calcaires de Bargny et de Bandia : alimentent les grandes cimenteries nationales (SOCOCIM, Dangote, Ciments du Sahel).',
        '• Les granulats et basaltes : carrières de Diack (Thiès) utilisées pour le ballast ferroviaire et les routes.',
        '2. Les métaux précieux et minerais métalliques :',
        '• L\'Or de Kédougou : exploité industriellement dans la mine de Sabodala-Massawa et de Mako par des compagnies minières majeures, ainsi que par un orpaillage artisanal traditionnel très actif.',
        '• Le minerai de fer de la Falémé : gigantesque gisement non encore exploité estimé à plus de 750 millions de tonnes de réserves de minerai de fer de haute teneur.',
        '• Le marbre d\'Ibel et les pierres ornementales.'
      ]
    },
    {
      title: 'III. LES RESSOURCES ÉNERGÉTIQUES : PÉTROLE ET GAZ NATUREL DU SÉNÉGAL',
      content: [
        'Ces dernières années, des découvertes géologiques d\'envergure mondiale dans les séries sédimentaires marines profondes du bassin sénégalais ont fait entrer le pays dans l\'ère des hydrocarbures :',
        '• Le gisement de gaz naturel Grand Tortue Ahmeyim (GTA) : situé à cheval sur la frontière maritime entre le Sénégal et la Mauritanie, à grand tirant d\'eau, l\'un des plus vastes réservoirs gaziers d\'Afrique de l\'Ouest.',
        '• Le champ pétrolier de Sangomar : premier projet pétrolier offshore du Sénégal situé au large de Joal, entré en production en 2024.',
        '• Le gisement de gaz naturel de Yakaar-Teranga au large de Kayar.',
        '• Le champ gazier historique on-shore de Gadiaga (région de Thiès).'
      ]
    }
  ]
};
