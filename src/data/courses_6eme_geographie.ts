import { ContentData, LessonContent } from './courses';
import {
  LESSON_1_GEOGRAPHIE_6EME,
  LESSON_2_GEOGRAPHIE_6EME,
  LESSON_3_GEOGRAPHIE_6EME
} from './courses_6eme_geographie_part1';
import {
  LESSON_4_GEOGRAPHIE_6EME,
  LESSON_5_GEOGRAPHIE_6EME,
  LESSON_6_GEOGRAPHIE_6EME,
  LESSON_7_GEOGRAPHIE_6EME,
  LESSON_8_GEOGRAPHIE_6EME
} from './courses_6eme_geographie_part2';
import {
  LESSON_9_GEOGRAPHIE_6EME,
  LESSON_10_GEOGRAPHIE_6EME,
  LESSON_11_GEOGRAPHIE_6EME,
  LESSON_12_GEOGRAPHIE_6EME,
  LESSON_13_GEOGRAPHIE_6EME
} from './courses_6eme_geographie_part3';

// =========================================================================
// COURS INTÉGRAUX DE GÉOGRAPHIE - CLASSE DE 6ÈME (13 LEÇONS OFFICIELLES)
// CONFORME AU DOCUMENT OFFICIEL DU MINISTÈRE DE L'ÉDUCATION NATIONALE DU SÉNÉGAL
// AUCUN RÉSUMÉ - AVEC INTRODUCTION ET CONCLUSION INTÉGRALES
// =========================================================================

export const COURSES_GEOGRAPHIE_6EME_RAW: LessonContent[] = [
  LESSON_1_GEOGRAPHIE_6EME,
  LESSON_2_GEOGRAPHIE_6EME,
  LESSON_3_GEOGRAPHIE_6EME,
  LESSON_4_GEOGRAPHIE_6EME,
  LESSON_5_GEOGRAPHIE_6EME,
  LESSON_6_GEOGRAPHIE_6EME,
  LESSON_7_GEOGRAPHIE_6EME,
  LESSON_8_GEOGRAPHIE_6EME,
  LESSON_9_GEOGRAPHIE_6EME,
  LESSON_10_GEOGRAPHIE_6EME,
  LESSON_11_GEOGRAPHIE_6EME,
  LESSON_12_GEOGRAPHIE_6EME,
  LESSON_13_GEOGRAPHIE_6EME
];

export const GEOGRAPHIE_6EME_FILTER_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '13' },
  { id: 'partie-1', label: 'Partie 1 : Outils du géographe & Cartographie', count: '3' },
  { id: 'partie-2', label: 'Partie 2 : Géographie régionale appliquée', count: '5' },
  { id: 'partie-3', label: 'Partie 3 : Géographie générale du Sénégal', count: '5' }
];

export const COURSES_GEOGRAPHIE_6EME: ContentData[] = [
  // -----------------------------------------------------------------------
  // PREMIÈRE PARTIE : INITIATION À LA GÉOGRAPHIE ET OUTILS DU GÉOGRAPHE
  // -----------------------------------------------------------------------
  {
    id: 'geographie-6eme-lecon-1',
    title: 'LEÇON 1 : LA GÉOGRAPHIE : DÉFINITION, OBJET ET UTILITÉ',
    type: 'cours',
    badge: 'Partie 1 • Outils & Cartographie',
    description: "Origine étymologique (Gê + graphein), objet d'étude moderne (relations Homme-Milieu), les trois branches (physique, humaine, économique), méthode scientifique en 5 étapes et utilité citoyenne.",
    lessonData: LESSON_1_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-2',
    title: "LEÇON 2 : LES OUTILS DU GÉOGRAPHE : L'OBSERVATION ET LA BOUSSOLE",
    type: 'cours',
    badge: 'Partie 1 • Outils & Cartographie',
    description: "Observation directe (sur le terrain) vs indirecte (satellites/photos), boussole à aiguille aimantée, rose des vents (points cardinaux et collatéraux) et guide pratique d'utilisation sur le terrain.",
    lessonData: LESSON_2_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-3',
    title: "LEÇON 3 : L'INITIATION À LA CARTOGRAPHIE : ORIENTATION, ÉCHELLE ET LÉGENDE",
    type: 'cours',
    badge: 'Partie 1 • Outils & Cartographie',
    description: "Définition mathématique et conventionnelle de la carte, orientation par la flèche Nord, échelles numérique (1/100 000) et graphique, et décodage de la légende (symboles ponctuels, linéaires, de surface).",
    lessonData: LESSON_3_GEOGRAPHIE_6EME
  },

  // -----------------------------------------------------------------------
  // DEUXIÈME PARTIE : LA GÉOGRAPHIE RÉGIONALE APPLIQUÉE
  // -----------------------------------------------------------------------
  {
    id: 'geographie-6eme-lecon-4',
    title: 'LEÇON 4 : LE CADRE PHYSIQUE RÉGIONAL : RELIEF, CLIMAT, VÉGÉTATION ET HYDROGRAPHIE',
    type: 'cours',
    badge: 'Partie 2 • Géographie régionale',
    description: "Étude du milieu immédiat de l'élève : formes de relief locales (Mamelles, plateaux, collines de l'Est), climat local (saison sèche et hivernage), étagement de la végétation et réseau hydrographique.",
    lessonData: LESSON_4_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-5',
    title: 'LEÇON 5 : LA POPULATION RÉGIONALE : EFFECTIFS, STRUCTURE ET MOUVEMENTS',
    type: 'cours',
    badge: 'Partie 2 • Géographie régionale',
    description: "Effectifs ANSD et calcul de densité démographique (hab/km²), pyramide des âges à base élargie (forte jeunesse), mouvement naturel (natalité/mortalité) et mouvements migratoires (exode rural et émigration).",
    lessonData: LESSON_5_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-6',
    title: 'LEÇON 6 : LES ACTIVITÉS ÉCONOMIQUES RÉGIONALES',
    type: 'cours',
    badge: 'Partie 2 • Géographie régionale',
    description: "Secteur primaire (agriculture vivrière/de rente, élevage, pêche côtière), secteur secondaire (artisanat local et industries agroalimentaires/lourdes) et secteur tertiaire (marchés hebdomadaires Loumas, transports et services).",
    lessonData: LESSON_6_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-7',
    title: "LEÇON 7 : L'ORGANISATION DE L'ESPACE RÉGIONAL : LES VILLAGES ET LES QUARTIERS URBAINS",
    type: 'cours',
    badge: 'Partie 2 • Géographie régionale',
    description: "Typologie rurale (villages groupés autour d'un point d'eau ou dispersés, matériaux locaux), morphologie urbaine (centre-ville, quartiers résidentiels, périphéries) et flux d'interdépendance réciproques.",
    lessonData: LESSON_7_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-8',
    title: 'LEÇON 8 : LES PROBLÈMES ENVIRONNEMENTAUX ET LES PERSPECTIVES DE DÉVELOPPEMENT DE LA RÉGION',
    type: 'cours',
    badge: 'Partie 2 • Géographie régionale',
    description: "Défis en milieu rural (désertification, déforestation pour charbon de bois, salinisation) et nuisances urbaines (déchets plastiques, inondations), initiatives Set-Setal, reboisement et projets solaires d'avenir.",
    lessonData: LESSON_8_GEOGRAPHIE_6EME
  },

  // -----------------------------------------------------------------------
  // TROISIÈME PARTIE : LA GÉOGRAPHIE GÉNÉRALE DU SÉNÉGAL
  // -----------------------------------------------------------------------
  {
    id: 'geographie-6eme-lecon-9',
    title: "LEÇON 9 : LA SITUATION GÉOGRAPHIQUE ET L'ORGANISATION ADMINISTRATIVE DU SÉNÉGAL",
    type: 'cours',
    badge: 'Partie 3 • Géographie générale du Sénégal',
    description: "Situation absolue (12°8-16°41 N, 11°21-17°32 O) et relative (Pointe des Almadies), 196 722 km², façade maritime de 700 km, frontières et enclave gambienne, les 14 régions, 46 départements, arrondissements et communes.",
    lessonData: LESSON_9_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-10',
    title: 'LEÇON 10 : LE RELIEF ET LA GÉOLOGIE DU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 3 • Géographie générale du Sénégal',
    description: "Bassin sédimentaire (> 75% du pays) vs Socle ancien dur du Sud-Est (mines d'or de Sabodala, fer), plaines et plateaux tabulaires, collines des Mamelles (105 m) et sommet national à Nepen Diakha (581 m).",
    lessonData: LESSON_10_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-11',
    title: 'LEÇON 11 : LE CLIMAT ET LES ZONES DE VÉGÉTATION DU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 3 • Géographie générale du Sénégal',
    description: "Masses d'air (Alizé maritime, Harmattan, Mousson), domaines sahélien (< 400 mm, steppe à épineux), soudanien (400-900 mm, savane à baobabs) et sous-guinéen (> 1 000 mm, forêt tropicale et mangroves).",
    lessonData: LESSON_11_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-12',
    title: 'LEÇON 12 : LE RÉSEAU HYDROGRAPHIQUE DU SÉNÉGAL : LES FLEUVES ET LES RIVIÈRES',
    type: 'cours',
    badge: 'Partie 3 • Géographie générale du Sénégal',
    description: "Fleuve Sénégal (1 790 km, barrages Diama et Manantali, Lac de Guiers et usine de Keur Momar Sarr), fleuve Gambie (Niokolo-Koba, Koulountou), Casamance et estuaire salé du Saloum (sel de Kaolack).",
    lessonData: LESSON_12_GEOGRAPHIE_6EME
  },
  {
    id: 'geographie-6eme-lecon-13',
    title: "LEÇON 13 : MÉTHODOLOGIE ET RÉALISATION D'UNE ENQUÊTE DE TERRAIN EN MILIEU LOCAL",
    type: 'cours',
    badge: 'Partie 3 • Géographie générale du Sénégal',
    description: "Initiation scientifique pratique : préparation théorique en classe (sujet, objectifs, questionnaire), descente sur le terrain (boussoles, interviews), dépouillement statistique et rédaction du rapport final.",
    lessonData: LESSON_13_GEOGRAPHIE_6EME
  }
];

export interface GeographiePart {
  id: string;
  title: string;
  subtitle: string;
  lessonRange: string;
  lessons: LessonContent[];
}

export const GEOGRAPHIE_6EME_PARTS: GeographiePart[] = [
  {
    id: 'partie-1',
    title: 'Première Partie : Initiation à la géographie et outils du géographe',
    subtitle: 'Définition, boussole, observation et initiation à la cartographie',
    lessonRange: 'Leçons 1 à 3',
    lessons: [
      LESSON_1_GEOGRAPHIE_6EME,
      LESSON_2_GEOGRAPHIE_6EME,
      LESSON_3_GEOGRAPHIE_6EME
    ]
  },
  {
    id: 'partie-2',
    title: 'Deuxième Partie : La géographie régionale appliquée',
    subtitle: 'Cadre physique, population, économie, espaces ruraux/urbains et environnement régional',
    lessonRange: 'Leçons 4 à 8',
    lessons: [
      LESSON_4_GEOGRAPHIE_6EME,
      LESSON_5_GEOGRAPHIE_6EME,
      LESSON_6_GEOGRAPHIE_6EME,
      LESSON_7_GEOGRAPHIE_6EME,
      LESSON_8_GEOGRAPHIE_6EME
    ]
  },
  {
    id: 'partie-3',
    title: 'Troisième Partie : La géographie générale du Sénégal',
    subtitle: 'Situation et limites, relief et géologie, climat et végétation, hydrographie, environnement',
    lessonRange: 'Leçons 9 à 13',
    lessons: [
      LESSON_9_GEOGRAPHIE_6EME,
      LESSON_10_GEOGRAPHIE_6EME,
      LESSON_11_GEOGRAPHIE_6EME,
      LESSON_12_GEOGRAPHIE_6EME,
      LESSON_13_GEOGRAPHIE_6EME
    ]
  }
];
