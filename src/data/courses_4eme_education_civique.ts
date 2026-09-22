import { ContentData, LessonContent } from './courses';

// =========================================================================
// RÉPUBLIQUE DU SÉNÉGAL - MINISTÈRE DE L'ÉDUCATION NATIONALE
// COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (QUATRIÈME)
// Année Scolaire : 2026-2027
// Conforme au document officiel intégral (7 Leçons complètes sans résumé)
// =========================================================================

export const LESSON_1_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LES CONCEPTS DE BASE (ÉDUCATION CIVIQUE, MORALE ET CITOYENNETÉ)',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "L'éducation civique est une matière fondamentale au Sénégal qui vise à former des citoyens conscients de leurs responsabilités envers eux-mêmes, leur communauté et leur nation. Elle repose sur des définitions précises et l'apprentissage de valeurs cardinales indispensables à la vie en société.",
  fullText: `RÉPUBLIQUE DU SÉNÉGAL
Ministère de l'Éducation Nationale
COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (2026-2027)

LEÇON 1 : LES CONCEPTS DE BASE (ÉDUCATION CIVIQUE, MORALE ET CITOYENNETÉ)

Introduction
L'éducation civique est une matière fondamentale au Sénégal qui vise à former des citoyens conscients de leurs responsabilités envers eux-mêmes, leur communauté et leur nation. Elle repose sur des définitions précises et l'apprentissage de valeurs cardinales indispensables à la vie en société.

I. Définitions des concepts clés
• L'Éducation Civique : C'est une discipline d'enseignement qui dispense des connaissances sur les institutions politiques d'un pays, sur les droits individuels et collectifs des citoyens, et sur le fonctionnement général de la cité.
• La Morale : Ensemble de règles de conduite, de principes et de valeurs considérés comme valables et universels au sein d'une société (l'honnêteté, le respect, la solidarité, la tolérance). Elle dicte ce qui est jugé bien ou mal.
• La Citoyenneté : Qualité du citoyen qui bénéficie de droits civils et politiques au sein d'un État et qui, en contrepartie, a des devoirs moraux et légaux à accomplir pour le bien de la collectivité.

II. Les relations entre l'homme, le citoyen et la société
L'homme est un être social qui ne peut vivre isolé. En grandissant au sein de la société, il devient un citoyen à part entière à condition d'intégrer les lois de son pays. La société offre la protection et les infrastructures nécessaires à l'épanouissement de l'homme, tandis que le citoyen fait vivre cette société à travers son travail, le respect des lois et sa participation civique.

III. Droits et devoirs du jeune sénégalais
Tout jeune citoyen au Sénégal jouit de droits inaliénables protégés par l'État, tels que le droit à l'éducation, à la santé, à la protection contre toutes les formes de violence ou d'exploitation. En contrepartie, il a le devoir strict de respecter ses parents, ses enseignants, de travailler sérieusement à l'école, de préserver l'environnement public et de respecter l'ordre et l'autorité.

Conclusion
La maîtrise de ces concepts initiaux permet d'asseoir les bases d'une conscience patriotique élevée. Elle prépare l'élève de 4ème à comprendre son rôle futur de pilier de la République.`,
  sections: [
    {
      title: 'I. Définitions des concepts clés',
      content: [
        "L'Éducation Civique : C'est une discipline d'enseignement qui dispense des connaissances sur les institutions politiques d'un pays, sur les droits individuels et collectifs des citoyens, et sur le fonctionnement général de la cité.",
        "La Morale : Ensemble de règles de conduite, de principes et de valeurs considérés comme valables et universels au sein d'une société (l'honnêteté, le respect, la solidarité, la tolérance). Elle dicte ce qui est jugé bien ou mal.",
        "La Citoyenneté : Qualité du citoyen qui bénéficie de droits civils et politiques au sein d'un État et qui, en contrepartie, a des devoirs moraux et légaux à accomplir pour le bien de la collectivité."
      ],
      table: {
        headers: ['Concept Clé', 'Définition Fondamentale', 'Objectif Visé'],
        rows: [
          ["Éducation Civique", "Discipline d'enseignement sur les institutions politiques, les droits et le fonctionnement de la cité.", "Former des citoyens éclairés et responsables."],
          ["La Morale", "Ensemble de règles, valeurs et principes universels dictant le bien et le mal.", "Guider la conscience individuelle et les comportements."],
          ["La Citoyenneté", "Statut juridique et moral conférant des droits et imposant des devoirs au sein de l'État.", "Participer activement au bien de la collectivité."]
        ]
      }
    },
    {
      title: "II. Les relations entre l'homme, le citoyen et la société",
      content: [
        "L'homme est un être social qui ne peut vivre isolé : dès sa naissance, il s'inscrit au sein d'une famille puis d'un groupe humain plus vaste.",
        "En grandissant au sein de la société, il devient un citoyen à part entière à condition d'intégrer les lois de son pays et de respecter les règles communes.",
        "La société offre la protection, les services publics et les infrastructures nécessaires à l'épanouissement de l'homme.",
        "En retour, le citoyen fait vivre cette société à travers son travail, le respect rigoureux des lois et sa participation civique active."
      ]
    },
    {
      title: "III. Droits et devoirs du jeune sénégalais",
      content: [
        "Les droits inaliénables du jeune sénégalais garantis par l'État :",
        "• Le droit fondamental à l'éducation et à l'instruction obligatoire.",
        "• Le droit à la santé, aux soins médicaux et à une alimentation saine.",
        "• Le droit à la protection contre toutes les formes de violence, de maltraitance et d'exploitation économique.",
        "Les devoirs stricts incombant au jeune sénégalais :",
        "• Le respect absolu envers ses parents et sa famille.",
        "• Le respect des enseignants et du personnel d'encadrement scolaire.",
        "• L'obligation de travailler sérieusement et avec assiduité à l'école.",
        "• La préservation de l'environnement, des espaces publics et du matériel scolaire.",
        "• Le respect de l'ordre public, des lois républicaines et de l'autorité légitime."
      ]
    }
  ],
  conclusion: "La maîtrise de ces concepts initiaux permet d'asseoir les bases d'une conscience patriotique élevée. Elle prépare l'élève de 4ème à comprendre son rôle futur de pilier de la République."
};

export const LESSON_2_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LA NATION SÉNÉGALAISE : FONDEMENTS, UNITÉ ET DIVERSITÉ',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Le Sénégal se caractérise par la coexistence harmonieuse de plusieurs groupes humains, formant ce qu'on appelle une Nation. Cette leçon analyse comment cette diversité enrichit l'unité nationale au lieu de la diviser.",
  fullText: `RÉPUBLIQUE DU SÉNÉGAL
Ministère de l'Éducation Nationale
COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (2026-2027)

LEÇON 2 : LA NATION SÉNÉGALAISE : FONDEMENTS, UNITÉ ET DIVERSITÉ

Introduction
Le Sénégal se caractérise par la coexistence harmonieuse de plusieurs groupes humains, formant ce qu'on appelle une Nation. Cette leçon analyse comment cette diversité enrichit l'unité nationale au lieu de la diviser.

I. Le concept de Nation
La Nation est une communauté humaine vivant sur un territoire défini, unie par une histoire commune, des traditions partagées, et surtout par la volonté de vivre ensemble et de bâtir un avenir commun. Contrairement à l'État qui est politique, la Nation est une entité sociologique et affective.

II. La diversité culturelle du Sénégal
La population sénégalaise est composée de plusieurs ethnies (Wolofs, Pulaars, Sérères, Jolas, Mandingues, Soninkés, Lebous, etc.) qui possèdent leurs propres langues, coutumes et traditions culinaires ou vestimentaires. Sur le plan spirituel, cohabitent une écrasante majorité musulmane (divisée en différentes confréries telles que la Tidianiyya, la Mouridiyya, la Qadiriyya et la Layeniyya) et une communauté chrétienne importante, ainsi que des croyances traditionnelles.

III. Les facteurs d'unité et de cohésion sociale
Malgré cette grande diversité, l'unité nationale est solide grâce à des mécanismes culturels puissants :
• Le cousinage de plaisanterie (Kal ou Kaloné) : Alliance verbale et fraternelle entre certaines ethnies ou noms de famille permettant de désamorcer les tensions par l'humour.
• Le dialogue islamo-chrétien : Climat de respect mutuel et de partage lors des fêtes religieuses (Korité, Tabaski, Noël, Pâques).
• L'utilisation du Wolof : Langue véhiculaire parlée par une très large majorité de la population, facilitant la communication quotidienne.
• L'histoire partagée : Résistance commune contre la colonisation et construction de la république post-indépendance.

Conclusion
La Nation sénégalaise est un modèle de paix et de stabilité en Afrique. Sa devise reflète cette réalité : 'Un Peuple, un But, une Foi', montrant que la diversité linguistique ou religieuse se fond dans un idéal national unique.`,
  sections: [
    {
      title: 'I. Le concept de Nation',
      content: [
        "La Nation est une communauté humaine installée sur un territoire géographique déterminé.",
        "Elle est soudée par une mémoire et une histoire partagées, des traditions ancestrales et des valeurs morales communes.",
        "Son élément constitutif majeur est la volonté consciente et affirmée de vivre ensemble et de forger un destin solidaire.",
        "Différence essentielle : alors que l'État est une structure juridique et politique d'organisation du pouvoir, la Nation est une réalité sociologique, culturelle et affective."
      ]
    },
    {
      title: 'II. La diversité culturelle du Sénégal',
      content: [
        "Une riche diversité ethnique et linguistique : Wolofs, Halpulaars (Toucouleurs, Peuls), Sérères, Diolas, Mandingues, Soninkés, Lébous, Bassaris, Bédiks, etc., chacun apportant ses spécificités culturelles, contes, danses et savoir-faire.",
        "Une diversité confessionnelle vécue en parfaite harmonie :",
        "• Une population majoritairement musulmane s'épanouissant au sein de grandes confréries soufies pacifiques (Tidjanisme, Mouridisme, Qadiriya, Layenisme).",
        "• Une vibrante communauté chrétienne (catholique et protestante), solidaire et activement impliquée dans le développement éducatif et social du pays.",
        "• La survivance de traditions spirituelles et de valeurs ancestrales d'enracinement."
      ]
    },
    {
      title: "III. Les facteurs d'unité et de cohésion sociale",
      content: [
        "Le cousinage de plaisanterie (Kal ou Kaloné / Sanankuya) : Pacte séculaire de non-agression verbale et de fraternité entre ethnies (ex. Sérères et Toucouleurs, Diolas et Sérères) et entre patronymes, permettant de résoudre tout conflit naissant par l'autodérision et la bienveillance.",
        "Le dialogue islamo-chrétien exemplaire : Partage coutumier des plats et des réjouissances lors des fêtes religieuses (le Ngallakh de Pâques partagé avec les voisins musulmans, la viande de la Tabaski offerte aux familles chrétiennes), présence commune dans les mêmes familles et cimetières mixtes (ex. Joal-Fadiouth).",
        "Le Wolof comme langue véhiculaire nationale : Pratiquée par plus de 90% des Sénégalais, elle sert de passerelle linguistique quotidienne par-delà les appartenances régionales.",
        "L'histoire partagée : Souvenir des résistances héroïques face à la pénétration coloniale et volonté collective d'édification républicaine depuis l'indépendance de 1960."
      ]
    }
  ],
  conclusion: "La Nation sénégalaise est un modèle de paix et de stabilité en Afrique. Sa devise reflète cette réalité : 'Un Peuple, un But, une Foi', montrant que la diversité linguistique ou religieuse se fond dans un idéal national unique."
};

export const LESSON_3_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-3',
  number: 'LEÇON 3',
  title: "L'ÉTAT : DÉFINITION, ÉLÉMENTS CONSTITUTIFS ET CARACTÉRISTIQUES",
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "L'État est la structure juridique et politique suprême qui organise la vie en commun au sein d'une société. Il dispose de l'autorité légitime pour faire respecter l'ordre public sur un territoire.",
  fullText: `RÉPUBLIQUE DU SÉNÉGAL
Ministère de l'Éducation Nationale
COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (2026-2027)

LEÇON 3 : L'ÉTAT : DÉFINITION, ÉLÉMENTS CONSTITUTIFS ET CARACTÉRISTIQUES

Introduction
L'État est la structure juridique et politique suprême qui organise la vie en commun au sein d'une société. Il dispose de l'autorité légitime pour faire respecter l'ordre public sur un territoire.

I. Définition de l'État
En droit public, l'État est une institution juridique qui exerce un pouvoir souverain sur une population habitant un territoire délimité. L'État détient la personnalité juridique, ce qui lui permet de signer des traités internationaux et de posséder des biens.

II. Les trois éléments constitutifs de l'État
Pour qu'un État existe légalement au niveau international, la réunion de trois conditions est indispensable :
1. Un territoire : Un espace géographique délimité par des frontières terrestres, maritimes et aériennes reconnues. Les frontières du Sénégal englobent environ 196 722 km².
2. Une population : L'ensemble des individus (nationaux et étrangers) installés de manière permanente sur ce territoire et soumis aux lois de l'État.
3. Un gouvernement souverain : Une autorité politique organisée capable d'exercer le pouvoir sans ingérence extérieure (souveraineté externe) et de faire appliquer l'ordre à l'intérieur (souveraineté interne).

III. Les caractéristiques de l'État sénégalais
D'après ses lois fondamentales, l'État du Sénégal présente plusieurs caractères fondamentaux :
• Républicain : Le pouvoir politique n'est pas héréditaire, mais confié à des dirigeants élus.
• Démocratique : Le pouvoir émane du peuple qui choisit ses dirigeants.
• Laïc : L'État respecte toutes les croyances et ne professe aucune religion officielle. Il garantit la liberté de culte.
• Social : L'État oeuvre pour l'égalité des chances, la justice sociale et le bien-être économique de sa population.

Conclusion
L'État garantit l'existence légale de la patrie. Comprendre ses mécanismes permet aux élèves de mesurer l'importance des institutions publiques.`,
  sections: [
    {
      title: "I. Définition juridique de l'État",
      content: [
        "En droit public et constitutionnel, l'État est l'institution politique suprême détentrice de la souveraineté.",
        "Il dispose du monopole de la contrainte physique légitime pour maintenir l'ordre et la sécurité publique.",
        "L'État est doté de la personnalité juridique morale : il peut contracter des engagements, lever des impôts, ester en justice et être représenté dans le concert des nations."
      ]
    },
    {
      title: "II. Les trois éléments constitutifs de l'État",
      content: [
        "1. Un territoire géographique délimité :",
        "• Comprend le sol, le sous-sol, l'espace maritime (eaux territoriales et zone économique exclusive) et l'espace aérien.",
        "• Le Sénégal s'étend sur une superficie totale de 196 722 km², bordé par l'Océan Atlantique, la Mauritanie, le Mali, la Guinée, la Guinée-Bissau et enserrant la Gambie.",
        "2. Une population résidente permanente :",
        "• Ensemble des personnes vivant sur le territoire national, comprenant les citoyens sénégalais et les ressortissants étrangers soumis aux lois du pays.",
        "3. Un gouvernement souverain :",
        "• Souveraineté interne : capacité d'édicter des lois et de les faire appliquer sur toute l'étendue du territoire.",
        "• Souveraineté externe : indépendance totale vis-à-vis des autres États, sans ingérence extérieure."
      ],
      table: {
        headers: ['Élément Constitutif', 'Cas Concret du Sénégal', 'Importance Républicaine'],
        rows: [
          ["Le Territoire", "196 722 km² (frontières terrestres, maritimes et aériennes)", "Cadre spatial inviolable de la souveraineté."],
          ["La Population", "Plus de 18 millions d'habitants (citoyens et résidents)", "Corps social bénéficiaire des droits et soumis aux lois."],
          ["Le Gouvernement", "Pouvoir exécutif, législatif et judiciaire souverains", "Capacité d'administrer et d'exercer l'autorité légitime."]
        ]
      }
    },
    {
      title: "III. Les caractéristiques majeures de l'État sénégalais",
      content: [
        "• Un État Républicain : Le Sénégal est une République où la charge du pouvoir n'est ni héréditaire, ni dynastique, mais déléguée temporairement par voie d'élection.",
        "• Un État Démocratique : La souveraineté réside exclusivement dans le peuple, qui l'exerce par ses représentants élus ou par référendum.",
        "• Un État Laïc : Neutralité rigoureuse de l'État envers toutes les religions ; absence de culte d'État ; garantie totale de la liberté de conscience et de religion.",
        "• Un État Social : L'action étatique vise la réduction des inégalités, la protection des plus vulnérables, l'accès universel aux soins et à l'éducation."
      ]
    }
  ],
  conclusion: "L'État garantit l'existence légale de la patrie. Comprendre ses mécanismes permet aux élèves de mesurer l'importance des institutions publiques."
};

export const LESSON_4_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LA CONSTITUTION : DÉFINITION, RÔLE ET IMPORTANCE',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Toute société civilisée requiert des règles pour fonctionner. Au sommet de toutes les lois se trouve un document sacré : la Constitution. Rien ne peut y déroger.",
  fullText: `RÉPUBLIQUE DU SÉNÉGAL
Ministère de l'Éducation Nationale
COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (2026-2027)

LEÇON 4 : LA CONSTITUTION : DÉFINITION, RÔLE ET IMPORTANCE

Introduction
Toute société civilisée requiert des règles pour fonctionner. Au sommet de toutes les lois se trouve un document sacré : la Constitution. Rien ne peut y déroger.

I. Qu'est-ce qu'une Constitution ?
La Constitution est la loi suprême ou la 'Loi fondamentale' d'un État souverain. Elle fixe l'organisation générale des institutions, définit la nature du régime politique, attribue les compétences aux différents pouvoirs et énumère les droits fondamentaux des citoyens.

II. L'historique des constitutions au Sénégal
Depuis son accession à l'indépendance en 1960, le Sénégal a rédigé et voté plusieurs Constitutions majeures pour s'adapter aux réalités politiques et renforcer sa démocratie :
• La Constitution de 1960, modifiée en 1963 instituant un régime présidentiel fort après la crise du pouvoir exécutif.
• La Constitution de 1970 réintroduisant le poste de Premier ministre.
• La Constitution de 2001 adoptée par référendum après la première alternance politique.
• La Constitution de 2016 modifiant la durée du mandat présidentiel à 5 ans.

III. Le rôle et l'importance de la Constitution
La Constitution remplit des fonctions d'une importance capitale :
• Elle encadre le pouvoir politique pour éviter la dictature et l'arbitraire.
• Elle organise la séparation stricte des pouvoirs (exécutif, législatif, judiciaire).
• Elle protège les libertés individuelles et collectives (liberté de la presse, liberté de réunion, droit syndical).

Conclusion
Le respect scrupuleux de la Constitution est le ciment de l'État de droit. Tout citoyen, du président au simple habitant, est soumis à sa stricte autorité.`,
  sections: [
    {
      title: "I. Qu'est-ce qu'une Constitution ?",
      content: [
        "La Constitution se place au sommet de la hiérarchie des normes (la pyramide de Kelsen) : aucune loi, aucun décret, aucun arrêté ne peut être contraire à son texte.",
        "Elle constitue le contrat social suprême liant l'ensemble des citoyens et des gouvernants.",
        "Elle détermine le mode d'accession au pouvoir, la durée des mandats politiques et les droits inaliénables de la personne humaine."
      ]
    },
    {
      title: "II. Les grandes étapes constitutionnelles du Sénégal",
      content: [
        "1960 / 1963 : Constitution initiale de l'indépendance (régime parlementaire bicéphale Senghor-Mamadou Dia), révisée en 1963 vers un régime présidentiel concentré à la suite des événements de décembre 1962.",
        "1970 : Révision réintroduisant la fonction de Premier ministre (nomination d'Abdou Diouf) pour assister le Président.",
        "2001 : Adoption par référendum populaire de la nouvelle Constitution du 22 janvier 2001, consacrant la première alternance démocratique et renforçant les libertés publiques.",
        "2016 : Révision constitutionnelle majeure par référendum réduisant le mandat présidentiel de 7 à 5 ans et créant de nouveaux droits pour les citoyens."
      ],
      table: {
        headers: ['Année', 'Événement Constitutionnel', 'Impact Institutionnel'],
        rows: [
          ["1960 - 1963", "Constitution de l'Indépendance puis régime présidentiel", "Stabilisation des institutions au lendemain de la décolonisation."],
          ["1970", "Réintroduction du poste de Premier ministre", "Déconcentration du pouvoir exécutif au profit d'un chef de gouvernement."],
          ["2001", "Constitution de la première alternance (référendum)", "Affirmation solennelle des libertés et de la démocratie participative."],
          ["2016", "Réforme référendaire des 15 points", "Passage du mandat présidentiel à 5 ans et constitutionnalisation de nouveaux droits."]
        ]
      }
    },
    {
      title: "III. Le rôle et l'importance de la Constitution",
      content: [
        "Garde-fou contre l'arbitraire : elle fixe les limites infranchissables de l'autorité des gouvernants.",
        "Garantie de la séparation des pouvoirs : équilibre institutionnel entre l'Exécutif (Président et Gouvernement), le Législatif (Assemblée Nationale) et le Judiciaire (Tribunaux et Cours).",
        "Sanctuaire des libertés républicaines : liberté d'expression, liberté de manifestation pacifique, égalité hommes-femmes, droit à un procès équitable."
      ]
    }
  ],
  conclusion: "Le respect scrupuleux de la Constitution est le ciment de l'État de droit. Tout citoyen, du président au simple habitant, est soumis à sa stricte autorité."
};

export const LESSON_5_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LES SYMBOLES DE LA RÉPUBLIQUE DU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Les symboles de la République permettent de matérialiser l'existence de l'État, d'unir la population sous des signes communs et de représenter le pays sur la scène internationale.",
  fullText: `RÉPUBLIQUE DU SÉNÉGAL
Ministère de l'Éducation Nationale
COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (2026-2027)

LEÇON 5 : LES SYMBOLES DE LA RÉPUBLIQUE DU SÉNÉGAL

Introduction
Les symboles de la République permettent de matérialiser l'existence de l'État, d'unir la population sous des signes communs et de représenter le pays sur la scène internationale.

I. Le Drapeau National
Le drapeau du Sénégal est composé de trois bandes verticales, égales et de couleurs différentes :
• Le Vert : Première couleur près de la hampe. Pour les musulmans, c'est la couleur du prophète ; pour les chrétiens, le symbole de l'espérance ; pour les animistes, la couleur de la forêt et de la fécondité de la terre.
• Le Jaune : Couleur de l'or, signe de richesse naturelle, de rayonnement culturel et le fruit du travail humain.
• Le Rouge : Couleur du sang, rappelant le sacrifice héroïque des ancêtres et des résistants pour l'indépendance.
• L'Étoile verte : Située au centre de la bande jaune, elle possède cinq branches symbolisant l'ouverture du Sénégal sur les cinq continents de la planète.

II. L'Hymne National
Intitulé 'Pincez tous vos coras, frappez vos balafons', il a été écrit par le premier président, le poète Léopold Sédar Senghor, et la musique a été composée par Herbert Pepper. Il exhorte les fils du Sénégal à l'unité, au travail et au courage pour défendre la patrie.

III. La Devise et les Sceaux de l'État
• La Devise : 'Un Peuple, un But, une Foi'. Elle traduit la fusion des ethnies dans un destin solidaire.
• Le Sceau de l'État : Utilisé pour authentifier les documents officiels du gouvernement. Il comporte deux faces : l'une illustrée par un Lion passant (symbole de force et de courage), l'autre affichant un Baobab (symbole d'enracinement et de longévité), flanqué de la médaille de l'Ordre National du Lion.

Conclusion
Les symboles républicains incarnent la dignité nationale. Tout citoyen leur doit un profond respect, notamment lors de la cérémonie officielle de levée des couleurs.`,
  sections: [
    {
      title: 'I. Le Drapeau National',
      content: [
        "Le drapeau de la République du Sénégal se compose de trois bandes verticales d'égales dimensions aux couleurs vert, jaune (or) et rouge, frappé d'une étoile verte à cinq branches au centre.",
        "• Le Vert (près de la hampe) : Pour les fidèles musulmans, c'est la couleur emblématique du Prophète ; pour les chrétiens, l'espérance théologale ; pour les animistes et naturalistes, la luxuriante fertilité de la terre nourricière.",
        "• Le Jaune : Évoque la richesse du sol et des ressources minières, le rayonnement culturel et la valeur suprême du travail des citoyens.",
        "• Le Rouge : Rappelle le sang versé par les héros, résistants et martyrs pour la libération, la souveraineté et la dignité de la patrie.",
        "• L'Étoile verte à cinq branches : Incarnation de l'élévation morale, de la souveraineté et de l'ouverture d'esprit du Sénégal vers les cinq continents du monde."
      ],
      table: {
        headers: ['Composante du Drapeau', 'Signification Symbolique', 'Règle Civique'],
        rows: [
          ["Bande Verte", "Espérance, fertilité de la terre, spiritualité", "Placée obligatoirement le long de la hampe."],
          ["Bande Jaune (Or)", "Richesse issue du labeur, rayonnement intellectuel", "Bande médiane portant l'étoile républicaine."],
          ["Bande Rouge", "Sang des martyrs, sacrifice pour la liberté", "Flotte à l'extrémité extérieure du drapeau."],
          ["Étoile Verte à 5 branches", "Ouverture sur les 5 continents, idéaux élevés", "Centrée avec précision au milieu de la bande jaune."]
        ]
      }
    },
    {
      title: "II. L'Hymne National du Sénégal",
      content: [
        "Titre officiel : « Pincez tous vos coras, frappez vos balafons » (Le Lion rouge a rugi).",
        "Paroles composées par Léopold Sédar Senghor, poète-président et membre de l'Académie française.",
        "Musique orchestrée par le compositeur et ethnomusicologue Herbert Pepper.",
        "Portée civique : Cet hymne galvanise le patriotisme, appelle à la concorde fraternelle, glorifie le travail acharné et proclame l'indéfectible fidélité à la nation."
      ]
    },
    {
      title: "III. La Devise, les Armoiries et le Sceau de l'État",
      content: [
        "La Devise nationale : « Un Peuple, Un But, Une Foi » :",
        "• Un Peuple : Déclaration d'unité transcendant toutes les distinctions ethniques ou linguistiques.",
        "• Un But : Volonté commune de progrès économique, social et d'émancipation collective.",
        "• Une Foi : Confiance inébranlable en la grandeur et l'avenir de la patrie.",
        "Le Sceau de l'État (gardé par le Ministre de la Justice, Garde des Sceaux) :",
        "• Première face : Le Lion passant, symbole de la force sereine, du courage et de la vaillance.",
        "• Deuxième face : Le Baobab séculaire, emblème de la solidité, de l'enracinement ancestral et de l'utilité publique, orné de la médaille de l'Ordre National du Lion."
      ]
    }
  ],
  conclusion: "Les symboles républicains incarnent la dignité nationale. Tout citoyen leur doit un profond respect, notamment lors de la cérémonie officielle de levée des couleurs."
};

export const LESSON_6_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LA DÉMOCRATIE : PRINCIPES FONDAMENTAUX ET EXPRESSIONS',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Le Sénégal a choisi la démocratie comme système de gestion politique. Ce système politique confie la souveraineté au peuple souverain.",
  fullText: `RÉPUBLIQUE DU SÉNÉGAL
Ministère de l'Éducation Nationale
COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (2026-2027)

LEÇON 6 : LA DÉMOCRATIE : PRINCIPES FONDAMENTAUX ET EXPRESSIONS

Introduction
Le Sénégal a choisi la démocratie comme système de gestion politique. Ce système politique confie la souveraineté au peuple souverain.

I. Qu'est-ce que la démocratie ?
Inspiré du grec ancien (Demos : le peuple, Kratos : le pouvoir), la démocratie est, selon la célèbre phrase d'Abraham Lincoln : 'le gouvernement du peuple, par le peuple et pour le peuple'. Elle suppose que les dirigeants agissent pour le bien-être général en exécutant la volonté majoritaire.

II. Les piliers et principes de la démocratie
Une véritable démocratie repose obligatoirement sur les conditions suivantes :
• La souveraineté populaire : Le peuple choisit de manière indépendante ses représentants lors de votes transparents.
• La séparation des pouvoirs : Le pouvoir exécutif (Président) applique les lois, le pouvoir législatif (Assemblée) écrit les lois et le pouvoir judiciaire (Juges) tranche les litiges politiques ou civils.
• Le respect des libertés : Garantie absolue des libertés fondamentales (d'opinion, de réunion, d'association).
• Le principe de la majorité : La volonté du plus grand nombre l'emporte, tout en assurant scrupuleusement la protection des droits de la minorité.

III. Le multipartisme au Sénégal
L'expression directe de la démocratie sénégalaise est le multipartisme, c'est-à-dire l'autorisation légale d'avoir plusieurs partis politiques concurrents. Après une période de parti unique de fait sous Senghor, le président Léopold Sédar Senghor a instauré le quadripartisme limité en 1976. C'est en 1981, sous Abdou Diouf, que le multipartisme intégral a été décrété, ouvrant la voie à une riche arène politique.

Conclusion
La démocratie est un processus dynamique en constante amélioration. Elle exige la maturité politique et la tolérance réciproque des différents acteurs.`,
  sections: [
    {
      title: "I. Qu'est-ce que la démocratie ?",
      content: [
        "Origine étymologique : Du grec ancien « Demos » (le peuple) et « Kratos » (le pouvoir, l'autorité).",
        "Définition universelle d'Abraham Lincoln : « Le gouvernement du peuple, par le peuple et pour le peuple ».",
        "Signification républicaine : Les gouvernants ne tirent leur légitimité d'aucune force arbitraire, mais de la confiance librement accordée par les citoyens lors d'élections régulières."
      ]
    },
    {
      title: 'II. Les piliers et principes cardinaux de la démocratie',
      content: [
        "1. La souveraineté populaire : Le peuple est la seule source légitime du pouvoir politique, s'exprimant à travers des suffrages transparents et incontestables.",
        "2. La séparation des trois pouvoirs constitutionnels :",
        "• Le Pouvoir Exécutif (Président de la République et Gouvernement) : Exécute les lois et administre les affaires publiques.",
        "• Le Pouvoir Législatif (Assemblée Nationale) : Délibère, vote la loi et contrôle l'action du gouvernement.",
        "• Le Pouvoir Judiciaire (Juges et Tribunaux) : Dit le droit et veille à la sanction impartiale des infractions.",
        "3. Le respect inconditionnel des libertés publiques : Liberté d'opinion, liberté syndicale, liberté de presse et de manifestation pacifique.",
        "4. Le principe majoritaire et protection des minorités : Si la décision politique émane de la majorité électorale, les droits civils et politiques des partis d'opposition et des minorités demeurent strictement garantis."
      ]
    },
    {
      title: "III. L'évolution du multipartisme au Sénégal",
      content: [
        "L'époque du parti unique de fait (1966-1974) : Après l'indépendance, l'Union Progressiste Sénégalaise (UPS) domine la vie politique.",
        "L'ouverture du quadripartisme limité (1976) : Sous la présidence de Léopold Sédar Senghor, la loi autorise quatre courants idéologiques stricts (socialiste, libéral/démocrate avec le PDS, marxiste-léniniste avec le PAI, et conservateur avec le MRS).",
        "L'instauration du multipartisme intégral (1981) : Dès son accession au pouvoir en 1981, le président Abdou Diouf supprime les restrictions idéologiques, consacrant la liberté totale de création de partis politiques conformément à la Constitution.",
        "Les alternances démocratiques pacifiques : 2000, 2012 et 2024 consacrent la solidité exemplaire de la démocratie sénégalaise sur le continent africain."
      ]
    }
  ],
  conclusion: "La démocratie est un processus dynamique en constante amélioration. Elle exige la maturité politique et la tolérance réciproque des différents acteurs."
};

export const LESSON_7_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LE CITOYEN DANS LA VIE POLITIQUE : LE VOTE ET L’ENGAGEMENT',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "La démocratie ne peut fonctionner correctement sans une participation active et dynamique de ses citoyens. Être citoyen ne s'arrête pas à détenir des papiers d'identité nationaux ; cela requiert des actes concrets au service de la nation.",
  fullText: `RÉPUBLIQUE DU SÉNÉGAL
Ministère de l'Éducation Nationale
COURS COMPLET D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME (2026-2027)

LEÇON 7 : LE CITOYEN DANS LA VIE POLITIQUE : LE VOTE ET L’ENGAGEMENT

Introduction
La démocratie ne peut fonctionner correctement sans une participation active et dynamique de ses citoyens. Être citoyen ne s'arrête pas à détenir des papiers d'identité nationaux ; cela requiert des actes concrets au service de la nation.

I. Le Droit de vote, expression majeure de la citoyenneté
Le vote est le moyen légal privilégié par lequel le citoyen choisit ses dirigeants (Président, députés, maires). Pour voter au Sénégal, il faut être de nationalité sénégalaise, être âgé de 18 ans au moins, jouir de ses droits civils et politiques et être inscrit sur les listes électorales officielles.
Le suffrage sénégalais possède trois qualités sacrées :
• Universel : Ouvert à tous sans distinction d'ethnie, de religion, de fortune ou de sexe.
• Égal : Chaque citoyen ne dispose que d'une seule voix ('un homme, une voix').
• Secret : Le choix s'effectue obligatoirement à l'abri des regards dans l'isoloir pour éviter les pressions sociales ou physiques.

II. Les formes d'engagement citoyen
Au-delà des périodes électorales, le citoyen dispose de multiples leviers pour faire entendre sa voix ou être utile :
• L'engagement politique : Adhérer à un parti politique officiel, militer activement et se présenter à des fonctions électives (éligibilité).
• L'engagement associatif : S'investir dans les associations de quartiers, de jeunes (ASC) ou des organisations de protection environnementale.
• Le contrôle citoyen : Veiller à la bonne gestion des deniers publics et interpeller poliment les décideurs face aux manquements communautaires.

III. Le civisme fiscal et communautaire
Un citoyen modèle contribue activement au financement des services publics en s'acquittant honnêtement de ses impôts et taxes locaux. Il protège les biens de la collectivité (écoles, hôpitaux, lampadaires) et participe aux activités collectives d'entretien et de salubrité publique (ex. les journées de nettoiement appelées 'Set Setal').

Conclusion
Le développement économique du Sénégal repose avant tout sur l'esprit civique de sa jeunesse. S'engager, c'est assumer sa part de souveraineté pour construire un avenir prospère et uni.`,
  sections: [
    {
      title: "I. Le Droit de vote, expression majeure de la citoyenneté",
      content: [
        "Le vote est le pilier fondamental de la démocratie représentative.",
        "Conditions légales pour être électeur au Sénégal (Code électoral) :",
        "• Posséder la nationalité sénégalaise.",
        "• Avoir atteint l'âge de 18 ans accomplis au jour du scrutin.",
        "• Jouir de la plénitude de ses droits civils et politiques.",
        "• Être régulièrement inscrit sur les listes électorales et titulaire de sa carte d'électeur biométrique.",
        "Les trois caractères cardinaux du suffrage républicain :",
        "• Universel : Tous les citoyens en âge de voter participent, sans exclusive de race, de religion, de sexe ou de niveau de revenu.",
        "• Égal : Chaque électeur a exactement le même poids politique (« un homme, une voix »).",
        "• Secret : Le passage par l'isoloir est obligatoire afin de garantir la liberté absolue de conscience face à toute contrainte ou intimidation."
      ],
      table: {
        headers: ['Caractère du Suffrage', 'Définition Juridique', 'Garantie Républicaine'],
        rows: [
          ["Suffrage Universel", "Accessible à tout citoyen sénégalais majeur sans discrimination.", "Inclusion démocratique et égalité républicaine."],
          ["Suffrage Égal", "Une seule voix par votant, sans aucun privilège de rang.", "Égalité stricte de chaque citoyen devant l'urne."],
          ["Suffrage Secret", "Obligation de voter dans l'isoloir à l'abri des regards.", "Protection de la liberté de choix et intégrité du vote."]
        ]
      }
    },
    {
      title: "II. Les formes diversifiées d'engagement citoyen",
      content: [
        "• L'engagement politique : Adhésion libre à un parti politique, participation aux débats idéologiques, sensibilisation des électeurs et exercice du droit d'éligibilité (candidature aux élections locales ou législatives).",
        "• L'engagement associatif et communautaire : Implication dynamique au sein des Associations Sportives et Culturelles (ASC), des clubs scolaires d'environnement et de droits de l'homme, ou des groupements d'entraide féminine.",
        "• Le contrôle citoyen et la veille républicaine : Suivi citoyen de la gestion des deniers publics, interpellation démocratique des élus locaux et participation aux budgets participatifs communaux."
      ]
    },
    {
      title: "III. Le civisme fiscal et communautaire",
      content: [
        "• Le civisme fiscal : Payer ses impôts et taxes communales avec honnêteté permet de financer les infrastructures de santé, les écoles publiques, les routes et la sécurité de tous.",
        "• La sauvegarde du patrimoine collectif : Respecter et protéger les biens publics (bâtiments scolaires, mobilier de classe, feux de signalisation, centres de santé) contre le vandalisme et la négligence.",
        "• L'action communautaire de salubrité : Participer activement aux opérations d'assainissement et de propreté collective « Set Setal », gage de santé publique et de fierté nationale."
      ]
    }
  ],
  conclusion: "Le développement économique du Sénégal repose avant tout sur l'esprit civique de sa jeunesse. S'engager, c'est assumer sa part de souveraineté pour construire un avenir prospère et uni."
};

export const COURSES_EDUCATION_CIVIQUE_4EME: ContentData[] = [
  {
    id: 'civique-4eme-lecon-1',
    title: 'LEÇON 1 : LES CONCEPTS DE BASE (ÉDUCATION CIVIQUE, MORALE ET CITOYENNETÉ)',
    type: 'cours',
    badge: 'Partie 1 • Citoyenneté & Nation',
    description: "Définitions fondamentales de l'éducation civique, de la morale et de la citoyenneté ; relations entre l'homme, le citoyen et la société ; droits et devoirs du jeune sénégalais.",
    lessonData: LESSON_1_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-2',
    title: 'LEÇON 2 : LA NATION SÉNÉGALAISE : FONDEMENTS, UNITÉ ET DIVERSITÉ',
    type: 'cours',
    badge: 'Partie 1 • Citoyenneté & Nation',
    description: 'Le concept sociologique de Nation, la diversité ethnique et religieuse du Sénégal, et les puissants facteurs de cohésion sociale (cousinage de plaisanterie, dialogue islamo-chrétien, Wolof).',
    lessonData: LESSON_2_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-3',
    title: "LEÇON 3 : L'ÉTAT : DÉFINITION, ÉLÉMENTS CONSTITUTIFS ET CARACTÉRISTIQUES",
    type: 'cours',
    badge: "Partie 2 • L'État & les Institutions",
    description: "Définition juridique de l'État souverain, les 3 éléments constitutifs indispensables (territoire de 196 722 km², population, gouvernement souverain) et les 4 caractéristiques sénégalaises.",
    lessonData: LESSON_3_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-4',
    title: 'LEÇON 4 : LA CONSTITUTION : DÉFINITION, RÔLE ET IMPORTANCE',
    type: 'cours',
    badge: "Partie 2 • L'État & les Institutions",
    description: "La loi fondamentale suprême d'un État souverain, l'historique des constitutions au Sénégal (1960/1963, 1970, 2001, 2016) et la protection contre l'arbitraire.",
    lessonData: LESSON_4_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-5',
    title: 'LEÇON 5 : LES SYMBOLES DE LA RÉPUBLIQUE DU SÉNÉGAL',
    type: 'cours',
    badge: "Partie 2 • L'État & les Institutions",
    description: "Le drapeau tricolore et l'étoile verte aux 5 continents, l'hymne national de Léopold Sédar Senghor et Herbert Pepper, la devise « Un Peuple, Un But, Une Foi » et les sceaux officiels.",
    lessonData: LESSON_5_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-6',
    title: 'LEÇON 6 : LA DÉMOCRATIE : PRINCIPES FONDAMENTAUX ET EXPRESSIONS',
    type: 'cours',
    badge: 'Partie 3 • Démocratie & Vie Politique',
    description: "Définition étymologique et républicaine de la démocratie, les 4 piliers obligatoires (séparation des pouvoirs, souveraineté) et l'évolution historique du multipartisme au Sénégal.",
    lessonData: LESSON_6_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-7',
    title: 'LEÇON 7 : LE CITOYEN DANS LA VIE POLITIQUE : LE VOTE ET L’ENGAGEMENT',
    type: 'cours',
    badge: 'Partie 3 • Démocratie & Vie Politique',
    description: 'Le droit de vote et les 3 qualités du suffrage (universel, égal, secret), les formes d’engagement associatif et politique, ainsi que le civisme fiscal et communautaire (Set Setal).',
    lessonData: LESSON_7_CIVIQUE_4EME
  }
];

export const CIVIQUE_4EME_PARTS = [
  { id: 'all', label: 'Toutes les leçons (4ème)', count: 7 },
  { id: 'part-1', label: '1ère Partie : Citoyenneté & Nation', count: 2 },
  { id: 'part-2', label: "2ème Partie : L'État & les Institutions", count: 3 },
  { id: 'part-3', label: '3ème Partie : Démocratie & Vote', count: 2 }
];
