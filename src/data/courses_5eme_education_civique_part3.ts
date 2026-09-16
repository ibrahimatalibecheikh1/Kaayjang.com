import { LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 5ÈME (MODÈLE SÉNÉGALAIS)
// TROISIÈME PARTIE : LA PRÉVENTION DES RISQUES, LA SANTÉ ET L'ENVIRONNEMENT
// Leçons 7 et 8 - Cours complets avec Introductions et Conclusions (Sans résumés)
// =========================================================================

// --- LEÇON 7 : LA SÉCURITÉ ROUTIÈRE ET LA PRÉVENTION DES ACCIDENTS DE LA CIRCULATION ---
export const LESSON_7_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LA SÉCURITÉ ROUTIÈRE ET LA PRÉVENTION DES ACCIDENTS DE LA CIRCULATION',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `Au Sénégal, l'espace routier est marqué par une recrudescence alarmante des accidents de la circulation, qui font de nombreuses victimes chaque année. Face à ce défi de sécurité publique, l'apprentissage des règles de la route devient une urgence citoyenne. Cette leçon vise à inculquer aux élèves les comportements responsables à adopter.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

TROISIÈME PARTIE : LA PRÉVENTION DES RISQUES, LA SANTÉ ET L'ENVIRONNEMENT

LEÇON 7 : La sécurité routière et la prévention des accidents de la circulation

Introduction
Au Sénégal, l'espace routier est marqué par une recrudescence alarmante des accidents de la circulation, qui font de nombreuses victimes chaque année. Face à ce défi de sécurité publique, l'apprentissage des règles de la route devient une urgence citoyenne. Cette leçon vise à inculquer aux élèves les comportements responsables à adopter.

Développement
La route est un espace partagé qui exige une discipline stricte pour éviter les drames. Les élèves de 5ème se déplacent souvent à pied, à vélo, ou en transport en commun (Car Rapide, bus Dem Dikk, moto-taxi Jakarta).

En tant que piétons, les règles de sécurité imposent de marcher sur les trottoirs lorsqu'ils existent, ou sur le côté gauche de la chaussée face aux véhicules. Pour traverser, il faut impérativement utiliser les passages piétons ou les passerelles de sécurité.

Pour les usagers des deux-roues, le port du casque homologué est obligatoire et vital. Les comportements irresponsables, comme les surcharges sur les motos et le non-respect des feux, sont les causes principales des accidents. En cas d'accident, il faut alerter immédiatement les secours au 18 (Sapeurs-pompiers) ou au 17 (Police).

Conclusion
La lutte contre l'insécurité routière au Sénégal commence par le changement des comportements individuels. En respectant scrupuleusement le Code de la route, chaque élève préserve sa propre vie.`,
  sections: [
    {
      title: 'I. La route : un espace public partagé à hauts risques',
      content: [
        `La route est un bien public partagé par de multiples usagers : piétons, cyclistes, motocyclistes, automobilistes et chauffeurs de poids lourds.`,
        `Ce partage exige une discipline collective stricte pour éviter les drames humains. Les collégiens de 5ème utilisent quotidiennement divers modes de transport au Sénégal : la marche à pied, le vélo, les Cars Rapides, les bus Dakar Dem Dikk ou Tata, ainsi que les motos-taxis Jakarta.`
      ]
    },
    {
      title: 'II. Les règles de sécurité impératives pour les piétons',
      content: [
        `Le piéton est l'usager le plus vulnérable de la route. Pour se protéger, il doit respecter des consignes strictes :`,
        `• Où marcher : Emprunter systématiquement les trottoirs. En l'absence de trottoir, marcher impérativement sur le côté gauche de la chaussée afin de voir arriver les véhicules face à soi.`,
        `• Comment traverser : Ne jamais traverser en courant ou à l'aveugle. Utiliser obligatoirement les passages piétons (« bandes zébrées ») ou les passerelles piétonnes aériennes lorsqu'elles existent.`,
        `• Vigilance : S'assurer que les véhicules sont totalement arrêtés avant d'engager la traversée et éviter de porter des écouteurs ou de regarder un téléphone portable sur la route.`
      ]
    },
    {
      title: 'III. Les règles pour les conducteurs et passagers de deux-roues',
      content: [
        `L'expansion des motos et motos-taxis Jakarta exige une grande prudence :`,
        `• Port du casque homologué : Obligatoire et vital pour le conducteur comme pour le passager afin de prévenir les traumatismes crâniens mortels.`,
        `• Interdiction formelle des surcharges : Ne jamais monter à trois ou quatre sur une même moto, pratique dangereuse très fréquente.`,
        `• Respect scrupuleux de la signalisation routière : arrêt obligatoire aux feux rouges, respect des limitations de vitesse et interdiction de téléphoner au guidon.`
      ]
    },
    {
      title: 'IV. La conduite à tenir en cas d\'accident et les numéros d\'urgence',
      content: [
        `En cas d'accident de la circulation :`,
        `1. Protéger les lieux pour éviter un suraccident (baliser la zone).`,
        `2. Alerter immédiatement les services de secours officiels en précisant le lieu exact et le nombre de blessés :`,
        `   • Sapeurs-Pompiers (BNSP) : composer le 18 (appel gratuit).`,
        `   • Police Nationale : composer le 17.`,
        `   • Gendarmerie Nationale : composer le 800 00 20 20 (numéro vert).`,
        `3. Secourir sans déplacer un blessé grave sauf danger imminent d'incendie.`
      ]
    }
  ],
  diagram: {
    title: 'Prévention et sécurité routière au Sénégal',
    root: 'SÉCURITÉ ROUTIÈRE',
    branches: [
      {
        name: 'Règles pour Piétons',
        subtitle: 'Protection des plus vulnérables',
        items: [
          'Marcher sur les trottoirs aménagés',
          'Marcher à gauche face aux voitures',
          'Traverser sur les passages zébrés',
          'Utiliser les passerelles aériennes'
        ]
      },
      {
        name: 'Deux-roues & Transports',
        subtitle: 'Motos Jakarta & Cars Rapides',
        items: [
          'Port obligatoire du casque homologué',
          'Interdiction absolue des surcharges',
          'Respect strict des feux de signalisation',
          'Vitesse maîtrisée et feux allumés'
        ]
      },
      {
        name: 'Gestion des Urgences',
        subtitle: 'Protéger - Alerter - Secourir',
        items: [
          'Sapeurs-Pompiers : 18',
          'Police Nationale : 17',
          'Gendarmerie : 800 00 20 20',
          'Ne pas déplacer un blessé inconscient'
        ]
      }
    ]
  },
  conclusion: `La lutte contre l'insécurité routière au Sénégal commence par le changement des comportements individuels. En respectant scrupuleusement le Code de la route, chaque élève préserve sa propre vie.`
};

// --- LEÇON 8 : LA PROTECTION DE L'ENVIRONNEMENT, L'HYGIÈNE PUBLIQUE ET LE DÉVELOPPEMENT DURABLE ---
export const LESSON_8_CIVIQUE_5EME: LessonContent = {
  id: 'civique-5eme-lecon-8',
  number: 'LEÇON 8',
  title: 'LA PROTECTION DE L\'ENVIRONNEMENT, L\'HYGIÈNE PUBLIQUE ET LE DÉVELOPPEMENT DURABLE',
  subject: 'Éducation civique',
  classLevel: '5ème',
  introduction: `Le Sénégal fait face à d'importants défis environnementaux tels que la désertification, l'érosion côtière et la prolifération des déchets plastiques. La protection de notre cadre de vie est devenue une condition essentielle pour notre santé et pour le développement durable. Devenir éco-citoyen implique d'agir pour la salubrité publique.`,
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE
CLASSE DE 5ÈME – MODÈLE SÉNÉGALAIS
Cours complets avec Introductions et Conclusions (Sans résumés)

TROISIÈME PARTIE : LA PRÉVENTION DES RISQUES, LA SANTÉ ET L'ENVIRONNEMENT

LEÇON 8 : La protection de l'environnement, l'hygiène publique et le développement durable

Introduction
Le Sénégal fait face à d'importants défis environnementaux tels que la désertification, l'érosion côtière et la prolifération des déchets plastiques. La protection de notre cadre de vie est devenue une condition essentielle pour notre santé et pour le développement durable. Devenir éco-citoyen implique d'agir pour la salubrité publique.

Développement
L'environnement est l'ensemble des éléments naturels et artificiels qui entourent l'être humain. Sa dégradation affecte directement la santé publique par l'apparition de maladies (paludisme lié aux eaux stagnantes, infections respiratoires).

L'hygiène publique commence par la gestion rigoureuse des déchets ménagers. Le Sénégal a adopté des lois interdisant la production et l'utilisation des sachets plastiques à usage unique à faible micronnage. L'éco-citoyen doit utiliser des sacs réutilisables et jeter ses ordures exclusivement dans les poubelles.

Au collège, le respect de l'environnement se traduit par le maintien de la propreté des classes et des cours. Économiser l'eau, éteindre les lumières inutiles et participer aux journées de nettoiement (Set-Setal) inspirées par les initiatives citoyennes nationales sont des actions concrètes pour le développement durable.

Conclusion
La terre ne nous appartient pas, nous l'avons empruntée à nos enfants. La protection de l'environnement au Sénégal est un devoir patriotique. Par des gestes quotidiens simples d'hygiène, la jeunesse peut transformer durablement le visage du pays.`,
  sections: [
    {
      title: 'I. Définition de l\'environnement et lien vital avec la santé publique',
      content: [
        `L'environnement est l'ensemble des composantes naturelles (air, sol, eau, faune, flore) et des aménagements humains qui entourent notre existence quotidienne.`,
        `Toute détérioration du cadre de vie a des répercussions immédiates sur la santé publique :`,
        `• Les eaux usées et stagnantes favorisent la prolifération des moustiques anophèles, vecteurs du paludisme.`,
        `• Les dépôts d'ordures sauvages et l'incinération à ciel ouvert dégagent des fumées toxiques à l'origine de graves maladies respiratoires et d'allergies.`
      ]
    },
    {
      title: 'II. La gestion rigoureuse des déchets et la législation sur les plastiques',
      content: [
        `L'hygiène publique commence par le tri et l'évacuation ordonnée des ordures ménagères.`,
        `• La loi sur le plastique au Sénégal : Pour stopper la pollution des sols et des océans qui étouffe le bétail et la faune marine, l'État a adopté des lois interdisant la production, l'importation, la détention et la distribution des sachets plastiques à usage unique à faible micronnage.`,
        `• Le comportement éco-citoyen : Remplacer les sachets jetables par des paniers, cabas traditionnels ou sacs en tissu réutilisables, et déposer impérativement tous les détritus dans des poubelles fermées.`
      ]
    },
    {
      title: 'III. L\'éco-citoyenneté en milieu scolaire et les opérations Set-Setal',
      content: [
        `Au collège, chaque élève est un ambassadeur de la propreté et du développement durable :`,
        `• Dans les classes et la cour : Ne rien jeter par terre, balayer régulièrement et maintenir les sanitaires dans un état de propreté irréprochable.`,
        `• Éco-gestes quotidiens : Fermer soigneusement les robinets d'eau après usage et éteindre les lampes et ventilateurs lorsque la pièce est éclairée par la lumière du jour.`,
        `• Les opérations « Set-Setal » : Participer avec ferveur aux journées de nettoiement et d'embellissement collectif organisées au collège et dans les quartiers, prolongeant l'élan des initiatives citoyennes historiques sénégalaises.`
      ]
    }
  ],
  diagram: {
    title: 'Éco-citoyenneté, hygiène et développement durable',
    root: 'ENVIRONNEMENT & HYGIÈNE',
    branches: [
      {
        name: 'Santé & Cadre de Vie',
        subtitle: 'Prévention des épidémies',
        items: [
          'Élimination des eaux stagnantes (paludisme)',
          'Fin des dépotoirs sauvages d\'ordures',
          'Lutte contre la pollution de l\'air',
          'Protection des nappes phréatiques'
        ]
      },
      {
        name: 'Lutte contre le Plastique',
        subtitle: 'Lois républicaines & alternatives',
        items: [
          'Interdiction des sachets à faible micronnage',
          'Usage de cabas et sacs réutilisables',
          'Tri et dépôt exclusif dans les poubelles',
          'Protection du bétail et de la mer'
        ]
      },
      {
        name: 'Éco-gestes au Collège',
        subtitle: 'Pratiques quotidiennes durables',
        items: [
          'Nettoiement citoyen « Set-Setal »',
          'Économie d\'eau aux robinets',
          'Extinction des lampes inutiles',
          'Reboisement des cours de récréation'
        ]
      }
    ]
  },
  conclusion: `La terre ne nous appartient pas, nous l'avons empruntée à nos enfants. La protection de l'environnement au Sénégal est un devoir patriotique. Par des gestes quotidiens simples d'hygiène, la jeunesse peut transformer durablement le visage du pays.`
};
