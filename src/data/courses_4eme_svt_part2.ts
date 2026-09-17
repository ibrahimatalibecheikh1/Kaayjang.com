import { LessonContent } from './courses';

// =========================================================================
// LIVRET DE COURS OFFICIEL DE SVT - CLASSE DE 4ÈME
// LEÇONS 6 À 10 : REPRODUCTION HUMAINE, SANTÉ & LES SOLS
// Texte intégral fidèle au livret de cours, sans résumé ni altération
// =========================================================================

// -------------------------------------------------------------------------
// LEÇON 6 : ANATOMIE ET PHYSIOLOGIE DES APPAREILS REPRODUCTEURS
// -------------------------------------------------------------------------
export const LESSON_6_SVT_4EME: LessonContent = {
  id: 'svt-4eme-lecon-6',
  number: 'LEÇON 6 (4ÈME)',
  title: 'ANATOMIE ET PHYSIOLOGIE DES APPAREILS REPRODUCTEURS',
  subject: 'SVT',
  classLevel: '4ème',
  introduction: `La reproduction assure la continuité de l'espèce humaine à travers les générations. Ce processus devient fonctionnel à la puberté, période de transitions physiques, hormonales et psychologiques intenses marquant le passage de l'enfance à l'âge adulte. Cette leçon détaille l'anatomie et le rôle physiologique des organes génitaux masculins et féminins mis en place pour permettre la genèse de nouvelles vies.`,
  fullText: `PROGRAMME OFFICIEL DE SCIENCES DE LA VIE ET DE LA TERRE (4ème)
LIVRET DE COURS EXHAUSTIF - CLASSE DE 4ème
LEÇON 6 : ANATOMIE ET PHYSIOLOGIE DES APPAREILS REPRODUCTEURS

INTRODUCTION :
La reproduction assure la continuité de l'espèce humaine à travers les générations. Ce processus devient fonctionnel à la puberté, période de transitions physiques, hormonales et psychologiques intenses marquant le passage de l'enfance à l'âge adulte. Cette leçon détaille l'anatomie et le rôle physiologique des organes génitaux masculins et féminins mis en place pour permettre la genèse de nouvelles vies.

I. LA PUBERTÉ ET LES CARACTÈRES SEXUELS :
La puberté est déclenchée par des hormones émises par le cerveau (l'axe hypothalamo-hypophysaire) qui stimulent les gonades (testicules chez le garçon, ovaires chez la fille). Elle se manifeste par l'apparition des caractères sexuels secondaires (développement des seins, élargissement du bassin, apparition des règles chez la fille ; mue de la voix, développement musculaire, pilosité faciale chez le garçon) et par le développement des caractères sexuels primaires (les organes génitaux) qui deviennent alors fonctionnels.

II. L'APPAREIL REPRODUCTEUR MASCULIN :
L'appareil masculin est conçu pour produire et délivrer les gamètes mâles, les spermatozoïdes. Les testicules, situés à l'extérieur dans le scrotum, fabriquent les spermatozoïdes de façon continue de la puberté jusqu'à la fin de la vie, ainsi que la testostérone (hormone mâle). Les spermatozoïdes transitent par l'épididyme pour mûrir, puis empruntent les canaux déférents. Les glandes annexes (vésicules séminales et prostate) sécrètent le liquide séminal riche en nutriments. Le mélange forme le sperme, qui est éjecté par l'urètre traversant le pénis lors de l'éjaculation.

III. L'APPAREIL REPRODUCTEUR FÉMININ :
Contrairement à l'homme, l'appareil féminin a une activité cyclique et interne. Les ovaires possèdent dès la naissance un stock défini de futurs ovocytes. Chaque mois, un ovaire libère un ovule mûr dans les trompes de Fallope : c'est l'ovulation. L'utérus est un organe musculaire creux tapissé d'une muqueuse (l'endomètre) conçue pour accueillir un éventuel embryon. Il se prolonge par le col de l'utérus, le vagin (organe d'accouplement) et la vulve externe.

CONCLUSION :
L'acquisition de la fonction de reproduction repose sur une coordination hormonale précise. La compréhension de l'anatomie et de la physiologie sexuelle constitue la base fondamentale pour aborder la santé reproductive et les notions de responsabilité liée à la vie sexuelle.`,
  sections: [
    {
      title: 'I. La puberté et le développement des caractères sexuels',
      subsections: [
        {
          subtitle: '1. Contrôle neuro-hormonal et transformations morphologiques',
          content: [
            'L\'axe hypothalamo-hypophysaire sécrète la GnRH qui stimule la sécrétion de LH et FSH par l\'hypophyse.',
            'Caractères sexuels primaires : maturation et entrée en activité des gonades (testicules et ovaires) et des voies génitales.',
            'Caractères sexuels secondaires chez la fille : développement des seins, élargissement du bassin, pilosité pubienne et axillaire, apparition des premières règles (ménarche).',
            'Caractères sexuels secondaires chez le garçon : élargissement des épaules, mue de la voix, pilosité faciale et corporelle, premières éjaculations.'
          ]
        }
      ]
    },
    {
      title: 'II. Organisation et physiologie de l\'appareil génital masculin',
      subsections: [
        {
          subtitle: '1. Testicules, voies spermatiques et glandes annexes',
          content: [
            'Les testicules logés dans le scrotum maintiennent une température optimale de 34-35°C indispensable à la spermatogenèse.',
            'Production continue de spermatozoïdes dans les tubes séminifères et sécrétion de testostérone par les cellules interstitielles de Leydig.',
            'Maturation des spermatozoïdes dans l\'épididyme et transit via les canaux déférents.',
            'Vésicules séminales et prostate : production du liquide séminal nourrissant et protégeant les spermatozoïdes pour constituer le sperme.',
            'Pénis et urètre : érection réflexe et éjaculation délivrant le sperme.'
          ]
        }
      ]
    },
    {
      title: 'III. Organisation et physiologie de l\'appareil génital féminin',
      subsections: [
        {
          subtitle: '1. Ovaires, trompes, utérus et cycle interne',
          content: [
            'Deux ovaires contenant un stock fixe de follicules primordiaux dès la naissance.',
            'Ovulation mensuelle : émission d\'un ovule capté par le pavillon de la trompe de Fallope.',
            'L\'utérus : myomètre (muscle puissant) et endomètre (muqueuse vasculaire préparée à la nidation).',
            'Col de l\'utérus, vagin et vulve assurant l\'accouplement et le passage lors de l\'accouchement.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'COMPARAISON FONCTIONNELLE DES APPAREILS REPRODUCTEURS',
    root: 'APPAREILS GÉNITAUX',
    branches: [
      {
        name: 'Appareil Masculin',
        subtitle: 'Production continue',
        items: [
          'Testicules : spermatozoïdes + testostérone',
          'Épididyme & Canaux déférents (transit)',
          'Prostate & Vésicules : liquide séminal',
          'Pénis & Éjaculation via l\'urètre'
        ]
      },
      {
        name: 'Appareil Féminin',
        subtitle: 'Fonctionnement cyclique',
        items: [
          'Ovaires : stock d\'ovules + œstrogènes/progestérone',
          'Trompes de Fallope : lieu de la fécondation',
          'Utérus & Endomètre : nidation embryonnaire',
          'Vagin & Vulve externe'
        ]
      },
      {
        name: 'Puberté',
        subtitle: 'Maturité sexuelle',
        items: [
          'Activation cérébrale hypothalamo-hypophysaire',
          'Caractères sexuels primaires (organes fonctionnels)',
          'Caractères sexuels secondaires (morphologie adulte)'
        ]
      }
    ]
  },
  conclusion: `L'acquisition de la fonction de reproduction repose sur une coordination hormonale précise. La compréhension de l'anatomie et de la physiologie sexuelle constitue la base fondamentale pour aborder la santé reproductive et les notions de responsabilité liée à la vie sexuelle.`
};

// -------------------------------------------------------------------------
// LEÇON 7 : CYCLES SEXUELS CHEZ LA FEMME
// -------------------------------------------------------------------------
export const LESSON_7_SVT_4EME: LessonContent = {
  id: 'svt-4eme-lecon-7',
  number: 'LEÇON 7 (4ÈME)',
  title: 'CYCLES SEXUELS CHEZ LA FEMME',
  subject: 'SVT',
  classLevel: '4ème',
  introduction: `À partir de la puberté et jusqu'à la ménopause, l'appareil reproducteur de la femme fonctionne de manière hautement cyclique, selon un rythme moyen de 28 jours. Ces variations physiologiques régulières préparent l'organisme féminin à une éventuelle grossesse. Cette leçon met en lumière le fonctionnement synchrone du cycle ovarien et du cycle utérin, orchestré par les hormones sexuelles.`,
  fullText: `PROGRAMME OFFICIEL DE SCIENCES DE LA VIE ET DE LA TERRE (4ème)
LIVRET DE COURS EXHAUSTIF - CLASSE DE 4ème
LEÇON 7 : CYCLES SEXUELS CHEZ LA FEMME

INTRODUCTION :
À partir de la puberté et jusqu'à la ménopause, l'appareil reproducteur de la femme fonctionne de manière hautement cyclique, selon un rythme moyen de 28 jours. Ces variations physiologiques régulières préparent l'organisme féminin à une éventuelle grossesse. Cette leçon met en lumière le fonctionnement synchrone du cycle ovarien et du cycle utérin, orchestré par les hormones sexuelles.

I. LE CYCLE OVARIEN : DE LA CROISSANCE FOLLICULAIRE AU CORPS JAUNE :
Le cycle ovarien dure en moyenne 28 jours et se divise en trois phases bien distinctes :
1. La phase folliculaire (du jour 1 au jour 13) : Plusieurs follicules ovariens contenant chacun un ovule immature commencent leur croissance, mais un seul arrive à maturité totale (le follicule de De Graaf). Ce follicule sécrète des œstrogènes.
2. L'ovulation (le jour 14 dans un cycle régulier) : Sous l'effet d'un pic hormonal cérébral, le follicule mûr rompt et expulse l'ovule dans la trompe de Fallope correspondante.
3. La phase lutéale (du jour 15 au jour 28) : Le reste du follicule rompu se transforme dans l'ovaire en une structure temporaire appelée corps jaune. Ce dernier sécrète de la progestérone et des œstrogènes pour préparer l'utérus.

REPRÉSENTATION CHRONOLOGIQUE DU CYCLE SEXUEL DE 28 JOURS :
J 1 ------------------- J 14 ------------------- J 28
[ Phase Folliculaire ]  [ OVULATION ]  [ Phase Lutéale ]

II. LE CYCLE UTÉRIN ET L'ORIGINE DES RÈGLES :
Le cycle utérin affecte la muqueuse interne de l'utérus (l'endomètre). Le premier jour du cycle correspond à l'apparition des règles (menstruations). Les règles durent de 3 à 5 jours et traduisent la destruction et l'élimination de la couche superficielle de la muqueuse utérine, devenue inutile en l'absence de fécondation au cycle précédent. Après les règles, la muqueuse se reconstruit, s'épaissit et se gorge de vaisseaux sanguins sinueux (dentelle utérine) sous l'effet des œstrogènes et de la progestérone.

III. LE SYNCHRONISME HORMONAL :
La synchronisation parfaite entre l'ovaire et l'utérus est purement hormonale. Si aucune fécondation n'a lieu, le corps jaune régresse à la fin du cycle. La chute brutale des taux d'œstrogènes et de progestérone (le signal de privation hormonale) déclenche le détachement de la muqueuse utérine : un nouveau cycle commence alors.

CONCLUSION :
Le cycle sexuel féminin est une horloge biologique complexe orchestrée par des signaux chimiques précis. Ce synchronisme rigoureux prépare l'utérus à recevoir l'embryon chaque mois, et sa rupture marque le début d'un processus biologique majeur : la grossesse.`,
  sections: [
    {
      title: 'I. Le cycle ovarien et ses trois phases',
      subsections: [
        {
          subtitle: '1. Phase folliculaire, ovulation et phase lutéale',
          content: [
            'Phase folliculaire (J1 à J13) : maturation d\'un follicule cavitaire de De Graaf et sécrétion croissante d\'œstrogènes.',
            'Ovulation (J14) : pic de LH hypophysaire déclenchant la rupture folliculaire et la libération de l\'ovule dans le pavillon de la trompe.',
            'Phase lutéale (J15 à J28) : formation du corps jaune sécrétant une forte quantité de progestérone.'
          ]
        }
      ]
    },
    {
      title: 'II. Le cycle utérin et la muqueuse endométriale',
      subsections: [
        {
          subtitle: '1. Menstruations et dentelle utérine',
          content: [
            'Règles (J1 à J5) : desquamation hémorragique de la partie superficielle de l\'endomètre suite à la chute hormonale.',
            'Phase proliférative (J6 à J14) : régénération et épaississement de la muqueuse sous l\'effet des œstrogènes.',
            'Phase sécrétoire (J15 à J28) : formation de la dentelle utérine riche en glandes sécrétrices de glycogène et vaisseaux spiralés sous l\'action combinée de la progestérone et des œstrogènes.'
          ]
        }
      ]
    },
    {
      title: 'III. Régulation et synchronisme hormonal',
      subsections: [
        {
          subtitle: '1. Chute hormonale et démarrage d\'un nouveau cycle',
          content: [
            'Les ovaires commandent l\'utérus par voie sanguine via les œstrogènes et la progestérone.',
            'En l\'absence de nidation au 28ème jour, le corps jaune dégénère en corps blanc inactif.',
            'La privation hormonale brutale contracte les artères spiralées et déclenche les règles marquant le jour 1 du cycle suivant.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SYNCHRONISME DES CYCLES OVARIEN ET UTÉRIN',
    root: 'CYCLE SEXUEL FÉMININ (28 JOURS)',
    branches: [
      {
        name: 'Cycle Ovarien',
        subtitle: 'Production de gamète',
        items: [
          'J1-J13 : Phase folliculaire (sécrétion œstrogènes)',
          'J14 : Ovulation suite au pic de LH',
          'J15-J28 : Corps jaune (sécrétion de progestérone)'
        ]
      },
      {
        name: 'Cycle Utérin',
        subtitle: 'Préparation à la nidation',
        items: [
          'J1-J5 : Règles (élimination de l\'endomètre)',
          'J6-J14 : Reconstruction de la muqueuse',
          'J15-J28 : Dentelle utérine gorgée de vaisseaux'
        ]
      },
      {
        name: 'Régulation',
        subtitle: 'Signal de privation',
        items: [
          'Ovaire commande l\'utérus par ses hormones',
          'Régression du corps jaune à J28',
          'Chute hormonale déclenchant les menstruations'
        ]
      }
    ]
  },
  conclusion: `Le cycle sexuel féminin est une horloge biologique complexe orchestrée par des signaux chimiques précis. Ce synchronisme rigoureux prépare l'utérus à recevoir l'embryon chaque mois, et sa rupture marque le début d'un processus biologique majeur : la grossesse.`
};

// -------------------------------------------------------------------------
// LEÇON 8 : DE LA FÉCONDATION À LA NAISSANCE
// -------------------------------------------------------------------------
export const LESSON_8_SVT_4EME: LessonContent = {
  id: 'svt-4eme-lecon-8',
  number: 'LEÇON 8 (4ÈME)',
  title: 'DE LA FÉCONDATION À LA NAISSANCE',
  subject: 'SVT',
  classLevel: '4ème',
  introduction: `Lors d'un rapport sexuel non protégé en période de fertilité, la rencontre entre les gamètes mâles et femelles peut initier la genèse d'un nouvel être humain. Ce chapitre étudie le processus intime de la fécondation, les étapes majeures du développement de l'embryon puis du fœtus au cours des neuf mois de grossesse, et enfin les mécanismes physiologiques de l'accouchement qui mènent à la naissance.`,
  fullText: `PROGRAMME OFFICIEL DE SCIENCES DE LA VIE ET DE LA TERRE (4ème)
LIVRET DE COURS EXHAUSTIF - CLASSE DE 4ème
LEÇON 8 : DE LA FÉCONDATION À LA NAISSANCE

INTRODUCTION :
Lors d'un rapport sexuel non protégé en période de fertilité, la rencontre entre les gamètes mâles et femelles peut initier la genèse d'un nouvel être humain. Ce chapitre étudie le processus intime de la fécondation, les étapes majeures du développement de l'embryon puis du fœtus au cours des neuf mois de grossesse, et enfin les mécanismes physiologiques de l'accouchement qui mènent à la naissance.

I. LA FÉCONDATION ET LA NIDATION :
La fécondation est l'union intime d'un spermatozoïde et d'un ovule. Elle se déroule généralement dans le tiers supérieur de la trompe de Fallope. Sur les millions de spermatozoïdes déposés dans le vagin, seule une centaine parvient jusqu'à l'ovule, et un seul réussira à perforer sa membrane protectrice. La fusion de leurs noyaux forme la cellule-œuf (ou zygote). Cette cellule commence immédiatement à se diviser tout en migrant vers l'utérus. Environ une semaine après la fécondation, la jeune masse cellulaire s'implante solidement dans l'endomètre utérin épaissi : c'est la nidation.

II. LA GROSSESSE : PHASE EMBRYONNAIRE ET PHASE FŒTALE :
La grossesse (ou gestation) dure environ 9 mois. On distingue deux étapes successives :
- La phase embryonnaire (les deux premiers mois) : Les principaux organes et systèmes se mettent en place à partir des feuillets cellulaires primitifs. L'embryon humain est alors extrêmement sensible aux substances toxiques (alcool, tabac, médicaments).
- La phase fœtale (du troisième mois jusqu'à la fin) : L'organisme est formé, les organes grandissent et deviennent fonctionnels. Le fœtus se développe au sein d'une poche remplie de liquide amniotique qui le protège des chocs et des variations thermiques. Les échanges nutritifs, gazeux et hormonaux entre la mère et le fœtus s'effectuent à travers un organe transitoire hautement vascularisé : le placenta, relié au nombril du fœtus par le cordon ombilical.

III. L'ACCOUCHEMENT ET LA DÉLIVRANCE :
Au bout de 39 à 41 semaines, des signaux hormonaux déclenchent l'accouchement. Il comprend trois grandes phases : le travail (les contractions utérines involontaires et régulières provoquent l'effacement et la dilatation du col de l'utérus, accompagnés de la rupture de la poche des eaux), l'expulsion (les contractions puissantes poussent le fœtus à travers le vagin, conduisant à sa sortie à l'air libre), et la délivrance (l'expulsion du placenta quelques minutes après la naissance du bébé).

CONCLUSION :
Le développement intra-utérin est une prouesse biologique extraordinaire qui transforme une unique cellule microscopique en un organisme viable et autonome. La surveillance médicale de la grossesse et de l'accouchement est cruciale pour préserver la santé de la mère et de l'enfant.`,
  sections: [
    {
      title: 'I. Fécondation ampullaire et nidation utérine',
      subsections: [
        {
          subtitle: '1. Du zygote au blastocyste implanté',
          content: [
            'Rencontre gamétique dans le tiers distal (ampoule) de la trompe de Fallope.',
            'Réaction acrosomique permettant à un spermatozoïde unique de pénétrer dans l\'ovocyte.',
            'Caryogamie (fusion des génomes mâle et femelle à 23 chromosomes pour former une cellule-œuf diploïde à 46 chromosomes).',
            'Migration tubaire avec divisions mitotiques successives (morula puis blastocyste).',
            'Nidation au 6-7ème jour dans la dentelle utérine réceptive.'
          ]
        }
      ]
    },
    {
      title: 'II. Les deux grandes phases de la gestation',
      subsections: [
        {
          subtitle: '1. Phase embryonnaire (0 à 2 mois) et phase fœtale (3 à 9 mois)',
          content: [
            'Phase embryonnaire : organogenèse complète ; mise en place du cœur battant, des membres, du système nerveux primitif. Risque tératogène maximal.',
            'Phase fœtale : croissance staturo-pondérale rapide et maturation physiologique des organes.',
            'Liquide amniotique : protection mécanique amortissante, température constante et liberté de mouvement.',
            'Placenta et cordon ombilical : barrière hémochoriale assurant les échanges d\'O₂, de CO₂, de glucose, d\'acides aminés, d\'anticorps IgG sans mélange direct des sangs maternel et fœtal.'
          ]
        }
      ]
    },
    {
      title: 'III. Les étapes de l\'accouchement et la délivrance',
      subsections: [
        {
          subtitle: '1. Travail, expulsion et délivrance placentaire',
          content: [
            'Phase 1 : Le travail (contractions du myocarde sous l\'effet de l\'ocytocine, effacement et dilatation du col à 10 cm, rupture de la poche des eaux).',
            'Phase 2 : L\'expulsion (engagement dans le bassin osseux, descente dans le canal vaginal et première inspiration aérienne).',
            'Phase 3 : La délivrance (décollement spontané et expulsion du placenta 15 à 30 minutes après pour prévenir les hémorragies du post-partum).'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'ÉTAPES DE LA PROCRÉATION ET DU DÉVELOPPEMENT INTRA-UTÉRIN',
    root: 'DE LA CONCEPTION À LA NAISSANCE',
    branches: [
      {
        name: 'Fécondation & Nidation',
        subtitle: '1ère semaine',
        items: [
          'Rencontre dans le tiers supérieur de la trompe',
          'Fusion des noyaux → Cellule-œuf (zygote)',
          'Divisions mitotiques et migration',
          'Nidation dans l\'endomètre à J7'
        ]
      },
      {
        name: 'Grossesse (9 mois)',
        subtitle: 'Développement in utero',
        items: [
          'Mois 1-2 : Embryon (formation des organes)',
          'Mois 3-9 : Fœtus (croissance et maturation)',
          'Placenta : échanges vitaux mère-enfant',
          'Poche amniotique protectrice'
        ]
      },
      {
        name: 'Accouchement',
        subtitle: 'Trois phases clés',
        items: [
          '1. Le travail : dilatation du col et rupture des eaux',
          '2. L\'expulsion du nouveau-né',
          '3. La délivrance : expulsion du placenta'
        ]
      }
    ]
  },
  conclusion: `Le développement intra-utérin est une prouesse biologique extraordinaire qui transforme une unique cellule microscopique en un organisme viable et autonome. La surveillance médicale de la grossesse et de l'accouchement est cruciale pour préserver la santé de la mère et de l'enfant.`
};

// -------------------------------------------------------------------------
// LEÇON 9 : LES MÉTHODES DE CONTRACEPTION ET LES IST
// -------------------------------------------------------------------------
export const LESSON_9_SVT_4EME: LessonContent = {
  id: 'svt-4eme-lecon-9',
  number: 'LEÇON 9 (4ÈME)',
  title: 'LES MÉTHODES DE CONTRACEPTION ET LES IST',
  subject: 'SVT',
  classLevel: '4ème',
  introduction: `La maîtrise de la procréation et la protection de la santé sexuelle constituent des enjeux de santé publique cruciaux. La contraception regroupe l'ensemble des méthodes visant à éviter de manière réversible une grossesse non désirée, permettant ainsi une planification familiale éclairée. Parallèlement, la prévention contre les infections sexuellement transmissibles (IST) est indispensable pour enrayer la propagation d'agents pathogènes graves au sein de la population active.`,
  fullText: `PROGRAMME OFFICIEL DE SCIENCES DE LA VIE ET DE LA TERRE (4ème)
LIVRET DE COURS EXHAUSTIF - CLASSE DE 4ème
LEÇON 9 : LES MÉTHODES DE CONTRACEPTION ET LES IST

INTRODUCTION :
La maîtrise de la procréation et la protection de la santé sexuelle constituent des enjeux de santé publique cruciaux. La contraception regroupe l'ensemble des méthodes visant à éviter de manière réversible une grossesse non désirée, permettant ainsi une planification familiale éclairée. Parallèlement, la prévention contre les infections sexuellement transmissibles (IST) est indispensable pour enrayer la propagation d'agents pathogènes graves au sein de la population active.

I. LES DIFFÉRENTES MÉTHODES CONTRACEPTIVES :
Les méthodes de contraception agissent à différents niveaux pour bloquer le processus reproducteur :
- Les méthodes hormonales : La pilule contraceptive, les implants ou les injections libèrent des hormones de synthèse qui bloquent l'ovulation, modifient la glaire cervicale pour empêcher le passage des spermatozoïdes et empêchent la nidation.
- Les méthodes mécaniques ou barrières : Le préservatif (masculin ou féminin) empêche physiquement le sperme de pénétrer dans le tractus génital féminin. C'est le seul moyen contraceptif qui protège aussi des IST. Le dispositif intra-utérin (stérilet), inséré dans l'utérus par un médecin, empêche la nidation ou inactive les spermatozoïdes.
- Les méthodes chimiques : Les spermicides détruisent les spermatozoïdes dans le vagin mais ont une efficacité limitée.

II. LES INFECTIONS SEXUELLEMENT TRANSMISSIBLES (IST/MST) :
Les IST sont des infections causées par des bactéries, des virus ou des parasites, transmises lors de rapports sexuels non protégés. Parmi les plus fréquentes, on trouve la chlamydiose et la gonococcie (bactériennes), pouvant causer des douleurs et conduire à la stérilité si elles ne sont pas traitées par antibiotiques. Les hépatites B et le papillomavirus humain (HPV) sont viraux et peuvent induire des cancers. L'infection par le VIH (Virus de l'Immunodéficience Humaine) détruit le système immunitaire et mène au SIDA en l'absence de traitement antirétroviral.

III. PRÉVENTION ET DÉPISTAGE :
La stratégie de lutte repose sur l'utilisation systématique du préservatif lors de rapports avec des partenaires dont le statut sérologique est inconnu. La vaccination (notamment contre l'hépatite B et le HPV) offre une protection solide. Enfin, le dépistage régulier permet une prise en charge médicale précoce et stoppe la chaîne de transmission.

CONCLUSION :
En somme, une bonne éducation sexuelle donne aux jeunes les moyens de faire des choix informés et responsables. L'utilisation conjointe de la contraception et des moyens de protection barrière est la clé de voûte de l'épanouissement personnel et de la préservation de la santé publique.`,
  sections: [
    {
      title: 'I. Typologie et modes d\'action des contraceptifs',
      subsections: [
        {
          subtitle: '1. Méthodes hormonales, barrières mécaniques et chimiques',
          content: [
            'Méthodes hormonales (pilules œstroprogestatives, implants sous-cutanés, injectables) : triple verrou (blocage de l\'ovulation, épaississement imperméable de la glaire cervicale et amincissement de l\'endomètre hostile à la nidation).',
            'Méthodes barrières : préservatif masculin (en latex) et préservatif féminin (en polyuréthane), barrière mécanique imperméable aux gamètes et aux micro-organismes pathogènes.',
            'Dispositif intra-utérin (DIU ou stérilet) au cuivre ou hormonal : effet spermicide et anti-nidation durable inséré en milieu médical.',
            'Spermicides chimiques : gels ovules détruisant la membrane des spermatozoïdes (faible efficacité isolée).'
          ]
        }
      ]
    },
    {
      title: 'II. Infections sexuellement transmissibles majeures',
      subsections: [
        {
          subtitle: '1. Agents bactériens, viraux et conséquences médicales',
          content: [
            'IST bactériennes : Chlamydiose, Gonococcie (blennorragie) et Syphilis, curables par antibiothérapie précoce sous peine d\'infertilité tubaire ou d\'orchite.',
            'IST virales : Hépatite B (hépatite chronique et cirrhose), HPV (papillomavirus responsable du cancer du col utérin), Herpès génital.',
            'VIH/SIDA : le rétrovirus cible les lymphocytes T4 (CD4), provoquant un effondrement immunitaire et l\'apparition de maladies opportunistes mortelles sans trithérapie antirétrovirale.'
          ]
        }
      ]
    },
    {
      title: 'III. Stratégie de prévention combinée et dépistage',
      subsections: [
        {
          subtitle: '1. Préservatif, vaccins et diagnostic sérologique',
          content: [
            'Le préservatif est l\'unique moyen à double action : contraception efficace ET rempart protecteur contre toutes les IST.',
            'Vaccination préventive hautement recommandée : vaccin contre le Virus de l\'Hépatite B et vaccin anti-HPV chez les adolescents.',
            'Dépistage sérologique volontaire, anonyme et gratuit (CDAG) avant tout arrêt de préservatif au sein du couple stable.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'SANTÉ SEXUELLE : CONTRACEPTION ET PRÉVENTION DES IST',
    root: 'PLANIFICATION ET PROTECTION',
    branches: [
      {
        name: 'Contraception Hormonale',
        subtitle: 'Blocage biologique',
        items: [
          'Pilule quotidienne œstroprogestative',
          'Implants sous-cutanés (3 à 5 ans)',
          'Injections trimestrielles à action retard'
        ]
      },
      {
        name: 'Protection Barrière',
        subtitle: 'Double protection',
        items: [
          'Préservatifs masculin & féminin',
          'Bloque le sperme ET les agents pathogènes (IST)',
          'Dispositif intra-utérin (DIU / stérilet)'
        ]
      },
      {
        name: 'Prévention des IST',
        subtitle: 'Santé publique',
        items: [
          'Dépistage régulier du VIH, hépatites et syphilis',
          'Vaccins contre le VHB et le papillomavirus (HPV)',
          'Traitement antibiotique précoce des partenaires'
        ]
      }
    ]
  },
  conclusion: `En somme, une bonne éducation sexuelle donne aux jeunes les moyens de faire des choix informés et responsables. L'utilisation conjointe de la contraception et des moyens de protection barrière est la clé de voûte de l'épanouissement personnel et de la préservation de la santé publique.`
};

// -------------------------------------------------------------------------
// LEÇON 10 : LA COMPOSITION ET LA FORMATION DES SOLS
// -------------------------------------------------------------------------
export const LESSON_10_SVT_4EME: LessonContent = {
  id: 'svt-4eme-lecon-10',
  number: 'LEÇON 10 (4ÈME)',
  title: 'LA COMPOSITION ET LA FORMATION DES SOLS',
  subject: 'SVT',
  classLevel: '4ème',
  introduction: `Le sol représente la couche superficielle et meuble de la croûte terrestre. Loin d'être une simple matière inerte, le sol est un milieu dynamique complexe, à l'interface entre la lithosphère, l'atmosphère, l'hydrosphère et la biosphère. Il joue un rôle biologique fondamental en supportant la végétation et en abritant une biodiversité microscopique intense. Cette leçon analyse les constituants du sol et les processus lents de sa genèse.`,
  fullText: `PROGRAMME OFFICIEL DE SCIENCES DE LA VIE ET DE LA TERRE (4ème)
LIVRET DE COURS EXHAUSTIF - CLASSE DE 4ème
LEÇON 10 : LA COMPOSITION ET LA FORMATION DES SOLS

INTRODUCTION :
Le sol représente la couche superficielle et meuble de la croûte terrestre. Loin d'être une simple matière inerte, le sol est un milieu dynamique complexe, à l'interface entre la lithosphère, l'atmosphère, l'hydrosphère et la biosphère. Il joue un rôle biologique fondamental en supportant la végétation et en abritant une biodiversité microscopique intense. Cette leçon analyse les constituants du sol et les processus lents de sa genèse.

I. LA COMPOSITION PHYSICO-CHIMIQUE DU SOL :
Un sol équilibré est composé de quatre fractions interdépendantes :
1. La fraction minérale (environ 45 %) : Issue de la dégradation de la roche mère sous-jacente. Elle comprend des éléments de tailles diverses : cailloux, graviers, sables, limons et argiles. La proportion de ces éléments définit la texture du sol.
2. La fraction organique (environ 5 %) : Constituée de débris végétaux et animaux morts qui se décomposent pour former l'humus grâce à l'action de la microfaune (vers de terre) et des micro-organismes du sol.
3. L'eau (environ 25 %) : Occupe les pores du sol (solution du sol) et dissout les sels minéraux indispensables à la nutrition des plantes.
4. L'air (environ 25 %) : Remplit les espaces vides non occupés par l'eau, permettant la respiration des racines et des êtres vivants fouisseurs.

SCHÉMA SIMPLIFIÉ DES HORIZONS D'UN PROFIL PÉDOLOGIQUE VERTICAL :
[ Horizon O : Litière et Humus ]
[ Horizon A : Horizon mixte (minéro-organique) ]
[ Horizon B : Horizon d'accumulation / d'illuviation ]
[ Horizon C : Roche-mère altérée ]
[ Roche-mère saine non altérée (substrat géologique) ]

II. LES ÉTAPES DE LA PÉDOGENÈSE (FORMATION DU SOL) :
La formation d'un sol (pédogenèse) est un processus extrêmement lent, s'étalant sur des siècles. Elle débute par l'altération mécanique (gel, variations thermiques, usure par l'eau) et chimique (dissolution par les eaux acides) de la roche mère superficielle. Parallèlement, des organismes pionniers (lichens, mousses) s'installent et apportent les premières matières organiques. À leur mort, la décomposition de ces matières par les détritivores produit l'humus. L'infiltration des eaux de pluie entraîne certains éléments fins en profondeur, structurant progressivement le sol en couches horizontales distinctes appelées horizons pédologiques.

CONCLUSION :
Le sol est une ressource naturelle précieuse, vivante et non renouvelable à l'échelle humaine. Comprendre sa composition et sa fragilité structurelle est indispensable pour lutter contre l'érosion, la désertification et promouvoir des pratiques agricoles respectueuses de l'environnement.`,
  sections: [
    {
      title: 'I. Les quatre fractions constituantes du sol',
      subsections: [
        {
          subtitle: '1. Fractions minérale, organique, aqueuse et gazeuse',
          content: [
            'Fraction minérale (45%) : fragments rocheux classés selon le diamètre granulométrique (cailloux > 2 cm, graviers > 2 mm, sables grossiers/fins de 2 mm à 50 µm, limons de 50 à 2 µm, argiles colloïdales < 2 µm).',
            'Fraction organique (5%) : litière de débris végétaux et animaux, décomposée en humus sombre sous l\'action des bactéries, champignons et vers de terre lombriciens.',
            'Solution du sol (25%) : eau interstitielle chargée d\'ions dissous (nitrates, phosphates, potassium, calcium) absorbée par les poils absorbants radiculaires.',
            'Atmosphère du sol (25%) : gaz emprisonnés dans la porosité meuble nécessaires à la respiration cellulaire des racines et de la pédofaune.'
          ]
        }
      ]
    },
    {
      title: 'II. Mécanismes de la pédogenèse et profils de sol',
      subsections: [
        {
          subtitle: '1. Altération de la roche-mère et étagement en horizons',
          content: [
            'Altération physique (thermoclastie, gélifraction, érosion éolienne et hydrique) et altération chimique (hydrolyse des feldspaths, dissolution des carbonates).',
            'Colonisation pionnière par les lichens sécrétant des acides organiques agressifs.',
            'Horizon O superficiel (matière organique fraîche et humus actif).',
            'Horizon A arable (complexe argilo-humique liant particules minérales et organiques).',
            'Horizon B d\'accumulation enrichi en argiles et oxydes de fer lessivés.',
            'Horizon C d\'altération en contact direct avec le socle rocheux.'
          ]
        }
      ]
    },
    {
      title: 'III. Vulnérabilité et conservation des sols agricoles',
      subsections: [
        {
          subtitle: '1. Érosion, désertification et gestion agro-écologique',
          content: [
            'L\'érosion hydrique et le décapage éolien consécutifs au surpâturage et au déboisement détruisent des décennies de pédogenèse en quelques averses.',
            'Salinisation et tassement mécanique réduisent la fertilité biologique des sols sahéliens.',
            'Stratégies de régénération : paillage organique, zaï, cordons pierreux, haies brise-vent et apport de compost mûr.'
          ]
        }
      ]
    }
  ],
  diagram: {
    title: 'STRUCTURE VERTICALE ET COMPOSITION DU SOL',
    root: 'PROFIL DU SOL',
    branches: [
      {
        name: 'Composition Équilibrée',
        subtitle: 'Volumes relatifs',
        items: [
          'Fraction minérale (45%) : sables, limons, argiles',
          'Fraction organique (5%) : litière et humus',
          'Solution du sol (25%) : eau et ions minéraux',
          'Atmosphère du sol (25%) : porosité aérée'
        ]
      },
      {
        name: 'Horizons Pédologiques',
        subtitle: 'Profil vertical',
        items: [
          'Horizon O : litière organique en surface',
          'Horizon A : horizon mixte minéro-organique',
          'Horizon B : accumulation des argiles lessivées',
          'Horizon C : roche-mère altérée sur socle'
        ]
      },
      {
        name: 'Pédogenèse & Protection',
        subtitle: 'Processus séculaire',
        items: [
          'Altération de la roche + Action des décomposeurs',
          'Menaces : érosion, lessivage et désertification',
          'Pratiques durables : compost, brise-vent, cordons'
        ]
      }
    ]
  },
  conclusion: `Le sol est une ressource naturelle précieuse, vivante et non renouvelable à l'échelle humaine. Comprendre sa composition et sa fragilité structurelle est indispensable pour lutter contre l'érosion, la désertification et promouvoir des pratiques agricoles respectueuses de l'environnement.`
};
