// =========================================================================
// INDEX CENTRAL DES COURS D'HISTOIRE 3ÈME (SÉNÉGAL)
// Programme officiel exhaustif, complet, sans résumé pour le BFEM
// 19 Leçons intégrales officielles réparties en 5 Grandes Parties
// =========================================================================

import { LessonContent } from './courses';
import {
  LESSON_1_HISTOIRE_3EME,
  LESSON_2_HISTOIRE_3EME,
  LESSON_3_HISTOIRE_3EME,
  LESSON_4_HISTOIRE_3EME,
  LESSON_5_HISTOIRE_3EME
} from './courses_3eme_histoire_part1';

import {
  LESSON_6_HISTOIRE_3EME,
  LESSON_7_HISTOIRE_3EME,
  LESSON_8_HISTOIRE_3EME,
  LESSON_9_HISTOIRE_3EME,
  LESSON_10_HISTOIRE_3EME
} from './courses_3eme_histoire_part2';

import {
  LESSON_11_HISTOIRE_3EME,
  LESSON_12_HISTOIRE_3EME,
  LESSON_13_HISTOIRE_3EME,
  LESSON_14_HISTOIRE_3EME
} from './courses_3eme_histoire_part3';

import {
  LESSON_15_HISTOIRE_3EME,
  LESSON_16_HISTOIRE_3EME,
  LESSON_17_HISTOIRE_3EME,
  LESSON_18_HISTOIRE_3EME,
  LESSON_19_HISTOIRE_3EME
} from './courses_3eme_histoire_part4';

export interface ContentData {
  id: string;
  title: string;
  type: 'cours' | 'ressource';
  description: string;
  badge?: string;
  link?: string;
  content?: string;
  lessonData?: LessonContent;
}

export const HISTOIRE_3EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '19' },
  { id: 'part-1', label: 'Partie 1 • Révolution industrielle & Capitalisme', count: '3' },
  { id: 'part-2', label: 'Partie 2 • Impérialisme & Résistances en Afrique', count: '4' },
  { id: 'part-3', label: 'Partie 3 • Impérialisme en Asie & en Amérique', count: '3' },
  { id: 'part-4', label: 'Partie 4 • Guerres mondiales, URSS & Crise de 1929', count: '4' },
  { id: 'part-5', label: 'Partie 5 • Décolonisation, Tiers-Monde & Sénégal', count: '5' }
];

export const COURSES_HISTOIRE_3EME: ContentData[] = [
  // -------------------------------------------------------------------------
  // PREMIÈRE PARTIE : LA DEUXIÈME RÉVOLUTION INDUSTRIELLE ET SES CONSÉQUENCES (LEÇONS 1 À 3)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-3eme-lecon-1',
    title: 'LEÇON 1 : LES DÉCOUVERTES SCIENTIFIQUES ET LES MUTATIONS ÉCONOMIQUES',
    type: 'cours',
    badge: 'Partie 1 • Révolution industrielle',
    description: "Évolution de la démarche scientifique (Pasteur, Koch, Maxwell, Curie), nouvelles énergies (pétrole, électricité), révolution métallurgique (Bessemer, Thomas), transports (steam-ships, chemins de fer) et travail à la chaîne (Taylorisme, Fordisme). Cours intégral sans résumé.",
    lessonData: LESSON_1_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-2',
    title: 'LEÇON 2 : LE DÉVELOPPEMENT DU CAPITALISME ET LES MUTATIONS SOCIALES',
    type: 'cours',
    badge: 'Partie 1 • Révolution industrielle',
    description: "Sociétés anonymes (SA), bourses et banques d'affaires, concentrations industrielles (Cartels en Allemagne, Trusts aux USA, Holdings). Mutations sociales : essor de la haute bourgeoisie et misère du prolétariat ouvrier du XIXe siècle. Cours officiel intégral.",
    lessonData: LESSON_2_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-3',
    title: 'LEÇON 3 : LES DOCTRINES SOCIALES : SYNDICALISME ET SOCIALISME',
    type: 'cours',
    badge: 'Partie 1 • Révolution industrielle',
    description: "Courants socialistes (socialisme utopique de Fourier/Owen et marxisme scientifique de Karl Marx et Engels), lutte des classes et naissance des syndicats (loi Waldeck-Rousseau 1884, grèves, conquête de la journée de 8h). Cours officiel intégral sans résumé.",
    lessonData: LESSON_3_HISTOIRE_3EME
  },

  // -------------------------------------------------------------------------
  // DEUXIÈME PARTIE : L'IMPÉRIALISME EN AFRIQUE (LEÇONS 4 À 7)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-3eme-lecon-4',
    title: 'LEÇON 4 : LES MISSIONS ET LES EXPLORATIONS',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description: "La pénétration européenne à l'intérieur du continent noir : grands explorateurs (Mungo Park, René Caillié, David Livingstone, Stanley, Brazza) et rôle des missions chrétiennes (Pères Blancs, Spiritains) comme éclaireurs de la colonisation. Cours intégral.",
    lessonData: LESSON_4_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-5',
    title: 'LEÇON 5 : LES RIVALITÉS COLONIALES : LE CONGRÈS DE BERLIN ET SES CONSÉQUENCES',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description: "Le Congrès de Berlin (1884-1885) convoqué par Bismarck, l'Acte final (liberté sur le Congo et le Niger, statut de l'État Indépendant du Congo pour Léopold II, clause d'occupation effective) et le « Scramble for Africa » arbitraire. Cours officiel sans résumé.",
    lessonData: LESSON_5_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-6',
    title: 'LEÇON 6 : LES RÉSISTANCES : FORMES, EXEMPLES ET BILAN',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description: "Résistances armées et passives en Afrique : Lat Dior au Cayor (Dekheulé 1886), Samory Touré dans le Wassoulou, Béhanzin au Dahomey, Cheikh Ahmadou Bamba au Sénégal et la victoire historique de Ménélik II à Adoua en 1896. Causes de l'échec et bilan mémoriel.",
    lessonData: LESSON_6_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-7',
    title: 'LEÇON 7 : LES SYSTÈMES COLONIAUX (MODÈLES FRANÇAIS ET BRITANNIQUE)',
    type: 'cours',
    badge: 'Partie 2 • Impérialisme en Afrique',
    description: "Comparaison des doctrines coloniales : Administration Directe française (commandants de cercle, Quatre Communes, Code de l'Indigénat) contre Indirect Rule britannique de Lord Lugard (Association). Exploitation économique : pacte colonial et traite arachidière.",
    lessonData: LESSON_7_HISTOIRE_3EME
  },

  // -------------------------------------------------------------------------
  // TROISIÈME PARTIE : L'IMPÉRIALISME DANS LE RESTE DU MONDE (LEÇONS 8 À 10)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-3eme-lecon-8',
    title: "LEÇON 8 : L'IMPÉRIALISME EUROPÉEN EN ASIE (INDE ET CHINE)",
    type: 'cours',
    badge: 'Partie 3 • Impérialisme mondial',
    description: "Colonisation directe de l'Inde (« perle de la Couronne », révolte des Cipayes 1857, Victoria Impératrice) et asservissement commercial de la Chine (Guerres de l'Opium 1839-1860, traité de Nankin 1842, concessions et Traités inégaux). Cours intégral sans résumé.",
    lessonData: LESSON_8_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-9',
    title: "LEÇON 9 : L'IMPÉRIALISME JAPONAIS",
    type: 'cours',
    badge: 'Partie 3 • Impérialisme mondial',
    description: "L'ère Meiji (1868-1912) sous Mutsuhito (« Pays riche, armée forte », Zaibatsus), industrialisation fulgurante et expansionnisme militaire : victoires contre la Chine (1894-1895), écrasement de la Russie (Tsushima 1905) et annexion de la Corée en 1910. Cours complet.",
    lessonData: LESSON_9_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-10',
    title: "LEÇON 10 : L'IMPÉRIALISME AMÉRICAIN",
    type: 'cours',
    badge: 'Partie 3 • Impérialisme mondial',
    description: "Doctrine Monroe (1823), Corollaire Roosevelt et Destinée Manifeste. Modalités de la domination américaine : Diplomatie du Dollar (United Fruit, « républiques bananières »), politique du Big Stick (Marines en Amérique centrale) et sécession du Canal de Panama (1903).",
    lessonData: LESSON_10_HISTOIRE_3EME
  },

  // -------------------------------------------------------------------------
  // QUATRIÈME PARTIE : LES GRANDS CONFLITS DU XXE SIÈCLE ET LES CRISES (LEÇONS 11 À 14)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-3eme-lecon-11',
    title: 'LEÇON 11 : LA PREMIÈRE GUERRE MONDIALE : CAUSES ET CONSÉQUENCES',
    type: 'cours',
    badge: 'Partie 4 • Conflits du XXe siècle',
    description: "Rivalités coloniales et navales, poudrière balkanique, Triple Alliance contre Triple Entente, attentat de Sarajevo (28 juin 1914). Bilan apocalyptique (10 millions de morts, gueules cassées, Tirailleurs sénégalais), traité de Versailles et SDN. Cours exhaustif.",
    lessonData: LESSON_11_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-12',
    title: 'LEÇON 12 : LA RÉVOLUTION RUSSE ET LA CONSOLIDATION DU RÉGIME COMMUNISTE',
    type: 'cours',
    badge: 'Partie 4 • Conflits du XXe siècle',
    description: "Crise du tsarisme de Nicolas II, Révolution bourgeoise de Février 1917 et prise de pouvoir bolchevique d'Octobre 1917 par Lénine et Trotski. Guerre civile, Communisme de guerre, NEP (1921), création de l'URSS (1922) et industrialisation totalitaire sous Staline.",
    lessonData: LESSON_12_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-13',
    title: 'LEÇON 13 : LA CRISE ÉCONOMIQUE DES ANNÉES 30',
    type: 'cours',
    badge: 'Partie 4 • Conflits du XXe siècle',
    description: "Le krach de Wall Street (« Jeudi Noir » du 24 octobre 1929), surproduction et bulle spéculative, contagion planétaire et chômage de masse. Conséquences : arrivée d'Adolf Hitler au pouvoir en 1933, New Deal keynésien de Roosevelt et émergence de l'État-providence.",
    lessonData: LESSON_13_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-14',
    title: 'LEÇON 14 : LA SECOUSSE DE LA DEUXIÈME GUERRE MONDIALE : CAUSES ET CONSÉQUENCES',
    type: 'cours',
    badge: 'Partie 4 • Conflits du XXe siècle',
    description: "Agression nazie et Lebensraum, Blitzkrieg, mondialisation en 1941 (Barbarossa, Pearl Harbor), tournants décisifs (Stalingrad, Midway). Conséquences : 60 millions de morts, Shoah, armement nucléaire, création de l'ONU à San Francisco et monde bipolaire USA/URSS.",
    lessonData: LESSON_14_HISTOIRE_3EME
  },

  // -------------------------------------------------------------------------
  // CINQUIÈME PARTIE : DÉCOLONISATION ET ÉMERGENCE DU TIERS-MONDE (LEÇONS 15 À 19)
  // -------------------------------------------------------------------------
  {
    id: 'histoire-3eme-lecon-15',
    title: 'LEÇON 15 : LES CAUSES ET LES FORMES DE LA DÉCOLONISATION',
    type: 'cours',
    badge: 'Partie 5 • Décolonisation & Sénégal',
    description: "Facteurs internes (Tirailleurs, élites intellectuelles Senghor/Nkrumah, syndicats) et facteurs externes (affaiblissement des métropoles, anticolonialisme USA/URSS, Charte de l'ONU). Analyse comparée : voie négociée contre guerres de libération armée.",
    lessonData: LESSON_15_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-16',
    title: "LEÇON 16 : LA DÉCOLONISATION EN ASIE (INDE ET INDOCHINE)",
    type: 'cours',
    badge: 'Partie 5 • Décolonisation & Sénégal',
    description: "L'Inde britannique (Gandhi, non-violence, désobéissance civile, et partition sanglante de 1947 entre Union Indienne et Pakistan) face à la guerre d'Indochine (Viêt Minh d'Hô Chi Minh, Diên Biên Phu en mai 1954 et accords de Genève au 17e parallèle).",
    lessonData: LESSON_16_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-17',
    title: 'LEÇON 17 : LA DÉCOLONISATION EN AFRIQUE NOIRE ET EN ALGÉRIE',
    type: 'cours',
    badge: 'Partie 5 • Décolonisation & Sénégal',
    description: "Émancipation négociée en Afrique subsaharienne (Ghana 1957, Loi-cadre 1956, référendum 1958 avec le 'Non' de la Guinée de Sékou Touré, indépendances de 1960) contre la tragédie sanglante de la guerre d'Algérie (FLN, accords d'Évian, 5 juillet 1962).",
    lessonData: LESSON_17_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-18',
    title: "LEÇON 18 : BANDOENG ET L'ÉMERGENCE DU TIERS-MONDE",
    type: 'cours',
    badge: 'Partie 5 • Décolonisation & Sénégal',
    description: "La Conférence de Bandung (avril 1955, Sukarno, Nehru, Zhou Enlai, Nasser), condamnation du colonialisme, émergence du concept de « Tiers-Monde » (Alfred Sauvy 1952), Mouvement des Non-Alignés (Belgrade 1961), limites et néocolonialisme.",
    lessonData: LESSON_18_HISTOIRE_3EME
  },
  {
    id: 'histoire-3eme-lecon-19',
    title: 'LEÇON 19 : LE SÉNÉGAL : VIE POLITIQUE DE 1944 À 1962',
    type: 'cours',
    badge: 'Partie 5 • Décolonisation & Sénégal',
    description: "Évolution politique : SFIO de Lamine Guèye, scission de Senghor et création du BDS (1948), Loi-cadre (1956), Fédération du Mali et indépendance du 20 août 1960. Bicéphalisme institutionnel et crise dramatique du 17 décembre 1962 (arrestation de Mamadou Dia).",
    lessonData: LESSON_19_HISTOIRE_3EME
  }
];
