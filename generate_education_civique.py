# -*- coding: utf-8 -*-
"""Generates courses_4eme_education_civique.ts and courses_3eme_education_civique.ts"""

civique_4eme_code = '''import { ContentData, LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
// MODÈLE SÉNÉGALAIS CONFORME AU PROGRAMME DU MINISTÈRE DE L'ÉDUCATION NATIONALE
// 8 Leçons intégrales et détaillées avec introductions, développements et conclusions
// =========================================================================

export const LESSON_1_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LES DROITS DE L\'HOMME ET LES LIBERTÉS FONDAMENTALES',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Les droits de l'Homme représentent un ensemble de principes inaliénables et universels inhérents à chaque être humain, sans distinction de race, de sexe, de nationalité ou de religion. Reconnus et consacrés par des instruments juridiques mondiaux, africains et nationaux, ils constituent le socle indispensable d'une société juste et paisible.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 1 : LES DROITS DE L'HOMME ET LES LIBERTÉS FONDAMENTALES

I. LES ORIGINES ET LES TEXTES FONDATEURS DES DROITS DE L'HOMME
La conquête des droits de l'Homme s'est forgée au fil des siècles à travers les luttes des peuples contre la tyrannie et l'oppression :
- La Charte de Kouroukan Fouga (1236) : proclamée par Soundiata Keïta dans l'Empire du Mali, elle constitue l'une des plus anciennes déclarations des droits humains au monde, protégeant la vie, la dignité des femmes, l'interdiction de maltraiter les prisonniers et la justice sociale.
- La Déclaration des Droits de l'Homme et du Citoyen (1789).
- La Déclaration Universelle des Droits de l'Homme (DUDH) de 1948 : adoptée par l'ONU au lendemain des horreurs de la Seconde Guerre mondiale, proclamant dans son article 1er : "Tous les êtres humains naissent libres et égaux en dignité et en droits".
- La Charte Africaine des Droits de l'Homme et des Peuples (1981) : adoptée à Banjul sous l'égide de l'OUA/UA, qui allie droits individuels et droits collectifs des peuples au développement et à la paix.

II. LA TYPOLOGIE DES LIBERTÉS FONDAMENTALES
On distingue trois grandes catégories de droits et libertés :
1. Les libertés civiles et politiques (droits de première génération) : droit à la vie, liberté d'opinion et d'expression, liberté de culte, liberté de réunion pacifique, droit de vote et d'éligibilité.
2. Les droits économiques, sociaux et culturels (droits de deuxième génération) : droit à l'éducation gratuite, droit au travail et à un salaire équitable, droit à la santé, droit au logement et à la culture.
3. Les droits de solidarité (droits de troisième génération) : droit à un environnement sain, droit au développement économique et droit à la paix.

III. LES INSTRUMENTS DE PROTECTION AU SÉNÉGAL
La Constitution du Sénégal de 2001 consacre solennellement dans son Titre II les droits et libertés fondamentaux. Pour veiller à leur respect effectif, l'État a instauré des organes dédiés comme le Comité Sénégalais des Droits de l'Homme (CSDH) et le Médiateur de la République, épaulés par des ONG vigilantes (RADDHO, Amnesty Sénégal, Ligue Sénégalaise des Droits de l'Homme).`,
  sections: [
    {
      title: 'I. Les Textes Fondateurs Historiques et la Charte du Mandé',
      content: [
        'De la Charte de Kouroukan Fouga (1236) à la Déclaration Universelle de 1948, l\'humanité a affirmé l\'intangibilité de la dignité humaine.',
        'La Charte Africaine de Banjul (1981) enrichit cette vision universelle par les droits collectifs des peuples et les devoirs de solidarité.'
      ]
    },
    {
      title: 'II. Classification des Trois Générations de Droits et Libertés',
      content: [
        'Première génération : libertés civiles et politiques (liberté d\'expression, vote, intégrité physique).',
        'Deuxième génération : droits socio-économiques (santé, travail, éducation garantie).',
        'Troisième génération : droits de solidarité universelle (environnement durable, paix).'
      ]
    },
    {
      title: 'III. Les Mécanismes de Protection des Droits au Sénégal',
      content: [
        'Le Conseil Constitutionnel, la justice et le Comité Sénégalais des Droits de l\'Homme (CSDH) sanctionnent les atteintes aux libertés.',
        'La société civile sénégalaise (RADDHO, Amnesty International Sénégal) exerce une veille citoyenne permanente.'
      ]
    }
  ],
  conclusion: "Les droits de l'Homme ne sont jamais définitivement acquis : ils exigent une vigilance quotidienne et un engagement résolu de chaque citoyen pour faire reculer l'injustice et la discrimination."
};

export const LESSON_2_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LA DÉMOCRATIE ET L\'ÉTAT DE DROIT AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Le mot démocratie vient du grec « demos » (le peuple) et « kratos » (le pouvoir) : c'est le gouvernement du peuple, par le peuple et pour le peuple. Au Sénégal, la démocratie est une tradition enracinée depuis les Quatre Communes (Saint-Louis, Gorée, Rufisque, Dakar) et perpétuée à travers des alternances pacifiques exemplaires qui font la fierté de notre nation.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 2 : LA DÉMOCRATIE ET L'ÉTAT DE DROIT AU SÉNÉGAL

I. LES PRINCIPES FONDAMENTAUX D'UN RÉGIME DÉMOCRATIQUE
Une véritable démocratie repose sur plusieurs piliers incontournables :
1. La souveraineté populaire : le pouvoir appartient au peuple qui l'exerce directement par référendum ou indirectement par l'intermédiaire de ses représentants élus au suffrage universel.
2. La séparation des trois pouvoirs : théor целеée par Montesquieu, elle interdit la concentration de l'autorité entre les mains d'un seul homme ou d'un seul corps (l'Exécutif gouverne, le Législatif vote les lois, le Judiciaire sanctionne en toute indépendance).
3. Le pluralisme politique et la liberté de la presse : reconnaissance de l'opposition, existence d'une presse libre et critique, débats d'idées sans censure.
4. L'alternance démocratique : possibilité constitutionnelle pour l'opposition d'accéder au pouvoir suprême par des élections libres, régulières et transparentes.

II. LA NOTION D'ÉTAT DE DROIT
L'État de droit est un système institutionnel dans lequel la puissance publique est soumise au droit. Il se caractérise par :
- La primauté de la loi : nul n'est au-dessus de la loi, du citoyen ordinaire au Président de la République.
- La hiérarchie des normes juridiques (la Constitution prévaut sur les traités, qui prévalent sur les lois, qui prévalent sur les décrets et arrêtés).
- L'égalité de tous devant la justice et la garantie d'un procès équitable avec présomption d'innocence.

III. L'EXPÉRIENCE DÉMOCRATIQUE SÉNÉGALAISE
Le Sénégal est l'un des rares pays africains à n'avoir jamais connu de coup d'État militaire depuis son accession à l'indépendance en 1960.
Les grandes étapes de l'enracinement démocratique :
- Le rétablissement du multipartisme intégral sous Léopold Sédar Senghor et Abdou Diouf (1981).
- Les alternances politiques pacifiques historiques de 2000 (Abdou Diouf passant le pouvoir à Abdoulaye Wade), de 2012 (Abdoulaye Wade passant le pouvoir à Macky Sall) et de 2024 (Macky Sall passant le pouvoir à Bassirou Diomaye Faye). Ces transitions pacifiques témoignent de la maturité civique exceptionnelle du peuple sénégalais.`,
  sections: [
    {
      title: 'I. Les Piliers Théoriques de la Démocratie',
      content: [
        'Souveraineté populaire, séparation stricte des pouvoirs et pluralisme politique définissent l\'idéal démocratique.',
        'La minorité et l\'opposition jouissent de droits protégés face à la majorité gouvernementale.'
      ]
    },
    {
      title: 'II. L\'État de Droit et la Soumission de l\'État à la Loi',
      content: [
        'L\'État de droit impose la hiérarchie des normes juridiques et le contrôle de constitutionnalité.',
        'L\'égalité de tous les justiciables devant les tribunaux garantit la protection contre l\'arbitraire.'
      ]
    },
    {
      title: 'III. Le Modèle Sénégalais des Alternances Pacifiques',
      content: [
        'Le Sénégal s\'illustre en Afrique par sa stabilité républicaine sans coup d\'État.',
        'Les alternances pacifiques de 2000, 2012 et 2024 consacrent la solidité des institutions démocratiques sénégalaises.'
      ]
    }
  ],
  conclusion: "La démocratie sénégalaise est un bien commun précieux. Elle exige de chaque citoyen un respect constant des règles du jeu républicain, le rejet de toute violence verbale ou physique et l'amour de la patrie."
};

export const LESSON_3_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-3',
  number: 'LEÇON 3',
  title: 'LES PARTIS POLITIQUES ET LA SOCIÉTÉ CIVILE AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Dans une république démocratique, l'expression des opinions et la vitalité du débat public sont portées par deux acteurs fondamentaux : les partis politiques, qui visent la conquête et l'exercice du pouvoir d'État, et les organisations de la société civile, qui agissent comme des sentinelles désintéressées du bien public et des libertés démocratiques.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 3 : LES PARTIS POLITIQUES ET LA SOCIÉTÉ CIVILE AU SÉNÉGAL

I. LES PARTIS POLITIQUES : RÔLES ET FONCTIONS DANS LA RÉPUBLIQUE
1. Définition :
Un parti politique est une association de citoyens réunis autour d'une même idéologie (libéralisme, socialisme, social-démocratie, écologie, panafricanisme) et d'un projet de société partagé, dont l'objectif légitime est de conquérir le pouvoir démocratique par le suffrage universel et de gouverner.
2. Fonctions fondamentales des partis politiques :
- Concurrence électorale et animation de la vie politique (Article 4 de la Constitution du Sénégal).
- Encadrement civique et formation politique des militants.
- Élaboration de projets économiques et sociaux alternatifs.
- Sélection des candidats aux fonctions électives (députés, maires, Président de la République).
3. Obligations légales des partis au Sénégal :
- Respect de la Constitution, de la souveraineté nationale et de l'intégrité du territoire.
- Interdiction stricte de créer des partis politiques à caractère ethnique, religieux, régionaliste ou confrérique afin de préserver l'unité nationale sacrée.

II. LA SOCIÉTÉ CIVILE : LES SENTINELLES DU CITOYEN
1. Définition et composantes :
La société civile regroupe l'ensemble des organisations indépendantes du pouvoir d'État et des partis politiques qui œuvrent bénévolement pour l'intérêt général. Elle comprend :
- Les organisations de défense des droits de l'Homme et de la transparence (Forum Civil / Transparency International, RADDHO, Amnesty International Sénégal).
- Les syndicats de travailleurs.
- Les mouvements citoyens de jeunesse (ex : le mouvement "Y\'en a marre").
- Les associations consuméristes (défense des consommateurs comme l'ASCOSEN).
- Les collectifs de femmes et associations de quartier.
2. Rôle d'alerte et de contre-pouvoir constructif :
La société civile ne cherche pas à conquérir le pouvoir politique. Son rôle est de surveiller la gouvernance, dénoncer les dérives financières ou autoritaires, observer la régularité des élections et servir de médiateur lors des crises sociopolitiques nationales.`,
  sections: [
    {
      title: 'I. Rôle des Partis Politiques dans l\'Animation Républicaine',
      content: [
        'Les partis politiques concourent à l\'expression du suffrage et à la formation civique des citoyens.',
        'La loi sénégalaise proscrit formellement les partis à base ethnique ou confessionnelle pour garantir l\'unité nationale.'
      ]
    },
    {
      title: 'II. La Société Civile : Contre-pouvoir et Sentinelle Citoyenne',
      content: [
        'La société civile regroupe ONG, syndicats et mouvements citoyens engagés pour la bonne gouvernance sans briguer le pouvoir.',
        'Elle veille sur la transparence électorale, lutte contre la corruption et facilite la médiation sociale.'
      ]
    }
  ],
  conclusion: "Partis politiques et organisations de la société civile sont les deux poumons indispensables de la démocratie sénégalaise, assurant à la fois le renouvellement pacifique des gouvernants et la vigilance citoyenne permanente."
};

export const LESSON_4_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LE PROCESSUS ÉLECTORAL ET LE DROIT DE VOTE AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Le vote est l'acte républicain par excellence à travers lequel chaque citoyen exerce sa part de souveraineté nationale pour choisir librement ses dirigeants. Au Sénégal, l'organisation des élections obéit à un Code Électoral rigoureux encadré par des structures administratives et indépendantes afin de garantir la sincérité, la transparence et la régularité des scrutins.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 4 : LE PROCESSUS ÉLECTORAL ET LE DROIT DE VOTE AU SÉNÉGAL

I. LE DROIT DE VOTE : UN DROIT FONDAMENTAL ET UN DEVOIR CIVIQUE
1. Les conditions pour être électeur au Sénégal :
- Être de nationalité sénégalaise.
- Être âgé de 18 ans révolus au jour du scrutin.
- Jouir de ses droits civils et politiques (ne pas avoir été condamné à une peine d'inéligibilité).
- Être régulièrement inscrit sur les listes électorales et posséder la Carte Nationale d'Identité biométrique CEDEAO faisant office de carte d'électeur.
2. Les caractères du suffrage :
Le suffrage est universel (ouvert à tous sans distinction de fortune ou de sexe), égal (un citoyen = une voix) et secret (garanti par le passage obligatoire dans l'isoloir).

II. LES ACTEURS DU PROCESSUS ÉLECTORAL
1. La DGE (Direction Générale des Élections) : relevant du Ministère de l'Intérieur, elle s'occupe de l'organisation matérielle, de l'impression des bulletins et de la logistique électorale.
2. La CENA (Commission Électorale Nationale Autonome) : organe indépendant permanent composé de personnalités neutres. Elle contrôle et supervise l'ensemble des opérations électorales, de l'inscription sur les listes jusqu'à la proclamation provisoire des résultats, et veille à l'égalité de traitement des candidats.
3. Le CNRA (Conseil National de Régulation de l'Audiovisuel) : garantit l'accès équitable de tous les candidats aux médias publics (RTS) pendant la campagne officielle.
4. Les juridictions de validation : le Conseil Constitutionnel (proclame les résultats définitifs de l'élection présidentielle et des référendums) et les Cours d'Appel (pour les élections législatives et locales).

III. LES ÉTAPES DU DÉROULEMENT DU SCRUTIN DANS LE BUREAU DE VOTE
Le jour du vote, le bureau est présidé par un président assisté de deux assesseurs et d'un secrétaire, sous le regard des délégués de candidats et d'observateurs indépendants :
1. Vérification de l'identité et de l'inscription sur la liste d'émargement.
2. Prise d'une enveloppe et des bulletins de chaque candidat (obligatoire pour préserver le secret).
3. Passage obligatoire dans l'Isoloir fermé pour introduire un seul bulletin dans l'enveloppe.
4. Dépôt de l'enveloppe dans l'urne transparente sous la formule : "A voté !".
5. Émargement de la liste électorale et trempage de l'index gauche dans l'encre indélébile pour empêcher tout vote multiple frauduleux.
6. Dépouillement public et contradictoire des bulletins dès la clôture du scrutin à 18 heures.`,
  sections: [
    {
      title: 'I. Le Statut d\'Électeur et les Caractéristiques du Suffrage',
      content: [
        'Tout citoyen sénégalais âgé de 18 ans et inscrit sur les listes jouit du droit de vote.',
        'Le suffrage universel, égal et secret garantit l\'expression souveraine de la volonté populaire.'
      ]
    },
    {
      title: 'II. Rôle Régulateur de la CENA et des Organes Électoraux',
      content: [
        'La CENA supervise et garantit la régularité et la neutralité de toutes les opérations électorales.',
        'Le Conseil Constitutionnel statue souverainement sur les recours et proclame les résultats définitifs.'
      ]
    },
    {
      title: 'III. Les 6 Gestes Républicains dans le Bureau de Vote',
      content: [
        'Du passage dans l\'isoloir au trempage du doigt dans l\'encre indélébile jusqu\'au dépouillement public, chaque étape sécurise le vote.'
      ]
    }
  ],
  conclusion: "Voter n'est pas seulement un droit démocratique inaliénable, c'est un devoir civique sacré pour participer activement au destin politique et économique du Sénégal."
};

export const LESSON_5_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LES SYMBOLES DE LA RÉPUBLIQUE ET LA NATION SÉNÉGALAISE',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Les symboles de la République incarnent l'identité nationale, l'histoire partagée, les valeurs républicaines et l'idéal de concorde du peuple sénégalais. Définis par la Constitution, ces emblèmes sacrés méritent le respect absolu de chaque citoyen et manifestent la souveraineté du Sénégal sur la scène internationale.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 5 : LES SYMBOLES DE LA RÉPUBLIQUE ET LA NATION SÉNÉGALAISE

I. LE DRAPEAU NATIONAL DU SÉNÉGAL
Adopté en 1960 au moment de l'indépendance, le drapeau du Sénégal est composé de trois bandes verticales d'égales dimensions aux couleurs panafricaines, frappé en son centre d'une étoile verte à cinq branches :
- Le Vert : symbolise l'espérance, la fécondité de la terre agricole et, pour les croyants musulmans et chrétiens, la couleur spirituelle de l'élévation et de la paix.
- Le Jaune (Or) : symbolise la richesse du pays issue du travail courageux de ses enfants, les sables du pays et la lumière bienveillante de la vérité.
- Le Rouge : symbolise le sang des ancêtres et des tirailleurs versé pour la libération nationale, ainsi que l'ardeur combative pour le développement.
- L'Étoile verte à 5 branches : symbolise l'ouverture du Sénégal aux cinq continents et l'idéal d'élévation morale de la nation.

II. L'HYMNE NATIONAL : « PINCEZ TOUS VOS KORAS, FRAPPEZ LES BALAFONS »
Écrit par le poète-président Léopold Sédar Senghor et composé par le musicien français Herbert Pepper :
- C'est un chant patriotique vibrant appelant à l'union fraternelle, au dépassement des rancœurs du passé et à la défense vaillante de la patrie sous la devise sacrée : "Le Lion rouge a rugi".
- Lors de l'exécution de l'hymne national ou de la montée des couleurs, tout citoyen doit immédiatement s'arrêter, se mettre au garde-à-vous immobile, retirer son couvre-chef et témoigner un profond recueillement.

III. LA DEVISE, LE SCEAU ET LES ARMOIRIES DE LA RÉPUBLIQUE
1. La Devise nationale : « Un Peuple - Un But - Une Foi » :
- Un Peuple : l'affirmation que malgré la diversité de nos ethnies (Wolofs, Sérères, Pulaar, Diolas, Mandingues, Soninkés, Manjaks), nous formons une seule nation unie et indivisible.
- Un But : l'effort collectif concerté vers le progrès économique et social partagé.
- Une Foi : la croyance inébranlable en notre avenir commun et la confiance en notre destin souverain.
2. Le Sceau de l'État :
Gravé sur les actes officiels de la République, il représente un lion passant et un baobab stylisé.
3. Les Armoiries :
Un écu divisé en deux parties : à gauche le lion rouge rampant (symbole du courage et de la force) et à droite le baobab majestueux (symbole de la pérennité, de la générosité nourricière et de l'arbre à palabre africain), entouré par la palme et la devise nationale.`,
  sections: [
    {
      title: 'I. Le Drapeau Tricolore et l\'Étoile à Cinq Branches',
      content: [
        'Les trois bandes vert, jaune et rouge et l\'étoile verte portent les espérances du peuple et le souvenir des sacrifices pour l\'indépendance.',
        'Le respect du drapeau lors des levées de couleurs est l\'attitude civique fondamentale attendue de tout élève sénégalais.'
      ]
    },
    {
      title: 'II. L\'Hymne National et la Devise « Un Peuple - Un But - Une Foi »',
      content: [
        'L\'hymne de Senghor célèbre le courage légendaire du "Lion rouge" et la fraternité universelle.',
        'La devise nationale transcende les appartenances communautaires au profit de la cohésion républicaine.'
      ]
    },
    {
      title: 'III. Le Sceau, le Baobab et les Armoiries',
      content: [
        'Le baobab et le lion incarnent la sagesse ancestrale et la bravoure protectrice de la République.'
      ]
    }
  ],
  conclusion: "Honorer les symboles de la République, c'est rendre hommage à l'histoire du Sénégal et renouveler notre serment collectif de fraternité et de patriotisme."
};

export const LESSON_6_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LE RESPECT DES BIENS PUBLICS ET LE CIVISME FISCAL',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Les biens publics (écoles, hôpitaux, routes, autobus, lampadaires) appartiennent à l'ensemble de la collectivité nationale et sont financés par les impôts de tous les contribuables. Pourtant, l'incivisme, les dégradations lors de manifestations et la fraude fiscale portent un préjudice immense au développement de notre pays. Cultiver le civisme fiscal et le respect du bien commun est un impératif patriotique.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 6 : LE RESPECT DES BIENS PUBLICS ET LE CIVISME FISCAL

I. LES BIENS PUBLICS : PROPRIÉTÉ COMMUNE DE LA NATION
1. Définition et typologie :
Un bien public est un bien ou un service accessible à tous les membres de la société sans exclusion, géré ou mis à disposition par l'État ou les collectivités territoriales :
- Les infrastructures de transport : routes bitumées, autoroutes à péage, TER, BRT, ponts, trottoirs.
- Les édifices et équipements sociaux : collèges, lycées, universités, hôpitaux, maternités, postes de police.
- Les biens environnementaux : espaces verts, plages, forêts classées.
2. Les méfaits de l'incivisme et du vandalisme :
La destruction volontaire des biens publics (brûler des autobus ou des pneus sur le bitume lors d'émeutes, saccager du matériel scolaire ou voler des lampadaires solaires) constitue un crime contre la communauté nationale : cela appauvrit l'État, détériore le cadre de vie et oblige à consacrer des milliards de francs CFA à des réparations au détriment de la construction de nouvelles écoles ou d'hôpitaux.

II. LE CIVISME FISCAL ET LE RÔLE CAPITAL DE L'IMPÔT
1. Pourquoi payer l'impôt ?
L'impôt est une contribution financière obligatoire prélevée par l'État sur les revenus des citoyens et les bénéfices des entreprises pour financer les charges publiques.
Sans impôts, l'État ne peut :
- Ni payer les salaires des enseignants, des médecins et des forces de défense et de sécurité.
- Ni construire et équiper les salles de classe, les forages d'eau en milieu rural ou les postes de santé.
- Ni assurer la gratuité de soins vitaux (plan Sésame pour les personnes âgées, gratuité des césariennes).
2. Devoir constitutionnel et justice fiscale :
L'article 24 de la Constitution dispose que tout citoyen a le devoir de s'acquitter de ses obligations fiscales proportionnellement à ses capacités économiques.
La lutte contre la fraude fiscale, le travail dissimulé et la corruption est indispensable pour que chacun contribue équitablement à la solidarité nationale.`,
  sections: [
    {
      title: 'I. La Nature Sacrée des Biens Publics et le Coût du Vandalisme',
      content: [
        'Les biens publics sont le patrimoine partagé de tous les Sénégalais financé par l\'effort national.',
        'Détruire un édifice public ou un bus de transport pénalise d\'abord les usagers les plus démunis.'
      ]
    },
    {
      title: 'II. L\'Impôt : Ciment du Développement et Obligation Civique',
      content: [
        'Le civisme fiscal permet à l\'État de construire des routes, financer l\'éducation et garantir la sécurité nationale.',
        'La transparence et la reddition des comptes renforcent le consentement des citoyens à l\'impôt.'
      ]
    }
  ],
  conclusion: "Le respect scrupuleux des biens publics et le paiement loyal des impôts sont les marques tangibles d'un citoyen moderne et dévoué au rayonnement économique du Sénégal."
};

export const LESSON_7_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LE TRAVAIL, LES SYNDICATS ET LES DROITS DES TRAVAILLEURS',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "Le travail est la source de toute richesse humaine, un facteur d'épanouissement personnel et un moteur fondamental du développement économique d'une nation. Au Sénégal, les relations professionnelles sont régies par le Code du Travail qui garantit les droits fondamentaux des salariés, encadre le dialogue social à travers les syndicats et préserve la paix sociale indispensable à la production.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 7 : LE TRAVAIL, LES SYNDICATS ET LES DROITS DES TRAVAILLEURS

I. LA VALEUR DU TRAVAIL ET LE CODE DU TRAVAIL SÉNÉGALAIS
Le travail est à la fois un droit constitutionnel et un devoir civique pour chaque citoyen en âge de travailler.
Le Code du Travail fixe les règles équitables régissant l'emploi :
- L'interdiction absolue du travail forcé et du travail des enfants de moins de 15 ans.
- La durée légale du travail fixée à 40 heures par semaine dans les entreprises non agricoles.
- Le salaire minimum interprofessionnel garanti (SMIG) protégeant les travailleurs contre la sous-rémunération.
- Le repos hebdomadaire obligatoire, les congés payés annuels et les congés de maternité indemnisés pour les femmes salariées.
- La protection de la santé et de la sécurité des travailleurs sur les lieux d'activité (équipements de protection individuelle).

II. LES SYNDICATS DE TRAVAILLEURS ET LE DIALOGUE SOCIAL
1. Qu'est-ce qu'un syndicat ?
Un syndicat est une association de travailleurs (ou d'employeurs) libres s'unissant pour défendre leurs intérêts matériels, moraux et professionnels communs.
Au Sénégal, la liberté syndicale est garantie par la Constitution. Les grandes centrales syndicales sénégalaises (CNTS, UNSAS, CSA, FGTS, UDTS) et les syndicats d'enseignants (CUSEMS, SAEMSS, UDEN) jouent un rôle majeur dans la négociation collective.
2. Le droit de grève et ses limites légales :
La grève est la cessation collective et concertée du travail décidée par les salariés pour appuyer des revendications professionnelles.
La loi encadre rigoureusement ce droit :
- Dépôt préalable d'un préavis de grève obligatoire (délai de 30 jours au Sénégal) pour favoriser la négociation avec l'employeur ou le gouvernement.
- Instauration d'un Service Minimum obligatoire dans les secteurs d'utilité publique vitale (santé, eau, électricité, sécurité) afin de ne pas mettre en péril la vie des populations.`,
  sections: [
    {
      title: 'I. Les Droits Fondamentaux des Travailleurs et le SMIG',
      content: [
        'Le Code du Travail sénégalais prohibe le travail des enfants et garantit la protection sociale et la sécurité.',
        'La limitation des heures de travail et les congés payés protègent l\'intégrité physique du salarié.'
      ]
    },
    {
      title: 'II. Rôle des Centrales Syndicales et Encadrement du Droit de Grève',
      content: [
        'Les syndicats négocient les conventions collectives et défendent le pouvoir d\'achat des travailleurs.',
        'Le préavis de grève et le service minimum préservent l\'équilibre entre droit de revendication et continuité des services vitaux.'
      ]
    }
  ],
  conclusion: "Le travail digne et le dialogue social apaisé entre syndicats, patronat et État constituent la clé de voûte de la prospérité économique et de la justice sociale au Sénégal."
};

export const LESSON_8_CIVIQUE_4EME: LessonContent = {
  id: 'civique-4eme-lecon-8',
  number: 'LEÇON 8',
  title: 'LA PROTECTION DE LA JEUNESSE ET LA LUTTE CONTRE LES FLÉAUX SOCIAUX',
  subject: 'Éducation civique',
  classLevel: '4ème',
  introduction: "La jeunesse représente plus de 60 % de la population sénégalaise : elle est la force vive, l'espérance et l'avenir de la nation. Cependant, cette jeunesse est aujourd'hui confrontée à de multiples dangers qui menacent sa santé physique, son avenir scolaire et son équilibre moral : consommation de drogues et d'alcool, délinquance, grossesses précoces en milieu scolaire et violences. La préservation de la jeunesse exige une prise de conscience individuelle et une mobilisation collective.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 4ÈME
LEÇON 8 : LA PROTECTION DE LA JEUNESSE ET LA LUTTE CONTRE LES FLÉAUX SOCIAUX

I. LES PRINCIPAUX FLÉAUX MENAÇANT LA JEUNESSE AU SÉNÉGAL
1. La drogue et le tabagisme :
- Consommation croissante de cannabis (yamba), de chicha, de tramadol et de nouvelles substances synthétiques illicites.
- Conséquences dramatiques : destruction irréversible des neurones cérébraux, troubles mentaux et psychotiques, déscolarisation immédiate, marginalisation et passage à la délinquance pour financer l'addiction.
2. La délinquance juvénile et l'agressivité :
Vols à l'arraché, agressions nocturnes, port d'armes blanches (couteaux). Ces dérives mènent les mineurs tout droit vers les centres de redressement pénitentiaire et détruisent leur avenir.
3. Les grossesses précoces et mariages d'enfants en milieu scolaire :
Phénomène préoccupant qui interrompt brutalement la scolarité des jeunes filles, met en péril leur santé lors d'accouchements difficiles et brise leurs chances d'émancipation professionnelle.
4. Les dérives d'Internet et des réseaux sociaux (Cybercriminalité) :
Harcèlement en ligne, diffusion de vidéos intimes sans consentement, arnaques numériques et dépendance addictive aux écrans.

II. STRATÉGIES DE LUTTE ET CONDUITE CIVIQUE DE L'ÉLÈVE
1. Rôle de la famille et de l'école :
- L'éducation familiale basée sur le dialogue, la tendresse et la transmission des valeurs de "Kersa" (retenue/pudeur) et de "Jom" (dignité).
- L'école comme sanctuaire de savoir, d'éthique et de réussite méritocratique.
2. Les structures d'assistance et la loi :
- Les Centres d'Accueil et d'Éducation Surveillée (AEMO) pour les mineurs en difficulté.
- La sévérité des lois réprimant le trafic de stupéfiants et le viol criminalisé par la loi de 2020.
3. L'attitude responsable de l'élève de 4ème :
Savoir dire NON aux mauvaises fréquentations, pratiquer une activité sportive saine au sein des ASC ou clubs scolaires, et cultiver l'ambition d'exceller dans ses études pour honorer sa famille et servir la patrie.`,
  sections: [
    {
      title: 'I. Les Dangers de la Toxicomanie et de la Délinquance',
      content: [
        'La drogue et l\'alcool détruisent la santé mentale et mènent à la rupture scolaire et sociale.',
        'La délinquance juvénile enferme les adolescents dans la spirale carcérale.'
      ]
    },
    {
      title: 'II. Grossesses Précoces et Cyberharcèlement',
      content: [
        'Les grossesses précoces pénalisent lourdement la scolarisation des filles.',
        'L\'usage responsable et éthique des réseaux sociaux évite les dérives du cyberharcèlement.'
      ]
    },
    {
      title: 'III. Les Valeurs de « Jom » et d\'Excellence Scolaire',
      content: [
        'S\'armer de courage moral (Jom) et de pudeur (Kersa) pour refuser les comportements déviants.',
        'Faire du sport et des études les moteurs essentiels de l\'épanouissement personnel.'
      ]
    }
  ],
  conclusion: "Protéger la jeunesse, c'est protéger le futur du Sénégal. Chaque élève doit prendre conscience de sa valeur unique et refuser de compromettre son avenir au contact des drogues et de l'incivisme."
};

export const COURSES_EDUCATION_CIVIQUE_4EME: ContentData[] = [
  {
    id: 'civique-4eme-lecon-1',
    title: 'LEÇON 1 : LES DROITS DE L\'HOMME ET LES LIBERTÉS FONDAMENTALES',
    type: 'cours',
    badge: 'Partie 1 • Droits, Démocratie & Citoyenneté',
    description: 'Charte de Kouroukan Fouga (1236), DUDH de 1948, Charte africaine de Banjul (1981), les trois générations de droits et les mécanismes de protection au Sénégal (CSDH, justice).',
    lessonData: LESSON_1_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-2',
    title: 'LEÇON 2 : LA DÉMOCRATIE ET L\'ÉTAT DE DROIT AU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 1 • Droits, Démocratie & Citoyenneté',
    description: 'Souveraineté populaire, séparation des trois pouvoirs de Montesquieu, primauté de la loi, égalité de tous devant la justice et histoire des alternances pacifiques de 2000, 2012 et 2024.',
    lessonData: LESSON_2_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-3',
    title: 'LEÇON 3 : LES PARTIS POLITIQUES ET LA SOCIÉTÉ CIVILE AU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 1 • Droits, Démocratie & Citoyenneté',
    description: 'Rôle républicain des partis politiques (article 4), interdiction des partis ethniques/confrériques, et veille citoyenne de la société civile (Forum Civil, RADDHO, syndicats).',
    lessonData: LESSON_3_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-4',
    title: 'LEÇON 4 : LE PROCESSUS ÉLECTORAL ET LE DROIT DE VOTE AU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 2 • Institutions & Pratiques Républicaines',
    description: 'Suffrage universel, égal et secret, rôle impartial de la CENA et du Conseil Constitutionnel, et les étapes sécurisées du vote (isoloir, urne transparente, encre indélébile).',
    lessonData: LESSON_4_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-5',
    title: 'LEÇON 5 : LES SYMBOLES DE LA RÉPUBLIQUE ET LA NATION SÉNÉGALAISE',
    type: 'cours',
    badge: 'Partie 2 • Institutions & Pratiques Républicaines',
    description: 'Drapeau tricolore et étoile verte, hymne national de Senghor "Le Lion rouge a rugi", devise "Un Peuple - Un But - Une Foi", sceau et armoiries avec baobab et lion rampant.',
    lessonData: LESSON_5_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-6',
    title: 'LEÇON 6 : LE RESPECT DES BIENS PUBLICS ET LE CIVISME FISCAL',
    type: 'cours',
    badge: 'Partie 3 • Bien Commun & Vie Sociale',
    description: 'Patrimoine public national (TER, écoles, hôpitaux), condamnation des destructions et vandalisme, importance de l\'impôt républicain pour le financement des services sociaux.',
    lessonData: LESSON_6_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-7',
    title: 'LEÇON 7 : LE TRAVAIL, LES SYNDICATS ET LES DROITS DES TRAVAILLEURS',
    type: 'cours',
    badge: 'Partie 3 • Bien Commun & Vie Sociale',
    description: 'Code du travail sénégalais, interdiction du travail des enfants, rôle des syndicats dans la négociation collective, droit de grève encadré et service minimum obligatoire.',
    lessonData: LESSON_7_CIVIQUE_4EME
  },
  {
    id: 'civique-4eme-lecon-8',
    title: 'LEÇON 8 : LA PROTECTION DE LA JEUNESSE ET LA LUTTE CONTRE LES FLÉAUX SOCIAUX',
    type: 'cours',
    badge: 'Partie 3 • Bien Commun & Vie Sociale',
    description: 'Lutte contre la drogue, la délinquance juvénile, les grossesses précoces en milieu scolaire et le cyberharcèlement ; promotion des valeurs cardinales de Jom et de Kersa.',
    lessonData: LESSON_8_CIVIQUE_4EME
  }
];
'''

with open('src/data/courses_4eme_education_civique.ts', 'w', encoding='utf-8') as f:
    f.write(civique_4eme_code)

print("Created src/data/courses_4eme_education_civique.ts successfully.")

civique_3eme_code = '''import { ContentData, LessonContent } from './courses';

// =========================================================================
// PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME
// MODÈLE SÉNÉGALAIS POUR LA PRÉPARATION DU BFEM (BREVET DE FIN D'ÉTUDES MOYENNES)
// 8 Leçons exhaustives et approfondies sur les Institutions, la Décentralisation et les Relations Internationales
// =========================================================================

export const LESSON_1_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-1',
  number: 'LEÇON 1',
  title: 'LA CONSTITUTION DE LA RÉPUBLIQUE DU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "La Constitution est la loi suprême, fondamentale et inviolable d'un État. Elle détermine la forme de l'État (républicain, laïque, démocratique et social), proclame les droits et libertés inaliénables des citoyens, organise la séparation et l'équilibre des pouvoirs publics et fixe les modalités de leur transmission démocratique. Au Sénégal, l'histoire constitutionnelle témoigne de la volonté constante de consolider l'État de droit.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 1 : LA CONSTITUTION DE LA RÉPUBLIQUE DU SÉNÉGAL

I. DÉFINITION ET CARACTÈRE SUPRÊME DE LA CONSTITUTION
1. Qu'est-ce qu'une Constitution ?
C'est le texte juridique fondamental qui fonde juridiquement et politiquement l'État.
2. Le principe de la hiérarchie des normes (la pyramide de Kelsen) :
La Constitution trône au sommet de l'ordre juridique :
- Niveau 1 : La Constitution (Norme suprême).
- Niveau 2 : Les Traités et conventions internationaux ratifiés.
- Niveau 3 : Les Lois votées par l'Assemblée Nationale (lois organiques et lois ordinaires).
- Niveau 4 : Les Règlements administratifs (Décrets du Président ou du Premier Ministre, Arrêtés ministériels, préfectoraux et municipaux).
Aucune règle inférieure ne peut contredire une norme supérieure : c'est le principe de constitutionnalité garanti par le Conseil Constitutionnel.

II. L'HISTOIRE CONSTITUTIONNELLE DU SÉNÉGAL
Depuis l'indépendance, le Sénégal a connu plusieurs révisions et constitutions majeures :
- La Constitution de 1960 (régime parlementaire avec un Président de la République et un Président du Conseil des Ministres, Mamadou Dia).
- La Constitution de 1963 : adoption d'un régime présidentiel après la crise politique de décembre 1962.
- La Constitution de 2001 : adoptée par référendum après l'alternance de 2000, elle renforce les libertés publiques, le multipartisme et limite le nombre de mandats présidentiels.
- Les révisions majeures (notamment la révision constitutionnelle de mars 2016 par référendum instaurant le mandat de 5 ans renouvelable une seule fois, la création de nouveaux droits citoyens et l'intangibilité de clauses d'éternité).

III. LES CLAUSES D'ÉTERNITÉ ET LA RÉVISION CONSTITUTIONNELLE
1. Les modalités de révision de la Constitution (Article 103) :
Une modification constitutionnelle peut être initiée par le Président de la République ou par les députés. Elle doit être soit approuvée par le peuple par Référendum, soit adoptée par le Parlement réuni en Congrès à la majorité qualifiée des 3/5 des suffrages exprimés.
2. Les limites absolues à la révision (Clauses intangibles) :
La Constitution stipule solennellement que la forme républicaine et laïque de l'État, le mode d'élection au suffrage universel direct, la durée et le nombre consécutif des mandats du Président de la République (limité à deux mandats) et l'intégrité du territoire ne peuvent faire l'objet d'aucune révision.`,
  sections: [
    {
      title: 'I. La Hiérarchie des Normes et la Suprématie Constitutionnelle',
      content: [
        'La Constitution est la clé de voûte juridique s\'imposant aux lois, décrets et traités.',
        'Le contrôle de conformité exercé par le Conseil Constitutionnel protège la République de toute dérive législative.'
      ]
    },
    {
      title: 'II. Évolution des Constitutions Sénégalaises de 1960 à nos Jours',
      content: [
        'Du régime parlementaire de 1960 au régime présidentiel de 1963, puis aux réformes démocratiques de 2001 et 2016.',
        'La limitation des mandats présidentiels à deux consécutifs garantit la respiration démocratique.'
      ]
    },
    {
      title: 'III. Les Clauses d\'Éternité Intangibles (Article 103)',
      content: [
        'La laïcité, la forme républicaine, l\'intégrité territoriale et la limitation des mandats ne peuvent être abrogées.'
      ]
    }
  ],
  conclusion: "La Constitution est le pacte sacré qui unit tous les Sénégalais. Son respect par les gouvernants et les gouvernés est la condition sine qua non de la paix civile et de la longévité de nos institutions républicaines."
};

export const LESSON_2_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-2',
  number: 'LEÇON 2',
  title: 'LE POUVOIR EXÉCUTIF AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le pouvoir exécutif est la branche de l'État chargée de faire appliquer les lois votées par le Parlement, de conduire la politique de la nation, d'assurer la sécurité intérieure et extérieure et de gérer l'administration publique au quotidien. Au Sénégal, l'exécutif est bicéphale, articulé autour du Président de la République, chef suprême de l'État, et du Premier Ministre, chef du Gouvernement.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 2 : LE POUVOIR EXÉCUTIF AU SÉNÉGAL

I. LE PRÉSIDENT DE LA RÉPUBLIQUE : CLÉ DE VOÛTE DES INSTITUTIONS
1. Élection et mandat :
- Élu au suffrage universel direct au scrutin uninominal majoritaire à deux tours pour un mandat de 5 ans renouvelable une seule fois.
- Prête serment solennellement devant le Conseil Constitutionnel avant son entrée en fonction.
2. Attributions et pouvoirs constitutionnels majeurs :
- Chef de l'État et symbole de l'unité nationale : il est le garant de la Constitution, de l'indépendance nationale et du respect des traités.
- Chef suprême des Armées : il préside le Conseil Supérieur de la Défense Nationale.
- Domaine des relations extérieures : il nomme les ambassadeurs et négocie les traités internationaux.
- Pouvoir de nomination : il nomme le Premier Ministre, les ministres, les hauts magistrats, les gouverneurs de région et les directeurs généraux des entreprises publiques.
- Pouvoir de grâce : il exerce le droit de grâce présidentielle dispensant un condamné de subir sa peine.
- Promulgation des lois : il signe et promulgue les lois votées par l'Assemblée Nationale dans les 15 jours.
- Pouvoirs exceptionnels (Article 52) : en cas de menace grave et immédiate contre les institutions ou l'intégrité du territoire, il dispose de pouvoirs exceptionnels après consultation des présidents de l'Assemblée et du Conseil Constitutionnel.

II. LE PREMIER MINISTRE ET LE GOUVERNEMENT
1. Le Premier Ministre :
- Nommé par le Président de la République qui met fin à ses fonctions.
- Chef du Gouvernement : il coordonne et anime l'action ministérielle, propose les membres de son gouvernement et dispose de l'administration publique.
- Déclaration de Politique Générale (DPG) : après sa nomination, il présente devant l'Assemblée Nationale les grandes orientations de son programme de gouvernement, suivie d'un vote de confiance.
2. Les Ministres et Secrétaires d'État :
Chaque ministre dirige un département ministériel précis (Éducation, Santé, Finances, Justice, Défense, etc.). Le Conseil des Ministres se réunit chaque mercredi au Palais de la République sous la présidence effective du Chef de l'État.`,
  sections: [
    {
      title: 'I. Statut et Prérogatives du Président de la République',
      content: [
        'Élu pour 5 ans au suffrage universel direct, il incarne la souveraineté et l\'unité nationale.',
        'Chef suprême des armées, garant de la Constitution et premier diplomate de l\'État.'
      ]
    },
    {
      title: 'II. Rôle du Premier Ministre et Conseil des Ministres',
      content: [
        'Le Premier Ministre anime l\'action gouvernementale et prononce sa Déclaration de Politique Générale (DPG).',
        'Le Conseil des Ministres hebdomadaire arbitre les grandes réformes et adopte les projets de lois.'
      ]
    }
  ],
  conclusion: "L'exécutif guide la marche quotidienne du Sénégal avec la responsabilité permanente de traduire les aspirations des citoyens en réalisations concrètes de développement."
};

export const LESSON_3_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-3',
  number: 'LEÇON 3',
  title: 'LE POUVOIR LÉGISLATIF : L\'ASSEMBLÉE NATIONALE DU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le pouvoir législatif est le pilier de la démocratie représentative où s'expriment les voix du peuple souverain à travers ses représentants élus : les Députés. Au Sénégal, le parlement est monocaméral (une seule chambre) et incarné par l'Assemblée Nationale siégeant à la Place Soweto à Dakar. L'Assemblée a deux missions constitutionnelles cardinales : voter la loi et contrôler l'action du gouvernement.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 3 : LE POUVOIR LÉGISLATIF : L'ASSEMBLÉE NATIONALE DU SÉNÉGAL

I. COMPOSITION ET ORGANISATION DE L'ASSEMBLÉE NATIONALE
1. Élection des députés :
- L'Assemblée Nationale compte 165 députés élus pour un mandat de 5 ans au suffrage universel direct selon un scrutin mixte (au scrutin majoritaire dans les départements et à la proportionnelle sur la liste nationale, avec une représentation dédiée aux Sénégalais de l'extérieur).
- La Loi sur la Parité absolue (2010) : impose obligatoirement l'alternance stricte homme-femme sur toutes les listes de candidatures, faisant du Sénégal l'un des pays les plus avancés au monde pour la féminisation du Parlement.
2. Organisation interne :
- Le Président de l'Assemblée Nationale : élu pour la durée de la législature (5 ans), deuxième personnalité de l'État dans l'ordre protocolaire républicain.
- Le Bureau de l'Assemblée et la Conférence des Présidents.
- Les Groupes Parlementaires : regroupements de députés par affinité politique (minimum de 10 députés pour former un groupe).
- Les Commissions Techniques Permanentes (Finances, Lois, Éducation, Défense, etc.) qui étudient en détail chaque texte de loi avant son passage en séance plénière.

II. LES DEUX MISSIONS MAJEURES DU POUVOIR LÉGISLATIF
1. Le Vote des Lois :
- L'initiative de la loi appartient conjointement au Président de la République (Projet de loi) et aux députés (Proposition de loi).
- Procédure législative : dépôt du texte -> examen en commission technique -> débat contradictoire et vote article par article en séance plénière publique -> transmission au Président de la République pour promulgation.
- Vote du Budget annuel de l'État (Loi de Finances) : acte législatif décisif autorisant les recettes et dépenses de la nation pour l'année à venir.
2. Le Contrôle de l'Action Gouvernementale :
L'Assemblée surveille l'exécutif pour éviter tout abus grâce à :
- Les Questions orales et questions écrites posées directement aux ministres.
- Les Commissions d'enquête parlementaire sur des sujets d'intérêt national.
- La Motion de Censure : arme constitutionnelle ultime permettant aux députés de renverser le Premier Ministre et son gouvernement en cas de désaccord majeur. En contrepartie, le Président de la République peut dissoudre l'Assemblée Nationale après deux ans de législature.`,
  sections: [
    {
      title: 'I. Élection des Députés et Révolution de la Parité Absolue',
      content: [
        '165 députés représentent la nation entière et non leur seule circonscription d\'origine.',
        'La loi historique de parité de 2010 garantit une présence équitaire des femmes à l\'hémicycle.'
      ]
    },
    {
      title: 'II. La Fabrique de la Loi et le Vote de la Loi de Finances',
      content: [
        'Examen minutieux en commissions permanentes et débats contradictoires en séance plénière.',
        'Le vote du budget souverain décide des investissements pour les routes, lycées et hôpitaux.'
      ]
    },
    {
      title: 'III. Les Outils de Contrôle : Questions, Enquêtes et Motion de Censure',
      content: [
        'Les questions d\'actualité obligent les ministres à rendre des comptes devant la représentation nationale.',
        'L\'équilibre démocratique repose sur la possibilité de censure gouvernementale ou de dissolution de l\'Assemblée.'
      ]
    }
  ],
  conclusion: "L'Assemblée Nationale est le cœur battant du débat démocratique au Sénégal. Par la loi et le contrôle, les députés veillent à ce que l'action publique serve loyalement l'intérêt exclusif des populations."
};

export const LESSON_4_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-4',
  number: 'LEÇON 4',
  title: 'LE POUVOIR JUDICIAIRE ET L\'INDÉPENDANCE DE LA JUSTICE',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le pouvoir judiciaire est le garant ultime des libertés individuelles et collectives, de l'égalité de tous devant la loi et de la paix sociale. Dans une véritable république, la justice doit être indépendante du pouvoir politique et de l'argent afin de trancher les litiges en toute impartialité. Au Sénégal, l'autorité judiciaire est exercée par des cours et tribunaux dont les décisions sont rendues solennellement « Au nom du Peuple Sénégalais ».",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 4 : LE POUVOIR JUDICIAIRE ET L'INDÉPENDANCE DE LA JUSTICE

I. LES PRINCIPES FONDAMENTAUX DE LA JUSTICE SÉNÉGALAISE
1. L'indépendance de la justice :
Consacrée par l'Article 90 de la Constitution : "Le pouvoir judiciaire est indépendant du pouvoir législatif et du pouvoir exécutif. Les magistrats du siège ne sont soumis dans l'exercice de leurs fonctions qu'à l'autorité de la loi. Ils sont inamovibles".
2. Les garanties du justiciable :
- La gratuité apparente de la justice (les juges sont payés par l'État et non par les plaideurs).
- Le droit à un procès équitable et contradictoire avec assistance obligatoire d'un avocat pour les crimes.
- La présomption d'innocence : toute personne accusée est présumée innocente jusqu'à ce que sa culpabilité ait été légalement démontrée par un tribunal.
- Le principe du double degré de juridiction : droit de faire appel d'une décision de justice devant une juridiction supérieure pour être rejugé.

II. L'ORGANISATION DES COURS ET TRIBUNAUX AU SÉNÉGAL
L'ordre judiciaire comprend deux corps de magistrats : les magistrats du siège (les juges qui tranchent) et les magistrats du parquet (les procureurs qui défendent l'intérêt de la société).
1. Les Juridictions de base :
- Les Tribunaux d'Instance : présents dans chaque département (litiges civils simples, état civil, petites infractions).
- Les Tribunaux de Grande Instance : jugent les litiges plus importants et les délits pénaux (Tribunal correctionnel) et les crimes graves (Chambres criminelles).
- Les Tribunaux du Travail et les Tribunaux de Commerce.
2. Les Juridictions d'Appel :
Les Cours d'Appel (Dakar, Thiès, Saint-Louis, Kaolack, Ziguinchor) rejugent les affaires en fait et en droit en cas de contestation d'un premier jugement.

III. LES HAUTES JURIDICTIONS DE L'ÉTAT
1. Le Conseil Constitutionnel (7 Sages) :
Juge de la conformité des lois à la Constitution, tranche le contentieux des élections nationales et proclame les résultats définitifs.
2. La Cour Suprême :
Plus haute juridiction administrative et judiciaire. Elle ne rejuge pas les faits mais contrôle la bonne application du droit par les cours et tribunaux (juge de cassation).
3. La Cour des Comptes :
Vérifie la régularité des comptes publics de l'État, des collectivités locales et des entreprises publiques pour lutter contre la mauvaise gestion et le détournement de deniers publics.
4. L'OFNAC (Office National de Lutte contre la Fraude et la Corruption) :
Organe administratif indépendant chargé de recevoir les déclarations de patrimoine des gestionnaires de fonds publics et de traquer les actes de corruption.`,
  sections: [
    {
      title: 'I. L\'Inamovibilité des Juges et les Garanties du Justiciable',
      content: [
        'L\'indépendance statutaire des magistrats du siège garantit qu\'ils ne peuvent être sanctionnés pour leurs décisions.',
        'La présomption d\'innocence et le droit d\'appel consacrent les droits fondamentaux de la défense.'
      ]
    },
    {
      title: 'II. Cartographie Judiciaire : De l\'Instance à la Cour Suprême',
      content: [
        'Tribunaux d\'Instance et de Grande Instance de proximité jusqu\'aux Cours d\'Appel régionales.',
        'La Cour Suprême régule l\'uniformité de la jurisprudence sur l\'ensemble du territoire national.'
      ]
    },
    {
      title: 'III. Conseil Constitutionnel, Cour des Comptes et OFNAC',
      content: [
        'Le Conseil Constitutionnel arbitre les litiges constitutionnels et électoraux suprêmes.',
        'La Cour des Comptes et l\'OFNAC veillent sur l\'intégrité des deniers publics et la reddition des comptes.'
      ]
    }
  ],
  conclusion: "Sans justice forte, intègre et indépendante, il ne peut y avoir d'État de droit ni de démocratie véritable. La justice protège les faibles contre les puissants et assure la cohésion républicaine."
};

export const LESSON_5_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-5',
  number: 'LEÇON 5',
  title: 'LA DÉCENTRALISATION ET LA DÉMOCRATIE LOCALE AU SÉNÉGAL',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Pour rapprocher l'administration des citoyens et promouvoir un développement économique équilibré sur l'ensemble du territoire national, l'État sénégalais a fait le choix stratégique de la Décentralisation. Depuis la réforme historique de l'Acte III de la décentralisation en 2013, le Sénégal est organisé en collectivités territoriales dotées de compétences propres et dirigées par des élus locaux.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 5 : LA DÉCENTRALISATION ET LA DÉMOCRATIE LOCALE AU SÉNÉGAL

I. COMPRENDRE LA DIFFÉRENCE : DÉCONCENTRATION ET DÉCENTRALISATION
1. La Déconcentration :
L'État nomme des représentants administratifs locaux pour agir en son nom en région ou en département (le Gouverneur de Région, le Préfet de Département, le Sous-préfet d'Arrondissement). Ils sont soumis à l'autorité hiérarchique directe du gouvernement (Ministre de l'Intérieur).
2. La Décentralisation :
L'État transfère des compétences de gestion et des moyens financiers à des Collectivités Territoriales autonomes, juridiquement distinctes de l'État, administrées par des conseils élus au suffrage universel par les populations locales.

II. L'ACTE III DE LA DÉCENTRALISATION ET LES COLLECTIVITÉS TERRITORIALES
Promulguée en 2013, la réforme de l'Acte III vise à « construire des territoires viables, compétitifs et porteurs de développement durable ».
Elle repose sur deux niveaux de collectivités territoriales :
1. Le Département :
- Collectivité territoriale intermédiaire regroupant plusieurs communes.
- Géré par le Conseil Départemental avec à sa tête un Président de Conseil Départemental élu par ses pairs.
- Compétences phares : gestion et entretien des collèges et lycées, action sociale départementale, aménagement du territoire intercommunal.
2. La Commune :
- Cellule de base de la démocratie locale (ex : commune de Thiès-Nord, commune de Médina à Dakar, commune de Podor).
- Dirigée par le Maire et la Municipalité sous le contrôle délibératif du Conseil Municipal élu.
- Compétences de proximité : gestion des écoles primaires et préscolaires, gestion des postes de santé communautaires, état civil (actes de naissance, mariages, décès), éclairage public, voirie communale, marchés et salubrité publique.

III. LES COMPÉTENCES TRANSFÉRÉES ET LA PARTICIPATION CITOYENNE
1. Les 9 domaines de compétences transférées par l'État :
L'éducation, la santé, l'urbanisme et l'habitat, l'environnement et la gestion des ressources naturelles, la jeunesse et les sports, la culture, le plan et le développement économique, l'action sociale, la gestion des terres du domaine national.
2. Le Budget participatif et l'engagement citoyen :
La démocratie locale ne s'arrête pas au vote des maires tous les 5 ans. Elle encourage la participation active des citoyens :
- Le Budget Participatif : processus démocratique permettant aux délégués de quartiers, associations de femmes et jeunes de choisir directement les priorités d'investissement de leur commune.
- Le paiement des taxes municipales (taxe d'enlèvement des ordures, patentes des commerces) indispensable pour financer les travaux publics de quartier.`,
  sections: [
    {
      title: 'I. Déconcentration Administrative vs Décentralisation Démocratique',
      content: [
        'Le Préfet représente l\'État déconcentré avec autorité hiérarchique.',
        'Le Maire et le Conseil Municipal représentent les citoyens décentralisés avec autonomie de gestion.'
      ]
    },
    {
      title: 'II. L\'Acte III : Départements et Communes de Proximité',
      content: [
        'Le Département pilote les collèges et lycées et la planification territoriale.',
        'La Commune gère le quotidien vital : état civil, écoles primaires, dispensaires, voirie et salubrité.'
      ]
    },
    {
      title: 'III. Les 9 Domaines Transférés et la Démocratie Participative',
      content: [
        'De l\'éducation à la santé et l\'environnement, les élus locaux ont la responsabilité du développement.',
        'Le budget participatif et les comités de quartier impliquent les habitants dans les décisions de leur cité.'
      ]
    }
  ],
  conclusion: "La décentralisation donne aux citoyens les moyens de devenir les artisans de leur propre développement local. Participer aux affaires de sa commune est le premier pas de la responsabilité civique."
};

export const LESSON_6_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-6',
  number: 'LEÇON 6',
  title: 'LE SÉNÉGAL ET LES ORGANISATIONS INTERNATIONALES (ONU, UA, CEDEAO)',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Dans un monde globalisé interdépendant, aucun pays ne peut vivre en autarcie ni résoudre seul les défis transnationaux de la sécurité, de la pauvreté, du climat ou des épidémies. Dès son accession à la souveraineté internationale en 1960, le Sénégal a fait le choix constant du multilatéralisme, de l'intégration régionale africaine et du respect du droit international, se forgeant une réputation diplomatique de premier plan.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 6 : LE SÉNÉGAL ET LES ORGANISATIONS INTERNATIONALES

I. L'ORGANISATION DES NATIONS UNIES (ONU)
1. Création et objectifs fondamentaux :
Fondée en 1945 à San Francisco au lendemain de la Seconde Guerre mondiale (Charte de l'ONU).
Ses 4 missions cardinales : préserver la paix et la sécurité internationales, développer des relations amicales entre nations fondées sur l'égalité souveraine, réaliser la coopération internationale face aux crises économiques, sanitaires et humanitaires, et promouvoir le respect universel des droits de l'Homme.
2. Les organes principaux :
- L'Assemblée Générale : parlement mondial réunissant les 193 États membres (un État = une voix).
- Le Conseil de Sécurité : organe exécutif chargé du maintien de la paix (15 membres dont 5 permanents disposant du droit de veto : USA, Russie, Chine, France, Royaume-Uni).
- La Cour Internationale de Justice (CIJ) à La Haye.
- Les Agences spécialisées : UNICEF (enfance), UNESCO (éducation, science, culture), OMS (santé mondiale), HCR (réfugiés), FAO (alimentation et agriculture).
3. Le rôle remarquable du Sénégal à l'ONU :
Le Sénégal est l'un des plus grands contributeurs de troupes aux opérations de maintien de la paix des Casques Bleus (Missions de l'ONU en RDC, Mali, Centrafrique, Côte d'Ivoire). De nombreuses personnalités sénégalaises ont dirigé des institutions prestigieuses (Amadou Mahtar Mbow à l'UNESCO, Jacques Diouf à la FAO).

II. L'UNION AFRICAINE (UA) ET LE RÊVE D'INTÉGRATION DU CONTINENT
1. De l'OUA à l'UA :
Succédant à l'Organisation de l'Unité Africaine (créée à Addis-Abeba en 1963 sous l'impulsion des pères fondateurs pour décoloniser le continent), l'Union Africaine est née à Durban en 2002 pour accélérer l'intégration politique et économique de l'Afrique et réaliser l'Agenda 2063.
2. Objectifs de l'UA :
Défendre la souveraineté des 55 pays africains, éradiquer les conflits armés ("Faire taire les armes"), promouvoir la démocratie et la bonne gouvernance contre les coups d'État (suspension immédiate des régimes putschistes), et bâtir la Zone de Libre-Échange Continentale Africaine (ZLECAF).

III. LA CEDEAO (COMMUNAUTÉ ÉCONOMIQUE DES ÉTATS DE L'AFRIQUE DE L'OUEST)
Créée par le Traité de Lagos en 1975, la CEDEAO réunit les pays ouest-africains avec des acquis majeurs :
- Libre circulation totale des personnes et des biens sans visa grâce au Passeport biométrique CEDEAO.
- Droit de résidence et d'établissement pour tout ressortissant de l'espace communautaire.
- L'ECOMOG / Force en attente : intervention pour rétablir la paix lors des guerres civiles au Libéria, en Sierra Leone et en Gambie en 2017.
- Objectif monétaire : création progressive d'une monnaie unique régionale (l'Éco).`,
  sections: [
    {
      title: 'I. L\'ONU et l\'Engagement Militaire et Diplomatique du Sénégal',
      content: [
        'L\'ONU garantit la paix mondiale et la sécurité collective à travers ses Casques Bleus.',
        'L\'armée sénégalaise s\'illustre par son professionnalisme légendaire dans les missions de paix onusiennes.'
      ]
    },
    {
      title: 'II. L\'Union Africaine : De la Décolonisation à la ZLECAF',
      content: [
        'De l\'OUA de 1963 à l\'UA de 2002 : bâtir une Afrique unie, démocratique et prospère.',
        'L\'UA sanctionne les ruptures de l\'ordre constitutionnel et promeut le marché unique africain.'
      ]
    },
    {
      title: 'III. La CEDEAO et l\'Intégration Ouest-Africaine au Quotidien',
      content: [
        'Le passeport CEDEAO et la libre circulation permettent aux citoyens de commercer et voyager librement.',
        'La solidarité régionale reste le levier majeur pour faire face aux menaces terroristes sahéliennes.'
      ]
    }
  ],
  conclusion: "Panafricaniste convaincu et acteur respecté du multilatéralisme, le Sénégal démontre que la coopération internationale est la clé pour relever les défis du XXIe siècle."
};

export const LESSON_7_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-7',
  number: 'LEÇON 7',
  title: 'LA CULTURE DE LA PAIX, LA TOLÉRANCE ET LA RÉSOLUTION PACIFIQUE DES CONFLITS',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "« Les guerres prenant naissance dans l'esprit des hommes, c'est dans l'esprit des hommes que doivent être élevées les défenses de la paix » proclame le préambule de l'UNESCO. Au Sénégal, la paix n'est pas seulement l'absence de guerre : elle est un mode de vie séculaire, un trésor culturel cultivé par le dialogue des religions, la concorde ethnique et des mécanismes traditionnels de régulation sociale réputés dans le monde entier.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 7 : LA CULTURE DE LA PAIX, LA TOLÉRANCE ET LA RÉSOLUTION PACIFIQUE DES CONFLITS

I. LA NOTION DE CULTURE DE LA PAIX ET DE TOLÉRANCE
1. Définition selon l'ONU :
Une culture de paix est un ensemble de valeurs, d'attitudes, de modes de comportement et de modes de vie qui rejettent la violence et préviennent les conflits en s'attaquant à leurs causes profondes par le dialogue et la négociation.
2. La Tolérance :
La tolérance n'est ni la complaisance ni l'indifférence. C'est le respect, l'acceptation et l'appréciation de la riche diversité des cultures de notre monde, de nos formes d'expression et de nos manières d'exprimer notre qualité d'être humain.

II. LE MODÈLE DE CONCORDE ET DE TOLÉRANCE DU SÉNÉGAL
Le Sénégal se distingue sur le plan international par une harmonie sociétale exceptionnelle reposant sur trois piliers :
1. Le dialogue islamo-chrétien exemplaire :
Musulmans (environ 95 % de la population) et Chrétiens (environ 5 %) vivent en parfaite osmose fraternelle dans les mêmes familles, célèbrent ensemble la Korité, la Tabaski, Noël et Pâques, et reposent parfois dans les mêmes cimetières mixtes (comme le cimetière de Joal-Fadiouth).
2. La Parenté à plaisanterie (Kalir ou Kalou en wolof / Sene-Kouma) :
Pacte d'alliance historique multiséculaire liant différentes ethnies (ex : Sérères et Toucouleurs, Diolas et Peuls) et différents patronymes (Ndiaye et Diop, Cissé et Touré). Cette tradition autorise les invectives et moqueries bienveillantes, désamorce instantanément les rancœurs et interdit formellement l'effusion de sang entre alliés.
3. Le rôle régulateur des guides religieux et chefs coutumiers :
Califes généraux des confréries musulmanes et clergé catholique interviennent régulièrement pour apaiser les tensions politiques et sociales lors des crises électorales.

III. LES MÉTHODES DIPLOMATIQUES ET PACIFIQUES DE RÈGLEMENT DES CONFLITS
La Charte des Nations Unies (Article 33) énumère les modes pacifiques de règlement des différends :
- La Négociation directe entre les parties.
- Les Bons Offices et la Médiation : intervention d'un tiers neutre pour rapprocher les points de vue.
- L'Arbitrage et le Règlement judiciaire devant les tribunaux internationaux (CIJ).
- L'exemple du processus de paix en Casamance : engagement constant pour la réconciliation nationale, le désarmement volontaire et le développement solidaire du Sud du Sénégal.`,
  sections: [
    {
      title: 'I. Définition Onusienne de la Culture de la Paix',
      content: [
        'La paix se construit par le rejet de la violence, l\'éducation civique et la justice sociale.',
        'La tolérance enrichit la société par l\'acceptation sincère des différences d\'opinions et de croyances.'
      ]
    },
    {
      title: 'II. Les Trésors de la Concorde Sénégalaise : Kalir et Dialogue Interreligieux',
      content: [
        'La parenté à plaisanterie (Kalir) désamorce les conflits par l\'humour et la fraternité ancestrale.',
        'La communion entre musulmans et chrétiens constitue l\'âme tolérante de la Teranga sénégalaise.'
      ]
    },
    {
      title: 'III. Médiation, Justice Internationale et Paix en Casamance',
      content: [
        'Privilégier la médiation et la négociation diplomatique face à toute crise.',
        'L\'apaisement en Casamance démontre la force de la main tendue et du pardon fraternel.'
      ]
    }
  ],
  conclusion: "La paix est l'héritage le plus précieux que nous ont légué nos ancêtres. Il appartient à chaque jeune collégien de préserver ce trésor en rejetant tout fanatisme et en incarnant au quotidien l'esprit de la Teranga."
};

export const LESSON_8_CIVIQUE_3EME: LessonContent = {
  id: 'civique-3eme-lecon-8',
  number: 'LEÇON 8',
  title: 'LES ENJEUX DU XXIe SIÈCLE : ENVIRONNEMENT, CYBERCITOYENNETÉ ET MONDIALISATION',
  subject: 'Éducation civique',
  classLevel: '3ème',
  introduction: "Le citoyen du XXIe siècle ne vit plus seulement dans les frontières de son pays : il est devenu un citoyen du monde confronté à des bouleversements écologiques sans précédent, à l'essor spectaculaire du monde numérique et aux mutations de la mondialisation. Comprendre ces défis globaux permet d'adopter des comportements éco-responsables et une éthique numérique indispensable à la survie de la planète et de nos démocraties.",
  fullText: `PROGRAMME D'ÉDUCATION CIVIQUE - CLASSE DE 3ÈME (BFEM)
LEÇON 8 : LES ENJEUX DU XXIe SIÈCLE : ENVIRONNEMENT, CYBERCITOYENNETÉ ET MONDIALISATION

I. L'URGENCE ENVIRONNEMENTALE ET LE CHANGEMENT CLIMATIQUE AU SÉNÉGAL
1. La crise écologique globale :
Les émissions massives de gaz à effet de serre (CO2, méthane) issues des énergies fossiles provoquent le réchauffement climatique mondial, la fonte des calottes glaciaires et la multiplication d'événements climatiques extrêmes (sécheresses, canicules, inondations).
2. Les impacts directs sur le Sénégal :
- La désertification et la dégradation des terres arables au Sahel et dans le bassin arachidier.
- L'érosion côtière dramatique dévorant les côtes sableuses de Saint-Louis (Langue de Barbarie), Rufisque, Bargny et Saly.
- La salinisation des terres agricoles dans les îles du Saloum et en Casamance.
3. Les initiatives écologiques :
- Le projet panafricain de la Grande Muraille Verte : barrière végétale d'arbres reliant Dakar à Djibouti sur plus de 7 000 km pour freiner l'avancée du désert du Sahara.
- La transition énergétique vers le solaire et l'éolien (centrales solaires de Bokhol, Malicounda).
- Les gestes éco-citoyens au quotidien : interdiction du plastique à usage unique, reboisement scolaire, économie de l'eau et tri des déchets.

II. LA CYBERCITOYENNETÉ ET L'ÉTHIQUE DU NUMÉRIQUE
1. L'ère des réseaux sociaux (TikTok, WhatsApp, Facebook, Instagram, X) :
Internet offre des opportunités d'apprentissage colossales, mais véhicule des dérives graves :
- Les Fausses nouvelles (Fake news ou désinformation) semant la panique ou manipulant l'opinion publique.
- Le cyberharcèlement, les injures et discours de haine ethnique ou religieuse punis sévèrement par le Code Pénal sénégalais.
- L'atteinte à la vie privée et le piratage des données personnelles.
2. Les devoirs du Cybercitoyen responsable :
- Toujours vérifier la source d'une information avant de la partager ("Je tourne mon doigt 7 fois avant de cliquer").
- Bannir tout propos injurieux ou diffamatoire dans les groupes de discussion.
- Protéger ses mots de passe et ne jamais divulguer d'images intimes.

III. CITOYENNETÉ NATIONALE ET CITOYENNETÉ MONDIALE
Être citoyen du monde, c'est comprendre que les problèmes de l'humanité (pandémies, pauvreté, pollution des océans) sont interconnectés.
C'est s'ouvrir aux autres cultures sans jamais renier son identité culturelle sénégalaise, et agir localement pour un impact positif global : "Penser globalement, agir localement".`,
  sections: [
    {
      title: 'I. Changement Climatique au Sahel et Grande Muraille Verte',
      content: [
        'L\'érosion côtière et la désertification menacent directement les populations sénégalaises.',
        'La Grande Muraille Verte et les énergies renouvelables traduisent l\'ambition écologique nationale.'
      ]
    },
    {
      title: 'II. Les Règles d\'Or de la Cybercitoyenneté et Lutte contre les Fake News',
      content: [
        'Vérifier les sources, respecter la vie privée et refuser les discours de haine sur les réseaux sociaux.',
        'La responsabilité pénale s\'applique intégralement aux publications et partages numériques.'
      ]
    },
    {
      title: 'III. L\'Éco-citoyen et le Citoyen du Monde',
      content: [
        'Allier fidélité aux valeurs patriotiques et solidarité universelle pour les générations futures.'
      ]
    }
  ],
  conclusion: "Face aux défis colossaux du climat et du numérique, la jeunesse sénégalaise détient les clés du changement. En devenant des éco-citoyens responsables et des internautes éclairés, vous bâtissez le monde de demain."
};

export const COURSES_EDUCATION_CIVIQUE_3EME: ContentData[] = [
  {
    id: 'civique-3eme-lecon-1',
    title: 'LEÇON 1 : LA CONSTITUTION DE LA RÉPUBLIQUE DU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 1 • L\'État, la Constitution & les Pouvoirs',
    description: 'Norme juridique suprême, pyramide de Kelsen, évolutions de 1960 à 2016, clauses d\'éternité intangibles (article 103) et limitation des mandats.',
    lessonData: LESSON_1_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-2',
    title: 'LEÇON 2 : LE POUVOIR EXÉCUTIF AU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 1 • L\'État, la Constitution & les Pouvoirs',
    description: 'Président de la République garant de l\'unité nationale, chef suprême des armées, et Premier Ministre chef du Gouvernement conduisant la politique nationale.',
    lessonData: LESSON_2_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-3',
    title: 'LEÇON 3 : LE POUVOIR LÉGISLATIF : L\'ASSEMBLÉE NATIONALE DU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 1 • L\'État, la Constitution & les Pouvoirs',
    description: '165 députés, loi historique sur la parité absolue (2010), processus de vote de la loi et de la Loi de Finances, et contrôle du gouvernement (censure, commissions).',
    lessonData: LESSON_3_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-4',
    title: 'LEÇON 4 : LE POUVOIR JUDICIAIRE ET L\'INDÉPENDANCE DE LA JUSTICE',
    type: 'cours',
    badge: 'Partie 1 • L\'État, la Constitution & les Pouvoirs',
    description: 'Inamovibilité des magistrats du siège, Conseil Constitutionnel, Cour Suprême, Cour des Comptes, tribunaux d\'instance et OFNAC pour la transparence des deniers publics.',
    lessonData: LESSON_4_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-5',
    title: 'LEÇON 5 : LA DÉCENTRALISATION ET LA DÉMOCRATIE LOCALE AU SÉNÉGAL',
    type: 'cours',
    badge: 'Partie 2 • Décentralisation & Gouvernance Locale',
    description: 'L\'Acte III de la décentralisation de 2013, compétences des Départements (collèges/lycées) et Communes (état civil, santé), 9 domaines transférés et budget participatif.',
    lessonData: LESSON_5_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-6',
    title: 'LEÇON 6 : LE SÉNÉGAL ET LES ORGANISATIONS INTERNATIONALES (ONU, UA, CEDEAO)',
    type: 'cours',
    badge: 'Partie 3 • Intégration Africaine & Monde',
    description: 'Maintien de la paix de l\'ONU et Casques Bleus sénégalais, Union Africaine et ZLECAF, CEDEAO avec passeport communautaire et libre circulation ouest-africaine.',
    lessonData: LESSON_6_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-7',
    title: 'LEÇON 7 : LA CULTURE DE LA PAIX, LA TOLÉRANCE ET LA RÉSOLUTION PACIFIQUE DES CONFLITS',
    type: 'cours',
    badge: 'Partie 3 • Intégration Africaine & Monde',
    description: 'Concorde musulmans-chrétiens au Sénégal, parenté à plaisanterie (Kalir) médiatrice séculaire, régulation des guides religieux et réconciliation nationale.',
    lessonData: LESSON_7_CIVIQUE_3EME
  },
  {
    id: 'civique-3eme-lecon-8',
    title: 'LEÇON 8 : LES ENJEUX DU XXIe SIÈCLE : ENVIRONNEMENT, CYBERCITOYENNETÉ ET MONDIALISATION',
    type: 'cours',
    badge: 'Partie 3 • Intégration Africaine & Monde',
    description: 'Changement climatique au Sahel, érosion côtière, Grande Muraille Verte, lutte contre les fake news et le cyberharcèlement, devoirs du citoyen du monde.',
    lessonData: LESSON_8_CIVIQUE_3EME
  }
];
'''

with open('src/data/courses_3eme_education_civique.ts', 'w', encoding='utf-8') as f:
    f.write(civique_3eme_code)

print("Created src/data/courses_3eme_education_civique.ts successfully.")
