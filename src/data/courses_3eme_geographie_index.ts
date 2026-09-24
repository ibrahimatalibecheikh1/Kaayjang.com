// =========================================================================
// INDEX CENTRAL DES COURS DE GÉOGRAPHIE 3ÈME (SÉNÉGAL)
// Programme officiel du Ministère de l'Éducation Nationale (BFEM)
// 13 Leçons intégrales officielles réparties en 4 Grandes Parties
// Avec figures SVG, cartes interactives, tableaux et fiches de révision BFEM
// =========================================================================

import { LessonContent } from './courses';
import {
  LESSON_1_GEOGRAPHIE_3EME,
  LESSON_2_GEOGRAPHIE_3EME,
  LESSON_3_GEOGRAPHIE_3EME
} from './courses_3eme_geographie_part1';

import {
  LESSON_4_GEOGRAPHIE_3EME,
  LESSON_5_GEOGRAPHIE_3EME,
  LESSON_6_GEOGRAPHIE_3EME,
  LESSON_7_GEOGRAPHIE_3EME
} from './courses_3eme_geographie_part2';

import {
  LESSON_8_GEOGRAPHIE_3EME,
  LESSON_9_GEOGRAPHIE_3EME,
  LESSON_10_GEOGRAPHIE_3EME
} from './courses_3eme_geographie_part3';

import {
  LESSON_11_GEOGRAPHIE_3EME,
  LESSON_12_GEOGRAPHIE_3EME,
  LESSON_13_GEOGRAPHIE_3EME
} from './courses_3eme_geographie_part4';

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

export const GEOGRAPHIE_3EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons', count: '13' },
  { id: 'part-1', label: 'Partie 1 • Démographie & Urbanisation mondiale', count: '3' },
  { id: 'part-2', label: 'Partie 2 • Inégalités, Systèmes & Coopération', count: '4' },
  { id: 'part-3', label: 'Partie 3 • Secteur Primaire au Sénégal', count: '3' },
  { id: 'part-4', label: 'Partie 4 • Industrie, Tourisme & Échanges', count: '3' }
];

export const COURSES_3EME_GEOGRAPHIE: ContentData[] = [
  // -------------------------------------------------------------------------
  // MODULE CARTOGRAPHIQUE INTERACTIF DU SÉNÉGAL
  // -------------------------------------------------------------------------
  {
    id: 'geo-senegal-interactive-map-3eme',
    title: 'CARTE INTERACTIVE : LE SÉNÉGAL PHYSIQUE, ADMINISTRATIF & ÉCONOMIQUE',
    type: 'cours',
    badge: 'Outil interactif officiel',
    description: 'Module cartographique haute précision : 14 régions administratives, pôles industriels, zones agro-écologiques (Vallée, Niayes, Bassin arachidier, Casamance), sites touristiques et gisements pétro-gaziers (Sangomar, GTA).',
    content: 'Module interactif officiel du Sénégal pour les cours de géographie 3ème et la préparation des épreuves de croquis du BFEM.'
  },

  // -------------------------------------------------------------------------
  // PREMIÈRE PARTIE : LES DYNAMIQUES DÉMOGRAPHIQUES ET L'URBANISATION MONDIALE (LEÇONS 1 À 3)
  // -------------------------------------------------------------------------
  {
    id: 'geo-3eme-lecon-1',
    title: 'LEÇON 1 : LA POPULATION MONDIALE : CROISSANCE, RÉPARTITION ET DYNAMIQUES DÉMOGRAPHIQUES',
    type: 'cours',
    badge: 'Partie 1 • Démographie & Urbanisation',
    description: 'La trajectoire démographique planétaire (8 milliards d\'habitants), modèle de transition démographique (3 phases), foyers majeurs de peuplement et déserts humains, structures par âge (pyramides des âges jeune vs vieillissante) et enjeux au Sénégal.',
    lessonData: LESSON_1_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-2',
    title: 'LEÇON 2 : LES MIGRATIONS INTERNATIONALES DANS LE MONDE CONTEMPORAIN',
    type: 'cours',
    badge: 'Partie 1 • Démographie & Urbanisation',
    description: 'Typologie des flux migratoires mondiaux (travail, réfugiés, climatiques, fuite des cerveaux), facteurs push et pull, couloirs migratoires Sud-Nord et Sud-Sud, transferts d\'argent de la diaspora et analyse du drame de l\'émigration irrégulière au Sénégal.',
    lessonData: LESSON_2_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-3',
    title: 'LEÇON 3 : L\'URBANISATION DANS LE MONDE : CROISSANCE URBAINE, MÉGAPOLES ET SÉGRÉGATIONS',
    type: 'cours',
    badge: 'Partie 1 • Démographie & Urbanisation',
    description: 'La planète urbaine (plus de 55% d\'urbains), mégalopoles (BosWash, Tokaido), bidonvilles et ségrégation spatiale, étalement urbain et étude du cas de la région métropolitaine de Dakar (macrobiocéphalie, inondations et ville nouvelle de Diamniadio).',
    lessonData: LESSON_3_GEOGRAPHIE_3EME
  },

  // -------------------------------------------------------------------------
  // DEUXIÈME PARTIE : LES DYNAMIQUES ÉCONOMIQUES ET LA MONDIALISATION (LEÇONS 4 À 7)
  // -------------------------------------------------------------------------
  {
    id: 'geo-3eme-lecon-4',
    title: 'LEÇON 4 : LES INÉGALITÉS DE DÉVELOPPEMENT DANS LE MONDE CONTEMPORAIN',
    type: 'cours',
    badge: 'Partie 2 • Inégalités, Systèmes & Coopération',
    description: 'Indicateurs de mesure du développement : PIB, limites du PIB par habitant, calcul et piliers de l\'IDH du PNUD (santé, éducation, revenu PPA). Fracture Nord-Sud, puissances émergentes (BRICS+), Pays Moins Avancés (PMA) et facteurs explicatifs historiques.',
    lessonData: LESSON_4_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-5',
    title: 'LEÇON 5 : LES SYSTÈMES ÉCONOMIQUES : CAPITALISME, SOCIALISME ET NOUVELLES FORMES ALTERNATIVES',
    type: 'cours',
    badge: 'Partie 2 • Inégalités, Systèmes & Coopération',
    description: 'Comparaison rigoureuse : Capitalisme/économie de marché (propriété privée, libre concurrence, loi offre/demande) vs Socialisme/économie planifiée (propriété étatique, Gosplan, limites). Économie mixte, capitalisme d\'État chinois et Économie Sociale et Solidaire au Sénégal.',
    lessonData: LESSON_5_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-6',
    title: 'LEÇON 6 : LA COOPÉRATION BILATÉRALE : EXEMPLE DES RELATIONS DU SÉNÉGAL AVEC SES PARTENAIRES',
    type: 'cours',
    badge: 'Partie 2 • Inégalités, Systèmes & Coopération',
    description: 'Définition, APD, coopération financière, technique et culturelle. Partenaires traditionnels occidentaux (France, UE, USA / MCA) et nouveaux partenaires émergents (Chine / autoroute Ila Touba, Turquie / AIBD et CICAD, Inde, Golfe). Défis de souveraineté et d\'endettement.',
    lessonData: LESSON_6_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-7',
    title: 'LEÇON 7 : LA COOPÉRATION MULTILATÉRALE : L\'ACTION DE L\'ONU, DE L\'UNION AFRICAINE ET DE LA CEDEAO',
    type: 'cours',
    badge: 'Partie 2 • Inégalités, Systèmes & Coopération',
    description: 'L\'échelle mondiale (ONU, Casques bleus, UNICEF, UNESCO, OMS, FAO), l\'échelle continentale (Union Africaine, ZLECAF, NEPAD) et l\'échelle régionale ouest-africaine (CEDEAO, libre circulation, projet de monnaie ECO, crise de l\'AES et rôle pacificateur du Sénégal).',
    lessonData: LESSON_7_GEOGRAPHIE_3EME
  },

  // -------------------------------------------------------------------------
  // TROISIÈME PARTIE : GÉOGRAPHIE DU SÉNÉGAL - SECTEUR PRIMAIRE (LEÇONS 8 À 10)
  // -------------------------------------------------------------------------
  {
    id: 'geo-3eme-lecon-8',
    title: 'LEÇON 8 : L\'AGRICULTURE AU SÉNÉGAL : POTENTIALITÉS, PROBLÈMES STRUCTURELS ET MODERNISATION',
    type: 'cours',
    badge: 'Partie 3 • Secteur Primaire au Sénégal',
    description: 'Les 6 zones agro-écologiques (Vallée du fleuve, Niayes, Bassin arachidier, Casamance, Ferlo, Sénégal oriental). Vivrier (riz SAED, mil, sorgho, maraîchage) vs Rente (arachide, coton, canne CSS). Blocages climatiques et fonciers, PRACAS et souveraineté alimentaire.',
    lessonData: LESSON_8_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-9',
    title: 'LEÇON 9 : L\'ÉLEVAGE AU SÉNÉGAL : SYSTÈMES PASTORAUX, CONTRAINTES ET DÉFIS DE SOUVERAINETÉ',
    type: 'cours',
    badge: 'Partie 3 • Secteur Primaire au Sénégal',
    description: 'Le cheptel national (bovins, ovins, caprins), système extensif/pastoral du Ferlo et transhumance vs système intensif périurbain (aviculture, embouche Tabaski, mouton Ladoum). Contraintes (feux de brousse, conflits éleveurs-agriculteurs, vol de bétail) et souveraineté laitière.',
    lessonData: LESSON_9_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-10',
    title: 'LEÇON 10 : LA PÊCHE AU SÉNÉGAL : SECTEUR CLÉ, DÉFIS DE GESTION ET CRISE DE LA RESSOURCE',
    type: 'cours',
    badge: 'Partie 3 • Secteur Primaire au Sénégal',
    description: 'Façade maritime atlantique (700 km) et upwelling. Pêche artisanale piroguière (Kayar, Saint-Louis, Mbour, Joal) vs Pêche industrielle d\'exportation. Crise de la ressource (surpêche, bateaux étrangers, usines de farine), drame de l\'émigration clandestine, AMP et repos biologique.',
    lessonData: LESSON_10_GEOGRAPHIE_3EME
  },

  // -------------------------------------------------------------------------
  // QUATRIÈME PARTIE : GÉOGRAPHIE DU SÉNÉGAL - SECTEURS SECONDAIRE ET TERTIAIRE (LEÇONS 11 À 13)
  // -------------------------------------------------------------------------
  {
    id: 'geo-3eme-lecon-11',
    title: 'LEÇON 11 : L\'INDUSTRIE AU SÉNÉGAL : ATOUTS, STRUCTURE DU TISSU ET FACTEURS DE BLOCAGE',
    type: 'cours',
    badge: 'Partie 4 • Industrie, Tourisme & Échanges',
    description: 'Branches motrices : agroalimentaire (CSS, SONACOS), chimie des phosphates (ICS), cimenteries (SOCOCIM, Dangote, Sahel), raffinage SAR et révolution des hydrocarbures offshore (Sangomar, GTA). Freins (coût électricité, Dakar >80%) et Zones Économiques Spéciales (ZES).',
    lessonData: LESSON_11_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-12',
    title: 'LEÇON 12 : LE TOURISME AU SÉNÉGAL : ATOUTS, IMPACTS SOCIO-ÉCONOMIQUES ET RENOUVEAU DES STRATÉGIES',
    type: 'cours',
    badge: 'Partie 4 • Industrie, Tourisme & Échanges',
    description: 'Atouts naturels et culturels (Teranga, climat, sites UNESCO : Gorée, Saint-Louis, Saloum, Djoudj). Pôles balnéaires (Petite Côte Saly, Cap Skirring). Difficultés (érosion côtière, cherté, saisonnalité). Nouvelles orientations : écotourisme en Casamance et tourisme d\'affaires CICAD.',
    lessonData: LESSON_12_GEOGRAPHIE_3EME
  },
  {
    id: 'geo-3eme-lecon-13',
    title: 'LEÇON 13 : LES ÉCHANGES COMMERCIAUX DU SÉNÉGAL : STRUCTURE, DÉFICIT CHRONIQUE ET FLUX GÉOGRAPHIQUES',
    type: 'cours',
    badge: 'Partie 4 • Industrie, Tourisme & Échanges',
    description: 'Structure des exportations (or brut de Sabodala, produits de la mer, acide phosphorique, ciment) et des importations (hydrocarbures, riz brisé, blé, véhicules). Calculs officiels : Solde commercial et Taux de couverture. Partenaires (Mali, Inde, France, Chine) et ZLECAF.',
    lessonData: LESSON_13_GEOGRAPHIE_3EME
  }
];

export {
  LESSON_1_GEOGRAPHIE_3EME,
  LESSON_2_GEOGRAPHIE_3EME,
  LESSON_3_GEOGRAPHIE_3EME,
  LESSON_4_GEOGRAPHIE_3EME,
  LESSON_5_GEOGRAPHIE_3EME,
  LESSON_6_GEOGRAPHIE_3EME,
  LESSON_7_GEOGRAPHIE_3EME,
  LESSON_8_GEOGRAPHIE_3EME,
  LESSON_9_GEOGRAPHIE_3EME,
  LESSON_10_GEOGRAPHIE_3EME,
  LESSON_11_GEOGRAPHIE_3EME,
  LESSON_12_GEOGRAPHIE_3EME,
  LESSON_13_GEOGRAPHIE_3EME
};
