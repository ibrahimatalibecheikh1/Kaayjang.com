// =========================================================================
// INDEX CENTRAL DES COURS D'HISTOIRE CLASSE DE TERMINALE (SÉRIES L & S)
// Conforme au programme officiel national de la République du Sénégal
// 17 leçons exhaustives sans résumé, grands axes et méthodologie du Baccalauréat
// =========================================================================

import { ContentData, LessonContent } from './courses';

import {
  LESSON_1_HISTOIRE_TLE,
  LESSON_2_HISTOIRE_TLE,
  LESSON_3_HISTOIRE_TLE,
  LESSON_4_HISTOIRE_TLE,
  LESSON_5_HISTOIRE_TLE
} from './courses_tle_histoire_part1';

import {
  LESSON_6_HISTOIRE_TLE,
  LESSON_7_HISTOIRE_TLE,
  LESSON_8_HISTOIRE_TLE,
  LESSON_9_HISTOIRE_TLE,
  LESSON_10_HISTOIRE_TLE
} from './courses_tle_histoire_part2';

import {
  LESSON_11_HISTOIRE_TLE,
  LESSON_12_HISTOIRE_TLE,
  LESSON_13_HISTOIRE_TLE,
  LESSON_14_HISTOIRE_TLE,
  LESSON_15_HISTOIRE_TLE
} from './courses_tle_histoire_part3';

import {
  LESSON_16_HISTOIRE_TLE,
  LESSON_17_HISTOIRE_TLE
} from './courses_tle_histoire_part4';

export {
  LESSON_1_HISTOIRE_TLE, LESSON_2_HISTOIRE_TLE, LESSON_3_HISTOIRE_TLE, LESSON_4_HISTOIRE_TLE, LESSON_5_HISTOIRE_TLE,
  LESSON_6_HISTOIRE_TLE, LESSON_7_HISTOIRE_TLE, LESSON_8_HISTOIRE_TLE, LESSON_9_HISTOIRE_TLE, LESSON_10_HISTOIRE_TLE,
  LESSON_11_HISTOIRE_TLE, LESSON_12_HISTOIRE_TLE, LESSON_13_HISTOIRE_TLE, LESSON_14_HISTOIRE_TLE, LESSON_15_HISTOIRE_TLE,
  LESSON_16_HISTOIRE_TLE, LESSON_17_HISTOIRE_TLE
};

export const HISTOIRE_TLE_PARTS = [
  { id: "all", label: "Toutes les leçons (17 chapitres du Bac)", count: "17" },
  { id: "part-1", label: "Chapitre I • Relations Internationales de 1945 à nos jours (L1-L5)", count: "5" },
  { id: "part-2", label: "Chapitre II • Décolonisation et Tiers-Monde (L6-L10)", count: "5" },
  { id: "part-3", label: "Chapitre III • L'Afrique contemporaine & Sénégal (L11-L15)", count: "5" },
  { id: "part-4", label: "Chapitre IV • Méthodologie experte des épreuves du Bac (L16-L17)", count: "2" }
];

export const COURSES_HISTOIRE_TLE: ContentData[] = [
  // --- CHAPITRE I : LES RELATIONS INTERNATIONALES DE 1945 À NOS JOURS (LEÇONS 1 À 5) ---
  {
    id: "hist-tle-cours-1",
    title: "LEÇON 1 : LES CONSÉQUENCES DE LA DEUXIÈME GUERRE MONDIALE ET LE RÈGLEMENT DE LA PAIX",
    type: "cours",
    badge: "Chapitre I • Relations Internationales",
    description: "Bilan humain apocalyptique (Shoah, Hiroshima), dévastations matérielles en Europe et Asie, conférences interalliées (Yalta, Potsdam), procès de Nuremberg et Tokyo, et fondation de l'ONU.",
    lessonData: LESSON_1_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-2",
    title: "LEÇON 2 : LA GUERRE FROIDE ET LA CONSTITUTION DES BLOCS (1947 - 1953)",
    type: "cours",
    badge: "Chapitre I • Relations Internationales",
    description: "Rupture de la Grande Alliance, doctrines Truman et Jdanov, plan Marshall contre Kominform, blocus de Berlin (1948-1949), partition de l'Allemagne et guerre de Corée (1950-1953).",
    lessonData: LESSON_2_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-3",
    title: "LEÇON 3 : DE LA COEXISTENCE PACIFIQUE À LA DÉTENTE (1953 - 1975)",
    type: "cours",
    badge: "Chapitre I • Relations Internationales",
    description: "Mort de Staline et dégel khrouchtchévien, crise du mur de Berlin (1961), crise des missiles de Cuba (1962), guerre du Vietnam, accords SALT I et accords d'Helsinki (1975).",
    lessonData: LESSON_3_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-4",
    title: "LEÇON 4 : DE LA « GUERRE FRAÎCHE » À LA DISLOCATION DU BLOC SOVIÉTIQUE (1975 - 1991)",
    type: "cours",
    badge: "Chapitre I • Relations Internationales",
    description: "Offensive soviétique (SS-20, Afghanistan), riposte de Ronald Reagan (IDS, Euromissiles), réformes de Mikhaïl Gorbatchev (Perestroïka, Glasnost), chute du mur de Berlin et implosion de l'URSS.",
    lessonData: LESSON_4_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-5",
    title: "LEÇON 5 : LE MONDE POST-GUERRE FROIDE : DE L'HYPERPUISSANCE AMÉRICAINE AU MONDE MULTIPOLAIRE",
    type: "cours",
    badge: "Chapitre I • Relations Internationales",
    description: "Le « nouvel ordre mondial », attentats du 11 septembre 2001, guerres d'Afghanistan et d'Irak, affirmation des BRICS, révisionnisme russe, montée en puissance de la Chine et nouvelles menaces.",
    lessonData: LESSON_5_HISTOIRE_TLE
  },

  // --- CHAPITRE II : LA DÉCOLONISATION ET L'ÉMERGENCE DU TIERS-MONDE (LEÇONS 6 À 10) ---
  {
    id: "hist-tle-cours-6",
    title: "LEÇON 6 : LES FACTEURS GÉNÉRAUX DE LA DÉCOLONISATION",
    type: "cours",
    badge: "Chapitre II • Décolonisation & Tiers-Monde",
    description: "Facteurs internes (exploitation coloniale, essor des élites instruites, syndicats) et facteurs externes (affaiblissement des métropoles, anticolonialisme des États-Unis et de l'URSS, rôle de l'ONU).",
    lessonData: LESSON_6_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-7",
    title: "LEÇON 7 : LA DÉCOLONISATION EN ASIE : L'UNION INDIENNE ET L'INDOCHINE",
    type: "cours",
    badge: "Chapitre II • Décolonisation & Tiers-Monde",
    description: "Décolonisation pacifique mais sanglante en Inde (Gandhi, Nehru, partition Inde-Pakistan) versus guerre révolutionnaire d'Indochine (Hô Chi Minh, Diên Biên Phu, accords de Genève de 1954).",
    lessonData: LESSON_7_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-8",
    title: "LEÇON 8 : LA DÉCOLONISATION AU MAGHREB : ALGÉRIE, TUNISIE ET MAROC",
    type: "cours",
    badge: "Chapitre II • Décolonisation & Tiers-Monde",
    description: "Indépendance négociée du Maroc (Mohammed V) et de la Tunisie (Bourguiba) en 1956 versus guerre totale d'Algérie (Toussaint rouge 1954, FLN, bataille d'Alger, accords d'Évian de 1962).",
    lessonData: LESSON_8_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-9",
    title: "LEÇON 9 : LA DÉCOLONISATION EN AFRIQUE SUBSAHARIENNE ET LES GUERRES DE LIBÉRATION DES COLONIES PORTUGAISES",
    type: "cours",
    badge: "Chapitre II • Décolonisation & Tiers-Monde",
    description: "Transition réformiste en Afrique francophone (loi-cadre Defferre 1956, Communauté de 1958) et anglophone (Kwame Nkrumah au Ghana) versus guerres de libération armées (Amílcar Cabral, Neto, Machel).",
    lessonData: LESSON_9_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-10",
    title: "LEÇON 10 : L'AFFIRMATION DU TIERS-MONDE : DE BANDUNG AU NON-ALIGNEMENT ET AU NOEI",
    type: "cours",
    badge: "Chapitre II • Décolonisation & Tiers-Monde",
    description: "Conférence de Bandung (1955), création du Mouvement des Non-Alignés à Belgrade (1961 - Tito, Nasser, Nehru, Soekarno), conférence d'Alger (1973) et revendication d'un Nouvel Ordre Économique International.",
    lessonData: LESSON_10_HISTOIRE_TLE
  },

  // --- CHAPITRE III : L'AFRIQUE ET LE MONDE CONTEMPORAIN (LEÇONS 11 À 15) ---
  {
    id: "hist-tle-cours-11",
    title: "LEÇON 11 : LE CONFLIT ISRAÉLO-ARABE ET LES CRISES DU PROCHE ET MOYEN-ORIENT",
    type: "cours",
    badge: "Chapitre III • Afrique & Monde Contemporain",
    description: "Origines du sionisme, mandat britannique, guerres de 1948, 1956, 1967 (Six Jours) et 1973 (Kippour), la cause palestinienne (OLP, Yasser Arafat, Intifadas), accords de Camp David et d'Oslo, et impasses actuelles.",
    lessonData: LESSON_11_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-12",
    title: "LEÇON 12 : L'AFRIQUE FACE AUX DÉFIS DE L'UNITÉ ET DE L'INTÉGRATION : DE L'OUA À L'UNION AFRICAINE",
    type: "cours",
    badge: "Chapitre III • Afrique & Monde Contemporain",
    description: "Panafricanisme, querelle doctrinale Casablanca vs Monrovia, fondation de l'OUA en 1963, bilan critique, mutation vers l'Union Africaine (2002), droit d'ingérence et rôle moteur de la CEDEAO et de la SADC.",
    lessonData: LESSON_12_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-13",
    title: "LEÇON 13 : LES DÉFIS DU DÉVELOPPEMENT ÉCONOMIQUE ET SOCIAL EN AFRIQUE : DETTE, PAS, NEPAD ET ZLECAF",
    type: "cours",
    badge: "Chapitre III • Afrique & Monde Contemporain",
    description: "Extraversion coloniale, crise de la dette des années 1980, austérité brutale des Plans d'Ajustement Structurel FMI/Banque mondiale, dévaluation du Franc CFA, initiative du NEPAD et marché commun de la ZLECAF.",
    lessonData: LESSON_13_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-14",
    title: "LEÇON 14 : DÉMOCRATIE, CONFLITS ET DROITS DE L'HOMME EN AFRIQUE : L'APARTHEID ET LES CRISES POST-GUERRE FROIDE",
    type: "cours",
    badge: "Chapitre III • Afrique & Monde Contemporain",
    description: "Lois d'Apartheid en Afrique du Sud (1948-1994), luttes de l'ANC (Mandela, Tambo, Biko), massacres de Sharpeville et Soweto, transition démocratique ; puis génocide des Tutsi au Rwanda, guerre en RDC et crise sahélienne.",
    lessonData: LESSON_14_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-15",
    title: "LEÇON 15 : LE SÉNÉGAL DE 1960 À NOS JOURS : VIE POLITIQUE, ALTERNANCES DÉMOCRATIQUES ET DÉFIS SOCIO-ÉCONOMIQUES",
    type: "cours",
    badge: "Chapitre III • Afrique & Monde Contemporain",
    description: "Éclatement de la Fédération du Mali, crise de 1962 (Senghor vs Mamadou Dia), multipartisme limité puis intégral (Abdou Diouf), conflit casamançais et crise de 1989, alternances de 2000 (Wade), 2012 (Macky Sall) et 2024 (Diomaye Faye).",
    lessonData: LESSON_15_HISTOIRE_TLE
  },

  // --- CHAPITRE IV : MÉTHODOLOGIE DU BACCALAURÉAT SÉNÉGALAIS (LEÇONS 16 ET 17) ---
  {
    id: "hist-tle-cours-16",
    title: "LEÇON 16 : MÉTHODOLOGIE EXPERTE DE LA DISSERTATION HISTORIQUE AU BACCALAURÉAT",
    type: "cours",
    badge: "Chapitre IV • Méthodologie Baccalauréat",
    description: "Typologie des sujets (évolutifs, thématiques, comparatifs, dialectiques), travail préparatoire au brouillon, formulation de la problématique, rédaction des transitions et sujet type corrigé pas à pas avec corrigé modèle rédigé.",
    lessonData: LESSON_16_HISTOIRE_TLE
  },
  {
    id: "hist-tle-cours-17",
    title: "LEÇON 17 : MÉTHODOLOGIE EXPERTE DU COMMENTAIRE DE DOCUMENTS HISTORIQUES AU BACCALAURÉAT",
    type: "cours",
    badge: "Chapitre IV • Méthodologie Baccalauréat",
    description: "Typologie des documents sources, grille de présentation officielle (N.A.C.D.I.), explication contextuelle sans paraphrase, analyse de la portée historique et critique, et sujet type type Bac Marshall-Jdanov corrigé intégralement.",
    lessonData: LESSON_17_HISTOIRE_TLE
  }
];
