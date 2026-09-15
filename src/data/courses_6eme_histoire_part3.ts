import { LessonContent } from './courses';

// =========================================================================
// TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
// CLASSE DE 6ÈME - PROGRAMME OFFICIEL SÉNÉGALAIS
// LEÇONS 7 À 12 AVEC INTRODUCTION ET CONCLUSION COMPLÈTES
// =========================================================================

export const LESSON_7_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-7',
  number: 'Leçon 7',
  title: "L'ÉGYPTE PHARAONIQUE : LE CADRE GÉOGRAPHIQUE ET LES HOMMES",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `À l'extrémité nord-est du continent africain s'est épanouie l'une des civilisations les plus brillantes, durables et prestigieuses de toute l'Antiquité : l'Égypte pharaonique. Dans un environnement aride cerné de déserts hostiles, la présence vitale du Nil et l'ingéniosité de bâtisseurs noirs africains ont créé les conditions d'un développement humain exceptionnel.`,
  fullText: `TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
Leçon 7 : L'Égypte pharaonique : le cadre géographique et les hommes

1. Une situation géographique contrastée
L'Égypte antique se situe à l'extrémité nord-est du continent africain. C'est une région encadrée à l'est et à l'ouest par des déserts immenses, brûlants et totalement stériles (le désert de Libye et le désert d'Arabie). Le climat y est extrêmement chaud et il ne pleut pratiquement jamais. Sans un élément naturel exceptionnel, la vie humaine y aurait été totalement impossible.

2. « L'Égypte est un don du Nil »
Cette phrase célèbre écrite par l'historien grec Hérodote explique le miracle égyptien. Le Nil est un fleuve géant qui traverse le désert du sud vers le nord.
- Le mécanisme de la crue : Chaque été, les pluies torrentielles qui s'abattent sur les montagnes d'Afrique centrale et d'Éthiopie font gonfler les sources du Nil. Le fleuve déborde et inonde toute la vallée égyptienne.
- Le dépôt du limon : En automne, l'eau se retire sagement. Elle laisse sur le sol une couche de boue noire, grasse et ultra-fertile appelée le limon. Les paysans égyptiens n'avaient qu'à jeter leurs graines dans ce limon humide pour obtenir des récoltes de céréales gigantesques sans grand effort.
- Les deux Égypte : Géographiquement, on distinguait la Haute-Égypte au sud (une vallée très étroite coincée entre les falaises du désert) et la Basse-Égypte au nord (la région du Delta, là où le fleuve se divise en plusieurs branches en forme de triangle pour se jeter dans la mer Méditerranée).

3. Le peuplement et les thèses de Cheikh Anta Diop
À cause de l'assèchement progressif du grand désert du Sahara vers 5000 avant J.-C., des vagues successives de populations humaines ont fui la sécheresse pour venir s'installer définitivement sur les rives fertiles du Nil. Le grand savant, physicien et historien sénégalais Cheikh Anta Diop (qui a donné son nom à l'Université de Dakar, l'UCAD) a démontré de manière scientifique et rigoureuse que les premiers habitants et bâtisseurs de l'Égypte pharaonique étaient des populations noires d'origine strictement africaine. Il a prouvé cette vérité en analysant la quantité de mélanine dans la peau des momies, en étudiant la langue égyptienne ancienne (qui ressemble beaucoup au Wolof) et en s'appuyant sur les textes des écrivains grecs de l'Antiquité qui décrivaient les Égyptiens avec la peau noire et les cheveux crépus.`,
  sections: [
    {
      title: "1. Une situation géographique contrastée",
      content: [
        `Localisation : Extrémité nord-est du continent africain.`,
        `Milieu désertique : Enclavée entre le désert de Libye à l'ouest et le désert d'Arabie à l'est. Le climat y est aride et les pluies quasi-inexistantes. Sans la présence salvatrice du Nil, la région serait un désert inhabitable.`
      ]
    },
    {
      title: "2. « L'Égypte est un don du Nil » (Hérodote)",
      content: [
        `Le rôle régulateur du Nil : Fleuve puissant qui traverse le désert du sud vers le nord jusqu'à la Méditerranée.`,
        `Le rythme de la crue : En été, les pluies de mousson en Éthiopie et en Afrique centrale gonflent les affluents du fleuve, inondant toute la vallée.`,
        `Le limon nourricier : En automne, les eaux se retirent en déposant une boue fertile et riche en minéraux appelée limon, garantissant des récoltes céréalières prodigieuses.`,
        `Division géographique : La Haute-Égypte au sud (vallée étroite enserrée de falaises) et la Basse-Égypte au nord (plaine deltaïque en forme d'éventail).`
      ]
    },
    {
      title: "3. Le peuplement et les thèses de Cheikh Anta Diop",
      content: [
        `Origines du peuplement : Suite à la désertification du Sahara vers 5000 av. J.-C., des populations pastorales et agricoles ont convergé vers le bassin fertile du Nil.`,
        `Les démonstrations de Cheikh Anta Diop : L'éminent égyptologue sénégalais a scientifiquement démontré le caractère négro-africain de la civilisation pharaonique :`,
        `• Preuve biologique : dosage de la mélanine sur la peau des momies royales.`,
        `• Preuve linguistique : parenté morphologique et lexicale directe entre l'égyptien pharaonique et les langues négro-africaines modernes (notamment le Wolof).`,
        `• Preuve historique et iconographique : témoignages des historiens antiques (Hérodote, Diodore de Sicile) décrivant les Égyptiens avec la peau noire et la chevelure crépue.`
      ]
    }
  ],
  diagram: {
    title: "CADRE GÉOGRAPHIQUE ET FONDEMENTS DE L'ÉGYPTE ANTIQUE",
    root: "ÉGYPTE PHARAONIQUE",
    branches: [
      {
        name: "Don du Nil",
        subtitle: "Hérodote (Vème s. av. J.-C.)",
        items: ["Crues annuelles estivales", "Limon noir ultra-fertile", "Haute et Basse-Égypte"]
      },
      {
        name: "Environnement",
        subtitle: "Oasis au milieu des sables",
        items: ["Désert de Libye à l'ouest", "Désert d'Arabie à l'est", "Mer Méditerranée au nord"]
      },
      {
        name: "Thèses de Cheikh Anta Diop",
        subtitle: "Berceau négro-africain",
        items: ["Dosage de la mélanine", "Parenté avec le Wolof", "Témoignages gréco-romains"]
      }
    ]
  },
  conclusion: `En conclusion, l'Égypte pharaonique illustre l'alliance exemplaire d'un milieu fluvial fécond et du génie créateur de populations noires africaines. La mise en valeur de la vallée du Nil et les thèses décisives de Cheikh Anta Diop consacrent la place centrale de l'Afrique dans l'histoire de la civilisation mondiale.`
};

export const LESSON_8_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-8',
  number: 'Leçon 8',
  title: "L'ÉGYPTE PHARAONIQUE : LES GRANDES PÉRIODES DE SON HISTOIRE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `L'histoire de l'Égypte antique se déploie sur plus de trois millénaires d'une exceptionnelle longévité. Cette continuité remarquable s'articule autour de trois époques d'apogée et d'éclat politique, appelées « Empires », séparées par des crises et des invasions que l'État égyptien a toujours su surmonter.`,
  fullText: `TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
Leçon 8 : L'Égypte pharaonique : les grandes périodes de son histoire

1. L'unification originelle du pays
Au tout départ, l'Égypte était divisée en deux royaumes rivaux : le royaume de la Basse-Égypte (le Nord) et le royaume de la Haute-Égypte (le Sud). Aux alentours de 3100 avant J.-C., un roi légendaire de la Haute-Égypte nommé Narmer (ou Ménès) réussit à conquérir le Nord par la force. Il unifie le pays pour la première fois sous une seule couronne et devient le tout premier Pharaon de l'histoire. À partir de là, l'histoire égyptienne va durer 3000 ans, découpée en trois périodes de gloire appelées « Empires », séparées par des crises.

2. L'Ancien Empire (vers 2700 - 2200 av. J.-C.) : L'âge des pyramides
C'est la période de la mise en place d'un État très fort et centralisé. La capitale de l'Ancien Empire est fixée à Memphis (au nord). C'est l'époque glorieuse où les Pharaons possèdent un pouvoir si immense qu'ils font construire de gigantesques tombeaux en pierre de taille : les pyramides. C'est durant cette période que s'élèvent les trois célèbres pyramides du plateau de Gizeh, construites pour les Pharaons Khéops (la plus grande), Khéphren et Mykérinos. Cette période s'achève par une révolte des gouverneurs de provinces (les nomarques) qui affaiblit le pouvoir du roi.

3. Le Moyen Empire (vers 2050 - 1750 av. J.-C.) : La prospérité économique
Après une longue période de désordre et de guerres civiles, les princes de la ville de Thèbes (située au sud) réussissent à réunifier entièrement l'Égypte. Thèbes devient la nouvelle capitale prestigieuse. C'est une période tournée vers le développement de l'économie, le creusement de canaux d'irrigation pour l'agriculture et le commerce avec l'Afrique et l'Asie. Le Moyen Empire s'effondre suite à l'invasion d'un peuple nomade venu d'Asie : les Hyksos. Ces derniers l'emportent car ils possèdent des armes inconnues des Égyptiens : des chars de combat rapides tirés par des chevaux et des épées en bronze.

4. Le Nouvel Empire (vers 1550 - 1050 av. J.-C.) : L'Égypte conquérante
Les Pharaons de Thèbes finissent par révolter le peuple, adoptent les chars de guerre et chassent définitivement les Hyksos hors du pays. C'est l'apogée militaire et la période la plus puissante de l'Égypte, qui se transforme en un empire international en conquérant la Nubie au sud et la Syrie au Moyen-Orient. C'est l'époque des Pharaons les plus célèbres du monde :
- Hatchepsout : Une femme exceptionnelle qui a gouverné en tant que Pharaon, développant le grand commerce maritime.
- Thoutmosis III : Un génie militaire surnommé le « Napoléon de l'Égypte » en raison de ses innombrables conquêtes.
- Akhenaton : Le pharaon révolutionnaire qui a imposé la croyance en un seul dieu (le Soleil Aton).
- Ramsès II : Le plus grand bâtisseur de l'histoire égyptienne, qui a régné pendant 66 ans et fait construire les temples gigantesques d'Abou Simbel gravés dans la roche.`,
  sections: [
    {
      title: "1. L'unification originelle du pays",
      content: [
        `Vers 3100 av. J.-C., le roi Narmer (Ménès) venu de Haute-Égypte soumet la Basse-Égypte par les armes.`,
        `Il coiffe la double couronne et devient le premier Pharaon d'une Égypte unifiée, inaugurant 30 siècles d'histoire organisés en trois grands Empires.`
      ]
    },
    {
      title: "2. L'Ancien Empire (-2700 à -2200) : L'âge des pyramides",
      content: [
        `Capitale : Memphis. Organisation d'une administration royale centralisée.`,
        `Monuments funéraires : Érection des trois célèbres pyramides de Gizeh consacrées aux souverains Khéops, Khéphren et Mykérinos.`,
        `Déclin : Révolte des gouverneurs de province (les nomarques), provoquant la dislocation temporaire du royaume.`
      ]
    },
    {
      title: "3. Le Moyen Empire (-2050 à -1750) : La prospérité économique",
      content: [
        `Restauration thébaine : Les princes de Thèbes réunifient le territoire et installent la capitale à Thèbes.`,
        `Développement agricole et commercial : Creusement de réseaux d'irrigation et intensification des routes marchandes vers l'Asie et l'Afrique intérieure.`,
        `Invasion des Hyksos : Des nomades asiatiques dotés d'épées en bronze et de chars de guerre rapides envahissent le Delta et précipitent la fin du Moyen Empire.`
      ]
    },
    {
      title: "4. Le Nouvel Empire (-1550 à -1050) : L'Égypte conquérante",
      content: [
        `Reconquête et expansion : Expulsion des Hyksos et conquête d'un vaste empire allant de la Nubie au sud jusqu'à la Syrie au Proche-Orient.`,
        `Figures de légende :`,
        `• Hatchepsout : femme Pharaon ayant développé les expéditions maritimes.`,
        `• Thoutmosis III : stratège redoutable, surnommé le « Napoléon égyptien ».`,
        `• Akhenaton : pharaon novateur ayant institué le culte unique du disque solaire Aton.`,
        `• Ramsès II : règne record de 66 ans et constructeur des temples taillés d'Abou Simbel.`
      ]
    }
  ],
  diagram: {
    title: "LES GRANDES PÉRIODES DE L'HISTOIRE ÉGYPTIENNE",
    root: "CHRONOLOGIE ÉGYPTIENNE",
    branches: [
      {
        name: "Unification (-3100)",
        subtitle: "Roi Narmer (Ménès)",
        items: ["Fusion Haute & Basse Égypte", "Double couronne unifiée", "Début des dynasties"]
      },
      {
        name: "Ancien Empire",
        subtitle: "Capitale Memphis",
        items: ["Pyramides de Gizeh", "Khéops, Khéphren, Mykérinos", "Crise des nomarques"]
      },
      {
        name: "Moyen Empire",
        subtitle: "Capitale Thèbes",
        items: ["Aménagements du Nil & commerce", "Invasion des Hyksos", "Chars de guerre & bronze"]
      },
      {
        name: "Nouvel Empire",
        subtitle: "Apogée international",
        items: ["Hatchepsout & Thoutmosis III", "Akhenaton & monothéisme d'Aton", "Ramsès II & Abou Simbel"]
      }
    ]
  },
  conclusion: `En conclusion, l'épopée de l'Égypte antique témoigne de la solidité et de la capacité de renouveau d'un État millénaire. Des premiers blocs de Gizeh aux conquêtes impériales de Ramsès II, chaque empire a consolidé la puissance politique et le patrimoine grandiose de la vallée du Nil.`
};

export const LESSON_9_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-9',
  number: 'Leçon 9',
  title: "L'ÉGYPTE PHARAONIQUE : LA CIVILISATION",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `La pérennité de l'Égypte pharaonique repose sur une civilisation d'un raffinement exceptionnel. Portée par la figure sacrée et centrale du Pharaon, une religion polythéiste résolument tournée vers la vie éternelle, une écriture sacrée originale et des progrès scientifiques remarquables, l'Égypte a posé les bases des savoirs du monde méditerranéen et africain.`,
  fullText: `TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
Leçon 9 : L'Égypte pharaonique : la civilisation

1. La figure sacrée du Pharaon
Le Pharaon occupe le sommet absolu de la société égyptienne. Il possède un pouvoir total et incontesté (monarchie absolue). Pour les Égyptiens, il n'est pas un homme ordinaire : c'est un dieu vivant sur Terre, le fils charnel du dieu Soleil (Râ ou Amon). Il porte des symboles royaux sacrés : la double couronne (le Pschent), la barbe postiche des dieux, le bâton de berger (le Héka) et le fouet (le Nékhakha). Il est le chef suprême de l'armée, le juge suprême, le garant de l'ordre universel et de la justice (incarnée par la déesse Maât). Si le Pharaon gouverne bien, les dieux accordent une bonne crue du Nil.

2. Une religion polythéiste centrée sur l'au-delà
Les Égyptiens étaient profondément religieux et polythéistes, ce qui veut dire qu'ils adoraient des centaines de dieux différents. Ces divinités étaient souvent représentées avec un corps humain et une tête d'animal symbolique :
- Osiris : Dieu bienveillant de la fertilité, tué par son frère jaloux Seth, puis ressuscité. Il est le juge suprême du royaume des morts.
- Isis : Épouse d'Osiris, magicienne et déesse protectrice de la famille.
- Horus : Fils d'Osiris et d'Isis, à tête de faucon. Le Pharaon vivant est son incarnation.
- Anubis : Dieu à tête de chacal noir, grand patron de l'embaumement et de la momification.
- La vie après la mort : Les Égyptiens croyaient fermement que l'âme humaine continuait à vivre après le décès. Pour cela, deux conditions étaient obligatoires : le corps physique devait rester intact (grâce à la technique secrète de la momification qui desséchait le corps avec du sel de natron avant de l'envelopper dans des bandelettes de lin), et l'âme devait réussir le test de la « pesée du cœur » devant le tribunal d'Osiris. Si le cœur était léger (sans péchés), l'accès au paradis égyptien était accordé.

3. L'écriture hiéroglyphique et l'avance scientifique
- L'écriture : Inventée vers 3200 avant J.-C., l'écriture égyptienne est faite de petits dessins sacrés appelés hiéroglyphes. Chaque dessin représente soit un objet, soit un animal, soit une idée ou un son. C'était une écriture tellement difficile que seuls les spécialistes, les scribes, savaient la lire et l'écrire. Elle a été déchiffrée en 1822 par le savant français Jean-François Champollion grâce à la découverte de la Pierre de Rosette.
- Les sciences : Les Égyptiens étaient de très grands savants. Ils ont inventé la géométrie pour redessiner les limites des champs effacées par la crue du Nil. Ils maîtrisaient la médecine et la chirurgie grâce à la momification. Ils ont aussi créé un calendrier solaire d'une précision remarquable de 365 jours découpé en 12 mois.`,
  sections: [
    {
      title: "1. La figure sacrée du Pharaon",
      content: [
        `Statut divin : Monarque absolu et dieu vivant, fils charnel d'Amon-Râ.`,
        `Attributs royaux : Couronne double (Pschent), barbe postiche, crosse pastorale (Héka) et fouet (Nékhakha).`,
        `Rôle cosmique : Garant de la justice et de l'harmonie cosmique (Maât), protecteur des armées et ordonnateur des crues du Nil.`
      ]
    },
    {
      title: "2. Une religion polythéiste tournée vers l'éternité",
      content: [
        `Panthéon anthropozoomorphique : Dieux représentés mi-humains mi-animaux (Osiris juge des morts, Isis magicienne maternelle, Horus au visage de faucon, Anubis chacal embaumeur).`,
        `La vie après la mort : Croyance en la survie de l'âme conditionnée par :`,
        `• La momification rituelle : dessèchement des chairs au sel de natron et enveloppement dans des bandelettes de lin pour conserver le corps.`,
        `• Le jugement d'Osiris : pesée psychostatique du cœur face à la plume de Maât pour accéder à l'immortalité.`
      ]
    },
    {
      title: "3. L'écriture hiéroglyphique et les avancées scientifiques",
      content: [
        `Écriture hiéroglyphique (vers -3200) : Système graphique combinant idéogrammes et phonogrammes, manié avec rigueur par la caste des scribes. Déchiffré en 1822 par Jean-François Champollion à partir de la Pierre de Rosette.`,
        `Géométrie et mathématiques : Mesure cadastrale des parcelles après la décrue du Nil et calculs volumétriques monumentaux.`,
        `Médecine et calendrier : Savoirs chirurgicaux et anatomiques affinés par l'embaumement, et invention d'un calendrier solaire de 365 jours en 12 mois.`
      ]
    }
  ],
  diagram: {
    title: "LES PILIERS DE LA CIVILISATION PHARAONIQUE",
    root: "CIVILISATION ÉGYPTIENNE",
    branches: [
      {
        name: "Le Pharaon Sacré",
        subtitle: "Monarchie absolue de droit divin",
        items: ["Fils du dieu Soleil Râ", "Pschent, Héka, Nékhakha", "Garant de l'ordre de Maât"]
      },
      {
        name: "Culte de l'Au-delà",
        subtitle: "Polythéisme & Éternité",
        items: ["Osiris, Isis, Horus, Anubis", "Momification au sel de natron", "Pesée du cœur & paradis"]
      },
      {
        name: "Sciences & Écriture",
        subtitle: "Savants de l'Antiquité",
        items: ["Hiéroglyphes (Champollion 1822)", "Géométrie cadastrale du Nil", "Médecine & calendrier de 365 jours"]
      }
    ]
  },
  conclusion: `En conclusion, la civilisation égyptienne a offert au monde des repères spirituels, artistiques et intellectuels durables. Ses contributions majeures en médecine, géométrie, astronomie et architecture continuent d'exercer une profonde admiration à travers les millénaires.`
};

export const LESSON_10_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-10',
  number: 'Leçon 10',
  title: "LA NUBIE ANTIQUE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `Au sud de la première cataracte du Nil, sur les terres de l'actuel Soudan, s'est déployée la Nubie antique, l'une des plus anciennes et fières civilisations d'Afrique noire. Longtemps observée uniquement sous l'angle de ses confrontations avec l'Égypte des pharaons, la Nubie s'est illustrée par une remarquable indépendance culturelle, une métallurgie florissante et la conquête même du trône d'Égypte par ses souverains.`,
  fullText: `TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
Leçon 10 : La Nubie antique

1. Le cadre géographique de la Nubie
La Nubie est une immense région de l'Antiquité située immédiatement au sud de l'Égypte (dans le territoire de l'actuel pays du Soudan). Elle s'étirait le long de la vallée du Nil moyen, dans une zone géographique marquée par les six « cataractes » du Nil, des passages rocheux où le fleuve est agité par de violents rapides, rendant la navigation en bateau difficile et dangereuse. C'était une terre riche en métaux précieux, en bétail et en produits tropicaux.

2. Des relations tumultueuses avec l'Égypte
Pendant plus de deux millénaires, l'Égypte et la Nubie ont entretenu des relations intenses mêlant commerce et guerres sanglantes. Les Pharaons d'Égypte convoitaient ardemment les richesses fabuleuses de la Nubie : son or abondant (le mot nubien 'Noub' signifie or), l'ivoire des éléphants, le bois d'ébène noir précieux et les peaux de panthères. Durant l'Ancien et le Nouvel Empire, les armées égyptiennes ont souvent envahi la Nubie pour la piller et la coloniser, y construisant des temples de propagande.

3. Le Royaume de Koush et l'épopée des Pharaons noirs
Malgré la domination égyptienne, les populations nubiennes ont su s'organiser pour fonder un État indépendant et redoutable : le Royaume de Koush. Ce royaume a eu plusieurs capitales successives au fil des siècles : Kerma, Napata, puis Méroé.
Au VIIIème siècle avant Jésus-Christ (vers 750 av. J.-C.), profitant d'une période d'anarchie et de faiblesse politique en Égypte, le puissant roi nubien Piankhy lance une invasion militaire fulgurante vers le Nord. Il conquiert toute l'Égypte ! Les rois de Nubie s'installent sur le trône de Memphis et fondent la XXVème dynastie égyptienne. Les historiens les appellent les Pharaons noirs. Des souverains comme Taharqa ont régné avec gloire sur un empire géant s'étendant du cœur du Soudan jusqu'au bord de la mer Méditerranée, protégeant le pays contre les invasions étrangères.

4. La brillante civilisation de Méroé
Chassés d'Égypte par l'invasion des Assyriens armés de fer, les rois nubiens se replient vers le sud et installent définitivement leur capitale à Méroé (près de l'actuelle Khartoum). Méroé devient alors l'un des plus grands centres de la métallurgie et de la production de fer de toute l'Afrique antique, surnommé « la Birmingham de l'Afrique ».
Les Méroïtes ont développé une culture originale : ils ont construit plus de 200 pyramides pointues pour enterrer leurs rois et reines (les Candaces, des reines-mères puissantes), ont adoré un dieu guerrier local à tête de lion nommé Apédémak, et ont inventé leur propre système d'écriture alphabétique, le méroïtique, qui n'est pas encore totalement déchiffré de nos jours.`,
  sections: [
    {
      title: "1. Le cadre géographique de la Nubie",
      content: [
        `Localisation : Située au sud de l'Égypte (Soudan actuel), le long du cours moyen du Nil.`,
        `Relief fluvial : Espace scandé par six cataractes rocheuses formant des barrières de rapides qui compliquent la navigation.`,
        `Richesses convoitées : Terroir abondant en or (Noub signifie « or » en nubien), ivoire, ébène précieux, bétail et peaux de fauves.`
      ]
    },
    {
      title: "2. Des relations tumultueuses avec l'Égypte",
      content: [
        `Deux millénaires d'échanges et de guerres : Convoitise égyptienne pour le métal jaune et les matières premières africaines.`,
        `Incursions militaires : Les pharaons de l'Ancien et du Nouvel Empire colonisent périodiquement la Nubie, y érigeant forteresses et sanctuaires de propagande.`
      ]
    },
    {
      title: "3. Le Royaume de Koush et l'épopée des Pharaons noirs",
      content: [
        `Émergence koushite : Capitales successives à Kerma, Napata puis Méroé.`,
        `Conquête de l'Égypte (vers -750) : Le roi koushite Piankhy mène ses armées vers le Nord et unifie l'Égypte sous la XXVème dynastie des « Pharaons noirs ».`,
        `Le règne de Taharqa : Souverain illustre régnant de Khartoum au delta de la Méditerranée, protecteur des arts et rempart face aux menaces extérieures.`
      ]
    },
    {
      title: "4. La brillante civilisation de Méroé",
      content: [
        `Repli stratégique : Chassés du trône d'Égypte par les Assyriens dotés d'armes de fer, les rois nubiens établissent leur capitale à Méroé.`,
        `Capitale de la métallurgie du fer : Hauts-fourneaux méroïtes produisant du fer en grande quantité (« la Birmingham de l'Afrique antique »).`,
        `Culture originale : Plus de 200 pyramides royales aux pentes abruptes, vénération du dieu lion Apédémak, règne des reines-mères Candaces et mise au point de l'écriture méroïtique.`
      ]
    }
  ],
  diagram: {
    title: "LA NUBIE ANTIQUE ET LE ROYAUME DE KOUSH",
    root: "NUBIE ANTIQUE",
    branches: [
      {
        name: "Cadre & Ressources",
        subtitle: "Moyen Nil (Soudan)",
        items: ["Six cataractes du Nil", "Or abondant ('Noub')", "Ivoire, ébène & peaux"]
      },
      {
        name: "XXVème Dynastie",
        subtitle: "Les Pharaons Noirs (-750)",
        items: ["Roi Piankhy unifie l'Égypte", "Royaume de Koush (Napata)", "Splendeur du roi Taharqa"]
      },
      {
        name: "Civilisation de Méroé",
        subtitle: "Métallurgie & Culture",
        items: ["Sidérurgie du fer de pointe", "Plus de 200 pyramides pointues", "Reines Candaces & Apédémak"]
      }
    ]
  },
  conclusion: `En conclusion, la Nubie antique et le royaume de Koush attestent de la puissance et du dynamisme des civilisations d'Afrique subsaharienne. En renversant les rapports de force pour conquérir l'Égypte et en fondant à Méroé un carrefour sidérurgique et architectural novateur, le peuple nubien a marqué l'Antiquité d'une empreinte indélébile.`
};

export const LESSON_11_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-11',
  number: 'Leçon 11',
  title: "L'ÉTHIOPIE ANTIQUE (LE ROYAUME D'AKSOUM)",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `Sur les hauts plateaux de la Corne de l'Afrique s'est édifié dès l'Antiquité le prestigieux royaume d'Aksoum. Grâce à sa façade sur la mer Rouge et à des souverains visionnaires, cet État puissant s'est érigé au rang des quatre plus grands empires de son époque, devenant un carrefour commercial mondial et un pionnier du christianisme officiel.`,
  fullText: `TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
Leçon 11 : L'Éthiopie antique (le royaume d'Aksoum)

1. Le cadre géographique et la naissance d'Aksoum
L'Éthiopie antique s'est épanouie sur les hauts plateaux montagneux et volcaniques de la Corne de l'Afrique, une région d'accès difficile mais bénéficiant de pluies régulières favorables à l'agriculture. Vers le IVème siècle avant J.-C., grâce au mélange entre les populations africaines locales et des vagues de migrants sabéens venus du sud de la péninsule arabique (le Yémen actuel), émerge un État centralisé puissant : le Royaume d'Aksoum, du nom de sa capitale politique intérieure, la cité d'Aksoum.

2. Aksoum, un carrefour du commerce mondial
Le royaume d'Aksoum possédait un atout géographique majeur : une façade maritime directe sur la mer Rouge avec le grand port de commerce d'Adoulis. Grâce à ce débouché maritime, Aksoum est devenu pendant plusieurs siècles l'une des quatre plus grandes puissances de l'Antiquité, au même niveau que l'Empire romain, l'Empire perse et l'Empire chinois.
Les marchands d'Aksoum achetaient dans l'intérieur de l'Afrique de l'or, de la corne de rhinocéros, de l'ivoire, de la myrrhe et de l'encens précieux. Ils revendaient ces produits de luxe aux navires grecs, romains, perses et indiens en échange de tissus de soie de Chine, de couteaux en fer, d'épices d'Inde et de verreries romaines raffinées. Preuve de sa puissance économique colossale, Aksoum était le seul État africain en dehors de l'Égypte à frapper sa propre monnaie en or, en argent et en bronze, gravée au nom de ses rois.

3. Le roi Ezana et la christianisation précoce
Au IVème siècle après Jésus-Christ (vers l'an 330), le royaume d'Aksoum est gouverné par un souverain brillant nommé le roi Ezana. Sous l'influence d'un jeune chrétien originaire de Tyr nommé Frumentius, le roi Ezana décide de rejeter les anciennes religions polythéistes pour se convertir personnellement au christianisme. Il proclame immédiatement le christianisme comme religion officielle de tout son État. L'Éthiopie devient ainsi l'un des tous premiers pays chrétiens officiels au monde, bien avant la majorité des pays d'Europe.
Pour manifester sa gloire et sa piété, le royaume d'Aksoum a laissé des monuments extraordinaires : de gigantesques blocs de pierre monolithiques (taillés dans un seul morceau de roche de granit) appelés des obélisques ou stèles d'Aksoum, s'élevant à plus de 20 ou 30 mètres de hauteur, représentant des maisons symboliques à plusieurs étages.`,
  sections: [
    {
      title: "1. Le cadre géographique et la naissance d'Aksoum",
      content: [
        `Localisation : Hauts plateaux volcaniques de la Corne de l'Afrique, arrosés par des pluies abondantes propices aux cultures.`,
        `Fondation (IVe s. av. J.-C.) : Symbiose entre les peuples africains autochtones et des colons sabéens venus du sud de la péninsule arabique (actuel Yémen). Naissance de la capitale intérieure, Aksoum.`
      ]
    },
    {
      title: "2. Aksoum, un carrefour du commerce mondial",
      content: [
        `Débouché maritime d'Adoulis : Grand port sur la mer Rouge connectant l'empire aux flottes marchandes de la Méditerranée et de l'Océan Indien.`,
        `Rang impérial mondial : Reconnu comme l'un des quatre géants de l'époque avec Rome, la Perse et la Chine.`,
        `Courants marchands : Échange d'ivoire, corne de rhinocéros, or, myrrhe et encens d'Afrique contre soieries chinoises, armes de fer, verreries romaines et épices d'Inde.`,
        `Monnaie aksoumite : Seul État subsaharien à frapper sa propre monnaie officielle en or, argent et bronze aux effigies royales.`
      ]
    },
    {
      title: "3. Le roi Ezana et la christianisation précoce",
      content: [
        `Conversion officielle (vers 330 apr. J.-C.) : Guidé par Frumentius, le roi Ezana embrasse le christianisme et en fait la religion d'État, faisant de l'Éthiopie l'une des nations chrétiennes pionnières du monde.`,
        `Monuments monolithiques : Érection de stèles et obélisques taillés d'un seul bloc de granit atteignant 20 à 30 mètres, symbolisant des édifices à étages en hommage aux rois et à la foi.`
      ]
    }
  ],
  diagram: {
    title: "PUISSANCE DU ROYAUME D'AKSOUM",
    root: "ROYAUME D'AKSOUM",
    branches: [
      {
        name: "Situation & Origine",
        subtitle: "Hauts plateaux de la Corne",
        items: ["Terres fertiles d'Éthiopie", "Fusion africaine et sabéenne", "Capitale politique Aksoum"]
      },
      {
        name: "Commerce Maritime",
        subtitle: "Port d'Adoulis (Mer Rouge)",
        items: ["Pôle mondial (Rome, Perse, Chine)", "Or, ivoire, encens et soies", "Monnaie propre en or et argent"]
      },
      {
        name: "Foi & Architecture",
        subtitle: "Roi Ezana (vers 330)",
        items: ["Christianisme religion d'État", "Stèles monolithiques de 30m", "Héritage chrétien millénaire"]
      }
    ]
  },
  conclusion: `En conclusion, le royaume d'Aksoum a illustré de manière magistrale le rôle de l'Afrique de l'Est comme carrefour majeur des réseaux économiques mondiaux de l'Antiquité. Son adhésion précoce au christianisme et ses imposants obélisques continuent de faire de l'Éthiopie un foyer culturel unique.`
};

export const LESSON_12_HISTOIRE_6EME: LessonContent = {
  id: 'histoire-6eme-lecon-12',
  number: 'Leçon 12',
  title: "LES RELATIONS ENTRE L'AFRIQUE DU NORD-EST ET LE RESTE DU MONDE ANTIQUE",
  subject: 'Histoire',
  classLevel: '6ème',
  introduction: `Loin d'avoir évolué en vase clos ou dans l'isolement, l'Afrique du Nord-Est — formée par l'Égypte, la Nubie et l'Éthiopie — a constitué durant toute l'Antiquité un pôle géopolitique et commercial stratégique. Véritable passerelle entre le cœur de l'Afrique, l'Asie des grands fleuves et le monde méditerranéen, cette région a nourri des circuits d'échanges essentiels à la prospérité des empires antiques.`,
  fullText: `TROISIÈME PARTIE : L'AFRIQUE DU NORD-EST DANS L'ANTIQUITÉ
Leçon 12 : Les relations entre l'Afrique du Nord-Est et le reste du monde antique

1. Un pôle d'échanges commerciaux intenses
L'Afrique du Nord-Est (composée du bloc Égypte, Nubie et Éthiopie) n'était en aucune manière isolée ou coupée du reste du monde pendant l'Antiquité. Elle se situait au contraire au centre géopolitique et économique d'un vaste réseau d'échanges internationaux qui reliait l'Afrique profonde, l'Europe méditerranéenne et l'Asie des fleuves.
- Les routes intérieures africaines : Des caravanes régulières de marchands égyptiens et nubiens s'enfonçaient profondément vers le cœur de l'Afrique de l'Ouest (Soudan occidental) et de l'Afrique centrale pour obtenir par troc des richesses comme l'or, les plumes d'autruche, les huiles végétales et les animaux exotiques.
- Les routes maritimes : L'Égypte vendait ses immenses surplus de céréales (le blé) et ses rouleaux de papyrus (le support d'écriture exclusif de l'époque) à tout le bassin de la Méditerranée (les Phéniciens, les Grecs, puis les Romains). Rome dépendait totalement du blé égyptien pour nourrir sa population.`,
  sections: [
    {
      title: "1. Un carrefour stratégique international",
      content: [
        `Une centralité géographique : Le bloc Égypte-Nubie-Éthiopie occupait une place névralgique entre l'Europe méditerranéenne, le Proche-Orient et l'Afrique subsaharienne.`,
        `Réseaux terrestres et fluviaux : Le Nil assurait la liaison nord-sud, tandis que les routes caravanières traversaient les étendues désertiques pour relier les oasis et marchés régionaux.`
      ]
    },
    {
      title: "2. Les routes intérieures vers l'Afrique profonde",
      content: [
        `Circuits caravaniers : Échanges réguliers menés vers l'Afrique centrale et le Soudan occidental (Afrique de l'Ouest).`,
        `Marchandises recherchées : Acquisition par voie de troc d'or, de plumes d'autruche, de gommes, de bois précieux, d'huiles végétales et d'animaux de parade.`
      ]
    },
    {
      title: "3. Les routes maritimes et l'approvisionnement de la Méditerranée",
      content: [
        `Navigation méditerranéenne : Des flottes marchandes phéniciennes, grecques puis romaines fréquentaient les ports égyptiens pour s'approvisionner en blé et en papyrus.`,
        `L'Égypte, « grenier de Rome » : Les récoltes céréalières abondantes rendues possibles par le limon du Nil étaient vitales pour ravitailler la plèbe de Rome et maintenir la paix sociale au sein de l'Empire romain.`
      ]
    }
  ],
  diagram: {
    title: "LES RÉSEAUX D'ÉCHANGES DE L'AFRIQUE DU NORD-EST",
    root: "ÉCHANGES DU NORD-EST",
    branches: [
      {
        name: "Routes Intérieures",
        subtitle: "Caravanes vers l'Afrique profonde",
        items: ["Soudan occidental & Centrafrique", "Or, peaux, gommes, ivoire", "Circuits de troc séculaires"]
      },
      {
        name: "Routes Maritimes",
        subtitle: "Méditerranée & Mer Rouge",
        items: ["Flottes phéniciennes et grecques", "Exportation massive de papyrus", "Port d'Adoulis ouvert sur l'Inde"]
      },
      {
        name: "Le Grenier de Rome",
        subtitle: "Nourrir la Méditerranée",
        items: ["Surplus de blé égyptien", "Approvisionnement de la capitale romaine", "Interdépendance économique"]
      }
    ]
  },
  conclusion: `En conclusion, l'Afrique du Nord-Est antique fut un moteur incontournable de l'économie et de la culture mondiales. Par ses routes caravanières transcontinentales et ses voies maritimes méditerranéennes et orientales, elle a connecté des peuples éloignés et favorisé un brassage fécond d'inventions, de biens et de croyances.`
};
