import { LessonContent } from './courses';
import {
  SVG_HIST4_CHAKA_ZOULOU_TACTIQUE,
  SVG_HIST4_MADAGASCAR_MERINA
} from './diagrams_4eme_histoire';

// =========================================================================
// COURS D'HISTOIRE 4ÈME — SÉNÉGAL (PROGRAMME OFFICIEL COMPLET SANS RÉSUMÉ)
// LEÇONS 9 À 13 : DÉCLIN DU GAABU, GRANDS EMPIRES PEULS, EMPIRE D'EL HADJ OUMAR,
//                 CHAKA ZOULOU & MFECANE, MADAGASCAR ET ROYAUME MERINA
// =========================================================================

export const LESSON_9_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-9',
  number: 'Leçon 9',
  title: 'LES ENTITÉS POLITIQUES NÉES DU DÉCLIN DU ROYAUME DU GAABU',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Grand royaume mandingue fondé au XIIIe siècle comme province de l'Empire du Mali par Tiramakhan Traoré, le Gaabu (ou Kaabu) a dominé la Haute-Casamance, la Gambie et la Guinée-Bissau. Au XIXe siècle, son déclin sous la pression des révoltes peules donne naissance à de nouvelles entités politiques.",
  fullText: `Leçon 9 : Les entités politiques nées du déclin du royaume du Gaabu

Introduction
Grand royaume mandingue fondé au XIIIe siècle comme province de l'Empire du Mali par Tiramakhan Traoré, le Gaabu (ou Kaabu) a dominé la Haute-Casamance, la Gambie et la Guinée-Bissau. Au XIXe siècle, son déclin sous la pression des révoltes peules donne naissance à de nouvelles entités politiques.

I. L'apogée et les causes de l'affaiblissement du Gaabu
Le Gaabu tire sa puissance de son armée de guerriers d'élite (les Nyancho) et du contrôle de la traite atlantique. Cependant, le royaume s'affaiblit en raison :
• Des rivalités internes sanglantes pour le trône entre provinces rivales (Jimara, Sama, Pachana).
• De l'oppression et des taxes excessives imposées aux populations pastorales peules, traitées comme des citoyens de seconde zone.
• De la montée en puissance de l'Islam parmi les Peuls, en opposition à la religion traditionnelle des souverains mandingues.

II. La chute du Gaabu : La bataille de Kansala (1867)
En 1867, l'armée coalisée des Peuls du Fouta-Djalon et des Peuls locaux, dirigée par Alfa Yaya et soutenue par les révoltés, assiège la capitale fortifiée du Gaabu, Kansala. Après onze jours d'un siège héroïque, le roi du Gaabu, Mansa Dianke Wali Sané, refusant de se rendre aux musulmans, fait sauter les poudrières de la forteresse. Cet acte tragique (connu sous le nom de « Turubang » ou destruction totale) marque la fin définitive de l'empire mandingue.

III. Les nouvelles entités politiques : L'émergence du Fouladou
Sur les ruines du Gaabu émergent de nouvelles principautés, dont la plus puissante est le Fouladou (en Haute-Casamance).
• Fondé par Alpha Molo Baldé, un chef peul révolté qui s'empare du pouvoir avec l'appui des marabouts.
• Son fils, Moussa Molo Baldé, lui succède et consolide le royaume en l'unifiant, avant de devoir composer puis s'affronter avec les puissances coloniales française et portugaise.

Conclusion
La fin dramatique du Gaabu à Kansala illustre le basculement du pouvoir en Sénégambie méridionale, passant de l'aristocratie mandingue traditionnelle à l'hégémonie des royaumes peuls islamisés.`,
  sections: [
    {
      title: "I. L'apogée mandingue du Gaabu et les causes de son effondrement",
      content: [
        "• L'héritage de Tiramakhan Traoré : Fondé au XIIIe siècle par le général légendaire de Soundiata Keïta, le royaume fédéral du Gaabu contrôlait un vaste espace recouvrant la Haute-Casamance sénégalaise, les rives du fleuve Gambie et la Guinée-Bissau.",
        "• L'aristocratie guerrière des Nyancho et Koring : Le pouvoir reposait sur une caste militaire d'une fierté sans égale, les Nyancho (descendants de la princesse royale Balaba), réputés pour préférer la mort au déshonneur et méprisant le travail de la terre.",
        "• Les causes structurelles de la ruine :",
        "  - Guerres intestines de succession : Rivalités permanentes entre les trois provinces royales (Jimara, Sama et Pachana) pour détenir la couronne impériale.",
        "  - Tyrannie envers les pasteurs Peuls : Les Peuls pasteurs étaient asservis à des corvées perpétuelles, dépouillés de leurs troupeaux et interdits d'accès aux charges de commandement.",
        "  - Choc religieux : Alors que les Nyancho demeuraient attachés aux cultes traditionnels et aux libations rituelles, les Peuls embrassaient l'Islam et nouaient des alliances avec les grands foyers théocratiques voisins (notamment le Fouta-Djalon)."
      ]
    },
    {
      title: 'II. Le siège apocalyptique de Kansala (1867) et le Turubang',
      content: [
        "• La grande coalition musulmane : En 1867, l'Almamy du Fouta-Djalon (Oumar) mobilise une immense armée de cavaliers et fantassins armés de fusils, qui fait sa jonction avec les insurgés peuls locaux sous la bannière du djihad.",
        "• Onze jours d'enfer dans le 'Tata' de Kansala : La forteresse de Kansala, protégée par sept remparts concentriques en troncs de palmiers et briques de latérite, résiste à des assauts meurtriers. Les femmes mandingues chantent pour galvaniser les guerriers Nyancho qui luttent jusqu'à la dernière cartouche.",
        "• Le suicide collectif héroïque (Turubang) : Comprenant que la défaite est inévitable et refusant l'humiliation d'être réduit en esclavage par ses anciens sujets, le dernier Mansa Dianke Wali Sané ordonne d'allumer la mèche des réserves royales de poudre à canon. L'explosion pulvérise le palais, le roi, ses courtisans et des milliers d'assaillants. Ce sacrifice d'honneur reste gravé dans la mémoire de la Sénégambie sous le nom de Turubang ('la destruction totale')."
      ]
    },
    {
      title: "III. L'émergence du Fouladou : D'Alpha Molo à Moussa Molo Baldé",
      content: [
        "Sur les décombres de l'empire mandingue se lève l'État peul du Fouladou en Haute-Casamance :",
        "• Alpha Molo Baldé (fondateur) : Chasseur émérite et meneur d'hommes respecté, il unifie les Peuls de Casamance, proclame la libération de son peuple et bâtit sa capitale à Ndorna, avec la bénédiction maraboutique.",
        "• Moussa Molo Baldé (le consolidateur) : À la mort de son père en 1881, Moussa Molo s'impose comme un stratège redoutable. Il centralise le royaume, crée une armée moderne équipée de fusils à tir rapide et déplace sa capitale à Hamdallaye.",
        "• Face à la pénétration coloniale : Coincé entre les Français au nord et les Portugais au sud, Moussa Molo use d'une diplomatie louvoyante (traités d'alliance, puis résistance armée) avant de devoir s'exiler en Gambie britannique en 1903 pour ne pas être capturé par l'armée française."
      ],
      table: {
        headers: ['Période historique', 'Royaume dominant', 'Dirigeants emblématiques', 'Faits marquants & Héritage'],
        rows: [
          ['XIIIe - 1867', 'Royaume du Gaabu', 'Tiramakhan Traoré, Dianke Wali Sané', 'Aristocratie Nyancho, traite atlantique, siège de Kansala (Turubang)'],
          ['1867 - 1881', 'Fouladou Naissant', 'Alpha Molo Baldé', 'Révolte peule victorieuse, émancipation sociale, alliance islamique'],
          ['1881 - 1903', 'Fouladou Unifié', 'Moussa Molo Baldé', 'Modernisation militaire, capitale Hamdallaye, résistance coloniale']
        ]
      }
    }
  ],
  diagram: {
    title: 'Transition géopolitique du Gaabu au Fouladou',
    root: 'DÉCLIN DU GAABU & FOULADOU',
    branches: [
      {
        name: 'Royaume du Gaabu',
        subtitle: 'Mandingues & Nyancho',
        items: [
          'Fondation XIIIe siècle (Tiramakhan)',
          'Oppression des pasteurs peuls',
          'Rivalités successorales sanglantes'
        ]
      },
      {
        name: 'Bataille de Kansala (1867)',
        subtitle: 'Chute & Turubang',
        items: [
          'Coalition Fouta-Djalon et Peuls',
          'Siège héroïque de 11 jours',
          'Suicide du Mansa Dianke Wali Sané'
        ]
      },
      {
        name: 'Royaume du Fouladou',
        subtitle: 'Hégémonie Peule',
        items: [
          'Alpha Molo Baldé (libérateur)',
          'Moussa Molo Baldé (consolidateur)',
          'Résistance face à France & Portugal'
        ]
      }
    ]
  },
  conclusion: "La fin dramatique du Gaabu à Kansala illustre le basculement du pouvoir en Sénégambie méridionale, passant de l'aristocratie mandingue traditionnelle à l'hégémonie des royaumes peuls islamisés."
};

export const LESSON_10_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-10',
  number: 'Leçon 10',
  title: 'LES GRANDS EMPIRES PEULS DU XIXE SIÈCLE',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Au XIXe siècle, l'Afrique de l'Ouest est traversée par une vague de révolutions religieuses et politiques menées par des lettrés musulmans peuls. Ces djihads aboutissent à la création de vastes empires théocratiques qui transforment durablement la région.",
  fullText: `Leçon 10 : Les grands empires peuls du XIXe siècle

Introduction
Au XIXe siècle, l'Afrique de l'Ouest est traversée par une vague de révolutions religieuses et politiques menées par des lettrés musulmans peuls. Ces djihads aboutissent à la création de vastes empires théocratiques qui transforment durablement la région.

I. Le Califat de Sokoto (Ousman Dan Fodio)
• Les origines : Au pays haoussa (actuel nord du Nigeria), le savant et prédicateur peul Ousman Dan Fodio s'insurge contre la corruption, les impôts illégaux et le paganisme des rois haoussas.
• Le Djihad (1804) : Proclamé Commandeur des croyants, il lance la guerre sainte, renverse les cités-États haoussas (Kano, Katsina, Gobir) et fonde le puissant Califat de Sokoto.
• Organisation : Divisé en émirats semi-autonomes sous l'autorité morale du calife, Sokoto devient le plus vaste État d'Afrique au XIXe siècle, favorisant une floraison intellectuelle et littéraire sans précédent.

II. L'Empire peul du Macina (Sékou Amadou)
• La fondation (1818) : Dans le delta central du fleuve Niger (Mali actuel), le marabout Sékou Amadou Barry se soulève contre la domination des rois animistes bambaras de Ségou et les chefs peuls traditionnels. Il remporte la bataille de Noukouma en 1818.
• La Diina : Sékou Amadou fonde sa capitale à Hamdallahi (« Louange à Dieu ») et instaure un État islamique rigoureux appelé la Diina. L'empire se caractérise par une administration très centralisée, la sédentarisation planifiée des éleveurs nomades, la gestion rationnelle des pâturages et une stricte justice sociale.

III. La portée historique des empires peuls
Ces empires ont unifié d'immenses territoires, encouragé l'alphabétisation en caractères arabes (ajami) et profondément enraciné l'Islam au sein des populations rurales. Cependant, ils ont également suscité des résistances locales chez les peuples non-musulmans.

Conclusion
Les empires de Sokoto et du Macina ont représenté des modèles d'organisation étatique novateurs, combinant ferveur religieuse, justice sociale et administration centralisée à la veille de la conquête coloniale.`,
  sections: [
    {
      title: 'I. Le Califat de Sokoto fondé par Ousman Dan Fodio (1804)',
      content: [
        "• La prédication réformatrice : Au pays Haoussa, Ousman Dan Fodio (1754-1817), lettré peul de la confrérie Qadiriyya, dénonce l'arbitraire des rois haoussas (les Sarkis), la fiscalité illégale non coranique, l'injustice sociale et le syncrétisme religieux.",
        "• Le Djihad de 1804 : Menacé de mort par le roi de Gobir Yunfa, Dan Fodio accomplit son hégire vers Gudu, est investi Commandeur des Croyants (Amir al-Mouminine) et mobilise pasteurs peuls et paysans haoussas opprimés.",
        "• Édification du califat : Entre 1804 et 1808, les cités prestigieuses de Kano, Katsina, Zaria et Gobir sont conquises. Dan Fodio établit sa capitale à Sokoto.",
        "• Structure politique et floraison des lettres : Le califat s'étend sur 30 émirats (dont Kano, Adamawa, Gombe) gouvernés par des émirs investis par le calife. Dan Fodio, son frère Abdullahi et son fils Mohammed Bello rédigent des centaines d'ouvrages théologiques, juridiques et poétiques. Sa fille, Nana Asma'u, lance le mouvement novateur 'Yan Taru' pour l'alphabétisation et l'émancipation intellectuelle des femmes."
      ]
    },
    {
      title: "II. L'Empire peul du Macina et l'utopie sociale de la Diina (1818)",
      content: [
        "• Le soulèvement de Sékou Amadou (1818) : Dans le delta intérieur du Niger, les Peuls musulmans sont dominés par les rois bambaras animistes de Ségou et leurs vassaux locaux (les Ardos). Le marabout Sékou Amadou Barry prêche la réforme religieuse et écrase l'armée de Ségou à la bataille de Noukouma (1818).",
        "• La capitale Hamdallahi et la Diina : Sékou Amadou fait ériger une ville nouvelle sobre et pieuse, baptisée Hamdallahi ('Louange à Dieu'). Il baptise son gouvernement 'la Diina' (la religion vécue au quotidien).",
        "• Une gestion agropastorale révolutionnaire :",
        "  - Cadastre pastoral : Division précise des terres inondables du delta en bourgoutières (pâturages aquatiques), réglementation stricte des dates de transhumance et ordre de passage des troupeaux pour éviter les conflits.",
        "  - Sédentarisation et éducation : Fixation des éleveurs nomades dans des villages pourvus d'écoles coraniques obligatoires pour garçons et filles.",
        "  - Prévoyance sociale : Création de greniers de réserve d'État pour prévenir les famines et assistance publique aux orphelins et démunis."
      ],
      table: {
        headers: ['Empire théocratique', 'Fondateur & Capitale', 'Année du Djihad', 'Innovations majeures'],
        rows: [
          ['Califat de Sokoto', 'Ousman Dan Fodio • Sokoto (Nigeria)', '1804', '30 émirats, fédération califale, éducation des femmes (Nana Asma\'u)'],
          ['Empire du Macina (Diina)', 'Sékou Amadou Barry • Hamdallahi (Mali)', '1818', 'Gestion rationnelle du delta du Niger, cadastre des bourgoutières, gratuité scolaire']
        ]
      }
    },
    {
      title: 'III. La portée historique et les limites des empires peuls',
      content: [
        "• Renaissance intellectuelle et unification économique : Substitution des rivalités tribales par un droit écrit unifié (charia), sécurisation des grands axes marchands, essor de la monnaie (cauris) et rayonnement de la littérature en ajami (langues peule et haoussa transcrites en caractères arabes).",
        "• Fragilités et résistances : Les populations sédentaires non-musulmanes (comme les Bambaras ou les animistes du plateau central) vécurent ces conquêtes comme une domination étrangère.",
        "• Héritage : Ces empires ont durablement redessiné la carte confessionnelle et politique de l'Afrique sahélienne jusqu'à nos jours."
      ]
    }
  ],
  diagram: {
    title: 'Comparaison des empires théocratiques peuls du XIXe siècle',
    root: 'EMPIRES PEULS DU XIXE',
    branches: [
      {
        name: 'Califat de Sokoto (1804)',
        subtitle: 'Ousman Dan Fodio',
        items: [
          'Chute des cités haoussas (Kano, Katsina)',
          'Structure en 30 émirats fédérés',
          'Rôle pionnier de Nana Asma\'u'
        ]
      },
      {
        name: 'Empire du Macina (1818)',
        subtitle: 'Sékou Amadou (Hamdallahi)',
        items: [
          'Victoire de Noukouma contre Ségou',
          'État de la Diina & gestion du delta',
          'Cadastre des pâturages & greniers d\'État'
        ]
      },
      {
        name: 'Impact Historique',
        subtitle: 'Société & Culture',
        items: [
          'Unification de grands bassins sahéliens',
          'Floraison des écrits en ajami',
          'Enracinement populaire de l\'Islam'
        ]
      }
    ]
  },
  conclusion: "Les empires de Sokoto et du Macina ont représenté des modèles d'organisation étatique novateurs, combinant ferveur religieuse, justice sociale et administration centralisée à la veille de la conquête coloniale."
};

export const LESSON_11_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-11',
  number: 'Leçon 11',
  title: 'L’EMPIRE TOUCOULEUR D\'EL HADJ OUMAR TALL',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Au milieu du XIXe siècle, El Hadj Oumar Foutiyou Tall, guide religieux et chef de guerre exceptionnel originaire du Fouta-Toro, bâtit un immense empire en Afrique de l'Ouest à travers un vaste mouvement de djihad inspiré par la confrérie Tijaniyya.",
  fullText: `Leçon 11 : L’Empire Toucouleur d'El Hadj Oumar Tall

Introduction
Au milieu du XIXe siècle, El Hadj Oumar Foutiyou Tall, guide religieux et chef de guerre exceptionnel originaire du Fouta-Toro, bâtit un immense empire en Afrique de l'Ouest à travers un vaste mouvement de djihad inspiré par la confrérie Tijaniyya.

I. La formation religieuse et l'idéologie d'Oumar Tall
Né à Halwar près de Podor vers 1797, Oumar Tall acquiert une immense érudition islamique. Lors de son pèlerinage à La Mecque, il est initié à la confrérie soufie Tijaniyya et nommé Khalife pour l'Afrique de l'Ouest. De retour, il prêche un islam réformateur et égalitaire, attirant des milliers de disciples (les Talibés) dévoués, notamment parmi les jeunes et les opprimés.

II. Les conquêtes militaires et l'édification de l'empire
Installé à Dinguiraye (Fouta-Djalon), il commence à fabriquer des armes et lance son djihad en 1852 :
• Conflit avec la France : Face à l'avancée coloniale de Faidherbe, il assiège le fort français de Médine en 1857. Après cet échec militaire, il réoriente ses conquêtes vers l'Est.
• Conquête des royaumes bambaras : Il s'empare du Kaarta, puis prend la capitale du royaume animiste bambara de Ségou en 1861.
• Prise du Macina (1862) : Il attaque et conquiert l'Empire peul du Macina (Hamdallahi), un conflit tragique entre musulmans qui suscite de vives contestations.

III. La fin tragique et la succession
En 1864, face à une grande révolte coalisée des Peuls et des Bambaras, El Hadj Oumar Tall doit fuir Hamdallahi et disparaît mystérieusement dans les falaises de Bandiagara (Grotte de Dégembéré).
Son fils Ahmadou Cheikhou lui succède à Ségou, mais doit faire face aux querelles fratricides entre héritiers et à la révolte permanente des peuples conquis, ce qui facilitera la conquête française menée par Archinard à la fin du XIXe siècle.

Conclusion
L'Empire Toucouleur d'El Hadj Oumar Tall a été une tentative grandiose de fédération islamique ouest-africaine contre le paganisme et l'expansion coloniale, mais sa cohésion interne fragile a précipité sa chute.`,
  sections: [
    {
      title: "I. L'homme, sa formation mystique et le messianisme tijane",
      content: [
        "• Origines au Fouta-Toro : Né vers 1797 à Halwar (près de Podor) dans une famille de lettrés torodbe, Oumar Saïdou Tall mémorise le Coran dès son plus jeune âge et étudie les traités de droit et de théologie.",
        "• Le pèlerinage initiatique à La Mecque (1826-1830) : Il accomplit le Hajj, réside à Médine où il est initié aux arcanes spirituels de la Tijaniyya par Cheikh Mohammed Al-Ghali. Ce dernier le nomme 'Khalife de la Tijaniyya pour le Soudan occidental'.",
        "• Le voyage du retour et l'aura panafricaine : Il séjourne au Bornou, à Sokoto (où il épouse une fille du calife Mohammed Bello) et au Fouta-Djalon. Partout, son éloquence, ses écrits (notamment 'Rimah Hizb Ar-Rahim') et ses prières lui attirent une réputation de thaumaturge et de réformateur attendu.",
        "• Le sanctuaire de Dinguiraye : Établi à Dinguiraye en 1848 avec ses disciples ('Talibés'), il bâtit un grand tata fortifié, fait fondre des canons et achète des fusils modernes aux comptoirs anglais de Sierra Leone."
      ]
    },
    {
      title: "II. L'expansion militaire de l'Empire Toucouleur (1852-1862)",
      content: [
        "En 1852, El Hadj Oumar Tall reçoit l'ordre mystique de proclamer le djihad :",
        "• Le choc frontal avec Faidherbe et le siège de Médine (1857) :",
        "  - Oumar Tall tente de bloquer la remontée coloniale française sur le haut fleuve Sénégal.",
        "  - Il met le siège devant le fort de Médine commandé par le métis saint-louisien Paul Holle. Après 97 jours d'un siège héroïque, Faidherbe arrive en renfort par vapeur d'eau et brise l'étau le 18 juillet 1857.",
        "  - Tirant la leçon de la puissance de feu de l'artillerie française, Oumar Tall renonce au Sénégal et réoriente ses conquêtes vers l'est soudanais.",
        "• La chute du royaume bambara du Kaarta (1855-1857) puis de Ségou (1861) : Les armées omariennes écrasent les armées animistes des Diarra. Ségou devient la capitale politique de l'empire.",
        "• La tragique conquête du Macina musulman (1862) : Accusant le roi du Macina Amadou Amadou d'avoir pactisé avec les païens de Ségou, Oumar Tall s'empare de Hamdallahi. Ce fratricide entre deux empires musulmans choque profondément les oulémas et soulève la réprobation des populations locales."
      ]
    },
    {
      title: "III. La disparition de Bandiagara (1864) et la succession difficile",
      content: [
        "• L'insurrection générale et la grotte de Dégembéré : En 1863, une rébellion massive éclate dans le Macina, soutenue par les Kounta de Tombouctou. Encerclé à Hamdallahi, El Hadj Oumar parvient à briser les lignes ennemies et se réfugie dans les falaises inaccessibles du pays Dogon (Bandiagara). Le 12 février 1864, retranché dans la grotte de Dégembéré, il disparaît dans l'explosion de ses réserves de poudre.",
        "• Le règne tourmenté d'Ahmadou Cheikhou (1864-1893) : Son fils aîné Ahmadou est désigné comme successeur à Ségou. Il passe trente ans à lutter contre ses propres demi-frères rebelles (à Nioro et Koniakary) et contre les révoltes bambaras continuelles.",
        "• La chute face au colonel Archinard : Divisé et usé, l'Empire Toucouleur est conquis morceau par morceau par les colonnes françaises (prise de Ségou en 1890, prise de Nioro en 1891). Ahmadou s'enfuit vers l'est et meurt en exil à Dosso (Niger) en 1898."
      ]
    }
  ],
  diagram: {
    title: 'Épopée et étapes de l\'Empire Toucouleur',
    root: 'EMPIRE TOUCOULEUR',
    branches: [
      {
        name: 'Genèse & Foi',
        subtitle: 'Halwar & Dinguiraye',
        items: [
          'Érudition au Fouta-Toro & pèlerinage',
          'Khalife de la confrérie Tijaniyya',
          'Base arrière & arsenal à Dinguiraye'
        ]
      },
      {
        name: 'Conquêtes (1852-1862)',
        subtitle: 'De Médine à Hamdallahi',
        items: [
          'Siège de Médine contre Faidherbe (1857)',
          'Prise du Kaarta et de Ségou (1861)',
          'Conquête du Macina peul (1862)'
        ]
      },
      {
        name: 'Disparition & Fin',
        subtitle: 'Dégembéré à la Colonisation',
        items: [
          'Disparition à Bandiagara (1864)',
          'Ahmadou Cheikhou face aux rivalités',
          'Conquête française du colonel Archinard'
        ]
      }
    ]
  },
  conclusion: "L'Empire Toucouleur d'El Hadj Oumar Tall a été une tentative grandiose de fédération islamique ouest-africaine contre le paganisme et l'expansion coloniale, mais sa cohésion interne fragile a précipité sa chute."
};

export const LESSON_12_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-12',
  number: 'Leçon 12',
  title: 'L’AFRIQUE MÉRIDIONALE : CHAKA ET L’ÉPOPÉE DU PEUPLE ZOULOU (LE MFECANE)',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Au début du XIXe siècle, l'Afrique australe est bouleversée par une révolution militaire et politique fulgurante menée par le roi Chaka Zoulou. Ce mouvement d'expansion et de guerres destructrices est connu sous le nom de Mfecane (le grand écrasement).",
  fullText: `CHAPITRE 3 : L'AFRIQUE MÉRIDIONALE ET INSULAIRE
Leçon 12 : L’Afrique méridionale : Chaka et l’épopée du peuple Zoulou (Le Mfecane)

Introduction
Au début du XIXe siècle, l'Afrique australe est bouleversée par une révolution militaire et politique fulgurante menée par le roi Chaka Zoulou. Ce mouvement d'expansion et de guerres destructrices est connu sous le nom de Mfecane (le grand écrasement).

I. L'ascension de Chaka et les réformes militaires
Né vers 1787, Chaka prend la tête du modeste clan des Zoulous en 1816 sous la tutelle de Dingiswayo, chef des Mthethwa. Dès son accession, il révolutionne complètement l'art de la guerre :
• Armement : Il remplace la longue sagaie de jet par l'iklwa, une sagaie courte à large lame utilisée pour le corps à corps féroce, accompagnée d'un grand bouclier en cuir lourd.
• Tactique militaire : Il invente la formation en « cornes de buffle » (la poitrine attaque de face pendant que les cornes encerclent l'ennemi).
• Discipline de fer : Il organise les guerriers par classes d'âge dans des casernes (régiments des Impi), interdit le mariage aux soldats avant d'avoir prouvé leur bravoure au combat et punit de mort toute lâcheté.

II. Le Mfecane et ses conséquences géopolitiques
Grâce à cette armée invincible, Chaka conquiert d'immenses territoires, intégrant de force les peuples vaincus dans la nation zouloue. Cette expansion brutale déclenche le Mfecane :
• Des vagues de populations terrorisées fuient vers le nord et l'ouest, détruisant tout sur leur passage.
• Création de nouveaux États : Des chefs en fuite fondent de puissants royaumes défensifs, comme le roi Moshoeshoe qui crée le royaume du Lesotho, ou Soshangane qui fonde l'empire de Gaza au Mozambique.
• Dépeuplement de vastes régions : Ce vide humain facilite grandement l'avancée ultérieure des colons blancs boers lors du « Grand Trek ».

III. La fin de Chaka
Après la mort de sa mère Nandi en 1827, Chaka sombre dans une folie sanguinaire, multipliant les exécutions de masse. Épuisés par ses guerres continuelles, ses demi-frères (Dingane et Mhlangana) l'assassinent en 1828.

Conclusion
Génie militaire et despote redouté, Chaka a forgé la puissante nation zouloue et provoqué le Mfecane, un séisme historique qui a remodelé la carte de l'Afrique australe.`,
  sections: [
    {
      title: "I. L'ascension fulgurante de Chaka et la révolution militaire zouloue",
      content: [
        "• Origines et enfance difficile : Né vers 1787, fils illégitime du chef Senzangakhona et de Nandi, Chaka grandit dans l'humiliation et l'exil. Il s'engage comme guerrier dans l'armée de Dingiswayo, roi des Mthethwa, où sa force colossale et son intelligence tactique le propulsent au premier rang.",
        "• Prise du pouvoir (1816) : À la mort de son père puis de Dingiswayo, Chaka prend la tête du clan zoulou (qui ne comptait alors que 1 500 membres et un territoire minuscule de 250 km²) et le métamorphose en une redoutable machine de guerre.",
        "• Trois innovations militaires fondamentales :",
        "  1. L'armement blanc : Suppression de la sagaie traditionnelle de jet (que le guerrier lançait et perdait). Remplacement par l'iklwa, une sagaie courte et robuste à lame tranchante de 30 cm maniée d'une main pour l'estoc au corps à corps, combinée avec le bouclier en peau de bœuf de deux mètres (isihlangu) pour crocheter le bouclier adverse et transpercer le flanc découvert.",
        "  2. Suppression des sandales : Obligation de combattre pieds nus pour développer la vitesse, l'agilité et l'endurance sur les terrains rocailleux.",
        "  3. La tactique des 'cornes de buffle' : L'armée zouloue se déploie en quatre corps synchronisés : le thorax (isifuba, vétérans bloquant l'ennemi de face), les deux cornes (izimpondo, jeunes coureurs encerclant les flancs et fermant toute issue de retraite) et les reins (izibunu, réserve assise le dos au combat pour garder son calme)."
      ],
      image: {
        url: '',
        alt: 'Schéma tactique des cornes de buffle de Chaka Zoulou',
        caption: 'Figure 8 : La tactique militaire des « cornes de buffle » (Isifuba et Izimpondo) et l armement zoulou (Iklwa).',
        svgContent: SVG_HIST4_CHAKA_ZOULOU_TACTIQUE
      }
    },
    {
      title: "II. Le Mfecane ('Le grand écrasement') et le séisme démographique",
      content: [
        "L'expansionnisme féroce de Chaka provoque une réaction en chaîne sans précédent à travers toute l'Afrique australe :",
        "• L'intégration forcée dans la nation zouloue : Les jeunes hommes des tribus vaincues sont enrôlés dans les régiments (amabutho), les femmes et enfants intégrés, créant pour la première fois une puissante identité nationale zouloue unifiée.",
        "• Les migrations paniques et les nouveaux royaumes de résistance :",
        "  - Le royaume du Lesotho : Le roi diplomate Moshoeshoe Ier rassemble les réfugiés sothos sur l'imprenable plateau forteresse de Thaba Bosiu et fonde la nation moderne du Lesotho.",
        "  - Le royaume Ndebele (Matabele) : Le général dissident Mzilikazi rompt avec Chaka et émigre vers le nord à travers le Transvaal pour fonder le royaume Ndebele au Zimbabwe actuel.",
        "  - L'Empire de Gaza au Mozambique : Fondé par Soshangane le long de la côte de l'océan Indien.",
        "• Le vide territorial et l'aubaine des Boers : La désertification humaine de vastes plaines d'Afrique du Sud permettra aux colons boers d'avancer sans encombre lors du Grand Trek (1835-1838), préfigurant les conflits territoriaux d'Afrique du Sud."
      ]
    },
    {
      title: "III. La tragique dérive despotique et l'assassinat de Chaka",
      content: [
        "• La mort de Nandi (1827) et le deuil sanglant : Le décès de sa mère adorée brise l'équilibre mental de Chaka. Il impose un deuil terrifiant : interdiction de semer les récoltes pendant un an, interdiction de boire du lait, exécution de milliers de sujets accusés de ne pas pleurer avec assez de sincérité.",
        "• Le complot et la mort (1828) : Épuisés par les campagnes militaires incessantes et terrorisés par ses jugements arbitraires, ses deux demi-frères Dingane et Mhlangana, aidés par le serviteur royal Mbopa, le poignardent à mort dans son kraal royal de Dukuza en septembre 1828.",
        "• Avant d'expirer, la tradition rapporte que Chaka lança cette prédiction prophétique à ses assassins : « Vous croyez que vous allez gouverner cette terre ? Non ! Ce sont les oiseaux blancs de la mer (les Blancs) qui vont s'en emparer ! »"
      ]
    }
  ],
  diagram: {
    title: 'Révolution militaire zouloue et le Mfecane',
    root: 'CHAKA & LE PEUPLE ZOULOU',
    branches: [
      {
        name: 'Révolution Militaire',
        subtitle: 'Iklwa & Tactique',
        items: [
          'Sagaie courte d\'estoc (Iklwa)',
          'Tactique des « cornes de buffle »',
          'Régiments Impi & discipline de fer'
        ]
      },
      {
        name: 'Le Mfecane',
        subtitle: 'Onde de Choc Géopolitique',
        items: [
          'Exode massif de tribus entières',
          'Création du Lesotho (Moshoeshoe)',
          'Migrations des Matabele (Zimbabwe)'
        ]
      },
      {
        name: 'Tragédie & Héritage',
        subtitle: 'Assassinat (1828)',
        items: [
          'Folie sanguinaire après la mort de Nandi',
          'Poignardé par ses demi-frères (Dingane)',
          'Nation zouloue héroïque (Isandlwana 1879)'
        ]
      }
    ]
  },
  conclusion: "Génie militaire et despote redouté, Chaka a forgé la puissante nation zouloue et provoqué le Mfecane, un séisme historique qui a remodelé la carte de l'Afrique australe."
};

export const LESSON_13_HISTOIRE_4EME: LessonContent = {
  id: 'histoire-4eme-lecon-13',
  number: 'Leçon 13',
  title: 'MADAGASCAR : L’ÉVOLUTION DU ROYAUME MERINA JUSQU’AU MILIEU DU XIXE SIÈCLE',
  subject: 'Histoire',
  classLevel: '4ème',
  introduction: "Située dans l'océan Indien, la grande île de Madagascar a développé une civilisation originale au carrefour de l'Afrique et de l'Asie. Au XIXe siècle, le royaume Merina, situé sur les hautes terres centrales, unifie l'île et s'affirme comme un État moderne avant la colonisation.",
  fullText: `Leçon 13 : Madagascar : l'évolution du royaume Merina jusqu’au milieu du XIXe siècle

Introduction
Située dans l'océan Indien, la grande île de Madagascar a développé une civilisation originale au carrefour de l'Afrique et de l'Asie. Au XIXe siècle, le royaume Merina, situé sur les hautes terres centrales, unifie l'île et s'affirme comme un État moderne avant la colonisation.

I. L'unification de l'Imerina par Andrianampoinimerina (1787-1810)
À la fin du XVIIIe siècle, l'Imerina (plateau central) est divisée en provinces rivales. Le roi Andrianampoinimerina accomplit son unification grâce à une diplomatie habile et une armée solide.
• Organisation économique : Il développe la riziculture en construisant des digues et des canaux d'irrigation dans la plaine du Betsimitatatra.
• Vision politique : Il proclame sa célèbre devise : « La mer est la limite de ma rizière », fixant à ses successeurs l'objectif d'unifier toute l'île de Madagascar.

II. Radama Ier et l'ouverture sur le monde (1810-1828)
Successeur de son père, Radama Ier poursuit l'expansion et prend le titre de « Roi de Madagascar » :
• Alliance britannique : Pour contrer l'influence française, il s'allie avec l'Angleterre, accepte d'abolir la traite des esclaves en échange d'armes modernes et d'instructeurs militaires britanniques pour former son armée.
• Modernisation culturelle : Il encourage l'action des missionnaires de la London Missionary Society, qui transcrivent la langue malgache en caractères latins, ouvrent les premières écoles et forment les futures élites administratives.

III. La réaction nationaliste de la reine Ranavalona Ière (1828-1861)
À la mort de Radama Ier, sa veuve, la reine Ranavalona Ière, monte sur le trône et opère un revirement radical :
• Rejet de l'occidentalisation : Soucieuse de préserver la souveraineté nationale et la religion traditionnelle malgache, elle expulse les missionnaires chrétiens et persécute les convertis.
• Développement autarcique : Elle encourage la production locale d'armes, de tissus et d'outils grâce à l'ingénieur français Jean Laborde, qui crée un vaste complexe industriel à Mantasoa.

Conclusion
Grâce à l'énergie de ses souverains, le royaume Merina est parvenu à bâtir un État unifié et moderne, capable de résister pendant tout le XIXe siècle aux convoitises des puissances impérialistes européennes.`,
  sections: [
    {
      title: "I. L'unification de l'Imerina sous le génie d'Andrianampoinimerina (1787-1810)",
      content: [
        "• Le morcellement de l'Imerina : Au XVIIIe siècle, les hautes terres de Madagascar étaient déchirées par des querelles fratricides entre princes merinas retranchés dans leurs villages fortifiés au sommet des collines sacrées (Rova).",
        "• L'œuvre de rassemblement royal : Ramboasalama, monté sur le trône sous le nom de règne d'Andrianampoinimerina ('le prince désiré au cœur de l'Imerina'), allie force militaire, mariages dynastiques et conciliation coutumière pour unifier les quatre provinces de l'Imerina et fixer sa capitale à Antananarivo.",
        "• L'aménagement agricole de la plaine du Betsimitatatra : Il transforme les marécages autour de Tananarive en un gigantesque réseau de rizières irriguées par des digues et canaux régulés, garantissant la sécurité alimentaire de son peuple.",
        "• La grande vision géopolitique insulaire : Il formule la prophétie qui servira de feuille de route à toute l'histoire du XIXe siècle : « Ny ranomasina no valamparihiko » ('La mer est la limite de ma rizière')."
      ]
    },
    {
      title: "II. Radama Ier (1810-1828) : Diplomatie anglaise, armée moderne et alphabétisation",
      content: [
        "• Titre officiel et reconnaissance internationale : Fils et successeur d'Andrianampoinimerina, Radama Ier est reconnu par le gouverneur britannique de l'île Maurice (Sir Robert Farquhar) comme 'Roi de Madagascar' en 1817.",
        "• Traité d'alliance et abolition de la traite : En signant les traités de 1817 et 1820 avec la Grande-Bretagne, Radama Ier s'engage à interdire l'exportation des esclaves malgaches. En contrepartie, Londres lui verse une pension annuelle, lui livre des uniformes, des canons et des fusils modernes, et détache des officiers britanniques (comme James Hastie) pour encadrer et discipliner l'armée merina.",
        "• Révolution de l'écrit et scolarisation :",
        "  - En 1823, Radama adopte officiellement l'alphabet latin pour transcrire la langue malgache, avec l'aide des linguistes David Jones et David Griffiths de la London Missionary Society.",
        "  - Fondation des premières écoles d'État dans la capitale et les provinces : les jeunes enfants merinas apprennent à lire, écrire et compter, constituant l'ossature d'une administration moderne tenue par des fonctionnaires civils."
      ]
    },
    {
      title: "III. Le règne souverainiste de la reine Ranavalona Ière (1828-1861)",
      content: [
        "• Le serment de fidélité aux ancêtres : À la mort prématurée de Radama Ier, sa première épouse devient la reine Ranavalona Ière. Face à la pénétration insidieuse des puissances européennes, elle choisit une politique de défense intransigeante de l'indépendance nationale :",
        "• L'expulsion des missionnaires et la défense des cultes ancestraux : Elle interdit la religion chrétienne, perçue comme un outil d'ingérence politique étrangère sapant la loyauté sacrée envers le trône royal (procès de l'épreuve du poison de tanghin pour démasquer les traîtres).",
        "• L'aventure industrielle autarcique de Mantasoa avec Jean Laborde :",
        "  - Pour ne dépendre d'aucune importation d'armes d'Europe, la reine confie à l'ingénieur et naufragé français Jean Laborde la création d'un complexe militaro-industriel complet à Mantasoa.",
        "  - Sur ce site pionnier sont construits des hauts fourneaux, des fonderies de canons en bronze, des ateliers de fabrication de poudre à fusil, de verre, de savon, de céramique et de filature textile.",
        "• Préservation de l'indépendance : Grâce à cette industrie locale et à une armée de 30 000 hommes entraînés, Madagascar inflige en 1845 une défaite cuisante à une expédition navale conjointe franco-britannique qui tentait de bombarder le port de Tamatave."
      ],
      image: {
        url: '',
        alt: 'Évolution du royaume Merina à Madagascar au XIXe siècle',
        caption: 'Figure 9 : Les trois souverains bâtisseurs de Madagascar : Andrianampoinimerina, Radama Ier et la reine Ranavalona Ière.',
        svgContent: SVG_HIST4_MADAGASCAR_MERINA
      },
      table: {
        headers: ['Souverain Merina', 'Période de règne', 'Orientations politiques', 'Réalisations majeures'],
        rows: [
          ['Andrianampoinimerina', '1787 - 1810', 'Unification de l\'Imerina, riziculture intensive', 'Canaux du Betsimitatatra, capitale Antananarivo, devise « La mer est la limite de ma rizière »'],
          ['Radama Ier', '1810 - 1828', 'Alliance britannique, modernisation militaire & scolaire', 'Reconnaissance comme Roi de Madagascar, fin traite, alphabet latin pour le malgache'],
          ['Reine Ranavalona Ière', '1828 - 1861', 'Nationalisme souverainiste, autarcie industrielle', 'Usines d\'armement de Mantasoa (Jean Laborde), rejet de la colonisation franco-anglaise']
        ]
      }
    }
  ],
  diagram: {
    title: 'Évolution du Royaume Merina au XIXe siècle',
    root: 'ROYAUME MERINA (MADAGASCAR)',
    branches: [
      {
        name: 'Andrianampoinimerina',
        subtitle: '1787 - 1810 (Unification)',
        items: [
          'Rassemblement des clans de l\'Imerina',
          'Riziculture du Betsimitatatra',
          '« La mer est la limite de ma rizière »'
        ]
      },
      {
        name: 'Radama Ier',
        subtitle: '1810 - 1828 (Ouverture)',
        items: [
          'Alliance avec la Grande-Bretagne',
          'Abolition de la traite contre armes modernes',
          'Écriture latine du malgache & écoles'
        ]
      },
      {
        name: 'Ranavalona Ière',
        subtitle: '1828 - 1861 (Résistance)',
        items: [
          'Défense des coutumes ancestrales',
          'Complexe industriel de Mantasoa (Laborde)',
          'Victoire militaire de Tamatave (1845)'
        ]
      }
    ]
  },
  conclusion: "Grâce à l'énergie de ses souverains, le royaume Merina est parvenu à bâtir un État unifié et moderne, capable de résister pendant tout le XIXe siècle aux convoitises des puissances impérialistes européennes."
};
