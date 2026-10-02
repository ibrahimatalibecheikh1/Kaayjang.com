import { LessonContent } from './courses';
import {
  SVG_SVT_1ERE_PYRAMIDE_ECOLOGIQUE,
  SVG_SVT_1ERE_REGULATION_GLYCEMIE,
  SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
} from './diagrams_1ere_svt';

// =========================================================================
// SVT PREMIÈRE L1 — PROGRAMME COMPLET SÉRIE LITTÉRAIRE L1
// Conforme au Programme Officiel du Ministère de l'Éducation Nationale (Sénégal)
// =========================================================================

export const LESSON_1_SVT_1ERE_L1: LessonContent = {
  id: 'svt-1ere-l1-lecon-1',
  number: '1',
  title: 'LEÇON L1-1 : ALIMENTATION ÉQUILIBRÉE, NUTRITION ET MALNUTRITION AU SAHEL',
  subject: 'SVT',
  classLevel: 'Première L1',
  module: 'Thème 1 : Nutrition humaine et santé publique',
  level: 'Première L1 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Besoins énergétiques et qualitatifs de l\'organisme humain. Groupes d\'aliments, équilibre de la ration et étude épidémiologique de la malnutrition infantile au Sénégal.',
  introduction: 'L\'alimentation est un besoin biologique fondamental indispensable au maintien de la vie, au développement harmonieux du corps et à la prévention des maladies. En série L1, l\'étude de la nutrition articule les connaissances biologiques fondamentales avec les problématiques concrètes de santé publique et de développement socio-économique en Afrique de l\'Ouest. Une alimentation saine doit satisfaire à la fois les exigences quantitatives en calories et les besoins qualitatifs en nutriments indispensables. Cette leçon analyse la composition des aliments, les lois de la ration alimentaire équilibrée et les formes de malnutrition observées au Sénégal.',
  conclusion: 'En conclusion, la lutte contre la malnutrition au Sénégal requiert une approche multisectorielle associant sensibilisation nutritionnelle des mères, promotion de l\'allaitement maternel exclusif jusqu\'à 6 mois et valorisation des aliments traditionnels locaux riches en micronutriments (poudre de feuilles de baobab / lalo, graines de niébé, farine enrichie de mil).',
  sections: [
    {
      title: 'I. LES GROUPES D\'ALIMENTS ET LES CATÉGORIES DE NUTRIMENTS',
      content: [
        '1. La classification des aliments selon leur fonction dominante :',
        '• Aliments bâtisseurs ou plastiques : très riches en protéines et en calcium, indispensables à la croissance squelettique et musculaire et au renouvellement cellulaire (poissons, viandes, œufs, lait caillé, niébé).',
        '• Aliments énergétiques : riches en glucides et en lipides, fournissant les calories nécessaires au travail musculaire et à la thermorégulation (riz, mil, maïs, manioc, huile d\'arachide, beurre de karité).',
        '• Aliments protecteurs et fonctionnels : riches en vitamines, sels minéraux, antioxydants et fibres végétales facilitant le transit intestinal (fruits locaux comme mangues, ditsakh, ditakh, bouye, légumes frais des Niayes).',
        '2. Les macronutriments et micronutriments :',
        '• Glucides (17 kJ/g) et Lipides (38 kJ/g) : sources prioritaires d\'énergie.',
        '• Protides (17 kJ/g) : rôle structural plastique majeur (acides aminés essentiels).',
        '• Micronutriments essentiels : vitamines (A, B, C, D) et sels minéraux (fer prévenant l\'anémie, iode prévenant le goitre, calcium renforçant le squelette).'
      ]
    },
    {
      title: 'II. LES PRINCIPES D\'UNE RATION ALIMENTAIRE ÉQUILIBRÉE',
      content: [
        'Une ration alimentaire quotidienne doit respecter quatre règles fondamentales :',
        '1. Règle quantitative : l\'apport calorique doit couvrir exactement la dépense énergétique totale (métabolisme de base + activité physique), soit environ 2 200 à 2 700 kcal/jour selon l\'âge, le sexe et l\'activité.',
        '2. Règle de répartition énergétique : 50 à 55% de glucides, 30 à 35% de lipides, 12 à 15% de protéines.',
        '3. Règle de l\'équilibre protidique : apport suffisant en acides aminés essentiels par combinaison de sources complémentaires (ex. céréales + légumineuses : riz au poisson / thiéboudienne ou couscous de mil au niébé).',
        '4. Règle de l\'hydratation : au moins 2 à 2,5 litres d\'eau potable par jour en climat sahélien chaud.'
      ]
    },
    {
      title: 'III. LES PATHOLOGIES PAR CARENCE OU PAR EXCÈS AU SÉNÉGAL',
      content: [
        '• Le Kwashiorkor : malnutrition protéique sévère de l\'enfant sevré recevant une bouillie pauvre en protéines (œdèmes, fonte musculaire, apathie, cheveux décolorés).',
        '• Le Marasme : sous-nutrition globale (carence à la fois en calories et en protéines), l\'enfant est émacié à l\'extrême.',
        '• L\'anémie nutritionnelle ferriprive : très fréquente chez les femmes enceintes et les enfants, prévenue par la supplémentation en fer et acide folique.',
        '• La surnutrition urbaine : explosion de l\'obésité, du diabète de type 2 et de l\'hypertension dans les grandes métropoles (Dakar, Thiès, Kaolack) liée à la sédentarité et à la consommation d\'aliments ultra-transformés, trop gras et trop sucrés.'
      ]
    }
  ]
};

export const LESSON_2_SVT_1ERE_L1: LessonContent = {
  id: 'svt-1ere-l1-lecon-2',
  number: '2',
  title: 'LEÇON L1-2 : LES MALADIES MÉTABOLIQUES ET CARDIOVASCULAIRES',
  subject: 'SVT',
  classLevel: 'Première L1',
  module: 'Thème 1 : Nutrition humaine et santé publique',
  level: 'Première L1 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Étiologie, mécanismes physiopathologiques et prévention des maladies non transmissibles : diabète sucré, hypertension artérielle (HTA), obésité et athérosclérose.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Régulation de la Glycémie Sanguine et Équilibre Métabolique',
    svgContent: SVG_SVT_1ERE_REGULATION_GLYCEMIE
  },
  diagram: {
    title: 'Boucle Homéostatique de la Glycémie',
    svgContent: SVG_SVT_1ERE_REGULATION_GLYCEMIE
  },
  introduction: 'Longtemps dominée par les maladies infectieuses et transmissibles, l\'Afrique subsaharienne fait face aujourd\'hui à une véritable transition épidémiologique marquée par l\'augmentation exponentielle des maladies non transmissibles (MNT), en particulier l\'hypertension artérielle, le diabète sucré et les accidents vasculaires cérébraux (AVC). Souvent qualifiées de « tueurs silencieux », ces pathologies métaboliques et cardiovasculaires se développent de manière insidieuse pendant des années sans symptôme apparent avant d\'entraîner des complications gravissimes. Cette leçon étudie les déterminants biologiques de la tension artérielle, les mécanismes de l\'athérosclérose et les mesures d\'hygiène de vie indispensables à leur prévention.',
  conclusion: 'En conclusion, les maladies cardiovasculaires et le diabète ne sont pas des fatalités liées à la modernité, mais des affections largement évitables. La prévention repose sur l\'activité physique régulière (30 minutes de marche rapide quotidienne), la réduction de la consommation de sel (réduction des bouillons cubes industriels), l\'arrêt du tabac et le dépistage précoce de la pression artérielle et de la glycémie.',
  sections: [
    {
      title: 'I. L\'HYPERTENSION ARTÉRIELLE (HTA) ET LA CIRCULATION SANGUINE',
      content: [
        '1. La pression artérielle normale :',
        'La pression artérielle est la force exercée par le sang sur la paroi des artères. Elle s\'exprime par deux chiffres :',
        '• La pression systolique (PAS) : pression maximale lors de la contraction du ventricule gauche (systole ventriculaire, normale < 140 mmHg ou 14 cmHg).',
        '• La pression diastolique (PAD) : pression minimale lors du relâchement cardiaque (diastole, normale < 90 mmHg ou 9 cmHg).',
        '2. Définition et causes de l\'HTA :',
        'L\'hypertension est définie par une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg mesurée à plusieurs reprises au repos. Facteurs de risque majeurs : consommation excessive de sel alimentaire, obésité abdominale, sédentarité, stress chronique, vieillissement des parois artérielles et facteurs génétiques.',
        '3. Complications majeures de l\'HTA :',
        '• Accidents vasculaires cérébraux (AVC ischémiques par obstruction artérielle ou hémorragiques par rupture d\'anévrisme cérébral).',
        '• Insuffisance cardiaque par fatigue du myocarde et infarctus du myocarde.',
        '• Insuffisance rénale chronique par destruction des néphrons rénaux.'
      ]
    },
    {
      title: 'II. L\'ATHÉROSCLÉROSE : FORMATION DES PLAQUES D\'ATHÉROME',
      content: [
        'L\'athérosclérose est une maladie dégénérative de l\'intima des grosses et moyennes artères :',
        '• Dépôt lipidique : accumulation de cholestérol LDL (le « mauvais » cholestérol oxydé) sous l\'endothélium vasculaire.',
        '• Réaction inflammatoire : recrutement de macrophages qui se gorgent de lipides pour devenir des cellules spumeuses.',
        '• Formation de la plaque d\'athérome : développement d\'une chape fibreuse et calcification progressive qui réduit le diamètre de la lumière artérielle (sténose) et rigidifie l\'artère.',
        '• Complication aiguë (la thrombose) : la rupture de la plaque d\'athérome libère des facteurs procoagulants, formant un caillot de sang (thrombus) qui obstrue brutalement l\'artère coronaire (crise cardiaque / infarctus) ou cérébrale (AVC).'
      ]
    },
    {
      title: 'III. STRATÉGIES DE PRÉVENTION PRIMAIRE ET HYGIÈNE DE VIE',
      content: [
        '• Alimentation cardioprotectrice : réduction drastique du sel et des acides gras saturés et trans, augmentation des fibres et légumes verts.',
        '• Lutte contre le tabagisme : la nicotine accélère la fréquence cardiaque et favorise les spasmes artériels.',
        '• Pratique sportive régulière : améliore l\'élasticité artérielle et réduit la résistance périphérique.',
        '• Campagnes nationales de dépistage gratuit organisées par le Ministère de la Santé au Sénégal.'
      ]
    }
  ]
};

export const LESSON_3_SVT_1ERE_L1: LessonContent = {
  id: 'svt-1ere-l1-lecon-3',
  number: '3',
  title: 'LEÇON L1-3 : GÉNÉTIQUE HUMAINE ET ÉTUDE DE LA DRÉPANOCYTOSE AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première L1',
  module: 'Thème 2 : Génétique humaine et hérédité',
  level: 'Première L1 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Principes de l\'hérédité humaine, arbres généalogiques (pedigrees), transmission des groupes sanguins ABO et Rhésus. Mode de transmission autosomique récessif de la drépanocytose et conseil génétique.',
  image: {
    caption: 'Figure Scientifique Obligatoire : Transmission Génétique, Chromosomes et Cycle Cellulaire',
    svgContent: SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
  },
  diagram: {
    title: 'Génétique Humaine et Chromosomes',
    svgContent: SVG_SVT_1ERE_MITOSE_CYCLE_CELLULAIRE
  },
  introduction: 'L\'hérédité humaine est l\'étude de la transmission des caractères normaux et pathologiques d\'une génération à la suivante. En génétique humaine, les croisements dirigés étant évidemment impossibles pour des raisons éthiques évidentes, les généticiens étudient l\'histoire familiale à travers la construction d\'arbres généalogiques (ou pedigrees). La drépanocytose (hémoglobinose S) représente la maladie génétique la plus fréquente au Sénégal et en Afrique subsaharienne. Cette leçon aborde les règles de transmission génétique à travers les groupes sanguins et analyse en détail la transmission héréditaire de la drépanocytose et l\'importance cruciale du conseil génétique prénuptial.',
  conclusion: 'En conclusion, la génétique humaine permet de prédire les risques de transmission des affections héréditaires. Le dépistage prénuptial systématique de l\'hémoglobine par électrophorèse (détermination du statut AA, AS ou SS) constitue l\'arme préventive essentielle pour éradiquer les naissances d\'enfants atteints de formes homozygotes SS sévères au Sénégal.',
  sections: [
    {
      title: 'I. LES GROUPES SANGUINS HUMAINS (SYSTÈME ABO ET FACTEUR RHÉSUS)',
      content: [
        '1. Le système ABO (polyallélie et codominance) :',
        'Le groupe sanguin est gouverné par un gène autosomal situé sur le chromosome 9 présentant 3 allèles différents :',
        '• L\'allèle A : code l\'antigène A à la surface des hématies.',
        '• L\'allèle B : code l\'antigène B.',
        '• L\'allèle O : récessif, ne code aucun antigène fonctionnel.',
        'Relations de dominance : les allèles A et B sont codominants entre eux et dominent tous deux l\'allèle O récessif. Ainsi, un sujet de groupe [AB] possède le génotype A//B ; un sujet de groupe [A] est soit A//A soit A//O ; un sujet [B] est B//B ou B//O ; un sujet [O] est obligatoirement O//O.',
        '2. Le système Rhésus (Rh+ / Rh-) :',
        'L\'allèle Rh+ (présence de l\'antigène D) domine l\'allèle Rh- (absence d\'antigène). L\'incompatibilité rhésus fœto-maternelle (mère Rh- portant un enfant Rh+) exige une prévention par injection d\'anticorps anti-D à la mère lors de l\'accouchement.'
      ]
    },
    {
      title: 'II. TRANSMISSION HÉRÉDITAIRE DE LA DRÉPANOCYTOSE',
      content: [
        '1. Mode de transmission :',
        'La drépanocytose est une maladie génétique autosomique récessive gouvernée par le gène de la globine bêta sur le chromosome 11 :',
        '• L\'allèle normal HbA code l\'hémoglobine adulte normale.',
        '• L\'allèle muté HbS code l\'hémoglobine anormale drépanocytaire.',
        '2. Les génotypes et phénotypes correspondants :',
        '• Individu homozygote AA : sujet sain indemne.',
        '• Individu hétérozygote AS : porteur sain du trait drépanocytaire. Il ne développe pas la maladie dans les conditions ordinaires et présente une résistance naturelle protectrice remarquable contre les formes graves de paludisme (avantage sélectif en zone d\'endémie palustre au Sénégal).',
        '• Individu homozygote SS : sujet drépanocytaire malade atteint d\'anémie falciforme sévère, sujet aux crises vaso-occlusives douloureuses et aux infections.'
      ]
    },
    {
      title: 'III. L\'ÉCHIQUIER DE CROISEMENT ET LE CONSEIL GÉNÉTIQUE',
      content: [
        'Lorsqu\'un couple est composé de deux porteurs sains hétérozygotes (Père AS × Mère AS) :',
        '• Gamètes paternels : 50% A et 50% S.',
        '• Gamètes maternels : 50% A et 50% S.',
        'Échiquier de croisement à chaque grossesse :',
        '• 25% (1/4) de probabilité d\'avoir un enfant sain non porteur (AA).',
        '• 50% (2/4) de probabilité d\'avoir un enfant porteur sain (AS).',
        '• 25% (1/4) de probabilité d\'avoir un enfant malade atteint de drépanocytose (SS).',
        'Rôle du conseil génétique au Sénégal :',
        'L\'électrophorèse de l\'hémoglobine avant le mariage permet aux couples de connaître leur statut génétique et d\'éviter l\'union entre deux porteurs AS pour protéger la santé de leurs futurs enfants.'
      ]
    }
  ]
};

export const LESSON_4_SVT_1ERE_L1: LessonContent = {
  id: 'svt-1ere-l1-lecon-4',
  number: '4',
  title: 'LEÇON L1-4 : ÉCOSYSTÈMES ET ÉQUILIBRES NATURELS AU SAHEL',
  subject: 'SVT',
  classLevel: 'Première L1',
  module: 'Thème 3 : Écologie, environnement et développement durable',
  level: 'Première L1 (Série Littéraire)',
  readTime: '40 min de lecture approfondie',
  description: 'Organisation de la biosphère : biotope, biocénose et écosystème. Réseaux trophiques, pyramides écologiques, flux d\'énergie ouvert et cycle fermé de la matière dans les écosystèmes sahéliens.',
  introduction: 'L\'écologie est la science qui étudie les conditions d\'existence des êtres vivants et les interactions complexes de toute nature qui s\'établissent entre eux d\'une part, et avec leur milieu physico-chimique d\'autre part. La zone sahélienne du Sénégal, caractérisée par une longue saison sèche de neuf mois et une courte saison des pluies (hivernage), abrite des écosystèmes d\'une grande fragilité écologique mais d\'une étonnante capacité d\'adaptation. La circulation des nutriments et le transfert de l\'énergie à travers les différents niveaux trophiques régissent le fonctionnement harmonieux de ces systèmes vivants. Cette leçon explore la structure fonctionnelle des écosystèmes et analyse la pyramide écologique et le flux d\'énergie.',
  conclusion: 'En conclusion, un écosystème naturel fonctionne selon une règle fondamentale : la matière circule selon un cycle fermé entretenu par les décomposeurs, tandis que l\'énergie circule selon un flux ouvert et unidirectionnel avec une perte thermique continue de 90% à chaque échelon trophique. Toute perturbation brutale de la biocénose (comme le braconnage ou la déforestation) rompt cet équilibre dynamique fragile.',
  image: {
    svgContent: SVG_SVT_1ERE_PYRAMIDE_ECOLOGIQUE,
    alt: 'Pyramide des biomasses et flux d\'énergie dans un écosystème sahélien',
    caption: 'Figure 8 : Pyramide écologique et règle des 10% de Lindeman : Producteurs primaires (Acacia), herbivores et carnivores au Sénégal'
  },
  diagram: {
    title: 'Pyramide Écologique et Réseau Trophique',
    svgContent: SVG_SVT_1ERE_PYRAMIDE_ECOLOGIQUE
  },
  sections: [
    {
      title: 'I. LES CONCEPTS CLÉS DE L\'ÉCOLOGIE MODERNE',
      content: [
        '1. L\'Écosystème comme unité fonctionnelle fondamentale :',
        'Écosystème = Biotope (milieu de vie physico-chimique : sol, climat, eau, température, lumière) + Biocénose (ensemble des populations vivantes végétales, animales et microbiennes interagissant dans ce milieu).',
        '2. Les facteurs écologiques :',
        '• Facteurs abiotiques : paramètres physico-chimiques (pluviométrie, insolation, salinité des estuaires, type de sol sableux dior ou argileux deck).',
        '• Facteurs biotiques : interactions entre organismes vivants (prédation, compétition pour l\'eau et la lumière, symbiose comme la fixation d\'azote par les bactéries Rhizobium sur les racines d\'arachide).'
      ]
    },
    {
      title: 'II. LES NIVEAUX TROPHIQUES ET LES RÉSEAUX ALIMENTAIRES',
      content: [
        'Dans un écosystème sahélien, les organismes sont classés selon leur mode de nutrition en 3 niveaux fonctionnels :',
        '1. Les Producteurs Primaires (PP - Autotrophes) :',
        'Végétaux chlorophylliens (Acacia senegal produisant la gomme arabique, Balanites aegyptiaca, graminées fourragères) qui synthétisent leur propre matière organique par photosynthèse à partir d\'énergie solaire et de CO2.',
        '2. Les Consommateurs (Hétérotrophes) :',
        '• Consommateurs primaires (C1 - Herbivores) : bétail zébu, moutons, gazelles, rongeurs, criquets consommant la biomasse végétale.',
        '• Consommateurs secondaires (C2 - Carnivores) : chacals, rapaces, serpents se nourrissant d\'herbivores.',
        '• Consommateurs tertiaires (C3 - Super-prédateurs) : hyènes, léopards et lions du Parc National du Niokolo-Koba.',
        '3. Les Décomposeurs et transformateurs :',
        'Termites, coléoptères coprophages, champignons et bactéries du sol qui minéralisent la nécromasse (déjections, cadavres, feuilles mortes) en nitrates, phosphates et sels minéraux recyclables par les racines.'
      ]
    },
    {
      title: 'III. PYRAMIDES ÉCOLOGIQUES ET FLUX D\'ÉNERGIE (RÈGLE DES 10%)',
      content: [
        '1. La pyramide des biomasses :',
        'La quantité de matière vivante (biomasse) diminue de façon spectaculaire à chaque palier trophique successif :',
        'Pour 10 000 kg d\'herbe sahélienne produite, l\'écosystème ne peut soutenir qu\'environ 1 000 kg d\'herbivores, qui eux-mêmes ne supportent que 100 kg de carnivores et à peine 10 kg de super-prédateurs.',
        '2. La règle des 10% de Lindeman et le flux d\'énergie :',
        'Le rendement écologique moyen de transfert d\'énergie d\'un niveau trophique au suivant n\'est que d\'environ 10%. Les 90% restants sont irrémédiablement dissipés sous forme de chaleur par la respiration cellulaire, le travail mécanique et les excrétats. L\'énergie ne se recycle jamais : elle s\'échappe vers l\'espace, imposant un apport solaire permanent.'
      ]
    }
  ]
};

export const LESSON_5_SVT_1ERE_L1: LessonContent = {
  id: 'svt-1ere-l1-lecon-5',
  number: '5',
  title: 'LEÇON L1-5 : LA DÉSERTIFICATION ET LA SAUVEGARDE DE LA BIODIVERSITÉ AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première L1',
  module: 'Thème 3 : Écologie, environnement et développement durable',
  level: 'Première L1 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Causes climatiques et anthropiques de la désertification dans le Ferlo et le bassin arachidier. Érosion éolienne et hydrique. L\'initiative panafricaine de la Grande Muraille Verte au Sénégal.',
  introduction: 'Situé à la pointe occidentale du continent africain, à la lisière sud du Sahara, le Sénégal est l\'un des pays les plus directement exposés au péril écologique de la désertification et de la dégradation des terres. La désertification ne signifie pas simplement l\'avancée mécanique des dunes du désert, mais la dégradation graduelle et continue du potentiel productif biologique des sols sous l\'effet conjugué des aléas climatiques (sécheresses récurrentes) et des pressions anthropiques excessives (surpâturage, déboisement pour le charbon de bois, feux de brousse). Face à ce fléau, le Sénégal a pris un leadership continental dans le projet phare de la Grande Muraille Verte. Cette leçon analyse les mécanismes de dégradation des terres sahéliennes et les stratégies de restauration agro-écologique.',
  conclusion: 'En conclusion, la lutte contre la désertification au Sénégal n\'est pas seulement un impératif écologique pour la biodiversité, mais une condition de survie économique et de sécurité alimentaire pour les communautés rurales. L\'agroforesterie combinant régénération naturelle assistée (RNA) d\'arbres fertilisants (Faidherbia albida / kad) et cultures vivrières offre une solution durable et pérenne.',
  sections: [
    {
      title: 'I. LES CAUSES MAJEURES DE LA DÉGRADATION DES SOLS AU SÉNÉGAL',
      content: [
        '1. Facteurs climatiques :',
        '• Raréfaction et irrégularité temporelle des pluies au cours des dernières décennies.',
        '• Hausse des températures moyennes accentuant l\'évapotranspiration potentielle.',
        '2. Facteurs anthropiques déterminants :',
        '• Le déboisement massif pour la production de charbon de bois destiné aux centres urbains.',
        '• Le surpâturage autour des forages pastoraux dans le Ferlo (piétinement du bétail compactant les sols et détruisant le tapis herbacé).',
        '• Les feux de brousse répétés dévastant chaque année des centaines de milliers d\'hectares de savanes arbustives.',
        '• La monoculture arachidière intensive sans jachère épuisant les éléments nutritifs des sols ferrugineux tropicaux (sols dior).'
      ]
    },
    {
      title: 'II. LES MÉCANISMES D\'ÉROSION DES SOLS',
      content: [
        'Une fois le couvert végétal détruit, le sol meuble est livré aux agents d\'érosion :',
        '• Érosion éolienne : l\'harmattan (vent sec du nord-est) emporte les particules fines et fertiles d\'argile et d\'humus, laissant subsister des sables stériles et provoquant l\'ensablement des cuvettes maraîchères des Niayes.',
        '• Érosion hydrique : lors des premières pluies d\'hivernage orageuses et brutales, les gouttes d\'eau compactent la surface dénudée (battance) et créent un ruissellement superficiel torrentiel qui creuse des ravines profondes et décapite la terre arable.',
        '• Salinisation des terres : remontée capillaire de sel marin stérilisant les rizières traditionnelles dans les vallées de Casamance et du Sine-Saloum (formation de tannes stériles).'
      ]
    },
    {
      title: 'III. LA GRANDE MURAILLE VERTE ET LES SOLUTIONS AGRO-ÉCOLOGIQUES',
      content: [
        '1. Le tracé de la Grande Muraille Verte au Sénégal :',
        'Bande de reboisement et de développement intégré large de 15 km traversant le nord du pays sur 545 km, de l\'océan Atlantique à la frontière malienne (de Saint-Louis à Bakel en passant par Dahra, Linguère et Ranérou).',
        '2. Choix d\'espèces arborées endémiques adaptées à l\'aridité :',
        '• Acacia senegal : fixe l\'azote de l\'air, résiste à la sécheresse et produit la précieuse gomme arabique.',
        '• Balanites aegyptiaca (dattier du désert) : feuilles et fruits nutritifs riches en huile.',
        '• Ziziphus mauritiana (jujubier) et Moringa oleifera.',
        '3. Les jardins polyvalents communautaires :',
        'Création de périmètres maraîchers irrigués gérés par des groupements de femmes rurales, combinant cultures fruitières et maraîchères pour assurer l\'autosuffisance alimentaire et freiner l\'exode rural.'
      ]
    }
  ]
};

export const LESSON_6_SVT_1ERE_L1: LessonContent = {
  id: 'svt-1ere-l1-lecon-6',
  number: '6',
  title: 'LEÇON L1-6 : LA GESTION DURABLE DE L\'EAU ET L\'ASSAINISSEMENT AU SÉNÉGAL',
  subject: 'SVT',
  classLevel: 'Première L1',
  module: 'Thème 3 : Écologie, environnement et développement durable',
  level: 'Première L1 (Série Littéraire)',
  readTime: '35 min de lecture approfondie',
  description: 'Cycle global de l\'eau, ressources hydriques de surface et souterraines du Sénégal. Problématique de l\'accès à l\'eau potable, pollutions et enjeux d\'assainissement urbain et rural.',
  introduction: 'L\'eau douce est une ressource naturelle vitale, finie et vulnérable, indispensable à la santé humaine, à l\'agriculture irriguée, à l\'énergie et à l\'industrie. Au Sénégal, la disponibilité en eau est caractérisée par une forte dissymétrie géographique et saisonnière : le sud du pays bénéficie d\'abondantes précipitations et de fleuves pérennes (Casamance, Gambie), tandis que le centre et le nord sahélien subissent un déficit hydrique chronique compensé par l\'exploitation intensive des eaux souterraines. Parallèlement, l\'urbanisation galopante pose un défi titanesque d\'assainissement et de traitement des eaux usées. Cette leçon examine la situation hydrologique du Sénégal, les risques de pollution et les voies de gestion intégrée des ressources en eau (GIRE).',
  conclusion: 'En conclusion, l\'eau est un bien commun universel dont la préservation conditionne l\'avenir socio-économique du Sénégal. L\'atteinte de l\'Objectif de Développement Durable n°6 (ODD 6 : eau propre et assainissement pour tous) exige la modernisation des réseaux d\'assainissement, la protection rigoureuse des zones de captage et le recyclage des eaux usées traitées pour l\'arrosage urbain.',
  sections: [
    {
      title: 'I. LE POTENTIEL EN EAU DU SÉNÉGAL (EAUX DE SURFACE ET SOUTERRAINES)',
      content: [
        '1. Les eaux de surface :',
        '• Le fleuve Sénégal (1 750 km) : artère vitale au nord, régulée par les barrages de Manantali (Mali, production hydroélectrique) et de Diama (Sénégal, barrage anti-sel empêchant la remontée de l\'eau de mer et sécurisant le lac de Guiers).',
        '• Le Lac de Guiers : principale réserve d\'eau douce de surface du pays (environ 600 millions de m³), relié à Dakar par les usines de potabilisation de Ngnith et Keur Momar Sarr (KMS 1, KMS 2 et KMS 3) fournissant la majorité de l\'eau potable de la capitale.',
        '• Les fleuves Gambie et Casamance au sud.',
        '2. Les eaux souterraines :',
        '• Nappe phréatique quaternaire (Thiaroye, sables littoraux).',
        '• Grande nappe captive profonde du Maestrichtien couvrant le pays.'
      ]
    },
    {
      title: 'II. LES MENACES SUR LES RESSOURCES EN EAU',
      content: [
        '• Surexploitation des nappes phréatiques : le pompage excessif dans la presqu\'île de Dakar entraîne l\'intrusion biseautée d\'eau de mer saline qui contamine irréversiblement les forages d\'eau douce.',
        '• Pollution par les nitrates et pesticides : infiltration des engrais chimiques du maraîchage intensif des Niayes et des rejets d\'eaux usées non traitées des fosses septiques vers la nappe de Thiaroye (risques de méthémoglobinémie chez le nourrisson).',
        '• Pollution industrielle et urbaine de la Baie de Hann à Dakar par les rejets d\'usines sans station d\'épuration préalable.'
      ]
    },
    {
      title: 'III. L\'ASSAINISSEMENT ET LE TRAITEMENT DES EAUX USÉES',
      content: [
        '1. L\'assainissement autonome versus collectif :',
        'Dans les villes secondaires et zones rurales, l\'assainissement est très majoritairement autonome (latrines et fosses septiques nécessitant des vidanges hygiéniques). À Dakar, l\'Office National de l\'Assainissement du Sénégal (ONAS) gère le réseau d\'égouts collectifs.',
        '2. Les étapes d\'une station d\'épuration des eaux usées (STEP de Cambérène) :',
        '• Prétraitement : dégrillage (rétention des déchets solides volumineux), dessablage et déshuilage.',
        '• Traitement primaire : décantation physique des boues sédimentables.',
        '• Traitement secondaire biologique : bassins d\'aération où des bactéries aérobies digèrent la pollution organique dissoute.',
        '• Clarification finale et désinfection avant rejet contrôlé dans l\'océan ou réutilisation pour les espaces verts.'
      ]
    }
  ]
};
