import { LessonContent } from './courses';
import {
  SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ,
  SVG_SVT_1ERE_PYRAMIDE_ECOLOGIQUE
} from './diagrams_1ere_svt';

// =========================================================================
// SVT PREMIÈRE L2 — PROGRAMME COMPLET SÉRIE LITTÉRAIRE L2
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (Sénégal)
// =========================================================================

export const LESSON_1_SVT_1ERE_L2: LessonContent = {
  id: 'svt-1ere-l2-lecon-1',
  number: '1',
  title: 'LEÇON L2-1 : BESOINS ÉNERGÉTIQUES ET HYGIÈNE ALIMENTAIRE',
  subject: 'SVT',
  classLevel: 'Première L2',
  module: 'Thème 1 : Nutrition et santé humaine',
  level: 'Première L2 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Évaluation des dépenses énergétiques (métabolisme de base, thermorégulation, travail musculaire). Rations alimentaires adaptées aux différents âges et prévention des déséquilibres nutritionnels.',
  introduction: 'Le corps humain est comparable à un moteur biologique qui consomme continuellement de l\'énergie pour assurer la marche de ses organes vitaux, maintenir sa température interne à 37°C et accomplir les efforts physiques quotidiens. L\'énergie requise est exclusivement fournie par la combustion métabolique des aliments ingérés. Lorsque l\'apport énergétique égale exactement la dépense, le poids corporel reste stable : c\'est l\'équilibre énergétique. En série L2, l\'étude de la nutrition met l\'accent sur l\'évaluation chiffrée des rations caloriques et l\'hygiène de vie pour prévenir les maladies métaboliques. Cette leçon étudie les composantes de la dépense calorique et les règles d\'une alimentation saine adaptée au contexte sénégalais.',
  conclusion: 'En conclusion, une ration alimentaire saine doit être quantitativement suffisante et qualitativement diversifiée. Au Sénégal, l\'amélioration de l\'hygiène nutritionnelle passe par la réduction des corps gras cuits et réutilisés (huiles saturées des beignets et fritures) et la valorisation des céréales traditionnelles à index glycémique bas (mil, sorgho, fonio).',
  sections: [
    {
      title: 'I. LES COMPOSANTES DE LA DÉPENSE ÉNERGÉTIQUE QUOTIDIENNE',
      content: [
        'La dépense totale d\'énergie d\'un individu sur 24 heures comprend trois postes majeurs :',
        '1. Le Métabolisme de Base (MB) :',
        'Dépense incompressible correspondant au travail minimal du cœur, des poumons, du cerveau, des reins et au tonus musculaire chez un sujet allongé au repos complet, à jeun depuis 12h et à température ambiante de neutralité thermique (20-22°C). Le MB représente environ 60 à 70% de la dépense journalière totale (environ 1 kcal/kg/heure chez l\'homme, 0,9 kcal/kg/heure chez la femme).',
        '2. L\'activité physique et le travail musculaire :',
        'Poste le plus variable (de 20% chez un individu sédentaire à plus de 50% chez un travailleur de force ou un athlète).',
        '3. L\'action dynamique spécifique (ADS) et la thermorégulation :',
        'Énergie dépensée pour digérer et assimiler les nutriments eux-mêmes (l\'ingestion de protéines augmente la thermogenèse de 20%).'
      ]
    },
    {
      title: 'II. RATIONS ADAPTÉES AUX DIFFÉRENTS ÉTATS PHYSIOLOGIQUES',
      content: [
        'La ration alimentaire doit être adaptée aux besoins spécifiques de chaque étape de la vie :',
        '• L\'enfant et l\'adolescent en croissance : besoins accrus en protéines animales et végétales pour l\'édification des tissus, en calcium et phosphore pour l\'ossification, et en fer.',
        '• La femme enceinte et allaitante : besoins énergétiques augmentés de 300 à 500 kcal/jour, besoins majeurs en acide folique (vitamine B9 prévenant les malformations du tube neural) et en fer.',
        '• L\'adulte actif : ration de maintien stable équilibrant les dépenses professionnelles.',
        '• Le travailleur de force (agriculteur en période d\'hivernage, maçon) : ration à haute teneur calorique (3 500 à 4 500 kcal/jour) riche en glucides lents.',
        '• La personne âgée : baisse du métabolisme de base mais maintien d\'un apport suffisant en protéines pour prévenir la fonte musculaire (sarcopénie) et en eau pour éviter la déshydratation insidieuse.'
      ]
    },
    {
      title: 'III. DÉSÉQUILIBRES ALIMENTAIRES ET PATHOLOGIES ASSOCIÉES',
      content: [
        '• Sous-alimentation : perte pondérale, fatigue chronique, vulnérabilité accrue aux infections opportunistes.',
        '• Suralimentation et obésité : accumulation de graisse dans le tissu adipeux (Indice de Masse Corporelle IMC = Poids en kg / (Taille en m)² supérieur à 30). L\'obésité favorise le développement précoce du diabète de type 2, de l\'arthrose des genoux et de l\'insuffisance coronarienne.',
        '• Les règles d\'or de l\'hygiène alimentaire au Sénégal : propreté de l\'eau de boisson, lavage systématique des mains au savon avant les repas communautaires dans le même bol, cuisson suffisante des viandes et poissons.'
      ]
    }
  ]
};

export const LESSON_2_SVT_1ERE_L2: LessonContent = {
  id: 'svt-1ere-l2-lecon-2',
  number: '2',
  title: 'LEÇON L2-2 : LA REPRODUCTION HUMAINE, CONTRACEPTION ET RÉGULATION DES NAISSANCES',
  subject: 'SVT',
  classLevel: 'Première L2',
  module: 'Thème 2 : Reproduction, santé maternelle et planification familiale',
  level: 'Première L2 (Série Littéraire)',
  readTime: '40 min de lecture approfondie',
  description: 'Physiologie de la fertilité féminine et masculine. Période féconde, méthodes contraceptives naturelles, mécaniques, chimiques et hormonales. Enjeux de la planification familiale au Sénégal.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Cycles Sexuels Féminins et Régulation Neuro-hormonale Hypothalamo-hypophysaire',
    svgContent: SVG_SVT_1ERE_CYCLE_HORMONAL_FEMININ
  },
  introduction: 'La reproduction humaine engage la responsabilité biologique, éthique et sociale des individus et des couples. L\'accès à l\'information scientifique sur les mécanismes de la fertilité et les méthodes contraceptives permet aux femmes et aux hommes de choisir librement le moment et l\'espacement de leurs grossesses : c\'est le concept de planification familiale (ou espacement des naissances). Au Sénégal, la politique nationale de santé maternelle et néonatale place la planification familiale au premier rang des priorités pour réduire la mortalité maternelle et infantile liée aux grossesses trop précoces, trop rapprochées ou trop tardives. Cette leçon étudie la physiologie de la période de fécondabilité et le fonctionnement des méthodes contraceptives modernes.',
  conclusion: 'En conclusion, la maîtrise de la fécondité par la planification familiale est un facteur clé de santé publique, d\'émancipation des femmes et de développement durable. Le préservatif masculin et féminin demeure la seule méthode offrant une double protection simultanée : protection contre les grossesses non désirées et barrière infranchissable contre les infections sexuellement transmissibles et le VIH.',
  sections: [
    {
      title: 'I. LA PÉRIODE DE FÉCONDABILITÉ DANS LE CYCLE FÉMININ',
      content: [
        '1. Durée de vie des gamètes humains :',
        '• L\'ovocyte II expulsé lors de l\'ovulation ne survit que 12 à 24 heures dans la trompe de Fallope s\'il n\'est pas fécondé.',
        '• Les spermatozoïdes conservent leur pouvoir fécondant dans le mucus utérin pendant 3 à 5 jours (72 à 120 heures).',
        '2. Détermination de la période féconde :',
        'Pour un cycle régulier moyen de 28 jours avec ovulation au 14e jour :',
        'La période de fécondabilité théorique s\'étend du 10e jour (4 jours avant l\'ovulation en tenant compte de la survie spermatique) jusqu\'au 16e jour du cycle (48 heures après l\'ovulation). Tout rapport sexuel non protégé pendant cette fenêtre expose à un risque élevé de conception.'
      ]
    },
    {
      title: 'II. LES MÉTHODES CONTRACEPTIVES NATURELLES ET MÉCANIQUES',
      content: [
        '1. Les méthodes dites naturelles (d\'abstinence périodique) :',
        '• Méthode du calendrier (Ogino-Knaus) : calcul théorique de la période ovulatoire (très peu fiable chez les femmes aux cycles irréguliers).',
        '• Méthode des températures : détection du décalage thermique d\'environ 0,5°C au lendemain de l\'ovulation dû à l\'effet thermogène de la progestérone.',
        '• Méthode Billings : observation de la glaire cervicale (qui devient transparente, filante et abondante en période ovulatoire).',
        '• Méthode de l\'allaitement maternel et de l\'aménorrhée (MAMA) : efficace sous conditions strictes durant les 6 premiers mois.',
        '2. Les méthodes mécaniques et de barrière :',
        '• Le préservatif masculin et le préservatif féminin : empêchent mécaniquement le contact entre le sperme et les voies génitales féminines. Double protection indispensable contre les IST.',
        '• Le stérilet (Dispositif Intra-Utérin - DIU) au cuivre : inséré dans la cavité utérine par une sage-femme ou un médecin pour 5 à 10 ans. Les ions cuivre immobilisent les spermatozoïdes et induisent une réaction inflammatoire locale aseptique de l\'endomètre qui empêche la nidation.'
      ]
    },
    {
      title: 'III. LES MÉTHODES CONTRACEPTIVES HORMONALES MODERNES',
      content: [
        '1. La pilule combinée oestroprogestative (minidosée) :',
        'Fonctionne selon une triple sécurité biologique :',
        '• Blocage de l\'ovulation : maintien d\'un taux hormonal constant exerçant un rétrocontrôle négatif continu sur l\'hypophyse (suppression du pic de LH et de FSH).',
        '• Modification de la glaire cervicale : qui reste dense, visqueuse et imperméable aux spermatozoïdes.',
        '• Atrophie de l\'endomètre utérin : rendant la nidation impossible.',
        '2. Les implants sous-cutanés (Jadelle, Implanon) et injectables (Depo-Provera) :',
        'Délivrent un progestatif pur en continu pendant 3 mois à 5 ans, très utilisés dans les centres de santé au Sénégal en raison de leur grande efficacité et de leur commodité.',
        '3. La contraception d\'urgence (pilule du lendemain) :',
        'Prise unique de lévonorgestrel le plus tôt possible dans les 72 heures suivant un rapport à risque pour retarder l\'ovulation.'
      ]
    }
  ]
};

export const LESSON_3_SVT_1ERE_L2: LessonContent = {
  id: 'svt-1ere-l2-lecon-3',
  number: '3',
  title: 'LEÇON L2-3 : LE SYSTÈME IMMUNITAIRE ET LA VACCINATION AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première L2',
  module: 'Thème 3 : Immunologie et grandes endémies tropicales',
  level: 'Première L2 (Série Littéraire)',
  readTime: '40 min de lecture approfondie',
  description: 'Défenses immunitaires innées (phagocytose) et adaptatives (lymphocytes B, anticorps et lymphocytes T cytotoxiques). Principe de la mémoire immunitaire et Programme Élargi de Vaccination (PEV) du Sénégal.',
  introduction: 'Chaque jour, notre organisme entre en contact avec des milliards de microorganismes présents dans l\'air, l\'eau, les sols et les aliments. La plupart sont inoffensifs, mais certains sont des agents pathogènes redoutables (bactéries, virus, parasites, champignons). Pour préserver son intégrité biologique contre ces agresseurs, l\'organisme dispose d\'un système de défense sophistiqué : le système immunitaire. Ce système articule une première ligne de défense immédiate et non spécifique (l\'immunité innée) et une réponse hautement ciblée dotée d\'une mémoire biologique durable (l\'immunité adaptative). Cette leçon analyse les acteurs cellulaires de l\'immunité, le mode d\'action des anticorps et le fondement scientifique de la vaccination, pilier de la pédiatrie au Sénégal.',
  conclusion: 'En conclusion, la vaccination est l\'une des plus grandes victoires de la médecine moderne. En exploitant la mémoire immunitaire des lymphocytes, elle confère une protection individuelle et collective contre des maladies jadis dévastatrices. Au Sénégal, la réussite du PEV a permis d\'éradiquer la poliomyélite et de faire chuter drastiquement la rougeole et le tétanos néonatal.',
  sections: [
    {
      title: 'I. L\'IMMUNITÉ INNÉE : BARRIÈRES ET PHAGOCYTOSE',
      content: [
        '1. Les barrières naturelles anatomiques et chimiques :',
        '• La peau : revêtement épidermique corné imperméable continuellement desquamé.',
        '• Les muqueuses : tapissées de mucus engluant les particules et battues par des cils vibratiles (voies respiratoires).',
        '• Les sécrétions chimiques bactéricides : lysozyme des larmes et de la salive, acide chlorhydrique du suc gastrique, flore vaginale protectrice de Döderlein.',
        '2. La réaction inflammatoire aiguë et la phagocytose :',
        'En cas d\'effraction cutanée (plaie) :',
        '• Les quatre signes cardinaux de l\'inflammation : Rougeur, Chaleur, Gonflement (œdème) et Douleur (déclenchés par l\'histamine libérée par les mastocytes).',
        '• La diapédèse : les globules blancs polynucléaires neutrophiles et monocytes franchissent la paroi des capillaires pour gagner le tissu lésé.',
        '• Les étapes de la phagocytose par les macrophages : Adhésion du microbe → Englobement par émission de pseudopodes (formation du phagosome) → Digestion enzymatique par les lysosomes → Rejet des débris.'
      ]
    },
    {
      title: 'II. L\'IMMUNITÉ ADAPTATIVE ET LA MÉMOIRE IMMUNITAIRE',
      content: [
        'Déclenchée après présentation de l\'antigène par les cellules présentatrices d\'antigènes (CPA / cellules dendritiques) :',
        '1. La réponse humorale (Lymphocytes B et anticorps) :',
        '• Les lymphocytes B reconnaissent l\'antigène par leurs anticorps membranaires, reçoivent l\'aide des lymphocytes T4 helpers (sécréteurs d\'interleukines) et se différencient en plasmocytes.',
        '• Les plasmocytes sécrètent des anticorps circulants (immunoglobulines IgG, IgM, IgA) qui se lient spécifiquement aux antigènes pour former des complexes immuns neutralisant les toxines et favorisant la phagocytose (opsonisation).',
        '2. La réponse cellulaire (Lymphocytes T8 cytotoxiques) :',
        'Spécialisée dans la destruction des cellules infectées par des virus ou des cellules cancéreuses par libération de perforine et granzymes (cytolyse par apoptose).',
        '3. La mémoire immunitaire :',
        'Lors d\'un premier contact avec l\'antigène, la réponse primaire est lente (délai de 7 à 10 jours) et d\'intensité modérée. Cependant, il subsiste des lymphocytes mémoires (LB et LT mémoires) à longue durée de vie. Lors d\'un second contact, la réponse secondaire est quasi-immédiate (24 à 48 heures), massive et durable.'
      ]
    },
    {
      title: 'III. LE PRINCIPE DE LA VACCINATION ET LE PEV AU SÉNÉGAL',
      content: [
        '1. Le principe vaccinal de Louis Pasteur :',
        'Consiste à introduire dans l\'organisme un antigène rendu inoffensif (bactérie ou virus atténué, germe tué, toxine inactivée/anatoxine ou protéine recombinante) pour induire la création d\'un clone de lymphocytes mémoires protecteurs sans provoquer la maladie.',
        '2. Le Programme Élargi de Vaccination (PEV) du Ministère de la Santé du Sénégal :',
        'Administré gratuitement dans tous les postes et centres de santé aux nouveau-nés et nourrissons :',
        '• Dès la naissance : BCG (contre la tuberculose) et vaccin contre l\'Hépatite B.',
        '• À 6, 10 et 14 semaines : vaccin Pentavalent (Diphtérie, Tétanos, Coqueluche, Hépatite B, Haemophilus influenzae b) + vaccin antipoliomyélitique oral (VPO) et injectable (VPI) + vaccin contre les diarrhées à Rotavirus + vaccin Pneumocoque.',
        '• À 9 mois : vaccin contre la Rougeole et la Rubéole (RR) + vaccin contre la Fièvre Jaune (Amaril).'
      ]
    }
  ]
};

export const LESSON_4_SVT_1ERE_L2: LessonContent = {
  id: 'svt-1ere-l2-lecon-4',
  number: '4',
  title: 'LEÇON L2-4 : LES MALADIES INFECTIEUSES ET PARASITAIRES AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première L2',
  module: 'Thème 3 : Immunologie et grandes endémies tropicales',
  level: 'Première L2 (Série Littéraire)',
  readTime: '40 min de lecture approfondie',
  description: 'Cycle biologique, vecteurs, manifestations cliniques et lutte intégrée contre le paludisme (Plasmodium falciparum), la bilharziose urinaire, le choléra et le VIH-SIDA.',
  introduction: 'En zone tropicale et intertropicale, les conditions climatiques chaudes et humides favorisent le développement d\'une grande variété d\'agents infectieux bactériens, viraux et de parasites à cycles de développement complexes impliquant des vecteurs invertébrés (moustiques, mollusques d\'eau douce). Au Sénégal, des pathologies comme le paludisme, les schistosomiases (bilharzioses), les diarrhées infectieuses aiguës (choléra) et le virus de l\'immunodéficience humaine (VIH) constituent des enjeux prioritaires de santé publique. Cette leçon examine la biologie des agents causaux, leurs modes de transmission et les programmes de prévention et de lutte communautaire.',
  conclusion: 'En conclusion, la lutte contre les grandes endémies parasitaires au Sénégal ne se gagne pas seulement dans les hôpitaux avec des médicaments curatifs, mais sur le terrain par l\'assainissement du milieu, l\'élimination des gîtes larvaires, l\'utilisation généralisée des moustiquaires imprégnées et l\'accès à l\'eau potable pour briser définitivement les chaînes de transmission.',
  sections: [
    {
      title: 'I. LE PALUDISME (MALARIA) ET LE CYCLE DU PLASMODIUM',
      content: [
        '1. L\'agent causal et son vecteur :',
        'Le paludisme est causé par un protozoaire parasite du genre Plasmodium (l\'espèce Plasmodium falciparum étant la plus redoutable et dominante au Sénégal). Le vecteur transmetteur est la femelle hématophage du moustique Anophèle (Anopheles gambiae).',
        '2. Le cycle biologique complexe en deux hôtes :',
        '• Chez l\'homme (hôte intermédiaire, reproduction asexuée / schizogonie) : la piqûre de l\'anophèle injecte des sporozoïtes mobiles. Ils gagnent rapidement le foie en moins de 30 minutes, pénètrent dans les hépatocytes et se multiplient (phase hépatique pré-érythrocytaire). Puis des milliers de mérozoïtes sont libérés dans le sang, envahissent les globules rouges (hématies), s\'y multiplient en rosace et font éclater les hématies de façon synchronisée toutes les 48 heures (fièvre tierce). Cet éclatement libère des toxines pyrogènes responsables des accès palustres fébriles (frissons, sueurs profuses, céphalées intenses).',
        '• Chez l\'anophèle (hôte définitif, reproduction sexuée) : le moustique ingère des gamétocytes lors d\'un repas de sang. La fécondation s\'opère dans l\'estomac du moustique pour régénérer de nouveaux sporozoïtes infectieux migrant dans ses glandes salivaires.',
        '3. La lutte intégrée au Sénégal (PNLP) :',
        '• Utilisation universelle des moustiquaires imprégnées d\'insecticide à longue durée d\'action (MILDA).',
        '• Diagnostic rapide par Test de Diagnostic Rapide (TDR) et traitement immédiat par les Combinaisons Thérapeutiques à base d\'Artémisinine (CTA).',
        '• Chimio-prévention du paludisme saisonnier (CPS) chez les enfants pendant l\'hivernage.'
      ]
    },
    {
      title: 'II. LA BILHARZIOSE URINAIRE (SCHISTOSOMIASE)',
      content: [
        'Endémique dans la vallée du fleuve Sénégal, le bassin arachidier et autour des barrages :',
        '1. Agent et cycle :',
        'Provoquée par Schistosoma haematobium, un ver plat trématode à sexes séparés. Les œufs éliminés dans les urines éclosent dans l\'eau douce en larves cillées (miracidiums) qui infectent un mollusque d\'eau douce hôte intermédiaire (le bulin). Les cercaires nageuses libérées pénètrent activement à travers la peau humaine lors des baignades, du lavage du linge ou du travail dans les rizières.',
        '2. Signes et complications :',
        'Émission d\'urines sanglantes en fin de miction (hématurie terminale), douleurs vésicales et risque à long terme de cancer de la vessie. Traitement efficace en prise unique par le praziquantel.'
      ]
    },
    {
      title: 'III. LE CHOLÉRA ET LE VIH-SIDA',
      content: [
        '• Le Choléra : toxi-infection bactérienne aiguë à transmission oro-fécale causée par Vibrio cholerae (bacille virgule). Provoque des diarrhées aqueuses profuses incoercibles (« eau de riz ») et des vomissements entraînant une déshydratation foudroyante en quelques heures. Prévention par l\'eau potable, le chlore et l\'hygiène alimentaire.',
        '• Le VIH-SIDA : rétrovirus ciblant spécifiquement les lymphocytes T4 (CD4) coordonnateurs de la réponse immunitaire. Sa transmission s\'effectue par voie sexuelle non protégée, voie sanguine ou de la mère à l\'enfant. Traitement antiviral (ARV) permettant de rendre la charge virale indétectable (indétectable = intransmissible).'
      ]
    }
  ]
};

export const LESSON_5_SVT_1ERE_L2: LessonContent = {
  id: 'svt-1ere-l2-lecon-5',
  number: '5',
  title: 'LEÇON L2-5 : DÉGRADATION DE L\'ENVIRONNEMENT ET POLLUTIONS À DAKAR',
  subject: 'SVT',
  classLevel: 'Première L2',
  module: 'Thème 4 : Écologie urbaine et préservation des écosystèmes',
  level: 'Première L2 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Diagnostic environnemental de la région dakaroise : pollution atmosphérique, pollution de la Baie de Hann, gestion des ordures ménagères (décharge de Mbeubeuss) et impacts sanitaires.',
  introduction: 'La région métropolitaine de Dakar concentre sur seulement 0,3% de la superficie du territoire national plus de 25% de la population du Sénégal et environ 80% des activités économiques et industrielles. Cette hyper-concentration démographique et industrielle sans précédent a engendré des pressions écologiques intenses se traduisant par des pollutions chroniques de l\'air, des sols et des eaux littorales. La préservation de l\'environnement urbain et la santé des populations citadines sont devenues des défis de gouvernance majeurs. Cette leçon analyse les différentes formes de pollutions urbaines à Dakar, leurs conséquences sanitaires et les actions publiques de remédiation.',
  conclusion: 'En conclusion, la crise environnementale urbaine à Dakar appelle une transition écologique résolue fondée sur le projet de dépollution intégrale de la Baie de Hann, la modernisation de la gestion des déchets par le Projet PROMOGED (fermeture progressive et réhabilitation du site de Mbeubeuss) et le renouvellement écologique du parc automobile (transport propre avec le TER et le BRT 100% électrique).',
  sections: [
    {
      title: 'I. LA POLLUTION ATMOSPHÉRIQUE DAKAROISE',
      content: [
        '1. Les sources de polluants atmosphériques :',
        '• Le transport routier : parc automobile vieillissant et encombré émettant des gaz d\'échappement toxiques (monoxyde de carbone CO, dioxyde d\'azote NO2, dioxyde de soufre SO2 et composés organiques volatils).',
        '• Les particules fines en suspension (PM10 et PM2.5) : issues des fumées diesel, des feux de biomasse et des poussières désertiques de l\'harmattan.',
        '• Les centrales thermiques au fioul lourd (Bel-Air, Cap des Biches).',
        '2. Les impacts sur la santé humaine :',
        'Augmentation alarmante des maladies respiratoires aiguës et chroniques (asthme infantile, bronchite chronique obstructive, toux récurrente), allergies oculaires et risques accrus d\'accidents cardiovasculaires.'
      ]
    },
    {
      title: 'II. LA POLLUTION MARINE ET LE CAS EMBLÉMATIQUE DE LA BAIE DE HANN',
      content: [
        '1. La dégradation de la Baie de Hann :',
        'Autrefois l\'une des plus belles plages d\'Afrique de l\'Ouest, la Baie de Hann a été transformée en exutoire à ciel ouvert recevant quotidiennement des dizaines de milliers de mètres cubes d\'eaux usées domestiques non traitées et d\'effluents industriels toxiques (abattoirs, tanneries, usines chimiques, savonneries).',
        '2. Les conséquences environnementales et sanitaires :',
        '• Eutrophisation des eaux marines (prolifération d\'algues vertes asphyxiant les poissons par anoxie).',
        '• Contamination bactériologique (bactéries fécales) rendant la baignade hautement dangereuse.',
        '• Bioaccumulation de métaux lourds toxiques (plomb, mercure, chrome) dans les poissons et coquillages consommés par les populations riveraines.',
        '3. Le programme de dépollution de la Baie de Hann :',
        'Grand chantier environnemental national prévoyant la pose d\'un collecteur intercepteur d\'eaux usées le long du littoral et une station d\'épuration moderne pour restaurer la qualité des eaux.'
      ]
    },
    {
      title: 'III. LA GESTION DES DÉCHETS SOLIDES ET LA DÉCHARGE DE MBEUBEUSS',
      content: [
        '1. La situation critique de la décharge de Mbeubeuss à Malika :',
        'Créée en 1968 sur un ancien lac asséché, cette décharge reçoit plus de 2 000 tonnes d\'ordures ménagères par jour sans tri préalable ni imperméabilisation du fond. Elle génère :',
        '• Des lixiviats (jus de décharge hautement toxique) s\'infiltrant dans la nappe phréatique sous-jacente.',
        '• Des feux spontanés continus émettant des fumées chargées de dioxines et furanes cancérigènes.',
        '2. Les solutions durables du PROMOGED :',
        'Tri sélectif à la source, valorisation par compostage des déchets organiques et recyclage des plastiques.'
      ]
    }
  ]
};

export const LESSON_6_SVT_1ERE_L2: LessonContent = {
  id: 'svt-1ere-l2-lecon-6',
  number: '6',
  title: 'LEÇON L2-6 : PRÉSERVATION DES MANGROVES ET ÉCOSYSTÈMES CÔTIERS AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première L2',
  module: 'Thème 4 : Écologie urbaine et préservation des écosystèmes',
  level: 'Première L2 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Écologie des mangroves à palétuviers (Rhizophora et Avicennia) en Casamance et dans le delta du Saloum. Rôles écologiques, menaces et programmes de reforestation communautaire.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Pyramide Écologique des Biomasses et Flux d’Énergie en Milieu Sahélien',
    svgContent: SVG_SVT_1ERE_PYRAMIDE_ECOLOGIQUE
  },
  introduction: 'Le littoral du Sénégal abrite l\'un des écosystèmes marins et estuariens les plus productifs et originaux de la planète : la mangrove. Forêt amphibie poussant les pieds dans l\'eau salée le long des estuaires et bras de mer (les bolongs) de Casamance, du Sine-Saloum et de la basse vallée du fleuve Sénégal, la mangrove constitue une zone tampon capitale entre l\'océan et la terre ferme. Cet habitat abrite une biodiversité exceptionnelle d\'oiseaux migrateurs, de poissons, de mollusques et de crustacés tout en soutenant l\'économie traditionnelle des communautés insulaires sérères et diolas. Cette leçon étudie les adaptations morphologiques des palétuviers, les services écosystémiques de la mangrove et les initiatives de restauration.',
  conclusion: 'En conclusion, la mangrove est le poumon et le bouclier protecteur des côtes sénégalaises. Les campagnes citoyennes massives de reboisement menées en Casamance et au Sine-Saloum (plus de 100 millions de propagules de palétuviers replantées) illustrent l\'efficacité de la mobilisation communautaire pour inverser la dégradation écologique et protéger notre patrimoine naturel.',
  sections: [
    {
      title: 'I. LES ADAPTATIONS REMARQUABLES DES PALÉTUTIERS AU MILIEU SALIN',
      content: [
        'Végéter dans la vase côtière anoxique (dépourvue d\'O2) et sursalée exige des adaptations morphologiques et physiologiques exceptionnelles :',
        '1. Rhizophora mangle (Palétuvier rouge) :',
        '• Racines échasses arquées en arceau s\'ancrant solidement dans la vase molle et instable pour résister aux marées.',
        '• Lenticelles aérifères sur les racines permettant l\'oxygénation des tissus sous-marins.',
        '• Viviparité des graines : les graines germent directement sur l\'arbre mère en développant une longue tige rigide et pointue (la propagule). Lorsqu\'elle se détache, elle se plante comme un javelot dans la vase ou flotte dans l\'eau de mer sur de longues distances.',
        '2. Avicennia germinans (Palétuvier blanc) :',
        'Développe des pneumatophores : racines spécialisées verticales à géotropisme négatif qui émergent de la vase comme des tubas respiratoires pour capter l\'oxygène de l\'air à marée basse.'
      ]
    },
    {
      title: 'II. LES SERVICES ÉCOSYSTÉMIQUES VITAUX DE LA MANGROVE',
      content: [
        '• Nurserie biologique et frayère : les racines enchevêtrées offrent un abri protecteur indispensable contre les prédateurs marins pour la reproduction et la croissance des alevins de poissons (mulets, carpes rouges), des crevettes et des huîtres de palétuvier.',
        '• Bouclier côtier anti-érosion : amortit l\'énergie destructrice des houles et tempêtes marines et retient les sédiments vaseux, freinant l\'avancée de l\'érosion côtière.',
        '• Puits de carbone bleu géant : les mangroves stockent jusqu\'à 4 à 5 fois plus de carbone par hectare que les forêts tropicales terrestres dans leur sous-sol vaseux anoxique.',
        '• Valeur économique locale : cueillette traditionnelle durable des huîtres de mangrove par les femmes et pêche artisanale.'
      ]
    },
    {
      title: 'III. MENACES ET RESTAURATION COMMUNAUTAIRE',
      content: [
        '• Menaces : hypersalinisation des estuaires en période de sécheresse prolongée, coupe abusive du bois de palétuvier pour le fumage du poisson, et empiètement agricole et touristique.',
        '• Restauration écologique exemplaire au Sénégal : programmes de reboisement pilotés par des ONG locales (comme Oceanium) et les comités villageois, replantant des dizaines de milliers d\'hectares de mangrove pour revitaliser les stocks halieutiques du Sine-Saloum et de Casamance.'
      ]
    }
  ]
};
