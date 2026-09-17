import { ContentData } from './courses';
import {
  LESSON_1_HISTOIRE_5EME,
  LESSON_2_HISTOIRE_5EME,
  LESSON_3_HISTOIRE_5EME,
  LESSON_4_HISTOIRE_5EME
} from './courses_5eme_histoire_part1';
import {
  LESSON_5_HISTOIRE_5EME,
  LESSON_6_HISTOIRE_5EME,
  LESSON_7_HISTOIRE_5EME,
  LESSON_7_BIS_HISTOIRE_5EME
} from './courses_5eme_histoire_part2';
import {
  LESSON_8_HISTOIRE_5EME,
  LESSON_9_HISTOIRE_5EME,
  LESSON_10_HISTOIRE_5EME
} from './courses_5eme_histoire_part3';
import {
  LESSON_11_HISTOIRE_5EME,
  LESSON_12_HISTOIRE_5EME,
  LESSON_13_HISTOIRE_5EME
} from './courses_5eme_histoire_part4';

// =========================================================================
// COURS COMPLET D'HISTOIRE - CLASSE DE 5ÈME (PROGRAMME OFFICIEL SÉNÉGALAIS)
// COURS INTÉGRAL SANS RÉSUMÉ - HAUT NIVEAU DE DÉTAIL ET DE COMPRÉHENSION
// 14 LEÇONS AVEC TEXTE DÉTAILLÉ, CONTEXTES, TABLEAUX COMPARATIFS ET SCHÉMAS
// =========================================================================

export const HISTOIRE_5EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '14' },
  { id: 'part-1', label: '1er Trimestre • Le Monde Musulman', count: '4' },
  { id: 'part-2', label: "2ème Trimestre • Les Grands Empires d'Afrique de l'Ouest", count: '6' },
  { id: 'part-3', label: '3ème Trimestre • Peuplement & Royaumes de Sénégambie', count: '4' }
];

export const COURSES_HISTOIRE_5EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // PREMIER TRIMESTRE : LE MONDE MUSULMAN MÉDIÉVAL
  // -----------------------------------------------------------------------
  {
    id: 'histoire-5eme-lecon-1',
    title: "LEÇON 1 : L'ARABIE PRÉISLAMIQUE",
    type: 'cours',
    badge: '1er Trimestre • Le Monde Musulman',
    description: "Milieu aride de la péninsule arabique (Djazirat al-Arab), contrastes géographiques (Arabie heureuse du Sud et déserts nomades du Nord), société clanique patriarcale fondée sur la 'Asabiyya et le code de la Muruwwa, polythéisme tribal idolâtre autour de la Kaaba à La Mecque et république marchande des Quraychites. Cours exhaustif sans résumé.",
    lessonData: LESSON_1_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-2',
    title: 'LEÇON 2 : LE PROPHÈTE MAHOMET ET LA NAISSANCE DE L\'ISLAM',
    type: 'cours',
    badge: '1er Trimestre • Le Monde Musulman',
    description: "Jeunesse et réputation d'Al-Amine, mariage avec Khadija, Révélation dans la grotte de Hira en 610, prédication monothéiste contre l'oligarchie quraychite, persécutions et tournant fondateur de l'Hégire (16 juillet 622) fondant l'Umma à Médine (Constitution de Médine), les 5 piliers de l'Islam et prise pacifique de La Mecque en 630. Cours exhaustif sans résumé.",
    lessonData: LESSON_2_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-3',
    title: 'LEÇON 3 : L\'EXPANSION MUSULMANE ET LES CALIFATS',
    type: 'cours',
    badge: '1er Trimestre • Le Monde Musulman',
    description: "L'institution califale et l'ère des quatre califes bien guidés (Al-Rashidun : Abou Bakr, Omar, Othman, Ali), la Grande Discorde (Fitna) et la scission Sunnites / Chiites, la dynastie omeyyade de Damas et l'expansion foudroyante jusqu'à l'Indus et l'Espagne (Poitiers 732), puis la dynastie abbasside de Bagdad et son âge d'or. Cours exhaustif sans résumé.",
    lessonData: LESSON_3_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-4',
    title: 'LEÇON 4 : LA CIVILISATION MUSULMANE',
    type: 'cours',
    badge: '1er Trimestre • Le Monde Musulman',
    description: "Société urbaine et cosmopolite (Médina, Souks, Hammams, Dhimmi), floraison intellectuelle de la Maison de la Sagesse (Bayt al-Hikma) à Bagdad, géants des sciences (Al-Khwarizmi, Avicenne, Averroès, Al-Razi), architecture des mosquées à minarets et coupoles, et art aniconique de l'arabesque et de la calligraphie. Cours exhaustif sans résumé.",
    lessonData: LESSON_4_HISTOIRE_5EME
  },

  // -----------------------------------------------------------------------
  // DEUXIÈME TRIMESTRE : LES GRANDS EMPIRES MÉDIÉVAUX D'AFRIQUE DE L'OUEST
  // -----------------------------------------------------------------------
  {
    id: 'histoire-5eme-lecon-5',
    title: 'LEÇON 5 : LE MOUVEMENT ALMORAVIDE',
    type: 'cours',
    badge: "2ème Trimestre • Empires d'Afrique de l'Ouest",
    description: "Origines chez les Berbères Sanhadja voilés, prédication austère d'Abdoullah Ibn Yassine et fondation du Ribat sur le fleuve Sénégal/littoral mauritanien (Al-Murabitun), conquêtes vers le Nord par Youssef Ibn Tachfin (fondation de Marrakech en 1062, victoire de Zallaqa en Espagne) et vers le Sud par Abou Bakr Ibn Omar (prise d'Aoudaghost 1054 et Koumbi Saleh 1076, islamisation du Tekrour). Cours exhaustif sans résumé.",
    lessonData: LESSON_5_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-6',
    title: "LEÇON 6 : L'EMPIRE DU GHANA",
    type: 'cours',
    badge: "2ème Trimestre • Empires d'Afrique de l'Ouest",
    description: "Le Wagadou soninké fondé au IVe siècle, localisation réelle au Sahel du Hodh (Mauritanie/Mali actuels), pouvoir sacré du Kaya-Maga (« Maître de l'or »), succession matrilinéaire par le fils de la sœur, structure bipolaire de Koumbi Saleh (El-Ghaba et ville musulmane aux 12 mosquées), commerce transsaharien de l'or du Bambouk et du sel de Teghaza, troc muet et déclin sous Soumaoro Kanté (1203). Cours exhaustif sans résumé.",
    lessonData: LESSON_6_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-7',
    title: "LEÇON 7 : L'EMPIRE DU MALI",
    type: 'cours',
    badge: "2ème Trimestre • Empires d'Afrique de l'Ouest",
    description: "Épopée de Soundiata Keïta, guérison et victoire de Kirina en 1235 contre Soumaoro Kanté, capitale Niani, promulgation de la Charte de Kouroukan Fouga (1236, pionnière des droits de l'homme), pèlerinage prodigieux de Kankou Moussa à La Mecque en 1324 dévaluant l'or au Caire, Atlas Catalan de 1375, architecture banco d'Abou Ishaq es-Sahéli (Djingareyber) et Université de Sankoré à Tombouctou. Cours exhaustif sans résumé.",
    lessonData: LESSON_7_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-7bis',
    title: "LEÇON 7 BIS : L'EMPIRE SONGHAÏ",
    type: 'cours',
    badge: "2ème Trimestre • Empires d'Afrique de l'Ouest",
    description: "Origines fluviales de Gao, conquêtes fulgurantes de Sunni Ali Ber (flotte de guerre Hi-Koy, prise de Tombouctou en 1468 et Djenné en 1473), dynastie des Askia avec Askia Mohammed (1493), Calife du Soudan, administration par ministères spécialisés, standardisation des mesures et savants comme Ahmed Baba, chute brutale à la bataille de Tondibi (1591) face aux arquebuses marocaines de Djouder Pacha. Cours exhaustif sans résumé.",
    lessonData: LESSON_7_BIS_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-8',
    title: 'LEÇON 8 : LES ROYAUMES MOSSI',
    type: 'cours',
    badge: "2ème Trimestre • Empires d'Afrique de l'Ouest",
    description: "Plateau central de la boucle du Niger (Burkina Faso), légende fondatrice de la princesse amazone Yennenga de Gambaga et du chasseur Rialé donnant naissance à Ouedraogo ('l'étalon') à Tenkodogo, confédération d'États autonomes (Ouagadougou, Yatenga), monarque solaire Mogho Naba et rituel hebdomadaire du 'faux départ', collège de ministres, culte traditionnel du Tenga et résistance militaire inébranlable à l'islamisation (sac de Tombouctou en 1337). Cours exhaustif sans résumé.",
    lessonData: LESSON_8_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-9',
    title: 'LEÇON 9 : LES ROYAUMES DU GOLFE DE GUINÉE (IFE ET BÉNIN)',
    type: 'cours',
    badge: "2ème Trimestre • Empires d'Afrique de l'Ouest",
    description: "Civilisation yoruba d'Ife au sud-ouest du Nigeria, création sacrée par Oduduwa, autorité spirituelle suprême de l'Oni, têtes naturalistes en terre cuite et bronze à la cire perdue d'un réalisme parfait, empire edo du Bénin sous Ewuare le Grand (XVe s.), titre de l'Oba, cité fortifiée de Benin City aux 16 000 km de remparts de terre, guilde royale d'Igun Eronmwon, plaques de bronze et premiers contacts avec les Portugais en 1485. Cours exhaustif sans résumé.",
    lessonData: LESSON_9_HISTOIRE_5EME
  },

  // -----------------------------------------------------------------------
  // TROISIÈME TRIMESTRE : LE PEUPLEMENT ET L'HISTOIRE DE LA SÉNÉGAMBIE
  // -----------------------------------------------------------------------
  {
    id: 'histoire-5eme-lecon-10',
    title: 'LEÇON 10 : LES THÉORIES SUR LE PEUPLEMENT DE LA SÉNÉGAMBIE',
    type: 'cours',
    badge: '3ème Trimestre • Histoire de la Sénégambie',
    description: "Espace géographique de transition ouvert entre les fleuves Sénégal et Gambie, les trois sources scientifiques (archéologie des mégalithes de Sine Ngayène et amas coquilliers, linguistique Niger-Congo, tradition orale des griots), moteur écologique de l'assèchement du Sahara, vagues migratoires des Sérères, Wolofs, Peuls, Mandingues et Diolas, structure sociale commune en ordres et castes (Garmi, Guers, Nyenyo, Djam) et ciment pacifique du Cousinage de plaisanterie (Kal / Dendiraagal / Sanaawuya). Cours exhaustif sans résumé.",
    lessonData: LESSON_10_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-11',
    title: 'LEÇON 11 : LE GRAND EMPIRE DU DJOLOF',
    type: 'cours',
    badge: '3ème Trimestre • Histoire de la Sénégambie',
    description: "Mythe fondateur de Ndiadiane Ndiaye sorti des eaux pour réconcilier équitablement des pêcheurs en dispute, intronisation vers 1360 comme premier Bourba Djolof, capitale Yang-Yang dans le désert du Ferlo, confédération des six États vassaux (Djolof, Walo, Cayor, Baol, Sine, Saloum), conseil des Diambour, commerce transsaharien de chevaux et de sel, basculement vers la côte atlantique avec les caravelles portugaises, rébellion d'Amari Ngoné Sobel Fall et bataille décisive de Danki (1549) marquant la mort du Bourba Lélé Fouk Fak et l'éclatement irréversible de l'empire. Cours exhaustif sans résumé.",
    lessonData: LESSON_11_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-12',
    title: "LEÇON 12 : LES ROYAUMES ISSUS DE L'ÉCLATEMENT DU DJOLOF",
    type: 'cours',
    badge: '3ème Trimestre • Histoire de la Sénégambie',
    description: "Le Cayor et sa capitale Mboul, pouvoir absolu du Damel, armée de choc des guerriers Tiédos armés de fusils et traites côtières, résistance ultérieure de Lat Dior ; le Baol et sa capitale Lambaye sous le Teigne avec les unions dynastiques en Damel-Teigne ; le Walo marécageux du delta sous le Brak à Nder, les trois lignées maternelles (Tediek, Loggar, Dieuss), pouvoir éminent de la Linguère, drame héroïque du Talaatay Nder en 1833 (suicide collectif par le feu des femmes) et courage de Ndaté Yalla face à Faidherbe ; les royaumes sérères du Sine (Diakhao) sous le Bour Sine attaché à Rog Sène et écrasant Maba Diakhou à Fandène (1867), et du Saloum (Kahone) sous le Bour Saloum cosmopolite ouvert sur l'estuaire. Cours exhaustif sans résumé.",
    lessonData: LESSON_12_HISTOIRE_5EME
  },
  {
    id: 'histoire-5eme-lecon-13',
    title: 'LEÇON 13 : LE ROYAUME DU FOUTA-TORO ET LA RÉVOLUTION TOORODO DE 1776',
    type: 'cours',
    badge: '3ème Trimestre • Histoire de la Sénégambie',
    description: "L'ancien Fouta sous la dynastie peule animiste des Deniankobé fondée par Koli Tenguella Ba (titre de Satigui), tyrannie militaire des Sebbe et razzias dévastatrices d'esclaves par les Maures Trarzas et Brakna avec paiement humiliant de la moudoumma, crise sociale et rébellion des clercs érudits musulmans Toorobé formés à l'université de Pir, soulèvement populaire de 1776 mené par Souleymane Baal, testament démocratique anti-monarchique interdisant la royauté héréditaire et prônant l'éducation obligatoire, instauration de l'Almamiyat électif sous Abdul Kader Kane (1776-1806), abolition de la traite négrière sur le fleuve Sénégal avec arraisonnement des navires français et écrasement des émirs maures en 1786. Cours exhaustif sans résumé.",
    lessonData: LESSON_13_HISTOIRE_5EME
  },

  // -----------------------------------------------------------------------
  // RESSOURCES PÉDAGOGIQUES COMPLÉMENTAIRES
  // -----------------------------------------------------------------------
  {
    id: 'pdf-hist-5eme-synthese',
    title: "Guide officiel d'approfondissement : Programme d'Histoire 5ème (Sénégal)",
    type: 'ressource',
    badge: 'Document officiel',
    description: "Chronologie synoptique des trois trimestres (Monde musulman médiéval, Grands empires ouest-africains, Peuplement et royaumes sénégambiens) avec cartes historiques et lexique des concepts fondamentaux.",
    link: '#'
  },
  {
    id: 'pdf-hist-5eme-evaluations',
    title: "Banque d'évaluations et sujets d'examen types : Histoire 5ème",
    type: 'ressource',
    badge: 'Évaluations & Corrigés',
    description: "Devoirs sur table, questions d'analyse documentaire, commentaires de textes historiques et compositions de fin de trimestre avec barèmes détaillés.",
    link: '#'
  }
];
