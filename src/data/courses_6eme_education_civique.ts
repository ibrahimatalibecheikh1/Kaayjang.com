import { ContentData } from './courses';
import {
  LESSON_1_CIVIQUE_6EME,
  LESSON_2_CIVIQUE_6EME,
  LESSON_3_CIVIQUE_6EME
} from './courses_6eme_education_civique_part1';
import {
  LESSON_4_CIVIQUE_6EME,
  LESSON_5_CIVIQUE_6EME,
  LESSON_6_CIVIQUE_6EME,
  LESSON_7_CIVIQUE_6EME
} from './courses_6eme_education_civique_part2';
import {
  LESSON_8_CIVIQUE_6EME,
  LESSON_9_CIVIQUE_6EME,
  LESSON_10_CIVIQUE_6EME
} from './courses_6eme_education_civique_part3';

// =========================================================================
// COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 6ÈME
// RÉPUBLIQUE DU SÉNÉGAL - PROGRAMME OFFICIEL INTÉGRAL SANS ABRÉVIATION
// 10 Leçons organisées selon les 3 grands chapitres officiels
// =========================================================================

export const COURSES_EDUCATION_CIVIQUE_6EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // CHAPITRE 1 : LA FAMILLE SÉNÉGALAISE
  // -----------------------------------------------------------------------
  {
    id: 'civique-6eme-lecon-1',
    title: 'LEÇON 1 : L\'ORGANISATION DE LA FAMILLE SÉNÉGALAISE',
    type: 'cours',
    badge: 'Chapitre 1 • La famille sénégalaise',
    description: 'La famille élargie ou patriarcale (composition, rôle du patriarche, avantages et contraintes), la famille restreinte ou nucléaire (définition, fonctionnement moderne, causes d\'émergence), liens de parenté et valeurs de cohabitation.',
    lessonData: LESSON_1_CIVIQUE_6EME
  },
  {
    id: 'civique-6eme-lecon-2',
    title: 'LEÇON 2 : LES DEVOIRS ET DROITS AU SEIN DE LA FAMILLE',
    type: 'cours',
    badge: 'Chapitre 1 • La famille sénégalaise',
    description: 'Devoirs des enfants envers les parents (respect, obéissance, assistance matérielle et morale, tâches ménagères), devoirs des parents envers les enfants (entretien, éducation, scolarisation, état civil) et droits fondamentaux.',
    lessonData: LESSON_2_CIVIQUE_6EME
  },
  {
    id: 'civique-6eme-lecon-3',
    title: 'LEÇON 3 : L\'ÉVOLUTION DE LA FAMILLE SÉNÉGALAISE',
    type: 'cours',
    badge: 'Chapitre 1 • La famille sénégalaise',
    description: 'Facteurs de mutation (exode rural, urbanisation, crise économique, émancipation des femmes, mondialisation), changements de structure et de rôles, défis, conséquences et préservation des valeurs de solidarité et Teranga.',
    lessonData: LESSON_3_CIVIQUE_6EME
  },

  // -----------------------------------------------------------------------
  // CHAPITRE 2 : LES COLLECTIVITÉS LOCALES (LE MILIEU PROCHE)
  // -----------------------------------------------------------------------
  {
    id: 'civique-6eme-lecon-4',
    title: 'LEÇON 4 : LE QUARTIER',
    type: 'cours',
    badge: 'Chapitre 2 • Les collectivités locales',
    description: 'Définition et caractéristiques du quartier en milieu urbain, autorité administrative du Délégué de quartier (désignation, rôles et attributions), vie communautaire, ASC et opérations de salubrité Set-Setal.',
    lessonData: LESSON_4_CIVIQUE_6EME
  },
  {
    id: 'civique-6eme-lecon-5',
    title: 'LEÇON 5 : LE VILLAGE',
    type: 'cours',
    badge: 'Chapitre 2 • Les collectivités locales',
    description: 'Cellule fondamentale du milieu rural, place publique centrale (Penc), autorité locale du Chef de village (statut, attributions administratives et coutumières), solidarité villageoise (Santane) et défis du monde rural.',
    lessonData: LESSON_5_CIVIQUE_6EME
  },
  {
    id: 'civique-6eme-lecon-6',
    title: 'LEÇON 6 : LA COMMUNE D\'ARRONDISSEMENT ET LA COMMUNE',
    type: 'cours',
    badge: 'Chapitre 2 • Les collectivités locales',
    description: 'Décentralisation, statut de la commune, organes de gestion (Conseil municipal délibérant, Maire exécutif), compétences transférées (état civil, éducation, santé, salubrité) et civisme fiscal local.',
    lessonData: LESSON_6_CIVIQUE_6EME
  },
  {
    id: 'civique-6eme-lecon-7',
    title: 'LEÇON 7 : LA COMMUNAUTÉ RURALE',
    type: 'cours',
    badge: 'Chapitre 2 • Les collectivités locales',
    description: 'Évolution vers la commune rurale (Acte III de la décentralisation), regroupement des villages, chef-lieu et marché louma, organes de gestion (Conseil rural, Maire rural), gestion foncière, hydraulique et pistes de production.',
    lessonData: LESSON_7_CIVIQUE_6EME
  },

  // -----------------------------------------------------------------------
  // CHAPITRE 3 : LA NATION ET LA CITOYENNETÉ SÉNÉGALAISE
  // -----------------------------------------------------------------------
  {
    id: 'civique-6eme-lecon-8',
    title: 'LEÇON 8 : LA PATRIE ET LE PATRIOTISME',
    type: 'cours',
    badge: 'Chapitre 3 • La nation et la citoyenneté',
    description: 'Notion de patrie (la terre des pères, héritage historique et spirituel), définition et fondements du patriotisme, manifestation au quotidien : respect des symboles (drapeau, hymne, devise), protection des biens publics et culte du travail bien fait.',
    lessonData: LESSON_8_CIVIQUE_6EME
  },
  {
    id: 'civique-6eme-lecon-9',
    title: 'LEÇON 9 : LA NATION ET LA CITOYENNETÉ',
    type: 'cours',
    badge: 'Chapitre 3 • La nation et la citoyenneté',
    description: 'Définition sociologique de la Nation et vouloir-vivre collectif sénégalais (diversité ethnique unie, dialogue, cousinage à plaisanterie), statut légal et politique de citoyenneté (acquisition, citoyenneté active), civisme et conscience nationale.',
    lessonData: LESSON_9_CIVIQUE_6EME
  },
  {
    id: 'civique-6eme-lecon-10',
    title: 'LEÇON 10 : LES DROITS ET LES DEVOIRS DU CITOYEN SÉNÉGALAIS',
    type: 'cours',
    badge: 'Chapitre 3 • La nation et la citoyenneté',
    description: 'Droits fondamentaux (droits civils et libertés individuelles, droits politiques, droits économiques et sociaux), devoirs impératifs (obéissance aux lois, devoir fiscal, défense nationale, solidarité et respect d\'autrui) et socle du contrat social.',
    lessonData: LESSON_10_CIVIQUE_6EME
  },

  // -----------------------------------------------------------------------
  // RESSOURCES ET SUPPORTS IMPRIMABLES
  // -----------------------------------------------------------------------
  {
    id: 'pdf-civique-6eme-integral',
    title: 'Fascicule officiel PDF : Les 10 Leçons d\'Éducation Civique 6ème',
    type: 'ressource',
    badge: 'Fascicule complet imprimable',
    description: 'Recueil exhaustif des 10 leçons officielles réparties sur les 3 chapitres du programme : La famille sénégalaise, Les collectivités locales, La nation et la citoyenneté.',
    link: '#'
  },
  {
    id: 'pdf-civique-6eme-exercices',
    title: 'Exercices et études de cas civiques - Classe de 6ème',
    type: 'ressource',
    badge: 'Évaluations & Devoirs',
    description: 'Séries de questions de cours, études de situations citoyennes (règlement des litiges, opérations Set-Setal, obéissance aux lois, gestion communale) et fiches d\'évaluation.',
    link: '#'
  }
];

export const CIVIQUE_6EME_CHAPTERS = [
  { id: 'all', label: 'Toutes les leçons', count: 10 },
  { id: 'chap-1', label: 'Chapitre 1 : La famille', count: 3 },
  { id: 'chap-2', label: 'Chapitre 2 : Collectivités locales', count: 4 },
  { id: 'chap-3', label: 'Chapitre 3 : Nation & Citoyenneté', count: 3 }
];
